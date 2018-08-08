const redCirc = new mojs.Shape({
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
})
;



const sparks = new mojs.Burst({
    left:0,top:0,
    radius:{0:200},
    angle:{0:90},
    count:30,
    children:{
        shape:'cross',
        points:15,
        stroke: 'white',
        fill: 'none',
        duration:800
    }
});


const redSparks = new mojs.Burst({
    top:0,left:0,
  count:30,
  radius:{150:350},
  angle:{0:90,easing:'cubic.out'},
  children:{
      shape:'line',
      points:20,
      stroke:{'red':'transparent'},
      strokeWidth:5,
      scaleX:{0.8:0},
      degreeShift: 'rand(-90,90)',
      radius: 'rand(20,300)',
      duration:700,
      delay: 'rand(0,180)'

  }


});


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
});


const triangles = new mojs.Burst({
    radius: {0:500, easing:'cubic.out'},
    angle: {2000:0,easing:'quad.out'},
    left:0,top:0,
    count:20,
    children:{
     shape: 'polygon',
     points: 3,
     angle:{300:0},
     radius: {10:100},
     fill:['red','yellow','cyan','green','pink','orange','violet','indigo'],
     duration: 3000   
    }
});

const pentagons = new mojs.Burst({
    radius:{0:800,easing:'cubic.out'},
    angle:{0:720,easing:'quad.out'},
    left:0,top:0,
    count:20,
    children:{
        shape:'polygon',
        points:'5',
        radius:{5:100},
        angle:{720:0},
        fill:['white','pink'],
        duration:3500,
        delay:500
    }

});

const line = new mojs.Burst({
    radius: {0:1000,easing:'cubic.out'},
    angle:{0:1880,easing:'cubic.out'},
    left:0,top:0,
    count:50,
    children:{
        shape:'line',
        points:20,
        radius:{0:200,easing:'elastic.out'},
        fill: 'none',
        stroke:['red','yellow'],
        delay:'stagger(10)',
        duration:1000
    }
});

const redSquares = new mojs.Burst({
    radius: {0:1000,easing:'cubic.out'},
    angle:{0:1880,easing:'cubic.out'},
    left:0,top:0,
    count:50,
    children:{
        shape:'rect',
        radiusX:{1:1000},
        radiusY:50,
        fill:'none',
        stroke:['white','red'],
        strokeWidth:{5:10},
        delay:1000,
        duration:3000
    }
});

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
    .replay()
    .generate();

    triangles
    .tune({x:event.pageX,y:event.pageY})
    .replay()
    .generate();

    pentagons
    .tune({x:event.pageX,y:event.pageY})
    .replay()
    .generate();

    line
    .tune({x:event.pageX,y:event.pageY})
    .replay()
    .generate();

    redSquares
    .tune({x:event.pageX,y:event.pageY})
    .replay()
    .generate();
});
