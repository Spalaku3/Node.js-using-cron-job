// setInterval(()=> {
//     console.log("Running a task every second");
// },1000)

const schedule = require('node-schedule');

// const job = schedule.scheduleJob('47 * * * *', function(fireDate){
//     console.log('Running the task every second for testing at' + fireDate + ', but actually ran at' + new Date());
// });


const job = schedule.scheduleJob('* * * * * *', () => {
    console.log('Running the task every second for testing');
});

setInterval(()=>{
schedule.gracefulShutdown();
console.log('Shutting down the server count');
},10000);