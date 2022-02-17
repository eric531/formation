
/*bouton de scroll*/

var btn=document.querySelector('.btnremonte')
btn.addEventListener('click',function(){
window.scrollTo({
   top:0,
   left:0,
   behavior:"smooth"
})
})



/*click sur img pour vote*/

var boutonImgs=document.querySelectorAll(".ImgBtn")
var parentAPI=document.querySelector('.parentAPI')

boutonImgs.forEach(boutonImg=>{
   boutonImg.addEventListener('click',function(){
      parentAPI.style.display="flex";
   })
})

/*croix pour fermer l'api*/
var croix=document.querySelector('.croix')

croix.addEventListener('click',function(){
   parentAPI.style.display="none";
})



/*click sur BtnMiss*/
var boutonMiss=document.querySelectorAll(".btnMiss")


boutonMiss.forEach(btnMiss=>{
   btnMiss.addEventListener('click',function(){
      btnMiss.querySelector(".RechercheCandidat").style.display="flex"
   })
})

/*croix pour fermer l'affiche perso d'une Miss*/

var btnMiss=document.querySelectorAll('.btnMiss')
var aside=document.querySelector('aside')
var sortir=document.querySelector('.croixMissperso')

btnMiss.forEach(btnMiss=>{

   btnMiss.addEventListener('click',function(){
      btnMiss.querySelector('aside').style.display="flex"
      sortir.style.display="flex"
   })

})


var aside=document.querySelectorAll('aside')

aside.forEach(aside=>{
   sortir.addEventListener('click',function(){
      aside.style.display="none"
      sortir.style.display="none"

   })
})

/*fin*/

var nbrevote=document.querySelectorAll('.NbreVote')
var Motvote=document.querySelector('.Motvote')

nbrevote.forEach(nbrevotes=>{
var parent=nbrevotes.parentNode
   if(parseInt(nbrevotes.innerText)>1){
      parent.querySelector('.Motvote').innerHTML="votes"
   }else{
      parent.querySelector('.Motvote').innerHTML="vote"
   }

})

