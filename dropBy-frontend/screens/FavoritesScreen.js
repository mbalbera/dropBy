import React from 'react';
import { ScrollView, Text, View } from 'react-native';

export default function FavoritesScreen() {
    return (
        <View style={{ backgroundColor: 'rgb(255,246,222)', flex: 1 }}>
            <View style={{ height: '20%', paddingTop: '3%', justifyContent: 'space-around' }}>
                <Text style={{ margin: 'auto', fontSize: 26, textAlign: 'center' }}>Your Favorites</Text>
            </View>
            <ScrollView style={{ height: '5%', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
               <Text>List Item</Text>
               <Text>List Item</Text>
               <Text>List Item</Text>
               <Text>List Item</Text>
               <Text>List Item</Text>
               <Text>List Item</Text>
               <Text>List Item</Text>
               <Text>List Item</Text>
            </ScrollView>
        </View>
    );
}