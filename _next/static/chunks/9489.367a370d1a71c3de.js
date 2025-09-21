"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9489],
  {
    56901: function (e, t, s) {
      s.d(t, {
        m: function () {
          return i;
        },
      });
      var n = s(52322),
        l = s(64099),
        r = s(96577),
        a = s.n(r);
      function i(e) {
        let { onClose: t } = e,
          { connect: s } = (0, l.hm)();
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
                (0, n.jsx)(a(), {
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
                    (0, n.jsx)(a(), {
                      src: "/chain-icon/eth.svg",
                      width: 18,
                      height: 18,
                      alt: "icon",
                    }),
                    (0, n.jsx)(a(), {
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
                (0, n.jsx)(a(), {
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
                  children: (0, n.jsx)(a(), {
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
      s(52322), s(84012), s(64099), s(15514), s(2784), s(56901);
      var n = s(28879),
        l = s.n(n),
        r = s(10264),
        a = s.n(r);
      l().extend(a());
    },
    29489: function (e, t, s) {
      s.r(t),
        s.d(t, {
          ReferralSpy: function () {
            return w;
          },
          default: function () {
            return j;
          },
        });
      var n = s(52322),
        l = s(23981),
        r = s(1425),
        a = s(49442),
        i = s(64099),
        c = s(96577),
        o = s.n(c),
        x = s(2784),
        d = s(84012);
      s(61860), s(34244);
      var p = s(30686);
      s(72579), s(86152), s(1842), s(12436), s(80537), new p.Z();
      var h = s(26691);
      s(88253), s(56869);
      let m = (e) =>
        new Intl.NumberFormat("en-US", {
          notation: "standard",
          maximumSignificantDigits: 20,
        }).format(e);
      var u = s(5632),
        g = s(56901),
        f = s(38082),
        v = s(90512),
        b = s(15514);
      function j() {
        let {
            disconnect: e,
            walletIcon: t,
            resetNetwork: s,
            walletAddressShort: c,
            isValidNetwork: p,
            chainIcon: h,
            connect: u,
            disconnectETH: j,
            disconnectSOL: C,
          } = (0, i.hm)(),
          { purchasedToken: y, currentTokenInfo: k } = (0, i.ZN)(),
          { isWrongNetWork: H } = (0, b.k)(),
          L = (0, f.dD)(),
          { t: B, i18n: M } = (0, d.$)(),
          [S, E] = (0, x.useState)(!1),
          T = () => E(!1);
        (0, x.useEffect)(() => {
          let e = () => E(!0);
          return (
            f.TB.addListener("OpenMenu", e),
            () => {
              f.TB.removeListener("OpenMenu", e);
            }
          );
        }, []);
        let F =
            "flex-center overflow-hidden px-2 md:px-4 bg-primary hover:bg-primary/90 border-[2px] border-white rounded-lg text-[14px] uppercase text-white transition-all duration-200 h-[38px]",
          W = (0, n.jsx)("div", {
            className:
              "z-[100] absolute right-0  p-5 mt-2 bg-[url('/navbar/wallet-bg.png')] bg-full lg:w-[375px] w-full max-md:static",
            children: (0, n.jsxs)("div", {
              className: "flex flex-col",
              children: [
                (0, n.jsxs)("div", {
                  className: "flex justify-between items-center",
                  children: [
                    (0, n.jsxs)("div", {
                      className:
                        "flex items-center gap-[12px] bg-[url('/navbar/account-bg.png')] bg-full h-[50px] pl-3 pr-4",
                      children: [
                        (0, n.jsxs)("div", {
                          className: "relative",
                          children: [
                            (0, n.jsx)(o(), {
                              src: h,
                              width: 32,
                              height: 32,
                              alt: "icon",
                            }),
                            (0, n.jsx)(o(), {
                              src: null != t ? t : "",
                              width: 20,
                              height: 20,
                              alt: "icon",
                              className:
                                "absolute bottom-[-3px] right-[-3px]  border-[1px] border-solid border-black rounded-full",
                            }),
                          ],
                        }),
                        (0, n.jsx)("span", {
                          className: "text-[18px] font-bold  ",
                          children: c,
                        }),
                      ],
                    }),
                    (0, n.jsxs)("svg", {
                      width: "23",
                      height: "25",
                      viewBox: "0 0 23 25",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      className:
                        " w-[24px] h-[24px] hover:opacity-60 hover:cursor-pointer",
                      onClick: (e) => T(),
                      children: [
                        (0, n.jsx)("path", {
                          d: "M6.29883 2C12.0952 7.8604 17.5865 14.5437 20.6464 22.3174C21.5148 24.5237 19.9403 22.883 19.5519 22.4169",
                          stroke: "black",
                          "stroke-width": "3",
                          "stroke-linecap": "round",
                        }),
                        (0, n.jsx)("path", {
                          d: "M21.3423 4.50732C14.2847 8.99854 8.23512 15.4515 2 20.9841",
                          stroke: "black",
                          "stroke-width": "3",
                          "stroke-linecap": "round",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  className: "mt-3 flex flex-col",
                  children: [
                    (0, n.jsx)("span", {
                      className: "text-[14px] font-bold capitalize",
                      children: B("total"),
                    }),
                    (0, n.jsxs)("div", {
                      className: " ",
                      children: [
                        (0, n.jsx)("span", {
                          className:
                            "text-[36px] font-bold text-stroked-medium  text-white leading-[40px]",
                          children: m(y),
                        }),
                        (0, n.jsx)("span", {
                          className:
                            "text-[14px] ml-2 font-bold text-stroked text-primary",
                          children: "solciety",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, n.jsx)(N, {}),
                (0, n.jsx)("button", {
                  className:
                    "h-[60px] outline-none w-full transition-all duration-200 ease-in-out flex-center  cursor-pointer bg-full pb-[10px] font-bold text-text text-2xl bg-[url('/index/trade-btn.png')] hover:opacity-90 active:translate-y-[2px]",
                  onClick: (t) => e(),
                  children: B("navbar.connectBtn.disconnect"),
                }),
              ],
            }),
          });
        return H
          ? (0, n.jsxs)("button", {
              className: F,
              suppressHydrationWarning: !0,
              onClick: () => {
                (null == k ? void 0 : k.chain) === "SOL"
                  ? (j(), u("sol"))
                  : (null == k ? void 0 : k.chain) === "ETH" ||
                    (null == k ? void 0 : k.chain) === "BSC"
                  ? (C(), u("eth"))
                  : (null == k ? void 0 : k.chain) === "CARD" &&
                    (C(), u("eth"));
              },
              children: [
                (0, n.jsx)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "16",
                  height: "16",
                  viewBox: "0 0 16 16",
                  fill: "none",
                  className: "mr-[8px]",
                  children: (0, n.jsx)("path", {
                    d: "M16 7.77153C16 7.987 15.9128 8.19364 15.7576 8.34599C15.6024 8.49835 15.3919 8.58394 15.1724 8.58394H13.4772L10.9469 13.5511C10.8781 13.686 10.7725 13.7994 10.6418 13.8787C10.5111 13.958 10.3605 14 10.2069 14H10.1655C10.005 13.992 9.85038 13.9384 9.72044 13.8455C9.5905 13.7527 9.4909 13.6248 9.43379 13.4774L5.72414 3.92275L3.78759 8.11004C3.72151 8.25156 3.6154 8.37147 3.48188 8.45548C3.34837 8.5395 3.19307 8.58409 3.03448 8.58394H0.827586C0.608097 8.58394 0.397597 8.49835 0.242394 8.34599C0.0871919 8.19364 0 7.987 0 7.77153C0 7.55607 0.0871919 7.34943 0.242394 7.19708C0.397597 7.04472 0.608097 6.95913 0.827586 6.95913H2.50138L5.04 1.47537C5.1077 1.32961 5.21779 1.20675 5.35643 1.12224C5.49507 1.03773 5.65606 0.995342 5.81917 1.00041C5.98228 1.00547 6.14022 1.05776 6.27314 1.1507C6.40606 1.24364 6.50802 1.37309 6.56621 1.52276L10.3097 11.1674L12.2255 7.40595C12.2946 7.27146 12.4003 7.15845 12.531 7.07955C12.6617 7.00065 12.8121 6.95896 12.9655 6.95913H15.1724C15.3919 6.95913 15.6024 7.04472 15.7576 7.19708C15.9128 7.34943 16 7.55607 16 7.77153Z",
                    fill: "white",
                  }),
                }),
                B("navbar.connectBtn.wrongNetwork"),
              ],
            })
          : (0, n.jsxs)(n.Fragment, {
              children: [
                c
                  ? p
                    ? (0, n.jsx)(n.Fragment, {
                        children: (0, n.jsxs)("div", {
                          className: "relative ",
                          children: [
                            (0, n.jsxs)("div", {
                              className:
                                "h-[38px] flex items-center justify-center lg:w-[169px] pr-[8px] pl-[8px] py-[8px] max-md:pr-[6px] max-md:pl-[6px]\n           bg-primary hover:bg-primary/90 border-[2px] border-solid border-white rounded-lg transition-all duration-200 cursor-pointer text-white ",
                              onClick: () => E(!S),
                              children: [
                                (0, n.jsx)(o(), {
                                  src: h,
                                  alt: "icon",
                                  width: 24,
                                  height: 24,
                                  className:
                                    "h-[24px] w-[24px] max-lg:h-[18px] max-lg:w-[18px] ",
                                  suppressHydrationWarning: !0,
                                }),
                                (0, n.jsx)("span", {
                                  className:
                                    "text-[14px] leading-normal ml-[6px] ",
                                  children: c,
                                }),
                              ],
                            }),
                            S
                              ? L
                                ? (0, n.jsx)(l.V, {
                                    open: S,
                                    onClose: () => E(!1),
                                    className:
                                      "fixed top-0 bottom-0 right-0 left-0 z-50 transition bg-black bg-opacity-50  px-4 pt-[90px]",
                                    children: W,
                                  })
                                : W
                              : null,
                          ],
                        }),
                      })
                    : (0, n.jsxs)("button", {
                        className: F,
                        onClick: (e) => s(),
                        suppressHydrationWarning: !0,
                        children: [
                          (0, n.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "16",
                            height: "16",
                            viewBox: "0 0 16 16",
                            fill: "none",
                            className: "mr-[8px]",
                            children: (0, n.jsx)("path", {
                              d: "M16 7.77153C16 7.987 15.9128 8.19364 15.7576 8.34599C15.6024 8.49835 15.3919 8.58394 15.1724 8.58394H13.4772L10.9469 13.5511C10.8781 13.686 10.7725 13.7994 10.6418 13.8787C10.5111 13.958 10.3605 14 10.2069 14H10.1655C10.005 13.992 9.85038 13.9384 9.72044 13.8455C9.5905 13.7527 9.4909 13.6248 9.43379 13.4774L5.72414 3.92275L3.78759 8.11004C3.72151 8.25156 3.6154 8.37147 3.48188 8.45548C3.34837 8.5395 3.19307 8.58409 3.03448 8.58394H0.827586C0.608097 8.58394 0.397597 8.49835 0.242394 8.34599C0.0871919 8.19364 0 7.987 0 7.77153C0 7.55607 0.0871919 7.34943 0.242394 7.19708C0.397597 7.04472 0.608097 6.95913 0.827586 6.95913H2.50138L5.04 1.47537C5.1077 1.32961 5.21779 1.20675 5.35643 1.12224C5.49507 1.03773 5.65606 0.995342 5.81917 1.00041C5.98228 1.00547 6.14022 1.05776 6.27314 1.1507C6.40606 1.24364 6.50802 1.37309 6.56621 1.52276L10.3097 11.1674L12.2255 7.40595C12.2946 7.27146 12.4003 7.15845 12.531 7.07955C12.6617 7.00065 12.8121 6.95896 12.9655 6.95913H15.1724C15.3919 6.95913 15.6024 7.04472 15.7576 7.19708C15.9128 7.34943 16 7.55607 16 7.77153Z",
                              fill: "white",
                            }),
                          }),
                          B("navbar.connectBtn.wrongNetwork"),
                        ],
                      })
                  : (0, n.jsx)(r.v, {
                      children: (e) => {
                        let { open: t, close: s } = e;
                        return (0, n.jsxs)("div", {
                          className: "relative",
                          children: [
                            (0, n.jsxs)(r.v.Button, {
                              className: (0, v.Z)(
                                F,
                                (M.language, "lg:max-w-[240px]")
                              ),
                              children: [
                                (0, n.jsx)("div", {
                                  className: "max-lg:hidden",
                                  suppressHydrationWarning: !0,
                                  children: B("connectWallet"),
                                }),
                                (0, n.jsx)("div", {
                                  className: "lg:hidden",
                                  suppressHydrationWarning: !0,
                                  children: B("connectWallet"),
                                }),
                              ],
                            }),
                            (0, n.jsx)(a.u, {
                              as: x.Fragment,
                              enter: "transition ease-out duration-100",
                              enterFrom: "transform opacity-0 scale-95",
                              enterTo: "transform opacity-100 scale-100",
                              leave: "transition ease-in duration-75",
                              leaveFrom: "transform opacity-100 scale-100",
                              leaveTo: "transform opacity-0 scale-95",
                              children: (0, n.jsx)(r.v.Items, {
                                className:
                                  "absolute lg:right-0 max-md:translate-x-[-30%]",
                                children: (0, n.jsx)(g.m, {
                                  onClose: () => s(),
                                }),
                              }),
                            }),
                          ],
                        });
                      },
                    }),
                (0, n.jsx)(w, {}),
              ],
            });
      }
      let w = () => {
          let e = (0, u.useRouter)().query.r;
          return (0, i.r0)(e), null;
        },
        N = () => {
          var e, t;
          let { referralState: s, refreshState: l } = (0, i.p$)(),
            { purchasedToken: r } = (0, i.ZN)(),
            { t: a } = (0, d.$)();
          return (
            (0, x.useEffect)(() => {
              l();
            }, []),
            (0, n.jsxs)("div", {
              className: "w-full mb-2",
              children: [
                (0, n.jsxs)("div", {
                  className:
                    " h-[123px] mt-2 bg-[url('/navbar/account-detail-bg.png')] bg-full",
                  children: [
                    (0, n.jsxs)("div", {
                      className:
                        "px-4 mb-[10px] flex items-center justify-between h-[34px] text-white text-sm",
                      children: [
                        (0, n.jsx)("span", { children: a("referral.rewards") }),
                        (0, n.jsxs)("p", {
                          className: "gap-2 flex items-center",
                          children: [
                            (0, n.jsx)("span", {
                              children:
                                null !==
                                  (e = null == s ? void 0 : s.earnedToken) &&
                                void 0 !== e
                                  ? e
                                  : 0,
                            }),
                            (0, n.jsx)("span", {
                              className:
                                "text-stroked font-bold text-xs uppercase",
                              children: "solciety",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      className: "flex items-center py-2 px-4",
                      children: [
                        (0, n.jsx)(o(), {
                          src: "/navbar/copy.svg",
                          width: 22,
                          height: 22,
                          alt: "copy",
                          onClick: () => {
                            h.g.success(a("copySuccess")),
                              navigator.clipboard.writeText(
                                ""
                                  .concat(window.location.origin, "/?r=")
                                  .concat(null == s ? void 0 : s.referralKey)
                              );
                          },
                          className: "cursor-pointer",
                        }),
                        (0, n.jsxs)("div", {
                          className: "flex-1 ml-5",
                          children: [
                            (0, n.jsx)("h4", {
                              className: "text-lg",
                              children: a("referral.link"),
                            }),
                            (0, n.jsxs)("div", {
                              className: "text-[12px] text-primary ",
                              children: [
                                window.location.origin,
                                "/?r=",
                                null == s ? void 0 : s.referralKey,
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, n.jsx)("p", {
                  className: "text-sm text-white mt-2",
                  children: a("referral.commission", { percent: 5 }),
                }),
                (0, n.jsx)("div", {
                  className: "mt-[20px] text-[#fff] hidden",
                  children: (0, n.jsxs)("li", {
                    className:
                      "flex flex-row items-center justify-between mt-[10px]  text-[14px]",
                    children: [
                      (0, n.jsx)("div", {
                        className: "font-bold",
                        children: a("home.v2.dex.crr"),
                      }),
                      (0, n.jsxs)("div", {
                        className: "font-Montserrat",
                        children: [
                          (0, n.jsx)("span", {
                            className: "font-bold",
                            children:
                              null !==
                                (t = null == s ? void 0 : s.earnedToken) &&
                              void 0 !== t
                                ? t
                                : 0,
                          }),
                          " ",
                          "$Solciety",
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            })
          );
        };
    },
    61860: function (e, t, s) {
      s.d(t, {
        z: function () {
          return i;
        },
      });
      var n = s(52322),
        l = s(2784),
        r = s(40334),
        a = s.n(r);
      let i = (e) => {
        let {
            initialValue: t = 0,
            fontStyle: s,
            duration: r = 700,
            stepPrecision: i = 2,
            value: c,
            formatValue: o,
            className: x,
          } = e,
          [d, p] = (0, l.useState)(t);
        return (
          (0, l.useEffect)(() => {
            requestAnimationFrame(() => {
              p(c);
            });
          }, [c]),
          (0, n.jsx)(a(), {
            component: "span",
            value: d,
            className: x,
            style: { ...s },
            duration: null != r ? r : 500,
            stepPrecision: i,
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
      s(15107);
    },
  },
]);
