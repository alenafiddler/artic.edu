export default {
  inserted: (el: any) => {
    function loadImages() {
      el.src = el.dataset.src
    }

    function callback(entries: any, observer: any) {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          loadImages()
          observer.unobserve(el)
        }
      })
    }

    function createIntersectionObserver() {
      const options = {
        root: null,
        threshold: 0
      }
      let observer = new IntersectionObserver(callback, options);
      observer.observe(el)
    }

    if (!window['IntersectionObserver'])
      loadImages()
    else
      createIntersectionObserver()
  }
}
