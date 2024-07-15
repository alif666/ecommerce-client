import InputField from "../../components/InputField";
import ResponsiveCard from "../../components/ResponsiveCard";
import InputImageField from "../../components/InputImageField";
import { useUser } from "../../providers/hooks";

export default function RegisterNew() {
  const { HandleOnBlur, HandleOnDrop, HandleOnSubmit, formData } = useUser();

  return (
    <form onSubmit={HandleOnSubmit}>
      <ResponsiveCard labelheader={"Register"}>
        <InputImageField labelHeader={"Upload Photo"} onDrop={HandleOnDrop} maxFiles={1}>
          {formData.image.length === 0 && (
            <img
              src="/placeholder.png"
              alt="Placeholder"
              className="h-20 w-20 m-2"
            />
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
        <InputField
          onBlur={HandleOnBlur}
          inputId={"fname"}
          inputName={"fname"}
          inputLabelName={"First Name"}
          inputPlaceholder={"Enter First Name"}
          inputType={"text"}
        />
        <InputField
          onBlur={HandleOnBlur}
          inputId={"lname"}
          inputName={"lname"}
          inputLabelName={"Last Name"}
          inputPlaceholder={"Enter Last Name"}
          inputType={"text"}
        />
        <InputField
          onBlur={HandleOnBlur}
          inputId={"contactno"}
          inputName={"contactno"}
          inputLabelName={"Contact"}
          inputPlaceholder={"Enter Contact Number"}
          inputType={"contact"}
        />
        <InputField
          onBlur={HandleOnBlur}
          inputId={"emailId"}
          inputName={"emailId"}
          inputLabelName={"Email Id: "}
          inputPlaceholder={"Enter Email Id"}
          inputType={"email"}
        />
        <InputField
          onBlur={HandleOnBlur}
          inputId={"password"}
          inputName={"password"}
          inputLabelName={"Password: "}
          inputPlaceholder={"*******"}
          inputType={"password"}
        />
      </ResponsiveCard>
    </form>
  );
}
