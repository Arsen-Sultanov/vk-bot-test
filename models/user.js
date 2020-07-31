const { Schema, connection } = require('mongoose');

const User = new Schema({
  vkId: { type: Number, required: true },
  firstName: { type: String, require: true, default: 'no name' },
  lastName: { type: String, require: true, default: 'no last name' },
  sex: {
    type: Number,
    enum: [ 0, 1, 2 ],
    required: true,
    default: 0
  }
});

module.exports = connection.model('user', User);
