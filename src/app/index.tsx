import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Start from '../components/Start';

export default function Page() {

  return  (
    <SafeAreaProvider>
      <Start />
    </SafeAreaProvider>
  )
}
