

import UserContext from '../context/UserContext'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return <UserContext>
    <Component {...pageProps} />
  </UserContext>
}