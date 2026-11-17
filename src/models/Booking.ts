import mongoose, { Document, models, Schema } from "mongoose";

export interface IBooking extends Document {
  user: mongoose.Types.ObjectId;
  car: mongoose.Types.ObjectId;
  bookingDate: Date;
  totalPrice: number;
  status: "Pending" | "Confirmed" | "Completed" | "Cancelled";
  stripeSessionId?: string;
}

const BookingSchema = new Schema<IBooking>(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    car: { type: Schema.Types.ObjectId, ref: "Car", required: true },
    bookingDate: { type: Date, required: true },
    totalPrice: { type: Number, required: true },
    status: {
      type: String,
      enum: ["Pending", "Confirmed", "Completed", "Cancelled"],
      default: "Pending",
    },
    stripeSessionId: { type: String },
  },
  { timestamps: true },
);

const Booking =
  models.Booking || mongoose.model<IBooking>("Booking", BookingSchema);

export default Booking;
