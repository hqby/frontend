const path=require('path')//nodejs里面的基本包，用来处理路径
// const ExtractTextPlugin = require("extract-text-webpack-plugin");
const htmlWebpackPlugin = require('html-webpack-plugin'); // 引入模板渲染插件
const VueLoaderPlugin=require('vue-loader/lib/plugin');

module.exports={
    mode: 'development',
    entry: {main: './main.js'},
    output:{
        path:path.join(__dirname,'dist'),
        filename:'bundle.js'
    },
    module: {
        // 对应文件加载器
        rules: [
            {
                test: /\.vue$/,
                use: ['vue-loader'],
                // options: {
                //     // extractCSS: true,
                //     loaders: {
                //         css: ExtractTextPlugin.extract({
                //             use: 'css-loader',
                //             fallback: 'vue-style-loader'
                //         }),
                //         styl: ExtractTextPlugin.extract({
                //             use: 'css-loader!stylus-loader',
                //             fallback: 'vue-style-loader'
                //         })
                //     }
                // }
            },

       {
            test: /\.less$/,
            use: ['style-loader','css-loader']

        }
        ]
    },

    plugins: [

        new htmlWebpackPlugin({
            title: 'Webpack Plugin Sample',
            template: './index.html',
            filename: 'index.html'
        }),
        new VueLoaderPlugin()
    ]
}