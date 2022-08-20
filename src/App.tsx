import Products from "./components/Products";
import Header from "./components/Header";
import { urlChoose } from "./context/productsContext";
import { useState } from "react";

export default function App() {
  const [urlContext, setUrlContext] = useState("products");


  return (
    <div className="App">
      <Header />

      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto ">
       <urlChoose.Provider value={[urlContext, setUrlContext]}>
        <Products />
       </urlChoose.Provider>
      </div>
    </div>
  );
}
