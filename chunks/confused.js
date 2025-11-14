import {S as r, i as u, s as _, k as d, l as f, n as h, G as g, b as m, J as a, h as o} from "./index.b59088e2.js";
function y(l) {
    let t, s;
    return {
        c() {
            t = d("img"),
            this.h()
        },
        l(e) {
            t = f(e, "IMG", {
                style: !0,
                src: !0,
                class: !0
            }),
            this.h()
        },
        h() {
            h(t, "style", "width: ${width};height: ${height};"),
            g(t.src, s = "https://snail-ide.com/confusedsnail.png") || h(t, "src", s),
            h(t, "class", "svelte-15dvuty")
        },
        m(e, n) {
            m(e, t, n)
        },
        p: a,
        i: a,
        o: a,
        d(e) {
            e && o(t)
        }
    }
}
function w(l, t, s) {
    let {width: e} = t
      , {height: n} = t
      , {style: c} = t;
    return l.$$set = i => {
        "width"in i && s(0, e = i.width),
        "height"in i && s(1, n = i.height),
        "style"in i && s(2, c = i.style)
    }
    ,
    [e, n, c]
}
class x extends r {
    constructor(t) {
        super(),
        u(this, t, w, y, _, {
            width: 0,
            height: 1,
            style: 2
        })
    }
}
export {x as C};
