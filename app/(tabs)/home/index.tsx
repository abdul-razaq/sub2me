import { View, Text, StatusBar, Image, Pressable } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  fontPixel,
  heightPixel,
  pixelSizeHorizontal as sh,
  pixelSizeVertical as sv,
  widthPixel,
} from '@/theme/layout';
import Colors from '@/theme/colors';
import { FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { router, useRouter } from 'expo-router';
import {
  Call,
  Data,
  Electricity,
  Global,
  MoneyChange,
  Ranking,
  Sms,
  Zoom,
} from 'iconsax-react-native';

const navIcons = [
  {
    title: 'Airtime',
    icon: <Call size="24" color={Colors.primary.DEFAULT} />,
    onPress: () => router.push('/'),
  },
  {
    title: 'Data',
    icon: <Global size="24" color={Colors.primary.DEFAULT} />,
    onPress: () => router.push('/'),
  },
  {
    title: 'Cable TV',
    icon: <Zoom size="24" color={Colors.primary.DEFAULT} />,
    onPress: () => router.push('/'),
  },
  {
    title: 'Electricity',
    icon: <Electricity size="24" color={Colors.primary.DEFAULT} />,
    onPress: () => router.push('/'),
  },
  {
    title: 'Exam Pin',
    icon: <Ranking size="24" color={Colors.primary.DEFAULT} />,
    onPress: () => router.push('/'),
  },
  {
    title: 'Data Pin',
    icon: <Data size="24" color={Colors.primary.DEFAULT} />,
    onPress: () => router.push('/'),
  },
  {
    title: 'Airtime Swap',
    icon: <MoneyChange size="24" color={Colors.primary.DEFAULT} />,
    onPress: () => router.push('/'),
  },
  {
    title: 'Bulk Sms',
    icon: <Sms size="24" color={Colors.primary.DEFAULT} />,
    onPress: () => router.push('/'),
  },
];

export default function HomeIndex() {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor={Colors.primary.DEFAULT} />
      <View
        style={{
          height: '60%',
          marginTop: -50,
          paddingTop: sv(60),
          borderBottomLeftRadius: 25,
          borderBottomRightRadius: 25,
        }}
        className="items-center bg-primary shadow-sm shadow-purple-100">
        <View
          className="border-0.5 mx-auto rounded-full border-white"
          style={{ width: '70%', backgroundColor: 'rgba(255, 255, 255, .2)' }}>
          <View
            className="flex-row items-center gap-3"
            style={{
              padding: sv(10),
              overflow: 'hidden',
            }}>
            <View
              style={{
                height: heightPixel(30),
                width: widthPixel(30),
                overflow: 'hidden',
                borderRadius: 100,
              }}>
              <Image
                source={{
                  uri: 'https://images.pexels.com/photos/25211647/pexels-photo-25211647/free-photo-of-brunette-in-elegant-vest-and-white-blouse.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                }}
                style={{ height: '100%', width: '100%' }}
              />
            </View>
            <Text className="font-Satoshi-Bold text-white" style={{ fontSize: fontPixel(16) }}>
              Welcome, Oluwasegun
            </Text>
          </View>
        </View>
        <View
          className="mt-10 items-center rounded-lg border border-purple-50"
          style={{ padding: sv(20), width: '80%' }}>
          <Text className="font-Satoshi-Medium text-white" style={{ fontSize: fontPixel(18) }}>
            My Wallet Balance
          </Text>
          <Text className="mt-4 font-Satoshi-Black text-white" style={{ fontSize: fontPixel(28) }}>
            $24,000.00
          </Text>
          <View
            className="mt-4 flex-row items-center justify-center gap-2 rounded-lg bg-purple-500 shadow-md"
            style={{ padding: sv(12) }}>
            <Text className="font-Satoshi-Bold text-white" style={{ fontSize: fontPixel(16) }}>
              Bonus:
            </Text>
            <Text className="font-Satoshi-Bold text-white" style={{ fontSize: fontPixel(16) }}>
              $300.00
            </Text>
          </View>
        </View>
        <Pressable
          className="mt-8 flex-row gap-2 rounded-lg bg-white"
          style={{ padding: sv(8) }}
          onPress={() => {
            router.push('/add_money');
          }}>
          <FontAwesome name="send" size={24} color={Colors.primary.DEFAULT} />
          <Text className="font-Satoshi-Bold text-primary" style={{ fontSize: fontPixel(18) }}>
            Add Money
          </Text>
        </Pressable>
      </View>

      <View style={{ padding: sv(20), paddingHorizontal: sv(10) }}>
        <View
          className="flex-row flex-wrap content-center gap-8"
          style={{ paddingVertical: sv(10) }}>
          {navIcons.map((icon, index) => (
            <IconButton key={index} icon={icon.icon} title={icon.title} onPress={icon.onPress} />
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

function IconButton({
  icon,
  title,
  onPress,
}: {
  icon: React.ReactNode;
  title: string;
  onPress: () => void;
}) {
  return (
    <Pressable className="items-center gap-3" style={{}}>
      <View
        className="rounded-full bg-purple-100 shadow-sm shadow-purple-400"
        style={{ padding: sv(20) }}>
        {icon}
      </View>
      <Text
        className="text-center font-Satoshi-Medium text-gray-700"
        style={{ fontSize: fontPixel(14) }}>
        {title}
      </Text>
    </Pressable>
  );
}
