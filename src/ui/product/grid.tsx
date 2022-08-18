import FakeProductAPI from "../../interface/FakeProductApi";
import SingleProduct from "./index";

export default function Grid(props: any) {
  const loading: boolean = props.load;
  const products: FakeProductAPI[] = props.prod;

  const grid = "grid grid-cols-1 lg:grid-cols-3 gap-4";

  const childImageClass = 'h-60 w-96 mb-5';
  const childSpamClass = 'font-semibold';
  const childDivClass ='text-center mt-5';
  const childInnerDivClass = 'text-center';

  return (
    <div className={grid}>
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
