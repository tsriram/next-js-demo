const fetcher = (url) => fetch(url).then((res) => res.json());

export async function getFollowers() {
  return fetcher("https://api.github.com/users/tsriram/followers");
}
