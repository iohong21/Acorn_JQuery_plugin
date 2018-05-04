(function($){
	$.fn.gura = function(option){
		var settings;

		if(option){
			if(typeof option == "object"){
				settings = $.extend({
					msg: "안녕! 나는 구라야~"
				}, option);					
			} else {
				settings = {msg:option};
			}
		} else {
			settings = {msg:"안녕! 나는 구라야~2"};
		}

		// settings object 안에 있는 값을 이용해서 동작
		this.text(settings.msg);

		// chain 형태로 동작 가능하도록 
		return this;
	};
})(jQuery);

