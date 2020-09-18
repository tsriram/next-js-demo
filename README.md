# next-js-demo

This is a demo app built using [Next.js](https://nextjs.org) for my talk at [Chennai JavaScript meetup](https://www.meetup.com/meetup-group-zZPQtwTs/events/273234678/)

This app demonstrates client-side rendering, static generation and server-side rendering of Next.js.

### What does it do?
This app shows the list of followers of a GitHub user. To keep things simple, the user name is stored in .env file in a variable called `NEXT_PUBLIC_GH_USER`.
We have pages split into csr (client-side-rendering), ssg (static generation) and ssr (server-side rendering). And `index.js` files inside each of these directories show the list of GitHub followers of the user defined in .env file.

You can click on a follower card shown in the list and it will show the details of that GitHub user. This is shown from dynamic routes `[login].js` inside each of csr, ssg & ssr directories. 


### Running locally

Clone this repo and do `npm install`. Here are the commands you can run:

- `npm run dev` - start the development server
- `npm run build` - build the application for production. Since we have static generation of pages of all GitHub followers of the user defined in .env file, you may see an error if the rate limit for GitHub API is exceeded (it's 60 requests per minute for unauthenticated requests). If you want, you can [generate a personal access token](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) from your GitHub account and set it in a variable called `GH_TOKEN` in .env.local file (you'd need to create this file). Authenticated requests can go up to 5000 per minute.
- `npm start` - start the server in production mode (you should've run `npm run build` before running this)


### Deploying to Vercel

You can deploy this app to [Vercel](https://vercel.com) by clicking the button below.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Ftsriram%2Fnext-js-demo%2F)
