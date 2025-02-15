import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../Pages/header";
import { faStar, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { products } from "../product";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cart";

const Product = () => {
  const [detail, setDetail] = useState([]);
  const [close, setClose] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const detailPage = (Product) => {
    setDetail([{ ...Product }]);
    setClose(true);
    setSelectedImage(Product.img);
  };

  const dispatch = useDispatch();
  const handleAddToCart = (productId) => {
    dispatch(
      addToCart({
        productId: productId,
        quantity: 1,
      })
    );
  };

  const [searchTerm, setSearchTerm] = useState("");
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!open);
  };

  const handleColorChange = (color) => {
    const selectedProduct = detail[0];
    const newImage = selectedProduct.images.find(
      (img) => img.color === color
    )?.src;
    setSelectedImage(newImage || selectedProduct.img);
  };

  const [selectedSize, setSelectedSize] = useState(null);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className="font-sans font-semibold">
      <div className="flex">
        <div className="fixed z-40 w-screen justify-start bg-gradient-to-r from-purple-500 via-purple-600 to-indigo-600 grid">
          <button
            className="lg:hidden text-white w-screen flex"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <ul
            className={`lg:flex lg:space-x-32 container  align-items-center text-white ${
              open ? "block transition-all ease-in duration-300" : "hidden"
            }`}
          >
            <li className="fw-bold ml-0 hover:bg-purple-800 rounded-full hover:scale-105 hover:opacity-100 transition-all duration-300 px-9">
              <Header />
              <p>MyCart</p>
            </li>
            <li className="fw-bold p-2  hover:bg-purple-800 rounded-full hover:scale-105 hover:opacity-100 transition-all duration-300">
              Kategori
            </li>
            <li className="fw-bold p-2   hover:bg-purple-800 rounded-full  hover:scale-105 hover:opacity-100 transition-all duration-300">
              Diskon
            </li>
            <li className="fw-bold p-2  hover:bg-purple-800 rounded-full hover:scale-105 hover:opacity-100 transition-all duration-300">
              Best Seller
            </li>
            <li className="fw-bold p-2  hover:bg-purple-800 rounded-full hover:scale-105 hover:opacity-100 transition-all duration-300">
              Metode Pembayaran
            </li>
            <li className="fw-bold py-2 rounded-full hover:scale-105 hover:opacity-100 transition-all duration-300">
              <div className="flex justify-center mr-16">
                <input
                  type="text"
                  className="py-2 border rounded bg-white hover:transform hover:scale-110 focus:pr-60 text-black"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </li>
            <li className="items-center justify-center">
              <img src="Shopann.png" alt="" width="70px" className="mx-auto" />
              <h1 className="font-serif">SHOPAN</h1>
            </li>
          </ul>
        </div>
        {searchTerm && (
          <div>
            <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 items-center gap-4 mt-24 bg-slate-300 w-screen p-5 transition-all duration-200 fixed z-40 ease-in-out">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((data) => (
                  <div
                    data-aos="fade-up"
                    data-aos-delay={data.aosDelay}
                    key={data.id}
                    className="space-x-3 bg-white p-3 rounded-lg"
                  >
                    <img
                      src={data.img}
                      alt={data.title}
                      className="rounded-lg hover:scale-105 hover:opacity-80 transition-all duration-200 w-screen h-64"
                    />
                    <div>
                      <h3 className="font-bold text-lg mt-3 fs-5">
                        {data.title}
                      </h3>
                      <p className="flex items-center">
                        <FontAwesomeIcon
                          icon={faStar}
                          style={{ color: "#FFD43B" }}
                        />
                        <span>{data.rating}</span>
                      </p>
                    </div>
                    <p className="font-semibold">Rp.{data.price}</p>
                    <div className="flex gap-10">
                      <button
                        clas
                        className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 mt-2"
                        onClick={() => handleAddToCart(data.id)}
                      >
                        Add to Cart
                      </button>
                      <button
                        onClick={() => detailPage(data)}
                        className="bg-slate-500 text-white px-4 py-2 rounded-lg hover:bg-slate-600 mt-2"
                      >
                        Detail
                      </button>
                    </div>
                    {close ? (
                      <div className="flex justify-center">
                        <div className="position-absolute z-40 bg-white items-center shadow-lg w-screen mr-48 pr-48 top-0 left-0 py-24">
                          {detail.map((x) => {
                            return (
                              <>
                                <p
                                  className="bg-transparent float-left"
                                  onClick={() => setClose(false)}
                                >
                                  <FontAwesomeIcon
                                    icon={faCircleXmark}
                                    size="2x"
                                  />
                                </p>
                                <div className="detail_info flex space-x-48 gap-10 ">
                                  <div className="bg-slate-200 p-3 rounded-lg ml-20">
                                    <img
                                      src={selectedImage || x.img}
                                      alt={x.title}
                                      className="w-96"
                                    />
                                  </div>
                                  <div className="product_detail">
                                    <h2>{x.title}</h2>
                                    <h3>{x.price}</h3>
                                    <p>{x.description}</p>

                                    <div className="color-options mt-3 my-5">
                                      <button
                                        className="color-btn"
                                        style={{ backgroundColor: "red" }}
                                        onClick={() => handleColorChange("red")}
                                      >
                                        Red
                                      </button>
                                      <button
                                        className="color-btn"
                                        style={{ backgroundColor: "blue" }}
                                        onClick={() =>
                                          handleColorChange("blue")
                                        }
                                      >
                                        Blue
                                      </button>
                                      <button
                                        className="color-btn"
                                        style={{ backgroundColor: "green" }}
                                        onClick={() =>
                                          handleColorChange("green")
                                        }
                                      >
                                        Green
                                      </button>
                                    </div>
                                    <div className="space-x-1 mb-4">
                                      <button
                                        className={`size border border-1 py-2 px-3 font-serif ${
                                          selectedSize === "XL"
                                            ? "bg-green-500 text-white"
                                            : "bg-slate-500 text-white"
                                        }`}
                                        onClick={() => handleSizeClick("XL")}
                                      >
                                        XL {selectedSize === "XL" && "✔"}
                                      </button>

                                      <button
                                        className={`size border border-1 py-2 px-3 font-serif ${
                                          selectedSize === "L"
                                            ? "bg-green-500 text-white"
                                            : "bg-slate-500 text-white"
                                        }`}
                                        onClick={() => handleSizeClick("L")}
                                      >
                                        L {selectedSize === "L" && "✔"}
                                      </button>

                                      <button
                                        className={`size border border-1 py-2 px-3 font-serif ${
                                          selectedSize === "M"
                                            ? "bg-green-500 text-white"
                                            : "bg-slate-500 text-white"
                                        }`}
                                        onClick={() => handleSizeClick("M")}
                                      >
                                        M {selectedSize === "M" && "✔"}
                                      </button>

                                      <button
                                        className={`size border border-1 py-2 px-3 font-serif ${
                                          selectedSize === "S"
                                            ? "bg-green-500 text-white"
                                            : "bg-slate-500 text-white"
                                        }`}
                                        onClick={() => handleSizeClick("S")}
                                      >
                                        S {selectedSize === "S" && "✔"}
                                      </button>

                                      <button
                                        className={`size border border-1 py-2 px-3 font-serif ${
                                          selectedSize === "XS"
                                            ? "bg-green-500 text-white"
                                            : "bg-slate-500 text-white"
                                        }`}
                                        onClick={() => handleSizeClick("XS")}
                                      >
                                        XS {selectedSize === "XS" && "✔"}
                                      </button>
                                    </div>
                                    <button
                                      className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 mt-2"
                                      onClick={() => handleAddToCart(x.id)}
                                    >
                                      Add to Cart
                                    </button>
                                  </div>
                                </div>
                              </>
                            );
                          })}
                        </div>
                      </div>
                    ) : null}
                  </div>
                ))
              ) : (
                <p>Not Found</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
