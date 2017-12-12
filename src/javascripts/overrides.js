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
      onScroll: function() {
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

  // Toggle alerts on subscriptions
  var topicList = document.querySelectorAll('.right ul li label');
  function toggleAlert(e) {
    var input = e.target.parentNode.getElementsByTagName('input')[0];
    var reallyChecked = input.checked ? false : true; // have to switch as function runs before changed
    var parent = e.target.parentElement.parentElement.parentElement.parentElement.classList;
    if(reallyChecked) {
      updateSubbed(e, 'add');
    } else {
      updateSubbed(e, 'remove');
    }

    if(input.checked === false && reallyChecked === true) {
      parent.add('showSuccessAlert');
      parent.remove('showRemovalAlert');
    }

    if(input.checked === true && reallyChecked === false) {
      parent.remove('showSuccessAlert');
      parent.add('showRemovalAlert');
    }
  }

  if(topicList.length) {
    for (var k = 0; k < topicList.length; k++) {
      topicList[k].onclick = toggleAlert;
    }
  }

  function readCookie(name) {
    var nameEQ = name + '=';
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
  }

  function removeValue(list, value, separator) {
    separator = separator || ',';
    var values = list.split(separator);
    for(var i = 0 ; i < values.length ; i++) {
      if(values[i] == value) {
        values.splice(i, 1);
        return values.join(separator);
      }
    }
    return list;
  }

  function updateSubbed(e, type) {
    // get current subbed cookie
    var subbed = readCookie('subbed_topics');
    var forVal = e.target.attributes.for.value;
    var newSubs = '';

    if(type == 'add') {
      if(subbed !== null) {
        newSubs = subbed + ',' + forVal;
      }
    } else {
      newSubs = removeValue(subbed, forVal);
    }

    document.cookie = 'subbed_topics=' + newSubs + ';path=/';
  }

  // Add nav classes
  // window.onscroll = function changeNav(){
  //     var navBar = document.getElementById('navBar'),
  //           secondSection = document.getElementById('secondSection'),
  //           secondSectionTop = aboutSection.getBoundingClientRect().top,
  //           navBarHeight = navBar.getBoundingClientRect().height;

  //     if(secondSectionTop <= navBarHeight) {
  //           navBar.className = ('basic-classname');
  //     } else if(aboutSectionTop >= navBarHeight) {
  //          navBar.className =  ('basic-classname added-classname');
  //     }
  // }
})();
