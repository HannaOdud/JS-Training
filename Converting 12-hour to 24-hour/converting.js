function to24hourtime(hour, minute, period) {
  // hour will always range from 1 to 12 (inclusive)
    if (period === "am"){
        if(hour === 12){
            hour = 0
        }

    }
    if (period === "pm"){
        if(hour !== 12){
            hour=hour+12
        }
    }

    let  hourStr = String(hour).padStart(2,"0")
    let  minStr = String(minute).padStart(2,"0")

  // minute will always range from 0 to 59 (inclusive)
  // period will always be either "am" or "pm"
  return hourStr+minStr;
}


/////////---------2------------------////////////
function to24hourtime(hour, minute, period) {
  if (period === "am" && hour === 12) {
    hour = 0;
  } else if (period === "pm" && hour !== 12) {
    hour += 12;
  }
  return hour.toString().padStart(2, "0") + minute.toString().padStart(2, "0");
}