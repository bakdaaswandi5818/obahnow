export default function Services() {
  const services = [
    {
      title: 'Company Profile',
      subtitle: 'Corporate',
      description: 'Website profesional untuk meningkatkan kredibilitas dan kepercayaan perusahaan Anda di mata klien dan mitra bisnis.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      features: [
        'Desain profesional dan modern',
        'Informasi lengkap perusahaan',
        'Portfolio & testimoni',
        'SEO optimized'
      ]
    },
    {
      title: 'Usaha Kampung',
      subtitle: 'SME/UMKM Landing Pages',
      description: 'Platform digital khusus untuk UMKM dan usaha kecil menengah, membantu Anda menjangkau pasar yang lebih luas secara online.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      features: [
        'Katalog produk online',
        'Integrasi WhatsApp',
        'Mobile-friendly design',
        'Mudah dikelola'
      ]
    },
    {
      title: 'Maintenance & Support',
      subtitle: 'Dukungan Berkelanjutan',
      description: 'Layanan pemeliharaan dan dukungan teknis untuk memastikan website Anda selalu berjalan optimal dan aman.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      features: [
        'Update rutin & keamanan',
        'Backup data berkala',
        'Support responsif 24/7',
        'Monitoring performa'
      ]
    }
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Layanan Kami
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Solusi digital lengkap untuk mengembangkan bisnis Anda di era digital
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-secondary"
            >
              <div className="text-secondary mb-4">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-primary mb-2">
                {service.title}
              </h3>
              
              <p className="text-sm text-secondary font-semibold mb-4">
                {service.subtitle}
              </p>
              
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg className="w-5 h-5 text-secondary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className="w-full bg-primary hover:bg-primary-800 text-white py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105">
                Pelajari Lebih Lanjut
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
