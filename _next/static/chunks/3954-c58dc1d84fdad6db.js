(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3954],
  {
    98357: function (e, t, n) {
      var r = "Expected a function",
        i = 0 / 0,
        o = /^\s+|\s+$/g,
        s = /^[-+]0x[0-9a-f]+$/i,
        a = /^0b[01]+$/i,
        l = /^0o[0-7]+$/i,
        u = parseInt,
        c = "object" == typeof n.g && n.g && n.g.Object === Object && n.g,
        d = "object" == typeof self && self && self.Object === Object && self,
        f = c || d || Function("return this")(),
        h = Object.prototype.toString,
        p = Math.max,
        m = Math.min,
        v = function () {
          return f.Date.now();
        };
      function g(e) {
        var t = typeof e;
        return !!e && ("object" == t || "function" == t);
      }
      function y(e) {
        if ("number" == typeof e) return e;
        if (
          "symbol" == typeof (t = e) ||
          (t && "object" == typeof t && "[object Symbol]" == h.call(t))
        )
          return i;
        if (g(e)) {
          var t,
            n = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = g(n) ? n + "" : n;
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = e.replace(o, "");
        var r = a.test(e);
        return r || l.test(e) ? u(e.slice(2), r ? 2 : 8) : s.test(e) ? i : +e;
      }
      e.exports = function (e, t, n) {
        var i = !0,
          o = !0;
        if ("function" != typeof e) throw TypeError(r);
        return (
          g(n) &&
            ((i = "leading" in n ? !!n.leading : i),
            (o = "trailing" in n ? !!n.trailing : o)),
          (function (e, t, n) {
            var i,
              o,
              s,
              a,
              l,
              u,
              c = 0,
              d = !1,
              f = !1,
              h = !0;
            if ("function" != typeof e) throw TypeError(r);
            function b(t) {
              var n = i,
                r = o;
              return (i = o = void 0), (c = t), (a = e.apply(r, n));
            }
            function P(e) {
              var n = e - u,
                r = e - c;
              return void 0 === u || n >= t || n < 0 || (f && r >= s);
            }
            function x() {
              var e,
                n,
                r,
                i = v();
              if (P(i)) return w(i);
              l = setTimeout(
                x,
                ((e = i - u), (n = i - c), (r = t - e), f ? m(r, s - n) : r)
              );
            }
            function w(e) {
              return ((l = void 0), h && i) ? b(e) : ((i = o = void 0), a);
            }
            function E() {
              var e,
                n = v(),
                r = P(n);
              if (((i = arguments), (o = this), (u = n), r)) {
                if (void 0 === l)
                  return (c = e = u), (l = setTimeout(x, t)), d ? b(e) : a;
                if (f) return (l = setTimeout(x, t)), b(u);
              }
              return void 0 === l && (l = setTimeout(x, t)), a;
            }
            return (
              (t = y(t) || 0),
              g(n) &&
                ((d = !!n.leading),
                (s = (f = "maxWait" in n) ? p(y(n.maxWait) || 0, t) : s),
                (h = "trailing" in n ? !!n.trailing : h)),
              (E.cancel = function () {
                void 0 !== l && clearTimeout(l),
                  (c = 0),
                  (i = u = o = l = void 0);
              }),
              (E.flush = function () {
                return void 0 === l ? a : w(v());
              }),
              E
            );
          })(e, t, { leading: i, maxWait: t, trailing: o })
        );
      };
    },
    56626: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var r = n(2784),
        i = {
          xmlns: "http://www.w3.org/2000/svg",
          width: 24,
          height: 24,
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: 2,
          strokeLinecap: "round",
          strokeLinejoin: "round",
        };
      /**
       * @license lucide-react v0.303.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let o = (e) =>
          e
            .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
            .toLowerCase()
            .trim(),
        s = (e, t) => {
          let n = (0, r.forwardRef)(
            (
              {
                color: n = "currentColor",
                size: s = 24,
                strokeWidth: a = 2,
                absoluteStrokeWidth: l,
                className: u = "",
                children: c,
                ...d
              },
              f
            ) =>
              (0, r.createElement)(
                "svg",
                {
                  ref: f,
                  ...i,
                  width: s,
                  height: s,
                  stroke: n,
                  strokeWidth: l ? (24 * Number(a)) / Number(s) : a,
                  className: ["lucide", `lucide-${o(e)}`, u].join(" "),
                  ...d,
                },
                [
                  ...t.map(([e, t]) => (0, r.createElement)(e, t)),
                  ...(Array.isArray(c) ? c : [c]),
                ]
              )
          );
          return (n.displayName = `${e}`), n;
        };
    },
    81395: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      /**
       * @license lucide-react v0.303.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let r = (0, n(56626).Z)("ChevronDown", [
        ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
      ]);
    },
    40413: function (e, t) {
      "use strict";
      var n, r;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          PrefetchKind: function () {
            return n;
          },
          ACTION_REFRESH: function () {
            return i;
          },
          ACTION_NAVIGATE: function () {
            return o;
          },
          ACTION_RESTORE: function () {
            return s;
          },
          ACTION_SERVER_PATCH: function () {
            return a;
          },
          ACTION_PREFETCH: function () {
            return l;
          },
          ACTION_FAST_REFRESH: function () {
            return u;
          },
          ACTION_SERVER_ACTION: function () {
            return c;
          },
          isThenable: function () {
            return d;
          },
        });
      let i = "refresh",
        o = "navigate",
        s = "restore",
        a = "server-patch",
        l = "prefetch",
        u = "fast-refresh",
        c = "server-action";
      function d(e) {
        return (
          e &&
          ("object" == typeof e || "function" == typeof e) &&
          "function" == typeof e.then
        );
      }
      ((r = n || (n = {})).AUTO = "auto"),
        (r.FULL = "full"),
        (r.TEMPORARY = "temporary"),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    41275: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getDomainLocale", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let r = n(60261);
      function i(e, t, i, o) {
        {
          let s = n(81596).normalizeLocalePath,
            a = n(41449).detectDomainLocale,
            l = t || s(e, i).detectedLocale,
            u = a(o, void 0, l);
          if (u) {
            let t = "http" + (u.http ? "" : "s") + "://",
              n = l === u.defaultLocale ? "" : "/" + l;
            return (
              "" + t + u.domain + (0, r.normalizePathTrailingSlash)("" + n + e)
            );
          }
          return !1;
        }
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    7117: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return y;
          },
        });
      let r = n(43219)._(n(2784)),
        i = n(86338),
        o = n(25863),
        s = n(6408),
        a = n(20654),
        l = n(41127),
        u = n(14442),
        c = n(56428),
        d = n(54746),
        f = n(41275),
        h = n(35722),
        p = n(40413),
        m = new Set();
      function v(e, t, n, r, i, s) {
        if (s || (0, o.isLocalURL)(t)) {
          if (!r.bypassPrefetchedCheck) {
            let i =
              t +
              "%" +
              n +
              "%" +
              (void 0 !== r.locale
                ? r.locale
                : "locale" in e
                ? e.locale
                : void 0);
            if (m.has(i)) return;
            m.add(i);
          }
          Promise.resolve(s ? e.prefetch(t, i) : e.prefetch(t, n, r)).catch(
            (e) => {}
          );
        }
      }
      function g(e) {
        return "string" == typeof e ? e : (0, s.formatUrl)(e);
      }
      let y = r.default.forwardRef(function (e, t) {
        let n, s;
        let {
          href: m,
          as: y,
          children: b,
          prefetch: P = null,
          passHref: x,
          replace: w,
          shallow: E,
          scroll: T,
          locale: S,
          onClick: C,
          onMouseEnter: M,
          onTouchStart: A,
          legacyBehavior: O = !1,
          ...k
        } = e;
        (n = b),
          O &&
            ("string" == typeof n || "number" == typeof n) &&
            (n = r.default.createElement("a", null, n));
        let R = r.default.useContext(u.RouterContext),
          j = r.default.useContext(c.AppRouterContext),
          D = null != R ? R : j,
          L = !R,
          V = !1 !== P,
          _ = null === P ? p.PrefetchKind.AUTO : p.PrefetchKind.FULL,
          { href: F, as: I } = r.default.useMemo(() => {
            if (!R) {
              let e = g(m);
              return { href: e, as: y ? g(y) : e };
            }
            let [e, t] = (0, i.resolveHref)(R, m, !0);
            return { href: e, as: y ? (0, i.resolveHref)(R, y) : t || e };
          }, [R, m, y]),
          N = r.default.useRef(F),
          B = r.default.useRef(I);
        O && (s = r.default.Children.only(n));
        let H = O ? s && "object" == typeof s && s.ref : t,
          [U, W, z] = (0, d.useIntersection)({ rootMargin: "200px" }),
          $ = r.default.useCallback(
            (e) => {
              (B.current !== I || N.current !== F) &&
                (z(), (B.current = I), (N.current = F)),
                U(e),
                H &&
                  ("function" == typeof H
                    ? H(e)
                    : "object" == typeof H && (H.current = e));
            },
            [I, H, F, z, U]
          );
        r.default.useEffect(() => {
          D && W && V && v(D, F, I, { locale: S }, { kind: _ }, L);
        }, [I, F, W, S, V, null == R ? void 0 : R.locale, D, L, _]);
        let Z = {
          ref: $,
          onClick(e) {
            O || "function" != typeof C || C(e),
              O &&
                s.props &&
                "function" == typeof s.props.onClick &&
                s.props.onClick(e),
              D &&
                !e.defaultPrevented &&
                (function (e, t, n, i, s, a, l, u, c) {
                  let { nodeName: d } = e.currentTarget;
                  if (
                    "A" === d.toUpperCase() &&
                    ((function (e) {
                      let t = e.currentTarget.getAttribute("target");
                      return (
                        (t && "_self" !== t) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      );
                    })(e) ||
                      (!c && !(0, o.isLocalURL)(n)))
                  )
                    return;
                  e.preventDefault();
                  let f = () => {
                    let e = null == l || l;
                    "beforePopState" in t
                      ? t[s ? "replace" : "push"](n, i, {
                          shallow: a,
                          locale: u,
                          scroll: e,
                        })
                      : t[s ? "replace" : "push"](i || n, { scroll: e });
                  };
                  c ? r.default.startTransition(f) : f();
                })(e, D, F, I, w, E, T, S, L);
          },
          onMouseEnter(e) {
            O || "function" != typeof M || M(e),
              O &&
                s.props &&
                "function" == typeof s.props.onMouseEnter &&
                s.props.onMouseEnter(e),
              D &&
                (V || !L) &&
                v(
                  D,
                  F,
                  I,
                  { locale: S, priority: !0, bypassPrefetchedCheck: !0 },
                  { kind: _ },
                  L
                );
          },
          onTouchStart(e) {
            O || "function" != typeof A || A(e),
              O &&
                s.props &&
                "function" == typeof s.props.onTouchStart &&
                s.props.onTouchStart(e),
              D &&
                (V || !L) &&
                v(
                  D,
                  F,
                  I,
                  { locale: S, priority: !0, bypassPrefetchedCheck: !0 },
                  { kind: _ },
                  L
                );
          },
        };
        if ((0, a.isAbsoluteUrl)(I)) Z.href = I;
        else if (!O || x || ("a" === s.type && !("href" in s.props))) {
          let e = void 0 !== S ? S : null == R ? void 0 : R.locale,
            t =
              (null == R ? void 0 : R.isLocaleDomain) &&
              (0, f.getDomainLocale)(
                I,
                e,
                null == R ? void 0 : R.locales,
                null == R ? void 0 : R.domainLocales
              );
          Z.href =
            t ||
            (0, h.addBasePath)(
              (0, l.addLocale)(I, e, null == R ? void 0 : R.defaultLocale)
            );
        }
        return O
          ? r.default.cloneElement(s, Z)
          : r.default.createElement("a", { ...k, ...Z }, n);
      });
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    81596: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "normalizeLocalePath", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let r = (e, t) => n(32903).normalizeLocalePath(e, t);
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    54746: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "useIntersection", {
          enumerable: !0,
          get: function () {
            return l;
          },
        });
      let r = n(2784),
        i = n(27155),
        o = "function" == typeof IntersectionObserver,
        s = new Map(),
        a = [];
      function l(e) {
        let { rootRef: t, rootMargin: n, disabled: l } = e,
          u = l || !o,
          [c, d] = (0, r.useState)(!1),
          f = (0, r.useRef)(null),
          h = (0, r.useCallback)((e) => {
            f.current = e;
          }, []);
        return (
          (0, r.useEffect)(() => {
            if (o) {
              if (u || c) return;
              let e = f.current;
              if (e && e.tagName)
                return (function (e, t, n) {
                  let {
                    id: r,
                    observer: i,
                    elements: o,
                  } = (function (e) {
                    let t;
                    let n = {
                        root: e.root || null,
                        margin: e.rootMargin || "",
                      },
                      r = a.find(
                        (e) => e.root === n.root && e.margin === n.margin
                      );
                    if (r && (t = s.get(r))) return t;
                    let i = new Map();
                    return (
                      (t = {
                        id: n,
                        observer: new IntersectionObserver((e) => {
                          e.forEach((e) => {
                            let t = i.get(e.target),
                              n = e.isIntersecting || e.intersectionRatio > 0;
                            t && n && t(n);
                          });
                        }, e),
                        elements: i,
                      }),
                      a.push(n),
                      s.set(n, t),
                      t
                    );
                  })(n);
                  return (
                    o.set(e, t),
                    i.observe(e),
                    function () {
                      if ((o.delete(e), i.unobserve(e), 0 === o.size)) {
                        i.disconnect(), s.delete(r);
                        let e = a.findIndex(
                          (e) => e.root === r.root && e.margin === r.margin
                        );
                        e > -1 && a.splice(e, 1);
                      }
                    }
                  );
                })(e, (e) => e && d(e), {
                  root: null == t ? void 0 : t.current,
                  rootMargin: n,
                });
            } else if (!c) {
              let e = (0, i.requestIdleCallback)(() => d(!0));
              return () => (0, i.cancelIdleCallback)(e);
            }
          }, [u, n, t, c, f.current]),
          [
            h,
            c,
            (0, r.useCallback)(() => {
              d(!1);
            }, []),
          ]
        );
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    24167: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          noSSR: function () {
            return s;
          },
          default: function () {
            return a;
          },
        });
      let r = n(43219),
        i = (n(2784), r._(n(9034)));
      function o(e) {
        return { default: (null == e ? void 0 : e.default) || e };
      }
      function s(e, t) {
        return delete t.webpack, delete t.modules, e(t);
      }
      function a(e, t) {
        let n = i.default,
          r = {
            loading: (e) => {
              let { error: t, isLoading: n, pastDelay: r } = e;
              return null;
            },
          };
        e instanceof Promise
          ? (r.loader = () => e)
          : "function" == typeof e
          ? (r.loader = e)
          : "object" == typeof e && (r = { ...r, ...e });
        let a = (r = { ...r, ...t }).loader;
        return (r.loadableGenerated &&
          ((r = { ...r, ...r.loadableGenerated }), delete r.loadableGenerated),
        "boolean" != typeof r.ssr || r.ssr)
          ? n({
              ...r,
              loader: () =>
                null != a ? a().then(o) : Promise.resolve(o(() => null)),
            })
          : (delete r.webpack, delete r.modules, s(n, r));
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    6730: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "LoadableContext", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let r = n(43219)._(n(2784)).default.createContext(null);
    },
    9034: function (e, t, n) {
      "use strict";
      /**
@copyright (c) 2017-present James Kyle <me@thejameskyle.com>
 MIT License
 Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:
 The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
*/ Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return f;
          },
        });
      let r = n(43219)._(n(2784)),
        i = n(6730),
        o = [],
        s = [],
        a = !1;
      function l(e) {
        let t = e(),
          n = { loading: !0, loaded: null, error: null };
        return (
          (n.promise = t
            .then((e) => ((n.loading = !1), (n.loaded = e), e))
            .catch((e) => {
              throw ((n.loading = !1), (n.error = e), e);
            })),
          n
        );
      }
      class u {
        promise() {
          return this._res.promise;
        }
        retry() {
          this._clearTimeouts(),
            (this._res = this._loadFn(this._opts.loader)),
            (this._state = { pastDelay: !1, timedOut: !1 });
          let { _res: e, _opts: t } = this;
          e.loading &&
            ("number" == typeof t.delay &&
              (0 === t.delay
                ? (this._state.pastDelay = !0)
                : (this._delay = setTimeout(() => {
                    this._update({ pastDelay: !0 });
                  }, t.delay))),
            "number" == typeof t.timeout &&
              (this._timeout = setTimeout(() => {
                this._update({ timedOut: !0 });
              }, t.timeout))),
            this._res.promise
              .then(() => {
                this._update({}), this._clearTimeouts();
              })
              .catch((e) => {
                this._update({}), this._clearTimeouts();
              }),
            this._update({});
        }
        _update(e) {
          (this._state = {
            ...this._state,
            error: this._res.error,
            loaded: this._res.loaded,
            loading: this._res.loading,
            ...e,
          }),
            this._callbacks.forEach((e) => e());
        }
        _clearTimeouts() {
          clearTimeout(this._delay), clearTimeout(this._timeout);
        }
        getCurrentValue() {
          return this._state;
        }
        subscribe(e) {
          return (
            this._callbacks.add(e),
            () => {
              this._callbacks.delete(e);
            }
          );
        }
        constructor(e, t) {
          (this._loadFn = e),
            (this._opts = t),
            (this._callbacks = new Set()),
            (this._delay = null),
            (this._timeout = null),
            this.retry();
        }
      }
      function c(e) {
        return (function (e, t) {
          let n = Object.assign(
              {
                loader: null,
                loading: null,
                delay: 200,
                timeout: null,
                webpack: null,
                modules: null,
              },
              t
            ),
            o = null;
          function l() {
            if (!o) {
              let t = new u(e, n);
              o = {
                getCurrentValue: t.getCurrentValue.bind(t),
                subscribe: t.subscribe.bind(t),
                retry: t.retry.bind(t),
                promise: t.promise.bind(t),
              };
            }
            return o.promise();
          }
          if (!a) {
            let e = n.webpack ? n.webpack() : n.modules;
            e &&
              s.push((t) => {
                for (let n of e) if (t.includes(n)) return l();
              });
          }
          function c(e, t) {
            !(function () {
              l();
              let e = r.default.useContext(i.LoadableContext);
              e &&
                Array.isArray(n.modules) &&
                n.modules.forEach((t) => {
                  e(t);
                });
            })();
            let s = r.default.useSyncExternalStore(
              o.subscribe,
              o.getCurrentValue,
              o.getCurrentValue
            );
            return (
              r.default.useImperativeHandle(t, () => ({ retry: o.retry }), []),
              r.default.useMemo(() => {
                var t;
                return s.loading || s.error
                  ? r.default.createElement(n.loading, {
                      isLoading: s.loading,
                      pastDelay: s.pastDelay,
                      timedOut: s.timedOut,
                      error: s.error,
                      retry: o.retry,
                    })
                  : s.loaded
                  ? r.default.createElement(
                      (t = s.loaded) && t.default ? t.default : t,
                      e
                    )
                  : null;
              }, [e, s])
            );
          }
          return (
            (c.preload = () => l()),
            (c.displayName = "LoadableComponent"),
            r.default.forwardRef(c)
          );
        })(l, e);
      }
      function d(e, t) {
        let n = [];
        for (; e.length; ) {
          let r = e.pop();
          n.push(r(t));
        }
        return Promise.all(n).then(() => {
          if (e.length) return d(e, t);
        });
      }
      (c.preloadAll = () =>
        new Promise((e, t) => {
          d(o).then(e, t);
        })),
        (c.preloadReady = (e) => (
          void 0 === e && (e = []),
          new Promise((t) => {
            let n = () => ((a = !0), t());
            d(s, e).then(n, n);
          })
        )),
        (window.__NEXT_PRELOADREADY = c.preloadReady);
      let f = c;
    },
    25237: function (e, t, n) {
      e.exports = n(24167);
    },
    39097: function (e, t, n) {
      e.exports = n(7117);
    },
    5632: function (e, t, n) {
      e.exports = n(15894);
    },
    68262: function (e, t, n) {
      "use strict";
      var r = n(23586);
      function i() {}
      function o() {}
      (o.resetWarningCache = i),
        (e.exports = function () {
          function e(e, t, n, i, o, s) {
            if (s !== r) {
              var a = Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
              );
              throw ((a.name = "Invariant Violation"), a);
            }
          }
          function t() {
            return e;
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
            checkPropTypes: o,
            resetWarningCache: i,
          };
          return (n.PropTypes = n), n;
        });
    },
    13980: function (e, t, n) {
      e.exports = n(68262)();
    },
    23586: function (e) {
      "use strict";
      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    },
    55497: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        i = s(n(2784)),
        o = s(n(90679));
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var a = (function (e) {
        function t() {
          return (
            !(function (e, t) {
              if (!(e instanceof t))
                throw TypeError("Cannot call a class as a function");
            })(this, t),
            (function (e, t) {
              if (!e)
                throw ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t && ("object" == typeof t || "function" == typeof t)
                ? t
                : e;
            })(
              this,
              (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
            )
          );
        }
        return (
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw TypeError(
                "Super expression must either be null or a function, not " +
                  typeof t
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          })(t, e),
          r(t, [
            {
              key: "render",
              value: function () {
                return i.default.createElement(
                  "button",
                  this.props,
                  this.props.children
                );
              },
            },
          ]),
          t
        );
      })(i.default.Component);
      t.default = (0, o.default)(a);
    },
    92276: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        i = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        o = l(n(2784)),
        s = l(n(29942)),
        a = l(n(13980));
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var u = (function (e) {
        function t() {
          return (
            !(function (e, t) {
              if (!(e instanceof t))
                throw TypeError("Cannot call a class as a function");
            })(this, t),
            (function (e, t) {
              if (!e)
                throw ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t && ("object" == typeof t || "function" == typeof t)
                ? t
                : e;
            })(
              this,
              (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
            )
          );
        }
        return (
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw TypeError(
                "Super expression must either be null or a function, not " +
                  typeof t
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          })(t, e),
          i(t, [
            {
              key: "render",
              value: function () {
                var e = this,
                  t = r({}, this.props);
                return (
                  delete t.name,
                  t.parentBindings && delete t.parentBindings,
                  o.default.createElement(
                    "div",
                    r({}, t, {
                      ref: function (t) {
                        e.props.parentBindings.domNode = t;
                      },
                    }),
                    this.props.children
                  )
                );
              },
            },
          ]),
          t
        );
      })(o.default.Component);
      (u.propTypes = { name: a.default.string, id: a.default.string }),
        (t.default = (0, s.default)(u));
    },
    98824: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = o(n(2784)),
        i = o(n(90679));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function s(e, t) {
        if (!e)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t && ("object" == typeof t || "function" == typeof t) ? t : e;
      }
      var a = (function (e) {
        function t() {
          !(function (e, t) {
            if (!(e instanceof t))
              throw TypeError("Cannot call a class as a function");
          })(this, t);
          for (
            var e, n, i, o = arguments.length, a = Array(o), l = 0;
            l < o;
            l++
          )
            a[l] = arguments[l];
          return (
            (n = i =
              s(
                this,
                (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                  e,
                  [this].concat(a)
                )
              )),
            (i.render = function () {
              return r.default.createElement("a", i.props, i.props.children);
            }),
            s(i, n)
          );
        }
        return (
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw TypeError(
                "Super expression must either be null or a function, not " +
                  typeof t
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          })(t, e),
          t
        );
      })(r.default.Component);
      t.default = (0, i.default)(a);
    },
    70423: function (e, t, n) {
      "use strict";
      t.rU = void 0;
      var r = h(n(98824)),
        i = h(n(55497)),
        o = h(n(92276)),
        s = h(n(73123)),
        a = h(n(90496)),
        l = h(n(70752)),
        u = h(n(27793)),
        c = h(n(90679)),
        d = h(n(29942)),
        f = h(n(9465));
      function h(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (t.rU = r.default),
        i.default,
        o.default,
        s.default,
        a.default,
        l.default,
        u.default,
        c.default,
        d.default,
        f.default,
        r.default,
        i.default,
        o.default,
        s.default,
        a.default,
        l.default,
        u.default,
        c.default,
        d.default,
        f.default;
    },
    9465: function (e, t, n) {
      "use strict";
      var r =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        i = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })();
      function o(e, t) {
        if (!(e instanceof t))
          throw TypeError("Cannot call a class as a function");
      }
      function s(e, t) {
        if (!e)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t && ("object" == typeof t || "function" == typeof t) ? t : e;
      }
      function a(e, t) {
        if ("function" != typeof t && null !== t)
          throw TypeError(
            "Super expression must either be null or a function, not " +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      }
      var l = n(2784);
      n(28316), n(40659);
      var u = n(70752),
        c = n(73123),
        d = n(13980),
        f = n(67654),
        h = {
          to: d.string.isRequired,
          containerId: d.string,
          container: d.object,
          activeClass: d.string,
          spy: d.bool,
          smooth: d.oneOfType([d.bool, d.string]),
          offset: d.number,
          delay: d.number,
          isDynamic: d.bool,
          onClick: d.func,
          duration: d.oneOfType([d.number, d.func]),
          absolute: d.bool,
          onSetActive: d.func,
          onSetInactive: d.func,
          ignoreCancelEvents: d.bool,
          hashSpy: d.bool,
          spyThrottle: d.number,
        };
      e.exports = {
        Scroll: function (e, t) {
          console.warn("Helpers.Scroll is deprecated since v1.7.0");
          var n = t || c,
            d = (function (t) {
              function c(e) {
                o(this, c);
                var t = s(
                  this,
                  (c.__proto__ || Object.getPrototypeOf(c)).call(this, e)
                );
                return p.call(t), (t.state = { active: !1 }), t;
              }
              return (
                a(c, t),
                i(c, [
                  {
                    key: "getScrollSpyContainer",
                    value: function () {
                      var e = this.props.containerId,
                        t = this.props.container;
                      return e
                        ? document.getElementById(e)
                        : t && t.nodeType
                        ? t
                        : document;
                    },
                  },
                  {
                    key: "componentDidMount",
                    value: function () {
                      if (this.props.spy || this.props.hashSpy) {
                        var e = this.getScrollSpyContainer();
                        u.isMounted(e) || u.mount(e, this.props.spyThrottle),
                          this.props.hashSpy &&
                            (f.isMounted() || f.mount(n),
                            f.mapContainer(this.props.to, e)),
                          this.props.spy &&
                            u.addStateHandler(this.stateHandler),
                          u.addSpyHandler(this.spyHandler, e),
                          this.setState({ container: e });
                      }
                    },
                  },
                  {
                    key: "componentWillUnmount",
                    value: function () {
                      u.unmount(this.stateHandler, this.spyHandler);
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var t = "";
                      t =
                        this.state && this.state.active
                          ? (
                              (this.props.className || "") +
                              " " +
                              (this.props.activeClass || "active")
                            ).trim()
                          : this.props.className;
                      var n = r({}, this.props);
                      for (var i in h) n.hasOwnProperty(i) && delete n[i];
                      return (
                        (n.className = t),
                        (n.onClick = this.handleClick),
                        l.createElement(e, n)
                      );
                    },
                  },
                ]),
                c
              );
            })(l.Component),
            p = function () {
              var e = this;
              (this.scrollTo = function (t, i) {
                n.scrollTo(t, r({}, e.state, i));
              }),
                (this.handleClick = function (t) {
                  e.props.onClick && e.props.onClick(t),
                    t.stopPropagation && t.stopPropagation(),
                    t.preventDefault && t.preventDefault(),
                    e.scrollTo(e.props.to, e.props);
                }),
                (this.stateHandler = function () {
                  n.getActiveLink() !== e.props.to &&
                    (null !== e.state &&
                      e.state.active &&
                      e.props.onSetInactive &&
                      e.props.onSetInactive(),
                    e.setState({ active: !1 }));
                }),
                (this.spyHandler = function (t) {
                  var r = e.getScrollSpyContainer();
                  if (!f.isMounted() || f.isInitialized()) {
                    var i = e.props.to,
                      o = null,
                      s = 0,
                      a = 0,
                      l = 0;
                    if (
                      (r.getBoundingClientRect &&
                        (l = r.getBoundingClientRect().top),
                      !o || e.props.isDynamic)
                    ) {
                      if (!(o = n.get(i))) return;
                      var c = o.getBoundingClientRect();
                      a = (s = c.top - l + t) + c.height;
                    }
                    var d = t - e.props.offset,
                      h = d >= Math.floor(s) && d < Math.floor(a),
                      p = d < Math.floor(s) || d >= Math.floor(a),
                      m = n.getActiveLink();
                    return p
                      ? (i === m && n.setActiveLink(void 0),
                        e.props.hashSpy && f.getHash() === i && f.changeHash(),
                        e.props.spy &&
                          e.state.active &&
                          (e.setState({ active: !1 }),
                          e.props.onSetInactive && e.props.onSetInactive()),
                        u.updateStates())
                      : h && m !== i
                      ? (n.setActiveLink(i),
                        e.props.hashSpy && f.changeHash(i),
                        e.props.spy &&
                          (e.setState({ active: !0 }),
                          e.props.onSetActive && e.props.onSetActive(i)),
                        u.updateStates())
                      : void 0;
                  }
                });
            };
          return (d.propTypes = h), (d.defaultProps = { offset: 0 }), d;
        },
        Element: function (e) {
          console.warn("Helpers.Element is deprecated since v1.7.0");
          var t = (function (t) {
            function n(e) {
              o(this, n);
              var t = s(
                this,
                (n.__proto__ || Object.getPrototypeOf(n)).call(this, e)
              );
              return (t.childBindings = { domNode: null }), t;
            }
            return (
              a(n, t),
              i(n, [
                {
                  key: "componentDidMount",
                  value: function () {
                    if ("undefined" == typeof window) return !1;
                    this.registerElems(this.props.name);
                  },
                },
                {
                  key: "componentDidUpdate",
                  value: function (e) {
                    this.props.name !== e.name &&
                      this.registerElems(this.props.name);
                  },
                },
                {
                  key: "componentWillUnmount",
                  value: function () {
                    if ("undefined" == typeof window) return !1;
                    c.unregister(this.props.name);
                  },
                },
                {
                  key: "registerElems",
                  value: function (e) {
                    c.register(e, this.childBindings.domNode);
                  },
                },
                {
                  key: "render",
                  value: function () {
                    return l.createElement(
                      e,
                      r({}, this.props, { parentBindings: this.childBindings })
                    );
                  },
                },
              ]),
              n
            );
          })(l.Component);
          return (t.propTypes = { name: d.string, id: d.string }), t;
        },
      };
    },
    27793: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        };
      a(n(40659));
      var i = a(n(32684)),
        o = a(n(7050)),
        s = a(n(90496));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var l = function (e) {
          return i.default[e.smooth] || i.default.defaultEasing;
        },
        u =
          (function () {
            if ("undefined" != typeof window)
              return (
                window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame
              );
          })() ||
          function (e, t, n) {
            window.setTimeout(e, n || 1e3 / 60, new Date().getTime());
          },
        c = function () {
          return {
            currentPosition: 0,
            startPosition: 0,
            targetPosition: 0,
            progress: 0,
            duration: 0,
            cancel: !1,
            target: null,
            containerElement: null,
            to: null,
            start: null,
            delta: null,
            percent: null,
            delayTimeout: null,
          };
        },
        d = function (e) {
          var t = e.data.containerElement;
          if (t && t !== document && t !== document.body) return t.scrollLeft;
          var n = void 0 !== window.pageXOffset,
            r = "CSS1Compat" === (document.compatMode || "");
          return n
            ? window.pageXOffset
            : r
            ? document.documentElement.scrollLeft
            : document.body.scrollLeft;
        },
        f = function (e) {
          var t = e.data.containerElement;
          if (t && t !== document && t !== document.body) return t.scrollTop;
          var n = void 0 !== window.pageXOffset,
            r = "CSS1Compat" === (document.compatMode || "");
          return n
            ? window.pageYOffset
            : r
            ? document.documentElement.scrollTop
            : document.body.scrollTop;
        },
        h = function (e) {
          var t = e.data.containerElement;
          if (t && t !== document && t !== document.body)
            return t.scrollWidth - t.offsetWidth;
          var n = document.body,
            r = document.documentElement;
          return Math.max(
            n.scrollWidth,
            n.offsetWidth,
            r.clientWidth,
            r.scrollWidth,
            r.offsetWidth
          );
        },
        p = function (e) {
          var t = e.data.containerElement;
          if (t && t !== document && t !== document.body)
            return t.scrollHeight - t.offsetHeight;
          var n = document.body,
            r = document.documentElement;
          return Math.max(
            n.scrollHeight,
            n.offsetHeight,
            r.clientHeight,
            r.scrollHeight,
            r.offsetHeight
          );
        },
        m = function e(t, n, r) {
          var i = n.data;
          if (!n.ignoreCancelEvents && i.cancel) {
            s.default.registered.end &&
              s.default.registered.end(i.to, i.target, i.currentPositionY);
            return;
          }
          if (
            ((i.delta = Math.round(i.targetPosition - i.startPosition)),
            null === i.start && (i.start = r),
            (i.progress = r - i.start),
            (i.percent =
              i.progress >= i.duration ? 1 : t(i.progress / i.duration)),
            (i.currentPosition =
              i.startPosition + Math.ceil(i.delta * i.percent)),
            i.containerElement &&
            i.containerElement !== document &&
            i.containerElement !== document.body
              ? n.horizontal
                ? (i.containerElement.scrollLeft = i.currentPosition)
                : (i.containerElement.scrollTop = i.currentPosition)
              : n.horizontal
              ? window.scrollTo(i.currentPosition, 0)
              : window.scrollTo(0, i.currentPosition),
            i.percent < 1)
          ) {
            var o = e.bind(null, t, n);
            u.call(window, o);
            return;
          }
          s.default.registered.end &&
            s.default.registered.end(i.to, i.target, i.currentPosition);
        },
        v = function (e) {
          e.data.containerElement = e
            ? e.containerId
              ? document.getElementById(e.containerId)
              : e.container && e.container.nodeType
              ? e.container
              : document
            : null;
        },
        g = function (e, t, n, r) {
          if (
            ((t.data = t.data || c()),
            window.clearTimeout(t.data.delayTimeout),
            o.default.subscribe(function () {
              t.data.cancel = !0;
            }),
            v(t),
            (t.data.start = null),
            (t.data.cancel = !1),
            (t.data.startPosition = t.horizontal ? d(t) : f(t)),
            (t.data.targetPosition = t.absolute ? e : e + t.data.startPosition),
            t.data.startPosition === t.data.targetPosition)
          ) {
            s.default.registered.end &&
              s.default.registered.end(
                t.data.to,
                t.data.target,
                t.data.currentPosition
              );
            return;
          }
          (t.data.delta = Math.round(
            t.data.targetPosition - t.data.startPosition
          )),
            (t.data.duration = (
              "function" == typeof (i = t.duration)
                ? i
                : function () {
                    return i;
                  }
            )(t.data.delta)),
            (t.data.duration = isNaN(parseFloat(t.data.duration))
              ? 1e3
              : parseFloat(t.data.duration)),
            (t.data.to = n),
            (t.data.target = r);
          var i,
            a = l(t),
            h = m.bind(null, a, t);
          if (t && t.delay > 0) {
            t.data.delayTimeout = window.setTimeout(function () {
              s.default.registered.begin &&
                s.default.registered.begin(t.data.to, t.data.target),
                u.call(window, h);
            }, t.delay);
            return;
          }
          s.default.registered.begin &&
            s.default.registered.begin(t.data.to, t.data.target),
            u.call(window, h);
        },
        y = function (e) {
          return ((e = r({}, e)).data = e.data || c()), (e.absolute = !0), e;
        };
      t.default = {
        animateTopScroll: g,
        getAnimationType: l,
        scrollToTop: function (e) {
          g(0, y(e));
        },
        scrollToBottom: function (e) {
          v((e = y(e))), g(e.horizontal ? h(e) : p(e), e);
        },
        scrollTo: function (e, t) {
          g(e, y(t));
        },
        scrollMore: function (e, t) {
          v((t = y(t))), g(e + (t.horizontal ? d(t) : f(t)), t);
        },
      };
    },
    7050: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(32165),
        i = ["mousedown", "mousewheel", "touchmove", "keydown"];
      t.default = {
        subscribe: function (e) {
          return (
            "undefined" != typeof document &&
            i.forEach(function (t) {
              return (0, r.addPassiveEventListener)(document, t, e);
            })
          );
        },
      };
    },
    32165: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.addPassiveEventListener = function (e, t, r) {
          var i = r.name;
          i || ((i = t), console.warn("Listener must be a named function.")),
            n.has(t) || n.set(t, new Set());
          var o = n.get(t);
          if (!o.has(i)) {
            var s = (function () {
              var e = !1;
              try {
                var t = Object.defineProperty({}, "passive", {
                  get: function () {
                    e = !0;
                  },
                });
                window.addEventListener("test", null, t);
              } catch (e) {}
              return e;
            })();
            e.addEventListener(t, r, !!s && { passive: !0 }), o.add(i);
          }
        }),
        (t.removePassiveEventListener = function (e, t, r) {
          e.removeEventListener(t, r), n.get(t).delete(r.name || t);
        });
      var n = new Map();
    },
    29942: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        i = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        o = l(n(2784));
      l(n(28316));
      var s = l(n(73123)),
        a = l(n(13980));
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      t.default = function (e) {
        var t = (function (t) {
          function n(e) {
            !(function (e, t) {
              if (!(e instanceof t))
                throw TypeError("Cannot call a class as a function");
            })(this, n);
            var t = (function (e, t) {
              if (!e)
                throw ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t && ("object" == typeof t || "function" == typeof t)
                ? t
                : e;
            })(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, e));
            return (t.childBindings = { domNode: null }), t;
          }
          return (
            !(function (e, t) {
              if ("function" != typeof t && null !== t)
                throw TypeError(
                  "Super expression must either be null or a function, not " +
                    typeof t
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t));
            })(n, t),
            i(n, [
              {
                key: "componentDidMount",
                value: function () {
                  if ("undefined" == typeof window) return !1;
                  this.registerElems(this.props.name);
                },
              },
              {
                key: "componentDidUpdate",
                value: function (e) {
                  this.props.name !== e.name &&
                    this.registerElems(this.props.name);
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  if ("undefined" == typeof window) return !1;
                  s.default.unregister(this.props.name);
                },
              },
              {
                key: "registerElems",
                value: function (e) {
                  s.default.register(e, this.childBindings.domNode);
                },
              },
              {
                key: "render",
                value: function () {
                  return o.default.createElement(
                    e,
                    r({}, this.props, { parentBindings: this.childBindings })
                  );
                },
              },
            ]),
            n
          );
        })(o.default.Component);
        return (
          (t.propTypes = { name: a.default.string, id: a.default.string }), t
        );
      };
    },
    90496: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        registered: {},
        scrollEvent: {
          register: function (e, t) {
            n.registered[e] = t;
          },
          remove: function (e) {
            n.registered[e] = null;
          },
        },
      };
      t.default = n;
    },
    67654: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), n(32165);
      var r,
        i = (r = n(40659)) && r.__esModule ? r : { default: r };
      t.default = {
        mountFlag: !1,
        initialized: !1,
        scroller: null,
        containers: {},
        mount: function (e) {
          (this.scroller = e),
            (this.handleHashChange = this.handleHashChange.bind(this)),
            window.addEventListener("hashchange", this.handleHashChange),
            this.initStateFromHash(),
            (this.mountFlag = !0);
        },
        mapContainer: function (e, t) {
          this.containers[e] = t;
        },
        isMounted: function () {
          return this.mountFlag;
        },
        isInitialized: function () {
          return this.initialized;
        },
        initStateFromHash: function () {
          var e = this,
            t = this.getHash();
          t
            ? window.setTimeout(function () {
                e.scrollTo(t, !0), (e.initialized = !0);
              }, 10)
            : (this.initialized = !0);
        },
        scrollTo: function (e, t) {
          var n = this.scroller;
          if (n.get(e) && (t || e !== n.getActiveLink())) {
            var r = this.containers[e] || document;
            n.scrollTo(e, { container: r });
          }
        },
        getHash: function () {
          return i.default.getHash();
        },
        changeHash: function (e, t) {
          this.isInitialized() &&
            i.default.getHash() !== e &&
            i.default.updateHash(e, t);
        },
        handleHashChange: function () {
          this.scrollTo(this.getHash());
        },
        unmount: function () {
          (this.scroller = null),
            (this.containers = null),
            window.removeEventListener("hashchange", this.handleHashChange);
        },
      };
    },
    90679: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        i = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        o = c(n(2784)),
        s = c(n(70752)),
        a = c(n(73123)),
        l = c(n(13980)),
        u = c(n(67654));
      function c(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var d = {
        to: l.default.string.isRequired,
        containerId: l.default.string,
        container: l.default.object,
        activeClass: l.default.string,
        activeStyle: l.default.object,
        spy: l.default.bool,
        horizontal: l.default.bool,
        smooth: l.default.oneOfType([l.default.bool, l.default.string]),
        offset: l.default.number,
        delay: l.default.number,
        isDynamic: l.default.bool,
        onClick: l.default.func,
        duration: l.default.oneOfType([l.default.number, l.default.func]),
        absolute: l.default.bool,
        onSetActive: l.default.func,
        onSetInactive: l.default.func,
        ignoreCancelEvents: l.default.bool,
        hashSpy: l.default.bool,
        saveHashHistory: l.default.bool,
        spyThrottle: l.default.number,
      };
      t.default = function (e, t) {
        var n = t || a.default,
          l = (function (t) {
            function a(e) {
              !(function (e, t) {
                if (!(e instanceof t))
                  throw TypeError("Cannot call a class as a function");
              })(this, a);
              var t = (function (e, t) {
                if (!e)
                  throw ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return t && ("object" == typeof t || "function" == typeof t)
                  ? t
                  : e;
              })(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, e));
              return c.call(t), (t.state = { active: !1 }), t;
            }
            return (
              !(function (e, t) {
                if ("function" != typeof t && null !== t)
                  throw TypeError(
                    "Super expression must either be null or a function, not " +
                      typeof t
                  );
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                  t &&
                    (Object.setPrototypeOf
                      ? Object.setPrototypeOf(e, t)
                      : (e.__proto__ = t));
              })(a, t),
              i(a, [
                {
                  key: "getScrollSpyContainer",
                  value: function () {
                    var e = this.props.containerId,
                      t = this.props.container;
                    return e && !t
                      ? document.getElementById(e)
                      : t && t.nodeType
                      ? t
                      : document;
                  },
                },
                {
                  key: "componentDidMount",
                  value: function () {
                    if (this.props.spy || this.props.hashSpy) {
                      var e = this.getScrollSpyContainer();
                      s.default.isMounted(e) ||
                        s.default.mount(e, this.props.spyThrottle),
                        this.props.hashSpy &&
                          (u.default.isMounted() || u.default.mount(n),
                          u.default.mapContainer(this.props.to, e)),
                        s.default.addSpyHandler(this.spyHandler, e),
                        this.setState({ container: e });
                    }
                  },
                },
                {
                  key: "componentWillUnmount",
                  value: function () {
                    s.default.unmount(this.stateHandler, this.spyHandler);
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var t = "";
                    t =
                      this.state && this.state.active
                        ? (
                            (this.props.className || "") +
                            " " +
                            (this.props.activeClass || "active")
                          ).trim()
                        : this.props.className;
                    var n = {};
                    n =
                      this.state && this.state.active
                        ? r({}, this.props.style, this.props.activeStyle)
                        : r({}, this.props.style);
                    var i = r({}, this.props);
                    for (var s in d) i.hasOwnProperty(s) && delete i[s];
                    return (
                      (i.className = t),
                      (i.style = n),
                      (i.onClick = this.handleClick),
                      o.default.createElement(e, i)
                    );
                  },
                },
              ]),
              a
            );
          })(o.default.PureComponent),
          c = function () {
            var e = this;
            (this.scrollTo = function (t, i) {
              n.scrollTo(t, r({}, e.state, i));
            }),
              (this.handleClick = function (t) {
                e.props.onClick && e.props.onClick(t),
                  t.stopPropagation && t.stopPropagation(),
                  t.preventDefault && t.preventDefault(),
                  e.scrollTo(e.props.to, e.props);
              }),
              (this.spyHandler = function (t, r) {
                var i = e.getScrollSpyContainer();
                if (!u.default.isMounted() || u.default.isInitialized()) {
                  var o = e.props.horizontal,
                    s = e.props.to,
                    a = null,
                    l = void 0,
                    c = void 0;
                  if (o) {
                    var d = 0,
                      f = 0,
                      h = 0;
                    if (
                      (i.getBoundingClientRect &&
                        (h = i.getBoundingClientRect().left),
                      !a || e.props.isDynamic)
                    ) {
                      if (!(a = n.get(s))) return;
                      var p = a.getBoundingClientRect();
                      f = (d = p.left - h + t) + p.width;
                    }
                    var m = t - e.props.offset;
                    (l = m >= Math.floor(d) && m < Math.floor(f)),
                      (c = m < Math.floor(d) || m >= Math.floor(f));
                  } else {
                    var v = 0,
                      g = 0,
                      y = 0;
                    if (
                      (i.getBoundingClientRect &&
                        (y = i.getBoundingClientRect().top),
                      !a || e.props.isDynamic)
                    ) {
                      if (!(a = n.get(s))) return;
                      var b = a.getBoundingClientRect();
                      g = (v = b.top - y + r) + b.height;
                    }
                    var P = r - e.props.offset;
                    (l = P >= Math.floor(v) && P < Math.floor(g)),
                      (c = P < Math.floor(v) || P >= Math.floor(g));
                  }
                  var x = n.getActiveLink();
                  if (c) {
                    if (
                      (s === x && n.setActiveLink(void 0),
                      e.props.hashSpy && u.default.getHash() === s)
                    ) {
                      var w = e.props.saveHashHistory;
                      u.default.changeHash("", void 0 !== w && w);
                    }
                    e.props.spy &&
                      e.state.active &&
                      (e.setState({ active: !1 }),
                      e.props.onSetInactive && e.props.onSetInactive(s, a));
                  }
                  if (l && (x !== s || !1 === e.state.active)) {
                    n.setActiveLink(s);
                    var E = e.props.saveHashHistory;
                    e.props.hashSpy &&
                      u.default.changeHash(s, void 0 !== E && E),
                      e.props.spy &&
                        (e.setState({ active: !0 }),
                        e.props.onSetActive && e.props.onSetActive(s, a));
                  }
                }
              });
          };
        return (l.propTypes = d), (l.defaultProps = { offset: 0 }), l;
      };
    },
    70752: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r,
        i = (r = n(98357)) && r.__esModule ? r : { default: r },
        o = n(32165),
        s = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 66;
          return (0, i.default)(e, t);
        },
        a = {
          spyCallbacks: [],
          spySetState: [],
          scrollSpyContainers: [],
          mount: function (e, t) {
            if (e) {
              var n = s(function (t) {
                a.scrollHandler(e);
              }, t);
              a.scrollSpyContainers.push(e),
                (0, o.addPassiveEventListener)(e, "scroll", n);
            }
          },
          isMounted: function (e) {
            return -1 !== a.scrollSpyContainers.indexOf(e);
          },
          currentPositionX: function (e) {
            if (e !== document) return e.scrollLeft;
            var t = void 0 !== window.pageYOffset,
              n = "CSS1Compat" === (document.compatMode || "");
            return t
              ? window.pageXOffset
              : n
              ? document.documentElement.scrollLeft
              : document.body.scrollLeft;
          },
          currentPositionY: function (e) {
            if (e !== document) return e.scrollTop;
            var t = void 0 !== window.pageXOffset,
              n = "CSS1Compat" === (document.compatMode || "");
            return t
              ? window.pageYOffset
              : n
              ? document.documentElement.scrollTop
              : document.body.scrollTop;
          },
          scrollHandler: function (e) {
            (
              a.scrollSpyContainers[a.scrollSpyContainers.indexOf(e)]
                .spyCallbacks || []
            ).forEach(function (t) {
              return t(a.currentPositionX(e), a.currentPositionY(e));
            });
          },
          addStateHandler: function (e) {
            a.spySetState.push(e);
          },
          addSpyHandler: function (e, t) {
            var n = a.scrollSpyContainers[a.scrollSpyContainers.indexOf(t)];
            n.spyCallbacks || (n.spyCallbacks = []),
              n.spyCallbacks.push(e),
              e(a.currentPositionX(t), a.currentPositionY(t));
          },
          updateStates: function () {
            a.spySetState.forEach(function (e) {
              return e();
            });
          },
          unmount: function (e, t) {
            a.scrollSpyContainers.forEach(function (e) {
              return (
                e.spyCallbacks &&
                e.spyCallbacks.length &&
                e.spyCallbacks.indexOf(t) > -1 &&
                e.spyCallbacks.splice(e.spyCallbacks.indexOf(t), 1)
              );
            }),
              a.spySetState &&
                a.spySetState.length &&
                a.spySetState.indexOf(e) > -1 &&
                a.spySetState.splice(a.spySetState.indexOf(e), 1),
              document.removeEventListener("scroll", a.scrollHandler);
          },
          update: function () {
            return a.scrollSpyContainers.forEach(function (e) {
              return a.scrollHandler(e);
            });
          },
        };
      t.default = a;
    },
    73123: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        i = a(n(40659)),
        o = a(n(27793)),
        s = a(n(90496));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var l = {},
        u = void 0;
      t.default = {
        unmount: function () {
          l = {};
        },
        register: function (e, t) {
          l[e] = t;
        },
        unregister: function (e) {
          delete l[e];
        },
        get: function (e) {
          return (
            l[e] ||
            document.getElementById(e) ||
            document.getElementsByName(e)[0] ||
            document.getElementsByClassName(e)[0]
          );
        },
        setActiveLink: function (e) {
          return (u = e);
        },
        getActiveLink: function () {
          return u;
        },
        scrollTo: function (e, t) {
          var n = this.get(e);
          if (!n) {
            console.warn("target Element not found");
            return;
          }
          var a = (t = r({}, t, { absolute: !1 })).containerId,
            l = t.container,
            u = void 0;
          (u = a ? document.getElementById(a) : l && l.nodeType ? l : document),
            (t.absolute = !0);
          var c = t.horizontal,
            d = i.default.scrollOffset(u, n, c) + (t.offset || 0);
          if (!t.smooth) {
            s.default.registered.begin && s.default.registered.begin(e, n),
              u === document
                ? t.horizontal
                  ? window.scrollTo(d, 0)
                  : window.scrollTo(0, d)
                : (u.scrollTop = d),
              s.default.registered.end && s.default.registered.end(e, n);
            return;
          }
          o.default.animateTopScroll(d, t, e, n);
        },
      };
    },
    32684: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = {
          defaultEasing: function (e) {
            return e < 0.5
              ? Math.pow(2 * e, 2) / 2
              : 1 - Math.pow((1 - e) * 2, 2) / 2;
          },
          linear: function (e) {
            return e;
          },
          easeInQuad: function (e) {
            return e * e;
          },
          easeOutQuad: function (e) {
            return e * (2 - e);
          },
          easeInOutQuad: function (e) {
            return e < 0.5 ? 2 * e * e : -1 + (4 - 2 * e) * e;
          },
          easeInCubic: function (e) {
            return e * e * e;
          },
          easeOutCubic: function (e) {
            return --e * e * e + 1;
          },
          easeInOutCubic: function (e) {
            return e < 0.5
              ? 4 * e * e * e
              : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1;
          },
          easeInQuart: function (e) {
            return e * e * e * e;
          },
          easeOutQuart: function (e) {
            return 1 - --e * e * e * e;
          },
          easeInOutQuart: function (e) {
            return e < 0.5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e;
          },
          easeInQuint: function (e) {
            return e * e * e * e * e;
          },
          easeOutQuint: function (e) {
            return 1 + --e * e * e * e * e;
          },
          easeInOutQuint: function (e) {
            return e < 0.5
              ? 16 * e * e * e * e * e
              : 1 + 16 * --e * e * e * e * e;
          },
        });
    },
    40659: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = function (e, t) {
        for (var n = e.offsetTop, r = e.offsetParent; r && !t(r); )
          (n += r.offsetTop), (r = r.offsetParent);
        return { offsetTop: n, offsetParent: r };
      };
      t.default = {
        updateHash: function (e, t) {
          var n = 0 === e.indexOf("#") ? e.substring(1) : e,
            r = n ? "#" + n : "",
            i = window && window.location,
            o = r ? i.pathname + i.search + r : i.pathname + i.search;
          t
            ? history.pushState(history.state, "", o)
            : history.replaceState(history.state, "", o);
        },
        getHash: function () {
          return window.location.hash.replace(/^#/, "");
        },
        filterElementInContainer: function (e) {
          return function (t) {
            return e.contains
              ? e != t && e.contains(t)
              : !!(16 & e.compareDocumentPosition(t));
          };
        },
        scrollOffset: function (e, t, r) {
          if (r)
            return e === document
              ? t.getBoundingClientRect().left +
                  (window.scrollX || window.pageXOffset)
              : "static" !== getComputedStyle(e).position
              ? t.offsetLeft
              : t.offsetLeft - e.offsetLeft;
          if (e === document)
            return (
              t.getBoundingClientRect().top +
              (window.scrollY || window.pageYOffset)
            );
          if ("static" !== getComputedStyle(e).position) {
            if (t.offsetParent !== e) {
              var i = n(t, function (t) {
                  return t === e || t === document;
                }),
                o = i.offsetTop;
              if (i.offsetParent !== e)
                throw Error(
                  "Seems containerElement is not an ancestor of the Element"
                );
              return o;
            }
            return t.offsetTop;
          }
          if (t.offsetParent === e.offsetParent)
            return t.offsetTop - e.offsetTop;
          var s = function (e) {
            return e === document;
          };
          return n(t, s).offsetTop - n(e, s).offsetTop;
        },
      };
    },
    99108: function (e, t, n) {
      "use strict";
      n.d(t, {
        R: function () {
          return i;
        },
      });
      var r,
        i =
          (((r = i || {}).Space = " "),
          (r.Enter = "Enter"),
          (r.Escape = "Escape"),
          (r.Backspace = "Backspace"),
          (r.Delete = "Delete"),
          (r.ArrowLeft = "ArrowLeft"),
          (r.ArrowUp = "ArrowUp"),
          (r.ArrowRight = "ArrowRight"),
          (r.ArrowDown = "ArrowDown"),
          (r.Home = "Home"),
          (r.End = "End"),
          (r.PageUp = "PageUp"),
          (r.PageDown = "PageDown"),
          (r.Tab = "Tab"),
          r);
    },
    1425: function (e, t, n) {
      "use strict";
      n.d(t, {
        v: function () {
          return N;
        },
      });
      var r,
        i,
        o,
        s,
        a = n(2784),
        l = n(58314),
        u = n(55559),
        c = n(80586),
        d = n(88064),
        f = n(32994),
        h = n(70592);
      function p(e) {
        var t;
        if (e.type) return e.type;
        let n = null != (t = e.as) ? t : "button";
        if ("string" == typeof n && "button" === n.toLowerCase())
          return "button";
      }
      var m = n(33401);
      let v =
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
      function g(e) {
        var t, n;
        let r = null != (t = e.innerText) ? t : "",
          i = e.cloneNode(!0);
        if (!(i instanceof HTMLElement)) return r;
        let o = !1;
        for (let e of i.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))
          e.remove(), (o = !0);
        let s = o ? (null != (n = i.innerText) ? n : "") : r;
        return v.test(s) && (s = s.replace(v, "")), s;
      }
      function y(e) {
        return [e.screenX, e.screenY];
      }
      var b = n(29833),
        P = n(47215),
        x = n(15426),
        w =
          (((r = w || {})[(r.First = 0)] = "First"),
          (r[(r.Previous = 1)] = "Previous"),
          (r[(r.Next = 2)] = "Next"),
          (r[(r.Last = 3)] = "Last"),
          (r[(r.Specific = 4)] = "Specific"),
          (r[(r.Nothing = 5)] = "Nothing"),
          r),
        E = n(6173),
        T = n(52929),
        S = n(3703),
        C = n(90544),
        M = n(99108),
        A =
          (((i = A || {})[(i.Open = 0)] = "Open"),
          (i[(i.Closed = 1)] = "Closed"),
          i),
        O =
          (((o = O || {})[(o.Pointer = 0)] = "Pointer"),
          (o[(o.Other = 1)] = "Other"),
          o),
        k =
          (((s = k || {})[(s.OpenMenu = 0)] = "OpenMenu"),
          (s[(s.CloseMenu = 1)] = "CloseMenu"),
          (s[(s.GoToItem = 2)] = "GoToItem"),
          (s[(s.Search = 3)] = "Search"),
          (s[(s.ClearSearch = 4)] = "ClearSearch"),
          (s[(s.RegisterItem = 5)] = "RegisterItem"),
          (s[(s.UnregisterItem = 6)] = "UnregisterItem"),
          s);
      function R(e, t = (e) => e) {
        let n = null !== e.activeItemIndex ? e.items[e.activeItemIndex] : null,
          r = (0, T.z2)(
            t(e.items.slice()),
            (e) => e.dataRef.current.domRef.current
          ),
          i = n ? r.indexOf(n) : null;
        return -1 === i && (i = null), { items: r, activeItemIndex: i };
      }
      let j = {
          1: (e) =>
            1 === e.menuState
              ? e
              : { ...e, activeItemIndex: null, menuState: 1 },
          0: (e) =>
            0 === e.menuState ? e : { ...e, __demoMode: !1, menuState: 0 },
          2: (e, t) => {
            var n;
            let r = R(e),
              i = (function (e, t) {
                let n = t.resolveItems();
                if (n.length <= 0) return null;
                let r = t.resolveActiveIndex(),
                  i = null != r ? r : -1;
                switch (e.focus) {
                  case 0:
                    for (let e = 0; e < n.length; ++e)
                      if (!t.resolveDisabled(n[e], e, n)) return e;
                    return r;
                  case 1:
                    for (let e = i - 1; e >= 0; --e)
                      if (!t.resolveDisabled(n[e], e, n)) return e;
                    return r;
                  case 2:
                    for (let e = i + 1; e < n.length; ++e)
                      if (!t.resolveDisabled(n[e], e, n)) return e;
                    return r;
                  case 3:
                    for (let e = n.length - 1; e >= 0; --e)
                      if (!t.resolveDisabled(n[e], e, n)) return e;
                    return r;
                  case 4:
                    for (let r = 0; r < n.length; ++r)
                      if (t.resolveId(n[r], r, n) === e.id) return r;
                    return r;
                  case 5:
                    return null;
                  default:
                    !(function (e) {
                      throw Error("Unexpected object: " + e);
                    })(e);
                }
              })(t, {
                resolveItems: () => r.items,
                resolveActiveIndex: () => r.activeItemIndex,
                resolveId: (e) => e.id,
                resolveDisabled: (e) => e.dataRef.current.disabled,
              });
            return {
              ...e,
              ...r,
              searchQuery: "",
              activeItemIndex: i,
              activationTrigger: null != (n = t.trigger) ? n : 1,
            };
          },
          3: (e, t) => {
            let n = "" !== e.searchQuery ? 0 : 1,
              r = e.searchQuery + t.value.toLowerCase(),
              i = (
                null !== e.activeItemIndex
                  ? e.items
                      .slice(e.activeItemIndex + n)
                      .concat(e.items.slice(0, e.activeItemIndex + n))
                  : e.items
              ).find((e) => {
                var t;
                return (
                  (null == (t = e.dataRef.current.textValue)
                    ? void 0
                    : t.startsWith(r)) && !e.dataRef.current.disabled
                );
              }),
              o = i ? e.items.indexOf(i) : -1;
            return -1 === o || o === e.activeItemIndex
              ? { ...e, searchQuery: r }
              : {
                  ...e,
                  searchQuery: r,
                  activeItemIndex: o,
                  activationTrigger: 1,
                };
          },
          4: (e) =>
            "" === e.searchQuery
              ? e
              : { ...e, searchQuery: "", searchActiveItemIndex: null },
          5: (e, t) => {
            let n = R(e, (e) => [...e, { id: t.id, dataRef: t.dataRef }]);
            return { ...e, ...n };
          },
          6: (e, t) => {
            let n = R(e, (e) => {
              let n = e.findIndex((e) => e.id === t.id);
              return -1 !== n && e.splice(n, 1), e;
            });
            return { ...e, ...n, activationTrigger: 1 };
          },
        },
        D = (0, a.createContext)(null);
      function L(e) {
        let t = (0, a.useContext)(D);
        if (null === t) {
          let t = Error(`<${e} /> is missing a parent <Menu /> component.`);
          throw (Error.captureStackTrace && Error.captureStackTrace(t, L), t);
        }
        return t;
      }
      function V(e, t) {
        return (0, S.E)(t.type, j, e, t);
      }
      D.displayName = "MenuContext";
      let _ = a.Fragment,
        F = C.AN.RenderStrategy | C.AN.Static,
        I = a.Fragment,
        N = Object.assign(
          (0, C.yV)(function (e, t) {
            let { __demoMode: n = !1, ...r } = e,
              i = (0, a.useReducer)(V, {
                __demoMode: n,
                menuState: n ? 0 : 1,
                buttonRef: (0, a.createRef)(),
                itemsRef: (0, a.createRef)(),
                items: [],
                searchQuery: "",
                activeItemIndex: null,
                activationTrigger: 1,
              }),
              [{ menuState: o, itemsRef: s, buttonRef: l }, c] = i,
              d = (0, m.T)(t);
            (0, f.O)(
              [l, s],
              (e, t) => {
                var n;
                c({ type: 1 }),
                  (0, T.sP)(t, T.tJ.Loose) ||
                    (e.preventDefault(), null == (n = l.current) || n.focus());
              },
              0 === o
            );
            let h = (0, u.z)(() => {
                c({ type: 1 });
              }),
              p = (0, a.useMemo)(() => ({ open: 0 === o, close: h }), [o, h]);
            return a.createElement(
              D.Provider,
              { value: i },
              a.createElement(
                P.up,
                { value: (0, S.E)(o, { 0: P.ZM.Open, 1: P.ZM.Closed }) },
                (0, C.sY)({
                  ourProps: { ref: d },
                  theirProps: r,
                  slot: p,
                  defaultTag: _,
                  name: "Menu",
                })
              )
            );
          }),
          {
            Button: (0, C.yV)(function (e, t) {
              var n;
              let r = (0, c.M)(),
                { id: i = `headlessui-menu-button-${r}`, ...o } = e,
                [s, f] = L("Menu.Button"),
                h = (0, m.T)(s.buttonRef, t),
                v = (0, l.G)(),
                g = (0, u.z)((e) => {
                  switch (e.key) {
                    case M.R.Space:
                    case M.R.Enter:
                    case M.R.ArrowDown:
                      e.preventDefault(),
                        e.stopPropagation(),
                        f({ type: 0 }),
                        v.nextFrame(() => f({ type: 2, focus: w.First }));
                      break;
                    case M.R.ArrowUp:
                      e.preventDefault(),
                        e.stopPropagation(),
                        f({ type: 0 }),
                        v.nextFrame(() => f({ type: 2, focus: w.Last }));
                  }
                }),
                y = (0, u.z)((e) => {
                  e.key === M.R.Space && e.preventDefault();
                }),
                b = (0, u.z)((t) => {
                  if ((0, x.P)(t.currentTarget)) return t.preventDefault();
                  e.disabled ||
                    (0 === s.menuState
                      ? (f({ type: 1 }),
                        v.nextFrame(() => {
                          var e;
                          return null == (e = s.buttonRef.current)
                            ? void 0
                            : e.focus({ preventScroll: !0 });
                        }))
                      : (t.preventDefault(), f({ type: 0 })));
                }),
                P = (0, a.useMemo)(() => ({ open: 0 === s.menuState }), [s]),
                E = {
                  ref: h,
                  id: i,
                  type: (function (e, t) {
                    let [n, r] = (0, a.useState)(() => p(e));
                    return (
                      (0, d.e)(() => {
                        r(p(e));
                      }, [e.type, e.as]),
                      (0, d.e)(() => {
                        n ||
                          (t.current &&
                            t.current instanceof HTMLButtonElement &&
                            !t.current.hasAttribute("type") &&
                            r("button"));
                      }, [n, t]),
                      n
                    );
                  })(e, s.buttonRef),
                  "aria-haspopup": "menu",
                  "aria-controls":
                    null == (n = s.itemsRef.current) ? void 0 : n.id,
                  "aria-expanded": 0 === s.menuState,
                  onKeyDown: g,
                  onKeyUp: y,
                  onClick: b,
                };
              return (0,
              C.sY)({ ourProps: E, theirProps: o, slot: P, defaultTag: "button", name: "Menu.Button" });
            }),
            Items: (0, C.yV)(function (e, t) {
              var n, r;
              let i = (0, c.M)(),
                { id: o = `headlessui-menu-items-${i}`, ...s } = e,
                [f, p] = L("Menu.Items"),
                v = (0, m.T)(f.itemsRef, t),
                g = (0, h.i)(f.itemsRef),
                y = (0, l.G)(),
                x = (0, P.oJ)(),
                S =
                  null !== x
                    ? (x & P.ZM.Open) === P.ZM.Open
                    : 0 === f.menuState;
              (0, a.useEffect)(() => {
                let e = f.itemsRef.current;
                e &&
                  0 === f.menuState &&
                  e !== (null == g ? void 0 : g.activeElement) &&
                  e.focus({ preventScroll: !0 });
              }, [f.menuState, f.itemsRef, g]),
                (function ({
                  container: e,
                  accept: t,
                  walk: n,
                  enabled: r = !0,
                }) {
                  let i = (0, a.useRef)(t),
                    o = (0, a.useRef)(n);
                  (0, a.useEffect)(() => {
                    (i.current = t), (o.current = n);
                  }, [t, n]),
                    (0, d.e)(() => {
                      if (!e || !r) return;
                      let t = (0, b.r)(e);
                      if (!t) return;
                      let n = i.current,
                        s = o.current,
                        a = Object.assign((e) => n(e), { acceptNode: n }),
                        l = t.createTreeWalker(
                          e,
                          NodeFilter.SHOW_ELEMENT,
                          a,
                          !1
                        );
                      for (; l.nextNode(); ) s(l.currentNode);
                    }, [e, r, i, o]);
                })({
                  container: f.itemsRef.current,
                  enabled: 0 === f.menuState,
                  accept: (e) =>
                    "menuitem" === e.getAttribute("role")
                      ? NodeFilter.FILTER_REJECT
                      : e.hasAttribute("role")
                      ? NodeFilter.FILTER_SKIP
                      : NodeFilter.FILTER_ACCEPT,
                  walk(e) {
                    e.setAttribute("role", "none");
                  },
                });
              let A = (0, u.z)((e) => {
                  var t, n;
                  switch ((y.dispose(), e.key)) {
                    case M.R.Space:
                      if ("" !== f.searchQuery)
                        return (
                          e.preventDefault(),
                          e.stopPropagation(),
                          p({ type: 3, value: e.key })
                        );
                    case M.R.Enter:
                      if (
                        (e.preventDefault(),
                        e.stopPropagation(),
                        p({ type: 1 }),
                        null !== f.activeItemIndex)
                      ) {
                        let { dataRef: e } = f.items[f.activeItemIndex];
                        null ==
                          (n =
                            null == (t = e.current)
                              ? void 0
                              : t.domRef.current) || n.click();
                      }
                      (0, T.wI)(f.buttonRef.current);
                      break;
                    case M.R.ArrowDown:
                      return (
                        e.preventDefault(),
                        e.stopPropagation(),
                        p({ type: 2, focus: w.Next })
                      );
                    case M.R.ArrowUp:
                      return (
                        e.preventDefault(),
                        e.stopPropagation(),
                        p({ type: 2, focus: w.Previous })
                      );
                    case M.R.Home:
                    case M.R.PageUp:
                      return (
                        e.preventDefault(),
                        e.stopPropagation(),
                        p({ type: 2, focus: w.First })
                      );
                    case M.R.End:
                    case M.R.PageDown:
                      return (
                        e.preventDefault(),
                        e.stopPropagation(),
                        p({ type: 2, focus: w.Last })
                      );
                    case M.R.Escape:
                      e.preventDefault(),
                        e.stopPropagation(),
                        p({ type: 1 }),
                        (0, E.k)().nextFrame(() => {
                          var e;
                          return null == (e = f.buttonRef.current)
                            ? void 0
                            : e.focus({ preventScroll: !0 });
                        });
                      break;
                    case M.R.Tab:
                      e.preventDefault(),
                        e.stopPropagation(),
                        p({ type: 1 }),
                        (0, E.k)().nextFrame(() => {
                          (0, T.EO)(
                            f.buttonRef.current,
                            e.shiftKey ? T.TO.Previous : T.TO.Next
                          );
                        });
                      break;
                    default:
                      1 === e.key.length &&
                        (p({ type: 3, value: e.key }),
                        y.setTimeout(() => p({ type: 4 }), 350));
                  }
                }),
                O = (0, u.z)((e) => {
                  e.key === M.R.Space && e.preventDefault();
                }),
                k = (0, a.useMemo)(() => ({ open: 0 === f.menuState }), [f]),
                R = {
                  "aria-activedescendant":
                    null === f.activeItemIndex ||
                    null == (n = f.items[f.activeItemIndex])
                      ? void 0
                      : n.id,
                  "aria-labelledby":
                    null == (r = f.buttonRef.current) ? void 0 : r.id,
                  id: o,
                  onKeyDown: A,
                  onKeyUp: O,
                  role: "menu",
                  tabIndex: 0,
                  ref: v,
                };
              return (0,
              C.sY)({ ourProps: R, theirProps: s, slot: k, defaultTag: "div", features: F, visible: S, name: "Menu.Items" });
            }),
            Item: (0, C.yV)(function (e, t) {
              let n,
                r,
                i,
                o = (0, c.M)(),
                {
                  id: s = `headlessui-menu-item-${o}`,
                  disabled: l = !1,
                  ...f
                } = e,
                [h, p] = L("Menu.Item"),
                v =
                  null !== h.activeItemIndex &&
                  h.items[h.activeItemIndex].id === s,
                b = (0, a.useRef)(null),
                P = (0, m.T)(t, b);
              (0, d.e)(() => {
                if (
                  h.__demoMode ||
                  0 !== h.menuState ||
                  !v ||
                  0 === h.activationTrigger
                )
                  return;
                let e = (0, E.k)();
                return (
                  e.requestAnimationFrame(() => {
                    var e, t;
                    null ==
                      (t =
                        null == (e = b.current) ? void 0 : e.scrollIntoView) ||
                      t.call(e, { block: "nearest" });
                  }),
                  e.dispose
                );
              }, [h.__demoMode, b, v, h.menuState, h.activationTrigger, h.activeItemIndex]);
              let x =
                  ((n = (0, a.useRef)("")),
                  (r = (0, a.useRef)("")),
                  (0, u.z)(() => {
                    let e = b.current;
                    if (!e) return "";
                    let t = e.innerText;
                    if (n.current === t) return r.current;
                    let i = (function (e) {
                      let t = e.getAttribute("aria-label");
                      if ("string" == typeof t) return t.trim();
                      let n = e.getAttribute("aria-labelledby");
                      if (n) {
                        let e = n
                          .split(" ")
                          .map((e) => {
                            let t = document.getElementById(e);
                            if (t) {
                              let e = t.getAttribute("aria-label");
                              return "string" == typeof e
                                ? e.trim()
                                : g(t).trim();
                            }
                            return null;
                          })
                          .filter(Boolean);
                        if (e.length > 0) return e.join(", ");
                      }
                      return g(e).trim();
                    })(e)
                      .trim()
                      .toLowerCase();
                    return (n.current = t), (r.current = i), i;
                  })),
                S = (0, a.useRef)({
                  disabled: l,
                  domRef: b,
                  get textValue() {
                    return x();
                  },
                });
              (0, d.e)(() => {
                S.current.disabled = l;
              }, [S, l]),
                (0, d.e)(
                  () => (
                    p({ type: 5, id: s, dataRef: S }),
                    () => p({ type: 6, id: s })
                  ),
                  [S, s]
                );
              let M = (0, u.z)(() => {
                  p({ type: 1 });
                }),
                A = (0, u.z)((e) => {
                  if (l) return e.preventDefault();
                  p({ type: 1 }), (0, T.wI)(h.buttonRef.current);
                }),
                O = (0, u.z)(() => {
                  if (l) return p({ type: 2, focus: w.Nothing });
                  p({ type: 2, focus: w.Specific, id: s });
                }),
                k =
                  ((i = (0, a.useRef)([-1, -1])),
                  {
                    wasMoved(e) {
                      let t = y(e);
                      return (
                        (i.current[0] !== t[0] || i.current[1] !== t[1]) &&
                        ((i.current = t), !0)
                      );
                    },
                    update(e) {
                      i.current = y(e);
                    },
                  }),
                R = (0, u.z)((e) => k.update(e)),
                j = (0, u.z)((e) => {
                  k.wasMoved(e) &&
                    (l ||
                      v ||
                      p({ type: 2, focus: w.Specific, id: s, trigger: 0 }));
                }),
                D = (0, u.z)((e) => {
                  k.wasMoved(e) &&
                    (l || (v && p({ type: 2, focus: w.Nothing })));
                }),
                V = (0, a.useMemo)(
                  () => ({ active: v, disabled: l, close: M }),
                  [v, l, M]
                );
              return (0,
              C.sY)({ ourProps: { id: s, ref: P, role: "menuitem", tabIndex: !0 === l ? void 0 : -1, "aria-disabled": !0 === l || void 0, disabled: void 0, onClick: A, onFocus: O, onPointerEnter: R, onMouseEnter: R, onPointerMove: j, onMouseMove: j, onPointerLeave: D, onMouseLeave: D }, theirProps: f, slot: V, defaultTag: I, name: "Menu.Item" });
            }),
          }
        );
    },
    49442: function (e, t, n) {
      "use strict";
      n.d(t, {
        u: function () {
          return j;
        },
      });
      var r,
        i = n(2784),
        o = n(58314),
        s = n(55559),
        a = n(81061),
        l = n(88064),
        u = n(61742),
        c = n(76460),
        d = n(33401),
        f = n(6173),
        h = n(3703);
      function p(e, ...t) {
        e && t.length > 0 && e.classList.add(...t);
      }
      function m(e, ...t) {
        e && t.length > 0 && e.classList.remove(...t);
      }
      var v = n(47215),
        g = n(94020),
        y = n(90544);
      function b(e = "") {
        return e.split(/\s+/).filter((e) => e.length > 1);
      }
      let P = (0, i.createContext)(null);
      P.displayName = "TransitionContext";
      var x = (((r = x || {}).Visible = "visible"), (r.Hidden = "hidden"), r);
      let w = (0, i.createContext)(null);
      function E(e) {
        return "children" in e
          ? E(e.children)
          : e.current
              .filter(({ el: e }) => null !== e.current)
              .filter(({ state: e }) => "visible" === e).length > 0;
      }
      function T(e, t) {
        let n = (0, u.E)(e),
          r = (0, i.useRef)([]),
          l = (0, a.t)(),
          c = (0, o.G)(),
          d = (0, s.z)((e, t = y.l4.Hidden) => {
            let i = r.current.findIndex(({ el: t }) => t === e);
            -1 !== i &&
              ((0, h.E)(t, {
                [y.l4.Unmount]() {
                  r.current.splice(i, 1);
                },
                [y.l4.Hidden]() {
                  r.current[i].state = "hidden";
                },
              }),
              c.microTask(() => {
                var e;
                !E(r) && l.current && (null == (e = n.current) || e.call(n));
              }));
          }),
          f = (0, s.z)((e) => {
            let t = r.current.find(({ el: t }) => t === e);
            return (
              t
                ? "visible" !== t.state && (t.state = "visible")
                : r.current.push({ el: e, state: "visible" }),
              () => d(e, y.l4.Unmount)
            );
          }),
          p = (0, i.useRef)([]),
          m = (0, i.useRef)(Promise.resolve()),
          v = (0, i.useRef)({ enter: [], leave: [], idle: [] }),
          g = (0, s.z)((e, n, r) => {
            p.current.splice(0),
              t &&
                (t.chains.current[n] = t.chains.current[n].filter(
                  ([t]) => t !== e
                )),
              null == t ||
                t.chains.current[n].push([
                  e,
                  new Promise((e) => {
                    p.current.push(e);
                  }),
                ]),
              null == t ||
                t.chains.current[n].push([
                  e,
                  new Promise((e) => {
                    Promise.all(v.current[n].map(([e, t]) => t)).then(() =>
                      e()
                    );
                  }),
                ]),
              "enter" === n
                ? (m.current = m.current
                    .then(() => (null == t ? void 0 : t.wait.current))
                    .then(() => r(n)))
                : r(n);
          }),
          b = (0, s.z)((e, t, n) => {
            Promise.all(v.current[t].splice(0).map(([e, t]) => t))
              .then(() => {
                var e;
                null == (e = p.current.shift()) || e();
              })
              .then(() => n(t));
          });
        return (0, i.useMemo)(
          () => ({
            children: r,
            register: f,
            unregister: d,
            onStart: g,
            onStop: b,
            wait: m,
            chains: v,
          }),
          [f, d, r, g, b, v, m]
        );
      }
      function S() {}
      w.displayName = "NestingContext";
      let C = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
      function M(e) {
        var t;
        let n = {};
        for (let r of C) n[r] = null != (t = e[r]) ? t : S;
        return n;
      }
      let A = y.AN.RenderStrategy,
        O = (0, y.yV)(function (e, t) {
          let { show: n, appear: r = !1, unmount: o = !0, ...a } = e,
            u = (0, i.useRef)(null),
            f = (0, d.T)(u, t);
          (0, c.H)();
          let h = (0, v.oJ)();
          if (
            (void 0 === n && null !== h && (n = (h & v.ZM.Open) === v.ZM.Open),
            ![!0, !1].includes(n))
          )
            throw Error(
              "A <Transition /> is used but it is missing a `show={true | false}` prop."
            );
          let [p, m] = (0, i.useState)(n ? "visible" : "hidden"),
            g = T(() => {
              m("hidden");
            }),
            [b, x] = (0, i.useState)(!0),
            S = (0, i.useRef)([n]);
          (0, l.e)(() => {
            !1 !== b &&
              S.current[S.current.length - 1] !== n &&
              (S.current.push(n), x(!1));
          }, [S, n]);
          let C = (0, i.useMemo)(
            () => ({ show: n, appear: r, initial: b }),
            [n, r, b]
          );
          (0, i.useEffect)(() => {
            if (n) m("visible");
            else if (E(g)) {
              let e = u.current;
              if (!e) return;
              let t = e.getBoundingClientRect();
              0 === t.x &&
                0 === t.y &&
                0 === t.width &&
                0 === t.height &&
                m("hidden");
            } else m("hidden");
          }, [n, g]);
          let M = { unmount: o },
            O = (0, s.z)(() => {
              var t;
              b && x(!1), null == (t = e.beforeEnter) || t.call(e);
            }),
            R = (0, s.z)(() => {
              var t;
              b && x(!1), null == (t = e.beforeLeave) || t.call(e);
            });
          return i.createElement(
            w.Provider,
            { value: g },
            i.createElement(
              P.Provider,
              { value: C },
              (0, y.sY)({
                ourProps: {
                  ...M,
                  as: i.Fragment,
                  children: i.createElement(k, {
                    ref: f,
                    ...M,
                    ...a,
                    beforeEnter: O,
                    beforeLeave: R,
                  }),
                },
                theirProps: {},
                defaultTag: i.Fragment,
                features: A,
                visible: "visible" === p,
                name: "Transition",
              })
            )
          );
        }),
        k = (0, y.yV)(function (e, t) {
          var n, r, x;
          let S;
          let {
              beforeEnter: C,
              afterEnter: O,
              beforeLeave: k,
              afterLeave: R,
              enter: j,
              enterFrom: D,
              enterTo: L,
              entered: V,
              leave: _,
              leaveFrom: F,
              leaveTo: I,
              ...N
            } = e,
            B = (0, i.useRef)(null),
            H = (0, d.T)(B, t),
            U = null == (n = N.unmount) || n ? y.l4.Unmount : y.l4.Hidden,
            {
              show: W,
              appear: z,
              initial: $,
            } = (function () {
              let e = (0, i.useContext)(P);
              if (null === e)
                throw Error(
                  "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />."
                );
              return e;
            })(),
            [Z, Y] = (0, i.useState)(W ? "visible" : "hidden"),
            q = (function () {
              let e = (0, i.useContext)(w);
              if (null === e)
                throw Error(
                  "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />."
                );
              return e;
            })(),
            { register: X, unregister: G } = q;
          (0, i.useEffect)(() => X(B), [X, B]),
            (0, i.useEffect)(() => {
              if (U === y.l4.Hidden && B.current) {
                if (W && "visible" !== Z) {
                  Y("visible");
                  return;
                }
                return (0, h.E)(Z, { hidden: () => G(B), visible: () => X(B) });
              }
            }, [Z, B, X, G, W, U]);
          let K = (0, u.E)({
              base: b(N.className),
              enter: b(j),
              enterFrom: b(D),
              enterTo: b(L),
              entered: b(V),
              leave: b(_),
              leaveFrom: b(F),
              leaveTo: b(I),
            }),
            Q =
              ((x = {
                beforeEnter: C,
                afterEnter: O,
                beforeLeave: k,
                afterLeave: R,
              }),
              (S = (0, i.useRef)(M(x))),
              (0, i.useEffect)(() => {
                S.current = M(x);
              }, [x]),
              S),
            J = (0, c.H)();
          (0, i.useEffect)(() => {
            if (J && "visible" === Z && null === B.current)
              throw Error(
                "Did you forget to passthrough the `ref` to the actual DOM node?"
              );
          }, [B, Z, J]);
          let ee = z && W && $,
            et = J && (!$ || z) ? (W ? "enter" : "leave") : "idle",
            en = (function (e = 0) {
              let [t, n] = (0, i.useState)(e),
                r = (0, a.t)(),
                o = (0, i.useCallback)(
                  (e) => {
                    r.current && n((t) => t | e);
                  },
                  [t, r]
                ),
                s = (0, i.useCallback)((e) => !!(t & e), [t]);
              return {
                flags: t,
                addFlag: o,
                hasFlag: s,
                removeFlag: (0, i.useCallback)(
                  (e) => {
                    r.current && n((t) => t & ~e);
                  },
                  [n, r]
                ),
                toggleFlag: (0, i.useCallback)(
                  (e) => {
                    r.current && n((t) => t ^ e);
                  },
                  [n]
                ),
              };
            })(0),
            er = (0, s.z)((e) =>
              (0, h.E)(e, {
                enter: () => {
                  en.addFlag(v.ZM.Opening), Q.current.beforeEnter();
                },
                leave: () => {
                  en.addFlag(v.ZM.Closing), Q.current.beforeLeave();
                },
                idle: () => {},
              })
            ),
            ei = (0, s.z)((e) =>
              (0, h.E)(e, {
                enter: () => {
                  en.removeFlag(v.ZM.Opening), Q.current.afterEnter();
                },
                leave: () => {
                  en.removeFlag(v.ZM.Closing), Q.current.afterLeave();
                },
                idle: () => {},
              })
            ),
            eo = T(() => {
              Y("hidden"), G(B);
            }, q),
            es = (0, i.useRef)(!1);
          !(function ({
            immediate: e,
            container: t,
            direction: n,
            classes: r,
            onStart: i,
            onStop: s,
          }) {
            let c = (0, a.t)(),
              d = (0, o.G)(),
              v = (0, u.E)(n);
            (0, l.e)(() => {
              e && (v.current = "enter");
            }, [e]),
              (0, l.e)(() => {
                let e = (0, f.k)();
                d.add(e.dispose);
                let n = t.current;
                if (n && "idle" !== v.current && c.current) {
                  var o, a, l;
                  let t, u, c, d, g, y, b;
                  return (
                    e.dispose(),
                    i.current(v.current),
                    e.add(
                      ((o = r.current),
                      (a = "enter" === v.current),
                      (l = () => {
                        e.dispose(), s.current(v.current);
                      }),
                      (u = a ? "enter" : "leave"),
                      (c = (0, f.k)()),
                      (d =
                        void 0 !== l
                          ? ((t = { called: !1 }),
                            (...e) => {
                              if (!t.called) return (t.called = !0), l(...e);
                            })
                          : () => {}),
                      "enter" === u &&
                        (n.removeAttribute("hidden"), (n.style.display = "")),
                      (g = (0, h.E)(u, {
                        enter: () => o.enter,
                        leave: () => o.leave,
                      })),
                      (y = (0, h.E)(u, {
                        enter: () => o.enterTo,
                        leave: () => o.leaveTo,
                      })),
                      (b = (0, h.E)(u, {
                        enter: () => o.enterFrom,
                        leave: () => o.leaveFrom,
                      })),
                      m(
                        n,
                        ...o.base,
                        ...o.enter,
                        ...o.enterTo,
                        ...o.enterFrom,
                        ...o.leave,
                        ...o.leaveFrom,
                        ...o.leaveTo,
                        ...o.entered
                      ),
                      p(n, ...o.base, ...g, ...b),
                      c.nextFrame(() => {
                        m(n, ...o.base, ...g, ...b),
                          p(n, ...o.base, ...g, ...y),
                          (function (e, t) {
                            let n = (0, f.k)();
                            if (!e) return n.dispose;
                            let { transitionDuration: r, transitionDelay: i } =
                                getComputedStyle(e),
                              [o, s] = [r, i].map((e) => {
                                let [t = 0] = e
                                  .split(",")
                                  .filter(Boolean)
                                  .map((e) =>
                                    e.includes("ms")
                                      ? parseFloat(e)
                                      : 1e3 * parseFloat(e)
                                  )
                                  .sort((e, t) => t - e);
                                return t;
                              }),
                              a = o + s;
                            if (0 !== a) {
                              n.group((n) => {
                                n.setTimeout(() => {
                                  t(), n.dispose();
                                }, a),
                                  n.addEventListener(
                                    e,
                                    "transitionrun",
                                    (e) => {
                                      e.target === e.currentTarget &&
                                        n.dispose();
                                    }
                                  );
                              });
                              let r = n.addEventListener(
                                e,
                                "transitionend",
                                (e) => {
                                  e.target === e.currentTarget && (t(), r());
                                }
                              );
                            } else t();
                            n.add(() => t()), n.dispose;
                          })(
                            n,
                            () => (
                              m(n, ...o.base, ...g),
                              p(n, ...o.base, ...o.entered),
                              d()
                            )
                          );
                      }),
                      c.dispose)
                    ),
                    e.dispose
                  );
                }
              }, [n]);
          })({
            immediate: ee,
            container: B,
            classes: K,
            direction: et,
            onStart: (0, u.E)((e) => {
              (es.current = !0), eo.onStart(B, e, er);
            }),
            onStop: (0, u.E)((e) => {
              (es.current = !1),
                eo.onStop(B, e, ei),
                "leave" !== e || E(eo) || (Y("hidden"), G(B));
            }),
          });
          let ea = N;
          return (
            ee
              ? (ea = {
                  ...ea,
                  className: (0, g.A)(
                    N.className,
                    ...K.current.enter,
                    ...K.current.enterFrom
                  ),
                })
              : es.current &&
                ((ea.className = (0, g.A)(
                  N.className,
                  null == (r = B.current) ? void 0 : r.className
                )),
                "" === ea.className && delete ea.className),
            i.createElement(
              w.Provider,
              { value: eo },
              i.createElement(
                v.up,
                {
                  value:
                    (0, h.E)(Z, { visible: v.ZM.Open, hidden: v.ZM.Closed }) |
                    en.flags,
                },
                (0, y.sY)({
                  ourProps: { ref: H },
                  theirProps: ea,
                  defaultTag: "div",
                  features: A,
                  visible: "visible" === Z,
                  name: "Transition.Child",
                })
              )
            )
          );
        }),
        R = (0, y.yV)(function (e, t) {
          let n = null !== (0, i.useContext)(P),
            r = null !== (0, v.oJ)();
          return i.createElement(
            i.Fragment,
            null,
            !n && r
              ? i.createElement(O, { ref: t, ...e })
              : i.createElement(k, { ref: t, ...e })
          );
        }),
        j = Object.assign(O, { Child: R, Root: O });
    },
    58314: function (e, t, n) {
      "use strict";
      n.d(t, {
        G: function () {
          return o;
        },
      });
      var r = n(2784),
        i = n(6173);
      function o() {
        let [e] = (0, r.useState)(i.k);
        return (0, r.useEffect)(() => () => e.dispose(), [e]), e;
      }
    },
    55559: function (e, t, n) {
      "use strict";
      n.d(t, {
        z: function () {
          return o;
        },
      });
      var r = n(2784),
        i = n(61742);
      let o = function (e) {
        let t = (0, i.E)(e);
        return r.useCallback((...e) => t.current(...e), [t]);
      };
    },
    80586: function (e, t, n) {
      "use strict";
      n.d(t, {
        M: function () {
          return l;
        },
      });
      var r,
        i = n(2784),
        o = n(64727),
        s = n(88064),
        a = n(76460);
      let l =
        null != (r = i.useId)
          ? r
          : function () {
              let e = (0, a.H)(),
                [t, n] = i.useState(e ? () => o.O.nextId() : null);
              return (
                (0, s.e)(() => {
                  null === t && n(o.O.nextId());
                }, [t]),
                null != t ? "" + t : void 0
              );
            };
    },
    81061: function (e, t, n) {
      "use strict";
      n.d(t, {
        t: function () {
          return o;
        },
      });
      var r = n(2784),
        i = n(88064);
      function o() {
        let e = (0, r.useRef)(!1);
        return (
          (0, i.e)(
            () => (
              (e.current = !0),
              () => {
                e.current = !1;
              }
            ),
            []
          ),
          e
        );
      }
    },
    88064: function (e, t, n) {
      "use strict";
      n.d(t, {
        e: function () {
          return o;
        },
      });
      var r = n(2784),
        i = n(64727);
      let o = (e, t) => {
        i.O.isServer ? (0, r.useEffect)(e, t) : (0, r.useLayoutEffect)(e, t);
      };
    },
    61742: function (e, t, n) {
      "use strict";
      n.d(t, {
        E: function () {
          return o;
        },
      });
      var r = n(2784),
        i = n(88064);
      function o(e) {
        let t = (0, r.useRef)(e);
        return (
          (0, i.e)(() => {
            t.current = e;
          }, [e]),
          t
        );
      }
    },
    32994: function (e, t, n) {
      "use strict";
      n.d(t, {
        O: function () {
          return u;
        },
      });
      var r = n(2784),
        i = n(52929),
        o = n(25371),
        s = n(61742);
      function a(e, t, n) {
        let i = (0, s.E)(t);
        (0, r.useEffect)(() => {
          function t(e) {
            i.current(e);
          }
          return (
            document.addEventListener(e, t, n),
            () => document.removeEventListener(e, t, n)
          );
        }, [e, n]);
      }
      var l = n(56902);
      function u(e, t, n = !0) {
        let s = (0, r.useRef)(!1);
        function u(n, r) {
          if (!s.current || n.defaultPrevented) return;
          let o = r(n);
          if (null !== o && o.getRootNode().contains(o) && o.isConnected) {
            for (let t of (function e(t) {
              return "function" == typeof t
                ? e(t())
                : Array.isArray(t) || t instanceof Set
                ? t
                : [t];
            })(e)) {
              if (null === t) continue;
              let e = t instanceof HTMLElement ? t : t.current;
              if (
                (null != e && e.contains(o)) ||
                (n.composed && n.composedPath().includes(e))
              )
                return;
            }
            return (
              (0, i.sP)(o, i.tJ.Loose) ||
                -1 === o.tabIndex ||
                n.preventDefault(),
              t(n, o)
            );
          }
        }
        (0, r.useEffect)(() => {
          requestAnimationFrame(() => {
            s.current = n;
          });
        }, [n]);
        let c = (0, r.useRef)(null);
        a(
          "pointerdown",
          (e) => {
            var t, n;
            s.current &&
              (c.current =
                (null == (n = null == (t = e.composedPath) ? void 0 : t.call(e))
                  ? void 0
                  : n[0]) || e.target);
          },
          !0
        ),
          a(
            "mousedown",
            (e) => {
              var t, n;
              s.current &&
                (c.current =
                  (null ==
                  (n = null == (t = e.composedPath) ? void 0 : t.call(e))
                    ? void 0
                    : n[0]) || e.target);
            },
            !0
          ),
          a(
            "click",
            (e) => {
              (0, o.tq)() ||
                (c.current && (u(e, () => c.current), (c.current = null)));
            },
            !0
          ),
          a(
            "touchend",
            (e) =>
              u(e, () => (e.target instanceof HTMLElement ? e.target : null)),
            !0
          ),
          (0, l.s)(
            "blur",
            (e) =>
              u(e, () =>
                window.document.activeElement instanceof HTMLIFrameElement
                  ? window.document.activeElement
                  : null
              ),
            !0
          );
      }
    },
    70592: function (e, t, n) {
      "use strict";
      n.d(t, {
        i: function () {
          return o;
        },
      });
      var r = n(2784),
        i = n(29833);
      function o(...e) {
        return (0, r.useMemo)(() => (0, i.r)(...e), [...e]);
      }
    },
    76460: function (e, t, n) {
      "use strict";
      n.d(t, {
        H: function () {
          return s;
        },
      });
      var r,
        i = n(2784),
        o = n(64727);
      function s() {
        let e;
        let t =
            ((e = "undefined" == typeof document),
            (0, (r || (r = n.t(i, 2))).useSyncExternalStore)(
              () => () => {},
              () => !1,
              () => !e
            )),
          [s, a] = i.useState(o.O.isHandoffComplete);
        return (
          s && !1 === o.O.isHandoffComplete && a(!1),
          i.useEffect(() => {
            !0 !== s && a(!0);
          }, [s]),
          i.useEffect(() => o.O.handoff(), []),
          !t && s
        );
      }
    },
    33401: function (e, t, n) {
      "use strict";
      n.d(t, {
        T: function () {
          return a;
        },
        h: function () {
          return s;
        },
      });
      var r = n(2784),
        i = n(55559);
      let o = Symbol();
      function s(e, t = !0) {
        return Object.assign(e, { [o]: t });
      }
      function a(...e) {
        let t = (0, r.useRef)(e);
        (0, r.useEffect)(() => {
          t.current = e;
        }, [e]);
        let n = (0, i.z)((e) => {
          for (let n of t.current)
            null != n && ("function" == typeof n ? n(e) : (n.current = e));
        });
        return e.every((e) => null == e || (null == e ? void 0 : e[o]))
          ? void 0
          : n;
      }
    },
    56902: function (e, t, n) {
      "use strict";
      n.d(t, {
        s: function () {
          return o;
        },
      });
      var r = n(2784),
        i = n(61742);
      function o(e, t, n) {
        let o = (0, i.E)(t);
        (0, r.useEffect)(() => {
          function t(e) {
            o.current(e);
          }
          return (
            window.addEventListener(e, t, n),
            () => window.removeEventListener(e, t, n)
          );
        }, [e, n]);
      }
    },
    47215: function (e, t, n) {
      "use strict";
      n.d(t, {
        ZM: function () {
          return s;
        },
        oJ: function () {
          return a;
        },
        up: function () {
          return l;
        },
      });
      var r,
        i = n(2784);
      let o = (0, i.createContext)(null);
      o.displayName = "OpenClosedContext";
      var s =
        (((r = s || {})[(r.Open = 1)] = "Open"),
        (r[(r.Closed = 2)] = "Closed"),
        (r[(r.Closing = 4)] = "Closing"),
        (r[(r.Opening = 8)] = "Opening"),
        r);
      function a() {
        return (0, i.useContext)(o);
      }
      function l({ value: e, children: t }) {
        return i.createElement(o.Provider, { value: e }, t);
      }
    },
    15426: function (e, t, n) {
      "use strict";
      function r(e) {
        let t = e.parentElement,
          n = null;
        for (; t && !(t instanceof HTMLFieldSetElement); )
          t instanceof HTMLLegendElement && (n = t), (t = t.parentElement);
        let r = (null == t ? void 0 : t.getAttribute("disabled")) === "";
        return (
          !(
            r &&
            (function (e) {
              if (!e) return !1;
              let t = e.previousElementSibling;
              for (; null !== t; ) {
                if (t instanceof HTMLLegendElement) return !1;
                t = t.previousElementSibling;
              }
              return !0;
            })(n)
          ) && r
        );
      }
      n.d(t, {
        P: function () {
          return r;
        },
      });
    },
    94020: function (e, t, n) {
      "use strict";
      function r(...e) {
        return Array.from(
          new Set(e.flatMap((e) => ("string" == typeof e ? e.split(" ") : [])))
        )
          .filter(Boolean)
          .join(" ");
      }
      n.d(t, {
        A: function () {
          return r;
        },
      });
    },
    6173: function (e, t, n) {
      "use strict";
      n.d(t, {
        k: function () {
          return function e() {
            let t = [],
              n = {
                addEventListener: (e, t, r, i) => (
                  e.addEventListener(t, r, i),
                  n.add(() => e.removeEventListener(t, r, i))
                ),
                requestAnimationFrame(...e) {
                  let t = requestAnimationFrame(...e);
                  return n.add(() => cancelAnimationFrame(t));
                },
                nextFrame: (...e) =>
                  n.requestAnimationFrame(() => n.requestAnimationFrame(...e)),
                setTimeout(...e) {
                  let t = setTimeout(...e);
                  return n.add(() => clearTimeout(t));
                },
                microTask(...e) {
                  let t = { current: !0 };
                  return (
                    (0, r.Y)(() => {
                      t.current && e[0]();
                    }),
                    n.add(() => {
                      t.current = !1;
                    })
                  );
                },
                style(e, t, n) {
                  let r = e.style.getPropertyValue(t);
                  return (
                    Object.assign(e.style, { [t]: n }),
                    this.add(() => {
                      Object.assign(e.style, { [t]: r });
                    })
                  );
                },
                group(t) {
                  let n = e();
                  return t(n), this.add(() => n.dispose());
                },
                add: (e) => (
                  t.push(e),
                  () => {
                    let n = t.indexOf(e);
                    if (n >= 0) for (let e of t.splice(n, 1)) e();
                  }
                ),
                dispose() {
                  for (let e of t.splice(0)) e();
                },
              };
            return n;
          };
        },
      });
      var r = n(91554);
    },
    64727: function (e, t, n) {
      "use strict";
      n.d(t, {
        O: function () {
          return a;
        },
      });
      var r = Object.defineProperty,
        i = (e, t, n) =>
          t in e
            ? r(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n),
        o = (e, t, n) => (i(e, "symbol" != typeof t ? t + "" : t, n), n);
      class s {
        constructor() {
          o(this, "current", this.detect()),
            o(this, "handoffState", "pending"),
            o(this, "currentId", 0);
        }
        set(e) {
          this.current !== e &&
            ((this.handoffState = "pending"),
            (this.currentId = 0),
            (this.current = e));
        }
        reset() {
          this.set(this.detect());
        }
        nextId() {
          return ++this.currentId;
        }
        get isServer() {
          return "server" === this.current;
        }
        get isClient() {
          return "client" === this.current;
        }
        detect() {
          return "undefined" == typeof window || "undefined" == typeof document
            ? "server"
            : "client";
        }
        handoff() {
          "pending" === this.handoffState && (this.handoffState = "complete");
        }
        get isHandoffComplete() {
          return "complete" === this.handoffState;
        }
      }
      let a = new s();
    },
    52929: function (e, t, n) {
      "use strict";
      n.d(t, {
        C5: function () {
          return P;
        },
        EO: function () {
          return w;
        },
        TO: function () {
          return f;
        },
        fE: function () {
          return h;
        },
        jA: function () {
          return E;
        },
        sP: function () {
          return g;
        },
        tJ: function () {
          return v;
        },
        wI: function () {
          return y;
        },
        z2: function () {
          return x;
        },
      });
      var r,
        i,
        o,
        s,
        a,
        l = n(6173),
        u = n(3703),
        c = n(29833);
      let d = [
        "[contentEditable=true]",
        "[tabindex]",
        "a[href]",
        "area[href]",
        "button:not([disabled])",
        "iframe",
        "input:not([disabled])",
        "select:not([disabled])",
        "textarea:not([disabled])",
      ]
        .map((e) => `${e}:not([tabindex='-1'])`)
        .join(",");
      var f =
          (((r = f || {})[(r.First = 1)] = "First"),
          (r[(r.Previous = 2)] = "Previous"),
          (r[(r.Next = 4)] = "Next"),
          (r[(r.Last = 8)] = "Last"),
          (r[(r.WrapAround = 16)] = "WrapAround"),
          (r[(r.NoScroll = 32)] = "NoScroll"),
          r),
        h =
          (((i = h || {})[(i.Error = 0)] = "Error"),
          (i[(i.Overflow = 1)] = "Overflow"),
          (i[(i.Success = 2)] = "Success"),
          (i[(i.Underflow = 3)] = "Underflow"),
          i),
        p =
          (((o = p || {})[(o.Previous = -1)] = "Previous"),
          (o[(o.Next = 1)] = "Next"),
          o);
      function m(e = document.body) {
        return null == e
          ? []
          : Array.from(e.querySelectorAll(d)).sort((e, t) =>
              Math.sign(
                (e.tabIndex || Number.MAX_SAFE_INTEGER) -
                  (t.tabIndex || Number.MAX_SAFE_INTEGER)
              )
            );
      }
      var v =
        (((s = v || {})[(s.Strict = 0)] = "Strict"),
        (s[(s.Loose = 1)] = "Loose"),
        s);
      function g(e, t = 0) {
        var n;
        return (
          e !== (null == (n = (0, c.r)(e)) ? void 0 : n.body) &&
          (0, u.E)(t, {
            0: () => e.matches(d),
            1() {
              let t = e;
              for (; null !== t; ) {
                if (t.matches(d)) return !0;
                t = t.parentElement;
              }
              return !1;
            },
          })
        );
      }
      function y(e) {
        let t = (0, c.r)(e);
        (0, l.k)().nextFrame(() => {
          t && !g(t.activeElement, 0) && P(e);
        });
      }
      var b =
        (((a = b || {})[(a.Keyboard = 0)] = "Keyboard"),
        (a[(a.Mouse = 1)] = "Mouse"),
        a);
      function P(e) {
        null == e || e.focus({ preventScroll: !0 });
      }
      function x(e, t = (e) => e) {
        return e.slice().sort((e, n) => {
          let r = t(e),
            i = t(n);
          if (null === r || null === i) return 0;
          let o = r.compareDocumentPosition(i);
          return o & Node.DOCUMENT_POSITION_FOLLOWING
            ? -1
            : o & Node.DOCUMENT_POSITION_PRECEDING
            ? 1
            : 0;
        });
      }
      function w(e, t) {
        return E(m(), t, { relativeTo: e });
      }
      function E(
        e,
        t,
        { sorted: n = !0, relativeTo: r = null, skipElements: i = [] } = {}
      ) {
        var o, s, a;
        let l = Array.isArray(e)
            ? e.length > 0
              ? e[0].ownerDocument
              : document
            : e.ownerDocument,
          u = Array.isArray(e) ? (n ? x(e) : e) : m(e);
        i.length > 0 && u.length > 1 && (u = u.filter((e) => !i.includes(e))),
          (r = null != r ? r : l.activeElement);
        let c = (() => {
            if (5 & t) return 1;
            if (10 & t) return -1;
            throw Error(
              "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last"
            );
          })(),
          d = (() => {
            if (1 & t) return 0;
            if (2 & t) return Math.max(0, u.indexOf(r)) - 1;
            if (4 & t) return Math.max(0, u.indexOf(r)) + 1;
            if (8 & t) return u.length - 1;
            throw Error(
              "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last"
            );
          })(),
          f = 32 & t ? { preventScroll: !0 } : {},
          h = 0,
          p = u.length,
          v;
        do {
          if (h >= p || h + p <= 0) return 0;
          let e = d + h;
          if (16 & t) e = (e + p) % p;
          else {
            if (e < 0) return 3;
            if (e >= p) return 1;
          }
          null == (v = u[e]) || v.focus(f), (h += c);
        } while (v !== l.activeElement);
        return (
          6 & t &&
            null !=
              (a =
                null == (s = null == (o = v) ? void 0 : o.matches)
                  ? void 0
                  : s.call(o, "textarea,input")) &&
            a &&
            v.select(),
          2
        );
      }
      "undefined" != typeof window &&
        "undefined" != typeof document &&
        (document.addEventListener(
          "keydown",
          (e) => {
            e.metaKey ||
              e.altKey ||
              e.ctrlKey ||
              (document.documentElement.dataset.headlessuiFocusVisible = "");
          },
          !0
        ),
        document.addEventListener(
          "click",
          (e) => {
            1 === e.detail
              ? delete document.documentElement.dataset.headlessuiFocusVisible
              : 0 === e.detail &&
                (document.documentElement.dataset.headlessuiFocusVisible = "");
          },
          !0
        ));
    },
    3703: function (e, t, n) {
      "use strict";
      function r(e, t, ...n) {
        if (e in t) {
          let r = t[e];
          return "function" == typeof r ? r(...n) : r;
        }
        let i = Error(
          `Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(
            t
          )
            .map((e) => `"${e}"`)
            .join(", ")}.`
        );
        throw (Error.captureStackTrace && Error.captureStackTrace(i, r), i);
      }
      n.d(t, {
        E: function () {
          return r;
        },
      });
    },
    91554: function (e, t, n) {
      "use strict";
      function r(e) {
        "function" == typeof queueMicrotask
          ? queueMicrotask(e)
          : Promise.resolve()
              .then(e)
              .catch((e) =>
                setTimeout(() => {
                  throw e;
                })
              );
      }
      n.d(t, {
        Y: function () {
          return r;
        },
      });
    },
    29833: function (e, t, n) {
      "use strict";
      n.d(t, {
        r: function () {
          return i;
        },
      });
      var r = n(64727);
      function i(e) {
        return r.O.isServer
          ? null
          : e instanceof Node
          ? e.ownerDocument
          : null != e &&
            e.hasOwnProperty("current") &&
            e.current instanceof Node
          ? e.current.ownerDocument
          : document;
      }
    },
    25371: function (e, t, n) {
      "use strict";
      function r() {
        return (
          /iPhone/gi.test(window.navigator.platform) ||
          (/Mac/gi.test(window.navigator.platform) &&
            window.navigator.maxTouchPoints > 0)
        );
      }
      function i() {
        return r() || /Android/gi.test(window.navigator.userAgent);
      }
      n.d(t, {
        gn: function () {
          return r;
        },
        tq: function () {
          return i;
        },
      });
    },
    90544: function (e, t, n) {
      "use strict";
      n.d(t, {
        AN: function () {
          return l;
        },
        l4: function () {
          return u;
        },
        sY: function () {
          return c;
        },
        yV: function () {
          return p;
        },
      });
      var r,
        i,
        o = n(2784),
        s = n(94020),
        a = n(3703),
        l =
          (((r = l || {})[(r.None = 0)] = "None"),
          (r[(r.RenderStrategy = 1)] = "RenderStrategy"),
          (r[(r.Static = 2)] = "Static"),
          r),
        u =
          (((i = u || {})[(i.Unmount = 0)] = "Unmount"),
          (i[(i.Hidden = 1)] = "Hidden"),
          i);
      function c({
        ourProps: e,
        theirProps: t,
        slot: n,
        defaultTag: r,
        features: i,
        visible: o = !0,
        name: s,
        mergeRefs: l,
      }) {
        l = null != l ? l : f;
        let u = h(t, e);
        if (o) return d(u, n, r, s, l);
        let c = null != i ? i : 0;
        if (2 & c) {
          let { static: e = !1, ...t } = u;
          if (e) return d(t, n, r, s, l);
        }
        if (1 & c) {
          let { unmount: e = !0, ...t } = u;
          return (0, a.E)(e ? 0 : 1, {
            0: () => null,
            1: () =>
              d({ ...t, hidden: !0, style: { display: "none" } }, n, r, s, l),
          });
        }
        return d(u, n, r, s, l);
      }
      function d(e, t = {}, n, r, i) {
        let {
            as: a = n,
            children: l,
            refName: u = "ref",
            ...c
          } = v(e, ["unmount", "static"]),
          d = void 0 !== e.ref ? { [u]: e.ref } : {},
          f = "function" == typeof l ? l(t) : l;
        "className" in c &&
          c.className &&
          "function" == typeof c.className &&
          (c.className = c.className(t));
        let p = {};
        if (t) {
          let e = !1,
            n = [];
          for (let [r, i] of Object.entries(t))
            "boolean" == typeof i && (e = !0), !0 === i && n.push(r);
          e && (p["data-headlessui-state"] = n.join(" "));
        }
        if (a === o.Fragment && Object.keys(m(c)).length > 0) {
          if (!(0, o.isValidElement)(f) || (Array.isArray(f) && f.length > 1))
            throw Error(
              [
                'Passing props on "Fragment"!',
                "",
                `The current component <${r} /> is rendering a "Fragment".`,
                "However we need to passthrough the following props:",
                Object.keys(c).map((e) => `  - ${e}`).join(`
`),
                "",
                "You can apply a few solutions:",
                [
                  'Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',
                  "Render a single element as the child so that we can forward the props onto that element.",
                ].map((e) => `  - ${e}`).join(`
`),
              ].join(`
`)
            );
          let e = f.props,
            t =
              "function" == typeof (null == e ? void 0 : e.className)
                ? (...t) =>
                    (0, s.A)(
                      null == e ? void 0 : e.className(...t),
                      c.className
                    )
                : (0, s.A)(null == e ? void 0 : e.className, c.className);
          return (0, o.cloneElement)(
            f,
            Object.assign(
              {},
              h(f.props, m(v(c, ["ref"]))),
              p,
              d,
              { ref: i(f.ref, d.ref) },
              t ? { className: t } : {}
            )
          );
        }
        return (0, o.createElement)(
          a,
          Object.assign(
            {},
            v(c, ["ref"]),
            a !== o.Fragment && d,
            a !== o.Fragment && p
          ),
          f
        );
      }
      function f(...e) {
        return e.every((e) => null == e)
          ? void 0
          : (t) => {
              for (let n of e)
                null != n && ("function" == typeof n ? n(t) : (n.current = t));
            };
      }
      function h(...e) {
        if (0 === e.length) return {};
        if (1 === e.length) return e[0];
        let t = {},
          n = {};
        for (let r of e)
          for (let e in r)
            e.startsWith("on") && "function" == typeof r[e]
              ? (null != n[e] || (n[e] = []), n[e].push(r[e]))
              : (t[e] = r[e]);
        if (t.disabled || t["aria-disabled"])
          return Object.assign(
            t,
            Object.fromEntries(Object.keys(n).map((e) => [e, void 0]))
          );
        for (let e in n)
          Object.assign(t, {
            [e](t, ...r) {
              for (let i of n[e]) {
                if (
                  (t instanceof Event ||
                    (null == t ? void 0 : t.nativeEvent) instanceof Event) &&
                  t.defaultPrevented
                )
                  return;
                i(t, ...r);
              }
            },
          });
        return t;
      }
      function p(e) {
        var t;
        return Object.assign((0, o.forwardRef)(e), {
          displayName: null != (t = e.displayName) ? t : e.name,
        });
      }
      function m(e) {
        let t = Object.assign({}, e);
        for (let e in t) void 0 === t[e] && delete t[e];
        return t;
      }
      function v(e, t = []) {
        let n = Object.assign({}, e);
        for (let e of t) e in n && delete n[e];
        return n;
      }
    },
    65239: function (e, t, n) {
      "use strict";
      n.d(t, {
        M: function () {
          return v;
        },
      });
      var r = n(2784),
        i = n(23617);
      function o() {
        let e = (0, r.useRef)(!1);
        return (
          (0, i.L)(
            () => (
              (e.current = !0),
              () => {
                e.current = !1;
              }
            ),
            []
          ),
          e
        );
      }
      var s = n(62972),
        a = n(97967),
        l = n(3105);
      class u extends r.Component {
        getSnapshotBeforeUpdate(e) {
          let t = this.props.childRef.current;
          if (t && e.isPresent && !this.props.isPresent) {
            let e = this.props.sizeRef.current;
            (e.height = t.offsetHeight || 0),
              (e.width = t.offsetWidth || 0),
              (e.top = t.offsetTop),
              (e.left = t.offsetLeft);
          }
          return null;
        }
        componentDidUpdate() {}
        render() {
          return this.props.children;
        }
      }
      function c({ children: e, isPresent: t }) {
        let n = (0, r.useId)(),
          i = (0, r.useRef)(null),
          o = (0, r.useRef)({ width: 0, height: 0, top: 0, left: 0 });
        return (
          (0, r.useInsertionEffect)(() => {
            let { width: e, height: r, top: s, left: a } = o.current;
            if (t || !i.current || !e || !r) return;
            i.current.dataset.motionPopId = n;
            let l = document.createElement("style");
            return (
              document.head.appendChild(l),
              l.sheet &&
                l.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${r}px !important;
            top: ${s}px !important;
            left: ${a}px !important;
          }
        `),
              () => {
                document.head.removeChild(l);
              }
            );
          }, [t]),
          r.createElement(
            u,
            { isPresent: t, childRef: i, sizeRef: o },
            r.cloneElement(e, { ref: i })
          )
        );
      }
      let d = ({
        children: e,
        initial: t,
        isPresent: n,
        onExitComplete: i,
        custom: o,
        presenceAffectsLayout: s,
        mode: u,
      }) => {
        let d = (0, l.h)(f),
          h = (0, r.useId)(),
          p = (0, r.useMemo)(
            () => ({
              id: h,
              initial: t,
              isPresent: n,
              custom: o,
              onExitComplete: (e) => {
                for (let t of (d.set(e, !0), d.values())) if (!t) return;
                i && i();
              },
              register: (e) => (d.set(e, !1), () => d.delete(e)),
            }),
            s ? void 0 : [n]
          );
        return (
          (0, r.useMemo)(() => {
            d.forEach((e, t) => d.set(t, !1));
          }, [n]),
          r.useEffect(() => {
            n || d.size || !i || i();
          }, [n]),
          "popLayout" === u && (e = r.createElement(c, { isPresent: n }, e)),
          r.createElement(a.O.Provider, { value: p }, e)
        );
      };
      function f() {
        return new Map();
      }
      var h = n(3422),
        p = n(57035);
      let m = (e) => e.key || "",
        v = ({
          children: e,
          custom: t,
          initial: n = !0,
          onExitComplete: a,
          exitBeforeEnter: l,
          presenceAffectsLayout: u = !0,
          mode: c = "sync",
        }) => {
          var f;
          (0, p.k)(!l, "Replace exitBeforeEnter with mode='wait'");
          let v =
              (0, r.useContext)(h.p).forceRender ||
              (function () {
                let e = o(),
                  [t, n] = (0, r.useState)(0),
                  i = (0, r.useCallback)(() => {
                    e.current && n(t + 1);
                  }, [t]);
                return [(0, r.useCallback)(() => s.Wi.postRender(i), [i]), t];
              })()[0],
            g = o(),
            y = (function (e) {
              let t = [];
              return (
                r.Children.forEach(e, (e) => {
                  (0, r.isValidElement)(e) && t.push(e);
                }),
                t
              );
            })(e),
            b = y,
            P = (0, r.useRef)(new Map()).current,
            x = (0, r.useRef)(b),
            w = (0, r.useRef)(new Map()).current,
            E = (0, r.useRef)(!0);
          if (
            ((0, i.L)(() => {
              (E.current = !1),
                (function (e, t) {
                  e.forEach((e) => {
                    let n = m(e);
                    t.set(n, e);
                  });
                })(y, w),
                (x.current = b);
            }),
            (f = () => {
              (E.current = !0), w.clear(), P.clear();
            }),
            (0, r.useEffect)(() => () => f(), []),
            E.current)
          )
            return r.createElement(
              r.Fragment,
              null,
              b.map((e) =>
                r.createElement(
                  d,
                  {
                    key: m(e),
                    isPresent: !0,
                    initial: !!n && void 0,
                    presenceAffectsLayout: u,
                    mode: c,
                  },
                  e
                )
              )
            );
          b = [...b];
          let T = x.current.map(m),
            S = y.map(m),
            C = T.length;
          for (let e = 0; e < C; e++) {
            let t = T[e];
            -1 !== S.indexOf(t) || P.has(t) || P.set(t, void 0);
          }
          return (
            "wait" === c && P.size && (b = []),
            P.forEach((e, n) => {
              if (-1 !== S.indexOf(n)) return;
              let i = w.get(n);
              if (!i) return;
              let o = T.indexOf(n),
                s = e;
              s ||
                ((s = r.createElement(
                  d,
                  {
                    key: m(i),
                    isPresent: !1,
                    onExitComplete: () => {
                      P.delete(n);
                      let e = Array.from(w.keys()).filter(
                        (e) => !S.includes(e)
                      );
                      if (
                        (e.forEach((e) => w.delete(e)),
                        (x.current = y.filter((t) => {
                          let r = m(t);
                          return r === n || e.includes(r);
                        })),
                        !P.size)
                      ) {
                        if (!1 === g.current) return;
                        v(), a && a();
                      }
                    },
                    custom: t,
                    presenceAffectsLayout: u,
                    mode: c,
                  },
                  i
                )),
                P.set(n, s)),
                b.splice(o, 0, s);
            }),
            (b = b.map((e) => {
              let t = e.key;
              return P.has(t)
                ? e
                : r.createElement(
                    d,
                    {
                      key: m(e),
                      isPresent: !0,
                      presenceAffectsLayout: u,
                      mode: c,
                    },
                    e
                  );
            })),
            r.createElement(
              r.Fragment,
              null,
              P.size ? b : b.map((e) => (0, r.cloneElement)(e))
            )
          );
        };
    },
    3422: function (e, t, n) {
      "use strict";
      n.d(t, {
        p: function () {
          return r;
        },
      });
      let r = (0, n(2784).createContext)({});
    },
    97967: function (e, t, n) {
      "use strict";
      n.d(t, {
        O: function () {
          return r;
        },
      });
      let r = (0, n(2784).createContext)(null);
    },
    62972: function (e, t, n) {
      "use strict";
      n.d(t, {
        Pn: function () {
          return a;
        },
        Wi: function () {
          return s;
        },
        frameData: function () {
          return l;
        },
        S6: function () {
          return u;
        },
      });
      var r = n(50065);
      class i {
        constructor() {
          (this.order = []), (this.scheduled = new Set());
        }
        add(e) {
          if (!this.scheduled.has(e))
            return this.scheduled.add(e), this.order.push(e), !0;
        }
        remove(e) {
          let t = this.order.indexOf(e);
          -1 !== t && (this.order.splice(t, 1), this.scheduled.delete(e));
        }
        clear() {
          (this.order.length = 0), this.scheduled.clear();
        }
      }
      let o = [
          "prepare",
          "read",
          "update",
          "preRender",
          "render",
          "postRender",
        ],
        {
          schedule: s,
          cancel: a,
          state: l,
          steps: u,
        } = (function (e, t) {
          let n = !1,
            r = !0,
            s = { delta: 0, timestamp: 0, isProcessing: !1 },
            a = o.reduce(
              (e, t) => (
                (e[t] = (function (e) {
                  let t = new i(),
                    n = new i(),
                    r = 0,
                    o = !1,
                    s = !1,
                    a = new WeakSet(),
                    l = {
                      schedule: (e, i = !1, s = !1) => {
                        let l = s && o,
                          u = l ? t : n;
                        return (
                          i && a.add(e),
                          u.add(e) && l && o && (r = t.order.length),
                          e
                        );
                      },
                      cancel: (e) => {
                        n.remove(e), a.delete(e);
                      },
                      process: (i) => {
                        if (o) {
                          s = !0;
                          return;
                        }
                        if (
                          ((o = !0),
                          ([t, n] = [n, t]),
                          n.clear(),
                          (r = t.order.length))
                        )
                          for (let n = 0; n < r; n++) {
                            let r = t.order[n];
                            r(i), a.has(r) && (l.schedule(r), e());
                          }
                        (o = !1), s && ((s = !1), l.process(i));
                      },
                    };
                  return l;
                })(() => (n = !0))),
                e
              ),
              {}
            ),
            l = (e) => a[e].process(s),
            u = () => {
              let i = performance.now();
              (n = !1),
                (s.delta = r
                  ? 1e3 / 60
                  : Math.max(Math.min(i - s.timestamp, 40), 1)),
                (s.timestamp = i),
                (s.isProcessing = !0),
                o.forEach(l),
                (s.isProcessing = !1),
                n && t && ((r = !1), e(u));
            },
            c = () => {
              (n = !0), (r = !0), s.isProcessing || e(u);
            };
          return {
            schedule: o.reduce((e, t) => {
              let r = a[t];
              return (
                (e[t] = (e, t = !1, i = !1) => (n || c(), r.schedule(e, t, i))),
                e
              );
            }, {}),
            cancel: (e) => o.forEach((t) => a[t].cancel(e)),
            state: s,
            steps: a,
          };
        })(
          "undefined" != typeof requestAnimationFrame
            ? requestAnimationFrame
            : r.Z,
          !0
        );
    },
    48508: function (e, t, n) {
      "use strict";
      let r;
      n.d(t, {
        E: function () {
          return i$;
        },
      });
      var i,
        o,
        s = n(2784);
      let a = (0, s.createContext)({
          transformPagePoint: (e) => e,
          isStatic: !1,
          reducedMotion: "never",
        }),
        l = (0, s.createContext)({});
      var u = n(97967),
        c = n(23617);
      let d = (0, s.createContext)({ strict: !1 }),
        f = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
        h = "data-" + f("framerAppearId");
      function p(e) {
        return (
          e &&
          "object" == typeof e &&
          Object.prototype.hasOwnProperty.call(e, "current")
        );
      }
      function m(e) {
        return "string" == typeof e || Array.isArray(e);
      }
      function v(e) {
        return (
          null !== e && "object" == typeof e && "function" == typeof e.start
        );
      }
      let g = [
          "animate",
          "whileInView",
          "whileFocus",
          "whileHover",
          "whileTap",
          "whileDrag",
          "exit",
        ],
        y = ["initial", ...g];
      function b(e) {
        return v(e.animate) || y.some((t) => m(e[t]));
      }
      function P(e) {
        return !!(b(e) || e.variants);
      }
      function x(e) {
        return Array.isArray(e) ? e.join(" ") : e;
      }
      let w = {
          animation: [
            "animate",
            "variants",
            "whileHover",
            "whileTap",
            "exit",
            "whileInView",
            "whileFocus",
            "whileDrag",
          ],
          exit: ["exit"],
          drag: ["drag", "dragControls"],
          focus: ["whileFocus"],
          hover: ["whileHover", "onHoverStart", "onHoverEnd"],
          tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
          pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
          inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
          layout: ["layout", "layoutId"],
        },
        E = {};
      for (let e in w) E[e] = { isEnabled: (t) => w[e].some((e) => !!t[e]) };
      var T = n(33791),
        S = n(3422);
      let C = (0, s.createContext)({}),
        M = Symbol.for("motionComponentSymbol"),
        A = [
          "animate",
          "circle",
          "defs",
          "desc",
          "ellipse",
          "g",
          "image",
          "line",
          "filter",
          "marker",
          "mask",
          "metadata",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "rect",
          "stop",
          "switch",
          "symbol",
          "svg",
          "text",
          "tspan",
          "use",
          "view",
        ];
      function O(e) {
        if ("string" != typeof e || e.includes("-"));
        else if (A.indexOf(e) > -1 || /[A-Z]/.test(e)) return !0;
        return !1;
      }
      let k = {},
        R = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY",
        ],
        j = new Set(R);
      function D(e, { layout: t, layoutId: n }) {
        return (
          j.has(e) ||
          e.startsWith("origin") ||
          ((t || void 0 !== n) && (!!k[e] || "opacity" === e))
        );
      }
      let L = (e) => !!(e && e.getVelocity),
        V = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        _ = R.length,
        F = (e) => (t) => "string" == typeof t && t.startsWith(e),
        I = F("--"),
        N = F("var(--"),
        B = (e, t) => (t && "number" == typeof e ? t.transform(e) : e),
        H = (e, t, n) => Math.min(Math.max(n, e), t),
        U = {
          test: (e) => "number" == typeof e,
          parse: parseFloat,
          transform: (e) => e,
        },
        W = { ...U, transform: (e) => H(0, 1, e) },
        z = { ...U, default: 1 },
        $ = (e) => Math.round(1e5 * e) / 1e5,
        Z = /(-)?([\d]*\.?[\d])+/g,
        Y =
          /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
        q =
          /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
      function X(e) {
        return "string" == typeof e;
      }
      let G = (e) => ({
          test: (t) => X(t) && t.endsWith(e) && 1 === t.split(" ").length,
          parse: parseFloat,
          transform: (t) => `${t}${e}`,
        }),
        K = G("deg"),
        Q = G("%"),
        J = G("px"),
        ee = G("vh"),
        et = G("vw"),
        en = {
          ...Q,
          parse: (e) => Q.parse(e) / 100,
          transform: (e) => Q.transform(100 * e),
        },
        er = { ...U, transform: Math.round },
        ei = {
          borderWidth: J,
          borderTopWidth: J,
          borderRightWidth: J,
          borderBottomWidth: J,
          borderLeftWidth: J,
          borderRadius: J,
          radius: J,
          borderTopLeftRadius: J,
          borderTopRightRadius: J,
          borderBottomRightRadius: J,
          borderBottomLeftRadius: J,
          width: J,
          maxWidth: J,
          height: J,
          maxHeight: J,
          size: J,
          top: J,
          right: J,
          bottom: J,
          left: J,
          padding: J,
          paddingTop: J,
          paddingRight: J,
          paddingBottom: J,
          paddingLeft: J,
          margin: J,
          marginTop: J,
          marginRight: J,
          marginBottom: J,
          marginLeft: J,
          rotate: K,
          rotateX: K,
          rotateY: K,
          rotateZ: K,
          scale: z,
          scaleX: z,
          scaleY: z,
          scaleZ: z,
          skew: K,
          skewX: K,
          skewY: K,
          distance: J,
          translateX: J,
          translateY: J,
          translateZ: J,
          x: J,
          y: J,
          z: J,
          perspective: J,
          transformPerspective: J,
          opacity: W,
          originX: en,
          originY: en,
          originZ: J,
          zIndex: er,
          fillOpacity: W,
          strokeOpacity: W,
          numOctaves: er,
        };
      function eo(e, t, n, r) {
        let { style: i, vars: o, transform: s, transformOrigin: a } = e,
          l = !1,
          u = !1,
          c = !0;
        for (let e in t) {
          let n = t[e];
          if (I(e)) {
            o[e] = n;
            continue;
          }
          let r = ei[e],
            d = B(n, r);
          if (j.has(e)) {
            if (((l = !0), (s[e] = d), !c)) continue;
            n !== (r.default || 0) && (c = !1);
          } else e.startsWith("origin") ? ((u = !0), (a[e] = d)) : (i[e] = d);
        }
        if (
          (!t.transform &&
            (l || r
              ? (i.transform = (function (
                  e,
                  {
                    enableHardwareAcceleration: t = !0,
                    allowTransformNone: n = !0,
                  },
                  r,
                  i
                ) {
                  let o = "";
                  for (let t = 0; t < _; t++) {
                    let n = R[t];
                    if (void 0 !== e[n]) {
                      let t = V[n] || n;
                      o += `${t}(${e[n]}) `;
                    }
                  }
                  return (
                    t && !e.z && (o += "translateZ(0)"),
                    (o = o.trim()),
                    i ? (o = i(e, r ? "" : o)) : n && r && (o = "none"),
                    o
                  );
                })(e.transform, n, c, r))
              : i.transform && (i.transform = "none")),
          u)
        ) {
          let { originX: e = "50%", originY: t = "50%", originZ: n = 0 } = a;
          i.transformOrigin = `${e} ${t} ${n}`;
        }
      }
      let es = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {},
      });
      function ea(e, t, n) {
        for (let r in t) L(t[r]) || D(r, n) || (e[r] = t[r]);
      }
      let el = new Set([
        "animate",
        "exit",
        "variants",
        "initial",
        "style",
        "values",
        "variants",
        "transition",
        "transformTemplate",
        "transformValues",
        "custom",
        "inherit",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "_dragX",
        "_dragY",
        "onHoverStart",
        "onHoverEnd",
        "onViewportEnter",
        "onViewportLeave",
        "globalTapTarget",
        "ignoreStrict",
        "viewport",
      ]);
      function eu(e) {
        return (
          e.startsWith("while") ||
          (e.startsWith("drag") && "draggable" !== e) ||
          e.startsWith("layout") ||
          e.startsWith("onTap") ||
          e.startsWith("onPan") ||
          e.startsWith("onLayout") ||
          el.has(e)
        );
      }
      let ec = (e) => !eu(e);
      try {
        (i = require("@emotion/is-prop-valid").default) &&
          (ec = (e) => (e.startsWith("on") ? !eu(e) : i(e)));
      } catch (e) {}
      function ed(e, t, n) {
        return "string" == typeof e ? e : J.transform(t + n * e);
      }
      let ef = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        eh = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function ep(
        e,
        {
          attrX: t,
          attrY: n,
          attrScale: r,
          originX: i,
          originY: o,
          pathLength: s,
          pathSpacing: a = 1,
          pathOffset: l = 0,
          ...u
        },
        c,
        d,
        f
      ) {
        if ((eo(e, u, c, f), d)) {
          e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
          return;
        }
        (e.attrs = e.style), (e.style = {});
        let { attrs: h, style: p, dimensions: m } = e;
        h.transform && (m && (p.transform = h.transform), delete h.transform),
          m &&
            (void 0 !== i || void 0 !== o || p.transform) &&
            (p.transformOrigin = (function (e, t, n) {
              let r = ed(t, e.x, e.width),
                i = ed(n, e.y, e.height);
              return `${r} ${i}`;
            })(m, void 0 !== i ? i : 0.5, void 0 !== o ? o : 0.5)),
          void 0 !== t && (h.x = t),
          void 0 !== n && (h.y = n),
          void 0 !== r && (h.scale = r),
          void 0 !== s &&
            (function (e, t, n = 1, r = 0, i = !0) {
              e.pathLength = 1;
              let o = i ? ef : eh;
              e[o.offset] = J.transform(-r);
              let s = J.transform(t),
                a = J.transform(n);
              e[o.array] = `${s} ${a}`;
            })(h, s, a, l, !1);
      }
      let em = () => ({ ...es(), attrs: {} }),
        ev = (e) => "string" == typeof e && "svg" === e.toLowerCase();
      function eg(e, { style: t, vars: n }, r, i) {
        for (let o in (Object.assign(e.style, t, i && i.getProjectionStyles(r)),
        n))
          e.style.setProperty(o, n[o]);
      }
      let ey = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
        "startOffset",
        "textLength",
        "lengthAdjust",
      ]);
      function eb(e, t, n, r) {
        for (let n in (eg(e, t, void 0, r), t.attrs))
          e.setAttribute(ey.has(n) ? n : f(n), t.attrs[n]);
      }
      function eP(e, t) {
        let { style: n } = e,
          r = {};
        for (let i in n)
          (L(n[i]) || (t.style && L(t.style[i])) || D(i, e)) && (r[i] = n[i]);
        return r;
      }
      function ex(e, t) {
        let n = eP(e, t);
        for (let r in e)
          (L(e[r]) || L(t[r])) &&
            (n[
              -1 !== R.indexOf(r)
                ? "attr" + r.charAt(0).toUpperCase() + r.substring(1)
                : r
            ] = e[r]);
        return n;
      }
      function ew(e, t, n, r = {}, i = {}) {
        return (
          "function" == typeof t && (t = t(void 0 !== n ? n : e.custom, r, i)),
          "string" == typeof t && (t = e.variants && e.variants[t]),
          "function" == typeof t && (t = t(void 0 !== n ? n : e.custom, r, i)),
          t
        );
      }
      var eE = n(3105);
      let eT = (e) => Array.isArray(e),
        eS = (e) => !!(e && "object" == typeof e && e.mix && e.toValue),
        eC = (e) => (eT(e) ? e[e.length - 1] || 0 : e);
      function eM(e) {
        let t = L(e) ? e.get() : e;
        return eS(t) ? t.toValue() : t;
      }
      let eA = (e) => (t, n) => {
        let r = (0, s.useContext)(l),
          i = (0, s.useContext)(u.O),
          o = () =>
            (function (
              {
                scrapeMotionValuesFromProps: e,
                createRenderState: t,
                onMount: n,
              },
              r,
              i,
              o
            ) {
              let s = {
                latestValues: (function (e, t, n, r) {
                  let i = {},
                    o = r(e, {});
                  for (let e in o) i[e] = eM(o[e]);
                  let { initial: s, animate: a } = e,
                    l = b(e),
                    u = P(e);
                  t &&
                    u &&
                    !l &&
                    !1 !== e.inherit &&
                    (void 0 === s && (s = t.initial),
                    void 0 === a && (a = t.animate));
                  let c = !!n && !1 === n.initial,
                    d = (c = c || !1 === s) ? a : s;
                  return (
                    d &&
                      "boolean" != typeof d &&
                      !v(d) &&
                      (Array.isArray(d) ? d : [d]).forEach((t) => {
                        let n = ew(e, t);
                        if (!n) return;
                        let { transitionEnd: r, transition: o, ...s } = n;
                        for (let e in s) {
                          let t = s[e];
                          if (Array.isArray(t)) {
                            let e = c ? t.length - 1 : 0;
                            t = t[e];
                          }
                          null !== t && (i[e] = t);
                        }
                        for (let e in r) i[e] = r[e];
                      }),
                    i
                  );
                })(r, i, o, e),
                renderState: t(),
              };
              return n && (s.mount = (e) => n(r, e, s)), s;
            })(e, t, r, i);
        return n ? o() : (0, eE.h)(o);
      };
      var eO = n(62972);
      let ek = {
          useVisualState: eA({
            scrapeMotionValuesFromProps: ex,
            createRenderState: em,
            onMount: (e, t, { renderState: n, latestValues: r }) => {
              eO.Wi.read(() => {
                try {
                  n.dimensions =
                    "function" == typeof t.getBBox
                      ? t.getBBox()
                      : t.getBoundingClientRect();
                } catch (e) {
                  n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
                }
              }),
                eO.Wi.render(() => {
                  ep(
                    n,
                    r,
                    { enableHardwareAcceleration: !1 },
                    ev(t.tagName),
                    e.transformTemplate
                  ),
                    eb(t, n);
                });
            },
          }),
        },
        eR = {
          useVisualState: eA({
            scrapeMotionValuesFromProps: eP,
            createRenderState: es,
          }),
        };
      function ej(e, t, n, r = { passive: !0 }) {
        return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
      }
      let eD = (e) =>
        "mouse" === e.pointerType
          ? "number" != typeof e.button || e.button <= 0
          : !1 !== e.isPrimary;
      function eL(e, t = "page") {
        return { point: { x: e[t + "X"], y: e[t + "Y"] } };
      }
      let eV = (e) => (t) => eD(t) && e(t, eL(t));
      function e_(e, t, n, r) {
        return ej(e, t, eV(n), r);
      }
      let eF = (e, t) => (n) => t(e(n)),
        eI = (...e) => e.reduce(eF);
      function eN(e) {
        let t = null;
        return () =>
          null === t &&
          ((t = e),
          () => {
            t = null;
          });
      }
      let eB = eN("dragHorizontal"),
        eH = eN("dragVertical");
      function eU(e) {
        let t = !1;
        if ("y" === e) t = eH();
        else if ("x" === e) t = eB();
        else {
          let e = eB(),
            n = eH();
          e && n
            ? (t = () => {
                e(), n();
              })
            : (e && e(), n && n());
        }
        return t;
      }
      function eW() {
        let e = eU(!0);
        return !e || (e(), !1);
      }
      class ez {
        constructor(e) {
          (this.isMounted = !1), (this.node = e);
        }
        update() {}
      }
      function e$(e, t) {
        let n = "onHover" + (t ? "Start" : "End");
        return e_(
          e.current,
          "pointer" + (t ? "enter" : "leave"),
          (r, i) => {
            if ("touch" === r.pointerType || eW()) return;
            let o = e.getProps();
            e.animationState &&
              o.whileHover &&
              e.animationState.setActive("whileHover", t),
              o[n] && eO.Wi.update(() => o[n](r, i));
          },
          { passive: !e.getProps()[n] }
        );
      }
      class eZ extends ez {
        mount() {
          this.unmount = eI(e$(this.node, !0), e$(this.node, !1));
        }
        unmount() {}
      }
      class eY extends ez {
        constructor() {
          super(...arguments), (this.isActive = !1);
        }
        onFocus() {
          let e = !1;
          try {
            e = this.node.current.matches(":focus-visible");
          } catch (t) {
            e = !0;
          }
          e &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !0),
            (this.isActive = !0));
        }
        onBlur() {
          this.isActive &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !1),
            (this.isActive = !1));
        }
        mount() {
          this.unmount = eI(
            ej(this.node.current, "focus", () => this.onFocus()),
            ej(this.node.current, "blur", () => this.onBlur())
          );
        }
        unmount() {}
      }
      let eq = (e, t) => !!t && (e === t || eq(e, t.parentElement));
      var eX = n(50065);
      function eG(e, t) {
        if (!t) return;
        let n = new PointerEvent("pointer" + e);
        t(n, eL(n));
      }
      class eK extends ez {
        constructor() {
          super(...arguments),
            (this.removeStartListeners = eX.Z),
            (this.removeEndListeners = eX.Z),
            (this.removeAccessibleListeners = eX.Z),
            (this.startPointerPress = (e, t) => {
              if (this.isPressing) return;
              this.removeEndListeners();
              let n = this.node.getProps(),
                r = e_(
                  window,
                  "pointerup",
                  (e, t) => {
                    if (!this.checkPressEnd()) return;
                    let {
                      onTap: n,
                      onTapCancel: r,
                      globalTapTarget: i,
                    } = this.node.getProps();
                    eO.Wi.update(() => {
                      i || eq(this.node.current, e.target)
                        ? n && n(e, t)
                        : r && r(e, t);
                    });
                  },
                  { passive: !(n.onTap || n.onPointerUp) }
                ),
                i = e_(
                  window,
                  "pointercancel",
                  (e, t) => this.cancelPress(e, t),
                  { passive: !(n.onTapCancel || n.onPointerCancel) }
                );
              (this.removeEndListeners = eI(r, i)), this.startPress(e, t);
            }),
            (this.startAccessiblePress = () => {
              let e = ej(this.node.current, "keydown", (e) => {
                  "Enter" !== e.key ||
                    this.isPressing ||
                    (this.removeEndListeners(),
                    (this.removeEndListeners = ej(
                      this.node.current,
                      "keyup",
                      (e) => {
                        "Enter" === e.key &&
                          this.checkPressEnd() &&
                          eG("up", (e, t) => {
                            let { onTap: n } = this.node.getProps();
                            n && eO.Wi.update(() => n(e, t));
                          });
                      }
                    )),
                    eG("down", (e, t) => {
                      this.startPress(e, t);
                    }));
                }),
                t = ej(this.node.current, "blur", () => {
                  this.isPressing &&
                    eG("cancel", (e, t) => this.cancelPress(e, t));
                });
              this.removeAccessibleListeners = eI(e, t);
            });
        }
        startPress(e, t) {
          this.isPressing = !0;
          let { onTapStart: n, whileTap: r } = this.node.getProps();
          r &&
            this.node.animationState &&
            this.node.animationState.setActive("whileTap", !0),
            n && eO.Wi.update(() => n(e, t));
        }
        checkPressEnd() {
          return (
            this.removeEndListeners(),
            (this.isPressing = !1),
            this.node.getProps().whileTap &&
              this.node.animationState &&
              this.node.animationState.setActive("whileTap", !1),
            !eW()
          );
        }
        cancelPress(e, t) {
          if (!this.checkPressEnd()) return;
          let { onTapCancel: n } = this.node.getProps();
          n && eO.Wi.update(() => n(e, t));
        }
        mount() {
          let e = this.node.getProps(),
            t = e_(
              e.globalTapTarget ? window : this.node.current,
              "pointerdown",
              this.startPointerPress,
              { passive: !(e.onTapStart || e.onPointerStart) }
            ),
            n = ej(this.node.current, "focus", this.startAccessiblePress);
          this.removeStartListeners = eI(t, n);
        }
        unmount() {
          this.removeStartListeners(),
            this.removeEndListeners(),
            this.removeAccessibleListeners();
        }
      }
      let eQ = new WeakMap(),
        eJ = new WeakMap(),
        e0 = (e) => {
          let t = eQ.get(e.target);
          t && t(e);
        },
        e1 = (e) => {
          e.forEach(e0);
        },
        e2 = { some: 0, all: 1 };
      class e5 extends ez {
        constructor() {
          super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
        }
        startObserver() {
          this.unmount();
          let { viewport: e = {} } = this.node.getProps(),
            { root: t, margin: n, amount: r = "some", once: i } = e,
            o = {
              root: t ? t.current : void 0,
              rootMargin: n,
              threshold: "number" == typeof r ? r : e2[r],
            };
          return (function (e, t, n) {
            let r = (function ({ root: e, ...t }) {
              let n = e || document;
              eJ.has(n) || eJ.set(n, {});
              let r = eJ.get(n),
                i = JSON.stringify(t);
              return (
                r[i] ||
                  (r[i] = new IntersectionObserver(e1, { root: e, ...t })),
                r[i]
              );
            })(t);
            return (
              eQ.set(e, n),
              r.observe(e),
              () => {
                eQ.delete(e), r.unobserve(e);
              }
            );
          })(this.node.current, o, (e) => {
            let { isIntersecting: t } = e;
            if (
              this.isInView === t ||
              ((this.isInView = t), i && !t && this.hasEnteredView)
            )
              return;
            t && (this.hasEnteredView = !0),
              this.node.animationState &&
                this.node.animationState.setActive("whileInView", t);
            let { onViewportEnter: n, onViewportLeave: r } =
                this.node.getProps(),
              o = t ? n : r;
            o && o(e);
          });
        }
        mount() {
          this.startObserver();
        }
        update() {
          if ("undefined" == typeof IntersectionObserver) return;
          let { props: e, prevProps: t } = this.node;
          ["amount", "margin", "root"].some(
            (function ({ viewport: e = {} }, { viewport: t = {} } = {}) {
              return (n) => e[n] !== t[n];
            })(e, t)
          ) && this.startObserver();
        }
        unmount() {}
      }
      function e4(e, t) {
        if (!Array.isArray(t)) return !1;
        let n = t.length;
        if (n !== e.length) return !1;
        for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
        return !0;
      }
      function e3(e, t, n) {
        let r = e.getProps();
        return ew(
          r,
          t,
          void 0 !== n ? n : r.custom,
          (function (e) {
            let t = {};
            return e.values.forEach((e, n) => (t[n] = e.get())), t;
          })(e),
          (function (e) {
            let t = {};
            return e.values.forEach((e, n) => (t[n] = e.getVelocity())), t;
          })(e)
        );
      }
      var e7 = n(57035);
      let e6 = (e) => 1e3 * e,
        e9 = (e) => e / 1e3,
        e8 = { current: !1 },
        te = (e) => Array.isArray(e) && "number" == typeof e[0],
        tt = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
        tn = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: tt([0, 0.65, 0.55, 1]),
          circOut: tt([0.55, 0, 1, 0.45]),
          backIn: tt([0.31, 0.01, 0.66, -0.59]),
          backOut: tt([0.33, 1.53, 0.69, 0.99]),
        },
        tr = (e, t, n) =>
          (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e;
      function ti(e, t, n, r) {
        if (e === t && n === r) return eX.Z;
        let i = (t) =>
          (function (e, t, n, r, i) {
            let o, s;
            let a = 0;
            do
              (o = tr((s = t + (n - t) / 2), r, i) - e) > 0 ? (n = s) : (t = s);
            while (Math.abs(o) > 1e-7 && ++a < 12);
            return s;
          })(t, 0, 1, e, n);
        return (e) => (0 === e || 1 === e ? e : tr(i(e), t, r));
      }
      let to = ti(0.42, 0, 1, 1),
        ts = ti(0, 0, 0.58, 1),
        ta = ti(0.42, 0, 0.58, 1),
        tl = (e) => Array.isArray(e) && "number" != typeof e[0],
        tu = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
        tc = (e) => (t) => 1 - e(1 - t),
        td = (e) => 1 - Math.sin(Math.acos(e)),
        tf = tc(td),
        th = tu(td),
        tp = ti(0.33, 1.53, 0.69, 0.99),
        tm = tc(tp),
        tv = tu(tm),
        tg = {
          linear: eX.Z,
          easeIn: to,
          easeInOut: ta,
          easeOut: ts,
          circIn: td,
          circInOut: th,
          circOut: tf,
          backIn: tm,
          backInOut: tv,
          backOut: tp,
          anticipate: (e) =>
            (e *= 2) < 1 ? 0.5 * tm(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
        },
        ty = (e) => {
          if (Array.isArray(e)) {
            (0, e7.k)(
              4 === e.length,
              "Cubic bezier arrays must contain four numerical values."
            );
            let [t, n, r, i] = e;
            return ti(t, n, r, i);
          }
          return "string" == typeof e
            ? ((0, e7.k)(void 0 !== tg[e], `Invalid easing type '${e}'`), tg[e])
            : e;
        },
        tb = (e, t) => (n) =>
          !!(
            (X(n) && q.test(n) && n.startsWith(e)) ||
            (t && Object.prototype.hasOwnProperty.call(n, t))
          ),
        tP = (e, t, n) => (r) => {
          if (!X(r)) return r;
          let [i, o, s, a] = r.match(Z);
          return {
            [e]: parseFloat(i),
            [t]: parseFloat(o),
            [n]: parseFloat(s),
            alpha: void 0 !== a ? parseFloat(a) : 1,
          };
        },
        tx = (e) => H(0, 255, e),
        tw = { ...U, transform: (e) => Math.round(tx(e)) },
        tE = {
          test: tb("rgb", "red"),
          parse: tP("red", "green", "blue"),
          transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
            "rgba(" +
            tw.transform(e) +
            ", " +
            tw.transform(t) +
            ", " +
            tw.transform(n) +
            ", " +
            $(W.transform(r)) +
            ")",
        },
        tT = {
          test: tb("#"),
          parse: function (e) {
            let t = "",
              n = "",
              r = "",
              i = "";
            return (
              e.length > 5
                ? ((t = e.substring(1, 3)),
                  (n = e.substring(3, 5)),
                  (r = e.substring(5, 7)),
                  (i = e.substring(7, 9)))
                : ((t = e.substring(1, 2)),
                  (n = e.substring(2, 3)),
                  (r = e.substring(3, 4)),
                  (i = e.substring(4, 5)),
                  (t += t),
                  (n += n),
                  (r += r),
                  (i += i)),
              {
                red: parseInt(t, 16),
                green: parseInt(n, 16),
                blue: parseInt(r, 16),
                alpha: i ? parseInt(i, 16) / 255 : 1,
              }
            );
          },
          transform: tE.transform,
        },
        tS = {
          test: tb("hsl", "hue"),
          parse: tP("hue", "saturation", "lightness"),
          transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
            "hsla(" +
            Math.round(e) +
            ", " +
            Q.transform($(t)) +
            ", " +
            Q.transform($(n)) +
            ", " +
            $(W.transform(r)) +
            ")",
        },
        tC = {
          test: (e) => tE.test(e) || tT.test(e) || tS.test(e),
          parse: (e) =>
            tE.test(e) ? tE.parse(e) : tS.test(e) ? tS.parse(e) : tT.parse(e),
          transform: (e) =>
            X(e)
              ? e
              : e.hasOwnProperty("red")
              ? tE.transform(e)
              : tS.transform(e),
        },
        tM = (e, t, n) => -n * e + n * t + e;
      function tA(e, t, n) {
        return (n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6)
          ? e + (t - e) * 6 * n
          : n < 0.5
          ? t
          : n < 2 / 3
          ? e + (t - e) * (2 / 3 - n) * 6
          : e;
      }
      let tO = (e, t, n) => {
          let r = e * e;
          return Math.sqrt(Math.max(0, n * (t * t - r) + r));
        },
        tk = [tT, tE, tS],
        tR = (e) => tk.find((t) => t.test(e));
      function tj(e) {
        let t = tR(e);
        (0, e7.k)(
          !!t,
          `'${e}' is not an animatable color. Use the equivalent color code instead.`
        );
        let n = t.parse(e);
        return (
          t === tS &&
            (n = (function ({ hue: e, saturation: t, lightness: n, alpha: r }) {
              (e /= 360), (n /= 100);
              let i = 0,
                o = 0,
                s = 0;
              if ((t /= 100)) {
                let r = n < 0.5 ? n * (1 + t) : n + t - n * t,
                  a = 2 * n - r;
                (i = tA(a, r, e + 1 / 3)),
                  (o = tA(a, r, e)),
                  (s = tA(a, r, e - 1 / 3));
              } else i = o = s = n;
              return {
                red: Math.round(255 * i),
                green: Math.round(255 * o),
                blue: Math.round(255 * s),
                alpha: r,
              };
            })(n)),
          n
        );
      }
      let tD = (e, t) => {
          let n = tj(e),
            r = tj(t),
            i = { ...n };
          return (e) => (
            (i.red = tO(n.red, r.red, e)),
            (i.green = tO(n.green, r.green, e)),
            (i.blue = tO(n.blue, r.blue, e)),
            (i.alpha = tM(n.alpha, r.alpha, e)),
            tE.transform(i)
          );
        },
        tL = {
          regex:
            /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,
          countKey: "Vars",
          token: "${v}",
          parse: eX.Z,
        },
        tV = { regex: Y, countKey: "Colors", token: "${c}", parse: tC.parse },
        t_ = { regex: Z, countKey: "Numbers", token: "${n}", parse: U.parse };
      function tF(e, { regex: t, countKey: n, token: r, parse: i }) {
        let o = e.tokenised.match(t);
        o &&
          ((e["num" + n] = o.length),
          (e.tokenised = e.tokenised.replace(t, r)),
          e.values.push(...o.map(i)));
      }
      function tI(e) {
        let t = e.toString(),
          n = {
            value: t,
            tokenised: t,
            values: [],
            numVars: 0,
            numColors: 0,
            numNumbers: 0,
          };
        return n.value.includes("var(--") && tF(n, tL), tF(n, tV), tF(n, t_), n;
      }
      function tN(e) {
        return tI(e).values;
      }
      function tB(e) {
        let { values: t, numColors: n, numVars: r, tokenised: i } = tI(e),
          o = t.length;
        return (e) => {
          let t = i;
          for (let i = 0; i < o; i++)
            t =
              i < r
                ? t.replace(tL.token, e[i])
                : i < r + n
                ? t.replace(tV.token, tC.transform(e[i]))
                : t.replace(t_.token, $(e[i]));
          return t;
        };
      }
      let tH = (e) => ("number" == typeof e ? 0 : e),
        tU = {
          test: function (e) {
            var t, n;
            return (
              isNaN(e) &&
              X(e) &&
              ((null === (t = e.match(Z)) || void 0 === t
                ? void 0
                : t.length) || 0) +
                ((null === (n = e.match(Y)) || void 0 === n
                  ? void 0
                  : n.length) || 0) >
                0
            );
          },
          parse: tN,
          createTransformer: tB,
          getAnimatableNone: function (e) {
            let t = tN(e);
            return tB(e)(t.map(tH));
          },
        },
        tW = (e, t) => (n) => `${n > 0 ? t : e}`;
      function tz(e, t) {
        return "number" == typeof e
          ? (n) => tM(e, t, n)
          : tC.test(e)
          ? tD(e, t)
          : e.startsWith("var(")
          ? tW(e, t)
          : tY(e, t);
      }
      let t$ = (e, t) => {
          let n = [...e],
            r = n.length,
            i = e.map((e, n) => tz(e, t[n]));
          return (e) => {
            for (let t = 0; t < r; t++) n[t] = i[t](e);
            return n;
          };
        },
        tZ = (e, t) => {
          let n = { ...e, ...t },
            r = {};
          for (let i in n)
            void 0 !== e[i] && void 0 !== t[i] && (r[i] = tz(e[i], t[i]));
          return (e) => {
            for (let t in r) n[t] = r[t](e);
            return n;
          };
        },
        tY = (e, t) => {
          let n = tU.createTransformer(t),
            r = tI(e),
            i = tI(t);
          return r.numVars === i.numVars &&
            r.numColors === i.numColors &&
            r.numNumbers >= i.numNumbers
            ? eI(t$(r.values, i.values), n)
            : ((0, e7.K)(
                !0,
                `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
              ),
              tW(e, t));
        },
        tq = (e, t, n) => {
          let r = t - e;
          return 0 === r ? 1 : (n - e) / r;
        },
        tX = (e, t) => (n) => tM(e, t, n);
      function tG(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
        let o = e.length;
        if (
          ((0, e7.k)(
            o === t.length,
            "Both input and output ranges must be the same length"
          ),
          1 === o)
        )
          return () => t[0];
        e[0] > e[o - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
        let s = (function (e, t, n) {
            let r = [],
              i =
                n ||
                (function (e) {
                  if ("number" == typeof e);
                  else if ("string" == typeof e) return tC.test(e) ? tD : tY;
                  else if (Array.isArray(e)) return t$;
                  else if ("object" == typeof e) return tZ;
                  return tX;
                })(e[0]),
              o = e.length - 1;
            for (let n = 0; n < o; n++) {
              let o = i(e[n], e[n + 1]);
              t && (o = eI(Array.isArray(t) ? t[n] || eX.Z : t, o)), r.push(o);
            }
            return r;
          })(t, r, i),
          a = s.length,
          l = (t) => {
            let n = 0;
            if (a > 1) for (; n < e.length - 2 && !(t < e[n + 1]); n++);
            let r = tq(e[n], e[n + 1], t);
            return s[n](r);
          };
        return n ? (t) => l(H(e[0], e[o - 1], t)) : l;
      }
      function tK({
        duration: e = 300,
        keyframes: t,
        times: n,
        ease: r = "easeInOut",
      }) {
        let i = tl(r) ? r.map(ty) : ty(r),
          o = { done: !1, value: t[0] },
          s = tG(
            (n && n.length === t.length
              ? n
              : (function (e) {
                  let t = [0];
                  return (
                    (function (e, t) {
                      let n = e[e.length - 1];
                      for (let r = 1; r <= t; r++) {
                        let i = tq(0, t, r);
                        e.push(tM(n, 1, i));
                      }
                    })(t, e.length - 1),
                    t
                  );
                })(t)
            ).map((t) => t * e),
            t,
            {
              ease: Array.isArray(i)
                ? i
                : t.map(() => i || ta).splice(0, t.length - 1),
            }
          );
        return {
          calculatedDuration: e,
          next: (t) => ((o.value = s(t)), (o.done = t >= e), o),
        };
      }
      function tQ(e, t, n) {
        var r, i;
        let o = Math.max(t - 5, 0);
        return (r = n - e(o)), (i = t - o) ? (1e3 / i) * r : 0;
      }
      function tJ(e, t) {
        return e * Math.sqrt(1 - t * t);
      }
      let t0 = ["duration", "bounce"],
        t1 = ["stiffness", "damping", "mass"];
      function t2(e, t) {
        return t.some((t) => void 0 !== e[t]);
      }
      function t5({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
        let i;
        let o = e[0],
          s = e[e.length - 1],
          a = { done: !1, value: o },
          {
            stiffness: l,
            damping: u,
            mass: c,
            duration: d,
            velocity: f,
            isResolvedFromDuration: h,
          } = (function (e) {
            let t = {
              velocity: 0,
              stiffness: 100,
              damping: 10,
              mass: 1,
              isResolvedFromDuration: !1,
              ...e,
            };
            if (!t2(e, t1) && t2(e, t0)) {
              let n = (function ({
                duration: e = 800,
                bounce: t = 0.25,
                velocity: n = 0,
                mass: r = 1,
              }) {
                let i, o;
                (0, e7.K)(
                  e <= e6(10),
                  "Spring duration must be 10 seconds or less"
                );
                let s = 1 - t;
                (s = H(0.05, 1, s)),
                  (e = H(0.01, 10, e9(e))),
                  s < 1
                    ? ((i = (t) => {
                        let r = t * s,
                          i = r * e;
                        return 0.001 - ((r - n) / tJ(t, s)) * Math.exp(-i);
                      }),
                      (o = (t) => {
                        let r = t * s * e,
                          o = Math.pow(s, 2) * Math.pow(t, 2) * e,
                          a = tJ(Math.pow(t, 2), s);
                        return (
                          ((r * n + n - o) *
                            Math.exp(-r) *
                            (-i(t) + 0.001 > 0 ? -1 : 1)) /
                          a
                        );
                      }))
                    : ((i = (t) =>
                        -0.001 + Math.exp(-t * e) * ((t - n) * e + 1)),
                      (o = (t) => e * e * (n - t) * Math.exp(-t * e)));
                let a = (function (e, t, n) {
                  let r = n;
                  for (let n = 1; n < 12; n++) r -= e(r) / t(r);
                  return r;
                })(i, o, 5 / e);
                if (((e = e6(e)), isNaN(a)))
                  return { stiffness: 100, damping: 10, duration: e };
                {
                  let t = Math.pow(a, 2) * r;
                  return {
                    stiffness: t,
                    damping: 2 * s * Math.sqrt(r * t),
                    duration: e,
                  };
                }
              })(e);
              (t = { ...t, ...n, mass: 1 }).isResolvedFromDuration = !0;
            }
            return t;
          })({ ...r, velocity: -e9(r.velocity || 0) }),
          p = f || 0,
          m = u / (2 * Math.sqrt(l * c)),
          v = s - o,
          g = e9(Math.sqrt(l / c)),
          y = 5 > Math.abs(v);
        if ((n || (n = y ? 0.01 : 2), t || (t = y ? 0.005 : 0.5), m < 1)) {
          let e = tJ(g, m);
          i = (t) =>
            s -
            Math.exp(-m * g * t) *
              (((p + m * g * v) / e) * Math.sin(e * t) + v * Math.cos(e * t));
        } else if (1 === m)
          i = (e) => s - Math.exp(-g * e) * (v + (p + g * v) * e);
        else {
          let e = g * Math.sqrt(m * m - 1);
          i = (t) => {
            let n = Math.exp(-m * g * t),
              r = Math.min(e * t, 300);
            return (
              s -
              (n * ((p + m * g * v) * Math.sinh(r) + e * v * Math.cosh(r))) / e
            );
          };
        }
        return {
          calculatedDuration: (h && d) || null,
          next: (e) => {
            let r = i(e);
            if (h) a.done = e >= d;
            else {
              let o = p;
              0 !== e && (o = m < 1 ? tQ(i, e, r) : 0);
              let l = Math.abs(o) <= n,
                u = Math.abs(s - r) <= t;
              a.done = l && u;
            }
            return (a.value = a.done ? s : r), a;
          },
        };
      }
      function t4({
        keyframes: e,
        velocity: t = 0,
        power: n = 0.8,
        timeConstant: r = 325,
        bounceDamping: i = 10,
        bounceStiffness: o = 500,
        modifyTarget: s,
        min: a,
        max: l,
        restDelta: u = 0.5,
        restSpeed: c,
      }) {
        let d, f;
        let h = e[0],
          p = { done: !1, value: h },
          m = (e) => (void 0 !== a && e < a) || (void 0 !== l && e > l),
          v = (e) =>
            void 0 === a
              ? l
              : void 0 === l
              ? a
              : Math.abs(a - e) < Math.abs(l - e)
              ? a
              : l,
          g = n * t,
          y = h + g,
          b = void 0 === s ? y : s(y);
        b !== y && (g = b - h);
        let P = (e) => -g * Math.exp(-e / r),
          x = (e) => b + P(e),
          w = (e) => {
            let t = P(e),
              n = x(e);
            (p.done = Math.abs(t) <= u), (p.value = p.done ? b : n);
          },
          E = (e) => {
            m(p.value) &&
              ((d = e),
              (f = t5({
                keyframes: [p.value, v(p.value)],
                velocity: tQ(x, e, p.value),
                damping: i,
                stiffness: o,
                restDelta: u,
                restSpeed: c,
              })));
          };
        return (
          E(0),
          {
            calculatedDuration: null,
            next: (e) => {
              let t = !1;
              return (f || void 0 !== d || ((t = !0), w(e), E(e)),
              void 0 !== d && e > d)
                ? f.next(e - d)
                : (t || w(e), p);
            },
          }
        );
      }
      let t3 = (e) => {
        let t = ({ timestamp: t }) => e(t);
        return {
          start: () => eO.Wi.update(t, !0),
          stop: () => (0, eO.Pn)(t),
          now: () =>
            eO.frameData.isProcessing
              ? eO.frameData.timestamp
              : performance.now(),
        };
      };
      function t7(e) {
        let t = 0,
          n = e.next(t);
        for (; !n.done && t < 2e4; ) (t += 50), (n = e.next(t));
        return t >= 2e4 ? 1 / 0 : t;
      }
      let t6 = { decay: t4, inertia: t4, tween: tK, keyframes: tK, spring: t5 };
      function t9({
        autoplay: e = !0,
        delay: t = 0,
        driver: n = t3,
        keyframes: r,
        type: i = "keyframes",
        repeat: o = 0,
        repeatDelay: s = 0,
        repeatType: a = "loop",
        onPlay: l,
        onStop: u,
        onComplete: c,
        onUpdate: d,
        ...f
      }) {
        let h,
          p,
          m,
          v,
          g,
          y = 1,
          b = !1,
          P = () => {
            p = new Promise((e) => {
              h = e;
            });
          };
        P();
        let x = t6[i] || tK;
        x !== tK &&
          "number" != typeof r[0] &&
          ((v = tG([0, 100], r, { clamp: !1 })), (r = [0, 100]));
        let w = x({ ...f, keyframes: r });
        "mirror" === a &&
          (g = x({
            ...f,
            keyframes: [...r].reverse(),
            velocity: -(f.velocity || 0),
          }));
        let E = "idle",
          T = null,
          S = null,
          C = null;
        null === w.calculatedDuration && o && (w.calculatedDuration = t7(w));
        let { calculatedDuration: M } = w,
          A = 1 / 0,
          O = 1 / 0;
        null !== M && (O = (A = M + s) * (o + 1) - s);
        let k = 0,
          R = (e) => {
            if (null === S) return;
            y > 0 && (S = Math.min(S, e)),
              y < 0 && (S = Math.min(e - O / y, S));
            let n =
                (k = null !== T ? T : Math.round(e - S) * y) -
                t * (y >= 0 ? 1 : -1),
              i = y >= 0 ? n < 0 : n > O;
            (k = Math.max(n, 0)), "finished" === E && null === T && (k = O);
            let l = k,
              u = w;
            if (o) {
              let e = Math.min(k, O) / A,
                t = Math.floor(e),
                n = e % 1;
              !n && e >= 1 && (n = 1),
                1 === n && t--,
                (t = Math.min(t, o + 1)) % 2 &&
                  ("reverse" === a
                    ? ((n = 1 - n), s && (n -= s / A))
                    : "mirror" === a && (u = g)),
                (l = H(0, 1, n) * A);
            }
            let c = i ? { done: !1, value: r[0] } : u.next(l);
            v && (c.value = v(c.value));
            let { done: f } = c;
            i || null === M || (f = y >= 0 ? k >= O : k <= 0);
            let h = null === T && ("finished" === E || ("running" === E && f));
            return d && d(c.value), h && L(), c;
          },
          j = () => {
            m && m.stop(), (m = void 0);
          },
          D = () => {
            (E = "idle"), j(), h(), P(), (S = C = null);
          },
          L = () => {
            (E = "finished"), c && c(), j(), h();
          },
          V = () => {
            if (b) return;
            m || (m = n(R));
            let e = m.now();
            l && l(),
              null !== T ? (S = e - T) : (S && "finished" !== E) || (S = e),
              "finished" === E && P(),
              (C = S),
              (T = null),
              (E = "running"),
              m.start();
          };
        e && V();
        let _ = {
          then: (e, t) => p.then(e, t),
          get time() {
            return e9(k);
          },
          set time(newTime) {
            (k = newTime = e6(newTime)),
              null === T && m && 0 !== y
                ? (S = m.now() - newTime / y)
                : (T = newTime);
          },
          get duration() {
            return e9(
              null === w.calculatedDuration ? t7(w) : w.calculatedDuration
            );
          },
          get speed() {
            return y;
          },
          set speed(newSpeed) {
            if (newSpeed === y || !m) return;
            (y = newSpeed), (_.time = e9(k));
          },
          get state() {
            return E;
          },
          play: V,
          pause: () => {
            (E = "paused"), (T = k);
          },
          stop: () => {
            (b = !0), "idle" !== E && ((E = "idle"), u && u(), D());
          },
          cancel: () => {
            null !== C && R(C), D();
          },
          complete: () => {
            E = "finished";
          },
          sample: (e) => ((S = 0), R(e)),
        };
        return _;
      }
      let t8 =
          ((o = () => Object.hasOwnProperty.call(Element.prototype, "animate")),
          () => (void 0 === r && (r = o()), r)),
        ne = new Set([
          "opacity",
          "clipPath",
          "filter",
          "transform",
          "backgroundColor",
        ]),
        nt = (e, t) =>
          "spring" === t.type ||
          "backgroundColor" === e ||
          !(function e(t) {
            return !!(
              !t ||
              ("string" == typeof t && tn[t]) ||
              te(t) ||
              (Array.isArray(t) && t.every(e))
            );
          })(t.ease),
        nn = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
        nr = (e) => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === e ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10,
        }),
        ni = { type: "keyframes", duration: 0.8 },
        no = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        ns = (e, { keyframes: t }) =>
          t.length > 2
            ? ni
            : j.has(e)
            ? e.startsWith("scale")
              ? nr(t[1])
              : nn
            : no,
        na = (e, t) =>
          "zIndex" !== e &&
          !!(
            "number" == typeof t ||
            Array.isArray(t) ||
            ("string" == typeof t &&
              (tU.test(t) || "0" === t) &&
              !t.startsWith("url("))
          ),
        nl = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function nu(e) {
        let [t, n] = e.slice(0, -1).split("(");
        if ("drop-shadow" === t) return e;
        let [r] = n.match(Z) || [];
        if (!r) return e;
        let i = n.replace(r, ""),
          o = nl.has(t) ? 1 : 0;
        return r !== n && (o *= 100), t + "(" + o + i + ")";
      }
      let nc = /([a-z-]*)\(.*?\)/g,
        nd = {
          ...tU,
          getAnimatableNone: (e) => {
            let t = e.match(nc);
            return t ? t.map(nu).join(" ") : e;
          },
        },
        nf = {
          ...ei,
          color: tC,
          backgroundColor: tC,
          outlineColor: tC,
          fill: tC,
          stroke: tC,
          borderColor: tC,
          borderTopColor: tC,
          borderRightColor: tC,
          borderBottomColor: tC,
          borderLeftColor: tC,
          filter: nd,
          WebkitFilter: nd,
        },
        nh = (e) => nf[e];
      function np(e, t) {
        let n = nh(e);
        return (
          n !== nd && (n = tU),
          n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
        );
      }
      let nm = (e) => /^0[^.\s]+$/.test(e);
      function nv(e, t) {
        return e[t] || e.default || e;
      }
      let ng = { skipAnimations: !1 },
        ny =
          (e, t, n, r = {}) =>
          (i) => {
            let o = nv(r, e) || {},
              s = o.delay || r.delay || 0,
              { elapsed: a = 0 } = r;
            a -= e6(s);
            let l = (function (e, t, n, r) {
                let i, o;
                let s = na(t, n);
                i = Array.isArray(n) ? [...n] : [null, n];
                let a = void 0 !== r.from ? r.from : e.get(),
                  l = [];
                for (let e = 0; e < i.length; e++) {
                  var u;
                  null === i[e] && (i[e] = 0 === e ? a : i[e - 1]),
                    ("number" == typeof (u = i[e])
                      ? 0 === u
                      : null !== u
                      ? "none" === u || "0" === u || nm(u)
                      : void 0) && l.push(e),
                    "string" == typeof i[e] &&
                      "none" !== i[e] &&
                      "0" !== i[e] &&
                      (o = i[e]);
                }
                if (s && l.length && o)
                  for (let e = 0; e < l.length; e++) i[l[e]] = np(t, o);
                return i;
              })(t, e, n, o),
              u = l[0],
              c = l[l.length - 1],
              d = na(e, u),
              f = na(e, c);
            (0, e7.K)(
              d === f,
              `You are trying to animate ${e} from "${u}" to "${c}". ${u} is not an animatable value - to enable this animation set ${u} to a value animatable to ${c} via the \`style\` property.`
            );
            let h = {
              keyframes: l,
              velocity: t.getVelocity(),
              ease: "easeOut",
              ...o,
              delay: -a,
              onUpdate: (e) => {
                t.set(e), o.onUpdate && o.onUpdate(e);
              },
              onComplete: () => {
                i(), o.onComplete && o.onComplete();
              },
            };
            if (
              (!(function ({
                when: e,
                delay: t,
                delayChildren: n,
                staggerChildren: r,
                staggerDirection: i,
                repeat: o,
                repeatType: s,
                repeatDelay: a,
                from: l,
                elapsed: u,
                ...c
              }) {
                return !!Object.keys(c).length;
              })(o) && (h = { ...h, ...ns(e, h) }),
              h.duration && (h.duration = e6(h.duration)),
              h.repeatDelay && (h.repeatDelay = e6(h.repeatDelay)),
              !d || !f || e8.current || !1 === o.type || ng.skipAnimations)
            )
              return (function ({
                keyframes: e,
                delay: t,
                onUpdate: n,
                onComplete: r,
              }) {
                let i = () => (
                  n && n(e[e.length - 1]),
                  r && r(),
                  {
                    time: 0,
                    speed: 1,
                    duration: 0,
                    play: eX.Z,
                    pause: eX.Z,
                    stop: eX.Z,
                    then: (e) => (e(), Promise.resolve()),
                    cancel: eX.Z,
                    complete: eX.Z,
                  }
                );
                return t
                  ? t9({
                      keyframes: [0, 1],
                      duration: 0,
                      delay: t,
                      onComplete: i,
                    })
                  : i();
              })(e8.current ? { ...h, delay: 0 } : h);
            if (
              !r.isHandoff &&
              t.owner &&
              t.owner.current instanceof HTMLElement &&
              !t.owner.getProps().onUpdate
            ) {
              let n = (function (e, t, { onUpdate: n, onComplete: r, ...i }) {
                let o, s;
                if (
                  !(
                    t8() &&
                    ne.has(t) &&
                    !i.repeatDelay &&
                    "mirror" !== i.repeatType &&
                    0 !== i.damping &&
                    "inertia" !== i.type
                  )
                )
                  return !1;
                let a = !1,
                  l = !1,
                  u = () => {
                    s = new Promise((e) => {
                      o = e;
                    });
                  };
                u();
                let { keyframes: c, duration: d = 300, ease: f, times: h } = i;
                if (nt(t, i)) {
                  let e = t9({ ...i, repeat: 0, delay: 0 }),
                    t = { done: !1, value: c[0] },
                    n = [],
                    r = 0;
                  for (; !t.done && r < 2e4; )
                    (t = e.sample(r)), n.push(t.value), (r += 10);
                  (h = void 0), (c = n), (d = r - 10), (f = "linear");
                }
                let p = (function (
                    e,
                    t,
                    n,
                    {
                      delay: r = 0,
                      duration: i,
                      repeat: o = 0,
                      repeatType: s = "loop",
                      ease: a,
                      times: l,
                    } = {}
                  ) {
                    let u = { [t]: n };
                    l && (u.offset = l);
                    let c = (function e(t) {
                      if (t)
                        return te(t)
                          ? tt(t)
                          : Array.isArray(t)
                          ? t.map(e)
                          : tn[t];
                    })(a);
                    return (
                      Array.isArray(c) && (u.easing = c),
                      e.animate(u, {
                        delay: r,
                        duration: i,
                        easing: Array.isArray(c) ? "linear" : c,
                        fill: "both",
                        iterations: o + 1,
                        direction: "reverse" === s ? "alternate" : "normal",
                      })
                    );
                  })(e.owner.current, t, c, {
                    ...i,
                    duration: d,
                    ease: f,
                    times: h,
                  }),
                  m = () => {
                    (l = !1), p.cancel();
                  },
                  v = () => {
                    (l = !0), eO.Wi.update(m), o(), u();
                  };
                return (
                  (p.onfinish = () => {
                    l ||
                      (e.set(
                        (function (e, { repeat: t, repeatType: n = "loop" }) {
                          let r =
                            t && "loop" !== n && t % 2 == 1 ? 0 : e.length - 1;
                          return e[r];
                        })(c, i)
                      ),
                      r && r(),
                      v());
                  }),
                  {
                    then: (e, t) => s.then(e, t),
                    attachTimeline: (e) => (
                      (p.timeline = e), (p.onfinish = null), eX.Z
                    ),
                    get time() {
                      return e9(p.currentTime || 0);
                    },
                    set time(newTime) {
                      p.currentTime = e6(newTime);
                    },
                    get speed() {
                      return p.playbackRate;
                    },
                    set speed(newSpeed) {
                      p.playbackRate = newSpeed;
                    },
                    get duration() {
                      return e9(d);
                    },
                    play: () => {
                      a || (p.play(), (0, eO.Pn)(m));
                    },
                    pause: () => p.pause(),
                    stop: () => {
                      if (((a = !0), "idle" === p.playState)) return;
                      let { currentTime: t } = p;
                      if (t) {
                        let n = t9({ ...i, autoplay: !1 });
                        e.setWithVelocity(
                          n.sample(t - 10).value,
                          n.sample(t).value,
                          10
                        );
                      }
                      v();
                    },
                    complete: () => {
                      l || p.finish();
                    },
                    cancel: v,
                  }
                );
              })(t, e, h);
              if (n) return n;
            }
            return t9(h);
          };
      function nb(e) {
        return !!(L(e) && e.add);
      }
      let nP = (e) => /^\-?\d*\.?\d+$/.test(e);
      function nx(e, t) {
        -1 === e.indexOf(t) && e.push(t);
      }
      function nw(e, t) {
        let n = e.indexOf(t);
        n > -1 && e.splice(n, 1);
      }
      class nE {
        constructor() {
          this.subscriptions = [];
        }
        add(e) {
          return nx(this.subscriptions, e), () => nw(this.subscriptions, e);
        }
        notify(e, t, n) {
          let r = this.subscriptions.length;
          if (r) {
            if (1 === r) this.subscriptions[0](e, t, n);
            else
              for (let i = 0; i < r; i++) {
                let r = this.subscriptions[i];
                r && r(e, t, n);
              }
          }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      }
      let nT = (e) => !isNaN(parseFloat(e)),
        nS = { current: void 0 };
      class nC {
        constructor(e, t = {}) {
          (this.version = "10.18.0"),
            (this.timeDelta = 0),
            (this.lastUpdated = 0),
            (this.canTrackVelocity = !1),
            (this.events = {}),
            (this.updateAndNotify = (e, t = !0) => {
              (this.prev = this.current), (this.current = e);
              let { delta: n, timestamp: r } = eO.frameData;
              this.lastUpdated !== r &&
                ((this.timeDelta = n),
                (this.lastUpdated = r),
                eO.Wi.postRender(this.scheduleVelocityCheck)),
                this.prev !== this.current &&
                  this.events.change &&
                  this.events.change.notify(this.current),
                this.events.velocityChange &&
                  this.events.velocityChange.notify(this.getVelocity()),
                t &&
                  this.events.renderRequest &&
                  this.events.renderRequest.notify(this.current);
            }),
            (this.scheduleVelocityCheck = () =>
              eO.Wi.postRender(this.velocityCheck)),
            (this.velocityCheck = ({ timestamp: e }) => {
              e !== this.lastUpdated &&
                ((this.prev = this.current),
                this.events.velocityChange &&
                  this.events.velocityChange.notify(this.getVelocity()));
            }),
            (this.hasAnimated = !1),
            (this.prev = this.current = e),
            (this.canTrackVelocity = nT(this.current)),
            (this.owner = t.owner);
        }
        onChange(e) {
          return this.on("change", e);
        }
        on(e, t) {
          this.events[e] || (this.events[e] = new nE());
          let n = this.events[e].add(t);
          return "change" === e
            ? () => {
                n(),
                  eO.Wi.read(() => {
                    this.events.change.getSize() || this.stop();
                  });
              }
            : n;
        }
        clearListeners() {
          for (let e in this.events) this.events[e].clear();
        }
        attach(e, t) {
          (this.passiveEffect = e), (this.stopPassiveEffect = t);
        }
        set(e, t = !0) {
          t && this.passiveEffect
            ? this.passiveEffect(e, this.updateAndNotify)
            : this.updateAndNotify(e, t);
        }
        setWithVelocity(e, t, n) {
          this.set(t), (this.prev = e), (this.timeDelta = n);
        }
        jump(e) {
          this.updateAndNotify(e),
            (this.prev = e),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
        get() {
          return nS.current && nS.current.push(this), this.current;
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          var e, t;
          return this.canTrackVelocity
            ? ((e = parseFloat(this.current) - parseFloat(this.prev)),
              (t = this.timeDelta) ? (1e3 / t) * e : 0)
            : 0;
        }
        start(e) {
          return (
            this.stop(),
            new Promise((t) => {
              (this.hasAnimated = !0),
                (this.animation = e(t)),
                this.events.animationStart &&
                  this.events.animationStart.notify();
            }).then(() => {
              this.events.animationComplete &&
                this.events.animationComplete.notify(),
                this.clearAnimation();
            })
          );
        }
        stop() {
          this.animation &&
            (this.animation.stop(),
            this.events.animationCancel &&
              this.events.animationCancel.notify()),
            this.clearAnimation();
        }
        isAnimating() {
          return !!this.animation;
        }
        clearAnimation() {
          delete this.animation;
        }
        destroy() {
          this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
      }
      function nM(e, t) {
        return new nC(e, t);
      }
      let nA = (e) => (t) => t.test(e),
        nO = [
          U,
          J,
          Q,
          K,
          et,
          ee,
          { test: (e) => "auto" === e, parse: (e) => e },
        ],
        nk = (e) => nO.find(nA(e)),
        nR = [...nO, tC, tU],
        nj = (e) => nR.find(nA(e));
      function nD(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
        let {
            transition: o = e.getDefaultTransition(),
            transitionEnd: s,
            ...a
          } = e.makeTargetAnimatable(t),
          l = e.getValue("willChange");
        r && (o = r);
        let u = [],
          c = i && e.animationState && e.animationState.getState()[i];
        for (let t in a) {
          let r = e.getValue(t),
            i = a[t];
          if (
            !r ||
            void 0 === i ||
            (c &&
              (function ({ protectedKeys: e, needsAnimating: t }, n) {
                let r = e.hasOwnProperty(n) && !0 !== t[n];
                return (t[n] = !1), r;
              })(c, t))
          )
            continue;
          let s = { delay: n, elapsed: 0, ...nv(o || {}, t) };
          if (window.HandoffAppearAnimations) {
            let n = e.getProps()[h];
            if (n) {
              let e = window.HandoffAppearAnimations(n, t, r, eO.Wi);
              null !== e && ((s.elapsed = e), (s.isHandoff = !0));
            }
          }
          let d =
            !s.isHandoff &&
            !(function (e, t) {
              let n = e.get();
              if (!Array.isArray(t)) return n !== t;
              for (let e = 0; e < t.length; e++) if (t[e] !== n) return !0;
            })(r, i);
          if (
            ("spring" === s.type && (r.getVelocity() || s.velocity) && (d = !1),
            r.animation && (d = !1),
            d)
          )
            continue;
          r.start(
            ny(t, r, i, e.shouldReduceMotion && j.has(t) ? { type: !1 } : s)
          );
          let f = r.animation;
          nb(l) && (l.add(t), f.then(() => l.remove(t))), u.push(f);
        }
        return (
          s &&
            Promise.all(u).then(() => {
              s &&
                (function (e, t) {
                  let n = e3(e, t),
                    {
                      transitionEnd: r = {},
                      transition: i = {},
                      ...o
                    } = n ? e.makeTargetAnimatable(n, !1) : {};
                  for (let t in (o = { ...o, ...r })) {
                    let n = eC(o[t]);
                    e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, nM(n));
                  }
                })(e, s);
            }),
          u
        );
      }
      function nL(e, t, n = {}) {
        let r = e3(e, t, n.custom),
          { transition: i = e.getDefaultTransition() || {} } = r || {};
        n.transitionOverride && (i = n.transitionOverride);
        let o = r ? () => Promise.all(nD(e, r, n)) : () => Promise.resolve(),
          s =
            e.variantChildren && e.variantChildren.size
              ? (r = 0) => {
                  let {
                    delayChildren: o = 0,
                    staggerChildren: s,
                    staggerDirection: a,
                  } = i;
                  return (function (e, t, n = 0, r = 0, i = 1, o) {
                    let s = [],
                      a = (e.variantChildren.size - 1) * r,
                      l = 1 === i ? (e = 0) => e * r : (e = 0) => a - e * r;
                    return (
                      Array.from(e.variantChildren)
                        .sort(nV)
                        .forEach((e, r) => {
                          e.notify("AnimationStart", t),
                            s.push(
                              nL(e, t, { ...o, delay: n + l(r) }).then(() =>
                                e.notify("AnimationComplete", t)
                              )
                            );
                        }),
                      Promise.all(s)
                    );
                  })(e, t, o + r, s, a, n);
                }
              : () => Promise.resolve(),
          { when: a } = i;
        if (!a) return Promise.all([o(), s(n.delay)]);
        {
          let [e, t] = "beforeChildren" === a ? [o, s] : [s, o];
          return e().then(() => t());
        }
      }
      function nV(e, t) {
        return e.sortNodePosition(t);
      }
      let n_ = [...g].reverse(),
        nF = g.length;
      function nI(e = !1) {
        return {
          isActive: e,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      class nN extends ez {
        constructor(e) {
          super(e),
            e.animationState ||
              (e.animationState = (function (e) {
                let t = (t) =>
                    Promise.all(
                      t.map(({ animation: t, options: n }) =>
                        (function (e, t, n = {}) {
                          let r;
                          if ((e.notify("AnimationStart", t), Array.isArray(t)))
                            r = Promise.all(t.map((t) => nL(e, t, n)));
                          else if ("string" == typeof t) r = nL(e, t, n);
                          else {
                            let i =
                              "function" == typeof t ? e3(e, t, n.custom) : t;
                            r = Promise.all(nD(e, i, n));
                          }
                          return r.then(() => e.notify("AnimationComplete", t));
                        })(e, t, n)
                      )
                    ),
                  n = {
                    animate: nI(!0),
                    whileInView: nI(),
                    whileHover: nI(),
                    whileTap: nI(),
                    whileDrag: nI(),
                    whileFocus: nI(),
                    exit: nI(),
                  },
                  r = !0,
                  i = (t, n) => {
                    let r = e3(e, n);
                    if (r) {
                      let { transition: e, transitionEnd: n, ...i } = r;
                      t = { ...t, ...i, ...n };
                    }
                    return t;
                  };
                function o(o, s) {
                  let a = e.getProps(),
                    l = e.getVariantContext(!0) || {},
                    u = [],
                    c = new Set(),
                    d = {},
                    f = 1 / 0;
                  for (let t = 0; t < nF; t++) {
                    var h;
                    let p = n_[t],
                      g = n[p],
                      y = void 0 !== a[p] ? a[p] : l[p],
                      b = m(y),
                      P = p === s ? g.isActive : null;
                    !1 === P && (f = t);
                    let x = y === l[p] && y !== a[p] && b;
                    if (
                      (x && r && e.manuallyAnimateOnMount && (x = !1),
                      (g.protectedKeys = { ...d }),
                      (!g.isActive && null === P) ||
                        (!y && !g.prevProp) ||
                        v(y) ||
                        "boolean" == typeof y)
                    )
                      continue;
                    let w =
                        ((h = g.prevProp),
                        ("string" == typeof y
                          ? y !== h
                          : !!Array.isArray(y) && !e4(y, h)) ||
                          (p === s && g.isActive && !x && b) ||
                          (t > f && b)),
                      E = !1,
                      T = Array.isArray(y) ? y : [y],
                      S = T.reduce(i, {});
                    !1 === P && (S = {});
                    let { prevResolvedValues: C = {} } = g,
                      M = { ...C, ...S },
                      A = (e) => {
                        (w = !0),
                          c.has(e) && ((E = !0), c.delete(e)),
                          (g.needsAnimating[e] = !0);
                      };
                    for (let e in M) {
                      let t = S[e],
                        n = C[e];
                      if (!d.hasOwnProperty(e))
                        (eT(t) && eT(n) ? e4(t, n) : t === n)
                          ? void 0 !== t && c.has(e)
                            ? A(e)
                            : (g.protectedKeys[e] = !0)
                          : void 0 !== t
                          ? A(e)
                          : c.add(e);
                    }
                    (g.prevProp = y),
                      (g.prevResolvedValues = S),
                      g.isActive && (d = { ...d, ...S }),
                      r && e.blockInitialAnimation && (w = !1),
                      w &&
                        (!x || E) &&
                        u.push(
                          ...T.map((e) => ({
                            animation: e,
                            options: { type: p, ...o },
                          }))
                        );
                  }
                  if (c.size) {
                    let t = {};
                    c.forEach((n) => {
                      let r = e.getBaseTarget(n);
                      void 0 !== r && (t[n] = r);
                    }),
                      u.push({ animation: t });
                  }
                  let p = !!u.length;
                  return (
                    r &&
                      (!1 === a.initial || a.initial === a.animate) &&
                      !e.manuallyAnimateOnMount &&
                      (p = !1),
                    (r = !1),
                    p ? t(u) : Promise.resolve()
                  );
                }
                return {
                  animateChanges: o,
                  setActive: function (t, r, i) {
                    var s;
                    if (n[t].isActive === r) return Promise.resolve();
                    null === (s = e.variantChildren) ||
                      void 0 === s ||
                      s.forEach((e) => {
                        var n;
                        return null === (n = e.animationState) || void 0 === n
                          ? void 0
                          : n.setActive(t, r);
                      }),
                      (n[t].isActive = r);
                    let a = o(i, t);
                    for (let e in n) n[e].protectedKeys = {};
                    return a;
                  },
                  setAnimateFunction: function (n) {
                    t = n(e);
                  },
                  getState: () => n,
                };
              })(e));
        }
        updateAnimationControlsSubscription() {
          let { animate: e } = this.node.getProps();
          this.unmount(), v(e) && (this.unmount = e.subscribe(this.node));
        }
        mount() {
          this.updateAnimationControlsSubscription();
        }
        update() {
          let { animate: e } = this.node.getProps(),
            { animate: t } = this.node.prevProps || {};
          e !== t && this.updateAnimationControlsSubscription();
        }
        unmount() {}
      }
      let nB = 0;
      class nH extends ez {
        constructor() {
          super(...arguments), (this.id = nB++);
        }
        update() {
          if (!this.node.presenceContext) return;
          let {
              isPresent: e,
              onExitComplete: t,
              custom: n,
            } = this.node.presenceContext,
            { isPresent: r } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || e === r) return;
          let i = this.node.animationState.setActive("exit", !e, {
            custom: null != n ? n : this.node.getProps().custom,
          });
          t && !e && i.then(() => t(this.id));
        }
        mount() {
          let { register: e } = this.node.presenceContext || {};
          e && (this.unmount = e(this.id));
        }
        unmount() {}
      }
      let nU = (e, t) => Math.abs(e - t);
      class nW {
        constructor(
          e,
          t,
          {
            transformPagePoint: n,
            contextWindow: r,
            dragSnapToOrigin: i = !1,
          } = {}
        ) {
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.contextWindow = window),
            (this.updatePoint = () => {
              var e, t;
              if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
              let n = nZ(this.lastMoveEventInfo, this.history),
                r = null !== this.startEvent,
                i =
                  ((e = n.offset),
                  (t = { x: 0, y: 0 }),
                  Math.sqrt(nU(e.x, t.x) ** 2 + nU(e.y, t.y) ** 2) >= 3);
              if (!r && !i) return;
              let { point: o } = n,
                { timestamp: s } = eO.frameData;
              this.history.push({ ...o, timestamp: s });
              let { onStart: a, onMove: l } = this.handlers;
              r ||
                (a && a(this.lastMoveEvent, n),
                (this.startEvent = this.lastMoveEvent)),
                l && l(this.lastMoveEvent, n);
            }),
            (this.handlePointerMove = (e, t) => {
              (this.lastMoveEvent = e),
                (this.lastMoveEventInfo = nz(t, this.transformPagePoint)),
                eO.Wi.update(this.updatePoint, !0);
            }),
            (this.handlePointerUp = (e, t) => {
              this.end();
              let {
                onEnd: n,
                onSessionEnd: r,
                resumeAnimation: i,
              } = this.handlers;
              if (
                (this.dragSnapToOrigin && i && i(),
                !(this.lastMoveEvent && this.lastMoveEventInfo))
              )
                return;
              let o = nZ(
                "pointercancel" === e.type
                  ? this.lastMoveEventInfo
                  : nz(t, this.transformPagePoint),
                this.history
              );
              this.startEvent && n && n(e, o), r && r(e, o);
            }),
            !eD(e))
          )
            return;
          (this.dragSnapToOrigin = i),
            (this.handlers = t),
            (this.transformPagePoint = n),
            (this.contextWindow = r || window);
          let o = nz(eL(e), this.transformPagePoint),
            { point: s } = o,
            { timestamp: a } = eO.frameData;
          this.history = [{ ...s, timestamp: a }];
          let { onSessionStart: l } = t;
          l && l(e, nZ(o, this.history)),
            (this.removeListeners = eI(
              e_(this.contextWindow, "pointermove", this.handlePointerMove),
              e_(this.contextWindow, "pointerup", this.handlePointerUp),
              e_(this.contextWindow, "pointercancel", this.handlePointerUp)
            ));
        }
        updateHandlers(e) {
          this.handlers = e;
        }
        end() {
          this.removeListeners && this.removeListeners(),
            (0, eO.Pn)(this.updatePoint);
        }
      }
      function nz(e, t) {
        return t ? { point: t(e.point) } : e;
      }
      function n$(e, t) {
        return { x: e.x - t.x, y: e.y - t.y };
      }
      function nZ({ point: e }, t) {
        return {
          point: e,
          delta: n$(e, nY(t)),
          offset: n$(e, t[0]),
          velocity: (function (e, t) {
            if (e.length < 2) return { x: 0, y: 0 };
            let n = e.length - 1,
              r = null,
              i = nY(e);
            for (
              ;
              n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > e6(0.1)));

            )
              n--;
            if (!r) return { x: 0, y: 0 };
            let o = e9(i.timestamp - r.timestamp);
            if (0 === o) return { x: 0, y: 0 };
            let s = { x: (i.x - r.x) / o, y: (i.y - r.y) / o };
            return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
          })(t, 0),
        };
      }
      function nY(e) {
        return e[e.length - 1];
      }
      function nq(e) {
        return e.max - e.min;
      }
      function nX(e, t = 0, n = 0.01) {
        return Math.abs(e - t) <= n;
      }
      function nG(e, t, n, r = 0.5) {
        (e.origin = r),
          (e.originPoint = tM(t.min, t.max, e.origin)),
          (e.scale = nq(n) / nq(t)),
          (nX(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
          (e.translate = tM(n.min, n.max, e.origin) - e.originPoint),
          (nX(e.translate) || isNaN(e.translate)) && (e.translate = 0);
      }
      function nK(e, t, n, r) {
        nG(e.x, t.x, n.x, r ? r.originX : void 0),
          nG(e.y, t.y, n.y, r ? r.originY : void 0);
      }
      function nQ(e, t, n) {
        (e.min = n.min + t.min), (e.max = e.min + nq(t));
      }
      function nJ(e, t, n) {
        (e.min = t.min - n.min), (e.max = e.min + nq(t));
      }
      function n0(e, t, n) {
        nJ(e.x, t.x, n.x), nJ(e.y, t.y, n.y);
      }
      function n1(e, t, n) {
        return {
          min: void 0 !== t ? e.min + t : void 0,
          max: void 0 !== n ? e.max + n - (e.max - e.min) : void 0,
        };
      }
      function n2(e, t) {
        let n = t.min - e.min,
          r = t.max - e.max;
        return (
          t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r }
        );
      }
      function n5(e, t, n) {
        return { min: n4(e, t), max: n4(e, n) };
      }
      function n4(e, t) {
        return "number" == typeof e ? e : e[t] || 0;
      }
      let n3 = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
        n7 = () => ({ x: n3(), y: n3() }),
        n6 = () => ({ min: 0, max: 0 }),
        n9 = () => ({ x: n6(), y: n6() });
      function n8(e) {
        return [e("x"), e("y")];
      }
      function re({ top: e, left: t, right: n, bottom: r }) {
        return { x: { min: t, max: n }, y: { min: e, max: r } };
      }
      function rt(e) {
        return void 0 === e || 1 === e;
      }
      function rn({ scale: e, scaleX: t, scaleY: n }) {
        return !rt(e) || !rt(t) || !rt(n);
      }
      function rr(e) {
        return rn(e) || ri(e) || e.z || e.rotate || e.rotateX || e.rotateY;
      }
      function ri(e) {
        var t, n;
        return ((t = e.x) && "0%" !== t) || ((n = e.y) && "0%" !== n);
      }
      function ro(e, t, n, r, i) {
        return void 0 !== i && (e = r + i * (e - r)), r + n * (e - r) + t;
      }
      function rs(e, t = 0, n = 1, r, i) {
        (e.min = ro(e.min, t, n, r, i)), (e.max = ro(e.max, t, n, r, i));
      }
      function ra(e, { x: t, y: n }) {
        rs(e.x, t.translate, t.scale, t.originPoint),
          rs(e.y, n.translate, n.scale, n.originPoint);
      }
      function rl(e) {
        return Number.isInteger(e)
          ? e
          : e > 1.0000000000001 || e < 0.999999999999
          ? e
          : 1;
      }
      function ru(e, t) {
        (e.min = e.min + t), (e.max = e.max + t);
      }
      function rc(e, t, [n, r, i]) {
        let o = void 0 !== t[i] ? t[i] : 0.5,
          s = tM(e.min, e.max, o);
        rs(e, t[n], t[r], s, t.scale);
      }
      let rd = ["x", "scaleX", "originX"],
        rf = ["y", "scaleY", "originY"];
      function rh(e, t) {
        rc(e.x, t, rd), rc(e.y, t, rf);
      }
      function rp(e, t) {
        return re(
          (function (e, t) {
            if (!t) return e;
            let n = t({ x: e.left, y: e.top }),
              r = t({ x: e.right, y: e.bottom });
            return { top: n.y, left: n.x, bottom: r.y, right: r.x };
          })(e.getBoundingClientRect(), t)
        );
      }
      let rm = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
        rv = new WeakMap();
      class rg {
        constructor(e) {
          (this.openGlobalLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = n9()),
            (this.visualElement = e);
        }
        start(e, { snapToCursor: t = !1 } = {}) {
          let { presenceContext: n } = this.visualElement;
          if (n && !1 === n.isPresent) return;
          let { dragSnapToOrigin: r } = this.getProps();
          this.panSession = new nW(
            e,
            {
              onSessionStart: (e) => {
                let { dragSnapToOrigin: n } = this.getProps();
                n ? this.pauseAnimation() : this.stopAnimation(),
                  t && this.snapToCursor(eL(e, "page").point);
              },
              onStart: (e, t) => {
                let {
                  drag: n,
                  dragPropagation: r,
                  onDragStart: i,
                } = this.getProps();
                if (
                  n &&
                  !r &&
                  (this.openGlobalLock && this.openGlobalLock(),
                  (this.openGlobalLock = eU(n)),
                  !this.openGlobalLock)
                )
                  return;
                (this.isDragging = !0),
                  (this.currentDirection = null),
                  this.resolveConstraints(),
                  this.visualElement.projection &&
                    ((this.visualElement.projection.isAnimationBlocked = !0),
                    (this.visualElement.projection.target = void 0)),
                  n8((e) => {
                    let t = this.getAxisMotionValue(e).get() || 0;
                    if (Q.test(t)) {
                      let { projection: n } = this.visualElement;
                      if (n && n.layout) {
                        let r = n.layout.layoutBox[e];
                        if (r) {
                          let e = nq(r);
                          t = (parseFloat(t) / 100) * e;
                        }
                      }
                    }
                    this.originPoint[e] = t;
                  }),
                  i && eO.Wi.update(() => i(e, t), !1, !0);
                let { animationState: o } = this.visualElement;
                o && o.setActive("whileDrag", !0);
              },
              onMove: (e, t) => {
                let {
                  dragPropagation: n,
                  dragDirectionLock: r,
                  onDirectionLock: i,
                  onDrag: o,
                } = this.getProps();
                if (!n && !this.openGlobalLock) return;
                let { offset: s } = t;
                if (r && null === this.currentDirection) {
                  (this.currentDirection = (function (e, t = 10) {
                    let n = null;
                    return (
                      Math.abs(e.y) > t
                        ? (n = "y")
                        : Math.abs(e.x) > t && (n = "x"),
                      n
                    );
                  })(s)),
                    null !== this.currentDirection &&
                      i &&
                      i(this.currentDirection);
                  return;
                }
                this.updateAxis("x", t.point, s),
                  this.updateAxis("y", t.point, s),
                  this.visualElement.render(),
                  o && o(e, t);
              },
              onSessionEnd: (e, t) => this.stop(e, t),
              resumeAnimation: () =>
                n8((e) => {
                  var t;
                  return (
                    "paused" === this.getAnimationState(e) &&
                    (null === (t = this.getAxisMotionValue(e).animation) ||
                    void 0 === t
                      ? void 0
                      : t.play())
                  );
                }),
            },
            {
              transformPagePoint: this.visualElement.getTransformPagePoint(),
              dragSnapToOrigin: r,
              contextWindow: rm(this.visualElement),
            }
          );
        }
        stop(e, t) {
          let n = this.isDragging;
          if ((this.cancel(), !n)) return;
          let { velocity: r } = t;
          this.startAnimation(r);
          let { onDragEnd: i } = this.getProps();
          i && eO.Wi.update(() => i(e, t));
        }
        cancel() {
          this.isDragging = !1;
          let { projection: e, animationState: t } = this.visualElement;
          e && (e.isAnimationBlocked = !1),
            this.panSession && this.panSession.end(),
            (this.panSession = void 0);
          let { dragPropagation: n } = this.getProps();
          !n &&
            this.openGlobalLock &&
            (this.openGlobalLock(), (this.openGlobalLock = null)),
            t && t.setActive("whileDrag", !1);
        }
        updateAxis(e, t, n) {
          let { drag: r } = this.getProps();
          if (!n || !ry(e, r, this.currentDirection)) return;
          let i = this.getAxisMotionValue(e),
            o = this.originPoint[e] + n[e];
          this.constraints &&
            this.constraints[e] &&
            (o = (function (e, { min: t, max: n }, r) {
              return (
                void 0 !== t && e < t
                  ? (e = r ? tM(t, e, r.min) : Math.max(e, t))
                  : void 0 !== n &&
                    e > n &&
                    (e = r ? tM(n, e, r.max) : Math.min(e, n)),
                e
              );
            })(o, this.constraints[e], this.elastic[e])),
            i.set(o);
        }
        resolveConstraints() {
          var e;
          let { dragConstraints: t, dragElastic: n } = this.getProps(),
            r =
              this.visualElement.projection &&
              !this.visualElement.projection.layout
                ? this.visualElement.projection.measure(!1)
                : null === (e = this.visualElement.projection) || void 0 === e
                ? void 0
                : e.layout,
            i = this.constraints;
          t && p(t)
            ? this.constraints ||
              (this.constraints = this.resolveRefConstraints())
            : t && r
            ? (this.constraints = (function (
                e,
                { top: t, left: n, bottom: r, right: i }
              ) {
                return { x: n1(e.x, n, i), y: n1(e.y, t, r) };
              })(r.layoutBox, t))
            : (this.constraints = !1),
            (this.elastic = (function (e = 0.35) {
              return (
                !1 === e ? (e = 0) : !0 === e && (e = 0.35),
                { x: n5(e, "left", "right"), y: n5(e, "top", "bottom") }
              );
            })(n)),
            i !== this.constraints &&
              r &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              n8((e) => {
                this.getAxisMotionValue(e) &&
                  (this.constraints[e] = (function (e, t) {
                    let n = {};
                    return (
                      void 0 !== t.min && (n.min = t.min - e.min),
                      void 0 !== t.max && (n.max = t.max - e.min),
                      n
                    );
                  })(r.layoutBox[e], this.constraints[e]));
              });
        }
        resolveRefConstraints() {
          var e;
          let { dragConstraints: t, onMeasureDragConstraints: n } =
            this.getProps();
          if (!t || !p(t)) return !1;
          let r = t.current;
          (0, e7.k)(
            null !== r,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
          );
          let { projection: i } = this.visualElement;
          if (!i || !i.layout) return !1;
          let o = (function (e, t, n) {
              let r = rp(e, n),
                { scroll: i } = t;
              return i && (ru(r.x, i.offset.x), ru(r.y, i.offset.y)), r;
            })(r, i.root, this.visualElement.getTransformPagePoint()),
            s = { x: n2((e = i.layout.layoutBox).x, o.x), y: n2(e.y, o.y) };
          if (n) {
            let e = n(
              (function ({ x: e, y: t }) {
                return { top: t.min, right: e.max, bottom: t.max, left: e.min };
              })(s)
            );
            (this.hasMutatedConstraints = !!e), e && (s = re(e));
          }
          return s;
        }
        startAnimation(e) {
          let {
              drag: t,
              dragMomentum: n,
              dragElastic: r,
              dragTransition: i,
              dragSnapToOrigin: o,
              onDragTransitionEnd: s,
            } = this.getProps(),
            a = this.constraints || {};
          return Promise.all(
            n8((s) => {
              if (!ry(s, t, this.currentDirection)) return;
              let l = (a && a[s]) || {};
              o && (l = { min: 0, max: 0 });
              let u = {
                type: "inertia",
                velocity: n ? e[s] : 0,
                bounceStiffness: r ? 200 : 1e6,
                bounceDamping: r ? 40 : 1e7,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...i,
                ...l,
              };
              return this.startAxisValueAnimation(s, u);
            })
          ).then(s);
        }
        startAxisValueAnimation(e, t) {
          let n = this.getAxisMotionValue(e);
          return n.start(ny(e, n, 0, t));
        }
        stopAnimation() {
          n8((e) => this.getAxisMotionValue(e).stop());
        }
        pauseAnimation() {
          n8((e) => {
            var t;
            return null === (t = this.getAxisMotionValue(e).animation) ||
              void 0 === t
              ? void 0
              : t.pause();
          });
        }
        getAnimationState(e) {
          var t;
          return null === (t = this.getAxisMotionValue(e).animation) ||
            void 0 === t
            ? void 0
            : t.state;
        }
        getAxisMotionValue(e) {
          let t = "_drag" + e.toUpperCase(),
            n = this.visualElement.getProps();
          return (
            n[t] ||
            this.visualElement.getValue(
              e,
              (n.initial ? n.initial[e] : void 0) || 0
            )
          );
        }
        snapToCursor(e) {
          n8((t) => {
            let { drag: n } = this.getProps();
            if (!ry(t, n, this.currentDirection)) return;
            let { projection: r } = this.visualElement,
              i = this.getAxisMotionValue(t);
            if (r && r.layout) {
              let { min: n, max: o } = r.layout.layoutBox[t];
              i.set(e[t] - tM(n, o, 0.5));
            }
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          let { drag: e, dragConstraints: t } = this.getProps(),
            { projection: n } = this.visualElement;
          if (!p(t) || !n || !this.constraints) return;
          this.stopAnimation();
          let r = { x: 0, y: 0 };
          n8((e) => {
            let t = this.getAxisMotionValue(e);
            if (t) {
              let n = t.get();
              r[e] = (function (e, t) {
                let n = 0.5,
                  r = nq(e),
                  i = nq(t);
                return (
                  i > r
                    ? (n = tq(t.min, t.max - r, e.min))
                    : r > i && (n = tq(e.min, e.max - i, t.min)),
                  H(0, 1, n)
                );
              })({ min: n, max: n }, this.constraints[e]);
            }
          });
          let { transformTemplate: i } = this.visualElement.getProps();
          (this.visualElement.current.style.transform = i ? i({}, "") : "none"),
            n.root && n.root.updateScroll(),
            n.updateLayout(),
            this.resolveConstraints(),
            n8((t) => {
              if (!ry(t, e, null)) return;
              let n = this.getAxisMotionValue(t),
                { min: i, max: o } = this.constraints[t];
              n.set(tM(i, o, r[t]));
            });
        }
        addListeners() {
          if (!this.visualElement.current) return;
          rv.set(this.visualElement, this);
          let e = e_(this.visualElement.current, "pointerdown", (e) => {
              let { drag: t, dragListener: n = !0 } = this.getProps();
              t && n && this.start(e);
            }),
            t = () => {
              let { dragConstraints: e } = this.getProps();
              p(e) && (this.constraints = this.resolveRefConstraints());
            },
            { projection: n } = this.visualElement,
            r = n.addEventListener("measure", t);
          n && !n.layout && (n.root && n.root.updateScroll(), n.updateLayout()),
            t();
          let i = ej(window, "resize", () =>
              this.scalePositionWithinConstraints()
            ),
            o = n.addEventListener(
              "didUpdate",
              ({ delta: e, hasLayoutChanged: t }) => {
                this.isDragging &&
                  t &&
                  (n8((t) => {
                    let n = this.getAxisMotionValue(t);
                    n &&
                      ((this.originPoint[t] += e[t].translate),
                      n.set(n.get() + e[t].translate));
                  }),
                  this.visualElement.render());
              }
            );
          return () => {
            i(), e(), r(), o && o();
          };
        }
        getProps() {
          let e = this.visualElement.getProps(),
            {
              drag: t = !1,
              dragDirectionLock: n = !1,
              dragPropagation: r = !1,
              dragConstraints: i = !1,
              dragElastic: o = 0.35,
              dragMomentum: s = !0,
            } = e;
          return {
            ...e,
            drag: t,
            dragDirectionLock: n,
            dragPropagation: r,
            dragConstraints: i,
            dragElastic: o,
            dragMomentum: s,
          };
        }
      }
      function ry(e, t, n) {
        return (!0 === t || t === e) && (null === n || n === e);
      }
      class rb extends ez {
        constructor(e) {
          super(e),
            (this.removeGroupControls = eX.Z),
            (this.removeListeners = eX.Z),
            (this.controls = new rg(e));
        }
        mount() {
          let { dragControls: e } = this.node.getProps();
          e && (this.removeGroupControls = e.subscribe(this.controls)),
            (this.removeListeners = this.controls.addListeners() || eX.Z);
        }
        unmount() {
          this.removeGroupControls(), this.removeListeners();
        }
      }
      let rP = (e) => (t, n) => {
        e && eO.Wi.update(() => e(t, n));
      };
      class rx extends ez {
        constructor() {
          super(...arguments), (this.removePointerDownListener = eX.Z);
        }
        onPointerDown(e) {
          this.session = new nW(e, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: rm(this.node),
          });
        }
        createPanHandlers() {
          let {
            onPanSessionStart: e,
            onPanStart: t,
            onPan: n,
            onPanEnd: r,
          } = this.node.getProps();
          return {
            onSessionStart: rP(e),
            onStart: rP(t),
            onMove: n,
            onEnd: (e, t) => {
              delete this.session, r && eO.Wi.update(() => r(e, t));
            },
          };
        }
        mount() {
          this.removePointerDownListener = e_(
            this.node.current,
            "pointerdown",
            (e) => this.onPointerDown(e)
          );
        }
        update() {
          this.session && this.session.updateHandlers(this.createPanHandlers());
        }
        unmount() {
          this.removePointerDownListener(), this.session && this.session.end();
        }
      }
      let rw = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      function rE(e, t) {
        return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
      }
      let rT = {
        correct: (e, t) => {
          if (!t.target) return e;
          if ("string" == typeof e) {
            if (!J.test(e)) return e;
            e = parseFloat(e);
          }
          let n = rE(e, t.target.x),
            r = rE(e, t.target.y);
          return `${n}% ${r}%`;
        },
      };
      class rS extends s.Component {
        componentDidMount() {
          let {
              visualElement: e,
              layoutGroup: t,
              switchLayoutGroup: n,
              layoutId: r,
            } = this.props,
            { projection: i } = e;
          Object.assign(k, rM),
            i &&
              (t.group && t.group.add(i),
              n && n.register && r && n.register(i),
              i.root.didUpdate(),
              i.addEventListener("animationComplete", () => {
                this.safeToRemove();
              }),
              i.setOptions({
                ...i.options,
                onExitComplete: () => this.safeToRemove(),
              })),
            (rw.hasEverUpdated = !0);
        }
        getSnapshotBeforeUpdate(e) {
          let {
              layoutDependency: t,
              visualElement: n,
              drag: r,
              isPresent: i,
            } = this.props,
            o = n.projection;
          return (
            o &&
              ((o.isPresent = i),
              r || e.layoutDependency !== t || void 0 === t
                ? o.willUpdate()
                : this.safeToRemove(),
              e.isPresent === i ||
                (i
                  ? o.promote()
                  : o.relegate() ||
                    eO.Wi.postRender(() => {
                      let e = o.getStack();
                      (e && e.members.length) || this.safeToRemove();
                    }))),
            null
          );
        }
        componentDidUpdate() {
          let { projection: e } = this.props.visualElement;
          e &&
            (e.root.didUpdate(),
            queueMicrotask(() => {
              !e.currentAnimation && e.isLead() && this.safeToRemove();
            }));
        }
        componentWillUnmount() {
          let {
              visualElement: e,
              layoutGroup: t,
              switchLayoutGroup: n,
            } = this.props,
            { projection: r } = e;
          r &&
            (r.scheduleCheckAfterUnmount(),
            t && t.group && t.group.remove(r),
            n && n.deregister && n.deregister(r));
        }
        safeToRemove() {
          let { safeToRemove: e } = this.props;
          e && e();
        }
        render() {
          return null;
        }
      }
      function rC(e) {
        let [t, n] = (function () {
            let e = (0, s.useContext)(u.O);
            if (null === e) return [!0, null];
            let { isPresent: t, onExitComplete: n, register: r } = e,
              i = (0, s.useId)();
            return (
              (0, s.useEffect)(() => r(i), []),
              !t && n ? [!1, () => n && n(i)] : [!0]
            );
          })(),
          r = (0, s.useContext)(S.p);
        return s.createElement(rS, {
          ...e,
          layoutGroup: r,
          switchLayoutGroup: (0, s.useContext)(C),
          isPresent: t,
          safeToRemove: n,
        });
      }
      let rM = {
          borderRadius: {
            ...rT,
            applyTo: [
              "borderTopLeftRadius",
              "borderTopRightRadius",
              "borderBottomLeftRadius",
              "borderBottomRightRadius",
            ],
          },
          borderTopLeftRadius: rT,
          borderTopRightRadius: rT,
          borderBottomLeftRadius: rT,
          borderBottomRightRadius: rT,
          boxShadow: {
            correct: (e, { treeScale: t, projectionDelta: n }) => {
              let r = tU.parse(e);
              if (r.length > 5) return e;
              let i = tU.createTransformer(e),
                o = "number" != typeof r[0] ? 1 : 0,
                s = n.x.scale * t.x,
                a = n.y.scale * t.y;
              (r[0 + o] /= s), (r[1 + o] /= a);
              let l = tM(s, a, 0.5);
              return (
                "number" == typeof r[2 + o] && (r[2 + o] /= l),
                "number" == typeof r[3 + o] && (r[3 + o] /= l),
                i(r)
              );
            },
          },
        },
        rA = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        rO = rA.length,
        rk = (e) => ("string" == typeof e ? parseFloat(e) : e),
        rR = (e) => "number" == typeof e || J.test(e);
      function rj(e, t) {
        return void 0 !== e[t] ? e[t] : e.borderRadius;
      }
      let rD = rV(0, 0.5, tf),
        rL = rV(0.5, 0.95, eX.Z);
      function rV(e, t, n) {
        return (r) => (r < e ? 0 : r > t ? 1 : n(tq(e, t, r)));
      }
      function r_(e, t) {
        (e.min = t.min), (e.max = t.max);
      }
      function rF(e, t) {
        r_(e.x, t.x), r_(e.y, t.y);
      }
      function rI(e, t, n, r, i) {
        return (
          (e -= t),
          (e = r + (1 / n) * (e - r)),
          void 0 !== i && (e = r + (1 / i) * (e - r)),
          e
        );
      }
      function rN(e, t, [n, r, i], o, s) {
        !(function (e, t = 0, n = 1, r = 0.5, i, o = e, s = e) {
          if (
            (Q.test(t) &&
              ((t = parseFloat(t)), (t = tM(s.min, s.max, t / 100) - s.min)),
            "number" != typeof t)
          )
            return;
          let a = tM(o.min, o.max, r);
          e === o && (a -= t),
            (e.min = rI(e.min, t, n, a, i)),
            (e.max = rI(e.max, t, n, a, i));
        })(e, t[n], t[r], t[i], t.scale, o, s);
      }
      let rB = ["x", "scaleX", "originX"],
        rH = ["y", "scaleY", "originY"];
      function rU(e, t, n, r) {
        rN(e.x, t, rB, n ? n.x : void 0, r ? r.x : void 0),
          rN(e.y, t, rH, n ? n.y : void 0, r ? r.y : void 0);
      }
      function rW(e) {
        return 0 === e.translate && 1 === e.scale;
      }
      function rz(e) {
        return rW(e.x) && rW(e.y);
      }
      function r$(e, t) {
        return (
          Math.round(e.x.min) === Math.round(t.x.min) &&
          Math.round(e.x.max) === Math.round(t.x.max) &&
          Math.round(e.y.min) === Math.round(t.y.min) &&
          Math.round(e.y.max) === Math.round(t.y.max)
        );
      }
      function rZ(e) {
        return nq(e.x) / nq(e.y);
      }
      class rY {
        constructor() {
          this.members = [];
        }
        add(e) {
          nx(this.members, e), e.scheduleRender();
        }
        remove(e) {
          if (
            (nw(this.members, e),
            e === this.prevLead && (this.prevLead = void 0),
            e === this.lead)
          ) {
            let e = this.members[this.members.length - 1];
            e && this.promote(e);
          }
        }
        relegate(e) {
          let t;
          let n = this.members.findIndex((t) => e === t);
          if (0 === n) return !1;
          for (let e = n; e >= 0; e--) {
            let n = this.members[e];
            if (!1 !== n.isPresent) {
              t = n;
              break;
            }
          }
          return !!t && (this.promote(t), !0);
        }
        promote(e, t) {
          let n = this.lead;
          if (e !== n && ((this.prevLead = n), (this.lead = e), e.show(), n)) {
            n.instance && n.scheduleRender(),
              e.scheduleRender(),
              (e.resumeFrom = n),
              t && (e.resumeFrom.preserveOpacity = !0),
              n.snapshot &&
                ((e.snapshot = n.snapshot),
                (e.snapshot.latestValues =
                  n.animationValues || n.latestValues)),
              e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
            let { crossfade: r } = e.options;
            !1 === r && n.hide();
          }
        }
        exitAnimationComplete() {
          this.members.forEach((e) => {
            let { options: t, resumingFrom: n } = e;
            t.onExitComplete && t.onExitComplete(),
              n && n.options.onExitComplete && n.options.onExitComplete();
          });
        }
        scheduleRender() {
          this.members.forEach((e) => {
            e.instance && e.scheduleRender(!1);
          });
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
        }
      }
      function rq(e, t, n) {
        let r = "",
          i = e.x.translate / t.x,
          o = e.y.translate / t.y;
        if (
          ((i || o) && (r = `translate3d(${i}px, ${o}px, 0) `),
          (1 !== t.x || 1 !== t.y) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
          n)
        ) {
          let { rotate: e, rotateX: t, rotateY: i } = n;
          e && (r += `rotate(${e}deg) `),
            t && (r += `rotateX(${t}deg) `),
            i && (r += `rotateY(${i}deg) `);
        }
        let s = e.x.scale * t.x,
          a = e.y.scale * t.y;
        return (1 !== s || 1 !== a) && (r += `scale(${s}, ${a})`), r || "none";
      }
      let rX = (e, t) => e.depth - t.depth;
      class rG {
        constructor() {
          (this.children = []), (this.isDirty = !1);
        }
        add(e) {
          nx(this.children, e), (this.isDirty = !0);
        }
        remove(e) {
          nw(this.children, e), (this.isDirty = !0);
        }
        forEach(e) {
          this.isDirty && this.children.sort(rX),
            (this.isDirty = !1),
            this.children.forEach(e);
        }
      }
      let rK = ["", "X", "Y", "Z"],
        rQ = { visibility: "hidden" },
        rJ = 0,
        r0 = {
          type: "projectionFrame",
          totalNodes: 0,
          resolvedTargetDeltas: 0,
          recalculatedProjection: 0,
        };
      function r1({
        attachResizeListener: e,
        defaultParent: t,
        measureScroll: n,
        checkIsScrollRoot: r,
        resetTransform: i,
      }) {
        return class {
          constructor(e = {}, n = null == t ? void 0 : t()) {
            (this.id = rJ++),
              (this.animationId = 0),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.isProjectionDirty = !1),
              (this.isSharedProjectionDirty = !1),
              (this.isTransformDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.hasTreeAnimated = !1),
              (this.updateScheduled = !1),
              (this.projectionUpdateScheduled = !1),
              (this.checkUpdateFailed = () => {
                this.isUpdating &&
                  ((this.isUpdating = !1), this.clearAllSnapshots());
              }),
              (this.updateProjection = () => {
                (this.projectionUpdateScheduled = !1),
                  (r0.totalNodes =
                    r0.resolvedTargetDeltas =
                    r0.recalculatedProjection =
                      0),
                  this.nodes.forEach(r4),
                  this.nodes.forEach(it),
                  this.nodes.forEach(ir),
                  this.nodes.forEach(r3),
                  window.MotionDebug && window.MotionDebug.record(r0);
              }),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.latestValues = e),
              (this.root = n ? n.root || n : this),
              (this.path = n ? [...n.path, n] : []),
              (this.parent = n),
              (this.depth = n ? n.depth + 1 : 0);
            for (let e = 0; e < this.path.length; e++)
              this.path[e].shouldResetTransform = !0;
            this.root === this && (this.nodes = new rG());
          }
          addEventListener(e, t) {
            return (
              this.eventHandlers.has(e) || this.eventHandlers.set(e, new nE()),
              this.eventHandlers.get(e).add(t)
            );
          }
          notifyListeners(e, ...t) {
            let n = this.eventHandlers.get(e);
            n && n.notify(...t);
          }
          hasListeners(e) {
            return this.eventHandlers.has(e);
          }
          mount(t, n = this.root.hasTreeAnimated) {
            if (this.instance) return;
            (this.isSVG = t instanceof SVGElement && "svg" !== t.tagName),
              (this.instance = t);
            let { layoutId: r, layout: i, visualElement: o } = this.options;
            if (
              (o && !o.current && o.mount(t),
              this.root.nodes.add(this),
              this.parent && this.parent.children.add(this),
              n && (i || r) && (this.isLayoutDirty = !0),
              e)
            ) {
              let n;
              let r = () => (this.root.updateBlockedByResize = !1);
              e(t, () => {
                (this.root.updateBlockedByResize = !0),
                  n && n(),
                  (n = (function (e, t) {
                    let n = performance.now(),
                      r = ({ timestamp: i }) => {
                        let o = i - n;
                        o >= t && ((0, eO.Pn)(r), e(o - t));
                      };
                    return eO.Wi.read(r, !0), () => (0, eO.Pn)(r);
                  })(r, 250)),
                  rw.hasAnimatedSinceResize &&
                    ((rw.hasAnimatedSinceResize = !1), this.nodes.forEach(ie));
              });
            }
            r && this.root.registerSharedNode(r, this),
              !1 !== this.options.animate &&
                o &&
                (r || i) &&
                this.addEventListener(
                  "didUpdate",
                  ({
                    delta: e,
                    hasLayoutChanged: t,
                    hasRelativeTargetChanged: n,
                    layout: r,
                  }) => {
                    if (this.isTreeAnimationBlocked()) {
                      (this.target = void 0), (this.relativeTarget = void 0);
                      return;
                    }
                    let i =
                        this.options.transition ||
                        o.getDefaultTransition() ||
                        iu,
                      {
                        onLayoutAnimationStart: s,
                        onLayoutAnimationComplete: a,
                      } = o.getProps(),
                      l = !this.targetLayout || !r$(this.targetLayout, r) || n,
                      u = !t && n;
                    if (
                      this.options.layoutRoot ||
                      (this.resumeFrom && this.resumeFrom.instance) ||
                      u ||
                      (t && (l || !this.currentAnimation))
                    ) {
                      this.resumeFrom &&
                        ((this.resumingFrom = this.resumeFrom),
                        (this.resumingFrom.resumingFrom = void 0)),
                        this.setAnimationOrigin(e, u);
                      let t = { ...nv(i, "layout"), onPlay: s, onComplete: a };
                      (o.shouldReduceMotion || this.options.layoutRoot) &&
                        ((t.delay = 0), (t.type = !1)),
                        this.startAnimation(t);
                    } else
                      t || ie(this),
                        this.isLead() &&
                          this.options.onExitComplete &&
                          this.options.onExitComplete();
                    this.targetLayout = r;
                  }
                );
          }
          unmount() {
            this.options.layoutId && this.willUpdate(),
              this.root.nodes.remove(this);
            let e = this.getStack();
            e && e.remove(this),
              this.parent && this.parent.children.delete(this),
              (this.instance = void 0),
              (0, eO.Pn)(this.updateProjection);
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0;
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1;
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
          }
          isTreeAnimationBlocked() {
            return (
              this.isAnimationBlocked ||
              (this.parent && this.parent.isTreeAnimationBlocked()) ||
              !1
            );
          }
          startUpdate() {
            !this.isUpdateBlocked() &&
              ((this.isUpdating = !0),
              this.nodes && this.nodes.forEach(ii),
              this.animationId++);
          }
          getTransformTemplate() {
            let { visualElement: e } = this.options;
            return e && e.getProps().transformTemplate;
          }
          willUpdate(e = !0) {
            if (
              ((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())
            ) {
              this.options.onExitComplete && this.options.onExitComplete();
              return;
            }
            if (
              (this.root.isUpdating || this.root.startUpdate(),
              this.isLayoutDirty)
            )
              return;
            this.isLayoutDirty = !0;
            for (let e = 0; e < this.path.length; e++) {
              let t = this.path[e];
              (t.shouldResetTransform = !0),
                t.updateScroll("snapshot"),
                t.options.layoutRoot && t.willUpdate(!1);
            }
            let { layoutId: t, layout: n } = this.options;
            if (void 0 === t && !n) return;
            let r = this.getTransformTemplate();
            (this.prevTransformTemplateValue = r
              ? r(this.latestValues, "")
              : void 0),
              this.updateSnapshot(),
              e && this.notifyListeners("willUpdate");
          }
          update() {
            if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
              this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(r6);
              return;
            }
            this.isUpdating || this.nodes.forEach(r9),
              (this.isUpdating = !1),
              this.nodes.forEach(r8),
              this.nodes.forEach(r2),
              this.nodes.forEach(r5),
              this.clearAllSnapshots();
            let e = performance.now();
            (eO.frameData.delta = H(0, 1e3 / 60, e - eO.frameData.timestamp)),
              (eO.frameData.timestamp = e),
              (eO.frameData.isProcessing = !0),
              eO.S6.update.process(eO.frameData),
              eO.S6.preRender.process(eO.frameData),
              eO.S6.render.process(eO.frameData),
              (eO.frameData.isProcessing = !1);
          }
          didUpdate() {
            this.updateScheduled ||
              ((this.updateScheduled = !0),
              queueMicrotask(() => this.update()));
          }
          clearAllSnapshots() {
            this.nodes.forEach(r7), this.sharedNodes.forEach(io);
          }
          scheduleUpdateProjection() {
            this.projectionUpdateScheduled ||
              ((this.projectionUpdateScheduled = !0),
              eO.Wi.preRender(this.updateProjection, !1, !0));
          }
          scheduleCheckAfterUnmount() {
            eO.Wi.postRender(() => {
              this.isLayoutDirty
                ? this.root.didUpdate()
                : this.root.checkUpdateFailed();
            });
          }
          updateSnapshot() {
            !this.snapshot && this.instance && (this.snapshot = this.measure());
          }
          updateLayout() {
            if (
              !this.instance ||
              (this.updateScroll(),
              !(this.options.alwaysMeasureLayout && this.isLead()) &&
                !this.isLayoutDirty)
            )
              return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let e = 0; e < this.path.length; e++)
                this.path[e].updateScroll();
            let e = this.layout;
            (this.layout = this.measure(!1)),
              (this.layoutCorrected = n9()),
              (this.isLayoutDirty = !1),
              (this.projectionDelta = void 0),
              this.notifyListeners("measure", this.layout.layoutBox);
            let { visualElement: t } = this.options;
            t &&
              t.notify(
                "LayoutMeasure",
                this.layout.layoutBox,
                e ? e.layoutBox : void 0
              );
          }
          updateScroll(e = "measure") {
            let t = !!(this.options.layoutScroll && this.instance);
            this.scroll &&
              this.scroll.animationId === this.root.animationId &&
              this.scroll.phase === e &&
              (t = !1),
              t &&
                (this.scroll = {
                  animationId: this.root.animationId,
                  phase: e,
                  isRoot: r(this.instance),
                  offset: n(this.instance),
                });
          }
          resetTransform() {
            if (!i) return;
            let e = this.isLayoutDirty || this.shouldResetTransform,
              t = this.projectionDelta && !rz(this.projectionDelta),
              n = this.getTransformTemplate(),
              r = n ? n(this.latestValues, "") : void 0,
              o = r !== this.prevTransformTemplateValue;
            e &&
              (t || rr(this.latestValues) || o) &&
              (i(this.instance, r),
              (this.shouldResetTransform = !1),
              this.scheduleRender());
          }
          measure(e = !0) {
            var t;
            let n = this.measurePageBox(),
              r = this.removeElementScroll(n);
            return (
              e && (r = this.removeTransform(r)),
              ih((t = r).x),
              ih(t.y),
              {
                animationId: this.root.animationId,
                measuredBox: n,
                layoutBox: r,
                latestValues: {},
                source: this.id,
              }
            );
          }
          measurePageBox() {
            let { visualElement: e } = this.options;
            if (!e) return n9();
            let t = e.measureViewportBox(),
              { scroll: n } = this.root;
            return n && (ru(t.x, n.offset.x), ru(t.y, n.offset.y)), t;
          }
          removeElementScroll(e) {
            let t = n9();
            rF(t, e);
            for (let n = 0; n < this.path.length; n++) {
              let r = this.path[n],
                { scroll: i, options: o } = r;
              if (r !== this.root && i && o.layoutScroll) {
                if (i.isRoot) {
                  rF(t, e);
                  let { scroll: n } = this.root;
                  n && (ru(t.x, -n.offset.x), ru(t.y, -n.offset.y));
                }
                ru(t.x, i.offset.x), ru(t.y, i.offset.y);
              }
            }
            return t;
          }
          applyTransform(e, t = !1) {
            let n = n9();
            rF(n, e);
            for (let e = 0; e < this.path.length; e++) {
              let r = this.path[e];
              !t &&
                r.options.layoutScroll &&
                r.scroll &&
                r !== r.root &&
                rh(n, { x: -r.scroll.offset.x, y: -r.scroll.offset.y }),
                rr(r.latestValues) && rh(n, r.latestValues);
            }
            return rr(this.latestValues) && rh(n, this.latestValues), n;
          }
          removeTransform(e) {
            let t = n9();
            rF(t, e);
            for (let e = 0; e < this.path.length; e++) {
              let n = this.path[e];
              if (!n.instance || !rr(n.latestValues)) continue;
              rn(n.latestValues) && n.updateSnapshot();
              let r = n9();
              rF(r, n.measurePageBox()),
                rU(
                  t,
                  n.latestValues,
                  n.snapshot ? n.snapshot.layoutBox : void 0,
                  r
                );
            }
            return rr(this.latestValues) && rU(t, this.latestValues), t;
          }
          setTargetDelta(e) {
            (this.targetDelta = e),
              this.root.scheduleUpdateProjection(),
              (this.isProjectionDirty = !0);
          }
          setOptions(e) {
            this.options = {
              ...this.options,
              ...e,
              crossfade: void 0 === e.crossfade || e.crossfade,
            };
          }
          clearMeasurements() {
            (this.scroll = void 0),
              (this.layout = void 0),
              (this.snapshot = void 0),
              (this.prevTransformTemplateValue = void 0),
              (this.targetDelta = void 0),
              (this.target = void 0),
              (this.isLayoutDirty = !1);
          }
          forceRelativeParentToResolveTarget() {
            this.relativeParent &&
              this.relativeParent.resolvedRelativeTargetAt !==
                eO.frameData.timestamp &&
              this.relativeParent.resolveTargetDelta(!0);
          }
          resolveTargetDelta(e = !1) {
            var t, n, r, i;
            let o = this.getLead();
            this.isProjectionDirty ||
              (this.isProjectionDirty = o.isProjectionDirty),
              this.isTransformDirty ||
                (this.isTransformDirty = o.isTransformDirty),
              this.isSharedProjectionDirty ||
                (this.isSharedProjectionDirty = o.isSharedProjectionDirty);
            let s = !!this.resumingFrom || this !== o;
            if (
              !(
                e ||
                (s && this.isSharedProjectionDirty) ||
                this.isProjectionDirty ||
                (null === (t = this.parent) || void 0 === t
                  ? void 0
                  : t.isProjectionDirty) ||
                this.attemptToResolveRelativeTarget
              )
            )
              return;
            let { layout: a, layoutId: l } = this.options;
            if (this.layout && (a || l)) {
              if (
                ((this.resolvedRelativeTargetAt = eO.frameData.timestamp),
                !this.targetDelta && !this.relativeTarget)
              ) {
                let e = this.getClosestProjectingParent();
                e && e.layout && 1 !== this.animationProgress
                  ? ((this.relativeParent = e),
                    this.forceRelativeParentToResolveTarget(),
                    (this.relativeTarget = n9()),
                    (this.relativeTargetOrigin = n9()),
                    n0(
                      this.relativeTargetOrigin,
                      this.layout.layoutBox,
                      e.layout.layoutBox
                    ),
                    rF(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }
              if (this.relativeTarget || this.targetDelta) {
                if (
                  ((this.target ||
                    ((this.target = n9()), (this.targetWithTransforms = n9())),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.relativeParent &&
                    this.relativeParent.target)
                    ? (this.forceRelativeParentToResolveTarget(),
                      (n = this.target),
                      (r = this.relativeTarget),
                      (i = this.relativeParent.target),
                      nQ(n.x, r.x, i.x),
                      nQ(n.y, r.y, i.y))
                    : this.targetDelta
                    ? (this.resumingFrom
                        ? (this.target = this.applyTransform(
                            this.layout.layoutBox
                          ))
                        : rF(this.target, this.layout.layoutBox),
                      ra(this.target, this.targetDelta))
                    : rF(this.target, this.layout.layoutBox),
                  this.attemptToResolveRelativeTarget)
                ) {
                  this.attemptToResolveRelativeTarget = !1;
                  let e = this.getClosestProjectingParent();
                  e &&
                  !!e.resumingFrom == !!this.resumingFrom &&
                  !e.options.layoutScroll &&
                  e.target &&
                  1 !== this.animationProgress
                    ? ((this.relativeParent = e),
                      this.forceRelativeParentToResolveTarget(),
                      (this.relativeTarget = n9()),
                      (this.relativeTargetOrigin = n9()),
                      n0(this.relativeTargetOrigin, this.target, e.target),
                      rF(this.relativeTarget, this.relativeTargetOrigin))
                    : (this.relativeParent = this.relativeTarget = void 0);
                }
                r0.resolvedTargetDeltas++;
              }
            }
          }
          getClosestProjectingParent() {
            return !this.parent ||
              rn(this.parent.latestValues) ||
              ri(this.parent.latestValues)
              ? void 0
              : this.parent.isProjecting()
              ? this.parent
              : this.parent.getClosestProjectingParent();
          }
          isProjecting() {
            return !!(
              (this.relativeTarget ||
                this.targetDelta ||
                this.options.layoutRoot) &&
              this.layout
            );
          }
          calcProjection() {
            var e;
            let t = this.getLead(),
              n = !!this.resumingFrom || this !== t,
              r = !0;
            if (
              ((this.isProjectionDirty ||
                (null === (e = this.parent) || void 0 === e
                  ? void 0
                  : e.isProjectionDirty)) &&
                (r = !1),
              n &&
                (this.isSharedProjectionDirty || this.isTransformDirty) &&
                (r = !1),
              this.resolvedRelativeTargetAt === eO.frameData.timestamp &&
                (r = !1),
              r)
            )
              return;
            let { layout: i, layoutId: o } = this.options;
            if (
              ((this.isTreeAnimating = !!(
                (this.parent && this.parent.isTreeAnimating) ||
                this.currentAnimation ||
                this.pendingAnimation
              )),
              this.isTreeAnimating ||
                (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || !(i || o))
            )
              return;
            rF(this.layoutCorrected, this.layout.layoutBox);
            let s = this.treeScale.x,
              a = this.treeScale.y;
            !(function (e, t, n, r = !1) {
              let i, o;
              let s = n.length;
              if (s) {
                t.x = t.y = 1;
                for (let a = 0; a < s; a++) {
                  o = (i = n[a]).projectionDelta;
                  let s = i.instance;
                  (!s || !s.style || "contents" !== s.style.display) &&
                    (r &&
                      i.options.layoutScroll &&
                      i.scroll &&
                      i !== i.root &&
                      rh(e, { x: -i.scroll.offset.x, y: -i.scroll.offset.y }),
                    o && ((t.x *= o.x.scale), (t.y *= o.y.scale), ra(e, o)),
                    r && rr(i.latestValues) && rh(e, i.latestValues));
                }
                (t.x = rl(t.x)), (t.y = rl(t.y));
              }
            })(this.layoutCorrected, this.treeScale, this.path, n),
              t.layout &&
                !t.target &&
                (1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
                (t.target = t.layout.layoutBox);
            let { target: l } = t;
            if (!l) {
              this.projectionTransform &&
                ((this.projectionDelta = n7()),
                (this.projectionTransform = "none"),
                this.scheduleRender());
              return;
            }
            this.projectionDelta ||
              ((this.projectionDelta = n7()),
              (this.projectionDeltaWithTransform = n7()));
            let u = this.projectionTransform;
            nK(
              this.projectionDelta,
              this.layoutCorrected,
              l,
              this.latestValues
            ),
              (this.projectionTransform = rq(
                this.projectionDelta,
                this.treeScale
              )),
              (this.projectionTransform !== u ||
                this.treeScale.x !== s ||
                this.treeScale.y !== a) &&
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners("projectionUpdate", l)),
              r0.recalculatedProjection++;
          }
          hide() {
            this.isVisible = !1;
          }
          show() {
            this.isVisible = !0;
          }
          scheduleRender(e = !0) {
            if (
              (this.options.scheduleRender && this.options.scheduleRender(), e)
            ) {
              let e = this.getStack();
              e && e.scheduleRender();
            }
            this.resumingFrom &&
              !this.resumingFrom.instance &&
              (this.resumingFrom = void 0);
          }
          setAnimationOrigin(e, t = !1) {
            let n;
            let r = this.snapshot,
              i = r ? r.latestValues : {},
              o = { ...this.latestValues },
              s = n7();
            (this.relativeParent && this.relativeParent.options.layoutRoot) ||
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !t);
            let a = n9(),
              l =
                (r ? r.source : void 0) !==
                (this.layout ? this.layout.source : void 0),
              u = this.getStack(),
              c = !u || u.members.length <= 1,
              d = !!(
                l &&
                !c &&
                !0 === this.options.crossfade &&
                !this.path.some(il)
              );
            (this.animationProgress = 0),
              (this.mixTargetDelta = (t) => {
                let r = t / 1e3;
                if (
                  (is(s.x, e.x, r),
                  is(s.y, e.y, r),
                  this.setTargetDelta(s),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    this.relativeParent &&
                    this.relativeParent.layout)
                ) {
                  var u, f, h, p;
                  n0(
                    a,
                    this.layout.layoutBox,
                    this.relativeParent.layout.layoutBox
                  ),
                    (h = this.relativeTarget),
                    (p = this.relativeTargetOrigin),
                    ia(h.x, p.x, a.x, r),
                    ia(h.y, p.y, a.y, r),
                    n &&
                      ((u = this.relativeTarget),
                      (f = n),
                      u.x.min === f.x.min &&
                        u.x.max === f.x.max &&
                        u.y.min === f.y.min &&
                        u.y.max === f.y.max) &&
                      (this.isProjectionDirty = !1),
                    n || (n = n9()),
                    rF(n, this.relativeTarget);
                }
                l &&
                  ((this.animationValues = o),
                  (function (e, t, n, r, i, o) {
                    i
                      ? ((e.opacity = tM(
                          0,
                          void 0 !== n.opacity ? n.opacity : 1,
                          rD(r)
                        )),
                        (e.opacityExit = tM(
                          void 0 !== t.opacity ? t.opacity : 1,
                          0,
                          rL(r)
                        )))
                      : o &&
                        (e.opacity = tM(
                          void 0 !== t.opacity ? t.opacity : 1,
                          void 0 !== n.opacity ? n.opacity : 1,
                          r
                        ));
                    for (let i = 0; i < rO; i++) {
                      let o = `border${rA[i]}Radius`,
                        s = rj(t, o),
                        a = rj(n, o);
                      (void 0 !== s || void 0 !== a) &&
                        (s || (s = 0),
                        a || (a = 0),
                        0 === s || 0 === a || rR(s) === rR(a)
                          ? ((e[o] = Math.max(tM(rk(s), rk(a), r), 0)),
                            (Q.test(a) || Q.test(s)) && (e[o] += "%"))
                          : (e[o] = a));
                    }
                    (t.rotate || n.rotate) &&
                      (e.rotate = tM(t.rotate || 0, n.rotate || 0, r));
                  })(o, i, this.latestValues, r, d, c)),
                  this.root.scheduleUpdateProjection(),
                  this.scheduleRender(),
                  (this.animationProgress = r);
              }),
              this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
          }
          startAnimation(e) {
            this.notifyListeners("animationStart"),
              this.currentAnimation && this.currentAnimation.stop(),
              this.resumingFrom &&
                this.resumingFrom.currentAnimation &&
                this.resumingFrom.currentAnimation.stop(),
              this.pendingAnimation &&
                ((0, eO.Pn)(this.pendingAnimation),
                (this.pendingAnimation = void 0)),
              (this.pendingAnimation = eO.Wi.update(() => {
                (rw.hasAnimatedSinceResize = !0),
                  (this.currentAnimation = (function (e, t, n) {
                    let r = L(e) ? e : nM(e);
                    return r.start(ny("", r, 1e3, n)), r.animation;
                  })(0, 0, {
                    ...e,
                    onUpdate: (t) => {
                      this.mixTargetDelta(t), e.onUpdate && e.onUpdate(t);
                    },
                    onComplete: () => {
                      e.onComplete && e.onComplete(), this.completeAnimation();
                    },
                  })),
                  this.resumingFrom &&
                    (this.resumingFrom.currentAnimation =
                      this.currentAnimation),
                  (this.pendingAnimation = void 0);
              }));
          }
          completeAnimation() {
            this.resumingFrom &&
              ((this.resumingFrom.currentAnimation = void 0),
              (this.resumingFrom.preserveOpacity = void 0));
            let e = this.getStack();
            e && e.exitAnimationComplete(),
              (this.resumingFrom =
                this.currentAnimation =
                this.animationValues =
                  void 0),
              this.notifyListeners("animationComplete");
          }
          finishAnimation() {
            this.currentAnimation &&
              (this.mixTargetDelta && this.mixTargetDelta(1e3),
              this.currentAnimation.stop()),
              this.completeAnimation();
          }
          applyTransformsToTarget() {
            let e = this.getLead(),
              {
                targetWithTransforms: t,
                target: n,
                layout: r,
                latestValues: i,
              } = e;
            if (t && n && r) {
              if (
                this !== e &&
                this.layout &&
                r &&
                ip(
                  this.options.animationType,
                  this.layout.layoutBox,
                  r.layoutBox
                )
              ) {
                n = this.target || n9();
                let t = nq(this.layout.layoutBox.x);
                (n.x.min = e.target.x.min), (n.x.max = n.x.min + t);
                let r = nq(this.layout.layoutBox.y);
                (n.y.min = e.target.y.min), (n.y.max = n.y.min + r);
              }
              rF(t, n),
                rh(t, i),
                nK(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  t,
                  i
                );
            }
          }
          registerSharedNode(e, t) {
            this.sharedNodes.has(e) || this.sharedNodes.set(e, new rY()),
              this.sharedNodes.get(e).add(t);
            let n = t.options.initialPromotionConfig;
            t.promote({
              transition: n ? n.transition : void 0,
              preserveFollowOpacity:
                n && n.shouldPreserveFollowOpacity
                  ? n.shouldPreserveFollowOpacity(t)
                  : void 0,
            });
          }
          isLead() {
            let e = this.getStack();
            return !e || e.lead === this;
          }
          getLead() {
            var e;
            let { layoutId: t } = this.options;
            return (
              (t &&
                (null === (e = this.getStack()) || void 0 === e
                  ? void 0
                  : e.lead)) ||
              this
            );
          }
          getPrevLead() {
            var e;
            let { layoutId: t } = this.options;
            return t
              ? null === (e = this.getStack()) || void 0 === e
                ? void 0
                : e.prevLead
              : void 0;
          }
          getStack() {
            let { layoutId: e } = this.options;
            if (e) return this.root.sharedNodes.get(e);
          }
          promote({
            needsReset: e,
            transition: t,
            preserveFollowOpacity: n,
          } = {}) {
            let r = this.getStack();
            r && r.promote(this, n),
              e && ((this.projectionDelta = void 0), (this.needsReset = !0)),
              t && this.setOptions({ transition: t });
          }
          relegate() {
            let e = this.getStack();
            return !!e && e.relegate(this);
          }
          resetRotation() {
            let { visualElement: e } = this.options;
            if (!e) return;
            let t = !1,
              { latestValues: n } = e;
            if (
              ((n.rotate || n.rotateX || n.rotateY || n.rotateZ) && (t = !0),
              !t)
            )
              return;
            let r = {};
            for (let t = 0; t < rK.length; t++) {
              let i = "rotate" + rK[t];
              n[i] && ((r[i] = n[i]), e.setStaticValue(i, 0));
            }
            for (let t in (e.render(), r)) e.setStaticValue(t, r[t]);
            e.scheduleRender();
          }
          getProjectionStyles(e) {
            var t, n;
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return rQ;
            let r = { visibility: "" },
              i = this.getTransformTemplate();
            if (this.needsReset)
              return (
                (this.needsReset = !1),
                (r.opacity = ""),
                (r.pointerEvents =
                  eM(null == e ? void 0 : e.pointerEvents) || ""),
                (r.transform = i ? i(this.latestValues, "") : "none"),
                r
              );
            let o = this.getLead();
            if (!this.projectionDelta || !this.layout || !o.target) {
              let t = {};
              return (
                this.options.layoutId &&
                  ((t.opacity =
                    void 0 !== this.latestValues.opacity
                      ? this.latestValues.opacity
                      : 1),
                  (t.pointerEvents =
                    eM(null == e ? void 0 : e.pointerEvents) || "")),
                this.hasProjected &&
                  !rr(this.latestValues) &&
                  ((t.transform = i ? i({}, "") : "none"),
                  (this.hasProjected = !1)),
                t
              );
            }
            let s = o.animationValues || o.latestValues;
            this.applyTransformsToTarget(),
              (r.transform = rq(
                this.projectionDeltaWithTransform,
                this.treeScale,
                s
              )),
              i && (r.transform = i(s, r.transform));
            let { x: a, y: l } = this.projectionDelta;
            for (let e in ((r.transformOrigin = `${100 * a.origin}% ${
              100 * l.origin
            }% 0`),
            o.animationValues
              ? (r.opacity =
                  o === this
                    ? null !==
                        (n =
                          null !== (t = s.opacity) && void 0 !== t
                            ? t
                            : this.latestValues.opacity) && void 0 !== n
                      ? n
                      : 1
                    : this.preserveOpacity
                    ? this.latestValues.opacity
                    : s.opacityExit)
              : (r.opacity =
                  o === this
                    ? void 0 !== s.opacity
                      ? s.opacity
                      : ""
                    : void 0 !== s.opacityExit
                    ? s.opacityExit
                    : 0),
            k)) {
              if (void 0 === s[e]) continue;
              let { correct: t, applyTo: n } = k[e],
                i = "none" === r.transform ? s[e] : t(s[e], o);
              if (n) {
                let e = n.length;
                for (let t = 0; t < e; t++) r[n[t]] = i;
              } else r[e] = i;
            }
            return (
              this.options.layoutId &&
                (r.pointerEvents =
                  o === this
                    ? eM(null == e ? void 0 : e.pointerEvents) || ""
                    : "none"),
              r
            );
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
          }
          resetTree() {
            this.root.nodes.forEach((e) => {
              var t;
              return null === (t = e.currentAnimation) || void 0 === t
                ? void 0
                : t.stop();
            }),
              this.root.nodes.forEach(r6),
              this.root.sharedNodes.clear();
          }
        };
      }
      function r2(e) {
        e.updateLayout();
      }
      function r5(e) {
        var t;
        let n =
          (null === (t = e.resumeFrom) || void 0 === t ? void 0 : t.snapshot) ||
          e.snapshot;
        if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
          let { layoutBox: t, measuredBox: r } = e.layout,
            { animationType: i } = e.options,
            o = n.source !== e.layout.source;
          "size" === i
            ? n8((e) => {
                let r = o ? n.measuredBox[e] : n.layoutBox[e],
                  i = nq(r);
                (r.min = t[e].min), (r.max = r.min + i);
              })
            : ip(i, n.layoutBox, t) &&
              n8((r) => {
                let i = o ? n.measuredBox[r] : n.layoutBox[r],
                  s = nq(t[r]);
                (i.max = i.min + s),
                  e.relativeTarget &&
                    !e.currentAnimation &&
                    ((e.isProjectionDirty = !0),
                    (e.relativeTarget[r].max = e.relativeTarget[r].min + s));
              });
          let s = n7();
          nK(s, t, n.layoutBox);
          let a = n7();
          o
            ? nK(a, e.applyTransform(r, !0), n.measuredBox)
            : nK(a, t, n.layoutBox);
          let l = !rz(s),
            u = !1;
          if (!e.resumeFrom) {
            let r = e.getClosestProjectingParent();
            if (r && !r.resumeFrom) {
              let { snapshot: i, layout: o } = r;
              if (i && o) {
                let s = n9();
                n0(s, n.layoutBox, i.layoutBox);
                let a = n9();
                n0(a, t, o.layoutBox),
                  r$(s, a) || (u = !0),
                  r.options.layoutRoot &&
                    ((e.relativeTarget = a),
                    (e.relativeTargetOrigin = s),
                    (e.relativeParent = r));
              }
            }
          }
          e.notifyListeners("didUpdate", {
            layout: t,
            snapshot: n,
            delta: a,
            layoutDelta: s,
            hasLayoutChanged: l,
            hasRelativeTargetChanged: u,
          });
        } else if (e.isLead()) {
          let { onExitComplete: t } = e.options;
          t && t();
        }
        e.options.transition = void 0;
      }
      function r4(e) {
        r0.totalNodes++,
          e.parent &&
            (e.isProjecting() ||
              (e.isProjectionDirty = e.parent.isProjectionDirty),
            e.isSharedProjectionDirty ||
              (e.isSharedProjectionDirty = !!(
                e.isProjectionDirty ||
                e.parent.isProjectionDirty ||
                e.parent.isSharedProjectionDirty
              )),
            e.isTransformDirty ||
              (e.isTransformDirty = e.parent.isTransformDirty));
      }
      function r3(e) {
        e.isProjectionDirty =
          e.isSharedProjectionDirty =
          e.isTransformDirty =
            !1;
      }
      function r7(e) {
        e.clearSnapshot();
      }
      function r6(e) {
        e.clearMeasurements();
      }
      function r9(e) {
        e.isLayoutDirty = !1;
      }
      function r8(e) {
        let { visualElement: t } = e.options;
        t &&
          t.getProps().onBeforeLayoutMeasure &&
          t.notify("BeforeLayoutMeasure"),
          e.resetTransform();
      }
      function ie(e) {
        e.finishAnimation(),
          (e.targetDelta = e.relativeTarget = e.target = void 0),
          (e.isProjectionDirty = !0);
      }
      function it(e) {
        e.resolveTargetDelta();
      }
      function ir(e) {
        e.calcProjection();
      }
      function ii(e) {
        e.resetRotation();
      }
      function io(e) {
        e.removeLeadSnapshot();
      }
      function is(e, t, n) {
        (e.translate = tM(t.translate, 0, n)),
          (e.scale = tM(t.scale, 1, n)),
          (e.origin = t.origin),
          (e.originPoint = t.originPoint);
      }
      function ia(e, t, n, r) {
        (e.min = tM(t.min, n.min, r)), (e.max = tM(t.max, n.max, r));
      }
      function il(e) {
        return e.animationValues && void 0 !== e.animationValues.opacityExit;
      }
      let iu = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
        ic = (e) =>
          "undefined" != typeof navigator &&
          navigator.userAgent.toLowerCase().includes(e),
        id = ic("applewebkit/") && !ic("chrome/") ? Math.round : eX.Z;
      function ih(e) {
        (e.min = id(e.min)), (e.max = id(e.max));
      }
      function ip(e, t, n) {
        return (
          "position" === e ||
          ("preserve-aspect" === e && !nX(rZ(t), rZ(n), 0.2))
        );
      }
      let im = r1({
          attachResizeListener: (e, t) => ej(e, "resize", t),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
          }),
          checkIsScrollRoot: () => !0,
        }),
        iv = { current: void 0 },
        ig = r1({
          measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
          defaultParent: () => {
            if (!iv.current) {
              let e = new im({});
              e.mount(window),
                e.setOptions({ layoutScroll: !0 }),
                (iv.current = e);
            }
            return iv.current;
          },
          resetTransform: (e, t) => {
            e.style.transform = void 0 !== t ? t : "none";
          },
          checkIsScrollRoot: (e) =>
            "fixed" === window.getComputedStyle(e).position,
        }),
        iy = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
      function ib(e, t, n = 1) {
        (0, e7.k)(
          n <= 4,
          `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`
        );
        let [r, i] = (function (e) {
          let t = iy.exec(e);
          if (!t) return [,];
          let [, n, r] = t;
          return [n, r];
        })(e);
        if (!r) return;
        let o = window.getComputedStyle(t).getPropertyValue(r);
        if (o) {
          let e = o.trim();
          return nP(e) ? parseFloat(e) : e;
        }
        return N(i) ? ib(i, t, n + 1) : i;
      }
      let iP = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "x",
          "y",
          "translateX",
          "translateY",
        ]),
        ix = (e) => iP.has(e),
        iw = (e) => Object.keys(e).some(ix),
        iE = (e) => e === U || e === J,
        iT = (e, t) => parseFloat(e.split(", ")[t]),
        iS =
          (e, t) =>
          (n, { transform: r }) => {
            if ("none" === r || !r) return 0;
            let i = r.match(/^matrix3d\((.+)\)$/);
            if (i) return iT(i[1], t);
            {
              let t = r.match(/^matrix\((.+)\)$/);
              return t ? iT(t[1], e) : 0;
            }
          },
        iC = new Set(["x", "y", "z"]),
        iM = R.filter((e) => !iC.has(e)),
        iA = {
          width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
            e.max - e.min - parseFloat(t) - parseFloat(n),
          height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
            e.max - e.min - parseFloat(t) - parseFloat(n),
          top: (e, { top: t }) => parseFloat(t),
          left: (e, { left: t }) => parseFloat(t),
          bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
          right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
          x: iS(4, 13),
          y: iS(5, 14),
        };
      (iA.translateX = iA.x), (iA.translateY = iA.y);
      let iO = (e, t, n) => {
          let r = t.measureViewportBox(),
            i = t.current,
            o = getComputedStyle(i),
            { display: s } = o,
            a = {};
          "none" === s && t.setStaticValue("display", e.display || "block"),
            n.forEach((e) => {
              a[e] = iA[e](r, o);
            }),
            t.render();
          let l = t.measureViewportBox();
          return (
            n.forEach((n) => {
              let r = t.getValue(n);
              r && r.jump(a[n]), (e[n] = iA[n](l, o));
            }),
            e
          );
        },
        ik = (e, t, n = {}, r = {}) => {
          (t = { ...t }), (r = { ...r });
          let i = Object.keys(t).filter(ix),
            o = [],
            s = !1,
            a = [];
          if (
            (i.forEach((i) => {
              let l;
              let u = e.getValue(i);
              if (!e.hasValue(i)) return;
              let c = n[i],
                d = nk(c),
                f = t[i];
              if (eT(f)) {
                let e = f.length,
                  t = null === f[0] ? 1 : 0;
                d = nk((c = f[t]));
                for (let n = t; n < e && null !== f[n]; n++)
                  l
                    ? (0, e7.k)(
                        nk(f[n]) === l,
                        "All keyframes must be of the same type"
                      )
                    : ((l = nk(f[n])),
                      (0, e7.k)(
                        l === d || (iE(d) && iE(l)),
                        "Keyframes must be of the same dimension as the current value"
                      ));
              } else l = nk(f);
              if (d !== l) {
                if (iE(d) && iE(l)) {
                  let e = u.get();
                  "string" == typeof e && u.set(parseFloat(e)),
                    "string" == typeof f
                      ? (t[i] = parseFloat(f))
                      : Array.isArray(f) &&
                        l === J &&
                        (t[i] = f.map(parseFloat));
                } else
                  (null == d ? void 0 : d.transform) &&
                  (null == l ? void 0 : l.transform) &&
                  (0 === c || 0 === f)
                    ? 0 === c
                      ? u.set(l.transform(c))
                      : (t[i] = d.transform(f))
                    : (s ||
                        ((o = (function (e) {
                          let t = [];
                          return (
                            iM.forEach((n) => {
                              let r = e.getValue(n);
                              void 0 !== r &&
                                (t.push([n, r.get()]),
                                r.set(n.startsWith("scale") ? 1 : 0));
                            }),
                            t.length && e.render(),
                            t
                          );
                        })(e)),
                        (s = !0)),
                      a.push(i),
                      (r[i] = void 0 !== r[i] ? r[i] : t[i]),
                      u.jump(f));
              }
            }),
            !a.length)
          )
            return { target: t, transitionEnd: r };
          {
            let n = a.indexOf("height") >= 0 ? window.pageYOffset : null,
              i = iO(t, e, a);
            return (
              o.length &&
                o.forEach(([t, n]) => {
                  e.getValue(t).set(n);
                }),
              e.render(),
              T.j && null !== n && window.scrollTo({ top: n }),
              { target: i, transitionEnd: r }
            );
          }
        },
        iR = (e, t, n, r) => {
          var i, o;
          let s = (function (e, { ...t }, n) {
            let r = e.current;
            if (!(r instanceof Element)) return { target: t, transitionEnd: n };
            for (let i in (n && (n = { ...n }),
            e.values.forEach((e) => {
              let t = e.get();
              if (!N(t)) return;
              let n = ib(t, r);
              n && e.set(n);
            }),
            t)) {
              let e = t[i];
              if (!N(e)) continue;
              let o = ib(e, r);
              o && ((t[i] = o), n || (n = {}), void 0 === n[i] && (n[i] = e));
            }
            return { target: t, transitionEnd: n };
          })(e, t, r);
          return (
            (t = s.target),
            (r = s.transitionEnd),
            (i = t),
            (o = r),
            iw(i) ? ik(e, i, n, o) : { target: i, transitionEnd: o }
          );
        },
        ij = { current: null },
        iD = { current: !1 },
        iL = new WeakMap(),
        iV = Object.keys(E),
        i_ = iV.length,
        iF = [
          "AnimationStart",
          "AnimationComplete",
          "Update",
          "BeforeLayoutMeasure",
          "LayoutMeasure",
          "LayoutAnimationStart",
          "LayoutAnimationComplete",
        ],
        iI = y.length;
      class iN {
        constructor(
          {
            parent: e,
            props: t,
            presenceContext: n,
            reducedMotionConfig: r,
            visualState: i,
          },
          o = {}
        ) {
          (this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () =>
              this.notify("Update", this.latestValues)),
            (this.render = () => {
              this.current &&
                (this.triggerBuild(),
                this.renderInstance(
                  this.current,
                  this.renderState,
                  this.props.style,
                  this.projection
                ));
            }),
            (this.scheduleRender = () => eO.Wi.render(this.render, !1, !0));
          let { latestValues: s, renderState: a } = i;
          (this.latestValues = s),
            (this.baseTarget = { ...s }),
            (this.initialValues = t.initial ? { ...s } : {}),
            (this.renderState = a),
            (this.parent = e),
            (this.props = t),
            (this.presenceContext = n),
            (this.depth = e ? e.depth + 1 : 0),
            (this.reducedMotionConfig = r),
            (this.options = o),
            (this.isControllingVariants = b(t)),
            (this.isVariantNode = P(t)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(e && e.current));
          let { willChange: l, ...u } = this.scrapeMotionValuesFromProps(t, {});
          for (let e in u) {
            let t = u[e];
            void 0 !== s[e] && L(t) && (t.set(s[e], !1), nb(l) && l.add(e));
          }
        }
        scrapeMotionValuesFromProps(e, t) {
          return {};
        }
        mount(e) {
          (this.current = e),
            iL.set(e, this),
            this.projection &&
              !this.projection.instance &&
              this.projection.mount(e),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((e, t) => this.bindToMotionValue(t, e)),
            iD.current ||
              (function () {
                if (((iD.current = !0), T.j)) {
                  if (window.matchMedia) {
                    let e = window.matchMedia("(prefers-reduced-motion)"),
                      t = () => (ij.current = e.matches);
                    e.addListener(t), t();
                  } else ij.current = !1;
                }
              })(),
            (this.shouldReduceMotion =
              "never" !== this.reducedMotionConfig &&
              ("always" === this.reducedMotionConfig || ij.current)),
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext);
        }
        unmount() {
          for (let e in (iL.delete(this.current),
          this.projection && this.projection.unmount(),
          (0, eO.Pn)(this.notifyUpdate),
          (0, eO.Pn)(this.render),
          this.valueSubscriptions.forEach((e) => e()),
          this.removeFromVariantTree && this.removeFromVariantTree(),
          this.parent && this.parent.children.delete(this),
          this.events))
            this.events[e].clear();
          for (let e in this.features) this.features[e].unmount();
          this.current = null;
        }
        bindToMotionValue(e, t) {
          let n = j.has(e),
            r = t.on("change", (t) => {
              (this.latestValues[e] = t),
                this.props.onUpdate && eO.Wi.update(this.notifyUpdate, !1, !0),
                n && this.projection && (this.projection.isTransformDirty = !0);
            }),
            i = t.on("renderRequest", this.scheduleRender);
          this.valueSubscriptions.set(e, () => {
            r(), i();
          });
        }
        sortNodePosition(e) {
          return this.current &&
            this.sortInstanceNodePosition &&
            this.type === e.type
            ? this.sortInstanceNodePosition(this.current, e.current)
            : 0;
        }
        loadFeatures({ children: e, ...t }, n, r, i) {
          let o, s;
          for (let e = 0; e < i_; e++) {
            let n = iV[e],
              {
                isEnabled: r,
                Feature: i,
                ProjectionNode: a,
                MeasureLayout: l,
              } = E[n];
            a && (o = a),
              r(t) &&
                (!this.features[n] && i && (this.features[n] = new i(this)),
                l && (s = l));
          }
          if (
            ("html" === this.type || "svg" === this.type) &&
            !this.projection &&
            o
          ) {
            this.projection = new o(
              this.latestValues,
              this.parent && this.parent.projection
            );
            let {
              layoutId: e,
              layout: n,
              drag: r,
              dragConstraints: s,
              layoutScroll: a,
              layoutRoot: l,
            } = t;
            this.projection.setOptions({
              layoutId: e,
              layout: n,
              alwaysMeasureLayout: !!r || (s && p(s)),
              visualElement: this,
              scheduleRender: () => this.scheduleRender(),
              animationType: "string" == typeof n ? n : "both",
              initialPromotionConfig: i,
              layoutScroll: a,
              layoutRoot: l,
            });
          }
          return s;
        }
        updateFeatures() {
          for (let e in this.features) {
            let t = this.features[e];
            t.isMounted ? t.update() : (t.mount(), (t.isMounted = !0));
          }
        }
        triggerBuild() {
          this.build(
            this.renderState,
            this.latestValues,
            this.options,
            this.props
          );
        }
        measureViewportBox() {
          return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : n9();
        }
        getStaticValue(e) {
          return this.latestValues[e];
        }
        setStaticValue(e, t) {
          this.latestValues[e] = t;
        }
        makeTargetAnimatable(e, t = !0) {
          return this.makeTargetAnimatableFromInstance(e, this.props, t);
        }
        update(e, t) {
          (e.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = e),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = t);
          for (let t = 0; t < iF.length; t++) {
            let n = iF[t];
            this.propEventSubscriptions[n] &&
              (this.propEventSubscriptions[n](),
              delete this.propEventSubscriptions[n]);
            let r = e["on" + n];
            r && (this.propEventSubscriptions[n] = this.on(n, r));
          }
          (this.prevMotionValues = (function (e, t, n) {
            let { willChange: r } = t;
            for (let i in t) {
              let o = t[i],
                s = n[i];
              if (L(o)) e.addValue(i, o), nb(r) && r.add(i);
              else if (L(s))
                e.addValue(i, nM(o, { owner: e })), nb(r) && r.remove(i);
              else if (s !== o) {
                if (e.hasValue(i)) {
                  let t = e.getValue(i);
                  t.hasAnimated || t.set(o);
                } else {
                  let t = e.getStaticValue(i);
                  e.addValue(i, nM(void 0 !== t ? t : o, { owner: e }));
                }
              }
            }
            for (let r in n) void 0 === t[r] && e.removeValue(r);
            return t;
          })(
            this,
            this.scrapeMotionValuesFromProps(e, this.prevProps),
            this.prevMotionValues
          )),
            this.handleChildMotionValue && this.handleChildMotionValue();
        }
        getProps() {
          return this.props;
        }
        getVariant(e) {
          return this.props.variants ? this.props.variants[e] : void 0;
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
          return this.isVariantNode
            ? this
            : this.parent
            ? this.parent.getClosestVariantNode()
            : void 0;
        }
        getVariantContext(e = !1) {
          if (e) return this.parent ? this.parent.getVariantContext() : void 0;
          if (!this.isControllingVariants) {
            let e = (this.parent && this.parent.getVariantContext()) || {};
            return (
              void 0 !== this.props.initial && (e.initial = this.props.initial),
              e
            );
          }
          let t = {};
          for (let e = 0; e < iI; e++) {
            let n = y[e],
              r = this.props[n];
            (m(r) || !1 === r) && (t[n] = r);
          }
          return t;
        }
        addVariantChild(e) {
          let t = this.getClosestVariantNode();
          if (t)
            return (
              t.variantChildren && t.variantChildren.add(e),
              () => t.variantChildren.delete(e)
            );
        }
        addValue(e, t) {
          t !== this.values.get(e) &&
            (this.removeValue(e), this.bindToMotionValue(e, t)),
            this.values.set(e, t),
            (this.latestValues[e] = t.get());
        }
        removeValue(e) {
          this.values.delete(e);
          let t = this.valueSubscriptions.get(e);
          t && (t(), this.valueSubscriptions.delete(e)),
            delete this.latestValues[e],
            this.removeValueFromRenderState(e, this.renderState);
        }
        hasValue(e) {
          return this.values.has(e);
        }
        getValue(e, t) {
          if (this.props.values && this.props.values[e])
            return this.props.values[e];
          let n = this.values.get(e);
          return (
            void 0 === n &&
              void 0 !== t &&
              ((n = nM(t, { owner: this })), this.addValue(e, n)),
            n
          );
        }
        readValue(e) {
          var t;
          return void 0 === this.latestValues[e] && this.current
            ? null !== (t = this.getBaseTargetFromProps(this.props, e)) &&
              void 0 !== t
              ? t
              : this.readValueFromInstance(this.current, e, this.options)
            : this.latestValues[e];
        }
        setBaseTarget(e, t) {
          this.baseTarget[e] = t;
        }
        getBaseTarget(e) {
          var t;
          let { initial: n } = this.props,
            r =
              "string" == typeof n || "object" == typeof n
                ? null === (t = ew(this.props, n)) || void 0 === t
                  ? void 0
                  : t[e]
                : void 0;
          if (n && void 0 !== r) return r;
          let i = this.getBaseTargetFromProps(this.props, e);
          return void 0 === i || L(i)
            ? void 0 !== this.initialValues[e] && void 0 === r
              ? void 0
              : this.baseTarget[e]
            : i;
        }
        on(e, t) {
          return (
            this.events[e] || (this.events[e] = new nE()), this.events[e].add(t)
          );
        }
        notify(e, ...t) {
          this.events[e] && this.events[e].notify(...t);
        }
      }
      class iB extends iN {
        sortInstanceNodePosition(e, t) {
          return 2 & e.compareDocumentPosition(t) ? 1 : -1;
        }
        getBaseTargetFromProps(e, t) {
          return e.style ? e.style[t] : void 0;
        }
        removeValueFromRenderState(e, { vars: t, style: n }) {
          delete t[e], delete n[e];
        }
        makeTargetAnimatableFromInstance(
          { transition: e, transitionEnd: t, ...n },
          { transformValues: r },
          i
        ) {
          let o = (function (e, t, n) {
            let r = {};
            for (let i in e) {
              let e = (function (e, t) {
                if (t) return (t[e] || t.default || t).from;
              })(i, t);
              if (void 0 !== e) r[i] = e;
              else {
                let e = n.getValue(i);
                e && (r[i] = e.get());
              }
            }
            return r;
          })(n, e || {}, this);
          if ((r && (t && (t = r(t)), n && (n = r(n)), o && (o = r(o))), i)) {
            !(function (e, t, n) {
              var r, i;
              let o = Object.keys(t).filter((t) => !e.hasValue(t)),
                s = o.length;
              if (s)
                for (let a = 0; a < s; a++) {
                  let s = o[a],
                    l = t[s],
                    u = null;
                  Array.isArray(l) && (u = l[0]),
                    null === u &&
                      (u =
                        null !==
                          (i =
                            null !== (r = n[s]) && void 0 !== r
                              ? r
                              : e.readValue(s)) && void 0 !== i
                          ? i
                          : t[s]),
                    null != u &&
                      ("string" == typeof u && (nP(u) || nm(u))
                        ? (u = parseFloat(u))
                        : !nj(u) && tU.test(l) && (u = np(s, l)),
                      e.addValue(s, nM(u, { owner: e })),
                      void 0 === n[s] && (n[s] = u),
                      null !== u && e.setBaseTarget(s, u));
                }
            })(this, n, o);
            let e = iR(this, n, o, t);
            (t = e.transitionEnd), (n = e.target);
          }
          return { transition: e, transitionEnd: t, ...n };
        }
      }
      class iH extends iB {
        constructor() {
          super(...arguments), (this.type = "html");
        }
        readValueFromInstance(e, t) {
          if (j.has(t)) {
            let e = nh(t);
            return (e && e.default) || 0;
          }
          {
            let n = window.getComputedStyle(e),
              r = (I(t) ? n.getPropertyValue(t) : n[t]) || 0;
            return "string" == typeof r ? r.trim() : r;
          }
        }
        measureInstanceViewportBox(e, { transformPagePoint: t }) {
          return rp(e, t);
        }
        build(e, t, n, r) {
          eo(e, t, n, r.transformTemplate);
        }
        scrapeMotionValuesFromProps(e, t) {
          return eP(e, t);
        }
        handleChildMotionValue() {
          this.childSubscription &&
            (this.childSubscription(), delete this.childSubscription);
          let { children: e } = this.props;
          L(e) &&
            (this.childSubscription = e.on("change", (e) => {
              this.current && (this.current.textContent = `${e}`);
            }));
        }
        renderInstance(e, t, n, r) {
          eg(e, t, n, r);
        }
      }
      class iU extends iB {
        constructor() {
          super(...arguments), (this.type = "svg"), (this.isSVGTag = !1);
        }
        getBaseTargetFromProps(e, t) {
          return e[t];
        }
        readValueFromInstance(e, t) {
          if (j.has(t)) {
            let e = nh(t);
            return (e && e.default) || 0;
          }
          return (t = ey.has(t) ? t : f(t)), e.getAttribute(t);
        }
        measureInstanceViewportBox() {
          return n9();
        }
        scrapeMotionValuesFromProps(e, t) {
          return ex(e, t);
        }
        build(e, t, n, r) {
          ep(e, t, n, this.isSVGTag, r.transformTemplate);
        }
        renderInstance(e, t, n, r) {
          eb(e, t, n, r);
        }
        mount(e) {
          (this.isSVGTag = ev(e.tagName)), super.mount(e);
        }
      }
      let iW = (e, t) =>
          O(e)
            ? new iU(t, { enableHardwareAcceleration: !1 })
            : new iH(t, { enableHardwareAcceleration: !0 }),
        iz = {
          animation: { Feature: nN },
          exit: { Feature: nH },
          inView: { Feature: e5 },
          tap: { Feature: eK },
          focus: { Feature: eY },
          hover: { Feature: eZ },
          pan: { Feature: rx },
          drag: { Feature: rb, ProjectionNode: ig, MeasureLayout: rC },
          layout: { ProjectionNode: ig, MeasureLayout: rC },
        },
        i$ = (function (e) {
          function t(t, n = {}) {
            return (function ({
              preloadedFeatures: e,
              createVisualElement: t,
              useRender: n,
              useVisualState: r,
              Component: i,
            }) {
              e &&
                (function (e) {
                  for (let t in e) E[t] = { ...E[t], ...e[t] };
                })(e);
              let o = (0, s.forwardRef)(function (o, f) {
                var v;
                let g;
                let y = {
                    ...(0, s.useContext)(a),
                    ...o,
                    layoutId: (function ({ layoutId: e }) {
                      let t = (0, s.useContext)(S.p).id;
                      return t && void 0 !== e ? t + "-" + e : e;
                    })(o),
                  },
                  { isStatic: P } = y,
                  w = (function (e) {
                    let { initial: t, animate: n } = (function (e, t) {
                      if (b(e)) {
                        let { initial: t, animate: n } = e;
                        return {
                          initial: !1 === t || m(t) ? t : void 0,
                          animate: m(n) ? n : void 0,
                        };
                      }
                      return !1 !== e.inherit ? t : {};
                    })(e, (0, s.useContext)(l));
                    return (0, s.useMemo)(
                      () => ({ initial: t, animate: n }),
                      [x(t), x(n)]
                    );
                  })(o),
                  E = r(o, P);
                if (!P && T.j) {
                  w.visualElement = (function (e, t, n, r) {
                    let { visualElement: i } = (0, s.useContext)(l),
                      o = (0, s.useContext)(d),
                      f = (0, s.useContext)(u.O),
                      p = (0, s.useContext)(a).reducedMotion,
                      m = (0, s.useRef)();
                    (r = r || o.renderer),
                      !m.current &&
                        r &&
                        (m.current = r(e, {
                          visualState: t,
                          parent: i,
                          props: n,
                          presenceContext: f,
                          blockInitialAnimation: !!f && !1 === f.initial,
                          reducedMotionConfig: p,
                        }));
                    let v = m.current;
                    (0, s.useInsertionEffect)(() => {
                      v && v.update(n, f);
                    });
                    let g = (0, s.useRef)(!!(n[h] && !window.HandoffComplete));
                    return (
                      (0, c.L)(() => {
                        v &&
                          (v.render(),
                          g.current &&
                            v.animationState &&
                            v.animationState.animateChanges());
                      }),
                      (0, s.useEffect)(() => {
                        v &&
                          (v.updateFeatures(),
                          !g.current &&
                            v.animationState &&
                            v.animationState.animateChanges(),
                          g.current &&
                            ((g.current = !1), (window.HandoffComplete = !0)));
                      }),
                      v
                    );
                  })(i, E, y, t);
                  let n = (0, s.useContext)(C),
                    r = (0, s.useContext)(d).strict;
                  w.visualElement &&
                    (g = w.visualElement.loadFeatures(y, r, e, n));
                }
                return s.createElement(
                  l.Provider,
                  { value: w },
                  g && w.visualElement
                    ? s.createElement(g, {
                        visualElement: w.visualElement,
                        ...y,
                      })
                    : null,
                  n(
                    i,
                    o,
                    ((v = w.visualElement),
                    (0, s.useCallback)(
                      (e) => {
                        e && E.mount && E.mount(e),
                          v && (e ? v.mount(e) : v.unmount()),
                          f &&
                            ("function" == typeof f
                              ? f(e)
                              : p(f) && (f.current = e));
                      },
                      [v]
                    )),
                    E,
                    P,
                    w.visualElement
                  )
                );
              });
              return (o[M] = i), o;
            })(e(t, n));
          }
          if ("undefined" == typeof Proxy) return t;
          let n = new Map();
          return new Proxy(t, {
            get: (e, r) => (n.has(r) || n.set(r, t(r)), n.get(r)),
          });
        })((e, t) =>
          (function (e, { forwardMotionProps: t = !1 }, n, r) {
            return {
              ...(O(e) ? ek : eR),
              preloadedFeatures: n,
              useRender: (function (e = !1) {
                return (t, n, r, { latestValues: i }, o) => {
                  let a = (
                      O(t)
                        ? function (e, t, n, r) {
                            let i = (0, s.useMemo)(() => {
                              let n = em();
                              return (
                                ep(
                                  n,
                                  t,
                                  { enableHardwareAcceleration: !1 },
                                  ev(r),
                                  e.transformTemplate
                                ),
                                { ...n.attrs, style: { ...n.style } }
                              );
                            }, [t]);
                            if (e.style) {
                              let t = {};
                              ea(t, e.style, e),
                                (i.style = { ...t, ...i.style });
                            }
                            return i;
                          }
                        : function (e, t, n) {
                            let r = {},
                              i = (function (e, t, n) {
                                let r = e.style || {},
                                  i = {};
                                return (
                                  ea(i, r, e),
                                  Object.assign(
                                    i,
                                    (function ({ transformTemplate: e }, t, n) {
                                      return (0, s.useMemo)(() => {
                                        let r = es();
                                        return (
                                          eo(
                                            r,
                                            t,
                                            { enableHardwareAcceleration: !n },
                                            e
                                          ),
                                          Object.assign({}, r.vars, r.style)
                                        );
                                      }, [t]);
                                    })(e, t, n)
                                  ),
                                  e.transformValues ? e.transformValues(i) : i
                                );
                              })(e, t, n);
                            return (
                              e.drag &&
                                !1 !== e.dragListener &&
                                ((r.draggable = !1),
                                (i.userSelect =
                                  i.WebkitUserSelect =
                                  i.WebkitTouchCallout =
                                    "none"),
                                (i.touchAction =
                                  !0 === e.drag
                                    ? "none"
                                    : `pan-${"x" === e.drag ? "y" : "x"}`)),
                              void 0 === e.tabIndex &&
                                (e.onTap || e.onTapStart || e.whileTap) &&
                                (r.tabIndex = 0),
                              (r.style = i),
                              r
                            );
                          }
                    )(n, i, o, t),
                    l = {
                      ...(function (e, t, n) {
                        let r = {};
                        for (let i in e)
                          ("values" !== i || "object" != typeof e.values) &&
                            (ec(i) ||
                              (!0 === n && eu(i)) ||
                              (!t && !eu(i)) ||
                              (e.draggable && i.startsWith("onDrag"))) &&
                            (r[i] = e[i]);
                        return r;
                      })(n, "string" == typeof t, e),
                      ...a,
                      ref: r,
                    },
                    { children: u } = n,
                    c = (0, s.useMemo)(() => (L(u) ? u.get() : u), [u]);
                  return (0, s.createElement)(t, { ...l, children: c });
                };
              })(t),
              createVisualElement: r,
              Component: e,
            };
          })(e, t, iz, iW)
        );
    },
    57035: function (e, t, n) {
      "use strict";
      n.d(t, {
        K: function () {
          return i;
        },
        k: function () {
          return o;
        },
      });
      var r = n(50065);
      let i = r.Z,
        o = r.Z;
    },
    33791: function (e, t, n) {
      "use strict";
      n.d(t, {
        j: function () {
          return r;
        },
      });
      let r = "undefined" != typeof document;
    },
    50065: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (e) => e;
    },
    3105: function (e, t, n) {
      "use strict";
      n.d(t, {
        h: function () {
          return i;
        },
      });
      var r = n(2784);
      function i(e) {
        let t = (0, r.useRef)(null);
        return null === t.current && (t.current = e()), t.current;
      }
    },
    23617: function (e, t, n) {
      "use strict";
      n.d(t, {
        L: function () {
          return i;
        },
      });
      var r = n(2784);
      let i = n(33791).j ? r.useLayoutEffect : r.useEffect;
    },
  },
]);
