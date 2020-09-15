const fetcher = (url) => fetch(url).then((res) => res.json());

const user = process.env.NEXT_PUBLIC_GH_USER;
export async function getFollowers() {
  return fetcher(`https://api.github.com/users/${user}/followers`);
}
