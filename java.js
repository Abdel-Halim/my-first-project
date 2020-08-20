
          ! function(e, t) {
            "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.baffle = t() : e.baffle = t()
          }(this, function() {
            return function(n) {
              function i(e) {
                if (o[e]) return o[e].exports;
                var t = o[e] = {
                  exports: {},
                  id: e,
                  loaded: !1
                };
                return n[e].call(t.exports, t, t.exports, i), t.loaded = !0, t.exports
              }
              var o = {};
              return i.m = n, i.c = o, i.p = "", i(0)
            }([function(e, t, n) {
              "use strict";
              var i, o = n(2),
                r = (i = o) && i.__esModule ? i : {
                  default: i
                };
              e.exports = r.default
            }, function(e, t) {
              "use strict";
              Object.defineProperty(t, "__esModule", {
                value: !0
              }), t.extend = function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                return e
              }, t.mapString = function(e, t) {
                return e.split("").map(t).join("")
              }, t.sample = function(e) {
                return e[Math.floor(Math.random() * e.length)]
              }, t.each = function(e, t) {
                for (var n = 0, i = e.length; n < i; n++) t(e[n], n)
              }, t.getTruthyIndices = function(e) {
                return e.map(function(e, t) {
                  return !!e && t
                }).filter(function(e) {
                  return !1 !== e
                })
              }, t.getElements = function(t) {
                return "string" == typeof t ? [].slice.call(document.querySelectorAll(t)) : [NodeList, HTMLCollection].some(function(e) {
                  return t instanceof e
                }) ? [].slice.call(t) : t.nodeType ? [t] : t
              }
            }, function(e, t, n) {
              "use strict";
              Object.defineProperty(t, "__esModule", {
                value: !0
              });
              var i, o = n(1),
                r = n(3),
                a = (i = r) && i.__esModule ? i : {
                  default: i
                },
                l = {
                  characters: "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz~!@#$%^&*()-+=[]{}|;:,./<>?",
                  exclude: [" "],
                  speed: 50
                },
                s = function() {
                  function n(e, t) {
                    (function(e, t) {
                      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    })(this, n), this.options = (0, o.extend)(Object.create(l), t), this.elements = (0, o.getElements)(e).map(a.default), this.running = !1
                  }
                  return n.prototype.once = function() {
                    var t = this;
                    return (0, o.each)(this.elements, function(e) {
                      return e.write(t.options.characters, t.options.exclude)
                    }), this.running = !0, this
                  }, n.prototype.start = function() {
                    var e = this;
                    return clearInterval(this.interval), (0, o.each)(this.elements, function(e) {
                      return e.init()
                    }), this.interval = setInterval(function() {
                      return e.once()
                    }, this.options.speed), this.running = !0, this
                  }, n.prototype.stop = function() {
                    return clearInterval(this.interval), this.running = !1, this
                  }, n.prototype.set = function(e) {
                    return (0, o.extend)(this.options, e), this.running && this.start(), this
                  }, n.prototype.text = function(t) {
                    var n = this;
                    return (0, o.each)(this.elements, function(e) {
                      e.text(t(e.value)), n.running || e.write()
                    }), this
                  }, n.prototype.reveal = function() {
                    var n = this,
                      e = arguments.length <= 0 || void 0 === arguments[0] ? 0 : arguments[0],
                      t = arguments.length <= 1 || void 0 === arguments[1] ? 0 : arguments[1],
                      i = e / this.options.speed || 1;
                    return setTimeout(function() {
                      clearInterval(n.interval), n.running = !0, n.interval = setInterval(function() {
                        var e = n.elements.filter(function(e) {
                          return !e.bitmap.every(function(e) {
                            return !e
                          })
                        });
                        (0, o.each)(e, function(e) {
                          var t = Math.ceil(e.value.length / i);
                          e.decay(t).write(n.options.characters, n.options.exclude)
                        }), e.length || (n.stop(), (0, o.each)(n.elements, function(e) {
                          return e.init()
                        }))
                      }, n.options.speed)
                    }, t), this
                  }, n
                }();
              t.default = function(e, t) {
                return new s(e, t)
              }
            }, function(e, t, n) {
              "use strict";

              function o(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
              }
              Object.defineProperty(t, "__esModule", {
                value: !0
              });
              var r = n(1),
                i = function(n) {
                  function i(e) {
                    o(this, i);
                    var t = function(e, t) {
                      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, n.call(this, e.textContent));
                    return t.element = e, t
                  }
                  return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                      constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                      }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                  }(i, n), i.prototype.write = function(e, t) {
                    return this.element.textContent = this.render(e, t), this
                  }, i
                }(function() {
                  function t(e) {
                    o(this, t), this.value = e, this.init()
                  }
                  return t.prototype.init = function() {
                    return this.bitmap = this.value.split("").map(function() {
                      return 1
                    }), this
                  }, t.prototype.render = function() {
                    var n = this,
                      i = arguments.length <= 0 || void 0 === arguments[0] ? [] : arguments[0],
                      o = arguments.length <= 1 || void 0 === arguments[1] ? [] : arguments[1];
                    return i.length ? (0, r.mapString)(this.value, function(e, t) {
                      return -1 < o.indexOf(e) ? e : n.bitmap[t] ? (0, r.sample)(i) : e
                    }) : this.value
                  }, t.prototype.decay = function() {
                    for (var e = arguments.length <= 0 || void 0 === arguments[0] ? 1 : arguments[0]; e--;) {
                      var t = (0, r.getTruthyIndices)(this.bitmap);
                      this.bitmap[(0, r.sample)(t)] = 0
                    }
                    return this
                  }, t.prototype.text = function() {
                    var e = arguments.length <= 0 || void 0 === arguments[0] ? this.value : arguments[0];
                    return this.value = e, this.init(), this
                  }, t
                }());
              t.default = function(e) {
                return new i(e)
              }
            }])
          });
          var global = function() {
              var e = {
                  overlay: document.querySelector(".js-overlay"),
                  site: document.querySelector(".js-site"),
                  container: document.querySelector(".js-container"),
                  links: document.querySelectorAll(".js-link"),
                  animins: document.querySelectorAll(".js-animin"),
                  portrait: document.querySelector(".js-portrait"),
                  portraitCanvas: document.querySelector(".js-portraitCanvas"),
                  cursorSmall: document.querySelector(".js-cursorSmall"),
                  cursorBig: document.querySelector(".js-cursorBig"),
                  cursorInner: document.querySelector(".js-cursorInner")
                },
                t = {
                  pointerFine: window.matchMedia("(pointer: fine)"),
                  windowWidth: window.innerWidth,
                  windowHeight: window.innerHeight,
                  windowResizeTimer: null,
                  windowResizeTimeout: 100
                };
              var n = function() {
                var e = document.createElement("div");
                if (null == e.style.transform) {
                  var t = ["Webkit", "Moz", "ms"];
                  for (var n in t)
                    if (void 0 !== e.style[t[n] + "Transform"]) return t[n] + "Transform"
                }
                return "transform"
              }();
              return {
                elements: e,
                options: t,
                updateWindow: function() {
                  t.windowWidth = window.innerWidth, t.windowHeight = window.innerHeight
                },
                lerp: function(e, t, n) {
                  return (1 - n) * e + n * t
                },
                randomRange: function(e, t) {
                  return Math.floor(Math.random() * (t - e + 1)) + e
                },
                transformPrefix: n
              }
            }(),
            intro = function() {
              var t = {
                overlayDelay: 2e3,
                animDelay: 125,
                animIndex: 0
              };
              return {
                init: function() {
                  global.elements.overlay.style.opacity = 0, setTimeout(function() {
                    global.elements.animins.forEach(function(e) {
                      setTimeout(function() {
                        e.style.opacity = "1", e.style[global.transformPrefix] = "translateY(0) skewY(0deg)", glitchLinks.init()
                      }, t.animDelay * t.animIndex), t.animIndex++
                    }), global.elements.overlay.style.display = "none"
                  }, t.overlayDelay)
                }
              }
            }(),
            cursor = function() {
              var t = {
                  x: global.options.windowWidth / 2,
                  y: global.options.windowHeight / 2,
                  lazyX: global.options.windowWidth / 2,
                  lazyY: global.options.windowWidth / 2,
                  ease: .2
                },
                e = {
                  moveX: 0,
                  moveY: 0,
                  siteX: 0,
                  siteY: 0,
                  siteMulti: 20,
                  portraitX: 0,
                  portraitY: 0,
                  portraitMulti: 10
                },
                o = {
                  isVisible: !1,
                  isVisibleTimer: null,
                  isVisibleTimeout: 1e3,
                  isHovering: !1,
                  isClicked: !1
                };

              function n(e) {
                t.x = e.clientX, t.y = e.clientY, o.isVisible = !0, o.isVisible && (null !== o.isVisibleTimer && clearTimeout(o.isVisibleTimer), o.isVisibleTimer = setTimeout(function() {
                  o.isHovering || (o.isVisible = !1)
                }, o.isVisibleTimeout))
              }

              function i() {
                t.lazyX += (t.x - t.lazyX) * t.ease, t.lazyY += (t.y - t.lazyY) * t.ease, global.elements.cursorSmall.style[global.transformPrefix] = "translate(" + t.x.toFixed(2) + "px, " + t.y.toFixed(2) + "px)", global.elements.cursorBig.style[global.transformPrefix] = "translate(" + t.lazyX.toFixed(2) + "px, " + t.lazyY.toFixed(2) + "px)", o.isVisible ? (global.elements.cursorSmall.style.opacity = "1", o.isHovering ? (global.elements.cursorBig.style.opacity = "0", o.isClicked ? global.elements.cursorInner.style[global.transformPrefix] = "scale(3)" : global.elements.cursorInner.style[global.transformPrefix] = "scale(5)") : (global.elements.cursorInner.style[global.transformPrefix] = "scale(1)", global.elements.cursorBig.style.opacity = "0.25")) : (global.elements.cursorSmall.style.opacity = "0", global.elements.cursorBig.style.opacity = "0"), e.moveX = (t.lazyX - global.options.windowWidth / 2) / (global.options.windowWidth / 2), e.moveY = (t.lazyY - global.options.windowHeight / 2) / (global.options.windowHeight / 2), e.siteX = e.moveX * -e.siteMulti, e.siteY = e.moveY * -e.siteMulti, e.portraitX = e.moveX * -e.portraitMulti, e.portraitY = e.moveY * -e.portraitMulti, global.elements.site.style[global.transformPrefix] = "translate(" + e.siteX.toFixed(2) + "px, " + e.siteY.toFixed(2) + "px)", global.elements.portrait.style[global.transformPrefix] = "translate(" + e.portraitX.toFixed(2) + "px, " + e.portraitY.toFixed(2) + "px)", requestAnimationFrame(i)
              }
              return {
                init: function() {
                  document.addEventListener("mousemove", function(e) {
                    n(e)
                  }, !1), document.addEventListener("mouseleave", function(e) {
                    o.isVisible = !1
                  }, !1), document.addEventListener("mousedown", function(e) {
                    o.isClicked = !0, n(e)
                  }, !1), document.addEventListener("mouseup", function(e) {
                    o.isClicked = !1
                  }, !1), global.elements.links.forEach(function(t) {
                    var n = t.getAttribute("data-text"),
                      i = baffle(t);
                    t.addEventListener("mouseenter", function(e) {
                      o.isHovering = !0, i.reveal(1e3)
                    }, !1), t.addEventListener("mouseleave", function(e) {
                      o.isHovering = !1, t.textContent = n
                    }, !1)
                  }), requestAnimationFrame(i)
                }
              }
            }(),
            scroll = function() {
              var e = {
                posCurr: 0,
                posLast: 0,
                posDiff: 0,
                skewAmmount: 0,
                skewMulti: 100
              };

              function t() {
                e.posCurr = global.elements.site.scrollTop, e.posLast = Math.floor(100 * global.lerp(e.posLast, e.posCurr, .1)) / 100, e.posDiff = e.posCurr - e.posLast, e.skewAmmount = e.posDiff / e.skewMulti, global.elements.container.style[global.transformPrefix] = "skewY(" + e.skewAmmount.toFixed(2) + "deg)", requestAnimationFrame(t)
              }
              return {
                init: function() {
                  requestAnimationFrame(t)
                }
              }
            }(),
            glitchLinks = function() {
              var o = {
                timeMin: 100,
                timeMax: 500,
                delayMin: 1e3,
                delayMax: 5e3
              };

              function r() {
                var e = global.elements.links[Math.floor(Math.random() * global.elements.links.length)],
                  t = e.getAttribute("data-text"),
                  n = baffle(e),
                  i = global.randomRange(o.timeMin, o.timeMax);
                n.reveal(i), setTimeout(function() {
                  e.textContent = t
                }, i), setTimeout(function() {
                  e.textContent = t, requestAnimationFrame(r)
                }, global.randomRange(o.delayMin, o.delayMax))
              }
              return {
                init: function() {
                  requestAnimationFrame(r)
                }
              }
            }(),
            glitchCanvas = function() {
              var i = {
                ctx: global.elements.portraitCanvas.getContext("2d"),
                image: null,
                imageData: null,
                imageSrc: global.elements.portraitCanvas.getAttribute("data-src"),
                imageLoaded: !1,
                sliceX: 0,
                sliceY: 0,
                sliceHeight: 0,
                minGlitches: 2,
                maxGlitches: 8,
                delayGlitchMin: 50,
                delayGlitchMax: 100,
                delayRestartMin: 1e3,
                delayRestartMax: 5e3
              };

              function e() {
                i.imageLoaded && (i.ctx.drawImage(i.image, 0, 0, global.elements.portraitCanvas.height, global.elements.portraitCanvas.height), setTimeout(function() {
                  requestAnimationFrame(function() {
                    ! function t(n) {
                      n < global.randomRange(i.minGlitches, i.maxGlitches) ? setTimeout(function() {
                        n++;
                        for (var e = 0; e < global.randomRange(i.minGlitches, i.maxGlitches); e++) o();
                        requestAnimationFrame(function() {
                          t(n)
                        })
                      }, global.randomRange(i.delayGlitchMin, i.delayGlitchMax)) : e()
                    }(0)
                  })
                }, global.randomRange(i.delayRestartMin, i.delayRestartMax)))
              }

              function t() {
                global.elements.portraitCanvas.width = global.options.windowHeight, global.elements.portraitCanvas.height = global.options.windowHeight, requestAnimationFrame(e)
              }

              function o() {
                i.sliceX = Math.round(Math.random() * (global.elements.portraitCanvas.height / 30) - 4), i.sliceY = Math.round(Math.random() * global.elements.portraitCanvas.height), i.sliceHeight = Math.round(Math.random() * (global.elements.portraitCanvas.height / 10) + 1), i.imageData = i.ctx.getImageData(0, i.sliceY, global.elements.portraitCanvas.width, i.sliceHeight), i.ctx.clearRect(0, i.sliceY, global.elements.portraitCanvas.width, i.sliceHeight), i.ctx.putImageData(i.imageData, i.sliceX, i.sliceY)
              }
              return {
                init: function() {
                  i.image = new Image, i.image.src = i.imageSrc, i.image.addEventListener("load", function() {
                    i.imageLoaded = !0, t()
                  })
                },
                redraw: t
              }
            }();
          window.addEventListener("resize", function() {
            null !== global.options.windowResizeTimer && clearTimeout(global.options.windowResizeTimer), global.options.windowResizeTimer = setTimeout(function() {
              global.updateWindow(), glitchCanvas.redraw()
            }, global.options.windowResizeTimeout)
          }, !1), window.addEventListener("load", function() {
            intro.init()
          }, !1), global.options.pointerFine.matches && cursor.init(), glitchCanvas.init(), scroll.init();
