import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cart";
import { products } from "../product";

const Product = () => {
  const [detail, setDetail] = useState([]);
  const [close, setClose] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null); // State to store selected image

  const detailPage = (Product) => {
    setDetail([{ ...Product }]);
    setClose(true);
    setSelectedImage(Product.img); // Set the default image when opening the detail page
  };

  const dispatch = useDispatch();

  // Handle add to cart for each product
  const handleAddToCart = (productId) => {
    dispatch(
      addToCart({
        productId: productId,
        quantity: 1,
      })
    );
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
    <>
      <div>
        {close ? (
          <div className="flex justify-center">
            <div className="position-absolute z-40 bg-white items-center shadow-lg w-full container py-24">
              {detail.map((x) => {
                return (
                  <>
                    <p
                      className="bg-transparent float-left"
                      onClick={() => setClose(false)}
                    >
                      <FontAwesomeIcon icon={faCircleXmark} size="2x" />
                    </p>
                    <div className="detail_info flex">
                      <div className="bg-slate-200 w-full p-3 rounded-lg">
                        <img
                          src={selectedImage || x.img}
                          alt={x.title}
                          className="w-96"
                        />
                      </div>
                      <div className="product_detail">
                        <h2>{x.title}</h2>
                        <h3>Rp.{x.price}</h3>
                        <p>{x.description}</p>

                        <div className="color-options my-5">
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
                            onClick={() => handleColorChange("blue")}
                          >
                            Blue
                          </button>
                          <button
                            className="color-btn"
                            style={{ backgroundColor: "green" }}
                            onClick={() => handleColorChange("green")}
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
        <div className="mt-14">
          <div className="container-fluid">
            <div className="text-center max-w-[600px] mx-auto"></div>
            <div>
              <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 items-center gap-4">
                {products.map((data) => (
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
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
