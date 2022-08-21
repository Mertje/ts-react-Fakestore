import { useContext } from "react";
import useFetch from "../hooks/useFetch";
import { urlChoose } from "../context/productsContext";

export default function Categories() {
  const { data: categories, loading } = useFetch("products/categories");
  const [, setUrlContext] = useContext(urlChoose);

  return (
    <>
      <ul className="pt-3">
        <div className="m-2 p-3 hover:bg-gray-300 bg-gray-50 cursor-pointer">
          <li onClick={() => setUrlContext("products/")}>All products</li>
        </div>
        {!loading &&
          categories!.map((category: any) => (
            <div key={category} className="m-2 p-3 hover:bg-gray-300 bg-gray-50 cursor-pointer">
              <li onClick={() => setUrlContext(`products/category/${category}`)}>
                {category}
              </li>
            </div>
          ))}
      </ul>
    </>
  );
}
