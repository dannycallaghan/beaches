jQuery(document).ready(function($) {
	$('#homeStyle').change(function(e){
		
		var selected = $('option:selected', this).val();
		if(selected =='default'){
			resetDemoLayout();
			return false;
		}
	//	alert(selected);
		setCookie('demo_layout', selected, 20);
		window.location.reload();
	});

});

function setCookie(c_name,value,exdays)
{
var exdate=new Date();
exdate.setDate(exdate.getDate() + exdays);
var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
document.cookie=c_name + "=" + c_value;
}

function resetDemoLayout(){
	setCookie('demo_layout', 'default', 20);
	window.location.reload();
}


function toggleStyle(t){
	var elem = jQuery(t);
	var parent = elem.parent();
	var width = parent.outerWidth();
	var posL = '-' + width + 'px';
	if(parent.hasClass('closed')){
		parent.animate({left: '0px'}, function(){ jQuery(this).removeClass('closed'); });
	}else {
		parent.animate({left: posL}, function(){ jQuery(this).addClass('closed'); });
	}
}