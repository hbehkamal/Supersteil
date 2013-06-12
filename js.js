(function(){
	$(function(){
		var	
			a = $('#a'),
			b = $('#b'),
			c = $('#c'),
			d = $('#d'),
			e = $('#e'),
            $this = $(this),
			pic1 = $('#pic1'),
			pic2 = $('#pic2'),
			pic3 = $('#pic3'),
			pic4 = $('#pic4'),
			pic5 = $('#pic5');
		eventb = function(){
			b.click(function(){
				pic1.css({
					display : 'none'
				});
				pic2.css({
					display : 'block'
				});
				pic2.animate({
					opacity : '1'
				});
				pic3.css({
					display : 'block'
				});
				pic3.animate({
					opacity : '0'
				});
				pic4.css({
					display : 'block'
				});
				pic4.animate({
					opacity : '0'
				});
				pic5.css({
					display : 'block'
				});
				pic5.animate({
					opacity : '0'
				});
			});
		};
		eventc = function(){
			c.click(function(){
				pic1.css({
					display : 'block'
				});
				pic1.animate({
					opacity : '0'
				});
				pic2.css({
					display : 'none'
				});
				pic3.css({
					display : 'block'
				});
				pic3.animate({
					opacity : '1'
				});
				pic4.css({
					display : 'block'
				});
				pic4.animate({
					opacity : '0'
				});
				pic5.css({
					display : 'block'
				});
				pic5.animate({
					opacity : '0'
				});
			});
		};
		eventd = function(){
			d.click(function(){
				pic1.css({
					display : 'block'
				});
				pic1.animate({
					opacity : '0'
				});
				pic2.css({
					display : 'block'
				});
				pic2.animate({
					opacity : '0'
				});
				pic3.css({
					display : 'none'
				});
				pic4.css({
					display : 'block'
				});
				pic4.animate({
					opacity : '1'
				});
				pic5.css({
					display : 'block'
				});
				pic5.animate({
					opacity : '0'
				});
			});
		};
		eventa = function(){
			a.click(function(){
				pic1.css({
					display : 'block'
				});
				pic1.animate({
					opacity : '1'
				});
				pic2.css({
					display : 'block'
				});
				pic2.animate({
					opacity : '0'
				});
				pic3.css({
					display : 'block'
				});
				pic3.animate({
					opacity : '0'
				});
				pic4.css({
					display : 'block'
				});
				pic4.animate({
					opacity : '0'
				});
				pic5.css({
					display : 'block'
				});
				pic5.animate({
					opacity : '0'
				});
			});
		};
		evente = function(){
			e.click(function(){
				pic1.css({
					display : 'block'
				});
				pic1.animate({
					opacity : '0'
				});
				pic2.css({
					display : 'block'
				});
				pic2.animate({
					opacity : '0'
				});
				pic3.css({
					display : 'block'
				});
				pic3.animate({
					opacity : '0'
				});
				pic4.css({
					display : 'none'
				});
				pic5.css({
					display : 'block'
				});
				pic5.animate({
					opacity : '1'
				});
			});
		};
		eventb();
		eventc();
		eventd();
		evente();
		eventa();
	});
})();