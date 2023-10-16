'use client'
import './globals.css'
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css';
import Providers from '@/redux/provider';
import { store } from '@/redux/store';
import { Provider } from 'react-redux';
import { Container } from 'react-bootstrap';
import SocialMediaLoginBar from '@/components/social_media_login_bar';
import AppHeader from '@/components/app.header';
import AppFooter from '@/components/app.footer';
import { ToastContainer } from 'react-toastify'; 

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
        <Providers>
          <div className="mt-5 pt-5">
            <Container style={{ minHeight: ' calc(100vh - 60px)' }}>
              <div className='fixed-top'>
                <SocialMediaLoginBar />
                <AppHeader />
              </div>
              {children}
            </Container>
          </div>
        </Providers>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <AppFooter />
        </Provider>
      </body>
    </html>
  )
}
