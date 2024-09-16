// Créer un événément au scroll

const nav=document.querySelector('nav');


// window.addEventListener('scroll',()=>{
  
//   if (window.scrollY >120 )
//     {
//     nav.style.top="0px";
//   }
//     else {
//       nav.style.top="-60px";
//     }
   
// });


let lastScroll = 0;

window.addEventListener('scroll',()=>{

  if (window.scrollY < lastScroll) {
    nav.style.top="0px";
      }
      else{
        nav.style.top = "-60px";
      }
  lastScroll = window.scrollY;
});



// Cacher la navbar si l'utilisateur comment à descendre et la sortir quand il remonte

// Stocker la valeur du précédent niveau de scroll pour savoir si l'on est monté ou descendu

// Connaitre niveau de scroll (window.scrollY)
