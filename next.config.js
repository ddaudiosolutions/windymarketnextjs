module.exports = {

  trailingSlash: true, // Opcional, pero puede ayudar con las rutas
  images: {
    domains: ['res.cloudinary.com'],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/productos?busqueda=ultimos_productos&page=0',
        permanent: true,
      },
    ]
  },
}