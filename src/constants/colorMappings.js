import { BLANK, DEFAULT, DARK, SHADE } from 'constants/useOptions';
import { WHITE, LIGHT_GREY, GREY, DARK_GREY } from 'constants/colors';

export const colorMappings = {
  [BLANK]: {
    color: WHITE,
  },
  [DEFAULT]: {
    color: LIGHT_GREY,
    shimmerColor: GREY,
  },
  [SHADE]: {
    color: GREY,
    shimmerColor: LIGHT_GREY,
  },
  [DARK]: {
    color: DARK_GREY,
    shimmerColor: GREY,
  },
};
