import UserContax from '../contax/UserContax'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return <UserContax>
    <Component {...pageProps} />
  </UserContax>

}
