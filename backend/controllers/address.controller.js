import { AddressSchema } from "../types.js";
import Address from "../models/address.models.js";

const getAddress = async (req, res, next) => {

  try {
    const { userId } = req.params; // Assuming the user ID is passed in the route params as 'userId'

    const addresses = await Address.find({ userId });

    if (!addresses || addresses.length === 0) {
      res.status(404);
      throw new Error('No addresses found for the user!');
    }

    res.status(200).json(addresses);
  } catch (error) {
    next(error);
  }
};



const createAddress = async (req, res, next) => {


  const addressPayload = req.body;
  const parsedPayload = AddressSchema.safeParse(addressPayload);

  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "you sent the wrong inputs"
    })
    return;
  }

  try {
    const { fullName,
      mobileNumber,
      pinCode,
      address,
      town,
      city,
      state,
      isHome,
      isDefaultAddress } =
      req.body;
    console.log(req.file);
    const newAddress = new Address({
      user: req.user._id,
      fullName,
      mobileNumber,
      pinCode,
      address,
      town,
      city,
      state,
      isHome,
      isDefaultAddress
    });
    const createdAddress = await newAddress.save();

    res.status(200).json({ message: 'Address created', createdAddress });
  } catch (error) {
    next(error);
  }

};

export {
  createAddress,
  getAddress
}