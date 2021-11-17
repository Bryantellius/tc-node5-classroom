export function formatTime(secs) {
  let leftOver = secs;
  let h = Math.floor(leftOver / 3600);
  leftOver = leftOver % 3600;
  let m = Math.floor(leftOver / 60);
  leftOver = leftOver % 60;

  return `${h.toString().padStart(2, "0")}:${m
    .toString()
    .padStart(2, "0")}:${leftOver.toString().padStart(2, "0")}`;
}
