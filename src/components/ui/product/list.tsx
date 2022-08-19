import FakeProductAPI from "../../../interface/FakeProductApi";
import SingleProduct from "./index";

export default function List(props: any) {
  const products: FakeProductAPI[] = props.prod;

  return (
    <div className="grid grid-cols-1">
      {products!.map((prod: FakeProductAPI) => (
        <div className="border-b p-3 flex flex" key={prod.id}>
          <SingleProduct
            item={prod}
            imgClass="col-6 ml-0 h-48 w-48"
            titleClass=" m-0"
            innerDivClass="pt-5 ml-5 my-0 h-fit w-full"
            pricesCLass="pt-5"
          />
        </div>
      ))}
    </div>
  );
}
