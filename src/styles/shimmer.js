import { css, keyframes } from 'styled-components';
import { SHIMMER_SIZE } from 'constants/defaultValues';

const SHIMMER_ANIMATION = keyframes`
  0%{
    background-position: -${SHIMMER_SIZE} 0
  }
  100%{
    background-position: calc(${SHIMMER_SIZE} + 100%) 0
  }
`;

export const shimmer = css`
  animation: ${SHIMMER_ANIMATION} 1800ms linear 0s infinite;
`;
