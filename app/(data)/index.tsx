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

export default function DataIndex() {
  const [selectedContact, setSelectedContact] = React.useState<Contacts.Contact>();
  const data = React.useMemo(() => [{ label: 'VTU', value: '1' }], []);

  const [isModalVisible, setModalVisible] = React.useState(false);
  const [amount, setAmount] = React.useState('1500');
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

  async function openContacts() {
    const contact = await Contacts.presentContactPickerAsync();

    if (contact) {
      setSelectedContact(contact);
    }
  }

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
            additionalNode={<Text className="font-Satoshi-Bold text-md text-warning-300">MTN</Text>}
          />
          <ListTile
            title="Amount: "
            withArrow={false}
            additionalNode={<Text className="font-Satoshi-Bold text-md text-primary">$430</Text>}
          />
          <ListTile
            title="Product: "
            withArrow={false}
            additionalNode={
              <Text className="font-Satoshi-Bold text-md text-black-400">1.5GB + Youtube Data</Text>
            }
          />
          <ListTile
            title="Number: "
            withArrow={false}
            additionalNode={
              <Text className="font-Satoshi-Bold text-md tracking-wide text-black-400">
                {selectedContact?.phoneNumbers![0].number}
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
                <Text className="font-Satoshi-Bold text-md text-warning-300">MTN</Text>
              }
            />
            <ListTile
              title="Amount: "
              withArrow={false}
              additionalNode={<Text className="font-Satoshi-Bold text-md text-primary">$430</Text>}
            />
            <ListTile
              title="Product: "
              withArrow={false}
              additionalNode={
                <Text className="font-Satoshi-Bold text-md text-black-400">
                  1.5GB + Youtube Data
                </Text>
              }
            />
            <ListTile
              title="Number: "
              withArrow={false}
              additionalNode={
                <Text className="font-Satoshi-Bold text-md tracking-wide text-black-400">
                  {selectedContact?.phoneNumbers![0].number}
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
          style={{ paddingHorizontal: pixelSizeVertical(16), paddingTop: pixelSizeVertical(10) }}>
          <AppTitle text="Select Biller: " />
        </View>
        <View
          className="flex-row justify-center gap-4"
          style={{ paddingTop: pixelSizeVertical(20) }}>
          <AirtimeCard />
          <AirtimeCard selectedNetwork="airtel" />
          <AirtimeCard selectedNetwork="glo" />
          <AirtimeCard selectedNetwork="9mobile" />
        </View>
        <View
          style={{ padding: pixelSizeVertical(16), paddingTop: pixelSizeVertical(40) }}
          className="gap-4">
          <CustomDropdown
            data={[
              { label: '1.5GB + Youtube Data', value: '1' },
              { label: '3.5GB + Youtube Data', value: '2' },
              { label: '4.5GB', value: '3' },
              { label: '10GB', value: '4' },
            ]}
            label="Data Product"
            onValueChanged={() => {}}
          />

          <View className="gap-4">
            <AppInput
              placeholder="Enter Number"
              label="Enter Number"
              additionalProps={{ editable: false, value: selectedContact?.phoneNumbers![0].number }}
            />
            <Pressable onPress={openContacts}>
              <FontAwesome6 name="contact-book" size={24} color={Colors.black[400]} />
            </Pressable>
          </View>
          <View
            className="flex-row items-center gap-2"
            style={{ paddingVertical: pixelSizeVertical(10) }}>
            <Text className="font-Satoshi-Medium text-black-400">Network Identification: </Text>
            <View className="flex-row items-center gap-1">
              <Text className="font-Satoshi-Medium text-success-200">Verified</Text>
              <MaterialIcons name="verified-user" size={18} color={Colors.success[200]} />
            </View>
          </View>

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
              20% Off when you purchase a Data package from us!!!
            </Text>
          </View>
        </View>
        <View style={{ padding: pixelSizeVertical(20), paddingBottom: pixelSizeVertical(40) }}>
          <AppButton
            onPress={selectedContact ? toggleModal : null}
            variant="primary"
            title="Proceed"
          />
        </View>
      </KeyboardAwareScrollView>
    </>
  );
}

function AirtimeCard({
  selectedNetwork = 'mtn',
}: {
  selectedNetwork?: 'mtn' | 'airtel' | 'glo' | '9mobile';
}) {
  const image =
    selectedNetwork === 'mtn'
      ? require('@/assets/images/mtn.jpg')
      : selectedNetwork === 'airtel'
        ? require('@/assets/images/airtel.jpg')
        : selectedNetwork === 'glo'
          ? require('@/assets/images/glo2.jpg')
          : require('@/assets/images/9mobile.png');

  return (
    <Pressable
      className={`items-center rounded-lg border ${selectedNetwork === 'mtn' ? 'border-warning-300 bg-warning-50' : selectedNetwork === 'airtel' ? 'border-error-300 bg-error-50' : selectedNetwork === 'glo' ? 'border-success-200 bg-success-100' : 'border-success-900 bg-success-200'}`}
      style={{ padding: pixelSizeVertical(15) }}>
      <Image
        source={image}
        style={{ height: 45, width: 45, borderRadius: 50, overflow: 'hidden' }}
        resizeMode="cover"
      />
      <Text
        className={`text-center font-Satoshi-Bold text-sm uppercase ${selectedNetwork === 'mtn' ? 'text-warning-300' : selectedNetwork === 'airtel' ? 'text-error-300' : selectedNetwork === 'glo' ? 'text-white' : 'text-white'}`}
        style={{ paddingTop: pixelSizeVertical(10) }}>
        {selectedNetwork}
      </Text>
    </Pressable>
  );
}
