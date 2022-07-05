import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { Icon } from '@rneui/themed';
import tw from 'tailwind-react-native-classnames';
import { useDispatch } from 'react-redux';
import { setDestination } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/native';

const data = [
    {
        id: '123',
        icon: 'home',
        location: 'Home',
        description: 'Vaughan Mills Terminal Platform 4, Vaughan, ON, Canada',
        point: {
            description: 'Vaughan Mills Terminal Platform 4, Vaughan, ON, Canada',
            location: {
                lat: 43.827187,
                lng: -79.53437
            }
        }
    },
    {
        id: '456',
        icon: 'briefcase',
        location: 'Work',
        description: 'CN Tower, Bremner Boulevard, Toronto, ON, Canada',
        point: {
            description: 'CN Tower, Bremner Boulevard, Toronto, ON, Canada',
            location: {
                lat: 43.6425662,
                lng: -79.3870568
            }
        }
    },
];

const NavFavorites = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

  return (
    <FlatList data={data} keyExtractor={(item) => item.id} 
        ItemSeparatorComponent={() => (
            <View style={[tw`bg-gray-200`, { height: 0.5 }]}></View>
        )}
        renderItem={({ item: { location, description, icon, point } }) => (
            <TouchableOpacity style={tw`flex-row items-center p-5`} onPress={() => {
                    dispatch(setDestination(point));
                    navigation.navigate('RideOptionsCard');
                }}>
                <Icon 
                    style={tw`mr-4 rounded-full bg-gray-300 p-3`}
                    name={icon}
                    type='ionicon'
                    color='white'
                    size={18}
                />
                <View>
                    <Text style={tw`font-semibold`}>{location}</Text>
                    <Text style={tw`text-gray-500`}>{description}</Text>
                </View>
            </TouchableOpacity>
    )} />
  )
};

export default NavFavorites;