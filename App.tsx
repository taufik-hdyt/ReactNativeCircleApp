import React from "react";
import { Box, NativeBaseProvider } from "native-base";
import Containers from "./containers";


export default function App() {
  return (
    <NativeBaseProvider>

      <Containers />

    </NativeBaseProvider>
  );
}