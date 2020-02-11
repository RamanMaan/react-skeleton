import React from 'react';
import styled from 'styled-components';

import Base from 'components/Base';

const StyledText = styled(Base)`
  line-height: 1;
  width: 100%;
`;

const SkeletonText = (...props) => <StyledText {...props}>&nbsp;</StyledText>;

export default SkeletonText;
