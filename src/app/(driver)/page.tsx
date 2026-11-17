import { auth } from "@/auth";

export default async function DriverHomePage() {
  const session = await auth();

  return (
    <div className="flex flex-col items-center justify-center py-16 space-y-4">
      <h1 className="text-4xl font-extrabold tracking-tight">
        Welcome to The Apex Club
      </h1>
      <p className="text-muted-foreground text-lg">
        {session
          ? `Hello, ${session.user?.name}. Enjoy your ride experience!`
          : "Please sign in to access your dashboard."}
      </p>
    </div>
  );
}
