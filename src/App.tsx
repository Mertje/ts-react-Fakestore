import useFetch from "./hooks/useFetch";
import FakeProductAPI from "./interface/FakeProductApi";

export default function App() {
  const {data: products, loading} = useFetch()

  if(!loading){
    console.log(products)
  }
  
  return (
    <div className="App">
      { products && products.map((pro: FakeProductAPI) => <h2 key={pro.id}> {pro.title} </h2>) }
    </div>
  );
}
