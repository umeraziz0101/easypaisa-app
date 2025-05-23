import Slider from '@react-native-community/slider';
import {StyleSheet, Text, View} from 'react-native';
import Colors from '../utils/constants/Colors';
import Strings from '../utils/constants/Strings';
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
  slider: {},
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
