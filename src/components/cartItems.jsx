import React, { useState, useEffect } from "react";
import { products } from "../product"; // Pastikan produk ini sudah terdefinisi dengan benar
import { useDispatch } from "react-redux";
import { changeQuantity } from "../store/cart"; // Pastikan aksi ini sudah benar di Redux

const CartItems = (props) => {
  const { productId, quantity } = props.data; // Mendapatkan productId dan quantity dari props
  const [detail, setDetail] = useState(null); // Menyimpan detail produk
  const dispatch = useDispatch();

  // Mengambil detail produk berdasarkan productId dari props
  useEffect(() => {
    const findDetail = products.find((product) => product.id === productId);
    if (findDetail) {
      setDetail(findDetail); // Jika produk ditemukan, set detail produk
    } else {
      setDetail(null); // Jika produk tidak ditemukan, set detail sebagai null
    }
  }, [productId]); // Mengupdate ketika productId berubah

  // Fungsi untuk mengurangi jumlah produk, memastikan tidak kurang dari 1
  const handleMinusQuantity = () => {
    if (quantity > 0) {
      dispatch(
        changeQuantity({
          productId: productId,
          quantity: quantity - 1,
        })
      );
    }
  };

  // Fungsi untuk menambah jumlah produk
  const handlePlusQuantity = () => {
    dispatch(
      changeQuantity({
        productId: productId,
        quantity: quantity + 1,
      })
    );
  };

  // Pastikan detail produk sudah ditemukan sebelum render
  if (!detail) {
    return (
      <div className="flex justify-between items-center bg-slate-600 text-white p-2 border-b-2 border-slate-700 gap-5">
        <p>Produk tidak ditemukan</p>
      </div>
    );
  }

  return (
    <div className="flex justify-between items-center bg-slate-600 text-white p-2 border-b-2 border-slate-700 gap-5">
      <img src={detail.img} alt={detail.title} className="w-12" />
      <h5>{detail.title}</h5>
      <p>Rp.{(detail.price * quantity).toFixed(2)}</p>
      <div className="w-20 flex justify-between gap-2">
        <button
          className="bg-gray-200 rounded-full h-10  text-cyan-600"
          onClick={handleMinusQuantity}
        >
          -
        </button>
        <span>{quantity}</span>
        <button
          className="bg-gray-200 rounded-full h-10 text-cyan-600"
          onClick={handlePlusQuantity}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CartItems;
