import NextLink from "next/link";

function LinkWrapper({ children }) {
  return (
    <div className="max-w-sm rounded shadow-lg flex flex-col items-center p-8 w-250 bg-gray-600 mb-8 cursor-pointer w-64">
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <NextLink href="/csr/followers" passHref>
        <a>
          <LinkWrapper>Client Side Rendered</LinkWrapper>
        </a>
      </NextLink>

      <NextLink href="/ssg/followers" passHref>
        <a>
          <LinkWrapper>Statically Generated</LinkWrapper>
        </a>
      </NextLink>

      <NextLink href="/ssr/followers" passHref>
        <a>
          <LinkWrapper>Server Side Rendered</LinkWrapper>
        </a>
      </NextLink>
    </div>
  );
}
