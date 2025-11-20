    import {S as ie, i as ue, s as ce, k as i, q as f, a as C, y as X, l as u, m as v, r as h, h as l, c as F, z as Y, n as s, G as me, b as N, H as t, A as Z, u as ee, g as te, d as se, B as ae, I as fe} from "../chunks/index.b59088e2.js";
import {p as he} from "../chunks/stores.80624118.js";
import {N as _e} from "../chunks/NavigationBar.5aa35198.js";
import {N as pe} from "../chunks/NavMargin.6e1052a7.js";
import {C as ve} from "../chunks/confused.296210ea.js";
function ge(I) {
    let o, c, S, g = I[0].status + "", k, B, $, H, d, x, r, y, W, q, L, R, n, V, b, j, G, J, E, _, re, K, m, O, A = I[0].status + "", P, Q, D = I[0].error.message + "", T, z;
    return $ = new _e({}),
    d = new pe({}),
    y = new ve({
        props: {
            height: "12rem"
        }
    }),
    {
        c() {
            o = i("head"),
            c = i("title"),
            S = f("BarnyWarp - "),
            k = f(g),
            B = C(),
            X($.$$.fragment),
            H = C(),
            X(d.$$.fragment),
            x = C(),
            r = i("div"),
            X(y.$$.fragment),
            W = C(),
            q = i("h1"),
            L = f("Whoops!"),
            R = C(),
            n = i("p"),
            V = f("Hhm. Something's not quite right. Maybe you should "),
            b = i("a"),
            j = f("go back?"),
            G = i("br"),
            J = C(),
            E = i("a"),
            _ = i("img"),
            K = C(),
            m = i("p"),
            O = f("Error: "),
            P = f(A),
            Q = f(" - "),
            T = f(D),
            this.h()
        },
        l(e) {
            o = u(e, "HEAD", {
                class: !0
            });
            var a = v(o);
            c = u(a, "TITLE", {
                class: !0
            });
            var U = v(c);
            S = h(U, "BarnyWarp - "),
            k = h(U, g),
            U.forEach(l),
            a.forEach(l),
            B = F(e),
            Y($.$$.fragment, e),
            H = F(e),
            Y(d.$$.fragment, e),
            x = F(e),
            r = u(e, "DIV", {
                class: !0
            });
            var p = v(r);
            Y(y.$$.fragment, p),
            W = F(p),
            q = u(p, "H1", {
                class: !0
            });
            var le = v(q);
            L = h(le, "Whoops!"),
            le.forEach(l),
            R = F(p),
            n = u(p, "P", {
                class: !0
            });
            var w = v(n);
            V = h(w, "Hhm. Something's not quite right. Maybe you should "),
            b = u(w, "A", {
                href: !0,
                class: !0
            });
            var oe = v(b);
            j = h(oe, "go back?"),
            oe.forEach(l),
            G = u(w, "BR", {
                class: !0
            }),
            J = F(w),
            E = u(w, "A", {
                href: !0,
                class: !0
            });
            var ne = v(E);
            _ = u(ne, "IMG", {
                src: !0,
                alt: !0,
                border: !0,
                class: !0
            }),
            ne.forEach(l),
            w.forEach(l),
            K = F(p),
            m = u(p, "P", {
                class: !0
            });
            var M = v(m);
            O = h(M, "Error: "),
            P = h(M, A),
            Q = h(M, " - "),
            T = h(M, D),
            M.forEach(l),
            p.forEach(l),
            this.h()
        },
        h() {
            s(c, "class", "svelte-1hy3zah"),
            s(o, "class", "svelte-1hy3zah"),
            s(q, "class", "svelte-1hy3zah"),
            s(b, "href", "../"),
            s(b, "class", "svelte-1hy3zah"),
            s(G, "class", "svelte-1hy3zah"),
            me(_.src, re = "https://s01.flagcounter.com/count2/c39u/bg_FFFFFF/txt_000000/border_CCCCCC/columns_8/maxflags_250/viewers_0/labels_1/pageviews_0/flags_0/percent_0/") || s(_, "src", re),
            s(_, "alt", "Flag Counter"),
            s(_, "border", "0"),
            s(_, "class", "svelte-1hy3zah"),
            s(E, "href", "https://info.flagcounter.com/c39u"),
            s(E, "class", "svelte-1hy3zah"),
            s(n, "class", "svelte-1hy3zah"),
            s(m, "class", "svelte-1hy3zah"),
            s(r, "class", "center-div svelte-1hy3zah")
        },
        m(e, a) {
            N(e, o, a),
            t(o, c),
            t(c, S),
            t(c, k),
            N(e, B, a),
            Z($, e, a),
            N(e, H, a),
            Z(d, e, a),
            N(e, x, a),
            N(e, r, a),
            Z(y, r, null),
            t(r, W),
            t(r, q),
            t(q, L),
            t(r, R),
            t(r, n),
            t(n, V),
            t(n, b),
            t(b, j),
            t(n, G),
            t(n, J),
            t(n, E),
            t(E, _),
            t(r, K),
            t(r, m),
            t(m, O),
            t(m, P),
            t(m, Q),
            t(m, T),
            z = !0
        },
        p(e, [a]) {
            (!z || a & 1) && g !== (g = e[0].status + "") && ee(k, g),
            (!z || a & 1) && A !== (A = e[0].status + "") && ee(P, A),
            (!z || a & 1) && D !== (D = e[0].error.message + "") && ee(T, D)
        },
        i(e) {
            z || (te($.$$.fragment, e),
            te(d.$$.fragment, e),
            te(y.$$.fragment, e),
            z = !0)
        },
        o(e) {
            se($.$$.fragment, e),
            se(d.$$.fragment, e),
            se(y.$$.fragment, e),
            z = !1
        },
        d(e) {
            e && l(o),
            e && l(B),
            ae($, e),
            e && l(H),
            ae(d, e),
            e && l(x),
            e && l(r),
            ae(y)
        }
    }
}
function $e(I, o, c) {
    let S;
    return fe(I, he, g => c(0, S = g)),
    [S]
}
class Ce extends ie {
    constructor(o) {
        super(),
        ue(this, o, $e, ge, ce, {})
    }
}
export {Ce as component};