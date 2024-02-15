const path = require('path');
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
				test: /\.(js|jsx)$/,
				use: {
					loader: 'babel-loader',
				},
				exclude: /node_modules/,
			},
			{
				test: /\.(ts|tsx)$/,
				loader: 'ts-loader',
				exclude: /node_modules/,
			},
    ],
  },
  resolve: {
    modules: ['.', 'node_modules'],
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool:false,
  optimization: {
    //minimize:true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          module: true
        },
      }),
    ],
  },
};