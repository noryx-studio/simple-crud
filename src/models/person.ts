import { Schema, model, Document } from 'mongoose';

export interface IPerson extends Document {
  name: string;
  address: string;
  phone: number;
}

const personSchema = new Schema<IPerson>({
  name: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: Number, required: true }
}, { timestamps: true });

export default model<IPerson>('Person', personSchema);