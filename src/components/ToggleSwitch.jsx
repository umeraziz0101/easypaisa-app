import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Colors from '../utils/constants/Colors';

const ToggleSwitch = ({text1, text2}) => {
  const [activeIndex, setActiveIndex] = useState(true);

  const bgColor = {backgroundColor: Colors.green_04bb5f, borderRadius: 14};
  const textColor = {color: Colors.white_fff};
  const onButtonPress = () => {
    setActiveIndex(!activeIndex);
  };

  return (
    <Pressable onPress={onButtonPress}>
      <View style={styles.container}>
        <View style={styles.itemRow}>
          <View style={[styles.item, activeIndex === true && bgColor]}>
            <Text style={[styles.text, activeIndex === true && textColor]}>
              {text1}
            </Text>
          </View>

          <View style={[styles.item, activeIndex === false && bgColor]}>
            <Text style={[styles.text, activeIndex === false && textColor]}>
              {text2}
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default ToggleSwitch;

const styles = StyleSheet.create({
  container: {
    width: 120,
    height: 28,
    backgroundColor: Colors.gray_cbcbcb,
    borderRadius: 14,
    justifyContent: 'center',
  },
  itemRow: {
    flex: 1,
    flexDirection: 'row',
  },
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  text: {
    color: 'black',
  },
});
