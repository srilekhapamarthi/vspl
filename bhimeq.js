<script type="text/javascript"> 

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

var diff=(froms-tos)/60000;
var mind=diff%60;
var hrd=Math.floor(diff/60);

var a="hatch_cleaning_hrs_1";
var x=  $('[name='+a+']:checked').val();
if(x=='YES')
{
    if(h<10)
    {
        if(m<10)
        {
            $('[name='+fieldId+']').val("0"+hrd+":"+"0"+mind);
        }
        else
        $('[name='+fieldId+']').val("0"+hrd+":"+mind);
    }
    else
    {
        if(m<10)
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

</script>