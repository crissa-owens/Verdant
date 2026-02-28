import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';
import { TimeBasedTask } from '../components/time-based-tasks';

export default function taskPage() {
  return (
      <TimeBasedTask />
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
