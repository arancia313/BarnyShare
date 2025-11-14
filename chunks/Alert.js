var te = Object.defineProperty;
var le = (s, e, l) => e in s ? te(s, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: l
}) : s[e] = l;
var K = (s, e, l) => (le(s, typeof e != "symbol" ? e + "" : e, l),
l);
import {S as Y, i as Z, s as p, q as ne, r as se, b as v, u as ae, J as E, h as y, o as $, e as N, g as d, v as H, d as w, f as j, k as I, a as q, l as B, m as A, c as x, n as b, H as z, G as P, y as M, z as U, A as G, B as O, K as oe, M as ie} from "./index.b59088e2.js";
const L = class {
    static getClosestLanguageCode(e) {
        if (typeof e != "string")
            return "en";
        if (e = e.toLowerCase(),
        L.languageCodes.includes(e))
            return e;
        const l = e.split("-");
        return L.languageCodes.includes(l[0]) ? l[0] : "en"
    }
    static async translate(e, l) {
        const t = L.getClosestLanguageCode(l)
          , n = await fetch(`https://trampoline.turbowarp.org/translate/translate?language=${t}&text=${encodeURIComponent(e)}`)
          , o = await n.json();
        if (!n.ok)
            throw new Error(o);
        return o.result
    }
}
;
let D = L;
K(D, "languageCodes", ["en", "cy", "zu", "ko", "az", "he", "mk", "am", "mr", "cs", "zh-cn", "la", "nn", "my", "ga", "es", "nl", "zh-tw", "pt-br", "kn", "uz", "ja", "is", "sk", "ht", "bg", "de", "gd", "et", "fi", "ar", "hu", "mt", "ro", "fa", "hi", "eo", "lt", "it", "el", "mi", "hr", "ca", "th", "hy", "id", "eu", "da", "ru", "sr", "gl", "lv", "nb", "tr", "fr", "sv", "sl", "ml", "be", "pl", "pt", "ku", "sq", "ms", "vi", "te", "uk", "mn", "es-419", "ja-hira"]);
function re(s) {
    let e;
    return {
        c() {
            e = ne(s[0])
        },
        l(l) {
            e = se(l, s[0])
        },
        m(l, t) {
            v(l, e, t)
        },
        p(l, [t]) {
            t & 1 && ae(e, l[0])
        },
        i: E,
        o: E,
        d(l) {
            l && y(e)
        }
    }
}
function fe(s, e, l) {
    let {text: t=""} = e;
    return $( () => {
        const n = navigator.language;
        D.translate(t, n).then(o => {
            l(0, t = o)
        }
        )
    }
    ),
    s.$$set = n => {
        "text"in n && l(0, t = n.text)
    }
    ,
    [t]
}
class J extends Y {
    constructor(e) {
        super(),
        Z(this, e, fe, re, p, {
            text: 0
        })
    }
}
function R(s, e, l) {
    const t = s.slice();
    return t[12] = e[l],
    t[18] = l,
    t
}
function V(s) {
    let e, l, t, n, o, a, i, r, _, m = s[5] && F(s);
    const S = [ue, ce]
      , C = [];
    function T(c, g) {
        return c[0] ? 1 : 0
    }
    n = T(s),
    o = C[n] = S[n](s);
    let u = s[8] && W(s)
      , h = s[3] && X(s);
    return {
        c() {
            e = I("div"),
            l = I("p"),
            m && m.c(),
            t = q(),
            o.c(),
            a = q(),
            u && u.c(),
            i = q(),
            h && h.c(),
            this.h()
        },
        l(c) {
            e = B(c, "DIV", {
                class: !0,
                style: !0
            });
            var g = A(e);
            l = B(g, "P", {
                class: !0
            });
            var k = A(l);
            m && m.l(k),
            t = x(k),
            o.l(k),
            a = x(k),
            u && u.l(k),
            i = x(k),
            h && h.l(k),
            k.forEach(y),
            g.forEach(y),
            this.h()
        },
        h() {
            b(l, "class", "svelte-19fkcef"),
            b(e, "class", "alert-banner svelte-19fkcef"),
            b(e, "style", r = `background: ${s[1]}; color: ${s[2]};`)
        },
        m(c, g) {
            v(c, e, g),
            z(e, l),
            m && m.m(l, null),
            z(l, t),
            C[n].m(l, null),
            z(l, a),
            u && u.m(l, null),
            z(l, i),
            h && h.m(l, null),
            _ = !0
        },
        p(c, g) {
            c[5] ? m ? m.p(c, g) : (m = F(c),
            m.c(),
            m.m(l, t)) : m && (m.d(1),
            m = null);
            let k = n;
            n = T(c),
            n === k ? C[n].p(c, g) : (H(),
            w(C[k], 1, 1, () => {
                C[k] = null
            }
            ),
            j(),
            o = C[n],
            o ? o.p(c, g) : (o = C[n] = S[n](c),
            o.c()),
            d(o, 1),
            o.m(l, a)),
            c[8] ? u ? (u.p(c, g),
            g & 256 && d(u, 1)) : (u = W(c),
            u.c(),
            d(u, 1),
            u.m(l, i)) : u && (H(),
            w(u, 1, 1, () => {
                u = null
            }
            ),
            j()),
            c[3] ? h ? h.p(c, g) : (h = X(c),
            h.c(),
            h.m(l, null)) : h && (h.d(1),
            h = null),
            (!_ || g & 6 && r !== (r = `background: ${c[1]}; color: ${c[2]};`)) && b(e, "style", r)
        },
        i(c) {
            _ || (d(o),
            d(u),
            _ = !0)
        },
        o(c) {
            w(o),
            w(u),
            _ = !1
        },
        d(c) {
            c && y(e),
            m && m.d(),
            C[n].d(),
            u && u.d(),
            h && h.d()
        }
    }
}
function F(s) {
    let e, l;
    return {
        c() {
            e = I("img"),
            this.h()
        },
        l(t) {
            e = B(t, "IMG", {
                src: !0,
                alt: !0,
                class: !0
            }),
            this.h()
        },
        h() {
            P(e.src, l = s[6]) || b(e, "src", l),
            b(e, "alt", s[7]),
            b(e, "class", "svelte-19fkcef")
        },
        m(t, n) {
            v(t, e, n)
        },
        p(t, n) {
            n & 64 && !P(e.src, l = t[6]) && b(e, "src", l),
            n & 128 && b(e, "alt", t[7])
        },
        d(t) {
            t && y(e)
        }
    }
}
function ce(s) {
    let e, l, t = s[14], n = [];
    for (let a = 0; a < t.length; a += 1)
        n[a] = Q(R(s, t, a));
    const o = a => w(n[a], 1, 1, () => {
        n[a] = null
    }
    );
    return {
        c() {
            for (let a = 0; a < n.length; a += 1)
                n[a].c();
            e = N()
        },
        l(a) {
            for (let i = 0; i < n.length; i += 1)
                n[i].l(a);
            e = N()
        },
        m(a, i) {
            for (let r = 0; r < n.length; r += 1)
                n[r] && n[r].m(a, i);
            v(a, e, i),
            l = !0
        },
        p(a, i) {
            if (i & 16384) {
                t = a[14];
                let r;
                for (r = 0; r < t.length; r += 1) {
                    const _ = R(a, t, r);
                    n[r] ? (n[r].p(_, i),
                    d(n[r], 1)) : (n[r] = Q(_),
                    n[r].c(),
                    d(n[r], 1),
                    n[r].m(e.parentNode, e))
                }
                for (H(),
                r = t.length; r < n.length; r += 1)
                    o(r);
                j()
            }
        },
        i(a) {
            if (!l) {
                for (let i = 0; i < t.length; i += 1)
                    d(n[i]);
                l = !0
            }
        },
        o(a) {
            n = n.filter(Boolean);
            for (let i = 0; i < n.length; i += 1)
                w(n[i]);
            l = !1
        },
        d(a) {
            ie(n, a),
            a && y(e)
        }
    }
}
function ue(s) {
    let e, l;
    return e = new J({
        props: {
            text: s[12]
        }
    }),
    {
        c() {
            M(e.$$.fragment)
        },
        l(t) {
            U(e.$$.fragment, t)
        },
        m(t, n) {
            G(e, t, n),
            l = !0
        },
        p(t, n) {
            const o = {};
            n & 4096 && (o.text = t[12]),
            e.$set(o)
        },
        i(t) {
            l || (d(e.$$.fragment, t),
            l = !0)
        },
        o(t) {
            w(e.$$.fragment, t),
            l = !1
        },
        d(t) {
            O(e, t)
        }
    }
}
function Q(s) {
    let e, l;
    return e = new J({
        props: {
            text: s[12] + (s[18] !== s[14].length - 1 ? "." : "")
        }
    }),
    {
        c() {
            M(e.$$.fragment)
        },
        l(t) {
            U(e.$$.fragment, t)
        },
        m(t, n) {
            G(e, t, n),
            l = !0
        },
        p: E,
        i(t) {
            l || (d(e.$$.fragment, t),
            l = !0)
        },
        o(t) {
            w(e.$$.fragment, t),
            l = !1
        },
        d(t) {
            O(e, t)
        }
    }
}
function W(s) {
    let e, l, t, n, o;
    return t = new J({
        props: {
            text: s[9]
        }
    }),
    {
        c() {
            e = I("a"),
            l = I("button"),
            M(t.$$.fragment),
            this.h()
        },
        l(a) {
            e = B(a, "A", {
                href: !0,
                class: !0
            });
            var i = A(e);
            l = B(i, "BUTTON", {
                style: !0,
                class: !0
            });
            var r = A(l);
            U(t.$$.fragment, r),
            r.forEach(y),
            i.forEach(y),
            this.h()
        },
        h() {
            b(l, "style", n = `color: ${s[11] ? "black" : s[1]}`),
            b(l, "class", "svelte-19fkcef"),
            b(e, "href", s[10]),
            b(e, "class", "svelte-19fkcef")
        },
        m(a, i) {
            v(a, e, i),
            z(e, l),
            G(t, l, null),
            o = !0
        },
        p(a, i) {
            const r = {};
            i & 512 && (r.text = a[9]),
            t.$set(r),
            (!o || i & 2050 && n !== (n = `color: ${a[11] ? "black" : a[1]}`)) && b(l, "style", n),
            (!o || i & 1024) && b(e, "href", a[10])
        },
        i(a) {
            o || (d(t.$$.fragment, a),
            o = !0)
        },
        o(a) {
            w(t.$$.fragment, a),
            o = !1
        },
        d(a) {
            a && y(e),
            O(t)
        }
    }
}
function X(s) {
    let e, l, t;
    return {
        c() {
            e = I("button"),
            this.h()
        },
        l(n) {
            e = B(n, "BUTTON", {
                class: !0
            }),
            A(e).forEach(y),
            this.h()
        },
        h() {
            b(e, "class", "alert-dismiss svelte-19fkcef")
        },
        m(n, o) {
            v(n, e, o),
            l || (t = oe(e, "click", s[16]),
            l = !0)
        },
        p: E,
        d(n) {
            n && y(e),
            l = !1,
            t()
        }
    }
}
function me(s) {
    let e, l, t = !s[13] && V(s);
    return {
        c() {
            t && t.c(),
            e = N()
        },
        l(n) {
            t && t.l(n),
            e = N()
        },
        m(n, o) {
            t && t.m(n, o),
            v(n, e, o),
            l = !0
        },
        p(n, [o]) {
            n[13] ? t && (H(),
            w(t, 1, 1, () => {
                t = null
            }
            ),
            j()) : t ? (t.p(n, o),
            o & 8192 && d(t, 1)) : (t = V(n),
            t.c(),
            d(t, 1),
            t.m(e.parentNode, e))
        },
        i(n) {
            l || (d(t),
            l = !0)
        },
        o(n) {
            w(t),
            l = !1
        },
        d(n) {
            t && t.d(n),
            n && y(e)
        }
    }
}
function he(s, e, l) {
    let t = !1
      , {text: n=""} = e
      , {textBreakup: o=!1} = e
      , {backColor: a="rgb(118, 80, 168)"} = e
      , {textColor: i="black"} = e
      , {dismissable: r=!0} = e
      , {onlyShowID: _=!1} = e
      , {hasImage: m=!0} = e
      , {imgSrc: S="/alert_icon.svg"} = e
      , {imgAlt: C="(!)"} = e
      , {hasButton: T=!1} = e
      , {buttonText: u=""} = e
      , {buttonHref: h="/"} = e
      , {buttonTooLight: c=!1} = e;
    const g = [];
    _ && (t = !0);
    const k = () => {
        if (!_)
            return;
        const f = `pm:alert-${_}`;
        localStorage.setItem(f, "closed")
    }
    ;
    if ($( () => {
        if (!_)
            return;
        const f = `pm:alert-${_}`;
        localStorage.getItem(f) !== "closed" && l(13, t = !1)
    }
    ),
    o)
        for (const f of n.split("."))
            g.push(f);
    const ee = () => {
        l(13, t = !0),
        _ && k()
    }
    ;
    return s.$$set = f => {
        "text"in f && l(12, n = f.text),
        "textBreakup"in f && l(0, o = f.textBreakup),
        "backColor"in f && l(1, a = f.backColor),
        "textColor"in f && l(2, i = f.textColor),
        "dismissable"in f && l(3, r = f.dismissable),
        "onlyShowID"in f && l(4, _ = f.onlyShowID),
        "hasImage"in f && l(5, m = f.hasImage),
        "imgSrc"in f && l(6, S = f.imgSrc),
        "imgAlt"in f && l(7, C = f.imgAlt),
        "hasButton"in f && l(8, T = f.hasButton),
        "buttonText"in f && l(9, u = f.buttonText),
        "buttonHref"in f && l(10, h = f.buttonHref),
        "buttonTooLight"in f && l(11, c = f.buttonTooLight)
    }
    ,
    [o, a, i, r, _, m, S, C, T, u, h, c, n, t, g, k, ee]
}
class be extends Y {
    constructor(e) {
        super(),
        Z(this, e, he, me, p, {
            text: 12,
            textBreakup: 0,
            backColor: 1,
            textColor: 2,
            dismissable: 3,
            onlyShowID: 4,
            hasImage: 5,
            imgSrc: 6,
            imgAlt: 7,
            hasButton: 8,
            buttonText: 9,
            buttonHref: 10,
            buttonTooLight: 11
        })
    }
}
export {be as A, J as N, D as a};
