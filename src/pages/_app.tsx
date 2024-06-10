import '@/styles/globals.css'
import { useRouter } from 'next/router'
import type { AppProps } from 'next/app'

import { Provider } from 'react-redux'
import { UserProvider } from '@auth0/nextjs-auth0/client'
import AdminLayout from './adminLayout'
import AuthLayout from './authLayout'
import { wrapper, store } from '../redux/store'
import '../i18n/config'

import { AuthContextProvider } from '../authentication/AuthContext';
import MainLayout from './mainLayout'

function App({ Component, pageProps }: AppProps) {
    const router = useRouter();
    const { pathname } = router;

    const renderLayout = () => {
        if (
            pathname.startsWith('/register') ||
            pathname.startsWith('/forgotPassword') ||
            pathname.startsWith('/login')
        ) {
            return (
                <UserProvider profileUrl="/nextjs-mbs/api/auth/me">
                    <AuthContextProvider>
                        <AuthLayout>
                            <Component {...pageProps} />
                        </AuthLayout>
                    </AuthContextProvider>
                </UserProvider>
            );
        } else if ( pathname.startsWith('/admin') ) {
            return (
                <UserProvider profileUrl="/nextjs-mbs/api/auth/me">
                    <AuthContextProvider>
                        <AdminLayout>
                            <Component {...pageProps} />
                        </AdminLayout>
                    </AuthContextProvider>
                </UserProvider>
            )
        } else {
            return (
                <UserProvider>
                    <MainLayout>
                        <Component {...pageProps} />
                    </MainLayout>
                </UserProvider>
            );
        }
    }

    return (
        <>
            <Provider store={store}>{renderLayout()}</Provider>
        </>
    )
}

export default wrapper.withRedux(App);
