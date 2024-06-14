import { Eye, EyeSlash, Warning2 } from 'iconsax-react-native';
import React from 'react';
import { View, Text, KeyboardTypeOptions } from 'react-native';

import Input from '@/components/auth/Input';
import Colors from '@/theme/colors';

interface AppInputProps {
  label?: string;
  placeholder: string;
  keyboardType?: KeyboardTypeOptions;
  icon?: React.ReactNode;
  errorMessage?: string;
  hintText?: string;
  additionalProps?: any;
}
export default function AppInput({
  label,
  placeholder,
  icon,
  errorMessage,
  hintText,
  additionalProps,
  keyboardType = 'default',
}: AppInputProps) {
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

  const isPasswordInput =
    label?.toLowerCase().includes('password') || placeholder.toLowerCase().includes('password');

  const passwordIcon =
    isPasswordInput && !isPasswordVisible ? (
      <Eye
        size="24"
        color={errorMessage ? Colors.error[300] : Colors.black[300]}
        style={{ position: 'absolute', right: 15, top: errorMessage ? '23%' : '32%' }}
        onPress={() => setIsPasswordVisible((prevValue) => !prevValue)}
      />
    ) : (
      <EyeSlash
        size="24"
        color={errorMessage ? Colors.error[300] : Colors.black[300]}
        style={{ position: 'absolute', right: 15, top: errorMessage ? '23%' : '32%' }}
        onPress={() => setIsPasswordVisible((prevValue) => !prevValue)}
      />
    );

  return (
    <View>
      <Text className="mb-2 font-Satoshi-Medium text-md leading-normal tracking-normal text-inputLabel">
        {label}
      </Text>
      <View className="w-full">
        <Input
          inputProps={{
            placeholder,
            keyboardType,
            secureTextEntry: isPasswordInput && !isPasswordVisible,
            ...additionalProps,
          }}
          errorMessage={errorMessage}
          hintText={hintText}
        />
        {icon && !errorMessage && <View className="absolute right-4 top-6">{icon}</View>}
        {isPasswordInput && !errorMessage && passwordIcon}
        {errorMessage && (
          <Warning2
            size="24"
            color={Colors.error[300]}
            variant="Bold"
            style={{ position: 'absolute', right: 15, top: errorMessage ? '23%' : '32%' }}
          />
        )}
      </View>
    </View>
  );
}
