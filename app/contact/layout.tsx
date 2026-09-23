// app/layout.tsx

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <>
      <main className="pt-8 max-w-[1000px]">
        {children}
      </main>
    </>
    
  );
}