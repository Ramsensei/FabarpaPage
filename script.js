let open = new Map();
open.set("desing-h3", 0);
open.set("construct-h3", 0);
open.set("civil-h3", 0);
open.set("remodelations-h3", 0);
open.set("about-h3", 0);

function myFunction(idh3, idp) {
        let e = document.getElementById(idh3);
        let p = document.getElementById(idp);
        e.style.animationPlayState = 'running';
        p.style.animationPlayState = 'running';
        setTimeout(function(){
            e.style.animationPlayState = 'paused';
            p.style.animationPlayState = 'paused';
        },2000)
        
}