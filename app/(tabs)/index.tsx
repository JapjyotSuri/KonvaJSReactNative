import { StyleSheet } from "react-native";

import { View } from "@/components/Themed";
import { DesignData } from "@/types/designDataType";
import WebView from "react-native-webview";

const brochureData = {
  version: "1.0",
  canvas: {
    width: 900,
    height: 900,
  },
  stage:
    '{"attrs":{"width":900,"height":900},"className":"Stage","children":[{"attrs":{},"className":"Layer","children":[{"attrs":{"id":"bg","width":900,"height":900,"fill":"#db8924"},"className":"Rect"},{"attrs":{"x":145,"y":219,"draggable":true,"id":"1","text":"Welcome to Canva Editor!","fontSize":48,"fill":"#333","fontWeight":"normal","textDecoration":"none"},"className":"Text"},{"attrs":{"x":209.56206534982948,"y":308.3900783645269,"draggable":true,"id":"2","width":371.87586930034115,"height":164.2198432709461,"fill":"#ffffff","stroke":"#4A90E2","strokeWidth":4},"className":"Rect"},{"attrs":{"x":400,"y":346,"draggable":true,"id":"3","radius":80,"fill":"#ffffff","stroke":"#E53E3E","strokeWidth":4},"className":"Circle"},{"attrs":{"x":200,"y":475,"draggable":true,"id":"5d27d20e-db28-46b1-ba2a-41485e139ad7","width":400,"height":225,"fill":"#000000","opacity":0.3,"stroke":"#666","strokeWidth":1},"className":"Rect"},{"attrs":{"keepRatio":false,"anchorSize":8,"x":145,"y":215},"className":"Transformer"}]}]}',
  items: [
    {
      id: "1",
      type: "text",
      name: "Welcome Text",
      x: 145,
      y: 219,
      text: "Welcome to Canva Editor!",
      fontSize: 48,
      fill: "#333",
      fontFamily: "Arial",
      fontWeight: "normal",
      fontStyle: "normal",
      textDecoration: "none",
      listType: "none",
      link: "",
      visible: true,
      locked: false,
    },
    {
      id: "2",
      type: "rect",
      name: "Background Rectangle",
      x: 209.56206534982948,
      y: 308.3900783645269,
      width: 371.87586930034115,
      height: 164.2198432709461,
      fill: "#ffffff",
      stroke: "#4A90E2",
      strokeWidth: 4,
      visible: true,
      locked: false,
      rotation: 0,
      scaleX: 1,
      scaleY: 1,
    },
    {
      id: "3",
      type: "circle",
      name: "Sample Circle",
      x: 400,
      y: 346,
      radius: 80,
      fill: "#ffffff",
      stroke: "#E53E3E",
      strokeWidth: 4,
      visible: true,
      locked: false,
    },
    {
      id: "5d27d20e-db28-46b1-ba2a-41485e139ad7",
      type: "video",
      name: "4133023-uhd_3840_2160_30fps.mp4",
      x: 200,
      y: 475,
      width: 400,
      height: 225,
      src: "videos/video_1.mp4",
      video: null,
      autoplay: false,
      loop: false,
      muted: true,
      visible: true,
      locked: false,
      originalSrc:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    },
  ],
  videos: [
    {
      id: "5d27d20e-db28-46b1-ba2a-41485e139ad7",
      type: "video",
      name: "4133023-uhd_3840_2160_30fps.mp4",
      x: 200,
      y: 475,
      width: 400,
      height: 225,
      src: "videos/video_1.mp4",
      video: null,
      autoplay: false,
      loop: false,
      muted: true,
      visible: true,
      locked: false,
      originalSrc:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    },
  ],
  exportDate: "2025-11-28T11:41:44.230Z",
  videoCount: 1,
};

