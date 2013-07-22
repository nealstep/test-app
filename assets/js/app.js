
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    console.log("We got device ready");
    navigator.splashscreen.hide();
    cordova.exec(null, null, "SplashScreen", "hide", []);
    // Soon to be
    // navigator.splashscreen.hide();
}
