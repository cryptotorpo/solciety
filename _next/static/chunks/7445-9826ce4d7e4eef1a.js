"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7445],
  {
    27445: function (e, t, l) {
      l.r(t),
        l.d(t, {
          MemeMakerContent: function () {
            return j;
          },
          __N_SSP: function () {
            return f;
          },
          default: function () {
            return v;
          },
        });
      var a = l(52322),
        s = l(2784),
        r = l(64099),
        x = l(84012),
        c = l(96577),
        n = l.n(c),
        i = l(22323),
        m = l(97729),
        o = l.n(m);
      function p(e) {
        let { children: t, className: l, height: r = 96 } = e,
          x = (0, s.useRef)(null),
          c = () => {
            x.current && x.current.scrollBy({ left: -400, behavior: "smooth" });
          },
          i = () => {
            x.current && x.current.scrollBy({ left: 400, behavior: "smooth" });
          };
        return (0, a.jsxs)("div", {
          className: "flex items-center mt-4 ".concat(l),
          children: [
            (0, a.jsx)(n(), {
              src: "/maker/prev.svg",
              alt: "prev",
              width: 44,
              height: 96,
              className: "mr-2 cursor-pointer hover:opacity-80 max-lg:hidden",
              onClick: () => {
                c();
              },
            }),
            (0, a.jsx)("div", {
              ref: x,
              className: "flex-1  h-[".concat(
                r,
                "px] overflow-x-auto scroll-smooth scrollbar-hide"
              ),
              children: t,
            }),
            (0, a.jsx)(n(), {
              src: "/maker/next.svg",
              alt: "next",
              width: 44,
              height: 96,
              className: "ml-2 cursor-pointer hover:opacity-80 max-lg:hidden",
              onClick: () => {
                i();
              },
            }),
          ],
        });
      }
      var h = l(60422),
        g = l(90512),
        d = l(38082);
      let u = (e) => {
        let { className: t } = e;
        return (0, a.jsx)("svg", {
          width: "30",
          height: "24",
          viewBox: "0 0 30 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          className: t,
          children: (0, a.jsx)("path", {
            d: "M4.58108 12.5011C6.05416 15.1227 7.43321 17.9185 9.17734 20.3828C9.72516 21.1568 10.2083 19.8492 10.6275 19.3367C14.9267 14.0811 19.6322 9.46682 24.7675 5.06577",
            stroke: "#508C44",
            "stroke-width": "6.62835",
            "stroke-linecap": "square",
          }),
        });
      };
      var f = !0;
      function v() {
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(o(), {
              children: (0, a.jsx)("title", {
                children: "Meme Maker - Solciety",
              }),
            }),
            (0, a.jsx)(r.k8, { children: (0, a.jsx)(j, {}) }),
          ],
        });
      }
      function j() {
        let { t: e, i18n: t } = (0, x.$)(),
          l = ["fr", "de"].includes(t.language),
          c = (0, s.useRef)("Meme Lives Matter!"),
          [m, o] = (0, s.useState)(c.current),
          [f, v] = (0, s.useState)(""),
          j = (0, s.useRef)(null),
          { referralState: b } = (0, r.p$)(),
          [w, k] = (0, s.useState)(""),
          N = (0, d.dD)();
        (0, s.useEffect)(() => {
          b
            ? k(
                ""
                  .concat(window.location.origin, "/?r=")
                  .concat(null == b ? void 0 : b.referralKey)
              )
            : k(window.location.origin);
        }, [b]);
        let y =
            "h-[62px] outline-none w-full transition-all duration-200 ease-in-out flex justify-center items-center cursor-pointer bg-full font-bold  text-2xl uppercase hover:opacity-70 active:translate-y-[2px] max-lg:text-lg max-lg:h-[44px]",
          [C, M] = (0, s.useState)(0),
          S = [
            "/maker/v2/1.svg",
            "/maker/v2/2.svg",
            "/maker/v2/3.svg",
            "/maker/v2/4.svg",
            "/maker/v2/5.svg",
            "/maker/v2/6.svg",
            "/maker/v2/7.svg",
            "/maker/v2/8.svg",
            "/maker/v2/9.webp",
            "/maker/v2/10.webp",
            "/maker/v2/11.webp",
            "/maker/v2/12.webp",
            "/maker/v2/13.webp",
            "/maker/v2/14.webp",
            "/maker/v2/15.webp",
            "/maker/v2/16.webp",
            "/maker/v2/17.webp",
            "/maker/v2/19.webp",
          ],
          D = (e) => {
            M(e);
          },
          Z = () => {
            f && o(f);
          },
          _ = [...S].reverse(),
          [z, B] = (0, s.useState)(0),
          E = (e) => {
            B(e);
          },
          [L, R] = (0, s.useState)(c.current),
          [F, $] = (0, s.useState)(""),
          q = () => {
            F && R(F);
          },
          A = (0, s.useMemo)(
            () => Array.from({ length: 43 }, (e, t) => t + 1),
            []
          ),
          [K, P] = (0, s.useState)(1),
          T = (e) => {
            P(e);
          },
          X = () => {
            o(c.current), M(0), R(c.current), B(0);
          },
          G = () => {
            M(Math.floor(S.length * Math.random())),
              B(Math.floor(_.length * Math.random()));
          },
          H = () => {
            (0, i.jN)(j.current, { scale: N ? 1.8 : 1 }).then((e) => {
              let t = document.createElement("a");
              (t.download = "meme.png"), (t.href = e), t.click();
            });
          },
          [I, J] = (0, s.useState)(0),
          O = (e) =>
            e.length > 25 ? "scale-[1.1]" : e.length > 20 ? "scale-[1.05]" : "",
          Q = (e) =>
            e.length > 25 ? "-mt-[6px]" : e.length > 20 ? "-mt-[3px]" : "";
        return (0, a.jsx)(a.Fragment, {
          children: (0, a.jsxs)("div", {
            id: "mememaker",
            className: "bg-[#f4f4f4] relative pt-[64px]",
            children: [
              (0, a.jsx)(n(), {
                src: "/maker/dots.webp",
                width: 483,
                height: 513,
                alt: "dots",
                className: "absolute top-[106px] right-6 z-[1] max-lg:hidden",
              }),
              (0, a.jsxs)("div", {
                className:
                  "w-full max-w-[1136px] mx-auto max-lg:p-6 lg:min-w-[1200px] py-4 lg:py-8  relative z-[2]",
                children: [
                  (0, a.jsx)("h2", {
                    className:
                      "w-[468px] h-[75px] max-lg:h-[55px] max-lg:w-full mx-auto bg-[url('/maker/title-bg.png')] bg-full flex items-center justify-center text-[32px] max-lg:text-[24px] font-bold",
                    children: e("maker.title"),
                  }),
                  (0, a.jsxs)("div", {
                    className:
                      "flex mt-5 max-lg:flex-col overflow-hidden items-center",
                    children: [
                      (0, a.jsx)("div", {
                        ref: j,
                        className:
                          "w-[600px] h-[300px] max-lg:w-full max-lg:h-[190px] flex relative overflow-hidden",
                        children: (0, a.jsxs)("div", {
                          className:
                            "w-[600px] h-[300px] mx-auto relative max-lg:w-full max-lg:h-[190px] top-[-8px] max-lg:top-[-2px]",
                          children: [
                            (0, a.jsxs)("div", {
                              className:
                                "overflow-hidden h-full absolute left-[4px] right-[2px] top-[-2px]",
                              children: [
                                (0, a.jsx)("div", {
                                  className:
                                    "absolute left-0 right-0 bottom-[-150px] top-[-150px] rotate-45 flex",
                                  children: (0, a.jsx)("div", {
                                    className:
                                      "relative bg-[url('/maker/water-mask.svg')] flex-grow",
                                  }),
                                }),
                                (0, a.jsxs)("div", {
                                  className:
                                    "absolute z-[2] left-[40px] bottom-[30px] max-lg:bottom-[20px]",
                                  children: [
                                    (0, a.jsxs)("div", {
                                      className:
                                        "w-[175px] h-[158px] max-lg:w-[111px] max-lg:h-[100px]  absolute top-[-90px] max-lg:top-[-50px] left-[-50px] items-center justify-center flex pl-9 pr-10 pb-6 max-lg:pl-6 max-lg:pr-7 z-[2]",
                                      children: [
                                        (0, a.jsx)("div", {
                                          className: (0, g.Z)(
                                            "absolute inset-0 bg-[url('/maker/words-bg2.png')] bg-full",
                                            O(m)
                                          ),
                                        }),
                                        (0, a.jsx)("p", {
                                          className: (0, g.Z)(
                                            "text-xs max-lg:text-[9px] max-lg:leading-[1.2] rotate-[-8deg] text-center font-bold break-words",
                                            Q(m)
                                          ),
                                          children: m,
                                        }),
                                      ],
                                    }),
                                    (0, a.jsx)(n(), {
                                      src: S[C],
                                      alt: "meme",
                                      width: 200,
                                      height: 200,
                                      className:
                                        "w-auto h-[180px] max-lg:h-[120px]",
                                    }),
                                  ],
                                }),
                                (0, a.jsxs)("div", {
                                  className:
                                    "absolute z-[2] right-[40px] lg:bottom-[10px] bottom-[5px]",
                                  children: [
                                    (0, a.jsxs)("div", {
                                      className:
                                        "w-[175px] h-[158px] max-lg:w-[111px] max-lg:h-[100px] bg-full  absolute top-[-90px] max-lg:top-[-60px] right-[-35px] items-center justify-center flex pl-12 pr-9 max-lg:pl-9 max-lg:pr-6 max-lg:pt-2 pb-6 z-[2]",
                                      children: [
                                        (0, a.jsx)("div", {
                                          className: (0, g.Z)(
                                            "absolute inset-0 bg-[url('/maker/words-bg.png')] bg-full",
                                            O(L)
                                          ),
                                        }),
                                        (0, a.jsx)("p", {
                                          className: (0, g.Z)(
                                            "lg:text-xs text-[9px] max-lg:leading-[1.2] rotate-[20deg] text-center font-bold break-words",
                                            Q(L)
                                          ),
                                          children: L,
                                        }),
                                      ],
                                    }),
                                    (0, a.jsx)(n(), {
                                      src: _[z],
                                      alt: "meme",
                                      width: 200,
                                      height: 200,
                                      className:
                                        "w-auto h-[180px] max-lg:h-[120px]",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, a.jsx)(n(), {
                              src: "/maker/bg/".concat(K, ".webp"),
                              alt: "meme",
                              width: 800,
                              height: 400,
                              className: "w-full h-full",
                            }),
                          ],
                        }),
                      }),
                      (0, a.jsxs)("div", {
                        className:
                          "flex flex-col flex-1 lg:ml-[28px] w-1/2 max-lg:w-full max-lg:flex-col-reverse",
                        children: [
                          (0, a.jsxs)("div", {
                            className: "max-lg:mt-4",
                            children: [
                              (0, a.jsx)("h5", {
                                className: "uppercase text-2xl max-lg:text-xl",
                                children: e("maker.background"),
                              }),
                              (0, a.jsx)(p, {
                                height: 132,
                                children: (0, a.jsx)("div", {
                                  className: "flex items-center gap-2",
                                  children: A.map((e) =>
                                    (0, a.jsxs)(
                                      "div",
                                      {
                                        className:
                                          "relative h-[132px] w-[264px] min-w-[260px] flex items-center justify-center cursor-pointer hover:opacity-80",
                                        onClick: () => {
                                          T(e);
                                        },
                                        children: [
                                          (0, a.jsx)(n(), {
                                            src: "/maker/bg/".concat(e, ".webp"),
                                            alt: "character",
                                            width: 800,
                                            height: 400,
                                            className: "w-full h-full",
                                          }),
                                          K == e &&
                                            (0, a.jsx)(u, {
                                              className:
                                                "absolute top-2 right-2",
                                            }),
                                        ],
                                      },
                                      e
                                    )
                                  ),
                                }),
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className: "flex flex-col gap-3 mt-7 max-lg:mt-3",
                            children: [
                              (0, a.jsxs)("div", {
                                className:
                                  "flex-1 grid grid-cols-3 gap-2 max-lg:w-full",
                                children: [
                                  (0, a.jsxs)("div", {
                                    className: (0, g.Z)(
                                      y,
                                      "bg-[url('/maker/btn-white.png')] text-text",
                                      l && "lg:!text-xl !text-xs"
                                    ),
                                    onClick: () => {
                                      X();
                                    },
                                    children: [
                                      (0, a.jsx)(n(), {
                                        src: "/maker/reset.svg",
                                        alt: "reset",
                                        width: 27,
                                        height: 25,
                                        className:
                                          "mr-2 w-[27px] h-auto max-lg:w-[18px]",
                                      }),
                                      e("maker.reset"),
                                    ],
                                  }),
                                  (0, a.jsxs)("div", {
                                    className: (0, g.Z)(
                                      y,
                                      "bg-[url('/maker/btn-white.png')] text-text",
                                      l && "lg:!text-xl !text-xs"
                                    ),
                                    onClick: () => {
                                      G();
                                    },
                                    children: [
                                      (0, a.jsx)(n(), {
                                        src: "/maker/random.svg",
                                        alt: "random",
                                        width: 27,
                                        height: 25,
                                        className:
                                          "mr-2 w-[27px] h-auto max-lg:w-[18px]",
                                      }),
                                      e("maker.random"),
                                    ],
                                  }),
                                  (0, a.jsx)("div", {
                                    className: (0, g.Z)(
                                      y,
                                      "bg-[url('/maker/btn-black.png')] text-white",
                                      l && "lg:!text-xl !text-xs"
                                    ),
                                    onClick: () => {
                                      H();
                                    },
                                    children: e("maker.download"),
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                className:
                                  "flex-1 h-[62px] min-h-[62px] flex items-center pr-2 pl-6 bg-[url('/maker/input-bg.png')] bg-full max-lg:w-full",
                                children: [
                                  (0, a.jsx)("input", {
                                    className:
                                      "flex-1 text-2xl max-md:text-lg  outline-none placeholder:text-[#D9D9D9] uppercase  w-[100px]",
                                    placeholder: e("maker.enterCaption1"),
                                    value: f,
                                    maxLength: 30,
                                    onChange: (e) => {
                                      v(e.target.value);
                                    },
                                  }),
                                  (0, a.jsx)("button", {
                                    type: "button",
                                    className:
                                      "h-[46px] px-4 outline-none transition-all duration-200 ease-in-out flex justify-center items-center cursor-pointer\n                    bg-full font-bold  text-2xl max-md:text-lg uppercase bg-[url('/maker/btn-yellow.png')]\n                    hover:opacity-70 active:translate-y-[2px]\n                    ",
                                    onClick: () => {
                                      Z();
                                    },
                                    children: e("maker.confirm"),
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                className:
                                  "flex-1 h-[62px] min-h-[62px] flex items-center pr-2 pl-6 bg-[url('/maker/input-bg.png')] bg-full max-lg:w-full",
                                children: [
                                  (0, a.jsx)("input", {
                                    className:
                                      "flex-1 text-2xl max-md:text-lg  outline-none placeholder:text-[#D9D9D9] uppercase  w-[100px]",
                                    placeholder: e("maker.enterCaption2"),
                                    value: F,
                                    maxLength: 30,
                                    onChange: (e) => {
                                      $(e.target.value);
                                    },
                                  }),
                                  (0, a.jsx)("button", {
                                    type: "button",
                                    className:
                                      "h-[46px] px-4 outline-none transition-all duration-200 ease-in-out flex justify-center items-center cursor-pointer\n                    bg-full font-bold  text-2xl max-md:text-lg uppercase bg-[url('/maker/btn-yellow.png')]\n                    hover:opacity-70 active:translate-y-[2px]\n                    ",
                                    onClick: () => {
                                      q();
                                    },
                                    children: e("maker.confirm"),
                                  }),
                                ],
                              }),
                              (0, a.jsx)("div", {
                                className:
                                  "flex justify-center items-center mt-1 w-full bg-[url('/maker/input-bg.png')] bg-full bg-no-repeat",
                                children: (0, a.jsx)(h.B, {
                                  title: e("maker.shareCopy"),
                                  url: w,
                                  className: "w-full",
                                  children: (0, a.jsx)("div", {
                                    className: "".concat(y, "  text-text px-4"),
                                    onClick: () => {
                                      G();
                                    },
                                    children: e("maker.shareToX"),
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className:
                      "flex items-center gap-4 lg:gap-10 max-md:flex-col mt-5 max-md:mt-3 max-lg:hidden",
                    children: [
                      (0, a.jsxs)("div", {
                        className: "flex-1 w-1/2 max-lg:w-full",
                        children: [
                          (0, a.jsx)("h5", {
                            className: "uppercase text-xl",
                            children: e("maker.character1"),
                          }),
                          (0, a.jsx)(p, {
                            children: (0, a.jsx)("div", {
                              className: "flex items-center gap-2",
                              children: S.map((e, t) =>
                                (0, a.jsxs)(
                                  "div",
                                  {
                                    className:
                                      "relative w-[96px] h-[96px] min-w-[96px] flex items-center justify-center cursor-pointer bg-[url('/maker/character-bg.png')] bg-full  hover:opacity-80",
                                    onClick: () => {
                                      D(t);
                                    },
                                    children: [
                                      (0, a.jsx)(n(), {
                                        src: e,
                                        alt: "character",
                                        width: 120,
                                        height: 150,
                                        className: "h-[70%] w-auto",
                                      }),
                                      C == t &&
                                        (0, a.jsx)(u, {
                                          className: "absolute top-2 right-2",
                                        }),
                                    ],
                                  },
                                  t
                                )
                              ),
                            }),
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className: "flex-1 w-1/2 max-lg:w-full",
                        children: [
                          (0, a.jsx)("h5", {
                            className: "uppercase text-xl",
                            children: e("maker.character2"),
                          }),
                          (0, a.jsx)(p, {
                            children: (0, a.jsx)("div", {
                              className: "flex items-center gap-2",
                              children: _.map((e, t) =>
                                (0, a.jsxs)(
                                  "div",
                                  {
                                    className:
                                      "relative w-[96px] h-[96px] min-w-[96px] flex items-center justify-center cursor-pointer bg-[url('/maker/character-bg.png')] bg-full  hover:opacity-80",
                                    onClick: () => {
                                      E(t);
                                    },
                                    children: [
                                      (0, a.jsx)(n(), {
                                        src: e,
                                        alt: "character",
                                        width: 120,
                                        height: 150,
                                        className: "h-[70%] w-auto",
                                      }),
                                      z == t &&
                                        (0, a.jsx)(u, {
                                          className: "absolute top-2 right-2",
                                        }),
                                    ],
                                  },
                                  t
                                )
                              ),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsxs)("ul", {
                    className:
                      "flex items-center mt-4 text-xl text-[#b4b4b4] gap-3 lg:hidden",
                    children: [
                      (0, a.jsx)("li", {
                        className: "".concat(
                          0 == I ? "text-[#171D23]" : "",
                          " cursor-pointer"
                        ),
                        onClick: () => {
                          J(0);
                        },
                        children: e("maker.character1"),
                      }),
                      (0, a.jsx)("li", {
                        className: "".concat(
                          1 == I ? "text-[#171D23]" : "",
                          " cursor-pointer"
                        ),
                        onClick: () => {
                          J(1);
                        },
                        children: e("maker.character2"),
                      }),
                    ],
                  }),
                  (0, a.jsx)("div", {
                    className: "lg:hidden",
                    children:
                      0 === I
                        ? (0, a.jsx)(p, {
                            children: (0, a.jsx)("div", {
                              className: "flex items-center gap-2",
                              children: S.map((e, t) =>
                                (0, a.jsxs)(
                                  "div",
                                  {
                                    className:
                                      "relative w-[96px] h-[96px] min-w-[96px] flex items-center justify-center cursor-pointer bg-[url('/maker/character-bg.png')] bg-full  hover:opacity-80",
                                    onClick: () => {
                                      D(t);
                                    },
                                    children: [
                                      (0, a.jsx)(n(), {
                                        src: e,
                                        alt: "character",
                                        width: 120,
                                        height: 150,
                                        className: "h-[70%] w-auto",
                                      }),
                                      C == t &&
                                        (0, a.jsx)(u, {
                                          className: "absolute top-2 right-2",
                                        }),
                                    ],
                                  },
                                  t
                                )
                              ),
                            }),
                          })
                        : (0, a.jsx)(p, {
                            children: (0, a.jsx)("div", {
                              className: "flex items-center gap-2",
                              children: _.map((e, t) =>
                                (0, a.jsxs)(
                                  "div",
                                  {
                                    className:
                                      "relative w-[96px] h-[96px] min-w-[96px] flex items-center justify-center cursor-pointer bg-[url('/maker/character-bg.png')] bg-full  hover:opacity-80",
                                    onClick: () => {
                                      E(t);
                                    },
                                    children: [
                                      (0, a.jsx)(n(), {
                                        src: e,
                                        alt: "character",
                                        width: 120,
                                        height: 150,
                                        className: "h-[70%] w-auto",
                                      }),
                                      z == t &&
                                        (0, a.jsx)(u, {
                                          className: "absolute top-2 right-2",
                                        }),
                                    ],
                                  },
                                  t
                                )
                              ),
                            }),
                          }),
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
  },
]);
