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
      updateSubbed(e, 'remove');
    } else {
      parentParentClassList.remove('showRemovalAlert');
      parentParentClassList.toggle('showSuccessAlert');
      updateSubbed(e, 'add');
    }
  }

  if(topicList.length) {
    for (var k = topicList.length - 1; k >= 0; k--) {
      topicList[k].onclick = toggleAlert;
    }
  }

  function readCookie(name) {
      var nameEQ = name + "=";
      var ca = document.cookie.split(';');
      for(var i=0;i < ca.length;i++) {
          var c = ca[i];
          while (c.charAt(0)==' ') c = c.substring(1,c.length);
          if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
      }
      return null;
  }

  var removeValue = function(list, value, separator) {
    separator = separator || ",";
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

    if(type == 'add') {
      if(subbed == null) {
        var newSubs = forVal;
      } else {
        var newSubs = subbed + ',' + forVal;
      }
    } else {
      var newSubs = removeValue(subbed, forVal);
    }
    document.cookie = 'subbed_topics=' + newSubs + ';path=/';
  }
})();
