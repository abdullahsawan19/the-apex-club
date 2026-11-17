import mongoose, { Document, models, Schema } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password?: string;
  image?: string;
  role: "Driver" | "Admin";
  experienceTier: "Novice" | "Intermediate" | "Pro";
}

const UserSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, select: false },
    image: { type: String },
    role: {
      type: String,
      enum: ["Driver", "Admin"],
      default: "Driver",
    },
    experienceTier: {
      type: String,
      enum: ["Novice", "Intermediate", "Pro"],
      default: "Novice",
    },
  },
  { timestamps: true },
);

const User = models.User || mongoose.model<IUser>("User", UserSchema);

export default User;
