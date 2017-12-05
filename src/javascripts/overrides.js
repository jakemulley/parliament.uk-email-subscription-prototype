(function () {
  // Sticky Nav Component
  var Sticky = (function() {
    'use strict';

    var CSS_CLASS_ACTIVE = 'is-fixed';

    var Sticky = {
      element: null,
      position: 0,
      addEvents: function() {
        window.addEventListener('scroll', this.onScroll.bind(this));
      },
      init: function(element) {
        this.element = element;
        this.addEvents();
        this.position = element.offsetTop ;
        this.onScroll();
      },
      aboveScroll: function() {
        return this.position < window.scrollY;
      },
      onScroll: function(event) {
        if (this.aboveScroll()) {
          this.setFixed();
        } else {
          this.setStatic();
        }
      },
      getWidth: function() {
        return this.element.getBoundingClientRect().width;
      },
      setFixed: function() {
        this.element.classList.add(CSS_CLASS_ACTIVE);
        // not needed if added with CSS Class
        this.element.style.position = 'fixed';
        this.element.style.top = 0;
        this.element.style.width = this.getWidth();
      },
      setStatic: function() {
        this.element.classList.remove(CSS_CLASS_ACTIVE);
        // not needed if added with CSS Class
        this.element.style.position = 'static';
        this.element.style.top = 'auto';
      }
    };

    return Sticky;

  })();


  //  Init Sticky
  var sticky = document.querySelector('.sticky');
  if (sticky)
    Sticky.init(sticky);
})();
