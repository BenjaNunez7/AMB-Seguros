import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Plus Jakarta Sans (variable 200–800), alojada en el proyecto. Licencia: app/fonts/OFL.txt
const jakarta = localFont({
  src: "./fonts/PlusJakartaSans-Variable.woff2",
  variable: "--font-jakarta",
  weight: "200 800",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Asegúrate",
  description:
    "Corredora de seguros digital e independiente. Comparamos todo el mercado y encontramos el seguro ideal para ti, sin costo extra.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={jakarta.variable}>
      <body>{children}</body>
    </html>
  );
}
