import { FollowerList } from "@/components/follower-list";
import { getFollowers } from "src/api";

export default function FollowersSSR({ followers }) {
  return <FollowerList followers={followers} renderType="ssr" />;
}

export async function getServerSideProps() {
  const authHeaders = getAuthHeaders();
  const followers = await getFollowers(authHeaders);
  return {
    props: {
      followers
    }
  };
}
