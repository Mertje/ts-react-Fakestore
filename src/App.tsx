import useFetch from "./hooks/useFetch";
import Product from "./product";
import Header from "./Header";

export default function App() {
  const { loading } = useFetch();

  return (
    <div className="App">
      <Header />
      
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto">
        <div className="basis-full lg:basis-1/4">dwadw</div>
        <div className="basis-full lg:basis-3/4 px-5">
          {loading ? <p>Loading...</p> : <Product />}
        </div>
      </div>
    </div>
  );
}
