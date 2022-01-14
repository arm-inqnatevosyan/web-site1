let ull = document.querySelector(".ull");
let close = document.querySelector(".closeMenu")
let open = document.querySelector(".openMenuu")
let header1 = document.querySelector('.header1')

open.addEventListener('click',function(){
	ull.style.display = "flex";
	ull.style.top = '0';
	header1.style.display = "none";
});

close.addEventListener('click',function(){
	ull.style.top = '-100%';
	header1.style.display = "flex";
});