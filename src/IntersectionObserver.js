function IntersectionObserver(observer) {
  this.observer = observer;
  this.elements = [];
  this.entries = [];

  initObserver.call(this);
}

IntersectionObserver.prototype = {
  observe: function(element) {
    this.elements.push(element);
    this.entries.push(new IntersectionObserverEntry(element));
  }
}

function initObserver() {
  var that = this;
  var offset = {
    x: window.innerWidth,
    y: window.innerHeight
  };
  document.addEventListener("scroll", function() {
    var flag = false;
    that.entries.forEach(function(entry) {
      var rect = entry.boundingClientRect;
      if(rect.y < offset.y && rect.x < offset.x) {
        // when the old intersectionRatio is '0',
        // it means the element has changed.
        if(entry.intersectionRatio === 0) flag = true;
        entry.intersectionRatio = 1;
      } else {
        entry.intersectionRatio = 0;
      }
    })

    if(flag) {
      that.observer.call(null, that.entries)
    }
  })
}

function IntersectionObserverEntry(element) {
  Object.assign(this, {
    intersectionRatio: 0,
    target: element
  });
  Object.defineProperties(this, {
    boundingClientRect: {
      get: function() {
        return element.getBoundingClientRect();
      }
    },
    
  })
}