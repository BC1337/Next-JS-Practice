import '../styles/globals.css'
import Navbar from '@/components/nav'


export const metadata = {
  title: 'Next Portfolio Practice',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Navbar />
      <main>
        {children}
      </main>
    </html>
  )
}
