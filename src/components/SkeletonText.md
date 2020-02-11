##### Example - SkeletonText

```jsx
<>
  <h1 style={{ fontSize: 20 }}>h1 - 20px</h1>
  <h1 style={{ fontSize: 20 }}>
    <SkeletonText />
  </h1>
</>
```

##### Example - Text fallback

```jsx
import styled from 'styled-components';
const H1 = styled.h1`
  font-size: 20px;
  line-height: 1;
`;
const P = styled.p`
  font-size: 12px;
  line-height: 1;
`;

import { useState } from 'react';

function TextFallbackExample() {
  const [asyncData, setData] = useState(null);
  const toggle = () => setData(asyncData ? null : 'Lorem ipsum');

  return (
    <>
      <button onClick={toggle}>Toggle Loading</button>
      <H1>{asyncData || <SkeletonText />}</H1>
      <P>{asyncData || <SkeletonText />}</P>
      <P>{asyncData || <SkeletonText />}</P>
      <P>{asyncData || <SkeletonText />}</P>
    </>
  );
}

<TextFallbackExample />;
```
