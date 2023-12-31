/** @type {import('next').NextConfig} */
// const iCloudPath = '/Users/kihongchun/Library/Mobile Documents/com~apple~CloudDocs/myBlog'
const withMDX = require('@next/mdx')({
  extension: /\.(md|mdx)$/,
  // Optionally provide remark and rehype plugins
  options: {
    // If you use remark-gfm, you'll need to use next.config.mjs
    // as the package is ESM only
    // https://github.com/remarkjs/remark-gfm#install
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
})
const nextConfig = {
  // images: {
  //   remotePattern: [
  //     {
  //       protocol: 'https',
  //       hostname: 'kihongchun.com',
  //       port: '',
  //       pathname: `/public/**`
  //     }
  //   ]
  // }
  
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'md', 'ts', 'tsx'],

  // Optionally, add any other Next.js config below
  reactStrictMode: true,
}

module.exports = withMDX(nextConfig)
// module.exports = nextConfig
