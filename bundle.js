/*! For license information please see bundle.js.LICENSE.txt */
( () => {
    var e = {
        9: () => {
            $(document).ready(function() {
                $("#icon").click(function() {
                    $("nav ul").toggleClass("show")
                });
                var e = localStorage.getItem("mode");
                function t(e) {
                    $("body").removeClass("dark-mode light-mode").addClass(e),
                    $("nav").removeClass("dark-mode light-mode").addClass(e),
                    $("section").removeClass("dark-mode light-mode").addClass(e),
                    $("footer").removeClass("dark-mode light-mode").addClass(e),
                    $(".footer-row a").removeClass("dark-mode light-mode").addClass(e),
                    $(".section-info").removeClass("dark-mode light-mode").addClass(e),
                    $(".menu-bar_languages-dropdown").removeClass("dark-mode light-mode").addClass(e),
                    $(".menu-bar_language-option").removeClass("dark-mode light-mode").addClass(e),
                    $("#recent-changes").removeClass("dark-mode light-mode").addClass(e),
                    $("#signup-div").removeClass("dark-mode light-mode").addClass(e),
                    $(".commit-list .commit, .commit-info, .commit-title, .author-name, .commit-date, .avatar").each(function() {
                        $(this).removeClass("dark-mode light-mode").addClass(e)
                    }),
                    $("#error-message").removeClass("dark-mode light-mode").addClass(e)
                }
                e && t(e),
                $("#darkModeToggle").click(function() {
                    var e = $("body").hasClass("dark-mode") ? "light-mode" : "dark-mode";
                    localStorage.setItem("mode", e),
                    t(e)
                })
            })
        }
        ,
        56: (e, t, n) => {
            "use strict";
            e.exports = function(e) {
                var t = n.nc;
                t && e.setAttribute("nonce", t)
            }
        }
        ,
        72: e => {
            "use strict";
            var t = [];
            function n(e) {
                for (var n = -1, r = 0; r < t.length; r++)
                    if (t[r].identifier === e) {
                        n = r;
                        break
                    }
                return n
            }
            function r(e, r) {
                for (var i = {}, a = [], l = 0; l < e.length; l++) {
                    var u = e[l]
                      , c = r.base ? u[0] + r.base : u[0]
                      , s = i[c] || 0
                      , f = "".concat(c, " ").concat(s);
                    i[c] = s + 1;
                    var p = n(f)
                      , d = {
                        css: u[1],
                        media: u[2],
                        sourceMap: u[3],
                        supports: u[4],
                        layer: u[5]
                    };
                    if (-1 !== p)
                        t[p].references++,
                        t[p].updater(d);
                    else {
                        var h = o(d, r);
                        r.byIndex = l,
                        t.splice(l, 0, {
                            identifier: f,
                            updater: h,
                            references: 1
                        })
                    }
                    a.push(f)
                }
                return a
            }
            function o(e, t) {
                var n = t.domAPI(t);
                return n.update(e),
                function(t) {
                    if (t) {
                        if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap && t.supports === e.supports && t.layer === e.layer)
                            return;
                        n.update(e = t)
                    } else
                        n.remove()
                }
            }
            e.exports = function(e, o) {
                var i = r(e = e || [], o = o || {});
                return function(e) {
                    e = e || [];
                    for (var a = 0; a < i.length; a++) {
                        var l = n(i[a]);
                        t[l].references--
                    }
                    for (var u = r(e, o), c = 0; c < i.length; c++) {
                        var s = n(i[c]);
                        0 === t[s].references && (t[s].updater(),
                        t.splice(s, 1))
                    }
                    i = u
                }
            }
        }
        ,
        113: e => {
            "use strict";
            e.exports = function(e, t) {
                if (t.styleSheet)
                    t.styleSheet.cssText = e;
                else {
                    for (; t.firstChild; )
                        t.removeChild(t.firstChild);
                    t.appendChild(document.createTextNode(e))
                }
            }
        }
        ,
        115: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => l
            });
            var r = n(601)
              , o = n.n(r)
              , i = n(314)
              , a = n.n(i)()(o());
            a.push([e.id, "section {\n    background: white;\n    color: #111111;\n    padding: 20px;\n    align-items: center;\n    text-align: center;\n}\n\nsection.dark-mode {\n    background-color: #111111;\n    color: white;\n}\n\n.section-content {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n}\n\n.image-card {\n    text-align: center;\n    margin: 0 10px;\n    flex: 0 0 calc(50% - 20px);\n    max-width: 300px;\n    margin-bottom: 20px;\n}\n.image-card img {\n    width: 100%;\n    max-width: 300px;\n    height: auto;\n    border-radius: 5px;\n}\n.image-card h3 {\n    margin-top: 10px;\n    font-size: 18px;\n}\n.image-card a {\n    display: block;\n    margin-top: 5px;\n    color: blue;\n    text-decoration: none;\n}\n.image-card a:hover {\n    text-decoration: underline;\n}\n.page-wrapper {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    min-height: 100vh;\n}", ""]);
            const l = a
        }
        ,
        146: (e, t, n) => {
            "use strict";
            var r = n(363)
              , o = {
                childContextTypes: !0,
                contextType: !0,
                contextTypes: !0,
                defaultProps: !0,
                displayName: !0,
                getDefaultProps: !0,
                getDerivedStateFromError: !0,
                getDerivedStateFromProps: !0,
                mixins: !0,
                propTypes: !0,
                type: !0
            }
              , i = {
                name: !0,
                length: !0,
                prototype: !0,
                caller: !0,
                callee: !0,
                arguments: !0,
                arity: !0
            }
              , a = {
                $$typeof: !0,
                compare: !0,
                defaultProps: !0,
                displayName: !0,
                propTypes: !0,
                type: !0
            }
              , l = {};
            function u(e) {
                return r.isMemo(e) ? a : l[e.$$typeof] || o
            }
            l[r.ForwardRef] = {
                $$typeof: !0,
                render: !0,
                defaultProps: !0,
                displayName: !0,
                propTypes: !0
            },
            l[r.Memo] = a;
            var c = Object.defineProperty
              , s = Object.getOwnPropertyNames
              , f = Object.getOwnPropertySymbols
              , p = Object.getOwnPropertyDescriptor
              , d = Object.getPrototypeOf
              , h = Object.prototype;
            e.exports = function e(t, n, r) {
                if ("string" != typeof n) {
                    if (h) {
                        var o = d(n);
                        o && o !== h && e(t, o, r)
                    }
                    var a = s(n);
                    f && (a = a.concat(f(n)));
                    for (var l = u(t), m = u(n), g = 0; g < a.length; ++g) {
                        var y = a[g];
                        if (!(i[y] || r && r[y] || m && m[y] || l && l[y])) {
                            var b = p(n, y);
                            try {
                                c(t, y, b)
                            } catch (e) {}
                        }
                    }
                }
                return t
            }
        }
        ,
        159: e => {
            "use strict";
            e.exports = function(e) {
                var t = document.createElement("style");
                return e.setAttributes(t, e.attributes),
                e.insert(t, e.options),
                t
            }
        }
        ,
        165: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => l
            });
            var r = n(601)
              , o = n.n(r)
              , i = n(314)
              , a = n.n(i)()(o());
            a.push([e.id, "#signup-div{\n    border: 1px solid #ccc;\n    background-color: #fff;\n    padding: 16px;\n    width: 450px;\n    border-radius: 15px;\n    box-shadow: 0 0 6px rgba(0, 0, 0, 0.05);\n    margin: 0 auto;\n    align-items: center;\n    text-align: center;\n}\n\n.dark-mode #signup-div{\n    border-color: #333;\n    background-color: #1e1e1e;\n}\n\n#signup-div #signup-submit-button{\n    border: 1px solid #80F41A;\n    background-color: #80F41A;\n    padding: 10px;\n    border-radius: 15px;\n    box-shadow: 0 0 6px rgba(0, 0, 0, 0.05);\n    margin: 0 auto;\n    color: white;\n    cursor: pointer;\n}\n\n#signup-div #signup-email-input,\n#signup-div #signup-password-input,\n#signup-div #signup-username-input{\n    border: 1px solid #ccc;\n    background-color: #fff;\n    padding: 10px;\n    border-radius: 15px;\n    box-shadow: 0 0 6px rgba(0, 0, 0, 0.05);\n    margin: 0 auto;\n    cursor: pointer;\n}\n\n.dark-mode #signup-div #signup-email-input,\n.dark-mode #signup-div #signup-password-input,\n.dark-mode #signup-div #signup-username-input{\n    border-color: #333;\n    background-color: #1e1e1e;\n    color: white;\n}", ""]);
            const l = a
        }
        ,
        198: () => {
            $(document).ready(function() {
                !function(e, t) {
                    if (document.querySelector(e))
                        return t();
                    var n = new MutationObserver(function() {
                        document.querySelector(e) && (n.disconnect(),
                        t())
                    }
                    );
                    n.observe(document.body, {
                        childList: !0,
                        subtree: !0
                    })
                }(".commit-list", function() {
                    console.log("Fetching commits...");
                    var e = "dinosaurmod"
                      , t = "https://api.github.com/orgs/".concat(e, "/repos?per_page=16")
                      , n = [];
                    $.ajax({
                        url: t,
                        method: "GET",
                        success: function(t) {
                            var r = 0;
                            if (0 === t.length)
                                return console.log("No repositories found"),
                                void $("#error-message").show();
                            console.log("Repositories fetched:", t),
                            t.forEach(function(o) {
                                var i = "https://api.github.com/repos/".concat(e, "/").concat(o.name, "/commits?per_page=6");
                                $.ajax({
                                    url: i,
                                    method: "GET",
                                    success: function(e) {
                                        if (console.log("Commits fetched for repo:", o.name, e),
                                        n = n.concat(e),
                                        ++r === t.length) {
                                            if (0 === n.length)
                                                return void $("#error-message").show();
                                            console.log("All repositories processed"),
                                            n.sort(function(e, t) {
                                                return new Date(t.commit.author.date) - new Date(e.commit.author.date)
                                            }),
                                            n.slice(0, 6).forEach(function(e) {
                                                var t = e.commit.message
                                                  , n = e.html_url
                                                  , r = e.author ? e.author.login : "Unknown"
                                                  , o = e.commit.author.name
                                                  , i = e.author ? e.author.avatar_url : "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                                                  , a = new Date(e.commit.author.date).toLocaleString();
                                                console.log("Appending commit:", t),
                                                $(".commit-list").append('\n                      <li class="commit">\n                        <img src="'.concat(i, '" alt="avatar" class="avatar">\n                        <div class="commit-info">\n                          <div class="commit-title">\n                            <a href="').concat(n, '" target="_blank">').concat(t, '</a>\n                          </div>\n                          <div class="author-name">By ').concat(o, " (").concat(r, ')</div>\n                          <div class="commit-date">').concat(a, "</div>\n                        </div>\n                      </li>\n                    "))
                                            })
                                        }
                                    },
                                    error: function() {
                                        ++r === t.length && 0 === n.length && $("#error-message").show()
                                    }
                                })
                            })
                        },
                        error: function() {
                            $("#error-message").show()
                        }
                    })
                })
            })
        }
        ,
        199: () => {
            $(document).ready(function() {
                var e = ["de", "en", "es", "es-419"]
                  , t = (navigator.language || "en").toLowerCase()
                  , n = t.includes("es-") ? t : t.split("-")[0]
                  , r = localStorage.getItem("chosenLocale");
                e.includes(r) || (r = e.includes(t) ? t : e.includes(n) ? n : "en",
                localStorage.setItem("chosenLocale", r)),
                $("#languagesListToggle").click(function() {
                    $("#languagesDropdown").toggleClass("visible")
                }),
                $(".menu-bar_language-option").click(function() {
                    var e = $(this).data("language");
                    localStorage.setItem("chosenLocale", e),
                    window.location.reload()
                })
            })
        }
        ,
        211: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => l
            });
            var r = n(601)
              , o = n.n(r)
              , i = n(314)
              , a = n.n(i)()(o());
            a.push([e.id, "* {\n    padding: 0;\n    margin: 0;\n    text-decoration: none;\n    list-style: none;\n}\n\nbody {\n    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;/*'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;*/\n    background-color: white;\n    color: #111111;\n}\n\na.active, a:hover, li #darkModeToggle.active {\n    border: 0px solid white;\n    background-color: rgba(0, 0, 0, 0.125);\n    /* transition: 0.5s; */\n}\n\nli #darkModeToggle img {\n    width: 30px;\n    height: 30px;\n    vertical-align: middle; /* Align the image vertically */\n    cursor: pointer;\n}\n\nli #IconImage img {\n    width: 40px;\n    height: 40px;\n    vertical-align: middle; /* Align the image vertically */\n    transition: transform 0.3s ease-in-out; /* Add a smooth transition effect */\n}\n\n#IconImage img:hover {\n    background-color: transparent;\n    transform: scale(1.1);\n}\n\n#IconImage img:not(:hover) {\n    background-color: transparent;\n    transform: scale(1); /* Return to regular size when not hovered */\n}\n\nbody.dark-mode {\n    background-color: #111111;\n    color: white;\n}", ""]);
            const l = a
        }
        ,
        228: e => {
            "use strict";
            var t = Object.getOwnPropertySymbols
              , n = Object.prototype.hasOwnProperty
              , r = Object.prototype.propertyIsEnumerable;
            e.exports = function() {
                try {
                    if (!Object.assign)
                        return !1;
                    var e = new String("abc");
                    if (e[5] = "de",
                    "5" === Object.getOwnPropertyNames(e)[0])
                        return !1;
                    for (var t = {}, n = 0; n < 10; n++)
                        t["_" + String.fromCharCode(n)] = n;
                    if ("0123456789" !== Object.getOwnPropertyNames(t).map(function(e) {
                        return t[e]
                    }).join(""))
                        return !1;
                    var r = {};
                    return "abcdefghijklmnopqrst".split("").forEach(function(e) {
                        r[e] = e
                    }),
                    "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
                } catch (e) {
                    return !1
                }
            }() ? Object.assign : function(e, o) {
                for (var i, a, l = function(e) {
                    if (null == e)
                        throw new TypeError("Object.assign cannot be called with null or undefined");
                    return Object(e)
                }(e), u = 1; u < arguments.length; u++) {
                    for (var c in i = Object(arguments[u]))
                        n.call(i, c) && (l[c] = i[c]);
                    if (t) {
                        a = t(i);
                        for (var s = 0; s < a.length; s++)
                            r.call(i, a[s]) && (l[a[s]] = i[a[s]])
                    }
                }
                return l
            }
        }
        ,
        251: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => l
            });
            var r = n(601)
              , o = n.n(r)
              , i = n(314)
              , a = n.n(i)()(o());
            a.push([e.id, "#recent-changes{\n    border: 1px solid #ccc;\n    background-color: #fff;\n    padding: 16px;\n    width: 450px;\n    border-radius: 6px;\n    box-shadow: 0 0 6px rgba(0, 0, 0, 0.05);\n    margin: 0 auto;\n    height: 490px;\n}\n\n.dark-mode #recent-changes{\n    border-color: #333;\n    background-color: #1e1e1e;\n}\n\n#recent-changes .header{\n    display: flex;\n    justify-content: space-between;\n    font-weight: bold;\n    border-bottom: 1px solid #e0e0e0;\n    padding-bottom: 4px;\n    margin-bottom: 10px;\n    color: #333;\n}\n\n.dark-mode #recent-changes .header{\n    border-bottom: 1px solid #333;\n    color: #ccc;\n}\n\n#recent-changes .header a{\n    color: var(--motion-primary);\n    text-decoration: none;\n    font-size: 14px;\n}\n\n#recent-changes ul#commit-list{\n    list-style: none;\n    padding: 0;\n    margin: 0;\n}\n\n#recent-changes li.commit{\n    display: flex;\n    gap: 10px;\n    margin-bottom: 16px;\n    border-bottom: 1px solid #eee;\n    padding-bottom: 10px;\n}\n\n.dark-mode #recent-changes li.commit{\n    border-bottom: 1px solid #2c2c2c;\n}\n\n#recent-changes li.commit:last-child{\n    border-bottom: none;\n}\n\n#recent-changes .avatar{\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n    object-fit: cover;\n}\n\n#recent-changes .commit-info{\n    flex: 1;\n}\n\n#recent-changes .commit-title a{\n    color: var(--motion-primary);\n    text-decoration: none;\n    font-weight: bold;\n    font-size: 15px;\n}\n\n#recent-changes .author-name{\n    font-size: 14px;\n    color: #555;\n}\n\n.dark-mode #recent-changes .author-name{\n    color: #ccc;\n}\n\n#recent-changes .commit-date{\n    font-size: 13px;\n    color: #888;\n}\n\n#recent-changes .error{\n    color: #ccc;\n    text-align: center;\n    margin-top: 20px;\n}\n\n.dark-mode #recent-changes .error{\n    color: #999;\n}", ""]);
            const l = a
        }
        ,
        274: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => l
            });
            var r = n(601)
              , o = n.n(r)
              , i = n(314)
              , a = n.n(i)()(o());
            a.push([e.id, ".searchbar-main-div {\n    background-color: #00000020;\n    border-radius: 3px;\n    height: 50px;\n    width: 240px;\n    align-items: center;\n    text-align: center;\n    transform: translate(0%, 16%);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.searchbar-searchIcon {\n    vertical-align: middle; /* Align the image vertically */\n    border-radius: 3px;\n    border: none;\n    cursor: pointer;\n    width: 32px;\n    height: 32px;\n    background: transparent;\n    background-color: transparent;\n}\n\n.searchbar-searchInput {\n    padding: 5px;\n    margin-right: 10px;\n    background: transparent;\n    border: none;\n    color: white;\n    outline: none;\n    width: 70%;\n    transform: translate(4%, 0%);\n}\n\n.searchbar-searchInput::placeholder {\n    color: #ffffff90;\n}", ""]);
            const l = a
        }
        ,
        287: (e, t, n) => {
            "use strict";
            var r = n(228)
              , o = "function" == typeof Symbol && Symbol.for
              , i = o ? Symbol.for("react.element") : 60103
              , a = o ? Symbol.for("react.portal") : 60106
              , l = o ? Symbol.for("react.fragment") : 60107
              , u = o ? Symbol.for("react.strict_mode") : 60108
              , c = o ? Symbol.for("react.profiler") : 60114
              , s = o ? Symbol.for("react.provider") : 60109
              , f = o ? Symbol.for("react.context") : 60110
              , p = o ? Symbol.for("react.forward_ref") : 60112
              , d = o ? Symbol.for("react.suspense") : 60113
              , h = o ? Symbol.for("react.memo") : 60115
              , m = o ? Symbol.for("react.lazy") : 60116
              , g = "function" == typeof Symbol && Symbol.iterator;
            function y(e) {
                for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
                    t += "&args[]=" + encodeURIComponent(arguments[n]);
                return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
            }
            var b = {
                isMounted: function() {
                    return !1
                },
                enqueueForceUpdate: function() {},
                enqueueReplaceState: function() {},
                enqueueSetState: function() {}
            }
              , v = {};
            function E(e, t, n) {
                this.props = e,
                this.context = t,
                this.refs = v,
                this.updater = n || b
            }
            function w() {}
            function T(e, t, n) {
                this.props = e,
                this.context = t,
                this.refs = v,
                this.updater = n || b
            }
            E.prototype.isReactComponent = {},
            E.prototype.setState = function(e, t) {
                if ("object" != typeof e && "function" != typeof e && null != e)
                    throw Error(y(85));
                this.updater.enqueueSetState(this, e, t, "setState")
            }
            ,
            E.prototype.forceUpdate = function(e) {
                this.updater.enqueueForceUpdate(this, e, "forceUpdate")
            }
            ,
            w.prototype = E.prototype;
            var S = T.prototype = new w;
            S.constructor = T,
            r(S, E.prototype),
            S.isPureReactComponent = !0;
            var k = {
                current: null
            }
              , x = Object.prototype.hasOwnProperty
              , _ = {
                key: !0,
                ref: !0,
                __self: !0,
                __source: !0
            };
            function P(e, t, n) {
                var r, o = {}, a = null, l = null;
                if (null != t)
                    for (r in void 0 !== t.ref && (l = t.ref),
                    void 0 !== t.key && (a = "" + t.key),
                    t)
                        x.call(t, r) && !_.hasOwnProperty(r) && (o[r] = t[r]);
                var u = arguments.length - 2;
                if (1 === u)
                    o.children = n;
                else if (1 < u) {
                    for (var c = Array(u), s = 0; s < u; s++)
                        c[s] = arguments[s + 2];
                    o.children = c
                }
                if (e && e.defaultProps)
                    for (r in u = e.defaultProps)
                        void 0 === o[r] && (o[r] = u[r]);
                return {
                    $$typeof: i,
                    type: e,
                    key: a,
                    ref: l,
                    props: o,
                    _owner: k.current
                }
            }
            function C(e) {
                return "object" == typeof e && null !== e && e.$$typeof === i
            }
            var O = /\/+/g
              , N = [];
            function A(e, t, n, r) {
                if (N.length) {
                    var o = N.pop();
                    return o.result = e,
                    o.keyPrefix = t,
                    o.func = n,
                    o.context = r,
                    o.count = 0,
                    o
                }
                return {
                    result: e,
                    keyPrefix: t,
                    func: n,
                    context: r,
                    count: 0
                }
            }
            function I(e) {
                e.result = null,
                e.keyPrefix = null,
                e.func = null,
                e.context = null,
                e.count = 0,
                10 > N.length && N.push(e)
            }
            function R(e, t, n, r) {
                var o = typeof e;
                "undefined" !== o && "boolean" !== o || (e = null);
                var l = !1;
                if (null === e)
                    l = !0;
                else
                    switch (o) {
                    case "string":
                    case "number":
                        l = !0;
                        break;
                    case "object":
                        switch (e.$$typeof) {
                        case i:
                        case a:
                            l = !0
                        }
                    }
                if (l)
                    return n(r, e, "" === t ? "." + L(e, 0) : t),
                    1;
                if (l = 0,
                t = "" === t ? "." : t + ":",
                Array.isArray(e))
                    for (var u = 0; u < e.length; u++) {
                        var c = t + L(o = e[u], u);
                        l += R(o, c, n, r)
                    }
                else if ("function" == typeof (c = null === e || "object" != typeof e ? null : "function" == typeof (c = g && e[g] || e["@@iterator"]) ? c : null))
                    for (e = c.call(e),
                    u = 0; !(o = e.next()).done; )
                        l += R(o = o.value, c = t + L(o, u++), n, r);
                else if ("object" === o)
                    throw n = "" + e,
                    Error(y(31, "[object Object]" === n ? "object with keys {" + Object.keys(e).join(", ") + "}" : n, ""));
                return l
            }
            function M(e, t, n) {
                return null == e ? 0 : R(e, "", t, n)
            }
            function L(e, t) {
                return "object" == typeof e && null !== e && null != e.key ? function(e) {
                    var t = {
                        "=": "=0",
                        ":": "=2"
                    };
                    return "$" + ("" + e).replace(/[=:]/g, function(e) {
                        return t[e]
                    })
                }(e.key) : t.toString(36)
            }
            function D(e, t) {
                e.func.call(e.context, t, e.count++)
            }
            function H(e, t, n) {
                var r = e.result
                  , o = e.keyPrefix;
                e = e.func.call(e.context, t, e.count++),
                Array.isArray(e) ? B(e, r, n, function(e) {
                    return e
                }) : null != e && (C(e) && (e = function(e, t) {
                    return {
                        $$typeof: i,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner
                    }
                }(e, o + (!e.key || t && t.key === e.key ? "" : ("" + e.key).replace(O, "$&/") + "/") + n)),
                r.push(e))
            }
            function B(e, t, n, r, o) {
                var i = "";
                null != n && (i = ("" + n).replace(O, "$&/") + "/"),
                M(e, H, t = A(t, i, r, o)),
                I(t)
            }
            var j = {
                current: null
            };
            function F() {
                var e = j.current;
                if (null === e)
                    throw Error(y(321));
                return e
            }
            var U = {
                ReactCurrentDispatcher: j,
                ReactCurrentBatchConfig: {
                    suspense: null
                },
                ReactCurrentOwner: k,
                IsSomeRendererActing: {
                    current: !1
                },
                assign: r
            };
            t.Children = {
                map: function(e, t, n) {
                    if (null == e)
                        return e;
                    var r = [];
                    return B(e, r, null, t, n),
                    r
                },
                forEach: function(e, t, n) {
                    if (null == e)
                        return e;
                    M(e, D, t = A(null, null, t, n)),
                    I(t)
                },
                count: function(e) {
                    return M(e, function() {
                        return null
                    }, null)
                },
                toArray: function(e) {
                    var t = [];
                    return B(e, t, null, function(e) {
                        return e
                    }),
                    t
                },
                only: function(e) {
                    if (!C(e))
                        throw Error(y(143));
                    return e
                }
            },
            t.Component = E,
            t.Fragment = l,
            t.Profiler = c,
            t.PureComponent = T,
            t.StrictMode = u,
            t.Suspense = d,
            t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = U,
            t.cloneElement = function(e, t, n) {
                if (null == e)
                    throw Error(y(267, e));
                var o = r({}, e.props)
                  , a = e.key
                  , l = e.ref
                  , u = e._owner;
                if (null != t) {
                    if (void 0 !== t.ref && (l = t.ref,
                    u = k.current),
                    void 0 !== t.key && (a = "" + t.key),
                    e.type && e.type.defaultProps)
                        var c = e.type.defaultProps;
                    for (s in t)
                        x.call(t, s) && !_.hasOwnProperty(s) && (o[s] = void 0 === t[s] && void 0 !== c ? c[s] : t[s])
                }
                var s = arguments.length - 2;
                if (1 === s)
                    o.children = n;
                else if (1 < s) {
                    c = Array(s);
                    for (var f = 0; f < s; f++)
                        c[f] = arguments[f + 2];
                    o.children = c
                }
                return {
                    $$typeof: i,
                    type: e.type,
                    key: a,
                    ref: l,
                    props: o,
                    _owner: u
                }
            }
            ,
            t.createContext = function(e, t) {
                return void 0 === t && (t = null),
                (e = {
                    $$typeof: f,
                    _calculateChangedBits: t,
                    _currentValue: e,
                    _currentValue2: e,
                    _threadCount: 0,
                    Provider: null,
                    Consumer: null
                }).Provider = {
                    $$typeof: s,
                    _context: e
                },
                e.Consumer = e
            }
            ,
            t.createElement = P,
            t.createFactory = function(e) {
                var t = P.bind(null, e);
                return t.type = e,
                t
            }
            ,
            t.createRef = function() {
                return {
                    current: null
                }
            }
            ,
            t.forwardRef = function(e) {
                return {
                    $$typeof: p,
                    render: e
                }
            }
            ,
            t.isValidElement = C,
            t.lazy = function(e) {
                return {
                    $$typeof: m,
                    _ctor: e,
                    _status: -1,
                    _result: null
                }
            }
            ,
            t.memo = function(e, t) {
                return {
                    $$typeof: h,
                    type: e,
                    compare: void 0 === t ? null : t
                }
            }
            ,
            t.useCallback = function(e, t) {
                return F().useCallback(e, t)
            }
            ,
            t.useContext = function(e, t) {
                return F().useContext(e, t)
            }
            ,
            t.useDebugValue = function() {}
            ,
            t.useEffect = function(e, t) {
                return F().useEffect(e, t)
            }
            ,
            t.useImperativeHandle = function(e, t, n) {
                return F().useImperativeHandle(e, t, n)
            }
            ,
            t.useLayoutEffect = function(e, t) {
                return F().useLayoutEffect(e, t)
            }
            ,
            t.useMemo = function(e, t) {
                return F().useMemo(e, t)
            }
            ,
            t.useReducer = function(e, t, n) {
                return F().useReducer(e, t, n)
            }
            ,
            t.useRef = function(e) {
                return F().useRef(e)
            }
            ,
            t.useState = function(e) {
                return F().useState(e)
            }
            ,
            t.version = "16.14.0"
        }
        ,
        314: e => {
            "use strict";
            e.exports = function(e) {
                var t = [];
                return t.toString = function() {
                    return this.map(function(t) {
                        var n = ""
                          , r = void 0 !== t[5];
                        return t[4] && (n += "@supports (".concat(t[4], ") {")),
                        t[2] && (n += "@media ".concat(t[2], " {")),
                        r && (n += "@layer".concat(t[5].length > 0 ? " ".concat(t[5]) : "", " {")),
                        n += e(t),
                        r && (n += "}"),
                        t[2] && (n += "}"),
                        t[4] && (n += "}"),
                        n
                    }).join("")
                }
                ,
                t.i = function(e, n, r, o, i) {
                    "string" == typeof e && (e = [[null, e, void 0]]);
                    var a = {};
                    if (r)
                        for (var l = 0; l < this.length; l++) {
                            var u = this[l][0];
                            null != u && (a[u] = !0)
                        }
                    for (var c = 0; c < e.length; c++) {
                        var s = [].concat(e[c]);
                        r && a[s[0]] || (void 0 !== i && (void 0 === s[5] || (s[1] = "@layer".concat(s[5].length > 0 ? " ".concat(s[5]) : "", " {").concat(s[1], "}")),
                        s[5] = i),
                        n && (s[2] ? (s[1] = "@media ".concat(s[2], " {").concat(s[1], "}"),
                        s[2] = n) : s[2] = n),
                        o && (s[4] ? (s[1] = "@supports (".concat(s[4], ") {").concat(s[1], "}"),
                        s[4] = o) : s[4] = "".concat(o)),
                        t.push(s))
                    }
                }
                ,
                t
            }
        }
        ,
        363: (e, t, n) => {
            "use strict";
            e.exports = n(799)
        }
        ,
        463: (e, t) => {
            "use strict";
            var n, r, o, i, a;
            if ("undefined" == typeof window || "function" != typeof MessageChannel) {
                var l = null
                  , u = null
                  , c = function() {
                    if (null !== l)
                        try {
                            var e = t.unstable_now();
                            l(!0, e),
                            l = null
                        } catch (e) {
                            throw setTimeout(c, 0),
                            e
                        }
                }
                  , s = Date.now();
                t.unstable_now = function() {
                    return Date.now() - s
                }
                ,
                n = function(e) {
                    null !== l ? setTimeout(n, 0, e) : (l = e,
                    setTimeout(c, 0))
                }
                ,
                r = function(e, t) {
                    u = setTimeout(e, t)
                }
                ,
                o = function() {
                    clearTimeout(u)
                }
                ,
                i = function() {
                    return !1
                }
                ,
                a = t.unstable_forceFrameRate = function() {}
            } else {
                var f = window.performance
                  , p = window.Date
                  , d = window.setTimeout
                  , h = window.clearTimeout;
                if ("undefined" != typeof console) {
                    var m = window.cancelAnimationFrame;
                    "function" != typeof window.requestAnimationFrame && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),
                    "function" != typeof m && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills")
                }
                if ("object" == typeof f && "function" == typeof f.now)
                    t.unstable_now = function() {
                        return f.now()
                    }
                    ;
                else {
                    var g = p.now();
                    t.unstable_now = function() {
                        return p.now() - g
                    }
                }
                var y = !1
                  , b = null
                  , v = -1
                  , E = 5
                  , w = 0;
                i = function() {
                    return t.unstable_now() >= w
                }
                ,
                a = function() {}
                ,
                t.unstable_forceFrameRate = function(e) {
                    0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported") : E = 0 < e ? Math.floor(1e3 / e) : 5
                }
                ;
                var T = new MessageChannel
                  , S = T.port2;
                T.port1.onmessage = function() {
                    if (null !== b) {
                        var e = t.unstable_now();
                        w = e + E;
                        try {
                            b(!0, e) ? S.postMessage(null) : (y = !1,
                            b = null)
                        } catch (e) {
                            throw S.postMessage(null),
                            e
                        }
                    } else
                        y = !1
                }
                ,
                n = function(e) {
                    b = e,
                    y || (y = !0,
                    S.postMessage(null))
                }
                ,
                r = function(e, n) {
                    v = d(function() {
                        e(t.unstable_now())
                    }, n)
                }
                ,
                o = function() {
                    h(v),
                    v = -1
                }
            }
            function k(e, t) {
                var n = e.length;
                e.push(t);
                e: for (; ; ) {
                    var r = n - 1 >>> 1
                      , o = e[r];
                    if (!(void 0 !== o && 0 < P(o, t)))
                        break e;
                    e[r] = t,
                    e[n] = o,
                    n = r
                }
            }
            function x(e) {
                return void 0 === (e = e[0]) ? null : e
            }
            function _(e) {
                var t = e[0];
                if (void 0 !== t) {
                    var n = e.pop();
                    if (n !== t) {
                        e[0] = n;
                        e: for (var r = 0, o = e.length; r < o; ) {
                            var i = 2 * (r + 1) - 1
                              , a = e[i]
                              , l = i + 1
                              , u = e[l];
                            if (void 0 !== a && 0 > P(a, n))
                                void 0 !== u && 0 > P(u, a) ? (e[r] = u,
                                e[l] = n,
                                r = l) : (e[r] = a,
                                e[i] = n,
                                r = i);
                            else {
                                if (!(void 0 !== u && 0 > P(u, n)))
                                    break e;
                                e[r] = u,
                                e[l] = n,
                                r = l
                            }
                        }
                    }
                    return t
                }
                return null
            }
            function P(e, t) {
                var n = e.sortIndex - t.sortIndex;
                return 0 !== n ? n : e.id - t.id
            }
            var C = []
              , O = []
              , N = 1
              , A = null
              , I = 3
              , R = !1
              , M = !1
              , L = !1;
            function D(e) {
                for (var t = x(O); null !== t; ) {
                    if (null === t.callback)
                        _(O);
                    else {
                        if (!(t.startTime <= e))
                            break;
                        _(O),
                        t.sortIndex = t.expirationTime,
                        k(C, t)
                    }
                    t = x(O)
                }
            }
            function H(e) {
                if (L = !1,
                D(e),
                !M)
                    if (null !== x(C))
                        M = !0,
                        n(B);
                    else {
                        var t = x(O);
                        null !== t && r(H, t.startTime - e)
                    }
            }
            function B(e, n) {
                M = !1,
                L && (L = !1,
                o()),
                R = !0;
                var a = I;
                try {
                    for (D(n),
                    A = x(C); null !== A && (!(A.expirationTime > n) || e && !i()); ) {
                        var l = A.callback;
                        if (null !== l) {
                            A.callback = null,
                            I = A.priorityLevel;
                            var u = l(A.expirationTime <= n);
                            n = t.unstable_now(),
                            "function" == typeof u ? A.callback = u : A === x(C) && _(C),
                            D(n)
                        } else
                            _(C);
                        A = x(C)
                    }
                    if (null !== A)
                        var c = !0;
                    else {
                        var s = x(O);
                        null !== s && r(H, s.startTime - n),
                        c = !1
                    }
                    return c
                } finally {
                    A = null,
                    I = a,
                    R = !1
                }
            }
            function j(e) {
                switch (e) {
                case 1:
                    return -1;
                case 2:
                    return 250;
                case 5:
                    return 1073741823;
                case 4:
                    return 1e4;
                default:
                    return 5e3
                }
            }
            var F = a;
            t.unstable_IdlePriority = 5,
            t.unstable_ImmediatePriority = 1,
            t.unstable_LowPriority = 4,
            t.unstable_NormalPriority = 3,
            t.unstable_Profiling = null,
            t.unstable_UserBlockingPriority = 2,
            t.unstable_cancelCallback = function(e) {
                e.callback = null
            }
            ,
            t.unstable_continueExecution = function() {
                M || R || (M = !0,
                n(B))
            }
            ,
            t.unstable_getCurrentPriorityLevel = function() {
                return I
            }
            ,
            t.unstable_getFirstCallbackNode = function() {
                return x(C)
            }
            ,
            t.unstable_next = function(e) {
                switch (I) {
                case 1:
                case 2:
                case 3:
                    var t = 3;
                    break;
                default:
                    t = I
                }
                var n = I;
                I = t;
                try {
                    return e()
                } finally {
                    I = n
                }
            }
            ,
            t.unstable_pauseExecution = function() {}
            ,
            t.unstable_requestPaint = F,
            t.unstable_runWithPriority = function(e, t) {
                switch (e) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    e = 3
                }
                var n = I;
                I = e;
                try {
                    return t()
                } finally {
                    I = n
                }
            }
            ,
            t.unstable_scheduleCallback = function(e, i, a) {
                var l = t.unstable_now();
                if ("object" == typeof a && null !== a) {
                    var u = a.delay;
                    u = "number" == typeof u && 0 < u ? l + u : l,
                    a = "number" == typeof a.timeout ? a.timeout : j(e)
                } else
                    a = j(e),
                    u = l;
                return e = {
                    id: N++,
                    callback: i,
                    priorityLevel: e,
                    startTime: u,
                    expirationTime: a = u + a,
                    sortIndex: -1
                },
                u > l ? (e.sortIndex = u,
                k(O, e),
                null === x(C) && e === x(O) && (L ? o() : L = !0,
                r(H, u - l))) : (e.sortIndex = a,
                k(C, e),
                M || R || (M = !0,
                n(B))),
                e
            }
            ,
            t.unstable_shouldYield = function() {
                var e = t.unstable_now();
                D(e);
                var n = x(C);
                return n !== A && null !== A && null !== n && null !== n.callback && n.startTime <= e && n.expirationTime < A.expirationTime || i()
            }
            ,
            t.unstable_wrapCallback = function(e) {
                var t = I;
                return function() {
                    var n = I;
                    I = t;
                    try {
                        return e.apply(this, arguments)
                    } finally {
                        I = n
                    }
                }
            }
        }
        ,
        470: () => {
            $(document).ready(function() {
                function e() {
                    var e = $("#searchbar-searchInput").val();
                    console.log("Search Query:", e),
                    window.open("https://penguinmod.com/search?q=".concat(e))
                }
                $("#searchbar-searchIcon").click(function() {
                    e()
                }),
                $("#searchbar-searchInput").keypress(function(t) {
                    13 === t.which && e()
                })
            })
        }
        ,
        485: (e, t) => {
            var n;
            !function() {
                "use strict";
                var r = {}.hasOwnProperty;
                function o() {
                    for (var e = [], t = 0; t < arguments.length; t++) {
                        var n = arguments[t];
                        if (n) {
                            var i = typeof n;
                            if ("string" === i || "number" === i)
                                e.push(n);
                            else if (Array.isArray(n) && n.length) {
                                var a = o.apply(null, n);
                                a && e.push(a)
                            } else if ("object" === i)
                                for (var l in n)
                                    r.call(n, l) && n[l] && e.push(l)
                        }
                    }
                    return e.join(" ")
                }
                e.exports ? (o.default = o,
                e.exports = o) : void 0 === (n = function() {
                    return o
                }
                .apply(t, [])) || (e.exports = n)
            }()
        }
        ,
        523: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => l
            });
            var r = n(601)
              , o = n.n(r)
              , i = n(314)
              , a = n.n(i)()(o());
            a.push([e.id, '.menu-bar {\n    height: 60px;\n    width: 100%;\n    background-color: var(--motion-primary);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    position: fixed;\n    top: 0;\n    z-index: 1000;\n}\n\n.menu-bar_ul {\n    float: center;\n    margin-left: 50;\n}\n\n.menu-bar_li {\n    display: inline-block;\n    margin: 0 8px;\n    line-height: 60px;\n}\n\n.menu-bar_li_left {\n    display: inline-block;\n    margin: 0 8px;\n    line-height: 60px;\n    position: absolute;\n    left: 0;\n}\n\n.menu-bar_a {\n    color: white;\n    font-size: 18px;\n    font-weight: bold;\n    border: 1px solid transparent;\n    padding: 7px 10px;\n    border-radius: 3px;\n}\n\n.menu-bar_a#languagesListToggle {\n    display: flex;\n    align-items: center;\n    gap: 4px;\n    height: 45px;\n}\n\n.menu-bar_a#languagesListToggle img {\n    display: block;\n}\n\n.menu-bar_input[type="text"].old-search-bar {\n    padding: 5px;\n    border: 1px solid #ccc;\n    border-radius: 3px;\n    margin-right: 10px;\n}\n\n#menubar_searchIcon.old-search-bar {\n    font-size: 18px;\n    vertical-align: middle; /* Align the image vertically */\n    border: 1px solid rgb(63, 63, 63);\n    border-radius: 3px;\n    cursor: pointer;\n}\n\n.menu-bar.dark-mode {\n    background-color: var(--motion-primary-dark);\n}\n.menu-bar.dark-mode input[type="text"].old-search-bar {\n    color: white; /* Darker color for dark mode */\n    background-color: #333333; /* Darker color for dark mode */\n}\n.menu-bar.dark-mode #menubar_searchIcon.old-search-bar {\n    color: white; /* Darker color for dark mode */\n    background-color: #333333; /* Darker color for dark mode */\n    border: 1px solid rgb(0, 0, 0);\n    border-radius: 3px;\n}\n\n.menu-bar_languages-dropdown {\n    display: none;\n    list-style: none;\n    padding: 0;\n    margin: 0;\n    position: absolute;\n    background-color: var(--motion-primary);\n    border: 1px solid var(--motion-primary);\n    top: 60px;\n    left: 0;\n    z-index: 10;\n}\n\n.menu-bar_languages-dropdown.dark-mode {\n    background-color: var(--motion-primary-dark);\n    border: 1px solid var(--motion-primary-dark);\n}\n  \n.menu-bar_languages-dropdown.visible {\n    display: block;\n}\n  \n.menu-bar_language-option {\n    padding: 4px 24px;\n    cursor: pointer;\n    display: block;\n    line-height: 34px;\n    white-space: nowrap;\n    padding: 0 10px;\n    font-size: .75rem;\n    margin: 0;\n    font-weight: bold;\n    color: #fff;\n    position: relative;\n}\n  \n.menu-bar_language-option:hover {\n    background-color: #9CFC47;\n}\n\n.menu-bar_language-option.dark-mode {\n    background-color: var(--motion-primary-dark);\n}\n\n.menu-bar_language-option.dark-mode:hover {\n    background-color: #90f000;\n}\n  ', ""]);
            const l = a
        }
        ,
        540: (e, t, n) => {
            "use strict";
            e.exports = n(287)
        }
        ,
        551: (e, t, n) => {
            "use strict";
            var r = n(540)
              , o = n(228)
              , i = n(982);
            function a(e) {
                for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
                    t += "&args[]=" + encodeURIComponent(arguments[n]);
                return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
            }
            if (!r)
                throw Error(a(227));
            function l(e, t, n, r, o, i, a, l, u) {
                var c = Array.prototype.slice.call(arguments, 3);
                try {
                    t.apply(n, c)
                } catch (e) {
                    this.onError(e)
                }
            }
            var u = !1
              , c = null
              , s = !1
              , f = null
              , p = {
                onError: function(e) {
                    u = !0,
                    c = e
                }
            };
            function d(e, t, n, r, o, i, a, s, f) {
                u = !1,
                c = null,
                l.apply(p, arguments)
            }
            var h = null
              , m = null
              , g = null;
            function y(e, t, n) {
                var r = e.type || "unknown-event";
                e.currentTarget = g(n),
                function(e, t, n, r, o, i, l, p, h) {
                    if (d.apply(this, arguments),
                    u) {
                        if (!u)
                            throw Error(a(198));
                        var m = c;
                        u = !1,
                        c = null,
                        s || (s = !0,
                        f = m)
                    }
                }(r, t, void 0, e),
                e.currentTarget = null
            }
            var b = null
              , v = {};
            function E() {
                if (b)
                    for (var e in v) {
                        var t = v[e]
                          , n = b.indexOf(e);
                        if (!(-1 < n))
                            throw Error(a(96, e));
                        if (!T[n]) {
                            if (!t.extractEvents)
                                throw Error(a(97, e));
                            for (var r in T[n] = t,
                            n = t.eventTypes) {
                                var o = void 0
                                  , i = n[r]
                                  , l = t
                                  , u = r;
                                if (S.hasOwnProperty(u))
                                    throw Error(a(99, u));
                                S[u] = i;
                                var c = i.phasedRegistrationNames;
                                if (c) {
                                    for (o in c)
                                        c.hasOwnProperty(o) && w(c[o], l, u);
                                    o = !0
                                } else
                                    i.registrationName ? (w(i.registrationName, l, u),
                                    o = !0) : o = !1;
                                if (!o)
                                    throw Error(a(98, r, e))
                            }
                        }
                    }
            }
            function w(e, t, n) {
                if (k[e])
                    throw Error(a(100, e));
                k[e] = t,
                x[e] = t.eventTypes[n].dependencies
            }
            var T = []
              , S = {}
              , k = {}
              , x = {};
            function _(e) {
                var t, n = !1;
                for (t in e)
                    if (e.hasOwnProperty(t)) {
                        var r = e[t];
                        if (!v.hasOwnProperty(t) || v[t] !== r) {
                            if (v[t])
                                throw Error(a(102, t));
                            v[t] = r,
                            n = !0
                        }
                    }
                n && E()
            }
            var P = !("undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement)
              , C = null
              , O = null
              , N = null;
            function A(e) {
                if (e = m(e)) {
                    if ("function" != typeof C)
                        throw Error(a(280));
                    var t = e.stateNode;
                    t && (t = h(t),
                    C(e.stateNode, e.type, t))
                }
            }
            function I(e) {
                O ? N ? N.push(e) : N = [e] : O = e
            }
            function R() {
                if (O) {
                    var e = O
                      , t = N;
                    if (N = O = null,
                    A(e),
                    t)
                        for (e = 0; e < t.length; e++)
                            A(t[e])
                }
            }
            function M(e, t) {
                return e(t)
            }
            function L(e, t, n, r, o) {
                return e(t, n, r, o)
            }
            function D() {}
            var H = M
              , B = !1
              , j = !1;
            function F() {
                null === O && null === N || (D(),
                R())
            }
            function U(e, t, n) {
                if (j)
                    return e(t, n);
                j = !0;
                try {
                    return H(e, t, n)
                } finally {
                    j = !1,
                    F()
                }
            }
            var z = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
              , G = Object.prototype.hasOwnProperty
              , $ = {}
              , V = {};
            function W(e, t, n, r, o, i) {
                this.acceptsBooleans = 2 === t || 3 === t || 4 === t,
                this.attributeName = r,
                this.attributeNamespace = o,
                this.mustUseProperty = n,
                this.propertyName = e,
                this.type = t,
                this.sanitizeURL = i
            }
            var Q = {};
            "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
                Q[e] = new W(e,0,!1,e,null,!1)
            }),
            [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
                var t = e[0];
                Q[t] = new W(t,1,!1,e[1],null,!1)
            }),
            ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
                Q[e] = new W(e,2,!1,e.toLowerCase(),null,!1)
            }),
            ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
                Q[e] = new W(e,2,!1,e,null,!1)
            }),
            "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
                Q[e] = new W(e,3,!1,e.toLowerCase(),null,!1)
            }),
            ["checked", "multiple", "muted", "selected"].forEach(function(e) {
                Q[e] = new W(e,3,!0,e,null,!1)
            }),
            ["capture", "download"].forEach(function(e) {
                Q[e] = new W(e,4,!1,e,null,!1)
            }),
            ["cols", "rows", "size", "span"].forEach(function(e) {
                Q[e] = new W(e,6,!1,e,null,!1)
            }),
            ["rowSpan", "start"].forEach(function(e) {
                Q[e] = new W(e,5,!1,e.toLowerCase(),null,!1)
            });
            var K = /[\-:]([a-z])/g;
            function X(e) {
                return e[1].toUpperCase()
            }
            "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
                var t = e.replace(K, X);
                Q[t] = new W(t,1,!1,e,null,!1)
            }),
            "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
                var t = e.replace(K, X);
                Q[t] = new W(t,1,!1,e,"http://www.w3.org/1999/xlink",!1)
            }),
            ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
                var t = e.replace(K, X);
                Q[t] = new W(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1)
            }),
            ["tabIndex", "crossOrigin"].forEach(function(e) {
                Q[e] = new W(e,1,!1,e.toLowerCase(),null,!1)
            }),
            Q.xlinkHref = new W("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0),
            ["src", "href", "action", "formAction"].forEach(function(e) {
                Q[e] = new W(e,1,!1,e.toLowerCase(),null,!0)
            });
            var q = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
            function Y(e, t, n, r) {
                var o = Q.hasOwnProperty(t) ? Q[t] : null;
                (null !== o ? 0 === o.type : !r && 2 < t.length && ("o" === t[0] || "O" === t[0]) && ("n" === t[1] || "N" === t[1])) || (function(e, t, n, r) {
                    if (null == t || function(e, t, n, r) {
                        if (null !== n && 0 === n.type)
                            return !1;
                        switch (typeof t) {
                        case "function":
                        case "symbol":
                            return !0;
                        case "boolean":
                            return !r && (null !== n ? !n.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
                        default:
                            return !1
                        }
                    }(e, t, n, r))
                        return !0;
                    if (r)
                        return !1;
                    if (null !== n)
                        switch (n.type) {
                        case 3:
                            return !t;
                        case 4:
                            return !1 === t;
                        case 5:
                            return isNaN(t);
                        case 6:
                            return isNaN(t) || 1 > t
                        }
                    return !1
                }(t, n, o, r) && (n = null),
                r || null === o ? function(e) {
                    return !!G.call(V, e) || !G.call($, e) && (z.test(e) ? V[e] = !0 : ($[e] = !0,
                    !1))
                }(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = null === n ? 3 !== o.type && "" : n : (t = o.attributeName,
                r = o.attributeNamespace,
                null === n ? e.removeAttribute(t) : (n = 3 === (o = o.type) || 4 === o && !0 === n ? "" : "" + n,
                r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
            }
            q.hasOwnProperty("ReactCurrentDispatcher") || (q.ReactCurrentDispatcher = {
                current: null
            }),
            q.hasOwnProperty("ReactCurrentBatchConfig") || (q.ReactCurrentBatchConfig = {
                suspense: null
            });
            var Z = /^(.*)[\\\/]/
              , J = "function" == typeof Symbol && Symbol.for
              , ee = J ? Symbol.for("react.element") : 60103
              , te = J ? Symbol.for("react.portal") : 60106
              , ne = J ? Symbol.for("react.fragment") : 60107
              , re = J ? Symbol.for("react.strict_mode") : 60108
              , oe = J ? Symbol.for("react.profiler") : 60114
              , ie = J ? Symbol.for("react.provider") : 60109
              , ae = J ? Symbol.for("react.context") : 60110
              , le = J ? Symbol.for("react.concurrent_mode") : 60111
              , ue = J ? Symbol.for("react.forward_ref") : 60112
              , ce = J ? Symbol.for("react.suspense") : 60113
              , se = J ? Symbol.for("react.suspense_list") : 60120
              , fe = J ? Symbol.for("react.memo") : 60115
              , pe = J ? Symbol.for("react.lazy") : 60116
              , de = J ? Symbol.for("react.block") : 60121
              , he = "function" == typeof Symbol && Symbol.iterator;
            function me(e) {
                return null === e || "object" != typeof e ? null : "function" == typeof (e = he && e[he] || e["@@iterator"]) ? e : null
            }
            function ge(e) {
                if (null == e)
                    return null;
                if ("function" == typeof e)
                    return e.displayName || e.name || null;
                if ("string" == typeof e)
                    return e;
                switch (e) {
                case ne:
                    return "Fragment";
                case te:
                    return "Portal";
                case oe:
                    return "Profiler";
                case re:
                    return "StrictMode";
                case ce:
                    return "Suspense";
                case se:
                    return "SuspenseList"
                }
                if ("object" == typeof e)
                    switch (e.$$typeof) {
                    case ae:
                        return "Context.Consumer";
                    case ie:
                        return "Context.Provider";
                    case ue:
                        var t = e.render;
                        return t = t.displayName || t.name || "",
                        e.displayName || ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef");
                    case fe:
                        return ge(e.type);
                    case de:
                        return ge(e.render);
                    case pe:
                        if (e = 1 === e._status ? e._result : null)
                            return ge(e)
                    }
                return null
            }
            function ye(e) {
                var t = "";
                do {
                    e: switch (e.tag) {
                    case 3:
                    case 4:
                    case 6:
                    case 7:
                    case 10:
                    case 9:
                        var n = "";
                        break e;
                    default:
                        var r = e._debugOwner
                          , o = e._debugSource
                          , i = ge(e.type);
                        n = null,
                        r && (n = ge(r.type)),
                        r = i,
                        i = "",
                        o ? i = " (at " + o.fileName.replace(Z, "") + ":" + o.lineNumber + ")" : n && (i = " (created by " + n + ")"),
                        n = "\n    in " + (r || "Unknown") + i
                    }
                    t += n,
                    e = e.return
                } while (e);
                return t
            }
            function be(e) {
                switch (typeof e) {
                case "boolean":
                case "number":
                case "object":
                case "string":
                case "undefined":
                    return e;
                default:
                    return ""
                }
            }
            function ve(e) {
                var t = e.type;
                return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t)
            }
            function Ee(e) {
                e._valueTracker || (e._valueTracker = function(e) {
                    var t = ve(e) ? "checked" : "value"
                      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
                      , r = "" + e[t];
                    if (!e.hasOwnProperty(t) && void 0 !== n && "function" == typeof n.get && "function" == typeof n.set) {
                        var o = n.get
                          , i = n.set;
                        return Object.defineProperty(e, t, {
                            configurable: !0,
                            get: function() {
                                return o.call(this)
                            },
                            set: function(e) {
                                r = "" + e,
                                i.call(this, e)
                            }
                        }),
                        Object.defineProperty(e, t, {
                            enumerable: n.enumerable
                        }),
                        {
                            getValue: function() {
                                return r
                            },
                            setValue: function(e) {
                                r = "" + e
                            },
                            stopTracking: function() {
                                e._valueTracker = null,
                                delete e[t]
                            }
                        }
                    }
                }(e))
            }
            function we(e) {
                if (!e)
                    return !1;
                var t = e._valueTracker;
                if (!t)
                    return !0;
                var n = t.getValue()
                  , r = "";
                return e && (r = ve(e) ? e.checked ? "true" : "false" : e.value),
                (e = r) !== n && (t.setValue(e),
                !0)
            }
            function Te(e, t) {
                var n = t.checked;
                return o({}, t, {
                    defaultChecked: void 0,
                    defaultValue: void 0,
                    value: void 0,
                    checked: null != n ? n : e._wrapperState.initialChecked
                })
            }
            function Se(e, t) {
                var n = null == t.defaultValue ? "" : t.defaultValue
                  , r = null != t.checked ? t.checked : t.defaultChecked;
                n = be(null != t.value ? t.value : n),
                e._wrapperState = {
                    initialChecked: r,
                    initialValue: n,
                    controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value
                }
            }
            function ke(e, t) {
                null != (t = t.checked) && Y(e, "checked", t, !1)
            }
            function xe(e, t) {
                ke(e, t);
                var n = be(t.value)
                  , r = t.type;
                if (null != n)
                    "number" === r ? (0 === n && "" === e.value || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
                else if ("submit" === r || "reset" === r)
                    return void e.removeAttribute("value");
                t.hasOwnProperty("value") ? Pe(e, t.type, n) : t.hasOwnProperty("defaultValue") && Pe(e, t.type, be(t.defaultValue)),
                null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked)
            }
            function _e(e, t, n) {
                if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
                    var r = t.type;
                    if (!("submit" !== r && "reset" !== r || void 0 !== t.value && null !== t.value))
                        return;
                    t = "" + e._wrapperState.initialValue,
                    n || t === e.value || (e.value = t),
                    e.defaultValue = t
                }
                "" !== (n = e.name) && (e.name = ""),
                e.defaultChecked = !!e._wrapperState.initialChecked,
                "" !== n && (e.name = n)
            }
            function Pe(e, t, n) {
                "number" === t && e.ownerDocument.activeElement === e || (null == n ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
            }
            function Ce(e, t) {
                return e = o({
                    children: void 0
                }, t),
                (t = function(e) {
                    var t = "";
                    return r.Children.forEach(e, function(e) {
                        null != e && (t += e)
                    }),
                    t
                }(t.children)) && (e.children = t),
                e
            }
            function Oe(e, t, n, r) {
                if (e = e.options,
                t) {
                    t = {};
                    for (var o = 0; o < n.length; o++)
                        t["$" + n[o]] = !0;
                    for (n = 0; n < e.length; n++)
                        o = t.hasOwnProperty("$" + e[n].value),
                        e[n].selected !== o && (e[n].selected = o),
                        o && r && (e[n].defaultSelected = !0)
                } else {
                    for (n = "" + be(n),
                    t = null,
                    o = 0; o < e.length; o++) {
                        if (e[o].value === n)
                            return e[o].selected = !0,
                            void (r && (e[o].defaultSelected = !0));
                        null !== t || e[o].disabled || (t = e[o])
                    }
                    null !== t && (t.selected = !0)
                }
            }
            function Ne(e, t) {
                if (null != t.dangerouslySetInnerHTML)
                    throw Error(a(91));
                return o({}, t, {
                    value: void 0,
                    defaultValue: void 0,
                    children: "" + e._wrapperState.initialValue
                })
            }
            function Ae(e, t) {
                var n = t.value;
                if (null == n) {
                    if (n = t.children,
                    t = t.defaultValue,
                    null != n) {
                        if (null != t)
                            throw Error(a(92));
                        if (Array.isArray(n)) {
                            if (!(1 >= n.length))
                                throw Error(a(93));
                            n = n[0]
                        }
                        t = n
                    }
                    null == t && (t = ""),
                    n = t
                }
                e._wrapperState = {
                    initialValue: be(n)
                }
            }
            function Ie(e, t) {
                var n = be(t.value)
                  , r = be(t.defaultValue);
                null != n && ((n = "" + n) !== e.value && (e.value = n),
                null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)),
                null != r && (e.defaultValue = "" + r)
            }
            function Re(e) {
                var t = e.textContent;
                t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t)
            }
            function Me(e) {
                switch (e) {
                case "svg":
                    return "http://www.w3.org/2000/svg";
                case "math":
                    return "http://www.w3.org/1998/Math/MathML";
                default:
                    return "http://www.w3.org/1999/xhtml"
                }
            }
            function Le(e, t) {
                return null == e || "http://www.w3.org/1999/xhtml" === e ? Me(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e
            }
            var De, He, Be = (He = function(e, t) {
                if ("http://www.w3.org/2000/svg" !== e.namespaceURI || "innerHTML"in e)
                    e.innerHTML = t;
                else {
                    for ((De = De || document.createElement("div")).innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
                    t = De.firstChild; e.firstChild; )
                        e.removeChild(e.firstChild);
                    for (; t.firstChild; )
                        e.appendChild(t.firstChild)
                }
            }
            ,
            "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction ? function(e, t, n, r) {
                MSApp.execUnsafeLocalFunction(function() {
                    return He(e, t)
                })
            }
            : He);
            function je(e, t) {
                if (t) {
                    var n = e.firstChild;
                    if (n && n === e.lastChild && 3 === n.nodeType)
                        return void (n.nodeValue = t)
                }
                e.textContent = t
            }
            function Fe(e, t) {
                var n = {};
                return n[e.toLowerCase()] = t.toLowerCase(),
                n["Webkit" + e] = "webkit" + t,
                n["Moz" + e] = "moz" + t,
                n
            }
            var Ue = {
                animationend: Fe("Animation", "AnimationEnd"),
                animationiteration: Fe("Animation", "AnimationIteration"),
                animationstart: Fe("Animation", "AnimationStart"),
                transitionend: Fe("Transition", "TransitionEnd")
            }
              , ze = {}
              , Ge = {};
            function $e(e) {
                if (ze[e])
                    return ze[e];
                if (!Ue[e])
                    return e;
                var t, n = Ue[e];
                for (t in n)
                    if (n.hasOwnProperty(t) && t in Ge)
                        return ze[e] = n[t];
                return e
            }
            P && (Ge = document.createElement("div").style,
            "AnimationEvent"in window || (delete Ue.animationend.animation,
            delete Ue.animationiteration.animation,
            delete Ue.animationstart.animation),
            "TransitionEvent"in window || delete Ue.transitionend.transition);
            var Ve = $e("animationend")
              , We = $e("animationiteration")
              , Qe = $e("animationstart")
              , Ke = $e("transitionend")
              , Xe = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
              , qe = new ("function" == typeof WeakMap ? WeakMap : Map);
            function Ye(e) {
                var t = qe.get(e);
                return void 0 === t && (t = new Map,
                qe.set(e, t)),
                t
            }
            function Ze(e) {
                var t = e
                  , n = e;
                if (e.alternate)
                    for (; t.return; )
                        t = t.return;
                else {
                    e = t;
                    do {
                        !!(1026 & (t = e).effectTag) && (n = t.return),
                        e = t.return
                    } while (e)
                }
                return 3 === t.tag ? n : null
            }
            function Je(e) {
                if (13 === e.tag) {
                    var t = e.memoizedState;
                    if (null === t && null !== (e = e.alternate) && (t = e.memoizedState),
                    null !== t)
                        return t.dehydrated
                }
                return null
            }
            function et(e) {
                if (Ze(e) !== e)
                    throw Error(a(188))
            }
            function tt(e) {
                if (e = function(e) {
                    var t = e.alternate;
                    if (!t) {
                        if (null === (t = Ze(e)))
                            throw Error(a(188));
                        return t !== e ? null : e
                    }
                    for (var n = e, r = t; ; ) {
                        var o = n.return;
                        if (null === o)
                            break;
                        var i = o.alternate;
                        if (null === i) {
                            if (null !== (r = o.return)) {
                                n = r;
                                continue
                            }
                            break
                        }
                        if (o.child === i.child) {
                            for (i = o.child; i; ) {
                                if (i === n)
                                    return et(o),
                                    e;
                                if (i === r)
                                    return et(o),
                                    t;
                                i = i.sibling
                            }
                            throw Error(a(188))
                        }
                        if (n.return !== r.return)
                            n = o,
                            r = i;
                        else {
                            for (var l = !1, u = o.child; u; ) {
                                if (u === n) {
                                    l = !0,
                                    n = o,
                                    r = i;
                                    break
                                }
                                if (u === r) {
                                    l = !0,
                                    r = o,
                                    n = i;
                                    break
                                }
                                u = u.sibling
                            }
                            if (!l) {
                                for (u = i.child; u; ) {
                                    if (u === n) {
                                        l = !0,
                                        n = i,
                                        r = o;
                                        break
                                    }
                                    if (u === r) {
                                        l = !0,
                                        r = i,
                                        n = o;
                                        break
                                    }
                                    u = u.sibling
                                }
                                if (!l)
                                    throw Error(a(189))
                            }
                        }
                        if (n.alternate !== r)
                            throw Error(a(190))
                    }
                    if (3 !== n.tag)
                        throw Error(a(188));
                    return n.stateNode.current === n ? e : t
                }(e),
                !e)
                    return null;
                for (var t = e; ; ) {
                    if (5 === t.tag || 6 === t.tag)
                        return t;
                    if (t.child)
                        t.child.return = t,
                        t = t.child;
                    else {
                        if (t === e)
                            break;
                        for (; !t.sibling; ) {
                            if (!t.return || t.return === e)
                                return null;
                            t = t.return
                        }
                        t.sibling.return = t.return,
                        t = t.sibling
                    }
                }
                return null
            }
            function nt(e, t) {
                if (null == t)
                    throw Error(a(30));
                return null == e ? t : Array.isArray(e) ? Array.isArray(t) ? (e.push.apply(e, t),
                e) : (e.push(t),
                e) : Array.isArray(t) ? [e].concat(t) : [e, t]
            }
            function rt(e, t, n) {
                Array.isArray(e) ? e.forEach(t, n) : e && t.call(n, e)
            }
            var ot = null;
            function it(e) {
                if (e) {
                    var t = e._dispatchListeners
                      , n = e._dispatchInstances;
                    if (Array.isArray(t))
                        for (var r = 0; r < t.length && !e.isPropagationStopped(); r++)
                            y(e, t[r], n[r]);
                    else
                        t && y(e, t, n);
                    e._dispatchListeners = null,
                    e._dispatchInstances = null,
                    e.isPersistent() || e.constructor.release(e)
                }
            }
            function at(e) {
                if (null !== e && (ot = nt(ot, e)),
                e = ot,
                ot = null,
                e) {
                    if (rt(e, it),
                    ot)
                        throw Error(a(95));
                    if (s)
                        throw e = f,
                        s = !1,
                        f = null,
                        e
                }
            }
            function lt(e) {
                return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement),
                3 === e.nodeType ? e.parentNode : e
            }
            function ut(e) {
                if (!P)
                    return !1;
                var t = (e = "on" + e)in document;
                return t || ((t = document.createElement("div")).setAttribute(e, "return;"),
                t = "function" == typeof t[e]),
                t
            }
            var ct = [];
            function st(e) {
                e.topLevelType = null,
                e.nativeEvent = null,
                e.targetInst = null,
                e.ancestors.length = 0,
                10 > ct.length && ct.push(e)
            }
            function ft(e, t, n, r) {
                if (ct.length) {
                    var o = ct.pop();
                    return o.topLevelType = e,
                    o.eventSystemFlags = r,
                    o.nativeEvent = t,
                    o.targetInst = n,
                    o
                }
                return {
                    topLevelType: e,
                    eventSystemFlags: r,
                    nativeEvent: t,
                    targetInst: n,
                    ancestors: []
                }
            }
            function pt(e) {
                var t = e.targetInst
                  , n = t;
                do {
                    if (!n) {
                        e.ancestors.push(n);
                        break
                    }
                    var r = n;
                    if (3 === r.tag)
                        r = r.stateNode.containerInfo;
                    else {
                        for (; r.return; )
                            r = r.return;
                        r = 3 !== r.tag ? null : r.stateNode.containerInfo
                    }
                    if (!r)
                        break;
                    5 !== (t = n.tag) && 6 !== t || e.ancestors.push(n),
                    n = An(r)
                } while (n);
                for (n = 0; n < e.ancestors.length; n++) {
                    t = e.ancestors[n];
                    var o = lt(e.nativeEvent);
                    r = e.topLevelType;
                    var i = e.nativeEvent
                      , a = e.eventSystemFlags;
                    0 === n && (a |= 64);
                    for (var l = null, u = 0; u < T.length; u++) {
                        var c = T[u];
                        c && (c = c.extractEvents(r, t, i, o, a)) && (l = nt(l, c))
                    }
                    at(l)
                }
            }
            function dt(e, t, n) {
                if (!n.has(e)) {
                    switch (e) {
                    case "scroll":
                        Qt(t, "scroll", !0);
                        break;
                    case "focus":
                    case "blur":
                        Qt(t, "focus", !0),
                        Qt(t, "blur", !0),
                        n.set("blur", null),
                        n.set("focus", null);
                        break;
                    case "cancel":
                    case "close":
                        ut(e) && Qt(t, e, !0);
                        break;
                    case "invalid":
                    case "submit":
                    case "reset":
                        break;
                    default:
                        -1 === Xe.indexOf(e) && Wt(e, t)
                    }
                    n.set(e, null)
                }
            }
            var ht, mt, gt, yt = !1, bt = [], vt = null, Et = null, wt = null, Tt = new Map, St = new Map, kt = [], xt = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(" "), _t = "focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" ");
            function Pt(e, t, n, r, o) {
                return {
                    blockedOn: e,
                    topLevelType: t,
                    eventSystemFlags: 32 | n,
                    nativeEvent: o,
                    container: r
                }
            }
            function Ct(e, t) {
                switch (e) {
                case "focus":
                case "blur":
                    vt = null;
                    break;
                case "dragenter":
                case "dragleave":
                    Et = null;
                    break;
                case "mouseover":
                case "mouseout":
                    wt = null;
                    break;
                case "pointerover":
                case "pointerout":
                    Tt.delete(t.pointerId);
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                    St.delete(t.pointerId)
                }
            }
            function Ot(e, t, n, r, o, i) {
                return null === e || e.nativeEvent !== i ? (e = Pt(t, n, r, o, i),
                null !== t && null !== (t = In(t)) && mt(t),
                e) : (e.eventSystemFlags |= r,
                e)
            }
            function Nt(e) {
                var t = An(e.target);
                if (null !== t) {
                    var n = Ze(t);
                    if (null !== n)
                        if (13 === (t = n.tag)) {
                            if (null !== (t = Je(n)))
                                return e.blockedOn = t,
                                void i.unstable_runWithPriority(e.priority, function() {
                                    gt(n)
                                })
                        } else if (3 === t && n.stateNode.hydrate)
                            return void (e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null)
                }
                e.blockedOn = null
            }
            function At(e) {
                if (null !== e.blockedOn)
                    return !1;
                var t = Yt(e.topLevelType, e.eventSystemFlags, e.container, e.nativeEvent);
                if (null !== t) {
                    var n = In(t);
                    return null !== n && mt(n),
                    e.blockedOn = t,
                    !1
                }
                return !0
            }
            function It(e, t, n) {
                At(e) && n.delete(t)
            }
            function Rt() {
                for (yt = !1; 0 < bt.length; ) {
                    var e = bt[0];
                    if (null !== e.blockedOn) {
                        null !== (e = In(e.blockedOn)) && ht(e);
                        break
                    }
                    var t = Yt(e.topLevelType, e.eventSystemFlags, e.container, e.nativeEvent);
                    null !== t ? e.blockedOn = t : bt.shift()
                }
                null !== vt && At(vt) && (vt = null),
                null !== Et && At(Et) && (Et = null),
                null !== wt && At(wt) && (wt = null),
                Tt.forEach(It),
                St.forEach(It)
            }
            function Mt(e, t) {
                e.blockedOn === t && (e.blockedOn = null,
                yt || (yt = !0,
                i.unstable_scheduleCallback(i.unstable_NormalPriority, Rt)))
            }
            function Lt(e) {
                function t(t) {
                    return Mt(t, e)
                }
                if (0 < bt.length) {
                    Mt(bt[0], e);
                    for (var n = 1; n < bt.length; n++) {
                        var r = bt[n];
                        r.blockedOn === e && (r.blockedOn = null)
                    }
                }
                for (null !== vt && Mt(vt, e),
                null !== Et && Mt(Et, e),
                null !== wt && Mt(wt, e),
                Tt.forEach(t),
                St.forEach(t),
                n = 0; n < kt.length; n++)
                    (r = kt[n]).blockedOn === e && (r.blockedOn = null);
                for (; 0 < kt.length && null === (n = kt[0]).blockedOn; )
                    Nt(n),
                    null === n.blockedOn && kt.shift()
            }
            var Dt = {}
              , Ht = new Map
              , Bt = new Map
              , jt = ["abort", "abort", Ve, "animationEnd", We, "animationIteration", Qe, "animationStart", "canplay", "canPlay", "canplaythrough", "canPlayThrough", "durationchange", "durationChange", "emptied", "emptied", "encrypted", "encrypted", "ended", "ended", "error", "error", "gotpointercapture", "gotPointerCapture", "load", "load", "loadeddata", "loadedData", "loadedmetadata", "loadedMetadata", "loadstart", "loadStart", "lostpointercapture", "lostPointerCapture", "playing", "playing", "progress", "progress", "seeking", "seeking", "stalled", "stalled", "suspend", "suspend", "timeupdate", "timeUpdate", Ke, "transitionEnd", "waiting", "waiting"];
            function Ft(e, t) {
                for (var n = 0; n < e.length; n += 2) {
                    var r = e[n]
                      , o = e[n + 1]
                      , i = "on" + (o[0].toUpperCase() + o.slice(1));
                    i = {
                        phasedRegistrationNames: {
                            bubbled: i,
                            captured: i + "Capture"
                        },
                        dependencies: [r],
                        eventPriority: t
                    },
                    Bt.set(r, t),
                    Ht.set(r, i),
                    Dt[o] = i
                }
            }
            Ft("blur blur cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focus focus input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "), 0),
            Ft("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1),
            Ft(jt, 2);
            for (var Ut = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), zt = 0; zt < Ut.length; zt++)
                Bt.set(Ut[zt], 0);
            var Gt = i.unstable_UserBlockingPriority
              , $t = i.unstable_runWithPriority
              , Vt = !0;
            function Wt(e, t) {
                Qt(t, e, !1)
            }
            function Qt(e, t, n) {
                var r = Bt.get(t);
                switch (void 0 === r ? 2 : r) {
                case 0:
                    r = Kt.bind(null, t, 1, e);
                    break;
                case 1:
                    r = Xt.bind(null, t, 1, e);
                    break;
                default:
                    r = qt.bind(null, t, 1, e)
                }
                n ? e.addEventListener(t, r, !0) : e.addEventListener(t, r, !1)
            }
            function Kt(e, t, n, r) {
                B || D();
                var o = qt
                  , i = B;
                B = !0;
                try {
                    L(o, e, t, n, r)
                } finally {
                    (B = i) || F()
                }
            }
            function Xt(e, t, n, r) {
                $t(Gt, qt.bind(null, e, t, n, r))
            }
            function qt(e, t, n, r) {
                if (Vt)
                    if (0 < bt.length && -1 < xt.indexOf(e))
                        e = Pt(null, e, t, n, r),
                        bt.push(e);
                    else {
                        var o = Yt(e, t, n, r);
                        if (null === o)
                            Ct(e, r);
                        else if (-1 < xt.indexOf(e))
                            e = Pt(o, e, t, n, r),
                            bt.push(e);
                        else if (!function(e, t, n, r, o) {
                            switch (t) {
                            case "focus":
                                return vt = Ot(vt, e, t, n, r, o),
                                !0;
                            case "dragenter":
                                return Et = Ot(Et, e, t, n, r, o),
                                !0;
                            case "mouseover":
                                return wt = Ot(wt, e, t, n, r, o),
                                !0;
                            case "pointerover":
                                var i = o.pointerId;
                                return Tt.set(i, Ot(Tt.get(i) || null, e, t, n, r, o)),
                                !0;
                            case "gotpointercapture":
                                return i = o.pointerId,
                                St.set(i, Ot(St.get(i) || null, e, t, n, r, o)),
                                !0
                            }
                            return !1
                        }(o, e, t, n, r)) {
                            Ct(e, r),
                            e = ft(e, r, null, t);
                            try {
                                U(pt, e)
                            } finally {
                                st(e)
                            }
                        }
                    }
            }
            function Yt(e, t, n, r) {
                if (null !== (n = An(n = lt(r)))) {
                    var o = Ze(n);
                    if (null === o)
                        n = null;
                    else {
                        var i = o.tag;
                        if (13 === i) {
                            if (null !== (n = Je(o)))
                                return n;
                            n = null
                        } else if (3 === i) {
                            if (o.stateNode.hydrate)
                                return 3 === o.tag ? o.stateNode.containerInfo : null;
                            n = null
                        } else
                            o !== n && (n = null)
                    }
                }
                e = ft(e, r, n, t);
                try {
                    U(pt, e)
                } finally {
                    st(e)
                }
                return null
            }
            var Zt = {
                animationIterationCount: !0,
                borderImageOutset: !0,
                borderImageSlice: !0,
                borderImageWidth: !0,
                boxFlex: !0,
                boxFlexGroup: !0,
                boxOrdinalGroup: !0,
                columnCount: !0,
                columns: !0,
                flex: !0,
                flexGrow: !0,
                flexPositive: !0,
                flexShrink: !0,
                flexNegative: !0,
                flexOrder: !0,
                gridArea: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowSpan: !0,
                gridRowStart: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnSpan: !0,
                gridColumnStart: !0,
                fontWeight: !0,
                lineClamp: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                tabSize: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0,
                fillOpacity: !0,
                floodOpacity: !0,
                stopOpacity: !0,
                strokeDasharray: !0,
                strokeDashoffset: !0,
                strokeMiterlimit: !0,
                strokeOpacity: !0,
                strokeWidth: !0
            }
              , Jt = ["Webkit", "ms", "Moz", "O"];
            function en(e, t, n) {
                return null == t || "boolean" == typeof t || "" === t ? "" : n || "number" != typeof t || 0 === t || Zt.hasOwnProperty(e) && Zt[e] ? ("" + t).trim() : t + "px"
            }
            function tn(e, t) {
                for (var n in e = e.style,
                t)
                    if (t.hasOwnProperty(n)) {
                        var r = 0 === n.indexOf("--")
                          , o = en(n, t[n], r);
                        "float" === n && (n = "cssFloat"),
                        r ? e.setProperty(n, o) : e[n] = o
                    }
            }
            Object.keys(Zt).forEach(function(e) {
                Jt.forEach(function(t) {
                    t = t + e.charAt(0).toUpperCase() + e.substring(1),
                    Zt[t] = Zt[e]
                })
            });
            var nn = o({
                menuitem: !0
            }, {
                area: !0,
                base: !0,
                br: !0,
                col: !0,
                embed: !0,
                hr: !0,
                img: !0,
                input: !0,
                keygen: !0,
                link: !0,
                meta: !0,
                param: !0,
                source: !0,
                track: !0,
                wbr: !0
            });
            function rn(e, t) {
                if (t) {
                    if (nn[e] && (null != t.children || null != t.dangerouslySetInnerHTML))
                        throw Error(a(137, e, ""));
                    if (null != t.dangerouslySetInnerHTML) {
                        if (null != t.children)
                            throw Error(a(60));
                        if ("object" != typeof t.dangerouslySetInnerHTML || !("__html"in t.dangerouslySetInnerHTML))
                            throw Error(a(61))
                    }
                    if (null != t.style && "object" != typeof t.style)
                        throw Error(a(62, ""))
                }
            }
            function on(e, t) {
                if (-1 === e.indexOf("-"))
                    return "string" == typeof t.is;
                switch (e) {
                case "annotation-xml":
                case "color-profile":
                case "font-face":
                case "font-face-src":
                case "font-face-uri":
                case "font-face-format":
                case "font-face-name":
                case "missing-glyph":
                    return !1;
                default:
                    return !0
                }
            }
            var an = "http://www.w3.org/1999/xhtml";
            function ln(e, t) {
                var n = Ye(e = 9 === e.nodeType || 11 === e.nodeType ? e : e.ownerDocument);
                t = x[t];
                for (var r = 0; r < t.length; r++)
                    dt(t[r], e, n)
            }
            function un() {}
            function cn(e) {
                if (void 0 === (e = e || ("undefined" != typeof document ? document : void 0)))
                    return null;
                try {
                    return e.activeElement || e.body
                } catch (t) {
                    return e.body
                }
            }
            function sn(e) {
                for (; e && e.firstChild; )
                    e = e.firstChild;
                return e
            }
            function fn(e, t) {
                var n, r = sn(e);
                for (e = 0; r; ) {
                    if (3 === r.nodeType) {
                        if (n = e + r.textContent.length,
                        e <= t && n >= t)
                            return {
                                node: r,
                                offset: t - e
                            };
                        e = n
                    }
                    e: {
                        for (; r; ) {
                            if (r.nextSibling) {
                                r = r.nextSibling;
                                break e
                            }
                            r = r.parentNode
                        }
                        r = void 0
                    }
                    r = sn(r)
                }
            }
            function pn(e, t) {
                return !(!e || !t) && (e === t || (!e || 3 !== e.nodeType) && (t && 3 === t.nodeType ? pn(e, t.parentNode) : "contains"in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t))))
            }
            function dn() {
                for (var e = window, t = cn(); t instanceof e.HTMLIFrameElement; ) {
                    try {
                        var n = "string" == typeof t.contentWindow.location.href
                    } catch (e) {
                        n = !1
                    }
                    if (!n)
                        break;
                    t = cn((e = t.contentWindow).document)
                }
                return t
            }
            function hn(e) {
                var t = e && e.nodeName && e.nodeName.toLowerCase();
                return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable)
            }
            var mn = "$"
              , gn = "/$"
              , yn = "$?"
              , bn = "$!"
              , vn = null
              , En = null;
            function wn(e, t) {
                switch (e) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                    return !!t.autoFocus
                }
                return !1
            }
            function Tn(e, t) {
                return "textarea" === e || "option" === e || "noscript" === e || "string" == typeof t.children || "number" == typeof t.children || "object" == typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html
            }
            var Sn = "function" == typeof setTimeout ? setTimeout : void 0
              , kn = "function" == typeof clearTimeout ? clearTimeout : void 0;
            function xn(e) {
                for (; null != e; e = e.nextSibling) {
                    var t = e.nodeType;
                    if (1 === t || 3 === t)
                        break
                }
                return e
            }
            function _n(e) {
                e = e.previousSibling;
                for (var t = 0; e; ) {
                    if (8 === e.nodeType) {
                        var n = e.data;
                        if (n === mn || n === bn || n === yn) {
                            if (0 === t)
                                return e;
                            t--
                        } else
                            n === gn && t++
                    }
                    e = e.previousSibling
                }
                return null
            }
            var Pn = Math.random().toString(36).slice(2)
              , Cn = "__reactInternalInstance$" + Pn
              , On = "__reactEventHandlers$" + Pn
              , Nn = "__reactContainere$" + Pn;
            function An(e) {
                var t = e[Cn];
                if (t)
                    return t;
                for (var n = e.parentNode; n; ) {
                    if (t = n[Nn] || n[Cn]) {
                        if (n = t.alternate,
                        null !== t.child || null !== n && null !== n.child)
                            for (e = _n(e); null !== e; ) {
                                if (n = e[Cn])
                                    return n;
                                e = _n(e)
                            }
                        return t
                    }
                    n = (e = n).parentNode
                }
                return null
            }
            function In(e) {
                return !(e = e[Cn] || e[Nn]) || 5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag ? null : e
            }
            function Rn(e) {
                if (5 === e.tag || 6 === e.tag)
                    return e.stateNode;
                throw Error(a(33))
            }
            function Mn(e) {
                return e[On] || null
            }
            function Ln(e) {
                do {
                    e = e.return
                } while (e && 5 !== e.tag);
                return e || null
            }
            function Dn(e, t) {
                var n = e.stateNode;
                if (!n)
                    return null;
                var r = h(n);
                if (!r)
                    return null;
                n = r[t];
                e: switch (t) {
                case "onClick":
                case "onClickCapture":
                case "onDoubleClick":
                case "onDoubleClickCapture":
                case "onMouseDown":
                case "onMouseDownCapture":
                case "onMouseMove":
                case "onMouseMoveCapture":
                case "onMouseUp":
                case "onMouseUpCapture":
                case "onMouseEnter":
                    (r = !r.disabled) || (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)),
                    e = !r;
                    break e;
                default:
                    e = !1
                }
                if (e)
                    return null;
                if (n && "function" != typeof n)
                    throw Error(a(231, t, typeof n));
                return n
            }
            function Hn(e, t, n) {
                (t = Dn(e, n.dispatchConfig.phasedRegistrationNames[t])) && (n._dispatchListeners = nt(n._dispatchListeners, t),
                n._dispatchInstances = nt(n._dispatchInstances, e))
            }
            function Bn(e) {
                if (e && e.dispatchConfig.phasedRegistrationNames) {
                    for (var t = e._targetInst, n = []; t; )
                        n.push(t),
                        t = Ln(t);
                    for (t = n.length; 0 < t--; )
                        Hn(n[t], "captured", e);
                    for (t = 0; t < n.length; t++)
                        Hn(n[t], "bubbled", e)
                }
            }
            function jn(e, t, n) {
                e && n && n.dispatchConfig.registrationName && (t = Dn(e, n.dispatchConfig.registrationName)) && (n._dispatchListeners = nt(n._dispatchListeners, t),
                n._dispatchInstances = nt(n._dispatchInstances, e))
            }
            function Fn(e) {
                e && e.dispatchConfig.registrationName && jn(e._targetInst, null, e)
            }
            function Un(e) {
                rt(e, Bn)
            }
            var zn = null
              , Gn = null
              , $n = null;
            function Vn() {
                if ($n)
                    return $n;
                var e, t, n = Gn, r = n.length, o = "value"in zn ? zn.value : zn.textContent, i = o.length;
                for (e = 0; e < r && n[e] === o[e]; e++)
                    ;
                var a = r - e;
                for (t = 1; t <= a && n[r - t] === o[i - t]; t++)
                    ;
                return $n = o.slice(e, 1 < t ? 1 - t : void 0)
            }
            function Wn() {
                return !0
            }
            function Qn() {
                return !1
            }
            function Kn(e, t, n, r) {
                for (var o in this.dispatchConfig = e,
                this._targetInst = t,
                this.nativeEvent = n,
                e = this.constructor.Interface)
                    e.hasOwnProperty(o) && ((t = e[o]) ? this[o] = t(n) : "target" === o ? this.target = r : this[o] = n[o]);
                return this.isDefaultPrevented = (null != n.defaultPrevented ? n.defaultPrevented : !1 === n.returnValue) ? Wn : Qn,
                this.isPropagationStopped = Qn,
                this
            }
            function Xn(e, t, n, r) {
                if (this.eventPool.length) {
                    var o = this.eventPool.pop();
                    return this.call(o, e, t, n, r),
                    o
                }
                return new this(e,t,n,r)
            }
            function qn(e) {
                if (!(e instanceof this))
                    throw Error(a(279));
                e.destructor(),
                10 > this.eventPool.length && this.eventPool.push(e)
            }
            function Yn(e) {
                e.eventPool = [],
                e.getPooled = Xn,
                e.release = qn
            }
            o(Kn.prototype, {
                preventDefault: function() {
                    this.defaultPrevented = !0;
                    var e = this.nativeEvent;
                    e && (e.preventDefault ? e.preventDefault() : "unknown" != typeof e.returnValue && (e.returnValue = !1),
                    this.isDefaultPrevented = Wn)
                },
                stopPropagation: function() {
                    var e = this.nativeEvent;
                    e && (e.stopPropagation ? e.stopPropagation() : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0),
                    this.isPropagationStopped = Wn)
                },
                persist: function() {
                    this.isPersistent = Wn
                },
                isPersistent: Qn,
                destructor: function() {
                    var e, t = this.constructor.Interface;
                    for (e in t)
                        this[e] = null;
                    this.nativeEvent = this._targetInst = this.dispatchConfig = null,
                    this.isPropagationStopped = this.isDefaultPrevented = Qn,
                    this._dispatchInstances = this._dispatchListeners = null
                }
            }),
            Kn.Interface = {
                type: null,
                target: null,
                currentTarget: function() {
                    return null
                },
                eventPhase: null,
                bubbles: null,
                cancelable: null,
                timeStamp: function(e) {
                    return e.timeStamp || Date.now()
                },
                defaultPrevented: null,
                isTrusted: null
            },
            Kn.extend = function(e) {
                function t() {}
                function n() {
                    return r.apply(this, arguments)
                }
                var r = this;
                t.prototype = r.prototype;
                var i = new t;
                return o(i, n.prototype),
                n.prototype = i,
                n.prototype.constructor = n,
                n.Interface = o({}, r.Interface, e),
                n.extend = r.extend,
                Yn(n),
                n
            }
            ,
            Yn(Kn);
            var Zn = Kn.extend({
                data: null
            })
              , Jn = Kn.extend({
                data: null
            })
              , er = [9, 13, 27, 32]
              , tr = P && "CompositionEvent"in window
              , nr = null;
            P && "documentMode"in document && (nr = document.documentMode);
            var rr = P && "TextEvent"in window && !nr
              , or = P && (!tr || nr && 8 < nr && 11 >= nr)
              , ir = String.fromCharCode(32)
              , ar = {
                beforeInput: {
                    phasedRegistrationNames: {
                        bubbled: "onBeforeInput",
                        captured: "onBeforeInputCapture"
                    },
                    dependencies: ["compositionend", "keypress", "textInput", "paste"]
                },
                compositionEnd: {
                    phasedRegistrationNames: {
                        bubbled: "onCompositionEnd",
                        captured: "onCompositionEndCapture"
                    },
                    dependencies: "blur compositionend keydown keypress keyup mousedown".split(" ")
                },
                compositionStart: {
                    phasedRegistrationNames: {
                        bubbled: "onCompositionStart",
                        captured: "onCompositionStartCapture"
                    },
                    dependencies: "blur compositionstart keydown keypress keyup mousedown".split(" ")
                },
                compositionUpdate: {
                    phasedRegistrationNames: {
                        bubbled: "onCompositionUpdate",
                        captured: "onCompositionUpdateCapture"
                    },
                    dependencies: "blur compositionupdate keydown keypress keyup mousedown".split(" ")
                }
            }
              , lr = !1;
            function ur(e, t) {
                switch (e) {
                case "keyup":
                    return -1 !== er.indexOf(t.keyCode);
                case "keydown":
                    return 229 !== t.keyCode;
                case "keypress":
                case "mousedown":
                case "blur":
                    return !0;
                default:
                    return !1
                }
            }
            function cr(e) {
                return "object" == typeof (e = e.detail) && "data"in e ? e.data : null
            }
            var sr = !1
              , fr = {
                eventTypes: ar,
                extractEvents: function(e, t, n, r) {
                    var o;
                    if (tr)
                        e: {
                            switch (e) {
                            case "compositionstart":
                                var i = ar.compositionStart;
                                break e;
                            case "compositionend":
                                i = ar.compositionEnd;
                                break e;
                            case "compositionupdate":
                                i = ar.compositionUpdate;
                                break e
                            }
                            i = void 0
                        }
                    else
                        sr ? ur(e, n) && (i = ar.compositionEnd) : "keydown" === e && 229 === n.keyCode && (i = ar.compositionStart);
                    return i ? (or && "ko" !== n.locale && (sr || i !== ar.compositionStart ? i === ar.compositionEnd && sr && (o = Vn()) : (Gn = "value"in (zn = r) ? zn.value : zn.textContent,
                    sr = !0)),
                    i = Zn.getPooled(i, t, n, r),
                    (o || null !== (o = cr(n))) && (i.data = o),
                    Un(i),
                    o = i) : o = null,
                    (e = rr ? function(e, t) {
                        switch (e) {
                        case "compositionend":
                            return cr(t);
                        case "keypress":
                            return 32 !== t.which ? null : (lr = !0,
                            ir);
                        case "textInput":
                            return (e = t.data) === ir && lr ? null : e;
                        default:
                            return null
                        }
                    }(e, n) : function(e, t) {
                        if (sr)
                            return "compositionend" === e || !tr && ur(e, t) ? (e = Vn(),
                            $n = Gn = zn = null,
                            sr = !1,
                            e) : null;
                        switch (e) {
                        case "paste":
                        default:
                            return null;
                        case "keypress":
                            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                                if (t.char && 1 < t.char.length)
                                    return t.char;
                                if (t.which)
                                    return String.fromCharCode(t.which)
                            }
                            return null;
                        case "compositionend":
                            return or && "ko" !== t.locale ? null : t.data
                        }
                    }(e, n)) ? ((t = Jn.getPooled(ar.beforeInput, t, n, r)).data = e,
                    Un(t)) : t = null,
                    null === o ? t : null === t ? o : [o, t]
                }
            }
              , pr = {
                color: !0,
                date: !0,
                datetime: !0,
                "datetime-local": !0,
                email: !0,
                month: !0,
                number: !0,
                password: !0,
                range: !0,
                search: !0,
                tel: !0,
                text: !0,
                time: !0,
                url: !0,
                week: !0
            };
            function dr(e) {
                var t = e && e.nodeName && e.nodeName.toLowerCase();
                return "input" === t ? !!pr[e.type] : "textarea" === t
            }
            var hr = {
                change: {
                    phasedRegistrationNames: {
                        bubbled: "onChange",
                        captured: "onChangeCapture"
                    },
                    dependencies: "blur change click focus input keydown keyup selectionchange".split(" ")
                }
            };
            function mr(e, t, n) {
                return (e = Kn.getPooled(hr.change, e, t, n)).type = "change",
                I(n),
                Un(e),
                e
            }
            var gr = null
              , yr = null;
            function br(e) {
                at(e)
            }
            function vr(e) {
                if (we(Rn(e)))
                    return e
            }
            function Er(e, t) {
                if ("change" === e)
                    return t
            }
            var wr = !1;
            function Tr() {
                gr && (gr.detachEvent("onpropertychange", Sr),
                yr = gr = null)
            }
            function Sr(e) {
                if ("value" === e.propertyName && vr(yr))
                    if (e = mr(yr, e, lt(e)),
                    B)
                        at(e);
                    else {
                        B = !0;
                        try {
                            M(br, e)
                        } finally {
                            B = !1,
                            F()
                        }
                    }
            }
            function kr(e, t, n) {
                "focus" === e ? (Tr(),
                yr = n,
                (gr = t).attachEvent("onpropertychange", Sr)) : "blur" === e && Tr()
            }
            function xr(e) {
                if ("selectionchange" === e || "keyup" === e || "keydown" === e)
                    return vr(yr)
            }
            function _r(e, t) {
                if ("click" === e)
                    return vr(t)
            }
            function Pr(e, t) {
                if ("input" === e || "change" === e)
                    return vr(t)
            }
            P && (wr = ut("input") && (!document.documentMode || 9 < document.documentMode));
            var Cr = {
                eventTypes: hr,
                _isInputEventSupported: wr,
                extractEvents: function(e, t, n, r) {
                    var o = t ? Rn(t) : window
                      , i = o.nodeName && o.nodeName.toLowerCase();
                    if ("select" === i || "input" === i && "file" === o.type)
                        var a = Er;
                    else if (dr(o))
                        if (wr)
                            a = Pr;
                        else {
                            a = xr;
                            var l = kr
                        }
                    else
                        (i = o.nodeName) && "input" === i.toLowerCase() && ("checkbox" === o.type || "radio" === o.type) && (a = _r);
                    if (a && (a = a(e, t)))
                        return mr(a, n, r);
                    l && l(e, o, t),
                    "blur" === e && (e = o._wrapperState) && e.controlled && "number" === o.type && Pe(o, "number", o.value)
                }
            }
              , Or = Kn.extend({
                view: null,
                detail: null
            })
              , Nr = {
                Alt: "altKey",
                Control: "ctrlKey",
                Meta: "metaKey",
                Shift: "shiftKey"
            };
            function Ar(e) {
                var t = this.nativeEvent;
                return t.getModifierState ? t.getModifierState(e) : !!(e = Nr[e]) && !!t[e]
            }
            function Ir() {
                return Ar
            }
            var Rr = 0
              , Mr = 0
              , Lr = !1
              , Dr = !1
              , Hr = Or.extend({
                screenX: null,
                screenY: null,
                clientX: null,
                clientY: null,
                pageX: null,
                pageY: null,
                ctrlKey: null,
                shiftKey: null,
                altKey: null,
                metaKey: null,
                getModifierState: Ir,
                button: null,
                buttons: null,
                relatedTarget: function(e) {
                    return e.relatedTarget || (e.fromElement === e.srcElement ? e.toElement : e.fromElement)
                },
                movementX: function(e) {
                    if ("movementX"in e)
                        return e.movementX;
                    var t = Rr;
                    return Rr = e.screenX,
                    Lr ? "mousemove" === e.type ? e.screenX - t : 0 : (Lr = !0,
                    0)
                },
                movementY: function(e) {
                    if ("movementY"in e)
                        return e.movementY;
                    var t = Mr;
                    return Mr = e.screenY,
                    Dr ? "mousemove" === e.type ? e.screenY - t : 0 : (Dr = !0,
                    0)
                }
            })
              , Br = Hr.extend({
                pointerId: null,
                width: null,
                height: null,
                pressure: null,
                tangentialPressure: null,
                tiltX: null,
                tiltY: null,
                twist: null,
                pointerType: null,
                isPrimary: null
            })
              , jr = {
                mouseEnter: {
                    registrationName: "onMouseEnter",
                    dependencies: ["mouseout", "mouseover"]
                },
                mouseLeave: {
                    registrationName: "onMouseLeave",
                    dependencies: ["mouseout", "mouseover"]
                },
                pointerEnter: {
                    registrationName: "onPointerEnter",
                    dependencies: ["pointerout", "pointerover"]
                },
                pointerLeave: {
                    registrationName: "onPointerLeave",
                    dependencies: ["pointerout", "pointerover"]
                }
            }
              , Fr = {
                eventTypes: jr,
                extractEvents: function(e, t, n, r, o) {
                    var i = "mouseover" === e || "pointerover" === e
                      , a = "mouseout" === e || "pointerout" === e;
                    if (i && !(32 & o) && (n.relatedTarget || n.fromElement) || !a && !i)
                        return null;
                    if (i = r.window === r ? r : (i = r.ownerDocument) ? i.defaultView || i.parentWindow : window,
                    a ? (a = t,
                    null !== (t = (t = n.relatedTarget || n.toElement) ? An(t) : null) && (t !== Ze(t) || 5 !== t.tag && 6 !== t.tag) && (t = null)) : a = null,
                    a === t)
                        return null;
                    if ("mouseout" === e || "mouseover" === e)
                        var l = Hr
                          , u = jr.mouseLeave
                          , c = jr.mouseEnter
                          , s = "mouse";
                    else
                        "pointerout" !== e && "pointerover" !== e || (l = Br,
                        u = jr.pointerLeave,
                        c = jr.pointerEnter,
                        s = "pointer");
                    if (e = null == a ? i : Rn(a),
                    i = null == t ? i : Rn(t),
                    (u = l.getPooled(u, a, n, r)).type = s + "leave",
                    u.target = e,
                    u.relatedTarget = i,
                    (n = l.getPooled(c, t, n, r)).type = s + "enter",
                    n.target = i,
                    n.relatedTarget = e,
                    s = t,
                    (r = a) && s)
                        e: {
                            for (c = s,
                            a = 0,
                            e = l = r; e; e = Ln(e))
                                a++;
                            for (e = 0,
                            t = c; t; t = Ln(t))
                                e++;
                            for (; 0 < a - e; )
                                l = Ln(l),
                                a--;
                            for (; 0 < e - a; )
                                c = Ln(c),
                                e--;
                            for (; a--; ) {
                                if (l === c || l === c.alternate)
                                    break e;
                                l = Ln(l),
                                c = Ln(c)
                            }
                            l = null
                        }
                    else
                        l = null;
                    for (c = l,
                    l = []; r && r !== c && (null === (a = r.alternate) || a !== c); )
                        l.push(r),
                        r = Ln(r);
                    for (r = []; s && s !== c && (null === (a = s.alternate) || a !== c); )
                        r.push(s),
                        s = Ln(s);
                    for (s = 0; s < l.length; s++)
                        jn(l[s], "bubbled", u);
                    for (s = r.length; 0 < s--; )
                        jn(r[s], "captured", n);
                    return 64 & o ? [u, n] : [u]
                }
            }
              , Ur = "function" == typeof Object.is ? Object.is : function(e, t) {
                return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
            }
              , zr = Object.prototype.hasOwnProperty;
            function Gr(e, t) {
                if (Ur(e, t))
                    return !0;
                if ("object" != typeof e || null === e || "object" != typeof t || null === t)
                    return !1;
                var n = Object.keys(e)
                  , r = Object.keys(t);
                if (n.length !== r.length)
                    return !1;
                for (r = 0; r < n.length; r++)
                    if (!zr.call(t, n[r]) || !Ur(e[n[r]], t[n[r]]))
                        return !1;
                return !0
            }
            var $r = P && "documentMode"in document && 11 >= document.documentMode
              , Vr = {
                select: {
                    phasedRegistrationNames: {
                        bubbled: "onSelect",
                        captured: "onSelectCapture"
                    },
                    dependencies: "blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")
                }
            }
              , Wr = null
              , Qr = null
              , Kr = null
              , Xr = !1;
            function qr(e, t) {
                var n = t.window === t ? t.document : 9 === t.nodeType ? t : t.ownerDocument;
                return Xr || null == Wr || Wr !== cn(n) ? null : (n = "selectionStart"in (n = Wr) && hn(n) ? {
                    start: n.selectionStart,
                    end: n.selectionEnd
                } : {
                    anchorNode: (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection()).anchorNode,
                    anchorOffset: n.anchorOffset,
                    focusNode: n.focusNode,
                    focusOffset: n.focusOffset
                },
                Kr && Gr(Kr, n) ? null : (Kr = n,
                (e = Kn.getPooled(Vr.select, Qr, e, t)).type = "select",
                e.target = Wr,
                Un(e),
                e))
            }
            var Yr = {
                eventTypes: Vr,
                extractEvents: function(e, t, n, r, o, i) {
                    if (!(i = !(o = i || (r.window === r ? r.document : 9 === r.nodeType ? r : r.ownerDocument)))) {
                        e: {
                            o = Ye(o),
                            i = x.onSelect;
                            for (var a = 0; a < i.length; a++)
                                if (!o.has(i[a])) {
                                    o = !1;
                                    break e
                                }
                            o = !0
                        }
                        i = !o
                    }
                    if (i)
                        return null;
                    switch (o = t ? Rn(t) : window,
                    e) {
                    case "focus":
                        (dr(o) || "true" === o.contentEditable) && (Wr = o,
                        Qr = t,
                        Kr = null);
                        break;
                    case "blur":
                        Kr = Qr = Wr = null;
                        break;
                    case "mousedown":
                        Xr = !0;
                        break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                        return Xr = !1,
                        qr(n, r);
                    case "selectionchange":
                        if ($r)
                            break;
                    case "keydown":
                    case "keyup":
                        return qr(n, r)
                    }
                    return null
                }
            }
              , Zr = Kn.extend({
                animationName: null,
                elapsedTime: null,
                pseudoElement: null
            })
              , Jr = Kn.extend({
                clipboardData: function(e) {
                    return "clipboardData"in e ? e.clipboardData : window.clipboardData
                }
            })
              , eo = Or.extend({
                relatedTarget: null
            });
            function to(e) {
                var t = e.keyCode;
                return "charCode"in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t,
                10 === e && (e = 13),
                32 <= e || 13 === e ? e : 0
            }
            var no = {
                Esc: "Escape",
                Spacebar: " ",
                Left: "ArrowLeft",
                Up: "ArrowUp",
                Right: "ArrowRight",
                Down: "ArrowDown",
                Del: "Delete",
                Win: "OS",
                Menu: "ContextMenu",
                Apps: "ContextMenu",
                Scroll: "ScrollLock",
                MozPrintableKey: "Unidentified"
            }
              , ro = {
                8: "Backspace",
                9: "Tab",
                12: "Clear",
                13: "Enter",
                16: "Shift",
                17: "Control",
                18: "Alt",
                19: "Pause",
                20: "CapsLock",
                27: "Escape",
                32: " ",
                33: "PageUp",
                34: "PageDown",
                35: "End",
                36: "Home",
                37: "ArrowLeft",
                38: "ArrowUp",
                39: "ArrowRight",
                40: "ArrowDown",
                45: "Insert",
                46: "Delete",
                112: "F1",
                113: "F2",
                114: "F3",
                115: "F4",
                116: "F5",
                117: "F6",
                118: "F7",
                119: "F8",
                120: "F9",
                121: "F10",
                122: "F11",
                123: "F12",
                144: "NumLock",
                145: "ScrollLock",
                224: "Meta"
            }
              , oo = Or.extend({
                key: function(e) {
                    if (e.key) {
                        var t = no[e.key] || e.key;
                        if ("Unidentified" !== t)
                            return t
                    }
                    return "keypress" === e.type ? 13 === (e = to(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? ro[e.keyCode] || "Unidentified" : ""
                },
                location: null,
                ctrlKey: null,
                shiftKey: null,
                altKey: null,
                metaKey: null,
                repeat: null,
                locale: null,
                getModifierState: Ir,
                charCode: function(e) {
                    return "keypress" === e.type ? to(e) : 0
                },
                keyCode: function(e) {
                    return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                },
                which: function(e) {
                    return "keypress" === e.type ? to(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                }
            })
              , io = Hr.extend({
                dataTransfer: null
            })
              , ao = Or.extend({
                touches: null,
                targetTouches: null,
                changedTouches: null,
                altKey: null,
                metaKey: null,
                ctrlKey: null,
                shiftKey: null,
                getModifierState: Ir
            })
              , lo = Kn.extend({
                propertyName: null,
                elapsedTime: null,
                pseudoElement: null
            })
              , uo = Hr.extend({
                deltaX: function(e) {
                    return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
                },
                deltaY: function(e) {
                    return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
                },
                deltaZ: null,
                deltaMode: null
            })
              , co = {
                eventTypes: Dt,
                extractEvents: function(e, t, n, r) {
                    var o = Ht.get(e);
                    if (!o)
                        return null;
                    switch (e) {
                    case "keypress":
                        if (0 === to(n))
                            return null;
                    case "keydown":
                    case "keyup":
                        e = oo;
                        break;
                    case "blur":
                    case "focus":
                        e = eo;
                        break;
                    case "click":
                        if (2 === n.button)
                            return null;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        e = Hr;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        e = io;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        e = ao;
                        break;
                    case Ve:
                    case We:
                    case Qe:
                        e = Zr;
                        break;
                    case Ke:
                        e = lo;
                        break;
                    case "scroll":
                        e = Or;
                        break;
                    case "wheel":
                        e = uo;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        e = Jr;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        e = Br;
                        break;
                    default:
                        e = Kn
                    }
                    return Un(t = e.getPooled(o, t, n, r)),
                    t
                }
            };
            if (b)
                throw Error(a(101));
            b = Array.prototype.slice.call("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" ")),
            E(),
            h = Mn,
            m = In,
            g = Rn,
            _({
                SimpleEventPlugin: co,
                EnterLeaveEventPlugin: Fr,
                ChangeEventPlugin: Cr,
                SelectEventPlugin: Yr,
                BeforeInputEventPlugin: fr
            });
            var so = []
              , fo = -1;
            function po(e) {
                0 > fo || (e.current = so[fo],
                so[fo] = null,
                fo--)
            }
            function ho(e, t) {
                fo++,
                so[fo] = e.current,
                e.current = t
            }
            var mo = {}
              , go = {
                current: mo
            }
              , yo = {
                current: !1
            }
              , bo = mo;
            function vo(e, t) {
                var n = e.type.contextTypes;
                if (!n)
                    return mo;
                var r = e.stateNode;
                if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
                    return r.__reactInternalMemoizedMaskedChildContext;
                var o, i = {};
                for (o in n)
                    i[o] = t[o];
                return r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t,
                e.__reactInternalMemoizedMaskedChildContext = i),
                i
            }
            function Eo(e) {
                return null != e.childContextTypes
            }
            function wo() {
                po(yo),
                po(go)
            }
            function To(e, t, n) {
                if (go.current !== mo)
                    throw Error(a(168));
                ho(go, t),
                ho(yo, n)
            }
            function So(e, t, n) {
                var r = e.stateNode;
                if (e = t.childContextTypes,
                "function" != typeof r.getChildContext)
                    return n;
                for (var i in r = r.getChildContext())
                    if (!(i in e))
                        throw Error(a(108, ge(t) || "Unknown", i));
                return o({}, n, {}, r)
            }
            function ko(e) {
                return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || mo,
                bo = go.current,
                ho(go, e),
                ho(yo, yo.current),
                !0
            }
            function xo(e, t, n) {
                var r = e.stateNode;
                if (!r)
                    throw Error(a(169));
                n ? (e = So(e, t, bo),
                r.__reactInternalMemoizedMergedChildContext = e,
                po(yo),
                po(go),
                ho(go, e)) : po(yo),
                ho(yo, n)
            }
            var _o = i.unstable_runWithPriority
              , Po = i.unstable_scheduleCallback
              , Co = i.unstable_cancelCallback
              , Oo = i.unstable_requestPaint
              , No = i.unstable_now
              , Ao = i.unstable_getCurrentPriorityLevel
              , Io = i.unstable_ImmediatePriority
              , Ro = i.unstable_UserBlockingPriority
              , Mo = i.unstable_NormalPriority
              , Lo = i.unstable_LowPriority
              , Do = i.unstable_IdlePriority
              , Ho = {}
              , Bo = i.unstable_shouldYield
              , jo = void 0 !== Oo ? Oo : function() {}
              , Fo = null
              , Uo = null
              , zo = !1
              , Go = No()
              , $o = 1e4 > Go ? No : function() {
                return No() - Go
            }
            ;
            function Vo() {
                switch (Ao()) {
                case Io:
                    return 99;
                case Ro:
                    return 98;
                case Mo:
                    return 97;
                case Lo:
                    return 96;
                case Do:
                    return 95;
                default:
                    throw Error(a(332))
                }
            }
            function Wo(e) {
                switch (e) {
                case 99:
                    return Io;
                case 98:
                    return Ro;
                case 97:
                    return Mo;
                case 96:
                    return Lo;
                case 95:
                    return Do;
                default:
                    throw Error(a(332))
                }
            }
            function Qo(e, t) {
                return e = Wo(e),
                _o(e, t)
            }
            function Ko(e, t, n) {
                return e = Wo(e),
                Po(e, t, n)
            }
            function Xo(e) {
                return null === Fo ? (Fo = [e],
                Uo = Po(Io, Yo)) : Fo.push(e),
                Ho
            }
            function qo() {
                if (null !== Uo) {
                    var e = Uo;
                    Uo = null,
                    Co(e)
                }
                Yo()
            }
            function Yo() {
                if (!zo && null !== Fo) {
                    zo = !0;
                    var e = 0;
                    try {
                        var t = Fo;
                        Qo(99, function() {
                            for (; e < t.length; e++) {
                                var n = t[e];
                                do {
                                    n = n(!0)
                                } while (null !== n)
                            }
                        }),
                        Fo = null
                    } catch (t) {
                        throw null !== Fo && (Fo = Fo.slice(e + 1)),
                        Po(Io, qo),
                        t
                    } finally {
                        zo = !1
                    }
                }
            }
            function Zo(e, t, n) {
                return 1073741821 - (1 + ((1073741821 - e + t / 10) / (n /= 10) | 0)) * n
            }
            function Jo(e, t) {
                if (e && e.defaultProps)
                    for (var n in t = o({}, t),
                    e = e.defaultProps)
                        void 0 === t[n] && (t[n] = e[n]);
                return t
            }
            var ei = {
                current: null
            }
              , ti = null
              , ni = null
              , ri = null;
            function oi() {
                ri = ni = ti = null
            }
            function ii(e) {
                var t = ei.current;
                po(ei),
                e.type._context._currentValue = t
            }
            function ai(e, t) {
                for (; null !== e; ) {
                    var n = e.alternate;
                    if (e.childExpirationTime < t)
                        e.childExpirationTime = t,
                        null !== n && n.childExpirationTime < t && (n.childExpirationTime = t);
                    else {
                        if (!(null !== n && n.childExpirationTime < t))
                            break;
                        n.childExpirationTime = t
                    }
                    e = e.return
                }
            }
            function li(e, t) {
                ti = e,
                ri = ni = null,
                null !== (e = e.dependencies) && null !== e.firstContext && (e.expirationTime >= t && (Ma = !0),
                e.firstContext = null)
            }
            function ui(e, t) {
                if (ri !== e && !1 !== t && 0 !== t)
                    if ("number" == typeof t && 1073741823 !== t || (ri = e,
                    t = 1073741823),
                    t = {
                        context: e,
                        observedBits: t,
                        next: null
                    },
                    null === ni) {
                        if (null === ti)
                            throw Error(a(308));
                        ni = t,
                        ti.dependencies = {
                            expirationTime: 0,
                            firstContext: t,
                            responders: null
                        }
                    } else
                        ni = ni.next = t;
                return e._currentValue
            }
            var ci = !1;
            function si(e) {
                e.updateQueue = {
                    baseState: e.memoizedState,
                    baseQueue: null,
                    shared: {
                        pending: null
                    },
                    effects: null
                }
            }
            function fi(e, t) {
                e = e.updateQueue,
                t.updateQueue === e && (t.updateQueue = {
                    baseState: e.baseState,
                    baseQueue: e.baseQueue,
                    shared: e.shared,
                    effects: e.effects
                })
            }
            function pi(e, t) {
                return (e = {
                    expirationTime: e,
                    suspenseConfig: t,
                    tag: 0,
                    payload: null,
                    callback: null,
                    next: null
                }).next = e
            }
            function di(e, t) {
                if (null !== (e = e.updateQueue)) {
                    var n = (e = e.shared).pending;
                    null === n ? t.next = t : (t.next = n.next,
                    n.next = t),
                    e.pending = t
                }
            }
            function hi(e, t) {
                var n = e.alternate;
                null !== n && fi(n, e),
                null === (n = (e = e.updateQueue).baseQueue) ? (e.baseQueue = t.next = t,
                t.next = t) : (t.next = n.next,
                n.next = t)
            }
            function mi(e, t, n, r) {
                var i = e.updateQueue;
                ci = !1;
                var a = i.baseQueue
                  , l = i.shared.pending;
                if (null !== l) {
                    if (null !== a) {
                        var u = a.next;
                        a.next = l.next,
                        l.next = u
                    }
                    a = l,
                    i.shared.pending = null,
                    null !== (u = e.alternate) && null !== (u = u.updateQueue) && (u.baseQueue = l)
                }
                if (null !== a) {
                    u = a.next;
                    var c = i.baseState
                      , s = 0
                      , f = null
                      , p = null
                      , d = null;
                    if (null !== u)
                        for (var h = u; ; ) {
                            if ((l = h.expirationTime) < r) {
                                var m = {
                                    expirationTime: h.expirationTime,
                                    suspenseConfig: h.suspenseConfig,
                                    tag: h.tag,
                                    payload: h.payload,
                                    callback: h.callback,
                                    next: null
                                };
                                null === d ? (p = d = m,
                                f = c) : d = d.next = m,
                                l > s && (s = l)
                            } else {
                                null !== d && (d = d.next = {
                                    expirationTime: 1073741823,
                                    suspenseConfig: h.suspenseConfig,
                                    tag: h.tag,
                                    payload: h.payload,
                                    callback: h.callback,
                                    next: null
                                }),
                                Eu(l, h.suspenseConfig);
                                e: {
                                    var g = e
                                      , y = h;
                                    switch (l = t,
                                    m = n,
                                    y.tag) {
                                    case 1:
                                        if ("function" == typeof (g = y.payload)) {
                                            c = g.call(m, c, l);
                                            break e
                                        }
                                        c = g;
                                        break e;
                                    case 3:
                                        g.effectTag = -4097 & g.effectTag | 64;
                                    case 0:
                                        if (null == (l = "function" == typeof (g = y.payload) ? g.call(m, c, l) : g))
                                            break e;
                                        c = o({}, c, l);
                                        break e;
                                    case 2:
                                        ci = !0
                                    }
                                }
                                null !== h.callback && (e.effectTag |= 32,
                                null === (l = i.effects) ? i.effects = [h] : l.push(h))
                            }
                            if (null === (h = h.next) || h === u) {
                                if (null === (l = i.shared.pending))
                                    break;
                                h = a.next = l.next,
                                l.next = u,
                                i.baseQueue = a = l,
                                i.shared.pending = null
                            }
                        }
                    null === d ? f = c : d.next = p,
                    i.baseState = f,
                    i.baseQueue = d,
                    wu(s),
                    e.expirationTime = s,
                    e.memoizedState = c
                }
            }
            function gi(e, t, n) {
                if (e = t.effects,
                t.effects = null,
                null !== e)
                    for (t = 0; t < e.length; t++) {
                        var r = e[t]
                          , o = r.callback;
                        if (null !== o) {
                            if (r.callback = null,
                            r = o,
                            o = n,
                            "function" != typeof r)
                                throw Error(a(191, r));
                            r.call(o)
                        }
                    }
            }
            var yi = q.ReactCurrentBatchConfig
              , bi = (new r.Component).refs;
            function vi(e, t, n, r) {
                n = null == (n = n(r, t = e.memoizedState)) ? t : o({}, t, n),
                e.memoizedState = n,
                0 === e.expirationTime && (e.updateQueue.baseState = n)
            }
            var Ei = {
                isMounted: function(e) {
                    return !!(e = e._reactInternalFiber) && Ze(e) === e
                },
                enqueueSetState: function(e, t, n) {
                    e = e._reactInternalFiber;
                    var r = lu()
                      , o = yi.suspense;
                    (o = pi(r = uu(r, e, o), o)).payload = t,
                    null != n && (o.callback = n),
                    di(e, o),
                    cu(e, r)
                },
                enqueueReplaceState: function(e, t, n) {
                    e = e._reactInternalFiber;
                    var r = lu()
                      , o = yi.suspense;
                    (o = pi(r = uu(r, e, o), o)).tag = 1,
                    o.payload = t,
                    null != n && (o.callback = n),
                    di(e, o),
                    cu(e, r)
                },
                enqueueForceUpdate: function(e, t) {
                    e = e._reactInternalFiber;
                    var n = lu()
                      , r = yi.suspense;
                    (r = pi(n = uu(n, e, r), r)).tag = 2,
                    null != t && (r.callback = t),
                    di(e, r),
                    cu(e, n)
                }
            };
            function wi(e, t, n, r, o, i, a) {
                return "function" == typeof (e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, i, a) : !(t.prototype && t.prototype.isPureReactComponent && Gr(n, r) && Gr(o, i))
            }
            function Ti(e, t, n) {
                var r = !1
                  , o = mo
                  , i = t.contextType;
                return "object" == typeof i && null !== i ? i = ui(i) : (o = Eo(t) ? bo : go.current,
                i = (r = null != (r = t.contextTypes)) ? vo(e, o) : mo),
                t = new t(n,i),
                e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null,
                t.updater = Ei,
                e.stateNode = t,
                t._reactInternalFiber = e,
                r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = o,
                e.__reactInternalMemoizedMaskedChildContext = i),
                t
            }
            function Si(e, t, n, r) {
                e = t.state,
                "function" == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r),
                "function" == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r),
                t.state !== e && Ei.enqueueReplaceState(t, t.state, null)
            }
            function ki(e, t, n, r) {
                var o = e.stateNode;
                o.props = n,
                o.state = e.memoizedState,
                o.refs = bi,
                si(e);
                var i = t.contextType;
                "object" == typeof i && null !== i ? o.context = ui(i) : (i = Eo(t) ? bo : go.current,
                o.context = vo(e, i)),
                mi(e, n, o, r),
                o.state = e.memoizedState,
                "function" == typeof (i = t.getDerivedStateFromProps) && (vi(e, t, i, n),
                o.state = e.memoizedState),
                "function" == typeof t.getDerivedStateFromProps || "function" == typeof o.getSnapshotBeforeUpdate || "function" != typeof o.UNSAFE_componentWillMount && "function" != typeof o.componentWillMount || (t = o.state,
                "function" == typeof o.componentWillMount && o.componentWillMount(),
                "function" == typeof o.UNSAFE_componentWillMount && o.UNSAFE_componentWillMount(),
                t !== o.state && Ei.enqueueReplaceState(o, o.state, null),
                mi(e, n, o, r),
                o.state = e.memoizedState),
                "function" == typeof o.componentDidMount && (e.effectTag |= 4)
            }
            var xi = Array.isArray;
            function _i(e, t, n) {
                if (null !== (e = n.ref) && "function" != typeof e && "object" != typeof e) {
                    if (n._owner) {
                        if (n = n._owner) {
                            if (1 !== n.tag)
                                throw Error(a(309));
                            var r = n.stateNode
                        }
                        if (!r)
                            throw Error(a(147, e));
                        var o = "" + e;
                        return null !== t && null !== t.ref && "function" == typeof t.ref && t.ref._stringRef === o ? t.ref : (t = function(e) {
                            var t = r.refs;
                            t === bi && (t = r.refs = {}),
                            null === e ? delete t[o] : t[o] = e
                        }
                        ,
                        t._stringRef = o,
                        t)
                    }
                    if ("string" != typeof e)
                        throw Error(a(284));
                    if (!n._owner)
                        throw Error(a(290, e))
                }
                return e
            }
            function Pi(e, t) {
                if ("textarea" !== e.type)
                    throw Error(a(31, "[object Object]" === Object.prototype.toString.call(t) ? "object with keys {" + Object.keys(t).join(", ") + "}" : t, ""))
            }
            function Ci(e) {
                function t(t, n) {
                    if (e) {
                        var r = t.lastEffect;
                        null !== r ? (r.nextEffect = n,
                        t.lastEffect = n) : t.firstEffect = t.lastEffect = n,
                        n.nextEffect = null,
                        n.effectTag = 8
                    }
                }
                function n(n, r) {
                    if (!e)
                        return null;
                    for (; null !== r; )
                        t(n, r),
                        r = r.sibling;
                    return null
                }
                function r(e, t) {
                    for (e = new Map; null !== t; )
                        null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                        t = t.sibling;
                    return e
                }
                function o(e, t) {
                    return (e = Uu(e, t)).index = 0,
                    e.sibling = null,
                    e
                }
                function i(t, n, r) {
                    return t.index = r,
                    e ? null !== (r = t.alternate) ? (r = r.index) < n ? (t.effectTag = 2,
                    n) : r : (t.effectTag = 2,
                    n) : n
                }
                function l(t) {
                    return e && null === t.alternate && (t.effectTag = 2),
                    t
                }
                function u(e, t, n, r) {
                    return null === t || 6 !== t.tag ? ((t = $u(n, e.mode, r)).return = e,
                    t) : ((t = o(t, n)).return = e,
                    t)
                }
                function c(e, t, n, r) {
                    return null !== t && t.elementType === n.type ? ((r = o(t, n.props)).ref = _i(e, t, n),
                    r.return = e,
                    r) : ((r = zu(n.type, n.key, n.props, null, e.mode, r)).ref = _i(e, t, n),
                    r.return = e,
                    r)
                }
                function s(e, t, n, r) {
                    return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? ((t = Vu(n, e.mode, r)).return = e,
                    t) : ((t = o(t, n.children || [])).return = e,
                    t)
                }
                function f(e, t, n, r, i) {
                    return null === t || 7 !== t.tag ? ((t = Gu(n, e.mode, r, i)).return = e,
                    t) : ((t = o(t, n)).return = e,
                    t)
                }
                function p(e, t, n) {
                    if ("string" == typeof t || "number" == typeof t)
                        return (t = $u("" + t, e.mode, n)).return = e,
                        t;
                    if ("object" == typeof t && null !== t) {
                        switch (t.$$typeof) {
                        case ee:
                            return (n = zu(t.type, t.key, t.props, null, e.mode, n)).ref = _i(e, null, t),
                            n.return = e,
                            n;
                        case te:
                            return (t = Vu(t, e.mode, n)).return = e,
                            t
                        }
                        if (xi(t) || me(t))
                            return (t = Gu(t, e.mode, n, null)).return = e,
                            t;
                        Pi(e, t)
                    }
                    return null
                }
                function d(e, t, n, r) {
                    var o = null !== t ? t.key : null;
                    if ("string" == typeof n || "number" == typeof n)
                        return null !== o ? null : u(e, t, "" + n, r);
                    if ("object" == typeof n && null !== n) {
                        switch (n.$$typeof) {
                        case ee:
                            return n.key === o ? n.type === ne ? f(e, t, n.props.children, r, o) : c(e, t, n, r) : null;
                        case te:
                            return n.key === o ? s(e, t, n, r) : null
                        }
                        if (xi(n) || me(n))
                            return null !== o ? null : f(e, t, n, r, null);
                        Pi(e, n)
                    }
                    return null
                }
                function h(e, t, n, r, o) {
                    if ("string" == typeof r || "number" == typeof r)
                        return u(t, e = e.get(n) || null, "" + r, o);
                    if ("object" == typeof r && null !== r) {
                        switch (r.$$typeof) {
                        case ee:
                            return e = e.get(null === r.key ? n : r.key) || null,
                            r.type === ne ? f(t, e, r.props.children, o, r.key) : c(t, e, r, o);
                        case te:
                            return s(t, e = e.get(null === r.key ? n : r.key) || null, r, o)
                        }
                        if (xi(r) || me(r))
                            return f(t, e = e.get(n) || null, r, o, null);
                        Pi(t, r)
                    }
                    return null
                }
                function m(o, a, l, u) {
                    for (var c = null, s = null, f = a, m = a = 0, g = null; null !== f && m < l.length; m++) {
                        f.index > m ? (g = f,
                        f = null) : g = f.sibling;
                        var y = d(o, f, l[m], u);
                        if (null === y) {
                            null === f && (f = g);
                            break
                        }
                        e && f && null === y.alternate && t(o, f),
                        a = i(y, a, m),
                        null === s ? c = y : s.sibling = y,
                        s = y,
                        f = g
                    }
                    if (m === l.length)
                        return n(o, f),
                        c;
                    if (null === f) {
                        for (; m < l.length; m++)
                            null !== (f = p(o, l[m], u)) && (a = i(f, a, m),
                            null === s ? c = f : s.sibling = f,
                            s = f);
                        return c
                    }
                    for (f = r(o, f); m < l.length; m++)
                        null !== (g = h(f, o, m, l[m], u)) && (e && null !== g.alternate && f.delete(null === g.key ? m : g.key),
                        a = i(g, a, m),
                        null === s ? c = g : s.sibling = g,
                        s = g);
                    return e && f.forEach(function(e) {
                        return t(o, e)
                    }),
                    c
                }
                function g(o, l, u, c) {
                    var s = me(u);
                    if ("function" != typeof s)
                        throw Error(a(150));
                    if (null == (u = s.call(u)))
                        throw Error(a(151));
                    for (var f = s = null, m = l, g = l = 0, y = null, b = u.next(); null !== m && !b.done; g++,
                    b = u.next()) {
                        m.index > g ? (y = m,
                        m = null) : y = m.sibling;
                        var v = d(o, m, b.value, c);
                        if (null === v) {
                            null === m && (m = y);
                            break
                        }
                        e && m && null === v.alternate && t(o, m),
                        l = i(v, l, g),
                        null === f ? s = v : f.sibling = v,
                        f = v,
                        m = y
                    }
                    if (b.done)
                        return n(o, m),
                        s;
                    if (null === m) {
                        for (; !b.done; g++,
                        b = u.next())
                            null !== (b = p(o, b.value, c)) && (l = i(b, l, g),
                            null === f ? s = b : f.sibling = b,
                            f = b);
                        return s
                    }
                    for (m = r(o, m); !b.done; g++,
                    b = u.next())
                        null !== (b = h(m, o, g, b.value, c)) && (e && null !== b.alternate && m.delete(null === b.key ? g : b.key),
                        l = i(b, l, g),
                        null === f ? s = b : f.sibling = b,
                        f = b);
                    return e && m.forEach(function(e) {
                        return t(o, e)
                    }),
                    s
                }
                return function(e, r, i, u) {
                    var c = "object" == typeof i && null !== i && i.type === ne && null === i.key;
                    c && (i = i.props.children);
                    var s = "object" == typeof i && null !== i;
                    if (s)
                        switch (i.$$typeof) {
                        case ee:
                            e: {
                                for (s = i.key,
                                c = r; null !== c; ) {
                                    if (c.key === s) {
                                        if (7 === c.tag) {
                                            if (i.type === ne) {
                                                n(e, c.sibling),
                                                (r = o(c, i.props.children)).return = e,
                                                e = r;
                                                break e
                                            }
                                        } else if (c.elementType === i.type) {
                                            n(e, c.sibling),
                                            (r = o(c, i.props)).ref = _i(e, c, i),
                                            r.return = e,
                                            e = r;
                                            break e
                                        }
                                        n(e, c);
                                        break
                                    }
                                    t(e, c),
                                    c = c.sibling
                                }
                                i.type === ne ? ((r = Gu(i.props.children, e.mode, u, i.key)).return = e,
                                e = r) : ((u = zu(i.type, i.key, i.props, null, e.mode, u)).ref = _i(e, r, i),
                                u.return = e,
                                e = u)
                            }
                            return l(e);
                        case te:
                            e: {
                                for (c = i.key; null !== r; ) {
                                    if (r.key === c) {
                                        if (4 === r.tag && r.stateNode.containerInfo === i.containerInfo && r.stateNode.implementation === i.implementation) {
                                            n(e, r.sibling),
                                            (r = o(r, i.children || [])).return = e,
                                            e = r;
                                            break e
                                        }
                                        n(e, r);
                                        break
                                    }
                                    t(e, r),
                                    r = r.sibling
                                }
                                (r = Vu(i, e.mode, u)).return = e,
                                e = r
                            }
                            return l(e)
                        }
                    if ("string" == typeof i || "number" == typeof i)
                        return i = "" + i,
                        null !== r && 6 === r.tag ? (n(e, r.sibling),
                        (r = o(r, i)).return = e,
                        e = r) : (n(e, r),
                        (r = $u(i, e.mode, u)).return = e,
                        e = r),
                        l(e);
                    if (xi(i))
                        return m(e, r, i, u);
                    if (me(i))
                        return g(e, r, i, u);
                    if (s && Pi(e, i),
                    void 0 === i && !c)
                        switch (e.tag) {
                        case 1:
                        case 0:
                            throw e = e.type,
                            Error(a(152, e.displayName || e.name || "Component"))
                        }
                    return n(e, r)
                }
            }
            var Oi = Ci(!0)
              , Ni = Ci(!1)
              , Ai = {}
              , Ii = {
                current: Ai
            }
              , Ri = {
                current: Ai
            }
              , Mi = {
                current: Ai
            };
            function Li(e) {
                if (e === Ai)
                    throw Error(a(174));
                return e
            }
            function Di(e, t) {
                switch (ho(Mi, t),
                ho(Ri, e),
                ho(Ii, Ai),
                e = t.nodeType) {
                case 9:
                case 11:
                    t = (t = t.documentElement) ? t.namespaceURI : Le(null, "");
                    break;
                default:
                    t = Le(t = (e = 8 === e ? t.parentNode : t).namespaceURI || null, e = e.tagName)
                }
                po(Ii),
                ho(Ii, t)
            }
            function Hi() {
                po(Ii),
                po(Ri),
                po(Mi)
            }
            function Bi(e) {
                Li(Mi.current);
                var t = Li(Ii.current)
                  , n = Le(t, e.type);
                t !== n && (ho(Ri, e),
                ho(Ii, n))
            }
            function ji(e) {
                Ri.current === e && (po(Ii),
                po(Ri))
            }
            var Fi = {
                current: 0
            };
            function Ui(e) {
                for (var t = e; null !== t; ) {
                    if (13 === t.tag) {
                        var n = t.memoizedState;
                        if (null !== n && (null === (n = n.dehydrated) || n.data === yn || n.data === bn))
                            return t
                    } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
                        if (64 & t.effectTag)
                            return t
                    } else if (null !== t.child) {
                        t.child.return = t,
                        t = t.child;
                        continue
                    }
                    if (t === e)
                        break;
                    for (; null === t.sibling; ) {
                        if (null === t.return || t.return === e)
                            return null;
                        t = t.return
                    }
                    t.sibling.return = t.return,
                    t = t.sibling
                }
                return null
            }
            function zi(e, t) {
                return {
                    responder: e,
                    props: t
                }
            }
            var Gi = q.ReactCurrentDispatcher
              , $i = q.ReactCurrentBatchConfig
              , Vi = 0
              , Wi = null
              , Qi = null
              , Ki = null
              , Xi = !1;
            function qi() {
                throw Error(a(321))
            }
            function Yi(e, t) {
                if (null === t)
                    return !1;
                for (var n = 0; n < t.length && n < e.length; n++)
                    if (!Ur(e[n], t[n]))
                        return !1;
                return !0
            }
            function Zi(e, t, n, r, o, i) {
                if (Vi = i,
                Wi = t,
                t.memoizedState = null,
                t.updateQueue = null,
                t.expirationTime = 0,
                Gi.current = null === e || null === e.memoizedState ? wa : Ta,
                e = n(r, o),
                t.expirationTime === Vi) {
                    i = 0;
                    do {
                        if (t.expirationTime = 0,
                        !(25 > i))
                            throw Error(a(301));
                        i += 1,
                        Ki = Qi = null,
                        t.updateQueue = null,
                        Gi.current = Sa,
                        e = n(r, o)
                    } while (t.expirationTime === Vi)
                }
                if (Gi.current = Ea,
                t = null !== Qi && null !== Qi.next,
                Vi = 0,
                Ki = Qi = Wi = null,
                Xi = !1,
                t)
                    throw Error(a(300));
                return e
            }
            function Ji() {
                var e = {
                    memoizedState: null,
                    baseState: null,
                    baseQueue: null,
                    queue: null,
                    next: null
                };
                return null === Ki ? Wi.memoizedState = Ki = e : Ki = Ki.next = e,
                Ki
            }
            function ea() {
                if (null === Qi) {
                    var e = Wi.alternate;
                    e = null !== e ? e.memoizedState : null
                } else
                    e = Qi.next;
                var t = null === Ki ? Wi.memoizedState : Ki.next;
                if (null !== t)
                    Ki = t,
                    Qi = e;
                else {
                    if (null === e)
                        throw Error(a(310));
                    e = {
                        memoizedState: (Qi = e).memoizedState,
                        baseState: Qi.baseState,
                        baseQueue: Qi.baseQueue,
                        queue: Qi.queue,
                        next: null
                    },
                    null === Ki ? Wi.memoizedState = Ki = e : Ki = Ki.next = e
                }
                return Ki
            }
            function ta(e, t) {
                return "function" == typeof t ? t(e) : t
            }
            function na(e) {
                var t = ea()
                  , n = t.queue;
                if (null === n)
                    throw Error(a(311));
                n.lastRenderedReducer = e;
                var r = Qi
                  , o = r.baseQueue
                  , i = n.pending;
                if (null !== i) {
                    if (null !== o) {
                        var l = o.next;
                        o.next = i.next,
                        i.next = l
                    }
                    r.baseQueue = o = i,
                    n.pending = null
                }
                if (null !== o) {
                    o = o.next,
                    r = r.baseState;
                    var u = l = i = null
                      , c = o;
                    do {
                        var s = c.expirationTime;
                        if (s < Vi) {
                            var f = {
                                expirationTime: c.expirationTime,
                                suspenseConfig: c.suspenseConfig,
                                action: c.action,
                                eagerReducer: c.eagerReducer,
                                eagerState: c.eagerState,
                                next: null
                            };
                            null === u ? (l = u = f,
                            i = r) : u = u.next = f,
                            s > Wi.expirationTime && (Wi.expirationTime = s,
                            wu(s))
                        } else
                            null !== u && (u = u.next = {
                                expirationTime: 1073741823,
                                suspenseConfig: c.suspenseConfig,
                                action: c.action,
                                eagerReducer: c.eagerReducer,
                                eagerState: c.eagerState,
                                next: null
                            }),
                            Eu(s, c.suspenseConfig),
                            r = c.eagerReducer === e ? c.eagerState : e(r, c.action);
                        c = c.next
                    } while (null !== c && c !== o);
                    null === u ? i = r : u.next = l,
                    Ur(r, t.memoizedState) || (Ma = !0),
                    t.memoizedState = r,
                    t.baseState = i,
                    t.baseQueue = u,
                    n.lastRenderedState = r
                }
                return [t.memoizedState, n.dispatch]
            }
            function ra(e) {
                var t = ea()
                  , n = t.queue;
                if (null === n)
                    throw Error(a(311));
                n.lastRenderedReducer = e;
                var r = n.dispatch
                  , o = n.pending
                  , i = t.memoizedState;
                if (null !== o) {
                    n.pending = null;
                    var l = o = o.next;
                    do {
                        i = e(i, l.action),
                        l = l.next
                    } while (l !== o);
                    Ur(i, t.memoizedState) || (Ma = !0),
                    t.memoizedState = i,
                    null === t.baseQueue && (t.baseState = i),
                    n.lastRenderedState = i
                }
                return [i, r]
            }
            function oa(e) {
                var t = Ji();
                return "function" == typeof e && (e = e()),
                t.memoizedState = t.baseState = e,
                e = (e = t.queue = {
                    pending: null,
                    dispatch: null,
                    lastRenderedReducer: ta,
                    lastRenderedState: e
                }).dispatch = va.bind(null, Wi, e),
                [t.memoizedState, e]
            }
            function ia(e, t, n, r) {
                return e = {
                    tag: e,
                    create: t,
                    destroy: n,
                    deps: r,
                    next: null
                },
                null === (t = Wi.updateQueue) ? (t = {
                    lastEffect: null
                },
                Wi.updateQueue = t,
                t.lastEffect = e.next = e) : null === (n = t.lastEffect) ? t.lastEffect = e.next = e : (r = n.next,
                n.next = e,
                e.next = r,
                t.lastEffect = e),
                e
            }
            function aa() {
                return ea().memoizedState
            }
            function la(e, t, n, r) {
                var o = Ji();
                Wi.effectTag |= e,
                o.memoizedState = ia(1 | t, n, void 0, void 0 === r ? null : r)
            }
            function ua(e, t, n, r) {
                var o = ea();
                r = void 0 === r ? null : r;
                var i = void 0;
                if (null !== Qi) {
                    var a = Qi.memoizedState;
                    if (i = a.destroy,
                    null !== r && Yi(r, a.deps))
                        return void ia(t, n, i, r)
                }
                Wi.effectTag |= e,
                o.memoizedState = ia(1 | t, n, i, r)
            }
            function ca(e, t) {
                return la(516, 4, e, t)
            }
            function sa(e, t) {
                return ua(516, 4, e, t)
            }
            function fa(e, t) {
                return ua(4, 2, e, t)
            }
            function pa(e, t) {
                return "function" == typeof t ? (e = e(),
                t(e),
                function() {
                    t(null)
                }
                ) : null != t ? (e = e(),
                t.current = e,
                function() {
                    t.current = null
                }
                ) : void 0
            }
            function da(e, t, n) {
                return n = null != n ? n.concat([e]) : null,
                ua(4, 2, pa.bind(null, t, e), n)
            }
            function ha() {}
            function ma(e, t) {
                return Ji().memoizedState = [e, void 0 === t ? null : t],
                e
            }
            function ga(e, t) {
                var n = ea();
                t = void 0 === t ? null : t;
                var r = n.memoizedState;
                return null !== r && null !== t && Yi(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
                e)
            }
            function ya(e, t) {
                var n = ea();
                t = void 0 === t ? null : t;
                var r = n.memoizedState;
                return null !== r && null !== t && Yi(t, r[1]) ? r[0] : (e = e(),
                n.memoizedState = [e, t],
                e)
            }
            function ba(e, t, n) {
                var r = Vo();
                Qo(98 > r ? 98 : r, function() {
                    e(!0)
                }),
                Qo(97 < r ? 97 : r, function() {
                    var r = $i.suspense;
                    $i.suspense = void 0 === t ? null : t;
                    try {
                        e(!1),
                        n()
                    } finally {
                        $i.suspense = r
                    }
                })
            }
            function va(e, t, n) {
                var r = lu()
                  , o = yi.suspense;
                o = {
                    expirationTime: r = uu(r, e, o),
                    suspenseConfig: o,
                    action: n,
                    eagerReducer: null,
                    eagerState: null,
                    next: null
                };
                var i = t.pending;
                if (null === i ? o.next = o : (o.next = i.next,
                i.next = o),
                t.pending = o,
                i = e.alternate,
                e === Wi || null !== i && i === Wi)
                    Xi = !0,
                    o.expirationTime = Vi,
                    Wi.expirationTime = Vi;
                else {
                    if (0 === e.expirationTime && (null === i || 0 === i.expirationTime) && null !== (i = t.lastRenderedReducer))
                        try {
                            var a = t.lastRenderedState
                              , l = i(a, n);
                            if (o.eagerReducer = i,
                            o.eagerState = l,
                            Ur(l, a))
                                return
                        } catch (e) {}
                    cu(e, r)
                }
            }
            var Ea = {
                readContext: ui,
                useCallback: qi,
                useContext: qi,
                useEffect: qi,
                useImperativeHandle: qi,
                useLayoutEffect: qi,
                useMemo: qi,
                useReducer: qi,
                useRef: qi,
                useState: qi,
                useDebugValue: qi,
                useResponder: qi,
                useDeferredValue: qi,
                useTransition: qi
            }
              , wa = {
                readContext: ui,
                useCallback: ma,
                useContext: ui,
                useEffect: ca,
                useImperativeHandle: function(e, t, n) {
                    return n = null != n ? n.concat([e]) : null,
                    la(4, 2, pa.bind(null, t, e), n)
                },
                useLayoutEffect: function(e, t) {
                    return la(4, 2, e, t)
                },
                useMemo: function(e, t) {
                    var n = Ji();
                    return t = void 0 === t ? null : t,
                    e = e(),
                    n.memoizedState = [e, t],
                    e
                },
                useReducer: function(e, t, n) {
                    var r = Ji();
                    return t = void 0 !== n ? n(t) : t,
                    r.memoizedState = r.baseState = t,
                    e = (e = r.queue = {
                        pending: null,
                        dispatch: null,
                        lastRenderedReducer: e,
                        lastRenderedState: t
                    }).dispatch = va.bind(null, Wi, e),
                    [r.memoizedState, e]
                },
                useRef: function(e) {
                    return e = {
                        current: e
                    },
                    Ji().memoizedState = e
                },
                useState: oa,
                useDebugValue: ha,
                useResponder: zi,
                useDeferredValue: function(e, t) {
                    var n = oa(e)
                      , r = n[0]
                      , o = n[1];
                    return ca(function() {
                        var n = $i.suspense;
                        $i.suspense = void 0 === t ? null : t;
                        try {
                            o(e)
                        } finally {
                            $i.suspense = n
                        }
                    }, [e, t]),
                    r
                },
                useTransition: function(e) {
                    var t = oa(!1)
                      , n = t[0];
                    return t = t[1],
                    [ma(ba.bind(null, t, e), [t, e]), n]
                }
            }
              , Ta = {
                readContext: ui,
                useCallback: ga,
                useContext: ui,
                useEffect: sa,
                useImperativeHandle: da,
                useLayoutEffect: fa,
                useMemo: ya,
                useReducer: na,
                useRef: aa,
                useState: function() {
                    return na(ta)
                },
                useDebugValue: ha,
                useResponder: zi,
                useDeferredValue: function(e, t) {
                    var n = na(ta)
                      , r = n[0]
                      , o = n[1];
                    return sa(function() {
                        var n = $i.suspense;
                        $i.suspense = void 0 === t ? null : t;
                        try {
                            o(e)
                        } finally {
                            $i.suspense = n
                        }
                    }, [e, t]),
                    r
                },
                useTransition: function(e) {
                    var t = na(ta)
                      , n = t[0];
                    return t = t[1],
                    [ga(ba.bind(null, t, e), [t, e]), n]
                }
            }
              , Sa = {
                readContext: ui,
                useCallback: ga,
                useContext: ui,
                useEffect: sa,
                useImperativeHandle: da,
                useLayoutEffect: fa,
                useMemo: ya,
                useReducer: ra,
                useRef: aa,
                useState: function() {
                    return ra(ta)
                },
                useDebugValue: ha,
                useResponder: zi,
                useDeferredValue: function(e, t) {
                    var n = ra(ta)
                      , r = n[0]
                      , o = n[1];
                    return sa(function() {
                        var n = $i.suspense;
                        $i.suspense = void 0 === t ? null : t;
                        try {
                            o(e)
                        } finally {
                            $i.suspense = n
                        }
                    }, [e, t]),
                    r
                },
                useTransition: function(e) {
                    var t = ra(ta)
                      , n = t[0];
                    return t = t[1],
                    [ga(ba.bind(null, t, e), [t, e]), n]
                }
            }
              , ka = null
              , xa = null
              , _a = !1;
            function Pa(e, t) {
                var n = ju(5, null, null, 0);
                n.elementType = "DELETED",
                n.type = "DELETED",
                n.stateNode = t,
                n.return = e,
                n.effectTag = 8,
                null !== e.lastEffect ? (e.lastEffect.nextEffect = n,
                e.lastEffect = n) : e.firstEffect = e.lastEffect = n
            }
            function Ca(e, t) {
                switch (e.tag) {
                case 5:
                    var n = e.type;
                    return null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && (e.stateNode = t,
                    !0);
                case 6:
                    return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && (e.stateNode = t,
                    !0);
                default:
                    return !1
                }
            }
            function Oa(e) {
                if (_a) {
                    var t = xa;
                    if (t) {
                        var n = t;
                        if (!Ca(e, t)) {
                            if (!(t = xn(n.nextSibling)) || !Ca(e, t))
                                return e.effectTag = -1025 & e.effectTag | 2,
                                _a = !1,
                                void (ka = e);
                            Pa(ka, n)
                        }
                        ka = e,
                        xa = xn(t.firstChild)
                    } else
                        e.effectTag = -1025 & e.effectTag | 2,
                        _a = !1,
                        ka = e
                }
            }
            function Na(e) {
                for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag; )
                    e = e.return;
                ka = e
            }
            function Aa(e) {
                if (e !== ka)
                    return !1;
                if (!_a)
                    return Na(e),
                    _a = !0,
                    !1;
                var t = e.type;
                if (5 !== e.tag || "head" !== t && "body" !== t && !Tn(t, e.memoizedProps))
                    for (t = xa; t; )
                        Pa(e, t),
                        t = xn(t.nextSibling);
                if (Na(e),
                13 === e.tag) {
                    if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
                        throw Error(a(317));
                    e: {
                        for (e = e.nextSibling,
                        t = 0; e; ) {
                            if (8 === e.nodeType) {
                                var n = e.data;
                                if (n === gn) {
                                    if (0 === t) {
                                        xa = xn(e.nextSibling);
                                        break e
                                    }
                                    t--
                                } else
                                    n !== mn && n !== bn && n !== yn || t++
                            }
                            e = e.nextSibling
                        }
                        xa = null
                    }
                } else
                    xa = ka ? xn(e.stateNode.nextSibling) : null;
                return !0
            }
            function Ia() {
                xa = ka = null,
                _a = !1
            }
            var Ra = q.ReactCurrentOwner
              , Ma = !1;
            function La(e, t, n, r) {
                t.child = null === e ? Ni(t, null, n, r) : Oi(t, e.child, n, r)
            }
            function Da(e, t, n, r, o) {
                n = n.render;
                var i = t.ref;
                return li(t, o),
                r = Zi(e, t, n, r, i, o),
                null === e || Ma ? (t.effectTag |= 1,
                La(e, t, r, o),
                t.child) : (t.updateQueue = e.updateQueue,
                t.effectTag &= -517,
                e.expirationTime <= o && (e.expirationTime = 0),
                Ja(e, t, o))
            }
            function Ha(e, t, n, r, o, i) {
                if (null === e) {
                    var a = n.type;
                    return "function" != typeof a || Fu(a) || void 0 !== a.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? ((e = zu(n.type, null, r, null, t.mode, i)).ref = t.ref,
                    e.return = t,
                    t.child = e) : (t.tag = 15,
                    t.type = a,
                    Ba(e, t, a, r, o, i))
                }
                return a = e.child,
                o < i && (o = a.memoizedProps,
                (n = null !== (n = n.compare) ? n : Gr)(o, r) && e.ref === t.ref) ? Ja(e, t, i) : (t.effectTag |= 1,
                (e = Uu(a, r)).ref = t.ref,
                e.return = t,
                t.child = e)
            }
            function Ba(e, t, n, r, o, i) {
                return null !== e && Gr(e.memoizedProps, r) && e.ref === t.ref && (Ma = !1,
                o < i) ? (t.expirationTime = e.expirationTime,
                Ja(e, t, i)) : Fa(e, t, n, r, i)
            }
            function ja(e, t) {
                var n = t.ref;
                (null === e && null !== n || null !== e && e.ref !== n) && (t.effectTag |= 128)
            }
            function Fa(e, t, n, r, o) {
                var i = Eo(n) ? bo : go.current;
                return i = vo(t, i),
                li(t, o),
                n = Zi(e, t, n, r, i, o),
                null === e || Ma ? (t.effectTag |= 1,
                La(e, t, n, o),
                t.child) : (t.updateQueue = e.updateQueue,
                t.effectTag &= -517,
                e.expirationTime <= o && (e.expirationTime = 0),
                Ja(e, t, o))
            }
            function Ua(e, t, n, r, o) {
                if (Eo(n)) {
                    var i = !0;
                    ko(t)
                } else
                    i = !1;
                if (li(t, o),
                null === t.stateNode)
                    null !== e && (e.alternate = null,
                    t.alternate = null,
                    t.effectTag |= 2),
                    Ti(t, n, r),
                    ki(t, n, r, o),
                    r = !0;
                else if (null === e) {
                    var a = t.stateNode
                      , l = t.memoizedProps;
                    a.props = l;
                    var u = a.context
                      , c = n.contextType;
                    c = "object" == typeof c && null !== c ? ui(c) : vo(t, c = Eo(n) ? bo : go.current);
                    var s = n.getDerivedStateFromProps
                      , f = "function" == typeof s || "function" == typeof a.getSnapshotBeforeUpdate;
                    f || "function" != typeof a.UNSAFE_componentWillReceiveProps && "function" != typeof a.componentWillReceiveProps || (l !== r || u !== c) && Si(t, a, r, c),
                    ci = !1;
                    var p = t.memoizedState;
                    a.state = p,
                    mi(t, r, a, o),
                    u = t.memoizedState,
                    l !== r || p !== u || yo.current || ci ? ("function" == typeof s && (vi(t, n, s, r),
                    u = t.memoizedState),
                    (l = ci || wi(t, n, l, r, p, u, c)) ? (f || "function" != typeof a.UNSAFE_componentWillMount && "function" != typeof a.componentWillMount || ("function" == typeof a.componentWillMount && a.componentWillMount(),
                    "function" == typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount()),
                    "function" == typeof a.componentDidMount && (t.effectTag |= 4)) : ("function" == typeof a.componentDidMount && (t.effectTag |= 4),
                    t.memoizedProps = r,
                    t.memoizedState = u),
                    a.props = r,
                    a.state = u,
                    a.context = c,
                    r = l) : ("function" == typeof a.componentDidMount && (t.effectTag |= 4),
                    r = !1)
                } else
                    a = t.stateNode,
                    fi(e, t),
                    l = t.memoizedProps,
                    a.props = t.type === t.elementType ? l : Jo(t.type, l),
                    u = a.context,
                    c = "object" == typeof (c = n.contextType) && null !== c ? ui(c) : vo(t, c = Eo(n) ? bo : go.current),
                    (f = "function" == typeof (s = n.getDerivedStateFromProps) || "function" == typeof a.getSnapshotBeforeUpdate) || "function" != typeof a.UNSAFE_componentWillReceiveProps && "function" != typeof a.componentWillReceiveProps || (l !== r || u !== c) && Si(t, a, r, c),
                    ci = !1,
                    u = t.memoizedState,
                    a.state = u,
                    mi(t, r, a, o),
                    p = t.memoizedState,
                    l !== r || u !== p || yo.current || ci ? ("function" == typeof s && (vi(t, n, s, r),
                    p = t.memoizedState),
                    (s = ci || wi(t, n, l, r, u, p, c)) ? (f || "function" != typeof a.UNSAFE_componentWillUpdate && "function" != typeof a.componentWillUpdate || ("function" == typeof a.componentWillUpdate && a.componentWillUpdate(r, p, c),
                    "function" == typeof a.UNSAFE_componentWillUpdate && a.UNSAFE_componentWillUpdate(r, p, c)),
                    "function" == typeof a.componentDidUpdate && (t.effectTag |= 4),
                    "function" == typeof a.getSnapshotBeforeUpdate && (t.effectTag |= 256)) : ("function" != typeof a.componentDidUpdate || l === e.memoizedProps && u === e.memoizedState || (t.effectTag |= 4),
                    "function" != typeof a.getSnapshotBeforeUpdate || l === e.memoizedProps && u === e.memoizedState || (t.effectTag |= 256),
                    t.memoizedProps = r,
                    t.memoizedState = p),
                    a.props = r,
                    a.state = p,
                    a.context = c,
                    r = s) : ("function" != typeof a.componentDidUpdate || l === e.memoizedProps && u === e.memoizedState || (t.effectTag |= 4),
                    "function" != typeof a.getSnapshotBeforeUpdate || l === e.memoizedProps && u === e.memoizedState || (t.effectTag |= 256),
                    r = !1);
                return za(e, t, n, r, i, o)
            }
            function za(e, t, n, r, o, i) {
                ja(e, t);
                var a = !!(64 & t.effectTag);
                if (!r && !a)
                    return o && xo(t, n, !1),
                    Ja(e, t, i);
                r = t.stateNode,
                Ra.current = t;
                var l = a && "function" != typeof n.getDerivedStateFromError ? null : r.render();
                return t.effectTag |= 1,
                null !== e && a ? (t.child = Oi(t, e.child, null, i),
                t.child = Oi(t, null, l, i)) : La(e, t, l, i),
                t.memoizedState = r.state,
                o && xo(t, n, !0),
                t.child
            }
            function Ga(e) {
                var t = e.stateNode;
                t.pendingContext ? To(0, t.pendingContext, t.pendingContext !== t.context) : t.context && To(0, t.context, !1),
                Di(e, t.containerInfo)
            }
            var $a, Va, Wa, Qa, Ka = {
                dehydrated: null,
                retryTime: 0
            };
            function Xa(e, t, n) {
                var r, o = t.mode, i = t.pendingProps, a = Fi.current, l = !1;
                if ((r = !!(64 & t.effectTag)) || (r = !!(2 & a) && (null === e || null !== e.memoizedState)),
                r ? (l = !0,
                t.effectTag &= -65) : null !== e && null === e.memoizedState || void 0 === i.fallback || !0 === i.unstable_avoidThisFallback || (a |= 1),
                ho(Fi, 1 & a),
                null === e) {
                    if (void 0 !== i.fallback && Oa(t),
                    l) {
                        if (l = i.fallback,
                        (i = Gu(null, o, 0, null)).return = t,
                        !(2 & t.mode))
                            for (e = null !== t.memoizedState ? t.child.child : t.child,
                            i.child = e; null !== e; )
                                e.return = i,
                                e = e.sibling;
                        return (n = Gu(l, o, n, null)).return = t,
                        i.sibling = n,
                        t.memoizedState = Ka,
                        t.child = i,
                        n
                    }
                    return o = i.children,
                    t.memoizedState = null,
                    t.child = Ni(t, null, o, n)
                }
                if (null !== e.memoizedState) {
                    if (o = (e = e.child).sibling,
                    l) {
                        if (i = i.fallback,
                        (n = Uu(e, e.pendingProps)).return = t,
                        !(2 & t.mode) && (l = null !== t.memoizedState ? t.child.child : t.child) !== e.child)
                            for (n.child = l; null !== l; )
                                l.return = n,
                                l = l.sibling;
                        return (o = Uu(o, i)).return = t,
                        n.sibling = o,
                        n.childExpirationTime = 0,
                        t.memoizedState = Ka,
                        t.child = n,
                        o
                    }
                    return n = Oi(t, e.child, i.children, n),
                    t.memoizedState = null,
                    t.child = n
                }
                if (e = e.child,
                l) {
                    if (l = i.fallback,
                    (i = Gu(null, o, 0, null)).return = t,
                    i.child = e,
                    null !== e && (e.return = i),
                    !(2 & t.mode))
                        for (e = null !== t.memoizedState ? t.child.child : t.child,
                        i.child = e; null !== e; )
                            e.return = i,
                            e = e.sibling;
                    return (n = Gu(l, o, n, null)).return = t,
                    i.sibling = n,
                    n.effectTag |= 2,
                    i.childExpirationTime = 0,
                    t.memoizedState = Ka,
                    t.child = i,
                    n
                }
                return t.memoizedState = null,
                t.child = Oi(t, e, i.children, n)
            }
            function qa(e, t) {
                e.expirationTime < t && (e.expirationTime = t);
                var n = e.alternate;
                null !== n && n.expirationTime < t && (n.expirationTime = t),
                ai(e.return, t)
            }
            function Ya(e, t, n, r, o, i) {
                var a = e.memoizedState;
                null === a ? e.memoizedState = {
                    isBackwards: t,
                    rendering: null,
                    renderingStartTime: 0,
                    last: r,
                    tail: n,
                    tailExpiration: 0,
                    tailMode: o,
                    lastEffect: i
                } : (a.isBackwards = t,
                a.rendering = null,
                a.renderingStartTime = 0,
                a.last = r,
                a.tail = n,
                a.tailExpiration = 0,
                a.tailMode = o,
                a.lastEffect = i)
            }
            function Za(e, t, n) {
                var r = t.pendingProps
                  , o = r.revealOrder
                  , i = r.tail;
                if (La(e, t, r.children, n),
                2 & (r = Fi.current))
                    r = 1 & r | 2,
                    t.effectTag |= 64;
                else {
                    if (null !== e && 64 & e.effectTag)
                        e: for (e = t.child; null !== e; ) {
                            if (13 === e.tag)
                                null !== e.memoizedState && qa(e, n);
                            else if (19 === e.tag)
                                qa(e, n);
                            else if (null !== e.child) {
                                e.child.return = e,
                                e = e.child;
                                continue
                            }
                            if (e === t)
                                break e;
                            for (; null === e.sibling; ) {
                                if (null === e.return || e.return === t)
                                    break e;
                                e = e.return
                            }
                            e.sibling.return = e.return,
                            e = e.sibling
                        }
                    r &= 1
                }
                if (ho(Fi, r),
                2 & t.mode)
                    switch (o) {
                    case "forwards":
                        for (n = t.child,
                        o = null; null !== n; )
                            null !== (e = n.alternate) && null === Ui(e) && (o = n),
                            n = n.sibling;
                        null === (n = o) ? (o = t.child,
                        t.child = null) : (o = n.sibling,
                        n.sibling = null),
                        Ya(t, !1, o, n, i, t.lastEffect);
                        break;
                    case "backwards":
                        for (n = null,
                        o = t.child,
                        t.child = null; null !== o; ) {
                            if (null !== (e = o.alternate) && null === Ui(e)) {
                                t.child = o;
                                break
                            }
                            e = o.sibling,
                            o.sibling = n,
                            n = o,
                            o = e
                        }
                        Ya(t, !0, n, null, i, t.lastEffect);
                        break;
                    case "together":
                        Ya(t, !1, null, null, void 0, t.lastEffect);
                        break;
                    default:
                        t.memoizedState = null
                    }
                else
                    t.memoizedState = null;
                return t.child
            }
            function Ja(e, t, n) {
                null !== e && (t.dependencies = e.dependencies);
                var r = t.expirationTime;
                if (0 !== r && wu(r),
                t.childExpirationTime < n)
                    return null;
                if (null !== e && t.child !== e.child)
                    throw Error(a(153));
                if (null !== t.child) {
                    for (n = Uu(e = t.child, e.pendingProps),
                    t.child = n,
                    n.return = t; null !== e.sibling; )
                        e = e.sibling,
                        (n = n.sibling = Uu(e, e.pendingProps)).return = t;
                    n.sibling = null
                }
                return t.child
            }
            function el(e, t) {
                switch (e.tailMode) {
                case "hidden":
                    t = e.tail;
                    for (var n = null; null !== t; )
                        null !== t.alternate && (n = t),
                        t = t.sibling;
                    null === n ? e.tail = null : n.sibling = null;
                    break;
                case "collapsed":
                    n = e.tail;
                    for (var r = null; null !== n; )
                        null !== n.alternate && (r = n),
                        n = n.sibling;
                    null === r ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : r.sibling = null
                }
            }
            function tl(e, t, n) {
                var r = t.pendingProps;
                switch (t.tag) {
                case 2:
                case 16:
                case 15:
                case 0:
                case 11:
                case 7:
                case 8:
                case 12:
                case 9:
                case 14:
                    return null;
                case 1:
                case 17:
                    return Eo(t.type) && wo(),
                    null;
                case 3:
                    return Hi(),
                    po(yo),
                    po(go),
                    (n = t.stateNode).pendingContext && (n.context = n.pendingContext,
                    n.pendingContext = null),
                    null !== e && null !== e.child || !Aa(t) || (t.effectTag |= 4),
                    Va(t),
                    null;
                case 5:
                    ji(t),
                    n = Li(Mi.current);
                    var i = t.type;
                    if (null !== e && null != t.stateNode)
                        Wa(e, t, i, r, n),
                        e.ref !== t.ref && (t.effectTag |= 128);
                    else {
                        if (!r) {
                            if (null === t.stateNode)
                                throw Error(a(166));
                            return null
                        }
                        if (e = Li(Ii.current),
                        Aa(t)) {
                            r = t.stateNode,
                            i = t.type;
                            var l = t.memoizedProps;
                            switch (r[Cn] = t,
                            r[On] = l,
                            i) {
                            case "iframe":
                            case "object":
                            case "embed":
                                Wt("load", r);
                                break;
                            case "video":
                            case "audio":
                                for (e = 0; e < Xe.length; e++)
                                    Wt(Xe[e], r);
                                break;
                            case "source":
                                Wt("error", r);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                Wt("error", r),
                                Wt("load", r);
                                break;
                            case "form":
                                Wt("reset", r),
                                Wt("submit", r);
                                break;
                            case "details":
                                Wt("toggle", r);
                                break;
                            case "input":
                                Se(r, l),
                                Wt("invalid", r),
                                ln(n, "onChange");
                                break;
                            case "select":
                                r._wrapperState = {
                                    wasMultiple: !!l.multiple
                                },
                                Wt("invalid", r),
                                ln(n, "onChange");
                                break;
                            case "textarea":
                                Ae(r, l),
                                Wt("invalid", r),
                                ln(n, "onChange")
                            }
                            for (var u in rn(i, l),
                            e = null,
                            l)
                                if (l.hasOwnProperty(u)) {
                                    var c = l[u];
                                    "children" === u ? "string" == typeof c ? r.textContent !== c && (e = ["children", c]) : "number" == typeof c && r.textContent !== "" + c && (e = ["children", "" + c]) : k.hasOwnProperty(u) && null != c && ln(n, u)
                                }
                            switch (i) {
                            case "input":
                                Ee(r),
                                _e(r, l, !0);
                                break;
                            case "textarea":
                                Ee(r),
                                Re(r);
                                break;
                            case "select":
                            case "option":
                                break;
                            default:
                                "function" == typeof l.onClick && (r.onclick = un)
                            }
                            n = e,
                            t.updateQueue = n,
                            null !== n && (t.effectTag |= 4)
                        } else {
                            switch (u = 9 === n.nodeType ? n : n.ownerDocument,
                            e === an && (e = Me(i)),
                            e === an ? "script" === i ? ((e = u.createElement("div")).innerHTML = "<script><\/script>",
                            e = e.removeChild(e.firstChild)) : "string" == typeof r.is ? e = u.createElement(i, {
                                is: r.is
                            }) : (e = u.createElement(i),
                            "select" === i && (u = e,
                            r.multiple ? u.multiple = !0 : r.size && (u.size = r.size))) : e = u.createElementNS(e, i),
                            e[Cn] = t,
                            e[On] = r,
                            $a(e, t, !1, !1),
                            t.stateNode = e,
                            u = on(i, r),
                            i) {
                            case "iframe":
                            case "object":
                            case "embed":
                                Wt("load", e),
                                c = r;
                                break;
                            case "video":
                            case "audio":
                                for (c = 0; c < Xe.length; c++)
                                    Wt(Xe[c], e);
                                c = r;
                                break;
                            case "source":
                                Wt("error", e),
                                c = r;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                Wt("error", e),
                                Wt("load", e),
                                c = r;
                                break;
                            case "form":
                                Wt("reset", e),
                                Wt("submit", e),
                                c = r;
                                break;
                            case "details":
                                Wt("toggle", e),
                                c = r;
                                break;
                            case "input":
                                Se(e, r),
                                c = Te(e, r),
                                Wt("invalid", e),
                                ln(n, "onChange");
                                break;
                            case "option":
                                c = Ce(e, r);
                                break;
                            case "select":
                                e._wrapperState = {
                                    wasMultiple: !!r.multiple
                                },
                                c = o({}, r, {
                                    value: void 0
                                }),
                                Wt("invalid", e),
                                ln(n, "onChange");
                                break;
                            case "textarea":
                                Ae(e, r),
                                c = Ne(e, r),
                                Wt("invalid", e),
                                ln(n, "onChange");
                                break;
                            default:
                                c = r
                            }
                            rn(i, c);
                            var s = c;
                            for (l in s)
                                if (s.hasOwnProperty(l)) {
                                    var f = s[l];
                                    "style" === l ? tn(e, f) : "dangerouslySetInnerHTML" === l ? null != (f = f ? f.__html : void 0) && Be(e, f) : "children" === l ? "string" == typeof f ? ("textarea" !== i || "" !== f) && je(e, f) : "number" == typeof f && je(e, "" + f) : "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && "autoFocus" !== l && (k.hasOwnProperty(l) ? null != f && ln(n, l) : null != f && Y(e, l, f, u))
                                }
                            switch (i) {
                            case "input":
                                Ee(e),
                                _e(e, r, !1);
                                break;
                            case "textarea":
                                Ee(e),
                                Re(e);
                                break;
                            case "option":
                                null != r.value && e.setAttribute("value", "" + be(r.value));
                                break;
                            case "select":
                                e.multiple = !!r.multiple,
                                null != (n = r.value) ? Oe(e, !!r.multiple, n, !1) : null != r.defaultValue && Oe(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                "function" == typeof c.onClick && (e.onclick = un)
                            }
                            wn(i, r) && (t.effectTag |= 4)
                        }
                        null !== t.ref && (t.effectTag |= 128)
                    }
                    return null;
                case 6:
                    if (e && null != t.stateNode)
                        Qa(e, t, e.memoizedProps, r);
                    else {
                        if ("string" != typeof r && null === t.stateNode)
                            throw Error(a(166));
                        n = Li(Mi.current),
                        Li(Ii.current),
                        Aa(t) ? (n = t.stateNode,
                        r = t.memoizedProps,
                        n[Cn] = t,
                        n.nodeValue !== r && (t.effectTag |= 4)) : ((n = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[Cn] = t,
                        t.stateNode = n)
                    }
                    return null;
                case 13:
                    return po(Fi),
                    r = t.memoizedState,
                    64 & t.effectTag ? (t.expirationTime = n,
                    t) : (n = null !== r,
                    r = !1,
                    null === e ? void 0 !== t.memoizedProps.fallback && Aa(t) : (r = null !== (i = e.memoizedState),
                    n || null === i || null !== (i = e.child.sibling) && (null !== (l = t.firstEffect) ? (t.firstEffect = i,
                    i.nextEffect = l) : (t.firstEffect = t.lastEffect = i,
                    i.nextEffect = null),
                    i.effectTag = 8)),
                    n && !r && 2 & t.mode && (null === e && !0 !== t.memoizedProps.unstable_avoidThisFallback || 1 & Fi.current ? Ul === Al && (Ul = Ml) : (Ul !== Al && Ul !== Ml || (Ul = Ll),
                    0 !== Wl && null !== Bl && (Ku(Bl, Fl),
                    Xu(Bl, Wl)))),
                    (n || r) && (t.effectTag |= 4),
                    null);
                case 4:
                    return Hi(),
                    Va(t),
                    null;
                case 10:
                    return ii(t),
                    null;
                case 19:
                    if (po(Fi),
                    null === (r = t.memoizedState))
                        return null;
                    if (i = !!(64 & t.effectTag),
                    null === (l = r.rendering)) {
                        if (i)
                            el(r, !1);
                        else if (Ul !== Al || null !== e && 64 & e.effectTag)
                            for (l = t.child; null !== l; ) {
                                if (null !== (e = Ui(l))) {
                                    for (t.effectTag |= 64,
                                    el(r, !1),
                                    null !== (i = e.updateQueue) && (t.updateQueue = i,
                                    t.effectTag |= 4),
                                    null === r.lastEffect && (t.firstEffect = null),
                                    t.lastEffect = r.lastEffect,
                                    r = t.child; null !== r; )
                                        l = n,
                                        (i = r).effectTag &= 2,
                                        i.nextEffect = null,
                                        i.firstEffect = null,
                                        i.lastEffect = null,
                                        null === (e = i.alternate) ? (i.childExpirationTime = 0,
                                        i.expirationTime = l,
                                        i.child = null,
                                        i.memoizedProps = null,
                                        i.memoizedState = null,
                                        i.updateQueue = null,
                                        i.dependencies = null) : (i.childExpirationTime = e.childExpirationTime,
                                        i.expirationTime = e.expirationTime,
                                        i.child = e.child,
                                        i.memoizedProps = e.memoizedProps,
                                        i.memoizedState = e.memoizedState,
                                        i.updateQueue = e.updateQueue,
                                        l = e.dependencies,
                                        i.dependencies = null === l ? null : {
                                            expirationTime: l.expirationTime,
                                            firstContext: l.firstContext,
                                            responders: l.responders
                                        }),
                                        r = r.sibling;
                                    return ho(Fi, 1 & Fi.current | 2),
                                    t.child
                                }
                                l = l.sibling
                            }
                    } else {
                        if (!i)
                            if (null !== (e = Ui(l))) {
                                if (t.effectTag |= 64,
                                i = !0,
                                null !== (n = e.updateQueue) && (t.updateQueue = n,
                                t.effectTag |= 4),
                                el(r, !0),
                                null === r.tail && "hidden" === r.tailMode && !l.alternate)
                                    return null !== (t = t.lastEffect = r.lastEffect) && (t.nextEffect = null),
                                    null
                            } else
                                2 * $o() - r.renderingStartTime > r.tailExpiration && 1 < n && (t.effectTag |= 64,
                                i = !0,
                                el(r, !1),
                                t.expirationTime = t.childExpirationTime = n - 1);
                        r.isBackwards ? (l.sibling = t.child,
                        t.child = l) : (null !== (n = r.last) ? n.sibling = l : t.child = l,
                        r.last = l)
                    }
                    return null !== r.tail ? (0 === r.tailExpiration && (r.tailExpiration = $o() + 500),
                    n = r.tail,
                    r.rendering = n,
                    r.tail = n.sibling,
                    r.lastEffect = t.lastEffect,
                    r.renderingStartTime = $o(),
                    n.sibling = null,
                    t = Fi.current,
                    ho(Fi, i ? 1 & t | 2 : 1 & t),
                    n) : null
                }
                throw Error(a(156, t.tag))
            }
            function nl(e) {
                switch (e.tag) {
                case 1:
                    Eo(e.type) && wo();
                    var t = e.effectTag;
                    return 4096 & t ? (e.effectTag = -4097 & t | 64,
                    e) : null;
                case 3:
                    if (Hi(),
                    po(yo),
                    po(go),
                    64 & (t = e.effectTag))
                        throw Error(a(285));
                    return e.effectTag = -4097 & t | 64,
                    e;
                case 5:
                    return ji(e),
                    null;
                case 13:
                    return po(Fi),
                    4096 & (t = e.effectTag) ? (e.effectTag = -4097 & t | 64,
                    e) : null;
                case 19:
                    return po(Fi),
                    null;
                case 4:
                    return Hi(),
                    null;
                case 10:
                    return ii(e),
                    null;
                default:
                    return null
                }
            }
            function rl(e, t) {
                return {
                    value: e,
                    source: t,
                    stack: ye(t)
                }
            }
            $a = function(e, t) {
                for (var n = t.child; null !== n; ) {
                    if (5 === n.tag || 6 === n.tag)
                        e.appendChild(n.stateNode);
                    else if (4 !== n.tag && null !== n.child) {
                        n.child.return = n,
                        n = n.child;
                        continue
                    }
                    if (n === t)
                        break;
                    for (; null === n.sibling; ) {
                        if (null === n.return || n.return === t)
                            return;
                        n = n.return
                    }
                    n.sibling.return = n.return,
                    n = n.sibling
                }
            }
            ,
            Va = function() {}
            ,
            Wa = function(e, t, n, r, i) {
                var a = e.memoizedProps;
                if (a !== r) {
                    var l, u, c = t.stateNode;
                    switch (Li(Ii.current),
                    e = null,
                    n) {
                    case "input":
                        a = Te(c, a),
                        r = Te(c, r),
                        e = [];
                        break;
                    case "option":
                        a = Ce(c, a),
                        r = Ce(c, r),
                        e = [];
                        break;
                    case "select":
                        a = o({}, a, {
                            value: void 0
                        }),
                        r = o({}, r, {
                            value: void 0
                        }),
                        e = [];
                        break;
                    case "textarea":
                        a = Ne(c, a),
                        r = Ne(c, r),
                        e = [];
                        break;
                    default:
                        "function" != typeof a.onClick && "function" == typeof r.onClick && (c.onclick = un)
                    }
                    for (l in rn(n, r),
                    n = null,
                    a)
                        if (!r.hasOwnProperty(l) && a.hasOwnProperty(l) && null != a[l])
                            if ("style" === l)
                                for (u in c = a[l])
                                    c.hasOwnProperty(u) && (n || (n = {}),
                                    n[u] = "");
                            else
                                "dangerouslySetInnerHTML" !== l && "children" !== l && "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && "autoFocus" !== l && (k.hasOwnProperty(l) ? e || (e = []) : (e = e || []).push(l, null));
                    for (l in r) {
                        var s = r[l];
                        if (c = null != a ? a[l] : void 0,
                        r.hasOwnProperty(l) && s !== c && (null != s || null != c))
                            if ("style" === l)
                                if (c) {
                                    for (u in c)
                                        !c.hasOwnProperty(u) || s && s.hasOwnProperty(u) || (n || (n = {}),
                                        n[u] = "");
                                    for (u in s)
                                        s.hasOwnProperty(u) && c[u] !== s[u] && (n || (n = {}),
                                        n[u] = s[u])
                                } else
                                    n || (e || (e = []),
                                    e.push(l, n)),
                                    n = s;
                            else
                                "dangerouslySetInnerHTML" === l ? (s = s ? s.__html : void 0,
                                c = c ? c.__html : void 0,
                                null != s && c !== s && (e = e || []).push(l, s)) : "children" === l ? c === s || "string" != typeof s && "number" != typeof s || (e = e || []).push(l, "" + s) : "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && (k.hasOwnProperty(l) ? (null != s && ln(i, l),
                                e || c === s || (e = [])) : (e = e || []).push(l, s))
                    }
                    n && (e = e || []).push("style", n),
                    i = e,
                    (t.updateQueue = i) && (t.effectTag |= 4)
                }
            }
            ,
            Qa = function(e, t, n, r) {
                n !== r && (t.effectTag |= 4)
            }
            ;
            var ol = "function" == typeof WeakSet ? WeakSet : Set;
            function il(e, t) {
                var n = t.source
                  , r = t.stack;
                null === r && null !== n && (r = ye(n)),
                null !== n && ge(n.type),
                t = t.value,
                null !== e && 1 === e.tag && ge(e.type);
                try {
                    console.error(t)
                } catch (e) {
                    setTimeout(function() {
                        throw e
                    })
                }
            }
            function al(e) {
                var t = e.ref;
                if (null !== t)
                    if ("function" == typeof t)
                        try {
                            t(null)
                        } catch (t) {
                            Ru(e, t)
                        }
                    else
                        t.current = null
            }
            function ll(e, t) {
                switch (t.tag) {
                case 0:
                case 11:
                case 15:
                case 22:
                case 3:
                case 5:
                case 6:
                case 4:
                case 17:
                    return;
                case 1:
                    if (256 & t.effectTag && null !== e) {
                        var n = e.memoizedProps
                          , r = e.memoizedState;
                        t = (e = t.stateNode).getSnapshotBeforeUpdate(t.elementType === t.type ? n : Jo(t.type, n), r),
                        e.__reactInternalSnapshotBeforeUpdate = t
                    }
                    return
                }
                throw Error(a(163))
            }
            function ul(e, t) {
                if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
                    var n = t = t.next;
                    do {
                        if ((n.tag & e) === e) {
                            var r = n.destroy;
                            n.destroy = void 0,
                            void 0 !== r && r()
                        }
                        n = n.next
                    } while (n !== t)
                }
            }
            function cl(e, t) {
                if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
                    var n = t = t.next;
                    do {
                        if ((n.tag & e) === e) {
                            var r = n.create;
                            n.destroy = r()
                        }
                        n = n.next
                    } while (n !== t)
                }
            }
            function sl(e, t, n) {
                switch (n.tag) {
                case 0:
                case 11:
                case 15:
                case 22:
                    return void cl(3, n);
                case 1:
                    if (e = n.stateNode,
                    4 & n.effectTag)
                        if (null === t)
                            e.componentDidMount();
                        else {
                            var r = n.elementType === n.type ? t.memoizedProps : Jo(n.type, t.memoizedProps);
                            e.componentDidUpdate(r, t.memoizedState, e.__reactInternalSnapshotBeforeUpdate)
                        }
                    return void (null !== (t = n.updateQueue) && gi(n, t, e));
                case 3:
                    if (null !== (t = n.updateQueue)) {
                        if (e = null,
                        null !== n.child)
                            switch (n.child.tag) {
                            case 5:
                            case 1:
                                e = n.child.stateNode
                            }
                        gi(n, t, e)
                    }
                    return;
                case 5:
                    return e = n.stateNode,
                    void (null === t && 4 & n.effectTag && wn(n.type, n.memoizedProps) && e.focus());
                case 6:
                case 4:
                case 12:
                case 19:
                case 17:
                case 20:
                case 21:
                    return;
                case 13:
                    return void (null === n.memoizedState && (n = n.alternate,
                    null !== n && (n = n.memoizedState,
                    null !== n && (n = n.dehydrated,
                    null !== n && Lt(n)))))
                }
                throw Error(a(163))
            }
            function fl(e, t, n) {
                switch ("function" == typeof Hu && Hu(t),
                t.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                case 22:
                    if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
                        var r = e.next;
                        Qo(97 < n ? 97 : n, function() {
                            var e = r;
                            do {
                                var n = e.destroy;
                                if (void 0 !== n) {
                                    var o = t;
                                    try {
                                        n()
                                    } catch (e) {
                                        Ru(o, e)
                                    }
                                }
                                e = e.next
                            } while (e !== r)
                        })
                    }
                    break;
                case 1:
                    al(t),
                    "function" == typeof (n = t.stateNode).componentWillUnmount && function(e, t) {
                        try {
                            t.props = e.memoizedProps,
                            t.state = e.memoizedState,
                            t.componentWillUnmount()
                        } catch (t) {
                            Ru(e, t)
                        }
                    }(t, n);
                    break;
                case 5:
                    al(t);
                    break;
                case 4:
                    yl(e, t, n)
                }
            }
            function pl(e) {
                var t = e.alternate;
                e.return = null,
                e.child = null,
                e.memoizedState = null,
                e.updateQueue = null,
                e.dependencies = null,
                e.alternate = null,
                e.firstEffect = null,
                e.lastEffect = null,
                e.pendingProps = null,
                e.memoizedProps = null,
                e.stateNode = null,
                null !== t && pl(t)
            }
            function dl(e) {
                return 5 === e.tag || 3 === e.tag || 4 === e.tag
            }
            function hl(e) {
                e: {
                    for (var t = e.return; null !== t; ) {
                        if (dl(t)) {
                            var n = t;
                            break e
                        }
                        t = t.return
                    }
                    throw Error(a(160))
                }
                switch (t = n.stateNode,
                n.tag) {
                case 5:
                    var r = !1;
                    break;
                case 3:
                case 4:
                    t = t.containerInfo,
                    r = !0;
                    break;
                default:
                    throw Error(a(161))
                }
                16 & n.effectTag && (je(t, ""),
                n.effectTag &= -17);
                e: t: for (n = e; ; ) {
                    for (; null === n.sibling; ) {
                        if (null === n.return || dl(n.return)) {
                            n = null;
                            break e
                        }
                        n = n.return
                    }
                    for (n.sibling.return = n.return,
                    n = n.sibling; 5 !== n.tag && 6 !== n.tag && 18 !== n.tag; ) {
                        if (2 & n.effectTag)
                            continue t;
                        if (null === n.child || 4 === n.tag)
                            continue t;
                        n.child.return = n,
                        n = n.child
                    }
                    if (!(2 & n.effectTag)) {
                        n = n.stateNode;
                        break e
                    }
                }
                r ? ml(e, n, t) : gl(e, n, t)
            }
            function ml(e, t, n) {
                var r = e.tag
                  , o = 5 === r || 6 === r;
                if (o)
                    e = o ? e.stateNode : e.stateNode.instance,
                    t ? 8 === n.nodeType ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e),
                    null != (n = n._reactRootContainer) || null !== t.onclick || (t.onclick = un));
                else if (4 !== r && null !== (e = e.child))
                    for (ml(e, t, n),
                    e = e.sibling; null !== e; )
                        ml(e, t, n),
                        e = e.sibling
            }
            function gl(e, t, n) {
                var r = e.tag
                  , o = 5 === r || 6 === r;
                if (o)
                    e = o ? e.stateNode : e.stateNode.instance,
                    t ? n.insertBefore(e, t) : n.appendChild(e);
                else if (4 !== r && null !== (e = e.child))
                    for (gl(e, t, n),
                    e = e.sibling; null !== e; )
                        gl(e, t, n),
                        e = e.sibling
            }
            function yl(e, t, n) {
                for (var r, o, i = t, l = !1; ; ) {
                    if (!l) {
                        l = i.return;
                        e: for (; ; ) {
                            if (null === l)
                                throw Error(a(160));
                            switch (r = l.stateNode,
                            l.tag) {
                            case 5:
                                o = !1;
                                break e;
                            case 3:
                            case 4:
                                r = r.containerInfo,
                                o = !0;
                                break e
                            }
                            l = l.return
                        }
                        l = !0
                    }
                    if (5 === i.tag || 6 === i.tag) {
                        e: for (var u = e, c = i, s = n, f = c; ; )
                            if (fl(u, f, s),
                            null !== f.child && 4 !== f.tag)
                                f.child.return = f,
                                f = f.child;
                            else {
                                if (f === c)
                                    break e;
                                for (; null === f.sibling; ) {
                                    if (null === f.return || f.return === c)
                                        break e;
                                    f = f.return
                                }
                                f.sibling.return = f.return,
                                f = f.sibling
                            }
                        o ? (u = r,
                        c = i.stateNode,
                        8 === u.nodeType ? u.parentNode.removeChild(c) : u.removeChild(c)) : r.removeChild(i.stateNode)
                    } else if (4 === i.tag) {
                        if (null !== i.child) {
                            r = i.stateNode.containerInfo,
                            o = !0,
                            i.child.return = i,
                            i = i.child;
                            continue
                        }
                    } else if (fl(e, i, n),
                    null !== i.child) {
                        i.child.return = i,
                        i = i.child;
                        continue
                    }
                    if (i === t)
                        break;
                    for (; null === i.sibling; ) {
                        if (null === i.return || i.return === t)
                            return;
                        4 === (i = i.return).tag && (l = !1)
                    }
                    i.sibling.return = i.return,
                    i = i.sibling
                }
            }
            function bl(e, t) {
                switch (t.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                case 22:
                    return void ul(3, t);
                case 1:
                case 12:
                case 17:
                    return;
                case 5:
                    var n = t.stateNode;
                    if (null != n) {
                        var r = t.memoizedProps
                          , o = null !== e ? e.memoizedProps : r;
                        e = t.type;
                        var i = t.updateQueue;
                        if (t.updateQueue = null,
                        null !== i) {
                            for (n[On] = r,
                            "input" === e && "radio" === r.type && null != r.name && ke(n, r),
                            on(e, o),
                            t = on(e, r),
                            o = 0; o < i.length; o += 2) {
                                var l = i[o]
                                  , u = i[o + 1];
                                "style" === l ? tn(n, u) : "dangerouslySetInnerHTML" === l ? Be(n, u) : "children" === l ? je(n, u) : Y(n, l, u, t)
                            }
                            switch (e) {
                            case "input":
                                xe(n, r);
                                break;
                            case "textarea":
                                Ie(n, r);
                                break;
                            case "select":
                                t = n._wrapperState.wasMultiple,
                                n._wrapperState.wasMultiple = !!r.multiple,
                                null != (e = r.value) ? Oe(n, !!r.multiple, e, !1) : t !== !!r.multiple && (null != r.defaultValue ? Oe(n, !!r.multiple, r.defaultValue, !0) : Oe(n, !!r.multiple, r.multiple ? [] : "", !1))
                            }
                        }
                    }
                    return;
                case 6:
                    if (null === t.stateNode)
                        throw Error(a(162));
                    return void (t.stateNode.nodeValue = t.memoizedProps);
                case 3:
                    return void ((t = t.stateNode).hydrate && (t.hydrate = !1,
                    Lt(t.containerInfo)));
                case 13:
                    if (n = t,
                    null === t.memoizedState ? r = !1 : (r = !0,
                    n = t.child,
                    Kl = $o()),
                    null !== n)
                        e: for (e = n; ; ) {
                            if (5 === e.tag)
                                i = e.stateNode,
                                r ? "function" == typeof (i = i.style).setProperty ? i.setProperty("display", "none", "important") : i.display = "none" : (i = e.stateNode,
                                o = null != (o = e.memoizedProps.style) && o.hasOwnProperty("display") ? o.display : null,
                                i.style.display = en("display", o));
                            else if (6 === e.tag)
                                e.stateNode.nodeValue = r ? "" : e.memoizedProps;
                            else {
                                if (13 === e.tag && null !== e.memoizedState && null === e.memoizedState.dehydrated) {
                                    (i = e.child.sibling).return = e,
                                    e = i;
                                    continue
                                }
                                if (null !== e.child) {
                                    e.child.return = e,
                                    e = e.child;
                                    continue
                                }
                            }
                            if (e === n)
                                break;
                            for (; null === e.sibling; ) {
                                if (null === e.return || e.return === n)
                                    break e;
                                e = e.return
                            }
                            e.sibling.return = e.return,
                            e = e.sibling
                        }
                    return void vl(t);
                case 19:
                    return void vl(t)
                }
                throw Error(a(163))
            }
            function vl(e) {
                var t = e.updateQueue;
                if (null !== t) {
                    e.updateQueue = null;
                    var n = e.stateNode;
                    null === n && (n = e.stateNode = new ol),
                    t.forEach(function(t) {
                        var r = Lu.bind(null, e, t);
                        n.has(t) || (n.add(t),
                        t.then(r, r))
                    })
                }
            }
            var El = "function" == typeof WeakMap ? WeakMap : Map;
            function wl(e, t, n) {
                (n = pi(n, null)).tag = 3,
                n.payload = {
                    element: null
                };
                var r = t.value;
                return n.callback = function() {
                    Yl || (Yl = !0,
                    Zl = r),
                    il(e, t)
                }
                ,
                n
            }
            function Tl(e, t, n) {
                (n = pi(n, null)).tag = 3;
                var r = e.type.getDerivedStateFromError;
                if ("function" == typeof r) {
                    var o = t.value;
                    n.payload = function() {
                        return il(e, t),
                        r(o)
                    }
                }
                var i = e.stateNode;
                return null !== i && "function" == typeof i.componentDidCatch && (n.callback = function() {
                    "function" != typeof r && (null === Jl ? Jl = new Set([this]) : Jl.add(this),
                    il(e, t));
                    var n = t.stack;
                    this.componentDidCatch(t.value, {
                        componentStack: null !== n ? n : ""
                    })
                }
                ),
                n
            }
            var Sl, kl = Math.ceil, xl = q.ReactCurrentDispatcher, _l = q.ReactCurrentOwner, Pl = 0, Cl = 8, Ol = 16, Nl = 32, Al = 0, Il = 1, Rl = 2, Ml = 3, Ll = 4, Dl = 5, Hl = Pl, Bl = null, jl = null, Fl = 0, Ul = Al, zl = null, Gl = 1073741823, $l = 1073741823, Vl = null, Wl = 0, Ql = !1, Kl = 0, Xl = 500, ql = null, Yl = !1, Zl = null, Jl = null, eu = !1, tu = null, nu = 90, ru = null, ou = 0, iu = null, au = 0;
            function lu() {
                return (Hl & (Ol | Nl)) !== Pl ? 1073741821 - ($o() / 10 | 0) : 0 !== au ? au : au = 1073741821 - ($o() / 10 | 0)
            }
            function uu(e, t, n) {
                if (!(2 & (t = t.mode)))
                    return 1073741823;
                var r = Vo();
                if (!(4 & t))
                    return 99 === r ? 1073741823 : 1073741822;
                if ((Hl & Ol) !== Pl)
                    return Fl;
                if (null !== n)
                    e = Zo(e, 0 | n.timeoutMs || 5e3, 250);
                else
                    switch (r) {
                    case 99:
                        e = 1073741823;
                        break;
                    case 98:
                        e = Zo(e, 150, 100);
                        break;
                    case 97:
                    case 96:
                        e = Zo(e, 5e3, 250);
                        break;
                    case 95:
                        e = 2;
                        break;
                    default:
                        throw Error(a(326))
                    }
                return null !== Bl && e === Fl && --e,
                e
            }
            function cu(e, t) {
                if (50 < ou)
                    throw ou = 0,
                    iu = null,
                    Error(a(185));
                if (null !== (e = su(e, t))) {
                    var n = Vo();
                    1073741823 === t ? (Hl & Cl) !== Pl && (Hl & (Ol | Nl)) === Pl ? hu(e) : (pu(e),
                    Hl === Pl && qo()) : pu(e),
                    (4 & Hl) === Pl || 98 !== n && 99 !== n || (null === ru ? ru = new Map([[e, t]]) : (void 0 === (n = ru.get(e)) || n > t) && ru.set(e, t))
                }
            }
            function su(e, t) {
                e.expirationTime < t && (e.expirationTime = t);
                var n = e.alternate;
                null !== n && n.expirationTime < t && (n.expirationTime = t);
                var r = e.return
                  , o = null;
                if (null === r && 3 === e.tag)
                    o = e.stateNode;
                else
                    for (; null !== r; ) {
                        if (n = r.alternate,
                        r.childExpirationTime < t && (r.childExpirationTime = t),
                        null !== n && n.childExpirationTime < t && (n.childExpirationTime = t),
                        null === r.return && 3 === r.tag) {
                            o = r.stateNode;
                            break
                        }
                        r = r.return
                    }
                return null !== o && (Bl === o && (wu(t),
                Ul === Ll && Ku(o, Fl)),
                Xu(o, t)),
                o
            }
            function fu(e) {
                var t = e.lastExpiredTime;
                if (0 !== t)
                    return t;
                if (!Qu(e, t = e.firstPendingTime))
                    return t;
                var n = e.lastPingedTime;
                return 2 >= (e = n > (e = e.nextKnownPendingLevel) ? n : e) && t !== e ? 0 : e
            }
            function pu(e) {
                if (0 !== e.lastExpiredTime)
                    e.callbackExpirationTime = 1073741823,
                    e.callbackPriority = 99,
                    e.callbackNode = Xo(hu.bind(null, e));
                else {
                    var t = fu(e)
                      , n = e.callbackNode;
                    if (0 === t)
                        null !== n && (e.callbackNode = null,
                        e.callbackExpirationTime = 0,
                        e.callbackPriority = 90);
                    else {
                        var r = lu();
                        if (r = 1073741823 === t ? 99 : 1 === t || 2 === t ? 95 : 0 >= (r = 10 * (1073741821 - t) - 10 * (1073741821 - r)) ? 99 : 250 >= r ? 98 : 5250 >= r ? 97 : 95,
                        null !== n) {
                            var o = e.callbackPriority;
                            if (e.callbackExpirationTime === t && o >= r)
                                return;
                            n !== Ho && Co(n)
                        }
                        e.callbackExpirationTime = t,
                        e.callbackPriority = r,
                        t = 1073741823 === t ? Xo(hu.bind(null, e)) : Ko(r, du.bind(null, e), {
                            timeout: 10 * (1073741821 - t) - $o()
                        }),
                        e.callbackNode = t
                    }
                }
            }
            function du(e, t) {
                if (au = 0,
                t)
                    return qu(e, t = lu()),
                    pu(e),
                    null;
                var n = fu(e);
                if (0 !== n) {
                    if (t = e.callbackNode,
                    (Hl & (Ol | Nl)) !== Pl)
                        throw Error(a(327));
                    if (Nu(),
                    e === Bl && n === Fl || yu(e, n),
                    null !== jl) {
                        var r = Hl;
                        Hl |= Ol;
                        for (var o = vu(); ; )
                            try {
                                Su();
                                break
                            } catch (t) {
                                bu(e, t)
                            }
                        if (oi(),
                        Hl = r,
                        xl.current = o,
                        Ul === Il)
                            throw t = zl,
                            yu(e, n),
                            Ku(e, n),
                            pu(e),
                            t;
                        if (null === jl)
                            switch (o = e.finishedWork = e.current.alternate,
                            e.finishedExpirationTime = n,
                            r = Ul,
                            Bl = null,
                            r) {
                            case Al:
                            case Il:
                                throw Error(a(345));
                            case Rl:
                                qu(e, 2 < n ? 2 : n);
                                break;
                            case Ml:
                                if (Ku(e, n),
                                n === (r = e.lastSuspendedTime) && (e.nextKnownPendingLevel = _u(o)),
                                1073741823 === Gl && 10 < (o = Kl + Xl - $o())) {
                                    if (Ql) {
                                        var i = e.lastPingedTime;
                                        if (0 === i || i >= n) {
                                            e.lastPingedTime = n,
                                            yu(e, n);
                                            break
                                        }
                                    }
                                    if (0 !== (i = fu(e)) && i !== n)
                                        break;
                                    if (0 !== r && r !== n) {
                                        e.lastPingedTime = r;
                                        break
                                    }
                                    e.timeoutHandle = Sn(Pu.bind(null, e), o);
                                    break
                                }
                                Pu(e);
                                break;
                            case Ll:
                                if (Ku(e, n),
                                n === (r = e.lastSuspendedTime) && (e.nextKnownPendingLevel = _u(o)),
                                Ql && (0 === (o = e.lastPingedTime) || o >= n)) {
                                    e.lastPingedTime = n,
                                    yu(e, n);
                                    break
                                }
                                if (0 !== (o = fu(e)) && o !== n)
                                    break;
                                if (0 !== r && r !== n) {
                                    e.lastPingedTime = r;
                                    break
                                }
                                if (1073741823 !== $l ? r = 10 * (1073741821 - $l) - $o() : 1073741823 === Gl ? r = 0 : (r = 10 * (1073741821 - Gl) - 5e3,
                                0 > (r = (o = $o()) - r) && (r = 0),
                                (n = 10 * (1073741821 - n) - o) < (r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * kl(r / 1960)) - r) && (r = n)),
                                10 < r) {
                                    e.timeoutHandle = Sn(Pu.bind(null, e), r);
                                    break
                                }
                                Pu(e);
                                break;
                            case Dl:
                                if (1073741823 !== Gl && null !== Vl) {
                                    i = Gl;
                                    var l = Vl;
                                    if (0 >= (r = 0 | l.busyMinDurationMs) ? r = 0 : (o = 0 | l.busyDelayMs,
                                    r = (i = $o() - (10 * (1073741821 - i) - (0 | l.timeoutMs || 5e3))) <= o ? 0 : o + r - i),
                                    10 < r) {
                                        Ku(e, n),
                                        e.timeoutHandle = Sn(Pu.bind(null, e), r);
                                        break
                                    }
                                }
                                Pu(e);
                                break;
                            default:
                                throw Error(a(329))
                            }
                        if (pu(e),
                        e.callbackNode === t)
                            return du.bind(null, e)
                    }
                }
                return null
            }
            function hu(e) {
                var t = e.lastExpiredTime;
                if (t = 0 !== t ? t : 1073741823,
                (Hl & (Ol | Nl)) !== Pl)
                    throw Error(a(327));
                if (Nu(),
                e === Bl && t === Fl || yu(e, t),
                null !== jl) {
                    var n = Hl;
                    Hl |= Ol;
                    for (var r = vu(); ; )
                        try {
                            Tu();
                            break
                        } catch (t) {
                            bu(e, t)
                        }
                    if (oi(),
                    Hl = n,
                    xl.current = r,
                    Ul === Il)
                        throw n = zl,
                        yu(e, t),
                        Ku(e, t),
                        pu(e),
                        n;
                    if (null !== jl)
                        throw Error(a(261));
                    e.finishedWork = e.current.alternate,
                    e.finishedExpirationTime = t,
                    Bl = null,
                    Pu(e),
                    pu(e)
                }
                return null
            }
            function mu(e, t) {
                var n = Hl;
                Hl |= 1;
                try {
                    return e(t)
                } finally {
                    (Hl = n) === Pl && qo()
                }
            }
            function gu(e, t) {
                var n = Hl;
                Hl &= -2,
                Hl |= Cl;
                try {
                    return e(t)
                } finally {
                    (Hl = n) === Pl && qo()
                }
            }
            function yu(e, t) {
                e.finishedWork = null,
                e.finishedExpirationTime = 0;
                var n = e.timeoutHandle;
                if (-1 !== n && (e.timeoutHandle = -1,
                kn(n)),
                null !== jl)
                    for (n = jl.return; null !== n; ) {
                        var r = n;
                        switch (r.tag) {
                        case 1:
                            null != (r = r.type.childContextTypes) && wo();
                            break;
                        case 3:
                            Hi(),
                            po(yo),
                            po(go);
                            break;
                        case 5:
                            ji(r);
                            break;
                        case 4:
                            Hi();
                            break;
                        case 13:
                        case 19:
                            po(Fi);
                            break;
                        case 10:
                            ii(r)
                        }
                        n = n.return
                    }
                Bl = e,
                jl = Uu(e.current, null),
                Fl = t,
                Ul = Al,
                zl = null,
                $l = Gl = 1073741823,
                Vl = null,
                Wl = 0,
                Ql = !1
            }
            function bu(e, t) {
                for (; ; ) {
                    try {
                        if (oi(),
                        Gi.current = Ea,
                        Xi)
                            for (var n = Wi.memoizedState; null !== n; ) {
                                var r = n.queue;
                                null !== r && (r.pending = null),
                                n = n.next
                            }
                        if (Vi = 0,
                        Ki = Qi = Wi = null,
                        Xi = !1,
                        null === jl || null === jl.return)
                            return Ul = Il,
                            zl = t,
                            jl = null;
                        e: {
                            var o = e
                              , i = jl.return
                              , a = jl
                              , l = t;
                            if (t = Fl,
                            a.effectTag |= 2048,
                            a.firstEffect = a.lastEffect = null,
                            null !== l && "object" == typeof l && "function" == typeof l.then) {
                                var u = l;
                                if (!(2 & a.mode)) {
                                    var c = a.alternate;
                                    c ? (a.updateQueue = c.updateQueue,
                                    a.memoizedState = c.memoizedState,
                                    a.expirationTime = c.expirationTime) : (a.updateQueue = null,
                                    a.memoizedState = null)
                                }
                                var s = !!(1 & Fi.current)
                                  , f = i;
                                do {
                                    var p;
                                    if (p = 13 === f.tag) {
                                        var d = f.memoizedState;
                                        if (null !== d)
                                            p = null !== d.dehydrated;
                                        else {
                                            var h = f.memoizedProps;
                                            p = void 0 !== h.fallback && (!0 !== h.unstable_avoidThisFallback || !s)
                                        }
                                    }
                                    if (p) {
                                        var m = f.updateQueue;
                                        if (null === m) {
                                            var g = new Set;
                                            g.add(u),
                                            f.updateQueue = g
                                        } else
                                            m.add(u);
                                        if (!(2 & f.mode)) {
                                            if (f.effectTag |= 64,
                                            a.effectTag &= -2981,
                                            1 === a.tag)
                                                if (null === a.alternate)
                                                    a.tag = 17;
                                                else {
                                                    var y = pi(1073741823, null);
                                                    y.tag = 2,
                                                    di(a, y)
                                                }
                                            a.expirationTime = 1073741823;
                                            break e
                                        }
                                        l = void 0,
                                        a = t;
                                        var b = o.pingCache;
                                        if (null === b ? (b = o.pingCache = new El,
                                        l = new Set,
                                        b.set(u, l)) : void 0 === (l = b.get(u)) && (l = new Set,
                                        b.set(u, l)),
                                        !l.has(a)) {
                                            l.add(a);
                                            var v = Mu.bind(null, o, u, a);
                                            u.then(v, v)
                                        }
                                        f.effectTag |= 4096,
                                        f.expirationTime = t;
                                        break e
                                    }
                                    f = f.return
                                } while (null !== f);
                                l = Error((ge(a.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display." + ye(a))
                            }
                            Ul !== Dl && (Ul = Rl),
                            l = rl(l, a),
                            f = i;
                            do {
                                switch (f.tag) {
                                case 3:
                                    u = l,
                                    f.effectTag |= 4096,
                                    f.expirationTime = t,
                                    hi(f, wl(f, u, t));
                                    break e;
                                case 1:
                                    u = l;
                                    var E = f.type
                                      , w = f.stateNode;
                                    if (!(64 & f.effectTag || "function" != typeof E.getDerivedStateFromError && (null === w || "function" != typeof w.componentDidCatch || null !== Jl && Jl.has(w)))) {
                                        f.effectTag |= 4096,
                                        f.expirationTime = t,
                                        hi(f, Tl(f, u, t));
                                        break e
                                    }
                                }
                                f = f.return
                            } while (null !== f)
                        }
                        jl = xu(jl)
                    } catch (e) {
                        t = e;
                        continue
                    }
                    break
                }
            }
            function vu() {
                var e = xl.current;
                return xl.current = Ea,
                null === e ? Ea : e
            }
            function Eu(e, t) {
                e < Gl && 2 < e && (Gl = e),
                null !== t && e < $l && 2 < e && ($l = e,
                Vl = t)
            }
            function wu(e) {
                e > Wl && (Wl = e)
            }
            function Tu() {
                for (; null !== jl; )
                    jl = ku(jl)
            }
            function Su() {
                for (; null !== jl && !Bo(); )
                    jl = ku(jl)
            }
            function ku(e) {
                var t = Sl(e.alternate, e, Fl);
                return e.memoizedProps = e.pendingProps,
                null === t && (t = xu(e)),
                _l.current = null,
                t
            }
            function xu(e) {
                jl = e;
                do {
                    var t = jl.alternate;
                    if (e = jl.return,
                    2048 & jl.effectTag) {
                        if (null !== (t = nl(jl)))
                            return t.effectTag &= 2047,
                            t;
                        null !== e && (e.firstEffect = e.lastEffect = null,
                        e.effectTag |= 2048)
                    } else {
                        if (t = tl(t, jl, Fl),
                        1 === Fl || 1 !== jl.childExpirationTime) {
                            for (var n = 0, r = jl.child; null !== r; ) {
                                var o = r.expirationTime
                                  , i = r.childExpirationTime;
                                o > n && (n = o),
                                i > n && (n = i),
                                r = r.sibling
                            }
                            jl.childExpirationTime = n
                        }
                        if (null !== t)
                            return t;
                        null !== e && !(2048 & e.effectTag) && (null === e.firstEffect && (e.firstEffect = jl.firstEffect),
                        null !== jl.lastEffect && (null !== e.lastEffect && (e.lastEffect.nextEffect = jl.firstEffect),
                        e.lastEffect = jl.lastEffect),
                        1 < jl.effectTag && (null !== e.lastEffect ? e.lastEffect.nextEffect = jl : e.firstEffect = jl,
                        e.lastEffect = jl))
                    }
                    if (null !== (t = jl.sibling))
                        return t;
                    jl = e
                } while (null !== jl);
                return Ul === Al && (Ul = Dl),
                null
            }
            function _u(e) {
                var t = e.expirationTime;
                return t > (e = e.childExpirationTime) ? t : e
            }
            function Pu(e) {
                var t = Vo();
                return Qo(99, Cu.bind(null, e, t)),
                null
            }
            function Cu(e, t) {
                do {
                    Nu()
                } while (null !== tu);
                if ((Hl & (Ol | Nl)) !== Pl)
                    throw Error(a(327));
                var n = e.finishedWork
                  , r = e.finishedExpirationTime;
                if (null === n)
                    return null;
                if (e.finishedWork = null,
                e.finishedExpirationTime = 0,
                n === e.current)
                    throw Error(a(177));
                e.callbackNode = null,
                e.callbackExpirationTime = 0,
                e.callbackPriority = 90,
                e.nextKnownPendingLevel = 0;
                var o = _u(n);
                if (e.firstPendingTime = o,
                r <= e.lastSuspendedTime ? e.firstSuspendedTime = e.lastSuspendedTime = e.nextKnownPendingLevel = 0 : r <= e.firstSuspendedTime && (e.firstSuspendedTime = r - 1),
                r <= e.lastPingedTime && (e.lastPingedTime = 0),
                r <= e.lastExpiredTime && (e.lastExpiredTime = 0),
                e === Bl && (jl = Bl = null,
                Fl = 0),
                1 < n.effectTag ? null !== n.lastEffect ? (n.lastEffect.nextEffect = n,
                o = n.firstEffect) : o = n : o = n.firstEffect,
                null !== o) {
                    var i = Hl;
                    Hl |= Nl,
                    _l.current = null,
                    vn = Vt;
                    var l = dn();
                    if (hn(l)) {
                        if ("selectionStart"in l)
                            var u = {
                                start: l.selectionStart,
                                end: l.selectionEnd
                            };
                        else
                            e: {
                                var c = (u = (u = l.ownerDocument) && u.defaultView || window).getSelection && u.getSelection();
                                if (c && 0 !== c.rangeCount) {
                                    u = c.anchorNode;
                                    var s = c.anchorOffset
                                      , f = c.focusNode;
                                    c = c.focusOffset;
                                    try {
                                        u.nodeType,
                                        f.nodeType
                                    } catch (e) {
                                        u = null;
                                        break e
                                    }
                                    var p = 0
                                      , d = -1
                                      , h = -1
                                      , m = 0
                                      , g = 0
                                      , y = l
                                      , b = null;
                                    t: for (; ; ) {
                                        for (var v; y !== u || 0 !== s && 3 !== y.nodeType || (d = p + s),
                                        y !== f || 0 !== c && 3 !== y.nodeType || (h = p + c),
                                        3 === y.nodeType && (p += y.nodeValue.length),
                                        null !== (v = y.firstChild); )
                                            b = y,
                                            y = v;
                                        for (; ; ) {
                                            if (y === l)
                                                break t;
                                            if (b === u && ++m === s && (d = p),
                                            b === f && ++g === c && (h = p),
                                            null !== (v = y.nextSibling))
                                                break;
                                            b = (y = b).parentNode
                                        }
                                        y = v
                                    }
                                    u = -1 === d || -1 === h ? null : {
                                        start: d,
                                        end: h
                                    }
                                } else
                                    u = null
                            }
                        u = u || {
                            start: 0,
                            end: 0
                        }
                    } else
                        u = null;
                    En = {
                        activeElementDetached: null,
                        focusedElem: l,
                        selectionRange: u
                    },
                    Vt = !1,
                    ql = o;
                    do {
                        try {
                            Ou()
                        } catch (e) {
                            if (null === ql)
                                throw Error(a(330));
                            Ru(ql, e),
                            ql = ql.nextEffect
                        }
                    } while (null !== ql);
                    ql = o;
                    do {
                        try {
                            for (l = e,
                            u = t; null !== ql; ) {
                                var E = ql.effectTag;
                                if (16 & E && je(ql.stateNode, ""),
                                128 & E) {
                                    var w = ql.alternate;
                                    if (null !== w) {
                                        var T = w.ref;
                                        null !== T && ("function" == typeof T ? T(null) : T.current = null)
                                    }
                                }
                                switch (1038 & E) {
                                case 2:
                                    hl(ql),
                                    ql.effectTag &= -3;
                                    break;
                                case 6:
                                    hl(ql),
                                    ql.effectTag &= -3,
                                    bl(ql.alternate, ql);
                                    break;
                                case 1024:
                                    ql.effectTag &= -1025;
                                    break;
                                case 1028:
                                    ql.effectTag &= -1025,
                                    bl(ql.alternate, ql);
                                    break;
                                case 4:
                                    bl(ql.alternate, ql);
                                    break;
                                case 8:
                                    yl(l, s = ql, u),
                                    pl(s)
                                }
                                ql = ql.nextEffect
                            }
                        } catch (e) {
                            if (null === ql)
                                throw Error(a(330));
                            Ru(ql, e),
                            ql = ql.nextEffect
                        }
                    } while (null !== ql);
                    if (T = En,
                    w = dn(),
                    E = T.focusedElem,
                    u = T.selectionRange,
                    w !== E && E && E.ownerDocument && pn(E.ownerDocument.documentElement, E)) {
                        null !== u && hn(E) && (w = u.start,
                        void 0 === (T = u.end) && (T = w),
                        "selectionStart"in E ? (E.selectionStart = w,
                        E.selectionEnd = Math.min(T, E.value.length)) : (T = (w = E.ownerDocument || document) && w.defaultView || window).getSelection && (T = T.getSelection(),
                        s = E.textContent.length,
                        l = Math.min(u.start, s),
                        u = void 0 === u.end ? l : Math.min(u.end, s),
                        !T.extend && l > u && (s = u,
                        u = l,
                        l = s),
                        s = fn(E, l),
                        f = fn(E, u),
                        s && f && (1 !== T.rangeCount || T.anchorNode !== s.node || T.anchorOffset !== s.offset || T.focusNode !== f.node || T.focusOffset !== f.offset) && ((w = w.createRange()).setStart(s.node, s.offset),
                        T.removeAllRanges(),
                        l > u ? (T.addRange(w),
                        T.extend(f.node, f.offset)) : (w.setEnd(f.node, f.offset),
                        T.addRange(w))))),
                        w = [];
                        for (T = E; T = T.parentNode; )
                            1 === T.nodeType && w.push({
                                element: T,
                                left: T.scrollLeft,
                                top: T.scrollTop
                            });
                        for ("function" == typeof E.focus && E.focus(),
                        E = 0; E < w.length; E++)
                            (T = w[E]).element.scrollLeft = T.left,
                            T.element.scrollTop = T.top
                    }
                    Vt = !!vn,
                    En = vn = null,
                    e.current = n,
                    ql = o;
                    do {
                        try {
                            for (E = e; null !== ql; ) {
                                var S = ql.effectTag;
                                if (36 & S && sl(E, ql.alternate, ql),
                                128 & S) {
                                    w = void 0;
                                    var k = ql.ref;
                                    if (null !== k) {
                                        var x = ql.stateNode;
                                        ql.tag,
                                        w = x,
                                        "function" == typeof k ? k(w) : k.current = w
                                    }
                                }
                                ql = ql.nextEffect
                            }
                        } catch (e) {
                            if (null === ql)
                                throw Error(a(330));
                            Ru(ql, e),
                            ql = ql.nextEffect
                        }
                    } while (null !== ql);
                    ql = null,
                    jo(),
                    Hl = i
                } else
                    e.current = n;
                if (eu)
                    eu = !1,
                    tu = e,
                    nu = t;
                else
                    for (ql = o; null !== ql; )
                        t = ql.nextEffect,
                        ql.nextEffect = null,
                        ql = t;
                if (0 === (t = e.firstPendingTime) && (Jl = null),
                1073741823 === t ? e === iu ? ou++ : (ou = 0,
                iu = e) : ou = 0,
                "function" == typeof Du && Du(n.stateNode, r),
                pu(e),
                Yl)
                    throw Yl = !1,
                    e = Zl,
                    Zl = null,
                    e;
                return (Hl & Cl) !== Pl || qo(),
                null
            }
            function Ou() {
                for (; null !== ql; ) {
                    var e = ql.effectTag;
                    256 & e && ll(ql.alternate, ql),
                    !(512 & e) || eu || (eu = !0,
                    Ko(97, function() {
                        return Nu(),
                        null
                    })),
                    ql = ql.nextEffect
                }
            }
            function Nu() {
                if (90 !== nu) {
                    var e = 97 < nu ? 97 : nu;
                    return nu = 90,
                    Qo(e, Au)
                }
            }
            function Au() {
                if (null === tu)
                    return !1;
                var e = tu;
                if (tu = null,
                (Hl & (Ol | Nl)) !== Pl)
                    throw Error(a(331));
                var t = Hl;
                for (Hl |= Nl,
                e = e.current.firstEffect; null !== e; ) {
                    try {
                        var n = e;
                        if (512 & n.effectTag)
                            switch (n.tag) {
                            case 0:
                            case 11:
                            case 15:
                            case 22:
                                ul(5, n),
                                cl(5, n)
                            }
                    } catch (t) {
                        if (null === e)
                            throw Error(a(330));
                        Ru(e, t)
                    }
                    n = e.nextEffect,
                    e.nextEffect = null,
                    e = n
                }
                return Hl = t,
                qo(),
                !0
            }
            function Iu(e, t, n) {
                di(e, t = wl(e, t = rl(n, t), 1073741823)),
                null !== (e = su(e, 1073741823)) && pu(e)
            }
            function Ru(e, t) {
                if (3 === e.tag)
                    Iu(e, e, t);
                else
                    for (var n = e.return; null !== n; ) {
                        if (3 === n.tag) {
                            Iu(n, e, t);
                            break
                        }
                        if (1 === n.tag) {
                            var r = n.stateNode;
                            if ("function" == typeof n.type.getDerivedStateFromError || "function" == typeof r.componentDidCatch && (null === Jl || !Jl.has(r))) {
                                di(n, e = Tl(n, e = rl(t, e), 1073741823)),
                                null !== (n = su(n, 1073741823)) && pu(n);
                                break
                            }
                        }
                        n = n.return
                    }
            }
            function Mu(e, t, n) {
                var r = e.pingCache;
                null !== r && r.delete(t),
                Bl === e && Fl === n ? Ul === Ll || Ul === Ml && 1073741823 === Gl && $o() - Kl < Xl ? yu(e, Fl) : Ql = !0 : Qu(e, n) && (0 !== (t = e.lastPingedTime) && t < n || (e.lastPingedTime = n,
                pu(e)))
            }
            function Lu(e, t) {
                var n = e.stateNode;
                null !== n && n.delete(t),
                0 == (t = 0) && (t = uu(t = lu(), e, null)),
                null !== (e = su(e, t)) && pu(e)
            }
            Sl = function(e, t, n) {
                var r = t.expirationTime;
                if (null !== e) {
                    var o = t.pendingProps;
                    if (e.memoizedProps !== o || yo.current)
                        Ma = !0;
                    else {
                        if (r < n) {
                            switch (Ma = !1,
                            t.tag) {
                            case 3:
                                Ga(t),
                                Ia();
                                break;
                            case 5:
                                if (Bi(t),
                                4 & t.mode && 1 !== n && o.hidden)
                                    return t.expirationTime = t.childExpirationTime = 1,
                                    null;
                                break;
                            case 1:
                                Eo(t.type) && ko(t);
                                break;
                            case 4:
                                Di(t, t.stateNode.containerInfo);
                                break;
                            case 10:
                                r = t.memoizedProps.value,
                                o = t.type._context,
                                ho(ei, o._currentValue),
                                o._currentValue = r;
                                break;
                            case 13:
                                if (null !== t.memoizedState)
                                    return 0 !== (r = t.child.childExpirationTime) && r >= n ? Xa(e, t, n) : (ho(Fi, 1 & Fi.current),
                                    null !== (t = Ja(e, t, n)) ? t.sibling : null);
                                ho(Fi, 1 & Fi.current);
                                break;
                            case 19:
                                if (r = t.childExpirationTime >= n,
                                64 & e.effectTag) {
                                    if (r)
                                        return Za(e, t, n);
                                    t.effectTag |= 64
                                }
                                if (null !== (o = t.memoizedState) && (o.rendering = null,
                                o.tail = null),
                                ho(Fi, Fi.current),
                                !r)
                                    return null
                            }
                            return Ja(e, t, n)
                        }
                        Ma = !1
                    }
                } else
                    Ma = !1;
                switch (t.expirationTime = 0,
                t.tag) {
                case 2:
                    if (r = t.type,
                    null !== e && (e.alternate = null,
                    t.alternate = null,
                    t.effectTag |= 2),
                    e = t.pendingProps,
                    o = vo(t, go.current),
                    li(t, n),
                    o = Zi(null, t, r, e, o, n),
                    t.effectTag |= 1,
                    "object" == typeof o && null !== o && "function" == typeof o.render && void 0 === o.$$typeof) {
                        if (t.tag = 1,
                        t.memoizedState = null,
                        t.updateQueue = null,
                        Eo(r)) {
                            var i = !0;
                            ko(t)
                        } else
                            i = !1;
                        t.memoizedState = null !== o.state && void 0 !== o.state ? o.state : null,
                        si(t);
                        var l = r.getDerivedStateFromProps;
                        "function" == typeof l && vi(t, r, l, e),
                        o.updater = Ei,
                        t.stateNode = o,
                        o._reactInternalFiber = t,
                        ki(t, r, e, n),
                        t = za(null, t, r, !0, i, n)
                    } else
                        t.tag = 0,
                        La(null, t, o, n),
                        t = t.child;
                    return t;
                case 16:
                    e: {
                        if (o = t.elementType,
                        null !== e && (e.alternate = null,
                        t.alternate = null,
                        t.effectTag |= 2),
                        e = t.pendingProps,
                        function(e) {
                            if (-1 === e._status) {
                                e._status = 0;
                                var t = e._ctor;
                                t = t(),
                                e._result = t,
                                t.then(function(t) {
                                    0 === e._status && (t = t.default,
                                    e._status = 1,
                                    e._result = t)
                                }, function(t) {
                                    0 === e._status && (e._status = 2,
                                    e._result = t)
                                })
                            }
                        }(o),
                        1 !== o._status)
                            throw o._result;
                        switch (o = o._result,
                        t.type = o,
                        i = t.tag = function(e) {
                            if ("function" == typeof e)
                                return Fu(e) ? 1 : 0;
                            if (null != e) {
                                if ((e = e.$$typeof) === ue)
                                    return 11;
                                if (e === fe)
                                    return 14
                            }
                            return 2
                        }(o),
                        e = Jo(o, e),
                        i) {
                        case 0:
                            t = Fa(null, t, o, e, n);
                            break e;
                        case 1:
                            t = Ua(null, t, o, e, n);
                            break e;
                        case 11:
                            t = Da(null, t, o, e, n);
                            break e;
                        case 14:
                            t = Ha(null, t, o, Jo(o.type, e), r, n);
                            break e
                        }
                        throw Error(a(306, o, ""))
                    }
                    return t;
                case 0:
                    return r = t.type,
                    o = t.pendingProps,
                    Fa(e, t, r, o = t.elementType === r ? o : Jo(r, o), n);
                case 1:
                    return r = t.type,
                    o = t.pendingProps,
                    Ua(e, t, r, o = t.elementType === r ? o : Jo(r, o), n);
                case 3:
                    if (Ga(t),
                    r = t.updateQueue,
                    null === e || null === r)
                        throw Error(a(282));
                    if (r = t.pendingProps,
                    o = null !== (o = t.memoizedState) ? o.element : null,
                    fi(e, t),
                    mi(t, r, null, n),
                    (r = t.memoizedState.element) === o)
                        Ia(),
                        t = Ja(e, t, n);
                    else {
                        if ((o = t.stateNode.hydrate) && (xa = xn(t.stateNode.containerInfo.firstChild),
                        ka = t,
                        o = _a = !0),
                        o)
                            for (n = Ni(t, null, r, n),
                            t.child = n; n; )
                                n.effectTag = -3 & n.effectTag | 1024,
                                n = n.sibling;
                        else
                            La(e, t, r, n),
                            Ia();
                        t = t.child
                    }
                    return t;
                case 5:
                    return Bi(t),
                    null === e && Oa(t),
                    r = t.type,
                    o = t.pendingProps,
                    i = null !== e ? e.memoizedProps : null,
                    l = o.children,
                    Tn(r, o) ? l = null : null !== i && Tn(r, i) && (t.effectTag |= 16),
                    ja(e, t),
                    4 & t.mode && 1 !== n && o.hidden ? (t.expirationTime = t.childExpirationTime = 1,
                    t = null) : (La(e, t, l, n),
                    t = t.child),
                    t;
                case 6:
                    return null === e && Oa(t),
                    null;
                case 13:
                    return Xa(e, t, n);
                case 4:
                    return Di(t, t.stateNode.containerInfo),
                    r = t.pendingProps,
                    null === e ? t.child = Oi(t, null, r, n) : La(e, t, r, n),
                    t.child;
                case 11:
                    return r = t.type,
                    o = t.pendingProps,
                    Da(e, t, r, o = t.elementType === r ? o : Jo(r, o), n);
                case 7:
                    return La(e, t, t.pendingProps, n),
                    t.child;
                case 8:
                case 12:
                    return La(e, t, t.pendingProps.children, n),
                    t.child;
                case 10:
                    e: {
                        r = t.type._context,
                        o = t.pendingProps,
                        l = t.memoizedProps,
                        i = o.value;
                        var u = t.type._context;
                        if (ho(ei, u._currentValue),
                        u._currentValue = i,
                        null !== l)
                            if (u = l.value,
                            0 == (i = Ur(u, i) ? 0 : 0 | ("function" == typeof r._calculateChangedBits ? r._calculateChangedBits(u, i) : 1073741823))) {
                                if (l.children === o.children && !yo.current) {
                                    t = Ja(e, t, n);
                                    break e
                                }
                            } else
                                for (null !== (u = t.child) && (u.return = t); null !== u; ) {
                                    var c = u.dependencies;
                                    if (null !== c) {
                                        l = u.child;
                                        for (var s = c.firstContext; null !== s; ) {
                                            if (s.context === r && 0 !== (s.observedBits & i)) {
                                                1 === u.tag && ((s = pi(n, null)).tag = 2,
                                                di(u, s)),
                                                u.expirationTime < n && (u.expirationTime = n),
                                                null !== (s = u.alternate) && s.expirationTime < n && (s.expirationTime = n),
                                                ai(u.return, n),
                                                c.expirationTime < n && (c.expirationTime = n);
                                                break
                                            }
                                            s = s.next
                                        }
                                    } else
                                        l = 10 === u.tag && u.type === t.type ? null : u.child;
                                    if (null !== l)
                                        l.return = u;
                                    else
                                        for (l = u; null !== l; ) {
                                            if (l === t) {
                                                l = null;
                                                break
                                            }
                                            if (null !== (u = l.sibling)) {
                                                u.return = l.return,
                                                l = u;
                                                break
                                            }
                                            l = l.return
                                        }
                                    u = l
                                }
                        La(e, t, o.children, n),
                        t = t.child
                    }
                    return t;
                case 9:
                    return o = t.type,
                    r = (i = t.pendingProps).children,
                    li(t, n),
                    r = r(o = ui(o, i.unstable_observedBits)),
                    t.effectTag |= 1,
                    La(e, t, r, n),
                    t.child;
                case 14:
                    return i = Jo(o = t.type, t.pendingProps),
                    Ha(e, t, o, i = Jo(o.type, i), r, n);
                case 15:
                    return Ba(e, t, t.type, t.pendingProps, r, n);
                case 17:
                    return r = t.type,
                    o = t.pendingProps,
                    o = t.elementType === r ? o : Jo(r, o),
                    null !== e && (e.alternate = null,
                    t.alternate = null,
                    t.effectTag |= 2),
                    t.tag = 1,
                    Eo(r) ? (e = !0,
                    ko(t)) : e = !1,
                    li(t, n),
                    Ti(t, r, o),
                    ki(t, r, o, n),
                    za(null, t, r, !0, e, n);
                case 19:
                    return Za(e, t, n)
                }
                throw Error(a(156, t.tag))
            }
            ;
            var Du = null
              , Hu = null;
            function Bu(e, t, n, r) {
                this.tag = e,
                this.key = n,
                this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
                this.index = 0,
                this.ref = null,
                this.pendingProps = t,
                this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
                this.mode = r,
                this.effectTag = 0,
                this.lastEffect = this.firstEffect = this.nextEffect = null,
                this.childExpirationTime = this.expirationTime = 0,
                this.alternate = null
            }
            function ju(e, t, n, r) {
                return new Bu(e,t,n,r)
            }
            function Fu(e) {
                return !(!(e = e.prototype) || !e.isReactComponent)
            }
            function Uu(e, t) {
                var n = e.alternate;
                return null === n ? ((n = ju(e.tag, t, e.key, e.mode)).elementType = e.elementType,
                n.type = e.type,
                n.stateNode = e.stateNode,
                n.alternate = e,
                e.alternate = n) : (n.pendingProps = t,
                n.effectTag = 0,
                n.nextEffect = null,
                n.firstEffect = null,
                n.lastEffect = null),
                n.childExpirationTime = e.childExpirationTime,
                n.expirationTime = e.expirationTime,
                n.child = e.child,
                n.memoizedProps = e.memoizedProps,
                n.memoizedState = e.memoizedState,
                n.updateQueue = e.updateQueue,
                t = e.dependencies,
                n.dependencies = null === t ? null : {
                    expirationTime: t.expirationTime,
                    firstContext: t.firstContext,
                    responders: t.responders
                },
                n.sibling = e.sibling,
                n.index = e.index,
                n.ref = e.ref,
                n
            }
            function zu(e, t, n, r, o, i) {
                var l = 2;
                if (r = e,
                "function" == typeof e)
                    Fu(e) && (l = 1);
                else if ("string" == typeof e)
                    l = 5;
                else
                    e: switch (e) {
                    case ne:
                        return Gu(n.children, o, i, t);
                    case le:
                        l = 8,
                        o |= 7;
                        break;
                    case re:
                        l = 8,
                        o |= 1;
                        break;
                    case oe:
                        return (e = ju(12, n, t, 8 | o)).elementType = oe,
                        e.type = oe,
                        e.expirationTime = i,
                        e;
                    case ce:
                        return (e = ju(13, n, t, o)).type = ce,
                        e.elementType = ce,
                        e.expirationTime = i,
                        e;
                    case se:
                        return (e = ju(19, n, t, o)).elementType = se,
                        e.expirationTime = i,
                        e;
                    default:
                        if ("object" == typeof e && null !== e)
                            switch (e.$$typeof) {
                            case ie:
                                l = 10;
                                break e;
                            case ae:
                                l = 9;
                                break e;
                            case ue:
                                l = 11;
                                break e;
                            case fe:
                                l = 14;
                                break e;
                            case pe:
                                l = 16,
                                r = null;
                                break e;
                            case de:
                                l = 22;
                                break e
                            }
                        throw Error(a(130, null == e ? e : typeof e, ""))
                    }
                return (t = ju(l, n, t, o)).elementType = e,
                t.type = r,
                t.expirationTime = i,
                t
            }
            function Gu(e, t, n, r) {
                return (e = ju(7, e, r, t)).expirationTime = n,
                e
            }
            function $u(e, t, n) {
                return (e = ju(6, e, null, t)).expirationTime = n,
                e
            }
            function Vu(e, t, n) {
                return (t = ju(4, null !== e.children ? e.children : [], e.key, t)).expirationTime = n,
                t.stateNode = {
                    containerInfo: e.containerInfo,
                    pendingChildren: null,
                    implementation: e.implementation
                },
                t
            }
            function Wu(e, t, n) {
                this.tag = t,
                this.current = null,
                this.containerInfo = e,
                this.pingCache = this.pendingChildren = null,
                this.finishedExpirationTime = 0,
                this.finishedWork = null,
                this.timeoutHandle = -1,
                this.pendingContext = this.context = null,
                this.hydrate = n,
                this.callbackNode = null,
                this.callbackPriority = 90,
                this.lastExpiredTime = this.lastPingedTime = this.nextKnownPendingLevel = this.lastSuspendedTime = this.firstSuspendedTime = this.firstPendingTime = 0
            }
            function Qu(e, t) {
                var n = e.firstSuspendedTime;
                return e = e.lastSuspendedTime,
                0 !== n && n >= t && e <= t
            }
            function Ku(e, t) {
                var n = e.firstSuspendedTime
                  , r = e.lastSuspendedTime;
                n < t && (e.firstSuspendedTime = t),
                (r > t || 0 === n) && (e.lastSuspendedTime = t),
                t <= e.lastPingedTime && (e.lastPingedTime = 0),
                t <= e.lastExpiredTime && (e.lastExpiredTime = 0)
            }
            function Xu(e, t) {
                t > e.firstPendingTime && (e.firstPendingTime = t);
                var n = e.firstSuspendedTime;
                0 !== n && (t >= n ? e.firstSuspendedTime = e.lastSuspendedTime = e.nextKnownPendingLevel = 0 : t >= e.lastSuspendedTime && (e.lastSuspendedTime = t + 1),
                t > e.nextKnownPendingLevel && (e.nextKnownPendingLevel = t))
            }
            function qu(e, t) {
                var n = e.lastExpiredTime;
                (0 === n || n > t) && (e.lastExpiredTime = t)
            }
            function Yu(e, t, n, r) {
                var o = t.current
                  , i = lu()
                  , l = yi.suspense;
                i = uu(i, o, l);
                e: if (n) {
                    t: {
                        if (Ze(n = n._reactInternalFiber) !== n || 1 !== n.tag)
                            throw Error(a(170));
                        var u = n;
                        do {
                            switch (u.tag) {
                            case 3:
                                u = u.stateNode.context;
                                break t;
                            case 1:
                                if (Eo(u.type)) {
                                    u = u.stateNode.__reactInternalMemoizedMergedChildContext;
                                    break t
                                }
                            }
                            u = u.return
                        } while (null !== u);
                        throw Error(a(171))
                    }
                    if (1 === n.tag) {
                        var c = n.type;
                        if (Eo(c)) {
                            n = So(n, c, u);
                            break e
                        }
                    }
                    n = u
                } else
                    n = mo;
                return null === t.context ? t.context = n : t.pendingContext = n,
                (t = pi(i, l)).payload = {
                    element: e
                },
                null !== (r = void 0 === r ? null : r) && (t.callback = r),
                di(o, t),
                cu(o, i),
                i
            }
            function Zu(e) {
                return (e = e.current).child ? (e.child.tag,
                e.child.stateNode) : null
            }
            function Ju(e, t) {
                null !== (e = e.memoizedState) && null !== e.dehydrated && e.retryTime < t && (e.retryTime = t)
            }
            function ec(e, t) {
                Ju(e, t),
                (e = e.alternate) && Ju(e, t)
            }
            function tc(e, t, n) {
                var r = new Wu(e,t,n = null != n && !0 === n.hydrate)
                  , o = ju(3, null, null, 2 === t ? 7 : 1 === t ? 3 : 0);
                r.current = o,
                o.stateNode = r,
                si(o),
                e[Nn] = r.current,
                n && 0 !== t && function(e, t) {
                    var n = Ye(t);
                    xt.forEach(function(e) {
                        dt(e, t, n)
                    }),
                    _t.forEach(function(e) {
                        dt(e, t, n)
                    })
                }(0, 9 === e.nodeType ? e : e.ownerDocument),
                this._internalRoot = r
            }
            function nc(e) {
                return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
            }
            function rc(e, t, n, r, o) {
                var i = n._reactRootContainer;
                if (i) {
                    var a = i._internalRoot;
                    if ("function" == typeof o) {
                        var l = o;
                        o = function() {
                            var e = Zu(a);
                            l.call(e)
                        }
                    }
                    Yu(t, a, e, o)
                } else {
                    if (i = n._reactRootContainer = function(e, t) {
                        if (t || (t = !(!(t = e ? 9 === e.nodeType ? e.documentElement : e.firstChild : null) || 1 !== t.nodeType || !t.hasAttribute("data-reactroot"))),
                        !t)
                            for (var n; n = e.lastChild; )
                                e.removeChild(n);
                        return new tc(e,0,t ? {
                            hydrate: !0
                        } : void 0)
                    }(n, r),
                    a = i._internalRoot,
                    "function" == typeof o) {
                        var u = o;
                        o = function() {
                            var e = Zu(a);
                            u.call(e)
                        }
                    }
                    gu(function() {
                        Yu(t, a, e, o)
                    })
                }
                return Zu(a)
            }
            function oc(e, t) {
                var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                if (!nc(t))
                    throw Error(a(200));
                return function(e, t, n) {
                    var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
                    return {
                        $$typeof: te,
                        key: null == r ? null : "" + r,
                        children: e,
                        containerInfo: t,
                        implementation: n
                    }
                }(e, t, null, n)
            }
            tc.prototype.render = function(e) {
                Yu(e, this._internalRoot, null, null)
            }
            ,
            tc.prototype.unmount = function() {
                var e = this._internalRoot
                  , t = e.containerInfo;
                Yu(null, e, null, function() {
                    t[Nn] = null
                })
            }
            ,
            ht = function(e) {
                if (13 === e.tag) {
                    var t = Zo(lu(), 150, 100);
                    cu(e, t),
                    ec(e, t)
                }
            }
            ,
            mt = function(e) {
                13 === e.tag && (cu(e, 3),
                ec(e, 3))
            }
            ,
            gt = function(e) {
                if (13 === e.tag) {
                    var t = lu();
                    cu(e, t = uu(t, e, null)),
                    ec(e, t)
                }
            }
            ,
            C = function(e, t, n) {
                switch (t) {
                case "input":
                    if (xe(e, n),
                    t = n.name,
                    "radio" === n.type && null != t) {
                        for (n = e; n.parentNode; )
                            n = n.parentNode;
                        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
                        t = 0; t < n.length; t++) {
                            var r = n[t];
                            if (r !== e && r.form === e.form) {
                                var o = Mn(r);
                                if (!o)
                                    throw Error(a(90));
                                we(r),
                                xe(r, o)
                            }
                        }
                    }
                    break;
                case "textarea":
                    Ie(e, n);
                    break;
                case "select":
                    null != (t = n.value) && Oe(e, !!n.multiple, t, !1)
                }
            }
            ,
            M = mu,
            L = function(e, t, n, r, o) {
                var i = Hl;
                Hl |= 4;
                try {
                    return Qo(98, e.bind(null, t, n, r, o))
                } finally {
                    (Hl = i) === Pl && qo()
                }
            }
            ,
            D = function() {
                (Hl & (1 | Ol | Nl)) === Pl && (function() {
                    if (null !== ru) {
                        var e = ru;
                        ru = null,
                        e.forEach(function(e, t) {
                            qu(t, e),
                            pu(t)
                        }),
                        qo()
                    }
                }(),
                Nu())
            }
            ,
            H = function(e, t) {
                var n = Hl;
                Hl |= 2;
                try {
                    return e(t)
                } finally {
                    (Hl = n) === Pl && qo()
                }
            }
            ;
            var ic = {
                Events: [In, Rn, Mn, _, S, Un, function(e) {
                    rt(e, Fn)
                }
                , I, R, qt, at, Nu, {
                    current: !1
                }]
            };
            !function(e) {
                var t = e.findFiberByHostInstance;
                !function(e) {
                    if ("undefined" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)
                        return !1;
                    var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
                    if (t.isDisabled || !t.supportsFiber)
                        return !0;
                    try {
                        var n = t.inject(e);
                        Du = function(e) {
                            try {
                                t.onCommitFiberRoot(n, e, void 0, !(64 & ~e.current.effectTag))
                            } catch (e) {}
                        }
                        ,
                        Hu = function(e) {
                            try {
                                t.onCommitFiberUnmount(n, e)
                            } catch (e) {}
                        }
                    } catch (e) {}
                }(o({}, e, {
                    overrideHookState: null,
                    overrideProps: null,
                    setSuspenseHandler: null,
                    scheduleUpdate: null,
                    currentDispatcherRef: q.ReactCurrentDispatcher,
                    findHostInstanceByFiber: function(e) {
                        return null === (e = tt(e)) ? null : e.stateNode
                    },
                    findFiberByHostInstance: function(e) {
                        return t ? t(e) : null
                    },
                    findHostInstancesForRefresh: null,
                    scheduleRefresh: null,
                    scheduleRoot: null,
                    setRefreshHandler: null,
                    getCurrentFiber: null
                }))
            }({
                findFiberByHostInstance: An,
                bundleType: 0,
                version: "16.14.0",
                rendererPackageName: "react-dom"
            }),
            t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ic,
            t.createPortal = oc,
            t.findDOMNode = function(e) {
                if (null == e)
                    return null;
                if (1 === e.nodeType)
                    return e;
                var t = e._reactInternalFiber;
                if (void 0 === t) {
                    if ("function" == typeof e.render)
                        throw Error(a(188));
                    throw Error(a(268, Object.keys(e)))
                }
                return null === (e = tt(t)) ? null : e.stateNode
            }
            ,
            t.flushSync = function(e, t) {
                if ((Hl & (Ol | Nl)) !== Pl)
                    throw Error(a(187));
                var n = Hl;
                Hl |= 1;
                try {
                    return Qo(99, e.bind(null, t))
                } finally {
                    Hl = n,
                    qo()
                }
            }
            ,
            t.hydrate = function(e, t, n) {
                if (!nc(t))
                    throw Error(a(200));
                return rc(null, e, t, !0, n)
            }
            ,
            t.render = function(e, t, n) {
                if (!nc(t))
                    throw Error(a(200));
                return rc(null, e, t, !1, n)
            }
            ,
            t.unmountComponentAtNode = function(e) {
                if (!nc(e))
                    throw Error(a(40));
                return !!e._reactRootContainer && (gu(function() {
                    rc(null, null, e, !1, function() {
                        e._reactRootContainer = null,
                        e[Nn] = null
                    })
                }),
                !0)
            }
            ,
            t.unstable_batchedUpdates = mu,
            t.unstable_createPortal = function(e, t) {
                return oc(e, t, 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null)
            }
            ,
            t.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
                if (!nc(n))
                    throw Error(a(200));
                if (null == e || void 0 === e._reactInternalFiber)
                    throw Error(a(38));
                return rc(e, t, n, !1, r)
            }
            ,
            t.version = "16.14.0"
        }
        ,
        556: (e, t, n) => {
            e.exports = n(694)()
        }
        ,
        601: e => {
            "use strict";
            e.exports = function(e) {
                return e[1]
            }
        }
        ,
        659: e => {
            "use strict";
            var t = {};
            e.exports = function(e, n) {
                var r = function(e) {
                    if (void 0 === t[e]) {
                        var n = document.querySelector(e);
                        if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement)
                            try {
                                n = n.contentDocument.head
                            } catch (e) {
                                n = null
                            }
                        t[e] = n
                    }
                    return t[e]
                }(e);
                if (!r)
                    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                r.appendChild(n)
            }
        }
        ,
        668: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => l
            });
            var r = n(601)
              , o = n.n(r)
              , i = n(314)
              , a = n.n(i)()(o());
            a.push([e.id, "#gap {\n    width: 100%;\n    background-color: transparent;\n}", ""]);
            const l = a
        }
        ,
        683: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => l
            });
            var r = n(601)
              , o = n.n(r)
              , i = n(314)
              , a = n.n(i)()(o());
            a.push([e.id, ".sectionLinks {\n    background: #80f41a28;\n    color: white;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    padding: 0.5rem 0;\n    margin: 0px;\n}", ""]);
            const l = a
        }
        ,
        685: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => l
            });
            var r = n(601)
              , o = n.n(r)
              , i = n(314)
              , a = n.n(i)()(o());
            a.push([e.id, ".section-info {\n    margin-top: 60px;\n    background: #9cfc47;\n    color: #fff;\n    padding: 100px 20px;\n    text-align: center;\n    font-size: 24px;\n    font-weight: bold;\n}\n\n.section-info h2{\n    margin-bottom: 20px;\n}\n\n.section-info a{\n    color: #fff;\n}\n\n.section-info button{\n    background: #fff;\n    color: var(--motion-primary);\n    font-weight: bold;\n    border: 3px solid #fff;\n    border-radius: 5px;\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n    font-size: 20px;\n    margin: 20px auto 0;\n}\n\n.section-info img{\n    background: #fff;\n    width: 50px;\n    height: 50px;\n}\n\n.section-info.dark-mode {\n    background: #68c714;\n}", ""]);
            const l = a
        }
        ,
        687: (e, t, n) => {
            var r = "__lodash_hash_undefined__"
              , o = 9007199254740991
              , i = /^\[object .+?Constructor\]$/
              , a = /^(?:0|[1-9]\d*)$/
              , l = "object" == typeof n.g && n.g && n.g.Object === Object && n.g
              , u = "object" == typeof self && self && self.Object === Object && self
              , c = l || u || Function("return this")();
            function s(e, t) {
                return !(!e || !e.length) && function(e, t) {
                    if (t != t)
                        return function(e, t) {
                            for (var n = e.length, r = -1; ++r < n; )
                                if (t(e[r], r, e))
                                    return r;
                            return -1
                        }(e, d);
                    for (var n = -1, r = e.length; ++n < r; )
                        if (e[n] === t)
                            return n;
                    return -1
                }(e, t) > -1
            }
            function f(e, t) {
                for (var n = -1, r = e ? e.length : 0, o = Array(r); ++n < r; )
                    o[n] = t(e[n], n, e);
                return o
            }
            function p(e, t) {
                for (var n = -1, r = t.length, o = e.length; ++n < r; )
                    e[o + n] = t[n];
                return e
            }
            function d(e) {
                return e != e
            }
            function h(e, t) {
                return e.has(t)
            }
            function m(e, t) {
                return function(n) {
                    return e(t(n))
                }
            }
            var g, y = Array.prototype, b = Function.prototype, v = Object.prototype, E = c["__core-js_shared__"], w = (g = /[^.]+$/.exec(E && E.keys && E.keys.IE_PROTO || "")) ? "Symbol(src)_1." + g : "", T = b.toString, S = v.hasOwnProperty, k = v.toString, x = RegExp("^" + T.call(S).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), _ = c.Symbol, P = m(Object.getPrototypeOf, Object), C = v.propertyIsEnumerable, O = y.splice, N = _ ? _.isConcatSpreadable : void 0, A = Object.getOwnPropertySymbols, I = Math.max, R = z(c, "Map"), M = z(Object, "create");
            function L(e) {
                var t = -1
                  , n = e ? e.length : 0;
                for (this.clear(); ++t < n; ) {
                    var r = e[t];
                    this.set(r[0], r[1])
                }
            }
            function D(e) {
                var t = -1
                  , n = e ? e.length : 0;
                for (this.clear(); ++t < n; ) {
                    var r = e[t];
                    this.set(r[0], r[1])
                }
            }
            function H(e) {
                var t = -1
                  , n = e ? e.length : 0;
                for (this.clear(); ++t < n; ) {
                    var r = e[t];
                    this.set(r[0], r[1])
                }
            }
            function B(e) {
                var t = -1
                  , n = e ? e.length : 0;
                for (this.__data__ = new H; ++t < n; )
                    this.add(e[t])
            }
            function j(e, t) {
                for (var n = e.length; n--; )
                    if (K(e[n][0], t))
                        return n;
                return -1
            }
            function F(e, t, n, r, o) {
                var i = -1
                  , a = e.length;
                for (n || (n = V),
                o || (o = []); ++i < a; ) {
                    var l = e[i];
                    t > 0 && n(l) ? t > 1 ? F(l, t - 1, n, r, o) : p(o, l) : r || (o[o.length] = l)
                }
                return o
            }
            function U(e, t) {
                var n, r, o = e.__data__;
                return ("string" == (r = typeof (n = t)) || "number" == r || "symbol" == r || "boolean" == r ? "__proto__" !== n : null === n) ? o["string" == typeof t ? "string" : "hash"] : o.map
            }
            function z(e, t) {
                var n = function(e, t) {
                    return null == e ? void 0 : e[t]
                }(e, t);
                return function(e) {
                    if (!J(e) || w && w in e)
                        return !1;
                    var t = Z(e) || function(e) {
                        var t = !1;
                        if (null != e && "function" != typeof e.toString)
                            try {
                                t = !!(e + "")
                            } catch (e) {}
                        return t
                    }(e) ? x : i;
                    return t.test(function(e) {
                        if (null != e) {
                            try {
                                return T.call(e)
                            } catch (e) {}
                            try {
                                return e + ""
                            } catch (e) {}
                        }
                        return ""
                    }(e))
                }(n) ? n : void 0
            }
            L.prototype.clear = function() {
                this.__data__ = M ? M(null) : {}
            }
            ,
            L.prototype.delete = function(e) {
                return this.has(e) && delete this.__data__[e]
            }
            ,
            L.prototype.get = function(e) {
                var t = this.__data__;
                if (M) {
                    var n = t[e];
                    return n === r ? void 0 : n
                }
                return S.call(t, e) ? t[e] : void 0
            }
            ,
            L.prototype.has = function(e) {
                var t = this.__data__;
                return M ? void 0 !== t[e] : S.call(t, e)
            }
            ,
            L.prototype.set = function(e, t) {
                return this.__data__[e] = M && void 0 === t ? r : t,
                this
            }
            ,
            D.prototype.clear = function() {
                this.__data__ = []
            }
            ,
            D.prototype.delete = function(e) {
                var t = this.__data__
                  , n = j(t, e);
                return !(n < 0 || (n == t.length - 1 ? t.pop() : O.call(t, n, 1),
                0))
            }
            ,
            D.prototype.get = function(e) {
                var t = this.__data__
                  , n = j(t, e);
                return n < 0 ? void 0 : t[n][1]
            }
            ,
            D.prototype.has = function(e) {
                return j(this.__data__, e) > -1
            }
            ,
            D.prototype.set = function(e, t) {
                var n = this.__data__
                  , r = j(n, e);
                return r < 0 ? n.push([e, t]) : n[r][1] = t,
                this
            }
            ,
            H.prototype.clear = function() {
                this.__data__ = {
                    hash: new L,
                    map: new (R || D),
                    string: new L
                }
            }
            ,
            H.prototype.delete = function(e) {
                return U(this, e).delete(e)
            }
            ,
            H.prototype.get = function(e) {
                return U(this, e).get(e)
            }
            ,
            H.prototype.has = function(e) {
                return U(this, e).has(e)
            }
            ,
            H.prototype.set = function(e, t) {
                return U(this, e).set(e, t),
                this
            }
            ,
            B.prototype.add = B.prototype.push = function(e) {
                return this.__data__.set(e, r),
                this
            }
            ,
            B.prototype.has = function(e) {
                return this.__data__.has(e)
            }
            ;
            var G = A ? m(A, Object) : ie
              , $ = A ? function(e) {
                for (var t = []; e; )
                    p(t, G(e)),
                    e = P(e);
                return t
            }
            : ie;
            function V(e) {
                return q(e) || X(e) || !!(N && e && e[N])
            }
            function W(e, t) {
                return !!(t = null == t ? o : t) && ("number" == typeof e || a.test(e)) && e > -1 && e % 1 == 0 && e < t
            }
            function Q(e) {
                if ("string" == typeof e || function(e) {
                    return "symbol" == typeof e || ee(e) && "[object Symbol]" == k.call(e)
                }(e))
                    return e;
                var t = e + "";
                return "0" == t && 1 / e == -1 / 0 ? "-0" : t
            }
            function K(e, t) {
                return e === t || e != e && t != t
            }
            function X(e) {
                return function(e) {
                    return ee(e) && Y(e)
                }(e) && S.call(e, "callee") && (!C.call(e, "callee") || "[object Arguments]" == k.call(e))
            }
            var q = Array.isArray;
            function Y(e) {
                return null != e && function(e) {
                    return "number" == typeof e && e > -1 && e % 1 == 0 && e <= o
                }(e.length) && !Z(e)
            }
            function Z(e) {
                var t = J(e) ? k.call(e) : "";
                return "[object Function]" == t || "[object GeneratorFunction]" == t
            }
            function J(e) {
                var t = typeof e;
                return !!e && ("object" == t || "function" == t)
            }
            function ee(e) {
                return !!e && "object" == typeof e
            }
            function te(e) {
                return Y(e) ? function(e, t) {
                    var n = q(e) || X(e) ? function(e, t) {
                        for (var n = -1, r = Array(e); ++n < e; )
                            r[n] = t(n);
                        return r
                    }(e.length, String) : []
                      , r = n.length
                      , o = !!r;
                    for (var i in e)
                        !t && !S.call(e, i) || o && ("length" == i || W(i, r)) || n.push(i);
                    return n
                }(e, !0) : function(e) {
                    if (!J(e))
                        return function(e) {
                            var t = [];
                            if (null != e)
                                for (var n in Object(e))
                                    t.push(n);
                            return t
                        }(e);
                    var t, n, r = (n = (t = e) && t.constructor,
                    t === ("function" == typeof n && n.prototype || v)), o = [];
                    for (var i in e)
                        ("constructor" != i || !r && S.call(e, i)) && o.push(i);
                    return o
                }(e)
            }
            var ne, re, oe = (ne = function(e, t) {
                return null == e ? {} : (t = f(F(t, 1), Q),
                function(e, t) {
                    return function(e, t, n) {
                        for (var r = -1, o = t.length, i = {}; ++r < o; ) {
                            var a = t[r]
                              , l = e[a];
                            n(0, a) && (i[a] = l)
                        }
                        return i
                    }(e = Object(e), t, function(t, n) {
                        return n in e
                    })
                }(e, function(e, t, n, r) {
                    var o = -1
                      , i = s
                      , a = !0
                      , l = e.length
                      , u = []
                      , c = t.length;
                    if (!l)
                        return u;
                    t.length >= 200 && (i = h,
                    a = !1,
                    t = new B(t));
                    e: for (; ++o < l; ) {
                        var f = e[o]
                          , p = f;
                        if (f = 0 !== f ? f : 0,
                        a && p == p) {
                            for (var d = c; d--; )
                                if (t[d] === p)
                                    continue e;
                            u.push(f)
                        } else
                            i(t, p, r) || u.push(f)
                    }
                    return u
                }(function(e) {
                    return function(e, t, n) {
                        var r = t(e);
                        return q(e) ? r : p(r, n(e))
                    }(e, te, $)
                }(e), t)))
            }
            ,
            re = I(void 0 === re ? ne.length - 1 : re, 0),
            function() {
                for (var e = arguments, t = -1, n = I(e.length - re, 0), r = Array(n); ++t < n; )
                    r[t] = e[re + t];
                t = -1;
                for (var o = Array(re + 1); ++t < re; )
                    o[t] = e[t];
                return o[re] = r,
                function(e, t, n) {
                    switch (n.length) {
                    case 0:
                        return e.call(t);
                    case 1:
                        return e.call(t, n[0]);
                    case 2:
                        return e.call(t, n[0], n[1]);
                    case 3:
                        return e.call(t, n[0], n[1], n[2])
                    }
                    return e.apply(t, n)
                }(ne, this, o)
            }
            );
            function ie() {
                return []
            }
            e.exports = oe
        }
        ,
        694: (e, t, n) => {
            "use strict";
            var r = n(925);
            function o() {}
            function i() {}
            i.resetWarningCache = o,
            e.exports = function() {
                function e(e, t, n, o, i, a) {
                    if (a !== r) {
                        var l = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        throw l.name = "Invariant Violation",
                        l
                    }
                }
                function t() {
                    return e
                }
                e.isRequired = e;
                var n = {
                    array: e,
                    bigint: e,
                    bool: e,
                    func: e,
                    number: e,
                    object: e,
                    string: e,
                    symbol: e,
                    any: e,
                    arrayOf: t,
                    element: e,
                    elementType: e,
                    instanceOf: t,
                    node: e,
                    objectOf: t,
                    oneOf: t,
                    oneOfType: t,
                    shape: t,
                    exact: t,
                    checkPropTypes: i,
                    resetWarningCache: o
                };
                return n.PropTypes = n,
                n
            }
        }
        ,
        741: () => {
            $(document).ready(function() {
                var e = document.documentElement;
                e.style.setProperty("--motion-primary", "#80F41A"),
                e.style.setProperty("--motion-primary-menu", "#68C516"),
                e.style.setProperty("--motion-primary-dark", "#7DD100")
            })
        }
        ,
        799: (e, t) => {
            "use strict";
            var n = "function" == typeof Symbol && Symbol.for
              , r = n ? Symbol.for("react.element") : 60103
              , o = n ? Symbol.for("react.portal") : 60106
              , i = n ? Symbol.for("react.fragment") : 60107
              , a = n ? Symbol.for("react.strict_mode") : 60108
              , l = n ? Symbol.for("react.profiler") : 60114
              , u = n ? Symbol.for("react.provider") : 60109
              , c = n ? Symbol.for("react.context") : 60110
              , s = n ? Symbol.for("react.async_mode") : 60111
              , f = n ? Symbol.for("react.concurrent_mode") : 60111
              , p = n ? Symbol.for("react.forward_ref") : 60112
              , d = n ? Symbol.for("react.suspense") : 60113
              , h = n ? Symbol.for("react.suspense_list") : 60120
              , m = n ? Symbol.for("react.memo") : 60115
              , g = n ? Symbol.for("react.lazy") : 60116
              , y = n ? Symbol.for("react.block") : 60121
              , b = n ? Symbol.for("react.fundamental") : 60117
              , v = n ? Symbol.for("react.responder") : 60118
              , E = n ? Symbol.for("react.scope") : 60119;
            function w(e) {
                if ("object" == typeof e && null !== e) {
                    var t = e.$$typeof;
                    switch (t) {
                    case r:
                        switch (e = e.type) {
                        case s:
                        case f:
                        case i:
                        case l:
                        case a:
                        case d:
                            return e;
                        default:
                            switch (e = e && e.$$typeof) {
                            case c:
                            case p:
                            case g:
                            case m:
                            case u:
                                return e;
                            default:
                                return t
                            }
                        }
                    case o:
                        return t
                    }
                }
            }
            function T(e) {
                return w(e) === f
            }
            t.AsyncMode = s,
            t.ConcurrentMode = f,
            t.ContextConsumer = c,
            t.ContextProvider = u,
            t.Element = r,
            t.ForwardRef = p,
            t.Fragment = i,
            t.Lazy = g,
            t.Memo = m,
            t.Portal = o,
            t.Profiler = l,
            t.StrictMode = a,
            t.Suspense = d,
            t.isAsyncMode = function(e) {
                return T(e) || w(e) === s
            }
            ,
            t.isConcurrentMode = T,
            t.isContextConsumer = function(e) {
                return w(e) === c
            }
            ,
            t.isContextProvider = function(e) {
                return w(e) === u
            }
            ,
            t.isElement = function(e) {
                return "object" == typeof e && null !== e && e.$$typeof === r
            }
            ,
            t.isForwardRef = function(e) {
                return w(e) === p
            }
            ,
            t.isFragment = function(e) {
                return w(e) === i
            }
            ,
            t.isLazy = function(e) {
                return w(e) === g
            }
            ,
            t.isMemo = function(e) {
                return w(e) === m
            }
            ,
            t.isPortal = function(e) {
                return w(e) === o
            }
            ,
            t.isProfiler = function(e) {
                return w(e) === l
            }
            ,
            t.isStrictMode = function(e) {
                return w(e) === a
            }
            ,
            t.isSuspense = function(e) {
                return w(e) === d
            }
            ,
            t.isValidElementType = function(e) {
                return "string" == typeof e || "function" == typeof e || e === i || e === f || e === l || e === a || e === d || e === h || "object" == typeof e && null !== e && (e.$$typeof === g || e.$$typeof === m || e.$$typeof === u || e.$$typeof === c || e.$$typeof === p || e.$$typeof === b || e.$$typeof === v || e.$$typeof === E || e.$$typeof === y)
            }
            ,
            t.typeOf = w
        }
        ,
        825: e => {
            "use strict";
            e.exports = function(e) {
                if ("undefined" == typeof document)
                    return {
                        update: function() {},
                        remove: function() {}
                    };
                var t = e.insertStyleElement(e);
                return {
                    update: function(n) {
                        !function(e, t, n) {
                            var r = "";
                            n.supports && (r += "@supports (".concat(n.supports, ") {")),
                            n.media && (r += "@media ".concat(n.media, " {"));
                            var o = void 0 !== n.layer;
                            o && (r += "@layer".concat(n.layer.length > 0 ? " ".concat(n.layer) : "", " {")),
                            r += n.css,
                            o && (r += "}"),
                            n.media && (r += "}"),
                            n.supports && (r += "}");
                            var i = n.sourceMap;
                            i && "undefined" != typeof btoa && (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i)))), " */")),
                            t.styleTagTransform(r, e, t.options)
                        }(t, e, n)
                    },
                    remove: function() {
                        !function(e) {
                            if (null === e.parentNode)
                                return !1;
                            e.parentNode.removeChild(e)
                        }(t)
                    }
                }
            }
        }
        ,
        844: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => l
            });
            var r = n(601)
              , o = n.n(r)
              , i = n(314)
              , a = n.n(i)()(o());
            a.push([e.id, ".sectionInfoButton {\n    margin: 0.25rem;\n    padding: 1rem 1rem;\n    font-weight: 600;\n    font-size: 1.1rem;\n    border: 0px;\n    border-radius: 4px;\n    outline-width: 2px;\n    outline-style: solid;\n    outline-color: rgba(146, 239, 24, 0.35);\n    color: white;\n    background-color: #80f41a;\n    cursor: pointer;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n}\n.sectionInfoButton:hover {\n    background-color: #8ef335;\n}\n.sectionInfoButton:focus {\n    background-color: #8ef335;\n    outline-width: 4px;\n}\n.sectionInfoButtonHighlight {\n    outline: 0px;\n    background-color: white;\n    color: #80f41a;\n}\n.sectionInfoButtonToggled {\n    background-color: transparent !important;\n    outline-color: rgba(0, 0, 0, 0.1) !important;\n    border: 1px solid rgba(0, 0, 0, 0.35);\n    color: black;\n    font-weight: normal;\n}\n:global(body.dark-mode) .sectionInfoButtonToggled {\n    outline-color: rgba(255, 255, 255, 0.1) !important;\n    border: 1px solid rgba(255, 255, 255, 0.35);\n    color: white;\n}", ""]);
            const l = a
        }
        ,
        895: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => l
            });
            var r = n(601)
              , o = n.n(r)
              , i = n(314)
              , a = n.n(i)()(o());
            a.push([e.id, ".footer {\n    background-color: rgb(225, 255, 225);\n    color: black;\n    text-align: center;\n    padding: 20px;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    flex-wrap: wrap;\n}\n\n.footer.dark-mode {\n    background-color: #333333;\n    color: white;\n}\n\n.footer-row {\n    margin-bottom: 10px;\n    width: 100%; /* Each row takes the full width */\n    flex: 0 0 30%; /* Adjust the width of each footer-row */\n}\n\n.footer-row a {\n    color: var(--motion-primary);\n    text-decoration: underline;\n    display: block;\n    margin-bottom: 5px;\n}\n\n.footer-row a.dark-mode {\n    color: var(--motion-primary-dark);\n    text-decoration: underline;\n    display: block;\n    margin-bottom: 5px;\n}", ""]);
            const l = a
        }
        ,
        925: e => {
            "use strict";
            e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
        }
        ,
        961: (e, t, n) => {
            "use strict";
            !function e() {
                if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)
                    try {
                        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
                    } catch (e) {
                        console.error(e)
                    }
            }(),
            e.exports = n(551)
        }
        ,
        982: (e, t, n) => {
            "use strict";
            e.exports = n(463)
        }
    }
      , t = {};
    function n(r) {
        var o = t[r];
        if (void 0 !== o)
            return o.exports;
        var i = t[r] = {
            id: r,
            exports: {}
        };
        return e[r](i, i.exports, n),
        i.exports
    }
    n.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return n.d(t, {
            a: t
        }),
        t
    }
    ,
    n.d = (e, t) => {
        for (var r in t)
            n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
                enumerable: !0,
                get: t[r]
            })
    }
    ,
    n.g = function() {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window)
                return window
        }
    }(),
    n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t),
    n.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    ( () => {
        var e;
        n.g.importScripts && (e = n.g.location + "");
        var t = n.g.document;
        if (!e && t && (t.currentScript && "SCRIPT" === t.currentScript.tagName.toUpperCase() && (e = t.currentScript.src),
        !e)) {
            var r = t.getElementsByTagName("script");
            if (r.length)
                for (var o = r.length - 1; o > -1 && (!e || !/^http(s?):/.test(e)); )
                    e = r[o--].src
        }
        if (!e)
            throw new Error("Automatic publicPath is not supported in this browser");
        e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"),
        n.p = e
    }
    )(),
    n.nc = void 0,
    ( () => {
        "use strict";
        var e = {};
        n.r(e),
        n.d(e, {
            YK: () => un
        });
        var t = n(540)
          , r = n(961)
          , o = function(e, t) {
            return o = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
            }
            ,
            o(e, t)
        };
        function i(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
            function n() {
                this.constructor = e
            }
            o(e, t),
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
            new n)
        }
        var a = function() {
            return a = Object.assign || function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var o in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }
            ,
            a.apply(this, arguments)
        };
        function l(e, t) {
            var n = {};
            for (var r in e)
                Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
                    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
            }
            return n
        }
        function u(e, t, n) {
            if (n || 2 === arguments.length)
                for (var r, o = 0, i = t.length; o < i; o++)
                    !r && o in t || (r || (r = Array.prototype.slice.call(t, 0, o)),
                    r[o] = t[o]);
            return e.concat(r || Array.prototype.slice.call(t))
        }
        function c(e, t) {
            var n = t && t.cache ? t.cache : E
              , r = t && t.serializer ? t.serializer : b;
            return (t && t.strategy ? t.strategy : d)(e, {
                cache: n,
                serializer: r
            })
        }
        function s(e, t, n, r) {
            var o, i = null == (o = r) || "number" == typeof o || "boolean" == typeof o ? r : n(r), a = t.get(i);
            return void 0 === a && (a = e.call(this, r),
            t.set(i, a)),
            a
        }
        function f(e, t, n) {
            var r = Array.prototype.slice.call(arguments, 3)
              , o = n(r)
              , i = t.get(o);
            return void 0 === i && (i = e.apply(this, r),
            t.set(o, i)),
            i
        }
        function p(e, t, n, r, o) {
            return n.bind(t, e, r, o)
        }
        function d(e, t) {
            return p(e, this, 1 === e.length ? s : f, t.cache.create(), t.serializer)
        }
        Object.create,
        Object.create,
        "function" == typeof SuppressedError && SuppressedError;
        var h, m, g, y, b = function() {
            return JSON.stringify(arguments)
        }, v = function() {
            function e() {
                this.cache = Object.create(null)
            }
            return e.prototype.get = function(e) {
                return this.cache[e]
            }
            ,
            e.prototype.set = function(e, t) {
                this.cache[e] = t
            }
            ,
            e
        }(), E = {
            create: function() {
                return new v
            }
        }, w = {
            variadic: function(e, t) {
                return p(e, this, f, t.cache.create(), t.serializer)
            },
            monadic: function(e, t) {
                return p(e, this, s, t.cache.create(), t.serializer)
            }
        };
        function T(e) {
            return e.type === m.literal
        }
        function S(e) {
            return e.type === m.argument
        }
        function k(e) {
            return e.type === m.number
        }
        function x(e) {
            return e.type === m.date
        }
        function _(e) {
            return e.type === m.time
        }
        function P(e) {
            return e.type === m.select
        }
        function C(e) {
            return e.type === m.plural
        }
        function O(e) {
            return e.type === m.pound
        }
        function N(e) {
            return e.type === m.tag
        }
        function A(e) {
            return !(!e || "object" != typeof e || e.type !== g.number)
        }
        function I(e) {
            return !(!e || "object" != typeof e || e.type !== g.dateTime)
        }
        !function(e) {
            e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE",
            e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT",
            e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT",
            e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE",
            e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE",
            e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE",
            e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON",
            e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON",
            e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON",
            e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON",
            e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",
            e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS",
            e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",
            e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",
            e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR",
            e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR",
            e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",
            e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",
            e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR",
            e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR",
            e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR",
            e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE",
            e[e.INVALID_TAG = 23] = "INVALID_TAG",
            e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME",
            e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG",
            e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG"
        }(h || (h = {})),
        (y = m || (m = {}))[y.literal = 0] = "literal",
        y[y.argument = 1] = "argument",
        y[y.number = 2] = "number",
        y[y.date = 3] = "date",
        y[y.time = 4] = "time",
        y[y.select = 5] = "select",
        y[y.plural = 6] = "plural",
        y[y.pound = 7] = "pound",
        y[y.tag = 8] = "tag",
        function(e) {
            e[e.number = 0] = "number",
            e[e.dateTime = 1] = "dateTime"
        }(g || (g = {}));
        var R = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/
          , M = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
        function L(e) {
            var t = {};
            return e.replace(M, function(e) {
                var n = e.length;
                switch (e[0]) {
                case "G":
                    t.era = 4 === n ? "long" : 5 === n ? "narrow" : "short";
                    break;
                case "y":
                    t.year = 2 === n ? "2-digit" : "numeric";
                    break;
                case "Y":
                case "u":
                case "U":
                case "r":
                    throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
                case "q":
                case "Q":
                    throw new RangeError("`q/Q` (quarter) patterns are not supported");
                case "M":
                case "L":
                    t.month = ["numeric", "2-digit", "short", "long", "narrow"][n - 1];
                    break;
                case "w":
                case "W":
                    throw new RangeError("`w/W` (week) patterns are not supported");
                case "d":
                    t.day = ["numeric", "2-digit"][n - 1];
                    break;
                case "D":
                case "F":
                case "g":
                    throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
                case "E":
                    t.weekday = 4 === n ? "long" : 5 === n ? "narrow" : "short";
                    break;
                case "e":
                    if (n < 4)
                        throw new RangeError("`e..eee` (weekday) patterns are not supported");
                    t.weekday = ["short", "long", "narrow", "short"][n - 4];
                    break;
                case "c":
                    if (n < 4)
                        throw new RangeError("`c..ccc` (weekday) patterns are not supported");
                    t.weekday = ["short", "long", "narrow", "short"][n - 4];
                    break;
                case "a":
                    t.hour12 = !0;
                    break;
                case "b":
                case "B":
                    throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
                case "h":
                    t.hourCycle = "h12",
                    t.hour = ["numeric", "2-digit"][n - 1];
                    break;
                case "H":
                    t.hourCycle = "h23",
                    t.hour = ["numeric", "2-digit"][n - 1];
                    break;
                case "K":
                    t.hourCycle = "h11",
                    t.hour = ["numeric", "2-digit"][n - 1];
                    break;
                case "k":
                    t.hourCycle = "h24",
                    t.hour = ["numeric", "2-digit"][n - 1];
                    break;
                case "j":
                case "J":
                case "C":
                    throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
                case "m":
                    t.minute = ["numeric", "2-digit"][n - 1];
                    break;
                case "s":
                    t.second = ["numeric", "2-digit"][n - 1];
                    break;
                case "S":
                case "A":
                    throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
                case "z":
                    t.timeZoneName = n < 4 ? "short" : "long";
                    break;
                case "Z":
                case "O":
                case "v":
                case "V":
                case "X":
                case "x":
                    throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")
                }
                return ""
            }),
            t
        }
        var D = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
        function H(e) {
            return e.replace(/^(.*?)-/, "")
        }
        var B = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g
          , j = /^(@+)?(\+|#+)?[rs]?$/g
          , F = /(\*)(0+)|(#+)(0+)|(0+)/g
          , U = /^(0+)$/;
        function z(e) {
            var t = {};
            return "r" === e[e.length - 1] ? t.roundingPriority = "morePrecision" : "s" === e[e.length - 1] && (t.roundingPriority = "lessPrecision"),
            e.replace(j, function(e, n, r) {
                return "string" != typeof r ? (t.minimumSignificantDigits = n.length,
                t.maximumSignificantDigits = n.length) : "+" === r ? t.minimumSignificantDigits = n.length : "#" === n[0] ? t.maximumSignificantDigits = n.length : (t.minimumSignificantDigits = n.length,
                t.maximumSignificantDigits = n.length + ("string" == typeof r ? r.length : 0)),
                ""
            }),
            t
        }
        function G(e) {
            switch (e) {
            case "sign-auto":
                return {
                    signDisplay: "auto"
                };
            case "sign-accounting":
            case "()":
                return {
                    currencySign: "accounting"
                };
            case "sign-always":
            case "+!":
                return {
                    signDisplay: "always"
                };
            case "sign-accounting-always":
            case "()!":
                return {
                    signDisplay: "always",
                    currencySign: "accounting"
                };
            case "sign-except-zero":
            case "+?":
                return {
                    signDisplay: "exceptZero"
                };
            case "sign-accounting-except-zero":
            case "()?":
                return {
                    signDisplay: "exceptZero",
                    currencySign: "accounting"
                };
            case "sign-never":
            case "+_":
                return {
                    signDisplay: "never"
                }
            }
        }
        function $(e) {
            var t;
            if ("E" === e[0] && "E" === e[1] ? (t = {
                notation: "engineering"
            },
            e = e.slice(2)) : "E" === e[0] && (t = {
                notation: "scientific"
            },
            e = e.slice(1)),
            t) {
                var n = e.slice(0, 2);
                if ("+!" === n ? (t.signDisplay = "always",
                e = e.slice(2)) : "+?" === n && (t.signDisplay = "exceptZero",
                e = e.slice(2)),
                !U.test(e))
                    throw new Error("Malformed concise eng/scientific notation");
                t.minimumIntegerDigits = e.length
            }
            return t
        }
        function V(e) {
            return G(e) || {}
        }
        function W(e) {
            for (var t = {}, n = 0, r = e; n < r.length; n++) {
                var o = r[n];
                switch (o.stem) {
                case "percent":
                case "%":
                    t.style = "percent";
                    continue;
                case "%x100":
                    t.style = "percent",
                    t.scale = 100;
                    continue;
                case "currency":
                    t.style = "currency",
                    t.currency = o.options[0];
                    continue;
                case "group-off":
                case ",_":
                    t.useGrouping = !1;
                    continue;
                case "precision-integer":
                case ".":
                    t.maximumFractionDigits = 0;
                    continue;
                case "measure-unit":
                case "unit":
                    t.style = "unit",
                    t.unit = H(o.options[0]);
                    continue;
                case "compact-short":
                case "K":
                    t.notation = "compact",
                    t.compactDisplay = "short";
                    continue;
                case "compact-long":
                case "KK":
                    t.notation = "compact",
                    t.compactDisplay = "long";
                    continue;
                case "scientific":
                    t = a(a(a({}, t), {
                        notation: "scientific"
                    }), o.options.reduce(function(e, t) {
                        return a(a({}, e), V(t))
                    }, {}));
                    continue;
                case "engineering":
                    t = a(a(a({}, t), {
                        notation: "engineering"
                    }), o.options.reduce(function(e, t) {
                        return a(a({}, e), V(t))
                    }, {}));
                    continue;
                case "notation-simple":
                    t.notation = "standard";
                    continue;
                case "unit-width-narrow":
                    t.currencyDisplay = "narrowSymbol",
                    t.unitDisplay = "narrow";
                    continue;
                case "unit-width-short":
                    t.currencyDisplay = "code",
                    t.unitDisplay = "short";
                    continue;
                case "unit-width-full-name":
                    t.currencyDisplay = "name",
                    t.unitDisplay = "long";
                    continue;
                case "unit-width-iso-code":
                    t.currencyDisplay = "symbol";
                    continue;
                case "scale":
                    t.scale = parseFloat(o.options[0]);
                    continue;
                case "rounding-mode-floor":
                    t.roundingMode = "floor";
                    continue;
                case "rounding-mode-ceiling":
                    t.roundingMode = "ceil";
                    continue;
                case "rounding-mode-down":
                    t.roundingMode = "trunc";
                    continue;
                case "rounding-mode-up":
                    t.roundingMode = "expand";
                    continue;
                case "rounding-mode-half-even":
                    t.roundingMode = "halfEven";
                    continue;
                case "rounding-mode-half-down":
                    t.roundingMode = "halfTrunc";
                    continue;
                case "rounding-mode-half-up":
                    t.roundingMode = "halfExpand";
                    continue;
                case "integer-width":
                    if (o.options.length > 1)
                        throw new RangeError("integer-width stems only accept a single optional option");
                    o.options[0].replace(F, function(e, n, r, o, i, a) {
                        if (n)
                            t.minimumIntegerDigits = r.length;
                        else {
                            if (o && i)
                                throw new Error("We currently do not support maximum integer digits");
                            if (a)
                                throw new Error("We currently do not support exact integer digits")
                        }
                        return ""
                    });
                    continue
                }
                if (U.test(o.stem))
                    t.minimumIntegerDigits = o.stem.length;
                else if (B.test(o.stem)) {
                    if (o.options.length > 1)
                        throw new RangeError("Fraction-precision stems only accept a single optional option");
                    o.stem.replace(B, function(e, n, r, o, i, a) {
                        return "*" === r ? t.minimumFractionDigits = n.length : o && "#" === o[0] ? t.maximumFractionDigits = o.length : i && a ? (t.minimumFractionDigits = i.length,
                        t.maximumFractionDigits = i.length + a.length) : (t.minimumFractionDigits = n.length,
                        t.maximumFractionDigits = n.length),
                        ""
                    });
                    var i = o.options[0];
                    "w" === i ? t = a(a({}, t), {
                        trailingZeroDisplay: "stripIfInteger"
                    }) : i && (t = a(a({}, t), z(i)))
                } else if (j.test(o.stem))
                    t = a(a({}, t), z(o.stem));
                else {
                    var l = G(o.stem);
                    l && (t = a(a({}, t), l));
                    var u = $(o.stem);
                    u && (t = a(a({}, t), u))
                }
            }
            return t
        }
        var Q, K = {
            "001": ["H", "h"],
            419: ["h", "H", "hB", "hb"],
            AC: ["H", "h", "hb", "hB"],
            AD: ["H", "hB"],
            AE: ["h", "hB", "hb", "H"],
            AF: ["H", "hb", "hB", "h"],
            AG: ["h", "hb", "H", "hB"],
            AI: ["H", "h", "hb", "hB"],
            AL: ["h", "H", "hB"],
            AM: ["H", "hB"],
            AO: ["H", "hB"],
            AR: ["h", "H", "hB", "hb"],
            AS: ["h", "H"],
            AT: ["H", "hB"],
            AU: ["h", "hb", "H", "hB"],
            AW: ["H", "hB"],
            AX: ["H"],
            AZ: ["H", "hB", "h"],
            BA: ["H", "hB", "h"],
            BB: ["h", "hb", "H", "hB"],
            BD: ["h", "hB", "H"],
            BE: ["H", "hB"],
            BF: ["H", "hB"],
            BG: ["H", "hB", "h"],
            BH: ["h", "hB", "hb", "H"],
            BI: ["H", "h"],
            BJ: ["H", "hB"],
            BL: ["H", "hB"],
            BM: ["h", "hb", "H", "hB"],
            BN: ["hb", "hB", "h", "H"],
            BO: ["h", "H", "hB", "hb"],
            BQ: ["H"],
            BR: ["H", "hB"],
            BS: ["h", "hb", "H", "hB"],
            BT: ["h", "H"],
            BW: ["H", "h", "hb", "hB"],
            BY: ["H", "h"],
            BZ: ["H", "h", "hb", "hB"],
            CA: ["h", "hb", "H", "hB"],
            CC: ["H", "h", "hb", "hB"],
            CD: ["hB", "H"],
            CF: ["H", "h", "hB"],
            CG: ["H", "hB"],
            CH: ["H", "hB", "h"],
            CI: ["H", "hB"],
            CK: ["H", "h", "hb", "hB"],
            CL: ["h", "H", "hB", "hb"],
            CM: ["H", "h", "hB"],
            CN: ["H", "hB", "hb", "h"],
            CO: ["h", "H", "hB", "hb"],
            CP: ["H"],
            CR: ["h", "H", "hB", "hb"],
            CU: ["h", "H", "hB", "hb"],
            CV: ["H", "hB"],
            CW: ["H", "hB"],
            CX: ["H", "h", "hb", "hB"],
            CY: ["h", "H", "hb", "hB"],
            CZ: ["H"],
            DE: ["H", "hB"],
            DG: ["H", "h", "hb", "hB"],
            DJ: ["h", "H"],
            DK: ["H"],
            DM: ["h", "hb", "H", "hB"],
            DO: ["h", "H", "hB", "hb"],
            DZ: ["h", "hB", "hb", "H"],
            EA: ["H", "h", "hB", "hb"],
            EC: ["h", "H", "hB", "hb"],
            EE: ["H", "hB"],
            EG: ["h", "hB", "hb", "H"],
            EH: ["h", "hB", "hb", "H"],
            ER: ["h", "H"],
            ES: ["H", "hB", "h", "hb"],
            ET: ["hB", "hb", "h", "H"],
            FI: ["H"],
            FJ: ["h", "hb", "H", "hB"],
            FK: ["H", "h", "hb", "hB"],
            FM: ["h", "hb", "H", "hB"],
            FO: ["H", "h"],
            FR: ["H", "hB"],
            GA: ["H", "hB"],
            GB: ["H", "h", "hb", "hB"],
            GD: ["h", "hb", "H", "hB"],
            GE: ["H", "hB", "h"],
            GF: ["H", "hB"],
            GG: ["H", "h", "hb", "hB"],
            GH: ["h", "H"],
            GI: ["H", "h", "hb", "hB"],
            GL: ["H", "h"],
            GM: ["h", "hb", "H", "hB"],
            GN: ["H", "hB"],
            GP: ["H", "hB"],
            GQ: ["H", "hB", "h", "hb"],
            GR: ["h", "H", "hb", "hB"],
            GT: ["h", "H", "hB", "hb"],
            GU: ["h", "hb", "H", "hB"],
            GW: ["H", "hB"],
            GY: ["h", "hb", "H", "hB"],
            HK: ["h", "hB", "hb", "H"],
            HN: ["h", "H", "hB", "hb"],
            HR: ["H", "hB"],
            HU: ["H", "h"],
            IC: ["H", "h", "hB", "hb"],
            ID: ["H"],
            IE: ["H", "h", "hb", "hB"],
            IL: ["H", "hB"],
            IM: ["H", "h", "hb", "hB"],
            IN: ["h", "H"],
            IO: ["H", "h", "hb", "hB"],
            IQ: ["h", "hB", "hb", "H"],
            IR: ["hB", "H"],
            IS: ["H"],
            IT: ["H", "hB"],
            JE: ["H", "h", "hb", "hB"],
            JM: ["h", "hb", "H", "hB"],
            JO: ["h", "hB", "hb", "H"],
            JP: ["H", "K", "h"],
            KE: ["hB", "hb", "H", "h"],
            KG: ["H", "h", "hB", "hb"],
            KH: ["hB", "h", "H", "hb"],
            KI: ["h", "hb", "H", "hB"],
            KM: ["H", "h", "hB", "hb"],
            KN: ["h", "hb", "H", "hB"],
            KP: ["h", "H", "hB", "hb"],
            KR: ["h", "H", "hB", "hb"],
            KW: ["h", "hB", "hb", "H"],
            KY: ["h", "hb", "H", "hB"],
            KZ: ["H", "hB"],
            LA: ["H", "hb", "hB", "h"],
            LB: ["h", "hB", "hb", "H"],
            LC: ["h", "hb", "H", "hB"],
            LI: ["H", "hB", "h"],
            LK: ["H", "h", "hB", "hb"],
            LR: ["h", "hb", "H", "hB"],
            LS: ["h", "H"],
            LT: ["H", "h", "hb", "hB"],
            LU: ["H", "h", "hB"],
            LV: ["H", "hB", "hb", "h"],
            LY: ["h", "hB", "hb", "H"],
            MA: ["H", "h", "hB", "hb"],
            MC: ["H", "hB"],
            MD: ["H", "hB"],
            ME: ["H", "hB", "h"],
            MF: ["H", "hB"],
            MG: ["H", "h"],
            MH: ["h", "hb", "H", "hB"],
            MK: ["H", "h", "hb", "hB"],
            ML: ["H"],
            MM: ["hB", "hb", "H", "h"],
            MN: ["H", "h", "hb", "hB"],
            MO: ["h", "hB", "hb", "H"],
            MP: ["h", "hb", "H", "hB"],
            MQ: ["H", "hB"],
            MR: ["h", "hB", "hb", "H"],
            MS: ["H", "h", "hb", "hB"],
            MT: ["H", "h"],
            MU: ["H", "h"],
            MV: ["H", "h"],
            MW: ["h", "hb", "H", "hB"],
            MX: ["h", "H", "hB", "hb"],
            MY: ["hb", "hB", "h", "H"],
            MZ: ["H", "hB"],
            NA: ["h", "H", "hB", "hb"],
            NC: ["H", "hB"],
            NE: ["H"],
            NF: ["H", "h", "hb", "hB"],
            NG: ["H", "h", "hb", "hB"],
            NI: ["h", "H", "hB", "hb"],
            NL: ["H", "hB"],
            NO: ["H", "h"],
            NP: ["H", "h", "hB"],
            NR: ["H", "h", "hb", "hB"],
            NU: ["H", "h", "hb", "hB"],
            NZ: ["h", "hb", "H", "hB"],
            OM: ["h", "hB", "hb", "H"],
            PA: ["h", "H", "hB", "hb"],
            PE: ["h", "H", "hB", "hb"],
            PF: ["H", "h", "hB"],
            PG: ["h", "H"],
            PH: ["h", "hB", "hb", "H"],
            PK: ["h", "hB", "H"],
            PL: ["H", "h"],
            PM: ["H", "hB"],
            PN: ["H", "h", "hb", "hB"],
            PR: ["h", "H", "hB", "hb"],
            PS: ["h", "hB", "hb", "H"],
            PT: ["H", "hB"],
            PW: ["h", "H"],
            PY: ["h", "H", "hB", "hb"],
            QA: ["h", "hB", "hb", "H"],
            RE: ["H", "hB"],
            RO: ["H", "hB"],
            RS: ["H", "hB", "h"],
            RU: ["H"],
            RW: ["H", "h"],
            SA: ["h", "hB", "hb", "H"],
            SB: ["h", "hb", "H", "hB"],
            SC: ["H", "h", "hB"],
            SD: ["h", "hB", "hb", "H"],
            SE: ["H"],
            SG: ["h", "hb", "H", "hB"],
            SH: ["H", "h", "hb", "hB"],
            SI: ["H", "hB"],
            SJ: ["H"],
            SK: ["H"],
            SL: ["h", "hb", "H", "hB"],
            SM: ["H", "h", "hB"],
            SN: ["H", "h", "hB"],
            SO: ["h", "H"],
            SR: ["H", "hB"],
            SS: ["h", "hb", "H", "hB"],
            ST: ["H", "hB"],
            SV: ["h", "H", "hB", "hb"],
            SX: ["H", "h", "hb", "hB"],
            SY: ["h", "hB", "hb", "H"],
            SZ: ["h", "hb", "H", "hB"],
            TA: ["H", "h", "hb", "hB"],
            TC: ["h", "hb", "H", "hB"],
            TD: ["h", "H", "hB"],
            TF: ["H", "h", "hB"],
            TG: ["H", "hB"],
            TH: ["H", "h"],
            TJ: ["H", "h"],
            TL: ["H", "hB", "hb", "h"],
            TM: ["H", "h"],
            TN: ["h", "hB", "hb", "H"],
            TO: ["h", "H"],
            TR: ["H", "hB"],
            TT: ["h", "hb", "H", "hB"],
            TW: ["hB", "hb", "h", "H"],
            TZ: ["hB", "hb", "H", "h"],
            UA: ["H", "hB", "h"],
            UG: ["hB", "hb", "H", "h"],
            UM: ["h", "hb", "H", "hB"],
            US: ["h", "hb", "H", "hB"],
            UY: ["h", "H", "hB", "hb"],
            UZ: ["H", "hB", "h"],
            VA: ["H", "h", "hB"],
            VC: ["h", "hb", "H", "hB"],
            VE: ["h", "H", "hB", "hb"],
            VG: ["h", "hb", "H", "hB"],
            VI: ["h", "hb", "H", "hB"],
            VN: ["H", "h"],
            VU: ["h", "H"],
            WF: ["H", "hB"],
            WS: ["h", "H"],
            XK: ["H", "hB", "h"],
            YE: ["h", "hB", "hb", "H"],
            YT: ["H", "hB"],
            ZA: ["H", "h", "hb", "hB"],
            ZM: ["h", "hb", "H", "hB"],
            ZW: ["H", "h"],
            "af-ZA": ["H", "h", "hB", "hb"],
            "ar-001": ["h", "hB", "hb", "H"],
            "ca-ES": ["H", "h", "hB"],
            "en-001": ["h", "hb", "H", "hB"],
            "en-HK": ["h", "hb", "H", "hB"],
            "en-IL": ["H", "h", "hb", "hB"],
            "en-MY": ["h", "hb", "H", "hB"],
            "es-BR": ["H", "h", "hB", "hb"],
            "es-ES": ["H", "h", "hB", "hb"],
            "es-GQ": ["H", "h", "hB", "hb"],
            "fr-CA": ["H", "h", "hB"],
            "gl-ES": ["H", "h", "hB"],
            "gu-IN": ["hB", "hb", "h", "H"],
            "hi-IN": ["hB", "h", "H"],
            "it-CH": ["H", "h", "hB"],
            "it-IT": ["H", "h", "hB"],
            "kn-IN": ["hB", "h", "H"],
            "ml-IN": ["hB", "h", "H"],
            "mr-IN": ["hB", "hb", "h", "H"],
            "pa-IN": ["hB", "hb", "h", "H"],
            "ta-IN": ["hB", "h", "hb", "H"],
            "te-IN": ["hB", "h", "H"],
            "zu-ZA": ["H", "hB", "hb", "h"]
        };
        function X(e) {
            var t = e.hourCycle;
            if (void 0 === t && e.hourCycles && e.hourCycles.length && (t = e.hourCycles[0]),
            t)
                switch (t) {
                case "h24":
                    return "k";
                case "h23":
                    return "H";
                case "h12":
                    return "h";
                case "h11":
                    return "K";
                default:
                    throw new Error("Invalid hourCycle")
                }
            var n, r = e.language;
            return "root" !== r && (n = e.maximize().region),
            (K[n || ""] || K[r || ""] || K["".concat(r, "-001")] || K["001"])[0]
        }
        var q = new RegExp("^".concat(R.source, "*"))
          , Y = new RegExp("".concat(R.source, "*$"));
        function Z(e, t) {
            return {
                start: e,
                end: t
            }
        }
        var J = !!String.prototype.startsWith && "_a".startsWith("a", 1)
          , ee = !!String.fromCodePoint
          , te = !!Object.fromEntries
          , ne = !!String.prototype.codePointAt
          , re = !!String.prototype.trimStart
          , oe = !!String.prototype.trimEnd
          , ie = Number.isSafeInteger ? Number.isSafeInteger : function(e) {
            return "number" == typeof e && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991
        }
          , ae = !0;
        try {
            ae = "a" === (null === (Q = he("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")) || void 0 === Q ? void 0 : Q[0])
        } catch (e) {
            ae = !1
        }
        var le, ue = J ? function(e, t, n) {
            return e.startsWith(t, n)
        }
        : function(e, t, n) {
            return e.slice(n, n + t.length) === t
        }
        , ce = ee ? String.fromCodePoint : function() {
            for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
            for (var n, r = "", o = e.length, i = 0; o > i; ) {
                if ((n = e[i++]) > 1114111)
                    throw RangeError(n + " is not a valid code point");
                r += n < 65536 ? String.fromCharCode(n) : String.fromCharCode(55296 + ((n -= 65536) >> 10), n % 1024 + 56320)
            }
            return r
        }
        , se = te ? Object.fromEntries : function(e) {
            for (var t = {}, n = 0, r = e; n < r.length; n++) {
                var o = r[n]
                  , i = o[0]
                  , a = o[1];
                t[i] = a
            }
            return t
        }
        , fe = ne ? function(e, t) {
            return e.codePointAt(t)
        }
        : function(e, t) {
            var n = e.length;
            if (!(t < 0 || t >= n)) {
                var r, o = e.charCodeAt(t);
                return o < 55296 || o > 56319 || t + 1 === n || (r = e.charCodeAt(t + 1)) < 56320 || r > 57343 ? o : r - 56320 + (o - 55296 << 10) + 65536
            }
        }
        , pe = re ? function(e) {
            return e.trimStart()
        }
        : function(e) {
            return e.replace(q, "")
        }
        , de = oe ? function(e) {
            return e.trimEnd()
        }
        : function(e) {
            return e.replace(Y, "")
        }
        ;
        function he(e, t) {
            return new RegExp(e,t)
        }
        if (ae) {
            var me = he("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
            le = function(e, t) {
                var n;
                return me.lastIndex = t,
                null !== (n = me.exec(e)[1]) && void 0 !== n ? n : ""
            }
        } else
            le = function(e, t) {
                for (var n = []; ; ) {
                    var r = fe(e, t);
                    if (void 0 === r || we(r) || Te(r))
                        break;
                    n.push(r),
                    t += r >= 65536 ? 2 : 1
                }
                return ce.apply(void 0, n)
            }
            ;
        var ge, ye, be = function() {
            function e(e, t) {
                void 0 === t && (t = {}),
                this.message = e,
                this.position = {
                    offset: 0,
                    line: 1,
                    column: 1
                },
                this.ignoreTag = !!t.ignoreTag,
                this.locale = t.locale,
                this.requiresOtherClause = !!t.requiresOtherClause,
                this.shouldParseSkeletons = !!t.shouldParseSkeletons
            }
            return e.prototype.parse = function() {
                if (0 !== this.offset())
                    throw Error("parser can only be used once");
                return this.parseMessage(0, "", !1)
            }
            ,
            e.prototype.parseMessage = function(e, t, n) {
                for (var r = []; !this.isEOF(); ) {
                    var o = this.char();
                    if (123 === o) {
                        if ((i = this.parseArgument(e, n)).err)
                            return i;
                        r.push(i.val)
                    } else {
                        if (125 === o && e > 0)
                            break;
                        if (35 !== o || "plural" !== t && "selectordinal" !== t) {
                            if (60 === o && !this.ignoreTag && 47 === this.peek()) {
                                if (n)
                                    break;
                                return this.error(h.UNMATCHED_CLOSING_TAG, Z(this.clonePosition(), this.clonePosition()))
                            }
                            if (60 === o && !this.ignoreTag && ve(this.peek() || 0)) {
                                if ((i = this.parseTag(e, t)).err)
                                    return i;
                                r.push(i.val)
                            } else {
                                var i;
                                if ((i = this.parseLiteral(e, t)).err)
                                    return i;
                                r.push(i.val)
                            }
                        } else {
                            var a = this.clonePosition();
                            this.bump(),
                            r.push({
                                type: m.pound,
                                location: Z(a, this.clonePosition())
                            })
                        }
                    }
                }
                return {
                    val: r,
                    err: null
                }
            }
            ,
            e.prototype.parseTag = function(e, t) {
                var n = this.clonePosition();
                this.bump();
                var r = this.parseTagName();
                if (this.bumpSpace(),
                this.bumpIf("/>"))
                    return {
                        val: {
                            type: m.literal,
                            value: "<".concat(r, "/>"),
                            location: Z(n, this.clonePosition())
                        },
                        err: null
                    };
                if (this.bumpIf(">")) {
                    var o = this.parseMessage(e + 1, t, !0);
                    if (o.err)
                        return o;
                    var i = o.val
                      , a = this.clonePosition();
                    if (this.bumpIf("</")) {
                        if (this.isEOF() || !ve(this.char()))
                            return this.error(h.INVALID_TAG, Z(a, this.clonePosition()));
                        var l = this.clonePosition();
                        return r !== this.parseTagName() ? this.error(h.UNMATCHED_CLOSING_TAG, Z(l, this.clonePosition())) : (this.bumpSpace(),
                        this.bumpIf(">") ? {
                            val: {
                                type: m.tag,
                                value: r,
                                children: i,
                                location: Z(n, this.clonePosition())
                            },
                            err: null
                        } : this.error(h.INVALID_TAG, Z(a, this.clonePosition())))
                    }
                    return this.error(h.UNCLOSED_TAG, Z(n, this.clonePosition()))
                }
                return this.error(h.INVALID_TAG, Z(n, this.clonePosition()))
            }
            ,
            e.prototype.parseTagName = function() {
                var e = this.offset();
                for (this.bump(); !this.isEOF() && Ee(this.char()); )
                    this.bump();
                return this.message.slice(e, this.offset())
            }
            ,
            e.prototype.parseLiteral = function(e, t) {
                for (var n = this.clonePosition(), r = ""; ; ) {
                    var o = this.tryParseQuote(t);
                    if (o)
                        r += o;
                    else {
                        var i = this.tryParseUnquoted(e, t);
                        if (i)
                            r += i;
                        else {
                            var a = this.tryParseLeftAngleBracket();
                            if (!a)
                                break;
                            r += a
                        }
                    }
                }
                var l = Z(n, this.clonePosition());
                return {
                    val: {
                        type: m.literal,
                        value: r,
                        location: l
                    },
                    err: null
                }
            }
            ,
            e.prototype.tryParseLeftAngleBracket = function() {
                return this.isEOF() || 60 !== this.char() || !this.ignoreTag && (ve(e = this.peek() || 0) || 47 === e) ? null : (this.bump(),
                "<");
                var e
            }
            ,
            e.prototype.tryParseQuote = function(e) {
                if (this.isEOF() || 39 !== this.char())
                    return null;
                switch (this.peek()) {
                case 39:
                    return this.bump(),
                    this.bump(),
                    "'";
                case 123:
                case 60:
                case 62:
                case 125:
                    break;
                case 35:
                    if ("plural" === e || "selectordinal" === e)
                        break;
                    return null;
                default:
                    return null
                }
                this.bump();
                var t = [this.char()];
                for (this.bump(); !this.isEOF(); ) {
                    var n = this.char();
                    if (39 === n) {
                        if (39 !== this.peek()) {
                            this.bump();
                            break
                        }
                        t.push(39),
                        this.bump()
                    } else
                        t.push(n);
                    this.bump()
                }
                return ce.apply(void 0, t)
            }
            ,
            e.prototype.tryParseUnquoted = function(e, t) {
                if (this.isEOF())
                    return null;
                var n = this.char();
                return 60 === n || 123 === n || 35 === n && ("plural" === t || "selectordinal" === t) || 125 === n && e > 0 ? null : (this.bump(),
                ce(n))
            }
            ,
            e.prototype.parseArgument = function(e, t) {
                var n = this.clonePosition();
                if (this.bump(),
                this.bumpSpace(),
                this.isEOF())
                    return this.error(h.EXPECT_ARGUMENT_CLOSING_BRACE, Z(n, this.clonePosition()));
                if (125 === this.char())
                    return this.bump(),
                    this.error(h.EMPTY_ARGUMENT, Z(n, this.clonePosition()));
                var r = this.parseIdentifierIfPossible().value;
                if (!r)
                    return this.error(h.MALFORMED_ARGUMENT, Z(n, this.clonePosition()));
                if (this.bumpSpace(),
                this.isEOF())
                    return this.error(h.EXPECT_ARGUMENT_CLOSING_BRACE, Z(n, this.clonePosition()));
                switch (this.char()) {
                case 125:
                    return this.bump(),
                    {
                        val: {
                            type: m.argument,
                            value: r,
                            location: Z(n, this.clonePosition())
                        },
                        err: null
                    };
                case 44:
                    return this.bump(),
                    this.bumpSpace(),
                    this.isEOF() ? this.error(h.EXPECT_ARGUMENT_CLOSING_BRACE, Z(n, this.clonePosition())) : this.parseArgumentOptions(e, t, r, n);
                default:
                    return this.error(h.MALFORMED_ARGUMENT, Z(n, this.clonePosition()))
                }
            }
            ,
            e.prototype.parseIdentifierIfPossible = function() {
                var e = this.clonePosition()
                  , t = this.offset()
                  , n = le(this.message, t)
                  , r = t + n.length;
                return this.bumpTo(r),
                {
                    value: n,
                    location: Z(e, this.clonePosition())
                }
            }
            ,
            e.prototype.parseArgumentOptions = function(e, t, n, r) {
                var o, i = this.clonePosition(), l = this.parseIdentifierIfPossible().value, u = this.clonePosition();
                switch (l) {
                case "":
                    return this.error(h.EXPECT_ARGUMENT_TYPE, Z(i, u));
                case "number":
                case "date":
                case "time":
                    this.bumpSpace();
                    var c = null;
                    if (this.bumpIf(",")) {
                        this.bumpSpace();
                        var s = this.clonePosition();
                        if ((w = this.parseSimpleArgStyleIfPossible()).err)
                            return w;
                        if (0 === (y = de(w.val)).length)
                            return this.error(h.EXPECT_ARGUMENT_STYLE, Z(this.clonePosition(), this.clonePosition()));
                        c = {
                            style: y,
                            styleLocation: Z(s, this.clonePosition())
                        }
                    }
                    if ((T = this.tryParseArgumentClose(r)).err)
                        return T;
                    var f = Z(r, this.clonePosition());
                    if (c && ue(null == c ? void 0 : c.style, "::", 0)) {
                        var p = pe(c.style.slice(2));
                        if ("number" === l)
                            return (w = this.parseNumberSkeletonFromString(p, c.styleLocation)).err ? w : {
                                val: {
                                    type: m.number,
                                    value: n,
                                    location: f,
                                    style: w.val
                                },
                                err: null
                            };
                        if (0 === p.length)
                            return this.error(h.EXPECT_DATE_TIME_SKELETON, f);
                        var d = p;
                        this.locale && (d = function(e, t) {
                            for (var n = "", r = 0; r < e.length; r++) {
                                var o = e.charAt(r);
                                if ("j" === o) {
                                    for (var i = 0; r + 1 < e.length && e.charAt(r + 1) === o; )
                                        i++,
                                        r++;
                                    var a = 1 + (1 & i)
                                      , l = i < 2 ? 1 : 3 + (i >> 1)
                                      , u = X(t);
                                    for ("H" != u && "k" != u || (l = 0); l-- > 0; )
                                        n += "a";
                                    for (; a-- > 0; )
                                        n = u + n
                                } else
                                    n += "J" === o ? "H" : o
                            }
                            return n
                        }(p, this.locale));
                        var y = {
                            type: g.dateTime,
                            pattern: d,
                            location: c.styleLocation,
                            parsedOptions: this.shouldParseSkeletons ? L(d) : {}
                        };
                        return {
                            val: {
                                type: "date" === l ? m.date : m.time,
                                value: n,
                                location: f,
                                style: y
                            },
                            err: null
                        }
                    }
                    return {
                        val: {
                            type: "number" === l ? m.number : "date" === l ? m.date : m.time,
                            value: n,
                            location: f,
                            style: null !== (o = null == c ? void 0 : c.style) && void 0 !== o ? o : null
                        },
                        err: null
                    };
                case "plural":
                case "selectordinal":
                case "select":
                    var b = this.clonePosition();
                    if (this.bumpSpace(),
                    !this.bumpIf(","))
                        return this.error(h.EXPECT_SELECT_ARGUMENT_OPTIONS, Z(b, a({}, b)));
                    this.bumpSpace();
                    var v = this.parseIdentifierIfPossible()
                      , E = 0;
                    if ("select" !== l && "offset" === v.value) {
                        if (!this.bumpIf(":"))
                            return this.error(h.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Z(this.clonePosition(), this.clonePosition()));
                        var w;
                        if (this.bumpSpace(),
                        (w = this.tryParseDecimalInteger(h.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, h.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err)
                            return w;
                        this.bumpSpace(),
                        v = this.parseIdentifierIfPossible(),
                        E = w.val
                    }
                    var T, S = this.tryParsePluralOrSelectOptions(e, l, t, v);
                    if (S.err)
                        return S;
                    if ((T = this.tryParseArgumentClose(r)).err)
                        return T;
                    var k = Z(r, this.clonePosition());
                    return "select" === l ? {
                        val: {
                            type: m.select,
                            value: n,
                            options: se(S.val),
                            location: k
                        },
                        err: null
                    } : {
                        val: {
                            type: m.plural,
                            value: n,
                            options: se(S.val),
                            offset: E,
                            pluralType: "plural" === l ? "cardinal" : "ordinal",
                            location: k
                        },
                        err: null
                    };
                default:
                    return this.error(h.INVALID_ARGUMENT_TYPE, Z(i, u))
                }
            }
            ,
            e.prototype.tryParseArgumentClose = function(e) {
                return this.isEOF() || 125 !== this.char() ? this.error(h.EXPECT_ARGUMENT_CLOSING_BRACE, Z(e, this.clonePosition())) : (this.bump(),
                {
                    val: !0,
                    err: null
                })
            }
            ,
            e.prototype.parseSimpleArgStyleIfPossible = function() {
                for (var e = 0, t = this.clonePosition(); !this.isEOF(); )
                    switch (this.char()) {
                    case 39:
                        this.bump();
                        var n = this.clonePosition();
                        if (!this.bumpUntil("'"))
                            return this.error(h.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, Z(n, this.clonePosition()));
                        this.bump();
                        break;
                    case 123:
                        e += 1,
                        this.bump();
                        break;
                    case 125:
                        if (!(e > 0))
                            return {
                                val: this.message.slice(t.offset, this.offset()),
                                err: null
                            };
                        e -= 1;
                        break;
                    default:
                        this.bump()
                    }
                return {
                    val: this.message.slice(t.offset, this.offset()),
                    err: null
                }
            }
            ,
            e.prototype.parseNumberSkeletonFromString = function(e, t) {
                var n = [];
                try {
                    n = function(e) {
                        if (0 === e.length)
                            throw new Error("Number skeleton cannot be empty");
                        for (var t = [], n = 0, r = e.split(D).filter(function(e) {
                            return e.length > 0
                        }); n < r.length; n++) {
                            var o = r[n].split("/");
                            if (0 === o.length)
                                throw new Error("Invalid number skeleton");
                            for (var i = o[0], a = o.slice(1), l = 0, u = a; l < u.length; l++)
                                if (0 === u[l].length)
                                    throw new Error("Invalid number skeleton");
                            t.push({
                                stem: i,
                                options: a
                            })
                        }
                        return t
                    }(e)
                } catch (e) {
                    return this.error(h.INVALID_NUMBER_SKELETON, t)
                }
                return {
                    val: {
                        type: g.number,
                        tokens: n,
                        location: t,
                        parsedOptions: this.shouldParseSkeletons ? W(n) : {}
                    },
                    err: null
                }
            }
            ,
            e.prototype.tryParsePluralOrSelectOptions = function(e, t, n, r) {
                for (var o, i = !1, a = [], l = new Set, u = r.value, c = r.location; ; ) {
                    if (0 === u.length) {
                        var s = this.clonePosition();
                        if ("select" === t || !this.bumpIf("="))
                            break;
                        var f = this.tryParseDecimalInteger(h.EXPECT_PLURAL_ARGUMENT_SELECTOR, h.INVALID_PLURAL_ARGUMENT_SELECTOR);
                        if (f.err)
                            return f;
                        c = Z(s, this.clonePosition()),
                        u = this.message.slice(s.offset, this.offset())
                    }
                    if (l.has(u))
                        return this.error("select" === t ? h.DUPLICATE_SELECT_ARGUMENT_SELECTOR : h.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, c);
                    "other" === u && (i = !0),
                    this.bumpSpace();
                    var p = this.clonePosition();
                    if (!this.bumpIf("{"))
                        return this.error("select" === t ? h.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : h.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, Z(this.clonePosition(), this.clonePosition()));
                    var d = this.parseMessage(e + 1, t, n);
                    if (d.err)
                        return d;
                    var m = this.tryParseArgumentClose(p);
                    if (m.err)
                        return m;
                    a.push([u, {
                        value: d.val,
                        location: Z(p, this.clonePosition())
                    }]),
                    l.add(u),
                    this.bumpSpace(),
                    u = (o = this.parseIdentifierIfPossible()).value,
                    c = o.location
                }
                return 0 === a.length ? this.error("select" === t ? h.EXPECT_SELECT_ARGUMENT_SELECTOR : h.EXPECT_PLURAL_ARGUMENT_SELECTOR, Z(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !i ? this.error(h.MISSING_OTHER_CLAUSE, Z(this.clonePosition(), this.clonePosition())) : {
                    val: a,
                    err: null
                }
            }
            ,
            e.prototype.tryParseDecimalInteger = function(e, t) {
                var n = 1
                  , r = this.clonePosition();
                this.bumpIf("+") || this.bumpIf("-") && (n = -1);
                for (var o = !1, i = 0; !this.isEOF(); ) {
                    var a = this.char();
                    if (!(a >= 48 && a <= 57))
                        break;
                    o = !0,
                    i = 10 * i + (a - 48),
                    this.bump()
                }
                var l = Z(r, this.clonePosition());
                return o ? ie(i *= n) ? {
                    val: i,
                    err: null
                } : this.error(t, l) : this.error(e, l)
            }
            ,
            e.prototype.offset = function() {
                return this.position.offset
            }
            ,
            e.prototype.isEOF = function() {
                return this.offset() === this.message.length
            }
            ,
            e.prototype.clonePosition = function() {
                return {
                    offset: this.position.offset,
                    line: this.position.line,
                    column: this.position.column
                }
            }
            ,
            e.prototype.char = function() {
                var e = this.position.offset;
                if (e >= this.message.length)
                    throw Error("out of bound");
                var t = fe(this.message, e);
                if (void 0 === t)
                    throw Error("Offset ".concat(e, " is at invalid UTF-16 code unit boundary"));
                return t
            }
            ,
            e.prototype.error = function(e, t) {
                return {
                    val: null,
                    err: {
                        kind: e,
                        message: this.message,
                        location: t
                    }
                }
            }
            ,
            e.prototype.bump = function() {
                if (!this.isEOF()) {
                    var e = this.char();
                    10 === e ? (this.position.line += 1,
                    this.position.column = 1,
                    this.position.offset += 1) : (this.position.column += 1,
                    this.position.offset += e < 65536 ? 1 : 2)
                }
            }
            ,
            e.prototype.bumpIf = function(e) {
                if (ue(this.message, e, this.offset())) {
                    for (var t = 0; t < e.length; t++)
                        this.bump();
                    return !0
                }
                return !1
            }
            ,
            e.prototype.bumpUntil = function(e) {
                var t = this.offset()
                  , n = this.message.indexOf(e, t);
                return n >= 0 ? (this.bumpTo(n),
                !0) : (this.bumpTo(this.message.length),
                !1)
            }
            ,
            e.prototype.bumpTo = function(e) {
                if (this.offset() > e)
                    throw Error("targetOffset ".concat(e, " must be greater than or equal to the current offset ").concat(this.offset()));
                for (e = Math.min(e, this.message.length); ; ) {
                    var t = this.offset();
                    if (t === e)
                        break;
                    if (t > e)
                        throw Error("targetOffset ".concat(e, " is at invalid UTF-16 code unit boundary"));
                    if (this.bump(),
                    this.isEOF())
                        break
                }
            }
            ,
            e.prototype.bumpSpace = function() {
                for (; !this.isEOF() && we(this.char()); )
                    this.bump()
            }
            ,
            e.prototype.peek = function() {
                if (this.isEOF())
                    return null;
                var e = this.char()
                  , t = this.offset()
                  , n = this.message.charCodeAt(t + (e >= 65536 ? 2 : 1));
                return null != n ? n : null
            }
            ,
            e
        }();
        function ve(e) {
            return e >= 97 && e <= 122 || e >= 65 && e <= 90
        }
        function Ee(e) {
            return 45 === e || 46 === e || e >= 48 && e <= 57 || 95 === e || e >= 97 && e <= 122 || e >= 65 && e <= 90 || 183 == e || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039
        }
        function we(e) {
            return e >= 9 && e <= 13 || 32 === e || 133 === e || e >= 8206 && e <= 8207 || 8232 === e || 8233 === e
        }
        function Te(e) {
            return e >= 33 && e <= 35 || 36 === e || e >= 37 && e <= 39 || 40 === e || 41 === e || 42 === e || 43 === e || 44 === e || 45 === e || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || 91 === e || 92 === e || 93 === e || 94 === e || 96 === e || 123 === e || 124 === e || 125 === e || 126 === e || 161 === e || e >= 162 && e <= 165 || 166 === e || 167 === e || 169 === e || 171 === e || 172 === e || 174 === e || 176 === e || 177 === e || 182 === e || 187 === e || 191 === e || 215 === e || 247 === e || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || 8216 === e || 8217 === e || 8218 === e || e >= 8219 && e <= 8220 || 8221 === e || 8222 === e || 8223 === e || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || 8249 === e || 8250 === e || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || 8260 === e || 8261 === e || 8262 === e || e >= 8263 && e <= 8273 || 8274 === e || 8275 === e || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || 8608 === e || e >= 8609 && e <= 8610 || 8611 === e || e >= 8612 && e <= 8613 || 8614 === e || e >= 8615 && e <= 8621 || 8622 === e || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || 8658 === e || 8659 === e || 8660 === e || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || 8968 === e || 8969 === e || 8970 === e || 8971 === e || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || 9001 === e || 9002 === e || e >= 9003 && e <= 9083 || 9084 === e || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || 9655 === e || e >= 9656 && e <= 9664 || 9665 === e || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || 9839 === e || e >= 9840 && e <= 10087 || 10088 === e || 10089 === e || 10090 === e || 10091 === e || 10092 === e || 10093 === e || 10094 === e || 10095 === e || 10096 === e || 10097 === e || 10098 === e || 10099 === e || 10100 === e || 10101 === e || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || 10181 === e || 10182 === e || e >= 10183 && e <= 10213 || 10214 === e || 10215 === e || 10216 === e || 10217 === e || 10218 === e || 10219 === e || 10220 === e || 10221 === e || 10222 === e || 10223 === e || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || 10627 === e || 10628 === e || 10629 === e || 10630 === e || 10631 === e || 10632 === e || 10633 === e || 10634 === e || 10635 === e || 10636 === e || 10637 === e || 10638 === e || 10639 === e || 10640 === e || 10641 === e || 10642 === e || 10643 === e || 10644 === e || 10645 === e || 10646 === e || 10647 === e || 10648 === e || e >= 10649 && e <= 10711 || 10712 === e || 10713 === e || 10714 === e || 10715 === e || e >= 10716 && e <= 10747 || 10748 === e || 10749 === e || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || 11158 === e || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || 11778 === e || 11779 === e || 11780 === e || 11781 === e || e >= 11782 && e <= 11784 || 11785 === e || 11786 === e || 11787 === e || 11788 === e || 11789 === e || e >= 11790 && e <= 11798 || 11799 === e || e >= 11800 && e <= 11801 || 11802 === e || 11803 === e || 11804 === e || 11805 === e || e >= 11806 && e <= 11807 || 11808 === e || 11809 === e || 11810 === e || 11811 === e || 11812 === e || 11813 === e || 11814 === e || 11815 === e || 11816 === e || 11817 === e || e >= 11818 && e <= 11822 || 11823 === e || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || 11840 === e || 11841 === e || 11842 === e || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || 11858 === e || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || 12296 === e || 12297 === e || 12298 === e || 12299 === e || 12300 === e || 12301 === e || 12302 === e || 12303 === e || 12304 === e || 12305 === e || e >= 12306 && e <= 12307 || 12308 === e || 12309 === e || 12310 === e || 12311 === e || 12312 === e || 12313 === e || 12314 === e || 12315 === e || 12316 === e || 12317 === e || e >= 12318 && e <= 12319 || 12320 === e || 12336 === e || 64830 === e || 64831 === e || e >= 65093 && e <= 65094
        }
        function Se(e) {
            e.forEach(function(e) {
                if (delete e.location,
                P(e) || C(e))
                    for (var t in e.options)
                        delete e.options[t].location,
                        Se(e.options[t].value);
                else
                    k(e) && A(e.style) || (x(e) || _(e)) && I(e.style) ? delete e.style.location : N(e) && Se(e.children)
            })
        }
        function ke(e, t) {
            void 0 === t && (t = {}),
            t = a({
                shouldParseSkeletons: !0,
                requiresOtherClause: !0
            }, t);
            var n = new be(e,t).parse();
            if (n.err) {
                var r = SyntaxError(h[n.err.kind]);
                throw r.location = n.err.location,
                r.originalMessage = n.err.message,
                r
            }
            return (null == t ? void 0 : t.captureLocation) || Se(n.val),
            n.val
        }
        (ye = ge || (ge = {})).MISSING_VALUE = "MISSING_VALUE",
        ye.INVALID_VALUE = "INVALID_VALUE",
        ye.MISSING_INTL_API = "MISSING_INTL_API";
        var xe, _e = function(e) {
            function t(t, n, r) {
                var o = e.call(this, t) || this;
                return o.code = n,
                o.originalMessage = r,
                o
            }
            return i(t, e),
            t.prototype.toString = function() {
                return "[formatjs Error: ".concat(this.code, "] ").concat(this.message)
            }
            ,
            t
        }(Error), Pe = function(e) {
            function t(t, n, r, o) {
                return e.call(this, 'Invalid values for "'.concat(t, '": "').concat(n, '". Options are "').concat(Object.keys(r).join('", "'), '"'), ge.INVALID_VALUE, o) || this
            }
            return i(t, e),
            t
        }(_e), Ce = function(e) {
            function t(t, n, r) {
                return e.call(this, 'Value for "'.concat(t, '" must be of type ').concat(n), ge.INVALID_VALUE, r) || this
            }
            return i(t, e),
            t
        }(_e), Oe = function(e) {
            function t(t, n) {
                return e.call(this, 'The intl string context variable "'.concat(t, '" was not provided to the string "').concat(n, '"'), ge.MISSING_VALUE, n) || this
            }
            return i(t, e),
            t
        }(_e);
        function Ne(e) {
            return "function" == typeof e
        }
        function Ae(e, t, n, r, o, i, a) {
            if (1 === e.length && T(e[0]))
                return [{
                    type: xe.literal,
                    value: e[0].value
                }];
            for (var l = [], u = 0, c = e; u < c.length; u++) {
                var s = c[u];
                if (T(s))
                    l.push({
                        type: xe.literal,
                        value: s.value
                    });
                else if (O(s))
                    "number" == typeof i && l.push({
                        type: xe.literal,
                        value: n.getNumberFormat(t).format(i)
                    });
                else {
                    var f = s.value;
                    if (!o || !(f in o))
                        throw new Oe(f,a);
                    var p = o[f];
                    if (S(s))
                        p && "string" != typeof p && "number" != typeof p || (p = "string" == typeof p || "number" == typeof p ? String(p) : ""),
                        l.push({
                            type: "string" == typeof p ? xe.literal : xe.object,
                            value: p
                        });
                    else if (x(s)) {
                        var d = "string" == typeof s.style ? r.date[s.style] : I(s.style) ? s.style.parsedOptions : void 0;
                        l.push({
                            type: xe.literal,
                            value: n.getDateTimeFormat(t, d).format(p)
                        })
                    } else if (_(s))
                        d = "string" == typeof s.style ? r.time[s.style] : I(s.style) ? s.style.parsedOptions : r.time.medium,
                        l.push({
                            type: xe.literal,
                            value: n.getDateTimeFormat(t, d).format(p)
                        });
                    else if (k(s))
                        (d = "string" == typeof s.style ? r.number[s.style] : A(s.style) ? s.style.parsedOptions : void 0) && d.scale && (p *= d.scale || 1),
                        l.push({
                            type: xe.literal,
                            value: n.getNumberFormat(t, d).format(p)
                        });
                    else {
                        if (N(s)) {
                            var h = s.children
                              , m = s.value
                              , g = o[m];
                            if (!Ne(g))
                                throw new Ce(m,"function",a);
                            var y = g(Ae(h, t, n, r, o, i).map(function(e) {
                                return e.value
                            }));
                            Array.isArray(y) || (y = [y]),
                            l.push.apply(l, y.map(function(e) {
                                return {
                                    type: "string" == typeof e ? xe.literal : xe.object,
                                    value: e
                                }
                            }))
                        }
                        if (P(s)) {
                            if (!(b = s.options[p] || s.options.other))
                                throw new Pe(s.value,p,Object.keys(s.options),a);
                            l.push.apply(l, Ae(b.value, t, n, r, o))
                        } else if (C(s)) {
                            var b;
                            if (!(b = s.options["=".concat(p)])) {
                                if (!Intl.PluralRules)
                                    throw new _e('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n',ge.MISSING_INTL_API,a);
                                var v = n.getPluralRules(t, {
                                    type: s.pluralType
                                }).select(p - (s.offset || 0));
                                b = s.options[v] || s.options.other
                            }
                            if (!b)
                                throw new Pe(s.value,p,Object.keys(s.options),a);
                            l.push.apply(l, Ae(b.value, t, n, r, o, p - (s.offset || 0)))
                        }
                    }
                }
            }
            return (E = l).length < 2 ? E : E.reduce(function(e, t) {
                var n = e[e.length - 1];
                return n && n.type === xe.literal && t.type === xe.literal ? n.value += t.value : e.push(t),
                e
            }, []);
            var E
        }
        function Ie(e) {
            return {
                create: function() {
                    return {
                        get: function(t) {
                            return e[t]
                        },
                        set: function(t, n) {
                            e[t] = n
                        }
                    }
                }
            }
        }
        !function(e) {
            e[e.literal = 0] = "literal",
            e[e.object = 1] = "object"
        }(xe || (xe = {}));
        var Re, Me = function() {
            function e(t, n, r, o) {
                void 0 === n && (n = e.defaultLocale);
                var i, s, f, p = this;
                if (this.formatterCache = {
                    number: {},
                    dateTime: {},
                    pluralRules: {}
                },
                this.format = function(e) {
                    var t = p.formatToParts(e);
                    if (1 === t.length)
                        return t[0].value;
                    var n = t.reduce(function(e, t) {
                        return e.length && t.type === xe.literal && "string" == typeof e[e.length - 1] ? e[e.length - 1] += t.value : e.push(t.value),
                        e
                    }, []);
                    return n.length <= 1 ? n[0] || "" : n
                }
                ,
                this.formatToParts = function(e) {
                    return Ae(p.ast, p.locales, p.formatters, p.formats, e, void 0, p.message)
                }
                ,
                this.resolvedOptions = function() {
                    var e;
                    return {
                        locale: (null === (e = p.resolvedLocale) || void 0 === e ? void 0 : e.toString()) || Intl.NumberFormat.supportedLocalesOf(p.locales)[0]
                    }
                }
                ,
                this.getAst = function() {
                    return p.ast
                }
                ,
                this.locales = n,
                this.resolvedLocale = e.resolveLocale(n),
                "string" == typeof t) {
                    if (this.message = t,
                    !e.__parse)
                        throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
                    var d = o || {}
                      , h = (d.formatters,
                    l(d, ["formatters"]));
                    this.ast = e.__parse(t, a(a({}, h), {
                        locale: this.resolvedLocale
                    }))
                } else
                    this.ast = t;
                if (!Array.isArray(this.ast))
                    throw new TypeError("A message must be provided as a String or AST.");
                this.formats = (s = e.formats,
                (f = r) ? Object.keys(s).reduce(function(e, t) {
                    var n, r;
                    return e[t] = (n = s[t],
                    (r = f[t]) ? a(a(a({}, n || {}), r || {}), Object.keys(n).reduce(function(e, t) {
                        return e[t] = a(a({}, n[t]), r[t] || {}),
                        e
                    }, {})) : n),
                    e
                }, a({}, s)) : s),
                this.formatters = o && o.formatters || (void 0 === (i = this.formatterCache) && (i = {
                    number: {},
                    dateTime: {},
                    pluralRules: {}
                }),
                {
                    getNumberFormat: c(function() {
                        for (var e, t = [], n = 0; n < arguments.length; n++)
                            t[n] = arguments[n];
                        return new ((e = Intl.NumberFormat).bind.apply(e, u([void 0], t, !1)))
                    }, {
                        cache: Ie(i.number),
                        strategy: w.variadic
                    }),
                    getDateTimeFormat: c(function() {
                        for (var e, t = [], n = 0; n < arguments.length; n++)
                            t[n] = arguments[n];
                        return new ((e = Intl.DateTimeFormat).bind.apply(e, u([void 0], t, !1)))
                    }, {
                        cache: Ie(i.dateTime),
                        strategy: w.variadic
                    }),
                    getPluralRules: c(function() {
                        for (var e, t = [], n = 0; n < arguments.length; n++)
                            t[n] = arguments[n];
                        return new ((e = Intl.PluralRules).bind.apply(e, u([void 0], t, !1)))
                    }, {
                        cache: Ie(i.pluralRules),
                        strategy: w.variadic
                    })
                })
            }
            return Object.defineProperty(e, "defaultLocale", {
                get: function() {
                    return e.memoizedDefaultLocale || (e.memoizedDefaultLocale = (new Intl.NumberFormat).resolvedOptions().locale),
                    e.memoizedDefaultLocale
                },
                enumerable: !1,
                configurable: !0
            }),
            e.memoizedDefaultLocale = null,
            e.resolveLocale = function(e) {
                if (void 0 !== Intl.Locale) {
                    var t = Intl.NumberFormat.supportedLocalesOf(e);
                    return t.length > 0 ? new Intl.Locale(t[0]) : new Intl.Locale("string" == typeof e ? e : e[0])
                }
            }
            ,
            e.__parse = ke,
            e.formats = {
                number: {
                    integer: {
                        maximumFractionDigits: 0
                    },
                    currency: {
                        style: "currency"
                    },
                    percent: {
                        style: "percent"
                    }
                },
                date: {
                    short: {
                        month: "numeric",
                        day: "numeric",
                        year: "2-digit"
                    },
                    medium: {
                        month: "short",
                        day: "numeric",
                        year: "numeric"
                    },
                    long: {
                        month: "long",
                        day: "numeric",
                        year: "numeric"
                    },
                    full: {
                        weekday: "long",
                        month: "long",
                        day: "numeric",
                        year: "numeric"
                    }
                },
                time: {
                    short: {
                        hour: "numeric",
                        minute: "numeric"
                    },
                    medium: {
                        hour: "numeric",
                        minute: "numeric",
                        second: "numeric"
                    },
                    long: {
                        hour: "numeric",
                        minute: "numeric",
                        second: "numeric",
                        timeZoneName: "short"
                    },
                    full: {
                        hour: "numeric",
                        minute: "numeric",
                        second: "numeric",
                        timeZoneName: "short"
                    }
                }
            },
            e
        }();
        !function(e) {
            e.FORMAT_ERROR = "FORMAT_ERROR",
            e.UNSUPPORTED_FORMATTER = "UNSUPPORTED_FORMATTER",
            e.INVALID_CONFIG = "INVALID_CONFIG",
            e.MISSING_DATA = "MISSING_DATA",
            e.MISSING_TRANSLATION = "MISSING_TRANSLATION"
        }(Re || (Re = {}));
        var Le = function(e) {
            function t(n, r, o) {
                var i = this
                  , a = o ? o instanceof Error ? o : new Error(String(o)) : void 0;
                return (i = e.call(this, "[@formatjs/intl Error ".concat(n, "] ").concat(r, "\n").concat(a ? "\n".concat(a.message, "\n").concat(a.stack) : "")) || this).code = n,
                "function" == typeof Error.captureStackTrace && Error.captureStackTrace(i, t),
                i
            }
            return i(t, e),
            t
        }(Error)
          , De = function(e) {
            function t(t, n) {
                return e.call(this, Re.UNSUPPORTED_FORMATTER, t, n) || this
            }
            return i(t, e),
            t
        }(Le)
          , He = function(e) {
            function t(t, n) {
                return e.call(this, Re.INVALID_CONFIG, t, n) || this
            }
            return i(t, e),
            t
        }(Le)
          , Be = function(e) {
            function t(t, n) {
                return e.call(this, Re.MISSING_DATA, t, n) || this
            }
            return i(t, e),
            t
        }(Le)
          , je = function(e) {
            function t(t, n, r) {
                var o = e.call(this, Re.FORMAT_ERROR, "".concat(t, "\nLocale: ").concat(n, "\n"), r) || this;
                return o.locale = n,
                o
            }
            return i(t, e),
            t
        }(Le)
          , Fe = function(e) {
            function t(t, n, r, o) {
                var i = e.call(this, "".concat(t, "\nMessageID: ").concat(null == r ? void 0 : r.id, "\nDefault Message: ").concat(null == r ? void 0 : r.defaultMessage, "\nDescription: ").concat(null == r ? void 0 : r.description, "\n"), n, o) || this;
                return i.descriptor = r,
                i.locale = n,
                i
            }
            return i(t, e),
            t
        }(je)
          , Ue = function(e) {
            function t(t, n) {
                var r = e.call(this, Re.MISSING_TRANSLATION, 'Missing message: "'.concat(t.id, '" for locale "').concat(n, '", using ').concat(t.defaultMessage ? "default message (".concat("string" == typeof t.defaultMessage ? t.defaultMessage : t.defaultMessage.map(function(e) {
                    var t;
                    return null !== (t = e.value) && void 0 !== t ? t : JSON.stringify(e)
                }).join(), ")") : "id", " as fallback.")) || this;
                return r.descriptor = t,
                r
            }
            return i(t, e),
            t
        }(Le);
        function ze(e, t, n) {
            return void 0 === n && (n = {}),
            t.reduce(function(t, r) {
                return r in e ? t[r] = e[r] : r in n && (t[r] = n[r]),
                t
            }, {})
        }
        var Ge = {
            formats: {},
            messages: {},
            timeZone: void 0,
            defaultLocale: "en",
            defaultFormats: {},
            fallbackOnEmptyString: !0,
            onError: function(e) {},
            onWarn: function(e) {}
        };
        function $e(e) {
            return {
                create: function() {
                    return {
                        get: function(t) {
                            return e[t]
                        },
                        set: function(t, n) {
                            e[t] = n
                        }
                    }
                }
            }
        }
        function Ve(e, t, n, r) {
            var o, i = e && e[t];
            if (i && (o = i[n]),
            o)
                return o;
            r(new De("No ".concat(t, " format named: ").concat(n)))
        }
        function We(e) {
            !function(e, t, n) {
                if (void 0 === n && (n = Error),
                !e)
                    throw new n("[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")
            }(e)
        }
        var Qe = a(a({}, Ge), {
            textComponent: t.Fragment
        })
          , Ke = {
            key: 42
        }
          , Xe = function(e) {
            return t.isValidElement(e) ? t.createElement(t.Fragment, Ke, e) : e
        };
        function qe(e, t) {
            return Object.keys(e).reduce(function(n, r) {
                return n[r] = a({
                    timeZone: t
                }, e[r]),
                n
            }, {})
        }
        function Ye(e, t) {
            return Object.keys(a(a({}, e), t)).reduce(function(n, r) {
                return n[r] = a(a({}, e[r] || {}), t[r] || {}),
                n
            }, {})
        }
        function Ze(e, t) {
            if (!t)
                return e;
            var n = Me.formats;
            return a(a(a({}, n), e), {
                date: Ye(qe(n.date, t), qe(e.date || {}, t)),
                time: Ye(qe(n.time, t), qe(e.time || {}, t))
            })
        }
        var Je = function(e, t, n, r, o) {
            var i = e.locale
              , l = e.formats
              , u = e.messages
              , c = e.defaultLocale
              , s = e.defaultFormats
              , f = e.fallbackOnEmptyString
              , p = e.onError
              , d = e.timeZone
              , h = e.defaultRichTextElements;
            void 0 === n && (n = {
                id: ""
            });
            var g = n.id
              , y = n.defaultMessage;
            !function(e, t, n) {
                if (void 0 === n && (n = Error),
                !e)
                    throw new n("[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.github.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.github.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.github.io/docs/tooling/linter#enforce-id)\nto autofix this issue")
            }(!!g);
            var b = String(g)
              , v = u && Object.prototype.hasOwnProperty.call(u, b) && u[b];
            if (Array.isArray(v) && 1 === v.length && v[0].type === m.literal)
                return v[0].value;
            if (!r && v && "string" == typeof v && !h)
                return v.replace(/'\{(.*?)\}'/gi, "{$1}");
            if (r = a(a({}, h), r || {}),
            l = Ze(l, d),
            s = Ze(s, d),
            !v) {
                if (!1 === f && "" === v)
                    return v;
                if ((!y || i && i.toLowerCase() !== c.toLowerCase()) && p(new Ue(n,i)),
                y)
                    try {
                        return t.getMessageFormat(y, c, s, o).format(r)
                    } catch (e) {
                        return p(new Fe('Error formatting default message for: "'.concat(b, '", rendering default message verbatim'),i,n,e)),
                        "string" == typeof y ? y : b
                    }
                return b
            }
            try {
                return t.getMessageFormat(v, i, l, a({
                    formatters: t
                }, o || {})).format(r)
            } catch (e) {
                p(new Fe('Error formatting message: "'.concat(b, '", using ').concat(y ? "default message" : "id", " as fallback."),i,n,e))
            }
            if (y)
                try {
                    return t.getMessageFormat(y, c, s, o).format(r)
                } catch (e) {
                    p(new Fe('Error formatting the default message for: "'.concat(b, '", rendering message verbatim'),i,n,e))
                }
            return "string" == typeof v ? v : "string" == typeof y ? y : b
        }
          , et = ["formatMatcher", "timeZone", "hour12", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "hourCycle", "dateStyle", "timeStyle", "calendar", "numberingSystem", "fractionalSecondDigits"];
        function tt(e, t, n, r) {
            var o = e.locale
              , i = e.formats
              , l = e.onError
              , u = e.timeZone;
            void 0 === r && (r = {});
            var c = r.format
              , s = a(a({}, u && {
                timeZone: u
            }), c && Ve(i, t, c, l))
              , f = ze(r, et, s);
            return "time" !== t || f.hour || f.minute || f.second || f.timeStyle || f.dateStyle || (f = a(a({}, f), {
                hour: "numeric",
                minute: "numeric"
            })),
            n(o, f)
        }
        function nt(e, t) {
            for (var n = [], r = 2; r < arguments.length; r++)
                n[r - 2] = arguments[r];
            var o = n[0]
              , i = n[1]
              , a = void 0 === i ? {} : i
              , l = "string" == typeof o ? new Date(o || 0) : o;
            try {
                return tt(e, "date", t, a).format(l)
            } catch (t) {
                e.onError(new je("Error formatting date.",e.locale,t))
            }
            return String(l)
        }
        function rt(e, t) {
            for (var n = [], r = 2; r < arguments.length; r++)
                n[r - 2] = arguments[r];
            var o = n[0]
              , i = n[1]
              , a = void 0 === i ? {} : i
              , l = "string" == typeof o ? new Date(o || 0) : o;
            try {
                return tt(e, "time", t, a).format(l)
            } catch (t) {
                e.onError(new je("Error formatting time.",e.locale,t))
            }
            return String(l)
        }
        function ot(e, t) {
            for (var n = [], r = 2; r < arguments.length; r++)
                n[r - 2] = arguments[r];
            var o = n[0]
              , i = n[1]
              , a = n[2]
              , l = void 0 === a ? {} : a
              , u = "string" == typeof o ? new Date(o || 0) : o
              , c = "string" == typeof i ? new Date(i || 0) : i;
            try {
                return tt(e, "dateTimeRange", t, l).formatRange(u, c)
            } catch (t) {
                e.onError(new je("Error formatting date time range.",e.locale,t))
            }
            return String(u)
        }
        function it(e, t) {
            for (var n = [], r = 2; r < arguments.length; r++)
                n[r - 2] = arguments[r];
            var o = n[0]
              , i = n[1]
              , a = void 0 === i ? {} : i
              , l = "string" == typeof o ? new Date(o || 0) : o;
            try {
                return tt(e, "date", t, a).formatToParts(l)
            } catch (t) {
                e.onError(new je("Error formatting date.",e.locale,t))
            }
            return []
        }
        function at(e, t) {
            for (var n = [], r = 2; r < arguments.length; r++)
                n[r - 2] = arguments[r];
            var o = n[0]
              , i = n[1]
              , a = void 0 === i ? {} : i
              , l = "string" == typeof o ? new Date(o || 0) : o;
            try {
                return tt(e, "time", t, a).formatToParts(l)
            } catch (t) {
                e.onError(new je("Error formatting time.",e.locale,t))
            }
            return []
        }
        var lt = ["style", "type", "fallback", "languageDisplay"];
        function ut(e, t, n, r) {
            var o = e.locale
              , i = e.onError;
            Intl.DisplayNames || i(new _e('Intl.DisplayNames is not available in this environment.\nTry polyfilling it using "@formatjs/intl-displaynames"\n',ge.MISSING_INTL_API));
            var a = ze(r, lt);
            try {
                return t(o, a).of(n)
            } catch (e) {
                i(new je("Error formatting display name.",o,e))
            }
        }
        var ct = ["type", "style"]
          , st = Date.now();
        function ft(e, t, n, r) {
            void 0 === r && (r = {});
            var o = pt(e, t, n, r).reduce(function(e, t) {
                var n = t.value;
                return "string" != typeof n ? e.push(n) : "string" == typeof e[e.length - 1] ? e[e.length - 1] += n : e.push(n),
                e
            }, []);
            return 1 === o.length ? o[0] : 0 === o.length ? "" : o
        }
        function pt(e, t, n, r) {
            var o = e.locale
              , i = e.onError;
            void 0 === r && (r = {}),
            Intl.ListFormat || i(new _e('Intl.ListFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-listformat"\n',ge.MISSING_INTL_API));
            var l = ze(r, ct);
            try {
                var u = {}
                  , c = n.map(function(e, t) {
                    if ("object" == typeof e) {
                        var n = function(e) {
                            return "".concat(st, "_").concat(e, "_").concat(st)
                        }(t);
                        return u[n] = e,
                        n
                    }
                    return String(e)
                });
                return t(o, l).formatToParts(c).map(function(e) {
                    return "literal" === e.type ? e : a(a({}, e), {
                        value: u[e.value] || e.value
                    })
                })
            } catch (e) {
                i(new je("Error formatting list.",o,e))
            }
            return n
        }
        var dt = ["style", "currency", "unit", "unitDisplay", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "currencyDisplay", "currencySign", "notation", "signDisplay", "unit", "unitDisplay", "numberingSystem", "trailingZeroDisplay", "roundingPriority", "roundingIncrement", "roundingMode"];
        function ht(e, t, n) {
            var r = e.locale
              , o = e.formats
              , i = e.onError;
            void 0 === n && (n = {});
            var a = n.format
              , l = a && Ve(o, "number", a, i) || {};
            return t(r, ze(n, dt, l))
        }
        function mt(e, t, n, r) {
            void 0 === r && (r = {});
            try {
                return ht(e, t, r).format(n)
            } catch (t) {
                e.onError(new je("Error formatting number.",e.locale,t))
            }
            return String(n)
        }
        function gt(e, t, n, r) {
            void 0 === r && (r = {});
            try {
                return ht(e, t, r).formatToParts(n)
            } catch (t) {
                e.onError(new je("Error formatting number.",e.locale,t))
            }
            return []
        }
        var yt = ["type"];
        function bt(e, t, n, r) {
            var o = e.locale
              , i = e.onError;
            void 0 === r && (r = {}),
            Intl.PluralRules || i(new _e('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n',ge.MISSING_INTL_API));
            var a = ze(r, yt);
            try {
                return t(o, a).select(n)
            } catch (e) {
                i(new je("Error formatting plural.",o,e))
            }
            return "other"
        }
        var vt, Et = ["numeric", "style"];
        function wt(e, t, n, r, o) {
            void 0 === o && (o = {}),
            r || (r = "second"),
            Intl.RelativeTimeFormat || e.onError(new _e('Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-relativetimeformat"\n',ge.MISSING_INTL_API));
            try {
                return function(e, t, n) {
                    var r = e.locale
                      , o = e.formats
                      , i = e.onError;
                    void 0 === n && (n = {});
                    var a = n.format
                      , l = !!a && Ve(o, "relative", a, i) || {};
                    return t(r, ze(n, Et, l))
                }(e, t, o).format(n, r)
            } catch (t) {
                e.onError(new je("Error formatting relative time.",e.locale,t))
            }
            return String(n)
        }
        function Tt(e, t) {
            var n = function(e) {
                void 0 === e && (e = {
                    dateTime: {},
                    number: {},
                    message: {},
                    relativeTime: {},
                    pluralRules: {},
                    list: {},
                    displayNames: {}
                });
                var t = Intl.RelativeTimeFormat
                  , n = Intl.ListFormat
                  , r = Intl.DisplayNames
                  , o = c(function() {
                    for (var e, t = [], n = 0; n < arguments.length; n++)
                        t[n] = arguments[n];
                    return new ((e = Intl.DateTimeFormat).bind.apply(e, u([void 0], t, !1)))
                }, {
                    cache: $e(e.dateTime),
                    strategy: w.variadic
                })
                  , i = c(function() {
                    for (var e, t = [], n = 0; n < arguments.length; n++)
                        t[n] = arguments[n];
                    return new ((e = Intl.NumberFormat).bind.apply(e, u([void 0], t, !1)))
                }, {
                    cache: $e(e.number),
                    strategy: w.variadic
                })
                  , l = c(function() {
                    for (var e, t = [], n = 0; n < arguments.length; n++)
                        t[n] = arguments[n];
                    return new ((e = Intl.PluralRules).bind.apply(e, u([void 0], t, !1)))
                }, {
                    cache: $e(e.pluralRules),
                    strategy: w.variadic
                });
                return {
                    getDateTimeFormat: o,
                    getNumberFormat: i,
                    getMessageFormat: c(function(e, t, n, r) {
                        return new Me(e,t,n,a({
                            formatters: {
                                getNumberFormat: i,
                                getDateTimeFormat: o,
                                getPluralRules: l
                            }
                        }, r || {}))
                    }, {
                        cache: $e(e.message),
                        strategy: w.variadic
                    }),
                    getRelativeTimeFormat: c(function() {
                        for (var e = [], n = 0; n < arguments.length; n++)
                            e[n] = arguments[n];
                        return new (t.bind.apply(t, u([void 0], e, !1)))
                    }, {
                        cache: $e(e.relativeTime),
                        strategy: w.variadic
                    }),
                    getPluralRules: l,
                    getListFormat: c(function() {
                        for (var e = [], t = 0; t < arguments.length; t++)
                            e[t] = arguments[t];
                        return new (n.bind.apply(n, u([void 0], e, !1)))
                    }, {
                        cache: $e(e.list),
                        strategy: w.variadic
                    }),
                    getDisplayNames: c(function() {
                        for (var e = [], t = 0; t < arguments.length; t++)
                            e[t] = arguments[t];
                        return new (r.bind.apply(r, u([void 0], e, !1)))
                    }, {
                        cache: $e(e.displayNames),
                        strategy: w.variadic
                    })
                }
            }(t)
              , r = a(a({}, Ge), e)
              , o = r.locale
              , i = r.defaultLocale
              , l = r.onError;
            return o ? !Intl.NumberFormat.supportedLocalesOf(o).length && l ? l(new Be('Missing locale data for locale: "'.concat(o, '" in Intl.NumberFormat. Using default locale: "').concat(i, '" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))) : !Intl.DateTimeFormat.supportedLocalesOf(o).length && l && l(new Be('Missing locale data for locale: "'.concat(o, '" in Intl.DateTimeFormat. Using default locale: "').concat(i, '" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))) : (l && l(new He('"locale" was not configured, using "'.concat(i, '" as fallback. See https://formatjs.github.io/docs/react-intl/api#intlshape for more details'))),
            r.locale = r.defaultLocale || "en"),
            function(e) {
                e.onWarn && e.defaultRichTextElements && function(e) {
                    return "string" == typeof (e ? e[Object.keys(e)[0]] : void 0)
                }(e.messages || {}) && e.onWarn('[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. \nPlease consider using "@formatjs/cli" to pre-compile your messages for performance.\nFor more details see https://formatjs.github.io/docs/getting-started/message-distribution')
            }(r),
            a(a({}, r), {
                formatters: n,
                formatNumber: mt.bind(null, r, n.getNumberFormat),
                formatNumberToParts: gt.bind(null, r, n.getNumberFormat),
                formatRelativeTime: wt.bind(null, r, n.getRelativeTimeFormat),
                formatDate: nt.bind(null, r, n.getDateTimeFormat),
                formatDateToParts: it.bind(null, r, n.getDateTimeFormat),
                formatTime: rt.bind(null, r, n.getDateTimeFormat),
                formatDateTimeRange: ot.bind(null, r, n.getDateTimeFormat),
                formatTimeToParts: at.bind(null, r, n.getDateTimeFormat),
                formatPlural: bt.bind(null, r, n.getPluralRules),
                formatMessage: Je.bind(null, r, n),
                $t: Je.bind(null, r, n),
                formatList: ft.bind(null, r, n.getListFormat),
                formatListToParts: pt.bind(null, r, n.getListFormat),
                formatDisplayName: ut.bind(null, r, n.getDisplayNames)
            })
        }
        function St(e) {
            return e ? Object.keys(e).reduce(function(n, r) {
                var o, i = e[r];
                return n[r] = "function" == typeof i ? (o = i,
                function(e) {
                    return o(t.Children.toArray(e))
                }
                ) : i,
                n
            }, {}) : e
        }
        !function(e) {
            e[e.literal = 0] = "literal",
            e[e.object = 1] = "object"
        }(vt || (vt = {}));
        var kt = function(e, n, r, o) {
            for (var i = [], a = 4; a < arguments.length; a++)
                i[a - 4] = arguments[a];
            var l = St(o)
              , c = Je.apply(void 0, u([e, n, r, l], i, !1));
            return Array.isArray(c) ? function(e) {
                var n;
                return null !== (n = t.Children.map(e, Xe)) && void 0 !== n ? n : []
            }(c) : c
        }
          , xt = function(e, t) {
            var n = e.defaultRichTextElements
              , r = l(e, ["defaultRichTextElements"])
              , o = St(n)
              , i = Tt(a(a(a({}, Qe), r), {
                defaultRichTextElements: o
            }), t)
              , u = {
                locale: i.locale,
                timeZone: i.timeZone,
                fallbackOnEmptyString: i.fallbackOnEmptyString,
                formats: i.formats,
                defaultLocale: i.defaultLocale,
                defaultFormats: i.defaultFormats,
                messages: i.messages,
                onError: i.onError,
                defaultRichTextElements: o
            };
            return a(a({}, i), {
                formatMessage: kt.bind(null, u, i.formatters),
                $t: kt.bind(null, u, i.formatters)
            })
        }
          , _t = n(146)
          , Pt = n.n(_t)
          , Ct = "undefined" == typeof window || window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__ ? t.createContext(null) : window.__REACT_INTL_CONTEXT__ || (window.__REACT_INTL_CONTEXT__ = t.createContext(null))
          , Ot = Ct.Consumer
          , Nt = Ct.Provider
          , At = Ct;
        function It(e, n) {
            var r, o = n || {}, i = o.intlPropName, l = void 0 === i ? "intl" : i, u = o.forwardRef, c = void 0 !== u && u, s = o.enforceContext, f = void 0 === s || s, p = function(n) {
                return t.createElement(Ot, null, function(r) {
                    var o;
                    f && We(r);
                    var i = ((o = {})[l] = r,
                    o);
                    return t.createElement(e, a({}, n, i, {
                        ref: c ? n.forwardedRef : null
                    }))
                })
            };
            return p.displayName = "injectIntl(".concat((r = e).displayName || r.name || "Component", ")"),
            p.WrappedComponent = e,
            c ? Pt()(t.forwardRef(function(e, n) {
                return t.createElement(p, a({}, e, {
                    forwardedRef: n
                }))
            }), e) : Pt()(p, e)
        }
        function Rt(e) {
            return {
                locale: e.locale,
                timeZone: e.timeZone,
                fallbackOnEmptyString: e.fallbackOnEmptyString,
                formats: e.formats,
                textComponent: e.textComponent,
                messages: e.messages,
                defaultLocale: e.defaultLocale,
                defaultFormats: e.defaultFormats,
                onError: e.onError,
                onWarn: e.onWarn,
                wrapRichTextChunksInFragment: e.wrapRichTextChunksInFragment,
                defaultRichTextElements: e.defaultRichTextElements
            }
        }
        var Mt = function(e) {
            function n() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.cache = {
                    dateTime: {},
                    number: {},
                    message: {},
                    relativeTime: {},
                    pluralRules: {},
                    list: {},
                    displayNames: {}
                },
                t.state = {
                    cache: t.cache,
                    intl: xt(Rt(t.props), t.cache),
                    prevConfig: Rt(t.props)
                },
                t
            }
            return i(n, e),
            n.getDerivedStateFromProps = function(e, t) {
                var n = t.prevConfig
                  , r = t.cache
                  , o = Rt(e);
                return function(e, t) {
                    if (e === t)
                        return !0;
                    if (!e || !t)
                        return !1;
                    var n = Object.keys(e)
                      , r = Object.keys(t)
                      , o = n.length;
                    if (r.length !== o)
                        return !1;
                    for (var i = 0; i < o; i++) {
                        var a = n[i];
                        if (e[a] !== t[a] || !Object.prototype.hasOwnProperty.call(t, a))
                            return !1
                    }
                    return !0
                }(n, o) ? null : {
                    intl: xt(o, r),
                    prevConfig: o
                }
            }
            ,
            n.prototype.render = function() {
                return We(this.state.intl),
                t.createElement(Nt, {
                    value: this.state.intl
                }, this.props.children)
            }
            ,
            n.displayName = "IntlProvider",
            n.defaultProps = Qe,
            n
        }(t.PureComponent);
        const Lt = Mt;
        n(741),
        n(9),
        n(199),
        n(198);
        var Dt = n(72)
          , Ht = n.n(Dt)
          , Bt = n(825)
          , jt = n.n(Bt)
          , Ft = n(659)
          , Ut = n.n(Ft)
          , zt = n(56)
          , Gt = n.n(zt)
          , $t = n(159)
          , Vt = n.n($t)
          , Wt = n(113)
          , Qt = n.n(Wt)
          , Kt = n(211)
          , Xt = {};
        Xt.styleTagTransform = Qt(),
        Xt.setAttributes = Gt(),
        Xt.insert = Ut().bind(null, "head"),
        Xt.domAPI = jt(),
        Xt.insertStyleElement = Vt(),
        Ht()(Kt.A, Xt),
        Kt.A && Kt.A.locals && Kt.A.locals;
        const qt = JSON.parse('{"home.menubar.create":"Entwickeln","home.menubar.examples":"Beispiele","home.menubar.status":"Status","home.footer.notaffiliated":"DinosaurMod ist nicht mit Scratch, TurboWarp, PenguinMod, dem Scratch Team oder der Scratch Foundation verbunden.","home.footer.website":"Webseite","home.footer.community":"Community","home.footer.donate":"Spenden"}')
          , Yt = JSON.parse('{"home.menubar.create":"Create","home.menubar.examples":"Examples","home.menubar.status":"Status","home.footer.notaffiliated":"DinosaurMod is not affiliated with Scratch, TurboWarp, PenguinMod, the Scratch Team, or the Scratch Foundation.","home.footer.website":"Website","home.footer.community":"Community","home.footer.donate":"Donate"}')
          , Zt = JSON.parse('{"home.menubar.create":"Crear","home.menubar.examples":"Examples","home.menubar.status":"Status","home.footer.notaffiliated":"DinosaurMod no está afiliado con PenguinMod, TurboWarp, el equipo Scratch ni Scratch Foundation","home.footer.website":"Página web","home.footer.community":"Comunidad","home.footer.donate":"Donantes"}')
          , Jt = JSON.parse('{"home.menubar.create":"Crear","home.menubar.examples":"Examples","home.menubar.status":"Status","home.footer.notaffiliated":"DinosaurMod no está afiliado con Scratch, TurboWarp, PenguinMod, el Equipo de Scratch o la Fundación Scratch.","home.footer.website":"Sitio Web","home.footer.community":"Comunidad","home.footer.donate":"Donantes"}')
          , en = JSON.parse('{"home.menubar.create":"Stwórz","home.menubar.examples":"Przykłady","home.menubar.status":"Status","home.footer.notaffiliated":"DinosaurMod nie jest powiązany ze Scratchem, turboWarp, PenguinMod, Scatch Team i fundacją Scratch.","home.footer.website":"Strona","home.footer.community":"Załoga","home.footer.donate":"Zapłać"}');
        function tn() {
            var e = t.useContext(At);
            return We(e),
            e
        }
        var nn, rn;
        !function(e) {
            e.formatDate = "FormattedDate",
            e.formatTime = "FormattedTime",
            e.formatNumber = "FormattedNumber",
            e.formatList = "FormattedList",
            e.formatDisplayName = "FormattedDisplayName"
        }(nn || (nn = {})),
        function(e) {
            e.formatDate = "FormattedDateParts",
            e.formatTime = "FormattedTimeParts",
            e.formatNumber = "FormattedNumberParts",
            e.formatList = "FormattedListParts"
        }(rn || (rn = {}));
        var on = function(e) {
            var t = tn()
              , n = e.value
              , r = e.children
              , o = l(e, ["value", "children"]);
            return r(t.formatNumberToParts(n, o))
        };
        function an(e) {
            var t = function(t) {
                var n = tn()
                  , r = t.value
                  , o = t.children
                  , i = l(t, ["value", "children"])
                  , a = "string" == typeof r ? new Date(r || 0) : r;
                return o("formatDate" === e ? n.formatDateToParts(a, i) : n.formatTimeToParts(a, i))
            };
            return t.displayName = rn[e],
            t
        }
        function ln(e) {
            var n = function(n) {
                var r = tn()
                  , o = n.value
                  , i = n.children
                  , a = l(n, ["value", "children"])
                  , u = r[e](o, a);
                if ("function" == typeof i)
                    return i(u);
                var c = r.textComponent || t.Fragment;
                return t.createElement(c, null, u)
            };
            return n.displayName = nn[e],
            n
        }
        function un(e) {
            return e
        }
        on.displayName = "FormattedNumberParts",
        on.displayName = "FormattedNumberParts",
        ln("formatDate"),
        ln("formatTime"),
        ln("formatNumber"),
        ln("formatList"),
        ln("formatDisplayName"),
        an("formatDate"),
        an("formatTime"),
        n(485);
        var cn = n(687)
          , sn = n.n(cn)
          , fn = n(274)
          , pn = {};
        pn.styleTagTransform = Qt(),
        pn.setAttributes = Gt(),
        pn.insert = Ut().bind(null, "head"),
        pn.domAPI = jt(),
        pn.insertStyleElement = Vt(),
        Ht()(fn.A, pn),
        fn.A && fn.A.locals && fn.A.locals,
        n(470);
        var dn = function() {
            return t.createElement(t.Fragment, null, t.createElement("div", {
                className: "searchbar-main-div"
            }, t.createElement("button", {
                class: "searchbar-searchIcon",
                id: "searchbar-searchIcon"
            }, t.createElement("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                style: {
                    width: "30px",
                    height: "20px",
                    marginBottom: "5px",
                    marginTop: "5px"
                },
                viewBox: "0 0 19.9 19.7"
            }, t.createElement("g", {
                class: "search-path",
                fill: "none",
                stroke: "#ffffff",
                "stroke-width": "2px"
            }, t.createElement("path", {
                "stroke-linecap": "square",
                d: "M18.5 18.3l-5.4-5.4"
            }), t.createElement("circle", {
                cx: "8",
                cy: "8",
                r: "7"
            })))), t.createElement("input", {
                type: "text",
                className: "searchbar-searchInput",
                id: "searchbar-searchInput",
                placeholder: "Search for projects on PM..."
            })))
        };
        dn.propTypes = {
            intl: e.intlShape
        };
        const hn = It(dn)
          , mn = [{
            name: "Deutsch",
            lang: "de"
        }, {
            name: "English",
            lang: "en"
        }, {
            name: "Español (España)",
            lang: "es"
        }, {
            name: "Español Latinoamericano",
            lang: "es-419"
        }, {
            name: "Polski",
            lang: "pl"
        }];
        var gn = n(523)
          , yn = {};
        yn.styleTagTransform = Qt(),
        yn.setAttributes = Gt(),
        yn.insert = Ut().bind(null, "head"),
        yn.domAPI = jt(),
        yn.insertStyleElement = Vt(),
        Ht()(gn.A, yn),
        gn.A && gn.A.locals && gn.A.locals;
        const bn = n.p + "6600c001888b86107d37.svg"
          , vn = n.p + "e33addbd04bcc3b3ec16.svg"
          , En = n.p + "b4760c603d1d94ad532f.png";
        var wn = {
            id: "home.menubar.create",
            defaultMessage: "Create",
            description: "create button title"
        }
          , Tn = {
            id: "home.menubar.examples",
            defaultMessage: "Examples",
            description: "examples button title"
        }
          , Sn = {
            id: "home.menubar.status",
            defaultMessage: "Status",
            description: "status button title"
        }
          , kn = function(e) {
            var n = e.intl
              , r = [];
            return mn.forEach(function(e) {
                r.push(t.createElement("li", {
                    className: "menu-bar_language-option",
                    "data-language": e.lang
                }, e.name))
            }),
            t.createElement("nav", {
                className: "menu-bar"
            }, t.createElement("ul", {
                className: "menu-bar_ul"
            }, t.createElement("li", {
                className: "menu-bar_li_left"
            }, t.createElement("a", {
                className: "menu-bar_a",
                id: "languagesListToggle"
            }, t.createElement("img", {
                src: vn,
                alt: "Globe Icon"
            }), t.createElement("img", {
                src: En,
                alt: "Dropdown Caret"
            })), t.createElement("ul", {
                id: "languagesDropdown",
                className: "menu-bar_languages-dropdown"
            }, r)), t.createElement("li", {
                className: "menu-bar_li"
            }, t.createElement("a", {
                id: "IconImage",
                href: "https://dinosaurmod.github.io/Dino-Home"
            }, t.createElement("img", {
                src: "https://dinosaurmod.github.io/favicon.ico",
                alt: "Icon"
            }))), t.createElement("li", {
                className: "menu-bar_li"
            }, t.createElement("a", {
                className: "menu-bar_a",
                id: "darkModeToggle"
            }, t.createElement("img", {
                src: bn,
                alt: "Moon Icon"
            }))), t.createElement("li", {
                className: "menu-bar_li"
            }, t.createElement("a", {
                className: "menu-bar_a",
                href: "https://dinosaurmod.github.io/editor.html"
            }, n ? n.formatMessage(wn) : "Create")), t.createElement("li", {
                className: "menu-bar_li"
            }, t.createElement("a", {
                className: "menu-bar_a",
                href: "/Dino-Home/examples"
            }, n ? n.formatMessage(Tn) : "Examples")), t.createElement("li", {
                className: "menu-bar_li"
            }, t.createElement("a", {
                className: "menu-bar_a",
                href: "https://dinosaurmod.betteruptime.com/"
            }, n ? n.formatMessage(Sn) : "Status")), t.createElement("li", {
                className: "menu-bar_li"
            }, t.createElement(hn, {
                intl: n
            }))), t.createElement("label", {
                id: "icon"
            }, t.createElement("i", {
                className: "fas fa-bars"
            })))
        };
        kn.propTypes = {
            intl: e.intlShape
        };
        const xn = It(kn);
        function _n(e) {
            return _n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ,
            _n(e)
        }
        function Pn() {
            return Pn = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        ({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ,
            Pn.apply(null, arguments)
        }
        function Cn(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, On(r.key), r)
            }
        }
        function On(e) {
            var t = function(e) {
                if ("object" != _n(e) || !e)
                    return e;
                var t = e[Symbol.toPrimitive];
                if (void 0 !== t) {
                    var n = t.call(e, "string");
                    if ("object" != _n(n))
                        return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(e)
            }(e);
            return "symbol" == _n(t) ? t : t + ""
        }
        function Nn() {
            try {
                var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
            } catch (e) {}
            return (Nn = function() {
                return !!e
            }
            )()
        }
        function An(e) {
            return An = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            ,
            An(e)
        }
        function In(e, t) {
            return In = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            ,
            In(e, t)
        }
        const Rn = function(e) {
            function n() {
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                function(e, t, n) {
                    return t = An(t),
                    function(e, t) {
                        if (t && ("object" == _n(t) || "function" == typeof t))
                            return t;
                        if (void 0 !== t)
                            throw new TypeError("Derived constructors may only return object or undefined");
                        return function(e) {
                            if (void 0 === e)
                                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return e
                        }(e)
                    }(e, Nn() ? Reflect.construct(t, n || [], An(e).constructor) : t.apply(e, n))
                }(this, n, arguments)
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                }),
                t && In(e, t)
            }(n, e),
            r = n,
            o = [{
                key: "render",
                value: function() {
                    var e = Pn({}, (function(e) {
                        if (null == e)
                            throw new TypeError("Cannot destructure " + e)
                    }(this.props),
                    this.props));
                    return t.createElement(xn, e)
                }
            }],
            o && Cn(r.prototype, o),
            Object.defineProperty(r, "prototype", {
                writable: !1
            }),
            r;
            var r, o
        }(t.Component);
        var Mn = n(895)
          , Ln = {};
        Ln.styleTagTransform = Qt(),
        Ln.setAttributes = Gt(),
        Ln.insert = Ut().bind(null, "head"),
        Ln.domAPI = jt(),
        Ln.insertStyleElement = Vt(),
        Ht()(Mn.A, Ln),
        Mn.A && Mn.A.locals && Mn.A.locals;
        var Dn = {
            id: "home.footer.notaffiliated",
            defaultMessage: "DinosaurMod is not affiliated with Scratch, TurboWarp, PenguinMod, the Scratch Team, or the Scratch Foundation.",
            description: "not affiliated text"
        }
          , Hn = {
            id: "home.footer.website",
            defaultMessage: "Website",
            description: "create button title"
        }
          , Bn = {
            id: "home.footer.donate",
            defaultMessage: "Donate",
            description: "examples button title"
        }
          , jn = {
            id: "home.footer.community",
            defaultMessage: "Community",
            description: "examples button title"
        }
          , Fn = function(e) {
            var n = e.intl;
            return t.createElement("footer", {
                className: "footer"
            }, t.createElement("h1", null, n ? n.formatMessage(Dn) : "DinosaurMod is not affiliated with Scratch, TurboWarp, PenguinMod, the Scratch Team, or the Scratch Foundation."), t.createElement("div", {
                className: "footer-row"
            }, t.createElement("h3", null, n ? n.formatMessage(Hn) : "Website"), t.createElement("a", {
                href: "https://dinosaurmod.github.io/editor.html"
            }, "Editor"), t.createElement("a", {
                href: "https://dinosaurmod.github.io/credits.html"
            }, "Credits"), t.createElement("a", {
                href: "/Dino-Home/examples"
            }, "Examples"), t.createElement("a", {
                href: "https://github.com/Dinosaurmod"
            }, "Source"), t.createElement("a", {
                href: "https://dinosaurmod.betteruptime.com/"
            }, "Status")), t.createElement("div", {
                className: "footer-row"
            }, t.createElement("h3", null, n ? n.formatMessage(jn) : "Community"), t.createElement("a", {
                href: "https://github.com/Dinosaurmod/dino-home/issues"
            }, "Report an Issue")), t.createElement("div", {
                className: "footer-row"
            }, t.createElement("h3", null, n ? n.formatMessage(Bn) : "Donate"), t.createElement("a", {
                href: "https://penguinmod.com/donate"
            }, "PenguinMod"), t.createElement("a", {
                href: "https://github.com/sponsors/GarboMuffin"
            }, "TurboWarp"), t.createElement("a", {
                href: "https://www.scratchfoundation.org/donate"
            }, "Scratch")))
        };
        Fn.propTypes = {
            intl: e.intlShape
        };
        const Un = It(Fn);
        function zn(e) {
            return zn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ,
            zn(e)
        }
        function Gn() {
            return Gn = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        ({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ,
            Gn.apply(null, arguments)
        }
        function $n(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, Vn(r.key), r)
            }
        }
        function Vn(e) {
            var t = function(e) {
                if ("object" != zn(e) || !e)
                    return e;
                var t = e[Symbol.toPrimitive];
                if (void 0 !== t) {
                    var n = t.call(e, "string");
                    if ("object" != zn(n))
                        return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(e)
            }(e);
            return "symbol" == zn(t) ? t : t + ""
        }
        function Wn() {
            try {
                var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
            } catch (e) {}
            return (Wn = function() {
                return !!e
            }
            )()
        }
        function Qn(e) {
            return Qn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            ,
            Qn(e)
        }
        function Kn(e, t) {
            return Kn = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            ,
            Kn(e, t)
        }
        const Xn = function(e) {
            function n() {
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                function(e, t, n) {
                    return t = Qn(t),
                    function(e, t) {
                        if (t && ("object" == zn(t) || "function" == typeof t))
                            return t;
                        if (void 0 !== t)
                            throw new TypeError("Derived constructors may only return object or undefined");
                        return function(e) {
                            if (void 0 === e)
                                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return e
                        }(e)
                    }(e, Wn() ? Reflect.construct(t, n || [], Qn(e).constructor) : t.apply(e, n))
                }(this, n, arguments)
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                }),
                t && Kn(e, t)
            }(n, e),
            r = n,
            o = [{
                key: "render",
                value: function() {
                    var e = Gn({}, (function(e) {
                        if (null == e)
                            throw new TypeError("Cannot destructure " + e)
                    }(this.props),
                    this.props));
                    return t.createElement(Un, e)
                }
            }],
            o && $n(r.prototype, o),
            Object.defineProperty(r, "prototype", {
                writable: !1
            }),
            r;
            var r, o
        }(t.Component);
        var qn = n(685)
          , Yn = {};
        Yn.styleTagTransform = Qt(),
        Yn.setAttributes = Gt(),
        Yn.insert = Ut().bind(null, "head"),
        Yn.domAPI = jt(),
        Yn.insertStyleElement = Vt(),
        Ht()(qn.A, Yn),
        qn.A && qn.A.locals && qn.A.locals;
        const Zn = n.p + "746c2f6c886e410b3962.svg"
          , Jn = function() {
            window.location.href = "https://dinosaurmod.github.io/editor.html"
        };
        var er = function(e) {
            return e.intl,
            t.createElement("div", {
                className: "section-info"
            }, t.createElement("h2", null, "Block-based coding with many capabilities"), t.createElement("h2", null, "Built off of ", t.createElement("a", {
                style: {
                    textDecoration: "underline"
                },
                href: "https://scratch.mit.edu"
            }, "Scratch"), ", ", t.createElement("a", {
                style: {
                    textDecoration: "underline"
                },
                href: "https://turbowarp.org"
            }, "TurboWarp"), " and ", t.createElement("a", {
                style: {
                    textDecoration: "underline"
                },
                href: "https://penguinmod.com"
            }, "PenguinMod"), "."), t.createElement("button", {
                onClick: Jn
            }, t.createElement("img", {
                src: Zn
            }), "Start Creating"))
        };
        er.propTypes = {
            intl: e.intlShape
        };
        const tr = It(er);
        function nr(e) {
            return nr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ,
            nr(e)
        }
        function rr() {
            return rr = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        ({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ,
            rr.apply(null, arguments)
        }
        function or(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, ir(r.key), r)
            }
        }
        function ir(e) {
            var t = function(e) {
                if ("object" != nr(e) || !e)
                    return e;
                var t = e[Symbol.toPrimitive];
                if (void 0 !== t) {
                    var n = t.call(e, "string");
                    if ("object" != nr(n))
                        return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(e)
            }(e);
            return "symbol" == nr(t) ? t : t + ""
        }
        function ar() {
            try {
                var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
            } catch (e) {}
            return (ar = function() {
                return !!e
            }
            )()
        }
        function lr(e) {
            return lr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            ,
            lr(e)
        }
        function ur(e, t) {
            return ur = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            ,
            ur(e, t)
        }
        const cr = function(e) {
            function n() {
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                function(e, t, n) {
                    return t = lr(t),
                    function(e, t) {
                        if (t && ("object" == nr(t) || "function" == typeof t))
                            return t;
                        if (void 0 !== t)
                            throw new TypeError("Derived constructors may only return object or undefined");
                        return function(e) {
                            if (void 0 === e)
                                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return e
                        }(e)
                    }(e, ar() ? Reflect.construct(t, n || [], lr(e).constructor) : t.apply(e, n))
                }(this, n, arguments)
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                }),
                t && ur(e, t)
            }(n, e),
            r = n,
            o = [{
                key: "render",
                value: function() {
                    var e = rr({}, (function(e) {
                        if (null == e)
                            throw new TypeError("Cannot destructure " + e)
                    }(this.props),
                    this.props));
                    return t.createElement(tr, e)
                }
            }],
            o && or(r.prototype, o),
            Object.defineProperty(r, "prototype", {
                writable: !1
            }),
            r;
            var r, o
        }(t.Component);
        var sr = n(251)
          , fr = {};
        fr.styleTagTransform = Qt(),
        fr.setAttributes = Gt(),
        fr.insert = Ut().bind(null, "head"),
        fr.domAPI = jt(),
        fr.insertStyleElement = Vt(),
        Ht()(sr.A, fr),
        sr.A && sr.A.locals && sr.A.locals;
        var pr = function(e) {
            return e.intl,
            t.createElement("div", {
                id: "recent-changes"
            }, t.createElement("div", {
                className: "header"
            }, t.createElement("span", null, "Recent changes"), t.createElement("a", {
                href: "https://github.com/dinosaurmod",
                target: "_blank",
                rel: "noopener noreferrer"
            }, "See more")), t.createElement("ul", {
                className: "commit-list"
            }), t.createElement("div", {
                id: "error-message",
                style: {
                    display: "none"
                }
            }, "Failed to load recent changes."))
        };
        pr.propTypes = {
            intl: e.intlShape
        };
        const dr = It(pr);
        function hr(e) {
            return hr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ,
            hr(e)
        }
        function mr() {
            return mr = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        ({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ,
            mr.apply(null, arguments)
        }
        function gr(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, yr(r.key), r)
            }
        }
        function yr(e) {
            var t = function(e) {
                if ("object" != hr(e) || !e)
                    return e;
                var t = e[Symbol.toPrimitive];
                if (void 0 !== t) {
                    var n = t.call(e, "string");
                    if ("object" != hr(n))
                        return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(e)
            }(e);
            return "symbol" == hr(t) ? t : t + ""
        }
        function br() {
            try {
                var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
            } catch (e) {}
            return (br = function() {
                return !!e
            }
            )()
        }
        function vr(e) {
            return vr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            ,
            vr(e)
        }
        function Er(e, t) {
            return Er = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            ,
            Er(e, t)
        }
        const wr = function(e) {
            function n() {
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                function(e, t, n) {
                    return t = vr(t),
                    function(e, t) {
                        if (t && ("object" == hr(t) || "function" == typeof t))
                            return t;
                        if (void 0 !== t)
                            throw new TypeError("Derived constructors may only return object or undefined");
                        return function(e) {
                            if (void 0 === e)
                                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return e
                        }(e)
                    }(e, br() ? Reflect.construct(t, n || [], vr(e).constructor) : t.apply(e, n))
                }(this, n, arguments)
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                }),
                t && Er(e, t)
            }(n, e),
            r = n,
            o = [{
                key: "render",
                value: function() {
                    var e = mr({}, (function(e) {
                        if (null == e)
                            throw new TypeError("Cannot destructure " + e)
                    }(this.props),
                    this.props));
                    return t.createElement(dr, e)
                }
            }],
            o && gr(r.prototype, o),
            Object.defineProperty(r, "prototype", {
                writable: !1
            }),
            r;
            var r, o
        }(t.Component);
        var Tr = n(556)
          , Sr = n.n(Tr)
          , kr = n(668)
          , xr = {};
        xr.styleTagTransform = Qt(),
        xr.setAttributes = Gt(),
        xr.insert = Ut().bind(null, "head"),
        xr.domAPI = jt(),
        xr.insertStyleElement = Vt(),
        Ht()(kr.A, xr),
        kr.A && kr.A.locals && kr.A.locals;
        var _r = function(e) {
            e.intl;
            var n = e.size
              , r = void 0 === n ? "1rem" : n;
            return t.createElement("div", {
                id: "gap",
                style: {
                    height: r
                }
            })
        };
        _r.propTypes = {
            size: Sr().string,
            intl: e.intlShape
        };
        const Pr = It(_r);
        function Cr(e) {
            return Cr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ,
            Cr(e)
        }
        var Or = ["size"];
        function Nr() {
            return Nr = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        ({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ,
            Nr.apply(null, arguments)
        }
        function Ar(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, Ir(r.key), r)
            }
        }
        function Ir(e) {
            var t = function(e) {
                if ("object" != Cr(e) || !e)
                    return e;
                var t = e[Symbol.toPrimitive];
                if (void 0 !== t) {
                    var n = t.call(e, "string");
                    if ("object" != Cr(n))
                        return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(e)
            }(e);
            return "symbol" == Cr(t) ? t : t + ""
        }
        function Rr() {
            try {
                var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
            } catch (e) {}
            return (Rr = function() {
                return !!e
            }
            )()
        }
        function Mr(e) {
            return Mr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            ,
            Mr(e)
        }
        function Lr(e, t) {
            return Lr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            ,
            Lr(e, t)
        }
        var Dr = function(e) {
            function n() {
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                function(e, t, n) {
                    return t = Mr(t),
                    function(e, t) {
                        if (t && ("object" == Cr(t) || "function" == typeof t))
                            return t;
                        if (void 0 !== t)
                            throw new TypeError("Derived constructors may only return object or undefined");
                        return function(e) {
                            if (void 0 === e)
                                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return e
                        }(e)
                    }(e, Rr() ? Reflect.construct(t, n || [], Mr(e).constructor) : t.apply(e, n))
                }(this, n, arguments)
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                }),
                t && Lr(e, t)
            }(n, e),
            r = n,
            o = [{
                key: "render",
                value: function() {
                    var e = this.props
                      , n = e.size
                      , r = function(e, t) {
                        if (null == e)
                            return {};
                        var n, r, o = function(e, t) {
                            if (null == e)
                                return {};
                            var n = {};
                            for (var r in e)
                                if ({}.hasOwnProperty.call(e, r)) {
                                    if (-1 !== t.indexOf(r))
                                        continue;
                                    n[r] = e[r]
                                }
                            return n
                        }(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var i = Object.getOwnPropertySymbols(e);
                            for (r = 0; r < i.length; r++)
                                n = i[r],
                                -1 === t.indexOf(n) && {}.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                        }
                        return o
                    }(e, Or);
                    return t.createElement(Pr, Nr({
                        size: n
                    }, r))
                }
            }],
            o && Ar(r.prototype, o),
            Object.defineProperty(r, "prototype", {
                writable: !1
            }),
            r;
            var r, o
        }(t.Component);
        Dr.propTypes = {
            size: Sr().string,
            intl: e.intlShape
        };
        const Hr = Dr;
        var Br = n(165)
          , jr = {};
        jr.styleTagTransform = Qt(),
        jr.setAttributes = Gt(),
        jr.insert = Ut().bind(null, "head"),
        jr.domAPI = jt(),
        jr.insertStyleElement = Vt(),
        Ht()(Br.A, jr),
        Br.A && Br.A.locals && Br.A.locals;
        const Fr = function(e) {
            e.preventDefault();
            var t, n, r = e.target.username.value, o = e.target.password.value, i = e.target.email.value;
            function a(e) {
                var t = document.getElementById("signup-error-message");
                t.style.display = "block",
                t.style.color = "red",
                t.innerText = String(e),
                console.error(String(e))
            }
            r.length < 3 ? a("Username must be at least 3 characters long.") : r.length > 20 ? a("Username must be shorter than 20 characters long.") : /\s/.test(r) ? a("Username must not include any spaces.") : (console.log("Your username, email and Password:", {
                username: r,
                email: i,
                password: o
            }),
            t = "Just to let you know, this doesn't actually do anything",
            (n = document.getElementById("signup-error-message")).style.display = "block",
            n.style.color = "yellow",
            n.innerText = String(t),
            console.warn(String(t)))
        };
        var Ur = function(e) {
            return e.intl,
            t.createElement("form", {
                id: "signup-div",
                onSubmit: Fr
            }, t.createElement("h2", null, "DinosaurMod"), t.createElement(Hr, {
                size: "10px"
            }), t.createElement("p", null, "Create your personal account"), t.createElement(Hr, {
                size: "18px"
            }), t.createElement("div", {
                id: "signup-username-div"
            }, t.createElement("h3", null, "Username"), t.createElement("input", {
                type: "text",
                id: "signup-username-input",
                name: "username",
                required: !0
            })), t.createElement(Hr, {
                size: "18px"
            }), t.createElement("div", {
                id: "signup-email-div"
            }, t.createElement("h3", null, "Email"), t.createElement("input", {
                type: "email",
                id: "signup-email-input",
                name: "email",
                required: !0
            })), t.createElement(Hr, {
                size: "18px"
            }), t.createElement("div", {
                id: "signup-password-div"
            }, t.createElement("h3", null, "Password"), t.createElement("input", {
                type: "password",
                id: "signup-password-input",
                name: "password",
                required: !0
            })), t.createElement(Hr, {
                size: "18px"
            }), t.createElement("p", {
                id: "signup-error-message",
                style: {
                    color: "red",
                    display: "none",
                    fontStyle: "italic"
                }
            }), t.createElement(Hr, {
                size: "5px"
            }), t.createElement("button", {
                id: "signup-submit-button",
                type: "submit"
            }, "Sign Up"))
        };
        Ur.propTypes = {
            intl: e.intlShape
        };
        const zr = It(Ur);
        function Gr(e) {
            return Gr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ,
            Gr(e)
        }
        function $r() {
            return $r = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        ({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ,
            $r.apply(null, arguments)
        }
        function Vr(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, Wr(r.key), r)
            }
        }
        function Wr(e) {
            var t = function(e) {
                if ("object" != Gr(e) || !e)
                    return e;
                var t = e[Symbol.toPrimitive];
                if (void 0 !== t) {
                    var n = t.call(e, "string");
                    if ("object" != Gr(n))
                        return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(e)
            }(e);
            return "symbol" == Gr(t) ? t : t + ""
        }
        function Qr() {
            try {
                var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
            } catch (e) {}
            return (Qr = function() {
                return !!e
            }
            )()
        }
        function Kr(e) {
            return Kr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            ,
            Kr(e)
        }
        function Xr(e, t) {
            return Xr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            ,
            Xr(e, t)
        }
        const qr = function(e) {
            function n() {
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                function(e, t, n) {
                    return t = Kr(t),
                    function(e, t) {
                        if (t && ("object" == Gr(t) || "function" == typeof t))
                            return t;
                        if (void 0 !== t)
                            throw new TypeError("Derived constructors may only return object or undefined");
                        return function(e) {
                            if (void 0 === e)
                                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return e
                        }(e)
                    }(e, Qr() ? Reflect.construct(t, n || [], Kr(e).constructor) : t.apply(e, n))
                }(this, n, arguments)
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                }),
                t && Xr(e, t)
            }(n, e),
            r = n,
            o = [{
                key: "render",
                value: function() {
                    var e = $r({}, (function(e) {
                        if (null == e)
                            throw new TypeError("Cannot destructure " + e)
                    }(this.props),
                    this.props));
                    return t.createElement(zr, e)
                }
            }],
            o && Vr(r.prototype, o),
            Object.defineProperty(r, "prototype", {
                writable: !1
            }),
            r;
            var r, o
        }(t.Component);
        var Yr = n(683)
          , Zr = {};
        Zr.styleTagTransform = Qt(),
        Zr.setAttributes = Gt(),
        Zr.insert = Ut().bind(null, "head"),
        Zr.domAPI = jt(),
        Zr.insertStyleElement = Vt(),
        Ht()(Yr.A, Zr),
        Yr.A && Yr.A.locals && Yr.A.locals;
        var Jr = n(844)
          , eo = {};
        eo.styleTagTransform = Qt(),
        eo.setAttributes = Gt(),
        eo.insert = Ut().bind(null, "head"),
        eo.domAPI = jt(),
        eo.insertStyleElement = Vt(),
        Ht()(Jr.A, eo),
        Jr.A && Jr.A.locals && Jr.A.locals;
        var to = function(e) {
            e.intl;
            var n = e.label
              , r = e.link;
            return t.createElement("a", {
                href: r,
                className: "sectionInfoButton"
            }, n)
        };
        to.propTypes = {
            intl: e.intlShape,
            label: Sr().string.isRequired,
            link: Sr().string
        };
        const no = It(to);
        var ro = function(e) {
            var n = e.intl;
            return t.createElement("div", {
                className: "sectionLinks"
            }, t.createElement(no, {
                intl: n,
                label: "Packager",
                link: "https://dinosaurmod.github.io/Dinosaurmod-Packager"
            }), t.createElement(no, {
                intl: n,
                label: "Credits",
                link: "https://dinosaurmod.github.io/credits.html"
            }), t.createElement(no, {
                intl: n,
                label: "GitHub",
                link: "https://github.com/Dinosaurmod"
            }))
        };
        ro.propTypes = {
            intl: e.intlShape
        };
        const oo = It(ro);
        function io(e) {
            return io = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ,
            io(e)
        }
        function ao() {
            return ao = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        ({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ,
            ao.apply(null, arguments)
        }
        function lo(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, uo(r.key), r)
            }
        }
        function uo(e) {
            var t = function(e) {
                if ("object" != io(e) || !e)
                    return e;
                var t = e[Symbol.toPrimitive];
                if (void 0 !== t) {
                    var n = t.call(e, "string");
                    if ("object" != io(n))
                        return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(e)
            }(e);
            return "symbol" == io(t) ? t : t + ""
        }
        function co() {
            try {
                var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
            } catch (e) {}
            return (co = function() {
                return !!e
            }
            )()
        }
        function so(e) {
            return so = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            ,
            so(e)
        }
        function fo(e, t) {
            return fo = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            ,
            fo(e, t)
        }
        const po = function(e) {
            function n() {
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                function(e, t, n) {
                    return t = so(t),
                    function(e, t) {
                        if (t && ("object" == io(t) || "function" == typeof t))
                            return t;
                        if (void 0 !== t)
                            throw new TypeError("Derived constructors may only return object or undefined");
                        return function(e) {
                            if (void 0 === e)
                                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return e
                        }(e)
                    }(e, co() ? Reflect.construct(t, n || [], so(e).constructor) : t.apply(e, n))
                }(this, n, arguments)
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                }),
                t && fo(e, t)
            }(n, e),
            r = n,
            o = [{
                key: "render",
                value: function() {
                    var e = ao({}, (function(e) {
                        if (null == e)
                            throw new TypeError("Cannot destructure " + e)
                    }(this.props),
                    this.props));
                    return t.createElement(oo, e)
                }
            }],
            o && lo(r.prototype, o),
            Object.defineProperty(r, "prototype", {
                writable: !1
            }),
            r;
            var r, o
        }(t.Component)
          , ho = n.p + "9b2a6e547d3617e51f00.png"
          , mo = n.p + "533c59face579d0c54c8.png";
        var go = n(115)
          , yo = {};
        yo.styleTagTransform = Qt(),
        yo.setAttributes = Gt(),
        yo.insert = Ut().bind(null, "head"),
        yo.domAPI = jt(),
        yo.insertStyleElement = Vt(),
        Ht()(go.A, yo),
        go.A && go.A.locals && go.A.locals;
        var bo = ["intl"];
        function vo() {
            return vo = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        ({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ,
            vo.apply(null, arguments)
        }
        var Eo = window.location.pathname
          , wo = function(e) {
            var n = sn()(e, "dispatch")
              , r = n.intl
              , o = function(e, t) {
                if (null == e)
                    return {};
                var n, r, o = function(e, t) {
                    if (null == e)
                        return {};
                    var n = {};
                    for (var r in e)
                        if ({}.hasOwnProperty.call(e, r)) {
                            if (-1 !== t.indexOf(r))
                                continue;
                            n[r] = e[r]
                        }
                    return n
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++)
                        n = i[r],
                        -1 === t.indexOf(n) && {}.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                }
                return o
            }(n, bo)
              , i = Eo.includes("examples")
              , a = Eo.includes("signup")
              , l = i ? "Welcome to the Examples Page of DinosaurMod!" : "Welcome to the Home Page of DinosaurMod!";
            return t.createElement(t.Fragment, null, t.createElement(Rn, vo({
                intl: r
            }, o)), !a && t.createElement("div", {
                className: "thats enough divs!!!"
            }, t.createElement(cr, vo({
                intl: r
            }, o)), t.createElement(po, vo({
                intl: r
            }, o)), t.createElement("section", null, t.createElement("h1", null, "DinosaurMod"), t.createElement("p", null, l)), t.createElement(wr, vo({
                intl: r
            }, o)), t.createElement(Hr, {
                size: "18px"
            }), !!i && t.createElement("div", {
                className: "section-content"
            }, t.createElement("div", {
                className: "image-card"
            }, t.createElement("img", {
                src: ho,
                alt: "Image"
            }), t.createElement("h3", null, "Dino Clicker"), t.createElement("a", {
                href: "https://dinosaurmod.github.io/?project_url=https://raw.githubusercontent.com/Dinosaurmod/examples/main/src/dino-files/DinoClicker.dino"
            }, "Try it out!")), t.createElement("div", {
                className: "image-card"
            }, t.createElement("img", {
                src: mo,
                alt: "Image"
            }), t.createElement("h3", null, "Swear Detector"), t.createElement("a", {
                href: "https://dinosaurmod.github.io/?project_url=https://raw.githubusercontent.com/Dinosaurmod/examples/main/src/dino-files/SwearDetector.dino"
            }, "Try it out!"))), t.createElement(Xn, vo({
                intl: r
            }, o))), !!a && t.createElement("div", {
                className: "page-wrapper"
            }, t.createElement(qr, vo({
                intl: r
            }, o))))
        };
        wo.propTypes = {
            intl: e.intlShape
        };
        const To = It(wo);
        function So(e) {
            return So = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ,
            So(e)
        }
        var ko = ["intl"];
        function xo() {
            return xo = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        ({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ,
            xo.apply(null, arguments)
        }
        function _o(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, Po(r.key), r)
            }
        }
        function Po(e) {
            var t = function(e) {
                if ("object" != So(e) || !e)
                    return e;
                var t = e[Symbol.toPrimitive];
                if (void 0 !== t) {
                    var n = t.call(e, "string");
                    if ("object" != So(n))
                        return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(e)
            }(e);
            return "symbol" == So(t) ? t : t + ""
        }
        function Co() {
            try {
                var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
            } catch (e) {}
            return (Co = function() {
                return !!e
            }
            )()
        }
        function Oo(e) {
            return Oo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            ,
            Oo(e)
        }
        function No(e, t) {
            return No = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            ,
            No(e, t)
        }
        var Ao = function(e) {
            function n() {
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                function(e, t, n) {
                    return t = Oo(t),
                    function(e, t) {
                        if (t && ("object" == So(t) || "function" == typeof t))
                            return t;
                        if (void 0 !== t)
                            throw new TypeError("Derived constructors may only return object or undefined");
                        return function(e) {
                            if (void 0 === e)
                                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return e
                        }(e)
                    }(e, Co() ? Reflect.construct(t, n || [], Oo(e).constructor) : t.apply(e, n))
                }(this, n, arguments)
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                }),
                t && No(e, t)
            }(n, e),
            r = n,
            o = [{
                key: "render",
                value: function() {
                    var e = this.props
                      , n = e.intl
                      , r = function(e, t) {
                        if (null == e)
                            return {};
                        var n, r, o = function(e, t) {
                            if (null == e)
                                return {};
                            var n = {};
                            for (var r in e)
                                if ({}.hasOwnProperty.call(e, r)) {
                                    if (-1 !== t.indexOf(r))
                                        continue;
                                    n[r] = e[r]
                                }
                            return n
                        }(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var i = Object.getOwnPropertySymbols(e);
                            for (r = 0; r < i.length; r++)
                                n = i[r],
                                -1 === t.indexOf(n) && {}.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                        }
                        return o
                    }(e, ko);
                    return t.createElement(To, xo({
                        intl: n
                    }, r))
                }
            }],
            o && _o(r.prototype, o),
            Object.defineProperty(r, "prototype", {
                writable: !1
            }),
            r;
            var r, o
        }(t.Component);
        Ao.propTypes = {
            intl: e.intlShape
        };
        const Io = It(Ao);
        var Ro = {
            de: qt,
            en: Yt,
            es: Zt,
            "es-419": Jt,
            pl: en
        }
          , Mo = localStorage.getItem("chosenLocale");
        r.render(t.createElement(Lt, {
            locale: Mo,
            messages: Ro[Mo]
        }, t.createElement(Io, null)), document.getElementById("root"))
    }
    )()
}
)();
