import mongoose, { Document, models, Schema } from "mongoose";

export interface ICar extends Document {
  name: string;
  brand: string;
  horsepower: number;
  transmission: "Manual" | "Automatic" | "PDK";
  pricePerSession: number;
  imageUrl: string;
  category: "Classic" | "Sports" | "Supercar";
  isAvailable: boolean;
}

const CarSchema = new Schema<ICar>(
  {
    name: { type: String, required: true },
    brand: { type: String, required: true },
    horsepower: { type: Number, required: true },
    transmission: {
      type: String,
      enum: ["Manual", "Automatic", "PDK"],
      required: true,
    },
    pricePerSession: { type: Number, required: true },
    imageUrl: { type: String, required: true },
    category: {
      type: String,
      enum: ["Classic", "Sports", "Supercar"],
      required: true,
    },
    isAvailable: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  },
);

const Car = models.Car || mongoose.model<ICar>("Car", CarSchema);

export default Car;
