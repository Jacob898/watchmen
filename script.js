// Pobieranie elementów
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

// Funkcja do przełączania widoczności menu mobilnego
menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("show");
});

// Automatyczne zamykanie menu po kliknięciu poza nim
document.addEventListener("click", (e) => {
    if (!menuToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.remove("show");
    }
});
