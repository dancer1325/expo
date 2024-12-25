## Set up Android Studio

### | macOS

* Download & install [Android Studio](https://developer.android.com/studio).
* Open the **Android Studio** app,
  * click **More Actions**, select **SDK Manager**
  * **Settings** &gt; **Languages & Frameworks** &gt; **Android SDK**
    * | **SDK Platforms** tab, select the latest Android version (API level)
    
      ![](/docs/public/static/images/android-studio/build-tools.png)
    * | **SDK Tools** tab, you MUST have installed >= 1 version of the **Android SDK Build-Tools** and **Android Emulator**

      ![](/docs/public/static/images/android-studio/sdk-platforms.png)

* copy the **Android SDK Location**'s path
  
  ![](/docs/public/static/images/android-studio/sdk-location.png)

* click **Apply** and **OK** -- to -- install the Android SDK & related build tools
* set the NEXT environment variables | **~/.bash_profile** (or **~/.zshrc**)
  * see [environment variable](https://developer.android.com/studio/command-line/variables#envar) 

  ```
  export ANDROID_HOME=$HOME/Library/Android/sdk
  export PATH=$PATH:$ANDROID_HOME/emulator
  export PATH=$PATH:$ANDROID_HOME/platform-tools
  ```

* `adb --version`
  * check that you can run `adb` | your terminal

### | Windows

* TODO:

<Step label="1">

Download [Android Studio](https://developer.android.com/studio).

</Step>

<Step label="2">

Open **Android Studio Setup**. Under **Select components to install**, select Android Studio and Android Virtual Device. Then, click **Next**.

</Step>

<Step label="3">

In the Android Studio Setup Wizard, under **Install Type**, select **Standard** and click **Next**.

<ContentSpotlight
  alt="Android Studio Setup Wizard asks for the type of installation."
  src="/static/images/android-studio/windows-install-type.png"
  className="max-w-[600px]"
/>

</Step>

<Step label="4">

The Android Studio Setup Wizard will ask you to verify the settings, such as the version of Android SDK, platform-tools, and so on. Click **Next** after you have verified.

</Step>

<Step label="5">

In the next window, accept licenses for all available components.

<ContentSpotlight
  alt="Android Studio Setup Wizard asks to accept various licenses to install the tools."
  src="/static/images/android-studio/windows-licenses.png"
  className="max-w-[600px]"
/>

</Step>

<Step label="6">

After the tools installation is complete, configure the `ANDROID_HOME` environment variable. Go to **Windows Control Panel** > **User Accounts** > **User Accounts** (again) > **Change my environment variables** and click **New** to create a new `ANDROID_HOME` user variable. The value of this variable will point to the path to your Android SDK:

<ContentSpotlight
  alt="Setting up ANDROID_HOME user variable."
  src="/static/images/android-studio/windows-android-home-variable.png"
  className="max-w-[480px]"
/>

<Collapsible summary="How to find installed SDK location?">

By default, the Android SDK is installed at the following location:

```bash
%LOCALAPPDATA%\Android\Sdk
```

To find the location of the SDK in Android Studio manually, go to **Settings** > **Languages & Frameworks** > **Android SDK**. See the location next to **Android SDK Location**.

<ContentSpotlight
  alt="Android SDK location in Android Studio Settings."
  src="/static/images/android-studio/windows-android-sdk-location.png"
  className="max-w-[400px]"
/>

</Collapsible>

</Step>

<Step label="7">

To verify that the new environment variable is loaded, open **PowerShell**, and copy and paste the following command:

<Terminal cmd={['$ Get-ChildItem -Path Env: ']} />

The command will output all user environment variables. In this list, see if `ANDROID_HOME` has been added.

</Step>

<Step label="8">

To add platform-tools to the Path, go to **Windows Control Panel** > **User Accounts** > **User Accounts** (again) > **Change my environment variables** > **Path** > **Edit** > **New** and add the path to the platform-tools to the list as shown below:

<ContentSpotlight
  alt="Setting up platform-tools user variable."
  src="/static/images/android-studio/windows-platform-tools-path.png"
  className="max-w-[480px]"
/>

<Collapsible summary="How to find installed platform-tools location">

By default, the platform-tools are installed at the following location:

```bash
%LOCALAPPDATA%\Android\Sdk\platform-tools
```

</Collapsible>

</Step>

<Step label="9">

Finally, make sure that you can run `adb` from the PowerShell. For example, run the `adb --version` to see which version of the `adb` your system is running.

</Step>
