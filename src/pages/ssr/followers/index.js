import { FollowerList } from "@/components/follower-list";
import { getAuthHeaders } from "src/util";
import { getFollowers } from "src/api";

export default function FollowersSSR({ followers }) {
  return <FollowerList followers={followers} renderType="ssr" />;
}

export async function getServerSideProps() {
  const authHeaders = getAuthHeaders();
  console.log("Fetching followers to render on server...");
  const followers = await getFollowers(authHeaders);
  return {
    props: {
      followers
    }
  };
}
