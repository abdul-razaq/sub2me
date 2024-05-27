import { Text } from 'react-native';
import { fontSize } from '@/theme/fonts';
import { fontPixel as f } from '@/theme/layout';
import convertFontValueToNumber from '@/utils/fontConverter';

export default function AppTextBody({
  text,
  centerText = false,
  style,
  classes,
}: {
  text: string;
  centerText?: boolean;
  style?: any;
  classes?: string;
}) {
  return (
    <Text
      className={`${classes} ${centerText && 'text-center'} font-Satoshi-Regular text-black-400 leading-normal tracking-normal`}
      style={[{ fontSize: f(convertFontValueToNumber(fontSize.base)) }, style]}>
      {text}
    </Text>
  );
}
