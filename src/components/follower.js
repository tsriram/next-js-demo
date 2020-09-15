import Link from "next/link";

export function FollowerCard({ follower, renderType }) {
  return (
    <Link
      href={`/${renderType}/followers/[login]`}
      as={`/${renderType}/followers/${follower.login}`}
    >
      <a>
        <div className="max-w-sm rounded shadow-lg flex flex-col items-center p-8 w-250 bg-gray-600">
          <img
            className="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto"
            src={follower.avatar_url}
            alt={follower.login}
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-white">
              {follower.login}
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}
