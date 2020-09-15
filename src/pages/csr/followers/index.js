import { FollowerList } from "@/components/follower-list";
import { Spinner } from "@/components/spinner";
import { useEffect, useState } from "react";
import { getFollowers } from "src/api";

export default function Followers() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(undefined);
  const [followers, setFollowers] = useState([]);

  async function fetchFollowers() {
    try {
      const data = await getFollowers();
      setFollowers(data);
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  }

  useEffect(() => {
    fetchFollowers();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <h1>Error loading followers: {error?.message || error}</h1>;
  }

  return <FollowerList followers={followers} />;
}
