const NavbarSelector = 'nav#navbar';
const navbar = document.querySelector(NavbarSelector);

function addStyles (selector) {
    
    const styles = ` 
        ${selector} {
            transition: height 0.5s ease-in-out
        }
    
        ${selector} .small {
            height: 60px;
        }
    `;
    
    const styleTag = document.createElement('style');
    styleTag.innerHTML = styles;
    document.head.appendChild(styleTag);

}

addStyles(NavbarSelector);

window.addEventListener('scroll', () => {
    // console.log(window.scrollY);
    if (window.scrollY > 10) {
        navbar.classList.add('small');
    } else {
        navbar.classList.remove('small');
    }
});