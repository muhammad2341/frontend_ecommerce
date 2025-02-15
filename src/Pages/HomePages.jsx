import "../App.css";
import HomeNav from "../components/HomeNav";
import HomeContent from "../components/HomeContent";
import Product from "../components/ProductCard";
import Header from "../Pages/header";
import TopProducts from "../components/TopProducts";
import CartTab from "../components/cartTab";
import { useSelector } from "react-redux";
import Footer from "../components/Footer";

function Home() {
  const statusTabCart = useSelector((store) => store.cart.statusTab);
  return (
    <>
      <div className="space-y-5">
        <HomeNav />
        <div className="mt-14">
          <div className="absolute z-40 m-11">
            <CartTab />
          </div>
          <HomeContent />
          <Product />
          <TopProducts />
        </div>
        <Footer />
      </div>
    </>
  );
}
export default Home;
