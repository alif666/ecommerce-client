import Dropzone from "react-dropzone";

export default function InputImageField({ labelHeader, maxFiles, onDrop, children }) {
  return (
    <Dropzone onDrop={onDrop} maxFiles={maxFiles}>
      {({ getRootProps, getInputProps }) => (
        <section className="w-full">
          <div
            {...getRootProps()}
            className="border-dashed border-2 border-gray-300 p-4 text-center w-full"
          >
            <input {...getInputProps()} />
            <p>{labelHeader}</p>
            <div className="flex flex-wrap justify-center mt-4">{children}</div>
          </div>
        </section>
      )}
    </Dropzone>
  );
}
