// Obter elementos do DOM
const modal = document.getElementById('modal');
const modalContent = document.querySelector('.modal-content');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const projetoCards = document.querySelectorAll('.projeto-card');
let currentIndex = 0;

// Função para abrir o modal com um projeto específico
function openModal(index) {
  currentIndex = index;
  const projetoCard = projetoCards[currentIndex];
  const title = projetoCard.querySelector('h3').textContent;
  const description = projetoCard.querySelector('p').textContent;
  
  modalContent.innerHTML = `
    <div class="modal-body">
      <h3>${title}</h3>
      <p>${description}</p>
    </div>
    <div class="modal-footer">
      <button class="prev" onclick="changeProject(-1)">Anterior</button>
      <button class="next" onclick="changeProject(1)">Próximo</button>
    </div>
  `;
  
  modal.style.display = 'block';
}

// Função para fechar o modal
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Função para mudar o projeto
function changeProject(direction) {
  currentIndex += direction;

  if (currentIndex < 0) currentIndex = projetoCards.length - 1;
  if (currentIndex >= projetoCards.length) currentIndex = 0;

  openModal(currentIndex);
}

// Adicionar evento de clique nos cartões de projeto
document.querySelectorAll('.projeto-card').forEach((card, index) => {
  card.addEventListener('click', () => openModal(index));
});

// Fechar o modal ao clicar fora dele
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
