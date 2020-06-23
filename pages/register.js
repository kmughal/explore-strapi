import { useRouter } from "next/router";
import webClient from "../utils/web-client";
import store from "../utils/local-storage";

export default () => {
  const router = useRouter();
  const username = React.useRef(null);
  const email = React.useRef(null);
  const password = React.useRef(null);

  const registerHandler = React.useCallback((e) => {
    webClient(
      "http://localhost:1337/auth/local/register",
      {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      },
      (r) => {
        store.setStrapiUser(r);
        router.push("/home");
    }
    );
  }, []);

  React.useEffect(() => {
    store.clearStrapiUser();
  }, []);
  return (
    <>
      <input type="text" ref={username} placeholder="username" />
      <input type="text" ref={email} placeholder="email" />
      <input type="text" ref={password} placeholder="password" />
      <button onClick={registerHandler}>Register</button>
    </>
  );
};
