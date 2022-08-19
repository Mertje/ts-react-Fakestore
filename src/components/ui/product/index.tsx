import FakeProductAPI from "../../../interface/FakeProductApi";

export default function SingleProduct(props: any) {
  const item: FakeProductAPI = props.item;
  const { image, title, price } = item;

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
      </div>
    </>
  );
}
