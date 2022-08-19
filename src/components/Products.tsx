import useFetch from "../hooks/useFetch";
import ProductUrlProps from "../interface/ProductUrlProps";
import Grid from "./ui/product/grid";
import List from "./ui/product/list";

export default function Product({ url }: ProductUrlProps) {
  const { data: products, loading } = useFetch(url);

  return (
    <>
      <div className="basis-full lg:basis-1/4">App.tsx</div>
      <div className="basis-full lg:basis-3/4 px-5">
        {!loading && <Grid prod={products} />}
      </div>
    </>
  );
}
