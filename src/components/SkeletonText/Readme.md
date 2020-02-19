The `SkeletonText` component can be dropped in as a child of any text component and will automatically resize itself to the dimensions of the containing element.

##### Example - SkeletonText

```jsx
import SkeletonText from './SkeletonText';

<>
  <h1 style={{ fontSize: 20 }}>
    <SkeletonText />
  </h1>
  <h2 style={{ fontSize: 10 }}>
    <SkeletonText />
  </h2>
</>;
```

It can be used effectively as a fallback to render when displaying async text.

##### Example - Text fallback

```jsx
import styled from 'styled-components';
const H1 = styled.h1`
  font-size: 20px;
  line-height: 1;
`;
const AsyncText = styled.span`
  display: block;
  font-size: 12px;
  line-height: 1;
  margin-bottom: 1em;
`;

import { useState } from 'react';
import SkeletonText from './SkeletonText';

function TextFallbackExample() {
  const [asyncData, setData] = useState(null);
  const toggle = () => setData(asyncData ? null : 'Lorem ipsum');

  return (
    <>
      <button onClick={toggle}>Toggle Loading</button>
      <H1>{asyncData || <SkeletonText />}</H1>
      <AsyncText>{asyncData || <SkeletonText />}</AsyncText>
      <AsyncText>{asyncData || <SkeletonText />}</AsyncText>
      <AsyncText>{asyncData || <SkeletonText />}</AsyncText>
    </>
  );
}

<TextFallbackExample />;
```
