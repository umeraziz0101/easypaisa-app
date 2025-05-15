import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CustomSection = ({title, children}) => {
  return (
    <View style={styles.container}>
      {title && <Text style={styles.sectionTitle}>{title}</Text>}

      <View style={styles.sectionChildren}>{children}</View>
    </View>
  );
};

export default CustomSection;

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  sectionChildren: {
    marginVertical: 16,
  },
});
