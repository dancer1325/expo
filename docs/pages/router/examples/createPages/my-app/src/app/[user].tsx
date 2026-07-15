import { useLocalSearchParams } from 'expo-router';
import { Text } from 'react-native';

export default function UserPage() {
    const { user } = useLocalSearchParams();
    return <Text>Perfil de: {user}</Text>;
}