$(document).ready(function(){
    $(".group").hide();
/*   $( document.body ).on( 'click', '.dropdown-menu li a', function( event ) {
   var $target = $( event.currentTarget );  
   if($target.attr("id")=="select1"){
            $(".group").not(".select1").hide();
            $(".select1").show();
        }
        else if($target.attr("id")=="select2"){
            $(".group").not(".select2").hide();
            $(".select2").show();
        }
        else{
        	alert("else");
            $(".group").hide();
        }
});*/
$('#transaction').on('change', function () {
    $('.group').hide();
    var $target = $(this).val();
    console.log($target);
    if($target == 1){
    	$(".1").show();
    }
    else if($target == 2){
    	$(".2").show();
    }
});
});