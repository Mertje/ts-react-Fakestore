import FakeProductAPI from "../../interface/FakeProductApi";

export default function SingleProduct(props: any) {
  const item: FakeProductAPI = props.item;
  const { image, title, price } = item;

  const divClass = `border-gray-300 ${ props.divClass}`
  const imgClass = `mx-auto object-scale-down h-48 w-48 ${ props.imgClass}`;
  const spanClass = `p-5 ${props.spanClass}`;
  const innerDivClass = `${props.innerDivClass}`
  return (
    <div className={divClass}>
      <img className={imgClass} src={image} alt={title} />
      <span className={spanClass}> {title} </span>
      <div className={innerDivClass}> ${price} </div>
    </div>
  );
}
