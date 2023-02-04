/*! For license information please see bundle.js.LICENSE.txt */
!function (e) {
    var t = {};

    function n(i) {
        if (t[i]) return t[i].exports;
        var r = t[i] = {i: i, l: !1, exports: {}};
        return e[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports
    }

    n.m = e, n.c = t, n.d = function (e, t, i) {
        n.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: i})
    }, n.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, n.t = function (e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var i = Object.create(null);
        if (n.r(i), Object.defineProperty(i, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var r in e) n.d(i, r, function (t) {
            return e[t]
        }.bind(null, r));
        return i
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 2)
}([function (e, t, n) {
    (function (t) {
        e.exports = t.jQuery = n(4)
    }).call(this, n(1))
}, function (e, t) {
    var n;
    n = function () {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}, function (e, t, n) {
    n(3), e.exports = n(8)
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(0), r = n.n(i);
    n(6);
    r()(document).ready((function () {
        r()(".btn-input").click((function () {
            r()(".input-upload").click()
        })), r()(".delete").click((function () {
            r()(".content_bonus").remove()
        }))
    }))
}, function (e, t, n) {
    (function (t) {
        e.exports = t.$ = n(5)
    }).call(this, n(1))
}, function (e, t, n) {
    var i;
    !function (t, n) {
        "use strict";
        "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function (e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return n(e)
        } : n(t)
    }("undefined" != typeof window ? window : this, (function (n, r) {
        "use strict";
        var o = [], s = n.document, a = Object.getPrototypeOf, l = o.slice, c = o.concat, u = o.push, f = o.indexOf,
            d = {}, h = d.toString, p = d.hasOwnProperty, g = p.toString, m = g.call(Object), v = {}, y = function (e) {
                return "function" == typeof e && "number" != typeof e.nodeType
            }, b = function (e) {
                return null != e && e === e.window
            }, _ = {type: !0, src: !0, nonce: !0, noModule: !0};

        function w(e, t, n) {
            var i, r, o = (n = n || s).createElement("script");
            if (o.text = e, t) for (i in _) (r = t[i] || t.getAttribute && t.getAttribute(i)) && o.setAttribute(i, r);
            n.head.appendChild(o).parentNode.removeChild(o)
        }

        function x(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? d[h.call(e)] || "object" : typeof e
        }

        var E = function (e, t) {
            return new E.fn.init(e, t)
        }, T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

        function C(e) {
            var t = !!e && "length" in e && e.length, n = x(e);
            return !y(e) && !b(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
        }

        E.fn = E.prototype = {
            jquery: "3.4.1", constructor: E, length: 0, toArray: function () {
                return l.call(this)
            }, get: function (e) {
                return null == e ? l.call(this) : e < 0 ? this[e + this.length] : this[e]
            }, pushStack: function (e) {
                var t = E.merge(this.constructor(), e);
                return t.prevObject = this, t
            }, each: function (e) {
                return E.each(this, e)
            }, map: function (e) {
                return this.pushStack(E.map(this, (function (t, n) {
                    return e.call(t, n, t)
                })))
            }, slice: function () {
                return this.pushStack(l.apply(this, arguments))
            }, first: function () {
                return this.eq(0)
            }, last: function () {
                return this.eq(-1)
            }, eq: function (e) {
                var t = this.length, n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
            }, end: function () {
                return this.prevObject || this.constructor()
            }, push: u, sort: o.sort, splice: o.splice
        }, E.extend = E.fn.extend = function () {
            var e, t, n, i, r, o, s = arguments[0] || {}, a = 1, l = arguments.length, c = !1;
            for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || y(s) || (s = {}), a === l && (s = this, a--); a < l; a++) if (null != (e = arguments[a])) for (t in e) i = e[t], "__proto__" !== t && s !== i && (c && i && (E.isPlainObject(i) || (r = Array.isArray(i))) ? (n = s[t], o = r && !Array.isArray(n) ? [] : r || E.isPlainObject(n) ? n : {}, r = !1, s[t] = E.extend(c, o, i)) : void 0 !== i && (s[t] = i));
            return s
        }, E.extend({
            expando: "jQuery" + ("3.4.1" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
                throw new Error(e)
            }, noop: function () {
            }, isPlainObject: function (e) {
                var t, n;
                return !(!e || "[object Object]" !== h.call(e)) && (!(t = a(e)) || "function" == typeof (n = p.call(t, "constructor") && t.constructor) && g.call(n) === m)
            }, isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0
            }, globalEval: function (e, t) {
                w(e, {nonce: t && t.nonce})
            }, each: function (e, t) {
                var n, i = 0;
                if (C(e)) for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++) ; else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
                return e
            }, trim: function (e) {
                return null == e ? "" : (e + "").replace(T, "")
            }, makeArray: function (e, t) {
                var n = t || [];
                return null != e && (C(Object(e)) ? E.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n
            }, inArray: function (e, t, n) {
                return null == t ? -1 : f.call(t, e, n)
            }, merge: function (e, t) {
                for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
                return e.length = r, e
            }, grep: function (e, t, n) {
                for (var i = [], r = 0, o = e.length, s = !n; r < o; r++) !t(e[r], r) !== s && i.push(e[r]);
                return i
            }, map: function (e, t, n) {
                var i, r, o = 0, s = [];
                if (C(e)) for (i = e.length; o < i; o++) null != (r = t(e[o], o, n)) && s.push(r); else for (o in e) null != (r = t(e[o], o, n)) && s.push(r);
                return c.apply([], s)
            }, guid: 1, support: v
        }), "function" == typeof Symbol && (E.fn[Symbol.iterator] = o[Symbol.iterator]), E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function (e, t) {
            d["[object " + t + "]"] = t.toLowerCase()
        }));
        var S = function (e) {
            var t, n, i, r, o, s, a, l, c, u, f, d, h, p, g, m, v, y, b, _ = "sizzle" + 1 * new Date, w = e.document,
                x = 0, E = 0, T = le(), C = le(), S = le(), k = le(), D = function (e, t) {
                    return e === t && (f = !0), 0
                }, N = {}.hasOwnProperty, A = [], j = A.pop, O = A.push, L = A.push, I = A.slice, P = function (e, t) {
                    for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
                    return -1
                },
                q = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                H = "[\\x20\\t\\r\\n\\f]", R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                M = "\\[" + H + "*(" + R + ")(?:" + H + "*([*^$|!~]?=)" + H + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + H + "*\\]",
                F = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
                B = new RegExp(H + "+", "g"), W = new RegExp("^" + H + "+|((?:^|[^\\\\])(?:\\\\.)*)" + H + "+$", "g"),
                U = new RegExp("^" + H + "*," + H + "*"), Q = new RegExp("^" + H + "*([>+~]|" + H + ")" + H + "*"),
                $ = new RegExp(H + "|>"), z = new RegExp(F), V = new RegExp("^" + R + "$"), X = {
                    ID: new RegExp("^#(" + R + ")"),
                    CLASS: new RegExp("^\\.(" + R + ")"),
                    TAG: new RegExp("^(" + R + "|[*])"),
                    ATTR: new RegExp("^" + M),
                    PSEUDO: new RegExp("^" + F),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + H + "*(even|odd|(([+-]|)(\\d*)n|)" + H + "*(?:([+-]|)" + H + "*(\\d+)|))" + H + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + q + ")$", "i"),
                    needsContext: new RegExp("^" + H + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + H + "*((?:-\\d)?\\d*)" + H + "*\\)|)(?=[^-]|$)", "i")
                }, Y = /HTML$/i, K = /^(?:input|select|textarea|button)$/i, G = /^h\d$/i, J = /^[^{]+\{\s*\[native \w/,
                Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/,
                te = new RegExp("\\\\([\\da-f]{1,6}" + H + "?|(" + H + ")|.)", "ig"), ne = function (e, t, n) {
                    var i = "0x" + t - 65536;
                    return i != i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                }, ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, re = function (e, t) {
                    return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                }, oe = function () {
                    d()
                }, se = _e((function (e) {
                    return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                }), {dir: "parentNode", next: "legend"});
            try {
                L.apply(A = I.call(w.childNodes), w.childNodes), A[w.childNodes.length].nodeType
            } catch (e) {
                L = {
                    apply: A.length ? function (e, t) {
                        O.apply(e, I.call(t))
                    } : function (e, t) {
                        for (var n = e.length, i = 0; e[n++] = t[i++];) ;
                        e.length = n - 1
                    }
                }
            }

            function ae(e, t, i, r) {
                var o, a, c, u, f, p, v, y = t && t.ownerDocument, x = t ? t.nodeType : 9;
                if (i = i || [], "string" != typeof e || !e || 1 !== x && 9 !== x && 11 !== x) return i;
                if (!r && ((t ? t.ownerDocument || t : w) !== h && d(t), t = t || h, g)) {
                    if (11 !== x && (f = Z.exec(e))) if (o = f[1]) {
                        if (9 === x) {
                            if (!(c = t.getElementById(o))) return i;
                            if (c.id === o) return i.push(c), i
                        } else if (y && (c = y.getElementById(o)) && b(t, c) && c.id === o) return i.push(c), i
                    } else {
                        if (f[2]) return L.apply(i, t.getElementsByTagName(e)), i;
                        if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return L.apply(i, t.getElementsByClassName(o)), i
                    }
                    if (n.qsa && !k[e + " "] && (!m || !m.test(e)) && (1 !== x || "object" !== t.nodeName.toLowerCase())) {
                        if (v = e, y = t, 1 === x && $.test(e)) {
                            for ((u = t.getAttribute("id")) ? u = u.replace(ie, re) : t.setAttribute("id", u = _), a = (p = s(e)).length; a--;) p[a] = "#" + u + " " + be(p[a]);
                            v = p.join(","), y = ee.test(e) && ve(t.parentNode) || t
                        }
                        try {
                            return L.apply(i, y.querySelectorAll(v)), i
                        } catch (t) {
                            k(e, !0)
                        } finally {
                            u === _ && t.removeAttribute("id")
                        }
                    }
                }
                return l(e.replace(W, "$1"), t, i, r)
            }

            function le() {
                var e = [];
                return function t(n, r) {
                    return e.push(n + " ") > i.cacheLength && delete t[e.shift()], t[n + " "] = r
                }
            }

            function ce(e) {
                return e[_] = !0, e
            }

            function ue(e) {
                var t = h.createElement("fieldset");
                try {
                    return !!e(t)
                } catch (e) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function fe(e, t) {
                for (var n = e.split("|"), r = n.length; r--;) i.attrHandle[n[r]] = t
            }

            function de(e, t) {
                var n = t && e, i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                if (i) return i;
                if (n) for (; n = n.nextSibling;) if (n === t) return -1;
                return e ? 1 : -1
            }

            function he(e) {
                return function (t) {
                    return "input" === t.nodeName.toLowerCase() && t.type === e
                }
            }

            function pe(e) {
                return function (t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }

            function ge(e) {
                return function (t) {
                    return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && se(t) === e : t.disabled === e : "label" in t && t.disabled === e
                }
            }

            function me(e) {
                return ce((function (t) {
                    return t = +t, ce((function (n, i) {
                        for (var r, o = e([], n.length, t), s = o.length; s--;) n[r = o[s]] && (n[r] = !(i[r] = n[r]))
                    }))
                }))
            }

            function ve(e) {
                return e && void 0 !== e.getElementsByTagName && e
            }

            for (t in n = ae.support = {}, o = ae.isXML = function (e) {
                var t = e.namespaceURI, n = (e.ownerDocument || e).documentElement;
                return !Y.test(t || n && n.nodeName || "HTML")
            }, d = ae.setDocument = function (e) {
                var t, r, s = e ? e.ownerDocument || e : w;
                return s !== h && 9 === s.nodeType && s.documentElement ? (p = (h = s).documentElement, g = !o(h), w !== h && (r = h.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", oe, !1) : r.attachEvent && r.attachEvent("onunload", oe)), n.attributes = ue((function (e) {
                    return e.className = "i", !e.getAttribute("className")
                })), n.getElementsByTagName = ue((function (e) {
                    return e.appendChild(h.createComment("")), !e.getElementsByTagName("*").length
                })), n.getElementsByClassName = J.test(h.getElementsByClassName), n.getById = ue((function (e) {
                    return p.appendChild(e).id = _, !h.getElementsByName || !h.getElementsByName(_).length
                })), n.getById ? (i.filter.ID = function (e) {
                    var t = e.replace(te, ne);
                    return function (e) {
                        return e.getAttribute("id") === t
                    }
                }, i.find.ID = function (e, t) {
                    if (void 0 !== t.getElementById && g) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }) : (i.filter.ID = function (e) {
                    var t = e.replace(te, ne);
                    return function (e) {
                        var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }, i.find.ID = function (e, t) {
                    if (void 0 !== t.getElementById && g) {
                        var n, i, r, o = t.getElementById(e);
                        if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                            for (r = t.getElementsByName(e), i = 0; o = r[i++];) if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                        }
                        return []
                    }
                }), i.find.TAG = n.getElementsByTagName ? function (e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                } : function (e, t) {
                    var n, i = [], r = 0, o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return o
                }, i.find.CLASS = n.getElementsByClassName && function (e, t) {
                    if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e)
                }, v = [], m = [], (n.qsa = J.test(h.querySelectorAll)) && (ue((function (e) {
                    p.appendChild(e).innerHTML = "<a id='" + _ + "'></a><select id='" + _ + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + H + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + H + "*(?:value|" + q + ")"), e.querySelectorAll("[id~=" + _ + "-]").length || m.push("~="), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + _ + "+*").length || m.push(".#.+[+~]")
                })), ue((function (e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = h.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + H + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), p.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
                }))), (n.matchesSelector = J.test(y = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && ue((function (e) {
                    n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), v.push("!=", F)
                })), m = m.length && new RegExp(m.join("|")), v = v.length && new RegExp(v.join("|")), t = J.test(p.compareDocumentPosition), b = t || J.test(p.contains) ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e, i = t && t.parentNode;
                    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                } : function (e, t) {
                    if (t) for (; t = t.parentNode;) if (t === e) return !0;
                    return !1
                }, D = t ? function (e, t) {
                    if (e === t) return f = !0, 0;
                    var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return i || (1 & (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === i ? e === h || e.ownerDocument === w && b(w, e) ? -1 : t === h || t.ownerDocument === w && b(w, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & i ? -1 : 1)
                } : function (e, t) {
                    if (e === t) return f = !0, 0;
                    var n, i = 0, r = e.parentNode, o = t.parentNode, s = [e], a = [t];
                    if (!r || !o) return e === h ? -1 : t === h ? 1 : r ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
                    if (r === o) return de(e, t);
                    for (n = e; n = n.parentNode;) s.unshift(n);
                    for (n = t; n = n.parentNode;) a.unshift(n);
                    for (; s[i] === a[i];) i++;
                    return i ? de(s[i], a[i]) : s[i] === w ? -1 : a[i] === w ? 1 : 0
                }, h) : h
            }, ae.matches = function (e, t) {
                return ae(e, null, null, t)
            }, ae.matchesSelector = function (e, t) {
                if ((e.ownerDocument || e) !== h && d(e), n.matchesSelector && g && !k[t + " "] && (!v || !v.test(t)) && (!m || !m.test(t))) try {
                    var i = y.call(e, t);
                    if (i || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
                } catch (e) {
                    k(t, !0)
                }
                return ae(t, h, null, [e]).length > 0
            }, ae.contains = function (e, t) {
                return (e.ownerDocument || e) !== h && d(e), b(e, t)
            }, ae.attr = function (e, t) {
                (e.ownerDocument || e) !== h && d(e);
                var r = i.attrHandle[t.toLowerCase()],
                    o = r && N.call(i.attrHandle, t.toLowerCase()) ? r(e, t, !g) : void 0;
                return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
            }, ae.escape = function (e) {
                return (e + "").replace(ie, re)
            }, ae.error = function (e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, ae.uniqueSort = function (e) {
                var t, i = [], r = 0, o = 0;
                if (f = !n.detectDuplicates, u = !n.sortStable && e.slice(0), e.sort(D), f) {
                    for (; t = e[o++];) t === e[o] && (r = i.push(o));
                    for (; r--;) e.splice(i[r], 1)
                }
                return u = null, e
            }, r = ae.getText = function (e) {
                var t, n = "", i = 0, o = e.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += r(e)
                    } else if (3 === o || 4 === o) return e.nodeValue
                } else for (; t = e[i++];) n += r(t);
                return n
            }, (i = ae.selectors = {
                cacheLength: 50,
                createPseudo: ce,
                match: X,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {dir: "parentNode", first: !0},
                    " ": {dir: "parentNode"},
                    "+": {dir: "previousSibling", first: !0},
                    "~": {dir: "previousSibling"}
                },
                preFilter: {
                    ATTR: function (e) {
                        return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    }, CHILD: function (e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ae.error(e[0]), e
                    }, PSEUDO: function (e) {
                        var t, n = !e[6] && e[2];
                        return X.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && z.test(n) && (t = s(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (e) {
                        var t = e.replace(te, ne).toLowerCase();
                        return "*" === e ? function () {
                            return !0
                        } : function (e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    }, CLASS: function (e) {
                        var t = T[e + " "];
                        return t || (t = new RegExp("(^|" + H + ")" + e + "(" + H + "|$)")) && T(e, (function (e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        }))
                    }, ATTR: function (e, t, n) {
                        return function (i) {
                            var r = ae.attr(i, e);
                            return null == r ? "!=" === t : !t || (r += "", "=" === t ? r === n : "!=" === t ? r !== n : "^=" === t ? n && 0 === r.indexOf(n) : "*=" === t ? n && r.indexOf(n) > -1 : "$=" === t ? n && r.slice(-n.length) === n : "~=" === t ? (" " + r.replace(B, " ") + " ").indexOf(n) > -1 : "|=" === t && (r === n || r.slice(0, n.length + 1) === n + "-"))
                        }
                    }, CHILD: function (e, t, n, i, r) {
                        var o = "nth" !== e.slice(0, 3), s = "last" !== e.slice(-4), a = "of-type" === t;
                        return 1 === i && 0 === r ? function (e) {
                            return !!e.parentNode
                        } : function (t, n, l) {
                            var c, u, f, d, h, p, g = o !== s ? "nextSibling" : "previousSibling", m = t.parentNode,
                                v = a && t.nodeName.toLowerCase(), y = !l && !a, b = !1;
                            if (m) {
                                if (o) {
                                    for (; g;) {
                                        for (d = t; d = d[g];) if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                        p = g = "only" === e && !p && "nextSibling"
                                    }
                                    return !0
                                }
                                if (p = [s ? m.firstChild : m.lastChild], s && y) {
                                    for (b = (h = (c = (u = (f = (d = m)[_] || (d[_] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === x && c[1]) && c[2], d = h && m.childNodes[h]; d = ++h && d && d[g] || (b = h = 0) || p.pop();) if (1 === d.nodeType && ++b && d === t) {
                                        u[e] = [x, h, b];
                                        break
                                    }
                                } else if (y && (b = h = (c = (u = (f = (d = t)[_] || (d[_] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === x && c[1]), !1 === b) for (; (d = ++h && d && d[g] || (b = h = 0) || p.pop()) && ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++b || (y && ((u = (f = d[_] || (d[_] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] = [x, b]), d !== t));) ;
                                return (b -= r) === i || b % i == 0 && b / i >= 0
                            }
                        }
                    }, PSEUDO: function (e, t) {
                        var n,
                            r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
                        return r[_] ? r(t) : r.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? ce((function (e, n) {
                            for (var i, o = r(e, t), s = o.length; s--;) e[i = P(e, o[s])] = !(n[i] = o[s])
                        })) : function (e) {
                            return r(e, 0, n)
                        }) : r
                    }
                },
                pseudos: {
                    not: ce((function (e) {
                        var t = [], n = [], i = a(e.replace(W, "$1"));
                        return i[_] ? ce((function (e, t, n, r) {
                            for (var o, s = i(e, null, r, []), a = e.length; a--;) (o = s[a]) && (e[a] = !(t[a] = o))
                        })) : function (e, r, o) {
                            return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop()
                        }
                    })), has: ce((function (e) {
                        return function (t) {
                            return ae(e, t).length > 0
                        }
                    })), contains: ce((function (e) {
                        return e = e.replace(te, ne), function (t) {
                            return (t.textContent || r(t)).indexOf(e) > -1
                        }
                    })), lang: ce((function (e) {
                        return V.test(e || "") || ae.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(), function (t) {
                            var n;
                            do {
                                if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                            } while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                    })), target: function (t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    }, root: function (e) {
                        return e === p
                    }, focus: function (e) {
                        return e === h.activeElement && (!h.hasFocus || h.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    }, enabled: ge(!1), disabled: ge(!0), checked: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    }, selected: function (e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    }, empty: function (e) {
                        for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                        return !0
                    }, parent: function (e) {
                        return !i.pseudos.empty(e)
                    }, header: function (e) {
                        return G.test(e.nodeName)
                    }, input: function (e) {
                        return K.test(e.nodeName)
                    }, button: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    }, text: function (e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    }, first: me((function () {
                        return [0]
                    })), last: me((function (e, t) {
                        return [t - 1]
                    })), eq: me((function (e, t, n) {
                        return [n < 0 ? n + t : n]
                    })), even: me((function (e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    })), odd: me((function (e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    })), lt: me((function (e, t, n) {
                        for (var i = n < 0 ? n + t : n > t ? t : n; --i >= 0;) e.push(i);
                        return e
                    })), gt: me((function (e, t, n) {
                        for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                        return e
                    }))
                }
            }).pseudos.nth = i.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) i.pseudos[t] = he(t);
            for (t in {submit: !0, reset: !0}) i.pseudos[t] = pe(t);

            function ye() {
            }

            function be(e) {
                for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
                return i
            }

            function _e(e, t, n) {
                var i = t.dir, r = t.next, o = r || i, s = n && "parentNode" === o, a = E++;
                return t.first ? function (t, n, r) {
                    for (; t = t[i];) if (1 === t.nodeType || s) return e(t, n, r);
                    return !1
                } : function (t, n, l) {
                    var c, u, f, d = [x, a];
                    if (l) {
                        for (; t = t[i];) if ((1 === t.nodeType || s) && e(t, n, l)) return !0
                    } else for (; t = t[i];) if (1 === t.nodeType || s) if (u = (f = t[_] || (t[_] = {}))[t.uniqueID] || (f[t.uniqueID] = {}), r && r === t.nodeName.toLowerCase()) t = t[i] || t; else {
                        if ((c = u[o]) && c[0] === x && c[1] === a) return d[2] = c[2];
                        if (u[o] = d, d[2] = e(t, n, l)) return !0
                    }
                    return !1
                }
            }

            function we(e) {
                return e.length > 1 ? function (t, n, i) {
                    for (var r = e.length; r--;) if (!e[r](t, n, i)) return !1;
                    return !0
                } : e[0]
            }

            function xe(e, t, n, i, r) {
                for (var o, s = [], a = 0, l = e.length, c = null != t; a < l; a++) (o = e[a]) && (n && !n(o, i, r) || (s.push(o), c && t.push(a)));
                return s
            }

            function Ee(e, t, n, i, r, o) {
                return i && !i[_] && (i = Ee(i)), r && !r[_] && (r = Ee(r, o)), ce((function (o, s, a, l) {
                    var c, u, f, d = [], h = [], p = s.length, g = o || function (e, t, n) {
                            for (var i = 0, r = t.length; i < r; i++) ae(e, t[i], n);
                            return n
                        }(t || "*", a.nodeType ? [a] : a, []), m = !e || !o && t ? g : xe(g, d, e, a, l),
                        v = n ? r || (o ? e : p || i) ? [] : s : m;
                    if (n && n(m, v, a, l), i) for (c = xe(v, h), i(c, [], a, l), u = c.length; u--;) (f = c[u]) && (v[h[u]] = !(m[h[u]] = f));
                    if (o) {
                        if (r || e) {
                            if (r) {
                                for (c = [], u = v.length; u--;) (f = v[u]) && c.push(m[u] = f);
                                r(null, v = [], c, l)
                            }
                            for (u = v.length; u--;) (f = v[u]) && (c = r ? P(o, f) : d[u]) > -1 && (o[c] = !(s[c] = f))
                        }
                    } else v = xe(v === s ? v.splice(p, v.length) : v), r ? r(null, s, v, l) : L.apply(s, v)
                }))
            }

            function Te(e) {
                for (var t, n, r, o = e.length, s = i.relative[e[0].type], a = s || i.relative[" "], l = s ? 1 : 0, u = _e((function (e) {
                    return e === t
                }), a, !0), f = _e((function (e) {
                    return P(t, e) > -1
                }), a, !0), d = [function (e, n, i) {
                    var r = !s && (i || n !== c) || ((t = n).nodeType ? u(e, n, i) : f(e, n, i));
                    return t = null, r
                }]; l < o; l++) if (n = i.relative[e[l].type]) d = [_e(we(d), n)]; else {
                    if ((n = i.filter[e[l].type].apply(null, e[l].matches))[_]) {
                        for (r = ++l; r < o && !i.relative[e[r].type]; r++) ;
                        return Ee(l > 1 && we(d), l > 1 && be(e.slice(0, l - 1).concat({value: " " === e[l - 2].type ? "*" : ""})).replace(W, "$1"), n, l < r && Te(e.slice(l, r)), r < o && Te(e = e.slice(r)), r < o && be(e))
                    }
                    d.push(n)
                }
                return we(d)
            }

            return ye.prototype = i.filters = i.pseudos, i.setFilters = new ye, s = ae.tokenize = function (e, t) {
                var n, r, o, s, a, l, c, u = C[e + " "];
                if (u) return t ? 0 : u.slice(0);
                for (a = e, l = [], c = i.preFilter; a;) {
                    for (s in n && !(r = U.exec(a)) || (r && (a = a.slice(r[0].length) || a), l.push(o = [])), n = !1, (r = Q.exec(a)) && (n = r.shift(), o.push({
                        value: n,
                        type: r[0].replace(W, " ")
                    }), a = a.slice(n.length)), i.filter) !(r = X[s].exec(a)) || c[s] && !(r = c[s](r)) || (n = r.shift(), o.push({
                        value: n,
                        type: s,
                        matches: r
                    }), a = a.slice(n.length));
                    if (!n) break
                }
                return t ? a.length : a ? ae.error(e) : C(e, l).slice(0)
            }, a = ae.compile = function (e, t) {
                var n, r = [], o = [], a = S[e + " "];
                if (!a) {
                    for (t || (t = s(e)), n = t.length; n--;) (a = Te(t[n]))[_] ? r.push(a) : o.push(a);
                    (a = S(e, function (e, t) {
                        var n = t.length > 0, r = e.length > 0, o = function (o, s, a, l, u) {
                            var f, p, m, v = 0, y = "0", b = o && [], _ = [], w = c, E = o || r && i.find.TAG("*", u),
                                T = x += null == w ? 1 : Math.random() || .1, C = E.length;
                            for (u && (c = s === h || s || u); y !== C && null != (f = E[y]); y++) {
                                if (r && f) {
                                    for (p = 0, s || f.ownerDocument === h || (d(f), a = !g); m = e[p++];) if (m(f, s || h, a)) {
                                        l.push(f);
                                        break
                                    }
                                    u && (x = T)
                                }
                                n && ((f = !m && f) && v--, o && b.push(f))
                            }
                            if (v += y, n && y !== v) {
                                for (p = 0; m = t[p++];) m(b, _, s, a);
                                if (o) {
                                    if (v > 0) for (; y--;) b[y] || _[y] || (_[y] = j.call(l));
                                    _ = xe(_)
                                }
                                L.apply(l, _), u && !o && _.length > 0 && v + t.length > 1 && ae.uniqueSort(l)
                            }
                            return u && (x = T, c = w), b
                        };
                        return n ? ce(o) : o
                    }(o, r))).selector = e
                }
                return a
            }, l = ae.select = function (e, t, n, r) {
                var o, l, c, u, f, d = "function" == typeof e && e, h = !r && s(e = d.selector || e);
                if (n = n || [], 1 === h.length) {
                    if ((l = h[0] = h[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && 9 === t.nodeType && g && i.relative[l[1].type]) {
                        if (!(t = (i.find.ID(c.matches[0].replace(te, ne), t) || [])[0])) return n;
                        d && (t = t.parentNode), e = e.slice(l.shift().value.length)
                    }
                    for (o = X.needsContext.test(e) ? 0 : l.length; o-- && (c = l[o], !i.relative[u = c.type]);) if ((f = i.find[u]) && (r = f(c.matches[0].replace(te, ne), ee.test(l[0].type) && ve(t.parentNode) || t))) {
                        if (l.splice(o, 1), !(e = r.length && be(l))) return L.apply(n, r), n;
                        break
                    }
                }
                return (d || a(e, h))(r, t, !g, n, !t || ee.test(e) && ve(t.parentNode) || t), n
            }, n.sortStable = _.split("").sort(D).join("") === _, n.detectDuplicates = !!f, d(), n.sortDetached = ue((function (e) {
                return 1 & e.compareDocumentPosition(h.createElement("fieldset"))
            })), ue((function (e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            })) || fe("type|href|height|width", (function (e, t, n) {
                if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            })), n.attributes && ue((function (e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            })) || fe("value", (function (e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
            })), ue((function (e) {
                return null == e.getAttribute("disabled")
            })) || fe(q, (function (e, t, n) {
                var i;
                if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            })), ae
        }(n);
        E.find = S, E.expr = S.selectors, E.expr[":"] = E.expr.pseudos, E.uniqueSort = E.unique = S.uniqueSort, E.text = S.getText, E.isXMLDoc = S.isXML, E.contains = S.contains, E.escapeSelector = S.escape;
        var k = function (e, t, n) {
            for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
                if (r && E(e).is(n)) break;
                i.push(e)
            }
            return i
        }, D = function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }, N = E.expr.match.needsContext;

        function A(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }

        var j = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

        function O(e, t, n) {
            return y(t) ? E.grep(e, (function (e, i) {
                return !!t.call(e, i, e) !== n
            })) : t.nodeType ? E.grep(e, (function (e) {
                return e === t !== n
            })) : "string" != typeof t ? E.grep(e, (function (e) {
                return f.call(t, e) > -1 !== n
            })) : E.filter(t, e, n)
        }

        E.filter = function (e, t, n) {
            var i = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? E.find.matchesSelector(i, e) ? [i] : [] : E.find.matches(e, E.grep(t, (function (e) {
                return 1 === e.nodeType
            })))
        }, E.fn.extend({
            find: function (e) {
                var t, n, i = this.length, r = this;
                if ("string" != typeof e) return this.pushStack(E(e).filter((function () {
                    for (t = 0; t < i; t++) if (E.contains(r[t], this)) return !0
                })));
                for (n = this.pushStack([]), t = 0; t < i; t++) E.find(e, r[t], n);
                return i > 1 ? E.uniqueSort(n) : n
            }, filter: function (e) {
                return this.pushStack(O(this, e || [], !1))
            }, not: function (e) {
                return this.pushStack(O(this, e || [], !0))
            }, is: function (e) {
                return !!O(this, "string" == typeof e && N.test(e) ? E(e) : e || [], !1).length
            }
        });
        var L, I = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (E.fn.init = function (e, t, n) {
            var i, r;
            if (!e) return this;
            if (n = n || L, "string" == typeof e) {
                if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : I.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (i[1]) {
                    if (t = t instanceof E ? t[0] : t, E.merge(this, E.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : s, !0)), j.test(i[1]) && E.isPlainObject(t)) for (i in t) y(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                    return this
                }
                return (r = s.getElementById(i[2])) && (this[0] = r, this.length = 1), this
            }
            return e.nodeType ? (this[0] = e, this.length = 1, this) : y(e) ? void 0 !== n.ready ? n.ready(e) : e(E) : E.makeArray(e, this)
        }).prototype = E.fn, L = E(s);
        var P = /^(?:parents|prev(?:Until|All))/, q = {children: !0, contents: !0, next: !0, prev: !0};

        function H(e, t) {
            for (; (e = e[t]) && 1 !== e.nodeType;) ;
            return e
        }

        E.fn.extend({
            has: function (e) {
                var t = E(e, this), n = t.length;
                return this.filter((function () {
                    for (var e = 0; e < n; e++) if (E.contains(this, t[e])) return !0
                }))
            }, closest: function (e, t) {
                var n, i = 0, r = this.length, o = [], s = "string" != typeof e && E(e);
                if (!N.test(e)) for (; i < r; i++) for (n = this[i]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && E.find.matchesSelector(n, e))) {
                    o.push(n);
                    break
                }
                return this.pushStack(o.length > 1 ? E.uniqueSort(o) : o)
            }, index: function (e) {
                return e ? "string" == typeof e ? f.call(E(e), this[0]) : f.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            }, add: function (e, t) {
                return this.pushStack(E.uniqueSort(E.merge(this.get(), E(e, t))))
            }, addBack: function (e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), E.each({
            parent: function (e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            }, parents: function (e) {
                return k(e, "parentNode")
            }, parentsUntil: function (e, t, n) {
                return k(e, "parentNode", n)
            }, next: function (e) {
                return H(e, "nextSibling")
            }, prev: function (e) {
                return H(e, "previousSibling")
            }, nextAll: function (e) {
                return k(e, "nextSibling")
            }, prevAll: function (e) {
                return k(e, "previousSibling")
            }, nextUntil: function (e, t, n) {
                return k(e, "nextSibling", n)
            }, prevUntil: function (e, t, n) {
                return k(e, "previousSibling", n)
            }, siblings: function (e) {
                return D((e.parentNode || {}).firstChild, e)
            }, children: function (e) {
                return D(e.firstChild)
            }, contents: function (e) {
                return void 0 !== e.contentDocument ? e.contentDocument : (A(e, "template") && (e = e.content || e), E.merge([], e.childNodes))
            }
        }, (function (e, t) {
            E.fn[e] = function (n, i) {
                var r = E.map(this, t, n);
                return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = E.filter(i, r)), this.length > 1 && (q[e] || E.uniqueSort(r), P.test(e) && r.reverse()), this.pushStack(r)
            }
        }));
        var R = /[^\x20\t\r\n\f]+/g;

        function M(e) {
            return e
        }

        function F(e) {
            throw e
        }

        function B(e, t, n, i) {
            var r;
            try {
                e && y(r = e.promise) ? r.call(e).done(t).fail(n) : e && y(r = e.then) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i))
            } catch (e) {
                n.apply(void 0, [e])
            }
        }

        E.Callbacks = function (e) {
            e = "string" == typeof e ? function (e) {
                var t = {};
                return E.each(e.match(R) || [], (function (e, n) {
                    t[n] = !0
                })), t
            }(e) : E.extend({}, e);
            var t, n, i, r, o = [], s = [], a = -1, l = function () {
                for (r = r || e.once, i = t = !0; s.length; a = -1) for (n = s.shift(); ++a < o.length;) !1 === o[a].apply(n[0], n[1]) && e.stopOnFalse && (a = o.length, n = !1);
                e.memory || (n = !1), t = !1, r && (o = n ? [] : "")
            }, c = {
                add: function () {
                    return o && (n && !t && (a = o.length - 1, s.push(n)), function t(n) {
                        E.each(n, (function (n, i) {
                            y(i) ? e.unique && c.has(i) || o.push(i) : i && i.length && "string" !== x(i) && t(i)
                        }))
                    }(arguments), n && !t && l()), this
                }, remove: function () {
                    return E.each(arguments, (function (e, t) {
                        for (var n; (n = E.inArray(t, o, n)) > -1;) o.splice(n, 1), n <= a && a--
                    })), this
                }, has: function (e) {
                    return e ? E.inArray(e, o) > -1 : o.length > 0
                }, empty: function () {
                    return o && (o = []), this
                }, disable: function () {
                    return r = s = [], o = n = "", this
                }, disabled: function () {
                    return !o
                }, lock: function () {
                    return r = s = [], n || t || (o = n = ""), this
                }, locked: function () {
                    return !!r
                }, fireWith: function (e, n) {
                    return r || (n = [e, (n = n || []).slice ? n.slice() : n], s.push(n), t || l()), this
                }, fire: function () {
                    return c.fireWith(this, arguments), this
                }, fired: function () {
                    return !!i
                }
            };
            return c
        }, E.extend({
            Deferred: function (e) {
                var t = [["notify", "progress", E.Callbacks("memory"), E.Callbacks("memory"), 2], ["resolve", "done", E.Callbacks("once memory"), E.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", E.Callbacks("once memory"), E.Callbacks("once memory"), 1, "rejected"]],
                    i = "pending", r = {
                        state: function () {
                            return i
                        }, always: function () {
                            return o.done(arguments).fail(arguments), this
                        }, catch: function (e) {
                            return r.then(null, e)
                        }, pipe: function () {
                            var e = arguments;
                            return E.Deferred((function (n) {
                                E.each(t, (function (t, i) {
                                    var r = y(e[i[4]]) && e[i[4]];
                                    o[i[1]]((function () {
                                        var e = r && r.apply(this, arguments);
                                        e && y(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[i[0] + "With"](this, r ? [e] : arguments)
                                    }))
                                })), e = null
                            })).promise()
                        }, then: function (e, i, r) {
                            var o = 0;

                            function s(e, t, i, r) {
                                return function () {
                                    var a = this, l = arguments, c = function () {
                                        var n, c;
                                        if (!(e < o)) {
                                            if ((n = i.apply(a, l)) === t.promise()) throw new TypeError("Thenable self-resolution");
                                            c = n && ("object" == typeof n || "function" == typeof n) && n.then, y(c) ? r ? c.call(n, s(o, t, M, r), s(o, t, F, r)) : (o++, c.call(n, s(o, t, M, r), s(o, t, F, r), s(o, t, M, t.notifyWith))) : (i !== M && (a = void 0, l = [n]), (r || t.resolveWith)(a, l))
                                        }
                                    }, u = r ? c : function () {
                                        try {
                                            c()
                                        } catch (n) {
                                            E.Deferred.exceptionHook && E.Deferred.exceptionHook(n, u.stackTrace), e + 1 >= o && (i !== F && (a = void 0, l = [n]), t.rejectWith(a, l))
                                        }
                                    };
                                    e ? u() : (E.Deferred.getStackHook && (u.stackTrace = E.Deferred.getStackHook()), n.setTimeout(u))
                                }
                            }

                            return E.Deferred((function (n) {
                                t[0][3].add(s(0, n, y(r) ? r : M, n.notifyWith)), t[1][3].add(s(0, n, y(e) ? e : M)), t[2][3].add(s(0, n, y(i) ? i : F))
                            })).promise()
                        }, promise: function (e) {
                            return null != e ? E.extend(e, r) : r
                        }
                    }, o = {};
                return E.each(t, (function (e, n) {
                    var s = n[2], a = n[5];
                    r[n[1]] = s.add, a && s.add((function () {
                        i = a
                    }), t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), s.add(n[3].fire), o[n[0]] = function () {
                        return o[n[0] + "With"](this === o ? void 0 : this, arguments), this
                    }, o[n[0] + "With"] = s.fireWith
                })), r.promise(o), e && e.call(o, o), o
            }, when: function (e) {
                var t = arguments.length, n = t, i = Array(n), r = l.call(arguments), o = E.Deferred(),
                    s = function (e) {
                        return function (n) {
                            i[e] = this, r[e] = arguments.length > 1 ? l.call(arguments) : n, --t || o.resolveWith(i, r)
                        }
                    };
                if (t <= 1 && (B(e, o.done(s(n)).resolve, o.reject, !t), "pending" === o.state() || y(r[n] && r[n].then))) return o.then();
                for (; n--;) B(r[n], s(n), o.reject);
                return o.promise()
            }
        });
        var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        E.Deferred.exceptionHook = function (e, t) {
            n.console && n.console.warn && e && W.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
        }, E.readyException = function (e) {
            n.setTimeout((function () {
                throw e
            }))
        };
        var U = E.Deferred();

        function Q() {
            s.removeEventListener("DOMContentLoaded", Q), n.removeEventListener("load", Q), E.ready()
        }

        E.fn.ready = function (e) {
            return U.then(e).catch((function (e) {
                E.readyException(e)
            })), this
        }, E.extend({
            isReady: !1, readyWait: 1, ready: function (e) {
                (!0 === e ? --E.readyWait : E.isReady) || (E.isReady = !0, !0 !== e && --E.readyWait > 0 || U.resolveWith(s, [E]))
            }
        }), E.ready.then = U.then, "complete" === s.readyState || "loading" !== s.readyState && !s.documentElement.doScroll ? n.setTimeout(E.ready) : (s.addEventListener("DOMContentLoaded", Q), n.addEventListener("load", Q));
        var $ = function (e, t, n, i, r, o, s) {
            var a = 0, l = e.length, c = null == n;
            if ("object" === x(n)) for (a in r = !0, n) $(e, t, a, n[a], !0, o, s); else if (void 0 !== i && (r = !0, y(i) || (s = !0), c && (s ? (t.call(e, i), t = null) : (c = t, t = function (e, t, n) {
                return c.call(E(e), n)
            })), t)) for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
            return r ? e : c ? t.call(e) : l ? t(e[0], n) : o
        }, z = /^-ms-/, V = /-([a-z])/g;

        function X(e, t) {
            return t.toUpperCase()
        }

        function Y(e) {
            return e.replace(z, "ms-").replace(V, X)
        }

        var K = function (e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };

        function G() {
            this.expando = E.expando + G.uid++
        }

        G.uid = 1, G.prototype = {
            cache: function (e) {
                var t = e[this.expando];
                return t || (t = {}, K(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0
                }))), t
            }, set: function (e, t, n) {
                var i, r = this.cache(e);
                if ("string" == typeof t) r[Y(t)] = n; else for (i in t) r[Y(i)] = t[i];
                return r
            }, get: function (e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][Y(t)]
            }, access: function (e, t, n) {
                return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
            }, remove: function (e, t) {
                var n, i = e[this.expando];
                if (void 0 !== i) {
                    if (void 0 !== t) {
                        n = (t = Array.isArray(t) ? t.map(Y) : (t = Y(t)) in i ? [t] : t.match(R) || []).length;
                        for (; n--;) delete i[t[n]]
                    }
                    (void 0 === t || E.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                }
            }, hasData: function (e) {
                var t = e[this.expando];
                return void 0 !== t && !E.isEmptyObject(t)
            }
        };
        var J = new G, Z = new G, ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, te = /[A-Z]/g;

        function ne(e, t, n) {
            var i;
            if (void 0 === n && 1 === e.nodeType) if (i = "data-" + t.replace(te, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(i))) {
                try {
                    n = function (e) {
                        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : ee.test(e) ? JSON.parse(e) : e)
                    }(n)
                } catch (e) {
                }
                Z.set(e, t, n)
            } else n = void 0;
            return n
        }

        E.extend({
            hasData: function (e) {
                return Z.hasData(e) || J.hasData(e)
            }, data: function (e, t, n) {
                return Z.access(e, t, n)
            }, removeData: function (e, t) {
                Z.remove(e, t)
            }, _data: function (e, t, n) {
                return J.access(e, t, n)
            }, _removeData: function (e, t) {
                J.remove(e, t)
            }
        }), E.fn.extend({
            data: function (e, t) {
                var n, i, r, o = this[0], s = o && o.attributes;
                if (void 0 === e) {
                    if (this.length && (r = Z.get(o), 1 === o.nodeType && !J.get(o, "hasDataAttrs"))) {
                        for (n = s.length; n--;) s[n] && 0 === (i = s[n].name).indexOf("data-") && (i = Y(i.slice(5)), ne(o, i, r[i]));
                        J.set(o, "hasDataAttrs", !0)
                    }
                    return r
                }
                return "object" == typeof e ? this.each((function () {
                    Z.set(this, e)
                })) : $(this, (function (t) {
                    var n;
                    if (o && void 0 === t) return void 0 !== (n = Z.get(o, e)) || void 0 !== (n = ne(o, e)) ? n : void 0;
                    this.each((function () {
                        Z.set(this, e, t)
                    }))
                }), null, t, arguments.length > 1, null, !0)
            }, removeData: function (e) {
                return this.each((function () {
                    Z.remove(this, e)
                }))
            }
        }), E.extend({
            queue: function (e, t, n) {
                var i;
                if (e) return t = (t || "fx") + "queue", i = J.get(e, t), n && (!i || Array.isArray(n) ? i = J.access(e, t, E.makeArray(n)) : i.push(n)), i || []
            }, dequeue: function (e, t) {
                t = t || "fx";
                var n = E.queue(e, t), i = n.length, r = n.shift(), o = E._queueHooks(e, t);
                "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, (function () {
                    E.dequeue(e, t)
                }), o)), !i && o && o.empty.fire()
            }, _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return J.get(e, n) || J.access(e, n, {
                    empty: E.Callbacks("once memory").add((function () {
                        J.remove(e, [t + "queue", n])
                    }))
                })
            }
        }), E.fn.extend({
            queue: function (e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? E.queue(this[0], e) : void 0 === t ? this : this.each((function () {
                    var n = E.queue(this, e, t);
                    E._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && E.dequeue(this, e)
                }))
            }, dequeue: function (e) {
                return this.each((function () {
                    E.dequeue(this, e)
                }))
            }, clearQueue: function (e) {
                return this.queue(e || "fx", [])
            }, promise: function (e, t) {
                var n, i = 1, r = E.Deferred(), o = this, s = this.length, a = function () {
                    --i || r.resolveWith(o, [o])
                };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) (n = J.get(o[s], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
                return a(), r.promise(t)
            }
        });
        var ie = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            re = new RegExp("^(?:([+-])=|)(" + ie + ")([a-z%]*)$", "i"), oe = ["Top", "Right", "Bottom", "Left"],
            se = s.documentElement, ae = function (e) {
                return E.contains(e.ownerDocument, e)
            }, le = {composed: !0};
        se.getRootNode && (ae = function (e) {
            return E.contains(e.ownerDocument, e) || e.getRootNode(le) === e.ownerDocument
        });
        var ce = function (e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && ae(e) && "none" === E.css(e, "display")
        }, ue = function (e, t, n, i) {
            var r, o, s = {};
            for (o in t) s[o] = e.style[o], e.style[o] = t[o];
            for (o in r = n.apply(e, i || []), t) e.style[o] = s[o];
            return r
        };

        function fe(e, t, n, i) {
            var r, o, s = 20, a = i ? function () {
                    return i.cur()
                } : function () {
                    return E.css(e, t, "")
                }, l = a(), c = n && n[3] || (E.cssNumber[t] ? "" : "px"),
                u = e.nodeType && (E.cssNumber[t] || "px" !== c && +l) && re.exec(E.css(e, t));
            if (u && u[3] !== c) {
                for (l /= 2, c = c || u[3], u = +l || 1; s--;) E.style(e, t, u + c), (1 - o) * (1 - (o = a() / l || .5)) <= 0 && (s = 0), u /= o;
                u *= 2, E.style(e, t, u + c), n = n || []
            }
            return n && (u = +u || +l || 0, r = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = r)), r
        }

        var de = {};

        function he(e) {
            var t, n = e.ownerDocument, i = e.nodeName, r = de[i];
            return r || (t = n.body.appendChild(n.createElement(i)), r = E.css(t, "display"), t.parentNode.removeChild(t), "none" === r && (r = "block"), de[i] = r, r)
        }

        function pe(e, t) {
            for (var n, i, r = [], o = 0, s = e.length; o < s; o++) (i = e[o]).style && (n = i.style.display, t ? ("none" === n && (r[o] = J.get(i, "display") || null, r[o] || (i.style.display = "")), "" === i.style.display && ce(i) && (r[o] = he(i))) : "none" !== n && (r[o] = "none", J.set(i, "display", n)));
            for (o = 0; o < s; o++) null != r[o] && (e[o].style.display = r[o]);
            return e
        }

        E.fn.extend({
            show: function () {
                return pe(this, !0)
            }, hide: function () {
                return pe(this)
            }, toggle: function (e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function () {
                    ce(this) ? E(this).show() : E(this).hide()
                }))
            }
        });
        var ge = /^(?:checkbox|radio)$/i, me = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            ve = /^$|^module$|\/(?:java|ecma)script/i, ye = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };

        function be(e, t) {
            var n;
            return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? E.merge([e], n) : n
        }

        function _e(e, t) {
            for (var n = 0, i = e.length; n < i; n++) J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"))
        }

        ye.optgroup = ye.option, ye.tbody = ye.tfoot = ye.colgroup = ye.caption = ye.thead, ye.th = ye.td;
        var we, xe, Ee = /<|&#?\w+;/;

        function Te(e, t, n, i, r) {
            for (var o, s, a, l, c, u, f = t.createDocumentFragment(), d = [], h = 0, p = e.length; h < p; h++) if ((o = e[h]) || 0 === o) if ("object" === x(o)) E.merge(d, o.nodeType ? [o] : o); else if (Ee.test(o)) {
                for (s = s || f.appendChild(t.createElement("div")), a = (me.exec(o) || ["", ""])[1].toLowerCase(), l = ye[a] || ye._default, s.innerHTML = l[1] + E.htmlPrefilter(o) + l[2], u = l[0]; u--;) s = s.lastChild;
                E.merge(d, s.childNodes), (s = f.firstChild).textContent = ""
            } else d.push(t.createTextNode(o));
            for (f.textContent = "", h = 0; o = d[h++];) if (i && E.inArray(o, i) > -1) r && r.push(o); else if (c = ae(o), s = be(f.appendChild(o), "script"), c && _e(s), n) for (u = 0; o = s[u++];) ve.test(o.type || "") && n.push(o);
            return f
        }

        we = s.createDocumentFragment().appendChild(s.createElement("div")), (xe = s.createElement("input")).setAttribute("type", "radio"), xe.setAttribute("checked", "checked"), xe.setAttribute("name", "t"), we.appendChild(xe), v.checkClone = we.cloneNode(!0).cloneNode(!0).lastChild.checked, we.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!we.cloneNode(!0).lastChild.defaultValue;
        var Ce = /^key/, Se = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, ke = /^([^.]*)(?:\.(.+)|)/;

        function De() {
            return !0
        }

        function Ne() {
            return !1
        }

        function Ae(e, t) {
            return e === function () {
                try {
                    return s.activeElement
                } catch (e) {
                }
            }() == ("focus" === t)
        }

        function je(e, t, n, i, r, o) {
            var s, a;
            if ("object" == typeof t) {
                for (a in "string" != typeof n && (i = i || n, n = void 0), t) je(e, a, n, i, t[a], o);
                return e
            }
            if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = Ne; else if (!r) return e;
            return 1 === o && (s = r, (r = function (e) {
                return E().off(e), s.apply(this, arguments)
            }).guid = s.guid || (s.guid = E.guid++)), e.each((function () {
                E.event.add(this, t, r, i, n)
            }))
        }

        function Oe(e, t, n) {
            n ? (J.set(e, t, !1), E.event.add(e, t, {
                namespace: !1, handler: function (e) {
                    var i, r, o = J.get(this, t);
                    if (1 & e.isTrigger && this[t]) {
                        if (o.length) (E.event.special[t] || {}).delegateType && e.stopPropagation(); else if (o = l.call(arguments), J.set(this, t, o), i = n(this, t), this[t](), o !== (r = J.get(this, t)) || i ? J.set(this, t, !1) : r = {}, o !== r) return e.stopImmediatePropagation(), e.preventDefault(), r.value
                    } else o.length && (J.set(this, t, {value: E.event.trigger(E.extend(o[0], E.Event.prototype), o.slice(1), this)}), e.stopImmediatePropagation())
                }
            })) : void 0 === J.get(e, t) && E.event.add(e, t, De)
        }

        E.event = {
            global: {}, add: function (e, t, n, i, r) {
                var o, s, a, l, c, u, f, d, h, p, g, m = J.get(e);
                if (m) for (n.handler && (n = (o = n).handler, r = o.selector), r && E.find.matchesSelector(se, r), n.guid || (n.guid = E.guid++), (l = m.events) || (l = m.events = {}), (s = m.handle) || (s = m.handle = function (t) {
                    return void 0 !== E && E.event.triggered !== t.type ? E.event.dispatch.apply(e, arguments) : void 0
                }), c = (t = (t || "").match(R) || [""]).length; c--;) h = g = (a = ke.exec(t[c]) || [])[1], p = (a[2] || "").split(".").sort(), h && (f = E.event.special[h] || {}, h = (r ? f.delegateType : f.bindType) || h, f = E.event.special[h] || {}, u = E.extend({
                    type: h,
                    origType: g,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && E.expr.match.needsContext.test(r),
                    namespace: p.join(".")
                }, o), (d = l[h]) || ((d = l[h] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, i, p, s) || e.addEventListener && e.addEventListener(h, s)), f.add && (f.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), r ? d.splice(d.delegateCount++, 0, u) : d.push(u), E.event.global[h] = !0)
            }, remove: function (e, t, n, i, r) {
                var o, s, a, l, c, u, f, d, h, p, g, m = J.hasData(e) && J.get(e);
                if (m && (l = m.events)) {
                    for (c = (t = (t || "").match(R) || [""]).length; c--;) if (h = g = (a = ke.exec(t[c]) || [])[1], p = (a[2] || "").split(".").sort(), h) {
                        for (f = E.event.special[h] || {}, d = l[h = (i ? f.delegateType : f.bindType) || h] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = d.length; o--;) u = d[o], !r && g !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (d.splice(o, 1), u.selector && d.delegateCount--, f.remove && f.remove.call(e, u));
                        s && !d.length && (f.teardown && !1 !== f.teardown.call(e, p, m.handle) || E.removeEvent(e, h, m.handle), delete l[h])
                    } else for (h in l) E.event.remove(e, h + t[c], n, i, !0);
                    E.isEmptyObject(l) && J.remove(e, "handle events")
                }
            }, dispatch: function (e) {
                var t, n, i, r, o, s, a = E.event.fix(e), l = new Array(arguments.length),
                    c = (J.get(this, "events") || {})[a.type] || [], u = E.event.special[a.type] || {};
                for (l[0] = a, t = 1; t < arguments.length; t++) l[t] = arguments[t];
                if (a.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, a)) {
                    for (s = E.event.handlers.call(this, a, c), t = 0; (r = s[t++]) && !a.isPropagationStopped();) for (a.currentTarget = r.elem, n = 0; (o = r.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !1 !== o.namespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o, a.data = o.data, void 0 !== (i = ((E.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, l)) && !1 === (a.result = i) && (a.preventDefault(), a.stopPropagation()));
                    return u.postDispatch && u.postDispatch.call(this, a), a.result
                }
            }, handlers: function (e, t) {
                var n, i, r, o, s, a = [], l = t.delegateCount, c = e.target;
                if (l && c.nodeType && !("click" === e.type && e.button >= 1)) for (; c !== this; c = c.parentNode || this) if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                    for (o = [], s = {}, n = 0; n < l; n++) void 0 === s[r = (i = t[n]).selector + " "] && (s[r] = i.needsContext ? E(r, this).index(c) > -1 : E.find(r, this, null, [c]).length), s[r] && o.push(i);
                    o.length && a.push({elem: c, handlers: o})
                }
                return c = this, l < t.length && a.push({elem: c, handlers: t.slice(l)}), a
            }, addProp: function (e, t) {
                Object.defineProperty(E.Event.prototype, e, {
                    enumerable: !0, configurable: !0, get: y(t) ? function () {
                        if (this.originalEvent) return t(this.originalEvent)
                    } : function () {
                        if (this.originalEvent) return this.originalEvent[e]
                    }, set: function (t) {
                        Object.defineProperty(this, e, {enumerable: !0, configurable: !0, writable: !0, value: t})
                    }
                })
            }, fix: function (e) {
                return e[E.expando] ? e : new E.Event(e)
            }, special: {
                load: {noBubble: !0}, click: {
                    setup: function (e) {
                        var t = this || e;
                        return ge.test(t.type) && t.click && A(t, "input") && Oe(t, "click", De), !1
                    }, trigger: function (e) {
                        var t = this || e;
                        return ge.test(t.type) && t.click && A(t, "input") && Oe(t, "click"), !0
                    }, _default: function (e) {
                        var t = e.target;
                        return ge.test(t.type) && t.click && A(t, "input") && J.get(t, "click") || A(t, "a")
                    }
                }, beforeunload: {
                    postDispatch: function (e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            }
        }, E.removeEvent = function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        }, E.Event = function (e, t) {
            if (!(this instanceof E.Event)) return new E.Event(e, t);
            e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? De : Ne, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && E.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[E.expando] = !0
        }, E.Event.prototype = {
            constructor: E.Event,
            isDefaultPrevented: Ne,
            isPropagationStopped: Ne,
            isImmediatePropagationStopped: Ne,
            isSimulated: !1,
            preventDefault: function () {
                var e = this.originalEvent;
                this.isDefaultPrevented = De, e && !this.isSimulated && e.preventDefault()
            },
            stopPropagation: function () {
                var e = this.originalEvent;
                this.isPropagationStopped = De, e && !this.isSimulated && e.stopPropagation()
            },
            stopImmediatePropagation: function () {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = De, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, E.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function (e) {
                var t = e.button;
                return null == e.which && Ce.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Se.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
            }
        }, E.event.addProp), E.each({focus: "focusin", blur: "focusout"}, (function (e, t) {
            E.event.special[e] = {
                setup: function () {
                    return Oe(this, e, Ae), !1
                }, trigger: function () {
                    return Oe(this, e), !0
                }, delegateType: t
            }
        })), E.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, (function (e, t) {
            E.event.special[e] = {
                delegateType: t, bindType: t, handle: function (e) {
                    var n, i = this, r = e.relatedTarget, o = e.handleObj;
                    return r && (r === i || E.contains(i, r)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
                }
            }
        })), E.fn.extend({
            on: function (e, t, n, i) {
                return je(this, e, t, n, i)
            }, one: function (e, t, n, i) {
                return je(this, e, t, n, i, 1)
            }, off: function (e, t, n) {
                var i, r;
                if (e && e.preventDefault && e.handleObj) return i = e.handleObj, E(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof e) {
                    for (r in e) this.off(r, t, e[r]);
                    return this
                }
                return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ne), this.each((function () {
                    E.event.remove(this, e, n, t)
                }))
            }
        });
        var Le = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
            Ie = /<script|<style|<link/i, Pe = /checked\s*(?:[^=]|=\s*.checked.)/i,
            qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

        function He(e, t) {
            return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && E(e).children("tbody")[0] || e
        }

        function Re(e) {
            return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
        }

        function Me(e) {
            return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
        }

        function Fe(e, t) {
            var n, i, r, o, s, a, l, c;
            if (1 === t.nodeType) {
                if (J.hasData(e) && (o = J.access(e), s = J.set(t, o), c = o.events)) for (r in delete s.handle, s.events = {}, c) for (n = 0, i = c[r].length; n < i; n++) E.event.add(t, r, c[r][n]);
                Z.hasData(e) && (a = Z.access(e), l = E.extend({}, a), Z.set(t, l))
            }
        }

        function Be(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && ge.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
        }

        function We(e, t, n, i) {
            t = c.apply([], t);
            var r, o, s, a, l, u, f = 0, d = e.length, h = d - 1, p = t[0], g = y(p);
            if (g || d > 1 && "string" == typeof p && !v.checkClone && Pe.test(p)) return e.each((function (r) {
                var o = e.eq(r);
                g && (t[0] = p.call(this, r, o.html())), We(o, t, n, i)
            }));
            if (d && (o = (r = Te(t, e[0].ownerDocument, !1, e, i)).firstChild, 1 === r.childNodes.length && (r = o), o || i)) {
                for (a = (s = E.map(be(r, "script"), Re)).length; f < d; f++) l = r, f !== h && (l = E.clone(l, !0, !0), a && E.merge(s, be(l, "script"))), n.call(e[f], l, f);
                if (a) for (u = s[s.length - 1].ownerDocument, E.map(s, Me), f = 0; f < a; f++) l = s[f], ve.test(l.type || "") && !J.access(l, "globalEval") && E.contains(u, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? E._evalUrl && !l.noModule && E._evalUrl(l.src, {nonce: l.nonce || l.getAttribute("nonce")}) : w(l.textContent.replace(qe, ""), l, u))
            }
            return e
        }

        function Ue(e, t, n) {
            for (var i, r = t ? E.filter(t, e) : e, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || E.cleanData(be(i)), i.parentNode && (n && ae(i) && _e(be(i, "script")), i.parentNode.removeChild(i));
            return e
        }

        E.extend({
            htmlPrefilter: function (e) {
                return e.replace(Le, "<$1></$2>")
            }, clone: function (e, t, n) {
                var i, r, o, s, a = e.cloneNode(!0), l = ae(e);
                if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || E.isXMLDoc(e))) for (s = be(a), i = 0, r = (o = be(e)).length; i < r; i++) Be(o[i], s[i]);
                if (t) if (n) for (o = o || be(e), s = s || be(a), i = 0, r = o.length; i < r; i++) Fe(o[i], s[i]); else Fe(e, a);
                return (s = be(a, "script")).length > 0 && _e(s, !l && be(e, "script")), a
            }, cleanData: function (e) {
                for (var t, n, i, r = E.event.special, o = 0; void 0 !== (n = e[o]); o++) if (K(n)) {
                    if (t = n[J.expando]) {
                        if (t.events) for (i in t.events) r[i] ? E.event.remove(n, i) : E.removeEvent(n, i, t.handle);
                        n[J.expando] = void 0
                    }
                    n[Z.expando] && (n[Z.expando] = void 0)
                }
            }
        }), E.fn.extend({
            detach: function (e) {
                return Ue(this, e, !0)
            }, remove: function (e) {
                return Ue(this, e)
            }, text: function (e) {
                return $(this, (function (e) {
                    return void 0 === e ? E.text(this) : this.empty().each((function () {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                    }))
                }), null, e, arguments.length)
            }, append: function () {
                return We(this, arguments, (function (e) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || He(this, e).appendChild(e)
                }))
            }, prepend: function () {
                return We(this, arguments, (function (e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = He(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                }))
            }, before: function () {
                return We(this, arguments, (function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                }))
            }, after: function () {
                return We(this, arguments, (function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                }))
            }, empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (E.cleanData(be(e, !1)), e.textContent = "");
                return this
            }, clone: function (e, t) {
                return e = null != e && e, t = null == t ? e : t, this.map((function () {
                    return E.clone(this, e, t)
                }))
            }, html: function (e) {
                return $(this, (function (e) {
                    var t = this[0] || {}, n = 0, i = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if ("string" == typeof e && !Ie.test(e) && !ye[(me.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = E.htmlPrefilter(e);
                        try {
                            for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (E.cleanData(be(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (e) {
                        }
                    }
                    t && this.empty().append(e)
                }), null, e, arguments.length)
            }, replaceWith: function () {
                var e = [];
                return We(this, arguments, (function (t) {
                    var n = this.parentNode;
                    E.inArray(this, e) < 0 && (E.cleanData(be(this)), n && n.replaceChild(t, this))
                }), e)
            }
        }), E.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, (function (e, t) {
            E.fn[e] = function (e) {
                for (var n, i = [], r = E(e), o = r.length - 1, s = 0; s <= o; s++) n = s === o ? this : this.clone(!0), E(r[s])[t](n), u.apply(i, n.get());
                return this.pushStack(i)
            }
        }));
        var Qe = new RegExp("^(" + ie + ")(?!px)[a-z%]+$", "i"), $e = function (e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = n), t.getComputedStyle(e)
        }, ze = new RegExp(oe.join("|"), "i");

        function Ve(e, t, n) {
            var i, r, o, s, a = e.style;
            return (n = n || $e(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || ae(e) || (s = E.style(e, t)), !v.pixelBoxStyles() && Qe.test(s) && ze.test(t) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o)), void 0 !== s ? s + "" : s
        }

        function Xe(e, t) {
            return {
                get: function () {
                    if (!e()) return (this.get = t).apply(this, arguments);
                    delete this.get
                }
            }
        }

        !function () {
            function e() {
                if (u) {
                    c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", se.appendChild(c).appendChild(u);
                    var e = n.getComputedStyle(u);
                    i = "1%" !== e.top, l = 12 === t(e.marginLeft), u.style.right = "60%", a = 36 === t(e.right), r = 36 === t(e.width), u.style.position = "absolute", o = 12 === t(u.offsetWidth / 3), se.removeChild(c), u = null
                }
            }

            function t(e) {
                return Math.round(parseFloat(e))
            }

            var i, r, o, a, l, c = s.createElement("div"), u = s.createElement("div");
            u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === u.style.backgroundClip, E.extend(v, {
                boxSizingReliable: function () {
                    return e(), r
                }, pixelBoxStyles: function () {
                    return e(), a
                }, pixelPosition: function () {
                    return e(), i
                }, reliableMarginLeft: function () {
                    return e(), l
                }, scrollboxSize: function () {
                    return e(), o
                }
            }))
        }();
        var Ye = ["Webkit", "Moz", "ms"], Ke = s.createElement("div").style, Ge = {};

        function Je(e) {
            var t = E.cssProps[e] || Ge[e];
            return t || (e in Ke ? e : Ge[e] = function (e) {
                for (var t = e[0].toUpperCase() + e.slice(1), n = Ye.length; n--;) if ((e = Ye[n] + t) in Ke) return e
            }(e) || e)
        }

        var Ze = /^(none|table(?!-c[ea]).+)/, et = /^--/,
            tt = {position: "absolute", visibility: "hidden", display: "block"},
            nt = {letterSpacing: "0", fontWeight: "400"};

        function it(e, t, n) {
            var i = re.exec(t);
            return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
        }

        function rt(e, t, n, i, r, o) {
            var s = "width" === t ? 1 : 0, a = 0, l = 0;
            if (n === (i ? "border" : "content")) return 0;
            for (; s < 4; s += 2) "margin" === n && (l += E.css(e, n + oe[s], !0, r)), i ? ("content" === n && (l -= E.css(e, "padding" + oe[s], !0, r)), "margin" !== n && (l -= E.css(e, "border" + oe[s] + "Width", !0, r))) : (l += E.css(e, "padding" + oe[s], !0, r), "padding" !== n ? l += E.css(e, "border" + oe[s] + "Width", !0, r) : a += E.css(e, "border" + oe[s] + "Width", !0, r));
            return !i && o >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - a - .5)) || 0), l
        }

        function ot(e, t, n) {
            var i = $e(e), r = (!v.boxSizingReliable() || n) && "border-box" === E.css(e, "boxSizing", !1, i), o = r,
                s = Ve(e, t, i), a = "offset" + t[0].toUpperCase() + t.slice(1);
            if (Qe.test(s)) {
                if (!n) return s;
                s = "auto"
            }
            return (!v.boxSizingReliable() && r || "auto" === s || !parseFloat(s) && "inline" === E.css(e, "display", !1, i)) && e.getClientRects().length && (r = "border-box" === E.css(e, "boxSizing", !1, i), (o = a in e) && (s = e[a])), (s = parseFloat(s) || 0) + rt(e, t, n || (r ? "border" : "content"), o, i, s) + "px"
        }

        function st(e, t, n, i, r) {
            return new st.prototype.init(e, t, n, i, r)
        }

        E.extend({
            cssHooks: {
                opacity: {
                    get: function (e, t) {
                        if (t) {
                            var n = Ve(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                gridArea: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnStart: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowStart: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {},
            style: function (e, t, n, i) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var r, o, s, a = Y(t), l = et.test(t), c = e.style;
                    if (l || (t = Je(a)), s = E.cssHooks[t] || E.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (r = s.get(e, !1, i)) ? r : c[t];
                    "string" === (o = typeof n) && (r = re.exec(n)) && r[1] && (n = fe(e, t, r), o = "number"), null != n && n == n && ("number" !== o || l || (n += r && r[3] || (E.cssNumber[a] ? "" : "px")), v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l ? c.setProperty(t, n) : c[t] = n))
                }
            },
            css: function (e, t, n, i) {
                var r, o, s, a = Y(t);
                return et.test(t) || (t = Je(a)), (s = E.cssHooks[t] || E.cssHooks[a]) && "get" in s && (r = s.get(e, !0, n)), void 0 === r && (r = Ve(e, t, i)), "normal" === r && t in nt && (r = nt[t]), "" === n || n ? (o = parseFloat(r), !0 === n || isFinite(o) ? o || 0 : r) : r
            }
        }), E.each(["height", "width"], (function (e, t) {
            E.cssHooks[t] = {
                get: function (e, n, i) {
                    if (n) return !Ze.test(E.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? ot(e, t, i) : ue(e, tt, (function () {
                        return ot(e, t, i)
                    }))
                }, set: function (e, n, i) {
                    var r, o = $e(e), s = !v.scrollboxSize() && "absolute" === o.position,
                        a = (s || i) && "border-box" === E.css(e, "boxSizing", !1, o), l = i ? rt(e, t, i, a, o) : 0;
                    return a && s && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - rt(e, t, "border", !1, o) - .5)), l && (r = re.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n, n = E.css(e, t)), it(0, n, l)
                }
            }
        })), E.cssHooks.marginLeft = Xe(v.reliableMarginLeft, (function (e, t) {
            if (t) return (parseFloat(Ve(e, "marginLeft")) || e.getBoundingClientRect().left - ue(e, {marginLeft: 0}, (function () {
                return e.getBoundingClientRect().left
            }))) + "px"
        })), E.each({margin: "", padding: "", border: "Width"}, (function (e, t) {
            E.cssHooks[e + t] = {
                expand: function (n) {
                    for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[e + oe[i] + t] = o[i] || o[i - 2] || o[0];
                    return r
                }
            }, "margin" !== e && (E.cssHooks[e + t].set = it)
        })), E.fn.extend({
            css: function (e, t) {
                return $(this, (function (e, t, n) {
                    var i, r, o = {}, s = 0;
                    if (Array.isArray(t)) {
                        for (i = $e(e), r = t.length; s < r; s++) o[t[s]] = E.css(e, t[s], !1, i);
                        return o
                    }
                    return void 0 !== n ? E.style(e, t, n) : E.css(e, t)
                }), e, t, arguments.length > 1)
            }
        }), E.Tween = st, st.prototype = {
            constructor: st, init: function (e, t, n, i, r, o) {
                this.elem = e, this.prop = n, this.easing = r || E.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (E.cssNumber[n] ? "" : "px")
            }, cur: function () {
                var e = st.propHooks[this.prop];
                return e && e.get ? e.get(this) : st.propHooks._default.get(this)
            }, run: function (e) {
                var t, n = st.propHooks[this.prop];
                return this.options.duration ? this.pos = t = E.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : st.propHooks._default.set(this), this
            }
        }, st.prototype.init.prototype = st.prototype, st.propHooks = {
            _default: {
                get: function (e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = E.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                }, set: function (e) {
                    E.fx.step[e.prop] ? E.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !E.cssHooks[e.prop] && null == e.elem.style[Je(e.prop)] ? e.elem[e.prop] = e.now : E.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        }, st.propHooks.scrollTop = st.propHooks.scrollLeft = {
            set: function (e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, E.easing = {
            linear: function (e) {
                return e
            }, swing: function (e) {
                return .5 - Math.cos(e * Math.PI) / 2
            }, _default: "swing"
        }, E.fx = st.prototype.init, E.fx.step = {};
        var at, lt, ct = /^(?:toggle|show|hide)$/, ut = /queueHooks$/;

        function ft() {
            lt && (!1 === s.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(ft) : n.setTimeout(ft, E.fx.interval), E.fx.tick())
        }

        function dt() {
            return n.setTimeout((function () {
                at = void 0
            })), at = Date.now()
        }

        function ht(e, t) {
            var n, i = 0, r = {height: e};
            for (t = t ? 1 : 0; i < 4; i += 2 - t) r["margin" + (n = oe[i])] = r["padding" + n] = e;
            return t && (r.opacity = r.width = e), r
        }

        function pt(e, t, n) {
            for (var i, r = (gt.tweeners[t] || []).concat(gt.tweeners["*"]), o = 0, s = r.length; o < s; o++) if (i = r[o].call(n, t, e)) return i
        }

        function gt(e, t, n) {
            var i, r, o = 0, s = gt.prefilters.length, a = E.Deferred().always((function () {
                delete l.elem
            })), l = function () {
                if (r) return !1;
                for (var t = at || dt(), n = Math.max(0, c.startTime + c.duration - t), i = 1 - (n / c.duration || 0), o = 0, s = c.tweens.length; o < s; o++) c.tweens[o].run(i);
                return a.notifyWith(e, [c, i, n]), i < 1 && s ? n : (s || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1)
            }, c = a.promise({
                elem: e,
                props: E.extend({}, t),
                opts: E.extend(!0, {specialEasing: {}, easing: E.easing._default}, n),
                originalProperties: t,
                originalOptions: n,
                startTime: at || dt(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var i = E.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(i), i
                },
                stop: function (t) {
                    var n = 0, i = t ? c.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; n < i; n++) c.tweens[n].run(1);
                    return t ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]), this
                }
            }), u = c.props;
            for (!function (e, t) {
                var n, i, r, o, s;
                for (n in e) if (r = t[i = Y(n)], o = e[n], Array.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), (s = E.cssHooks[i]) && "expand" in s) for (n in o = s.expand(o), delete e[i], o) n in e || (e[n] = o[n], t[n] = r); else t[i] = r
            }(u, c.opts.specialEasing); o < s; o++) if (i = gt.prefilters[o].call(c, e, u, c.opts)) return y(i.stop) && (E._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)), i;
            return E.map(u, pt, c), y(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), E.fx.timer(E.extend(l, {
                elem: e,
                anim: c,
                queue: c.opts.queue
            })), c
        }

        E.Animation = E.extend(gt, {
            tweeners: {
                "*": [function (e, t) {
                    var n = this.createTween(e, t);
                    return fe(n.elem, e, re.exec(t), n), n
                }]
            }, tweener: function (e, t) {
                y(e) ? (t = e, e = ["*"]) : e = e.match(R);
                for (var n, i = 0, r = e.length; i < r; i++) n = e[i], gt.tweeners[n] = gt.tweeners[n] || [], gt.tweeners[n].unshift(t)
            }, prefilters: [function (e, t, n) {
                var i, r, o, s, a, l, c, u, f = "width" in t || "height" in t, d = this, h = {}, p = e.style,
                    g = e.nodeType && ce(e), m = J.get(e, "fxshow");
                for (i in n.queue || (null == (s = E._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function () {
                    s.unqueued || a()
                }), s.unqueued++, d.always((function () {
                    d.always((function () {
                        s.unqueued--, E.queue(e, "fx").length || s.empty.fire()
                    }))
                }))), t) if (r = t[i], ct.test(r)) {
                    if (delete t[i], o = o || "toggle" === r, r === (g ? "hide" : "show")) {
                        if ("show" !== r || !m || void 0 === m[i]) continue;
                        g = !0
                    }
                    h[i] = m && m[i] || E.style(e, i)
                }
                if ((l = !E.isEmptyObject(t)) || !E.isEmptyObject(h)) for (i in f && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (c = m && m.display) && (c = J.get(e, "display")), "none" === (u = E.css(e, "display")) && (c ? u = c : (pe([e], !0), c = e.style.display || c, u = E.css(e, "display"), pe([e]))), ("inline" === u || "inline-block" === u && null != c) && "none" === E.css(e, "float") && (l || (d.done((function () {
                    p.display = c
                })), null == c && (u = p.display, c = "none" === u ? "" : u)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", d.always((function () {
                    p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
                }))), l = !1, h) l || (m ? "hidden" in m && (g = m.hidden) : m = J.access(e, "fxshow", {display: c}), o && (m.hidden = !g), g && pe([e], !0), d.done((function () {
                    for (i in g || pe([e]), J.remove(e, "fxshow"), h) E.style(e, i, h[i])
                }))), l = pt(g ? m[i] : 0, i, d), i in m || (m[i] = l.start, g && (l.end = l.start, l.start = 0))
            }], prefilter: function (e, t) {
                t ? gt.prefilters.unshift(e) : gt.prefilters.push(e)
            }
        }), E.speed = function (e, t, n) {
            var i = e && "object" == typeof e ? E.extend({}, e) : {
                complete: n || !n && t || y(e) && e,
                duration: e,
                easing: n && t || t && !y(t) && t
            };
            return E.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in E.fx.speeds ? i.duration = E.fx.speeds[i.duration] : i.duration = E.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
                y(i.old) && i.old.call(this), i.queue && E.dequeue(this, i.queue)
            }, i
        }, E.fn.extend({
            fadeTo: function (e, t, n, i) {
                return this.filter(ce).css("opacity", 0).show().end().animate({opacity: t}, e, n, i)
            }, animate: function (e, t, n, i) {
                var r = E.isEmptyObject(e), o = E.speed(t, n, i), s = function () {
                    var t = gt(this, E.extend({}, e), o);
                    (r || J.get(this, "finish")) && t.stop(!0)
                };
                return s.finish = s, r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
            }, stop: function (e, t, n) {
                var i = function (e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each((function () {
                    var t = !0, r = null != e && e + "queueHooks", o = E.timers, s = J.get(this);
                    if (r) s[r] && s[r].stop && i(s[r]); else for (r in s) s[r] && s[r].stop && ut.test(r) && i(s[r]);
                    for (r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
                    !t && n || E.dequeue(this, e)
                }))
            }, finish: function (e) {
                return !1 !== e && (e = e || "fx"), this.each((function () {
                    var t, n = J.get(this), i = n[e + "queue"], r = n[e + "queueHooks"], o = E.timers,
                        s = i ? i.length : 0;
                    for (n.finish = !0, E.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; t < s; t++) i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish
                }))
            }
        }), E.each(["toggle", "show", "hide"], (function (e, t) {
            var n = E.fn[t];
            E.fn[t] = function (e, i, r) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ht(t, !0), e, i, r)
            }
        })), E.each({
            slideDown: ht("show"),
            slideUp: ht("hide"),
            slideToggle: ht("toggle"),
            fadeIn: {opacity: "show"},
            fadeOut: {opacity: "hide"},
            fadeToggle: {opacity: "toggle"}
        }, (function (e, t) {
            E.fn[e] = function (e, n, i) {
                return this.animate(t, e, n, i)
            }
        })), E.timers = [], E.fx.tick = function () {
            var e, t = 0, n = E.timers;
            for (at = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || E.fx.stop(), at = void 0
        }, E.fx.timer = function (e) {
            E.timers.push(e), E.fx.start()
        }, E.fx.interval = 13, E.fx.start = function () {
            lt || (lt = !0, ft())
        }, E.fx.stop = function () {
            lt = null
        }, E.fx.speeds = {slow: 600, fast: 200, _default: 400}, E.fn.delay = function (e, t) {
            return e = E.fx && E.fx.speeds[e] || e, t = t || "fx", this.queue(t, (function (t, i) {
                var r = n.setTimeout(t, e);
                i.stop = function () {
                    n.clearTimeout(r)
                }
            }))
        }, function () {
            var e = s.createElement("input"), t = s.createElement("select").appendChild(s.createElement("option"));
            e.type = "checkbox", v.checkOn = "" !== e.value, v.optSelected = t.selected, (e = s.createElement("input")).value = "t", e.type = "radio", v.radioValue = "t" === e.value
        }();
        var mt, vt = E.expr.attrHandle;
        E.fn.extend({
            attr: function (e, t) {
                return $(this, E.attr, e, t, arguments.length > 1)
            }, removeAttr: function (e) {
                return this.each((function () {
                    E.removeAttr(this, e)
                }))
            }
        }), E.extend({
            attr: function (e, t, n) {
                var i, r, o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? E.prop(e, t, n) : (1 === o && E.isXMLDoc(e) || (r = E.attrHooks[t.toLowerCase()] || (E.expr.match.bool.test(t) ? mt : void 0)), void 0 !== n ? null === n ? void E.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : null == (i = E.find.attr(e, t)) ? void 0 : i)
            }, attrHooks: {
                type: {
                    set: function (e, t) {
                        if (!v.radioValue && "radio" === t && A(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            }, removeAttr: function (e, t) {
                var n, i = 0, r = t && t.match(R);
                if (r && 1 === e.nodeType) for (; n = r[i++];) e.removeAttribute(n)
            }
        }), mt = {
            set: function (e, t, n) {
                return !1 === t ? E.removeAttr(e, n) : e.setAttribute(n, n), n
            }
        }, E.each(E.expr.match.bool.source.match(/\w+/g), (function (e, t) {
            var n = vt[t] || E.find.attr;
            vt[t] = function (e, t, i) {
                var r, o, s = t.toLowerCase();
                return i || (o = vt[s], vt[s] = r, r = null != n(e, t, i) ? s : null, vt[s] = o), r
            }
        }));
        var yt = /^(?:input|select|textarea|button)$/i, bt = /^(?:a|area)$/i;

        function _t(e) {
            return (e.match(R) || []).join(" ")
        }

        function wt(e) {
            return e.getAttribute && e.getAttribute("class") || ""
        }

        function xt(e) {
            return Array.isArray(e) ? e : "string" == typeof e && e.match(R) || []
        }

        E.fn.extend({
            prop: function (e, t) {
                return $(this, E.prop, e, t, arguments.length > 1)
            }, removeProp: function (e) {
                return this.each((function () {
                    delete this[E.propFix[e] || e]
                }))
            }
        }), E.extend({
            prop: function (e, t, n) {
                var i, r, o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return 1 === o && E.isXMLDoc(e) || (t = E.propFix[t] || t, r = E.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
            }, propHooks: {
                tabIndex: {
                    get: function (e) {
                        var t = E.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : yt.test(e.nodeName) || bt.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            }, propFix: {for: "htmlFor", class: "className"}
        }), v.optSelected || (E.propHooks.selected = {
            get: function (e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null
            }, set: function (e) {
                var t = e.parentNode;
                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
            }
        }), E.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function () {
            E.propFix[this.toLowerCase()] = this
        })), E.fn.extend({
            addClass: function (e) {
                var t, n, i, r, o, s, a, l = 0;
                if (y(e)) return this.each((function (t) {
                    E(this).addClass(e.call(this, t, wt(this)))
                }));
                if ((t = xt(e)).length) for (; n = this[l++];) if (r = wt(n), i = 1 === n.nodeType && " " + _t(r) + " ") {
                    for (s = 0; o = t[s++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                    r !== (a = _t(i)) && n.setAttribute("class", a)
                }
                return this
            }, removeClass: function (e) {
                var t, n, i, r, o, s, a, l = 0;
                if (y(e)) return this.each((function (t) {
                    E(this).removeClass(e.call(this, t, wt(this)))
                }));
                if (!arguments.length) return this.attr("class", "");
                if ((t = xt(e)).length) for (; n = this[l++];) if (r = wt(n), i = 1 === n.nodeType && " " + _t(r) + " ") {
                    for (s = 0; o = t[s++];) for (; i.indexOf(" " + o + " ") > -1;) i = i.replace(" " + o + " ", " ");
                    r !== (a = _t(i)) && n.setAttribute("class", a)
                }
                return this
            }, toggleClass: function (e, t) {
                var n = typeof e, i = "string" === n || Array.isArray(e);
                return "boolean" == typeof t && i ? t ? this.addClass(e) : this.removeClass(e) : y(e) ? this.each((function (n) {
                    E(this).toggleClass(e.call(this, n, wt(this), t), t)
                })) : this.each((function () {
                    var t, r, o, s;
                    if (i) for (r = 0, o = E(this), s = xt(e); t = s[r++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t); else void 0 !== e && "boolean" !== n || ((t = wt(this)) && J.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : J.get(this, "__className__") || ""))
                }))
            }, hasClass: function (e) {
                var t, n, i = 0;
                for (t = " " + e + " "; n = this[i++];) if (1 === n.nodeType && (" " + _t(wt(n)) + " ").indexOf(t) > -1) return !0;
                return !1
            }
        });
        var Et = /\r/g;
        E.fn.extend({
            val: function (e) {
                var t, n, i, r = this[0];
                return arguments.length ? (i = y(e), this.each((function (n) {
                    var r;
                    1 === this.nodeType && (null == (r = i ? e.call(this, n, E(this).val()) : e) ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = E.map(r, (function (e) {
                        return null == e ? "" : e + ""
                    }))), (t = E.valHooks[this.type] || E.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
                }))) : r ? (t = E.valHooks[r.type] || E.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : "string" == typeof (n = r.value) ? n.replace(Et, "") : null == n ? "" : n : void 0
            }
        }), E.extend({
            valHooks: {
                option: {
                    get: function (e) {
                        var t = E.find.attr(e, "value");
                        return null != t ? t : _t(E.text(e))
                    }
                }, select: {
                    get: function (e) {
                        var t, n, i, r = e.options, o = e.selectedIndex, s = "select-one" === e.type, a = s ? null : [],
                            l = s ? o + 1 : r.length;
                        for (i = o < 0 ? l : s ? o : 0; i < l; i++) if (((n = r[i]).selected || i === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                            if (t = E(n).val(), s) return t;
                            a.push(t)
                        }
                        return a
                    }, set: function (e, t) {
                        for (var n, i, r = e.options, o = E.makeArray(t), s = r.length; s--;) ((i = r[s]).selected = E.inArray(E.valHooks.option.get(i), o) > -1) && (n = !0);
                        return n || (e.selectedIndex = -1), o
                    }
                }
            }
        }), E.each(["radio", "checkbox"], (function () {
            E.valHooks[this] = {
                set: function (e, t) {
                    if (Array.isArray(t)) return e.checked = E.inArray(E(e).val(), t) > -1
                }
            }, v.checkOn || (E.valHooks[this].get = function (e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        })), v.focusin = "onfocusin" in n;
        var Tt = /^(?:focusinfocus|focusoutblur)$/, Ct = function (e) {
            e.stopPropagation()
        };
        E.extend(E.event, {
            trigger: function (e, t, i, r) {
                var o, a, l, c, u, f, d, h, g = [i || s], m = p.call(e, "type") ? e.type : e,
                    v = p.call(e, "namespace") ? e.namespace.split(".") : [];
                if (a = h = l = i = i || s, 3 !== i.nodeType && 8 !== i.nodeType && !Tt.test(m + E.event.triggered) && (m.indexOf(".") > -1 && (v = m.split("."), m = v.shift(), v.sort()), u = m.indexOf(":") < 0 && "on" + m, (e = e[E.expando] ? e : new E.Event(m, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = v.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), t = null == t ? [e] : E.makeArray(t, [e]), d = E.event.special[m] || {}, r || !d.trigger || !1 !== d.trigger.apply(i, t))) {
                    if (!r && !d.noBubble && !b(i)) {
                        for (c = d.delegateType || m, Tt.test(c + m) || (a = a.parentNode); a; a = a.parentNode) g.push(a), l = a;
                        l === (i.ownerDocument || s) && g.push(l.defaultView || l.parentWindow || n)
                    }
                    for (o = 0; (a = g[o++]) && !e.isPropagationStopped();) h = a, e.type = o > 1 ? c : d.bindType || m, (f = (J.get(a, "events") || {})[e.type] && J.get(a, "handle")) && f.apply(a, t), (f = u && a[u]) && f.apply && K(a) && (e.result = f.apply(a, t), !1 === e.result && e.preventDefault());
                    return e.type = m, r || e.isDefaultPrevented() || d._default && !1 !== d._default.apply(g.pop(), t) || !K(i) || u && y(i[m]) && !b(i) && ((l = i[u]) && (i[u] = null), E.event.triggered = m, e.isPropagationStopped() && h.addEventListener(m, Ct), i[m](), e.isPropagationStopped() && h.removeEventListener(m, Ct), E.event.triggered = void 0, l && (i[u] = l)), e.result
                }
            }, simulate: function (e, t, n) {
                var i = E.extend(new E.Event, n, {type: e, isSimulated: !0});
                E.event.trigger(i, null, t)
            }
        }), E.fn.extend({
            trigger: function (e, t) {
                return this.each((function () {
                    E.event.trigger(e, t, this)
                }))
            }, triggerHandler: function (e, t) {
                var n = this[0];
                if (n) return E.event.trigger(e, t, n, !0)
            }
        }), v.focusin || E.each({focus: "focusin", blur: "focusout"}, (function (e, t) {
            var n = function (e) {
                E.event.simulate(t, e.target, E.event.fix(e))
            };
            E.event.special[t] = {
                setup: function () {
                    var i = this.ownerDocument || this, r = J.access(i, t);
                    r || i.addEventListener(e, n, !0), J.access(i, t, (r || 0) + 1)
                }, teardown: function () {
                    var i = this.ownerDocument || this, r = J.access(i, t) - 1;
                    r ? J.access(i, t, r) : (i.removeEventListener(e, n, !0), J.remove(i, t))
                }
            }
        }));
        var St = n.location, kt = Date.now(), Dt = /\?/;
        E.parseXML = function (e) {
            var t;
            if (!e || "string" != typeof e) return null;
            try {
                t = (new n.DOMParser).parseFromString(e, "text/xml")
            } catch (e) {
                t = void 0
            }
            return t && !t.getElementsByTagName("parsererror").length || E.error("Invalid XML: " + e), t
        };
        var Nt = /\[\]$/, At = /\r?\n/g, jt = /^(?:submit|button|image|reset|file)$/i,
            Ot = /^(?:input|select|textarea|keygen)/i;

        function Lt(e, t, n, i) {
            var r;
            if (Array.isArray(t)) E.each(t, (function (t, r) {
                n || Nt.test(e) ? i(e, r) : Lt(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i)
            })); else if (n || "object" !== x(t)) i(e, t); else for (r in t) Lt(e + "[" + r + "]", t[r], n, i)
        }

        E.param = function (e, t) {
            var n, i = [], r = function (e, t) {
                var n = y(t) ? t() : t;
                i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
            if (null == e) return "";
            if (Array.isArray(e) || e.jquery && !E.isPlainObject(e)) E.each(e, (function () {
                r(this.name, this.value)
            })); else for (n in e) Lt(n, e[n], t, r);
            return i.join("&")
        }, E.fn.extend({
            serialize: function () {
                return E.param(this.serializeArray())
            }, serializeArray: function () {
                return this.map((function () {
                    var e = E.prop(this, "elements");
                    return e ? E.makeArray(e) : this
                })).filter((function () {
                    var e = this.type;
                    return this.name && !E(this).is(":disabled") && Ot.test(this.nodeName) && !jt.test(e) && (this.checked || !ge.test(e))
                })).map((function (e, t) {
                    var n = E(this).val();
                    return null == n ? null : Array.isArray(n) ? E.map(n, (function (e) {
                        return {name: t.name, value: e.replace(At, "\r\n")}
                    })) : {name: t.name, value: n.replace(At, "\r\n")}
                })).get()
            }
        });
        var It = /%20/g, Pt = /#.*$/, qt = /([?&])_=[^&]*/, Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm, Rt = /^(?:GET|HEAD)$/,
            Mt = /^\/\//, Ft = {}, Bt = {}, Wt = "*/".concat("*"), Ut = s.createElement("a");

        function Qt(e) {
            return function (t, n) {
                "string" != typeof t && (n = t, t = "*");
                var i, r = 0, o = t.toLowerCase().match(R) || [];
                if (y(n)) for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
            }
        }

        function $t(e, t, n, i) {
            var r = {}, o = e === Bt;

            function s(a) {
                var l;
                return r[a] = !0, E.each(e[a] || [], (function (e, a) {
                    var c = a(t, n, i);
                    return "string" != typeof c || o || r[c] ? o ? !(l = c) : void 0 : (t.dataTypes.unshift(c), s(c), !1)
                })), l
            }

            return s(t.dataTypes[0]) || !r["*"] && s("*")
        }

        function zt(e, t) {
            var n, i, r = E.ajaxSettings.flatOptions || {};
            for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
            return i && E.extend(!0, e, i), e
        }

        Ut.href = St.href, E.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: St.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(St.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Wt,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
                responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
                converters: {"* text": String, "text html": !0, "text json": JSON.parse, "text xml": E.parseXML},
                flatOptions: {url: !0, context: !0}
            },
            ajaxSetup: function (e, t) {
                return t ? zt(zt(e, E.ajaxSettings), t) : zt(E.ajaxSettings, e)
            },
            ajaxPrefilter: Qt(Ft),
            ajaxTransport: Qt(Bt),
            ajax: function (e, t) {
                "object" == typeof e && (t = e, e = void 0), t = t || {};
                var i, r, o, a, l, c, u, f, d, h, p = E.ajaxSetup({}, t), g = p.context || p,
                    m = p.context && (g.nodeType || g.jquery) ? E(g) : E.event, v = E.Deferred(),
                    y = E.Callbacks("once memory"), b = p.statusCode || {}, _ = {}, w = {}, x = "canceled", T = {
                        readyState: 0, getResponseHeader: function (e) {
                            var t;
                            if (u) {
                                if (!a) for (a = {}; t = Ht.exec(o);) a[t[1].toLowerCase() + " "] = (a[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                t = a[e.toLowerCase() + " "]
                            }
                            return null == t ? null : t.join(", ")
                        }, getAllResponseHeaders: function () {
                            return u ? o : null
                        }, setRequestHeader: function (e, t) {
                            return null == u && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, _[e] = t), this
                        }, overrideMimeType: function (e) {
                            return null == u && (p.mimeType = e), this
                        }, statusCode: function (e) {
                            var t;
                            if (e) if (u) T.always(e[T.status]); else for (t in e) b[t] = [b[t], e[t]];
                            return this
                        }, abort: function (e) {
                            var t = e || x;
                            return i && i.abort(t), C(0, t), this
                        }
                    };
                if (v.promise(T), p.url = ((e || p.url || St.href) + "").replace(Mt, St.protocol + "//"), p.type = t.method || t.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(R) || [""], null == p.crossDomain) {
                    c = s.createElement("a");
                    try {
                        c.href = p.url, c.href = c.href, p.crossDomain = Ut.protocol + "//" + Ut.host != c.protocol + "//" + c.host
                    } catch (e) {
                        p.crossDomain = !0
                    }
                }
                if (p.data && p.processData && "string" != typeof p.data && (p.data = E.param(p.data, p.traditional)), $t(Ft, p, t, T), u) return T;
                for (d in (f = E.event && p.global) && 0 == E.active++ && E.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Rt.test(p.type), r = p.url.replace(Pt, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(It, "+")) : (h = p.url.slice(r.length), p.data && (p.processData || "string" == typeof p.data) && (r += (Dt.test(r) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (r = r.replace(qt, "$1"), h = (Dt.test(r) ? "&" : "?") + "_=" + kt++ + h), p.url = r + h), p.ifModified && (E.lastModified[r] && T.setRequestHeader("If-Modified-Since", E.lastModified[r]), E.etag[r] && T.setRequestHeader("If-None-Match", E.etag[r])), (p.data && p.hasContent && !1 !== p.contentType || t.contentType) && T.setRequestHeader("Content-Type", p.contentType), T.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Wt + "; q=0.01" : "") : p.accepts["*"]), p.headers) T.setRequestHeader(d, p.headers[d]);
                if (p.beforeSend && (!1 === p.beforeSend.call(g, T, p) || u)) return T.abort();
                if (x = "abort", y.add(p.complete), T.done(p.success), T.fail(p.error), i = $t(Bt, p, t, T)) {
                    if (T.readyState = 1, f && m.trigger("ajaxSend", [T, p]), u) return T;
                    p.async && p.timeout > 0 && (l = n.setTimeout((function () {
                        T.abort("timeout")
                    }), p.timeout));
                    try {
                        u = !1, i.send(_, C)
                    } catch (e) {
                        if (u) throw e;
                        C(-1, e)
                    }
                } else C(-1, "No Transport");

                function C(e, t, s, a) {
                    var c, d, h, _, w, x = t;
                    u || (u = !0, l && n.clearTimeout(l), i = void 0, o = a || "", T.readyState = e > 0 ? 4 : 0, c = e >= 200 && e < 300 || 304 === e, s && (_ = function (e, t, n) {
                        for (var i, r, o, s, a = e.contents, l = e.dataTypes; "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                        if (i) for (r in a) if (a[r] && a[r].test(i)) {
                            l.unshift(r);
                            break
                        }
                        if (l[0] in n) o = l[0]; else {
                            for (r in n) {
                                if (!l[0] || e.converters[r + " " + l[0]]) {
                                    o = r;
                                    break
                                }
                                s || (s = r)
                            }
                            o = o || s
                        }
                        if (o) return o !== l[0] && l.unshift(o), n[o]
                    }(p, T, s)), _ = function (e, t, n, i) {
                        var r, o, s, a, l, c = {}, u = e.dataTypes.slice();
                        if (u[1]) for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
                        for (o = u.shift(); o;) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = u.shift()) if ("*" === o) o = l; else if ("*" !== l && l !== o) {
                            if (!(s = c[l + " " + o] || c["* " + o])) for (r in c) if ((a = r.split(" "))[1] === o && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                                !0 === s ? s = c[r] : !0 !== c[r] && (o = a[0], u.unshift(a[1]));
                                break
                            }
                            if (!0 !== s) if (s && e.throws) t = s(t); else try {
                                t = s(t)
                            } catch (e) {
                                return {state: "parsererror", error: s ? e : "No conversion from " + l + " to " + o}
                            }
                        }
                        return {state: "success", data: t}
                    }(p, _, T, c), c ? (p.ifModified && ((w = T.getResponseHeader("Last-Modified")) && (E.lastModified[r] = w), (w = T.getResponseHeader("etag")) && (E.etag[r] = w)), 204 === e || "HEAD" === p.type ? x = "nocontent" : 304 === e ? x = "notmodified" : (x = _.state, d = _.data, c = !(h = _.error))) : (h = x, !e && x || (x = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || x) + "", c ? v.resolveWith(g, [d, x, T]) : v.rejectWith(g, [T, x, h]), T.statusCode(b), b = void 0, f && m.trigger(c ? "ajaxSuccess" : "ajaxError", [T, p, c ? d : h]), y.fireWith(g, [T, x]), f && (m.trigger("ajaxComplete", [T, p]), --E.active || E.event.trigger("ajaxStop")))
                }

                return T
            },
            getJSON: function (e, t, n) {
                return E.get(e, t, n, "json")
            },
            getScript: function (e, t) {
                return E.get(e, void 0, t, "script")
            }
        }), E.each(["get", "post"], (function (e, t) {
            E[t] = function (e, n, i, r) {
                return y(n) && (r = r || i, i = n, n = void 0), E.ajax(E.extend({
                    url: e,
                    type: t,
                    dataType: r,
                    data: n,
                    success: i
                }, E.isPlainObject(e) && e))
            }
        })), E._evalUrl = function (e, t) {
            return E.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: {
                    "text script": function () {
                    }
                },
                dataFilter: function (e) {
                    E.globalEval(e, t)
                }
            })
        }, E.fn.extend({
            wrapAll: function (e) {
                var t;
                return this[0] && (y(e) && (e = e.call(this[0])), t = E(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map((function () {
                    for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                    return e
                })).append(this)), this
            }, wrapInner: function (e) {
                return y(e) ? this.each((function (t) {
                    E(this).wrapInner(e.call(this, t))
                })) : this.each((function () {
                    var t = E(this), n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                }))
            }, wrap: function (e) {
                var t = y(e);
                return this.each((function (n) {
                    E(this).wrapAll(t ? e.call(this, n) : e)
                }))
            }, unwrap: function (e) {
                return this.parent(e).not("body").each((function () {
                    E(this).replaceWith(this.childNodes)
                })), this
            }
        }), E.expr.pseudos.hidden = function (e) {
            return !E.expr.pseudos.visible(e)
        }, E.expr.pseudos.visible = function (e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        }, E.ajaxSettings.xhr = function () {
            try {
                return new n.XMLHttpRequest
            } catch (e) {
            }
        };
        var Vt = {0: 200, 1223: 204}, Xt = E.ajaxSettings.xhr();
        v.cors = !!Xt && "withCredentials" in Xt, v.ajax = Xt = !!Xt, E.ajaxTransport((function (e) {
            var t, i;
            if (v.cors || Xt && !e.crossDomain) return {
                send: function (r, o) {
                    var s, a = e.xhr();
                    if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (s in e.xhrFields) a[s] = e.xhrFields[s];
                    for (s in e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), r) a.setRequestHeader(s, r[s]);
                    t = function (e) {
                        return function () {
                            t && (t = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Vt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {binary: a.response} : {text: a.responseText}, a.getAllResponseHeaders()))
                        }
                    }, a.onload = t(), i = a.onerror = a.ontimeout = t("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function () {
                        4 === a.readyState && n.setTimeout((function () {
                            t && i()
                        }))
                    }, t = t("abort");
                    try {
                        a.send(e.hasContent && e.data || null)
                    } catch (e) {
                        if (t) throw e
                    }
                }, abort: function () {
                    t && t()
                }
            }
        })), E.ajaxPrefilter((function (e) {
            e.crossDomain && (e.contents.script = !1)
        })), E.ajaxSetup({
            accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
            contents: {script: /\b(?:java|ecma)script\b/},
            converters: {
                "text script": function (e) {
                    return E.globalEval(e), e
                }
            }
        }), E.ajaxPrefilter("script", (function (e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
        })), E.ajaxTransport("script", (function (e) {
            var t, n;
            if (e.crossDomain || e.scriptAttrs) return {
                send: function (i, r) {
                    t = E("<script>").attr(e.scriptAttrs || {}).prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function (e) {
                        t.remove(), n = null, e && r("error" === e.type ? 404 : 200, e.type)
                    }), s.head.appendChild(t[0])
                }, abort: function () {
                    n && n()
                }
            }
        }));
        var Yt, Kt = [], Gt = /(=)\?(?=&|$)|\?\?/;
        E.ajaxSetup({
            jsonp: "callback", jsonpCallback: function () {
                var e = Kt.pop() || E.expando + "_" + kt++;
                return this[e] = !0, e
            }
        }), E.ajaxPrefilter("json jsonp", (function (e, t, i) {
            var r, o, s,
                a = !1 !== e.jsonp && (Gt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Gt.test(e.data) && "data");
            if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Gt, "$1" + r) : !1 !== e.jsonp && (e.url += (Dt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
                return s || E.error(r + " was not called"), s[0]
            }, e.dataTypes[0] = "json", o = n[r], n[r] = function () {
                s = arguments
            }, i.always((function () {
                void 0 === o ? E(n).removeProp(r) : n[r] = o, e[r] && (e.jsonpCallback = t.jsonpCallback, Kt.push(r)), s && y(o) && o(s[0]), s = o = void 0
            })), "script"
        })), v.createHTMLDocument = ((Yt = s.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Yt.childNodes.length), E.parseHTML = function (e, t, n) {
            return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (v.createHTMLDocument ? ((i = (t = s.implementation.createHTMLDocument("")).createElement("base")).href = s.location.href, t.head.appendChild(i)) : t = s), o = !n && [], (r = j.exec(e)) ? [t.createElement(r[1])] : (r = Te([e], t, o), o && o.length && E(o).remove(), E.merge([], r.childNodes)));
            var i, r, o
        }, E.fn.load = function (e, t, n) {
            var i, r, o, s = this, a = e.indexOf(" ");
            return a > -1 && (i = _t(e.slice(a)), e = e.slice(0, a)), y(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), s.length > 0 && E.ajax({
                url: e,
                type: r || "GET",
                dataType: "html",
                data: t
            }).done((function (e) {
                o = arguments, s.html(i ? E("<div>").append(E.parseHTML(e)).find(i) : e)
            })).always(n && function (e, t) {
                s.each((function () {
                    n.apply(this, o || [e.responseText, t, e])
                }))
            }), this
        }, E.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function (e, t) {
            E.fn[t] = function (e) {
                return this.on(t, e)
            }
        })), E.expr.pseudos.animated = function (e) {
            return E.grep(E.timers, (function (t) {
                return e === t.elem
            })).length
        }, E.offset = {
            setOffset: function (e, t, n) {
                var i, r, o, s, a, l, c = E.css(e, "position"), u = E(e), f = {};
                "static" === c && (e.style.position = "relative"), a = u.offset(), o = E.css(e, "top"), l = E.css(e, "left"), ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1 ? (s = (i = u.position()).top, r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(l) || 0), y(t) && (t = t.call(e, n, E.extend({}, a))), null != t.top && (f.top = t.top - a.top + s), null != t.left && (f.left = t.left - a.left + r), "using" in t ? t.using.call(e, f) : u.css(f)
            }
        }, E.fn.extend({
            offset: function (e) {
                if (arguments.length) return void 0 === e ? this : this.each((function (t) {
                    E.offset.setOffset(this, e, t)
                }));
                var t, n, i = this[0];
                return i ? i.getClientRects().length ? (t = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
                    top: t.top + n.pageYOffset,
                    left: t.left + n.pageXOffset
                }) : {top: 0, left: 0} : void 0
            }, position: function () {
                if (this[0]) {
                    var e, t, n, i = this[0], r = {top: 0, left: 0};
                    if ("fixed" === E.css(i, "position")) t = i.getBoundingClientRect(); else {
                        for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === E.css(e, "position");) e = e.parentNode;
                        e && e !== i && 1 === e.nodeType && ((r = E(e).offset()).top += E.css(e, "borderTopWidth", !0), r.left += E.css(e, "borderLeftWidth", !0))
                    }
                    return {
                        top: t.top - r.top - E.css(i, "marginTop", !0),
                        left: t.left - r.left - E.css(i, "marginLeft", !0)
                    }
                }
            }, offsetParent: function () {
                return this.map((function () {
                    for (var e = this.offsetParent; e && "static" === E.css(e, "position");) e = e.offsetParent;
                    return e || se
                }))
            }
        }), E.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, (function (e, t) {
            var n = "pageYOffset" === t;
            E.fn[e] = function (i) {
                return $(this, (function (e, i, r) {
                    var o;
                    if (b(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === r) return o ? o[t] : e[i];
                    o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : e[i] = r
                }), e, i, arguments.length)
            }
        })), E.each(["top", "left"], (function (e, t) {
            E.cssHooks[t] = Xe(v.pixelPosition, (function (e, n) {
                if (n) return n = Ve(e, t), Qe.test(n) ? E(e).position()[t] + "px" : n
            }))
        })), E.each({Height: "height", Width: "width"}, (function (e, t) {
            E.each({padding: "inner" + e, content: t, "": "outer" + e}, (function (n, i) {
                E.fn[i] = function (r, o) {
                    var s = arguments.length && (n || "boolean" != typeof r),
                        a = n || (!0 === r || !0 === o ? "margin" : "border");
                    return $(this, (function (t, n, r) {
                        var o;
                        return b(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === r ? E.css(t, n, a) : E.style(t, n, r, a)
                    }), t, s ? r : void 0, s)
                }
            }))
        })), E.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function (e, t) {
            E.fn[t] = function (e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        })), E.fn.extend({
            hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }), E.fn.extend({
            bind: function (e, t, n) {
                return this.on(e, null, t, n)
            }, unbind: function (e, t) {
                return this.off(e, null, t)
            }, delegate: function (e, t, n, i) {
                return this.on(t, e, n, i)
            }, undelegate: function (e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        }), E.proxy = function (e, t) {
            var n, i, r;
            if ("string" == typeof t && (n = e[t], t = e, e = n), y(e)) return i = l.call(arguments, 2), (r = function () {
                return e.apply(t || this, i.concat(l.call(arguments)))
            }).guid = e.guid = e.guid || E.guid++, r
        }, E.holdReady = function (e) {
            e ? E.readyWait++ : E.ready(!0)
        }, E.isArray = Array.isArray, E.parseJSON = JSON.parse, E.nodeName = A, E.isFunction = y, E.isWindow = b, E.camelCase = Y, E.type = x, E.now = Date.now, E.isNumeric = function (e) {
            var t = E.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        }, void 0 === (i = function () {
            return E
        }.apply(t, [])) || (e.exports = i);
        var Jt = n.jQuery, Zt = n.$;
        return E.noConflict = function (e) {
            return n.$ === E && (n.$ = Zt), e && n.jQuery === E && (n.jQuery = Jt), E
        }, r || (n.jQuery = n.$ = E), E
    }))
}, function (e, t, n) {
    !function (e, t, n) {
        "use strict";

        function i(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function r(e, t, n) {
            return t && i(e.prototype, t), n && i(e, n), e
        }

        function o(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function s(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t && (i = i.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function a(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? s(Object(n), !0).forEach((function (t) {
                    o(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function l(e) {
            var n = this, i = !1;
            return t(this).one(c.TRANSITION_END, (function () {
                i = !0
            })), setTimeout((function () {
                i || c.triggerTransitionEnd(n)
            }), e), this
        }

        t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t, n = n && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
        var c = {
            TRANSITION_END: "bsTransitionEnd", getUID: function (e) {
                do {
                    e += ~~(1e6 * Math.random())
                } while (document.getElementById(e));
                return e
            }, getSelectorFromElement: function (e) {
                var t = e.getAttribute("data-target");
                if (!t || "#" === t) {
                    var n = e.getAttribute("href");
                    t = n && "#" !== n ? n.trim() : ""
                }
                try {
                    return document.querySelector(t) ? t : null
                } catch (e) {
                    return null
                }
            }, getTransitionDurationFromElement: function (e) {
                if (!e) return 0;
                var n = t(e).css("transition-duration"), i = t(e).css("transition-delay"), r = parseFloat(n),
                    o = parseFloat(i);
                return r || o ? (n = n.split(",")[0], i = i.split(",")[0], 1e3 * (parseFloat(n) + parseFloat(i))) : 0
            }, reflow: function (e) {
                return e.offsetHeight
            }, triggerTransitionEnd: function (e) {
                t(e).trigger("transitionend")
            }, supportsTransitionEnd: function () {
                return Boolean("transitionend")
            }, isElement: function (e) {
                return (e[0] || e).nodeType
            }, typeCheckConfig: function (e, t, n) {
                for (var i in n) if (Object.prototype.hasOwnProperty.call(n, i)) {
                    var r = n[i], o = t[i],
                        s = o && c.isElement(o) ? "element" : null == (a = o) ? "" + a : {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase();
                    if (!new RegExp(r).test(s)) throw new Error(e.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + r + '".')
                }
                var a
            }, findShadowRoot: function (e) {
                if (!document.documentElement.attachShadow) return null;
                if ("function" == typeof e.getRootNode) {
                    var t = e.getRootNode();
                    return t instanceof ShadowRoot ? t : null
                }
                return e instanceof ShadowRoot ? e : e.parentNode ? c.findShadowRoot(e.parentNode) : null
            }, jQueryDetection: function () {
                if (void 0 === t) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
                var e = t.fn.jquery.split(" ")[0].split(".");
                if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || e[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
            }
        };
        c.jQueryDetection(), t.fn.emulateTransitionEnd = l, t.event.special[c.TRANSITION_END] = {
            bindType: "transitionend",
            delegateType: "transitionend",
            handle: function (e) {
                if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
            }
        };
        var u = "alert", f = t.fn[u], d = function () {
            function e(e) {
                this._element = e
            }

            var n = e.prototype;
            return n.close = function (e) {
                var t = this._element;
                e && (t = this._getRootElement(e)), this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
            }, n.dispose = function () {
                t.removeData(this._element, "bs.alert"), this._element = null
            }, n._getRootElement = function (e) {
                var n = c.getSelectorFromElement(e), i = !1;
                return n && (i = document.querySelector(n)), i || (i = t(e).closest(".alert")[0]), i
            }, n._triggerCloseEvent = function (e) {
                var n = t.Event("close.bs.alert");
                return t(e).trigger(n), n
            }, n._removeElement = function (e) {
                var n = this;
                if (t(e).removeClass("show"), t(e).hasClass("fade")) {
                    var i = c.getTransitionDurationFromElement(e);
                    t(e).one(c.TRANSITION_END, (function (t) {
                        return n._destroyElement(e, t)
                    })).emulateTransitionEnd(i)
                } else this._destroyElement(e)
            }, n._destroyElement = function (e) {
                t(e).detach().trigger("closed.bs.alert").remove()
            }, e._jQueryInterface = function (n) {
                return this.each((function () {
                    var i = t(this), r = i.data("bs.alert");
                    r || (r = new e(this), i.data("bs.alert", r)), "close" === n && r[n](this)
                }))
            }, e._handleDismiss = function (e) {
                return function (t) {
                    t && t.preventDefault(), e.close(this)
                }
            }, r(e, null, [{
                key: "VERSION", get: function () {
                    return "4.5.0"
                }
            }]), e
        }();
        t(document).on("click.bs.alert.data-api", '[data-dismiss="alert"]', d._handleDismiss(new d)), t.fn[u] = d._jQueryInterface, t.fn[u].Constructor = d, t.fn[u].noConflict = function () {
            return t.fn[u] = f, d._jQueryInterface
        };
        var h = t.fn.button, p = function () {
            function e(e) {
                this._element = e
            }

            var n = e.prototype;
            return n.toggle = function () {
                var e = !0, n = !0, i = t(this._element).closest('[data-toggle="buttons"]')[0];
                if (i) {
                    var r = this._element.querySelector('input:not([type="hidden"])');
                    if (r) {
                        if ("radio" === r.type) if (r.checked && this._element.classList.contains("active")) e = !1; else {
                            var o = i.querySelector(".active");
                            o && t(o).removeClass("active")
                        }
                        e && ("checkbox" !== r.type && "radio" !== r.type || (r.checked = !this._element.classList.contains("active")), t(r).trigger("change")), r.focus(), n = !1
                    }
                }
                this._element.hasAttribute("disabled") || this._element.classList.contains("disabled") || (n && this._element.setAttribute("aria-pressed", !this._element.classList.contains("active")), e && t(this._element).toggleClass("active"))
            }, n.dispose = function () {
                t.removeData(this._element, "bs.button"), this._element = null
            }, e._jQueryInterface = function (n) {
                return this.each((function () {
                    var i = t(this).data("bs.button");
                    i || (i = new e(this), t(this).data("bs.button", i)), "toggle" === n && i[n]()
                }))
            }, r(e, null, [{
                key: "VERSION", get: function () {
                    return "4.5.0"
                }
            }]), e
        }();
        t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', (function (e) {
            var n = e.target, i = n;
            if (t(n).hasClass("btn") || (n = t(n).closest(".btn")[0]), !n || n.hasAttribute("disabled") || n.classList.contains("disabled")) e.preventDefault(); else {
                var r = n.querySelector('input:not([type="hidden"])');
                if (r && (r.hasAttribute("disabled") || r.classList.contains("disabled"))) return void e.preventDefault();
                "LABEL" === i.tagName && r && "checkbox" === r.type && e.preventDefault(), p._jQueryInterface.call(t(n), "toggle")
            }
        })).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', (function (e) {
            var n = t(e.target).closest(".btn")[0];
            t(n).toggleClass("focus", /^focus(in)?$/.test(e.type))
        })), t(window).on("load.bs.button.data-api", (function () {
            for (var e = [].slice.call(document.querySelectorAll('[data-toggle="buttons"] .btn')), t = 0, n = e.length; t < n; t++) {
                var i = e[t], r = i.querySelector('input:not([type="hidden"])');
                r.checked || r.hasAttribute("checked") ? i.classList.add("active") : i.classList.remove("active")
            }
            for (var o = 0, s = (e = [].slice.call(document.querySelectorAll('[data-toggle="button"]'))).length; o < s; o++) {
                var a = e[o];
                "true" === a.getAttribute("aria-pressed") ? a.classList.add("active") : a.classList.remove("active")
            }
        })), t.fn.button = p._jQueryInterface, t.fn.button.Constructor = p, t.fn.button.noConflict = function () {
            return t.fn.button = h, p._jQueryInterface
        };
        var g = "carousel", m = ".bs.carousel", v = t.fn[g],
            y = {interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0, touch: !0}, b = {
                interval: "(number|boolean)",
                keyboard: "boolean",
                slide: "(boolean|string)",
                pause: "(string|boolean)",
                wrap: "boolean",
                touch: "boolean"
            }, _ = {TOUCH: "touch", PEN: "pen"}, w = function () {
                function e(e, t) {
                    this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(t), this._element = e, this._indicatorsElement = this._element.querySelector(".carousel-indicators"), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners()
                }

                var n = e.prototype;
                return n.next = function () {
                    this._isSliding || this._slide("next")
                }, n.nextWhenVisible = function () {
                    !document.hidden && t(this._element).is(":visible") && "hidden" !== t(this._element).css("visibility") && this.next()
                }, n.prev = function () {
                    this._isSliding || this._slide("prev")
                }, n.pause = function (e) {
                    e || (this._isPaused = !0), this._element.querySelector(".carousel-item-next, .carousel-item-prev") && (c.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
                }, n.cycle = function (e) {
                    e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
                }, n.to = function (e) {
                    var n = this;
                    this._activeElement = this._element.querySelector(".active.carousel-item");
                    var i = this._getItemIndex(this._activeElement);
                    if (!(e > this._items.length - 1 || e < 0)) if (this._isSliding) t(this._element).one("slid.bs.carousel", (function () {
                        return n.to(e)
                    })); else {
                        if (i === e) return this.pause(), void this.cycle();
                        var r = e > i ? "next" : "prev";
                        this._slide(r, this._items[e])
                    }
                }, n.dispose = function () {
                    t(this._element).off(m), t.removeData(this._element, "bs.carousel"), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
                }, n._getConfig = function (e) {
                    return e = a(a({}, y), e), c.typeCheckConfig(g, e, b), e
                }, n._handleSwipe = function () {
                    var e = Math.abs(this.touchDeltaX);
                    if (!(e <= 40)) {
                        var t = e / this.touchDeltaX;
                        this.touchDeltaX = 0, t > 0 && this.prev(), t < 0 && this.next()
                    }
                }, n._addEventListeners = function () {
                    var e = this;
                    this._config.keyboard && t(this._element).on("keydown.bs.carousel", (function (t) {
                        return e._keydown(t)
                    })), "hover" === this._config.pause && t(this._element).on("mouseenter.bs.carousel", (function (t) {
                        return e.pause(t)
                    })).on("mouseleave.bs.carousel", (function (t) {
                        return e.cycle(t)
                    })), this._config.touch && this._addTouchEventListeners()
                }, n._addTouchEventListeners = function () {
                    var e = this;
                    if (this._touchSupported) {
                        var n = function (t) {
                            e._pointerEvent && _[t.originalEvent.pointerType.toUpperCase()] ? e.touchStartX = t.originalEvent.clientX : e._pointerEvent || (e.touchStartX = t.originalEvent.touches[0].clientX)
                        }, i = function (t) {
                            e._pointerEvent && _[t.originalEvent.pointerType.toUpperCase()] && (e.touchDeltaX = t.originalEvent.clientX - e.touchStartX), e._handleSwipe(), "hover" === e._config.pause && (e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout((function (t) {
                                return e.cycle(t)
                            }), 500 + e._config.interval))
                        };
                        t(this._element.querySelectorAll(".carousel-item img")).on("dragstart.bs.carousel", (function (e) {
                            return e.preventDefault()
                        })), this._pointerEvent ? (t(this._element).on("pointerdown.bs.carousel", (function (e) {
                            return n(e)
                        })), t(this._element).on("pointerup.bs.carousel", (function (e) {
                            return i(e)
                        })), this._element.classList.add("pointer-event")) : (t(this._element).on("touchstart.bs.carousel", (function (e) {
                            return n(e)
                        })), t(this._element).on("touchmove.bs.carousel", (function (t) {
                            return function (t) {
                                t.originalEvent.touches && t.originalEvent.touches.length > 1 ? e.touchDeltaX = 0 : e.touchDeltaX = t.originalEvent.touches[0].clientX - e.touchStartX
                            }(t)
                        })), t(this._element).on("touchend.bs.carousel", (function (e) {
                            return i(e)
                        })))
                    }
                }, n._keydown = function (e) {
                    if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
                        case 37:
                            e.preventDefault(), this.prev();
                            break;
                        case 39:
                            e.preventDefault(), this.next()
                    }
                }, n._getItemIndex = function (e) {
                    return this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll(".carousel-item")) : [], this._items.indexOf(e)
                }, n._getItemByDirection = function (e, t) {
                    var n = "next" === e, i = "prev" === e, r = this._getItemIndex(t), o = this._items.length - 1;
                    if ((i && 0 === r || n && r === o) && !this._config.wrap) return t;
                    var s = (r + ("prev" === e ? -1 : 1)) % this._items.length;
                    return -1 === s ? this._items[this._items.length - 1] : this._items[s]
                }, n._triggerSlideEvent = function (e, n) {
                    var i = this._getItemIndex(e),
                        r = this._getItemIndex(this._element.querySelector(".active.carousel-item")),
                        o = t.Event("slide.bs.carousel", {relatedTarget: e, direction: n, from: r, to: i});
                    return t(this._element).trigger(o), o
                }, n._setActiveIndicatorElement = function (e) {
                    if (this._indicatorsElement) {
                        var n = [].slice.call(this._indicatorsElement.querySelectorAll(".active"));
                        t(n).removeClass("active");
                        var i = this._indicatorsElement.children[this._getItemIndex(e)];
                        i && t(i).addClass("active")
                    }
                }, n._slide = function (e, n) {
                    var i, r, o, s = this, a = this._element.querySelector(".active.carousel-item"),
                        l = this._getItemIndex(a), u = n || a && this._getItemByDirection(e, a), f = this._getItemIndex(u),
                        d = Boolean(this._interval);
                    if ("next" === e ? (i = "carousel-item-left", r = "carousel-item-next", o = "left") : (i = "carousel-item-right", r = "carousel-item-prev", o = "right"), u && t(u).hasClass("active")) this._isSliding = !1; else if (!this._triggerSlideEvent(u, o).isDefaultPrevented() && a && u) {
                        this._isSliding = !0, d && this.pause(), this._setActiveIndicatorElement(u);
                        var h = t.Event("slid.bs.carousel", {relatedTarget: u, direction: o, from: l, to: f});
                        if (t(this._element).hasClass("slide")) {
                            t(u).addClass(r), c.reflow(u), t(a).addClass(i), t(u).addClass(i);
                            var p = parseInt(u.getAttribute("data-interval"), 10);
                            p ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = p) : this._config.interval = this._config.defaultInterval || this._config.interval;
                            var g = c.getTransitionDurationFromElement(a);
                            t(a).one(c.TRANSITION_END, (function () {
                                t(u).removeClass(i + " " + r).addClass("active"), t(a).removeClass("active " + r + " " + i), s._isSliding = !1, setTimeout((function () {
                                    return t(s._element).trigger(h)
                                }), 0)
                            })).emulateTransitionEnd(g)
                        } else t(a).removeClass("active"), t(u).addClass("active"), this._isSliding = !1, t(this._element).trigger(h);
                        d && this.cycle()
                    }
                }, e._jQueryInterface = function (n) {
                    return this.each((function () {
                        var i = t(this).data("bs.carousel"), r = a(a({}, y), t(this).data());
                        "object" == typeof n && (r = a(a({}, r), n));
                        var o = "string" == typeof n ? n : r.slide;
                        if (i || (i = new e(this, r), t(this).data("bs.carousel", i)), "number" == typeof n) i.to(n); else if ("string" == typeof o) {
                            if (void 0 === i[o]) throw new TypeError('No method named "' + o + '"');
                            i[o]()
                        } else r.interval && r.ride && (i.pause(), i.cycle())
                    }))
                }, e._dataApiClickHandler = function (n) {
                    var i = c.getSelectorFromElement(this);
                    if (i) {
                        var r = t(i)[0];
                        if (r && t(r).hasClass("carousel")) {
                            var o = a(a({}, t(r).data()), t(this).data()), s = this.getAttribute("data-slide-to");
                            s && (o.interval = !1), e._jQueryInterface.call(t(r), o), s && t(r).data("bs.carousel").to(s), n.preventDefault()
                        }
                    }
                }, r(e, null, [{
                    key: "VERSION", get: function () {
                        return "4.5.0"
                    }
                }, {
                    key: "Default", get: function () {
                        return y
                    }
                }]), e
            }();
        t(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", w._dataApiClickHandler), t(window).on("load.bs.carousel.data-api", (function () {
            for (var e = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), n = 0, i = e.length; n < i; n++) {
                var r = t(e[n]);
                w._jQueryInterface.call(r, r.data())
            }
        })), t.fn[g] = w._jQueryInterface, t.fn[g].Constructor = w, t.fn[g].noConflict = function () {
            return t.fn[g] = v, w._jQueryInterface
        };
        var x = "collapse", E = t.fn[x], T = {toggle: !0, parent: ""},
            C = {toggle: "boolean", parent: "(string|element)"}, S = function () {
                function e(e, t) {
                    this._isTransitioning = !1, this._element = e, this._config = this._getConfig(t), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
                    for (var n = [].slice.call(document.querySelectorAll('[data-toggle="collapse"]')), i = 0, r = n.length; i < r; i++) {
                        var o = n[i], s = c.getSelectorFromElement(o),
                            a = [].slice.call(document.querySelectorAll(s)).filter((function (t) {
                                return t === e
                            }));
                        null !== s && a.length > 0 && (this._selector = s, this._triggerArray.push(o))
                    }
                    this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
                }

                var n = e.prototype;
                return n.toggle = function () {
                    t(this._element).hasClass("show") ? this.hide() : this.show()
                }, n.show = function () {
                    var n, i, r = this;
                    if (!(this._isTransitioning || t(this._element).hasClass("show") || (this._parent && 0 === (n = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter((function (e) {
                        return "string" == typeof r._config.parent ? e.getAttribute("data-parent") === r._config.parent : e.classList.contains("collapse")
                    }))).length && (n = null), n && (i = t(n).not(this._selector).data("bs.collapse")) && i._isTransitioning))) {
                        var o = t.Event("show.bs.collapse");
                        if (t(this._element).trigger(o), !o.isDefaultPrevented()) {
                            n && (e._jQueryInterface.call(t(n).not(this._selector), "hide"), i || t(n).data("bs.collapse", null));
                            var s = this._getDimension();
                            t(this._element).removeClass("collapse").addClass("collapsing"), this._element.style[s] = 0, this._triggerArray.length && t(this._triggerArray).removeClass("collapsed").attr("aria-expanded", !0), this.setTransitioning(!0);
                            var a = "scroll" + (s[0].toUpperCase() + s.slice(1)),
                                l = c.getTransitionDurationFromElement(this._element);
                            t(this._element).one(c.TRANSITION_END, (function () {
                                t(r._element).removeClass("collapsing").addClass("collapse show"), r._element.style[s] = "", r.setTransitioning(!1), t(r._element).trigger("shown.bs.collapse")
                            })).emulateTransitionEnd(l), this._element.style[s] = this._element[a] + "px"
                        }
                    }
                }, n.hide = function () {
                    var e = this;
                    if (!this._isTransitioning && t(this._element).hasClass("show")) {
                        var n = t.Event("hide.bs.collapse");
                        if (t(this._element).trigger(n), !n.isDefaultPrevented()) {
                            var i = this._getDimension();
                            this._element.style[i] = this._element.getBoundingClientRect()[i] + "px", c.reflow(this._element), t(this._element).addClass("collapsing").removeClass("collapse show");
                            var r = this._triggerArray.length;
                            if (r > 0) for (var o = 0; o < r; o++) {
                                var s = this._triggerArray[o], a = c.getSelectorFromElement(s);
                                null !== a && (t([].slice.call(document.querySelectorAll(a))).hasClass("show") || t(s).addClass("collapsed").attr("aria-expanded", !1))
                            }
                            this.setTransitioning(!0), this._element.style[i] = "";
                            var l = c.getTransitionDurationFromElement(this._element);
                            t(this._element).one(c.TRANSITION_END, (function () {
                                e.setTransitioning(!1), t(e._element).removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                            })).emulateTransitionEnd(l)
                        }
                    }
                }, n.setTransitioning = function (e) {
                    this._isTransitioning = e
                }, n.dispose = function () {
                    t.removeData(this._element, "bs.collapse"), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
                }, n._getConfig = function (e) {
                    return (e = a(a({}, T), e)).toggle = Boolean(e.toggle), c.typeCheckConfig(x, e, C), e
                }, n._getDimension = function () {
                    return t(this._element).hasClass("width") ? "width" : "height"
                }, n._getParent = function () {
                    var n, i = this;
                    c.isElement(this._config.parent) ? (n = this._config.parent, void 0 !== this._config.parent.jquery && (n = this._config.parent[0])) : n = document.querySelector(this._config.parent);
                    var r = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                        o = [].slice.call(n.querySelectorAll(r));
                    return t(o).each((function (t, n) {
                        i._addAriaAndCollapsedClass(e._getTargetFromElement(n), [n])
                    })), n
                }, n._addAriaAndCollapsedClass = function (e, n) {
                    var i = t(e).hasClass("show");
                    n.length && t(n).toggleClass("collapsed", !i).attr("aria-expanded", i)
                }, e._getTargetFromElement = function (e) {
                    var t = c.getSelectorFromElement(e);
                    return t ? document.querySelector(t) : null
                }, e._jQueryInterface = function (n) {
                    return this.each((function () {
                        var i = t(this), r = i.data("bs.collapse"),
                            o = a(a(a({}, T), i.data()), "object" == typeof n && n ? n : {});
                        if (!r && o.toggle && "string" == typeof n && /show|hide/.test(n) && (o.toggle = !1), r || (r = new e(this, o), i.data("bs.collapse", r)), "string" == typeof n) {
                            if (void 0 === r[n]) throw new TypeError('No method named "' + n + '"');
                            r[n]()
                        }
                    }))
                }, r(e, null, [{
                    key: "VERSION", get: function () {
                        return "4.5.0"
                    }
                }, {
                    key: "Default", get: function () {
                        return T
                    }
                }]), e
            }();
        t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', (function (e) {
            "A" === e.currentTarget.tagName && e.preventDefault();
            var n = t(this), i = c.getSelectorFromElement(this), r = [].slice.call(document.querySelectorAll(i));
            t(r).each((function () {
                var e = t(this), i = e.data("bs.collapse") ? "toggle" : n.data();
                S._jQueryInterface.call(e, i)
            }))
        })), t.fn[x] = S._jQueryInterface, t.fn[x].Constructor = S, t.fn[x].noConflict = function () {
            return t.fn[x] = E, S._jQueryInterface
        };
        var k = "dropdown", D = t.fn[k], N = new RegExp("38|40|27"), A = {
            offset: 0,
            flip: !0,
            boundary: "scrollParent",
            reference: "toggle",
            display: "dynamic",
            popperConfig: null
        }, j = {
            offset: "(number|string|function)",
            flip: "boolean",
            boundary: "(string|element)",
            reference: "(string|element)",
            display: "string",
            popperConfig: "(null|object)"
        }, O = function () {
            function e(e, t) {
                this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
            }

            var i = e.prototype;
            return i.toggle = function () {
                if (!this._element.disabled && !t(this._element).hasClass("disabled")) {
                    var n = t(this._menu).hasClass("show");
                    e._clearMenus(), n || this.show(!0)
                }
            }, i.show = function (i) {
                if (void 0 === i && (i = !1), !(this._element.disabled || t(this._element).hasClass("disabled") || t(this._menu).hasClass("show"))) {
                    var r = {relatedTarget: this._element}, o = t.Event("show.bs.dropdown", r),
                        s = e._getParentFromElement(this._element);
                    if (t(s).trigger(o), !o.isDefaultPrevented()) {
                        if (!this._inNavbar && i) {
                            if (void 0 === n) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                            var a = this._element;
                            "parent" === this._config.reference ? a = s : c.isElement(this._config.reference) && (a = this._config.reference, void 0 !== this._config.reference.jquery && (a = this._config.reference[0])), "scrollParent" !== this._config.boundary && t(s).addClass("position-static"), this._popper = new n(a, this._menu, this._getPopperConfig())
                        }
                        "ontouchstart" in document.documentElement && 0 === t(s).closest(".navbar-nav").length && t(document.body).children().on("mouseover", null, t.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), t(this._menu).toggleClass("show"), t(s).toggleClass("show").trigger(t.Event("shown.bs.dropdown", r))
                    }
                }
            }, i.hide = function () {
                if (!this._element.disabled && !t(this._element).hasClass("disabled") && t(this._menu).hasClass("show")) {
                    var n = {relatedTarget: this._element}, i = t.Event("hide.bs.dropdown", n),
                        r = e._getParentFromElement(this._element);
                    t(r).trigger(i), i.isDefaultPrevented() || (this._popper && this._popper.destroy(), t(this._menu).toggleClass("show"), t(r).toggleClass("show").trigger(t.Event("hidden.bs.dropdown", n)))
                }
            }, i.dispose = function () {
                t.removeData(this._element, "bs.dropdown"), t(this._element).off(".bs.dropdown"), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null)
            }, i.update = function () {
                this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
            }, i._addEventListeners = function () {
                var e = this;
                t(this._element).on("click.bs.dropdown", (function (t) {
                    t.preventDefault(), t.stopPropagation(), e.toggle()
                }))
            }, i._getConfig = function (e) {
                return e = a(a(a({}, this.constructor.Default), t(this._element).data()), e), c.typeCheckConfig(k, e, this.constructor.DefaultType), e
            }, i._getMenuElement = function () {
                if (!this._menu) {
                    var t = e._getParentFromElement(this._element);
                    t && (this._menu = t.querySelector(".dropdown-menu"))
                }
                return this._menu
            }, i._getPlacement = function () {
                var e = t(this._element.parentNode), n = "bottom-start";
                return e.hasClass("dropup") ? n = t(this._menu).hasClass("dropdown-menu-right") ? "top-end" : "top-start" : e.hasClass("dropright") ? n = "right-start" : e.hasClass("dropleft") ? n = "left-start" : t(this._menu).hasClass("dropdown-menu-right") && (n = "bottom-end"), n
            }, i._detectNavbar = function () {
                return t(this._element).closest(".navbar").length > 0
            }, i._getOffset = function () {
                var e = this, t = {};
                return "function" == typeof this._config.offset ? t.fn = function (t) {
                    return t.offsets = a(a({}, t.offsets), e._config.offset(t.offsets, e._element) || {}), t
                } : t.offset = this._config.offset, t
            }, i._getPopperConfig = function () {
                var e = {
                    placement: this._getPlacement(),
                    modifiers: {
                        offset: this._getOffset(),
                        flip: {enabled: this._config.flip},
                        preventOverflow: {boundariesElement: this._config.boundary}
                    }
                };
                return "static" === this._config.display && (e.modifiers.applyStyle = {enabled: !1}), a(a({}, e), this._config.popperConfig)
            }, e._jQueryInterface = function (n) {
                return this.each((function () {
                    var i = t(this).data("bs.dropdown");
                    if (i || (i = new e(this, "object" == typeof n ? n : null), t(this).data("bs.dropdown", i)), "string" == typeof n) {
                        if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                        i[n]()
                    }
                }))
            }, e._clearMenus = function (n) {
                if (!n || 3 !== n.which && ("keyup" !== n.type || 9 === n.which)) for (var i = [].slice.call(document.querySelectorAll('[data-toggle="dropdown"]')), r = 0, o = i.length; r < o; r++) {
                    var s = e._getParentFromElement(i[r]), a = t(i[r]).data("bs.dropdown"), l = {relatedTarget: i[r]};
                    if (n && "click" === n.type && (l.clickEvent = n), a) {
                        var c = a._menu;
                        if (t(s).hasClass("show") && !(n && ("click" === n.type && /input|textarea/i.test(n.target.tagName) || "keyup" === n.type && 9 === n.which) && t.contains(s, n.target))) {
                            var u = t.Event("hide.bs.dropdown", l);
                            t(s).trigger(u), u.isDefaultPrevented() || ("ontouchstart" in document.documentElement && t(document.body).children().off("mouseover", null, t.noop), i[r].setAttribute("aria-expanded", "false"), a._popper && a._popper.destroy(), t(c).removeClass("show"), t(s).removeClass("show").trigger(t.Event("hidden.bs.dropdown", l)))
                        }
                    }
                }
            }, e._getParentFromElement = function (e) {
                var t, n = c.getSelectorFromElement(e);
                return n && (t = document.querySelector(n)), t || e.parentNode
            }, e._dataApiKeydownHandler = function (n) {
                if (!(/input|textarea/i.test(n.target.tagName) ? 32 === n.which || 27 !== n.which && (40 !== n.which && 38 !== n.which || t(n.target).closest(".dropdown-menu").length) : !N.test(n.which)) && !this.disabled && !t(this).hasClass("disabled")) {
                    var i = e._getParentFromElement(this), r = t(i).hasClass("show");
                    if (r || 27 !== n.which) {
                        if (n.preventDefault(), n.stopPropagation(), !r || r && (27 === n.which || 32 === n.which)) return 27 === n.which && t(i.querySelector('[data-toggle="dropdown"]')).trigger("focus"), void t(this).trigger("click");
                        var o = [].slice.call(i.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter((function (e) {
                            return t(e).is(":visible")
                        }));
                        if (0 !== o.length) {
                            var s = o.indexOf(n.target);
                            38 === n.which && s > 0 && s--, 40 === n.which && s < o.length - 1 && s++, s < 0 && (s = 0), o[s].focus()
                        }
                    }
                }
            }, r(e, null, [{
                key: "VERSION", get: function () {
                    return "4.5.0"
                }
            }, {
                key: "Default", get: function () {
                    return A
                }
            }, {
                key: "DefaultType", get: function () {
                    return j
                }
            }]), e
        }();
        t(document).on("keydown.bs.dropdown.data-api", '[data-toggle="dropdown"]', O._dataApiKeydownHandler).on("keydown.bs.dropdown.data-api", ".dropdown-menu", O._dataApiKeydownHandler).on("click.bs.dropdown.data-api keyup.bs.dropdown.data-api", O._clearMenus).on("click.bs.dropdown.data-api", '[data-toggle="dropdown"]', (function (e) {
            e.preventDefault(), e.stopPropagation(), O._jQueryInterface.call(t(this), "toggle")
        })).on("click.bs.dropdown.data-api", ".dropdown form", (function (e) {
            e.stopPropagation()
        })), t.fn[k] = O._jQueryInterface, t.fn[k].Constructor = O, t.fn[k].noConflict = function () {
            return t.fn[k] = D, O._jQueryInterface
        };
        var L = t.fn.modal, I = {backdrop: !0, keyboard: !0, focus: !0, show: !0},
            P = {backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean"},
            q = function () {
                function e(e, t) {
                    this._config = this._getConfig(t), this._element = e, this._dialog = e.querySelector(".modal-dialog"), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0
                }

                var n = e.prototype;
                return n.toggle = function (e) {
                    return this._isShown ? this.hide() : this.show(e)
                }, n.show = function (e) {
                    var n = this;
                    if (!this._isShown && !this._isTransitioning) {
                        t(this._element).hasClass("fade") && (this._isTransitioning = !0);
                        var i = t.Event("show.bs.modal", {relatedTarget: e});
                        t(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), t(this._element).on("click.dismiss.bs.modal", '[data-dismiss="modal"]', (function (e) {
                            return n.hide(e)
                        })), t(this._dialog).on("mousedown.dismiss.bs.modal", (function () {
                            t(n._element).one("mouseup.dismiss.bs.modal", (function (e) {
                                t(e.target).is(n._element) && (n._ignoreBackdropClick = !0)
                            }))
                        })), this._showBackdrop((function () {
                            return n._showElement(e)
                        })))
                    }
                }, n.hide = function (e) {
                    var n = this;
                    if (e && e.preventDefault(), this._isShown && !this._isTransitioning) {
                        var i = t.Event("hide.bs.modal");
                        if (t(this._element).trigger(i), this._isShown && !i.isDefaultPrevented()) {
                            this._isShown = !1;
                            var r = t(this._element).hasClass("fade");
                            if (r && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), t(document).off("focusin.bs.modal"), t(this._element).removeClass("show"), t(this._element).off("click.dismiss.bs.modal"), t(this._dialog).off("mousedown.dismiss.bs.modal"), r) {
                                var o = c.getTransitionDurationFromElement(this._element);
                                t(this._element).one(c.TRANSITION_END, (function (e) {
                                    return n._hideModal(e)
                                })).emulateTransitionEnd(o)
                            } else this._hideModal()
                        }
                    }
                }, n.dispose = function () {
                    [window, this._element, this._dialog].forEach((function (e) {
                        return t(e).off(".bs.modal")
                    })), t(document).off("focusin.bs.modal"), t.removeData(this._element, "bs.modal"), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null
                }, n.handleUpdate = function () {
                    this._adjustDialog()
                }, n._getConfig = function (e) {
                    return e = a(a({}, I), e), c.typeCheckConfig("modal", e, P), e
                }, n._triggerBackdropTransition = function () {
                    var e = this;
                    if ("static" === this._config.backdrop) {
                        var n = t.Event("hidePrevented.bs.modal");
                        if (t(this._element).trigger(n), n.defaultPrevented) return;
                        this._element.classList.add("modal-static");
                        var i = c.getTransitionDurationFromElement(this._element);
                        t(this._element).one(c.TRANSITION_END, (function () {
                            e._element.classList.remove("modal-static")
                        })).emulateTransitionEnd(i), this._element.focus()
                    } else this.hide()
                }, n._showElement = function (e) {
                    var n = this, i = t(this._element).hasClass("fade"),
                        r = this._dialog ? this._dialog.querySelector(".modal-body") : null;
                    this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), t(this._dialog).hasClass("modal-dialog-scrollable") && r ? r.scrollTop = 0 : this._element.scrollTop = 0, i && c.reflow(this._element), t(this._element).addClass("show"), this._config.focus && this._enforceFocus();
                    var o = t.Event("shown.bs.modal", {relatedTarget: e}), s = function () {
                        n._config.focus && n._element.focus(), n._isTransitioning = !1, t(n._element).trigger(o)
                    };
                    if (i) {
                        var a = c.getTransitionDurationFromElement(this._dialog);
                        t(this._dialog).one(c.TRANSITION_END, s).emulateTransitionEnd(a)
                    } else s()
                }, n._enforceFocus = function () {
                    var e = this;
                    t(document).off("focusin.bs.modal").on("focusin.bs.modal", (function (n) {
                        document !== n.target && e._element !== n.target && 0 === t(e._element).has(n.target).length && e._element.focus()
                    }))
                }, n._setEscapeEvent = function () {
                    var e = this;
                    this._isShown ? t(this._element).on("keydown.dismiss.bs.modal", (function (t) {
                        e._config.keyboard && 27 === t.which ? (t.preventDefault(), e.hide()) : e._config.keyboard || 27 !== t.which || e._triggerBackdropTransition()
                    })) : this._isShown || t(this._element).off("keydown.dismiss.bs.modal")
                }, n._setResizeEvent = function () {
                    var e = this;
                    this._isShown ? t(window).on("resize.bs.modal", (function (t) {
                        return e.handleUpdate(t)
                    })) : t(window).off("resize.bs.modal")
                }, n._hideModal = function () {
                    var e = this;
                    this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._isTransitioning = !1, this._showBackdrop((function () {
                        t(document.body).removeClass("modal-open"), e._resetAdjustments(), e._resetScrollbar(), t(e._element).trigger("hidden.bs.modal")
                    }))
                }, n._removeBackdrop = function () {
                    this._backdrop && (t(this._backdrop).remove(), this._backdrop = null)
                }, n._showBackdrop = function (e) {
                    var n = this, i = t(this._element).hasClass("fade") ? "fade" : "";
                    if (this._isShown && this._config.backdrop) {
                        if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", i && this._backdrop.classList.add(i), t(this._backdrop).appendTo(document.body), t(this._element).on("click.dismiss.bs.modal", (function (e) {
                            n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : e.target === e.currentTarget && n._triggerBackdropTransition()
                        })), i && c.reflow(this._backdrop), t(this._backdrop).addClass("show"), !e) return;
                        if (!i) return void e();
                        var r = c.getTransitionDurationFromElement(this._backdrop);
                        t(this._backdrop).one(c.TRANSITION_END, e).emulateTransitionEnd(r)
                    } else if (!this._isShown && this._backdrop) {
                        t(this._backdrop).removeClass("show");
                        var o = function () {
                            n._removeBackdrop(), e && e()
                        };
                        if (t(this._element).hasClass("fade")) {
                            var s = c.getTransitionDurationFromElement(this._backdrop);
                            t(this._backdrop).one(c.TRANSITION_END, o).emulateTransitionEnd(s)
                        } else o()
                    } else e && e()
                }, n._adjustDialog = function () {
                    var e = this._element.scrollHeight > document.documentElement.clientHeight;
                    !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
                }, n._resetAdjustments = function () {
                    this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
                }, n._checkScrollbar = function () {
                    var e = document.body.getBoundingClientRect();
                    this._isBodyOverflowing = Math.round(e.left + e.right) < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
                }, n._setScrollbar = function () {
                    var e = this;
                    if (this._isBodyOverflowing) {
                        var n = [].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")),
                            i = [].slice.call(document.querySelectorAll(".sticky-top"));
                        t(n).each((function (n, i) {
                            var r = i.style.paddingRight, o = t(i).css("padding-right");
                            t(i).data("padding-right", r).css("padding-right", parseFloat(o) + e._scrollbarWidth + "px")
                        })), t(i).each((function (n, i) {
                            var r = i.style.marginRight, o = t(i).css("margin-right");
                            t(i).data("margin-right", r).css("margin-right", parseFloat(o) - e._scrollbarWidth + "px")
                        }));
                        var r = document.body.style.paddingRight, o = t(document.body).css("padding-right");
                        t(document.body).data("padding-right", r).css("padding-right", parseFloat(o) + this._scrollbarWidth + "px")
                    }
                    t(document.body).addClass("modal-open")
                }, n._resetScrollbar = function () {
                    var e = [].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"));
                    t(e).each((function (e, n) {
                        var i = t(n).data("padding-right");
                        t(n).removeData("padding-right"), n.style.paddingRight = i || ""
                    }));
                    var n = [].slice.call(document.querySelectorAll(".sticky-top"));
                    t(n).each((function (e, n) {
                        var i = t(n).data("margin-right");
                        void 0 !== i && t(n).css("margin-right", i).removeData("margin-right")
                    }));
                    var i = t(document.body).data("padding-right");
                    t(document.body).removeData("padding-right"), document.body.style.paddingRight = i || ""
                }, n._getScrollbarWidth = function () {
                    var e = document.createElement("div");
                    e.className = "modal-scrollbar-measure", document.body.appendChild(e);
                    var t = e.getBoundingClientRect().width - e.clientWidth;
                    return document.body.removeChild(e), t
                }, e._jQueryInterface = function (n, i) {
                    return this.each((function () {
                        var r = t(this).data("bs.modal"),
                            o = a(a(a({}, I), t(this).data()), "object" == typeof n && n ? n : {});
                        if (r || (r = new e(this, o), t(this).data("bs.modal", r)), "string" == typeof n) {
                            if (void 0 === r[n]) throw new TypeError('No method named "' + n + '"');
                            r[n](i)
                        } else o.show && r.show(i)
                    }))
                }, r(e, null, [{
                    key: "VERSION", get: function () {
                        return "4.5.0"
                    }
                }, {
                    key: "Default", get: function () {
                        return I
                    }
                }]), e
            }();
        t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', (function (e) {
            var n, i = this, r = c.getSelectorFromElement(this);
            r && (n = document.querySelector(r));
            var o = t(n).data("bs.modal") ? "toggle" : a(a({}, t(n).data()), t(this).data());
            "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
            var s = t(n).one("show.bs.modal", (function (e) {
                e.isDefaultPrevented() || s.one("hidden.bs.modal", (function () {
                    t(i).is(":visible") && i.focus()
                }))
            }));
            q._jQueryInterface.call(t(n), o, this)
        })), t.fn.modal = q._jQueryInterface, t.fn.modal.Constructor = q, t.fn.modal.noConflict = function () {
            return t.fn.modal = L, q._jQueryInterface
        };
        var H = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"], R = {
                "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
                a: ["target", "href", "title", "rel"],
                area: [],
                b: [],
                br: [],
                col: [],
                code: [],
                div: [],
                em: [],
                hr: [],
                h1: [],
                h2: [],
                h3: [],
                h4: [],
                h5: [],
                h6: [],
                i: [],
                img: ["src", "srcset", "alt", "title", "width", "height"],
                li: [],
                ol: [],
                p: [],
                pre: [],
                s: [],
                small: [],
                span: [],
                sub: [],
                sup: [],
                strong: [],
                u: [],
                ul: []
            }, M = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,
            F = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

        function B(e, t, n) {
            if (0 === e.length) return e;
            if (n && "function" == typeof n) return n(e);
            for (var i = (new window.DOMParser).parseFromString(e, "text/html"), r = Object.keys(t), o = [].slice.call(i.body.querySelectorAll("*")), s = function (e, n) {
                var i = o[e], s = i.nodeName.toLowerCase();
                if (-1 === r.indexOf(i.nodeName.toLowerCase())) return i.parentNode.removeChild(i), "continue";
                var a = [].slice.call(i.attributes), l = [].concat(t["*"] || [], t[s] || []);
                a.forEach((function (e) {
                    (function (e, t) {
                        var n = e.nodeName.toLowerCase();
                        if (-1 !== t.indexOf(n)) return -1 === H.indexOf(n) || Boolean(e.nodeValue.match(M) || e.nodeValue.match(F));
                        for (var i = t.filter((function (e) {
                            return e instanceof RegExp
                        })), r = 0, o = i.length; r < o; r++) if (n.match(i[r])) return !0;
                        return !1
                    })(e, l) || i.removeAttribute(e.nodeName)
                }))
            }, a = 0, l = o.length; a < l; a++) s(a);
            return i.body.innerHTML
        }

        var W = "tooltip", U = t.fn[W], Q = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
            $ = ["sanitize", "whiteList", "sanitizeFn"], z = {
                animation: "boolean",
                template: "string",
                title: "(string|element|function)",
                trigger: "string",
                delay: "(number|object)",
                html: "boolean",
                selector: "(string|boolean)",
                placement: "(string|function)",
                offset: "(number|string|function)",
                container: "(string|element|boolean)",
                fallbackPlacement: "(string|array)",
                boundary: "(string|element)",
                sanitize: "boolean",
                sanitizeFn: "(null|function)",
                whiteList: "object",
                popperConfig: "(null|object)"
            }, V = {AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left"}, X = {
                animation: !0,
                template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
                trigger: "hover focus",
                title: "",
                delay: 0,
                html: !1,
                selector: !1,
                placement: "top",
                offset: 0,
                container: !1,
                fallbackPlacement: "flip",
                boundary: "scrollParent",
                sanitize: !0,
                sanitizeFn: null,
                whiteList: R,
                popperConfig: null
            }, Y = {
                HIDE: "hide.bs.tooltip",
                HIDDEN: "hidden.bs.tooltip",
                SHOW: "show.bs.tooltip",
                SHOWN: "shown.bs.tooltip",
                INSERTED: "inserted.bs.tooltip",
                CLICK: "click.bs.tooltip",
                FOCUSIN: "focusin.bs.tooltip",
                FOCUSOUT: "focusout.bs.tooltip",
                MOUSEENTER: "mouseenter.bs.tooltip",
                MOUSELEAVE: "mouseleave.bs.tooltip"
            }, K = function () {
                function e(e, t) {
                    if (void 0 === n) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
                    this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners()
                }

                var i = e.prototype;
                return i.enable = function () {
                    this._isEnabled = !0
                }, i.disable = function () {
                    this._isEnabled = !1
                }, i.toggleEnabled = function () {
                    this._isEnabled = !this._isEnabled
                }, i.toggle = function (e) {
                    if (this._isEnabled) if (e) {
                        var n = this.constructor.DATA_KEY, i = t(e.currentTarget).data(n);
                        i || (i = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(n, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
                    } else {
                        if (t(this.getTipElement()).hasClass("show")) return void this._leave(null, this);
                        this._enter(null, this)
                    }
                }, i.dispose = function () {
                    clearTimeout(this._timeout), t.removeData(this.element, this.constructor.DATA_KEY), t(this.element).off(this.constructor.EVENT_KEY), t(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler), this.tip && t(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
                }, i.show = function () {
                    var e = this;
                    if ("none" === t(this.element).css("display")) throw new Error("Please use show on visible elements");
                    var i = t.Event(this.constructor.Event.SHOW);
                    if (this.isWithContent() && this._isEnabled) {
                        t(this.element).trigger(i);
                        var r = c.findShadowRoot(this.element),
                            o = t.contains(null !== r ? r : this.element.ownerDocument.documentElement, this.element);
                        if (i.isDefaultPrevented() || !o) return;
                        var s = this.getTipElement(), a = c.getUID(this.constructor.NAME);
                        s.setAttribute("id", a), this.element.setAttribute("aria-describedby", a), this.setContent(), this.config.animation && t(s).addClass("fade");
                        var l = "function" == typeof this.config.placement ? this.config.placement.call(this, s, this.element) : this.config.placement,
                            u = this._getAttachment(l);
                        this.addAttachmentClass(u);
                        var f = this._getContainer();
                        t(s).data(this.constructor.DATA_KEY, this), t.contains(this.element.ownerDocument.documentElement, this.tip) || t(s).appendTo(f), t(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new n(this.element, s, this._getPopperConfig(u)), t(s).addClass("show"), "ontouchstart" in document.documentElement && t(document.body).children().on("mouseover", null, t.noop);
                        var d = function () {
                            e.config.animation && e._fixTransition();
                            var n = e._hoverState;
                            e._hoverState = null, t(e.element).trigger(e.constructor.Event.SHOWN), "out" === n && e._leave(null, e)
                        };
                        if (t(this.tip).hasClass("fade")) {
                            var h = c.getTransitionDurationFromElement(this.tip);
                            t(this.tip).one(c.TRANSITION_END, d).emulateTransitionEnd(h)
                        } else d()
                    }
                }, i.hide = function (e) {
                    var n = this, i = this.getTipElement(), r = t.Event(this.constructor.Event.HIDE), o = function () {
                        "show" !== n._hoverState && i.parentNode && i.parentNode.removeChild(i), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), t(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), e && e()
                    };
                    if (t(this.element).trigger(r), !r.isDefaultPrevented()) {
                        if (t(i).removeClass("show"), "ontouchstart" in document.documentElement && t(document.body).children().off("mouseover", null, t.noop), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1, t(this.tip).hasClass("fade")) {
                            var s = c.getTransitionDurationFromElement(i);
                            t(i).one(c.TRANSITION_END, o).emulateTransitionEnd(s)
                        } else o();
                        this._hoverState = ""
                    }
                }, i.update = function () {
                    null !== this._popper && this._popper.scheduleUpdate()
                }, i.isWithContent = function () {
                    return Boolean(this.getTitle())
                }, i.addAttachmentClass = function (e) {
                    t(this.getTipElement()).addClass("bs-tooltip-" + e)
                }, i.getTipElement = function () {
                    return this.tip = this.tip || t(this.config.template)[0], this.tip
                }, i.setContent = function () {
                    var e = this.getTipElement();
                    this.setElementContent(t(e.querySelectorAll(".tooltip-inner")), this.getTitle()), t(e).removeClass("fade show")
                }, i.setElementContent = function (e, n) {
                    "object" != typeof n || !n.nodeType && !n.jquery ? this.config.html ? (this.config.sanitize && (n = B(n, this.config.whiteList, this.config.sanitizeFn)), e.html(n)) : e.text(n) : this.config.html ? t(n).parent().is(e) || e.empty().append(n) : e.text(t(n).text())
                }, i.getTitle = function () {
                    var e = this.element.getAttribute("data-original-title");
                    return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e
                }, i._getPopperConfig = function (e) {
                    var t = this;
                    return a(a({}, {
                        placement: e,
                        modifiers: {
                            offset: this._getOffset(),
                            flip: {behavior: this.config.fallbackPlacement},
                            arrow: {element: ".arrow"},
                            preventOverflow: {boundariesElement: this.config.boundary}
                        },
                        onCreate: function (e) {
                            e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e)
                        },
                        onUpdate: function (e) {
                            return t._handlePopperPlacementChange(e)
                        }
                    }), this.config.popperConfig)
                }, i._getOffset = function () {
                    var e = this, t = {};
                    return "function" == typeof this.config.offset ? t.fn = function (t) {
                        return t.offsets = a(a({}, t.offsets), e.config.offset(t.offsets, e.element) || {}), t
                    } : t.offset = this.config.offset, t
                }, i._getContainer = function () {
                    return !1 === this.config.container ? document.body : c.isElement(this.config.container) ? t(this.config.container) : t(document).find(this.config.container)
                }, i._getAttachment = function (e) {
                    return V[e.toUpperCase()]
                }, i._setListeners = function () {
                    var e = this;
                    this.config.trigger.split(" ").forEach((function (n) {
                        if ("click" === n) t(e.element).on(e.constructor.Event.CLICK, e.config.selector, (function (t) {
                            return e.toggle(t)
                        })); else if ("manual" !== n) {
                            var i = "hover" === n ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
                                r = "hover" === n ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                            t(e.element).on(i, e.config.selector, (function (t) {
                                return e._enter(t)
                            })).on(r, e.config.selector, (function (t) {
                                return e._leave(t)
                            }))
                        }
                    })), this._hideModalHandler = function () {
                        e.element && e.hide()
                    }, t(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler), this.config.selector ? this.config = a(a({}, this.config), {}, {
                        trigger: "manual",
                        selector: ""
                    }) : this._fixTitle()
                }, i._fixTitle = function () {
                    var e = typeof this.element.getAttribute("data-original-title");
                    (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
                }, i._enter = function (e, n) {
                    var i = this.constructor.DATA_KEY;
                    (n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusin" === e.type ? "focus" : "hover"] = !0), t(n.getTipElement()).hasClass("show") || "show" === n._hoverState ? n._hoverState = "show" : (clearTimeout(n._timeout), n._hoverState = "show", n.config.delay && n.config.delay.show ? n._timeout = setTimeout((function () {
                        "show" === n._hoverState && n.show()
                    }), n.config.delay.show) : n.show())
                }, i._leave = function (e, n) {
                    var i = this.constructor.DATA_KEY;
                    (n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusout" === e.type ? "focus" : "hover"] = !1), n._isWithActiveTrigger() || (clearTimeout(n._timeout), n._hoverState = "out", n.config.delay && n.config.delay.hide ? n._timeout = setTimeout((function () {
                        "out" === n._hoverState && n.hide()
                    }), n.config.delay.hide) : n.hide())
                }, i._isWithActiveTrigger = function () {
                    for (var e in this._activeTrigger) if (this._activeTrigger[e]) return !0;
                    return !1
                }, i._getConfig = function (e) {
                    var n = t(this.element).data();
                    return Object.keys(n).forEach((function (e) {
                        -1 !== $.indexOf(e) && delete n[e]
                    })), "number" == typeof (e = a(a(a({}, this.constructor.Default), n), "object" == typeof e && e ? e : {})).delay && (e.delay = {
                        show: e.delay,
                        hide: e.delay
                    }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), c.typeCheckConfig(W, e, this.constructor.DefaultType), e.sanitize && (e.template = B(e.template, e.whiteList, e.sanitizeFn)), e
                }, i._getDelegateConfig = function () {
                    var e = {};
                    if (this.config) for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
                    return e
                }, i._cleanTipClass = function () {
                    var e = t(this.getTipElement()), n = e.attr("class").match(Q);
                    null !== n && n.length && e.removeClass(n.join(""))
                }, i._handlePopperPlacementChange = function (e) {
                    this.tip = e.instance.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement))
                }, i._fixTransition = function () {
                    var e = this.getTipElement(), n = this.config.animation;
                    null === e.getAttribute("x-placement") && (t(e).removeClass("fade"), this.config.animation = !1, this.hide(), this.show(), this.config.animation = n)
                }, e._jQueryInterface = function (n) {
                    return this.each((function () {
                        var i = t(this).data("bs.tooltip"), r = "object" == typeof n && n;
                        if ((i || !/dispose|hide/.test(n)) && (i || (i = new e(this, r), t(this).data("bs.tooltip", i)), "string" == typeof n)) {
                            if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                            i[n]()
                        }
                    }))
                }, r(e, null, [{
                    key: "VERSION", get: function () {
                        return "4.5.0"
                    }
                }, {
                    key: "Default", get: function () {
                        return X
                    }
                }, {
                    key: "NAME", get: function () {
                        return W
                    }
                }, {
                    key: "DATA_KEY", get: function () {
                        return "bs.tooltip"
                    }
                }, {
                    key: "Event", get: function () {
                        return Y
                    }
                }, {
                    key: "EVENT_KEY", get: function () {
                        return ".bs.tooltip"
                    }
                }, {
                    key: "DefaultType", get: function () {
                        return z
                    }
                }]), e
            }();
        t.fn[W] = K._jQueryInterface, t.fn[W].Constructor = K, t.fn[W].noConflict = function () {
            return t.fn[W] = U, K._jQueryInterface
        };
        var G = "popover", J = t.fn[G], Z = new RegExp("(^|\\s)bs-popover\\S+", "g"), ee = a(a({}, K.Default), {}, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        }), te = a(a({}, K.DefaultType), {}, {content: "(string|element|function)"}), ne = {
            HIDE: "hide.bs.popover",
            HIDDEN: "hidden.bs.popover",
            SHOW: "show.bs.popover",
            SHOWN: "shown.bs.popover",
            INSERTED: "inserted.bs.popover",
            CLICK: "click.bs.popover",
            FOCUSIN: "focusin.bs.popover",
            FOCUSOUT: "focusout.bs.popover",
            MOUSEENTER: "mouseenter.bs.popover",
            MOUSELEAVE: "mouseleave.bs.popover"
        }, ie = function (e) {
            var n, i;

            function o() {
                return e.apply(this, arguments) || this
            }

            i = e, (n = o).prototype = Object.create(i.prototype), n.prototype.constructor = n, n.__proto__ = i;
            var s = o.prototype;
            return s.isWithContent = function () {
                return this.getTitle() || this._getContent()
            }, s.addAttachmentClass = function (e) {
                t(this.getTipElement()).addClass("bs-popover-" + e)
            }, s.getTipElement = function () {
                return this.tip = this.tip || t(this.config.template)[0], this.tip
            }, s.setContent = function () {
                var e = t(this.getTipElement());
                this.setElementContent(e.find(".popover-header"), this.getTitle());
                var n = this._getContent();
                "function" == typeof n && (n = n.call(this.element)), this.setElementContent(e.find(".popover-body"), n), e.removeClass("fade show")
            }, s._getContent = function () {
                return this.element.getAttribute("data-content") || this.config.content
            }, s._cleanTipClass = function () {
                var e = t(this.getTipElement()), n = e.attr("class").match(Z);
                null !== n && n.length > 0 && e.removeClass(n.join(""))
            }, o._jQueryInterface = function (e) {
                return this.each((function () {
                    var n = t(this).data("bs.popover"), i = "object" == typeof e ? e : null;
                    if ((n || !/dispose|hide/.test(e)) && (n || (n = new o(this, i), t(this).data("bs.popover", n)), "string" == typeof e)) {
                        if (void 0 === n[e]) throw new TypeError('No method named "' + e + '"');
                        n[e]()
                    }
                }))
            }, r(o, null, [{
                key: "VERSION", get: function () {
                    return "4.5.0"
                }
            }, {
                key: "Default", get: function () {
                    return ee
                }
            }, {
                key: "NAME", get: function () {
                    return G
                }
            }, {
                key: "DATA_KEY", get: function () {
                    return "bs.popover"
                }
            }, {
                key: "Event", get: function () {
                    return ne
                }
            }, {
                key: "EVENT_KEY", get: function () {
                    return ".bs.popover"
                }
            }, {
                key: "DefaultType", get: function () {
                    return te
                }
            }]), o
        }(K);
        t.fn[G] = ie._jQueryInterface, t.fn[G].Constructor = ie, t.fn[G].noConflict = function () {
            return t.fn[G] = J, ie._jQueryInterface
        };
        var re = "scrollspy", oe = t.fn[re], se = {offset: 10, method: "auto", target: ""},
            ae = {offset: "number", method: "string", target: "(string|element)"}, le = function () {
                function e(e, n) {
                    var i = this;
                    this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(n), this._selector = this._config.target + " .nav-link," + this._config.target + " .list-group-item," + this._config.target + " .dropdown-item", this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, t(this._scrollElement).on("scroll.bs.scrollspy", (function (e) {
                        return i._process(e)
                    })), this.refresh(), this._process()
                }

                var n = e.prototype;
                return n.refresh = function () {
                    var e = this, n = this._scrollElement === this._scrollElement.window ? "offset" : "position",
                        i = "auto" === this._config.method ? n : this._config.method,
                        r = "position" === i ? this._getScrollTop() : 0;
                    this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map((function (e) {
                        var n, o = c.getSelectorFromElement(e);
                        if (o && (n = document.querySelector(o)), n) {
                            var s = n.getBoundingClientRect();
                            if (s.width || s.height) return [t(n)[i]().top + r, o]
                        }
                        return null
                    })).filter((function (e) {
                        return e
                    })).sort((function (e, t) {
                        return e[0] - t[0]
                    })).forEach((function (t) {
                        e._offsets.push(t[0]), e._targets.push(t[1])
                    }))
                }, n.dispose = function () {
                    t.removeData(this._element, "bs.scrollspy"), t(this._scrollElement).off(".bs.scrollspy"), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
                }, n._getConfig = function (e) {
                    if ("string" != typeof (e = a(a({}, se), "object" == typeof e && e ? e : {})).target && c.isElement(e.target)) {
                        var n = t(e.target).attr("id");
                        n || (n = c.getUID(re), t(e.target).attr("id", n)), e.target = "#" + n
                    }
                    return c.typeCheckConfig(re, e, ae), e
                }, n._getScrollTop = function () {
                    return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
                }, n._getScrollHeight = function () {
                    return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                }, n._getOffsetHeight = function () {
                    return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
                }, n._process = function () {
                    var e = this._getScrollTop() + this._config.offset, t = this._getScrollHeight(),
                        n = this._config.offset + t - this._getOffsetHeight();
                    if (this._scrollHeight !== t && this.refresh(), e >= n) {
                        var i = this._targets[this._targets.length - 1];
                        this._activeTarget !== i && this._activate(i)
                    } else {
                        if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                        for (var r = this._offsets.length; r--;) this._activeTarget !== this._targets[r] && e >= this._offsets[r] && (void 0 === this._offsets[r + 1] || e < this._offsets[r + 1]) && this._activate(this._targets[r])
                    }
                }, n._activate = function (e) {
                    this._activeTarget = e, this._clear();
                    var n = this._selector.split(",").map((function (t) {
                        return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                    })), i = t([].slice.call(document.querySelectorAll(n.join(","))));
                    i.hasClass("dropdown-item") ? (i.closest(".dropdown").find(".dropdown-toggle").addClass("active"), i.addClass("active")) : (i.addClass("active"), i.parents(".nav, .list-group").prev(".nav-link, .list-group-item").addClass("active"), i.parents(".nav, .list-group").prev(".nav-item").children(".nav-link").addClass("active")), t(this._scrollElement).trigger("activate.bs.scrollspy", {relatedTarget: e})
                }, n._clear = function () {
                    [].slice.call(document.querySelectorAll(this._selector)).filter((function (e) {
                        return e.classList.contains("active")
                    })).forEach((function (e) {
                        return e.classList.remove("active")
                    }))
                }, e._jQueryInterface = function (n) {
                    return this.each((function () {
                        var i = t(this).data("bs.scrollspy");
                        if (i || (i = new e(this, "object" == typeof n && n), t(this).data("bs.scrollspy", i)), "string" == typeof n) {
                            if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                            i[n]()
                        }
                    }))
                }, r(e, null, [{
                    key: "VERSION", get: function () {
                        return "4.5.0"
                    }
                }, {
                    key: "Default", get: function () {
                        return se
                    }
                }]), e
            }();
        t(window).on("load.bs.scrollspy.data-api", (function () {
            for (var e = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), n = e.length; n--;) {
                var i = t(e[n]);
                le._jQueryInterface.call(i, i.data())
            }
        })), t.fn[re] = le._jQueryInterface, t.fn[re].Constructor = le, t.fn[re].noConflict = function () {
            return t.fn[re] = oe, le._jQueryInterface
        };
        var ce = t.fn.tab, ue = function () {
            function e(e) {
                this._element = e
            }

            var n = e.prototype;
            return n.show = function () {
                var e = this;
                if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && t(this._element).hasClass("active") || t(this._element).hasClass("disabled"))) {
                    var n, i, r = t(this._element).closest(".nav, .list-group")[0],
                        o = c.getSelectorFromElement(this._element);
                    if (r) {
                        var s = "UL" === r.nodeName || "OL" === r.nodeName ? "> li > .active" : ".active";
                        i = (i = t.makeArray(t(r).find(s)))[i.length - 1]
                    }
                    var a = t.Event("hide.bs.tab", {relatedTarget: this._element}),
                        l = t.Event("show.bs.tab", {relatedTarget: i});
                    if (i && t(i).trigger(a), t(this._element).trigger(l), !l.isDefaultPrevented() && !a.isDefaultPrevented()) {
                        o && (n = document.querySelector(o)), this._activate(this._element, r);
                        var u = function () {
                            var n = t.Event("hidden.bs.tab", {relatedTarget: e._element}),
                                r = t.Event("shown.bs.tab", {relatedTarget: i});
                            t(i).trigger(n), t(e._element).trigger(r)
                        };
                        n ? this._activate(n, n.parentNode, u) : u()
                    }
                }
            }, n.dispose = function () {
                t.removeData(this._element, "bs.tab"), this._element = null
            }, n._activate = function (e, n, i) {
                var r = this,
                    o = (!n || "UL" !== n.nodeName && "OL" !== n.nodeName ? t(n).children(".active") : t(n).find("> li > .active"))[0],
                    s = i && o && t(o).hasClass("fade"), a = function () {
                        return r._transitionComplete(e, o, i)
                    };
                if (o && s) {
                    var l = c.getTransitionDurationFromElement(o);
                    t(o).removeClass("show").one(c.TRANSITION_END, a).emulateTransitionEnd(l)
                } else a()
            }, n._transitionComplete = function (e, n, i) {
                if (n) {
                    t(n).removeClass("active");
                    var r = t(n.parentNode).find("> .dropdown-menu .active")[0];
                    r && t(r).removeClass("active"), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1)
                }
                if (t(e).addClass("active"), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), c.reflow(e), e.classList.contains("fade") && e.classList.add("show"), e.parentNode && t(e.parentNode).hasClass("dropdown-menu")) {
                    var o = t(e).closest(".dropdown")[0];
                    if (o) {
                        var s = [].slice.call(o.querySelectorAll(".dropdown-toggle"));
                        t(s).addClass("active")
                    }
                    e.setAttribute("aria-expanded", !0)
                }
                i && i()
            }, e._jQueryInterface = function (n) {
                return this.each((function () {
                    var i = t(this), r = i.data("bs.tab");
                    if (r || (r = new e(this), i.data("bs.tab", r)), "string" == typeof n) {
                        if (void 0 === r[n]) throw new TypeError('No method named "' + n + '"');
                        r[n]()
                    }
                }))
            }, r(e, null, [{
                key: "VERSION", get: function () {
                    return "4.5.0"
                }
            }]), e
        }();
        t(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', (function (e) {
            e.preventDefault(), ue._jQueryInterface.call(t(this), "show")
        })), t.fn.tab = ue._jQueryInterface, t.fn.tab.Constructor = ue, t.fn.tab.noConflict = function () {
            return t.fn.tab = ce, ue._jQueryInterface
        };
        var fe = t.fn.toast, de = {animation: "boolean", autohide: "boolean", delay: "number"},
            he = {animation: !0, autohide: !0, delay: 500}, pe = function () {
                function e(e, t) {
                    this._element = e, this._config = this._getConfig(t), this._timeout = null, this._setListeners()
                }

                var n = e.prototype;
                return n.show = function () {
                    var e = this, n = t.Event("show.bs.toast");
                    if (t(this._element).trigger(n), !n.isDefaultPrevented()) {
                        this._config.animation && this._element.classList.add("fade");
                        var i = function () {
                            e._element.classList.remove("showing"), e._element.classList.add("show"), t(e._element).trigger("shown.bs.toast"), e._config.autohide && (e._timeout = setTimeout((function () {
                                e.hide()
                            }), e._config.delay))
                        };
                        if (this._element.classList.remove("hide"), c.reflow(this._element), this._element.classList.add("showing"), this._config.animation) {
                            var r = c.getTransitionDurationFromElement(this._element);
                            t(this._element).one(c.TRANSITION_END, i).emulateTransitionEnd(r)
                        } else i()
                    }
                }, n.hide = function () {
                    if (this._element.classList.contains("show")) {
                        var e = t.Event("hide.bs.toast");
                        t(this._element).trigger(e), e.isDefaultPrevented() || this._close()
                    }
                }, n.dispose = function () {
                    clearTimeout(this._timeout), this._timeout = null, this._element.classList.contains("show") && this._element.classList.remove("show"), t(this._element).off("click.dismiss.bs.toast"), t.removeData(this._element, "bs.toast"), this._element = null, this._config = null
                }, n._getConfig = function (e) {
                    return e = a(a(a({}, he), t(this._element).data()), "object" == typeof e && e ? e : {}), c.typeCheckConfig("toast", e, this.constructor.DefaultType), e
                }, n._setListeners = function () {
                    var e = this;
                    t(this._element).on("click.dismiss.bs.toast", '[data-dismiss="toast"]', (function () {
                        return e.hide()
                    }))
                }, n._close = function () {
                    var e = this, n = function () {
                        e._element.classList.add("hide"), t(e._element).trigger("hidden.bs.toast")
                    };
                    if (this._element.classList.remove("show"), this._config.animation) {
                        var i = c.getTransitionDurationFromElement(this._element);
                        t(this._element).one(c.TRANSITION_END, n).emulateTransitionEnd(i)
                    } else n()
                }, e._jQueryInterface = function (n) {
                    return this.each((function () {
                        var i = t(this), r = i.data("bs.toast");
                        if (r || (r = new e(this, "object" == typeof n && n), i.data("bs.toast", r)), "string" == typeof n) {
                            if (void 0 === r[n]) throw new TypeError('No method named "' + n + '"');
                            r[n](this)
                        }
                    }))
                }, r(e, null, [{
                    key: "VERSION", get: function () {
                        return "4.5.0"
                    }
                }, {
                    key: "DefaultType", get: function () {
                        return de
                    }
                }, {
                    key: "Default", get: function () {
                        return he
                    }
                }]), e
            }();
        t.fn.toast = pe._jQueryInterface, t.fn.toast.Constructor = pe, t.fn.toast.noConflict = function () {
            return t.fn.toast = fe, pe._jQueryInterface
        }, e.Alert = d, e.Button = p, e.Carousel = w, e.Collapse = S, e.Dropdown = O, e.Modal = q, e.Popover = ie, e.Scrollspy = le, e.Tab = ue, e.Toast = pe, e.Tooltip = K, e.Util = c, Object.defineProperty(e, "__esModule", {value: !0})
    }(t, n(0), n(7))
}, function (e, t, n) {
    "use strict";
    n.r(t), function (e) {
        var n = "undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof navigator,
            i = function () {
                for (var e = ["Edge", "Trident", "Firefox"], t = 0; t < e.length; t += 1) if (n && navigator.userAgent.indexOf(e[t]) >= 0) return 1;
                return 0
            }();
        var r = n && window.Promise ? function (e) {
            var t = !1;
            return function () {
                t || (t = !0, window.Promise.resolve().then((function () {
                    t = !1, e()
                })))
            }
        } : function (e) {
            var t = !1;
            return function () {
                t || (t = !0, setTimeout((function () {
                    t = !1, e()
                }), i))
            }
        };

        function o(e) {
            return e && "[object Function]" === {}.toString.call(e)
        }

        function s(e, t) {
            if (1 !== e.nodeType) return [];
            var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
            return t ? n[t] : n
        }

        function a(e) {
            return "HTML" === e.nodeName ? e : e.parentNode || e.host
        }

        function l(e) {
            if (!e) return document.body;
            switch (e.nodeName) {
                case"HTML":
                case"BODY":
                    return e.ownerDocument.body;
                case"#document":
                    return e.body
            }
            var t = s(e), n = t.overflow, i = t.overflowX, r = t.overflowY;
            return /(auto|scroll|overlay)/.test(n + r + i) ? e : l(a(e))
        }

        function c(e) {
            return e && e.referenceNode ? e.referenceNode : e
        }

        var u = n && !(!window.MSInputMethodContext || !document.documentMode),
            f = n && /MSIE 10/.test(navigator.userAgent);

        function d(e) {
            return 11 === e ? u : 10 === e ? f : u || f
        }

        function h(e) {
            if (!e) return document.documentElement;
            for (var t = d(10) ? document.body : null, n = e.offsetParent || null; n === t && e.nextElementSibling;) n = (e = e.nextElementSibling).offsetParent;
            var i = n && n.nodeName;
            return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === s(n, "position") ? h(n) : n : e ? e.ownerDocument.documentElement : document.documentElement
        }

        function p(e) {
            return null !== e.parentNode ? p(e.parentNode) : e
        }

        function g(e, t) {
            if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
            var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING, i = n ? e : t, r = n ? t : e,
                o = document.createRange();
            o.setStart(i, 0), o.setEnd(r, 0);
            var s, a, l = o.commonAncestorContainer;
            if (e !== l && t !== l || i.contains(r)) return "BODY" === (a = (s = l).nodeName) || "HTML" !== a && h(s.firstElementChild) !== s ? h(l) : l;
            var c = p(e);
            return c.host ? g(c.host, t) : g(e, p(t).host)
        }

        function m(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
                n = "top" === t ? "scrollTop" : "scrollLeft", i = e.nodeName;
            if ("BODY" === i || "HTML" === i) {
                var r = e.ownerDocument.documentElement, o = e.ownerDocument.scrollingElement || r;
                return o[n]
            }
            return e[n]
        }

        function v(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], i = m(t, "top"), r = m(t, "left"),
                o = n ? -1 : 1;
            return e.top += i * o, e.bottom += i * o, e.left += r * o, e.right += r * o, e
        }

        function y(e, t) {
            var n = "x" === t ? "Left" : "Top", i = "Left" === n ? "Right" : "Bottom";
            return parseFloat(e["border" + n + "Width"]) + parseFloat(e["border" + i + "Width"])
        }

        function b(e, t, n, i) {
            return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], d(10) ? parseInt(n["offset" + e]) + parseInt(i["margin" + ("Height" === e ? "Top" : "Left")]) + parseInt(i["margin" + ("Height" === e ? "Bottom" : "Right")]) : 0)
        }

        function _(e) {
            var t = e.body, n = e.documentElement, i = d(10) && getComputedStyle(n);
            return {height: b("Height", t, n, i), width: b("Width", t, n, i)}
        }

        var w = function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }, x = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }

            return function (t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(), E = function (e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }, T = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
            }
            return e
        };

        function C(e) {
            return T({}, e, {right: e.left + e.width, bottom: e.top + e.height})
        }

        function S(e) {
            var t = {};
            try {
                if (d(10)) {
                    t = e.getBoundingClientRect();
                    var n = m(e, "top"), i = m(e, "left");
                    t.top += n, t.left += i, t.bottom += n, t.right += i
                } else t = e.getBoundingClientRect()
            } catch (e) {
            }
            var r = {left: t.left, top: t.top, width: t.right - t.left, height: t.bottom - t.top},
                o = "HTML" === e.nodeName ? _(e.ownerDocument) : {}, a = o.width || e.clientWidth || r.width,
                l = o.height || e.clientHeight || r.height, c = e.offsetWidth - a, u = e.offsetHeight - l;
            if (c || u) {
                var f = s(e);
                c -= y(f, "x"), u -= y(f, "y"), r.width -= c, r.height -= u
            }
            return C(r)
        }

        function k(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], i = d(10),
                r = "HTML" === t.nodeName, o = S(e), a = S(t), c = l(e), u = s(t), f = parseFloat(u.borderTopWidth),
                h = parseFloat(u.borderLeftWidth);
            n && r && (a.top = Math.max(a.top, 0), a.left = Math.max(a.left, 0));
            var p = C({top: o.top - a.top - f, left: o.left - a.left - h, width: o.width, height: o.height});
            if (p.marginTop = 0, p.marginLeft = 0, !i && r) {
                var g = parseFloat(u.marginTop), m = parseFloat(u.marginLeft);
                p.top -= f - g, p.bottom -= f - g, p.left -= h - m, p.right -= h - m, p.marginTop = g, p.marginLeft = m
            }
            return (i && !n ? t.contains(c) : t === c && "BODY" !== c.nodeName) && (p = v(p, t)), p
        }

        function D(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = e.ownerDocument.documentElement, i = k(e, n), r = Math.max(n.clientWidth, window.innerWidth || 0),
                o = Math.max(n.clientHeight, window.innerHeight || 0), s = t ? 0 : m(n), a = t ? 0 : m(n, "left"),
                l = {top: s - i.top + i.marginTop, left: a - i.left + i.marginLeft, width: r, height: o};
            return C(l)
        }

        function N(e) {
            var t = e.nodeName;
            if ("BODY" === t || "HTML" === t) return !1;
            if ("fixed" === s(e, "position")) return !0;
            var n = a(e);
            return !!n && N(n)
        }

        function A(e) {
            if (!e || !e.parentElement || d()) return document.documentElement;
            for (var t = e.parentElement; t && "none" === s(t, "transform");) t = t.parentElement;
            return t || document.documentElement
        }

        function j(e, t, n, i) {
            var r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4], o = {top: 0, left: 0},
                s = r ? A(e) : g(e, c(t));
            if ("viewport" === i) o = D(s, r); else {
                var u = void 0;
                "scrollParent" === i ? "BODY" === (u = l(a(t))).nodeName && (u = e.ownerDocument.documentElement) : u = "window" === i ? e.ownerDocument.documentElement : i;
                var f = k(u, s, r);
                if ("HTML" !== u.nodeName || N(s)) o = f; else {
                    var d = _(e.ownerDocument), h = d.height, p = d.width;
                    o.top += f.top - f.marginTop, o.bottom = h + f.top, o.left += f.left - f.marginLeft, o.right = p + f.left
                }
            }
            var m = "number" == typeof (n = n || 0);
            return o.left += m ? n : n.left || 0, o.top += m ? n : n.top || 0, o.right -= m ? n : n.right || 0, o.bottom -= m ? n : n.bottom || 0, o
        }

        function O(e) {
            return e.width * e.height
        }

        function L(e, t, n, i, r) {
            var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
            if (-1 === e.indexOf("auto")) return e;
            var s = j(n, i, o, r), a = {
                top: {width: s.width, height: t.top - s.top},
                right: {width: s.right - t.right, height: s.height},
                bottom: {width: s.width, height: s.bottom - t.bottom},
                left: {width: t.left - s.left, height: s.height}
            }, l = Object.keys(a).map((function (e) {
                return T({key: e}, a[e], {area: O(a[e])})
            })).sort((function (e, t) {
                return t.area - e.area
            })), c = l.filter((function (e) {
                var t = e.width, i = e.height;
                return t >= n.clientWidth && i >= n.clientHeight
            })), u = c.length > 0 ? c[0].key : l[0].key, f = e.split("-")[1];
            return u + (f ? "-" + f : "")
        }

        function I(e, t, n) {
            var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null, r = i ? A(t) : g(t, c(n));
            return k(n, r, i)
        }

        function P(e) {
            var t = e.ownerDocument.defaultView.getComputedStyle(e),
                n = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0),
                i = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
            return {width: e.offsetWidth + i, height: e.offsetHeight + n}
        }

        function q(e) {
            var t = {left: "right", right: "left", bottom: "top", top: "bottom"};
            return e.replace(/left|right|bottom|top/g, (function (e) {
                return t[e]
            }))
        }

        function H(e, t, n) {
            n = n.split("-")[0];
            var i = P(e), r = {width: i.width, height: i.height}, o = -1 !== ["right", "left"].indexOf(n),
                s = o ? "top" : "left", a = o ? "left" : "top", l = o ? "height" : "width", c = o ? "width" : "height";
            return r[s] = t[s] + t[l] / 2 - i[l] / 2, r[a] = n === a ? t[a] - i[c] : t[q(a)], r
        }

        function R(e, t) {
            return Array.prototype.find ? e.find(t) : e.filter(t)[0]
        }

        function M(e, t, n) {
            return (void 0 === n ? e : e.slice(0, function (e, t, n) {
                if (Array.prototype.findIndex) return e.findIndex((function (e) {
                    return e[t] === n
                }));
                var i = R(e, (function (e) {
                    return e[t] === n
                }));
                return e.indexOf(i)
            }(e, "name", n))).forEach((function (e) {
                e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
                var n = e.function || e.fn;
                e.enabled && o(n) && (t.offsets.popper = C(t.offsets.popper), t.offsets.reference = C(t.offsets.reference), t = n(t, e))
            })), t
        }

        function F() {
            if (!this.state.isDestroyed) {
                var e = {instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {}};
                e.offsets.reference = I(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = L(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = H(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = M(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
            }
        }

        function B(e, t) {
            return e.some((function (e) {
                var n = e.name;
                return e.enabled && n === t
            }))
        }

        function W(e) {
            for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < t.length; i++) {
                var r = t[i], o = r ? "" + r + n : e;
                if (void 0 !== document.body.style[o]) return o
            }
            return null
        }

        function U() {
            return this.state.isDestroyed = !0, B(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[W("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
        }

        function Q(e) {
            var t = e.ownerDocument;
            return t ? t.defaultView : window
        }

        function $(e, t, n, i) {
            n.updateBound = i, Q(e).addEventListener("resize", n.updateBound, {passive: !0});
            var r = l(e);
            return function e(t, n, i, r) {
                var o = "BODY" === t.nodeName, s = o ? t.ownerDocument.defaultView : t;
                s.addEventListener(n, i, {passive: !0}), o || e(l(s.parentNode), n, i, r), r.push(s)
            }(r, "scroll", n.updateBound, n.scrollParents), n.scrollElement = r, n.eventsEnabled = !0, n
        }

        function z() {
            this.state.eventsEnabled || (this.state = $(this.reference, this.options, this.state, this.scheduleUpdate))
        }

        function V() {
            var e, t;
            this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (e = this.reference, t = this.state, Q(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach((function (e) {
                e.removeEventListener("scroll", t.updateBound)
            })), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t))
        }

        function X(e) {
            return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
        }

        function Y(e, t) {
            Object.keys(t).forEach((function (n) {
                var i = "";
                -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && X(t[n]) && (i = "px"), e.style[n] = t[n] + i
            }))
        }

        var K = n && /Firefox/i.test(navigator.userAgent);

        function G(e, t, n) {
            var i = R(e, (function (e) {
                return e.name === t
            })), r = !!i && e.some((function (e) {
                return e.name === n && e.enabled && e.order < i.order
            }));
            if (!r) {
                var o = "`" + t + "`", s = "`" + n + "`";
                console.warn(s + " modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!")
            }
            return r
        }

        var J = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
            Z = J.slice(3);

        function ee(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = Z.indexOf(e),
                i = Z.slice(n + 1).concat(Z.slice(0, n));
            return t ? i.reverse() : i
        }

        var te = "flip", ne = "clockwise", ie = "counterclockwise";

        function re(e, t, n, i) {
            var r = [0, 0], o = -1 !== ["right", "left"].indexOf(i), s = e.split(/(\+|\-)/).map((function (e) {
                return e.trim()
            })), a = s.indexOf(R(s, (function (e) {
                return -1 !== e.search(/,|\s/)
            })));
            s[a] && -1 === s[a].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
            var l = /\s*,\s*|\s+/,
                c = -1 !== a ? [s.slice(0, a).concat([s[a].split(l)[0]]), [s[a].split(l)[1]].concat(s.slice(a + 1))] : [s];
            return (c = c.map((function (e, i) {
                var r = (1 === i ? !o : o) ? "height" : "width", s = !1;
                return e.reduce((function (e, t) {
                    return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, s = !0, e) : s ? (e[e.length - 1] += t, s = !1, e) : e.concat(t)
                }), []).map((function (e) {
                    return function (e, t, n, i) {
                        var r = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/), o = +r[1], s = r[2];
                        if (!o) return e;
                        if (0 === s.indexOf("%")) {
                            var a = void 0;
                            switch (s) {
                                case"%p":
                                    a = n;
                                    break;
                                case"%":
                                case"%r":
                                default:
                                    a = i
                            }
                            return C(a)[t] / 100 * o
                        }
                        if ("vh" === s || "vw" === s) {
                            return ("vh" === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o
                        }
                        return o
                    }(e, r, t, n)
                }))
            }))).forEach((function (e, t) {
                e.forEach((function (n, i) {
                    X(n) && (r[t] += n * ("-" === e[i - 1] ? -1 : 1))
                }))
            })), r
        }

        var oe = {
            placement: "bottom", positionFixed: !1, eventsEnabled: !0, removeOnDestroy: !1, onCreate: function () {
            }, onUpdate: function () {
            }, modifiers: {
                shift: {
                    order: 100, enabled: !0, fn: function (e) {
                        var t = e.placement, n = t.split("-")[0], i = t.split("-")[1];
                        if (i) {
                            var r = e.offsets, o = r.reference, s = r.popper, a = -1 !== ["bottom", "top"].indexOf(n),
                                l = a ? "left" : "top", c = a ? "width" : "height",
                                u = {start: E({}, l, o[l]), end: E({}, l, o[l] + o[c] - s[c])};
                            e.offsets.popper = T({}, s, u[i])
                        }
                        return e
                    }
                }, offset: {
                    order: 200, enabled: !0, fn: function (e, t) {
                        var n = t.offset, i = e.placement, r = e.offsets, o = r.popper, s = r.reference,
                            a = i.split("-")[0], l = void 0;
                        return l = X(+n) ? [+n, 0] : re(n, o, s, a), "left" === a ? (o.top += l[0], o.left -= l[1]) : "right" === a ? (o.top += l[0], o.left += l[1]) : "top" === a ? (o.left += l[0], o.top -= l[1]) : "bottom" === a && (o.left += l[0], o.top += l[1]), e.popper = o, e
                    }, offset: 0
                }, preventOverflow: {
                    order: 300, enabled: !0, fn: function (e, t) {
                        var n = t.boundariesElement || h(e.instance.popper);
                        e.instance.reference === n && (n = h(n));
                        var i = W("transform"), r = e.instance.popper.style, o = r.top, s = r.left, a = r[i];
                        r.top = "", r.left = "", r[i] = "";
                        var l = j(e.instance.popper, e.instance.reference, t.padding, n, e.positionFixed);
                        r.top = o, r.left = s, r[i] = a, t.boundaries = l;
                        var c = t.priority, u = e.offsets.popper, f = {
                            primary: function (e) {
                                var n = u[e];
                                return u[e] < l[e] && !t.escapeWithReference && (n = Math.max(u[e], l[e])), E({}, e, n)
                            }, secondary: function (e) {
                                var n = "right" === e ? "left" : "top", i = u[n];
                                return u[e] > l[e] && !t.escapeWithReference && (i = Math.min(u[n], l[e] - ("right" === e ? u.width : u.height))), E({}, n, i)
                            }
                        };
                        return c.forEach((function (e) {
                            var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
                            u = T({}, u, f[t](e))
                        })), e.offsets.popper = u, e
                    }, priority: ["left", "right", "top", "bottom"], padding: 5, boundariesElement: "scrollParent"
                }, keepTogether: {
                    order: 400, enabled: !0, fn: function (e) {
                        var t = e.offsets, n = t.popper, i = t.reference, r = e.placement.split("-")[0], o = Math.floor,
                            s = -1 !== ["top", "bottom"].indexOf(r), a = s ? "right" : "bottom", l = s ? "left" : "top",
                            c = s ? "width" : "height";
                        return n[a] < o(i[l]) && (e.offsets.popper[l] = o(i[l]) - n[c]), n[l] > o(i[a]) && (e.offsets.popper[l] = o(i[a])), e
                    }
                }, arrow: {
                    order: 500, enabled: !0, fn: function (e, t) {
                        var n;
                        if (!G(e.instance.modifiers, "arrow", "keepTogether")) return e;
                        var i = t.element;
                        if ("string" == typeof i) {
                            if (!(i = e.instance.popper.querySelector(i))) return e
                        } else if (!e.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
                        var r = e.placement.split("-")[0], o = e.offsets, a = o.popper, l = o.reference,
                            c = -1 !== ["left", "right"].indexOf(r), u = c ? "height" : "width", f = c ? "Top" : "Left",
                            d = f.toLowerCase(), h = c ? "left" : "top", p = c ? "bottom" : "right", g = P(i)[u];
                        l[p] - g < a[d] && (e.offsets.popper[d] -= a[d] - (l[p] - g)), l[d] + g > a[p] && (e.offsets.popper[d] += l[d] + g - a[p]), e.offsets.popper = C(e.offsets.popper);
                        var m = l[d] + l[u] / 2 - g / 2, v = s(e.instance.popper), y = parseFloat(v["margin" + f]),
                            b = parseFloat(v["border" + f + "Width"]), _ = m - e.offsets.popper[d] - y - b;
                        return _ = Math.max(Math.min(a[u] - g, _), 0), e.arrowElement = i, e.offsets.arrow = (E(n = {}, d, Math.round(_)), E(n, h, ""), n), e
                    }, element: "[x-arrow]"
                }, flip: {
                    order: 600,
                    enabled: !0,
                    fn: function (e, t) {
                        if (B(e.instance.modifiers, "inner")) return e;
                        if (e.flipped && e.placement === e.originalPlacement) return e;
                        var n = j(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
                            i = e.placement.split("-")[0], r = q(i), o = e.placement.split("-")[1] || "", s = [];
                        switch (t.behavior) {
                            case te:
                                s = [i, r];
                                break;
                            case ne:
                                s = ee(i);
                                break;
                            case ie:
                                s = ee(i, !0);
                                break;
                            default:
                                s = t.behavior
                        }
                        return s.forEach((function (a, l) {
                            if (i !== a || s.length === l + 1) return e;
                            i = e.placement.split("-")[0], r = q(i);
                            var c = e.offsets.popper, u = e.offsets.reference, f = Math.floor,
                                d = "left" === i && f(c.right) > f(u.left) || "right" === i && f(c.left) < f(u.right) || "top" === i && f(c.bottom) > f(u.top) || "bottom" === i && f(c.top) < f(u.bottom),
                                h = f(c.left) < f(n.left), p = f(c.right) > f(n.right), g = f(c.top) < f(n.top),
                                m = f(c.bottom) > f(n.bottom),
                                v = "left" === i && h || "right" === i && p || "top" === i && g || "bottom" === i && m,
                                y = -1 !== ["top", "bottom"].indexOf(i),
                                b = !!t.flipVariations && (y && "start" === o && h || y && "end" === o && p || !y && "start" === o && g || !y && "end" === o && m),
                                _ = !!t.flipVariationsByContent && (y && "start" === o && p || y && "end" === o && h || !y && "start" === o && m || !y && "end" === o && g),
                                w = b || _;
                            (d || v || w) && (e.flipped = !0, (d || v) && (i = s[l + 1]), w && (o = function (e) {
                                return "end" === e ? "start" : "start" === e ? "end" : e
                            }(o)), e.placement = i + (o ? "-" + o : ""), e.offsets.popper = T({}, e.offsets.popper, H(e.instance.popper, e.offsets.reference, e.placement)), e = M(e.instance.modifiers, e, "flip"))
                        })), e
                    },
                    behavior: "flip",
                    padding: 5,
                    boundariesElement: "viewport",
                    flipVariations: !1,
                    flipVariationsByContent: !1
                }, inner: {
                    order: 700, enabled: !1, fn: function (e) {
                        var t = e.placement, n = t.split("-")[0], i = e.offsets, r = i.popper, o = i.reference,
                            s = -1 !== ["left", "right"].indexOf(n), a = -1 === ["top", "left"].indexOf(n);
                        return r[s ? "left" : "top"] = o[n] - (a ? r[s ? "width" : "height"] : 0), e.placement = q(t), e.offsets.popper = C(r), e
                    }
                }, hide: {
                    order: 800, enabled: !0, fn: function (e) {
                        if (!G(e.instance.modifiers, "hide", "preventOverflow")) return e;
                        var t = e.offsets.reference, n = R(e.instance.modifiers, (function (e) {
                            return "preventOverflow" === e.name
                        })).boundaries;
                        if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                            if (!0 === e.hide) return e;
                            e.hide = !0, e.attributes["x-out-of-boundaries"] = ""
                        } else {
                            if (!1 === e.hide) return e;
                            e.hide = !1, e.attributes["x-out-of-boundaries"] = !1
                        }
                        return e
                    }
                }, computeStyle: {
                    order: 850, enabled: !0, fn: function (e, t) {
                        var n = t.x, i = t.y, r = e.offsets.popper, o = R(e.instance.modifiers, (function (e) {
                            return "applyStyle" === e.name
                        })).gpuAcceleration;
                        void 0 !== o && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                        var s = void 0 !== o ? o : t.gpuAcceleration, a = h(e.instance.popper), l = S(a),
                            c = {position: r.position}, u = function (e, t) {
                                var n = e.offsets, i = n.popper, r = n.reference, o = Math.round, s = Math.floor,
                                    a = function (e) {
                                        return e
                                    }, l = o(r.width), c = o(i.width), u = -1 !== ["left", "right"].indexOf(e.placement),
                                    f = -1 !== e.placement.indexOf("-"), d = t ? u || f || l % 2 == c % 2 ? o : s : a,
                                    h = t ? o : a;
                                return {
                                    left: d(l % 2 == 1 && c % 2 == 1 && !f && t ? i.left - 1 : i.left),
                                    top: h(i.top),
                                    bottom: h(i.bottom),
                                    right: d(i.right)
                                }
                            }(e, window.devicePixelRatio < 2 || !K), f = "bottom" === n ? "top" : "bottom",
                            d = "right" === i ? "left" : "right", p = W("transform"), g = void 0, m = void 0;
                        if (m = "bottom" === f ? "HTML" === a.nodeName ? -a.clientHeight + u.bottom : -l.height + u.bottom : u.top, g = "right" === d ? "HTML" === a.nodeName ? -a.clientWidth + u.right : -l.width + u.right : u.left, s && p) c[p] = "translate3d(" + g + "px, " + m + "px, 0)", c[f] = 0, c[d] = 0, c.willChange = "transform"; else {
                            var v = "bottom" === f ? -1 : 1, y = "right" === d ? -1 : 1;
                            c[f] = m * v, c[d] = g * y, c.willChange = f + ", " + d
                        }
                        var b = {"x-placement": e.placement};
                        return e.attributes = T({}, b, e.attributes), e.styles = T({}, c, e.styles), e.arrowStyles = T({}, e.offsets.arrow, e.arrowStyles), e
                    }, gpuAcceleration: !0, x: "bottom", y: "right"
                }, applyStyle: {
                    order: 900, enabled: !0, fn: function (e) {
                        var t, n;
                        return Y(e.instance.popper, e.styles), t = e.instance.popper, n = e.attributes, Object.keys(n).forEach((function (e) {
                            !1 !== n[e] ? t.setAttribute(e, n[e]) : t.removeAttribute(e)
                        })), e.arrowElement && Object.keys(e.arrowStyles).length && Y(e.arrowElement, e.arrowStyles), e
                    }, onLoad: function (e, t, n, i, r) {
                        var o = I(r, t, e, n.positionFixed),
                            s = L(n.placement, o, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                        return t.setAttribute("x-placement", s), Y(t, {position: n.positionFixed ? "fixed" : "absolute"}), n
                    }, gpuAcceleration: void 0
                }
            }
        }, se = function () {
            function e(t, n) {
                var i = this, s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                w(this, e), this.scheduleUpdate = function () {
                    return requestAnimationFrame(i.update)
                }, this.update = r(this.update.bind(this)), this.options = T({}, e.Defaults, s), this.state = {
                    isDestroyed: !1,
                    isCreated: !1,
                    scrollParents: []
                }, this.reference = t && t.jquery ? t[0] : t, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(T({}, e.Defaults.modifiers, s.modifiers)).forEach((function (t) {
                    i.options.modifiers[t] = T({}, e.Defaults.modifiers[t] || {}, s.modifiers ? s.modifiers[t] : {})
                })), this.modifiers = Object.keys(this.options.modifiers).map((function (e) {
                    return T({name: e}, i.options.modifiers[e])
                })).sort((function (e, t) {
                    return e.order - t.order
                })), this.modifiers.forEach((function (e) {
                    e.enabled && o(e.onLoad) && e.onLoad(i.reference, i.popper, i.options, e, i.state)
                })), this.update();
                var a = this.options.eventsEnabled;
                a && this.enableEventListeners(), this.state.eventsEnabled = a
            }

            return x(e, [{
                key: "update", value: function () {
                    return F.call(this)
                }
            }, {
                key: "destroy", value: function () {
                    return U.call(this)
                }
            }, {
                key: "enableEventListeners", value: function () {
                    return z.call(this)
                }
            }, {
                key: "disableEventListeners", value: function () {
                    return V.call(this)
                }
            }]), e
        }();
        se.Utils = ("undefined" != typeof window ? window : e).PopperUtils, se.placements = J, se.Defaults = oe, t.default = se
    }.call(this, n(1))
}, function (e, t, n) {
}]);
//# sourceMappingURL=bundle.js.map