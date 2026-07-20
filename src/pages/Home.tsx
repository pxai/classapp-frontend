import { useCurrentUser } from "../hooks/useCurrentUser";

export default function Home () {
  const { data: user } = useCurrentUser();

  return (<>
    <div>This is home</div>
    {
      user && <p>Welcome! {user?.email}</p>
    }
  </>)
}