const app = {
    init: function () {
        //Ripple btn
        const rippleBtn = document.querySelector('.ripple');
        rippleBtn.addEventListener('click', app.ripple);

        //Download btn
        app.downloadBtn().addEventListener('click', app.download);
        let string = app.downloadBtn().childNodes[0].textContent;
        app.downloadBtn().childNodes[0].textContent = "";
        string.split('').forEach(function(c) {
           let span = document.createElement('span');
           span.textContent = c;
           app.downloadBtn().childNodes[0].append(span);
        });
    },
    ripple: function (e) {
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;

        let ripples = document.createElement('span');
        ripples.style.left = x+'px';
        ripples.style.top = y+'px';
        this.appendChild(ripples);
        setTimeout(() => {
            ripples.remove()
        },1000);
    },
    downloadBtn: function () {
        return document.querySelector('.download');
    },
    download: function (e) {
        app.downloadBtn().classList.add('loading');
        setTimeout(() => {
            app.downloadBtn().classList.remove('loading');
        },8000);
    }
}
document.addEventListener('DOMContentLoaded', app.init);

/* @for $i from 1 through 100{
    &:nth-of-type(#{$i}){
        animation-delay:#{$i/70}s; //TODO en JS
    }
} */