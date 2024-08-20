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
  },
  favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Favorite' }]
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
    password: passwordComplexity({
      min: 8,
      max: 40,
      lowerCase: 0,
      upperCase: 0,
      numeric: 0,
      symbol: 0,
      requirementCount: 2
    }).required().label('Password')
  });
  return schema.validate(data);
};

module.exports = { User, validate };