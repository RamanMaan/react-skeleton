import { css } from 'styled-components';
import { BLANK } from 'constants/useOptions';
import { SHIMMER_SIZE } from 'constants/defaultValues';
import { shimmer } from 'styles/shimmer';

const shouldShimmer = use => use !== BLANK;

/**
 * Generates the background for the component.
 * If no shimmerColour colour provided the background is a solid colour
 *
 * @param {string} colour The colour of the background
 * @param {string} shimmerColour The colour of the shimmer
 * @param {useOption} use The use purpose for this component
 * @param {boolean} translucent Whether to add opacity or not
 * @returns {string} The background to render
 */
export const background = ({ colour, shimmerColour, translucent, use }) => css`
  &, &:after, &:before {
    background: ${colour};
    ${shimmerColour &&
      css`
        background-image: linear-gradient(
          to right,
          ${colour},
          ${shimmerColour} 30%,
          ${colour} 60%
        );
      `}
    background-size: ${SHIMMER_SIZE} 100%;
    background-repeat: no-repeat;
    ${translucent &&
      css`
        opacity: 0.85;
      `}
    ${shouldShimmer(use) && shimmer}
  }
`;
