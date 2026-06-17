import './globals.css';

export const metadata = {
  title: 'Satvik Bagul | Portfolio',
  description: 'Intelligence Dossier and Portfolio Data',
};

import { MagneticCursor } from '../components/CyberAssets';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="cursor-none"> {/* Hide default system cursor */}
        <MagneticCursor />
        {children}
      </body>
    </html>
  );
}
