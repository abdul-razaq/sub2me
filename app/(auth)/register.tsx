import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'expo-router';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';

import { LoginSuggestion } from '.';

import AppInput from '@/components/auth/AppInput';
import AppButton from '@/components/common/Button/AppButton';
import TextButton from '@/components/common/Button/TextButton';
import AppTextBody from '@/components/common/Typography/AppTextBody';
import AppTitle from '@/components/common/Typography/AppTitle';
import { CreateAccountFormData, CreateAccountSchema } from '@/schema/auth';
import Colors from '@/theme/colors';
import { FontFamily, fontSize } from '@/theme/fonts';
import {
  pixelSizeVertical as sv,
  pixelSizeHorizontal as sh,
  fontPixel as f,
  SCREEN_HEIGHT,
} from '@/theme/layout';
import convertFontValueToNumber from '@/utils/fontConverter';

export default function Register() {
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<CreateAccountFormData>({
    defaultValues: {
      email: '',
      fullname: '',
      phoneNumber: '',
      referralCode: '',
    },
    resolver: zodResolver(CreateAccountSchema),
    mode: 'all',
    reValidateMode: 'onChange',
    shouldFocusError: true,
    shouldUnregister: true,
    criteriaMode: 'all',
  });

  function handleRegister(data: CreateAccountFormData) {
    router.replace({
      pathname: '/create-password',
      params: {
        mode: 'register',
      },
    });
  }

  function handleErrors(errors: any) {
    console.log(errors);
  }

  return (
    <ScrollView className="flex-1 bg-white" bounces={SCREEN_HEIGHT <= 550}>
      <KeyboardAvoidingView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View className="flex-1" style={{ paddingHorizontal: sh(20) }}>
            <AppTitle text="Let's sign you up" fontSize="large" />

            <View className="gap-6" style={{ paddingVertical: sv(20) }}>
              <Controller
                name="fullname"
                control={control}
                render={({
                  field: { onChange, value, onBlur },
                  fieldState: { error, isTouched },
                }) => (
                  <AppInput
                    placeholder="Full Name..."
                    label="Full Name"
                    additionalProps={{ onChangeText: onChange, value, onBlur }}
                    errorMessage={error?.message && isTouched ? error.message : ''}
                  />
                )}
              />
              <Controller
                name="phoneNumber"
                control={control}
                render={({
                  field: { onChange, value, onBlur },
                  fieldState: { error, isTouched },
                }) => (
                  <AppInput
                    placeholder="Phone Number"
                    label="Phone Number"
                    additionalProps={{ onChangeText: onChange, value, onBlur }}
                    errorMessage={error?.message && isTouched ? error.message : ''}
                  />
                )}
              />
              <Controller
                name="email"
                control={control}
                render={({
                  field: { onChange, value, onBlur },
                  fieldState: { error, isTouched },
                }) => (
                  <AppInput
                    placeholder="Email"
                    label="Enter your email address (e.g foo@example.com)"
                    additionalProps={{ onChangeText: onChange, value, onBlur }}
                    errorMessage={error?.message && isTouched ? error.message : ''}
                  />
                )}
              />
              <Controller
                name="referralCode"
                control={control}
                render={({
                  field: { onChange, value, onBlur },
                  fieldState: { error, isTouched },
                }) => (
                  <AppInput
                    placeholder="Enter your referral code (e.g ef342d)"
                    label="Referral Code (optional)"
                    additionalProps={{ onChangeText: onChange, value, onBlur }}
                    errorMessage={error?.message && isTouched ? error.message : ''}
                  />
                )}
              />
            </View>

            <View className="flex-row flex-wrap content-center justify-center gap-2">
              <AppTextBody
                text="By registering, you agree to Sub2Me's"
                style={{
                  marginTop: sv(18),
                  fontFamily: FontFamily['Satoshi-Medium'],
                  fontSize: f(convertFontValueToNumber(fontSize['base'])),
                }}
              />
              <View style={{ marginTop: sv(-20) }}>
                <TextButton
                  title="Terms & Conditions"
                  onPress={() => {}}
                  titleColor={Colors.primary.DEFAULT}
                />
              </View>
              <View style={{ marginTop: sv(-20) }}>
                <AppTextBody
                  text="and"
                  style={{
                    marginTop: sv(18),
                    fontFamily: FontFamily['Satoshi-Medium'],
                    fontSize: f(convertFontValueToNumber(fontSize['base'])),
                  }}
                />
              </View>
              <View style={{ marginTop: sv(-20) }}>
                <TextButton
                  title="Privacy Policy"
                  onPress={() => {}}
                  titleColor={Colors.primary.DEFAULT}
                />
              </View>
            </View>

            <View className="mt-auto flex-1 justify-end">
              <AppButton
                onPress={isValid ? handleSubmit(handleRegister, handleErrors) : null}
                title="Next"
                variant="primary"
              />
              <LoginSuggestion />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}
