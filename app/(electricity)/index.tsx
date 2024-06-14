import { FontAwesome6, MaterialIcons } from '@expo/vector-icons';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import * as Contacts from 'expo-contacts';
import { useRouter } from 'expo-router';
import { InfoCircle } from 'iconsax-react-native';
import React from 'react';
import { View, Image, Text, Pressable, Keyboard } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Modal from 'react-native-modal';

import AppInput from '@/components/auth/AppInput';
import OTPInput from '@/components/auth/OTPInput';
import BottomSheet from '@/components/common/BottomSheet';
import AppButton from '@/components/common/Button/AppButton';
import CustomDropdown from '@/components/common/CustomDropdown';
import Divider from '@/components/common/Divider';
import ListTile from '@/components/common/ListTile';
import AppTitle from '@/components/common/Typography/AppTitle';
import Colors from '@/theme/colors';
import { pixelSizeVertical } from '@/theme/layout';

export default function ElectrictyIndex() {
  const data = React.useMemo(() => [{ label: 'VTU', value: '1' }], []);
  const [iucNumber, setIUCNumber] = React.useState('');

  const [isModalVisible, setModalVisible] = React.useState(false);
  const [amount, setAmount] = React.useState('3000');
  const [value, setValue] = React.useState('');
  const [narration, setNarration] = React.useState('');

  function handleCreatePin(pin: string) {
    Keyboard.dismiss();
    enterPinRef.current?.close();
    summaryRef.current?.present();
  }

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const router = useRouter();
  const enterPinRef = React.useRef<BottomSheetModal>(null);
  const summaryRef = React.useRef<BottomSheetModal>(null);

  return (
    <>
      <BottomSheet ref={enterPinRef} snapPoints={['50%']}>
        <KeyboardAwareScrollView style={{ padding: pixelSizeVertical(30) }}>
          <View className="gap-8">
            <AppTitle text="Enter Transaction Pin" />
            <OTPInput
              onCompleted={(v: string) => {
                setValue(v);
                handleCreatePin(v);
              }}
            />
          </View>
        </KeyboardAwareScrollView>
      </BottomSheet>
      <BottomSheet ref={summaryRef} snapPoints={['80%']}>
        <ScrollView
          contentContainerStyle={{
            height: '55%',
            backgroundColor: 'white',
            borderRadius: 10,
            padding: pixelSizeVertical(20),
            borderTopLeftRadius: 35,
            borderTopRightRadius: 35,
          }}
          contentContainerClassName="items-center gap-3">
          <View className="rounded-full bg-[#E39FF6]">
            <InfoCircle size="100" color={Colors.primary.DEFAULT} variant="Bold" />
          </View>
          <AppTitle text="Successful" style={{ paddingVertical: pixelSizeVertical(20) }} />
          <ListTile
            title="Biller: "
            withArrow={false}
            additionalNode={
              <View>
                <Image />
                <Text className="font-Satoshi-Bold text-md text-blue-500">IKEDC</Text>
              </View>
            }
          />
          <ListTile
            title="Amount: "
            withArrow={false}
            additionalNode={<Text className="font-Satoshi-Bold text-md text-primary">$3000</Text>}
          />
          <ListTile
            title="Product Type: "
            withArrow={false}
            additionalNode={
              <Text className="font-Satoshi-Bold text-md text-black-400">IKEDC Prepaid</Text>
            }
          />
          <ListTile
            title="Meter Number: "
            withArrow={false}
            additionalNode={
              <Text className="font-Satoshi-Bold text-md tracking-wide text-black-400">
                45524214525
              </Text>
            }
          />
          <View className="w-full">
            <Divider thickness={1} />
          </View>
          <ListTile
            title="Ref Number: "
            withArrow={false}
            additionalNode={
              <Text className="font-Satoshi-Bold text-md tracking-wide text-black-400">
                091143213413134
              </Text>
            }
          />
          <ListTile
            title="Date: "
            withArrow={false}
            additionalNode={
              <Text className="font-Satoshi-Bold text-md tracking-wide text-black-400">
                {new Date().toLocaleString()}
              </Text>
            }
          />
          <View className="w-full">
            <Divider thickness={1} />
          </View>
          <ListTile
            title="Old Balance: "
            withArrow={false}
            additionalNode={
              <Text className="font-Satoshi-Bold text-md tracking-wide text-black-400">5,500</Text>
            }
          />
          <ListTile
            title="New Balance: "
            withArrow={false}
            additionalNode={
              <Text className="font-Satoshi-Bold text-md tracking-wide text-black-400">5,030</Text>
            }
          />
        </ScrollView>
      </BottomSheet>
      <KeyboardAwareScrollView style={{ backgroundColor: 'white' }}>
        <Modal
          isVisible={isModalVisible}
          onBackdropPress={() => setModalVisible(false)}
          onBackButtonPress={() => setModalVisible(false)}>
          <View
            style={{
              height: '55%',
              backgroundColor: 'white',
              borderRadius: 10,
              padding: pixelSizeVertical(20),
            }}
            className="items-center">
            <View className="rounded-full bg-[#E39FF6]">
              <InfoCircle size="100" color={Colors.primary.DEFAULT} variant="Bold" />
            </View>
            <AppTitle
              text="Confirm Transaction"
              style={{ paddingVertical: pixelSizeVertical(20) }}
            />
            <ListTile
              title="Biller: "
              withArrow={false}
              additionalNode={
                <Text className="font-Satoshi-Bold text-md text-blue-500">IKEDC</Text>
              }
            />
            <ListTile
              title="Amount: "
              withArrow={false}
              additionalNode={<Text className="font-Satoshi-Bold text-md text-primary">$3000</Text>}
            />
            <ListTile
              title="Product Type: "
              withArrow={false}
              additionalNode={
                <Text className="font-Satoshi-Bold text-md text-black-400">IKEDC Prepaid</Text>
              }
            />
            <ListTile
              title="Meter Number: "
              withArrow={false}
              additionalNode={
                <Text className="font-Satoshi-Bold text-md tracking-wide text-black-400">
                  31245424256
                </Text>
              }
            />

            <View className="w-full" style={{ paddingVertical: pixelSizeVertical(20) }}>
              <AppButton
                additionalClassNames="bg-[#a32cc4]"
                variant="primary"
                onPress={() => {
                  setModalVisible(false);
                  enterPinRef.current?.present();
                }}
                title="Complete"
              />
            </View>
          </View>
        </Modal>

        <View
          style={{ padding: pixelSizeVertical(16), paddingTop: pixelSizeVertical(40) }}
          className="gap-4">
          <CustomDropdown
            data={[
              { label: 'IKEDC', value: '1' },
              { label: 'ABUJA DISCO', value: '2' },
              { label: 'ABA DISCO', value: '3' },
              { label: 'EKEDC', value: '4' },
              { label: 'PORTHARCOURT DISCO', value: '5' },
              { label: 'IBEDC', value: '6' },
            ]}
            label="Biller"
            onValueChanged={() => {}}
          />
          <CustomDropdown
            data={[
              { label: 'IKEDC Prepaid', value: '1' },
              { label: 'IKEDC Postpaid', value: '2' },
            ]}
            label="Product"
            onValueChanged={() => {}}
          />
          <AppInput
            placeholder="Enter meter number"
            label="Enter Meter Number"
            keyboardType="number-pad"
            additionalProps={{ value: iucNumber, onChangeText: setIUCNumber }}
          />

          <AppInput
            placeholder="Enter amount (e.g 1000)"
            label="Amount"
            keyboardType="number-pad"
            additionalProps={{ value: amount, editable: false }}
          />
          <AppInput
            placeholder="Enter Narration"
            label="Enter Narration..."
            additionalProps={{ editable: true, value: narration, onChangeText: setNarration }}
          />
          <View
            className="flex-row items-center gap-2"
            style={{ paddingVertical: pixelSizeVertical(10) }}>
            <Text className="font-Satoshi-Medium capitalize text-black-400">Amount to pay:</Text>
            <View className="flex-row items-center gap-1">
              <Text className="font-Satoshi-Bold text-lg text-primary">$430</Text>
            </View>
          </View>
          <View
            className="items-center rounded-lg bg-[#f9e2ff]"
            style={{ padding: pixelSizeVertical(15) }}>
            <Text className="text-center font-Satoshi-Bold text-md text-primary">
              20% Off when you purchase an Electricity/Utility product from us!!!
            </Text>
          </View>
        </View>
        <View style={{ padding: pixelSizeVertical(20), paddingBottom: pixelSizeVertical(40) }}>
          <AppButton onPress={toggleModal} variant="primary" title="Pay" />
        </View>
      </KeyboardAwareScrollView>
    </>
  );
}
