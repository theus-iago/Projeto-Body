console.log('código | função ')
console.log('0009   | ligar o Body')
console.log('0010   | desligar o Body')
console.log('0011   | acessar os suspensores')
console.log('0012   | ocultar os suspensores')
console.log('0013   | acessar a parte interna da cabeça')
console.log('0014   | ocultar a parte interna da cabeça')
console.log('0015   | acessar os módulos')
console.log('0016   | fechar os módulos')
base=document.getElementById
('base')
numero= document.getElementById
('visor').innerHTML;
body= document.getElementsByClassName('Body') [0]
bracoright= document.getElementById
('Forearm-right') 
finger1= document.getElementById
('Little-finger-right')
finger2= document.getElementById
('Ring-finger-right')
finger3= document.getElementById
('Middle-finger-right')
finger4= document.getElementById
('Index-finger-right')
finger5= document.getElementById
('Thumb-right')
bracoleft= document.getElementById
('Forearm-left')
finger6= document.getElementById
('Little-finger-left')
finger7= document.getElementById
('Ring-finger-left')
finger8= document.getElementById
('Middle-finger-left')
finger9= document.getElementById
('Index-finger-left')
finger10= document.getElementById
('Thumb-left')
eyeright=document.getElementsByClassName('eye') [0]
ponto2=document.getElementById
('ponto2')
eyeleft= document.getElementsByClassName('eye') [1]
ponto= document.getElementById
('ponto')
armright=document.getElementsByClassName('Arm-right') [0]
breastplate1= document.getElementsByClassName('breastplate1') [0]
breastplate2= document.getElementsByClassName('breastplate2') [0]
head= document.getElementsByClassName
('Head') [0]
earleft= document.querySelector
('div.ear-left') 
earright= document.querySelector
('div.ear-right')
heart= document.getElementsByClassName('heart') [0]
simbolo= document.getElementById('simbolo')
loader= document.querySelector('div.loader')
loader2= document.querySelector('div#loader2')
loader3= document.querySelector('div.loader3')
 blink1  = document.getElementsByTagName("div")[7];
 blink2  = document.getElementsByTagName("div")[11];
loader.style.cssText='animation:StopIteration;'
loader2.style.cssText='animation:StopIteration;'
loader3.style.cssText='animation:StopIteration;'
loader3.style.opacity='0'
/*on= document.getElementById
('ligar')
off= document.getElementById
('desligar')
off.style.opacity= 0;*/
/*on.addEventListener('touchstart', function ligar(){
     on.style.opacity= 0;
     off.style.opacity= 100;
     eyeright.style.background='white';
     ponto2.style.opacity= 100;
    })
off.addEventListener('touchstart',   function desligar(){
    off.style.opacity= 0;
    on.style.opacity= 100;
    eyeright.style.background= 'black';
    ponto2.style.opacity= 0;
  })
on.addEventListener('touchstart',
  function ligar(){
    eyeleft.style.background= 'white';
    ponto.style.opacity= 100;
  })
off.addEventListener('touchstart',  function desligar(){
    eyeleft.style.background= 'black';
    ponto.style.opacity= 0;
})*/
clear= document.getElementById
('limpar')
clear.addEventListener('touchstart',
  function limpar(){
    visor.innerHTML= '';
  })
  function back(){
    var visor = document.getElementById('visor').innerHTML;
    document.getElementById('visor').innerHTML = visor.substring(0, visor.length-1)
  }
