(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5835],
  {
    64989: function (e) {
      var t, s, n, a, i, l, r, c, o, d, u, x, m;
      e.exports =
        ((n =
          /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g),
        (a =
          /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/),
        (i = {
          years: 31536e6,
          months: 2628e6,
          days: 864e5,
          hours: 36e5,
          minutes: 6e4,
          seconds: 1e3,
          milliseconds: 1,
          weeks: 6048e5,
        }),
        (l = function (e) {
          return e instanceof x;
        }),
        (r = function (e, t, s) {
          return new x(e, s, t.$l);
        }),
        (c = function (e) {
          return s.p(e) + "s";
        }),
        (o = function (e) {
          return e < 0;
        }),
        (d = function (e) {
          return o(e) ? Math.ceil(e) : Math.floor(e);
        }),
        (u = function (e, t) {
          return e
            ? o(e)
              ? { negative: !0, format: "" + Math.abs(e) + t }
              : { negative: !1, format: "" + e + t }
            : { negative: !1, format: "" };
        }),
        (x = (function () {
          function e(e, t, s) {
            var n = this;
            if (
              ((this.$d = {}),
              (this.$l = s),
              void 0 === e && ((this.$ms = 0), this.parseFromMilliseconds()),
              t)
            )
              return r(e * i[c(t)], this);
            if ("number" == typeof e)
              return (this.$ms = e), this.parseFromMilliseconds(), this;
            if ("object" == typeof e)
              return (
                Object.keys(e).forEach(function (t) {
                  n.$d[c(t)] = e[t];
                }),
                this.calMilliseconds(),
                this
              );
            if ("string" == typeof e) {
              var l = e.match(a);
              if (l) {
                var o = l.slice(2).map(function (e) {
                  return null != e ? Number(e) : 0;
                });
                return (
                  (this.$d.years = o[0]),
                  (this.$d.months = o[1]),
                  (this.$d.weeks = o[2]),
                  (this.$d.days = o[3]),
                  (this.$d.hours = o[4]),
                  (this.$d.minutes = o[5]),
                  (this.$d.seconds = o[6]),
                  this.calMilliseconds(),
                  this
                );
              }
            }
            return this;
          }
          var o = e.prototype;
          return (
            (o.calMilliseconds = function () {
              var e = this;
              this.$ms = Object.keys(this.$d).reduce(function (t, s) {
                return t + (e.$d[s] || 0) * i[s];
              }, 0);
            }),
            (o.parseFromMilliseconds = function () {
              var e = this.$ms;
              (this.$d.years = d(e / 31536e6)),
                (e %= 31536e6),
                (this.$d.months = d(e / 2628e6)),
                (e %= 2628e6),
                (this.$d.days = d(e / 864e5)),
                (e %= 864e5),
                (this.$d.hours = d(e / 36e5)),
                (e %= 36e5),
                (this.$d.minutes = d(e / 6e4)),
                (e %= 6e4),
                (this.$d.seconds = d(e / 1e3)),
                (e %= 1e3),
                (this.$d.milliseconds = e);
            }),
            (o.toISOString = function () {
              var e = u(this.$d.years, "Y"),
                t = u(this.$d.months, "M"),
                s = +this.$d.days || 0;
              this.$d.weeks && (s += 7 * this.$d.weeks);
              var n = u(s, "D"),
                a = u(this.$d.hours, "H"),
                i = u(this.$d.minutes, "M"),
                l = this.$d.seconds || 0;
              this.$d.milliseconds &&
                ((l += this.$d.milliseconds / 1e3),
                (l = Math.round(1e3 * l) / 1e3));
              var r = u(l, "S"),
                c =
                  e.negative ||
                  t.negative ||
                  n.negative ||
                  a.negative ||
                  i.negative ||
                  r.negative,
                o = a.format || i.format || r.format ? "T" : "",
                d =
                  (c ? "-" : "") +
                  "P" +
                  e.format +
                  t.format +
                  n.format +
                  o +
                  a.format +
                  i.format +
                  r.format;
              return "P" === d || "-P" === d ? "P0D" : d;
            }),
            (o.toJSON = function () {
              return this.toISOString();
            }),
            (o.format = function (e) {
              var t = {
                Y: this.$d.years,
                YY: s.s(this.$d.years, 2, "0"),
                YYYY: s.s(this.$d.years, 4, "0"),
                M: this.$d.months,
                MM: s.s(this.$d.months, 2, "0"),
                D: this.$d.days,
                DD: s.s(this.$d.days, 2, "0"),
                H: this.$d.hours,
                HH: s.s(this.$d.hours, 2, "0"),
                m: this.$d.minutes,
                mm: s.s(this.$d.minutes, 2, "0"),
                s: this.$d.seconds,
                ss: s.s(this.$d.seconds, 2, "0"),
                SSS: s.s(this.$d.milliseconds, 3, "0"),
              };
              return (e || "YYYY-MM-DDTHH:mm:ss").replace(n, function (e, s) {
                return s || String(t[e]);
              });
            }),
            (o.as = function (e) {
              return this.$ms / i[c(e)];
            }),
            (o.get = function (e) {
              var t = this.$ms,
                s = c(e);
              return (
                "milliseconds" === s
                  ? (t %= 1e3)
                  : (t = "weeks" === s ? d(t / i[s]) : this.$d[s]),
                t || 0
              );
            }),
            (o.add = function (e, t, s) {
              var n;
              return (
                (n = t ? e * i[c(t)] : l(e) ? e.$ms : r(e, this).$ms),
                r(this.$ms + n * (s ? -1 : 1), this)
              );
            }),
            (o.subtract = function (e, t) {
              return this.add(e, t, !0);
            }),
            (o.locale = function (e) {
              var t = this.clone();
              return (t.$l = e), t;
            }),
            (o.clone = function () {
              return r(this.$ms, this);
            }),
            (o.humanize = function (e) {
              return t().add(this.$ms, "ms").locale(this.$l).fromNow(!e);
            }),
            (o.valueOf = function () {
              return this.asMilliseconds();
            }),
            (o.milliseconds = function () {
              return this.get("milliseconds");
            }),
            (o.asMilliseconds = function () {
              return this.as("milliseconds");
            }),
            (o.seconds = function () {
              return this.get("seconds");
            }),
            (o.asSeconds = function () {
              return this.as("seconds");
            }),
            (o.minutes = function () {
              return this.get("minutes");
            }),
            (o.asMinutes = function () {
              return this.as("minutes");
            }),
            (o.hours = function () {
              return this.get("hours");
            }),
            (o.asHours = function () {
              return this.as("hours");
            }),
            (o.days = function () {
              return this.get("days");
            }),
            (o.asDays = function () {
              return this.as("days");
            }),
            (o.weeks = function () {
              return this.get("weeks");
            }),
            (o.asWeeks = function () {
              return this.as("weeks");
            }),
            (o.months = function () {
              return this.get("months");
            }),
            (o.asMonths = function () {
              return this.as("months");
            }),
            (o.years = function () {
              return this.get("years");
            }),
            (o.asYears = function () {
              return this.as("years");
            }),
            e
          );
        })()),
        (m = function (e, t, s) {
          return e
            .add(t.years() * s, "y")
            .add(t.months() * s, "M")
            .add(t.days() * s, "d")
            .add(t.hours() * s, "h")
            .add(t.minutes() * s, "m")
            .add(t.seconds() * s, "s")
            .add(t.milliseconds() * s, "ms");
        }),
        function (e, n, a) {
          (t = a),
            (s = a().$utils()),
            (a.duration = function (e, t) {
              return r(e, { $l: a.locale() }, t);
            }),
            (a.isDuration = l);
          var i = n.prototype.add,
            c = n.prototype.subtract;
          (n.prototype.add = function (e, t) {
            return l(e) ? m(this, e, 1) : i.bind(this)(e, t);
          }),
            (n.prototype.subtract = function (e, t) {
              return l(e) ? m(this, e, -1) : c.bind(this)(e, t);
            });
        });
    },
    86304: function (e, t, s) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/claim",
        function () {
          return s(45499);
        },
      ]);
    },
    56901: function (e, t, s) {
      "use strict";
      s.d(t, {
        m: function () {
          return r;
        },
      });
      var n = s(52322),
        a = s(64099),
        i = s(96577),
        l = s.n(i);
      function r(e) {
        let { onClose: t } = e,
          { connect: s } = (0, a.hm)();
        return (0, n.jsxs)("div", {
          className:
            "w-[275px] grid grid-cols-2 gap-3 bg-[url('/navbar/connect-bg.png')] bg-full mt-2 px-[14px] py-4",
          children: [
            (0, n.jsxs)("div", {
              className:
                "flex flex-col px-3 py-3 w-[116px] h-[123px] relative text-white bg-[url('/navbar/connect-item-bg.png')] bg-full cursor-pointer",
              onClick: (e) => {
                s("eth"), t();
              },
              children: [
                (0, n.jsx)(l(), {
                  src: "/navbar/pin.svg",
                  width: 25,
                  height: 22,
                  alt: "pin",
                  className: "absolute top-[-4px] right-[-5px]",
                }),
                (0, n.jsx)("p", {
                  className:
                    "text-[18px] font-bold text-stroked  font-Montserrat uppercase",
                  children: "EVM",
                }),
                (0, n.jsx)("p", {
                  className: "text-[12px] flex-1",
                  children: "Ethereum / BNB",
                }),
                (0, n.jsxs)("div", {
                  className: "flex flex-row gap-1 items-center",
                  children: [
                    (0, n.jsx)(l(), {
                      src: "/chain-icon/eth.svg",
                      width: 18,
                      height: 18,
                      alt: "icon",
                    }),
                    (0, n.jsx)(l(), {
                      src: "/chain-icon/eth2.svg",
                      width: 18,
                      height: 18,
                      alt: "icon",
                    }),
                  ],
                }),
              ],
            }),
            (0, n.jsxs)("div", {
              className:
                "flex flex-col px-3 py-3 w-[116px] h-[123px] relative text-white bg-[url('/navbar/connect-item-bg.png')] bg-full cursor-pointer",
              onClick: (e) => {
                s("sol"), t();
              },
              children: [
                (0, n.jsx)(l(), {
                  src: "/navbar/pin.svg",
                  width: 25,
                  height: 22,
                  alt: "pin",
                  className: "absolute top-[-4px] right-[-5px]",
                }),
                (0, n.jsx)("p", {
                  className:
                    "text-[18px] font-bold text-stroked flex-1 font-Montserrat uppercase",
                  children: "Solana",
                }),
                (0, n.jsx)("div", {
                  className: "flex flex-row gap-[8px] items-center",
                  children: (0, n.jsx)(l(), {
                    src: "/chain-icon/sol-active.svg",
                    width: 24,
                    height: 24,
                    alt: "icon",
                  }),
                }),
              ],
            }),
          ],
        });
      }
    },
    88253: function (e, t, s) {
      "use strict";
      s(52322), s(84012), s(64099), s(15514), s(2784), s(56901);
      var n = s(28879),
        a = s.n(n),
        i = s(10264),
        l = s.n(i);
      a().extend(l());
    },
    45499: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          __N_SSP: function () {
            return P;
          },
          default: function () {
            return T;
          },
        });
      var n = s(52322),
        a = s(64099),
        i = s(78523),
        l = s(84012),
        r = s(61860),
        c = s(96577),
        o = s.n(c);
      s(56869);
      var d = s(26691),
        u = s(28879),
        x = s.n(u),
        m = s(64989),
        h = s.n(m),
        p = s(10264),
        g = s.n(p),
        f = s(2784);
      s(88253), s(15107), x().extend(g()), x().extend(h());
      let b = (e) => {
          let { nextTime: t, className: s } = e;
          return (0, n.jsxs)("div", {
            className:
              "flex justify-between w-full px-8 text-[32px] font-montserrat font-extrabold leading-none text-stroked-medium ".concat(
                s
              ),
            suppressHydrationWarning: !0,
            children: [
              (0, n.jsxs)("div", {
                className: "w-20 text-center",
                suppressHydrationWarning: !0,
                children: ["0", 0],
              }),
              (0, n.jsxs)("div", {
                className: "w-20 text-center",
                suppressHydrationWarning: !0,
                children: ["0", 0],
              }),
              (0, n.jsxs)("div", {
                className: "w-20 text-center",
                suppressHydrationWarning: !0,
                children: ["0", 0],
              }),
              (0, n.jsxs)("div", {
                className: "w-20 text-center",
                suppressHydrationWarning: !0,
                children: ["0", 0],
              }),
            ],
          });
        },
        v = (e) =>
          new Intl.NumberFormat("en-US", {
            notation: "standard",
            maximumSignificantDigits: 20,
          }).format(e);
      var j = s(1425),
        w = s(49442),
        y = s(56901),
        N = s(15514);
      function $(e) {
        let { t, i18n: s } = (0, l.$)(),
          {
            walletAddress: i,
            connect: r,
            disconnectETH: c,
            disconnectSOL: o,
          } = (0, a.hm)(),
          { isWrongNetWork: d } = (0, N.k)(),
          u = i ? (d ? "wrong-network" : "primary") : "connect-wallet",
          x =
            "h-[60px] uppercase text-black outline-none w-full transition-all duration-200 ease-in-out flex justify-center items-center cursor-pointer bg-full pb-[10px] font-extrabold text-text text-2xl max-md:text-[15px] font-montserrat",
          m = "wrong-network" === u;
        function h() {
          return m
            ? "bg-[url('/index/trade-btn-disabled.png')]"
            : "bg-[url('/index/trade-btn-red.png')] hover:opacity-90 active:translate-y-[2px]";
        }
        function p() {
          switch (u) {
            case "connect-wallet":
              return t("cta.connect");
            case "wrong-network":
              return t("navbar.connectBtn.wrongNetwork");
            case "primary":
              return t("claim.claimYourToken");
          }
        }
        return i
          ? (0, n.jsx)("div", {
              className: "".concat(x, " ").concat(h(), " "),
              onClick: () => {
                e.onClaim();
              },
              children: p(),
            })
          : (0, n.jsx)(j.v, {
              children: (e) => {
                let { open: t, close: s } = e;
                return (0, n.jsx)(n.Fragment, {
                  children: (0, n.jsxs)("div", {
                    className: "relative ",
                    children: [
                      (0, n.jsx)(j.v.Button, {
                        className: "".concat(x, " ").concat(h()),
                        children: p(),
                      }),
                      (0, n.jsx)(w.u, {
                        as: f.Fragment,
                        enter: "transition ease-out duration-100",
                        enterFrom: "transform opacity-0 scale-95",
                        enterTo: "transform opacity-100 scale-100",
                        leave: "transition ease-in duration-75",
                        leaveFrom: "transform opacity-100 scale-100",
                        leaveTo: "transform opacity-0 scale-95",
                        children: (0, n.jsx)(j.v.Items, {
                          className:
                            "absolute left-[50%] translate-x-[-50%] bottom-[130%]",
                          children: (0, n.jsx)(y.m, { onClose: () => s() }),
                        }),
                      }),
                    ],
                  }),
                });
              },
            });
      }
      var k = s(54073),
        C = s.n(k);
      /**
       * @license lucide-react v0.303.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let M = (0, s(56626).Z)("Loader2", [
        ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }],
      ]);
      function S(e) {
        let { visible: t, onClose: s, onSuccess: i } = e,
          { t: r, i18n: c } = (0, l.$)(),
          [u, x] = (0, f.useState)(""),
          { walletAddress: m, signMessage: h } = (0, a.hm)(),
          { data: p } = a.SX.claim.getClaimMemeAmount.useQuery(
            { wallet: m },
            { enabled: !!m }
          ),
          g = a.SX.claim.claimMemeAmount.useMutation(),
          [b, v] = (0, f.useState)(!1),
          [j, w] = (0, f.useState)(void 0),
          y = (0, f.useCallback)(
            C()((e) => {
              if (!p || p.totalCanClaim <= 0 || !m) {
                d.g.error("Insufficient Balance to claim");
                return;
              }
              let t = d.g.loading("Claim...");
              v(!0),
                a.PY.claim.getClaimMessage
                  .query({
                    wallet: m,
                    claimAddress: e,
                    amount: p.totalCanClaim,
                  })
                  .then((t) => {
                    var s;
                    return null ===
                      (s = h(t, () => {
                        d.g.error("Claim failed, please try again later");
                      })) || void 0 === s
                      ? void 0
                      : s.then((t) =>
                          g
                            .mutateAsync({
                              wallet: m,
                              signature: t,
                              claimAddress: e,
                              amount: p.totalCanClaim,
                              chain: "sol",
                            })
                            .then((e) => {
                              w(e),
                                d.g.success("Claim successful"),
                                null == i || i();
                            })
                        );
                  })
                  .catch((e) => {
                    d.g.error(e.message);
                  })
                  .finally(() => {
                    d.g.dismiss(t), v(!1);
                  });
            }, 300),
            [h, m, p]
          );
        return (0, n.jsx)(n.Fragment, {
          children:
            t &&
            (0, n.jsx)("div", {
              className:
                "fixed w-[100vw] h-[100vh] top-0 left-0 z-[200]  backdrop-blur-sm bg-opacity-90 flex items-center justify-center",
              children: (0, n.jsxs)("div", {
                className:
                  "max-w-[440px] w-[90%] min-h-[500px] bg-[url('/modal/bg.png')] bg-full relative py-12",
                children: [
                  (0, n.jsxs)("div", {
                    className: " px-8 md:px-10",
                    children: [
                      (0, n.jsx)(o(), {
                        src: "/modal/close.svg",
                        width: 16,
                        height: 22,
                        alt: "close",
                        className:
                          "hover:opacity-60  cursor-pointer absolute top-5 right-5",
                        onClick: (e) => s(),
                      }),
                      (0, n.jsx)("div", {
                        className:
                          "w-full h-[52px] bg-[url('/modal/join-title-bg.png')] bg-full flex-center uppercase text-2xl text-black font-bold",
                        children: r("claim.joinUs.title"),
                      }),
                      (0, n.jsx)(o(), {
                        src: "/claim/join.png",
                        width: 357,
                        height: 220,
                        alt: "close",
                        className: "w-full h-auto mt-2",
                      }),
                      (0, n.jsx)("div", {
                        className:
                          "w-full h-[50px] bg-[url('/modal/input-bg-v2.png')] bg-full flex items-center mt-8 px-[10px] pl-4",
                        children: (0, n.jsx)("input", {
                          className:
                            "flex-1 w-[50%] pb-1 h-full text-lg text-center focus:outline-none  outline-none border-none text-black bg-transparent  placeholder:text-black/40",
                          type: "email",
                          placeholder: r("claim.joinUs.enterTip"),
                          value: u,
                          onChange: (e) => {
                            x(e.target.value);
                          },
                        }),
                      }),
                      (0, n.jsxs)("button", {
                        className:
                          "h-[56px] mt-2 w-full outline-none transition-all duration-200 ease-in-out flex-center  cursor-pointer bg-full pb-[10px] font-bold text-text text-2xl  hover:opacity-90 active:translate-y-[2px] uppercase "
                            .concat(
                              j
                                ? "bg-[url('/index/trade-btn-red.png')]"
                                : "bg-[url('/modal/btn-yellow.png')]",
                              " "
                            )
                            .concat(b ? "opacity-50" : ""),
                        onClick: () => {
                          if (j) {
                            window.open(
                              "https://solscan.io/tx/".concat(j),
                              "_blank"
                            );
                            return;
                          }
                          b || y(u);
                        },
                        children: [
                          b &&
                            (0, n.jsx)(M, { className: "animate-spin mr-1" }),
                          j ? "View on Solscan" : r("claim.claimYourToken"),
                        ],
                      }),
                    ],
                  }),
                  (0, n.jsx)(o(), {
                    src: "/modal/deco-left.svg",
                    width: 25,
                    height: 9,
                    alt: "close",
                    className: "absolute top-2 left-3",
                  }),
                  (0, n.jsx)(o(), {
                    src: "/modal/deco-right.svg",
                    width: 43,
                    height: 10,
                    alt: "close",
                    className: " absolute top-1 right-3 md:right-[70px]",
                  }),
                  (0, n.jsx)(o(), {
                    src: "/modal/deco-bot.svg",
                    width: 17,
                    height: 14,
                    alt: "close",
                    className: " absolute bottom-2 right-3",
                  }),
                ],
              }),
            }),
        });
      }
      function Y() {
        var e;
        let { t } = (0, l.$)(),
          { walletAddress: s } = (0, a.hm)(),
          { data: i, refetch: c } = a.SX.claim.getClaimMemeAmount.useQuery(
            { wallet: s },
            { enabled: !!s }
          ),
          [u, x] = (0, f.useState)(!1);
        return (0, n.jsxs)("div", {
          className: "max-sm:w-full w-[495px] mx-auto relative",
          children: [
            (0, n.jsxs)("div", {
              className:
                "lg:min-h-[554px] bg-[url('/claim/trade-bg.webp')] bg-no-repeat bg-full relative z-[3] px-5 py-6 max-sm:px-4 max-sm:py-4 ",
              children: [
                (0, n.jsx)("div", {
                className: "uniswap-iframe-container",
                dangerouslySetInnerHTML: {
                  __html: `
                    <iframe
                      src="https://raydium.io/swap/"
                      style="width:100%;height:623px;border:none;outline:none;border-radius: 8px;"
                    ></iframe>
                  `,
                },
              }),
            ]
            }),
            (0, n.jsx)(o(), {
              width: 93,
              height: 100,
              src: "/index/trade-form-pages.svg",
              className: "h-auto absolute top-[42px] right-[-52px]",
              alt: "",
            }),
            
            (0, n.jsx)(S, {
              visible: u,
              onClose: () => x(!1),
              onSuccess: () => {
                c();
              },
            }),
          ],
        });
      }
      var _ = s(38082),
        D = s(97729),
        H = s.n(D),
        P = !0;
      function T() {
        let e = (0, _.dD)(),
          { t, i18n: s } = (0, l.$)();
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsxs)(H(), {
              children: [
                (0, n.jsx)("title", { children: t("meta.title") }),
                (0, n.jsx)("meta", {
                  name: "description",
                  content: t("meta.desc"),
                }),
                (0, n.jsx)("link", {
                  rel: "canonical",
                  href: "https://solciety.io/".concat(s.language),
                }),
              ],
            }),
            (0, n.jsxs)(a.k8, {
              children: [
                (0, n.jsx)(i.Z, {}),
                (0, n.jsxs)("div", {
                  className:
                    "relative flex lg:justify-between max-lg:flex-col pt-[80px] lg:pt-[180px] px-3 lg:px-20 text-white  bg-[url('/index/trade-bg.jpg')] bg-cover bg-center overflow-hidden lg:pb-10 lg:min-h-screen",
                  children: [
                    (0, n.jsxs)("div", {
                      className:
                        "max-w-[600px] flex flex-col w-full max-lg:items-center max-lg:text-center",
                      children: [
                        (0, n.jsx)("p", {
                          className:
                            "italic text-[26px] leading-[32px] max-lg:text-base",
                          children: t("claim.title1"),
                        }),
                        (0, n.jsx)("p", {
                          className:
                            "uppercase font-Montserrat text-[#F5C145] text-[72px] max-lg:text-[48px] font-extrabold leading-none text-shadow-stroked",
                          children: t("claim.title2"),
                        }),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      className: "relative",
                      children: [
                        e
                          ? (0, n.jsx)(o(), {
                              src: "/claim/roles-mobile.png",
                              alt: "roles",
                              width: 358,
                              height: 138,
                              className: "w-full mb-[-20px]",
                            })
                          : (0, n.jsx)(o(), {
                              src: "/claim/roles.webp",
                              alt: "roles",
                              width: 318,
                              height: 441,
                              className: "absolute top-[10%] left-[-220px]",
                            }),
                        (0, n.jsx)(Y, {}),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      className:
                        "lg:absolute lg:top-[380px] lg:left-20 max-lg:flex max-lg:flex-col max-lg:items-center max-lg:pb-4 max-lg:mt-4",
                      children: [
                        (0, n.jsxs)("button", {
                          className:
                            "flex items-center justify-center gap-2 rounded bg-[#1311C4] text-white h-[48px] px-6 text-lg uppercase font-Montserrat font-bold hover:opacity-80 mb-4",
                          onClick: () => {
                            window.open("https://t.me/solciety_sol");
                          },
                          children: [
                            (0, n.jsx)(F, {}),
                            t("claim.joinCommunity"),
                          ],
                        }),
                        (0, n.jsxs)("div", {
                          className: "lg:mt-[250px] max-lg:text-center",
                          children: [
                            (0, n.jsxs)("p", {
                              className:
                                "text-[32px] max-lg:text-2xl leading-[40px]",
                              children: [t("claim.listing"), ":"],
                            }),
                            (0, n.jsx)("p", {
                              className:
                                "text-[#E45D43] text-[28px] max-lg:text-xl leading-none",
                              children: t("claim.startTime"),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      let F = () =>
        (0, n.jsx)("svg", {
          width: "20",
          height: "16",
          viewBox: "0 0 20 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, n.jsx)("path", {
            d: "M17.5631 0.141253C17.5631 0.141253 19.3393 -0.551319 19.1912 1.13064C19.1419 1.82322 18.6979 4.24723 18.3525 6.86912L17.1684 14.6359C17.1684 14.6359 17.0698 15.7736 16.1817 15.9715C15.2936 16.1694 13.9615 15.279 13.7148 15.0811C13.5175 14.9327 10.0145 12.7065 8.78108 11.6182C8.43571 11.3214 8.04101 10.7277 8.83041 10.0352L14.0108 5.08823C14.6029 4.49459 15.1949 3.10944 12.7281 4.79141L5.82085 9.49102C5.82085 9.49102 5.03146 9.9857 3.55136 9.54049L0.344421 8.55109C0.344421 8.55109 -0.839676 7.80906 1.18316 7.06698C6.1169 4.7419 12.1854 2.36736 17.5631 0.141253Z",
            fill: "white",
          }),
        });
    },
    61860: function (e, t, s) {
      "use strict";
      s.d(t, {
        z: function () {
          return r;
        },
      });
      var n = s(52322),
        a = s(2784),
        i = s(40334),
        l = s.n(i);
      let r = (e) => {
        let {
            initialValue: t = 0,
            fontStyle: s,
            duration: i = 700,
            stepPrecision: r = 2,
            value: c,
            formatValue: o,
            className: d,
          } = e,
          [u, x] = (0, a.useState)(t);
        return (
          (0, a.useEffect)(() => {
            requestAnimationFrame(() => {
              x(c);
            });
          }, [c]),
          (0, n.jsx)(l(), {
            component: "span",
            value: u,
            className: d,
            style: { ...s },
            duration: null != i ? i : 500,
            stepPrecision: r,
            formatValue: (e) => {
              var t;
              return null !== (t = null == o ? void 0 : o(e)) && void 0 !== t
                ? t
                : e;
            },
          })
        );
      };
    },
    56869: function (e, t, s) {
      "use strict";
      s(15107);
    },
  },
  function (e) {
    e.O(
      0,
      [
        3999, 9753, 3347, 7830, 3921, 9227, 3954, 3720, 7859, 8523, 9774, 2888,
        179,
      ],
      function () {
        return e((e.s = 86304));
      }
    ),
      (_N_E = e.O());
  },
]);
