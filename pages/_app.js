import "../styles/globals.css";
import UserContext from "../context/UserContext";

export default function App({ Component, pageProps }) {
    return (
        <UserContext>
            <Component {...pageProps} />
        </UserContext>
    );
}
