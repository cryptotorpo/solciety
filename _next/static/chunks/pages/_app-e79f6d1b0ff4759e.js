(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2888],
  {
    6277: function (e, t, n) {
      "use strict";
      function r() {
        for (var e, t, n = 0, r = ""; n < arguments.length; )
          (e = arguments[n++]) &&
            (t = (function e(t) {
              var n,
                r,
                o = "";
              if ("string" == typeof t || "number" == typeof t) o += t;
              else if ("object" == typeof t) {
                if (Array.isArray(t))
                  for (n = 0; n < t.length; n++)
                    t[n] && (r = e(t[n])) && (o && (o += " "), (o += r));
                else for (n in t) t[n] && (o && (o += " "), (o += n));
              }
              return o;
            })(e)) &&
            (r && (r += " "), (r += t));
        return r;
      }
      n.r(t),
        n.d(t, {
          clsx: function () {
            return r;
          },
        }),
        (t.default = r);
    },
    73463: function (e, t, n) {
      "use strict";
      var r = n(73887),
        o = {
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
          type: !0,
        },
        i = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0,
        },
        s = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0,
        },
        a = {};
      function l(e) {
        return r.isMemo(e) ? s : a[e.$$typeof] || o;
      }
      (a[r.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
      }),
        (a[r.Memo] = s);
      var u = Object.defineProperty,
        c = Object.getOwnPropertyNames,
        d = Object.getOwnPropertySymbols,
        p = Object.getOwnPropertyDescriptor,
        f = Object.getPrototypeOf,
        g = Object.prototype;
      e.exports = function e(t, n, r) {
        if ("string" != typeof n) {
          if (g) {
            var o = f(n);
            o && o !== g && e(t, o, r);
          }
          var s = c(n);
          d && (s = s.concat(d(n)));
          for (var a = l(t), h = l(n), m = 0; m < s.length; ++m) {
            var y = s[m];
            if (!i[y] && !(r && r[y]) && !(h && h[y]) && !(a && a[y])) {
              var v = p(n, y);
              try {
                u(t, y, v);
              } catch (e) {}
            }
          }
        }
        return t;
      };
    },
    43459: function (e, t) {
      "use strict";
      /** @license React v16.13.1
       * react-is.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var n = "function" == typeof Symbol && Symbol.for,
        r = n ? Symbol.for("react.element") : 60103,
        o = n ? Symbol.for("react.portal") : 60106,
        i = n ? Symbol.for("react.fragment") : 60107,
        s = n ? Symbol.for("react.strict_mode") : 60108,
        a = n ? Symbol.for("react.profiler") : 60114,
        l = n ? Symbol.for("react.provider") : 60109,
        u = n ? Symbol.for("react.context") : 60110,
        c = n ? Symbol.for("react.async_mode") : 60111,
        d = n ? Symbol.for("react.concurrent_mode") : 60111,
        p = n ? Symbol.for("react.forward_ref") : 60112,
        f = n ? Symbol.for("react.suspense") : 60113,
        g = n ? Symbol.for("react.suspense_list") : 60120,
        h = n ? Symbol.for("react.memo") : 60115,
        m = n ? Symbol.for("react.lazy") : 60116,
        y = n ? Symbol.for("react.block") : 60121,
        v = n ? Symbol.for("react.fundamental") : 60117,
        b = n ? Symbol.for("react.responder") : 60118,
        S = n ? Symbol.for("react.scope") : 60119;
      function x(e) {
        if ("object" == typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case r:
              switch ((e = e.type)) {
                case c:
                case d:
                case i:
                case a:
                case s:
                case f:
                  return e;
                default:
                  switch ((e = e && e.$$typeof)) {
                    case u:
                    case p:
                    case m:
                    case h:
                    case l:
                      return e;
                    default:
                      return t;
                  }
              }
            case o:
              return t;
          }
        }
      }
      function O(e) {
        return x(e) === d;
      }
      (t.AsyncMode = c),
        (t.ConcurrentMode = d),
        (t.ContextConsumer = u),
        (t.ContextProvider = l),
        (t.Element = r),
        (t.ForwardRef = p),
        (t.Fragment = i),
        (t.Lazy = m),
        (t.Memo = h),
        (t.Portal = o),
        (t.Profiler = a),
        (t.StrictMode = s),
        (t.Suspense = f),
        (t.isAsyncMode = function (e) {
          return O(e) || x(e) === c;
        }),
        (t.isConcurrentMode = O),
        (t.isContextConsumer = function (e) {
          return x(e) === u;
        }),
        (t.isContextProvider = function (e) {
          return x(e) === l;
        }),
        (t.isElement = function (e) {
          return "object" == typeof e && null !== e && e.$$typeof === r;
        }),
        (t.isForwardRef = function (e) {
          return x(e) === p;
        }),
        (t.isFragment = function (e) {
          return x(e) === i;
        }),
        (t.isLazy = function (e) {
          return x(e) === m;
        }),
        (t.isMemo = function (e) {
          return x(e) === h;
        }),
        (t.isPortal = function (e) {
          return x(e) === o;
        }),
        (t.isProfiler = function (e) {
          return x(e) === a;
        }),
        (t.isStrictMode = function (e) {
          return x(e) === s;
        }),
        (t.isSuspense = function (e) {
          return x(e) === f;
        }),
        (t.isValidElementType = function (e) {
          return (
            "string" == typeof e ||
            "function" == typeof e ||
            e === i ||
            e === d ||
            e === a ||
            e === s ||
            e === f ||
            e === g ||
            ("object" == typeof e &&
              null !== e &&
              (e.$$typeof === m ||
                e.$$typeof === h ||
                e.$$typeof === l ||
                e.$$typeof === u ||
                e.$$typeof === p ||
                e.$$typeof === v ||
                e.$$typeof === b ||
                e.$$typeof === S ||
                e.$$typeof === y))
          );
        }),
        (t.typeOf = x);
    },
    73887: function (e, t, n) {
      "use strict";
      e.exports = n(43459);
    },
    20034: function (e, t, n) {
      "use strict";
      let r;
      n.d(t, {
        Jc: function () {
          return eP;
        },
        $G: function () {
          return v;
        },
      });
      var o = n(2784);
      n(64896), Object.create(null);
      let i = {};
      function s() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        ("string" == typeof t[0] && i[t[0]]) ||
          ("string" == typeof t[0] && (i[t[0]] = new Date()),
          (function () {
            if (console && console.warn) {
              for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
              "string" == typeof t[0] && (t[0] = `react-i18next:: ${t[0]}`),
                console.warn(...t);
            }
          })(...t));
      }
      let a = (e, t) => () => {
        if (e.isInitialized) t();
        else {
          let n = () => {
            setTimeout(() => {
              e.off("initialized", n);
            }, 0),
              t();
          };
          e.on("initialized", n);
        }
      };
      function l(e, t, n) {
        e.loadNamespaces(t, a(e, n));
      }
      function u(e, t, n, r) {
        "string" == typeof n && (n = [n]),
          n.forEach((t) => {
            0 > e.options.ns.indexOf(t) && e.options.ns.push(t);
          }),
          e.loadLanguages(t, a(e, r));
      }
      let c =
          /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
        d = {
          "&amp;": "&",
          "&#38;": "&",
          "&lt;": "<",
          "&#60;": "<",
          "&gt;": ">",
          "&#62;": ">",
          "&apos;": "'",
          "&#39;": "'",
          "&quot;": '"',
          "&#34;": '"',
          "&nbsp;": " ",
          "&#160;": " ",
          "&copy;": "\xa9",
          "&#169;": "\xa9",
          "&reg;": "\xae",
          "&#174;": "\xae",
          "&hellip;": "…",
          "&#8230;": "…",
          "&#x2F;": "/",
          "&#47;": "/",
        },
        p = (e) => d[e],
        f = {
          bindI18n: "languageChanged",
          bindI18nStore: "",
          transEmptyNodeValue: "",
          transSupportBasicHtmlNodes: !0,
          transWrapTextNodes: "",
          transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
          useSuspense: !0,
          unescape: (e) => e.replace(c, p),
        },
        g = (0, o.createContext)();
      class h {
        constructor() {
          this.usedNamespaces = {};
        }
        addUsedNamespaces(e) {
          e.forEach((e) => {
            this.usedNamespaces[e] || (this.usedNamespaces[e] = !0);
          });
        }
        getUsedNamespaces() {
          return Object.keys(this.usedNamespaces);
        }
      }
      let m = (e, t) => {
        let n = (0, o.useRef)();
        return (
          (0, o.useEffect)(() => {
            n.current = t ? n.current : e;
          }, [e, t]),
          n.current
        );
      };
      function y(e, t, n, r) {
        return e.getFixedT(t, n, r);
      }
      function v(e) {
        var t, n;
        let i =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          { i18n: a } = i,
          { i18n: c, defaultNS: d } = (0, o.useContext)(g) || {},
          p = a || c || r;
        if ((p && !p.reportNamespaces && (p.reportNamespaces = new h()), !p)) {
          s(
            "You will need to pass in an i18next instance by using initReactI18next"
          );
          let e = (e, t) =>
              "string" == typeof t
                ? t
                : t && "object" == typeof t && "string" == typeof t.defaultValue
                ? t.defaultValue
                : Array.isArray(e)
                ? e[e.length - 1]
                : e,
            t = [e, {}, !1];
          return (t.t = e), (t.i18n = {}), (t.ready = !1), t;
        }
        p.options.react &&
          void 0 !== p.options.react.wait &&
          s(
            "It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour."
          );
        let v = { ...f, ...p.options.react, ...i },
          { useSuspense: b, keyPrefix: S } = v,
          x = e || d || (p.options && p.options.defaultNS);
        (x = "string" == typeof x ? [x] : x || ["translation"]),
          p.reportNamespaces.addUsedNamespaces &&
            p.reportNamespaces.addUsedNamespaces(x);
        let O =
            (p.isInitialized || p.initializedStoreOnce) &&
            x.every((e) =>
              (function (e, t) {
                let n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {};
                return t.languages && t.languages.length
                  ? void 0 !== t.options.ignoreJSONStructure
                    ? t.hasLoadedNamespace(e, {
                        lng: n.lng,
                        precheck: (t, r) => {
                          if (
                            n.bindI18n &&
                            n.bindI18n.indexOf("languageChanging") > -1 &&
                            t.services.backendConnector.backend &&
                            t.isLanguageChangingTo &&
                            !r(t.isLanguageChangingTo, e)
                          )
                            return !1;
                        },
                      })
                    : (function (e, t) {
                        let n =
                            arguments.length > 2 && void 0 !== arguments[2]
                              ? arguments[2]
                              : {},
                          r = t.languages[0],
                          o = !!t.options && t.options.fallbackLng,
                          i = t.languages[t.languages.length - 1];
                        if ("cimode" === r.toLowerCase()) return !0;
                        let s = (e, n) => {
                          let r =
                            t.services.backendConnector.state[`${e}|${n}`];
                          return -1 === r || 2 === r;
                        };
                        return (
                          (!(
                            n.bindI18n &&
                            n.bindI18n.indexOf("languageChanging") > -1
                          ) ||
                            !t.services.backendConnector.backend ||
                            !t.isLanguageChangingTo ||
                            !!s(t.isLanguageChangingTo, e)) &&
                          !!(
                            t.hasResourceBundle(r, e) ||
                            !t.services.backendConnector.backend ||
                            (t.options.resources &&
                              !t.options.partialBundledLanguages) ||
                            (s(r, e) && (!o || s(i, e)))
                          )
                        );
                      })(e, t, n)
                  : (s("i18n.languages were undefined or empty", t.languages),
                    !0);
              })(e, p, v)
            ),
          k =
            ((t = i.lng || null),
            (n = "fallback" === v.nsMode ? x : x[0]),
            (0, o.useCallback)(y(p, t, n, S), [p, t, n, S])),
          w = () => k,
          L = () => y(p, i.lng || null, "fallback" === v.nsMode ? x : x[0], S),
          [E, C] = (0, o.useState)(w),
          P = x.join();
        i.lng && (P = `${i.lng}${P}`);
        let N = m(P),
          j = (0, o.useRef)(!0);
        (0, o.useEffect)(() => {
          let { bindI18n: e, bindI18nStore: t } = v;
          function n() {
            j.current && C(L);
          }
          return (
            (j.current = !0),
            O ||
              b ||
              (i.lng
                ? u(p, i.lng, x, () => {
                    j.current && C(L);
                  })
                : l(p, x, () => {
                    j.current && C(L);
                  })),
            O && N && N !== P && j.current && C(L),
            e && p && p.on(e, n),
            t && p && p.store.on(t, n),
            () => {
              (j.current = !1),
                e && p && e.split(" ").forEach((e) => p.off(e, n)),
                t && p && t.split(" ").forEach((e) => p.store.off(e, n));
            }
          );
        }, [p, P]),
          (0, o.useEffect)(() => {
            j.current && O && C(w);
          }, [p, S, O]);
        let R = [E, p, O];
        if (((R.t = E), (R.i18n = p), (R.ready = O), O || (!O && !b))) return R;
        throw new Promise((e) => {
          i.lng ? u(p, i.lng, x, () => e()) : l(p, x, () => e());
        });
      }
      function b(e) {
        let { i18n: t, defaultNS: n, children: r } = e,
          i = (0, o.useMemo)(() => ({ i18n: t, defaultNS: n }), [t, n]);
        return (0, o.createElement)(g.Provider, { value: i }, r);
      }
      function S() {
        return (S = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  ({}.hasOwnProperty.call(n, r) && (e[r] = n[r]));
              }
              return e;
            }).apply(null, arguments);
      }
      function x(e) {
        return (x =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function O(e, t, n) {
        var r;
        return (
          ((r = (function (e, t) {
            if ("object" != x(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, t || "default");
              if ("object" != x(r)) return r;
              throw TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === t ? String : Number)(e);
          })(t, "string")),
          (t = "symbol" == x(r) ? r : r + "") in e)
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var k = n(73463),
        w = n.n(k);
      function L(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function E(e, t) {
        if (e) {
          if ("string" == typeof e) return L(e, t);
          var n = {}.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? L(e, t)
              : void 0
          );
        }
      }
      function C(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                o,
                i,
                s,
                a = [],
                l = !0,
                u = !1;
              try {
                if (((i = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (r = i.call(n)).done) &&
                    (a.push(r.value), a.length !== t);
                    l = !0
                  );
              } catch (e) {
                (u = !0), (o = e);
              } finally {
                try {
                  if (
                    !l &&
                    null != n.return &&
                    ((s = n.return()), Object(s) !== s)
                  )
                    return;
                } finally {
                  if (u) throw o;
                }
              }
              return a;
            }
          })(e, t) ||
          E(e, t) ||
          (function () {
            throw TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function P(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = (function (e, t) {
            if (null == e) return {};
            var n = {};
            for (var r in e)
              if ({}.hasOwnProperty.call(e, r)) {
                if (t.indexOf(r) >= 0) continue;
                n[r] = e[r];
              }
            return n;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              t.indexOf(n) >= 0 ||
                ({}.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
        }
        return o;
      }
      var N = {
          defaultNS: "common",
          errorStackTraceLimit: 0,
          i18n: { defaultLocale: "en", locales: ["en"] },
          get initImmediate() {
            return "undefined" != typeof window;
          },
          interpolation: { escapeValue: !1 },
          load: "currentOnly",
          localeExtension: "json",
          localePath: "./public/locales",
          localeStructure: "{{lng}}/{{ns}}",
          react: { useSuspense: !1 },
          reloadOnPrerender: !1,
          serializeConfig: !0,
          use: [],
        },
        j = "undefined" != typeof window ? o.useLayoutEffect : o.useEffect,
        R = ["i18n"],
        _ = ["i18n"];
      function $(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function T(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? $(Object(n), !0).forEach(function (t) {
                O(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : $(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var I = ["backend", "detection"],
        A = function (e) {
          if ("string" != typeof (null == e ? void 0 : e.lng))
            throw Error("config.lng was not passed into createConfig");
          var t,
            n,
            r,
            o = e.i18n,
            i = P(e, R),
            s = N.i18n,
            a = T(T(T(T({}, P(N, _)), i), s), o),
            l = a.defaultNS,
            u = a.lng,
            c = a.localeExtension,
            d = a.localePath,
            p = a.nonExplicitSupportedLngs,
            f = a.locales.filter(function (e) {
              return "default" !== e;
            });
          if ("cimode" === u) return a;
          if (
            void 0 === a.fallbackLng &&
            ((a.fallbackLng = a.defaultLocale), "default" === a.fallbackLng)
          ) {
            var g = C(f, 1);
            a.fallbackLng = g[0];
          }
          var h =
              null == e || null === (t = e.interpolation) || void 0 === t
                ? void 0
                : t.prefix,
            m =
              null == e || null === (n = e.interpolation) || void 0 === n
                ? void 0
                : n.suffix,
            y = null != h ? h : "{{",
            v = null != m ? m : "}}";
          "string" != typeof (null == e ? void 0 : e.localeStructure) &&
            (h || m) &&
            (a.localeStructure = ""
              .concat(y, "lng")
              .concat(v, "/")
              .concat(y, "ns")
              .concat(v));
          var b = a.fallbackLng,
            S = a.localeStructure;
          if (p) {
            var O = function (e, t) {
              var n = C(t.split("-"), 1)[0];
              return (e[t] = [n]), e;
            };
            if ("string" == typeof b)
              a.fallbackLng = a.locales
                .filter(function (e) {
                  return e.includes("-");
                })
                .reduce(O, { default: [b] });
            else if (Array.isArray(b))
              a.fallbackLng = a.locales
                .filter(function (e) {
                  return e.includes("-");
                })
                .reduce(O, { default: b });
            else if ("object" === x(b))
              a.fallbackLng = Object.entries(a.fallbackLng).reduce(function (
                e,
                t
              ) {
                var n,
                  r = C(t, 2),
                  o = r[0],
                  i = r[1];
                return (
                  (e[o] = o.includes("-")
                    ? ((n = [o.split("-")[0]].concat(
                        (function (e) {
                          if (Array.isArray(e)) return L(e);
                        })(i) ||
                          (function (e) {
                            if (
                              ("undefined" != typeof Symbol &&
                                null != e[Symbol.iterator]) ||
                              null != e["@@iterator"]
                            )
                              return Array.from(e);
                          })(i) ||
                          E(i) ||
                          (function () {
                            throw TypeError(
                              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                            );
                          })()
                      )),
                      Array.from(new Set(n)))
                    : i),
                  e
                );
              },
              b);
            else if ("function" == typeof b)
              throw Error(
                "If nonExplicitSupportedLngs is true, no functions are allowed for fallbackLng"
              );
          }
          return (
            (null == e || null === (r = e.use) || void 0 === r
              ? void 0
              : r.some(function (e) {
                  return "backend" === e.type;
                })) ||
              ("string" == typeof d
                ? (a.backend = {
                    addPath: "".concat(d, "/").concat(S, ".missing.").concat(c),
                    loadPath: "".concat(d, "/").concat(S, ".").concat(c),
                  })
                : "function" != typeof d ||
                  (a.backend = {
                    addPath: function (e, t) {
                      return d(e, t, !0);
                    },
                    loadPath: function (e, t) {
                      return d(e, t, !1);
                    },
                  })),
            "string" == typeof a.ns || Array.isArray(a.ns) || (a.ns = [l]),
            I.forEach(function (t) {
              e[t] && (a[t] = T(T({}, a[t]), e[t]));
            }),
            a
          );
        };
      let M = {
        type: "logger",
        log(e) {
          this.output("log", e);
        },
        warn(e) {
          this.output("warn", e);
        },
        error(e) {
          this.output("error", e);
        },
        output(e, t) {
          console && console[e] && console[e].apply(console, t);
        },
      };
      class F {
        constructor(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          this.init(e, t);
        }
        init(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          (this.prefix = t.prefix || "i18next:"),
            (this.logger = e || M),
            (this.options = t),
            (this.debug = t.debug);
        }
        log() {
          for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return this.forward(t, "log", "", !0);
        }
        warn() {
          for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return this.forward(t, "warn", "", !0);
        }
        error() {
          for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return this.forward(t, "error", "");
        }
        deprecate() {
          for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return this.forward(t, "warn", "WARNING DEPRECATED: ", !0);
        }
        forward(e, t, n, r) {
          return r && !this.debug
            ? null
            : ("string" == typeof e[0] && (e[0] = `${n}${this.prefix} ${e[0]}`),
              this.logger[t](e));
        }
        create(e) {
          return new F(this.logger, {
            prefix: `${this.prefix}:${e}:`,
            ...this.options,
          });
        }
        clone(e) {
          return (
            ((e = e || this.options).prefix = e.prefix || this.prefix),
            new F(this.logger, e)
          );
        }
      }
      var D = new F();
      class V {
        constructor() {
          this.observers = {};
        }
        on(e, t) {
          return (
            e.split(" ").forEach((e) => {
              this.observers[e] || (this.observers[e] = new Map());
              let n = this.observers[e].get(t) || 0;
              this.observers[e].set(t, n + 1);
            }),
            this
          );
        }
        off(e, t) {
          if (this.observers[e]) {
            if (!t) {
              delete this.observers[e];
              return;
            }
            this.observers[e].delete(t);
          }
        }
        emit(e) {
          for (
            var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
            r < t;
            r++
          )
            n[r - 1] = arguments[r];
          this.observers[e] &&
            Array.from(this.observers[e].entries()).forEach((e) => {
              let [t, r] = e;
              for (let e = 0; e < r; e++) t(...n);
            }),
            this.observers["*"] &&
              Array.from(this.observers["*"].entries()).forEach((t) => {
                let [r, o] = t;
                for (let t = 0; t < o; t++) r.apply(r, [e, ...n]);
              });
        }
      }
      function z() {
        let e, t;
        let n = new Promise((n, r) => {
          (e = n), (t = r);
        });
        return (n.resolve = e), (n.reject = t), n;
      }
      function U(e) {
        return null == e ? "" : "" + e;
      }
      let B = /###/g;
      function H(e, t, n) {
        function r(e) {
          return e && e.indexOf("###") > -1 ? e.replace(B, ".") : e;
        }
        function o() {
          return !e || "string" == typeof e;
        }
        let i = "string" != typeof t ? t : t.split("."),
          s = 0;
        for (; s < i.length - 1; ) {
          if (o()) return {};
          let t = r(i[s]);
          !e[t] && n && (e[t] = new n()),
            (e = Object.prototype.hasOwnProperty.call(e, t) ? e[t] : {}),
            ++s;
        }
        return o() ? {} : { obj: e, k: r(i[s]) };
      }
      function K(e, t, n) {
        let { obj: r, k: o } = H(e, t, Object);
        if (void 0 !== r || 1 === t.length) {
          r[o] = n;
          return;
        }
        let i = t[t.length - 1],
          s = t.slice(0, t.length - 1),
          a = H(e, s, Object);
        for (; void 0 === a.obj && s.length; )
          (i = `${s[s.length - 1]}.${i}`),
            (a = H(e, (s = s.slice(0, s.length - 1)), Object)) &&
              a.obj &&
              void 0 !== a.obj[`${a.k}.${i}`] &&
              (a.obj = void 0);
        a.obj[`${a.k}.${i}`] = n;
      }
      function J(e, t) {
        let { obj: n, k: r } = H(e, t);
        if (n) return n[r];
      }
      function q(e) {
        return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
      }
      var W = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
        "/": "&#x2F;",
      };
      function Q(e) {
        return "string" == typeof e ? e.replace(/[&<>"'\/]/g, (e) => W[e]) : e;
      }
      class G {
        constructor(e) {
          (this.capacity = e),
            (this.regExpMap = new Map()),
            (this.regExpQueue = []);
        }
        getRegExp(e) {
          let t = this.regExpMap.get(e);
          if (void 0 !== t) return t;
          let n = new RegExp(e);
          return (
            this.regExpQueue.length === this.capacity &&
              this.regExpMap.delete(this.regExpQueue.shift()),
            this.regExpMap.set(e, n),
            this.regExpQueue.push(e),
            n
          );
        }
      }
      let Y = [" ", ",", "?", "!", ";"],
        X = new G(20);
      function Z(e, t) {
        let n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ".";
        if (!e) return;
        if (e[t]) return e[t];
        let r = t.split(n),
          o = e;
        for (let e = 0; e < r.length; ) {
          let t;
          if (!o || "object" != typeof o) return;
          let i = "";
          for (let s = e; s < r.length; ++s)
            if ((s !== e && (i += n), (i += r[s]), void 0 !== (t = o[i]))) {
              if (
                ["string", "number", "boolean"].indexOf(typeof t) > -1 &&
                s < r.length - 1
              )
                continue;
              e += s - e + 1;
              break;
            }
          o = t;
        }
        return o;
      }
      function ee(e) {
        return e && e.indexOf("_") > 0 ? e.replace("_", "-") : e;
      }
      class et extends V {
        constructor(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : { ns: ["translation"], defaultNS: "translation" };
          super(),
            (this.data = e || {}),
            (this.options = t),
            void 0 === this.options.keySeparator &&
              (this.options.keySeparator = "."),
            void 0 === this.options.ignoreJSONStructure &&
              (this.options.ignoreJSONStructure = !0);
        }
        addNamespaces(e) {
          0 > this.options.ns.indexOf(e) && this.options.ns.push(e);
        }
        removeNamespaces(e) {
          let t = this.options.ns.indexOf(e);
          t > -1 && this.options.ns.splice(t, 1);
        }
        getResource(e, t, n) {
          let r,
            o =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {},
            i =
              void 0 !== o.keySeparator
                ? o.keySeparator
                : this.options.keySeparator,
            s =
              void 0 !== o.ignoreJSONStructure
                ? o.ignoreJSONStructure
                : this.options.ignoreJSONStructure;
          e.indexOf(".") > -1
            ? (r = e.split("."))
            : ((r = [e, t]),
              n &&
                (Array.isArray(n)
                  ? r.push(...n)
                  : "string" == typeof n && i
                  ? r.push(...n.split(i))
                  : r.push(n)));
          let a = J(this.data, r);
          return (!a &&
            !t &&
            !n &&
            e.indexOf(".") > -1 &&
            ((e = r[0]), (t = r[1]), (n = r.slice(2).join("."))),
          a || !s || "string" != typeof n)
            ? a
            : Z(this.data && this.data[e] && this.data[e][t], n, i);
        }
        addResource(e, t, n, r) {
          let o =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : { silent: !1 },
            i =
              void 0 !== o.keySeparator
                ? o.keySeparator
                : this.options.keySeparator,
            s = [e, t];
          n && (s = s.concat(i ? n.split(i) : n)),
            e.indexOf(".") > -1 && ((s = e.split(".")), (r = t), (t = s[1])),
            this.addNamespaces(t),
            K(this.data, s, r),
            o.silent || this.emit("added", e, t, n, r);
        }
        addResources(e, t, n) {
          let r =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : { silent: !1 };
          for (let r in n)
            ("string" == typeof n[r] || Array.isArray(n[r])) &&
              this.addResource(e, t, r, n[r], { silent: !0 });
          r.silent || this.emit("added", e, t, n);
        }
        addResourceBundle(e, t, n, r, o) {
          let i =
              arguments.length > 5 && void 0 !== arguments[5]
                ? arguments[5]
                : { silent: !1, skipCopy: !1 },
            s = [e, t];
          e.indexOf(".") > -1 &&
            ((s = e.split(".")), (r = n), (n = t), (t = s[1])),
            this.addNamespaces(t);
          let a = J(this.data, s) || {};
          i.skipCopy || (n = JSON.parse(JSON.stringify(n))),
            r
              ? (function e(t, n, r) {
                  for (let o in n)
                    "__proto__" !== o &&
                      "constructor" !== o &&
                      (o in t
                        ? "string" == typeof t[o] ||
                          t[o] instanceof String ||
                          "string" == typeof n[o] ||
                          n[o] instanceof String
                          ? r && (t[o] = n[o])
                          : e(t[o], n[o], r)
                        : (t[o] = n[o]));
                  return t;
                })(a, n, o)
              : (a = { ...a, ...n }),
            K(this.data, s, a),
            i.silent || this.emit("added", e, t, n);
        }
        removeResourceBundle(e, t) {
          this.hasResourceBundle(e, t) && delete this.data[e][t],
            this.removeNamespaces(t),
            this.emit("removed", e, t);
        }
        hasResourceBundle(e, t) {
          return void 0 !== this.getResource(e, t);
        }
        getResourceBundle(e, t) {
          return (t || (t = this.options.defaultNS),
          "v1" === this.options.compatibilityAPI)
            ? { ...this.getResource(e, t) }
            : this.getResource(e, t);
        }
        getDataByLanguage(e) {
          return this.data[e];
        }
        hasLanguageSomeTranslations(e) {
          let t = this.getDataByLanguage(e);
          return !!((t && Object.keys(t)) || []).find(
            (e) => t[e] && Object.keys(t[e]).length > 0
          );
        }
        toJSON() {
          return this.data;
        }
      }
      var en = {
        processors: {},
        addPostProcessor(e) {
          this.processors[e.name] = e;
        },
        handle(e, t, n, r, o) {
          return (
            e.forEach((e) => {
              this.processors[e] &&
                (t = this.processors[e].process(t, n, r, o));
            }),
            t
          );
        },
      };
      let er = {};
      class eo extends V {
        constructor(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          super(),
            (function (e, t, n) {
              e.forEach((e) => {
                t[e] && (n[e] = t[e]);
              });
            })(
              [
                "resourceStore",
                "languageUtils",
                "pluralResolver",
                "interpolator",
                "backendConnector",
                "i18nFormat",
                "utils",
              ],
              e,
              this
            ),
            (this.options = t),
            void 0 === this.options.keySeparator &&
              (this.options.keySeparator = "."),
            (this.logger = D.create("translator"));
        }
        changeLanguage(e) {
          e && (this.language = e);
        }
        exists(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : { interpolation: {} };
          if (null == e) return !1;
          let n = this.resolve(e, t);
          return n && void 0 !== n.res;
        }
        extractFromKey(e, t) {
          let n =
            void 0 !== t.nsSeparator ? t.nsSeparator : this.options.nsSeparator;
          void 0 === n && (n = ":");
          let r =
              void 0 !== t.keySeparator
                ? t.keySeparator
                : this.options.keySeparator,
            o = t.ns || this.options.defaultNS || [],
            i = n && e.indexOf(n) > -1,
            s =
              !this.options.userDefinedKeySeparator &&
              !t.keySeparator &&
              !this.options.userDefinedNsSeparator &&
              !t.nsSeparator &&
              !(function (e, t, n) {
                (t = t || ""), (n = n || "");
                let r = Y.filter((e) => 0 > t.indexOf(e) && 0 > n.indexOf(e));
                if (0 === r.length) return !0;
                let o = X.getRegExp(
                    `(${r.map((e) => ("?" === e ? "\\?" : e)).join("|")})`
                  ),
                  i = !o.test(e);
                if (!i) {
                  let t = e.indexOf(n);
                  t > 0 && !o.test(e.substring(0, t)) && (i = !0);
                }
                return i;
              })(e, n, r);
          if (i && !s) {
            let t = e.match(this.interpolator.nestingRegexp);
            if (t && t.length > 0) return { key: e, namespaces: o };
            let i = e.split(n);
            (n !== r || (n === r && this.options.ns.indexOf(i[0]) > -1)) &&
              (o = i.shift()),
              (e = i.join(r));
          }
          return "string" == typeof o && (o = [o]), { key: e, namespaces: o };
        }
        translate(e, t, n) {
          if (
            ("object" != typeof t &&
              this.options.overloadTranslationOptionHandler &&
              (t = this.options.overloadTranslationOptionHandler(arguments)),
            "object" == typeof t && (t = { ...t }),
            t || (t = {}),
            null == e)
          )
            return "";
          Array.isArray(e) || (e = [String(e)]);
          let r =
              void 0 !== t.returnDetails
                ? t.returnDetails
                : this.options.returnDetails,
            o =
              void 0 !== t.keySeparator
                ? t.keySeparator
                : this.options.keySeparator,
            { key: i, namespaces: s } = this.extractFromKey(e[e.length - 1], t),
            a = s[s.length - 1],
            l = t.lng || this.language,
            u =
              t.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
          if (l && "cimode" === l.toLowerCase()) {
            if (u) {
              let e = t.nsSeparator || this.options.nsSeparator;
              return r
                ? {
                    res: `${a}${e}${i}`,
                    usedKey: i,
                    exactUsedKey: i,
                    usedLng: l,
                    usedNS: a,
                    usedParams: this.getUsedParamsDetails(t),
                  }
                : `${a}${e}${i}`;
            }
            return r
              ? {
                  res: i,
                  usedKey: i,
                  exactUsedKey: i,
                  usedLng: l,
                  usedNS: a,
                  usedParams: this.getUsedParamsDetails(t),
                }
              : i;
          }
          let c = this.resolve(e, t),
            d = c && c.res,
            p = (c && c.usedKey) || i,
            f = (c && c.exactUsedKey) || i,
            g = Object.prototype.toString.apply(d),
            h =
              void 0 !== t.joinArrays ? t.joinArrays : this.options.joinArrays,
            m = !this.i18nFormat || this.i18nFormat.handleAsObject,
            y =
              "string" != typeof d &&
              "boolean" != typeof d &&
              "number" != typeof d;
          if (
            m &&
            d &&
            y &&
            0 >
              [
                "[object Number]",
                "[object Function]",
                "[object RegExp]",
              ].indexOf(g) &&
            !("string" == typeof h && Array.isArray(d))
          ) {
            if (!t.returnObjects && !this.options.returnObjects) {
              this.options.returnedObjectHandler ||
                this.logger.warn(
                  "accessing an object - but returnObjects options is not enabled!"
                );
              let e = this.options.returnedObjectHandler
                ? this.options.returnedObjectHandler(p, d, { ...t, ns: s })
                : `key '${i} (${this.language})' returned an object instead of string.`;
              return r
                ? ((c.res = e),
                  (c.usedParams = this.getUsedParamsDetails(t)),
                  c)
                : e;
            }
            if (o) {
              let e = Array.isArray(d),
                n = e ? [] : {},
                r = e ? f : p;
              for (let e in d)
                if (Object.prototype.hasOwnProperty.call(d, e)) {
                  let i = `${r}${o}${e}`;
                  (n[e] = this.translate(i, { ...t, joinArrays: !1, ns: s })),
                    n[e] === i && (n[e] = d[e]);
                }
              d = n;
            }
          } else if (m && "string" == typeof h && Array.isArray(d))
            (d = d.join(h)) && (d = this.extendTranslation(d, e, t, n));
          else {
            let r = !1,
              s = !1,
              u = void 0 !== t.count && "string" != typeof t.count,
              p = eo.hasDefaultValue(t),
              f = u ? this.pluralResolver.getSuffix(l, t.count, t) : "",
              g =
                t.ordinal && u
                  ? this.pluralResolver.getSuffix(l, t.count, { ordinal: !1 })
                  : "",
              h =
                u &&
                !t.ordinal &&
                0 === t.count &&
                this.pluralResolver.shouldUseIntlApi(),
              m =
                (h && t[`defaultValue${this.options.pluralSeparator}zero`]) ||
                t[`defaultValue${f}`] ||
                t[`defaultValue${g}`] ||
                t.defaultValue;
            !this.isValidLookup(d) && p && ((r = !0), (d = m)),
              this.isValidLookup(d) || ((s = !0), (d = i));
            let y =
                (t.missingKeyNoValueFallbackToKey ||
                  this.options.missingKeyNoValueFallbackToKey) &&
                s
                  ? void 0
                  : d,
              v = p && m !== d && this.options.updateMissing;
            if (s || r || v) {
              if (
                (this.logger.log(
                  v ? "updateKey" : "missingKey",
                  l,
                  a,
                  i,
                  v ? m : d
                ),
                o)
              ) {
                let e = this.resolve(i, { ...t, keySeparator: !1 });
                e &&
                  e.res &&
                  this.logger.warn(
                    "Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format."
                  );
              }
              let e = [],
                n = this.languageUtils.getFallbackCodes(
                  this.options.fallbackLng,
                  t.lng || this.language
                );
              if ("fallback" === this.options.saveMissingTo && n && n[0])
                for (let t = 0; t < n.length; t++) e.push(n[t]);
              else
                "all" === this.options.saveMissingTo
                  ? (e = this.languageUtils.toResolveHierarchy(
                      t.lng || this.language
                    ))
                  : e.push(t.lng || this.language);
              let r = (e, n, r) => {
                let o = p && r !== d ? r : y;
                this.options.missingKeyHandler
                  ? this.options.missingKeyHandler(e, a, n, o, v, t)
                  : this.backendConnector &&
                    this.backendConnector.saveMissing &&
                    this.backendConnector.saveMissing(e, a, n, o, v, t),
                  this.emit("missingKey", e, a, n, d);
              };
              this.options.saveMissing &&
                (this.options.saveMissingPlurals && u
                  ? e.forEach((e) => {
                      let n = this.pluralResolver.getSuffixes(e, t);
                      h &&
                        t[`defaultValue${this.options.pluralSeparator}zero`] &&
                        0 > n.indexOf(`${this.options.pluralSeparator}zero`) &&
                        n.push(`${this.options.pluralSeparator}zero`),
                        n.forEach((n) => {
                          r([e], i + n, t[`defaultValue${n}`] || m);
                        });
                    })
                  : r(e, i, m));
            }
            (d = this.extendTranslation(d, e, t, c, n)),
              s &&
                d === i &&
                this.options.appendNamespaceToMissingKey &&
                (d = `${a}:${i}`),
              (s || r) &&
                this.options.parseMissingKeyHandler &&
                (d =
                  "v1" !== this.options.compatibilityAPI
                    ? this.options.parseMissingKeyHandler(
                        this.options.appendNamespaceToMissingKey
                          ? `${a}:${i}`
                          : i,
                        r ? d : void 0
                      )
                    : this.options.parseMissingKeyHandler(d));
          }
          return r
            ? ((c.res = d), (c.usedParams = this.getUsedParamsDetails(t)), c)
            : d;
        }
        extendTranslation(e, t, n, r, o) {
          var i = this;
          if (this.i18nFormat && this.i18nFormat.parse)
            e = this.i18nFormat.parse(
              e,
              { ...this.options.interpolation.defaultVariables, ...n },
              n.lng || this.language || r.usedLng,
              r.usedNS,
              r.usedKey,
              { resolved: r }
            );
          else if (!n.skipInterpolation) {
            let s;
            n.interpolation &&
              this.interpolator.init({
                ...n,
                interpolation: {
                  ...this.options.interpolation,
                  ...n.interpolation,
                },
              });
            let a =
              "string" == typeof e &&
              (n &&
              n.interpolation &&
              void 0 !== n.interpolation.skipOnVariables
                ? n.interpolation.skipOnVariables
                : this.options.interpolation.skipOnVariables);
            if (a) {
              let t = e.match(this.interpolator.nestingRegexp);
              s = t && t.length;
            }
            let l = n.replace && "string" != typeof n.replace ? n.replace : n;
            if (
              (this.options.interpolation.defaultVariables &&
                (l = { ...this.options.interpolation.defaultVariables, ...l }),
              (e = this.interpolator.interpolate(
                e,
                l,
                n.lng || this.language,
                n
              )),
              a)
            ) {
              let t = e.match(this.interpolator.nestingRegexp);
              s < (t && t.length) && (n.nest = !1);
            }
            !n.lng &&
              "v1" !== this.options.compatibilityAPI &&
              r &&
              r.res &&
              (n.lng = r.usedLng),
              !1 !== n.nest &&
                (e = this.interpolator.nest(
                  e,
                  function () {
                    for (
                      var e = arguments.length, r = Array(e), s = 0;
                      s < e;
                      s++
                    )
                      r[s] = arguments[s];
                    return o && o[0] === r[0] && !n.context
                      ? (i.logger.warn(
                          `It seems you are nesting recursively key: ${r[0]} in key: ${t[0]}`
                        ),
                        null)
                      : i.translate(...r, t);
                  },
                  n
                )),
              n.interpolation && this.interpolator.reset();
          }
          let s = n.postProcess || this.options.postProcess,
            a = "string" == typeof s ? [s] : s;
          return (
            null != e &&
              a &&
              a.length &&
              !1 !== n.applyPostProcessor &&
              (e = en.handle(
                a,
                e,
                t,
                this.options && this.options.postProcessPassResolved
                  ? {
                      i18nResolved: {
                        ...r,
                        usedParams: this.getUsedParamsDetails(n),
                      },
                      ...n,
                    }
                  : n,
                this
              )),
            e
          );
        }
        resolve(e) {
          let t,
            n,
            r,
            o,
            i,
            s =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
          return (
            "string" == typeof e && (e = [e]),
            e.forEach((e) => {
              if (this.isValidLookup(t)) return;
              let a = this.extractFromKey(e, s),
                l = a.key;
              n = l;
              let u = a.namespaces;
              this.options.fallbackNS &&
                (u = u.concat(this.options.fallbackNS));
              let c = void 0 !== s.count && "string" != typeof s.count,
                d =
                  c &&
                  !s.ordinal &&
                  0 === s.count &&
                  this.pluralResolver.shouldUseIntlApi(),
                p =
                  void 0 !== s.context &&
                  ("string" == typeof s.context ||
                    "number" == typeof s.context) &&
                  "" !== s.context,
                f = s.lngs
                  ? s.lngs
                  : this.languageUtils.toResolveHierarchy(
                      s.lng || this.language,
                      s.fallbackLng
                    );
              u.forEach((e) => {
                this.isValidLookup(t) ||
                  ((i = e),
                  !er[`${f[0]}-${e}`] &&
                    this.utils &&
                    this.utils.hasLoadedNamespace &&
                    !this.utils.hasLoadedNamespace(i) &&
                    ((er[`${f[0]}-${e}`] = !0),
                    this.logger.warn(
                      `key "${n}" for languages "${f.join(
                        ", "
                      )}" won't get resolved as namespace "${i}" was not yet loaded`,
                      "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!"
                    )),
                  f.forEach((n) => {
                    let i;
                    if (this.isValidLookup(t)) return;
                    o = n;
                    let a = [l];
                    if (this.i18nFormat && this.i18nFormat.addLookupKeys)
                      this.i18nFormat.addLookupKeys(a, l, n, e, s);
                    else {
                      let e;
                      c && (e = this.pluralResolver.getSuffix(n, s.count, s));
                      let t = `${this.options.pluralSeparator}zero`,
                        r = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                      if (
                        (c &&
                          (a.push(l + e),
                          s.ordinal &&
                            0 === e.indexOf(r) &&
                            a.push(
                              l + e.replace(r, this.options.pluralSeparator)
                            ),
                          d && a.push(l + t)),
                        p)
                      ) {
                        let n = `${l}${this.options.contextSeparator}${s.context}`;
                        a.push(n),
                          c &&
                            (a.push(n + e),
                            s.ordinal &&
                              0 === e.indexOf(r) &&
                              a.push(
                                n + e.replace(r, this.options.pluralSeparator)
                              ),
                            d && a.push(n + t));
                      }
                    }
                    for (; (i = a.pop()); )
                      this.isValidLookup(t) ||
                        ((r = i), (t = this.getResource(n, e, i, s)));
                  }));
              });
            }),
            { res: t, usedKey: n, exactUsedKey: r, usedLng: o, usedNS: i }
          );
        }
        isValidLookup(e) {
          return (
            void 0 !== e &&
            !(!this.options.returnNull && null === e) &&
            !(!this.options.returnEmptyString && "" === e)
          );
        }
        getResource(e, t, n) {
          let r =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
          return this.i18nFormat && this.i18nFormat.getResource
            ? this.i18nFormat.getResource(e, t, n, r)
            : this.resourceStore.getResource(e, t, n, r);
        }
        getUsedParamsDetails() {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = e.replace && "string" != typeof e.replace,
            n = t ? e.replace : e;
          if (
            (t && void 0 !== e.count && (n.count = e.count),
            this.options.interpolation.defaultVariables &&
              (n = { ...this.options.interpolation.defaultVariables, ...n }),
            !t)
          )
            for (let e of ((n = { ...n }),
            [
              "defaultValue",
              "ordinal",
              "context",
              "replace",
              "lng",
              "lngs",
              "fallbackLng",
              "ns",
              "keySeparator",
              "nsSeparator",
              "returnObjects",
              "returnDetails",
              "joinArrays",
              "postProcess",
              "interpolation",
            ]))
              delete n[e];
          return n;
        }
        static hasDefaultValue(e) {
          let t = "defaultValue";
          for (let n in e)
            if (
              Object.prototype.hasOwnProperty.call(e, n) &&
              t === n.substring(0, t.length) &&
              void 0 !== e[n]
            )
              return !0;
          return !1;
        }
      }
      function ei(e) {
        return e.charAt(0).toUpperCase() + e.slice(1);
      }
      class es {
        constructor(e) {
          (this.options = e),
            (this.supportedLngs = this.options.supportedLngs || !1),
            (this.logger = D.create("languageUtils"));
        }
        getScriptPartFromCode(e) {
          if (!(e = ee(e)) || 0 > e.indexOf("-")) return null;
          let t = e.split("-");
          return 2 === t.length
            ? null
            : (t.pop(), "x" === t[t.length - 1].toLowerCase())
            ? null
            : this.formatLanguageCode(t.join("-"));
        }
        getLanguagePartFromCode(e) {
          if (!(e = ee(e)) || 0 > e.indexOf("-")) return e;
          let t = e.split("-");
          return this.formatLanguageCode(t[0]);
        }
        formatLanguageCode(e) {
          if ("string" == typeof e && e.indexOf("-") > -1) {
            let t = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"],
              n = e.split("-");
            return (
              this.options.lowerCaseLng
                ? (n = n.map((e) => e.toLowerCase()))
                : 2 === n.length
                ? ((n[0] = n[0].toLowerCase()),
                  (n[1] = n[1].toUpperCase()),
                  t.indexOf(n[1].toLowerCase()) > -1 &&
                    (n[1] = ei(n[1].toLowerCase())))
                : 3 === n.length &&
                  ((n[0] = n[0].toLowerCase()),
                  2 === n[1].length && (n[1] = n[1].toUpperCase()),
                  "sgn" !== n[0] &&
                    2 === n[2].length &&
                    (n[2] = n[2].toUpperCase()),
                  t.indexOf(n[1].toLowerCase()) > -1 &&
                    (n[1] = ei(n[1].toLowerCase())),
                  t.indexOf(n[2].toLowerCase()) > -1 &&
                    (n[2] = ei(n[2].toLowerCase()))),
              n.join("-")
            );
          }
          return this.options.cleanCode || this.options.lowerCaseLng
            ? e.toLowerCase()
            : e;
        }
        isSupportedCode(e) {
          return (
            ("languageOnly" === this.options.load ||
              this.options.nonExplicitSupportedLngs) &&
              (e = this.getLanguagePartFromCode(e)),
            !this.supportedLngs ||
              !this.supportedLngs.length ||
              this.supportedLngs.indexOf(e) > -1
          );
        }
        getBestMatchFromCodes(e) {
          let t;
          return e
            ? (e.forEach((e) => {
                if (t) return;
                let n = this.formatLanguageCode(e);
                (!this.options.supportedLngs || this.isSupportedCode(n)) &&
                  (t = n);
              }),
              !t &&
                this.options.supportedLngs &&
                e.forEach((e) => {
                  if (t) return;
                  let n = this.getLanguagePartFromCode(e);
                  if (this.isSupportedCode(n)) return (t = n);
                  t = this.options.supportedLngs.find((e) => {
                    if (
                      e === n ||
                      (!(0 > e.indexOf("-") && 0 > n.indexOf("-")) &&
                        ((e.indexOf("-") > 0 &&
                          0 > n.indexOf("-") &&
                          e.substring(0, e.indexOf("-")) === n) ||
                          (0 === e.indexOf(n) && n.length > 1)))
                    )
                      return e;
                  });
                }),
              t || (t = this.getFallbackCodes(this.options.fallbackLng)[0]),
              t)
            : null;
        }
        getFallbackCodes(e, t) {
          if (!e) return [];
          if (
            ("function" == typeof e && (e = e(t)),
            "string" == typeof e && (e = [e]),
            Array.isArray(e))
          )
            return e;
          if (!t) return e.default || [];
          let n = e[t];
          return (
            n || (n = e[this.getScriptPartFromCode(t)]),
            n || (n = e[this.formatLanguageCode(t)]),
            n || (n = e[this.getLanguagePartFromCode(t)]),
            n || (n = e.default),
            n || []
          );
        }
        toResolveHierarchy(e, t) {
          let n = this.getFallbackCodes(t || this.options.fallbackLng || [], e),
            r = [],
            o = (e) => {
              e &&
                (this.isSupportedCode(e)
                  ? r.push(e)
                  : this.logger.warn(
                      `rejecting language code not found in supportedLngs: ${e}`
                    ));
            };
          return (
            "string" == typeof e && (e.indexOf("-") > -1 || e.indexOf("_") > -1)
              ? ("languageOnly" !== this.options.load &&
                  o(this.formatLanguageCode(e)),
                "languageOnly" !== this.options.load &&
                  "currentOnly" !== this.options.load &&
                  o(this.getScriptPartFromCode(e)),
                "currentOnly" !== this.options.load &&
                  o(this.getLanguagePartFromCode(e)))
              : "string" == typeof e && o(this.formatLanguageCode(e)),
            n.forEach((e) => {
              0 > r.indexOf(e) && o(this.formatLanguageCode(e));
            }),
            r
          );
        }
      }
      let ea = [
          {
            lngs: [
              "ach",
              "ak",
              "am",
              "arn",
              "br",
              "fil",
              "gun",
              "ln",
              "mfe",
              "mg",
              "mi",
              "oc",
              "pt",
              "pt-BR",
              "tg",
              "tl",
              "ti",
              "tr",
              "uz",
              "wa",
            ],
            nr: [1, 2],
            fc: 1,
          },
          {
            lngs: [
              "af",
              "an",
              "ast",
              "az",
              "bg",
              "bn",
              "ca",
              "da",
              "de",
              "dev",
              "el",
              "en",
              "eo",
              "es",
              "et",
              "eu",
              "fi",
              "fo",
              "fur",
              "fy",
              "gl",
              "gu",
              "ha",
              "hi",
              "hu",
              "hy",
              "ia",
              "it",
              "kk",
              "kn",
              "ku",
              "lb",
              "mai",
              "ml",
              "mn",
              "mr",
              "nah",
              "nap",
              "nb",
              "ne",
              "nl",
              "nn",
              "no",
              "nso",
              "pa",
              "pap",
              "pms",
              "ps",
              "pt-PT",
              "rm",
              "sco",
              "se",
              "si",
              "so",
              "son",
              "sq",
              "sv",
              "sw",
              "ta",
              "te",
              "tk",
              "ur",
              "yo",
            ],
            nr: [1, 2],
            fc: 2,
          },
          {
            lngs: [
              "ay",
              "bo",
              "cgg",
              "fa",
              "ht",
              "id",
              "ja",
              "jbo",
              "ka",
              "km",
              "ko",
              "ky",
              "lo",
              "ms",
              "sah",
              "su",
              "th",
              "tt",
              "ug",
              "vi",
              "wo",
              "zh",
            ],
            nr: [1],
            fc: 3,
          },
          {
            lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
            nr: [1, 2, 5],
            fc: 4,
          },
          { lngs: ["ar"], nr: [0, 1, 2, 3, 11, 100], fc: 5 },
          { lngs: ["cs", "sk"], nr: [1, 2, 5], fc: 6 },
          { lngs: ["csb", "pl"], nr: [1, 2, 5], fc: 7 },
          { lngs: ["cy"], nr: [1, 2, 3, 8], fc: 8 },
          { lngs: ["fr"], nr: [1, 2], fc: 9 },
          { lngs: ["ga"], nr: [1, 2, 3, 7, 11], fc: 10 },
          { lngs: ["gd"], nr: [1, 2, 3, 20], fc: 11 },
          { lngs: ["is"], nr: [1, 2], fc: 12 },
          { lngs: ["jv"], nr: [0, 1], fc: 13 },
          { lngs: ["kw"], nr: [1, 2, 3, 4], fc: 14 },
          { lngs: ["lt"], nr: [1, 2, 10], fc: 15 },
          { lngs: ["lv"], nr: [1, 2, 0], fc: 16 },
          { lngs: ["mk"], nr: [1, 2], fc: 17 },
          { lngs: ["mnk"], nr: [0, 1, 2], fc: 18 },
          { lngs: ["mt"], nr: [1, 2, 11, 20], fc: 19 },
          { lngs: ["or"], nr: [2, 1], fc: 2 },
          { lngs: ["ro"], nr: [1, 2, 20], fc: 20 },
          { lngs: ["sl"], nr: [5, 1, 2, 3], fc: 21 },
          { lngs: ["he", "iw"], nr: [1, 2, 20, 21], fc: 22 },
        ],
        el = {
          1: function (e) {
            return Number(e > 1);
          },
          2: function (e) {
            return Number(1 != e);
          },
          3: function (e) {
            return 0;
          },
          4: function (e) {
            return Number(
              e % 10 == 1 && e % 100 != 11
                ? 0
                : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
                ? 1
                : 2
            );
          },
          5: function (e) {
            return Number(
              0 == e
                ? 0
                : 1 == e
                ? 1
                : 2 == e
                ? 2
                : e % 100 >= 3 && e % 100 <= 10
                ? 3
                : e % 100 >= 11
                ? 4
                : 5
            );
          },
          6: function (e) {
            return Number(1 == e ? 0 : e >= 2 && e <= 4 ? 1 : 2);
          },
          7: function (e) {
            return Number(
              1 == e
                ? 0
                : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
                ? 1
                : 2
            );
          },
          8: function (e) {
            return Number(1 == e ? 0 : 2 == e ? 1 : 8 != e && 11 != e ? 2 : 3);
          },
          9: function (e) {
            return Number(e >= 2);
          },
          10: function (e) {
            return Number(1 == e ? 0 : 2 == e ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4);
          },
          11: function (e) {
            return Number(
              1 == e || 11 == e
                ? 0
                : 2 == e || 12 == e
                ? 1
                : e > 2 && e < 20
                ? 2
                : 3
            );
          },
          12: function (e) {
            return Number(e % 10 != 1 || e % 100 == 11);
          },
          13: function (e) {
            return Number(0 !== e);
          },
          14: function (e) {
            return Number(1 == e ? 0 : 2 == e ? 1 : 3 == e ? 2 : 3);
          },
          15: function (e) {
            return Number(
              e % 10 == 1 && e % 100 != 11
                ? 0
                : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20)
                ? 1
                : 2
            );
          },
          16: function (e) {
            return Number(e % 10 == 1 && e % 100 != 11 ? 0 : 0 !== e ? 1 : 2);
          },
          17: function (e) {
            return Number(1 == e || (e % 10 == 1 && e % 100 != 11) ? 0 : 1);
          },
          18: function (e) {
            return Number(0 == e ? 0 : 1 == e ? 1 : 2);
          },
          19: function (e) {
            return Number(
              1 == e
                ? 0
                : 0 == e || (e % 100 > 1 && e % 100 < 11)
                ? 1
                : e % 100 > 10 && e % 100 < 20
                ? 2
                : 3
            );
          },
          20: function (e) {
            return Number(
              1 == e ? 0 : 0 == e || (e % 100 > 0 && e % 100 < 20) ? 1 : 2
            );
          },
          21: function (e) {
            return Number(
              e % 100 == 1
                ? 1
                : e % 100 == 2
                ? 2
                : e % 100 == 3 || e % 100 == 4
                ? 3
                : 0
            );
          },
          22: function (e) {
            return Number(
              1 == e ? 0 : 2 == e ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3
            );
          },
        },
        eu = ["v1", "v2", "v3"],
        ec = ["v4"],
        ed = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 };
      class ep {
        constructor(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          (this.languageUtils = e),
            (this.options = t),
            (this.logger = D.create("pluralResolver")),
            (!this.options.compatibilityJSON ||
              ec.includes(this.options.compatibilityJSON)) &&
              ("undefined" == typeof Intl || !Intl.PluralRules) &&
              ((this.options.compatibilityJSON = "v3"),
              this.logger.error(
                "Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling."
              )),
            (this.rules = (function () {
              let e = {};
              return (
                ea.forEach((t) => {
                  t.lngs.forEach((n) => {
                    e[n] = { numbers: t.nr, plurals: el[t.fc] };
                  });
                }),
                e
              );
            })());
        }
        addRule(e, t) {
          this.rules[e] = t;
        }
        getRule(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (this.shouldUseIntlApi())
            try {
              return new Intl.PluralRules(ee("dev" === e ? "en" : e), {
                type: t.ordinal ? "ordinal" : "cardinal",
              });
            } catch (e) {
              return;
            }
          return (
            this.rules[e] ||
            this.rules[this.languageUtils.getLanguagePartFromCode(e)]
          );
        }
        needsPlural(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = this.getRule(e, t);
          return this.shouldUseIntlApi()
            ? n && n.resolvedOptions().pluralCategories.length > 1
            : n && n.numbers.length > 1;
        }
        getPluralFormsOfKey(e, t) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          return this.getSuffixes(e, n).map((e) => `${t}${e}`);
        }
        getSuffixes(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = this.getRule(e, t);
          return n
            ? this.shouldUseIntlApi()
              ? n
                  .resolvedOptions()
                  .pluralCategories.sort((e, t) => ed[e] - ed[t])
                  .map(
                    (e) =>
                      `${this.options.prepend}${
                        t.ordinal ? `ordinal${this.options.prepend}` : ""
                      }${e}`
                  )
              : n.numbers.map((n) => this.getSuffix(e, n, t))
            : [];
        }
        getSuffix(e, t) {
          let n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            r = this.getRule(e, n);
          return r
            ? this.shouldUseIntlApi()
              ? `${this.options.prepend}${
                  n.ordinal ? `ordinal${this.options.prepend}` : ""
                }${r.select(t)}`
              : this.getSuffixRetroCompatible(r, t)
            : (this.logger.warn(`no plural rule found for: ${e}`), "");
        }
        getSuffixRetroCompatible(e, t) {
          let n = e.noAbs ? e.plurals(t) : e.plurals(Math.abs(t)),
            r = e.numbers[n];
          this.options.simplifyPluralSuffix &&
            2 === e.numbers.length &&
            1 === e.numbers[0] &&
            (2 === r ? (r = "plural") : 1 === r && (r = ""));
          let o = () =>
            this.options.prepend && r.toString()
              ? this.options.prepend + r.toString()
              : r.toString();
          return "v1" === this.options.compatibilityJSON
            ? 1 === r
              ? ""
              : "number" == typeof r
              ? `_plural_${r.toString()}`
              : o()
            : "v2" === this.options.compatibilityJSON ||
              (this.options.simplifyPluralSuffix &&
                2 === e.numbers.length &&
                1 === e.numbers[0])
            ? o()
            : this.options.prepend && n.toString()
            ? this.options.prepend + n.toString()
            : n.toString();
        }
        shouldUseIntlApi() {
          return !eu.includes(this.options.compatibilityJSON);
        }
      }
      function ef(e, t, n) {
        let r =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : ".",
          o =
            !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
          i = (function (e, t, n) {
            let r = J(e, n);
            return void 0 !== r ? r : J(t, n);
          })(e, t, n);
        return (
          !i &&
            o &&
            "string" == typeof n &&
            void 0 === (i = Z(e, n, r)) &&
            (i = Z(t, n, r)),
          i
        );
      }
      class eg {
        constructor() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          (this.logger = D.create("interpolator")),
            (this.options = e),
            (this.format =
              (e.interpolation && e.interpolation.format) || ((e) => e)),
            this.init(e);
        }
        init() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          e.interpolation || (e.interpolation = { escapeValue: !0 });
          let {
            escape: t,
            escapeValue: n,
            useRawValueToEscape: r,
            prefix: o,
            prefixEscaped: i,
            suffix: s,
            suffixEscaped: a,
            formatSeparator: l,
            unescapeSuffix: u,
            unescapePrefix: c,
            nestingPrefix: d,
            nestingPrefixEscaped: p,
            nestingSuffix: f,
            nestingSuffixEscaped: g,
            nestingOptionsSeparator: h,
            maxReplaces: m,
            alwaysFormat: y,
          } = e.interpolation;
          (this.escape = void 0 !== t ? t : Q),
            (this.escapeValue = void 0 === n || n),
            (this.useRawValueToEscape = void 0 !== r && r),
            (this.prefix = o ? q(o) : i || "{{"),
            (this.suffix = s ? q(s) : a || "}}"),
            (this.formatSeparator = l || ","),
            (this.unescapePrefix = u ? "" : c || "-"),
            (this.unescapeSuffix = this.unescapePrefix ? "" : u || ""),
            (this.nestingPrefix = d ? q(d) : p || q("$t(")),
            (this.nestingSuffix = f ? q(f) : g || q(")")),
            (this.nestingOptionsSeparator = h || ","),
            (this.maxReplaces = m || 1e3),
            (this.alwaysFormat = void 0 !== y && y),
            this.resetRegExp();
        }
        reset() {
          this.options && this.init(this.options);
        }
        resetRegExp() {
          let e = (e, t) =>
            e && e.source === t ? ((e.lastIndex = 0), e) : RegExp(t, "g");
          (this.regexp = e(this.regexp, `${this.prefix}(.+?)${this.suffix}`)),
            (this.regexpUnescape = e(
              this.regexpUnescape,
              `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`
            )),
            (this.nestingRegexp = e(
              this.nestingRegexp,
              `${this.nestingPrefix}(.+?)${this.nestingSuffix}`
            ));
        }
        interpolate(e, t, n, r) {
          let o, i, s;
          let a =
            (this.options &&
              this.options.interpolation &&
              this.options.interpolation.defaultVariables) ||
            {};
          function l(e) {
            return e.replace(/\$/g, "$$$$");
          }
          let u = (e) => {
            if (0 > e.indexOf(this.formatSeparator)) {
              let o = ef(
                t,
                a,
                e,
                this.options.keySeparator,
                this.options.ignoreJSONStructure
              );
              return this.alwaysFormat
                ? this.format(o, void 0, n, { ...r, ...t, interpolationkey: e })
                : o;
            }
            let o = e.split(this.formatSeparator),
              i = o.shift().trim(),
              s = o.join(this.formatSeparator).trim();
            return this.format(
              ef(
                t,
                a,
                i,
                this.options.keySeparator,
                this.options.ignoreJSONStructure
              ),
              s,
              n,
              { ...r, ...t, interpolationkey: i }
            );
          };
          this.resetRegExp();
          let c =
              (r && r.missingInterpolationHandler) ||
              this.options.missingInterpolationHandler,
            d =
              r && r.interpolation && void 0 !== r.interpolation.skipOnVariables
                ? r.interpolation.skipOnVariables
                : this.options.interpolation.skipOnVariables;
          return (
            [
              { regex: this.regexpUnescape, safeValue: (e) => l(e) },
              {
                regex: this.regexp,
                safeValue: (e) => (this.escapeValue ? l(this.escape(e)) : l(e)),
              },
            ].forEach((t) => {
              for (s = 0; (o = t.regex.exec(e)); ) {
                let n = o[1].trim();
                if (void 0 === (i = u(n))) {
                  if ("function" == typeof c) {
                    let t = c(e, o, r);
                    i = "string" == typeof t ? t : "";
                  } else if (r && Object.prototype.hasOwnProperty.call(r, n))
                    i = "";
                  else if (d) {
                    i = o[0];
                    continue;
                  } else
                    this.logger.warn(
                      `missed to pass in variable ${n} for interpolating ${e}`
                    ),
                      (i = "");
                } else
                  "string" == typeof i ||
                    this.useRawValueToEscape ||
                    (i = U(i));
                let a = t.safeValue(i);
                if (
                  ((e = e.replace(o[0], a)),
                  d
                    ? ((t.regex.lastIndex += i.length),
                      (t.regex.lastIndex -= o[0].length))
                    : (t.regex.lastIndex = 0),
                  ++s >= this.maxReplaces)
                )
                  break;
              }
            }),
            e
          );
        }
        nest(e, t) {
          let n,
            r,
            o,
            i =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
          function s(e, t) {
            let n = this.nestingOptionsSeparator;
            if (0 > e.indexOf(n)) return e;
            let r = e.split(RegExp(`${n}[ ]*{`)),
              i = `{${r[1]}`;
            e = r[0];
            let s = (i = this.interpolate(i, o)).match(/'/g),
              a = i.match(/"/g);
            ((s && s.length % 2 == 0 && !a) || a.length % 2 != 0) &&
              (i = i.replace(/'/g, '"'));
            try {
              (o = JSON.parse(i)), t && (o = { ...t, ...o });
            } catch (t) {
              return (
                this.logger.warn(
                  `failed parsing options string in nesting for key ${e}`,
                  t
                ),
                `${e}${n}${i}`
              );
            }
            return (
              o.defaultValue &&
                o.defaultValue.indexOf(this.prefix) > -1 &&
                delete o.defaultValue,
              e
            );
          }
          for (; (n = this.nestingRegexp.exec(e)); ) {
            let a = [];
            ((o =
              (o = { ...i }).replace && "string" != typeof o.replace
                ? o.replace
                : o).applyPostProcessor = !1),
              delete o.defaultValue;
            let l = !1;
            if (
              -1 !== n[0].indexOf(this.formatSeparator) &&
              !/{.*}/.test(n[1])
            ) {
              let e = n[1].split(this.formatSeparator).map((e) => e.trim());
              (n[1] = e.shift()), (a = e), (l = !0);
            }
            if (
              (r = t(s.call(this, n[1].trim(), o), o)) &&
              n[0] === e &&
              "string" != typeof r
            )
              return r;
            "string" != typeof r && (r = U(r)),
              r ||
                (this.logger.warn(`missed to resolve ${n[1]} for nesting ${e}`),
                (r = "")),
              l &&
                (r = a.reduce(
                  (e, t) =>
                    this.format(e, t, i.lng, {
                      ...i,
                      interpolationkey: n[1].trim(),
                    }),
                  r.trim()
                )),
              (e = e.replace(n[0], r)),
              (this.regexp.lastIndex = 0);
          }
          return e;
        }
      }
      function eh(e) {
        let t = {};
        return function (n, r, o) {
          let i = r + JSON.stringify(o),
            s = t[i];
          return s || ((s = e(ee(r), o)), (t[i] = s)), s(n);
        };
      }
      class em {
        constructor() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          (this.logger = D.create("formatter")),
            (this.options = e),
            (this.formats = {
              number: eh((e, t) => {
                let n = new Intl.NumberFormat(e, { ...t });
                return (e) => n.format(e);
              }),
              currency: eh((e, t) => {
                let n = new Intl.NumberFormat(e, { ...t, style: "currency" });
                return (e) => n.format(e);
              }),
              datetime: eh((e, t) => {
                let n = new Intl.DateTimeFormat(e, { ...t });
                return (e) => n.format(e);
              }),
              relativetime: eh((e, t) => {
                let n = new Intl.RelativeTimeFormat(e, { ...t });
                return (e) => n.format(e, t.range || "day");
              }),
              list: eh((e, t) => {
                let n = new Intl.ListFormat(e, { ...t });
                return (e) => n.format(e);
              }),
            }),
            this.init(e);
        }
        init(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : { interpolation: {} },
            n = t.interpolation;
          this.formatSeparator = n.formatSeparator
            ? n.formatSeparator
            : n.formatSeparator || ",";
        }
        add(e, t) {
          this.formats[e.toLowerCase().trim()] = t;
        }
        addCached(e, t) {
          this.formats[e.toLowerCase().trim()] = eh(t);
        }
        format(e, t, n) {
          let r =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
          return t.split(this.formatSeparator).reduce((e, t) => {
            let { formatName: o, formatOptions: i } = (function (e) {
              let t = e.toLowerCase().trim(),
                n = {};
              if (e.indexOf("(") > -1) {
                let r = e.split("(");
                t = r[0].toLowerCase().trim();
                let o = r[1].substring(0, r[1].length - 1);
                "currency" === t && 0 > o.indexOf(":")
                  ? n.currency || (n.currency = o.trim())
                  : "relativetime" === t && 0 > o.indexOf(":")
                  ? n.range || (n.range = o.trim())
                  : o.split(";").forEach((e) => {
                      if (e) {
                        let [t, ...r] = e.split(":"),
                          o = r
                            .join(":")
                            .trim()
                            .replace(/^'+|'+$/g, ""),
                          i = t.trim();
                        n[i] || (n[i] = o),
                          "false" === o && (n[i] = !1),
                          "true" === o && (n[i] = !0),
                          isNaN(o) || (n[i] = parseInt(o, 10));
                      }
                    });
              }
              return { formatName: t, formatOptions: n };
            })(t);
            if (this.formats[o]) {
              let t = e;
              try {
                let s =
                    (r &&
                      r.formatParams &&
                      r.formatParams[r.interpolationkey]) ||
                    {},
                  a = s.locale || s.lng || r.locale || r.lng || n;
                t = this.formats[o](e, a, { ...i, ...r, ...s });
              } catch (e) {
                this.logger.warn(e);
              }
              return t;
            }
            return this.logger.warn(`there was no format function for ${o}`), e;
          }, e);
        }
      }
      class ey extends V {
        constructor(e, t, n) {
          let r =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
          super(),
            (this.backend = e),
            (this.store = t),
            (this.services = n),
            (this.languageUtils = n.languageUtils),
            (this.options = r),
            (this.logger = D.create("backendConnector")),
            (this.waitingReads = []),
            (this.maxParallelReads = r.maxParallelReads || 10),
            (this.readingCalls = 0),
            (this.maxRetries = r.maxRetries >= 0 ? r.maxRetries : 5),
            (this.retryTimeout = r.retryTimeout >= 1 ? r.retryTimeout : 350),
            (this.state = {}),
            (this.queue = []),
            this.backend &&
              this.backend.init &&
              this.backend.init(n, r.backend, r);
        }
        queueLoad(e, t, n, r) {
          let o = {},
            i = {},
            s = {},
            a = {};
          return (
            e.forEach((e) => {
              let r = !0;
              t.forEach((t) => {
                let s = `${e}|${t}`;
                !n.reload && this.store.hasResourceBundle(e, t)
                  ? (this.state[s] = 2)
                  : this.state[s] < 0 ||
                    (1 === this.state[s]
                      ? void 0 === i[s] && (i[s] = !0)
                      : ((this.state[s] = 1),
                        (r = !1),
                        void 0 === i[s] && (i[s] = !0),
                        void 0 === o[s] && (o[s] = !0),
                        void 0 === a[t] && (a[t] = !0)));
              }),
                r || (s[e] = !0);
            }),
            (Object.keys(o).length || Object.keys(i).length) &&
              this.queue.push({
                pending: i,
                pendingCount: Object.keys(i).length,
                loaded: {},
                errors: [],
                callback: r,
              }),
            {
              toLoad: Object.keys(o),
              pending: Object.keys(i),
              toLoadLanguages: Object.keys(s),
              toLoadNamespaces: Object.keys(a),
            }
          );
        }
        loaded(e, t, n) {
          let r = e.split("|"),
            o = r[0],
            i = r[1];
          t && this.emit("failedLoading", o, i, t),
            n &&
              this.store.addResourceBundle(o, i, n, void 0, void 0, {
                skipCopy: !0,
              }),
            (this.state[e] = t ? -1 : 2);
          let s = {};
          this.queue.forEach((n) => {
            (function (e, t, n, r) {
              let { obj: o, k: i } = H(e, t, Object);
              (o[i] = o[i] || []),
                r && (o[i] = o[i].concat(n)),
                r || o[i].push(n);
            })(n.loaded, [o], i),
              void 0 !== n.pending[e] &&
                (delete n.pending[e], n.pendingCount--),
              t && n.errors.push(t),
              0 !== n.pendingCount ||
                n.done ||
                (Object.keys(n.loaded).forEach((e) => {
                  s[e] || (s[e] = {});
                  let t = n.loaded[e];
                  t.length &&
                    t.forEach((t) => {
                      void 0 === s[e][t] && (s[e][t] = !0);
                    });
                }),
                (n.done = !0),
                n.errors.length ? n.callback(n.errors) : n.callback());
          }),
            this.emit("loaded", s),
            (this.queue = this.queue.filter((e) => !e.done));
        }
        read(e, t, n) {
          let r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : 0,
            o =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : this.retryTimeout,
            i = arguments.length > 5 ? arguments[5] : void 0;
          if (!e.length) return i(null, {});
          if (this.readingCalls >= this.maxParallelReads) {
            this.waitingReads.push({
              lng: e,
              ns: t,
              fcName: n,
              tried: r,
              wait: o,
              callback: i,
            });
            return;
          }
          this.readingCalls++;
          let s = (s, a) => {
              if ((this.readingCalls--, this.waitingReads.length > 0)) {
                let e = this.waitingReads.shift();
                this.read(e.lng, e.ns, e.fcName, e.tried, e.wait, e.callback);
              }
              if (s && a && r < this.maxRetries) {
                setTimeout(() => {
                  this.read.call(this, e, t, n, r + 1, 2 * o, i);
                }, o);
                return;
              }
              i(s, a);
            },
            a = this.backend[n].bind(this.backend);
          if (2 === a.length) {
            try {
              let n = a(e, t);
              n && "function" == typeof n.then
                ? n.then((e) => s(null, e)).catch(s)
                : s(null, n);
            } catch (e) {
              s(e);
            }
            return;
          }
          return a(e, t, s);
        }
        prepareLoading(e, t) {
          let n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            r = arguments.length > 3 ? arguments[3] : void 0;
          if (!this.backend)
            return (
              this.logger.warn(
                "No backend was added via i18next.use. Will not load resources."
              ),
              r && r()
            );
          "string" == typeof e &&
            (e = this.languageUtils.toResolveHierarchy(e)),
            "string" == typeof t && (t = [t]);
          let o = this.queueLoad(e, t, n, r);
          if (!o.toLoad.length) return o.pending.length || r(), null;
          o.toLoad.forEach((e) => {
            this.loadOne(e);
          });
        }
        load(e, t, n) {
          this.prepareLoading(e, t, {}, n);
        }
        reload(e, t, n) {
          this.prepareLoading(e, t, { reload: !0 }, n);
        }
        loadOne(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "",
            n = e.split("|"),
            r = n[0],
            o = n[1];
          this.read(r, o, "read", void 0, void 0, (n, i) => {
            n &&
              this.logger.warn(
                `${t}loading namespace ${o} for language ${r} failed`,
                n
              ),
              !n &&
                i &&
                this.logger.log(
                  `${t}loaded namespace ${o} for language ${r}`,
                  i
                ),
              this.loaded(e, n, i);
          });
        }
        saveMissing(e, t, n, r, o) {
          let i =
              arguments.length > 5 && void 0 !== arguments[5]
                ? arguments[5]
                : {},
            s =
              arguments.length > 6 && void 0 !== arguments[6]
                ? arguments[6]
                : () => {};
          if (
            this.services.utils &&
            this.services.utils.hasLoadedNamespace &&
            !this.services.utils.hasLoadedNamespace(t)
          ) {
            this.logger.warn(
              `did not save key "${n}" as the namespace "${t}" was not yet loaded`,
              "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!"
            );
            return;
          }
          if (null != n && "" !== n) {
            if (this.backend && this.backend.create) {
              let a = { ...i, isUpdate: o },
                l = this.backend.create.bind(this.backend);
              if (l.length < 6)
                try {
                  let o;
                  (o = 5 === l.length ? l(e, t, n, r, a) : l(e, t, n, r)) &&
                  "function" == typeof o.then
                    ? o.then((e) => s(null, e)).catch(s)
                    : s(null, o);
                } catch (e) {
                  s(e);
                }
              else l(e, t, n, r, s, a);
            }
            e && e[0] && this.store.addResource(e[0], t, n, r);
          }
        }
      }
      function ev() {
        return {
          debug: !1,
          initImmediate: !0,
          ns: ["translation"],
          defaultNS: ["translation"],
          fallbackLng: ["dev"],
          fallbackNS: !1,
          supportedLngs: !1,
          nonExplicitSupportedLngs: !1,
          load: "all",
          preload: !1,
          simplifyPluralSuffix: !0,
          keySeparator: ".",
          nsSeparator: ":",
          pluralSeparator: "_",
          contextSeparator: "_",
          partialBundledLanguages: !1,
          saveMissing: !1,
          updateMissing: !1,
          saveMissingTo: "fallback",
          saveMissingPlurals: !0,
          missingKeyHandler: !1,
          missingInterpolationHandler: !1,
          postProcess: !1,
          postProcessPassResolved: !1,
          returnNull: !1,
          returnEmptyString: !0,
          returnObjects: !1,
          joinArrays: !1,
          returnedObjectHandler: !1,
          parseMissingKeyHandler: !1,
          appendNamespaceToMissingKey: !1,
          appendNamespaceToCIMode: !1,
          overloadTranslationOptionHandler: function (e) {
            let t = {};
            if (
              ("object" == typeof e[1] && (t = e[1]),
              "string" == typeof e[1] && (t.defaultValue = e[1]),
              "string" == typeof e[2] && (t.tDescription = e[2]),
              "object" == typeof e[2] || "object" == typeof e[3])
            ) {
              let n = e[3] || e[2];
              Object.keys(n).forEach((e) => {
                t[e] = n[e];
              });
            }
            return t;
          },
          interpolation: {
            escapeValue: !0,
            format: (e) => e,
            prefix: "{{",
            suffix: "}}",
            formatSeparator: ",",
            unescapePrefix: "-",
            nestingPrefix: "$t(",
            nestingSuffix: ")",
            nestingOptionsSeparator: ",",
            maxReplaces: 1e3,
            skipOnVariables: !0,
          },
        };
      }
      function eb(e) {
        return (
          "string" == typeof e.ns && (e.ns = [e.ns]),
          "string" == typeof e.fallbackLng && (e.fallbackLng = [e.fallbackLng]),
          "string" == typeof e.fallbackNS && (e.fallbackNS = [e.fallbackNS]),
          e.supportedLngs &&
            0 > e.supportedLngs.indexOf("cimode") &&
            (e.supportedLngs = e.supportedLngs.concat(["cimode"])),
          e
        );
      }
      function eS() {}
      class ex extends V {
        constructor() {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = arguments.length > 1 ? arguments[1] : void 0;
          if (
            (super(),
            (this.options = eb(e)),
            (this.services = {}),
            (this.logger = D),
            (this.modules = { external: [] }),
            !(function (e) {
              Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(
                (t) => {
                  "function" == typeof e[t] && (e[t] = e[t].bind(e));
                }
              );
            })(this),
            t && !this.isInitialized && !e.isClone)
          ) {
            if (!this.options.initImmediate) return this.init(e, t), this;
            setTimeout(() => {
              this.init(e, t);
            }, 0);
          }
        }
        init() {
          var e = this;
          let t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            n = arguments.length > 1 ? arguments[1] : void 0;
          (this.isInitializing = !0),
            "function" == typeof t && ((n = t), (t = {})),
            !t.defaultNS &&
              !1 !== t.defaultNS &&
              t.ns &&
              ("string" == typeof t.ns
                ? (t.defaultNS = t.ns)
                : 0 > t.ns.indexOf("translation") && (t.defaultNS = t.ns[0]));
          let r = ev();
          function o(e) {
            return e ? ("function" == typeof e ? new e() : e) : null;
          }
          if (
            ((this.options = { ...r, ...this.options, ...eb(t) }),
            "v1" !== this.options.compatibilityAPI &&
              (this.options.interpolation = {
                ...r.interpolation,
                ...this.options.interpolation,
              }),
            void 0 !== t.keySeparator &&
              (this.options.userDefinedKeySeparator = t.keySeparator),
            void 0 !== t.nsSeparator &&
              (this.options.userDefinedNsSeparator = t.nsSeparator),
            !this.options.isClone)
          ) {
            let t;
            this.modules.logger
              ? D.init(o(this.modules.logger), this.options)
              : D.init(null, this.options),
              this.modules.formatter
                ? (t = this.modules.formatter)
                : "undefined" != typeof Intl && (t = em);
            let n = new es(this.options);
            this.store = new et(this.options.resources, this.options);
            let i = this.services;
            (i.logger = D),
              (i.resourceStore = this.store),
              (i.languageUtils = n),
              (i.pluralResolver = new ep(n, {
                prepend: this.options.pluralSeparator,
                compatibilityJSON: this.options.compatibilityJSON,
                simplifyPluralSuffix: this.options.simplifyPluralSuffix,
              })),
              t &&
                (!this.options.interpolation.format ||
                  this.options.interpolation.format ===
                    r.interpolation.format) &&
                ((i.formatter = o(t)),
                i.formatter.init(i, this.options),
                (this.options.interpolation.format = i.formatter.format.bind(
                  i.formatter
                ))),
              (i.interpolator = new eg(this.options)),
              (i.utils = {
                hasLoadedNamespace: this.hasLoadedNamespace.bind(this),
              }),
              (i.backendConnector = new ey(
                o(this.modules.backend),
                i.resourceStore,
                i,
                this.options
              )),
              i.backendConnector.on("*", function (t) {
                for (
                  var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), o = 1;
                  o < n;
                  o++
                )
                  r[o - 1] = arguments[o];
                e.emit(t, ...r);
              }),
              this.modules.languageDetector &&
                ((i.languageDetector = o(this.modules.languageDetector)),
                i.languageDetector.init &&
                  i.languageDetector.init(
                    i,
                    this.options.detection,
                    this.options
                  )),
              this.modules.i18nFormat &&
                ((i.i18nFormat = o(this.modules.i18nFormat)),
                i.i18nFormat.init && i.i18nFormat.init(this)),
              (this.translator = new eo(this.services, this.options)),
              this.translator.on("*", function (t) {
                for (
                  var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), o = 1;
                  o < n;
                  o++
                )
                  r[o - 1] = arguments[o];
                e.emit(t, ...r);
              }),
              this.modules.external.forEach((e) => {
                e.init && e.init(this);
              });
          }
          if (
            ((this.format = this.options.interpolation.format),
            n || (n = eS),
            this.options.fallbackLng &&
              !this.services.languageDetector &&
              !this.options.lng)
          ) {
            let e = this.services.languageUtils.getFallbackCodes(
              this.options.fallbackLng
            );
            e.length > 0 && "dev" !== e[0] && (this.options.lng = e[0]);
          }
          this.services.languageDetector ||
            this.options.lng ||
            this.logger.warn(
              "init: no languageDetector is used and no lng is defined"
            ),
            [
              "getResource",
              "hasResourceBundle",
              "getResourceBundle",
              "getDataByLanguage",
            ].forEach((t) => {
              this[t] = function () {
                return e.store[t](...arguments);
              };
            }),
            [
              "addResource",
              "addResources",
              "addResourceBundle",
              "removeResourceBundle",
            ].forEach((t) => {
              this[t] = function () {
                return e.store[t](...arguments), e;
              };
            });
          let i = z(),
            s = () => {
              let e = (e, t) => {
                (this.isInitializing = !1),
                  this.isInitialized &&
                    !this.initializedStoreOnce &&
                    this.logger.warn(
                      "init: i18next is already initialized. You should call init just once!"
                    ),
                  (this.isInitialized = !0),
                  this.options.isClone ||
                    this.logger.log("initialized", this.options),
                  this.emit("initialized", this.options),
                  i.resolve(t),
                  n(e, t);
              };
              if (
                this.languages &&
                "v1" !== this.options.compatibilityAPI &&
                !this.isInitialized
              )
                return e(null, this.t.bind(this));
              this.changeLanguage(this.options.lng, e);
            };
          return (
            this.options.resources || !this.options.initImmediate
              ? s()
              : setTimeout(s, 0),
            i
          );
        }
        loadResources(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : eS,
            n = t,
            r = "string" == typeof e ? e : this.language;
          if (
            ("function" == typeof e && (n = e),
            !this.options.resources || this.options.partialBundledLanguages)
          ) {
            if (
              r &&
              "cimode" === r.toLowerCase() &&
              (!this.options.preload || 0 === this.options.preload.length)
            )
              return n();
            let e = [],
              t = (t) => {
                t &&
                  "cimode" !== t &&
                  this.services.languageUtils
                    .toResolveHierarchy(t)
                    .forEach((t) => {
                      "cimode" !== t && 0 > e.indexOf(t) && e.push(t);
                    });
              };
            r
              ? t(r)
              : this.services.languageUtils
                  .getFallbackCodes(this.options.fallbackLng)
                  .forEach((e) => t(e)),
              this.options.preload && this.options.preload.forEach((e) => t(e)),
              this.services.backendConnector.load(e, this.options.ns, (e) => {
                e ||
                  this.resolvedLanguage ||
                  !this.language ||
                  this.setResolvedLanguage(this.language),
                  n(e);
              });
          } else n(null);
        }
        reloadResources(e, t, n) {
          let r = z();
          return (
            e || (e = this.languages),
            t || (t = this.options.ns),
            n || (n = eS),
            this.services.backendConnector.reload(e, t, (e) => {
              r.resolve(), n(e);
            }),
            r
          );
        }
        use(e) {
          if (!e)
            throw Error(
              "You are passing an undefined module! Please check the object you are passing to i18next.use()"
            );
          if (!e.type)
            throw Error(
              "You are passing a wrong module! Please check the object you are passing to i18next.use()"
            );
          return (
            "backend" === e.type && (this.modules.backend = e),
            ("logger" === e.type || (e.log && e.warn && e.error)) &&
              (this.modules.logger = e),
            "languageDetector" === e.type &&
              (this.modules.languageDetector = e),
            "i18nFormat" === e.type && (this.modules.i18nFormat = e),
            "postProcessor" === e.type && en.addPostProcessor(e),
            "formatter" === e.type && (this.modules.formatter = e),
            "3rdParty" === e.type && this.modules.external.push(e),
            this
          );
        }
        setResolvedLanguage(e) {
          if (e && this.languages && !(["cimode", "dev"].indexOf(e) > -1))
            for (let e = 0; e < this.languages.length; e++) {
              let t = this.languages[e];
              if (
                !(["cimode", "dev"].indexOf(t) > -1) &&
                this.store.hasLanguageSomeTranslations(t)
              ) {
                this.resolvedLanguage = t;
                break;
              }
            }
        }
        changeLanguage(e, t) {
          var n = this;
          this.isLanguageChangingTo = e;
          let r = z();
          this.emit("languageChanging", e);
          let o = (e) => {
              (this.language = e),
                (this.languages =
                  this.services.languageUtils.toResolveHierarchy(e)),
                (this.resolvedLanguage = void 0),
                this.setResolvedLanguage(e);
            },
            i = (e, i) => {
              i
                ? (o(i),
                  this.translator.changeLanguage(i),
                  (this.isLanguageChangingTo = void 0),
                  this.emit("languageChanged", i),
                  this.logger.log("languageChanged", i))
                : (this.isLanguageChangingTo = void 0),
                r.resolve(function () {
                  return n.t(...arguments);
                }),
                t &&
                  t(e, function () {
                    return n.t(...arguments);
                  });
            },
            s = (t) => {
              e || t || !this.services.languageDetector || (t = []);
              let n =
                "string" == typeof t
                  ? t
                  : this.services.languageUtils.getBestMatchFromCodes(t);
              n &&
                (this.language || o(n),
                this.translator.language || this.translator.changeLanguage(n),
                this.services.languageDetector &&
                  this.services.languageDetector.cacheUserLanguage &&
                  this.services.languageDetector.cacheUserLanguage(n)),
                this.loadResources(n, (e) => {
                  i(e, n);
                });
            };
          return (
            e ||
            !this.services.languageDetector ||
            this.services.languageDetector.async
              ? !e &&
                this.services.languageDetector &&
                this.services.languageDetector.async
                ? 0 === this.services.languageDetector.detect.length
                  ? this.services.languageDetector.detect().then(s)
                  : this.services.languageDetector.detect(s)
                : s(e)
              : s(this.services.languageDetector.detect()),
            r
          );
        }
        getFixedT(e, t, n) {
          var r = this;
          let o = function (e, t) {
            let i, s;
            if ("object" != typeof t) {
              for (
                var a = arguments.length, l = Array(a > 2 ? a - 2 : 0), u = 2;
                u < a;
                u++
              )
                l[u - 2] = arguments[u];
              i = r.options.overloadTranslationOptionHandler([e, t].concat(l));
            } else i = { ...t };
            (i.lng = i.lng || o.lng),
              (i.lngs = i.lngs || o.lngs),
              (i.ns = i.ns || o.ns),
              (i.keyPrefix = i.keyPrefix || n || o.keyPrefix);
            let c = r.options.keySeparator || ".";
            return (
              (s =
                i.keyPrefix && Array.isArray(e)
                  ? e.map((e) => `${i.keyPrefix}${c}${e}`)
                  : i.keyPrefix
                  ? `${i.keyPrefix}${c}${e}`
                  : e),
              r.t(s, i)
            );
          };
          return (
            "string" == typeof e ? (o.lng = e) : (o.lngs = e),
            (o.ns = t),
            (o.keyPrefix = n),
            o
          );
        }
        t() {
          return this.translator && this.translator.translate(...arguments);
        }
        exists() {
          return this.translator && this.translator.exists(...arguments);
        }
        setDefaultNamespace(e) {
          this.options.defaultNS = e;
        }
        hasLoadedNamespace(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (!this.isInitialized)
            return (
              this.logger.warn(
                "hasLoadedNamespace: i18next was not initialized",
                this.languages
              ),
              !1
            );
          if (!this.languages || !this.languages.length)
            return (
              this.logger.warn(
                "hasLoadedNamespace: i18n.languages were undefined or empty",
                this.languages
              ),
              !1
            );
          let n = t.lng || this.resolvedLanguage || this.languages[0],
            r = !!this.options && this.options.fallbackLng,
            o = this.languages[this.languages.length - 1];
          if ("cimode" === n.toLowerCase()) return !0;
          let i = (e, t) => {
            let n = this.services.backendConnector.state[`${e}|${t}`];
            return -1 === n || 2 === n;
          };
          if (t.precheck) {
            let e = t.precheck(this, i);
            if (void 0 !== e) return e;
          }
          return !!(
            this.hasResourceBundle(n, e) ||
            !this.services.backendConnector.backend ||
            (this.options.resources && !this.options.partialBundledLanguages) ||
            (i(n, e) && (!r || i(o, e)))
          );
        }
        loadNamespaces(e, t) {
          let n = z();
          return this.options.ns
            ? ("string" == typeof e && (e = [e]),
              e.forEach((e) => {
                0 > this.options.ns.indexOf(e) && this.options.ns.push(e);
              }),
              this.loadResources((e) => {
                n.resolve(), t && t(e);
              }),
              n)
            : (t && t(), Promise.resolve());
        }
        loadLanguages(e, t) {
          let n = z();
          "string" == typeof e && (e = [e]);
          let r = this.options.preload || [],
            o = e.filter(
              (e) =>
                0 > r.indexOf(e) &&
                this.services.languageUtils.isSupportedCode(e)
            );
          return o.length
            ? ((this.options.preload = r.concat(o)),
              this.loadResources((e) => {
                n.resolve(), t && t(e);
              }),
              n)
            : (t && t(), Promise.resolve());
        }
        dir(e) {
          return (e ||
            (e =
              this.resolvedLanguage ||
              (this.languages && this.languages.length > 0
                ? this.languages[0]
                : this.language)),
          e)
            ? [
                "ar",
                "shu",
                "sqr",
                "ssh",
                "xaa",
                "yhd",
                "yud",
                "aao",
                "abh",
                "abv",
                "acm",
                "acq",
                "acw",
                "acx",
                "acy",
                "adf",
                "ads",
                "aeb",
                "aec",
                "afb",
                "ajp",
                "apc",
                "apd",
                "arb",
                "arq",
                "ars",
                "ary",
                "arz",
                "auz",
                "avl",
                "ayh",
                "ayl",
                "ayn",
                "ayp",
                "bbz",
                "pga",
                "he",
                "iw",
                "ps",
                "pbt",
                "pbu",
                "pst",
                "prp",
                "prd",
                "ug",
                "ur",
                "ydd",
                "yds",
                "yih",
                "ji",
                "yi",
                "hbo",
                "men",
                "xmn",
                "fa",
                "jpr",
                "peo",
                "pes",
                "prs",
                "dv",
                "sam",
                "ckb",
              ].indexOf(
                (
                  (this.services && this.services.languageUtils) ||
                  new es(ev())
                ).getLanguagePartFromCode(e)
              ) > -1 || e.toLowerCase().indexOf("-arab") > 1
              ? "rtl"
              : "ltr"
            : "rtl";
        }
        static createInstance() {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = arguments.length > 1 ? arguments[1] : void 0;
          return new ex(e, t);
        }
        cloneInstance() {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : eS,
            n = e.forkResourceStore;
          n && delete e.forkResourceStore;
          let r = { ...this.options, ...e, isClone: !0 },
            o = new ex(r);
          return (
            (void 0 !== e.debug || void 0 !== e.prefix) &&
              (o.logger = o.logger.clone(e)),
            ["store", "services", "language"].forEach((e) => {
              o[e] = this[e];
            }),
            (o.services = { ...this.services }),
            (o.services.utils = {
              hasLoadedNamespace: o.hasLoadedNamespace.bind(o),
            }),
            n &&
              ((o.store = new et(this.store.data, r)),
              (o.services.resourceStore = o.store)),
            (o.translator = new eo(o.services, r)),
            o.translator.on("*", function (e) {
              for (
                var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
                r < t;
                r++
              )
                n[r - 1] = arguments[r];
              o.emit(e, ...n);
            }),
            o.init(r, t),
            (o.translator.options = r),
            (o.translator.backendConnector.services.utils = {
              hasLoadedNamespace: o.hasLoadedNamespace.bind(o),
            }),
            o
          );
        }
        toJSON() {
          return {
            options: this.options,
            store: this.store,
            language: this.language,
            languages: this.languages,
            resolvedLanguage: this.resolvedLanguage,
          };
        }
      }
      let eO = ex.createInstance();
      (eO.createInstance = ex.createInstance),
        eO.createInstance,
        eO.dir,
        eO.init,
        eO.loadResources,
        eO.reloadResources,
        eO.use,
        eO.changeLanguage,
        eO.getFixedT,
        eO.t,
        eO.exists,
        eO.setDefaultNamespace,
        eO.hasLoadedNamespace,
        eO.loadNamespaces,
        eO.loadLanguages;
      var ek = function (e) {
          void 0 === e.ns && (e.ns = []);
          var t,
            n,
            r = eO.createInstance(e);
          return (
            r.isInitialized
              ? (t = Promise.resolve(eO.t))
              : (null == e ||
                  null === (n = e.use) ||
                  void 0 === n ||
                  n.forEach(function (e) {
                    return r.use(e);
                  }),
                "function" == typeof e.onPreInitI18next &&
                  e.onPreInitI18next(r),
                (t = r.init(e))),
            { i18n: r, initPromise: t }
          );
        },
        ew = o.createElement;
      function eL(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function eE(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? eL(Object(n), !0).forEach(function (t) {
                O(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : eL(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var eC = function (e, t) {
          if (t && e.isInitialized)
            for (var n = 0, r = Object.keys(t); n < r.length; n++)
              for (
                var o = r[n], i = 0, s = Object.keys(t[o]);
                i < s.length;
                i++
              ) {
                var a,
                  l = s[i];
                (null != e &&
                  null !== (a = e.store) &&
                  void 0 !== a &&
                  a.data &&
                  e.store.data[o] &&
                  e.store.data[o][l]) ||
                  e.addResourceBundle(o, l, t[o][l], !0, !0);
              }
        },
        eP = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : null;
          return w()(function (n) {
            var r,
              i,
              s = (n.pageProps || {})._nextI18Next,
              a =
                null !== (r = null == s ? void 0 : s.initialLocale) &&
                void 0 !== r
                  ? r
                  : null == n || null === (i = n.router) || void 0 === i
                  ? void 0
                  : i.locale,
              l = null == s ? void 0 : s.ns,
              u = (0, o.useRef)(null),
              c = (0, o.useMemo)(
                function () {
                  if (!s && !t) return null;
                  var e,
                    n = null != t ? t : null == s ? void 0 : s.userConfig;
                  if (!n)
                    throw Error(
                      "appWithTranslation was called without a next-i18next config"
                    );
                  if (!(null != n && n.i18n))
                    throw Error(
                      "appWithTranslation was called without config.i18n"
                    );
                  if (
                    !(
                      null != n &&
                      null !== (e = n.i18n) &&
                      void 0 !== e &&
                      e.defaultLocale
                    )
                  )
                    throw Error(
                      "config.i18n does not include a defaultLocale property"
                    );
                  var r = (s || {}).initialI18nStore,
                    o = null != t && t.resources ? t.resources : r;
                  a || (a = n.i18n.defaultLocale);
                  var i = u.current;
                  return (
                    i
                      ? eC(i, o)
                      : (eC(
                          (i = ek(
                            eE(
                              eE(
                                eE({}, A(eE(eE({}, n), {}, { lng: a }))),
                                {},
                                { lng: a },
                                l && { ns: l }
                              ),
                              {},
                              { resources: o }
                            )
                          ).i18n),
                          o
                        ),
                        (u.current = i)),
                    i
                  );
                },
                [s, a, l]
              );
            return (
              j(
                function () {
                  c && a && c.changeLanguage(a);
                },
                [c, a]
              ),
              null !== c
                ? ew(b, { i18n: c }, ew(e, n))
                : ew(e, S({ key: a }, n))
            );
          }, e);
        };
    },
    86570: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app",
        function () {
          return n(6587);
        },
      ]);
    },
    45932: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "actionAsyncStorage", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let r = (0, n(67531).createAsyncLocalStorage)();
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    67531: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "createAsyncLocalStorage", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let n = Error(
        "Invariant: AsyncLocalStorage accessed in runtime where it is not available"
      );
      class r {
        disable() {
          throw n;
        }
        getStore() {}
        run() {
          throw n;
        }
        exit() {
          throw n;
        }
        enterWith() {
          throw n;
        }
      }
      let o = globalThis.AsyncLocalStorage;
      function i() {
        return o ? new o() : new r();
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    76923: function (e, t, n) {
      "use strict";
      function r(e) {}
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "clientHookInServerComponentError", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
        n(43219),
        n(2784),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    58710: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          ReadonlyURLSearchParams: function () {
            return f;
          },
          useSearchParams: function () {
            return g;
          },
          usePathname: function () {
            return h;
          },
          ServerInsertedHTMLContext: function () {
            return l.ServerInsertedHTMLContext;
          },
          useServerInsertedHTML: function () {
            return l.useServerInsertedHTML;
          },
          useRouter: function () {
            return m;
          },
          useParams: function () {
            return y;
          },
          useSelectedLayoutSegments: function () {
            return v;
          },
          useSelectedLayoutSegment: function () {
            return b;
          },
          redirect: function () {
            return u.redirect;
          },
          permanentRedirect: function () {
            return u.permanentRedirect;
          },
          RedirectType: function () {
            return u.RedirectType;
          },
          notFound: function () {
            return c.notFound;
          },
        });
      let r = n(2784),
        o = n(56428),
        i = n(26297),
        s = n(76923),
        a = n(33607),
        l = n(9424),
        u = n(84830),
        c = n(70929),
        d = Symbol("internal for urlsearchparams readonly");
      function p() {
        return Error("ReadonlyURLSearchParams cannot be modified");
      }
      class f {
        [Symbol.iterator]() {
          return this[d][Symbol.iterator]();
        }
        append() {
          throw p();
        }
        delete() {
          throw p();
        }
        set() {
          throw p();
        }
        sort() {
          throw p();
        }
        constructor(e) {
          (this[d] = e),
            (this.entries = e.entries.bind(e)),
            (this.forEach = e.forEach.bind(e)),
            (this.get = e.get.bind(e)),
            (this.getAll = e.getAll.bind(e)),
            (this.has = e.has.bind(e)),
            (this.keys = e.keys.bind(e)),
            (this.values = e.values.bind(e)),
            (this.toString = e.toString.bind(e)),
            (this.size = e.size);
        }
      }
      function g() {
        (0, s.clientHookInServerComponentError)("useSearchParams");
        let e = (0, r.useContext)(i.SearchParamsContext);
        return (0, r.useMemo)(() => (e ? new f(e) : null), [e]);
      }
      function h() {
        return (
          (0, s.clientHookInServerComponentError)("usePathname"),
          (0, r.useContext)(i.PathnameContext)
        );
      }
      function m() {
        (0, s.clientHookInServerComponentError)("useRouter");
        let e = (0, r.useContext)(o.AppRouterContext);
        if (null === e)
          throw Error("invariant expected app router to be mounted");
        return e;
      }
      function y() {
        (0, s.clientHookInServerComponentError)("useParams");
        let e = (0, r.useContext)(o.GlobalLayoutRouterContext),
          t = (0, r.useContext)(i.PathParamsContext);
        return (0, r.useMemo)(
          () =>
            (null == e ? void 0 : e.tree)
              ? (function e(t, n) {
                  for (let r of (void 0 === n && (n = {}),
                  Object.values(t[1]))) {
                    let t = r[0],
                      o = Array.isArray(t),
                      i = o ? t[1] : t;
                    !i ||
                      i.startsWith("__PAGE__") ||
                      (o && ("c" === t[2] || "oc" === t[2])
                        ? (n[t[0]] = t[1].split("/"))
                        : o && (n[t[0]] = t[1]),
                      (n = e(r, n)));
                  }
                  return n;
                })(e.tree)
              : t,
          [null == e ? void 0 : e.tree, t]
        );
      }
      function v(e) {
        void 0 === e && (e = "children"),
          (0, s.clientHookInServerComponentError)("useSelectedLayoutSegments");
        let { tree: t } = (0, r.useContext)(o.LayoutRouterContext);
        return (function e(t, n, r, o) {
          let i;
          if ((void 0 === r && (r = !0), void 0 === o && (o = []), r))
            i = t[1][n];
          else {
            var s;
            let e = t[1];
            i = null != (s = e.children) ? s : Object.values(e)[0];
          }
          if (!i) return o;
          let l = i[0],
            u = (0, a.getSegmentValue)(l);
          return !u || u.startsWith("__PAGE__")
            ? o
            : (o.push(u), e(i, n, !1, o));
        })(t, e);
      }
      function b(e) {
        void 0 === e && (e = "children"),
          (0, s.clientHookInServerComponentError)("useSelectedLayoutSegment");
        let t = v(e);
        return 0 === t.length ? null : t[0];
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    70929: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          notFound: function () {
            return r;
          },
          isNotFoundError: function () {
            return o;
          },
        });
      let n = "NEXT_NOT_FOUND";
      function r() {
        let e = Error(n);
        throw ((e.digest = n), e);
      }
      function o(e) {
        return (null == e ? void 0 : e.digest) === n;
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    32254: function (e, t) {
      "use strict";
      var n, r;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "RedirectStatusCode", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }),
        ((r = n || (n = {}))[(r.SeeOther = 303)] = "SeeOther"),
        (r[(r.TemporaryRedirect = 307)] = "TemporaryRedirect"),
        (r[(r.PermanentRedirect = 308)] = "PermanentRedirect"),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    84830: function (e, t, n) {
      "use strict";
      var r, o;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          RedirectType: function () {
            return r;
          },
          getRedirectError: function () {
            return u;
          },
          redirect: function () {
            return c;
          },
          permanentRedirect: function () {
            return d;
          },
          isRedirectError: function () {
            return p;
          },
          getURLFromRedirectError: function () {
            return f;
          },
          getRedirectTypeFromError: function () {
            return g;
          },
          getRedirectStatusCodeFromError: function () {
            return h;
          },
        });
      let i = n(37449),
        s = n(45932),
        a = n(32254),
        l = "NEXT_REDIRECT";
      function u(e, t, n) {
        void 0 === n && (n = a.RedirectStatusCode.TemporaryRedirect);
        let r = Error(l);
        r.digest = l + ";" + t + ";" + e + ";" + n + ";";
        let o = i.requestAsyncStorage.getStore();
        return o && (r.mutableCookies = o.mutableCookies), r;
      }
      function c(e, t) {
        void 0 === t && (t = "replace");
        let n = s.actionAsyncStorage.getStore();
        throw u(
          e,
          t,
          (null == n ? void 0 : n.isAction)
            ? a.RedirectStatusCode.SeeOther
            : a.RedirectStatusCode.TemporaryRedirect
        );
      }
      function d(e, t) {
        void 0 === t && (t = "replace");
        let n = s.actionAsyncStorage.getStore();
        throw u(
          e,
          t,
          (null == n ? void 0 : n.isAction)
            ? a.RedirectStatusCode.SeeOther
            : a.RedirectStatusCode.PermanentRedirect
        );
      }
      function p(e) {
        if ("string" != typeof (null == e ? void 0 : e.digest)) return !1;
        let [t, n, r, o] = e.digest.split(";", 4),
          i = Number(o);
        return (
          t === l &&
          ("replace" === n || "push" === n) &&
          "string" == typeof r &&
          !isNaN(i) &&
          i in a.RedirectStatusCode
        );
      }
      function f(e) {
        return p(e) ? e.digest.split(";", 3)[2] : null;
      }
      function g(e) {
        if (!p(e)) throw Error("Not a redirect error");
        return e.digest.split(";", 2)[1];
      }
      function h(e) {
        if (!p(e)) throw Error("Not a redirect error");
        return Number(e.digest.split(";", 4)[3]);
      }
      ((o = r || (r = {})).push = "push"),
        (o.replace = "replace"),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    37449: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "requestAsyncStorage", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let r = (0, n(67531).createAsyncLocalStorage)();
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    33607: function (e, t) {
      "use strict";
      function n(e) {
        return Array.isArray(e) ? e[1] : e;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getSegmentValue", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    9424: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          ServerInsertedHTMLContext: function () {
            return o;
          },
          useServerInsertedHTML: function () {
            return i;
          },
        });
      let r = n(16794)._(n(2784)),
        o = r.default.createContext(null);
      function i(e) {
        let t = (0, r.useContext)(o);
        t && t(e);
      }
    },
    6587: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return w;
          },
        });
      var r = n(52322),
        o = n(15666),
        i = n.n(o),
        s = n(37071),
        a = n.n(s),
        l = n(8526),
        u = n.n(l),
        c = n(26691),
        d = n(2784),
        p = n(82876),
        f = () => {
          window.si ||
            (window.si = function (...e) {
              (window.siq = window.siq || []).push(e);
            });
        };
      function g() {
        return false;
      }
      function h(e) {
        return RegExp(
          `/${e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(?=[/?#]|$)`
        );
      }
      var m = "https://va.vercel-scripts.com/v1/speed-insights",
        y = `${m}/script.js`,
        v = `${m}/script.debug.js`;
      function b(e) {
        let t = (0, d.useRef)(null);
        return (
          (0, d.useEffect)(() => {
            if (t.current) e.route && t.current(e.route);
            else {
              let n = (function (e = {}) {
                var t;
                if (!("undefined" != typeof window) || null === e.route)
                  return null;
                f();
                let n = !!e.dsn,
                  r =
                    e.scriptSrc ||
                    (n ? y : "/_vercel/speed-insights/script.js");
                if (document.head.querySelector(`script[src*="${r}"]`))
                  return null;
                e.beforeSend &&
                  (null == (t = window.si) ||
                    t.call(window, "beforeSend", e.beforeSend));
                let o = document.createElement("script");
                return (
                  (o.src = r),
                  (o.defer = !0),
                  (o.dataset.sdkn =
                    "@vercel/speed-insights" +
                    (e.framework ? `/${e.framework}` : "")),
                  (o.dataset.sdkv = "1.0.11"),
                  e.sampleRate &&
                    (o.dataset.sampleRate = e.sampleRate.toString()),
                  e.route && (o.dataset.route = e.route),
                  e.endpoint && (o.dataset.endpoint = e.endpoint),
                  e.dsn && (o.dataset.dsn = e.dsn),
                  (o.onerror = () => {
                    console.log(
                      `[Vercel Speed Insights] Failed to load script from ${r}. Please check if any content blockers are enabled and try again.`
                    );
                  }),
                  document.head.appendChild(o),
                  {
                    setRoute: (e) => {
                      o.dataset.route = e ?? void 0;
                    },
                  }
                );
              })({ framework: e.framework || "react", ...e });
              n && (t.current = n.setRoute);
            }
          }, [e.route]),
          null
        );
      }
      var S = () => {
        let e = (0, p.useParams)(),
          t = (0, p.useSearchParams)(),
          n = (0, p.usePathname)(),
          r = { ...Object.fromEntries(t.entries()), ...(e || {}) };
        return e
          ? (function (e, t) {
              if (!e || !t) return e;
              let n = e;
              try {
                let e = Object.entries(t);
                for (let [t, r] of e)
                  if (!Array.isArray(r)) {
                    let e = h(r);
                    e.test(n) && (n = n.replace(e, `/[${t}]`));
                  }
                for (let [t, r] of e)
                  if (Array.isArray(r)) {
                    let e = h(r.join("/"));
                    e.test(n) && (n = n.replace(e, `/[...${t}]`));
                  }
                return n;
              } catch (t) {
                return e;
              }
            })(n, r)
          : null;
      };
      function x(e) {
        let t = S();
        return d.createElement(b, { route: t, ...e, framework: "next" });
      }
      function O(e) {
        return d.createElement(
          d.Suspense,
          { fallback: null },
          d.createElement(x, { ...e })
        );
      }
      var k = n(20034);
      n(50265);
      var w = (0, k.Jc)(function (e) {
        let { Component: t, pageProps: n } = e;
        return (0,
        r.jsxs)(r.Fragment, { children: [(0, r.jsx)("main", { className: "bg-[#F4F4F4] md:min-w-[100vw] max-md:overflow-x-hidden ".concat(i().variable, " ").concat(a().variable, " ").concat(u().variable), children: (0, r.jsx)(c.J, { children: (0, r.jsx)(t, { ...n }) }) }), (0, r.jsx)(O, {})] });
      });
    },
    26691: function (e, t, n) {
      "use strict";
      n.d(t, {
        g: function () {
          return o.Am;
        },
        J: function () {
          return i;
        },
      });
      var r = n(52322),
        o = n(88932);
      n(2784), n(16824);
      let i = (e) => {
        let { children: t } = e;
        return (0, r.jsxs)("div", {
          className: "w-full h-full",
          children: [
            t,
            (0, r.jsx)(o.Ix, {
              position: "bottom-right",
              hideProgressBar: !1,
              newestOnTop: !1,
              closeOnClick: !0,
              rtl: !1,
              pauseOnFocusLoss: !0,
              draggable: !0,
              pauseOnHover: !0,
              theme: "dark",
              bodyClassName: "global-notify",
            }),
          ],
        });
      };
    },
    16824: function () {},
    50265: function () {},
    8526: function (e) {
      e.exports = {
        style: {
          fontFamily: "'__Bangers_57ffb9', '__Bangers_Fallback_57ffb9'",
          fontWeight: 400,
          fontStyle: "normal",
        },
        className: "__className_57ffb9",
        variable: "__variable_57ffb9",
      };
    },
    37071: function (e) {
      e.exports = {
        style: {
          fontFamily: "'__Montserrat_a14251', '__Montserrat_Fallback_a14251'",
          fontStyle: "normal",
        },
        className: "__className_a14251",
        variable: "__variable_a14251",
      };
    },
    15666: function (e) {
      e.exports = {
        style: {
          fontFamily:
            "'__Montserrat_Alternates_a42c28', '__Montserrat_Alternates_Fallback_a42c28'",
          fontStyle: "normal",
        },
        className: "__className_a42c28",
        variable: "__variable_a42c28",
      };
    },
    82876: function (e, t, n) {
      e.exports = n(58710);
    },
    64896: function (e) {
      e.exports = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0,
      };
    },
    88932: function (e, t, n) {
      "use strict";
      n.d(t, {
        Am: function () {
          return j;
        },
        Ix: function () {
          return O;
        },
      });
      var r = n(2784),
        o = n(6277);
      let i = (e) => "number" == typeof e && !isNaN(e),
        s = (e) => "string" == typeof e,
        a = (e) => "function" == typeof e,
        l = (e) => (s(e) || a(e) ? e : null),
        u = (e) => (0, r.isValidElement)(e) || s(e) || a(e) || i(e);
      function c(e) {
        let {
          enter: t,
          exit: n,
          appendPosition: o = !1,
          collapse: i = !0,
          collapseDuration: s = 300,
        } = e;
        return function (e) {
          let {
              children: a,
              position: l,
              preventExitTransition: u,
              done: c,
              nodeRef: d,
              isIn: p,
            } = e,
            f = o ? `${t}--${l}` : t,
            g = o ? `${n}--${l}` : n,
            h = (0, r.useRef)(0);
          return (
            (0, r.useLayoutEffect)(() => {
              let e = d.current,
                t = f.split(" "),
                n = (r) => {
                  r.target === d.current &&
                    (e.dispatchEvent(new Event("d")),
                    e.removeEventListener("animationend", n),
                    e.removeEventListener("animationcancel", n),
                    0 === h.current &&
                      "animationcancel" !== r.type &&
                      e.classList.remove(...t));
                };
              e.classList.add(...t),
                e.addEventListener("animationend", n),
                e.addEventListener("animationcancel", n);
            }, []),
            (0, r.useEffect)(() => {
              let e = d.current,
                t = () => {
                  e.removeEventListener("animationend", t),
                    i
                      ? (function (e, t, n) {
                          void 0 === n && (n = 300);
                          let { scrollHeight: r, style: o } = e;
                          requestAnimationFrame(() => {
                            (o.minHeight = "initial"),
                              (o.height = r + "px"),
                              (o.transition = `all ${n}ms`),
                              requestAnimationFrame(() => {
                                (o.height = "0"),
                                  (o.padding = "0"),
                                  (o.margin = "0"),
                                  setTimeout(t, n);
                              });
                          });
                        })(e, c, s)
                      : c();
                };
              p ||
                (u
                  ? t()
                  : ((h.current = 1),
                    (e.className += ` ${g}`),
                    e.addEventListener("animationend", t)));
            }, [p]),
            r.createElement(r.Fragment, null, a)
          );
        };
      }
      function d(e, t) {
        return null != e
          ? {
              content: e.content,
              containerId: e.props.containerId,
              id: e.props.toastId,
              theme: e.props.theme,
              type: e.props.type,
              data: e.props.data || {},
              isLoading: e.props.isLoading,
              icon: e.props.icon,
              status: t,
            }
          : {};
      }
      let p = {
          list: new Map(),
          emitQueue: new Map(),
          on(e, t) {
            return (
              this.list.has(e) || this.list.set(e, []),
              this.list.get(e).push(t),
              this
            );
          },
          off(e, t) {
            if (t) {
              let n = this.list.get(e).filter((e) => e !== t);
              return this.list.set(e, n), this;
            }
            return this.list.delete(e), this;
          },
          cancelEmit(e) {
            let t = this.emitQueue.get(e);
            return (
              t && (t.forEach(clearTimeout), this.emitQueue.delete(e)), this
            );
          },
          emit(e) {
            this.list.has(e) &&
              this.list.get(e).forEach((t) => {
                let n = setTimeout(() => {
                  t(...[].slice.call(arguments, 1));
                }, 0);
                this.emitQueue.has(e) || this.emitQueue.set(e, []),
                  this.emitQueue.get(e).push(n);
              });
          },
        },
        f = (e) => {
          let { theme: t, type: n, ...o } = e;
          return r.createElement("svg", {
            viewBox: "0 0 24 24",
            width: "100%",
            height: "100%",
            fill:
              "colored" === t
                ? "currentColor"
                : `var(--toastify-icon-color-${n})`,
            ...o,
          });
        },
        g = {
          info: function (e) {
            return r.createElement(
              f,
              { ...e },
              r.createElement("path", {
                d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z",
              })
            );
          },
          warning: function (e) {
            return r.createElement(
              f,
              { ...e },
              r.createElement("path", {
                d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z",
              })
            );
          },
          success: function (e) {
            return r.createElement(
              f,
              { ...e },
              r.createElement("path", {
                d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z",
              })
            );
          },
          error: function (e) {
            return r.createElement(
              f,
              { ...e },
              r.createElement("path", {
                d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z",
              })
            );
          },
          spinner: function () {
            return r.createElement("div", { className: "Toastify__spinner" });
          },
        };
      function h(e) {
        return e.targetTouches && e.targetTouches.length >= 1
          ? e.targetTouches[0].clientX
          : e.clientX;
      }
      function m(e) {
        return e.targetTouches && e.targetTouches.length >= 1
          ? e.targetTouches[0].clientY
          : e.clientY;
      }
      function y(e) {
        let { closeToast: t, theme: n, ariaLabel: o = "close" } = e;
        return r.createElement(
          "button",
          {
            className: `Toastify__close-button Toastify__close-button--${n}`,
            type: "button",
            onClick: (e) => {
              e.stopPropagation(), t(e);
            },
            "aria-label": o,
          },
          r.createElement(
            "svg",
            { "aria-hidden": "true", viewBox: "0 0 14 16" },
            r.createElement("path", {
              fillRule: "evenodd",
              d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z",
            })
          )
        );
      }
      function v(e) {
        let {
            delay: t,
            isRunning: n,
            closeToast: i,
            type: s = "default",
            hide: l,
            className: u,
            style: c,
            controlledProgress: d,
            progress: p,
            rtl: f,
            isIn: g,
            theme: h,
          } = e,
          m = l || (d && 0 === p),
          y = {
            ...c,
            animationDuration: `${t}ms`,
            animationPlayState: n ? "running" : "paused",
            opacity: m ? 0 : 1,
          };
        d && (y.transform = `scaleX(${p})`);
        let v = (0, o.default)(
            "Toastify__progress-bar",
            d
              ? "Toastify__progress-bar--controlled"
              : "Toastify__progress-bar--animated",
            `Toastify__progress-bar-theme--${h}`,
            `Toastify__progress-bar--${s}`,
            { "Toastify__progress-bar--rtl": f }
          ),
          b = a(u)
            ? u({ rtl: f, type: s, defaultClassName: v })
            : (0, o.default)(v, u);
        return r.createElement("div", {
          role: "progressbar",
          "aria-hidden": m ? "true" : "false",
          "aria-label": "notification timer",
          className: b,
          style: y,
          [d && p >= 1 ? "onTransitionEnd" : "onAnimationEnd"]:
            d && p < 1
              ? null
              : () => {
                  g && i();
                },
        });
      }
      let b = (e) => {
          let {
              isRunning: t,
              preventExitTransition: n,
              toastRef: i,
              eventHandlers: s,
            } = (function (e) {
              let [t, n] = (0, r.useState)(!1),
                [o, i] = (0, r.useState)(!1),
                s = (0, r.useRef)(null),
                l = (0, r.useRef)({
                  start: 0,
                  x: 0,
                  y: 0,
                  delta: 0,
                  removalDistance: 0,
                  canCloseOnClick: !0,
                  canDrag: !1,
                  boundingRect: null,
                  didMove: !1,
                }).current,
                u = (0, r.useRef)(e),
                {
                  autoClose: c,
                  pauseOnHover: d,
                  closeToast: p,
                  onClick: f,
                  closeOnClick: g,
                } = e;
              function y(t) {
                if (e.draggable) {
                  "touchstart" === t.nativeEvent.type &&
                    t.nativeEvent.preventDefault(),
                    (l.didMove = !1),
                    document.addEventListener("mousemove", x),
                    document.addEventListener("mouseup", O),
                    document.addEventListener("touchmove", x),
                    document.addEventListener("touchend", O);
                  let n = s.current;
                  (l.canCloseOnClick = !0),
                    (l.canDrag = !0),
                    (l.boundingRect = n.getBoundingClientRect()),
                    (n.style.transition = ""),
                    (l.x = h(t.nativeEvent)),
                    (l.y = m(t.nativeEvent)),
                    "x" === e.draggableDirection
                      ? ((l.start = l.x),
                        (l.removalDistance =
                          n.offsetWidth * (e.draggablePercent / 100)))
                      : ((l.start = l.y),
                        (l.removalDistance =
                          n.offsetHeight *
                          (80 === e.draggablePercent
                            ? 1.5 * e.draggablePercent
                            : e.draggablePercent / 100)));
                }
              }
              function v(t) {
                if (l.boundingRect) {
                  let { top: n, bottom: r, left: o, right: i } = l.boundingRect;
                  "touchend" !== t.nativeEvent.type &&
                  e.pauseOnHover &&
                  l.x >= o &&
                  l.x <= i &&
                  l.y >= n &&
                  l.y <= r
                    ? S()
                    : b();
                }
              }
              function b() {
                n(!0);
              }
              function S() {
                n(!1);
              }
              function x(n) {
                let r = s.current;
                l.canDrag &&
                  r &&
                  ((l.didMove = !0),
                  t && S(),
                  (l.x = h(n)),
                  (l.y = m(n)),
                  (l.delta =
                    "x" === e.draggableDirection
                      ? l.x - l.start
                      : l.y - l.start),
                  l.start !== l.x && (l.canCloseOnClick = !1),
                  (r.style.transform = `translate${e.draggableDirection}(${l.delta}px)`),
                  (r.style.opacity =
                    "" + (1 - Math.abs(l.delta / l.removalDistance))));
              }
              function O() {
                document.removeEventListener("mousemove", x),
                  document.removeEventListener("mouseup", O),
                  document.removeEventListener("touchmove", x),
                  document.removeEventListener("touchend", O);
                let t = s.current;
                if (l.canDrag && l.didMove && t) {
                  if (((l.canDrag = !1), Math.abs(l.delta) > l.removalDistance))
                    return i(!0), void e.closeToast();
                  (t.style.transition = "transform 0.2s, opacity 0.2s"),
                    (t.style.transform = `translate${e.draggableDirection}(0)`),
                    (t.style.opacity = "1");
                }
              }
              (0, r.useEffect)(() => {
                u.current = e;
              }),
                (0, r.useEffect)(
                  () => (
                    s.current &&
                      s.current.addEventListener("d", b, { once: !0 }),
                    a(e.onOpen) &&
                      e.onOpen(
                        (0, r.isValidElement)(e.children) && e.children.props
                      ),
                    () => {
                      let e = u.current;
                      a(e.onClose) &&
                        e.onClose(
                          (0, r.isValidElement)(e.children) && e.children.props
                        );
                    }
                  ),
                  []
                ),
                (0, r.useEffect)(
                  () => (
                    e.pauseOnFocusLoss &&
                      (document.hasFocus() || S(),
                      window.addEventListener("focus", b),
                      window.addEventListener("blur", S)),
                    () => {
                      e.pauseOnFocusLoss &&
                        (window.removeEventListener("focus", b),
                        window.removeEventListener("blur", S));
                    }
                  ),
                  [e.pauseOnFocusLoss]
                );
              let k = {
                onMouseDown: y,
                onTouchStart: y,
                onMouseUp: v,
                onTouchEnd: v,
              };
              return (
                c && d && ((k.onMouseEnter = S), (k.onMouseLeave = b)),
                g &&
                  (k.onClick = (e) => {
                    f && f(e), l.canCloseOnClick && p();
                  }),
                {
                  playToast: b,
                  pauseToast: S,
                  isRunning: t,
                  preventExitTransition: o,
                  toastRef: s,
                  eventHandlers: k,
                }
              );
            })(e),
            {
              closeButton: l,
              children: u,
              autoClose: c,
              onClick: d,
              type: p,
              hideProgressBar: f,
              closeToast: g,
              transition: b,
              position: S,
              className: x,
              style: O,
              bodyClassName: k,
              bodyStyle: w,
              progressClassName: L,
              progressStyle: E,
              updateId: C,
              role: P,
              progress: N,
              rtl: j,
              toastId: R,
              deleteToast: _,
              isIn: $,
              isLoading: T,
              iconOut: I,
              closeOnClick: A,
              theme: M,
            } = e,
            F = (0, o.default)(
              "Toastify__toast",
              `Toastify__toast-theme--${M}`,
              `Toastify__toast--${p}`,
              { "Toastify__toast--rtl": j },
              { "Toastify__toast--close-on-click": A }
            ),
            D = a(x)
              ? x({ rtl: j, position: S, type: p, defaultClassName: F })
              : (0, o.default)(F, x),
            V = !!N || !c,
            z = { closeToast: g, type: p, theme: M },
            U = null;
          return (
            !1 === l ||
              (U = a(l)
                ? l(z)
                : (0, r.isValidElement)(l)
                ? (0, r.cloneElement)(l, z)
                : y(z)),
            r.createElement(
              b,
              {
                isIn: $,
                done: _,
                position: S,
                preventExitTransition: n,
                nodeRef: i,
              },
              r.createElement(
                "div",
                { id: R, onClick: d, className: D, ...s, style: O, ref: i },
                r.createElement(
                  "div",
                  {
                    ...($ && { role: P }),
                    className: a(k)
                      ? k({ type: p })
                      : (0, o.default)("Toastify__toast-body", k),
                    style: w,
                  },
                  null != I &&
                    r.createElement(
                      "div",
                      {
                        className: (0, o.default)("Toastify__toast-icon", {
                          "Toastify--animate-icon Toastify__zoom-enter": !T,
                        }),
                      },
                      I
                    ),
                  r.createElement("div", null, u)
                ),
                U,
                r.createElement(v, {
                  ...(C && !V ? { key: `pb-${C}` } : {}),
                  rtl: j,
                  theme: M,
                  delay: c,
                  isRunning: t,
                  isIn: $,
                  closeToast: g,
                  hide: f,
                  type: p,
                  style: E,
                  className: L,
                  controlledProgress: V,
                  progress: N || 0,
                })
              )
            )
          );
        },
        S = function (e, t) {
          return (
            void 0 === t && (t = !1),
            {
              enter: `Toastify--animate Toastify__${e}-enter`,
              exit: `Toastify--animate Toastify__${e}-exit`,
              appendPosition: t,
            }
          );
        },
        x = c(S("bounce", !0)),
        O =
          (c(S("slide", !0)),
          c(S("zoom")),
          c(S("flip")),
          (0, r.forwardRef)((e, t) => {
            let {
                getToastToRender: n,
                containerRef: c,
                isToastActive: f,
              } = (function (e) {
                let [, t] = (0, r.useReducer)((e) => e + 1, 0),
                  [n, o] = (0, r.useState)([]),
                  c = (0, r.useRef)(null),
                  f = (0, r.useRef)(new Map()).current,
                  h = (e) => -1 !== n.indexOf(e),
                  m = (0, r.useRef)({
                    toastKey: 1,
                    displayedToast: 0,
                    count: 0,
                    queue: [],
                    props: e,
                    containerId: null,
                    isToastActive: h,
                    getToast: (e) => f.get(e),
                  }).current;
                function y(e) {
                  let { containerId: t } = e,
                    { limit: n } = m.props;
                  !n ||
                    (t && m.containerId !== t) ||
                    ((m.count -= m.queue.length), (m.queue = []));
                }
                function v(e) {
                  o((t) => (null == e ? [] : t.filter((t) => t !== e)));
                }
                function b() {
                  let {
                    toastContent: e,
                    toastProps: t,
                    staleId: n,
                  } = m.queue.shift();
                  x(e, t, n);
                }
                function S(e, n) {
                  var o, h;
                  let { delay: y, staleId: S, ...O } = n;
                  if (
                    !u(e) ||
                    !c.current ||
                    (m.props.enableMultiContainer &&
                      O.containerId !== m.props.containerId) ||
                    (f.has(O.toastId) && null == O.updateId)
                  )
                    return;
                  let { toastId: k, updateId: w, data: L } = O,
                    { props: E } = m,
                    C = () => v(k),
                    P = null == w;
                  P && m.count++;
                  let N = {
                    ...E,
                    style: E.toastStyle,
                    key: m.toastKey++,
                    ...Object.fromEntries(
                      Object.entries(O).filter((e) => {
                        let [t, n] = e;
                        return null != n;
                      })
                    ),
                    toastId: k,
                    updateId: w,
                    data: L,
                    closeToast: C,
                    isIn: !1,
                    className: l(O.className || E.toastClassName),
                    bodyClassName: l(O.bodyClassName || E.bodyClassName),
                    progressClassName: l(
                      O.progressClassName || E.progressClassName
                    ),
                    autoClose:
                      !O.isLoading &&
                      ((o = O.autoClose),
                      (h = E.autoClose),
                      !1 === o || (i(o) && o > 0) ? o : h),
                    deleteToast() {
                      let e = d(f.get(k), "removed");
                      f.delete(k), p.emit(4, e);
                      let n = m.queue.length;
                      if (
                        ((m.count =
                          null == k ? m.count - m.displayedToast : m.count - 1),
                        m.count < 0 && (m.count = 0),
                        n > 0)
                      ) {
                        let e = null == k ? m.props.limit : 1;
                        if (1 === n || 1 === e) m.displayedToast++, b();
                        else {
                          let t = e > n ? n : e;
                          m.displayedToast = t;
                          for (let e = 0; e < t; e++) b();
                        }
                      } else t();
                    },
                  };
                  (N.iconOut = (function (e) {
                    let { theme: t, type: n, isLoading: o, icon: l } = e,
                      u = null,
                      c = { theme: t, type: n };
                    return (
                      !1 === l ||
                        (a(l)
                          ? (u = l(c))
                          : (0, r.isValidElement)(l)
                          ? (u = (0, r.cloneElement)(l, c))
                          : s(l) || i(l)
                          ? (u = l)
                          : o
                          ? (u = g.spinner())
                          : n in g && (u = g[n](c))),
                      u
                    );
                  })(N)),
                    a(O.onOpen) && (N.onOpen = O.onOpen),
                    a(O.onClose) && (N.onClose = O.onClose),
                    (N.closeButton = E.closeButton),
                    !1 === O.closeButton || u(O.closeButton)
                      ? (N.closeButton = O.closeButton)
                      : !0 === O.closeButton &&
                        (N.closeButton = !u(E.closeButton) || E.closeButton);
                  let j = e;
                  (0, r.isValidElement)(e) && !s(e.type)
                    ? (j = (0, r.cloneElement)(e, {
                        closeToast: C,
                        toastProps: N,
                        data: L,
                      }))
                    : a(e) &&
                      (j = e({ closeToast: C, toastProps: N, data: L })),
                    E.limit && E.limit > 0 && m.count > E.limit && P
                      ? m.queue.push({
                          toastContent: j,
                          toastProps: N,
                          staleId: S,
                        })
                      : i(y)
                      ? setTimeout(() => {
                          x(j, N, S);
                        }, y)
                      : x(j, N, S);
                }
                function x(e, t, n) {
                  let { toastId: r } = t;
                  n && f.delete(n);
                  let i = { content: e, props: t };
                  f.set(r, i),
                    o((e) => [...e, r].filter((e) => e !== n)),
                    p.emit(
                      4,
                      d(i, null == i.props.updateId ? "added" : "updated")
                    );
                }
                return (
                  (0, r.useEffect)(
                    () => (
                      (m.containerId = e.containerId),
                      p
                        .cancelEmit(3)
                        .on(0, S)
                        .on(1, (e) => c.current && v(e))
                        .on(5, y)
                        .emit(2, m),
                      () => {
                        f.clear(), p.emit(3, m);
                      }
                    ),
                    []
                  ),
                  (0, r.useEffect)(() => {
                    (m.props = e),
                      (m.isToastActive = h),
                      (m.displayedToast = n.length);
                  }),
                  {
                    getToastToRender: function (t) {
                      let n = new Map(),
                        r = Array.from(f.values());
                      return (
                        e.newestOnTop && r.reverse(),
                        r.forEach((e) => {
                          let { position: t } = e.props;
                          n.has(t) || n.set(t, []), n.get(t).push(e);
                        }),
                        Array.from(n, (e) => t(e[0], e[1]))
                      );
                    },
                    containerRef: c,
                    isToastActive: h,
                  }
                );
              })(e),
              { className: h, style: m, rtl: y, containerId: v } = e;
            return (
              (0, r.useEffect)(() => {
                t && (t.current = c.current);
              }, []),
              r.createElement(
                "div",
                { ref: c, className: "Toastify", id: v },
                n((e, t) => {
                  let n = t.length ? { ...m } : { ...m, pointerEvents: "none" };
                  return r.createElement(
                    "div",
                    {
                      className: (function (e) {
                        let t = (0, o.default)(
                          "Toastify__toast-container",
                          `Toastify__toast-container--${e}`,
                          { "Toastify__toast-container--rtl": y }
                        );
                        return a(h)
                          ? h({ position: e, rtl: y, defaultClassName: t })
                          : (0, o.default)(t, l(h));
                      })(e),
                      style: n,
                      key: `container-${e}`,
                    },
                    t.map((e, n) => {
                      let { content: o, props: i } = e;
                      return r.createElement(
                        b,
                        {
                          ...i,
                          isIn: f(i.toastId),
                          style: {
                            ...i.style,
                            "--nth": n + 1,
                            "--len": t.length,
                          },
                          key: `toast-${i.key}`,
                        },
                        o
                      );
                    })
                  );
                })
              )
            );
          }));
      (O.displayName = "ToastContainer"),
        (O.defaultProps = {
          position: "top-right",
          transition: x,
          autoClose: 5e3,
          closeButton: y,
          pauseOnHover: !0,
          pauseOnFocusLoss: !0,
          closeOnClick: !0,
          draggable: !0,
          draggablePercent: 80,
          draggableDirection: "x",
          role: "alert",
          theme: "light",
        });
      let k,
        w = new Map(),
        L = [],
        E = 1;
      function C(e, t) {
        return (
          w.size > 0 ? p.emit(0, e, t) : L.push({ content: e, options: t }),
          t.toastId
        );
      }
      function P(e, t) {
        return {
          ...t,
          type: (t && t.type) || e,
          toastId: t && (s(t.toastId) || i(t.toastId)) ? t.toastId : "" + E++,
        };
      }
      function N(e) {
        return (t, n) => C(t, P(e, n));
      }
      function j(e, t) {
        return C(e, P("default", t));
      }
      (j.loading = (e, t) =>
        C(
          e,
          P("default", {
            isLoading: !0,
            autoClose: !1,
            closeOnClick: !1,
            closeButton: !1,
            draggable: !1,
            ...t,
          })
        )),
        (j.promise = function (e, t, n) {
          let r,
            { pending: o, error: i, success: l } = t;
          o &&
            (r = s(o) ? j.loading(o, n) : j.loading(o.render, { ...n, ...o }));
          let u = {
              isLoading: null,
              autoClose: null,
              closeOnClick: null,
              closeButton: null,
              draggable: null,
            },
            c = (e, t, o) => {
              if (null == t) return void j.dismiss(r);
              let i = { type: e, ...u, ...n, data: o },
                a = s(t) ? { render: t } : t;
              return (
                r ? j.update(r, { ...i, ...a }) : j(a.render, { ...i, ...a }), o
              );
            },
            d = a(e) ? e() : e;
          return (
            d.then((e) => c("success", l, e)).catch((e) => c("error", i, e)), d
          );
        }),
        (j.success = N("success")),
        (j.info = N("info")),
        (j.error = N("error")),
        (j.warning = N("warning")),
        (j.warn = j.warning),
        (j.dark = (e, t) => C(e, P("default", { theme: "dark", ...t }))),
        (j.dismiss = (e) => {
          w.size > 0
            ? p.emit(1, e)
            : (L = L.filter((t) => null != e && t.options.toastId !== e));
        }),
        (j.clearWaitingQueue = function (e) {
          return void 0 === e && (e = {}), p.emit(5, e);
        }),
        (j.isActive = (e) => {
          let t = !1;
          return (
            w.forEach((n) => {
              n.isToastActive && n.isToastActive(e) && (t = !0);
            }),
            t
          );
        }),
        (j.update = function (e, t) {
          void 0 === t && (t = {}),
            setTimeout(() => {
              let n = (function (e, t) {
                let { containerId: n } = t,
                  r = w.get(n || k);
                return r && r.getToast(e);
              })(e, t);
              if (n) {
                let { props: r, content: o } = n,
                  i = {
                    delay: 100,
                    ...r,
                    ...t,
                    toastId: t.toastId || e,
                    updateId: "" + E++,
                  };
                i.toastId !== e && (i.staleId = e);
                let s = i.render || o;
                delete i.render, C(s, i);
              }
            }, 0);
        }),
        (j.done = (e) => {
          j.update(e, { progress: 1 });
        }),
        (j.onChange = (e) => (
          p.on(4, e),
          () => {
            p.off(4, e);
          }
        )),
        (j.POSITION = {
          TOP_LEFT: "top-left",
          TOP_RIGHT: "top-right",
          TOP_CENTER: "top-center",
          BOTTOM_LEFT: "bottom-left",
          BOTTOM_RIGHT: "bottom-right",
          BOTTOM_CENTER: "bottom-center",
        }),
        (j.TYPE = {
          INFO: "info",
          SUCCESS: "success",
          WARNING: "warning",
          ERROR: "error",
          DEFAULT: "default",
        }),
        p
          .on(2, (e) => {
            (k = e.containerId || e),
              w.set(k, e),
              L.forEach((e) => {
                p.emit(0, e.content, e.options);
              }),
              (L = []);
          })
          .on(3, (e) => {
            w.delete(e.containerId || e),
              0 === w.size && p.off(0).off(1).off(5);
          });
    },
  },
  function (e) {
    var t = function (t) {
      return e((e.s = t));
    };
    e.O(0, [9774, 179], function () {
      return t(86570), t(15894);
    }),
      (_N_E = e.O());
  },
]);
