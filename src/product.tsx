import useFetch from "./hooks/useFetch";
import ProductUrlProps from "./interface/ProductUrlProps";
import Grid from "./ui/product/grid"
import List from "./ui/product/list"

export default function Product({ url }: ProductUrlProps) {
  const { data: products, loading } = useFetch(url);

  return (
    <List prod={products} load={loading} />
  );
}
