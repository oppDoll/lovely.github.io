setInterval(()=>{
    let hh = document.getElementById('hh');
    let mm = document.getElementById('mm');
    let ss = document.getElementById('ss');

    let sec_dot = document.querySelector ('.sec_dot');
    let min_dot = document.querySelector ('.min_dot');
    let hr_dot = document.querySelector ('.hr_dot');

    let hr = document.getElementById('hr');
    let mn = document.getElementById('mn');
    let sc = document.getElementById('sc');

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();


    hh.style.strokeDashoffset = 510 - (510 * h) / 12;
    mm.style.strokeDashoffset = 630 - (630 * m) / 60;
    ss.style.strokeDashoffset = 760 - (760 * s) / 60;

    sec_dot.style.transform = `rotateZ(${s * 6}deg)`;
    min_dot.style.transform = `rotateZ(${m * 6}deg)`;
    hr_dot.style.transform = `rotateZ(${h * 30}deg)`;

    sc.style.transform = `rotateZ(${s * 6}deg)`;
    mn.style.transform = `rotateZ(${m * 6}deg)`;
    hr.style.transform = `rotateZ(${h * 30}deg)`;
})


// 𝕊𝕔𝕣𝕠𝕝𝕝 𝔹𝕒𝕣

let progress = document.getElementById('progressbar');
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function() {
let progressHeight = (window.pageYOffset / totalHeight) * 100;
      progress.style.height = progressHeight + "%";
}


//𝕃𝕚𝕘𝕙𝕥 𝕓𝕦𝕝𝕓

let btn = document.querySelector('.btn');
let body = document.querySelector('body');
btn.onclick =function() {
    body.classList.toggle('on');
}

