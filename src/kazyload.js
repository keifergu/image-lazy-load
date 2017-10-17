function observeRunner(entries) {
  entries.forEach(entry => {
    if(entry.intersectionRatio > 0) {
      var target = entry.target
      var dataSrc = target.attributes.getNamedItem('data-src').value
      target.src = dataSrc
    }
  })
}

class KazyLoad {
  constructor(query, settings) {
    this.elements = document.querySelectorAll(query)
    this.settings = Object.assign({}, settings)
    this.observer = new IntersectionObserver(observeRunner)

    this._initObserver()
  }

  _initObserver() {
    this.elements.forEach(el => {
      this.observer.observe(el)
    })
  }
}
