import "../styles/globals.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import Login from "./Login";
import Loadings from "../components/Loadings/Loadings";

function MyApp({ Component, pageProps }) {
  const [user, loading] = useAuthState(auth);

  if (loading) return <Loadings />;
  if (!user) return <Login />;

  return <Component {...pageProps} />;
}

export default MyApp;
