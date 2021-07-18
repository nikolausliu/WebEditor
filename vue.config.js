module.exports = {
  outputDir: 'dist',
  publicPath: process.env.NODE_ENV === 'production' ? '/WebEditor/' : '/',
  // productionSourceMap: process.env.NODE_ENV === 'production' ? false : true,
  // to solve this Error when `npm run build`
  // ERROR Error: No module factory available for dependency type: CssDependency
  // css: {
  //   extract: false,
  // },
}
