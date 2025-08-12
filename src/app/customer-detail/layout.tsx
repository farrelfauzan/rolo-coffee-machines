export default function CustomerDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen m-auto">
      {children}
    </div>
  );
}
