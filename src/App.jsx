import Header from "./components/Header";
import Pricelist from "./components/Pricelist";
import Sidebar from "./components/sidebar";

function App() {
  return (
    <>
      <div className="grid-container">
        <Header />
        <Sidebar />
        <Pricelist />
      </div>
    </>
  );
}

export default App;
