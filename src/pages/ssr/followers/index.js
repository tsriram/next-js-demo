import { FollowerList } from "@/components/follower-list";
import { Spinner } from "@/components/spinner";
import { useQuery } from "react-query";
import { getFollowers } from "src/api";

export default function FollowersSSR({ followers }) {
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

export async function getServerSideProps() {
  const followers = await getFollowers();
  return {
    props: {
      data: followers
    }
  };
}
