# react-vite-carbon-tutorial

[Migrating your Create React App Project to Vite](https://craftsmenltd.com/blog/2022/06/23/migrating-your-create-react-app-project-to-vite/)

[Carbon Design System Tutorial](https://carbondesignsystem.com/developing/react-tutorial/step-1)

## vite specific setting for Github or .env replacements for process.env variables

Prefix for Vite variables 'VITE\_'

```js
const client = new ApolloClient({
  cache: cache,
  uri: 'https://api.github.com/graphql',
  headers: {
    authorization: `Bearer ${import.meta.env.VITE_GITHUB_PERSONAL_ACCESS_TOKEN}`,
  },
});
```

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/vitejs-vite-hwcyqs)
