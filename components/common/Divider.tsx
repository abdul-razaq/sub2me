import React from 'react';
import { View } from 'react-native';

import Colors from '@/theme/colors';

export default function Divider({ thickness = 1 }: { thickness?: number }) {
  return (
    <View
      style={{ borderWidth: 0, borderBottomWidth: thickness, borderBottomColor: Colors.black[50] }}
    />
  );
}
