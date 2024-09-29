function time() {

const hours = document.getElementById('hours')
const mins = document.getElementById('mins')
const seconds = document.getElementById('seconds')
const ampm = document.getElementById('ampm')


let date = new Date();
let h = formatTime(date.getHours());
let m = formatTime(date.getMinutes());
let s = formatTime(date.getSeconds());
let am = "AM";

// if(h>12){
//     h= h-12;
//     am = "PM";
// }

hours.innerHTML = h;
mins.innerHTML = m;
seconds.innerHTML = s;
// ampm.innerHTML = am;

}
time()
setInterval(time,1000)

function formatTime(time){
    return time < 10 ? (`0${time}`) : time;
}
