import { useRouter } from 'expo-router';
import React from 'react';
import {
  View,
  Image,
  TouchableWithoutFeedback,
  ScrollView,
  Keyboard,
  StatusBar,
} from 'react-native';

import { LoginSuggestion } from '.';

import AppInput from '@/components/auth/AppInput';
import AppButton from '@/components/common/Button/AppButton';
import TextButton from '@/components/common/Button/TextButton';
import AppTextBody from '@/components/common/Typography/AppTextBody';
import AppTitle from '@/components/common/Typography/AppTitle';
import Colors from '@/theme/colors';
import { pixelSizeVertical as sv, pixelSizeHorizontal as sh, SCREEN_HEIGHT } from '@/theme/layout';
import Checkbox from 'expo-checkbox';

export default function Login() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [rememberMe, setRememberMe] = React.useState(false);

  const router = useRouter();

  return (
    <ScrollView
      style={{ flex: 1 }}
      bounces={SCREEN_HEIGHT <= 550}
      showsVerticalScrollIndicator={false}>
      <StatusBar translucent />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false} style={{ flex: 1 }}>
        <>
          <View
            style={{ height: '50%', backgroundColor: Colors.primary.DEFAULT }}
            className="items-center justify-center">
            <Image
              source={require('@/assets/images/sub2me-white.png')}
              style={{ width: 250, height: 50 }}
            />
          </View>
          <View style={{ padding: sv(20), flex: 1 }}>
            <AppTitle text="Log In" />
            <View style={{ paddingVertical: sv(20) }}>
              <AppInput
                placeholder="Enter your email or phone number"
                label="Email or Phone Number"
                additionalProps={{ value: email, onChangeText: setEmail }}
              />
            </View>
            <AppInput
              placeholder="Enter your password"
              label="Password"
              additionalProps={{ value: password, onChangeText: setPassword }}
            />
            <View className="flex-row justify-between" style={{ marginVertical: sv(20) }}>
              <View className="flex-row items-center gap-2.5">
                <Checkbox
                  style={{
                    padding: 6,
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: Colors.black[300],
                  }}
                  value={rememberMe}
                  onValueChange={setRememberMe}
                  color={rememberMe ? Colors.primary.DEFAULT : undefined}
                />
                <AppTextBody text="Remember Me" />
              </View>
              <View style={{ marginVertical: sv(-18) }}>
                <TextButton
                  title="Forgot Password?"
                  onPress={() =>
                    router.push({
                      pathname: '/create-password',
                      params: {
                        mode: 'change-password',
                      },
                    })
                  }
                  titleColor={Colors.primary.DEFAULT}
                />
              </View>
            </View>
            <View className="justify-end" style={{ paddingTop: 30 }}>
              <AppButton
                variant="primary"
                title="Login"
                onPress={
                  !email && !password
                    ? null
                    : () => {
                        router.replace('/(home)');
                      }
                }
              />
              <LoginSuggestion mode="register" />
            </View>
          </View>
        </>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
}
