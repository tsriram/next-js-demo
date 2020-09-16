import { UserDetails } from "@/components/user-details";
import { getUserDetails } from "src/api";

export default function FollowerDetails({ user }) {
  return <UserDetails user={user} />;
}

export async function getServerSideProps({ params }) {
  const authHeaders = getAuthHeaders();
  const user = await getUserDetails(params.login, authHeaders);
  return {
    props: {
      user
    }
  };
}
