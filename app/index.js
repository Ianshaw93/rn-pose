import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { RNCamera } from 'react-native-camera';
// import * as tf from '@tensorflow/tfjs';
// import { bundleResourceIO } from '@tensorflow/tfjs-react-native';

// const FRAME_PROCESS_DELAY = 500; // Delay between each frame process in milliseconds

const App = () => {
//   const [model, setModel] = useState(null);
//   const [isProcessing, setIsProcessing] = useState(false);
//   const cameraRef = useRef();

//   useEffect(() => {
//     (async () => {
//       await tf.ready();

//       const modelJson = require('@tensorflow/tfjs-models/mobilenet/model.json'); 
//       const modelWeights = require('@tensorflow/tfjs-models/mobilenet/weights_manifest.json');
//       const model = await tf.loadLayersModel(bundleResourceIO(modelJson, modelWeights));
      
//       setModel(model);
//     })();
//   }, []);

//   const processFrame = async (imageData) => {
//     setIsProcessing(true);

//     if (!model) {
//       return;
//     }

//     let tensor = tf.node.decodeImage(imageData); 

//     const input = tf.sub(tf.div(tf.expandDims(tensor), 127.5), 1);
//     let outputTensor = model.predict(input);
//     let processedTensor = tf.mul(tf.add(outputTensor, 1), 127.5);
    
//     console.log(processedTensor.toString());

//     setIsProcessing(false);
//   };

//   const onCameraReady = async () => {
//     while (cameraRef.current) {
//       if (!isProcessing) {
//         const data = await cameraRef.current.takePictureAsync({ skipProcessing: true, base64: true });
//         processFrame(data.base64);
//       }
//       await sleep(FRAME_PROCESS_DELAY);
//     }
//   };

  return (
    <View style={styles.container}>
        {/* <Text>
            Test
        </Text> */}
      <RNCamera
        ref={cameraRef}
        style={styles.preview}
        onCameraReady={onCameraReady}
        type={RNCamera.Constants.Type.back}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, flexDirection: 'column' },
  preview: { flex: 1, justifyContent: 'flex-end', alignItems: 'center' },
});

export default App;
