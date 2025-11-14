import {S as V, i as q, s as A, C as B, k as d, a as D, l as g, m as p, c as z, h as _, n as u, b as y, H as h, g as m, v as I, d as v, f as L, D as N, E as P, F as w, o as F, q as H, r as M, p as S, u as U, y as j, z as G, A as J, B as K} from "./index.b59088e2.js";
import {L as k, N as O} from "./language.cbe9c3b0.js";
function E(f) {
    let s, a, o, r, t, i, e = f[1] && C(f);
    return {
        c() {
            s = d("div"),
            a = d("p"),
            o = d("b"),
            r = H(f[0]),
            t = D(),
            e && e.c(),
            this.h()
        },
        l(l) {
            s = g(l, "DIV", {
                class: !0
            });
            var n = p(s);
            a = g(n, "P", {
                style: !0
            });
            var c = p(a);
            o = g(c, "B", {});
            var b = p(o);
            r = M(b, f[0]),
            b.forEach(_),
            c.forEach(_),
            t = z(n),
            e && e.l(n),
            n.forEach(_),
            this.h()
        },
        h() {
            S(a, "margin-block", "6px"),
            u(s, "class", "header svelte-89pxgo")
        },
        m(l, n) {
            y(l, s, n),
            h(s, a),
            h(a, o),
            h(o, r),
            h(s, t),
            e && e.m(s, null),
            i = !0
        },
        p(l, n) {
            (!i || n & 1) && U(r, l[0]),
            l[1] ? e ? (e.p(l, n),
            n & 2 && m(e, 1)) : (e = C(l),
            e.c(),
            m(e, 1),
            e.m(s, null)) : e && (I(),
            v(e, 1, 1, () => {
                e = null
            }
            ),
            L())
        },
        i(l) {
            i || (m(e),
            i = !0)
        },
        o(l) {
            v(e),
            i = !1
        },
        d(l) {
            l && _(s),
            e && e.d()
        }
    }
}
function C(f) {
    let s, a, o, r;
    return o = new O({
        props: {
            text: "See more",
            key: "home.seemore",
            lang: f[4]
        }
    }),
    {
        c() {
            s = d("p"),
            a = d("a"),
            j(o.$$.fragment),
            this.h()
        },
        l(t) {
            s = g(t, "P", {
                style: !0
            });
            var i = p(s);
            a = g(i, "A", {
                href: !0,
                class: !0
            });
            var e = p(a);
            G(o.$$.fragment, e),
            e.forEach(_),
            i.forEach(_),
            this.h()
        },
        h() {
            u(a, "href", f[1]),
            u(a, "class", "svelte-89pxgo"),
            S(s, "margin-block", "6px")
        },
        m(t, i) {
            y(t, s, i),
            h(s, a),
            J(o, a, null),
            r = !0
        },
        p(t, i) {
            const e = {};
            i & 16 && (e.lang = t[4]),
            o.$set(e),
            (!r || i & 2) && u(a, "href", t[1])
        },
        i(t) {
            r || (m(o.$$.fragment, t),
            r = !0)
        },
        o(t) {
            v(o.$$.fragment, t),
            r = !1
        },
        d(t) {
            t && _(s),
            K(o)
        }
    }
}
function Q(f) {
    let s, a, o, r, t = f[0] && E(f);
    const i = f[6].default
      , e = B(i, f, f[5], null);
    return {
        c() {
            s = d("div"),
            t && t.c(),
            a = D(),
            o = d("div"),
            e && e.c(),
            this.h()
        },
        l(l) {
            s = g(l, "DIV", {
                class: !0,
                style: !0
            });
            var n = p(s);
            t && t.l(n),
            a = z(n),
            o = g(n, "DIV", {
                style: !0,
                class: !0
            });
            var c = p(o);
            e && e.l(c),
            c.forEach(_),
            n.forEach(_),
            this.h()
        },
        h() {
            u(o, "style", f[3]),
            u(o, "class", "container svelte-89pxgo"),
            u(s, "class", "section svelte-89pxgo"),
            u(s, "style", f[2])
        },
        m(l, n) {
            y(l, s, n),
            t && t.m(s, null),
            h(s, a),
            h(s, o),
            e && e.m(o, null),
            r = !0
        },
        p(l, [n]) {
            l[0] ? t ? (t.p(l, n),
            n & 1 && m(t, 1)) : (t = E(l),
            t.c(),
            m(t, 1),
            t.m(s, a)) : t && (I(),
            v(t, 1, 1, () => {
                t = null
            }
            ),
            L()),
            e && e.p && (!r || n & 32) && N(e, i, l, l[5], r ? w(i, l[5], n, null) : P(l[5]), null),
            (!r || n & 8) && u(o, "style", l[3]),
            (!r || n & 4) && u(s, "style", l[2])
        },
        i(l) {
            r || (m(t),
            m(e, l),
            r = !0)
        },
        o(l) {
            v(t),
            v(e, l),
            r = !1
        },
        d(l) {
            l && _(s),
            t && t.d(),
            e && e.d(l)
        }
    }
}
function R(f, s, a) {
    let {$$slots: o={}, $$scope: r} = s
      , {header: t=!1} = s
      , {seemore: i=!1} = s
      , {style: e=""} = s
      , {stylec: l=""} = s
      , n = "en";
    return F( () => {
        k.forceUpdate()
    }
    ),
    k.onChange(c => {
        a(4, n = c)
    }
    ),
    f.$$set = c => {
        "header"in c && a(0, t = c.header),
        "seemore"in c && a(1, i = c.seemore),
        "style"in c && a(2, e = c.style),
        "stylec"in c && a(3, l = c.stylec),
        "$$scope"in c && a(5, r = c.$$scope)
    }
    ,
    [t, i, e, l, n, r, o]
}
class X extends V {
    constructor(s) {
        super(),
        q(this, s, R, Q, A, {
            header: 0,
            seemore: 1,
            style: 2,
            stylec: 3
        })
    }
}
export {X as C};
