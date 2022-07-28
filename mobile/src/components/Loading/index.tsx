import { CircleNotch } from 'phosphor-react-native';
import React from 'react';
import { View } from 'react-native';
import { theme } from '../../theme';

import {styles} from './styles'

export function Loading() {
  return (
    <View style={styles.container}>
        <View style={styles.load}>
            <CircleNotch 
                size={32} 
                color={theme.colors.second_color}
            />
        </View>
    </View>
  );
}