* android studio emulator
  * built-in with Android Studio
  * alternative to use an Android device
  
## Troubleshooting

### Multiple `adb` versions

* TODO:
Having multiple `adb` versions on your system can result in the following error:

<Terminal cmd={["$ adb server version (xx) doesn't match this client (xx); killing..."]} />

This is because the `adb` version on your system is different from the `adb` version on the Android SDK platform-tools.

<Step label="1">
Open the terminal and check the `adb` version on the system:

<Terminal cmd={['$ adb version']} />
</Step>

<Step label="2">
And from the Android SDK platform-tool directory:

<Terminal cmd={[
  '$ cd ~/Library/Android/sdk/platform-tools',
  '$ ./adb version'
]} cmdCopy="cd ~/Library/Android/sdk/platform-tools && ./adb version" />
</Step>

<Step label="3">
Copy `adb` from Android SDK directory to `usr/bin` directory:

<Terminal cmd={['$ sudo cp ~/Library/Android/sdk/platform-tools/adb /usr/bin']} />
</Step>
