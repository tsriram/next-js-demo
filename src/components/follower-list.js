import { FollowerCard } from "./Follower";

export function FollowerList({ followers }) {
  return (
    <>
      <div className="lg:container lg:mx-auto my-6">
        <h1 className="text-3xl text-white">Followers</h1>
      </div>
      <div className="lg:container lg:mx-auto grid grid-cols-4 gap-4">
        {followers.map((follower) => {
          return <FollowerCard follower={follower} key={follower.id} />;
        })}
      </div>
    </>
  );
}
