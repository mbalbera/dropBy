import React from 'react';
import { StyleSheet, View, FlatList, Image, Dimensions, TouchableOpacity,Text } from 'react-native';


const data = [
    { key: 1, img_path: require('../assets/images/icons/cleaning.png'), title: 'cleaning' },
    { key: 2, img_path: require('../assets/images/icons/painting.png'), title: 'painting' },
    { key: 3, img_path: require('../assets/images/icons/haircut.png'), title: 'haircut' },
    { key: 4, img_path: require('../assets/images/icons/trainer.png'), title: 'trainer' },
    { key: 5, img_path: require('../assets/images/icons/plumber.png'), title: 'plumber' },
    { key: 6, img_path: require('../assets/images/icons/contractor.png'), title: 'contractor' },
    { key: 7, img_path: require('../assets/images/icons/electrician.png'), title: 'electrician' },
    { key: 8, img_path: require('../assets/images/icons/masseuse.png'), title: 'masseuse' },
    { key: 9, img_path: require('../assets/images/icons/nails.png'), title: 'nails' },
    { key: 10, img_path: require('../assets/images/icons/phone.png'), title: 'phone' },
    { key: 11, img_path: require('../assets/images/icons/tv.png'), title: 'tv' },
    { key: 12, img_path: require('../assets/images/icons/computer.png'), title: 'computer' },
    
];

const formatData = (data, numColumns) => {
    const numberOfFullRows = Math.floor(data.length / numColumns);

    let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
    while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
        data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
        numberOfElementsLastRow++;
    }

    return data;
};



const numColumns = 3;
function Categories(props) {

    return (
        <View>
            <FlatList
                data={formatData(data, numColumns)}
                style={styles.container}
                renderItem={({ item }) =>
                    <TouchableOpacity style={styles.item} onPress={() => console.log(item.title)}>
                        <Image style={styles.pics} source={item.img_path} />
                    </TouchableOpacity>
                }
                numColumns={numColumns}
                keyExtractor={item => item.id}
            />
        </View>
    );

}
export default Categories
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 20,
    },
    item: {
        // backgroundColor: 'rgb(91,95,105)',
        backgroundColor: 'rgb(191,195,205)',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        margin: 1,
        height: Dimensions.get('window').width / numColumns,
    },
    itemInvisible: {
        backgroundColor: 'transparent',
    },
    itemText: {
        color: 'white',
    },
    title: {
        fontSize: 15,
        color: 'rgb(225,225,225)',
        lineHeight: 17,
        textAlign: 'center',
    },
    pics: {
        height: 80,
        width: 80,
        resizeMode: "center"
    }
});