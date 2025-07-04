import { icons } from '@/constants/icons'
import React from 'react'
import { Image, Text, View } from 'react-native'

const Saved = () => {
  return (
    <View className='bg-primary flex-1 px-10'>
      <View className='flex items-center justify-center flex-1 flex-col gap-5'>
        <Image source={icons.save} className="size-10" tintColor="#FFF" />
        <Text className="text-gray-500 text-base">Save</Text>
      </View>
    </View>
  )
}

export default Saved
