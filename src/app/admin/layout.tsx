import { auth } from "@/auth";
import LogoutButton from "@/components/LogoutButton";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session || session.user?.role !== "Admin") {
    redirect("/");
  }

  return (
    <div className="min-h-screen flex bg-background text-foreground">
      <aside className="w-64 border-r border-border bg-card p-6 flex flex-col justify-between">
        <div className="space-y-6">
          <Link href="/admin" className="font-bold text-xl text-primary block">
            Apex Admin
          </Link>
          <nav className="space-y-2">
            <Link
              href="/admin"
              className="block px-3 py-2 rounded-md hover:bg-muted font-medium transition-colors"
            >
              Overview
            </Link>
            <Link
              href="/admin/users"
              className="block px-3 py-2 rounded-md hover:bg-muted font-medium transition-colors"
            >
              Manage Users
            </Link>
            <Link
              href="/"
              className="block px-3 py-2 rounded-md hover:bg-muted text-muted-foreground transition-colors"
            >
              ← Back to Website
            </Link>
          </nav>
        </div>

        <div className="pt-4 border-t border-border">
          <p className="text-xs text-muted-foreground mb-2 truncate">
            {session.user?.email}
          </p>
          <LogoutButton />
        </div>
      </aside>

      <main className="flex-1 p-8 bg-background overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
