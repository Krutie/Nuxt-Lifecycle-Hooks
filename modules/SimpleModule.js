module.exports = function SimpleModule (_moduleOptions) {
  const options = Object.assign({}, 
                 this.options.simpleModuleOptions, 
                 _moduleOptions)

  // make all options available under context.env
  Object.keys(options).forEach((key) => {
    this.options.env[key] = options[key] || ''
  })

  // both consoles below should appear in terminal console
  console.log('Simple Module called at Nuxt Start')
  console.log(this.options.env)
}