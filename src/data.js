export const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY

function valueConverter(value) {
  if (value >= 1000000) {
    return Math.floor(value / 1000000) + "M";
  }
  if (value >= 1000) {
    return Math.floor(value / 1000) + "K";
  } else {
    return value;
  }
}

export default valueConverter;
