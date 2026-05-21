
const menuBtn = document.getElementById("menuBtn");
const closeMenu = document.getElementById("closeMenu");
const sideMenu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");
const cartCount = document.getElementById("cartCount");

function openMenu(){
  sideMenu.classList.add("open");
  overlay.classList.add("show");
}
function closeSideMenu(){
  sideMenu.classList.remove("open");
  overlay.classList.remove("show");
}

menuBtn?.addEventListener("click", openMenu);
closeMenu?.addEventListener("click", closeSideMenu);
overlay?.addEventListener("click", closeSideMenu);

let cart = Number(localStorage.getItem("bellezaCart") || 0);
if(cartCount) cartCount.textContent = cart;

document.querySelectorAll(".buy-btn").forEach(button => {
  button.addEventListener("click", () => {
    cart++;
    localStorage.setItem("bellezaCart", cart);
    if(cartCount) cartCount.textContent = cart;
    button.textContent = "Selecionado ✓";
    setTimeout(() => button.textContent = "Comprar", 1200);
  });
});
