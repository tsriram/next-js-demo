import { FollowerList } from "@/components/follower-list";
import { Spinner } from "@/components/spinner";
import { useQuery } from "react-query";
import { getFollowers } from "src/api";

export default function Followers() {
  const { data, isLoading, error } = useQuery("followers", getFollowers);
  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <h1>Error loading followers: {error?.message || error}</h1>;
  }

  return <FollowerList followers={data} />;
}
