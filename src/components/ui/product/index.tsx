import { useContext } from "react";
import FakeProductAPI from "../../../interface/FakeProductApi";
import { cartAdded } from "../../../context/productsContext";

export default function SingleProduct(props: any) {
  const item: FakeProductAPI = props.item;
  const { image, title, price } = item;
  const [, setAddCart] = useContext(cartAdded);

  return (
    <>
      <img
        className={`${props.imgClass} object-scale-down`}
        src={image}
        alt={title}
      />
      <div className={`${props.innerDivClass}`}>
        <p className={`${props?.titleClass} font-semibold`}> {title} </p>
        <p className={`${props.pricesCLass}`}>${price} </p>

        <button
          type="button"
          className="bg-green-500 hover:bg-green-600 py-2 px-12 rounded-full mb-4 text-zinc-50 font-semibold"
          onClick={() => setAddCart((oldArr: any) => [...oldArr, item])}
        >
          Add to cart
        </button>
      </div>
    </>
  );
}
