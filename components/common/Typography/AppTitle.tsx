import { Text } from 'react-native';

import { fontSize as FontSize } from '@/theme/fonts';
import { fontPixel as f } from '@/theme/layout';
import convertFontValueToNumber from '@/utils/fontConverter';

export default function AppTitle({
  text,
  centerTitle = false,
  fontSize = 'medium',
  fontWeight = 'bold',
  textColor = 'text-black',
  additionalClasses,
  style,
}: {
  text: string;
  textColor?: string;
  centerTitle?: boolean;
  fontSize?: 'large' | 'medium' | 'normal';
  fontWeight?: 'light' | 'medium' | 'bold';
  additionalClasses?: string;
  style?: any;
}) {
  const finalFontSize =
    fontSize === 'normal' ? FontSize.lg : fontSize === 'medium' ? FontSize.xl : FontSize['2xl'];

  return (
    <Text
      className={`${textColor} ${fontWeight === 'light' ? 'font-Satoshi-Light' : fontWeight === 'medium' ? 'font-Satoshi-Medium' : 'font-Satoshi-Bold'} ${centerTitle && 'text-center'} leading-normal ${additionalClasses}`}
      style={[
        {
          fontSize: f(convertFontValueToNumber(finalFontSize)),
        },
        style,
      ]}>
      {text}
    </Text>
  );
}
