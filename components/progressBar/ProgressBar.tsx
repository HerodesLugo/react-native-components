import { StyleSheet, View } from 'react-native';
import { ProgressBarProps } from './type';

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  height = 8,
  backgroundColor = '#e0e0e0',
  fillColor = '#3b82f6',
  borderRadius = 4,
}) => {
  return (
    <View
      style={[
        styles.container,
        {
          height,
          backgroundColor,
          borderRadius,
        },
      ]}
    >
      <View
        style={{
          width: `${Math.max(0, Math.min(progress, 1)) * 100}%`,
          height: '100%',
          backgroundColor: fillColor,
          borderRadius,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    overflow: 'hidden',
  },
});

export default ProgressBar;
