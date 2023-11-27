import React from 'react';
import { Stack, usePathname } from 'expo-router';

const ContactLayout = () => {
  const pathName = usePathname();
  
  return <Stack screenOptions={{ header: pathName === '/start/contact/new-page' ? undefined : () => null }}/>;
};

export default ContactLayout;