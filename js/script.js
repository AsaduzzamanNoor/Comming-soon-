var countDownDate = new Date("Dec 31, 2020 00:00:00").getTime();
var countDownfunction = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("demo").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    if (distance < 0) {
        clearInterval(countDownfunction);
        document.getElementById("demo").innerHTML = "EXPIRED"
    }
}, 1000);


// // set the date we're counting down to
// var countDownDate = new Date("Dec 31, 2020 00:00:00").getTime();
// // Update the count down every 1 second
// var countDownfunction = setInterval(function () {
//     // Get todays date and time
//     var now = new Date().getTime();
//     // Find the distance between now an the cound down date
//     var distance = countDownDate - now;
//     // Time calculation for days, hours, minutes and seconds
//     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//     var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     var seconds = Math.floor((distance % (1000 * 60)) / 1000);
//     // Output the result in an element with id = "demo"
//     document.getElementById("demo").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

//     // If the count down is over, write some text
//     if (distance < 0) {
//         clearInterval(countDownfunction);
//         document.getElementById("demo").innerHTML = "EXPIRED"
//     }
// }, 1000);

