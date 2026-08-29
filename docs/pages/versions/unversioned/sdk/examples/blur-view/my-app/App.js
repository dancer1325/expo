import LegacyWayCreatingABlur from "./LegacyWayCreatingABlur";
import {FlatList, View} from "react-native";
import {BlurView} from "expo-blur";


export default function App() {
  return (
      <View>
        <LegacyWayCreatingABlur/>
      </View>
  );
}

function KnownIssue() {
  return (
      <View>
        {/* 1. WRONG:   `BlurView`  BEFORE dynamic content*/}
        <View>
          <BlurView />
          <FlatList />
        </View>

        {/* 2. WELL:   `BlurView`  AFTER dynamic content*/}
        <View>
          <FlatList />
          <BlurView />
        </View>
      </View>
  );
}
