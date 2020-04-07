/*! For license information please see LICENSES */
(window.webpackJsonp = window.webpackJsonp || []).push([
    [0],
    [function(t, e, o) {
        "use strict";
        o.d(e, "v", (function() {
            return n
        })), o.d(e, "q", (function() {
            return r
        })), o.d(e, "j", (function() {
            return c
        })), o.d(e, "t", (function() {
            return l
        })), o.d(e, "k", (function() {
            return h
        })), o.d(e, "u", (function() {
            return d
        })), o.d(e, "o", (function() {
            return m
        })), o.d(e, "s", (function() {
            return f
        })), o.d(e, "l", (function() {
            return v
        })), o.d(e, "m", (function() {
            return w
        })), o.d(e, "n", (function() {
            return x
        })), o.d(e, "h", (function() {
            return y
        })), o.d(e, "w", (function() {
            return k
        })), o.d(e, "i", (function() {
            return _
        })), o.d(e, "r", (function() {
            return z
        })), o.d(e, "f", (function() {
            return C
        })), o.d(e, "b", (function() {
            return E
        })), o.d(e, "e", (function() {
            return O
        })), o.d(e, "c", (function() {
            return L
        })), o.d(e, "d", (function() {
            return M
        })), o.d(e, "g", (function() {
            return T
        })), o.d(e, "a", (function() {
            return R
        })), o.d(e, "p", (function() {
            return j
        }));
        var n = {
                fallbackLocale: "ja"
            },
            r = [{
                code: "ja",
                iso: "ja_JP"
            }, {
                code: "en",
                iso: "en-US"
            }],
            c = "ja",
            l = "___",
            h = "default",
            d = "prefix_except_default",
            m = !1,
            f = null,
            v = {
                useCookie: !0,
                cookieKey: "i18n_redirected",
                alwaysRedirect: !1,
                fallbackLocale: null
            },
            w = !1,
            x = !1,
            y = "https://helixes.co",
            k = {
                moduleName: "i18n",
                syncLocale: !1,
                syncMessages: !1,
                syncRouteParams: !0
            },
            _ = function() {
                return null
            },
            z = function() {
                return null
            },
            C = "nuxt-i18n",
            E = "code",
            O = "iso",
            L = "domain",
            M = "file",
            T = {
                PREFIX: "prefix",
                PREFIX_EXCEPT_DEFAULT: "prefix_except_default",
                PREFIX_AND_DEFAULT: "prefix_and_default",
                NO_PREFIX: "no_prefix"
            },
            R = "nuxtI18n",
            j = ["ja", "en"]
    }, , function(t, e, o) {
        "use strict";
        o.d(e, "i", (function() {
            return f
        })), o.d(e, "j", (function() {
            return v
        })), o.d(e, "a", (function() {
            return w
        })), o.d(e, "n", (function() {
            return x
        })), o.d(e, "e", (function() {
            return y
        })), o.d(e, "f", (function() {
            return k
        })), o.d(e, "c", (function() {
            return _
        })), o.d(e, "h", (function() {
            return C
        })), o.d(e, "o", (function() {
            return O
        })), o.d(e, "k", (function() {
            return M
        })), o.d(e, "m", (function() {
            return T
        })), o.d(e, "d", (function() {
            return R
        })), o.d(e, "b", (function() {
            return j
        })), o.d(e, "g", (function() {
            return S
        })), o.d(e, "l", (function() {
            return A
        }));
        o(23), o(14);
        var n = o(49),
            r = (o(24), o(192), o(137), o(3)),
            c = (o(79), o(80), o(110), o(197), o(47), o(35), o(5)),
            l = (o(95), o(11), o(6), o(19), o(32), o(4)),
            h = o(1);

        function d(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(object);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }))), e.push.apply(e, o)
            }
            return e
        }

        function m(t) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? d(Object(source), !0).forEach((function(e) {
                    Object(l.a)(t, e, source[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : d(Object(source)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                }))
            }
            return t
        }

        function f(t) {
            h.a.config.errorHandler && h.a.config.errorHandler(t)
        }

        function v(t) {
            return t.then((function(t) {
                return t.default || t
            }))
        }

        function w(t, e) {
            if (e || !t.options.__hasNuxtData) {
                var o = t.options._originDataFn || t.options.data || function() {
                    return {}
                };
                t.options._originDataFn = o, t.options.data = function() {
                    var data = o.call(this, this);
                    return this.$ssrContext && (e = this.$ssrContext.asyncData[t.cid]), m({}, data, {}, e)
                }, t.options.__hasNuxtData = !0, t._Ctor && t._Ctor.options && (t._Ctor.options.data = t.options.data)
            }
        }

        function x(t) {
            return t.options && t._Ctor === t ? t : (t.options ? (t._Ctor = t, t.extendOptions = t.options) : (t = h.a.extend(t))._Ctor = t, !t.options.name && t.options.__file && (t.options.name = t.options.__file), t)
        }

        function y(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "components";
            return Array.prototype.concat.apply([], t.matched.map((function(t, n) {
                return Object.keys(t[o]).map((function(r) {
                    return e && e.push(n), t[o][r]
                }))
            })))
        }

        function k(t) {
            return y(t, arguments.length > 1 && void 0 !== arguments[1] && arguments[1], "instances")
        }

        function _(t, e) {
            return Array.prototype.concat.apply([], t.matched.map((function(t, o) {
                return Object.keys(t.components).reduce((function(n, r) {
                    return t.components[r] ? n.push(e(t.components[r], t.instances[r], t, r, o)) : delete t.components[r], n
                }), [])
            })))
        }

        function z(t, e) {
            return Promise.all(_(t, function() {
                var t = Object(c.a)(regeneratorRuntime.mark((function t(o, n, r, c) {
                    return regeneratorRuntime.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if ("function" != typeof o || o.options) {
                                    t.next = 4;
                                    break
                                }
                                return t.next = 3, o();
                            case 3:
                                o = t.sent;
                            case 4:
                                return r.components[c] = o = x(o), t.abrupt("return", "function" == typeof e ? e(o, n, r, c) : o);
                            case 6:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })));
                return function(e, o, n, r) {
                    return t.apply(this, arguments)
                }
            }()))
        }

        function C(t) {
            return E.apply(this, arguments)
        }

        function E() {
            return (E = Object(c.a)(regeneratorRuntime.mark((function t(e) {
                return regeneratorRuntime.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            if (e) {
                                t.next = 2;
                                break
                            }
                            return t.abrupt("return");
                        case 2:
                            return t.next = 4, z(e);
                        case 4:
                            return t.abrupt("return", m({}, e, {
                                meta: y(e).map((function(t, o) {
                                    return m({}, t.options.meta, {}, (e.matched[o] || {}).meta)
                                }))
                            }));
                        case 5:
                        case "end":
                            return t.stop()
                    }
                }), t)
            })))).apply(this, arguments)
        }

        function O(t, e) {
            return L.apply(this, arguments)
        }

        function L() {
            return (L = Object(c.a)(regeneratorRuntime.mark((function t(e, o) {
                var c, l, h, d;
                return regeneratorRuntime.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return e.context || (e.context = {
                                isStatic: !0,
                                isDev: !1,
                                isHMR: !1,
                                app: e,
                                store: e.store,
                                payload: o.payload,
                                error: o.error,
                                base: "/",
                                env: {
                                    type: "production",
                                    baseUrl: "https://jakichen.github.io/helixes-simple/",
                                    baseDir: "/",
                                    assetsDir: "https://helixes.s3.amazonaws.com/web/assets",
                                    wpBaseUrl: "https://wp.helixes.co",
                                    wpRestApi: "/wp-json/wp/v2",
                                    baseCdnUrl: "https://helixes.s3.amazonaws.com",
                                    baseDescJa: "株式会社Helixesは、クリエイティブを用いて課題を解決する、トータルプランニングカンパニーです。広告制作をはじめ、ブランドやデジタルプロダクトの開発、アーティストマネジメントなど、枠にとらわれない様々なモノ、コトを総合的に企画・運営しています。",
                                    baseDescEn: "Helixes Inc. is a planning company uses creativity to solve problems. We integrate strategy, creativity and experience to build brands.",
                                    analyticsId: "UA-155016984-1"
                                }
                            }, o.req && (e.context.req = o.req), o.res && (e.context.res = o.res), o.ssrContext && (e.context.ssrContext = o.ssrContext), e.context.redirect = function(t, path, o) {
                                if (t) {
                                    e.context._redirected = !0;
                                    var n = Object(r.a)(path);
                                    if ("number" == typeof t || "undefined" !== n && "object" !== n || (o = path || {}, path = t, n = Object(r.a)(path), t = 302), "object" === n && (path = e.router.resolve(path).route.fullPath), !/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) throw path = I(path, o), window.location.replace(path), new Error("ERR_REDIRECT");
                                    e.context.next({
                                        path: path,
                                        query: o,
                                        status: t
                                    })
                                }
                            }, e.context.nuxtState = window.__HELIXES__), t.next = 3, Promise.all([C(o.route), C(o.from)]);
                        case 3:
                            c = t.sent, l = Object(n.a)(c, 2), h = l[0], d = l[1], o.route && (e.context.route = h), o.from && (e.context.from = d), e.context.next = o.next, e.context._redirected = !1, e.context._errored = !1, e.context.isHMR = !1, e.context.params = e.context.route.params || {}, e.context.query = e.context.route.query || {};
                        case 15:
                        case "end":
                            return t.stop()
                    }
                }), t)
            })))).apply(this, arguments)
        }

        function M(t, e) {
            return !t.length || e._redirected || e._errored ? Promise.resolve() : T(t[0], e).then((function() {
                return M(t.slice(1), e)
            }))
        }

        function T(t, e) {
            var o;
            return (o = 2 === t.length ? new Promise((function(o) {
                t(e, (function(t, data) {
                    t && e.error(t), o(data = data || {})
                }))
            })) : t(e)) && o instanceof Promise && "function" == typeof o.then ? o : Promise.resolve(o)
        }

        function R(base, t) {
            var path = decodeURI(window.location.pathname);
            return "hash" === t ? window.location.hash.replace(/^#\//, "") : (base && 0 === path.indexOf(base) && (path = path.slice(base.length)), (path || "/") + window.location.search + window.location.hash)
        }

        function j(t, e) {
            return function(t, e) {
                for (var o = new Array(t.length), i = 0; i < t.length; i++) "object" === Object(r.a)(t[i]) && (o[i] = new RegExp("^(?:" + t[i].pattern + ")$", F(e)));
                return function(e, n) {
                    for (var path = "", data = e || {}, r = (n || {}).pretty ? H : encodeURIComponent, c = 0; c < t.length; c++) {
                        var l = t[c];
                        if ("string" != typeof l) {
                            var h = data[l.name || "pathMatch"],
                                d = void 0;
                            if (null == h) {
                                if (l.optional) {
                                    l.partial && (path += l.prefix);
                                    continue
                                }
                                throw new TypeError('Expected "' + l.name + '" to be defined')
                            }
                            if (Array.isArray(h)) {
                                if (!l.repeat) throw new TypeError('Expected "' + l.name + '" to not repeat, but received `' + JSON.stringify(h) + "`");
                                if (0 === h.length) {
                                    if (l.optional) continue;
                                    throw new TypeError('Expected "' + l.name + '" to not be empty')
                                }
                                for (var m = 0; m < h.length; m++) {
                                    if (d = r(h[m]), !o[c].test(d)) throw new TypeError('Expected all "' + l.name + '" to match "' + l.pattern + '", but received `' + JSON.stringify(d) + "`");
                                    path += (0 === m ? l.prefix : l.delimiter) + d
                                }
                            } else {
                                if (d = l.asterisk ? H(h, !0) : r(h), !o[c].test(d)) throw new TypeError('Expected "' + l.name + '" to match "' + l.pattern + '", but received "' + d + '"');
                                path += l.prefix + d
                            }
                        } else path += l
                    }
                    return path
                }
            }(function(t, e) {
                var o, n = [],
                    r = 0,
                    c = 0,
                    path = "",
                    l = e && e.delimiter || "/";
                for (; null != (o = P.exec(t));) {
                    var h = o[0],
                        d = o[1],
                        m = o.index;
                    if (path += t.slice(c, m), c = m + h.length, d) path += d[1];
                    else {
                        var f = t[c],
                            v = o[2],
                            w = o[3],
                            x = o[4],
                            y = o[5],
                            k = o[6],
                            _ = o[7];
                        path && (n.push(path), path = "");
                        var z = null != v && null != f && f !== v,
                            C = "+" === k || "*" === k,
                            E = "?" === k || "*" === k,
                            O = o[2] || l,
                            pattern = x || y;
                        n.push({
                            name: w || r++,
                            prefix: v || "",
                            delimiter: O,
                            optional: E,
                            repeat: C,
                            partial: z,
                            asterisk: Boolean(_),
                            pattern: pattern ? D(pattern) : _ ? ".*" : "[^" + $(O) + "]+?"
                        })
                    }
                }
                c < t.length && (path += t.substr(c));
                path && n.push(path);
                return n
            }(t, e), e)
        }

        function S(t, e) {
            var o = {},
                n = m({}, t, {}, e);
            for (var r in n) String(t[r]) !== String(e[r]) && (o[r] = !0);
            return o
        }

        function A(t) {
            var e;
            if (t.message || "string" == typeof t) e = t.message || t;
            else try {
                e = JSON.stringify(t, null, 2)
            } catch (o) {
                e = "[".concat(t.constructor.name, "]")
            }
            return m({}, t, {
                message: e,
                statusCode: t.statusCode || t.status || t.response && t.response.status || 500
            })
        }
        window.onHelixesReadyCbs = [], window.onHelixesReady = function(t) {
            window.onHelixesReadyCbs.push(t)
        };
        var P = new RegExp(["(\\\\.)", "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"), "g");

        function H(t, e) {
            var o = e ? /[?#]/g : /[/?#]/g;
            return encodeURI(t).replace(o, (function(t) {
                return "%" + t.charCodeAt(0).toString(16).toUpperCase()
            }))
        }

        function $(t) {
            return t.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1")
        }

        function D(t) {
            return t.replace(/([=!:$/()])/g, "\\$1")
        }

        function F(t) {
            return t && t.sensitive ? "" : "i"
        }

        function I(t, e) {
            var o, r = t.indexOf("://"); - 1 !== r ? (o = t.substring(0, r), t = t.substring(r + 3)) : t.startsWith("//") && (t = t.substring(2));
            var c, l = t.split("/"),
                h = (o ? o + "://" : "//") + l.shift(),
                path = l.filter(Boolean).join("/");
            if (2 === (l = path.split("#")).length) {
                var d = l,
                    m = Object(n.a)(d, 2);
                path = m[0], c = m[1]
            }
            return h += path ? "/" + path : "", e && "{}" !== JSON.stringify(e) && (h += (2 === t.split("?").length ? "&" : "?") + function(t) {
                return Object.keys(t).sort().map((function(e) {
                    var o = t[e];
                    return null == o ? "" : Array.isArray(o) ? o.slice().map((function(t) {
                        return [e, "=", t].join("")
                    })).join("&") : e + "=" + o
                })).filter(Boolean).join("&")
            }(e)), h += c ? "#" + c : ""
        }
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, o) {
        "use strict";
        o(35), o(23), o(14), o(11), o(6), o(19);
        var n = o(5),
            r = o(4),
            c = (o(32), o(1)),
            l = o(64),
            h = o(112),
            d = o.n(h),
            m = o(58),
            f = o.n(m),
            v = o(66),
            w = o(2),
            x = function() {
                return Object(w.j)(o.e(2).then(o.bind(null, 418)))
            },
            y = function() {
                return Object(w.j)(o.e(7).then(o.bind(null, 417)))
            },
            k = function() {
                return Object(w.j)(o.e(10).then(o.bind(null, 406)))
            },
            _ = function() {
                return Object(w.j)(o.e(12).then(o.bind(null, 415)))
            },
            z = function() {
                return Object(w.j)(o.e(16).then(o.bind(null, 414)))
            },
            C = function() {
                return Object(w.j)(o.e(20).then(o.bind(null, 413)))
            },
            E = function() {
                return Object(w.j)(o.e(4).then(o.bind(null, 412)))
            },
            O = function() {
                return Object(w.j)(o.e(5).then(o.bind(null, 411)))
            },
            L = function() {
                return Object(w.j)(o.e(6).then(o.bind(null, 410)))
            },
            M = function() {
                return Object(w.j)(o.e(3).then(o.bind(null, 409)))
            },
            T = function() {
                return Object(w.j)(o.e(8).then(o.bind(null, 408)))
            },
            R = function() {
                return Object(w.j)(o.e(9).then(o.bind(null, 407)))
            },
            j = function() {
                return Object(w.j)(o.e(11).then(o.bind(null, 402)))
            },
            S = function() {
                return Object(w.j)(o.e(15).then(o.bind(null, 405)))
            },
            A = function() {
                return Object(w.j)(o.e(18).then(o.bind(null, 404)))
            },
            P = function() {
                return Object(w.j)(o.e(19).then(o.bind(null, 403)))
            },
            H = function() {
                return Object(w.j)(o.e(21).then(o.bind(null, 416)))
            },
            D = function() {
                return Object(w.j)(o.e(14).then(o.bind(null, 421)))
            },
            F = function() {
                return Object(w.j)(o.e(17).then(o.bind(null, 420)))
            },
            I = function() {
                return Object(w.j)(o.e(13).then(o.bind(null, 419)))
            },
            N = function() {},
            B = v.a.prototype.push;
        v.a.prototype.push = function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : N,
                o = arguments.length > 2 ? arguments[2] : void 0;
            return B.call(this, t, e, o)
        }, c.a.use(v.a);
        var U = {
            mode: "history",
            base: decodeURI("/"),
            linkActiveClass: "active-link",
            linkExactActiveClass: "exact-active-link",
            scrollBehavior: function(t, e, o) {
                var n = !1;
                return t.matched.length < 2 ? n = {
                    x: 0,
                    y: 0
                } : t.matched.some((function(t) {
                    return t.components.default.options.scrollToTop
                })) && (n = {
                    x: 0,
                    y: 0
                }), o && (n = {
                    x: 0,
                    y: 0
                }), new Promise((function(e) {
                    window.$nuxt.$once("triggerScroll", (function() {
                        t.hash && document.querySelector(t.hash) && (n = {
                            selector: t.hash
                        }), e(n)
                    }))
                }))
            },
            routes: [{
                path: "/404",
                component: x,
                name: "404___ja"
            }, {
                path: "/careers",
                component: y,
                name: "careers___ja"
            }, {
                path: "/contact",
                component: k,
                name: "contact___ja"
            }, {
                path: "/legals",
                component: _,
                name: "legals___ja"
            }, {
                path: "/news",
                component: z,
                name: "news___ja"
            }, {
                path: "/solutions",
                component: C,
                name: "solutions___ja"
            }, {
                path: "/careers/account-executive",
                component: E,
                name: "careers-account-executive___ja"
            }, {
                path: "/careers/creative-director",
                component: O,
                name: "careers-creative-director___ja"
            }, {
                path: "/careers/director",
                component: L,
                name: "careers-director___ja"
            }, {
                path: "/careers/Intern",
                component: M,
                name: "careers-Intern___ja"
            }, {
                path: "/careers/producer",
                component: T,
                name: "careers-producer___ja"
            }, {
                path: "/careers/strategic-planner",
                component: R,
                name: "careers-strategic-planner___ja"
            }, {
                path: "/en/",
                component: j,
                name: "index___en"
            }, {
                path: "/en/404",
                component: x,
                name: "404___en"
            }, {
                path: "/en/careers",
                component: y,
                name: "careers___en"
            }, {
                path: "/en/contact",
                component: k,
                name: "contact___en"
            }, {
                path: "/en/legals",
                component: _,
                name: "legals___en"
            }, {
                path: "/en/news",
                component: z,
                name: "news___en"
            }, {
                path: "/en/solutions",
                component: C,
                name: "solutions___en"
            }, {
                path: "/news/category",
                component: S,
                name: "news-category___ja"
            }, {
                path: "/news/tag",
                component: A,
                name: "news-tag___ja"
            }, {
                path: "/solutions/creative",
                component: P,
                name: "solutions-creative___ja"
            }, {
                path: "/solutions/services",
                component: H,
                name: "solutions-services___ja"
            }, {
                path: "/en/careers/account-executive",
                component: E,
                name: "careers-account-executive___en"
            }, {
                path: "/en/careers/creative-director",
                component: O,
                name: "careers-creative-director___en"
            }, {
                path: "/en/careers/director",
                component: L,
                name: "careers-director___en"
            }, {
                path: "/en/careers/Intern",
                component: M,
                name: "careers-Intern___en"
            }, {
                path: "/en/careers/producer",
                component: T,
                name: "careers-producer___en"
            }, {
                path: "/en/careers/strategic-planner",
                component: R,
                name: "careers-strategic-planner___en"
            }, {
                path: "/en/news/category",
                component: S,
                name: "news-category___en"
            }, {
                path: "/en/news/tag",
                component: A,
                name: "news-tag___en"
            }, {
                path: "/en/solutions/creative",
                component: P,
                name: "solutions-creative___en"
            }, {
                path: "/en/solutions/services",
                component: H,
                name: "solutions-services___en"
            }, {
                path: "/en/news/category/:category",
                component: D,
                name: "news-category-category___en"
            }, {
                path: "/en/news/tag/:tag",
                component: F,
                name: "news-tag-tag___en"
            }, {
                path: "/en/news/:slug",
                component: I,
                name: "news-slug___en"
            }, {
                path: "/news/category/:category",
                component: D,
                name: "news-category-category___ja"
            }, {
                path: "/news/tag/:tag",
                component: F,
                name: "news-tag-tag___ja"
            }, {
                path: "/news/:slug",
                component: I,
                name: "news-slug___ja"
            }, {
                path: "/en/*",
                component: x,
                name: "notfound___en"
            }, {
                path: "/",
                component: j,
                name: "index___ja"
            }, {
                path: "/*",
                component: x,
                name: "notfound___ja"
            }],
            fallback: !1
        };
        var Y = {
                name: "NuxtChild",
                functional: !0,
                props: {
                    nuxtChildKey: {
                        type: String,
                        default: ""
                    },
                    keepAlive: Boolean,
                    keepAliveProps: {
                        type: Object,
                        default: void 0
                    }
                },
                render: function(t, e) {
                    var o = e.parent,
                        data = e.data,
                        n = e.props;
                    data.nuxtChild = !0;
                    for (var r = o, c = o.$helixes.nuxt.transitions, l = o.$helixes.nuxt.defaultTransition, h = 0; o;) o.$vnode && o.$vnode.data.nuxtChild && h++, o = o.$parent;
                    data.nuxtChildDepth = h;
                    var d = c[h] || l,
                        m = {};
                    V.forEach((function(t) {
                        void 0 !== d[t] && (m[t] = d[t])
                    }));
                    var f = {};
                    W.forEach((function(t) {
                        "function" == typeof d[t] && (f[t] = d[t].bind(r))
                    }));
                    var v = f.beforeEnter;
                    if (f.beforeEnter = function(t) {
                            if (window.$helixes.$nextTick((function() {
                                    window.$helixes.$emit("triggerScroll")
                                })), v) return v.call(r, t)
                        }, !1 === d.css) {
                        var w = f.leave;
                        (!w || w.length < 2) && (f.leave = function(t, e) {
                            w && w.call(r, t), r.$nextTick(e)
                        })
                    }
                    var x = t("routerView", data);
                    return n.keepAlive && (x = t("keep-alive", {
                        props: n.keepAliveProps
                    }, [x])), t("transition", {
                        props: m,
                        on: f
                    }, [x])
                }
            },
            V = ["name", "mode", "appear", "css", "type", "duration", "enterClass", "leaveClass", "appearClass", "enterActiveClass", "enterActiveClass", "leaveActiveClass", "appearActiveClass", "enterToClass", "leaveToClass", "appearToClass"],
            W = ["beforeEnter", "enter", "afterEnter", "enterCancelled", "beforeLeave", "leave", "afterLeave", "leaveCancelled", "beforeAppear", "appear", "afterAppear", "appearCancelled"],
            G = {
                name: "NuxtError",
                props: {
                    error: {
                        type: Object,
                        default: null
                    }
                },
                computed: {
                    statusCode: function() {
                        return this.error && this.error.statusCode || 500
                    },
                    message: function() {
                        return this.error.message || "Error"
                    }
                },
                head: function() {
                    return {
                        title: this.message,
                        meta: [{
                            name: "viewport",
                            content: "width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"
                        }]
                    }
                }
            },
            K = (o(201), o(8)),
            X = Object(K.a)(G, (function() {
                var t = this,
                    e = t.$createElement,
                    o = t._self._c || e;
                return o("div", {
                    staticClass: "__nuxt-error-page"
                }, [o("div", {
                    staticClass: "error"
                }, [o("svg", {
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "90",
                        height: "90",
                        fill: "#DBE1EC",
                        viewBox: "0 0 48 48"
                    }
                }, [o("path", {
                    attrs: {
                        d: "M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"
                    }
                })]), t._v(" "), o("div", {
                    staticClass: "title"
                }, [t._v(t._s(t.message))]), t._v(" "), 404 === t.statusCode ? o("p", {
                    staticClass: "description"
                }, [o("NuxtLink", {
                    staticClass: "error-link",
                    attrs: {
                        to: "/"
                    }
                }, [t._v("Back to the home page")])], 1) : t._e(), t._v(" "), t._m(0)])])
            }), [function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("div", {
                    staticClass: "logo"
                }, [e("a", {
                    attrs: {
                        href: "https://nuxtjs.org",
                        target: "_blank",
                        rel: "noopener"
                    }
                }, [this._v("Nuxt.js")])])
            }], !1, null, null, null).exports,
            J = (o(79), o(80), o(47), o(49)),
            Q = {
                name: "Nuxt",
                components: {
                    NuxtChild: Y,
                    NuxtError: X
                },
                props: {
                    nuxtChildKey: {
                        type: String,
                        default: void 0
                    },
                    keepAlive: Boolean,
                    keepAliveProps: {
                        type: Object,
                        default: void 0
                    },
                    name: {
                        type: String,
                        default: "default"
                    }
                },
                errorCaptured: function(t) {
                    this.displayingNuxtError && (this.errorFromNuxtError = t, this.$forceUpdate())
                },
                computed: {
                    routerViewKey: function() {
                        if (void 0 !== this.nuxtChildKey || this.$route.matched.length > 1) return this.nuxtChildKey || Object(w.b)(this.$route.matched[0].path)(this.$route.params);
                        var t = Object(J.a)(this.$route.matched, 1)[0];
                        if (!t) return this.$route.path;
                        var e = t.components.default;
                        if (e && e.options) {
                            var o = e.options;
                            if (o.key) return "function" == typeof o.key ? o.key(this.$route) : o.key
                        }
                        return /\/$/.test(t.path) ? this.$route.path : this.$route.path.replace(/\/$/, "")
                    }
                },
                beforeCreate: function() {
                    c.a.util.defineReactive(this, "nuxt", this.$root.$options.nuxt)
                },
                render: function(t) {
                    var e = this;
                    return this.nuxt.err ? this.errorFromNuxtError ? (this.$nextTick((function() {
                        return e.errorFromNuxtError = !1
                    })), t("div", {}, [t("h2", "An error occured while showing the error page"), t("p", "Unfortunately an error occured and while showing the error page another error occured"), t("p", "Error details: ".concat(this.errorFromNuxtError.toString())), t("nuxt-link", {
                        props: {
                            to: "/"
                        }
                    }, "Go back to home")])) : (this.displayingNuxtError = !0, this.$nextTick((function() {
                        return e.displayingNuxtError = !1
                    })), t(X, {
                        props: {
                            error: this.nuxt.err
                        }
                    })) : t("NuxtChild", {
                        key: this.routerViewKey,
                        props: this.$props
                    })
                }
            },
            Z = (o(95), o(203), o(224), o(226), o(228), o(230), o(232), o(234), o(236), o(9));

        function tt(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(object);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }))), e.push.apply(e, o)
            }
            return e
        }
        var et = {
                name: "AppHeader",
                data: function() {
                    return {
                        path: {
                            line1: {
                                from: "M43,21.5H7v-2h36V21.5z",
                                to: "M25,29.5c-4.88,0-7.42-2.26-9.66-4.25C13.17,23.32,11.12,21.5,7,21.5v-2c4.88,0,7.42,2.26,9.66,4.25 c2.17,1.93,4.22,3.75,8.34,3.75c4.12,0,6.17-1.82,8.34-3.75c2.24-1.99,4.78-4.25,9.66-4.25v2c-4.12,0-6.17,1.82-8.34,3.75 C32.42,27.24,29.88,29.5,25,29.5z"
                            },
                            line2: {
                                from: "M43,30.5H7v-2h36V30.5z",
                                to: "M43,30.5c-4.88,0-7.42-2.26-9.66-4.25c-2.17-1.93-4.22-3.75-8.34-3.75c-4.12,0-6.17,1.82-8.34,3.75 C14.42,28.24,11.88,30.5,7,30.5v-2c4.12,0,6.17-1.82,8.34-3.75c2.24-1.99,4.78-4.25,9.66-4.25c4.88,0,7.42,2.26,9.66,4.25 c2.17,1.93,4.22,3.75,8.34,3.75V30.5z"
                            }
                        }
                    }
                },
                computed: function(t) {
                    for (var i = 1; i < arguments.length; i++) {
                        var source = null != arguments[i] ? arguments[i] : {};
                        i % 2 ? tt(Object(source), !0).forEach((function(e) {
                            Object(r.a)(t, e, source[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : tt(Object(source)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                        }))
                    }
                    return t
                }({}, Object(Z.b)({
                    loaded: "loaded",
                    user: "user",
                    page: "page",
                    menu: "menu"
                })),
                mounted: function() {
                    var t = this;
                    this.$nextTick((function() {
                        t.init(), t.$eventHub.$on("menuIconOpen", t.open), t.$eventHub.$on("menuIconClose", t.close), t.$eventHub.$on("onScroll", t.onScroll)
                    }))
                },
                methods: {
                    menuToggle: function(t) {
                        this.$store.getters.menu ? this.$eventHub.$emit("menuClose") : this.$eventHub.$emit("menuOpen")
                    },
                    init: function() {
                        this.timeline = gsap.timeline({
                            paused: !0
                        }), this.timeline.add([gsap.to(".menu-btn-svg .line-1", {
                            duration: .8,
                            morphSVG: this.path.line1.to,
                            ease: "power3.inOut"
                        }), gsap.to(".menu-btn-svg .line-2", {
                            duration: .8,
                            morphSVG: this.path.line2.to,
                            ease: "power3.inOut"
                        })])
                    },
                    open: function() {
                        this.timeline.play(), $g.el(".menu-btn-txt .close").classList.add("is-active")
                    },
                    close: function() {
                        this.timeline.reverse(), $g.el(".menu-btn-txt .close").classList.remove("is-active")
                    },
                    goTo: function(t) {
                        this.$store.getters.menu ? this.$eventHub.$emit("menuClose", !0, t) : this.$router.push({
                            path: t
                        })
                    },
                    onScroll: function(t) {
                        t._y;
                        t.y > t.height / 2 ? this.$refs.header.classList.add("is-scrolled") : this.$refs.header.classList.remove("is-scrolled")
                    }
                }
            },
            it = (o(238), Object(K.a)(et, (function() {
                var t = this,
                    e = t.$createElement,
                    o = t._self._c || e;
                return o("header", {
                    ref: "header",
                    staticClass: "g-header",
                    attrs: {
                        id: "js-header",
                        role: "banner"
                    }
                }, [o("div", {
                    staticClass: "header-inner"
                }, [o("div", {
                    staticClass: "l-relative"
                }, [o("div", {
                    staticClass: "header-logo"
                }, [o("div", {
                    staticClass: "header-logo-link",
                    on: {
                        click: function(e) {
                            t.goTo(t.localePath("index"))
                        }
                    }
                }, [o("svg", {
                    staticClass: "svg-logo",
                    attrs: {
                        viewBox: "0 0 108 24"
                    }
                }, [o("path", {
                    attrs: {
                        d: "M16.16,23.55v-9.78H3.81v9.78H0V0.52h3.81v9.75h12.35V0.52h3.82v23.03H16.16z"
                    }
                }), t._v(" "), o("path", {
                    attrs: {
                        d: "M35.42,18.83h3.99c-1.18,3.19-4.27,5.17-7.8,5.17c-4.96,0-8.64-3.61-8.64-8.57c0-4.86,3.5-8.53,8.46-8.53 c4.82,0,8.22,3.68,8.22,8.39c0,0.49,0,0.97-0.07,1.46h-12.8c0.42,2.29,2.39,3.85,4.82,3.85C33.24,20.6,34.62,20.05,35.42,18.83z M26.85,13.8h8.91c-0.35-2.15-2.01-3.61-4.34-3.61C29.07,10.2,27.17,11.65,26.85,13.8z"
                    }
                }), t._v(" "), o("path", {
                    attrs: {
                        d: "M46.16,0.35v23.2h-3.68V0.35H46.16z"
                    }
                }), t._v(" "), o("path", {
                    attrs: {
                        d: "M49.61,0h4.13v4.2h-4.13V0z M53.53,7.35v16.2h-3.68V7.35H53.53z"
                    }
                }), t._v(" "), o("path", {
                    attrs: {
                        d: "M66.44,15.29l6.62,8.25h-4.61l-4.37-5.38l-4.4,5.38h-4.37l6.59-8.12l-6.49-8.08h4.68l4.16,5.2l4.2-5.2h4.51 L66.44,15.29z"
                    }
                }), t._v(" "), o("path", {
                    attrs: {
                        d: "M85.51,18.83h3.99C88.32,22.02,85.24,24,81.7,24c-4.96,0-8.64-3.61-8.64-8.57c0-4.86,3.5-8.53,8.46-8.53 c4.82,0,8.22,3.68,8.22,8.39c0,0.49,0,0.97-0.07,1.46h-12.8c0.42,2.29,2.39,3.85,4.82,3.85C83.33,20.6,84.72,20.05,85.51,18.83z M76.95,13.8h8.91c-0.35-2.15-2.01-3.61-4.34-3.61C79.17,10.2,77.26,11.65,76.95,13.8z"
                    }
                }), t._v(" "), o("path", {
                    attrs: {
                        d: "M103.28,12.03c-0.69-1.35-2.22-1.94-4.4-1.94c-2.08,0-3.43,0.73-3.43,1.91c0,1.11,1.08,1.56,2.98,1.73 l3.09,0.24c3.54,0.28,5.58,1.8,5.58,4.82c0,2.95-2.74,5.2-7.39,5.2c-4.75,0-7.7-2.19-8.43-5.38h4.02 c0.55,1.49,2.22,2.18,4.79,2.18c1.87,0,3.33-0.66,3.33-1.84c0-1.14-1.04-1.63-2.95-1.8l-3.29-0.31 c-3.57-0.35-5.41-1.84-5.41-4.72c0-2.98,2.74-5.24,7.18-5.24c4.86,0,7.49,2.22,8.32,5.13H103.28z"
                    }
                })])])]), t._v(" "), o("nav", {
                    staticClass: "header-lang"
                }, [o("ul", {
                    staticClass: "header-lang-lists"
                }, [o("li", {
                    staticClass: "header-lang-list",
                    class: {
                        "is-active": "ja" === t.$i18n.locale
                    },
                    attrs: {
                        "data-ma-hover": "fixed-link-small",
                        "data-ma-fixed": ""
                    }
                }, [o("a", {
                    staticClass: "lang-link",
                    attrs: {
                        href: "" + t.switchLocalePath("ja")
                    }
                }, [t._v("JP")]), t._v(" "), o("span", {
                    staticClass: "point",
                    attrs: {
                        "data-ma-fixed-target": ""
                    }
                })]), t._v(" "), o("li", {
                    staticClass: "header-lang-list",
                    class: {
                        "is-active": "en" === t.$i18n.locale
                    },
                    attrs: {
                        "data-ma-hover": "fixed-link-small",
                        "data-ma-fixed": ""
                    }
                }, [o("a", {
                    staticClass: "lang-link",
                    attrs: {
                        href: "" + t.switchLocalePath("en")
                    }
                }, [t._v("EN")]), t._v(" "), o("span", {
                    staticClass: "point",
                    attrs: {
                        "data-ma-fixed-target": ""
                    }
                })])])]), t._v(" "), o("button", {
                    staticClass: "menu-btn",
                    on: {
                        click: function(e) {
                            return t.menuToggle(e)
                        }
                    }
                }, [o("div", {
                    staticClass: "menu-btn-inner",
                    attrs: {
                        "data-ma": "force",
                        "data-ma-range": "80"
                    }
                }, [o("div", {
                    staticClass: "menu-btn-lines",
                    attrs: {
                        "data-ma-targets": ""
                    }
                }, [t._m(0), t._v(" "), o("svg", {
                    staticClass: "menu-btn-svg",
                    attrs: {
                        viewBox: "0 0 50 50"
                    }
                }, [o("path", {
                    staticClass: "line line-1",
                    attrs: {
                        d: "M43,21.5H7v-2h36V21.5z"
                    }
                }), t._v(" "), o("path", {
                    staticClass: "line line-2",
                    attrs: {
                        d: "M43,30.5H7v-2h36V30.5z"
                    }
                })])])])])])])])
            }), [function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("div", {
                    staticClass: "menu-btn-txt"
                }, [e("span", {
                    staticClass: "close"
                }, [this._v("Close")])])
            }], !1, null, "5b190144", null).exports);

        function ot(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(object);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }))), e.push.apply(e, o)
            }
            return e
        }
        var nt = {
                name: "AppMenu",
                data: function() {
                    return {
                        isAnimating: !1,
                        isMenuOpen: !1,
                        linesPath: {
                            line1from: "M43,21.5H7v-2h36V21.5z",
                            line1to: "M25,29.5c-4.88,0-7.42-2.26-9.66-4.25C13.17,23.32,11.12,21.5,7,21.5v-2c4.88,0,7.42,2.26,9.66,4.25 c2.17,1.93,4.22,3.75,8.34,3.75c4.12,0,6.17-1.82,8.34-3.75c2.24-1.99,4.78-4.25,9.66-4.25v2c-4.12,0-6.17,1.82-8.34,3.75 C32.42,27.24,29.88,29.5,25,29.5z",
                            line2from: "M43,30.5H7v-2h36V30.5z",
                            line2to: "M43,30.5c-4.88,0-7.42-2.26-9.66-4.25c-2.17-1.93-4.22-3.75-8.34-3.75c-4.12,0-6.17,1.82-8.34,3.75 C14.42,28.24,11.88,30.5,7,30.5v-2c4.12,0,6.17-1.82,8.34-3.75c2.24-1.99,4.78-4.25,9.66-4.25c4.88,0,7.42,2.26,9.66,4.25 c2.17,1.93,4.22,3.75,8.34,3.75V30.5z"
                        },
                        mapsUrl: "",
                        contactEmail: ""
                    }
                },
                computed: function(t) {
                    for (var i = 1; i < arguments.length; i++) {
                        var source = null != arguments[i] ? arguments[i] : {};
                        i % 2 ? ot(Object(source), !0).forEach((function(e) {
                            Object(r.a)(t, e, source[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : ot(Object(source)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                        }))
                    }
                    return t
                }({}, Object(Z.b)({
                    loaded: "loaded",
                    user: "user",
                    page: "page",
                    menu: "menu"
                })),
                watch: {
                    page: function(t) {
                        this.menu && this.close()
                    }
                },
                mounted: function() {
                    var t = this;
                    this.$nextTick((function() {
                        t.setData(), t.$eventHub.$on("menuOpen", t.open), t.$eventHub.$on("menuClose", t.close)
                    }))
                },
                methods: {
                    setData: function() {
                        this.mapsUrl = $g.path.urls.gmaps, this.contactEmail = $g.configs.emails.contact
                    },
                    open: function() {
                        var t = this;
                        this.isAnimating || (this.isAnimating = !0, gsap.timeline({
                            paused: !1,
                            onStart: function() {
                                t.$eventHub.$emit("helixStop"), t.$eventHub.$emit("menuIconOpen"), t.stopMobileScrolling(), $g.doms.html.classList.add("is-fixed"), $g.el(".l-nav").classList.add("is-opened"), $g.el(".g-menu").classList.add("is-visible")
                            },
                            onComplete: function() {
                                t.isAnimating = !1
                            }
                        }).add([gsap.to(".menu-mask", {
                            duration: 1,
                            autoAlpha: 1,
                            ease: "power1.out"
                        }), gsap.to(".menu-rect", {
                            duration: 1,
                            scaleY: 1,
                            ease: "power4.inOut",
                            stagger: {
                                amount: .1
                            }
                        }), gsap.to(".menu-body-clip-outer, .menu-body-clip-inner", {
                            duration: 1,
                            y: "0%",
                            ease: "power4.inOut",
                            delay: .2
                        })]), this.$store.commit("updateMenu", !0))
                    },
                    close: function(t, e) {
                        var o = this;
                        this.isAnimating || (this.isAnimating = !0, gsap.timeline({
                            paused: !1,
                            onStart: function() {
                                o.$eventHub.$emit("menuIconClose"), o.startMobileScrolling(), $g.doms.html.classList.remove("is-fixed"), $g.el(".l-nav").classList.remove("is-opened"), requestTimeout((function() {
                                    t && o.$router.push({
                                        path: e
                                    })
                                }), 400)
                            },
                            onComplete: function() {
                                o.isAnimating = !1, $g.el(".g-menu").classList.remove("is-visible")
                            }
                        }).add([gsap.to(".menu-mask", {
                            duration: .5,
                            autoAlpha: 0,
                            ease: "power1.out",
                            delay: .2
                        }), gsap.to(".menu-rect", {
                            duration: .6,
                            scaleY: 0,
                            ease: "power4.out",
                            delay: .1
                        }), gsap.to(".menu-body-clip-outer", {
                            duration: .7,
                            y: "-101%",
                            ease: "power4.out"
                        }), gsap.to(".menu-body-clip-inner", {
                            duration: .7,
                            y: "101%",
                            ease: "power4.out"
                        })]), this.$eventHub.$emit("helixGetState") && this.$eventHub.$emit("helixStart"), this.$store.commit("updateMenu", !1))
                    },
                    onClickEmail: function(t, e) {
                        var o = this.$refs[t];
                        $g.fn.utility.onClickEmail({
                            isDesktop: this.user.desktop,
                            target: o,
                            evt: e
                        })
                    },
                    onMouseEnterEmail: function(t) {
                        $g.fn.utility.onMouseEnterEmail({
                            isDesktop: this.user.desktop,
                            evt: t
                        })
                    },
                    onMouseLeaveEmail: function(t) {
                        $g.fn.utility.onMouseLeaveEmail({
                            isDesktop: this.user.desktop,
                            evt: t
                        })
                    },
                    goTo: function(t) {
                        this.close(!0, t)
                    },
                    handleTouchMove: function(t) {
                        t.preventDefault()
                    },
                    stopMobileScrolling: function() {
                        document.addEventListener("touchmove", this.handleTouchMove, {
                            passive: !1
                        })
                    },
                    startMobileScrolling: function() {
                        document.removeEventListener("touchmove", this.handleTouchMove, {
                            passive: !1
                        })
                    }
                }
            },
            st = (o(240), o(113)),
            at = Object(K.a)(nt, (function() {
                var t = this,
                    e = t.$createElement,
                    o = t._self._c || e;
                return o("div", {
                    staticClass: "g-menu"
                }, [o("div", {
                    staticClass: "menu-body"
                }, [o("div", {
                    staticClass: "menu-body-clip-outer"
                }, [o("div", {
                    staticClass: "menu-body-clip-inner"
                }, [o("div", {
                    staticClass: "menu-body-inner"
                }, [o("div", {
                    staticClass: "menu-body-relative"
                }, [o("div", {
                    staticClass: "menu-body-left"
                }, [o("nav", {
                    staticClass: "menu-nav",
                    attrs: {
                        role: "navigation"
                    }
                }, [o("ul", {
                    staticClass: "menu-nav-lists"
                }, [o("li", {
                    staticClass: "menu-nav-list"
                }, [o("span", {
                    staticClass: "menu-nav-link",
                    on: {
                        click: function(e) {
                            t.goTo(t.localePath("index"))
                        }
                    }
                }, [t._v("Home")])]), t._v(" "), o("li", {
                    staticClass: "menu-nav-list has-child"
                }, [o("span", {
                    staticClass: "menu-nav-link",
                    on: {
                        click: function(e) {
                            t.goTo(t.localePath("solutions"))
                        }
                    }
                }, [t._v("Solutions")]), t._v(" "), o("ul", {
                    staticClass: "menu-nav-lists-child"
                }, [o("li", {
                    staticClass: "menu-nav-list-child"
                }, [o("span", {
                    staticClass: "menu-nav-link-child",
                    on: {
                        click: function(e) {
                            t.goTo(t.localePath({
                                path: "/solutions/creative/"
                            }))
                        }
                    }
                }, [t._v("Creative")])]), t._v(" "), o("li", {
                    staticClass: "menu-nav-list-child"
                }, [o("span", {
                    staticClass: "menu-nav-link-child",
                    on: {
                        click: function(e) {
                            t.goTo(t.localePath({
                                path: "/solutions/services/"
                            }))
                        }
                    }
                }, [t._v("Services")])])])]), t._v(" "), o("li", {
                    staticClass: "menu-nav-list"
                }, [o("span", {
                    staticClass: "menu-nav-link",
                    on: {
                        click: function(e) {
                            t.goTo(t.localePath("news"))
                        }
                    }
                }, [t._v("News")])]), t._v(" "), o("li", {
                    staticClass: "menu-nav-list"
                }, [o("span", {
                    staticClass: "menu-nav-link",
                    on: {
                        click: function(e) {
                            t.goTo(t.localePath("careers"))
                        }
                    }
                }, [t._v("Careers")])]), t._v(" "), o("li", {
                    staticClass: "menu-nav-list"
                }, [o("span", {
                    staticClass: "menu-nav-link",
                    on: {
                        click: function(e) {
                            t.goTo(t.localePath("contact"))
                        }
                    }
                }, [t._v("Contact")])])])])]), t._v(" "), o("div", {
                    staticClass: "menu-body-right"
                }, [o("ul", {
                    staticClass: "menu-contact-lists"
                }, [o("li", {
                    staticClass: "menu-contact-list | address"
                }, [o("h6", {
                    staticClass: "ttl"
                }, [t._v("Address")]), t._v(" "), o("p", {
                    staticClass: "txt"
                }, [o("a", {
                    staticClass: "link",
                    attrs: {
                        href: t.mapsUrl,
                        target: "_blank",
                        rel: "noopener",
                        "data-ma-hover": "maps-link"
                    }
                }, [o("span", {
                    staticClass: "row"
                }, [t._v(t._s(t.$t("zip")))]), t._v(" "), o("span", {
                    staticClass: "row"
                }, [t._v(t._s(t.$t("address")))])])])]), t._v(" "), o("li", {
                    staticClass: "menu-contact-list | phone"
                }, [o("h6", {
                    staticClass: "ttl"
                }, [t._v("Phone")]), t._v(" "), o("p", {
                    staticClass: "txt"
                }, [o("span", {
                    staticClass: "row"
                }, [t._v(t._s(t.$t("phone")))])])]), t._v(" "), o("li", {
                    staticClass: "menu-contact-list | enquiries"
                }, [o("h6", {
                    staticClass: "ttl"
                }, [t._v("Enquiries")]), t._v(" "), o("div", {
                    staticClass: "email-copy-wrap"
                }, [o("div", {
                    ref: "emailContact",
                    staticClass: "m-email-copy",
                    attrs: {
                        "data-email-to": t._f("email")(t.contactEmail)
                    },
                    on: {
                        click: function(e) {
                            return t.onClickEmail("emailContact", e)
                        },
                        mouseenter: function(e) {
                            return t.onMouseEnterEmail(e)
                        },
                        mouseleave: function(e) {
                            return t.onMouseLeaveEmail(e)
                        }
                    }
                }, [o("a", {
                    staticClass: "email",
                    attrs: {
                        href: t._f("email")("mailto:" + t.contactEmail)
                    }
                }, [o("span", {
                    staticClass: "txt | active"
                }, [t._v(t._s(t._f("email")(t.contactEmail)))]), t._v(" "), o("span", {
                    staticClass: "txt | hover"
                }, [t._v("Copy to clipboard")]), t._v(" "), o("span", {
                    staticClass: "txt | done"
                }, [t._v("E-mail copied")])])])])])])])])])])]), t._v(" "), t._m(0)]), t._v(" "), o("div", {
                    staticClass: "menu-mask",
                    on: {
                        click: t.close
                    }
                })])
            }), [function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("div", {
                    staticClass: "menu-rects"
                }, [e("div", {
                    staticClass: "menu-rect"
                }), this._v(" "), e("div", {
                    staticClass: "menu-rect"
                }), this._v(" "), e("div", {
                    staticClass: "menu-rect"
                }), this._v(" "), e("div", {
                    staticClass: "menu-rect"
                })])
            }], !1, null, "61c28d46", null);
        "function" == typeof st.default && Object(st.default)(at);
        var ct = at.exports;

        function lt(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(object);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }))), e.push.apply(e, o)
            }
            return e
        }
        var ut = {
                name: "AppFooter",
                data: function() {
                    return {
                        isDefaultFooter: null,
                        isContactFooter: null,
                        isFooterVisible: !1,
                        isNotFound: !1,
                        profile: this.$t.bind(this)("profile"),
                        mapsUrl: "",
                        companyProfileUrlJa: "",
                        companyProfileUrlEn: "",
                        contactEmail: "",
                        copyrightYear: (new Date).getFullYear()
                    }
                },
                computed: function(t) {
                    for (var i = 1; i < arguments.length; i++) {
                        var source = null != arguments[i] ? arguments[i] : {};
                        i % 2 ? lt(Object(source), !0).forEach((function(e) {
                            Object(r.a)(t, e, source[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : lt(Object(source)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                        }))
                    }
                    return t
                }({}, Object(Z.b)({
                    user: "user",
                    page: "page"
                })),
                watch: {
                    page: function(t) {
                        var e = this;
                        requestTimeout((function() {
                            $g.pointer.disabled([".footer-scroll-top-area"]), e.isDefaultFooter = !!t.name.indexOf("contact___"), e.isContactFooter = !t.name.indexOf("contact___"), e.isNotFound = !t.name.indexOf("notfound___")
                        }), 500)
                    }
                },
                mounted: function() {
                    var t = this;
                    this.$nextTick((function() {
                        t.setData(), t.raf = t.loop.bind(t), t.isDefaultFooter = !!t.page.name.indexOf("contact___"), t.isContactFooter = !t.page.name.indexOf("contact___"), t.isNotFound = !t.page.name.indexOf("notfound___"), t.$eventHub.$on("onScroll", t.onScroll), t.$eventHub.$on("onResize", t.onResize)
                    }))
                },
                methods: {
                    setData: function() {
                        this.mapsUrl = $g.path.urls.gmaps, this.companyProfileUrlJa = $g.path.urls.profileJa, this.companyProfileUrlEn = $g.path.urls.profileEn, this.contactEmail = $g.configs.emails.contact
                    },
                    onClickEmail: function(t, e) {
                        var o = this.$refs[t];
                        $g.fn.utility.onClickEmail({
                            isDesktop: this.user.desktop,
                            target: o,
                            evt: e
                        })
                    },
                    onMouseEnterEmail: function(t) {
                        $g.fn.utility.onMouseEnterEmail({
                            isDesktop: this.user.desktop,
                            evt: t
                        })
                    },
                    onMouseLeaveEmail: function(t) {
                        $g.fn.utility.onMouseLeaveEmail({
                            isDesktop: this.user.desktop,
                            evt: t
                        })
                    },
                    loop: function() {
                        if (fakeScroll.isActive && this.user.desktop) {
                            var t = Math.abs(50 * (1 - (fakeScroll.getTranslate() + $g.vars.height - $g.vars.footerTop) / $g.vars.footerHeight)),
                                e = Math.abs((fakeScroll.getTranslate() + $g.vars.height - $g.vars.footerTop) / $g.vars.footerHeight);
                            t <= .05 && (t = 0), e >= .99 && (e = 1), gsap.set(this.$refs.footerInner, {
                                y: "".concat(t, "%"),
                                force3D: !0
                            }), gsap.set([this.$refs.footerBody, this.$refs.footerBottom], {
                                alpha: e
                            })
                        }
                    },
                    start: function() {
                        gsap.ticker.add(this.raf)
                    },
                    stop: function() {
                        gsap.ticker.remove(this.raf)
                    },
                    onScroll: function(t) {
                        t._y;
                        var e = t.y,
                            o = t.height;
                        this.user.desktop && (e > $g.vars.footerTop - o - o / 4 ? this.isFooterVisible || (this.isFooterVisible = !0, this.$refs.footer.classList.remove("is-hide"), this.start()) : this.isFooterVisible && ($g.slider || $g.pointer.type("clear"), this.isFooterVisible = !1, this.$refs.footer.classList.add("is-hide"), this.stop()), $g.doms.html.hasAttribute("data-fs-mousedown") || (e > $g.vars.footerTop - o ? $g.pointer.enabled([".footer-scroll-top-area"]) : $g.pointer.disabled([".footer-scroll-top-area"])))
                    },
                    onResize: function(t) {
                        t.width;
                        var e = t.height;
                        $g.fn.utility.setFooterTop(e)
                    },
                    goTo: function(t) {
                        this.$router.push({
                            path: t
                        })
                    },
                    scrollToElement: function(t) {
                        var e = t.id;
                        t.duration, t.ease;
                        $g.pointer.type("clear"), $g.fn.utility.scrollToElement({
                            id: e
                        })
                    }
                }
            },
            pt = (o(242), o(114)),
            ht = Object(K.a)(ut, (function() {
                var t = this,
                    e = t.$createElement,
                    o = t._self._c || e;
                return t.isNotFound ? t._e() : o("footer", {
                    ref: "footer",
                    staticClass: "g-footer is-hide",
                    attrs: {
                        role: "contentinfo"
                    }
                }, [o("div", {
                    ref: "footerInner",
                    staticClass: "footer-inner"
                }, [o("div", {
                    ref: "footerBody",
                    staticClass: "footer-body"
                }, [o("div", {
                    staticClass: "footer-left"
                }, [o("nav", {
                    staticClass: "footer-nav"
                }, [o("ul", {
                    staticClass: "footer-nav-lists"
                }, [o("li", {
                    staticClass: "footer-nav-list"
                }, [o("span", {
                    staticClass: "footer-nav-link",
                    on: {
                        click: function(e) {
                            t.goTo(t.localePath("index"))
                        }
                    }
                }, [o("span", {
                    staticClass: "txt"
                }, [t._v("Home")])])]), t._v(" "), o("li", {
                    staticClass: "footer-nav-list has-child"
                }, [o("span", {
                    staticClass: "footer-nav-link",
                    on: {
                        click: function(e) {
                            t.goTo(t.localePath("solutions"))
                        }
                    }
                }, [o("span", {
                    staticClass: "txt"
                }, [t._v("Solutions")])]), t._v(" "), o("ul", {
                    staticClass: "footer-nav-lists-child"
                }, [o("li", {
                    staticClass: "footer-nav-list-child"
                }, [o("span", {
                    staticClass: "footer-nav-link-child",
                    on: {
                        click: function(e) {
                            t.goTo(t.localePath({
                                path: "/solutions/creative/"
                            }))
                        }
                    }
                }, [o("span", {
                    staticClass: "txt"
                }, [t._v("Creative")])])]), t._v(" "), o("li", {
                    staticClass: "footer-nav-list-child"
                }, [o("span", {
                    staticClass: "footer-nav-link-child",
                    on: {
                        click: function(e) {
                            t.goTo(t.localePath({
                                path: "/solutions/services/"
                            }))
                        }
                    }
                }, [o("span", {
                    staticClass: "txt"
                }, [t._v("Services")])])])])]), t._v(" "), o("li", {
                    staticClass: "footer-nav-list"
                }, [o("span", {
                    staticClass: "footer-nav-link",
                    on: {
                        click: function(e) {
                            t.goTo(t.localePath("news"))
                        }
                    }
                }, [o("span", {
                    staticClass: "txt"
                }, [t._v("News")])])]), t._v(" "), o("li", {
                    staticClass: "footer-nav-list"
                }, [o("span", {
                    staticClass: "footer-nav-link",
                    on: {
                        click: function(e) {
                            t.goTo(t.localePath("careers"))
                        }
                    }
                }, [o("span", {
                    staticClass: "txt"
                }, [t._v("Careers")])])]), t._v(" "), o("li", {
                    staticClass: "footer-nav-list"
                }, [o("span", {
                    staticClass: "footer-nav-link",
                    on: {
                        click: function(e) {
                            t.goTo(t.localePath("contact"))
                        }
                    }
                }, [o("span", {
                    staticClass: "txt"
                }, [t._v("Contact")])])])])])]), t._v(" "), o("div", {
                    staticClass: "footer-right"
                }, [t.isDefaultFooter ? o("div", {
                    staticClass: "footer-contact"
                }, [o("ul", {
                    staticClass: "footer-contact-lists"
                }, [o("li", {
                    staticClass: "footer-contact-list"
                }, [o("h5", {
                    staticClass: "ttl"
                }, [t._v("Office")]), t._v(" "), o("span", {
                    staticClass: "address"
                }, [o("a", {
                    staticClass: "link",
                    attrs: {
                        href: t.mapsUrl,
                        target: "_blank",
                        rel: "noopener",
                        "data-ma-hover": "maps-link"
                    }
                }, [o("span", {
                    staticClass: "row"
                }, [t._v(t._s(t.$t("zip")))]), t._v(" "), o("span", {
                    staticClass: "row"
                }, [t._v(t._s(t.$t("address")))])])]), t._v(" "), o("span", {
                    staticClass: "tel"
                }, [t._v(t._s(t.$t("phone")))])]), t._v(" "), o("li", {
                    staticClass: "footer-contact-list"
                }, [o("h5", {
                    staticClass: "ttl"
                }, [t._v("Enquiries")]), t._v(" "), o("span", {
                    staticClass: "email-copy-wrap"
                }, [o("span", {
                    ref: "emailContact",
                    staticClass: "m-email-copy",
                    attrs: {
                        "data-email-to": t._f("email")(t.contactEmail)
                    },
                    on: {
                        click: function(e) {
                            return t.onClickEmail("emailContact", e)
                        },
                        mouseenter: function(e) {
                            return t.onMouseEnterEmail(e)
                        },
                        mouseleave: function(e) {
                            return t.onMouseLeaveEmail(e)
                        }
                    }
                }, [o("a", {
                    staticClass: "email",
                    attrs: {
                        href: t._f("email")("mailto:" + t.contactEmail)
                    }
                }, [o("span", {
                    staticClass: "txt | active"
                }, [t._v(t._s(t._f("email")(t.contactEmail)))]), t._v(" "), o("span", {
                    staticClass: "txt | hover"
                }, [t._v("Copy to clipboard")]), t._v(" "), o("span", {
                    staticClass: "txt | done"
                }, [t._v("E-mail copied")])])])])])])]) : t._e(), t._v(" "), t.isContactFooter ? o("div", {
                    staticClass: "footer-profile"
                }, [o("p", {
                    staticClass: "txt"
                }, [t._v(t._s(t.$t("profile")))]), t._v(" "), o("h5", {
                    staticClass: "ttl"
                }, [t._v("Overview")]), t._v(" "), "ja" === t.$i18n.locale ? o("a", {
                    staticClass: "link",
                    attrs: {
                        href: t.companyProfileUrlJa,
                        target: "_blank",
                        rel: "noopener",
                        download: "company-profile.pdf",
                        "data-ma-hover": "ex-link"
                    }
                }, [o("span", {
                    staticClass: "txt",
                    attrs: {
                        "data-txt": "Company profile"
                    }
                }, [t._v("Company profile")])]) : o("a", {
                    staticClass: "link",
                    attrs: {
                        href: t.companyProfileUrlEn,
                        target: "_blank",
                        rel: "noopener",
                        download: "company-profile.pdf",
                        "data-ma-hover": "ex-link"
                    }
                }, [o("span", {
                    staticClass: "txt",
                    attrs: {
                        "data-txt": "Company profile"
                    }
                }, [t._v("Company profile")])])]) : t._e()])]), t._v(" "), o("div", {
                    ref: "footerBottom",
                    staticClass: "footer-bottom"
                }, [o("div", {
                    staticClass: "footer-bottom-inner"
                }, [o("div", {
                    staticClass: "legals",
                    on: {
                        click: function(e) {
                            t.goTo(t.localePath("legals"))
                        }
                    }
                }, [o("span", {
                    staticClass: "txt"
                }, [t._v("Legal Mentions")])]), t._v(" "), o("p", {
                    staticClass: "copyright"
                }, [o("small", [t._v("© " + t._s(t.copyrightYear) + " Helixes, Inc.")])])])])]), t._v(" "), o("div", {
                    staticClass: "footer-scroll-top",
                    on: {
                        click: function(e) {
                            return t.scrollToElement({
                                id: "__helixes"
                            })
                        }
                    }
                }, [t._m(0)])])
            }), [function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("div", {
                    staticClass: "footer-scroll-top-area",
                    attrs: {
                        "data-ma": "force",
                        "data-ma-range": "70"
                    }
                }, [e("span", {
                    staticClass: "txt",
                    attrs: {
                        "data-txt": "Top",
                        "data-ma-targets": ""
                    }
                }, [this._v("Top")])])
            }], !1, null, "2c7c83e0", null);
        "function" == typeof pt.default && Object(pt.default)(ht);
        var mt = ht.exports,
            ft = (o(24), o(51), o(29)),
            bt = o(30),
            gt = o(155),
            vt = o.n(gt),
            wt = o(156),
            xt = o.n(wt),
            yt = o(157),
            kt = o.n(yt),
            _t = o(158),
            zt = o.n(_t),
            Ct = o(159),
            Et = o.n(Ct),
            Ot = function() {
                function t(e) {
                    Object(ft.a)(this, t), this.opts = e || {}, this.elem = document.getElementById(this.opts.elem) || document.getElementById("js-dom-canvas"), this.glDomElem = this.opts.glDomElem || "[data-gl-dom]", this.glSource = this.opts.glDomSource || "[data-gl-source]", this.breakpoint = this.opts.breakpoint || 1024, this.isActive = !1, this.isMobile = !1, this.isAnimating = !1, this.frames = 0, this.scrollEffect = 0, this.glShaders = {
                        vs: {
                            plane: vt.a
                        },
                        fs: {
                            plane: xt.a,
                            circle: zt.a,
                            link: kt.a,
                            logo: Et.a
                        }
                    }, this.detectMobile(), this.init()
                }
                return Object(bt.a)(t, [{
                    key: "detectMobile",
                    value: function() {
                        this.isMobile = !!(window.innerWidth <= this.breakpoint || ua.mobile || ua.tablet || ua.ios || ua.ipados || ua.android || ua.webkit || ua.webview || ua.ie)
                    }
                }, {
                    key: "init",
                    value: function() {
                        this.createScene(), this.createDomGL({
                            x: 0,
                            y: 0,
                            isReInit: !1
                        })
                    }
                }, {
                    key: "createScene",
                    value: function() {
                        this.scene = new THREE.Scene, this.width = window.innerWidth, this.height = window.innerHeight, this.time = 0, this.mouse = new THREE.Vector2(.5, .5), this.resolution = new THREE.Vector2(this.width, this.height), this.fov = 45, this.aspect = this.width / this.height, this.near = 1, this.far = 1e4, this.camera = new THREE.PerspectiveCamera(this.fov, this.aspect, this.near, this.far), this.camera.position.set(0, 0, 0), this.camera.lookAt(new THREE.Vector3), this.camera.position.z = this.height / Math.tan(this.fov * Math.PI / 360) / 2, this.renderer = new THREE.WebGLRenderer({
                            alpha: !0,
                            antialias: !0,
                            stencil: !1,
                            depth: !1
                        }), this.renderer.gammaFactor = 1, this.renderer.sortObjects = !1, this.renderer.autoClear = !1, this.renderer.shadowMap.autoUpdate = !1, this.pixelRatio = window.devicePixelRatio >= 2 ? this.width > 1920 ? 1 : ua.mobile || ua.tablet ? 1 : window.devicePixelRatio : window.devicePixelRatio, this.renderer.setPixelRatio(this.pixelRatio), this.renderer.setSize(this.width, this.height), this.container = this.elem, this.container.appendChild(this.renderer.domElement)
                    }
                }, {
                    key: "createDomGL",
                    value: function(t) {
                        var e = t.x,
                            o = t.y,
                            n = t.isReInit;
                        this.glDoms = [], this.glDomElems = document.querySelectorAll(this.glDomElem);
                        for (var i = 0; i < this.glDomElems.length; i++) {
                            var r = this.glDomElems[i];
                            n ? this.setBoundaries({
                                el: r,
                                x: e,
                                y: o
                            }) : this.setBoundaries({
                                el: r
                            }), this.glDomElems.length - 1 === i && this.createMesh()
                        }
                    }
                }, {
                    key: "getTranslateMatrix",
                    value: function(t) {
                        var e = {};
                        if (window.getComputedStyle) {
                            var style = getComputedStyle(t),
                                o = style.transform || style.webkitTransform || style.mozTransform;
                            if (void 0 === o) return {
                                x: 0,
                                y: 0
                            };
                            var n = o.match(/^matrix3d\((.+)\)$/);
                            return n ? parseFloat(n[1].split(", ")[13]) : (n = o.match(/^matrix\((.+)\)$/), e.x = n ? parseFloat(n[1].split(", ")[4]) : 0, e.y = n ? parseFloat(n[1].split(", ")[5]) : 0, e)
                        }
                    }
                }, {
                    key: "setTransform",
                    value: function(t, e) {
                        t.style.webkitTransform = e, t.style.msTransform = e, t.style.transform = e
                    }
                }, {
                    key: "setBoundaries",
                    value: function(t) {
                        var e = t.el,
                            o = t.x,
                            n = t.y,
                            r = e.getBoundingClientRect(),
                            c = r.top,
                            l = r.bottom,
                            h = r.left,
                            d = r.right,
                            m = r.width,
                            f = r.height;
                        e.rectTop = c + (n || 0), e.rectBottom = l + (n || 0), e.rectLeft = h + (o || 0), e.rectRight = d + (o || 0), e.rectWidth = m, e.rectHeight = f;
                        var v = e.dataset.glRatio.split(":");
                        e.ratioX = v[0], e.ratioY = v[1];
                        var w = "" === e.dataset.glAutoplay,
                            x = "" === e.dataset.glOffset,
                            y = e.dataset.glSrc,
                            k = "same" === e.dataset.glTexture ? "same" : e.dataset.glTexture,
                            _ = e.dataset.glType,
                            z = e.dataset.glVs,
                            C = e.dataset.glFs;
                        e.gl = {
                            loading: !1,
                            loaded: !1,
                            ctx: null,
                            mesh: null,
                            tex: null,
                            tex2: null,
                            auto: w,
                            offset: x,
                            type: _,
                            src: y,
                            src2: k,
                            vs: z,
                            fs: C
                        }, this.glDoms.push(e)
                    }
                }, {
                    key: "updateBoundaries",
                    value: function(t) {
                        var e = t.el,
                            o = t.x,
                            n = t.y,
                            r = e.getBoundingClientRect(),
                            c = r.top,
                            l = r.bottom,
                            h = r.left,
                            d = r.right,
                            m = r.width,
                            f = r.height;
                        e.rectTop = c + (n || 0), e.rectBottom = l + (n || 0), e.rectLeft = h + (o || 0), e.rectRight = d + (o || 0), e.rectWidth = m, e.rectHeight = f
                    }
                }, {
                    key: "createMesh",
                    value: function() {
                        for (var i = 0; i < this.glDoms.length; i++) {
                            var t = this.glDoms[i],
                                e = new THREE.PlaneBufferGeometry(1, 1, 5, 5),
                                o = new THREE.RawShaderMaterial({
                                    defines: {
                                        PI: Math.PI,
                                        PR: this.pixelRatio.toFixed(1)
                                    },
                                    uniforms: {
                                        time: {
                                            type: "f",
                                            value: this.time
                                        },
                                        mouse: {
                                            type: "v2",
                                            value: this.mouse
                                        },
                                        resolution: {
                                            type: "v2",
                                            value: new THREE.Vector2(window.innerWidth, window.innerHeight)
                                        },
                                        tDiffuse: {
                                            type: "t",
                                            value: null
                                        },
                                        tDiffuse2: {
                                            type: "t",
                                            value: null
                                        },
                                        uMeshResolution: {
                                            type: "v2",
                                            value: new THREE.Vector2(t.rectWidth, t.rectHeight)
                                        },
                                        uOffset: {
                                            type: "v2",
                                            value: new THREE.Vector2(0, 0)
                                        },
                                        uScale: {
                                            type: "v2",
                                            value: new THREE.Vector2(1, 1)
                                        },
                                        uRatio: {
                                            type: "v2",
                                            value: new THREE.Vector2(t.ratioX, t.ratioY)
                                        },
                                        uAlpha: {
                                            type: "f",
                                            value: 0
                                        },
                                        uScrollEffect: {
                                            type: "f",
                                            value: 0
                                        },
                                        uDragEffect: {
                                            type: "f",
                                            value: 0
                                        },
                                        uHoverEffect: {
                                            type: "f",
                                            value: 0
                                        },
                                        uHoverProgress: {
                                            type: "f",
                                            value: 0
                                        }
                                    },
                                    vertexShader: this.glShaders.vs[t.gl.vs],
                                    fragmentShader: this.glShaders.fs[t.gl.fs],
                                    transparent: !0,
                                    visible: !1
                                });
                            t.gl.mesh = new THREE.Mesh(e, o), t.gl.mesh.scale.set(t.rectWidth, t.rectHeight, 1), this.scene.add(t.gl.mesh), this.glDoms.length - 1 === i && (this.isActive = !0)
                        }
                    }
                }, {
                    key: "loadImage",
                    value: function(t) {
                        var e = this;
                        t.gl.loading = !0;
                        var img = t.querySelector(this.glSource);
                        img.crossOrigin = "anonymous", img.src = "".concat(t.gl.src, "?").concat((new Date).getTime()), img.onload = function(o) {
                            if (t.gl.loaded = !0, t.gl.ctx = img, e.isMobile) img.classList.add("is-loaded");
                            else if (t.gl.tex = new THREE.Texture(img), t.gl.tex.magFilter = THREE.LinearFilter, t.gl.tex.minFilter = THREE.LinearFilter, t.gl.tex.format = THREE.RGBFormat, t.gl.tex.needsUpdate = !0, t.gl.mesh.material.uniforms.tDiffuse.value = t.gl.tex, "same" === t.gl.src2) t.gl.mesh.material.uniforms.tDiffuse2.value = t.gl.tex, e.fadeIn(t);
                            else {
                                var n = new Image;
                                n.crossOrigin = "anonymous", n.src = "".concat(t.gl.src2, "?").concat((new Date).getTime()), n.onload = function(o) {
                                    t.gl.tex2 = new THREE.Texture(n), t.gl.tex2.magFilter = THREE.LinearFilter, t.gl.tex2.minFilter = THREE.LinearFilter, t.gl.tex2.format = THREE.RGBFormat, t.gl.tex2.needsUpdate = !0, t.gl.mesh.material.uniforms.tDiffuse2.value = t.gl.tex2, e.fadeIn(t)
                                }
                            }
                        }
                    }
                }, {
                    key: "loadVideo",
                    value: function(t) {
                        var e = this;
                        t.gl.loading = !0;
                        var video = t.querySelector(this.glSource);
                        video.src = t.gl.src, video.load(), video.onloadedmetadata = function(t) {
                            e.isMobile || (video.currentTime = 0), e.isMobile && video.classList.add("is-loaded")
                        }, video.onloadeddata = function(o) {
                            if (t.gl.loaded = !0, t.gl.ctx = video, !e.isMobile)
                                if (t.gl.tex = new THREE.VideoTexture(video), t.gl.tex.magFilter = THREE.LinearFilter, t.gl.tex.minFilter = THREE.LinearFilter, t.gl.tex.format = THREE.RGBFormat, t.gl.mesh.material.uniforms.tDiffuse.value = t.gl.tex, "same" === t.gl.src2) t.gl.mesh.material.uniforms.tDiffuse2.value = t.gl.tex, e.fadeIn(t);
                                else {
                                    var img = new Image;
                                    img.crossOrigin = "anonymous", img.src = "".concat(t.gl.src2, "?").concat((new Date).getTime()), img.onload = function(o) {
                                        t.gl.tex2 = new THREE.Texture(img), t.gl.tex2.magFilter = THREE.LinearFilter, t.gl.tex2.minFilter = THREE.LinearFilter, t.gl.tex2.format = THREE.RGBFormat, t.gl.tex2.needsUpdate = !0, t.gl.mesh.material.uniforms.tDiffuse2.value = t.gl.tex2, e.fadeIn(t)
                                    }
                                }
                        }
                    }
                }, {
                    key: "fadeIn",
                    value: function(t) {
                        gsap.to(t.gl.mesh.material.uniforms.uAlpha, {
                            duration: 1,
                            value: 1,
                            delay: .15
                        })
                    }
                }, {
                    key: "hoverIn",
                    value: function(t) {
                        t && t.gl && t.gl.mesh && t.gl.tex && !this.isMobile && (gsap.killTweensOf(t.gl.mesh.material.uniforms.uHoverEffect.duration), gsap.to(t.gl.mesh.material.uniforms.uHoverEffect, {
                            duration: 1,
                            value: 1,
                            ease: "power2.out"
                        }))
                    }
                }, {
                    key: "hoverOut",
                    value: function(t) {
                        t && t.gl && t.gl.mesh && t.gl.tex && !this.isMobile && (gsap.killTweensOf(t.gl.mesh.material.uniforms.uHoverEffect.duration), gsap.to(t.gl.mesh.material.uniforms.uHoverEffect, {
                            duration: 1,
                            value: 0,
                            ease: "power2.out"
                        }))
                    }
                }, {
                    key: "reinit",
                    value: function(t) {
                        var e = this,
                            o = t.x,
                            n = t.y;
                        this.glDoms ? (this.destroy({
                            delay: 0
                        }), setTimeout((function() {
                            e.detectMobile(), e.createDomGL({
                                x: o,
                                y: n,
                                isReInit: !0
                            })
                        }), 1)) : (this.detectMobile(), this.createDomGL({
                            x: o,
                            y: n,
                            isReInit: !0
                        }))
                    }
                }, {
                    key: "update",
                    value: function(t) {
                        t.x;
                        var e = t.y,
                            o = t.lastScrollValue,
                            n = t.lastDragValue;
                        if (this.isActive || !this.isMobile) {
                            this.renderer.clear();
                            for (var i = 0; i < this.glDoms.length; i++) {
                                var r = this.glDoms[i];
                                if (r.gl.mesh)
                                    if (r.isInView) {
                                        r.gl.mesh.material.visible = !0;
                                        var c = r.hasAttribute("data-gl-translate-target"),
                                            l = {
                                                x: 0,
                                                y: 0
                                            };
                                        if (c) {
                                            var h = r.getAttribute("data-gl-translate-target"),
                                                d = $g.el.closest(r, h);
                                            d && (l = this.getTranslateMatrix(d))
                                        }
                                        var m = this.getTranslateMatrix(r);
                                        if (r.gl.mesh.position.x = r.rectLeft + (l.x - m.x) - this.width / 2 + r.rectWidth / 2, r.gl.mesh.position.y = -r.rectTop + (e - m.y) + (this.height / 2 - r.rectHeight / 2), r.gl.mesh.material.uniforms.time.value = this.time, r.gl.mesh.material.uniforms.mouse.value = new THREE.Vector2(mouse.x, mouse.y), r.gl.mesh.material.uniforms.uOffset.value.y = r.gl.mesh.position.y / this.height * .1, this.scrollEffect = o >= 0 ? Math.max(0, o - .1) : Math.min(0, o + .1), r.gl.mesh.material.uniforms.uScrollEffect.value = this.scrollEffect, c && (this.dragEffect = n >= 0 ? Math.max(0, n - .1) : Math.min(0, n + .1), r.gl.mesh.material.uniforms.uDragEffect.value = this.dragEffect, r.gl.mesh.material.uniforms.uOffset.value.x = r.gl.mesh.position.x / this.width * .1), !r.gl.loading) switch (r.gl.type) {
                                            case "image":
                                                this.loadImage(r);
                                                break;
                                            case "video":
                                                this.loadVideo(r)
                                        }
                                        "video" === r.gl.type && r.gl.auto && r.gl.loaded && r.gl.ctx && r.gl.ctx.paused && (this.isMobile || r.gl.ctx.play())
                                    } else r.gl.mesh.material.visible = !1, "video" === r.gl.type && r.gl.auto && r.gl.loaded && r.gl.ctx && !r.gl.ctx.paused && (this.isMobile || r.gl.ctx.pause())
                            }
                            this.time += .001, this.frames += 1, this.renderer.render(this.scene, this.camera)
                        }
                    }
                }, {
                    key: "resize",
                    value: function(t) {
                        t.x;
                        var e = t.y;
                        this.width = window.innerWidth, this.height = window.innerHeight, this.renderer.setSize(this.width, this.height), this.camera.aspect = this.width / this.height, this.camera.position.z = this.height / Math.tan(this.fov * Math.PI / 360) / 2, this.camera.updateProjectionMatrix();
                        for (var i = 0; i < this.glDoms.length; i++) {
                            var o = this.glDoms[i];
                            o.gl.mesh && (this.setTransform(o, "matrix(1, 0, 0, 1, 0, 0"), fakeScroll.isMobile || o.gl.offset && this.isAnimating ? this.updateBoundaries({
                                el: o,
                                y: e
                            }) : this.updateBoundaries({
                                el: o
                            }), o.gl.mesh.scale.set(o.rectWidth, o.rectHeight, 1), o.gl.mesh.material.uniforms.resolution.value = new THREE.Vector2(window.innerWidth, window.innerHeight), o.gl.mesh.material.uniforms.uMeshResolution.value = new THREE.Vector2(o.rectWidth, o.rectHeight))
                        }
                    }
                }, {
                    key: "destroy",
                    value: function(t) {
                        var e = this,
                            o = 1e3 * t.delay;
                        if (this.glDoms)
                            for (var n = function(i) {
                                    var t = e.glDoms[i];
                                    t.gl.mesh && setTimeout((function() {
                                        e.scene.remove(t.gl.mesh), t.gl.mesh.material.dispose(), t.gl.mesh.geometry.dispose(), t.gl.tex && (t.gl.tex.dispose(), t.gl.tex = null), t.gl.tex2 && (t.gl.tex2.dispose(), t.gl.tex2 = null), t.gl.mesh.material = null, t.gl.mesh.geometry = null, t.gl.mesh = null
                                    }), o), e.glDoms.length - 1 === i && setTimeout((function() {
                                        e.renderer.clear(), e.glDoms = null, e.isActive = !1
                                    }), o)
                                }, i = 0; i < this.glDoms.length; i++) n(i)
                    }
                }, {
                    key: "animateOn",
                    value: function() {
                        this.isAnimating = !0
                    }
                }, {
                    key: "animateOff",
                    value: function() {
                        this.isAnimating = !1
                    }
                }]), t
            }();

        function Lt(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(object);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }))), e.push.apply(e, o)
            }
            return e
        }
        var Mt = {
                name: "AppDomCanvas",
                data: function() {
                    return {
                        delta: {
                            x: {
                                current: 0
                            },
                            y: {
                                current: 0,
                                last: 0,
                                min: 0,
                                max: 64
                            }
                        },
                        scrollY: 0,
                        translateY: 0
                    }
                },
                computed: function(t) {
                    for (var i = 1; i < arguments.length; i++) {
                        var source = null != arguments[i] ? arguments[i] : {};
                        i % 2 ? Lt(Object(source), !0).forEach((function(e) {
                            Object(r.a)(t, e, source[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : Lt(Object(source)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                        }))
                    }
                    return t
                }({}, Object(Z.b)({
                    loaded: "loaded",
                    page: "page",
                    menu: "menu"
                })),
                mounted: function() {
                    var t = this;
                    this.$nextTick((function() {
                        t.gl = null, t.$eventHub.$on("glInit", t.init), t.$eventHub.$on("glReInit", t.reInit), t.$eventHub.$on("glTick", t.tick), t.$eventHub.$on("glSelfUpdate", t.selfUpdate), t.$eventHub.$on("glDestroy", t.destroy), t.$eventHub.$on("glHoverIn", t.hoverIn), t.$eventHub.$on("glHoverOut", t.hoverOut), t.$eventHub.$on("glAnimOn", t.animOn), t.$eventHub.$on("glAnimOff", t.animOff), t.$eventHub.$on("onResize", t.onResize)
                    }))
                },
                methods: {
                    init: function() {
                        this.gl || (this.gl = new Ot({
                            breakpoint: 1024
                        }), this.raf = this.loop.bind(this))
                    },
                    reInit: function() {
                        var t = this;
                        this.gl && fakeScroll.isActive && requestTimeout((function() {
                            t.gl.reinit({
                                x: 0,
                                y: fakeScroll.getPosition()
                            }), fakeScroll.update()
                        }), 1)
                    },
                    tick: function() {
                        var t = this;
                        requestTimeout((function() {
                            t.start()
                        }), 2)
                    },
                    loop: function() {
                        fakeScroll.isActive && (this.scrollY = fakeScroll.getPosition(), this.translateY = fakeScroll.getTranslate(), this.delta.y.current = fakeScroll.isMobile ? 0 * (this.translateY - this.delta.y.last) : .5 * (this.translateY - this.delta.y.last), this.delta.y.current > this.delta.y.max && (this.delta.y.current = this.delta.y.max), this.delta.y.current < -this.delta.y.max && (this.delta.y.current = -this.delta.y.max), $g.slider && (this.delta.x.current = $g.slider.dragEffect), fakeScroll.isMobile ? this.gl.update({
                            x: null,
                            y: this.scrollY,
                            lastScrollValue: this.delta.y.current,
                            lastDragValue: this.delta.x.current
                        }) : this.gl.update({
                            x: null,
                            y: this.translateY,
                            lastScrollValue: this.delta.y.current,
                            lastDragValue: this.delta.x.current
                        }), this.delta.x.last = mouse.x, this.delta.y.last = fakeScroll.isMobile ? this.scrollY : this.translateY)
                    },
                    selfUpdate: function() {
                        this.gl.resize({
                            x: 0,
                            y: this.translateY
                        })
                    },
                    destroy: function(t) {
                        var e = t.delay;
                        this.gl.isActive && (this.delta = {
                            x: {
                                current: 0
                            },
                            y: {
                                current: 0,
                                last: 0,
                                min: 0,
                                max: 64
                            }
                        }, this.stop(), this.gl.destroy({
                            delay: e
                        }))
                    },
                    hoverIn: function(t) {
                        this.gl && this.gl.hoverIn(t)
                    },
                    hoverOut: function(t) {
                        this.gl && this.gl.hoverOut(t)
                    },
                    animOn: function() {
                        this.gl && this.gl.animateOn()
                    },
                    animOff: function() {
                        this.gl && this.gl.animateOff()
                    },
                    start: function() {
                        gsap.ticker.add(this.raf)
                    },
                    stop: function() {
                        gsap.ticker.remove(this.raf)
                    },
                    lerp: function(t, e, o) {
                        return t + (e - t) * o
                    },
                    onResize: function(t) {
                        t.width, t.height;
                        fakeScroll.isActive && this.gl.isActive && this.gl.resize({
                            x: 0,
                            y: this.translateY
                        })
                    }
                }
            },
            Tt = (o(244), Object(K.a)(Mt, (function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("div", {
                    staticClass: "dom-canvas-container"
                }, [e("div", {
                    ref: "domCanvas",
                    staticClass: "dom-canvas",
                    attrs: {
                        id: "js-dom-canvas"
                    }
                })])
            }), [], !1, null, "33ab9b02", null).exports),
            Rt = o(3),
            jt = function() {
                function t(e) {
                    Object(ft.a)(this, t), this.opts = e || {}, this.wrapper = document.querySelector(this.opts.wrapper), this.button = document.querySelector(this.opts.button), this.cookie = this.opts.cookie || {
                        key: "click-once",
                        value: "cookie",
                        maxAge: null
                    }, this.showClass = this.opts.showClass || "is-show", this.hideClass = this.opts.hideClass || "is-hide", this.onClick = this.opts.onClick || null, this.init()
                }
                return Object(bt.a)(t, [{
                    key: "init",
                    value: function() {
                        this.detectCookie(), this.handleEvents()
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.destroyCookie(), this.removeEvents()
                    }
                }, {
                    key: "detectCookie",
                    value: function() {
                        -1 !== document.cookie.indexOf(this.cookie.key) ? this.wrapper.classList.add(this.hideClass) : this.wrapper.classList.add(this.showClass)
                    }
                }, {
                    key: "setCookie",
                    value: function() {
                        var t = "".concat(this.cookie.key, "=").concat(encodeURIComponent(this.cookie.value), "; max-age=").concat(this.cookie.maxAge, ";");
                        document.cookie = t
                    }
                }, {
                    key: "destroyCookie",
                    value: function() {
                        var t = new Date("2000/1/1 00:00"),
                            e = "".concat(this.cookie.key, "=").concat(encodeURIComponent(this.cookie.value), "; expires=").concat(t);
                        document.cookie = e
                    }
                }, {
                    key: "onButtonClick",
                    value: function(t) {
                        this.setCookie(), this.detectTypes(this.onClick, "function", Function) && this.onClick()
                    }
                }, {
                    key: "handleEvents",
                    value: function() {
                        this.btnclick = this.onButtonClick.bind(this), this.button.addEventListener("click", this.btnclick, !1)
                    }
                }, {
                    key: "removeEvents",
                    value: function() {
                        this.button.removeEventListener("click", this.btnclick, !1)
                    }
                }, {
                    key: "detectTypes",
                    value: function(t, e, o) {
                        return Object(Rt.a)(t) === e || t instanceof o
                    }
                }]), t
            }(),
            St = {
                name: "AppLoading",
                data: function() {
                    return {
                        type: "production",
                        baseUrl: "https://helixes.co",
                        isLoading: !0,
                        isLoaded: !1,
                        isLaw: !0,
                        isImageLoaded: !1,
                        manifest: [],
                        queue: "",
                        imageProgress: {
                            current: 0,
                            before: 0
                        },
                        progress: {
                            current: 0,
                            timeout: 5e3
                        },
                        isFontLoader: !1,
                        isFontLoaded: !1,
                        fontProgress: {
                            current: 0,
                            before: 0
                        },
                        fontsConfig: {
                            num: 3,
                            count: 0
                        },
                        timeline: null,
                        logoHeader: null,
                        logoY: 0
                    }
                },
                mounted: function() {
                    var t = this;
                    this.$nextTick((function() {
                        t.setLogo(), t.preload()
                    }))
                },
                methods: {
                    preload: function() {
                        var t = this;
                        $g.doms.html.classList.add("is-fixed"), $g.el(".g-loading").classList.add("is-loading"), window.addEventListener("DOMContentLoaded", (function() {
                            t.createManifest(), t.createTimeline()
                        })), window.addEventListener("load", (function() {
                            requestTimeout((function() {
                                t.manifest.length && t.createManager()
                            }), 1050)
                        }))
                    },
                    createManifest: function() {
                        var t = this,
                            e = $g.el("[data-preload-image]");
                        Array.prototype.forEach.call(e, (function(e, o) {
                            var image = e.getAttribute("poster") || e.getAttribute("src") || e.getAttribute("data-src") || e.getAttribute("data-gl-src");
                            null !== image && t.manifest.push(image)
                        })), this.manifest.length || gsap.to(this.imageProgress, {
                            duration: .5,
                            current: 100,
                            onUpdateParams: [this.imageProgress],
                            onUpdate: function(e) {
                                if (e.current <= t.imageProgress.before) return !1;
                                t.imageProgress.before = e.current, t.progress.current = Math.ceil(t.imageProgress.current), t.$refs.progress.innerText = t.progress.current
                            },
                            onComplete: function() {
                                t.handleComplete()
                            }
                        })
                    },
                    createManager: function() {
                        var t = this;
                        manager.init({
                            manifest: this.manifest,
                            onProgress: function(progress, e) {
                                return t.handleProgress(progress, e)
                            },
                            onComplete: function(progress) {
                                return t.handleComplete(progress)
                            }
                        })
                    },
                    handleProgress: function(progress, t) {
                        var e = this;
                        gsap.to(this.imageProgress, {
                            duration: .5,
                            current: 100 * progress,
                            onUpdateParams: [this.imageProgress],
                            onUpdate: function(t) {
                                if (t.current <= e.imageProgress.before) return !1;
                                e.imageProgress.before = t.current, e.progress.current = Math.ceil(e.imageProgress.current), e.$refs.progress.innerText = e.progress.current
                            }
                        })
                    },
                    handleComplete: function(progress) {
                        this.isImageLoaded = !0, this.imageProgress.current = 100, this.progress.current = Math.ceil(this.imageProgress.current), this.$refs.progress.innerText = this.progress.current, this.loadingComplete()
                    },
                    loadFonts: function() {
                        var t = this;
                        this.isFontLoader && WebFont.load({
                            custom: {
                                families: ["HK Grotesk Pro:n4,n5,n7"],
                                urls: ["".concat(this.baseUrl, "/assets/css/hk-grotesk-pro.css")]
                            },
                            classes: !1,
                            events: !0,
                            timeout: this.progress.timeout,
                            loading: function() {},
                            active: function() {},
                            inactive: function() {},
                            fontloading: function(t, e) {},
                            fontactive: function(e, o) {
                                t.fontsConfig.count++, t.fontsConfig.count === t.fontsConfig.num && t.handleFontComplete()
                            },
                            fontinactive: function(t, e) {}
                        })
                    },
                    handleFontProgress: function(progress) {
                        var t = this;
                        gsap.to(this.fontProgress, {
                            duration: .1,
                            current: 100 * progress,
                            onUpdateParams: [this.fontProgress],
                            onUpdate: function(e) {
                                if (e.current <= t.fontProgress.before) return !1;
                                t.fontProgress.before = e.current
                            }
                        })
                    },
                    handleFontComplete: function() {
                        this.isFontLoader && $g.doms.html.classList.add("is-font-loaded"), this.isFontLoaded = !0, this.fontProgress.current = 100, this.loadingComplete()
                    },
                    createTimeline: function() {
                        var t = this;
                        this.timeline = gsap.timeline({
                            paused: !0,
                            delay: .45,
                            onStart: function() {
                                t.isLoading = !0, t.progress.current = 100, t.$refs.progress.innerText = t.progress.current, t.loadFonts(), gsap.to([".loading-body-front .loading-progress .front, .loading-body-front .loading-progress .back"], {
                                    duration: .8,
                                    y: "-100%",
                                    delay: .1,
                                    ease: "power2.inOut"
                                }), requestTimeout((function() {
                                    $g.doms.html.classList.remove("is-fixed")
                                }), 500)
                            },
                            onComplete: function() {
                                t.isLoaded = !0, t.law(), $g.el(".g-loading").classList.remove("is-loading")
                            }
                        }), this.timeline.add([gsap.to(".loading-body-front .loading-body-clip-outer", {
                            duration: 1.5,
                            y: "-101%",
                            delay: 0,
                            ease: "expo.inOut"
                        }), gsap.to(".loading-body-front .loading-body-clip-inner", {
                            duration: 1.5,
                            y: "101%",
                            delay: 0,
                            ease: "expo.inOut"
                        }), gsap.to(".loading-body-back .loading-body-clip-outer", {
                            duration: 1.5,
                            y: "-101%",
                            delay: .15,
                            ease: "expo.inOut"
                        }), gsap.to(".loading-body-back .loading-body-clip-inner", {
                            duration: 1.5,
                            y: "101%",
                            delay: .15,
                            ease: "expo.inOut"
                        }), gsap.to([".loading-body-front .loading-logo", ".loading-body-back .loading-logo"], {
                            duration: 1.4,
                            y: -this.logoY,
                            scale: 1,
                            delay: .2,
                            ease: "expo.inOut"
                        }), gsap.to(this.logoHeader, {
                            duration: 1.4,
                            y: 0,
                            scale: 1,
                            delay: .2,
                            ease: "expo.inOut"
                        })])
                    },
                    loadingComplete: function() {
                        this.isImageLoaded && (this.$store.dispatch("completed"), this.$eventHub.$emit("helixInit"), this.timeline.play())
                    },
                    law: function() {
                        var t = this;
                        new jt({
                            cookie: {
                                key: "helixes-".concat(this.type),
                                value: "cookie-law",
                                maxAge: "development" === this.type ? 3600 : 2419200
                            },
                            wrapper: ".cookie-law",
                            button: ".cookie-law-btn",
                            showClass: "is-show",
                            hideClass: "is-hide",
                            onClick: function() {
                                var e = document.querySelector(".cookie-law");
                                e.classList.remove("is-show"), e.classList.add("fadeout"), requestTimeout((function() {
                                    t.isLaw = !1
                                }), 500)
                            }
                        })
                    },
                    setLogo: function() {
                        this.logoHeader = $g.el("#js-header .header-logo-link");
                        var t = this.logoHeader.getBoundingClientRect(),
                            e = t.top,
                            o = (t.bottom, t.left, t.right, t.width, t.height),
                            n = $g.vars.height / 2,
                            r = o / 2;
                        this.logoY = n - r - e, gsap.set(this.logoHeader, {
                            y: this.logoY
                        })
                    },
                    onResize: function(t) {
                        t.width, t.height;
                        this.isLoading || this.setLogo()
                    }
                }
            },
            At = (o(246), o(115)),
            Pt = Object(K.a)(St, (function() {
                var t = this,
                    e = t.$createElement,
                    o = t._self._c || e;
                return o("div", {
                    staticClass: "g-loading"
                }, [t.isLoaded ? t._e() : o("div", {
                    staticClass: "loading-body"
                }, [o("div", {
                    staticClass: "loading-body-front"
                }, [o("div", {
                    staticClass: "loading-body-clip-outer"
                }, [o("div", {
                    staticClass: "loading-body-clip-inner"
                }, [o("div", {
                    staticClass: "loading-body-inner"
                }, [o("div", {
                    staticClass: "loading-logo"
                }, [o("svg", {
                    staticClass: "svg-logo",
                    attrs: {
                        viewBox: "0 0 108 24"
                    }
                }, [o("path", {
                    attrs: {
                        d: "M16.16,23.55v-9.78H3.81v9.78H0V0.52h3.81v9.75h12.35V0.52h3.82v23.03H16.16z"
                    }
                }), t._v(" "), o("path", {
                    attrs: {
                        d: "M35.42,18.83h3.99c-1.18,3.19-4.27,5.17-7.8,5.17c-4.96,0-8.64-3.61-8.64-8.57c0-4.86,3.5-8.53,8.46-8.53 c4.82,0,8.22,3.68,8.22,8.39c0,0.49,0,0.97-0.07,1.46h-12.8c0.42,2.29,2.39,3.85,4.82,3.85C33.24,20.6,34.62,20.05,35.42,18.83z M26.85,13.8h8.91c-0.35-2.15-2.01-3.61-4.34-3.61C29.07,10.2,27.17,11.65,26.85,13.8z"
                    }
                }), t._v(" "), o("path", {
                    attrs: {
                        d: "M46.16,0.35v23.2h-3.68V0.35H46.16z"
                    }
                }), t._v(" "), o("path", {
                    attrs: {
                        d: "M49.61,0h4.13v4.2h-4.13V0z M53.53,7.35v16.2h-3.68V7.35H53.53z"
                    }
                }), t._v(" "), o("path", {
                    attrs: {
                        d: "M66.44,15.29l6.62,8.25h-4.61l-4.37-5.38l-4.4,5.38h-4.37l6.59-8.12l-6.49-8.08h4.68l4.16,5.2l4.2-5.2h4.51 L66.44,15.29z"
                    }
                }), t._v(" "), o("path", {
                    attrs: {
                        d: "M85.51,18.83h3.99C88.32,22.02,85.24,24,81.7,24c-4.96,0-8.64-3.61-8.64-8.57c0-4.86,3.5-8.53,8.46-8.53 c4.82,0,8.22,3.68,8.22,8.39c0,0.49,0,0.97-0.07,1.46h-12.8c0.42,2.29,2.39,3.85,4.82,3.85C83.33,20.6,84.72,20.05,85.51,18.83z M76.95,13.8h8.91c-0.35-2.15-2.01-3.61-4.34-3.61C79.17,10.2,77.26,11.65,76.95,13.8z"
                    }
                }), t._v(" "), o("path", {
                    attrs: {
                        d: "M103.28,12.03c-0.69-1.35-2.22-1.94-4.4-1.94c-2.08,0-3.43,0.73-3.43,1.91c0,1.11,1.08,1.56,2.98,1.73 l3.09,0.24c3.54,0.28,5.58,1.8,5.58,4.82c0,2.95-2.74,5.2-7.39,5.2c-4.75,0-7.7-2.19-8.43-5.38h4.02 c0.55,1.49,2.22,2.18,4.79,2.18c1.87,0,3.33-0.66,3.33-1.84c0-1.14-1.04-1.63-2.95-1.8l-3.29-0.31 c-3.57-0.35-5.41-1.84-5.41-4.72c0-2.98,2.74-5.24,7.18-5.24c4.86,0,7.49,2.22,8.32,5.13H103.28z"
                    }
                })])]), t._v(" "), o("div", {
                    staticClass: "loading-progress"
                }, [o("span", {
                    staticClass: "num"
                }, [o("span", {
                    ref: "progress",
                    staticClass: "front"
                }, [t._v("0")]), t._v(" "), o("span", {
                    staticClass: "back"
                }, [t._v("Go Forward")])])])])])])]), t._v(" "), o("div", {
                    staticClass: "loading-body-back"
                }, [o("div", {
                    staticClass: "loading-body-clip-outer"
                }, [o("div", {
                    staticClass: "loading-body-clip-inner"
                }, [o("div", {
                    staticClass: "loading-body-inner"
                }, [o("div", {
                    staticClass: "loading-logo"
                }, [o("svg", {
                    staticClass: "svg-logo",
                    attrs: {
                        viewBox: "0 0 108 24"
                    }
                }, [o("path", {
                    attrs: {
                        d: "M16.16,23.55v-9.78H3.81v9.78H0V0.52h3.81v9.75h12.35V0.52h3.82v23.03H16.16z"
                    }
                }), t._v(" "), o("path", {
                    attrs: {
                        d: "M35.42,18.83h3.99c-1.18,3.19-4.27,5.17-7.8,5.17c-4.96,0-8.64-3.61-8.64-8.57c0-4.86,3.5-8.53,8.46-8.53 c4.82,0,8.22,3.68,8.22,8.39c0,0.49,0,0.97-0.07,1.46h-12.8c0.42,2.29,2.39,3.85,4.82,3.85C33.24,20.6,34.62,20.05,35.42,18.83z M26.85,13.8h8.91c-0.35-2.15-2.01-3.61-4.34-3.61C29.07,10.2,27.17,11.65,26.85,13.8z"
                    }
                }), t._v(" "), o("path", {
                    attrs: {
                        d: "M46.16,0.35v23.2h-3.68V0.35H46.16z"
                    }
                }), t._v(" "), o("path", {
                    attrs: {
                        d: "M49.61,0h4.13v4.2h-4.13V0z M53.53,7.35v16.2h-3.68V7.35H53.53z"
                    }
                }), t._v(" "), o("path", {
                    attrs: {
                        d: "M66.44,15.29l6.62,8.25h-4.61l-4.37-5.38l-4.4,5.38h-4.37l6.59-8.12l-6.49-8.08h4.68l4.16,5.2l4.2-5.2h4.51 L66.44,15.29z"
                    }
                }), t._v(" "), o("path", {
                    attrs: {
                        d: "M85.51,18.83h3.99C88.32,22.02,85.24,24,81.7,24c-4.96,0-8.64-3.61-8.64-8.57c0-4.86,3.5-8.53,8.46-8.53 c4.82,0,8.22,3.68,8.22,8.39c0,0.49,0,0.97-0.07,1.46h-12.8c0.42,2.29,2.39,3.85,4.82,3.85C83.33,20.6,84.72,20.05,85.51,18.83z M76.95,13.8h8.91c-0.35-2.15-2.01-3.61-4.34-3.61C79.17,10.2,77.26,11.65,76.95,13.8z"
                    }
                }), t._v(" "), o("path", {
                    attrs: {
                        d: "M103.28,12.03c-0.69-1.35-2.22-1.94-4.4-1.94c-2.08,0-3.43,0.73-3.43,1.91c0,1.11,1.08,1.56,2.98,1.73 l3.09,0.24c3.54,0.28,5.58,1.8,5.58,4.82c0,2.95-2.74,5.2-7.39,5.2c-4.75,0-7.7-2.19-8.43-5.38h4.02 c0.55,1.49,2.22,2.18,4.79,2.18c1.87,0,3.33-0.66,3.33-1.84c0-1.14-1.04-1.63-2.95-1.8l-3.29-0.31 c-3.57-0.35-5.41-1.84-5.41-4.72c0-2.98,2.74-5.24,7.18-5.24c4.86,0,7.49,2.22,8.32,5.13H103.28z"
                    }
                })])]), t._v(" "), t._m(0)])])])])]), t._v(" "), t.isLaw ? o("div", {
                    staticClass: "cookie-law"
                }, [o("div", {
                    staticClass: "cookie-law-body"
                }, [o("div", {
                    staticClass: "cookie-law-txt"
                }, [t._v("\n\t\t\t\t" + t._s(t.$t("cookie")) + "\n\t\t\t")]), t._v(" "), o("div", {
                    staticClass: "cookie-law-btn-wrap"
                }, [o("button", {
                    staticClass: "cookie-law-btn"
                }, ["ja" === t.$i18n.locale ? o("span", [t._v("Ok")]) : o("span", [t._v("Accept")])]), t._v(" "), o("a", {
                    staticClass: "link",
                    attrs: {
                        href: t.localePath("legals"),
                        target: "_blank",
                        rel: "noopener"
                    }
                }, [t._v(t._s(t.$t("more")))])])])]) : t._e()])
            }), [function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("div", {
                    staticClass: "loading-progress"
                }, [e("span", {
                    staticClass: "num"
                }, [e("span", {
                    staticClass: "front"
                }, [this._v("Go Forward")])])])
            }], !1, null, "6c0478f0", null);
        "function" == typeof At.default && Object(At.default)(Pt);
        var Ht = Pt.exports,
            $t = o(166),
            Dt = o(28),
            Ft = o(41),
            It = o(167),
            Nt = function(t) {
                function e(t) {
                    var o;
                    return Object(ft.a)(this, e), t = t || {}, (o = Object($t.a)(this, Object(Dt.a)(e).call(this, t))).hitArea = [], o.isReady = !1, o.isFixed = !1, o.pointerType = null, o.currentTarget = null, o.fixedTarget = null, o.maArea = document.body, o.maWrapper = document.querySelectorAll("[data-ma]"), o.maHover = document.querySelectorAll("[data-ma-hover]"), o.onRangeIn = t.onRangeIn || null, o.onRangeOut = t.onRangeOut || null, o.onWindowIn = t.onWindowIn || null, o.onWindowOut = t.onWindowOut || null, o.targetConfigs = {
                        ease: t.maEase || "expo.out",
                        duration: t.maDuration || .5,
                        strength: t.maStrength || 1.2,
                        spring: t.maSpring || .68,
                        range: t.maRange || 50
                    }, o.init(t), o
                }
                return Object(It.a)(e, t), Object(bt.a)(e, [{
                    key: "init",
                    value: function(t) {
                        Object(Ft.a)(Object(Dt.a)(e.prototype), "init", this).call(this, t), this.appendHitArea(), this.isReady = !0
                    }
                }, {
                    key: "reinit",
                    value: function() {
                        Object(Ft.a)(Object(Dt.a)(e.prototype), "detectMobile", this).call(this), this.appendHitArea(), this.handleEvents(!0), this.isReady = !0
                    }
                }, {
                    key: "update",
                    value: function() {
                        this.isReady = !1, this.removeEvents(), this.removeHitArea(), this.hitArea = null, this.hitArea = [], this.maWrapper = this.maHover = null, this.maWrapper = document.querySelectorAll("[data-ma]"), this.maHover = document.querySelectorAll("[data-ma-hover]"), this.reinit()
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        Object(Ft.a)(Object(Dt.a)(e.prototype), "destroy", this).call(this), this.removeEvents(), this.isReady = !1, this.currentTarget = null, this.pointerType = null, this.maArea = null, this.maWrapper = null, this.maHover = null, this.onRangeIn = null, this.onRangeOut = null, this.onWindowIn = null, this.onWindowOut = null
                    }
                }, {
                    key: "marge",
                    value: function(base, t) {
                        return Array.prototype.slice.call(base).concat(Array.prototype.slice.call(t))
                    }
                }, {
                    key: "appendHitArea",
                    value: function() {
                        var t = this;
                        Array.prototype.forEach.call(this.maWrapper, (function(e, o) {
                            var n = e.getAttribute("data-ma-range") || t.targetConfigs.range,
                                r = document.createElement("span"),
                                c = "display: block; position: absolute; top: 50%; left: 50%; width: ".concat(n, "px; height: ").concat(n, "px; margin: ").concat(-n / 2, "px 0 0 ").concat(-n / 2, "px; border-radius: 50%; z-index: -1; pointer-events: none;");
                            r.setAttribute("data-ma-hitarea", ""), r.setAttribute("style", c), e.appendChild(r), t.hitArea.push(r)
                        }))
                    }
                }, {
                    key: "removeHitArea",
                    value: function() {
                        var t = document.querySelectorAll("[data-ma-hitarea]");
                        Array.prototype.forEach.call(t, (function(t, e) {
                            t.parentNode.removeChild(t)
                        }))
                    }
                }, {
                    key: "forceAttractor",
                    value: function(t, e) {
                        var o = this;
                        this.isMobile || Array.prototype.forEach.call(this.maWrapper, (function(n, r) {
                            if (!n.disabled && !n.hasAttribute("data-ma-disabled")) {
                                var c = n.querySelectorAll("[data-ma-targets]"),
                                    l = n.getAttribute("data-ma-range") || o.targetConfigs.range,
                                    h = n.querySelector("[data-ma-hitarea]").getBoundingClientRect(),
                                    d = h.left,
                                    m = h.top,
                                    f = h.width,
                                    v = h.height,
                                    w = t - (d + f / 2),
                                    x = e - (m + v / 2),
                                    y = Math.sqrt(Math.pow(w, 2) + Math.pow(x, 2)),
                                    k = y / l * o.targetConfigs.spring,
                                    _ = w * y / (l / o.targetConfigs.strength) * (1 - k),
                                    z = x * y / (l / o.targetConfigs.strength) * (1 - k);
                                if (y < l) {
                                    o.hitArea[r].in = !0, o.currentTarget = n, n.setAttribute("data-ma-force", "");
                                    for (var i = 0; i < c.length; i++) {
                                        var C = c[i],
                                            E = C.getAttribute("data-ma-targets") || 1;
                                        gsap.to(C, {
                                            duration: o.targetConfigs.duration,
                                            x: _ * E,
                                            y: z * E,
                                            force3D: !0,
                                            ease: o.targetConfigs.ease
                                        })
                                    }
                                    mouse.tx = _, mouse.ty = z, o.pointerType = n.getAttribute("data-ma"), o.detectTypes(o.onRangeIn, "function", Function) && o.onRangeIn(n, o.pointerType)
                                }
                                y >= l && (o.hitArea[r].in && (gsap.killTweensOf([mouse, c]), o.currentTarget = null, n.removeAttribute("data-ma-force"), c[0]._gsTransform && (0 === c[0]._gsTransform.x && 0 === c[0]._gsTransform.y || Array.prototype.forEach.call(c, (function(t, e) {
                                    gsap.to(t, {
                                        duration: o.targetConfigs.duration,
                                        x: 0,
                                        y: 0,
                                        ease: o.targetConfigs.ease,
                                        clearProps: "transform"
                                    })
                                }))), o.detectTypes(o.onRangeOut, "function", Function) && o.onRangeOut(n), o.pointerType = null), o.hitArea[r].in = !1)
                            }
                        }))
                    }
                }, {
                    key: "tick",
                    value: function() {
                        this.isMobile || (Object(Ft.a)(Object(Dt.a)(e.prototype), "tick", this).call(this), this.isFixed && this.updateFixedPosition(this.fixedTarget))
                    }
                }, {
                    key: "updateFixedPosition",
                    value: function(t) {
                        var e = t.querySelector("[data-ma-fixed-target]").getBoundingClientRect(),
                            o = e.top,
                            n = e.left,
                            r = e.width,
                            c = e.height;
                        mouse.x = n + r - r / 2, mouse.y = o + c - c / 2
                    }
                }, {
                    key: "handleEvents",
                    value: function(t) {
                        var o = this;
                        t || Object(Ft.a)(Object(Dt.a)(e.prototype), "handleEvents", this).call(this), this.mousemove = this.onMouseMove.bind(this), this.windowenter = this.onWindowEnter.bind(this), this.windowleave = this.onWindowLeave.bind(this), this.maArea.addEventListener("mousemove", this.mousemove, !1), this.maArea.addEventListener("mouseenter", this.windowenter, !1), this.maArea.addEventListener("mouseleave", this.windowleave, !1), this.linkenter = this.onLinkEnter.bind(this), this.linkleave = this.onLinkLeave.bind(this), this.maHover && Array.prototype.forEach.call(this.maHover, (function(t, e) {
                            t.addEventListener("mouseenter", o.linkenter, !1), t.addEventListener("mouseleave", o.linkleave, !1)
                        }))
                    }
                }, {
                    key: "removeEvents",
                    value: function() {
                        var t = this;
                        this.maArea.removeEventListener("mousemove", this.mousemove, !1), this.maArea.removeEventListener("mouseenter", this.windowenter, !1), this.maArea.removeEventListener("mouseleave", this.windowleave, !1), this.maHover && Array.prototype.forEach.call(this.maHover, (function(e, o) {
                            e.removeEventListener("mouseenter", t.linkenter, !1), e.removeEventListener("mouseleave", t.linkleave, !1)
                        }))
                    }
                }, {
                    key: "onMouseMove",
                    value: function(t) {
                        Object(Ft.a)(Object(Dt.a)(e.prototype), "onMouseMove", this).call(this, t), this.isReady && this.forceAttractor(mouse.x, mouse.y)
                    }
                }, {
                    key: "onWindowEnter",
                    value: function() {
                        this.detectTypes(this.onWindowIn, "function", Function) && this.onWindowIn()
                    }
                }, {
                    key: "onWindowLeave",
                    value: function() {
                        this.detectTypes(this.onWindowOut, "function", Function) && this.onWindowOut(), this.currentTarget && this.onRangeOut(this.currentTarget), this.isFixed = !1, this.fixedTarget = null
                    }
                }, {
                    key: "onLinkEnter",
                    value: function(t) {
                        t.target.disabled || t.target.hasAttribute("data-ma-disabled") || (this.pointerType = t.target.getAttribute("data-ma-hover"), this.detectTypes(this.onRangeIn, "function", Function) && this.onRangeIn(t.target, this.pointerType), t.target.hasAttribute("data-ma-fixed") && (this.isFixed = !0, this.pointerDisabled(), this.fixedTarget = t.target, this.updateFixedPosition(this.fixedTarget)))
                    }
                }, {
                    key: "onLinkLeave",
                    value: function(t) {
                        this.detectTypes(this.onRangeOut, "function", Function) && this.onRangeOut(t.target), this.pointerEnabled(), this.isFixed = !1, this.fixedTarget = null
                    }
                }, {
                    key: "enabled",
                    value: function(t, e) {
                        t = t || null, e = e || null;
                        var o = null,
                            n = this.detectTypes(e, "array", Array);
                        if (n && (o = Array.prototype.slice.call(document.querySelectorAll(e))), this.detectTypes(t, "array", Array)) {
                            var r = Array.prototype.slice.call(document.querySelectorAll(t));
                            r.forEach((function(t, e) {
                                t.removeAttribute("data-ma-disabled"), r.length === e + 1 && n && o.forEach((function(t) {
                                    return t.setAttribute("data-ma-disabled", "")
                                })), t.disabled = !1
                            }))
                        } else {
                            var c = this.marge(this.maWrapper, this.maHover);
                            c.forEach((function(t, e) {
                                t.removeAttribute("data-ma-disabled"), c.length === e + 1 && n && o.forEach((function(t) {
                                    return t.setAttribute("data-ma-disabled", "")
                                })), t.disabled = !1
                            }))
                        }
                    }
                }, {
                    key: "disabled",
                    value: function(t, e) {
                        t = t || null, e = e || null;
                        var o = null,
                            n = this.detectTypes(e, "array", Array);
                        if (n && (o = Array.prototype.slice.call(document.querySelectorAll(e))), this.detectTypes(t, "array", Array)) {
                            var r = Array.prototype.slice.call(document.querySelectorAll(t));
                            r.forEach((function(t, e) {
                                t.setAttribute("data-ma-disabled", ""), r.length === e + 1 && n && o.forEach((function(t) {
                                    return t.removeAttribute("data-ma-disabled")
                                })), t.disabled = !0
                            }))
                        } else {
                            var c = this.marge(this.maWrapper, this.maHover);
                            c.forEach((function(t, e) {
                                t.setAttribute("data-ma-disabled", ""), c.length === e + 1 && n && o.forEach((function(t) {
                                    return t.removeAttribute("data-ma-disabled")
                                })), t.disabled = !0
                            }))
                        }
                    }
                }, {
                    key: "type",
                    value: function(t) {
                        Object(Ft.a)(Object(Dt.a)(e.prototype), "type", this).call(this, t), "clear" === t && (this.pointerEnabled(), this.maWrapper.forEach((function(t, e) {
                            return t.removeAttribute("data-ma-force")
                        })), this.isFixed = !1, this.fixedTarget = null)
                    }
                }, {
                    key: "detectTypes",
                    value: function(t, e, o) {
                        return Object(Rt.a)(t) === e || t instanceof o
                    }
                }]), e
            }(function() {
                function t(e) {
                    Object(ft.a)(this, t), this.opts = e || {}, this.isMobile = !1, this.isPoinerEnabled = !1, this.isFirstMove = !1, this.breakpoint = this.opts.breakpoint || 1024, this.morphCursor = this.opts.morphCursor || !1, this.mpDuration = this.opts.mpDuration || .5, this.mpStrength = this.opts.mpStrength || 1, this.mpWrapper = this.opts.mpWrapper || document.querySelector("[data-mp]"), this.mpParent = this.opts.mpParent || document.querySelector("[data-mp-parent]"), this.mpChildren = this.opts.mpChildren || document.querySelectorAll("[data-mp-child]"), this.easeSelector = this.opts.easeSelector || "data-mp-ease", this.nomorphSelector = this.opts.nomorphSelector || "data-mp-nomorph", this.pointerTypes = this.opts.pointerTypes || []
                }
                return Object(bt.a)(t, [{
                    key: "detectMobile",
                    value: function() {
                        this.isMobile = this.breakpoint >= window.innerWidth
                    }
                }, {
                    key: "init",
                    value: function() {
                        this.detectMobile(), this.initGlobalMouseConfigs(), this.initChildrenMouseConfigs(), this.handleEvents()
                    }
                }, {
                    key: "initGlobalMouseConfigs",
                    value: function() {
                        window.mouse || (window.mouse = {
                            _x: 0,
                            _y: 0,
                            x: 0,
                            y: 0,
                            px: 0,
                            py: 0,
                            ox: 0,
                            oy: 0,
                            lx: 0,
                            ly: 0,
                            mx: 0,
                            my: 0,
                            tx: 0,
                            ty: 0
                        })
                    }
                }, {
                    key: "initChildrenMouseConfigs",
                    value: function() {
                        for (var i = 0; i < this.mpChildren.length; i++) {
                            var t = this.mpChildren[i];
                            t._x = 0, t._y = 0, t._angle = 0
                        }
                    }
                }, {
                    key: "lerp",
                    value: function(t, e, o) {
                        return t + (e - t) * o
                    }
                }, {
                    key: "calcAngle",
                    value: function(t, e, o, n) {
                        return 180 * Math.atan2(n - e, o - t) / Math.PI
                    }
                }, {
                    key: "tick",
                    value: function() {
                        if (this.mpParent && this.mpChildren && !this.isMobile) {
                            var t = this.mpParent.clientWidth,
                                e = this.mpParent.clientHeight,
                                o = mouse.x - t / 2,
                                n = mouse.y - e / 2;
                            if (this.x = o - mouse.tx, this.y = n - mouse.ty, this.isFirstMove)
                                for (var i = 0; i < this.mpChildren.length; i++) {
                                    var r = this.mpChildren[i],
                                        c = r.getAttribute(this.easeSelector) || 0,
                                        l = r.hasAttribute(this.nomorphSelector);
                                    if (r._x = this.lerp(r._x, this.x, c), r._y = this.lerp(r._y, this.y, c), this.morphCursor && !l) {
                                        var h = this.calcAngle(r._x, r._y, this.x, this.y);
                                        r._angle = this.lerp(h, r._angle, c);
                                        var d = (Math.max(Math.min(Math.floor(Math.abs(this.x - r._x) / r._x * 1e3) / 1e3, 1), 0) * (.5 - Math.abs(r._x / window.innerWidth - .5)) + Math.max(Math.min(Math.floor(Math.abs(this.y - r._y) / r._y * 1e3) / 1e3, 1), 0) * (.5 - Math.abs(r._y / window.innerHeight - .5))) * this.mpStrength;
                                        r.style.transform = "translate3d(".concat(r._x, "px, ").concat(r._y, "px, 0) rotate(").concat(r._angle, "deg) scale(").concat(1 + d, ", ").concat(1 - d, ")"), d < 1e-4 && (r.style.transform = "translate3d(".concat(r._x, "px, ").concat(r._y, "px, 0) rotate(0deg) scale(1, 1)"))
                                    }
                                    this.morphCursor && !l || (r.style.transform = "translate3d(".concat(r._x, "px, ").concat(r._y, "px, 0)"))
                                }
                        }
                    }
                }, {
                    key: "on",
                    value: function() {
                        this.tick(), this.raf = requestAnimationFrame(this.on.bind(this))
                    }
                }, {
                    key: "off",
                    value: function() {
                        cancelAnimationFrame(this.raf)
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.removeEvents(), this.isPoinerEnabled = !1, this.isFirstMove = !1, this.mpWrapper = null, this.mpParent = null, this.mpChildren = null, this.pointerTypes = null
                    }
                }, {
                    key: "firstMove",
                    value: function() {
                        var t = this;
                        this.mpWrapper.classList.add("is-active");
                        for (var e = 0; e < this.mpChildren.length; e++) {
                            var o = this.mpChildren[e];
                            o._x = this.x, o._y = this.y, o.style.transform = "translate3d(".concat(this.x, "px, ").concat(this.y, "px, 0)")
                        }
                        setTimeout((function() {
                            t.isFirstMove = !0
                        }), 1e3 * this.mpDuration)
                    }
                }, {
                    key: "handleEvents",
                    value: function() {
                        this.pointerEnabled(), this.mouseenter = this.onMouseEnter.bind(this), this.mousemove = this.onMouseMove.bind(this), this.mouseleave = this.onMouseLeave.bind(this), window.addEventListener("mouseenter", this.mouseenter, {
                            passive: !0
                        }), window.addEventListener("mousemove", this.mousemove, {
                            passive: !0
                        }), window.addEventListener("mouseleave", this.mouseleave), window.addEventListener("touchstart", this.mousedown, {
                            passive: !0
                        }), window.addEventListener("touchmove", this.mousemove, {
                            passive: !0
                        }), window.addEventListener("touchleave", this.mouseup), this.on()
                    }
                }, {
                    key: "removeEvents",
                    value: function() {
                        this.off(), window.removeEventListener("mouseenter", this.mouseenter, {
                            passive: !0
                        }), window.removeEventListener("mousemove", this.mousemove, {
                            passive: !0
                        }), window.removeEventListener("mouseleave", this.mouseleave), window.removeEventListener("touchstart", this.mousedown, {
                            passive: !0
                        }), window.removeEventListener("touchmove", this.mousemove, {
                            passive: !0
                        }), window.removeEventListener("touchleave", this.mouseup), this.pointerDisabled()
                    }
                }, {
                    key: "onMouseEnter",
                    value: function(t) {}
                }, {
                    key: "onMouseMove",
                    value: function(t) {
                        if (this.isPoinerEnabled) {
                            var e = t.touches ? t.touches[0] : t;
                            mouse.x = e.clientX, mouse.y = e.clientY, mouse.px = e.pageX, mouse.py = e.pageY, mouse.ox = e.offsetX, mouse.oy = e.offsetY, mouse.lx = e.layerX, mouse.ly = e.layerY, mouse.mx = e.movementX, mouse.my = e.movementY, mouse._x = mouse.x, mouse._y = mouse.y, this.isFirstMove || this.firstMove()
                        }
                    }
                }, {
                    key: "onMouseLeave",
                    value: function(t) {}
                }, {
                    key: "type",
                    value: function(t) {
                        if ("clear" === t)
                            for (var i in this.pointerTypes) this.mpWrapper.classList.remove("type-".concat(this.pointerTypes[i]));
                        if ("clear" !== t)
                            for (var e in this.mpWrapper.classList.add("type-".concat(t)), this.pointerTypes) t !== this.pointerTypes[e] && this.mpWrapper.classList.remove("type-".concat(this.pointerTypes[e]))
                    }
                }, {
                    key: "pointerEnabled",
                    value: function() {
                        this.isPoinerEnabled = !0
                    }
                }, {
                    key: "pointerDisabled",
                    value: function() {
                        this.isPoinerEnabled = !1
                    }
                }]), t
            }());

        function qt(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(object);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }))), e.push.apply(e, o)
            }
            return e
        }
        var Bt = {
                name: "AppMouse",
                computed: function(t) {
                    for (var i = 1; i < arguments.length; i++) {
                        var source = null != arguments[i] ? arguments[i] : {};
                        i % 2 ? qt(Object(source), !0).forEach((function(e) {
                            Object(r.a)(t, e, source[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : qt(Object(source)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                        }))
                    }
                    return t
                }({}, Object(Z.b)({
                    loaded: "loaded"
                })),
                watch: {
                    loaded: function(t) {
                        if (t && requestTimeout(this.init, 1), t && fakeScroll.isActive) {
                            var e = [".footer-scroll-top-area", ".solutions-mission-image", ".subpage-section-video-relative"];
                            fakeScroll.on("dragstart", (function() {
                                return $g.pointer.disabled({}, e)
                            })), fakeScroll.on("dragend", (function() {
                                return $g.pointer.enabled({}, e)
                            }))
                        }
                    }
                },
                mounted: function() {
                    this.$nextTick((function() {}))
                },
                methods: {
                    init: function() {
                        var t = function(t, e) {
                                var o = function(t, e) {
                                    gsap.killTweensOf($g.pointer.target), ~$g.pointer.pointerTypes.indexOf(e) ? $g.pointer.type(e) : ($g.pointer.type("clear"), console.warn("pointer type is undefined."))
                                };
                                return o(0, e)
                            },
                            e = function(t) {
                                var e = function(t) {
                                    for (var e = t.querySelectorAll("[data-ma-targets]"), i = 0; i < e.length; i++) {
                                        var o = e[i];
                                        gsap.to(o, {
                                            duration: .5,
                                            x: 0,
                                            y: 0,
                                            force3D: !0,
                                            clearProps: "transform",
                                            ease: "power4.out"
                                        })
                                    }
                                    gsap.to(mouse, {
                                        duration: .1,
                                        tx: 0,
                                        ty: 0,
                                        ease: "power4.out"
                                    }), $g.pointer.type("clear")
                                };
                                return e(t)
                            },
                            o = function() {
                                var t = function() {
                                    $g.pointer.mpWrapper.classList.add("is-active")
                                };
                                return t()
                            },
                            n = function() {
                                var t = function() {
                                    $g.pointer.mpWrapper.classList.remove("is-active")
                                };
                                return t()
                            };
                        $g.pointer = new Nt({
                            pointerTypes: ["force", "page-link", "ex-link", "drag-link", "plus-link", "maps-link", "video-pause", "fixed-link-small", "fixed-link-border-light-gray", "fixed-link-border-dark-gray"],
                            breakpoint: 1024,
                            morphCursor: !0,
                            onRangeIn: function(e, o) {
                                return t(e, o)
                            },
                            onRangeOut: function(t) {
                                return e(t)
                            },
                            onWindowIn: function() {
                                return o()
                            },
                            onWindowOut: function() {
                                return n()
                            }
                        }), $g.pointer.disabled([".footer-scroll-top-area"])
                    }
                }
            },
            Ut = (o(248), Object(K.a)(Bt, (function() {
                var t = this,
                    e = t.$createElement,
                    o = t._self._c || e;
                return o("div", {
                    staticClass: "g-mouse-pointer-wrap",
                    attrs: {
                        "data-mp": ""
                    }
                }, [o("div", {
                    staticClass: "mouse-pointer",
                    attrs: {
                        "data-mp-parent": ""
                    }
                }, [t._m(0), t._v(" "), t._m(1), t._v(" "), t._m(2), t._v(" "), o("div", {
                    staticClass: "mouse-pointer-child | pointer-icons",
                    attrs: {
                        "data-mp-child": "",
                        "data-mp-nomorph": "",
                        "data-mp-ease": "0.125"
                    }
                }, [t._m(3), t._v(" "), t._m(4), t._v(" "), o("span", {
                    staticClass: "drag-cursor"
                }, [t._m(5), t._v(" "), o("span", {
                    staticClass: "arrow"
                }), t._v(" "), o("span", {
                    staticClass: "svg"
                }, [o("svg", {
                    staticClass: "svg-progress",
                    attrs: {
                        viewBox: "0 0 74 74"
                    }
                }, [o("path", {
                    attrs: {
                        id: "js-svg-progress-path",
                        d: "M37,1c19.88,0,36,16.12,36,36S56.88,73,37,73S1,56.88,1,37S17.12,1,37,1"
                    }
                })])])]), t._v(" "), t._m(6), t._v(" "), o("span", {
                    staticClass: "maps-cursor"
                }, [o("svg", {
                    staticClass: "svg-pin",
                    attrs: {
                        viewBox: "0 0 16 16"
                    }
                }, [o("path", {
                    staticClass: "pin",
                    attrs: {
                        d: "M8,15.03c-0.18,0-0.37-0.05-0.53-0.15c-1.24-0.77-4.27-2.76-5.13-4.34c-0.5-0.91-0.78-1.96-0.78-3.07 c0-3.59,2.93-6.49,6.53-6.44c3.46,0.05,6.35,2.99,6.35,6.44c0,1.08-0.27,2.1-0.74,3c-0.85,1.61-3.92,3.63-5.16,4.4 C8.37,14.98,8.18,15.03,8,15.03"
                    }
                }), t._v(" "), o("circle", {
                    staticClass: "circle",
                    attrs: {
                        cx: "8",
                        cy: "7.47",
                        r: "1.5"
                    }
                })])]), t._v(" "), t._m(7)])])])
            }), [function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("div", {
                    staticClass: "mouse-pointer-child | pointer-border",
                    attrs: {
                        "data-mp-child": "",
                        "data-mp-ease": "0.1"
                    }
                }, [e("span", {
                    staticClass: "circle"
                })])
            }, function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("div", {
                    staticClass: "mouse-pointer-child | pointer-link",
                    attrs: {
                        "data-mp-child": "",
                        "data-mp-ease": "0.1"
                    }
                }, [e("span", {
                    staticClass: "circle"
                })])
            }, function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("div", {
                    staticClass: "mouse-pointer-child | pointer-link-gap",
                    attrs: {
                        "data-mp-child": "",
                        "data-mp-ease": "0.1"
                    }
                }, [e("span", {
                    staticClass: "circle"
                })])
            }, function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("span", {
                    staticClass: "same-cursor"
                }, [e("span", {
                    staticClass: "line _1"
                }, [e("span", {
                    staticClass: "rect"
                })]), this._v(" "), e("span", {
                    staticClass: "line _2"
                }, [e("span", {
                    staticClass: "rect"
                })]), this._v(" "), e("span", {
                    staticClass: "line _3"
                }, [e("span", {
                    staticClass: "rect"
                })])])
            }, function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("span", {
                    staticClass: "ex-cursor"
                }, [e("span", {
                    staticClass: "line _1"
                }, [e("span", {
                    staticClass: "rect"
                })]), this._v(" "), e("span", {
                    staticClass: "line _2"
                }, [e("span", {
                    staticClass: "rect"
                })]), this._v(" "), e("span", {
                    staticClass: "line _3"
                }, [e("span", {
                    staticClass: "rect"
                })])])
            }, function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("span", {
                    staticClass: "txt"
                }, [e("span", {
                    staticClass: "co"
                }, [e("span", {
                    staticClass: "ci"
                }, [this._v("Hold")])])])
            }, function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("span", {
                    staticClass: "plus-cursor"
                }, [e("span", {
                    staticClass: "line _1"
                }, [e("span", {
                    staticClass: "rect"
                })]), this._v(" "), e("span", {
                    staticClass: "line _2"
                }, [e("span", {
                    staticClass: "rect"
                })])])
            }, function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("span", {
                    staticClass: "video-pause"
                }, [e("span", {
                    staticClass: "line _1"
                }, [e("span", {
                    staticClass: "rect"
                })]), this._v(" "), e("span", {
                    staticClass: "line _2"
                }, [e("span", {
                    staticClass: "rect"
                })])])
            }], !1, null, null, null).exports),
            Yt = o(160),
            Vt = o.n(Yt),
            Wt = o(161),
            Gt = o.n(Wt),
            Kt = o(162),
            Xt = o.n(Kt),
            Jt = o(163),
            Qt = o.n(Jt),
            Zt = o(116),
            te = o.n(Zt),
            ee = function() {
                function t(e) {
                    Object(ft.a)(this, t), e = e || {}, this.frameSteps = e.frameSteps || 1, this.elem = document.getElementById(e.elem) || document.getElementById("js-helix-canvas"), this.helixLineNum = e.helixLineNum || window.innerHeight / 2, this.helixLineLength = e.helixLineLength || 50, this.helixLineInterval = e.helixLineInterval || 10, this.helixLineDistortion = e.helixLineDistortion || .1, this.meshLineColors = e.meshLineColors || ["#7C4DFF", "#448AFF", "#1DE9B6"], this.meshLineNum = e.meshLineNum || 10, this.addMeshLineColors = e.addMeshLineColors || {
                        default: ["#7C4DFF", "#448AFF", "#1DE9B6"]
                    }, this.addMeshLineNum = e.addMeshLineNum || 20, this.breakpoint = e.breakpoint || 1024, this.useHelper = e.helper || !1, this.helixLineNum = parseInt(this.helixLineNum), this.meshLineColors.map((function(col) {
                        return new THREE.Color(col)
                    })), this.isHelper = !1, this.isRender = !1, this.isRAF = !1, this.isState = !1, this.isTransition = !1, this.isMouseDown = !1, this.isMouseMove = !1, this.frames = 250, this.frameSpeed = .5, this.throttle = null, this.zDepth = 750, this.helixLines = [], this.meshLines = [], this.addMeshLines = [], this.animParams = {
                        helixLineLength: 0,
                        meshLinesOpacity: 0
                    }, this.detectMobile(), this.init(), this.useHelper && this.initHelper()
                }
                return Object(bt.a)(t, [{
                    key: "detectMobile",
                    value: function() {
                        this.isMobile = !!(window.innerWidth <= this.breakpoint || ua.mobile || ua.tablet || ua.ios || ua.ipados || ua.android || ua.webkit || ua.webview)
                    }
                }, {
                    key: "init",
                    value: function() {
                        this.isState = !0, this.createScene(), this.createLights(), this.createPostprocessNoise(), this.createNearBackground(), this.createMeshLines(), this.createHelixLines(), this.handleEvents()
                    }
                }, {
                    key: "createScene",
                    value: function() {
                        this.width = window.innerWidth, this.height = window.innerHeight, this.scene = new THREE.Scene, this.scene.fog = new THREE.FogExp2(16711422, 36e-5), this.group = new THREE.Group, this.scene.add(this.group), this.translatePosition = this.width / 4.5, this.group.position.x = this.translatePosition, this.meshLineGroup = new THREE.Object3D, this.group.add(this.meshLineGroup), this.addMeshLineGroup = new THREE.Object3D, this.group.add(this.addMeshLineGroup), this.helixGroup = new THREE.Object3D, this.group.add(this.helixGroup), this.fov = 45, this.aspect = this.width / this.height, this.near = 1, this.far = 1e4, this.camera = new THREE.PerspectiveCamera(this.fov, this.aspect, this.near, this.far), this.camera.position.set(0, 0, 0), this.camera.lookAt(new THREE.Vector3), this.camera.position.z = this.height / Math.tan(this.fov * Math.PI / 360) / 2, this.renderer = new THREE.WebGLRenderer({
                            alpha: !0,
                            antialias: !1,
                            stencil: !0,
                            depth: !0
                        }), this.pixelRatio = window.devicePixelRatio >= 2 ? this.width > 1920 ? 1 : 2 : window.devicePixelRatio, this.renderer.setPixelRatio(this.pixelRatio), this.renderer.setSize(this.width, this.height), this.renderer.gammaFactor = 1, this.renderer.sortObjects = !1, this.renderer.autoClear = !1, this.renderer.shadowMap.autoUpdate = !1, this.renderScene = new THREE.RenderPass(this.scene, this.camera), this.composer = new THREE.EffectComposer(this.renderer), this.composer.addPass(this.renderScene), this.container = this.elem, this.container.appendChild(this.renderer.domElement), this.time = 0, this.mouse = new THREE.Vector2(0, 0), this.resolution = new THREE.Vector2(this.width, this.height)
                    }
                }, {
                    key: "createLights",
                    value: function() {
                        this.ambientLight = new THREE.AmbientLight(16711422), this.ambientLight.color.multiplyScalar(.9), this.ambientLight.position.set(0, 0, 0), this.scene.add(this.ambientLight), this.directionalLight = new THREE.DirectionalLight(16711422), this.directionalLight.color.multiplyScalar(.1), this.directionalLight.position.set(0, 0, 1), this.scene.add(this.directionalLight), this.pointLight = new THREE.PointLight(15724527, 1, this.width, 2), this.pointLight.color.multiplyScalar(.5), this.pointLight.position.set(0, 0, 100), this.scene.add(this.pointLight)
                    }
                }, {
                    key: "createPostprocessNoise",
                    value: function() {
                        this.noisePass = new THREE.ShaderPass({
                            vertexShader: Xt.a,
                            fragmentShader: Qt.a,
                            uniforms: {
                                time: {
                                    type: "f",
                                    value: 0
                                },
                                tDiffuse: {
                                    type: "t",
                                    value: null
                                },
                                uNoise: {
                                    type: "f",
                                    value: 0
                                },
                                uNoiseLevelRGBA: {
                                    type: "v4",
                                    value: [.028, .028, .028, .12]
                                }
                            }
                        }), this.noisePass.renderToScreen = !0, this.composer.addPass(this.noisePass)
                    }
                }, {
                    key: "createNearBackground",
                    value: function() {
                        this.bgMouse = new THREE.Vector2;
                        var t = this.camera.position.z - -this.zDepth,
                            e = this.width / this.height,
                            o = this.camera.fov * Math.PI / 180,
                            n = 2 * Math.tan(o / 2) * t,
                            r = n * e,
                            c = new THREE.PlaneBufferGeometry(r, n, 1, 1),
                            l = 1.05 * Math.max(this.width, this.height),
                            h = {
                                time: {
                                    type: "f",
                                    value: this.time
                                },
                                mouse: {
                                    type: "v2",
                                    value: this.mouse
                                },
                                resolution: {
                                    type: "v2",
                                    value: this.resolution
                                },
                                gCircleRange: {
                                    type: "f",
                                    value: 0
                                },
                                gAspect: {
                                    type: "f",
                                    value: 1
                                },
                                gScale: {
                                    type: "v2",
                                    value: [1 / this.width * l, 1 / this.height * l]
                                },
                                gSmoothing: {
                                    type: "v2",
                                    value: [-.5, 1]
                                },
                                gOffset: {
                                    type: "v2",
                                    value: [.5, .5]
                                },
                                gStartColor: {
                                    type: "v3",
                                    value: [.95, .95, .95]
                                },
                                gEndColor: {
                                    type: "v3",
                                    value: [.8, .8, .8]
                                }
                            },
                            d = THREE.UniformsUtils.merge([THREE.UniformsLib.fog, THREE.UniformsLib.lights, h]),
                            m = new THREE.ShaderMaterial({
                                side: THREE.FrontSide,
                                uniforms: d,
                                vertexShader: Vt.a,
                                fragmentShader: Gt.a,
                                wireframe: !1,
                                fog: !0,
                                lights: !0
                            });
                        this.bgNearMesh = new THREE.Mesh(c, m), this.bgNearMesh.position.z = -this.zDepth, this.bgNearMesh.rotation.x = 2 * Math.PI, this.bgNearMesh.visible = !0, this.scene.add(this.bgNearMesh)
                    }
                }, {
                    key: "createMeshLines",
                    value: function() {
                        for (var i = 0; i < this.meshLineNum; i++) {
                            var t = this.lineMesh({
                                simplex: new te.a(new Date),
                                idx: i,
                                radius: this.getRandomInt(220, 240),
                                num: this.getRandomInt(11, 13),
                                segment: this.height / 5,
                                strength: this.getRandomFloat(.76, .86),
                                color: this.meshLineColors,
                                lineWidth: {
                                    min: 1,
                                    max: 2.5
                                },
                                dashOffset: {
                                    min: 0,
                                    max: 1
                                },
                                dashRatio: {
                                    min: .86,
                                    max: .96
                                },
                                posNoise: this.getRandomFloat(1, 3),
                                opacity: 1,
                                speed: {
                                    1: {
                                        min: 1e-4,
                                        max: 2e-4
                                    },
                                    2: {
                                        min: 15e-5,
                                        max: 25e-5
                                    }
                                }
                            });
                            this.meshLines.push(t), this.meshLineGroup.add(t)
                        }
                        this.meshLineGroup.position.z = this.addMeshLineGroup.position.z = -50, this.meshLineGroup.rotation.x = this.addMeshLineGroup.rotation.x = this.degToRad(90)
                    }
                }, {
                    key: "createHelixLines",
                    value: function() {
                        for (var t = new THREE.BufferGeometry, e = [], o = new THREE.LineBasicMaterial({
                                color: 16725559,
                                fog: !0,
                                transparent: !0,
                                opacity: 0
                            }), i = 0; i < this.helixLineNum; i++) {
                            var n = new THREE.Vector3;
                            i % 2 ? (n.x = .75 * -this.helixLineLength, n.y = i * this.helixLineInterval - this.helixLineNum * (this.helixLineInterval / 2), n.z = 0) : (n.x = 1.5 * -this.helixLineLength, n.y = i * this.helixLineInterval - this.helixLineNum * (this.helixLineInterval / 2), n.z = 0), e.push(n.x, n.y, n.z)
                        }
                        t.setAttribute("_position", new THREE.Float32BufferAttribute(e, 3)), t.setAttribute("position", new THREE.Float32BufferAttribute(e, 3)), t.computeBoundingSphere(), this.helixLinesLeft = new THREE.LineSegments(t, o);
                        for (var r = new THREE.BufferGeometry, c = [], l = new THREE.LineBasicMaterial({
                                color: 16731984,
                                fog: !0,
                                transparent: !0,
                                opacity: 0
                            }), h = 0; h < this.helixLineNum; h++) {
                            var d = new THREE.Vector3;
                            h % 2 ? (d.x = .75 * this.helixLineLength, d.y = h * this.helixLineInterval - this.helixLineNum * (this.helixLineInterval / 2), d.z = 0) : (d.x = 1.5 * this.helixLineLength, d.y = h * this.helixLineInterval - this.helixLineNum * (this.helixLineInterval / 2), d.z = 0), c.push(d.x, d.y, d.z)
                        }
                        r.setAttribute("_position", new THREE.Float32BufferAttribute(c, 3)), r.setAttribute("position", new THREE.Float32BufferAttribute(c, 3)), r.computeBoundingSphere(), this.helixLinesRight = new THREE.LineSegments(r, l), this.helixGroup.add(this.helixLinesLeft, this.helixLinesRight)
                    }
                }, {
                    key: "resizeBackground",
                    value: function() {
                        this.bgNearMesh && (this.scene.remove(this.bgNearMesh), this.bgNearMesh.material.dispose(), this.bgNearMesh.geometry.dispose(), this.createNearBackground())
                    }
                }, {
                    key: "tick",
                    value: function() {
                        if (this.composer && this.helixLinesRight && this.helixLinesLeft && this.meshLines.length) {
                            this.renderer.clear(), this.noisePass.uniforms.uNoise.value += .1, this.noisePass.uniforms.uNoise.value %= 1, this.bgNearMesh.material.uniforms.time.value = this.time, this.bgNearMesh.material.uniforms.mouse.value = new THREE.Vector2(this.bgMouse.x, this.bgMouse.y);
                            for (var t = this.helixLinesLeft.geometry.attributes._position.array, e = this.helixLinesRight.geometry.attributes._position.array, i = 0; i < this.helixLineNum; i++) i % 2 ? (this.helixLinesLeft.geometry.attributes.position.array[3 * i + 0] = (t[3 * i + 0] + Math.sin((i + this.frames * this.frameSpeed) * this.helixLineDistortion) * this.helixLineLength) * this.animParams.helixLineLength, this.helixLinesLeft.geometry.attributes.position.array[3 * i + 1] = t[3 * i + 1], this.helixLinesLeft.geometry.attributes.position.array[3 * i + 2] = t[3 * i + 2] + Math.cos((i + this.frames * this.frameSpeed) * this.helixLineDistortion) * this.helixLineLength) : (this.helixLinesLeft.geometry.attributes.position.array[3 * i + 0] = (t[3 * i + 0] + Math.cos((i + this.frames * this.frameSpeed) * this.helixLineDistortion) * this.helixLineLength) * this.animParams.helixLineLength, this.helixLinesLeft.geometry.attributes.position.array[3 * i + 1] = t[3 * i + 1], this.helixLinesLeft.geometry.attributes.position.array[3 * i + 2] = t[3 * i + 2] + Math.cos((i + this.frames * this.frameSpeed) * this.helixLineDistortion) * this.helixLineLength), i % 2 ? (this.helixLinesRight.geometry.attributes.position.array[3 * i + 0] = (e[3 * i + 0] - Math.cos((i + this.frames * this.frameSpeed) * this.helixLineDistortion) * this.helixLineLength) * this.animParams.helixLineLength, this.helixLinesRight.geometry.attributes.position.array[3 * i + 1] = e[3 * i + 1], this.helixLinesRight.geometry.attributes.position.array[3 * i + 2] = e[3 * i + 2] + Math.sin((i + this.frames * this.frameSpeed) * this.helixLineDistortion) * this.helixLineLength) : (this.helixLinesRight.geometry.attributes.position.array[3 * i + 0] = (e[3 * i + 0] - Math.sin((i + this.frames * this.frameSpeed) * this.helixLineDistortion) * this.helixLineLength) * this.animParams.helixLineLength, this.helixLinesRight.geometry.attributes.position.array[3 * i + 1] = e[3 * i + 1], this.helixLinesRight.geometry.attributes.position.array[3 * i + 2] = e[3 * i + 2] + Math.sin((i + this.frames * this.frameSpeed) * this.helixLineDistortion) * this.helixLineLength), this.helixLinesLeft.geometry.attributes.position.needsUpdate = !0, this.helixLinesRight.geometry.attributes.position.needsUpdate = !0;
                            for (var o = 0; o < this.meshLineNum; o++) {
                                var n = this.meshLines[o];
                                n.material.uniforms.dashOffset.value -= .0025 + n.speed, n.material.opacity = Math.sin(o + .025 * this.frames) * this.animParams.meshLinesOpacity
                            }
                            this.pointLight.position.x = this.lerp(this.pointLight.position.x, 1.15 * (mouse.x - this.width / 2), .1), this.pointLight.position.y = this.lerp(this.pointLight.position.y, 1.15 * -(mouse.y - this.height / 2), .1), this.isMouseMove && (this.group.rotation.x = this.lerp(this.group.rotation.y, 25e-5 * (mouse.y - this.height / 2), .025), this.group.rotation.y = this.lerp(this.group.rotation.x, 45e-5 * (mouse.x - this.width / 2), .025)), this.time += .01, this.frames += this.frameSteps, this.composer.render()
                        }
                    }
                }, {
                    key: "getState",
                    value: function() {
                        return this.isState
                    }
                }, {
                    key: "setState",
                    value: function(t) {
                        this.isState = t
                    }
                }, {
                    key: "fadeIn",
                    value: function(t) {
                        var e = this,
                            o = t.delay,
                            n = t.pageName;
                        gsap.fromTo(this.group.position, {
                            x: 0,
                            y: this.height / 3.5,
                            z: this.zDepth / 2
                        }, {
                            duration: 2,
                            x: this.translatePosition,
                            y: 0,
                            z: 0,
                            ease: "power1.inOut",
                            delay: o - .15
                        }), gsap.fromTo(this.group.rotation, {
                            x: this.degToRad(0),
                            y: this.degToRad(180),
                            z: this.degToRad(0)
                        }, {
                            duration: 2,
                            x: this.degToRad(0),
                            y: this.degToRad(0),
                            z: this.degToRad(-35),
                            ease: "power1.out",
                            delay: o - .1
                        }), gsap.to([this.helixLinesLeft.material, this.helixLinesRight.material], {
                            duration: 1.2,
                            opacity: 1,
                            ease: "power1.inOut",
                            delay: o + .5
                        }), gsap.fromTo(this.helixGroup.rotation, {
                            y: this.degToRad(0)
                        }, {
                            duration: 2,
                            y: this.degToRad(-360),
                            ease: "power3.inOut",
                            delay: o + .5
                        }), gsap.to(this.animParams, {
                            duration: 1.2,
                            meshLinesOpacity: 1,
                            ease: "sine.out",
                            delay: o + 1.25
                        }), gsap.to(this.animParams, {
                            duration: 2,
                            helixLineLength: 1,
                            ease: "sine.out",
                            delay: o + 1.25,
                            onComplate: function() {
                                requestTimeout((function() {
                                    e.isMouseMove = !0
                                }), 980)
                            }
                        }), requestTimeout((function() {
                            e.addAnimateMeshLines(n, "fadeIn")
                        }), 1e3 * o + 200)
                    }
                }, {
                    key: "setDefault",
                    value: function() {
                        this.isMouseMove = !0, this.group.rotation.x = this.degToRad(0), this.group.rotation.y = this.degToRad(0), this.group.rotation.z = this.degToRad(-35), this.helixGroup.rotation.y = this.degToRad(0), this.helixLinesLeft.material.opacity = 1, this.helixLinesRight.material.opacity = 1, this.animParams.helixLineLength = 1, this.animParams.meshLinesOpacity = 1
                    }
                }, {
                    key: "transition",
                    value: function(t) {
                        this.isTransition || (this.isTransition = !0, this.start(), gsap.fromTo(this.helixGroup.rotation, {
                            y: this.degToRad(0)
                        }, {
                            duration: 2.6,
                            y: this.degToRad(-360),
                            ease: "power3.inOut"
                        }), this.addAnimateMeshLines(t, "transition"))
                    }
                }, {
                    key: "getPageName",
                    value: function(t) {
                        return ~t.indexOf("index") ? "home" : ~t.indexOf("solutions-creative") ? "creative" : ~t.indexOf("solutions-services") ? "services" : ~t.indexOf("solutions") ? "solutions" : ~t.indexOf("news") ? "news" : ~t.indexOf("careers") ? "careers" : ~t.indexOf("contact") ? "contact" : ~t.indexOf("legals") ? "legals" : ~t.indexOf("notfound") ? "notfound" : "undefined"
                    }
                }, {
                    key: "addAnimateMeshLines",
                    value: function(t, e) {
                        var o, n, r = this,
                            c = this.getPageName(t),
                            l = "transition" === e ? this.addMeshLineNum : this.width / 100 > 25 ? 25 : this.width / 100;
                        this.width > this.height ? (o = this.width / 8, n = this.width / 7) : (o = this.width / 3 - 50, n = this.width / 3);
                        for (var i = 0; i < l; i++) {
                            var h = this.lineMesh({
                                simplex: new te.a(new Date),
                                idx: i,
                                radius: "transition" === e ? this.getRandomInt(180, 200) : this.getRandomInt(o, n),
                                num: "transition" === e ? this.getRandomInt(15, 17) : this.getRandomInt(16, 18),
                                segment: "transition" === e ? this.height / 5 : this.height / 4,
                                strength: "transition" === e ? this.getRandomFloat(.03, .05) : this.getRandomFloat(.04, .06),
                                color: this.addMeshLineColors[c],
                                lineWidth: {
                                    min: 1.5,
                                    max: 4.5
                                },
                                dashOffset: {
                                    min: 0,
                                    max: 1
                                },
                                dashRatio: {
                                    min: "transition" === e ? .92 : .86,
                                    max: "transition" === e ? .95 : .94
                                },
                                posNoise: "transition" === e ? this.getRandomFloat(1, 4) : this.getRandomFloat(2, 5),
                                opacity: 0,
                                speed: {
                                    1: {
                                        min: "transition" === e ? .078 : .178,
                                        max: "transition" === e ? .082 : .282
                                    },
                                    2: {
                                        min: "transition" === e ? .079 : .179,
                                        max: "transition" === e ? .081 : .281
                                    }
                                }
                            });
                            this.addMeshLines.push(h), this.addMeshLineGroup.add(h)
                        }
                        for (var d = 0; d < l; d++) {
                            var m = this.addMeshLines[d];
                            gsap.to(m.material.uniforms.dashOffset, {
                                duration: 5,
                                value: -1 * m.speed,
                                delay: .03 * d,
                                ease: "power4.out"
                            }), gsap.to(m.material, {
                                duration: .25,
                                opacity: 1,
                                delay: .03 * d,
                                ease: "power0"
                            }), gsap.to(m.material, {
                                duration: .5,
                                opacity: 0,
                                delay: .03 * d + 1,
                                ease: "power0"
                            })
                        }
                        requestTimeout((function() {
                            r.removeMeshLines()
                        }), 1e3 * (.03 * l + 1.5))
                    }
                }, {
                    key: "lineMesh",
                    value: function(t) {
                        for (var e = t.simplex, o = t.idx, n = t.radius, r = t.num, c = t.segment, l = t.strength, h = t.color, d = t.lineWidth, m = t.dashOffset, f = t.dashRatio, v = t.posNoise, w = t.opacity, x = t.speed, y = [], i = 0; i < r; i++) {
                            var k = e.noise2D(o, i);
                            y.push(new THREE.Vector3(n * Math.cos(i + k * l), n * Math.sin(i + k * l), 4 * n - (i + o) * (this.height / r)))
                        }
                        var _ = new THREE.CatmullRomCurve3(y).getPoints(c),
                            z = (new THREE.Geometry).setFromPoints(_),
                            line = new THREE.MeshLine;
                        line.setGeometry(z);
                        var C = line.geometry,
                            E = new THREE.MeshLineMaterial({
                                side: THREE.DoubleSide,
                                color: this.getRandomItem(h),
                                lineWidth: this.getRandomFloat(d.min, d.max),
                                dashArray: 1,
                                dashOffset: this.getRandomFloat(m.min, m.max),
                                dashRatio: this.getRandomFloat(f.min, f.max),
                                fog: !0,
                                transparent: !0,
                                opacity: w,
                                depthWrite: !1
                            }),
                            O = new THREE.Mesh(C, E);
                        return O.position.z = Math.random() > .5 ? Math.sin(o) * this.helixLineLength * v : Math.cos(o) * -this.helixLineLength * v, O.speed = Math.random() > .5 ? this.getRandomFloat(x[1].min, x[1].max) : this.getRandomFloat(x[2].min, x[2].max), O
                    }
                }, {
                    key: "removeMeshLines",
                    value: function() {
                        for (var i = 0; i < this.addMeshLineNum; i++) {
                            var t = this.addMeshLines[i];
                            t && t.material ? (this.addMeshLineGroup.remove(t), t.material.dispose(), t.geometry.dispose(), i === this.addMeshLineNum - 1 && (this.addMeshLines = null, this.addMeshLines = [], this.isTransition = !1)) : (this.addMeshLines = null, this.addMeshLines = [])
                        }
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
                    key: "resize",
                    value: function(t) {
                        var e = this,
                            o = t.width,
                            n = t.height;
                        clearTimeout(this.throttle), this.throttle = setTimeout((function() {
                            e.width = o, e.height = n, e.resizeBackground(), e.renderer.setSize(e.width, e.height), e.camera.aspect = e.width / e.height, e.camera.updateProjectionMatrix(), e.camera.position.set(0, 0, 0), e.camera.lookAt(new THREE.Vector3), e.camera.position.z = e.height / Math.tan(e.fov * Math.PI / 360) / 2
                        }), 200)
                    }
                }, {
                    key: "start",
                    value: function() {
                        !this.isRAF && this.isState && (this.isRAF = !0, gsap.ticker.add(this.raf))
                    }
                }, {
                    key: "stop",
                    value: function() {
                        this.isRAF && (this.isRAF = !1, this.group.position.x = this.translatePosition, this.group.position.y = 0, gsap.ticker.remove(this.raf))
                    }
                }, {
                    key: "lerp",
                    value: function(t, e, o) {
                        return t + (e - t) * o
                    }
                }, {
                    key: "radToDeg",
                    value: function(t) {
                        return t / Math.PI * 180
                    }
                }, {
                    key: "degToRad",
                    value: function(t) {
                        return t * Math.PI / 180
                    }
                }, {
                    key: "getRandomInt",
                    value: function(t, e) {
                        return Math.floor(Math.random() * (e - t + 1)) + t
                    }
                }, {
                    key: "getRandomFloat",
                    value: function(t, e) {
                        return Math.random() * (e - t) + t
                    }
                }, {
                    key: "getRandomItem",
                    value: function(t) {
                        return t[this.getRandomInt(0, t.length - 1)]
                    }
                }, {
                    key: "initHelper",
                    value: function() {
                        this.isHelper = !0, this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement), this.controls.enableDamping = !0, this.controls.dampingFactor = .25, this.controls.panningMode = THREE.HorizontalPanning, this.controls.minDistance = 1, this.controls.maxDistance = 1e4, this.controls.maxPolarAngle = Math.PI / 1;
                        var t = new THREE.GridHelper(1.5 * this.width, 25);
                        this.scene.add(t);
                        var e = new THREE.AxesHelper(1e3);
                        this.scene.add(e);
                        var o = new THREE.PointLightHelper(this.pointLight, 50);
                        this.scene.add(o), document.documentElement.classList.add("is-helper")
                    }
                }]), t
            }();

        function ie(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(object);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }))), e.push.apply(e, o)
            }
            return e
        }
        var oe = {
                name: "AppHelixCanvas",
                computed: function(t) {
                    for (var i = 1; i < arguments.length; i++) {
                        var source = null != arguments[i] ? arguments[i] : {};
                        i % 2 ? ie(Object(source), !0).forEach((function(e) {
                            Object(r.a)(t, e, source[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : ie(Object(source)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                        }))
                    }
                    return t
                }({}, Object(Z.b)({
                    loaded: "loaded",
                    page: "page"
                })),
                watch: {
                    page: function(t) {
                        var e = this;
                        this.helix && (this.helix.getState() || (this.helix.setState(!0), this.helix.start()), requestTimeout((function() {
                            e.helix.transition(t.name)
                        }), 50))
                    }
                },
                mounted: function() {
                    var t = this;
                    this.$nextTick((function() {
                        t.helix = null, t.$eventHub.$on("onScroll", t.onScroll), t.$eventHub.$on("onResize", t.onResize), t.$eventHub.$on("helixInit", t.init), t.$eventHub.$on("helixFadeIn", t.fadeIn), t.$eventHub.$on("helixSetDefault", t.setDefault), t.$eventHub.$on("helixStart", t.start), t.$eventHub.$on("helixStop", t.stop), t.$eventHub.$on("helixGetState", t.getState), t.$eventHub.$on("helixSetState", t.setState)
                    }))
                },
                methods: {
                    init: function() {
                        this.helix || (this.helix = new ee({
                            elem: "js-helix-canvas",
                            frameSteps: 1,
                            helixLineNum: window.innerHeight / 3.3,
                            helixLineLength: 50,
                            helixLineInterval: 5,
                            helixLineDistortion: .025,
                            meshLineColors: ["#FF4E50", "#FF9B9C", "#FF9B9C", "#FFCECE", "#FFCECE", "#82FFC2"],
                            meshLineNum: 20,
                            addMeshLineColors: {
                                home: ["#FF4E50", "#FF8282", "#FFB5B5", "#4FFFAA"],
                                solutions: ["#FF4E50", "#FFCECE", "#0009FF", "#333AFF"],
                                creative: ["#FF4E50", "#FFCECE", "#6D2EF1", "#8E5EF4"],
                                services: ["#FF4E50", "#FFCECE", "#18FFFF", "#80DEEA"],
                                news: ["#FF4E50", "#FFCECE", "#FDAF2A", "#FDE42A"],
                                careers: ["#FF4E50", "#FFCECE", "#FE51AA", "#FE84C3"],
                                contact: ["#FF4E50", "#FFCECE", "#366A83", "#4587A7"],
                                legals: ["#FF4E50", "#FFCECE", "#7E8075", "#97998F"],
                                notfound: ["#FF4E50", "#FF8282", "#FFB5B5", "#4FFFAA"],
                                default: ["#FF4E50", "#FFCECE", "#FF9B9C", "#FF9B9C"]
                            },
                            addMeshLineNum: 12,
                            breakpoint: 1024,
                            helper: !1
                        }))
                    },
                    fadeIn: function(t) {
                        var e = t.delay,
                            o = t.pageName;
                        this.helix.fadeIn({
                            delay: e,
                            pageName: o
                        })
                    },
                    setDefault: function() {
                        this.helix.setDefault()
                    },
                    onScroll: function(t) {
                        t._y, t.y, t.height
                    },
                    onResize: function(t) {
                        var e = t.width,
                            o = t.height;
                        this.helix.resize({
                            width: e,
                            height: o
                        })
                    },
                    getState: function() {
                        return this.helix.getState()
                    },
                    setState: function(t) {
                        this.helix.setState(t)
                    },
                    start: function() {
                        this.helix.start()
                    },
                    stop: function() {
                        this.helix.stop()
                    }
                }
            },
            ne = (o(250), Object(K.a)(oe, (function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("div", {
                    staticClass: "helix-canvas-container"
                }, [e("div", {
                    ref: "helixCanvas",
                    staticClass: "helix-canvas",
                    attrs: {
                        id: "js-helix-canvas"
                    }
                })])
            }), [], !1, null, null, null).exports);

        function se(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(object);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }))), e.push.apply(e, o)
            }
            return e
        }
        var re = {
            name: "AppMask",
            computed: function(t) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? se(Object(source), !0).forEach((function(e) {
                        Object(r.a)(t, e, source[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : se(Object(source)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                    }))
                }
                return t
            }({}, Object(Z.b)({
                mask: "mask"
            })),
            mounted: function() {
                var t = this;
                this.$nextTick((function() {
                    t.$store.dispatch("maskOn")
                }))
            }
        };
        o(252);

        function ae(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(object);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }))), e.push.apply(e, o)
            }
            return e
        }
        var ce, le = {
                components: {
                    AppHeader: it,
                    AppMenu: ct,
                    AppFooter: mt,
                    AppDomCanvas: Tt,
                    AppLoading: Ht,
                    AppMouse: Ut,
                    AppHelixCanvas: ne,
                    AppMask: Object(K.a)(re, (function() {
                        var t = this.$createElement,
                            e = this._self._c || t;
                        return this.mask ? e("div", {
                            staticClass: "mask"
                        }) : this._e()
                    }), [], !1, null, "1576c3eb", null).exports
                },
                data: function() {
                    return {
                        throttle: {
                            resize: null
                        }
                    }
                },
                computed: function(t) {
                    for (var i = 1; i < arguments.length; i++) {
                        var source = null != arguments[i] ? arguments[i] : {};
                        i % 2 ? ae(Object(source), !0).forEach((function(e) {
                            Object(r.a)(t, e, source[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : ae(Object(source)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                        }))
                    }
                    return t
                }({}, Object(Z.b)({
                    loaded: "loaded",
                    user: "user"
                })),
                watch: {
                    loaded: function(t) {
                        t && this.once()
                    }
                },
                mounted: function() {
                    var t = this;
                    this.$nextTick((function() {
                        t.$eventHub.$on("onUpdateScroll", t.onUpdateScroll), t.$eventHub.$on("onUpdateResize", t.onUpdateResize)
                    }))
                },
                beforeDestroy: function() {
                    this.$eventHub.$off("onUpdateScroll", this.onUpdateScroll), this.$eventHub.$off("onUpdateResize", this.onUpdateResize)
                },
                methods: {
                    once: function() {
                        var t = this;
                        $g.pointer && $g.pointer.disabled([".footer-scroll-top"]), this.$store.commit("setLang", this.$i18n.locale), this.$store.commit("updateUser", {
                            desktop: ua.desktop && $g.configs.breakpoints.mobile < $g.vars.width,
                            tablet: ua.tablet,
                            mobile: ua.mobile || $g.configs.breakpoints.mobile >= $g.vars.width
                        }), fakeScroll.init({
                            wrapper: ".l-wrapper",
                            container: ".l-container",
                            ease: .12,
                            offset: 120,
                            inViewRootMargin: "50px",
                            breakpoint: 1024,
                            useCustomScrollbar: !0,
                            mobile: {
                                listener: ".l-wrapper",
                                ease: 1,
                                offset: 0
                            }
                        }), fakeScroll.on("scroll", (function(e) {
                            $g.vars.scrollY = e.data.scrollY, $g.vars.translateY = e.data.translateY, t.onUpdateScroll({
                                evt: e,
                                _y: $g.vars._scrollY,
                                _ty: $g.vars._translateY,
                                y: $g.vars.scrollY,
                                ty: $g.vars.translateY,
                                width: $g.vars.width,
                                height: $g.vars.height
                            }), t.$eventHub.$emit("onScroll", {
                                evt: e,
                                _y: $g.vars._scrollY,
                                _ty: $g.vars._translateY,
                                y: $g.vars.scrollY,
                                ty: $g.vars.translateY,
                                width: $g.vars.width,
                                height: $g.vars.height
                            }), $g.vars._scrollY = $g.vars.scrollY, $g.vars._translateY = $g.vars.translateY
                        })), window.addEventListener("resize", (function(e) {
                            $g.vars.width = window.innerWidth, $g.vars.height = window.innerHeight, clearTimeout(t.throttle.resize), t.throttle.resize = setTimeout((function() {
                                t.onUpdateResize({
                                    evt: e,
                                    width: $g.vars.width,
                                    height: $g.vars.height
                                }), t.$eventHub.$emit("onResize", {
                                    evt: e,
                                    width: $g.vars.width,
                                    height: $g.vars.height
                                })
                            }), 150)
                        })), window.addEventListener("mouseenter", (function(e) {
                            var o = e.touches ? e.touches[0] : e,
                                n = o.clientX,
                                r = o.clientY;
                            t.$eventHub.$emit("onMouseEnter", {
                                evt: e,
                                pointer: o,
                                x: n,
                                y: r
                            })
                        })), window.addEventListener("mousemove", (function(e) {
                            var o = e.touches ? e.touches[0] : e,
                                n = o.clientX,
                                r = o.clientY;
                            t.$eventHub.$emit("onMouseMove", {
                                evt: e,
                                pointer: o,
                                x: n,
                                y: r
                            })
                        }), {
                            passive: !0
                        }), window.addEventListener("mouseleave", (function(e) {
                            var o = e.touches ? e.touches[0] : e,
                                n = o.clientX,
                                r = o.clientY;
                            t.$eventHub.$emit("onMouseLeave", {
                                evt: e,
                                pointer: o,
                                x: n,
                                y: r
                            })
                        })), document.body.addEventListener("mousedown", (function(e) {
                            var o = e.touches ? e.touches[0] : e,
                                n = o.clientX,
                                r = o.clientY;
                            t.$eventHub.$emit("onMouseDown", {
                                evt: e,
                                pointer: o,
                                x: n,
                                y: r
                            })
                        }), {
                            passive: !0
                        }), document.body.addEventListener("mouseup", (function(e) {
                            var o = e.touches ? e.touches[0] : e,
                                n = o.clientX,
                                r = o.clientY;
                            t.$eventHub.$emit("onMouseUp", {
                                evt: e,
                                pointer: o,
                                x: n,
                                y: r
                            })
                        }), {
                            passive: !0
                        }), document.body.addEventListener("mouseenter", (function(e) {
                            var o = e.touches ? e.touches[0] : e,
                                n = o.clientX,
                                r = o.clientY;
                            t.$eventHub.$emit("onWindowIn", {
                                evt: e,
                                pointer: o,
                                x: n,
                                y: r
                            })
                        })), document.body.addEventListener("mouseleave", (function(e) {
                            var o = e.touches ? e.touches[0] : e,
                                n = o.clientX,
                                r = o.clientY;
                            t.$eventHub.$emit("onWindowOut", {
                                evt: e,
                                pointer: o,
                                x: n,
                                y: r
                            })
                        }))
                    },
                    onUpdateScroll: function(t) {
                        t._y, t.y, t.height
                    },
                    onUpdateResize: function(t) {
                        var e = t.width;
                        t.height;
                        ua.reInit();
                        var o = $g.device();
                        $g.vars.device === o ? ($g.vars.device = o, "desktop" === $g.vars.device && $g.configs.breakpoints.largeTablet >= e ? this.$router.go({
                            path: this.$router.currentRoute.path,
                            force: !0
                        }) : "mobile" === $g.vars.device && $g.configs.breakpoints.tablet < e ? this.$router.go({
                            path: this.$router.currentRoute.path,
                            force: !0
                        }) : ($g.fn.utility.updateViewType(), $g.fn.utility.setViewportHeight(), fakeScroll.isActive && fakeScroll.update())) : this.$router.go({
                            path: this.$router.currentRoute.path,
                            force: !0
                        })
                    }
                }
            },
            ue = (o(254), {
                _default: Object(K.a)(le, (function() {
                    var t = this,
                        e = t.$createElement,
                        o = t._self._c || e;
                    return o("div", {
                        staticClass: "l-all"
                    }, [o("div", {
                        staticClass: "l-nav"
                    }, [o("app-header"), t._v(" "), o("app-menu")], 1), t._v(" "), o("div", {
                        staticClass: "l-wrapper"
                    }, [o("main", {
                        staticClass: "l-container",
                        attrs: {
                            role: "main"
                        }
                    }, [o("div", {
                        staticClass: "l-view"
                    }, [o("nuxt"), t._v(" "), o("app-footer"), t._v(" "), o("app-dom-canvas")], 1)])]), t._v(" "), o("app-loading"), t._v(" "), o("app-mouse"), t._v(" "), o("app-helix-canvas"), t._v(" "), o("app-mask")], 1)
                }), [], !1, null, null, null).exports
            }),
            pe = {
                head: {
                    titleTemplate: "Helixes Inc.",
                    meta: [{
                        charset: "utf-8"
                    }, {
                        "http-equiv": "X-UA-Compatible",
                        content: "IE=edge"
                    }, {
                        name: "google-site-verification",
                        content: "JCE9yBOE3OpfSzkaRaCMWBi8ZkHPUdWW-kRRQyEGEYw"
                    }, {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }, {
                        name: "theme-color",
                        content: "#FF4E50"
                    }, {
                        name: "apple-mobile-web-app-capable",
                        content: "no"
                    }, {
                        name: "apple-mobike-web-app-status-bar-style",
                        content: "black"
                    }, {
                        name: "apple-mobile-web-app-title",
                        content: "Helixes"
                    }, {
                        name: "format-detection",
                        content: "telephone=no"
                    }, {
                        name: "msapplication-TileColor",
                        content: "#FF4E50"
                    }, {
                        name: "msapplication-TileImage",
                        content: "https://helixes.s3.amazonaws.com/web/assets/img/common/icons/mstile-150x150.png"
                    }, {
                        hid: "description",
                        name: "description",
                        content: "株式会社Helixesは、クリエイティブを用いて課題を解決する、トータルプランニングカンパニーです。広告制作をはじめ、ブランドやデジタルプロダクトの開発、アーティストマネジメントなど、枠にとらわれない様々なモノ、コトを総合的に企画・運営しています。"
                    }, {
                        hid: "twitter:card",
                        property: "twitter:card",
                        content: "summary_large_image"
                    }, {
                        hid: "twitter:creator",
                        property: "twitter:creator",
                        content: ""
                    }, {
                        hid: "twitter:title",
                        property: "twitter:title",
                        content: "Helixes Inc."
                    }, {
                        hid: "twitter:description",
                        property: "twitter:description",
                        content: "株式会社Helixesは、クリエイティブを用いて課題を解決する、トータルプランニングカンパニーです。広告制作をはじめ、ブランドやデジタルプロダクトの開発、アーティストマネジメントなど、枠にとらわれない様々なモノ、コトを総合的に企画・運営しています。"
                    }, {
                        hid: "twitter:image",
                        property: "twitter:image",
                        content: "https://helixes.s3.amazonaws.com/web/assets/img/common/share.png"
                    }, {
                        hid: "og:type",
                        property: "og:type",
                        content: "website"
                    }, {
                        hid: "og:title",
                        property: "og:title",
                        content: "Helixes Inc."
                    }, {
                        hid: "og:description",
                        property: "og:description",
                        content: "株式会社Helixesは、クリエイティブを用いて課題を解決する、トータルプランニングカンパニーです。広告制作をはじめ、ブランドやデジタルプロダクトの開発、アーティストマネジメントなど、枠にとらわれない様々なモノ、コトを総合的に企画・運営しています。"
                    }, {
                        hid: "og:image",
                        property: "og:image",
                        content: "https://helixes.s3.amazonaws.com/web/assets/img/common/share.png"
                    }, {
                        hid: "og:image:width",
                        property: "og:image:width",
                        content: "1200"
                    }, {
                        hid: "og:image:height",
                        property: "og:image:height",
                        content: "630"
                    }, {
                        hid: "og:site_name",
                        property: "og:site_name",
                        content: "Helixes Inc."
                    }, {
                        hid: "og:url",
                        property: "og:url",
                        content: "https://helixes.co"
                    }, {
                        hid: "itemprop:name",
                        itemprop: "name",
                        content: "Helixes Inc."
                    }, {
                        hid: "itemprop:description",
                        itemprop: "description",
                        content: "株式会社Helixesは、クリエイティブを用いて課題を解決する、トータルプランニングカンパニーです。広告制作をはじめ、ブランドやデジタルプロダクトの開発、アーティストマネジメントなど、枠にとらわれない様々なモノ、コトを総合的に企画・運営しています。"
                    }, {
                        hid: "itemprop:image",
                        itemprop: "image",
                        content: "https://helixes.s3.amazonaws.com/web/assets/img/common/share.png"
                    }, {
                        hid: "mobile-web-app-capable",
                        name: "mobile-web-app-capable",
                        content: "yes"
                    }, {
                        hid: "author",
                        name: "author",
                        content: "Garden Eight"
                    }],
                    link: [{
                        rel: "icon",
                        type: "image/x-icon",
                        href: "https://helixes.s3.amazonaws.com/web/assets/img/common/icons/favicon.ico"
                    }, {
                        rel: "apple-touch-icon",
                        sizes: "180x180",
                        href: "https://helixes.s3.amazonaws.com/web/assets/img/common/icons/apple-touch-icon.png"
                    }, {
                        rel: "manifest",
                        href: "https://helixes.co/assets/img/common/icons/manifest.json"
                    }, {
                        rel: "mask-icon",
                        color: "#FF4E50",
                        href: "https://helixes.s3.amazonaws.com/web/assets/img/common/icons/safari-pinned-tab.svg"
                    }, {
                        rel: "preload",
                        href: "https://helixes.co/assets/fonts/hk-nova/HKNova-Regular.woff2",
                        as: "font",
                        type: "font/woff2",
                        crossorigin: ""
                    }, {
                        rel: "preload",
                        href: "https://helixes.co/assets/fonts/hk-nova/HKNova-Medium.woff2",
                        as: "font",
                        type: "font/woff2",
                        crossorigin: ""
                    }, {
                        rel: "preload",
                        href: "https://helixes.co/assets/fonts/hk-nova/HKNova-Bold.woff2",
                        as: "font",
                        type: "font/woff2",
                        crossorigin: ""
                    }, {
                        rel: "preload",
                        href: "https://helixes.co/assets/fonts/hk-grotesk-pro/HKGroteskPro-Regular.woff2",
                        as: "font",
                        type: "font/woff2",
                        crossorigin: ""
                    }, {
                        rel: "preload",
                        href: "https://helixes.co/assets/fonts/hk-grotesk-pro/HKGroteskPro-Medium.woff2",
                        as: "font",
                        type: "font/woff2",
                        crossorigin: ""
                    }, {
                        rel: "preload",
                        href: "https://helixes.co/assets/fonts/hk-grotesk-pro/HKGroteskPro-Bold.woff2",
                        as: "font",
                        type: "font/woff2",
                        crossorigin: ""
                    }, {
                        rel: "preconnect",
                        href: "https://helixes.co"
                    }, {
                        rel: "preconnect",
                        href: "https://wp.helixes.co"
                    }, {
                        rel: "preconnect",
                        href: "https://helixes.s3.amazonaws.com",
                        crossorigin: ""
                    }, {
                        rel: "preconnect",
                        href: "//www.googletagmanager.com"
                    }],
                    style: [],
                    script: [],
                    title: "helixes",
                    htmlAttrs: {
                        lang: "en"
                    }
                },
                render: function(t, e) {
                    var o = t(this.layout || "nuxt"),
                        n = t("div", {
                            domProps: {
                                id: "__layout"
                            },
                            key: this.layoutName
                        }, [o]),
                        r = t("transition", {
                            props: {
                                name: "layout",
                                mode: "out-in"
                            },
                            on: {
                                beforeEnter: function(t) {
                                    window.$helixes.$nextTick((function() {
                                        window.$helixes.$emit("triggerScroll")
                                    }))
                                }
                            }
                        }, [n]);
                    return t("div", {
                        domProps: {
                            id: "__helixes"
                        }
                    }, [r])
                },
                data: function() {
                    return {
                        isOnline: !0,
                        layout: null,
                        layoutName: ""
                    }
                },
                beforeCreate: function() {
                    c.a.util.defineReactive(this, "nuxt", this.$options.nuxt)
                },
                created: function() {
                    c.a.prototype.$helixes = this, window.$helixes = window.$nuxt = this, this.refreshOnlineStatus(), window.addEventListener("online", this.refreshOnlineStatus), window.addEventListener("offline", this.refreshOnlineStatus), this.error = this.nuxt.error, this.context = this.$options.context
                },
                computed: {
                    isOffline: function() {
                        return !this.isOnline
                    }
                },
                methods: {
                    refreshOnlineStatus: function() {
                        void 0 === window.navigator.onLine ? this.isOnline = !0 : this.isOnline = window.navigator.onLine
                    },
                    refresh: (ce = Object(n.a)(regeneratorRuntime.mark((function t() {
                        var e, o, n = this;
                        return regeneratorRuntime.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if ((e = Object(w.f)(this.$route)).length) {
                                        t.next = 3;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 3:
                                    return o = e.map((function(t) {
                                        var p = [];
                                        return t.$options.fetch && p.push(Object(w.m)(t.$options.fetch, n.context)), t.$options.asyncData && p.push(Object(w.m)(t.$options.asyncData, n.context).then((function(e) {
                                            for (var o in e) c.a.set(t.$data, o, e[o])
                                        }))), Promise.all(p)
                                    })), t.prev = 4, t.next = 7, Promise.all(o);
                                case 7:
                                    t.next = 13;
                                    break;
                                case 9:
                                    t.prev = 9, t.t0 = t.catch(4), Object(w.i)(t.t0), this.error(t.t0);
                                case 13:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this, [
                            [4, 9]
                        ])
                    }))), function() {
                        return ce.apply(this, arguments)
                    }),
                    setLayout: function(t) {
                        return t && ue["_" + t] || (t = "default"), this.layoutName = t, this.layout = ue["_" + t], this.layout
                    },
                    loadLayout: function(t) {
                        return t && ue["_" + t] || (t = "default"), Promise.resolve(ue["_" + t])
                    }
                }
            };
        o(71), o(62);
        c.a.use(Z.a);
        var he = ["state", "getters", "actions", "mutations"],
            de = {};
        (de = function(t, e) {
            if ((t = t.default || t).commit) throw new Error("[nuxt] ".concat(e, " should export a method that returns a Vuex instance."));
            return "function" != typeof t && (t = Object.assign({}, t)), fe(t, e)
        }(o(256), "store/index.js")).modules = de.modules || {}, be(o(257), "actions.js"), be(o(258), "getters.js"), be(o(259), "mutations.js"), be(o(260), "state.js");
        var me = de instanceof Function ? de : function() {
            return new Z.a.Store(Object.assign({
                strict: !1
            }, de))
        };

        function fe(t, e) {
            if (t.state && "function" != typeof t.state) {
                console.warn("'state' should be a method that returns an object in ".concat(e));
                var o = Object.assign({}, t.state);
                t = Object.assign({}, t, {
                    state: function() {
                        return o
                    }
                })
            }
            return t
        }

        function be(t, e) {
            t = t.default || t;
            var o = e.replace(/\.(js|mjs)$/, "").split("/"),
                n = o[o.length - 1],
                r = "store/".concat(e);
            if (t = "state" === n ? function(t, e) {
                    if ("function" != typeof t) {
                        console.warn("".concat(e, " should export a method that returns an object"));
                        var o = Object.assign({}, t);
                        return function() {
                            return o
                        }
                    }
                    return fe(t, e)
                }(t, r) : fe(t, r), he.includes(n)) {
                var c = n;
                ve(ge(de, o, {
                    isProperty: !0
                }), t, c)
            } else {
                "index" === n && (o.pop(), n = o[o.length - 1]);
                var l = ge(de, o),
                    h = !0,
                    d = !1,
                    m = void 0;
                try {
                    for (var f, v = he[Symbol.iterator](); !(h = (f = v.next()).done); h = !0) {
                        var w = f.value;
                        ve(l, t[w], w)
                    }
                } catch (t) {
                    d = !0, m = t
                } finally {
                    try {
                        h || null == v.return || v.return()
                    } finally {
                        if (d) throw m
                    }
                }!1 === t.namespaced && delete l.namespaced
            }
        }

        function ge(t, e) {
            var o = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).isProperty,
                n = void 0 !== o && o;
            if (!e.length || n && 1 === e.length) return t;
            var r = e.shift();
            return t.modules[r] = t.modules[r] || {}, t.modules[r].namespaced = !0, t.modules[r].modules = t.modules[r].modules || {}, ge(t.modules[r], e, {
                isProperty: n
            })
        }

        function ve(t, e, o) {
            e && ("state" === o ? t.state = e || t.state : t[o] = Object.assign({}, t[o], e))
        }

        function we() {
            return (we = Object(n.a)(regeneratorRuntime.mark((function t() {
                var e, n, r;
                return regeneratorRuntime.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            if (!(!1 in navigator)) {
                                t.next = 2;
                                break
                            }
                            throw new Error("serviceWorker is not supported in current browser!");
                        case 2:
                            return t.next = 4, o.e(24).then(o.bind(null, 401));
                        case 4:
                            return e = t.sent, n = e.Workbox, r = new n("/sw.js", {
                                scope: "/"
                            }), t.next = 9, r.register();
                        case 9:
                            return t.abrupt("return", r);
                        case 10:
                        case "end":
                            return t.stop()
                    }
                }), t)
            })))).apply(this, arguments)
        }
        window.$workbox = function() {
            return we.apply(this, arguments)
        }().catch((function(t) {}));
        o(111);
        var xe = o(165),
            ye = o(63),
            ke = o(0),
            _e = o(40);

        function ze(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(object);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }))), e.push.apply(e, o)
            }
            return e
        }

        function Ce(t) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? ze(Object(source), !0).forEach((function(e) {
                    Object(r.a)(t, e, source[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : ze(Object(source)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                }))
            }
            return t
        }

        function Ee(t, e) {
            if (t) {
                var o = this.i18n;
                if (ke.u === ke.g.NO_PREFIX && e && e !== o.locale && console.warn("[".concat(ke.f, "] Passing non-current locale to localePath is unsupported when using no_prefix strategy")), e = e || o.locale) {
                    "string" == typeof t && (t = {
                        name: t
                    });
                    var n = Object.assign({}, t);
                    if (t.path && !t.name) {
                        var path = !(e === ke.j && ke.u === ke.g.PREFIX_EXCEPT_DEFAULT || ke.u === ke.g.NO_PREFIX || o.differentDomains) ? "/".concat(e).concat(t.path) : t.path;
                        n.path = path
                    } else {
                        var r = t.name + (ke.u === ke.g.NO_PREFIX ? "" : ke.t + e);
                        e === ke.j && ke.u === ke.g.PREFIX_AND_DEFAULT && (r += ke.t + ke.k), n.name = r;
                        var c = n.params;
                        c && void 0 === c[0] && c.pathMatch && (c[0] = c.pathMatch)
                    }
                    return this.router.resolve(n).route.fullPath
                }
            }
        }

        function Oe(t) {
            var e = this.i18n;
            ke.u === ke.g.NO_PREFIX && t && t !== e.locale && console.warn("[".concat(ke.f, "] Passing non-current locale to switchLocalePath is unsupported when using no_prefix strategy"));
            var o = this.getRouteBaseName();
            if (!o) return "";
            var n = this.route,
                r = this.store,
                c = n.params,
                l = Object(xe.a)(n, ["params"]),
                h = {};
            ke.w && r && (h = r.getters["".concat(ke.w.moduleName, "/localeRouteParams")](t));
            var d = Object.assign({}, l, {
                    name: o,
                    params: Ce({}, c, {}, h, {
                        0: c.pathMatch
                    })
                }),
                path = this.localePath(d, t);
            if (e.differentDomains) {
                var m = e.locales.find((function(e) {
                    return e[ke.b] === t
                }));
                if (m && m[ke.c]) path = window.location.protocol.split(":")[0] + "://" + m[ke.c] + path;
                else console.warn("[".concat(ke.f, "] Could not find domain name for locale ").concat(t))
            }
            return path
        }

        function Le(t) {
            var e = t || this.route;
            return e.name ? e.name.split(ke.t)[0] : null
        }
        ye.a.nuxti18n = function() {
            var t = Object(n.a)(regeneratorRuntime.mark((function t(e) {
                var o, n, r, c, l;
                return regeneratorRuntime.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            if (o = e.app, n = e.route, r = e.redirect, !e.isHMR) {
                                t.next = 3;
                                break
                            }
                            return t.abrupt("return");
                        case 3:
                            if ("/" !== n.path || !ke.s) {
                                t.next = 6;
                                break
                            }
                            return r("/" + ke.s, n.query), t.abrupt("return");
                        case 6:
                            if (t.t0 = ke.l, !t.t0) {
                                t.next = 11;
                                break
                            }
                            return t.next = 10, o.i18n.__detectBrowserLanguage();
                        case 10:
                            t.t0 = t.sent;
                        case 11:
                            if (!t.t0) {
                                t.next = 13;
                                break
                            }
                            return t.abrupt("return");
                        case 13:
                            return c = o.i18n.locale || o.i18n.defaultLocale || null, l = Object(_e.getLocaleFromRoute)(n), t.next = 17, o.i18n.setLocale(l || c);
                        case 17:
                        case "end":
                            return t.stop()
                    }
                }), t)
            })));
            return function(e) {
                return t.apply(this, arguments)
            }
        }();
        var Me = function(t) {
                return function() {
                    var e = {
                        getRouteBaseName: this.getRouteBaseName,
                        i18n: this.$i18n,
                        localePath: this.localePath,
                        req: null,
                        route: this.$route,
                        router: this.$router,
                        store: this.$store
                    };
                    return t.apply(e, arguments)
                }
            },
            Te = function(t, e) {
                return function() {
                    var o = t.app,
                        n = (t.req, t.route),
                        r = t.store,
                        c = {
                            getRouteBaseName: o.getRouteBaseName,
                            i18n: o.i18n,
                            localePath: o.localePath,
                            req: null,
                            route: n,
                            router: o.router,
                            store: r
                        };
                    return e.apply(c, arguments)
                }
            },
            Re = {
                install: function(t) {
                    t.mixin({
                        methods: {
                            localePath: Me(Ee),
                            switchLocalePath: Me(Oe),
                            getRouteBaseName: Me(Le)
                        }
                    })
                }
            },
            je = function(t) {
                c.a.use(Re);
                var e = t.app;
                e.localePath = Te(t, Ee), e.switchLocalePath = Te(t, Oe), e.getRouteBaseName = Te(t, Le)
            },
            Se = (o(77), o(265), o(117)),
            Ae = o.n(Se),
            Pe = o(118),
            He = o(50),
            $e = function() {
                var t = this;
                if (!(l.a.hasMetaInfo ? l.a.hasMetaInfo(this) : this._hasMetaInfo) || !this.$i18n || !this.$i18n.locale || !this.$i18n.locales || !1 === this.$options[ke.a] || this.$options[ke.a] && !1 === this.$options[ke.a].seo) return {};
                var e = this.$i18n.locales.find((function(e) {
                        return e[ke.b] === t.$i18n.locale
                    })),
                    o = {};
                e && e[ke.e] && (o.lang = e[ke.e]);
                var link = [];
                if (ke.u !== ke.g.NO_PREFIX && link.push.apply(link, Object(He.a)(this.$i18n.locales.map((function(e) {
                        return e[ke.e] ? {
                            hid: "alternate-hreflang-" + e[ke.e],
                            rel: "alternate",
                            href: ke.h + t.switchLocalePath(e.code),
                            hreflang: e[ke.e]
                        } : (console.warn("[".concat(ke.f, "] Locale ISO code is required to generate alternate link")), null)
                    })).filter((function(t) {
                        return !!t
                    })))), ke.u === ke.g.PREFIX_AND_DEFAULT) {
                    var n = this.switchLocalePath(e[ke.b]);
                    n && n !== this.$route.path && link.push({
                        hid: "canonical-lang-" + e[ke.b],
                        rel: "canonical",
                        href: ke.h + n
                    })
                }
                var meta = [];
                return e && e[ke.e] && meta.push({
                    hid: "og:locale",
                    property: "og:locale",
                    content: e[ke.e].replace(/-/g, "_")
                }), meta.push.apply(meta, Object(He.a)(this.$i18n.locales.filter((function(t) {
                    return t[ke.e] && t[ke.e] !== e[ke.e]
                })).map((function(t) {
                    return {
                        hid: "og:locale:alternate-" + t[ke.e],
                        property: "og:locale:alternate",
                        content: t[ke.e].replace(/-/g, "_")
                    }
                })))), {
                    htmlAttrs: o,
                    link: link,
                    meta: meta
                }
            };

        function De(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(object);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }))), e.push.apply(e, o)
            }
            return e
        }

        function Fe(t) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? De(Object(source), !0).forEach((function(e) {
                    Object(r.a)(t, e, source[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : De(Object(source)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                }))
            }
            return t
        }
        c.a.use(Pe.a);
        for (var Ie = function() {
                var t = Object(n.a)(regeneratorRuntime.mark((function t(e) {
                    var r, l, h, d, m, f, v, w, x, y, k, _, z, C;
                    return regeneratorRuntime.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return r = e.app, l = e.route, h = e.store, d = e.req, e.res, m = e.redirect, ke.w && h && h.registerModule(ke.w.moduleName, {
                                    namespaced: !0,
                                    state: function() {
                                        return Fe({}, ke.w.syncLocale ? {
                                            locale: ""
                                        } : {}, {}, ke.w.syncMessages ? {
                                            messages: {}
                                        } : {}, {}, ke.w.syncRouteParams ? {
                                            routeParams: {}
                                        } : {})
                                    },
                                    actions: Fe({}, ke.w.syncLocale ? {
                                        setLocale: function(t, e) {
                                            (0, t.commit)("setLocale", e)
                                        }
                                    } : {}, {}, ke.w.syncMessages ? {
                                        setMessages: function(t, e) {
                                            (0, t.commit)("setMessages", e)
                                        }
                                    } : {}, {}, ke.w.syncRouteParams ? {
                                        setRouteParams: function(t, e) {
                                            (0, t.commit)("setRouteParams", e)
                                        }
                                    } : {}),
                                    mutations: Fe({}, ke.w.syncLocale ? {
                                        setLocale: function(t, e) {
                                            t.locale = e
                                        }
                                    } : {}, {}, ke.w.syncMessages ? {
                                        setMessages: function(t, e) {
                                            t.messages = e
                                        }
                                    } : {}, {}, ke.w.syncRouteParams ? {
                                        setRouteParams: function(t, e) {
                                            t.routeParams = e
                                        }
                                    } : {}),
                                    getters: Fe({}, ke.w.syncRouteParams ? {
                                        localeRouteParams: function(t) {
                                            var e = t.routeParams;
                                            return function(t) {
                                                return e[t] || {}
                                            }
                                        }
                                    } : {})
                                }, {
                                    preserveState: !!h.state[ke.w.moduleName]
                                }), f = ke.l.useCookie, v = ke.l.cookieKey, w = function() {
                                    if (f) return Ae.a.get(v)
                                }, x = function(t) {
                                    if (f) {
                                        var e = new Date,
                                            o = {
                                                expires: new Date(e.setDate(e.getDate() + 365)),
                                                path: "/",
                                                sameSite: "lax"
                                            };
                                        Ae.a.set(v, t, o)
                                    }
                                }, y = function() {
                                    var t = Object(n.a)(regeneratorRuntime.mark((function t(n) {
                                        var c, l, d, v, w, x, y, k, _, z = arguments;
                                        return regeneratorRuntime.wrap((function(t) {
                                            for (;;) switch (t.prev = t.next) {
                                                case 0:
                                                    if (c = z.length > 1 && void 0 !== z[1] ? z[1] : {}, l = c.initialSetup, (d = void 0 !== l && l) || !r.i18n.differentDomains) {
                                                        t.next = 3;
                                                        break
                                                    }
                                                    return t.abrupt("return");
                                                case 3:
                                                    if (n !== r.i18n.locale) {
                                                        t.next = 5;
                                                        break
                                                    }
                                                    return t.abrupt("return");
                                                case 5:
                                                    if (v = r.i18n.locale, d || (r.i18n.beforeLanguageSwitch(v, n), f && r.i18n.setLocaleCookie(n)), !ke.o) {
                                                        t.next = 14;
                                                        break
                                                    }
                                                    if (w = o(40), x = w.loadLanguageAsync, !r.i18n.fallbackLocale || n === r.i18n.fallbackLocale) {
                                                        t.next = 12;
                                                        break
                                                    }
                                                    return t.next = 12, x(e, r.i18n.fallbackLocale);
                                                case 12:
                                                    return t.next = 14, x(e, n);
                                                case 14:
                                                    return r.i18n.locale = n, d || r.i18n.onLanguageSwitched(v, n), t.next = 18, Object(_e.syncVuex)(h, n, r.i18n.getLocaleMessage(n));
                                                case 18:
                                                    d || ke.u === ke.g.NO_PREFIX || (y = r.switchLocalePath(n) || r.localePath("index", n), k = r.router.resolve(y).route, (_ = e.route) && !Object(_e.isSameRoute)(_, k) && m(y));
                                                case 19:
                                                case "end":
                                                    return t.stop()
                                            }
                                        }), t)
                                    })));
                                    return function(e) {
                                        return t.apply(this, arguments)
                                    }
                                }(), r.i18n = new Pe.a(ke.v), r.i18n.locales = ke.q, r.i18n.defaultLocale = ke.j, r.i18n.differentDomains = ke.m, r.i18n.forwardedHost = ke.n, r.i18n.beforeLanguageSwitch = ke.i, r.i18n.onLanguageSwitched = ke.r, r.i18n.setLocaleCookie = x, r.i18n.getLocaleCookie = w, r.i18n.setLocale = function(t) {
                                    return y(t)
                                }, c.a.prototype.$nuxtI18nSeo = $e, h && (h.$i18n = r.i18n, h.state.localeDomains && r.i18n.locales.forEach((function(t) {
                                    t.domain = h.state.localeDomains[t.code]
                                }))), k = r.i18n.defaultLocale || null, r.i18n.differentDomains ? (_ = Object(_e.getLocaleDomain)(r.i18n, d), k = _ || k) : ke.u !== ke.g.NO_PREFIX ? (z = Object(_e.getLocaleFromRoute)(l), k = z || k) : f && (C = w(), ke.p.includes(C) && (k = C)), t.next = 22, y(k, {
                                    initialSetup: !0
                                });
                            case 22:
                                return r.i18n.__detectBrowserLanguage = Object(n.a)(regeneratorRuntime.mark((function t() {
                                    var e, o, n, c;
                                    return regeneratorRuntime.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                if (!ke.l) {
                                                    t.next = 15;
                                                    break
                                                }
                                                if (e = ke.l.alwaysRedirect, o = ke.l.fallbackLocale, f && (n = w()) && 1 !== n && "1" !== n || ("undefined" != typeof navigator && navigator.language ? n = navigator.language.toLocaleLowerCase().substring(0, 2) : d && void 0 !== d.headers["accept-language"] && (n = d.headers["accept-language"].split(",")[0].toLocaleLowerCase().substring(0, 2))), !n) {
                                                    t.next = 15;
                                                    break
                                                }
                                                if (f && !e && w()) {
                                                    t.next = 15;
                                                    break
                                                }
                                                if (c = o, ke.p.includes(n) && (c = n), !c || !ke.p.includes(c)) {
                                                    t.next = 14;
                                                    break
                                                }
                                                if (c === r.i18n.locale) {
                                                    t.next = 13;
                                                    break
                                                }
                                                return t.next = 11, r.i18n.setLocale(c);
                                            case 11:
                                                t.next = 14;
                                                break;
                                            case 13:
                                                f && !w() && r.i18n.setLocaleCookie(c);
                                            case 14:
                                                return t.abrupt("return", !0);
                                            case 15:
                                                return t.abrupt("return", !1);
                                            case 16:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                }))), t.next = 25, r.i18n.__detectBrowserLanguage();
                            case 25:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })));
                return function(e) {
                    return t.apply(this, arguments)
                }
            }(), Ne = o(65), qe = o.n(Ne), Be = function(t, e) {
                t.$moment = qe.a, e("moment", qe.a)
            }, Ue = o(17), Ye = o.n(Ue), Ve = o(164), We = o.n(Ve), Ge = {
                setBaseURL: function(t) {
                    this.defaults.baseURL = t
                },
                setHeader: function(t, e) {
                    var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "common",
                        n = !0,
                        r = !1,
                        c = void 0;
                    try {
                        for (var l, h = (Array.isArray(o) ? o : [o])[Symbol.iterator](); !(n = (l = h.next()).done); n = !0) {
                            var d = l.value;
                            if (!e) return void delete this.defaults.headers[d][t];
                            this.defaults.headers[d][t] = e
                        }
                    } catch (t) {
                        r = !0, c = t
                    } finally {
                        try {
                            n || null == h.return || h.return()
                        } finally {
                            if (r) throw c
                        }
                    }
                },
                setToken: function(t, e) {
                    var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "common",
                        n = t ? (e ? e + " " : "") + t : null;
                    this.setHeader("Authorization", n, o)
                },
                onRequest: function(t) {
                    this.interceptors.request.use((function(e) {
                        return t(e) || e
                    }))
                },
                onResponse: function(t) {
                    this.interceptors.response.use((function(e) {
                        return t(e) || e
                    }))
                },
                onRequestError: function(t) {
                    this.interceptors.request.use(void 0, (function(e) {
                        return t(e) || Promise.reject(e)
                    }))
                },
                onResponseError: function(t) {
                    this.interceptors.response.use(void 0, (function(e) {
                        return t(e) || Promise.reject(e)
                    }))
                },
                onError: function(t) {
                    this.onRequestError(t), this.onResponseError(t)
                },
                create: function(t) {
                    return Qe(We()(t, this.defaults))
                }
            }, Ke = function() {
                var t = Je[Xe];
                Ge["$" + t] = function() {
                    return this[t].apply(this, arguments).then((function(t) {
                        return t && t.data
                    }))
                }
            }, Xe = 0, Je = ["request", "delete", "get", "head", "options", "post", "put", "patch"]; Xe < Je.length; Xe++) Ke();
        var Qe = function(t) {
                var e = Ye.a.create(t);
                return e.CancelToken = Ye.a.CancelToken, e.isCancel = Ye.a.isCancel,
                    function(t) {
                        for (var e in Ge) t[e] = Ge[e].bind(t)
                    }(e), Ze(e), e
            },
            Ze = function(t) {
                var e = {
                        finish: function() {},
                        start: function() {},
                        fail: function() {},
                        set: function() {}
                    },
                    o = function() {
                        return window.$nuxt && window.$nuxt.$loading && window.$nuxt.$loading.set ? window.$nuxt.$loading : e
                    },
                    n = 0;
                t.onRequest((function(t) {
                    t && !1 === t.progress || n++
                })), t.onResponse((function(t) {
                    t && t.config && !1 === t.config.progress || --n <= 0 && (n = 0, o().finish())
                })), t.onError((function(t) {
                    t && t.config && !1 === t.config.progress || (n--, Ye.a.isCancel(t) || (o().fail(), o().finish()))
                }));
                var r = function(t) {
                    if (n) {
                        var progress = 100 * t.loaded / (t.total * n);
                        o().set(Math.min(100, progress))
                    }
                };
                t.defaults.onUploadProgress = r, t.defaults.onDownloadProgress = r
            },
            ti = function(t, e) {
                var o = {
                    baseURL: "http://localhost:3009/",
                    headers: {
                        common: {
                            Accept: "application/json, text/plain, */*"
                        },
                        delete: {},
                        get: {},
                        head: {},
                        post: {},
                        put: {},
                        patch: {}
                    }
                };
                o.headers.common = t.req && t.req.headers ? Object.assign({}, t.req.headers) : {}, delete o.headers.common.accept, delete o.headers.common.host, delete o.headers.common["cf-ray"], delete o.headers.common["cf-connecting-ip"], delete o.headers.common["content-length"], delete o.headers.common["content-md5"], delete o.headers.common["content-type"];
                var n = Qe(o);
                t.$axios = n, e("axios", n)
            };
        c.a.prototype.$eventHub = new c.a;
        o(283);
        Ye.a.defaults.baseURL = "https://wp.helixes.co/wp-json/wp/v2";
        var ei = function(t, e) {
                t.app.$api = {
                    getIdNameFromSlug: function(t) {
                        return new Promise((function(e, o) {
                            var n = (t = t || {}).type || "category",
                                r = t.slug || null,
                                c = "".concat("https://wp.helixes.co", "/wp-json/slug/v1/").concat(n, "/").concat(r);
                            Ye.a.get(c).then((function(t) {
                                var data = t.data;
                                200 === t.status && t.data.length ? e({
                                    id: data[0].id,
                                    name: data[0].name
                                }) : o(t)
                            }))
                        }))
                    },
                    getTotalPosts: function(t) {
                        return new Promise((function(e, o) {
                            var n = (t = t || {}).lang || "ja",
                                r = t.per_page || 10,
                                c = t.categories || "",
                                l = t.tags || "",
                                h = "".concat(Ye.a.defaults.baseURL, "/posts?lang=").concat(n, "&per_page=").concat(r, "&categories=").concat(c, "&tags=").concat(l);
                            Ye.a.get(h).then((function(t) {
                                var n = t.headers;
                                200 === t.status && t.data.length ? e({
                                    posts: parseInt(n["x-wp-total"]),
                                    pages: parseInt(n["x-wp-totalpages"])
                                }) : o(t)
                            }))
                        }))
                    },
                    getPostsPerPage: function(t) {
                        return new Promise((function(e, o) {
                            var n = (t = t || {}).lang || "ja",
                                r = t.page || 1,
                                c = t.per_page || 10,
                                l = t.categories || "",
                                h = t.tags || "",
                                d = "".concat(Ye.a.defaults.baseURL, "/posts?lang=").concat(n, "&page=").concat(r, "&per_page=").concat(c, "&categories=").concat(l, "&tags=").concat(h);
                            Ye.a.get(d).then((function(t) {
                                var n = t.headers,
                                    data = Object(He.a)(t.data);
                                if (200 === t.status && t.data.length) {
                                    var r = [];
                                    r.data = [], r.total = {
                                        posts: parseInt(n["x-wp-total"]),
                                        pages: parseInt(n["x-wp-totalpages"])
                                    }, data.forEach((function(o, n) {
                                        r.data.push({
                                            id: o.id,
                                            status: o.status,
                                            sticky: o.sticky,
                                            title: o.title.rendered,
                                            date: o.date,
                                            link: o.link,
                                            slug: o.slug,
                                            content: o.content.rendered,
                                            excerpt: o.excerpt.rendered,
                                            thumb: {
                                                full: {
                                                    src: o.featured_image[0].src,
                                                    width: o.featured_image[0].width,
                                                    height: o.featured_image[0].height
                                                },
                                                large: {
                                                    src: o.featured_image[1].src,
                                                    width: o.featured_image[1].width,
                                                    height: o.featured_image[1].height
                                                },
                                                medium: {
                                                    src: o.featured_image[2].src,
                                                    width: o.featured_image[2].width,
                                                    height: o.featured_image[2].height
                                                },
                                                thumbnail: {
                                                    src: o.featured_image[3].src,
                                                    width: o.featured_image[3].width,
                                                    height: o.featured_image[3].height
                                                }
                                            },
                                            categories: o.categories,
                                            category: {
                                                name: o.categories[0].name,
                                                slug: o.categories[0].slug,
                                                description: o.categories[0].description
                                            },
                                            tags: o.tags
                                        }), t.data.length === n + 1 && e(r)
                                    }))
                                } else o(t)
                            }))
                        }))
                    },
                    getMorePosts: function(t) {
                        var e = (t = t || {}).callback || null,
                            o = t.lang || "ja",
                            n = t.page || 1,
                            r = t.per_page || 10,
                            c = t.categories || "",
                            l = t.tags || "",
                            h = "".concat(Ye.a.defaults.baseURL, "/posts?lang=").concat(o, "&page=").concat(n, "&per_page=").concat(r, "&categories=").concat(c, "&tags=").concat(l);
                        Ye.a.get(h).then((function(t) {
                            var data = Object(He.a)(t.data);
                            if (200 !== t.status || !t.data.length) return t;
                            var o = [];
                            data.forEach((function(n, r) {
                                o.push({
                                    id: n.id,
                                    status: n.status,
                                    sticky: n.sticky,
                                    title: n.title.rendered,
                                    date: n.date,
                                    link: n.link,
                                    slug: n.slug,
                                    content: n.content.rendered,
                                    excerpt: n.excerpt.rendered,
                                    thumb: {
                                        full: {
                                            src: n.featured_image[0].src,
                                            width: n.featured_image[0].width,
                                            height: n.featured_image[0].height
                                        },
                                        large: {
                                            src: n.featured_image[1].src,
                                            width: n.featured_image[1].width,
                                            height: n.featured_image[1].height
                                        },
                                        medium: {
                                            src: n.featured_image[2].src,
                                            width: n.featured_image[2].width,
                                            height: n.featured_image[2].height
                                        },
                                        thumbnail: {
                                            src: n.featured_image[3].src,
                                            width: n.featured_image[3].width,
                                            height: n.featured_image[3].height
                                        }
                                    },
                                    categories: n.categories,
                                    category: {
                                        name: n.categories[0].name,
                                        slug: n.categories[0].slug,
                                        description: n.categories[0].description
                                    },
                                    tags: n.tags
                                }), t.data.length === r + 1 && e && e(o)
                            }))
                        }))
                    },
                    getSingle: function(t) {
                        return new Promise((function(e, o) {
                            var n = (t = t || {}).lang || "ja",
                                r = t.slug || null,
                                c = "".concat(Ye.a.defaults.baseURL, "/posts/?lang=").concat(n, "&slug=").concat(r);
                            Ye.a.get(c).then((function(t) {
                                var data = Object(He.a)(t.data);
                                if (200 === t.status && t.data.length) {
                                    var n = data[0],
                                        r = {
                                            id: n.id,
                                            status: n.status,
                                            sticky: n.sticky,
                                            title: n.title.rendered,
                                            date: n.date,
                                            link: n.link,
                                            slug: n.slug,
                                            content: n.content.rendered,
                                            excerpt: n.excerpt.rendered,
                                            thumb: {
                                                full: {
                                                    src: n.featured_image[0].src,
                                                    width: n.featured_image[0].width,
                                                    height: n.featured_image[0].height
                                                },
                                                large: {
                                                    src: n.featured_image[1].src,
                                                    width: n.featured_image[1].width,
                                                    height: n.featured_image[1].height
                                                },
                                                medium: {
                                                    src: n.featured_image[2].src,
                                                    width: n.featured_image[2].width,
                                                    height: n.featured_image[2].height
                                                },
                                                thumbnail: {
                                                    src: n.featured_image[3].src,
                                                    width: n.featured_image[3].width,
                                                    height: n.featured_image[3].height
                                                }
                                            },
                                            categories: n.categories,
                                            category: {
                                                name: n.categories[0].name,
                                                slug: n.categories[0].slug,
                                                description: n.categories[0].description
                                            },
                                            tags: n.tags,
                                            prev: {
                                                id: n.prev.ID,
                                                status: n.prev.post_status,
                                                title: n.prev.post_title,
                                                date: n.prev.post_date,
                                                slug: n.prev.post_name,
                                                content: n.prev.post_content,
                                                excerpt: n.prev.post_excerpt,
                                                thumb: {
                                                    full: {
                                                        src: n.prev.featured_image[0][0],
                                                        width: n.prev.featured_image[0][1],
                                                        height: n.prev.featured_image[0][2]
                                                    },
                                                    large: {
                                                        src: n.prev.featured_image[1][0],
                                                        width: n.prev.featured_image[1][1],
                                                        height: n.prev.featured_image[1][2]
                                                    },
                                                    medium: {
                                                        src: n.prev.featured_image[2][0],
                                                        width: n.prev.featured_image[2][1],
                                                        height: n.prev.featured_image[2][2]
                                                    },
                                                    thumbnail: {
                                                        src: n.prev.featured_image[3][0],
                                                        width: n.prev.featured_image[3][1],
                                                        height: n.prev.featured_image[3][2]
                                                    }
                                                }
                                            },
                                            next: {
                                                id: n.next.ID,
                                                status: n.next.post_status,
                                                title: n.next.post_title,
                                                date: n.next.post_date,
                                                slug: n.next.post_name,
                                                content: n.next.post_content,
                                                excerpt: n.next.post_excerpt,
                                                thumb: {
                                                    full: {
                                                        src: n.next.featured_image[0][0],
                                                        width: n.next.featured_image[0][1],
                                                        height: n.next.featured_image[0][2]
                                                    },
                                                    large: {
                                                        src: n.next.featured_image[1][0],
                                                        width: n.next.featured_image[1][1],
                                                        height: n.next.featured_image[1][2]
                                                    },
                                                    medium: {
                                                        src: n.next.featured_image[2][0],
                                                        width: n.next.featured_image[2][1],
                                                        height: n.next.featured_image[2][2]
                                                    },
                                                    thumbnail: {
                                                        src: n.next.featured_image[3][0],
                                                        width: n.next.featured_image[3][1],
                                                        height: n.next.featured_image[3][2]
                                                    }
                                                }
                                            }
                                        };
                                    e(r)
                                } else o(t)
                            }))
                        }))
                    }
                }
            },
            ii = function(t) {
                var e = t.app,
                    o = t.store;
                e.i18n.beforeLanguageSwitch = function(t, e) {}, e.i18n.onLanguageSwitched = function(t, e) {
                    o.commit("setLang", e)
                }
            };
        c.a.filter("date", (function(t) {
            return qe()(t).format("MMM DD, YYYY")
        })), c.a.filter("length", (function(t, e, o) {
            var n = e ? parseInt(e, 10) : 20,
                r = o ? o.toString() : "...";
            return t.length <= n ? t : t.substring(0, n) + r
        })), c.a.filter("exclusion", (function(t, text) {
            return t.split(text).join("")
        })), c.a.filter("zero", (function(t, e) {
            return (Array(e).join("0") + t).slice(-e)
        })), c.a.filter("email", (function(t) {
            return t.split("[at]").join("@").split("[dot]").join(".")
        }));
        var oi = o(119),
            ni = o.n(oi);
        o(307), o(308);

        function si(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(object);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }))), e.push.apply(e, o)
            }
            return e
        }

        function ri(t) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? si(Object(source), !0).forEach((function(e) {
                    Object(r.a)(t, e, source[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : si(Object(source)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                }))
            }
            return t
        }(function(t) {
            var e = t.fn.utility = {
                setViewportHeight: function(e) {
                    var o = e || t.vars.height;
                    t.doms.html.style.setProperty("--vh", "".concat(o / 100, "px"))
                },
                setFooterTop: function() {
                    var footer = document.querySelector(".g-footer"),
                        e = document.querySelector(".fake-footer-height");
                    if (null !== footer) {
                        var o = footer.getBoundingClientRect().height,
                            n = e.getBoundingClientRect().top;
                        t.vars.footerTop = n || 0, t.vars.footerHeight = o || 0, e.style.height = "".concat(o, "px")
                    }
                },
                onClickEmail: function(t) {
                    var o = t.isDesktop,
                        n = t.target,
                        r = t.evt;
                    if (o) {
                        r.preventDefault();
                        var c = n.getAttribute("data-email-to");
                        n.classList.add("is-click"), e.copyTextToClipboard(c)
                    }
                },
                onMouseEnterEmail: function(t) {
                    var e = t.isDesktop,
                        o = t.evt;
                    e && o.target.classList.add("is-hover")
                },
                onMouseLeaveEmail: function(t) {
                    var e = t.isDesktop,
                        o = t.evt;
                    if (e) {
                        var n = o.target;
                        n.classList.remove("is-click"), n.classList.remove("is-hover")
                    }
                },
                copyTextToClipboard: function(t) {
                    var body = document.getElementsByTagName("body")[0],
                        textarea = document.createElement("textarea");
                    textarea.textContent = t, body.appendChild(textarea), textarea.select();
                    var e = document.execCommand("copy");
                    return body.removeChild(textarea), e
                },
                staggerElement: function(t) {
                    for (var o = document.querySelectorAll(t), i = 0; i < o.length; i++) {
                        var n = o[i],
                            r = new SplitText(n, {
                                type: "words",
                                wordsClass: "words",
                                tag: "span"
                            });
                        Array.prototype.forEach.call(r.words, (function(t, o) {
                            var n = t.innerText;
                            t.style.display = "inline-block", t.style.position = "relative", t.style.overflow = "hidden", t.appendChild(e.createCopyText(t, n, "#A0A0A0", "front", 0)), t.appendChild(e.createCopyText(t, n, "#111111", "back", "100%"))
                        }))
                    }
                },
                staggerAnimation: function(t) {
                    var e = t.el,
                        o = t.delay;
                    o = o || 0;
                    var n = document.querySelector(e).querySelectorAll(".front"),
                        r = document.querySelector(e).querySelectorAll(".back");
                    gsap.to(n, {
                        duration: 1,
                        y: "-100%",
                        ease: "power3.inOut",
                        stagger: {
                            amount: .2
                        },
                        delay: o,
                        onComplete: function() {
                            Array.prototype.forEach.call(n, (function(t) {
                                return t.parentNode.removeChild(t)
                            }))
                        }
                    }), gsap.to(r, {
                        duration: 1,
                        y: "-100%",
                        ease: "power3.inOut",
                        stagger: {
                            amount: .2
                        },
                        delay: .2 + o
                    })
                },
                createCopyText: function(t, e, o, n, r) {
                    var c = document.createElement("span");
                    return c.classList.add(n), c.style.display = "inline-block", c.style.position = "absolute", c.style.top = r, c.style.left = 0, c.style.width = "100%", c.style.color = o, c.innerText = e, c
                },
                updateViewType: function() {
                    ["desktop", "mobile", "landscape", "portrait"].forEach((function(e, o) {
                        var n = "view-".concat(e);
                        t.doms.html.classList.remove(n)
                    })), window.innerWidth > t.configs.breakpoints.tablet ? t.doms.html.classList.add("view-desktop") : t.doms.html.classList.add("view-mobile"), window.innerWidth > window.innerHeight ? t.doms.html.classList.add("view-landscape") : t.doms.html.classList.add("view-portrait")
                },
                getTranslateMatrix: function(t) {
                    var e = {};
                    if (window.getComputedStyle) {
                        var style = getComputedStyle(t),
                            o = style.transform || style.webkitTransform || style.mozTransform,
                            n = o.match(/^matrix3d\((.+)\)$/);
                        return n ? parseFloat(n[1].split(", ")[13]) : (n = o.match(/^matrix\((.+)\)$/), e.x = n ? parseFloat(n[1].split(", ")[4]) : 0, e.y = n ? parseFloat(n[1].split(", ")[5]) : 0, e)
                    }
                },
                setTransform: function(t, e) {
                    t.style.webkitTransform = e, t.style.msTransform = e, t.style.transform = e
                },
                scrollToElement: function(o) {
                    var n = o.id,
                        r = o.duration,
                        c = o.ease;
                    if (n) {
                        r = r || 1, c = c || "power3.inOut";
                        var l = t.vars.width > t.configs.breakpoints.tablet && ua.desktop ? t.vars.width / 24 * 1.25 + 17 : 52 - t.vars.scrollY,
                            h = document.getElementById(n),
                            d = h.getBoundingClientRect().top,
                            m = d <= 0 ? 0 : d - e.getTranslateMatrix(h).y - l,
                            f = t.vars.width > t.configs.breakpoints.tablet && ua.desktop ? window : document.querySelector(".l-wrapper");
                        ua.tablet && t.vars.width > t.configs.breakpoints.tablet && (f = document.querySelector(".l-wrapper")), gsap.to(f, {
                            duration: r,
                            scrollTo: {
                                y: m,
                                autoKill: !1
                            },
                            ease: c
                        })
                    }
                },
                triggerResizeEvent: function() {
                    var t = window.document.createEvent("UIEvents");
                    t.initUIEvent("resize", !0, !1, window, 0), window.dispatchEvent(t)
                },
                resetScrollPosition: function() {
                    window.scrollTo(0, 0), document.documentElement.scrollTop = 0, history.scrollRestoration && (history.scrollRestoration = "manual"), fakeScroll.isActive && fakeScroll.setPosition(0)
                },
                windowsUpdate: function(t) {
                    requestTimeout((function() {
                        e.setFooterTop(), fakeScroll.isActive && fakeScroll.update()
                    }), t)
                },
                detectIE: function() {
                    if (ua.ie)(function(element, t) {
                        if (element && void 0 !== element.className && "string" == typeof t)
                            if (element.classList) element.classList.add(t);
                            else {
                                var e = element.className.replace(/^\s+|\s+$/g, "").split(" ");
                                if ("" === e.toString() && (e = []), $.inArray(t, e) > -1) return;
                                e.push(t), element.className = e.join(" ")
                            }
                    })(document.documentElement, "ie" + ua.ie.version.major)
                }
            };
            e.detectIE()
        })($g), o.d(e, "b", (function() {
            return ci
        })), o.d(e, "a", (function() {
            return X
        })), c.a.component(d.a.name, d.a), c.a.component(f.a.name, ri({}, f.a, {
            render: function(t, e) {
                return f.a._warned || (f.a._warned = !0, console.warn("<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead")), f.a.render(t, e)
            }
        })), c.a.component(Y.name, Y), c.a.component("NChild", Y), c.a.component(Q.name, Q), c.a.use(l.a, {
            keyName: "head",
            attribute: "data-n-head",
            ssrAttribute: "data-n-head-ssr",
            tagIDKeyName: "hid"
        });
        var ai = {
            name: "page",
            mode: "out-in",
            appear: !1,
            appearClass: "appear",
            appearActiveClass: "appear-active",
            appearToClass: "appear-to"
        };

        function ci(t) {
            return ui.apply(this, arguments)
        }

        function ui() {
            return (ui = Object(n.a)(regeneratorRuntime.mark((function t(e) {
                var o, n, r, l, h, d, path, m;
                return regeneratorRuntime.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2, new v.a(U);
                        case 2:
                            return o = t.sent, (n = me(e)).$router = o, r = n.registerModule, n.registerModule = function(path, t, e) {
                                return r.call(n, path, t, Object.assign({
                                    preserveState: !0
                                }, e))
                            }, l = ri({
                                store: n,
                                router: o,
                                nuxt: {
                                    defaultTransition: ai,
                                    transitions: [ai],
                                    setTransitions: function(t) {
                                        return Array.isArray(t) || (t = [t]), t = t.map((function(t) {
                                            return t = t ? "string" == typeof t ? Object.assign({}, ai, {
                                                name: t
                                            }) : Object.assign({}, ai, t) : ai
                                        })), this.$options.nuxt.transitions = t, t
                                    },
                                    err: null,
                                    dateErr: null,
                                    error: function(t) {
                                        t = t || null, l.context._errored = Boolean(t), t = t ? Object(w.l)(t) : null;
                                        var o = this.nuxt || this.$options.nuxt;
                                        return o.dateErr = Date.now(), o.err = t, e && (e.nuxt.error = t), t
                                    }
                                }
                            }, pe), n.app = l, h = e ? e.next : function(t) {
                                return l.router.push(t)
                            }, e ? d = o.resolve(e.url).route : (path = Object(w.d)(o.options.base, o.options.mode), d = o.resolve(path).route), t.next = 13, Object(w.o)(l, {
                                store: n,
                                route: d,
                                next: h,
                                error: l.nuxt.error.bind(l),
                                payload: e ? e.payload : void 0,
                                req: e ? e.req : void 0,
                                res: e ? e.res : void 0,
                                beforeRenderFns: e ? e.beforeRenderFns : void 0,
                                ssrContext: e
                            });
                        case 13:
                            m = function(t, e) {
                                if (!t) throw new Error("inject(key, value) has no key provided");
                                if (void 0 === e) throw new Error("inject(key, value) has no value provided");
                                l[t = "$" + t] = e, n[t] = l[t];
                                var o = "__helixes_" + t + "_installed__";
                                c.a[o] || (c.a[o] = !0, c.a.use((function() {
                                    Object.prototype.hasOwnProperty.call(c.a, t) || Object.defineProperty(c.a.prototype, t, {
                                        get: function() {
                                            return this.$root.$options[t]
                                        }
                                    })
                                })))
                            }, window.__HELIXES__ && window.__HELIXES__.state && n.replaceState(window.__HELIXES__.state), t.next = 18;
                            break;
                        case 18:
                            if ("function" != typeof je) {
                                t.next = 21;
                                break
                            }
                            return t.next = 21, je(l.context, m);
                        case 21:
                            if ("function" != typeof Ie) {
                                t.next = 24;
                                break
                            }
                            return t.next = 24, Ie(l.context, m);
                        case 24:
                            if ("function" != typeof Be) {
                                t.next = 27;
                                break
                            }
                            return t.next = 27, Be(l.context, m);
                        case 27:
                            if ("function" != typeof ti) {
                                t.next = 30;
                                break
                            }
                            return t.next = 30, ti(l.context, m);
                        case 30:
                            t.next = 33;
                            break;
                        case 33:
                            if ("function" != typeof ei) {
                                t.next = 36;
                                break
                            }
                            return t.next = 36, ei(l.context, m);
                        case 36:
                            if ("function" != typeof ii) {
                                t.next = 39;
                                break
                            }
                            return t.next = 39, ii(l.context, m);
                        case 39:
                            t.next = 42;
                            break;
                        case 42:
                            if ("function" != typeof ni.a) {
                                t.next = 45;
                                break
                            }
                            return t.next = 45, ni()(l.context, m);
                        case 45:
                            t.next = 48;
                            break;
                        case 48:
                            t.next = 51;
                            break;
                        case 51:
                            return t.abrupt("return", {
                                store: n,
                                app: l,
                                router: o
                            });
                        case 52:
                        case "end":
                            return t.stop()
                    }
                }), t)
            })))).apply(this, arguments)
        }
    }, , , , , , function(t, e, o) {
        "use strict";
        o.r(e), o.d(e, "loadLanguageAsync", (function() {
            return h
        })), o.d(e, "validateRouteParams", (function() {
            return f
        })), o.d(e, "isSameRoute", (function() {
            return x
        })), o.d(e, "getLocaleDomain", (function() {
            return y
        })), o.d(e, "getLocaleFromRoute", (function() {
            return k
        })), o.d(e, "syncVuex", (function() {
            return _
        }));
        o(35), o(51), o(110), o(111), o(24), o(32), o(47), o(19), o(62), o(77);
        var n = o(49),
            r = (o(11), o(6), o(263), o(3)),
            c = o(5),
            l = o(0);

        function h(t, e) {
            return d.apply(this, arguments)
        }

        function d() {
            return (d = Object(c.a)(regeneratorRuntime.mark((function t(e, o) {
                var n, r;
                return regeneratorRuntime.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            (n = e.app).i18n.loadedLanguages || (n.i18n.loadedLanguages = []), n.i18n.loadedLanguages.includes(o) || (r = n.i18n.locales.find((function(t) {
                                return t[l.b] === o
                            }))) && (r[l.d] || console.warn("[".concat(l.f, "] Could not find lang file for locale ").concat(o)));
                        case 3:
                        case "end":
                            return t.stop()
                    }
                }), t)
            })))).apply(this, arguments)
        }
        var m = function(t) {
                return t && !Array.isArray(t) && "object" === Object(r.a)(t)
            },
            f = function(t) {
                m(t) ? Object.entries(t).forEach((function(t) {
                    var e = Object(n.a)(t, 2),
                        o = e[0],
                        r = e[1];
                    l.p.includes(o) ? m(r) || console.warn("[".concat(l.f, "] Trying to set route params for locale ").concat(o, " with a non-object value")) : console.warn("[".concat(l.f, "] Trying to set route params for key ").concat(o, " which is not a valid locale"))
                })) : console.warn("[".concat(l.f, "] Route params should be an object"))
            },
            v = /\/?$/;

        function w() {
            var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (!a || !b) return a === b;
            var t = Object.keys(a),
                e = Object.keys(b);
            return t.length === e.length && t.every((function(t) {
                var e = a[t],
                    o = b[t];
                return "object" === Object(r.a)(e) && "object" === Object(r.a)(o) ? w(e, o) : String(e) === String(o)
            }))
        }

        function x(a, b) {
            return !!b && (a.path && b.path ? a.path.replace(v, "") === b.path.replace(v, "") && a.hash === b.hash && w(a.query, b.query) : !(!a.name || !b.name) && (a.name === b.name && a.hash === b.hash && w(a.query, b.query) && w(a.params, b.params)))
        }
        var y = function(t, e) {
                var o = (t.forwardedHost, window.location.href.split("/")[2]);
                if (o) {
                    var n = t.locales.find((function(t) {
                        return t[l.c] === o
                    }));
                    if (n) return n[l.b]
                }
                return null
            },
            k = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    e = "(".concat(l.p.join("|"), ")"),
                    o = "(?:".concat(l.t).concat(l.k, ")?");
                if (t.name) {
                    var n = new RegExp("".concat(l.t).concat(e).concat(o, "$"), "i"),
                        r = t.name.match(n);
                    if (r && r.length > 1) return r[1]
                } else if (t.path) {
                    var c = new RegExp("^/".concat(e, "/"), "i"),
                        h = t.path.match(c);
                    if (h && h.length > 1) return h[1]
                }
                return null
            },
            _ = function() {
                var t = Object(c.a)(regeneratorRuntime.mark((function t(e) {
                    var o, n, r = arguments;
                    return regeneratorRuntime.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (o = r.length > 1 && void 0 !== r[1] ? r[1] : null, n = r.length > 2 && void 0 !== r[2] ? r[2] : null, !l.w || !e) {
                                    t.next = 9;
                                    break
                                }
                                if (null === o || !l.w.syncLocale) {
                                    t.next = 6;
                                    break
                                }
                                return t.next = 6, e.dispatch(l.w.moduleName + "/setLocale", o);
                            case 6:
                                if (null === n || !l.w.syncMessages) {
                                    t.next = 9;
                                    break
                                }
                                return t.next = 9, e.dispatch(l.w.moduleName + "/setMessages", n);
                            case 9:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })));
                return function(e) {
                    return t.apply(this, arguments)
                }
            }()
    }, , , , , , , , , , , , , , , , , , , , , , , function(t, e, o) {
        "use strict";
        var n = {};
        n.pages = o(189), n.pages = n.pages.default || n.pages, e.a = n
    }, , , , , , , , , , , , , , , , , , function(t, e, o) {
        var content = o(202);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, o(13).default)("72daabed", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, o) {
        var content = o(239);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, o(13).default)("f9c18e08", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, o) {
        var content = o(241);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, o(13).default)("77e9e6de", content, !0, {
            sourceMap: !1
        })
    }, function(t, e) {
        t.exports = function(t) {
            t.options.__i18n = t.options.__i18n || [], t.options.__i18n.push('{"ja":{"zip":"〒111-0053","address":"東京都台東区浅草橋1丁目3-11 萬賓ビル 3F","phone":"03-5829-6856"},"en":{"zip":"111-0053","address":"Manbou BLD. 3F, 1-3-11 Asakusabashi, Taito-ku, Tokyo","phone":"+03 5829 6856"}}'), delete t.options._Ctor
        }
    }, function(t, e, o) {
        var content = o(243);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, o(13).default)("8e86962e", content, !0, {
            sourceMap: !1
        })
    }, function(t, e) {
        t.exports = function(t) {
            t.options.__i18n = t.options.__i18n || [], t.options.__i18n.push('{"ja":{"zip":"〒111-0053","address":"東京都台東区浅草橋1丁目3-11 萬賓ビル 3F","phone":"03-5829-6856","profile":"Helixesは、クリエイティビティを用いてブランドの課題を解決します。 型にはまらない発想と精錬されたアウトプット、自社事業にて積み重ねた知識と知恵を以て、世の中を前進させるソリューションを提案します。"},"en":{"zip":"111-0053","address":"Manbou BLD. 3F, 1-3-11 Asakusabashi, Taito-ku, Tokyo","phone":"+03 5829 6856","profile":"Helixes solves brand issues with creativity. We suggest solutions which advance the world with unconventional ideas, refined output and knowledge and wisdom accumulated through our own businesses."}}'), delete t.options._Ctor
        }
    }, function(t, e, o) {
        var content = o(245);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, o(13).default)("38a65f4a", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, o) {
        var content = o(247);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, o(13).default)("f05ddb04", content, !0, {
            sourceMap: !1
        })
    }, function(t, e) {
        t.exports = function(t) {
            t.options.__i18n = t.options.__i18n || [], t.options.__i18n.push('{"ja":{"cookie":"当サイトではサービス向上および、お客様により適したサービスを提供するため、クッキーを利用しています。","more":"詳しく見る"},"en":{"cookie":"This website uses cookies to ensure you get the best experience on our website.","more":"Learn More"}}'), delete t.options._Ctor
        }
    }, function(t, e, o) {
        var content = o(249);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, o(13).default)("407141bd", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, o) {
        var content = o(251);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, o(13).default)("15b2f6c2", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, o) {
        var content = o(253);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, o(13).default)("04cc6db6", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, o) {
        var content = o(255);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, o(13).default)("20f4381e", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, o) {
        "use strict";
        o(6), o(71), o(14), o(11), o(62), o(77);
        var n = o(1),
            r = window.requestIdleCallback || function(t) {
                var e = Date.now();
                return setTimeout((function() {
                    t({
                        didTimeout: !1,
                        timeRemaining: function() {
                            return Math.max(0, 50 - (Date.now() - e))
                        }
                    })
                }), 1)
            },
            c = window.cancelIdleCallback || function(t) {
                clearTimeout(t)
            },
            l = window.IntersectionObserver && new window.IntersectionObserver((function(t) {
                t.forEach((function(t) {
                    var e = t.intersectionRatio,
                        link = t.target;
                    e <= 0 || link.__prefetch()
                }))
            }));
        e.a = {
            name: "NuxtLink",
            extends: n.a.component("RouterLink"),
            props: {
                prefetch: {
                    type: Boolean,
                    default: !0
                },
                noPrefetch: {
                    type: Boolean,
                    default: !1
                }
            },
            mounted: function() {
                this.prefetch && !this.noPrefetch && (this.handleId = r(this.observe, {
                    timeout: 2e3
                }))
            },
            beforeDestroy: function() {
                c(this.handleId), this.__observed && (l.unobserve(this.$el), delete this.$el.__prefetch)
            },
            methods: {
                observe: function() {
                    l && this.shouldPrefetch() && (this.$el.__prefetch = this.prefetchLink.bind(this), l.observe(this.$el), this.__observed = !0)
                },
                shouldPrefetch: function() {
                    return this.getPrefetchComponents().length > 0
                },
                canPrefetch: function() {
                    var t = navigator.connection;
                    return !(this.$helixes.isOffline || t && ((t.effectiveType || "").includes("2g") || t.saveData))
                },
                getPrefetchComponents: function() {
                    return this.$router.resolve(this.to, this.$route, this.append).resolved.matched.map((function(t) {
                        return t.components.default
                    })).filter((function(t) {
                        return "function" == typeof t && !t.options && !t.__prefetched
                    }))
                },
                prefetchLink: function() {
                    if (this.canPrefetch()) {
                        l.unobserve(this.$el);
                        var t = this.getPrefetchComponents(),
                            e = !0,
                            o = !1,
                            n = void 0;
                        try {
                            for (var r, c = t[Symbol.iterator](); !(e = (r = c.next()).done); e = !0) {
                                var h = r.value,
                                    d = h();
                                d instanceof Promise && d.catch((function() {})), h.__prefetched = !0
                            }
                        } catch (t) {
                            o = !0, n = t
                        } finally {
                            try {
                                e || null == c.return || c.return()
                            } finally {
                                if (o) throw n
                            }
                        }
                    }
                }
            }
        }
    }, , , , , , , , , , , , , , , , , , , function(t, e, o) {
        "use strict";
        var n = o(84),
            r = o.n(n);
        e.default = r.a
    }, function(t, e, o) {
        "use strict";
        var n = o(86),
            r = o.n(n);
        e.default = r.a
    }, function(t, e, o) {
        "use strict";
        var n = o(89),
            r = o.n(n);
        e.default = r.a
    }, , , , function(t, e, o) {
        o(285), o(287), o(299), o(300), o(301), o(302), o(303), o(304), o(305), o(306)
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e) {
        t.exports = "precision mediump float;\n#define GLSLIFY 1\n\nvarying vec2 vUv;\n\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec2 uv;\n\nuniform mat4 projectionMatrix;\nuniform mat4 modelViewMatrix;\n\nuniform float time;\nuniform vec2 mouse;\nuniform vec2 resolution;\n\nuniform float uScrollEffect;\nuniform float uDragEffect;\n\nvoid main() {\n\tvUv = uv;\n\n\tvec3 vertexPosition = position;\n\tvertexPosition.x += sin( ( ( vertexPosition.y + 1.0 ) / 2.0 ) * PI ) * ( sin( uDragEffect / 240.0 ) );\n\tvertexPosition.y += sin( ( ( vertexPosition.x + 1.0 ) / 2.0 ) * PI ) * ( sin( uScrollEffect / 240.0) );\n\n\tvec4 mvPosition = modelViewMatrix * vec4(vertexPosition, 1.0);\n\tgl_Position = projectionMatrix * mvPosition;\n}"
    }, function(t, e) {
        t.exports = "precision mediump float;\n#define GLSLIFY 1\n\n//\n// Description : Array and textureless GLSL 2D/3D/4D simplex\n//               noise functions.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec3 mod289(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x) {\n     return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat snoise(vec3 v)\n  {\n  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n\n// First corner\n  vec3 i  = floor(v + dot(v, C.yyy) );\n  vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n// Other corners\n  vec3 g = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g;\n  vec3 i1 = min( g.xyz, l.zxy );\n  vec3 i2 = max( g.xyz, l.zxy );\n\n  //   x0 = x0 - 0.0 + 0.0 * C.xxx;\n  //   x1 = x0 - i1  + 1.0 * C.xxx;\n  //   x2 = x0 - i2  + 2.0 * C.xxx;\n  //   x3 = x0 - 1.0 + 3.0 * C.xxx;\n  vec3 x1 = x0 - i1 + C.xxx;\n  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n// Permutations\n  i = mod289(i);\n  vec4 p = permute( permute( permute(\n             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n// Gradients: 7x7 points over a square, mapped onto an octahedron.\n// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n  float n_ = 0.142857142857; // 1.0/7.0\n  vec3  ns = n_ * D.wyz - D.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n  vec3 p0 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1.xy,h.z);\n  vec3 p3 = vec3(a1.zw,h.w);\n\n//Normalise gradients\n  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n// Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),\n                                dot(p2,x2), dot(p3,x3) ) );\n  }\n\nvarying vec2 vUv;\n\nuniform float time;\nuniform vec2 mouse;\nuniform vec2 resolution;\n\nuniform sampler2D tDiffuse;\nuniform sampler2D tDiffuse2;\nuniform vec2 uMeshResolution;\nuniform vec2 uOffset;\nuniform vec2 uScale;\nuniform vec2 uRatio;\nuniform float uAlpha;\nuniform float uScrollEffect;\nuniform float uDragEffect;\nuniform float uHoverEffect;\nuniform float uHoverProgress;\n\nfloat circle(in vec2 st, in float radius, in float blur) {\n\tvec2 dist = st;\n\treturn 1.0 - smoothstep(radius - ( radius * blur), radius + (radius * blur), dot(dist, dist) * 4.0);\n}\n\nvoid main() {\n\tvec2 uv = vUv;\n\n\tfloat time = time;\n\tvec2 res = resolution * PR;\n\n\tvec2 st = gl_FragCoord.xy / res.xy - vec2(0.5);\n\tst.y *= res.y / res.x;\n\n\tvec2 mouse = vec2((mouse.x / resolution.x) * 2.0 - 1.0, -(mouse.y / resolution.y) * 2.0 + 1.0) * -0.5;\n\tmouse.y *= res.y / res.x;\n\n\tvec2 centerPos = st + mouse;\n\n\tvec2 ratio = vec2(\n\t\tmin( ( uMeshResolution.x / uMeshResolution.y ) / ( uRatio.x / uRatio.y ), 1.0 ),\n\t\tmin( ( uMeshResolution.y / uMeshResolution.x ) / ( uRatio.y / uRatio.x ), 1.0 )\n\t);\n\n\tvec2 coverUv = vec2(\n\t\t( uv.x * ratio.x + ( 1.0 - ratio.x ) * 0.5 ),\n\t\t( uv.y * ratio.y + ( 1.0 - ratio.y ) * 0.5 )\n\t);\n\n\tvec2 scale = vec2(uScale.x - 1.0, uScale.y - 1.0);\n\tvec2 offset = vec2(\n\t\tcoverUv.x - ( coverUv.x * scale.x ) + ( scale.x * 0.5 ) + uOffset.x,\n\t\tcoverUv.y - ( coverUv.y * scale.y ) + ( scale.y * 0.5 ) + uOffset.y\n\t);\n\tvec2 pos = vec2(offset.x, offset.y);\n\n\tif ( pos.x > 1.0 ) { pos.x =  2.0 - offset.x; }\n\tif ( pos.x < 0.0 ) { pos.x = -1.0 * offset.x; }\n\tif ( pos.y > 1.0 ) { pos.y =  2.0 - offset.y; }\n\tif ( pos.y < 0.0 ) { pos.y = -1.0 * offset.y; }\n\n\tvec2 uvDisplaced = vec2(pos.x, pos.y);\n\n\tfloat circleMask = circle(centerPos, 0.03 * uHoverEffect + uHoverProgress * 0.8, 2.0);\n\n\tfloat hoverShapeOffsetX = ( uv.x - uv.y + cos(uv.y - time * 1.5) );\n\tfloat hoverShapeOffsetY = ( uv.x - uv.y - time * 0.1 + sin(uv.x - time * 1.5) * 0.1 );\n\n\tfloat hoverNoiseF = ( snoise(vec3(hoverShapeOffsetX, hoverShapeOffsetY, time * 0.5) * 18.0) ) * uHoverEffect;\n\tfloat hoverNoiseB = ( snoise(vec3(hoverShapeOffsetX, hoverShapeOffsetY, time * 0.5) * 1.0) ) * 0.005;\n\n\tvec2 uvHover = uvDisplaced;\n\tuvHover -= vec2(0.5);\n\tuvHover *= 1.0 - ( uHoverEffect * 0.01 );\n\tuvHover *= vec2(0.95);\n\tuvHover += vec2(0.5);\n\n\tvec2 uvBase = uvDisplaced;\n\tuvBase -= vec2(0.5);\n\tuvBase *= 1.0 - ( uHoverEffect * 0.01 );\n\tuvBase += mouse * 0.0025 * uHoverEffect;\n\tuvBase *= vec2(1.0);\n\tuvBase += vec2(0.5);\n\n\tvec4 hoverColor = texture2D(tDiffuse2, uvHover);\n\tvec4 baseColor = texture2D(tDiffuse, uvBase + vec2(hoverNoiseB) * uHoverEffect);\n\n\tfloat finalMask = smoothstep(.99, 1.0, pow(circleMask, 2.0) * 6.0 + hoverNoiseF * (1.0 - uHoverProgress));\n\tvec4 finalColor = mix(baseColor, hoverColor, clamp(finalMask + uHoverProgress, 0.0, 1.0));\n\n\tvec4 bgColor =  vec4(0.97, 0.97, 0.97, 1.0);\n\tif ( uAlpha == 0.0 ) {\n\t\tgl_FragColor = bgColor;\n\t} else {\n\t\tgl_FragColor = mix(bgColor, vec4(finalColor.rgb, uAlpha), uAlpha);\n\t}\n}"
    }, function(t, e) {
        t.exports = "precision mediump float;\n#define GLSLIFY 1\n\n//\n// Description : Array and textureless GLSL 2D/3D/4D simplex\n//               noise functions.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec3 mod289(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x) {\n     return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat snoise(vec3 v)\n  {\n  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n\n// First corner\n  vec3 i  = floor(v + dot(v, C.yyy) );\n  vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n// Other corners\n  vec3 g = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g;\n  vec3 i1 = min( g.xyz, l.zxy );\n  vec3 i2 = max( g.xyz, l.zxy );\n\n  //   x0 = x0 - 0.0 + 0.0 * C.xxx;\n  //   x1 = x0 - i1  + 1.0 * C.xxx;\n  //   x2 = x0 - i2  + 2.0 * C.xxx;\n  //   x3 = x0 - 1.0 + 3.0 * C.xxx;\n  vec3 x1 = x0 - i1 + C.xxx;\n  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n// Permutations\n  i = mod289(i);\n  vec4 p = permute( permute( permute(\n             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n// Gradients: 7x7 points over a square, mapped onto an octahedron.\n// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n  float n_ = 0.142857142857; // 1.0/7.0\n  vec3  ns = n_ * D.wyz - D.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n  vec3 p0 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1.xy,h.z);\n  vec3 p3 = vec3(a1.zw,h.w);\n\n//Normalise gradients\n  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n// Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),\n                                dot(p2,x2), dot(p3,x3) ) );\n  }\n\nvarying vec2 vUv;\n\nuniform float time;\nuniform vec2 mouse;\nuniform vec2 resolution;\n\nuniform sampler2D tDiffuse;\nuniform sampler2D tDiffuse2;\nuniform vec2 uMeshResolution;\nuniform vec2 uOffset;\nuniform vec2 uScale;\nuniform vec2 uRatio;\nuniform float uAlpha;\nuniform float uScrollEffect;\nuniform float uDragEffect;\nuniform float uHoverEffect;\nuniform float uHoverProgress;\n\nfloat circle(in vec2 st, in float radius, in float blur) {\n\tvec2 dist = st;\n\treturn 1.0 - smoothstep(radius - ( radius * blur), radius + (radius * blur), dot(dist, dist) * 4.0);\n}\n\nvoid main() {\n\tvec2 uv = vUv;\n\n\tfloat time = time * 0.05;\n\tvec2 res = resolution * PR;\n\n\tvec2 st = gl_FragCoord.xy / res.xy - vec2(0.5);\n\tst.y *= res.y / res.x;\n\n\tvec2 mouse = vec2((mouse.x / resolution.x) * 2.0 - 1.0, -(mouse.y / resolution.y) * 2.0 + 1.0) * -0.5;\n\tmouse.y *= res.y / res.x;\n\n\tvec2 centerPos = st + mouse;\n\n\tvec2 ratio = vec2(\n\t\tmin( ( uMeshResolution.x / uMeshResolution.y ) / ( uRatio.x / uRatio.y ), 1.0 ),\n\t\tmin( ( uMeshResolution.y / uMeshResolution.x ) / ( uRatio.y / uRatio.x ), 1.0 )\n\t);\n\n\tvec2 coverUv = vec2(\n\t\t( uv.x * ratio.x + ( 1.0 - ratio.x ) * 0.5 ),\n\t\t( uv.y * ratio.y + ( 1.0 - ratio.y ) * 0.5 )\n\t);\n\n\tvec2 scale = vec2(uScale.x - 1.0, uScale.y - 1.0);\n\tvec2 offset = vec2(\n\t\tcoverUv.x - ( coverUv.x * scale.x ) + ( scale.x * 0.5 ) + uOffset.x,\n\t\tcoverUv.y - ( coverUv.y * scale.y ) + ( scale.y * 0.5 ) + uOffset.y\n\t);\n\tvec2 pos = vec2(offset.x, offset.y);\n\n\tif ( pos.x > 1.0 ) { pos.x =  2.0 - offset.x; }\n\tif ( pos.x < 0.0 ) { pos.x = -1.0 * offset.x; }\n\tif ( pos.y > 1.0 ) { pos.y =  2.0 - offset.y; }\n\tif ( pos.y < 0.0 ) { pos.y = -1.0 * offset.y; }\n\n\tvec2 uvDisplaced = vec2(pos.x, pos.y);\n\tvec4 baseColor = texture2D(tDiffuse, uvDisplaced);\n\n\tfloat hoverShape = (uv.x + uv.y - 2.0 + uHoverEffect * 2.7 + uHoverProgress * 2.7) * 2.0;\n\tfloat hoverShapeOffsetX = uv.y - uv.x;\n\tfloat hoverShapeOffsetY = uv.y - uv.x;\n\n\tfloat hoverNoise = snoise(vec3(hoverShapeOffsetX, hoverShapeOffsetY, time) * 24.0) * 0.5;\n\n\tvec2 uvHover = uvDisplaced;\n\tuvHover -= vec2(0.5);\n\tuvHover *= 1.0 - ( uHoverEffect * 0.075 );\n\tuvHover *= vec2(1.0);\n\tuvHover += vec2(0.5);\n\n\t// vec2 uvBase = uvDisplaced;\n\t// uvBase -= vec2(0.5);\n\t// uvBase *= 1.0 - uHoverEffect * 0.2;\n\t// uvBase *= uRatio;\n\t// uvBase += vec2(0.5);\n\n\tvec4 hoverColor = texture2D(tDiffuse2, uvHover);\n\n\tfloat circleMask = circle(centerPos, 0.04 * uHoverEffect + uHoverProgress * 0.8, 10.0) * 50.0;\n\tfloat shapeAlpha = smoothstep(0.99, 1.0, hoverNoise + hoverShape);\n\n\tfloat finalMask  = smoothstep(0.0, 0.1, 1.0);\n\tvec4 finalColor = mix(baseColor, hoverColor, shapeAlpha);\n\n\t// gl_FragColor = vec4(finalColor.rgb, uAlpha * finalMask);\n\n\tvec4 bgColor =  vec4(0.97, 0.97, 0.97, 1.0);\n\tif ( uAlpha == 0.0 ) {\n\t\tgl_FragColor = bgColor;\n\t} else {\n\t\tgl_FragColor = mix( bgColor, vec4(finalColor.rgb, uAlpha * finalMask), uAlpha );\n\t}\n}"
    }, function(t, e) {
        t.exports = "precision mediump float;\n#define GLSLIFY 1\n\n//\n// Description : Array and textureless GLSL 2D/3D/4D simplex\n//               noise functions.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec3 mod289(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x) {\n     return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat snoise(vec3 v)\n  {\n  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n\n// First corner\n  vec3 i  = floor(v + dot(v, C.yyy) );\n  vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n// Other corners\n  vec3 g = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g;\n  vec3 i1 = min( g.xyz, l.zxy );\n  vec3 i2 = max( g.xyz, l.zxy );\n\n  //   x0 = x0 - 0.0 + 0.0 * C.xxx;\n  //   x1 = x0 - i1  + 1.0 * C.xxx;\n  //   x2 = x0 - i2  + 2.0 * C.xxx;\n  //   x3 = x0 - 1.0 + 3.0 * C.xxx;\n  vec3 x1 = x0 - i1 + C.xxx;\n  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n// Permutations\n  i = mod289(i);\n  vec4 p = permute( permute( permute(\n             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n// Gradients: 7x7 points over a square, mapped onto an octahedron.\n// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n  float n_ = 0.142857142857; // 1.0/7.0\n  vec3  ns = n_ * D.wyz - D.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n  vec3 p0 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1.xy,h.z);\n  vec3 p3 = vec3(a1.zw,h.w);\n\n//Normalise gradients\n  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n// Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),\n                                dot(p2,x2), dot(p3,x3) ) );\n  }\n\nvarying vec2 vUv;\n\nuniform float time;\nuniform vec2 mouse;\nuniform vec2 resolution;\n\nuniform sampler2D tDiffuse;\nuniform sampler2D tDiffuse2;\nuniform vec2 uMeshResolution;\nuniform vec2 uOffset;\nuniform vec2 uScale;\nuniform vec2 uRatio;\nuniform float uAlpha;\nuniform float uScrollEffect;\nuniform float uDragEffect;\nuniform float uHoverEffect;\nuniform float uHoverProgress;\n\nfloat _circle(in vec2 st, in float radius) {\n\tvec2 dist = st - vec2(0.5);\n\tfloat clip = 1.0 - smoothstep(radius - (radius * 0.01), radius+(radius * 0.01), dot(dist, dist) * 4.0);\n\tif ( clip > 0.5 ) { return clip; } else { discard; }\n}\n\nfloat circle(in vec2 st, in float radius, in float blur) {\n\tvec2 dist = st;\n\treturn 1.0 - smoothstep(radius - ( radius * blur), radius + (radius * blur), dot(dist, dist) * 4.0);\n}\n\nvoid main() {\n\tvec2 uv = vUv;\n\n\tfloat time = time * 0.05;\n\tvec2 res = resolution * PR;\n\n\tvec2 st = gl_FragCoord.xy / res.xy - vec2(0.5);\n\tst.y *= res.y / res.x;\n\n\tvec2 mouse = vec2((mouse.x / resolution.x) * 2.0 - 1.0, -(mouse.y / resolution.y) * 2.0 + 1.0) * -0.5;\n\tmouse.y *= res.y / res.x;\n\n\tvec2 centerPos = st + mouse;\n\n\tvec2 ratio = vec2(\n\t\tmin( ( uMeshResolution.x / uMeshResolution.y ) / ( uRatio.x / uRatio.y ), 1.0 ),\n\t\tmin( ( uMeshResolution.y / uMeshResolution.x ) / ( uRatio.y / uRatio.x ), 1.0 )\n\t);\n\n\tvec2 coverUv = vec2(\n\t\t( uv.x * ratio.x + ( 1.0 - ratio.x ) * 0.5 ),\n\t\t( uv.y * ratio.y + ( 1.0 - ratio.y ) * 0.5 )\n\t);\n\n\tvec2 scale = vec2(uScale.x - 1.0, uScale.y - 1.0);\n\tvec2 offset = vec2(\n\t\tcoverUv.x - ( coverUv.x * scale.x ) + ( scale.x * 0.5 ) + uOffset.x,\n\t\tcoverUv.y - ( coverUv.y * scale.y ) + ( scale.y * 0.5 ) + uOffset.y\n\t);\n\tvec2 pos = vec2(offset.x, offset.y);\n\n\tif ( pos.x > 1.0 ) { pos.x =  2.0 - offset.x; }\n\tif ( pos.x < 0.0 ) { pos.x = -1.0 * offset.x; }\n\tif ( pos.y > 1.0 ) { pos.y =  2.0 - offset.y; }\n\tif ( pos.y < 0.0 ) { pos.y = -1.0 * offset.y; }\n\n\tvec2 uvDisplaced = vec2(pos.x, pos.y);\n\tvec4 baseColor = texture2D(tDiffuse, uvDisplaced);\n\n\tfloat hoverShape = (uv.x + uv.y - 2.0 + uHoverEffect * 2.7 + uHoverProgress * 2.7) * 2.0;\n\tfloat hoverShapeOffsetX = uv.y - uv.x;\n\tfloat hoverShapeOffsetY = uv.y - uv.x;\n\n\tfloat hoverNoise = snoise(vec3(hoverShapeOffsetX, hoverShapeOffsetY, time) * 12.0) * 0.5;\n\n\tvec2 uvHover = uvDisplaced;\n\tuvHover -= vec2(0.5);\n\tuvHover *= 1.0 - ( uHoverEffect * 0.25 );\n\tuvHover *= vec2(1.0);\n\tuvHover += vec2(0.5);\n\n\t// vec2 uvBase = uvDisplaced;\n\t// uvBase -= vec2(0.5);\n\t// uvBase *= 1.0 - uHoverEffect * 0.2;\n\t// uvBase *= uRatio;\n\t// uvBase += vec2(0.5);\n\n\tvec4 hoverColor = texture2D(tDiffuse2, uvHover);\n\n\tfloat circleMask = circle(centerPos, 0.04 * uHoverEffect + uHoverProgress * 0.8, 10.0) * 50.0;\n\tfloat shapeAlpha = smoothstep(0.99, 1.0, hoverNoise + hoverShape);\n\n\tfloat finalMask  = smoothstep(0.0, 0.1, 1.0);\n\tvec4 finalColor = mix(baseColor, hoverColor, shapeAlpha);\n\n\tvec3 circleClip = vec3(_circle(coverUv, 1.0));\n\tvec3 finalColorCircle = mix(circleClip, finalColor.rgb, 1.0);\n\n\t// gl_FragColor = vec4(finalColorCircle, uAlpha * finalMask);\n\n\tvec4 bgColor =  vec4(0.97, 0.97, 0.97, 1.0);\n\tif ( uAlpha == 0.0 ) {\n\t\tgl_FragColor = bgColor;\n\t} else {\n\t\tgl_FragColor = mix(bgColor, vec4(finalColor.rgb, uAlpha * finalMask), uAlpha);\n\t}\n}"
    }, function(t, e) {
        t.exports = "precision mediump float;\n#define GLSLIFY 1\n\n//\n// Description : Array and textureless GLSL 2D/3D/4D simplex\n//               noise functions.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec3 mod289(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x) {\n     return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat snoise(vec3 v)\n  {\n  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n\n// First corner\n  vec3 i  = floor(v + dot(v, C.yyy) );\n  vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n// Other corners\n  vec3 g_0 = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g_0;\n  vec3 i1 = min( g_0.xyz, l.zxy );\n  vec3 i2 = max( g_0.xyz, l.zxy );\n\n  //   x0 = x0 - 0.0 + 0.0 * C.xxx;\n  //   x1 = x0 - i1  + 1.0 * C.xxx;\n  //   x2 = x0 - i2  + 2.0 * C.xxx;\n  //   x3 = x0 - 1.0 + 3.0 * C.xxx;\n  vec3 x1 = x0 - i1 + C.xxx;\n  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n// Permutations\n  i = mod289(i);\n  vec4 p = permute( permute( permute(\n             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n// Gradients: 7x7 points over a square, mapped onto an octahedron.\n// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n  float n_ = 0.142857142857; // 1.0/7.0\n  vec3  ns = n_ * D.wyz - D.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n  vec3 p0 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1.xy,h.z);\n  vec3 p3 = vec3(a1.zw,h.w);\n\n//Normalise gradients\n  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n// Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),\n                                dot(p2,x2), dot(p3,x3) ) );\n  }\n\nvarying vec2 vUv;\n\nuniform float time;\nuniform vec2 mouse;\nuniform vec2 resolution;\n\nuniform sampler2D tDiffuse;\nuniform sampler2D tDiffuse2;\nuniform vec2 uMeshResolution;\nuniform vec2 uOffset;\nuniform vec2 uScale;\nuniform vec2 uRatio;\nuniform float uAlpha;\nuniform float uScrollEffect;\nuniform float uDragEffect;\nuniform float uHoverEffect;\nuniform float uHoverProgress;\n\nfloat circle(in vec2 st, in float radius, in float blur) {\n\tvec2 dist = st;\n\treturn 1.0 - smoothstep(radius - ( radius * blur), radius + (radius * blur), dot(dist, dist) * 4.0);\n}\n\nvoid main() {\n\tvec2 uv = vUv;\n\n\tfloat time = time;\n\tvec2 res = resolution * PR;\n\n\tvec2 st = gl_FragCoord.xy / res.xy - vec2(0.5);\n\tst.y *= res.y / res.x;\n\n\tvec2 mouse = vec2((mouse.x / resolution.x) * 2.0 - 1.0, -(mouse.y / resolution.y) * 2.0 + 1.0) * -0.5;\n\tmouse.y *= res.y / res.x;\n\n\tvec2 centerPos = st + mouse;\n\n\tvec2 ratio = vec2(\n\t\tmin( ( uMeshResolution.x / uMeshResolution.y ) / ( uRatio.x / uRatio.y ), 1.0 ),\n\t\tmin( ( uMeshResolution.y / uMeshResolution.x ) / ( uRatio.y / uRatio.x ), 1.0 )\n\t);\n\n\tvec2 coverUv = vec2(\n\t\t( uv.x * ratio.x + ( 1.0 - ratio.x ) * 0.5 ),\n\t\t( uv.y * ratio.y + ( 1.0 - ratio.y ) * 0.5 )\n\t);\n\n\tvec2 scale = vec2(uScale.x - 1.0, uScale.y - 1.0);\n\tvec2 offset = vec2(\n\t\tcoverUv.x - ( coverUv.x * scale.x ) + ( scale.x * 0.5 ) + uOffset.x,\n\t\tcoverUv.y - ( coverUv.y * scale.y ) + ( scale.y * 0.5 ) + uOffset.y\n\t);\n\tvec2 pos = vec2(offset.x, offset.y);\n\n\tif ( pos.x > 1.0 ) { pos.x =  2.0 - offset.x; }\n\tif ( pos.x < 0.0 ) { pos.x = -1.0 * offset.x; }\n\tif ( pos.y > 1.0 ) { pos.y =  2.0 - offset.y; }\n\tif ( pos.y < 0.0 ) { pos.y = -1.0 * offset.y; }\n\n\tvec2 uvDisplaced = vec2(pos.x, pos.y);\n\n\tfloat circleMask = circle(centerPos, 0.03 * uHoverEffect + uHoverProgress * 0.8, 2.0);\n\n\tfloat hoverShapeOffsetX = ( uv.x - uv.y + cos(uv.y - time * 1.5) );\n\tfloat hoverShapeOffsetY = ( uv.x - uv.y - time * 0.1 + sin(uv.x - time * 1.5) * 0.1 );\n\n\tfloat hoverNoiseL = ( snoise(vec3(hoverShapeOffsetX, hoverShapeOffsetY, time * 0.5) * 2.0) ) * 0.05 * ( mouse.x * mouse.y * 10.0 );\n\n\tvec2 uvBase = uvDisplaced;\n\tuvBase -= vec2(0.5);\n\tuvBase *= 1.0 - ( uHoverEffect * 0.01 );\n\tuvBase += mouse * 0.005 * uHoverEffect;\n\tuvBase *= vec2(1.0);\n\tuvBase += vec2(0.5);\n\n\tvec2 uvBaseReverse = uvDisplaced;\n\tuvBaseReverse -= vec2(0.5);\n\tuvBaseReverse *= -1.0 - ( uHoverEffect * 0.01 );\n\tuvBaseReverse += mouse * 0.0025 * uHoverEffect;\n\tuvBaseReverse /= vec2(1.0);\n\tuvBaseReverse += vec2(0.5);\n\n\tvec2 uvHover = uvDisplaced;\n\tuvHover -= vec2(0.5);\n\tuvHover *= 1.0 - ( uHoverEffect * 0.01 );\n\tuvHover *= vec2(0.95);\n\tuvHover += vec2(0.5);\n\n\tvec4 baseColor = texture2D(tDiffuse, uvBase);\n\n\tvec4 bc = texture2D(tDiffuse, uvBaseReverse + vec2(hoverNoiseL) * uHoverEffect);\n\tvec4 hc = texture2D(tDiffuse2, uvHover);\n\n\tvec4 hoverColor = (bc * hc);\n\thoverColor.r += 0.15;\n\thoverColor.g += 0.15;\n\thoverColor.b += 0.15;\n\n\tvec4 finalColor = mix(baseColor, hoverColor, clamp(hoverColor * uHoverEffect  + uHoverProgress, 0.0, 1.0));\n\n\t// gl_FragColor = vec4(finalColor.rgb, uAlpha);\n\n\tvec4 bgColor =  vec4(0.97, 0.97, 0.97, 1.0);\n\tif ( uAlpha == 0.0 ) {\n\t\tgl_FragColor = bgColor;\n\t} else {\n\t\tgl_FragColor = mix(bgColor, vec4(finalColor.rgb, uAlpha), uAlpha);\n\t}\n}"
    }, function(t, e) {
        t.exports = "precision highp float;\n#define GLSLIFY 1\n\nvarying vec2 vUv;\nvarying vec3 vViewPosition;\nvarying vec3 vNormal;\n\nuniform float time;\nuniform vec2 mouse;\nuniform vec2 resolution;\n\nvoid main() {\n\tvUv = uv;\n\n\tvNormal = normalMatrix * normal;\n\tvViewPosition = -( modelViewMatrix * vec4(position, 1.0) ).xyz;\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}"
    }, function(t, e) {
        t.exports = "precision highp float;\n#define GLSLIFY 1\n\n#include <common>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <envmap_physical_pars_fragment>\n#include <lights_phong_pars_fragment>\n\nvarying vec2 vUv;\n\nuniform float time;\nuniform vec2 mouse;\nuniform vec2 resolution;\n\nuniform float gCircleRange;\nuniform float gAspect;\nuniform vec2 gScale;\nuniform vec2 gSmoothing;\nuniform vec2 gOffset;\nuniform vec3 gStartColor;\nuniform vec3 gEndColor;\n\nvec3 emissive = vec3(0.0);\nvec3 specular = vec3(1.0);\nfloat shininess = 1.0;\n\nvoid main() {\n\t// Gradient\n\tvec2 pos = vUv;\n\tpos -= 0.5;\n\n\tpos.x *= gAspect;\n\tpos   /= gScale;\n\tpos   -= gOffset;\n\n\tfloat gDist = length(pos);\n\tgDist = smoothstep(gSmoothing.x, gSmoothing.y, 1.0 - gDist);\n\n\tvec4 gColor = vec4(1.0);\n\tgColor.rgb = mix(gEndColor, gStartColor, gDist);\n\n\t// Light\n\tvec3 diffuseColor = vec3(gColor.rgb);\n\tReflectedLight reflectedLight = ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));\n\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\n\tvec2 diff = vUv - mouse;\n\tdiff.x *= ( resolution.x / resolution.y ); // e.g.: (16.0 / 9.0) for 16:9\n\n\tfloat distance = dot(diff, diff); // square of distance, saves a square-root\n\n\tif ( distance < gCircleRange ) {\n\t\tdiscard;\n\t}\n\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + emissive;\n\tgl_FragColor = vec4(outgoingLight, 1.0);\n}"
    }, function(t, e) {
        t.exports = "precision highp float;\n#define GLSLIFY 1\n\nvarying vec2 vUv;\n\nvoid main() {\n\tvUv = uv;\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}"
    }, function(t, e) {
        t.exports = "precision highp float;\n#define GLSLIFY 1\n\nvarying vec2 vUv;\nvarying vec4 vColor;\n\nuniform float time;\n\nuniform sampler2D tDiffuse;\nuniform float uNoise;\nuniform vec4 uNoiseLevelRGBA;\n\nfloat rand(vec2 co) {\n\treturn fract( sin( dot( co.xy ,vec2( 12.9898 + uNoise, 78.233 + uNoise ) ) ) * 43758.5453 + uNoise );\n}\n\nvoid main() {\n\tvec2 texCoord = vUv;\n\ttexCoord.x += uNoise * 0.0001;\n\ttexCoord.y += uNoise * 0.0001;\n\n\tvec4 color = texture2D(tDiffuse, vUv);\n\n\tfloat randomDelta = ( ( rand(vUv) * 2.0 ) - 1.0 );\n\n\tcolor.r += uNoiseLevelRGBA.r * randomDelta;\n\tcolor.g += uNoiseLevelRGBA.g * randomDelta;\n\tcolor.b += uNoiseLevelRGBA.b * randomDelta;\n\tcolor.a += uNoiseLevelRGBA.a * randomDelta;\n\n\tgl_FragColor = color;\n}"
    }, , , , , function(t, e, o) {
        t.exports = o(169)
    }, function(t, e, o) {
        "use strict";
        o.r(e),
            function(t) {
                o(95), o(71), o(14);
                var e = o(3),
                    n = (o(35), o(5)),
                    r = (o(51), o(62), o(77), o(11), o(6), o(19), o(32), o(106), o(179), o(186), o(188), o(1)),
                    c = o(153),
                    l = o(63),
                    h = o(2),
                    d = o(34),
                    m = o(94);
                r.a.component(m.a.name, m.a), r.a.component("NLink", m.a), t.fetch || (t.fetch = c.a);
                var f, v, w = [],
                    x = window.__HELIXES__ || {};
                Object.assign(r.a.config, {
                    silent: !0,
                    performance: !1
                });
                var y = r.a.config.errorHandler || console.error;

                function k(t, e, o) {
                    var n = function(component) {
                        var t = function(component, t) {
                            if (!component || !component.options || !component.options[t]) return {};
                            var option = component.options[t];
                            if ("function" == typeof option) {
                                for (var e = arguments.length, o = new Array(e > 2 ? e - 2 : 0), n = 2; n < e; n++) o[n - 2] = arguments[n];
                                return option.apply(void 0, o)
                            }
                            return option
                        }(component, "transition", e, o) || {};
                        return "string" == typeof t ? {
                            name: t
                        } : t
                    };
                    return t.map((function(t) {
                        var e = Object.assign({}, n(t));
                        if (o && o.matched.length && o.matched[0].components.default) {
                            var r = n(o.matched[0].components.default);
                            Object.keys(r).filter((function(t) {
                                return r[t] && t.toLowerCase().includes("leave")
                            })).forEach((function(t) {
                                e[t] = r[t]
                            }))
                        }
                        return e
                    }))
                }

                function _(t, e, o) {
                    this._pathChanged = Boolean(f.nuxt.err) || e.path !== t.path, this._queryChanged = JSON.stringify(t.query) !== JSON.stringify(e.query), this._diffQuery = this._queryChanged ? Object(h.g)(t.query, e.query) : [];
                    try {
                        o()
                    } catch (l) {
                        var n = l || {},
                            r = n.statusCode || n.status || n.response && n.response.status || 500,
                            c = n.message || "";
                        if (/^Loading( CSS)? chunk (\d)+ failed\./.test(c)) return void window.location.reload(!0);
                        this.error({
                            statusCode: r,
                            message: c
                        }), this.$helixes.$emit("routeChanged", t, e, n), o()
                    }
                }

                function z(t, e) {
                    return x.serverRendered && e && Object(h.a)(t, e), t._Ctor = t, t
                }

                function C(t) {
                    var path = Object(h.d)(t.options.base, t.options.mode);
                    return Object(h.c)(t.match(path), function() {
                        var t = Object(n.a)(regeneratorRuntime.mark((function t(e, o, n, r, c) {
                            var l;
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if ("function" != typeof e || e.options) {
                                            t.next = 4;
                                            break
                                        }
                                        return t.next = 3, e();
                                    case 3:
                                        e = t.sent;
                                    case 4:
                                        return l = z(Object(h.n)(e), x.data ? x.data[c] : null), n.components[r] = l, t.abrupt("return", l);
                                    case 7:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function(e, o, n, r, c) {
                            return t.apply(this, arguments)
                        }
                    }())
                }

                function E(t, e, o) {
                    var n = this,
                        r = ["pages", "nuxti18n"],
                        c = !1;
                    if (void 0 !== o && (r = [], (o = Object(h.n)(o)).options.middleware && (r = r.concat(o.options.middleware)), t.forEach((function(t) {
                            t.options.middleware && (r = r.concat(t.options.middleware))
                        }))), r = r.map((function(t) {
                            return "function" == typeof t ? t : ("function" != typeof l.a[t] && (c = !0, n.error({
                                statusCode: 500,
                                message: "Unknown middleware " + t
                            })), l.a[t])
                        })), !c) return Object(h.k)(r, e)
                }

                function O(t, e, o) {
                    return L.apply(this, arguments)
                }

                function L() {
                    return (L = Object(n.a)(regeneratorRuntime.mark((function t(e, o, n) {
                        var r, c, l, m, v, x, y, _, z, C, O, L, M, T, R, j, S, A, P = this;
                        return regeneratorRuntime.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (!1 !== this._pathChanged || !1 !== this._queryChanged) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return", n());
                                case 2:
                                    return e === o ? w = [] : (r = [], w = Object(h.e)(o, r).map((function(t, i) {
                                        return Object(h.b)(o.matched[r[i]].path)(o.params)
                                    }))), c = !1, l = function(path) {
                                        c || (c = !0, n(path))
                                    }, t.next = 7, Object(h.o)(f, {
                                        route: e,
                                        from: o,
                                        next: l.bind(this)
                                    });
                                case 7:
                                    if (this._dateLastError = f.nuxt.dateErr, this._hadError = Boolean(f.nuxt.err), m = [], (v = Object(h.e)(e, m)).length) {
                                        t.next = 26;
                                        break
                                    }
                                    return t.next = 14, E.call(this, v, f.context);
                                case 14:
                                    if (!c) {
                                        t.next = 16;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 16:
                                    return x = (d.a.options || d.a).layout, t.next = 19, this.loadLayout("function" == typeof x ? x.call(d.a, f.context) : x);
                                case 19:
                                    return y = t.sent, t.next = 22, E.call(this, v, f.context, y);
                                case 22:
                                    if (!c) {
                                        t.next = 24;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 24:
                                    return f.context.error({
                                        statusCode: 404,
                                        message: "This page could not be found"
                                    }), t.abrupt("return", n());
                                case 26:
                                    return v.forEach((function(t) {
                                        t._Ctor && t._Ctor.options && (t.options.asyncData = t._Ctor.options.asyncData, t.options.fetch = t._Ctor.options.fetch)
                                    })), this.setTransitions(k(v, e, o)), t.prev = 28, t.next = 31, E.call(this, v, f.context);
                                case 31:
                                    if (!c) {
                                        t.next = 33;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 33:
                                    if (!f.context._errored) {
                                        t.next = 35;
                                        break
                                    }
                                    return t.abrupt("return", n());
                                case 35:
                                    return "function" == typeof(_ = v[0].options.layout) && (_ = _(f.context)), t.next = 39, this.loadLayout(_);
                                case 39:
                                    return _ = t.sent, t.next = 42, E.call(this, v, f.context, _);
                                case 42:
                                    if (!c) {
                                        t.next = 44;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 44:
                                    if (!f.context._errored) {
                                        t.next = 46;
                                        break
                                    }
                                    return t.abrupt("return", n());
                                case 46:
                                    z = !0, t.prev = 47, C = !0, O = !1, L = void 0, t.prev = 51, M = v[Symbol.iterator]();
                                case 53:
                                    if (C = (T = M.next()).done) {
                                        t.next = 65;
                                        break
                                    }
                                    if ("function" == typeof(R = T.value).options.validate) {
                                        t.next = 57;
                                        break
                                    }
                                    return t.abrupt("continue", 62);
                                case 57:
                                    return t.next = 59, R.options.validate(f.context);
                                case 59:
                                    if (z = t.sent) {
                                        t.next = 62;
                                        break
                                    }
                                    return t.abrupt("break", 65);
                                case 62:
                                    C = !0, t.next = 53;
                                    break;
                                case 65:
                                    t.next = 71;
                                    break;
                                case 67:
                                    t.prev = 67, t.t0 = t.catch(51), O = !0, L = t.t0;
                                case 71:
                                    t.prev = 71, t.prev = 72, C || null == M.return || M.return();
                                case 74:
                                    if (t.prev = 74, !O) {
                                        t.next = 77;
                                        break
                                    }
                                    throw L;
                                case 77:
                                    return t.finish(74);
                                case 78:
                                    return t.finish(71);
                                case 79:
                                    t.next = 85;
                                    break;
                                case 81:
                                    return t.prev = 81, t.t1 = t.catch(47), this.error({
                                        statusCode: t.t1.statusCode || "500",
                                        message: t.t1.message
                                    }), t.abrupt("return", n());
                                case 85:
                                    if (z) {
                                        t.next = 88;
                                        break
                                    }
                                    return this.error({
                                        statusCode: 404,
                                        message: "This page could not be found"
                                    }), t.abrupt("return", n());
                                case 88:
                                    return t.next = 90, Promise.all(v.map((function(t, i) {
                                        if (t._path = Object(h.b)(e.matched[m[i]].path)(e.params), t._dataRefresh = !1, P._pathChanged && P._queryChanged || t._path !== w[i]) t._dataRefresh = !0;
                                        else if (!P._pathChanged && P._queryChanged) {
                                            var n = t.options.watchQuery;
                                            !0 === n ? t._dataRefresh = !0 : Array.isArray(n) ? t._dataRefresh = n.some((function(t) {
                                                return P._diffQuery[t]
                                            })) : "function" == typeof n && (j || (j = Object(h.f)(e)), t._dataRefresh = n.apply(j[i], [e.query, o.query]))
                                        }
                                        if (P._hadError || !P._isMounted || t._dataRefresh) {
                                            var r = [],
                                                c = t.options.asyncData && "function" == typeof t.options.asyncData,
                                                l = Boolean(t.options.fetch);
                                            if (c) {
                                                var d = Object(h.m)(t.options.asyncData, f.context).then((function(e) {
                                                    Object(h.a)(t, e)
                                                }));
                                                r.push(d)
                                            }
                                            if (P.$loading.manual = !1 === t.options.loading, l) {
                                                var p = t.options.fetch(f.context);
                                                p && (p instanceof Promise || "function" == typeof p.then) || (p = Promise.resolve(p)), p.then((function(t) {})), r.push(p)
                                            }
                                            return Promise.all(r)
                                        }
                                    })));
                                case 90:
                                    c || n(), t.next = 107;
                                    break;
                                case 93:
                                    if (t.prev = 93, t.t2 = t.catch(28), "ERR_REDIRECT" !== (S = t.t2 || {}).message) {
                                        t.next = 98;
                                        break
                                    }
                                    return t.abrupt("return", this.$helixes.$emit("routeChanged", e, o, S));
                                case 98:
                                    return w = [], Object(h.i)(S), "function" == typeof(A = (d.a.options || d.a).layout) && (A = A(f.context)), t.next = 104, this.loadLayout(A);
                                case 104:
                                    this.error(S), this.$helixes.$emit("routeChanged", e, o, S), n();
                                case 107:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this, [
                            [28, 93],
                            [47, 81],
                            [51, 67, 71, 79],
                            [72, , 74, 78]
                        ])
                    })))).apply(this, arguments)
                }

                function M(t, o) {
                    Object(h.c)(t, (function(t, o, n, c) {
                        return "object" !== Object(e.a)(t) || t.options || ((t = r.a.extend(t))._Ctor = t, n.components[c] = t), t
                    }))
                }

                function T(t) {
                    this._hadError && this._dateLastError === this.$options.nuxt.dateErr && this.error();
                    var e = this.$options.nuxt.err ? (d.a.options || d.a).layout : t.matched[0].components.default.options.layout;
                    "function" == typeof e && (e = e(f.context)), this.setLayout(e)
                }

                function R(t, e) {
                    var o = this;
                    if (!1 !== this._pathChanged || !1 !== this._queryChanged) {
                        var n = Object(h.f)(t),
                            c = Object(h.e)(t);
                        r.a.nextTick((function() {
                            n.forEach((function(t, i) {
                                if (t && !t._isDestroyed && t.constructor._dataRefresh && c[i] === t.constructor && !0 !== t.$vnode.data.keepAlive && "function" == typeof t.constructor.options.data) {
                                    var e = t.constructor.options.data.call(t);
                                    for (var o in e) r.a.set(t.$data, o, e[o]);
                                    window.$helixes.$nextTick((function() {
                                        window.$helixes.$emit("triggerScroll")
                                    }))
                                }
                            })), T.call(o, t)
                        }))
                    }
                }

                function j(t) {
                    window.onHelixesReadyCbs.forEach((function(e) {
                        "function" == typeof e && e(t)
                    })), "function" == typeof window._onHelixesLoaded && window._onHelixesLoaded(t), v.afterEach((function(e, o) {
                        r.a.nextTick((function() {
                            return t.$helixes.$emit("routeChanged", e, o)
                        }))
                    }))
                }

                function S() {
                    return (S = Object(n.a)(regeneratorRuntime.mark((function t(e) {
                        var o, n, c, l, d;
                        return regeneratorRuntime.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return f = e.app, v = e.router, e.store, o = new r.a(f), n = x.layout || "default", t.next = 7, o.loadLayout(n);
                                case 7:
                                    return o.setLayout(n), c = function() {
                                        o.$mount("#__helixes"), v.afterEach(M), v.afterEach(R.bind(o)), r.a.nextTick((function() {
                                            j(o)
                                        }))
                                    }, t.next = 11, Promise.all(C(v));
                                case 11:
                                    if (l = t.sent, o.setTransitions = o.$options.nuxt.setTransitions.bind(o), l.length && (o.setTransitions(k(l, v.currentRoute)), w = v.currentRoute.matched.map((function(t) {
                                            return Object(h.b)(t.path)(v.currentRoute.params)
                                        }))), o.$loading = {}, x.error && o.error(x.error), v.beforeEach(_.bind(o)), v.beforeEach(O.bind(o)), !x.serverRendered) {
                                        t.next = 21;
                                        break
                                    }
                                    return c(), t.abrupt("return");
                                case 21:
                                    d = function() {
                                        M(v.currentRoute, v.currentRoute), T.call(o, v.currentRoute), c()
                                    }, O.call(o, v.currentRoute, v.currentRoute, (function(path) {
                                        if (path) {
                                            var t = v.afterEach((function(e, o) {
                                                t(), d()
                                            }));
                                            v.push(path, void 0, (function(t) {
                                                t && y(t)
                                            }))
                                        } else d()
                                    }));
                                case 23:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))).apply(this, arguments)
                }
                Object(d.b)().then((function(t) {
                    return S.apply(this, arguments)
                })).catch(y)
            }.call(this, o(52))
    }, , , , , , , , , , , , , , , , , , , , function(t, e, o) {
        "use strict";
        o.r(e);
        o(32);
        e.default = function(t) {
            t.store.commit("updatePage", {
                path: t.route.path,
                name: t.route.name
            })
        }
    }, , , , , , , , , , , , function(t, e, o) {
        "use strict";
        var n = o(81);
        o.n(n).a
    }, function(t, e, o) {
        (e = o(12)(!1)).push([t.i, ".__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}", ""]), t.exports = e
    }, function(t, e, o) {
        var content = o(204);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, o(13).default)("711f5bf6", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, o) {
        var n = o(12),
            r = o(205),
            c = o(206),
            l = o(207),
            h = o(208),
            d = o(209),
            m = o(210),
            f = o(211),
            v = o(212),
            w = o(213),
            x = o(214),
            y = o(215),
            k = o(216),
            _ = o(217),
            z = o(218),
            C = o(219),
            E = o(220),
            O = o(221),
            L = o(222),
            M = o(223);
        e = n(!1);
        var T = r(c),
            R = r(l),
            j = r(h),
            S = r(d),
            A = r(m),
            P = r(f),
            H = r(v),
            $ = r(w),
            D = r(x),
            F = r(y),
            I = r(k),
            N = r(_),
            B = r(z),
            U = r(C),
            Y = r(E),
            V = r(O),
            W = r(L),
            G = r(M);
        e.push([t.i, "@font-face{font-family:HK Nova;font-style:normal;font-weight:400;font-display:swap;src:url(" + T + ') format("eot"),url(' + R + ') format("woff2"),url(' + j + ') format("woff")}@font-face{font-family:HK Nova;font-style:normal;font-weight:500;font-display:swap;src:url(' + S + ') format("eot"),url(' + A + ') format("woff2"),url(' + P + ') format("woff")}@font-face{font-family:HK Nova;font-style:normal;font-weight:700;font-display:swap;src:url(' + H + ') format("eot"),url(' + $ + ') format("woff2"),url(' + D + ') format("woff")}@font-face{font-family:HK Grotesk Pro;font-style:normal;font-weight:400;font-display:swap;src:url(' + F + ') format("eot"),url(' + I + ') format("woff2"),url(' + N + ') format("woff")}@font-face{font-family:HK Grotesk Pro;font-style:normal;font-weight:500;font-display:swap;src:url(' + B + ') format("eot"),url(' + U + ') format("woff2"),url(' + Y + ') format("woff")}@font-face{font-family:HK Grotesk Pro;font-style:normal;font-weight:700;font-display:swap;src:url(' + V + ') format("eot"),url(' + W + ') format("woff2"),url(' + G + ') format("woff")}@font-face{font-family:Noto Sans CJK JP;font-weight:400;font-style:normal;font-display:swap;src:local("Noto Sans CJK JP Regular"),url(//fonts.gstatic.com/ea/notosansjp/v5/NotoSansJP-Regular.woff2) format("woff2"),url(//fonts.gstatic.com/ea/notosansjp/v5/NotoSansJP-Regular.woff) format("woff"),url(//fonts.gstatic.com/ea/notosansjp/v5/NotoSansJP-Regular.otf) format("opentype");unicode-range:U+3000-9fff,U+ff??}@font-face{font-family:Noto Sans CJK JP;font-weight:500;font-style:normal;font-display:swap;src:local("Noto Sans CJK JP Medium"),url(//fonts.gstatic.com/ea/notosansjp/v5/NotoSansJP-Medium.woff2) format("woff2"),url(//fonts.gstatic.com/ea/notosansjp/v5/NotoSansJP-Medium.woff) format("woff"),url(//fonts.gstatic.com/ea/notosansjp/v5/NotoSansJP-Medium.otf) format("opentype");unicode-range:U+3000-9fff,U+ff??}@font-face{font-family:Noto Sans CJK JP;font-weight:700;font-style:normal;font-display:swap;src:local("Noto Sans CJK JP Bold"),url(//fonts.gstatic.com/ea/notosansjp/v5/NotoSansJP-Bold.woff2) format("woff2"),url(//fonts.gstatic.com/ea/notosansjp/v5/NotoSansJP-Bold.woff) format("woff"),url(//fonts.gstatic.com/ea/notosansjp/v5/NotoSansJP-Bold.otf) format("opentype");unicode-range:U+3000-9fff,U+ff??}', ""]), t.exports = e
    }, , function(t, e, o) {
        t.exports = o.p + "assets/fonts/hk-nova/HKNova-Regular.eot"
    }, function(t, e, o) {
        t.exports = o.p + "assets/fonts/hk-nova/HKNova-Regular.woff2"
    }, function(t, e, o) {
        t.exports = o.p + "assets/fonts/hk-nova/HKNova-Regular.woff"
    }, function(t, e, o) {
        t.exports = o.p + "assets/fonts/hk-nova/HKNova-Medium.eot"
    }, function(t, e, o) {
        t.exports = o.p + "assets/fonts/hk-nova/HKNova-Medium.woff2"
    }, function(t, e, o) {
        t.exports = o.p + "assets/fonts/hk-nova/HKNova-Medium.woff"
    }, function(t, e, o) {
        t.exports = o.p + "assets/fonts/hk-nova/HKNova-Bold.eot"
    }, function(t, e, o) {
        t.exports = o.p + "assets/fonts/hk-nova/HKNova-Bold.woff2"
    }, function(t, e, o) {
        t.exports = o.p + "assets/fonts/hk-nova/HKNova-Bold.woff"
    }, function(t, e, o) {
        t.exports = o.p + "assets/fonts/hk-grotesk-pro/HKGroteskPro-Regular.eot"
    }, function(t, e, o) {
        t.exports = o.p + "assets/fonts/hk-grotesk-pro/HKGroteskPro-Regular.woff2"
    }, function(t, e, o) {
        t.exports = o.p + "assets/fonts/hk-grotesk-pro/HKGroteskPro-Regular.woff"
    }, function(t, e, o) {
        t.exports = o.p + "assets/fonts/hk-grotesk-pro/HKGroteskPro-Medium.eot"
    }, function(t, e, o) {
        t.exports = o.p + "assets/fonts/hk-grotesk-pro/HKGroteskPro-Medium.woff2"
    }, function(t, e, o) {
        t.exports = o.p + "assets/fonts/hk-grotesk-pro/HKGroteskPro-Medium.woff"
    }, function(t, e, o) {
        t.exports = o.p + "assets/fonts/hk-grotesk-pro/HKGroteskPro-Bold.eot"
    }, function(t, e, o) {
        t.exports = o.p + "assets/fonts/hk-grotesk-pro/HKGroteskPro-Bold.woff2"
    }, function(t, e, o) {
        t.exports = o.p + "assets/fonts/hk-grotesk-pro/HKGroteskPro-Bold.woff"
    }, function(t, e, o) {
        var content = o(225);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, o(13).default)("453301da", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, o) {
        (e = o(12)(!1)).push([t.i, "*,:after,:before{-webkit-box-sizing:border-box;box-sizing:border-box}:after,:before{text-decoration:inherit;vertical-align:inherit}html{cursor:default;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-tap-highlight-color:transparent;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;word-break:break-word}body{margin:0}h1{font-size:2em;margin:.67em 0}dl dl,dl ol,dl ul,ol dl,ol ol,ol ul,ul dl,ul ol,ul ul{margin:0}hr{height:0;overflow:visible}main{display:block}nav ol,nav ul{list-style:none;padding:0}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}audio,canvas,iframe,img,svg,video{vertical-align:middle}audio,video{display:inline-block}audio:not([controls]){display:none;height:0}iframe,img{border-style:none}svg:not([fill]){fill:currentColor}svg:not(:root){overflow:hidden}table{border-collapse:collapse}button,input,select{margin:0}button{overflow:visible;text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}fieldset{border:1px solid #a0a0a0;padding:.35em .75em .625em}input{overflow:visible}legend{color:inherit;display:table;max-width:100%;white-space:normal}progress{display:inline-block;vertical-align:baseline}select{text-transform:none}textarea{margin:0;overflow:auto;resize:vertical}[type=checkbox],[type=radio]{padding:0}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}::-webkit-input-placeholder{color:inherit;opacity:.54}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}::-moz-focus-inner{border-style:none;padding:0}:-moz-focusring{outline:1px dotted ButtonText}:-moz-ui-invalid{box-shadow:none}details,dialog{display:block}dialog{background-color:#fff;border:solid;color:#000;height:-moz-fit-content;height:-webkit-fit-content;height:fit-content;left:0;margin:auto;padding:1em;position:absolute;right:0;width:-moz-fit-content;width:-webkit-fit-content;width:fit-content}dialog:not([open]){display:none}summary{display:list-item}canvas{display:inline-block}template{display:none}[tabindex],a,area,button,input,label,select,summary,textarea{-ms-touch-action:manipulation;touch-action:manipulation}[hidden]{display:none}[aria-busy=true]{cursor:progress}[aria-controls]{cursor:pointer}[aria-disabled=true],[disabled]{cursor:not-allowed}[aria-hidden=false][hidden]{display:inline;display:initial}[aria-hidden=false][hidden]:not(:focus){clip:rect(0,0,0,0);position:absolute}", ""]), t.exports = e
    }, function(t, e, o) {
        var content = o(227);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, o(13).default)("962cb04e", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, o) {
        (e = o(12)(!1)).push([t.i, 'a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:"";content:none}table{border-collapse:collapse;border-spacing:0}', ""]), t.exports = e
    }, function(t, e, o) {
        var content = o(229);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, o(13).default)("752bbc0a", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, o) {
        (e = o(12)(!1)).push([t.i, '*,a{outline:0}:after,:before{-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}html{width:100%;height:100%;font-size:62.5%;-ms-overflow-style:-ms-autohiding-scrollbar}html.windows.firefox{scrollbar-width:none}html::-webkit-scrollbar{display:none}html.is-fixed body{overflow:hidden}body{width:100%;height:100%;margin:0;padding:0;background:#fff;color:#111;font-size:1.6rem;font-family:-apple-system,BlinkMacSystemFont,sans-serif;-webkit-font-feature-settings:"palt";font-feature-settings:"palt";font-variant-east-asian:proportional-width;line-height:1;letter-spacing:.075em;overflow-x:hidden;overscroll-behavior-y:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-tap-highlight-color:rgba(0,0,0,0);tap-highlight-color:transparent}[lang=ja] body{font-family:Noto Sans CJK JP,-apple-system,BlinkMacSystemFont,sans-serif;font-variant-east-asian:proportional-width}[lang=en] body{font-family:HK Grotesk Pro,-apple-system,BlinkMacSystemFont,sans-serif}a:active,a:hover,a:link,a:visited{color:#111;text-decoration:none}::selection{color:#ff4e50;background:rgba(0,0,0,.1)}::-moz-selection{color:#ff4e50;background:rgba(0,0,0,.1)}:placeholder-shown{color:silver}::-webkit-input-placeholder{color:silver}:-moz-placeholder,::-moz-placeholder{color:silver}:-ms-input-placeholder{color:silver}', ""]), t.exports = e
    }, function(t, e, o) {
        var content = o(231);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, o(13).default)("79794ac1", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, o) {
        (e = o(12)(!1)).push([t.i, ".en{font-family:HK Grotesk Pro,sans-serif}.ja{font-family:Noto Sans CJK JP,-apple-system,BlinkMacSystemFont,sans-serif}.p-careers-details .subpage-hero-ttl .back,.p-careers-details .subpage-hero-ttl .front,.p-careers-details .subpage-hero-ttl .words,.p-legals .subpage-hero-ttl .back,.p-legals .subpage-hero-ttl .front,.p-legals .subpage-hero-ttl .words{padding:6px 0}.p-careers-details .subpage-hero-ttl .words:not(:first-child),.p-legals .subpage-hero-ttl .words:not(:first-child){margin-top:-10px}", ""]), t.exports = e
    }, function(t, e, o) {
        var content = o(233);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, o(13).default)("24b486e1", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, o) {
        (e = o(12)(!1)).push([t.i, '.m-solutions-method{position:relative;width:100%;height:auto;background:#fff}.m-solutions-method .solutions-method-creative{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;position:relative;width:100%;height:100%}.m-solutions-method .solutions-method-creative .solutions-method-txts-body{margin-bottom:10.41667vw;padding-left:13.75vw;padding-right:21.45833vw}.m-solutions-method .solutions-method-services{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;margin-top:-8.33333vw;position:relative;width:100%;height:100%}.m-solutions-method .solutions-method-services .solutions-method-txts-body{margin-top:10.41667vw;padding-left:21.45833vw;padding-right:13.75vw}.m-solutions-method .solutions-method-txts{width:63.125vw}.m-solutions-method .solutions-method-txts-body{position:relative}.m-solutions-method .solutions-method-ttl{position:relative;margin-left:-.05em;display:inline-block;font-size:calc(4.8rem + (5800vw - 34800px)/1000);font-family:HK Nova,sans-serif;font-weight:400;line-height:1;letter-spacing:0;white-space:nowrap}.m-solutions-method .solutions-method-ttl:after{content:attr(data-txt);position:absolute;top:-.5em;right:-5.5em;color:#a0a0a0;font-size:calc(1.8rem + (200vw - 1200px)/1000)}.m-solutions-method .solutions-method-txt{display:block;max-width:446px;margin:1.5em 0 2em;font-size:calc(1.8rem + (200vw - 1200px)/1000);font-weight:400;line-height:2;letter-spacing:.075em}.m-solutions-method .solutions-method-video-thumb{position:relative;width:36.875vw;height:100vh;height:calc(var(--vh)*100);max-height:1200px}.m-solutions-method .solutions-method-video-wrap{position:relative;width:100%;height:100%}.m-solutions-method .solutions-method-video{position:relative;width:100%;height:100%;opacity:0;visibility:hidden;-o-object-fit:cover;object-fit:cover}[lang=en] .m-solutions-method .solutions-method-txt{font-family:HK Grotesk Pro,sans-serif;font-weight:400;line-height:1.7;letter-spacing:.005em}.m-subpage-hero{position:relative;width:100%;height:auto}.m-subpage-hero.subpage-child,.m-subpage-hero.subpage-single{-webkit-transition:background 1s cubic-bezier(.39,.575,.565,1) 0s;transition:background 1s cubic-bezier(.39,.575,.565,1) 0s}.m-subpage-hero.subpage-single .subpage-hero-ttl{color:#111;opacity:0}.m-subpage-hero.subpage-single .meta{opacity:0}.m-subpage-hero.subpage-child.is-white,.m-subpage-hero.subpage-single.is-white{background:#fff}.m-subpage-hero .subpage-hero-height{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;position:relative;width:100%;height:calc(100vh - 8.33333vw);height:calc(var(--vh)*100 - 8.33333vw);min-height:540px;padding-top:calc(50px + 8.33333vw);padding-bottom:8.33333vw}.m-subpage-hero .subpage-hero-height:after{content:"";position:absolute;left:0;bottom:-1px;width:100%;height:16.66667vw;background:-webkit-gradient(linear,left bottom,left top,from(#fff),to(hsla(0,0%,100%,0)));background:linear-gradient(0deg,#fff,hsla(0,0%,100%,0));z-index:-1;pointer-events:none}.m-subpage-hero.subpage-child .subpage-hero-height{height:calc(100vh - 12.5vw);height:calc(var(--vh)*100 - 12.5vw);padding-top:calc(50px + 12.5vw)}.m-subpage-hero.subpage-single .subpage-hero-height{height:auto;min-height:520px;padding-top:calc(50px + 12.5vw)}.m-subpage-hero .subpage-hero-inner{position:relative;width:100%;padding:0 21.45833vw}.m-subpage-hero .subpage-hero-body{position:relative;margin:0 auto;max-width:1096px}.m-subpage-hero .subpage-hero-ttl{margin-left:-.05em;font-size:calc(4.8rem + (9200vw - 55200px)/1000);line-height:1}.m-subpage-hero .subpage-hero-sub-ttl,.m-subpage-hero .subpage-hero-ttl{position:relative;color:transparent;font-family:HK Nova,sans-serif;font-weight:400;letter-spacing:0}.m-subpage-hero .subpage-hero-sub-ttl{margin-bottom:.75em;font-size:calc(1.8rem + (1000vw - 6000px)/1000);line-height:1.16}.m-subpage-hero .back-to-link{position:absolute;top:calc(5.20833vw + 5em);left:0;width:100%;padding:0 13.125vw}.m-subpage-hero a.back-to{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;position:relative;padding:6px 0;color:#a0a0a0;font-size:1.6rem;font-family:HK Nova,sans-serif;font-weight:400;line-height:1;letter-spacing:0;z-index:1}.m-subpage-hero .back-to-link .arrow{position:relative;top:-1px;display:block;width:13.5px;height:9px;margin-right:10px}.m-subpage-hero .back-to-link .arrow .point{position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;width:2px;height:2px;pointer-events:none}.m-subpage-hero .back-to-link .arrow-back{display:block;width:100%;height:100%}.m-subpage-hero .back-to-link .arrow-back path{fill:#a0a0a0}.m-subpage-hero .back-to-link .txt{display:inline-block;-webkit-transition:-webkit-transform .35s cubic-bezier(.165,.84,.44,1) 0s;transition:-webkit-transform .35s cubic-bezier(.165,.84,.44,1) 0s;transition:transform .35s cubic-bezier(.165,.84,.44,1) 0s;transition:transform .35s cubic-bezier(.165,.84,.44,1) 0s,-webkit-transform .35s cubic-bezier(.165,.84,.44,1) 0s}.m-subpage-intro{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;padding-bottom:16.66667vw;background:#fff}.m-subpage-intro .subpage-intro-rect{display:block;padding:10.41667vw 8.33333vw 12.5vw 13.125vw;width:61.875vw;height:auto;color:#fff;background:#010101}.m-subpage-intro .subpage-intro-rect .txts{position:relative}.m-subpage-intro .subpage-intro-rect .helix-wave{margin-top:1em}.m-subpage-intro .subpage-intro-rect .txts .ttl{color:#fff;font-size:calc(3.6rem + (200vw - 1200px)/1000);font-family:HK Nova,sans-serif;font-weight:400;letter-spacing:0;margin-bottom:.75em}.m-subpage-intro .subpage-intro-rect .txts .txt-wrap{width:36.25vw}.m-subpage-intro .subpage-intro-rect .txts .txt{position:relative;padding-left:8.33333vw;font-size:calc(1.5rem + (100vw - 600px)/1000);line-height:2}.m-subpage-intro .subpage-intro-rect .txts .txt:before{content:"";position:absolute;top:1.1em;left:0;width:5.625vw;height:1px;background:#333}.m-subpage-intro .subpage-intro-space{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;padding:0 4.79167vw 0 9.58333vw;width:38.125vw;background:#fff}.m-subpage-intro .section-nav-lists{position:relative;pointer-events:none}.m-subpage-intro .section-nav-list{position:relative;font-size:calc(2rem + (600vw - 3600px)/1000);font-family:HK Nova,sans-serif;font-weight:400;line-height:1.16;letter-spacing:0;white-space:nowrap;-webkit-transition:-webkit-transform .5s cubic-bezier(.165,.84,.44,1) 0s;transition:-webkit-transform .5s cubic-bezier(.165,.84,.44,1) 0s;transition:transform .5s cubic-bezier(.165,.84,.44,1) 0s;transition:transform .5s cubic-bezier(.165,.84,.44,1) 0s,-webkit-transform .5s cubic-bezier(.165,.84,.44,1) 0s}.m-subpage-intro .section-nav-list:not(:last-child){margin-bottom:.6em}.m-subpage-intro .section-nav-list .link{position:relative;display:inline-block;cursor:pointer;pointer-events:auto}.m-subpage-intro .section-nav-list .link .no{position:absolute;left:calc(-1.8em - 1.25vw);color:transparent;overflow:hidden;pointer-events:none}.m-subpage-intro .section-nav-list .link .no:before{content:attr(data-txt);display:inline-block;left:0;width:100%;height:100%;top:100%;color:#ff4e50}.m-subpage-intro .section-nav-list .link .no:before,.m-subpage-intro .section-nav-list .link .point{position:absolute;-webkit-transition:-webkit-transform .5s cubic-bezier(.165,.84,.44,1) 0s;transition:-webkit-transform .5s cubic-bezier(.165,.84,.44,1) 0s;transition:transform .5s cubic-bezier(.165,.84,.44,1) 0s;transition:transform .5s cubic-bezier(.165,.84,.44,1) 0s,-webkit-transform .5s cubic-bezier(.165,.84,.44,1) 0s}.m-subpage-intro .section-nav-list .link .point{top:50%;margin-top:-7px;left:calc(-.05em - 1.25vw);display:block;width:6px;height:6px;background:#ff4e50;border-radius:50%;-webkit-transform:scale(0);transform:scale(0)}.m-subpage-intro .section-nav-list .link .txt{position:relative;display:inline-block;color:transparent;overflow:hidden}.m-subpage-intro .section-nav-list .link .txt:after,.m-subpage-intro .section-nav-list .link .txt:before{content:attr(data-txt);display:inline-block;position:absolute;left:0;width:100%;height:100%;-webkit-transition:-webkit-transform .5s cubic-bezier(.165,.84,.44,1) 0s;transition:-webkit-transform .5s cubic-bezier(.165,.84,.44,1) 0s;transition:transform .5s cubic-bezier(.165,.84,.44,1) 0s;transition:transform .5s cubic-bezier(.165,.84,.44,1) 0s,-webkit-transform .5s cubic-bezier(.165,.84,.44,1) 0s}.m-subpage-intro .section-nav-list .link .txt:before{top:0;color:#a0a0a0;-webkit-transform-origin:0 50% 0;transform-origin:0 50% 0}.m-subpage-intro .section-nav-list .link .txt:after{top:100%;color:#ff4e50;-webkit-transform-origin:0 50% 0;transform-origin:0 50% 0;-webkit-transform:rotate(10deg);transform:rotate(10deg)}[lang=en] .m-subpage-intro .subpage-intro-rect .txts .txt{font-size:calc(1.6rem + (100vw - 600px)/1000);line-height:1.7;letter-spacing:.005em}[lang=en] .m-subpage-intro .subpage-intro-rect .txts .txt:before{top:.75em}.m-subpage-sections{position:relative;width:100%}.m-subpage-sections:after{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:#fff;z-index:-1}.m-subpage-sections .subpage-section-narrow{position:relative;width:100%;padding:0 21.45833vw}.m-subpage-sections .subpage-section-narrow-body{position:relative;width:100%;max-width:1096px;margin:0 auto}.m-subpage-sections .subpage-section{position:relative}.m-subpage-sections .subpage-section:not(:last-child) .subpage-section-img,.m-subpage-sections .subpage-section:not(:last-child) .subpage-section-video{padding-bottom:14.58333vw}.m-subpage-sections .subpage-section-header{position:relative;width:100%;padding:70px 13.125vw 8.33333vw;background:#fff}.m-subpage-sections .subpage-section-header .helix-wave{margin:1em 0 1.5em -.625em}.m-subpage-sections .subpage-section-header-body{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;position:relative;max-width:1416px;margin:0 auto}.m-subpage-sections .subpage-section .section-ttls{position:relative;width:50%;padding-left:4.16667vw}.m-subpage-sections .subpage-section .section-ttls .no{position:absolute;top:-70px;left:0;color:#ff4e50;font-size:calc(3.2rem + (1000vw - 6000px)/1000);font-family:HK Nova,sans-serif;font-weight:500;letter-spacing:0}.m-subpage-sections .subpage-section .section-ttls .ttl{position:relative;margin-left:-.05em;font-size:calc(5.8rem + (1800vw - 10800px)/1000);font-family:HK Nova,sans-serif;font-weight:400;line-height:1;letter-spacing:0}.m-subpage-sections .subpage-section .section-ttls .ttl .row{display:block}.m-subpage-sections .subpage-section .section-ttls .ttl .row:after{content:attr(data-txt)}.m-subpage-sections .subpage-section .section-ttls .ttl .row:not(:last-child){margin-bottom:.15em}.m-subpage-sections .subpage-section .section-ttls .creative-lists{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.m-subpage-sections .subpage-section .section-ttls .creative-list{color:#404040;font-size:calc(1.8rem + (200vw - 1200px)/1000);font-family:HK Nova,sans-serif;font-weight:400;line-height:1.5;letter-spacing:0;vertical-align:middle}.m-subpage-sections .subpage-section .section-ttls .creative-list:not(:last-child):after{content:"";position:relative;display:inline-block;width:5px;height:5px;margin:0 8px;background:#a0a0a0;border-radius:50%}.m-subpage-sections .subpage-section .section-txts{width:50%;padding-left:4.79167vw}.m-subpage-sections .subpage-section .section-txts>.txt{margin-bottom:2em;padding-top:.5em;padding-right:4.16667vw;font-size:calc(1.6rem + (200vw - 1200px)/1000);line-height:2;letter-spacing:.075em}.m-subpage-sections .subpage-section .section-txts .our-services .ttl{color:#a0a0a0;font-size:calc(1.5rem + (100vw - 600px)/1000);font-family:HK Nova,sans-serif;font-weight:400;letter-spacing:0;margin-bottom:.5em}.m-subpage-sections .subpage-section .section-txts .services-lists{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;pointer-events:none}.m-subpage-sections .subpage-section .section-txts .services-list{display:inline-block;font-size:calc(2rem + (1200vw - 7200px)/1000);font-family:HK Nova,sans-serif;letter-spacing:0;white-space:nowrap;vertical-align:middle;line-height:1.5}.m-subpage-sections .subpage-section .section-txts .services-list:not(:last-child):after{content:"";position:relative;display:inline-block;width:8px;height:8px;margin:0 .5em;background:#111;border-radius:50%;-webkit-transition:background .35s cubic-bezier(.39,.575,.565,1) .1s;transition:background .35s cubic-bezier(.39,.575,.565,1) .1s}.m-subpage-sections .subpage-section .section-txts .services-list a.ex-link{-webkit-transition:color .35s cubic-bezier(.39,.575,.565,1) .1s;transition:color .35s cubic-bezier(.39,.575,.565,1) .1s;pointer-events:auto}.m-subpage-sections .subpage-section-img{position:relative;padding-left:54.79167vw;background:#fff}.m-subpage-sections .section-img-thumb-ratio{position:relative;width:100%;padding-top:75%}.m-subpage-sections .section-img-thumb{position:absolute;top:0;left:0;width:100%;height:100%}.m-subpage-sections .section-img-wrap{position:relative;width:100%;height:100%}.m-subpage-sections .section-img{width:100%;height:100%;opacity:0;visibility:hidden;-o-object-fit:cover;object-fit:cover}.m-subpage-sections .subpage-section-video{position:relative;padding:0 8.95833vw;background:#fff}.m-subpage-sections .subpage-section-video:after,.m-subpage-sections .subpage-section-video:before{content:"";position:absolute;top:0;left:0;width:8.95833vw;height:100%;background:#fff;z-index:-1}.m-subpage-sections .subpage-section-video:after{left:auto;right:0}.m-subpage-sections .section-video-thumb-ratio{position:relative;width:100%;padding-top:56.25%}.m-subpage-sections .section-video-thumb{position:absolute;top:0;left:0;width:100%;height:100%}.m-subpage-sections .section-video-wrap{position:relative;width:100%;height:100%}.m-subpage-sections .section-video{width:100%;height:100%;opacity:0;visibility:hidden;-o-object-fit:cover;object-fit:cover}.m-subpage-sections .ui-play-btn{visibility:hidden;bottom:-.5px;right:0}[lang=en] .m-subpage-sections .subpage-section .section-txts>.txt{padding-top:0;font-family:HK Grotesk Pro,sans-serif;font-size:1.8rem;line-height:1.7;letter-spacing:.005em}.m-subpage-child-content{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;position:relative;width:100%}.m-subpage-child-content:not(:last-child){margin-bottom:10.41667vw}.m-subpage-child-content .content-label{width:16.66667vw;padding-right:5.41667vw}.m-subpage-child-content .content-label .ttl{font-size:calc(3rem + (200vw - 1200px)/1000);font-family:HK Nova,sans-serif;font-weight:400;letter-spacing:0}.m-subpage-child-content .content-label .ttl .row{display:block}.m-subpage-child-content .content-label .ttl .row:not(:last-child){margin-bottom:5px}.m-subpage-child-content .content-body{width:40.41667vw}.m-subpage-link{position:relative;width:100%;padding:12.5vw 0 14.58333vw;background:#fff}.m-subpage-link .subpage-link-inner{padding:0 17.29167vw}.m-subpage-link .subpage-link-body{cursor:pointer;max-width:1256px;margin:0 auto}.m-subpage-link .sub-ttl{position:relative;margin-bottom:2em}.m-subpage-link .ttl{text-align:center;font-size:calc(4.8rem + (10800vw - 64800px)/1000);font-family:HK Nova,sans-serif;font-weight:400;line-height:1;letter-spacing:0}.m-subpage-link .txt-wrap{display:block;position:relative;width:100%;height:1.5em;line-height:1;overflow:hidden}.m-subpage-link .txt{position:relative}.m-email-copy{cursor:pointer}.m-email-copy,.m-email-copy a.email{position:relative;width:100%;height:100%;display:block}.m-email-copy.is-hover a.email .txt.active{-webkit-transform:translateY(-100%);transform:translateY(-100%)}.m-email-copy.is-hover a.email .txt.hover{-webkit-transform:translateY(0);transform:translateY(0)}.m-email-copy.is-hover a.email .txt.hover:after{opacity:1}.m-email-copy.is-hover a.email .txt.done{-webkit-transform:translateY(100%);transform:translateY(100%)}.m-email-copy.is-click a.email .txt.active{-webkit-transform:translateY(-200%);transform:translateY(-200%)}.m-email-copy.is-click a.email .txt.hover{-webkit-transform:translateY(-100%);transform:translateY(-100%)}.m-email-copy.is-click a.email .txt.done{-webkit-transform:translateY(0);transform:translateY(0)}.m-email-copy a.email .txt{position:absolute;top:0;left:0;padding:.25em 0;-webkit-transition:-webkit-transform .5s cubic-bezier(.77,0,.175,1) 0s;transition:-webkit-transform .5s cubic-bezier(.77,0,.175,1) 0s;transition:transform .5s cubic-bezier(.77,0,.175,1) 0s;transition:transform .5s cubic-bezier(.77,0,.175,1) 0s,-webkit-transform .5s cubic-bezier(.77,0,.175,1) 0s}.m-email-copy a.email .txt.active{-webkit-transform:translateY(0);transform:translateY(0)}.m-email-copy a.email .txt.active,.m-email-copy a.email .txt.hover{-webkit-transition:-webkit-transform .5s cubic-bezier(.165,.84,.44,1) 0s;transition:-webkit-transform .5s cubic-bezier(.165,.84,.44,1) 0s;transition:transform .5s cubic-bezier(.165,.84,.44,1) 0s;transition:transform .5s cubic-bezier(.165,.84,.44,1) 0s,-webkit-transform .5s cubic-bezier(.165,.84,.44,1) 0s}.m-email-copy a.email .txt.hover{-webkit-transform:translateY(100%);transform:translateY(100%)}.m-email-copy a.email .txt.hover:after{content:attr(data-txt);position:absolute;top:50%;left:calc(100% + 15px);margin-top:-.5em;color:#a0a0a0;font-size:1.6rem;font-family:HK Nova,sans-serif;font-weight:400;line-height:1;letter-spacing:0;opacity:0;-webkit-transition:opacity .5s cubic-bezier(.39,.575,.565,1) 0s;transition:opacity .5s cubic-bezier(.39,.575,.565,1) 0s}.m-email-copy a.email .txt.done{-webkit-transform:translateY(200%);transform:translateY(200%);-webkit-transition:-webkit-transform .5s cubic-bezier(.165,.84,.44,1) 0s;transition:-webkit-transform .5s cubic-bezier(.165,.84,.44,1) 0s;transition:transform .5s cubic-bezier(.165,.84,.44,1) 0s;transition:transform .5s cubic-bezier(.165,.84,.44,1) 0s,-webkit-transform .5s cubic-bezier(.165,.84,.44,1) 0s}.m-news-articles{position:relative;width:100%;background:#fff}.m-news-articles .news-lists{position:relative;padding-left:13.125vw}.m-news-articles .news-list{position:relative;width:100%;padding:6.25vw 0}.m-news-articles .news-list:first-child{padding-top:0}.m-news-articles .news-list:not(:last-child){border-bottom:1px solid #eee}.m-news-articles .news-article{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;cursor:pointer}.m-news-articles .news-article-header{position:relative;padding-top:4.16667vw;width:50vw}.m-news-articles .news-article-header-inner{position:relative;width:100%}.m-news-articles .news-article-header .meta{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap;margin-bottom:2em}.m-news-articles .news-article-header .category{position:relative;display:inline-block;vertical-align:middle}.m-news-articles .news-article-header .category:after{content:"";display:inline-block;width:5px;height:5px;margin:0 10px 3px;background:#a0a0a0;border-radius:50%}.m-news-articles .news-article-header .category a.link{color:#ff4e50;font-weight:500;-webkit-transition:color .35s cubic-bezier(.39,.575,.565,1) 0s;transition:color .35s cubic-bezier(.39,.575,.565,1) 0s}.m-news-articles .news-article-header .category a.link,.m-news-articles .news-article-header .date{font-size:calc(1.6rem + (200vw - 1200px)/1000);font-family:HK Nova,sans-serif;line-height:1;letter-spacing:0}.m-news-articles .news-article-header .date{font-weight:400}.m-news-articles .news-article-header .ttl{position:relative;margin-bottom:2em;padding-right:13.75vw;font-size:calc(2.6rem + (400vw - 2400px)/1000);font-weight:500;line-height:1.7}.m-news-articles .news-article-thumb-wrap{position:relative;width:36.875vw}.m-news-articles .news-article-thumb-ratio{position:relative;padding-top:75%;width:100%}.m-news-articles .news-article-thumb{position:absolute;top:0;left:0;width:100%;height:100%}.m-news-articles .news-article-img,.m-news-articles .news-article-img-wrap{position:relative;width:100%;height:100%}.m-news-articles .news-article-img{opacity:0;visibility:hidden;-o-object-fit:cover;object-fit:cover}.m-news-more{position:relative;width:100%;padding:4.16667vw 0 10.41667vw;background:#fff}.m-news-more .news-more-inner{padding:0 12.5vw}.m-news-more .load-more-btn{position:relative;padding:2.08333vw 0;text-align:center;font-size:calc(4.7rem + (100vw - 600px)/1000);font-family:HK Nova,sans-serif;font-weight:400;line-height:1;letter-spacing:0;cursor:pointer}.m-news-more .load-more-btn .txt{position:relative;display:inline-block;padding:.15em 0}.m-news-more .load-more-btn .txt:after,.m-news-more .load-more-btn .txt:before{content:"";position:absolute;bottom:0;left:0;width:100%;height:3px;background:#111}.m-news-more .load-more-btn .txt:before{-webkit-transform-origin:100% 50% 0;transform-origin:100% 50% 0;-webkit-transform:scaleX(0);transform:scaleX(0)}.m-news-more .load-more-btn .txt:after,.m-news-more .load-more-btn .txt:before{-webkit-transition:-webkit-transform 0s cubic-bezier(.165,.84,.44,1) 0s;transition:-webkit-transform 0s cubic-bezier(.165,.84,.44,1) 0s;transition:transform 0s cubic-bezier(.165,.84,.44,1) 0s;transition:transform 0s cubic-bezier(.165,.84,.44,1) 0s,-webkit-transform 0s cubic-bezier(.165,.84,.44,1) 0s}.m-news-more .load-more-btn .txt:after{-webkit-transform-origin:0 50% 0;transform-origin:0 50% 0;-webkit-transform:scale(1);transform:scale(1)}.m-news-more-mask{position:fixed;top:0;left:0;width:100%;height:100%;overflow:hidden;z-index:9999}.m-news-more-mask .more-mask-rect{position:absolute;top:-30%;left:0;width:100%;height:160%;opacity:0;visibility:hidden;-webkit-transform:translateY(100%);transform:translateY(100%)}.m-news-more-mask .more-mask-rect:after{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:-webkit-gradient(linear,left bottom,left top,from(rgba(201,23,30,0)),color-stop(15%,#fff),color-stop(85%,#fff),to(rgba(201,23,30,0)));background:linear-gradient(0deg,rgba(201,23,30,0),#fff 15%,#fff 85%,rgba(201,23,30,0))}[lang=en] .m-news-articles .news-article-header .ttl{font-weight:500;font-family:HK Nova,sans-serif;line-height:1.5;letter-spacing:0}.m-post-body{position:relative;max-width:100%;max-width:702px;margin:0 auto;padding-bottom:1em;line-height:2;letter-spacing:.075em}.m-post-body>p,.m-post-body blockquote p,.m-post-body q p{position:relative;margin-bottom:1em;font-size:1.5rem;line-height:2;letter-spacing:.075em}.m-post-body blockquote p:last-child,.m-post-body q p:last-child{margin-bottom:0}.m-post-body>*+h1,.m-post-body>*+h2,.m-post-body>*+h3,.m-post-body>*+h4,.m-post-body>*+h5,.m-post-body>*+h6{margin-top:2em}.m-post-body pre{word-wrap:break-word;white-space:pre-wrap;padding:2em;font-size:90%;font-family:monospace;font-weight:400;border:1px solid #eee;border-radius:5px}.m-post-body address,.m-post-body pre{margin-bottom:2.5em;line-height:1.5}.m-post-body b,.m-post-body big,.m-post-body strong{font-weight:700}.m-post-body cite,.m-post-body em,.m-post-body i{font-style:italic}.m-post-body del,.m-post-body strike{text-decoration:line-through}.m-post-body sup{vertical-align:super;font-size:smaller}.m-post-body sub{vertical-align:sub;font-size:smaller}.m-post-body code,.m-post-body kbd,.m-post-body tt,.m-post-body var{display:inline-block;padding:2px 4px;font-size:90%;font-family:monospace;font-weight:400;border:1px solid #eee;border-radius:5px}.m-post-body ins{text-decoration:underline}.m-post-body abbr,.m-post-body acronym{-webkit-text-decoration:underline dotted;text-decoration:underline dotted}.m-post-body hr{clear:both;position:relative;display:block;width:100%;height:1px;margin:3em 0;border:none;background:#eee}.m-post-body a{position:relative;color:#ff4e50;line-height:1.25;background:-webkit-gradient(linear,left top,left bottom,from(#ff9b9c),to(#ff9b9c)) 0 100%/0 2px no-repeat;background:linear-gradient(#ff9b9c,#ff9b9c) 0 100%/0 2px no-repeat;-webkit-transition:background .35s cubic-bezier(.39,.575,.565,1) 0s;transition:background .35s cubic-bezier(.39,.575,.565,1) 0s;background-position:0 100%}.m-post-body h1,.m-post-body h2{font-size:4rem}.m-post-body h1,.m-post-body h2,.m-post-body h3{position:relative;font-weight:400;margin-bottom:1.25em;line-height:1.3}.m-post-body h3{font-size:3.2rem}.m-post-body h4{font-size:2.8rem}.m-post-body h4,.m-post-body h5{position:relative;font-weight:400;margin-bottom:1.25em;line-height:1.3}.m-post-body h5{font-size:2rem}.m-post-body h6{position:relative;font-size:1.6rem;font-weight:700;margin-bottom:1.25em;line-height:1.3}.m-post-body blockquote,.m-post-body q{clear:both;position:relative;display:block;width:100%;margin-bottom:1.25em;padding:2em 3.5em 2em 4em;border-left:1px solid #eee;border-radius:4px;z-index:0}.m-post-body blockquote:after,.m-post-body q:after{content:"“";position:absolute;top:20px;left:15px;color:#ff4e50;font-size:8rem;font-family:Hiragino Kaku Gothic ProN,sans-serif;line-height:8rem;z-index:-1}.m-post-body blockquote p,.m-post-body q p{color:#333;font-style:italic;font-size:1.4rem}.m-post-body blockquote p+p:last-child,.m-post-body q p+p:last-child{margin-bottom:0}.m-post-body p+blockquote,.m-post-body p+q{margin-top:2em}.m-post-body img,.m-post-body video{display:block;width:auto;height:auto;max-width:100%;margin:0 auto}.m-post-body img{max-width:100%}.m-post-body p>img,.m-post-body p>video{margin:3em auto 0}.m-post-body p>img+img{margin-top:0}.m-post-body p>img+img:last-child{margin-bottom:3em}.m-post-body ul{position:relative;margin-bottom:2.5em}.m-post-body ul>li{position:relative;padding-left:1.5em;line-height:1.65;letter-spacing:.075em}.m-post-body ul>li:not(:last-child){margin-bottom:1em}.m-post-body ul>li:before{content:"";position:absolute;top:9px;left:0;width:6px;height:6px;background:#ff4e50;border-radius:50%}.m-post-body ul li ol,.m-post-body ul li ul{margin-top:1em}.m-post-body ol{counter-reset:count;position:relative;margin-bottom:2.5em}.m-post-body ol>li{position:relative;padding-left:1.5em;line-height:1.65;letter-spacing:.075em}.m-post-body ol>li:not(:last-child){margin-bottom:1em}.m-post-body ol>li:before{content:counter(count) ".";counter-increment:count;position:absolute;top:0;left:0;color:#ff4e50;font-family:HK Nova,sans-serif;font-weight:700;letter-spacing:0}.m-post-body ol li ol,.m-post-body ol li ul{margin-top:1em}.m-post-body table{table-layout:fixed;position:relative;width:100%;margin-bottom:2.5em}.m-post-body table thead{font-weight:700;background:#eee}.m-post-body table tr{width:100%}.m-post-body table th{padding:1em;text-align:left}.m-post-body table td{padding:1em}.m-post-body table td,.m-post-body table th{vertical-align:middle;border:1px solid #eee}.m-post-body dl{position:relative;width:100%;margin-bottom:1.5em}.m-post-body dl:after{content:"";display:table;clear:both}.m-post-body dt{clear:both;float:left;width:30%;font-weight:700;line-height:1.5;padding-top:.3em;padding-right:2em;margin-bottom:1em}.m-post-body dd{float:left;width:70%;margin-bottom:1em}.m-post-body div.iframe-video,.m-post-body p.iframe-video{position:relative;width:100%;padding-top:56.25%}.m-post-body iframe{position:absolute;top:0;left:0;display:block;width:100%;height:100%}.m-post-body .wp-caption{display:block;position:relative;width:100%;max-width:100%;margin-bottom:2em}.m-post-body .wp-caption img{display:block;width:100%}.m-post-body .wp-caption .wp-caption-text{display:inline-block;margin-top:10px;color:silver;font-size:1.3rem;font-weight:500}.m-post-body .wp-video{width:100%!important;height:auto;min-height:120px;max-width:100%;margin:0 auto 2em}.m-post-body blockquote:empty,.m-post-body div:empty,.m-post-body h1:empty,.m-post-body h2:empty,.m-post-body h3:empty,.m-post-body h4:empty,.m-post-body h5:empty,.m-post-body h6:empty,.m-post-body p:empty{display:none;margin:0}[lang=en] .m-post-body{font-family:HK Grotesk Pro,sans-serif;line-height:1.7;letter-spacing:0}[lang=en] .m-post-body ol>li,[lang=en] .m-post-body ul>li{letter-spacing:.005em}.p-careers-details .m-subpage-hero .subpage-hero-ttl{padding-right:8.33333vw;font-size:calc(6rem + (1200vw - 7200px)/1000)}.p-careers-details .m-subpage-hero .subpage-hero-sub-ttl{margin-bottom:.5em}.p-careers-details .careers-details-description{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;position:relative;margin-bottom:12.5vw}.p-careers-details .careers-details-description .ui-scroll-down{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;font-size:calc(1.8rem + (400vw - 4056px)/586)}.p-careers-details .careers-details-description>.txt{position:relative;width:37.5vw;font-size:calc(1.6rem + (200vw - 1200px)/1000);letter-spacing:.075em;line-height:2}.p-careers-details .careers-details-description .apply-btn-wrap{width:19.58333vw;padding-left:8.33333vw;position:relative;padding-top:.5em}.p-careers-details .careers-details-description .ui-scroll-down{position:relative;white-space:nowrap}.p-careers-details .more-outline-btn-wrap{position:relative;width:100%;margin-top:2em;overflow:hidden}.p-careers-details .more-outline-btn-wrap .more-btn{cursor:pointer}.p-careers-details .more-outline-wrap{position:relative;width:100%;overflow:hidden}.p-careers-details .more-outline-wrap .more-outline{position:relative;width:100%;margin-top:1em}.p-careers-details .more-outline-wrap .more-outline .row{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;font-size:1.5rem;line-height:1.5}.p-careers-details .more-outline-wrap .more-outline .row:not(:last-child){margin-bottom:1em}.p-careers-details .more-outline-wrap .more-outline .row .left{width:8.33333vw;font-weight:500}.p-careers-details .more-outline-wrap .more-outline .row .right{width:29.16667vw}.p-careers-details .skill-lists-wrap{width:100%}.p-careers-details .skill-lists-wrap:not(:last-child){margin-bottom:4em}.p-careers-details .m-subpage-link .ttl{font-size:calc(6rem + (1800vw - 10800px)/1000)}.p-careers-details .m-subpage-link .subpage-link-inner{padding:0 21.45833vw}[lang=en] .p-careers-details .careers-details-description>.txt{font-family:HK Grotesk Pro,sans-serif;line-height:1.7;letter-spacing:.005em}[lang=en] .p-careers-details .more-outline-wrap .more-outline .row .left,[lang=en] .p-careers-details .more-outline-wrap .more-outline .row .right{font-family:HK Grotesk Pro,sans-serif;letter-spacing:.005em}.m-outline-lists{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;position:relative;width:100%}.m-outline-lists .outline-list{width:11.25vw}.m-outline-lists .outline-list .txt{font-size:1.5rem;line-height:1.5}.m-outline-lists .outline-list .txt .note{display:inline-block;margin-top:.025em;color:#a0a0a0;font-size:90%}.m-outline-lists .outline-list .ui-line-ttl{line-height:1.35}.m-do-lists{position:relative;width:100%;counter-reset:number 0}.m-do-lists .do-list{position:relative;border-bottom:1px solid #eee}.m-do-lists .do-list:before{content:counter(number,decimal-leading-zero);counter-increment:number 1;position:absolute;top:.4em;left:0;color:#ff4e50;font-size:calc(1.6rem + (100vw - 600px)/1000);font-family:HK Nova,sans-serif;font-weight:500;line-height:1;letter-spacing:0}.m-do-lists .do-list:first-child .txt{margin-top:0}.m-do-lists .do-list .txt{margin:2em 0;padding-left:4.16667vw;line-height:1.7}.m-skill-lists{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;position:relative;width:100%}.m-skill-lists .skill-list{position:relative;width:100%;font-size:1.4rem;line-height:1.5;padding-left:1.5em}.m-skill-lists .skill-list:before{content:"";position:absolute;top:.65em;left:0;width:4px;height:4px;background:#ff4e50;border-radius:50%}.m-skill-lists .skill-list:not(:last-child){margin-bottom:1em}.m-skill-lists .skill-list .ui-line-ttl{line-height:1.35}[lang=en] .m-skill-lists .skill-list{font-family:HK Grotesk Pro,sans-serif;letter-spacing:.005em}[lang=en] .m-skill-lists .skill-list:not(:last-child){margin-bottom:.5em}[lang=en] .m-do-lists,[lang=en] .m-outline-lists{font-family:HK Grotesk Pro,sans-serif;line-height:1.7;letter-spacing:.005em}.fake-footer{position:relative;width:100%;height:auto;pointer-events:none!important}.fake-footer:after{content:"";position:absolute;right:0;top:0;width:13.125vw;height:16.66667vw;background:-webkit-gradient(linear,left bottom,left top,from(hsla(0,0%,100%,0)),to(#fff));background:linear-gradient(0deg,hsla(0,0%,100%,0),#fff);pointer-events:none}.fake-footer .fake-footer-height{pointer-events:none!important}.no-touch .m-subpage-hero .back-to-link a.back-to:hover .anim-left{-webkit-animation:anim-left .6s cubic-bezier(.165,.84,.44,1) 0s 1 normal forwards running;animation:anim-left .6s cubic-bezier(.165,.84,.44,1) 0s 1 normal forwards running}.no-touch .m-subpage-hero .back-to-link a.back-to:hover .txt{-webkit-transform:translate(20px);transform:translate(20px);-webkit-transition:-webkit-transform .45s cubic-bezier(.165,.84,.44,1) 0s;transition:-webkit-transform .45s cubic-bezier(.165,.84,.44,1) 0s;transition:transform .45s cubic-bezier(.165,.84,.44,1) 0s;transition:transform .45s cubic-bezier(.165,.84,.44,1) 0s,-webkit-transform .45s cubic-bezier(.165,.84,.44,1) 0s}.no-touch .m-subpage-intro .section-nav-list:hover .no:before{-webkit-transition:-webkit-transform .5s cubic-bezier(.165,.84,.44,1) 0s;transition:-webkit-transform .5s cubic-bezier(.165,.84,.44,1) 0s;transition:transform .5s cubic-bezier(.165,.84,.44,1) 0s;transition:transform .5s cubic-bezier(.165,.84,.44,1) 0s,-webkit-transform .5s cubic-bezier(.165,.84,.44,1) 0s;-webkit-transform:translateY(-100%);transform:translateY(-100%)}.no-touch .m-subpage-intro .section-nav-list:hover .link .point{-webkit-transform:scale(1);transform:scale(1)}.no-touch .m-subpage-intro .section-nav-list:hover .txt:after,.no-touch .m-subpage-intro .section-nav-list:hover .txt:before{-webkit-transition:-webkit-transform .5s cubic-bezier(.165,.84,.44,1) 0s;transition:-webkit-transform .5s cubic-bezier(.165,.84,.44,1) 0s;transition:transform .5s cubic-bezier(.165,.84,.44,1) 0s;transition:transform .5s cubic-bezier(.165,.84,.44,1) 0s,-webkit-transform .5s cubic-bezier(.165,.84,.44,1) 0s}.no-touch .m-subpage-intro .section-nav-list:hover .txt:before{-webkit-transform:translateY(-100%) rotate(-10deg);transform:translateY(-100%) rotate(-10deg)}.no-touch .m-subpage-intro .section-nav-list:hover .txt:after{-webkit-transform:translateY(-100%) rotate(0);transform:translateY(-100%) rotate(0)}.no-touch .m-subpage-sections .section-txts .services-lists:hover .services-list:not(:last-child):after{background:#a0a0a0}.no-touch .m-subpage-sections .section-txts .services-lists:hover .services-list:not(:hover) a.ex-link{color:#a0a0a0;-webkit-transition:color .35s cubic-bezier(.39,.575,.565,1) 0s;transition:color .35s cubic-bezier(.39,.575,.565,1) 0s}.no-touch .m-news-articles .news-article-header .category a.link:hover{color:#ff1b1e}.no-touch .m-news-articles .news-article:hover .txt:after,.no-touch .m-news-articles .news-article:hover .txt:before{-webkit-transform:translateY(-100%);transform:translateY(-100%);-webkit-transition:-webkit-transform .5s cubic-bezier(.165,.84,.44,1) 0s;transition:-webkit-transform .5s cubic-bezier(.165,.84,.44,1) 0s;transition:transform .5s cubic-bezier(.165,.84,.44,1) 0s;transition:transform .5s cubic-bezier(.165,.84,.44,1) 0s,-webkit-transform .5s cubic-bezier(.165,.84,.44,1) 0s}.no-touch .m-news-articles .news-article:hover .ui-link .line:after{-webkit-transform-origin:100% 50% 0;transform-origin:100% 50% 0;-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transition:-webkit-transform .35s cubic-bezier(.165,.84,.44,1) 0s;transition:-webkit-transform .35s cubic-bezier(.165,.84,.44,1) 0s;transition:transform .35s cubic-bezier(.165,.84,.44,1) 0s;transition:transform .35s cubic-bezier(.165,.84,.44,1) 0s,-webkit-transform .35s cubic-bezier(.165,.84,.44,1) 0s}.no-touch .m-news-more .load-more-btn:hover .txt:before{-webkit-transform-origin:0 50% 0;transform-origin:0 50% 0;-webkit-transform:scale(1);transform:scale(1);-webkit-transition:-webkit-transform .65s cubic-bezier(.165,.84,.44,1) .2s;transition:-webkit-transform .65s cubic-bezier(.165,.84,.44,1) .2s;transition:transform .65s cubic-bezier(.165,.84,.44,1) .2s;transition:transform .65s cubic-bezier(.165,.84,.44,1) .2s,-webkit-transform .65s cubic-bezier(.165,.84,.44,1) .2s}.no-touch .m-news-more .load-more-btn:hover .txt:after{-webkit-transform-origin:100% 50% 0;transform-origin:100% 50% 0;-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transition:-webkit-transform .65s cubic-bezier(.165,.84,.44,1) 0s;transition:-webkit-transform .65s cubic-bezier(.165,.84,.44,1) 0s;transition:transform .65s cubic-bezier(.165,.84,.44,1) 0s;transition:transform .65s cubic-bezier(.165,.84,.44,1) 0s,-webkit-transform .65s cubic-bezier(.165,.84,.44,1) 0s}.no-touch .m-post-body a:hover{background-size:100% 2px}@media only screen and (min-width:1440px){.m-subpage-intro .subpage-intro-space{padding-left:9.58333vw}}@media only screen and (min-width:1600px){.m-subpage-hero .subpage-hero-sub-ttl{font-size:2.8rem}.m-subpage-hero .subpage-hero-ttl{font-size:16rem}.m-subpage-intro .subpage-intro-rect .txts .txt{max-width:580px}.m-news-articles .news-article-header{width:41.66667vw}.m-news-articles .news-article-header .ttl{padding-right:9.58333vw}.m-news-articles .news-article-thumb-wrap{width:32.08333vw}.m-news-articles .news-lists{margin:0 auto;padding:0 13.125vw}.m-news-articles .news-list{max-width:1416px;margin:0 auto}.careers-details .m-subpage-link{padding:200px 0 233px}.careers-details .m-subpage-link .ttl{font-size:8.376rem}}@media only screen and (min-width:1920px){.m-solutions-method .solutions-method-creative,.m-solutions-method .solutions-method-services{width:1920px;margin:0 auto}.m-solutions-method .solutions-method-services{margin:-160px auto 0}.m-solutions-method .solutions-method-creative .solutions-method-txts-body{padding:0 412px 0 264px}.m-solutions-method .solutions-method-services .solutions-method-txts-body{padding:0 264px 0 412px}.m-solutions-method .solutions-method-txts{max-width:1212px}.m-solutions-method .solutions-method-ttl{font-size:12.456rem}.m-solutions-method .solutions-method-ttl:after{font-size:2.058rem}.m-solutions-method .solutions-method-txt{font-size:2.064rem}.m-solutions-method .solutions-method-video-thumb{max-width:708px}.m-subpage-intro{padding-bottom:320px}.m-subpage-intro .subpage-intro-rect{padding-top:200px;padding-bottom:240px}.m-subpage-intro .subpage-intro-rect .txts .ttl{font-size:3.864rem}.m-subpage-intro .subpage-intro-rect .txts .txt{font-size:1.632rem}.m-subpage-intro .section-nav-list{font-size:2.792rem}[lang=en] .m-subpage-intro .subpage-intro-rect .txts .txt .subpage-intro-rect .txts .txt{font-size:1.732rem}.m-subpage-sections .subpage-section-narrow{padding:0 412px}.m-subpage-sections .subpage-section-header{padding:70px 252px 160px}.m-subpage-sections .subpage-section .section-ttls{padding-left:80px}.m-subpage-sections .subpage-section .section-ttls .no{font-size:4.52rem}.m-subpage-sections .subpage-section .section-ttls .ttl{font-size:8.176rem}.m-subpage-sections .subpage-section .section-ttls .creative-list{font-size:2.064rem}.m-subpage-sections .subpage-section .section-txts{padding-left:92px}.m-subpage-sections .subpage-section .section-txts>.txt{font-size:1.864rem}.m-subpage-sections .subpage-section .section-txts .services-list a.ex-link{font-size:3.584rem}.m-subpage-sections .section-img-thumb-ratio{padding-top:0;width:868px;height:651px}.m-subpage-sections .subpage-section .subpage-section-img{padding-left:calc(50% + 92px)}.m-subpage-sections .subpage-section:not(:last-child) .subpage-section-img{padding-bottom:280px}.m-subpage-sections .subpage-section-video:after,.m-subpage-sections .subpage-section-video:before{width:calc((100vw - 1576px)/2)}.m-subpage-sections .subpage-section-video .l-relative{max-width:1576px;margin:0 auto}.m-news-articles .news-article-header{width:800px;padding-top:80px}.m-news-articles .news-article-thumb-wrap{width:616px;height:462px}.m-news-articles .news-article-thumb-ratio{padding-top:0;height:100%}.m-news-articles .news-article-header .ttl{font-size:3.128rem;padding-right:184px}.m-news-articles .news-article-header .category a.link,.m-news-articles .news-article-header .date{font-size:1.864rem}.m-news-articles .news-list{padding:120px 0}.m-news-more{padding:80px 0 200px}.m-news-more .load-more-btn{padding:40px 0}.m-news-more .load-more-btn .txt{font-size:4.832rem}.m-subpage-child-content:not(:last-child){margin-bottom:200px}.m-subpage-child-content .content-label{width:320px;padding-right:104px}.m-subpage-child-content .content-label .ttl{font-size:3.264rem}.m-subpage-child-content .content-body{width:776px}.m-subpage-child-content .outline-list{width:234px}.m-subpage-child-content .more-outline-wrap .more-outline .row .left{width:160px}.m-subpage-child-content .more-outline-wrap .more-outline .row .right{width:616px}.m-subpage-link{padding:240px 0 280px}.m-subpage-link .ttl{font-size:19.56rem}.m-do-lists:before{font-size:1.732rem}.m-do-lists .do-list .txt{padding-left:80px}.p-careers-details .careers-details-description>.txt{width:720px;font-size:1.864rem}.p-careers-details .careers-details-description .apply-btn-wrap{width:376px;padding-left:160px}}@media only screen and (max-width:1440px){.m-email-copy a.email .txt.hover:after{content:""}}@media only screen and (max-width:1194px){.m-subpage-hero.subpage-single .subpage-hero-height{height:auto;min-height:auto}.m-subpage-hero.subpage-child .subpage-hero-height{height:auto}.m-subpage-hero .subpage-hero-height{min-height:auto}}@media only screen and (max-width:1024px){.m-solutions-method .solutions-method-video-thumb{width:calc(100% - 12.5vw);height:calc(var(--vh)*100*0.75);max-height:480px}.m-solutions-method .solutions-method-txts{margin-top:100px;width:100%;padding:0 12.5vw}.m-solutions-method .solutions-method-txt{max-width:50vw}.m-solutions-method .solutions-method-creative .solutions-method-txts-body,.m-solutions-method .solutions-method-services .solutions-method-txts-body{margin:0;padding:0}.m-solutions-method .solutions-method-creative{margin-bottom:120px}.m-solutions-method .solutions-method-services{margin-top:0}.m-subpage-child-content .content-label{width:16.66667vw;padding-right:1.25vw}}@media only screen and (max-width:1024px) and (orientation:portrait){.m-subpage-hero.subpage-single .subpage-hero-height{height:auto;min-height:auto;padding-top:220px;padding-bottom:60px}.m-subpage-hero.subpage-child .subpage-hero-height{height:auto;min-height:auto;padding-top:140px;padding-bottom:60px}.m-subpage-hero.subpage-child .l-relative{padding-top:60px}.m-subpage-hero .subpage-hero-height{height:calc(var(--vh)*100*0.5);min-height:auto}.m-subpage-hero .back-to-link{top:120px}.m-subpage-hero .subpage-hero-inner{padding:0 12.5vw}.m-subpage-hero .subpage-hero-ttl{font-size:calc(6.4rem + (1000vw - 6800px)/344)}.m-subpage-hero .subpage-hero-sub-ttl{font-size:calc(1.8rem + (1000vw - 6800px)/344)}.m-subpage-intro{padding-bottom:5em}.m-subpage-intro.reverse{-webkit-box-orient:vertical;-webkit-box-direction:reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse}.m-subpage-intro .subpage-intro-space{width:100%;padding:0 13.125vw}.m-subpage-intro .subpage-intro-rect{width:calc(100% - 13.125vw)}.m-subpage-intro .subpage-intro-rect .txts .txt-wrap{width:100%}.m-subpage-intro .subpage-intro-rect .txts .ttl{font-size:3.6rem;width:100%}.m-subpage-intro .subpage-intro-rect .txts .txt{width:100%;padding-right:4.16667vw}.m-subpage-intro .section-nav{position:relative;top:-100px}.m-subpage-intro .section-nav-list{font-size:2rem}.m-subpage-intro .section-nav-list:not(:last-child){margin-bottom:.55em}.m-subpage-sections .subpage-section-narrow{padding:0 12.5vw}.m-subpage-sections .subpage-section .section-ttls .no{top:-60px;font-size:calc(2.8rem + (200vw - 1360px)/344)}.m-subpage-sections .subpage-section .section-ttls .ttl{font-size:calc(4rem + (400vw - 2720px)/344)}.m-subpage-sections .subpage-section .section-txts>.txt{padding-right:0}.m-news-articles .news-article-header .ttl{font-size:calc(2rem + (400vw - 2720px)/344);line-height:1.35}.m-subpage-child-content .content-label{width:25vw;padding-right:5.41667vw}.m-subpage-child-content .content-body{width:48.75vw}.p-careers-details .careers-details-description .txt{width:45.83333vw}.p-careers-details .careers-details-description .apply-btn-wrap{padding-left:8.33333vw;width:29.16667vw}.p-careers-details .m-subpage-link .ttl{font-size:calc(5rem + (200vw - 1360px)/344)}}@media only screen and (max-width:680px){.m-solutions-method .solutions-method-video-thumb{width:calc(100% - 40px);height:calc(var(--vh)*100*0.75)}.m-solutions-method .solutions-method-ttl{font-size:4.8rem}.m-solutions-method .solutions-method-ttl:after{font-size:1.6rem}.m-solutions-method .solutions-method-txts{margin-top:60px;width:100%;padding:0 40px}.m-solutions-method .solutions-method-txt{max-width:calc(100% - 40px);font-size:1.6rem;line-height:1.8}.m-solutions-method .solutions-method-creative .solutions-method-txts-body,.m-solutions-method .solutions-method-services .solutions-method-txts-body{margin:0;padding:0}.m-solutions-method .solutions-method-creative{margin-bottom:120px}.m-solutions-method .solutions-method-services{margin-top:0}.m-subpage-hero.subpage-child .subpage-hero-height,.m-subpage-hero.subpage-single .subpage-hero-height{height:auto;min-height:auto;padding-top:120px;padding-bottom:60px}.m-subpage-hero.subpage-child .l-relative{padding-top:60px}.m-subpage-hero .back-to-link{top:120px;padding:0 15px}.m-subpage-hero .back-to-link .arrow{top:-1px}.m-subpage-hero .back-to-link .arrow-back path{fill:#cfcfcf}.m-subpage-hero .subpage-hero-height{height:420px;min-height:auto;padding-top:120px;padding-bottom:60px}.m-subpage-hero .subpage-hero-inner{padding:0 40px}.m-subpage-hero .subpage-hero-sub-ttl{font-size:2rem}.m-subpage-hero .subpage-hero-ttl{font-size:4.8rem}.m-subpage-intro{padding-bottom:80px}.m-subpage-intro.reverse{-webkit-box-orient:vertical;-webkit-box-direction:reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse}.m-subpage-intro .subpage-intro-space{width:100%;padding:0 40px}.m-subpage-intro .subpage-intro-rect{width:calc(100% - 40px);padding:5em 40px}.m-subpage-intro .subpage-intro-rect .txts .txt-wrap{width:100%}.m-subpage-intro .subpage-intro-rect .txts .ttl{font-size:2.8rem;width:100%}.m-subpage-intro .subpage-intro-rect .txts .txt{padding-left:0;font-size:1.5rem;width:100%}.m-subpage-intro .subpage-intro-rect .txts .txt:before{display:none}.m-subpage-intro .section-nav{position:relative;top:-60px}.m-subpage-intro .section-nav-list{font-size:1.8rem}.m-subpage-intro .section-nav-list:not(:last-child){margin-bottom:.55em}.m-subpage-sections .subpage-section-header{margin-bottom:40px;padding:0 40px}.m-subpage-sections .subpage-section-header .helix-wave{margin:1em 0}.m-subpage-sections .subpage-section:not(:last-child) .subpage-section-img,.m-subpage-sections .subpage-section:not(:last-child) .subpage-section-video{padding-bottom:100px}.m-subpage-sections .subpage-section-narrow{padding:0 40px}.m-subpage-sections .subpage-section-img{padding-left:40px}.m-subpage-sections.subpage-section-creative .subpage-section .section-ttls{margin-bottom:40px}.m-subpage-sections.subpage-section-services .subpage-section .section-ttls{margin-bottom:0}.m-subpage-sections .subpage-section .section-ttls{padding-left:0;width:100%}.m-subpage-sections .subpage-section .section-ttls .no{position:relative;top:0;margin-bottom:1em;font-size:2rem}.m-subpage-sections .subpage-section .section-ttls .ttl{font-size:3.9rem}.m-subpage-sections .subpage-section .section-ttls .ttl .row[data-txt],.m-subpage-sections .subpage-section .section-ttls .ttl .row[data-txt]+.row{display:inline-block}.m-subpage-sections .subpage-section .section-ttls .ttl .row:after{display:none}.m-subpage-sections .subpage-section .section-ttls .creative-lists{margin-bottom:1.5em}.m-subpage-sections .subpage-section .section-ttls .creative-list{font-size:1.4rem}.m-subpage-sections .subpage-section .section-ttls .creative-list:not(:last-child):after{width:4px;height:4px;margin:0 5px}.m-subpage-sections .subpage-section .section-txts .services-list{font-size:2.4rem}.m-subpage-sections .subpage-section .section-txts .services-list:not(:last-child):after{width:6px;height:6px;margin:0 10px}.m-subpage-sections .subpage-section .section-txts{padding-left:0;width:100%}.m-subpage-sections .subpage-section .section-txts>.txt{font-size:1.6rem;line-height:1.8;margin-bottom:2em}.m-subpage-sections .section-video-thumb-ratio{padding-top:62.5%}.m-subpage-sections .subpage-section-video{padding-left:0;padding-right:0}.m-subpage-sections .subpage-section-video .legacy-play-btn{visibility:visible}.m-subpage-link{padding:4em 0 5.5em}.m-subpage-link .subpage-link-inner{padding:0 40px}.m-subpage-link .ttl{font-size:5.4rem;text-align:left}.m-subpage-link .sub-ttl{margin-bottom:15px}.m-news-articles .news-lists{padding:0}.m-news-articles .news-list{padding:40px 0}.m-news-articles .news-list:not(:last-child){border-bottom:none}.m-news-articles .news-list:not(:last-child) .news-article-header-inner{border-bottom:1px solid #eee}.m-news-articles .news-article{-webkit-box-orient:vertical;-webkit-box-direction:reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse}.m-news-articles .news-article-header{width:100%;padding:40px 40px 0}.m-news-articles .news-article-header .meta{margin-bottom:20px}.m-news-articles .news-article-header .category:after{width:4px;height:4px;margin:0 6px}.m-news-articles .news-article-header .category a.link{font-size:1.4rem}.m-news-articles .news-article-header .date{font-size:1.4rem;padding:2px 0}.m-news-articles .news-article-header-inner{padding-bottom:20px}.m-news-articles .news-article-header .ttl{padding-right:0;font-size:2rem}.m-news-articles .news-article-thumb-wrap{width:100%}.m-news-more{padding:20px 0 100px}.m-news-more .news-more-inner{padding:0 40px}.m-news-more .load-more-btn{padding:0;font-size:2.8rem}.m-news-more .load-more-btn .txt:after{height:2px}.m-post-body>*+h1,.m-post-body>*+h2,.m-post-body>*+h3{margin-top:2em}.m-post-body>*+h4,.m-post-body>*+h5,.m-post-body>*+h6{margin-top:1.5em}.m-post-body address{line-height:1.35;margin-bottom:2em}.m-post-body hr{margin:2em 0}.m-post-body h1,.m-post-body h2{font-size:3.2rem;margin-bottom:1.25em}.m-post-body h3{font-size:2.8rem;margin-bottom:1.25em}.m-post-body h4{font-size:2.2rem;margin-bottom:1.25em}.m-post-body h5{font-size:1.8rem;margin-bottom:1.25em}.m-post-body h6{font-size:1.6rem;margin-bottom:1.25em}.m-post-body blockquote,.m-post-body q{margin-bottom:1.25em;padding:1.5em 2.5em 1.5em 3em}.m-post-body blockquote:after,.m-post-body q:after{top:15px;left:10px;font-size:7rem;line-height:7rem}.m-post-body p>img,.m-post-body p>video{margin:2em auto 0}.m-post-body p>img+img{margin-top:0}.m-post-body p>img+img:last-child,.m-post-body ul{margin-bottom:2em}.m-post-body ul{position:relative}.m-post-body ul>li{line-height:1.5}.m-post-body ul>li:not(:last-child){margin-bottom:1em}.m-post-body ul>li:before{top:10px;width:5px;height:5px}.m-post-body ul li ol,.m-post-body ul li ul{margin-top:1em}.m-post-body ol{margin-bottom:2em}.m-post-body ol>li{line-height:1.5}.m-post-body ol>li:not(:last-child){margin-bottom:1em}.m-post-body ol li ol,.m-post-body ol li ul{margin-top:1em}.m-post-body table{margin-bottom:2em}.m-post-body table tr{width:100%}.m-post-body table th{padding:1em;text-align:left}.m-post-body table td{padding:1em}.m-post-body .wp-caption{margin-bottom:1.5em}.m-post-body .wp-caption img{display:block;width:100%}.m-post-body .wp-caption .wp-caption-text{display:inline-block;margin-top:10px;color:silver;font-size:1.3rem;font-weight:500}.m-post-body blockquote:empty,.m-post-body div:empty,.m-post-body h1:empty,.m-post-body h2:empty,.m-post-body h3:empty,.m-post-body h4:empty,.m-post-body h5:empty,.m-post-body h6:empty,.m-post-body p:empty{display:none;margin:0}.m-subpage-child-content:not(:last-child){margin-bottom:4em}.m-subpage-child-content .content-label{width:100%;font-size:2.8rem;margin-bottom:1em;padding-right:0}.m-subpage-child-content .content-label .ttl .row{margin-bottom:0;display:inline-block}.m-subpage-child-content .content-body{width:100%}.p-careers-details .m-subpage-hero .subpage-hero-ttl{font-size:4.8rem}.p-careers-details .careers-details-description{margin-bottom:4em}.p-careers-details .careers-details-description .txt{width:100%;font-size:1.5rem;line-height:1.8}.p-careers-details .careers-details-description .apply-btn-wrap{width:100%;margin-top:1.5em;padding-top:0;padding-left:0}.p-careers-details .more-outline-btn-wrap{margin-top:1em}.p-careers-details .more-outline-wrap .more-outline .row .left{width:100%;margin-bottom:.5em}.p-careers-details .more-outline-wrap .more-outline .row .right{width:100%}.p-careers-details .m-do-lists .do-list .txt{margin:1em 0;padding-left:40px;font-size:1.5rem;line-height:1.8}.p-careers-details .m-do-lists .do-list:before{font-size:1.6rem}.p-careers-details .m-subpage-link .ttl{font-size:3.6rem}.p-careers-details .m-subpage-link .subpage-link-inner{padding:0 40px}.m-outline-lists{width:100%}.m-outline-lists .outline-list{margin-bottom:30px;width:calc(50% - 20px)}.m-outline-lists .outline-list .txt{font-size:1.4rem}.fake-footer{display:none}}', ""]), t.exports = e
    }, function(t, e, o) {
        var content = o(235);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, o(13).default)("2503cb1e", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, o) {
        (e = o(12)(!1)).push([t.i, '@-webkit-keyframes anim-right{0%{opacity:1;-webkit-transform:translate(0);transform:translate(0)}49.9%{opacity:0;-webkit-transform:translate(15px);transform:translate(15px)}50.1%{opacity:0;-webkit-transform:translate(-15px);transform:translate(-15px)}to{opacity:1;-webkit-transform:translate(0);transform:translate(0)}}@keyframes anim-right{0%{opacity:1;-webkit-transform:translate(0);transform:translate(0)}49.9%{opacity:0;-webkit-transform:translate(15px);transform:translate(15px)}50.1%{opacity:0;-webkit-transform:translate(-15px);transform:translate(-15px)}to{opacity:1;-webkit-transform:translate(0);transform:translate(0)}}@-webkit-keyframes anim-left{0%{opacity:1;-webkit-transform:translate(0);transform:translate(0)}49.9%{opacity:0;-webkit-transform:translate(-15px);transform:translate(-15px)}50.1%{opacity:0;-webkit-transform:translate(15px);transform:translate(15px)}to{opacity:1;-webkit-transform:translate(0);transform:translate(0)}}@keyframes anim-left{0%{opacity:1;-webkit-transform:translate(0);transform:translate(0)}49.9%{opacity:0;-webkit-transform:translate(-15px);transform:translate(-15px)}50.1%{opacity:0;-webkit-transform:translate(15px);transform:translate(15px)}to{opacity:1;-webkit-transform:translate(0);transform:translate(0)}}.helix-wave{position:relative;width:100px;height:50px;margin-left:-.625vw}.helix-wave>>>canvas{display:block;width:100%;height:100%}.ui-play-btn{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;position:absolute;width:7.70833vw;height:7.70833vw;max-width:148px;max-height:148px;background:#fff;cursor:pointer;z-index:1}.ui-play-btn.legacy-play-btn{-webkit-transition:opacity .35s cubic-bezier(.39,.575,.565,1) 0s,visibility .35s cubic-bezier(.39,.575,.565,1) 0s;transition:opacity .35s cubic-bezier(.39,.575,.565,1) 0s,visibility .35s cubic-bezier(.39,.575,.565,1) 0s}.ui-play-btn .txt{display:inline-block;color:#ff4e50;font-size:calc(1.6rem + (200vw - 1200px)/1000);font-weight:500;font-family:HK Nova,sans-serif;letter-spacing:0}.ie .is-playing .legacy-play-btn,.mobile .is-playing .legacy-play-btn,.tablet .is-playing .legacy-play-btn{visibility:hidden;opacity:0}.ui-link{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;position:relative;padding:.5em 0}.ui-link .txt{position:relative;display:inline-block;font-size:calc(2.2rem + (400vw - 2400px)/1000);font-family:HK Nova,sans-serif;letter-spacing:0;margin-right:10px;overflow:hidden;color:transparent;line-height:1.16}.ui-link .txt:after,.ui-link .txt:before{content:attr(data-txt);display:inline-block;position:absolute;left:0;color:#111;width:100%;height:100%;-webkit-transition:-webkit-transform .5s cubic-bezier(.165,.84,.44,1) 0s;transition:-webkit-transform .5s cubic-bezier(.165,.84,.44,1) 0s;transition:transform .5s cubic-bezier(.165,.84,.44,1) 0s;transition:transform .5s cubic-bezier(.165,.84,.44,1) 0s,-webkit-transform .5s cubic-bezier(.165,.84,.44,1) 0s}.ui-link .txt:before{top:0;-webkit-transform-origin:0 50% 0;transform-origin:0 50% 0}.ui-link .txt:after{top:100%;-webkit-transform-origin:0 50% 0;transform-origin:0 50% 0;-webkit-transform:rotate(10deg);transform:rotate(10deg)}.ui-link .line{position:relative;width:20px;height:2px}.ui-link .line:after{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:#ff4e50;-webkit-transform-origin:0 50% 0;transform-origin:0 50% 0;-webkit-transform:scale(1);transform:scale(1);-webkit-transition:-webkit-transform .25s cubic-bezier(.165,.84,.44,1) 0s;transition:-webkit-transform .25s cubic-bezier(.165,.84,.44,1) 0s;transition:transform .25s cubic-bezier(.165,.84,.44,1) 0s;transition:transform .25s cubic-bezier(.165,.84,.44,1) 0s,-webkit-transform .25s cubic-bezier(.165,.84,.44,1) 0s}.ui-line-ttl{color:silver;font-size:1.3rem;font-weight:400;margin-bottom:1.5em;padding-top:10px;border-top:1px solid #ccc}.ui-line-ttl,.ui-scroll-down{font-family:HK Nova,sans-serif;letter-spacing:0}.ui-scroll-down{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;color:transparent;font-size:calc(2.3rem + (100vw - 600px)/1000);cursor:pointer}.ui-scroll-down .txt{position:relative;display:inline-block;overflow:hidden;line-height:1.16}.ui-scroll-down .txt:after,.ui-scroll-down .txt:before{content:attr(data-txt);display:inline-block;position:absolute;left:0;width:100%;height:100%;-webkit-transition:-webkit-transform .5s cubic-bezier(.165,.84,.44,1) 0s;transition:-webkit-transform .5s cubic-bezier(.165,.84,.44,1) 0s;transition:transform .5s cubic-bezier(.165,.84,.44,1) 0s;transition:transform .5s cubic-bezier(.165,.84,.44,1) 0s,-webkit-transform .5s cubic-bezier(.165,.84,.44,1) 0s}.ui-scroll-down .txt:before{top:0;color:#a0a0a0}.ui-scroll-down .txt:after{top:-100%;color:#111}.ui-scroll-down .point{position:absolute;top:50%;left:-20px;width:2px;height:2px;margin-top:-1px;pointer-events:none}.no-touch .ui-scroll-down:hover .txt:after,.no-touch .ui-scroll-down:hover .txt:before{-webkit-transform:translateY(100%);transform:translateY(100%)}.no-touch .m-subpage-link .l-relative:not(.no-link):hover .txt:after,.no-touch .m-subpage-link .l-relative:not(.no-link):hover .txt:before,.no-touch .ui-link:hover .txt:after,.no-touch .ui-link:hover .txt:before,.no-touch .ui-scroll-down:hover .txt:after,.no-touch .ui-scroll-down:hover .txt:before{-webkit-transition:-webkit-transform .5s cubic-bezier(.165,.84,.44,1) 0s;transition:-webkit-transform .5s cubic-bezier(.165,.84,.44,1) 0s;transition:transform .5s cubic-bezier(.165,.84,.44,1) 0s;transition:transform .5s cubic-bezier(.165,.84,.44,1) 0s,-webkit-transform .5s cubic-bezier(.165,.84,.44,1) 0s}.no-touch .m-subpage-link .l-relative:not(.no-link):hover .txt:before,.no-touch .ui-link:hover .txt:before{-webkit-transform:translateY(-100%) rotate(-10deg);transform:translateY(-100%) rotate(-10deg)}.no-touch .m-subpage-link .l-relative:not(.no-link):hover .txt:after,.no-touch .ui-link:hover .txt:after{-webkit-transform:translateY(-100%) rotate(0);transform:translateY(-100%) rotate(0)}.no-touch .m-subpage-link .l-relative:not(.no-link):hover .line:after,.no-touch .ui-link:hover .line:after{-webkit-transform-origin:100% 50% 0;transform-origin:100% 50% 0;-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transition:-webkit-transform .35s cubic-bezier(.165,.84,.44,1) 0s;transition:-webkit-transform .35s cubic-bezier(.165,.84,.44,1) 0s;transition:transform .35s cubic-bezier(.165,.84,.44,1) 0s;transition:transform .35s cubic-bezier(.165,.84,.44,1) 0s,-webkit-transform .35s cubic-bezier(.165,.84,.44,1) 0s}.no-touch .m-subpage-link .l-relative.no-link{cursor:default;max-width:1096px;margin:0 auto}.no-touch .m-subpage-link .l-relative.no-link .ui-link:hover .line:after,.no-touch .m-subpage-link .l-relative.no-link .ui-link:hover .txt:after,.no-touch .m-subpage-link .l-relative.no-link .ui-link:hover .txt:before{-webkit-transform:none;transform:none}@media only screen and (min-width:1920px){.ui-link .txt{font-size:2.722rem}}@media only screen and (max-width:1024px){.ui-play-btn{width:80px;height:80px}.ui-play-btn .txt{font-size:1.5rem}}@media only screen and (max-width:680px){.ui-link .txt{font-size:2rem}.ui-play-btn{width:80px;height:80px}.ui-play-btn .txt{font-size:1.4rem}}', ""]), t.exports = e
    }, function(t, e, o) {
        var content = o(237);
        "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, o(13).default)("3e69be1e", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, o) {
        (e = o(12)(!1)).push([t.i, '.tablet .dom-canvas-container{opacity:0!important}.tablet [data-fs-section]{visibility:visible;-webkit-transform:inherit;transform:inherit;-webkit-transform:none!important;transform:none!important}.tablet [data-fs-height]{display:none!important;height:0}.tablet .l-all{height:100%;overflow-y:scroll;-webkit-overflow-scrolling:touch;overflow-scrolling:touch}.tablet .l-wrapper{height:100%!important;z-index:1;will-change:scroll}.tablet .l-container,.tablet .l-wrapper{overflow-x:hidden!important;overflow-y:scroll!important}.tablet .l-container{position:relative!important}.tablet .g-menu .menu-body-left,.tablet .g-menu .menu-body-right{padding-top:0}.tablet .g-footer{position:relative!important;opacity:1!important;visibility:visible!important}.tablet .g-footer:after{content:"";position:absolute;right:0;top:0;width:13.125vw;height:16.66667vw;background:-webkit-gradient(linear,left bottom,left top,from(hsla(0,0%,100%,0)),to(#fff));background:linear-gradient(0deg,hsla(0,0%,100%,0),#fff);pointer-events:none}.tablet .g-footer .footer-body{padding-bottom:0;opacity:1!important}.tablet .fake-footer{display:none}.tablet .p-home .hero-height{height:calc(var(--vh)*100 - 120px)}.tablet .p-home .home-hero-inner{margin-top:12.5vw}.tablet .p-home .ui-scroll-down{bottom:14px}@media only screen and (orientation:landscape){.tablet .p-home .hero-height{height:calc(var(--vh)*100)!important}}.mobile .dom-canvas-container{opacity:0!important}.mobile [data-fs-section]{visibility:visible;-webkit-transform:inherit;transform:inherit}.mobile .l-all{height:100%;overflow-y:scroll;-webkit-overflow-scrolling:touch;overflow-scrolling:touch}.mobile .l-wrapper{height:100%!important;z-index:1;will-change:scroll}.mobile .l-container,.mobile .l-wrapper{overflow-x:hidden!important;overflow-y:scroll!important}.mobile .g-footer,.mobile .l-container{position:relative!important}.mobile .g-footer{opacity:1!important;visibility:visible!important}.mobile .g-footer:after{content:"";position:absolute;right:0;top:0;width:13.125vw;height:16.66667vw;background:-webkit-gradient(linear,left bottom,left top,from(hsla(0,0%,100%,0)),to(#fff));background:linear-gradient(0deg,hsla(0,0%,100%,0),#fff);pointer-events:none}.mobile .g-footer .footer-body{padding-bottom:0;opacity:1!important}.mobile .fake-footer{display:none}.ios .p-home .home-hero .home-hero-ttl,.ipados .p-home .home-hero .home-hero-ttl{line-height:1.4!important}.ie .legacy-play-btn,.mobile .legacy-play-btn,.tablet .legacy-play-btn{visibility:visible;pointer-events:none}.ie .m-solutions-method .solutions-method-video,.mobile .m-solutions-method .solutions-method-video,.tablet .m-solutions-method .solutions-method-video{opacity:0;visibility:hidden}.ie .m-news-articles .news-article-img-wrap,.ie .m-solutions-method .solutions-method-video-wrap,.ie .m-subpage-sections .section-img-wrap,.ie .m-subpage-sections .section-video-wrap,.ie .p-home .home-news .home-news-article-img-wrap,.ie .p-single .single-img-wrap,.ie .p-single .single-post-footer .next-img-wrap,.ie .p-solutions .solutions-mission .solutions-mission-video-wrap,.mobile .m-news-articles .news-article-img-wrap,.mobile .m-solutions-method .solutions-method-video-wrap,.mobile .m-subpage-sections .section-img-wrap,.mobile .m-subpage-sections .section-video-wrap,.mobile .p-home .home-news .home-news-article-img-wrap,.mobile .p-single .single-img-wrap,.mobile .p-single .single-post-footer .next-img-wrap,.mobile .p-solutions .solutions-mission .solutions-mission-video-wrap,.tablet .m-news-articles .news-article-img-wrap,.tablet .m-solutions-method .solutions-method-video-wrap,.tablet .m-subpage-sections .section-img-wrap,.tablet .m-subpage-sections .section-video-wrap,.tablet .p-home .home-news .home-news-article-img-wrap,.tablet .p-single .single-img-wrap,.tablet .p-single .single-post-footer .next-img-wrap,.tablet .p-solutions .solutions-mission .solutions-mission-video-wrap{background:#eee}.ie .m-news-articles .news-article-img.is-loaded,.ie .m-solutions-method .solutions-method-video.is-loaded,.ie .m-subpage-sections .section-img.is-loaded,.ie .m-subpage-sections .section-video.is-loaded,.ie .p-home .home-news .home-news-article-img.is-loaded,.ie .p-single .single-img.is-loaded,.ie .p-single .single-post-footer .next-img.is-loaded,.ie .p-solutions .solutions-mission .solutions-mission-video.is-loaded,.mobile .m-news-articles .news-article-img.is-loaded,.mobile .m-solutions-method .solutions-method-video.is-loaded,.mobile .m-subpage-sections .section-img.is-loaded,.mobile .m-subpage-sections .section-video.is-loaded,.mobile .p-home .home-news .home-news-article-img.is-loaded,.mobile .p-single .single-img.is-loaded,.mobile .p-single .single-post-footer .next-img.is-loaded,.mobile .p-solutions .solutions-mission .solutions-mission-video.is-loaded,.tablet .m-news-articles .news-article-img.is-loaded,.tablet .m-solutions-method .solutions-method-video.is-loaded,.tablet .m-subpage-sections .section-img.is-loaded,.tablet .m-subpage-sections .section-video.is-loaded,.tablet .p-home .home-news .home-news-article-img.is-loaded,.tablet .p-single .single-img.is-loaded,.tablet .p-single .single-post-footer .next-img.is-loaded,.tablet .p-solutions .solutions-mission .solutions-mission-video.is-loaded{pointer-events:none;opacity:1!important;visibility:visible!important;-webkit-transition:opacity 1s cubic-bezier(.39,.575,.565,1) .15s,visibility 1s cubic-bezier(.39,.575,.565,1) .15s!important;transition:opacity 1s cubic-bezier(.39,.575,.565,1) .15s,visibility 1s cubic-bezier(.39,.575,.565,1) .15s!important}@media only screen and (max-width:1024px){.m-solutions-method .solutions-method-video{opacity:0;visibility:hidden}.m-news-articles .news-article-img-wrap,.m-solutions-method .solutions-method-video-wrap,.m-subpage-sections .section-img-wrap,.m-subpage-sections .section-video-wrap,.p-home .home-news .home-news-article-img-wrap,.p-single .single-img-wrap,.p-single .single-post-footer .next-img-wrap,.p-solutions .solutions-mission .solutions-mission-video-wrap{background:#eee}.m-news-articles .news-article-img.is-loaded,.m-solutions-method .solutions-method-video.is-loaded,.m-subpage-sections .section-img.is-loaded,.m-subpage-sections .section-video.is-loaded,.p-home .home-news .home-news-article-img.is-loaded,.p-single .single-img.is-loaded,.p-single .single-post-footer .next-img.is-loaded,.p-solutions .solutions-mission .solutions-mission-video.is-loaded{pointer-events:none;opacity:1!important;visibility:visible!important;-webkit-transition:opacity 1s cubic-bezier(.39,.575,.565,1) .15s,visibility 1s cubic-bezier(.39,.575,.565,1) .15s!important;transition:opacity 1s cubic-bezier(.39,.575,.565,1) .15s,visibility 1s cubic-bezier(.39,.575,.565,1) .15s!important}}', ""]), t.exports = e
    }, function(t, e, o) {
        "use strict";
        var n = o(82);
        o.n(n).a
    }, function(t, e, o) {
        (e = o(12)(!1)).push([t.i, '.g-header[data-v-5b190144]{position:fixed;top:5.20833vw;left:0;width:100%;height:auto;z-index:997;pointer-events:none}.g-header .header-inner[data-v-5b190144]{padding:0 13.125vw}.g-header .l-relative[data-v-5b190144]{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;position:relative;width:100%}.g-header .header-logo[data-v-5b190144]{position:relative;pointer-events:auto;-webkit-transition:opacity .65s cubic-bezier(.165,.84,.44,1) 0s,visibility .65s cubic-bezier(.165,.84,.44,1) 0s,-webkit-transform .65s cubic-bezier(.165,.84,.44,1) 0s;transition:opacity .65s cubic-bezier(.165,.84,.44,1) 0s,visibility .65s cubic-bezier(.165,.84,.44,1) 0s,-webkit-transform .65s cubic-bezier(.165,.84,.44,1) 0s;transition:transform .65s cubic-bezier(.165,.84,.44,1) 0s,opacity .65s cubic-bezier(.165,.84,.44,1) 0s,visibility .65s cubic-bezier(.165,.84,.44,1) 0s;transition:transform .65s cubic-bezier(.165,.84,.44,1) 0s,opacity .65s cubic-bezier(.165,.84,.44,1) 0s,visibility .65s cubic-bezier(.165,.84,.44,1) 0s,-webkit-transform .65s cubic-bezier(.165,.84,.44,1) 0s}.g-header .header-logo .header-logo-link[data-v-5b190144]{position:relative;display:inline-block}.g-header .header-logo .svg-logo[data-v-5b190144]{width:108px;height:24px;cursor:pointer}.g-header .header-logo .svg-logo path[data-v-5b190144]{fill:#ff4e50}.g-header .header-lang[data-v-5b190144]{position:absolute;left:50vw;-webkit-transition:opacity .65s cubic-bezier(.165,.84,.44,1) 0s,visibility .65s cubic-bezier(.165,.84,.44,1) 0s,-webkit-transform .65s cubic-bezier(.165,.84,.44,1) 0s;transition:opacity .65s cubic-bezier(.165,.84,.44,1) 0s,visibility .65s cubic-bezier(.165,.84,.44,1) 0s,-webkit-transform .65s cubic-bezier(.165,.84,.44,1) 0s;transition:transform .65s cubic-bezier(.165,.84,.44,1) 0s,opacity .65s cubic-bezier(.165,.84,.44,1) 0s,visibility .65s cubic-bezier(.165,.84,.44,1) 0s;transition:transform .65s cubic-bezier(.165,.84,.44,1) 0s,opacity .65s cubic-bezier(.165,.84,.44,1) 0s,visibility .65s cubic-bezier(.165,.84,.44,1) 0s,-webkit-transform .65s cubic-bezier(.165,.84,.44,1) 0s}.g-header .header-lang .header-lang-lists[data-v-5b190144]{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center}.g-header .header-lang .header-lang-list[data-v-5b190144]{position:relative;pointer-events:auto;height:1.4rem}.g-header .header-lang .header-lang-list[data-v-5b190144]:not(:last-child){margin-right:1.25em}.g-header .header-lang .header-lang-list.is-active[data-v-5b190144]{pointer-events:none}.g-header .header-lang .header-lang-list.is-active a.lang-link[data-v-5b190144]{color:#2f2f2f}.g-header .header-lang .header-lang-list .point[data-v-5b190144]{position:absolute;bottom:-15px;left:50%;width:2px;height:2px;margin-left:-1px;pointer-events:none}.g-header .header-lang .header-lang-list a.lang-link[data-v-5b190144]{display:inline-block;color:#a0a0a0;font-size:1.4rem;font-family:HK Nova,sans-serif;font-weight:600;letter-spacing:0;-webkit-transition:color .35s cubic-bezier(.39,.575,.565,1) 0s;transition:color .35s cubic-bezier(.39,.575,.565,1) 0s}.g-header .menu-btn[data-v-5b190144]{position:relative;margin-right:-7px;width:50px;height:50px;padding:0;cursor:pointer;background:transparent;border:none;pointer-events:auto}.g-header .menu-btn .menu-btn-inner[data-v-5b190144]{position:relative;width:100%;height:100%}.g-header .menu-btn .menu-btn-inner[data-ma-force][data-v-5b190144]:after{content:"";position:absolute;top:50%;left:50%;margin:-81px 0 0 -81px;width:162px;height:162px;cursor:pointer;border-radius:50%;z-index:-1}.g-header .menu-btn .menu-btn-lines[data-v-5b190144]{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;position:relative;width:100%;height:100%}.g-header .menu-btn .menu-btn-txt[data-v-5b190144]{display:block;position:absolute;left:-60px;font-size:1.4rem;font-family:HK Nova,sans-serif;font-weight:600;letter-spacing:0;text-align:right;overflow:hidden;pointer-events:none;cursor:default}.g-header .menu-btn .menu-btn-txt .close[data-v-5b190144]{display:block;white-space:nowrap;background:#fff;padding:3px 6px;color:#fff;border-radius:20px;-webkit-transform:translate(101%);transform:translate(101%);-webkit-transition:color .2s cubic-bezier(.39,.575,.565,1) 0s,-webkit-transform .2s cubic-bezier(.77,0,.175,1) 0s;transition:color .2s cubic-bezier(.39,.575,.565,1) 0s,-webkit-transform .2s cubic-bezier(.77,0,.175,1) 0s;transition:transform .2s cubic-bezier(.77,0,.175,1) 0s,color .2s cubic-bezier(.39,.575,.565,1) 0s;transition:transform .2s cubic-bezier(.77,0,.175,1) 0s,color .2s cubic-bezier(.39,.575,.565,1) 0s,-webkit-transform .2s cubic-bezier(.77,0,.175,1) 0s}.g-header .menu-btn .menu-btn-txt .close.is-active[data-v-5b190144]{color:#a0a0a0;-webkit-transform:translate(0);transform:translate(0);-webkit-transition:color .35s cubic-bezier(.39,.575,.565,1) .65s,-webkit-transform .65s cubic-bezier(.165,.84,.44,1) .65s;transition:color .35s cubic-bezier(.39,.575,.565,1) .65s,-webkit-transform .65s cubic-bezier(.165,.84,.44,1) .65s;transition:transform .65s cubic-bezier(.165,.84,.44,1) .65s,color .35s cubic-bezier(.39,.575,.565,1) .65s;transition:transform .65s cubic-bezier(.165,.84,.44,1) .65s,color .35s cubic-bezier(.39,.575,.565,1) .65s,-webkit-transform .65s cubic-bezier(.165,.84,.44,1) .65s}.g-header .menu-btn .menu-btn-svg[data-v-5b190144]{position:relative;width:100%;height:100%;pointer-events:none}.g-header .menu-btn .menu-btn-svg path[data-v-5b190144]{fill:#2f2f2f}.g-header.is-scrolled .header-lang[data-v-5b190144],[data-fs-direction=down] .g-header.is-scrolled .header-lang[data-v-5b190144],[data-fs-direction=down] .g-header.is-scrolled .header-logo[data-v-5b190144]{opacity:0;visibility:hidden;-webkit-transform:translateY(-25px);transform:translateY(-25px);-webkit-transition:opacity .5s cubic-bezier(.165,.84,.44,1) 0s,visibility .5s cubic-bezier(.165,.84,.44,1) 0s,-webkit-transform .5s cubic-bezier(.165,.84,.44,1) 0s;transition:opacity .5s cubic-bezier(.165,.84,.44,1) 0s,visibility .5s cubic-bezier(.165,.84,.44,1) 0s,-webkit-transform .5s cubic-bezier(.165,.84,.44,1) 0s;transition:transform .5s cubic-bezier(.165,.84,.44,1) 0s,opacity .5s cubic-bezier(.165,.84,.44,1) 0s,visibility .5s cubic-bezier(.165,.84,.44,1) 0s;transition:transform .5s cubic-bezier(.165,.84,.44,1) 0s,opacity .5s cubic-bezier(.165,.84,.44,1) 0s,visibility .5s cubic-bezier(.165,.84,.44,1) 0s,-webkit-transform .5s cubic-bezier(.165,.84,.44,1) 0s}.l-nav.is-opened .g-header .header-lang[data-v-5b190144],.l-nav.is-opened .g-header .header-logo[data-v-5b190144]{opacity:1!important;visibility:visible!important;-webkit-transform:translateY(0)!important;transform:translateY(0)!important;-webkit-transition:opacity .5s cubic-bezier(.165,.84,.44,1) .5s,visibility .5s cubic-bezier(.165,.84,.44,1) .5s,-webkit-transform .5s cubic-bezier(.165,.84,.44,1) .5s;transition:opacity .5s cubic-bezier(.165,.84,.44,1) .5s,visibility .5s cubic-bezier(.165,.84,.44,1) .5s,-webkit-transform .5s cubic-bezier(.165,.84,.44,1) .5s;transition:transform .5s cubic-bezier(.165,.84,.44,1) .5s,opacity .5s cubic-bezier(.165,.84,.44,1) .5s,visibility .5s cubic-bezier(.165,.84,.44,1) .5s;transition:transform .5s cubic-bezier(.165,.84,.44,1) .5s,opacity .5s cubic-bezier(.165,.84,.44,1) .5s,visibility .5s cubic-bezier(.165,.84,.44,1) .5s,-webkit-transform .5s cubic-bezier(.165,.84,.44,1) .5s}.no-touch .g-header .header-lang-list a.lang-link[data-v-5b190144]:hover{color:#272727}.touch .g-header .menu-btn .menu-btn-lines[data-v-5b190144]{-webkit-transform:none!important;transform:none!important}@media only screen and (min-width:1440px){.g-header .header-logo .header-logo-link[data-v-5b190144]{-webkit-transform-origin:0 50% 0;transform-origin:0 50% 0;-webkit-transform:scale(1.5);transform:scale(1.5)}}@media only screen and (max-width:680px){.g-header[data-v-5b190144]{top:35px}.g-header .header-inner[data-v-5b190144]{padding:0 40px}.g-header .header-lang[data-v-5b190144]{left:auto;right:72px}.g-header .menu-btn .menu-btn-txt[data-v-5b190144]{left:auto;bottom:-1em;font-size:1.2rem}.g-header .menu-btn .menu-btn-txt .close[data-v-5b190144]{background:transparent;-webkit-transform:translateY(100%);transform:translateY(100%)}}', ""]), t.exports = e
    }, function(t, e, o) {
        "use strict";
        var n = o(83);
        o.n(n).a
    }, function(t, e, o) {
        (e = o(12)(!1)).push([t.i, '.g-menu[data-v-61c28d46]{position:fixed;top:0;left:0;width:100%;height:100%;z-index:996;opacity:0;visibility:hidden;pointer-events:none}.g-menu.is-visible[data-v-61c28d46]{opacity:1;visibility:visible;pointer-events:auto}.g-menu .menu-body[data-v-61c28d46]{position:absolute;top:0;left:0;width:100%;height:calc(101% - 8.33333vw);min-height:600px;z-index:1}.g-menu .menu-body .menu-body-clip-inner[data-v-61c28d46],.g-menu .menu-body .menu-body-clip-outer[data-v-61c28d46]{position:absolute;top:0;left:0;width:100%;height:100%;overflow:hidden}.g-menu .menu-body .menu-body-clip-outer[data-v-61c28d46]{-webkit-transform:translateY(-101%);transform:translateY(-101%)}.g-menu .menu-body .menu-body-clip-inner[data-v-61c28d46]{background:#fff;-webkit-transform:translateY(101%);transform:translateY(101%)}.g-menu .menu-body .menu-body-inner[data-v-61c28d46]{-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;height:100%;padding:calc(50px + 6.25vw) 17.29167vw 6.25vw}.g-menu .menu-body .menu-body-inner[data-v-61c28d46],.g-menu .menu-body .menu-body-relative[data-v-61c28d46]{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;align-content:center;position:relative;width:100%}.g-menu .menu-body .menu-body-relative[data-v-61c28d46]{-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-ms-flex-line-pack:center}.g-menu .menu-body-left[data-v-61c28d46]{position:relative;width:45.83333vw;padding-top:4.16667vw}.g-menu .menu-body-left .menu-nav[data-v-61c28d46]{position:relative;height:auto}.g-menu .menu-body-left .menu-nav-lists[data-v-61c28d46]{position:relative;width:100%;pointer-events:none}.g-menu .menu-body-left .menu-nav-list[data-v-61c28d46]{position:relative;width:100%}.g-menu .menu-body-left .menu-nav-list.has-child[data-v-61c28d46]{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center}.g-menu .menu-body-left .menu-nav-list[data-v-61c28d46]:not(:last-child){margin-bottom:1.75em}.g-menu .menu-body-left .menu-nav-list[data-v-61c28d46]:before{content:"";position:absolute;top:50%;left:0;width:1.45833vw;height:2px;background:#ff4e50;margin-top:-1px;margin-left:-4.16667vw;-webkit-transform-origin:0 50% 0;transform-origin:0 50% 0;-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transition:-webkit-transform .35s cubic-bezier(.165,.84,.44,1) 0s;transition:-webkit-transform .35s cubic-bezier(.165,.84,.44,1) 0s;transition:transform .35s cubic-bezier(.165,.84,.44,1) 0s;transition:transform .35s cubic-bezier(.165,.84,.44,1) 0s,-webkit-transform .35s cubic-bezier(.165,.84,.44,1) 0s}.g-menu .menu-body-left .menu-nav-link[data-v-61c28d46]{color:#111;font-size:calc(4.2rem + (800vw - 4800px)/1000);font-weight:400;font-family:HK Nova,sans-serif;letter-spacing:0;cursor:pointer;pointer-events:auto;-webkit-transition:color .35s cubic-bezier(.39,.575,.565,1) .1s;transition:color .35s cubic-bezier(.39,.575,.565,1) .1s}.g-menu .menu-body-left .menu-nav-lists-child[data-v-61c28d46]{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-ms-flex-line-pack:center;align-content:center;margin-left:2.08333vw;padding-top:.5em}.g-menu .menu-body-left .menu-nav-list-child[data-v-61c28d46]{font-size:calc(1.8rem + (200vw - 1200px)/1000);font-family:HK Nova,sans-serif;letter-spacing:0;cursor:pointer}.g-menu .menu-body-left .menu-nav-list-child[data-v-61c28d46]:not(:last-child):after{content:"/";display:inline-block;color:silver;margin:0 .2em}.g-menu .menu-body-left .menu-nav-link-child[data-v-61c28d46]{display:inline-block;pointer-events:auto;-webkit-transition:color .35s cubic-bezier(.39,.575,.565,1) .1s;transition:color .35s cubic-bezier(.39,.575,.565,1) .1s}.g-menu .menu-body-right[data-v-61c28d46]{position:relative;width:19.58333vw;padding-top:4.16667vw}.g-menu .menu-body-right .menu-contact-lists[data-v-61c28d46]{position:relative}.g-menu .menu-body-right .menu-contact-list[data-v-61c28d46]:not(:last-child){margin-bottom:30px}.g-menu .menu-body-right .menu-contact-list.enquiries[data-v-61c28d46],.g-menu .menu-body-right .menu-contact-list.phone[data-v-61c28d46]{font-family:HK Grotesk Pro,sans-serif}.g-menu .menu-body-right .menu-contact-list.address .row[data-v-61c28d46]:last-child{padding-right:4.16667vw;line-height:1.5}.g-menu .menu-body-right .menu-contact-list.enquiries .email-copy-wrap[data-v-61c28d46]{position:relative;display:block;width:100%;height:1.5em;color:#111;font-size:1.5rem;letter-spacing:.065em;white-space:nowrap;vertical-align:middle;line-height:1;overflow:hidden}.g-menu .menu-body-right .menu-contact-list .ttl[data-v-61c28d46]{color:#a0a0a0;font-size:1.4rem;font-family:HK Nova,sans-serif;font-weight:500;letter-spacing:0;margin-bottom:.75em}.g-menu .menu-body-right .menu-contact-list .txt[data-v-61c28d46]{font-size:1.5rem;letter-spacing:.065em;line-height:1.35}.g-menu .menu-body-right .menu-contact-list .txt .row[data-v-61c28d46]{display:block}.g-menu .menu-body-right .menu-contact-list .txt .row[data-v-61c28d46]:not(:last-child){margin-bottom:5px}.g-menu .menu-body-right .menu-contact-list .link[data-v-61c28d46]{display:inline-block}.g-menu .menu-mask[data-v-61c28d46]{background:rgba(0,0,0,.15);z-index:0;opacity:0;visibility:hidden;cursor:pointer}.g-menu .menu-mask[data-v-61c28d46],.g-menu .menu-rects[data-v-61c28d46]{position:absolute;top:0;left:0;width:100%;height:100%}.g-menu .menu-rects[data-v-61c28d46]{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap;pointer-events:none;z-index:-1}.g-menu .menu-rects .menu-rect[data-v-61c28d46]{width:25%;height:100%;background:#ff4e50;-webkit-transform-origin:50% 0 0;transform-origin:50% 0 0;-webkit-transform:scaleY(0);transform:scaleY(0)}.ie .g-menu .menu-body-left .menu-nav-lists[data-v-61c28d46]{pointer-events:auto}.careers-details .g-menu.is-visible .menu-nav-list[data-v-61c28d46]:nth-child(4):before,.careers .g-menu.is-visible .menu-nav-list[data-v-61c28d46]:nth-child(4):before,.contact .g-menu.is-visible .menu-nav-list[data-v-61c28d46]:nth-child(5):before,.creative .g-menu.is-visible .menu-nav-list[data-v-61c28d46]:nth-child(2):before,.home .g-menu.is-visible .menu-nav-list[data-v-61c28d46]:first-child:before,.news .g-menu.is-visible .menu-nav-list[data-v-61c28d46]:nth-child(3):before,.services .g-menu.is-visible .menu-nav-list[data-v-61c28d46]:nth-child(2):before,.single .g-menu.is-visible .menu-nav-list[data-v-61c28d46]:nth-child(3):before,.solutions .g-menu.is-visible .menu-nav-list[data-v-61c28d46]:nth-child(2):before{-webkit-transform:scale(1);transform:scale(1)}[lang=en] .g-menu .menu-body-right .menu-contact-list .txt span[data-v-61c28d46]{font-family:HK Grotesk Pro,sans-serif;letter-spacing:.005em}.no-touch .g-menu .menu-body-left .menu-nav-lists:hover .menu-nav-list:not(:hover) .menu-nav-link[data-v-61c28d46],.no-touch .g-menu .menu-body-left .menu-nav-lists:hover .menu-nav-list:not(:hover) .menu-nav-link-child[data-v-61c28d46]{color:#a0a0a0;-webkit-transition:color .35s cubic-bezier(.39,.575,.565,1) 0s;transition:color .35s cubic-bezier(.39,.575,.565,1) 0s}.no-touch .g-menu .menu-body-left .menu-nav-list:nth-child(2) .menu-nav-link:hover+.menu-nav-lists-child .menu-nav-link-child[data-v-61c28d46],.no-touch .g-menu .menu-body-left .menu-nav-lists-child:hover .menu-nav-list-child:not(:hover) .menu-nav-link-child[data-v-61c28d46]{color:#a0a0a0}@media only screen and (min-width:1920px){.g-menu .menu-body-left .menu-nav-link-child[data-v-61c28d46]{font-size:2.064rem}}@media only screen and (max-width:1024px){.g-menu .menu-body[data-v-61c28d46]{height:calc(var(--vh)*100 - 120px);min-height:auto}.g-menu .menu-body-left .menu-nav-link[data-v-61c28d46]{font-size:4.2rem}.g-menu .menu-body-left .menu-nav-list[data-v-61c28d46]:before{top:calc(2.1rem - 1px);width:10px;margin-left:-25px}.g-menu .menu-body-left .menu-nav-list.has-child[data-v-61c28d46]{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.g-menu .menu-body-left .menu-nav-list.has-child .menu-nav-link[data-v-61c28d46]{width:100%}.g-menu .menu-body-left .menu-nav-list[data-v-61c28d46]:not(:last-child){margin-bottom:22px}.g-menu .menu-body-left .menu-nav-lists-child[data-v-61c28d46]{width:100%;margin-top:15px;margin-left:0;padding-top:0}.g-menu .menu-body-left .menu-nav-list-child[data-v-61c28d46],.g-menu .menu-body-left .menu-nav-list-child[data-v-61c28d46]:not(:last-child):after{font-size:2rem}}@media only screen and (max-width:1024px) and (orientation:portrait){.g-menu .menu-body[data-v-61c28d46]{height:calc(var(--vh)*100 - 230px)}}@media only screen and (max-width:680px){.g-menu .menu-body[data-v-61c28d46]{height:calc(var(--vh)*100 - 120px)}.g-menu .menu-body .menu-body-inner[data-v-61c28d46]{padding:120px 40px 50px}.g-menu .menu-body-left[data-v-61c28d46]{width:100%}.g-menu .menu-body-left .menu-nav-link[data-v-61c28d46]{font-size:4.8vh}.g-menu .menu-body-left .menu-nav-list[data-v-61c28d46]:before{top:calc(2.4vh - 1px);width:10px;margin-left:-25px}.g-menu .menu-body-left .menu-nav-list.has-child[data-v-61c28d46]{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.g-menu .menu-body-left .menu-nav-list.has-child .menu-nav-link[data-v-61c28d46]{width:100%}.g-menu .menu-body-left .menu-nav-list[data-v-61c28d46]:not(:last-child){margin-bottom:22px}.g-menu .menu-body-left .menu-nav-lists-child[data-v-61c28d46]{width:100%;margin-top:15px;margin-left:0;padding-top:0}.g-menu .menu-body-left .menu-nav-list-child[data-v-61c28d46],.g-menu .menu-body-left .menu-nav-list-child[data-v-61c28d46]:not(:last-child):after{font-size:2.4vh}.g-menu .menu-body-right[data-v-61c28d46]{display:none}.g-menu .menu-rects .menu-rect[data-v-61c28d46]:first-child,.g-menu .menu-rects .menu-rect[data-v-61c28d46]:nth-child(2){width:50%}.g-menu .menu-rects .menu-rect[data-v-61c28d46]:nth-child(3),.g-menu .menu-rects .menu-rect[data-v-61c28d46]:nth-child(4){display:none}}@media only screen and (max-width:680px) and (orientation:landscape){.g-menu .menu-body[data-v-61c28d46]{height:100%}.g-menu .menu-body .menu-body-inner[data-v-61c28d46]{padding-top:100px}.g-menu .menu-body-left[data-v-61c28d46]{width:100%}.g-menu .menu-body-right[data-v-61c28d46]{display:none}}', ""]), t.exports = e
    }, function(t, e, o) {
        "use strict";
        var n = o(85);
        o.n(n).a
    }, function(t, e, o) {
        (e = o(12)(!1)).push([t.i, '.g-footer[data-v-2c7c83e0]{position:fixed;bottom:0;left:0;width:100%;padding-right:13.125vw;z-index:-1;pointer-events:auto}.g-footer.is-hide[data-v-2c7c83e0]{opacity:0;visibility:hidden}.g-footer.is-hide .footer-inner[data-v-2c7c83e0]{will-change:auto}.g-footer .footer-inner[data-v-2c7c83e0]{position:relative;width:100%;height:auto;max-height:100vh;max-height:calc(var(--vh)*100);background:#010101;padding:calc(50px + 6.25vw) 13.125vw 12.5vw 17.29167vw;will-change:transform}.g-footer .footer-body[data-v-2c7c83e0]{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-ms-flex-line-pack:start;align-content:flex-start;position:relative;padding-bottom:60px}.g-footer .footer-left[data-v-2c7c83e0]{position:relative;width:25vw}.g-footer .footer-left .footer-nav[data-v-2c7c83e0]{position:relative}.g-footer .footer-left .footer-nav-lists[data-v-2c7c83e0]{position:relative;pointer-events:none}.g-footer .footer-left .footer-nav-list[data-v-2c7c83e0]{position:relative}.g-footer .footer-left .footer-nav-list[data-v-2c7c83e0]:before{content:"";position:absolute;top:1em;left:0;width:1.45833vw;height:1px;background:#fff;margin-top:-.5em;margin-left:-4.16667vw;-webkit-transform-origin:100% 50% 0;transform-origin:100% 50% 0;-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transition:-webkit-transform .35s cubic-bezier(.165,.84,.44,1) 0s;transition:-webkit-transform .35s cubic-bezier(.165,.84,.44,1) 0s;transition:transform .35s cubic-bezier(.165,.84,.44,1) 0s;transition:transform .35s cubic-bezier(.165,.84,.44,1) 0s,-webkit-transform .35s cubic-bezier(.165,.84,.44,1) 0s}.g-footer .footer-left .footer-nav-list.has-child[data-v-2c7c83e0]{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center}.g-footer .footer-left .footer-nav-list[data-v-2c7c83e0]:not(:last-child){margin-bottom:1.25em}.g-footer .footer-left .footer-nav-link[data-v-2c7c83e0]{position:relative;color:#fff;font-size:calc(1.8rem + (200vw - 1200px)/1000);font-weight:500;font-family:HK Nova,sans-serif;letter-spacing:0}.g-footer .footer-left .footer-nav-link .txt[data-v-2c7c83e0]{position:relative;display:inline-block;cursor:pointer;pointer-events:auto;-webkit-transition:color .35s cubic-bezier(.39,.575,.565,1) .1s;transition:color .35s cubic-bezier(.39,.575,.565,1) .1s}.g-footer .footer-left .footer-nav-lists-child[data-v-2c7c83e0]{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-ms-flex-line-pack:center;align-content:center;margin-left:2em}.g-footer .footer-left .footer-nav-list-child[data-v-2c7c83e0]:not(:last-child):after{content:"/";display:inline-block;color:#333;margin:0 .5em}.g-footer .footer-left .footer-nav-link-child[data-v-2c7c83e0]{position:relative;display:inline-block;color:silver;font-size:calc(1.4rem + (200vw - 1200px)/1000);font-family:HK Nova,sans-serif;letter-spacing:0}.g-footer .footer-left .footer-nav-link-child .txt[data-v-2c7c83e0]{position:relative;display:inline-block;cursor:pointer;pointer-events:auto;-webkit-transition:color .35s cubic-bezier(.39,.575,.565,1) .1s;transition:color .35s cubic-bezier(.39,.575,.565,1) .1s}.g-footer .footer-right[data-v-2c7c83e0]{position:relative;width:28.54167vw}.g-footer .footer-right .footer-contact[data-v-2c7c83e0]{position:relative;width:100%}.g-footer .footer-right .footer-contact-list[data-v-2c7c83e0],.g-footer .footer-right .footer-contact-lists[data-v-2c7c83e0]{position:relative}.g-footer .footer-right .footer-contact-list[data-v-2c7c83e0]:not(:last-child){margin-bottom:3em}.g-footer .footer-right .footer-contact .ttl[data-v-2c7c83e0]{color:#fff;font-size:calc(1.5rem + (100vw - 600px)/1000);font-family:HK Nova,sans-serif;font-weight:400;letter-spacing:0;font-weight:500;margin-bottom:1em}.g-footer .footer-right .footer-contact .address[data-v-2c7c83e0]{position:relative;margin-bottom:15px;color:#fff;font-size:calc(1.6rem + (200vw - 1200px)/1000);line-height:1.65}.g-footer .footer-right .footer-contact .address a.link[data-v-2c7c83e0]{color:#fff}.g-footer .footer-right .footer-contact .address .row[data-v-2c7c83e0]{display:block;line-height:1.35}.g-footer .footer-right .footer-contact .address .row[data-v-2c7c83e0]:first-child{margin-bottom:5px}.g-footer .footer-right .footer-contact .tel[data-v-2c7c83e0]{color:#fff;font-size:calc(1.6rem + (200vw - 1200px)/1000);letter-spacing:.005em}.g-footer .footer-right .footer-contact .email-copy-wrap[data-v-2c7c83e0]{position:relative;display:block;width:100%;height:1.5em;font-size:calc(4rem + (300vw - 1800px)/1000);font-family:HK Nova,sans-serif;letter-spacing:0;white-space:nowrap;vertical-align:middle;line-height:1;overflow:hidden;cursor:pointer}.g-footer .footer-right .footer-contact .email-copy-wrap[data-v-2c7c83e0]:after{content:"";position:absolute;bottom:0;left:0;width:8em;height:2px;background:#fff;-webkit-transform-origin:0 50% 0;transform-origin:0 50% 0;-webkit-transform:scale(1);transform:scale(1);-webkit-transition:-webkit-transform .65s cubic-bezier(.165,.84,.44,1) 0s;transition:-webkit-transform .65s cubic-bezier(.165,.84,.44,1) 0s;transition:transform .65s cubic-bezier(.165,.84,.44,1) 0s;transition:transform .65s cubic-bezier(.165,.84,.44,1) 0s,-webkit-transform .65s cubic-bezier(.165,.84,.44,1) 0s}.g-footer .footer-right .footer-contact a.email[data-v-2c7c83e0]{color:#fff}.g-footer .footer-right .footer-profile[data-v-2c7c83e0]{position:relative;color:#fff}.g-footer .footer-right .footer-profile>.txt[data-v-2c7c83e0]{display:block;margin-bottom:3em;padding-right:4.79167vw;color:#fff;font-size:calc(1.7rem + (100vw - 600px)/1000);line-height:2;letter-spacing:.075em}.g-footer .footer-right .footer-profile .ttl[data-v-2c7c83e0]{color:#fff;font-size:calc(1.5rem + (100vw - 600px)/1000);font-family:HK Nova,sans-serif;font-weight:400;letter-spacing:0;font-weight:500;margin-bottom:1.5em}.g-footer .footer-right .footer-profile a.link[data-v-2c7c83e0]{display:inline-block;position:relative;font-size:calc(4rem + (300vw - 1800px)/1000);font-family:HK Nova,sans-serif;letter-spacing:0;padding:5px 0;overflow:hidden;white-space:nowrap;cursor:pointer}.g-footer .footer-right .footer-profile a.link[data-v-2c7c83e0]:after{content:"";position:absolute;bottom:0;left:0;width:100%;height:2px;background:#fff;-webkit-transform-origin:0 50% 0;transform-origin:0 50% 0;-webkit-transform:scale(1);transform:scale(1);-webkit-transition:-webkit-transform .65s cubic-bezier(.165,.84,.44,1) 0s;transition:-webkit-transform .65s cubic-bezier(.165,.84,.44,1) 0s;transition:transform .65s cubic-bezier(.165,.84,.44,1) 0s;transition:transform .65s cubic-bezier(.165,.84,.44,1) 0s,-webkit-transform .65s cubic-bezier(.165,.84,.44,1) 0s}.g-footer .footer-right .footer-profile a.link .txt[data-v-2c7c83e0]{display:inline-block;width:100%;height:100%;color:transparent}.g-footer .footer-right .footer-profile a.link .txt[data-v-2c7c83e0]:after,.g-footer .footer-right .footer-profile a.link .txt[data-v-2c7c83e0]:before{content:attr(data-txt);display:inline-block;position:absolute;left:0;color:#fff;padding:5px 0;-webkit-transition:-webkit-transform .5s cubic-bezier(.165,.84,.44,1) 0s;transition:-webkit-transform .5s cubic-bezier(.165,.84,.44,1) 0s;transition:transform .5s cubic-bezier(.165,.84,.44,1) 0s;transition:transform .5s cubic-bezier(.165,.84,.44,1) 0s,-webkit-transform .5s cubic-bezier(.165,.84,.44,1) 0s}.g-footer .footer-right .footer-profile a.link .txt[data-v-2c7c83e0]:before{top:0}.g-footer .footer-right .footer-profile a.link .txt[data-v-2c7c83e0]:after{top:100%}.g-footer .footer-bottom[data-v-2c7c83e0]{position:absolute;bottom:0;left:0;height:12.5vw}.g-footer .footer-bottom[data-v-2c7c83e0],.g-footer .footer-bottom .footer-bottom-inner[data-v-2c7c83e0]{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;width:100%}.g-footer .footer-bottom .footer-bottom-inner[data-v-2c7c83e0]{color:#fff;padding:0 17.29167vw}.g-footer .footer-bottom .legals[data-v-2c7c83e0]{position:relative;width:25vw}.g-footer .footer-bottom .legals .txt[data-v-2c7c83e0]{color:#606060;cursor:pointer;-webkit-transition:color .35s cubic-bezier(.39,.575,.565,1) 0s;transition:color .35s cubic-bezier(.39,.575,.565,1) 0s}.g-footer .footer-bottom .copyright[data-v-2c7c83e0],.g-footer .footer-bottom .legals .txt[data-v-2c7c83e0]{font-size:calc(1.3rem + (200vw - 1200px)/1000);font-family:HK Nova,sans-serif;letter-spacing:0}.g-footer .footer-bottom .copyright[data-v-2c7c83e0]{color:#fff}.g-footer .footer-scroll-top[data-v-2c7c83e0]{position:absolute;bottom:0;right:0;width:13.125vw;height:13.125vw}.g-footer .footer-scroll-top[data-v-2c7c83e0],.g-footer .footer-scroll-top .footer-scroll-top-area[data-v-2c7c83e0]{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center}.g-footer .footer-scroll-top .footer-scroll-top-area[data-v-2c7c83e0]{width:80%;height:80%;cursor:pointer;border-radius:50%}.g-footer .footer-scroll-top .txt[data-v-2c7c83e0]{position:relative;display:inline-block;color:transparent;font-size:calc(1.9rem + (100vw - 600px)/1000);font-family:HK Nova,sans-serif;letter-spacing:0;line-height:1.16;overflow:hidden;white-space:nowrap}.g-footer .footer-scroll-top .txt[data-v-2c7c83e0]:after,.g-footer .footer-scroll-top .txt[data-v-2c7c83e0]:before{content:attr(data-txt);display:inline-block;position:absolute;left:0;width:100%;height:100%;-webkit-transition:-webkit-transform .5s cubic-bezier(.165,.84,.44,1) .15s;transition:-webkit-transform .5s cubic-bezier(.165,.84,.44,1) .15s;transition:transform .5s cubic-bezier(.165,.84,.44,1) .15s;transition:transform .5s cubic-bezier(.165,.84,.44,1) .15s,-webkit-transform .5s cubic-bezier(.165,.84,.44,1) .15s}.g-footer .footer-scroll-top .txt[data-v-2c7c83e0]:before{top:0;color:#a0a0a0}.g-footer .footer-scroll-top .txt[data-v-2c7c83e0]:after{top:100%;color:#111}.careers-details .footer-nav-list[data-v-2c7c83e0]:nth-child(4):before,.careers .footer-nav-list[data-v-2c7c83e0]:nth-child(4):before,.contact .footer-nav-list[data-v-2c7c83e0]:nth-child(5):before,.creative .footer-nav-list[data-v-2c7c83e0]:nth-child(2):before,.home .footer-nav-list[data-v-2c7c83e0]:first-child:before,.news .footer-nav-list[data-v-2c7c83e0]:nth-child(3):before,.services .footer-nav-list[data-v-2c7c83e0]:nth-child(2):before,.single .footer-nav-list[data-v-2c7c83e0]:nth-child(3):before,.solutions .footer-nav-list[data-v-2c7c83e0]:nth-child(2):before{-webkit-transform:scale(1);transform:scale(1)}[lang=en] .g-footer .footer-right .footer-contact .address[data-v-2c7c83e0],[lang=en] .g-footer .footer-right .footer-contact .tel[data-v-2c7c83e0],[lang=en] .g-footer .footer-right .footer-profile>.txt[data-v-2c7c83e0]{font-family:HK Grotesk Pro,sans-serif;letter-spacing:.005em}[lang=en] .g-footer .footer-right .footer-profile>.txt[data-v-2c7c83e0]{line-height:1.7}.no-touch .g-footer .footer-left .footer-nav-lists:hover .footer-nav-list:not(:hover) .footer-nav-link-child .txt[data-v-2c7c83e0],.no-touch .g-footer .footer-left .footer-nav-lists:hover .footer-nav-list:not(:hover) .footer-nav-link .txt[data-v-2c7c83e0]{color:#444;-webkit-transition:color .35s cubic-bezier(.39,.575,.565,1) 0s;transition:color .35s cubic-bezier(.39,.575,.565,1) 0s}.no-touch .g-footer .footer-left .footer-nav-lists .footer-nav-list .footer-nav-link-child .txt[data-v-2c7c83e0]:hover{color:#fff}.no-touch .g-footer .footer-right .footer-contact .email-copy-wrap[data-v-2c7c83e0]:hover:after,.no-touch .g-footer .footer-right .footer-profile a.link[data-v-2c7c83e0]:hover:after{-webkit-transform-origin:100% 50% 0;transform-origin:100% 50% 0;-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transition:-webkit-transform .35s cubic-bezier(.165,.84,.44,1) 0s;transition:-webkit-transform .35s cubic-bezier(.165,.84,.44,1) 0s;transition:transform .35s cubic-bezier(.165,.84,.44,1) 0s;transition:transform .35s cubic-bezier(.165,.84,.44,1) 0s,-webkit-transform .35s cubic-bezier(.165,.84,.44,1) 0s}.no-touch .g-footer .footer-right .footer-profile a.link:hover .txt[data-v-2c7c83e0]:after,.no-touch .g-footer .footer-right .footer-profile a.link:hover .txt[data-v-2c7c83e0]:before{-webkit-transform:translateY(-100%);transform:translateY(-100%);-webkit-transition:-webkit-transform .5s cubic-bezier(.165,.84,.44,1) 0s;transition:-webkit-transform .5s cubic-bezier(.165,.84,.44,1) 0s;transition:transform .5s cubic-bezier(.165,.84,.44,1) 0s;transition:transform .5s cubic-bezier(.165,.84,.44,1) 0s,-webkit-transform .5s cubic-bezier(.165,.84,.44,1) 0s}.no-touch .g-footer .footer-bottom .legals .txt[data-v-2c7c83e0]:hover{color:#fff}.no-touch .g-footer .footer-scroll-top .footer-scroll-top-area[data-ma-force] .txt[data-v-2c7c83e0]:after,.no-touch .g-footer .footer-scroll-top .footer-scroll-top-area[data-ma-force] .txt[data-v-2c7c83e0]:before{-webkit-transform:translateY(-100%);transform:translateY(-100%);-webkit-transition:-webkit-transform .5s cubic-bezier(.165,.84,.44,1) 0s;transition:-webkit-transform .5s cubic-bezier(.165,.84,.44,1) 0s;transition:transform .5s cubic-bezier(.165,.84,.44,1) 0s;transition:transform .5s cubic-bezier(.165,.84,.44,1) 0s,-webkit-transform .5s cubic-bezier(.165,.84,.44,1) 0s}@media only screen and (min-width:1920px){.g-footer .footer-left .footer-nav-link[data-v-2c7c83e0]{font-size:2.064rem}.g-footer .footer-left .footer-nav-link-child[data-v-2c7c83e0]{font-size:1.664rem}.g-footer .footer-right .footer-profile .ttl[data-v-2c7c83e0]{font-size:1.632rem}.g-footer .footer-right .footer-contact .address[data-v-2c7c83e0]{font-size:1.864rem}.g-footer .footer-right .footer-profile>.txt[data-v-2c7c83e0]{max-width:548px;font-size:1.832rem}.g-footer .footer-right .footer-contact .email-copy-wrap[data-v-2c7c83e0],.g-footer .footer-right .footer-profile a.link[data-v-2c7c83e0]{font-size:4.396rem}.g-footer .footer-bottom .copyright[data-v-2c7c83e0],.g-footer .footer-bottom .legals .txt[data-v-2c7c83e0]{font-size:1.564rem}}@media only screen and (max-width:1194px){.g-footer .footer-left .footer-nav-list.has-child[data-v-2c7c83e0]{display:block}.g-footer .footer-left .footer-nav-lists-child[data-v-2c7c83e0]{margin-left:0;margin-top:15px}}@media only screen and (max-width:1024px) and (orientation:portrait){.g-footer .footer-scroll-top .txt[data-v-2c7c83e0]{font-size:1.6rem}}@media only screen and (max-width:680px){.g-footer[data-v-2c7c83e0]{position:relative;bottom:auto;opacity:1!important;visibility:visible!important;padding-right:40px}.g-footer[data-v-2c7c83e0]:after{content:"";position:absolute;right:0;top:0;width:40px;height:120px;background:-webkit-gradient(linear,left bottom,left top,from(hsla(0,0%,100%,0)),to(#fff));background:linear-gradient(0deg,hsla(0,0%,100%,0),#fff);pointer-events:none}.g-footer .footer-inner[data-v-2c7c83e0]{max-height:none;height:auto;padding:80px 40px 120px}.g-footer .footer-body[data-v-2c7c83e0]{padding-bottom:0;opacity:1!important}.g-footer .footer-left[data-v-2c7c83e0]{width:100%;margin-bottom:60px}.g-footer .footer-left .footer-nav-list[data-v-2c7c83e0]:before{width:10px;margin-left:-25px}.g-footer .footer-left .footer-nav-list[data-v-2c7c83e0]:not(:last-child){margin-bottom:15px}.g-footer .footer-left .footer-nav-link[data-v-2c7c83e0]{font-size:1.8rem}.g-footer .footer-left .footer-nav-lists-child[data-v-2c7c83e0]{margin-left:0}.g-footer .footer-left .footer-nav-link-child[data-v-2c7c83e0]{font-size:1.4rem}.g-footer .footer-right[data-v-2c7c83e0]{width:100%;padding-bottom:60px}.g-footer .footer-right .footer-contact .address[data-v-2c7c83e0],.g-footer .footer-right .footer-contact .tel[data-v-2c7c83e0]{font-size:1.4rem}.g-footer .footer-right .footer-contact .email-copy-wrap[data-v-2c7c83e0]{font-size:3.2rem}.g-footer .footer-right .footer-profile>.txt[data-v-2c7c83e0]{margin-bottom:60px;padding-right:1em;font-size:1.6rem;line-height:1.8}.g-footer .footer-right .footer-profile a.link[data-v-2c7c83e0]{font-size:3.2rem}.g-footer .footer-bottom[data-v-2c7c83e0]{height:120px;opacity:1!important}.g-footer .footer-bottom .footer-bottom-inner[data-v-2c7c83e0]{-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding:0 40px}.g-footer .footer-bottom .copyright[data-v-2c7c83e0],.g-footer .footer-bottom .legals[data-v-2c7c83e0],.g-footer .footer-bottom .legals .txt[data-v-2c7c83e0]{width:auto;font-size:1.3rem;line-height:1;padding:0}.g-footer .footer-scroll-top[data-v-2c7c83e0]{width:40px;height:120px}.g-footer .footer-scroll-top .txt[data-v-2c7c83e0]{font-size:1.3rem;-webkit-transform:rotate(90deg);transform:rotate(90deg)}.p-contact+.g-footer .footer-body[data-v-2c7c83e0]{-webkit-box-orient:vertical;-webkit-box-direction:reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse}.p-contact+.g-footer .footer-right[data-v-2c7c83e0]{padding-bottom:80px}.p-contact+.g-footer .footer-left[data-v-2c7c83e0]{margin-bottom:40px}[lang=en] .g-footer .footer-right .footer-contact .address[data-v-2c7c83e0],[lang=en] .g-footer .footer-right .footer-contact .tel[data-v-2c7c83e0]{font-size:1.6rem}[lang=en] .g-footer .footer-right .footer-profile .txt[data-v-2c7c83e0]{font-size:1.5rem}}', ""]), t.exports = e
    }, function(t, e, o) {
        "use strict";
        var n = o(87);
        o.n(n).a
    }, function(t, e, o) {
        (e = o(12)(!1)).push([t.i, ".dom-canvas-container[data-v-33ab9b02]{position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:10}.dom-canvas-container .dom-canvas[data-v-33ab9b02]{position:absolute;top:0;left:0;width:100%;height:100%}", ""]), t.exports = e
    }, function(t, e, o) {
        "use strict";
        var n = o(88);
        o.n(n).a
    }, function(t, e, o) {
        (e = o(12)(!1)).push([t.i, ".g-loading[data-v-6c0478f0]{position:fixed;top:0;left:0;width:100%;height:100%;z-index:9998;pointer-events:none}.g-loading .loading-body[data-v-6c0478f0]{position:absolute;top:0;left:0;width:100%;height:100%;z-index:1;pointer-events:auto}.g-loading .loading-body .loading-body-clip-inner[data-v-6c0478f0],.g-loading .loading-body .loading-body-clip-outer[data-v-6c0478f0]{position:absolute;top:0;left:0;width:100%;height:100%;overflow:hidden}.g-loading .loading-body .loading-body-back[data-v-6c0478f0],.g-loading .loading-body .loading-body-front[data-v-6c0478f0]{position:absolute;top:0;left:0;width:100%;height:100%}.g-loading .loading-body .loading-body-inner[data-v-6c0478f0]{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;position:relative;width:100%;height:100%;padding:0 13.125vw}.g-loading .loading-body .loading-logo[data-v-6c0478f0]{position:relative}.g-loading .loading-body .loading-logo .svg-logo[data-v-6c0478f0]{width:108px;height:24px;cursor:pointer}.g-loading .loading-body .loading-progress[data-v-6c0478f0]{position:relative;font-size:calc(2.4rem + (1200vw - 7200px)/1000);font-family:HK Nova,sans-serif;font-weight:500;letter-spacing:0;text-align:right;white-space:nowrap;-webkit-transition:all .45s cubic-bezier(.165,.84,.44,1) 0s;transition:all .45s cubic-bezier(.165,.84,.44,1) 0s}.g-loading .loading-body .loading-progress .num[data-v-6c0478f0]{position:relative;display:block;text-align:right;width:8em;height:1em;white-space:nowrap;text-transform:capitalize;overflow:hidden}.g-loading .loading-body .loading-progress .num .front[data-v-6c0478f0]{position:absolute;top:0;right:0}.g-loading .loading-body .loading-progress .num .back[data-v-6c0478f0]{position:absolute;top:100%;right:0}.g-loading .loading-body .loading-body-front[data-v-6c0478f0]{z-index:1}.g-loading .loading-body .loading-body-front .loading-body-clip-inner[data-v-6c0478f0]{background:#fff}.g-loading .loading-body .loading-body-front .loading-logo .svg-logo path[data-v-6c0478f0]{fill:#ff4e50}.g-loading .loading-body .loading-body-front .loading-progress .front[data-v-6c0478f0]{color:#949494}.g-loading .loading-body .loading-body-front .loading-progress .back[data-v-6c0478f0]{color:#111}.g-loading .loading-body .loading-body-back[data-v-6c0478f0]{z-index:0}.g-loading .loading-body .loading-body-back .loading-body-clip-inner[data-v-6c0478f0]{background:#ff4e50}.g-loading .loading-body .loading-body-back .loading-logo .svg-logo path[data-v-6c0478f0]{fill:#fff}.g-loading .loading-body .loading-body-back .loading-progress .back[data-v-6c0478f0],.g-loading .loading-body .loading-body-back .loading-progress .front[data-v-6c0478f0]{color:#cd0003}.g-loading.is-loading .loading-body .loading-logo[data-v-6c0478f0],.g-loading.is-loading .loading-body .loading-progress[data-v-6c0478f0]{opacity:1;visibility:visible}.g-loading .cookie-law[data-v-6c0478f0]{position:fixed;top:auto;left:auto;right:0;bottom:0;width:41.04167vw;max-width:591px;z-index:9999;opacity:0;visibility:hidden;pointer-events:auto}.g-loading .cookie-law.is-hide[data-v-6c0478f0]{opacity:0;visibility:hidden;pointer-events:none}.g-loading .cookie-law.is-show[data-v-6c0478f0]{opacity:1;visibility:visible;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-transition:opacity .5s cubic-bezier(.39,.575,.565,1) .25s,visibility .5s cubic-bezier(.39,.575,.565,1) .25s,-webkit-transform .5s cubic-bezier(.165,.84,.44,1) 0s;transition:opacity .5s cubic-bezier(.39,.575,.565,1) .25s,visibility .5s cubic-bezier(.39,.575,.565,1) .25s,-webkit-transform .5s cubic-bezier(.165,.84,.44,1) 0s;transition:transform .5s cubic-bezier(.165,.84,.44,1) 0s,opacity .5s cubic-bezier(.39,.575,.565,1) .25s,visibility .5s cubic-bezier(.39,.575,.565,1) .25s;transition:transform .5s cubic-bezier(.165,.84,.44,1) 0s,opacity .5s cubic-bezier(.39,.575,.565,1) .25s,visibility .5s cubic-bezier(.39,.575,.565,1) .25s,-webkit-transform .5s cubic-bezier(.165,.84,.44,1) 0s}.g-loading .cookie-law.fadeout[data-v-6c0478f0]{opacity:0;visibility:hidden;-webkit-transform:translate3d(0,50%,0);transform:translate3d(0,50%,0);-webkit-transition:opacity .5s cubic-bezier(.39,.575,.565,1) 0s,visibility .5s cubic-bezier(.39,.575,.565,1) 0s,-webkit-transform .5s cubic-bezier(.165,.84,.44,1) 0s;transition:opacity .5s cubic-bezier(.39,.575,.565,1) 0s,visibility .5s cubic-bezier(.39,.575,.565,1) 0s,-webkit-transform .5s cubic-bezier(.165,.84,.44,1) 0s;transition:transform .5s cubic-bezier(.165,.84,.44,1) 0s,opacity .5s cubic-bezier(.39,.575,.565,1) 0s,visibility .5s cubic-bezier(.39,.575,.565,1) 0s;transition:transform .5s cubic-bezier(.165,.84,.44,1) 0s,opacity .5s cubic-bezier(.39,.575,.565,1) 0s,visibility .5s cubic-bezier(.39,.575,.565,1) 0s,-webkit-transform .5s cubic-bezier(.165,.84,.44,1) 0s;pointer-events:none}.g-loading .cookie-law .cookie-law-body[data-v-6c0478f0]{position:relative;margin:0 auto;height:auto;padding:50px 4.16667vw;background:#fff;-webkit-box-shadow:0 6px 12px rgba(0,0,0,.14);box-shadow:0 6px 12px rgba(0,0,0,.14)}.g-loading .cookie-law .cookie-law-txt[data-v-6c0478f0]{position:relative;margin-bottom:25px;padding-right:30px;font-size:1.4rem;line-height:1.7}.g-loading .cookie-law .cookie-law-btn-wrap[data-v-6c0478f0]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.g-loading .cookie-law .cookie-law-btn[data-v-6c0478f0]{-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;position:relative;width:100px;min-width:90px;height:40px;color:#fff;font-family:HK Nova,sans-serif;font-size:1.3rem;font-weight:500;background:#ff4e50;cursor:pointer;-webkit-transition:background .25s cubic-bezier(.39,.575,.565,1) 0s;transition:background .25s cubic-bezier(.39,.575,.565,1) 0s;border:none}.g-loading .cookie-law .cookie-law-btn-wrap a.link[data-v-6c0478f0]{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;color:#888;font-size:1.4rem;margin-left:15px;width:100px;min-width:90px;height:40px;-webkit-transition:color .25s cubic-bezier(.39,.575,.565,1) 0s;transition:color .25s cubic-bezier(.39,.575,.565,1) 0s}[lang=en] .g-loading .cookie-law .cookie-law-txt[data-v-6c0478f0]{line-height:1.6}[lang=en] .g-loading .cookie-law .cookie-law-btn-wrap a.link[data-v-6c0478f0],[lang=en] .g-loading .cookie-law .cookie-law-txt[data-v-6c0478f0]{font-family:HK Grotesk Pro,sans-serif;font-size:1.5rem;letter-spacing:.005em}.no-touch .g-loading .cookie-law .cookie-law-btn-wrap a.link[data-v-6c0478f0]:hover{color:#ff4e50}.no-touch .g-loading .cookie-law .cookie-law-btn[data-v-6c0478f0]:hover{background:#ff1b1e}@media only screen and (min-width:1440px){.g-loading .loading-body .loading-logo[data-v-6c0478f0]{-webkit-transform-origin:0 50% 0;transform-origin:0 50% 0;-webkit-transform:scale(1.5);transform:scale(1.5)}}@media only screen and (max-width:1024px) and (orientation:portrait){.g-loading .cookie-law[data-v-6c0478f0]{width:57.70833vw}}@media only screen and (max-width:680px){.g-loading .loading-body .loading-body-inner[data-v-6c0478f0]{padding:0 40px}.g-loading .loading-body .loading-progress[data-v-6c0478f0]{font-size:calc(3rem + (1200vw - 7200px)/424)}.g-loading .cookie-law[data-v-6c0478f0]{width:100%}.g-loading .cookie-law .cookie-law-body[data-v-6c0478f0]{padding:20px 40px;-webkit-box-shadow:0 -6px 24px rgba(0,0,0,.1);box-shadow:0 -6px 24px rgba(0,0,0,.1)}.g-loading .cookie-law .cookie-law-txt[data-v-6c0478f0]{margin-bottom:15px;padding-right:0;font-size:1.3rem}.g-loading .cookie-law .cookie-law-btn-wrap a.link[data-v-6c0478f0]{font-size:1.3rem}}", ""]), t.exports = e
    }, function(t, e, o) {
        "use strict";
        var n = o(90);
        o.n(n).a
    }, function(t, e, o) {
        (e = o(12)(!1)).push([t.i, '.g-mouse-pointer-wrap{position:fixed;z-index:996;pointer-events:none;opacity:0;visibility:hidden}.g-mouse-pointer-wrap.is-active{opacity:1;visibility:visible;-webkit-transition:opacity .3s cubic-bezier(.39,.575,.565,1) 0s,visibility .3s cubic-bezier(.39,.575,.565,1) 0s;transition:opacity .3s cubic-bezier(.39,.575,.565,1) 0s,visibility .3s cubic-bezier(.39,.575,.565,1) 0s}.g-mouse-pointer-wrap .mouse-pointer{position:fixed;top:0;left:0;width:120px;height:120px;pointer-events:none}.g-mouse-pointer-wrap .mouse-pointer-child{position:absolute;width:100%;height:100%}.g-mouse-pointer-wrap .mouse-pointer-child.pointer-link{top:0;left:0;width:64px;height:64px;margin:28px;z-index:2}.g-mouse-pointer-wrap .mouse-pointer-child.pointer-link .circle{display:block;position:absolute;width:100%;height:100%;background:#ff4e50;border-radius:50px;-webkit-transition:opacity .25s cubic-bezier(.39,.575,.565,1) 0s,visibility .25s cubic-bezier(.39,.575,.565,1) 0s,-webkit-transform .25s cubic-bezier(.165,.84,.44,1) 0s;transition:opacity .25s cubic-bezier(.39,.575,.565,1) 0s,visibility .25s cubic-bezier(.39,.575,.565,1) 0s,-webkit-transform .25s cubic-bezier(.165,.84,.44,1) 0s;transition:transform .25s cubic-bezier(.165,.84,.44,1) 0s,opacity .25s cubic-bezier(.39,.575,.565,1) 0s,visibility .25s cubic-bezier(.39,.575,.565,1) 0s;transition:transform .25s cubic-bezier(.165,.84,.44,1) 0s,opacity .25s cubic-bezier(.39,.575,.565,1) 0s,visibility .25s cubic-bezier(.39,.575,.565,1) 0s,-webkit-transform .25s cubic-bezier(.165,.84,.44,1) 0s;-webkit-transform:scale(0);transform:scale(0)}.g-mouse-pointer-wrap .mouse-pointer-child.pointer-border{top:0;left:0;width:100px;height:100px;margin:10px;z-index:1}.g-mouse-pointer-wrap .mouse-pointer-child.pointer-border .circle{display:block;position:absolute;width:100%;height:100%;border:2px solid red;border-radius:50px;opacity:0;visibility:hidden;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transition:opacity .25s cubic-bezier(.39,.575,.565,1) 0s,visibility .25s cubic-bezier(.39,.575,.565,1) 0s,border-color .25s cubic-bezier(.39,.575,.565,1) 0s,-webkit-transform .35s cubic-bezier(.165,.84,.44,1) 0s;transition:opacity .25s cubic-bezier(.39,.575,.565,1) 0s,visibility .25s cubic-bezier(.39,.575,.565,1) 0s,border-color .25s cubic-bezier(.39,.575,.565,1) 0s,-webkit-transform .35s cubic-bezier(.165,.84,.44,1) 0s;transition:transform .35s cubic-bezier(.165,.84,.44,1) 0s,opacity .25s cubic-bezier(.39,.575,.565,1) 0s,visibility .25s cubic-bezier(.39,.575,.565,1) 0s,border-color .25s cubic-bezier(.39,.575,.565,1) 0s;transition:transform .35s cubic-bezier(.165,.84,.44,1) 0s,opacity .25s cubic-bezier(.39,.575,.565,1) 0s,visibility .25s cubic-bezier(.39,.575,.565,1) 0s,border-color .25s cubic-bezier(.39,.575,.565,1) 0s,-webkit-transform .35s cubic-bezier(.165,.84,.44,1) 0s}.g-mouse-pointer-wrap .mouse-pointer-child.pointer-link-gap{top:-36px;left:auto;right:-36px;width:72px;height:72px;z-index:2}.g-mouse-pointer-wrap .mouse-pointer-child.pointer-link-gap .circle{display:block;position:absolute;width:100%;height:100%;background:#ff4e50;border-radius:50px;-webkit-transition:-webkit-transform .25s cubic-bezier(.165,.84,.44,1) 0s;transition:-webkit-transform .25s cubic-bezier(.165,.84,.44,1) 0s;transition:transform .25s cubic-bezier(.165,.84,.44,1) 0s;transition:transform .25s cubic-bezier(.165,.84,.44,1) 0s,-webkit-transform .25s cubic-bezier(.165,.84,.44,1) 0s;-webkit-transform:scale(0);transform:scale(0)}.g-mouse-pointer-wrap .mouse-pointer-child.pointer-icons{z-index:3}.g-mouse-pointer-wrap .mouse-pointer-child.pointer-icons .same-cursor{display:block;position:absolute;top:-8px;right:-8px;width:16px;height:16px;opacity:0;visibility:hidden;-webkit-transition:opacity .25s cubic-bezier(.39,.575,.565,1) 0s,visibility .25s cubic-bezier(.39,.575,.565,1) 0s;transition:opacity .25s cubic-bezier(.39,.575,.565,1) 0s,visibility .25s cubic-bezier(.39,.575,.565,1) 0s}.g-mouse-pointer-wrap .mouse-pointer-child.pointer-icons .same-cursor .line{position:absolute}.g-mouse-pointer-wrap .mouse-pointer-child.pointer-icons .same-cursor .line .rect{display:block;position:absolute;top:0;left:0;width:100%;height:100%;background:#fff;-webkit-transition:-webkit-transform .25s cubic-bezier(.165,.84,.44,1) 0s;transition:-webkit-transform .25s cubic-bezier(.165,.84,.44,1) 0s;transition:transform .25s cubic-bezier(.165,.84,.44,1) 0s;transition:transform .25s cubic-bezier(.165,.84,.44,1) 0s,-webkit-transform .25s cubic-bezier(.165,.84,.44,1) 0s;-webkit-transform:scaleX(0);transform:scaleX(0)}.g-mouse-pointer-wrap .mouse-pointer-child.pointer-icons .same-cursor .line._1{top:50%;left:0;margin-top:-1px;width:100%;height:2px}.g-mouse-pointer-wrap .mouse-pointer-child.pointer-icons .same-cursor .line._1 .rect{-webkit-transform-origin:100% 50% 0;transform-origin:100% 50% 0}.g-mouse-pointer-wrap .mouse-pointer-child.pointer-icons .same-cursor .line._2{top:50%;right:0;margin-top:-1px;width:70%;height:2px;-webkit-transform-origin:100% 100% 0;transform-origin:100% 100% 0;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.g-mouse-pointer-wrap .mouse-pointer-child.pointer-icons .same-cursor .line._2 .rect{-webkit-transform-origin:100% 50% 0;transform-origin:100% 50% 0}.g-mouse-pointer-wrap .mouse-pointer-child.pointer-icons .same-cursor .line._3{bottom:50%;right:0;margin-bottom:-1px;width:70%;height:2px;-webkit-transform-origin:100% 0 0;transform-origin:100% 0 0;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.g-mouse-pointer-wrap .mouse-pointer-child.pointer-icons .same-cursor .line._3 .rect{-webkit-transform-origin:100% 50% 0;transform-origin:100% 50% 0}.g-mouse-pointer-wrap .mouse-pointer-child.pointer-icons .ex-cursor{display:block;position:absolute;top:-8px;right:-8px;width:16px;height:16px;opacity:0;visibility:hidden;-webkit-transition:opacity .25s cubic-bezier(.39,.575,.565,1) 0s,visibility .25s cubic-bezier(.39,.575,.565,1) 0s;transition:opacity .25s cubic-bezier(.39,.575,.565,1) 0s,visibility .25s cubic-bezier(.39,.575,.565,1) 0s}.g-mouse-pointer-wrap .mouse-pointer-child.pointer-icons .ex-cursor .line{position:absolute}.g-mouse-pointer-wrap .mouse-pointer-child.pointer-icons .ex-cursor .line .rect{position:absolute;top:0;left:0;display:block;width:100%;height:100%;background:#fff;-webkit-transition:-webkit-transform .25s cubic-bezier(.165,.84,.44,1) 0s;transition:-webkit-transform .25s cubic-bezier(.165,.84,.44,1) 0s;transition:transform .25s cubic-bezier(.165,.84,.44,1) 0s;transition:transform .25s cubic-bezier(.165,.84,.44,1) 0s,-webkit-transform .25s cubic-bezier(.165,.84,.44,1) 0s}.g-mouse-pointer-wrap .mouse-pointer-child.pointer-icons .ex-cursor .line._1{top:0;right:1px;width:100%;height:2px;-webkit-transform-origin:100% 50% 0;transform-origin:100% 50% 0;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.g-mouse-pointer-wrap .mouse-pointer-child.pointer-icons .ex-cursor .line._1 .rect{-webkit-transform-origin:100% 50% 0;transform-origin:100% 50% 0;-webkit-transform:scaleX(0);transform:scaleX(0)}.g-mouse-pointer-wrap .mouse-pointer-child.pointer-icons .ex-cursor .line._2{position:absolute;top:0;right:0;width:70%;height:2px}.g-mouse-pointer-wrap .mouse-pointer-child.pointer-icons .ex-cursor .line._2 .rect{-webkit-transform-origin:100% 50% 0;transform-origin:100% 50% 0;-webkit-transform:scaleX(0);transform:scaleX(0)}.g-mouse-pointer-wrap .mouse-pointer-child.pointer-icons .ex-cursor .line._3{position:absolute;top:0;right:0;width:2px;height:70%}.g-mouse-pointer-wrap .mouse-pointer-child.pointer-icons .ex-cursor .line._3 .rect{-webkit-transform-origin:50% 0 0;transform-origin:50% 0 0;-webkit-transform:scaleY(0);transform:scaleY(0)}.g-mouse-pointer-wrap .mouse-pointer-child.pointer-icons .drag-cursor{display:block;position:absolute;top:-36px;right:-36px;width:72px;height:72px;opacity:0;visibility:hidden;-webkit-transition:opacity .25s cubic-bezier(.39,.575,.565,1) 0s,visibility .25s cubic-bezier(.39,.575,.565,1) 0s;transition:opacity .25s cubic-bezier(.39,.575,.565,1) 0s,visibility .25s cubic-bezier(.39,.575,.565,1) 0s}.g-mouse-pointer-wrap .mouse-pointer-child.pointer-icons .drag-cursor .txt{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;width:100%;height:100%;color:#fff;font-size:1.4rem;font-family:HK Nova,sans-serif;font-weight:500;letter-spacing:0;white-space:nowrap}.g-mouse-pointer-wrap .mouse-pointer-child.pointer-icons .drag-cursor .txt .co{display:inline-block;width:auto;height:1em;overflow:hidden}.g-mouse-pointer-wrap .mouse-pointer-child.pointer-icons .drag-cursor .txt .ci{display:inline-block;text-align:center;-webkit-transform:translateY(100%);transform:translateY(100%);-webkit-transition:-webkit-transform .25s cubic-bezier(.165,.84,.44,1) 0s;transition:-webkit-transform .25s cubic-bezier(.165,.84,.44,1) 0s;transition:transform .25s cubic-bezier(.165,.84,.44,1) 0s;transition:transform .25s cubic-bezier(.165,.84,.44,1) 0s,-webkit-transform .25s cubic-bezier(.165,.84,.44,1) 0s}.g-mouse-pointer-wrap .mouse-pointer-child.pointer-icons .drag-cursor .arrow{position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;width:6px;height:6px;z-index:-1}.g-mouse-pointer-wrap .mouse-pointer-child.pointer-icons .drag-cursor .arrow:after,.g-mouse-pointer-wrap .mouse-pointer-child.pointer-icons .drag-cursor .arrow:before{content:"";display:inline-block;position:absolute;top:0;left:0;width:0;height:0;-webkit-transition:-webkit-transform .25s cubic-bezier(.165,.84,.44,1) 0s;transition:-webkit-transform .25s cubic-bezier(.165,.84,.44,1) 0s;transition:transform .25s cubic-bezier(.165,.84,.44,1) 0s;transition:transform .25s cubic-bezier(.165,.84,.44,1) 0s,-webkit-transform .25s cubic-bezier(.165,.84,.44,1) 0s}.g-mouse-pointer-wrap .mouse-pointer-child.pointer-icons .drag-cursor .arrow:before{border-color:transparent #ff4e50 transparent transparent;border-style:solid;border-width:3px 5px 3px 0;-webkit-transform:translate(-48px) scaleY(0);transform:translate(-48px) scaleY(0)}.g-mouse-pointer-wrap .mouse-pointer-child.pointer-icons .drag-cursor .arrow:after{border-color:transparent transparent transparent #ff4e50;border-style:solid;border-width:3px 0 3px 5px;-webkit-transform:translate(48px) scaleY(0);transform:translate(48px) scaleY(0)}.g-mouse-pointer-wrap .mouse-pointer-child.pointer-icons .drag-cursor .svg{position:absolute;top:50%;left:50%;margin-top:-32px;margin-left:-32px;width:64px;height:64px;z-index:2;opacity:0;visibility:hidden;-webkit-transform:scale(.75);transform:scale(.75);-webkit-transition:opacity .25s cubic-bezier(.39,.575,.565,1) 0s,visibility .25s cubic-bezier(.39,.575,.565,1) 0s,-webkit-transform .25s cubic-bezier(.165,.84,.44,1) 0s;transition:opacity .25s cubic-bezier(.39,.575,.565,1) 0s,visibility .25s cubic-bezier(.39,.575,.565,1) 0s,-webkit-transform .25s cubic-bezier(.165,.84,.44,1) 0s;transition:transform .25s cubic-bezier(.165,.84,.44,1) 0s,opacity .25s cubic-bezier(.39,.575,.565,1) 0s,visibility .25s cubic-bezier(.39,.575,.565,1) 0s;transition:transform .25s cubic-bezier(.165,.84,.44,1) 0s,opacity .25s cubic-bezier(.39,.575,.565,1) 0s,visibility .25s cubic-bezier(.39,.575,.565,1) 0s,-webkit-transform .25s cubic-bezier(.165,.84,.44,1) 0s}.g-mouse-pointer-wrap .mouse-pointer-child.pointer-icons .drag-cursor .svg:after{content:"";position:absolute;top:0;left:0;width:100%;height:100%;border:2px solid rgba(255,78,80,.2);z-index:-1;border-radius:50%}.g-mouse-pointer-wrap .mouse-pointer-child.pointer-icons .drag-cursor .svg .svg-progress{display:block;width:100%;height:100%}.g-mouse-pointer-wrap .mouse-pointer-child.pointer-icons .drag-cursor .svg .svg-progress path{fill:none;stroke:#ff4e50;stroke-width:2px;stroke-dasharray:226.22259521484375px;stroke-dashoffset:226.22259521484375px}.g-mouse-pointer-wrap .mouse-pointer-child.pointer-icons .plus-cursor{display:block;position:absolute;top:-8px;right:-8px;width:16px;height:16px;opacity:0;visibility:hidden;-webkit-transition:opacity .25s cubic-bezier(.39,.575,.565,1) 0s,visibility .25s cubic-bezier(.39,.575,.565,1) 0s;transition:opacity .25s cubic-bezier(.39,.575,.565,1) 0s,visibility .25s cubic-bezier(.39,.575,.565,1) 0s}.g-mouse-pointer-wrap .mouse-pointer-child.pointer-icons .plus-cursor .line{position:absolute;top:50%;left:50%;width:16px;height:2px;margin-top:-1px;margin-left:-8px}.g-mouse-pointer-wrap .mouse-pointer-child.pointer-icons .plus-cursor .line .rect{display:block;position:absolute;top:0;left:0;width:100%;height:100%;background:#fff;-webkit-transition:-webkit-transform .25s cubic-bezier(.165,.84,.44,1) 0s;transition:-webkit-transform .25s cubic-bezier(.165,.84,.44,1) 0s;transition:transform .25s cubic-bezier(.165,.84,.44,1) 0s;transition:transform .25s cubic-bezier(.165,.84,.44,1) 0s,-webkit-transform .25s cubic-bezier(.165,.84,.44,1) 0s;-webkit-transform:scaleX(0);transform:scaleX(0)}.g-mouse-pointer-wrap .mouse-pointer-child.pointer-icons .plus-cursor .line._2{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.g-mouse-pointer-wrap .mouse-pointer-child.pointer-icons .maps-cursor{display:block;position:absolute;top:-12px;right:-12px;width:24px;height:24px;opacity:0;visibility:hidden;-webkit-transition:opacity .25s cubic-bezier(.39,.575,.565,1) 0s,visibility .25s cubic-bezier(.39,.575,.565,1) 0s;transition:opacity .25s cubic-bezier(.39,.575,.565,1) 0s,visibility .25s cubic-bezier(.39,.575,.565,1) 0s}.g-mouse-pointer-wrap .mouse-pointer-child.pointer-icons .maps-cursor .svg-pin{position:relative;display:block;width:100%;height:100%}.g-mouse-pointer-wrap .mouse-pointer-child.pointer-icons .maps-cursor .svg-pin .pin{fill:none;stroke:#fff;stroke-width:1px;stroke-dasharray:41.25581359863281;stroke-dashoffset:41.25581359863281;-webkit-transform-origin:50% 50% 0;transform-origin:50% 50% 0;-webkit-transition:stroke-dashoffset .35s cubic-bezier(.165,.84,.44,1) 0s;transition:stroke-dashoffset .35s cubic-bezier(.165,.84,.44,1) 0s}.g-mouse-pointer-wrap .mouse-pointer-child.pointer-icons .maps-cursor .svg-pin .circle{fill:#fff;-webkit-transform-origin:50% 50% 0;transform-origin:50% 50% 0;-webkit-transform:scale(0);transform:scale(0)}.g-mouse-pointer-wrap .mouse-pointer-child.pointer-icons .video-pause{display:block;position:absolute;top:-8px;right:-8px;width:16px;height:16px;opacity:0;visibility:hidden;-webkit-transition:opacity .25s cubic-bezier(.39,.575,.565,1) 0s,visibility .25s cubic-bezier(.39,.575,.565,1) 0s;transition:opacity .25s cubic-bezier(.39,.575,.565,1) 0s,visibility .25s cubic-bezier(.39,.575,.565,1) 0s}.g-mouse-pointer-wrap .mouse-pointer-child.pointer-icons .video-pause .line{position:absolute;top:50%;left:50%;width:2px;height:14px;margin-top:-7px}.g-mouse-pointer-wrap .mouse-pointer-child.pointer-icons .video-pause .line .rect{display:block;position:absolute;top:0;left:0;width:100%;height:100%;background:#fff;-webkit-transition:-webkit-transform .25s cubic-bezier(.165,.84,.44,1) 0s;transition:-webkit-transform .25s cubic-bezier(.165,.84,.44,1) 0s;transition:transform .25s cubic-bezier(.165,.84,.44,1) 0s;transition:transform .25s cubic-bezier(.165,.84,.44,1) 0s,-webkit-transform .25s cubic-bezier(.165,.84,.44,1) 0s;-webkit-transform:scaleY(0);transform:scaleY(0)}.g-mouse-pointer-wrap .mouse-pointer-child.pointer-icons .video-pause .line._1{margin-left:-1px;-webkit-transform:translate(-3px);transform:translate(-3px)}.g-mouse-pointer-wrap .mouse-pointer-child.pointer-icons .video-pause .line._1 .rect{-webkit-transform-origin:50% 0 0;transform-origin:50% 0 0}.g-mouse-pointer-wrap .mouse-pointer-child.pointer-icons .video-pause .line._2{margin-left:-1px;-webkit-transform:translate(3px);transform:translate(3px)}.g-mouse-pointer-wrap .mouse-pointer-child.pointer-icons .video-pause .line._2 .rect{-webkit-transform-origin:50% 100% 0;transform-origin:50% 100% 0}.g-mouse-pointer-wrap.type-force .mouse-pointer-child.pointer-link .circle{opacity:0;visibility:hidden;-webkit-transform:scale(0);transform:scale(0)}.g-mouse-pointer-wrap.type-force .mouse-pointer-child.pointer-border .circle{opacity:1;visibility:visible;-webkit-transform:scale(1);transform:scale(1)}.g-mouse-pointer-wrap.type-link .mouse-pointer-child.pointer-link .circle{opacity:.5;visibility:visible;-webkit-transform:scale(.75);transform:scale(.75);-webkit-transition:-webkit-transform .45s cubic-bezier(.175,.885,.32,1.275) 0s;transition:-webkit-transform .45s cubic-bezier(.175,.885,.32,1.275) 0s;transition:transform .45s cubic-bezier(.175,.885,.32,1.275) 0s;transition:transform .45s cubic-bezier(.175,.885,.32,1.275) 0s,-webkit-transform .45s cubic-bezier(.175,.885,.32,1.275) 0s}.g-mouse-pointer-wrap.type-page-link .mouse-pointer-child.pointer-link-gap .circle{opacity:1;visibility:visible;-webkit-transform:scale(1);transform:scale(1);-webkit-transition:-webkit-transform .45s cubic-bezier(.645,.045,.355,1) 0s;transition:-webkit-transform .45s cubic-bezier(.645,.045,.355,1) 0s;transition:transform .45s cubic-bezier(.645,.045,.355,1) 0s;transition:transform .45s cubic-bezier(.645,.045,.355,1) 0s,-webkit-transform .45s cubic-bezier(.645,.045,.355,1) 0s}.g-mouse-pointer-wrap.type-page-link .mouse-pointer-child.pointer-icons .same-cursor{opacity:1;visibility:visible}.g-mouse-pointer-wrap.type-page-link .mouse-pointer-child.pointer-icons .same-cursor .line .rect{-webkit-transform:scale(1);transform:scale(1)}.g-mouse-pointer-wrap.type-page-link .mouse-pointer-child.pointer-icons .same-cursor .line._1 .rect{-webkit-transform-origin:0 50% 0;transform-origin:0 50% 0;-webkit-transition:-webkit-transform .25s cubic-bezier(.165,.84,.44,1) .25s;transition:-webkit-transform .25s cubic-bezier(.165,.84,.44,1) .25s;transition:transform .25s cubic-bezier(.165,.84,.44,1) .25s;transition:transform .25s cubic-bezier(.165,.84,.44,1) .25s,-webkit-transform .25s cubic-bezier(.165,.84,.44,1) .25s}.g-mouse-pointer-wrap.type-page-link .mouse-pointer-child.pointer-icons .same-cursor .line._2 .rect,.g-mouse-pointer-wrap.type-page-link .mouse-pointer-child.pointer-icons .same-cursor .line._3 .rect{-webkit-transform-origin:100% 50% 0;transform-origin:100% 50% 0;-webkit-transition:-webkit-transform .25s cubic-bezier(.165,.84,.44,1) .35s;transition:-webkit-transform .25s cubic-bezier(.165,.84,.44,1) .35s;transition:transform .25s cubic-bezier(.165,.84,.44,1) .35s;transition:transform .25s cubic-bezier(.165,.84,.44,1) .35s,-webkit-transform .25s cubic-bezier(.165,.84,.44,1) .35s}.g-mouse-pointer-wrap.type-ex-link .mouse-pointer-child.pointer-link-gap .circle{opacity:1;visibility:visible;-webkit-transform:scale(1);transform:scale(1);-webkit-transition:-webkit-transform .45s cubic-bezier(.645,.045,.355,1) 0s;transition:-webkit-transform .45s cubic-bezier(.645,.045,.355,1) 0s;transition:transform .45s cubic-bezier(.645,.045,.355,1) 0s;transition:transform .45s cubic-bezier(.645,.045,.355,1) 0s,-webkit-transform .45s cubic-bezier(.645,.045,.355,1) 0s}.g-mouse-pointer-wrap.type-ex-link .mouse-pointer-child.pointer-icons .ex-cursor{opacity:1;visibility:visible}.g-mouse-pointer-wrap.type-ex-link .mouse-pointer-child.pointer-icons .ex-cursor .line .rect{-webkit-transform:scale(1);transform:scale(1)}.g-mouse-pointer-wrap.type-ex-link .mouse-pointer-child.pointer-icons .ex-cursor .line._1 .rect{-webkit-transform-origin:0 50% 0;transform-origin:0 50% 0;-webkit-transition:-webkit-transform .25s cubic-bezier(.77,0,.175,1) .25s;transition:-webkit-transform .25s cubic-bezier(.77,0,.175,1) .25s;transition:transform .25s cubic-bezier(.77,0,.175,1) .25s;transition:transform .25s cubic-bezier(.77,0,.175,1) .25s,-webkit-transform .25s cubic-bezier(.77,0,.175,1) .25s}.g-mouse-pointer-wrap.type-ex-link .mouse-pointer-child.pointer-icons .ex-cursor .line._2 .rect,.g-mouse-pointer-wrap.type-ex-link .mouse-pointer-child.pointer-icons .ex-cursor .line._3 .rect{-webkit-transition:-webkit-transform .25s cubic-bezier(.165,.84,.44,1) .35s;transition:-webkit-transform .25s cubic-bezier(.165,.84,.44,1) .35s;transition:transform .25s cubic-bezier(.165,.84,.44,1) .35s;transition:transform .25s cubic-bezier(.165,.84,.44,1) .35s,-webkit-transform .25s cubic-bezier(.165,.84,.44,1) .35s}.g-mouse-pointer-wrap.type-drag-link .mouse-pointer-child.pointer-link-gap .circle{opacity:1;visibility:visible;-webkit-transform:scale(1);transform:scale(1);-webkit-transition:-webkit-transform .45s cubic-bezier(.645,.045,.355,1) 0s;transition:-webkit-transform .45s cubic-bezier(.645,.045,.355,1) 0s;transition:transform .45s cubic-bezier(.645,.045,.355,1) 0s;transition:transform .45s cubic-bezier(.645,.045,.355,1) 0s,-webkit-transform .45s cubic-bezier(.645,.045,.355,1) 0s}.g-mouse-pointer-wrap.type-drag-link .mouse-pointer-child.pointer-icons .drag-cursor{opacity:1;visibility:visible}.g-mouse-pointer-wrap.type-drag-link .mouse-pointer-child.pointer-icons .drag-cursor .txt .ci{-webkit-transform:translate(0);transform:translate(0);-webkit-transition:-webkit-transform .25s cubic-bezier(.165,.84,.44,1) .35s;transition:-webkit-transform .25s cubic-bezier(.165,.84,.44,1) .35s;transition:transform .25s cubic-bezier(.165,.84,.44,1) .35s;transition:transform .25s cubic-bezier(.165,.84,.44,1) .35s,-webkit-transform .25s cubic-bezier(.165,.84,.44,1) .35s}.g-mouse-pointer-wrap.is-dragging.type-drag-link .mouse-pointer-child.pointer-link-gap .circle{opacity:1;visibility:visible;-webkit-transform:scale(0);transform:scale(0);-webkit-transition:-webkit-transform .45s cubic-bezier(.645,.045,.355,1) 0s;transition:-webkit-transform .45s cubic-bezier(.645,.045,.355,1) 0s;transition:transform .45s cubic-bezier(.645,.045,.355,1) 0s;transition:transform .45s cubic-bezier(.645,.045,.355,1) 0s,-webkit-transform .45s cubic-bezier(.645,.045,.355,1) 0s}.g-mouse-pointer-wrap.is-dragging.type-drag-link .mouse-pointer-child.pointer-icons .drag-cursor .txt .ci{-webkit-transform:translateY(-100%);transform:translateY(-100%);-webkit-transition:-webkit-transform .2s cubic-bezier(.165,.84,.44,1) .15s;transition:-webkit-transform .2s cubic-bezier(.165,.84,.44,1) .15s;transition:transform .2s cubic-bezier(.165,.84,.44,1) .15s;transition:transform .2s cubic-bezier(.165,.84,.44,1) .15s,-webkit-transform .2s cubic-bezier(.165,.84,.44,1) .15s}.g-mouse-pointer-wrap.is-dragging.type-drag-link .mouse-pointer-child.pointer-icons .drag-cursor .arrow:before{-webkit-transform:translate(-42px) scale(1);transform:translate(-42px) scale(1)}.g-mouse-pointer-wrap.is-dragging.type-drag-link .mouse-pointer-child.pointer-icons .drag-cursor .arrow:after,.g-mouse-pointer-wrap.is-dragging.type-drag-link .mouse-pointer-child.pointer-icons .drag-cursor .arrow:before{-webkit-transition:-webkit-transform .45s cubic-bezier(.215,.61,.355,1) .25s;transition:-webkit-transform .45s cubic-bezier(.215,.61,.355,1) .25s;transition:transform .45s cubic-bezier(.215,.61,.355,1) .25s;transition:transform .45s cubic-bezier(.215,.61,.355,1) .25s,-webkit-transform .45s cubic-bezier(.215,.61,.355,1) .25s}.g-mouse-pointer-wrap.is-dragging.type-drag-link .mouse-pointer-child.pointer-icons .drag-cursor .arrow:after{-webkit-transform:translate(42px) scale(1);transform:translate(42px) scale(1)}.g-mouse-pointer-wrap.is-dragging.type-drag-link .mouse-pointer-child.pointer-icons .drag-cursor .svg{opacity:1;visibility:visible;-webkit-transform:scale(1);transform:scale(1);-webkit-transition:opacity .45s cubic-bezier(.39,.575,.565,1) .1s,visibility .45s cubic-bezier(.39,.575,.565,1) .1s,-webkit-transform .45s cubic-bezier(.645,.045,.355,1) .1s;transition:opacity .45s cubic-bezier(.39,.575,.565,1) .1s,visibility .45s cubic-bezier(.39,.575,.565,1) .1s,-webkit-transform .45s cubic-bezier(.645,.045,.355,1) .1s;transition:transform .45s cubic-bezier(.645,.045,.355,1) .1s,opacity .45s cubic-bezier(.39,.575,.565,1) .1s,visibility .45s cubic-bezier(.39,.575,.565,1) .1s;transition:transform .45s cubic-bezier(.645,.045,.355,1) .1s,opacity .45s cubic-bezier(.39,.575,.565,1) .1s,visibility .45s cubic-bezier(.39,.575,.565,1) .1s,-webkit-transform .45s cubic-bezier(.645,.045,.355,1) .1s}.g-mouse-pointer-wrap.type-plus-link .mouse-pointer-child.pointer-link-gap .circle{opacity:1;visibility:visible;-webkit-transform:scale(1);transform:scale(1);-webkit-transition:-webkit-transform .45s cubic-bezier(.645,.045,.355,1) 0s;transition:-webkit-transform .45s cubic-bezier(.645,.045,.355,1) 0s;transition:transform .45s cubic-bezier(.645,.045,.355,1) 0s;transition:transform .45s cubic-bezier(.645,.045,.355,1) 0s,-webkit-transform .45s cubic-bezier(.645,.045,.355,1) 0s}.g-mouse-pointer-wrap.type-plus-link .mouse-pointer-child.pointer-icons .plus-cursor{opacity:1;visibility:visible}.g-mouse-pointer-wrap.type-plus-link .mouse-pointer-child.pointer-icons .plus-cursor .line .rect{-webkit-transform:scale(1);transform:scale(1)}.g-mouse-pointer-wrap.type-plus-link .mouse-pointer-child.pointer-icons .plus-cursor .line._1 .rect,.g-mouse-pointer-wrap.type-plus-link .mouse-pointer-child.pointer-icons .plus-cursor .line._2 .rect{-webkit-transition:-webkit-transform .25s cubic-bezier(.165,.84,.44,1) .35s;transition:-webkit-transform .25s cubic-bezier(.165,.84,.44,1) .35s;transition:transform .25s cubic-bezier(.165,.84,.44,1) .35s;transition:transform .25s cubic-bezier(.165,.84,.44,1) .35s,-webkit-transform .25s cubic-bezier(.165,.84,.44,1) .35s}.g-mouse-pointer-wrap.type-maps-link .mouse-pointer-child.pointer-link-gap span{opacity:1;visibility:visible;-webkit-transform:scale(1);transform:scale(1);-webkit-transition:-webkit-transform .45s cubic-bezier(.645,.045,.355,1) 0s;transition:-webkit-transform .45s cubic-bezier(.645,.045,.355,1) 0s;transition:transform .45s cubic-bezier(.645,.045,.355,1) 0s;transition:transform .45s cubic-bezier(.645,.045,.355,1) 0s,-webkit-transform .45s cubic-bezier(.645,.045,.355,1) 0s}.g-mouse-pointer-wrap.type-maps-link .mouse-pointer-child.pointer-icons .maps-cursor{opacity:1;visibility:visible}.g-mouse-pointer-wrap.type-maps-link .mouse-pointer-child.pointer-icons .maps-cursor .pin{-webkit-transition:stroke-dashoffset .35s cubic-bezier(.77,0,.175,1) .25s;transition:stroke-dashoffset .35s cubic-bezier(.77,0,.175,1) .25s;stroke-dashoffset:0}.g-mouse-pointer-wrap.type-maps-link .mouse-pointer-child.pointer-icons .maps-cursor .circle{-webkit-transform:scale(1);transform:scale(1);-webkit-transition:-webkit-transform .35s cubic-bezier(.175,.885,.32,1.275) .55s;transition:-webkit-transform .35s cubic-bezier(.175,.885,.32,1.275) .55s;transition:transform .35s cubic-bezier(.175,.885,.32,1.275) .55s;transition:transform .35s cubic-bezier(.175,.885,.32,1.275) .55s,-webkit-transform .35s cubic-bezier(.175,.885,.32,1.275) .55s}.g-mouse-pointer-wrap.type-video-pause .mouse-pointer-child.pointer-link-gap span{opacity:1;visibility:visible;-webkit-transform:scale(1);transform:scale(1);-webkit-transition:-webkit-transform .45s cubic-bezier(.645,.045,.355,1) 0s;transition:-webkit-transform .45s cubic-bezier(.645,.045,.355,1) 0s;transition:transform .45s cubic-bezier(.645,.045,.355,1) 0s;transition:transform .45s cubic-bezier(.645,.045,.355,1) 0s,-webkit-transform .45s cubic-bezier(.645,.045,.355,1) 0s}.g-mouse-pointer-wrap.type-video-pause .mouse-pointer-child.pointer-icons .video-pause{opacity:1;visibility:visible}.g-mouse-pointer-wrap.type-video-pause .mouse-pointer-child.pointer-icons .video-pause .line .rect{-webkit-transform:scale(1);transform:scale(1)}.g-mouse-pointer-wrap.type-video-pause .mouse-pointer-child.pointer-icons .video-pause .line._1 .rect{-webkit-transform-origin:50% 100% 0;transform-origin:50% 100% 0}.g-mouse-pointer-wrap.type-video-pause .mouse-pointer-child.pointer-icons .video-pause .line._1 .rect,.g-mouse-pointer-wrap.type-video-pause .mouse-pointer-child.pointer-icons .video-pause .line._2 .rect{-webkit-transition:-webkit-transform .25s cubic-bezier(.165,.84,.44,1) .35s;transition:-webkit-transform .25s cubic-bezier(.165,.84,.44,1) .35s;transition:transform .25s cubic-bezier(.165,.84,.44,1) .35s;transition:transform .25s cubic-bezier(.165,.84,.44,1) .35s,-webkit-transform .25s cubic-bezier(.165,.84,.44,1) .35s}.g-mouse-pointer-wrap.type-video-pause .mouse-pointer-child.pointer-icons .video-pause .line._2 .rect{-webkit-transform-origin:50% 0 0;transform-origin:50% 0 0}.g-mouse-pointer-wrap.type-fixed-link-small .mouse-pointer-child.pointer-link .circle{opacity:1;visibility:visible;-webkit-transform:scale(.1);transform:scale(.1);-webkit-transition:-webkit-transform .45s cubic-bezier(.175,.885,.32,1.275) 0s;transition:-webkit-transform .45s cubic-bezier(.175,.885,.32,1.275) 0s;transition:transform .45s cubic-bezier(.175,.885,.32,1.275) 0s;transition:transform .45s cubic-bezier(.175,.885,.32,1.275) 0s,-webkit-transform .45s cubic-bezier(.175,.885,.32,1.275) 0s}.g-mouse-pointer-wrap.type-fixed-link-border-light-gray .mouse-pointer-child.pointer-link .circle{opacity:0;visibility:hidden;-webkit-transform:scale(0);transform:scale(0)}.g-mouse-pointer-wrap.type-fixed-link-border-light-gray .mouse-pointer-child.pointer-border .circle{opacity:1;visibility:visible;border-color:#a0a0a0;-webkit-transform:scale(.5);transform:scale(.5)}.g-mouse-pointer-wrap.type-fixed-link-border-dark-gray .mouse-pointer-child.pointer-link .circle{opacity:0;visibility:hidden;-webkit-transform:scale(0);transform:scale(0)}.g-mouse-pointer-wrap.type-fixed-link-border-dark-gray .mouse-pointer-child.pointer-border .circle{opacity:1;visibility:visible;border-color:#444;-webkit-transform:scale(.5);transform:scale(.5)}.mobile .g-mouse-pointer-wrap,.no-desktop .g-mouse-pointer-wrap,.tablet .g-mouse-pointer-wrap,.touch .g-mouse-pointer-wrap{display:none}@media only screen and (max-width:1024px){.g-mouse-pointer-wrap{display:none}}', ""]), t.exports = e
    }, function(t, e, o) {
        "use strict";
        var n = o(91);
        o.n(n).a
    }, function(t, e, o) {
        (e = o(12)(!1)).push([t.i, ".helix-canvas-container{position:fixed;top:0;left:0;width:100%;height:100%}.helix-canvas-container .helix-canvas{position:absolute;top:0;left:0;width:100%;height:100%}.is-helper * :not(.helix-canvas-container){visibility:hidden;pointer-events:none}.is-helper .helix-canvas-container,.is-helper .helix-canvas-container .helix-canvas,.is-helper .helix-canvas-container canvas{visibility:visible;pointer-events:auto}", ""]), t.exports = e
    }, function(t, e, o) {
        "use strict";
        var n = o(92);
        o.n(n).a
    }, function(t, e, o) {
        (e = o(12)(!1)).push([t.i, ".mask[data-v-1576c3eb]{position:fixed;top:0;left:0;width:100vw;height:100vh;height:calc(var(--vh)*100);overflow:hidden;cursor:wait;z-index:9999}", ""]), t.exports = e
    }, function(t, e, o) {
        "use strict";
        var n = o(93);
        o.n(n).a
    }, function(t, e, o) {
        (e = o(12)(!1)).push([t.i, '#__helixes,#__layout{height:100%}#__helixes,#__layout,.l-all{position:relative;width:100%}.l-all .l-nav{position:static}.l-all .l-wrapper{position:relative;width:100%;height:100%;overflow-x:hidden;overflow-y:auto;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;overflow-scrolling:touch}.l-all .l-container{position:absolute;top:0;left:0;width:100%;min-width:320px;overflow-x:hidden;z-index:1}.l-all .l-container:after{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.15);z-index:0;opacity:0;visibility:hidden;pointer-events:none;-webkit-transition:opacity .25s cubic-bezier(.39,.575,.565,1) 0s,visibility .25s cubic-bezier(.39,.575,.565,1) 0s;transition:opacity .25s cubic-bezier(.39,.575,.565,1) 0s,visibility .25s cubic-bezier(.39,.575,.565,1) 0s}.l-all .l-container.is-disabled{z-index:2}.l-all .l-container.is-disabled:after{visibility:visible;opacity:1}.l-all .l-view{position:relative;width:100%;pointer-events:none}.l-all .l-inner{position:relative;padding:0 150px;max-width:1440px;height:100%;margin:0 auto}.l-all .l-padding{padding:0 50px}.l-all .l-padding,.l-all .l-relative{position:relative;width:100%;height:100%}.l-all .l-absolute{position:absolute;top:0;left:0;width:100%;height:100%}[data-fs-section]{pointer-events:auto}[data-fs-section].fill-border:before{content:"";position:absolute;top:-1px;width:100%;height:1px;background:#fff;pointer-events:none;z-index:-1}[data-fs-section],[data-fs-speed]{visibility:visible;will-change:transform}[data-fs-visible=false]{visibility:hidden;will-change:auto}[data-fs-scrollbar-active]::-webkit-scrollbar{width:0}[data-fs-scrollbar-active][data-fs-scrolling] [data-fs-scrollbar]{z-index:999}[data-fs-scrollbar]:hover{cursor:-webkit-grab;cursor:grab}[data-fs-mousedown] [data-fs-scrollbar]{width:100%;cursor:-webkit-grabbing;cursor:grabbing}[data-fs-scrollbar]{position:fixed;top:0;right:0;width:20px;height:100%;z-index:998}[data-fs-scrollbar] [data-fs-scrollbar-inner]{position:absolute;top:0;right:0;width:100%;height:100%}[data-fs-scrollbar] [data-fs-scrollbar-thumb]{display:block;width:100%;height:auto}[data-fs-scrollbar] [data-fs-scrollbar-thumb]:after{content:"";position:absolute;top:0;right:0;width:10px;height:100%;background:#ff4e50;opacity:0;-webkit-transform-origin:100% 50% 0;transform-origin:100% 50% 0;-webkit-transform:scaleX(.25);transform:scaleX(.25);-webkit-transition:opacity .35s cubic-bezier(.165,.84,.44,1) .35s,-webkit-transform .35s cubic-bezier(.165,.84,.44,1) .35s;transition:opacity .35s cubic-bezier(.165,.84,.44,1) .35s,-webkit-transform .35s cubic-bezier(.165,.84,.44,1) .35s;transition:opacity .35s cubic-bezier(.165,.84,.44,1) .35s,transform .35s cubic-bezier(.165,.84,.44,1) .35s;transition:opacity .35s cubic-bezier(.165,.84,.44,1) .35s,transform .35s cubic-bezier(.165,.84,.44,1) .35s,-webkit-transform .35s cubic-bezier(.165,.84,.44,1) .35s}[data-fs-scrollbar-active][data-fs-scrolling] [data-fs-scrollbar-thumb]:after{-webkit-transform:scaleX(.5);transform:scaleX(.5)}[data-fs-scrollbar-active][data-fs-scrolling] [data-fs-scrollbar-thumb]:after,[data-fs-scrollbar]:hover [data-fs-scrollbar-thumb]:after{opacity:1;-webkit-transition:opacity .2s cubic-bezier(.165,.84,.44,1),-webkit-transform .2s cubic-bezier(.165,.84,.44,1);transition:opacity .2s cubic-bezier(.165,.84,.44,1),-webkit-transform .2s cubic-bezier(.165,.84,.44,1);transition:opacity .2s cubic-bezier(.165,.84,.44,1),transform .2s cubic-bezier(.165,.84,.44,1);transition:opacity .2s cubic-bezier(.165,.84,.44,1),transform .2s cubic-bezier(.165,.84,.44,1),-webkit-transform .2s cubic-bezier(.165,.84,.44,1)}[data-fs-scrollbar]:hover [data-fs-scrollbar-thumb]:after{-webkit-transform:scaleX(1);transform:scaleX(1)}.is-fixed [data-fs-scrollbar]{opacity:0!important;visibility:hidden!important;pointer-events:none;-webkit-transition:opacity .5s cubic-bezier(.165,.84,.44,1),visibility .5s cubic-bezier(.165,.84,.44,1);transition:opacity .5s cubic-bezier(.165,.84,.44,1),visibility .5s cubic-bezier(.165,.84,.44,1)}.is-transition[data-fs-scrollbar-active][data-fs-scrolling] [data-fs-scrollbar-thumb]:after{opacity:0}@media only screen and (max-width:1024px){[data-fs-section]{visibility:visible;-webkit-transform:inherit;transform:inherit}.l-all{height:100%;overflow-y:scroll;-webkit-overflow-scrolling:touch;overflow-scrolling:touch}.l-wrapper{will-change:scroll}}', ""]), t.exports = e
    }, function(t, e, o) {
        "use strict";
        o.r(e), o.d(e, "state", (function() {
            return n
        })), o.d(e, "mutations", (function() {
            return r
        })), o.d(e, "getters", (function() {
            return c
        })), o.d(e, "actions", (function() {
            return l
        }));
        var n = function() {
                return {}
            },
            r = {},
            c = {},
            l = {}
    }, function(t, e, o) {
        "use strict";
        o.r(e), e.default = {
            completed: function(t) {
                var e = t.commit;
                e("updateMask", !1), e("updateLoaded", !0)
            },
            maskOn: function(t) {
                (0, t.commit)("updateMask", !0)
            },
            maskOff: function(t) {
                (0, t.commit)("updateMask", !1)
            },
            setPostsPerPage: function(t, e) {
                (0, t.commit)("updatePosts", e)
            },
            setCurrentPage: function(t, e) {
                (0, t.commit)("updateCurrentPage", e)
            }
        }
    }, function(t, e, o) {
        "use strict";
        o.r(e), e.default = {
            lang: function(t) {
                return t.lang
            },
            page: function(t) {
                return t.page
            },
            menu: function(t) {
                return t.menu
            },
            loaded: function(t) {
                return t.loaded
            },
            mask: function(t) {
                return t.mask
            },
            user: function(t) {
                return t.user
            },
            posts: function(t) {
                return t.posts
            }
        }
    }, function(t, e, o) {
        "use strict";
        o.r(e), e.default = {
            setLang: function(t, e) {
                t.lang = e
            },
            updatePage: function(t, e) {
                t.page = e
            },
            updateMenu: function(t, e) {
                t.menu = e
            },
            updateLoaded: function(t, e) {
                t.loaded = e
            },
            updateMask: function(t, e) {
                t.mask = e
            },
            updateUser: function(t, e) {
                t.user = e
            },
            updatePosts: function(t, e) {
                t.posts.lists.length ? t[e.type].lists.push(e.posts) : t[e.type].lists = e.posts.data
            },
            updateCurrentPage: function(t, e) {
                t[e.type].current = e.current
            }
        }
    }, function(t, e, o) {
        "use strict";
        o.r(e), e.default = function() {
            return {
                lang: null,
                page: null,
                menu: !1,
                loaded: !1,
                mask: !1,
                user: {
                    desktop: null,
                    tablet: null,
                    mobile: null
                },
                posts: {
                    lists: [],
                    current: 1
                }
            }
        }
    }, , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, o) {
        window.gsap = o(309).gsap, window.ScrollToPlugin = o(286).ScrollToPlugin, window.SplitText = o(311).SplitText, window.MorphSVGPlugin = o(310).MorphSVGPlugin
    }, , function(t, e, o) {
        window.THREE = o(148);
        o(288), o(289), o(290), o(291), o(292), o(293), o(294)
    }, , , , , , , function(t, e, o) {
        "use strict";
        o.r(e),
            function(t) {
                o(137), o(295), o(298);
                (function() {
                    var e, n, r, c = window.THREE || o(148);
                    if (!c) throw new Error("MeshLine requires three.js");

                    function l() {
                        this.positions = [], this.previous = [], this.next = [], this.side = [], this.width = [], this.indices_array = [], this.uvs = [], this.counters = [], this.geometry = new c.BufferGeometry, this.widthCallback = null, this.matrixWorld = new c.Matrix4
                    }

                    function h(t, e, o, n, r) {
                        var i;
                        if (t = t.subarray || t.slice ? t : t.buffer, o = o.subarray || o.slice ? o : o.buffer, t = e ? t.subarray ? t.subarray(e, r && e + r) : t.slice(e, r && e + r) : t, o.set) o.set(t, n);
                        else
                            for (i = 0; i < t.length; i++) o[i + n] = t[i];
                        return o
                    }

                    function d(t) {
                        c.ShaderMaterial.call(this, {
                            uniforms: Object.assign({}, c.UniformsLib.fog, {
                                lineWidth: {
                                    value: 1
                                },
                                map: {
                                    value: null
                                },
                                useMap: {
                                    value: 0
                                },
                                alphaMap: {
                                    value: null
                                },
                                useAlphaMap: {
                                    value: 0
                                },
                                color: {
                                    value: new c.Color(16777215)
                                },
                                opacity: {
                                    value: 1
                                },
                                resolution: {
                                    value: new c.Vector2(1, 1)
                                },
                                sizeAttenuation: {
                                    value: 1
                                },
                                near: {
                                    value: 1
                                },
                                far: {
                                    value: 1
                                },
                                dashArray: {
                                    value: 0
                                },
                                dashOffset: {
                                    value: 0
                                },
                                dashRatio: {
                                    value: .5
                                },
                                useDash: {
                                    value: 0
                                },
                                visibility: {
                                    value: 1
                                },
                                alphaTest: {
                                    value: 0
                                },
                                repeat: {
                                    value: new c.Vector2(1, 1)
                                }
                            }),
                            vertexShader: c.ShaderChunk.meshline_vert,
                            fragmentShader: c.ShaderChunk.meshline_frag
                        }), this.type = "MeshLineMaterial", Object.defineProperties(this, {
                            lineWidth: {
                                enumerable: !0,
                                get: function() {
                                    return this.uniforms.lineWidth.value
                                },
                                set: function(t) {
                                    this.uniforms.lineWidth.value = t
                                }
                            },
                            map: {
                                enumerable: !0,
                                get: function() {
                                    return this.uniforms.map.value
                                },
                                set: function(t) {
                                    this.uniforms.map.value = t
                                }
                            },
                            useMap: {
                                enumerable: !0,
                                get: function() {
                                    return this.uniforms.useMap.value
                                },
                                set: function(t) {
                                    this.uniforms.useMap.value = t
                                }
                            },
                            alphaMap: {
                                enumerable: !0,
                                get: function() {
                                    return this.uniforms.alphaMap.value
                                },
                                set: function(t) {
                                    this.uniforms.alphaMap.value = t
                                }
                            },
                            useAlphaMap: {
                                enumerable: !0,
                                get: function() {
                                    return this.uniforms.useAlphaMap.value
                                },
                                set: function(t) {
                                    this.uniforms.useAlphaMap.value = t
                                }
                            },
                            color: {
                                enumerable: !0,
                                get: function() {
                                    return this.uniforms.color.value
                                },
                                set: function(t) {
                                    this.uniforms.color.value = t
                                }
                            },
                            opacity: {
                                enumerable: !0,
                                get: function() {
                                    return this.uniforms.opacity.value
                                },
                                set: function(t) {
                                    this.uniforms.opacity.value = t
                                }
                            },
                            resolution: {
                                enumerable: !0,
                                get: function() {
                                    return this.uniforms.resolution.value
                                },
                                set: function(t) {
                                    this.uniforms.resolution.value.copy(t)
                                }
                            },
                            sizeAttenuation: {
                                enumerable: !0,
                                get: function() {
                                    return this.uniforms.sizeAttenuation.value
                                },
                                set: function(t) {
                                    this.uniforms.sizeAttenuation.value = t
                                }
                            },
                            near: {
                                enumerable: !0,
                                get: function() {
                                    return this.uniforms.near.value
                                },
                                set: function(t) {
                                    this.uniforms.near.value = t
                                }
                            },
                            far: {
                                enumerable: !0,
                                get: function() {
                                    return this.uniforms.far.value
                                },
                                set: function(t) {
                                    this.uniforms.far.value = t
                                }
                            },
                            dashArray: {
                                enumerable: !0,
                                get: function() {
                                    return this.uniforms.dashArray.value
                                },
                                set: function(t) {
                                    this.uniforms.dashArray.value = t, this.useDash = 0 !== t ? 1 : 0
                                }
                            },
                            dashOffset: {
                                enumerable: !0,
                                get: function() {
                                    return this.uniforms.dashOffset.value
                                },
                                set: function(t) {
                                    this.uniforms.dashOffset.value = t
                                }
                            },
                            dashRatio: {
                                enumerable: !0,
                                get: function() {
                                    return this.uniforms.dashRatio.value
                                },
                                set: function(t) {
                                    this.uniforms.dashRatio.value = t
                                }
                            },
                            useDash: {
                                enumerable: !0,
                                get: function() {
                                    return this.uniforms.useDash.value
                                },
                                set: function(t) {
                                    this.uniforms.useDash.value = t
                                }
                            },
                            visibility: {
                                enumerable: !0,
                                get: function() {
                                    return this.uniforms.visibility.value
                                },
                                set: function(t) {
                                    this.uniforms.visibility.value = t
                                }
                            },
                            alphaTest: {
                                enumerable: !0,
                                get: function() {
                                    return this.uniforms.alphaTest.value
                                },
                                set: function(t) {
                                    this.uniforms.alphaTest.value = t
                                }
                            },
                            repeat: {
                                enumerable: !0,
                                get: function() {
                                    return this.uniforms.repeat.value
                                },
                                set: function(t) {
                                    this.uniforms.repeat.value.copy(t)
                                }
                            }
                        }), this.setValues(t)
                    }
                    l.prototype.setMatrixWorld = function(t) {
                        this.matrixWorld = t
                    }, l.prototype.setGeometry = function(g, t) {
                        if (this.widthCallback = t, this.positions = [], this.counters = [], g instanceof c.Geometry)
                            for (var e = 0; e < g.vertices.length; e++) {
                                var o = g.vertices[e];
                                t = e / g.vertices.length;
                                this.positions.push(o.x, o.y, o.z), this.positions.push(o.x, o.y, o.z), this.counters.push(t), this.counters.push(t)
                            }
                        if (c.BufferGeometry, g instanceof Float32Array || g instanceof Array)
                            for (e = 0; e < g.length; e += 3) {
                                t = e / g.length;
                                this.positions.push(g[e], g[e + 1], g[e + 2]), this.positions.push(g[e], g[e + 1], g[e + 2]), this.counters.push(t), this.counters.push(t)
                            }
                        this.process()
                    }, l.prototype.raycast = (e = new c.Matrix4, n = new c.Ray, r = new c.Sphere, function(t, o) {
                        var l = t.linePrecision,
                            h = l * l,
                            d = this.geometry;
                        if (null === d.boundingSphere && d.computeBoundingSphere(), r.copy(d.boundingSphere), r.applyMatrix4(this.matrixWorld), !1 !== t.ray.intersectSphere(r)) {
                            e.getInverse(this.matrixWorld), n.copy(t.ray).applyMatrix4(e);
                            var m = new c.Vector3,
                                f = new c.Vector3,
                                v = new c.Vector3,
                                w = new c.Vector3,
                                x = this instanceof c.LineSegments ? 2 : 1;
                            if (d instanceof c.BufferGeometry) {
                                var y = d.index,
                                    k = d.attributes;
                                if (null !== y)
                                    for (var _ = y.array, z = k.position.array, i = 0, C = _.length - 1; i < C; i += x) {
                                        var a = _[i],
                                            b = _[i + 1];
                                        m.fromArray(z, 3 * a), f.fromArray(z, 3 * b), n.distanceSqToSegment(m, f, w, v) > h || (w.applyMatrix4(this.matrixWorld), (L = t.ray.origin.distanceTo(w)) < t.near || L > t.far || o.push({
                                            distance: L,
                                            point: v.clone().applyMatrix4(this.matrixWorld),
                                            index: i,
                                            face: null,
                                            faceIndex: null,
                                            object: this
                                        }))
                                    } else
                                        for (i = 0, C = (z = k.position.array).length / 3 - 1; i < C; i += x) m.fromArray(z, 3 * i), f.fromArray(z, 3 * i + 3), n.distanceSqToSegment(m, f, w, v) > h || (w.applyMatrix4(this.matrixWorld), (L = t.ray.origin.distanceTo(w)) < t.near || L > t.far || o.push({
                                            distance: L,
                                            point: v.clone().applyMatrix4(this.matrixWorld),
                                            index: i,
                                            face: null,
                                            faceIndex: null,
                                            object: this
                                        }))
                            } else if (d instanceof c.Geometry) {
                                var E = d.vertices,
                                    O = E.length;
                                for (i = 0; i < O - 1; i += x) {
                                    var L;
                                    n.distanceSqToSegment(E[i], E[i + 1], w, v) > h || (w.applyMatrix4(this.matrixWorld), (L = t.ray.origin.distanceTo(w)) < t.near || L > t.far || o.push({
                                        distance: L,
                                        point: v.clone().applyMatrix4(this.matrixWorld),
                                        index: i,
                                        face: null,
                                        faceIndex: null,
                                        object: this
                                    }))
                                }
                            }
                        }
                    }), l.prototype.compareV3 = function(a, b) {
                        var t = 6 * a,
                            e = 6 * b;
                        return this.positions[t] === this.positions[e] && this.positions[t + 1] === this.positions[e + 1] && this.positions[t + 2] === this.positions[e + 2]
                    }, l.prototype.copyV3 = function(a) {
                        var t = 6 * a;
                        return [this.positions[t], this.positions[t + 1], this.positions[t + 2]]
                    }, l.prototype.process = function() {
                        var t, e, o = this.positions.length / 6;
                        this.previous = [], this.next = [], this.side = [], this.width = [], this.indices_array = [], this.uvs = [];
                        for (var n = 0; n < o; n++) this.side.push(1), this.side.push(-1);
                        for (n = 0; n < o; n++) t = this.widthCallback ? this.widthCallback(n / (o - 1)) : 1, this.width.push(t), this.width.push(t);
                        for (n = 0; n < o; n++) this.uvs.push(n / (o - 1), 0), this.uvs.push(n / (o - 1), 1);
                        e = this.compareV3(0, o - 1) ? this.copyV3(o - 2) : this.copyV3(0), this.previous.push(e[0], e[1], e[2]), this.previous.push(e[0], e[1], e[2]);
                        for (n = 0; n < o - 1; n++) e = this.copyV3(n), this.previous.push(e[0], e[1], e[2]), this.previous.push(e[0], e[1], e[2]);
                        for (n = 1; n < o; n++) e = this.copyV3(n), this.next.push(e[0], e[1], e[2]), this.next.push(e[0], e[1], e[2]);
                        e = this.compareV3(o - 1, 0) ? this.copyV3(1) : this.copyV3(o - 1), this.next.push(e[0], e[1], e[2]), this.next.push(e[0], e[1], e[2]);
                        for (n = 0; n < o - 1; n++) {
                            var r = 2 * n;
                            this.indices_array.push(r, r + 1, r + 2), this.indices_array.push(r + 2, r + 1, r + 3)
                        }
                        this.attributes ? (this.attributes.position.copyArray(new Float32Array(this.positions)), this.attributes.position.needsUpdate = !0, this.attributes.previous.copyArray(new Float32Array(this.previous)), this.attributes.previous.needsUpdate = !0, this.attributes.next.copyArray(new Float32Array(this.next)), this.attributes.next.needsUpdate = !0, this.attributes.side.copyArray(new Float32Array(this.side)), this.attributes.side.needsUpdate = !0, this.attributes.width.copyArray(new Float32Array(this.width)), this.attributes.width.needsUpdate = !0, this.attributes.uv.copyArray(new Float32Array(this.uvs)), this.attributes.uv.needsUpdate = !0, this.attributes.index.copyArray(new Uint16Array(this.indices_array)), this.attributes.index.needsUpdate = !0) : this.attributes = {
                            position: new c.BufferAttribute(new Float32Array(this.positions), 3),
                            previous: new c.BufferAttribute(new Float32Array(this.previous), 3),
                            next: new c.BufferAttribute(new Float32Array(this.next), 3),
                            side: new c.BufferAttribute(new Float32Array(this.side), 1),
                            width: new c.BufferAttribute(new Float32Array(this.width), 1),
                            uv: new c.BufferAttribute(new Float32Array(this.uvs), 2),
                            index: new c.BufferAttribute(new Uint16Array(this.indices_array), 1),
                            counters: new c.BufferAttribute(new Float32Array(this.counters), 1)
                        }, this.geometry.setAttribute("position", this.attributes.position), this.geometry.setAttribute("previous", this.attributes.previous), this.geometry.setAttribute("next", this.attributes.next), this.geometry.setAttribute("side", this.attributes.side), this.geometry.setAttribute("width", this.attributes.width), this.geometry.setAttribute("uv", this.attributes.uv), this.geometry.setAttribute("counters", this.attributes.counters), this.geometry.setIndex(this.attributes.index)
                    }, l.prototype.advance = function(t) {
                        var e = this.attributes.position.array,
                            o = this.attributes.previous.array,
                            n = this.attributes.next.array,
                            r = e.length;
                        h(e, 0, o, 0, r), h(e, 6, e, 0, r - 6), e[r - 6] = t.x, e[r - 5] = t.y, e[r - 4] = t.z, e[r - 3] = t.x, e[r - 2] = t.y, e[r - 1] = t.z, h(e, 6, n, 0, r - 6), n[r - 6] = t.x, n[r - 5] = t.y, n[r - 4] = t.z, n[r - 3] = t.x, n[r - 2] = t.y, n[r - 1] = t.z, this.attributes.position.needsUpdate = !0, this.attributes.previous.needsUpdate = !0, this.attributes.next.needsUpdate = !0
                    }, c.ShaderChunk.meshline_vert = ["", c.ShaderChunk.logdepthbuf_pars_vertex, c.ShaderChunk.fog_pars_vertex, "", "attribute vec3 previous;", "attribute vec3 next;", "attribute float side;", "attribute float width;", "attribute float counters;", "", "uniform vec2 resolution;", "uniform float lineWidth;", "uniform vec3 color;", "uniform float opacity;", "uniform float near;", "uniform float far;", "uniform float sizeAttenuation;", "", "varying vec2 vUV;", "varying vec4 vColor;", "varying float vCounters;", "", "vec2 fix( vec4 i, float aspect ) {", "", "    vec2 res = i.xy / i.w;", "    res.x *= aspect;", "\t vCounters = counters;", "    return res;", "", "}", "", "void main() {", "", "    float aspect = resolution.x / resolution.y;", "    float pixelWidthRatio = 1. / (resolution.x * projectionMatrix[0][0]);", "", "    vColor = vec4( color, opacity );", "    vUV = uv;", "", "    mat4 m = projectionMatrix * modelViewMatrix;", "    vec4 finalPosition = m * vec4( position, 1.0 );", "    vec4 prevPos = m * vec4( previous, 1.0 );", "    vec4 nextPos = m * vec4( next, 1.0 );", "", "    vec2 currentP = fix( finalPosition, aspect );", "    vec2 prevP = fix( prevPos, aspect );", "    vec2 nextP = fix( nextPos, aspect );", "", "    float pixelWidth = finalPosition.w * pixelWidthRatio;", "    float w = 1.8 * pixelWidth * lineWidth * width;", "", "    if( sizeAttenuation == 1. ) {", "        w = 1.8 * lineWidth * width;", "    }", "", "    vec2 dir;", "    if( nextP == currentP ) dir = normalize( currentP - prevP );", "    else if( prevP == currentP ) dir = normalize( nextP - currentP );", "    else {", "        vec2 dir1 = normalize( currentP - prevP );", "        vec2 dir2 = normalize( nextP - currentP );", "        dir = normalize( dir1 + dir2 );", "", "        vec2 perp = vec2( -dir1.y, dir1.x );", "        vec2 miter = vec2( -dir.y, dir.x );", "        //w = clamp( w / dot( miter, perp ), 0., 4. * lineWidth * width );", "", "    }", "", "    //vec2 normal = ( cross( vec3( dir, 0. ), vec3( 0., 0., 1. ) ) ).xy;", "    vec2 normal = vec2( -dir.y, dir.x );", "    normal.x /= aspect;", "    normal *= .5 * w;", "", "    vec4 offset = vec4( normal * side, 0.0, 1.0 );", "    finalPosition.xy += offset.xy;", "", "    gl_Position = finalPosition;", "", c.ShaderChunk.logdepthbuf_vertex, c.ShaderChunk.fog_vertex && "    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );", c.ShaderChunk.fog_vertex, "}"].join("\r\n"), c.ShaderChunk.meshline_frag = ["", c.ShaderChunk.fog_pars_fragment, c.ShaderChunk.logdepthbuf_pars_fragment, "", "uniform sampler2D map;", "uniform sampler2D alphaMap;", "uniform float useMap;", "uniform float useAlphaMap;", "uniform float useDash;", "uniform float dashArray;", "uniform float dashOffset;", "uniform float dashRatio;", "uniform float visibility;", "uniform float alphaTest;", "uniform vec2 repeat;", "", "varying vec2 vUV;", "varying vec4 vColor;", "varying float vCounters;", "", "void main() {", "", c.ShaderChunk.logdepthbuf_fragment, "", "    vec4 c = vColor;", "    if( useMap == 1. ) c *= texture2D( map, vUV * repeat );", "    if( useAlphaMap == 1. ) c.a *= texture2D( alphaMap, vUV * repeat ).a;", "    if( c.a < alphaTest ) discard;", "    if( useDash == 1. ){", "        c.a *= ceil(mod(vCounters + dashOffset, dashArray) - (dashArray * dashRatio));", "    }", "    gl_FragColor = c;", "    gl_FragColor.a *= step(vCounters, visibility);", "", c.ShaderChunk.fog_fragment, "}"].join("\r\n"), d.prototype = Object.create(c.ShaderMaterial.prototype), d.prototype.constructor = d, d.prototype.isMeshLineMaterial = !0, d.prototype.copy = function(source) {
                        return c.ShaderMaterial.prototype.copy.call(this, source), this.lineWidth = source.lineWidth, this.map = source.map, this.useMap = source.useMap, this.alphaMap = source.alphaMap, this.useAlphaMap = source.useAlphaMap, this.color.copy(source.color), this.opacity = source.opacity, this.resolution.copy(source.resolution), this.sizeAttenuation = source.sizeAttenuation, this.near = source.near, this.far = source.far, this.dashArray.copy(source.dashArray), this.dashOffset.copy(source.dashOffset), this.dashRatio.copy(source.dashRatio), this.useDash = source.useDash, this.visibility = source.visibility, this.alphaTest = source.alphaTest, this.repeat.copy(source.repeat), this
                    }, "undefined" != typeof exports ? (t.exports && (exports = t.exports = {
                        MeshLine: l,
                        MeshLineMaterial: d
                    }), exports.MeshLine = l, exports.MeshLineMaterial = d) : (c.MeshLine = l, c.MeshLineMaterial = d)
                }).call(window)
            }.call(this, o(48)(t))
    }, , , , , function(t, e) {
        ! function() {
            "use strict";
            window.requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t, e) {
                window.setTimeout(t, 1e3 / 60)
            }, window.requestInterval = function(t, e) {
                if (!(window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame && window.mozCancelRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame)) return window.setInterval(t, e);
                var i = (new Date).getTime(),
                    a = new Object;
                return a.value = requestAnimFrame((function o() {
                    (new Date).getTime() - i >= e && (t.call(), i = (new Date).getTime()), a.value = requestAnimFrame(o)
                })), a
            }, window.clearRequestInterval = function(t) {
                window.cancelAnimationFrame ? window.cancelAnimationFrame(t.value) : window.webkitCancelAnimationFrame ? window.webkitCancelAnimationFrame(t.value) : window.webkitCancelRequestAnimationFrame ? window.webkitCancelRequestAnimationFrame(t.value) : window.mozCancelRequestAnimationFrame ? window.mozCancelRequestAnimationFrame(t.value) : window.oCancelRequestAnimationFrame ? window.oCancelRequestAnimationFrame(t.value) : window.msCancelRequestAnimationFrame ? window.msCancelRequestAnimationFrame(t.value) : clearInterval(t)
            }, window.requestTimeout = function(t, e) {
                if (!(window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame && window.mozCancelRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame)) return window.setTimeout(t, e);
                var i = (new Date).getTime(),
                    a = new Object;
                return a.value = requestAnimFrame((function o() {
                    (new Date).getTime() - i >= e ? t.call() : a.value = requestAnimFrame(o)
                })), a
            }, window.clearRequestTimeout = function(t) {
                window.cancelAnimationFrame ? window.cancelAnimationFrame(t.value) : window.webkitCancelAnimationFrame ? window.webkitCancelAnimationFrame(t.value) : window.webkitCancelRequestAnimationFrame ? window.webkitCancelRequestAnimationFrame(t.value) : window.mozCancelRequestAnimationFrame ? window.mozCancelRequestAnimationFrame(t.value) : window.oCancelRequestAnimationFrame ? window.oCancelRequestAnimationFrame(t.value) : window.msCancelRequestAnimationFrame ? window.msCancelRequestAnimationFrame(t.value) : clearTimeout(t)
            }
        }()
    }, function(t, e, o) {
        "use strict";
        o.r(e);
        o(24);
        ! function(t, e) {
            if ("IntersectionObserver" in t && "IntersectionObserverEntry" in t && "intersectionRatio" in t.IntersectionObserverEntry.prototype) "isIntersecting" in t.IntersectionObserverEntry.prototype || Object.defineProperty(t.IntersectionObserverEntry.prototype, "isIntersecting", {
                get: function() {
                    return this.intersectionRatio > 0
                }
            });
            else {
                var o = [];
                i.prototype.THROTTLE_TIMEOUT = 100, i.prototype.POLL_INTERVAL = null, i.prototype.USE_MUTATION_OBSERVER = !0, i.prototype.observe = function(t) {
                    if (!this._observationTargets.some((function(e) {
                            return e.element == t
                        }))) {
                        if (!t || 1 != t.nodeType) throw new Error("target must be an Element");
                        this._registerInstance(), this._observationTargets.push({
                            element: t,
                            entry: null
                        }), this._monitorIntersections(), this._checkForIntersections()
                    }
                }, i.prototype.unobserve = function(t) {
                    this._observationTargets = this._observationTargets.filter((function(e) {
                        return e.element != t
                    })), this._observationTargets.length || (this._unmonitorIntersections(), this._unregisterInstance())
                }, i.prototype.disconnect = function() {
                    this._observationTargets = [], this._unmonitorIntersections(), this._unregisterInstance()
                }, i.prototype.takeRecords = function() {
                    var t = this._queuedEntries.slice();
                    return this._queuedEntries = [], t
                }, i.prototype._initThresholds = function(t) {
                    var e = t || [0];
                    return Array.isArray(e) || (e = [e]), e.sort().filter((function(t, e, o) {
                        if ("number" != typeof t || isNaN(t) || t < 0 || t > 1) throw new Error("threshold must be a number between 0 and 1 inclusively");
                        return t !== o[e - 1]
                    }))
                }, i.prototype._parseRootMargin = function(t) {
                    var e = (t || "0px").split(/\s+/).map((function(t) {
                        var e = /^(-?\d*\.?\d+)(px|%)$/.exec(t);
                        if (!e) throw new Error("rootMargin must be specified in pixels or percent");
                        return {
                            value: parseFloat(e[1]),
                            unit: e[2]
                        }
                    }));
                    return e[1] = e[1] || e[0], e[2] = e[2] || e[0], e[3] = e[3] || e[1], e
                }, i.prototype._monitorIntersections = function() {
                    this._monitoringIntersections || (this._monitoringIntersections = !0, this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (r(t, "resize", this._checkForIntersections, !0), r(e, "scroll", this._checkForIntersections, !0), this.USE_MUTATION_OBSERVER && "MutationObserver" in t && (this._domObserver = new MutationObserver(this._checkForIntersections), this._domObserver.observe(e, {
                        attributes: !0,
                        childList: !0,
                        characterData: !0,
                        subtree: !0
                    }))))
                }, i.prototype._unmonitorIntersections = function() {
                    this._monitoringIntersections && (this._monitoringIntersections = !1, clearInterval(this._monitoringInterval), this._monitoringInterval = null, s(t, "resize", this._checkForIntersections, !0), s(e, "scroll", this._checkForIntersections, !0), this._domObserver && (this._domObserver.disconnect(), this._domObserver = null))
                }, i.prototype._checkForIntersections = function() {
                    var e = this._rootIsInDom(),
                        o = e ? this._getRootRect() : {
                            top: 0,
                            bottom: 0,
                            left: 0,
                            right: 0,
                            width: 0,
                            height: 0
                        };
                    this._observationTargets.forEach((function(i) {
                        var r = i.element,
                            s = c(r),
                            l = this._rootContainsTarget(r),
                            a = i.entry,
                            u = e && l && this._computeTargetAndRootIntersection(r, o),
                            h = i.entry = new n({
                                time: t.performance && performance.now && performance.now(),
                                target: r,
                                boundingClientRect: s,
                                rootBounds: o,
                                intersectionRect: u
                            });
                        a ? e && l ? this._hasCrossedThreshold(a, h) && this._queuedEntries.push(h) : a && a.isIntersecting && this._queuedEntries.push(h) : this._queuedEntries.push(h)
                    }), this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
                }, i.prototype._computeTargetAndRootIntersection = function(o, n) {
                    if ("none" != t.getComputedStyle(o).display) {
                        for (var i, r, s, l, u, h, p, d, m = c(o), g = a(o), f = !1; !f;) {
                            var v = null,
                                w = 1 == g.nodeType ? t.getComputedStyle(g) : {};
                            if ("none" == w.display) return;
                            if (g == this.root || g == e ? (f = !0, v = n) : g != e.body && g != e.documentElement && "visible" != w.overflow && (v = c(g)), v && (i = v, r = m, s = Math.max(i.top, r.top), l = Math.min(i.bottom, r.bottom), u = Math.max(i.left, r.left), d = l - s, !(m = (p = (h = Math.min(i.right, r.right)) - u) >= 0 && d >= 0 && {
                                    top: s,
                                    bottom: l,
                                    left: u,
                                    right: h,
                                    width: p,
                                    height: d
                                }))) break;
                            g = a(g)
                        }
                        return m
                    }
                }, i.prototype._getRootRect = function() {
                    var t;
                    if (this.root) t = c(this.root);
                    else {
                        var o = e.documentElement,
                            n = e.body;
                        t = {
                            top: 0,
                            left: 0,
                            right: o.clientWidth || n.clientWidth,
                            width: o.clientWidth || n.clientWidth,
                            bottom: o.clientHeight || n.clientHeight,
                            height: o.clientHeight || n.clientHeight
                        }
                    }
                    return this._expandRectByRootMargin(t)
                }, i.prototype._expandRectByRootMargin = function(t) {
                    var e = this._rootMarginValues.map((function(e, o) {
                            return "px" == e.unit ? e.value : e.value * (o % 2 ? t.width : t.height) / 100
                        })),
                        o = {
                            top: t.top - e[0],
                            right: t.right + e[1],
                            bottom: t.bottom + e[2],
                            left: t.left - e[3]
                        };
                    return o.width = o.right - o.left, o.height = o.bottom - o.top, o
                }, i.prototype._hasCrossedThreshold = function(t, e) {
                    var o = t && t.isIntersecting ? t.intersectionRatio || 0 : -1,
                        n = e.isIntersecting ? e.intersectionRatio || 0 : -1;
                    if (o !== n)
                        for (var i = 0; i < this.thresholds.length; i++) {
                            var r = this.thresholds[i];
                            if (r == o || r == n || r < o != r < n) return !0
                        }
                }, i.prototype._rootIsInDom = function() {
                    return !this.root || l(e, this.root)
                }, i.prototype._rootContainsTarget = function(t) {
                    return l(this.root || e, t)
                }, i.prototype._registerInstance = function() {
                    o.indexOf(this) < 0 && o.push(this)
                }, i.prototype._unregisterInstance = function() {
                    var t = o.indexOf(this); - 1 != t && o.splice(t, 1)
                }, t.IntersectionObserver = i, t.IntersectionObserverEntry = n
            }

            function n(t) {
                this.time = t.time, this.target = t.target, this.rootBounds = t.rootBounds, this.boundingClientRect = t.boundingClientRect, this.intersectionRect = t.intersectionRect || {
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    width: 0,
                    height: 0
                }, this.isIntersecting = !!t.intersectionRect;
                var e = this.boundingClientRect,
                    o = e.width * e.height,
                    n = this.intersectionRect,
                    i = n.width * n.height;
                this.intersectionRatio = o ? i / o : this.isIntersecting ? 1 : 0
            }

            function i(t, e) {
                var o, n, i, r = e || {};
                if ("function" != typeof t) throw new Error("callback must be a function");
                if (r.root && 1 != r.root.nodeType) throw new Error("root must be an Element");
                this._checkForIntersections = (o = this._checkForIntersections.bind(this), n = this.THROTTLE_TIMEOUT, i = null, function() {
                    i || (i = setTimeout((function() {
                        o(), i = null
                    }), n))
                }), this._callback = t, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(r.rootMargin), this.thresholds = this._initThresholds(r.threshold), this.root = r.root || null, this.rootMargin = this._rootMarginValues.map((function(t) {
                    return t.value + t.unit
                })).join(" ")
            }

            function r(t, e, o, n) {
                "function" == typeof t.addEventListener ? t.addEventListener(e, o, n || !1) : "function" == typeof t.attachEvent && t.attachEvent("on" + e, o)
            }

            function s(t, e, o, n) {
                "function" == typeof t.removeEventListener ? t.removeEventListener(e, o, n || !1) : "function" == typeof t.detatchEvent && t.detatchEvent("on" + e, o)
            }

            function c(t) {
                var e;
                try {
                    e = t.getBoundingClientRect()
                } catch (t) {}
                return e ? (e.width && e.height || (e = {
                    top: e.top,
                    right: e.right,
                    bottom: e.bottom,
                    left: e.left,
                    width: e.right - e.left,
                    height: e.bottom - e.top
                }), e) : {
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    width: 0,
                    height: 0
                }
            }

            function l(t, e) {
                for (var o = e; o;) {
                    if (o == t) return !0;
                    o = a(o)
                }
                return !1
            }

            function a(t) {
                var e = t.parentNode;
                return e && 11 == e.nodeType && e.host ? e.host : e
            }
        }(window, document)
    }, function(t, e, o) {
        "use strict";
        o.r(e),
            function(t) {
                o(47), o(110), o(51), o(24);
                var e = o(3);
                ! function(i, n) {
                    "function" == typeof define && o(57) ? define([], n) : "object" == Object(e.a)(t) && t.exports ? t.exports = n(i) : i.ua = n(i)
                }("undefined" != typeof self ? self : void 0, (function(i) {
                    i = i || window;
                    var t, s = function() {
                        this.version = "0.6.4", this.detects = ["mobile", "tablet", "desktop", "windows", "mac", "linux", "ios", "ipados", "android", "edge", "ie", "safari", "webkit", "chrome", "firefox", "opera", "webview", "touch"], this.init()
                    };
                    return (t = s.prototype).m = function(i) {
                        return -1 != this.userAgent.indexOf(i)
                    }, t.v = function(i) {
                        var t = i.split("."),
                            s = {};
                        return s.str = i, s.float = parseFloat(i) || 0, s.major = t.length > 0 && parseInt(t[0]) || 0, s.minor = t.length > 1 && parseInt(t[1]) || 0, s.build = t.length > 2 && parseInt(t[2]) || 0, s.revision = t.length > 3 && parseInt(t[3]) || 0, s
                    }, t.init = function(t) {
                        t = t || !1, this.ua = {}, this.userAgent = this.ua.userAgent = window.navigator.userAgent.toLowerCase(), this.ua.reInit = this.reInit.bind(this), this.ua.destroy = this.destroy.bind(this), this.isMobile(), this.isTablet(), this.isDesktop(), this.isWindows(), this.isMac(), this.isLinux(), this.isIOS(), this.isIPadOS(), this.isAndroid(), this.isEdge(), this.isIE(), this.isSafari(), this.isWebkit(), this.isChrome(), this.isFirefox(), this.isOpera(), this.isWebView(), this.isTouchDevice(), this.addClass(), t && (i.ua = this.ua)
                    }, t.isMobile = function() {
                        try {
                            this.ua.mobile = this.m("iphone") || this.m("ipod") || this.m("android") && this.m("mobile") || this.m("windows") && this.m("phone") || this.m("firefox") && this.m("mobile") || this.m("blackberry")
                        } catch (t) {}
                    }, t.isTablet = function() {
                        try {
                            this.ua.tablet = this.m("ipad") || this.m("macintosh") && "ontouchend" in document || this.m("android") && !this.m("mobile") || this.m("windows") && this.m("touch") && !this.m("tablet desktop") || this.m("firefox") && this.m("tablet") || this.m("kindle") || this.m("silk") || this.m("playbook")
                        } catch (t) {}
                    }, t.isDesktop = function() {
                        try {
                            this.ua.desktop = !this.m("iphone") && !(this.m("macintosh") && "ontouchend" in document) && !this.m("ipad") && !this.m("android") && (!this.m("windows") || !this.m("phone") && (!this.m("touch") || this.m("tablet desktop"))) && (!this.m("firefox") || !this.m("mobile") && !this.m("tablet")) && !this.m("blackberry") && !this.m("kindle") && !this.m("silk") && !this.m("playbook")
                        } catch (t) {}
                    }, t.isWindows = function() {
                        try {
                            this.ua.windows = this.m("windows"), this.ua.windows && (this.ua.windows = new Boolean(!0), this.userAgent.match(/nt ([\d.]+)/g) && (this.ua.windows.version = this.v(RegExp.$1)))
                        } catch (t) {}
                    }, t.isMac = function() {
                        try {
                            this.ua.mac = this.m("mac os x") && !this.m("iphone") && !this.m("ipad") && !this.m("ipod") && !("ontouchend" in document), this.ua.mac && (this.ua.mac = new Boolean(!0), this.userAgent.match(/ mac os x ([\d_\.]+)/g) && (this.ua.mac.version = this.v(RegExp.$1.replace(/_/g, "."))))
                        } catch (t) {}
                    }, t.isLinux = function() {
                        try {
                            this.ua.linux = this.m("linux") && !this.m("android")
                        } catch (t) {}
                    }, t.isIOS = function() {
                        try {
                            this.ua.ios = this.m("iphone") || this.m("ipad") || this.m("ipod"), this.ua.ios && (this.ua.ios = new Boolean(!0), this.userAgent.match(/ os ([\d_]+)/g) && (this.ua.ios.version = this.v(RegExp.$1.replace(/_/g, "."))))
                        } catch (t) {}
                    }, t.isIPadOS = function() {
                        try {
                            this.ua.ipados = !this.m("ipad") && this.m("macintosh") && "ontouchend" in document, this.ua.ipados && (this.ua.ipados = new Boolean(!0), this.userAgent.match(/version\/([\d.]+)/g) && (this.ua.ipados.version = this.v(RegExp.$1)))
                        } catch (t) {}
                    }, t.isAndroid = function() {
                        try {
                            this.ua.android = this.m("android"), this.ua.android && (this.ua.android = new Boolean(!0), this.userAgent.match(/android ([\d\.]+)/g) && (this.ua.android.version = this.v(RegExp.$1)))
                        } catch (t) {}
                    }, t.isEdge = function() {
                        try {
                            this.ua.edge = this.m("edge"), this.ua.edge && (this.ua.edge = new Boolean(!0), this.userAgent.match(/edge\/([\d.]+)/g) && (this.ua.edge.version = this.v(RegExp.$1)))
                        } catch (t) {}
                    }, t.isIE = function() {
                        try {
                            this.ua.ie = this.m("trident") || this.m("msie"), this.ua.ie && (this.ua.ie = new Boolean(!0), this.userAgent.match(/(msie|rv:?)\s?([\d.]+)/g) && (this.ua.ie.version = this.v(RegExp.$2)))
                        } catch (t) {}
                    }, t.isSafari = function() {
                        try {
                            this.ua.safari = this.m("safari") && !this.m("android") && !this.m("edge") && !this.m("opera") && !this.m("opr/d+.d+") && !this.m("chrome") && !this.m("crios"), this.ua.safari && (this.ua.safari = new Boolean(!0), this.userAgent.match(/version\/([\d.]+)/g) && (this.ua.safari.version = this.v(RegExp.$1)))
                        } catch (t) {}
                    }, t.isWebkit = function() {
                        try {
                            this.ua.webkit = this.m("applewebkit") && !this.m("safari") && !this.m("android") && !this.m("edge") && !this.m("opera") && !this.m("opr/d+.d+") && !this.m("chrome")
                        } catch (t) {}
                    }, t.isChrome = function() {
                        try {
                            this.ua.chrome = this.m("chrome") && !this.m("edge") && !this.m("opera") && !this.m("opr/d+.d+") || this.m("crios"), this.ua.chrome && (this.ua.chrome = new Boolean(!0), this.userAgent.match(/chrome\/([\d.]+)/g) && (this.ua.chrome.version = this.v(RegExp.$1)))
                        } catch (t) {}
                    }, t.isFirefox = function() {
                        try {
                            this.ua.firefox = this.m("firefox") && !this.m("edge"), this.ua.firefox && (this.ua.firefox = new Boolean(!0), this.userAgent.match(/firefox\/([\d.]+)/g) && (this.ua.firefox.version = this.v(RegExp.$1)))
                        } catch (t) {}
                    }, t.isOpera = function() {
                        try {
                            this.ua.opera = this.m("opera") || this.m("opr/d+.d+"), this.ua.opera && (this.ua.opera = new Boolean(!0), this.userAgent.match(/(opera|opr)\/([\d.]+)/g) && (this.ua.opera.version = this.v(RegExp.$2)))
                        } catch (t) {}
                    }, t.isWebView = function() {
                        try {
                            this.ua.webview = (this.m("iphone") || this.m("ipad") || this.m("ipod")) && (!this.m("safari") || this.m("fxios") || this.m("opios") || this.m("twitter") || this.m("fbav") || this.m("line"))
                        } catch (t) {}
                    }, t.isTouchDevice = function() {
                        try {
                            this.ua.touch = "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0
                        } catch (t) {}
                    }, t.reInit = function() {
                        this.destroy(), this.init(!0)
                    }, t.destroy = function() {
                        this.isClass && this.removeClass(), this.ua = null, this.userAgent = null
                    }, t.addClass = function() {
                        for (var i = document.documentElement, t = i.className, s = 0; s < this.detects.length; s++) {
                            var e = this.detects[s];
                            this.ua[e] ? t += " " + e : t += " no-" + e
                        }
                        i.className = t, this.isClass = !0
                    }, t.removeClass = function() {
                        for (var i = document.documentElement, t = 0; t < this.detects.length; t++) {
                            var s = this.detects[t];
                            this.ua[s] ? i.classList.remove(s) : i.classList.remove("no-" + s)
                        }
                        this.isClass = !1
                    }, (new s).ua
                }))
            }.call(this, o(48)(t))
    }, function(t, e, o) {
        "use strict";
        o.r(e),
            function(t) {
                var e = o(3);
                ! function(n, r) {
                    "function" == typeof define && o(57) ? define([], r) : "object" == Object(e.a)(t) && t.exports ? t.exports = r(n) : n.detect = r(n)
                }("undefined" != typeof self ? self : void 0, (function(t) {
                    t = t || window;
                    var o, i = function() {
                        this.version = "0.1.0", this.detects = ["webgl", "webgl2", "webp", "webm", "mp4", "ogg", "touch"], this.init()
                    };
                    return (o = i.prototype).init = function(e) {
                        e = e || !1, this.detect = {}, this.videoFormats = {
                            h264: 'video/mp4; codecs="avc1.42E01E"',
                            vp8: 'video/webm; codecs="vp8, opus"',
                            ogg: 'video/ogg; codecs="theora"'
                        }, this.detect.reInit = this.reInit.bind(this), this.detect.classes = this.addClass.bind(this), this.detect.destroy = this.destroy.bind(this), this.isWebGL(), this.isWebGL2(), this.isWebP(), this.isWebM(), this.isMP4(), this.isOgg(), this.isTouchDevice(), e && (t.detect = this.detect)
                    }, o.isWebGL = function() {
                        try {
                            this.detect.webgl = !!window.WebGLRenderingContext
                        } catch (t) {}
                    }, o.isWebGL2 = function() {
                        try {
                            var t = "object" == ("undefined" == typeof document ? "undefined" : Object(e.a)(document)) ? document.createElement("canvas") : {};
                            this.detect.webgl2 = t.getContext("webgl2")
                        } catch (t) {}
                    }, o.isWebP = function() {
                        try {
                            var t = "object" == ("undefined" == typeof document ? "undefined" : Object(e.a)(document)) ? document.createElement("canvas") : {};
                            t.width = t.height = 1, this.detect.webp = t.toDataURL ? 5 === t.toDataURL("image/webp").indexOf("image/webp") : new Boolean(!1)
                        } catch (t) {}
                    }, o.isWebM = function() {
                        try {
                            var t = document.createElement("video");
                            this.detect.webm = "probably" === t.canPlayType(this.videoFormats.vp8 || "vp8") ? new Boolean(!0) : new Boolean(!1)
                        } catch (t) {}
                    }, o.isMP4 = function() {
                        try {
                            var t = document.createElement("video");
                            this.detect.mp4 = "probably" === t.canPlayType(this.videoFormats.h264 || "h264") ? new Boolean(!0) : new Boolean(!1)
                        } catch (t) {}
                    }, o.isOgg = function() {
                        try {
                            var t = document.createElement("video");
                            this.detect.ogg = "probably" === t.canPlayType(this.videoFormats.ogg || "ogg") ? new Boolean(!0) : new Boolean(!1)
                        } catch (t) {}
                    }, o.isTouchDevice = function() {
                        try {
                            this.detect.touch = "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0
                        } catch (t) {}
                    }, o.reInit = function() {
                        this.destroy(), this.init(!0)
                    }, o.destroy = function() {
                        this.isClass && this.removeClass(), this.detect = null
                    }, o.addClass = function() {
                        for (var t = document.documentElement, e = t.className, i = 0; i < this.detects.length; i++) {
                            var s = this.detects[i];
                            this.detect[s] ? e += " " + s : e += " no-" + s
                        }
                        t.className = e, this.isClass = !0
                    }, o.removeClass = function() {
                        for (var t = document.documentElement, e = 0; e < this.detects.length; e++) {
                            var i = this.detects[e];
                            this.detect[i] ? t.classList.remove(i) : t.classList.remove("no-" + i)
                        }
                        this.isClass = !1
                    }, (new i).detect
                }))
            }.call(this, o(48)(t))
    }, function(t, e, o) {
        "use strict";
        o.r(e),
            function(t) {
                var e = o(3);
                ! function(n, r) {
                    "function" == typeof define && o(57) ? define([], r) : "object" == Object(e.a)(t) && t.exports ? t.exports = r() : n.manager = r()
                }("undefined" != typeof self ? self : void 0, (function() {
                    var t, o = function() {
                        this.version = "0.1.0"
                    };
                    return (t = o.prototype).init = function(t) {
                        var e = this;
                        if (t = t || {}, this.manifest = t.manifest || [], this.onProgress = t.onProgress || {}, this.onComplete = t.onComplete || {}, this.onError = t.onError || {}, this.num = {
                                progress: 0,
                                count: 0,
                                total: this.manifest.length
                            }, !this.manifest.length) return this._detectTypes(this.onComplete, "function", Function) && this.onComplete(), !1;
                        Array.prototype.forEach.call(this.manifest, (function(t, o) {
                            e._createImage(t, o)
                        }))
                    }, t.destroy = function() {
                        this.manifest = null, this.manifest = []
                    }, t._createImage = function(t, e) {
                        var o = this,
                            n = new Image;
                        n.src = t, n.onload = function() {
                            o._loadedImage(t, e)
                        }, n.onerror = function() {
                            console.warn("Broken image or wrong path: " + convertSrc), o._detectTypes(o.onError, "function", Function) && o.onError(t)
                        }
                    }, t._loadedImage = function(t, e) {
                        this.num.count++, this.num.progress = this.num.count / this.num.total, this._detectTypes(this.onProgress, "function", Function) && this.onProgress(this.num.progress, t), this.num.total === this.num.count && this._completedImages()
                    }, t._completedImages = function() {
                        this.num.progress = 1, this._detectTypes(this.onComplete, "function", Function) && this.onComplete(this.num.progress)
                    }, t._detectTypes = function(t, o, n) {
                        return Object(e.a)(t) === o || t instanceof n
                    }, new o
                }))
            }.call(this, o(48)(t))
    }, function(t, e, o) {
        "use strict";
        o.r(e),
            function(t) {
                o(24);
                var e = o(3);
                ! function(n, r) {
                    "function" == typeof define && o(57) ? define([], r) : "object" == Object(e.a)(t) && t.exports ? t.exports = r() : n.lazyImages = r()
                }("undefined" != typeof self ? self : void 0, (function() {
                    var t, o = function() {
                        this.version = "0.7.3"
                    };
                    return (t = o.prototype).init = function(t) {
                        var e = this;
                        if (t = t || {}, this.webp = this._detectWebP() && t.webp || !1, this.addClass = t.addClass || "is-loaded", this.inView = t.inView || !1, this.retina = t.retina || !1, this.maxDpr = t.maxDpr || 3, this.onProgress = t.onProgress || {}, this.onComplete = t.onComplete || {}, this.onError = t.onError || {}, this.observerOptions = {
                                root: t.root || null,
                                threshold: t.threshold || 0,
                                rootMargin: t.rootMargin || "0px"
                            }, this.nodes = document.querySelectorAll("[data-src], [data-src-background]"), this.images = [], this.num = {
                                progress: 0,
                                count: 0,
                                total: this.nodes.length
                            }, !this.nodes.length) return this._detectTypes(this.onComplete, "function", Function) && this.onComplete(), !1;
                        Array.prototype.forEach.call(this.nodes, (function(t, o) {
                            null !== t.getAttribute("data-ratio") && e._setAspectRatio(t), e.nodes.length === o + 1 && e.inView && e._observerInit()
                        })), this.inView || this._createAllImages()
                    }, t.destroy = function() {
                        this.nodes = null, this.images = null, this.images = [], this._observerDestroy()
                    }, t._createImage = function(t, e) {
                        var o, i, n, s, r = this,
                            a = new Image;
                        null !== t.getAttribute("data-src-background") ? (o = "background", i = t.getAttribute("data-src-background")) : t.getAttribute("data-src") && (o = "image", i = t.getAttribute("data-src"), n = t.getAttribute("data-srcset") || null, s = t.getAttribute("data-sizes") || null);
                        var c = r._convertImagePath(t, i);
                        if (null !== n) var u = r._convertSrcsetPath(t, n);
                        if ("image" === o) t.setAttribute("src", c), null !== n && t.setAttribute("srcset", u), null !== s && t.setAttribute("sizes", s);
                        else {
                            var l = t.getAttribute("style"),
                                h = null === l ? l = "" : h = l + " ",
                                d = h + "background-image: url(" + c + ");";
                            t.setAttribute("style", d)
                        }
                        a.src = c, a.onload = function() {
                            "image" === o ? (t.removeAttribute("data-src"), null !== n && t.removeAttribute("data-srcset"), null !== s && t.removeAttribute("data-sizes")) : t.removeAttribute("data-src-background"), void 0 !== t.getAttribute("data-ratio") && t.removeAttribute("data-ratio"), void 0 !== t.getAttribute("data-dpr") && t.removeAttribute("data-dpr"), void 0 !== t.getAttribute("data-type") && t.removeAttribute("data-type"), r._loadedImage(o, t, e, c)
                        }, a.onerror = function() {
                            console.warn("Broken image or wrong path: " + c), r._detectTypes(r.onError, "function", Function) && r.onError(t, c)
                        }, t.inView = !0
                    }, t._createAllImages = function() {
                        var t = this;
                        Array.prototype.forEach.call(this.nodes, (function(e, o) {
                            t._createImage(e, o)
                        }))
                    }, t._loadedImage = function(t, e, o, i) {
                        this._detectTypes(this.addClass, "string", String) && e.classList.add(this.addClass), this.images.push({
                            index: o,
                            type: t,
                            elem: e,
                            src: i
                        }), this.num.count++, this.num.progress = this.num.count / this.num.total, this._detectTypes(this.onProgress, "function", Function) && this.onProgress(this.num.progress, e, i), this.num.total === this.num.count && this._completedImages()
                    }, t._convertImagePath = function(t, e) {
                        var o = "",
                            i = String(e).split("."),
                            n = !!("webp" === t.getAttribute("data-type") && this._detectWebP() || this.webp && this._detectWebP());
                        if (this.retina) {
                            var s = Math.ceil(window.devicePixelRatio),
                                r = t.getAttribute("data-dpr") || null,
                                a = r ? Math.ceil(r) > this.maxDpr ? this.maxDpr : Math.ceil(r) : s > this.maxDpr ? this.maxDpr : s,
                                c = "@" + a + "x";
                            i[i.length - 1] = this._convertFileType(t, i, n);
                            var u = i[i.length - 2];
                            i[i.length - 2] = a > 1 && "svg" !== i[i.length - 1] ? u + c : u, i.forEach((function(t, e) {
                                o += t + (i.length !== e + 1 ? "." : "")
                            }))
                        } else i[i.length - 1] = this._convertFileType(t, i, n), i.forEach((function(t, e) {
                            o += t + (i.length !== e + 1 ? "." : "")
                        }));
                        return o
                    }, t._convertFileType = function(t, e, o) {
                        return function(t) {
                            return "default" === t ? e[e.length - 1] : void 0 !== t && "webp" !== t ? t : o ? "svg" === e[e.length - 1] ? "svg" : "webp" : "svg" === e[e.length - 1] ? "svg" : e[e.length - 1]
                        }(t.getAttribute("data-type") || void 0)
                    }, t._convertSrcsetPath = function(t, e) {
                        var o = this,
                            i = "",
                            n = String(e).split(",");
                        return n.forEach((function(e, s) {
                            for (var r = String(e).split(" "), a = [], c = 0; c < r.length; c++) "" !== r[c] && a.push(r[c]);
                            var u = a[a.length - 1],
                                l = a[a.length - 2],
                                h = o._convertImagePath(t, l);
                            i += h + " " + u + (n.length !== s ? ", " : "")
                        })), i
                    }, t._setAspectRatio = function(t) {
                        var e = t.getAttribute("data-ratio").split(":"),
                            o = e[0],
                            i = e[1] / o * 100;
                        t.setAttribute("style", "display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%;"), t.parentNode.setAttribute("style", "position: relative; padding-top:" + i + "%;")
                    }, t._completedImages = function() {
                        this.num.progress = 1, this._detectTypes(this.onComplete, "function", Function) && this.onComplete(this.num.progress)
                    }, t._observerInit = function() {
                        var t = this;
                        void 0 !== this.observer && this._observerDestroy(), this.observer = new IntersectionObserver(this._observerListener.bind(this), this.observerOptions), Array.prototype.forEach.call(this.nodes, (function(e) {
                            t.observer.observe(e)
                        }))
                    }, t._observerListener = function(t) {
                        var e = this;
                        t.forEach((function(t) {
                            var o = t.target;
                            switch (t.isIntersecting) {
                                case !0:
                                    if (o.inView) return;
                                    e._createImage(o)
                            }
                        }))
                    }, t._observerDestroy = function() {
                        var t = this;
                        Array.prototype.forEach.call(this.nodes, (function(e) {
                            t.observer.disconnect(e)
                        })), this.observer = null
                    }, t._detectTypes = function(t, o, n) {
                        return Object(e.a)(t) === o || t instanceof n
                    }, t._detectWebP = function() {
                        var t = "object" == ("undefined" == typeof document ? "undefined" : Object(e.a)(document)) ? document.createElement("canvas") : {};
                        return t.width = t.height = 1, !!t.toDataURL && 5 === t.toDataURL("image/webp").indexOf("image/webp")
                    }, new o
                }))
            }.call(this, o(48)(t))
    }, function(t, e, o) {
        "use strict";
        o.r(e),
            function(t) {
                var e = o(3);
                ! function(n, r) {
                    "function" == typeof define && o(57) ? define([], r) : "object" == Object(e.a)(t) && t.exports ? t.exports = r() : n.observer = r()
                }("undefined" != typeof self ? self : void 0, (function() {
                    var t, e = function() {
                        this.version = "0.6.2"
                    };
                    return (t = e.prototype).init = function(t) {
                        t = t || {}, this.elem = t.elem || "[data-so]", this.className = t.className || "is-active", this.call = t.call || {}, this.callName = t.callName || "data-so-call", this.options = {
                            root: t.root || null,
                            rootMargin: t.rootMargin || "0px",
                            threshold: t.threshold || 0
                        }, this._initIntersectionObserver()
                    }, t._initIntersectionObserver = function() {
                        this.targets = document.querySelectorAll(this.elem), this.observer = new IntersectionObserver(this._listener.bind(this), this.options);
                        for (var t = 0; this.targets.length > t; t++) {
                            var e = this.targets[t];
                            this.observer.observe(e)
                        }
                    }, t._listener = function(t) {
                        for (var e = 0; t.length > e; e++) {
                            var s = t[e],
                                i = s.target;
                            switch (s.isIntersecting) {
                                case !0:
                                    if (i.inViewClass || (i.inViewClass = !0, i.classList.add(this.className)), !i.inViewCall && i.getAttribute(this.callName)) {
                                        i.inViewCall = !0;
                                        var o = i.getAttribute(this.callName);
                                        "function" == typeof this.call[o] && this.call[o](i, !0)
                                    }
                                    "function" == typeof this.extendsIn && this.extendsIn(i), i.isInView = !0;
                                    break;
                                case !1:
                                    (i.getAttribute("data-so-repeat") || "" === i.getAttribute("data-so-repeat")) && (i.inViewClass = !1, i.classList.remove(this.className)), (i.getAttribute("data-so-call-repeat") || "" === i.getAttribute("data-so-call-repeat")) && (i.inViewCall = !1, o = i.getAttribute(this.callName), "function" == typeof this.call[o] && this.call[o](i, !1)), "function" == typeof this.extendsOut && this.extendsOut(i), i.isInView = !1
                            }
                        }
                    }, t.update = function() {
                        this.destroy(), this._initIntersectionObserver()
                    }, t.destroy = function(t) {
                        if (this.observer) {
                            for (var e = 0; this.targets.length > e; e++) {
                                var s = this.targets[e];
                                s.isInView = !1, s.inViewClass = !1, s.inViewCall = !1, t && s.classList.contains(this.className) && s.classList.remove(this.className), this.observer.disconnect(s)
                            }
                            this.observer = null
                        }
                    }, t.extendsIn = function() {
                        return !1
                    }, t.extendsOut = function() {
                        return !1
                    }, new e
                }))
            }.call(this, o(48)(t))
    }, function(t, e, o) {
        "use strict";
        o.r(e),
            function(t) {
                o(24), o(51);
                var e = o(3);
                ! function(n, r) {
                    "function" == typeof define && o(57) ? define([], r) : "object" == Object(e.a)(t) && t.exports ? t.exports = r() : n.fakeScroll = r()
                }("undefined" != typeof self ? self : void 0, (function() {
                    var t, o = function() {
                        this.version = "1.1.3"
                    };
                    return (t = o.prototype)._lerp = function(t, e, s) {
                        return e + (t - e) * s
                    }, t._clamp = function(t, e, s) {
                        return Math.min(s, Math.max(e, t))
                    }, t._ramp = function(t) {
                        return Math.max(t, 0)
                    }, t._getTranslateMatrix = function(t) {
                        var e = {};
                        if (window.getComputedStyle) {
                            var s = getComputedStyle(t),
                                i = s.transform || s.webkitTransform || s.mozTransform,
                                o = i.match(/^matrix3d\((.+)\)$/);
                            return o ? parseFloat(o[1].split(", ")[13]) : (o = i.match(/^matrix\((.+)\)$/), e.x = o ? parseFloat(o[1].split(", ")[4]) : 0, e.y = o ? parseFloat(o[1].split(", ")[5]) : 0, e)
                        }
                    }, t._getScrollY = function(t) {
                        return t.currentTarget === window ? void 0 !== window.pageYOffset ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop : t.currentTarget.scrollTop
                    }, t._setScrollY = function(t, e) {
                        t === window ? (document.documentElement || document.body.parentNode || document.body).scrollTop = e : t.scrollTop = e
                    }, t._setTransform = function(t, e) {
                        t.style.webkitTransform = e, t.style.msTransform = e, t.style.transform = e
                    }, t._setBounding = function(t, e) {
                        var s = t.getBoundingClientRect(),
                            i = s.top + (e || 0),
                            o = s.bottom + (e || 0),
                            n = s.left,
                            r = s.right,
                            c = s.width,
                            l = s.height;
                        return t.rect = s, t.rectTop = i, t.rectBottom = o, t.rectLeft = n, t.rectRight = r, t.rectWidth = c, t.rectHeight = l, t
                    }, t._margeNodeLists = function(t, e, s) {
                        return Array.prototype.slice.call(t).concat(Array.prototype.slice.call(e), Array.prototype.slice.call(s))
                    }, t._detectChrome = function() {
                        return /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)
                    }, t._detectMobile = function() {
                        this.isMobile = !!(this.width <= this.breakpoint || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)), this.isMobile ? this._normalScroll() : this._smoothScroll()
                    }, t.init = function(t) {
                        if (history.scrollRestoration && (history.scrollRestoration = "manual"), this.events = {}, this.throttle = {
                                resize: null,
                                scroll: null,
                                mouseup: null
                            }, this.isActive = !1, this.isMobile = !1, this.isCustomScrollbar = !1, this.isCustomScrollbarWrapDown = !1, this.isCustomScrollbarWrapHover = !1, this.isCustomScrollbarThumbDown = !1, this.isCustomScrollbarThumbHover = !1, this.isOnscroll = !0, this.isOnresize = !0, this.isOndragstart = !1, this.isOndrag = !1, this.isOndragEnd = !1, t = t || {}, this.listener = document.querySelector(t.listener) || window, this.wrapper = document.querySelector(t.wrapper) || document.querySelector("[data-fs-wrapper]"), this.container = document.querySelector(t.container) || document.querySelector("[data-fs-container]"), this.sectionElem = t.sectionElem || "data-fs-section", this.parallaxElem = t.parallaxElem || "data-fs-speed", this.inViewElem = t.inViewElem || "data-fs-inview", this.ease = t.ease <= 0 ? .01 : t.ease >= 1 ? 1 : t.ease || .1, this.offset = t.offset || 120, this.resizeInterval = t.resizeInterval || 150, this.scrollbarInterval = t.scrollbarInterval || 150, this.useCustomScrollbar = t.useCustomScrollbar || !1, this.inViewOptions = {
                                root: t.inViewRoot || null,
                                rootMargin: t.inViewRootMargin || "0px",
                                threshold: t.inViewThreshold || 0
                            }, this.breakpoint = t.breakpoint || 1024, this.extends = t.extends || null, t.mobile = t.mobile || {}, this.mobile = {
                                listener: document.querySelector(t.mobile.listener) || window,
                                ease: t.mobile.ease <= 0 ? .01 : t.mobile.ease >= 1 ? 1 : t.mobile.ease || 1,
                                offset: t.mobile.offset || 0
                            }, this.inViewOptionsMobile = {
                                root: t.mobile.inViewRoo || null,
                                rootMargin: t.mobile.inViewRootMargin || "0px",
                                threshold: t.mobile.inViewThreshold || 0
                            }, this.width = window.innerWidth, this.height = window.innerHeight, this.containerHeight = this.container.clientHeight, this.scrollTop = 0, this.scrollTopPrev = 0, this.translateY = 0, this.direction = "", this.html = document.getElementsByTagName("html")[0], this.html.setAttribute("data-fs-direction", this.direction), this.sections = document.querySelectorAll("[" + this.sectionElem + "]"), this.parallax = document.querySelectorAll("[" + this.parallaxElem + "]"), this.parallax.length || (this.parallax = !1), this.inViews = document.querySelectorAll("[" + this.inViewElem + "]"), this.inViews.length || (this.inViews = !1), this.observerElems = this._margeNodeLists(this.sections, this.parallax, this.inViews), this.observerElems.length) {
                            for (var e = 0; e < this.observerElems.length; e++) {
                                var s = this.observerElems[e];
                                this._setBounding(s)
                            }
                            this._initObserver()
                        }
                        this._handleEvents(), this._detectMobile(), this.useCustomScrollbar && !this.isMobile && this._detectChrome() && this._createCustomScrollbar()
                    }, t._createFakeHeight = function() {
                        this.fakeHeight = document.createElement("div"), this.fakeHeight.style.height = this.containerHeight + "px", this.fakeHeight.classList.add("fs-height"), this.fakeHeight.setAttribute("data-fs-height", ""), this.wrapper.appendChild(this.fakeHeight), this.container.style.position = "fixed"
                    }, t._destroyFakeHeight = function() {
                        this.container.removeAttribute("style"), this.fakeHeight.removeAttribute("style"), this.fakeHeight.parentNode.removeChild(this.fakeHeight), this.fakeHeight = null
                    }, t._createCustomScrollbar = function() {
                        this.isCustomScrollbar = !0, this.html.setAttribute("data-fs-scrollbar-active", ""), this.customScrollbarWrapper = document.createElement("div"), this.customScrollbarWrapper.style.height = this.height, this.customScrollbarWrapper.classList.add("fs-scrollbar"), this.customScrollbarWrapper.setAttribute("data-fs-scrollbar", ""), this.customScrollbarInner = document.createElement("div"), this.customScrollbarInner.style.height = "100%", this.customScrollbarInner.classList.add("fs-scrollbar-inner"), this.customScrollbarInner.setAttribute("data-scrollbar-inner", ""), this.customScrollbarWrapper.appendChild(this.customScrollbarInner), this.customScrollbarThumb = document.createElement("div"), this.customScrollbarThumb.style.height = this.height / this.containerHeight * this.height + "px", this.customScrollbarThumb.classList.add("fs-scrollbar-thumb"), this.customScrollbarThumb.setAttribute("data-fs-scrollbar-thumb", ""), this.customScrollbarInner.appendChild(this.customScrollbarThumb), this.wrapper.appendChild(this.customScrollbarWrapper), this._handleScrollbarEvents()
                    }, t._destroyCustomScrollbar = function() {
                        this.isCustomScrollbar && (this.isCustomScrollbar = !1, this._removeScrollbarEvents(), this.html.removeAttribute("data-fs-scrollbar-active"), this.customScrollbarWrapper.parentNode.removeChild(this.customScrollbarWrapper), this.customScrollbarWrapper = this.customScrollbarInner = this.customScrollbarThumb = null)
                    }, t._handleScrollbarEvents = function() {
                        this.mousedownWrap = this._onMouseDownWrap.bind(this), this.mousemoveWrap = this._onMouseMoveWrap.bind(this), this.mouseenterThumb = this._onMouseEnterThumb.bind(this), this.mouseleaveThumb = this._onMouseLeaveThumb.bind(this), this.mousedownThumb = this._onMouseDownThumb.bind(this), this.mousemoveThumb = this._onMouseMoveThumb.bind(this), this.mouseupCommon = this._onMouseUpCommon.bind(this), this.customScrollbarWrapper.addEventListener("mousedown", this.mousedownWrap, {
                            passive: !0
                        }), this.customScrollbarWrapper.addEventListener("mousemove", this.mousemoveWrap, {
                            passive: !0
                        }), this.customScrollbarWrapper.addEventListener("mouseup", this.mouseupCommon), this.customScrollbarThumb.addEventListener("mouseenter", this.mouseenterThumb), this.customScrollbarThumb.addEventListener("mouseleave", this.mouseleaveThumb), this.customScrollbarThumb.addEventListener("mousedown", this.mousedownThumb, {
                            passive: !0
                        }), this.customScrollbarThumb.addEventListener("mousemove", this.mousemoveThumb, {
                            passive: !0
                        }), this.customScrollbarThumb.addEventListener("mouseup", this.mouseupCommon), window.addEventListener("mouseleave", this.mouseupCommon), document.body.addEventListener("mouseleave", this.mouseupCommon)
                    }, t._removeScrollbarEvents = function() {
                        this.customScrollbarWrapper.removeEventListener("mousedown", this.mousedownWrap), this.customScrollbarWrapper.removeEventListener("mousemove", this.mousemoveWrap), this.customScrollbarWrapper.removeEventListener("mouseup", this.mouseupCommon), this.customScrollbarThumb.removeEventListener("mouseenter", this.mouseenterThumb), this.customScrollbarThumb.removeEventListener("mouseleave", this.mouseleaveThumb), this.customScrollbarThumb.removeEventListener("mousedown", this.mousedownThumb), this.customScrollbarThumb.removeEventListener("mousemove", this.mousemoveThumb), this.customScrollbarThumb.removeEventListener("mouseup", this.mouseupCommon), window.removeEventListener("mouseleave", this.mouseupCommon), document.body.removeEventListener("mouseleave", this.mouseupCommon)
                    }, t._onMouseDownWrap = function(t) {
                        if (!this.isCustomScrollbarThumbHover && !this.isCustomScrollbarDragging) {
                            this.html.setAttribute("data-fs-mousedown", ""), this.isCustomScrollbarWrapDown = !0;
                            var e = t.clientY / this.height * this.containerHeight;
                            this._setScrollY(this.listener, e), this.isOndragstart && this.trigger({
                                type: "dragstart",
                                data: {
                                    scrollY: this.scrollTop,
                                    translateY: this.translateY
                                }
                            }), this.isCustomScrollbarDragging = !0
                        }
                    }, t._onMouseMoveWrap = function(t) {
                        this._scrollbarDrag(t), this.isCustomScrollbarDragging && this.isOndrag && this.trigger({
                            type: "drag",
                            data: {
                                scrollY: this.scrollTop,
                                translateY: this.translateY
                            }
                        })
                    }, t._onMouseEnterThumb = function(t) {
                        this.isCustomScrollbarThumbHover = !0
                    }, t._onMouseLeaveThumb = function(t) {
                        this.isCustomScrollbarThumbHover = !1
                    }, t._onMouseDownThumb = function(t) {
                        this.isCustomScrollbarThumbDown = !0, this.html.setAttribute("data-fs-mousedown", ""), this._scrollbarDrag(t), this.isOndragstart && this.trigger({
                            type: "dragstart",
                            data: {
                                scrollY: this.scrollTop,
                                translateY: this.translateY
                            }
                        }), this.isCustomScrollbarDragging = !0
                    }, t._onMouseMoveThumb = function(t) {
                        this.isCustomScrollbarThumbHover = !0
                    }, t._scrollbarDrag = function(t) {
                        if (this.isCustomScrollbarThumbDown || this.isCustomScrollbarWrapDown) {
                            var e = this.customScrollbarThumb.clientHeight / 2 / this.height * 100,
                                s = t.clientY / this.height * 100,
                                i = this.containerHeight / 100 * (s - e);
                            this._setScrollY(this.listener, i)
                        }
                    }, t._onMouseUpCommon = function(t) {
                        var e = this;
                        this.isCustomScrollbarDragging && (this.html.removeAttribute("data-fs-mousedown"), this.isCustomScrollbarDragging = !1, this.isCustomScrollbarWrapDown = !1, this.isCustomScrollbarWrapHover = !1, this.isCustomScrollbarThumbDown = !1, this.isCustomScrollbarThumbHover = !1, this.isOndragend && (clearTimeout(this.throttle.mouseup), this.throttle.mouseup = setTimeout((function() {
                            e.trigger({
                                type: "dragend",
                                data: {
                                    scrollY: e.scrollTop,
                                    translateY: e.translateY
                                }
                            })
                        }), 1)))
                    }, t._initObserver = function() {
                        var t = this.isMobile ? this.inViewOptionsMobile : this.inViewOptions;
                        this.observer = new IntersectionObserver(this._observer.bind(this), t);
                        for (var e = 0; this.observerElems.length > e; e++) {
                            var s = this.observerElems[e];
                            this.observer.observe(s)
                        }
                    }, t._observer = function(t) {
                        for (var e = 0; t.length > e; e++) {
                            var s = t[e],
                                i = s.target;
                            switch (s.isIntersecting) {
                                case !0:
                                    i.isInView = !0;
                                    break;
                                case !1:
                                    i.isInView = !1
                            }
                        }
                    }, t._destroyObserver = function() {
                        if (this.observer) {
                            for (var t = 0; this.observerElems.length > t; t++) {
                                var e = this.observerElems[t];
                                this.observer.disconnect(e)
                            }
                            this.observer = null
                        }
                    }, t._isInView = function(t, e, s, i, o) {
                        var n = this.isMobile ? this.mobile.offset : this.offset,
                            r = Math.floor(s),
                            c = Math.floor(r + this.height),
                            l = Math.floor(e.rectTop),
                            a = Math.floor(e.rectBottom);
                        if (l <= c + n && a >= r) {
                            if (void 0 === i || void 0 === o) t && this._setTransform(e, "matrix(1, 0, 0, 1, 0," + -s + ")"), e.setAttribute("data-fs-visible", !0);
                            else {
                                var h = e.getAttribute("data-fs-delay") || 0,
                                    d = this._lerp(this.scrollTop, this.translateY, -this._clamp(1.5 * h, 0, 1.5)),
                                    u = Math.floor(d),
                                    b = Math.floor(u + this.height),
                                    m = l < this.height ? u * i : (b - l) * i,
                                    p = l < this.height ? u * o : (b - l) * o;
                                t && this._setTransform(e, "matrix(1, 0, 0, 1," + -m + "," + -p + ")")
                            }
                            return !0
                        }
                        return void 0 !== i && void 0 !== o || (e.setAttribute("data-fs-visible", !1), this._setTransform(e, "matrix(1, 0, 0, 1, 0, 0)")), !1
                    }, t._loop = function() {
                        this.isActive = !0, this._animate(), this.raf = requestAnimationFrame(this._loop.bind(this))
                    }, t._animate = function() {
                        var t = this.isMobile ? this.mobile.ease : this.ease;
                        this.translateY = t >= 1 ? this.scrollTop : this._lerp(this.scrollTop, this.translateY, t), this._sectionsUpdate(this.translateY), void 0 !== this.parallax && this.parallax.length && this._parallaxUpdate(this.translateY), this.isCustomScrollbar && this._scrollbarUpdate(this.translateY), "function" == typeof this.extends && this.extends(this.scrollTop, this.translateY)
                    }, t._sectionsUpdate = function(t) {
                        if (t < .001 && (this.translateY = 0), void 0 !== this.sections && this.sections.length)
                            for (var e = 0; e < this.sections.length; e++) {
                                var s = this.sections[e];
                                this._isInView(!this.isMobile, s, t)
                            }
                    }, t._parallaxUpdate = function(t) {
                        if (void 0 === this.parallax || !this.parallax.length) return !1;
                        for (var e = 0; e < this.parallax.length; e++) {
                            var s = this.parallax[e],
                                i = s.getAttribute(this.parallaxElem),
                                o = String(i).split("|"),
                                n = "" !== i ? {
                                    x: o[0],
                                    y: o[1]
                                } : {
                                    x: 0,
                                    y: 0
                                },
                                r = this._clamp(.5 * n.x, -.5, .5) || 0,
                                c = this._clamp(.5 * n.y, -.5, .5) || 0;
                            this._isInView(!0, s, t, r, c)
                        }
                    }, t._scrollbarUpdate = function(t) {
                        this.thumbHeight = this.customScrollbarThumb.clientHeight, this.thumbScrollArea = this.height - this.thumbHeight, this.thumbTranslateY = t / (this.containerHeight - this.height) * this.thumbScrollArea, this.thumbTranslateY <= 0 && (this.thumbTranslateY = 0), this.thumbTranslateY >= this.thumbScrollArea && (this.thumbTranslateY = this.thumbScrollArea), this._setTransform(this.customScrollbarThumb, "matrix(1, 0, 0, 1, 0," + this.thumbTranslateY + ")")
                    }, t._handleEvents = function() {
                        this.scroll = this._onScroll.bind(this), this.resize = this._onResize.bind(this), this.listener.addEventListener("scroll", this.scroll, {
                            passive: !0
                        }), this.listener !== this.mobile.listener && this.mobile.listener.addEventListener("scroll", this.scroll, {
                            passive: !0
                        }), window.addEventListener("resize", this.resize, !1), this.start()
                    }, t._removeEvents = function() {
                        this.listener.removeEventListener("scroll", this.scroll, {
                            passive: !0
                        }), this.listener !== this.mobile.listener && this.mobile.listener.removeEventListener("scroll", this.scroll, {
                            passive: !0
                        }), window.removeEventListener("resize", this.resize, !1), this.stop()
                    }, t._onScroll = function(t) {
                        var e = this;
                        this.isActive && (this.scrollTop = this._getScrollY(t), this.isOnscroll && this.trigger({
                            type: "scroll",
                            data: {
                                scrollY: e.scrollTop,
                                translateY: e.translateY
                            }
                        }), this.scrollTop >= this.scrollTopPrev ? this.direction = "down" : this.direction = "up", this.html.setAttribute("data-fs-direction", this.direction), this.scrollTopPrev = this.scrollTop, this.html.setAttribute("data-fs-scrolling", ""), clearTimeout(this.throttle.scroll), this.throttle.scroll = setTimeout((function() {
                            e.html.removeAttribute("data-fs-scrolling")
                        }), this.scrollbarInterval))
                    }, t._onResize = function() {
                        var t = this;
                        clearTimeout(this.throttle.resize), this.throttle.resize = setTimeout((function() {
                            t.isActive && (t.width = window.innerWidth, t.height = window.innerHeight, t._detectMobile(), t.update(), t.isOnresize && t.trigger({
                                type: "resize",
                                data: {
                                    windowWidth: this.width,
                                    windowHeight: this.height,
                                    scrollY: t.scrollTop,
                                    translateY: t.translateY
                                }
                            }))
                        }), this.resizeInterval)
                    }, t._normalScroll = function() {
                        if (this.fakeHeight && this._destroyFakeHeight(), this.sections.length)
                            for (var t = 0; t < this.sections.length; t++) this.sections[t].removeAttribute("style")
                    }, t._smoothScroll = function() {
                        this.fakeHeight || this._createFakeHeight()
                    }, t.start = function() {
                        this._loop()
                    }, t.stop = function() {
                        this.isActive = !1, cancelAnimationFrame(this.raf)
                    }, t.update = function() {
                        if (this.setPosition(this.scrollTop), this.containerHeight = this.container.clientHeight, this.isMobile || (this.container.style.position = "fixed", this.fakeHeight.style.height = this.container.clientHeight + "px"), !this.isMobile && this.useCustomScrollbar && this._detectChrome() && (this.customScrollbarWrapper || this._createCustomScrollbar(), this.customScrollbarThumb && (this.customScrollbarThumb.style.height = this.height / this.containerHeight * this.height + "px")), this.isMobile && this.customScrollbarWrapper && this._destroyCustomScrollbar(), this.sections = this.parallax = this.inViews = null, this.sections = document.querySelectorAll("[" + this.sectionElem + "]"), this.parallax = document.querySelectorAll("[" + this.parallaxElem + "]"), this.inViews = document.querySelectorAll("[" + this.inViewElem + "]"), this.parallax.length || (this.parallax = !1), this.inViews.length || (this.inViews = !1), this.observerElems = this._margeNodeLists(this.sections, this.parallax, this.inViews), this.observerElems.length) {
                            this._destroyObserver();
                            for (var t = 0; t < this.observerElems.length; t++) {
                                var e = this.observerElems[t];
                                this._setTransform(e, "matrix(1, 0, 0, 1, 0, 0)"), this.isMobile ? this._setBounding(e, this.translateY) : this._setBounding(e)
                            }
                            this._initObserver()
                        }
                    }, t.destroy = function() {
                        if (this._removeEvents(), this.html.removeAttribute("data-fs-direction"), this.html.removeAttribute("data-fs-scrolling"), this.html.removeAttribute("data-fs-mousedown"), this.fakeHeight && this._destroyFakeHeight(), this.customScrollbarWrapper && this._destroyCustomScrollbar(), this.observerElems.length) {
                            this._destroyObserver();
                            for (var t = 0; t < this.observerElems.length; t++) {
                                var e = this.observerElems[t];
                                e.removeAttribute("data-fs-visible"), e.removeAttribute("style")
                            }
                        }
                    }, t.getPosition = function() {
                        return this.scrollTop
                    }, t.getTranslate = function() {
                        return this.translateY
                    }, t.setPosition = function(t) {
                        document.documentElement.scrollTop = t, this.scrollTop = t, this.translateY = t, this._setScrollY(this.listener, t), this._setScrollY(this.mobile.listener, t)
                    }, t.extends = function(t, e) {
                        return !1
                    }, t.on = function(t, e) {
                        var s = this.events;
                        return s[t] ? s[t].push(e) : s[t] = [e], this["isOn" + t] = !0, e
                    }, t.off = function(t, e) {
                        var s, i = this.events;
                        if (i && i[t]) {
                            var o, n = (s = i[t]).length;
                            for (o = 0; o < n; o++) {
                                s[o] === e && s.splice(o, 1), this["isOn" + t] = !1;
                                break
                            }
                        }
                    }, t.trigger = function(t) {
                        var o, s, i = this.events;
                        if ("string" == typeof s) {
                            if (!i[t]) return;
                            o = i[t], s = {
                                type: t
                            }
                        } else if ("object" == Object(e.a)(t)) {
                            if (!i[t.type]) return;
                            o = i[t.type], s = Object.assign({}, t)
                        }
                        var n, r = o.length;
                        for (n = 0; n < r; n++) o[n](s)
                    }, new o
                }))
            }.call(this, o(48)(t))
    }, function(t, e, o) {
        (function(t) {
            "use strict";
            t.info = {
                version: "2.10.2",
                update: "2019-12-15",
                develop: "Garden Eight"
            }, t.configs = {
                breakpoints: {
                    mobile: 680,
                    tablet: 1024,
                    largeTablet: 1194,
                    laptop: 1280,
                    desktop: 1440,
                    largeDesktop: 1600,
                    fullHD: 1920
                },
                emails: {
                    contact: "hello[at]helixes[dot]co",
                    jobs: "jobs[at]helixes[dot]co"
                }
            }, t.path = {}, t.path.baseUrl = "https://helixes.s3.amazonaws.com/web/assets";
            var e = detect.webp ? "webp" : "jpg",
                o = !detect.webm || ua.ios || ua.ipados ? "mp4" : "webm";
            t.path = {
                image: {
                    creative: {
                        1: "".concat(t.path.baseUrl, "/img/solutions/creative/creative-1.").concat(e),
                        2: "".concat(t.path.baseUrl, "/img/solutions/creative/creative-2.").concat(e),
                        3: "".concat(t.path.baseUrl, "/img/solutions/creative/creative-3.").concat(e),
                        4: "".concat(t.path.baseUrl, "/img/solutions/creative/creative-4.").concat(e),
                        5: "".concat(t.path.baseUrl, "/img/solutions/creative/creative-5.").concat(e)
                    }
                },
                video: {
                    solutions: {
                        mission: {
                            movie: "".concat(t.path.baseUrl, "/video/solutions/top/mission.").concat(o),
                            poster: "".concat(t.path.baseUrl, "/img/solutions/top/poster-mission.").concat(e)
                        },
                        creative: {
                            movie: "".concat(t.path.baseUrl, "/video/solutions/top/creative.").concat(o),
                            poster: "".concat(t.path.baseUrl, "/img/solutions/top/poster-creative.").concat(e)
                        },
                        services: {
                            movie: "".concat(t.path.baseUrl, "/video/solutions/top/services.").concat(o),
                            poster: "".concat(t.path.baseUrl, "/img/solutions/top/poster-services.").concat(e)
                        }
                    },
                    services: {
                        maxilla: {
                            logo: "".concat(t.path.baseUrl, "/img/canvas/tex-maxilla.png"),
                            movie: "".concat(t.path.baseUrl, "/video/solutions/services/services-maxilla.").concat(o),
                            poster: "".concat(t.path.baseUrl, "/img/solutions/services/poster-maxilla.").concat(e)
                        },
                        roppyaku: {
                            logo: "".concat(t.path.baseUrl, "/img/canvas/tex-roppyaku.png"),
                            movie: "".concat(t.path.baseUrl, "/video/solutions/services/services-roppyaku.").concat(o),
                            poster: "".concat(t.path.baseUrl, "/img/solutions/services/poster-roppyaku.").concat(e)
                        },
                        na: {
                            logo: "".concat(t.path.baseUrl, "/img/canvas/tex-na.png"),
                            movie: "".concat(t.path.baseUrl, "/video/solutions/services/services-na.").concat(o),
                            poster: "".concat(t.path.baseUrl, "/img/solutions/services/poster-na.").concat(e)
                        },
                        sic: {
                            logo: "".concat(t.path.baseUrl, "/img/canvas/tex-sic.png"),
                            movie: "".concat(t.path.baseUrl, "/video/solutions/services/services-sic.").concat(o),
                            poster: "".concat(t.path.baseUrl, "/img/solutions/services/poster-sic.").concat(e)
                        }
                    },
                    careers: {
                        logo: "".concat(t.path.baseUrl, "/img/canvas/tex-helixes.png"),
                        movie: "".concat(t.path.baseUrl, "/video/careers/careers.").concat(o),
                        poster: "".concat(t.path.baseUrl, "/img/careers/poster-careers.").concat(e)
                    }
                },
                urls: {
                    gmaps: "https://goo.gl/maps/Wg14rHnsyy2tmVR17",
                    profileJa: "https://docs.google.com/presentation/d/1VCAORAWlHpMNoqHXx_MUo1VopiM1GAmbpf-T_jiLqxQ/edit?usp=sharing",
                    profileEn: "https://docs.google.com/presentation/d/1VCAORAWlHpMNoqHXx_MUo1VopiM1GAmbpf-T_jiLqxQ/edit?usp=sharing"
                }
            }, t.device = function() {
                return ua.desktop ? "desktop" : ua.tablet ? "tablet" : ua.mobile ? "mobile" : void 0
            }, t.vars = {
                _scrollY: 0,
                _translateY: 0,
                scrollY: 0,
                translateY: 0,
                footerTop: 0,
                footerHeight: 0,
                width: window.innerWidth,
                height: window.innerHeight,
                device: t.device()
            }, t.doms = {
                html: document.documentElement,
                body: document.body,
                links: [],
                gl: null
            }, t.fn = t.el = {}, t.el = function(t) {
                var e = Array.prototype.slice.call(document.querySelectorAll(t));
                return 1 === e.length ? e[0] : e
            }, t.el.closest = function(t, e) {
                return (t.closest || function(e) {
                    do {
                        if ((t.matches || t.msMatchesSelector).call(t, e)) return t;
                        t = t.parentElement || t.parentNode
                    } while (null !== t && 1 === t.nodeType);
                    return null
                }).call(t, e)
            }, window.mouse = t.mouse = {
                _x: 0,
                _y: 0,
                x: 0,
                y: 0,
                px: 0,
                py: 0,
                ox: 0,
                oy: 0,
                lx: 0,
                ly: 0,
                tx: 0,
                ty: 0
            }, t.configs.observerSettings = function() {
                return {
                    threshold: 0,
                    rootMargin: "-15px",
                    className: "is-active"
                }
            }, t.configs.helixWaveSettings = function() {
                return {
                    elem: ".js-helix-wave",
                    colors: ["#FF4E50", "#FF9B9C", "#FFCECE"],
                    diff: .75,
                    amplitude: 6,
                    frequency: 10,
                    wavelength: 80,
                    lineWidth: 1,
                    lineInterval: 20,
                    lineShift: 5
                }
            }, t.slider = null
        })(window.$g = window.$g || {})
    }, function(t, e, o) {
        (function(t) {
            "use strict";
            t.fn.transition = {
                beforeEnter: function(t) {
                    t.el
                },
                enter: function(e) {
                    var o = e.el,
                        n = e.done;
                    gsap.set(o, {
                        opacity: 0
                    }), gsap.set("#js-dom-canvas", {
                        clearProps: "opacity"
                    }), gsap.fromTo([o, ".g-footer"], {
                        opacity: 0
                    }, {
                        duration: .25,
                        opacity: 1,
                        clearProps: "opacity",
                        ease: "power0.out",
                        onComplete: function() {
                            n(), t.doms.html.classList.remove("is-transition"), t.doms.html.classList.remove("is-fixed"), t.pointer && t.pointer.update()
                        }
                    })
                },
                leave: function(e) {
                    var o = e.el,
                        n = e.done,
                        r = e.callback;
                    t.doms.html.classList.add("is-transition"), t.doms.html.classList.add("is-fixed"), t.pointer && t.pointer.type("clear"), gsap.to([".g-footer"], {
                        duration: .1,
                        opacity: 0,
                        ease: "power0.out"
                    }), gsap.to([o, "#js-dom-canvas"], {
                        duration: .15,
                        opacity: 0,
                        delay: .1,
                        ease: "power0.out",
                        onComplete: function() {
                            r(), n()
                        }
                    })
                }
            }
        })($g)
    }],
    [
        [168, 22, 1, 23]
    ]
]);