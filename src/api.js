const fetcher = (url, headers) =>
  fetch(url, {
    headers
  }).then((res) => res.json());

const user = process.env.NEXT_PUBLIC_GH_USER;

export async function getFollowers(headers) {
  return fetcher(`https://api.github.com/users/${user}/followers`, headers);
}

export async function getUserDetails(login, headers) {
  return fetcher(`https://api.github.com/users/${login}`, headers);
}
