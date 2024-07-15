import FormButtonBlue from "./FormButtonBlue"
export default function ResponsiveCard({labelheader,children}) {
  return (
<div className="items-center  text-white dark:text-gray-dark rounded-md shadow-md bg-gray-100 dark:bg-gray-800">
    <div className="bg-dark dark:bg-white p-2 border-b-2 border-gray-900 dark:border-gray-100 text-pretty text-2xl flex flex-col md:flex-row justify-center">
        {labelheader}
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-2">
        {children}
    </div>
    <div className="flex p-2 flex-col-reverse md:flex-row md:justify-end">
        <FormButtonBlue>Submit</FormButtonBlue>
    </div>
</div>

  )
}
