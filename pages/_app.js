import '../styles/globals.css'
import UserContax from './contax/UserContax'

export default function App({ Component, pageProps }) {
  return <UserContax>
    <Component {...pageProps} />
  </UserContax>

}
