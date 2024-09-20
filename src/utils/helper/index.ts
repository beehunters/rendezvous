export const limitText = (text: string, limit: number) => {
    const words = text.split(' ');
    return words?.length > limit ? words?.slice(0, limit).join(' ') + '...' : text;
  };

  export const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    
    const weekdayOptions: Intl.DateTimeFormatOptions = { weekday: 'short' };
    const monthOptions: Intl.DateTimeFormatOptions = { month: 'short' };
  
    const weekday = date.toLocaleDateString(undefined, weekdayOptions);
    const month = date.toLocaleDateString(undefined, monthOptions);
    const day = date.getDate();
    const suffix = getDaySuffix(day); // Get the day suffix
  
    return `${weekday}, ${month} ${day}${suffix}`;
  };
  
  const getDaySuffix = (day: number) => {
    if (day > 3 && day < 21) return 'th'; 
    switch (day % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
  };
  
  

  export const formatTime = (timeString: string) => {
    const [hours, minutes] = timeString.split(":");
    const date = new Date();
    date.setHours(parseInt(hours));
    date.setMinutes(parseInt(minutes));
    return date.toLocaleTimeString([], {
      hour: "numeric",
      // minute: "2-digit",
      hour12: true,
    });
  };