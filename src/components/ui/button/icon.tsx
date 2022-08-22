import { ShoppingCartIcon } from "@heroicons/react/outline";
import OpenCart from "./openCart";
import { useState } from "react";

export default function IconButton( {addCart}: any){
    const [showSidebar, setShowSidebar] = useState(false);


    return (
        <div className="relative w-14 h-14 ml-auto mr-0 ">
        <OpenCart cartItems={addCart} showSidebar={showSidebar} setShowSidebar={setShowSidebar}>
        <ShoppingCartIcon onClick={() => setShowSidebar(true)} className="p-2 bg-white text-blue-500 rounded-full border border-blue-500 hover:bg-blue-500 hover:text-white" />
        <div className="text-white bg-red-600 align-middle justify-center flex rounded-full absolute w-7 h-7 bottom-0 right-0  translate-x-1/4 translate-y-1/4">
          {addCart.length}
        </div>
        </OpenCart>
      </div>
    )
}