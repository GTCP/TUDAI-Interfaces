document.addEventListener('DOMContentLoaded', function () {
    window.onload = setTimeout(function(){
        document.querySelector('.cajaloading').style.display="none";
        document.querySelector('.all').style.display="block";
    },3000);
});