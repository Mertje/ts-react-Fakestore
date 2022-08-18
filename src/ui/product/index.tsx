import FakeProductAPI from "../../interface/FakeProductApi";

export default function SingleProduct(props: any) {
  const item: FakeProductAPI = props.item;
  const { image, title, price } = item;

  const divClass = `border-gray-300 ${ props.divClass}`
  const imgClass = `mx-auto object-scale-down ${ props.imgClass}`;
  const spanClass = `${props.spanClass}`;
  const innerDivClass = `${props.innerDivClass}`

  return (
    <div className={divClass}>
      <img className={imgClass} src={image} alt={title} />
      <span className={spanClass}> {title} </span>
      <div className={innerDivClass}> ${price} </div>
    </div>
  );
}
