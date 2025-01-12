// Dinamikusan betöltjük a navbar HTML tartalmát
document.getElementById("navbar-placeholder").innerHTML = `
<nav class="navbar navbar-transparent">
    <input type="checkbox" id="check" />
    <label for="check" class="checkbtn">
        <i class="fa fa-bars"></i>
    </label>
    <a href="index.html">
        <img class="logo" src="Kepek/logo.png" width="80px" />
    </a>
    <ul>
        <li><a href="#">MÚLTUNK</a></li>
        <li><a href="#">ISKOLA</a></li>
        <li><a href="#">INTÉZMÉNYEGYSÉGEINK</a></li>
        <li><a href="#">TAGINTÉZMÉNY</a></li>
        <li><a href="#">GALÉRIA</a></li>
        <li><a href="#">ESEMÉNYNAPTÁR</a></li>
        <li><a href="#">KAPCSOLAT</a></li>
        <li><a href="#">ADATKEZELÉS</a></li>
        <li class="close-icon">
            <label for="check"><i class="fa fa-times"></i></label>
        </li>
    </ul>
</nav>
`;

// Hamburger menü működése
document.querySelector(".checkbtn").addEventListener("click", function () {
  document.querySelector("nav ul").classList.toggle("show");
});

// Navbar zsugorítása görgetéskor
window.addEventListener("scroll", function () {
  let navbar = document.querySelector(".navbar");
  navbar.classList.toggle("navbar-shrink", window.scrollY > 50);
});
