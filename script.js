function myFunction(idh3, idp) {
    let e = document.getElementById(idh3);
    e.style.animation = 'showContent 2s';
    e.style.transform = 'translateY(0%)';
    let p = document.getElementById(idp);
    p.style.animation = 'showContentp 2s';
    p.style.opacity = '1';
}