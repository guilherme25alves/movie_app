import { Tabs } from "expo-router";
import { Image, ImageBackground, Text, View } from "react-native";

import { icons } from "@/constants/icons";
import { images } from "@/constants/images";

interface TabIconInterface {
    focused?: boolean;
    routeName?: string;
    title: string;
    icon: any;
}

const tabIconItems: TabIconInterface[] = [
    { routeName: "index", title: "Home", icon: icons.home },
    { routeName: "search", title: "Search", icon: icons.search },
    { routeName: "saved", title: "Saved", icon: icons.save},
    { routeName: "profile", title: "Profile", icon: icons.person},
]

const TabIcon = ({focused, icon, title}: TabIconInterface) => {
  if (focused) {
    return (
      <ImageBackground
        source={images.highlight}
        className="flex flex-row w-full flex-1 min-w-[112px] min-h-14 mt-5 justify-center items-center rounded-full overflow-hidden"
      >
        <Image source={icon} tintColor="#151312" className="size-5" />
        <Text className="text-secondary text-base font-semibold ml-2">
          {title}
        </Text>
      </ImageBackground>
    );
  }

  return (
    <View className="size-full justify-center items-center mt-4 rounded-full">
      <Image source={icon} tintColor="#A8B5DB" className="size-5" />
    </View>
  );
}

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          backgroundColor: "#0F0D23",
          borderRadius: 50,
          marginHorizontal: 20,
          marginBottom: 36,
          height: 42,
          position: "absolute",
          overflow: "hidden",
          borderWidth: 1,
          borderColor: "#0F0D23",
        },
      }}
    >

         { tabIconItems.map( item => {
             return (
                 <Tabs.Screen
                     key={item.routeName} 
                     name={item.routeName}
                     options={{
                         title: item.title,
                         headerShown: false,
                         tabBarIcon: ({ focused }) => (
                             <>
                                 <TabIcon 
                                     focused={focused}
                                     icon={item.icon}
                                     title={item.title}
                                 />
                             </>
                         )
                     }}
                 />
             )
         })}


    </Tabs>
  );
}