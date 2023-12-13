import { getModelForClass, prop } from '@typegoose/typegoose';
import { Types } from 'mongoose';

export class Broken {
  @prop({ required: true })
  _id: Types.ObjectId;

  @prop()
  name?: string;
}

export const BrokenModel = getModelForClass(Broken);
