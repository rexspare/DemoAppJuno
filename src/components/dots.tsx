import React from 'react';
import Animated, {
    Extrapolation,
    interpolate,
    interpolateColor,
    SharedValue,
    useAnimatedStyle,
} from 'react-native-reanimated';
import { StyleSheet } from 'react-native';
import { COLORS } from '../assets/styleGuide';

interface IDotProps {
    id: number;
    progress: SharedValue<number>;
}

const Dot: React.FC<IDotProps> = ({ id, progress }) => {
    const inputRange = [id - 1, id, id + 1];

    const animatedStyle = useAnimatedStyle(() => ({
        width: interpolate(progress.value, inputRange, [10, 40, 10], Extrapolation.CLAMP),
        backgroundColor: interpolateColor(progress.value, inputRange, [
            COLORS.SECONDARY,
            COLORS.TEXT,
            COLORS.SECONDARY,
        ]),
    }));

    return <Animated.View style={[styles.dot, animatedStyle]} />;
};

export default Dot;


const styles = StyleSheet.create({
    dot: {
        height: 10,
        borderRadius: 5,
    },
});