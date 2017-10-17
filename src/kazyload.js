class KazyLoad {
  constructor(query, settings) {
    this.elements = document.querySelectorAll(query)
    this.settings = Object.assign({}, settings)
    this.observer = null
  }

  _initObserver() {
        
  }
}