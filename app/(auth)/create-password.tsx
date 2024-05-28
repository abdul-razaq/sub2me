import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';

import { LoginSuggestion } from '.';

import AppInput from '@/components/auth/AppInput';
import AppButton from '@/components/common/Button/AppButton';
import AppTitle from '@/components/common/Typography/AppTitle';
import { CreatePasswordFormData, CreatePasswordSchema } from '@/schema/auth';
import { pixelSizeVertical as sv, pixelSizeHorizontal as sh } from '@/theme/layout';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function CreatePassword() {
  const { mode } = useLocalSearchParams();
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<CreatePasswordFormData>({
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
    resolver: zodResolver(CreatePasswordSchema),
    mode: 'all',
    reValidateMode: 'onChange',
    shouldFocusError: true,
    shouldUnregister: true,
    criteriaMode: 'all',
  });

  const router = useRouter();

  function handleCreatePassword(data: CreatePasswordFormData) {
    router.replace('/create-pin');
  }

  function handleErrors(errors: any) {
    console.log(errors);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View className="flex-1 bg-white" style={{ paddingHorizontal: sv(20) }}>
        <AppTitle
          text={`${mode === 'register' ? 'Set' : 'Update'} your password`}
          fontSize="large"
        />

        <View className="gap-6" style={{ paddingVertical: sv(20) }}>
          <Controller
            name="password"
            control={control}
            render={({ field: { onChange, value, onBlur }, fieldState: { error, isTouched } }) => (
              <AppInput
                placeholder="Enter your password"
                label="Password"
                additionalProps={{ onChangeText: onChange, value, onBlur }}
                errorMessage={error?.message && isTouched ? error.message : ''}
              />
            )}
          />
          <Controller
            name="confirmPassword"
            control={control}
            render={({ field: { onChange, value, onBlur }, fieldState: { error, isTouched } }) => (
              <AppInput
                placeholder="Confirm password"
                label="Confirm Password"
                additionalProps={{ onChangeText: onChange, value, onBlur }}
                errorMessage={error?.message && isTouched ? error.message : ''}
              />
            )}
          />
        </View>

        <View className="mt-auto flex-1 justify-end" style={{ paddingVertical: sv(40) }}>
          <AppButton
            onPress={isValid ? handleSubmit(handleCreatePassword, handleErrors) : null}
            title="Next"
            variant="primary"
          />
          <LoginSuggestion />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
