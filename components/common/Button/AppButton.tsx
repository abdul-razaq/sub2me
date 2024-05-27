import { View, Text } from 'react-native';

import Button from '.';

interface AppButtonProps {
  title?: string;
  onPress: (() => void) | null;
  variant?: 'primary' | 'secondary' | 'tertiary';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right' | 'center' | 'space-between';
  additionalClassNames?: string;
  additionalStyles?: any;
}

export default function AppButton({
  variant,
  title,
  onPress,
  icon,
  iconPosition,
  additionalClassNames,
  additionalStyles,
}: AppButtonProps) {
  let buttonBgColor: any;
  let buttonTextColor: any;

  let children: any;

  if (!onPress) {
    buttonBgColor = 'bg-neutral-100';
    buttonTextColor = 'text-black-300';
  } else if (variant === 'primary') {
    buttonBgColor = 'bg-primary';
    buttonTextColor = 'text-white';
  } else if (variant === 'secondary') {
    buttonBgColor = 'bg-primary-25';
    buttonTextColor = 'text-black-600';
  } else {
    buttonBgColor = 'bg-white';
    buttonTextColor = 'text-black-600';
  }

  if (icon) {
    children = (
      <View
        className={`flex-row items-center ${iconPosition === 'space-between' ? 'justify-between px-6' : 'justify-center gap-x-2'}`}>
        {iconPosition === 'left' && icon}
        {iconPosition === 'center' ? (
          icon
        ) : (
          <Text
            className={`${buttonTextColor} font-Satoshi-Medium text-center text-base`}
            numberOfLines={1}>
            {title}
          </Text>
        )}
        {(iconPosition === 'right' || iconPosition === 'space-between') && icon}
      </View>
    );
  } else {
    children = (
      <Text
        className={`${buttonTextColor} font-Satoshi-Medium text-center text-base`}
        numberOfLines={1}>
        {title}
      </Text>
    );
  }

  return (
    <Button
      bgColor={buttonBgColor}
      onPress={onPress}
      additionalClassNames={additionalClassNames}
      additionalStyles={additionalStyles}>
      {children}
    </Button>
  );
}
