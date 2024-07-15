export default function DisplayField({
  displayLabelName,
  displayName,
  displayId,
  children,
}) {
  return (
    <div className="flex flex-shrink-0 items-baseline flex-row space-x-2 mb-2">
      <span>
        <label className="p-2" htmlFor={displayName}>
          {displayLabelName}
        </label>
      </span>
      <span className="flex-shrink-0">
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
