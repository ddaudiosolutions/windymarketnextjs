module.exports = {

  trailingSlash: true, // Opcional, pero puede ayudar con las rutas
  images: {
    domains: ['res.cloudinary.com'],
  },
  env: {
    NEXT_BACKEND_URL: process.env.NEXT_BACKEND_URL,
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