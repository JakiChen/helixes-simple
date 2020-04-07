(window.webpackJsonp = window.webpackJsonp || []).push([
    [11], {
        312: function(e, t, o) {
            "use strict";
            var n = o(29),
                r = o(30),
                l = function() {
                    function e(t) {
                        Object(n.a)(this, e), this.opts = t || {}, this.elem = 0 === document.querySelectorAll(this.opts.elem).length ? document.querySelectorAll(".js-helix-wave") : document.querySelectorAll(this.opts.elem), this.resolution = this.opts.resolution || window.devicePixelRatio > 1 ? this.resolution = 2 : this.resolution = 1, this.colors = this.opts.colors || ["#7C4DFF", "#448AFF", "#1DE9B6"], this.diff = this.opts.diff || 1, this.amplitude = this.opts.amplitude * this.resolution || 5 * this.resolution, this.frequency = this.opts.frequency * this.resolution || 10 * this.resolution, this.wavelength = this.opts.wavelength * this.resolution || 40 * this.resolution, this.lineWidth = this.opts.lineWidth * this.resolution || 1 * this.resolution, this.lineInterval = this.opts.lineInterval * this.resolution || 20 * this.resolution, this.lineShift = this.opts.lineShift * this.resolution || 0, this.colors.reverse(), this.frames = 0, this.helixes = [], this.canvases = [], this.ctxs = [], this.init()
                    }
                    return Object(r.a)(e, [{
                        key: "init",
                        value: function() {
                            this.initObserver(), this.handleEvents(), this.createCanvas(), this.updateCanvas()
                        }
                    }, {
                        key: "initObserver",
                        value: function() {
                            this.observer = new IntersectionObserver(this.observer.bind(this), this.inViewOptions);
                            for (var i = 0; this.elem.length > i; i++) {
                                var e = this.elem[i];
                                this.observer.observe(e)
                            }
                        }
                    }, {
                        key: "observer",
                        value: function(e) {
                            for (var i = 0; e.length > i; i++) {
                                var t = e[i],
                                    o = t.target;
                                switch (t.isIntersecting) {
                                    case !0:
                                        o.isInView = !0;
                                        break;
                                    case !1:
                                        o.isInView = !1
                                }
                            }
                        }
                    }, {
                        key: "destroyObserver",
                        value: function() {
                            if (this.observer) {
                                for (var i = 0; this.elem.length > i; i++) {
                                    var e = this.elem[i];
                                    this.observer.disconnect(e)
                                }
                                this.observer = null
                            }
                        }
                    }, {
                        key: "createCanvas",
                        value: function() {
                            for (var i = 0; i < this.elem.length; i++) {
                                var e = this.elem[i],
                                    canvas = document.createElement("canvas"),
                                    t = canvas.getContext("2d");
                                this.canvases.push(canvas), this.ctxs.push(t), e.appendChild(canvas), t.clearRect(0, 0, canvas.width, canvas.height)
                            }
                        }
                    }, {
                        key: "updateCanvas",
                        value: function() {
                            for (var i = 0; i < this.elem.length; i++) {
                                var e = this.elem[i],
                                    canvas = this.canvases[i],
                                    t = this.ctxs[i];
                                2 === this.resolution && t.scale(.5, .5), canvas.width = e.clientWidth * this.resolution, canvas.height = e.clientHeight * this.resolution, canvas.setAttribute("style", "display: block; width: ".concat(canvas.width / this.resolution, "px; height: ").concat(canvas.height / this.resolution, "px;")), canvas.classList.add("helix-wave-".concat(i + 1));
                                var o = canvas.width / 2 * this.diff,
                                    n = .5 * canvas.width,
                                    r = .5 * canvas.height;
                                canvas.diffX = o, canvas.posX = n, canvas.posY = r, t.fillRect(0, 0, canvas.width, canvas.height), t.moveTo(n, r)
                            }
                        }
                    }, {
                        key: "destroyCanvas",
                        value: function() {
                            for (var i = 0; i < this.elem.length; i++) {
                                var e = this.elem[i],
                                    canvas = this.canvases[i];
                                this.ctxs[i].clearRect(0, 0, canvas.width, canvas.height), e.removeChild(canvas), this.elem.length === i && (this.elem = null, this.canvases = null, this.ctxs = null)
                            }
                        }
                    }, {
                        key: "tick",
                        value: function() {
                            for (var i = 0; i < this.elem.length; i++) {
                                var e = this.elem[i],
                                    canvas = this.canvases[i],
                                    t = this.ctxs[i];
                                if (t.clearRect(0, 0, canvas.width, canvas.height), e.isInView)
                                    for (var o = 0; o < this.colors.length; o++) {
                                        t.beginPath(), t.lineCap = "round", t.strokeStyle = this.colors[o], t.lineWidth = this.lineWidth;
                                        for (var n = canvas.posX - canvas.diffX - this.lineShift * (o - 1); n < canvas.width / 2 + canvas.diffX; n++) {
                                            var r = this.calcPosY(n, o * this.lineInterval);
                                            t.lineTo(n, r + canvas.posY)
                                        }
                                        t.stroke()
                                    }
                            }
                            this.frames -= .5 * this.resolution
                        }
                    }, {
                        key: "calcPosY",
                        value: function(e, t) {
                            return Math.sin(e / this.wavelength * (2 * Math.PI) + (this.frames - t) / this.frequency) * this.amplitude
                        }
                    }, {
                        key: "handleEvents",
                        value: function() {
                            this.raf = this.tick.bind(this), this.start()
                        }
                    }, {
                        key: "removeEvents",
                        value: function() {
                            this.stop()
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            var e = this;
                            this.removeEvents(), this.destroyObserver(), requestTimeout((function() {
                                e.destroyCanvas()
                            }), 240)
                        }
                    }, {
                        key: "start",
                        value: function() {
                            gsap.ticker.add(this.raf)
                        }
                    }, {
                        key: "stop",
                        value: function() {
                            gsap.ticker.remove(this.raf)
                        }
                    }]), e
                }();
            t.a = l
        },
        337: function(e, t, o) {
            var content = o(385);
            "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, o(13).default)("1b0bd606", content, !0, {
                sourceMap: !1
            })
        },
        338: function(e, t) {
            e.exports = function(e) {
                e.options.__i18n = e.options.__i18n || [], e.options.__i18n.push('{"ja":{"title":"Helixes Inc.","solutions":"Helixesは、クリエイティビティを用いてブランドの課題を解決します。型にはまらない発想と精錬されたアウトプット、自社事業にて積み重ねた知識と知恵を以て、世の中を前進させるソリューションを提案します。","creative":"グラフィック、映像、デジタルなど目的に最適なクリエイティブを用いて、ブランドに新たなストーリーを紡ぎます。","services":"異なる領域で複数の事業を展開。クリエイティブワークの知見を活かし、社会を前へ進める事業を創出しています。"},"en":{"title":"Helixes Inc.","solutions":"Helixes solves brand issues with creativity. We provide solutions which advance the world with unconventional ideas, refined output and knowledge and wisdom accumulated through our own businesses.","creative":"We spin new stories for brands through ideal creative for the purpose such as graphics, images, digital and so on.","services":"We develop multiple businesses in various fields. We create businesses which advance society by utilizing knowledge of creative works."}}'), delete e.options._Ctor
            }
        },
        384: function(e, t, o) {
            "use strict";
            var n = o(337);
            o.n(n).a
        },
        385: function(e, t, o) {
            (t = o(12)(!1)).push([e.i, '.p-home .home-hero[data-v-2cc2634d]{position:relative;width:100%;height:auto}.p-home .home-hero .hero-height[data-v-2cc2634d]{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;-ms-flex-line-pack:end;align-content:flex-end;width:100%;height:100vh;height:calc(var(--vh)*100);padding-top:calc(50px + 12.5vw);padding-bottom:8.33333vw}.p-home .home-hero .hero-height[data-v-2cc2634d]:after{content:"";position:absolute;left:0;bottom:0;width:100%;height:16.66667vw;background:-webkit-gradient(linear,left bottom,left top,from(#fff),to(hsla(0,0%,100%,0)));background:linear-gradient(0deg,#fff,hsla(0,0%,100%,0));z-index:-1;pointer-events:none}.p-home .home-hero .home-hero-inner[data-v-2cc2634d]{position:relative;margin:0 auto;padding:0 13.125vw}.p-home .home-hero .home-hero-body[data-v-2cc2634d]{position:relative;width:100%}.p-home .home-hero .home-hero-ttl[data-v-2cc2634d]{padding-right:16.66667vw;color:transparent;font-size:calc(3.2rem + (3200vw - 19200px)/1000);font-family:HK Nova,sans-serif;line-height:1.18;letter-spacing:0}.p-home .home-solutions[data-v-2cc2634d]{position:relative;width:100%;background:#fff;padding:8.33333vw 12.5vw 0}.p-home .home-solutions .go-forward[data-v-2cc2634d]{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;white-space:nowrap}.p-home .home-solutions .go-forward .txt[data-v-2cc2634d]{font-size:calc(7.2rem + (12800vw - 76800px)/1000);font-weight:500;font-family:HK Nova,sans-serif}.p-home .home-solutions .go-forward .txt.ol[data-v-2cc2634d]{color:transparent;-webkit-text-stroke:silver;-webkit-text-stroke-width:1px}.p-home .home-solutions .helix-wave[data-v-2cc2634d]{margin:0 50px}.p-home .home-solutions .home-solutions-txts[data-v-2cc2634d]{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;position:relative;margin:120px auto 0;max-width:1416px}.p-home .home-solutions .home-solutions-ttl[data-v-2cc2634d]{color:#111;font-size:calc(4.5rem + (300vw - 1800px)/1000);font-family:HK Nova,sans-serif;font-weight:400;letter-spacing:0;width:33.95833vw;text-align:right;padding-top:.25em;padding-right:13.75vw}.p-home .home-solutions .home-solutions-txts-body[data-v-2cc2634d]{position:relative;width:50%}.p-home .home-solutions .home-solutions-txt[data-v-2cc2634d]{font-size:calc(1.8rem + (200vw - 1200px)/1000);font-weight:400;line-height:2;margin-bottom:2em;padding-right:4.79167vw}.p-home .m-solutions-method[data-v-2cc2634d]{padding-top:16.66667vw}.p-home .home-news[data-v-2cc2634d]{position:relative;width:100%;padding:16.66667vw 0 12.5vw;background:#fff}.p-home .home-news .home-news-header[data-v-2cc2634d]{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;margin-bottom:120px;padding:0 17.29167vw}.p-home .home-news .home-news-header .ttl[data-v-2cc2634d]{color:#111;font-size:calc(6.8rem + (400vw - 2400px)/1000);font-family:HK Nova,sans-serif;font-weight:400;letter-spacing:0;position:relative}.p-home .home-news .home-news-header .drag-to[data-v-2cc2634d]{color:#a0a0a0;font-size:1.6rem;font-family:HK Nova,sans-serif;letter-spacing:0}.p-home .home-news .home-news-body[data-v-2cc2634d]{position:relative;width:100%}.p-home .home-news .home-news-slider[data-v-2cc2634d]{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap;width:224.99998vw;padding:0 8.33333vw;height:auto;pointer-events:auto;cursor:-webkit-grab;cursor:grab}.p-home .home-news .home-news-article[data-v-2cc2634d]{position:relative;width:32.08333vw;min-width:32.08333vw;height:auto;margin:0 4.79167vw;text-align:center;visibility:hidden}.p-home .home-news .home-news-article.is-active[data-v-2cc2634d]{visibility:visible}.p-home .home-news .home-news-slider.is-dragging[data-v-2cc2634d]{cursor:-webkit-grabbing;cursor:grabbing}.p-home .home-news .home-news-slider.is-dragging .home-news-article[data-v-2cc2634d]{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;will-change:transform}.p-home .home-news .home-news-article-body[data-v-2cc2634d]{position:relative;display:block;width:100%;cursor:pointer;pointer-events:auto}.p-home .home-news .home-news-slider.is-dragging .home-news-article-body[data-v-2cc2634d]{cursor:-webkit-grabbing;cursor:grabbing}.p-home .home-news .home-news-article-thumb-ratio[data-v-2cc2634d]{position:relative;display:block;width:100%;padding-top:62.5%}.p-home .home-news .home-news-article-thumb[data-v-2cc2634d]{position:absolute;top:0;left:0;display:block;width:100%;height:100%}.p-home .home-news .home-news-article-img-wrap[data-v-2cc2634d]{position:relative;width:100%;height:100%;-ms-touch-action:pan-x;touch-action:pan-x}.p-home .home-news .home-news-article-img[data-v-2cc2634d]{position:relative;display:block;width:100%;height:100%;opacity:0;visibility:hidden;-o-object-fit:cover;object-fit:cover}.p-home .home-news .home-news-article-ttl-set[data-v-2cc2634d]{position:relative;width:100%;margin-top:2em;text-align:left}.p-home .home-news .home-news-article-meta[data-v-2cc2634d]{position:relative;margin-top:1em}.p-home .home-news .home-news-article-ttl-set .date[data-v-2cc2634d]{display:block;color:#a0a0a0;font-size:calc(1.6rem + (200vw - 1200px)/1000);font-weight:400;font-family:HK Nova,sans-serif;letter-spacing:0}.p-home .home-news .home-news-article-ttl-set .ttl[data-v-2cc2634d]{position:relative;padding-right:4.16667vw;font-size:calc(2.4rem + (400vw - 2400px)/1000);font-weight:500;line-height:1.5}.p-home .ui-scroll-down[data-v-2cc2634d]{position:absolute;bottom:.75em;right:0;text-align:right}[lang=en] .p-home .home-solutions .home-solutions-ttl[data-v-2cc2634d]{padding-top:0}[lang=en] .p-home .home-solutions .home-solutions-txt[data-v-2cc2634d]{font-family:HK Grotesk Pro,sans-serif;font-weight:400;line-height:1.7;letter-spacing:.005em}[lang=en] .p-home .home-news .home-news-article-ttl-set .ttl[data-v-2cc2634d]{font-family:HK Nova,sans-serif;font-weight:500;line-height:1.5;letter-spacing:0}@media only screen and (min-width:1920px){.p-home .home-hero .hero-height[data-v-2cc2634d]{padding-bottom:160px}.p-home .home-solutions .home-solutions-ttl[data-v-2cc2634d]{font-size:4.896rem}.p-home .home-solutions .home-solutions-txt[data-v-2cc2634d]{font-size:2.064rem}.p-home .home-news .home-news-header .ttl[data-v-2cc2634d]{font-size:7.328rem}.p-home .home-news .home-news-article-ttl-set .ttl[data-v-2cc2634d]{font-size:2.928rem}.p-home .home-news .home-news-article-ttl-set .date[data-v-2cc2634d]{font-size:1.864rem}.p-home .home-solutions .home-solutions-ttl[data-v-2cc2634d]{width:652px}.p-home .home-solutions .home-solutions-txts-body[data-v-2cc2634d]{width:708px}}@media only screen and (max-width:1024px){.p-home .home-solutions .home-solutions-ttl[data-v-2cc2634d]{color:#111;font-size:calc(3rem + (200vw - 1200px)/1000);font-family:HK Nova,sans-serif;font-weight:400;letter-spacing:0}}@media only screen and (max-width:1024px) and (orientation:portrait){.p-home .home-hero .hero-height[data-v-2cc2634d]{height:calc(var(--vh)*100 - 230px)}.p-home .home-hero .home-hero-ttl[data-v-2cc2634d]{font-size:calc(4.2rem + (400vw - 2720px)/344)}.p-home .home-solutions[data-v-2cc2634d]{padding-right:0}.p-home .home-news .home-news-header .ttl[data-v-2cc2634d]{font-size:calc(4.2rem + (400vw - 2720px)/344)}}@media only screen and (max-width:680px){.p-home .home-hero .hero-height[data-v-2cc2634d]{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;height:calc(100vh - 120px);height:calc(var(--vh)*100 - 120px);padding-top:120px;padding-bottom:0}.p-home .home-hero .hero-height[data-v-2cc2634d]:after{height:120px}.p-home .home-hero .home-hero-inner[data-v-2cc2634d]{padding:0 40px}.p-home .home-hero .home-hero-ttl[data-v-2cc2634d]{padding-right:0;font-size:3.2rem;line-height:1.18}.p-home .home-hero .ui-scroll-down[data-v-2cc2634d]{font-size:2rem;bottom:-60px}.p-home .home-solutions[data-v-2cc2634d]{padding:24px 40px 0}.p-home .home-solutions .go-forward[data-v-2cc2634d]{position:relative;left:70px}.p-home .home-solutions .go-forward .txt[data-v-2cc2634d]{font-size:7.2rem;height:1em}.p-home .home-solutions .helix-wave[data-v-2cc2634d]{margin:0 15px}.p-home .home-solutions .home-solutions-txts[data-v-2cc2634d]{margin-top:60px}.p-home .home-solutions .home-solutions-txts-body[data-v-2cc2634d]{max-width:100%;width:100%}.p-home .home-solutions .home-solutions-ttl[data-v-2cc2634d]{width:100%;margin-bottom:30px;padding-right:0;text-align:left}.p-home .home-solutions .home-solutions-txt[data-v-2cc2634d]{width:100%;padding-right:0;font-size:1.6rem;line-height:1.8}.p-home .m-solutions-method[data-v-2cc2634d]{padding-top:120px}.p-home .home-news[data-v-2cc2634d]{padding:120px 0}.p-home .home-news .home-news-header[data-v-2cc2634d]{-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;margin-bottom:60px;padding:0 40px}.p-home .home-news .home-news-header .ttl[data-v-2cc2634d]{font-size:4.8rem}.p-home .home-news .home-news-header .drag-to[data-v-2cc2634d]{display:none}.p-home .home-news .home-news-slider[data-v-2cc2634d]{width:calc(500vw - 240px);padding:0 40px 0 30px}.p-home .home-news .home-news-article[data-v-2cc2634d]{width:calc(100vw - 80px);min-width:calc(100vw - 80px);margin:0 10px}.p-home .home-news .home-news-article-ttl-set[data-v-2cc2634d]{margin-top:1.5em}.p-home .home-news .home-news-article-ttl-set .ttl[data-v-2cc2634d]{font-size:2rem;padding-right:1em}}', ""]), e.exports = t
        },
        386: function(e, t, o) {
            "use strict";
            var n = o(338),
                r = o.n(n);
            t.default = r.a
        },
        402: function(e, t, o) {
            "use strict";
            o.r(t);
            o(23), o(14), o(11), o(6), o(19), o(32);
            var n = o(4),
                r = (o(35), o(5)),
                l = o(9),
                h = o(312),
                d = (o(24), o(51), o(29)),
                c = o(30),
                v = function() {
                    function e(t) {
                        Object(d.a)(this, e), this.opts = t || {}, this.wrapper = document.querySelector(this.opts.wrapper) || document.querySelector("[data-drag-slider-wrapper]"), this.elem = document.querySelectorAll(this.opts.elem) || document.querySelectorAll("[data-drag-slider]"), this.easing = this.opts.easing || .125, this.dragSpeed = this.opts.dragSpeed || 1, this.duration = this.opts.duration || 750, this.isActive = !1, this.isMouseDown = !1, this.isTranslating = !1, this.isSliderHover = !1, this.isDragging = !1, this.currentPosition = 0, this.startPosition = 0, this.endPosition = 0, this.translation = 0, this.dragEffectMax = 24, this.dragEffect = 0, this.dragProgress = 0, this.mousePointer = document.querySelector("[data-mp]"), this.svgProgress = document.getElementById("js-svg-progress-path"), this.svgProgressLength = 226.22259521484375, this.init()
                    }
                    return Object(c.a)(e, [{
                        key: "init",
                        value: function() {
                            this.setWrapperBoundaries(), this.handleEvents(), this.isActive = !0
                        }
                    }, {
                        key: "lerp",
                        value: function(e, t, o) {
                            return e + (t - e) * o
                        }
                    }, {
                        key: "getMousePosition",
                        value: function(e) {
                            return [mouse.x, mouse.y]
                        }
                    }, {
                        key: "getTranslateMatrix",
                        value: function(e) {
                            var t = {};
                            if (window.getComputedStyle) {
                                var style = getComputedStyle(e),
                                    o = style.transform || style.webkitTransform || style.mozTransform,
                                    n = o.match(/^matrix3d\((.+)\)$/);
                                return n ? parseFloat(n[1].split(", ")[13]) : (n = o.match(/^matrix\((.+)\)$/), t.x = n ? parseFloat(n[1].split(", ")[4]) : 0, t.y = n ? parseFloat(n[1].split(", ")[5]) : 0, t)
                            }
                        }
                    }, {
                        key: "setTransform",
                        value: function(e, t) {
                            e.style.webkitTransform = t, e.style.msTransform = t, e.style.transform = t
                        }
                    }, {
                        key: "setWrapperBoundaries",
                        value: function() {
                            this.containerBoundaries = {
                                max: -1 * this.wrapper.clientWidth + window.innerWidth,
                                min: 0,
                                sliderSize: this.wrapper.clientWidth,
                                referentSize: window.innerWidth
                            }
                        }
                    }, {
                        key: "translateSlider",
                        value: function(e) {
                            var t = Math.floor(100 * e) / 100;
                            t >= -.08 && (t = 0);
                            for (var i = 0; i < this.elem.length; i++) {
                                var o = this.elem[i];
                                this.setTransform(o, "matrix(1, 0, 0, 1, ".concat(t, ", 0"))
                            }
                            this.dragEffectForce(t), this.dragProgressUpdate(t), this.translation = t
                        }
                    }, {
                        key: "dragEffectForce",
                        value: function(e) {
                            this.dragEffect >= 0 ? this.dragEffect = Math.max(0, this.dragEffect - 2) : this.dragEffect = Math.min(0, this.dragEffect + 2), this.lastDragValue = this.dragValue, this.dragValue = e;
                            var t = this.dragValue - this.lastDragValue;
                            t > this.dragEffectMax ? t = this.dragEffectMax : t < -this.dragEffectMax && (t = -this.dragEffectMax), Math.abs(t) > Math.abs(this.dragEffect) && (this.dragEffect = t)
                        }
                    }, {
                        key: "dragProgressUpdate",
                        value: function(e) {
                            var progress = Math.abs(e / (this.containerBoundaries.sliderSize - this.containerBoundaries.referentSize)) * this.svgProgressLength;
                            this.dragProgress = Math.floor(100 * progress) / 100, this.svgProgress.style.strokeDashoffset = this.svgProgressLength - this.dragProgress
                        }
                    }, {
                        key: "onMouseDown",
                        value: function(e) {
                            var t = e.touches ? e.touches[0] : e;
                            this.isMouseDown = !0, this.wrapper.classList.add("is-dragging"), this.mousePointer.classList.add("is-dragging"), this.startPosition = t.clientX
                        }
                    }, {
                        key: "onMouseMove",
                        value: function(e) {
                            if (this.isMouseDown && this.isSliderHover) {
                                var t = e.touches ? e.touches[0] : e;
                                this.currentPosition = this.endPosition + (t.clientX - this.startPosition) * this.dragSpeed, Math.abs(mouse.x - this.startPosition) > 20 && !this.isDragging && (this.isDragging = !0), this.currentPosition > this.containerBoundaries.min && this.currentPosition < this.containerBoundaries.max ? this.isTranslating = !0 : (this.currentPosition = Math.min(this.currentPosition, this.containerBoundaries.min), this.currentPosition = Math.max(this.currentPosition, this.containerBoundaries.max))
                            }
                        }
                    }, {
                        key: "onMouseUp",
                        value: function(e) {
                            this.isMouseDown = !1, this.endPosition = this.currentPosition, this.wrapper.classList.remove("is-dragging"), this.mousePointer.classList.remove("is-dragging"), this.onSliderLeave(e)
                        }
                    }, {
                        key: "onResize",
                        value: function(e) {
                            this.translation, this.containerBoundaries.sliderSize;
                            this.setWrapperBoundaries();
                            for (var i = 0; i < this.elem.length; i++) {
                                var t = this.elem[i];
                                this.setTransform(t, "matrix(1, 0, 0, 1, 0, 0")
                            }
                            this.translateSlider(0), this.currentPosition = 0, this.endPosition = 0
                        }
                    }, {
                        key: "onSliderEnter",
                        value: function(e) {
                            this.isSliderHover || (this.isSliderHover = !0)
                        }
                    }, {
                        key: "onSliderLeave",
                        value: function(e) {
                            var t = this;
                            this.isSliderHover && (this.isSliderHover = !1, requestTimeout((function() {
                                t.isDragging = !1
                            }), 5))
                        }
                    }, {
                        key: "tick",
                        value: function() {
                            var e = this.lerp(this.translation, this.currentPosition, this.easing);
                            this.translateSlider(e)
                        }
                    }, {
                        key: "handleEvents",
                        value: function() {
                            this.raf = this.tick.bind(this), this.resize = this.onResize.bind(this), this.mousedown = this.onMouseDown.bind(this), this.mousemove = this.onMouseMove.bind(this), this.mouseup = this.onMouseUp.bind(this), this.sliderenter = this.onSliderEnter.bind(this), this.sliderleave = this.onSliderLeave.bind(this), document.body.addEventListener("mousedown", this.mousedown, {
                                passive: !0
                            }), document.body.addEventListener("mousemove", this.mousemove, {
                                passive: !0
                            }), document.body.addEventListener("mouseup", this.mouseup), window.addEventListener("touchstart", this.mousedown, {
                                passive: !0
                            }), window.addEventListener("touchmove", this.mousemove, {
                                passive: !0
                            }), window.addEventListener("touchend", this.mouseup), this.wrapper.addEventListener("mouseenter", this.sliderenter, {
                                passive: !0
                            }), this.wrapper.addEventListener("mousemove", this.sliderenter, {
                                passive: !0
                            }), this.wrapper.addEventListener("mouseleave", this.sliderleave), this.wrapper.addEventListener("touchstart", this.sliderenter, {
                                passive: !0
                            }), this.wrapper.addEventListener("touchmove", this.sliderenter, {
                                passive: !0
                            }), this.wrapper.addEventListener("touchend", this.sliderleave)
                        }
                    }, {
                        key: "removeEvents",
                        value: function() {
                            document.body.removeEventListener("mousedown", this.mousedown, {
                                passive: !0
                            }), document.body.removeEventListener("mousemove", this.mousemove, {
                                passive: !0
                            }), document.body.removeEventListener("mouseup", this.mouseup), window.removeEventListener("touchstart", this.mousedown, {
                                passive: !0
                            }), window.removeEventListener("touchmove", this.mousemove, {
                                passive: !0
                            }), window.removeEventListener("touchend", this.mouseup), this.wrapper.removeEventListener("mouseenter", this.sliderenter, {
                                passive: !0
                            }), this.wrapper.removeEventListener("mousemove", this.sliderenter, {
                                passive: !0
                            }), this.wrapper.removeEventListener("mouseleave", this.sliderleave)
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.stop(), this.removeEvents(), this.isActive = !1, this.isMouseDown = !1, this.isTranslating = !1, this.isSliderHover = !1, this.isDragging = !1, this.currentPosition = 0, this.startPosition = 0, this.endPosition = 0, this.translation = 0
                        }
                    }, {
                        key: "start",
                        value: function() {
                            gsap.ticker.add(this.raf)
                        }
                    }, {
                        key: "stop",
                        value: function() {
                            gsap.ticker.remove(this.raf)
                        }
                    }]), e
                }();

            function m(object, e) {
                var t = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(object);
                    e && (o = o.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(object, e).enumerable
                    }))), t.push.apply(t, o)
                }
                return t
            }
            var f, w = {
                    asyncData: (f = Object(r.a)(regeneratorRuntime.mark((function e(t) {
                        var o, n, r;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return o = t.app, n = t.store, e.next = 3, o.$api.getPostsPerPage({
                                        lang: n.$i18n.locale,
                                        page: 1,
                                        per_page: 5
                                    });
                                case 3:
                                    return r = e.sent, e.abrupt("return", {
                                        posts: r.data
                                    });
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))), function(e) {
                        return f.apply(this, arguments)
                    }),
                    data: function() {
                        return {
                            title: this.$t.bind(this)("title"),
                            description: "ja" === this.$i18n.locale ? "株式会社Helixesは、クリエイティブを用いて課題を解決する、トータルプランニングカンパニーです。広告制作をはじめ、ブランドやデジタルプロダクトの開発、アーティストマネジメントなど、枠にとらわれない様々なモノ、コトを総合的に企画・運営しています。" : "Helixes Inc. is a planning company uses creativity to solve problems. We integrate strategy, creativity and experience to build brands.",
                            className: "home",
                            copy: "We integrate strategy, creativity and experience to build brands.",
                            helixWave: null,
                            isVideoLoaded: {
                                videoCreative: !1,
                                videoServices: !1
                            },
                            video: {
                                creative: {
                                    movie: "",
                                    poster: ""
                                },
                                services: {
                                    movie: "",
                                    poster: ""
                                }
                            }
                        }
                    },
                    head: function() {
                        return {
                            title: this.title,
                            titleTemplate: "Helixes Inc.",
                            htmlAttrs: {
                                lang: this.$i18n.locale
                            },
                            bodyAttrs: {
                                class: this.className
                            },
                            meta: [{
                                hid: "description",
                                name: "description",
                                content: this.description
                            }, {
                                hid: "twitter:title",
                                property: "twitter:title",
                                content: this.title
                            }, {
                                hid: "twitter:description",
                                property: "twitter:description",
                                content: this.description
                            }, {
                                hid: "og:title",
                                property: "og:title",
                                content: this.title
                            }, {
                                hid: "og:description",
                                property: "og:description",
                                content: this.description
                            }, {
                                hid: "itemprop:name",
                                itemprop: "name",
                                content: this.title
                            }, {
                                hid: "itemprop:description",
                                itemprop: "description",
                                content: this.description
                            }]
                        }
                    },
                    computed: function(e) {
                        for (var i = 1; i < arguments.length; i++) {
                            var source = null != arguments[i] ? arguments[i] : {};
                            i % 2 ? m(Object(source), !0).forEach((function(t) {
                                Object(n.a)(e, t, source[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : m(Object(source)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                            }))
                        }
                        return e
                    }({}, Object(l.b)({
                        loaded: "loaded",
                        user: "user",
                        page: "page"
                    })),
                    watch: {
                        loaded: function(e) {
                            e && this.init("first")
                        }
                    },
                    beforeMount: function() {
                        $g.fn.utility.resetScrollPosition(), $g.fn.utility.setViewportHeight()
                    },
                    mounted: function() {
                        var e = this;
                        this.$nextTick((function() {
                            e.setData(), $g.fn.utility.updateViewType(), $g.fn.utility.staggerElement(".home-hero-ttl"), fakeScroll.isActive && fakeScroll.update(), e.$eventHub.$emit("helixSetState", !0), e.helixWave = new h.a($g.configs.helixWaveSettings()), e.loadVideo(), detect.webp && e.replaceWebP(), $g.slider = new v({
                                wrapper: "#js-home-news-slider",
                                elem: ".home-news-article",
                                ease: .075,
                                duration: 500,
                                dragSpeed: 1.75
                            });
                            var t = {
                                slider: function(e, t) {
                                    $g.slider.isActive && (t ? $g.slider.start() : $g.slider.stop())
                                }
                            };
                            observer.init(Object.assign($g.configs.observerSettings, {
                                call: t
                            })), e.loaded && e.init("default"), e.$eventHub.$on("onScroll", e.onScroll), e.$eventHub.$on("onResize", e.onResize), e.$eventHub.$on("onWindowOut", e.onWindowOut)
                        }))
                    },
                    beforeDestroy: function() {
                        $g.slider.destroy(), $g.slider = null, observer.destroy(), this.helixWave.destroy(), this.$eventHub.$emit("glDestroy", {
                            delay: .2
                        }), this.$eventHub.$off("onScroll", this.onScroll), this.$eventHub.$off("onResize", this.onResize), this.$eventHub.$off("onWindowOut", this.onWindowOut)
                    },
                    methods: {
                        setData: function() {
                            this.video = {
                                creative: {
                                    movie: $g.path.video.solutions.creative.movie,
                                    poster: $g.path.video.solutions.creative.poster
                                },
                                services: {
                                    movie: $g.path.video.solutions.services.movie,
                                    poster: $g.path.video.solutions.services.poster
                                }
                            }
                        },
                        init: function(e) {
                            switch (e) {
                                case "first":
                                    $g.fn.utility.staggerAnimation({
                                        el: ".home-hero-ttl",
                                        delay: .85
                                    }), this.$eventHub.$emit("helixFadeIn", {
                                        delay: 1.35,
                                        pageName: this.page.name
                                    }), this.$eventHub.$emit("glInit"), this.$eventHub.$emit("glTick"), requestTimeout((function() {
                                        $g.fn.utility.setFooterTop(), fakeScroll.isActive && fakeScroll.update()
                                    }), 300), ua.windows && $g.fn.utility.windowsUpdate(450);
                                    break;
                                default:
                                    $g.fn.utility.staggerAnimation({
                                        el: ".home-hero-ttl",
                                        delay: .2
                                    }), this.$eventHub.$emit("glReInit"), this.$eventHub.$emit("glTick"), requestTimeout((function() {
                                        $g.fn.utility.setFooterTop(), fakeScroll.isActive && fakeScroll.update()
                                    }), 300), ua.windows && $g.fn.utility.windowsUpdate(450)
                            }
                        },
                        replaceWebP: function() {
                            $g.el(".home-news-article-img-wrap").forEach((function(e, t) {
                                var o = e.getAttribute("data-gl-src"),
                                    n = "".concat(o, ".webp");
                                e.setAttribute("data-gl-src", n)
                            }))
                        },
                        loadVideo: function() {
                            var e = this;
                            this.$refs.videoCreative.load(), this.$refs.videoServices.load(), this.$refs.videoCreative.addEventListener("loadeddata", (function() {
                                e.isVideoLoaded.videoCreative = !0
                            })), this.$refs.videoServices.addEventListener("loadeddata", (function() {
                                e.isVideoLoaded.videoServices = !0
                            }))
                        },
                        playVideo: function(e) {
                            this.user.desktop && void 0 !== this.$refs[e] && this.isVideoLoaded[e] && this.$refs[e].play()
                        },
                        pauseVideo: function(e) {
                            this.user.desktop && void 0 !== this.$refs[e] && this.isVideoLoaded[e] && this.$refs[e].pause()
                        },
                        glHoverIn: function(e) {
                            var t = e.isChild,
                                o = e.el,
                                n = e.evt;
                            if (this.user.desktop && $g.slider && !$g.slider.isDragging) {
                                var r = "self" === o ? n.target : t ? n.target.querySelector(o) : document.querySelector(o);
                                this.$eventHub.$emit("glHoverIn", r)
                            }
                        },
                        glHoverOut: function(e) {
                            var t = e.isChild,
                                o = e.el,
                                n = e.evt;
                            if (this.user.desktop && $g.slider && !$g.slider.isDragging) {
                                var r = "self" === o ? n.target : t ? n.target.querySelector(o) : document.querySelector(o);
                                this.$eventHub.$emit("glHoverOut", r)
                            }
                        },
                        onScroll: function(e) {
                            e._y;
                            e.y > e.height ? (this.$eventHub.$emit("helixSetState", !1), this.$eventHub.$emit("helixStop")) : (this.$eventHub.$emit("helixSetState", !0), this.$eventHub.$emit("helixStart"))
                        },
                        onResize: function(e) {
                            e.width, e.height;
                            $g.slider.isActive && $g.slider.onResize()
                        },
                        onWindowOut: function(e) {
                            e.pointer, e.x, e.y;
                            $g.slider.isActive && ($g.slider.onMouseUp(), $g.slider.onSliderLeave())
                        },
                        goTo: function(e) {
                            $g.slider && $g.slider.isActive && $g.slider.isDragging || this.$router.push({
                                path: e
                            })
                        },
                        scrollToElement: function(e) {
                            var t = e.id;
                            e.duration, e.ease;
                            $g.fn.utility.scrollToElement({
                                id: t
                            })
                        }
                    },
                    transition: {
                        mode: "out-in",
                        css: !1,
                        beforeEnter: function(e) {
                            this.$store.getters.loaded && $g.fn.transition.beforeEnter({
                                el: e
                            })
                        },
                        enter: function(e, t) {
                            var o = this;
                            this.$store.getters.loaded && (requestTimeout((function() {
                                requestTimeout((function() {
                                    o.$store.dispatch("maskOff")
                                }), 250)
                            }), 250), $g.fn.transition.enter({
                                el: e,
                                done: t
                            }))
                        },
                        leave: function(e, t) {
                            if (this.$store.getters.loaded) {
                                this.$store.dispatch("maskOn"), $g.fn.transition.leave({
                                    el: e,
                                    done: t,
                                    callback: function() {}
                                })
                            }
                        }
                    }
                },
                x = (o(384), o(8)),
                y = o(386),
                component = Object(x.a)(w, (function() {
                    var e = this,
                        t = e.$createElement,
                        o = e._self._c || t;
                    return o("div", {
                        class: "p-" + e.className
                    }, [o("section", {
                        class: e.className + "-hero",
                        attrs: {
                            "data-fs-section": ""
                        }
                    }, [o("div", {
                        ref: "hero",
                        staticClass: "hero-height"
                    }, [o("div", {
                        staticClass: "home-hero-inner"
                    }, [o("div", {
                        staticClass: "home-hero-body | l-relative"
                    }, [o("h1", {
                        staticClass: "home-hero-ttl"
                    }, [e._v(e._s(e.copy))]), e._v(" "), o("div", {
                        staticClass: "ui-scroll-down",
                        attrs: {
                            "data-ma-hover": "fixed-link-small",
                            "data-ma-fixed": ""
                        },
                        on: {
                            click: function(t) {
                                return e.scrollToElement({
                                    id: "scroll-to"
                                })
                            }
                        }
                    }, [o("span", {
                        staticClass: "txt",
                        attrs: {
                            "data-txt": "Scroll"
                        }
                    }, [e._v("Scroll")]), e._v(" "), o("span", {
                        staticClass: "point",
                        attrs: {
                            "data-ma-fixed-target": ""
                        }
                    })])])])])]), e._v(" "), o("section", {
                        ref: "solutions",
                        staticClass: "home-solutions",
                        attrs: {
                            id: "scroll-to",
                            "data-fs-section": ""
                        }
                    }, [e._m(0), e._v(" "), o("div", {
                        staticClass: "home-solutions-txts"
                    }, [o("h4", {
                        staticClass: "home-solutions-ttl"
                    }, [e._v("Solutions")]), e._v(" "), o("div", {
                        staticClass: "home-solutions-txts-body"
                    }, [o("p", {
                        staticClass: "home-solutions-txt"
                    }, [e._v(e._s(e.$t("solutions")))]), e._v(" "), o("nuxt-link", {
                        staticClass: "ui-link",
                        attrs: {
                            to: e.localePath("solutions"),
                            "data-ma-hover": "page-link"
                        }
                    }, [o("span", {
                        staticClass: "txt",
                        attrs: {
                            "data-txt": "View details"
                        }
                    }, [e._v("View details")]), e._v(" "), o("span", {
                        staticClass: "line"
                    })])], 1)])]), e._v(" "), o("section", {
                        staticClass: "m-solutions-method",
                        attrs: {
                            "data-fs-section": ""
                        }
                    }, [o("div", {
                        staticClass: "solutions-method-creative",
                        on: {
                            mouseenter: function(t) {
                                e.playVideo("videoCreative"), e.glHoverIn({
                                    isChild: !1,
                                    el: ".video-creative",
                                    evt: t
                                })
                            },
                            mouseleave: function(t) {
                                e.pauseVideo("videoCreative"), e.glHoverOut({
                                    isChild: !1,
                                    el: ".video-creative",
                                    evt: t
                                })
                            }
                        }
                    }, [o("div", {
                        staticClass: "solutions-method-video-thumb"
                    }, [o("div", {
                        staticClass: "solutions-method-video-wrap | video-creative",
                        attrs: {
                            "data-fs-inview": "",
                            "data-gl-dom": "",
                            "data-gl-type": "video",
                            "data-gl-src": e.video.creative.movie,
                            "data-gl-texture": "same",
                            "data-gl-ratio": "16:9",
                            "data-gl-vs": "plane",
                            "data-gl-fs": "link"
                        }
                    }, [o("video", {
                        ref: "videoCreative",
                        staticClass: "solutions-method-video",
                        attrs: {
                            "data-preload-image": "",
                            "data-gl-source": "",
                            poster: e.video.creative.poster,
                            crossorigin: "anonymous",
                            preload: "metadata",
                            playsinline: "",
                            muted: "",
                            loop: ""
                        },
                        domProps: {
                            muted: !0
                        }
                    })])]), e._v(" "), o("div", {
                        staticClass: "solutions-method-txts"
                    }, [o("div", {
                        staticClass: "solutions-method-txts-body"
                    }, [o("h2", {
                        staticClass: "solutions-method-ttl",
                        attrs: {
                            "data-txt": "(Solutions)"
                        }
                    }, [e._v("Creative")]), e._v(" "), o("p", {
                        staticClass: "solutions-method-txt"
                    }, [e._v(e._s(e.$t("creative")))]), e._v(" "), o("nuxt-link", {
                        staticClass: "ui-link",
                        attrs: {
                            to: e.localePath({
                                path: "/solutions/creative/"
                            }),
                            "data-ma-hover": "page-link"
                        }
                    }, [o("span", {
                        staticClass: "txt",
                        attrs: {
                            "data-txt": "View details"
                        }
                    }, [e._v("View details")]), e._v(" "), o("span", {
                        staticClass: "line"
                    })])], 1)])]), e._v(" "), o("div", {
                        staticClass: "solutions-method-services",
                        on: {
                            mouseenter: function(t) {
                                e.playVideo("videoServices"), e.glHoverIn({
                                    isChild: !1,
                                    el: ".video-services",
                                    evt: t
                                })
                            },
                            mouseleave: function(t) {
                                e.pauseVideo("videoServices"), e.glHoverOut({
                                    isChild: !1,
                                    el: ".video-services",
                                    evt: t
                                })
                            }
                        }
                    }, [o("div", {
                        staticClass: "solutions-method-video-thumb"
                    }, [o("div", {
                        staticClass: "solutions-method-video-wrap | video-services",
                        attrs: {
                            "data-fs-inview": "",
                            "data-gl-dom": "",
                            "data-gl-type": "video",
                            "data-gl-src": e.video.services.movie,
                            "data-gl-texture": "same",
                            "data-gl-ratio": "16:9",
                            "data-gl-vs": "plane",
                            "data-gl-fs": "link"
                        }
                    }, [o("video", {
                        ref: "videoServices",
                        staticClass: "solutions-method-video",
                        attrs: {
                            "data-gl-source": "",
                            "data-preload-image": "",
                            poster: e.video.services.poster,
                            crossorigin: "anonymous",
                            preload: "metadata",
                            playsinline: "",
                            muted: "",
                            loop: ""
                        },
                        domProps: {
                            muted: !0
                        }
                    })])]), e._v(" "), o("div", {
                        staticClass: "solutions-method-txts"
                    }, [o("div", {
                        staticClass: "solutions-method-txts-body"
                    }, [o("h2", {
                        staticClass: "solutions-method-ttl",
                        attrs: {
                            "data-txt": "(Solutions)"
                        }
                    }, [e._v("Services")]), e._v(" "), o("p", {
                        staticClass: "solutions-method-txt"
                    }, [e._v(e._s(e.$t("services")))]), e._v(" "), o("nuxt-link", {
                        staticClass: "ui-link",
                        attrs: {
                            to: e.localePath({
                                path: "/solutions/services/"
                            }),
                            "data-ma-hover": "page-link"
                        }
                    }, [o("span", {
                        staticClass: "txt",
                        attrs: {
                            "data-txt": "View details"
                        }
                    }, [e._v("View details")]), e._v(" "), o("span", {
                        staticClass: "line"
                    })])], 1)])])]), e._v(" "), o("section", {
                        staticClass: "home-news",
                        attrs: {
                            "data-fs-section": ""
                        }
                    }, [o("div", {
                        staticClass: "home-news-header"
                    }, [o("nuxt-link", {
                        staticClass: "ui-link",
                        attrs: {
                            to: e.localePath("news"),
                            "data-ma-hover": "page-link"
                        }
                    }, [o("span", {
                        staticClass: "txt",
                        attrs: {
                            "data-txt": "View all"
                        }
                    }, [e._v("View all")]), e._v(" "), o("span", {
                        staticClass: "line"
                    })]), e._v(" "), o("h2", {
                        staticClass: "ttl"
                    }, [e._v("News")]), e._v(" "), o("div", {
                        staticClass: "drag-to"
                    }, [e._v("Drag to navigate")])], 1), e._v(" "), o("div", {
                        staticClass: "home-news-body",
                        attrs: {
                            "data-ma-hover": "drag-link"
                        }
                    }, [o("div", {
                        staticClass: "home-news-slider",
                        attrs: {
                            id: "js-home-news-slider",
                            "data-so": "",
                            "data-so-call": "slider",
                            "data-so-call-repeat": ""
                        }
                    }, e._l(e.posts, (function(t, n) {
                        return o("article", {
                            staticClass: "home-news-article",
                            attrs: {
                                "data-so": "",
                                "data-so-repeat": "",
                                "data-gl-translate": ""
                            }
                        }, [o("div", {
                            staticClass: "home-news-article-body",
                            on: {
                                click: function(o) {
                                    e.goTo(e.localePath({
                                        path: "/news/" + t.slug
                                    }))
                                },
                                mouseenter: function(t) {
                                    return e.glHoverIn({
                                        isChild: !0,
                                        el: ".home-news-article-img-wrap",
                                        evt: t
                                    })
                                },
                                mouseleave: function(t) {
                                    return e.glHoverOut({
                                        isChild: !0,
                                        el: ".home-news-article-img-wrap",
                                        evt: t
                                    })
                                }
                            }
                        }, [o("div", {
                            staticClass: "home-news-article-thumb-ratio"
                        }, [o("div", {
                            staticClass: "home-news-article-thumb"
                        }, [o("div", {
                            staticClass: "home-news-article-img-wrap",
                            attrs: {
                                "data-preload-image": "",
                                "data-fs-inview": "",
                                "data-gl-dom": "",
                                "data-gl-drag": "",
                                "data-gl-type": "image",
                                "data-gl-src": t.thumb.full.src,
                                "data-gl-texture": "same",
                                "data-gl-ratio": t.thumb.full.width + ":" + t.thumb.full.height,
                                "data-gl-vs": "plane",
                                "data-gl-fs": "link",
                                "data-gl-translate-target": "[data-gl-translate]"
                            }
                        }, [o("img", {
                            staticClass: "home-news-article-img",
                            attrs: {
                                "data-gl-source": "",
                                crossorigin: "anonymous"
                            }
                        })])])]), e._v(" "), o("div", {
                            staticClass: "home-news-article-ttl-set"
                        }, [o("h4", {
                            staticClass: "ttl"
                        }, [e._v(e._s(e._f("length")(t.title, 45)))]), e._v(" "), o("div", {
                            staticClass: "home-news-article-meta"
                        }, [o("span", {
                            staticClass: "date"
                        }, [e._v(e._s(e._f("date")(t.date)))])])])])])
                    })), 0)])]), e._v(" "), e._m(1)])
                }), [function() {
                    var e = this.$createElement,
                        t = this._self._c || e;
                    return t("div", {
                        staticClass: "home-go-forward"
                    }, [t("div", {
                        staticClass: "go-forward",
                        attrs: {
                            "data-fs-speed": ".55 | .0",
                            "data-fs-delay": ".1"
                        }
                    }, [t("div", {
                        staticClass: "txt ol"
                    }, [this._v("Go Forward")]), this._v(" "), t("div", {
                        staticClass: "helix-wave | js-helix-wave"
                    }), this._v(" "), t("div", {
                        staticClass: "txt"
                    }, [this._v("Go Forward")]), this._v(" "), t("div", {
                        staticClass: "helix-wave | js-helix-wave"
                    }), this._v(" "), t("div", {
                        staticClass: "txt ol"
                    }, [this._v("Go Forward")])])])
                }, function() {
                    var e = this.$createElement,
                        t = this._self._c || e;
                    return t("div", {
                        staticClass: "fake-footer",
                        attrs: {
                            "data-fs-section": ""
                        }
                    }, [t("div", {
                        staticClass: "fake-footer-height"
                    })])
                }], !1, null, "2cc2634d", null);
            "function" == typeof y.default && Object(y.default)(component);
            t.default = component.exports
        }
    }
]);