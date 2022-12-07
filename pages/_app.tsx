import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React from "react";
import {ThemeProvider} from "next-themes";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme="dark">
      <Component {...pageProps} />
    </ThemeProvider>
    )
}
