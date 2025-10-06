// ===============================
// 🕒 Atualiza automaticamente o ano no rodapé
// ===============================
document.getElementById("ano-atual").textContent = new Date().getFullYear();

// ===============================
// 🔗 Rolagem suave ao clicar nos links do menu
// ===============================
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

// ===============================
// 🔝 Botão "Voltar ao Topo"
// ===============================
const botaoTopo = document.createElement("button");
botaoTopo.innerText = "▲";
botaoTopo.id = "voltar-topo";
document.body.appendChild(botaoTopo);

// estilo básico direto no JS (para não precisar alterar o CSS)
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

// aparece somente após o usuário rolar um pouco a página
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

// ao clicar, volta suavemente ao topo
botaoTopo.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// ===============================
// 💫 Animação suave ao aparecer seções na tela (efeito "fade in")
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