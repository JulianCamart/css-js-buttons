const app = {
    init: function () {
        const rippleBtn = document.querySelector('.ripple');
        rippleBtn.addEventListener('click', app.ripple);
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
    }
}
document.addEventListener('DOMContentLoaded', app.init);