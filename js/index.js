window.addEventListener('load', function() {
	//最底下的轮播图
	let section_nav_bd = document.querySelector('.section-nav-bd');
	let section_nav_ul = document.querySelector('.section-nav-ul');
	let leng = section_nav_ul.offsetWidth - section_nav_bd.offsetWidth;
	let x = 0;
	let move = 0;
	section_nav_bd.addEventListener('touchstart', function(e) {
		x = e.targetTouches[0].pageX;
		section_nav_bd.addEventListener('touchmove', function(e) {
			move = e.targetTouches[0].pageX - x;
		});
	});
	let left = 0;
	section_nav_bd.addEventListener('touchend', function(e) {
		if(move != 0) {
			if(left + move > 0) {
				section_nav_ul.style.left = 0;
				left = 0;
			} else if(left + move < -leng) {
				section_nav_ul.style.left = '-' + leng + 'px';
				left = -leng;
			} else {
				section_nav_ul.style.left = left + move + 'px';
				left = move;
			}
			section_nav_ul.style.transition = 'all .3s';
		}
	});

});