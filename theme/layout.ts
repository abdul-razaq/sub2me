import { Dimensions, Platform, PixelRatio } from 'react-native';

export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// const wscale: number = SCREEN_WIDTH / 375;
// const hscale: number = SCREEN_HEIGHT / 667;

export const PREFERRED_DEFAULT_WIDTH = 390;
export const PREFERRED_DEFAULT_HEIGHT = 844;

const wscale: number = SCREEN_WIDTH / PREFERRED_DEFAULT_WIDTH;
const hscale: number = SCREEN_HEIGHT / PREFERRED_DEFAULT_HEIGHT;

const checkIfTablet = (): boolean => {
  const pixelDensity = PixelRatio.get();
  const adjustedWidth = SCREEN_WIDTH * pixelDensity;
  const adjustedHeight = SCREEN_WIDTH * pixelDensity;
  if (pixelDensity < 2 && (adjustedWidth >= 1000 || adjustedHeight >= 1000)) {
    return true;
  }
  return pixelDensity === 2 && (adjustedWidth >= 1920 || adjustedHeight >= 1920);
};

export function normalize(size: number, based: 'width' | 'height' = 'width'): number {
  // return size;
  const isTablet = checkIfTablet();

  const scale = based === 'width' ? wscale : hscale;
  const newSize = isTablet ? (size * scale) / 2 : size * scale;

  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  }
  return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
}

export const widthPixel = (size: number) => {
  return normalize(size, 'width');
};

export const heightPixel = (size: number) => {
  return normalize(size, 'height');
};

export const fontPixel = (size: number) => {
  return widthPixel(size);
};

//for Margin and Padding vertical pixel
export const pixelSizeVertical = (size: number) => {
  return heightPixel(size);
};
//for Margin and Padding horizontal pixel
export const pixelSizeHorizontal = (size: number) => {
  return widthPixel(size);
};
