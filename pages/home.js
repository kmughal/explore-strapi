import store from "../utils/local-storage";

export default () => {
  const [user,setUser] = React.useState(null)
  store.getStrapiUser(setUser)

  return (
    <>
      <h1>Welcome {user && user.user.username}[{user && user.user.email}]</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </>
  );
};
