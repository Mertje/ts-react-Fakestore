import FakeProductAPI from "../../../interface/FakeProductApi";
import SingleProduct from "./index";

export default function Grid(props: any) {
  const products: FakeProductAPI[] = props.prod;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {products!.map((product: FakeProductAPI) => (
        <div
          className="text-center mt-5 border rounded border-gray-300 px-3 pt-3"
          key={product.id}
        >
          <SingleProduct
            item={product}
            imgClass="h-60 w-96 mb-5 mx-auto"
            innerDivClass="text-center flex-col"
            titleClass="h-20"
            pricesCLass="mb-2"
          />
        </div>
      ))}
    </div>
  );
}
