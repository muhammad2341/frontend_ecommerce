import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
const About = () => {
  return (
    <div
      style={{ padding: "100px", fontFamily: "Arial, sans-serif" }}
      className="grid lg:grid-cols-2 md:grid-cols-1 grid-rows-2"
    >
      <div className="col-span-1 my-auto">
        <h1>
          <FontAwesomeIcon icon={faBasketShopping} size="2x" /> - SHOPAN -
        </h1>
      </div>
      <div className="col-span-1 ">
        <h1>About Us</h1>
        <p>
          Selamat datang di SHOPAN, mitra terpercaya Anda dalam belanja online.
          Sejak awal, kami telah berdedikasi untuk menciptakan pengalaman
          berbelanja yang lancar dan menyenangkan bagi pelanggan kami. Baik Anda
          mencari fesyen terkini, barang elektronik mutakhir, kebutuhan rumah
          tangga, atau oleh-oleh unik, platform kami menghadirkan beragam
          pilihan produk yang bersumber dari pemasok tepercaya di seluruh dunia.
          Di SHOPAN, kami percaya pada kekuatan teknologi untuk menyederhanakan
          kehidupan. Itu sebabnya kami membangun platform intuitif yang
          memastikan navigasi cepat, transaksi aman, dan rekomendasi personal
          yang disesuaikan dengan preferensi Anda. Tim kami bekerja tanpa kenal
          lelah di belakang layar untuk tetap menjadi yang terdepan dalam tren,
          memastikan bahwa Anda memiliki akses terhadap produk terbaik dengan
          harga bersaing. Kami bangga tidak hanya menjadi pasar tetapi juga
          komunitas. Dari tim layanan pelanggan kami yang responsif hingga
          kolaborasi kami dengan penjual independen, kami bertujuan untuk
          membina hubungan yang dibangun berdasarkan kepercayaan, keandalan, dan
          pertumbuhan bersama. Baik Anda berbelanja kebutuhan sehari-hari atau
          acara khusus, tujuan kami adalah menjadikan setiap momen menyenangkan
          dan bebas stres.
        </p>
      </div>
      <div className="col-span-1">
        <h2>Our Mission</h2>
        <p>
          Di SHOPAN, misi kami adalah mendefinisikan kembali cara orang
          berbelanja online. Kami bertujuan untuk memberdayakan pelanggan kami
          dengan kenyamanan, pilihan, dan kepercayaan diri. Inilah yang
          mendorong kami: Pengalaman yang Berpusat pada Pelanggan Kami berusaha
          untuk menempatkan Anda sebagai pusat dari semua yang kami lakukan.
          Dari navigasi yang mudah digunakan hingga dukungan pelanggan yang
          cepat, setiap fitur dirancang untuk meningkatkan pengalaman berbelanja
          Anda. Kualitas dan Keandalan Kami berkomitmen untuk memberikan yang
          terbaik saja. Setiap produk menjalani pemeriksaan kualitas yang ketat
          untuk memastikan produk tersebut memenuhi standar tinggi kami,
          sehingga Anda dapat berbelanja dengan tenang. Inovasi dan Pertumbuhan
          Kami percaya untuk terus berkembang. Dengan memanfaatkan teknologi dan
          tren pasar terkini, kami bertujuan untuk menghadirkan kepada Anda
          fitur-fitur inovatif seperti pratinjau produk augmented reality,
          rekomendasi yang didukung AI, dan solusi pengemasan ramah lingkungan.
          Komunitas dan Keberlanjutan Selain perdagangan, kami bersemangat untuk
          memberikan dampak positif. Dengan mendukung usaha kecil dan menerapkan
          praktik berkelanjutan, kami berkontribusi terhadap bumi yang lebih
          sehat dan komunitas yang lebih kuat. Kami memahami bahwa berbelanja
          lebih dari sekedar transaksi; ini tentang menciptakan kenangan,
          memecahkan masalah, dan membawa kegembiraan. Seiring pertumbuhan kami,
          kami tetap berkomitmen untuk memberikan keunggulan di setiap langkah
          perjalanan Anda bersama kami. Terima kasih telah memilih E-commerce
          Saya sebagai tujuan online terpercaya Anda
        </p>
      </div>
      <div>
        <h2>Contact Us</h2>
        <p>
          Jika anda memiliki kendala atau kritikan hubungi kontak berikut :
          <br />
          <strong>Email:</strong> muhammadfaridshopan@gmail.com
          <br />
          <strong>Phone:</strong> +62 821 4589 2010
        </p>
      </div>
    </div>
  );
};

export default About;
