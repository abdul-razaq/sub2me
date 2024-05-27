import { useRouter } from 'expo-router';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import { SafeAreaView } from 'react-native-safe-area-context';

import Discount from '@/assets/svgs/discount.svg';
import Ease from '@/assets/svgs/ease.svg';
import Friends from '@/assets/svgs/friends.svg';
import Mobile from '@/assets/svgs/mobile.svg';
import Colors from '@/theme/colors';
import { FontFamily, fontSize } from '@/theme/fonts';
import { fontPixel as f } from '@/theme/layout';
import convertFontValueToNumber from '@/utils/fontConverter';

const onboardingData = [
  {
    backgroundColor: Colors.primary.DEFAULT,
    title: 'Pay Bills with Ease!!!',
    subtitle: 'Quick payment with one click',
    image: <Ease height={300} width={300} style={{ margin: 'auto' }} />,
  },
  {
    backgroundColor: Colors.primary.DEFAULT,
    title: 'Buy Same Data For Less',
    subtitle: 'Save more by spending less',
    image: <Discount height={300} width={300} style={{ margin: 'auto' }} />,
  },
  {
    backgroundColor: Colors.primary.DEFAULT,
    title: 'Share Bills with Friends',
    subtitle: 'Earn cash through referrals',
    image: <Friends height={300} width={300} style={{ margin: 'auto' }} />,
  },
  {
    backgroundColor: Colors.primary.DEFAULT,
    title: 'All from the tip of your finger',
    subtitle: 'Never worry about USSD issues or network downtime',
    image: <Mobile height={250} width={250} style={{ margin: 'auto' }} />,
  },
];

export default function OnboardingIndex() {
  const router = useRouter();

  return (
    <SafeAreaView
      style={{
        backgroundColor: Colors.primary.DEFAULT,
        flex: 1,
      }}>
      <Onboarding
        pages={onboardingData}
        onDone={() => router.replace('/(auth)')}
        onSkip={() => router.replace('/(auth)')}
        titleStyles={{
          fontSize: f(convertFontValueToNumber(fontSize['3xl'])),
          fontFamily: FontFamily['Satoshi-Black'],
        }}
        subTitleStyles={{
          fontSize: f(convertFontValueToNumber(fontSize['lg'])),
          fontFamily: FontFamily['Satoshi-Bold'],
        }}
      />
    </SafeAreaView>
  );
}
