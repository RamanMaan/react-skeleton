import { BLANK, DEFAULT, DARK, SHADE } from 'constants/useOptions';
import { WHITE, LIGHT_GREY, GREY, DARK_GREY } from './colours';

export const colourMappings = {
  [BLANK]: {
    colour: WHITE,
  },
  [DEFAULT]: {
    colour: LIGHT_GREY,
    shimmerColour: GREY,
  },
  [SHADE]: {
    colour: GREY,
    shimmerColour: LIGHT_GREY,
  },
  [DARK]: {
    colour: DARK_GREY,
    shimmerColour: GREY,
  },
};
