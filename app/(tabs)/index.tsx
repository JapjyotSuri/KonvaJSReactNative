import { Linking, StyleSheet } from "react-native";

import { View } from "@/components/Themed";
import { DesignData } from "@/types/designDataType";
import WebView from "react-native-webview";

const brochureData = {
  version: "1.0",
  canvas: {
    width: 552,
    height: 737,
  },
  stage:
    '{"attrs":{"width":552,"height":737},"className":"Stage","children":[{"attrs":{},"className":"Layer","children":[{"attrs":{"id":"bg","width":552,"height":737,"fill":"#e7caa5"},"className":"Rect"},{"attrs":{"x":-1,"y":-1,"scaleX":1.1962665928350547,"scaleY":1.1962665928350547,"draggable":true,"id":"7baeab86-940b-4cb7-a3e5-877b02eb9908","width":552.9999999999998,"height":737.9999999999998,"opacity":0.66,"cropWidth":1080,"cropHeight":1620},"className":"Image"},{"attrs":{"x":336.9002240356156,"y":666.5525495306292,"scaleX":1.1200337934741231,"scaleY":1.1200337934741231,"draggable":true,"id":"7cac8df7-02ea-463f-b14c-101d88ea4e93","text":"Join us here","fontSize":26,"fill":"#050505","fontWeight":"bold"},"className":"Text"},{"attrs":{"x":361,"draggable":true,"id":"32222791-5d6e-44f5-85da-6482a7120866","width":200,"height":200,"fill":"#E0E0E0","opacity":0.3,"stroke":"#999","strokeWidth":1},"className":"Rect"},{"attrs":{"x":129.00000000000003,"y":191,"draggable":true,"id":"13286dfc-9e5f-46e0-bda1-2262d619b077","width":227.00000000000006,"height":317.2859084730396,"cropWidth":1080,"cropHeight":1532},"className":"Image"},{"attrs":{"x":178.99999999999994,"y":219,"draggable":true,"id":"956b0665-0dcd-4f2c-a496-cd001036e0da","width":124.00000000000007,"height":32.14285714285705},"className":"Group","children":[{"attrs":{"width":124.00000000000007,"height":32.14285714285705,"fill":"#070708","cornerRadius":34,"shadowBlur":6,"shadowColor":"black"},"className":"Rect"},{"attrs":{"text":"View more","fontSize":22,"fill":"#ffffff","align":"center","verticalAlign":"middle","width":124.00000000000007,"height":32.14285714285705,"y":5.071428571428527},"className":"Text"}]},{"attrs":{"x":352.38884747905024,"y":139.24052642021255,"rotation":213.64199999973178,"scaleX":1.13927277425239,"scaleY":1.13927277425239,"draggable":true,"id":"4e44ac5b-08d7-4008-9952-922739457a1a","innerRadius":30,"outerRadius":70,"fill":"#ffffff","stroke":"#a6c983","strokeWidth":20,"opacity":0.9752481883155353},"className":"Star"},{"attrs":{"x":6,"y":9,"draggable":true,"id":"1","text":"Italy Diaries","fontSize":58,"fill":"#e6aa41","fontFamily":"Georgia","fontWeight":"bold","textDecoration":"none"},"className":"Text"},{"attrs":{"x":0.746268656716418,"y":577.7180616740089,"draggable":true,"id":"04757c29-b9ec-4a17-a7a2-9209fd711ec2","width":298.5074626865672,"height":161.5638766519821,"fill":"#000000","opacity":0.3,"stroke":"#666","strokeWidth":1},"className":"Rect"},{"attrs":{"x":49.5,"y":110.49999999999983,"rotation":345.6719999997318,"scaleX":1.1200337934741231,"scaleY":1.1200337934741231,"draggable":true,"id":"da5dc991-a8e2-4097-a96c-4678b6eb6d86","radius":42.6470588235294,"fill":"#ffffff","stroke":"#333","strokeWidth":4},"className":"Circle"},{"attrs":{"x":63.5,"y":256.5966086828001,"rotation":341.22600000053643,"scaleX":1.187507450860299,"scaleY":1.187507450860299,"draggable":true,"id":"b92fbee8-c56f-4dda-8573-5ab9a4648ff0","radius":42.6470588235294,"fill":"#ffffff","stroke":"#333","strokeWidth":4},"className":"Circle"},{"attrs":{"x":67.5,"y":405.38026543445176,"draggable":true,"id":"e44ad22a-f6e7-467b-bb8c-2901c1ea9459","radius":42.6470588235294,"fill":"#ffffff","stroke":"#333","strokeWidth":4,"opacity":0.7201182771594306},"className":"Circle"},{"attrs":{"x":171.5,"y":144.9999999999999,"rotation":36.88200000107288,"draggable":true,"id":"ceda915a-e157-44ca-892b-a529d61504e3","innerRadius":30,"outerRadius":70,"fill":"#ffffff","stroke":"#333","strokeWidth":4},"className":"Star"},{"attrs":{"x":431.0903317264122,"y":338,"draggable":true,"id":"91441566-30af-441a-a355-372621bbbcb8","radiusX":80,"radiusY":40,"fill":"#ffffff","stroke":"#333","strokeWidth":4},"className":"Ellipse"},{"attrs":{"keepRatio":false,"anchorSize":8,"x":336.5810467981125},"className":"Transformer"}]}]}',
  items: [
    {
      id: "b60ac386-fed6-473c-ba20-77f5a8fa2739",
      type: "image",
      name: "just-do-it-eric-cartman.webp",
      x: 299,
      y: 247,
      width: 200,
      height: 200,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRInKFKLo7HSnAQ5DGzi7s0OwOSoQ7qxFHyrA&s",
      img: null,
      opacity: 1,
      visible: true,
      locked: false,
      clipType: "ellipse",
      clipParams: {},
    },
    {
      id: "7baeab86-940b-4cb7-a3e5-877b02eb9908",
      type: "image",
      name: "Old stone buildings illuminated at dusk",
      x: -1,
      y: -1,
      width: 552.9999999999998,
      height: 737.9999999999998,
      src: "https://images.unsplash.com/photo-1764377723223-2353064702b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MjY5MjJ8MHwxfGFsbHw1fHx8fHx8Mnx8MTc2NDY2MDE5M3w&ixlib=rb-4.1.0&q=80&w=1080",
      img: null,
      opacity: 0.66,
      visible: true,
      locked: false,
      rotation: 0,
      scaleX: 1,
      scaleY: 1,
    },
    {
      id: "7cac8df7-02ea-463f-b14c-101d88ea4e93",
      type: "link",
      name: "Web Link",
      x: 336.9002240356156,
      y: 666.5525495306292,
      text: "Join us here",
      url: "https://www.italia.it/en",
      fontSize: 26,
      fill: "#050505",
      underline: false,
      fontFamily: "Arial",
      fontWeight: "bold",
      visible: true,
      locked: false,
      animation: {
        type: "pulse",
        duration: 2000,
        infinite: true,
        direction: "alternate",
      },
    },
    {
      id: "32222791-5d6e-44f5-85da-6482a7120866",
      type: "gif",
      name: "just-do-it-eric-cartman.webp",
      x: 361,
      y: 0,
      width: 200,
      height: 200,
      src: "https://raw.githubusercontent.com/JapjyotSuri/GifUrl/main/just-do-it-eric-cartman-ezgif.com-webp-to-gif-converter.gif",
      img: null,
      opacity: 1,
      visible: true,
      locked: false,
    },
    {
      id: "13286dfc-9e5f-46e0-bda1-2262d619b077",
      type: "image",
      name: "Man in uniform on boat with ferries and island.",
      x: 129.00000000000003,
      y: 191,
      width: 227.00000000000006,
      height: 317.2859084730396,
      src: "https://images.unsplash.com/photo-1763906667589-ae7b7d60a371?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MjY5MjJ8MHwxfGFsbHw1Mnx8fHx8fDJ8fDE3NjQ2NjAyMDl8&ixlib=rb-4.1.0&q=80&w=1080",
      img: null,
      opacity: 1,
      visible: true,
      locked: false,
      rotation: 0,
      scaleX: 1,
      scaleY: 1,
    },
    {
      id: "956b0665-0dcd-4f2c-a496-cd001036e0da",
      type: "button",
      name: "CTA Button",
      x: 178.99999999999994,
      y: 219,
      width: 124.00000000000007,
      height: 32.14285714285705,
      text: "View more",
      url: "https://www.italia.it/en",
      fill: "#070708",
      textColor: "#ffffff",
      fontSize: 22,
      cornerRadius: 34,
      shadowBlur: 6,
      shadowColor: "black",
      visible: true,
      locked: false,
    },
    {
      id: "4e44ac5b-08d7-4008-9952-922739457a1a",
      type: "star",
      name: "Star",
      x: 400.9999999999999,
      y: 157.9999999999998,
      numPoints: 5,
      innerRadius: 30,
      outerRadius: 70,
      fill: "#ffffff",
      stroke: "#a6c983",
      strokeWidth: 20,
      visible: true,
      locked: false,
      rotation: 0,
      scaleX: 1,
      scaleY: 1,
    },
    {
      id: "1",
      type: "text",
      name: "Welcome Text",
      x: 6,
      y: 9,
      text: "Italy Diaries",
      fontSize: 58,
      fill: "#e6aa41",
      fontFamily: "Georgia",
      fontWeight: "bold",
      fontStyle: "normal",
      textDecoration: "none",
      listType: "none",
      link: "",
      visible: true,
      locked: false,
      rotation: 0,
      scaleX: 1,
      scaleY: 1,
      strokeWidth: 9,
    },
    {
      id: "04757c29-b9ec-4a17-a7a2-9209fd711ec2",
      type: "video",
      name: "4133023-uhd_3840_2160_30fps.mp4",
      x: 0.746268656716418,
      y: 577.7180616740089,
      width: 298.5074626865672,
      height: 161.5638766519821,
      originalSrc:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      src: "hello.mp4",
      video: null,
      autoplay: true,
      loop: true,
      muted: true,
      visible: true,
      locked: false,
      rotation: 0,
      scaleX: 1,
      scaleY: 1,
    },
    {
      id: "da5dc991-a8e2-4097-a96c-4678b6eb6d86",
      type: "circle",
      name: "Circle",
      x: 49.5,
      y: 110.49999999999983,
      radius: 42.6470588235294,
      fill: "#ffffff",
      stroke: "#333",
      strokeWidth: 4,
      visible: true,
      locked: false,
      rotation: 0,
      scaleX: 1,
      scaleY: 1,
      animation: {
        type: "pulse",
        duration: 2000,
        infinite: true,
        direction: "alternate",
      },
    },
    {
      id: "b92fbee8-c56f-4dda-8573-5ab9a4648ff0",
      type: "circle",
      name: "Circle Copy",
      x: 63.5,
      y: 268.5999880302124,
      radius: 42.6470588235294,
      fill: "#ffffff",
      stroke: "#333",
      strokeWidth: 4,
      visible: true,
      locked: false,
      rotation: 0,
      scaleX: 1,
      scaleY: 1,
      animation: {
        type: "bounce",
        duration: 2000,
        infinite: true,
        direction: "alternate",
      },
    },
    {
      id: "e44ad22a-f6e7-467b-bb8c-2901c1ea9459",
      type: "circle",
      name: "Circle Copy Copy",
      x: 67.5,
      y: 405.38026543445176,
      radius: 42.6470588235294,
      fill: "#ffffff",
      stroke: "#333",
      strokeWidth: 4,
      visible: true,
      locked: false,
      rotation: 0,
      scaleX: 1,
      scaleY: 1,
      animation: {
        type: "fade",
        duration: 2000,
        infinite: true,
        direction: "alternate",
      },
    },
    {
      id: "ceda915a-e157-44ca-892b-a529d61504e3",
      type: "star",
      name: "Star",
      x: 171.5,
      y: 144.9999999999999,
      numPoints: 5,
      innerRadius: 30,
      outerRadius: 70,
      fill: "#ffffff",
      stroke: "#333",
      strokeWidth: 4,
      visible: true,
      locked: false,
      rotation: 0,
      scaleX: 1,
      scaleY: 1,
      animation: {
        type: "rotate",
        duration: 2000,
        infinite: true,
        direction: "alternate",
      },
    },
    {
      id: "91441566-30af-441a-a355-372621bbbcb8",
      type: "ellipse",
      name: "Ellipse",
      x: 401.08188335788145,
      y: 338,
      radiusX: 80,
      radiusY: 40,
      fill: "#ffffff",
      stroke: "#333",
      strokeWidth: 4,
      visible: true,
      locked: false,
      animation: {
        type: "slide",
        duration: 2000,
        infinite: true,
        direction: "alternate",
      },
    },
  ],
  videos: [
    {
      id: "04757c29-b9ec-4a17-a7a2-9209fd711ec2",
      type: "video",
      name: "4133023-uhd_3840_2160_30fps.mp4",
      x: 0.746268656716418,
      y: 577.7180616740089,
      width: 298.5074626865672,
      height: 161.5638766519821,
      src: "hello.mp4",
      originalSrc:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      video: null,
      autoplay: true,
      loop: true,
      muted: true,
      visible: true,
      locked: false,
      rotation: 0,
      scaleX: 1,
      scaleY: 1,
    },
  ],
  images: [
    {
      id: "32222791-5d6e-44f5-85da-6482a7120866",
      type: "gif",
      name: "just-do-it-eric-cartman.webp",
      x: 361,
      y: 0,
      width: 200,
      height: 200,
      src: "https://raw.githubusercontent.com/JapjyotSuri/GifUrl/main/just-do-it-eric-cartman-ezgif.com-webp-to-gif-converter.gif",
      img: null,
      opacity: 1,
      visible: true,
      locked: false,
    },
  ],
  exportDate: "2025-12-03T12:57:28.466Z",
  videoCount: 1,
  imageCount: 1,
};

