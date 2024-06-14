import { ArrowRight2 } from 'iconsax-react-native';
import { View, Text, Pressable } from 'react-native';

import Colors from '@/theme/colors';

interface ListTileProps {
  title: string;
  titleColor?: string;
  titleWeight?: 'bold' | 'light' | 'medium';
  icon?: React.ReactNode;
  withBorder?: boolean;
  withArrow?: boolean;
  bodyText?: string;
  bodyTextColor?: string;
  additionalNode?: React.ReactNode;
  onPress?: () => void;
}

export default function ListTile({
  title,
  titleColor = 'black',
  titleWeight = 'light',
  icon,
  withBorder,
  withArrow = true,
  bodyText,
  bodyTextColor = 'black-400',
  additionalNode,
  onPress = () => {},
}: ListTileProps) {
  return (
    <Pressable
      onPress={onPress}
      className={`w-full ${withBorder ? 'bg-white border border-black-50 rounded-xl' : ''} flex-row items-center ${!additionalNode ? 'justify-between p-5' : 'py-2 px-4'} `}>
      {icon && <View className="mr-3">{icon}</View>}
      <View className={`${!additionalNode ? 'w-10/12' : ''}`}>
        <Text
          className={`text-base leading-normal tracking-wide text-${titleColor} ${titleWeight === 'light' ? 'font-Satoshi-Regular' : titleWeight === 'medium' ? 'font-Satoshi-Medium' : 'font-Satoshi-Bold'} ${!additionalNode ? 'flex-1' : 'mr-4'}`}
          numberOfLines={2}>
          {title}
        </Text>
        {bodyText && (
          <Text
            className={`text-base leading-normal tracking-wide text-${bodyTextColor} font-Satoshi-Light mt-1`}
            numberOfLines={1}>
            {bodyText}
          </Text>
        )}
      </View>
      {withArrow && <ArrowRight2 size="24" color={Colors.black[500]} />}
      {additionalNode && <View className="ml-auto">{additionalNode}</View>}
    </Pressable>
  );
}
