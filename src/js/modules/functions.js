/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */
export function isWebp() {
	// Проверка поддержки webp
	function testWebP(callback) {
		let webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}
	// Добавление класса _webp или _no-webp для HTML
	testWebP(function (support) {
		let className = support === true ? 'webp' : 'no-webp';
		document.documentElement.classList.add(className);
	});
}

export function mobileMenu(){
	const burgerButton = document.querySelector('.header__burger');
	const mobileMenu = document.querySelector('.header__menu');

	if (burgerButton) {
		burgerButton.addEventListener("click", activateMobileMenu);;
	}

	function activateMobileMenu () {
		if (this.classList.contains('header__burger--open')){
			this.classList.remove('header__burger--open');
			mobileMenu.classList.remove('header__menu--open');
		} else {
			this.classList.add('header__burger--open');
			mobileMenu.classList.add('header__menu--open');
		}
	}
}

export function range(){
	const ranges = document.querySelectorAll('input[type="range"]');

	if (ranges) {
		ranges.forEach(function (item) {
			item.addEventListener("input", rangeInput);
			return true;
		});
	}

	function rangeInput () {
		let rangeValue = this.value;
		let rangeInput = this.parentNode;

		// Перемещаем стилизованный ползунок
		rangeInput.querySelector('.input_range__dot').style.left = rangeValue + "%";

		// Выводим значение
		let rangeValueHTML = rangeInput.parentNode.querySelector('.input_range__value');
		rangeValueHTML.textContent = rangeValue + " %";

	}
}

export function selects(){
	//Открываем и закрываем селект
	const selects = document.querySelectorAll('.select__head');

	if (selects) {
		selects.forEach(function (item) {
			item.addEventListener("click", selectClick);
			return true;
		});
	}

	function selectClick() {
		let selected = document.querySelectorAll('.select--open');

		if (this.parentNode.classList.contains('select--open')) {
			this.parentNode.classList.remove('select--open');
		} else {
			if (selected.length > 0) {
				document.querySelector('.select--open').classList.remove('select--open');
			}
			this.parentNode.classList.add('select--open');
		}
	}

	//Меняем заголовок и закрываем
	const selectItems = document.querySelectorAll('.select__item-value');

	if (selectItems) {
		selectItems.forEach(function (item) {
			item.addEventListener("click", selectItemClick);
			return true;
		});
	}

	function selectItemClick() {
		document.querySelector('.select--open').classList.remove('select--open');
		this.closest('.select').querySelector('.select__title').textContent = this.textContent;
	}

	//Закрываем по клику вне
	document.addEventListener( 'click', (e) => {
		if(document.getElementsByClassName('select--open').length > 0) {
			const withinBoundaries = e.composedPath().includes( document.querySelector('.select--open') );
			if(!withinBoundaries){
				document.querySelector('.select--open').classList.remove('select--open');
			}
		}
	})

}