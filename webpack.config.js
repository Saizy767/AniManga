const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')


module.exports={
    mode: 'development',
    entry: {main: './src/pages/index.tsx',
            manga: './src/pages/[type]/[id].tsx',
            error: './src/pages/404.tsx',
            searchName: './src/pages/search/[search].tsx',
            watchLater: './src/pages/watch_later.tsx',
            liked: './src/pages/liked.tsx',
            top: './src/pages/top/index.tsx',
            topTen: './src/pages/top/[id]/[shortname].tsx'},
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].js'
      },
    resolve:{
      extensions: [".tsx", ".js",".ts",]
    },
    devServer:{
      static: './dist'
    },
    plugins:[
      new HTMLWebpackPlugin({
        template:'./src/index.html'
      }),
      new CleanWebpackPlugin()
    ],
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
          test: /\.(png|svg|jpg|gif|jpeg)/,
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
          test: /\.ts$/,
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