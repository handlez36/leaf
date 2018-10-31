export class MenuSwitcher {  
  static setActive(menu) {
    const currentActive = document.querySelector('.active');
    const newlyActive   = document.querySelector(`.${menu}-menu-option`);
  
    if (currentActive) {
      currentActive.classList.remove('active');
    }
  
    newlyActive.classList.add('active');
  }

  static switchMenu(target) {
    switch(target) {
      case "/":
        this.setActive('home'); break;
      case "/about-us":
        this.setActive('about'); break;
      case "/activities":
        this.setActive('activities'); break;
      case "/donate":
        this.setActive('donate'); break;
      case "/scholarships":
        this.setActive('scholarships'); break;
      case "/contact-us":
        this.setActive('contact'); break;
      default: return;
    }
  }
}