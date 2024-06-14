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

export default function AirtimePinIndex() {
  const [selectedContact, setSelectedContact] = React.useState<Contacts.Contact>();
  const data = React.useMemo(() => [{ label: 'VTU', value: '1' }], []);
  const [iucNumber, setIUCNumber] = React.useState('');

  const [isModalVisible, setModalVisible] = React.useState(false);
  const [pin, setPin] = React.useState('');
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
            additionalNode={
              <View>
                <Image />
                <Text className="font-Satoshi-Bold text-md text-blue-500">MTN</Text>
              </View>
            }
          />
          <ListTile
            title="Amount: "
            withArrow={false}
            additionalNode={<Text className="font-Satoshi-Bold text-md text-primary">$1000</Text>}
          />
          <ListTile
            title="Product Type: "
            withArrow={false}
            additionalNode={
              <Text className="font-Satoshi-Bold text-md text-black-400">Airtime Pin</Text>
            }
          />
          <ListTile
            title="Phone Number: "
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
              additionalNode={<Text className="font-Satoshi-Bold text-md text-blue-500">MTN</Text>}
            />
            <ListTile
              title="Amount: "
              withArrow={false}
              additionalNode={<Text className="font-Satoshi-Bold text-md text-primary">$1000</Text>}
            />
            <ListTile
              title="Product Type: "
              withArrow={false}
              additionalNode={
                <Text className="font-Satoshi-Bold text-md text-black-400">Airtime Pin</Text>
              }
            />
            <ListTile
              title="Phone Number: "
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
          style={{ padding: pixelSizeVertical(16), paddingTop: pixelSizeVertical(40) }}
          className="gap-4">
          <CustomDropdown
            data={[
              { label: 'MTN', value: '1' },
              { label: 'AIRTEL', value: '2' },
              { label: 'GLO', value: '3' },
              { label: '9Mobile', value: '4' },
              { label: 'IPNX', value: '5' },
            ]}
            label="Biller"
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

          <AppInput
            placeholder="Enter pin (e.g 4312 5452 3456 2321)"
            label="Recharge Pin"
            keyboardType="number-pad"
            additionalProps={{ value: pin, onChangeText: setPin }}
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
              <Text className="font-Satoshi-Bold text-lg text-primary">$1000</Text>
            </View>
          </View>
        </View>
        <View style={{ padding: pixelSizeVertical(20), paddingBottom: pixelSizeVertical(40) }}>
          <AppButton onPress={toggleModal} variant="primary" title="Buy" />
        </View>
      </KeyboardAwareScrollView>
    </>
  );
}
