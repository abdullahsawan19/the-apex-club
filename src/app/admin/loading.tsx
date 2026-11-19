export default function AdminLoading() {
  return (
    <div className="space-y-8 animate-pulse">
      <div className="space-y-2">
        <div className="h-8 w-56 rounded-lg bg-muted" />
        <div className="h-4 w-80 rounded-md bg-muted" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="h-28 rounded-xl border border-border bg-card" />
        <div className="h-28 rounded-xl border border-border bg-card" />
        <div className="h-28 rounded-xl border border-border bg-card" />
        <div className="h-28 rounded-xl border border-border bg-card" />
      </div>

      <div className="h-64 rounded-xl border border-border bg-card" />
    </div>
  );
}
