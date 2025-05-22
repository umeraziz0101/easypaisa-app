import Slider from '@react-native-community/slider';
import {StyleSheet, Text, View} from 'react-native';
import Colors from '../utils/constants/Colors';
const KmRangeSlider = ({val, setVal}) => {
  return (
    <View style={styles.sliderContainer}>
      <Slider
        style={styles.slider}
        minimumValue={1}
        maximumValue={20}
        step={0.1}
        value={val}
        onValueChange={setVal}
        minimumTrackTintColor={Colors.gray_9b9b9b}
        maximumTrackTintColor={Colors.gray_cbcbcb}
        thumbTintColor={Colors.gray_9b9b9b}
      />
      <View style={styles.labelsContainer}>
        <Text style={styles.label}>1 KM</Text>
        <Text style={styles.label}>10 KM</Text>
        <Text style={styles.label}>20 KM</Text>
      </View>
    </View>
  );
};

export default KmRangeSlider;

const styles = StyleSheet.create({
  sliderContainer: {
    width: '100%',
  },
  slider: {},
  labelsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 8,
    color: '#555',
    marginHorizontal: 16,
  },
});
