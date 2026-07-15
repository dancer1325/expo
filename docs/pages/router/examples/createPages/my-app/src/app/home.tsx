import { Text } from 'react-native';
import { useFonts } from 'expo-font';

export default function App() {
    /* @info Expo CLI automatically finds and extracts this font during compilation. */
    const [isLoaded] = useFonts({
        /* @end */
        inter: require('@/assets/inter.ttf'),
    });

    /* @info Always true on web with static rendering enabled. */
    if (!isLoaded) {
        /* @end */
        return null;
    }

    return <Text style={{ fontFamily: 'inter' }}>Hello Universe</Text>;
}