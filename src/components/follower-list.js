import { FollowerCard } from "@/components/follower";
import Link from "next/link";

export function FollowerList({ followers, renderType }) {
  return (
    <>
      <div className="lg:container lg:mx-auto my-6">
        <div className="flex items-center">
          <Link href="/">
            <a className="">Home</a>
          </Link>
          <h1 className="text-3xl text-white m-auto">GitHub Followers</h1>
        </div>
      </div>
      <div className="lg:container lg:mx-auto grid grid-cols-4 gap-4">
        {followers.map((follower) => {
          return (
            <FollowerCard
              follower={follower}
              key={follower.id}
              renderType={renderType}
            />
          );
        })}
      </div>
    </>
  );
}
