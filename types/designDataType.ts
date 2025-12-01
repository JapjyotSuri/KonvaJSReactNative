interface DesignItem {
    id: string;
    type: string;
    name: string;
    x: number;
    y: number;
    visible?: boolean;
    locked?: boolean;
    rotation?: number;
    scaleX?: number;
    scaleY?: number;
    // Text props
    text?: string;
    fontSize?: number;
    fill?: string;
    fontFamily?: string;
    fontWeight?: string;
    fontStyle?: string;
    textDecoration?: string;
    listType?: string;
    link?: string;
    // Shape props
    width?: number;
    height?: number;
    radius?: number;
    stroke?: string;
    strokeWidth?: number;
    opacity?: number;
    // Image props
    src?: string;
    img?: any;
    cropWidth?: number;
    cropHeight?: number;
    // Video props
    video?: any;
    autoplay?: boolean;
    loop?: boolean;
    muted?: boolean;
    [key: string]: any;
  }
  export interface DesignData {
    version: string;
    canvas: {
      width: number;
      height: number;
      fill?: string;
    };
    stage?: string;
    items: DesignItem[];
    videos?: DesignItem[];
    backgroundColor?: string;
  }