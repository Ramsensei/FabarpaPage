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
function count(num, id){
  var counter = { var: 0 };
  TweenMax.to(counter, 3, {
    var: num, 
    onUpdate: function () {
      var number = Math.ceil(counter.var);
      $('#'+id).html(number);
      if(number === counter.var){ count.kill(); }
    },
    onComplete: function(){
      count();
    },    
    ease:Circ.easeOut
  });
}
count(20, 'years');
count(100, 'projects');
count(50000, 'meters');
