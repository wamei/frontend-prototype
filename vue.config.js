const webpack = require('webpack');

if (!process.env.TARGET_APP) {
  process.env.TARGET_APP = "web";
}

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/frontend-prototype/" : "/",
  outputDir: "docs",
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        IS_WEB_APP: process.env.TARGET_APP == "web",
        IS_IOS_APP: process.env.TARGET_APP == "ios",
        IS_ANDROID_APP: process.env.TARGET_APP == "android",
        IS_WINDOWS_APP: process.env.TARGET_APP == "windows"
      })
    ]
  }
};
