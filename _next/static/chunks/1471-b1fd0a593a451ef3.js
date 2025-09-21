"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1471],
  {
    24420: function (e, t, l) {
      l.d(t, {
        Z: function () {
          return i;
        },
      });
      var s = l(52322);
      l(2784);
      var a = l(48508);
      function i(e) {
        let { children: t, className: l, id: i } = e;
        return (0, s.jsx)(a.E.div, {
          id: i,
          className: l,
          whileInView: { opacity: 1, y: 0 },
          initial: { opacity: 0, y: 200 },
          transition: { duration: 1, type: "keyframes" },
          viewport: { once: !1 },
          children: t,
        });
      }
    },
    70695: function (e, t, l) {
      l.d(t, {
        Z: function () {
          return n;
        },
      });
      var s = l(52322),
        a = l(96577),
        i = l.n(a),
        o = l(2784);
      function n() {
        let [e, t] = (0, o.useState)(!1),
          l =
            "h-[55px] mt-2 outline-none w-full transition-all duration-200 ease-in-out flex-center  cursor-pointer bg-full pb-[10px] font-bold text-text text-xl  hover:opacity-90 active:translate-y-[2px] uppercase";
        return (
          (0, o.useEffect)(() => {
            setTimeout(() => {
              fetch("/api/ip-info").then(async (e) => {
                "GB" === (await e.json()).country_code && t(!0);
              });
            }, 500);
          }, []),
          (0, s.jsx)(s.Fragment, {
            children:
              e &&
              (0, s.jsx)("div", {
                className:
                  "fixed w-[100vw] h-[100vh] top-0 z-[200]  backdrop-blur-sm bg-opacity-90 flex items-center justify-center",
                children: (0, s.jsxs)("div", {
                  className:
                    "max-w-[440px] w-[90%] min-h-[400px] bg-[url('/modal/bg.png')] bg-full relative py-9 pl-4 md:pl-9 md:pr-6 pr-2 text-text",
                  children: [
                    (0, s.jsx)(i(), {
                      src: "/modal/close.svg",
                      width: 16,
                      height: 22,
                      alt: "close",
                      className:
                        "hover:opacity-60  cursor-pointer absolute top-5 right-5",
                      onClick: (e) => void t(!1),
                    }),
                    (0, s.jsxs)("div", {
                      className:
                        "w-full px-4 py-5 bg-[url('/modal/block-bg.png')] bg-full relative mt-[40px] pt-[40px]",
                      children: [
                        (0, s.jsxs)("div", {
                          className:
                            "absolute left-1/2 -translate-x-1/2 -top-8 w-16 h-16",
                          children: [
                            (0, s.jsx)(i(), {
                              src: "/modal/favicon.png",
                              width: 64,
                              height: 64,
                              alt: "favicon",
                              className: "relative z-[2]",
                            }),
                            (0, s.jsx)(i(), {
                              src: "/modal/icon-bg.svg",
                              width: 62,
                              height: 64,
                              alt: "close",
                              className:
                                "absolute top-[-2px] right-[-4px] z-[1]",
                            }),
                          ],
                        }),
                        (0, s.jsxs)("div", {
                          className:
                            " text-lg md:text-xl font-bold text-center",
                          children: [
                            "Purchases are not available for customers with ",
                            "UK",
                            " IPs",
                          ],
                        }),
                        (0, s.jsxs)("div", {
                          className: "text-[11px] mt-4",
                          children: [
                            (0, s.jsxs)("p", {
                              children: [
                                "Back in October 2023 your creepy government along with their henchmen the FCA decided to regulate crypto in your country.",
                                " ",
                              ],
                            }),
                            (0, s.jsx)("p", {
                              children:
                                "They can control what you do but they can’t stop you complaining, like every good keyboard warrior and Karen. Head to the meme maker and demand the freedom of crypto through memes. Don’t be a libtard!",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)("div", {
                      className:
                        "mt-[8px] flex flex-row max-md:flex-col gap-1 md:gap-2 pr-2",
                      children: [
                        (0, s.jsxs)("button", {
                          className: "".concat(
                            l,
                            " bg-[url('/modal/btn-white.png')]"
                          ),
                          onClick: (e) => void t(!1),
                          children: ["I’m not from ", "UK"],
                        }),
                        (0, s.jsx)("button", {
                          className: "".concat(
                            l,
                            " bg-[url('/modal/btn-yellow.png')]"
                          ),
                          onClick: (e) =>
                            void (window.location.href = "https://google.com"),
                          children: "Leave the site",
                        }),
                      ],
                    }),
                    (0, s.jsx)(i(), {
                      src: "/modal/deco-left.svg",
                      width: 25,
                      height: 9,
                      alt: "close",
                      className: "absolute top-2 left-3",
                    }),
                    (0, s.jsx)(i(), {
                      src: "/modal/deco-right.svg",
                      width: 43,
                      height: 10,
                      alt: "close",
                      className: " absolute top-1 right-3 md:right-[70px]",
                    }),
                  ],
                }),
              }),
          })
        );
      }
    },
    51757: function (e, t, l) {
      l.d(t, {
        Z: function () {
          return x;
        },
      });
      var s = l(52322),
        a = l(2784),
        i = l(90512),
        o = l(84012),
        n = l(24420),
        r = l(96577),
        c = l.n(r),
        d = l(38082);
      function x() {
        let e = (0, d.Uj)(),
          { t, i18n: l } = (0, o.$)(),
          r = [, , , , ,]
            .fill(0)
            .map((e, l) => ({
              question: t("faqs.q".concat(l + 1)),
              answer: t("faqs.a".concat(l + 1)),
              show: 0 == l,
            })),
          [x, m] = (0, a.useState)(r);
        return (0, s.jsxs)("div", {
          className:
            "bg-[url('/index/faq-bg.jpg')] bg-cover relative overflow-x-hidden",
          id: "faq",
          children: [
            (0, s.jsxs)("svg", {
              width: "146",
              height: "155",
              viewBox: "0 0 146 155",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              className: "absolute top-16 left-6 max-md:hidden",
              children: [
                (0, s.jsx)("path", {
                  d: "M143.269 2.83789C137.586 13.5722 114.577 31.9101 109.719 36.5631C74.0454 70.7334 38.6286 105.155 3.30078 139.661",
                  stroke: "#000",
                  strokeWidth: "5",
                  strokeLinecap: "round",
                }),
                (0, s.jsx)("path", {
                  d: "M80.3623 76.7539C65.8045 97.6465 51.3477 118.612 36.7641 139.486C32.3772 145.766 37.5635 137.121 37.8999 136.516",
                  stroke: "#000",
                  strokeWidth: "5",
                  strokeLinecap: "round",
                }),
                (0, s.jsx)("path", {
                  d: "M44.1904 57.8809C47.075 84.8849 50.9226 112.147 52.2286 139.311C52.6233 147.521 51.4715 141.641 50.4811 139.66",
                  stroke: "#000",
                  strokeWidth: "5",
                  strokeLinecap: "round",
                }),
                (0, s.jsx)("path", {
                  d: "M53.627 42.1545C53.7462 44.2192 58.0656 118.825 58.5197 127.254C58.9461 135.168 61.7248 143.501 59.2187 151.019C58.3154 153.729 57.4651 145.577 56.7723 142.806",
                  stroke: "#000",
                  strokeWidth: "5",
                  strokeLinecap: "round",
                }),
              ],
            }),
            (0, s.jsxs)(n.Z, {
              className:
                "w-full md:max-w-[1200px] pt-[80px] pb-[50px] flex-center flex-col mx-auto max-md:px-5  ",
              children: [
                (0, s.jsx)("div", {
                  className:
                    "flex justify-end w-full md:pr-[160px] max-md:mt-[-60px] max-md:pr-12",
                  children: (0, s.jsxs)("svg", {
                    width: "98",
                    height: "93",
                    viewBox: "0 0 98 93",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "max-md:w-[62px] max-md:h-[58px]",
                    children: [
                      (0, s.jsx)("path", {
                        d: "M82.6211 2.96582C64.428 24.4296 47.0003 47.6733 27.0531 67.6204C24.557 70.1166 32.6167 63.273 35.4407 61.155",
                        stroke: "#000",
                        strokeWidth: "5",
                        strokeLinecap: "round",
                      }),
                      (0, s.jsx)("path", {
                        d: "M95.2031 29.7012C77.8749 47.4044 59.9145 71.0872 37.4508 82.9102C35.4506 83.9629 32.2959 85.2295 32.2959 86.3176",
                        stroke: "#000",
                        strokeWidth: "5",
                        strokeLinecap: "round",
                      }),
                      (0, s.jsx)("path", {
                        d: "M14.4988 43.8516C11.8896 54.107 9.4726 64.4582 6.27998 74.5558C5.69954 76.3916 5.00839 77.5973 5.00839 79.4561C5.00839 82.2332 4.82596 85.0824 3.64376 87.6439C3.3742 88.2279 2.89941 88.8622 2.89941 89.5358C2.89941 90.6033 4.53667 89.9768 5.13245 89.9389C9.1555 89.6835 19.0559 88.5839 21.6941 88.2952C40.0867 86.2821 58.5274 83.2122 77.0238 82.3714",
                        stroke: "#000",
                        strokeWidth: "5",
                        strokeLinecap: "round",
                      }),
                    ],
                  }),
                }),
                (0, s.jsx)("h2", {
                  className:
                    "text-[56px] leading-tight md:text-[90px] text-center mb-[60px] text-shadow max-md:mb-4",
                  children: t("faqs"),
                }),
                (0, s.jsxs)("div", {
                  className:
                    "w-full relative md:mt-[10px] before:absolute before:top-0 before:left-0 before:size-full before:bg-white before:blur-xl before:scale-105",
                  children: [
                    e
                      ? (0, s.jsx)(c(), {
                          src: "/enlp/faq.png",
                          width: 240,
                          height: 350,
                          alt: "trump",
                          className:
                            "h-auto w-[120px] md:w-[239px] absolute top-[-190px] md:top-[-360px] right-[-20px] z-[3]",
                        })
                      : (0, s.jsx)(c(), {
                          src: "/index/faq-trump.webp",
                          width: 240,
                          height: 350,
                          alt: "trump",
                          className:
                            "h-auto w-[120px] md:w-[239px] absolute top-[-190px] md:top-[-350px] right-[-20px] z-[3]",
                        }),
                    x.map((e, t) =>
                      (0, s.jsxs)(
                        "div",
                        {
                          className:
                            "border-[2px]  border-black rounded-[8px] px-5 md:px-10 py-5 bg-white mb-5 relative z-[2]",
                          onClick: () => {
                            (e.show = !e.show), m([...x]);
                          },
                          children: [
                            (0, s.jsxs)("div", {
                              className: "flex justify-between",
                              children: [
                                (0, s.jsx)("span", {
                                  className: " text-[22px] md:text-[28px]",
                                  children: e.question,
                                }),
                                (0, s.jsx)("div", {
                                  className: "flex items-center cursor-pointer",
                                  children: e.show
                                    ? (0, s.jsx)("svg", {
                                        width: "33",
                                        height: "6",
                                        viewBox: "0 0 33 6",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "w-[20px] md:w-[33px]",
                                        children: (0, s.jsx)("path", {
                                          d: "M3.23828 2.99358C9.41308 2.90918 16.3732 2.76463 22.6095 2.84533C25.0451 2.87684 27.8717 2.01307 29.8984 3.3642C30.435 3.72189 28.6971 2.88059 28.1442 2.54883",
                                          stroke: "#E45D43",
                                          strokeWidth: "5",
                                          strokeLinecap: "round",
                                        }),
                                      })
                                    : (0, s.jsxs)("svg", {
                                        width: "33",
                                        height: "34",
                                        viewBox: "0 0 33 34",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "w-[20px] md:w-[33px]",
                                        children: [
                                          (0, s.jsx)("path", {
                                            d: "M3.23828 17.8222C9.41308 17.7378 16.3732 17.5932 22.6095 17.6739C25.0451 17.7055 27.8717 16.8417 29.8984 18.1928C30.435 18.5505 28.6971 17.7092 28.1442 17.3774",
                                            stroke: "#E45D43",
                                            strokeWidth: "5",
                                            strokeLinecap: "round",
                                          }),
                                          (0, s.jsx)("path", {
                                            d: "M16.5805 3.146C16.391 12.2732 16.4233 21.3517 16.5805 30.4733C16.6023 31.7332 16.5805 29.467 16.5805 29.3861",
                                            stroke: "#E45D43",
                                            strokeWidth: "5",
                                            strokeLinecap: "round",
                                          }),
                                        ],
                                      }),
                                }),
                              ],
                            }),
                            (0, s.jsx)("div", {
                              className: (0, i.Z)(
                                "grid transition-[grid-template-rows] duration-300 ease-linear ",
                                e.show ? "grid-rows-[1fr] " : "grid-rows-[0fr]"
                              ),
                              children: (0, s.jsx)("div", {
                                className:
                                  "text-[18px] md:text-[22px] opacity-50 overflow-hidden",
                                children: (0, s.jsx)("p", {
                                  className: "mt-5",
                                  children: e.answer,
                                }),
                              }),
                            }),
                          ],
                        },
                        t
                      )
                    ),
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
    52962: function (e, t, l) {
      l.d(t, {
        Z: function () {
          return d;
        },
      });
      var s = l(52322),
        a = l(48508),
        i = l(96577),
        o = l.n(i),
        n = l(6015);
      let r = [
        {
          logo: (0, s.jsx)(o(), {
            src: "/index/featureIn/the-crypto.webp",
            alt: "coinspeaker",
            width: 233,
            height: 45,
            loading: "eager",
            className: "",
          }),
          comment: "The Hottest SOL Launch This Year ",
        },
        {
          logo: (0, s.jsx)(o(), {
            src: "/index/featureIn/bitcoinist.webp",
            alt: "invezz",
            width: 222,
            height: 31,
            loading: "eager",
          }),
          comment: "The next 100x meme coin?",
        },
        {
          logo: (0, s.jsx)(o(), {
            src: "/index/featureIn/crypto-maniaks.webp",
            alt: "coin-journa",
            width: 223,
            height: 46,
            className: "",
            loading: "eager",
          }),
          comment: "a must-have meme coin",
        },
        {
          logo: (0, s.jsx)(o(), {
            src: "/index/featureIn/cryptopolitan.webp",
            alt: "invezz",
            width: 198,
            height: 44.75,
            loading: "eager",
          }),
          comment: "explosive gains possible as November approaches",
        },
        {
          logo: (0, s.jsx)(o(), {
            src: "/index/featureIn/coin-gape.webp",
            alt: "coin-journa",
            width: 198,
            height: 54.62,
            className: "",
            loading: "eager",
          }),
          comment: "leverages lucrative markets",
        },
        {
          logo: (0, s.jsx)(o(), {
            src: "/index/featureIn/coin-codex.webp",
            alt: "invezz",
            width: 200,
            height: 41,
            loading: "eager",
          }),
          comment: "moon potential written all over it",
        },
        {
          logo: (0, s.jsx)(o(), {
            src: "/index/featureIn/beincrypto.png",
            alt: "coin-journa",
            width: 200,
            height: 31,
            className: "",
            loading: "eager",
          }),
          comment: "Solciety is at the top of the charts",
        },
        {
          logo: (0, s.jsx)(o(), {
            src: "/index/featureIn/coin-gape.webp",
            alt: "coin-journa",
            width: 198,
            height: 54.62,
            className: "",
            loading: "eager",
          }),
          comment: "The PolitiFi buzz is sizzling...",
        },
      ];
      function c(e) {
        let { comment: t, logo: l } = e;
        return (0, s.jsxs)("div", {
          className:
            "h-[177px] flex justify-between items-center flex-col w-[545px] py-8 max-sm:w-full bg-[url('/index/featureIn/feature-item-bg.png')] bg-full",
          children: [
            (0, s.jsxs)("div", {
              className:
                "text-[28px] font-extrabold text-text max-sm:text-xl text-center",
              children: [
                "“",
                (0, s.jsx)("span", { className: "mx-[3px]", children: t }),
                "”",
              ],
            }),
            (0, s.jsx)("div", {
              className:
                "max-md:scale-75 lg:h-[40px] flex flex-col justify-center",
              children: l,
            }),
          ],
        });
      }
      function d() {
        return (0, s.jsx)("div", {
          id: "features",
          className:
            "bg-[url('/index/featureIn/feature-bg.png')] bg-full center w-full h-[272px] space-x-6 flex items-center relative z-[3] mt-[-30px]",
          children: (0, s.jsx)("div", {
            className:
              "flex flex-col items-center justify-center  overflow-x-hidden",
            children: (0, s.jsx)(a.E.div, {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 1.5, delay: 1.8 },
              className: "",
              children: (0, s.jsx)(n.x, {
                Item: c,
                data: r.concat(r),
                direction: "right",
                itemWidth: 600,
              }),
            }),
          }),
        });
      }
    },
    53426: function (e, t, l) {
      l.d(t, {
        Z: function () {
          return r;
        },
      });
      var s = l(52322),
        a = l(84012),
        i = l(32315),
        o = l(39097),
        n = l.n(o);
      function r() {
        let { t: e } = (0, a.$)();
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsxs)("div", {
              className: "bg-black flex-center h-[100px]  gap-7 lg:gap-10",
              children: [
                (0, s.jsx)(i.KR, {
                  className: "hover:opacity-60 xl:scale-100 lg:scale-75",
                }),
                (0, s.jsx)(i.Fh, {
                  className: " hover:opacity-60 xl:scale-100 lg:scale-75",
                }),
                (0, s.jsx)(i.Sm, {
                  className: "hover:opacity-60 xl:scale-100 lg:scale-75",
                }),
                (0, s.jsx)(i.O5, {
                  className: "hover:opacity-60 xl:scale-100 lg:scale-75",
                }),
              ],
            }),
            (0, s.jsx)("div", {
              className:
                'bg-[url("/index/faq-bg.jpg")] bg-wfull bg-bottom h-[116px] flex-center max-lg:bg-none',
              children: (0, s.jsxs)("div", {
                className:
                  "w-full lg:w-[1200px] flex items-center max-lg:flex-col-reverse justify-between font-montserrat text-sm",
                children: [
                  (0, s.jsxs)("div", {
                    className: "gap-[20px] flex",
                    children: [
                      (0, s.jsx)("p", { children: "\xa9 Solciety" }),
                      (0, s.jsx)(n(), {
                        href: "/terms",
                        target: "_blank",
                        children: e("footer.terms"),
                      }),
                    ],
                  }),
                  (0, s.jsx)(i.mp, { width: 110 }),
                  (0, s.jsxs)("div", {
                    className: "flex items-center max-lg:hidden",
                    children: [
                      (0, s.jsx)(i.Sm, {
                        className: "hover:opacity-60 mr-3",
                        fill: "black",
                      }),
                      (0, s.jsx)("a", {
                        className:
                          "hover:opacity-60 font-semibold leading-5 whitespace-nowrap",
                        href: "https://t.me/solciety_sol",
                        target: "_blank",
                        children: e("faq.support"),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
      }
    },
    99448: function (e, t, l) {
      l.d(t, {
        Z: function () {
          return c;
        },
      });
      var s = l(52322),
        a = l(96577),
        i = l.n(a),
        o = l(24420),
        n = l(84012),
        r = l(38082);
      function c() {
        let { t: e } = (0, n.$)(),
          t = (0, r.dD)(),
          l = [
            {
              img: "/index/roadmap/money.webp",
              imgWidth: 180,
              imgHeight: 152,
              title: e("roadmap.presale"),
              content: e("roadmap.first"),
            },
            {
              img: "/index/roadmap/grow.webp",
              imgWidth: 293,
              imgHeight: 293,
              title: e("roadmap.listing"),
              content: e("roadmap.second"),
            },
            {
              img: "/index/roadmap/rocket.webp",
              imgWidth: 241,
              imgHeight: 241,
              title: e("roadmap.moon"),
              content: e("roadmap.third"),
            },
          ];
        return (0, s.jsxs)("div", {
          id: "roadmap",
          className:
            "text-white text-center py-20 md:py-40 overflow-x-hidden  max-md:px-5 bg-[url('/index/roadmap/bg.jpg')] bg-top md:bg-left-top bg-no-repeat relative",
          style: { backgroundSize: t ? "300%" : "80% auto" },
          children: [
            (0, s.jsxs)(o.Z, {
              className:
                "md:max-w-[1200px] pt-16 md:pt-[80px] pb-[50px] flex-center flex-col mx-auto bg-[url('/index/roadmap/bg2-mobile.png')] md:bg-[url('/index/roadmap/bg2.png')] bg-full relative z-[2]",
              children: [
                (0, s.jsx)("h4", {
                  className: "text-[48px] max-sm:text-[32px]",
                  children: e("roadmap"),
                }),
                (0, s.jsx)("p", {
                  className:
                    "font-rockSalt md:text-[16px] leading-6 mt-4 md:mt-8 mb-10 md:mb-[80px] max-w-[763px] mx-auto max-md:px-5",
                  children: e("roadmap.desc"),
                }),
                (0, s.jsx)("div", {
                  className:
                    "grid grid-cols-1 md:grid-cols-3 gap-16 max-md:gap-4",
                  children: l.map((e, t) =>
                    (0, s.jsxs)(
                      "div",
                      {
                        className: "flex-center flex-col",
                        children: [
                          (0, s.jsx)("div", {
                            className:
                              "flex items-end justify-center h-[280px]",
                            children: (0, s.jsx)(i(), {
                              width: e.imgWidth,
                              height: e.imgHeight,
                              alt: e.title,
                              src: e.img,
                              className: "h-auto max-w-none max-h-none",
                            }),
                          }),
                          (0, s.jsx)("div", {
                            className:
                              "text-[32px] max-md:text-[29px] max-md:leading-8 max-md:mt-[-20px]",
                            children: e.title,
                          }),
                          (0, s.jsx)("div", {
                            className:
                              "text-[32px] text-[#FECF3B] font-montserrat max-md:text-[26px] max-md:leading-8",
                            children: e.content,
                          }),
                        ],
                      },
                      t
                    )
                  ),
                }),
                (0, s.jsx)(i(), {
                  src: "/index/roadmap/deco.svg",
                  width: 178,
                  height: 77,
                  alt: "roadmap",
                  className:
                    "absolute bottom-[-41px] right-[-45px] max-md:hidden",
                }),
              ],
            }),
            (0, s.jsx)(i(), {
              src: "/index/roadmap/line.svg",
              width: 1500,
              height: 33,
              alt: "roadmap",
              className:
                "w-full absolute bottom-[300px] left-0 max-md:hidden h-auto",
            }),
          ],
        });
      }
    },
    35445: function (e, t, l) {
      l.d(t, {
        Z: function () {
          return d;
        },
      });
      var s = l(52322),
        a = l(84012),
        i = l(96577),
        o = l.n(i),
        n = l(24420),
        r = l(38082);
      function c(e) {
        let { className: t, color: l = "black" } = e;
        return (0, s.jsx)("svg", {
          width: "21",
          height: "16",
          viewBox: "0 0 21 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          className: t,
          children: (0, s.jsx)("path", {
            d: "M2.58984 6.49399C3.01447 6.22781 8.71849 2.9642 8.58695 3.31034C7.49982 6.17121 4.59809 8.53023 3.8485 11.5286C2.92488 15.2231 15.8112 2.92647 13.9917 6.27188C12.972 8.14684 11.3496 9.63015 10.3639 11.5286C9.01497 14.1265 13.306 11.4364 13.9547 11.1584C18.4455 9.2338 18.4068 9.51007 16.5831 13.1574",
            stroke: l,
            strokeWidth: "5",
            strokeLinecap: "round",
          }),
        });
      }
      function d() {
        let { t: e, i18n: t } = (0, a.$)(),
          l = (0, r.dD)(),
          i = [
            {
              label: e("token.liquidity"),
              percent: "17",
              color: "#E45D43",
              className: "md:left-[-243px] md:top-[-29px]",
              line: (0, s.jsx)("svg", {
                width: "312",
                height: "88",
                viewBox: "0 0 312 88",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                className:
                  "hidden md:block md:absolute md:left-[90px] top-[-5px]",
                children: (0, s.jsx)("path", {
                  d: "M311.25 87.2578L225.25 1.25781H0.75",
                  stroke: "black",
                }),
              }),
            },
            {
              label: e("token.partner"),
              percent: "5",
              color: "#000000",
              className: "md:right-[-245px] md:top-[-29px]",
              line: (0, s.jsx)("svg", {
                width: "352",
                height: "78",
                viewBox: "0 0 352 78",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                className:
                  "hidden md:block md:absolute md:right-[100px] top-[-5px]",
                children: (0, s.jsx)("path", {
                  d: "M0.75 77.2578L76.75 1.25781L351.75 1.25781",
                  stroke: "black",
                }),
              }),
            },
            {
              label: e("token.rewards"),
              percent: "10",
              color: "#BABABA",
              className: "md:right-[-245px] md:top-[48px]",
              line: (0, s.jsx)("svg", {
                width: "255",
                height: "57",
                viewBox: "0 0 255 57",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                className:
                  "hidden md:block md:absolute md:right-[110px] top-[-5px]",
                children: (0, s.jsx)("path", {
                  d: "M1.22656 56.2578L56.75 0.734375H254.75",
                  stroke: "black",
                }),
              }),
            },
            {
              label: e("token.treasury"),
              percent: "15",
              color: "#FECF3B",
              className: "md:left-[-243px] md:top-[90px]",
              line: (0, s.jsx)("svg", {
                width: "214",
                height: "82",
                viewBox: "0 0 214 82",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                className:
                  "hidden md:block md:absolute md:left-[90px] top-[-5px]",
                children: (0, s.jsx)("path", {
                  d: "M0.75 1.25781H133.75L213.25 80.7578",
                  stroke: "black",
                }),
              }),
            },
            {
              label: e("token.dev"),
              percent: "3",
              color: "#EBB4D1",
              className: "md:right-[-245px] md:top-[190px]",
              line: (0, s.jsx)("svg", {
                width: "208",
                height: "45",
                viewBox: "0 0 208 45",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                className:
                  "hidden md:block md:absolute md:right-[100px] bottom-[-5px]",
                children: (0, s.jsx)("path", {
                  d: "M0.75 1.25781L43.75 44.2578H207.75",
                  stroke: "black",
                }),
              }),
            },
            {
              label: e("token.presale"),
              percent: "30",
              color: "#00AA6D",
              className: "md:left-[-243px] md:top-[334px]",
              line: (0, s.jsx)("svg", {
                width: "215",
                height: "64",
                viewBox: "0 0 215 64",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                className:
                  "hidden md:block md:absolute md:left-[90px] bottom-[-5px]",
                children: (0, s.jsx)("path", {
                  d: "M213.75 1.25781L152.25 62.7578H0.75",
                  stroke: "black",
                }),
              }),
            },
            {
              label: e("token.marketing"),
              percent: "20",
              color: "#5B94D7",
              className: "md:right-[-245px] md:top-[377px]",
              line: (0, s.jsx)("svg", {
                width: "221",
                height: "81",
                viewBox: "0 0 221 81",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                className:
                  "hidden md:block md:absolute md:right-[120px] bottom-[-5px]",
                children: (0, s.jsx)("path", {
                  d: "M220.75 80.2344H80.25L0.75 0.734375",
                  stroke: "black",
                }),
              }),
            },
          ];
        return (0, s.jsxs)("div", {
          id: "tokenomic",
          className:
            "py-10 md:py-[150px] bg-[url('/index/tokenomic-bg.jpg')]  bg-top  bg-no-repeat overflow-x-hidden",
          style: { backgroundSize: l ? "260%" : "80%" },
          children: [
            (0, s.jsx)(n.Z, {
              className: "flex-center max-md:px-5",
              children: (0, s.jsx)("h2", {
                className:
                  "w-full h-[53px] md:w-[464px] md:h-[72px] uppercase text-[30px] md:text-[40px] text-stroked-white font-bold flex-center pb-2 bg-[url('/index/tokenomic-title-bg.png')] bg-full",
                children: e("tokenomic"),
              }),
            }),
            (0, s.jsxs)(n.Z, {
              className: "flex flex-col items-center ",
              children: [
                (0, s.jsx)(o(), {
                  src: "/index/tokenomic-pie-mobile.svg",
                  width: 542,
                  height: 530,
                  alt: "pie",
                  className: "w-full h-auto md:hidden mb-8",
                }),
                (0, s.jsxs)("div", {
                  className:
                    "w-full md:w-[542px] md:h-[530px] relative mt-8 md:mt-[140px] px-0 md:px-0  max-md:hidden",
                  children: [
                    (0, s.jsx)(o(), {
                      src: "/index/tokenomic-pie.webp",
                      width: 542,
                      height: 530,
                      alt: "pie",
                      className: "w-full md:size-full ",
                    }),
                    (0, s.jsx)(o(), {
                      src: "/index/tokenomic-deco.svg",
                      width: 386,
                      height: 50,
                      alt: "pie",
                      className:
                        "absolute w-[386px] h-auto bottom-[52px] right-[40px]",
                    }),
                    (0, s.jsx)("div", {
                      className: "md:absolute md:size-full left-0 top-0",
                      children: i.map((e, t) =>
                        (0, s.jsxs)(
                          "div",
                          {
                            className: "md:absolute ".concat(e.className),
                            children: [
                              (0, s.jsxs)("div", {
                                className:
                                  "flex items-center justify-between md:justify-start",
                                children: [
                                  (0, s.jsx)(c, { color: e.color }),
                                  (0, s.jsx)("span", {
                                    className: "text-[28px] ml-3",
                                    children: e.label,
                                  }),
                                  (0, s.jsxs)("span", {
                                    className:
                                      "text-[24px] font-montserrat md:ml-8 font-[400]",
                                    children: [e.percent, "%"],
                                  }),
                                ],
                              }),
                              e.line,
                            ],
                          },
                          t
                        )
                      ),
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className:
                    "flex items-center justify-center text-[40px] max-md:flex-col font-bold",
                  children: [
                    (0, s.jsxs)("p", { children: [e("token.total"), ": "] }),
                    (0, s.jsx)("p", {
                      className: "text-secondary md:ml-4",
                      children: "10,000,000,000",
                    }),
                  ],
                }),
                (0, s.jsx)("div", {
                  className: "md:hidden w-full px-9 mt-5 leading-relaxed",
                  children: i.map((e, t) =>
                    (0, s.jsx)(
                      "div",
                      {
                        className: "md:absolute ".concat(e.className),
                        children: (0, s.jsxs)("div", {
                          className: "flex items-center",
                          children: [
                            (0, s.jsx)(c, { color: e.color }),
                            (0, s.jsx)("span", {
                              className: "text-[28px] ml-3 flex-1",
                              children: e.label,
                            }),
                            (0, s.jsxs)("span", {
                              className:
                                "text-[24px] font-montserrat md:ml-8 font-[400] opacity-60",
                              children: [e.percent, "%"],
                            }),
                          ],
                        }),
                      },
                      t
                    )
                  ),
                }),
              ],
            }),
          ],
        });
      }
    },
    33321: function (e, t, l) {
      l.d(t, {
        Z: function () {
          return x;
        },
      });
      var s = l(52322),
        a = l(84012),
        i = l(48508),
        o = l(96577),
        n = l.n(o),
        r = l(2784),
        c = l(32315),
        d = l(38082);
      function x() {
        let e = (0, d.Uj)();
        console.log("isLpPage", e);
        let { t, i18n: l } = (0, a.$)();
        return (
          ["ro"].includes(l.language),
          (0, r.useEffect)(() => {
            window.onbeforeunload = function () {
              window.scrollTo(0, 0);
            };
          }, []),
          (0, s.jsxs)("div", {
            id: "home",
            className: "overflow-hidden relative z-[5]",
            children: [
              (0, s.jsx)("div", { className: "w-full h-[64px]" }),
              (0, s.jsx)("div", {
                children: (0, s.jsxs)("div", {
                  className:
                    "flex items-center flex-col  py-8 text-white  bg-[url('/index/bg.webp')] bg-cover bg-center relative overflow-hidden lg:h-[840px]",
                  children: [
                    (0, s.jsx)(i.E.div, {
                      whileInView: { opacity: 1, y: 0 },
                      initial: { opacity: 0, y: 100 },
                      transition: { delay: 0.8, duration: 0.6 },
                      viewport: { once: !0 },
                      children: (0, s.jsx)(c.mp, {
                        className:
                          "w-[345px] h-[125px] lg:w-[556px] lg:h-[197px]",
                      }),
                    }),
                    (0, s.jsxs)(i.E.div, {
                      whileInView: { opacity: 1, y: 0 },
                      initial: { opacity: 0, y: 100 },
                      transition: { delay: 0.8, duration: 0.6 },
                      viewport: { once: !0 },
                      className:
                        "relative z-[3] -mt-1 lg:-mt-5 lg:mb-[18px] flex flex-col items-center gap-10 max-lg:gap-4",
                      children: [
                        (0, s.jsx)("div", {
                          className:
                            "text-[#F5C145] font-Bangers text-[58px] uppercase text-shadow-stroked max-lg:text-[35px] leading-none",
                          children: t("v1101.home.title"),
                        }),
                        (0, s.jsxs)("div", {
                          className:
                            "flex flex-col items-center gap-6 max-lg:gap-3",
                          children: [
                            (0, s.jsx)("p", {
                              className: "text-2xl uppercase max-lg:text-xl",
                              children: t("v1101.home.buyHere"),
                            }),
                            (0, s.jsx)("a", {
                              href: "https://v2.raydium.io/swap/?inputCurrency=sol&outputCurrency=7P9ZXjySBxRWjrrkGa93xyzxDgtjaFofxs5MtBz2R4P4&outputSymbol=SLCTY&fixed=in",
                              target: "_blank",
                              children: (0, s.jsx)(m, {
                                className: "max-lg:h-[42px]",
                              }),
                            }),
                            (0, s.jsx)("a", {
                              className:
                                'flex items-center justify-center pb-[8px] h-[53px] bg-[url("/index/buy-btn-sm.webp")] text-black font-bold text-xl px-5 bg-full bg-center uppercase hover:scale-105 active:translate-y-1\n                max-lg:w-[90vw] max-w-[365px]',
                              href: "https://v2.raydium.io/swap/?inputCurrency=sol&outputCurrency=7P9ZXjySBxRWjrrkGa93xyzxDgtjaFofxs5MtBz2R4P4&outputSymbol=SLCTY&fixed=in",
                              target: "_blank",
                              children: t("v1101.home.buyNow"),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)(i.E.div, {
                      whileInView: { opacity: 1, y: 0 },
                      initial: { opacity: 0, y: 100 },
                      transition: { delay: 0.8, duration: 0.6 },
                      viewport: { once: !0 },
                      className:
                        "flex-center lg:absolute lg:size-full max-lg:mb-[-40px] max-lg:mt-3",
                      children: [
                        (0, s.jsx)(n(), {
                          width: 1452,
                          height: 560,
                          quality: 100,
                          alt: "",
                          src: e ? "/enlp/home-roles.png" : "/index/roles.webp",
                          className: "w-full h-auto lg:hidden max-w-none",
                        }),
                        e
                          ? (0, s.jsx)(n(), {
                              width: 500,
                              height: 700,
                              src: "/enlp/comic-azalea.png",
                              className:
                                "max-lg:hidden absolute w-[260px] h-auto top-0 left-[-70px] z-[2] rotate-[0deg]",
                              alt: "",
                            })
                          : (0, s.jsx)(n(), {
                              width: 681,
                              height: 1039,
                              src: "/index/comic-trump.webp",
                              className:
                                "max-lg:hidden w-[340px] max-lg:w-full h-auto absolute top-[-20px] left-[0] z-[2]",
                              alt: "",
                            }),
                        (0, s.jsx)(n(), {
                          width: 363,
                          height: 586,
                          src: "/index/comic3.webp",
                          quality: 100,
                          className:
                            "max-lg:hidden w-[182px] h-auto absolute left-0 top-[476px] z-[3] ",
                          alt: "",
                        }),
                        (0, s.jsx)(n(), {
                          width: 503,
                          height: 1018,
                          src: "/index/comic4.webp?v=2",
                          quality: 100,
                          className:
                            "max-lg:hidden w-[220px] h-auto absolute left-[135px] top-[520px] z-[2] ",
                          alt: "",
                        }),
                        (0, s.jsx)(n(), {
                          width: 631,
                          height: 1039,
                          src: "/index/commic-harris.webp",
                          className:
                            "max-lg:hidden w-[315px] h-auto absolute top-[0px] right-0 z-[0]",
                          alt: "",
                        }),
                        (0, s.jsx)(n(), {
                          width: 420,
                          height: 491,
                          src: "/index/comic-frog.webp",
                          className:
                            "max-lg:hidden  relative lg:w-[210px] lg:h-auto lg:absolute lg:top-[555px] lg:right-[210px] z-[1]",
                          alt: "",
                        }),
                        (0, s.jsx)(n(), {
                          width: 407,
                          height: 612,
                          src: "/index/comic-dog.webp",
                          className:
                            "w-[82px] max-lg:-mr-4 max-lg:hidden relative lg:w-[203px] lg:h-auto lg:absolute lg:top-[495px] lg:right-[88px] z-[1]",
                          alt: "",
                        }),
                        (0, s.jsx)(n(), {
                          width: 589,
                          height: 818,
                          src: "/index/comic1.webp",
                          className:
                            "hidden lg:block max-lg:hidden lg:w-[150px] lg:h-auto lg:absolute lg:top-[478px] lg:right-[0] z-[3] ",
                          alt: "",
                        }),
                      ],
                    }),
                    (0, s.jsx)(i.E.div, {
                      whileInView: { opacity: 1, y: 0 },
                      initial: { opacity: 0, y: 100 },
                      transition: { delay: 0.8, duration: 0.6 },
                      viewport: { once: !0 },
                      className:
                        " w-full max-md:px-3 flex flex-col items-center mt-10",
                      children: (0, s.jsx)(n(), {
                        src: "/index/flag.webp",
                        alt: "america",
                        width: 101,
                        height: 109,
                        className:
                          "w-[100px] h-auto mb-[-10px] max-lg:w-[68px]",
                      }),
                    }),
                  ],
                }),
              }),
            ],
          })
        );
      }
      let m = (e) => {
        let { className: t } = e;
        return (0, s.jsxs)("svg", {
          width: "210",
          height: "47",
          viewBox: "0 0 210 47",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          className: t,
          children: [
            (0, s.jsxs)("g", {
              "clip-path": "url(#clip0_9003_149)",
              children: [
                (0, s.jsx)("path", {
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d: "M67.3481 29.2919L64.6683 24.6929H60.751V29.2919H58.4434V15.4768H65.3941C66.2408 15.4676 67.0782 15.6976 67.804 16.1299C68.5298 16.5622 69.1252 17.1784 69.5254 17.9235C69.9255 18.6685 70.1023 19.5055 70.0558 20.3425C70.0092 21.1795 69.7301 21.9981 69.2463 22.6879C68.7438 23.4237 68.0366 23.9939 67.2085 24.3343L70.0558 29.2919H67.3481ZM65.3848 17.8223H60.751V22.412H65.3941C65.7011 22.412 65.9989 22.3475 66.278 22.228C66.5572 22.1084 66.8084 21.9336 67.013 21.7129C67.3294 21.391 67.5528 20.9863 67.6365 20.5356C67.7202 20.0941 67.6738 19.6343 67.5062 19.2112C67.3294 18.7973 67.041 18.4385 66.6595 18.181C66.278 17.9235 65.8407 17.7855 65.3848 17.7855V17.8223ZM90.0983 15.4768L83.129 29.2919H85.7157L90.089 20.6367L94.4529 29.2919H97.0397L90.0983 15.4768ZM119.427 15.4768H116.478L112.513 20.5724L108.568 15.4768H105.609L111.416 22.8443V29.2919H113.723V22.7338L119.427 15.4768ZM131.253 15.4768H135.878C137.72 15.486 139.479 16.2219 140.772 17.5188C142.075 18.8065 142.81 20.5632 142.82 22.3844C142.81 24.2147 142.075 25.9622 140.772 27.2591C139.47 28.556 137.711 29.2827 135.869 29.2919H131.244V15.4768H131.253ZM135.878 26.9464C137.106 26.9464 138.279 26.459 139.144 25.5944C140.01 24.7298 140.503 23.5617 140.503 22.3475C140.484 21.1335 140 19.9653 139.135 19.1099C138.269 18.2545 137.097 17.7579 135.878 17.7487H133.542V26.9464H135.878ZM158.256 15.4768H155.949V29.2919H158.256V15.4768ZM182.951 23.5249C182.96 24.2883 182.821 25.0425 182.523 25.7415C182.234 26.4406 181.798 27.0752 181.239 27.5995C180.43 28.4089 179.396 28.9515 178.27 29.1722C177.145 29.393 175.982 29.2827 174.921 28.8412C173.86 28.4089 172.958 27.6638 172.325 26.7165C171.692 25.7691 171.357 24.6562 171.357 23.5157V15.4768H173.665V23.5157C173.665 24.4354 174.028 25.3092 174.688 25.953C175.34 26.5969 176.224 26.9648 177.145 26.9648C178.066 26.9648 178.95 26.5969 179.601 25.953C180.252 25.3092 180.616 24.4262 180.616 23.5157V15.4768H182.942V23.5249H182.951ZM198.369 29.2919V21.0323L203.021 25.6404L207.655 21.0323V29.2919H210V15.4768L203.021 22.3844L196.071 15.4768V29.2919H198.369Z",
                  fill: "white",
                }),
                (0, s.jsx)("path", {
                  d: "M38.4862 17.4828V33.7289L20.2993 44.1619L2.105 33.7289V12.8629L20.3066 2.41545L34.2835 10.4403L36.3959 9.23252L20.3066 0L0 11.648V34.9367L20.3066 46.5845L40.6132 34.9367V16.2751L38.4862 17.4828Z",
                  fill: "url(#paint0_linear_9003_149)",
                }),
                (0, s.jsx)("path", {
                  d: "M15.2137 33.7433H12.174V23.6014H22.3163C23.273 23.5942 24.1931 23.2086 24.8702 22.5246C25.5473 21.848 25.9227 20.9313 25.93 19.9783C25.9374 19.5054 25.8417 19.0398 25.6577 18.6031C25.4737 18.1666 25.2014 17.7738 24.8628 17.4464C24.5317 17.1117 24.1341 16.8425 23.7 16.6607C23.2657 16.4787 22.7946 16.3842 22.3163 16.3915H12.174V13.3066H22.3236C24.0974 13.314 25.8049 14.0269 27.0561 15.271C28.3147 16.5224 29.0213 18.2103 29.0361 19.9783C29.0434 21.3315 28.6312 22.6484 27.851 23.7542C27.1297 24.8091 26.1141 25.6386 24.9291 26.1332C23.7515 26.5043 22.5296 26.6862 21.3005 26.6789H15.2137V33.7433Z",
                  fill: "url(#paint1_linear_9003_149)",
                }),
                (0, s.jsx)("path", {
                  d: "M28.9619 33.4888H25.4144L22.6764 28.7452C23.7584 28.6798 24.8256 28.4614 25.8487 28.0977L28.9619 33.4888Z",
                  fill: "url(#paint2_linear_9003_149)",
                }),
                (0, s.jsx)("path", {
                  d: "M36.3654 14.1068L38.463 15.2636L40.5606 14.1068V11.655L38.463 10.4473L36.3654 11.655V14.1068Z",
                  fill: "url(#paint3_linear_9003_149)",
                }),
              ],
            }),
            (0, s.jsxs)("defs", {
              children: [
                (0, s.jsxs)("linearGradient", {
                  id: "paint0_linear_9003_149",
                  x1: "41.8445",
                  y1: "14.8262",
                  x2: "-1.1362",
                  y2: "32.1216",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, s.jsx)("stop", { "stop-color": "#C200FB" }),
                    (0, s.jsx)("stop", {
                      offset: "0.4897",
                      "stop-color": "#3772FF",
                    }),
                    (0, s.jsx)("stop", {
                      offset: "0.4898",
                      "stop-color": "#3773FE",
                    }),
                    (0, s.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#5AC4BE",
                    }),
                  ],
                }),
                (0, s.jsxs)("linearGradient", {
                  id: "paint1_linear_9003_149",
                  x1: "41.0219",
                  y1: "12.7814",
                  x2: "-1.95864",
                  y2: "30.077",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, s.jsx)("stop", { "stop-color": "#C200FB" }),
                    (0, s.jsx)("stop", {
                      offset: "0.4897",
                      "stop-color": "#3772FF",
                    }),
                    (0, s.jsx)("stop", {
                      offset: "0.4898",
                      "stop-color": "#3773FE",
                    }),
                    (0, s.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#5AC4BE",
                    }),
                  ],
                }),
                (0, s.jsxs)("linearGradient", {
                  id: "paint2_linear_9003_149",
                  x1: "45.3151",
                  y1: "23.4518",
                  x2: "2.33453",
                  y2: "40.7473",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, s.jsx)("stop", { "stop-color": "#C200FB" }),
                    (0, s.jsx)("stop", {
                      offset: "0.4897",
                      "stop-color": "#3772FF",
                    }),
                    (0, s.jsx)("stop", {
                      offset: "0.4898",
                      "stop-color": "#3773FE",
                    }),
                    (0, s.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#5AC4BE",
                    }),
                  ],
                }),
                (0, s.jsxs)("linearGradient", {
                  id: "paint3_linear_9003_149",
                  x1: "40.6958",
                  y1: "11.9827",
                  x2: "-2.28464",
                  y2: "29.2781",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, s.jsx)("stop", { "stop-color": "#C200FB" }),
                    (0, s.jsx)("stop", {
                      offset: "0.4897",
                      "stop-color": "#3772FF",
                    }),
                    (0, s.jsx)("stop", {
                      offset: "0.4898",
                      "stop-color": "#3773FE",
                    }),
                    (0, s.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#5AC4BE",
                    }),
                  ],
                }),
                (0, s.jsx)("clipPath", {
                  id: "clip0_9003_149",
                  children: (0, s.jsx)("rect", {
                    width: "210",
                    height: "47",
                    fill: "white",
                  }),
                }),
              ],
            }),
          ],
        });
      };
    },
    2886: function (e, t, l) {
      l.d(t, {
        Z: function () {
          return m;
        },
      });
      var s = l(52322),
        a = l(2784),
        i = l(57035);
      let o = { some: 0, all: 1 };
      var n = l(96577),
        r = l.n(n),
        c = l(24420),
        d = l(84012);
      function x(e) {
        let { shouldRender: t } = e;
        return (0, s.jsxs)("div", {
          className:
            "w-full max-w-[840px] h-[472px] max-md:h-[230px] mx-auto  relative",
          children: [
            (0, s.jsx)("div", {
              className:
                "relative size-full z-[2] bg-white border border-black",
              children:
                t &&
                (0, s.jsx)("iframe", {
                  className: "absolute top-0 left-0 size-full",
                  src: "https://www.youtube.com/embed/KqXam9ROQeI",
                  title: "YouTube video player",
                  allow:
                    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                  allowFullScreen: !0,
                }),
            }),
            (0, s.jsx)("div", {
              className:
                "absolute size-full z-[1] bg-black -bottom-3 -left-3 max-md:-bottom-2 max-md:-left-2",
            }),
          ],
        });
      }
      function m() {
        let { t: e } = (0, d.$)(),
          t = (0, a.useRef)(null),
          l = (function (
            e,
            { root: t, margin: l, amount: s, once: n = !1 } = {}
          ) {
            let [r, c] = (0, a.useState)(!1);
            return (
              (0, a.useEffect)(() => {
                if (!e.current || (n && r)) return;
                let a = {
                  root: (t && t.current) || void 0,
                  margin: l,
                  amount: s,
                };
                return (function (
                  e,
                  t,
                  { root: l, margin: s, amount: a = "some" } = {}
                ) {
                  let n = (function (e, t, l) {
                      var s;
                      if ("string" == typeof e) {
                        let a = document;
                        t &&
                          ((0, i.k)(
                            !!t.current,
                            "Scope provided, but no element detected."
                          ),
                          (a = t.current)),
                          l
                            ? ((null !== (s = l[e]) && void 0 !== s) ||
                                (l[e] = a.querySelectorAll(e)),
                              (e = l[e]))
                            : (e = a.querySelectorAll(e));
                      } else e instanceof Element && (e = [e]);
                      return Array.from(e || []);
                    })(e),
                    r = new WeakMap(),
                    c = new IntersectionObserver(
                      (e) => {
                        e.forEach((e) => {
                          let l = r.get(e.target);
                          if (!!l !== e.isIntersecting) {
                            if (e.isIntersecting) {
                              let l = t(e);
                              "function" == typeof l
                                ? r.set(e.target, l)
                                : c.unobserve(e.target);
                            } else l && (l(e), r.delete(e.target));
                          }
                        });
                      },
                      {
                        root: l,
                        rootMargin: s,
                        threshold: "number" == typeof a ? a : o[a],
                      }
                    );
                  return n.forEach((e) => c.observe(e)), () => c.disconnect();
                })(e.current, () => (c(!0), n ? void 0 : () => c(!1)), a);
              }, [t, e, l, n, s]),
              r
            );
          })(t),
          [n, m] = (0, a.useState)(!1);
        return (
          (0, a.useEffect)(() => {
            l && !n && m(!0);
          }, [l, n]),
          (0, s.jsxs)(c.Z, {
            id: "about",
            className:
              "text-white overflow-x-hidden bg-[url('/index/video-bg.jpg')] bg-bottom bg-cover relative z-[1] py-20 md:py-32 md:pb-40 max-md:px-5 text-center mt-[-30px]",
            children: [
              (0, s.jsx)("h4", {
                className: "text-[44px]  relative z-[2]",
                children: e("navbar.about"),
              }),
              (0, s.jsx)("p", {
                className:
                  "text-[22px] leading-7 mt-8 mb-16  max-w-[763px] mx-auto  relative z-[2]",
                ref: t,
                children: e("video.desc"),
              }),
              (0, s.jsx)(r(), {
                width: 58,
                height: 77,
                src: "/index/video-deco.svg",
                className:
                  "hidden lg:block  z-[0] h-auto absolute right-[50px] top-[50px] ",
                alt: "",
              }),
              (0, s.jsx)("div", {
                className: "flex justify-center lg:hidden -mx-5 mb-10",
                children: (0, s.jsx)(r(), {
                  width: 1452,
                  height: 560,
                  quality: 100,
                  alt: "",
                  src: "/index/about-comic-mobile.png",
                  className: "w-[105%] h-auto  max-w-none",
                }),
              }),
              (0, s.jsxs)("div", {
                className:
                  "flex justify-center pb-2 mb-4 lg:mb-0 items-end lg:absolute lg:size-full lg:top-0 lg:left-0 relative max-lg:hidden",
                children: [
                  (0, s.jsx)(r(), {
                    width: 270,
                    height: 400,
                    src: "/index/video-comic-frog.webp",
                    className:
                      "min-w-[136px] max-lg:mr-[-63px] relative lg:w-[250px] lg:h-auto lg:absolute lg:top-[270px] lg:right-[-70px] z-[2]",
                    alt: "",
                  }),
                  (0, s.jsx)(r(), {
                    width: 240,
                    height: 400,
                    src: "/index/video-comic-dog.webp",
                    className:
                      "min-w-[120px] max-lg:mr-[-20px] relative lg:w-[198px] lg:h-auto lg:absolute lg:top-[480px] lg:right-[-30px] z-[3] lg:z-[1]  lg:-rotate-[10deg]",
                    alt: "",
                  }),
                  (0, s.jsx)(r(), {
                    width: 240,
                    height: 400,
                    src: "/index/video-comic1.webp",
                    className:
                      "min-w-[118px] max-lg:mr-[-30px]  relative lg:w-[220px] lg:h-auto lg:absolute lg:top-[276px] lg:left-[-55px] z-[3] max-lg:z-[3] lg:-rotate-[4]",
                    alt: "",
                  }),
                  (0, s.jsx)(r(), {
                    width: 310,
                    height: 400,
                    src: "/index/video-comic2.webp",
                    className:
                      "min-w-[158px]  relative lg:w-[244px] lg:h-auto lg:absolute lg:top-[554px] lg:left-[-26px] z-[1] lg:-rotate-[3]",
                    alt: "",
                  }),
                  (0, s.jsx)(r(), {
                    width: 100,
                    height: 100,
                    src: "/index/video-comic-bg.svg",
                    className:
                      "w-[485px] h-auto absolute left-0 bottom-0  z-[0] lg:hidden",
                    alt: "",
                  }),
                  (0, s.jsx)(r(), {
                    width: 100,
                    height: 100,
                    src: "/index/video-comic-bg2.svg",
                    className:
                      "hidden lg:block w-[435px]  z-[0] h-auto absolute left-0 top-[540px] ",
                    alt: "",
                  }),
                ],
              }),
              (0, s.jsx)("div", {
                className: " relative z-[2]",
                children: (0, s.jsx)(x, { shouldRender: n }),
              }),
            ],
          })
        );
      }
    },
    6015: function (e, t, l) {
      l.d(t, {
        x: function () {
          return r;
        },
      });
      var s = l(52322),
        a = l(38082),
        i = l(2784),
        o = l(90512);
      let n = (e, t) => {
        let l = [],
          s = 3;
        for (; 0 != s && s--; ) l.push(...e);
        return l;
      };
      function r(e) {
        let {
            Item: t,
            speed: l = 5,
            data: r,
            hoverStop: c = !1,
            direction: d = "left",
            className: x,
            itemWidth: m = 288,
            itemHeight: p = 288,
            height: h = 620,
          } = e,
          g = (0, a.dD)(),
          u = (0, a.Lm)(),
          f = "top" === d || "bottom" === d;
        m = g ? u : m;
        let w = f ? h / p : u / m,
          b = n(r, w),
          j = b.length;
        return (
          (0, i.useEffect)(() => {
            let e = document.createElement("style"),
              t = "0",
              l = f
                ? "-".concat(p * r.length - 5, "px")
                : "-".concat(m * r.length + 5, "px");
            return (
              ("right" === d || "bottom" === d) && ((t = l), (l = "0")),
              f
                ? (e.innerText =
                    "\n        @keyframes templates-partner-moving-"
                      .concat(
                        d,
                        " {\n          0% {\n            transform: translateY("
                      )
                      .concat(
                        t,
                        ");\n          }\n          100% {\n            transform: translateY("
                      )
                      .concat(l, ");\n          }\n        }\n      "))
                : (e.innerText =
                    "\n        @keyframes templates-partner-moving-"
                      .concat(
                        d,
                        " {\n          0% {\n            transform: translateX("
                      )
                      .concat(
                        t,
                        ");\n          }\n          100% {\n            transform: translateX("
                      )
                      .concat(l, ");\n          }\n        }\n      ")),
              c &&
                (e.innerText +=
                  ".list:hover {\n      /*鼠标经过后，动画暂停*/\n      animation-play-state: paused !important;\n    }"),
              document.head.appendChild(e),
              () => document.head.removeChild(e)
            );
          }, [g]),
          (0, s.jsxs)("div", {
            className: (0, o.Z)(
              "overflow-hidden",
              f && "h-[".concat(h, "px]"),
              x
            ),
            children: [
              g
                ? (0, s.jsx)("span", { className: "hidden", children: "1" })
                : (0, s.jsx)("span", { className: "hidden", children: "2" }),
              (0, s.jsx)("div", {
                className: (0, o.Z)(
                  "flex gap-[48px] max-md:gap-[22px] items-center",
                  f ? "flex-col" : "flex-row"
                ),
                style: {
                  animation: "templates-partner-moving-"
                    .concat(d, " ")
                    .concat((j / w / 2) * l, "s infinite linear"),
                },
                children: b.map((e, l) =>
                  (0, s.jsx)(
                    "div",
                    {
                      style:
                        "left" === d || "right" === d
                          ? { width: "".concat(m, "px") }
                          : { height: "auto" },
                      className: "tracking-widest w-full",
                      children: (0, s.jsx)(t, { ...e }),
                    },
                    l
                  )
                ),
              }),
            ],
          })
        );
      }
    },
  },
]);
