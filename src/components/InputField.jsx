
export default function InputField({ onBlur, inputLabelName, inputName, inputId, inputType,inputPlaceholder }) {

    
  return (
    <div className="flex flex-shrink-0 md:basis-1/3  flex-col space-x-2 mb-2">
      <label className="p-2" htmlFor={inputName}>{inputLabelName}</label>
      <input
        onBlur={onBlur}
        className="border-solid rounded-md p-2 "
        type={inputType}
        id={inputId}
        name={inputName}
        placeholder={inputPlaceholder}
      />
    </div>
  );
}
