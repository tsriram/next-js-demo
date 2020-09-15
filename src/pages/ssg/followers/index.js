import { FollowerList } from "@/components/follower-list";
import { Spinner } from "@/components/spinner";
import { useQuery } from "react-query";
import { getFollowers } from "src/api";

export default function FollowersSSG({ followers }) {
  const { data, isLoading, error } = useQuery("followers", getFollowers, {
    initialData: followers
  });
  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <h1>Error loading followers: {error?.message || error}</h1>;
  }

  return <FollowerList followers={data} />;
}

export async function getStaticProps() {
  const followers = await getFollowers();
  return {
    props: {
      data: followers
    }
  };
}
