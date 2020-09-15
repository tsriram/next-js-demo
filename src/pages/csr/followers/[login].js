import { UserDetails } from "@/components/user-details";
import { Spinner } from "@/components/spinner";
import { useEffect, useState } from "react";
import { getUserDetails } from "src/api";
import { useRouter } from "next/router";

export default function FollowerDetails() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(undefined);
  const [user, setUser] = useState(undefined);
  const router = useRouter();

  async function fetchUserDetails() {
    try {
      const data = await getUserDetails(router.query.login);
      setUser(data);
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  }

  useEffect(() => {
    fetchUserDetails();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <h1>Error loading followers: {error?.message || error}</h1>;
  }

  return <UserDetails user={user} />;
}
