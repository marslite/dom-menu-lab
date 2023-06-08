// Menu data structure
const menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];



const mainEl = document.querySelector("main");
mainEl.style.backgroundColor = 'var(--main-bg)';
mainEl.innerHTML = "<h1>SEI Rocks!</h1>";
mainEl.classList.add("flex-ctr");

const topMenueL = document.querySelector("#top-menu");
topMenueL.setAttribute('style',"height: 100%");
topMenueL.style.backgroundColor = "var(--top-menu-bg)";
topMenueL.classList.add("flex-around");

menuLinks.forEach(function(link){
    const a = document.createElement('a');
    a.text = link.text;
    a.href= link.href;
    topMenueL.append(a);
  })
  