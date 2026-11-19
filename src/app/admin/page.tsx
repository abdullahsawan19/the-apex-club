import { connectToDB } from "@/lib/db";
import Booking from "@/models/Booking";
import User from "@/models/User";

export default async function AdminOverviewPage() {
  await connectToDB();

  const startOfDay = new Date();
  startOfDay.setHours(0, 0, 0, 0);

  const endOfDay = new Date();
  endOfDay.setHours(23, 59, 59, 999);

  const [totalUsers, totalDrivers, todaysBookingsCount] = await Promise.all([
    User.countDocuments().catch(() => 0),
    User.countDocuments({ role: "Driver" }).catch(() => 0),
    Booking.countDocuments({
      createdAt: {
        $gte: startOfDay,
        $lte: endOfDay,
      },
    }).catch(() => 0),
  ]);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight">
          Admin Overview
        </h1>
        <p className="text-muted-foreground mt-1">
          Monitor platform metrics, users, and today&apos;s bookings.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-6 bg-card border border-border rounded-xl shadow-sm">
          <h3 className="text-sm font-medium text-muted-foreground">
            Total Users
          </h3>
          <p className="text-3xl font-bold mt-2 text-primary">{totalUsers}</p>
        </div>

        <div className="p-6 bg-card border border-border rounded-xl shadow-sm">
          <h3 className="text-sm font-medium text-muted-foreground">
            Today&apos;s Bookings
          </h3>
          <p className="text-3xl font-bold mt-2 text-amber-500">
            {todaysBookingsCount}
          </p>
        </div>

        <div className="p-6 bg-card border border-border rounded-xl shadow-sm">
          <h3 className="text-sm font-medium text-muted-foreground">
            Active Drivers
          </h3>
          <p className="text-3xl font-bold mt-2 text-blue-500">
            {totalDrivers}
          </p>
        </div>
      </div>

      <div className="p-6 bg-card border border-border rounded-xl shadow-sm space-y-4">
        <h2 className="text-xl font-semibold">Quick Actions</h2>
        <p className="text-sm text-muted-foreground">
          Select an option from the sidebar to manage the vehicle fleet, review
          user bookings, or block maintenance dates.
        </p>
      </div>
    </div>
  );
}