const htmlContent = (data: DesignData) => `
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <script src="https://unpkg.com/konva@10/konva.min.js"></script>

<style>
html, body, #konva-container {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
}
</style>
</head>

<body style="margin:0;padding:0;overflow:hidden;">
  <div id="konva-container"></div>

  <script>

(function() {
        const rnMsg = (type, args) => {
          window.ReactNativeWebView.postMessage(
            JSON.stringify({ type, message: args })
          );
        };

        const originalLog = console.log;
        console.log = (...args) => {
            rnMsg("log", args);
            originalLog(...args);
        };

        const originalWarn = console.warn;
        console.warn = (...args) => {
            rnMsg("warn", args);
            originalWarn(...args);
        };

        const originalError = console.error;
        console.error = (...args) => {
            rnMsg("error", args);
            originalError(...args);
        };
    })();


  const jsonData = ${JSON.stringify(data)};
  const stageJSON = JSON.parse(jsonData.stage);
  const originalWidth = jsonData.canvas.width;
  const originalHeight = jsonData.canvas.height;
 

  const container = document.getElementById("konva-container");
  const displayedWidth = container.offsetWidth;
  const displayedHeight = container.offsetHeight;
  console.log('[DISPLAYED] Width:', displayedWidth, 'Height:', displayedHeight);
  const scaleX = displayedWidth / originalWidth;
  const scaleY = displayedHeight / originalHeight;
  console.log('[SCALE] X:', scaleX, 'Y:', scaleY);
  const scale = Math.min(scaleX, scaleY);

  const stage = Konva.Node.create(stageJSON, "konva-container");

  stage.scale({ x: scale, y: scale });
  stage.x((displayedWidth - originalWidth * scale)/2);
  stage.y((displayedHeight - originalHeight * scale)/2);
  stage.width(displayedWidth);
  stage.height(displayedHeight);
  stage.draw();

  jsonData.items.forEach((item) => {
   const node = stage.findOne("#" + item.id);
    if (!node) return;
    //making items not draggable
    node.draggable(false);
    // TEXT and SHAPES are already rendered via JSON
    if (["text", "rect", "circle", "line", "path"].includes(item.type)) {
      return; 
}

    // IMAGE HANDLING
    if (item.type === "image") {
    //Creating a browser Image element
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.src = item.src;

      img.onload = () => {
        node.image(img);
        //scheduling a redraw here to ensure the image is displayed
        stage.batchDraw();
      };
    }

    // VIDEO HANDLING
    if (item.type === "video") {
    const layer = node.getLayer();
    const videoLayer = new Konva.Layer();
    stage.add(videoLayer);
    console.log('[VIDEO] Layer found:', videoLayer ? 'yes' : 'no');
    const videoElement = document.createElement('video');
    videoElement.src = item.originalSrc;
    // videoElement.muted = true;
    videoElement.playsInline = true;
    videoElement.crossOrigin = "anonymous";
    videoElement.autoplay = true;
    videoElement.loop = item.loop ?? false;

    const image = new Konva.Image({
      image: videoElement,
      draggable: false,
      x: item.x,
      y: item.y,
    });
    videoLayer.add(image);
    // Create animation to continuously update the layer (following Konva docs pattern)
    const anim = new Konva.Animation(function () {
    }, videoLayer);

  videoElement.addEventListener('loadstart', function () {
        console.log('[VIDEO] loadstart event fired');
        sendMessage('loadstart');
      });
  videoElement.addEventListener('loadedmetadata', function () {
    console.log('[VIDEO] loadedmetadata event fired');
    image.width(item.width);
    image.height(item.height);
});
   videoElement.addEventListener('canplay', function () {
      console.log('[VIDEO] canplay event fired - video ready to play');
        const playPromise = videoElement.play();
        if (playPromise !== undefined) {
          playPromise.then(() => {
            anim.start();
          }).catch(error => {
            console.error('[VIDEO] Autoplay failed:', error);
            text.text('Click PLAY to start');
            stage.batchDraw();
          });
        }
    });
  }});

</script>
</body>
</html>
`;
export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.webviewContainer}>
        <WebView
          style={{ backgroundColor: "blue" }}
          originWhitelist={["*"]}
          source={{ html: htmlContent(brochureData) }}
          javaScriptEnabled={true}
          onMessage={(event: any) => {
            console.log("[WebView Message]:", event.nativeEvent.data);
          }}
          onConsoleMessage={(event: any) => {
            console.log("[WebView Console]:", event.nativeEvent.message);
          }}
          allowsInlineMediaPlayback={true}
          mediaPlaybackRequiresUserAction={false}
          setSupportMultipleWindows={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  webviewContainer: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
