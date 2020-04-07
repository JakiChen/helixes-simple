(window.webpackJsonp = window.webpackJsonp || []).push([
    [2], {
        313: function(t, e, n) {
            var content = n(349);
            "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(13).default)("97f57496", content, !0, {
                sourceMap: !1
            })
        },
        314: function(t, e) {
            t.exports = function(t) {
                t.options.__i18n = t.options.__i18n || [], t.options.__i18n.push('{"ja":{"title":"ページが見つかりません"},"en":{"title":"Not Found"}}'), delete t.options._Ctor
            }
        },
        348: function(t, e, n) {
            "use strict";
            var o = n(313);
            n.n(o).a
        },
        349: function(t, e, n) {
            (e = n(12)(!1)).push([t.i, '.p-notfound[data-v-3f2ac98a]{overflow:hidden}.p-notfound .notfound-hero[data-v-3f2ac98a]{position:relative;width:100%}.p-notfound .notfound-hero .subpage-hero-height[data-v-3f2ac98a]{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;position:relative;width:100%;height:100vh;height:calc(var(--vh)*100)}.p-notfound .notfound-hero .subpage-hero-height[data-v-3f2ac98a]:after{content:"";position:absolute;left:0;bottom:0;width:100%;height:16.66667vw;background:-webkit-gradient(linear,left bottom,left top,from(#fff),to(hsla(0,0%,100%,0)));background:linear-gradient(0deg,#fff,hsla(0,0%,100%,0));z-index:-1;pointer-events:none}.p-notfound .notfound-hero .notfound-intro-ttl[data-v-3f2ac98a]{position:relative;color:transparent;font-size:calc(7.8rem + (1800vw - 10800px)/1000);font-family:HK Nova,sans-serif;font-weight:400;letter-spacing:0}.p-notfound .notfound-space[data-v-3f2ac98a]{position:relative;width:100%;height:33vh;height:calc(var(--vh)*100/3);background:#fff}@media only screen and (max-width:1024px){.p-notfound .notfound-space[data-v-3f2ac98a]{display:none}}@media only screen and (max-width:1024px) and (orientation:portrait){.p-notfound .notfound-hero .subpage-hero-height[data-v-3f2ac98a]{height:50vh;height:calc(var(--vh)*100/2);min-height:calc(var(--vh)*100 - 513)}}', ""]), t.exports = e
        },
        350: function(t, e, n) {
            "use strict";
            var o = n(314),
                r = n.n(o);
            e.default = r.a
        },
        418: function(t, e, n) {
            "use strict";
            n.r(e);
            n(23), n(14), n(11), n(6), n(19), n(32);
            var o = n(4),
                r = n(9);

            function c(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(object);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, n)
                }
                return e
            }
            var l = {
                    data: function() {
                        return {
                            title: this.$t.bind(this)("title"),
                            description: "ja" === this.$i18n.locale ? "株式会社Helixesは、クリエイティブを用いて課題を解決する、トータルプランニングカンパニーです。広告制作をはじめ、ブランドやデジタルプロダクトの開発、アーティストマネジメントなど、枠にとらわれない様々なモノ、コトを総合的に企画・運営しています。" : "Helixes Inc. is a planning company uses creativity to solve problems. We integrate strategy, creativity and experience to build brands.",
                            className: "notfound",
                            headerTitle: "Not Found"
                        }
                    },
                    head: function() {
                        return {
                            title: this.title,
                            titleTemplate: "%s ー Helixes Inc.",
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
                    computed: function(t) {
                        for (var i = 1; i < arguments.length; i++) {
                            var source = null != arguments[i] ? arguments[i] : {};
                            i % 2 ? c(Object(source), !0).forEach((function(e) {
                                Object(o.a)(t, e, source[e])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : c(Object(source)).forEach((function(e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                            }))
                        }
                        return t
                    }({}, Object(r.b)({
                        loaded: "loaded",
                        user: "user",
                        page: "page"
                    })),
                    watch: {
                        loaded: function(t) {
                            t && this.init("first")
                        }
                    },
                    beforeMount: function() {
                        $g.fn.utility.resetScrollPosition(), $g.fn.utility.setViewportHeight()
                    },
                    mounted: function() {
                        var t = this;
                        this.$nextTick((function() {
                            $g.fn.utility.updateViewType(), $g.fn.utility.staggerElement(".notfound-intro-ttl"), t.loaded && t.init("default"), t.$eventHub.$on("onScroll", t.onScroll), t.$eventHub.$on("onResize", t.onResize)
                        }))
                    },
                    beforeDestroy: function() {
                        observer.destroy(), this.$eventHub.$off("onScroll", this.onScroll), this.$eventHub.$off("onResize", this.onResize)
                    },
                    methods: {
                        init: function(t) {
                            switch (t) {
                                case "first":
                                    $g.fn.utility.staggerAnimation({
                                        el: ".notfound-intro-ttl",
                                        delay: .85
                                    }), this.$eventHub.$emit("helixFadeIn", {
                                        delay: 1.35,
                                        pageName: this.page.name
                                    }), this.$eventHub.$emit("glInit"), this.$eventHub.$emit("glTick"), requestTimeout((function() {
                                        fakeScroll.isActive && fakeScroll.update()
                                    }), 300);
                                    break;
                                default:
                                    $g.fn.utility.staggerAnimation({
                                        el: "notfound-intro-ttl",
                                        delay: .2
                                    }), this.$eventHub.$emit("glReInit"), this.$eventHub.$emit("glTick"), requestTimeout((function() {
                                        fakeScroll.isActive && fakeScroll.update()
                                    }), 300)
                            }
                        },
                        setHeroHeight: function(t) {},
                        onScroll: function(t) {
                            t._y;
                            t.y > t.height ? (this.$eventHub.$emit("helixSetState", !1), this.$eventHub.$emit("helixStop")) : (this.$eventHub.$emit("helixSetState", !0), this.$eventHub.$emit("helixStart"))
                        },
                        onResize: function(t) {
                            t.width, t.height
                        },
                        goTo: function(t) {
                            this.$router.push({
                                path: t
                            })
                        }
                    },
                    transition: {
                        mode: "out-in",
                        css: !1,
                        beforeEnter: function(t) {
                            this.$store.getters.loaded && $g.fn.transition.beforeEnter({
                                el: t
                            })
                        },
                        enter: function(t, e) {
                            var n = this;
                            this.$store.getters.loaded && (requestTimeout((function() {
                                n.$store.dispatch("maskOff")
                            }), 250), $g.fn.transition.enter({
                                el: t,
                                done: e
                            }))
                        },
                        leave: function(t, e) {
                            if (this.$store.getters.loaded) {
                                this.$store.dispatch("maskOn"), $g.fn.transition.leave({
                                    el: t,
                                    done: e,
                                    callback: function() {}
                                })
                            }
                        }
                    }
                },
                f = (n(348), n(8)),
                d = n(350),
                component = Object(f.a)(l, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        class: "p-" + t.className
                    }, [n("section", {
                        class: t.className + "-hero | m-subpage-hero",
                        attrs: {
                            "data-fs-section": ""
                        }
                    }, [n("div", {
                        ref: "hero",
                        staticClass: "subpage-hero-height"
                    }, [n("div", {
                        staticClass: "back-to-link"
                    }, [n("nuxt-link", {
                        staticClass: "back-to",
                        attrs: {
                            to: t.localePath("index"),
                            "data-ma-hover": "fixed-link-border-light-gray",
                            "data-ma-fixed": ""
                        }
                    }, [n("span", {
                        staticClass: "arrow"
                    }, [n("svg", {
                        staticClass: "arrow-back",
                        attrs: {
                            viewBox: "0 0 18 12"
                        }
                    }, [n("path", {
                        attrs: {
                            d: "M18,5H3.8l3.6-3.6L6,0L0,6l6,6l1.4-1.4L3.8,7H18V5z"
                        }
                    })]), t._v(" "), n("span", {
                        staticClass: "point",
                        attrs: {
                            "data-ma-fixed-target": ""
                        }
                    })]), t._v(" "), n("span", {
                        staticClass: "txt"
                    }, [t._v("Back to home")])])], 1), t._v(" "), n("div", {
                        staticClass: "notfound-intro-ttl"
                    }, [t._v("Not Found")])])]), t._v(" "), t._m(0)])
                }), [function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "fake-footer",
                        attrs: {
                            "data-fs-section": ""
                        }
                    }, [e("div", {
                        staticClass: "fake-footer-height"
                    })])
                }], !1, null, "3f2ac98a", null);
            "function" == typeof d.default && Object(d.default)(component);
            e.default = component.exports
        }
    }
]);