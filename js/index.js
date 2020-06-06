const app = {
    init: function () {
        const rippleBtn = document.querySelector('.ripple');
        rippleBtn.addEventListener('click', app.ripple);

        // const downloadBtn = document.querySelector('.download');

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

$("a b").html(function(index, html) {
    return html.replace(/\S/g, '<span>$&</span>');
  });
  
  $("a").click(function(){
    $("a").addClass("loading");     
    setTimeout(function(){
    $("a").removeClass("loading"); 
    }, 8000);
  });