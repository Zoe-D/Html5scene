 
 //长时间点击
 
 $(".gesture").on("touchy-longpress",
        function(f) {
            e();
            anp(f)
        }),
        

 function anp(e){
          var n=1;
          var $i=$("<b>").text("+"+n);
          //var x=e.pageX,y=e.pageY;
          $i.css({top:100,left:200,position:"absolute",color:"#fc0"});
          $("body").append($i);
          $i.animate({top:10,opacity:0,"font-size":"2em"},1500,function(){
            $i.remove();
          });
          e.stopPropagation();
        }
 //分享
 $(".main_ani_58_2").on("click",
        function() {
            return $(".main_ani_59").fadeIn(),
            setTimeout(function() {
                $(".main_ani_59").fadeOut()
            },
            2e3),
            !1
        })
 


for(k=0;k<17;k++){
				      	if(k==t.activeIndex){
				      		l.detachEvents();
						      setTimeout(function(){
						      	l.attachEvents()
						      },1500)
				      	}
				      }