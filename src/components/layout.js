import Head from "next/head";

export function Layout({ children }) {
  return (
    <div className="p-8 bg-gray-800 min-h-screen min-w-screen text-white">
      <Head>
        <title>Next.js Demo - GitHub Followers</title>
      </Head>

      <div>{children}</div>
    </div>
  );
}
