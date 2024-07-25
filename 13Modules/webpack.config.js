// webpack.config.js
const path = require("path");

module.exports = {
  entry: "./src/Module.js", // Entry point for the application
  output: {
    filename: "bundle.js", // Output file name
    path: path.resolve(__dirname, "dist"), // Output directory
  },
  mode: "development", // Set the mode to 'development' or 'production'
};