const htmlContent = (data: DesignData) => `
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <script src="https://unpkg.com/konva@10/konva.min.js"></script>
  <script src="https://unpkg.com/gifler@0.1.0/gifler.min.js"></script>

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
  const scaleX = displayedWidth / originalWidth;
  const scaleY = displayedHeight / originalHeight;
  const scale = Math.min(scaleX, scaleY);

  const stage = Konva.Node.create(stageJSON, "konva-container");

  stage.scale({ x: scale, y: scale });
  stage.x((displayedWidth - originalWidth * scale)/2);
  stage.y((displayedHeight - originalHeight * scale)/2);
  stage.width(displayedWidth);
  stage.height(displayedHeight);
  stage.draw();

  function applyAnimationsToNode(node, item) {
    if (item.animation === undefined) return;
    const { duration, infinite, direction } = item.animation;
    
    console.log('[ANIMATION] animation:', item.animation);
    switch (item.animation.type) {
      case "pulse":
        const anim = new Konva.Animation(function(frame) {
        const progress = (frame.time % duration) / duration;
        // const scale = Math.sin( Math.PI * 2 * progress);
        const scaleAnim = (Math.sin(frame.time * 1.75 * Math.PI / duration) * scale * 0.3) + 1;
        // node.scale({x: scale, y: scale});
        node.scaleX(scaleAnim);
        node.scaleY(scaleAnim);
      }, node.getLayer());
      anim.start();
      break;
      case "fade":
        const fadeAnim = new Konva.Animation(function(frame) {
        const progress = (frame.time % duration) / duration;
        const opacAnim = (Math.sin(frame.time * 2.5 * Math.PI / duration)) + 1.4;
        node.opacity(opacAnim);
      }, node.getLayer());
      fadeAnim.start();
      break;
      case "bounce":
        const originalY = node.y();
        const bounceDistance = 20;
         const tween = new Konva.Tween({
           node: node,
            duration: duration/2000,
             y: originalY + bounceDistance,
             easing: Konva.Easings.Bounce,
             yoyo: true,
         });
         tween.play();
        break;
      case "rotate":
        const rotateTween = new Konva.Tween({
          node: node,
          duration: duration/1000,
          rotation: 360,
        });
       onFinish: () => {
        // Reset rotation so the angle doesnt overflow
        node.rotation(0);
        startRotation(); // restart again for infinite loop
      },
        rotateTween.play();
        break;
      case "slide":

        break;
    };
}
     
  jsonData.items.forEach((item) => {
   const node = stage.findOne("#" + item.id);
    if (!node) return;
    //making items not draggable
    node.draggable(false); 
    // TEXT and SHAPES are already rendered via JSON
    if (["text", "rect", "circle", "line", "path"].includes(item.type)) {
      //do nothing
    }

    const layer = node.getLayer();
    // IMAGE HANDLING
    if (item.type === "image") {
    const imgLayer = new Konva.Layer();
    stage.add(imgLayer);
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.src = item.src;

      img.onload = () => {
      const konvaImage = new Konva.Image({
      x: item.x,
      y: item.y,
      image: img,
      opacity: item.opacity ?? 1,
      rotation: item.rotation ?? 0,
      width: item.width,
      height: item.height,
      draggable: false,
      scaleX: item.scaleX ?? 1,
      scaleY: item.scaleY ?? 1,
  });
        layer.add(konvaImage);
        konvaImage.zIndex(node.zIndex());
        //scheduling a redraw here to ensure the image is displayed
        stage.batchDraw();
      };
    }

    // VIDEO HANDLING
    if (item.type === "video") {
    const layer = node.getLayer();
    const videoLayer = new Konva.Layer();
    stage.add(videoLayer);
    const videoElement = document.createElement('video');
    videoElement.src = item.originalSrc;
    videoElement.muted = true;
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
      });
  videoElement.addEventListener('loadedmetadata', function () {
    image.width(item.width);
    image.height(item.height);
});
   videoElement.addEventListener('canplay', function () {
        const playPromise = videoElement.play();
        if (playPromise !== undefined) {
          playPromise.then(() => {
            anim.start();
          }).catch(error => {
            console.error('[VIDEO] Autoplay failed:', error);
            stage.batchDraw();
          });
        }
    });
  }
 
if (item.type === "gif") {
const placeholderNode = stage.findOne("#" + item.id);
    if (placeholderNode) {
      placeholderNode.visible(false);
    }

    const gifLayer = new Konva.Layer();
    stage.add(gifLayer);
    const canvas = document.createElement('canvas');
    
    canvas.width = item.width;
    canvas.height = item.height;
  function onDrawFrame(ctx, frame) {
  
  ctx.drawImage(frame.buffer, 0 , 0);
  // redraw the layer
  gifLayer.draw();
}

  gifler('https://raw.githubusercontent.com/JapjyotSuri/GifUrl/main/just-do-it-eric-cartman-ezgif.com-webp-to-gif-converter.gif').frames(canvas, onDrawFrame);

const image = new Konva.Image({
  image: canvas,
  x: item.x,
  y: item.y,
  width: item.width,
  height: item.height,
  draggable: false,
});
gifLayer.add(image);

  }
if (item.type === "link" || item.type === "button") {
  const linkNode = stage.findOne("#" + item.id);
  if (linkNode) {
    linkNode.on('touchend', () => {
  window.ReactNativeWebView.postMessage(
    JSON.stringify({
      type: "link_click",
      url: item.url
    })
  );
});
  }
}

  // applyAnimationsToNode(node, item);
 });
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
          onMessage={(event) => {
            try {
              console.log("[MESSAGE] Message:", event.nativeEvent.data);
              const data = JSON.parse(event.nativeEvent.data);

              if (data.type === "link_click") {
                console.log("Opening URL:", data.url);
                Linking.openURL(data.url);
              }
            } catch (e) {
              console.warn("Invalid message from web:", e);
            }
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
    width: "70%",
    height: "70%",
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
