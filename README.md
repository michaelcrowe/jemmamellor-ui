This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, ensure all packages are installed:

```bash
yarn
```

Run the development server:

```bash
yarn dev
```

Open [http://localhost:3001](http://localhost:3001) with your browser to see the result.

Make sure your backend project is running and the graphql endpoint is at http://localhost:3000/api/graphql
and you've created some posts (I've not done any error handling yet so without posts the graphql request will fail silently).

Important: turn off browser cache else you won't see your posts get updated as you add them. Under the Network tab in browser tools there will be a "disable cache" checkbox.

# Important links

- [Apollo Client and NextJS 13](https://www.apollographql.com/blog/apollo-client/next-js/how-to-use-apollo-client-with-next-js-13/)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.