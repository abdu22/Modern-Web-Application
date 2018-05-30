
function isWeekend()
{
    const todayDate=new Date();
    const day=todayDate.getDay();
    console.log(day);
    const days=['weekend','weekday','weekday','weekday','weekday','weekday','weekend'];
    return (days[day]);
}

console.log(isWeekend());