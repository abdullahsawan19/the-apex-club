export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
      <p className="text-muted-foreground">
        Welcome to the administrative control panel. Here you can monitor
        platform activities.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-card border border-border rounded-xl shadow-sm">
          <h3 className="text-sm font-medium text-muted-foreground">
            Total Drivers
          </h3>
          <p className="text-3xl font-bold mt-2">128</p>
        </div>
        <div className="p-6 bg-card border border-border rounded-xl shadow-sm">
          <h3 className="text-sm font-medium text-muted-foreground">
            Active Sessions
          </h3>
          <p className="text-3xl font-bold mt-2">24</p>
        </div>
        <div className="p-6 bg-card border border-border rounded-xl shadow-sm">
          <h3 className="text-sm font-medium text-muted-foreground">
            System Status
          </h3>
          <p className="text-3xl font-bold text-emerald-500 mt-2">Healthy</p>
        </div>
      </div>
    </div>
  );
}
