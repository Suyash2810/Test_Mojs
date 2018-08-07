const redCirc = new mojs.Shape({
   //isShowStart:true,
   left:0,top:0,
    stroke:'red',
    fill:'none',
    radius:15,
    strokeWidth:10,
   
    duration:150
})
.then({
    strokeWidth:0,
    scale:{to:5,easing:'sin.in'},
    duration:500
}).play()
;



const sparks = new mojs.Burst({
    left:0,top:0,
    radius:{0:100},
    angle:{0:90},
    count:30,
    children:{
        shape:'cross',
        points:15,
        stroke: 'white',
        fill: 'none',
        duration:500
    }
}).play();


const redSparks = new mojs.Burst({
    top:0,left:0,
  count:30,
  radius:{150:350},
  angle:{0:90,easing:'cubic.out'},
  children:{
      shape:'line',
      points:15,
      stroke:{'red':'transparent'},
      strokeWidth:5,
      scaleX:{0.5:0},
      degreeShift: 'rand(-90,90)',
      radius: 'rand(20,300)',
      duration:300,
      delay: 'rand(0,180)'

  }


}).play();


const whiteCirc = new mojs.Shape({
    left:0,top:0,
    stroke:{'white':'transparent'},
    fill: 'none',
    radius:{10:100},
    strokeWidth:15,
    duration:100
}).then({
    strokeWidth:0,
    angle:{0:270,easing:'cube.out'},
    duration:200
}).play();

document.addEventListener('click',function(event){
    redCirc
    .tune({x:event.pageX,y:event.pageY})
    .replay();

    sparks
    .tune({x:event.pageX,y:event.pageY})
    .replay();

    redSparks
    .tune({x:event.pageX,y:event.pageY})
    .replay();

    whiteCirc
    .tune({x:event.pageX,y:event.pageY})
    .replay();
});