function insert(num){
var visor = document.getElementById('visor').innerHTML;
var numero= document.getElementById
('visor').innerHTML;
document.getElementById
('visor').innerHTML= numero + num;
if(document.getElementById
('visor').innerHTML=='0009'){
  setTimeout(function (){
    alert('Ligando...')}, 1500);
    setTimeout(function (){
    eyeright.style.cssText='background-color:white; transition: background 2s; transition-delay:1s;';
    ponto2.style.cssText= 'opacity:100; transition: opacity 5s; transition-delay:4s;';
    eyeleft.style.cssText= 'background-color:white; transition: background 2s; transition-delay:1s;';
    ponto.style.cssText= 'opacity:100; transition: opacity 5s; transition-delay:4s;';
    loader.style.cssText='animation:;'
    loader2.style.cssText='animation:;'
    loader3.style.cssText='animation:;'
    loader3.style.cssText='transition:opacity 10s; opacity:100;'
    heart.style.cssText='transition:border 2s; transition-delay:1s; border-color:white;'
    blink1.classList = "pupils";
    blink2.classList = "pupils";
    blink1.classList.remove = "pupils";
    blink2.classList.remove = "pupils";
    }, 2000);
    simbolo.style.cssText='transition: color 10s; color:white;';
}else if(document.getElementById('visor').innerHTML=='0010'){
  setTimeout(function (){
    alert('Desligando...')},1500);
   setTimeout(function (){
     eyeright.style.cssText='background-color:black; transition: background 2s; transition-delay:1s;';
    ponto2.style.cssText= 'opacity:0; transition: opacity 5s; transition-delay:4s;';
    eyeleft.style.cssText= 'background-color:black; transition: background 2s; transition-delay:1s;';
    ponto.style.cssText= 'opacity:0; transition: opacity 5s; transition-delay:4s;';
    loader.style.cssText='animation:StopIteration;'
    loader2.style.cssText='animation:StopIteration;'
    loader3.style.cssText='animation:StopIteration;'
    loader3.style.cssText='transition:opacity 5s; opacity:0;'
    heart.style.cssText='transition:border 2s; transition-delay:1s; border-color:black;'
   },2000); 
  simbolo.style.cssText='transition: color 10s; color:black;';
}else if(document.getElementById('visor').innerHTML=='0011'){
  bracoright.style.cssText='top:42%; transition:top 3s;';
  bracoleft.style.cssText='top:42%; transition: top 3s;';
}else if(document.getElementById('visor').innerHTML=='0012'){
  bracoright.style.cssText='top:60%; transition: top 3s;';
  bracoleft.style.cssText='top:60%; transition: top 3s;';
}else if(document.getElementById('visor').innerHTML=='0013'){
  head.style.cssText='transition:background 5s; background-color:rgb(55,55,55);';
  earleft.style.cssText='transition:background 5s; background-color:rgb(55,55,55);'
  earright.style.cssText='transition:background 5s; background-color:rgb(55,55,55);'
}else if(document.getElementById('visor').innerHTML=='0014'){
  head.style.cssText='transition:background 5s; background-color:var(--cor_principal);';
  earleft.style.cssText='transition:background 5s; background-color:var(--cor_principal);'
  earright.style.cssText='transition:background 5s; background-color:var(--cor_principal);'
}else if(document.getElementById('visor').innerHTML=='0015'){
  breastplate1.style.cssText='transition: opacity 5s, border-color 2s; transform:scale(0.93); opacity:0; border-color:black;';
  breastplate2.style.cssText='transition: opacity 5s, border-color 2s; transform:scale(0.93); opacity:0; border-color:black;';
  simbolo.style.cssText='transition:color 2s; color:black;'
}else if(document.getElementById('visor').innerHTML=='0016'){
  breastplate1.style.cssText='transition:opacity, transform 2s, 5s; transform:scale(1.0);';
  breastplate2.style.cssText='transition:opacity, transform 2s, 5s; transform:scale(1.0);';
}else if(document.getElementById('visor').innerHTML=='167'){
  alert('Testando...')
  alert('Procedimento de Comunicação em Andamento!')
  alert('Se deseja continuar Digite 0009')
}
if(visor.substring(0,visor.length==4)){
  document.getElementById
('visor').innerHTML= '';
}
}
slider= document.getElementById
('slider')
slider.oninput= changeRight;
function changeRight(){
  if(slider.value==0){
  finger1.style.cssText= 'transform:rotate(110deg); position:absolute; top:78.5%; left:22.4%; transition: top, left 2s, 2s;'
  finger2.style.cssText= 'position:absolute; top:80.9%; left:24.9%; transition: top, left 2s, 2s;'
  finger3.style.cssText= 'position:absolute; top:81.7%; left:29.9%; transition: top, left 2s, 2s;'
  finger4.style.cssText= 'position:absolute; top:80.9%; left:35.5%; transition: top, left 2s, 2s;'
  finger5.style.cssText= 'position:absolute; top:78%; left:41.5%; transition: top, left 2s, 2s;'
  }else if(slider.value>=50 && slider.value<100){
  finger1.style.cssText= 'position:absolute; top:77.5%; left:23%; transition: top, left 2s, 2s;'
  finger2.style.cssText= 'position:absolute; top:79.8%; left:25.5%; transition: top, left 2s, 2s;'
  finger3.style.cssText= 'position:absolute; top:80.3%; left:29.9%; transition: top, left 2s, 2s;'
  finger4.style.cssText= 'position:absolute; top:79.8%; left:35.5%; transition: top, left 2s, 2s;'
  finger5.style.cssText= 'position:absolute; top:77%; left:41.5%; transition: top, left 2s, 2s;'
  }else if(slider.value==100){
  finger1.style.cssText= 'transform:rotate(90deg); position:absolute; top:77.5%; left:24%; transition: top, left 2s, 2s;'
  finger2.style.cssText= 'transform:rotate(90deg); position:absolute; top:79.8%; left:26.5%; transition: top, left 2s, 2s;'
  finger3.style.cssText= 'transform:rotate(90deg); position:absolute; top:80.3%; left:30.5%; transition: top, left 2s, 2s;'
  finger4.style.cssText= 'transform:rotate(90deg); position:absolute; top:79.8%; left:35.5%; transition: top, left 2s, 2s;'
  finger5.style.cssText= 'transform:rotate(90deg); position:absolute; top:77%; left:40.5%; transition: top, left 2s, 2s;'
  }
}
slider2= document.getElementById
('slider2')
slider2.oninput= changeLeft;
function changeLeft(){
  if(slider2.value==0){
  finger6.style.cssText= 'position:absolute; top:78.5%; left:125%; transition: top, left 2s, 2s;'
  finger7.style.cssText= 'position:absolute; top:80.9%; left:120.9%; transition: top, left 2s, 2s;'
  finger8.style.cssText= 'position:absolute; top:81.7%; left:115%; transition: top, left 2s, 2s;'
  finger9.style.cssText= 'position:absolute; top:80.9%; left:110.5%; transition: top, left 2s, 2s;'
  finger10.style.cssText= 'position:absolute; top:78%; left:108%; transition: top, left 2s, 2s;'
  }else if(slider2.value>=50 && slider2.value<100){
  finger6.style.cssText= 'position:absolute; top:77.5%; left:125%; transition: top, left 2s, 2s;'
  finger7.style.cssText= 'position:absolute; top:79.8%; left:120.9%; transition: top, left 2s, 2s;'
  finger8.style.cssText= 'position:absolute; top:80.3%; left:115%; transition: top, left 2s, 2s;'
  finger9.style.cssText= 'position:absolute; top:79.8%; left:110.5%; transition: top, left 2s, 2s;'
  finger10.style.cssText= 'position:absolute; top:77.5%; left:108%; transition: top, left 2s, 2s;'
  }else if(slider2.value==100){
finger6.style.cssText= 'transform:rotate(90deg); position:absolute; top:78%; left:124%; transition: top, left 2s, 2s;'
  finger7.style.cssText= 'transform:rotate(90deg); position:absolute; top:79.8%; left:119%; transition: top, left 2s, 2s;'
  finger8.style.cssText= 'transform:rotate(90deg); position:absolute; top:80.3%; left:114.5%; transition: top, left 2s, 2s;'
  finger9.style.cssText= 'transform:rotate(90deg); position:absolute; top:79.8%; left:111%; transition: top, left 2s, 2s;'
  finger10.style.cssText= 'transform:rotate(90deg); position:absolute; top:77.5%; left:108.5%; transition: top, left 2s, 2s;'
  }
}