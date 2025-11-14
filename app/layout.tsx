import type { Metadata } from "next";
import { Alata } from "next/font/google";
import "./globals.css";
import {
  Cursor,
  CursorFollow,
  CursorProvider,
} from "@/components/animate-ui/components/animate/cursor";
import { ThemeProvider } from "@/components/theme-provider";

const alata = Alata({
  weight: "400",
  variable: "--font-alata",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Personal Portfolio",
  description: "Intelligent Analytics, Finally.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${alata.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <CursorProvider global>
            <Cursor />
            <CursorFollow side="bottom" sideOffset={15} align="end" alignOffset={5}>
              umut-pixel
            </CursorFollow>
            {children}
          </CursorProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
