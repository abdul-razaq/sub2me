import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { View, Pressable } from 'react-native';

import AppButton from '@/components/common/Button/AppButton';
import TextButton from '@/components/common/Button/TextButton';
import AppTextBody from '@/components/common/Typography/AppTextBody';
import AppTitle from '@/components/common/Typography/AppTitle';
import Colors from '@/theme/colors';
import { FontFamily, fontSize } from '@/theme/fonts';
import { pixelSizeHorizontal as sh, pixelSizeVertical as sv, fontPixel as f } from '@/theme/layout';
import convertFontValueToNumber from '@/utils/fontConverter';

export default function AuthIndex() {
  const [userType, setUserType] = React.useState<'subscriber' | 'agent'>('subscriber');

  const router = useRouter();

  return (
    <View className="flex-1 bg-white" style={{ padding: sv(20) }}>
      <AppTitle text="How would you like to join?" fontSize="large" fontWeight="bold" />

      <View className="gap-6" style={{ paddingTop: sv(30) }}>
        <CheckBox
          title="As a Subscriber"
          subtitle="Purchase data, airtime and pay bills for just yourself"
          selected={userType === 'subscriber'}
          onSelected={() => {
            setUserType('subscriber');
          }}
        />
        <CheckBox
          title="As a Reselling Agent"
          subtitle="Purchase data, airtime and pay bills for others at a discounted price."
          selected={userType === 'agent'}
          onSelected={() => {
            setUserType('agent');
          }}
        />
      </View>

      <View className="mt-auto" style={{ paddingVertical: sv(40) }}>
        <AppButton
          variant="primary"
          title="Continue"
          onPress={() => {
            router.push('/register');
          }}
        />
        <LoginSuggestion />
      </View>
    </View>
  );
}

function CheckBox({
  title,
  subtitle,
  selected = false,
  onSelected,
}: {
  title: string;
  subtitle: string;
  selected?: boolean;
  onSelected: () => void;
}) {
  return (
    <Pressable
      className={`flex-row rounded-xl border-2 ${!selected ? 'border-neutral-200' : 'border-primary'}`}
      style={{ padding: sv(15) }}
      onPress={onSelected}
      accessibilityLabel="CheckBox"
      accessible>
      <View style={{ width: '70%' }}>
        <AppTitle
          text={title}
          fontSize="normal"
          fontWeight="bold"
          style={{ paddingBottom: sv(6) }}
        />
        <AppTextBody text={subtitle} />
      </View>
      {selected && (
        <MaterialIcons
          name="check-circle"
          size={26}
          color={Colors.primary.DEFAULT}
          className="ml-auto"
        />
      )}
    </Pressable>
  );
}

export function LoginSuggestion({ mode = 'login' }: { mode?: 'register' | 'login' }) {
  const router = useRouter();

  return (
    <View className="flex-row justify-center gap-2">
      <AppTextBody
        text={`${mode === 'register' ? 'Have an existing account?' : "Don't have an account?"}`}
        style={{
          marginTop: sv(18),
          fontFamily: FontFamily['Satoshi-Medium'],
          fontSize: f(convertFontValueToNumber(fontSize['base'])),
        }}
      />
      <TextButton
        title={`${mode === 'register' ? 'Sign Up' : 'Log In'}`}
        onPress={() => {
          mode === 'login' ? router.push('/login') : router.push('/register');
        }}
        titleColor={Colors.primary.DEFAULT}
      />
    </View>
  );
}
