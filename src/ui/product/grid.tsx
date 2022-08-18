import FakeProductAPI from "../../interface/FakeProductApi";
import SingleProduct from "./index";

export default function Grid(props: any) {
  const loading: boolean = props.load;
  const products: FakeProductAPI[] = props.prod;
  const grid = 'grid grid-cols-1 lg:grid-cols-3 gap-4'
  const childImageClass = 'h-48 w-96'
  
  return (
    <div className={grid}>
      {!loading &&
        products!.map((prod: FakeProductAPI) => (
          <div key={prod.id}>
            <SingleProduct item={prod} />
          </div>
        ))}
    </div>
  );
}