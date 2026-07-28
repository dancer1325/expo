import { View, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function ProductDetail() {
  const { productId } = useLocalSearchParams();

  return (
    <View>
      <Text>Product: {productId}</Text>
    </View>
  );
}
