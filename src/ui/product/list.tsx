import FakeProductAPI from "../../interface/FakeProductApi";
import SingleProduct from "./index";

export default function List(props: any) {
  const loading: boolean = props.load;
  const products: FakeProductAPI[] = props.prod;

  const list = "grid grid-cols-1  ";

  const childDivClass = "border-b p-3 grid grid-rows-3 grid-flow-col";
  const childImageClass = "row-span-3 ml-0 h-48 w-48 ";
  const childSpamClass = "col-span-2";
  const childInnerDivClass = "p-5";

  return (
    <div className={list}>
      {!loading &&
        products!.map((prod: FakeProductAPI) => (
          <div key={prod.id}>
            <SingleProduct
              item={prod}
              divClass={childDivClass}
              imgClass={childImageClass}
              spanClass={childSpamClass}
              innerDivClass={childInnerDivClass}
            />
          </div>
        ))}
    </div>
  );
}
