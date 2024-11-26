let start = document.getElementById('start');
let stop = document.getElementById('stop');
let rst = document.getElementById('rst');
let hr = document.getElementById('hr');
let min = document.getElementById('min');
let sec = document.getElementById('sec');
let count = document.getElementById('count');
let s = 0, m = 0, h = 0, flag = 0, c = 0;
function checkTime(x) {
    if (x < 10) {
        return "0" + x;
    }
    else {
        return x;
    }
}
function stopwatch() {
    if (flag === 1) {
        c++;
        if (c === 100) {
            s++;
            c=0;
        }
        if (s === 60) {
            m++;
            s = 0;
        }
        if (m == 60) {
            h++;
            m = 0;
        }
        count.innerHTML=checkTime(c);
        sec.innerHTML = checkTime(s);
        min.innerHTML = checkTime(m);
        hr.innerHTML = checkTime(h);
        setTimeout(stopwatch,10);
    }
}


start.addEventListener('click', function () {
    if (flag === 0) {
        flag = 1;
        stopwatch();

    }
});
stop.addEventListener('click', function () {
    flag = 0;
});
rst.addEventListener('click', function () {
    flag = 0;
    h = 0, m = 0, s = 0,c=0;
    hr.innerHTML = '00';
    min.innerHTML = '00';
    sec.innerHTML = '00';
    count.innerHTML='00';
});