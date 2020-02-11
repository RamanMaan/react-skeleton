import { colourMappings } from 'constants/colourMappings';
import { background } from 'styles/background';

export const getBackground = (use, translucent, customColours) => {
  const { colour, shimmerColour } = colourMappings[use] || customColours;

  return background({
    colour,
    shimmerColour,
    translucent,
    use,
  });
};
