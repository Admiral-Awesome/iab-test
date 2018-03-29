cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-inappbrowser-wkwebview.inappbrowser",
    "file": "plugins/cordova-plugin-inappbrowser-wkwebview/www/inappbrowser.js",
    "pluginId": "cordova-plugin-inappbrowser-wkwebview",
    "clobbers": [
      "cordova.InAppBrowser.open",
      "window.open"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-plugin-wkwebview-engine": "1.1.4",
  "cordova-plugin-inappbrowser-wkwebview": "1.0.7"
};
// BOTTOM OF METADATA
});