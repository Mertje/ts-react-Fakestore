import Products from "./components/Products";
import Header from "./components/Header";
import { urlChoose, cartAdded} from "./context/productsContext";
import { useState } from "react";
import FakeProductAPI from "./interface/FakeProductApi";

export default function App() {
  const [urlContext, setUrlContext] = useState("products");
  const [addCart , setAddCart] = useState<FakeProductAPI[]>([])

  return (
    <div className="App">
      <cartAdded.Provider value={[addCart , setAddCart]}>
      <Header />
       <urlChoose.Provider value={[urlContext, setUrlContext]}>
       <div className="flex flex-col lg:flex-row max-w-7xl mx-auto ">
        <Products />
      </div>
      </urlChoose.Provider>
      </cartAdded.Provider>
    </div>
  );
}
