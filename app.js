const hamburger = document.queryselector('.header .nav-bar .nav-list .hamburger');
const mobile_menu=document.queryselector('.header .nav-bar .nav-list ul');
const menu_item=document.queryselector('.header .nav-bar .nav-list ul li a');
const header = document.queryselector('.header.container');

hamburger.addEventListener('click',() =>{
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});
/*
document.addEventListener('scroll',() =>{
	var scroll_position = window.scrollY;
	if(scroll_position >250){
		header.style.background = '#29323c'
	}else{
		header.style.background = 'transparent';
	}
});

menu_item.forEach((item)=>{
	item.addEventListener('click',() => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});

});*/