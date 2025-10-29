export const metadata = {
  title: "Kitsune Anime",
  description: "Watch anime free",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
