import {StyleSheet, Text, View} from 'react-native';
import React, {version} from 'react';
import CustomHeader from './CustomHeader';
import Colors from '../utils/constants/Colors';
import ToggleSwitch from './ToggleSwitch';
import Strings from '../utils/constants/Strings';

const MenuScreen = ({
  children,
  title,
  subtitle,
  headerItemRight,
  appVersion,
}) => {
  return (
    <View style={styles.container}>
      <CustomHeader
        backgroundColor={Colors.white_fff}
        backIconColor={Colors.black_111}
      />
      <View style={styles.body}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>{title}</Text>
          {headerItemRight && (
            <ToggleSwitch
              text1={Strings.toggleSwitch.english}
              text2={Strings.toggleSwitch.urdu}
            />
          )}
        </View>
        <View style={styles.subtitleRow}>
          <Text style={styles.subtitle}>{subtitle}</Text>
          {headerItemRight && (
            <Text style={styles.version}>
              {Strings.version}
              {appVersion}
            </Text>
          )}
        </View>

        {children}
      </View>
    </View>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white_fff,
  },
  body: {
    paddingHorizontal: 32,
  },
  title: {
    fontSize: 26,
    fontWeight: '900',
  },

  subtitle: {
    fontSize: 14,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subtitleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    marginTop: 6,
    marginBottom: 26,
  },
  version: {
    color: Colors.gray_a8a8aa,
  },
});
