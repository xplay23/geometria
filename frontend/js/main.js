/* Please, don't do shit-code  */
Element.prototype.closest || (Element.prototype.closest = function(t) { for (var e = this; e;) { if (e.matches(t)) return e;e = e.parentElement } return null });

Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector);

Object.assign || Object.defineProperty(Object, "assign", { enumerable: !1, configurable: !0, writable: !0, value: function(e) { "use strict"; if (null == e) throw new TypeError("Cannot convert first argument to object"); for (var t = Object(e), n = 1; n < arguments.length; n++) { var o = arguments[n]; if (null != o) for (var a = Object.keys(Object(o)), c = 0, b = a.length; c < b; c++) { var i = a[c], l = Object.getOwnPropertyDescriptor(o, i); void 0 !== l && l.enumerable && (t[i] = o[i]) } } return t } });

window.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = Array.prototype.forEach);

function $$(e, o, t) { "function" != typeof o ? o = o || document : (t = o, o = document); var c = o.querySelectorAll(e); return c = Array.prototype.slice.call(o.querySelectorAll(e)), "function" == typeof t && c.forEach(function(e, o, c) { t(e, o, c) }), c }

function addCss(r, s) { var a = function(r) { Object.assign(r.style, s) }; if (Array.isArray(r))
        for (var n = r.length - 1; n >= 0; n--) a(r[n]);
    else a(r) }

function getElementIndex(e) { for (var n = 0; e = e.previousElementSibling;) n++; return n }

function h_el(r) { return !!(Array.isArray(r) && r.length > 0) }

function debugging() { [].forEach.call($$("*"), function(n) { n.style.outline = "1px solid #" + (~~(Math.random() * (1 << 24))).toString(16) }) }


$$('.main_bnr__slider',el=>{
    const swiper = new Swiper(el, {
        pagination: {
            el: $$(".swiper-pagination",el)[0],
            type: 'bullets',
            clickable: true,
        },
    });
})

$$('.our_clients__slider',el=>{
    const swiper = new Swiper(el, {
        slidesPerView: 2,
        grid: {
            rows: 3,
            fill: "row",
        },
        spaceBetween: 30,
        navigation: {
            nextEl: $$(".swiper-button-next",el)[0],
            prevEl: $$(".swiper-button-prev",el)[0],
        },
        pagination: {
            el: $$(".swiper-pagination",el)[0],
            type: 'bullets',
            clickable: true,
            dynamicBullets: true,
        },
        breakpoints: {
            769: {
                slidesPerView: 4,
                grid: {
                    rows: 2,
                    fill: "row",
                },
            }
        }
    });
})


$$('.testimonials__slider',el=>{
    const swiper = new Swiper(el, {
        pagination: {
            el: $$(".swiper-pagination",el)[0],
            dynamicBullets: true,
            clickable: true,
        },
        effect: "coverflow",
        centeredSlides: true,
        slidesPerView: 2,
        spaceBetween: 10,
        coverflowEffect: {
            rotate: 30,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
        },
        breakpoints: {
            769: {
                slidesPerView: 3,
                spaceBetween: 30,
            }
        }
      });
})