<script type="text/javascript"> 
$(document).click(function(){ 
var d1 = "start_plot_time"; 
var d2 = "end_plot_time"; 
var fieldId = "plot_hrs"; 
var z="working_hrs";
 
var d3 = $('[name='+d1+']').val(); 
var d4 = $('[name='+d2+']').val();

var dd1 = d3.substring(0, 2);
var d5 = d3.substring(11, 13);
var d6 = d3.substring(14, 16);
var d7 = ((d5 * 60) + (d6 * 1));

var dd2 = d4.substring(0, 2);
var d8 = d4.substring(11, 13);
var d9 = d4.substring(14, 16);
var d10 = ((d8 * 60) + (d9 * 1)) ;
var d11= (d10 - d7);  
var d12 =(dd2-dd1);
diff = d11; 
var h=Math.floor(d11/60);
var m=d11%60;
var a="plot_management_hrs";
var x=  $('[name='+a+']:checked').val();
if(x=='YES')
{
    if(h<10)
    {
        if(m<10)
        {
            $('[name='+fieldId+']').val(d12+"day "+"0"+h+":"+"0"+m);
        }
        else
        $('[name='+fieldId+']').val("0"+h+":"+m);
    }
    else
    {
        if(m<10)
        {
        $('[name='+fieldId+']').val(h+":"+"0"+m); 
        }
        else
        $('[name='+fieldId+']').val(h+":"+m);
    }
}

else if(x=='NO'){
    console.log("no");
     $('[name='+d1+']').val(""); 
     $('[name='+d2+']').val("");
$('[name='+fieldId+']').val("00:00");
}
}); 




$(document).click(function(){ 
var d1 = "start_hatch_time"; 
var d2 = "end_hatch_time"; 
var fieldId = "hatch_hrs"; 
var z="working_hrs";
var d3 = $('[name='+d1+']').val(); 
var d4 = $('[name='+d2+']').val();

var d5 = d3.substring(0, 2);
var d6 = d3.substring(3, 5);
var d7 = ((d5 * 60) + (d6 * 1));

var d8 = d4.substring(0, 2);
var d9 = d4.substring(3, 5);
var d10 = ((d8 * 60) + (d9 * 1)) ;

var d11= (d10 - d7) ;

diff = d11; // ms per day
var h=Math.floor(d11/60);
var m=d11%60;
var b="hatch_cleaning_hrs_1";
var y= $('[name='+b+']:checked').val();
if(y=='YES'){

    if(h<10)
    {
        if(m<10)
        {
        $('[name='+fieldId+']').val("0"+h+":"+"0"+m); 
        }
        else
        $('[name='+fieldId+']').val("0"+h+":"+m);
    }
    else
    {
        if(m<10)
        {
        $('[name='+fieldId+']').val(h+":"+"0"+m); 
        }
        else
        $('[name='+fieldId+']').val(h+":"+m);
    }
}
else if(y=='NO') {
 $('[name='+d1+']').val(""); 
 $('[name='+d2+']').val("");
$('[name='+fieldId+']').val("00:00");
}
}); 
 

$(document).click(function(){ 
var d1 = "plot_hrs"; 
var d2 = "hatch_hrs"; 
var fieldId = "working_hrs"; 
var d3 = $('[name='+d1+']').val(); 
var d4 = $('[name='+d2+']').val();
var d5 = d3.substring(0, 2);
var d6 = d3.substring(3, 5);
var d7 = ((d5 * 60) + (d6 * 1));
var d8 = d4.substring(0, 2);
var d9 = d4.substring(3, 5);
var d10 = ((d8 * 60) + (d9 * 1)) ;
var d11= (d10 + d7) ;
diff = d11; // ms per day
var h=Math.floor(d11/60);
var m=d11%60;
var a="plot_management_hrs";
var b="hatch_cleaning_hrs_1";
var x=  $('[name='+a+']').val();
var y= $('[name='+b+']').val();
    if(h<10)
    {
        if(m<10)
        {
        $('[name='+fieldId+']').val("0"+h+":"+"0"+m); 
        }
        else
        $('[name='+fieldId+']').val("0"+h+":"+m);
    }
    else
    {
        if(m<10)
        {
        $('[name='+fieldId+']').val(h+":"+"0"+m); 
        }
        else
        $('[name='+fieldId+']').val(h+":"+m);
    }
});

</script>