const navItems = document.querySelector('.nav-items');
const sideBar = document.querySelector('.side-bar');
console.log(navItems);
const sideNav =  document.querySelector('.side-nav');
const closeSideNav = document.querySelector('.close-side-nav')

function showNav(){
    navItems.classList.remove("hidden");
    sideBar.classList.add("hidden");
}

function removeNav(){
    navItems.classList.add("hidden");
    sideBar.classList.remove("hidden");
}
function resizeFn() {
    if (window.innerWidth>=960) {
        showNav()
    } else if(window.innerWidth<=960){
        removeNav()
    }    
}

function sideNavOpenFn() {
    sideNav.classList.remove('hidden2');
    sideBar.classList.add('hidden')
} 
function sideNavCloseFn() {
    sideNav.classList.add('hidden2');
    sideBar.classList.remove('hidden')
} 

window.onresize = resizeFn;
resizeFn();

sideBar.addEventListener('click', sideNavOpenFn);
closeSideNav.addEventListener('click', sideNavCloseFn)