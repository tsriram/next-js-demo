import { UserDetails } from "@/components/user-details";
import { getFollowers, getUserDetails } from "src/api";

export default function FollowerDetails({ user }) {
  return <UserDetails user={user} />;
}

export async function getServerSideProps({ params }) {
  const user = await getUserDetails(params.login);
  return {
    props: {
      user
    }
  };
}
