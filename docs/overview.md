Install the library:

```bash
npm install @ramanmaan/react-skeleton
```

The way this library is used is entirely up to you. I would suggest creating a `Switch` component or HOC which could take a `isLoading` prop to determine whether to render the loading state or not.

Example:

```jsx static
const AsyncSwitch = ({
  isLoading,
  skeleton: Skeleton,
  component: Component,
  ...rest
}) => {
  return isLoading ? <Skeleton /> : <Component {...rest} />;
};

<AsyncSwitch
  component={MovieDetails}
  isLoading={isLoading(getMovieAsyncData)}
  skeleton={MovieDetailsSkeleton}
/>;
```

This could provide a single consistent and extendable method to manage async data. You could pass additional props to handle data fetching, error states, etc.
