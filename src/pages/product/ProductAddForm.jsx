import InputField from "../../components/InputField";
import InputImageField from "../../components/InputImageField";
import ResponsiveCard from "../../components/ResponsiveCard";
import { useProduct } from "../../providers/hooks";

export default function ProductAddForm() {
  const {HandleOnDrop, HandleOnBlur, HandleOnSubmit,formData} = useProduct();
  return (
    <>
    <form onSubmit={HandleOnSubmit}>
      <ResponsiveCard labelheader={"Add New Product"}>

        <InputField inputId={"name"} inputLabelName={"Product Name: "} inputName={"name"} inputType={"text"} onBlur={HandleOnBlur}/>
        <InputField inputId={"price"} inputLabelName={"Product Price "} inputName={"quantity"} inputType={"number"} onBlur={HandleOnBlur}/>
        <InputField inputId={"quantity"} inputLabelName={"Product Quantity: "} inputName={"quantity"} inputType={"number"} onBlur={HandleOnBlur}/>
        <InputImageField labelHeader={"upload product photos (3)"} maxFiles={3} onDrop={HandleOnDrop}>
        {formData.image.length === 0 && (
                <img src="/placeholder.png" alt="Placeholder" className="h-20 w-20 m-2" />
                )}
                {formData.image.map((file, index) => (
                <img
                    key={index}
                    src={URL.createObjectURL(file)}
                    alt={`Preview ${index}`}
                    className="h-20 w-20 m-2"
                />
                ))}

        </InputImageField>
      </ResponsiveCard>
      </form>
    </>
  )
}
