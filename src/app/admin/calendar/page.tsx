export default function AdminCalendarPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight">
          Blocked Dates
        </h1>
        <p className="text-muted-foreground mt-1">
          Block track days for maintenance or events so drivers cannot book
          them.
        </p>
      </div>

      <div className="p-6 bg-card border border-border rounded-xl">
        <p className="text-sm text-muted-foreground">
          Maintenance date blocker will be implemented here.
        </p>
      </div>
    </div>
  );
}
