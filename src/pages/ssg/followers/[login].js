import { UserDetails } from "@/components/user-details";
import { getFollowers, getUserDetails } from "src/api";
import { getAuthHeaders } from "src/util";

export default function FollowerDetails({ user }) {
  return <UserDetails user={user} />;
}

export async function getStaticPaths() {
  const authHeaders = getAuthHeaders();
  const followers = await getFollowers(authHeaders);
  const paths = followers.map((follower) => {
    return {
      params: {
        login: follower.login
      }
    };
  });

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const authHeaders = getAuthHeaders();
  const user = await getUserDetails(params.login, authHeaders);
  return {
    props: {
      user
    }
  };
}
