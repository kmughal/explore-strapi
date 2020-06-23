import { useRouter } from 'next/router'
import webClient from "../utils/web-client";
import store from "../utils/local-storage"

export default () => {
  const router = useRouter()
  const email = React.useRef(null);
  const password = React.useRef(null);

  const loginHandler = React.useCallback((e) => {
    webClient(
      "http://localhost:1337/auth/local",
      {
        identifier: email.current.value,
        password: password.current.value,
      },
      (r) => {
        store.setStrapiUser(r);
        router.push("/home");
      }
    );
  }, []);

  return (
    <>
      <input type="text" ref={email} placeholder="email"/>
      <input type="password" ref={password} placeholder="password"/>
      <button onClick={loginHandler}>Login</button>
      &nbsp;
      <a href="/register">Register</a>
    </>
  );
};
