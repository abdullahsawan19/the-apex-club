interface EditCarPageProps {
  params: Promise<{ carId: string }>;
}

export default async function EditCarPage({ params }: EditCarPageProps) {
  const { carId } = await params;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight">Edit Vehicle</h1>
        <p className="text-muted-foreground mt-1">
          Vehicle ID: <span className="font-mono text-foreground">{carId}</span>
        </p>
      </div>

      <div className="p-6 bg-card border border-border rounded-xl">
        <p className="text-sm text-muted-foreground">
          Car details form and delete action will go here.
        </p>
      </div>
    </div>
  );
}
