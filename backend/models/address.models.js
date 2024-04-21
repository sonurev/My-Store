import mongoose from 'mongoose';

// Define the schema for an individual address within the array
const addressDetailSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  mobileNumber: {
    type: String,
    required: true,
    minlength: 10,
    unique: true // Be careful with unique here, it might not behave as expected in subdocuments
  },
  pinCode: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true
  },
  town: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  isHome: {
    type: Boolean,
    required: true,
    default: true
  },
  isDefaultAddress: {
    type: Boolean,
    required: true,
    default: false
  },
}, { _id: true }); // Include _id if you need a unique identifier for each address

// Define the main address schema
const addressSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  addresses: [addressDetailSchema] // Use the addressDetailSchema for addresses array
});

const Address = mongoose.model('Address', addressSchema);

export default Address;
