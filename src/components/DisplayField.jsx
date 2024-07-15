export default function DisplayField({
  displayLabelName,
  displayName,
  displayId,
  children,
}) {
  return (
    <div className="flex items-baseline flex-row space-x-2 mb-2">
      <span className="flex-grow"></span>
      <span className="flex-shrink-0">
      <label className="p-2" htmlFor={displayName}>
          {displayLabelName}
        </label>
        <div
          className="border-solid rounded-md justify-center"
          id={displayId}
          name={displayName}
        >
          {children}
        </div>
      </span>
    </div>
  );
}
