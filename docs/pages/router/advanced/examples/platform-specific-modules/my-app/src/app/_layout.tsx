import { Link, Slot } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { Platform } from 'react-native';

import {Tabs} from "expo-router/ui";

SplashScreen.preventAutoHideAsync();

export default function TabLayout() {
    if (Platform.OS === 'web') {
        // Use a basic custom layout on web.
        return (
            <div style={{ flex: 1 }}>
                <header>
                    <Link href="/">Home</Link>
                    <Link href="/settings">Settings</Link>
                </header>
                <Slot />
            </div>
        );
    }
    // Use a native bottom tabs layout on native platforms.
    return (
        <Tabs>
            <Tabs.Screen name="index" options={{ title: 'Home' }} />
            <Tabs.Screen name="settings" options={{ title: 'Settings' }} />
        </Tabs>
    );
}
