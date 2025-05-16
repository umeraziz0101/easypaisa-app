import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CustomSection = ({title, children, containerStyle, childrenStyle}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {title && <Text style={styles.sectionTitle}>{title}</Text>}

      <View style={[styles.sectionChildren, childrenStyle]}>{children}</View>
    </View>
  );
};

export default CustomSection;

const styles = StyleSheet.create({
  container: {
    marginVertical: 4,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  sectionChildren: {
    marginVertical: 16,
  },
});
