module.exports = (function (e) {
    let t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        let o = (t[r] = {i: r, l: !1, exports: {}});
        return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
    }

    return (
        (n.m = e),
            (n.c = t),
            (n.d = function (e, t, r) {
                n.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: r});
            }),
            (n.r = function (e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0});
            }),
            (n.t = function (e, t) {
                if ((1 & t && (e = n(e)), 8 & t)) return e;
                if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                let r = Object.create(null);
                if ((n.r(r), Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e))
                    for (let o in e)
                        n.d(
                            r,
                            o,
                            function (t) {
                                return e[t];
                            }.bind(null, o)
                        );
                return r;
            }),
            (n.n = function (e) {
                let t =
                    e && e.__esModule
                        ? function () {
                            return e.default;
                        }
                        : function () {
                            return e;
                        };
                return n.d(t, "a", t), t;
            }),
            (n.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (n.p = ""),
            n((n.s = 1))
    );
})([
    function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        (t.POSITION = {
            PREV: "prev",
            NEXT: "next",
            CURRENT: "current",
            HIDDEN: "hidden"
        }), (t.ALIGNMENT = {HORIZONTAL: "horizontal", VERTICAL: "vertical"}), (t.SPREAD = {
            NARROW: "narrow",
            MEDIUM: "medium",
            WIDE: "wide"
        });
    },
    function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        let r =
                Object.assign ||
                function (e) {
                    for (let t = 1; t < arguments.length; t++) {
                        let n = arguments[t];
                        for (let r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                    }
                    return e;
                },
            o = (function () {
                function e(e, t) {
                    for (let n = 0; n < t.length; n++) {
                        let r = t[n];
                        (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                    }
                }

                return function (t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t;
                };
            })(),
            a = n(2),
            i = c(a),
            u = c(n(3)),
            l = n(6),
            s = n(0);

        function c(e) {
            return e && e.__esModule ? e : {default: e};
        }

        let f = (function (e) {
            function t(e) {
                !(function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                })(this, t);
                let n = (function (e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
                })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return (
                    (n.goTo = function (e) {
                        n.setState({current_index: Number(e)}, n.props.afterChange);
                    }),
                        (n.next = function () {
                            n._is_mounted && n._cardOnClick(s.POSITION.NEXT);
                        }),
                        (n.prev = function () {
                            return n._cardOnClick(s.POSITION.PREV);
                        }),
                        (n.getCurrentIndex = function () {
                            return n.state.current_index;
                        }),
                        (n._keydownEventListener = function (e) {
                            return 39 === e.which ? n.next() : 37 === e.which ? n.prev() : void 0;
                        }),
                        (n._autoplay = function () {
                            if (n._is_mounted) {
                                let e = n.props.autoplay_speed,
                                    t = setInterval(n.next, e);
                                n.setState({interval: t});
                            }
                        }),
                        (n._resetInterval = function () {
                            clearInterval(n.state.interval), n._autoplay();
                        }),
                        (n._getCardClass = function (e) {
                            let t = n.props.children,
                                r = n.state.current_index;
                            return null === r
                                ? s.POSITION.HIDDEN
                                : e === r
                                    ? s.POSITION.CURRENT
                                    : e === r + 1 || (0 === e && r === i.default.Children.count(t) - 1)
                                        ? s.POSITION.NEXT
                                        : e === r - 1 || (e === i.default.Children.count(t) - 1 && 0 === r)
                                            ? s.POSITION.PREV
                                            : s.POSITION.HIDDEN;
                        }),
                        (n._cardOnClick = function (e) {
                            let t = n.props,
                                r = t.children,
                                o = t.autoplay,
                                a = n.state.current_index;
                            o && n._resetInterval(),
                                e === s.POSITION.NEXT && !t.disable_move_right
                                    ? a === i.default.Children.count(r) - 1
                                        ? n.setState({current_index: 0}, n.props.afterChange)
                                        :  n.setState({current_index: a + 1}, n.props.afterChange)
                                    : e === s.POSITION.PREV && !t.disable_move_left && (0 === a ? n.setState({current_index: i.default.Children.count(r) - 1}, n.props.afterChange) : n.setState({current_index: a - 1}, n.props.afterChange));
                        }),
                        (n.ChildComponents = function () {
                            let e = n.props,
                                t = e.alignment,
                                o = e.spread,
                                a = e.disable_box_shadow;                                
                            return i.default.Children.map(n.props.children, function (e, u) {
                                let s = n._getCardClass(u);
                                let f = n.props;
                                return i.default.createElement(
                                    "div",
                                    {
                                        key: u,
                                        onClick: function () {
                                            if (f.disable_move) return;
                                            return n._cardOnClick(s);
                                        },
                                        style: r({}, l.STYLES.CARD, {
                                            userSelect: ("none", l.getUserSelect)(s),
                                            opacity: (0, l.getOpacity)(s, f),
                                            zIndex: (0, l.getZIndex)(s),
                                            transform: (0, l.getTransform)(s, t, o, f),
                                            boxShadow: (0, l.getBoxShadow)(s, t, a),
                                            cursor: (0, l.getCursor)(s, t, f),
                                            top: f.top_child || l.STYLES.CARD.top
                                        }),
                                    },
                                    e
                                );
                            });
                        }),
                        (n.state = {current_index: e.disable_fade_in ? e.initial_index : null, interval: null}),
                        n
                );
            }

            return (
                (function (e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    (e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    })), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
                })(t, e),
                    o(t, [
                        {
                            key: "componentDidMount",
                            value: function () {
                                let e = this,
                                    t = this.props,
                                    n = t.initial_index,
                                    r = t.disable_keydown,
                                    o = t.disable_fade_in,
                                    a = t.autoplay;
                                (this._is_mounted = !0),
                                o ||
                                setTimeout(function () {
                                    e.setState({current_index: n});
                                }, 0.25),
                                r || (document.onkeydown = this._keydownEventListener),
                                a && this._autoplay();
                            },
                        },
                        {
                            key: "componentWillUnmount",
                            value: function () {
                                (this._is_mounted = !1), this.props.disable_keydown || (document.onkeydown = null);
                            },
                        },
                        {
                            key: "render",
                            value: function () {
                                return i.default.createElement("div", {style: l.STYLES.CONTAINER}, i.default.createElement(this.ChildComponents, null));
                            },
                        },
                    ]),
                    t
            );
        })(a.Component);
        (f.propTypes = {
            alignment: u.default.oneOf([s.ALIGNMENT.HORIZONTAL, s.ALIGNMENT.VERTICAL]),
            spread: u.default.oneOf([s.SPREAD.NARROW, s.SPREAD.MEDIUM, s.SPREAD.WIDE]),
            initial_index: u.default.number,
            disable_keydown: u.default.bool,
            disable_box_shadow: u.default.bool,
            disable_fade_in: u.default.bool,
            disable_move: u.default.bool,
            disable_move_left: u.default.bool,
            disable_move_right: u.default.bool,
            hide_last_card: u.default.bool,
            autoplay: u.default.bool,
            autoplay_speed: u.default.number,
            afterChange: u.default.func,
            top_child: u.default.string,
            translate_y_child : u.default.string
        }),
            (f.defaultProps = {
                alignment: s.ALIGNMENT.HORIZONTAL,
                spread: s.SPREAD.MEDIUM,
                initial_index: 0,
                disable_keydown: !1,
                disable_box_shadow: !1,
                disable_fade_in: !1,
                disable_move: !1,
                disable_move_left: !1,
                disable_move_right: !1,
                hide_last_card: !1,
                autoplay: !1,
                autoplay_speed: 5e3,
                top_child: '50%',
                translate_y_child : '-50%',
                afterChange: function () {
                },
            }),
            (t.default = f);
    },
    function (e, t) {
        e.exports = require("react");
    },
    function (e, t, n) {
        e.exports = n(4)();
    },
    function (e, t, n) {
        "use strict";
        let r = n(5);

        function o() {
        }

        function a() {
        }

        (a.resetWarningCache = o),
            (e.exports = function () {
                function e(e, t, n, o, a, i) {
                    if (i !== r) {
                        let u = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        throw ((u.name = "Invariant Violation"), u);
                    }
                }

                function t() {
                    return e;
                }

                e.isRequired = e;
                let n = {
                    array: e,
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
                    checkPropTypes: a,
                    resetWarningCache: o,
                };
                return (n.PropTypes = n), n;
            });
    },
    function (e, t, n) {
        "use strict";
        e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    },
    function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}),
            (t.STYLES = void 0),
            (t.getUserSelect = function (e) {
                return (e === r.POSITION.PREV || e === r.POSITION.NEXT) ? "none" : "text";
            }),
            (t.getOpacity = function (e, f) {
                return e === r.POSITION.HIDDEN || (e === r.POSITION.PREV && f.hide_last_card) ? 0 : 1;
            }),
            (t.getZIndex = function (e) {
                return e === r.POSITION.HIDDEN ? 0 : e === r.POSITION.CURRENT ? 2 : 1;
            }),
            (t.getTransform = function (e, t, n, f) {
                let o = (function (e) {
                        let t = void 0,
                            n = void 0;
                        e === r.SPREAD.MEDIUM ? ((t = "-85%"), (n = "-15%")) : e === r.SPREAD.NARROW ? ((t = "-75%"), (n = "-25%")) : e === r.SPREAD.WIDE && ((t = "-95%"), (n = "-5%"));
                        return {prev: t, next: n};
                    })(n),
                    a = o.prev,
                    i = o.next;
                if (t === r.ALIGNMENT.HORIZONTAL) {
                    if (e === r.POSITION.PREV) return "translate(" + a + ", " + f.translate_y_child + ") scale(0.82)";
                    if (e === r.POSITION.NEXT) return "translate(" + i + ", " + f.translate_y_child + ") scale(0.82)";
                }
                if (t === r.ALIGNMENT.VERTICAL) {
                    if (e === r.POSITION.PREV) return "translate(-50%, " + a + ") scale(0.82)";
                    if (e === r.POSITION.NEXT) return "translate(-50%, " + i + ") scale(0.82)";
                }
                return e === r.POSITION.HIDDEN ? "translate(-50%, -50%) scale(0.5)" : "translate(-50%, " + f.translate_y_child + ")";
            }),
            (t.getBoxShadow = function (e, t, n) {
                if (!n && e === r.POSITION.CURRENT) {
                    if (t === r.ALIGNMENT.HORIZONTAL) return "30px 0px 20px -20px rgba(0, 0, 0, .4), -30px 0px 20px -20px rgba(0, 0, 0, .4)";
                    if (t === r.ALIGNMENT.VERTICAL) return "0px 30px 20px -20px rgba(0, 0, 0, .4), 0px -30px 20px -20px rgba(0, 0, 0, .4)";
                }
                return "unset";
            }),
            (t.getCursor = function (e, t, f) {
                if (e === r.POSITION.NEXT) {
                    if (t === r.ALIGNMENT.HORIZONTAL) return "e-resize";
                    if (t === r.ALIGNMENT.VERTICAL) return "s-resize";
                }
                if (e === r.POSITION.PREV) {
                    if (t === r.ALIGNMENT.HORIZONTAL && !f.hide_last_card) return "w-resize";
                    if (t === r.ALIGNMENT.VERTICAL && !f.hide_last_card) return "n-resize";
                }
                return "unset";
            });
        let r = n(0);
        t.STYLES = {
            CONTAINER: {positive: "relative", width: "100%", height: "100%", margin: 0, padding: 0},
            CARD: {position: "absolute", left: "50%", top: "50%", transition: "all 0.6s"}
        };
    },
]);
