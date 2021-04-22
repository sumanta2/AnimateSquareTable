$(document).ready(function () {
    var prevBtn=1;
    $("#btn1").click(function () {
       prevBtn=senddata(1,"btn1",prevBtn);
    });
    $("#btn2").click(function () {
        prevBtn=senddata(21,"btn2",prevBtn);
    });
    $("#btn3").click(function () {
        prevBtn=senddata(41,"btn3",prevBtn);
    });
    $("#btn4").click(function () {
        prevBtn=senddata(61,"btn4",prevBtn);
    });
    $("#btn5").click(function () {
        prevBtn=senddata(81,"btn5",prevBtn);
    });

    function senddata(key,identity,prevBtn) {
        var str
        var remote = 1;
        if(prevBtn>key)
        {
            $(".outer").addClass("animate");
        }
        else if(prevBtn==key){
            $(".outer").addClass("fixedAnimate");
        }
        else{
            $(".outer").addClass("revAnimate");
        }
        
        $(identity).attr("disabled","true");
        var time=setInterval(Stop,1000);
        function Stop(){
            if(prevBtn>key)
            {
                $(".outer").removeClass("animate");
            }
            else if(prevBtn==key){
                $(".outer").removeClass("fixedAnimate");
            }
            else{
                $(".outer").removeClass("revAnimate");
            }
            clearInterval(time);
            $(identity).removeAttr("disabled");
        }

        var print=setInterval(Show,500);
        function Show()
        {
            for (i = key; i < (key + 20); i++) {
                //$("#" + remote).fadeOut();
                //alert("hi");
                str = i + "^" + i + "=" + i * i;
                $("#" + remote).text(str);
                //$("#" + remote).fadeIn();
                remote++;
            }
            clearInterval(print);
        }
        return key;
    }
});