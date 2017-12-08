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

  // Active states
  var catList = document.querySelectorAll('.category-list li');
  function toggleActive(e) {
    for (var i = catList.length - 1; i >= 0; i--) {
      catList[i].classList.remove('active');
    }
    e.target.parentElement.classList.add('active');
  }

  if(catList.length) {
    for (var i = catList.length - 1; i >= 0; i--) {
      catList[i].onclick = toggleActive;
    }
  }

  // Toggle alerts etc
  var topicList = document.querySelectorAll('.right ul li label');
  function toggleAlert(e) {
    var parentParentClassList = e.target.parentElement.parentElement.parentElement.classList;
    if(parentParentClassList.contains('showSuccessAlert')) {
      parentParentClassList.remove('showSuccessAlert');
      parentParentClassList.add('showRemovalAlert');
      changeCount();
    } else {
      parentParentClassList.remove('showRemovalAlert');
      parentParentClassList.toggle('showSuccessAlert');
      changeCount();
    }
  }

  if(topicList.length) {
    for (var k = topicList.length - 1; k >= 0; k--) {
      topicList[k].onclick = toggleAlert;
    }
  }

  // Update subscribe count
  var subscribeText = 'You are subscribed to 1 email.';
  function changeCount() {
    var checkboxCheckedCount = document.querySelectorAll('.right ul li input:checked');
    var subscribeParagraph = document.querySelector('.subscribeParagraph');
    // subscribeParagraph.innerHTML = checkboxCheckedCount.length;
  }
})();
