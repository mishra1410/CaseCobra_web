import { Inter, Recursive } from 'next/font/google'
import '@/styles/globals.css'
import Navbar from '@/components/Navbar'
import { ThemeProvider } from '@/components/theme/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import Footer from '@/components/Footer'
import Providers from '@/components/Providers'
import { constructMetadata } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'] })
const recursive = Recursive({ subsets: ['latin'] })

export const metadata = constructMetadata()

export default function RootLayout({
  children,
  authModal
}: Readonly<{
  children: React.ReactNode
  authModal: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={recursive.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {authModal}
          <main className='flex min-h-[calc(100vh-3.5rem-1px)] flex-col'>
            <div className='flex h-full flex-1 flex-col'>
              <Providers>{children}</Providers>
            </div>
            <Footer />
          </main>
          <Toaster richColors />
        </ThemeProvider>
      </body>
    </html>
  )
}
