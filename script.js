// ===============================🕒 Atualiza automaticamente o ano no rodapé ===============================
document.getElementById("ano-atual").textContent = new Date().getFullYear();

// ===============================🔗 Rolagem suave ao clicar nos links do menu ===============================
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const destino = document.querySelector(this.getAttribute("href"));
    if (destino) {
      destino.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

// =============================== 🔝 Botão "Voltar ao Topo" ===============================
const botaoTopo = document.createElement("button");
botaoTopo.innerText = "▲";
botaoTopo.id = "voltar-topo";
document.body.appendChild(botaoTopo);

botaoTopo.style.position = "fixed";
botaoTopo.style.bottom = "25px";
botaoTopo.style.right = "25px";
botaoTopo.style.backgroundColor = "#5A4FCF";
botaoTopo.style.color = "#fff";
botaoTopo.style.border = "none";
botaoTopo.style.padding = "10px 14px";
botaoTopo.style.borderRadius = "8px";
botaoTopo.style.cursor = "pointer";
botaoTopo.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
botaoTopo.style.display = "none";
botaoTopo.style.transition = "opacity 0.3s ease-in-out";

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    botaoTopo.style.display = "block";
    botaoTopo.style.opacity = "1";
  } else {
    botaoTopo.style.opacity = "0";
    setTimeout(() => {
      if (window.scrollY < 300) botaoTopo.style.display = "none";
    }, 300);
  }
});

botaoTopo.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// ===============================
const elementos = document.querySelectorAll("section, article");

const observador = new IntersectionObserver((entradas) => {
  entradas.forEach(entrada => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add("visivel");
    }
  });
}, { threshold: 0.15 });

elementos.forEach(el => {
  el.classList.add("invisivel");
  observador.observe(el);
});


// ===============================
// 📧 Integração com EmailJS
// ===============================
(function() {
  emailjs.init({
    publicKey:"-gXh-8TPLUUVBkyIX",
  }); 
})();


const form = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

form.addEventListener('submit', function(event) {
  event.preventDefault(); 

  formStatus.textContent = 'Enviando...';
  formStatus.style.color = '#5345A3';
  
  emailjs.sendForm('service_6d7wrms', 'template_t7z05kt', form)
    .then(function() {
      formStatus.textContent = '✅ Mensagem enviada com sucesso!';
      formStatus.style.color = '#28a745'; 
      form.reset(); 
    }, function(error) {
      console.error('Falha ao enviar e-mail:', error);
      formStatus.textContent = '❌ Erro ao enviar a mensagem. Tente novamente.';
      formStatus.style.color = '#dc3545';
    });
});