// vue.config.js
module.exports = {
    transpileDependencies: [
        'vue-echarts',
        'resize-detector',
    ],
    publicPath: process.env.NODE_ENV === 'production' ?
        '/lazyweb/project/sustainable_city/' : './' // 正式
        // '/edm/dinoTest/sustainable_city/' : './' // 測試
        // './' : './' // localhost
}