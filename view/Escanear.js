import React from 'react';
import {Text, View} from 'react-native';
//import {Text, View, BarcodeScannerOptions, Barcode} from 'react-native';

export default function Escanear() {
  return (
    <View>
      <Text>Page Escanear</Text>
    </View>
  );
}

/*
const options = BarcodeScannerOptions.Builder()
  .setBarcodeFormats(Barcode.FORMAT_QR_CODE, Barcode.FORMAT_EAN_13)
  .build();
*/

/*
 private class YourImageAnalyzer {ImageAnalysis;Analyzer} ({
   function analyze(imageProxy = ImageProxy){
        const mediaImage (imageProxy.image())
        if (mediaImage != null) {
            const image = InputImage.fromMediaImage(mediaImage, imageProxy.imageInfo.rotationDegrees)
            // Pass image to an ML Kit Vision API
            // ...
        }
  }
  */
