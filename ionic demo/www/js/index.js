console.log(1233);
//监听事件  设备已经准备好， 调用onDeviceReady
document.getElementById('btnToshow').onclick = function(){
    console.log('camera')
}
document.addEventListener('deviceready',onDeviceReady, false);

function onDeviceReady(){
    console.log(123332222);
    document.getElementById('btnToshow').onclick =function(){
        console.log(1233);
        navigator.camera.getPicture(onSuccess, onFail,
            {   
                // quality:100,
                destinationType:  Camera.DestinationType.FILE_URI,
                sourceType: Camera.PictureSourceType.CAMERA,
                correctOrientation: true,
                // targetWidth:320,
                // targetHeight:320,
                cameraDirection: 1
            });
        function onSuccess(path){
            var myImg = document.getElementById('showImg');
            myImg.style.backgroundImage = "url("+path+")";
            myImg.style.backgroundSize = "cover";
        }

        function onFail(){
            alert('拍照失败了！');
        }
    }

    // document.getElementById('btnGet').onclick = function(){
    //    cordova.plugins.barcodeScanner.scan(
    //       function (result) {
    //           alert("We got a barcode\n" +
    //                 "Result: " + result.text + "\n" +
    //                 "Format: " + result.format + "\n" +
    //                 "Cancelled: " + result.cancelled);
    //       }, 
    //       function (error) {
    //           alert("Scanning failed: " + error);
    //       },
    //       {
    //           "preferFrontCamera" : true, // iOS and Android 
    //           "showFlipCameraButton" : true, // iOS and Android 
    //           "prompt" : "Place a barcode inside the scan area", // supported on Android only 
    //           "formats" : "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED 
    //           "orientation" : "landscape" // Android only (portrait|landscape), default unset so it rotates with the device 
    //       }
    //    );
    // }
}
