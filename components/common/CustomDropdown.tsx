import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

import Colors from '@/theme/colors';
import { FontFamily } from '@/theme/fonts';
import { heightPixel as h, fontPixel as f } from '@/theme/layout';

interface ICustomDropdown {
  label: string;
  data: any;
  onValueChanged: (value: string) => void;
}

export default function CustomDropdown({ label, data, onValueChanged }: ICustomDropdown) {
  const [isDropdownFocused, setIsDropdownFocused] = React.useState(false);

  return (
    <View>
      <Text className="mb-2 font-Satoshi-Medium text-md leading-normal tracking-normal text-inputLabel">
        {label}
      </Text>
      <Dropdown
        onFocus={() => setIsDropdownFocused(true)}
        onBlur={() => setIsDropdownFocused(false)}
        style={[
          styles.dropdown,
          { borderColor: isDropdownFocused ? Colors.primary.DEFAULT : Colors.black[50] },
        ]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        data={data}
        maxHeight={h(300)}
        labelField="label"
        valueField="value"
        onChange={(item) => {
          setIsDropdownFocused(false);
          onValueChanged(item.value);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  dropdown: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderColor: Colors.black[50],
    borderWidth: 1,
    borderRadius: 5,
    color: Colors.black.DEFAULT,
    fontFamily: FontFamily['Satoshi-Medium'],
    fontSize: 16,
    letterSpacing: 0.5,
  },
  placeholderStyle: {
    color: Colors.inputPlaceholder,
    fontFamily: FontFamily['Satoshi-Medium'],
    fontSize: f(16),
    letterSpacing: 0.5,
  },
  selectedTextStyle: {
    color: Colors.black.DEFAULT,
    fontFamily: FontFamily['Satoshi-Medium'],
    fontSize: f(16),
    letterSpacing: 0.5,
  },
});
