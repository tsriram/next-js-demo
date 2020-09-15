import { FollowerList } from "@/components/follower-list";
import { getFollowers } from "src/api";

export default function FollowersSSG({ followers }) {
  return <FollowerList followers={followers} renderType="ssg" />;
}

export async function getStaticProps() {
  const followers = await getFollowers();
  return {
    props: {
      followers
    }
  };
}
