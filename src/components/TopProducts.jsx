import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import img1 from "../../public/aksesoris.jpg";
import img2 from "../../public/dagang.jpg";
import img3 from "../../public/device.jpg";
import img4 from "../../public/elektro.jpg";
import img5 from "../../public/pakaian.jpg";
import img6 from "../../public/perabot.jpg";

const TopProducts = () => {
  const topProducts = [
    {
      id: 1,
      img: img1,
      title: "Aksesoris",
      description: "MasyaAllah, elegant and premium jilbab for any occasion.",
    },
    {
      id: 2,
      img: img2,
      title: "Sehari hari",
      description: "MasyaAllah, elegant and premium jilbab for any occasion.",
    },
    {
      id: 3,
      img: img3,
      title: "Device",
      description: "MasyaAllah, elegant and premium jilbab for any occasion.",
    },
    {
      id: 4,
      img: img4,
      title: "Barang Elektronik",
      description: "MasyaAllah, elegant and premium jilbab for any occasion.",
    },
    {
      id: 5,
      img: img5,
      title: "Pakaian",
      description: "MasyaAllah, elegant and premium jilbab for any occasion.",
    },
    {
      id: 6,
      img: img6,
      title: "Perabotan",
      description: "MasyaAllah, elegant and premium jilbab for any occasion.",
    },
  ];

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="container text-center mt-3">
      <div className="fw-bold font-serif text-center mx-auto">
        <h1 className="fw-bold text-gray-600">Kategori</h1>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 items-center">
        {topProducts.map((product) => (
          <div
            data-aos="fade-up"
            data-aos-delay={product.aosDelay}
            key={product.id}
          >
            <div>
              <img
                src={product.img}
                alt="Top Image"
                className="rounded-lg h-40 w-full shadow"
              />
              <h4 className="fw-bold mt-2 ">{product.title}</h4>
              <p>{product.deskripsi}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopProducts;
