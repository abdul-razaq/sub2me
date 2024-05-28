import React from 'react';
import { View } from 'react-native';
import { OtpInput } from 'react-native-otp-entry';

import Colors from '@/theme/colors';
import { fontSize } from '@/theme/fonts';
import { pixelSizeHorizontal as sh, pixelSizeVertical as sv, fontPixel as f } from '@/theme/layout';
import convertFontValueToNumber from '@/utils/fontConverter';

const OTPInput = React.forwardRef<any, any>(function OTPInput(props, ref) {
  const {
    onChangeText,
    onCompleted,
  }: {
    onChangeText?: (v: string) => void;
    onCompleted?: (v: string) => void;
  } = props;
  return (
    <View>
      <OtpInput
        ref={ref}
        numberOfDigits={6}
        focusColor={Colors.primary.DEFAULT}
        focusStickBlinkingDuration={500}
        onTextChange={onChangeText}
        onFilled={onCompleted}
        theme={{
          containerStyle: {},
          inputsContainerStyle: {},

          pinCodeTextStyle: {
            fontSize: f(convertFontValueToNumber(fontSize['2xl'])),
            color: Colors.black[400],
          },
        }}
      />
    </View>
  );
});

export default OTPInput;
