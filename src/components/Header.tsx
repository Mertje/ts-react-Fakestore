import { useContext } from "react";
import { cartAdded } from "../context/productsContext";

import { ShoppingCartIcon } from "@heroicons/react/outline";

export default function Header() {
  const [addCart, setAddCart] = useContext(cartAdded);

  return (
    <div className="bg-gray-50 ">
      <div className="relative w-14 h-14">
        <ShoppingCartIcon className="p-2 bg-white text-blue-500 rounded-full border border-blue-500 hover:bg-blue-500 hover:text-white" />
        <div className="text-white bg-red-600 align-middle justify-center flex rounded-full absolute w-7 h-7 bottom-0 right-0  translate-x-1/4 translate-y-1/4">
          {addCart.length}
        </div>
      </div>
    </div>
  );
}
