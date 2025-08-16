import '../styles/globals.css';
import NavBar from '@/components/NavBar';

export const metadata = {
  title: 'GrowIndia Job Portal (MVP)',
  description: 'AI-enabled job portal — MVP scaffold',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main className="container py-6">{children}</main>
      </body>
    </html>
  );
}
