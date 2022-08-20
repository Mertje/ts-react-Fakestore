import { useContext } from "react";
import useFetch from "../hooks/useFetch";
import { urlChoose } from "../context/productsContext";

export default function Categories() {
  const { data: categories, loading } = useFetch("products/categories");
  const [ , setUrlContext] = useContext(urlChoose);
  return (
    <>
      <ul>
        <li onClick={() => setUrlContext("products/")}>All products</li>
        {!loading &&
          categories!.map((category: any) => (
            <li onClick={()=> setUrlContext( `products/category/${category}` ) } key={category}>{category}</li>
          ))}
      </ul>
    </>
  );
}
