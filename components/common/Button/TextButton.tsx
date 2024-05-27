import { Text } from 'react-native';

import Button from '.';

import Colors from '@/theme/colors';
import { fontSize } from '@/theme/fonts';
import { fontPixel as f } from '@/theme/layout';
import convertFontValueToNumber from '@/utils/fontConverter';

export default function TextButton({
  title,
  onPress,
  titleColor = 'text-black-600',
  underline = false,
  underlineColor = 'border-black-500',
}: {
  title: string;
  titleColor?: string;
  underline?: boolean;
  underlineColor?: string;
  onPress: (() => void) | null;
}) {
  return (
    <Button bgColor={Colors.transparent} onPress={onPress}>
      <Text
        className={`${titleColor} font-Satoshi-Bold text-center ${underline && `border-b-2 ${underlineColor}`}`}
        numberOfLines={1}
        style={{ fontSize: f(convertFontValueToNumber(fontSize.base)) }}>
        {title}
      </Text>
    </Button>
  );
}
