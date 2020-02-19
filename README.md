# ☠️ react-skeleton ☠️

TL;DR: A skeleton loading state library.

### Why?

This library has a focus on providing the bare minimum required to build your own skeleton states however _you_ want to. Rather than include a ton of premade components/patterns this library focuses on simply surfacing a few atomic components to compose into components that suit your purposes. How you choose to leverage this is entirely up to you.

---

# 👋 Getting started 👋

Install the library:

```bash
npm install @ramanmaan/react-skeleton
```

The way this library is used is entirely up to you. I would suggest creating a `Switch` component which could take a `isLoading<function>` to determine whether to render the loading state or not.

Example:

```jsx
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

# ⚡️ Props ⚡️

All components in the library extend the `Base` component and as such have the same prop-interface defined below. Different components may have different default values.

| Prop                   | Description                                                  | Default Value    |
| ---------------------- | ------------------------------------------------------------ | ---------------- |
| `color<String>`        | The background colour of the component                       | `'#f0f0f0'`      |
| `height<String>`       | The height of the component                                  | `'30px'`         |
| `radius<String>`       | The border-radius of the component                           | `'5px' || '50%'` |
| `shimmerColor<String>` | The highlight colour of the shimmer                          | `'#dcdcdc'`      |
| `size<String>`         | Sets the width and height of the component to `size`         | `undefined`      |
| `translucent<Boolean>` | Whether the component should have some opacity applied to it | `false`          |
| `use<String>`          | The use of the component                                     | `DEFAULT`        |
| `width<String>`        | The width of the component                                   | `'30px'`         |

# 🎨 The Components 🎨

#### use

For components to fit a variety of `use`-cases there is a `useOptions` enum. This sets some default values on the components for common use cases.

| Type      | Prop             | Description                                           | Example |
| --------- | ---------------- | ----------------------------------------------------- | ------- |
| `DEFAULT` | `use="default"`  | The default component style                           |         |
| `BLANK`   | `use="blank"`    | A blank component - white background with no shimmer. |         |
| `CUSTOM`  | `use="custom"`   | For setting custom `color` or `shimmerColor` values   |         |
| `DARK`    | `use="on-dark"`  | For components on a dark background                   |         |
| `SHADE`   | `use="on-shade"` | For components on a shaded background                 |         |

### SkeletonBlock ⬜️

A simple square component.

![SkeletonBlock](https://user-images.githubusercontent.com/16092765/74793254-c8be4300-528d-11ea-8b20-a8256c8092d5.gif)

[Link to docs and demo](https://ramanmaan.github.io/react-skeleton/#section-skeletonblock)

| Notable Props    | Description                        | Default Value |
| ---------------- | ---------------------------------- | ------------- |
| `height<String>` | The height of the component        | `'30px'`      |
| `radius<String>` | The border-radius of the component | `'5px'`       |
| `width<String>`  | The width of the component         | `'30px'`      |

### SkeletonCircle ⚪️

A simple circle component.

![SkeletonCircle](https://user-images.githubusercontent.com/16092765/74793259-ca880680-528d-11ea-86b5-abe7a5f73de8.gif)

[Link to docs and demo](https://ramanmaan.github.io/react-skeleton/#section-skeletoncircle)

### SkeletonText

A text replacement component.

![SkeletonText](https://user-images.githubusercontent.com/16092765/74793262-cbb93380-528d-11ea-9b3d-498c02b7f081.gif)

[Link to docs and demo](https://ramanmaan.github.io/react-skeleton/#section-skeletontext)

### Base

The component all the components in the library are built from. This component can be used to construct your own custom skeleton components, and is intended to be the main API for this library.

![Base](https://user-images.githubusercontent.com/16092765/74793229-b5ab7300-528d-11ea-8b9c-7eace0d9e7db.gif)

[Link to docs and demo](https://ramanmaan.github.io/react-skeleton/#section-base)

## License

MIT © [Raman Maan](https://github.com/RamanMaan)
