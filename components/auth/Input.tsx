import React from 'react';
import { View, Text, TextInput } from 'react-native';

import Colors from '@/theme/colors';
import { FontFamily } from '@/theme/fonts';
import {
  pixelSizeHorizontal as sh,
  pixelSizeVertical as sv,
  widthPixel as w,
  heightPixel as h,
  fontPixel as f,
  SCREEN_HEIGHT,
} from '@/theme/layout';

export interface InputProps {
  hintText?: string;
  errorMessage?: string;
  inputProps: any;
}

export default function Input({ hintText, errorMessage, inputProps }: InputProps) {
  const [isFocused, setIsFocused] = React.useState(false);

  return (
    <View>
      <TextInput
        style={[
          {
            paddingVertical: 15,
            paddingHorizontal: 16,
            borderColor:
              isFocused && !errorMessage
                ? Colors.primary[200]
                : errorMessage
                  ? Colors.error[300]
                  : Colors.black[50],
            borderWidth: errorMessage || isFocused ? 2 : 1,
            borderRadius: 5,
            color: Colors.black.DEFAULT,
            fontFamily: FontFamily['Satoshi-Medium'],
            fontSize: f(16),
            letterSpacing: 0.5,
          },
          inputProps.styles,
        ]}
        {...inputProps}
        placeholderTextColor={Colors.inputPlaceholder}
        cursorColor={Colors.primary.DEFAULT}
        autoCapitalize="none"
        onFocus={() => setIsFocused(true)}
        onBlur={() => {
          inputProps.onBlur && inputProps.onBlur();
          setIsFocused(false);
        }}
      />
      {hintText && <Text className="font-Satoshi-Medium text-black my-2">{hintText}</Text>}
      {errorMessage && (
        <Text className="font-Satoshi-Medium text-error-300 mt-2">{errorMessage}</Text>
      )}
    </View>
  );
}
