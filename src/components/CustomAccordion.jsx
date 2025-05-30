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
import Constants from '../utils/constants/Constants';
import Strings from '../utils/constants/Strings';
import {IconImages, RNVectorIcons} from '../utils/assets/Icons';

export default function CustomAccordion({
  cashActive,
  onToggleCash,
  cashBVSActive,
  onToggleCashBVS,
}) {
  const [measuredHeight, setMeasuredHeight] = useState(Constants.zero);
  const [open, setOpen] = useState(false);
  const contentHeight = useSharedValue(Constants.zero);

  const [kmValue, setKmValue] = useState(Constants.one);

  const onToggle = useCallback(() => {
    const toValue = open ? 0 : measuredHeight;
    contentHeight.value = withTiming(toValue, {
      duration: Constants.AccordionAnimationDuration,
    });
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
        contentHeight.value = withTiming(height, {
          duration: Constants.accordionDuration,
        });
      }
    }
  };

  return (
    <View style={styles.accordionContainer}>
      <Pressable onPress={onToggle}>
        <View style={styles.header}>
          <Text style={styles.title}>{Strings.buttonText.cashDeposit}</Text>
          <Icon
            name={
              open
                ? RNVectorIcons.MaterialIcons.keyboardArrowDown
                : RNVectorIcons.MaterialIcons.keyboardArrowUp
            }
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
          cashActive={cashActive}
          onToggleCash={onToggleCash}
          onToggleCashBVS={onToggleCashBVS}
          cashBVSActive={cashBVSActive}
        />
      </Animated.View>
    </View>
  );
}

function CashDepositBody({
  isMeasurement,
  kmValue,
  setKmValue,
  cashActive,
  onToggleCash,
  cashBVSActive,
  onToggleCashBVS,
}) {
  return (
    <View style={styles.bodyContainer}>
      <Text style={[styles.bodyText, {color: Colors.brown_b58755}]}>
        {Strings.accordingBodyText}
      </Text>

      <View style={[styles.itemRow, {marginTop: 16}]}>
        <CustomButton
          text={Strings.buttonText.cashPoints}
          iconImageLeft={IconImages.markBlack}
          textColor={cashActive ? Colors.gray_717171 : Colors.white_fff}
          buttonContainerStyle={cashActive ? styles.itemActive : styles.item}
          onPressButton={onToggleCash}
        />
        <CustomButton
          text={Strings.buttonText.cashPointsBVS}
          iconImageLeft={IconImages.markRed}
          textColor={cashBVSActive ? Colors.gray_717171 : Colors.white_fff}
          buttonContainerStyle={cashBVSActive ? styles.itemActive : styles.item}
          onPressButton={onToggleCashBVS}
        />
      </View>

      <View style={styles.itemRow}>
        <View style={styles.row}>
          <Text style={[styles.text, {color: Colors.gray_717171}]}>
            {kmValue.toFixed(1)}
          </Text>
          <Text style={[styles.text, {color: Colors.gray_717171}]}>
            {Strings.location}
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
          <Text style={styles.text}>{Strings.km}</Text>
          <Text style={styles.text}>{Strings.city}</Text>
        </View>
        <View style={styles.row}>
          <Text style={{fontSize: 10, color: Colors.gray_9b9b9b}}>
            {Strings.expandRadius}
          </Text>
        </View>
      </View>

      <CustomButton
        text={Strings.buttonText.howToDepositCash}
        iconImageLeft={IconImages.cash}
        textColor={Colors.white_fff}
        buttonContainerStyle={[
          styles.item,
          {marginHorizontal: 0, marginTop: 16},
        ]}
        buttonTextContainerStyle={{justifyContent: 'space-between'}}
        iconRight={RNVectorIcons.Ionicons.chevronForward}
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
    marginBottom: 40,
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
  itemActive: {
    marginHorizontal: 6,
    backgroundColor: Colors.gray_d6d6d6,
    borderColor: Colors.gray_d6d6d6,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.gray_9b9b9b,
    marginLeft: 8,
  },
});
