import { Button } from "./ui/button";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="hidden lg:block">
      <nav>
        <ul className="flex space-x-6">
          <li>
            <Link href="#destination">
              <Button
                variant="ghost"
                className="text-gray-600 hover:text-teal-600"
              >
                Destinations
              </Button>
            </Link>
          </li>
          <li>
            <Link href="#about">
              <Button
                variant="ghost"
                className="text-gray-600 hover:text-teal-600"
              >
                About Us
              </Button>
            </Link>
          </li>
          <li>
            <Link href="#experiences">
              <Button
                variant="ghost"
                className="text-gray-600 hover:text-teal-600"
              >
                Experiences
              </Button>
            </Link>
          </li>

          <li>
            <Link href="#contact">
              <Button
                variant="ghost"
                className="text-gray-600 hover:text-teal-600"
              >
                Contact
              </Button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
