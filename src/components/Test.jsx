import React, {useState, useCallback} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../utils/constants/Colors';
import CustomButton from './CustomButton';

export default function Test() {
  const [measuredHeight, setMeasuredHeight] = useState(0);
  const [open, setOpen] = useState(false);
  const contentHeight = useSharedValue(0);

  const onToggle = useCallback(() => {
    const toValue = open ? 0 : measuredHeight;
    contentHeight.value = withTiming(toValue, {duration: 300});
    setOpen(!open);
  }, [open, measuredHeight]);

  const animatedStyle = useAnimatedStyle(() => ({
    height: contentHeight.value,
    overflow: 'hidden',
  }));

  const onContentLayout = event => {
    const {height} = event.nativeEvent.layout;
    if (measuredHeight !== height) {
      setMeasuredHeight(height);
      if (open) {
        contentHeight.value = withTiming(height, {duration: 50});
      }
    }
  };
  const headerTitle = 'Cash Deposit';
  const bodyContent = cashDepositBody();

  return (
    <View style={styles.accordionContainer}>
      <Pressable onPress={onToggle}>
        <View style={styles.header}>
          <Text style={styles.title}>{headerTitle}</Text>
          <Icon
            name={open ? 'keyboard-arrow-down' : 'keyboard-arrow-up'}
            size={24}
            color={Colors.white_fff}
          />
        </View>
      </Pressable>
      {/* Hidden measurement container */}
      <View style={styles.measureContainer} onLayout={onContentLayout}>
        {bodyContent}
      </View>

      {/* Animated body */}
      <Animated.View style={[styles.body, animatedStyle]}>
        {bodyContent}
      </Animated.View>
    </View>
  );
}

const cashDepositBody = () => {
  return (
    <View style={styles.bodyContainer}>
      <Text style={[styles.bodyText, {color: Colors.brown_b58755}]}>
        Your first cash Deposit needs to be made through a Biometric (BVS) Cash
        Point
      </Text>
      <View style={styles.itemRow}>
        <CustomButton
          text={'Cash Points'}
          textColor={Colors.white_fff}
          buttonContainerStyle={styles.item}
          iconLeft={12}
        />
        <CustomButton
          text={'Cash Points'}
          textColor={Colors.white_fff}
          buttonContainerStyle={styles.item}
        />
      </View>
      <Text>asdf</Text>
      <Text>asdf</Text>
      <Text>asdf</Text>
      <Text>asdf</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  accordionContainer: {
    position: 'absolute',
    bottom: 20,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: Colors.white_fff,
    borderRadius: 8,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: Colors.green_04bb5f,
  },
  title: {
    fontSize: 16,
    color: Colors.white_fff,
  },
  measureContainer: {
    position: 'absolute',
    top: -9999,
    left: 0,
    right: 0,
    opacity: 0,
  },
  body: {
    paddingHorizontal: 16,

    backgroundColor: Colors.white_fff,
  },
  bodyContainer: {
    marginVertical: 20,
  },
  bodyText: {
    textAlign: 'center',

    fontSize: 12,
    fontWeight: '600',
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 16,
  },
  item: {
    marginHorizontal: 6,
    backgroundColor: Colors.green_04bb5f,
    borderColor: Colors.green_04bb5f,
  },
});
