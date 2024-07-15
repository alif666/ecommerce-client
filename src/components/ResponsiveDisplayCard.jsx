export default function ResponsiveDisplayCard({ labelHeader,children }) {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
    <h2 className="text-2xl font-bold tracking-tight text-gray-900">{labelHeader}</h2>
      {children}
  </div>
 
  );
}
