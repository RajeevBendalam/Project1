// This function checks if the current time is between 2 PM and 7 PM
export const isWithinAllowedTime = () => {
    const now = new Date();
    const hours = now.getHours();
    return hours >= 14 && hours <= 19; // 2 PM to 7 PM
  };