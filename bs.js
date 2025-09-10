const browserSync = require("browser-sync").create();
browserSync.init({
  proxy: "localhost:8000",
  files: ["*.php", "css/*.css", "js/*.js", "img/*.{jpg,png,gif,svg}"],
});
