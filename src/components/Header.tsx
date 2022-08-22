import { useContext } from "react";
import { cartAdded } from "../context/productsContext";
import IconButton from "./ui/button/icon" 

export default function Header() {
  const [addCart,] = useContext(cartAdded);

  return (
    <div className="bg-gray-50 px-5 pt-2 pb-3">
      <IconButton addCart={addCart} />
    </div>
  );
}
