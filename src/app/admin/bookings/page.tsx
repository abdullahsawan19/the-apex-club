import { connectToDB } from "@/lib/db";

export default async function AdminCarsPage() {
  await connectToDB();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">
            Manage Cars
          </h1>
          <p className="text-muted-foreground mt-1">
            Add, update, and manage track vehicles in The Apex Club fleet.
          </p>
        </div>
      </div>

      <div className="p-6 bg-card border border-border rounded-xl">
        <p className="text-sm text-muted-foreground">
          Fleet list and add-car form will be connected here once Car model is
          ready.
        </p>
      </div>
    </div>
  );
}
