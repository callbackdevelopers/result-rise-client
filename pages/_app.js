
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';
import UserContext from "../context/UserContext";
import "../styles/globals.css";

const queryClient = new QueryClient()


export default function App({ Component, pageProps }) {


  return (
    <QueryClientProvider client={queryClient}>
      <UserContext>
        <Component {...pageProps} />
      </UserContext>
    </QueryClientProvider>

  );
}
