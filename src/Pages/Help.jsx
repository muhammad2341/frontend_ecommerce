const Help = () => {
  return (
    <div className="">
      <h1>Your Helper</h1>
      <p>
        Jika terdapat kendala atau bug dalam web SHOPAN anda bisa menuliskan
        keluhan di kolom teks dibawah ini :
      </p>
      <br />
      <textarea
        name="Help"
        placeholder="Tuliskan keluhan anda"
        className="bg-white text-black fw-bold text-wrap"
      />
      <br />
      <p>Atau anda juga bisa menghubungi layanan kami dibawah ini :</p>
      <div>
        <h2>Contact Us</h2>
        <p>
          <strong>Email:</strong> muhammadfaridshopan@gmail.com
          <br />
          <strong>Phone:</strong> +62 821 4589 2010
        </p>
        <p>Thank you for being a part of our journey!</p>
      </div>
    </div>
  );
};
export default Help;
