
<script type="text/javascript"> 

$(document).click(function(){ 
var d1 = "start_plot_time"; 
var d2 = "end_plot_time"; 
var fieldId = "plot_hrs"; 
var z="working_hrs";
 
var d3 = $('[name='+d1+']').val(); 
var d4 = $('[name='+d2+']').val();

var dd1 = d3.substring(0, 2);
var m1 = d3.substring(3, 5);
var y1 = d3.substring(6, 10);
var hr1 = d3.substring(11, 13);
var min1 = d3.substring(14, 16);


var dd2 = d4.substring(0, 2);
var m2 = d4.substring(3, 5);
var y2 = d4.substring(6, 10);
var hr2 = d4.substring(11, 13);
var min2 = d4.substring(14, 16);

var from=new Date(y1, m1, dd1, hr1, min1);
var to=new Date(y2, m2, dd2, hr2, min2);

var froms=from.getTime();
console.log(froms);
var tos=to.getTime();
console.log(tos);
var diff=(tos-froms)/60000;
var mind=diff%60;
var hrd=Math.floor(diff/60);
console.log(hrd);
console.log(mind);
var a="plot_management_hrs";
var x=  $('[name='+a+']:checked').val();
if(x=='YES')
{
    if(hrd<10)
    {
        if(mind<10)
        {
            $('[name='+fieldId+']').val("0"+hrd+":"+"0"+mind);
        }
        else
        $('[name='+fieldId+']').val("0"+hrd+":"+mind);
    }
    else
    {
        if(mind<10)
        {
        $('[name='+fieldId+']').val(hrd+":"+"0"+mind); 
        }
        else
        $('[name='+fieldId+']').val(hrd+":"+mind);
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

var dd1 = d3.substring(0, 2);
var m1 = d3.substring(3, 5);
var y1 = d3.substring(6, 10);
var hr1 = d3.substring(11, 13);
var min1 = d3.substring(14, 16);


var dd2 = d4.substring(0, 2);
var m2 = d4.substring(3, 5);
var y2 = d4.substring(6, 10);
var hr2 = d4.substring(11, 13);
var min2 = d4.substring(14, 16);

var from=new Date(y1, m1, dd1, hr1, min1);
var to=new Date(y2, m2, dd2, hr2, min2);

var froms=from.getTime();
var tos=to.getTime();

var diff=(tos-froms)/60000;
var mind=diff%60;
var hrd=Math.floor(diff/60);

var a="hatch_cleaning_hrs_1";
var x=  $('[name='+a+']:checked').val();
if(x=='YES')
{
    if(hrd<10)
    {
        if(mind<10)
        {
            $('[name='+fieldId+']').val("0"+hrd+":"+"0"+mind);
        }
        else
        $('[name='+fieldId+']').val("0"+hrd+":"+mind);
    }
    else
    {
        if(mind<10)
        {
        $('[name='+fieldId+']').val(hrd+":"+"0"+mind); 
        }
        else
        $('[name='+fieldId+']').val(hrd+":"+mind);
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
    var d1 = "plot_hrs"; 
    var d2 = "hatch_hrs"; 
    var fieldId = "working_hrs"; 
    var d3 = $('[name='+d1+']').val(); 
    var d4 = $('[name='+d2+']').val();


    var plot = d3.split(":");
    var hatch = d4.split(":");
    
    var h=plot[0]+hatch[0];
    var m=plot[1]+hatch[1]

    
    var a="plot_management_hrs";
    var b="hatch_cleaning_hrs_1";
    var x=  $('[name='+a+']').val();
    var y= $('[name='+b+']').val();
     $('[name='+fieldId+']').val(h+":"++m);
        // if(h<10)
        // {
        //     if(m<10)
        //     {
        //     $('[name='+fieldId+']').val("0"+h+":"+"0"+m); 
        //     }
        //     else
        //     $('[name='+fieldId+']').val("0"+h+":"+m);
        // }
        // else
        // {
        //     if(m<10)
        //     {
        //     $('[name='+fieldId+']').val(h+":"+"0"+m); 
        //     }
        //     else
        //     $('[name='+fieldId+']').val(h+":"+m);
        // }
    });
    
// $(document).click(function(){ 
// var d1 = "plot_hrs"; 
// var d2 = "hatch_hrs"; 
// var fieldId = "working_hrs"; 
// var d3 = $('[name='+d1+']').val(); 
// var d4 = $('[name='+d2+']').val();
// var d5 = d3.substring(0, 2);
// var d6 = d3.substring(3, 5);
// var d7 = ((d5 * 60) + (d6 * 1));
// var d8 = d4.substring(0, 2);
// var d9 = d4.substring(3, 5);
// var d10 = ((d8 * 60) + (d9 * 1)) ;
// var d11= (d10 + d7) ;
// diff = d11; // ms per day
// var h=Math.floor(d11/60);
// var m=d11%60;
// var a="plot_management_hrs";
// var b="hatch_cleaning_hrs_1";
// var x=  $('[name='+a+']').val();
// var y= $('[name='+b+']').val();
//     if(h<10)
//     {
//         if(m<10)
//         {
//         $('[name='+fieldId+']').val("0"+h+":"+"0"+m); 
//         }
//         else
//         $('[name='+fieldId+']').val("0"+h+":"+m);
//     }
//     else
//     {
//         if(m<10)
//         {
//         $('[name='+fieldId+']').val(h+":"+"0"+m); 
//         }
//         else
//         $('[name='+fieldId+']').val(h+":"+m);
//     }
// });
</script>