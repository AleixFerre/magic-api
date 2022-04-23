import { Schema, model } from 'mongoose';

const statsSchema = new Schema({
  users: {
    type: Number,
    require: true,
  },
  servers: {
    type: Number,
    require: true,
  },
  commands: {
    type: Number,
    require: true,
  },
});

export const statsModel = model('stats', statsSchema);
