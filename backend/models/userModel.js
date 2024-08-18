const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const passwordComplexity = require('joi-password-complexity');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

userSchema.methods.generateAuthToken = function() {
  const token = jwt.sign({_id: this._id}, process.env.JWTKEY, { expiresIn: '7d' })
  return token
};

const User = mongoose.model('User', userSchema);

const validate = (data) => {
  const schema = Joi.object({
    username: Joi.string().required().label('Username'),
    email: Joi.string().email().required().label('Email'),
    password: passwordComplexity().required().label('Password')
  });
  return schema.validate(data);
};

module.exports = { User, validate };

// module.exports = mongoose.model('User', userSchema)