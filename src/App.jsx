import Header from "./components/Header";
import Pricelist from "./components/Pricelist";
import Sidebar from "./components/Sidebar";

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
