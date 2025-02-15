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

        {/* Copyright */}
        <div className="text-center text-sm text-gray-400">
          <p>&copy; 2024 SHOPAN. Semua hak dilindungi.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
