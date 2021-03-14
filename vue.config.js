// vue.config.js
module.exports = {
chainWebpack: config => {
    config
    .plugin('html')
    .tap(args => {
        args[0].title= '百答智能客服'
        return args
    })
}
}