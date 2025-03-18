import Swiper from 'swiper';
import { Navigation, Keyboard, Pagination } from 'swiper/modules';

const swiper = document.querySelector('.swiper');
const prevBtn = document.querySelector('[data-prev]');
const nextBtn = document.querySelector('[data-next]');

function initSwiper() {
	new Swiper(swiper, {
		modules: [Navigation, Keyboard, Pagination],
		navigation: {
			nextEl: nextBtn,
			prevEl: prevBtn,
			disabledClass: 'disabled',
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			type: 'bullets',
		},
		keyboard: {
			enabled: true,
			onlyInViewport: true,
		},
		slidesPerView: 1,
		spaceBetween: 32,
		autoHeight: true,
		touchEventsTarget: 'container',
		initialSlide: 1,
	});
}

export default initSwiper;
