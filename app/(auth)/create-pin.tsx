import { useRouter } from 'expo-router';
import React from 'react';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';

import OTPInput from '@/components/auth/OTPInput';
import AppTitle from '@/components/common/Typography/AppTitle';
import { pixelSizeVertical as sv } from '@/theme/layout';

export default function CreatePin() {
  const [value, setValue] = React.useState('');
  const router = useRouter();

  function handleCreatePin(pin: string) {
    router.push({
      pathname: '/confirm-pin',
      params: {
        pin,
      },
    });
  }

  const ref = React.createRef<any>();

  React.useEffect(() => {
    ref.current?.clear();
  }, []);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View className="flex-1 bg-white" style={{ paddingHorizontal: sv(20) }}>
        <View style={{ paddingBottom: sv(10) }}>
          <AppTitle text="Set your PIN" fontSize="large" />
        </View>
        <AppTitle
          text="Your PIN is a four digit numerical code that is used to authenticate every transaction"
          fontSize="normal"
          fontWeight="medium"
        />

        <View style={{ paddingVertical: sv(30) }}>
          <OTPInput
            ref={ref}
            onCompleted={(v: any) => {
              setValue(v);
              handleCreatePin(v);
            }}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
