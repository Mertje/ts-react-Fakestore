import Products from "./components/Products";
import Header from "./components/Header";

export default function App() {

  return (
    <div className="App">
      <Header />

      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto ">
        <Products />
      </div>
    </div>
  );
}
