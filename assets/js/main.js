console.clear()

window.addEventListener('scroll', () => {
  const navLinks = document.querySelectorAll('.nav-link');
  const navItems = document.querySelectorAll('.nav-item');

  navLinks.forEach(link => {
    const section = document.querySelector(link.hash);

    if (section.offsetTop <= window.scrollY + 110 && section.offsetTop + section.offsetHeight > window.scrollY + 110) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  navItems.forEach(item => {
    const section = document.querySelector(item.querySelector('.nav-link').hash);

    if (section.offsetTop <= window.scrollY + 110 && section.offsetTop + section.offsetHeight > window.scrollY + 110) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
});
window.addEventListener('scroll', () => {
  const navLinks = document.querySelectorAll('.desk-nav-link');
  const navItems = document.querySelectorAll('.desk-nav-item');

  navLinks.forEach(link => {
    const section = document.querySelector(link.hash);

    if (section.offsetTop <= window.scrollY + 250 && section.offsetTop + section.offsetHeight > window.scrollY + 250) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  navItems.forEach(item => {
    const section = document.querySelector(item.querySelector('.desk-nav-link').hash);

    if (section.offsetTop <= window.scrollY + 250 && section.offsetTop + section.offsetHeight > window.scrollY + 250) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
});

const navExpand = [].slice.call(document.querySelectorAll('.nav-expand'))
const backLink = `<li class="nav-item">
	<a class="nav-link nav-back-link" href="javascript:;">
		Back
	</a>
</li>`

navExpand.forEach(item => {
	item.querySelector('.nav-expand-content').insertAdjacentHTML('afterbegin', backLink)
	item.querySelector('.nav-link').addEventListener('click', () => item.classList.add('active'))
	item.querySelector('.nav-back-link').addEventListener('click', () => item.classList.remove('active'))
})


// ---------------------------------------
// not-so-important stuff starts here

const ham = document.getElementById('ham')
ham.addEventListener('click', function() {
	document.body.classList.toggle('nav-is-toggled')
})

// get references to the top and bottom nav elements
const topNav = document.querySelector('#nav2');
const bottomNav = document.querySelector('#nav1');

// get the top position of the bottom nav element
const bottomNavTop = bottomNav.offsetTop;

// listen for the scroll event
window.addEventListener('scroll', () => {
  // get the current scroll position
  const scrollPos = window.scrollY || window.pageYOffset;

  // check if the scroll position is greater than or equal to the top position of the bottom nav
  if (scrollPos >= bottomNavTop) {
    // hide the bottom nav and show the top nav
    // bottomNav.style.display = 'none';
    topNav.style.display = 'flex';
    topNav.style.opacity = 1;
    bottomNav.style.opacity = 0;
    topNav.style.pointerEvents = 'auto';
  } else {
    // show the bottom nav and hide the top nav
    // bottomNav.style.display = 'flex';
    // topNav.style.display = 'none';
    topNav.style.opacity = 0;
    bottomNav.style.opacity = 1;
    topNav.style.pointerEvents = 'none';
  }
});





;(function(name, factory) {
    if (typeof window === 'object') {
      window[name] = factory()
    }
  })('Ribbons', function() {
    var _w = window,
      _b = document.kbody,
      _d = document.documentElement
  
    // random helper
    var random = function() {
      if (arguments.length === 1) {
        // only 1 argument
        if (Array.isArray(arguments[0])) {
          // extract index from array
          var index = Math.round(random(0, arguments[0].length - 1))
          return arguments[0][index]
        }
        return random(0, arguments[0]) // assume numeric
      } else if (arguments.length === 2) {
        // two arguments range
        return Math.random() * (arguments[1] - arguments[0]) + arguments[0]
      } else if (arguments.length === 4) {
        //
  
        var array = [arguments[0], arguments[1], arguments[2], arguments[3]]
        return array[Math.floor(Math.random() * array.length)]
      }
      return 0 
    }
  
    var screenInfo = function(e) {
      var width = Math.max(
          0,
          _w.innerWidth || _d.clientWidth || _b.clientWidth || 0
        ),
        height = Math.max(
          0,
          _w.innerHeight || _d.clientHeight || _b.clientHeight || 0
        ),
        scrollx =
          Math.max(0, _w.pageXOffset || _d.scrollLeft || _b.scrollLeft || 0) -
          (_d.clientLeft || 0),
        scrolly =
          Math.max(0, _w.pageYOffset || _d.scrollTop || _b.scrollTop || 0) -
          (_d.clientTop || 0)
  
      return {
        width: width,
        height: height,
        ratio: width / height,
        centerx: width / 2,
        centery: height / 2,
        scrollx: scrollx,
        scrolly: scrolly
      }
    }
  
    var mouseInfo = function(e) {
      var screen = screenInfo(e),
        mousex = e ? Math.max(0, e.pageX || e.clientX || 0) : 0,
        mousey = e ? Math.max(0, e.pageY || e.clientY || 0) : 0
  
      return {
        mousex: mousex,
        mousey: mousey,
        centerx: mousex - screen.width / 2,
        centery: mousey - screen.height / 2
      }
    }
  
    var Point = function(x, y) {
      this.x = 0
      this.y = 0
      this.set(x, y)
    }
    Point.prototype = {
      constructor: Point,
  
      set: function(x, y) {
        this.x = x || 0
        this.y = y || 0
      },
      copy: function(point) {
        this.x = point.x || 0
        this.y = point.y || 0
        return this
      },
      multiply: function(x, y) {
        this.x *= x || 1
        this.y *= y || 1
        return this
      },
      divide: function(x, y) {
        this.x /= x || 1
        this.y /= y || 1
        return this
      },
      add: function(x, y) {
        this.x += x || 0
        this.y += y || 0
        return this
      },
      subtract: function(x, y) {
        this.x -= x || 0
        this.y -= y || 0
        return this
      },
      clampX: function(min, max) {
        this.x = Math.max(min, Math.min(this.x, max))
        return this
      },
      clampY: function(min, max) {
        this.y = Math.max(min, Math.min(this.y, max))
        return this
      },
      flipX: function() {
        this.x *= -1
        return this
      },
      flipY: function() {
        this.y *= -1
        return this
      }
    }
  
    var Factory = function(options) {
      this._canvas = null
      this._context = null
      this._sto = null
      this._width = 0
      this._height = 0
      this._scroll = 0
      this._ribbons = []
      this._options = {
        colorSaturation: '80%',
        colorBrightness: '60%',
        colorAlpha: 0.65,
        colorCycleSpeed: 6,
        verticalPosition: 'center',
        horizontalSpeed: 150,
        ribbonCount: 3,
        strokeSize: 0,
        parallaxAmount: -0.5,
        animateSections: true
      }
      this._onDraw = this._onDraw.bind(this)
      this._onResize = this._onResize.bind(this)
      this._onScroll = this._onScroll.bind(this)
      this.setOptions(options)
      this.init()
    }
  
    Factory.prototype = {
      constructor: Factory,
  
      setOptions: function(options) {
        if (typeof options === 'object') {
          for (var key in options) {
            if (options.hasOwnProperty(key)) {
              this._options[key] = options[key]
            }
          }
        }
      },
  
      init: function() {
        try {
          this._canvas = document.createElement('canvas')
          this._canvas.style['display'] = 'block'
          this._canvas.style['position'] = 'fixed'
          this._canvas.style['margin'] = '0'
          this._canvas.style['padding'] = '0'
          this._canvas.style['border'] = '0'
          this._canvas.style['outline'] = '0'
          this._canvas.style['left'] = '0'
          this._canvas.style['top'] = '0'
          this._canvas.style['width'] = '100%'
          this._canvas.style['height'] = '100%'
          this._canvas.style['z-index'] = '-1'
          this._onResize()
  
          this._context = this._canvas.getContext('2d')
          this._context.clearRect(0, 0, this._width, this._height)
          this._context.globalAlpha = this._options.colorAlpha
  
          window.addEventListener('resize', this._onResize)
          window.addEventListener('scroll', this._onScroll)
          document.body.appendChild(this._canvas)
        } catch (e) {
          console.warn('Canvas Context Error: ' + e.toString())
          return
        }
        this._onDraw()
      },
  
      addRibbon: function() {
        var dir = Math.round(random(1, 9)) > 5 ? 'right' : 'left',
          stop = 1000,
          hide = 200,
          min = 0 - hide,
          max = this._width + hide,
          movex = 0,
          movey = 0,
          startx = dir === 'right' ? min : max,
          starty = Math.round(random(0, this._height))
  
        if (/^(top|min)$/i.test(this._options.verticalPosition)) {
          starty = 0 + hide
        } else if (/^(middle|center)$/i.test(this._options.verticalPosition)) {
          starty = this._height / 2
        } else if (/^(bottom|max)$/i.test(this._options.verticalPosition)) {
          starty = this._height - hide
        }
  
        var ribbon = [],
          point1 = new Point(startx, starty),
          point2 = new Point(startx, starty),
          point3 = null,
          color = Math.round(random(35, 35, 40, 40)),
          delay = 0
  
        while (true) {
          if (stop <= 0) break
          stop--
  
          movex = Math.round(
            (Math.random() * 1 - 0.2) * this._options.horizontalSpeed
          )
          movey = Math.round((Math.random() * 1 - 0.5) * (this._height * 0.25))
  
          point3 = new Point()
          point3.copy(point2)
  
          if (dir === 'right') {
            point3.add(movex, movey)
            if (point2.x >= max) break
          } else if (dir === 'left') {
            point3.subtract(movex, movey)
            if (point2.x <= min) break
          }
          ribbon.push({
            point1: new Point(point1.x, point1.y),
            point2: new Point(point2.x, point2.y),
            point3: point3,
            color: color,
            delay: delay,
            dir: dir,
            alpha: 0,
            phase: 0
          })
  
          point1.copy(point2)
          point2.copy(point3)
  
          delay += 4
        }
        this._ribbons.push(ribbon)
      },
  
      _drawRibbonSection: function(section) {
        if (section) {
          if (section.phase >= 1 && section.alpha <= 0) {
            return true 
          }
          if (section.delay <= 0) {
            section.phase += 0.02
            section.alpha = Math.sin(section.phase) * 1
            section.alpha = section.alpha <= 0 ? 0 : section.alpha
            section.alpha = section.alpha >= 1 ? 1 : section.alpha
  
            if (this._options.animateSections) {
              var mod = Math.sin(1 + section.phase * Math.PI / 2) * 0.1
  
              if (section.dir === 'right') {
                section.point1.add(mod, 0)
                section.point2.add(mod, 0)
                section.point3.add(mod, 0)
              } else {
                section.point1.subtract(mod, 0)
                section.point2.subtract(mod, 0)
                section.point3.subtract(mod, 0)
              }
              section.point1.add(0, mod)
              section.point2.add(0, mod)
              section.point3.add(0, mod)
            }
          } else {
            section.delay -= 0.5
          }
          var s = this._options.colorSaturation,
            l = this._options.colorBrightness,
            c =
              'hsla(' +
              section.color +
              ', ' +
              s +
              ', ' +
              l +
              ', ' +
              section.alpha +
              ' )'
  
          this._context.save()
  
          if (this._options.parallaxAmount !== 0) {
            this._context.translate(
              0,
              this._scroll * this._options.parallaxAmount
            )
          }
          this._context.beginPath()
          this._context.moveTo(section.point1.x, section.point1.y)
          this._context.lineTo(section.point2.x, section.point2.y)
          this._context.lineTo(section.point3.x, section.point3.y)
          this._context.fillStyle = c
          this._context.fill()
  
          if (this._options.strokeSize > 0) {
            this._context.lineWidth = this._options.strokeSize
            this._context.strokeStyle = c
            this._context.lineCap = 'round'
            this._context.stroke()
          }
          this._context.restore()
        }
        return false 
      },
  
      _onDraw: function() {
        for (var i = 0, t = this._ribbons.length; i < t; ++i) {
          if (!this._ribbons[i]) {
            this._ribbons.splice(i, 1)
          }
        }
  
        this._context.clearRect(0, 0, this._width, this._height)
  
        for (
          var a = 0;
          a < this._ribbons.length;
          ++a 
        ) {
          var ribbon = this._ribbons[a],
            numSections = ribbon.length,
            numDone = 0
  
          for (
            var b = 0;
            b < numSections;
            ++b 
          ) {
            if (this._drawRibbonSection(ribbon[b])) {
              numDone++ 
            }
          }
          if (numDone >= numSections) {
            this._ribbons[a] = null
          }
        }
        if (this._ribbons.length < this._options.ribbonCount) {
          this.addRibbon()
        }
        requestAnimationFrame(this._onDraw)
      },
  
      
      _onResize: function(e) {
        var screen = screenInfo(e)
        this._width = screen.width
        this._height = screen.height
  
        if (this._canvas) {
          this._canvas.width = this._width
          this._canvas.height = this._height
  
          if (this._context) {
            this._context.globalAlpha = this._options.colorAlpha
          }
        }
      },
  
      _onScroll: function(e) {
        var screen = screenInfo(e)
        this._scroll = screen.scrolly
      }
    }
  
    return Factory
  })

  new Ribbons({
    colorSaturation: '20%',
    colorBrightness: '50%',
    colorAlpha: 0.5,
    colorCycleSpeed: 5,
    verticalPosition: 'random',
    horizontalSpeed: 200,
    ribbonCount: 7,
    strokeSize: 0,
    parallaxAmount: -0.2,
    animateSections: true
  })
const heroTabs = document.querySelector('.et-hero-tabs');
const heroTabsOffsetTop = heroTabs.offsetTop;
const heroTabsOffsetHeight = heroTabs.offsetHeight;
const windowHeight = window.innerHeight;

function stickyHeroTabs() {
  const scrollPosition = window.scrollY + windowHeight;
  if (scrollPosition > heroTabsOffsetTop + heroTabsOffsetHeight) {
    heroTabs.classList.add('sticky');
  } else {
    heroTabs.classList.remove('sticky');
  }
}

window.addEventListener('scroll', stickyHeroTabs);
// function clickSingleA(a)
// {
//     items = document.querySelectorAll('.nav-link.active');

//     if(items.length) 
//     {
//         items[0].className = 'nav-link';
//     }

//     a.className = 'nav-link active';
// }
// function clickSingleLi(li)
// {
//     items = document.querySelectorAll('.nav-item.active');

//     if(items.length) 
//     {
//         items[0].className = 'nav-item';
//     }

//     li.className = 'nav-item active';
// }

