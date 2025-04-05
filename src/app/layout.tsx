import './globals.css';
import Navbar from './components/Navbar';

export const metadata = {
  title: 'Your Name | Portfolio',
  description: 'Portfolio of [Your Name], a [Your Profession]',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}