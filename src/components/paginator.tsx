import React, { useEffect, useState } from 'react';
import { Pressable, View, StyleSheet, Text } from 'react-native';
import Animated, {
  useSharedValue,
  withTiming,
  ZoomIn,
  ZoomOut,
  SequencedTransition,
} from 'react-native-reanimated';

import Dot from './dots';
import { COLORS } from '../assets/styleGuide';

interface IPaginatorProps {
  totalDots: number;
  selected: number;
}


const Paginator: React.FC<IPaginatorProps> = (props) => {
  const {
    totalDots = 5,
    selected = 0
  } = props
  const dotsArray = Array.from({ length: totalDots }, (_, index) => index);

  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withTiming(selected, { duration: 200 });
  }, [selected]);


  return (
    <View style={styles.center}>
      <Animated.View style={styles.row}>

        <Animated.View layout={SequencedTransition} style={styles.dotsContainer}>
          {dotsArray.map((id) => (
            <Dot id={id} key={id} progress={progress} />
          ))}
        </Animated.View>
      </Animated.View>
    </View>
  );
};

export default Paginator;

const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
  },
  dotsContainer: {
    borderRadius: 28,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
});