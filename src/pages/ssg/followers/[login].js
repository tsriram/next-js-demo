import { UserDetails } from "@/components/user-details";
import { getFollowers, getUserDetails } from "src/api";

export default function FollowerDetails({ user }) {
  return <UserDetails user={user} />;
}

export async function getStaticPaths() {
  const followers = await getFollowers();
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
  const user = await getUserDetails(params.login);
  return {
    props: {
      user
    }
  };
}
