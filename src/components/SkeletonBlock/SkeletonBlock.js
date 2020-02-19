import styled from 'styled-components';
import PropTypes from 'prop-types';

import Base from 'components/Base/Base';
import { DEFAULT_SIZE } from 'constants/defaultValues';

/**
 * A basic square component
 */
const SkeletonBlock = styled(Base)``;

SkeletonBlock.propTypes = {
  height: PropTypes.string,
  radius: PropTypes.string,
  width: PropTypes.string,
};

SkeletonBlock.defaultProps = {
  height: DEFAULT_SIZE,
  radius: '5px',
  width: DEFAULT_SIZE,
};

/** @component */
export default SkeletonBlock;
