import { css } from 'styled-components';
import { BLANK } from 'constants/useOptions';
import { SHIMMER_SIZE } from 'constants/defaultValues';
import { shimmer } from 'styles/shimmer';

const shouldShimmer = use => use !== BLANK;

/**
 * Generates the background for the component.
 * If no shimmerColor color provided the background is a solid color
 *
 * @param {string} color The color of the background
 * @param {string} shimmerColor The color of the shimmer
 * @param {useOption} use The use purpose for this component
 * @param {boolean} translucent Whether to add opacity or not
 * @returns {string} The background to render
 */
export const background = ({ color, shimmerColor, translucent, use }) => css`
  &, &:after, &:before {
    background: ${color};
    ${shimmerColor &&
      css`
        background-image: linear-gradient(
          to right,
          ${color},
          ${shimmerColor} 30%,
          ${color} 60%
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
