import { auth } from "@/auth";
import LogoutButton from "@/components/LogoutButton";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function DriverLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="border-b border-border px-6 py-4 flex items-center justify-between bg-card">
        <Link
          href="/"
          className="font-bold text-xl tracking-wider text-primary"
        >
          THE APEX CLUB
        </Link>
        <div className="flex items-center gap-4">
          {session ? (
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium">
                {session.user?.name} ({session.user?.role})
              </span>
              {session.user?.role === "Admin" && (
                <Button asChild variant="outline" size="sm">
                  <Link href="/admin">Dashboard</Link>
                </Button>
              )}
              <LogoutButton />
            </div>
          ) : (
            <div className="flex gap-2">
              <Button asChild size="sm">
                <Link href="/login">Sign In</Link>
              </Button>
              <Button asChild variant="outline" size="sm">
                <Link href="/register">Register</Link>
              </Button>
            </div>
          )}
        </div>
      </header>

      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
