import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightToBracket,
  faCircleInfo,
  faEnvelope,
  faSignOutAlt,
  faBasketShopping,
  faCircleQuestion,
} from "@fortawesome/free-solid-svg-icons";
import "../App.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Dash() {
  return (
    <div className="space-y-4">
      <div className=" flex flex-col">
        <Header />
        <img
          src="back2.png"
          alt=""
          className="bg-cover lg:rotate-180 md:rotate-45 sm:rotate-45 w-screen -z-10 position-absolute lg:bottom-0 lg:pt-50 md:bottom-32 lg:right-80
          "
        />
        <div className="main-content flex flex-col lg:flex-row">
          <Sidebar />
          <div className="content flex-1">
            <Slider />
          </div>
        </div>
        <Bawah />
      </div>
      <Footer />
    </div>
  );
}

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header flex justify-between items-center bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-600 p-4">
      <div className="flex justify-center align-middle items-center ">
        <img src="Shopann.png" alt="" width="100px" />
        <h1 className="text-white fs-1 font-bold text-2xl font-serif ">
          {" "}
          - SHOPAN -{" "}
        </h1>
      </div>
      <button
        className="login-button bg-white text-indigo-500 px-5 py-2 rounded-full fs-5 fw-bold shadow-md hover:bg-gray-500"
        onClick={() => navigate("/Login")}
      >
        Login
      </button>
    </div>
  );
};

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="sidebar bg-gradient-to-r   text-white w-full lg:w-1/4 flex flex-col items-center py-10 space-y-6">
      <div className="logo flex flex-col items-center">
        <img src="Shopann.png" alt="" width="50px" />
        <h1 className="text-white fs-3 font-bold text-2xl font-serif mt-2">
          - SHOPAN -
        </h1>
      </div>
      <nav className="nav flex flex-col space-y-4">
        <button
          className="nav-item text-lg font-medium hover:bg-indigo-600 px-6 py-2 mt-4 rounded-full transition-all"
          onClick={() => navigate("/About")}
        >
          <FontAwesomeIcon icon={faCircleInfo} className="mr-3" />
          About
        </button>
        <button
          className="nav-item text-lg font-medium hover:bg-indigo-600 px-6 py-2 rounded-full transition-all"
          onClick={() => navigate("/Support")}
        >
          <FontAwesomeIcon icon={faEnvelope} className="mr-3" />
          Support
        </button>
        <button
          className="nav-item text-lg font-medium hover:bg-indigo-600 px-6 py-2 rounded-full transition-all"
          onClick={() => navigate("/Help")}
        >
          <FontAwesomeIcon icon={faCircleQuestion} className="mr-3" />
          Help
        </button>
        <button
          className="nav-item text-lg font-medium hover:bg-indigo-600 px-6 py-2 rounded-full transition-all"
          onClick={() => navigate("*")}
        >
          <FontAwesomeIcon icon={faSignOutAlt} className="mr-3" />
          Logout
        </button>
      </nav>
    </div>
  );
};

const Slider = () => {
  const navigate = useNavigate();
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
    <div className="slider-container p-4">
      <div className="slide relative">
        <img
          src={images[currentIndex]}
          alt={`Gambar ${currentIndex}`}
          className="w-full h-auto rounded-lg"
          onClick={() => navigate("/Login")}
        />
      </div>
      <div className="flex justify-center mt-4 space-x-2">
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
  );
};

