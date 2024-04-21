import { AddressSchema } from "../types.js";
import Address from "../models/address.models.js";
import mongoose from "mongoose"

const getAddress = async (req, res, next) => {
  try {
    const { userId } = req.params;  // Extracting userId from params
    const userAddress = await Address.findOne({ user: userId });

    if (!userAddress) {
      return res.status(404).json({ message: 'No addresses found for the user!' });
    }

    res.status(200).json(userAddress.addresses);
  } catch (error) {
    console.log("error in get Address" + error);
  }
};




const createAddress = async (req, res, next) => {
  const addressPayload = req.body;
  const { userId } = req.params;


  if (!userId || !mongoose.Types.ObjectId.isValid(userId)) {
    return res.status(400).json({ message: 'Invalid or missing user ID.' });
  }

  const parsedPayload = AddressSchema.safeParse(addressPayload);
  if (!parsedPayload.success) {
    return res.status(400).json({ message: "Invalid address data provided." });
  }

  try {
    const userAddress = await Address.findOne({ user: userId });

    if (userAddress) {
      userAddress.addresses.push(addressPayload);
      await userAddress.save();
      res.status(201).json({ message: 'Address added to your address book', address: userAddress });
    } else {
      const newAddressBook = new Address({
        user: userId,
        addresses: [addressPayload]
      });
      const createdAddressBook = await newAddressBook.save();
      res.status(201).json({ message: 'Address book created with the new address', address: createdAddressBook });
    }
  } catch (error) {
    console.error("Error in createAddress:", error);
    res.status(500).json({ message: "Failed to create address due to server error" });
  }
};



export {
  createAddress,
  getAddress
}