import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import useOptions, { DEFAULT } from 'constants/useOptions';
import { getBackground } from 'utils/getBackground';

/**
 * The base of all Skeleton components. You can use this to compose your own skeleton components.
 */
const Base = styled.div`
  ${({ size, width, height }) => css`
    height: ${size || height};
    width: ${size || width};
    min-width: ${size || width};
  `}
  border-radius: ${({ radius }) => radius};
  ${({ use, translucent, colour, shimmerColour }) =>
    getBackground(use, translucent, { colour, shimmerColour })};
`;

Base.defaultProps = {
  use: DEFAULT,
};

Base.propTypes = {
  colour: PropTypes.string,
  height: PropTypes.string,
  radius: PropTypes.string,
  shimmerColour: PropTypes.string,
  size: PropTypes.number,
  translucent: PropTypes.bool,
  use: PropTypes.oneOf(useOptions).isRequired,
  width: PropTypes.string,
};

/** @component */
export default Base;
