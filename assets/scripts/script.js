function activate_nav_mobile(params) {
  let nav = document.getElementById('nav_mobile')
  let nav_list = document.getElementById('mobile_nav_links')

  nav.classList.toggle('nav_mobile_active')
  nav_list.classList.toggle('nav_mobile_active')
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
