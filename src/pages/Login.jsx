import { useState } from "react";
import InputField from "../components/InputField";
import ResponsiveCard from "../components/ResponsiveCard";


export default function Login() {
  const [formData, setFormData]=useState({
    emailId:'',
    password:'',
  });

  function HandleOnBlur(e){
      const {name, value} =e.target;
      setFormData({
        ...formData,
        [name]:value,
      });
  }

  function HandleOnSubmit(e){
    e.preventDefault();
    console.log("HANDLEONSUBMIT")
    console.log(formData);
  }

  return (
  <form onSubmit={HandleOnSubmit}>
    <ResponsiveCard labelheader={"Sign In"}>
          <InputField onBlur={HandleOnBlur} inputId={"emailId"} inputName={"emailId"} inputLabelName={"Email Id: "} inputPlaceholder={"Enter Email Id"} inputType={"email"}/>
          <InputField onBlur={HandleOnBlur} inputId={"password"} inputName={"password"} inputLabelName={"Password: "} inputPlaceholder={"*******"} inputType={"password"}/>         
    </ResponsiveCard>
  </form>
  )
}
