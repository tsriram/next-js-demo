import { useRouter } from "next/router";

export function UserDetails({ user }) {
  const router = useRouter();
  return (
    <>
      <div className="lg:container lg:mx-auto my-6">
        <div className="flex items-center">
          <a className="cursor-pointer" onClick={() => router.back()}>
            Back
          </a>
        </div>
        <div className="lg:container lg:mx-auto flex flex-col content-center">
          <h1 className="text-3xl text-white m-auto">{user.name}</h1>
          <img
            className="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto mt-10"
            src={user.avatar_url}
            alt={user.login}
          />
          <p className="text-center mt-5">{user.bio}</p>
          <div className="flex justify-center mt-10">
            <div className="max-w-sm rounded shadow-lg flex flex-col items-center p-8 w-250 bg-gray-600 mr-10">
              <p>Public repos: {user.public_repos}</p>
            </div>
            <div className="max-w-sm rounded shadow-lg flex flex-col items-center p-8 w-250 bg-gray-600 mr-2">
              <p>Public gists: {user.public_gists}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
