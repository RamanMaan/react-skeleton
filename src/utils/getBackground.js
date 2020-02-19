import { colorMappings } from 'constants/colorMappings';
import { background } from 'styles/background';

export const getBackground = (use, translucent, customColors) => {
  const { color, shimmerColor } = colorMappings[use] || customColors;

  return background({
    color,
    shimmerColor,
    translucent,
    use,
  });
};
