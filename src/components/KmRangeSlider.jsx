import Slider from '@react-native-community/slider';
import {StyleSheet, Text, View} from 'react-native';
import {useState} from 'react';
import Colors from '../utils/constants/Colors';
import Strings from '../utils/constants/Strings';

const KmRangeSlider = ({val, setVal}) => {
  const [sliderLayout, setSliderLayout] = useState(null);

  const getThumbPosition = () => {
    if (!sliderLayout) return 0;

    const progress = (val - 1) / (20 - 1);
    const trackWidth = sliderLayout.width - 40;
    const thumbPosition = 20 + progress * trackWidth - 2;

    return thumbPosition;
  };

  return (
    <View style={styles.sliderContainer}>
      <View style={styles.sliderWrapper}>
        <Slider
          style={styles.slider}
          minimumValue={1}
          maximumValue={20}
          step={0.1}
          value={val}
          onValueChange={setVal}
          minimumTrackTintColor={Colors.gray_9b9b9b}
          maximumTrackTintColor={Colors.gray_cbcbcb}
          thumbTintColor={Strings.transparent}
          onLayout={event => {
            setSliderLayout(event.nativeEvent.layout);
          }}
        />

        {sliderLayout && (
          <View style={[styles.customThumb, {left: getThumbPosition()}]} />
        )}
      </View>
      <View style={styles.labelsContainer}>
        <Text style={styles.label}>{Strings.sliderLabels.km1}</Text>
        <Text style={styles.label}>{Strings.sliderLabels.km10}</Text>
        <Text style={styles.label}>{Strings.sliderLabels.km20}</Text>
      </View>
    </View>
  );
};

export default KmRangeSlider;

const styles = StyleSheet.create({
  sliderContainer: {
    width: '100%',
  },
  sliderWrapper: {
    position: 'relative',
  },
  slider: {
    height: 40,
  },
  customThumb: {
    position: 'absolute',
    top: '50%',
    width: 4,
    height: 16,
    backgroundColor: Colors.gray_9b9b9b,
    borderRadius: 3,
    transform: [{translateY: -8}],
    pointerEvents: 'none',
  },
  labelsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 8,
    color: Colors.gray_555,
    marginHorizontal: 16,
  },
});
