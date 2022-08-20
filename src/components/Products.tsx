import useFetch from "../hooks/useFetch";
import Grid from "./ui/product/grid";
//import List from "./ui/product/list";
import { listOfProducts , urlChoose } from "../context/productsContext";
import Categories from "./Categories"
import { useContext } from "react";


export default function Product() {
  const [urlContext, ] = useContext(urlChoose)
  const { data: products, loading } = useFetch(urlContext);

  return (
    <listOfProducts.Provider value={products!}>
      <div className="basis-full lg:basis-1/4">{!loading && <Categories />}</div>
      <div className="basis-full lg:basis-3/4 px-5">{!loading && <Grid />}</div>
    </listOfProducts.Provider>
  );
}
