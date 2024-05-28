import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';

import { LoginSuggestion } from '.';

import OTPInput from '@/components/auth/OTPInput';
import AppButton from '@/components/common/Button/AppButton';
import AppTitle from '@/components/common/Typography/AppTitle';
import { pixelSizeVertical as sv, pixelSizeHorizontal as sh } from '@/theme/layout';

export default function ConfirmPin() {
  const [value, setValue] = React.useState('');
  const { pin } = useLocalSearchParams();

  function canContinue() {
    return value.length === 6 && pin === value;
  }

  function handleCreatePin(pin: string) {
    Keyboard.dismiss();
  }

  function handleSignUp() {
    console.log(pin);
    console.log(value);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View className="flex-1 bg-white" style={{ paddingHorizontal: sv(20) }}>
        <View style={{ paddingBottom: sv(10) }}>
          <AppTitle text="Confirm your PIN" fontSize="large" />
        </View>
        <AppTitle text="Please confirm your PIN" fontSize="normal" fontWeight="medium" />

        <View style={{ paddingVertical: sv(30) }}>
          <OTPInput
            onCompleted={(v: string) => {
              setValue(v);
              handleCreatePin(v);
            }}
          />
        </View>

        <View className="mt-auto flex-1 justify-end" style={{ paddingVertical: sv(40) }}>
          <AppButton
            onPress={!canContinue() ? null : handleSignUp}
            title="Sign Up"
            variant="primary"
          />
          <LoginSuggestion />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
