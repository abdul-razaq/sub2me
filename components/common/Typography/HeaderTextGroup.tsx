import { View } from 'react-native';

import AppTextBody from '@/components/common/Typography/AppTextBody';
import AppTitle from '@/components/common/Typography/AppTitle';
import { heightPixel as h } from '@/theme/layout';
import Animated, {
  Easing,
  FadeIn,
  FadeInDown,
  FadeInLeft,
  FadeInRight,
  FadeInUp,
  FadeOut,
  FadeOutDown,
  SlideInDown,
  ZoomInDown,
  ZoomInUp,
} from 'react-native-reanimated';

export default function HeaderTextGroup({
  headerText,
  bodyText,
  centerHeaderText = false,
  centerBodyText = false,
  animationType,
}: {
  headerText: string;
  bodyText: string;
  centerHeaderText?: boolean;
  centerBodyText?: boolean;
  animationType?: 'fadeUp' | 'fadeDown' | 'fadeLeft' | 'fadeRight' | 'slide' | 'zoom';
}) {
  let animation = null;

  if (animationType === 'fadeUp') {
    animation = FadeInUp;
  } else if (animationType === 'fadeDown') {
    animation = FadeInDown;
  } else if (animationType === 'fadeLeft') {
    animation = FadeInLeft;
  } else if (animationType === 'fadeRight') {
    animation = FadeInRight;
  } else if (animationType === 'slide') {
    animation = SlideInDown;
  } else if (animationType === 'zoom') {
    animation = ZoomInDown;
  }

  return (
    <Animated.View
      entering={animation ? animation.duration(1500).easing(Easing.bounce) : undefined}>
      <AppTitle text={headerText} centerTitle={centerHeaderText} />
      <View style={{ height: h(8) }} />
      <AppTextBody text={bodyText} centerText={centerBodyText} />
    </Animated.View>
  );
}
