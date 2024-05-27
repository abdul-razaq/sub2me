import { View, Text } from 'react-native';

import TextButton from '@/components/common/Button/TextButton';

export default function AuthFooter({
  footerText,
  footerButtonTitle,
  onPress,
}: {
  footerText: string;
  footerButtonTitle: string;
  onPress: () => void;
}) {
  return (
    <View className="flex-row items-center justify-center">
      <Text className="font-Satoshi-Medium text-lg">{footerText} </Text>
      <TextButton title={footerButtonTitle} onPress={onPress} underline />
    </View>
  );
}
