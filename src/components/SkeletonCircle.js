import styled from 'styled-components';
import PropTypes from 'prop-types';

import Base from 'components/Base';
import { DEFAULT_SIZE } from 'constants/defaultValues';

const SkeletonCircle = styled(Base)``;

SkeletonCircle.propTypes = {
  height: PropTypes.string,
  radius: PropTypes.string,
  width: PropTypes.string,
};

SkeletonCircle.defaultProps = {
  height: DEFAULT_SIZE,
  radius: '50%',
  width: DEFAULT_SIZE,
};

/** @component */
export default SkeletonCircle;
