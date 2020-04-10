const path = require("path");

module.exports = {
  entry: {
    main: path.resolve(__dirname, "src", "public", "ts", "main.tsx"),
    comments: path.resolve(__dirname, "src", "public", "ts", "comments.tsx")
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js"
  },
  mode: "development",
  resolve: {
    extensions: [".jsx", ".js", ".ts", ".tsx", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?/,
        exclude: /node_modules/,
        loader: "ts-loader"
      }
    ]
  }
};
