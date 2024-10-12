function activate_nav_mobile(params) {
  let nav = document.getElementById('nav_mobile')
  let nav_list = document.getElementById('mobile_nav_links')

  nav.classList.toggle('nav_mobile_active')
  nav_list.classList.toggle('nav_mobile_active')
}

function closeNav() {
  let nav = document.getElementById('nav_mobile');
  let nav_list = document.getElementById('mobile_nav_links');

  // Remove a classe ativa e desmarca o checkbox
  nav.classList.remove('nav_mobile_active');
  nav_list.classList.remove('nav_mobile_active');
  checkbox.checked = false;
}

function activate_personal(params) {
  let personal = document.getElementById('personal_projects')

  personal.classList.toggle('personal_projects_show')
}

const text = "Sou técnico em Análise e Desenvolvimento de sistemas, e atualmente, estou cursando Engenharia da Computação na UFRPE de Belo Jardim, PE. Estou constantemente atualizando meus conhecimentos e buscando novos desafios na área de tecnologia. Tenho paixão por aprender e aplicar esses conhecimentos para criar soluções inovadoras!";
let index = 0;
const speed = 50; // Velocidade da digitação (em ms)

function typeWriter() {
  if (index < text.length) {
    document.getElementById("typing-text").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = typeWriter;

let area = document.querySelector('.about')

area.addEventListener('contextmenu', (e) => {
  e.preventDefault()
})

// scrollreveal

window.sr = ScrollReveal({ reset: true });

sr.reveal('.about', { duration: 2000 });
sr.reveal('.skills', { duration: 2000 });
sr.reveal('.projects', { duration: 2000 });
sr.reveal('.contact', { duration: 2000 });