export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary-700 to-primary-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Mendigitalkan Usaha
            <br />
            <span className="text-secondary">dari Desa ke Kota</span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
            Kami membantu usaha Anda berkembang dengan solusi digital yang tepat sasaran, 
            mulai dari profil perusahaan hingga platform UMKM yang modern.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#services"
              className="bg-secondary hover:bg-secondary-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg w-full sm:w-auto text-center"
            >
              Jelajahi Layanan
            </a>
            <a 
              href="#contact"
              className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg w-full sm:w-auto text-center"
            >
              Konsultasi Gratis
            </a>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  )
}
