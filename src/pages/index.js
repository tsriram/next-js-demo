import NextLink from "next/link";

export default function Home() {
  return (
    <div>
      <NextLink href="/csr/followers" passHref>
        <div className="max-w-sm rounded shadow-lg flex flex-col items-center p-8 w-250 bg-gray-600 mb-2 cursor-pointer">
          <a>Client Side Rendered</a>
        </div>
      </NextLink>

      <NextLink href="/ssg/followers" passHref>
        <div className="max-w-sm rounded shadow-lg flex flex-col items-center p-8 w-250 bg-gray-600 mb-2 cursor-pointer">
          <a>Statically Generated</a>
        </div>
      </NextLink>

      <NextLink href="/ssr/followers" passHref>
        <div className="max-w-sm rounded shadow-lg flex flex-col items-center p-8 w-250 bg-gray-600 mb-2 cursor-pointer">
          <a>Server Side Rendered</a>
        </div>
      </NextLink>
    </div>
  );
}
