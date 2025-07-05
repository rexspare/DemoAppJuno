import React, { FC } from 'react';
import { Text, TextProps, TextStyle } from "react-native";
import { COLORS } from '../assets/styleGuide';

export interface IAppTextProps extends TextProps {
  bold?: boolean;
  semiBold?: boolean;
  light?: boolean;
  medium?: boolean;
  fontSize?: number;
  style?: TextStyle;
}

const AppText: FC<IAppTextProps> = (props) => {
  const fontWeight = React.useMemo(() => {
    if (!!props.bold) {
      return '700'
    } else if (!!props.semiBold) {
      return '600'
    } else if (!!props.light) {
      return '300'
    } else if (!!props.medium) {
      return '500'
    }

    return '400'
  }, []);

  return <Text allowFontScaling={false} {...props} style={[{ fontSize: props.fontSize, fontWeight, color: COLORS.TEXT }, props.style,]} />
}

export default AppText