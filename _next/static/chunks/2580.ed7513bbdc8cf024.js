(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2580],
  {
    80537: function (e, t, n) {
      var r = n(53366),
        o = n(15125);
      e.exports = function (e) {
        return "number" == typeof e || (o(e) && "[object Number]" == r(e));
      };
    },
    12436: function (e, t, n) {
      var r = n(54073),
        o = n(29259);
      e.exports = function (e, t, n) {
        var l = !0,
          a = !0;
        if ("function" != typeof e) throw TypeError("Expected a function");
        return (
          o(n) &&
            ((l = "leading" in n ? !!n.leading : l),
            (a = "trailing" in n ? !!n.trailing : a)),
          r(e, t, { leading: l, maxWait: t, trailing: a })
        );
      };
    },
    23981: function (e, t, n) {
      "use strict";
      let r, o;
      n.d(t, {
        V: function () {
          return eT;
        },
      });
      var l,
        a,
        i,
        u,
        s,
        c,
        d,
        f = n(2784),
        p = n.t(f, 2),
        m = n(58314),
        v = n(55559),
        g = n(61742);
      function h(e, t, n, r) {
        let o = (0, g.E)(n);
        (0, f.useEffect)(() => {
          function n(e) {
            o.current(e);
          }
          return (
            (e = null != e ? e : window).addEventListener(t, n, r),
            () => e.removeEventListener(t, n, r)
          );
        }, [e, t, r]);
      }
      var E = n(81061),
        w = n(91554);
      function y(e) {
        let t = (0, v.z)(e),
          n = (0, f.useRef)(!1);
        (0, f.useEffect)(
          () => (
            (n.current = !1),
            () => {
              (n.current = !0),
                (0, w.Y)(() => {
                  n.current && t();
                });
            }
          ),
          [t]
        );
      }
      var T = n(70592),
        b = n(76460),
        C = n(33401),
        P = n(56902),
        L =
          (((l = L || {})[(l.Forwards = 0)] = "Forwards"),
          (l[(l.Backwards = 1)] = "Backwards"),
          l);
      function M(e, t) {
        let n = (0, f.useRef)([]),
          r = (0, v.z)(e);
        (0, f.useEffect)(() => {
          let e = [...n.current];
          for (let [o, l] of t.entries())
            if (n.current[o] !== l) {
              let o = r(t, e);
              return (n.current = t), o;
            }
        }, [r, ...t]);
      }
      var D = n(90544),
        R =
          (((a = R || {})[(a.None = 1)] = "None"),
          (a[(a.Focusable = 2)] = "Focusable"),
          (a[(a.Hidden = 4)] = "Hidden"),
          a);
      let S = (0, D.yV)(function (e, t) {
          var n;
          let { features: r = 1, ...o } = e,
            l = {
              ref: t,
              "aria-hidden":
                (2 & r) == 2 || (null != (n = o["aria-hidden"]) ? n : void 0),
              hidden: (4 & r) == 4 || void 0,
              style: {
                position: "fixed",
                top: 1,
                left: 1,
                width: 1,
                height: 0,
                padding: 0,
                margin: -1,
                overflow: "hidden",
                clip: "rect(0, 0, 0, 0)",
                whiteSpace: "nowrap",
                borderWidth: "0",
                ...((4 & r) == 4 && (2 & r) != 2 && { display: "none" }),
              },
            };
          return (0,
          D.sY)({ ourProps: l, theirProps: o, slot: {}, defaultTag: "div", name: "Hidden" });
        }),
        k = [];
      !(function (e) {
        function t() {
          "loading" !== document.readyState &&
            (e(), document.removeEventListener("DOMContentLoaded", t));
        }
        "undefined" != typeof window &&
          "undefined" != typeof document &&
          (document.addEventListener("DOMContentLoaded", t), t());
      })(() => {
        function e(e) {
          e.target instanceof HTMLElement &&
            e.target !== document.body &&
            k[0] !== e.target &&
            (k.unshift(e.target),
            (k = k.filter((e) => null != e && e.isConnected)).splice(10));
        }
        window.addEventListener("click", e, { capture: !0 }),
          window.addEventListener("mousedown", e, { capture: !0 }),
          window.addEventListener("focus", e, { capture: !0 }),
          document.body.addEventListener("click", e, { capture: !0 }),
          document.body.addEventListener("mousedown", e, { capture: !0 }),
          document.body.addEventListener("focus", e, { capture: !0 });
      });
      var O = n(52929),
        A = n(3703);
      function F(e) {
        if (!e) return new Set();
        if ("function" == typeof e) return new Set(e());
        let t = new Set();
        for (let n of e.current)
          n.current instanceof HTMLElement && t.add(n.current);
        return t;
      }
      var x =
        (((i = x || {})[(i.None = 1)] = "None"),
        (i[(i.InitialFocus = 2)] = "InitialFocus"),
        (i[(i.TabLock = 4)] = "TabLock"),
        (i[(i.FocusLock = 8)] = "FocusLock"),
        (i[(i.RestoreFocus = 16)] = "RestoreFocus"),
        (i[(i.All = 30)] = "All"),
        i);
      let H = Object.assign(
        (0, D.yV)(function (e, t) {
          let n,
            r = (0, f.useRef)(null),
            o = (0, C.T)(r, t),
            { initialFocus: l, containers: a, features: i = 30, ...u } = e;
          (0, b.H)() || (i = 1);
          let s = (0, T.i)(r);
          !(function ({ ownerDocument: e }, t) {
            let n = (function (e = !0) {
              let t = (0, f.useRef)(k.slice());
              return (
                M(
                  ([e], [n]) => {
                    !0 === n &&
                      !1 === e &&
                      (0, w.Y)(() => {
                        t.current.splice(0);
                      }),
                      !1 === n && !0 === e && (t.current = k.slice());
                  },
                  [e, k, t]
                ),
                (0, v.z)(() => {
                  var e;
                  return null !=
                    (e = t.current.find((e) => null != e && e.isConnected))
                    ? e
                    : null;
                })
              );
            })(t);
            M(() => {
              t ||
                ((null == e ? void 0 : e.activeElement) ===
                  (null == e ? void 0 : e.body) &&
                  (0, O.C5)(n()));
            }, [t]),
              y(() => {
                t && (0, O.C5)(n());
              });
          })({ ownerDocument: s }, !!(16 & i));
          let c = (function (
            { ownerDocument: e, container: t, initialFocus: n },
            r
          ) {
            let o = (0, f.useRef)(null),
              l = (0, E.t)();
            return (
              M(() => {
                if (!r) return;
                let a = t.current;
                a &&
                  (0, w.Y)(() => {
                    if (!l.current) return;
                    let t = null == e ? void 0 : e.activeElement;
                    if (null != n && n.current) {
                      if ((null == n ? void 0 : n.current) === t) {
                        o.current = t;
                        return;
                      }
                    } else if (a.contains(t)) {
                      o.current = t;
                      return;
                    }
                    null != n && n.current
                      ? (0, O.C5)(n.current)
                      : (0, O.jA)(a, O.TO.First) === O.fE.Error &&
                        console.warn(
                          "There are no focusable elements inside the <FocusTrap />"
                        ),
                      (o.current = null == e ? void 0 : e.activeElement);
                  });
              }, [r]),
              o
            );
          })({ ownerDocument: s, container: r, initialFocus: l }, !!(2 & i));
          !(function (
            {
              ownerDocument: e,
              container: t,
              containers: n,
              previousActiveElement: r,
            },
            o
          ) {
            let l = (0, E.t)();
            h(
              null == e ? void 0 : e.defaultView,
              "focus",
              (e) => {
                if (!o || !l.current) return;
                let a = F(n);
                t.current instanceof HTMLElement && a.add(t.current);
                let i = r.current;
                if (!i) return;
                let u = e.target;
                u && u instanceof HTMLElement
                  ? N(a, u)
                    ? ((r.current = u), (0, O.C5)(u))
                    : (e.preventDefault(), e.stopPropagation(), (0, O.C5)(i))
                  : (0, O.C5)(r.current);
              },
              !0
            );
          })(
            {
              ownerDocument: s,
              container: r,
              containers: a,
              previousActiveElement: c,
            },
            !!(8 & i)
          );
          let d =
              ((n = (0, f.useRef)(0)),
              (0, P.s)(
                "keydown",
                (e) => {
                  "Tab" === e.key && (n.current = e.shiftKey ? 1 : 0);
                },
                !0
              ),
              n),
            p = (0, v.z)((e) => {
              let t = r.current;
              t &&
                (0, A.E)(d.current, {
                  [L.Forwards]: () => {
                    (0, O.jA)(t, O.TO.First, {
                      skipElements: [e.relatedTarget],
                    });
                  },
                  [L.Backwards]: () => {
                    (0, O.jA)(t, O.TO.Last, {
                      skipElements: [e.relatedTarget],
                    });
                  },
                });
            }),
            g = (0, m.G)(),
            x = (0, f.useRef)(!1);
          return f.createElement(
            f.Fragment,
            null,
            !!(4 & i) &&
              f.createElement(S, {
                as: "button",
                type: "button",
                "data-headlessui-focus-guard": !0,
                onFocus: p,
                features: R.Focusable,
              }),
            (0, D.sY)({
              ourProps: {
                ref: o,
                onKeyDown(e) {
                  "Tab" == e.key &&
                    ((x.current = !0),
                    g.requestAnimationFrame(() => {
                      x.current = !1;
                    }));
                },
                onBlur(e) {
                  let t = F(a);
                  r.current instanceof HTMLElement && t.add(r.current);
                  let n = e.relatedTarget;
                  n instanceof HTMLElement &&
                    "true" !== n.dataset.headlessuiFocusGuard &&
                    (N(t, n) ||
                      (x.current
                        ? (0, O.jA)(
                            r.current,
                            (0, A.E)(d.current, {
                              [L.Forwards]: () => O.TO.Next,
                              [L.Backwards]: () => O.TO.Previous,
                            }) | O.TO.WrapAround,
                            { relativeTo: e.target }
                          )
                        : e.target instanceof HTMLElement &&
                          (0, O.C5)(e.target)));
                },
              },
              theirProps: u,
              defaultTag: "div",
              name: "FocusTrap",
            }),
            !!(4 & i) &&
              f.createElement(S, {
                as: "button",
                type: "button",
                "data-headlessui-focus-guard": !0,
                onFocus: p,
                features: R.Focusable,
              })
          );
        }),
        { features: x }
      );
      function N(e, t) {
        for (let n of e) if (n.contains(t)) return !0;
        return !1;
      }
      var Y = n(28316),
        V = n(88064);
      let z = (0, f.createContext)(!1);
      function B(e) {
        return f.createElement(z.Provider, { value: e.force }, e.children);
      }
      var I = n(64727);
      let W = f.Fragment,
        j = f.Fragment,
        $ = (0, f.createContext)(null),
        _ = (0, f.createContext)(null),
        U = Object.assign(
          (0, D.yV)(function (e, t) {
            let n = (0, f.useRef)(null),
              r = (0, C.T)(
                (0, C.h)((e) => {
                  n.current = e;
                }),
                t
              ),
              o = (0, T.i)(n),
              l = (function (e) {
                let t = (0, f.useContext)(z),
                  n = (0, f.useContext)($),
                  r = (0, T.i)(e),
                  [o, l] = (0, f.useState)(() => {
                    if ((!t && null !== n) || I.O.isServer) return null;
                    let e =
                      null == r
                        ? void 0
                        : r.getElementById("headlessui-portal-root");
                    if (e) return e;
                    if (null === r) return null;
                    let o = r.createElement("div");
                    return (
                      o.setAttribute("id", "headlessui-portal-root"),
                      r.body.appendChild(o)
                    );
                  });
                return (
                  (0, f.useEffect)(() => {
                    null !== o &&
                      ((null != r && r.body.contains(o)) ||
                        null == r ||
                        r.body.appendChild(o));
                  }, [o, r]),
                  (0, f.useEffect)(() => {
                    t || (null !== n && l(n.current));
                  }, [n, l, t]),
                  o
                );
              })(n),
              [a] = (0, f.useState)(() => {
                var e;
                return I.O.isServer
                  ? null
                  : null != (e = null == o ? void 0 : o.createElement("div"))
                  ? e
                  : null;
              }),
              i = (0, f.useContext)(_),
              u = (0, b.H)();
            return (
              (0, V.e)(() => {
                !l ||
                  !a ||
                  l.contains(a) ||
                  (a.setAttribute("data-headlessui-portal", ""),
                  l.appendChild(a));
              }, [l, a]),
              (0, V.e)(() => {
                if (a && i) return i.register(a);
              }, [i, a]),
              y(() => {
                var e;
                l &&
                  a &&
                  (a instanceof Node && l.contains(a) && l.removeChild(a),
                  l.childNodes.length <= 0 &&
                    (null == (e = l.parentElement) || e.removeChild(l)));
              }),
              u && l && a
                ? (0, Y.createPortal)(
                    (0, D.sY)({
                      ourProps: { ref: r },
                      theirProps: e,
                      defaultTag: W,
                      name: "Portal",
                    }),
                    a
                  )
                : null
            );
          }),
          {
            Group: (0, D.yV)(function (e, t) {
              let { target: n, ...r } = e,
                o = { ref: (0, C.T)(t) };
              return f.createElement(
                $.Provider,
                { value: n },
                (0, D.sY)({
                  ourProps: o,
                  theirProps: r,
                  defaultTag: j,
                  name: "Popover.Group",
                })
              );
            }),
          }
        ),
        { useState: q, useEffect: G, useLayoutEffect: Z, useDebugValue: K } = p;
      "undefined" != typeof window &&
        void 0 !== window.document &&
        window.document.createElement;
      let J = p.useSyncExternalStore;
      var Q = n(6173),
        X = n(25371);
      let ee =
        ((u = {
          PUSH(e, t) {
            var n;
            let r =
              null != (n = this.get(e))
                ? n
                : { doc: e, count: 0, d: (0, Q.k)(), meta: new Set() };
            return r.count++, r.meta.add(t), this.set(e, r), this;
          },
          POP(e, t) {
            let n = this.get(e);
            return n && (n.count--, n.meta.delete(t)), this;
          },
          SCROLL_PREVENT({ doc: e, d: t, meta: n }) {
            let r;
            let o = {
                doc: e,
                d: t,
                meta: (function (e) {
                  let t = {};
                  for (let n of e) Object.assign(t, n(t));
                  return t;
                })(n),
              },
              l = [
                (0, X.gn)()
                  ? {
                      before({ doc: e, d: t, meta: n }) {
                        function r(e) {
                          return n.containers
                            .flatMap((e) => e())
                            .some((t) => t.contains(e));
                        }
                        t.microTask(() => {
                          var n;
                          if (
                            "auto" !==
                            window.getComputedStyle(e.documentElement)
                              .scrollBehavior
                          ) {
                            let n = (0, Q.k)();
                            n.style(
                              e.documentElement,
                              "scrollBehavior",
                              "auto"
                            ),
                              t.add(() => t.microTask(() => n.dispose()));
                          }
                          let o =
                              null != (n = window.scrollY)
                                ? n
                                : window.pageYOffset,
                            l = null;
                          t.addEventListener(
                            e,
                            "click",
                            (t) => {
                              if (t.target instanceof HTMLElement)
                                try {
                                  let n = t.target.closest("a");
                                  if (!n) return;
                                  let { hash: o } = new URL(n.href),
                                    a = e.querySelector(o);
                                  a && !r(a) && (l = a);
                                } catch {}
                            },
                            !0
                          ),
                            t.addEventListener(e, "touchstart", (e) => {
                              if (e.target instanceof HTMLElement) {
                                if (r(e.target)) {
                                  let n = e.target;
                                  for (
                                    ;
                                    n.parentElement && r(n.parentElement);

                                  )
                                    n = n.parentElement;
                                  t.style(n, "overscrollBehavior", "contain");
                                } else t.style(e.target, "touchAction", "none");
                              }
                            }),
                            t.addEventListener(
                              e,
                              "touchmove",
                              (e) => {
                                if (e.target instanceof HTMLElement) {
                                  if (r(e.target)) {
                                    let t = e.target;
                                    for (
                                      ;
                                      t.parentElement &&
                                      "" !== t.dataset.headlessuiPortal &&
                                      !(
                                        t.scrollHeight > t.clientHeight ||
                                        t.scrollWidth > t.clientWidth
                                      );

                                    )
                                      t = t.parentElement;
                                    "" === t.dataset.headlessuiPortal &&
                                      e.preventDefault();
                                  } else e.preventDefault();
                                }
                              },
                              { passive: !1 }
                            ),
                            t.add(() => {
                              var e;
                              o !==
                                (null != (e = window.scrollY)
                                  ? e
                                  : window.pageYOffset) &&
                                window.scrollTo(0, o),
                                l &&
                                  l.isConnected &&
                                  (l.scrollIntoView({ block: "nearest" }),
                                  (l = null));
                            });
                        });
                      },
                    }
                  : {},
                {
                  before({ doc: e }) {
                    var t;
                    let n = e.documentElement;
                    r =
                      (null != (t = e.defaultView) ? t : window).innerWidth -
                      n.clientWidth;
                  },
                  after({ doc: e, d: t }) {
                    let n = e.documentElement,
                      o = n.clientWidth - n.offsetWidth,
                      l = r - o;
                    t.style(n, "paddingRight", `${l}px`);
                  },
                },
                {
                  before({ doc: e, d: t }) {
                    t.style(e.documentElement, "overflow", "hidden");
                  },
                },
              ];
            l.forEach(({ before: e }) => (null == e ? void 0 : e(o))),
              l.forEach(({ after: e }) => (null == e ? void 0 : e(o)));
          },
          SCROLL_ALLOW({ d: e }) {
            e.dispose();
          },
          TEARDOWN({ doc: e }) {
            this.delete(e);
          },
        }),
        (r = new Map()),
        (o = new Set()),
        {
          getSnapshot: () => r,
          subscribe: (e) => (o.add(e), () => o.delete(e)),
          dispatch(e, ...t) {
            let n = u[e].call(r, ...t);
            n && ((r = n), o.forEach((e) => e()));
          },
        });
      ee.subscribe(() => {
        let e = ee.getSnapshot(),
          t = new Map();
        for (let [n] of e) t.set(n, n.documentElement.style.overflow);
        for (let n of e.values()) {
          let e = "hidden" === t.get(n.doc),
            r = 0 !== n.count;
          ((r && !e) || (!r && e)) &&
            ee.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n),
            0 === n.count && ee.dispatch("TEARDOWN", n);
        }
      });
      var et = n(80586);
      let en = new Map(),
        er = new Map();
      function eo(e, t = !0) {
        (0, V.e)(() => {
          var n;
          if (!t) return;
          let r = "function" == typeof e ? e() : e.current;
          if (!r) return;
          let o = null != (n = er.get(r)) ? n : 0;
          return (
            er.set(r, o + 1),
            0 !== o ||
              (en.set(r, {
                "aria-hidden": r.getAttribute("aria-hidden"),
                inert: r.inert,
              }),
              r.setAttribute("aria-hidden", "true"),
              (r.inert = !0)),
            function () {
              var e;
              if (!r) return;
              let t = null != (e = er.get(r)) ? e : 1;
              if ((1 === t ? er.delete(r) : er.set(r, t - 1), 1 !== t)) return;
              let n = en.get(r);
              n &&
                (null === n["aria-hidden"]
                  ? r.removeAttribute("aria-hidden")
                  : r.setAttribute("aria-hidden", n["aria-hidden"]),
                (r.inert = n.inert),
                en.delete(r));
            }
          );
        }, [e, t]);
      }
      var el = n(32994),
        ea = n(47215);
      let ei = (0, f.createContext)(() => {});
      ei.displayName = "StackContext";
      var eu =
        (((s = eu || {})[(s.Add = 0)] = "Add"),
        (s[(s.Remove = 1)] = "Remove"),
        s);
      function es({
        children: e,
        onUpdate: t,
        type: n,
        element: r,
        enabled: o,
      }) {
        let l = (0, f.useContext)(ei),
          a = (0, v.z)((...e) => {
            null == t || t(...e), l(...e);
          });
        return (
          (0, V.e)(() => {
            let e = void 0 === o || !0 === o;
            return (
              e && a(0, n, r),
              () => {
                e && a(1, n, r);
              }
            );
          }, [a, n, r, o]),
          f.createElement(ei.Provider, { value: a }, e)
        );
      }
      var ec = n(15426);
      let ed = (0, f.createContext)(null),
        ef = Object.assign(
          (0, D.yV)(function (e, t) {
            let n = (0, et.M)(),
              { id: r = `headlessui-description-${n}`, ...o } = e,
              l = (function e() {
                let t = (0, f.useContext)(ed);
                if (null === t) {
                  let t = Error(
                    "You used a <Description /> component, but it is not inside a relevant parent."
                  );
                  throw (
                    (Error.captureStackTrace && Error.captureStackTrace(t, e),
                    t)
                  );
                }
                return t;
              })(),
              a = (0, C.T)(t);
            (0, V.e)(() => l.register(r), [r, l.register]);
            let i = { ref: a, ...l.props, id: r };
            return (0,
            D.sY)({ ourProps: i, theirProps: o, slot: l.slot || {}, defaultTag: "p", name: l.name || "Description" });
          }),
          {}
        );
      var ep = n(99108),
        em =
          (((c = em || {})[(c.Open = 0)] = "Open"),
          (c[(c.Closed = 1)] = "Closed"),
          c),
        ev = (((d = ev || {})[(d.SetTitleId = 0)] = "SetTitleId"), d);
      let eg = {
          0: (e, t) => (e.titleId === t.id ? e : { ...e, titleId: t.id }),
        },
        eh = (0, f.createContext)(null);
      function eE(e) {
        let t = (0, f.useContext)(eh);
        if (null === t) {
          let t = Error(`<${e} /> is missing a parent <Dialog /> component.`);
          throw (Error.captureStackTrace && Error.captureStackTrace(t, eE), t);
        }
        return t;
      }
      function ew(e, t) {
        return (0, A.E)(t.type, eg, e, t);
      }
      eh.displayName = "DialogContext";
      let ey = D.AN.RenderStrategy | D.AN.Static,
        eT = Object.assign(
          (0, D.yV)(function (e, t) {
            let n,
              r,
              o,
              l,
              a,
              i = (0, et.M)(),
              {
                id: u = `headlessui-dialog-${i}`,
                open: s,
                onClose: c,
                initialFocus: d,
                role: p = "dialog",
                __demoMode: m = !1,
                ...g
              } = e,
              [E, w] = (0, f.useState)(0),
              y = (0, f.useRef)(!1);
            p =
              "dialog" === p || "alertdialog" === p
                ? p
                : (y.current ||
                    ((y.current = !0),
                    console.warn(
                      `Invalid role [${p}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`
                    )),
                  "dialog");
            let P = (0, ea.oJ)();
            void 0 === s && null !== P && (s = (P & ea.ZM.Open) === ea.ZM.Open);
            let L = (0, f.useRef)(null),
              M = (0, C.T)(L, t),
              k = (0, T.i)(L),
              O = e.hasOwnProperty("open") || null !== P,
              F = e.hasOwnProperty("onClose");
            if (!O && !F)
              throw Error(
                "You have to provide an `open` and an `onClose` prop to the `Dialog` component."
              );
            if (!O)
              throw Error(
                "You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop."
              );
            if (!F)
              throw Error(
                "You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop."
              );
            if ("boolean" != typeof s)
              throw Error(
                `You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${s}`
              );
            if ("function" != typeof c)
              throw Error(
                `You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${c}`
              );
            let x = s ? 0 : 1,
              [N, Y] = (0, f.useReducer)(ew, {
                titleId: null,
                descriptionId: null,
                panelRef: (0, f.createRef)(),
              }),
              z = (0, v.z)(() => c(!1)),
              I = (0, v.z)((e) => Y({ type: 0, id: e })),
              W = !!(0, b.H)() && !m && 0 === x,
              j = E > 1,
              $ = null !== (0, f.useContext)(eh),
              [q, G] =
                ((n = (0, f.useContext)(_)),
                (r = (0, f.useRef)([])),
                (o = (0, v.z)(
                  (e) => (r.current.push(e), n && n.register(e), () => l(e))
                )),
                (l = (0, v.z)((e) => {
                  let t = r.current.indexOf(e);
                  -1 !== t && r.current.splice(t, 1), n && n.unregister(e);
                })),
                (a = (0, f.useMemo)(
                  () => ({ register: o, unregister: l, portals: r }),
                  [o, l, r]
                )),
                [
                  r,
                  (0, f.useMemo)(
                    () =>
                      function ({ children: e }) {
                        return f.createElement(_.Provider, { value: a }, e);
                      },
                    [a]
                  ),
                ]),
              {
                resolveContainers: Z,
                mainTreeNodeRef: K,
                MainTreeNode: Q,
              } = (function ({
                defaultContainers: e = [],
                portals: t,
                mainTreeNodeRef: n,
              } = {}) {
                var r;
                let o = (0, f.useRef)(
                    null != (r = null == n ? void 0 : n.current) ? r : null
                  ),
                  l = (0, T.i)(o),
                  a = (0, v.z)(() => {
                    var n, r, a;
                    let i = [];
                    for (let t of e)
                      null !== t &&
                        (t instanceof HTMLElement
                          ? i.push(t)
                          : "current" in t &&
                            t.current instanceof HTMLElement &&
                            i.push(t.current));
                    if (null != t && t.current)
                      for (let e of t.current) i.push(e);
                    for (let e of null !=
                    (n =
                      null == l
                        ? void 0
                        : l.querySelectorAll("html > *, body > *"))
                      ? n
                      : [])
                      e !== document.body &&
                        e !== document.head &&
                        e instanceof HTMLElement &&
                        "headlessui-portal-root" !== e.id &&
                        (e.contains(o.current) ||
                          e.contains(
                            null ==
                              (a =
                                null == (r = o.current)
                                  ? void 0
                                  : r.getRootNode())
                              ? void 0
                              : a.host
                          ) ||
                          i.some((t) => e.contains(t)) ||
                          i.push(e));
                    return i;
                  });
                return {
                  resolveContainers: a,
                  contains: (0, v.z)((e) => a().some((t) => t.contains(e))),
                  mainTreeNodeRef: o,
                  MainTreeNode: (0, f.useMemo)(
                    () =>
                      function () {
                        return null != n
                          ? null
                          : f.createElement(S, { features: R.Hidden, ref: o });
                      },
                    [o, n]
                  ),
                };
              })({
                portals: q,
                defaultContainers: [
                  {
                    get current() {
                      var X;
                      return null != (X = N.panelRef.current) ? X : L.current;
                    },
                  },
                ],
              }),
              en = null !== P && (P & ea.ZM.Closing) === ea.ZM.Closing,
              er = !$ && !en && W;
            eo(
              (0, f.useCallback)(() => {
                var e, t;
                return null !=
                  (t = Array.from(
                    null !=
                      (e = null == k ? void 0 : k.querySelectorAll("body > *"))
                      ? e
                      : []
                  ).find(
                    (e) =>
                      "headlessui-portal-root" !== e.id &&
                      e.contains(K.current) &&
                      e instanceof HTMLElement
                  ))
                  ? t
                  : null;
              }, [K]),
              er
            );
            let ei = !!j || W;
            eo(
              (0, f.useCallback)(() => {
                var e, t;
                return null !=
                  (t = Array.from(
                    null !=
                      (e =
                        null == k
                          ? void 0
                          : k.querySelectorAll("[data-headlessui-portal]"))
                      ? e
                      : []
                  ).find(
                    (e) => e.contains(K.current) && e instanceof HTMLElement
                  ))
                  ? t
                  : null;
              }, [K]),
              ei
            );
            let ec = !(!W || j);
            (0, el.O)(
              Z,
              (e) => {
                e.preventDefault(), z();
              },
              ec
            );
            let ef = !(j || 0 !== x);
            h(null == k ? void 0 : k.defaultView, "keydown", (e) => {
              ef &&
                (e.defaultPrevented ||
                  (e.key === ep.R.Escape &&
                    (e.preventDefault(), e.stopPropagation(), z())));
            }),
              (function (e, t, n = () => [document.body]) {
                var r;
                let o, l;
                (r = (e) => {
                  var t;
                  return {
                    containers: [...(null != (t = e.containers) ? t : []), n],
                  };
                }),
                  (o = J(ee.subscribe, ee.getSnapshot, ee.getSnapshot)),
                  (l = e ? o.get(e) : void 0) && l.count,
                  (0, V.e)(() => {
                    if (!(!e || !t))
                      return (
                        ee.dispatch("PUSH", e, r),
                        () => ee.dispatch("POP", e, r)
                      );
                  }, [t, e]);
              })(k, !(en || 0 !== x || $), Z),
              (0, f.useEffect)(() => {
                if (0 !== x || !L.current) return;
                let e = new ResizeObserver((e) => {
                  for (let t of e) {
                    let e = t.target.getBoundingClientRect();
                    0 === e.x &&
                      0 === e.y &&
                      0 === e.width &&
                      0 === e.height &&
                      z();
                  }
                });
                return e.observe(L.current), () => e.disconnect();
              }, [x, L, z]);
            let [em, ev] = (function () {
                let [e, t] = (0, f.useState)([]);
                return [
                  e.length > 0 ? e.join(" ") : void 0,
                  (0, f.useMemo)(
                    () =>
                      function (e) {
                        let n = (0, v.z)(
                            (e) => (
                              t((t) => [...t, e]),
                              () =>
                                t((t) => {
                                  let n = t.slice(),
                                    r = n.indexOf(e);
                                  return -1 !== r && n.splice(r, 1), n;
                                })
                            )
                          ),
                          r = (0, f.useMemo)(
                            () => ({
                              register: n,
                              slot: e.slot,
                              name: e.name,
                              props: e.props,
                            }),
                            [n, e.slot, e.name, e.props]
                          );
                        return f.createElement(
                          ed.Provider,
                          { value: r },
                          e.children
                        );
                      },
                    [t]
                  ),
                ];
              })(),
              eg = (0, f.useMemo)(
                () => [{ dialogState: x, close: z, setTitleId: I }, N],
                [x, N, z, I]
              ),
              eE = (0, f.useMemo)(() => ({ open: 0 === x }), [x]),
              eT = {
                ref: M,
                id: u,
                role: p,
                "aria-modal": 0 === x || void 0,
                "aria-labelledby": N.titleId,
                "aria-describedby": em,
              };
            return f.createElement(
              es,
              {
                type: "Dialog",
                enabled: 0 === x,
                element: L,
                onUpdate: (0, v.z)((e, t) => {
                  "Dialog" === t &&
                    (0, A.E)(e, {
                      [eu.Add]: () => w((e) => e + 1),
                      [eu.Remove]: () => w((e) => e - 1),
                    });
                }),
              },
              f.createElement(
                B,
                { force: !0 },
                f.createElement(
                  U,
                  null,
                  f.createElement(
                    eh.Provider,
                    { value: eg },
                    f.createElement(
                      U.Group,
                      { target: L },
                      f.createElement(
                        B,
                        { force: !1 },
                        f.createElement(
                          ev,
                          { slot: eE, name: "Dialog.Description" },
                          f.createElement(
                            H,
                            {
                              initialFocus: d,
                              containers: Z,
                              features: W
                                ? (0, A.E)(j ? "parent" : "leaf", {
                                    parent: H.features.RestoreFocus,
                                    leaf:
                                      H.features.All & ~H.features.FocusLock,
                                  })
                                : H.features.None,
                            },
                            f.createElement(
                              G,
                              null,
                              (0, D.sY)({
                                ourProps: eT,
                                theirProps: g,
                                slot: eE,
                                defaultTag: "div",
                                features: ey,
                                visible: 0 === x,
                                name: "Dialog",
                              })
                            )
                          )
                        )
                      )
                    )
                  )
                )
              ),
              f.createElement(Q, null)
            );
          }),
          {
            Backdrop: (0, D.yV)(function (e, t) {
              let n = (0, et.M)(),
                { id: r = `headlessui-dialog-backdrop-${n}`, ...o } = e,
                [{ dialogState: l }, a] = eE("Dialog.Backdrop"),
                i = (0, C.T)(t);
              (0, f.useEffect)(() => {
                if (null === a.panelRef.current)
                  throw Error(
                    "A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing."
                  );
              }, [a.panelRef]);
              let u = (0, f.useMemo)(() => ({ open: 0 === l }), [l]);
              return f.createElement(
                B,
                { force: !0 },
                f.createElement(
                  U,
                  null,
                  (0, D.sY)({
                    ourProps: { ref: i, id: r, "aria-hidden": !0 },
                    theirProps: o,
                    slot: u,
                    defaultTag: "div",
                    name: "Dialog.Backdrop",
                  })
                )
              );
            }),
            Panel: (0, D.yV)(function (e, t) {
              let n = (0, et.M)(),
                { id: r = `headlessui-dialog-panel-${n}`, ...o } = e,
                [{ dialogState: l }, a] = eE("Dialog.Panel"),
                i = (0, C.T)(t, a.panelRef),
                u = (0, f.useMemo)(() => ({ open: 0 === l }), [l]),
                s = (0, v.z)((e) => {
                  e.stopPropagation();
                });
              return (0,
              D.sY)({ ourProps: { ref: i, id: r, onClick: s }, theirProps: o, slot: u, defaultTag: "div", name: "Dialog.Panel" });
            }),
            Overlay: (0, D.yV)(function (e, t) {
              let n = (0, et.M)(),
                { id: r = `headlessui-dialog-overlay-${n}`, ...o } = e,
                [{ dialogState: l, close: a }] = eE("Dialog.Overlay"),
                i = (0, C.T)(t),
                u = (0, v.z)((e) => {
                  if (e.target === e.currentTarget) {
                    if ((0, ec.P)(e.currentTarget)) return e.preventDefault();
                    e.preventDefault(), e.stopPropagation(), a();
                  }
                }),
                s = (0, f.useMemo)(() => ({ open: 0 === l }), [l]);
              return (0,
              D.sY)({ ourProps: { ref: i, id: r, "aria-hidden": !0, onClick: u }, theirProps: o, slot: s, defaultTag: "div", name: "Dialog.Overlay" });
            }),
            Title: (0, D.yV)(function (e, t) {
              let n = (0, et.M)(),
                { id: r = `headlessui-dialog-title-${n}`, ...o } = e,
                [{ dialogState: l, setTitleId: a }] = eE("Dialog.Title"),
                i = (0, C.T)(t);
              (0, f.useEffect)(() => (a(r), () => a(null)), [r, a]);
              let u = (0, f.useMemo)(() => ({ open: 0 === l }), [l]);
              return (0,
              D.sY)({ ourProps: { ref: i, id: r }, theirProps: o, slot: u, defaultTag: "h2", name: "Dialog.Title" });
            }),
            Description: ef,
          }
        );
    },
  },
]);
