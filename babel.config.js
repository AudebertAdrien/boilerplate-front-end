const plugins = [];

if (process.env.NODE_ENV !== "production") {
  plugins.push("@babel/plugin-transform-runtime");
}

module.exports = {
  presets: [["@babel/preset-env"], ["@babel/react", { runtime: "automatic" }]],
  plugins: plugins,
};
