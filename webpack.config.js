const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')


module.exports={
    mode: 'development',
    entry: ['@babel/polyfill' , './src/pages/index.tsx'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]_bundle.js'
      },
    resolve:{
      extensions: [".tsx", ".js"]
    },
    plugins:[
      new HTMLWebpackPlugin({
        template:'./src/index.html'
      })],
    module:{
      rules:[
        {
          test: /\.css/,
          use:['style-loader','css-loader']
        },
        {
          test: /\.s[ac]ss/,
          use: ['css-loader','sass-loader']
        },
        {
          test: /\.(png|svg|jpg|gif)/,
          issuer:/\.[jt]sx?$/,
          use:['file-loader'],
          type:'asset/resource',
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ['@babel/preset-env',
            ]
            }
          }
        },
        {
          test: /\.tsx$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ['@babel/preset-env',
                        '@babel/preset-typescript',
                        '@babel/preset-react'
                        
            ]
            }
          }
        },
      ]
    },
}