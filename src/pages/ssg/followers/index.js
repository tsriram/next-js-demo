import { FollowerList } from "@/components/follower-list";
import { getAuthHeaders } from "src/util";
import { getFollowers } from "src/api";

export default function FollowersSSG({ followers }) {
  return <FollowerList followers={followers} renderType="ssg" />;
}

export async function getStaticProps() {
  const authHeaders = getAuthHeaders();
  const followers = await getFollowers(authHeaders);
  return {
    props: {
      followers
    }
  };
}
