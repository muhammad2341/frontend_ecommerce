import "../App.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faCalendarDays,
  faFire,
  faWallet,
  faBagShopping,
  faMoneyBillWave,
  faBurger,
  faShirt,
} from "@fortawesome/free-solid-svg-icons";

const HomeContent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "diskon 1.jpg",
    "diskon2.jpeg",
    "diskon 3.jpg",
    "diskon4.jpg",
    "diskon7.jpg",
    "diskon8.jpeg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  return (
    <>
      <section className="bg-white pt-16">
        <div className="slider-container p-4">
          <div className="slide relative grid grid-cols-2 space-x-4">
            <img
              src={images[currentIndex]}
              alt={`Gambar ${currentIndex}`}
              className="w-full h-auto rounded-lg w-[1200px] rounded-lg"
            />
            <div>
              <img src="PlaceHolder1.png" className="w-100 mx-2  rounded-lg" />
              <img
                src="PlaceHolder2.png"
                className="w-110 mx-2 my-1 rounded-lg"
              />
              <img src="place3.png" className="w-110 mx-2 rounded-lg" />
            </div>
          </div>
          <div>
            <div className="flex justify-center mt-4 space-x-2 mr-96 lg:pr-96">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`w-4 h-4 rounded-full ${
                    index === currentIndex ? "bg-gray-800" : "bg-gray-400"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                ></button>
              ))}
            </div>
          </div>
          <div className="mt-5 grid lg:grid-cols-8">
            <div className="flex flex-col space-y-1">
              <button className="hover:bg-gray-500 rounded-full border border-1 m-auto hover:scale-110 transition-all duration-200">
                <FontAwesomeIcon
                  icon={faCartShopping}
                  style={{ color: "#ffffff" }}
                />
              </button>
              <h6 className="fw-bold fs-5">Toko</h6>
            </div>
            <div className="flex flex-col space-y-1">
              <button className="hover:bg-gray-500 rounded-full border border-1 m-auto hover:scale-110 transition-all duration-200">
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  style={{ color: "#ffffff" }}
                />
              </button>
              <h6 className="fw-bold fs-5">Event</h6>
            </div>
            <div className="flex flex-col space-y-1">
              <button className="hover:bg-gray-500 rounded-full border border-1 m-auto hover:scale-110 transition-all duration-200">
                <FontAwesomeIcon icon={faFire} style={{ color: "#ffffff" }} />
              </button>
              <h6 className="fw-bold fs-5">Flash Sale</h6>
            </div>
            <div className="flex flex-col space-y-1">
              <button className="hover:bg-gray-500 rounded-full border border-1 m-auto hover:scale-110 transition-all duration-200">
                <FontAwesomeIcon icon={faWallet} style={{ color: "#ffffff" }} />
              </button>
              <h6 className="fw-bold fs-5">E-Wallet</h6>
            </div>
            <div className="flex flex-col space-y-1">
              <button className="hover:bg-gray-500 rounded-full border border-1 m-auto hover:scale-110 transition-all duration-200">
                <FontAwesomeIcon
                  icon={faBagShopping}
                  style={{ color: "#ffffff" }}
                />
              </button>
              <h6 className="fw-bold fs-5">Shopan Mall</h6>
            </div>
            <div className="flex flex-col space-y-1">
              <button className="hover:bg-gray-500 rounded-full border border-1 m-auto hover:scale-110 transition-all duration-200">
                <FontAwesomeIcon
                  icon={faMoneyBillWave}
                  style={{ color: "#ffffff" }}
                />
              </button>
              <h6 className="fw-bold fs-5">Shopan Termurah</h6>
            </div>
            <div className="flex flex-col space-y-1">
              <button className="hover:bg-gray-500 rounded-full border border-1 m-auto hover:scale-110 transition-all duration-200">
                <FontAwesomeIcon icon={faBurger} style={{ color: "#ffffff" }} />
              </button>
              <h6 className="fw-bold fs-5">Makan & Minum</h6>
            </div>
            <div className="flex flex-col space-y-1">
              <button className="hover:bg-gray-500 rounded-full border border-1 m-auto hover:scale-110 transition-all duration-200">
                <FontAwesomeIcon icon={faShirt} style={{ color: "#ffffff" }} />
              </button>
              <h6 className="fw-bold fs-5">Fashion</h6>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeContent;
