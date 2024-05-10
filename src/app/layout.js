import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import DataProvider from "@/context/DataProvider";
import Sidebar from "@/components/Sidebar";

export const metadata = {
  title: "Salman Iqbal | Portfolio",
  description: "Full Stack Web Develper",
};

export default function RootLayout({ children }) {
 

  return (
    <html lang="en">
      <body className="main-content">
        <DataProvider>
          <Sidebar />
          {children}
        </DataProvider>
      </body>
    </html>
  );
}
