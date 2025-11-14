import {S as L, i as P, s as Q, a as N, e as I, c as G, b as E, g as k, v as M, d as B, f as O, h as d, R as W, C as K, k as H, U as R, l as U, m as C, V, n as m, Z as q, p as D, H as T, K as Z, D as j, E as z, F as J, G as w} from "./index.b59088e2.js";
function S(f) {
    let e, l, n, t, a, s, h, c, _, b, u = f[5] && p(f);
    const r = f[9].default
      , o = K(r, f, f[8], null);
    return {
        c() {
            e = H("a"),
            l = H("button"),
            u && u.c(),
            n = N(),
            t = new R(!1),
            a = N(),
            o && o.c(),
            this.h()
        },
        l(i) {
            e = U(i, "A", {
                href: !0,
                target: !0,
                style: !0
            });
            var g = C(e);
            l = U(g, "BUTTON", {
                class: !0
            });
            var v = C(l);
            u && u.l(v),
            n = G(v),
            t = V(v, !1),
            a = G(v),
            o && o.l(v),
            v.forEach(d),
            g.forEach(d),
            this.h()
        },
        h() {
            t.a = a,
            m(l, "class", s = q((f[0] ? "button button-highlight" : "button") + (f[6] ? ` ${f[6]}` : "")) + " svelte-k0pse0"),
            m(e, "href", f[1]),
            m(e, "target", h = f[4] ? "_blank" : "_self"),
            D(e, "text-decoration", "none")
        },
        m(i, g) {
            E(i, e, g),
            T(e, l),
            u && u.m(l, null),
            T(l, n),
            t.m(f[3], l),
            T(l, a),
            o && o.m(l, null),
            c = !0,
            _ || (b = Z(l, "click", f[7]),
            _ = !0)
        },
        p(i, g) {
            i[5] ? u ? u.p(i, g) : (u = p(i),
            u.c(),
            u.m(l, n)) : u && (u.d(1),
            u = null),
            (!c || g & 8) && t.p(i[3]),
            o && o.p && (!c || g & 256) && j(o, r, i, i[8], c ? J(r, i[8], g, null) : z(i[8]), null),
            (!c || g & 65 && s !== (s = q((i[0] ? "button button-highlight" : "button") + (i[6] ? ` ${i[6]}` : "")) + " svelte-k0pse0")) && m(l, "class", s),
            (!c || g & 2) && m(e, "href", i[1]),
            (!c || g & 16 && h !== (h = i[4] ? "_blank" : "_self")) && m(e, "target", h)
        },
        i(i) {
            c || (k(o, i),
            c = !0)
        },
        o(i) {
            B(o, i),
            c = !1
        },
        d(i) {
            i && d(e),
            u && u.d(),
            o && o.d(i),
            _ = !1,
            b()
        }
    }
}
function p(f) {
    let e, l;
    return {
        c() {
            e = H("img"),
            this.h()
        },
        l(n) {
            e = U(n, "IMG", {
                src: !0,
                alt: !0,
                style: !0
            }),
            this.h()
        },
        h() {
            w(e.src, l = `/${f[5]}`) || m(e, "src", l),
            m(e, "alt", f[5]),
            D(e, "margin-right", "6px")
        },
        m(n, t) {
            E(n, e, t)
        },
        p(n, t) {
            t & 32 && !w(e.src, l = `/${n[5]}`) && m(e, "src", l),
            t & 32 && m(e, "alt", n[5])
        },
        d(n) {
            n && d(e)
        }
    }
}
function A(f) {
    let e, l, n, t, a, s, h, c, _ = f[5] && F(f);
    const b = f[9].default
      , u = K(b, f, f[8], null);
    return {
        c() {
            e = H("button"),
            _ && _.c(),
            l = N(),
            n = new R(!1),
            t = N(),
            u && u.c(),
            this.h()
        },
        l(r) {
            e = U(r, "BUTTON", {
                class: !0
            });
            var o = C(e);
            _ && _.l(o),
            l = G(o),
            n = V(o, !1),
            t = G(o),
            u && u.l(o),
            o.forEach(d),
            this.h()
        },
        h() {
            n.a = t,
            m(e, "class", a = q((f[0] ? "button button-highlight" : "button") + (f[6] ? ` ${f[6]}` : "") + (f[2] ? " button-toggled" : "")) + " svelte-k0pse0")
        },
        m(r, o) {
            E(r, e, o),
            _ && _.m(e, null),
            T(e, l),
            n.m(f[3], e),
            T(e, t),
            u && u.m(e, null),
            s = !0,
            h || (c = Z(e, "click", f[7]),
            h = !0)
        },
        p(r, o) {
            r[5] ? _ ? _.p(r, o) : (_ = F(r),
            _.c(),
            _.m(e, l)) : _ && (_.d(1),
            _ = null),
            (!s || o & 8) && n.p(r[3]),
            u && u.p && (!s || o & 256) && j(u, b, r, r[8], s ? J(b, r[8], o, null) : z(r[8]), null),
            (!s || o & 69 && a !== (a = q((r[0] ? "button button-highlight" : "button") + (r[6] ? ` ${r[6]}` : "") + (r[2] ? " button-toggled" : "")) + " svelte-k0pse0")) && m(e, "class", a)
        },
        i(r) {
            s || (k(u, r),
            s = !0)
        },
        o(r) {
            B(u, r),
            s = !1
        },
        d(r) {
            r && d(e),
            _ && _.d(),
            u && u.d(r),
            h = !1,
            c()
        }
    }
}
function F(f) {
    let e, l;
    return {
        c() {
            e = H("img"),
            this.h()
        },
        l(n) {
            e = U(n, "IMG", {
                src: !0,
                alt: !0,
                style: !0
            }),
            this.h()
        },
        h() {
            w(e.src, l = `/${f[5]}`) || m(e, "src", l),
            m(e, "alt", f[5]),
            D(e, "margin-right", "6px")
        },
        m(n, t) {
            E(n, e, t)
        },
        p(n, t) {
            t & 32 && !w(e.src, l = `/${n[5]}`) && m(e, "src", l),
            t & 32 && m(e, "alt", n[5])
        },
        d(n) {
            n && d(e)
        }
    }
}
function X(f) {
    let e, l, n, t = f[1] && S(f), a = !f[1] && A(f);
    return {
        c() {
            t && t.c(),
            e = N(),
            a && a.c(),
            l = I()
        },
        l(s) {
            t && t.l(s),
            e = G(s),
            a && a.l(s),
            l = I()
        },
        m(s, h) {
            t && t.m(s, h),
            E(s, e, h),
            a && a.m(s, h),
            E(s, l, h),
            n = !0
        },
        p(s, [h]) {
            s[1] ? t ? (t.p(s, h),
            h & 2 && k(t, 1)) : (t = S(s),
            t.c(),
            k(t, 1),
            t.m(e.parentNode, e)) : t && (M(),
            B(t, 1, 1, () => {
                t = null
            }
            ),
            O()),
            s[1] ? a && (M(),
            B(a, 1, 1, () => {
                a = null
            }
            ),
            O()) : a ? (a.p(s, h),
            h & 2 && k(a, 1)) : (a = A(s),
            a.c(),
            k(a, 1),
            a.m(l.parentNode, l))
        },
        i(s) {
            n || (k(t),
            k(a),
            n = !0)
        },
        o(s) {
            B(t),
            B(a),
            n = !1
        },
        d(s) {
            t && t.d(s),
            s && d(e),
            a && a.d(s),
            s && d(l)
        }
    }
}
function Y(f, e, l) {
    let {$$slots: n={}, $$scope: t} = e
      , {highlighted: a=!1} = e
      , {link: s=!1} = e
      , {toggled: h=!1} = e
      , {label: c=""} = e
      , {noredirect: _=!1} = e
      , {icon: b=!1} = e
      , {color: u=!1} = e;
    const r = W();
    function o() {
        r("click")
    }
    return f.$$set = i => {
        "highlighted"in i && l(0, a = i.highlighted),
        "link"in i && l(1, s = i.link),
        "toggled"in i && l(2, h = i.toggled),
        "label"in i && l(3, c = i.label),
        "noredirect"in i && l(4, _ = i.noredirect),
        "icon"in i && l(5, b = i.icon),
        "color"in i && l(6, u = i.color),
        "$$scope"in i && l(8, t = i.$$scope)
    }
    ,
    [a, s, h, c, _, b, u, o, t, n]
}
class $ extends L {
    constructor(e) {
        super(),
        P(this, e, Y, X, Q, {
            highlighted: 0,
            link: 1,
            toggled: 2,
            label: 3,
            noredirect: 4,
            icon: 5,
            color: 6
        })
    }
}
export {$ as B};
