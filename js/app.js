// Menu data structure
const menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
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
    a.innerText = link.text;
    a.setAttribute('href',link['href']);
    topMenueL.append(a);
    // or alternetivaly 
    // a.text = link.text;
    // a.href = link.href;
    // topMenueL.append(a);
  })

const topMenuLinks = topMenueL.querySelectorAll('a');
console.log(topMenuLinks);
//Just for testing purposes
topMenuLinks.forEach(function(a){
  console.log(a.href);
  console.log(a.text);
})

//Task 5.1
let showingSubMenu = false;

const aEl = document.querySelector('a');

//Task 5.2 Attach a delegated 'click' event listener to topMenuEl.
topMenueL.addEventListener('click', function(e){
  //Task 5.2 The first line of code of the event listener function should call the event object's preventDefault() method.
  e.preventDefault();
  // Task 5.5 Next, the event listener should add a class name of active to the <a> element that was clicked.
  e.target.classList.add('active');
  //Task 5.2 The second line of code function should immediately return if the element clicked was not an <a> element.
  if(e.target.tagName !== 'A'){
    // console.log('Not an <a>')
    // console.log(e.target.tagName + " heere");
    console.log(e.target.tagName); //shows the NAV
    return;
  }
    //Displaying Objet's text
    console.log(e.target.text);
    //is this class active?
    
    console.log("It is active or not?",e.target.classList.contains('active'));
    //5.3 Next in the event listener, if the clicked <a> link has a class of active:
    if(e.target.classList.contains('active')){
      //5.3 Remove the active class from the clicked <a> element.
      e.target.classList.remove('active');
      //5.3 Set the showingSubMenu to false.
      showingSubMenu = false;
      // 5.3 Set the CSS top property of subMenuEl to 0.
      subMenuEl.style.top = "0";
      console.log("It is active or not?",e.target.classList.contains('active'));
      // 5.3 return; from the event listener function.
      return;      
    }


    //5.6 Next, add code in the event listener that sets showingSubMenu to true
    // if the clicked <a> element's "link" object within menuLinks has a subLinks property (all do, except for the "link" object for ABOUT), 
    //otherwise, set it to false.
    let idx = menuLinks.findIndex(x => x.text === e.target.text);
    if(menuLinks[idx].subLinks){
      showingSubMenu = true;
      console.log(showingSubMenu, e.target.text )
    }else{
      showingSubMenu = false;
      console.log(showingSubMenu, e.target.text);
    }
    ///////
    //Hint: Saving the "link" object in a variable will come in handy for passing its subLinks array in Task 5.7
    let link = e.target.href;

    //5.8 Code the buildSubMenu function so that it:
    function buildSubMenu(subLinks){
      //5.8 1 Clears the contents of subMenuEl.
      subMenuEl.innerHTML = "";
      //5.8 2 Iterates over the subLinks array passed as an argument; and for each "link" object: 
      subLinks.forEach(function(i){
        //5.8 - Create an <a> element.
        const newEle = document.createElement('a');
        console.log("i.text", i.text);
        console.log("i.href", i.href);
        //5.8 - On the new element, add an href attribute with its value set to the href property of the "link" object.
        newEle.setAttribute('href', i.href);
        //5.8 - Set the new element's content to the value of the text property of the "link" object.
        newEle.text = i.text;
        // newEle.href = i.href;
        // newEle.text = i.text;
        //5.8 - Append the new element to the subMenuEl element.
        subMenuEl.appendChild(newEle);
      })
    }
    //5.7 If showingSubMenu is true:
    //5.7 1 Call a buildSubMenu function passing to it the subLinks array for the clicked <a> element.
    //5.7 2 Set the CSS top property of subMenuEl to 100%.
    let ix = menuLinks.findIndex(x => x.text === e.target.text);
    if(showingSubMenu){
      //5.7 1 Call a buildSubMenu function passing to it the subLinks array for the clicked <a> element.
      buildSubMenu(menuLinks[ix].subLinks);
      //5.7 2 Set the CSS top property of subMenuEl to 100%.
      subMenuEl.style.top = "100%";
    }else{
      //5.7 Otherwise (showingSubMenu is false):
      //5.7 1 Set the CSS top property of subMenuEl to 0.
      subMenuEl.style.top = '0';
      //5.7 2 Since the About link has been clicked, set mainEl.innerHTML to '<h1>about</h1>'.
      mainEl.innerHTML = '<h1>about</h1>';
    }

    //Previous position
    // if(e.target.classList.contains('active')){
    //   e.target.classList.remove('active');
    //   showingSubMenu = false;
    //   subMenuEl.style.top = "0";
    //   console.log("It is active or not?",e.target.classList.contains('active'));
    //   return;      
    // }

  

  //5.4 t this point, a new menu item has been clicked and it's time to "reset" any currently active menu item...
  topMenuLinks.forEach(function(e){
    // topMenuLinks.classList.remove('active');
    e.classList.remove('active');
  })


})
  //4 Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
  const subMenuEl = document.querySelector('#sub-menu');
  //4 Set the height subMenuEl element to be 100%.
  subMenuEl.setAttribute('style','height:100%');
  //4 Set the background color of subMenuEl using the --sub-menu-bg CSS custom property.
  subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
  //4 Add the class of flex-around to the subMenuEl element.
  subMenuEl.classList.add('flex-around');
  //4 Set the CSS position property of subMenuEl to the value of absolute.
  subMenuEl.setAttribute('style','position: absolute');
  // subMenuEl.setAttribute('style','top:0');
  subMenuEl.style.top = 0;
  




  