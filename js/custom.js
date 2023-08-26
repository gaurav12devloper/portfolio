/* function circle(){
    var divsize = ((Math.random()*50) + 25).toFixed();
       var color = 'lightgrey';
       $newdiv = $('<div id="disc" class="shape"><div/>').css({
           'width':divsize+'px',
           'height':divsize+'px',
}); */
      // make position sensitive to size and document's width
     /*  var posx = (Math.random() * ($('#flying-object').width() - divsize)).toFixed(); */
      /* var posy = (Math.random() * ($('#block').height() - divsize)).toFixed(); */
     /*  myArray1=['left','up','side']
      var rand = myArray1[(Math.random() * myArray1.length) | 0]
      $newdiv.css({
          'position':'absolute',
          'left':posx+'px',
          'top':posy+'px',
          'display':'none',
          'animation': rand+' 3s linear',
          'opacity':Math.random()
      }).appendTo( '#flying-object' ).fadeIn(100).delay(1000).fadeOut(500, function(){
        $(this).remove();
        forDisc(); 
      });  
}*/
$(document).ready(function () {
    circle();
    progressbar(1);


    $(window).scroll(function() {    

        var scroll = $(window).scrollTop();
    
        if (scroll >= 500) {
            $(".add-cus").css({'position':'relative'});
        }
        if (scroll <= 400) {
            $(".add-cus").css({'position':'fixed'});
        }
    });
  });
  
function circle() {
    let box = document.getElementById("flying-object");
    $node=[];
   /*  array1=['HTML','CSS','JS','PYTHON','C++','C','C#','PHP'] */
    for(i=0;i<20;i++)
    { 
        let rdm=Math.floor(Math.random() * 80 + 10);
        let posx=Math.floor(Math.random() * 80);
        setTimeout(function() {

        $node[i] = $('<span>').css({
            'width':rdm+'px',
            'height':rdm+'px',
            'left':posx+'%',
            /* 'content':array1[i], */
 });
        /* $node[i].text(array1[i]); */
        $node[i].appendTo('#flying-object');
           
        }, 2000 * i);

    }

}

function progressbar(x) {

let width=[80,80,75,75,75,70,65,65,50];
let lan=['HTML5','CSS3','Boostrap','PHP','JavaScript','JSP','NodeJS','ExpressJS','ASP.NET'];
    if (x==1){
        $("#web-skill").css({'color':'red'}); $("#desktop-skill").css({'color':'black'}); $("#other-skill").css({'color':'black'});
        $('.progress-b').remove();
        $divbox=[];
        for(i=0;i<width.length;i++){
        $divbox[i]=$(`<div class="progress-b my-3" style="height: 35px;">
        <div class="lan-text">${lan[i]}</div>
        <div class="progress-bar bg-color-r"  style="width: ${width[i]}%"></div>
        <div class="text-center pt-1 px-2">${width[i]}%</div>
        </div>`);
        $divbox[i].appendTo('#barcontainer');
        }
    }
    else if (x==2){
        $("#desktop-skill").css({'color':'red'}); $("#web-skill").css({'color':'black'}); $("#other-skill").css({'color':'black'});
        $('.progress-b').remove();
        $divbox2=[];
        let width=[80,75,75,70,60];
        let lan=['Python','C','Java','C++','C#'];
        for(i=0;i<width.length;i++){
            $divbox2[i]=$(`<div class="progress-b my-3" style="height: 35px;">
            <div class="lan-text" style="width: 12%">${lan[i]}</div>
            <div class="progress-bar bg-color-r"  style="width: ${width[i]}%"></div>
            <div class="text-center pt-1 px-2">${width[i]}%</div>
            </div>`);
            $divbox2[i].appendTo('#barcontainer');
        }
    }
    else if (x==3){
        $("#other-skill").css({'color':'red'}); $("#web-skill").css({'color':'black'}); $("#desktop-skill").css({'color':'black'});
        $('.progress-b').remove();
        $divbox2=[];
        let width=[80,75,75,70,65,65,60];
        let lan=['MySQL','MongoDB','PLSQL','Canva','UNIX','R','Android'];
        for(i=0;i<width.length;i++){
            $divbox2[i]=$(`<div class="progress-b my-3" style="height: 35px;">
            <div class="lan-text">${lan[i]}</div>
            <div class="progress-bar bg-color-r"  style="width: ${width[i]}%"></div>
            <div class="text-center pt-1 px-2">${width[i]}%</div>
            </div>`);
            $divbox2[i].appendTo('#barcontainer');
        }
    }
}

/* $("#web-project").click(function(){
    
  }); */

// <!-- typed js effect starts -->
var typed = new Typed("#name-det", {
    strings: ["Competitive Programming", "Web Developement"],
    loop: true,
    typeSpeed: 70,
    backSpeed: 25,
    backDelay: 500,
  });
// <!-- typed js effect ends -->

function projectbar(x){
    if(x==1){
        $("#web-project").css({'color':'red'}); $("#desktop-project").css({'color':'black'}); $("#other-project").css({'color':'black'});
        $(".web-proj").css({'display':'block'}); $(".des-proj").css({'display':'none'});
    }
    if(x==2){
        $("#web-project").css({'color':'black'}); $("#desktop-project").css({'color':'red'}); $("#other-project").css({'color':'black'});
        $(".web-proj").css({'display':'none'});
        $(".des-proj").css({'display':'block'});
    }
    if(x==3){
        $("#web-project").css({'color':'black'}); $("#desktop-project").css({'color':'black'}); $("#other-project").css({'color':'red'});
        /* $(".web-proj").css({'display':'none'});
        $(".des-proj").css({'display':'none'}); */
    }
}