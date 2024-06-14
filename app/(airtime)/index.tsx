import { FontAwesome6, MaterialIcons } from '@expo/vector-icons';
import * as Contacts from 'expo-contacts';
import { useRouter } from 'expo-router';
import { InfoCircle } from 'iconsax-react-native';
import React from 'react';
import { View, Image, Text, Pressable } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Modal from 'react-native-modal';

import AppInput from '@/components/auth/AppInput';
import AppButton from '@/components/common/Button/AppButton';
import CustomDropdown from '@/components/common/CustomDropdown';
import ListTile from '@/components/common/ListTile';
import AppTitle from '@/components/common/Typography/AppTitle';
import Colors from '@/theme/colors';
import { pixelSizeVertical } from '@/theme/layout';

export default function AirtimeIndex() {
  const [selectedContact, setSelectedContact] = React.useState<Contacts.Contact>();
  const data = React.useMemo(() => [{ label: 'VTU', value: '1' }], []);

  const [isModalVisible, setModalVisible] = React.useState(false);
  const [amount, setAmount] = React.useState();

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  React.useEffect(() => {
    (async () => {
      let response;
      const { status } = await Contacts.requestPermissionsAsync();
      response = status;
      if (response !== 'granted') {
        response = await Contacts.requestPermissionsAsync();
      }
    })();
  }, []);

  async function openContacts() {
    const contact = await Contacts.presentContactPickerAsync();

    if (contact) {
      setSelectedContact(contact);
    }
  }

  const router = useRouter();

  return (
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
          <AppTitle text="Confirm Transaction" style={{ paddingVertical: pixelSizeVertical(20) }} />
          <ListTile
            title="Network: "
            withArrow={false}
            additionalNode={
              <View>
                <Image />
                <Text className="font-Satoshi-Bold text-md text-warning-300">MTN</Text>
              </View>
            }
          />
          <ListTile
            title="Amount: "
            withArrow={false}
            additionalNode={<Text className="font-Satoshi-Bold text-md text-primary">$430</Text>}
          />
          <ListTile
            title="Airtime Type: "
            withArrow={false}
            additionalNode={<Text className="font-Satoshi-Bold text-md text-black-400">VTU</Text>}
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
                router.back();
              }}
              title="Complete"
            />
          </View>
        </View>
      </Modal>
      <View className="flex-row justify-center gap-4" style={{ paddingTop: pixelSizeVertical(30) }}>
        <AirtimeCard />
        <AirtimeCard selectedNetwork="airtel" />
        <AirtimeCard selectedNetwork="glo" />
        <AirtimeCard selectedNetwork="9mobile" />
      </View>
      <View
        style={{ padding: pixelSizeVertical(16), paddingTop: pixelSizeVertical(40) }}
        className="gap-4">
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
        <CustomDropdown data={data} label="Airtime Type" onValueChanged={() => {}} />

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
          additionalProps={{ value: amount, onChangeText: setAmount }}
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
            20% Off when you purchase a VTU airtime from us!!!
          </Text>
        </View>
      </View>
      <View style={{ padding: pixelSizeVertical(20), paddingBottom: pixelSizeVertical(40) }}>
        <AppButton
          onPress={
            selectedContact && amount && typeof parseInt(amount, 10) === 'number'
              ? toggleModal
              : null
          }
          variant="primary"
          title="Proceed"
        />
      </View>
    </KeyboardAwareScrollView>
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
