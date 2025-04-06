import './globals.css';
import Navbar from './components/Navbar';
import Chatbot from './components/Chatbot';

export const metadata = {
  title: 'Pratyusha Bachu| Portfolio',
  description: 'Portfolio of Pratyusha Bachu, a software engineer',
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
        <Chatbot />
      </body>
    </html>
  );
}