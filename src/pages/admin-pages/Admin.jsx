import { useEffect } from "react";
import LinkButton from "../../components/LinkButton";
import Login from "../Login";
import { useUser } from "../../providers/hooks";

export default function Admin() {
  const { fetchUsers, users } = useUser();
  useEffect(() => {
    fetchUsers();
    console.log(users);
  }, []);
  return (
    <>
      <Login />
      <div className="text-center bg-dark dark:bg-white p-4">
        <LinkButton to="register">Register New</LinkButton>
      </div>
    </>
  );
}
