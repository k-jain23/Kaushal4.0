var one_day = 1000 * 60 * 60 * 24  
var present_date = new Date(); 
var event_day = new Date(present_date.getFullYear(), 10, 15)  
if (present_date.getMonth() == 10 && present_date.getdate() > 15)
    event_day.setFullYear(event_day.getFullYear() + 1)  
var Result = Math.round(event_day.getTime() - present_date.getTime()) / (one_day);
var Final_Result = Result.toFixed(0);
console.log(Final_Result);