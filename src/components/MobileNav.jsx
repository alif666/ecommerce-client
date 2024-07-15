import LinkButton from "./LinkButton";

export default function MobileNav({ navigationItems }) {
  return (
    <div className="fixed inset-x-0 bottom-1/2 flex justify-start bg-blue bg-opacity-100 drop-shadow-md drop-shadow-white">
      <div className="bg-blue-500 bg-opacity-25 p-4 rounded-t-lg">
        <div className="flex flex-col items-start space-y-4">
          {navigationItems.map((item) => (
            <LinkButton
              key={item.name}
              to={item.href}
              className="text-white hover:text-gray-300"
            >
              {item.name}
            </LinkButton>
          ))}
        </div>
      </div>
    </div>
  );
}
