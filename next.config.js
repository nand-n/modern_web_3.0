/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental:{appDir: true},
  exportPathMap: async function (
  defaultPathMap,
  { dev, dir, outDir, distDir, buildId }
) {
  return {
    '/': { page: '/' },
     '/about': { page: '/about' },
     '/post/hello-nextjs': { page: '/post/[slug]', query: { slug: 'hello-nextjs' } },
     '/post/learn-nextjs': { page: '/post/[slug]', query: { slug: 'learn-nextjs' } },
     '/post/deploy-nextjs':{ page: '/post/[slug]', query: { slug: 'deploy-nextjs' } },
  }
},
}

module.exports = nextConfig