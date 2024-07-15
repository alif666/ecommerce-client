import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import LinkButton from "./LinkButton";
import MobileNav from "./MobileNav";

const navigationItems = [
  { name: "product", href: "product/add", current: true },
  { name: "users", href: "register", current: false },
];
export default function Navigations() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="text-white dark:text-dark bg-gradient-to-gray-700">
      <div className="w-full mr-3 p-2 hidden md:flex items-center">
        <div className="flex-shrink-0">
          <img
            className="h-12 dark:hidden"
            src="/Logo_Dark.png"
            alt="Your Company"
          />
          <img
            className="h-12 hidden dark:block"
            src="/Logo.png"
            alt="Your Company"
          />
        </div>
        <div className="flex-grow"></div>
        <div className="flex-shrink-0 p-2 space-x-4 uppercase rounded-md px-3 py-2 text-sm font-medium">
          {navigationItems.map((item) => (
            <LinkButton key={item.name} to={item.href}>
              {item.name}
            </LinkButton>
          ))}
        </div>
      </div>

      <div className="w-full flex items-center md:hidden">
        <div className="flex-shrink-0">
          <img
            className="h-8 dark:hidden"
            src="/Logo_Dark.png"
            alt="Your Company"
          />
          <img
            className="h-8 hidden dark:block"
            src="/Logo.png"
            alt="Your Company"
          />
        </div>
        <div className="flex-grow"></div>
        <div className="flex-shrink-0 flex-nowrap">
          {isOpen ? (
            <>
              <XMarkIcon
                onClick={() => setIsOpen(false)}
                className="cursor-pointer hover:shadow-lg focus:shadow-lg transition-shadow block h-6 w-6 m-2"
                aria-hidden="true"
              />
              <MobileNav navigationItems={navigationItems}/>
            </>
          ) : (
            <Bars3Icon
              onClick={() => setIsOpen(true)}
              className="cursor-pointer hover:shadow-lg focus:shadow-lg transition-shadow block h-6 w-6 m-2"
              aria-hidden="true"
            />
          )}
        </div>
      </div>
    </div>
  );
}
