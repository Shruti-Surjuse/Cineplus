"use client";
import "./globals.css";
import { Inter } from "next/font/google";

import { store } from "@/store/store";
import { Provider } from "react-redux";
import NavBar from "./components/NavBar/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Provider store={store}>
          <NavBar/>
          {children}
          </Provider>
      </body>
    </html>
  );
}