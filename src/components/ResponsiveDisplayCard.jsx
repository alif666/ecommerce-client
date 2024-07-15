export default function ResponsiveDisplayCard({labelheader,children}) {
  return (
<div className="items-center  text-white dark:text-gray-dark rounded-md shadow-md bg-gray-100 dark:bg-gray-800">
    <div className="bg-dark dark:bg-white p-2 border-b-2 border-gray-900 dark:border-gray-100 text-pretty text-2xl flex flex-col md:flex-row justify-center">
        {labelheader}
    </div>
    <div className="flex flex-row flex-shrink-0 flex-wrap items-center">
        {children}
    </div>
</div>

  )
}
