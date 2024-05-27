import React from 'react';
import { Text } from 'react-native';

export default function Title({
  title,
  weight = 'regular',
}: {
  title: string;
  weight?: 'bold' | 'regular' | 'medium';
}) {
  return (
    <Text
      className={`${weight === 'bold' ? 'font-Satoshi-Bold' : weight === 'regular' ? 'font-Satoshi-Regular' : 'font-Satoshi-Medium'} text-black-500 mb-4 text-base`}>
      {title}
    </Text>
  );
}
