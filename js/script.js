const swiper = new Swiper('.swiper', {

    // Autoplay
    autoplay: {
      delay: 5000
    },
    
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
});

const target = document.querySelector("#cta-2");

const options = {
  root: null, // null significa que se usa el viewport como el área de observación
  rootMargin: '0px', // Margen adicional alrededor del área de observación
  threshold: 0.5 // Porcentaje de visibilidad requerido para disparar la observación
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Si el div es visible, cambiar su opacidad para que sea visible gradualmente
      entry.target.style.opacity = '1';
      entry.target.classList.add("animate-fade-down")
      console.log('Clase agregada al elemento:', entry.target);
    }
  });
}, options);

observer.observe(target);

function Menu(icon) {
  let list = document.querySelector('ul');
  let menuIcon = icon.querySelector('ion-icon');

  if (list.classList.contains('hidden')) {
    // Abrir el menú
    list.classList.remove('hidden');
    menuIcon.setAttribute('name', 'close');
  } else {
    // Cerrar el menú
    list.classList.add('hidden');
    menuIcon.setAttribute('name', 'menu-outline');
  }
}
