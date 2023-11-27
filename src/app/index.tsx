import React from 'react';
import { Redirect } from 'expo-router';

const Page = () => {
  return  (
    <Redirect href="/(drawer)/start/" />
  );
};

export default Page;
