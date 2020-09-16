import base64 from "base-64";

export function getAuthHeaders() {
  const user = process.env.NEXT_PUBLIC_GH_USER;
  const token = process.env.GH_TOKEN;

  const headers = new Headers();
  headers.set("Authorization", "Basic " + base64.encode(user + ":" + token));
  return headers;
}