const Bawah = () => {
  return (
    <>
      <div className="container-fluid my-20 space-y-5">
        <section className="flex gap-6 align-items-center justify-center items-center text-wrap px-12">
          <div>
            <h1 className="text-gray-500 fs-1 fw-bold ">
              - SHOPAN - Platform E-Commerce Terpercaya
            </h1>
            <p>
              {" "}
              SHOPAN adalah platform e-commerce yang menawarkan pengalaman
              berbelanja online yang mudah, aman, dan menyenangkan. Kami
              menyediakan berbagai produk berkualitas dari berbagai kategori
              untuk memenuhi kebutuhan konsumen dengan harga yang kompetitif.
              Dengan antarmuka yang user-friendly dan sistem pembayaran yang
              aman, SHOPAN hadir untuk memudahkan Anda dalam berbelanja kapan
              saja dan di mana saja.
            </p>
          </div>
          <div>
            <img src="trans.png" alt="" width="1800px" />
          </div>
        </section>
        <section className="flex gap-6 align-items-center justify-center items-center text-wrap px-12">
          <div>
            <h1 className="position-absolute left-96 pl-10 pt-44 rotate-45 text-5xl fw-bold">
              DISC. 50%
            </h1>
            <h2 className="font-bold font-serif text-teal-400 text-6xl">
              Only NOW!!
            </h2>
            <br />

            <img src="vector.png" alt="" width="1500px" />
          </div>
          <div>
            <h1 className="text-gray-800 fs-1 fw-bold ">
              SHOPAN: Temukan Semua yang Anda Butuhkan
            </h1>
            <p>
              SHOPAN menawarkan berbagai produk dari berbagai kategori, termasuk
              elektronik, fashion, kecantikan, perlengkapan rumah tangga, hingga
              kebutuhan sehari-hari. Setiap kategori dirancang untuk memberikan
              kemudahan dalam menemukan produk yang sesuai dengan kebutuhan
              Anda, dari barang-barang trendi hingga produk berkualitas dengan
              harga terjangkau.
            </p>
          </div>
        </section>

        <section>
          <h1 className="text-yellow-600 fs-1 text-4xl font-serif fw-bold">
            Benefit SHOPAN
          </h1>
          <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-8 pt-24">
            <div className="shadow-lg bg-white">
              <img
                src="grid1.jpg"
                alt=""
                className="h-60 w-screen rounded-lg hover:scale-110"
              />
            </div>
            <div className="shadow-lg rounded-lg bg-white">
              <img
                src="grid2.jpg"
                alt=""
                className="h-60 w-screen rounded-lg hover:scale-110"
              />
            </div>
            <div className="shadow-lg rounded-lg bg-white ">
              <img
                src="grid3.png"
                alt=""
                className="h-60 w-screen rounded-lg hover:scale-110"
              />
            </div>
            <div className="shadow-lg rounded-lgbg-white ">
              <img
                src="grid4.jpg"
                alt=""
                className="h-60 w-screen rounded-lg hover:scale-110"
              />
            </div>
            <div className="shadow-lg rounded-lg bg-white ">
              <img
                src="grid5.jpg"
                alt=""
                className="h-60 w-screen rounded-lg hover:scale-110"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Logo atau Gambar */}
        <div className="flex justify-center mb-6">
          <img
            src="Shopann.png" // Gantilah dengan URL logo yang sesuai
            alt="SHOPAN Logo"
            className="w-32"
          />
        </div>

        {/* Menu Footer */}
        <div className="flex justify-center space-x-6 mb-6">
          <a href="#" className="text-lg hover:text-orange-400">
            Tentang Kami
          </a>
          <a href="#" className="text-lg hover:text-orange-400">
            Kebijakan Privasi
          </a>
          <a href="#" className="text-lg hover:text-orange-400">
            Syarat & Ketentuan
          </a>
          <a href="#" className="text-lg hover:text-orange-400">
            Bantuan
          </a>
          <a href="#" className="text-lg hover:text-orange-400">
            Kontak Kami
          </a>
        </div>

        {/* Ikon Sosial Media */}
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://facebook.com/shopan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-orange-400"
          >
            Facebook
          </a>
          <a
            href="https://instagram.com/shopan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-orange-400"
          >
            Instagram
          </a>
          <a
            href="https://twitter.com/shopan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-orange-400"
          >
            Twitter
          </a>
          <a
            href="https://youtube.com/shopan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-orange-400"
          >
            YouTube
          </a>
        </div>
        <div className="text-center text-sm text-gray-400">
          <p>&copy; 2024 SHOPAN. Semua hak dilindungi.</p>
        </div>
      </div>
    </footer>
  );
};

export default Dash;
