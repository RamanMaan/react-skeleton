##### Example - Custom Skeleton Component

```jsx
import styled from 'styled-components';

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

##### Example - Custom Gradient

```jsx
import styled from 'styled-components';

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

<Heart use="custom" colour="#ff4747" shimmerColour="#ff8181" />;
```
