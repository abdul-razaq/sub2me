import { Text } from 'react-native';

export default function AppSubTitle({
  text,
  centerTitle = true,
}: {
  text: string;
  centerTitle?: boolean;
}) {
  return (
    <Text
      className={`text-black font-Satoshi-Medium text-xl ${centerTitle && 'text-center'} leading-normal`}>
      {text}
    </Text>
  );
}
