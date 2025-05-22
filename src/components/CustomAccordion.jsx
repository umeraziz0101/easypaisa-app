import React, {useState, useCallback} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../utils/constants/Colors';
import CustomButton from './CustomButton';
import KmRangeSlider from './KmRangeSlider';

export default function CustomAccordion() {
  const [measuredHeight, setMeasuredHeight] = useState(0);
  const [open, setOpen] = useState(false);
  const contentHeight = useSharedValue(0);

  const [kmValue, setKmValue] = useState(1.0);

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

  return (
    <View style={styles.accordionContainer}>
      <Pressable onPress={onToggle}>
        <View style={styles.header}>
          <Text style={styles.title}>Cash Deposit</Text>
          <Icon
            name={open ? 'keyboard-arrow-down' : 'keyboard-arrow-up'}
            size={24}
            color={Colors.white_fff}
          />
        </View>
      </Pressable>

      <View style={styles.measureContainer} onLayout={onContentLayout}>
        <CashDepositBody
          isMeasurement
          kmValue={kmValue}
          setKmValue={setKmValue}
        />
      </View>

      <Animated.View style={[styles.body, animatedStyle]}>
        <CashDepositBody
          isMeasurement={false}
          kmValue={kmValue}
          setKmValue={setKmValue}
        />
      </Animated.View>
    </View>
  );
}

function CashDepositBody({isMeasurement, kmValue, setKmValue}) {
  return (
    <View style={styles.bodyContainer}>
      <Text style={[styles.bodyText, {color: Colors.brown_b58755}]}>
        Your first cash Deposit needs to be made through a Biometric (BVS) Cash
        Point
      </Text>

      <View style={[styles.itemRow, {marginTop: 16}]}>
        <CustomButton
          text="Cash Points"
          iconImageLeft={require('../assets/icons/mark_cashpoint.png')}
          textColor={Colors.white_fff}
          buttonContainerStyle={styles.item}
        />
        <CustomButton
          text="Cash Points BVA"
          iconImageLeft={require('../assets/icons/mark_cashpoint_bvs.png')}
          textColor={Colors.white_fff}
          buttonContainerStyle={styles.item}
        />
      </View>

      <View style={styles.itemRow}>
        <View style={styles.row}>
          <Text style={[styles.text, {color: Colors.gray_717171}]}>
            {kmValue.toFixed(1)}
          </Text>
          <Text style={[styles.text, {color: Colors.gray_717171}]}>
            Location
          </Text>
        </View>
        <View style={styles.row}>
          {!isMeasurement && (
            <KmRangeSlider val={kmValue} setVal={setKmValue} />
          )}
        </View>
      </View>

      <View style={styles.itemRow}>
        <View style={styles.row}>
          <Text style={styles.text}>KM</Text>
          <Text style={styles.text}>IslamAbad</Text>
        </View>
        <View style={styles.row}>
          <Text style={{fontSize: 10, color: Colors.gray_9b9b9b}}>
            Expand Radius
          </Text>
        </View>
      </View>

      <CustomButton
        text="How to deposit Cash"
        iconImageLeft={require('../assets/icons/cash.png')}
        textColor={Colors.white_fff}
        buttonContainerStyle={[
          styles.item,
          {marginHorizontal: 0, marginTop: 16},
        ]}
        buttonTextContainerStyle={{justifyContent: 'space-between'}}
        iconRight="chevron-forward"
        iconRightSize={16}
        iconColor={Colors.white_fff}
      />
    </View>
  );
}

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
    fontSize: 14,
    fontWeight: '600',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 6,
  },
  item: {
    marginHorizontal: 6,
    backgroundColor: Colors.green_04bb5f,
    borderColor: Colors.green_04bb5f,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.gray_9b9b9b,
    marginLeft: 8,
  },
});
