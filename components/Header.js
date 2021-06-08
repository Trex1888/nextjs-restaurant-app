import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <header>
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-1">
        <div className="flex items-center mt-1 flex-grow sm:flex-grow-0">
          <Image
            onClick={() => router.push("/")}
            src="https://www.hwcdsb.ca/418772.jpg"
            width={75}
            height={80}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>

        <div className="flex text-white items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          {/* <div className="link">
            <p>HELLO WELCOME TO</p>
            <p className="font-extrabold md:text-sm">Pete's Pizzeria</p>
          </div> */}
        </div>

        <div
          className="items-center hidden sm:flex h-10 rounded-md flex-grow 
             bg-yellow-400 hover:bg-yellow-500 cursor-pointer"
        >
          <input
            type="text"
            placeholder="Search Pete's Pizzeria"
            className="p-2 w-6 h-full flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
          />
          <SearchIcon className="h-12 p-4" />
        </div>

        <div className="flex text-white items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          {" "}
          <div className="link ">
            <p>"Sign In"</p>
            <p className="font-extrabold md:text-sm">Account & Orders</p>
          </div>
          <div className="link ">
            <p>Specials</p>
            <p className="font-extrabold md:text-sm">& Deals</p>
          </div>
          <div
            onClick={() => router.push("/checkout")}
            className="relative link flex items-center"
          >
            <span
              className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400
                 text-center rounded-full text-black font-bold"
            >
              {/* {items.length} */}
              <p>1</p>
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline font-extrabold md:text-sm mt-2">
              Cart
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
        <p className="link flex items-center">
          <MenuIcon className="h-6 mr-1.5" />
          All
        </p>
        <p className="link">Appetizers</p>
        <p className="link">Pizza</p>
        <p className="link">Pasta</p>
        <p className="link ">Appetizers</p>
        <p className="link hidden lg:inline-flex">Sandwiches</p>
        <p className="link hidden lg:inline-flex">Steaks</p>
        <p className="link hidden lg:inline-flex">Seafood</p>
        <p className="link hidden lg:inline-flex">Salads</p>
        <p className="link hidden lg:inline-flex">Chicken</p>
        <p className="link hidden lg:inline-flex">Beverages</p>
        <p className="link hidden lg:inline-flex">Deserts</p>
        <p className="link hidden lg:inline-flex">Kids Menu</p>
        <p className="link hidden lg:inline-flex">Nightly Special</p>
        <p className="link hidden lg:inline-flex">Adult Drinks</p>
      </div>
    </header>
  );
}

export default Header;
