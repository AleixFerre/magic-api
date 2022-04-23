import { Schema, model } from 'mongoose';

const commandsSchema = new Schema({
  name: {
    type: String,
    require: true,
    unique: true,
  },
  description: {
    type: String,
    require: true,
  },
  type: {
    type: String,
    require: true,
  },
  usage: {
    type: String,
    require: true,
  },
  aliases: {
    type: Array,
  },
});

export const commandsModel = model('commands', commandsSchema);
