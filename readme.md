## Integrating React Native with Native Android App

### Introduction
This guide outlines the steps to integrate a standalone React Native app with an existing native Android project.

### Prerequisites
- Android Studio
- Node.js
- npm

### Steps

1. **Create a React Native Project:**
   - Create a standalone React Native project in a separate location.

2. **Bundle React Native Code:**
   - In the root directory of the React Native project, execute:
     ```bash
     npm install
     npm run build
     ```
   - This generates `index.android.bundle` and `index.android.bundle.map` files inside `android/app/main/assets` directory.

3. **Copy Bundle Files:**
   - Copy all bundle files from the React Native project to the Android project's directory structure:
     ```
     React-native-project
     ├── android
     │   └── app
     │       └── src
     │           └── main
     │               ├── assets
     │               │   └── [bundle files]
     ├── ios
     ├── node-modules
     ├── index.js
     └── etc.
     ```

4. **Update Android Manifest:**
   - Add the following code to `AndroidManifest.xml`:
     ```xml
     <activity
         android:name=".MyReactActivity"
         android:label="@string/app_name"
         android:theme="@style/Theme.AppCompat.Light.NoActionBar"
         android:configChanges="keyboard|keyboardHidden|orientation|screenSize"
         android:windowSoftInputMode="adjustResize" />
     ```

5. **Update Activity Layout:**
   - In `res -> layout -> activity_main.xml`, add a button to load the React application:
     ```xml
     <Button
         android:id="@+id/button"
         android:layout_width="wrap_content"
         android:layout_height="wrap_content"
         android:text="Load React Application"
         app:layout_constraintBottom_toBottomOf="parent"
         app:layout_constraintEnd_toEndOf="parent"
         app:layout_constraintStart_toStartOf="parent"
         app:layout_constraintTop_toBottomOf="@+id/textView" />
     ```

6. **Add MyReactActivity.java:**
   - Copy and paste `MyReactActivity.java` to `src -> main -> java`.

7. **Update Gradle Files:**
   - Modify the following files according to your project setup:
     - `android/build.gradle`
     - `android/app/build.gradle`
     - `android/settings.gradle`

8. **Open Android Project with Android Studio:**
   - Open the `android` folder of the Android project with Android Studio and sync the project.

9. **Run Android App:**
   - Run the Android app from Android Studio.

### Conclusion
Your native Android app is now integrated with the React Native codebase, allowing you to leverage both native and React Native components seamlessly.
