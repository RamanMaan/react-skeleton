import React from 'react';
import styled from 'styled-components';

import Base from 'components/Base/Base';

const StyledText = styled(Base)`
  line-height: 1;
  width: 100%;
`;

/**
 * A text replacement component
 */
const SkeletonText = (...props) => <StyledText {...props}>&nbsp;</StyledText>;

export default SkeletonText;
