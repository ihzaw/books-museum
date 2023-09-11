const formatTime = (baseTime) => {
  const timeParts = baseTime.match(/(\d+):(\d+):(\d+)([APM]+)$/);
  if (!timeParts || timeParts.length !== 5) {
    throw new Error("Invalid time format");
  }

  let hours = parseInt(timeParts[1]);
  const minutes = timeParts[2];
  const seconds = timeParts[3];
  const period = timeParts[4].toUpperCase();

  if (period === "PM" && hours !== 12) {
    hours += 12;
  } else if (period === "AM" && hours === 12) {
    hours = 0;
  }

  const hoursFormatted = String(hours).padStart(2, "0");
  return `${hoursFormatted}:${minutes}:${seconds}`;
};

const baseTime = '09:42:00AM'
const formattedTime = formatTime(baseTime)
console.log(formattedTime)