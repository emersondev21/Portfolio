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
sr.reveal('.personal_projects', { duration: 2000 });
sr.reveal('.contact', { duration: 2000 });

// Seções e links
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav_links .link');

// Função para remover a classe 'active' de todos os links
function removeActiveClasses() {
  navLinks.forEach(link => link.classList.remove('active'));
}

// Função para adicionar a classe 'active' ao link visível
function addActiveClass(link) {
  link.classList.add('active');
}

// Usando Intersection Observer para detectar as seções visíveis
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const activeLink = document.querySelector(`.nav_links a[href="#${entry.target.id}"]`);
      removeActiveClasses();
      addActiveClass(activeLink);
    }
  });
}, { threshold: 0.5 }); // A seção é considerada visível quando 50% dela está na tela

// Observando cada seção
sections.forEach(section => observer.observe(section));
