import Head from "next/head";

export function Layout({ children }) {
  return (
    <div className="lg:container lg:mx-auto p-8 bg-gray-800">
      <Head>
        <title>GitHub Followers</title>
      </Head>

      <div>{children}</div>
    </div>
  );
}
