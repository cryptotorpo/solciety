(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5405],
  {
    87314: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return n(45180);
        },
      ]);
    },
    45180: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          __N_SSP: function () {
            return k;
          },
          default: function () {
            return g;
          },
        });
      var s = n(52322),
        i = n(52962),
        r = n(51757),
        c = n(53426),
        l = n(99448),
        o = n(35445),
        u = n(33321),
        a = n(78523),
        x = n(84012),
        d = n(38082),
        f = n(64099),
        h = n(97729),
        j = n.n(h),
        m = n(70695),
        p = n(2886),
        w = n(2784);
      function b(e) {
        let { delay: t, fallback: n, children: s } = e,
          [i, r] = (0, w.useState)(!1);
        return (
          (0, w.useEffect)(() => {
            t
              ? setTimeout(() => {
                  r(!0);
                }, t)
              : requestAnimationFrame(() => {
                  r(!0);
                });
          }, []),
          i ? s : null != n ? n : null
        );
      }
      var _ = n(27445),
        k = !0;
      function g(e) {
        let { t, i18n: n } = (0, x.$)();
        return (
          (0, d.V1)(),
          (0, w.useEffect)(() => {
            try {
              setTimeout(() => {
                window.pixie("event", "PageView");
              }, 200);
            } catch (e) {}
          }, []),
          (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsxs)(j(), {
                children: [
                  (0, s.jsx)("title", { children: t("meta.title") }),
                  (0, s.jsx)("meta", {
                    name: "description",
                    content: t("meta.desc"),
                  }),
                  (0, s.jsx)("link", {
                    rel: "canonical",
                    href: "https://solciety.io/".concat(n.language),
                  }),
                  (0, s.jsx)("noscript", {
                    children: (0, s.jsx)("img", {
                      src: "https://ib.adnxs.com/pixie?pi=03e3309c-8db2-4f0c-a976-b2979801b111&e=PageView&script=0",
                      width: "1",
                      height: "1",
                      style: { display: "none" },
                      alt: "",
                    }),
                  }),
                ],
              }),
              (0, s.jsx)(y, {}),
              (0, s.jsx)(m.Z, {}),
            ],
          })
        );
      }
      let y = () => {
        (0, d.Uj)();
        let { t: e } = (0, x.$)();
        return (
          (0, w.useEffect)(() => {
            let e = window.location.hash,
              t = 3e3;
            ["#referral", "#nvestment"].includes(e) && (t = 2e3),
              setTimeout(() => {
                if (e) {
                  let t = document.querySelector(e);
                  null == t || t.scrollIntoView({ behavior: "smooth" });
                }
              }, t);
          }, []),
          (0, s.jsx)(s.Fragment, {
            children: (0, s.jsxs)(f.k8, {
              children: [
                (0, s.jsx)(a.Z, {}),
                (0, s.jsx)(u.Z, {}),
                (0, s.jsx)(i.Z, {}),
                (0, s.jsx)(p.Z, {}),
                (0, s.jsxs)(b, {
                  delay: 100,
                  children: [(0, s.jsx)(o.Z, {}), (0, s.jsx)(l.Z, {})],
                }),
                (0, s.jsx)(b, {
                  delay: 1500,
                  children: (0, s.jsx)(_.MemeMakerContent, {}),
                }),
                (0, s.jsx)(r.Z, {}),
                (0, s.jsx)(c.Z, {}),
                (0, s.jsx)("a", {
                  href: "https://raydium.io/swap/",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: (0, s.jsx)("button", {
                    onClick: () => (0, d.k3)(),
                    className:
                      "fixed z-[2] bottom-8 left-1/2 -translate-x-1/2 uppercase w-[234px] h-[56px] flex-center bg-secondary border-[2px] border-black text-white rounded-full mx-auto text-[21px] mt-20 cursor-pointer",
                    children: e("navbar.buyNow"),
                  }),
                })
              ],
            }),
          })
        );
      };
    },
  },
  function (e) {
    e.O(
      0,
      [
        3999, 9753, 3347, 7830, 3921, 9227, 3954, 7412, 7859, 8523, 1471, 7445,
        9774, 2888, 179,
      ],
      function () {
        return e((e.s = 87314));
      }
    ),
      (_N_E = e.O());
  },
]);
