import mongoose from 'mongoose';

//const { Schema } = mongoose; //the same as line #4
const Schema = mongoose.Schema;
const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    index: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    //select: false,
  },
  name: String,
});
// user.Schema.index({email: 1}, {unique: true}); use this line if you need to create user with unique email but db has no index for it
export default mongoose.model('User', userSchema);
