import React from 'react';
import { View } from 'react-native';

import AppButton from '@/components/common/Button/AppButton';

export default function ButtonGroup({
  onCancel,
  onSave,
  primaryButtonTitle = 'Save',
  secondaryButtonTitle = 'Cancel',
}: {
  primaryButtonTitle?: string;
  secondaryButtonTitle?: string;
  onCancel: () => void;
  onSave: () => void;
}) {
  return (
    <View className="flex-row w-full items-center justify-between mt-8">
      <View className="w-4/12">
        <AppButton variant="secondary" title={secondaryButtonTitle} onPress={onCancel} />
      </View>
      <View className="w-4/12">
        <AppButton variant="primary" title={primaryButtonTitle} onPress={onSave} />
      </View>
    </View>
  );
}
