The `Base` can be used to create your own custom skeleton components in any shape/form. All of the Skeleton atoms included in this library are built off of the `Base` component.

##### Example - Custom Skeleton Component

```jsx
import styled from 'styled-components';
import Base from './Base';

const Heart = styled(Base)`
  position: relative;
  width: 100px;
  height: 90px;
  background: none !important;
  &:before,
  &:after {
    position: absolute;
    content: '';
    left: 50px;
    top: 0;
    width: 50px;
    height: 80px;
    border-radius: 50px 50px 0 0;
    transform: rotate(-45deg);
    transform-origin: 0 100%;
  }
  &:after {
    left: 0;
    transform: rotate(45deg);
    transform-origin: 100% 100%;
  }
`;

<Heart />;
```

You can also specify custom colors for the shimmer/background to create a custom gradient.

##### Example - Custom Gradient

```jsx
import styled from 'styled-components';
import Base from './Base';

const Heart = styled(Base)`
  position: relative;
  width: 100px;
  height: 90px;
  background: none !important;
  &:before,
  &:after {
    position: absolute;
    content: '';
    left: 50px;
    top: 0;
    width: 50px;
    height: 80px;
    border-radius: 50px 50px 0 0;
    transform: rotate(-45deg);
    transform-origin: 0 100%;
  }
  &:after {
    left: 0;
    transform: rotate(45deg);
    transform-origin: 100% 100%;
  }
`;

<Heart use="custom" color="#ff4747" shimmerColor="#ff8181" />;
```
