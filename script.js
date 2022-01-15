AOS.init();

let touchstart = {
  y: 0,
  x: 0
}
let touchend = {
  y: 0,
  x: 0
}


let direction = ''
function handleGesture() {
  let Ymovement = touchend.y - touchstart.y
  let validSlide = -20 < Ymovement ? Ymovement < 20 ? true : false : false
  if ((touchend.x - touchstart.x) < 50 && validSlide) direction = 'left'
  if ((touchend.x - touchstart.x) > 50 && validSlide) direction = 'right'
  if (touchend.x == touchstart.x) direction = ''
  // console.log(-10 < Ymo
  sidebarToggle()
}

document.addEventListener('touchstart', e => {
  touchstart = {
    x: e.changedTouches[0].screenX,
    y: e.changedTouches[0].screenY
  }
})

document.addEventListener('touchend', e => {
  touchend = {
    x: e.changedTouches[0].screenX,
    y: e.changedTouches[0].screenY
  }
  handleGesture()
})

function sidebarToggle() {
  console.log(direction);
  if (!document.getElementsByClassName('offcanvas')[0].className.includes('show') && direction === 'right' && screen.width <= 991) {
    document.getElementById('sidebar-toggle').click()
  }
  if (document.getElementsByClassName('offcanvas')[0].className.includes('show') && direction === 'left') {
    document.getElementById('offcanvas-close-btn').click()
  }
}

document.querySelectorAll('.nav-link.mobile').forEach(item => {
  item.addEventListener('click', () => {
    document.getElementById('offcanvas-close-btn').click()
  })
})

document.querySelectorAll('.nav-link').forEach(item => {
  item.addEventListener('click', function () {
    document.querySelectorAll('.nav-link').forEach(other => {
      other.classList.remove('active')
    })
    this.classList.add('active')
  })
})

window.addEventListener('resize', function () {
  if (document.getElementsByClassName('offcanvas')[0].className.includes('show') && screen.width > 991) {
    document.getElementById('offcanvas-close-btn').click()
  }
})

if (window.performance.getEntriesByType('navigation')[0].type === 'reload') {
  window.history.replaceState(null, '', '/')
}


fetch('./project.json').then(e => e.json())
  .then(res => {
  // console.log(res);
    let container = document.getElementById('project-container')
    res.forEach(v => {
      container.innerHTML += `
    <div class="col-md-4 mb-3 proj-card aos-init aos-animate" data-aos="flip-right" data-aos-duration="500">
              <div class="card">
                <img src="${v.image}" loading="lazy" class="card-img-top" alt="${v.name}" style="width: 100%; align-self: center;">
                <div class="card-body">
                  <p class="card-text">
                  <a href="${v.url}" target="_blank">${v.url}</a>
                  <br>${v.description}</p>
                </div>
              </div>
            </div>
    `
    })
})

document.getElementsByClassName('scroll-up')[0].addEventListener('click', () => {
  window.scrollTo(0, 0)
})

window.addEventListener('scroll', function () {
  if (window.pageYOffset !== 0) {
    document.getElementsByClassName('scroll-up')[0].style.visibility ='visible'
  }
  else if (window.pageYOffset === 0) {
    document.getElementsByClassName('scroll-up')[0].style.visibility ='hidden'
  }
})