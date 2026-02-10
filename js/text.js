var Kh = e => {
    throw TypeError(e)
}
;
var mu = (e, t, n) => t.has(e) || Kh("Cannot " + n);
var _ = (e, t, n) => (mu(e, t, "read from private field"),
n ? n.call(e) : t.get(e))
  , ae = (e, t, n) => t.has(e) ? Kh("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n)
  , X = (e, t, n, r) => (mu(e, t, "write to private field"),
r ? r.call(e, n) : t.set(e, n),
n)
  , Be = (e, t, n) => (mu(e, t, "access private method"),
n);
var Zo = (e, t, n, r) => ({
    set _(i) {
        X(e, t, i, n)
    },
    get _() {
        return _(e, t, r)
    }
});
function mS(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const i in r)
                if (i !== "default" && !(i in e)) {
                    const s = Object.getOwnPropertyDescriptor(r, i);
                    s && Object.defineProperty(e, i, s.get ? s : {
                        enumerable: !0,
                        get: () => r[i]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
        r(i);
    new MutationObserver(i => {
        for (const s of i)
            if (s.type === "childList")
                for (const o of s.addedNodes)
                    o.tagName === "LINK" && o.rel === "modulepreload" && r(o)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(i) {
        const s = {};
        return i.integrity && (s.integrity = i.integrity),
        i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
        i.crossOrigin === "use-credentials" ? s.credentials = "include" : i.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin",
        s
    }
    function r(i) {
        if (i.ep)
            return;
        i.ep = !0;
        const s = n(i);
        fetch(i.href, s)
    }
}
)();
function Ey(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var Py = {
    exports: {}
}
  , Nl = {}
  , _y = {
    exports: {}
}
  , re = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mo = Symbol.for("react.element")
  , gS = Symbol.for("react.portal")
  , yS = Symbol.for("react.fragment")
  , vS = Symbol.for("react.strict_mode")
  , xS = Symbol.for("react.profiler")
  , wS = Symbol.for("react.provider")
  , SS = Symbol.for("react.context")
  , bS = Symbol.for("react.forward_ref")
  , CS = Symbol.for("react.suspense")
  , kS = Symbol.for("react.memo")
  , TS = Symbol.for("react.lazy")
  , Zh = Symbol.iterator;
function ES(e) {
    return e === null || typeof e != "object" ? null : (e = Zh && e[Zh] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var Ry = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , Ay = Object.assign
  , Ny = {};
function fs(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Ny,
    this.updater = n || Ry
}
fs.prototype.isReactComponent = {};
fs.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
fs.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function My() {}
My.prototype = fs.prototype;
function Qd(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Ny,
    this.updater = n || Ry
}
var Yd = Qd.prototype = new My;
Yd.constructor = Qd;
Ay(Yd, fs.prototype);
Yd.isPureReactComponent = !0;
var Gh = Array.isArray
  , jy = Object.prototype.hasOwnProperty
  , Xd = {
    current: null
}
  , Oy = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Dy(e, t, n) {
    var r, i = {}, s = null, o = null;
    if (t != null)
        for (r in t.ref !== void 0 && (o = t.ref),
        t.key !== void 0 && (s = "" + t.key),
        t)
            jy.call(t, r) && !Oy.hasOwnProperty(r) && (i[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1)
        i.children = n;
    else if (1 < a) {
        for (var l = Array(a), u = 0; u < a; u++)
            l[u] = arguments[u + 2];
        i.children = l
    }
    if (e && e.defaultProps)
        for (r in a = e.defaultProps,
        a)
            i[r] === void 0 && (i[r] = a[r]);
    return {
        $$typeof: Mo,
        type: e,
        key: s,
        ref: o,
        props: i,
        _owner: Xd.current
    }
}
function PS(e, t) {
    return {
        $$typeof: Mo,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function qd(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Mo
}
function _S(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var Qh = /\/+/g;
function gu(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? _S("" + e.key) : t.toString(36)
}
function wa(e, t, n, r, i) {
    var s = typeof e;
    (s === "undefined" || s === "boolean") && (e = null);
    var o = !1;
    if (e === null)
        o = !0;
    else
        switch (s) {
        case "string":
        case "number":
            o = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case Mo:
            case gS:
                o = !0
            }
        }
    if (o)
        return o = e,
        i = i(o),
        e = r === "" ? "." + gu(o, 0) : r,
        Gh(i) ? (n = "",
        e != null && (n = e.replace(Qh, "$&/") + "/"),
        wa(i, t, n, "", function(u) {
            return u
        })) : i != null && (qd(i) && (i = PS(i, n + (!i.key || o && o.key === i.key ? "" : ("" + i.key).replace(Qh, "$&/") + "/") + e)),
        t.push(i)),
        1;
    if (o = 0,
    r = r === "" ? "." : r + ":",
    Gh(e))
        for (var a = 0; a < e.length; a++) {
            s = e[a];
            var l = r + gu(s, a);
            o += wa(s, t, n, l, i)
        }
    else if (l = ES(e),
    typeof l == "function")
        for (e = l.call(e),
        a = 0; !(s = e.next()).done; )
            s = s.value,
            l = r + gu(s, a++),
            o += wa(s, t, n, l, i);
    else if (s === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return o
}
function Go(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , i = 0;
    return wa(e, r, "", "", function(s) {
        return t.call(n, s, i++)
    }),
    r
}
function RS(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var rt = {
    current: null
}
  , Sa = {
    transition: null
}
  , AS = {
    ReactCurrentDispatcher: rt,
    ReactCurrentBatchConfig: Sa,
    ReactCurrentOwner: Xd
};
function Ly() {
    throw Error("act(...) is not supported in production builds of React.")
}
re.Children = {
    map: Go,
    forEach: function(e, t, n) {
        Go(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return Go(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return Go(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!qd(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
re.Component = fs;
re.Fragment = yS;
re.Profiler = xS;
re.PureComponent = Qd;
re.StrictMode = vS;
re.Suspense = CS;
re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = AS;
re.act = Ly;
re.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Ay({}, e.props)
      , i = e.key
      , s = e.ref
      , o = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (s = t.ref,
        o = Xd.current),
        t.key !== void 0 && (i = "" + t.key),
        e.type && e.type.defaultProps)
            var a = e.type.defaultProps;
        for (l in t)
            jy.call(t, l) && !Oy.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l])
    }
    var l = arguments.length - 2;
    if (l === 1)
        r.children = n;
    else if (1 < l) {
        a = Array(l);
        for (var u = 0; u < l; u++)
            a[u] = arguments[u + 2];
        r.children = a
    }
    return {
        $$typeof: Mo,
        type: e.type,
        key: i,
        ref: s,
        props: r,
        _owner: o
    }
}
;
re.createContext = function(e) {
    return e = {
        $$typeof: SS,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: wS,
        _context: e
    },
    e.Consumer = e
}
;
re.createElement = Dy;
re.createFactory = function(e) {
    var t = Dy.bind(null, e);
    return t.type = e,
    t
}
;
re.createRef = function() {
    return {
        current: null
    }
}
;
re.forwardRef = function(e) {
    return {
        $$typeof: bS,
        render: e
    }
}
;
re.isValidElement = qd;
re.lazy = function(e) {
    return {
        $$typeof: TS,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: RS
    }
}
;
re.memo = function(e, t) {
    return {
        $$typeof: kS,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
re.startTransition = function(e) {
    var t = Sa.transition;
    Sa.transition = {};
    try {
        e()
    } finally {
        Sa.transition = t
    }
}
;
re.unstable_act = Ly;
re.useCallback = function(e, t) {
    return rt.current.useCallback(e, t)
}
;
re.useContext = function(e) {
    return rt.current.useContext(e)
}
;
re.useDebugValue = function() {}
;
re.useDeferredValue = function(e) {
    return rt.current.useDeferredValue(e)
}
;
re.useEffect = function(e, t) {
    return rt.current.useEffect(e, t)
}
;
re.useId = function() {
    return rt.current.useId()
}
;
re.useImperativeHandle = function(e, t, n) {
    return rt.current.useImperativeHandle(e, t, n)
}
;
re.useInsertionEffect = function(e, t) {
    return rt.current.useInsertionEffect(e, t)
}
;
re.useLayoutEffect = function(e, t) {
    return rt.current.useLayoutEffect(e, t)
}
;
re.useMemo = function(e, t) {
    return rt.current.useMemo(e, t)
}
;
re.useReducer = function(e, t, n) {
    return rt.current.useReducer(e, t, n)
}
;
re.useRef = function(e) {
    return rt.current.useRef(e)
}
;
re.useState = function(e) {
    return rt.current.useState(e)
}
;
re.useSyncExternalStore = function(e, t, n) {
    return rt.current.useSyncExternalStore(e, t, n)
}
;
re.useTransition = function() {
    return rt.current.useTransition()
}
;
re.version = "18.3.1";
_y.exports = re;
var w = _y.exports;
const O = Ey(w)
  , Iy = mS({
    __proto__: null,
    default: O
}, [w]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var NS = w
  , MS = Symbol.for("react.element")
  , jS = Symbol.for("react.fragment")
  , OS = Object.prototype.hasOwnProperty
  , DS = NS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , LS = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Vy(e, t, n) {
    var r, i = {}, s = null, o = null;
    n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
    for (r in t)
        OS.call(t, r) && !LS.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            i[r] === void 0 && (i[r] = t[r]);
    return {
        $$typeof: MS,
        type: e,
        key: s,
        ref: o,
        props: i,
        _owner: DS.current
    }
}
Nl.Fragment = jS;
Nl.jsx = Vy;
Nl.jsxs = Vy;
Py.exports = Nl;
var S = Py.exports
  , Fy = {
    exports: {}
}
  , wt = {}
  , zy = {
    exports: {}
}
  , $y = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(P, R) {
        var L = P.length;
        P.push(R);
        e: for (; 0 < L; ) {
            var Z = L - 1 >>> 1
              , H = P[Z];
            if (0 < i(H, R))
                P[Z] = R,
                P[L] = H,
                L = Z;
            else
                break e
        }
    }
    function n(P) {
        return P.length === 0 ? null : P[0]
    }
    function r(P) {
        if (P.length === 0)
            return null;
        var R = P[0]
          , L = P.pop();
        if (L !== R) {
            P[0] = L;
            e: for (var Z = 0, H = P.length, ne = H >>> 1; Z < ne; ) {
                var ie = 2 * (Z + 1) - 1
                  , _e = P[ie]
                  , $e = ie + 1
                  , ue = P[$e];
                if (0 > i(_e, L))
                    $e < H && 0 > i(ue, _e) ? (P[Z] = ue,
                    P[$e] = L,
                    Z = $e) : (P[Z] = _e,
                    P[ie] = L,
                    Z = ie);
                else if ($e < H && 0 > i(ue, L))
                    P[Z] = ue,
                    P[$e] = L,
                    Z = $e;
                else
                    break e
            }
        }
        return R
    }
    function i(P, R) {
        var L = P.sortIndex - R.sortIndex;
        return L !== 0 ? L : P.id - R.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var s = performance;
        e.unstable_now = function() {
            return s.now()
        }
    } else {
        var o = Date
          , a = o.now();
        e.unstable_now = function() {
            return o.now() - a
        }
    }
    var l = []
      , u = []
      , c = 1
      , d = null
      , f = 3
      , h = !1
      , v = !1
      , g = !1
      , x = typeof setTimeout == "function" ? setTimeout : null
      , m = typeof clearTimeout == "function" ? clearTimeout : null
      , p = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function y(P) {
        for (var R = n(u); R !== null; ) {
            if (R.callback === null)
                r(u);
            else if (R.startTime <= P)
                r(u),
                R.sortIndex = R.expirationTime,
                t(l, R);
            else
                break;
            R = n(u)
        }
    }
    function b(P) {
        if (g = !1,
        y(P),
        !v)
            if (n(l) !== null)
                v = !0,
                K(C);
            else {
                var R = n(u);
                R !== null && B(b, R.startTime - P)
            }
    }
    function C(P, R) {
        v = !1,
        g && (g = !1,
        m(E),
        E = -1),
        h = !0;
        var L = f;
        try {
            for (y(R),
            d = n(l); d !== null && (!(d.expirationTime > R) || P && !W()); ) {
                var Z = d.callback;
                if (typeof Z == "function") {
                    d.callback = null,
                    f = d.priorityLevel;
                    var H = Z(d.expirationTime <= R);
                    R = e.unstable_now(),
                    typeof H == "function" ? d.callback = H : d === n(l) && r(l),
                    y(R)
                } else
                    r(l);
                d = n(l)
            }
            if (d !== null)
                var ne = !0;
            else {
                var ie = n(u);
                ie !== null && B(b, ie.startTime - R),
                ne = !1
            }
            return ne
        } finally {
            d = null,
            f = L,
            h = !1
        }
    }
    var k = !1
      , T = null
      , E = -1
      , M = 5
      , N = -1;
    function W() {
        return !(e.unstable_now() - N < M)
    }
    function V() {
        if (T !== null) {
            var P = e.unstable_now();
            N = P;
            var R = !0;
            try {
                R = T(!0, P)
            } finally {
                R ? J() : (k = !1,
                T = null)
            }
        } else
            k = !1
    }
    var J;
    if (typeof p == "function")
        J = function() {
            p(V)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var D = new MessageChannel
          , ee = D.port2;
        D.port1.onmessage = V,
        J = function() {
            ee.postMessage(null)
        }
    } else
        J = function() {
            x(V, 0)
        }
        ;
    function K(P) {
        T = P,
        k || (k = !0,
        J())
    }
    function B(P, R) {
        E = x(function() {
            P(e.unstable_now())
        }, R)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(P) {
        P.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        v || h || (v = !0,
        K(C))
    }
    ,
    e.unstable_forceFrameRate = function(P) {
        0 > P || 125 < P ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : M = 0 < P ? Math.floor(1e3 / P) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return f
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(l)
    }
    ,
    e.unstable_next = function(P) {
        switch (f) {
        case 1:
        case 2:
        case 3:
            var R = 3;
            break;
        default:
            R = f
        }
        var L = f;
        f = R;
        try {
            return P()
        } finally {
            f = L
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(P, R) {
        switch (P) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            P = 3
        }
        var L = f;
        f = P;
        try {
            return R()
        } finally {
            f = L
        }
    }
    ,
    e.unstable_scheduleCallback = function(P, R, L) {
        var Z = e.unstable_now();
        switch (typeof L == "object" && L !== null ? (L = L.delay,
        L = typeof L == "number" && 0 < L ? Z + L : Z) : L = Z,
        P) {
        case 1:
            var H = -1;
            break;
        case 2:
            H = 250;
            break;
        case 5:
            H = 1073741823;
            break;
        case 4:
            H = 1e4;
            break;
        default:
            H = 5e3
        }
        return H = L + H,
        P = {
            id: c++,
            callback: R,
            priorityLevel: P,
            startTime: L,
            expirationTime: H,
            sortIndex: -1
        },
        L > Z ? (P.sortIndex = L,
        t(u, P),
        n(l) === null && P === n(u) && (g ? (m(E),
        E = -1) : g = !0,
        B(b, L - Z))) : (P.sortIndex = H,
        t(l, P),
        v || h || (v = !0,
        K(C))),
        P
    }
    ,
    e.unstable_shouldYield = W,
    e.unstable_wrapCallback = function(P) {
        var R = f;
        return function() {
            var L = f;
            f = R;
            try {
                return P.apply(this, arguments)
            } finally {
                f = L
            }
        }
    }
}
)($y);
zy.exports = $y;
var IS = zy.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var VS = w
  , vt = IS;
function A(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var By = new Set
  , eo = {};
function ri(e, t) {
    Xi(e, t),
    Xi(e + "Capture", t)
}
function Xi(e, t) {
    for (eo[e] = t,
    e = 0; e < t.length; e++)
        By.add(t[e])
}
var kn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , hc = Object.prototype.hasOwnProperty
  , FS = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , Yh = {}
  , Xh = {};
function zS(e) {
    return hc.call(Xh, e) ? !0 : hc.call(Yh, e) ? !1 : FS.test(e) ? Xh[e] = !0 : (Yh[e] = !0,
    !1)
}
function $S(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function BS(e, t, n, r) {
    if (t === null || typeof t > "u" || $S(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function it(e, t, n, r, i, s, o) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = i,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = s,
    this.removeEmptyString = o
}
var ze = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    ze[e] = new it(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    ze[t] = new it(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    ze[e] = new it(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    ze[e] = new it(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    ze[e] = new it(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    ze[e] = new it(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    ze[e] = new it(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    ze[e] = new it(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    ze[e] = new it(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var Jd = /[\-:]([a-z])/g;
function ef(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(Jd, ef);
    ze[t] = new it(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Jd, ef);
    ze[t] = new it(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Jd, ef);
    ze[t] = new it(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    ze[e] = new it(e,1,!1,e.toLowerCase(),null,!1,!1)
});
ze.xlinkHref = new it("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    ze[e] = new it(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function tf(e, t, n, r) {
    var i = ze.hasOwnProperty(t) ? ze[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (BS(t, n, i, r) && (n = null),
    r || i === null ? zS(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName,
    r = i.attributeNamespace,
    n === null ? e.removeAttribute(t) : (i = i.type,
    n = i === 3 || i === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Mn = VS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , Qo = Symbol.for("react.element")
  , gi = Symbol.for("react.portal")
  , yi = Symbol.for("react.fragment")
  , nf = Symbol.for("react.strict_mode")
  , pc = Symbol.for("react.profiler")
  , Uy = Symbol.for("react.provider")
  , Wy = Symbol.for("react.context")
  , rf = Symbol.for("react.forward_ref")
  , mc = Symbol.for("react.suspense")
  , gc = Symbol.for("react.suspense_list")
  , sf = Symbol.for("react.memo")
  , Hn = Symbol.for("react.lazy")
  , Hy = Symbol.for("react.offscreen")
  , qh = Symbol.iterator;
function Cs(e) {
    return e === null || typeof e != "object" ? null : (e = qh && e[qh] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var Ce = Object.assign, yu;
function Os(e) {
    if (yu === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            yu = t && t[1] || ""
        }
    return `
` + yu + e
}
var vu = !1;
function xu(e, t) {
    if (!e || vu)
        return "";
    vu = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var i = u.stack.split(`
`), s = r.stack.split(`
`), o = i.length - 1, a = s.length - 1; 1 <= o && 0 <= a && i[o] !== s[a]; )
                a--;
            for (; 1 <= o && 0 <= a; o--,
            a--)
                if (i[o] !== s[a]) {
                    if (o !== 1 || a !== 1)
                        do
                            if (o--,
                            a--,
                            0 > a || i[o] !== s[a]) {
                                var l = `
` + i[o].replace(" at new ", " at ");
                                return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)),
                                l
                            }
                        while (1 <= o && 0 <= a);
                    break
                }
        }
    } finally {
        vu = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? Os(e) : ""
}
function US(e) {
    switch (e.tag) {
    case 5:
        return Os(e.type);
    case 16:
        return Os("Lazy");
    case 13:
        return Os("Suspense");
    case 19:
        return Os("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = xu(e.type, !1),
        e;
    case 11:
        return e = xu(e.type.render, !1),
        e;
    case 1:
        return e = xu(e.type, !0),
        e;
    default:
        return ""
    }
}
function yc(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case yi:
        return "Fragment";
    case gi:
        return "Portal";
    case pc:
        return "Profiler";
    case nf:
        return "StrictMode";
    case mc:
        return "Suspense";
    case gc:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case Wy:
            return (e.displayName || "Context") + ".Consumer";
        case Uy:
            return (e._context.displayName || "Context") + ".Provider";
        case rf:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case sf:
            return t = e.displayName || null,
            t !== null ? t : yc(e.type) || "Memo";
        case Hn:
            t = e._payload,
            e = e._init;
            try {
                return yc(e(t))
            } catch {}
        }
    return null
}
function WS(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return yc(t);
    case 8:
        return t === nf ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function mr(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function Ky(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function HS(e) {
    var t = Ky(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var i = n.get
          , s = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return i.call(this)
            },
            set: function(o) {
                r = "" + o,
                s.call(this, o)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(o) {
                r = "" + o
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function Yo(e) {
    e._valueTracker || (e._valueTracker = HS(e))
}
function Zy(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = Ky(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function $a(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function vc(e, t) {
    var n = t.checked;
    return Ce({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function Jh(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = mr(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function Gy(e, t) {
    t = t.checked,
    t != null && tf(e, "checked", t, !1)
}
function xc(e, t) {
    Gy(e, t);
    var n = mr(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? wc(e, t.type, n) : t.hasOwnProperty("defaultValue") && wc(e, t.type, mr(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function ep(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function wc(e, t, n) {
    (t !== "number" || $a(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var Ds = Array.isArray;
function ji(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var i = 0; i < n.length; i++)
            t["$" + n[i]] = !0;
        for (n = 0; n < e.length; n++)
            i = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== i && (e[n].selected = i),
            i && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + mr(n),
        t = null,
        i = 0; i < e.length; i++) {
            if (e[i].value === n) {
                e[i].selected = !0,
                r && (e[i].defaultSelected = !0);
                return
            }
            t !== null || e[i].disabled || (t = e[i])
        }
        t !== null && (t.selected = !0)
    }
}
function Sc(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(A(91));
    return Ce({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function tp(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(A(92));
            if (Ds(n)) {
                if (1 < n.length)
                    throw Error(A(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: mr(n)
    }
}
function Qy(e, t) {
    var n = mr(t.value)
      , r = mr(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function np(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function Yy(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function bc(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Yy(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var Xo, Xy = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, i)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (Xo = Xo || document.createElement("div"),
        Xo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = Xo.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function to(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var zs = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , KS = ["Webkit", "ms", "Moz", "O"];
Object.keys(zs).forEach(function(e) {
    KS.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        zs[t] = zs[e]
    })
});
function qy(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || zs.hasOwnProperty(e) && zs[e] ? ("" + t).trim() : t + "px"
}
function Jy(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , i = qy(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, i) : e[n] = i
        }
}
var ZS = Ce({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function Cc(e, t) {
    if (t) {
        if (ZS[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(A(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(A(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(A(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(A(62))
    }
}
function kc(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var Tc = null;
function of(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var Ec = null
  , Oi = null
  , Di = null;
function rp(e) {
    if (e = Do(e)) {
        if (typeof Ec != "function")
            throw Error(A(280));
        var t = e.stateNode;
        t && (t = Ll(t),
        Ec(e.stateNode, e.type, t))
    }
}
function ev(e) {
    Oi ? Di ? Di.push(e) : Di = [e] : Oi = e
}
function tv() {
    if (Oi) {
        var e = Oi
          , t = Di;
        if (Di = Oi = null,
        rp(e),
        t)
            for (e = 0; e < t.length; e++)
                rp(t[e])
    }
}
function nv(e, t) {
    return e(t)
}
function rv() {}
var wu = !1;
function iv(e, t, n) {
    if (wu)
        return e(t, n);
    wu = !0;
    try {
        return nv(e, t, n)
    } finally {
        wu = !1,
        (Oi !== null || Di !== null) && (rv(),
        tv())
    }
}
function no(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = Ll(n);
    if (r === null)
        return null;
    n = r[t];
    e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(A(231, t, typeof n));
    return n
}
var Pc = !1;
if (kn)
    try {
        var ks = {};
        Object.defineProperty(ks, "passive", {
            get: function() {
                Pc = !0
            }
        }),
        window.addEventListener("test", ks, ks),
        window.removeEventListener("test", ks, ks)
    } catch {
        Pc = !1
    }
function GS(e, t, n, r, i, s, o, a, l) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (c) {
        this.onError(c)
    }
}
var $s = !1
  , Ba = null
  , Ua = !1
  , _c = null
  , QS = {
    onError: function(e) {
        $s = !0,
        Ba = e
    }
};
function YS(e, t, n, r, i, s, o, a, l) {
    $s = !1,
    Ba = null,
    GS.apply(QS, arguments)
}
function XS(e, t, n, r, i, s, o, a, l) {
    if (YS.apply(this, arguments),
    $s) {
        if ($s) {
            var u = Ba;
            $s = !1,
            Ba = null
        } else
            throw Error(A(198));
        Ua || (Ua = !0,
        _c = u)
    }
}
function ii(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function sv(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function ip(e) {
    if (ii(e) !== e)
        throw Error(A(188))
}
function qS(e) {
    var t = e.alternate;
    if (!t) {
        if (t = ii(e),
        t === null)
            throw Error(A(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var i = n.return;
        if (i === null)
            break;
        var s = i.alternate;
        if (s === null) {
            if (r = i.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (i.child === s.child) {
            for (s = i.child; s; ) {
                if (s === n)
                    return ip(i),
                    e;
                if (s === r)
                    return ip(i),
                    t;
                s = s.sibling
            }
            throw Error(A(188))
        }
        if (n.return !== r.return)
            n = i,
            r = s;
        else {
            for (var o = !1, a = i.child; a; ) {
                if (a === n) {
                    o = !0,
                    n = i,
                    r = s;
                    break
                }
                if (a === r) {
                    o = !0,
                    r = i,
                    n = s;
                    break
                }
                a = a.sibling
            }
            if (!o) {
                for (a = s.child; a; ) {
                    if (a === n) {
                        o = !0,
                        n = s,
                        r = i;
                        break
                    }
                    if (a === r) {
                        o = !0,
                        r = s,
                        n = i;
                        break
                    }
                    a = a.sibling
                }
                if (!o)
                    throw Error(A(189))
            }
        }
        if (n.alternate !== r)
            throw Error(A(190))
    }
    if (n.tag !== 3)
        throw Error(A(188));
    return n.stateNode.current === n ? e : t
}
function ov(e) {
    return e = qS(e),
    e !== null ? av(e) : null
}
function av(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = av(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var lv = vt.unstable_scheduleCallback
  , sp = vt.unstable_cancelCallback
  , JS = vt.unstable_shouldYield
  , eb = vt.unstable_requestPaint
  , Pe = vt.unstable_now
  , tb = vt.unstable_getCurrentPriorityLevel
  , af = vt.unstable_ImmediatePriority
  , uv = vt.unstable_UserBlockingPriority
  , Wa = vt.unstable_NormalPriority
  , nb = vt.unstable_LowPriority
  , cv = vt.unstable_IdlePriority
  , Ml = null
  , ln = null;
function rb(e) {
    if (ln && typeof ln.onCommitFiberRoot == "function")
        try {
            ln.onCommitFiberRoot(Ml, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var Zt = Math.clz32 ? Math.clz32 : ob
  , ib = Math.log
  , sb = Math.LN2;
function ob(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (ib(e) / sb | 0) | 0
}
var qo = 64
  , Jo = 4194304;
function Ls(e) {
    switch (e & -e) {
    case 1:
        return 1;
    case 2:
        return 2;
    case 4:
        return 4;
    case 8:
        return 8;
    case 16:
        return 16;
    case 32:
        return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return e & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function Ha(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , i = e.suspendedLanes
      , s = e.pingedLanes
      , o = n & 268435455;
    if (o !== 0) {
        var a = o & ~i;
        a !== 0 ? r = Ls(a) : (s &= o,
        s !== 0 && (r = Ls(s)))
    } else
        o = n & ~i,
        o !== 0 ? r = Ls(o) : s !== 0 && (r = Ls(s));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & i) && (i = r & -r,
    s = t & -t,
    i >= s || i === 16 && (s & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - Zt(t),
            i = 1 << n,
            r |= e[n],
            t &= ~i;
    return r
}
function ab(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function lb(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, s = e.pendingLanes; 0 < s; ) {
        var o = 31 - Zt(s)
          , a = 1 << o
          , l = i[o];
        l === -1 ? (!(a & n) || a & r) && (i[o] = ab(a, t)) : l <= t && (e.expiredLanes |= a),
        s &= ~a
    }
}
function Rc(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function dv() {
    var e = qo;
    return qo <<= 1,
    !(qo & 4194240) && (qo = 64),
    e
}
function Su(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function jo(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - Zt(t),
    e[t] = n
}
function ub(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var i = 31 - Zt(n)
          , s = 1 << i;
        t[i] = 0,
        r[i] = -1,
        e[i] = -1,
        n &= ~s
    }
}
function lf(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - Zt(n)
          , i = 1 << r;
        i & t | e[r] & t && (e[r] |= t),
        n &= ~i
    }
}
var ce = 0;
function fv(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var hv, uf, pv, mv, gv, Ac = !1, ea = [], or = null, ar = null, lr = null, ro = new Map, io = new Map, Gn = [], cb = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function op(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        or = null;
        break;
    case "dragenter":
    case "dragleave":
        ar = null;
        break;
    case "mouseover":
    case "mouseout":
        lr = null;
        break;
    case "pointerover":
    case "pointerout":
        ro.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        io.delete(t.pointerId)
    }
}
function Ts(e, t, n, r, i, s) {
    return e === null || e.nativeEvent !== s ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i]
    },
    t !== null && (t = Do(t),
    t !== null && uf(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    i !== null && t.indexOf(i) === -1 && t.push(i),
    e)
}
function db(e, t, n, r, i) {
    switch (t) {
    case "focusin":
        return or = Ts(or, e, t, n, r, i),
        !0;
    case "dragenter":
        return ar = Ts(ar, e, t, n, r, i),
        !0;
    case "mouseover":
        return lr = Ts(lr, e, t, n, r, i),
        !0;
    case "pointerover":
        var s = i.pointerId;
        return ro.set(s, Ts(ro.get(s) || null, e, t, n, r, i)),
        !0;
    case "gotpointercapture":
        return s = i.pointerId,
        io.set(s, Ts(io.get(s) || null, e, t, n, r, i)),
        !0
    }
    return !1
}
function yv(e) {
    var t = Lr(e.target);
    if (t !== null) {
        var n = ii(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = sv(n),
                t !== null) {
                    e.blockedOn = t,
                    gv(e.priority, function() {
                        pv(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function ba(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = Nc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            Tc = r,
            n.target.dispatchEvent(r),
            Tc = null
        } else
            return t = Do(n),
            t !== null && uf(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function ap(e, t, n) {
    ba(e) && n.delete(t)
}
function fb() {
    Ac = !1,
    or !== null && ba(or) && (or = null),
    ar !== null && ba(ar) && (ar = null),
    lr !== null && ba(lr) && (lr = null),
    ro.forEach(ap),
    io.forEach(ap)
}
function Es(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    Ac || (Ac = !0,
    vt.unstable_scheduleCallback(vt.unstable_NormalPriority, fb)))
}
function so(e) {
    function t(i) {
        return Es(i, e)
    }
    if (0 < ea.length) {
        Es(ea[0], e);
        for (var n = 1; n < ea.length; n++) {
            var r = ea[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (or !== null && Es(or, e),
    ar !== null && Es(ar, e),
    lr !== null && Es(lr, e),
    ro.forEach(t),
    io.forEach(t),
    n = 0; n < Gn.length; n++)
        r = Gn[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Gn.length && (n = Gn[0],
    n.blockedOn === null); )
        yv(n),
        n.blockedOn === null && Gn.shift()
}
var Li = Mn.ReactCurrentBatchConfig
  , Ka = !0;
function hb(e, t, n, r) {
    var i = ce
      , s = Li.transition;
    Li.transition = null;
    try {
        ce = 1,
        cf(e, t, n, r)
    } finally {
        ce = i,
        Li.transition = s
    }
}
function pb(e, t, n, r) {
    var i = ce
      , s = Li.transition;
    Li.transition = null;
    try {
        ce = 4,
        cf(e, t, n, r)
    } finally {
        ce = i,
        Li.transition = s
    }
}
function cf(e, t, n, r) {
    if (Ka) {
        var i = Nc(e, t, n, r);
        if (i === null)
            Nu(e, t, r, Za, n),
            op(e, r);
        else if (db(i, e, t, n, r))
            r.stopPropagation();
        else if (op(e, r),
        t & 4 && -1 < cb.indexOf(e)) {
            for (; i !== null; ) {
                var s = Do(i);
                if (s !== null && hv(s),
                s = Nc(e, t, n, r),
                s === null && Nu(e, t, r, Za, n),
                s === i)
                    break;
                i = s
            }
            i !== null && r.stopPropagation()
        } else
            Nu(e, t, r, null, n)
    }
}
var Za = null;
function Nc(e, t, n, r) {
    if (Za = null,
    e = of(r),
    e = Lr(e),
    e !== null)
        if (t = ii(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = sv(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return Za = e,
    null
}
function vv(e) {
    switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
        return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (tb()) {
        case af:
            return 1;
        case uv:
            return 4;
        case Wa:
        case nb:
            return 16;
        case cv:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var tr = null
  , df = null
  , Ca = null;
function xv() {
    if (Ca)
        return Ca;
    var e, t = df, n = t.length, r, i = "value"in tr ? tr.value : tr.textContent, s = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++)
        ;
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === i[s - r]; r++)
        ;
    return Ca = i.slice(e, 1 < r ? 1 - r : void 0)
}
function ka(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function ta() {
    return !0
}
function lp() {
    return !1
}
function St(e) {
    function t(n, r, i, s, o) {
        this._reactName = n,
        this._targetInst = i,
        this.type = r,
        this.nativeEvent = s,
        this.target = o,
        this.currentTarget = null;
        for (var a in e)
            e.hasOwnProperty(a) && (n = e[a],
            this[a] = n ? n(s) : s[a]);
        return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? ta : lp,
        this.isPropagationStopped = lp,
        this
    }
    return Ce(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = ta)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = ta)
        },
        persist: function() {},
        isPersistent: ta
    }),
    t
}
var hs = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, ff = St(hs), Oo = Ce({}, hs, {
    view: 0,
    detail: 0
}), mb = St(Oo), bu, Cu, Ps, jl = Ce({}, Oo, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: hf,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== Ps && (Ps && e.type === "mousemove" ? (bu = e.screenX - Ps.screenX,
        Cu = e.screenY - Ps.screenY) : Cu = bu = 0,
        Ps = e),
        bu)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : Cu
    }
}), up = St(jl), gb = Ce({}, jl, {
    dataTransfer: 0
}), yb = St(gb), vb = Ce({}, Oo, {
    relatedTarget: 0
}), ku = St(vb), xb = Ce({}, hs, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), wb = St(xb), Sb = Ce({}, hs, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), bb = St(Sb), Cb = Ce({}, hs, {
    data: 0
}), cp = St(Cb), kb = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, Tb = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, Eb = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function Pb(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Eb[e]) ? !!t[e] : !1
}
function hf() {
    return Pb
}
var _b = Ce({}, Oo, {
    key: function(e) {
        if (e.key) {
            var t = kb[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = ka(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Tb[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: hf,
    charCode: function(e) {
        return e.type === "keypress" ? ka(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? ka(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , Rb = St(_b)
  , Ab = Ce({}, jl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , dp = St(Ab)
  , Nb = Ce({}, Oo, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: hf
})
  , Mb = St(Nb)
  , jb = Ce({}, hs, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , Ob = St(jb)
  , Db = Ce({}, jl, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , Lb = St(Db)
  , Ib = [9, 13, 27, 32]
  , pf = kn && "CompositionEvent"in window
  , Bs = null;
kn && "documentMode"in document && (Bs = document.documentMode);
var Vb = kn && "TextEvent"in window && !Bs
  , wv = kn && (!pf || Bs && 8 < Bs && 11 >= Bs)
  , fp = " "
  , hp = !1;
function Sv(e, t) {
    switch (e) {
    case "keyup":
        return Ib.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function bv(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var vi = !1;
function Fb(e, t) {
    switch (e) {
    case "compositionend":
        return bv(t);
    case "keypress":
        return t.which !== 32 ? null : (hp = !0,
        fp);
    case "textInput":
        return e = t.data,
        e === fp && hp ? null : e;
    default:
        return null
    }
}
function zb(e, t) {
    if (vi)
        return e === "compositionend" || !pf && Sv(e, t) ? (e = xv(),
        Ca = df = tr = null,
        vi = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return wv && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var $b = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function pp(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!$b[e.type] : t === "textarea"
}
function Cv(e, t, n, r) {
    ev(r),
    t = Ga(t, "onChange"),
    0 < t.length && (n = new ff("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var Us = null
  , oo = null;
function Bb(e) {
    Ov(e, 0)
}
function Ol(e) {
    var t = Si(e);
    if (Zy(t))
        return e
}
function Ub(e, t) {
    if (e === "change")
        return t
}
var kv = !1;
if (kn) {
    var Tu;
    if (kn) {
        var Eu = "oninput"in document;
        if (!Eu) {
            var mp = document.createElement("div");
            mp.setAttribute("oninput", "return;"),
            Eu = typeof mp.oninput == "function"
        }
        Tu = Eu
    } else
        Tu = !1;
    kv = Tu && (!document.documentMode || 9 < document.documentMode)
}
function gp() {
    Us && (Us.detachEvent("onpropertychange", Tv),
    oo = Us = null)
}
function Tv(e) {
    if (e.propertyName === "value" && Ol(oo)) {
        var t = [];
        Cv(t, oo, e, of(e)),
        iv(Bb, t)
    }
}
function Wb(e, t, n) {
    e === "focusin" ? (gp(),
    Us = t,
    oo = n,
    Us.attachEvent("onpropertychange", Tv)) : e === "focusout" && gp()
}
function Hb(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return Ol(oo)
}
function Kb(e, t) {
    if (e === "click")
        return Ol(t)
}
function Zb(e, t) {
    if (e === "input" || e === "change")
        return Ol(t)
}
function Gb(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Qt = typeof Object.is == "function" ? Object.is : Gb;
function ao(e, t) {
    if (Qt(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!hc.call(t, i) || !Qt(e[i], t[i]))
            return !1
    }
    return !0
}
function yp(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function vp(e, t) {
    var n = yp(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
            e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = yp(n)
    }
}
function Ev(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Ev(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function Pv() {
    for (var e = window, t = $a(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = $a(e.document)
    }
    return t
}
function mf(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function Qb(e) {
    var t = Pv()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Ev(n.ownerDocument.documentElement, n)) {
        if (r !== null && mf(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var i = n.textContent.length
                  , s = Math.min(r.start, i);
                r = r.end === void 0 ? s : Math.min(r.end, i),
                !e.extend && s > r && (i = r,
                r = s,
                s = i),
                i = vp(n, s);
                var o = vp(n, r);
                i && o && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(),
                t.setStart(i.node, i.offset),
                e.removeAllRanges(),
                s > r ? (e.addRange(t),
                e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var Yb = kn && "documentMode"in document && 11 >= document.documentMode
  , xi = null
  , Mc = null
  , Ws = null
  , jc = !1;
function xp(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    jc || xi == null || xi !== $a(r) || (r = xi,
    "selectionStart"in r && mf(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    Ws && ao(Ws, r) || (Ws = r,
    r = Ga(Mc, "onSelect"),
    0 < r.length && (t = new ff("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = xi)))
}
function na(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var wi = {
    animationend: na("Animation", "AnimationEnd"),
    animationiteration: na("Animation", "AnimationIteration"),
    animationstart: na("Animation", "AnimationStart"),
    transitionend: na("Transition", "TransitionEnd")
}
  , Pu = {}
  , _v = {};
kn && (_v = document.createElement("div").style,
"AnimationEvent"in window || (delete wi.animationend.animation,
delete wi.animationiteration.animation,
delete wi.animationstart.animation),
"TransitionEvent"in window || delete wi.transitionend.transition);
function Dl(e) {
    if (Pu[e])
        return Pu[e];
    if (!wi[e])
        return e;
    var t = wi[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in _v)
            return Pu[e] = t[n];
    return e
}
var Rv = Dl("animationend")
  , Av = Dl("animationiteration")
  , Nv = Dl("animationstart")
  , Mv = Dl("transitionend")
  , jv = new Map
  , wp = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Tr(e, t) {
    jv.set(e, t),
    ri(t, [e])
}
for (var _u = 0; _u < wp.length; _u++) {
    var Ru = wp[_u]
      , Xb = Ru.toLowerCase()
      , qb = Ru[0].toUpperCase() + Ru.slice(1);
    Tr(Xb, "on" + qb)
}
Tr(Rv, "onAnimationEnd");
Tr(Av, "onAnimationIteration");
Tr(Nv, "onAnimationStart");
Tr("dblclick", "onDoubleClick");
Tr("focusin", "onFocus");
Tr("focusout", "onBlur");
Tr(Mv, "onTransitionEnd");
Xi("onMouseEnter", ["mouseout", "mouseover"]);
Xi("onMouseLeave", ["mouseout", "mouseover"]);
Xi("onPointerEnter", ["pointerout", "pointerover"]);
Xi("onPointerLeave", ["pointerout", "pointerover"]);
ri("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
ri("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
ri("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
ri("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
ri("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
ri("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Is = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , Jb = new Set("cancel close invalid load scroll toggle".split(" ").concat(Is));
function Sp(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    XS(r, t, void 0, e),
    e.currentTarget = null
}
function Ov(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , i = r.event;
        r = r.listeners;
        e: {
            var s = void 0;
            if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                    var a = r[o]
                      , l = a.instance
                      , u = a.currentTarget;
                    if (a = a.listener,
                    l !== s && i.isPropagationStopped())
                        break e;
                    Sp(i, a, u),
                    s = l
                }
            else
                for (o = 0; o < r.length; o++) {
                    if (a = r[o],
                    l = a.instance,
                    u = a.currentTarget,
                    a = a.listener,
                    l !== s && i.isPropagationStopped())
                        break e;
                    Sp(i, a, u),
                    s = l
                }
        }
    }
    if (Ua)
        throw e = _c,
        Ua = !1,
        _c = null,
        e
}
function me(e, t) {
    var n = t[Vc];
    n === void 0 && (n = t[Vc] = new Set);
    var r = e + "__bubble";
    n.has(r) || (Dv(t, e, 2, !1),
    n.add(r))
}
function Au(e, t, n) {
    var r = 0;
    t && (r |= 4),
    Dv(n, e, r, t)
}
var ra = "_reactListening" + Math.random().toString(36).slice(2);
function lo(e) {
    if (!e[ra]) {
        e[ra] = !0,
        By.forEach(function(n) {
            n !== "selectionchange" && (Jb.has(n) || Au(n, !1, e),
            Au(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[ra] || (t[ra] = !0,
        Au("selectionchange", !1, t))
    }
}
function Dv(e, t, n, r) {
    switch (vv(t)) {
    case 1:
        var i = hb;
        break;
    case 4:
        i = pb;
        break;
    default:
        i = cf
    }
    n = i.bind(null, t, n, e),
    i = void 0,
    !Pc || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0),
    r ? i !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: i
    }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, {
        passive: i
    }) : e.addEventListener(t, n, !1)
}
function Nu(e, t, n, r, i) {
    var s = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var o = r.tag;
            if (o === 3 || o === 4) {
                var a = r.stateNode.containerInfo;
                if (a === i || a.nodeType === 8 && a.parentNode === i)
                    break;
                if (o === 4)
                    for (o = r.return; o !== null; ) {
                        var l = o.tag;
                        if ((l === 3 || l === 4) && (l = o.stateNode.containerInfo,
                        l === i || l.nodeType === 8 && l.parentNode === i))
                            return;
                        o = o.return
                    }
                for (; a !== null; ) {
                    if (o = Lr(a),
                    o === null)
                        return;
                    if (l = o.tag,
                    l === 5 || l === 6) {
                        r = s = o;
                        continue e
                    }
                    a = a.parentNode
                }
            }
            r = r.return
        }
    iv(function() {
        var u = s
          , c = of(n)
          , d = [];
        e: {
            var f = jv.get(e);
            if (f !== void 0) {
                var h = ff
                  , v = e;
                switch (e) {
                case "keypress":
                    if (ka(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    h = Rb;
                    break;
                case "focusin":
                    v = "focus",
                    h = ku;
                    break;
                case "focusout":
                    v = "blur",
                    h = ku;
                    break;
                case "beforeblur":
                case "afterblur":
                    h = ku;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    h = up;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    h = yb;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    h = Mb;
                    break;
                case Rv:
                case Av:
                case Nv:
                    h = wb;
                    break;
                case Mv:
                    h = Ob;
                    break;
                case "scroll":
                    h = mb;
                    break;
                case "wheel":
                    h = Lb;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    h = bb;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    h = dp
                }
                var g = (t & 4) !== 0
                  , x = !g && e === "scroll"
                  , m = g ? f !== null ? f + "Capture" : null : f;
                g = [];
                for (var p = u, y; p !== null; ) {
                    y = p;
                    var b = y.stateNode;
                    if (y.tag === 5 && b !== null && (y = b,
                    m !== null && (b = no(p, m),
                    b != null && g.push(uo(p, b, y)))),
                    x)
                        break;
                    p = p.return
                }
                0 < g.length && (f = new h(f,v,null,n,c),
                d.push({
                    event: f,
                    listeners: g
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (f = e === "mouseover" || e === "pointerover",
                h = e === "mouseout" || e === "pointerout",
                f && n !== Tc && (v = n.relatedTarget || n.fromElement) && (Lr(v) || v[Tn]))
                    break e;
                if ((h || f) && (f = c.window === c ? c : (f = c.ownerDocument) ? f.defaultView || f.parentWindow : window,
                h ? (v = n.relatedTarget || n.toElement,
                h = u,
                v = v ? Lr(v) : null,
                v !== null && (x = ii(v),
                v !== x || v.tag !== 5 && v.tag !== 6) && (v = null)) : (h = null,
                v = u),
                h !== v)) {
                    if (g = up,
                    b = "onMouseLeave",
                    m = "onMouseEnter",
                    p = "mouse",
                    (e === "pointerout" || e === "pointerover") && (g = dp,
                    b = "onPointerLeave",
                    m = "onPointerEnter",
                    p = "pointer"),
                    x = h == null ? f : Si(h),
                    y = v == null ? f : Si(v),
                    f = new g(b,p + "leave",h,n,c),
                    f.target = x,
                    f.relatedTarget = y,
                    b = null,
                    Lr(c) === u && (g = new g(m,p + "enter",v,n,c),
                    g.target = y,
                    g.relatedTarget = x,
                    b = g),
                    x = b,
                    h && v)
                        t: {
                            for (g = h,
                            m = v,
                            p = 0,
                            y = g; y; y = fi(y))
                                p++;
                            for (y = 0,
                            b = m; b; b = fi(b))
                                y++;
                            for (; 0 < p - y; )
                                g = fi(g),
                                p--;
                            for (; 0 < y - p; )
                                m = fi(m),
                                y--;
                            for (; p--; ) {
                                if (g === m || m !== null && g === m.alternate)
                                    break t;
                                g = fi(g),
                                m = fi(m)
                            }
                            g = null
                        }
                    else
                        g = null;
                    h !== null && bp(d, f, h, g, !1),
                    v !== null && x !== null && bp(d, x, v, g, !0)
                }
            }
            e: {
                if (f = u ? Si(u) : window,
                h = f.nodeName && f.nodeName.toLowerCase(),
                h === "select" || h === "input" && f.type === "file")
                    var C = Ub;
                else if (pp(f))
                    if (kv)
                        C = Zb;
                    else {
                        C = Hb;
                        var k = Wb
                    }
                else
                    (h = f.nodeName) && h.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (C = Kb);
                if (C && (C = C(e, u))) {
                    Cv(d, C, n, c);
                    break e
                }
                k && k(e, f, u),
                e === "focusout" && (k = f._wrapperState) && k.controlled && f.type === "number" && wc(f, "number", f.value)
            }
            switch (k = u ? Si(u) : window,
            e) {
            case "focusin":
                (pp(k) || k.contentEditable === "true") && (xi = k,
                Mc = u,
                Ws = null);
                break;
            case "focusout":
                Ws = Mc = xi = null;
                break;
            case "mousedown":
                jc = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                jc = !1,
                xp(d, n, c);
                break;
            case "selectionchange":
                if (Yb)
                    break;
            case "keydown":
            case "keyup":
                xp(d, n, c)
            }
            var T;
            if (pf)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var E = "onCompositionStart";
                        break e;
                    case "compositionend":
                        E = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        E = "onCompositionUpdate";
                        break e
                    }
                    E = void 0
                }
            else
                vi ? Sv(e, n) && (E = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (E = "onCompositionStart");
            E && (wv && n.locale !== "ko" && (vi || E !== "onCompositionStart" ? E === "onCompositionEnd" && vi && (T = xv()) : (tr = c,
            df = "value"in tr ? tr.value : tr.textContent,
            vi = !0)),
            k = Ga(u, E),
            0 < k.length && (E = new cp(E,e,null,n,c),
            d.push({
                event: E,
                listeners: k
            }),
            T ? E.data = T : (T = bv(n),
            T !== null && (E.data = T)))),
            (T = Vb ? Fb(e, n) : zb(e, n)) && (u = Ga(u, "onBeforeInput"),
            0 < u.length && (c = new cp("onBeforeInput","beforeinput",null,n,c),
            d.push({
                event: c,
                listeners: u
            }),
            c.data = T))
        }
        Ov(d, t)
    })
}
function uo(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function Ga(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var i = e
          , s = i.stateNode;
        i.tag === 5 && s !== null && (i = s,
        s = no(e, n),
        s != null && r.unshift(uo(e, s, i)),
        s = no(e, t),
        s != null && r.push(uo(e, s, i))),
        e = e.return
    }
    return r
}
function fi(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function bp(e, t, n, r, i) {
    for (var s = t._reactName, o = []; n !== null && n !== r; ) {
        var a = n
          , l = a.alternate
          , u = a.stateNode;
        if (l !== null && l === r)
            break;
        a.tag === 5 && u !== null && (a = u,
        i ? (l = no(n, s),
        l != null && o.unshift(uo(n, l, a))) : i || (l = no(n, s),
        l != null && o.push(uo(n, l, a)))),
        n = n.return
    }
    o.length !== 0 && e.push({
        event: t,
        listeners: o
    })
}
var eC = /\r\n?/g
  , tC = /\u0000|\uFFFD/g;
function Cp(e) {
    return (typeof e == "string" ? e : "" + e).replace(eC, `
`).replace(tC, "")
}
function ia(e, t, n) {
    if (t = Cp(t),
    Cp(e) !== t && n)
        throw Error(A(425))
}
function Qa() {}
var Oc = null
  , Dc = null;
function Lc(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var Ic = typeof setTimeout == "function" ? setTimeout : void 0
  , nC = typeof clearTimeout == "function" ? clearTimeout : void 0
  , kp = typeof Promise == "function" ? Promise : void 0
  , rC = typeof queueMicrotask == "function" ? queueMicrotask : typeof kp < "u" ? function(e) {
    return kp.resolve(null).then(e).catch(iC)
}
: Ic;
function iC(e) {
    setTimeout(function() {
        throw e
    })
}
function Mu(e, t) {
    var n = t
      , r = 0;
    do {
        var i = n.nextSibling;
        if (e.removeChild(n),
        i && i.nodeType === 8)
            if (n = i.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(i),
                    so(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = i
    } while (n);
    so(t)
}
function ur(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function Tp(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var ps = Math.random().toString(36).slice(2)
  , on = "__reactFiber$" + ps
  , co = "__reactProps$" + ps
  , Tn = "__reactContainer$" + ps
  , Vc = "__reactEvents$" + ps
  , sC = "__reactListeners$" + ps
  , oC = "__reactHandles$" + ps;
function Lr(e) {
    var t = e[on];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[Tn] || n[on]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = Tp(e); e !== null; ) {
                    if (n = e[on])
                        return n;
                    e = Tp(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function Do(e) {
    return e = e[on] || e[Tn],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function Si(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(A(33))
}
function Ll(e) {
    return e[co] || null
}
var Fc = []
  , bi = -1;
function Er(e) {
    return {
        current: e
    }
}
function ge(e) {
    0 > bi || (e.current = Fc[bi],
    Fc[bi] = null,
    bi--)
}
function fe(e, t) {
    bi++,
    Fc[bi] = e.current,
    e.current = t
}
var gr = {}
  , Ge = Er(gr)
  , lt = Er(!1)
  , Yr = gr;
function qi(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return gr;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var i = {}, s;
    for (s in n)
        i[s] = t[s];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = i),
    i
}
function ut(e) {
    return e = e.childContextTypes,
    e != null
}
function Ya() {
    ge(lt),
    ge(Ge)
}
function Ep(e, t, n) {
    if (Ge.current !== gr)
        throw Error(A(168));
    fe(Ge, t),
    fe(lt, n)
}
function Lv(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var i in r)
        if (!(i in t))
            throw Error(A(108, WS(e) || "Unknown", i));
    return Ce({}, n, r)
}
function Xa(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || gr,
    Yr = Ge.current,
    fe(Ge, e),
    fe(lt, lt.current),
    !0
}
function Pp(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(A(169));
    n ? (e = Lv(e, t, Yr),
    r.__reactInternalMemoizedMergedChildContext = e,
    ge(lt),
    ge(Ge),
    fe(Ge, e)) : ge(lt),
    fe(lt, n)
}
var xn = null
  , Il = !1
  , ju = !1;
function Iv(e) {
    xn === null ? xn = [e] : xn.push(e)
}
function aC(e) {
    Il = !0,
    Iv(e)
}
function Pr() {
    if (!ju && xn !== null) {
        ju = !0;
        var e = 0
          , t = ce;
        try {
            var n = xn;
            for (ce = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            xn = null,
            Il = !1
        } catch (i) {
            throw xn !== null && (xn = xn.slice(e + 1)),
            lv(af, Pr),
            i
        } finally {
            ce = t,
            ju = !1
        }
    }
    return null
}
var Ci = []
  , ki = 0
  , qa = null
  , Ja = 0
  , kt = []
  , Tt = 0
  , Xr = null
  , Sn = 1
  , bn = "";
function jr(e, t) {
    Ci[ki++] = Ja,
    Ci[ki++] = qa,
    qa = e,
    Ja = t
}
function Vv(e, t, n) {
    kt[Tt++] = Sn,
    kt[Tt++] = bn,
    kt[Tt++] = Xr,
    Xr = e;
    var r = Sn;
    e = bn;
    var i = 32 - Zt(r) - 1;
    r &= ~(1 << i),
    n += 1;
    var s = 32 - Zt(t) + i;
    if (30 < s) {
        var o = i - i % 5;
        s = (r & (1 << o) - 1).toString(32),
        r >>= o,
        i -= o,
        Sn = 1 << 32 - Zt(t) + i | n << i | r,
        bn = s + e
    } else
        Sn = 1 << s | n << i | r,
        bn = e
}
function gf(e) {
    e.return !== null && (jr(e, 1),
    Vv(e, 1, 0))
}
function yf(e) {
    for (; e === qa; )
        qa = Ci[--ki],
        Ci[ki] = null,
        Ja = Ci[--ki],
        Ci[ki] = null;
    for (; e === Xr; )
        Xr = kt[--Tt],
        kt[Tt] = null,
        bn = kt[--Tt],
        kt[Tt] = null,
        Sn = kt[--Tt],
        kt[Tt] = null
}
var gt = null
  , mt = null
  , ve = !1
  , Kt = null;
function Fv(e, t) {
    var n = Et(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function _p(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        gt = e,
        mt = ur(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        gt = e,
        mt = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = Xr !== null ? {
            id: Sn,
            overflow: bn
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = Et(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        gt = e,
        mt = null,
        !0) : !1;
    default:
        return !1
    }
}
function zc(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function $c(e) {
    if (ve) {
        var t = mt;
        if (t) {
            var n = t;
            if (!_p(e, t)) {
                if (zc(e))
                    throw Error(A(418));
                t = ur(n.nextSibling);
                var r = gt;
                t && _p(e, t) ? Fv(r, n) : (e.flags = e.flags & -4097 | 2,
                ve = !1,
                gt = e)
            }
        } else {
            if (zc(e))
                throw Error(A(418));
            e.flags = e.flags & -4097 | 2,
            ve = !1,
            gt = e
        }
    }
}
function Rp(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    gt = e
}
function sa(e) {
    if (e !== gt)
        return !1;
    if (!ve)
        return Rp(e),
        ve = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !Lc(e.type, e.memoizedProps)),
    t && (t = mt)) {
        if (zc(e))
            throw zv(),
            Error(A(418));
        for (; t; )
            Fv(e, t),
            t = ur(t.nextSibling)
    }
    if (Rp(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(A(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            mt = ur(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            mt = null
        }
    } else
        mt = gt ? ur(e.stateNode.nextSibling) : null;
    return !0
}
function zv() {
    for (var e = mt; e; )
        e = ur(e.nextSibling)
}
function Ji() {
    mt = gt = null,
    ve = !1
}
function vf(e) {
    Kt === null ? Kt = [e] : Kt.push(e)
}
var lC = Mn.ReactCurrentBatchConfig;
function _s(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(A(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(A(147, e));
            var i = r
              , s = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === s ? t.ref : (t = function(o) {
                var a = i.refs;
                o === null ? delete a[s] : a[s] = o
            }
            ,
            t._stringRef = s,
            t)
        }
        if (typeof e != "string")
            throw Error(A(284));
        if (!n._owner)
            throw Error(A(290, e))
    }
    return e
}
function oa(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(A(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function Ap(e) {
    var t = e._init;
    return t(e._payload)
}
function $v(e) {
    function t(m, p) {
        if (e) {
            var y = m.deletions;
            y === null ? (m.deletions = [p],
            m.flags |= 16) : y.push(p)
        }
    }
    function n(m, p) {
        if (!e)
            return null;
        for (; p !== null; )
            t(m, p),
            p = p.sibling;
        return null
    }
    function r(m, p) {
        for (m = new Map; p !== null; )
            p.key !== null ? m.set(p.key, p) : m.set(p.index, p),
            p = p.sibling;
        return m
    }
    function i(m, p) {
        return m = hr(m, p),
        m.index = 0,
        m.sibling = null,
        m
    }
    function s(m, p, y) {
        return m.index = y,
        e ? (y = m.alternate,
        y !== null ? (y = y.index,
        y < p ? (m.flags |= 2,
        p) : y) : (m.flags |= 2,
        p)) : (m.flags |= 1048576,
        p)
    }
    function o(m) {
        return e && m.alternate === null && (m.flags |= 2),
        m
    }
    function a(m, p, y, b) {
        return p === null || p.tag !== 6 ? (p = zu(y, m.mode, b),
        p.return = m,
        p) : (p = i(p, y),
        p.return = m,
        p)
    }
    function l(m, p, y, b) {
        var C = y.type;
        return C === yi ? c(m, p, y.props.children, b, y.key) : p !== null && (p.elementType === C || typeof C == "object" && C !== null && C.$$typeof === Hn && Ap(C) === p.type) ? (b = i(p, y.props),
        b.ref = _s(m, p, y),
        b.return = m,
        b) : (b = Na(y.type, y.key, y.props, null, m.mode, b),
        b.ref = _s(m, p, y),
        b.return = m,
        b)
    }
    function u(m, p, y, b) {
        return p === null || p.tag !== 4 || p.stateNode.containerInfo !== y.containerInfo || p.stateNode.implementation !== y.implementation ? (p = $u(y, m.mode, b),
        p.return = m,
        p) : (p = i(p, y.children || []),
        p.return = m,
        p)
    }
    function c(m, p, y, b, C) {
        return p === null || p.tag !== 7 ? (p = Gr(y, m.mode, b, C),
        p.return = m,
        p) : (p = i(p, y),
        p.return = m,
        p)
    }
    function d(m, p, y) {
        if (typeof p == "string" && p !== "" || typeof p == "number")
            return p = zu("" + p, m.mode, y),
            p.return = m,
            p;
        if (typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
            case Qo:
                return y = Na(p.type, p.key, p.props, null, m.mode, y),
                y.ref = _s(m, null, p),
                y.return = m,
                y;
            case gi:
                return p = $u(p, m.mode, y),
                p.return = m,
                p;
            case Hn:
                var b = p._init;
                return d(m, b(p._payload), y)
            }
            if (Ds(p) || Cs(p))
                return p = Gr(p, m.mode, y, null),
                p.return = m,
                p;
            oa(m, p)
        }
        return null
    }
    function f(m, p, y, b) {
        var C = p !== null ? p.key : null;
        if (typeof y == "string" && y !== "" || typeof y == "number")
            return C !== null ? null : a(m, p, "" + y, b);
        if (typeof y == "object" && y !== null) {
            switch (y.$$typeof) {
            case Qo:
                return y.key === C ? l(m, p, y, b) : null;
            case gi:
                return y.key === C ? u(m, p, y, b) : null;
            case Hn:
                return C = y._init,
                f(m, p, C(y._payload), b)
            }
            if (Ds(y) || Cs(y))
                return C !== null ? null : c(m, p, y, b, null);
            oa(m, y)
        }
        return null
    }
    function h(m, p, y, b, C) {
        if (typeof b == "string" && b !== "" || typeof b == "number")
            return m = m.get(y) || null,
            a(p, m, "" + b, C);
        if (typeof b == "object" && b !== null) {
            switch (b.$$typeof) {
            case Qo:
                return m = m.get(b.key === null ? y : b.key) || null,
                l(p, m, b, C);
            case gi:
                return m = m.get(b.key === null ? y : b.key) || null,
                u(p, m, b, C);
            case Hn:
                var k = b._init;
                return h(m, p, y, k(b._payload), C)
            }
            if (Ds(b) || Cs(b))
                return m = m.get(y) || null,
                c(p, m, b, C, null);
            oa(p, b)
        }
        return null
    }
    function v(m, p, y, b) {
        for (var C = null, k = null, T = p, E = p = 0, M = null; T !== null && E < y.length; E++) {
            T.index > E ? (M = T,
            T = null) : M = T.sibling;
            var N = f(m, T, y[E], b);
            if (N === null) {
                T === null && (T = M);
                break
            }
            e && T && N.alternate === null && t(m, T),
            p = s(N, p, E),
            k === null ? C = N : k.sibling = N,
            k = N,
            T = M
        }
        if (E === y.length)
            return n(m, T),
            ve && jr(m, E),
            C;
        if (T === null) {
            for (; E < y.length; E++)
                T = d(m, y[E], b),
                T !== null && (p = s(T, p, E),
                k === null ? C = T : k.sibling = T,
                k = T);
            return ve && jr(m, E),
            C
        }
        for (T = r(m, T); E < y.length; E++)
            M = h(T, m, E, y[E], b),
            M !== null && (e && M.alternate !== null && T.delete(M.key === null ? E : M.key),
            p = s(M, p, E),
            k === null ? C = M : k.sibling = M,
            k = M);
        return e && T.forEach(function(W) {
            return t(m, W)
        }),
        ve && jr(m, E),
        C
    }
    function g(m, p, y, b) {
        var C = Cs(y);
        if (typeof C != "function")
            throw Error(A(150));
        if (y = C.call(y),
        y == null)
            throw Error(A(151));
        for (var k = C = null, T = p, E = p = 0, M = null, N = y.next(); T !== null && !N.done; E++,
        N = y.next()) {
            T.index > E ? (M = T,
            T = null) : M = T.sibling;
            var W = f(m, T, N.value, b);
            if (W === null) {
                T === null && (T = M);
                break
            }
            e && T && W.alternate === null && t(m, T),
            p = s(W, p, E),
            k === null ? C = W : k.sibling = W,
            k = W,
            T = M
        }
        if (N.done)
            return n(m, T),
            ve && jr(m, E),
            C;
        if (T === null) {
            for (; !N.done; E++,
            N = y.next())
                N = d(m, N.value, b),
                N !== null && (p = s(N, p, E),
                k === null ? C = N : k.sibling = N,
                k = N);
            return ve && jr(m, E),
            C
        }
        for (T = r(m, T); !N.done; E++,
        N = y.next())
            N = h(T, m, E, N.value, b),
            N !== null && (e && N.alternate !== null && T.delete(N.key === null ? E : N.key),
            p = s(N, p, E),
            k === null ? C = N : k.sibling = N,
            k = N);
        return e && T.forEach(function(V) {
            return t(m, V)
        }),
        ve && jr(m, E),
        C
    }
    function x(m, p, y, b) {
        if (typeof y == "object" && y !== null && y.type === yi && y.key === null && (y = y.props.children),
        typeof y == "object" && y !== null) {
            switch (y.$$typeof) {
            case Qo:
                e: {
                    for (var C = y.key, k = p; k !== null; ) {
                        if (k.key === C) {
                            if (C = y.type,
                            C === yi) {
                                if (k.tag === 7) {
                                    n(m, k.sibling),
                                    p = i(k, y.props.children),
                                    p.return = m,
                                    m = p;
                                    break e
                                }
                            } else if (k.elementType === C || typeof C == "object" && C !== null && C.$$typeof === Hn && Ap(C) === k.type) {
                                n(m, k.sibling),
                                p = i(k, y.props),
                                p.ref = _s(m, k, y),
                                p.return = m,
                                m = p;
                                break e
                            }
                            n(m, k);
                            break
                        } else
                            t(m, k);
                        k = k.sibling
                    }
                    y.type === yi ? (p = Gr(y.props.children, m.mode, b, y.key),
                    p.return = m,
                    m = p) : (b = Na(y.type, y.key, y.props, null, m.mode, b),
                    b.ref = _s(m, p, y),
                    b.return = m,
                    m = b)
                }
                return o(m);
            case gi:
                e: {
                    for (k = y.key; p !== null; ) {
                        if (p.key === k)
                            if (p.tag === 4 && p.stateNode.containerInfo === y.containerInfo && p.stateNode.implementation === y.implementation) {
                                n(m, p.sibling),
                                p = i(p, y.children || []),
                                p.return = m,
                                m = p;
                                break e
                            } else {
                                n(m, p);
                                break
                            }
                        else
                            t(m, p);
                        p = p.sibling
                    }
                    p = $u(y, m.mode, b),
                    p.return = m,
                    m = p
                }
                return o(m);
            case Hn:
                return k = y._init,
                x(m, p, k(y._payload), b)
            }
            if (Ds(y))
                return v(m, p, y, b);
            if (Cs(y))
                return g(m, p, y, b);
            oa(m, y)
        }
        return typeof y == "string" && y !== "" || typeof y == "number" ? (y = "" + y,
        p !== null && p.tag === 6 ? (n(m, p.sibling),
        p = i(p, y),
        p.return = m,
        m = p) : (n(m, p),
        p = zu(y, m.mode, b),
        p.return = m,
        m = p),
        o(m)) : n(m, p)
    }
    return x
}
var es = $v(!0)
  , Bv = $v(!1)
  , el = Er(null)
  , tl = null
  , Ti = null
  , xf = null;
function wf() {
    xf = Ti = tl = null
}
function Sf(e) {
    var t = el.current;
    ge(el),
    e._currentValue = t
}
function Bc(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function Ii(e, t) {
    tl = e,
    xf = Ti = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (at = !0),
    e.firstContext = null)
}
function Nt(e) {
    var t = e._currentValue;
    if (xf !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        Ti === null) {
            if (tl === null)
                throw Error(A(308));
            Ti = e,
            tl.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            Ti = Ti.next = e;
    return t
}
var Ir = null;
function bf(e) {
    Ir === null ? Ir = [e] : Ir.push(e)
}
function Uv(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? (n.next = n,
    bf(t)) : (n.next = i.next,
    i.next = n),
    t.interleaved = n,
    En(e, r)
}
function En(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var Kn = !1;
function Cf(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function Wv(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function Cn(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function cr(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    se & 2) {
        var i = r.pending;
        return i === null ? t.next = t : (t.next = i.next,
        i.next = t),
        r.pending = t,
        En(e, n)
    }
    return i = r.interleaved,
    i === null ? (t.next = t,
    bf(r)) : (t.next = i.next,
    i.next = t),
    r.interleaved = t,
    En(e, n)
}
function Ta(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        lf(e, n)
    }
}
function Np(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var i = null
          , s = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var o = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                s === null ? i = s = o : s = s.next = o,
                n = n.next
            } while (n !== null);
            s === null ? i = s = t : s = s.next = t
        } else
            i = s = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: i,
            lastBaseUpdate: s,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function nl(e, t, n, r) {
    var i = e.updateQueue;
    Kn = !1;
    var s = i.firstBaseUpdate
      , o = i.lastBaseUpdate
      , a = i.shared.pending;
    if (a !== null) {
        i.shared.pending = null;
        var l = a
          , u = l.next;
        l.next = null,
        o === null ? s = u : o.next = u,
        o = l;
        var c = e.alternate;
        c !== null && (c = c.updateQueue,
        a = c.lastBaseUpdate,
        a !== o && (a === null ? c.firstBaseUpdate = u : a.next = u,
        c.lastBaseUpdate = l))
    }
    if (s !== null) {
        var d = i.baseState;
        o = 0,
        c = u = l = null,
        a = s;
        do {
            var f = a.lane
              , h = a.eventTime;
            if ((r & f) === f) {
                c !== null && (c = c.next = {
                    eventTime: h,
                    lane: 0,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                });
                e: {
                    var v = e
                      , g = a;
                    switch (f = t,
                    h = n,
                    g.tag) {
                    case 1:
                        if (v = g.payload,
                        typeof v == "function") {
                            d = v.call(h, d, f);
                            break e
                        }
                        d = v;
                        break e;
                    case 3:
                        v.flags = v.flags & -65537 | 128;
                    case 0:
                        if (v = g.payload,
                        f = typeof v == "function" ? v.call(h, d, f) : v,
                        f == null)
                            break e;
                        d = Ce({}, d, f);
                        break e;
                    case 2:
                        Kn = !0
                    }
                }
                a.callback !== null && a.lane !== 0 && (e.flags |= 64,
                f = i.effects,
                f === null ? i.effects = [a] : f.push(a))
            } else
                h = {
                    eventTime: h,
                    lane: f,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                },
                c === null ? (u = c = h,
                l = d) : c = c.next = h,
                o |= f;
            if (a = a.next,
            a === null) {
                if (a = i.shared.pending,
                a === null)
                    break;
                f = a,
                a = f.next,
                f.next = null,
                i.lastBaseUpdate = f,
                i.shared.pending = null
            }
        } while (!0);
        if (c === null && (l = d),
        i.baseState = l,
        i.firstBaseUpdate = u,
        i.lastBaseUpdate = c,
        t = i.shared.interleaved,
        t !== null) {
            i = t;
            do
                o |= i.lane,
                i = i.next;
            while (i !== t)
        } else
            s === null && (i.shared.lanes = 0);
        Jr |= o,
        e.lanes = o,
        e.memoizedState = d
    }
}
function Mp(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , i = r.callback;
            if (i !== null) {
                if (r.callback = null,
                r = n,
                typeof i != "function")
                    throw Error(A(191, i));
                i.call(r)
            }
        }
}
var Lo = {}
  , un = Er(Lo)
  , fo = Er(Lo)
  , ho = Er(Lo);
function Vr(e) {
    if (e === Lo)
        throw Error(A(174));
    return e
}
function kf(e, t) {
    switch (fe(ho, t),
    fe(fo, e),
    fe(un, Lo),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : bc(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = bc(t, e)
    }
    ge(un),
    fe(un, t)
}
function ts() {
    ge(un),
    ge(fo),
    ge(ho)
}
function Hv(e) {
    Vr(ho.current);
    var t = Vr(un.current)
      , n = bc(t, e.type);
    t !== n && (fe(fo, e),
    fe(un, n))
}
function Tf(e) {
    fo.current === e && (ge(un),
    ge(fo))
}
var we = Er(0);
function rl(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var Ou = [];
function Ef() {
    for (var e = 0; e < Ou.length; e++)
        Ou[e]._workInProgressVersionPrimary = null;
    Ou.length = 0
}
var Ea = Mn.ReactCurrentDispatcher
  , Du = Mn.ReactCurrentBatchConfig
  , qr = 0
  , be = null
  , Me = null
  , De = null
  , il = !1
  , Hs = !1
  , po = 0
  , uC = 0;
function Ue() {
    throw Error(A(321))
}
function Pf(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!Qt(e[n], t[n]))
            return !1;
    return !0
}
function _f(e, t, n, r, i, s) {
    if (qr = s,
    be = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    Ea.current = e === null || e.memoizedState === null ? hC : pC,
    e = n(r, i),
    Hs) {
        s = 0;
        do {
            if (Hs = !1,
            po = 0,
            25 <= s)
                throw Error(A(301));
            s += 1,
            De = Me = null,
            t.updateQueue = null,
            Ea.current = mC,
            e = n(r, i)
        } while (Hs)
    }
    if (Ea.current = sl,
    t = Me !== null && Me.next !== null,
    qr = 0,
    De = Me = be = null,
    il = !1,
    t)
        throw Error(A(300));
    return e
}
function Rf() {
    var e = po !== 0;
    return po = 0,
    e
}
function en() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return De === null ? be.memoizedState = De = e : De = De.next = e,
    De
}
function Mt() {
    if (Me === null) {
        var e = be.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = Me.next;
    var t = De === null ? be.memoizedState : De.next;
    if (t !== null)
        De = t,
        Me = e;
    else {
        if (e === null)
            throw Error(A(310));
        Me = e,
        e = {
            memoizedState: Me.memoizedState,
            baseState: Me.baseState,
            baseQueue: Me.baseQueue,
            queue: Me.queue,
            next: null
        },
        De === null ? be.memoizedState = De = e : De = De.next = e
    }
    return De
}
function mo(e, t) {
    return typeof t == "function" ? t(e) : t
}
function Lu(e) {
    var t = Mt()
      , n = t.queue;
    if (n === null)
        throw Error(A(311));
    n.lastRenderedReducer = e;
    var r = Me
      , i = r.baseQueue
      , s = n.pending;
    if (s !== null) {
        if (i !== null) {
            var o = i.next;
            i.next = s.next,
            s.next = o
        }
        r.baseQueue = i = s,
        n.pending = null
    }
    if (i !== null) {
        s = i.next,
        r = r.baseState;
        var a = o = null
          , l = null
          , u = s;
        do {
            var c = u.lane;
            if ((qr & c) === c)
                l !== null && (l = l.next = {
                    lane: 0,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                }),
                r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var d = {
                    lane: c,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                l === null ? (a = l = d,
                o = r) : l = l.next = d,
                be.lanes |= c,
                Jr |= c
            }
            u = u.next
        } while (u !== null && u !== s);
        l === null ? o = r : l.next = a,
        Qt(r, t.memoizedState) || (at = !0),
        t.memoizedState = r,
        t.baseState = o,
        t.baseQueue = l,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        i = e;
        do
            s = i.lane,
            be.lanes |= s,
            Jr |= s,
            i = i.next;
        while (i !== e)
    } else
        i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function Iu(e) {
    var t = Mt()
      , n = t.queue;
    if (n === null)
        throw Error(A(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , i = n.pending
      , s = t.memoizedState;
    if (i !== null) {
        n.pending = null;
        var o = i = i.next;
        do
            s = e(s, o.action),
            o = o.next;
        while (o !== i);
        Qt(s, t.memoizedState) || (at = !0),
        t.memoizedState = s,
        t.baseQueue === null && (t.baseState = s),
        n.lastRenderedState = s
    }
    return [s, r]
}
function Kv() {}
function Zv(e, t) {
    var n = be
      , r = Mt()
      , i = t()
      , s = !Qt(r.memoizedState, i);
    if (s && (r.memoizedState = i,
    at = !0),
    r = r.queue,
    Af(Yv.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || De !== null && De.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        go(9, Qv.bind(null, n, r, i, t), void 0, null),
        Le === null)
            throw Error(A(349));
        qr & 30 || Gv(n, t, i)
    }
    return i
}
function Gv(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = be.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    be.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function Qv(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    Xv(t) && qv(e)
}
function Yv(e, t, n) {
    return n(function() {
        Xv(t) && qv(e)
    })
}
function Xv(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Qt(e, n)
    } catch {
        return !0
    }
}
function qv(e) {
    var t = En(e, 1);
    t !== null && Gt(t, e, 1, -1)
}
function jp(e) {
    var t = en();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: mo,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = fC.bind(null, be, e),
    [t.memoizedState, e]
}
function go(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = be.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    be.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function Jv() {
    return Mt().memoizedState
}
function Pa(e, t, n, r) {
    var i = en();
    be.flags |= e,
    i.memoizedState = go(1 | t, n, void 0, r === void 0 ? null : r)
}
function Vl(e, t, n, r) {
    var i = Mt();
    r = r === void 0 ? null : r;
    var s = void 0;
    if (Me !== null) {
        var o = Me.memoizedState;
        if (s = o.destroy,
        r !== null && Pf(r, o.deps)) {
            i.memoizedState = go(t, n, s, r);
            return
        }
    }
    be.flags |= e,
    i.memoizedState = go(1 | t, n, s, r)
}
function Op(e, t) {
    return Pa(8390656, 8, e, t)
}
function Af(e, t) {
    return Vl(2048, 8, e, t)
}
function e0(e, t) {
    return Vl(4, 2, e, t)
}
function t0(e, t) {
    return Vl(4, 4, e, t)
}
function n0(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function r0(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    Vl(4, 4, n0.bind(null, t, e), n)
}
function Nf() {}
function i0(e, t) {
    var n = Mt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Pf(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function s0(e, t) {
    var n = Mt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Pf(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function o0(e, t, n) {
    return qr & 21 ? (Qt(n, t) || (n = dv(),
    be.lanes |= n,
    Jr |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    at = !0),
    e.memoizedState = n)
}
function cC(e, t) {
    var n = ce;
    ce = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = Du.transition;
    Du.transition = {};
    try {
        e(!1),
        t()
    } finally {
        ce = n,
        Du.transition = r
    }
}
function a0() {
    return Mt().memoizedState
}
function dC(e, t, n) {
    var r = fr(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    l0(e))
        u0(t, n);
    else if (n = Uv(e, t, n, r),
    n !== null) {
        var i = nt();
        Gt(n, e, r, i),
        c0(n, t, r)
    }
}
function fC(e, t, n) {
    var r = fr(e)
      , i = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (l0(e))
        u0(t, i);
    else {
        var s = e.alternate;
        if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer,
        s !== null))
            try {
                var o = t.lastRenderedState
                  , a = s(o, n);
                if (i.hasEagerState = !0,
                i.eagerState = a,
                Qt(a, o)) {
                    var l = t.interleaved;
                    l === null ? (i.next = i,
                    bf(t)) : (i.next = l.next,
                    l.next = i),
                    t.interleaved = i;
                    return
                }
            } catch {} finally {}
        n = Uv(e, t, i, r),
        n !== null && (i = nt(),
        Gt(n, e, r, i),
        c0(n, t, r))
    }
}
function l0(e) {
    var t = e.alternate;
    return e === be || t !== null && t === be
}
function u0(e, t) {
    Hs = il = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function c0(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        lf(e, n)
    }
}
var sl = {
    readContext: Nt,
    useCallback: Ue,
    useContext: Ue,
    useEffect: Ue,
    useImperativeHandle: Ue,
    useInsertionEffect: Ue,
    useLayoutEffect: Ue,
    useMemo: Ue,
    useReducer: Ue,
    useRef: Ue,
    useState: Ue,
    useDebugValue: Ue,
    useDeferredValue: Ue,
    useTransition: Ue,
    useMutableSource: Ue,
    useSyncExternalStore: Ue,
    useId: Ue,
    unstable_isNewReconciler: !1
}
  , hC = {
    readContext: Nt,
    useCallback: function(e, t) {
        return en().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: Nt,
    useEffect: Op,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        Pa(4194308, 4, n0.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return Pa(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return Pa(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = en();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = en();
        return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = dC.bind(null, be, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = en();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: jp,
    useDebugValue: Nf,
    useDeferredValue: function(e) {
        return en().memoizedState = e
    },
    useTransition: function() {
        var e = jp(!1)
          , t = e[0];
        return e = cC.bind(null, e[1]),
        en().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = be
          , i = en();
        if (ve) {
            if (n === void 0)
                throw Error(A(407));
            n = n()
        } else {
            if (n = t(),
            Le === null)
                throw Error(A(349));
            qr & 30 || Gv(r, t, n)
        }
        i.memoizedState = n;
        var s = {
            value: n,
            getSnapshot: t
        };
        return i.queue = s,
        Op(Yv.bind(null, r, s, e), [e]),
        r.flags |= 2048,
        go(9, Qv.bind(null, r, s, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = en()
          , t = Le.identifierPrefix;
        if (ve) {
            var n = bn
              , r = Sn;
            n = (r & ~(1 << 32 - Zt(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = po++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = uC++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , pC = {
    readContext: Nt,
    useCallback: i0,
    useContext: Nt,
    useEffect: Af,
    useImperativeHandle: r0,
    useInsertionEffect: e0,
    useLayoutEffect: t0,
    useMemo: s0,
    useReducer: Lu,
    useRef: Jv,
    useState: function() {
        return Lu(mo)
    },
    useDebugValue: Nf,
    useDeferredValue: function(e) {
        var t = Mt();
        return o0(t, Me.memoizedState, e)
    },
    useTransition: function() {
        var e = Lu(mo)[0]
          , t = Mt().memoizedState;
        return [e, t]
    },
    useMutableSource: Kv,
    useSyncExternalStore: Zv,
    useId: a0,
    unstable_isNewReconciler: !1
}
  , mC = {
    readContext: Nt,
    useCallback: i0,
    useContext: Nt,
    useEffect: Af,
    useImperativeHandle: r0,
    useInsertionEffect: e0,
    useLayoutEffect: t0,
    useMemo: s0,
    useReducer: Iu,
    useRef: Jv,
    useState: function() {
        return Iu(mo)
    },
    useDebugValue: Nf,
    useDeferredValue: function(e) {
        var t = Mt();
        return Me === null ? t.memoizedState = e : o0(t, Me.memoizedState, e)
    },
    useTransition: function() {
        var e = Iu(mo)[0]
          , t = Mt().memoizedState;
        return [e, t]
    },
    useMutableSource: Kv,
    useSyncExternalStore: Zv,
    useId: a0,
    unstable_isNewReconciler: !1
};
function $t(e, t) {
    if (e && e.defaultProps) {
        t = Ce({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
function Uc(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : Ce({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Fl = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? ii(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = nt()
          , i = fr(e)
          , s = Cn(r, i);
        s.payload = t,
        n != null && (s.callback = n),
        t = cr(e, s, i),
        t !== null && (Gt(t, e, i, r),
        Ta(t, e, i))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = nt()
          , i = fr(e)
          , s = Cn(r, i);
        s.tag = 1,
        s.payload = t,
        n != null && (s.callback = n),
        t = cr(e, s, i),
        t !== null && (Gt(t, e, i, r),
        Ta(t, e, i))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = nt()
          , r = fr(e)
          , i = Cn(n, r);
        i.tag = 2,
        t != null && (i.callback = t),
        t = cr(e, i, r),
        t !== null && (Gt(t, e, r, n),
        Ta(t, e, r))
    }
};
function Dp(e, t, n, r, i, s, o) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, s, o) : t.prototype && t.prototype.isPureReactComponent ? !ao(n, r) || !ao(i, s) : !0
}
function d0(e, t, n) {
    var r = !1
      , i = gr
      , s = t.contextType;
    return typeof s == "object" && s !== null ? s = Nt(s) : (i = ut(t) ? Yr : Ge.current,
    r = t.contextTypes,
    s = (r = r != null) ? qi(e, i) : gr),
    t = new t(n,s),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = Fl,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = i,
    e.__reactInternalMemoizedMaskedChildContext = s),
    t
}
function Lp(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Fl.enqueueReplaceState(t, t.state, null)
}
function Wc(e, t, n, r) {
    var i = e.stateNode;
    i.props = n,
    i.state = e.memoizedState,
    i.refs = {},
    Cf(e);
    var s = t.contextType;
    typeof s == "object" && s !== null ? i.context = Nt(s) : (s = ut(t) ? Yr : Ge.current,
    i.context = qi(e, s)),
    i.state = e.memoizedState,
    s = t.getDerivedStateFromProps,
    typeof s == "function" && (Uc(e, t, s, n),
    i.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state,
    typeof i.componentWillMount == "function" && i.componentWillMount(),
    typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(),
    t !== i.state && Fl.enqueueReplaceState(i, i.state, null),
    nl(e, n, i, r),
    i.state = e.memoizedState),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308)
}
function ns(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += US(r),
            r = r.return;
        while (r);
        var i = n
    } catch (s) {
        i = `
Error generating stack: ` + s.message + `
` + s.stack
    }
    return {
        value: e,
        source: t,
        stack: i,
        digest: null
    }
}
function Vu(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function Hc(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var gC = typeof WeakMap == "function" ? WeakMap : Map;
function f0(e, t, n) {
    n = Cn(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        al || (al = !0,
        td = r),
        Hc(e, t)
    }
    ,
    n
}
function h0(e, t, n) {
    n = Cn(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var i = t.value;
        n.payload = function() {
            return r(i)
        }
        ,
        n.callback = function() {
            Hc(e, t)
        }
    }
    var s = e.stateNode;
    return s !== null && typeof s.componentDidCatch == "function" && (n.callback = function() {
        Hc(e, t),
        typeof r != "function" && (dr === null ? dr = new Set([this]) : dr.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: o !== null ? o : ""
        })
    }
    ),
    n
}
function Ip(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new gC;
        var i = new Set;
        r.set(t, i)
    } else
        i = r.get(t),
        i === void 0 && (i = new Set,
        r.set(t, i));
    i.has(n) || (i.add(n),
    e = AC.bind(null, e, t, n),
    t.then(e, e))
}
function Vp(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function Fp(e, t, n, r, i) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = i,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Cn(-1, 1),
    t.tag = 2,
    cr(n, t, 1))),
    n.lanes |= 1),
    e)
}
var yC = Mn.ReactCurrentOwner
  , at = !1;
function Xe(e, t, n, r) {
    t.child = e === null ? Bv(t, null, n, r) : es(t, e.child, n, r)
}
function zp(e, t, n, r, i) {
    n = n.render;
    var s = t.ref;
    return Ii(t, i),
    r = _f(e, t, n, r, s, i),
    n = Rf(),
    e !== null && !at ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~i,
    Pn(e, t, i)) : (ve && n && gf(t),
    t.flags |= 1,
    Xe(e, t, r, i),
    t.child)
}
function $p(e, t, n, r, i) {
    if (e === null) {
        var s = n.type;
        return typeof s == "function" && !Ff(s) && s.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = s,
        p0(e, t, s, r, i)) : (e = Na(n.type, null, r, t, t.mode, i),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (s = e.child,
    !(e.lanes & i)) {
        var o = s.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : ao,
        n(o, r) && e.ref === t.ref)
            return Pn(e, t, i)
    }
    return t.flags |= 1,
    e = hr(s, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function p0(e, t, n, r, i) {
    if (e !== null) {
        var s = e.memoizedProps;
        if (ao(s, r) && e.ref === t.ref)
            if (at = !1,
            t.pendingProps = r = s,
            (e.lanes & i) !== 0)
                e.flags & 131072 && (at = !0);
            else
                return t.lanes = e.lanes,
                Pn(e, t, i)
    }
    return Kc(e, t, n, r, i)
}
function m0(e, t, n) {
    var r = t.pendingProps
      , i = r.children
      , s = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            fe(Pi, ht),
            ht |= n;
        else {
            if (!(n & 1073741824))
                return e = s !== null ? s.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                fe(Pi, ht),
                ht |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = s !== null ? s.baseLanes : n,
            fe(Pi, ht),
            ht |= r
        }
    else
        s !== null ? (r = s.baseLanes | n,
        t.memoizedState = null) : r = n,
        fe(Pi, ht),
        ht |= r;
    return Xe(e, t, i, n),
    t.child
}
function g0(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function Kc(e, t, n, r, i) {
    var s = ut(n) ? Yr : Ge.current;
    return s = qi(t, s),
    Ii(t, i),
    n = _f(e, t, n, r, s, i),
    r = Rf(),
    e !== null && !at ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~i,
    Pn(e, t, i)) : (ve && r && gf(t),
    t.flags |= 1,
    Xe(e, t, n, i),
    t.child)
}
function Bp(e, t, n, r, i) {
    if (ut(n)) {
        var s = !0;
        Xa(t)
    } else
        s = !1;
    if (Ii(t, i),
    t.stateNode === null)
        _a(e, t),
        d0(t, n, r),
        Wc(t, n, r, i),
        r = !0;
    else if (e === null) {
        var o = t.stateNode
          , a = t.memoizedProps;
        o.props = a;
        var l = o.context
          , u = n.contextType;
        typeof u == "object" && u !== null ? u = Nt(u) : (u = ut(n) ? Yr : Ge.current,
        u = qi(t, u));
        var c = n.getDerivedStateFromProps
          , d = typeof c == "function" || typeof o.getSnapshotBeforeUpdate == "function";
        d || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== r || l !== u) && Lp(t, o, r, u),
        Kn = !1;
        var f = t.memoizedState;
        o.state = f,
        nl(t, r, o, i),
        l = t.memoizedState,
        a !== r || f !== l || lt.current || Kn ? (typeof c == "function" && (Uc(t, n, c, r),
        l = t.memoizedState),
        (a = Kn || Dp(t, n, a, r, f, l, u)) ? (d || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(),
        typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()),
        typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = l),
        o.props = r,
        o.state = l,
        o.context = u,
        r = a) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        o = t.stateNode,
        Wv(e, t),
        a = t.memoizedProps,
        u = t.type === t.elementType ? a : $t(t.type, a),
        o.props = u,
        d = t.pendingProps,
        f = o.context,
        l = n.contextType,
        typeof l == "object" && l !== null ? l = Nt(l) : (l = ut(n) ? Yr : Ge.current,
        l = qi(t, l));
        var h = n.getDerivedStateFromProps;
        (c = typeof h == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== d || f !== l) && Lp(t, o, r, l),
        Kn = !1,
        f = t.memoizedState,
        o.state = f,
        nl(t, r, o, i);
        var v = t.memoizedState;
        a !== d || f !== v || lt.current || Kn ? (typeof h == "function" && (Uc(t, n, h, r),
        v = t.memoizedState),
        (u = Kn || Dp(t, n, u, r, f, v, l) || !1) ? (c || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, v, l),
        typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, v, l)),
        typeof o.componentDidUpdate == "function" && (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = v),
        o.props = r,
        o.state = v,
        o.context = l,
        r = u) : (typeof o.componentDidUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return Zc(e, t, n, r, s, i)
}
function Zc(e, t, n, r, i, s) {
    g0(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o)
        return i && Pp(t, n, !1),
        Pn(e, t, s);
    r = t.stateNode,
    yC.current = t;
    var a = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && o ? (t.child = es(t, e.child, null, s),
    t.child = es(t, null, a, s)) : Xe(e, t, a, s),
    t.memoizedState = r.state,
    i && Pp(t, n, !0),
    t.child
}
function y0(e) {
    var t = e.stateNode;
    t.pendingContext ? Ep(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Ep(e, t.context, !1),
    kf(e, t.containerInfo)
}
function Up(e, t, n, r, i) {
    return Ji(),
    vf(i),
    t.flags |= 256,
    Xe(e, t, n, r),
    t.child
}
var Gc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function Qc(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function v0(e, t, n) {
    var r = t.pendingProps, i = we.current, s = !1, o = (t.flags & 128) !== 0, a;
    if ((a = o) || (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a ? (s = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1),
    fe(we, i & 1),
    e === null)
        return $c(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (o = r.children,
        e = r.fallback,
        s ? (r = t.mode,
        s = t.child,
        o = {
            mode: "hidden",
            children: o
        },
        !(r & 1) && s !== null ? (s.childLanes = 0,
        s.pendingProps = o) : s = Bl(o, r, 0, null),
        e = Gr(e, r, n, null),
        s.return = t,
        e.return = t,
        s.sibling = e,
        t.child = s,
        t.child.memoizedState = Qc(n),
        t.memoizedState = Gc,
        e) : Mf(t, o));
    if (i = e.memoizedState,
    i !== null && (a = i.dehydrated,
    a !== null))
        return vC(e, t, o, r, a, i, n);
    if (s) {
        s = r.fallback,
        o = t.mode,
        i = e.child,
        a = i.sibling;
        var l = {
            mode: "hidden",
            children: r.children
        };
        return !(o & 1) && t.child !== i ? (r = t.child,
        r.childLanes = 0,
        r.pendingProps = l,
        t.deletions = null) : (r = hr(i, l),
        r.subtreeFlags = i.subtreeFlags & 14680064),
        a !== null ? s = hr(a, s) : (s = Gr(s, o, n, null),
        s.flags |= 2),
        s.return = t,
        r.return = t,
        r.sibling = s,
        t.child = r,
        r = s,
        s = t.child,
        o = e.child.memoizedState,
        o = o === null ? Qc(n) : {
            baseLanes: o.baseLanes | n,
            cachePool: null,
            transitions: o.transitions
        },
        s.memoizedState = o,
        s.childLanes = e.childLanes & ~n,
        t.memoizedState = Gc,
        r
    }
    return s = e.child,
    e = s.sibling,
    r = hr(s, {
        mode: "visible",
        children: r.children
    }),
    !(t.mode & 1) && (r.lanes = n),
    r.return = t,
    r.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = r,
    t.memoizedState = null,
    r
}
function Mf(e, t) {
    return t = Bl({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function aa(e, t, n, r) {
    return r !== null && vf(r),
    es(t, e.child, null, n),
    e = Mf(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function vC(e, t, n, r, i, s, o) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = Vu(Error(A(422))),
        aa(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (s = r.fallback,
        i = t.mode,
        r = Bl({
            mode: "visible",
            children: r.children
        }, i, 0, null),
        s = Gr(s, i, o, null),
        s.flags |= 2,
        r.return = t,
        s.return = t,
        r.sibling = s,
        t.child = r,
        t.mode & 1 && es(t, e.child, null, o),
        t.child.memoizedState = Qc(o),
        t.memoizedState = Gc,
        s);
    if (!(t.mode & 1))
        return aa(e, t, o, null);
    if (i.data === "$!") {
        if (r = i.nextSibling && i.nextSibling.dataset,
        r)
            var a = r.dgst;
        return r = a,
        s = Error(A(419)),
        r = Vu(s, r, void 0),
        aa(e, t, o, r)
    }
    if (a = (o & e.childLanes) !== 0,
    at || a) {
        if (r = Le,
        r !== null) {
            switch (o & -o) {
            case 4:
                i = 2;
                break;
            case 16:
                i = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                i = 32;
                break;
            case 536870912:
                i = 268435456;
                break;
            default:
                i = 0
            }
            i = i & (r.suspendedLanes | o) ? 0 : i,
            i !== 0 && i !== s.retryLane && (s.retryLane = i,
            En(e, i),
            Gt(r, e, i, -1))
        }
        return Vf(),
        r = Vu(Error(A(421))),
        aa(e, t, o, r)
    }
    return i.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = NC.bind(null, e),
    i._reactRetry = t,
    null) : (e = s.treeContext,
    mt = ur(i.nextSibling),
    gt = t,
    ve = !0,
    Kt = null,
    e !== null && (kt[Tt++] = Sn,
    kt[Tt++] = bn,
    kt[Tt++] = Xr,
    Sn = e.id,
    bn = e.overflow,
    Xr = t),
    t = Mf(t, r.children),
    t.flags |= 4096,
    t)
}
function Wp(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    Bc(e.return, t, n)
}
function Fu(e, t, n, r, i) {
    var s = e.memoizedState;
    s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i
    } : (s.isBackwards = t,
    s.rendering = null,
    s.renderingStartTime = 0,
    s.last = r,
    s.tail = n,
    s.tailMode = i)
}
function x0(e, t, n) {
    var r = t.pendingProps
      , i = r.revealOrder
      , s = r.tail;
    if (Xe(e, t, r.children, n),
    r = we.current,
    r & 2)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && Wp(e, n, t);
                else if (e.tag === 19)
                    Wp(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if (fe(we, r),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (i) {
        case "forwards":
            for (n = t.child,
            i = null; n !== null; )
                e = n.alternate,
                e !== null && rl(e) === null && (i = n),
                n = n.sibling;
            n = i,
            n === null ? (i = t.child,
            t.child = null) : (i = n.sibling,
            n.sibling = null),
            Fu(t, !1, i, n, s);
            break;
        case "backwards":
            for (n = null,
            i = t.child,
            t.child = null; i !== null; ) {
                if (e = i.alternate,
                e !== null && rl(e) === null) {
                    t.child = i;
                    break
                }
                e = i.sibling,
                i.sibling = n,
                n = i,
                i = e
            }
            Fu(t, !0, n, null, s);
            break;
        case "together":
            Fu(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function _a(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function Pn(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    Jr |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(A(153));
    if (t.child !== null) {
        for (e = t.child,
        n = hr(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = hr(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function xC(e, t, n) {
    switch (t.tag) {
    case 3:
        y0(t),
        Ji();
        break;
    case 5:
        Hv(t);
        break;
    case 1:
        ut(t.type) && Xa(t);
        break;
    case 4:
        kf(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , i = t.memoizedProps.value;
        fe(el, r._currentValue),
        r._currentValue = i;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (fe(we, we.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? v0(e, t, n) : (fe(we, we.current & 1),
            e = Pn(e, t, n),
            e !== null ? e.sibling : null);
        fe(we, we.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return x0(e, t, n);
            t.flags |= 128
        }
        if (i = t.memoizedState,
        i !== null && (i.rendering = null,
        i.tail = null,
        i.lastEffect = null),
        fe(we, we.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        m0(e, t, n)
    }
    return Pn(e, t, n)
}
var w0, Yc, S0, b0;
w0 = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
Yc = function() {}
;
S0 = function(e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
        e = t.stateNode,
        Vr(un.current);
        var s = null;
        switch (n) {
        case "input":
            i = vc(e, i),
            r = vc(e, r),
            s = [];
            break;
        case "select":
            i = Ce({}, i, {
                value: void 0
            }),
            r = Ce({}, r, {
                value: void 0
            }),
            s = [];
            break;
        case "textarea":
            i = Sc(e, i),
            r = Sc(e, r),
            s = [];
            break;
        default:
            typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Qa)
        }
        Cc(n, r);
        var o;
        n = null;
        for (u in i)
            if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
                if (u === "style") {
                    var a = i[u];
                    for (o in a)
                        a.hasOwnProperty(o) && (n || (n = {}),
                        n[o] = "")
                } else
                    u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (eo.hasOwnProperty(u) ? s || (s = []) : (s = s || []).push(u, null));
        for (u in r) {
            var l = r[u];
            if (a = i != null ? i[u] : void 0,
            r.hasOwnProperty(u) && l !== a && (l != null || a != null))
                if (u === "style")
                    if (a) {
                        for (o in a)
                            !a.hasOwnProperty(o) || l && l.hasOwnProperty(o) || (n || (n = {}),
                            n[o] = "");
                        for (o in l)
                            l.hasOwnProperty(o) && a[o] !== l[o] && (n || (n = {}),
                            n[o] = l[o])
                    } else
                        n || (s || (s = []),
                        s.push(u, n)),
                        n = l;
                else
                    u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                    a = a ? a.__html : void 0,
                    l != null && a !== l && (s = s || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (s = s || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (eo.hasOwnProperty(u) ? (l != null && u === "onScroll" && me("scroll", e),
                    s || a === l || (s = [])) : (s = s || []).push(u, l))
        }
        n && (s = s || []).push("style", n);
        var u = s;
        (t.updateQueue = u) && (t.flags |= 4)
    }
}
;
b0 = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function Rs(e, t) {
    if (!ve)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function We(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var i = e.child; i !== null; )
            n |= i.lanes | i.childLanes,
            r |= i.subtreeFlags & 14680064,
            r |= i.flags & 14680064,
            i.return = e,
            i = i.sibling;
    else
        for (i = e.child; i !== null; )
            n |= i.lanes | i.childLanes,
            r |= i.subtreeFlags,
            r |= i.flags,
            i.return = e,
            i = i.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function wC(e, t, n) {
    var r = t.pendingProps;
    switch (yf(t),
    t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return We(t),
        null;
    case 1:
        return ut(t.type) && Ya(),
        We(t),
        null;
    case 3:
        return r = t.stateNode,
        ts(),
        ge(lt),
        ge(Ge),
        Ef(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (sa(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        Kt !== null && (id(Kt),
        Kt = null))),
        Yc(e, t),
        We(t),
        null;
    case 5:
        Tf(t);
        var i = Vr(ho.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            S0(e, t, n, r, i),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(A(166));
                return We(t),
                null
            }
            if (e = Vr(un.current),
            sa(t)) {
                r = t.stateNode,
                n = t.type;
                var s = t.memoizedProps;
                switch (r[on] = t,
                r[co] = s,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    me("cancel", r),
                    me("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    me("load", r);
                    break;
                case "video":
                case "audio":
                    for (i = 0; i < Is.length; i++)
                        me(Is[i], r);
                    break;
                case "source":
                    me("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    me("error", r),
                    me("load", r);
                    break;
                case "details":
                    me("toggle", r);
                    break;
                case "input":
                    Jh(r, s),
                    me("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!s.multiple
                    },
                    me("invalid", r);
                    break;
                case "textarea":
                    tp(r, s),
                    me("invalid", r)
                }
                Cc(n, s),
                i = null;
                for (var o in s)
                    if (s.hasOwnProperty(o)) {
                        var a = s[o];
                        o === "children" ? typeof a == "string" ? r.textContent !== a && (s.suppressHydrationWarning !== !0 && ia(r.textContent, a, e),
                        i = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (s.suppressHydrationWarning !== !0 && ia(r.textContent, a, e),
                        i = ["children", "" + a]) : eo.hasOwnProperty(o) && a != null && o === "onScroll" && me("scroll", r)
                    }
                switch (n) {
                case "input":
                    Yo(r),
                    ep(r, s, !0);
                    break;
                case "textarea":
                    Yo(r),
                    np(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof s.onClick == "function" && (r.onclick = Qa)
                }
                r = i,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                o = i.nodeType === 9 ? i : i.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = Yy(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, {
                    is: r.is
                }) : (e = o.createElement(n),
                n === "select" && (o = e,
                r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n),
                e[on] = t,
                e[co] = r,
                w0(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (o = kc(n, r),
                    n) {
                    case "dialog":
                        me("cancel", e),
                        me("close", e),
                        i = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        me("load", e),
                        i = r;
                        break;
                    case "video":
                    case "audio":
                        for (i = 0; i < Is.length; i++)
                            me(Is[i], e);
                        i = r;
                        break;
                    case "source":
                        me("error", e),
                        i = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        me("error", e),
                        me("load", e),
                        i = r;
                        break;
                    case "details":
                        me("toggle", e),
                        i = r;
                        break;
                    case "input":
                        Jh(e, r),
                        i = vc(e, r),
                        me("invalid", e);
                        break;
                    case "option":
                        i = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        i = Ce({}, r, {
                            value: void 0
                        }),
                        me("invalid", e);
                        break;
                    case "textarea":
                        tp(e, r),
                        i = Sc(e, r),
                        me("invalid", e);
                        break;
                    default:
                        i = r
                    }
                    Cc(n, i),
                    a = i;
                    for (s in a)
                        if (a.hasOwnProperty(s)) {
                            var l = a[s];
                            s === "style" ? Jy(e, l) : s === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                            l != null && Xy(e, l)) : s === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && to(e, l) : typeof l == "number" && to(e, "" + l) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (eo.hasOwnProperty(s) ? l != null && s === "onScroll" && me("scroll", e) : l != null && tf(e, s, l, o))
                        }
                    switch (n) {
                    case "input":
                        Yo(e),
                        ep(e, r, !1);
                        break;
                    case "textarea":
                        Yo(e),
                        np(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + mr(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        s = r.value,
                        s != null ? ji(e, !!r.multiple, s, !1) : r.defaultValue != null && ji(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof i.onClick == "function" && (e.onclick = Qa)
                    }
                    switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        r = !!r.autoFocus;
                        break e;
                    case "img":
                        r = !0;
                        break e;
                    default:
                        r = !1
                    }
                }
                r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return We(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            b0(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(A(166));
            if (n = Vr(ho.current),
            Vr(un.current),
            sa(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[on] = t,
                (s = r.nodeValue !== n) && (e = gt,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        ia(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && ia(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                s && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[on] = t,
                t.stateNode = r
        }
        return We(t),
        null;
    case 13:
        if (ge(we),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (ve && mt !== null && t.mode & 1 && !(t.flags & 128))
                zv(),
                Ji(),
                t.flags |= 98560,
                s = !1;
            else if (s = sa(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!s)
                        throw Error(A(318));
                    if (s = t.memoizedState,
                    s = s !== null ? s.dehydrated : null,
                    !s)
                        throw Error(A(317));
                    s[on] = t
                } else
                    Ji(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                We(t),
                s = !1
            } else
                Kt !== null && (id(Kt),
                Kt = null),
                s = !0;
            if (!s)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || we.current & 1 ? Oe === 0 && (Oe = 3) : Vf())),
        t.updateQueue !== null && (t.flags |= 4),
        We(t),
        null);
    case 4:
        return ts(),
        Yc(e, t),
        e === null && lo(t.stateNode.containerInfo),
        We(t),
        null;
    case 10:
        return Sf(t.type._context),
        We(t),
        null;
    case 17:
        return ut(t.type) && Ya(),
        We(t),
        null;
    case 19:
        if (ge(we),
        s = t.memoizedState,
        s === null)
            return We(t),
            null;
        if (r = (t.flags & 128) !== 0,
        o = s.rendering,
        o === null)
            if (r)
                Rs(s, !1);
            else {
                if (Oe !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (o = rl(e),
                        o !== null) {
                            for (t.flags |= 128,
                            Rs(s, !1),
                            r = o.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                s = n,
                                e = r,
                                s.flags &= 14680066,
                                o = s.alternate,
                                o === null ? (s.childLanes = 0,
                                s.lanes = e,
                                s.child = null,
                                s.subtreeFlags = 0,
                                s.memoizedProps = null,
                                s.memoizedState = null,
                                s.updateQueue = null,
                                s.dependencies = null,
                                s.stateNode = null) : (s.childLanes = o.childLanes,
                                s.lanes = o.lanes,
                                s.child = o.child,
                                s.subtreeFlags = 0,
                                s.deletions = null,
                                s.memoizedProps = o.memoizedProps,
                                s.memoizedState = o.memoizedState,
                                s.updateQueue = o.updateQueue,
                                s.type = o.type,
                                e = o.dependencies,
                                s.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return fe(we, we.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                s.tail !== null && Pe() > rs && (t.flags |= 128,
                r = !0,
                Rs(s, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = rl(o),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    Rs(s, !0),
                    s.tail === null && s.tailMode === "hidden" && !o.alternate && !ve)
                        return We(t),
                        null
                } else
                    2 * Pe() - s.renderingStartTime > rs && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    Rs(s, !1),
                    t.lanes = 4194304);
            s.isBackwards ? (o.sibling = t.child,
            t.child = o) : (n = s.last,
            n !== null ? n.sibling = o : t.child = o,
            s.last = o)
        }
        return s.tail !== null ? (t = s.tail,
        s.rendering = t,
        s.tail = t.sibling,
        s.renderingStartTime = Pe(),
        t.sibling = null,
        n = we.current,
        fe(we, r ? n & 1 | 2 : n & 1),
        t) : (We(t),
        null);
    case 22:
    case 23:
        return If(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? ht & 1073741824 && (We(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : We(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(A(156, t.tag))
}
function SC(e, t) {
    switch (yf(t),
    t.tag) {
    case 1:
        return ut(t.type) && Ya(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return ts(),
        ge(lt),
        ge(Ge),
        Ef(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return Tf(t),
        null;
    case 13:
        if (ge(we),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(A(340));
            Ji()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return ge(we),
        null;
    case 4:
        return ts(),
        null;
    case 10:
        return Sf(t.type._context),
        null;
    case 22:
    case 23:
        return If(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var la = !1
  , Ke = !1
  , bC = typeof WeakSet == "function" ? WeakSet : Set
  , F = null;
function Ei(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                Ee(e, t, r)
            }
        else
            n.current = null
}
function Xc(e, t, n) {
    try {
        n()
    } catch (r) {
        Ee(e, t, r)
    }
}
var Hp = !1;
function CC(e, t) {
    if (Oc = Ka,
    e = Pv(),
    mf(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var i = r.anchorOffset
                      , s = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        s.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var o = 0
                      , a = -1
                      , l = -1
                      , u = 0
                      , c = 0
                      , d = e
                      , f = null;
                    t: for (; ; ) {
                        for (var h; d !== n || i !== 0 && d.nodeType !== 3 || (a = o + i),
                        d !== s || r !== 0 && d.nodeType !== 3 || (l = o + r),
                        d.nodeType === 3 && (o += d.nodeValue.length),
                        (h = d.firstChild) !== null; )
                            f = d,
                            d = h;
                        for (; ; ) {
                            if (d === e)
                                break t;
                            if (f === n && ++u === i && (a = o),
                            f === s && ++c === r && (l = o),
                            (h = d.nextSibling) !== null)
                                break;
                            d = f,
                            f = d.parentNode
                        }
                        d = h
                    }
                    n = a === -1 || l === -1 ? null : {
                        start: a,
                        end: l
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (Dc = {
        focusedElem: e,
        selectionRange: n
    },
    Ka = !1,
    F = t; F !== null; )
        if (t = F,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            F = e;
        else
            for (; F !== null; ) {
                t = F;
                try {
                    var v = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (v !== null) {
                                var g = v.memoizedProps
                                  , x = v.memoizedState
                                  , m = t.stateNode
                                  , p = m.getSnapshotBeforeUpdate(t.elementType === t.type ? g : $t(t.type, g), x);
                                m.__reactInternalSnapshotBeforeUpdate = p
                            }
                            break;
                        case 3:
                            var y = t.stateNode.containerInfo;
                            y.nodeType === 1 ? y.textContent = "" : y.nodeType === 9 && y.documentElement && y.removeChild(y.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(A(163))
                        }
                } catch (b) {
                    Ee(t, t.return, b)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    F = e;
                    break
                }
                F = t.return
            }
    return v = Hp,
    Hp = !1,
    v
}
function Ks(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var i = r = r.next;
        do {
            if ((i.tag & e) === e) {
                var s = i.destroy;
                i.destroy = void 0,
                s !== void 0 && Xc(t, n, s)
            }
            i = i.next
        } while (i !== r)
    }
}
function zl(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function qc(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function C0(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    C0(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[on],
    delete t[co],
    delete t[Vc],
    delete t[sC],
    delete t[oC])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function k0(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function Kp(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || k0(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function Jc(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = Qa));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (Jc(e, t, n),
        e = e.sibling; e !== null; )
            Jc(e, t, n),
            e = e.sibling
}
function ed(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (ed(e, t, n),
        e = e.sibling; e !== null; )
            ed(e, t, n),
            e = e.sibling
}
var Ie = null
  , Ht = !1;
function Fn(e, t, n) {
    for (n = n.child; n !== null; )
        T0(e, t, n),
        n = n.sibling
}
function T0(e, t, n) {
    if (ln && typeof ln.onCommitFiberUnmount == "function")
        try {
            ln.onCommitFiberUnmount(Ml, n)
        } catch {}
    switch (n.tag) {
    case 5:
        Ke || Ei(n, t);
    case 6:
        var r = Ie
          , i = Ht;
        Ie = null,
        Fn(e, t, n),
        Ie = r,
        Ht = i,
        Ie !== null && (Ht ? (e = Ie,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ie.removeChild(n.stateNode));
        break;
    case 18:
        Ie !== null && (Ht ? (e = Ie,
        n = n.stateNode,
        e.nodeType === 8 ? Mu(e.parentNode, n) : e.nodeType === 1 && Mu(e, n),
        so(e)) : Mu(Ie, n.stateNode));
        break;
    case 4:
        r = Ie,
        i = Ht,
        Ie = n.stateNode.containerInfo,
        Ht = !0,
        Fn(e, t, n),
        Ie = r,
        Ht = i;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!Ke && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            i = r = r.next;
            do {
                var s = i
                  , o = s.destroy;
                s = s.tag,
                o !== void 0 && (s & 2 || s & 4) && Xc(n, t, o),
                i = i.next
            } while (i !== r)
        }
        Fn(e, t, n);
        break;
    case 1:
        if (!Ke && (Ei(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (a) {
                Ee(n, t, a)
            }
        Fn(e, t, n);
        break;
    case 21:
        Fn(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (Ke = (r = Ke) || n.memoizedState !== null,
        Fn(e, t, n),
        Ke = r) : Fn(e, t, n);
        break;
    default:
        Fn(e, t, n)
    }
}
function Zp(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new bC),
        t.forEach(function(r) {
            var i = MC.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(i, i))
        })
    }
}
function It(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            try {
                var s = e
                  , o = t
                  , a = o;
                e: for (; a !== null; ) {
                    switch (a.tag) {
                    case 5:
                        Ie = a.stateNode,
                        Ht = !1;
                        break e;
                    case 3:
                        Ie = a.stateNode.containerInfo,
                        Ht = !0;
                        break e;
                    case 4:
                        Ie = a.stateNode.containerInfo,
                        Ht = !0;
                        break e
                    }
                    a = a.return
                }
                if (Ie === null)
                    throw Error(A(160));
                T0(s, o, i),
                Ie = null,
                Ht = !1;
                var l = i.alternate;
                l !== null && (l.return = null),
                i.return = null
            } catch (u) {
                Ee(i, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            E0(t, e),
            t = t.sibling
}
function E0(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (It(t, e),
        Jt(e),
        r & 4) {
            try {
                Ks(3, e, e.return),
                zl(3, e)
            } catch (g) {
                Ee(e, e.return, g)
            }
            try {
                Ks(5, e, e.return)
            } catch (g) {
                Ee(e, e.return, g)
            }
        }
        break;
    case 1:
        It(t, e),
        Jt(e),
        r & 512 && n !== null && Ei(n, n.return);
        break;
    case 5:
        if (It(t, e),
        Jt(e),
        r & 512 && n !== null && Ei(n, n.return),
        e.flags & 32) {
            var i = e.stateNode;
            try {
                to(i, "")
            } catch (g) {
                Ee(e, e.return, g)
            }
        }
        if (r & 4 && (i = e.stateNode,
        i != null)) {
            var s = e.memoizedProps
              , o = n !== null ? n.memoizedProps : s
              , a = e.type
              , l = e.updateQueue;
            if (e.updateQueue = null,
            l !== null)
                try {
                    a === "input" && s.type === "radio" && s.name != null && Gy(i, s),
                    kc(a, o);
                    var u = kc(a, s);
                    for (o = 0; o < l.length; o += 2) {
                        var c = l[o]
                          , d = l[o + 1];
                        c === "style" ? Jy(i, d) : c === "dangerouslySetInnerHTML" ? Xy(i, d) : c === "children" ? to(i, d) : tf(i, c, d, u)
                    }
                    switch (a) {
                    case "input":
                        xc(i, s);
                        break;
                    case "textarea":
                        Qy(i, s);
                        break;
                    case "select":
                        var f = i._wrapperState.wasMultiple;
                        i._wrapperState.wasMultiple = !!s.multiple;
                        var h = s.value;
                        h != null ? ji(i, !!s.multiple, h, !1) : f !== !!s.multiple && (s.defaultValue != null ? ji(i, !!s.multiple, s.defaultValue, !0) : ji(i, !!s.multiple, s.multiple ? [] : "", !1))
                    }
                    i[co] = s
                } catch (g) {
                    Ee(e, e.return, g)
                }
        }
        break;
    case 6:
        if (It(t, e),
        Jt(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(A(162));
            i = e.stateNode,
            s = e.memoizedProps;
            try {
                i.nodeValue = s
            } catch (g) {
                Ee(e, e.return, g)
            }
        }
        break;
    case 3:
        if (It(t, e),
        Jt(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                so(t.containerInfo)
            } catch (g) {
                Ee(e, e.return, g)
            }
        break;
    case 4:
        It(t, e),
        Jt(e);
        break;
    case 13:
        It(t, e),
        Jt(e),
        i = e.child,
        i.flags & 8192 && (s = i.memoizedState !== null,
        i.stateNode.isHidden = s,
        !s || i.alternate !== null && i.alternate.memoizedState !== null || (Df = Pe())),
        r & 4 && Zp(e);
        break;
    case 22:
        if (c = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (Ke = (u = Ke) || c,
        It(t, e),
        Ke = u) : It(t, e),
        Jt(e),
        r & 8192) {
            if (u = e.memoizedState !== null,
            (e.stateNode.isHidden = u) && !c && e.mode & 1)
                for (F = e,
                c = e.child; c !== null; ) {
                    for (d = F = c; F !== null; ) {
                        switch (f = F,
                        h = f.child,
                        f.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            Ks(4, f, f.return);
                            break;
                        case 1:
                            Ei(f, f.return);
                            var v = f.stateNode;
                            if (typeof v.componentWillUnmount == "function") {
                                r = f,
                                n = f.return;
                                try {
                                    t = r,
                                    v.props = t.memoizedProps,
                                    v.state = t.memoizedState,
                                    v.componentWillUnmount()
                                } catch (g) {
                                    Ee(r, n, g)
                                }
                            }
                            break;
                        case 5:
                            Ei(f, f.return);
                            break;
                        case 22:
                            if (f.memoizedState !== null) {
                                Qp(d);
                                continue
                            }
                        }
                        h !== null ? (h.return = f,
                        F = h) : Qp(d)
                    }
                    c = c.sibling
                }
            e: for (c = null,
            d = e; ; ) {
                if (d.tag === 5) {
                    if (c === null) {
                        c = d;
                        try {
                            i = d.stateNode,
                            u ? (s = i.style,
                            typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (a = d.stateNode,
                            l = d.memoizedProps.style,
                            o = l != null && l.hasOwnProperty("display") ? l.display : null,
                            a.style.display = qy("display", o))
                        } catch (g) {
                            Ee(e, e.return, g)
                        }
                    }
                } else if (d.tag === 6) {
                    if (c === null)
                        try {
                            d.stateNode.nodeValue = u ? "" : d.memoizedProps
                        } catch (g) {
                            Ee(e, e.return, g)
                        }
                } else if ((d.tag !== 22 && d.tag !== 23 || d.memoizedState === null || d === e) && d.child !== null) {
                    d.child.return = d,
                    d = d.child;
                    continue
                }
                if (d === e)
                    break e;
                for (; d.sibling === null; ) {
                    if (d.return === null || d.return === e)
                        break e;
                    c === d && (c = null),
                    d = d.return
                }
                c === d && (c = null),
                d.sibling.return = d.return,
                d = d.sibling
            }
        }
        break;
    case 19:
        It(t, e),
        Jt(e),
        r & 4 && Zp(e);
        break;
    case 21:
        break;
    default:
        It(t, e),
        Jt(e)
    }
}
function Jt(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (k0(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(A(160))
            }
            switch (r.tag) {
            case 5:
                var i = r.stateNode;
                r.flags & 32 && (to(i, ""),
                r.flags &= -33);
                var s = Kp(e);
                ed(e, s, i);
                break;
            case 3:
            case 4:
                var o = r.stateNode.containerInfo
                  , a = Kp(e);
                Jc(e, a, o);
                break;
            default:
                throw Error(A(161))
            }
        } catch (l) {
            Ee(e, e.return, l)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function kC(e, t, n) {
    F = e,
    P0(e)
}
function P0(e, t, n) {
    for (var r = (e.mode & 1) !== 0; F !== null; ) {
        var i = F
          , s = i.child;
        if (i.tag === 22 && r) {
            var o = i.memoizedState !== null || la;
            if (!o) {
                var a = i.alternate
                  , l = a !== null && a.memoizedState !== null || Ke;
                a = la;
                var u = Ke;
                if (la = o,
                (Ke = l) && !u)
                    for (F = i; F !== null; )
                        o = F,
                        l = o.child,
                        o.tag === 22 && o.memoizedState !== null ? Yp(i) : l !== null ? (l.return = o,
                        F = l) : Yp(i);
                for (; s !== null; )
                    F = s,
                    P0(s),
                    s = s.sibling;
                F = i,
                la = a,
                Ke = u
            }
            Gp(e)
        } else
            i.subtreeFlags & 8772 && s !== null ? (s.return = i,
            F = s) : Gp(e)
    }
}
function Gp(e) {
    for (; F !== null; ) {
        var t = F;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Ke || zl(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !Ke)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var i = t.elementType === t.type ? n.memoizedProps : $t(t.type, n.memoizedProps);
                                r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var s = t.updateQueue;
                        s !== null && Mp(t, s, r);
                        break;
                    case 3:
                        var o = t.updateQueue;
                        if (o !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            Mp(t, o, n)
                        }
                        break;
                    case 5:
                        var a = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = a;
                            var l = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                l.autoFocus && n.focus();
                                break;
                            case "img":
                                l.src && (n.src = l.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var u = t.alternate;
                            if (u !== null) {
                                var c = u.memoizedState;
                                if (c !== null) {
                                    var d = c.dehydrated;
                                    d !== null && so(d)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(A(163))
                    }
                Ke || t.flags & 512 && qc(t)
            } catch (f) {
                Ee(t, t.return, f)
            }
        }
        if (t === e) {
            F = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            F = n;
            break
        }
        F = t.return
    }
}
function Qp(e) {
    for (; F !== null; ) {
        var t = F;
        if (t === e) {
            F = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            F = n;
            break
        }
        F = t.return
    }
}
function Yp(e) {
    for (; F !== null; ) {
        var t = F;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    zl(4, t)
                } catch (l) {
                    Ee(t, n, l)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var i = t.return;
                    try {
                        r.componentDidMount()
                    } catch (l) {
                        Ee(t, i, l)
                    }
                }
                var s = t.return;
                try {
                    qc(t)
                } catch (l) {
                    Ee(t, s, l)
                }
                break;
            case 5:
                var o = t.return;
                try {
                    qc(t)
                } catch (l) {
                    Ee(t, o, l)
                }
            }
        } catch (l) {
            Ee(t, t.return, l)
        }
        if (t === e) {
            F = null;
            break
        }
        var a = t.sibling;
        if (a !== null) {
            a.return = t.return,
            F = a;
            break
        }
        F = t.return
    }
}
var TC = Math.ceil
  , ol = Mn.ReactCurrentDispatcher
  , jf = Mn.ReactCurrentOwner
  , _t = Mn.ReactCurrentBatchConfig
  , se = 0
  , Le = null
  , Ae = null
  , Fe = 0
  , ht = 0
  , Pi = Er(0)
  , Oe = 0
  , yo = null
  , Jr = 0
  , $l = 0
  , Of = 0
  , Zs = null
  , ot = null
  , Df = 0
  , rs = 1 / 0
  , vn = null
  , al = !1
  , td = null
  , dr = null
  , ua = !1
  , nr = null
  , ll = 0
  , Gs = 0
  , nd = null
  , Ra = -1
  , Aa = 0;
function nt() {
    return se & 6 ? Pe() : Ra !== -1 ? Ra : Ra = Pe()
}
function fr(e) {
    return e.mode & 1 ? se & 2 && Fe !== 0 ? Fe & -Fe : lC.transition !== null ? (Aa === 0 && (Aa = dv()),
    Aa) : (e = ce,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : vv(e.type)),
    e) : 1
}
function Gt(e, t, n, r) {
    if (50 < Gs)
        throw Gs = 0,
        nd = null,
        Error(A(185));
    jo(e, n, r),
    (!(se & 2) || e !== Le) && (e === Le && (!(se & 2) && ($l |= n),
    Oe === 4 && Qn(e, Fe)),
    ct(e, r),
    n === 1 && se === 0 && !(t.mode & 1) && (rs = Pe() + 500,
    Il && Pr()))
}
function ct(e, t) {
    var n = e.callbackNode;
    lb(e, t);
    var r = Ha(e, e === Le ? Fe : 0);
    if (r === 0)
        n !== null && sp(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && sp(n),
        t === 1)
            e.tag === 0 ? aC(Xp.bind(null, e)) : Iv(Xp.bind(null, e)),
            rC(function() {
                !(se & 6) && Pr()
            }),
            n = null;
        else {
            switch (fv(r)) {
            case 1:
                n = af;
                break;
            case 4:
                n = uv;
                break;
            case 16:
                n = Wa;
                break;
            case 536870912:
                n = cv;
                break;
            default:
                n = Wa
            }
            n = D0(n, _0.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function _0(e, t) {
    if (Ra = -1,
    Aa = 0,
    se & 6)
        throw Error(A(327));
    var n = e.callbackNode;
    if (Vi() && e.callbackNode !== n)
        return null;
    var r = Ha(e, e === Le ? Fe : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = ul(e, r);
    else {
        t = r;
        var i = se;
        se |= 2;
        var s = A0();
        (Le !== e || Fe !== t) && (vn = null,
        rs = Pe() + 500,
        Zr(e, t));
        do
            try {
                _C();
                break
            } catch (a) {
                R0(e, a)
            }
        while (!0);
        wf(),
        ol.current = s,
        se = i,
        Ae !== null ? t = 0 : (Le = null,
        Fe = 0,
        t = Oe)
    }
    if (t !== 0) {
        if (t === 2 && (i = Rc(e),
        i !== 0 && (r = i,
        t = rd(e, i))),
        t === 1)
            throw n = yo,
            Zr(e, 0),
            Qn(e, r),
            ct(e, Pe()),
            n;
        if (t === 6)
            Qn(e, r);
        else {
            if (i = e.current.alternate,
            !(r & 30) && !EC(i) && (t = ul(e, r),
            t === 2 && (s = Rc(e),
            s !== 0 && (r = s,
            t = rd(e, s))),
            t === 1))
                throw n = yo,
                Zr(e, 0),
                Qn(e, r),
                ct(e, Pe()),
                n;
            switch (e.finishedWork = i,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(A(345));
            case 2:
                Or(e, ot, vn);
                break;
            case 3:
                if (Qn(e, r),
                (r & 130023424) === r && (t = Df + 500 - Pe(),
                10 < t)) {
                    if (Ha(e, 0) !== 0)
                        break;
                    if (i = e.suspendedLanes,
                    (i & r) !== r) {
                        nt(),
                        e.pingedLanes |= e.suspendedLanes & i;
                        break
                    }
                    e.timeoutHandle = Ic(Or.bind(null, e, ot, vn), t);
                    break
                }
                Or(e, ot, vn);
                break;
            case 4:
                if (Qn(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                i = -1; 0 < r; ) {
                    var o = 31 - Zt(r);
                    s = 1 << o,
                    o = t[o],
                    o > i && (i = o),
                    r &= ~s
                }
                if (r = i,
                r = Pe() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * TC(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = Ic(Or.bind(null, e, ot, vn), r);
                    break
                }
                Or(e, ot, vn);
                break;
            case 5:
                Or(e, ot, vn);
                break;
            default:
                throw Error(A(329))
            }
        }
    }
    return ct(e, Pe()),
    e.callbackNode === n ? _0.bind(null, e) : null
}
function rd(e, t) {
    var n = Zs;
    return e.current.memoizedState.isDehydrated && (Zr(e, t).flags |= 256),
    e = ul(e, t),
    e !== 2 && (t = ot,
    ot = n,
    t !== null && id(t)),
    e
}
function id(e) {
    ot === null ? ot = e : ot.push.apply(ot, e)
}
function EC(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var i = n[r]
                      , s = i.getSnapshot;
                    i = i.value;
                    try {
                        if (!Qt(s(), i))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function Qn(e, t) {
    for (t &= ~Of,
    t &= ~$l,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - Zt(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function Xp(e) {
    if (se & 6)
        throw Error(A(327));
    Vi();
    var t = Ha(e, 0);
    if (!(t & 1))
        return ct(e, Pe()),
        null;
    var n = ul(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = Rc(e);
        r !== 0 && (t = r,
        n = rd(e, r))
    }
    if (n === 1)
        throw n = yo,
        Zr(e, 0),
        Qn(e, t),
        ct(e, Pe()),
        n;
    if (n === 6)
        throw Error(A(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    Or(e, ot, vn),
    ct(e, Pe()),
    null
}
function Lf(e, t) {
    var n = se;
    se |= 1;
    try {
        return e(t)
    } finally {
        se = n,
        se === 0 && (rs = Pe() + 500,
        Il && Pr())
    }
}
function ei(e) {
    nr !== null && nr.tag === 0 && !(se & 6) && Vi();
    var t = se;
    se |= 1;
    var n = _t.transition
      , r = ce;
    try {
        if (_t.transition = null,
        ce = 1,
        e)
            return e()
    } finally {
        ce = r,
        _t.transition = n,
        se = t,
        !(se & 6) && Pr()
    }
}
function If() {
    ht = Pi.current,
    ge(Pi)
}
function Zr(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    nC(n)),
    Ae !== null)
        for (n = Ae.return; n !== null; ) {
            var r = n;
            switch (yf(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && Ya();
                break;
            case 3:
                ts(),
                ge(lt),
                ge(Ge),
                Ef();
                break;
            case 5:
                Tf(r);
                break;
            case 4:
                ts();
                break;
            case 13:
                ge(we);
                break;
            case 19:
                ge(we);
                break;
            case 10:
                Sf(r.type._context);
                break;
            case 22:
            case 23:
                If()
            }
            n = n.return
        }
    if (Le = e,
    Ae = e = hr(e.current, null),
    Fe = ht = t,
    Oe = 0,
    yo = null,
    Of = $l = Jr = 0,
    ot = Zs = null,
    Ir !== null) {
        for (t = 0; t < Ir.length; t++)
            if (n = Ir[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var i = r.next
                  , s = n.pending;
                if (s !== null) {
                    var o = s.next;
                    s.next = i,
                    r.next = o
                }
                n.pending = r
            }
        Ir = null
    }
    return e
}
function R0(e, t) {
    do {
        var n = Ae;
        try {
            if (wf(),
            Ea.current = sl,
            il) {
                for (var r = be.memoizedState; r !== null; ) {
                    var i = r.queue;
                    i !== null && (i.pending = null),
                    r = r.next
                }
                il = !1
            }
            if (qr = 0,
            De = Me = be = null,
            Hs = !1,
            po = 0,
            jf.current = null,
            n === null || n.return === null) {
                Oe = 1,
                yo = t,
                Ae = null;
                break
            }
            e: {
                var s = e
                  , o = n.return
                  , a = n
                  , l = t;
                if (t = Fe,
                a.flags |= 32768,
                l !== null && typeof l == "object" && typeof l.then == "function") {
                    var u = l
                      , c = a
                      , d = c.tag;
                    if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
                        var f = c.alternate;
                        f ? (c.updateQueue = f.updateQueue,
                        c.memoizedState = f.memoizedState,
                        c.lanes = f.lanes) : (c.updateQueue = null,
                        c.memoizedState = null)
                    }
                    var h = Vp(o);
                    if (h !== null) {
                        h.flags &= -257,
                        Fp(h, o, a, s, t),
                        h.mode & 1 && Ip(s, u, t),
                        t = h,
                        l = u;
                        var v = t.updateQueue;
                        if (v === null) {
                            var g = new Set;
                            g.add(l),
                            t.updateQueue = g
                        } else
                            v.add(l);
                        break e
                    } else {
                        if (!(t & 1)) {
                            Ip(s, u, t),
                            Vf();
                            break e
                        }
                        l = Error(A(426))
                    }
                } else if (ve && a.mode & 1) {
                    var x = Vp(o);
                    if (x !== null) {
                        !(x.flags & 65536) && (x.flags |= 256),
                        Fp(x, o, a, s, t),
                        vf(ns(l, a));
                        break e
                    }
                }
                s = l = ns(l, a),
                Oe !== 4 && (Oe = 2),
                Zs === null ? Zs = [s] : Zs.push(s),
                s = o;
                do {
                    switch (s.tag) {
                    case 3:
                        s.flags |= 65536,
                        t &= -t,
                        s.lanes |= t;
                        var m = f0(s, l, t);
                        Np(s, m);
                        break e;
                    case 1:
                        a = l;
                        var p = s.type
                          , y = s.stateNode;
                        if (!(s.flags & 128) && (typeof p.getDerivedStateFromError == "function" || y !== null && typeof y.componentDidCatch == "function" && (dr === null || !dr.has(y)))) {
                            s.flags |= 65536,
                            t &= -t,
                            s.lanes |= t;
                            var b = h0(s, a, t);
                            Np(s, b);
                            break e
                        }
                    }
                    s = s.return
                } while (s !== null)
            }
            M0(n)
        } catch (C) {
            t = C,
            Ae === n && n !== null && (Ae = n = n.return);
            continue
        }
        break
    } while (!0)
}
function A0() {
    var e = ol.current;
    return ol.current = sl,
    e === null ? sl : e
}
function Vf() {
    (Oe === 0 || Oe === 3 || Oe === 2) && (Oe = 4),
    Le === null || !(Jr & 268435455) && !($l & 268435455) || Qn(Le, Fe)
}
function ul(e, t) {
    var n = se;
    se |= 2;
    var r = A0();
    (Le !== e || Fe !== t) && (vn = null,
    Zr(e, t));
    do
        try {
            PC();
            break
        } catch (i) {
            R0(e, i)
        }
    while (!0);
    if (wf(),
    se = n,
    ol.current = r,
    Ae !== null)
        throw Error(A(261));
    return Le = null,
    Fe = 0,
    Oe
}
function PC() {
    for (; Ae !== null; )
        N0(Ae)
}
function _C() {
    for (; Ae !== null && !JS(); )
        N0(Ae)
}
function N0(e) {
    var t = O0(e.alternate, e, ht);
    e.memoizedProps = e.pendingProps,
    t === null ? M0(e) : Ae = t,
    jf.current = null
}
function M0(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = SC(n, t),
            n !== null) {
                n.flags &= 32767,
                Ae = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                Oe = 6,
                Ae = null;
                return
            }
        } else if (n = wC(n, t, ht),
        n !== null) {
            Ae = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            Ae = t;
            return
        }
        Ae = t = e
    } while (t !== null);
    Oe === 0 && (Oe = 5)
}
function Or(e, t, n) {
    var r = ce
      , i = _t.transition;
    try {
        _t.transition = null,
        ce = 1,
        RC(e, t, n, r)
    } finally {
        _t.transition = i,
        ce = r
    }
    return null
}
function RC(e, t, n, r) {
    do
        Vi();
    while (nr !== null);
    if (se & 6)
        throw Error(A(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(A(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var s = n.lanes | n.childLanes;
    if (ub(e, s),
    e === Le && (Ae = Le = null,
    Fe = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || ua || (ua = !0,
    D0(Wa, function() {
        return Vi(),
        null
    })),
    s = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || s) {
        s = _t.transition,
        _t.transition = null;
        var o = ce;
        ce = 1;
        var a = se;
        se |= 4,
        jf.current = null,
        CC(e, n),
        E0(n, e),
        Qb(Dc),
        Ka = !!Oc,
        Dc = Oc = null,
        e.current = n,
        kC(n),
        eb(),
        se = a,
        ce = o,
        _t.transition = s
    } else
        e.current = n;
    if (ua && (ua = !1,
    nr = e,
    ll = i),
    s = e.pendingLanes,
    s === 0 && (dr = null),
    rb(n.stateNode),
    ct(e, Pe()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            i = t[n],
            r(i.value, {
                componentStack: i.stack,
                digest: i.digest
            });
    if (al)
        throw al = !1,
        e = td,
        td = null,
        e;
    return ll & 1 && e.tag !== 0 && Vi(),
    s = e.pendingLanes,
    s & 1 ? e === nd ? Gs++ : (Gs = 0,
    nd = e) : Gs = 0,
    Pr(),
    null
}
function Vi() {
    if (nr !== null) {
        var e = fv(ll)
          , t = _t.transition
          , n = ce;
        try {
            if (_t.transition = null,
            ce = 16 > e ? 16 : e,
            nr === null)
                var r = !1;
            else {
                if (e = nr,
                nr = null,
                ll = 0,
                se & 6)
                    throw Error(A(331));
                var i = se;
                for (se |= 4,
                F = e.current; F !== null; ) {
                    var s = F
                      , o = s.child;
                    if (F.flags & 16) {
                        var a = s.deletions;
                        if (a !== null) {
                            for (var l = 0; l < a.length; l++) {
                                var u = a[l];
                                for (F = u; F !== null; ) {
                                    var c = F;
                                    switch (c.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Ks(8, c, s)
                                    }
                                    var d = c.child;
                                    if (d !== null)
                                        d.return = c,
                                        F = d;
                                    else
                                        for (; F !== null; ) {
                                            c = F;
                                            var f = c.sibling
                                              , h = c.return;
                                            if (C0(c),
                                            c === u) {
                                                F = null;
                                                break
                                            }
                                            if (f !== null) {
                                                f.return = h,
                                                F = f;
                                                break
                                            }
                                            F = h
                                        }
                                }
                            }
                            var v = s.alternate;
                            if (v !== null) {
                                var g = v.child;
                                if (g !== null) {
                                    v.child = null;
                                    do {
                                        var x = g.sibling;
                                        g.sibling = null,
                                        g = x
                                    } while (g !== null)
                                }
                            }
                            F = s
                        }
                    }
                    if (s.subtreeFlags & 2064 && o !== null)
                        o.return = s,
                        F = o;
                    else
                        e: for (; F !== null; ) {
                            if (s = F,
                            s.flags & 2048)
                                switch (s.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Ks(9, s, s.return)
                                }
                            var m = s.sibling;
                            if (m !== null) {
                                m.return = s.return,
                                F = m;
                                break e
                            }
                            F = s.return
                        }
                }
                var p = e.current;
                for (F = p; F !== null; ) {
                    o = F;
                    var y = o.child;
                    if (o.subtreeFlags & 2064 && y !== null)
                        y.return = o,
                        F = y;
                    else
                        e: for (o = p; F !== null; ) {
                            if (a = F,
                            a.flags & 2048)
                                try {
                                    switch (a.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        zl(9, a)
                                    }
                                } catch (C) {
                                    Ee(a, a.return, C)
                                }
                            if (a === o) {
                                F = null;
                                break e
                            }
                            var b = a.sibling;
                            if (b !== null) {
                                b.return = a.return,
                                F = b;
                                break e
                            }
                            F = a.return
                        }
                }
                if (se = i,
                Pr(),
                ln && typeof ln.onPostCommitFiberRoot == "function")
                    try {
                        ln.onPostCommitFiberRoot(Ml, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            ce = n,
            _t.transition = t
        }
    }
    return !1
}
function qp(e, t, n) {
    t = ns(n, t),
    t = f0(e, t, 1),
    e = cr(e, t, 1),
    t = nt(),
    e !== null && (jo(e, 1, t),
    ct(e, t))
}
function Ee(e, t, n) {
    if (e.tag === 3)
        qp(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                qp(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (dr === null || !dr.has(r))) {
                    e = ns(n, e),
                    e = h0(t, e, 1),
                    t = cr(t, e, 1),
                    e = nt(),
                    t !== null && (jo(t, 1, e),
                    ct(t, e));
                    break
                }
            }
            t = t.return
        }
}
function AC(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = nt(),
    e.pingedLanes |= e.suspendedLanes & n,
    Le === e && (Fe & n) === n && (Oe === 4 || Oe === 3 && (Fe & 130023424) === Fe && 500 > Pe() - Df ? Zr(e, 0) : Of |= n),
    ct(e, t)
}
function j0(e, t) {
    t === 0 && (e.mode & 1 ? (t = Jo,
    Jo <<= 1,
    !(Jo & 130023424) && (Jo = 4194304)) : t = 1);
    var n = nt();
    e = En(e, t),
    e !== null && (jo(e, t, n),
    ct(e, n))
}
function NC(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    j0(e, n)
}
function MC(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , i = e.memoizedState;
        i !== null && (n = i.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(A(314))
    }
    r !== null && r.delete(t),
    j0(e, n)
}
var O0;
O0 = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || lt.current)
            at = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return at = !1,
                xC(e, t, n);
            at = !!(e.flags & 131072)
        }
    else
        at = !1,
        ve && t.flags & 1048576 && Vv(t, Ja, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        _a(e, t),
        e = t.pendingProps;
        var i = qi(t, Ge.current);
        Ii(t, n),
        i = _f(null, t, r, e, i, n);
        var s = Rf();
        return t.flags |= 1,
        typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        ut(r) ? (s = !0,
        Xa(t)) : s = !1,
        t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null,
        Cf(t),
        i.updater = Fl,
        t.stateNode = i,
        i._reactInternals = t,
        Wc(t, r, e, n),
        t = Zc(null, t, r, !0, s, n)) : (t.tag = 0,
        ve && s && gf(t),
        Xe(null, t, i, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch (_a(e, t),
            e = t.pendingProps,
            i = r._init,
            r = i(r._payload),
            t.type = r,
            i = t.tag = OC(r),
            e = $t(r, e),
            i) {
            case 0:
                t = Kc(null, t, r, e, n);
                break e;
            case 1:
                t = Bp(null, t, r, e, n);
                break e;
            case 11:
                t = zp(null, t, r, e, n);
                break e;
            case 14:
                t = $p(null, t, r, $t(r.type, e), n);
                break e
            }
            throw Error(A(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : $t(r, i),
        Kc(e, t, r, i, n);
    case 1:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : $t(r, i),
        Bp(e, t, r, i, n);
    case 3:
        e: {
            if (y0(t),
            e === null)
                throw Error(A(387));
            r = t.pendingProps,
            s = t.memoizedState,
            i = s.element,
            Wv(e, t),
            nl(t, r, null, n);
            var o = t.memoizedState;
            if (r = o.element,
            s.isDehydrated)
                if (s = {
                    element: r,
                    isDehydrated: !1,
                    cache: o.cache,
                    pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                    transitions: o.transitions
                },
                t.updateQueue.baseState = s,
                t.memoizedState = s,
                t.flags & 256) {
                    i = ns(Error(A(423)), t),
                    t = Up(e, t, r, n, i);
                    break e
                } else if (r !== i) {
                    i = ns(Error(A(424)), t),
                    t = Up(e, t, r, n, i);
                    break e
                } else
                    for (mt = ur(t.stateNode.containerInfo.firstChild),
                    gt = t,
                    ve = !0,
                    Kt = null,
                    n = Bv(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (Ji(),
                r === i) {
                    t = Pn(e, t, n);
                    break e
                }
                Xe(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return Hv(t),
        e === null && $c(t),
        r = t.type,
        i = t.pendingProps,
        s = e !== null ? e.memoizedProps : null,
        o = i.children,
        Lc(r, i) ? o = null : s !== null && Lc(r, s) && (t.flags |= 32),
        g0(e, t),
        Xe(e, t, o, n),
        t.child;
    case 6:
        return e === null && $c(t),
        null;
    case 13:
        return v0(e, t, n);
    case 4:
        return kf(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = es(t, null, r, n) : Xe(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : $t(r, i),
        zp(e, t, r, i, n);
    case 7:
        return Xe(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return Xe(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return Xe(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            i = t.pendingProps,
            s = t.memoizedProps,
            o = i.value,
            fe(el, r._currentValue),
            r._currentValue = o,
            s !== null)
                if (Qt(s.value, o)) {
                    if (s.children === i.children && !lt.current) {
                        t = Pn(e, t, n);
                        break e
                    }
                } else
                    for (s = t.child,
                    s !== null && (s.return = t); s !== null; ) {
                        var a = s.dependencies;
                        if (a !== null) {
                            o = s.child;
                            for (var l = a.firstContext; l !== null; ) {
                                if (l.context === r) {
                                    if (s.tag === 1) {
                                        l = Cn(-1, n & -n),
                                        l.tag = 2;
                                        var u = s.updateQueue;
                                        if (u !== null) {
                                            u = u.shared;
                                            var c = u.pending;
                                            c === null ? l.next = l : (l.next = c.next,
                                            c.next = l),
                                            u.pending = l
                                        }
                                    }
                                    s.lanes |= n,
                                    l = s.alternate,
                                    l !== null && (l.lanes |= n),
                                    Bc(s.return, n, t),
                                    a.lanes |= n;
                                    break
                                }
                                l = l.next
                            }
                        } else if (s.tag === 10)
                            o = s.type === t.type ? null : s.child;
                        else if (s.tag === 18) {
                            if (o = s.return,
                            o === null)
                                throw Error(A(341));
                            o.lanes |= n,
                            a = o.alternate,
                            a !== null && (a.lanes |= n),
                            Bc(o, n, t),
                            o = s.sibling
                        } else
                            o = s.child;
                        if (o !== null)
                            o.return = s;
                        else
                            for (o = s; o !== null; ) {
                                if (o === t) {
                                    o = null;
                                    break
                                }
                                if (s = o.sibling,
                                s !== null) {
                                    s.return = o.return,
                                    o = s;
                                    break
                                }
                                o = o.return
                            }
                        s = o
                    }
            Xe(e, t, i.children, n),
            t = t.child
        }
        return t;
    case 9:
        return i = t.type,
        r = t.pendingProps.children,
        Ii(t, n),
        i = Nt(i),
        r = r(i),
        t.flags |= 1,
        Xe(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        i = $t(r, t.pendingProps),
        i = $t(r.type, i),
        $p(e, t, r, i, n);
    case 15:
        return p0(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : $t(r, i),
        _a(e, t),
        t.tag = 1,
        ut(r) ? (e = !0,
        Xa(t)) : e = !1,
        Ii(t, n),
        d0(t, r, i),
        Wc(t, r, i, n),
        Zc(null, t, r, !0, e, n);
    case 19:
        return x0(e, t, n);
    case 22:
        return m0(e, t, n)
    }
    throw Error(A(156, t.tag))
}
;
function D0(e, t) {
    return lv(e, t)
}
function jC(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function Et(e, t, n, r) {
    return new jC(e,t,n,r)
}
function Ff(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function OC(e) {
    if (typeof e == "function")
        return Ff(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === rf)
            return 11;
        if (e === sf)
            return 14
    }
    return 2
}
function hr(e, t) {
    var n = e.alternate;
    return n === null ? (n = Et(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function Na(e, t, n, r, i, s) {
    var o = 2;
    if (r = e,
    typeof e == "function")
        Ff(e) && (o = 1);
    else if (typeof e == "string")
        o = 5;
    else
        e: switch (e) {
        case yi:
            return Gr(n.children, i, s, t);
        case nf:
            o = 8,
            i |= 8;
            break;
        case pc:
            return e = Et(12, n, t, i | 2),
            e.elementType = pc,
            e.lanes = s,
            e;
        case mc:
            return e = Et(13, n, t, i),
            e.elementType = mc,
            e.lanes = s,
            e;
        case gc:
            return e = Et(19, n, t, i),
            e.elementType = gc,
            e.lanes = s,
            e;
        case Hy:
            return Bl(n, i, s, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case Uy:
                    o = 10;
                    break e;
                case Wy:
                    o = 9;
                    break e;
                case rf:
                    o = 11;
                    break e;
                case sf:
                    o = 14;
                    break e;
                case Hn:
                    o = 16,
                    r = null;
                    break e
                }
            throw Error(A(130, e == null ? e : typeof e, ""))
        }
    return t = Et(o, n, t, i),
    t.elementType = e,
    t.type = r,
    t.lanes = s,
    t
}
function Gr(e, t, n, r) {
    return e = Et(7, e, r, t),
    e.lanes = n,
    e
}
function Bl(e, t, n, r) {
    return e = Et(22, e, r, t),
    e.elementType = Hy,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function zu(e, t, n) {
    return e = Et(6, e, null, t),
    e.lanes = n,
    e
}
function $u(e, t, n) {
    return t = Et(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function DC(e, t, n, r, i) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = Su(0),
    this.expirationTimes = Su(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = Su(0),
    this.identifierPrefix = r,
    this.onRecoverableError = i,
    this.mutableSourceEagerHydrationData = null
}
function zf(e, t, n, r, i, s, o, a, l) {
    return e = new DC(e,t,n,a,l),
    t === 1 ? (t = 1,
    s === !0 && (t |= 8)) : t = 0,
    s = Et(3, null, null, t),
    e.current = s,
    s.stateNode = e,
    s.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    Cf(s),
    e
}
function LC(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: gi,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function L0(e) {
    if (!e)
        return gr;
    e = e._reactInternals;
    e: {
        if (ii(e) !== e || e.tag !== 1)
            throw Error(A(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (ut(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(A(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (ut(n))
            return Lv(e, n, t)
    }
    return t
}
function I0(e, t, n, r, i, s, o, a, l) {
    return e = zf(n, r, !0, e, i, s, o, a, l),
    e.context = L0(null),
    n = e.current,
    r = nt(),
    i = fr(n),
    s = Cn(r, i),
    s.callback = t ?? null,
    cr(n, s, i),
    e.current.lanes = i,
    jo(e, i, r),
    ct(e, r),
    e
}
function Ul(e, t, n, r) {
    var i = t.current
      , s = nt()
      , o = fr(i);
    return n = L0(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = Cn(s, o),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = cr(i, t, o),
    e !== null && (Gt(e, i, o, s),
    Ta(e, i, o)),
    o
}
function cl(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function Jp(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function $f(e, t) {
    Jp(e, t),
    (e = e.alternate) && Jp(e, t)
}
function IC() {
    return null
}
var V0 = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function Bf(e) {
    this._internalRoot = e
}
Wl.prototype.render = Bf.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(A(409));
    Ul(e, t, null, null)
}
;
Wl.prototype.unmount = Bf.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        ei(function() {
            Ul(null, e, null, null)
        }),
        t[Tn] = null
    }
}
;
function Wl(e) {
    this._internalRoot = e
}
Wl.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = mv();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < Gn.length && t !== 0 && t < Gn[n].priority; n++)
            ;
        Gn.splice(n, 0, e),
        n === 0 && yv(e)
    }
}
;
function Uf(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function Hl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function em() {}
function VC(e, t, n, r, i) {
    if (i) {
        if (typeof r == "function") {
            var s = r;
            r = function() {
                var u = cl(o);
                s.call(u)
            }
        }
        var o = I0(t, r, e, 0, null, !1, !1, "", em);
        return e._reactRootContainer = o,
        e[Tn] = o.current,
        lo(e.nodeType === 8 ? e.parentNode : e),
        ei(),
        o
    }
    for (; i = e.lastChild; )
        e.removeChild(i);
    if (typeof r == "function") {
        var a = r;
        r = function() {
            var u = cl(l);
            a.call(u)
        }
    }
    var l = zf(e, 0, !1, null, null, !1, !1, "", em);
    return e._reactRootContainer = l,
    e[Tn] = l.current,
    lo(e.nodeType === 8 ? e.parentNode : e),
    ei(function() {
        Ul(t, l, n, r)
    }),
    l
}
function Kl(e, t, n, r, i) {
    var s = n._reactRootContainer;
    if (s) {
        var o = s;
        if (typeof i == "function") {
            var a = i;
            i = function() {
                var l = cl(o);
                a.call(l)
            }
        }
        Ul(t, o, e, i)
    } else
        o = VC(n, t, e, i, r);
    return cl(o)
}
hv = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = Ls(t.pendingLanes);
            n !== 0 && (lf(t, n | 1),
            ct(t, Pe()),
            !(se & 6) && (rs = Pe() + 500,
            Pr()))
        }
        break;
    case 13:
        ei(function() {
            var r = En(e, 1);
            if (r !== null) {
                var i = nt();
                Gt(r, e, 1, i)
            }
        }),
        $f(e, 1)
    }
}
;
uf = function(e) {
    if (e.tag === 13) {
        var t = En(e, 134217728);
        if (t !== null) {
            var n = nt();
            Gt(t, e, 134217728, n)
        }
        $f(e, 134217728)
    }
}
;
pv = function(e) {
    if (e.tag === 13) {
        var t = fr(e)
          , n = En(e, t);
        if (n !== null) {
            var r = nt();
            Gt(n, e, t, r)
        }
        $f(e, t)
    }
}
;
mv = function() {
    return ce
}
;
gv = function(e, t) {
    var n = ce;
    try {
        return ce = e,
        t()
    } finally {
        ce = n
    }
}
;
Ec = function(e, t, n) {
    switch (t) {
    case "input":
        if (xc(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var i = Ll(r);
                    if (!i)
                        throw Error(A(90));
                    Zy(r),
                    xc(r, i)
                }
            }
        }
        break;
    case "textarea":
        Qy(e, n);
        break;
    case "select":
        t = n.value,
        t != null && ji(e, !!n.multiple, t, !1)
    }
}
;
nv = Lf;
rv = ei;
var FC = {
    usingClientEntryPoint: !1,
    Events: [Do, Si, Ll, ev, tv, Lf]
}
  , As = {
    findFiberByHostInstance: Lr,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , zC = {
    bundleType: As.bundleType,
    version: As.version,
    rendererPackageName: As.rendererPackageName,
    rendererConfig: As.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Mn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = ov(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: As.findFiberByHostInstance || IC,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ca = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ca.isDisabled && ca.supportsFiber)
        try {
            Ml = ca.inject(zC),
            ln = ca
        } catch {}
}
wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = FC;
wt.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Uf(t))
        throw Error(A(200));
    return LC(e, t, null, n)
}
;
wt.createRoot = function(e, t) {
    if (!Uf(e))
        throw Error(A(299));
    var n = !1
      , r = ""
      , i = V0;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    t = zf(e, 1, !1, null, null, n, !1, r, i),
    e[Tn] = t.current,
    lo(e.nodeType === 8 ? e.parentNode : e),
    new Bf(t)
}
;
wt.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(A(188)) : (e = Object.keys(e).join(","),
        Error(A(268, e)));
    return e = ov(t),
    e = e === null ? null : e.stateNode,
    e
}
;
wt.flushSync = function(e) {
    return ei(e)
}
;
wt.hydrate = function(e, t, n) {
    if (!Hl(t))
        throw Error(A(200));
    return Kl(null, e, t, !0, n)
}
;
wt.hydrateRoot = function(e, t, n) {
    if (!Uf(e))
        throw Error(A(405));
    var r = n != null && n.hydratedSources || null
      , i = !1
      , s = ""
      , o = V0;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0),
    n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    t = I0(t, null, e, 1, n ?? null, i, !1, s, o),
    e[Tn] = t.current,
    lo(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            i = n._getVersion,
            i = i(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i);
    return new Wl(t)
}
;
wt.render = function(e, t, n) {
    if (!Hl(t))
        throw Error(A(200));
    return Kl(null, e, t, !1, n)
}
;
wt.unmountComponentAtNode = function(e) {
    if (!Hl(e))
        throw Error(A(40));
    return e._reactRootContainer ? (ei(function() {
        Kl(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[Tn] = null
        })
    }),
    !0) : !1
}
;
wt.unstable_batchedUpdates = Lf;
wt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Hl(n))
        throw Error(A(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(A(38));
    return Kl(e, t, n, !1, r)
}
;
wt.version = "18.3.1-next-f1338f8080-20240426";
function F0() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(F0)
        } catch (e) {
            console.error(e)
        }
}
F0(),
Fy.exports = wt;
var Io = Fy.exports;
const z0 = Ey(Io);
var $0, tm = Io;
$0 = tm.createRoot,
tm.hydrateRoot;
const $C = 1
  , BC = 1e6;
let Bu = 0;
function UC() {
    return Bu = (Bu + 1) % Number.MAX_SAFE_INTEGER,
    Bu.toString()
}
const Uu = new Map
  , nm = e => {
    if (Uu.has(e))
        return;
    const t = setTimeout( () => {
        Uu.delete(e),
        Qs({
            type: "REMOVE_TOAST",
            toastId: e
        })
    }
    , BC);
    Uu.set(e, t)
}
  , WC = (e, t) => {
    switch (t.type) {
    case "ADD_TOAST":
        return {
            ...e,
            toasts: [t.toast, ...e.toasts].slice(0, $C)
        };
    case "UPDATE_TOAST":
        return {
            ...e,
            toasts: e.toasts.map(n => n.id === t.toast.id ? {
                ...n,
                ...t.toast
            } : n)
        };
    case "DISMISS_TOAST":
        {
            const {toastId: n} = t;
            return n ? nm(n) : e.toasts.forEach(r => {
                nm(r.id)
            }
            ),
            {
                ...e,
                toasts: e.toasts.map(r => r.id === n || n === void 0 ? {
                    ...r,
                    open: !1
                } : r)
            }
        }
    case "REMOVE_TOAST":
        return t.toastId === void 0 ? {
            ...e,
            toasts: []
        } : {
            ...e,
            toasts: e.toasts.filter(n => n.id !== t.toastId)
        }
    }
}
  , Ma = [];
let ja = {
    toasts: []
};
function Qs(e) {
    ja = WC(ja, e),
    Ma.forEach(t => {
        t(ja)
    }
    )
}
function B0({...e}) {
    const t = UC()
      , n = i => Qs({
        type: "UPDATE_TOAST",
        toast: {
            ...i,
            id: t
        }
    })
      , r = () => Qs({
        type: "DISMISS_TOAST",
        toastId: t
    });
    return Qs({
        type: "ADD_TOAST",
        toast: {
            ...e,
            id: t,
            open: !0,
            onOpenChange: i => {
                i || r()
            }
        }
    }),
    {
        id: t,
        dismiss: r,
        update: n
    }
}
function HC() {
    const [e,t] = w.useState(ja);
    return w.useEffect( () => (Ma.push(t),
    () => {
        const n = Ma.indexOf(t);
        n > -1 && Ma.splice(n, 1)
    }
    ), [e]),
    {
        ...e,
        toast: B0,
        dismiss: n => Qs({
            type: "DISMISS_TOAST",
            toastId: n
        })
    }
}
function je(e, t, {checkForDefaultPrevented: n=!0}={}) {
    return function(i) {
        if (e == null || e(i),
        n === !1 || !i.defaultPrevented)
            return t == null ? void 0 : t(i)
    }
}
function rm(e, t) {
    if (typeof e == "function")
        return e(t);
    e != null && (e.current = t)
}
function U0(...e) {
    return t => {
        let n = !1;
        const r = e.map(i => {
            const s = rm(i, t);
            return !n && typeof s == "function" && (n = !0),
            s
        }
        );
        if (n)
            return () => {
                for (let i = 0; i < r.length; i++) {
                    const s = r[i];
                    typeof s == "function" ? s() : rm(e[i], null)
                }
            }
    }
}
function Yt(...e) {
    return w.useCallback(U0(...e), e)
}
function Zl(e, t=[]) {
    let n = [];
    function r(s, o) {
        const a = w.createContext(o)
          , l = n.length;
        n = [...n, o];
        const u = d => {
            var m;
            const {scope: f, children: h, ...v} = d
              , g = ((m = f == null ? void 0 : f[e]) == null ? void 0 : m[l]) || a
              , x = w.useMemo( () => v, Object.values(v));
            return S.jsx(g.Provider, {
                value: x,
                children: h
            })
        }
        ;
        u.displayName = s + "Provider";
        function c(d, f) {
            var g;
            const h = ((g = f == null ? void 0 : f[e]) == null ? void 0 : g[l]) || a
              , v = w.useContext(h);
            if (v)
                return v;
            if (o !== void 0)
                return o;
            throw new Error(`\`${d}\` must be used within \`${s}\``)
        }
        return [u, c]
    }
    const i = () => {
        const s = n.map(o => w.createContext(o));
        return function(a) {
            const l = (a == null ? void 0 : a[e]) || s;
            return w.useMemo( () => ({
                [`__scope${e}`]: {
                    ...a,
                    [e]: l
                }
            }), [a, l])
        }
    }
    ;
    return i.scopeName = e,
    [r, KC(i, ...t)]
}
function KC(...e) {
    const t = e[0];
    if (e.length === 1)
        return t;
    const n = () => {
        const r = e.map(i => ({
            useScope: i(),
            scopeName: i.scopeName
        }));
        return function(s) {
            const o = r.reduce( (a, {useScope: l, scopeName: u}) => {
                const d = l(s)[`__scope${u}`];
                return {
                    ...a,
                    ...d
                }
            }
            , {});
            return w.useMemo( () => ({
                [`__scope${t.scopeName}`]: o
            }), [o])
        }
    }
    ;
    return n.scopeName = t.scopeName,
    n
}
function sd(e) {
    const t = ZC(e)
      , n = w.forwardRef( (r, i) => {
        const {children: s, ...o} = r
          , a = w.Children.toArray(s)
          , l = a.find(QC);
        if (l) {
            const u = l.props.children
              , c = a.map(d => d === l ? w.Children.count(u) > 1 ? w.Children.only(null) : w.isValidElement(u) ? u.props.children : null : d);
            return S.jsx(t, {
                ...o,
                ref: i,
                children: w.isValidElement(u) ? w.cloneElement(u, void 0, c) : null
            })
        }
        return S.jsx(t, {
            ...o,
            ref: i,
            children: s
        })
    }
    );
    return n.displayName = `${e}.Slot`,
    n
}
function ZC(e) {
    const t = w.forwardRef( (n, r) => {
        const {children: i, ...s} = n;
        if (w.isValidElement(i)) {
            const o = XC(i)
              , a = YC(s, i.props);
            return i.type !== w.Fragment && (a.ref = r ? U0(r, o) : o),
            w.cloneElement(i, a)
        }
        return w.Children.count(i) > 1 ? w.Children.only(null) : null
    }
    );
    return t.displayName = `${e}.SlotClone`,
    t
}
var W0 = Symbol("radix.slottable");
function GC(e) {
    const t = ({children: n}) => S.jsx(S.Fragment, {
        children: n
    });
    return t.displayName = `${e}.Slottable`,
    t.__radixId = W0,
    t
}
function QC(e) {
    return w.isValidElement(e) && typeof e.type == "function" && "__radixId"in e.type && e.type.__radixId === W0
}
function YC(e, t) {
    const n = {
        ...t
    };
    for (const r in t) {
        const i = e[r]
          , s = t[r];
        /^on[A-Z]/.test(r) ? i && s ? n[r] = (...a) => {
            const l = s(...a);
            return i(...a),
            l
        }
        : i && (n[r] = i) : r === "style" ? n[r] = {
            ...i,
            ...s
        } : r === "className" && (n[r] = [i, s].filter(Boolean).join(" "))
    }
    return {
        ...e,
        ...n
    }
}
function XC(e) {
    var r, i;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get
      , n = t && "isReactWarning"in t && t.isReactWarning;
    return n ? e.ref : (t = (i = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : i.get,
    n = t && "isReactWarning"in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
function qC(e) {
    const t = e + "CollectionProvider"
      , [n,r] = Zl(t)
      , [i,s] = n(t, {
        collectionRef: {
            current: null
        },
        itemMap: new Map
    })
      , o = g => {
        const {scope: x, children: m} = g
          , p = O.useRef(null)
          , y = O.useRef(new Map).current;
        return S.jsx(i, {
            scope: x,
            itemMap: y,
            collectionRef: p,
            children: m
        })
    }
    ;
    o.displayName = t;
    const a = e + "CollectionSlot"
      , l = sd(a)
      , u = O.forwardRef( (g, x) => {
        const {scope: m, children: p} = g
          , y = s(a, m)
          , b = Yt(x, y.collectionRef);
        return S.jsx(l, {
            ref: b,
            children: p
        })
    }
    );
    u.displayName = a;
    const c = e + "CollectionItemSlot"
      , d = "data-radix-collection-item"
      , f = sd(c)
      , h = O.forwardRef( (g, x) => {
        const {scope: m, children: p, ...y} = g
          , b = O.useRef(null)
          , C = Yt(x, b)
          , k = s(c, m);
        return O.useEffect( () => (k.itemMap.set(b, {
            ref: b,
            ...y
        }),
        () => void k.itemMap.delete(b))),
        S.jsx(f, {
            [d]: "",
            ref: C,
            children: p
        })
    }
    );
    h.displayName = c;
    function v(g) {
        const x = s(e + "CollectionConsumer", g);
        return O.useCallback( () => {
            const p = x.collectionRef.current;
            if (!p)
                return [];
            const y = Array.from(p.querySelectorAll(`[${d}]`));
            return Array.from(x.itemMap.values()).sort( (k, T) => y.indexOf(k.ref.current) - y.indexOf(T.ref.current))
        }
        , [x.collectionRef, x.itemMap])
    }
    return [{
        Provider: o,
        Slot: u,
        ItemSlot: h
    }, v, r]
}
var JC = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"]
  , ft = JC.reduce( (e, t) => {
    const n = sd(`Primitive.${t}`)
      , r = w.forwardRef( (i, s) => {
        const {asChild: o, ...a} = i
          , l = o ? n : t;
        return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        S.jsx(l, {
            ...a,
            ref: s
        })
    }
    );
    return r.displayName = `Primitive.${t}`,
    {
        ...e,
        [t]: r
    }
}
, {});
function H0(e, t) {
    e && Io.flushSync( () => e.dispatchEvent(t))
}
function yr(e) {
    const t = w.useRef(e);
    return w.useEffect( () => {
        t.current = e
    }
    ),
    w.useMemo( () => (...n) => {
        var r;
        return (r = t.current) == null ? void 0 : r.call(t, ...n)
    }
    , [])
}
function ek(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = yr(e);
    w.useEffect( () => {
        const r = i => {
            i.key === "Escape" && n(i)
        }
        ;
        return t.addEventListener("keydown", r, {
            capture: !0
        }),
        () => t.removeEventListener("keydown", r, {
            capture: !0
        })
    }
    , [n, t])
}
var tk = "DismissableLayer", od = "dismissableLayer.update", nk = "dismissableLayer.pointerDownOutside", rk = "dismissableLayer.focusOutside", im, K0 = w.createContext({
    layers: new Set,
    layersWithOutsidePointerEventsDisabled: new Set,
    branches: new Set
}), Wf = w.forwardRef( (e, t) => {
    const {disableOutsidePointerEvents: n=!1, onEscapeKeyDown: r, onPointerDownOutside: i, onFocusOutside: s, onInteractOutside: o, onDismiss: a, ...l} = e
      , u = w.useContext(K0)
      , [c,d] = w.useState(null)
      , f = (c == null ? void 0 : c.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document)
      , [,h] = w.useState({})
      , v = Yt(t, T => d(T))
      , g = Array.from(u.layers)
      , [x] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1)
      , m = g.indexOf(x)
      , p = c ? g.indexOf(c) : -1
      , y = u.layersWithOutsidePointerEventsDisabled.size > 0
      , b = p >= m
      , C = sk(T => {
        const E = T.target
          , M = [...u.branches].some(N => N.contains(E));
        !b || M || (i == null || i(T),
        o == null || o(T),
        T.defaultPrevented || a == null || a())
    }
    , f)
      , k = ok(T => {
        const E = T.target;
        [...u.branches].some(N => N.contains(E)) || (s == null || s(T),
        o == null || o(T),
        T.defaultPrevented || a == null || a())
    }
    , f);
    return ek(T => {
        p === u.layers.size - 1 && (r == null || r(T),
        !T.defaultPrevented && a && (T.preventDefault(),
        a()))
    }
    , f),
    w.useEffect( () => {
        if (c)
            return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (im = f.body.style.pointerEvents,
            f.body.style.pointerEvents = "none"),
            u.layersWithOutsidePointerEventsDisabled.add(c)),
            u.layers.add(c),
            sm(),
            () => {
                n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (f.body.style.pointerEvents = im)
            }
    }
    , [c, f, n, u]),
    w.useEffect( () => () => {
        c && (u.layers.delete(c),
        u.layersWithOutsidePointerEventsDisabled.delete(c),
        sm())
    }
    , [c, u]),
    w.useEffect( () => {
        const T = () => h({});
        return document.addEventListener(od, T),
        () => document.removeEventListener(od, T)
    }
    , []),
    S.jsx(ft.div, {
        ...l,
        ref: v,
        style: {
            pointerEvents: y ? b ? "auto" : "none" : void 0,
            ...e.style
        },
        onFocusCapture: je(e.onFocusCapture, k.onFocusCapture),
        onBlurCapture: je(e.onBlurCapture, k.onBlurCapture),
        onPointerDownCapture: je(e.onPointerDownCapture, C.onPointerDownCapture)
    })
}
);
Wf.displayName = tk;
var ik = "DismissableLayerBranch"
  , Z0 = w.forwardRef( (e, t) => {
    const n = w.useContext(K0)
      , r = w.useRef(null)
      , i = Yt(t, r);
    return w.useEffect( () => {
        const s = r.current;
        if (s)
            return n.branches.add(s),
            () => {
                n.branches.delete(s)
            }
    }
    , [n.branches]),
    S.jsx(ft.div, {
        ...e,
        ref: i
    })
}
);
Z0.displayName = ik;
function sk(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = yr(e)
      , r = w.useRef(!1)
      , i = w.useRef( () => {}
    );
    return w.useEffect( () => {
        const s = a => {
            if (a.target && !r.current) {
                let l = function() {
                    G0(nk, n, u, {
                        discrete: !0
                    })
                };
                const u = {
                    originalEvent: a
                };
                a.pointerType === "touch" ? (t.removeEventListener("click", i.current),
                i.current = l,
                t.addEventListener("click", i.current, {
                    once: !0
                })) : l()
            } else
                t.removeEventListener("click", i.current);
            r.current = !1
        }
          , o = window.setTimeout( () => {
            t.addEventListener("pointerdown", s)
        }
        , 0);
        return () => {
            window.clearTimeout(o),
            t.removeEventListener("pointerdown", s),
            t.removeEventListener("click", i.current)
        }
    }
    , [t, n]),
    {
        onPointerDownCapture: () => r.current = !0
    }
}
function ok(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = yr(e)
      , r = w.useRef(!1);
    return w.useEffect( () => {
        const i = s => {
            s.target && !r.current && G0(rk, n, {
                originalEvent: s
            }, {
                discrete: !1
            })
        }
        ;
        return t.addEventListener("focusin", i),
        () => t.removeEventListener("focusin", i)
    }
    , [t, n]),
    {
        onFocusCapture: () => r.current = !0,
        onBlurCapture: () => r.current = !1
    }
}
function sm() {
    const e = new CustomEvent(od);
    document.dispatchEvent(e)
}
function G0(e, t, n, {discrete: r}) {
    const i = n.originalEvent.target
      , s = new CustomEvent(e,{
        bubbles: !1,
        cancelable: !0,
        detail: n
    });
    t && i.addEventListener(e, t, {
        once: !0
    }),
    r ? H0(i, s) : i.dispatchEvent(s)
}
var ak = Wf
  , lk = Z0
  , vr = globalThis != null && globalThis.document ? w.useLayoutEffect : () => {}
  , uk = "Portal"
  , Q0 = w.forwardRef( (e, t) => {
    var a;
    const {container: n, ...r} = e
      , [i,s] = w.useState(!1);
    vr( () => s(!0), []);
    const o = n || i && ((a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : a.body);
    return o ? z0.createPortal(S.jsx(ft.div, {
        ...r,
        ref: t
    }), o) : null
}
);
Q0.displayName = uk;
function ck(e, t) {
    return w.useReducer( (n, r) => t[n][r] ?? n, e)
}
var Hf = e => {
    const {present: t, children: n} = e
      , r = dk(t)
      , i = typeof n == "function" ? n({
        present: r.isPresent
    }) : w.Children.only(n)
      , s = Yt(r.ref, fk(i));
    return typeof n == "function" || r.isPresent ? w.cloneElement(i, {
        ref: s
    }) : null
}
;
Hf.displayName = "Presence";
function dk(e) {
    const [t,n] = w.useState()
      , r = w.useRef(null)
      , i = w.useRef(e)
      , s = w.useRef("none")
      , o = e ? "mounted" : "unmounted"
      , [a,l] = ck(o, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return w.useEffect( () => {
        const u = da(r.current);
        s.current = a === "mounted" ? u : "none"
    }
    , [a]),
    vr( () => {
        const u = r.current
          , c = i.current;
        if (c !== e) {
            const f = s.current
              , h = da(u);
            e ? l("MOUNT") : h === "none" || (u == null ? void 0 : u.display) === "none" ? l("UNMOUNT") : l(c && f !== h ? "ANIMATION_OUT" : "UNMOUNT"),
            i.current = e
        }
    }
    , [e, l]),
    vr( () => {
        if (t) {
            let u;
            const c = t.ownerDocument.defaultView ?? window
              , d = h => {
                const g = da(r.current).includes(h.animationName);
                if (h.target === t && g && (l("ANIMATION_END"),
                !i.current)) {
                    const x = t.style.animationFillMode;
                    t.style.animationFillMode = "forwards",
                    u = c.setTimeout( () => {
                        t.style.animationFillMode === "forwards" && (t.style.animationFillMode = x)
                    }
                    )
                }
            }
              , f = h => {
                h.target === t && (s.current = da(r.current))
            }
            ;
            return t.addEventListener("animationstart", f),
            t.addEventListener("animationcancel", d),
            t.addEventListener("animationend", d),
            () => {
                c.clearTimeout(u),
                t.removeEventListener("animationstart", f),
                t.removeEventListener("animationcancel", d),
                t.removeEventListener("animationend", d)
            }
        } else
            l("ANIMATION_END")
    }
    , [t, l]),
    {
        isPresent: ["mounted", "unmountSuspended"].includes(a),
        ref: w.useCallback(u => {
            r.current = u ? getComputedStyle(u) : null,
            n(u)
        }
        , [])
    }
}
function da(e) {
    return (e == null ? void 0 : e.animationName) || "none"
}
function fk(e) {
    var r, i;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get
      , n = t && "isReactWarning"in t && t.isReactWarning;
    return n ? e.ref : (t = (i = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : i.get,
    n = t && "isReactWarning"in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
var hk = Iy[" useInsertionEffect ".trim().toString()] || vr;
function pk({prop: e, defaultProp: t, onChange: n= () => {}
, caller: r}) {
    const [i,s,o] = mk({
        defaultProp: t,
        onChange: n
    })
      , a = e !== void 0
      , l = a ? e : i;
    {
        const c = w.useRef(e !== void 0);
        w.useEffect( () => {
            const d = c.current;
            d !== a && console.warn(`${r} is changing from ${d ? "controlled" : "uncontrolled"} to ${a ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),
            c.current = a
        }
        , [a, r])
    }
    const u = w.useCallback(c => {
        var d;
        if (a) {
            const f = gk(c) ? c(e) : c;
            f !== e && ((d = o.current) == null || d.call(o, f))
        } else
            s(c)
    }
    , [a, e, s, o]);
    return [l, u]
}
function mk({defaultProp: e, onChange: t}) {
    const [n,r] = w.useState(e)
      , i = w.useRef(n)
      , s = w.useRef(t);
    return hk( () => {
        s.current = t
    }
    , [t]),
    w.useEffect( () => {
        var o;
        i.current !== n && ((o = s.current) == null || o.call(s, n),
        i.current = n)
    }
    , [n, i]),
    [n, r, s]
}
function gk(e) {
    return typeof e == "function"
}
var yk = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal"
})
  , vk = "VisuallyHidden"
  , Gl = w.forwardRef( (e, t) => S.jsx(ft.span, {
    ...e,
    ref: t,
    style: {
        ...yk,
        ...e.style
    }
}));
Gl.displayName = vk;
var xk = Gl
  , Kf = "ToastProvider"
  , [Zf,wk,Sk] = qC("Toast")
  , [Y0,eO] = Zl("Toast", [Sk])
  , [bk,Ql] = Y0(Kf)
  , X0 = e => {
    const {__scopeToast: t, label: n="Notification", duration: r=5e3, swipeDirection: i="right", swipeThreshold: s=50, children: o} = e
      , [a,l] = w.useState(null)
      , [u,c] = w.useState(0)
      , d = w.useRef(!1)
      , f = w.useRef(!1);
    return n.trim() || console.error(`Invalid prop \`label\` supplied to \`${Kf}\`. Expected non-empty \`string\`.`),
    S.jsx(Zf.Provider, {
        scope: t,
        children: S.jsx(bk, {
            scope: t,
            label: n,
            duration: r,
            swipeDirection: i,
            swipeThreshold: s,
            toastCount: u,
            viewport: a,
            onViewportChange: l,
            onToastAdd: w.useCallback( () => c(h => h + 1), []),
            onToastRemove: w.useCallback( () => c(h => h - 1), []),
            isFocusedToastEscapeKeyDownRef: d,
            isClosePausedRef: f,
            children: o
        })
    })
}
;
X0.displayName = Kf;
var q0 = "ToastViewport"
  , Ck = ["F8"]
  , ad = "toast.viewportPause"
  , ld = "toast.viewportResume"
  , J0 = w.forwardRef( (e, t) => {
    const {__scopeToast: n, hotkey: r=Ck, label: i="Notifications ({hotkey})", ...s} = e
      , o = Ql(q0, n)
      , a = wk(n)
      , l = w.useRef(null)
      , u = w.useRef(null)
      , c = w.useRef(null)
      , d = w.useRef(null)
      , f = Yt(t, d, o.onViewportChange)
      , h = r.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , v = o.toastCount > 0;
    w.useEffect( () => {
        const x = m => {
            var y;
            r.length !== 0 && r.every(b => m[b] || m.code === b) && ((y = d.current) == null || y.focus())
        }
        ;
        return document.addEventListener("keydown", x),
        () => document.removeEventListener("keydown", x)
    }
    , [r]),
    w.useEffect( () => {
        const x = l.current
          , m = d.current;
        if (v && x && m) {
            const p = () => {
                if (!o.isClosePausedRef.current) {
                    const k = new CustomEvent(ad);
                    m.dispatchEvent(k),
                    o.isClosePausedRef.current = !0
                }
            }
              , y = () => {
                if (o.isClosePausedRef.current) {
                    const k = new CustomEvent(ld);
                    m.dispatchEvent(k),
                    o.isClosePausedRef.current = !1
                }
            }
              , b = k => {
                !x.contains(k.relatedTarget) && y()
            }
              , C = () => {
                x.contains(document.activeElement) || y()
            }
            ;
            return x.addEventListener("focusin", p),
            x.addEventListener("focusout", b),
            x.addEventListener("pointermove", p),
            x.addEventListener("pointerleave", C),
            window.addEventListener("blur", p),
            window.addEventListener("focus", y),
            () => {
                x.removeEventListener("focusin", p),
                x.removeEventListener("focusout", b),
                x.removeEventListener("pointermove", p),
                x.removeEventListener("pointerleave", C),
                window.removeEventListener("blur", p),
                window.removeEventListener("focus", y)
            }
        }
    }
    , [v, o.isClosePausedRef]);
    const g = w.useCallback( ({tabbingDirection: x}) => {
        const p = a().map(y => {
            const b = y.ref.current
              , C = [b, ...Lk(b)];
            return x === "forwards" ? C : C.reverse()
        }
        );
        return (x === "forwards" ? p.reverse() : p).flat()
    }
    , [a]);
    return w.useEffect( () => {
        const x = d.current;
        if (x) {
            const m = p => {
                var C, k, T;
                const y = p.altKey || p.ctrlKey || p.metaKey;
                if (p.key === "Tab" && !y) {
                    const E = document.activeElement
                      , M = p.shiftKey;
                    if (p.target === x && M) {
                        (C = u.current) == null || C.focus();
                        return
                    }
                    const V = g({
                        tabbingDirection: M ? "backwards" : "forwards"
                    })
                      , J = V.findIndex(D => D === E);
                    Wu(V.slice(J + 1)) ? p.preventDefault() : M ? (k = u.current) == null || k.focus() : (T = c.current) == null || T.focus()
                }
            }
            ;
            return x.addEventListener("keydown", m),
            () => x.removeEventListener("keydown", m)
        }
    }
    , [a, g]),
    S.jsxs(lk, {
        ref: l,
        role: "region",
        "aria-label": i.replace("{hotkey}", h),
        tabIndex: -1,
        style: {
            pointerEvents: v ? void 0 : "none"
        },
        children: [v && S.jsx(ud, {
            ref: u,
            onFocusFromOutsideViewport: () => {
                const x = g({
                    tabbingDirection: "forwards"
                });
                Wu(x)
            }
        }), S.jsx(Zf.Slot, {
            scope: n,
            children: S.jsx(ft.ol, {
                tabIndex: -1,
                ...s,
                ref: f
            })
        }), v && S.jsx(ud, {
            ref: c,
            onFocusFromOutsideViewport: () => {
                const x = g({
                    tabbingDirection: "backwards"
                });
                Wu(x)
            }
        })]
    })
}
);
J0.displayName = q0;
var ex = "ToastFocusProxy"
  , ud = w.forwardRef( (e, t) => {
    const {__scopeToast: n, onFocusFromOutsideViewport: r, ...i} = e
      , s = Ql(ex, n);
    return S.jsx(Gl, {
        "aria-hidden": !0,
        tabIndex: 0,
        ...i,
        ref: t,
        style: {
            position: "fixed"
        },
        onFocus: o => {
            var u;
            const a = o.relatedTarget;
            !((u = s.viewport) != null && u.contains(a)) && r()
        }
    })
}
);
ud.displayName = ex;
var Vo = "Toast"
  , kk = "toast.swipeStart"
  , Tk = "toast.swipeMove"
  , Ek = "toast.swipeCancel"
  , Pk = "toast.swipeEnd"
  , tx = w.forwardRef( (e, t) => {
    const {forceMount: n, open: r, defaultOpen: i, onOpenChange: s, ...o} = e
      , [a,l] = pk({
        prop: r,
        defaultProp: i ?? !0,
        onChange: s,
        caller: Vo
    });
    return S.jsx(Hf, {
        present: n || a,
        children: S.jsx(Ak, {
            open: a,
            ...o,
            ref: t,
            onClose: () => l(!1),
            onPause: yr(e.onPause),
            onResume: yr(e.onResume),
            onSwipeStart: je(e.onSwipeStart, u => {
                u.currentTarget.setAttribute("data-swipe", "start")
            }
            ),
            onSwipeMove: je(e.onSwipeMove, u => {
                const {x: c, y: d} = u.detail.delta;
                u.currentTarget.setAttribute("data-swipe", "move"),
                u.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${c}px`),
                u.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${d}px`)
            }
            ),
            onSwipeCancel: je(e.onSwipeCancel, u => {
                u.currentTarget.setAttribute("data-swipe", "cancel"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
            }
            ),
            onSwipeEnd: je(e.onSwipeEnd, u => {
                const {x: c, y: d} = u.detail.delta;
                u.currentTarget.setAttribute("data-swipe", "end"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                u.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${c}px`),
                u.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${d}px`),
                l(!1)
            }
            )
        })
    })
}
);
tx.displayName = Vo;
var [_k,Rk] = Y0(Vo, {
    onClose() {}
})
  , Ak = w.forwardRef( (e, t) => {
    const {__scopeToast: n, type: r="foreground", duration: i, open: s, onClose: o, onEscapeKeyDown: a, onPause: l, onResume: u, onSwipeStart: c, onSwipeMove: d, onSwipeCancel: f, onSwipeEnd: h, ...v} = e
      , g = Ql(Vo, n)
      , [x,m] = w.useState(null)
      , p = Yt(t, D => m(D))
      , y = w.useRef(null)
      , b = w.useRef(null)
      , C = i || g.duration
      , k = w.useRef(0)
      , T = w.useRef(C)
      , E = w.useRef(0)
      , {onToastAdd: M, onToastRemove: N} = g
      , W = yr( () => {
        var ee;
        (x == null ? void 0 : x.contains(document.activeElement)) && ((ee = g.viewport) == null || ee.focus()),
        o()
    }
    )
      , V = w.useCallback(D => {
        !D || D === 1 / 0 || (window.clearTimeout(E.current),
        k.current = new Date().getTime(),
        E.current = window.setTimeout(W, D))
    }
    , [W]);
    w.useEffect( () => {
        const D = g.viewport;
        if (D) {
            const ee = () => {
                V(T.current),
                u == null || u()
            }
              , K = () => {
                const B = new Date().getTime() - k.current;
                T.current = T.current - B,
                window.clearTimeout(E.current),
                l == null || l()
            }
            ;
            return D.addEventListener(ad, K),
            D.addEventListener(ld, ee),
            () => {
                D.removeEventListener(ad, K),
                D.removeEventListener(ld, ee)
            }
        }
    }
    , [g.viewport, C, l, u, V]),
    w.useEffect( () => {
        s && !g.isClosePausedRef.current && V(C)
    }
    , [s, C, g.isClosePausedRef, V]),
    w.useEffect( () => (M(),
    () => N()), [M, N]);
    const J = w.useMemo( () => x ? lx(x) : null, [x]);
    return g.viewport ? S.jsxs(S.Fragment, {
        children: [J && S.jsx(Nk, {
            __scopeToast: n,
            role: "status",
            "aria-live": r === "foreground" ? "assertive" : "polite",
            "aria-atomic": !0,
            children: J
        }), S.jsx(_k, {
            scope: n,
            onClose: W,
            children: Io.createPortal(S.jsx(Zf.ItemSlot, {
                scope: n,
                children: S.jsx(ak, {
                    asChild: !0,
                    onEscapeKeyDown: je(a, () => {
                        g.isFocusedToastEscapeKeyDownRef.current || W(),
                        g.isFocusedToastEscapeKeyDownRef.current = !1
                    }
                    ),
                    children: S.jsx(ft.li, {
                        role: "status",
                        "aria-live": "off",
                        "aria-atomic": !0,
                        tabIndex: 0,
                        "data-state": s ? "open" : "closed",
                        "data-swipe-direction": g.swipeDirection,
                        ...v,
                        ref: p,
                        style: {
                            userSelect: "none",
                            touchAction: "none",
                            ...e.style
                        },
                        onKeyDown: je(e.onKeyDown, D => {
                            D.key === "Escape" && (a == null || a(D.nativeEvent),
                            D.nativeEvent.defaultPrevented || (g.isFocusedToastEscapeKeyDownRef.current = !0,
                            W()))
                        }
                        ),
                        onPointerDown: je(e.onPointerDown, D => {
                            D.button === 0 && (y.current = {
                                x: D.clientX,
                                y: D.clientY
                            })
                        }
                        ),
                        onPointerMove: je(e.onPointerMove, D => {
                            if (!y.current)
                                return;
                            const ee = D.clientX - y.current.x
                              , K = D.clientY - y.current.y
                              , B = !!b.current
                              , P = ["left", "right"].includes(g.swipeDirection)
                              , R = ["left", "up"].includes(g.swipeDirection) ? Math.min : Math.max
                              , L = P ? R(0, ee) : 0
                              , Z = P ? 0 : R(0, K)
                              , H = D.pointerType === "touch" ? 10 : 2
                              , ne = {
                                x: L,
                                y: Z
                            }
                              , ie = {
                                originalEvent: D,
                                delta: ne
                            };
                            B ? (b.current = ne,
                            fa(Tk, d, ie, {
                                discrete: !1
                            })) : om(ne, g.swipeDirection, H) ? (b.current = ne,
                            fa(kk, c, ie, {
                                discrete: !1
                            }),
                            D.target.setPointerCapture(D.pointerId)) : (Math.abs(ee) > H || Math.abs(K) > H) && (y.current = null)
                        }
                        ),
                        onPointerUp: je(e.onPointerUp, D => {
                            const ee = b.current
                              , K = D.target;
                            if (K.hasPointerCapture(D.pointerId) && K.releasePointerCapture(D.pointerId),
                            b.current = null,
                            y.current = null,
                            ee) {
                                const B = D.currentTarget
                                  , P = {
                                    originalEvent: D,
                                    delta: ee
                                };
                                om(ee, g.swipeDirection, g.swipeThreshold) ? fa(Pk, h, P, {
                                    discrete: !0
                                }) : fa(Ek, f, P, {
                                    discrete: !0
                                }),
                                B.addEventListener("click", R => R.preventDefault(), {
                                    once: !0
                                })
                            }
                        }
                        )
                    })
                })
            }), g.viewport)
        })]
    }) : null
}
)
  , Nk = e => {
    const {__scopeToast: t, children: n, ...r} = e
      , i = Ql(Vo, t)
      , [s,o] = w.useState(!1)
      , [a,l] = w.useState(!1);
    return Ok( () => o(!0)),
    w.useEffect( () => {
        const u = window.setTimeout( () => l(!0), 1e3);
        return () => window.clearTimeout(u)
    }
    , []),
    a ? null : S.jsx(Q0, {
        asChild: !0,
        children: S.jsx(Gl, {
            ...r,
            children: s && S.jsxs(S.Fragment, {
                children: [i.label, " ", n]
            })
        })
    })
}
  , Mk = "ToastTitle"
  , nx = w.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e;
    return S.jsx(ft.div, {
        ...r,
        ref: t
    })
}
);
nx.displayName = Mk;
var jk = "ToastDescription"
  , rx = w.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e;
    return S.jsx(ft.div, {
        ...r,
        ref: t
    })
}
);
rx.displayName = jk;
var ix = "ToastAction"
  , sx = w.forwardRef( (e, t) => {
    const {altText: n, ...r} = e;
    return n.trim() ? S.jsx(ax, {
        altText: n,
        asChild: !0,
        children: S.jsx(Gf, {
            ...r,
            ref: t
        })
    }) : (console.error(`Invalid prop \`altText\` supplied to \`${ix}\`. Expected non-empty \`string\`.`),
    null)
}
);
sx.displayName = ix;
var ox = "ToastClose"
  , Gf = w.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e
      , i = Rk(ox, n);
    return S.jsx(ax, {
        asChild: !0,
        children: S.jsx(ft.button, {
            type: "button",
            ...r,
            ref: t,
            onClick: je(e.onClick, i.onClose)
        })
    })
}
);
Gf.displayName = ox;
var ax = w.forwardRef( (e, t) => {
    const {__scopeToast: n, altText: r, ...i} = e;
    return S.jsx(ft.div, {
        "data-radix-toast-announce-exclude": "",
        "data-radix-toast-announce-alt": r || void 0,
        ...i,
        ref: t
    })
}
);
function lx(e) {
    const t = [];
    return Array.from(e.childNodes).forEach(r => {
        if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent),
        Dk(r)) {
            const i = r.ariaHidden || r.hidden || r.style.display === "none"
              , s = r.dataset.radixToastAnnounceExclude === "";
            if (!i)
                if (s) {
                    const o = r.dataset.radixToastAnnounceAlt;
                    o && t.push(o)
                } else
                    t.push(...lx(r))
        }
    }
    ),
    t
}
function fa(e, t, n, {discrete: r}) {
    const i = n.originalEvent.currentTarget
      , s = new CustomEvent(e,{
        bubbles: !0,
        cancelable: !0,
        detail: n
    });
    t && i.addEventListener(e, t, {
        once: !0
    }),
    r ? H0(i, s) : i.dispatchEvent(s)
}
var om = (e, t, n=0) => {
    const r = Math.abs(e.x)
      , i = Math.abs(e.y)
      , s = r > i;
    return t === "left" || t === "right" ? s && r > n : !s && i > n
}
;
function Ok(e= () => {}
) {
    const t = yr(e);
    vr( () => {
        let n = 0
          , r = 0;
        return n = window.requestAnimationFrame( () => r = window.requestAnimationFrame(t)),
        () => {
            window.cancelAnimationFrame(n),
            window.cancelAnimationFrame(r)
        }
    }
    , [t])
}
function Dk(e) {
    return e.nodeType === e.ELEMENT_NODE
}
function Lk(e) {
    const t = []
      , n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: r => {
            const i = r.tagName === "INPUT" && r.type === "hidden";
            return r.disabled || r.hidden || i ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }
    });
    for (; n.nextNode(); )
        t.push(n.currentNode);
    return t
}
function Wu(e) {
    const t = document.activeElement;
    return e.some(n => n === t ? !0 : (n.focus(),
    document.activeElement !== t))
}
var Ik = X0
  , ux = J0
  , cx = tx
  , dx = nx
  , fx = rx
  , hx = sx
  , px = Gf;
function mx(e) {
    var t, n, r = "";
    if (typeof e == "string" || typeof e == "number")
        r += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var i = e.length;
            for (t = 0; t < i; t++)
                e[t] && (n = mx(e[t])) && (r && (r += " "),
                r += n)
        } else
            for (n in e)
                e[n] && (r && (r += " "),
                r += n);
    return r
}
function gx() {
    for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++)
        (e = arguments[n]) && (t = mx(e)) && (r && (r += " "),
        r += t);
    return r
}
const am = e => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e
  , lm = gx
  , Vk = (e, t) => n => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
        return lm(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
    const {variants: i, defaultVariants: s} = t
      , o = Object.keys(i).map(u => {
        const c = n == null ? void 0 : n[u]
          , d = s == null ? void 0 : s[u];
        if (c === null)
            return null;
        const f = am(c) || am(d);
        return i[u][f]
    }
    )
      , a = n && Object.entries(n).reduce( (u, c) => {
        let[d,f] = c;
        return f === void 0 || (u[d] = f),
        u
    }
    , {})
      , l = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce( (u, c) => {
        let {class: d, className: f, ...h} = c;
        return Object.entries(h).every(v => {
            let[g,x] = v;
            return Array.isArray(x) ? x.includes({
                ...s,
                ...a
            }[g]) : {
                ...s,
                ...a
            }[g] === x
        }
        ) ? [...u, d, f] : u
    }
    , []);
    return lm(e, o, l, n == null ? void 0 : n.class, n == null ? void 0 : n.className)
}
;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fk = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
  , yx = (...e) => e.filter( (t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var zk = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $k = w.forwardRef( ({color: e="currentColor", size: t=24, strokeWidth: n=2, absoluteStrokeWidth: r, className: i="", children: s, iconNode: o, ...a}, l) => w.createElement("svg", {
    ref: l,
    ...zk,
    width: t,
    height: t,
    stroke: e,
    strokeWidth: r ? Number(n) * 24 / Number(t) : n,
    className: yx("lucide", i),
    ...a
}, [...o.map( ([u,c]) => w.createElement(u, c)), ...Array.isArray(s) ? s : [s]]));
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qe = (e, t) => {
    const n = w.forwardRef( ({className: r, ...i}, s) => w.createElement($k, {
        ref: s,
        iconNode: t,
        className: yx(`lucide-${Fk(e)}`, r),
        ...i
    }));
    return n.displayName = `${e}`,
    n
}
;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bk = Qe("ChartColumn", [["path", {
    d: "M3 3v16a2 2 0 0 0 2 2h16",
    key: "c24i48"
}], ["path", {
    d: "M18 17V9",
    key: "2bz60n"
}], ["path", {
    d: "M13 17V5",
    key: "1frdt8"
}], ["path", {
    d: "M8 17v-3",
    key: "17ska0"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Uk = Qe("ChevronLeft", [["path", {
    d: "m15 18-6-6 6-6",
    key: "1wnfg3"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wk = Qe("ChevronRight", [["path", {
    d: "m9 18 6-6-6-6",
    key: "mthhwq"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hk = Qe("CircleCheckBig", [["path", {
    d: "M21.801 10A10 10 0 1 1 17 3.335",
    key: "yps3ct"
}], ["path", {
    d: "m9 11 3 3L22 4",
    key: "1pflzl"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kk = Qe("Code", [["polyline", {
    points: "16 18 22 12 16 6",
    key: "z7tu5w"
}], ["polyline", {
    points: "8 6 2 12 8 18",
    key: "1eg1df"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zk = Qe("Compass", [["path", {
    d: "m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",
    key: "9ktpf1"
}], ["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gk = Qe("Instagram", [["rect", {
    width: "20",
    height: "20",
    x: "2",
    y: "2",
    rx: "5",
    ry: "5",
    key: "2e1cvw"
}], ["path", {
    d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",
    key: "9exkf1"
}], ["line", {
    x1: "17.5",
    x2: "17.51",
    y1: "6.5",
    y2: "6.5",
    key: "r4j83e"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qk = Qe("Linkedin", [["path", {
    d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
    key: "c2jq9f"
}], ["rect", {
    width: "4",
    height: "12",
    x: "2",
    y: "9",
    key: "mk3on5"
}], ["circle", {
    cx: "4",
    cy: "4",
    r: "2",
    key: "bt5ra8"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yk = Qe("Mail", [["rect", {
    width: "20",
    height: "16",
    x: "2",
    y: "4",
    rx: "2",
    key: "18n3k1"
}], ["path", {
    d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
    key: "1ocrg3"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xk = Qe("MapPin", [["path", {
    d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
    key: "1r0f0z"
}], ["circle", {
    cx: "12",
    cy: "10",
    r: "3",
    key: "ilqhr7"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qk = Qe("Menu", [["line", {
    x1: "4",
    x2: "20",
    y1: "12",
    y2: "12",
    key: "1e0a9i"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "6",
    y2: "6",
    key: "1owob3"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "18",
    y2: "18",
    key: "yk5zj1"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jk = Qe("Palette", [["circle", {
    cx: "13.5",
    cy: "6.5",
    r: ".5",
    fill: "currentColor",
    key: "1okk4w"
}], ["circle", {
    cx: "17.5",
    cy: "10.5",
    r: ".5",
    fill: "currentColor",
    key: "f64h9f"
}], ["circle", {
    cx: "8.5",
    cy: "7.5",
    r: ".5",
    fill: "currentColor",
    key: "fotxhn"
}], ["circle", {
    cx: "6.5",
    cy: "12.5",
    r: ".5",
    fill: "currentColor",
    key: "qy21gx"
}], ["path", {
    d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",
    key: "12rzf8"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const eT = Qe("Phone", [["path", {
    d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
    key: "foiqr5"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tT = Qe("Send", [["path", {
    d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
    key: "1ffxy3"
}], ["path", {
    d: "m21.854 2.147-10.94 10.939",
    key: "12cjpa"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nT = Qe("Twitter", [["path", {
    d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
    key: "pff0z6"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qf = Qe("X", [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]])
  , Yf = "-"
  , rT = e => {
    const t = sT(e)
      , {conflictingClassGroups: n, conflictingClassGroupModifiers: r} = e;
    return {
        getClassGroupId: o => {
            const a = o.split(Yf);
            return a[0] === "" && a.length !== 1 && a.shift(),
            vx(a, t) || iT(o)
        }
        ,
        getConflictingClassGroupIds: (o, a) => {
            const l = n[o] || [];
            return a && r[o] ? [...l, ...r[o]] : l
        }
    }
}
  , vx = (e, t) => {
    var o;
    if (e.length === 0)
        return t.classGroupId;
    const n = e[0]
      , r = t.nextPart.get(n)
      , i = r ? vx(e.slice(1), r) : void 0;
    if (i)
        return i;
    if (t.validators.length === 0)
        return;
    const s = e.join(Yf);
    return (o = t.validators.find( ({validator: a}) => a(s))) == null ? void 0 : o.classGroupId
}
  , um = /^\[(.+)\]$/
  , iT = e => {
    if (um.test(e)) {
        const t = um.exec(e)[1]
          , n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
        if (n)
            return "arbitrary.." + n
    }
}
  , sT = e => {
    const {theme: t, prefix: n} = e
      , r = {
        nextPart: new Map,
        validators: []
    };
    return aT(Object.entries(e.classGroups), n).forEach( ([s,o]) => {
        cd(o, r, s, t)
    }
    ),
    r
}
  , cd = (e, t, n, r) => {
    e.forEach(i => {
        if (typeof i == "string") {
            const s = i === "" ? t : cm(t, i);
            s.classGroupId = n;
            return
        }
        if (typeof i == "function") {
            if (oT(i)) {
                cd(i(r), t, n, r);
                return
            }
            t.validators.push({
                validator: i,
                classGroupId: n
            });
            return
        }
        Object.entries(i).forEach( ([s,o]) => {
            cd(o, cm(t, s), n, r)
        }
        )
    }
    )
}
  , cm = (e, t) => {
    let n = e;
    return t.split(Yf).forEach(r => {
        n.nextPart.has(r) || n.nextPart.set(r, {
            nextPart: new Map,
            validators: []
        }),
        n = n.nextPart.get(r)
    }
    ),
    n
}
  , oT = e => e.isThemeGetter
  , aT = (e, t) => t ? e.map( ([n,r]) => {
    const i = r.map(s => typeof s == "string" ? t + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map( ([o,a]) => [t + o, a])) : s);
    return [n, i]
}
) : e
  , lT = e => {
    if (e < 1)
        return {
            get: () => {}
            ,
            set: () => {}
        };
    let t = 0
      , n = new Map
      , r = new Map;
    const i = (s, o) => {
        n.set(s, o),
        t++,
        t > e && (t = 0,
        r = n,
        n = new Map)
    }
    ;
    return {
        get(s) {
            let o = n.get(s);
            if (o !== void 0)
                return o;
            if ((o = r.get(s)) !== void 0)
                return i(s, o),
                o
        },
        set(s, o) {
            n.has(s) ? n.set(s, o) : i(s, o)
        }
    }
}
  , xx = "!"
  , uT = e => {
    const {separator: t, experimentalParseClassName: n} = e
      , r = t.length === 1
      , i = t[0]
      , s = t.length
      , o = a => {
        const l = [];
        let u = 0, c = 0, d;
        for (let x = 0; x < a.length; x++) {
            let m = a[x];
            if (u === 0) {
                if (m === i && (r || a.slice(x, x + s) === t)) {
                    l.push(a.slice(c, x)),
                    c = x + s;
                    continue
                }
                if (m === "/") {
                    d = x;
                    continue
                }
            }
            m === "[" ? u++ : m === "]" && u--
        }
        const f = l.length === 0 ? a : a.substring(c)
          , h = f.startsWith(xx)
          , v = h ? f.substring(1) : f
          , g = d && d > c ? d - c : void 0;
        return {
            modifiers: l,
            hasImportantModifier: h,
            baseClassName: v,
            maybePostfixModifierPosition: g
        }
    }
    ;
    return n ? a => n({
        className: a,
        parseClassName: o
    }) : o
}
  , cT = e => {
    if (e.length <= 1)
        return e;
    const t = [];
    let n = [];
    return e.forEach(r => {
        r[0] === "[" ? (t.push(...n.sort(), r),
        n = []) : n.push(r)
    }
    ),
    t.push(...n.sort()),
    t
}
  , dT = e => ({
    cache: lT(e.cacheSize),
    parseClassName: uT(e),
    ...rT(e)
})
  , fT = /\s+/
  , hT = (e, t) => {
    const {parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: i} = t
      , s = []
      , o = e.trim().split(fT);
    let a = "";
    for (let l = o.length - 1; l >= 0; l -= 1) {
        const u = o[l]
          , {modifiers: c, hasImportantModifier: d, baseClassName: f, maybePostfixModifierPosition: h} = n(u);
        let v = !!h
          , g = r(v ? f.substring(0, h) : f);
        if (!g) {
            if (!v) {
                a = u + (a.length > 0 ? " " + a : a);
                continue
            }
            if (g = r(f),
            !g) {
                a = u + (a.length > 0 ? " " + a : a);
                continue
            }
            v = !1
        }
        const x = cT(c).join(":")
          , m = d ? x + xx : x
          , p = m + g;
        if (s.includes(p))
            continue;
        s.push(p);
        const y = i(g, v);
        for (let b = 0; b < y.length; ++b) {
            const C = y[b];
            s.push(m + C)
        }
        a = u + (a.length > 0 ? " " + a : a)
    }
    return a
}
;
function pT() {
    let e = 0, t, n, r = "";
    for (; e < arguments.length; )
        (t = arguments[e++]) && (n = wx(t)) && (r && (r += " "),
        r += n);
    return r
}
const wx = e => {
    if (typeof e == "string")
        return e;
    let t, n = "";
    for (let r = 0; r < e.length; r++)
        e[r] && (t = wx(e[r])) && (n && (n += " "),
        n += t);
    return n
}
;
function mT(e, ...t) {
    let n, r, i, s = o;
    function o(l) {
        const u = t.reduce( (c, d) => d(c), e());
        return n = dT(u),
        r = n.cache.get,
        i = n.cache.set,
        s = a,
        a(l)
    }
    function a(l) {
        const u = r(l);
        if (u)
            return u;
        const c = hT(l, n);
        return i(l, c),
        c
    }
    return function() {
        return s(pT.apply(null, arguments))
    }
}
const pe = e => {
    const t = n => n[e] || [];
    return t.isThemeGetter = !0,
    t
}
  , Sx = /^\[(?:([a-z-]+):)?(.+)\]$/i
  , gT = /^\d+\/\d+$/
  , yT = new Set(["px", "full", "screen"])
  , vT = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
  , xT = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
  , wT = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/
  , ST = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
  , bT = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
  , gn = e => Fi(e) || yT.has(e) || gT.test(e)
  , zn = e => ms(e, "length", AT)
  , Fi = e => !!e && !Number.isNaN(Number(e))
  , Hu = e => ms(e, "number", Fi)
  , Ns = e => !!e && Number.isInteger(Number(e))
  , CT = e => e.endsWith("%") && Fi(e.slice(0, -1))
  , q = e => Sx.test(e)
  , $n = e => vT.test(e)
  , kT = new Set(["length", "size", "percentage"])
  , TT = e => ms(e, kT, bx)
  , ET = e => ms(e, "position", bx)
  , PT = new Set(["image", "url"])
  , _T = e => ms(e, PT, MT)
  , RT = e => ms(e, "", NT)
  , Ms = () => !0
  , ms = (e, t, n) => {
    const r = Sx.exec(e);
    return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1
}
  , AT = e => xT.test(e) && !wT.test(e)
  , bx = () => !1
  , NT = e => ST.test(e)
  , MT = e => bT.test(e)
  , jT = () => {
    const e = pe("colors")
      , t = pe("spacing")
      , n = pe("blur")
      , r = pe("brightness")
      , i = pe("borderColor")
      , s = pe("borderRadius")
      , o = pe("borderSpacing")
      , a = pe("borderWidth")
      , l = pe("contrast")
      , u = pe("grayscale")
      , c = pe("hueRotate")
      , d = pe("invert")
      , f = pe("gap")
      , h = pe("gradientColorStops")
      , v = pe("gradientColorStopPositions")
      , g = pe("inset")
      , x = pe("margin")
      , m = pe("opacity")
      , p = pe("padding")
      , y = pe("saturate")
      , b = pe("scale")
      , C = pe("sepia")
      , k = pe("skew")
      , T = pe("space")
      , E = pe("translate")
      , M = () => ["auto", "contain", "none"]
      , N = () => ["auto", "hidden", "clip", "visible", "scroll"]
      , W = () => ["auto", q, t]
      , V = () => [q, t]
      , J = () => ["", gn, zn]
      , D = () => ["auto", Fi, q]
      , ee = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"]
      , K = () => ["solid", "dashed", "dotted", "double", "none"]
      , B = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
      , P = () => ["start", "end", "center", "between", "around", "evenly", "stretch"]
      , R = () => ["", "0", q]
      , L = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
      , Z = () => [Fi, q];
    return {
        cacheSize: 500,
        separator: ":",
        theme: {
            colors: [Ms],
            spacing: [gn, zn],
            blur: ["none", "", $n, q],
            brightness: Z(),
            borderColor: [e],
            borderRadius: ["none", "", "full", $n, q],
            borderSpacing: V(),
            borderWidth: J(),
            contrast: Z(),
            grayscale: R(),
            hueRotate: Z(),
            invert: R(),
            gap: V(),
            gradientColorStops: [e],
            gradientColorStopPositions: [CT, zn],
            inset: W(),
            margin: W(),
            opacity: Z(),
            padding: V(),
            saturate: Z(),
            scale: Z(),
            sepia: R(),
            skew: Z(),
            space: V(),
            translate: V()
        },
        classGroups: {
            aspect: [{
                aspect: ["auto", "square", "video", q]
            }],
            container: ["container"],
            columns: [{
                columns: [$n]
            }],
            "break-after": [{
                "break-after": L()
            }],
            "break-before": [{
                "break-before": L()
            }],
            "break-inside": [{
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
            }],
            "box-decoration": [{
                "box-decoration": ["slice", "clone"]
            }],
            box: [{
                box: ["border", "content"]
            }],
            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
            float: [{
                float: ["right", "left", "none", "start", "end"]
            }],
            clear: [{
                clear: ["left", "right", "both", "none", "start", "end"]
            }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [{
                object: ["contain", "cover", "fill", "none", "scale-down"]
            }],
            "object-position": [{
                object: [...ee(), q]
            }],
            overflow: [{
                overflow: N()
            }],
            "overflow-x": [{
                "overflow-x": N()
            }],
            "overflow-y": [{
                "overflow-y": N()
            }],
            overscroll: [{
                overscroll: M()
            }],
            "overscroll-x": [{
                "overscroll-x": M()
            }],
            "overscroll-y": [{
                "overscroll-y": M()
            }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{
                inset: [g]
            }],
            "inset-x": [{
                "inset-x": [g]
            }],
            "inset-y": [{
                "inset-y": [g]
            }],
            start: [{
                start: [g]
            }],
            end: [{
                end: [g]
            }],
            top: [{
                top: [g]
            }],
            right: [{
                right: [g]
            }],
            bottom: [{
                bottom: [g]
            }],
            left: [{
                left: [g]
            }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{
                z: ["auto", Ns, q]
            }],
            basis: [{
                basis: W()
            }],
            "flex-direction": [{
                flex: ["row", "row-reverse", "col", "col-reverse"]
            }],
            "flex-wrap": [{
                flex: ["wrap", "wrap-reverse", "nowrap"]
            }],
            flex: [{
                flex: ["1", "auto", "initial", "none", q]
            }],
            grow: [{
                grow: R()
            }],
            shrink: [{
                shrink: R()
            }],
            order: [{
                order: ["first", "last", "none", Ns, q]
            }],
            "grid-cols": [{
                "grid-cols": [Ms]
            }],
            "col-start-end": [{
                col: ["auto", {
                    span: ["full", Ns, q]
                }, q]
            }],
            "col-start": [{
                "col-start": D()
            }],
            "col-end": [{
                "col-end": D()
            }],
            "grid-rows": [{
                "grid-rows": [Ms]
            }],
            "row-start-end": [{
                row: ["auto", {
                    span: [Ns, q]
                }, q]
            }],
            "row-start": [{
                "row-start": D()
            }],
            "row-end": [{
                "row-end": D()
            }],
            "grid-flow": [{
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
            }],
            "auto-cols": [{
                "auto-cols": ["auto", "min", "max", "fr", q]
            }],
            "auto-rows": [{
                "auto-rows": ["auto", "min", "max", "fr", q]
            }],
            gap: [{
                gap: [f]
            }],
            "gap-x": [{
                "gap-x": [f]
            }],
            "gap-y": [{
                "gap-y": [f]
            }],
            "justify-content": [{
                justify: ["normal", ...P()]
            }],
            "justify-items": [{
                "justify-items": ["start", "end", "center", "stretch"]
            }],
            "justify-self": [{
                "justify-self": ["auto", "start", "end", "center", "stretch"]
            }],
            "align-content": [{
                content: ["normal", ...P(), "baseline"]
            }],
            "align-items": [{
                items: ["start", "end", "center", "baseline", "stretch"]
            }],
            "align-self": [{
                self: ["auto", "start", "end", "center", "stretch", "baseline"]
            }],
            "place-content": [{
                "place-content": [...P(), "baseline"]
            }],
            "place-items": [{
                "place-items": ["start", "end", "center", "baseline", "stretch"]
            }],
            "place-self": [{
                "place-self": ["auto", "start", "end", "center", "stretch"]
            }],
            p: [{
                p: [p]
            }],
            px: [{
                px: [p]
            }],
            py: [{
                py: [p]
            }],
            ps: [{
                ps: [p]
            }],
            pe: [{
                pe: [p]
            }],
            pt: [{
                pt: [p]
            }],
            pr: [{
                pr: [p]
            }],
            pb: [{
                pb: [p]
            }],
            pl: [{
                pl: [p]
            }],
            m: [{
                m: [x]
            }],
            mx: [{
                mx: [x]
            }],
            my: [{
                my: [x]
            }],
            ms: [{
                ms: [x]
            }],
            me: [{
                me: [x]
            }],
            mt: [{
                mt: [x]
            }],
            mr: [{
                mr: [x]
            }],
            mb: [{
                mb: [x]
            }],
            ml: [{
                ml: [x]
            }],
            "space-x": [{
                "space-x": [T]
            }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{
                "space-y": [T]
            }],
            "space-y-reverse": ["space-y-reverse"],
            w: [{
                w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", q, t]
            }],
            "min-w": [{
                "min-w": [q, t, "min", "max", "fit"]
            }],
            "max-w": [{
                "max-w": [q, t, "none", "full", "min", "max", "fit", "prose", {
                    screen: [$n]
                }, $n]
            }],
            h: [{
                h: [q, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "min-h": [{
                "min-h": [q, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "max-h": [{
                "max-h": [q, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            size: [{
                size: [q, t, "auto", "min", "max", "fit"]
            }],
            "font-size": [{
                text: ["base", $n, zn]
            }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{
                font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Hu]
            }],
            "font-family": [{
                font: [Ms]
            }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
            tracking: [{
                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", q]
            }],
            "line-clamp": [{
                "line-clamp": ["none", Fi, Hu]
            }],
            leading: [{
                leading: ["none", "tight", "snug", "normal", "relaxed", "loose", gn, q]
            }],
            "list-image": [{
                "list-image": ["none", q]
            }],
            "list-style-type": [{
                list: ["none", "disc", "decimal", q]
            }],
            "list-style-position": [{
                list: ["inside", "outside"]
            }],
            "placeholder-color": [{
                placeholder: [e]
            }],
            "placeholder-opacity": [{
                "placeholder-opacity": [m]
            }],
            "text-alignment": [{
                text: ["left", "center", "right", "justify", "start", "end"]
            }],
            "text-color": [{
                text: [e]
            }],
            "text-opacity": [{
                "text-opacity": [m]
            }],
            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
            "text-decoration-style": [{
                decoration: [...K(), "wavy"]
            }],
            "text-decoration-thickness": [{
                decoration: ["auto", "from-font", gn, zn]
            }],
            "underline-offset": [{
                "underline-offset": ["auto", gn, q]
            }],
            "text-decoration-color": [{
                decoration: [e]
            }],
            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{
                text: ["wrap", "nowrap", "balance", "pretty"]
            }],
            indent: [{
                indent: V()
            }],
            "vertical-align": [{
                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", q]
            }],
            whitespace: [{
                whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
            }],
            break: [{
                break: ["normal", "words", "all", "keep"]
            }],
            hyphens: [{
                hyphens: ["none", "manual", "auto"]
            }],
            content: [{
                content: ["none", q]
            }],
            "bg-attachment": [{
                bg: ["fixed", "local", "scroll"]
            }],
            "bg-clip": [{
                "bg-clip": ["border", "padding", "content", "text"]
            }],
            "bg-opacity": [{
                "bg-opacity": [m]
            }],
            "bg-origin": [{
                "bg-origin": ["border", "padding", "content"]
            }],
            "bg-position": [{
                bg: [...ee(), ET]
            }],
            "bg-repeat": [{
                bg: ["no-repeat", {
                    repeat: ["", "x", "y", "round", "space"]
                }]
            }],
            "bg-size": [{
                bg: ["auto", "cover", "contain", TT]
            }],
            "bg-image": [{
                bg: ["none", {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                }, _T]
            }],
            "bg-color": [{
                bg: [e]
            }],
            "gradient-from-pos": [{
                from: [v]
            }],
            "gradient-via-pos": [{
                via: [v]
            }],
            "gradient-to-pos": [{
                to: [v]
            }],
            "gradient-from": [{
                from: [h]
            }],
            "gradient-via": [{
                via: [h]
            }],
            "gradient-to": [{
                to: [h]
            }],
            rounded: [{
                rounded: [s]
            }],
            "rounded-s": [{
                "rounded-s": [s]
            }],
            "rounded-e": [{
                "rounded-e": [s]
            }],
            "rounded-t": [{
                "rounded-t": [s]
            }],
            "rounded-r": [{
                "rounded-r": [s]
            }],
            "rounded-b": [{
                "rounded-b": [s]
            }],
            "rounded-l": [{
                "rounded-l": [s]
            }],
            "rounded-ss": [{
                "rounded-ss": [s]
            }],
            "rounded-se": [{
                "rounded-se": [s]
            }],
            "rounded-ee": [{
                "rounded-ee": [s]
            }],
            "rounded-es": [{
                "rounded-es": [s]
            }],
            "rounded-tl": [{
                "rounded-tl": [s]
            }],
            "rounded-tr": [{
                "rounded-tr": [s]
            }],
            "rounded-br": [{
                "rounded-br": [s]
            }],
            "rounded-bl": [{
                "rounded-bl": [s]
            }],
            "border-w": [{
                border: [a]
            }],
            "border-w-x": [{
                "border-x": [a]
            }],
            "border-w-y": [{
                "border-y": [a]
            }],
            "border-w-s": [{
                "border-s": [a]
            }],
            "border-w-e": [{
                "border-e": [a]
            }],
            "border-w-t": [{
                "border-t": [a]
            }],
            "border-w-r": [{
                "border-r": [a]
            }],
            "border-w-b": [{
                "border-b": [a]
            }],
            "border-w-l": [{
                "border-l": [a]
            }],
            "border-opacity": [{
                "border-opacity": [m]
            }],
            "border-style": [{
                border: [...K(), "hidden"]
            }],
            "divide-x": [{
                "divide-x": [a]
            }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{
                "divide-y": [a]
            }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{
                "divide-opacity": [m]
            }],
            "divide-style": [{
                divide: K()
            }],
            "border-color": [{
                border: [i]
            }],
            "border-color-x": [{
                "border-x": [i]
            }],
            "border-color-y": [{
                "border-y": [i]
            }],
            "border-color-s": [{
                "border-s": [i]
            }],
            "border-color-e": [{
                "border-e": [i]
            }],
            "border-color-t": [{
                "border-t": [i]
            }],
            "border-color-r": [{
                "border-r": [i]
            }],
            "border-color-b": [{
                "border-b": [i]
            }],
            "border-color-l": [{
                "border-l": [i]
            }],
            "divide-color": [{
                divide: [i]
            }],
            "outline-style": [{
                outline: ["", ...K()]
            }],
            "outline-offset": [{
                "outline-offset": [gn, q]
            }],
            "outline-w": [{
                outline: [gn, zn]
            }],
            "outline-color": [{
                outline: [e]
            }],
            "ring-w": [{
                ring: J()
            }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{
                ring: [e]
            }],
            "ring-opacity": [{
                "ring-opacity": [m]
            }],
            "ring-offset-w": [{
                "ring-offset": [gn, zn]
            }],
            "ring-offset-color": [{
                "ring-offset": [e]
            }],
            shadow: [{
                shadow: ["", "inner", "none", $n, RT]
            }],
            "shadow-color": [{
                shadow: [Ms]
            }],
            opacity: [{
                opacity: [m]
            }],
            "mix-blend": [{
                "mix-blend": [...B(), "plus-lighter", "plus-darker"]
            }],
            "bg-blend": [{
                "bg-blend": B()
            }],
            filter: [{
                filter: ["", "none"]
            }],
            blur: [{
                blur: [n]
            }],
            brightness: [{
                brightness: [r]
            }],
            contrast: [{
                contrast: [l]
            }],
            "drop-shadow": [{
                "drop-shadow": ["", "none", $n, q]
            }],
            grayscale: [{
                grayscale: [u]
            }],
            "hue-rotate": [{
                "hue-rotate": [c]
            }],
            invert: [{
                invert: [d]
            }],
            saturate: [{
                saturate: [y]
            }],
            sepia: [{
                sepia: [C]
            }],
            "backdrop-filter": [{
                "backdrop-filter": ["", "none"]
            }],
            "backdrop-blur": [{
                "backdrop-blur": [n]
            }],
            "backdrop-brightness": [{
                "backdrop-brightness": [r]
            }],
            "backdrop-contrast": [{
                "backdrop-contrast": [l]
            }],
            "backdrop-grayscale": [{
                "backdrop-grayscale": [u]
            }],
            "backdrop-hue-rotate": [{
                "backdrop-hue-rotate": [c]
            }],
            "backdrop-invert": [{
                "backdrop-invert": [d]
            }],
            "backdrop-opacity": [{
                "backdrop-opacity": [m]
            }],
            "backdrop-saturate": [{
                "backdrop-saturate": [y]
            }],
            "backdrop-sepia": [{
                "backdrop-sepia": [C]
            }],
            "border-collapse": [{
                border: ["collapse", "separate"]
            }],
            "border-spacing": [{
                "border-spacing": [o]
            }],
            "border-spacing-x": [{
                "border-spacing-x": [o]
            }],
            "border-spacing-y": [{
                "border-spacing-y": [o]
            }],
            "table-layout": [{
                table: ["auto", "fixed"]
            }],
            caption: [{
                caption: ["top", "bottom"]
            }],
            transition: [{
                transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", q]
            }],
            duration: [{
                duration: Z()
            }],
            ease: [{
                ease: ["linear", "in", "out", "in-out", q]
            }],
            delay: [{
                delay: Z()
            }],
            animate: [{
                animate: ["none", "spin", "ping", "pulse", "bounce", q]
            }],
            transform: [{
                transform: ["", "gpu", "none"]
            }],
            scale: [{
                scale: [b]
            }],
            "scale-x": [{
                "scale-x": [b]
            }],
            "scale-y": [{
                "scale-y": [b]
            }],
            rotate: [{
                rotate: [Ns, q]
            }],
            "translate-x": [{
                "translate-x": [E]
            }],
            "translate-y": [{
                "translate-y": [E]
            }],
            "skew-x": [{
                "skew-x": [k]
            }],
            "skew-y": [{
                "skew-y": [k]
            }],
            "transform-origin": [{
                origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", q]
            }],
            accent: [{
                accent: ["auto", e]
            }],
            appearance: [{
                appearance: ["none", "auto"]
            }],
            cursor: [{
                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", q]
            }],
            "caret-color": [{
                caret: [e]
            }],
            "pointer-events": [{
                "pointer-events": ["none", "auto"]
            }],
            resize: [{
                resize: ["none", "y", "x", ""]
            }],
            "scroll-behavior": [{
                scroll: ["auto", "smooth"]
            }],
            "scroll-m": [{
                "scroll-m": V()
            }],
            "scroll-mx": [{
                "scroll-mx": V()
            }],
            "scroll-my": [{
                "scroll-my": V()
            }],
            "scroll-ms": [{
                "scroll-ms": V()
            }],
            "scroll-me": [{
                "scroll-me": V()
            }],
            "scroll-mt": [{
                "scroll-mt": V()
            }],
            "scroll-mr": [{
                "scroll-mr": V()
            }],
            "scroll-mb": [{
                "scroll-mb": V()
            }],
            "scroll-ml": [{
                "scroll-ml": V()
            }],
            "scroll-p": [{
                "scroll-p": V()
            }],
            "scroll-px": [{
                "scroll-px": V()
            }],
            "scroll-py": [{
                "scroll-py": V()
            }],
            "scroll-ps": [{
                "scroll-ps": V()
            }],
            "scroll-pe": [{
                "scroll-pe": V()
            }],
            "scroll-pt": [{
                "scroll-pt": V()
            }],
            "scroll-pr": [{
                "scroll-pr": V()
            }],
            "scroll-pb": [{
                "scroll-pb": V()
            }],
            "scroll-pl": [{
                "scroll-pl": V()
            }],
            "snap-align": [{
                snap: ["start", "end", "center", "align-none"]
            }],
            "snap-stop": [{
                snap: ["normal", "always"]
            }],
            "snap-type": [{
                snap: ["none", "x", "y", "both"]
            }],
            "snap-strictness": [{
                snap: ["mandatory", "proximity"]
            }],
            touch: [{
                touch: ["auto", "none", "manipulation"]
            }],
            "touch-x": [{
                "touch-pan": ["x", "left", "right"]
            }],
            "touch-y": [{
                "touch-pan": ["y", "up", "down"]
            }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{
                select: ["none", "text", "all", "auto"]
            }],
            "will-change": [{
                "will-change": ["auto", "scroll", "contents", "transform", q]
            }],
            fill: [{
                fill: [e, "none"]
            }],
            "stroke-w": [{
                stroke: [gn, zn, Hu]
            }],
            stroke: [{
                stroke: [e, "none"]
            }],
            sr: ["sr-only", "not-sr-only"],
            "forced-color-adjust": [{
                "forced-color-adjust": ["auto", "none"]
            }]
        },
        conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"]
        },
        conflictingClassGroupModifiers: {
            "font-size": ["leading"]
        }
    }
}
  , OT = mT(jT);
function si(...e) {
    return OT(gx(e))
}
const DT = Ik
  , Cx = w.forwardRef( ({className: e, ...t}, n) => S.jsx(ux, {
    ref: n,
    className: si("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", e),
    ...t
}));
Cx.displayName = ux.displayName;
const LT = Vk("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
    variants: {
        variant: {
            default: "border bg-background text-foreground",
            destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
})
  , kx = w.forwardRef( ({className: e, variant: t, ...n}, r) => S.jsx(cx, {
    ref: r,
    className: si(LT({
        variant: t
    }), e),
    ...n
}));
kx.displayName = cx.displayName;
const IT = w.forwardRef( ({className: e, ...t}, n) => S.jsx(hx, {
    ref: n,
    className: si("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50", e),
    ...t
}));
IT.displayName = hx.displayName;
const Tx = w.forwardRef( ({className: e, ...t}, n) => S.jsx(px, {
    ref: n,
    className: si("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", e),
    "toast-close": "",
    ...t,
    children: S.jsx(Qf, {
        className: "h-4 w-4"
    })
}));
Tx.displayName = px.displayName;
const Ex = w.forwardRef( ({className: e, ...t}, n) => S.jsx(dx, {
    ref: n,
    className: si("text-sm font-semibold", e),
    ...t
}));
Ex.displayName = dx.displayName;
const Px = w.forwardRef( ({className: e, ...t}, n) => S.jsx(fx, {
    ref: n,
    className: si("text-sm opacity-90", e),
    ...t
}));
Px.displayName = fx.displayName;
function VT() {
    const {toasts: e} = HC();
    return S.jsxs(DT, {
        children: [e.map(function({id: t, title: n, description: r, action: i, ...s}) {
            return S.jsxs(kx, {
                ...s,
                children: [S.jsxs("div", {
                    className: "grid gap-1",
                    children: [n && S.jsx(Ex, {
                        children: n
                    }), r && S.jsx(Px, {
                        children: r
                    })]
                }), i, S.jsx(Tx, {})]
            }, t)
        }), S.jsx(Cx, {})]
    })
}
var dm = ["light", "dark"]
  , FT = "(prefers-color-scheme: dark)"
  , zT = w.createContext(void 0)
  , $T = {
    setTheme: e => {}
    ,
    themes: []
}
  , BT = () => {
    var e;
    return (e = w.useContext(zT)) != null ? e : $T
}
;
w.memo( ({forcedTheme: e, storageKey: t, attribute: n, enableSystem: r, enableColorScheme: i, defaultTheme: s, value: o, attrs: a, nonce: l}) => {
    let u = s === "system"
      , c = n === "class" ? `var d=document.documentElement,c=d.classList;${`c.remove(${a.map(v => `'${v}'`).join(",")})`};` : `var d=document.documentElement,n='${n}',s='setAttribute';`
      , d = i ? dm.includes(s) && s ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${s}'` : "if(e==='light'||e==='dark')d.style.colorScheme=e" : ""
      , f = (v, g=!1, x=!0) => {
        let m = o ? o[v] : v
          , p = g ? v + "|| ''" : `'${m}'`
          , y = "";
        return i && x && !g && dm.includes(v) && (y += `d.style.colorScheme = '${v}';`),
        n === "class" ? g || m ? y += `c.add(${p})` : y += "null" : m && (y += `d[s](n,${p})`),
        y
    }
      , h = e ? `!function(){${c}${f(e)}}()` : r ? `!function(){try{${c}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${FT}',m=window.matchMedia(t);if(m.media!==t||m.matches){${f("dark")}}else{${f("light")}}}else if(e){${o ? `var x=${JSON.stringify(o)};` : ""}${f(o ? "x[e]" : "e", !0)}}${u ? "" : "else{" + f(s, !1, !1) + "}"}${d}}catch(e){}}()` : `!function(){try{${c}var e=localStorage.getItem('${t}');if(e){${o ? `var x=${JSON.stringify(o)};` : ""}${f(o ? "x[e]" : "e", !0)}}else{${f(s, !1, !1)};}${d}}catch(t){}}();`;
    return w.createElement("script", {
        nonce: l,
        dangerouslySetInnerHTML: {
            __html: h
        }
    })
}
);
var UT = e => {
    switch (e) {
    case "success":
        return KT;
    case "info":
        return GT;
    case "warning":
        return ZT;
    case "error":
        return QT;
    default:
        return null
    }
}
  , WT = Array(12).fill(0)
  , HT = ({visible: e, className: t}) => O.createElement("div", {
    className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "),
    "data-visible": e
}, O.createElement("div", {
    className: "sonner-spinner"
}, WT.map( (n, r) => O.createElement("div", {
    className: "sonner-loading-bar",
    key: `spinner-bar-${r}`
}))))
  , KT = O.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, O.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
    clipRule: "evenodd"
}))
  , ZT = O.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    height: "20",
    width: "20"
}, O.createElement("path", {
    fillRule: "evenodd",
    d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
    clipRule: "evenodd"
}))
  , GT = O.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, O.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
    clipRule: "evenodd"
}))
  , QT = O.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, O.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
    clipRule: "evenodd"
}))
  , YT = O.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
}, O.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
}), O.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
}))
  , XT = () => {
    let[e,t] = O.useState(document.hidden);
    return O.useEffect( () => {
        let n = () => {
            t(document.hidden)
        }
        ;
        return document.addEventListener("visibilitychange", n),
        () => window.removeEventListener("visibilitychange", n)
    }
    , []),
    e
}
  , dd = 1
  , qT = class {
    constructor() {
        this.subscribe = e => (this.subscribers.push(e),
        () => {
            let t = this.subscribers.indexOf(e);
            this.subscribers.splice(t, 1)
        }
        ),
        this.publish = e => {
            this.subscribers.forEach(t => t(e))
        }
        ,
        this.addToast = e => {
            this.publish(e),
            this.toasts = [...this.toasts, e]
        }
        ,
        this.create = e => {
            var t;
            let {message: n, ...r} = e
              , i = typeof (e == null ? void 0 : e.id) == "number" || ((t = e.id) == null ? void 0 : t.length) > 0 ? e.id : dd++
              , s = this.toasts.find(a => a.id === i)
              , o = e.dismissible === void 0 ? !0 : e.dismissible;
            return this.dismissedToasts.has(i) && this.dismissedToasts.delete(i),
            s ? this.toasts = this.toasts.map(a => a.id === i ? (this.publish({
                ...a,
                ...e,
                id: i,
                title: n
            }),
            {
                ...a,
                ...e,
                id: i,
                dismissible: o,
                title: n
            }) : a) : this.addToast({
                title: n,
                ...r,
                dismissible: o,
                id: i
            }),
            i
        }
        ,
        this.dismiss = e => (this.dismissedToasts.add(e),
        e || this.toasts.forEach(t => {
            this.subscribers.forEach(n => n({
                id: t.id,
                dismiss: !0
            }))
        }
        ),
        this.subscribers.forEach(t => t({
            id: e,
            dismiss: !0
        })),
        e),
        this.message = (e, t) => this.create({
            ...t,
            message: e
        }),
        this.error = (e, t) => this.create({
            ...t,
            message: e,
            type: "error"
        }),
        this.success = (e, t) => this.create({
            ...t,
            type: "success",
            message: e
        }),
        this.info = (e, t) => this.create({
            ...t,
            type: "info",
            message: e
        }),
        this.warning = (e, t) => this.create({
            ...t,
            type: "warning",
            message: e
        }),
        this.loading = (e, t) => this.create({
            ...t,
            type: "loading",
            message: e
        }),
        this.promise = (e, t) => {
            if (!t)
                return;
            let n;
            t.loading !== void 0 && (n = this.create({
                ...t,
                promise: e,
                type: "loading",
                message: t.loading,
                description: typeof t.description != "function" ? t.description : void 0
            }));
            let r = e instanceof Promise ? e : e(), i = n !== void 0, s, o = r.then(async l => {
                if (s = ["resolve", l],
                O.isValidElement(l))
                    i = !1,
                    this.create({
                        id: n,
                        type: "default",
                        message: l
                    });
                else if (eE(l) && !l.ok) {
                    i = !1;
                    let u = typeof t.error == "function" ? await t.error(`HTTP error! status: ${l.status}`) : t.error
                      , c = typeof t.description == "function" ? await t.description(`HTTP error! status: ${l.status}`) : t.description;
                    this.create({
                        id: n,
                        type: "error",
                        message: u,
                        description: c
                    })
                } else if (t.success !== void 0) {
                    i = !1;
                    let u = typeof t.success == "function" ? await t.success(l) : t.success
                      , c = typeof t.description == "function" ? await t.description(l) : t.description;
                    this.create({
                        id: n,
                        type: "success",
                        message: u,
                        description: c
                    })
                }
            }
            ).catch(async l => {
                if (s = ["reject", l],
                t.error !== void 0) {
                    i = !1;
                    let u = typeof t.error == "function" ? await t.error(l) : t.error
                      , c = typeof t.description == "function" ? await t.description(l) : t.description;
                    this.create({
                        id: n,
                        type: "error",
                        message: u,
                        description: c
                    })
                }
            }
            ).finally( () => {
                var l;
                i && (this.dismiss(n),
                n = void 0),
                (l = t.finally) == null || l.call(t)
            }
            ), a = () => new Promise( (l, u) => o.then( () => s[0] === "reject" ? u(s[1]) : l(s[1])).catch(u));
            return typeof n != "string" && typeof n != "number" ? {
                unwrap: a
            } : Object.assign(n, {
                unwrap: a
            })
        }
        ,
        this.custom = (e, t) => {
            let n = (t == null ? void 0 : t.id) || dd++;
            return this.create({
                jsx: e(n),
                id: n,
                ...t
            }),
            n
        }
        ,
        this.getActiveToasts = () => this.toasts.filter(e => !this.dismissedToasts.has(e.id)),
        this.subscribers = [],
        this.toasts = [],
        this.dismissedToasts = new Set
    }
}
  , st = new qT
  , JT = (e, t) => {
    let n = (t == null ? void 0 : t.id) || dd++;
    return st.addToast({
        title: e,
        ...t,
        id: n
    }),
    n
}
  , eE = e => e && typeof e == "object" && "ok"in e && typeof e.ok == "boolean" && "status"in e && typeof e.status == "number"
  , tE = JT
  , nE = () => st.toasts
  , rE = () => st.getActiveToasts();
Object.assign(tE, {
    success: st.success,
    info: st.info,
    warning: st.warning,
    error: st.error,
    custom: st.custom,
    message: st.message,
    promise: st.promise,
    dismiss: st.dismiss,
    loading: st.loading
}, {
    getHistory: nE,
    getToasts: rE
});
function iE(e, {insertAt: t}={}) {
    if (typeof document > "u")
        return;
    let n = document.head || document.getElementsByTagName("head")[0]
      , r = document.createElement("style");
    r.type = "text/css",
    t === "top" && n.firstChild ? n.insertBefore(r, n.firstChild) : n.appendChild(r),
    r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e))
}
iE(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function ha(e) {
    return e.label !== void 0
}
var sE = 3
  , oE = "32px"
  , aE = "16px"
  , fm = 4e3
  , lE = 356
  , uE = 14
  , cE = 20
  , dE = 200;
function Vt(...e) {
    return e.filter(Boolean).join(" ")
}
function fE(e) {
    let[t,n] = e.split("-")
      , r = [];
    return t && r.push(t),
    n && r.push(n),
    r
}
var hE = e => {
    var t, n, r, i, s, o, a, l, u, c, d;
    let {invert: f, toast: h, unstyled: v, interacting: g, setHeights: x, visibleToasts: m, heights: p, index: y, toasts: b, expanded: C, removeToast: k, defaultRichColors: T, closeButton: E, style: M, cancelButtonStyle: N, actionButtonStyle: W, className: V="", descriptionClassName: J="", duration: D, position: ee, gap: K, loadingIcon: B, expandByDefault: P, classNames: R, icons: L, closeButtonAriaLabel: Z="Close toast", pauseWhenPageIsHidden: H} = e
      , [ne,ie] = O.useState(null)
      , [_e,$e] = O.useState(null)
      , [ue,oi] = O.useState(!1)
      , [jn,Rr] = O.useState(!1)
      , [On,ai] = O.useState(!1)
      , [Dn,Wo] = O.useState(!1)
      , [du,Ho] = O.useState(!1)
      , [fu,Ss] = O.useState(0)
      , [li,zh] = O.useState(0)
      , bs = O.useRef(h.duration || D || fm)
      , $h = O.useRef(null)
      , Ar = O.useRef(null)
      , oS = y === 0
      , aS = y + 1 <= m
      , bt = h.type
      , ui = h.dismissible !== !1
      , lS = h.className || ""
      , uS = h.descriptionClassName || ""
      , Ko = O.useMemo( () => p.findIndex(Y => Y.toastId === h.id) || 0, [p, h.id])
      , cS = O.useMemo( () => {
        var Y;
        return (Y = h.closeButton) != null ? Y : E
    }
    , [h.closeButton, E])
      , Bh = O.useMemo( () => h.duration || D || fm, [h.duration, D])
      , hu = O.useRef(0)
      , ci = O.useRef(0)
      , Uh = O.useRef(0)
      , di = O.useRef(null)
      , [dS,fS] = ee.split("-")
      , Wh = O.useMemo( () => p.reduce( (Y, de, ye) => ye >= Ko ? Y : Y + de.height, 0), [p, Ko])
      , Hh = XT()
      , hS = h.invert || f
      , pu = bt === "loading";
    ci.current = O.useMemo( () => Ko * K + Wh, [Ko, Wh]),
    O.useEffect( () => {
        bs.current = Bh
    }
    , [Bh]),
    O.useEffect( () => {
        oi(!0)
    }
    , []),
    O.useEffect( () => {
        let Y = Ar.current;
        if (Y) {
            let de = Y.getBoundingClientRect().height;
            return zh(de),
            x(ye => [{
                toastId: h.id,
                height: de,
                position: h.position
            }, ...ye]),
            () => x(ye => ye.filter(Ot => Ot.toastId !== h.id))
        }
    }
    , [x, h.id]),
    O.useLayoutEffect( () => {
        if (!ue)
            return;
        let Y = Ar.current
          , de = Y.style.height;
        Y.style.height = "auto";
        let ye = Y.getBoundingClientRect().height;
        Y.style.height = de,
        zh(ye),
        x(Ot => Ot.find(Dt => Dt.toastId === h.id) ? Ot.map(Dt => Dt.toastId === h.id ? {
            ...Dt,
            height: ye
        } : Dt) : [{
            toastId: h.id,
            height: ye,
            position: h.position
        }, ...Ot])
    }
    , [ue, h.title, h.description, x, h.id]);
    let Ln = O.useCallback( () => {
        Rr(!0),
        Ss(ci.current),
        x(Y => Y.filter(de => de.toastId !== h.id)),
        setTimeout( () => {
            k(h)
        }
        , dE)
    }
    , [h, k, x, ci]);
    O.useEffect( () => {
        if (h.promise && bt === "loading" || h.duration === 1 / 0 || h.type === "loading")
            return;
        let Y;
        return C || g || H && Hh ? ( () => {
            if (Uh.current < hu.current) {
                let de = new Date().getTime() - hu.current;
                bs.current = bs.current - de
            }
            Uh.current = new Date().getTime()
        }
        )() : bs.current !== 1 / 0 && (hu.current = new Date().getTime(),
        Y = setTimeout( () => {
            var de;
            (de = h.onAutoClose) == null || de.call(h, h),
            Ln()
        }
        , bs.current)),
        () => clearTimeout(Y)
    }
    , [C, g, h, bt, H, Hh, Ln]),
    O.useEffect( () => {
        h.delete && Ln()
    }
    , [Ln, h.delete]);
    function pS() {
        var Y, de, ye;
        return L != null && L.loading ? O.createElement("div", {
            className: Vt(R == null ? void 0 : R.loader, (Y = h == null ? void 0 : h.classNames) == null ? void 0 : Y.loader, "sonner-loader"),
            "data-visible": bt === "loading"
        }, L.loading) : B ? O.createElement("div", {
            className: Vt(R == null ? void 0 : R.loader, (de = h == null ? void 0 : h.classNames) == null ? void 0 : de.loader, "sonner-loader"),
            "data-visible": bt === "loading"
        }, B) : O.createElement(HT, {
            className: Vt(R == null ? void 0 : R.loader, (ye = h == null ? void 0 : h.classNames) == null ? void 0 : ye.loader),
            visible: bt === "loading"
        })
    }
    return O.createElement("li", {
        tabIndex: 0,
        ref: Ar,
        className: Vt(V, lS, R == null ? void 0 : R.toast, (t = h == null ? void 0 : h.classNames) == null ? void 0 : t.toast, R == null ? void 0 : R.default, R == null ? void 0 : R[bt], (n = h == null ? void 0 : h.classNames) == null ? void 0 : n[bt]),
        "data-sonner-toast": "",
        "data-rich-colors": (r = h.richColors) != null ? r : T,
        "data-styled": !(h.jsx || h.unstyled || v),
        "data-mounted": ue,
        "data-promise": !!h.promise,
        "data-swiped": du,
        "data-removed": jn,
        "data-visible": aS,
        "data-y-position": dS,
        "data-x-position": fS,
        "data-index": y,
        "data-front": oS,
        "data-swiping": On,
        "data-dismissible": ui,
        "data-type": bt,
        "data-invert": hS,
        "data-swipe-out": Dn,
        "data-swipe-direction": _e,
        "data-expanded": !!(C || P && ue),
        style: {
            "--index": y,
            "--toasts-before": y,
            "--z-index": b.length - y,
            "--offset": `${jn ? fu : ci.current}px`,
            "--initial-height": P ? "auto" : `${li}px`,
            ...M,
            ...h.style
        },
        onDragEnd: () => {
            ai(!1),
            ie(null),
            di.current = null
        }
        ,
        onPointerDown: Y => {
            pu || !ui || ($h.current = new Date,
            Ss(ci.current),
            Y.target.setPointerCapture(Y.pointerId),
            Y.target.tagName !== "BUTTON" && (ai(!0),
            di.current = {
                x: Y.clientX,
                y: Y.clientY
            }))
        }
        ,
        onPointerUp: () => {
            var Y, de, ye, Ot;
            if (Dn || !ui)
                return;
            di.current = null;
            let Dt = Number(((Y = Ar.current) == null ? void 0 : Y.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0)
              , In = Number(((de = Ar.current) == null ? void 0 : de.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0)
              , Nr = new Date().getTime() - ((ye = $h.current) == null ? void 0 : ye.getTime())
              , Lt = ne === "x" ? Dt : In
              , Vn = Math.abs(Lt) / Nr;
            if (Math.abs(Lt) >= cE || Vn > .11) {
                Ss(ci.current),
                (Ot = h.onDismiss) == null || Ot.call(h, h),
                $e(ne === "x" ? Dt > 0 ? "right" : "left" : In > 0 ? "down" : "up"),
                Ln(),
                Wo(!0),
                Ho(!1);
                return
            }
            ai(!1),
            ie(null)
        }
        ,
        onPointerMove: Y => {
            var de, ye, Ot, Dt;
            if (!di.current || !ui || ((de = window.getSelection()) == null ? void 0 : de.toString().length) > 0)
                return;
            let In = Y.clientY - di.current.y
              , Nr = Y.clientX - di.current.x
              , Lt = (ye = e.swipeDirections) != null ? ye : fE(ee);
            !ne && (Math.abs(Nr) > 1 || Math.abs(In) > 1) && ie(Math.abs(Nr) > Math.abs(In) ? "x" : "y");
            let Vn = {
                x: 0,
                y: 0
            };
            ne === "y" ? (Lt.includes("top") || Lt.includes("bottom")) && (Lt.includes("top") && In < 0 || Lt.includes("bottom") && In > 0) && (Vn.y = In) : ne === "x" && (Lt.includes("left") || Lt.includes("right")) && (Lt.includes("left") && Nr < 0 || Lt.includes("right") && Nr > 0) && (Vn.x = Nr),
            (Math.abs(Vn.x) > 0 || Math.abs(Vn.y) > 0) && Ho(!0),
            (Ot = Ar.current) == null || Ot.style.setProperty("--swipe-amount-x", `${Vn.x}px`),
            (Dt = Ar.current) == null || Dt.style.setProperty("--swipe-amount-y", `${Vn.y}px`)
        }
    }, cS && !h.jsx ? O.createElement("button", {
        "aria-label": Z,
        "data-disabled": pu,
        "data-close-button": !0,
        onClick: pu || !ui ? () => {}
        : () => {
            var Y;
            Ln(),
            (Y = h.onDismiss) == null || Y.call(h, h)
        }
        ,
        className: Vt(R == null ? void 0 : R.closeButton, (i = h == null ? void 0 : h.classNames) == null ? void 0 : i.closeButton)
    }, (s = L == null ? void 0 : L.close) != null ? s : YT) : null, h.jsx || w.isValidElement(h.title) ? h.jsx ? h.jsx : typeof h.title == "function" ? h.title() : h.title : O.createElement(O.Fragment, null, bt || h.icon || h.promise ? O.createElement("div", {
        "data-icon": "",
        className: Vt(R == null ? void 0 : R.icon, (o = h == null ? void 0 : h.classNames) == null ? void 0 : o.icon)
    }, h.promise || h.type === "loading" && !h.icon ? h.icon || pS() : null, h.type !== "loading" ? h.icon || (L == null ? void 0 : L[bt]) || UT(bt) : null) : null, O.createElement("div", {
        "data-content": "",
        className: Vt(R == null ? void 0 : R.content, (a = h == null ? void 0 : h.classNames) == null ? void 0 : a.content)
    }, O.createElement("div", {
        "data-title": "",
        className: Vt(R == null ? void 0 : R.title, (l = h == null ? void 0 : h.classNames) == null ? void 0 : l.title)
    }, typeof h.title == "function" ? h.title() : h.title), h.description ? O.createElement("div", {
        "data-description": "",
        className: Vt(J, uS, R == null ? void 0 : R.description, (u = h == null ? void 0 : h.classNames) == null ? void 0 : u.description)
    }, typeof h.description == "function" ? h.description() : h.description) : null), w.isValidElement(h.cancel) ? h.cancel : h.cancel && ha(h.cancel) ? O.createElement("button", {
        "data-button": !0,
        "data-cancel": !0,
        style: h.cancelButtonStyle || N,
        onClick: Y => {
            var de, ye;
            ha(h.cancel) && ui && ((ye = (de = h.cancel).onClick) == null || ye.call(de, Y),
            Ln())
        }
        ,
        className: Vt(R == null ? void 0 : R.cancelButton, (c = h == null ? void 0 : h.classNames) == null ? void 0 : c.cancelButton)
    }, h.cancel.label) : null, w.isValidElement(h.action) ? h.action : h.action && ha(h.action) ? O.createElement("button", {
        "data-button": !0,
        "data-action": !0,
        style: h.actionButtonStyle || W,
        onClick: Y => {
            var de, ye;
            ha(h.action) && ((ye = (de = h.action).onClick) == null || ye.call(de, Y),
            !Y.defaultPrevented && Ln())
        }
        ,
        className: Vt(R == null ? void 0 : R.actionButton, (d = h == null ? void 0 : h.classNames) == null ? void 0 : d.actionButton)
    }, h.action.label) : null))
}
;
function hm() {
    if (typeof window > "u" || typeof document > "u")
        return "ltr";
    let e = document.documentElement.getAttribute("dir");
    return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e
}
function pE(e, t) {
    let n = {};
    return [e, t].forEach( (r, i) => {
        let s = i === 1
          , o = s ? "--mobile-offset" : "--offset"
          , a = s ? aE : oE;
        function l(u) {
            ["top", "right", "bottom", "left"].forEach(c => {
                n[`${o}-${c}`] = typeof u == "number" ? `${u}px` : u
            }
            )
        }
        typeof r == "number" || typeof r == "string" ? l(r) : typeof r == "object" ? ["top", "right", "bottom", "left"].forEach(u => {
            r[u] === void 0 ? n[`${o}-${u}`] = a : n[`${o}-${u}`] = typeof r[u] == "number" ? `${r[u]}px` : r[u]
        }
        ) : l(a)
    }
    ),
    n
}
var mE = w.forwardRef(function(e, t) {
    let {invert: n, position: r="bottom-right", hotkey: i=["altKey", "KeyT"], expand: s, closeButton: o, className: a, offset: l, mobileOffset: u, theme: c="light", richColors: d, duration: f, style: h, visibleToasts: v=sE, toastOptions: g, dir: x=hm(), gap: m=uE, loadingIcon: p, icons: y, containerAriaLabel: b="Notifications", pauseWhenPageIsHidden: C} = e
      , [k,T] = O.useState([])
      , E = O.useMemo( () => Array.from(new Set([r].concat(k.filter(H => H.position).map(H => H.position)))), [k, r])
      , [M,N] = O.useState([])
      , [W,V] = O.useState(!1)
      , [J,D] = O.useState(!1)
      , [ee,K] = O.useState(c !== "system" ? c : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
      , B = O.useRef(null)
      , P = i.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , R = O.useRef(null)
      , L = O.useRef(!1)
      , Z = O.useCallback(H => {
        T(ne => {
            var ie;
            return (ie = ne.find(_e => _e.id === H.id)) != null && ie.delete || st.dismiss(H.id),
            ne.filter( ({id: _e}) => _e !== H.id)
        }
        )
    }
    , []);
    return O.useEffect( () => st.subscribe(H => {
        if (H.dismiss) {
            T(ne => ne.map(ie => ie.id === H.id ? {
                ...ie,
                delete: !0
            } : ie));
            return
        }
        setTimeout( () => {
            z0.flushSync( () => {
                T(ne => {
                    let ie = ne.findIndex(_e => _e.id === H.id);
                    return ie !== -1 ? [...ne.slice(0, ie), {
                        ...ne[ie],
                        ...H
                    }, ...ne.slice(ie + 1)] : [H, ...ne]
                }
                )
            }
            )
        }
        )
    }
    ), []),
    O.useEffect( () => {
        if (c !== "system") {
            K(c);
            return
        }
        if (c === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? K("dark") : K("light")),
        typeof window > "u")
            return;
        let H = window.matchMedia("(prefers-color-scheme: dark)");
        try {
            H.addEventListener("change", ({matches: ne}) => {
                K(ne ? "dark" : "light")
            }
            )
        } catch {
            H.addListener( ({matches: ie}) => {
                try {
                    K(ie ? "dark" : "light")
                } catch (_e) {
                    console.error(_e)
                }
            }
            )
        }
    }
    , [c]),
    O.useEffect( () => {
        k.length <= 1 && V(!1)
    }
    , [k]),
    O.useEffect( () => {
        let H = ne => {
            var ie, _e;
            i.every($e => ne[$e] || ne.code === $e) && (V(!0),
            (ie = B.current) == null || ie.focus()),
            ne.code === "Escape" && (document.activeElement === B.current || (_e = B.current) != null && _e.contains(document.activeElement)) && V(!1)
        }
        ;
        return document.addEventListener("keydown", H),
        () => document.removeEventListener("keydown", H)
    }
    , [i]),
    O.useEffect( () => {
        if (B.current)
            return () => {
                R.current && (R.current.focus({
                    preventScroll: !0
                }),
                R.current = null,
                L.current = !1)
            }
    }
    , [B.current]),
    O.createElement("section", {
        ref: t,
        "aria-label": `${b} ${P}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: !0
    }, E.map( (H, ne) => {
        var ie;
        let[_e,$e] = H.split("-");
        return k.length ? O.createElement("ol", {
            key: H,
            dir: x === "auto" ? hm() : x,
            tabIndex: -1,
            ref: B,
            className: a,
            "data-sonner-toaster": !0,
            "data-theme": ee,
            "data-y-position": _e,
            "data-lifted": W && k.length > 1 && !s,
            "data-x-position": $e,
            style: {
                "--front-toast-height": `${((ie = M[0]) == null ? void 0 : ie.height) || 0}px`,
                "--width": `${lE}px`,
                "--gap": `${m}px`,
                ...h,
                ...pE(l, u)
            },
            onBlur: ue => {
                L.current && !ue.currentTarget.contains(ue.relatedTarget) && (L.current = !1,
                R.current && (R.current.focus({
                    preventScroll: !0
                }),
                R.current = null))
            }
            ,
            onFocus: ue => {
                ue.target instanceof HTMLElement && ue.target.dataset.dismissible === "false" || L.current || (L.current = !0,
                R.current = ue.relatedTarget)
            }
            ,
            onMouseEnter: () => V(!0),
            onMouseMove: () => V(!0),
            onMouseLeave: () => {
                J || V(!1)
            }
            ,
            onDragEnd: () => V(!1),
            onPointerDown: ue => {
                ue.target instanceof HTMLElement && ue.target.dataset.dismissible === "false" || D(!0)
            }
            ,
            onPointerUp: () => D(!1)
        }, k.filter(ue => !ue.position && ne === 0 || ue.position === H).map( (ue, oi) => {
            var jn, Rr;
            return O.createElement(hE, {
                key: ue.id,
                icons: y,
                index: oi,
                toast: ue,
                defaultRichColors: d,
                duration: (jn = g == null ? void 0 : g.duration) != null ? jn : f,
                className: g == null ? void 0 : g.className,
                descriptionClassName: g == null ? void 0 : g.descriptionClassName,
                invert: n,
                visibleToasts: v,
                closeButton: (Rr = g == null ? void 0 : g.closeButton) != null ? Rr : o,
                interacting: J,
                position: H,
                style: g == null ? void 0 : g.style,
                unstyled: g == null ? void 0 : g.unstyled,
                classNames: g == null ? void 0 : g.classNames,
                cancelButtonStyle: g == null ? void 0 : g.cancelButtonStyle,
                actionButtonStyle: g == null ? void 0 : g.actionButtonStyle,
                removeToast: Z,
                toasts: k.filter(On => On.position == ue.position),
                heights: M.filter(On => On.position == ue.position),
                setHeights: N,
                expandByDefault: s,
                gap: m,
                loadingIcon: p,
                expanded: W,
                pauseWhenPageIsHidden: C,
                swipeDirections: e.swipeDirections
            })
        }
        )) : null
    }
    ))
});
const gE = ({...e}) => {
    const {theme: t="system"} = BT();
    return S.jsx(mE, {
        theme: t,
        className: "toaster group",
        toastOptions: {
            classNames: {
                toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                description: "group-[.toast]:text-muted-foreground",
                actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
            }
        },
        ...e
    })
}
  , yE = ["top", "right", "bottom", "left"]
  , xr = Math.min
  , pt = Math.max
  , dl = Math.round
  , pa = Math.floor
  , cn = e => ({
    x: e,
    y: e
})
  , vE = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
}
  , xE = {
    start: "end",
    end: "start"
};
function fd(e, t, n) {
    return pt(e, xr(t, n))
}
function _n(e, t) {
    return typeof e == "function" ? e(t) : e
}
function Rn(e) {
    return e.split("-")[0]
}
function gs(e) {
    return e.split("-")[1]
}
function Xf(e) {
    return e === "x" ? "y" : "x"
}
function qf(e) {
    return e === "y" ? "height" : "width"
}
const wE = new Set(["top", "bottom"]);
function an(e) {
    return wE.has(Rn(e)) ? "y" : "x"
}
function Jf(e) {
    return Xf(an(e))
}
function SE(e, t, n) {
    n === void 0 && (n = !1);
    const r = gs(e)
      , i = Jf(e)
      , s = qf(i);
    let o = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
    return t.reference[s] > t.floating[s] && (o = fl(o)),
    [o, fl(o)]
}
function bE(e) {
    const t = fl(e);
    return [hd(e), t, hd(t)]
}
function hd(e) {
    return e.replace(/start|end/g, t => xE[t])
}
const pm = ["left", "right"]
  , mm = ["right", "left"]
  , CE = ["top", "bottom"]
  , kE = ["bottom", "top"];
function TE(e, t, n) {
    switch (e) {
    case "top":
    case "bottom":
        return n ? t ? mm : pm : t ? pm : mm;
    case "left":
    case "right":
        return t ? CE : kE;
    default:
        return []
    }
}
function EE(e, t, n, r) {
    const i = gs(e);
    let s = TE(Rn(e), n === "start", r);
    return i && (s = s.map(o => o + "-" + i),
    t && (s = s.concat(s.map(hd)))),
    s
}
function fl(e) {
    return e.replace(/left|right|bottom|top/g, t => vE[t])
}
function PE(e) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...e
    }
}
function _x(e) {
    return typeof e != "number" ? PE(e) : {
        top: e,
        right: e,
        bottom: e,
        left: e
    }
}
function hl(e) {
    const {x: t, y: n, width: r, height: i} = e;
    return {
        width: r,
        height: i,
        top: n,
        left: t,
        right: t + r,
        bottom: n + i,
        x: t,
        y: n
    }
}
function gm(e, t, n) {
    let {reference: r, floating: i} = e;
    const s = an(t)
      , o = Jf(t)
      , a = qf(o)
      , l = Rn(t)
      , u = s === "y"
      , c = r.x + r.width / 2 - i.width / 2
      , d = r.y + r.height / 2 - i.height / 2
      , f = r[a] / 2 - i[a] / 2;
    let h;
    switch (l) {
    case "top":
        h = {
            x: c,
            y: r.y - i.height
        };
        break;
    case "bottom":
        h = {
            x: c,
            y: r.y + r.height
        };
        break;
    case "right":
        h = {
            x: r.x + r.width,
            y: d
        };
        break;
    case "left":
        h = {
            x: r.x - i.width,
            y: d
        };
        break;
    default:
        h = {
            x: r.x,
            y: r.y
        }
    }
    switch (gs(t)) {
    case "start":
        h[o] -= f * (n && u ? -1 : 1);
        break;
    case "end":
        h[o] += f * (n && u ? -1 : 1);
        break
    }
    return h
}
const _E = async (e, t, n) => {
    const {placement: r="bottom", strategy: i="absolute", middleware: s=[], platform: o} = n
      , a = s.filter(Boolean)
      , l = await (o.isRTL == null ? void 0 : o.isRTL(t));
    let u = await o.getElementRects({
        reference: e,
        floating: t,
        strategy: i
    })
      , {x: c, y: d} = gm(u, r, l)
      , f = r
      , h = {}
      , v = 0;
    for (let g = 0; g < a.length; g++) {
        const {name: x, fn: m} = a[g]
          , {x: p, y, data: b, reset: C} = await m({
            x: c,
            y: d,
            initialPlacement: r,
            placement: f,
            strategy: i,
            middlewareData: h,
            rects: u,
            platform: o,
            elements: {
                reference: e,
                floating: t
            }
        });
        c = p ?? c,
        d = y ?? d,
        h = {
            ...h,
            [x]: {
                ...h[x],
                ...b
            }
        },
        C && v <= 50 && (v++,
        typeof C == "object" && (C.placement && (f = C.placement),
        C.rects && (u = C.rects === !0 ? await o.getElementRects({
            reference: e,
            floating: t,
            strategy: i
        }) : C.rects),
        {x: c, y: d} = gm(u, f, l)),
        g = -1)
    }
    return {
        x: c,
        y: d,
        placement: f,
        strategy: i,
        middlewareData: h
    }
}
;
async function vo(e, t) {
    var n;
    t === void 0 && (t = {});
    const {x: r, y: i, platform: s, rects: o, elements: a, strategy: l} = e
      , {boundary: u="clippingAncestors", rootBoundary: c="viewport", elementContext: d="floating", altBoundary: f=!1, padding: h=0} = _n(t, e)
      , v = _x(h)
      , x = a[f ? d === "floating" ? "reference" : "floating" : d]
      , m = hl(await s.getClippingRect({
        element: (n = await (s.isElement == null ? void 0 : s.isElement(x))) == null || n ? x : x.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(a.floating)),
        boundary: u,
        rootBoundary: c,
        strategy: l
    }))
      , p = d === "floating" ? {
        x: r,
        y: i,
        width: o.floating.width,
        height: o.floating.height
    } : o.reference
      , y = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(a.floating))
      , b = await (s.isElement == null ? void 0 : s.isElement(y)) ? await (s.getScale == null ? void 0 : s.getScale(y)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }
      , C = hl(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: a,
        rect: p,
        offsetParent: y,
        strategy: l
    }) : p);
    return {
        top: (m.top - C.top + v.top) / b.y,
        bottom: (C.bottom - m.bottom + v.bottom) / b.y,
        left: (m.left - C.left + v.left) / b.x,
        right: (C.right - m.right + v.right) / b.x
    }
}
const RE = e => ({
    name: "arrow",
    options: e,
    async fn(t) {
        const {x: n, y: r, placement: i, rects: s, platform: o, elements: a, middlewareData: l} = t
          , {element: u, padding: c=0} = _n(e, t) || {};
        if (u == null)
            return {};
        const d = _x(c)
          , f = {
            x: n,
            y: r
        }
          , h = Jf(i)
          , v = qf(h)
          , g = await o.getDimensions(u)
          , x = h === "y"
          , m = x ? "top" : "left"
          , p = x ? "bottom" : "right"
          , y = x ? "clientHeight" : "clientWidth"
          , b = s.reference[v] + s.reference[h] - f[h] - s.floating[v]
          , C = f[h] - s.reference[h]
          , k = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(u));
        let T = k ? k[y] : 0;
        (!T || !await (o.isElement == null ? void 0 : o.isElement(k))) && (T = a.floating[y] || s.floating[v]);
        const E = b / 2 - C / 2
          , M = T / 2 - g[v] / 2 - 1
          , N = xr(d[m], M)
          , W = xr(d[p], M)
          , V = N
          , J = T - g[v] - W
          , D = T / 2 - g[v] / 2 + E
          , ee = fd(V, D, J)
          , K = !l.arrow && gs(i) != null && D !== ee && s.reference[v] / 2 - (D < V ? N : W) - g[v] / 2 < 0
          , B = K ? D < V ? D - V : D - J : 0;
        return {
            [h]: f[h] + B,
            data: {
                [h]: ee,
                centerOffset: D - ee - B,
                ...K && {
                    alignmentOffset: B
                }
            },
            reset: K
        }
    }
})
  , AE = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "flip",
        options: e,
        async fn(t) {
            var n, r;
            const {placement: i, middlewareData: s, rects: o, initialPlacement: a, platform: l, elements: u} = t
              , {mainAxis: c=!0, crossAxis: d=!0, fallbackPlacements: f, fallbackStrategy: h="bestFit", fallbackAxisSideDirection: v="none", flipAlignment: g=!0, ...x} = _n(e, t);
            if ((n = s.arrow) != null && n.alignmentOffset)
                return {};
            const m = Rn(i)
              , p = an(a)
              , y = Rn(a) === a
              , b = await (l.isRTL == null ? void 0 : l.isRTL(u.floating))
              , C = f || (y || !g ? [fl(a)] : bE(a))
              , k = v !== "none";
            !f && k && C.push(...EE(a, g, v, b));
            const T = [a, ...C]
              , E = await vo(t, x)
              , M = [];
            let N = ((r = s.flip) == null ? void 0 : r.overflows) || [];
            if (c && M.push(E[m]),
            d) {
                const D = SE(i, o, b);
                M.push(E[D[0]], E[D[1]])
            }
            if (N = [...N, {
                placement: i,
                overflows: M
            }],
            !M.every(D => D <= 0)) {
                var W, V;
                const D = (((W = s.flip) == null ? void 0 : W.index) || 0) + 1
                  , ee = T[D];
                if (ee && (!(d === "alignment" ? p !== an(ee) : !1) || N.every(P => P.overflows[0] > 0 && an(P.placement) === p)))
                    return {
                        data: {
                            index: D,
                            overflows: N
                        },
                        reset: {
                            placement: ee
                        }
                    };
                let K = (V = N.filter(B => B.overflows[0] <= 0).sort( (B, P) => B.overflows[1] - P.overflows[1])[0]) == null ? void 0 : V.placement;
                if (!K)
                    switch (h) {
                    case "bestFit":
                        {
                            var J;
                            const B = (J = N.filter(P => {
                                if (k) {
                                    const R = an(P.placement);
                                    return R === p || R === "y"
                                }
                                return !0
                            }
                            ).map(P => [P.placement, P.overflows.filter(R => R > 0).reduce( (R, L) => R + L, 0)]).sort( (P, R) => P[1] - R[1])[0]) == null ? void 0 : J[0];
                            B && (K = B);
                            break
                        }
                    case "initialPlacement":
                        K = a;
                        break
                    }
                if (i !== K)
                    return {
                        reset: {
                            placement: K
                        }
                    }
            }
            return {}
        }
    }
};
function ym(e, t) {
    return {
        top: e.top - t.height,
        right: e.right - t.width,
        bottom: e.bottom - t.height,
        left: e.left - t.width
    }
}
function vm(e) {
    return yE.some(t => e[t] >= 0)
}
const NE = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "hide",
        options: e,
        async fn(t) {
            const {rects: n} = t
              , {strategy: r="referenceHidden", ...i} = _n(e, t);
            switch (r) {
            case "referenceHidden":
                {
                    const s = await vo(t, {
                        ...i,
                        elementContext: "reference"
                    })
                      , o = ym(s, n.reference);
                    return {
                        data: {
                            referenceHiddenOffsets: o,
                            referenceHidden: vm(o)
                        }
                    }
                }
            case "escaped":
                {
                    const s = await vo(t, {
                        ...i,
                        altBoundary: !0
                    })
                      , o = ym(s, n.floating);
                    return {
                        data: {
                            escapedOffsets: o,
                            escaped: vm(o)
                        }
                    }
                }
            default:
                return {}
            }
        }
    }
}
  , Rx = new Set(["left", "top"]);
async function ME(e, t) {
    const {placement: n, platform: r, elements: i} = e
      , s = await (r.isRTL == null ? void 0 : r.isRTL(i.floating))
      , o = Rn(n)
      , a = gs(n)
      , l = an(n) === "y"
      , u = Rx.has(o) ? -1 : 1
      , c = s && l ? -1 : 1
      , d = _n(t, e);
    let {mainAxis: f, crossAxis: h, alignmentAxis: v} = typeof d == "number" ? {
        mainAxis: d,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: d.mainAxis || 0,
        crossAxis: d.crossAxis || 0,
        alignmentAxis: d.alignmentAxis
    };
    return a && typeof v == "number" && (h = a === "end" ? v * -1 : v),
    l ? {
        x: h * c,
        y: f * u
    } : {
        x: f * u,
        y: h * c
    }
}
const jE = function(e) {
    return e === void 0 && (e = 0),
    {
        name: "offset",
        options: e,
        async fn(t) {
            var n, r;
            const {x: i, y: s, placement: o, middlewareData: a} = t
              , l = await ME(t, e);
            return o === ((n = a.offset) == null ? void 0 : n.placement) && (r = a.arrow) != null && r.alignmentOffset ? {} : {
                x: i + l.x,
                y: s + l.y,
                data: {
                    ...l,
                    placement: o
                }
            }
        }
    }
}
  , OE = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "shift",
        options: e,
        async fn(t) {
            const {x: n, y: r, placement: i} = t
              , {mainAxis: s=!0, crossAxis: o=!1, limiter: a={
                fn: x => {
                    let {x: m, y: p} = x;
                    return {
                        x: m,
                        y: p
                    }
                }
            }, ...l} = _n(e, t)
              , u = {
                x: n,
                y: r
            }
              , c = await vo(t, l)
              , d = an(Rn(i))
              , f = Xf(d);
            let h = u[f]
              , v = u[d];
            if (s) {
                const x = f === "y" ? "top" : "left"
                  , m = f === "y" ? "bottom" : "right"
                  , p = h + c[x]
                  , y = h - c[m];
                h = fd(p, h, y)
            }
            if (o) {
                const x = d === "y" ? "top" : "left"
                  , m = d === "y" ? "bottom" : "right"
                  , p = v + c[x]
                  , y = v - c[m];
                v = fd(p, v, y)
            }
            const g = a.fn({
                ...t,
                [f]: h,
                [d]: v
            });
            return {
                ...g,
                data: {
                    x: g.x - n,
                    y: g.y - r,
                    enabled: {
                        [f]: s,
                        [d]: o
                    }
                }
            }
        }
    }
}
  , DE = function(e) {
    return e === void 0 && (e = {}),
    {
        options: e,
        fn(t) {
            const {x: n, y: r, placement: i, rects: s, middlewareData: o} = t
              , {offset: a=0, mainAxis: l=!0, crossAxis: u=!0} = _n(e, t)
              , c = {
                x: n,
                y: r
            }
              , d = an(i)
              , f = Xf(d);
            let h = c[f]
              , v = c[d];
            const g = _n(a, t)
              , x = typeof g == "number" ? {
                mainAxis: g,
                crossAxis: 0
            } : {
                mainAxis: 0,
                crossAxis: 0,
                ...g
            };
            if (l) {
                const y = f === "y" ? "height" : "width"
                  , b = s.reference[f] - s.floating[y] + x.mainAxis
                  , C = s.reference[f] + s.reference[y] - x.mainAxis;
                h < b ? h = b : h > C && (h = C)
            }
            if (u) {
                var m, p;
                const y = f === "y" ? "width" : "height"
                  , b = Rx.has(Rn(i))
                  , C = s.reference[d] - s.floating[y] + (b && ((m = o.offset) == null ? void 0 : m[d]) || 0) + (b ? 0 : x.crossAxis)
                  , k = s.reference[d] + s.reference[y] + (b ? 0 : ((p = o.offset) == null ? void 0 : p[d]) || 0) - (b ? x.crossAxis : 0);
                v < C ? v = C : v > k && (v = k)
            }
            return {
                [f]: h,
                [d]: v
            }
        }
    }
}
  , LE = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "size",
        options: e,
        async fn(t) {
            var n, r;
            const {placement: i, rects: s, platform: o, elements: a} = t
              , {apply: l= () => {}
            , ...u} = _n(e, t)
              , c = await vo(t, u)
              , d = Rn(i)
              , f = gs(i)
              , h = an(i) === "y"
              , {width: v, height: g} = s.floating;
            let x, m;
            d === "top" || d === "bottom" ? (x = d,
            m = f === (await (o.isRTL == null ? void 0 : o.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (m = d,
            x = f === "end" ? "top" : "bottom");
            const p = g - c.top - c.bottom
              , y = v - c.left - c.right
              , b = xr(g - c[x], p)
              , C = xr(v - c[m], y)
              , k = !t.middlewareData.shift;
            let T = b
              , E = C;
            if ((n = t.middlewareData.shift) != null && n.enabled.x && (E = y),
            (r = t.middlewareData.shift) != null && r.enabled.y && (T = p),
            k && !f) {
                const N = pt(c.left, 0)
                  , W = pt(c.right, 0)
                  , V = pt(c.top, 0)
                  , J = pt(c.bottom, 0);
                h ? E = v - 2 * (N !== 0 || W !== 0 ? N + W : pt(c.left, c.right)) : T = g - 2 * (V !== 0 || J !== 0 ? V + J : pt(c.top, c.bottom))
            }
            await l({
                ...t,
                availableWidth: E,
                availableHeight: T
            });
            const M = await o.getDimensions(a.floating);
            return v !== M.width || g !== M.height ? {
                reset: {
                    rects: !0
                }
            } : {}
        }
    }
};
function Yl() {
    return typeof window < "u"
}
function ys(e) {
    return Ax(e) ? (e.nodeName || "").toLowerCase() : "#document"
}
function yt(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}
function mn(e) {
    var t;
    return (t = (Ax(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement
}
function Ax(e) {
    return Yl() ? e instanceof Node || e instanceof yt(e).Node : !1
}
function Xt(e) {
    return Yl() ? e instanceof Element || e instanceof yt(e).Element : !1
}
function hn(e) {
    return Yl() ? e instanceof HTMLElement || e instanceof yt(e).HTMLElement : !1
}
function xm(e) {
    return !Yl() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof yt(e).ShadowRoot
}
const IE = new Set(["inline", "contents"]);
function Fo(e) {
    const {overflow: t, overflowX: n, overflowY: r, display: i} = qt(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !IE.has(i)
}
const VE = new Set(["table", "td", "th"]);
function FE(e) {
    return VE.has(ys(e))
}
const zE = [":popover-open", ":modal"];
function Xl(e) {
    return zE.some(t => {
        try {
            return e.matches(t)
        } catch {
            return !1
        }
    }
    )
}
const $E = ["transform", "translate", "scale", "rotate", "perspective"]
  , BE = ["transform", "translate", "scale", "rotate", "perspective", "filter"]
  , UE = ["paint", "layout", "strict", "content"];
function eh(e) {
    const t = th()
      , n = Xt(e) ? qt(e) : e;
    return $E.some(r => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || BE.some(r => (n.willChange || "").includes(r)) || UE.some(r => (n.contain || "").includes(r))
}
function WE(e) {
    let t = wr(e);
    for (; hn(t) && !is(t); ) {
        if (eh(t))
            return t;
        if (Xl(t))
            return null;
        t = wr(t)
    }
    return null
}
function th() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}
const HE = new Set(["html", "body", "#document"]);
function is(e) {
    return HE.has(ys(e))
}
function qt(e) {
    return yt(e).getComputedStyle(e)
}
function ql(e) {
    return Xt(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.scrollX,
        scrollTop: e.scrollY
    }
}
function wr(e) {
    if (ys(e) === "html")
        return e;
    const t = e.assignedSlot || e.parentNode || xm(e) && e.host || mn(e);
    return xm(t) ? t.host : t
}
function Nx(e) {
    const t = wr(e);
    return is(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : hn(t) && Fo(t) ? t : Nx(t)
}
function xo(e, t, n) {
    var r;
    t === void 0 && (t = []),
    n === void 0 && (n = !0);
    const i = Nx(e)
      , s = i === ((r = e.ownerDocument) == null ? void 0 : r.body)
      , o = yt(i);
    if (s) {
        const a = pd(o);
        return t.concat(o, o.visualViewport || [], Fo(i) ? i : [], a && n ? xo(a) : [])
    }
    return t.concat(i, xo(i, [], n))
}
function pd(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
}
function Mx(e) {
    const t = qt(e);
    let n = parseFloat(t.width) || 0
      , r = parseFloat(t.height) || 0;
    const i = hn(e)
      , s = i ? e.offsetWidth : n
      , o = i ? e.offsetHeight : r
      , a = dl(n) !== s || dl(r) !== o;
    return a && (n = s,
    r = o),
    {
        width: n,
        height: r,
        $: a
    }
}
function nh(e) {
    return Xt(e) ? e : e.contextElement
}
function zi(e) {
    const t = nh(e);
    if (!hn(t))
        return cn(1);
    const n = t.getBoundingClientRect()
      , {width: r, height: i, $: s} = Mx(t);
    let o = (s ? dl(n.width) : n.width) / r
      , a = (s ? dl(n.height) : n.height) / i;
    return (!o || !Number.isFinite(o)) && (o = 1),
    (!a || !Number.isFinite(a)) && (a = 1),
    {
        x: o,
        y: a
    }
}
const KE = cn(0);
function jx(e) {
    const t = yt(e);
    return !th() || !t.visualViewport ? KE : {
        x: t.visualViewport.offsetLeft,
        y: t.visualViewport.offsetTop
    }
}
function ZE(e, t, n) {
    return t === void 0 && (t = !1),
    !n || t && n !== yt(e) ? !1 : t
}
function ti(e, t, n, r) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !1);
    const i = e.getBoundingClientRect()
      , s = nh(e);
    let o = cn(1);
    t && (r ? Xt(r) && (o = zi(r)) : o = zi(e));
    const a = ZE(s, n, r) ? jx(s) : cn(0);
    let l = (i.left + a.x) / o.x
      , u = (i.top + a.y) / o.y
      , c = i.width / o.x
      , d = i.height / o.y;
    if (s) {
        const f = yt(s)
          , h = r && Xt(r) ? yt(r) : r;
        let v = f
          , g = pd(v);
        for (; g && r && h !== v; ) {
            const x = zi(g)
              , m = g.getBoundingClientRect()
              , p = qt(g)
              , y = m.left + (g.clientLeft + parseFloat(p.paddingLeft)) * x.x
              , b = m.top + (g.clientTop + parseFloat(p.paddingTop)) * x.y;
            l *= x.x,
            u *= x.y,
            c *= x.x,
            d *= x.y,
            l += y,
            u += b,
            v = yt(g),
            g = pd(v)
        }
    }
    return hl({
        width: c,
        height: d,
        x: l,
        y: u
    })
}
function rh(e, t) {
    const n = ql(e).scrollLeft;
    return t ? t.left + n : ti(mn(e)).left + n
}
function Ox(e, t, n) {
    n === void 0 && (n = !1);
    const r = e.getBoundingClientRect()
      , i = r.left + t.scrollLeft - (n ? 0 : rh(e, r))
      , s = r.top + t.scrollTop;
    return {
        x: i,
        y: s
    }
}
function GE(e) {
    let {elements: t, rect: n, offsetParent: r, strategy: i} = e;
    const s = i === "fixed"
      , o = mn(r)
      , a = t ? Xl(t.floating) : !1;
    if (r === o || a && s)
        return n;
    let l = {
        scrollLeft: 0,
        scrollTop: 0
    }
      , u = cn(1);
    const c = cn(0)
      , d = hn(r);
    if ((d || !d && !s) && ((ys(r) !== "body" || Fo(o)) && (l = ql(r)),
    hn(r))) {
        const h = ti(r);
        u = zi(r),
        c.x = h.x + r.clientLeft,
        c.y = h.y + r.clientTop
    }
    const f = o && !d && !s ? Ox(o, l, !0) : cn(0);
    return {
        width: n.width * u.x,
        height: n.height * u.y,
        x: n.x * u.x - l.scrollLeft * u.x + c.x + f.x,
        y: n.y * u.y - l.scrollTop * u.y + c.y + f.y
    }
}
function QE(e) {
    return Array.from(e.getClientRects())
}
function YE(e) {
    const t = mn(e)
      , n = ql(e)
      , r = e.ownerDocument.body
      , i = pt(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth)
      , s = pt(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
    let o = -n.scrollLeft + rh(e);
    const a = -n.scrollTop;
    return qt(r).direction === "rtl" && (o += pt(t.clientWidth, r.clientWidth) - i),
    {
        width: i,
        height: s,
        x: o,
        y: a
    }
}
function XE(e, t) {
    const n = yt(e)
      , r = mn(e)
      , i = n.visualViewport;
    let s = r.clientWidth
      , o = r.clientHeight
      , a = 0
      , l = 0;
    if (i) {
        s = i.width,
        o = i.height;
        const u = th();
        (!u || u && t === "fixed") && (a = i.offsetLeft,
        l = i.offsetTop)
    }
    return {
        width: s,
        height: o,
        x: a,
        y: l
    }
}
const qE = new Set(["absolute", "fixed"]);
function JE(e, t) {
    const n = ti(e, !0, t === "fixed")
      , r = n.top + e.clientTop
      , i = n.left + e.clientLeft
      , s = hn(e) ? zi(e) : cn(1)
      , o = e.clientWidth * s.x
      , a = e.clientHeight * s.y
      , l = i * s.x
      , u = r * s.y;
    return {
        width: o,
        height: a,
        x: l,
        y: u
    }
}
function wm(e, t, n) {
    let r;
    if (t === "viewport")
        r = XE(e, n);
    else if (t === "document")
        r = YE(mn(e));
    else if (Xt(t))
        r = JE(t, n);
    else {
        const i = jx(e);
        r = {
            x: t.x - i.x,
            y: t.y - i.y,
            width: t.width,
            height: t.height
        }
    }
    return hl(r)
}
function Dx(e, t) {
    const n = wr(e);
    return n === t || !Xt(n) || is(n) ? !1 : qt(n).position === "fixed" || Dx(n, t)
}
function eP(e, t) {
    const n = t.get(e);
    if (n)
        return n;
    let r = xo(e, [], !1).filter(a => Xt(a) && ys(a) !== "body")
      , i = null;
    const s = qt(e).position === "fixed";
    let o = s ? wr(e) : e;
    for (; Xt(o) && !is(o); ) {
        const a = qt(o)
          , l = eh(o);
        !l && a.position === "fixed" && (i = null),
        (s ? !l && !i : !l && a.position === "static" && !!i && qE.has(i.position) || Fo(o) && !l && Dx(e, o)) ? r = r.filter(c => c !== o) : i = a,
        o = wr(o)
    }
    return t.set(e, r),
    r
}
function tP(e) {
    let {element: t, boundary: n, rootBoundary: r, strategy: i} = e;
    const o = [...n === "clippingAncestors" ? Xl(t) ? [] : eP(t, this._c) : [].concat(n), r]
      , a = o[0]
      , l = o.reduce( (u, c) => {
        const d = wm(t, c, i);
        return u.top = pt(d.top, u.top),
        u.right = xr(d.right, u.right),
        u.bottom = xr(d.bottom, u.bottom),
        u.left = pt(d.left, u.left),
        u
    }
    , wm(t, a, i));
    return {
        width: l.right - l.left,
        height: l.bottom - l.top,
        x: l.left,
        y: l.top
    }
}
function nP(e) {
    const {width: t, height: n} = Mx(e);
    return {
        width: t,
        height: n
    }
}
function rP(e, t, n) {
    const r = hn(t)
      , i = mn(t)
      , s = n === "fixed"
      , o = ti(e, !0, s, t);
    let a = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const l = cn(0);
    function u() {
        l.x = rh(i)
    }
    if (r || !r && !s)
        if ((ys(t) !== "body" || Fo(i)) && (a = ql(t)),
        r) {
            const h = ti(t, !0, s, t);
            l.x = h.x + t.clientLeft,
            l.y = h.y + t.clientTop
        } else
            i && u();
    s && !r && i && u();
    const c = i && !r && !s ? Ox(i, a) : cn(0)
      , d = o.left + a.scrollLeft - l.x - c.x
      , f = o.top + a.scrollTop - l.y - c.y;
    return {
        x: d,
        y: f,
        width: o.width,
        height: o.height
    }
}
function Ku(e) {
    return qt(e).position === "static"
}
function Sm(e, t) {
    if (!hn(e) || qt(e).position === "fixed")
        return null;
    if (t)
        return t(e);
    let n = e.offsetParent;
    return mn(e) === n && (n = n.ownerDocument.body),
    n
}
function Lx(e, t) {
    const n = yt(e);
    if (Xl(e))
        return n;
    if (!hn(e)) {
        let i = wr(e);
        for (; i && !is(i); ) {
            if (Xt(i) && !Ku(i))
                return i;
            i = wr(i)
        }
        return n
    }
    let r = Sm(e, t);
    for (; r && FE(r) && Ku(r); )
        r = Sm(r, t);
    return r && is(r) && Ku(r) && !eh(r) ? n : r || WE(e) || n
}
const iP = async function(e) {
    const t = this.getOffsetParent || Lx
      , n = this.getDimensions
      , r = await n(e.floating);
    return {
        reference: rP(e.reference, await t(e.floating), e.strategy),
        floating: {
            x: 0,
            y: 0,
            width: r.width,
            height: r.height
        }
    }
};
function sP(e) {
    return qt(e).direction === "rtl"
}
const oP = {
    convertOffsetParentRelativeRectToViewportRelativeRect: GE,
    getDocumentElement: mn,
    getClippingRect: tP,
    getOffsetParent: Lx,
    getElementRects: iP,
    getClientRects: QE,
    getDimensions: nP,
    getScale: zi,
    isElement: Xt,
    isRTL: sP
};
function Ix(e, t) {
    return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
}
function aP(e, t) {
    let n = null, r;
    const i = mn(e);
    function s() {
        var a;
        clearTimeout(r),
        (a = n) == null || a.disconnect(),
        n = null
    }
    function o(a, l) {
        a === void 0 && (a = !1),
        l === void 0 && (l = 1),
        s();
        const u = e.getBoundingClientRect()
          , {left: c, top: d, width: f, height: h} = u;
        if (a || t(),
        !f || !h)
            return;
        const v = pa(d)
          , g = pa(i.clientWidth - (c + f))
          , x = pa(i.clientHeight - (d + h))
          , m = pa(c)
          , y = {
            rootMargin: -v + "px " + -g + "px " + -x + "px " + -m + "px",
            threshold: pt(0, xr(1, l)) || 1
        };
        let b = !0;
        function C(k) {
            const T = k[0].intersectionRatio;
            if (T !== l) {
                if (!b)
                    return o();
                T ? o(!1, T) : r = setTimeout( () => {
                    o(!1, 1e-7)
                }
                , 1e3)
            }
            T === 1 && !Ix(u, e.getBoundingClientRect()) && o(),
            b = !1
        }
        try {
            n = new IntersectionObserver(C,{
                ...y,
                root: i.ownerDocument
            })
        } catch {
            n = new IntersectionObserver(C,y)
        }
        n.observe(e)
    }
    return o(!0),
    s
}
function lP(e, t, n, r) {
    r === void 0 && (r = {});
    const {ancestorScroll: i=!0, ancestorResize: s=!0, elementResize: o=typeof ResizeObserver == "function", layoutShift: a=typeof IntersectionObserver == "function", animationFrame: l=!1} = r
      , u = nh(e)
      , c = i || s ? [...u ? xo(u) : [], ...xo(t)] : [];
    c.forEach(m => {
        i && m.addEventListener("scroll", n, {
            passive: !0
        }),
        s && m.addEventListener("resize", n)
    }
    );
    const d = u && a ? aP(u, n) : null;
    let f = -1
      , h = null;
    o && (h = new ResizeObserver(m => {
        let[p] = m;
        p && p.target === u && h && (h.unobserve(t),
        cancelAnimationFrame(f),
        f = requestAnimationFrame( () => {
            var y;
            (y = h) == null || y.observe(t)
        }
        )),
        n()
    }
    ),
    u && !l && h.observe(u),
    h.observe(t));
    let v, g = l ? ti(e) : null;
    l && x();
    function x() {
        const m = ti(e);
        g && !Ix(g, m) && n(),
        g = m,
        v = requestAnimationFrame(x)
    }
    return n(),
    () => {
        var m;
        c.forEach(p => {
            i && p.removeEventListener("scroll", n),
            s && p.removeEventListener("resize", n)
        }
        ),
        d == null || d(),
        (m = h) == null || m.disconnect(),
        h = null,
        l && cancelAnimationFrame(v)
    }
}
const uP = jE
  , cP = OE
  , dP = AE
  , fP = LE
  , hP = NE
  , bm = RE
  , pP = DE
  , mP = (e, t, n) => {
    const r = new Map
      , i = {
        platform: oP,
        ...n
    }
      , s = {
        ...i.platform,
        _c: r
    };
    return _E(e, t, {
        ...i,
        platform: s
    })
}
;
var gP = typeof document < "u"
  , yP = function() {}
  , Oa = gP ? w.useLayoutEffect : yP;
function pl(e, t) {
    if (e === t)
        return !0;
    if (typeof e != typeof t)
        return !1;
    if (typeof e == "function" && e.toString() === t.toString())
        return !0;
    let n, r, i;
    if (e && t && typeof e == "object") {
        if (Array.isArray(e)) {
            if (n = e.length,
            n !== t.length)
                return !1;
            for (r = n; r-- !== 0; )
                if (!pl(e[r], t[r]))
                    return !1;
            return !0
        }
        if (i = Object.keys(e),
        n = i.length,
        n !== Object.keys(t).length)
            return !1;
        for (r = n; r-- !== 0; )
            if (!{}.hasOwnProperty.call(t, i[r]))
                return !1;
        for (r = n; r-- !== 0; ) {
            const s = i[r];
            if (!(s === "_owner" && e.$$typeof) && !pl(e[s], t[s]))
                return !1
        }
        return !0
    }
    return e !== e && t !== t
}
function Vx(e) {
    return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}
function Cm(e, t) {
    const n = Vx(e);
    return Math.round(t * n) / n
}
function Zu(e) {
    const t = w.useRef(e);
    return Oa( () => {
        t.current = e
    }
    ),
    t
}
function vP(e) {
    e === void 0 && (e = {});
    const {placement: t="bottom", strategy: n="absolute", middleware: r=[], platform: i, elements: {reference: s, floating: o}={}, transform: a=!0, whileElementsMounted: l, open: u} = e
      , [c,d] = w.useState({
        x: 0,
        y: 0,
        strategy: n,
        placement: t,
        middlewareData: {},
        isPositioned: !1
    })
      , [f,h] = w.useState(r);
    pl(f, r) || h(r);
    const [v,g] = w.useState(null)
      , [x,m] = w.useState(null)
      , p = w.useCallback(P => {
        P !== k.current && (k.current = P,
        g(P))
    }
    , [])
      , y = w.useCallback(P => {
        P !== T.current && (T.current = P,
        m(P))
    }
    , [])
      , b = s || v
      , C = o || x
      , k = w.useRef(null)
      , T = w.useRef(null)
      , E = w.useRef(c)
      , M = l != null
      , N = Zu(l)
      , W = Zu(i)
      , V = Zu(u)
      , J = w.useCallback( () => {
        if (!k.current || !T.current)
            return;
        const P = {
            placement: t,
            strategy: n,
            middleware: f
        };
        W.current && (P.platform = W.current),
        mP(k.current, T.current, P).then(R => {
            const L = {
                ...R,
                isPositioned: V.current !== !1
            };
            D.current && !pl(E.current, L) && (E.current = L,
            Io.flushSync( () => {
                d(L)
            }
            ))
        }
        )
    }
    , [f, t, n, W, V]);
    Oa( () => {
        u === !1 && E.current.isPositioned && (E.current.isPositioned = !1,
        d(P => ({
            ...P,
            isPositioned: !1
        })))
    }
    , [u]);
    const D = w.useRef(!1);
    Oa( () => (D.current = !0,
    () => {
        D.current = !1
    }
    ), []),
    Oa( () => {
        if (b && (k.current = b),
        C && (T.current = C),
        b && C) {
            if (N.current)
                return N.current(b, C, J);
            J()
        }
    }
    , [b, C, J, N, M]);
    const ee = w.useMemo( () => ({
        reference: k,
        floating: T,
        setReference: p,
        setFloating: y
    }), [p, y])
      , K = w.useMemo( () => ({
        reference: b,
        floating: C
    }), [b, C])
      , B = w.useMemo( () => {
        const P = {
            position: n,
            left: 0,
            top: 0
        };
        if (!K.floating)
            return P;
        const R = Cm(K.floating, c.x)
          , L = Cm(K.floating, c.y);
        return a ? {
            ...P,
            transform: "translate(" + R + "px, " + L + "px)",
            ...Vx(K.floating) >= 1.5 && {
                willChange: "transform"
            }
        } : {
            position: n,
            left: R,
            top: L
        }
    }
    , [n, a, K.floating, c.x, c.y]);
    return w.useMemo( () => ({
        ...c,
        update: J,
        refs: ee,
        elements: K,
        floatingStyles: B
    }), [c, J, ee, K, B])
}
const xP = e => {
    function t(n) {
        return {}.hasOwnProperty.call(n, "current")
    }
    return {
        name: "arrow",
        options: e,
        fn(n) {
            const {element: r, padding: i} = typeof e == "function" ? e(n) : e;
            return r && t(r) ? r.current != null ? bm({
                element: r.current,
                padding: i
            }).fn(n) : {} : r ? bm({
                element: r,
                padding: i
            }).fn(n) : {}
        }
    }
}
  , wP = (e, t) => ({
    ...uP(e),
    options: [e, t]
})
  , SP = (e, t) => ({
    ...cP(e),
    options: [e, t]
})
  , bP = (e, t) => ({
    ...pP(e),
    options: [e, t]
})
  , CP = (e, t) => ({
    ...dP(e),
    options: [e, t]
})
  , kP = (e, t) => ({
    ...fP(e),
    options: [e, t]
})
  , TP = (e, t) => ({
    ...hP(e),
    options: [e, t]
})
  , EP = (e, t) => ({
    ...xP(e),
    options: [e, t]
});
var PP = "Arrow"
  , Fx = w.forwardRef( (e, t) => {
    const {children: n, width: r=10, height: i=5, ...s} = e;
    return S.jsx(ft.svg, {
        ...s,
        ref: t,
        width: r,
        height: i,
        viewBox: "0 0 30 10",
        preserveAspectRatio: "none",
        children: e.asChild ? n : S.jsx("polygon", {
            points: "0,0 30,0 15,10"
        })
    })
}
);
Fx.displayName = PP;
var _P = Fx;
function RP(e) {
    const [t,n] = w.useState(void 0);
    return vr( () => {
        if (e) {
            n({
                width: e.offsetWidth,
                height: e.offsetHeight
            });
            const r = new ResizeObserver(i => {
                if (!Array.isArray(i) || !i.length)
                    return;
                const s = i[0];
                let o, a;
                if ("borderBoxSize"in s) {
                    const l = s.borderBoxSize
                      , u = Array.isArray(l) ? l[0] : l;
                    o = u.inlineSize,
                    a = u.blockSize
                } else
                    o = e.offsetWidth,
                    a = e.offsetHeight;
                n({
                    width: o,
                    height: a
                })
            }
            );
            return r.observe(e, {
                box: "border-box"
            }),
            () => r.unobserve(e)
        } else
            n(void 0)
    }
    , [e]),
    t
}
var zx = "Popper"
  , [$x,Bx] = Zl(zx)
  , [tO,Ux] = $x(zx)
  , Wx = "PopperAnchor"
  , Hx = w.forwardRef( (e, t) => {
    const {__scopePopper: n, virtualRef: r, ...i} = e
      , s = Ux(Wx, n)
      , o = w.useRef(null)
      , a = Yt(t, o);
    return w.useEffect( () => {
        s.onAnchorChange((r == null ? void 0 : r.current) || o.current)
    }
    ),
    r ? null : S.jsx(ft.div, {
        ...i,
        ref: a
    })
}
);
Hx.displayName = Wx;
var ih = "PopperContent"
  , [AP,NP] = $x(ih)
  , Kx = w.forwardRef( (e, t) => {
    var ue, oi, jn, Rr, On, ai;
    const {__scopePopper: n, side: r="bottom", sideOffset: i=0, align: s="center", alignOffset: o=0, arrowPadding: a=0, avoidCollisions: l=!0, collisionBoundary: u=[], collisionPadding: c=0, sticky: d="partial", hideWhenDetached: f=!1, updatePositionStrategy: h="optimized", onPlaced: v, ...g} = e
      , x = Ux(ih, n)
      , [m,p] = w.useState(null)
      , y = Yt(t, Dn => p(Dn))
      , [b,C] = w.useState(null)
      , k = RP(b)
      , T = (k == null ? void 0 : k.width) ?? 0
      , E = (k == null ? void 0 : k.height) ?? 0
      , M = r + (s !== "center" ? "-" + s : "")
      , N = typeof c == "number" ? c : {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...c
    }
      , W = Array.isArray(u) ? u : [u]
      , V = W.length > 0
      , J = {
        padding: N,
        boundary: W.filter(jP),
        altBoundary: V
    }
      , {refs: D, floatingStyles: ee, placement: K, isPositioned: B, middlewareData: P} = vP({
        strategy: "fixed",
        placement: M,
        whileElementsMounted: (...Dn) => lP(...Dn, {
            animationFrame: h === "always"
        }),
        elements: {
            reference: x.anchor
        },
        middleware: [wP({
            mainAxis: i + E,
            alignmentAxis: o
        }), l && SP({
            mainAxis: !0,
            crossAxis: !1,
            limiter: d === "partial" ? bP() : void 0,
            ...J
        }), l && CP({
            ...J
        }), kP({
            ...J,
            apply: ({elements: Dn, rects: Wo, availableWidth: du, availableHeight: Ho}) => {
                const {width: fu, height: Ss} = Wo.reference
                  , li = Dn.floating.style;
                li.setProperty("--radix-popper-available-width", `${du}px`),
                li.setProperty("--radix-popper-available-height", `${Ho}px`),
                li.setProperty("--radix-popper-anchor-width", `${fu}px`),
                li.setProperty("--radix-popper-anchor-height", `${Ss}px`)
            }
        }), b && EP({
            element: b,
            padding: a
        }), OP({
            arrowWidth: T,
            arrowHeight: E
        }), f && TP({
            strategy: "referenceHidden",
            ...J
        })]
    })
      , [R,L] = Qx(K)
      , Z = yr(v);
    vr( () => {
        B && (Z == null || Z())
    }
    , [B, Z]);
    const H = (ue = P.arrow) == null ? void 0 : ue.x
      , ne = (oi = P.arrow) == null ? void 0 : oi.y
      , ie = ((jn = P.arrow) == null ? void 0 : jn.centerOffset) !== 0
      , [_e,$e] = w.useState();
    return vr( () => {
        m && $e(window.getComputedStyle(m).zIndex)
    }
    , [m]),
    S.jsx("div", {
        ref: D.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
            ...ee,
            transform: B ? ee.transform : "translate(0, -200%)",
            minWidth: "max-content",
            zIndex: _e,
            "--radix-popper-transform-origin": [(Rr = P.transformOrigin) == null ? void 0 : Rr.x, (On = P.transformOrigin) == null ? void 0 : On.y].join(" "),
            ...((ai = P.hide) == null ? void 0 : ai.referenceHidden) && {
                visibility: "hidden",
                pointerEvents: "none"
            }
        },
        dir: e.dir,
        children: S.jsx(AP, {
            scope: n,
            placedSide: R,
            onArrowChange: C,
            arrowX: H,
            arrowY: ne,
            shouldHideArrow: ie,
            children: S.jsx(ft.div, {
                "data-side": R,
                "data-align": L,
                ...g,
                ref: y,
                style: {
                    ...g.style,
                    animation: B ? void 0 : "none"
                }
            })
        })
    })
}
);
Kx.displayName = ih;
var Zx = "PopperArrow"
  , MP = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
}
  , Gx = w.forwardRef(function(t, n) {
    const {__scopePopper: r, ...i} = t
      , s = NP(Zx, r)
      , o = MP[s.placedSide];
    return S.jsx("span", {
        ref: s.onArrowChange,
        style: {
            position: "absolute",
            left: s.arrowX,
            top: s.arrowY,
            [o]: 0,
            transformOrigin: {
                top: "",
                right: "0 0",
                bottom: "center 0",
                left: "100% 0"
            }[s.placedSide],
            transform: {
                top: "translateY(100%)",
                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                bottom: "rotate(180deg)",
                left: "translateY(50%) rotate(-90deg) translateX(50%)"
            }[s.placedSide],
            visibility: s.shouldHideArrow ? "hidden" : void 0
        },
        children: S.jsx(_P, {
            ...i,
            ref: n,
            style: {
                ...i.style,
                display: "block"
            }
        })
    })
});
Gx.displayName = Zx;
function jP(e) {
    return e !== null
}
var OP = e => ({
    name: "transformOrigin",
    options: e,
    fn(t) {
        var x, m, p;
        const {placement: n, rects: r, middlewareData: i} = t
          , o = ((x = i.arrow) == null ? void 0 : x.centerOffset) !== 0
          , a = o ? 0 : e.arrowWidth
          , l = o ? 0 : e.arrowHeight
          , [u,c] = Qx(n)
          , d = {
            start: "0%",
            center: "50%",
            end: "100%"
        }[c]
          , f = (((m = i.arrow) == null ? void 0 : m.x) ?? 0) + a / 2
          , h = (((p = i.arrow) == null ? void 0 : p.y) ?? 0) + l / 2;
        let v = ""
          , g = "";
        return u === "bottom" ? (v = o ? d : `${f}px`,
        g = `${-l}px`) : u === "top" ? (v = o ? d : `${f}px`,
        g = `${r.floating.height + l}px`) : u === "right" ? (v = `${-l}px`,
        g = o ? d : `${h}px`) : u === "left" && (v = `${r.floating.width + l}px`,
        g = o ? d : `${h}px`),
        {
            data: {
                x: v,
                y: g
            }
        }
    }
});
function Qx(e) {
    const [t,n="center"] = e.split("-");
    return [t, n]
}
var DP = Hx
  , LP = Kx
  , IP = Gx
  , [Jl,nO] = Zl("Tooltip", [Bx])
  , sh = Bx()
  , Yx = "TooltipProvider"
  , VP = 700
  , km = "tooltip.open"
  , [FP,Xx] = Jl(Yx)
  , qx = e => {
    const {__scopeTooltip: t, delayDuration: n=VP, skipDelayDuration: r=300, disableHoverableContent: i=!1, children: s} = e
      , o = w.useRef(!0)
      , a = w.useRef(!1)
      , l = w.useRef(0);
    return w.useEffect( () => {
        const u = l.current;
        return () => window.clearTimeout(u)
    }
    , []),
    S.jsx(FP, {
        scope: t,
        isOpenDelayedRef: o,
        delayDuration: n,
        onOpen: w.useCallback( () => {
            window.clearTimeout(l.current),
            o.current = !1
        }
        , []),
        onClose: w.useCallback( () => {
            window.clearTimeout(l.current),
            l.current = window.setTimeout( () => o.current = !0, r)
        }
        , [r]),
        isPointerInTransitRef: a,
        onPointerInTransitChange: w.useCallback(u => {
            a.current = u
        }
        , []),
        disableHoverableContent: i,
        children: s
    })
}
;
qx.displayName = Yx;
var Jx = "Tooltip"
  , [rO,eu] = Jl(Jx)
  , md = "TooltipTrigger"
  , zP = w.forwardRef( (e, t) => {
    const {__scopeTooltip: n, ...r} = e
      , i = eu(md, n)
      , s = Xx(md, n)
      , o = sh(n)
      , a = w.useRef(null)
      , l = Yt(t, a, i.onTriggerChange)
      , u = w.useRef(!1)
      , c = w.useRef(!1)
      , d = w.useCallback( () => u.current = !1, []);
    return w.useEffect( () => () => document.removeEventListener("pointerup", d), [d]),
    S.jsx(DP, {
        asChild: !0,
        ...o,
        children: S.jsx(ft.button, {
            "aria-describedby": i.open ? i.contentId : void 0,
            "data-state": i.stateAttribute,
            ...r,
            ref: l,
            onPointerMove: je(e.onPointerMove, f => {
                f.pointerType !== "touch" && !c.current && !s.isPointerInTransitRef.current && (i.onTriggerEnter(),
                c.current = !0)
            }
            ),
            onPointerLeave: je(e.onPointerLeave, () => {
                i.onTriggerLeave(),
                c.current = !1
            }
            ),
            onPointerDown: je(e.onPointerDown, () => {
                i.open && i.onClose(),
                u.current = !0,
                document.addEventListener("pointerup", d, {
                    once: !0
                })
            }
            ),
            onFocus: je(e.onFocus, () => {
                u.current || i.onOpen()
            }
            ),
            onBlur: je(e.onBlur, i.onClose),
            onClick: je(e.onClick, i.onClose)
        })
    })
}
);
zP.displayName = md;
var $P = "TooltipPortal"
  , [iO,BP] = Jl($P, {
    forceMount: void 0
})
  , ss = "TooltipContent"
  , ew = w.forwardRef( (e, t) => {
    const n = BP(ss, e.__scopeTooltip)
      , {forceMount: r=n.forceMount, side: i="top", ...s} = e
      , o = eu(ss, e.__scopeTooltip);
    return S.jsx(Hf, {
        present: r || o.open,
        children: o.disableHoverableContent ? S.jsx(tw, {
            side: i,
            ...s,
            ref: t
        }) : S.jsx(UP, {
            side: i,
            ...s,
            ref: t
        })
    })
}
)
  , UP = w.forwardRef( (e, t) => {
    const n = eu(ss, e.__scopeTooltip)
      , r = Xx(ss, e.__scopeTooltip)
      , i = w.useRef(null)
      , s = Yt(t, i)
      , [o,a] = w.useState(null)
      , {trigger: l, onClose: u} = n
      , c = i.current
      , {onPointerInTransitChange: d} = r
      , f = w.useCallback( () => {
        a(null),
        d(!1)
    }
    , [d])
      , h = w.useCallback( (v, g) => {
        const x = v.currentTarget
          , m = {
            x: v.clientX,
            y: v.clientY
        }
          , p = GP(m, x.getBoundingClientRect())
          , y = QP(m, p)
          , b = YP(g.getBoundingClientRect())
          , C = qP([...y, ...b]);
        a(C),
        d(!0)
    }
    , [d]);
    return w.useEffect( () => () => f(), [f]),
    w.useEffect( () => {
        if (l && c) {
            const v = x => h(x, c)
              , g = x => h(x, l);
            return l.addEventListener("pointerleave", v),
            c.addEventListener("pointerleave", g),
            () => {
                l.removeEventListener("pointerleave", v),
                c.removeEventListener("pointerleave", g)
            }
        }
    }
    , [l, c, h, f]),
    w.useEffect( () => {
        if (o) {
            const v = g => {
                const x = g.target
                  , m = {
                    x: g.clientX,
                    y: g.clientY
                }
                  , p = (l == null ? void 0 : l.contains(x)) || (c == null ? void 0 : c.contains(x))
                  , y = !XP(m, o);
                p ? f() : y && (f(),
                u())
            }
            ;
            return document.addEventListener("pointermove", v),
            () => document.removeEventListener("pointermove", v)
        }
    }
    , [l, c, o, u, f]),
    S.jsx(tw, {
        ...e,
        ref: s
    })
}
)
  , [WP,HP] = Jl(Jx, {
    isInside: !1
})
  , KP = GC("TooltipContent")
  , tw = w.forwardRef( (e, t) => {
    const {__scopeTooltip: n, children: r, "aria-label": i, onEscapeKeyDown: s, onPointerDownOutside: o, ...a} = e
      , l = eu(ss, n)
      , u = sh(n)
      , {onClose: c} = l;
    return w.useEffect( () => (document.addEventListener(km, c),
    () => document.removeEventListener(km, c)), [c]),
    w.useEffect( () => {
        if (l.trigger) {
            const d = f => {
                const h = f.target;
                h != null && h.contains(l.trigger) && c()
            }
            ;
            return window.addEventListener("scroll", d, {
                capture: !0
            }),
            () => window.removeEventListener("scroll", d, {
                capture: !0
            })
        }
    }
    , [l.trigger, c]),
    S.jsx(Wf, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: s,
        onPointerDownOutside: o,
        onFocusOutside: d => d.preventDefault(),
        onDismiss: c,
        children: S.jsxs(LP, {
            "data-state": l.stateAttribute,
            ...u,
            ...a,
            ref: t,
            style: {
                ...a.style,
                "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [S.jsx(KP, {
                children: r
            }), S.jsx(WP, {
                scope: n,
                isInside: !0,
                children: S.jsx(xk, {
                    id: l.contentId,
                    role: "tooltip",
                    children: i || r
                })
            })]
        })
    })
}
);
ew.displayName = ss;
var nw = "TooltipArrow"
  , ZP = w.forwardRef( (e, t) => {
    const {__scopeTooltip: n, ...r} = e
      , i = sh(n);
    return HP(nw, n).isInside ? null : S.jsx(IP, {
        ...i,
        ...r,
        ref: t
    })
}
);
ZP.displayName = nw;
function GP(e, t) {
    const n = Math.abs(t.top - e.y)
      , r = Math.abs(t.bottom - e.y)
      , i = Math.abs(t.right - e.x)
      , s = Math.abs(t.left - e.x);
    switch (Math.min(n, r, i, s)) {
    case s:
        return "left";
    case i:
        return "right";
    case n:
        return "top";
    case r:
        return "bottom";
    default:
        throw new Error("unreachable")
    }
}
function QP(e, t, n=5) {
    const r = [];
    switch (t) {
    case "top":
        r.push({
            x: e.x - n,
            y: e.y + n
        }, {
            x: e.x + n,
            y: e.y + n
        });
        break;
    case "bottom":
        r.push({
            x: e.x - n,
            y: e.y - n
        }, {
            x: e.x + n,
            y: e.y - n
        });
        break;
    case "left":
        r.push({
            x: e.x + n,
            y: e.y - n
        }, {
            x: e.x + n,
            y: e.y + n
        });
        break;
    case "right":
        r.push({
            x: e.x - n,
            y: e.y - n
        }, {
            x: e.x - n,
            y: e.y + n
        });
        break
    }
    return r
}
function YP(e) {
    const {top: t, right: n, bottom: r, left: i} = e;
    return [{
        x: i,
        y: t
    }, {
        x: n,
        y: t
    }, {
        x: n,
        y: r
    }, {
        x: i,
        y: r
    }]
}
function XP(e, t) {
    const {x: n, y: r} = e;
    let i = !1;
    for (let s = 0, o = t.length - 1; s < t.length; o = s++) {
        const a = t[s]
          , l = t[o]
          , u = a.x
          , c = a.y
          , d = l.x
          , f = l.y;
        c > r != f > r && n < (d - u) * (r - c) / (f - c) + u && (i = !i)
    }
    return i
}
function qP(e) {
    const t = e.slice();
    return t.sort( (n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0),
    JP(t)
}
function JP(e) {
    if (e.length <= 1)
        return e.slice();
    const t = [];
    for (let r = 0; r < e.length; r++) {
        const i = e[r];
        for (; t.length >= 2; ) {
            const s = t[t.length - 1]
              , o = t[t.length - 2];
            if ((s.x - o.x) * (i.y - o.y) >= (s.y - o.y) * (i.x - o.x))
                t.pop();
            else
                break
        }
        t.push(i)
    }
    t.pop();
    const n = [];
    for (let r = e.length - 1; r >= 0; r--) {
        const i = e[r];
        for (; n.length >= 2; ) {
            const s = n[n.length - 1]
              , o = n[n.length - 2];
            if ((s.x - o.x) * (i.y - o.y) >= (s.y - o.y) * (i.x - o.x))
                n.pop();
            else
                break
        }
        n.push(i)
    }
    return n.pop(),
    t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n)
}
var e_ = qx
  , rw = ew;
const t_ = e_
  , n_ = w.forwardRef( ({className: e, sideOffset: t=4, ...n}, r) => S.jsx(rw, {
    ref: r,
    sideOffset: t,
    className: si("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
    ...n
}));
n_.displayName = rw.displayName;
var tu = class {
    constructor() {
        this.listeners = new Set,
        this.subscribe = this.subscribe.bind(this)
    }
    subscribe(e) {
        return this.listeners.add(e),
        this.onSubscribe(),
        () => {
            this.listeners.delete(e),
            this.onUnsubscribe()
        }
    }
    hasListeners() {
        return this.listeners.size > 0
    }
    onSubscribe() {}
    onUnsubscribe() {}
}
  , nu = typeof window > "u" || "Deno"in globalThis;
function Bt() {}
function r_(e, t) {
    return typeof e == "function" ? e(t) : e
}
function i_(e) {
    return typeof e == "number" && e >= 0 && e !== 1 / 0
}
function s_(e, t) {
    return Math.max(e + (t || 0) - Date.now(), 0)
}
function gd(e, t) {
    return typeof e == "function" ? e(t) : e
}
function o_(e, t) {
    return typeof e == "function" ? e(t) : e
}
function Tm(e, t) {
    const {type: n="all", exact: r, fetchStatus: i, predicate: s, queryKey: o, stale: a} = e;
    if (o) {
        if (r) {
            if (t.queryHash !== oh(o, t.options))
                return !1
        } else if (!So(t.queryKey, o))
            return !1
    }
    if (n !== "all") {
        const l = t.isActive();
        if (n === "active" && !l || n === "inactive" && l)
            return !1
    }
    return !(typeof a == "boolean" && t.isStale() !== a || i && i !== t.state.fetchStatus || s && !s(t))
}
function Em(e, t) {
    const {exact: n, status: r, predicate: i, mutationKey: s} = e;
    if (s) {
        if (!t.options.mutationKey)
            return !1;
        if (n) {
            if (wo(t.options.mutationKey) !== wo(s))
                return !1
        } else if (!So(t.options.mutationKey, s))
            return !1
    }
    return !(r && t.state.status !== r || i && !i(t))
}
function oh(e, t) {
    return ((t == null ? void 0 : t.queryKeyHashFn) || wo)(e)
}
function wo(e) {
    return JSON.stringify(e, (t, n) => yd(n) ? Object.keys(n).sort().reduce( (r, i) => (r[i] = n[i],
    r), {}) : n)
}
function So(e, t) {
    return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? Object.keys(t).every(n => So(e[n], t[n])) : !1
}
function iw(e, t) {
    if (e === t)
        return e;
    const n = Pm(e) && Pm(t);
    if (n || yd(e) && yd(t)) {
        const r = n ? e : Object.keys(e)
          , i = r.length
          , s = n ? t : Object.keys(t)
          , o = s.length
          , a = n ? [] : {}
          , l = new Set(r);
        let u = 0;
        for (let c = 0; c < o; c++) {
            const d = n ? c : s[c];
            (!n && l.has(d) || n) && e[d] === void 0 && t[d] === void 0 ? (a[d] = void 0,
            u++) : (a[d] = iw(e[d], t[d]),
            a[d] === e[d] && e[d] !== void 0 && u++)
        }
        return i === o && u === i ? e : a
    }
    return t
}
function Pm(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length
}
function yd(e) {
    if (!_m(e))
        return !1;
    const t = e.constructor;
    if (t === void 0)
        return !0;
    const n = t.prototype;
    return !(!_m(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype)
}
function _m(e) {
    return Object.prototype.toString.call(e) === "[object Object]"
}
function a_(e) {
    return new Promise(t => {
        setTimeout(t, e)
    }
    )
}
function l_(e, t, n) {
    return typeof n.structuralSharing == "function" ? n.structuralSharing(e, t) : n.structuralSharing !== !1 ? iw(e, t) : t
}
function u_(e, t, n=0) {
    const r = [...e, t];
    return n && r.length > n ? r.slice(1) : r
}
function c_(e, t, n=0) {
    const r = [t, ...e];
    return n && r.length > n ? r.slice(0, -1) : r
}
var ah = Symbol();
function sw(e, t) {
    return !e.queryFn && (t != null && t.initialPromise) ? () => t.initialPromise : !e.queryFn || e.queryFn === ah ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn
}
var $r, Yn, Ui, vy, d_ = (vy = class extends tu {
    constructor() {
        super();
        ae(this, $r);
        ae(this, Yn);
        ae(this, Ui);
        X(this, Ui, t => {
            if (!nu && window.addEventListener) {
                const n = () => t();
                return window.addEventListener("visibilitychange", n, !1),
                () => {
                    window.removeEventListener("visibilitychange", n)
                }
            }
        }
        )
    }
    onSubscribe() {
        _(this, Yn) || this.setEventListener(_(this, Ui))
    }
    onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = _(this, Yn)) == null || t.call(this),
        X(this, Yn, void 0))
    }
    setEventListener(t) {
        var n;
        X(this, Ui, t),
        (n = _(this, Yn)) == null || n.call(this),
        X(this, Yn, t(r => {
            typeof r == "boolean" ? this.setFocused(r) : this.onFocus()
        }
        ))
    }
    setFocused(t) {
        _(this, $r) !== t && (X(this, $r, t),
        this.onFocus())
    }
    onFocus() {
        const t = this.isFocused();
        this.listeners.forEach(n => {
            n(t)
        }
        )
    }
    isFocused() {
        var t;
        return typeof _(this, $r) == "boolean" ? _(this, $r) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden"
    }
}
,
$r = new WeakMap,
Yn = new WeakMap,
Ui = new WeakMap,
vy), ow = new d_, Wi, Xn, Hi, xy, f_ = (xy = class extends tu {
    constructor() {
        super();
        ae(this, Wi, !0);
        ae(this, Xn);
        ae(this, Hi);
        X(this, Hi, t => {
            if (!nu && window.addEventListener) {
                const n = () => t(!0)
                  , r = () => t(!1);
                return window.addEventListener("online", n, !1),
                window.addEventListener("offline", r, !1),
                () => {
                    window.removeEventListener("online", n),
                    window.removeEventListener("offline", r)
                }
            }
        }
        )
    }
    onSubscribe() {
        _(this, Xn) || this.setEventListener(_(this, Hi))
    }
    onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = _(this, Xn)) == null || t.call(this),
        X(this, Xn, void 0))
    }
    setEventListener(t) {
        var n;
        X(this, Hi, t),
        (n = _(this, Xn)) == null || n.call(this),
        X(this, Xn, t(this.setOnline.bind(this)))
    }
    setOnline(t) {
        _(this, Wi) !== t && (X(this, Wi, t),
        this.listeners.forEach(r => {
            r(t)
        }
        ))
    }
    isOnline() {
        return _(this, Wi)
    }
}
,
Wi = new WeakMap,
Xn = new WeakMap,
Hi = new WeakMap,
xy), ml = new f_;
function h_() {
    let e, t;
    const n = new Promise( (i, s) => {
        e = i,
        t = s
    }
    );
    n.status = "pending",
    n.catch( () => {}
    );
    function r(i) {
        Object.assign(n, i),
        delete n.resolve,
        delete n.reject
    }
    return n.resolve = i => {
        r({
            status: "fulfilled",
            value: i
        }),
        e(i)
    }
    ,
    n.reject = i => {
        r({
            status: "rejected",
            reason: i
        }),
        t(i)
    }
    ,
    n
}
function p_(e) {
    return Math.min(1e3 * 2 ** e, 3e4)
}
function aw(e) {
    return (e ?? "online") === "online" ? ml.isOnline() : !0
}
var lw = class extends Error {
    constructor(e) {
        super("CancelledError"),
        this.revert = e == null ? void 0 : e.revert,
        this.silent = e == null ? void 0 : e.silent
    }
}
;
function Gu(e) {
    return e instanceof lw
}
function uw(e) {
    let t = !1, n = 0, r = !1, i;
    const s = h_()
      , o = g => {
        var x;
        r || (f(new lw(g)),
        (x = e.abort) == null || x.call(e))
    }
      , a = () => {
        t = !0
    }
      , l = () => {
        t = !1
    }
      , u = () => ow.isFocused() && (e.networkMode === "always" || ml.isOnline()) && e.canRun()
      , c = () => aw(e.networkMode) && e.canRun()
      , d = g => {
        var x;
        r || (r = !0,
        (x = e.onSuccess) == null || x.call(e, g),
        i == null || i(),
        s.resolve(g))
    }
      , f = g => {
        var x;
        r || (r = !0,
        (x = e.onError) == null || x.call(e, g),
        i == null || i(),
        s.reject(g))
    }
      , h = () => new Promise(g => {
        var x;
        i = m => {
            (r || u()) && g(m)
        }
        ,
        (x = e.onPause) == null || x.call(e)
    }
    ).then( () => {
        var g;
        i = void 0,
        r || (g = e.onContinue) == null || g.call(e)
    }
    )
      , v = () => {
        if (r)
            return;
        let g;
        const x = n === 0 ? e.initialPromise : void 0;
        try {
            g = x ?? e.fn()
        } catch (m) {
            g = Promise.reject(m)
        }
        Promise.resolve(g).then(d).catch(m => {
            var k;
            if (r)
                return;
            const p = e.retry ?? (nu ? 0 : 3)
              , y = e.retryDelay ?? p_
              , b = typeof y == "function" ? y(n, m) : y
              , C = p === !0 || typeof p == "number" && n < p || typeof p == "function" && p(n, m);
            if (t || !C) {
                f(m);
                return
            }
            n++,
            (k = e.onFail) == null || k.call(e, n, m),
            a_(b).then( () => u() ? void 0 : h()).then( () => {
                t ? f(m) : v()
            }
            )
        }
        )
    }
    ;
    return {
        promise: s,
        cancel: o,
        continue: () => (i == null || i(),
        s),
        cancelRetry: a,
        continueRetry: l,
        canStart: c,
        start: () => (c() ? v() : h().then(v),
        s)
    }
}
var m_ = e => setTimeout(e, 0);
function g_() {
    let e = []
      , t = 0
      , n = a => {
        a()
    }
      , r = a => {
        a()
    }
      , i = m_;
    const s = a => {
        t ? e.push(a) : i( () => {
            n(a)
        }
        )
    }
      , o = () => {
        const a = e;
        e = [],
        a.length && i( () => {
            r( () => {
                a.forEach(l => {
                    n(l)
                }
                )
            }
            )
        }
        )
    }
    ;
    return {
        batch: a => {
            let l;
            t++;
            try {
                l = a()
            } finally {
                t--,
                t || o()
            }
            return l
        }
        ,
        batchCalls: a => (...l) => {
            s( () => {
                a(...l)
            }
            )
        }
        ,
        schedule: s,
        setNotifyFunction: a => {
            n = a
        }
        ,
        setBatchNotifyFunction: a => {
            r = a
        }
        ,
        setScheduler: a => {
            i = a
        }
    }
}
var qe = g_(), Br, wy, cw = (wy = class {
    constructor() {
        ae(this, Br)
    }
    destroy() {
        this.clearGcTimeout()
    }
    scheduleGc() {
        this.clearGcTimeout(),
        i_(this.gcTime) && X(this, Br, setTimeout( () => {
            this.optionalRemove()
        }
        , this.gcTime))
    }
    updateGcTime(e) {
        this.gcTime = Math.max(this.gcTime || 0, e ?? (nu ? 1 / 0 : 5 * 60 * 1e3))
    }
    clearGcTimeout() {
        _(this, Br) && (clearTimeout(_(this, Br)),
        X(this, Br, void 0))
    }
}
,
Br = new WeakMap,
wy), Ki, Ur, Ct, Wr, He, Ao, Hr, Ut, yn, Sy, y_ = (Sy = class extends cw {
    constructor(t) {
        super();
        ae(this, Ut);
        ae(this, Ki);
        ae(this, Ur);
        ae(this, Ct);
        ae(this, Wr);
        ae(this, He);
        ae(this, Ao);
        ae(this, Hr);
        X(this, Hr, !1),
        X(this, Ao, t.defaultOptions),
        this.setOptions(t.options),
        this.observers = [],
        X(this, Wr, t.client),
        X(this, Ct, _(this, Wr).getQueryCache()),
        this.queryKey = t.queryKey,
        this.queryHash = t.queryHash,
        X(this, Ki, x_(this.options)),
        this.state = t.state ?? _(this, Ki),
        this.scheduleGc()
    }
    get meta() {
        return this.options.meta
    }
    get promise() {
        var t;
        return (t = _(this, He)) == null ? void 0 : t.promise
    }
    setOptions(t) {
        this.options = {
            ..._(this, Ao),
            ...t
        },
        this.updateGcTime(this.options.gcTime)
    }
    optionalRemove() {
        !this.observers.length && this.state.fetchStatus === "idle" && _(this, Ct).remove(this)
    }
    setData(t, n) {
        const r = l_(this.state.data, t, this.options);
        return Be(this, Ut, yn).call(this, {
            data: r,
            type: "success",
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual
        }),
        r
    }
    setState(t, n) {
        Be(this, Ut, yn).call(this, {
            type: "setState",
            state: t,
            setStateOptions: n
        })
    }
    cancel(t) {
        var r, i;
        const n = (r = _(this, He)) == null ? void 0 : r.promise;
        return (i = _(this, He)) == null || i.cancel(t),
        n ? n.then(Bt).catch(Bt) : Promise.resolve()
    }
    destroy() {
        super.destroy(),
        this.cancel({
            silent: !0
        })
    }
    reset() {
        this.destroy(),
        this.setState(_(this, Ki))
    }
    isActive() {
        return this.observers.some(t => o_(t.options.enabled, this) !== !1)
    }
    isDisabled() {
        return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === ah || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
    }
    isStatic() {
        return this.getObserversCount() > 0 ? this.observers.some(t => gd(t.options.staleTime, this) === "static") : !1
    }
    isStale() {
        return this.getObserversCount() > 0 ? this.observers.some(t => t.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated
    }
    isStaleByTime(t=0) {
        return this.state.data === void 0 ? !0 : t === "static" ? !1 : this.state.isInvalidated ? !0 : !s_(this.state.dataUpdatedAt, t)
    }
    onFocus() {
        var n;
        const t = this.observers.find(r => r.shouldFetchOnWindowFocus());
        t == null || t.refetch({
            cancelRefetch: !1
        }),
        (n = _(this, He)) == null || n.continue()
    }
    onOnline() {
        var n;
        const t = this.observers.find(r => r.shouldFetchOnReconnect());
        t == null || t.refetch({
            cancelRefetch: !1
        }),
        (n = _(this, He)) == null || n.continue()
    }
    addObserver(t) {
        this.observers.includes(t) || (this.observers.push(t),
        this.clearGcTimeout(),
        _(this, Ct).notify({
            type: "observerAdded",
            query: this,
            observer: t
        }))
    }
    removeObserver(t) {
        this.observers.includes(t) && (this.observers = this.observers.filter(n => n !== t),
        this.observers.length || (_(this, He) && (_(this, Hr) ? _(this, He).cancel({
            revert: !0
        }) : _(this, He).cancelRetry()),
        this.scheduleGc()),
        _(this, Ct).notify({
            type: "observerRemoved",
            query: this,
            observer: t
        }))
    }
    getObserversCount() {
        return this.observers.length
    }
    invalidate() {
        this.state.isInvalidated || Be(this, Ut, yn).call(this, {
            type: "invalidate"
        })
    }
    fetch(t, n) {
        var u, c, d;
        if (this.state.fetchStatus !== "idle") {
            if (this.state.data !== void 0 && (n != null && n.cancelRefetch))
                this.cancel({
                    silent: !0
                });
            else if (_(this, He))
                return _(this, He).continueRetry(),
                _(this, He).promise
        }
        if (t && this.setOptions(t),
        !this.options.queryFn) {
            const f = this.observers.find(h => h.options.queryFn);
            f && this.setOptions(f.options)
        }
        const r = new AbortController
          , i = f => {
            Object.defineProperty(f, "signal", {
                enumerable: !0,
                get: () => (X(this, Hr, !0),
                r.signal)
            })
        }
          , s = () => {
            const f = sw(this.options, n)
              , v = ( () => {
                const g = {
                    client: _(this, Wr),
                    queryKey: this.queryKey,
                    meta: this.meta
                };
                return i(g),
                g
            }
            )();
            return X(this, Hr, !1),
            this.options.persister ? this.options.persister(f, v, this) : f(v)
        }
          , a = ( () => {
            const f = {
                fetchOptions: n,
                options: this.options,
                queryKey: this.queryKey,
                client: _(this, Wr),
                state: this.state,
                fetchFn: s
            };
            return i(f),
            f
        }
        )();
        (u = this.options.behavior) == null || u.onFetch(a, this),
        X(this, Ur, this.state),
        (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((c = a.fetchOptions) == null ? void 0 : c.meta)) && Be(this, Ut, yn).call(this, {
            type: "fetch",
            meta: (d = a.fetchOptions) == null ? void 0 : d.meta
        });
        const l = f => {
            var h, v, g, x;
            Gu(f) && f.silent || Be(this, Ut, yn).call(this, {
                type: "error",
                error: f
            }),
            Gu(f) || ((v = (h = _(this, Ct).config).onError) == null || v.call(h, f, this),
            (x = (g = _(this, Ct).config).onSettled) == null || x.call(g, this.state.data, f, this)),
            this.scheduleGc()
        }
        ;
        return X(this, He, uw({
            initialPromise: n == null ? void 0 : n.initialPromise,
            fn: a.fetchFn,
            abort: r.abort.bind(r),
            onSuccess: f => {
                var h, v, g, x;
                if (f === void 0) {
                    l(new Error(`${this.queryHash} data is undefined`));
                    return
                }
                try {
                    this.setData(f)
                } catch (m) {
                    l(m);
                    return
                }
                (v = (h = _(this, Ct).config).onSuccess) == null || v.call(h, f, this),
                (x = (g = _(this, Ct).config).onSettled) == null || x.call(g, f, this.state.error, this),
                this.scheduleGc()
            }
            ,
            onError: l,
            onFail: (f, h) => {
                Be(this, Ut, yn).call(this, {
                    type: "failed",
                    failureCount: f,
                    error: h
                })
            }
            ,
            onPause: () => {
                Be(this, Ut, yn).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: () => {
                Be(this, Ut, yn).call(this, {
                    type: "continue"
                })
            }
            ,
            retry: a.options.retry,
            retryDelay: a.options.retryDelay,
            networkMode: a.options.networkMode,
            canRun: () => !0
        })),
        _(this, He).start()
    }
}
,
Ki = new WeakMap,
Ur = new WeakMap,
Ct = new WeakMap,
Wr = new WeakMap,
He = new WeakMap,
Ao = new WeakMap,
Hr = new WeakMap,
Ut = new WeakSet,
yn = function(t) {
    const n = r => {
        switch (t.type) {
        case "failed":
            return {
                ...r,
                fetchFailureCount: t.failureCount,
                fetchFailureReason: t.error
            };
        case "pause":
            return {
                ...r,
                fetchStatus: "paused"
            };
        case "continue":
            return {
                ...r,
                fetchStatus: "fetching"
            };
        case "fetch":
            return {
                ...r,
                ...v_(r.data, this.options),
                fetchMeta: t.meta ?? null
            };
        case "success":
            return X(this, Ur, void 0),
            {
                ...r,
                data: t.data,
                dataUpdateCount: r.dataUpdateCount + 1,
                dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
                error: null,
                isInvalidated: !1,
                status: "success",
                ...!t.manual && {
                    fetchStatus: "idle",
                    fetchFailureCount: 0,
                    fetchFailureReason: null
                }
            };
        case "error":
            const i = t.error;
            return Gu(i) && i.revert && _(this, Ur) ? {
                ..._(this, Ur),
                fetchStatus: "idle"
            } : {
                ...r,
                error: i,
                errorUpdateCount: r.errorUpdateCount + 1,
                errorUpdatedAt: Date.now(),
                fetchFailureCount: r.fetchFailureCount + 1,
                fetchFailureReason: i,
                fetchStatus: "idle",
                status: "error"
            };
        case "invalidate":
            return {
                ...r,
                isInvalidated: !0
            };
        case "setState":
            return {
                ...r,
                ...t.state
            }
        }
    }
    ;
    this.state = n(this.state),
    qe.batch( () => {
        this.observers.forEach(r => {
            r.onQueryUpdate()
        }
        ),
        _(this, Ct).notify({
            query: this,
            type: "updated",
            action: t
        })
    }
    )
}
,
Sy);
function v_(e, t) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: aw(t.networkMode) ? "fetching" : "paused",
        ...e === void 0 && {
            error: null,
            status: "pending"
        }
    }
}
function x_(e) {
    const t = typeof e.initialData == "function" ? e.initialData() : e.initialData
      , n = t !== void 0
      , r = n ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
    return {
        data: t,
        dataUpdateCount: 0,
        dataUpdatedAt: n ? r ?? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: n ? "success" : "pending",
        fetchStatus: "idle"
    }
}
var nn, by, w_ = (by = class extends tu {
    constructor(t={}) {
        super();
        ae(this, nn);
        this.config = t,
        X(this, nn, new Map)
    }
    build(t, n, r) {
        const i = n.queryKey
          , s = n.queryHash ?? oh(i, n);
        let o = this.get(s);
        return o || (o = new y_({
            client: t,
            queryKey: i,
            queryHash: s,
            options: t.defaultQueryOptions(n),
            state: r,
            defaultOptions: t.getQueryDefaults(i)
        }),
        this.add(o)),
        o
    }
    add(t) {
        _(this, nn).has(t.queryHash) || (_(this, nn).set(t.queryHash, t),
        this.notify({
            type: "added",
            query: t
        }))
    }
    remove(t) {
        const n = _(this, nn).get(t.queryHash);
        n && (t.destroy(),
        n === t && _(this, nn).delete(t.queryHash),
        this.notify({
            type: "removed",
            query: t
        }))
    }
    clear() {
        qe.batch( () => {
            this.getAll().forEach(t => {
                this.remove(t)
            }
            )
        }
        )
    }
    get(t) {
        return _(this, nn).get(t)
    }
    getAll() {
        return [..._(this, nn).values()]
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(r => Tm(n, r))
    }
    findAll(t={}) {
        const n = this.getAll();
        return Object.keys(t).length > 0 ? n.filter(r => Tm(t, r)) : n
    }
    notify(t) {
        qe.batch( () => {
            this.listeners.forEach(n => {
                n(t)
            }
            )
        }
        )
    }
    onFocus() {
        qe.batch( () => {
            this.getAll().forEach(t => {
                t.onFocus()
            }
            )
        }
        )
    }
    onOnline() {
        qe.batch( () => {
            this.getAll().forEach(t => {
                t.onOnline()
            }
            )
        }
        )
    }
}
,
nn = new WeakMap,
by), rn, Ye, Kr, sn, Bn, Cy, S_ = (Cy = class extends cw {
    constructor(t) {
        super();
        ae(this, sn);
        ae(this, rn);
        ae(this, Ye);
        ae(this, Kr);
        this.mutationId = t.mutationId,
        X(this, Ye, t.mutationCache),
        X(this, rn, []),
        this.state = t.state || b_(),
        this.setOptions(t.options),
        this.scheduleGc()
    }
    setOptions(t) {
        this.options = t,
        this.updateGcTime(this.options.gcTime)
    }
    get meta() {
        return this.options.meta
    }
    addObserver(t) {
        _(this, rn).includes(t) || (_(this, rn).push(t),
        this.clearGcTimeout(),
        _(this, Ye).notify({
            type: "observerAdded",
            mutation: this,
            observer: t
        }))
    }
    removeObserver(t) {
        X(this, rn, _(this, rn).filter(n => n !== t)),
        this.scheduleGc(),
        _(this, Ye).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t
        })
    }
    optionalRemove() {
        _(this, rn).length || (this.state.status === "pending" ? this.scheduleGc() : _(this, Ye).remove(this))
    }
    continue() {
        var t;
        return ((t = _(this, Kr)) == null ? void 0 : t.continue()) ?? this.execute(this.state.variables)
    }
    async execute(t) {
        var s, o, a, l, u, c, d, f, h, v, g, x, m, p, y, b, C, k, T, E;
        const n = () => {
            Be(this, sn, Bn).call(this, {
                type: "continue"
            })
        }
        ;
        X(this, Kr, uw({
            fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
            onFail: (M, N) => {
                Be(this, sn, Bn).call(this, {
                    type: "failed",
                    failureCount: M,
                    error: N
                })
            }
            ,
            onPause: () => {
                Be(this, sn, Bn).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: n,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => _(this, Ye).canRun(this)
        }));
        const r = this.state.status === "pending"
          , i = !_(this, Kr).canStart();
        try {
            if (r)
                n();
            else {
                Be(this, sn, Bn).call(this, {
                    type: "pending",
                    variables: t,
                    isPaused: i
                }),
                await ((o = (s = _(this, Ye).config).onMutate) == null ? void 0 : o.call(s, t, this));
                const N = await ((l = (a = this.options).onMutate) == null ? void 0 : l.call(a, t));
                N !== this.state.context && Be(this, sn, Bn).call(this, {
                    type: "pending",
                    context: N,
                    variables: t,
                    isPaused: i
                })
            }
            const M = await _(this, Kr).start();
            return await ((c = (u = _(this, Ye).config).onSuccess) == null ? void 0 : c.call(u, M, t, this.state.context, this)),
            await ((f = (d = this.options).onSuccess) == null ? void 0 : f.call(d, M, t, this.state.context)),
            await ((v = (h = _(this, Ye).config).onSettled) == null ? void 0 : v.call(h, M, null, this.state.variables, this.state.context, this)),
            await ((x = (g = this.options).onSettled) == null ? void 0 : x.call(g, M, null, t, this.state.context)),
            Be(this, sn, Bn).call(this, {
                type: "success",
                data: M
            }),
            M
        } catch (M) {
            try {
                throw await ((p = (m = _(this, Ye).config).onError) == null ? void 0 : p.call(m, M, t, this.state.context, this)),
                await ((b = (y = this.options).onError) == null ? void 0 : b.call(y, M, t, this.state.context)),
                await ((k = (C = _(this, Ye).config).onSettled) == null ? void 0 : k.call(C, void 0, M, this.state.variables, this.state.context, this)),
                await ((E = (T = this.options).onSettled) == null ? void 0 : E.call(T, void 0, M, t, this.state.context)),
                M
            } finally {
                Be(this, sn, Bn).call(this, {
                    type: "error",
                    error: M
                })
            }
        } finally {
            _(this, Ye).runNext(this)
        }
    }
}
,
rn = new WeakMap,
Ye = new WeakMap,
Kr = new WeakMap,
sn = new WeakSet,
Bn = function(t) {
    const n = r => {
        switch (t.type) {
        case "failed":
            return {
                ...r,
                failureCount: t.failureCount,
                failureReason: t.error
            };
        case "pause":
            return {
                ...r,
                isPaused: !0
            };
        case "continue":
            return {
                ...r,
                isPaused: !1
            };
        case "pending":
            return {
                ...r,
                context: t.context,
                data: void 0,
                failureCount: 0,
                failureReason: null,
                error: null,
                isPaused: t.isPaused,
                status: "pending",
                variables: t.variables,
                submittedAt: Date.now()
            };
        case "success":
            return {
                ...r,
                data: t.data,
                failureCount: 0,
                failureReason: null,
                error: null,
                status: "success",
                isPaused: !1
            };
        case "error":
            return {
                ...r,
                data: void 0,
                error: t.error,
                failureCount: r.failureCount + 1,
                failureReason: t.error,
                isPaused: !1,
                status: "error"
            }
        }
    }
    ;
    this.state = n(this.state),
    qe.batch( () => {
        _(this, rn).forEach(r => {
            r.onMutationUpdate(t)
        }
        ),
        _(this, Ye).notify({
            mutation: this,
            type: "updated",
            action: t
        })
    }
    )
}
,
Cy);
function b_() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var wn, Wt, No, ky, C_ = (ky = class extends tu {
    constructor(t={}) {
        super();
        ae(this, wn);
        ae(this, Wt);
        ae(this, No);
        this.config = t,
        X(this, wn, new Set),
        X(this, Wt, new Map),
        X(this, No, 0)
    }
    build(t, n, r) {
        const i = new S_({
            mutationCache: this,
            mutationId: ++Zo(this, No)._,
            options: t.defaultMutationOptions(n),
            state: r
        });
        return this.add(i),
        i
    }
    add(t) {
        _(this, wn).add(t);
        const n = ma(t);
        if (typeof n == "string") {
            const r = _(this, Wt).get(n);
            r ? r.push(t) : _(this, Wt).set(n, [t])
        }
        this.notify({
            type: "added",
            mutation: t
        })
    }
    remove(t) {
        if (_(this, wn).delete(t)) {
            const n = ma(t);
            if (typeof n == "string") {
                const r = _(this, Wt).get(n);
                if (r)
                    if (r.length > 1) {
                        const i = r.indexOf(t);
                        i !== -1 && r.splice(i, 1)
                    } else
                        r[0] === t && _(this, Wt).delete(n)
            }
        }
        this.notify({
            type: "removed",
            mutation: t
        })
    }
    canRun(t) {
        const n = ma(t);
        if (typeof n == "string") {
            const r = _(this, Wt).get(n)
              , i = r == null ? void 0 : r.find(s => s.state.status === "pending");
            return !i || i === t
        } else
            return !0
    }
    runNext(t) {
        var r;
        const n = ma(t);
        if (typeof n == "string") {
            const i = (r = _(this, Wt).get(n)) == null ? void 0 : r.find(s => s !== t && s.state.isPaused);
            return (i == null ? void 0 : i.continue()) ?? Promise.resolve()
        } else
            return Promise.resolve()
    }
    clear() {
        qe.batch( () => {
            _(this, wn).forEach(t => {
                this.notify({
                    type: "removed",
                    mutation: t
                })
            }
            ),
            _(this, wn).clear(),
            _(this, Wt).clear()
        }
        )
    }
    getAll() {
        return Array.from(_(this, wn))
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(r => Em(n, r))
    }
    findAll(t={}) {
        return this.getAll().filter(n => Em(t, n))
    }
    notify(t) {
        qe.batch( () => {
            this.listeners.forEach(n => {
                n(t)
            }
            )
        }
        )
    }
    resumePausedMutations() {
        const t = this.getAll().filter(n => n.state.isPaused);
        return qe.batch( () => Promise.all(t.map(n => n.continue().catch(Bt))))
    }
}
,
wn = new WeakMap,
Wt = new WeakMap,
No = new WeakMap,
ky);
function ma(e) {
    var t;
    return (t = e.options.scope) == null ? void 0 : t.id
}
function Rm(e) {
    return {
        onFetch: (t, n) => {
            var c, d, f, h, v;
            const r = t.options
              , i = (f = (d = (c = t.fetchOptions) == null ? void 0 : c.meta) == null ? void 0 : d.fetchMore) == null ? void 0 : f.direction
              , s = ((h = t.state.data) == null ? void 0 : h.pages) || []
              , o = ((v = t.state.data) == null ? void 0 : v.pageParams) || [];
            let a = {
                pages: [],
                pageParams: []
            }
              , l = 0;
            const u = async () => {
                let g = !1;
                const x = y => {
                    Object.defineProperty(y, "signal", {
                        enumerable: !0,
                        get: () => (t.signal.aborted ? g = !0 : t.signal.addEventListener("abort", () => {
                            g = !0
                        }
                        ),
                        t.signal)
                    })
                }
                  , m = sw(t.options, t.fetchOptions)
                  , p = async (y, b, C) => {
                    if (g)
                        return Promise.reject();
                    if (b == null && y.pages.length)
                        return Promise.resolve(y);
                    const T = ( () => {
                        const W = {
                            client: t.client,
                            queryKey: t.queryKey,
                            pageParam: b,
                            direction: C ? "backward" : "forward",
                            meta: t.options.meta
                        };
                        return x(W),
                        W
                    }
                    )()
                      , E = await m(T)
                      , {maxPages: M} = t.options
                      , N = C ? c_ : u_;
                    return {
                        pages: N(y.pages, E, M),
                        pageParams: N(y.pageParams, b, M)
                    }
                }
                ;
                if (i && s.length) {
                    const y = i === "backward"
                      , b = y ? k_ : Am
                      , C = {
                        pages: s,
                        pageParams: o
                    }
                      , k = b(r, C);
                    a = await p(C, k, y)
                } else {
                    const y = e ?? s.length;
                    do {
                        const b = l === 0 ? o[0] ?? r.initialPageParam : Am(r, a);
                        if (l > 0 && b == null)
                            break;
                        a = await p(a, b),
                        l++
                    } while (l < y)
                }
                return a
            }
            ;
            t.options.persister ? t.fetchFn = () => {
                var g, x;
                return (x = (g = t.options).persister) == null ? void 0 : x.call(g, u, {
                    client: t.client,
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal
                }, n)
            }
            : t.fetchFn = u
        }
    }
}
function Am(e, {pages: t, pageParams: n}) {
    const r = t.length - 1;
    return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0
}
function k_(e, {pages: t, pageParams: n}) {
    var r;
    return t.length > 0 ? (r = e.getPreviousPageParam) == null ? void 0 : r.call(e, t[0], t, n[0], n) : void 0
}
var ke, qn, Jn, Zi, Gi, er, Qi, Yi, Ty, T_ = (Ty = class {
    constructor(e={}) {
        ae(this, ke);
        ae(this, qn);
        ae(this, Jn);
        ae(this, Zi);
        ae(this, Gi);
        ae(this, er);
        ae(this, Qi);
        ae(this, Yi);
        X(this, ke, e.queryCache || new w_),
        X(this, qn, e.mutationCache || new C_),
        X(this, Jn, e.defaultOptions || {}),
        X(this, Zi, new Map),
        X(this, Gi, new Map),
        X(this, er, 0)
    }
    mount() {
        Zo(this, er)._++,
        _(this, er) === 1 && (X(this, Qi, ow.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            _(this, ke).onFocus())
        }
        )),
        X(this, Yi, ml.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            _(this, ke).onOnline())
        }
        )))
    }
    unmount() {
        var e, t;
        Zo(this, er)._--,
        _(this, er) === 0 && ((e = _(this, Qi)) == null || e.call(this),
        X(this, Qi, void 0),
        (t = _(this, Yi)) == null || t.call(this),
        X(this, Yi, void 0))
    }
    isFetching(e) {
        return _(this, ke).findAll({
            ...e,
            fetchStatus: "fetching"
        }).length
    }
    isMutating(e) {
        return _(this, qn).findAll({
            ...e,
            status: "pending"
        }).length
    }
    getQueryData(e) {
        var n;
        const t = this.defaultQueryOptions({
            queryKey: e
        });
        return (n = _(this, ke).get(t.queryHash)) == null ? void 0 : n.state.data
    }
    ensureQueryData(e) {
        const t = this.defaultQueryOptions(e)
          , n = _(this, ke).build(this, t)
          , r = n.state.data;
        return r === void 0 ? this.fetchQuery(e) : (e.revalidateIfStale && n.isStaleByTime(gd(t.staleTime, n)) && this.prefetchQuery(t),
        Promise.resolve(r))
    }
    getQueriesData(e) {
        return _(this, ke).findAll(e).map( ({queryKey: t, state: n}) => {
            const r = n.data;
            return [t, r]
        }
        )
    }
    setQueryData(e, t, n) {
        const r = this.defaultQueryOptions({
            queryKey: e
        })
          , i = _(this, ke).get(r.queryHash)
          , s = i == null ? void 0 : i.state.data
          , o = r_(t, s);
        if (o !== void 0)
            return _(this, ke).build(this, r).setData(o, {
                ...n,
                manual: !0
            })
    }
    setQueriesData(e, t, n) {
        return qe.batch( () => _(this, ke).findAll(e).map( ({queryKey: r}) => [r, this.setQueryData(r, t, n)]))
    }
    getQueryState(e) {
        var n;
        const t = this.defaultQueryOptions({
            queryKey: e
        });
        return (n = _(this, ke).get(t.queryHash)) == null ? void 0 : n.state
    }
    removeQueries(e) {
        const t = _(this, ke);
        qe.batch( () => {
            t.findAll(e).forEach(n => {
                t.remove(n)
            }
            )
        }
        )
    }
    resetQueries(e, t) {
        const n = _(this, ke);
        return qe.batch( () => (n.findAll(e).forEach(r => {
            r.reset()
        }
        ),
        this.refetchQueries({
            type: "active",
            ...e
        }, t)))
    }
    cancelQueries(e, t={}) {
        const n = {
            revert: !0,
            ...t
        }
          , r = qe.batch( () => _(this, ke).findAll(e).map(i => i.cancel(n)));
        return Promise.all(r).then(Bt).catch(Bt)
    }
    invalidateQueries(e, t={}) {
        return qe.batch( () => (_(this, ke).findAll(e).forEach(n => {
            n.invalidate()
        }
        ),
        (e == null ? void 0 : e.refetchType) === "none" ? Promise.resolve() : this.refetchQueries({
            ...e,
            type: (e == null ? void 0 : e.refetchType) ?? (e == null ? void 0 : e.type) ?? "active"
        }, t)))
    }
    refetchQueries(e, t={}) {
        const n = {
            ...t,
            cancelRefetch: t.cancelRefetch ?? !0
        }
          , r = qe.batch( () => _(this, ke).findAll(e).filter(i => !i.isDisabled() && !i.isStatic()).map(i => {
            let s = i.fetch(void 0, n);
            return n.throwOnError || (s = s.catch(Bt)),
            i.state.fetchStatus === "paused" ? Promise.resolve() : s
        }
        ));
        return Promise.all(r).then(Bt)
    }
    fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const n = _(this, ke).build(this, t);
        return n.isStaleByTime(gd(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data)
    }
    prefetchQuery(e) {
        return this.fetchQuery(e).then(Bt).catch(Bt)
    }
    fetchInfiniteQuery(e) {
        return e.behavior = Rm(e.pages),
        this.fetchQuery(e)
    }
    prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(Bt).catch(Bt)
    }
    ensureInfiniteQueryData(e) {
        return e.behavior = Rm(e.pages),
        this.ensureQueryData(e)
    }
    resumePausedMutations() {
        return ml.isOnline() ? _(this, qn).resumePausedMutations() : Promise.resolve()
    }
    getQueryCache() {
        return _(this, ke)
    }
    getMutationCache() {
        return _(this, qn)
    }
    getDefaultOptions() {
        return _(this, Jn)
    }
    setDefaultOptions(e) {
        X(this, Jn, e)
    }
    setQueryDefaults(e, t) {
        _(this, Zi).set(wo(e), {
            queryKey: e,
            defaultOptions: t
        })
    }
    getQueryDefaults(e) {
        const t = [..._(this, Zi).values()]
          , n = {};
        return t.forEach(r => {
            So(e, r.queryKey) && Object.assign(n, r.defaultOptions)
        }
        ),
        n
    }
    setMutationDefaults(e, t) {
        _(this, Gi).set(wo(e), {
            mutationKey: e,
            defaultOptions: t
        })
    }
    getMutationDefaults(e) {
        const t = [..._(this, Gi).values()]
          , n = {};
        return t.forEach(r => {
            So(e, r.mutationKey) && Object.assign(n, r.defaultOptions)
        }
        ),
        n
    }
    defaultQueryOptions(e) {
        if (e._defaulted)
            return e;
        const t = {
            ..._(this, Jn).queries,
            ...this.getQueryDefaults(e.queryKey),
            ...e,
            _defaulted: !0
        };
        return t.queryHash || (t.queryHash = oh(t.queryKey, t)),
        t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"),
        t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
        !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
        t.queryFn === ah && (t.enabled = !1),
        t
    }
    defaultMutationOptions(e) {
        return e != null && e._defaulted ? e : {
            ..._(this, Jn).mutations,
            ...(e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey),
            ...e,
            _defaulted: !0
        }
    }
    clear() {
        _(this, ke).clear(),
        _(this, qn).clear()
    }
}
,
ke = new WeakMap,
qn = new WeakMap,
Jn = new WeakMap,
Zi = new WeakMap,
Gi = new WeakMap,
er = new WeakMap,
Qi = new WeakMap,
Yi = new WeakMap,
Ty), E_ = w.createContext(void 0), P_ = ({client: e, children: t}) => (w.useEffect( () => (e.mount(),
() => {
    e.unmount()
}
), [e]),
S.jsx(E_.Provider, {
    value: e,
    children: t
}));
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function gl() {
    return gl = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    gl.apply(this, arguments)
}
var rr;
(function(e) {
    e.Pop = "POP",
    e.Push = "PUSH",
    e.Replace = "REPLACE"
}
)(rr || (rr = {}));
const Nm = "popstate";
function __(e) {
    e === void 0 && (e = {});
    function t(r, i) {
        let {pathname: s, search: o, hash: a} = r.location;
        return vd("", {
            pathname: s,
            search: o,
            hash: a
        }, i.state && i.state.usr || null, i.state && i.state.key || "default")
    }
    function n(r, i) {
        return typeof i == "string" ? i : fw(i)
    }
    return A_(t, n, null, e)
}
function dt(e, t) {
    if (e === !1 || e === null || typeof e > "u")
        throw new Error(t)
}
function dw(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}
function R_() {
    return Math.random().toString(36).substr(2, 8)
}
function Mm(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}
function vd(e, t, n, r) {
    return n === void 0 && (n = null),
    gl({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? ru(t) : t, {
        state: n,
        key: t && t.key || r || R_()
    })
}
function fw(e) {
    let {pathname: t="/", search: n="", hash: r=""} = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
}
function ru(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n),
        e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r),
        e = e.substr(0, r)),
        e && (t.pathname = e)
    }
    return t
}
function A_(e, t, n, r) {
    r === void 0 && (r = {});
    let {window: i=document.defaultView, v5Compat: s=!1} = r
      , o = i.history
      , a = rr.Pop
      , l = null
      , u = c();
    u == null && (u = 0,
    o.replaceState(gl({}, o.state, {
        idx: u
    }), ""));
    function c() {
        return (o.state || {
            idx: null
        }).idx
    }
    function d() {
        a = rr.Pop;
        let x = c()
          , m = x == null ? null : x - u;
        u = x,
        l && l({
            action: a,
            location: g.location,
            delta: m
        })
    }
    function f(x, m) {
        a = rr.Push;
        let p = vd(g.location, x, m);
        u = c() + 1;
        let y = Mm(p, u)
          , b = g.createHref(p);
        try {
            o.pushState(y, "", b)
        } catch (C) {
            if (C instanceof DOMException && C.name === "DataCloneError")
                throw C;
            i.location.assign(b)
        }
        s && l && l({
            action: a,
            location: g.location,
            delta: 1
        })
    }
    function h(x, m) {
        a = rr.Replace;
        let p = vd(g.location, x, m);
        u = c();
        let y = Mm(p, u)
          , b = g.createHref(p);
        o.replaceState(y, "", b),
        s && l && l({
            action: a,
            location: g.location,
            delta: 0
        })
    }
    function v(x) {
        let m = i.location.origin !== "null" ? i.location.origin : i.location.href
          , p = typeof x == "string" ? x : fw(x);
        return p = p.replace(/ $/, "%20"),
        dt(m, "No window.location.(origin|href) available to create URL for href: " + p),
        new URL(p,m)
    }
    let g = {
        get action() {
            return a
        },
        get location() {
            return e(i, o)
        },
        listen(x) {
            if (l)
                throw new Error("A history only accepts one active listener");
            return i.addEventListener(Nm, d),
            l = x,
            () => {
                i.removeEventListener(Nm, d),
                l = null
            }
        },
        createHref(x) {
            return t(i, x)
        },
        createURL: v,
        encodeLocation(x) {
            let m = v(x);
            return {
                pathname: m.pathname,
                search: m.search,
                hash: m.hash
            }
        },
        push: f,
        replace: h,
        go(x) {
            return o.go(x)
        }
    };
    return g
}
var jm;
(function(e) {
    e.data = "data",
    e.deferred = "deferred",
    e.redirect = "redirect",
    e.error = "error"
}
)(jm || (jm = {}));
function N_(e, t, n) {
    return n === void 0 && (n = "/"),
    M_(e, t, n, !1)
}
function M_(e, t, n, r) {
    let i = typeof t == "string" ? ru(t) : t
      , s = mw(i.pathname || "/", n);
    if (s == null)
        return null;
    let o = hw(e);
    j_(o);
    let a = null;
    for (let l = 0; a == null && l < o.length; ++l) {
        let u = W_(s);
        a = B_(o[l], u, r)
    }
    return a
}
function hw(e, t, n, r) {
    t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = "");
    let i = (s, o, a) => {
        let l = {
            relativePath: a === void 0 ? s.path || "" : a,
            caseSensitive: s.caseSensitive === !0,
            childrenIndex: o,
            route: s
        };
        l.relativePath.startsWith("/") && (dt(l.relativePath.startsWith(r), 'Absolute route path "' + l.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
        l.relativePath = l.relativePath.slice(r.length));
        let u = $i([r, l.relativePath])
          , c = n.concat(l);
        s.children && s.children.length > 0 && (dt(s.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')),
        hw(s.children, t, c, u)),
        !(s.path == null && !s.index) && t.push({
            path: u,
            score: z_(u, s.index),
            routesMeta: c
        })
    }
    ;
    return e.forEach( (s, o) => {
        var a;
        if (s.path === "" || !((a = s.path) != null && a.includes("?")))
            i(s, o);
        else
            for (let l of pw(s.path))
                i(s, o, l)
    }
    ),
    t
}
function pw(e) {
    let t = e.split("/");
    if (t.length === 0)
        return [];
    let[n,...r] = t
      , i = n.endsWith("?")
      , s = n.replace(/\?$/, "");
    if (r.length === 0)
        return i ? [s, ""] : [s];
    let o = pw(r.join("/"))
      , a = [];
    return a.push(...o.map(l => l === "" ? s : [s, l].join("/"))),
    i && a.push(...o),
    a.map(l => e.startsWith("/") && l === "" ? "/" : l)
}
function j_(e) {
    e.sort( (t, n) => t.score !== n.score ? n.score - t.score : $_(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
const O_ = /^:[\w-]+$/
  , D_ = 3
  , L_ = 2
  , I_ = 1
  , V_ = 10
  , F_ = -2
  , Om = e => e === "*";
function z_(e, t) {
    let n = e.split("/")
      , r = n.length;
    return n.some(Om) && (r += F_),
    t && (r += L_),
    n.filter(i => !Om(i)).reduce( (i, s) => i + (O_.test(s) ? D_ : s === "" ? I_ : V_), r)
}
function $_(e, t) {
    return e.length === t.length && e.slice(0, -1).every( (r, i) => r === t[i]) ? e[e.length - 1] - t[t.length - 1] : 0
}
function B_(e, t, n) {
    let {routesMeta: r} = e
      , i = {}
      , s = "/"
      , o = [];
    for (let a = 0; a < r.length; ++a) {
        let l = r[a]
          , u = a === r.length - 1
          , c = s === "/" ? t : t.slice(s.length) || "/"
          , d = Dm({
            path: l.relativePath,
            caseSensitive: l.caseSensitive,
            end: u
        }, c)
          , f = l.route;
        if (!d && u && n && !r[r.length - 1].route.index && (d = Dm({
            path: l.relativePath,
            caseSensitive: l.caseSensitive,
            end: !1
        }, c)),
        !d)
            return null;
        Object.assign(i, d.params),
        o.push({
            params: i,
            pathname: $i([s, d.pathname]),
            pathnameBase: H_($i([s, d.pathnameBase])),
            route: f
        }),
        d.pathnameBase !== "/" && (s = $i([s, d.pathnameBase]))
    }
    return o
}
function Dm(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let[n,r] = U_(e.path, e.caseSensitive, e.end)
      , i = t.match(n);
    if (!i)
        return null;
    let s = i[0]
      , o = s.replace(/(.)\/+$/, "$1")
      , a = i.slice(1);
    return {
        params: r.reduce( (u, c, d) => {
            let {paramName: f, isOptional: h} = c;
            if (f === "*") {
                let g = a[d] || "";
                o = s.slice(0, s.length - g.length).replace(/(.)\/+$/, "$1")
            }
            const v = a[d];
            return h && !v ? u[f] = void 0 : u[f] = (v || "").replace(/%2F/g, "/"),
            u
        }
        , {}),
        pathname: s,
        pathnameBase: o,
        pattern: e
    }
}
function U_(e, t, n) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    dw(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = []
      , i = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (o, a, l) => (r.push({
        paramName: a,
        isOptional: l != null
    }),
    l ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push({
        paramName: "*"
    }),
    i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? i += "\\/*$" : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i,t ? void 0 : "i"), r]
}
function W_(e) {
    try {
        return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return dw(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")),
        e
    }
}
function mw(e, t) {
    if (t === "/")
        return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase()))
        return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length
      , r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}
const $i = e => e.join("/").replace(/\/\/+/g, "/")
  , H_ = e => e.replace(/\/+$/, "").replace(/^\/*/, "/");
function K_(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data"in e
}
const gw = ["post", "put", "patch", "delete"];
new Set(gw);
const Z_ = ["get", ...gw];
new Set(Z_);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function yl() {
    return yl = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    yl.apply(this, arguments)
}
const G_ = w.createContext(null)
  , Q_ = w.createContext(null)
  , yw = w.createContext(null)
  , iu = w.createContext(null)
  , su = w.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
})
  , vw = w.createContext(null);
function lh() {
    return w.useContext(iu) != null
}
function xw() {
    return lh() || dt(!1),
    w.useContext(iu).location
}
function Y_(e, t) {
    return X_(e, t)
}
function X_(e, t, n, r) {
    lh() || dt(!1);
    let {navigator: i} = w.useContext(yw)
      , {matches: s} = w.useContext(su)
      , o = s[s.length - 1]
      , a = o ? o.params : {};
    o && o.pathname;
    let l = o ? o.pathnameBase : "/";
    o && o.route;
    let u = xw(), c;
    if (t) {
        var d;
        let x = typeof t == "string" ? ru(t) : t;
        l === "/" || (d = x.pathname) != null && d.startsWith(l) || dt(!1),
        c = x
    } else
        c = u;
    let f = c.pathname || "/"
      , h = f;
    if (l !== "/") {
        let x = l.replace(/^\//, "").split("/");
        h = "/" + f.replace(/^\//, "").split("/").slice(x.length).join("/")
    }
    let v = N_(e, {
        pathname: h
    })
      , g = n2(v && v.map(x => Object.assign({}, x, {
        params: Object.assign({}, a, x.params),
        pathname: $i([l, i.encodeLocation ? i.encodeLocation(x.pathname).pathname : x.pathname]),
        pathnameBase: x.pathnameBase === "/" ? l : $i([l, i.encodeLocation ? i.encodeLocation(x.pathnameBase).pathname : x.pathnameBase])
    })), s, n, r);
    return t && g ? w.createElement(iu.Provider, {
        value: {
            location: yl({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, c),
            navigationType: rr.Pop
        }
    }, g) : g
}
function q_() {
    let e = o2()
      , t = K_(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e)
      , n = e instanceof Error ? e.stack : null
      , i = {
        padding: "0.5rem",
        backgroundColor: "rgba(200,200,200, 0.5)"
    };
    return w.createElement(w.Fragment, null, w.createElement("h2", null, "Unexpected Application Error!"), w.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? w.createElement("pre", {
        style: i
    }, n) : null, null)
}
const J_ = w.createElement(q_, null);
class e2 extends w.Component {
    constructor(t) {
        super(t),
        this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation
        }
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }
    render() {
        return this.state.error !== void 0 ? w.createElement(su.Provider, {
            value: this.props.routeContext
        }, w.createElement(vw.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
function t2(e) {
    let {routeContext: t, match: n, children: r} = e
      , i = w.useContext(G_);
    return i && i.static && i.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    w.createElement(su.Provider, {
        value: t
    }, r)
}
function n2(e, t, n, r) {
    var i;
    if (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null) {
        var s;
        if (!n)
            return null;
        if (n.errors)
            e = n.matches;
        else if ((s = r) != null && s.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0)
            e = n.matches;
        else
            return null
    }
    let o = e
      , a = (i = n) == null ? void 0 : i.errors;
    if (a != null) {
        let c = o.findIndex(d => d.route.id && (a == null ? void 0 : a[d.route.id]) !== void 0);
        c >= 0 || dt(!1),
        o = o.slice(0, Math.min(o.length, c + 1))
    }
    let l = !1
      , u = -1;
    if (n && r && r.v7_partialHydration)
        for (let c = 0; c < o.length; c++) {
            let d = o[c];
            if ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (u = c),
            d.route.id) {
                let {loaderData: f, errors: h} = n
                  , v = d.route.loader && f[d.route.id] === void 0 && (!h || h[d.route.id] === void 0);
                if (d.route.lazy || v) {
                    l = !0,
                    u >= 0 ? o = o.slice(0, u + 1) : o = [o[0]];
                    break
                }
            }
        }
    return o.reduceRight( (c, d, f) => {
        let h, v = !1, g = null, x = null;
        n && (h = a && d.route.id ? a[d.route.id] : void 0,
        g = d.route.errorElement || J_,
        l && (u < 0 && f === 0 ? (v = !0,
        x = null) : u === f && (v = !0,
        x = d.route.hydrateFallbackElement || null)));
        let m = t.concat(o.slice(0, f + 1))
          , p = () => {
            let y;
            return h ? y = g : v ? y = x : d.route.Component ? y = w.createElement(d.route.Component, null) : d.route.element ? y = d.route.element : y = c,
            w.createElement(t2, {
                match: d,
                routeContext: {
                    outlet: c,
                    matches: m,
                    isDataRoute: n != null
                },
                children: y
            })
        }
        ;
        return n && (d.route.ErrorBoundary || d.route.errorElement || f === 0) ? w.createElement(e2, {
            location: n.location,
            revalidation: n.revalidation,
            component: g,
            error: h,
            children: p(),
            routeContext: {
                outlet: null,
                matches: m,
                isDataRoute: !0
            }
        }) : p()
    }
    , null)
}
var xd = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseLoaderData = "useLoaderData",
    e.UseActionData = "useActionData",
    e.UseRouteError = "useRouteError",
    e.UseNavigation = "useNavigation",
    e.UseRouteLoaderData = "useRouteLoaderData",
    e.UseMatches = "useMatches",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e.UseRouteId = "useRouteId",
    e
}(xd || {});
function r2(e) {
    let t = w.useContext(Q_);
    return t || dt(!1),
    t
}
function i2(e) {
    let t = w.useContext(su);
    return t || dt(!1),
    t
}
function s2(e) {
    let t = i2()
      , n = t.matches[t.matches.length - 1];
    return n.route.id || dt(!1),
    n.route.id
}
function o2() {
    var e;
    let t = w.useContext(vw)
      , n = r2(xd.UseRouteError)
      , r = s2(xd.UseRouteError);
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}
function a2(e, t) {
    e == null || e.v7_startTransition,
    e == null || e.v7_relativeSplatPath
}
function wd(e) {
    dt(!1)
}
function l2(e) {
    let {basename: t="/", children: n=null, location: r, navigationType: i=rr.Pop, navigator: s, static: o=!1, future: a} = e;
    lh() && dt(!1);
    let l = t.replace(/^\/*/, "/")
      , u = w.useMemo( () => ({
        basename: l,
        navigator: s,
        static: o,
        future: yl({
            v7_relativeSplatPath: !1
        }, a)
    }), [l, a, s, o]);
    typeof r == "string" && (r = ru(r));
    let {pathname: c="/", search: d="", hash: f="", state: h=null, key: v="default"} = r
      , g = w.useMemo( () => {
        let x = mw(c, l);
        return x == null ? null : {
            location: {
                pathname: x,
                search: d,
                hash: f,
                state: h,
                key: v
            },
            navigationType: i
        }
    }
    , [l, c, d, f, h, v, i]);
    return g == null ? null : w.createElement(yw.Provider, {
        value: u
    }, w.createElement(iu.Provider, {
        children: n,
        value: g
    }))
}
function u2(e) {
    let {children: t, location: n} = e;
    return Y_(Sd(t), n)
}
new Promise( () => {}
);
function Sd(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return w.Children.forEach(e, (r, i) => {
        if (!w.isValidElement(r))
            return;
        let s = [...t, i];
        if (r.type === w.Fragment) {
            n.push.apply(n, Sd(r.props.children, s));
            return
        }
        r.type !== wd && dt(!1),
        !r.props.index || !r.props.children || dt(!1);
        let o = {
            id: r.props.id || s.join("-"),
            caseSensitive: r.props.caseSensitive,
            element: r.props.element,
            Component: r.props.Component,
            index: r.props.index,
            path: r.props.path,
            loader: r.props.loader,
            action: r.props.action,
            errorElement: r.props.errorElement,
            ErrorBoundary: r.props.ErrorBoundary,
            hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
            shouldRevalidate: r.props.shouldRevalidate,
            handle: r.props.handle,
            lazy: r.props.lazy
        };
        r.props.children && (o.children = Sd(r.props.children, s)),
        n.push(o)
    }
    ),
    n
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
const c2 = "6";
try {
    window.__reactRouterVersion = c2
} catch {}
const d2 = "startTransition"
  , Lm = Iy[d2];
function f2(e) {
    let {basename: t, children: n, future: r, window: i} = e
      , s = w.useRef();
    s.current == null && (s.current = __({
        window: i,
        v5Compat: !0
    }));
    let o = s.current
      , [a,l] = w.useState({
        action: o.action,
        location: o.location
    })
      , {v7_startTransition: u} = r || {}
      , c = w.useCallback(d => {
        u && Lm ? Lm( () => l(d)) : l(d)
    }
    , [l, u]);
    return w.useLayoutEffect( () => o.listen(c), [o, c]),
    w.useEffect( () => a2(r), [r]),
    w.createElement(l2, {
        basename: t,
        children: n,
        location: a.location,
        navigationType: a.action,
        navigator: o,
        future: r
    })
}
var Im;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration",
    e.UseSubmit = "useSubmit",
    e.UseSubmitFetcher = "useSubmitFetcher",
    e.UseFetcher = "useFetcher",
    e.useViewTransitionState = "useViewTransitionState"
}
)(Im || (Im = {}));
var Vm;
(function(e) {
    e.UseFetcher = "useFetcher",
    e.UseFetchers = "useFetchers",
    e.UseScrollRestoration = "useScrollRestoration"
}
)(Vm || (Vm = {}));
const Fm = [{
    label: "About",
    href: "#about"
}, {
    label: "Services",
    href: "#services"
}, {
    label: "Portfolio",
    href: "#portfolio"
}, {
    label: "Contact",
    href: "#contact"
}]
  , h2 = () => {
    const [e,t] = w.useState(!1);
    return S.jsxs("header", {
        className: "fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50",
        children: [S.jsxs("nav", {
            className: "container-narrow flex items-center justify-between h-16 px-6 md:px-12 lg:px-20",
            children: [S.jsx("a", {
                href: "#",
                className: "font-display text-xl tracking-tight text-foreground",
                children: "Meridian"
            }), S.jsxs("ul", {
                className: "hidden md:flex items-center gap-8",
                children: [Fm.map(n => S.jsx("li", {
                    children: S.jsx("a", {
                        href: n.href,
                        className: "text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200",
                        children: n.label
                    })
                }, n.href)), S.jsx("li", {
                    children: S.jsx("a", {
                        href: "#contact",
                        className: "inline-flex items-center px-5 py-2 text-sm font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200",
                        children: "Get in Touch"
                    })
                })]
            }), S.jsx("button", {
                onClick: () => t(!e),
                className: "md:hidden text-foreground",
                "aria-label": "Toggle menu",
                children: e ? S.jsx(Qf, {
                    size: 22
                }) : S.jsx(qk, {
                    size: 22
                })
            })]
        }), e && S.jsx("div", {
            className: "md:hidden bg-background border-b border-border",
            children: S.jsxs("ul", {
                className: "flex flex-col px-6 py-4 gap-3",
                children: [Fm.map(n => S.jsx("li", {
                    children: S.jsx("a", {
                        href: n.href,
                        onClick: () => t(!1),
                        className: "block py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors",
                        children: n.label
                    })
                }, n.href)), S.jsx("li", {
                    children: S.jsx("a", {
                        href: "#contact",
                        onClick: () => t(!1),
                        className: "inline-flex items-center px-5 py-2 text-sm font-medium rounded-md bg-primary text-primary-foreground",
                        children: "Get in Touch"
                    })
                })]
            })
        })]
    })
}
  , ww = w.createContext({});
function p2(e) {
    const t = w.useRef(null);
    return t.current === null && (t.current = e()),
    t.current
}
const Sw = typeof window < "u"
  , m2 = Sw ? w.useLayoutEffect : w.useEffect
  , uh = w.createContext(null);
function ch(e, t) {
    e.indexOf(t) === -1 && e.push(t)
}
function vl(e, t) {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
const pn = (e, t, n) => n > t ? t : n < e ? e : n;
let ou = () => {}
  , os = () => {}
;
const An = {}
  , bw = e => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
function Cw(e) {
    return typeof e == "object" && e !== null
}
const kw = e => /^0[^.\s]+$/u.test(e);
function dh(e) {
    let t;
    return () => (t === void 0 && (t = e()),
    t)
}
const Rt = e => e
  , g2 = (e, t) => n => t(e(n))
  , zo = (...e) => e.reduce(g2)
  , bo = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r
}
;
class fh {
    constructor() {
        this.subscriptions = []
    }
    add(t) {
        return ch(this.subscriptions, t),
        () => vl(this.subscriptions, t)
    }
    notify(t, n, r) {
        const i = this.subscriptions.length;
        if (i)
            if (i === 1)
                this.subscriptions[0](t, n, r);
            else
                for (let s = 0; s < i; s++) {
                    const o = this.subscriptions[s];
                    o && o(t, n, r)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
const At = e => e * 1e3
  , Pt = e => e / 1e3;
function Tw(e, t) {
    return t ? e * (1e3 / t) : 0
}
const Ew = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e
  , y2 = 1e-7
  , v2 = 12;
function x2(e, t, n, r, i) {
    let s, o, a = 0;
    do
        o = t + (n - t) / 2,
        s = Ew(o, r, i) - e,
        s > 0 ? n = o : t = o;
    while (Math.abs(s) > y2 && ++a < v2);
    return o
}
function $o(e, t, n, r) {
    if (e === t && n === r)
        return Rt;
    const i = s => x2(s, 0, 1, e, n);
    return s => s === 0 || s === 1 ? s : Ew(i(s), t, r)
}
const Pw = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2
  , _w = e => t => 1 - e(1 - t)
  , Rw = $o(.33, 1.53, .69, .99)
  , hh = _w(Rw)
  , Aw = Pw(hh)
  , Nw = e => (e *= 2) < 1 ? .5 * hh(e) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
  , ph = e => 1 - Math.sin(Math.acos(e))
  , Mw = _w(ph)
  , jw = Pw(ph)
  , w2 = $o(.42, 0, 1, 1)
  , S2 = $o(0, 0, .58, 1)
  , Ow = $o(.42, 0, .58, 1)
  , b2 = e => Array.isArray(e) && typeof e[0] != "number"
  , Dw = e => Array.isArray(e) && typeof e[0] == "number"
  , zm = {
    linear: Rt,
    easeIn: w2,
    easeInOut: Ow,
    easeOut: S2,
    circIn: ph,
    circInOut: jw,
    circOut: Mw,
    backIn: hh,
    backInOut: Aw,
    backOut: Rw,
    anticipate: Nw
}
  , C2 = e => typeof e == "string"
  , $m = e => {
    if (Dw(e)) {
        os(e.length === 4, "Cubic bezier arrays must contain four numerical values.", "cubic-bezier-length");
        const [t,n,r,i] = e;
        return $o(t, n, r, i)
    } else if (C2(e))
        return os(zm[e] !== void 0, `Invalid easing type '${e}'`, "invalid-easing-type"),
        zm[e];
    return e
}
  , ga = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"]
  , Bm = {
    value: null,
    addProjectionMetrics: null
};
function k2(e, t) {
    let n = new Set
      , r = new Set
      , i = !1
      , s = !1;
    const o = new WeakSet;
    let a = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
      , l = 0;
    function u(d) {
        o.has(d) && (c.schedule(d),
        e()),
        l++,
        d(a)
    }
    const c = {
        schedule: (d, f=!1, h=!1) => {
            const g = h && i ? n : r;
            return f && o.add(d),
            g.has(d) || g.add(d),
            d
        }
        ,
        cancel: d => {
            r.delete(d),
            o.delete(d)
        }
        ,
        process: d => {
            if (a = d,
            i) {
                s = !0;
                return
            }
            i = !0,
            [n,r] = [r, n],
            n.forEach(u),
            t && Bm.value && Bm.value.frameloop[t].push(l),
            l = 0,
            n.clear(),
            i = !1,
            s && (s = !1,
            c.process(d))
        }
    };
    return c
}
const T2 = 40;
function Lw(e, t) {
    let n = !1
      , r = !0;
    const i = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
      , s = () => n = !0
      , o = ga.reduce( (y, b) => (y[b] = k2(s, t ? b : void 0),
    y), {})
      , {setup: a, read: l, resolveKeyframes: u, preUpdate: c, update: d, preRender: f, render: h, postRender: v} = o
      , g = () => {
        const y = An.useManualTiming ? i.timestamp : performance.now();
        n = !1,
        An.useManualTiming || (i.delta = r ? 1e3 / 60 : Math.max(Math.min(y - i.timestamp, T2), 1)),
        i.timestamp = y,
        i.isProcessing = !0,
        a.process(i),
        l.process(i),
        u.process(i),
        c.process(i),
        d.process(i),
        f.process(i),
        h.process(i),
        v.process(i),
        i.isProcessing = !1,
        n && t && (r = !1,
        e(g))
    }
      , x = () => {
        n = !0,
        r = !0,
        i.isProcessing || e(g)
    }
    ;
    return {
        schedule: ga.reduce( (y, b) => {
            const C = o[b];
            return y[b] = (k, T=!1, E=!1) => (n || x(),
            C.schedule(k, T, E)),
            y
        }
        , {}),
        cancel: y => {
            for (let b = 0; b < ga.length; b++)
                o[ga[b]].cancel(y)
        }
        ,
        state: i,
        steps: o
    }
}
const {schedule: he, cancel: Sr, state: Ve, steps: Qu} = Lw(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Rt, !0);
let Da;
function E2() {
    Da = void 0
}
const et = {
    now: () => (Da === void 0 && et.set(Ve.isProcessing || An.useManualTiming ? Ve.timestamp : performance.now()),
    Da),
    set: e => {
        Da = e,
        queueMicrotask(E2)
    }
}
  , Iw = e => t => typeof t == "string" && t.startsWith(e)
  , Vw = Iw("--")
  , P2 = Iw("var(--")
  , mh = e => P2(e) ? _2.test(e.split("/*")[0].trim()) : !1
  , _2 = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function Um(e) {
    return typeof e != "string" ? !1 : e.split("/*")[0].includes("var(--")
}
const vs = {
    test: e => typeof e == "number",
    parse: parseFloat,
    transform: e => e
}
  , Co = {
    ...vs,
    transform: e => pn(0, 1, e)
}
  , ya = {
    ...vs,
    default: 1
}
  , Ys = e => Math.round(e * 1e5) / 1e5
  , gh = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function R2(e) {
    return e == null
}
const A2 = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu
  , yh = (e, t) => n => !!(typeof n == "string" && A2.test(n) && n.startsWith(e) || t && !R2(n) && Object.prototype.hasOwnProperty.call(n, t))
  , Fw = (e, t, n) => r => {
    if (typeof r != "string")
        return r;
    const [i,s,o,a] = r.match(gh);
    return {
        [e]: parseFloat(i),
        [t]: parseFloat(s),
        [n]: parseFloat(o),
        alpha: a !== void 0 ? parseFloat(a) : 1
    }
}
  , N2 = e => pn(0, 255, e)
  , Yu = {
    ...vs,
    transform: e => Math.round(N2(e))
}
  , Fr = {
    test: yh("rgb", "red"),
    parse: Fw("red", "green", "blue"),
    transform: ({red: e, green: t, blue: n, alpha: r=1}) => "rgba(" + Yu.transform(e) + ", " + Yu.transform(t) + ", " + Yu.transform(n) + ", " + Ys(Co.transform(r)) + ")"
};
function M2(e) {
    let t = ""
      , n = ""
      , r = ""
      , i = "";
    return e.length > 5 ? (t = e.substring(1, 3),
    n = e.substring(3, 5),
    r = e.substring(5, 7),
    i = e.substring(7, 9)) : (t = e.substring(1, 2),
    n = e.substring(2, 3),
    r = e.substring(3, 4),
    i = e.substring(4, 5),
    t += t,
    n += n,
    r += r,
    i += i),
    {
        red: parseInt(t, 16),
        green: parseInt(n, 16),
        blue: parseInt(r, 16),
        alpha: i ? parseInt(i, 16) / 255 : 1
    }
}
const bd = {
    test: yh("#"),
    parse: M2,
    transform: Fr.transform
}
  , Bo = e => ({
    test: t => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: t => `${t}${e}`
})
  , Un = Bo("deg")
  , dn = Bo("%")
  , z = Bo("px")
  , j2 = Bo("vh")
  , O2 = Bo("vw")
  , Wm = {
    ...dn,
    parse: e => dn.parse(e) / 100,
    transform: e => dn.transform(e * 100)
}
  , _i = {
    test: yh("hsl", "hue"),
    parse: Fw("hue", "saturation", "lightness"),
    transform: ({hue: e, saturation: t, lightness: n, alpha: r=1}) => "hsla(" + Math.round(e) + ", " + dn.transform(Ys(t)) + ", " + dn.transform(Ys(n)) + ", " + Ys(Co.transform(r)) + ")"
}
  , Re = {
    test: e => Fr.test(e) || bd.test(e) || _i.test(e),
    parse: e => Fr.test(e) ? Fr.parse(e) : _i.test(e) ? _i.parse(e) : bd.parse(e),
    transform: e => typeof e == "string" ? e : e.hasOwnProperty("red") ? Fr.transform(e) : _i.transform(e),
    getAnimatableNone: e => {
        const t = Re.parse(e);
        return t.alpha = 0,
        Re.transform(t)
    }
}
  , D2 = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function L2(e) {
    var t, n;
    return isNaN(e) && typeof e == "string" && (((t = e.match(gh)) == null ? void 0 : t.length) || 0) + (((n = e.match(D2)) == null ? void 0 : n.length) || 0) > 0
}
const zw = "number"
  , $w = "color"
  , I2 = "var"
  , V2 = "var("
  , Hm = "${}"
  , F2 = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function ko(e) {
    const t = e.toString()
      , n = []
      , r = {
        color: [],
        number: [],
        var: []
    }
      , i = [];
    let s = 0;
    const a = t.replace(F2, l => (Re.test(l) ? (r.color.push(s),
    i.push($w),
    n.push(Re.parse(l))) : l.startsWith(V2) ? (r.var.push(s),
    i.push(I2),
    n.push(l)) : (r.number.push(s),
    i.push(zw),
    n.push(parseFloat(l))),
    ++s,
    Hm)).split(Hm);
    return {
        values: n,
        split: a,
        indexes: r,
        types: i
    }
}
function Bw(e) {
    return ko(e).values
}
function Uw(e) {
    const {split: t, types: n} = ko(e)
      , r = t.length;
    return i => {
        let s = "";
        for (let o = 0; o < r; o++)
            if (s += t[o],
            i[o] !== void 0) {
                const a = n[o];
                a === zw ? s += Ys(i[o]) : a === $w ? s += Re.transform(i[o]) : s += i[o]
            }
        return s
    }
}
const z2 = e => typeof e == "number" ? 0 : Re.test(e) ? Re.getAnimatableNone(e) : e;
function $2(e) {
    const t = Bw(e);
    return Uw(e)(t.map(z2))
}
const br = {
    test: L2,
    parse: Bw,
    createTransformer: Uw,
    getAnimatableNone: $2
};
function Xu(e, t, n) {
    return n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}
function B2({hue: e, saturation: t, lightness: n, alpha: r}) {
    e /= 360,
    t /= 100,
    n /= 100;
    let i = 0
      , s = 0
      , o = 0;
    if (!t)
        i = s = o = n;
    else {
        const a = n < .5 ? n * (1 + t) : n + t - n * t
          , l = 2 * n - a;
        i = Xu(l, a, e + 1 / 3),
        s = Xu(l, a, e),
        o = Xu(l, a, e - 1 / 3)
    }
    return {
        red: Math.round(i * 255),
        green: Math.round(s * 255),
        blue: Math.round(o * 255),
        alpha: r
    }
}
function xl(e, t) {
    return n => n > 0 ? t : e
}
const Se = (e, t, n) => e + (t - e) * n
  , qu = (e, t, n) => {
    const r = e * e
      , i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i)
}
  , U2 = [bd, Fr, _i]
  , W2 = e => U2.find(t => t.test(e));
function Km(e) {
    const t = W2(e);
    if (ou(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable"),
    !t)
        return !1;
    let n = t.parse(e);
    return t === _i && (n = B2(n)),
    n
}
const Zm = (e, t) => {
    const n = Km(e)
      , r = Km(t);
    if (!n || !r)
        return xl(e, t);
    const i = {
        ...n
    };
    return s => (i.red = qu(n.red, r.red, s),
    i.green = qu(n.green, r.green, s),
    i.blue = qu(n.blue, r.blue, s),
    i.alpha = Se(n.alpha, r.alpha, s),
    Fr.transform(i))
}
  , Cd = new Set(["none", "hidden"]);
function H2(e, t) {
    return Cd.has(e) ? n => n <= 0 ? e : t : n => n >= 1 ? t : e
}
function K2(e, t) {
    return n => Se(e, t, n)
}
function vh(e) {
    return typeof e == "number" ? K2 : typeof e == "string" ? mh(e) ? xl : Re.test(e) ? Zm : Q2 : Array.isArray(e) ? Ww : typeof e == "object" ? Re.test(e) ? Zm : Z2 : xl
}
function Ww(e, t) {
    const n = [...e]
      , r = n.length
      , i = e.map( (s, o) => vh(s)(s, t[o]));
    return s => {
        for (let o = 0; o < r; o++)
            n[o] = i[o](s);
        return n
    }
}
function Z2(e, t) {
    const n = {
        ...e,
        ...t
    }
      , r = {};
    for (const i in n)
        e[i] !== void 0 && t[i] !== void 0 && (r[i] = vh(e[i])(e[i], t[i]));
    return i => {
        for (const s in r)
            n[s] = r[s](i);
        return n
    }
}
function G2(e, t) {
    const n = []
      , r = {
        color: 0,
        var: 0,
        number: 0
    };
    for (let i = 0; i < t.values.length; i++) {
        const s = t.types[i]
          , o = e.indexes[s][r[s]]
          , a = e.values[o] ?? 0;
        n[i] = a,
        r[s]++
    }
    return n
}
const Q2 = (e, t) => {
    const n = br.createTransformer(t)
      , r = ko(e)
      , i = ko(t);
    return r.indexes.var.length === i.indexes.var.length && r.indexes.color.length === i.indexes.color.length && r.indexes.number.length >= i.indexes.number.length ? Cd.has(e) && !i.values.length || Cd.has(t) && !r.values.length ? H2(e, t) : zo(Ww(G2(r, i), i.values), n) : (ou(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different"),
    xl(e, t))
}
;
function Hw(e, t, n) {
    return typeof e == "number" && typeof t == "number" && typeof n == "number" ? Se(e, t, n) : vh(e)(e, t)
}
const Y2 = e => {
    const t = ({timestamp: n}) => e(n);
    return {
        start: (n=!0) => he.update(t, n),
        stop: () => Sr(t),
        now: () => Ve.isProcessing ? Ve.timestamp : et.now()
    }
}
  , Kw = (e, t, n=10) => {
    let r = "";
    const i = Math.max(Math.round(t / n), 2);
    for (let s = 0; s < i; s++)
        r += Math.round(e(s / (i - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${r.substring(0, r.length - 2)})`
}
  , wl = 2e4;
function xh(e) {
    let t = 0;
    const n = 50;
    let r = e.next(t);
    for (; !r.done && t < wl; )
        t += n,
        r = e.next(t);
    return t >= wl ? 1 / 0 : t
}
function X2(e, t=100, n) {
    const r = n({
        ...e,
        keyframes: [0, t]
    })
      , i = Math.min(xh(r), wl);
    return {
        type: "keyframes",
        ease: s => r.next(i * s).value / t,
        duration: Pt(i)
    }
}
const q2 = 5;
function Zw(e, t, n) {
    const r = Math.max(t - q2, 0);
    return Tw(n - e(r), t - r)
}
const xe = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: .3,
    visualDuration: .3,
    restSpeed: {
        granular: .01,
        default: 2
    },
    restDelta: {
        granular: .005,
        default: .5
    },
    minDuration: .01,
    maxDuration: 10,
    minDamping: .05,
    maxDamping: 1
}
  , Ju = .001;
function J2({duration: e=xe.duration, bounce: t=xe.bounce, velocity: n=xe.velocity, mass: r=xe.mass}) {
    let i, s;
    ou(e <= At(xe.maxDuration), "Spring duration must be 10 seconds or less", "spring-duration-limit");
    let o = 1 - t;
    o = pn(xe.minDamping, xe.maxDamping, o),
    e = pn(xe.minDuration, xe.maxDuration, Pt(e)),
    o < 1 ? (i = u => {
        const c = u * o
          , d = c * e
          , f = c - n
          , h = kd(u, o)
          , v = Math.exp(-d);
        return Ju - f / h * v
    }
    ,
    s = u => {
        const d = u * o * e
          , f = d * n + n
          , h = Math.pow(o, 2) * Math.pow(u, 2) * e
          , v = Math.exp(-d)
          , g = kd(Math.pow(u, 2), o);
        return (-i(u) + Ju > 0 ? -1 : 1) * ((f - h) * v) / g
    }
    ) : (i = u => {
        const c = Math.exp(-u * e)
          , d = (u - n) * e + 1;
        return -Ju + c * d
    }
    ,
    s = u => {
        const c = Math.exp(-u * e)
          , d = (n - u) * (e * e);
        return c * d
    }
    );
    const a = 5 / e
      , l = tR(i, s, a);
    if (e = At(e),
    isNaN(l))
        return {
            stiffness: xe.stiffness,
            damping: xe.damping,
            duration: e
        };
    {
        const u = Math.pow(l, 2) * r;
        return {
            stiffness: u,
            damping: o * 2 * Math.sqrt(r * u),
            duration: e
        }
    }
}
const eR = 12;
function tR(e, t, n) {
    let r = n;
    for (let i = 1; i < eR; i++)
        r = r - e(r) / t(r);
    return r
}
function kd(e, t) {
    return e * Math.sqrt(1 - t * t)
}
const nR = ["duration", "bounce"]
  , rR = ["stiffness", "damping", "mass"];
function Gm(e, t) {
    return t.some(n => e[n] !== void 0)
}
function iR(e) {
    let t = {
        velocity: xe.velocity,
        stiffness: xe.stiffness,
        damping: xe.damping,
        mass: xe.mass,
        isResolvedFromDuration: !1,
        ...e
    };
    if (!Gm(e, rR) && Gm(e, nR))
        if (e.visualDuration) {
            const n = e.visualDuration
              , r = 2 * Math.PI / (n * 1.2)
              , i = r * r
              , s = 2 * pn(.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
            t = {
                ...t,
                mass: xe.mass,
                stiffness: i,
                damping: s
            }
        } else {
            const n = J2(e);
            t = {
                ...t,
                ...n,
                mass: xe.mass
            },
            t.isResolvedFromDuration = !0
        }
    return t
}
function Sl(e=xe.visualDuration, t=xe.bounce) {
    const n = typeof e != "object" ? {
        visualDuration: e,
        keyframes: [0, 1],
        bounce: t
    } : e;
    let {restSpeed: r, restDelta: i} = n;
    const s = n.keyframes[0]
      , o = n.keyframes[n.keyframes.length - 1]
      , a = {
        done: !1,
        value: s
    }
      , {stiffness: l, damping: u, mass: c, duration: d, velocity: f, isResolvedFromDuration: h} = iR({
        ...n,
        velocity: -Pt(n.velocity || 0)
    })
      , v = f || 0
      , g = u / (2 * Math.sqrt(l * c))
      , x = o - s
      , m = Pt(Math.sqrt(l / c))
      , p = Math.abs(x) < 5;
    r || (r = p ? xe.restSpeed.granular : xe.restSpeed.default),
    i || (i = p ? xe.restDelta.granular : xe.restDelta.default);
    let y;
    if (g < 1) {
        const C = kd(m, g);
        y = k => {
            const T = Math.exp(-g * m * k);
            return o - T * ((v + g * m * x) / C * Math.sin(C * k) + x * Math.cos(C * k))
        }
    } else if (g === 1)
        y = C => o - Math.exp(-m * C) * (x + (v + m * x) * C);
    else {
        const C = m * Math.sqrt(g * g - 1);
        y = k => {
            const T = Math.exp(-g * m * k)
              , E = Math.min(C * k, 300);
            return o - T * ((v + g * m * x) * Math.sinh(E) + C * x * Math.cosh(E)) / C
        }
    }
    const b = {
        calculatedDuration: h && d || null,
        next: C => {
            const k = y(C);
            if (h)
                a.done = C >= d;
            else {
                let T = C === 0 ? v : 0;
                g < 1 && (T = C === 0 ? At(v) : Zw(y, C, k));
                const E = Math.abs(T) <= r
                  , M = Math.abs(o - k) <= i;
                a.done = E && M
            }
            return a.value = a.done ? o : k,
            a
        }
        ,
        toString: () => {
            const C = Math.min(xh(b), wl)
              , k = Kw(T => b.next(C * T).value, C, 30);
            return C + "ms " + k
        }
        ,
        toTransition: () => {}
    };
    return b
}
Sl.applyToOptions = e => {
    const t = X2(e, 100, Sl);
    return e.ease = t.ease,
    e.duration = At(t.duration),
    e.type = "keyframes",
    e
}
;
function Td({keyframes: e, velocity: t=0, power: n=.8, timeConstant: r=325, bounceDamping: i=10, bounceStiffness: s=500, modifyTarget: o, min: a, max: l, restDelta: u=.5, restSpeed: c}) {
    const d = e[0]
      , f = {
        done: !1,
        value: d
    }
      , h = E => a !== void 0 && E < a || l !== void 0 && E > l
      , v = E => a === void 0 ? l : l === void 0 || Math.abs(a - E) < Math.abs(l - E) ? a : l;
    let g = n * t;
    const x = d + g
      , m = o === void 0 ? x : o(x);
    m !== x && (g = m - d);
    const p = E => -g * Math.exp(-E / r)
      , y = E => m + p(E)
      , b = E => {
        const M = p(E)
          , N = y(E);
        f.done = Math.abs(M) <= u,
        f.value = f.done ? m : N
    }
    ;
    let C, k;
    const T = E => {
        h(f.value) && (C = E,
        k = Sl({
            keyframes: [f.value, v(f.value)],
            velocity: Zw(y, E, f.value),
            damping: i,
            stiffness: s,
            restDelta: u,
            restSpeed: c
        }))
    }
    ;
    return T(0),
    {
        calculatedDuration: null,
        next: E => {
            let M = !1;
            return !k && C === void 0 && (M = !0,
            b(E),
            T(E)),
            C !== void 0 && E >= C ? k.next(E - C) : (!M && b(E),
            f)
        }
    }
}
function sR(e, t, n) {
    const r = []
      , i = n || An.mix || Hw
      , s = e.length - 1;
    for (let o = 0; o < s; o++) {
        let a = i(e[o], e[o + 1]);
        if (t) {
            const l = Array.isArray(t) ? t[o] || Rt : t;
            a = zo(l, a)
        }
        r.push(a)
    }
    return r
}
function oR(e, t, {clamp: n=!0, ease: r, mixer: i}={}) {
    const s = e.length;
    if (os(s === t.length, "Both input and output ranges must be the same length", "range-length"),
    s === 1)
        return () => t[0];
    if (s === 2 && t[0] === t[1])
        return () => t[1];
    const o = e[0] === e[1];
    e[0] > e[s - 1] && (e = [...e].reverse(),
    t = [...t].reverse());
    const a = sR(t, r, i)
      , l = a.length
      , u = c => {
        if (o && c < e[0])
            return t[0];
        let d = 0;
        if (l > 1)
            for (; d < e.length - 2 && !(c < e[d + 1]); d++)
                ;
        const f = bo(e[d], e[d + 1], c);
        return a[d](f)
    }
    ;
    return n ? c => u(pn(e[0], e[s - 1], c)) : u
}
function aR(e, t) {
    const n = e[e.length - 1];
    for (let r = 1; r <= t; r++) {
        const i = bo(0, t, r);
        e.push(Se(n, 1, i))
    }
}
function lR(e) {
    const t = [0];
    return aR(t, e.length - 1),
    t
}
function uR(e, t) {
    return e.map(n => n * t)
}
function cR(e, t) {
    return e.map( () => t || Ow).splice(0, e.length - 1)
}
function Xs({duration: e=300, keyframes: t, times: n, ease: r="easeInOut"}) {
    const i = b2(r) ? r.map($m) : $m(r)
      , s = {
        done: !1,
        value: t[0]
    }
      , o = uR(n && n.length === t.length ? n : lR(t), e)
      , a = oR(o, t, {
        ease: Array.isArray(i) ? i : cR(t, i)
    });
    return {
        calculatedDuration: e,
        next: l => (s.value = a(l),
        s.done = l >= e,
        s)
    }
}
const dR = e => e !== null;
function wh(e, {repeat: t, repeatType: n="loop"}, r, i=1) {
    const s = e.filter(dR)
      , a = i < 0 || t && n !== "loop" && t % 2 === 1 ? 0 : s.length - 1;
    return !a || r === void 0 ? s[a] : r
}
const fR = {
    decay: Td,
    inertia: Td,
    tween: Xs,
    keyframes: Xs,
    spring: Sl
};
function Gw(e) {
    typeof e.type == "string" && (e.type = fR[e.type])
}
class Sh {
    constructor() {
        this.updateFinished()
    }
    get finished() {
        return this._finished
    }
    updateFinished() {
        this._finished = new Promise(t => {
            this.resolve = t
        }
        )
    }
    notifyFinished() {
        this.resolve()
    }
    then(t, n) {
        return this.finished.then(t, n)
    }
}
const hR = e => e / 100;
class bh extends Sh {
    constructor(t) {
        super(),
        this.state = "idle",
        this.startTime = null,
        this.isStopped = !1,
        this.currentTime = 0,
        this.holdTime = null,
        this.playbackSpeed = 1,
        this.stop = () => {
            var r, i;
            const {motionValue: n} = this.options;
            n && n.updatedAt !== et.now() && this.tick(et.now()),
            this.isStopped = !0,
            this.state !== "idle" && (this.teardown(),
            (i = (r = this.options).onStop) == null || i.call(r))
        }
        ,
        this.options = t,
        this.initAnimation(),
        this.play(),
        t.autoplay === !1 && this.pause()
    }
    initAnimation() {
        const {options: t} = this;
        Gw(t);
        const {type: n=Xs, repeat: r=0, repeatDelay: i=0, repeatType: s, velocity: o=0} = t;
        let {keyframes: a} = t;
        const l = n || Xs;
        l !== Xs && typeof a[0] != "number" && (this.mixKeyframes = zo(hR, Hw(a[0], a[1])),
        a = [0, 100]);
        const u = l({
            ...t,
            keyframes: a
        });
        s === "mirror" && (this.mirroredGenerator = l({
            ...t,
            keyframes: [...a].reverse(),
            velocity: -o
        })),
        u.calculatedDuration === null && (u.calculatedDuration = xh(u));
        const {calculatedDuration: c} = u;
        this.calculatedDuration = c,
        this.resolvedDuration = c + i,
        this.totalDuration = this.resolvedDuration * (r + 1) - i,
        this.generator = u
    }
    updateTime(t) {
        const n = Math.round(t - this.startTime) * this.playbackSpeed;
        this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = n
    }
    tick(t, n=!1) {
        const {generator: r, totalDuration: i, mixKeyframes: s, mirroredGenerator: o, resolvedDuration: a, calculatedDuration: l} = this;
        if (this.startTime === null)
            return r.next(0);
        const {delay: u=0, keyframes: c, repeat: d, repeatType: f, repeatDelay: h, type: v, onUpdate: g, finalKeyframe: x} = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - i / this.speed, this.startTime)),
        n ? this.currentTime = t : this.updateTime(t);
        const m = this.currentTime - u * (this.playbackSpeed >= 0 ? 1 : -1)
          , p = this.playbackSpeed >= 0 ? m < 0 : m > i;
        this.currentTime = Math.max(m, 0),
        this.state === "finished" && this.holdTime === null && (this.currentTime = i);
        let y = this.currentTime
          , b = r;
        if (d) {
            const E = Math.min(this.currentTime, i) / a;
            let M = Math.floor(E)
              , N = E % 1;
            !N && E >= 1 && (N = 1),
            N === 1 && M--,
            M = Math.min(M, d + 1),
            !!(M % 2) && (f === "reverse" ? (N = 1 - N,
            h && (N -= h / a)) : f === "mirror" && (b = o)),
            y = pn(0, 1, N) * a
        }
        const C = p ? {
            done: !1,
            value: c[0]
        } : b.next(y);
        s && (C.value = s(C.value));
        let {done: k} = C;
        !p && l !== null && (k = this.playbackSpeed >= 0 ? this.currentTime >= i : this.currentTime <= 0);
        const T = this.holdTime === null && (this.state === "finished" || this.state === "running" && k);
        return T && v !== Td && (C.value = wh(c, this.options, x, this.speed)),
        g && g(C.value),
        T && this.finish(),
        C
    }
    then(t, n) {
        return this.finished.then(t, n)
    }
    get duration() {
        return Pt(this.calculatedDuration)
    }
    get iterationDuration() {
        const {delay: t=0} = this.options || {};
        return this.duration + Pt(t)
    }
    get time() {
        return Pt(this.currentTime)
    }
    set time(t) {
        var n;
        t = At(t),
        this.currentTime = t,
        this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.playbackSpeed),
        (n = this.driver) == null || n.start(!1)
    }
    get speed() {
        return this.playbackSpeed
    }
    set speed(t) {
        this.updateTime(et.now());
        const n = this.playbackSpeed !== t;
        this.playbackSpeed = t,
        n && (this.time = Pt(this.currentTime))
    }
    play() {
        var i, s;
        if (this.isStopped)
            return;
        const {driver: t=Y2, startTime: n} = this.options;
        this.driver || (this.driver = t(o => this.tick(o))),
        (s = (i = this.options).onPlay) == null || s.call(i);
        const r = this.driver.now();
        this.state === "finished" ? (this.updateFinished(),
        this.startTime = r) : this.holdTime !== null ? this.startTime = r - this.holdTime : this.startTime || (this.startTime = n ?? r),
        this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration),
        this.holdTime = null,
        this.state = "running",
        this.driver.start()
    }
    pause() {
        this.state = "paused",
        this.updateTime(et.now()),
        this.holdTime = this.currentTime
    }
    complete() {
        this.state !== "running" && this.play(),
        this.state = "finished",
        this.holdTime = null
    }
    finish() {
        var t, n;
        this.notifyFinished(),
        this.teardown(),
        this.state = "finished",
        (n = (t = this.options).onComplete) == null || n.call(t)
    }
    cancel() {
        var t, n;
        this.holdTime = null,
        this.startTime = 0,
        this.tick(0),
        this.teardown(),
        (n = (t = this.options).onCancel) == null || n.call(t)
    }
    teardown() {
        this.state = "idle",
        this.stopDriver(),
        this.startTime = this.holdTime = null
    }
    stopDriver() {
        this.driver && (this.driver.stop(),
        this.driver = void 0)
    }
    sample(t) {
        return this.startTime = 0,
        this.tick(t, !0)
    }
    attachTimeline(t) {
        var n;
        return this.options.allowFlatten && (this.options.type = "keyframes",
        this.options.ease = "linear",
        this.initAnimation()),
        (n = this.driver) == null || n.stop(),
        t.observe(this)
    }
}
function pR(e) {
    for (let t = 1; t < e.length; t++)
        e[t] ?? (e[t] = e[t - 1])
}
const zr = e => e * 180 / Math.PI
  , Ed = e => {
    const t = zr(Math.atan2(e[1], e[0]));
    return Pd(t)
}
  , mR = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: e => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
    rotate: Ed,
    rotateZ: Ed,
    skewX: e => zr(Math.atan(e[1])),
    skewY: e => zr(Math.atan(e[2])),
    skew: e => (Math.abs(e[1]) + Math.abs(e[2])) / 2
}
  , Pd = e => (e = e % 360,
e < 0 && (e += 360),
e)
  , Qm = Ed
  , Ym = e => Math.sqrt(e[0] * e[0] + e[1] * e[1])
  , Xm = e => Math.sqrt(e[4] * e[4] + e[5] * e[5])
  , gR = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: Ym,
    scaleY: Xm,
    scale: e => (Ym(e) + Xm(e)) / 2,
    rotateX: e => Pd(zr(Math.atan2(e[6], e[5]))),
    rotateY: e => Pd(zr(Math.atan2(-e[2], e[0]))),
    rotateZ: Qm,
    rotate: Qm,
    skewX: e => zr(Math.atan(e[4])),
    skewY: e => zr(Math.atan(e[1])),
    skew: e => (Math.abs(e[1]) + Math.abs(e[4])) / 2
};
function _d(e) {
    return e.includes("scale") ? 1 : 0
}
function Rd(e, t) {
    if (!e || e === "none")
        return _d(t);
    const n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
    let r, i;
    if (n)
        r = gR,
        i = n;
    else {
        const a = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
        r = mR,
        i = a
    }
    if (!i)
        return _d(t);
    const s = r[t]
      , o = i[1].split(",").map(vR);
    return typeof s == "function" ? s(o) : o[s]
}
const yR = (e, t) => {
    const {transform: n="none"} = getComputedStyle(e);
    return Rd(n, t)
}
;
function vR(e) {
    return parseFloat(e.trim())
}
const xs = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
  , ws = new Set(xs)
  , qm = e => e === vs || e === z
  , xR = new Set(["x", "y", "z"])
  , wR = xs.filter(e => !xR.has(e));
function SR(e) {
    const t = [];
    return wR.forEach(n => {
        const r = e.getValue(n);
        r !== void 0 && (t.push([n, r.get()]),
        r.set(n.startsWith("scale") ? 1 : 0))
    }
    ),
    t
}
const ir = {
    width: ({x: e}, {paddingLeft: t="0", paddingRight: n="0"}) => e.max - e.min - parseFloat(t) - parseFloat(n),
    height: ({y: e}, {paddingTop: t="0", paddingBottom: n="0"}) => e.max - e.min - parseFloat(t) - parseFloat(n),
    top: (e, {top: t}) => parseFloat(t),
    left: (e, {left: t}) => parseFloat(t),
    bottom: ({y: e}, {top: t}) => parseFloat(t) + (e.max - e.min),
    right: ({x: e}, {left: t}) => parseFloat(t) + (e.max - e.min),
    x: (e, {transform: t}) => Rd(t, "x"),
    y: (e, {transform: t}) => Rd(t, "y")
};
ir.translateX = ir.x;
ir.translateY = ir.y;
const Qr = new Set;
let Ad = !1
  , Nd = !1
  , Md = !1;
function Qw() {
    if (Nd) {
        const e = Array.from(Qr).filter(r => r.needsMeasurement)
          , t = new Set(e.map(r => r.element))
          , n = new Map;
        t.forEach(r => {
            const i = SR(r);
            i.length && (n.set(r, i),
            r.render())
        }
        ),
        e.forEach(r => r.measureInitialState()),
        t.forEach(r => {
            r.render();
            const i = n.get(r);
            i && i.forEach( ([s,o]) => {
                var a;
                (a = r.getValue(s)) == null || a.set(o)
            }
            )
        }
        ),
        e.forEach(r => r.measureEndState()),
        e.forEach(r => {
            r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY)
        }
        )
    }
    Nd = !1,
    Ad = !1,
    Qr.forEach(e => e.complete(Md)),
    Qr.clear()
}
function Yw() {
    Qr.forEach(e => {
        e.readKeyframes(),
        e.needsMeasurement && (Nd = !0)
    }
    )
}
function bR() {
    Md = !0,
    Yw(),
    Qw(),
    Md = !1
}
class Ch {
    constructor(t, n, r, i, s, o=!1) {
        this.state = "pending",
        this.isAsync = !1,
        this.needsMeasurement = !1,
        this.unresolvedKeyframes = [...t],
        this.onComplete = n,
        this.name = r,
        this.motionValue = i,
        this.element = s,
        this.isAsync = o
    }
    scheduleResolve() {
        this.state = "scheduled",
        this.isAsync ? (Qr.add(this),
        Ad || (Ad = !0,
        he.read(Yw),
        he.resolveKeyframes(Qw))) : (this.readKeyframes(),
        this.complete())
    }
    readKeyframes() {
        const {unresolvedKeyframes: t, name: n, element: r, motionValue: i} = this;
        if (t[0] === null) {
            const s = i == null ? void 0 : i.get()
              , o = t[t.length - 1];
            if (s !== void 0)
                t[0] = s;
            else if (r && n) {
                const a = r.readValue(n, o);
                a != null && (t[0] = a)
            }
            t[0] === void 0 && (t[0] = o),
            i && s === void 0 && i.set(t[0])
        }
        pR(t)
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete(t=!1) {
        this.state = "complete",
        this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t),
        Qr.delete(this)
    }
    cancel() {
        this.state === "scheduled" && (Qr.delete(this),
        this.state = "pending")
    }
    resume() {
        this.state === "pending" && this.scheduleResolve()
    }
}
const CR = e => e.startsWith("--");
function kR(e, t, n) {
    CR(t) ? e.style.setProperty(t, n) : e.style[t] = n
}
const TR = dh( () => window.ScrollTimeline !== void 0)
  , ER = {};
function PR(e, t) {
    const n = dh(e);
    return () => ER[t] ?? n()
}
const Xw = PR( () => {
    try {
        document.createElement("div").animate({
            opacity: 0
        }, {
            easing: "linear(0, 1)"
        })
    } catch {
        return !1
    }
    return !0
}
, "linearEasing")
  , Vs = ([e,t,n,r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`
  , Jm = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Vs([0, .65, .55, 1]),
    circOut: Vs([.55, 0, 1, .45]),
    backIn: Vs([.31, .01, .66, -.59]),
    backOut: Vs([.33, 1.53, .69, .99])
};
function qw(e, t) {
    if (e)
        return typeof e == "function" ? Xw() ? Kw(e, t) : "ease-out" : Dw(e) ? Vs(e) : Array.isArray(e) ? e.map(n => qw(n, t) || Jm.easeOut) : Jm[e]
}
function _R(e, t, n, {delay: r=0, duration: i=300, repeat: s=0, repeatType: o="loop", ease: a="easeOut", times: l}={}, u=void 0) {
    const c = {
        [t]: n
    };
    l && (c.offset = l);
    const d = qw(a, i);
    Array.isArray(d) && (c.easing = d);
    const f = {
        delay: r,
        duration: i,
        easing: Array.isArray(d) ? "linear" : d,
        fill: "both",
        iterations: s + 1,
        direction: o === "reverse" ? "alternate" : "normal"
    };
    return u && (f.pseudoElement = u),
    e.animate(c, f)
}
function Jw(e) {
    return typeof e == "function" && "applyToOptions"in e
}
function RR({type: e, ...t}) {
    return Jw(e) && Xw() ? e.applyToOptions(t) : (t.duration ?? (t.duration = 300),
    t.ease ?? (t.ease = "easeOut"),
    t)
}
class e1 extends Sh {
    constructor(t) {
        if (super(),
        this.finishedTime = null,
        this.isStopped = !1,
        this.manualStartTime = null,
        !t)
            return;
        const {element: n, name: r, keyframes: i, pseudoElement: s, allowFlatten: o=!1, finalKeyframe: a, onComplete: l} = t;
        this.isPseudoElement = !!s,
        this.allowFlatten = o,
        this.options = t,
        os(typeof t.type != "string", `Mini animate() doesn't support "type" as a string.`, "mini-spring");
        const u = RR(t);
        this.animation = _R(n, r, i, u, s),
        u.autoplay === !1 && this.animation.pause(),
        this.animation.onfinish = () => {
            if (this.finishedTime = this.time,
            !s) {
                const c = wh(i, this.options, a, this.speed);
                this.updateMotionValue ? this.updateMotionValue(c) : kR(n, r, c),
                this.animation.cancel()
            }
            l == null || l(),
            this.notifyFinished()
        }
    }
    play() {
        this.isStopped || (this.manualStartTime = null,
        this.animation.play(),
        this.state === "finished" && this.updateFinished())
    }
    pause() {
        this.animation.pause()
    }
    complete() {
        var t, n;
        (n = (t = this.animation).finish) == null || n.call(t)
    }
    cancel() {
        try {
            this.animation.cancel()
        } catch {}
    }
    stop() {
        if (this.isStopped)
            return;
        this.isStopped = !0;
        const {state: t} = this;
        t === "idle" || t === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
        this.isPseudoElement || this.cancel())
    }
    commitStyles() {
        var n, r, i;
        const t = (n = this.options) == null ? void 0 : n.element;
        !this.isPseudoElement && (t != null && t.isConnected) && ((i = (r = this.animation).commitStyles) == null || i.call(r))
    }
    get duration() {
        var n, r;
        const t = ((r = (n = this.animation.effect) == null ? void 0 : n.getComputedTiming) == null ? void 0 : r.call(n).duration) || 0;
        return Pt(Number(t))
    }
    get iterationDuration() {
        const {delay: t=0} = this.options || {};
        return this.duration + Pt(t)
    }
    get time() {
        return Pt(Number(this.animation.currentTime) || 0)
    }
    set time(t) {
        this.manualStartTime = null,
        this.finishedTime = null,
        this.animation.currentTime = At(t)
    }
    get speed() {
        return this.animation.playbackRate
    }
    set speed(t) {
        t < 0 && (this.finishedTime = null),
        this.animation.playbackRate = t
    }
    get state() {
        return this.finishedTime !== null ? "finished" : this.animation.playState
    }
    get startTime() {
        return this.manualStartTime ?? Number(this.animation.startTime)
    }
    set startTime(t) {
        this.manualStartTime = this.animation.startTime = t
    }
    attachTimeline({timeline: t, observe: n}) {
        var r;
        return this.allowFlatten && ((r = this.animation.effect) == null || r.updateTiming({
            easing: "linear"
        })),
        this.animation.onfinish = null,
        t && TR() ? (this.animation.timeline = t,
        Rt) : n(this)
    }
}
const t1 = {
    anticipate: Nw,
    backInOut: Aw,
    circInOut: jw
};
function AR(e) {
    return e in t1
}
function NR(e) {
    typeof e.ease == "string" && AR(e.ease) && (e.ease = t1[e.ease])
}
const ec = 10;
class MR extends e1 {
    constructor(t) {
        NR(t),
        Gw(t),
        super(t),
        t.startTime !== void 0 && (this.startTime = t.startTime),
        this.options = t
    }
    updateMotionValue(t) {
        const {motionValue: n, onUpdate: r, onComplete: i, element: s, ...o} = this.options;
        if (!n)
            return;
        if (t !== void 0) {
            n.set(t);
            return
        }
        const a = new bh({
            ...o,
            autoplay: !1
        })
          , l = Math.max(ec, et.now() - this.startTime)
          , u = pn(0, ec, l - ec);
        n.setWithVelocity(a.sample(Math.max(0, l - u)).value, a.sample(l).value, u),
        a.stop()
    }
}
const eg = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && (br.test(e) || e === "0") && !e.startsWith("url("));
function jR(e) {
    const t = e[0];
    if (e.length === 1)
        return !0;
    for (let n = 0; n < e.length; n++)
        if (e[n] !== t)
            return !0
}
function OR(e, t, n, r) {
    const i = e[0];
    if (i === null)
        return !1;
    if (t === "display" || t === "visibility")
        return !0;
    const s = e[e.length - 1]
      , o = eg(i, t)
      , a = eg(s, t);
    return ou(o === a, `You are trying to animate ${t} from "${i}" to "${s}". "${o ? s : i}" is not an animatable value.`, "value-not-animatable"),
    !o || !a ? !1 : jR(e) || (n === "spring" || Jw(n)) && r
}
function jd(e) {
    e.duration = 0,
    e.type = "keyframes"
}
const DR = new Set(["opacity", "clipPath", "filter", "transform"])
  , LR = dh( () => Object.hasOwnProperty.call(Element.prototype, "animate"));
function IR(e) {
    var c;
    const {motionValue: t, name: n, repeatDelay: r, repeatType: i, damping: s, type: o} = e;
    if (!(((c = t == null ? void 0 : t.owner) == null ? void 0 : c.current)instanceof HTMLElement))
        return !1;
    const {onUpdate: l, transformTemplate: u} = t.owner.getProps();
    return LR() && n && DR.has(n) && (n !== "transform" || !u) && !l && !r && i !== "mirror" && s !== 0 && o !== "inertia"
}
const VR = 40;
class FR extends Sh {
    constructor({autoplay: t=!0, delay: n=0, type: r="keyframes", repeat: i=0, repeatDelay: s=0, repeatType: o="loop", keyframes: a, name: l, motionValue: u, element: c, ...d}) {
        var v;
        super(),
        this.stop = () => {
            var g, x;
            this._animation && (this._animation.stop(),
            (g = this.stopTimeline) == null || g.call(this)),
            (x = this.keyframeResolver) == null || x.cancel()
        }
        ,
        this.createdAt = et.now();
        const f = {
            autoplay: t,
            delay: n,
            type: r,
            repeat: i,
            repeatDelay: s,
            repeatType: o,
            name: l,
            motionValue: u,
            element: c,
            ...d
        }
          , h = (c == null ? void 0 : c.KeyframeResolver) || Ch;
        this.keyframeResolver = new h(a, (g, x, m) => this.onKeyframesResolved(g, x, f, !m),l,u,c),
        (v = this.keyframeResolver) == null || v.scheduleResolve()
    }
    onKeyframesResolved(t, n, r, i) {
        var x, m;
        this.keyframeResolver = void 0;
        const {name: s, type: o, velocity: a, delay: l, isHandoff: u, onUpdate: c} = r;
        this.resolvedAt = et.now(),
        OR(t, s, o, a) || ((An.instantAnimations || !l) && (c == null || c(wh(t, r, n))),
        t[0] = t[t.length - 1],
        jd(r),
        r.repeat = 0);
        const f = {
            startTime: i ? this.resolvedAt ? this.resolvedAt - this.createdAt > VR ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
            finalKeyframe: n,
            ...r,
            keyframes: t
        }
          , h = !u && IR(f)
          , v = (m = (x = f.motionValue) == null ? void 0 : x.owner) == null ? void 0 : m.current
          , g = h ? new MR({
            ...f,
            element: v
        }) : new bh(f);
        g.finished.then( () => {
            this.notifyFinished()
        }
        ).catch(Rt),
        this.pendingTimeline && (this.stopTimeline = g.attachTimeline(this.pendingTimeline),
        this.pendingTimeline = void 0),
        this._animation = g
    }
    get finished() {
        return this._animation ? this.animation.finished : this._finished
    }
    then(t, n) {
        return this.finished.finally(t).then( () => {}
        )
    }
    get animation() {
        var t;
        return this._animation || ((t = this.keyframeResolver) == null || t.resume(),
        bR()),
        this._animation
    }
    get duration() {
        return this.animation.duration
    }
    get iterationDuration() {
        return this.animation.iterationDuration
    }
    get time() {
        return this.animation.time
    }
    set time(t) {
        this.animation.time = t
    }
    get speed() {
        return this.animation.speed
    }
    get state() {
        return this.animation.state
    }
    set speed(t) {
        this.animation.speed = t
    }
    get startTime() {
        return this.animation.startTime
    }
    attachTimeline(t) {
        return this._animation ? this.stopTimeline = this.animation.attachTimeline(t) : this.pendingTimeline = t,
        () => this.stop()
    }
    play() {
        this.animation.play()
    }
    pause() {
        this.animation.pause()
    }
    complete() {
        this.animation.complete()
    }
    cancel() {
        var t;
        this._animation && this.animation.cancel(),
        (t = this.keyframeResolver) == null || t.cancel()
    }
}
function n1(e, t, n, r=0, i=1) {
    const s = Array.from(e).sort( (u, c) => u.sortNodePosition(c)).indexOf(t)
      , o = e.size
      , a = (o - 1) * r;
    return typeof n == "function" ? n(s, o) : i === 1 ? s * r : a - s * r
}
const zR = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function $R(e) {
    const t = zR.exec(e);
    if (!t)
        return [, ];
    const [,n,r,i] = t;
    return [`--${n ?? r}`, i]
}
const BR = 4;
function r1(e, t, n=1) {
    os(n <= BR, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
    const [r,i] = $R(e);
    if (!r)
        return;
    const s = window.getComputedStyle(t).getPropertyValue(r);
    if (s) {
        const o = s.trim();
        return bw(o) ? parseFloat(o) : o
    }
    return mh(i) ? r1(i, t, n + 1) : i
}
const UR = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
}
  , WR = e => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
})
  , HR = {
    type: "keyframes",
    duration: .8
}
  , KR = {
    type: "keyframes",
    ease: [.25, .1, .35, 1],
    duration: .3
}
  , ZR = (e, {keyframes: t}) => t.length > 2 ? HR : ws.has(e) ? e.startsWith("scale") ? WR(t[1]) : UR : KR
  , GR = e => e !== null;
function QR(e, {repeat: t, repeatType: n="loop"}, r) {
    const i = e.filter(GR)
      , s = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
    return !s || r === void 0 ? i[s] : r
}
function i1(e, t) {
    if (e != null && e.inherit && t) {
        const {inherit: n, ...r} = e;
        return {
            ...t,
            ...r
        }
    }
    return e
}
function kh(e, t) {
    const n = (e == null ? void 0 : e[t]) ?? (e == null ? void 0 : e.default) ?? e;
    return n !== e ? i1(n, e) : n
}
function YR({when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: i, repeat: s, repeatType: o, repeatDelay: a, from: l, elapsed: u, ...c}) {
    return !!Object.keys(c).length
}
const Th = (e, t, n, r={}, i, s) => o => {
    const a = kh(r, e) || {}
      , l = a.delay || r.delay || 0;
    let {elapsed: u=0} = r;
    u = u - At(l);
    const c = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: "easeOut",
        velocity: t.getVelocity(),
        ...a,
        delay: -u,
        onUpdate: f => {
            t.set(f),
            a.onUpdate && a.onUpdate(f)
        }
        ,
        onComplete: () => {
            o(),
            a.onComplete && a.onComplete()
        }
        ,
        name: e,
        motionValue: t,
        element: s ? void 0 : i
    };
    YR(a) || Object.assign(c, ZR(e, c)),
    c.duration && (c.duration = At(c.duration)),
    c.repeatDelay && (c.repeatDelay = At(c.repeatDelay)),
    c.from !== void 0 && (c.keyframes[0] = c.from);
    let d = !1;
    if ((c.type === !1 || c.duration === 0 && !c.repeatDelay) && (jd(c),
    c.delay === 0 && (d = !0)),
    (An.instantAnimations || An.skipAnimations || i != null && i.shouldSkipAnimations) && (d = !0,
    jd(c),
    c.delay = 0),
    c.allowFlatten = !a.type && !a.ease,
    d && !s && t.get() !== void 0) {
        const f = QR(c.keyframes, a);
        if (f !== void 0) {
            he.update( () => {
                c.onUpdate(f),
                c.onComplete()
            }
            );
            return
        }
    }
    return a.isSync ? new bh(c) : new FR(c)
}
;
function tg(e) {
    const t = [{}, {}];
    return e == null || e.values.forEach( (n, r) => {
        t[0][r] = n.get(),
        t[1][r] = n.getVelocity()
    }
    ),
    t
}
function Eh(e, t, n, r) {
    if (typeof t == "function") {
        const [i,s] = tg(r);
        t = t(n !== void 0 ? n : e.custom, i, s)
    }
    if (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function") {
        const [i,s] = tg(r);
        t = t(n !== void 0 ? n : e.custom, i, s)
    }
    return t
}
function Bi(e, t, n) {
    const r = e.getProps();
    return Eh(r, t, n !== void 0 ? n : r.custom, e)
}
const s1 = new Set(["width", "height", "top", "left", "right", "bottom", ...xs])
  , ng = 30
  , XR = e => !isNaN(parseFloat(e));
class qR {
    constructor(t, n={}) {
        this.canTrackVelocity = null,
        this.events = {},
        this.updateAndNotify = r => {
            var s;
            const i = et.now();
            if (this.updatedAt !== i && this.setPrevFrameValue(),
            this.prev = this.current,
            this.setCurrent(r),
            this.current !== this.prev && ((s = this.events.change) == null || s.notify(this.current),
            this.dependents))
                for (const o of this.dependents)
                    o.dirty()
        }
        ,
        this.hasAnimated = !1,
        this.setCurrent(t),
        this.owner = n.owner
    }
    setCurrent(t) {
        this.current = t,
        this.updatedAt = et.now(),
        this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = XR(this.current))
    }
    setPrevFrameValue(t=this.current) {
        this.prevFrameValue = t,
        this.prevUpdatedAt = this.updatedAt
    }
    onChange(t) {
        return this.on("change", t)
    }
    on(t, n) {
        this.events[t] || (this.events[t] = new fh);
        const r = this.events[t].add(n);
        return t === "change" ? () => {
            r(),
            he.read( () => {
                this.events.change.getSize() || this.stop()
            }
            )
        }
        : r
    }
    clearListeners() {
        for (const t in this.events)
            this.events[t].clear()
    }
    attach(t, n) {
        this.passiveEffect = t,
        this.stopPassiveEffect = n
    }
    set(t) {
        this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t)
    }
    setWithVelocity(t, n, r) {
        this.set(n),
        this.prev = void 0,
        this.prevFrameValue = t,
        this.prevUpdatedAt = this.updatedAt - r
    }
    jump(t, n=!0) {
        this.updateAndNotify(t),
        this.prev = t,
        this.prevUpdatedAt = this.prevFrameValue = void 0,
        n && this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
    dirty() {
        var t;
        (t = this.events.change) == null || t.notify(this.current)
    }
    addDependent(t) {
        this.dependents || (this.dependents = new Set),
        this.dependents.add(t)
    }
    removeDependent(t) {
        this.dependents && this.dependents.delete(t)
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        const t = et.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > ng)
            return 0;
        const n = Math.min(this.updatedAt - this.prevUpdatedAt, ng);
        return Tw(parseFloat(this.current) - parseFloat(this.prevFrameValue), n)
    }
    start(t) {
        return this.stop(),
        new Promise(n => {
            this.hasAnimated = !0,
            this.animation = t(n),
            this.events.animationStart && this.events.animationStart.notify()
        }
        ).then( () => {
            this.events.animationComplete && this.events.animationComplete.notify(),
            this.clearAnimation()
        }
        )
    }
    stop() {
        this.animation && (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        var t, n;
        (t = this.dependents) == null || t.clear(),
        (n = this.events.destroy) == null || n.notify(),
        this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
}
function as(e, t) {
    return new qR(e,t)
}
const Od = e => Array.isArray(e);
function JR(e, t, n) {
    e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, as(n))
}
function eA(e) {
    return Od(e) ? e[e.length - 1] || 0 : e
}
function tA(e, t) {
    const n = Bi(e, t);
    let {transitionEnd: r={}, transition: i={}, ...s} = n || {};
    s = {
        ...s,
        ...r
    };
    for (const o in s) {
        const a = eA(s[o]);
        JR(e, o, a)
    }
}
const Ze = e => !!(e && e.getVelocity);
function nA(e) {
    return !!(Ze(e) && e.add)
}
function Dd(e, t) {
    const n = e.getValue("willChange");
    if (nA(n))
        return n.add(t);
    if (!n && An.WillChange) {
        const r = new An.WillChange("auto");
        e.addValue("willChange", r),
        r.add(t)
    }
}
function Ph(e) {
    return e.replace(/([A-Z])/g, t => `-${t.toLowerCase()}`)
}
const rA = "framerAppearId"
  , o1 = "data-" + Ph(rA);
function a1(e) {
    return e.props[o1]
}
function iA({protectedKeys: e, needsAnimating: t}, n) {
    const r = e.hasOwnProperty(n) && t[n] !== !0;
    return t[n] = !1,
    r
}
function l1(e, t, {delay: n=0, transitionOverride: r, type: i}={}) {
    let {transition: s, transitionEnd: o, ...a} = t;
    const l = e.getDefaultTransition();
    s = s ? i1(s, l) : l;
    const u = s == null ? void 0 : s.reduceMotion;
    r && (s = r);
    const c = []
      , d = i && e.animationState && e.animationState.getState()[i];
    for (const f in a) {
        const h = e.getValue(f, e.latestValues[f] ?? null)
          , v = a[f];
        if (v === void 0 || d && iA(d, f))
            continue;
        const g = {
            delay: n,
            ...kh(s || {}, f)
        }
          , x = h.get();
        if (x !== void 0 && !h.isAnimating && !Array.isArray(v) && v === x && !g.velocity)
            continue;
        let m = !1;
        if (window.MotionHandoffAnimation) {
            const b = a1(e);
            if (b) {
                const C = window.MotionHandoffAnimation(b, f, he);
                C !== null && (g.startTime = C,
                m = !0)
            }
        }
        Dd(e, f);
        const p = u ?? e.shouldReduceMotion;
        h.start(Th(f, h, v, p && s1.has(f) ? {
            type: !1
        } : g, e, m));
        const y = h.animation;
        y && c.push(y)
    }
    if (o) {
        const f = () => he.update( () => {
            o && tA(e, o)
        }
        );
        c.length ? Promise.all(c).then(f) : f()
    }
    return c
}
function Ld(e, t, n={}) {
    var l;
    const r = Bi(e, t, n.type === "exit" ? (l = e.presenceContext) == null ? void 0 : l.custom : void 0);
    let {transition: i=e.getDefaultTransition() || {}} = r || {};
    n.transitionOverride && (i = n.transitionOverride);
    const s = r ? () => Promise.all(l1(e, r, n)) : () => Promise.resolve()
      , o = e.variantChildren && e.variantChildren.size ? (u=0) => {
        const {delayChildren: c=0, staggerChildren: d, staggerDirection: f} = i;
        return sA(e, t, u, c, d, f, n)
    }
    : () => Promise.resolve()
      , {when: a} = i;
    if (a) {
        const [u,c] = a === "beforeChildren" ? [s, o] : [o, s];
        return u().then( () => c())
    } else
        return Promise.all([s(), o(n.delay)])
}
function sA(e, t, n=0, r=0, i=0, s=1, o) {
    const a = [];
    for (const l of e.variantChildren)
        l.notify("AnimationStart", t),
        a.push(Ld(l, t, {
            ...o,
            delay: n + (typeof r == "function" ? 0 : r) + n1(e.variantChildren, l, r, i, s)
        }).then( () => l.notify("AnimationComplete", t)));
    return Promise.all(a)
}
function oA(e, t, n={}) {
    e.notify("AnimationStart", t);
    let r;
    if (Array.isArray(t)) {
        const i = t.map(s => Ld(e, s, n));
        r = Promise.all(i)
    } else if (typeof t == "string")
        r = Ld(e, t, n);
    else {
        const i = typeof t == "function" ? Bi(e, t, n.custom) : t;
        r = Promise.all(l1(e, i, n))
    }
    return r.then( () => {
        e.notify("AnimationComplete", t)
    }
    )
}
const aA = {
    test: e => e === "auto",
    parse: e => e
}
  , u1 = e => t => t.test(e)
  , c1 = [vs, z, dn, Un, O2, j2, aA]
  , rg = e => c1.find(u1(e));
function lA(e) {
    return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || kw(e) : !0
}
const uA = new Set(["brightness", "contrast", "saturate", "opacity"]);
function cA(e) {
    const [t,n] = e.slice(0, -1).split("(");
    if (t === "drop-shadow")
        return e;
    const [r] = n.match(gh) || [];
    if (!r)
        return e;
    const i = n.replace(r, "");
    let s = uA.has(t) ? 1 : 0;
    return r !== n && (s *= 100),
    t + "(" + s + i + ")"
}
const dA = /\b([a-z-]*)\(.*?\)/gu
  , Id = {
    ...br,
    getAnimatableNone: e => {
        const t = e.match(dA);
        return t ? t.map(cA).join(" ") : e
    }
}
  , ig = {
    ...vs,
    transform: Math.round
}
  , fA = {
    rotate: Un,
    rotateX: Un,
    rotateY: Un,
    rotateZ: Un,
    scale: ya,
    scaleX: ya,
    scaleY: ya,
    scaleZ: ya,
    skew: Un,
    skewX: Un,
    skewY: Un,
    distance: z,
    translateX: z,
    translateY: z,
    translateZ: z,
    x: z,
    y: z,
    z,
    perspective: z,
    transformPerspective: z,
    opacity: Co,
    originX: Wm,
    originY: Wm,
    originZ: z
}
  , _h = {
    borderWidth: z,
    borderTopWidth: z,
    borderRightWidth: z,
    borderBottomWidth: z,
    borderLeftWidth: z,
    borderRadius: z,
    borderTopLeftRadius: z,
    borderTopRightRadius: z,
    borderBottomRightRadius: z,
    borderBottomLeftRadius: z,
    width: z,
    maxWidth: z,
    height: z,
    maxHeight: z,
    top: z,
    right: z,
    bottom: z,
    left: z,
    inset: z,
    insetBlock: z,
    insetBlockStart: z,
    insetBlockEnd: z,
    insetInline: z,
    insetInlineStart: z,
    insetInlineEnd: z,
    padding: z,
    paddingTop: z,
    paddingRight: z,
    paddingBottom: z,
    paddingLeft: z,
    paddingBlock: z,
    paddingBlockStart: z,
    paddingBlockEnd: z,
    paddingInline: z,
    paddingInlineStart: z,
    paddingInlineEnd: z,
    margin: z,
    marginTop: z,
    marginRight: z,
    marginBottom: z,
    marginLeft: z,
    marginBlock: z,
    marginBlockStart: z,
    marginBlockEnd: z,
    marginInline: z,
    marginInlineStart: z,
    marginInlineEnd: z,
    fontSize: z,
    backgroundPositionX: z,
    backgroundPositionY: z,
    ...fA,
    zIndex: ig,
    fillOpacity: Co,
    strokeOpacity: Co,
    numOctaves: ig
}
  , hA = {
    ..._h,
    color: Re,
    backgroundColor: Re,
    outlineColor: Re,
    fill: Re,
    stroke: Re,
    borderColor: Re,
    borderTopColor: Re,
    borderRightColor: Re,
    borderBottomColor: Re,
    borderLeftColor: Re,
    filter: Id,
    WebkitFilter: Id
}
  , d1 = e => hA[e];
function f1(e, t) {
    let n = d1(e);
    return n !== Id && (n = br),
    n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
}
const pA = new Set(["auto", "none", "0"]);
function mA(e, t, n) {
    let r = 0, i;
    for (; r < e.length && !i; ) {
        const s = e[r];
        typeof s == "string" && !pA.has(s) && ko(s).values.length && (i = e[r]),
        r++
    }
    if (i && n)
        for (const s of t)
            e[s] = f1(n, i)
}
class gA extends Ch {
    constructor(t, n, r, i, s) {
        super(t, n, r, i, s, !0)
    }
    readKeyframes() {
        const {unresolvedKeyframes: t, element: n, name: r} = this;
        if (!n || !n.current)
            return;
        super.readKeyframes();
        for (let c = 0; c < t.length; c++) {
            let d = t[c];
            if (typeof d == "string" && (d = d.trim(),
            mh(d))) {
                const f = r1(d, n.current);
                f !== void 0 && (t[c] = f),
                c === t.length - 1 && (this.finalKeyframe = d)
            }
        }
        if (this.resolveNoneKeyframes(),
        !s1.has(r) || t.length !== 2)
            return;
        const [i,s] = t
          , o = rg(i)
          , a = rg(s)
          , l = Um(i)
          , u = Um(s);
        if (l !== u && ir[r]) {
            this.needsMeasurement = !0;
            return
        }
        if (o !== a)
            if (qm(o) && qm(a))
                for (let c = 0; c < t.length; c++) {
                    const d = t[c];
                    typeof d == "string" && (t[c] = parseFloat(d))
                }
            else
                ir[r] && (this.needsMeasurement = !0)
    }
    resolveNoneKeyframes() {
        const {unresolvedKeyframes: t, name: n} = this
          , r = [];
        for (let i = 0; i < t.length; i++)
            (t[i] === null || lA(t[i])) && r.push(i);
        r.length && mA(t, r, n)
    }
    measureInitialState() {
        const {element: t, unresolvedKeyframes: n, name: r} = this;
        if (!t || !t.current)
            return;
        r === "height" && (this.suspendedScrollY = window.pageYOffset),
        this.measuredOrigin = ir[r](t.measureViewportBox(), window.getComputedStyle(t.current)),
        n[0] = this.measuredOrigin;
        const i = n[n.length - 1];
        i !== void 0 && t.getValue(r, i).jump(i, !1)
    }
    measureEndState() {
        var a;
        const {element: t, name: n, unresolvedKeyframes: r} = this;
        if (!t || !t.current)
            return;
        const i = t.getValue(n);
        i && i.jump(this.measuredOrigin, !1);
        const s = r.length - 1
          , o = r[s];
        r[s] = ir[n](t.measureViewportBox(), window.getComputedStyle(t.current)),
        o !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = o),
        (a = this.removedTransforms) != null && a.length && this.removedTransforms.forEach( ([l,u]) => {
            t.getValue(l).set(u)
        }
        ),
        this.resolveNoneKeyframes()
    }
}
const yA = new Set(["opacity", "clipPath", "filter", "transform"]);
function Rh(e, t, n) {
    if (e == null)
        return [];
    if (e instanceof EventTarget)
        return [e];
    if (typeof e == "string") {
        const i = document.querySelectorAll(e);
        return i ? Array.from(i) : []
    }
    return Array.from(e).filter(r => r != null)
}
const h1 = (e, t) => t && typeof e == "number" ? t.transform(e) : e;
function vA(e) {
    return Cw(e) && "offsetHeight"in e
}
const {schedule: Ah, cancel: sO} = Lw(queueMicrotask, !1)
  , zt = {
    x: !1,
    y: !1
};
function p1() {
    return zt.x || zt.y
}
function xA(e) {
    return e === "x" || e === "y" ? zt[e] ? null : (zt[e] = !0,
    () => {
        zt[e] = !1
    }
    ) : zt.x || zt.y ? null : (zt.x = zt.y = !0,
    () => {
        zt.x = zt.y = !1
    }
    )
}
function m1(e, t) {
    const n = Rh(e)
      , r = new AbortController
      , i = {
        passive: !0,
        ...t,
        signal: r.signal
    };
    return [n, i, () => r.abort()]
}
function wA(e) {
    return !(e.pointerType === "touch" || p1())
}
function SA(e, t, n={}) {
    const [r,i,s] = m1(e, n);
    return r.forEach(o => {
        let a = !1, l = !1, u;
        const c = () => {
            o.removeEventListener("pointerleave", v)
        }
          , d = x => {
            u && (u(x),
            u = void 0),
            c()
        }
          , f = x => {
            a = !1,
            window.removeEventListener("pointerup", f),
            window.removeEventListener("pointercancel", f),
            l && (l = !1,
            d(x))
        }
          , h = () => {
            a = !0,
            window.addEventListener("pointerup", f, i),
            window.addEventListener("pointercancel", f, i)
        }
          , v = x => {
            if (x.pointerType !== "touch") {
                if (a) {
                    l = !0;
                    return
                }
                d(x)
            }
        }
          , g = x => {
            if (!wA(x))
                return;
            l = !1;
            const m = t(o, x);
            typeof m == "function" && (u = m,
            o.addEventListener("pointerleave", v, i))
        }
        ;
        o.addEventListener("pointerenter", g, i),
        o.addEventListener("pointerdown", h, i)
    }
    ),
    s
}
const g1 = (e, t) => t ? e === t ? !0 : g1(e, t.parentElement) : !1
  , Nh = e => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1
  , bA = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function CA(e) {
    return bA.has(e.tagName) || e.isContentEditable === !0
}
const kA = new Set(["INPUT", "SELECT", "TEXTAREA"]);
function TA(e) {
    return kA.has(e.tagName) || e.isContentEditable === !0
}
const La = new WeakSet;
function sg(e) {
    return t => {
        t.key === "Enter" && e(t)
    }
}
function tc(e, t) {
    e.dispatchEvent(new PointerEvent("pointer" + t,{
        isPrimary: !0,
        bubbles: !0
    }))
}
const EA = (e, t) => {
    const n = e.currentTarget;
    if (!n)
        return;
    const r = sg( () => {
        if (La.has(n))
            return;
        tc(n, "down");
        const i = sg( () => {
            tc(n, "up")
        }
        )
          , s = () => tc(n, "cancel");
        n.addEventListener("keyup", i, t),
        n.addEventListener("blur", s, t)
    }
    );
    n.addEventListener("keydown", r, t),
    n.addEventListener("blur", () => n.removeEventListener("keydown", r), t)
}
;
function og(e) {
    return Nh(e) && !p1()
}
const ag = new WeakSet;
function PA(e, t, n={}) {
    const [r,i,s] = m1(e, n)
      , o = a => {
        const l = a.currentTarget;
        if (!og(a) || ag.has(a))
            return;
        La.add(l),
        n.stopPropagation && ag.add(a);
        const u = t(l, a)
          , c = (h, v) => {
            window.removeEventListener("pointerup", d),
            window.removeEventListener("pointercancel", f),
            La.has(l) && La.delete(l),
            og(h) && typeof u == "function" && u(h, {
                success: v
            })
        }
          , d = h => {
            c(h, l === window || l === document || n.useGlobalTarget || g1(l, h.target))
        }
          , f = h => {
            c(h, !1)
        }
        ;
        window.addEventListener("pointerup", d, i),
        window.addEventListener("pointercancel", f, i)
    }
    ;
    return r.forEach(a => {
        (n.useGlobalTarget ? window : a).addEventListener("pointerdown", o, i),
        vA(a) && (a.addEventListener("focus", u => EA(u, i)),
        !CA(a) && !a.hasAttribute("tabindex") && (a.tabIndex = 0))
    }
    ),
    s
}
function Mh(e) {
    return Cw(e) && "ownerSVGElement"in e
}
const Ia = new WeakMap;
let Wn;
const y1 = (e, t, n) => (r, i) => i && i[0] ? i[0][e + "Size"] : Mh(r) && "getBBox"in r ? r.getBBox()[t] : r[n]
  , _A = y1("inline", "width", "offsetWidth")
  , RA = y1("block", "height", "offsetHeight");
function AA({target: e, borderBoxSize: t}) {
    var n;
    (n = Ia.get(e)) == null || n.forEach(r => {
        r(e, {
            get width() {
                return _A(e, t)
            },
            get height() {
                return RA(e, t)
            }
        })
    }
    )
}
function NA(e) {
    e.forEach(AA)
}
function MA() {
    typeof ResizeObserver > "u" || (Wn = new ResizeObserver(NA))
}
function jA(e, t) {
    Wn || MA();
    const n = Rh(e);
    return n.forEach(r => {
        let i = Ia.get(r);
        i || (i = new Set,
        Ia.set(r, i)),
        i.add(t),
        Wn == null || Wn.observe(r)
    }
    ),
    () => {
        n.forEach(r => {
            const i = Ia.get(r);
            i == null || i.delete(t),
            i != null && i.size || Wn == null || Wn.unobserve(r)
        }
        )
    }
}
const Va = new Set;
let Ri;
function OA() {
    Ri = () => {
        const e = {
            get width() {
                return window.innerWidth
            },
            get height() {
                return window.innerHeight
            }
        };
        Va.forEach(t => t(e))
    }
    ,
    window.addEventListener("resize", Ri)
}
function DA(e) {
    return Va.add(e),
    Ri || OA(),
    () => {
        Va.delete(e),
        !Va.size && typeof Ri == "function" && (window.removeEventListener("resize", Ri),
        Ri = void 0)
    }
}
function lg(e, t) {
    return typeof e == "function" ? DA(e) : jA(e, t)
}
function LA(e) {
    return Mh(e) && e.tagName === "svg"
}
const IA = [...c1, Re, br]
  , VA = e => IA.find(u1(e))
  , ug = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
})
  , Ai = () => ({
    x: ug(),
    y: ug()
})
  , cg = () => ({
    min: 0,
    max: 0
})
  , Ne = () => ({
    x: cg(),
    y: cg()
})
  , FA = new WeakMap;
function au(e) {
    return e !== null && typeof e == "object" && typeof e.start == "function"
}
function To(e) {
    return typeof e == "string" || Array.isArray(e)
}
const jh = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
  , Oh = ["initial", ...jh];
function lu(e) {
    return au(e.animate) || Oh.some(t => To(e[t]))
}
function v1(e) {
    return !!(lu(e) || e.variants)
}
function zA(e, t, n) {
    for (const r in t) {
        const i = t[r]
          , s = n[r];
        if (Ze(i))
            e.addValue(r, i);
        else if (Ze(s))
            e.addValue(r, as(i, {
                owner: e
            }));
        else if (s !== i)
            if (e.hasValue(r)) {
                const o = e.getValue(r);
                o.liveStyle === !0 ? o.jump(i) : o.hasAnimated || o.set(i)
            } else {
                const o = e.getStaticValue(r);
                e.addValue(r, as(o !== void 0 ? o : i, {
                    owner: e
                }))
            }
    }
    for (const r in n)
        t[r] === void 0 && e.removeValue(r);
    return t
}
const Vd = {
    current: null
}
  , x1 = {
    current: !1
}
  , $A = typeof window < "u";
function BA() {
    if (x1.current = !0,
    !!$A)
        if (window.matchMedia) {
            const e = window.matchMedia("(prefers-reduced-motion)")
              , t = () => Vd.current = e.matches;
            e.addEventListener("change", t),
            t()
        } else
            Vd.current = !1
}
const dg = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
let bl = {};
function w1(e) {
    bl = e
}
function UA() {
    return bl
}
class WA {
    scrapeMotionValuesFromProps(t, n, r) {
        return {}
    }
    constructor({parent: t, props: n, presenceContext: r, reducedMotionConfig: i, skipAnimations: s, blockInitialAnimation: o, visualState: a}, l={}) {
        this.current = null,
        this.children = new Set,
        this.isVariantNode = !1,
        this.isControllingVariants = !1,
        this.shouldReduceMotion = null,
        this.shouldSkipAnimations = !1,
        this.values = new Map,
        this.KeyframeResolver = Ch,
        this.features = {},
        this.valueSubscriptions = new Map,
        this.prevMotionValues = {},
        this.hasBeenMounted = !1,
        this.events = {},
        this.propEventSubscriptions = {},
        this.notifyUpdate = () => this.notify("Update", this.latestValues),
        this.render = () => {
            this.current && (this.triggerBuild(),
            this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }
        ,
        this.renderScheduledAt = 0,
        this.scheduleRender = () => {
            const h = et.now();
            this.renderScheduledAt < h && (this.renderScheduledAt = h,
            he.render(this.render, !1, !0))
        }
        ;
        const {latestValues: u, renderState: c} = a;
        this.latestValues = u,
        this.baseTarget = {
            ...u
        },
        this.initialValues = n.initial ? {
            ...u
        } : {},
        this.renderState = c,
        this.parent = t,
        this.props = n,
        this.presenceContext = r,
        this.depth = t ? t.depth + 1 : 0,
        this.reducedMotionConfig = i,
        this.skipAnimationsConfig = s,
        this.options = l,
        this.blockInitialAnimation = !!o,
        this.isControllingVariants = lu(n),
        this.isVariantNode = v1(n),
        this.isVariantNode && (this.variantChildren = new Set),
        this.manuallyAnimateOnMount = !!(t && t.current);
        const {willChange: d, ...f} = this.scrapeMotionValuesFromProps(n, {}, this);
        for (const h in f) {
            const v = f[h];
            u[h] !== void 0 && Ze(v) && v.set(u[h])
        }
    }
    mount(t) {
        var n, r;
        if (this.hasBeenMounted)
            for (const i in this.initialValues)
                (n = this.values.get(i)) == null || n.jump(this.initialValues[i]),
                this.latestValues[i] = this.initialValues[i];
        this.current = t,
        FA.set(t, this),
        this.projection && !this.projection.instance && this.projection.mount(t),
        this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach( (i, s) => this.bindToMotionValue(s, i)),
        this.reducedMotionConfig === "never" ? this.shouldReduceMotion = !1 : this.reducedMotionConfig === "always" ? this.shouldReduceMotion = !0 : (x1.current || BA(),
        this.shouldReduceMotion = Vd.current),
        this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1,
        (r = this.parent) == null || r.addChild(this),
        this.update(this.props, this.presenceContext),
        this.hasBeenMounted = !0
    }
    unmount() {
        var t;
        this.projection && this.projection.unmount(),
        Sr(this.notifyUpdate),
        Sr(this.render),
        this.valueSubscriptions.forEach(n => n()),
        this.valueSubscriptions.clear(),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        (t = this.parent) == null || t.removeChild(this);
        for (const n in this.events)
            this.events[n].clear();
        for (const n in this.features) {
            const r = this.features[n];
            r && (r.unmount(),
            r.isMounted = !1)
        }
        this.current = null
    }
    addChild(t) {
        this.children.add(t),
        this.enteringChildren ?? (this.enteringChildren = new Set),
        this.enteringChildren.add(t)
    }
    removeChild(t) {
        this.children.delete(t),
        this.enteringChildren && this.enteringChildren.delete(t)
    }
    bindToMotionValue(t, n) {
        if (this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)(),
        n.accelerate && yA.has(t) && this.current instanceof HTMLElement) {
            const {factory: o, keyframes: a, times: l, ease: u, duration: c} = n.accelerate
              , d = new e1({
                element: this.current,
                name: t,
                keyframes: a,
                times: l,
                ease: u,
                duration: At(c)
            })
              , f = o(d);
            this.valueSubscriptions.set(t, () => {
                f(),
                d.cancel()
            }
            );
            return
        }
        const r = ws.has(t);
        r && this.onBindTransform && this.onBindTransform();
        const i = n.on("change", o => {
            this.latestValues[t] = o,
            this.props.onUpdate && he.preRender(this.notifyUpdate),
            r && this.projection && (this.projection.isTransformDirty = !0),
            this.scheduleRender()
        }
        );
        let s;
        typeof window < "u" && window.MotionCheckAppearSync && (s = window.MotionCheckAppearSync(this, t, n)),
        this.valueSubscriptions.set(t, () => {
            i(),
            s && s(),
            n.owner && n.stop()
        }
        )
    }
    sortNodePosition(t) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current)
    }
    updateFeatures() {
        let t = "animation";
        for (t in bl) {
            const n = bl[t];
            if (!n)
                continue;
            const {isEnabled: r, Feature: i} = n;
            if (!this.features[t] && i && r(this.props) && (this.features[t] = new i(this)),
            this.features[t]) {
                const s = this.features[t];
                s.isMounted ? s.update() : (s.mount(),
                s.isMounted = !0)
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Ne()
    }
    getStaticValue(t) {
        return this.latestValues[t]
    }
    setStaticValue(t, n) {
        this.latestValues[t] = n
    }
    update(t, n) {
        (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
        this.prevProps = this.props,
        this.props = t,
        this.prevPresenceContext = this.presenceContext,
        this.presenceContext = n;
        for (let r = 0; r < dg.length; r++) {
            const i = dg[r];
            this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](),
            delete this.propEventSubscriptions[i]);
            const s = "on" + i
              , o = t[s];
            o && (this.propEventSubscriptions[i] = this.on(i, o))
        }
        this.prevMotionValues = zA(this, this.scrapeMotionValuesFromProps(t, this.prevProps || {}, this), this.prevMotionValues),
        this.handleChildMotionValue && this.handleChildMotionValue()
    }
    getProps() {
        return this.props
    }
    getVariant(t) {
        return this.props.variants ? this.props.variants[t] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    addVariantChild(t) {
        const n = this.getClosestVariantNode();
        if (n)
            return n.variantChildren && n.variantChildren.add(t),
            () => n.variantChildren.delete(t)
    }
    addValue(t, n) {
        const r = this.values.get(t);
        n !== r && (r && this.removeValue(t),
        this.bindToMotionValue(t, n),
        this.values.set(t, n),
        this.latestValues[t] = n.get())
    }
    removeValue(t) {
        this.values.delete(t);
        const n = this.valueSubscriptions.get(t);
        n && (n(),
        this.valueSubscriptions.delete(t)),
        delete this.latestValues[t],
        this.removeValueFromRenderState(t, this.renderState)
    }
    hasValue(t) {
        return this.values.has(t)
    }
    getValue(t, n) {
        if (this.props.values && this.props.values[t])
            return this.props.values[t];
        let r = this.values.get(t);
        return r === void 0 && n !== void 0 && (r = as(n === null ? void 0 : n, {
            owner: this
        }),
        this.addValue(t, r)),
        r
    }
    readValue(t, n) {
        let r = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : this.getBaseTargetFromProps(this.props, t) ?? this.readValueFromInstance(this.current, t, this.options);
        return r != null && (typeof r == "string" && (bw(r) || kw(r)) ? r = parseFloat(r) : !VA(r) && br.test(n) && (r = f1(t, n)),
        this.setBaseTarget(t, Ze(r) ? r.get() : r)),
        Ze(r) ? r.get() : r
    }
    setBaseTarget(t, n) {
        this.baseTarget[t] = n
    }
    getBaseTarget(t) {
        var s;
        const {initial: n} = this.props;
        let r;
        if (typeof n == "string" || typeof n == "object") {
            const o = Eh(this.props, n, (s = this.presenceContext) == null ? void 0 : s.custom);
            o && (r = o[t])
        }
        if (n && r !== void 0)
            return r;
        const i = this.getBaseTargetFromProps(this.props, t);
        return i !== void 0 && !Ze(i) ? i : this.initialValues[t] !== void 0 && r === void 0 ? void 0 : this.baseTarget[t]
    }
    on(t, n) {
        return this.events[t] || (this.events[t] = new fh),
        this.events[t].add(n)
    }
    notify(t, ...n) {
        this.events[t] && this.events[t].notify(...n)
    }
    scheduleRenderMicrotask() {
        Ah.render(this.render)
    }
}
class S1 extends WA {
    constructor() {
        super(...arguments),
        this.KeyframeResolver = gA
    }
    sortInstanceNodePosition(t, n) {
        return t.compareDocumentPosition(n) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(t, n) {
        const r = t.style;
        return r ? r[n] : void 0
    }
    removeValueFromRenderState(t, {vars: n, style: r}) {
        delete n[t],
        delete r[t]
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(),
        delete this.childSubscription);
        const {children: t} = this.props;
        Ze(t) && (this.childSubscription = t.on("change", n => {
            this.current && (this.current.textContent = `${n}`)
        }
        ))
    }
}
class _r {
    constructor(t) {
        this.isMounted = !1,
        this.node = t
    }
    update() {}
}
function b1({top: e, left: t, right: n, bottom: r}) {
    return {
        x: {
            min: t,
            max: n
        },
        y: {
            min: e,
            max: r
        }
    }
}
function HA({x: e, y: t}) {
    return {
        top: t.min,
        right: e.max,
        bottom: t.max,
        left: e.min
    }
}
function KA(e, t) {
    if (!t)
        return e;
    const n = t({
        x: e.left,
        y: e.top
    })
      , r = t({
        x: e.right,
        y: e.bottom
    });
    return {
        top: n.y,
        left: n.x,
        bottom: r.y,
        right: r.x
    }
}
function nc(e) {
    return e === void 0 || e === 1
}
function Fd({scale: e, scaleX: t, scaleY: n}) {
    return !nc(e) || !nc(t) || !nc(n)
}
function Dr(e) {
    return Fd(e) || C1(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY
}
function C1(e) {
    return fg(e.x) || fg(e.y)
}
function fg(e) {
    return e && e !== "0%"
}
function Cl(e, t, n) {
    const r = e - n
      , i = t * r;
    return n + i
}
function hg(e, t, n, r, i) {
    return i !== void 0 && (e = Cl(e, i, r)),
    Cl(e, n, r) + t
}
function zd(e, t=0, n=1, r, i) {
    e.min = hg(e.min, t, n, r, i),
    e.max = hg(e.max, t, n, r, i)
}
function k1(e, {x: t, y: n}) {
    zd(e.x, t.translate, t.scale, t.originPoint),
    zd(e.y, n.translate, n.scale, n.originPoint)
}
const pg = .999999999999
  , mg = 1.0000000000001;
function ZA(e, t, n, r=!1) {
    const i = n.length;
    if (!i)
        return;
    t.x = t.y = 1;
    let s, o;
    for (let a = 0; a < i; a++) {
        s = n[a],
        o = s.projectionDelta;
        const {visualElement: l} = s.options;
        l && l.props.style && l.props.style.display === "contents" || (r && s.options.layoutScroll && s.scroll && s !== s.root && Mi(e, {
            x: -s.scroll.offset.x,
            y: -s.scroll.offset.y
        }),
        o && (t.x *= o.x.scale,
        t.y *= o.y.scale,
        k1(e, o)),
        r && Dr(s.latestValues) && Mi(e, s.latestValues))
    }
    t.x < mg && t.x > pg && (t.x = 1),
    t.y < mg && t.y > pg && (t.y = 1)
}
function Ni(e, t) {
    e.min = e.min + t,
    e.max = e.max + t
}
function gg(e, t, n, r, i=.5) {
    const s = Se(e.min, e.max, i);
    zd(e, t, n, s, r)
}
function Mi(e, t) {
    gg(e.x, t.x, t.scaleX, t.scale, t.originX),
    gg(e.y, t.y, t.scaleY, t.scale, t.originY)
}
function T1(e, t) {
    return b1(KA(e.getBoundingClientRect(), t))
}
function GA(e, t, n) {
    const r = T1(e, n)
      , {scroll: i} = t;
    return i && (Ni(r.x, i.offset.x),
    Ni(r.y, i.offset.y)),
    r
}
const QA = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
}
  , YA = xs.length;
function XA(e, t, n) {
    let r = ""
      , i = !0;
    for (let s = 0; s < YA; s++) {
        const o = xs[s]
          , a = e[o];
        if (a === void 0)
            continue;
        let l = !0;
        if (typeof a == "number")
            l = a === (o.startsWith("scale") ? 1 : 0);
        else {
            const u = parseFloat(a);
            l = o.startsWith("scale") ? u === 1 : u === 0
        }
        if (!l || n) {
            const u = h1(a, _h[o]);
            if (!l) {
                i = !1;
                const c = QA[o] || o;
                r += `${c}(${u}) `
            }
            n && (t[o] = u)
        }
    }
    return r = r.trim(),
    n ? r = n(t, i ? "" : r) : i && (r = "none"),
    r
}
function Dh(e, t, n) {
    const {style: r, vars: i, transformOrigin: s} = e;
    let o = !1
      , a = !1;
    for (const l in t) {
        const u = t[l];
        if (ws.has(l)) {
            o = !0;
            continue
        } else if (Vw(l)) {
            i[l] = u;
            continue
        } else {
            const c = h1(u, _h[l]);
            l.startsWith("origin") ? (a = !0,
            s[l] = c) : r[l] = c
        }
    }
    if (t.transform || (o || n ? r.transform = XA(t, e.transform, n) : r.transform && (r.transform = "none")),
    a) {
        const {originX: l="50%", originY: u="50%", originZ: c=0} = s;
        r.transformOrigin = `${l} ${u} ${c}`
    }
}
function E1(e, {style: t, vars: n}, r, i) {
    const s = e.style;
    let o;
    for (o in t)
        s[o] = t[o];
    i == null || i.applyProjectionStyles(s, r);
    for (o in n)
        s.setProperty(o, n[o])
}
function yg(e, t) {
    return t.max === t.min ? 0 : e / (t.max - t.min) * 100
}
const js = {
    correct: (e, t) => {
        if (!t.target)
            return e;
        if (typeof e == "string")
            if (z.test(e))
                e = parseFloat(e);
            else
                return e;
        const n = yg(e, t.target.x)
          , r = yg(e, t.target.y);
        return `${n}% ${r}%`
    }
}
  , qA = {
    correct: (e, {treeScale: t, projectionDelta: n}) => {
        const r = e
          , i = br.parse(e);
        if (i.length > 5)
            return r;
        const s = br.createTransformer(e)
          , o = typeof i[0] != "number" ? 1 : 0
          , a = n.x.scale * t.x
          , l = n.y.scale * t.y;
        i[0 + o] /= a,
        i[1 + o] /= l;
        const u = Se(a, l, .5);
        return typeof i[2 + o] == "number" && (i[2 + o] /= u),
        typeof i[3 + o] == "number" && (i[3 + o] /= u),
        s(i)
    }
}
  , $d = {
    borderRadius: {
        ...js,
        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: js,
    borderTopRightRadius: js,
    borderBottomLeftRadius: js,
    borderBottomRightRadius: js,
    boxShadow: qA
};
function P1(e, {layout: t, layoutId: n}) {
    return ws.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!$d[e] || e === "opacity")
}
function Lh(e, t, n) {
    var o;
    const r = e.style
      , i = t == null ? void 0 : t.style
      , s = {};
    if (!r)
        return s;
    for (const a in r)
        (Ze(r[a]) || i && Ze(i[a]) || P1(a, e) || ((o = n == null ? void 0 : n.getValue(a)) == null ? void 0 : o.liveStyle) !== void 0) && (s[a] = r[a]);
    return s
}
function JA(e) {
    return window.getComputedStyle(e)
}
class eN extends S1 {
    constructor() {
        super(...arguments),
        this.type = "html",
        this.renderInstance = E1
    }
    readValueFromInstance(t, n) {
        var r;
        if (ws.has(n))
            return (r = this.projection) != null && r.isProjecting ? _d(n) : yR(t, n);
        {
            const i = JA(t)
              , s = (Vw(n) ? i.getPropertyValue(n) : i[n]) || 0;
            return typeof s == "string" ? s.trim() : s
        }
    }
    measureInstanceViewportBox(t, {transformPagePoint: n}) {
        return T1(t, n)
    }
    build(t, n, r) {
        Dh(t, n, r.transformTemplate)
    }
    scrapeMotionValuesFromProps(t, n, r) {
        return Lh(t, n, r)
    }
}
const tN = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
}
  , nN = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
};
function rN(e, t, n=1, r=0, i=!0) {
    e.pathLength = 1;
    const s = i ? tN : nN;
    e[s.offset] = `${-r}`,
    e[s.array] = `${t} ${n}`
}
const iN = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];
function _1(e, {attrX: t, attrY: n, attrScale: r, pathLength: i, pathSpacing: s=1, pathOffset: o=0, ...a}, l, u, c) {
    if (Dh(e, a, u),
    l) {
        e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
        return
    }
    e.attrs = e.style,
    e.style = {};
    const {attrs: d, style: f} = e;
    d.transform && (f.transform = d.transform,
    delete d.transform),
    (f.transform || d.transformOrigin) && (f.transformOrigin = d.transformOrigin ?? "50% 50%",
    delete d.transformOrigin),
    f.transform && (f.transformBox = (c == null ? void 0 : c.transformBox) ?? "fill-box",
    delete d.transformBox);
    for (const h of iN)
        d[h] !== void 0 && (f[h] = d[h],
        delete d[h]);
    t !== void 0 && (d.x = t),
    n !== void 0 && (d.y = n),
    r !== void 0 && (d.scale = r),
    i !== void 0 && rN(d, i, s, o, !1)
}
const R1 = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"])
  , A1 = e => typeof e == "string" && e.toLowerCase() === "svg";
function sN(e, t, n, r) {
    E1(e, t, void 0, r);
    for (const i in t.attrs)
        e.setAttribute(R1.has(i) ? i : Ph(i), t.attrs[i])
}
function N1(e, t, n) {
    const r = Lh(e, t, n);
    for (const i in e)
        if (Ze(e[i]) || Ze(t[i])) {
            const s = xs.indexOf(i) !== -1 ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i;
            r[s] = e[i]
        }
    return r
}
class oN extends S1 {
    constructor() {
        super(...arguments),
        this.type = "svg",
        this.isSVGTag = !1,
        this.measureInstanceViewportBox = Ne
    }
    getBaseTargetFromProps(t, n) {
        return t[n]
    }
    readValueFromInstance(t, n) {
        if (ws.has(n)) {
            const r = d1(n);
            return r && r.default || 0
        }
        return n = R1.has(n) ? n : Ph(n),
        t.getAttribute(n)
    }
    scrapeMotionValuesFromProps(t, n, r) {
        return N1(t, n, r)
    }
    build(t, n, r) {
        _1(t, n, this.isSVGTag, r.transformTemplate, r.style)
    }
    renderInstance(t, n, r, i) {
        sN(t, n, r, i)
    }
    mount(t) {
        this.isSVGTag = A1(t.tagName),
        super.mount(t)
    }
}
const aN = Oh.length;
function M1(e) {
    if (!e)
        return;
    if (!e.isControllingVariants) {
        const n = e.parent ? M1(e.parent) || {} : {};
        return e.props.initial !== void 0 && (n.initial = e.props.initial),
        n
    }
    const t = {};
    for (let n = 0; n < aN; n++) {
        const r = Oh[n]
          , i = e.props[r];
        (To(i) || i === !1) && (t[r] = i)
    }
    return t
}
function j1(e, t) {
    if (!Array.isArray(t))
        return !1;
    const n = t.length;
    if (n !== e.length)
        return !1;
    for (let r = 0; r < n; r++)
        if (t[r] !== e[r])
            return !1;
    return !0
}
const lN = [...jh].reverse()
  , uN = jh.length;
function cN(e) {
    return t => Promise.all(t.map( ({animation: n, options: r}) => oA(e, n, r)))
}
function dN(e) {
    let t = cN(e)
      , n = vg()
      , r = !0;
    const i = l => (u, c) => {
        var f;
        const d = Bi(e, c, l === "exit" ? (f = e.presenceContext) == null ? void 0 : f.custom : void 0);
        if (d) {
            const {transition: h, transitionEnd: v, ...g} = d;
            u = {
                ...u,
                ...g,
                ...v
            }
        }
        return u
    }
    ;
    function s(l) {
        t = l(e)
    }
    function o(l) {
        const {props: u} = e
          , c = M1(e.parent) || {}
          , d = []
          , f = new Set;
        let h = {}
          , v = 1 / 0;
        for (let x = 0; x < uN; x++) {
            const m = lN[x]
              , p = n[m]
              , y = u[m] !== void 0 ? u[m] : c[m]
              , b = To(y)
              , C = m === l ? p.isActive : null;
            C === !1 && (v = x);
            let k = y === c[m] && y !== u[m] && b;
            if (k && r && e.manuallyAnimateOnMount && (k = !1),
            p.protectedKeys = {
                ...h
            },
            !p.isActive && C === null || !y && !p.prevProp || au(y) || typeof y == "boolean")
                continue;
            if (m === "exit" && p.isActive && C !== !0) {
                p.prevResolvedValues && (h = {
                    ...h,
                    ...p.prevResolvedValues
                });
                continue
            }
            const T = fN(p.prevProp, y);
            let E = T || m === l && p.isActive && !k && b || x > v && b
              , M = !1;
            const N = Array.isArray(y) ? y : [y];
            let W = N.reduce(i(m), {});
            C === !1 && (W = {});
            const {prevResolvedValues: V={}} = p
              , J = {
                ...V,
                ...W
            }
              , D = B => {
                E = !0,
                f.has(B) && (M = !0,
                f.delete(B)),
                p.needsAnimating[B] = !0;
                const P = e.getValue(B);
                P && (P.liveStyle = !1)
            }
            ;
            for (const B in J) {
                const P = W[B]
                  , R = V[B];
                if (h.hasOwnProperty(B))
                    continue;
                let L = !1;
                Od(P) && Od(R) ? L = !j1(P, R) : L = P !== R,
                L ? P != null ? D(B) : f.add(B) : P !== void 0 && f.has(B) ? D(B) : p.protectedKeys[B] = !0
            }
            p.prevProp = y,
            p.prevResolvedValues = W,
            p.isActive && (h = {
                ...h,
                ...W
            }),
            r && e.blockInitialAnimation && (E = !1);
            const ee = k && T;
            E && (!ee || M) && d.push(...N.map(B => {
                const P = {
                    type: m
                };
                if (typeof B == "string" && r && !ee && e.manuallyAnimateOnMount && e.parent) {
                    const {parent: R} = e
                      , L = Bi(R, B);
                    if (R.enteringChildren && L) {
                        const {delayChildren: Z} = L.transition || {};
                        P.delay = n1(R.enteringChildren, e, Z)
                    }
                }
                return {
                    animation: B,
                    options: P
                }
            }
            ))
        }
        if (f.size) {
            const x = {};
            if (typeof u.initial != "boolean") {
                const m = Bi(e, Array.isArray(u.initial) ? u.initial[0] : u.initial);
                m && m.transition && (x.transition = m.transition)
            }
            f.forEach(m => {
                const p = e.getBaseTarget(m)
                  , y = e.getValue(m);
                y && (y.liveStyle = !0),
                x[m] = p ?? null
            }
            ),
            d.push({
                animation: x
            })
        }
        let g = !!d.length;
        return r && (u.initial === !1 || u.initial === u.animate) && !e.manuallyAnimateOnMount && (g = !1),
        r = !1,
        g ? t(d) : Promise.resolve()
    }
    function a(l, u) {
        var d;
        if (n[l].isActive === u)
            return Promise.resolve();
        (d = e.variantChildren) == null || d.forEach(f => {
            var h;
            return (h = f.animationState) == null ? void 0 : h.setActive(l, u)
        }
        ),
        n[l].isActive = u;
        const c = o(l);
        for (const f in n)
            n[f].protectedKeys = {};
        return c
    }
    return {
        animateChanges: o,
        setActive: a,
        setAnimateFunction: s,
        getState: () => n,
        reset: () => {
            n = vg()
        }
    }
}
function fN(e, t) {
    return typeof t == "string" ? t !== e : Array.isArray(t) ? !j1(t, e) : !1
}
function Mr(e=!1) {
    return {
        isActive: e,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}
function vg() {
    return {
        animate: Mr(!0),
        whileInView: Mr(),
        whileHover: Mr(),
        whileTap: Mr(),
        whileDrag: Mr(),
        whileFocus: Mr(),
        exit: Mr()
    }
}
function xg(e, t) {
    e.min = t.min,
    e.max = t.max
}
function Ft(e, t) {
    xg(e.x, t.x),
    xg(e.y, t.y)
}
function wg(e, t) {
    e.translate = t.translate,
    e.scale = t.scale,
    e.originPoint = t.originPoint,
    e.origin = t.origin
}
const O1 = 1e-4
  , hN = 1 - O1
  , pN = 1 + O1
  , D1 = .01
  , mN = 0 - D1
  , gN = 0 + D1;
function tt(e) {
    return e.max - e.min
}
function yN(e, t, n) {
    return Math.abs(e - t) <= n
}
function Sg(e, t, n, r=.5) {
    e.origin = r,
    e.originPoint = Se(t.min, t.max, e.origin),
    e.scale = tt(n) / tt(t),
    e.translate = Se(n.min, n.max, e.origin) - e.originPoint,
    (e.scale >= hN && e.scale <= pN || isNaN(e.scale)) && (e.scale = 1),
    (e.translate >= mN && e.translate <= gN || isNaN(e.translate)) && (e.translate = 0)
}
function qs(e, t, n, r) {
    Sg(e.x, t.x, n.x, r ? r.originX : void 0),
    Sg(e.y, t.y, n.y, r ? r.originY : void 0)
}
function bg(e, t, n) {
    e.min = n.min + t.min,
    e.max = e.min + tt(t)
}
function vN(e, t, n) {
    bg(e.x, t.x, n.x),
    bg(e.y, t.y, n.y)
}
function Cg(e, t, n) {
    e.min = t.min - n.min,
    e.max = e.min + tt(t)
}
function kl(e, t, n) {
    Cg(e.x, t.x, n.x),
    Cg(e.y, t.y, n.y)
}
function kg(e, t, n, r, i) {
    return e -= t,
    e = Cl(e, 1 / n, r),
    i !== void 0 && (e = Cl(e, 1 / i, r)),
    e
}
function xN(e, t=0, n=1, r=.5, i, s=e, o=e) {
    if (dn.test(t) && (t = parseFloat(t),
    t = Se(o.min, o.max, t / 100) - o.min),
    typeof t != "number")
        return;
    let a = Se(s.min, s.max, r);
    e === s && (a -= t),
    e.min = kg(e.min, t, n, a, i),
    e.max = kg(e.max, t, n, a, i)
}
function Tg(e, t, [n,r,i], s, o) {
    xN(e, t[n], t[r], t[i], t.scale, s, o)
}
const wN = ["x", "scaleX", "originX"]
  , SN = ["y", "scaleY", "originY"];
function Eg(e, t, n, r) {
    Tg(e.x, t, wN, n ? n.x : void 0, r ? r.x : void 0),
    Tg(e.y, t, SN, n ? n.y : void 0, r ? r.y : void 0)
}
function Pg(e) {
    return e.translate === 0 && e.scale === 1
}
function L1(e) {
    return Pg(e.x) && Pg(e.y)
}
function _g(e, t) {
    return e.min === t.min && e.max === t.max
}
function bN(e, t) {
    return _g(e.x, t.x) && _g(e.y, t.y)
}
function Rg(e, t) {
    return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max)
}
function I1(e, t) {
    return Rg(e.x, t.x) && Rg(e.y, t.y)
}
function Ag(e) {
    return tt(e.x) / tt(e.y)
}
function Ng(e, t) {
    return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint
}
function tn(e) {
    return [e("x"), e("y")]
}
function CN(e, t, n) {
    let r = "";
    const i = e.x.translate / t.x
      , s = e.y.translate / t.y
      , o = (n == null ? void 0 : n.z) || 0;
    if ((i || s || o) && (r = `translate3d(${i}px, ${s}px, ${o}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n) {
        const {transformPerspective: u, rotate: c, rotateX: d, rotateY: f, skewX: h, skewY: v} = n;
        u && (r = `perspective(${u}px) ${r}`),
        c && (r += `rotate(${c}deg) `),
        d && (r += `rotateX(${d}deg) `),
        f && (r += `rotateY(${f}deg) `),
        h && (r += `skewX(${h}deg) `),
        v && (r += `skewY(${v}deg) `)
    }
    const a = e.x.scale * t.x
      , l = e.y.scale * t.y;
    return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`),
    r || "none"
}
const V1 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
  , kN = V1.length
  , Mg = e => typeof e == "string" ? parseFloat(e) : e
  , jg = e => typeof e == "number" || z.test(e);
function TN(e, t, n, r, i, s) {
    i ? (e.opacity = Se(0, n.opacity ?? 1, EN(r)),
    e.opacityExit = Se(t.opacity ?? 1, 0, PN(r))) : s && (e.opacity = Se(t.opacity ?? 1, n.opacity ?? 1, r));
    for (let o = 0; o < kN; o++) {
        const a = `border${V1[o]}Radius`;
        let l = Og(t, a)
          , u = Og(n, a);
        if (l === void 0 && u === void 0)
            continue;
        l || (l = 0),
        u || (u = 0),
        l === 0 || u === 0 || jg(l) === jg(u) ? (e[a] = Math.max(Se(Mg(l), Mg(u), r), 0),
        (dn.test(u) || dn.test(l)) && (e[a] += "%")) : e[a] = u
    }
    (t.rotate || n.rotate) && (e.rotate = Se(t.rotate || 0, n.rotate || 0, r))
}
function Og(e, t) {
    return e[t] !== void 0 ? e[t] : e.borderRadius
}
const EN = F1(0, .5, Mw)
  , PN = F1(.5, .95, Rt);
function F1(e, t, n) {
    return r => r < e ? 0 : r > t ? 1 : n(bo(e, t, r))
}
function _N(e, t, n) {
    const r = Ze(e) ? e : as(e);
    return r.start(Th("", r, t, n)),
    r.animation
}
function Eo(e, t, n, r={
    passive: !0
}) {
    return e.addEventListener(t, n, r),
    () => e.removeEventListener(t, n)
}
const RN = (e, t) => e.depth - t.depth;
class AN {
    constructor() {
        this.children = [],
        this.isDirty = !1
    }
    add(t) {
        ch(this.children, t),
        this.isDirty = !0
    }
    remove(t) {
        vl(this.children, t),
        this.isDirty = !0
    }
    forEach(t) {
        this.isDirty && this.children.sort(RN),
        this.isDirty = !1,
        this.children.forEach(t)
    }
}
function NN(e, t) {
    const n = et.now()
      , r = ({timestamp: i}) => {
        const s = i - n;
        s >= t && (Sr(r),
        e(s - t))
    }
    ;
    return he.setup(r, !0),
    () => Sr(r)
}
function Fa(e) {
    return Ze(e) ? e.get() : e
}
class MN {
    constructor() {
        this.members = []
    }
    add(t) {
        ch(this.members, t);
        for (let n = this.members.length - 1; n >= 0; n--) {
            const r = this.members[n];
            if (r === t || r === this.lead || r === this.prevLead)
                continue;
            const i = r.instance;
            i && i.isConnected === !1 && r.isPresent !== !1 && !r.snapshot && vl(this.members, r)
        }
        t.scheduleRender()
    }
    remove(t) {
        if (vl(this.members, t),
        t === this.prevLead && (this.prevLead = void 0),
        t === this.lead) {
            const n = this.members[this.members.length - 1];
            n && this.promote(n)
        }
    }
    relegate(t) {
        const n = this.members.findIndex(i => t === i);
        if (n === 0)
            return !1;
        let r;
        for (let i = n; i >= 0; i--) {
            const s = this.members[i]
              , o = s.instance;
            if (s.isPresent !== !1 && (!o || o.isConnected !== !1)) {
                r = s;
                break
            }
        }
        return r ? (this.promote(r),
        !0) : !1
    }
    promote(t, n) {
        const r = this.lead;
        if (t !== r && (this.prevLead = r,
        this.lead = t,
        t.show(),
        r)) {
            r.instance && r.scheduleRender(),
            t.scheduleRender();
            const i = r.options.layoutDependency
              , s = t.options.layoutDependency;
            if (!(i !== void 0 && s !== void 0 && i === s)) {
                const l = r.instance;
                l && l.isConnected === !1 && !r.snapshot || (t.resumeFrom = r,
                n && (t.resumeFrom.preserveOpacity = !0),
                r.snapshot && (t.snapshot = r.snapshot,
                t.snapshot.latestValues = r.animationValues || r.latestValues),
                t.root && t.root.isUpdating && (t.isLayoutDirty = !0))
            }
            const {crossfade: a} = t.options;
            a === !1 && r.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(t => {
            const {options: n, resumingFrom: r} = t;
            n.onExitComplete && n.onExitComplete(),
            r && r.options.onExitComplete && r.options.onExitComplete()
        }
        )
    }
    scheduleRender() {
        this.members.forEach(t => {
            t.instance && t.scheduleRender(!1)
        }
        )
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}
const za = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
}
  , rc = ["", "X", "Y", "Z"]
  , jN = 1e3;
let ON = 0;
function ic(e, t, n, r) {
    const {latestValues: i} = t;
    i[e] && (n[e] = i[e],
    t.setStaticValue(e, 0),
    r && (r[e] = 0))
}
function z1(e) {
    if (e.hasCheckedOptimisedAppear = !0,
    e.root === e)
        return;
    const {visualElement: t} = e.options;
    if (!t)
        return;
    const n = a1(t);
    if (window.MotionHasOptimisedAnimation(n, "transform")) {
        const {layout: i, layoutId: s} = e.options;
        window.MotionCancelOptimisedAnimation(n, "transform", he, !(i || s))
    }
    const {parent: r} = e;
    r && !r.hasCheckedOptimisedAppear && z1(r)
}
function $1({attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: i}) {
    return class {
        constructor(o={}, a=t == null ? void 0 : t()) {
            this.id = ON++,
            this.animationId = 0,
            this.animationCommitId = 0,
            this.children = new Set,
            this.options = {},
            this.isTreeAnimating = !1,
            this.isAnimationBlocked = !1,
            this.isLayoutDirty = !1,
            this.isProjectionDirty = !1,
            this.isSharedProjectionDirty = !1,
            this.isTransformDirty = !1,
            this.updateManuallyBlocked = !1,
            this.updateBlockedByResize = !1,
            this.isUpdating = !1,
            this.isSVG = !1,
            this.needsReset = !1,
            this.shouldResetTransform = !1,
            this.hasCheckedOptimisedAppear = !1,
            this.treeScale = {
                x: 1,
                y: 1
            },
            this.eventHandlers = new Map,
            this.hasTreeAnimated = !1,
            this.layoutVersion = 0,
            this.updateScheduled = !1,
            this.scheduleUpdate = () => this.update(),
            this.projectionUpdateScheduled = !1,
            this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1,
                this.clearAllSnapshots())
            }
            ,
            this.updateProjection = () => {
                this.projectionUpdateScheduled = !1,
                this.nodes.forEach(IN),
                this.nodes.forEach($N),
                this.nodes.forEach(BN),
                this.nodes.forEach(VN)
            }
            ,
            this.resolvedRelativeTargetAt = 0,
            this.linkedParentVersion = 0,
            this.hasProjected = !1,
            this.isVisible = !0,
            this.animationProgress = 0,
            this.sharedNodes = new Map,
            this.latestValues = o,
            this.root = a ? a.root || a : this,
            this.path = a ? [...a.path, a] : [],
            this.parent = a,
            this.depth = a ? a.depth + 1 : 0;
            for (let l = 0; l < this.path.length; l++)
                this.path[l].shouldResetTransform = !0;
            this.root === this && (this.nodes = new AN)
        }
        addEventListener(o, a) {
            return this.eventHandlers.has(o) || this.eventHandlers.set(o, new fh),
            this.eventHandlers.get(o).add(a)
        }
        notifyListeners(o, ...a) {
            const l = this.eventHandlers.get(o);
            l && l.notify(...a)
        }
        hasListeners(o) {
            return this.eventHandlers.has(o)
        }
        mount(o) {
            if (this.instance)
                return;
            this.isSVG = Mh(o) && !LA(o),
            this.instance = o;
            const {layoutId: a, layout: l, visualElement: u} = this.options;
            if (u && !u.current && u.mount(o),
            this.root.nodes.add(this),
            this.parent && this.parent.children.add(this),
            this.root.hasTreeAnimated && (l || a) && (this.isLayoutDirty = !0),
            e) {
                let c, d = 0;
                const f = () => this.root.updateBlockedByResize = !1;
                he.read( () => {
                    d = window.innerWidth
                }
                ),
                e(o, () => {
                    const h = window.innerWidth;
                    h !== d && (d = h,
                    this.root.updateBlockedByResize = !0,
                    c && c(),
                    c = NN(f, 250),
                    za.hasAnimatedSinceResize && (za.hasAnimatedSinceResize = !1,
                    this.nodes.forEach(Ig)))
                }
                )
            }
            a && this.root.registerSharedNode(a, this),
            this.options.animate !== !1 && u && (a || l) && this.addEventListener("didUpdate", ({delta: c, hasLayoutChanged: d, hasRelativeLayoutChanged: f, layout: h}) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0,
                    this.relativeTarget = void 0;
                    return
                }
                const v = this.options.transition || u.getDefaultTransition() || ZN
                  , {onLayoutAnimationStart: g, onLayoutAnimationComplete: x} = u.getProps()
                  , m = !this.targetLayout || !I1(this.targetLayout, h)
                  , p = !d && f;
                if (this.options.layoutRoot || this.resumeFrom || p || d && (m || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                    this.resumingFrom.resumingFrom = void 0);
                    const y = {
                        ...kh(v, "layout"),
                        onPlay: g,
                        onComplete: x
                    };
                    (u.shouldReduceMotion || this.options.layoutRoot) && (y.delay = 0,
                    y.type = !1),
                    this.startAnimation(y),
                    this.setAnimationOrigin(c, p)
                } else
                    d || Ig(this),
                    this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = h
            }
            )
        }
        unmount() {
            this.options.layoutId && this.willUpdate(),
            this.root.nodes.remove(this);
            const o = this.getStack();
            o && o.remove(this),
            this.parent && this.parent.children.delete(this),
            this.instance = void 0,
            this.eventHandlers.clear(),
            Sr(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0,
            this.nodes && this.nodes.forEach(UN),
            this.animationId++)
        }
        getTransformTemplate() {
            const {visualElement: o} = this.options;
            return o && o.getProps().transformTemplate
        }
        willUpdate(o=!0) {
            if (this.root.hasTreeAnimated = !0,
            this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && z1(this),
            !this.root.isUpdating && this.root.startUpdate(),
            this.isLayoutDirty)
                return;
            this.isLayoutDirty = !0;
            for (let c = 0; c < this.path.length; c++) {
                const d = this.path[c];
                d.shouldResetTransform = !0,
                d.updateScroll("snapshot"),
                d.options.layoutRoot && d.willUpdate(!1)
            }
            const {layoutId: a, layout: l} = this.options;
            if (a === void 0 && !l)
                return;
            const u = this.getTransformTemplate();
            this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0,
            this.updateSnapshot(),
            o && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1,
            this.isUpdateBlocked()) {
                this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(Dg);
                return
            }
            if (this.animationId <= this.animationCommitId) {
                this.nodes.forEach(Lg);
                return
            }
            this.animationCommitId = this.animationId,
            this.isUpdating ? (this.isUpdating = !1,
            this.nodes.forEach(zN),
            this.nodes.forEach(DN),
            this.nodes.forEach(LN)) : this.nodes.forEach(Lg),
            this.clearAllSnapshots();
            const a = et.now();
            Ve.delta = pn(0, 1e3 / 60, a - Ve.timestamp),
            Ve.timestamp = a,
            Ve.isProcessing = !0,
            Qu.update.process(Ve),
            Qu.preRender.process(Ve),
            Qu.render.process(Ve),
            Ve.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0,
            Ah.read(this.scheduleUpdate))
        }
        clearAllSnapshots() {
            this.nodes.forEach(FN),
            this.sharedNodes.forEach(WN)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0,
            he.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            he.postRender( () => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            }
            )
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure(),
            this.snapshot && !tt(this.snapshot.measuredBox.x) && !tt(this.snapshot.measuredBox.y) && (this.snapshot = void 0))
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(),
            !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let l = 0; l < this.path.length; l++)
                    this.path[l].updateScroll();
            const o = this.layout;
            this.layout = this.measure(!1),
            this.layoutVersion++,
            this.layoutCorrected = Ne(),
            this.isLayoutDirty = !1,
            this.projectionDelta = void 0,
            this.notifyListeners("measure", this.layout.layoutBox);
            const {visualElement: a} = this.options;
            a && a.notify("LayoutMeasure", this.layout.layoutBox, o ? o.layoutBox : void 0)
        }
        updateScroll(o="measure") {
            let a = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === o && (a = !1),
            a && this.instance) {
                const l = r(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: o,
                    isRoot: l,
                    offset: n(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : l
                }
            }
        }
        resetTransform() {
            if (!i)
                return;
            const o = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout
              , a = this.projectionDelta && !L1(this.projectionDelta)
              , l = this.getTransformTemplate()
              , u = l ? l(this.latestValues, "") : void 0
              , c = u !== this.prevTransformTemplateValue;
            o && this.instance && (a || Dr(this.latestValues) || c) && (i(this.instance, u),
            this.shouldResetTransform = !1,
            this.scheduleRender())
        }
        measure(o=!0) {
            const a = this.measurePageBox();
            let l = this.removeElementScroll(a);
            return o && (l = this.removeTransform(l)),
            GN(l),
            {
                animationId: this.root.animationId,
                measuredBox: a,
                layoutBox: l,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            var u;
            const {visualElement: o} = this.options;
            if (!o)
                return Ne();
            const a = o.measureViewportBox();
            if (!(((u = this.scroll) == null ? void 0 : u.wasRoot) || this.path.some(QN))) {
                const {scroll: c} = this.root;
                c && (Ni(a.x, c.offset.x),
                Ni(a.y, c.offset.y))
            }
            return a
        }
        removeElementScroll(o) {
            var l;
            const a = Ne();
            if (Ft(a, o),
            (l = this.scroll) != null && l.wasRoot)
                return a;
            for (let u = 0; u < this.path.length; u++) {
                const c = this.path[u]
                  , {scroll: d, options: f} = c;
                c !== this.root && d && f.layoutScroll && (d.wasRoot && Ft(a, o),
                Ni(a.x, d.offset.x),
                Ni(a.y, d.offset.y))
            }
            return a
        }
        applyTransform(o, a=!1) {
            const l = Ne();
            Ft(l, o);
            for (let u = 0; u < this.path.length; u++) {
                const c = this.path[u];
                !a && c.options.layoutScroll && c.scroll && c !== c.root && Mi(l, {
                    x: -c.scroll.offset.x,
                    y: -c.scroll.offset.y
                }),
                Dr(c.latestValues) && Mi(l, c.latestValues)
            }
            return Dr(this.latestValues) && Mi(l, this.latestValues),
            l
        }
        removeTransform(o) {
            const a = Ne();
            Ft(a, o);
            for (let l = 0; l < this.path.length; l++) {
                const u = this.path[l];
                if (!u.instance || !Dr(u.latestValues))
                    continue;
                Fd(u.latestValues) && u.updateSnapshot();
                const c = Ne()
                  , d = u.measurePageBox();
                Ft(c, d),
                Eg(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c)
            }
            return Dr(this.latestValues) && Eg(a, this.latestValues),
            a
        }
        setTargetDelta(o) {
            this.targetDelta = o,
            this.root.scheduleUpdateProjection(),
            this.isProjectionDirty = !0
        }
        setOptions(o) {
            this.options = {
                ...this.options,
                ...o,
                crossfade: o.crossfade !== void 0 ? o.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0,
            this.layout = void 0,
            this.snapshot = void 0,
            this.prevTransformTemplateValue = void 0,
            this.targetDelta = void 0,
            this.target = void 0,
            this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Ve.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(o=!1) {
            var h;
            const a = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty),
            this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty),
            this.isSharedProjectionDirty || (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
            const l = !!this.resumingFrom || this !== a;
            if (!(o || l && this.isSharedProjectionDirty || this.isProjectionDirty || (h = this.parent) != null && h.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
                return;
            const {layout: c, layoutId: d} = this.options;
            if (!this.layout || !(c || d))
                return;
            this.resolvedRelativeTargetAt = Ve.timestamp;
            const f = this.getClosestProjectingParent();
            f && this.linkedParentVersion !== f.layoutVersion && !f.options.layoutRoot && this.removeRelativeTarget(),
            !this.targetDelta && !this.relativeTarget && (f && f.layout ? this.createRelativeTarget(f, this.layout.layoutBox, f.layout.layoutBox) : this.removeRelativeTarget()),
            !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = Ne(),
            this.targetWithTransforms = Ne()),
            this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(),
            vN(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Ft(this.target, this.layout.layoutBox),
            k1(this.target, this.targetDelta)) : Ft(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1,
            f && !!f.resumingFrom == !!this.resumingFrom && !f.options.layoutScroll && f.target && this.animationProgress !== 1 ? this.createRelativeTarget(f, this.target, f.target) : this.relativeParent = this.relativeTarget = void 0))
        }
        getClosestProjectingParent() {
            if (!(!this.parent || Fd(this.parent.latestValues) || C1(this.parent.latestValues)))
                return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        createRelativeTarget(o, a, l) {
            this.relativeParent = o,
            this.linkedParentVersion = o.layoutVersion,
            this.forceRelativeParentToResolveTarget(),
            this.relativeTarget = Ne(),
            this.relativeTargetOrigin = Ne(),
            kl(this.relativeTargetOrigin, a, l),
            Ft(this.relativeTarget, this.relativeTargetOrigin)
        }
        removeRelativeTarget() {
            this.relativeParent = this.relativeTarget = void 0
        }
        calcProjection() {
            var v;
            const o = this.getLead()
              , a = !!this.resumingFrom || this !== o;
            let l = !0;
            if ((this.isProjectionDirty || (v = this.parent) != null && v.isProjectionDirty) && (l = !1),
            a && (this.isSharedProjectionDirty || this.isTransformDirty) && (l = !1),
            this.resolvedRelativeTargetAt === Ve.timestamp && (l = !1),
            l)
                return;
            const {layout: u, layoutId: c} = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
            this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
            !this.layout || !(u || c))
                return;
            Ft(this.layoutCorrected, this.layout.layoutBox);
            const d = this.treeScale.x
              , f = this.treeScale.y;
            ZA(this.layoutCorrected, this.treeScale, this.path, a),
            o.layout && !o.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (o.target = o.layout.layoutBox,
            o.targetWithTransforms = Ne());
            const {target: h} = o;
            if (!h) {
                this.prevProjectionDelta && (this.createProjectionDeltas(),
                this.scheduleRender());
                return
            }
            !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (wg(this.prevProjectionDelta.x, this.projectionDelta.x),
            wg(this.prevProjectionDelta.y, this.projectionDelta.y)),
            qs(this.projectionDelta, this.layoutCorrected, h, this.latestValues),
            (this.treeScale.x !== d || this.treeScale.y !== f || !Ng(this.projectionDelta.x, this.prevProjectionDelta.x) || !Ng(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0,
            this.scheduleRender(),
            this.notifyListeners("projectionUpdate", h))
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(o=!0) {
            var a;
            if ((a = this.options.visualElement) == null || a.scheduleRender(),
            o) {
                const l = this.getStack();
                l && l.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = Ai(),
            this.projectionDelta = Ai(),
            this.projectionDeltaWithTransform = Ai()
        }
        setAnimationOrigin(o, a=!1) {
            const l = this.snapshot
              , u = l ? l.latestValues : {}
              , c = {
                ...this.latestValues
            }
              , d = Ai();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0),
            this.attemptToResolveRelativeTarget = !a;
            const f = Ne()
              , h = l ? l.source : void 0
              , v = this.layout ? this.layout.source : void 0
              , g = h !== v
              , x = this.getStack()
              , m = !x || x.members.length <= 1
              , p = !!(g && !m && this.options.crossfade === !0 && !this.path.some(KN));
            this.animationProgress = 0;
            let y;
            this.mixTargetDelta = b => {
                const C = b / 1e3;
                Vg(d.x, o.x, C),
                Vg(d.y, o.y, C),
                this.setTargetDelta(d),
                this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (kl(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                HN(this.relativeTarget, this.relativeTargetOrigin, f, C),
                y && bN(this.relativeTarget, y) && (this.isProjectionDirty = !1),
                y || (y = Ne()),
                Ft(y, this.relativeTarget)),
                g && (this.animationValues = c,
                TN(c, u, this.latestValues, C, p, m)),
                this.root.scheduleUpdateProjection(),
                this.scheduleRender(),
                this.animationProgress = C
            }
            ,
            this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(o) {
            var a, l, u;
            this.notifyListeners("animationStart"),
            (a = this.currentAnimation) == null || a.stop(),
            (u = (l = this.resumingFrom) == null ? void 0 : l.currentAnimation) == null || u.stop(),
            this.pendingAnimation && (Sr(this.pendingAnimation),
            this.pendingAnimation = void 0),
            this.pendingAnimation = he.update( () => {
                za.hasAnimatedSinceResize = !0,
                this.motionValue || (this.motionValue = as(0)),
                this.currentAnimation = _N(this.motionValue, [0, 1e3], {
                    ...o,
                    velocity: 0,
                    isSync: !0,
                    onUpdate: c => {
                        this.mixTargetDelta(c),
                        o.onUpdate && o.onUpdate(c)
                    }
                    ,
                    onStop: () => {}
                    ,
                    onComplete: () => {
                        o.onComplete && o.onComplete(),
                        this.completeAnimation()
                    }
                }),
                this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                this.pendingAnimation = void 0
            }
            )
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
            this.resumingFrom.preserveOpacity = void 0);
            const o = this.getStack();
            o && o.exitAnimationComplete(),
            this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
            this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(jN),
            this.currentAnimation.stop()),
            this.completeAnimation()
        }
        applyTransformsToTarget() {
            const o = this.getLead();
            let {targetWithTransforms: a, target: l, layout: u, latestValues: c} = o;
            if (!(!a || !l || !u)) {
                if (this !== o && this.layout && u && B1(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
                    l = this.target || Ne();
                    const d = tt(this.layout.layoutBox.x);
                    l.x.min = o.target.x.min,
                    l.x.max = l.x.min + d;
                    const f = tt(this.layout.layoutBox.y);
                    l.y.min = o.target.y.min,
                    l.y.max = l.y.min + f
                }
                Ft(a, l),
                Mi(a, c),
                qs(this.projectionDeltaWithTransform, this.layoutCorrected, a, c)
            }
        }
        registerSharedNode(o, a) {
            this.sharedNodes.has(o) || this.sharedNodes.set(o, new MN),
            this.sharedNodes.get(o).add(a);
            const u = a.options.initialPromotionConfig;
            a.promote({
                transition: u ? u.transition : void 0,
                preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(a) : void 0
            })
        }
        isLead() {
            const o = this.getStack();
            return o ? o.lead === this : !0
        }
        getLead() {
            var a;
            const {layoutId: o} = this.options;
            return o ? ((a = this.getStack()) == null ? void 0 : a.lead) || this : this
        }
        getPrevLead() {
            var a;
            const {layoutId: o} = this.options;
            return o ? (a = this.getStack()) == null ? void 0 : a.prevLead : void 0
        }
        getStack() {
            const {layoutId: o} = this.options;
            if (o)
                return this.root.sharedNodes.get(o)
        }
        promote({needsReset: o, transition: a, preserveFollowOpacity: l}={}) {
            const u = this.getStack();
            u && u.promote(this, l),
            o && (this.projectionDelta = void 0,
            this.needsReset = !0),
            a && this.setOptions({
                transition: a
            })
        }
        relegate() {
            const o = this.getStack();
            return o ? o.relegate(this) : !1
        }
        resetSkewAndRotation() {
            const {visualElement: o} = this.options;
            if (!o)
                return;
            let a = !1;
            const {latestValues: l} = o;
            if ((l.z || l.rotate || l.rotateX || l.rotateY || l.rotateZ || l.skewX || l.skewY) && (a = !0),
            !a)
                return;
            const u = {};
            l.z && ic("z", o, u, this.animationValues);
            for (let c = 0; c < rc.length; c++)
                ic(`rotate${rc[c]}`, o, u, this.animationValues),
                ic(`skew${rc[c]}`, o, u, this.animationValues);
            o.render();
            for (const c in u)
                o.setStaticValue(c, u[c]),
                this.animationValues && (this.animationValues[c] = u[c]);
            o.scheduleRender()
        }
        applyProjectionStyles(o, a) {
            if (!this.instance || this.isSVG)
                return;
            if (!this.isVisible) {
                o.visibility = "hidden";
                return
            }
            const l = this.getTransformTemplate();
            if (this.needsReset) {
                this.needsReset = !1,
                o.visibility = "",
                o.opacity = "",
                o.pointerEvents = Fa(a == null ? void 0 : a.pointerEvents) || "",
                o.transform = l ? l(this.latestValues, "") : "none";
                return
            }
            const u = this.getLead();
            if (!this.projectionDelta || !this.layout || !u.target) {
                this.options.layoutId && (o.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1,
                o.pointerEvents = Fa(a == null ? void 0 : a.pointerEvents) || ""),
                this.hasProjected && !Dr(this.latestValues) && (o.transform = l ? l({}, "") : "none",
                this.hasProjected = !1);
                return
            }
            o.visibility = "";
            const c = u.animationValues || u.latestValues;
            this.applyTransformsToTarget();
            let d = CN(this.projectionDeltaWithTransform, this.treeScale, c);
            l && (d = l(c, d)),
            o.transform = d;
            const {x: f, y: h} = this.projectionDelta;
            o.transformOrigin = `${f.origin * 100}% ${h.origin * 100}% 0`,
            u.animationValues ? o.opacity = u === this ? c.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : c.opacityExit : o.opacity = u === this ? c.opacity !== void 0 ? c.opacity : "" : c.opacityExit !== void 0 ? c.opacityExit : 0;
            for (const v in $d) {
                if (c[v] === void 0)
                    continue;
                const {correct: g, applyTo: x, isCSSVariable: m} = $d[v]
                  , p = d === "none" ? c[v] : g(c[v], u);
                if (x) {
                    const y = x.length;
                    for (let b = 0; b < y; b++)
                        o[x[b]] = p
                } else
                    m ? this.options.visualElement.renderState.vars[v] = p : o[v] = p
            }
            this.options.layoutId && (o.pointerEvents = u === this ? Fa(a == null ? void 0 : a.pointerEvents) || "" : "none")
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(o => {
                var a;
                return (a = o.currentAnimation) == null ? void 0 : a.stop()
            }
            ),
            this.root.nodes.forEach(Dg),
            this.root.sharedNodes.clear()
        }
    }
}
function DN(e) {
    e.updateLayout()
}
function LN(e) {
    var n;
    const t = ((n = e.resumeFrom) == null ? void 0 : n.snapshot) || e.snapshot;
    if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
        const {layoutBox: r, measuredBox: i} = e.layout
          , {animationType: s} = e.options
          , o = t.source !== e.layout.source;
        s === "size" ? tn(d => {
            const f = o ? t.measuredBox[d] : t.layoutBox[d]
              , h = tt(f);
            f.min = r[d].min,
            f.max = f.min + h
        }
        ) : B1(s, t.layoutBox, r) && tn(d => {
            const f = o ? t.measuredBox[d] : t.layoutBox[d]
              , h = tt(r[d]);
            f.max = f.min + h,
            e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0,
            e.relativeTarget[d].max = e.relativeTarget[d].min + h)
        }
        );
        const a = Ai();
        qs(a, r, t.layoutBox);
        const l = Ai();
        o ? qs(l, e.applyTransform(i, !0), t.measuredBox) : qs(l, r, t.layoutBox);
        const u = !L1(a);
        let c = !1;
        if (!e.resumeFrom) {
            const d = e.getClosestProjectingParent();
            if (d && !d.resumeFrom) {
                const {snapshot: f, layout: h} = d;
                if (f && h) {
                    const v = Ne();
                    kl(v, t.layoutBox, f.layoutBox);
                    const g = Ne();
                    kl(g, r, h.layoutBox),
                    I1(v, g) || (c = !0),
                    d.options.layoutRoot && (e.relativeTarget = g,
                    e.relativeTargetOrigin = v,
                    e.relativeParent = d)
                }
            }
        }
        e.notifyListeners("didUpdate", {
            layout: r,
            snapshot: t,
            delta: l,
            layoutDelta: a,
            hasLayoutChanged: u,
            hasRelativeLayoutChanged: c
        })
    } else if (e.isLead()) {
        const {onExitComplete: r} = e.options;
        r && r()
    }
    e.options.transition = void 0
}
function IN(e) {
    e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
    e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)),
    e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
}
function VN(e) {
    e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
}
function FN(e) {
    e.clearSnapshot()
}
function Dg(e) {
    e.clearMeasurements()
}
function Lg(e) {
    e.isLayoutDirty = !1
}
function zN(e) {
    const {visualElement: t} = e.options;
    t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform()
}
function Ig(e) {
    e.finishAnimation(),
    e.targetDelta = e.relativeTarget = e.target = void 0,
    e.isProjectionDirty = !0
}
function $N(e) {
    e.resolveTargetDelta()
}
function BN(e) {
    e.calcProjection()
}
function UN(e) {
    e.resetSkewAndRotation()
}
function WN(e) {
    e.removeLeadSnapshot()
}
function Vg(e, t, n) {
    e.translate = Se(t.translate, 0, n),
    e.scale = Se(t.scale, 1, n),
    e.origin = t.origin,
    e.originPoint = t.originPoint
}
function Fg(e, t, n, r) {
    e.min = Se(t.min, n.min, r),
    e.max = Se(t.max, n.max, r)
}
function HN(e, t, n, r) {
    Fg(e.x, t.x, n.x, r),
    Fg(e.y, t.y, n.y, r)
}
function KN(e) {
    return e.animationValues && e.animationValues.opacityExit !== void 0
}
const ZN = {
    duration: .45,
    ease: [.4, 0, .1, 1]
}
  , zg = e => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e)
  , $g = zg("applewebkit/") && !zg("chrome/") ? Math.round : Rt;
function Bg(e) {
    e.min = $g(e.min),
    e.max = $g(e.max)
}
function GN(e) {
    Bg(e.x),
    Bg(e.y)
}
function B1(e, t, n) {
    return e === "position" || e === "preserve-aspect" && !yN(Ag(t), Ag(n), .2)
}
function QN(e) {
    var t;
    return e !== e.root && ((t = e.scroll) == null ? void 0 : t.wasRoot)
}
const YN = $1({
    attachResizeListener: (e, t) => Eo(e, "resize", t),
    measureScroll: () => {
        var e, t;
        return {
            x: document.documentElement.scrollLeft || ((e = document.body) == null ? void 0 : e.scrollLeft) || 0,
            y: document.documentElement.scrollTop || ((t = document.body) == null ? void 0 : t.scrollTop) || 0
        }
    }
    ,
    checkIsScrollRoot: () => !0
})
  , sc = {
    current: void 0
}
  , U1 = $1({
    measureScroll: e => ({
        x: e.scrollLeft,
        y: e.scrollTop
    }),
    defaultParent: () => {
        if (!sc.current) {
            const e = new YN({});
            e.mount(window),
            e.setOptions({
                layoutScroll: !0
            }),
            sc.current = e
        }
        return sc.current
    }
    ,
    resetTransform: (e, t) => {
        e.style.transform = t !== void 0 ? t : "none"
    }
    ,
    checkIsScrollRoot: e => window.getComputedStyle(e).position === "fixed"
})
  , W1 = w.createContext({
    transformPagePoint: e => e,
    isStatic: !1,
    reducedMotion: "never"
});
function XN(e=!0) {
    const t = w.useContext(uh);
    if (t === null)
        return [!0, null];
    const {isPresent: n, onExitComplete: r, register: i} = t
      , s = w.useId();
    w.useEffect( () => {
        if (e)
            return i(s)
    }
    , [e]);
    const o = w.useCallback( () => e && r && r(s), [s, r, e]);
    return !n && r ? [!1, o] : [!0]
}
const H1 = w.createContext({
    strict: !1
})
  , Ug = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
};
let Wg = !1;
function qN() {
    if (Wg)
        return;
    const e = {};
    for (const t in Ug)
        e[t] = {
            isEnabled: n => Ug[t].some(r => !!n[r])
        };
    w1(e),
    Wg = !0
}
function K1() {
    return qN(),
    UA()
}
function JN(e) {
    const t = K1();
    for (const n in e)
        t[n] = {
            ...t[n],
            ...e[n]
        };
    w1(t)
}
const eM = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "propagate", "ignoreStrict", "viewport"]);
function Tl(e) {
    return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || eM.has(e)
}
let Z1 = e => !Tl(e);
function tM(e) {
    typeof e == "function" && (Z1 = t => t.startsWith("on") ? !Tl(t) : e(t))
}
try {
    tM(require("@emotion/is-prop-valid").default)
} catch {}
function nM(e, t, n) {
    const r = {};
    for (const i in e)
        i === "values" && typeof e.values == "object" || (Z1(i) || n === !0 && Tl(i) || !t && !Tl(i) || e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
    return r
}
const uu = w.createContext({});
function rM(e, t) {
    if (lu(e)) {
        const {initial: n, animate: r} = e;
        return {
            initial: n === !1 || To(n) ? n : void 0,
            animate: To(r) ? r : void 0
        }
    }
    return e.inherit !== !1 ? t : {}
}
function iM(e) {
    const {initial: t, animate: n} = rM(e, w.useContext(uu));
    return w.useMemo( () => ({
        initial: t,
        animate: n
    }), [Hg(t), Hg(n)])
}
function Hg(e) {
    return Array.isArray(e) ? e.join(" ") : e
}
const Ih = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
});
function G1(e, t, n) {
    for (const r in t)
        !Ze(t[r]) && !P1(r, n) && (e[r] = t[r])
}
function sM({transformTemplate: e}, t) {
    return w.useMemo( () => {
        const n = Ih();
        return Dh(n, t, e),
        Object.assign({}, n.vars, n.style)
    }
    , [t])
}
function oM(e, t) {
    const n = e.style || {}
      , r = {};
    return G1(r, n, e),
    Object.assign(r, sM(e, t)),
    r
}
function aM(e, t) {
    const n = {}
      , r = oM(e, t);
    return e.drag && e.dragListener !== !1 && (n.draggable = !1,
    r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none",
    r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`),
    e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0),
    n.style = r,
    n
}
const Q1 = () => ({
    ...Ih(),
    attrs: {}
});
function lM(e, t, n, r) {
    const i = w.useMemo( () => {
        const s = Q1();
        return _1(s, t, A1(r), e.transformTemplate, e.style),
        {
            ...s.attrs,
            style: {
                ...s.style
            }
        }
    }
    , [t]);
    if (e.style) {
        const s = {};
        G1(s, e.style, e),
        i.style = {
            ...s,
            ...i.style
        }
    }
    return i
}
const uM = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function Vh(e) {
    return typeof e != "string" || e.includes("-") ? !1 : !!(uM.indexOf(e) > -1 || /[A-Z]/u.test(e))
}
function cM(e, t, n, {latestValues: r}, i, s=!1, o) {
    const l = (o ?? Vh(e) ? lM : aM)(t, r, i, e)
      , u = nM(t, typeof e == "string", s)
      , c = e !== w.Fragment ? {
        ...u,
        ...l,
        ref: n
    } : {}
      , {children: d} = t
      , f = w.useMemo( () => Ze(d) ? d.get() : d, [d]);
    return w.createElement(e, {
        ...c,
        children: f
    })
}
function dM({scrapeMotionValuesFromProps: e, createRenderState: t}, n, r, i) {
    return {
        latestValues: fM(n, r, i, e),
        renderState: t()
    }
}
function fM(e, t, n, r) {
    const i = {}
      , s = r(e, {});
    for (const f in s)
        i[f] = Fa(s[f]);
    let {initial: o, animate: a} = e;
    const l = lu(e)
      , u = v1(e);
    t && u && !l && e.inherit !== !1 && (o === void 0 && (o = t.initial),
    a === void 0 && (a = t.animate));
    let c = n ? n.initial === !1 : !1;
    c = c || o === !1;
    const d = c ? a : o;
    if (d && typeof d != "boolean" && !au(d)) {
        const f = Array.isArray(d) ? d : [d];
        for (let h = 0; h < f.length; h++) {
            const v = Eh(e, f[h]);
            if (v) {
                const {transitionEnd: g, transition: x, ...m} = v;
                for (const p in m) {
                    let y = m[p];
                    if (Array.isArray(y)) {
                        const b = c ? y.length - 1 : 0;
                        y = y[b]
                    }
                    y !== null && (i[p] = y)
                }
                for (const p in g)
                    i[p] = g[p]
            }
        }
    }
    return i
}
const Y1 = e => (t, n) => {
    const r = w.useContext(uu)
      , i = w.useContext(uh)
      , s = () => dM(e, t, r, i);
    return n ? s() : p2(s)
}
  , hM = Y1({
    scrapeMotionValuesFromProps: Lh,
    createRenderState: Ih
})
  , pM = Y1({
    scrapeMotionValuesFromProps: N1,
    createRenderState: Q1
})
  , mM = Symbol.for("motionComponentSymbol");
function gM(e, t, n) {
    const r = w.useRef(n);
    w.useInsertionEffect( () => {
        r.current = n
    }
    );
    const i = w.useRef(null);
    return w.useCallback(s => {
        var a;
        s && ((a = e.onMount) == null || a.call(e, s)),
        t && (s ? t.mount(s) : t.unmount());
        const o = r.current;
        if (typeof o == "function")
            if (s) {
                const l = o(s);
                typeof l == "function" && (i.current = l)
            } else
                i.current ? (i.current(),
                i.current = null) : o(s);
        else
            o && (o.current = s)
    }
    , [t])
}
const X1 = w.createContext({});
function pi(e) {
    return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
}
function yM(e, t, n, r, i, s) {
    var y, b;
    const {visualElement: o} = w.useContext(uu)
      , a = w.useContext(H1)
      , l = w.useContext(uh)
      , u = w.useContext(W1)
      , c = u.reducedMotion
      , d = u.skipAnimations
      , f = w.useRef(null)
      , h = w.useRef(!1);
    r = r || a.renderer,
    !f.current && r && (f.current = r(e, {
        visualState: t,
        parent: o,
        props: n,
        presenceContext: l,
        blockInitialAnimation: l ? l.initial === !1 : !1,
        reducedMotionConfig: c,
        skipAnimations: d,
        isSVG: s
    }),
    h.current && f.current && (f.current.manuallyAnimateOnMount = !0));
    const v = f.current
      , g = w.useContext(X1);
    v && !v.projection && i && (v.type === "html" || v.type === "svg") && vM(f.current, n, i, g);
    const x = w.useRef(!1);
    w.useInsertionEffect( () => {
        v && x.current && v.update(n, l)
    }
    );
    const m = n[o1]
      , p = w.useRef(!!m && !((y = window.MotionHandoffIsComplete) != null && y.call(window, m)) && ((b = window.MotionHasOptimisedAnimation) == null ? void 0 : b.call(window, m)));
    return m2( () => {
        h.current = !0,
        v && (x.current = !0,
        window.MotionIsMounted = !0,
        v.updateFeatures(),
        v.scheduleRenderMicrotask(),
        p.current && v.animationState && v.animationState.animateChanges())
    }
    ),
    w.useEffect( () => {
        v && (!p.current && v.animationState && v.animationState.animateChanges(),
        p.current && (queueMicrotask( () => {
            var C;
            (C = window.MotionHandoffMarkAsComplete) == null || C.call(window, m)
        }
        ),
        p.current = !1),
        v.enteringChildren = void 0)
    }
    ),
    v
}
function vM(e, t, n, r) {
    const {layoutId: i, layout: s, drag: o, dragConstraints: a, layoutScroll: l, layoutRoot: u, layoutCrossfade: c} = t;
    e.projection = new n(e.latestValues,t["data-framer-portal-id"] ? void 0 : q1(e.parent)),
    e.projection.setOptions({
        layoutId: i,
        layout: s,
        alwaysMeasureLayout: !!o || a && pi(a),
        visualElement: e,
        animationType: typeof s == "string" ? s : "both",
        initialPromotionConfig: r,
        crossfade: c,
        layoutScroll: l,
        layoutRoot: u
    })
}
function q1(e) {
    if (e)
        return e.options.allowProjection !== !1 ? e.projection : q1(e.parent)
}
function oc(e, {forwardMotionProps: t=!1, type: n}={}, r, i) {
    r && JN(r);
    const s = n ? n === "svg" : Vh(e)
      , o = s ? pM : hM;
    function a(u, c) {
        let d;
        const f = {
            ...w.useContext(W1),
            ...u,
            layoutId: xM(u)
        }
          , {isStatic: h} = f
          , v = iM(u)
          , g = o(u, h);
        if (!h && Sw) {
            wM();
            const x = SM(f);
            d = x.MeasureLayout,
            v.visualElement = yM(e, g, f, i, x.ProjectionNode, s)
        }
        return S.jsxs(uu.Provider, {
            value: v,
            children: [d && v.visualElement ? S.jsx(d, {
                visualElement: v.visualElement,
                ...f
            }) : null, cM(e, u, gM(g, v.visualElement, c), g, h, t, s)]
        })
    }
    a.displayName = `motion.${typeof e == "string" ? e : `create(${e.displayName ?? e.name ?? ""})`}`;
    const l = w.forwardRef(a);
    return l[mM] = e,
    l
}
function xM({layoutId: e}) {
    const t = w.useContext(ww).id;
    return t && e !== void 0 ? t + "-" + e : e
}
function wM(e, t) {
    w.useContext(H1).strict
}
function SM(e) {
    const t = K1()
      , {drag: n, layout: r} = t;
    if (!n && !r)
        return {};
    const i = {
        ...n,
        ...r
    };
    return {
        MeasureLayout: n != null && n.isEnabled(e) || r != null && r.isEnabled(e) ? i.MeasureLayout : void 0,
        ProjectionNode: i.ProjectionNode
    }
}
function bM(e, t) {
    if (typeof Proxy > "u")
        return oc;
    const n = new Map
      , r = (s, o) => oc(s, o, e, t)
      , i = (s, o) => r(s, o);
    return new Proxy(i,{
        get: (s, o) => o === "create" ? r : (n.has(o) || n.set(o, oc(o, void 0, e, t)),
        n.get(o))
    })
}
const CM = (e, t) => t.isSVG ?? Vh(e) ? new oN(t) : new eN(t,{
    allowProjection: e !== w.Fragment
});
class kM extends _r {
    constructor(t) {
        super(t),
        t.animationState || (t.animationState = dN(t))
    }
    updateAnimationControlsSubscription() {
        const {animate: t} = this.node.getProps();
        au(t) && (this.unmountControls = t.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {animate: t} = this.node.getProps()
          , {animate: n} = this.node.prevProps || {};
        t !== n && this.updateAnimationControlsSubscription()
    }
    unmount() {
        var t;
        this.node.animationState.reset(),
        (t = this.unmountControls) == null || t.call(this)
    }
}
let TM = 0;
class EM extends _r {
    constructor() {
        super(...arguments),
        this.id = TM++
    }
    update() {
        if (!this.node.presenceContext)
            return;
        const {isPresent: t, onExitComplete: n} = this.node.presenceContext
          , {isPresent: r} = this.node.prevPresenceContext || {};
        if (!this.node.animationState || t === r)
            return;
        const i = this.node.animationState.setActive("exit", !t);
        n && !t && i.then( () => {
            n(this.id)
        }
        )
    }
    mount() {
        const {register: t, onExitComplete: n} = this.node.presenceContext || {};
        n && n(this.id),
        t && (this.unmount = t(this.id))
    }
    unmount() {}
}
const PM = {
    animation: {
        Feature: kM
    },
    exit: {
        Feature: EM
    }
};
function Uo(e) {
    return {
        point: {
            x: e.pageX,
            y: e.pageY
        }
    }
}
const _M = e => t => Nh(t) && e(t, Uo(t));
function Js(e, t, n, r) {
    return Eo(e, t, _M(n), r)
}
const J1 = ({current: e}) => e ? e.ownerDocument.defaultView : null
  , Kg = (e, t) => Math.abs(e - t);
function RM(e, t) {
    const n = Kg(e.x, t.x)
      , r = Kg(e.y, t.y);
    return Math.sqrt(n ** 2 + r ** 2)
}
const Zg = new Set(["auto", "scroll"]);
class eS {
    constructor(t, n, {transformPagePoint: r, contextWindow: i=window, dragSnapToOrigin: s=!1, distanceThreshold: o=3, element: a}={}) {
        if (this.startEvent = null,
        this.lastMoveEvent = null,
        this.lastMoveEventInfo = null,
        this.handlers = {},
        this.contextWindow = window,
        this.scrollPositions = new Map,
        this.removeScrollListeners = null,
        this.onElementScroll = h => {
            this.handleScroll(h.target)
        }
        ,
        this.onWindowScroll = () => {
            this.handleScroll(window)
        }
        ,
        this.updatePoint = () => {
            if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const h = lc(this.lastMoveEventInfo, this.history)
              , v = this.startEvent !== null
              , g = RM(h.offset, {
                x: 0,
                y: 0
            }) >= this.distanceThreshold;
            if (!v && !g)
                return;
            const {point: x} = h
              , {timestamp: m} = Ve;
            this.history.push({
                ...x,
                timestamp: m
            });
            const {onStart: p, onMove: y} = this.handlers;
            v || (p && p(this.lastMoveEvent, h),
            this.startEvent = this.lastMoveEvent),
            y && y(this.lastMoveEvent, h)
        }
        ,
        this.handlePointerMove = (h, v) => {
            this.lastMoveEvent = h,
            this.lastMoveEventInfo = ac(v, this.transformPagePoint),
            he.update(this.updatePoint, !0)
        }
        ,
        this.handlePointerUp = (h, v) => {
            this.end();
            const {onEnd: g, onSessionEnd: x, resumeAnimation: m} = this.handlers;
            if ((this.dragSnapToOrigin || !this.startEvent) && m && m(),
            !(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const p = lc(h.type === "pointercancel" ? this.lastMoveEventInfo : ac(v, this.transformPagePoint), this.history);
            this.startEvent && g && g(h, p),
            x && x(h, p)
        }
        ,
        !Nh(t))
            return;
        this.dragSnapToOrigin = s,
        this.handlers = n,
        this.transformPagePoint = r,
        this.distanceThreshold = o,
        this.contextWindow = i || window;
        const l = Uo(t)
          , u = ac(l, this.transformPagePoint)
          , {point: c} = u
          , {timestamp: d} = Ve;
        this.history = [{
            ...c,
            timestamp: d
        }];
        const {onSessionStart: f} = n;
        f && f(t, lc(u, this.history)),
        this.removeListeners = zo(Js(this.contextWindow, "pointermove", this.handlePointerMove), Js(this.contextWindow, "pointerup", this.handlePointerUp), Js(this.contextWindow, "pointercancel", this.handlePointerUp)),
        a && this.startScrollTracking(a)
    }
    startScrollTracking(t) {
        let n = t.parentElement;
        for (; n; ) {
            const r = getComputedStyle(n);
            (Zg.has(r.overflowX) || Zg.has(r.overflowY)) && this.scrollPositions.set(n, {
                x: n.scrollLeft,
                y: n.scrollTop
            }),
            n = n.parentElement
        }
        this.scrollPositions.set(window, {
            x: window.scrollX,
            y: window.scrollY
        }),
        window.addEventListener("scroll", this.onElementScroll, {
            capture: !0,
            passive: !0
        }),
        window.addEventListener("scroll", this.onWindowScroll, {
            passive: !0
        }),
        this.removeScrollListeners = () => {
            window.removeEventListener("scroll", this.onElementScroll, {
                capture: !0
            }),
            window.removeEventListener("scroll", this.onWindowScroll)
        }
    }
    handleScroll(t) {
        const n = this.scrollPositions.get(t);
        if (!n)
            return;
        const r = t === window
          , i = r ? {
            x: window.scrollX,
            y: window.scrollY
        } : {
            x: t.scrollLeft,
            y: t.scrollTop
        }
          , s = {
            x: i.x - n.x,
            y: i.y - n.y
        };
        s.x === 0 && s.y === 0 || (r ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += s.x,
        this.lastMoveEventInfo.point.y += s.y) : this.history.length > 0 && (this.history[0].x -= s.x,
        this.history[0].y -= s.y),
        this.scrollPositions.set(t, i),
        he.update(this.updatePoint, !0))
    }
    updateHandlers(t) {
        this.handlers = t
    }
    end() {
        this.removeListeners && this.removeListeners(),
        this.removeScrollListeners && this.removeScrollListeners(),
        this.scrollPositions.clear(),
        Sr(this.updatePoint)
    }
}
function ac(e, t) {
    return t ? {
        point: t(e.point)
    } : e
}
function Gg(e, t) {
    return {
        x: e.x - t.x,
        y: e.y - t.y
    }
}
function lc({point: e}, t) {
    return {
        point: e,
        delta: Gg(e, tS(t)),
        offset: Gg(e, AM(t)),
        velocity: NM(t, .1)
    }
}
function AM(e) {
    return e[0]
}
function tS(e) {
    return e[e.length - 1]
}
function NM(e, t) {
    if (e.length < 2)
        return {
            x: 0,
            y: 0
        };
    let n = e.length - 1
      , r = null;
    const i = tS(e);
    for (; n >= 0 && (r = e[n],
    !(i.timestamp - r.timestamp > At(t))); )
        n--;
    if (!r)
        return {
            x: 0,
            y: 0
        };
    r === e[0] && e.length > 2 && i.timestamp - r.timestamp > At(t) * 2 && (r = e[1]);
    const s = Pt(i.timestamp - r.timestamp);
    if (s === 0)
        return {
            x: 0,
            y: 0
        };
    const o = {
        x: (i.x - r.x) / s,
        y: (i.y - r.y) / s
    };
    return o.x === 1 / 0 && (o.x = 0),
    o.y === 1 / 0 && (o.y = 0),
    o
}
function MM(e, {min: t, max: n}, r) {
    return t !== void 0 && e < t ? e = r ? Se(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? Se(n, e, r.max) : Math.min(e, n)),
    e
}
function Qg(e, t, n) {
    return {
        min: t !== void 0 ? e.min + t : void 0,
        max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
    }
}
function jM(e, {top: t, left: n, bottom: r, right: i}) {
    return {
        x: Qg(e.x, n, i),
        y: Qg(e.y, t, r)
    }
}
function Yg(e, t) {
    let n = t.min - e.min
      , r = t.max - e.max;
    return t.max - t.min < e.max - e.min && ([n,r] = [r, n]),
    {
        min: n,
        max: r
    }
}
function OM(e, t) {
    return {
        x: Yg(e.x, t.x),
        y: Yg(e.y, t.y)
    }
}
function DM(e, t) {
    let n = .5;
    const r = tt(e)
      , i = tt(t);
    return i > r ? n = bo(t.min, t.max - r, e.min) : r > i && (n = bo(e.min, e.max - i, t.min)),
    pn(0, 1, n)
}
function LM(e, t) {
    const n = {};
    return t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
}
const Bd = .35;
function IM(e=Bd) {
    return e === !1 ? e = 0 : e === !0 && (e = Bd),
    {
        x: Xg(e, "left", "right"),
        y: Xg(e, "top", "bottom")
    }
}
function Xg(e, t, n) {
    return {
        min: qg(e, t),
        max: qg(e, n)
    }
}
function qg(e, t) {
    return typeof e == "number" ? e : e[t] || 0
}
const VM = new WeakMap;
class FM {
    constructor(t) {
        this.openDragLock = null,
        this.isDragging = !1,
        this.currentDirection = null,
        this.originPoint = {
            x: 0,
            y: 0
        },
        this.constraints = !1,
        this.hasMutatedConstraints = !1,
        this.elastic = Ne(),
        this.latestPointerEvent = null,
        this.latestPanInfo = null,
        this.visualElement = t
    }
    start(t, {snapToCursor: n=!1, distanceThreshold: r}={}) {
        const {presenceContext: i} = this.visualElement;
        if (i && i.isPresent === !1)
            return;
        const s = d => {
            n && this.snapToCursor(Uo(d).point),
            this.stopAnimation()
        }
          , o = (d, f) => {
            const {drag: h, dragPropagation: v, onDragStart: g} = this.getProps();
            if (h && !v && (this.openDragLock && this.openDragLock(),
            this.openDragLock = xA(h),
            !this.openDragLock))
                return;
            this.latestPointerEvent = d,
            this.latestPanInfo = f,
            this.isDragging = !0,
            this.currentDirection = null,
            this.resolveConstraints(),
            this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
            this.visualElement.projection.target = void 0),
            tn(m => {
                let p = this.getAxisMotionValue(m).get() || 0;
                if (dn.test(p)) {
                    const {projection: y} = this.visualElement;
                    if (y && y.layout) {
                        const b = y.layout.layoutBox[m];
                        b && (p = tt(b) * (parseFloat(p) / 100))
                    }
                }
                this.originPoint[m] = p
            }
            ),
            g && he.update( () => g(d, f), !1, !0),
            Dd(this.visualElement, "transform");
            const {animationState: x} = this.visualElement;
            x && x.setActive("whileDrag", !0)
        }
          , a = (d, f) => {
            this.latestPointerEvent = d,
            this.latestPanInfo = f;
            const {dragPropagation: h, dragDirectionLock: v, onDirectionLock: g, onDrag: x} = this.getProps();
            if (!h && !this.openDragLock)
                return;
            const {offset: m} = f;
            if (v && this.currentDirection === null) {
                this.currentDirection = $M(m),
                this.currentDirection !== null && g && g(this.currentDirection);
                return
            }
            this.updateAxis("x", f.point, m),
            this.updateAxis("y", f.point, m),
            this.visualElement.render(),
            x && he.update( () => x(d, f), !1, !0)
        }
          , l = (d, f) => {
            this.latestPointerEvent = d,
            this.latestPanInfo = f,
            this.stop(d, f),
            this.latestPointerEvent = null,
            this.latestPanInfo = null
        }
          , u = () => {
            const {dragSnapToOrigin: d} = this.getProps();
            (d || this.constraints) && this.startAnimation({
                x: 0,
                y: 0
            })
        }
          , {dragSnapToOrigin: c} = this.getProps();
        this.panSession = new eS(t,{
            onSessionStart: s,
            onStart: o,
            onMove: a,
            onSessionEnd: l,
            resumeAnimation: u
        },{
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: c,
            distanceThreshold: r,
            contextWindow: J1(this.visualElement),
            element: this.visualElement.current
        })
    }
    stop(t, n) {
        const r = t || this.latestPointerEvent
          , i = n || this.latestPanInfo
          , s = this.isDragging;
        if (this.cancel(),
        !s || !i || !r)
            return;
        const {velocity: o} = i;
        this.startAnimation(o);
        const {onDragEnd: a} = this.getProps();
        a && he.postRender( () => a(r, i))
    }
    cancel() {
        this.isDragging = !1;
        const {projection: t, animationState: n} = this.visualElement;
        t && (t.isAnimationBlocked = !1),
        this.endPanSession();
        const {dragPropagation: r} = this.getProps();
        !r && this.openDragLock && (this.openDragLock(),
        this.openDragLock = null),
        n && n.setActive("whileDrag", !1)
    }
    endPanSession() {
        this.panSession && this.panSession.end(),
        this.panSession = void 0
    }
    updateAxis(t, n, r) {
        const {drag: i} = this.getProps();
        if (!r || !va(t, i, this.currentDirection))
            return;
        const s = this.getAxisMotionValue(t);
        let o = this.originPoint[t] + r[t];
        this.constraints && this.constraints[t] && (o = MM(o, this.constraints[t], this.elastic[t])),
        s.set(o)
    }
    resolveConstraints() {
        var s;
        const {dragConstraints: t, dragElastic: n} = this.getProps()
          , r = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (s = this.visualElement.projection) == null ? void 0 : s.layout
          , i = this.constraints;
        t && pi(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && r ? this.constraints = jM(r.layoutBox, t) : this.constraints = !1,
        this.elastic = IM(n),
        i !== this.constraints && !pi(t) && r && this.constraints && !this.hasMutatedConstraints && tn(o => {
            this.constraints !== !1 && this.getAxisMotionValue(o) && (this.constraints[o] = LM(r.layoutBox[o], this.constraints[o]))
        }
        )
    }
    resolveRefConstraints() {
        const {dragConstraints: t, onMeasureDragConstraints: n} = this.getProps();
        if (!t || !pi(t))
            return !1;
        const r = t.current;
        os(r !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.", "drag-constraints-ref");
        const {projection: i} = this.visualElement;
        if (!i || !i.layout)
            return !1;
        const s = GA(r, i.root, this.visualElement.getTransformPagePoint());
        let o = OM(i.layout.layoutBox, s);
        if (n) {
            const a = n(HA(o));
            this.hasMutatedConstraints = !!a,
            a && (o = b1(a))
        }
        return o
    }
    startAnimation(t) {
        const {drag: n, dragMomentum: r, dragElastic: i, dragTransition: s, dragSnapToOrigin: o, onDragTransitionEnd: a} = this.getProps()
          , l = this.constraints || {}
          , u = tn(c => {
            if (!va(c, n, this.currentDirection))
                return;
            let d = l && l[c] || {};
            o && (d = {
                min: 0,
                max: 0
            });
            const f = i ? 200 : 1e6
              , h = i ? 40 : 1e7
              , v = {
                type: "inertia",
                velocity: r ? t[c] : 0,
                bounceStiffness: f,
                bounceDamping: h,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...s,
                ...d
            };
            return this.startAxisValueAnimation(c, v)
        }
        );
        return Promise.all(u).then(a)
    }
    startAxisValueAnimation(t, n) {
        const r = this.getAxisMotionValue(t);
        return Dd(this.visualElement, t),
        r.start(Th(t, r, 0, n, this.visualElement, !1))
    }
    stopAnimation() {
        tn(t => this.getAxisMotionValue(t).stop())
    }
    getAxisMotionValue(t) {
        const n = `_drag${t.toUpperCase()}`
          , r = this.visualElement.getProps()
          , i = r[n];
        return i || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    }
    snapToCursor(t) {
        tn(n => {
            const {drag: r} = this.getProps();
            if (!va(n, r, this.currentDirection))
                return;
            const {projection: i} = this.visualElement
              , s = this.getAxisMotionValue(n);
            if (i && i.layout) {
                const {min: o, max: a} = i.layout.layoutBox[n]
                  , l = s.get() || 0;
                s.set(t[n] - Se(o, a, .5) + l)
            }
        }
        )
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current)
            return;
        const {drag: t, dragConstraints: n} = this.getProps()
          , {projection: r} = this.visualElement;
        if (!pi(n) || !r || !this.constraints)
            return;
        this.stopAnimation();
        const i = {
            x: 0,
            y: 0
        };
        tn(o => {
            const a = this.getAxisMotionValue(o);
            if (a && this.constraints !== !1) {
                const l = a.get();
                i[o] = DM({
                    min: l,
                    max: l
                }, this.constraints[o])
            }
        }
        );
        const {transformTemplate: s} = this.visualElement.getProps();
        this.visualElement.current.style.transform = s ? s({}, "") : "none",
        r.root && r.root.updateScroll(),
        r.updateLayout(),
        this.constraints = !1,
        this.resolveConstraints(),
        tn(o => {
            if (!va(o, t, null))
                return;
            const a = this.getAxisMotionValue(o)
              , {min: l, max: u} = this.constraints[o];
            a.set(Se(l, u, i[o]))
        }
        ),
        this.visualElement.render()
    }
    addListeners() {
        if (!this.visualElement.current)
            return;
        VM.set(this.visualElement, this);
        const t = this.visualElement.current
          , n = Js(t, "pointerdown", u => {
            const {drag: c, dragListener: d=!0} = this.getProps()
              , f = u.target
              , h = f !== t && TA(f);
            c && d && !h && this.start(u)
        }
        );
        let r;
        const i = () => {
            const {dragConstraints: u} = this.getProps();
            pi(u) && u.current && (this.constraints = this.resolveRefConstraints(),
            r || (r = zM(t, u.current, () => this.scalePositionWithinConstraints())))
        }
          , {projection: s} = this.visualElement
          , o = s.addEventListener("measure", i);
        s && !s.layout && (s.root && s.root.updateScroll(),
        s.updateLayout()),
        he.read(i);
        const a = Eo(window, "resize", () => this.scalePositionWithinConstraints())
          , l = s.addEventListener("didUpdate", ({delta: u, hasLayoutChanged: c}) => {
            this.isDragging && c && (tn(d => {
                const f = this.getAxisMotionValue(d);
                f && (this.originPoint[d] += u[d].translate,
                f.set(f.get() + u[d].translate))
            }
            ),
            this.visualElement.render())
        }
        );
        return () => {
            a(),
            n(),
            o(),
            l && l(),
            r && r()
        }
    }
    getProps() {
        const t = this.visualElement.getProps()
          , {drag: n=!1, dragDirectionLock: r=!1, dragPropagation: i=!1, dragConstraints: s=!1, dragElastic: o=Bd, dragMomentum: a=!0} = t;
        return {
            ...t,
            drag: n,
            dragDirectionLock: r,
            dragPropagation: i,
            dragConstraints: s,
            dragElastic: o,
            dragMomentum: a
        }
    }
}
function Jg(e) {
    let t = !0;
    return () => {
        if (t) {
            t = !1;
            return
        }
        e()
    }
}
function zM(e, t, n) {
    const r = lg(e, Jg(n))
      , i = lg(t, Jg(n));
    return () => {
        r(),
        i()
    }
}
function va(e, t, n) {
    return (t === !0 || t === e) && (n === null || n === e)
}
function $M(e, t=10) {
    let n = null;
    return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"),
    n
}
class BM extends _r {
    constructor(t) {
        super(t),
        this.removeGroupControls = Rt,
        this.removeListeners = Rt,
        this.controls = new FM(t)
    }
    mount() {
        const {dragControls: t} = this.node.getProps();
        t && (this.removeGroupControls = t.subscribe(this.controls)),
        this.removeListeners = this.controls.addListeners() || Rt
    }
    update() {
        const {dragControls: t} = this.node.getProps()
          , {dragControls: n} = this.node.prevProps || {};
        t !== n && (this.removeGroupControls(),
        t && (this.removeGroupControls = t.subscribe(this.controls)))
    }
    unmount() {
        this.removeGroupControls(),
        this.removeListeners(),
        this.controls.isDragging || this.controls.endPanSession()
    }
}
const uc = e => (t, n) => {
    e && he.update( () => e(t, n), !1, !0)
}
;
class UM extends _r {
    constructor() {
        super(...arguments),
        this.removePointerDownListener = Rt
    }
    onPointerDown(t) {
        this.session = new eS(t,this.createPanHandlers(),{
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: J1(this.node)
        })
    }
    createPanHandlers() {
        const {onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: i} = this.node.getProps();
        return {
            onSessionStart: uc(t),
            onStart: uc(n),
            onMove: uc(r),
            onEnd: (s, o) => {
                delete this.session,
                i && he.postRender( () => i(s, o))
            }
        }
    }
    mount() {
        this.removePointerDownListener = Js(this.node.current, "pointerdown", t => this.onPointerDown(t))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(),
        this.session && this.session.end()
    }
}
let cc = !1;
class WM extends w.Component {
    componentDidMount() {
        const {visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: i} = this.props
          , {projection: s} = t;
        s && (n.group && n.group.add(s),
        r && r.register && i && r.register(s),
        cc && s.root.didUpdate(),
        s.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }
        ),
        s.setOptions({
            ...s.options,
            layoutDependency: this.props.layoutDependency,
            onExitComplete: () => this.safeToRemove()
        })),
        za.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(t) {
        const {layoutDependency: n, visualElement: r, drag: i, isPresent: s} = this.props
          , {projection: o} = r;
        return o && (o.isPresent = s,
        t.layoutDependency !== n && o.setOptions({
            ...o.options,
            layoutDependency: n
        }),
        cc = !0,
        i || t.layoutDependency !== n || n === void 0 || t.isPresent !== s ? o.willUpdate() : this.safeToRemove(),
        t.isPresent !== s && (s ? o.promote() : o.relegate() || he.postRender( () => {
            const a = o.getStack();
            (!a || !a.members.length) && this.safeToRemove()
        }
        ))),
        null
    }
    componentDidUpdate() {
        const {projection: t} = this.props.visualElement;
        t && (t.root.didUpdate(),
        Ah.postRender( () => {
            !t.currentAnimation && t.isLead() && this.safeToRemove()
        }
        ))
    }
    componentWillUnmount() {
        const {visualElement: t, layoutGroup: n, switchLayoutGroup: r} = this.props
          , {projection: i} = t;
        cc = !0,
        i && (i.scheduleCheckAfterUnmount(),
        n && n.group && n.group.remove(i),
        r && r.deregister && r.deregister(i))
    }
    safeToRemove() {
        const {safeToRemove: t} = this.props;
        t && t()
    }
    render() {
        return null
    }
}
function nS(e) {
    const [t,n] = XN()
      , r = w.useContext(ww);
    return S.jsx(WM, {
        ...e,
        layoutGroup: r,
        switchLayoutGroup: w.useContext(X1),
        isPresent: t,
        safeToRemove: n
    })
}
const HM = {
    pan: {
        Feature: UM
    },
    drag: {
        Feature: BM,
        ProjectionNode: U1,
        MeasureLayout: nS
    }
};
function ey(e, t, n) {
    const {props: r} = e;
    e.animationState && r.whileHover && e.animationState.setActive("whileHover", n === "Start");
    const i = "onHover" + n
      , s = r[i];
    s && he.postRender( () => s(t, Uo(t)))
}
class KM extends _r {
    mount() {
        const {current: t} = this.node;
        t && (this.unmount = SA(t, (n, r) => (ey(this.node, r, "Start"),
        i => ey(this.node, i, "End"))))
    }
    unmount() {}
}
class ZM extends _r {
    constructor() {
        super(...arguments),
        this.isActive = !1
    }
    onFocus() {
        let t = !1;
        try {
            t = this.node.current.matches(":focus-visible")
        } catch {
            t = !0
        }
        !t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0),
        this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1),
        this.isActive = !1)
    }
    mount() {
        this.unmount = zo(Eo(this.node.current, "focus", () => this.onFocus()), Eo(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}
function ty(e, t, n) {
    const {props: r} = e;
    if (e.current instanceof HTMLButtonElement && e.current.disabled)
        return;
    e.animationState && r.whileTap && e.animationState.setActive("whileTap", n === "Start");
    const i = "onTap" + (n === "End" ? "" : n)
      , s = r[i];
    s && he.postRender( () => s(t, Uo(t)))
}
class GM extends _r {
    mount() {
        const {current: t} = this.node;
        if (!t)
            return;
        const {globalTapTarget: n, propagate: r} = this.node.props;
        this.unmount = PA(t, (i, s) => (ty(this.node, s, "Start"),
        (o, {success: a}) => ty(this.node, o, a ? "End" : "Cancel")), {
            useGlobalTarget: n,
            stopPropagation: (r == null ? void 0 : r.tap) === !1
        })
    }
    unmount() {}
}
const Ud = new WeakMap
  , dc = new WeakMap
  , QM = e => {
    const t = Ud.get(e.target);
    t && t(e)
}
  , YM = e => {
    e.forEach(QM)
}
;
function XM({root: e, ...t}) {
    const n = e || document;
    dc.has(n) || dc.set(n, {});
    const r = dc.get(n)
      , i = JSON.stringify(t);
    return r[i] || (r[i] = new IntersectionObserver(YM,{
        root: e,
        ...t
    })),
    r[i]
}
function qM(e, t, n) {
    const r = XM(t);
    return Ud.set(e, n),
    r.observe(e),
    () => {
        Ud.delete(e),
        r.unobserve(e)
    }
}
const JM = {
    some: 0,
    all: 1
};
class ej extends _r {
    constructor() {
        super(...arguments),
        this.hasEnteredView = !1,
        this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {viewport: t={}} = this.node.getProps()
          , {root: n, margin: r, amount: i="some", once: s} = t
          , o = {
            root: n ? n.current : void 0,
            rootMargin: r,
            threshold: typeof i == "number" ? i : JM[i]
        }
          , a = l => {
            const {isIntersecting: u} = l;
            if (this.isInView === u || (this.isInView = u,
            s && !u && this.hasEnteredView))
                return;
            u && (this.hasEnteredView = !0),
            this.node.animationState && this.node.animationState.setActive("whileInView", u);
            const {onViewportEnter: c, onViewportLeave: d} = this.node.getProps()
              , f = u ? c : d;
            f && f(l)
        }
        ;
        return qM(this.node.current, o, a)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u")
            return;
        const {props: t, prevProps: n} = this.node;
        ["amount", "margin", "root"].some(tj(t, n)) && this.startObserver()
    }
    unmount() {}
}
function tj({viewport: e={}}, {viewport: t={}}={}) {
    return n => e[n] !== t[n]
}
const nj = {
    inView: {
        Feature: ej
    },
    tap: {
        Feature: GM
    },
    focus: {
        Feature: ZM
    },
    hover: {
        Feature: KM
    }
}
  , rj = {
    layout: {
        ProjectionNode: U1,
        MeasureLayout: nS
    }
}
  , ij = {
    ...PM,
    ...nj,
    ...HM,
    ...rj
}
  , Je = bM(ij, CM)
  , sj = {
    some: 0,
    all: 1
};
function oj(e, t, {root: n, margin: r, amount: i="some"}={}) {
    const s = Rh(e)
      , o = new WeakMap
      , a = u => {
        u.forEach(c => {
            const d = o.get(c.target);
            if (c.isIntersecting !== !!d)
                if (c.isIntersecting) {
                    const f = t(c.target, c);
                    typeof f == "function" ? o.set(c.target, f) : l.unobserve(c.target)
                } else
                    typeof d == "function" && (d(c),
                    o.delete(c.target))
        }
        )
    }
      , l = new IntersectionObserver(a,{
        root: n,
        rootMargin: r,
        threshold: typeof i == "number" ? i : sj[i]
    });
    return s.forEach(u => l.observe(u)),
    () => l.disconnect()
}
function cu(e, {root: t, margin: n, amount: r, once: i=!1, initial: s=!1}={}) {
    const [o,a] = w.useState(s);
    return w.useEffect( () => {
        if (!e.current || i && o)
            return;
        const l = () => (a(!0),
        i ? void 0 : () => a(!1))
          , u = {
            root: t && t.current || void 0,
            margin: n,
            amount: r
        };
        return oj(e.current, l, u)
    }
    , [t, e, n, i, r]),
    o
}
const aj = "/assets/hero-bg-CcVgM-4O.jpg"
  , lj = () => S.jsxs("section", {
    className: "relative min-h-screen flex items-center justify-center overflow-hidden",
    children: [S.jsxs("div", {
        className: "absolute inset-0",
        children: [S.jsx("img", {
            src: aj,
            alt: "Abstract geometric background",
            className: "w-full h-full object-cover"
        }), S.jsx("div", {
            className: "absolute inset-0 bg-navy-deep/60"
        })]
    }), S.jsxs("div", {
        className: "relative z-10 container-narrow px-6 md:px-12 lg:px-20 text-center",
        children: [S.jsx(Je.p, {
            initial: {
                opacity: 0,
                y: 20
            },
            animate: {
                opacity: 1,
                y: 0
            },
            transition: {
                duration: .6,
                delay: .2
            },
            className: "text-gold-light text-sm font-medium tracking-widest uppercase mb-6",
            children: "Strategy · Design · Execution"
        }), S.jsxs(Je.h1, {
            initial: {
                opacity: 0,
                y: 30
            },
            animate: {
                opacity: 1,
                y: 0
            },
            transition: {
                duration: .7,
                delay: .4
            },
            className: "font-display text-4xl md:text-6xl lg:text-7xl text-primary-foreground leading-tight mb-6",
            children: ["Building brands that", S.jsx("br", {}), S.jsx("span", {
                className: "text-gold",
                children: "inspire trust"
            })]
        }), S.jsx(Je.p, {
            initial: {
                opacity: 0,
                y: 20
            },
            animate: {
                opacity: 1,
                y: 0
            },
            transition: {
                duration: .6,
                delay: .6
            },
            className: "text-primary-foreground/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light",
            children: "We craft compelling experiences that connect your vision with the people who matter most. Thoughtful strategy, refined design, flawless delivery."
        }), S.jsxs(Je.div, {
            initial: {
                opacity: 0,
                y: 20
            },
            animate: {
                opacity: 1,
                y: 0
            },
            transition: {
                duration: .6,
                delay: .8
            },
            className: "flex flex-col sm:flex-row items-center justify-center gap-4",
            children: [S.jsx("a", {
                href: "#portfolio",
                className: "inline-flex items-center px-8 py-3.5 text-sm font-medium rounded-md bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-200",
                children: "View Our Work"
            }), S.jsx("a", {
                href: "#about",
                className: "inline-flex items-center px-8 py-3.5 text-sm font-medium rounded-md border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition-all duration-200",
                children: "Learn More"
            })]
        })]
    }), S.jsx(Je.div, {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        transition: {
            delay: 1.2
        },
        className: "absolute bottom-8 left-1/2 -translate-x-1/2",
        children: S.jsx("div", {
            className: "w-5 h-8 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-1",
            children: S.jsx(Je.div, {
                animate: {
                    y: [0, 8, 0]
                },
                transition: {
                    duration: 1.5,
                    repeat: 1 / 0
                },
                className: "w-1 h-2 rounded-full bg-primary-foreground/50"
            })
        })
    })]
})
  , uj = "/assets/about-image-DPRF_6Lz.jpg"
  , cj = [{
    value: "12+",
    label: "Years of Experience"
}, {
    value: "200+",
    label: "Projects Delivered"
}, {
    value: "50+",
    label: "Global Clients"
}]
  , dj = () => {
    const e = w.useRef(null)
      , t = cu(e, {
        once: !0,
        margin: "-100px"
    });
    return S.jsx("section", {
        id: "about",
        className: "section-padding bg-background",
        ref: e,
        children: S.jsx("div", {
            className: "container-narrow",
            children: S.jsxs("div", {
                className: "grid md:grid-cols-2 gap-12 lg:gap-20 items-center",
                children: [S.jsxs(Je.div, {
                    initial: {
                        opacity: 0,
                        x: -40
                    },
                    animate: t ? {
                        opacity: 1,
                        x: 0
                    } : {},
                    transition: {
                        duration: .7
                    },
                    className: "relative",
                    children: [S.jsx("div", {
                        className: "aspect-[4/5] rounded-lg overflow-hidden",
                        children: S.jsx("img", {
                            src: uj,
                            alt: "Modern office space with natural lighting",
                            className: "w-full h-full object-cover",
                            loading: "lazy"
                        })
                    }), S.jsx("div", {
                        className: "absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 rounded-lg -z-10"
                    })]
                }), S.jsxs(Je.div, {
                    initial: {
                        opacity: 0,
                        x: 40
                    },
                    animate: t ? {
                        opacity: 1,
                        x: 0
                    } : {},
                    transition: {
                        duration: .7,
                        delay: .2
                    },
                    children: [S.jsx("p", {
                        className: "text-accent text-sm font-medium tracking-widest uppercase mb-4",
                        children: "About Us"
                    }), S.jsxs("h2", {
                        className: "font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight",
                        children: ["Precision meets", S.jsx("br", {}), "creative ambition"]
                    }), S.jsx("p", {
                        className: "text-muted-foreground leading-relaxed mb-6",
                        children: "Meridian is a design and strategy studio that partners with forward-thinking organizations to build brands, digital products, and experiences that resonate. We believe great work emerges from clarity of purpose, deep collaboration, and an unwavering commitment to craft."
                    }), S.jsx("p", {
                        className: "text-muted-foreground leading-relaxed mb-10",
                        children: "From strategic positioning to polished execution, every detail is considered. We don't just deliver projects—we build lasting partnerships rooted in trust and shared ambition."
                    }), S.jsx("div", {
                        className: "grid grid-cols-3 gap-6 border-t border-border pt-8",
                        children: cj.map(n => S.jsxs("div", {
                            children: [S.jsx("p", {
                                className: "font-display text-2xl md:text-3xl text-foreground",
                                children: n.value
                            }), S.jsx("p", {
                                className: "text-xs text-muted-foreground mt-1",
                                children: n.label
                            })]
                        }, n.label))
                    })]
                })]
            })
        })
    })
}
  , fj = [{
    icon: Zk,
    title: "Brand Strategy",
    description: "We define clear positioning, messaging, and visual identity systems that set you apart and build lasting recognition."
}, {
    icon: Jk,
    title: "Design & Identity",
    description: "From logos to complete brand systems, we create cohesive visual languages that communicate confidence and clarity."
}, {
    icon: Kk,
    title: "Digital Experiences",
    description: "Websites, platforms, and digital products engineered for performance, accessibility, and seamless user experience."
}, {
    icon: Bk,
    title: "Growth & Optimization",
    description: "Data-informed strategies to amplify reach, improve conversions, and ensure your investment delivers measurable results."
}]
  , hj = () => {
    const e = w.useRef(null)
      , t = cu(e, {
        once: !0,
        margin: "-100px"
    });
    return S.jsx("section", {
        id: "services",
        className: "section-padding bg-section-alt",
        ref: e,
        children: S.jsxs("div", {
            className: "container-narrow",
            children: [S.jsxs(Je.div, {
                initial: {
                    opacity: 0,
                    y: 30
                },
                animate: t ? {
                    opacity: 1,
                    y: 0
                } : {},
                transition: {
                    duration: .6
                },
                className: "text-center mb-16",
                children: [S.jsx("p", {
                    className: "text-accent text-sm font-medium tracking-widest uppercase mb-4",
                    children: "What We Do"
                }), S.jsx("h2", {
                    className: "font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4",
                    children: "Services built for impact"
                }), S.jsx("p", {
                    className: "text-muted-foreground max-w-xl mx-auto",
                    children: "Every engagement is tailored. We bring clarity, craft, and strategic thinking to every phase of your project."
                })]
            }), S.jsx("div", {
                className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6",
                children: fj.map( (n, r) => S.jsxs(Je.div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    animate: t ? {
                        opacity: 1,
                        y: 0
                    } : {},
                    transition: {
                        duration: .5,
                        delay: .15 * r
                    },
                    className: "group bg-card rounded-lg p-8 border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300",
                    children: [S.jsx("div", {
                        className: "w-11 h-11 rounded-md bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors duration-300",
                        children: S.jsx(n.icon, {
                            className: "w-5 h-5 text-accent"
                        })
                    }), S.jsx("h3", {
                        className: "font-display text-lg text-foreground mb-3",
                        children: n.title
                    }), S.jsx("p", {
                        className: "text-sm text-muted-foreground leading-relaxed",
                        children: n.description
                    })]
                }, n.title))
            })]
        })
    })
}
  , pj = "/assets/portfolio-1-DuT15BJO.jpg"
  , mj = "/assets/portfolio-2-DuOjmfwb.jpg"
  , gj = "/assets/portfolio-3-C-eEpzzF.jpg"
  , yj = "/assets/portfolio-4-DicZalyT.jpg"
  , hi = [{
    src: pj,
    title: "Workspace Essentials",
    category: "Product Design"
}, {
    src: mj,
    title: "Digital Platform",
    category: "Web Development"
}, {
    src: gj,
    title: "Brand Identity System",
    category: "Branding"
}, {
    src: yj,
    title: "Corporate Interiors",
    category: "Architecture"
}]
  , vj = () => {
    const e = w.useRef(null)
      , t = cu(e, {
        once: !0,
        margin: "-100px"
    })
      , [n,r] = w.useState(null)
      , i = l => r(l)
      , s = () => r(null)
      , o = () => r(l => l !== null ? (l - 1 + hi.length) % hi.length : null)
      , a = () => r(l => l !== null ? (l + 1) % hi.length : null);
    return S.jsxs(S.Fragment, {
        children: [S.jsx("section", {
            id: "portfolio",
            className: "section-padding bg-background",
            ref: e,
            children: S.jsxs("div", {
                className: "container-narrow",
                children: [S.jsxs(Je.div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    animate: t ? {
                        opacity: 1,
                        y: 0
                    } : {},
                    transition: {
                        duration: .6
                    },
                    className: "text-center mb-16",
                    children: [S.jsx("p", {
                        className: "text-accent text-sm font-medium tracking-widest uppercase mb-4",
                        children: "Portfolio"
                    }), S.jsx("h2", {
                        className: "font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4",
                        children: "Selected work"
                    }), S.jsx("p", {
                        className: "text-muted-foreground max-w-xl mx-auto",
                        children: "A curated selection of projects that reflect our commitment to quality, clarity, and lasting impact."
                    })]
                }), S.jsx("div", {
                    className: "grid sm:grid-cols-2 gap-6",
                    children: hi.map( (l, u) => S.jsxs(Je.button, {
                        initial: {
                            opacity: 0,
                            y: 30
                        },
                        animate: t ? {
                            opacity: 1,
                            y: 0
                        } : {},
                        transition: {
                            duration: .5,
                            delay: .12 * u
                        },
                        onClick: () => i(u),
                        className: "group relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer text-left",
                        children: [S.jsx("img", {
                            src: l.src,
                            alt: l.title,
                            className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105",
                            loading: "lazy"
                        }), S.jsx("div", {
                            className: "absolute inset-0 bg-navy-deep/0 group-hover:bg-navy-deep/60 transition-all duration-300 flex items-end p-6",
                            children: S.jsxs("div", {
                                className: "opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300",
                                children: [S.jsx("p", {
                                    className: "text-gold-light text-xs font-medium tracking-wider uppercase",
                                    children: l.category
                                }), S.jsx("h3", {
                                    className: "font-display text-xl text-primary-foreground mt-1",
                                    children: l.title
                                })]
                            })
                        })]
                    }, l.title))
                })]
            })
        }), n !== null && S.jsxs("div", {
            className: "fixed inset-0 z-[100] bg-navy-deep/90 flex items-center justify-center p-4",
            onClick: s,
            children: [S.jsx("button", {
                onClick: s,
                className: "absolute top-6 right-6 text-primary-foreground/70 hover:text-primary-foreground transition-colors",
                "aria-label": "Close lightbox",
                children: S.jsx(Qf, {
                    size: 28
                })
            }), S.jsx("button", {
                onClick: l => {
                    l.stopPropagation(),
                    o()
                }
                ,
                className: "absolute left-4 md:left-8 text-primary-foreground/70 hover:text-primary-foreground transition-colors",
                "aria-label": "Previous image",
                children: S.jsx(Uk, {
                    size: 36
                })
            }), S.jsx("button", {
                onClick: l => {
                    l.stopPropagation(),
                    a()
                }
                ,
                className: "absolute right-4 md:right-8 text-primary-foreground/70 hover:text-primary-foreground transition-colors",
                "aria-label": "Next image",
                children: S.jsx(Wk, {
                    size: 36
                })
            }), S.jsx("img", {
                src: hi[n].src,
                alt: hi[n].title,
                className: "max-w-full max-h-[85vh] rounded-lg object-contain",
                onClick: l => l.stopPropagation()
            })]
        })]
    })
}
;
var le;
(function(e) {
    e.assertEqual = i => {}
    ;
    function t(i) {}
    e.assertIs = t;
    function n(i) {
        throw new Error
    }
    e.assertNever = n,
    e.arrayToEnum = i => {
        const s = {};
        for (const o of i)
            s[o] = o;
        return s
    }
    ,
    e.getValidEnumValues = i => {
        const s = e.objectKeys(i).filter(a => typeof i[i[a]] != "number")
          , o = {};
        for (const a of s)
            o[a] = i[a];
        return e.objectValues(o)
    }
    ,
    e.objectValues = i => e.objectKeys(i).map(function(s) {
        return i[s]
    }),
    e.objectKeys = typeof Object.keys == "function" ? i => Object.keys(i) : i => {
        const s = [];
        for (const o in i)
            Object.prototype.hasOwnProperty.call(i, o) && s.push(o);
        return s
    }
    ,
    e.find = (i, s) => {
        for (const o of i)
            if (s(o))
                return o
    }
    ,
    e.isInteger = typeof Number.isInteger == "function" ? i => Number.isInteger(i) : i => typeof i == "number" && Number.isFinite(i) && Math.floor(i) === i;
    function r(i, s=" | ") {
        return i.map(o => typeof o == "string" ? `'${o}'` : o).join(s)
    }
    e.joinValues = r,
    e.jsonStringifyReplacer = (i, s) => typeof s == "bigint" ? s.toString() : s
}
)(le || (le = {}));
var ny;
(function(e) {
    e.mergeShapes = (t, n) => ({
        ...t,
        ...n
    })
}
)(ny || (ny = {}));
const $ = le.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"])
  , Zn = e => {
    switch (typeof e) {
    case "undefined":
        return $.undefined;
    case "string":
        return $.string;
    case "number":
        return Number.isNaN(e) ? $.nan : $.number;
    case "boolean":
        return $.boolean;
    case "function":
        return $.function;
    case "bigint":
        return $.bigint;
    case "symbol":
        return $.symbol;
    case "object":
        return Array.isArray(e) ? $.array : e === null ? $.null : e.then && typeof e.then == "function" && e.catch && typeof e.catch == "function" ? $.promise : typeof Map < "u" && e instanceof Map ? $.map : typeof Set < "u" && e instanceof Set ? $.set : typeof Date < "u" && e instanceof Date ? $.date : $.object;
    default:
        return $.unknown
    }
}
  , j = le.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]);
class Nn extends Error {
    get errors() {
        return this.issues
    }
    constructor(t) {
        super(),
        this.issues = [],
        this.addIssue = r => {
            this.issues = [...this.issues, r]
        }
        ,
        this.addIssues = (r=[]) => {
            this.issues = [...this.issues, ...r]
        }
        ;
        const n = new.target.prototype;
        Object.setPrototypeOf ? Object.setPrototypeOf(this, n) : this.__proto__ = n,
        this.name = "ZodError",
        this.issues = t
    }
    format(t) {
        const n = t || function(s) {
            return s.message
        }
          , r = {
            _errors: []
        }
          , i = s => {
            for (const o of s.issues)
                if (o.code === "invalid_union")
                    o.unionErrors.map(i);
                else if (o.code === "invalid_return_type")
                    i(o.returnTypeError);
                else if (o.code === "invalid_arguments")
                    i(o.argumentsError);
                else if (o.path.length === 0)
                    r._errors.push(n(o));
                else {
                    let a = r
                      , l = 0;
                    for (; l < o.path.length; ) {
                        const u = o.path[l];
                        l === o.path.length - 1 ? (a[u] = a[u] || {
                            _errors: []
                        },
                        a[u]._errors.push(n(o))) : a[u] = a[u] || {
                            _errors: []
                        },
                        a = a[u],
                        l++
                    }
                }
        }
        ;
        return i(this),
        r
    }
    static assert(t) {
        if (!(t instanceof Nn))
            throw new Error(`Not a ZodError: ${t}`)
    }
    toString() {
        return this.message
    }
    get message() {
        return JSON.stringify(this.issues, le.jsonStringifyReplacer, 2)
    }
    get isEmpty() {
        return this.issues.length === 0
    }
    flatten(t=n => n.message) {
        const n = {}
          , r = [];
        for (const i of this.issues)
            if (i.path.length > 0) {
                const s = i.path[0];
                n[s] = n[s] || [],
                n[s].push(t(i))
            } else
                r.push(t(i));
        return {
            formErrors: r,
            fieldErrors: n
        }
    }
    get formErrors() {
        return this.flatten()
    }
}
Nn.create = e => new Nn(e);
const Wd = (e, t) => {
    let n;
    switch (e.code) {
    case j.invalid_type:
        e.received === $.undefined ? n = "Required" : n = `Expected ${e.expected}, received ${e.received}`;
        break;
    case j.invalid_literal:
        n = `Invalid literal value, expected ${JSON.stringify(e.expected, le.jsonStringifyReplacer)}`;
        break;
    case j.unrecognized_keys:
        n = `Unrecognized key(s) in object: ${le.joinValues(e.keys, ", ")}`;
        break;
    case j.invalid_union:
        n = "Invalid input";
        break;
    case j.invalid_union_discriminator:
        n = `Invalid discriminator value. Expected ${le.joinValues(e.options)}`;
        break;
    case j.invalid_enum_value:
        n = `Invalid enum value. Expected ${le.joinValues(e.options)}, received '${e.received}'`;
        break;
    case j.invalid_arguments:
        n = "Invalid function arguments";
        break;
    case j.invalid_return_type:
        n = "Invalid function return type";
        break;
    case j.invalid_date:
        n = "Invalid date";
        break;
    case j.invalid_string:
        typeof e.validation == "object" ? "includes"in e.validation ? (n = `Invalid input: must include "${e.validation.includes}"`,
        typeof e.validation.position == "number" && (n = `${n} at one or more positions greater than or equal to ${e.validation.position}`)) : "startsWith"in e.validation ? n = `Invalid input: must start with "${e.validation.startsWith}"` : "endsWith"in e.validation ? n = `Invalid input: must end with "${e.validation.endsWith}"` : le.assertNever(e.validation) : e.validation !== "regex" ? n = `Invalid ${e.validation}` : n = "Invalid";
        break;
    case j.too_small:
        e.type === "array" ? n = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "more than"} ${e.minimum} element(s)` : e.type === "string" ? n = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "over"} ${e.minimum} character(s)` : e.type === "number" ? n = `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}` : e.type === "bigint" ? n = `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}` : e.type === "date" ? n = `Date must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(e.minimum))}` : n = "Invalid input";
        break;
    case j.too_big:
        e.type === "array" ? n = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "less than"} ${e.maximum} element(s)` : e.type === "string" ? n = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "under"} ${e.maximum} character(s)` : e.type === "number" ? n = `Number must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "bigint" ? n = `BigInt must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "date" ? n = `Date must be ${e.exact ? "exactly" : e.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(e.maximum))}` : n = "Invalid input";
        break;
    case j.custom:
        n = "Invalid input";
        break;
    case j.invalid_intersection_types:
        n = "Intersection results could not be merged";
        break;
    case j.not_multiple_of:
        n = `Number must be a multiple of ${e.multipleOf}`;
        break;
    case j.not_finite:
        n = "Number must be finite";
        break;
    default:
        n = t.defaultError,
        le.assertNever(e)
    }
    return {
        message: n
    }
}
;
let xj = Wd;
function wj() {
    return xj
}
const Sj = e => {
    const {data: t, path: n, errorMaps: r, issueData: i} = e
      , s = [...n, ...i.path || []]
      , o = {
        ...i,
        path: s
    };
    if (i.message !== void 0)
        return {
            ...i,
            path: s,
            message: i.message
        };
    let a = "";
    const l = r.filter(u => !!u).slice().reverse();
    for (const u of l)
        a = u(o, {
            data: t,
            defaultError: a
        }).message;
    return {
        ...i,
        path: s,
        message: a
    }
}
;
function I(e, t) {
    const n = wj()
      , r = Sj({
        issueData: t,
        data: e.data,
        path: e.path,
        errorMaps: [e.common.contextualErrorMap, e.schemaErrorMap, n, n === Wd ? void 0 : Wd].filter(i => !!i)
    });
    e.common.issues.push(r)
}
class xt {
    constructor() {
        this.value = "valid"
    }
    dirty() {
        this.value === "valid" && (this.value = "dirty")
    }
    abort() {
        this.value !== "aborted" && (this.value = "aborted")
    }
    static mergeArray(t, n) {
        const r = [];
        for (const i of n) {
            if (i.status === "aborted")
                return G;
            i.status === "dirty" && t.dirty(),
            r.push(i.value)
        }
        return {
            status: t.value,
            value: r
        }
    }
    static async mergeObjectAsync(t, n) {
        const r = [];
        for (const i of n) {
            const s = await i.key
              , o = await i.value;
            r.push({
                key: s,
                value: o
            })
        }
        return xt.mergeObjectSync(t, r)
    }
    static mergeObjectSync(t, n) {
        const r = {};
        for (const i of n) {
            const {key: s, value: o} = i;
            if (s.status === "aborted" || o.status === "aborted")
                return G;
            s.status === "dirty" && t.dirty(),
            o.status === "dirty" && t.dirty(),
            s.value !== "__proto__" && (typeof o.value < "u" || i.alwaysSet) && (r[s.value] = o.value)
        }
        return {
            status: t.value,
            value: r
        }
    }
}
const G = Object.freeze({
    status: "aborted"
})
  , Fs = e => ({
    status: "dirty",
    value: e
})
  , jt = e => ({
    status: "valid",
    value: e
})
  , ry = e => e.status === "aborted"
  , iy = e => e.status === "dirty"
  , ls = e => e.status === "valid"
  , El = e => typeof Promise < "u" && e instanceof Promise;
var U;
(function(e) {
    e.errToObj = t => typeof t == "string" ? {
        message: t
    } : t || {},
    e.toString = t => typeof t == "string" ? t : t == null ? void 0 : t.message
}
)(U || (U = {}));
class Cr {
    constructor(t, n, r, i) {
        this._cachedPath = [],
        this.parent = t,
        this.data = n,
        this._path = r,
        this._key = i
    }
    get path() {
        return this._cachedPath.length || (Array.isArray(this._key) ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)),
        this._cachedPath
    }
}
const sy = (e, t) => {
    if (ls(t))
        return {
            success: !0,
            data: t.value
        };
    if (!e.common.issues.length)
        throw new Error("Validation failed but no issues detected.");
    return {
        success: !1,
        get error() {
            if (this._error)
                return this._error;
            const n = new Nn(e.common.issues);
            return this._error = n,
            this._error
        }
    }
}
;
function te(e) {
    if (!e)
        return {};
    const {errorMap: t, invalid_type_error: n, required_error: r, description: i} = e;
    if (t && (n || r))
        throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
    return t ? {
        errorMap: t,
        description: i
    } : {
        errorMap: (o, a) => {
            const {message: l} = e;
            return o.code === "invalid_enum_value" ? {
                message: l ?? a.defaultError
            } : typeof a.data > "u" ? {
                message: l ?? r ?? a.defaultError
            } : o.code !== "invalid_type" ? {
                message: a.defaultError
            } : {
                message: l ?? n ?? a.defaultError
            }
        }
        ,
        description: i
    }
}
class oe {
    get description() {
        return this._def.description
    }
    _getType(t) {
        return Zn(t.data)
    }
    _getOrReturnCtx(t, n) {
        return n || {
            common: t.parent.common,
            data: t.data,
            parsedType: Zn(t.data),
            schemaErrorMap: this._def.errorMap,
            path: t.path,
            parent: t.parent
        }
    }
    _processInputParams(t) {
        return {
            status: new xt,
            ctx: {
                common: t.parent.common,
                data: t.data,
                parsedType: Zn(t.data),
                schemaErrorMap: this._def.errorMap,
                path: t.path,
                parent: t.parent
            }
        }
    }
    _parseSync(t) {
        const n = this._parse(t);
        if (El(n))
            throw new Error("Synchronous parse encountered promise.");
        return n
    }
    _parseAsync(t) {
        const n = this._parse(t);
        return Promise.resolve(n)
    }
    parse(t, n) {
        const r = this.safeParse(t, n);
        if (r.success)
            return r.data;
        throw r.error
    }
    safeParse(t, n) {
        const r = {
            common: {
                issues: [],
                async: (n == null ? void 0 : n.async) ?? !1,
                contextualErrorMap: n == null ? void 0 : n.errorMap
            },
            path: (n == null ? void 0 : n.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: t,
            parsedType: Zn(t)
        }
          , i = this._parseSync({
            data: t,
            path: r.path,
            parent: r
        });
        return sy(r, i)
    }
    "~validate"(t) {
        var r, i;
        const n = {
            common: {
                issues: [],
                async: !!this["~standard"].async
            },
            path: [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: t,
            parsedType: Zn(t)
        };
        if (!this["~standard"].async)
            try {
                const s = this._parseSync({
                    data: t,
                    path: [],
                    parent: n
                });
                return ls(s) ? {
                    value: s.value
                } : {
                    issues: n.common.issues
                }
            } catch (s) {
                (i = (r = s == null ? void 0 : s.message) == null ? void 0 : r.toLowerCase()) != null && i.includes("encountered") && (this["~standard"].async = !0),
                n.common = {
                    issues: [],
                    async: !0
                }
            }
        return this._parseAsync({
            data: t,
            path: [],
            parent: n
        }).then(s => ls(s) ? {
            value: s.value
        } : {
            issues: n.common.issues
        })
    }
    async parseAsync(t, n) {
        const r = await this.safeParseAsync(t, n);
        if (r.success)
            return r.data;
        throw r.error
    }
    async safeParseAsync(t, n) {
        const r = {
            common: {
                issues: [],
                contextualErrorMap: n == null ? void 0 : n.errorMap,
                async: !0
            },
            path: (n == null ? void 0 : n.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: t,
            parsedType: Zn(t)
        }
          , i = this._parse({
            data: t,
            path: r.path,
            parent: r
        })
          , s = await (El(i) ? i : Promise.resolve(i));
        return sy(r, s)
    }
    refine(t, n) {
        const r = i => typeof n == "string" || typeof n > "u" ? {
            message: n
        } : typeof n == "function" ? n(i) : n;
        return this._refinement( (i, s) => {
            const o = t(i)
              , a = () => s.addIssue({
                code: j.custom,
                ...r(i)
            });
            return typeof Promise < "u" && o instanceof Promise ? o.then(l => l ? !0 : (a(),
            !1)) : o ? !0 : (a(),
            !1)
        }
        )
    }
    refinement(t, n) {
        return this._refinement( (r, i) => t(r) ? !0 : (i.addIssue(typeof n == "function" ? n(r, i) : n),
        !1))
    }
    _refinement(t) {
        return new cs({
            schema: this,
            typeName: Q.ZodEffects,
            effect: {
                type: "refinement",
                refinement: t
            }
        })
    }
    superRefine(t) {
        return this._refinement(t)
    }
    constructor(t) {
        this.spa = this.safeParseAsync,
        this._def = t,
        this.parse = this.parse.bind(this),
        this.safeParse = this.safeParse.bind(this),
        this.parseAsync = this.parseAsync.bind(this),
        this.safeParseAsync = this.safeParseAsync.bind(this),
        this.spa = this.spa.bind(this),
        this.refine = this.refine.bind(this),
        this.refinement = this.refinement.bind(this),
        this.superRefine = this.superRefine.bind(this),
        this.optional = this.optional.bind(this),
        this.nullable = this.nullable.bind(this),
        this.nullish = this.nullish.bind(this),
        this.array = this.array.bind(this),
        this.promise = this.promise.bind(this),
        this.or = this.or.bind(this),
        this.and = this.and.bind(this),
        this.transform = this.transform.bind(this),
        this.brand = this.brand.bind(this),
        this.default = this.default.bind(this),
        this.catch = this.catch.bind(this),
        this.describe = this.describe.bind(this),
        this.pipe = this.pipe.bind(this),
        this.readonly = this.readonly.bind(this),
        this.isNullable = this.isNullable.bind(this),
        this.isOptional = this.isOptional.bind(this),
        this["~standard"] = {
            version: 1,
            vendor: "zod",
            validate: n => this["~validate"](n)
        }
    }
    optional() {
        return pr.create(this, this._def)
    }
    nullable() {
        return ds.create(this, this._def)
    }
    nullish() {
        return this.nullable().optional()
    }
    array() {
        return fn.create(this)
    }
    promise() {
        return Al.create(this, this._def)
    }
    or(t) {
        return _l.create([this, t], this._def)
    }
    and(t) {
        return Rl.create(this, t, this._def)
    }
    transform(t) {
        return new cs({
            ...te(this._def),
            schema: this,
            typeName: Q.ZodEffects,
            effect: {
                type: "transform",
                transform: t
            }
        })
    }
    default(t) {
        const n = typeof t == "function" ? t : () => t;
        return new Kd({
            ...te(this._def),
            innerType: this,
            defaultValue: n,
            typeName: Q.ZodDefault
        })
    }
    brand() {
        return new Wj({
            typeName: Q.ZodBranded,
            type: this,
            ...te(this._def)
        })
    }
    catch(t) {
        const n = typeof t == "function" ? t : () => t;
        return new Zd({
            ...te(this._def),
            innerType: this,
            catchValue: n,
            typeName: Q.ZodCatch
        })
    }
    describe(t) {
        const n = this.constructor;
        return new n({
            ...this._def,
            description: t
        })
    }
    pipe(t) {
        return Fh.create(this, t)
    }
    readonly() {
        return Gd.create(this)
    }
    isOptional() {
        return this.safeParse(void 0).success
    }
    isNullable() {
        return this.safeParse(null).success
    }
}
const bj = /^c[^\s-]{8,}$/i
  , Cj = /^[0-9a-z]+$/
  , kj = /^[0-9A-HJKMNP-TV-Z]{26}$/i
  , Tj = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i
  , Ej = /^[a-z0-9_-]{21}$/i
  , Pj = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/
  , _j = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/
  , Rj = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i
  , Aj = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let fc;
const Nj = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/
  , Mj = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/
  , jj = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/
  , Oj = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/
  , Dj = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/
  , Lj = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/
  , rS = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))"
  , Ij = new RegExp(`^${rS}$`);
function iS(e) {
    let t = "[0-5]\\d";
    e.precision ? t = `${t}\\.\\d{${e.precision}}` : e.precision == null && (t = `${t}(\\.\\d+)?`);
    const n = e.precision ? "+" : "?";
    return `([01]\\d|2[0-3]):[0-5]\\d(:${t})${n}`
}
function Vj(e) {
    return new RegExp(`^${iS(e)}$`)
}
function Fj(e) {
    let t = `${rS}T${iS(e)}`;
    const n = [];
    return n.push(e.local ? "Z?" : "Z"),
    e.offset && n.push("([+-]\\d{2}:?\\d{2})"),
    t = `${t}(${n.join("|")})`,
    new RegExp(`^${t}$`)
}
function zj(e, t) {
    return !!((t === "v4" || !t) && Nj.test(e) || (t === "v6" || !t) && jj.test(e))
}
function $j(e, t) {
    if (!Pj.test(e))
        return !1;
    try {
        const [n] = e.split(".");
        if (!n)
            return !1;
        const r = n.replace(/-/g, "+").replace(/_/g, "/").padEnd(n.length + (4 - n.length % 4) % 4, "=")
          , i = JSON.parse(atob(r));
        return !(typeof i != "object" || i === null || "typ"in i && (i == null ? void 0 : i.typ) !== "JWT" || !i.alg || t && i.alg !== t)
    } catch {
        return !1
    }
}
function Bj(e, t) {
    return !!((t === "v4" || !t) && Mj.test(e) || (t === "v6" || !t) && Oj.test(e))
}
class sr extends oe {
    _parse(t) {
        if (this._def.coerce && (t.data = String(t.data)),
        this._getType(t) !== $.string) {
            const s = this._getOrReturnCtx(t);
            return I(s, {
                code: j.invalid_type,
                expected: $.string,
                received: s.parsedType
            }),
            G
        }
        const r = new xt;
        let i;
        for (const s of this._def.checks)
            if (s.kind === "min")
                t.data.length < s.value && (i = this._getOrReturnCtx(t, i),
                I(i, {
                    code: j.too_small,
                    minimum: s.value,
                    type: "string",
                    inclusive: !0,
                    exact: !1,
                    message: s.message
                }),
                r.dirty());
            else if (s.kind === "max")
                t.data.length > s.value && (i = this._getOrReturnCtx(t, i),
                I(i, {
                    code: j.too_big,
                    maximum: s.value,
                    type: "string",
                    inclusive: !0,
                    exact: !1,
                    message: s.message
                }),
                r.dirty());
            else if (s.kind === "length") {
                const o = t.data.length > s.value
                  , a = t.data.length < s.value;
                (o || a) && (i = this._getOrReturnCtx(t, i),
                o ? I(i, {
                    code: j.too_big,
                    maximum: s.value,
                    type: "string",
                    inclusive: !0,
                    exact: !0,
                    message: s.message
                }) : a && I(i, {
                    code: j.too_small,
                    minimum: s.value,
                    type: "string",
                    inclusive: !0,
                    exact: !0,
                    message: s.message
                }),
                r.dirty())
            } else if (s.kind === "email")
                Rj.test(t.data) || (i = this._getOrReturnCtx(t, i),
                I(i, {
                    validation: "email",
                    code: j.invalid_string,
                    message: s.message
                }),
                r.dirty());
            else if (s.kind === "emoji")
                fc || (fc = new RegExp(Aj,"u")),
                fc.test(t.data) || (i = this._getOrReturnCtx(t, i),
                I(i, {
                    validation: "emoji",
                    code: j.invalid_string,
                    message: s.message
                }),
                r.dirty());
            else if (s.kind === "uuid")
                Tj.test(t.data) || (i = this._getOrReturnCtx(t, i),
                I(i, {
                    validation: "uuid",
                    code: j.invalid_string,
                    message: s.message
                }),
                r.dirty());
            else if (s.kind === "nanoid")
                Ej.test(t.data) || (i = this._getOrReturnCtx(t, i),
                I(i, {
                    validation: "nanoid",
                    code: j.invalid_string,
                    message: s.message
                }),
                r.dirty());
            else if (s.kind === "cuid")
                bj.test(t.data) || (i = this._getOrReturnCtx(t, i),
                I(i, {
                    validation: "cuid",
                    code: j.invalid_string,
                    message: s.message
                }),
                r.dirty());
            else if (s.kind === "cuid2")
                Cj.test(t.data) || (i = this._getOrReturnCtx(t, i),
                I(i, {
                    validation: "cuid2",
                    code: j.invalid_string,
                    message: s.message
                }),
                r.dirty());
            else if (s.kind === "ulid")
                kj.test(t.data) || (i = this._getOrReturnCtx(t, i),
                I(i, {
                    validation: "ulid",
                    code: j.invalid_string,
                    message: s.message
                }),
                r.dirty());
            else if (s.kind === "url")
                try {
                    new URL(t.data)
                } catch {
                    i = this._getOrReturnCtx(t, i),
                    I(i, {
                        validation: "url",
                        code: j.invalid_string,
                        message: s.message
                    }),
                    r.dirty()
                }
            else
                s.kind === "regex" ? (s.regex.lastIndex = 0,
                s.regex.test(t.data) || (i = this._getOrReturnCtx(t, i),
                I(i, {
                    validation: "regex",
                    code: j.invalid_string,
                    message: s.message
                }),
                r.dirty())) : s.kind === "trim" ? t.data = t.data.trim() : s.kind === "includes" ? t.data.includes(s.value, s.position) || (i = this._getOrReturnCtx(t, i),
                I(i, {
                    code: j.invalid_string,
                    validation: {
                        includes: s.value,
                        position: s.position
                    },
                    message: s.message
                }),
                r.dirty()) : s.kind === "toLowerCase" ? t.data = t.data.toLowerCase() : s.kind === "toUpperCase" ? t.data = t.data.toUpperCase() : s.kind === "startsWith" ? t.data.startsWith(s.value) || (i = this._getOrReturnCtx(t, i),
                I(i, {
                    code: j.invalid_string,
                    validation: {
                        startsWith: s.value
                    },
                    message: s.message
                }),
                r.dirty()) : s.kind === "endsWith" ? t.data.endsWith(s.value) || (i = this._getOrReturnCtx(t, i),
                I(i, {
                    code: j.invalid_string,
                    validation: {
                        endsWith: s.value
                    },
                    message: s.message
                }),
                r.dirty()) : s.kind === "datetime" ? Fj(s).test(t.data) || (i = this._getOrReturnCtx(t, i),
                I(i, {
                    code: j.invalid_string,
                    validation: "datetime",
                    message: s.message
                }),
                r.dirty()) : s.kind === "date" ? Ij.test(t.data) || (i = this._getOrReturnCtx(t, i),
                I(i, {
                    code: j.invalid_string,
                    validation: "date",
                    message: s.message
                }),
                r.dirty()) : s.kind === "time" ? Vj(s).test(t.data) || (i = this._getOrReturnCtx(t, i),
                I(i, {
                    code: j.invalid_string,
                    validation: "time",
                    message: s.message
                }),
                r.dirty()) : s.kind === "duration" ? _j.test(t.data) || (i = this._getOrReturnCtx(t, i),
                I(i, {
                    validation: "duration",
                    code: j.invalid_string,
                    message: s.message
                }),
                r.dirty()) : s.kind === "ip" ? zj(t.data, s.version) || (i = this._getOrReturnCtx(t, i),
                I(i, {
                    validation: "ip",
                    code: j.invalid_string,
                    message: s.message
                }),
                r.dirty()) : s.kind === "jwt" ? $j(t.data, s.alg) || (i = this._getOrReturnCtx(t, i),
                I(i, {
                    validation: "jwt",
                    code: j.invalid_string,
                    message: s.message
                }),
                r.dirty()) : s.kind === "cidr" ? Bj(t.data, s.version) || (i = this._getOrReturnCtx(t, i),
                I(i, {
                    validation: "cidr",
                    code: j.invalid_string,
                    message: s.message
                }),
                r.dirty()) : s.kind === "base64" ? Dj.test(t.data) || (i = this._getOrReturnCtx(t, i),
                I(i, {
                    validation: "base64",
                    code: j.invalid_string,
                    message: s.message
                }),
                r.dirty()) : s.kind === "base64url" ? Lj.test(t.data) || (i = this._getOrReturnCtx(t, i),
                I(i, {
                    validation: "base64url",
                    code: j.invalid_string,
                    message: s.message
                }),
                r.dirty()) : le.assertNever(s);
        return {
            status: r.value,
            value: t.data
        }
    }
    _regex(t, n, r) {
        return this.refinement(i => t.test(i), {
            validation: n,
            code: j.invalid_string,
            ...U.errToObj(r)
        })
    }
    _addCheck(t) {
        return new sr({
            ...this._def,
            checks: [...this._def.checks, t]
        })
    }
    email(t) {
        return this._addCheck({
            kind: "email",
            ...U.errToObj(t)
        })
    }
    url(t) {
        return this._addCheck({
            kind: "url",
            ...U.errToObj(t)
        })
    }
    emoji(t) {
        return this._addCheck({
            kind: "emoji",
            ...U.errToObj(t)
        })
    }
    uuid(t) {
        return this._addCheck({
            kind: "uuid",
            ...U.errToObj(t)
        })
    }
    nanoid(t) {
        return this._addCheck({
            kind: "nanoid",
            ...U.errToObj(t)
        })
    }
    cuid(t) {
        return this._addCheck({
            kind: "cuid",
            ...U.errToObj(t)
        })
    }
    cuid2(t) {
        return this._addCheck({
            kind: "cuid2",
            ...U.errToObj(t)
        })
    }
    ulid(t) {
        return this._addCheck({
            kind: "ulid",
            ...U.errToObj(t)
        })
    }
    base64(t) {
        return this._addCheck({
            kind: "base64",
            ...U.errToObj(t)
        })
    }
    base64url(t) {
        return this._addCheck({
            kind: "base64url",
            ...U.errToObj(t)
        })
    }
    jwt(t) {
        return this._addCheck({
            kind: "jwt",
            ...U.errToObj(t)
        })
    }
    ip(t) {
        return this._addCheck({
            kind: "ip",
            ...U.errToObj(t)
        })
    }
    cidr(t) {
        return this._addCheck({
            kind: "cidr",
            ...U.errToObj(t)
        })
    }
    datetime(t) {
        return typeof t == "string" ? this._addCheck({
            kind: "datetime",
            precision: null,
            offset: !1,
            local: !1,
            message: t
        }) : this._addCheck({
            kind: "datetime",
            precision: typeof (t == null ? void 0 : t.precision) > "u" ? null : t == null ? void 0 : t.precision,
            offset: (t == null ? void 0 : t.offset) ?? !1,
            local: (t == null ? void 0 : t.local) ?? !1,
            ...U.errToObj(t == null ? void 0 : t.message)
        })
    }
    date(t) {
        return this._addCheck({
            kind: "date",
            message: t
        })
    }
    time(t) {
        return typeof t == "string" ? this._addCheck({
            kind: "time",
            precision: null,
            message: t
        }) : this._addCheck({
            kind: "time",
            precision: typeof (t == null ? void 0 : t.precision) > "u" ? null : t == null ? void 0 : t.precision,
            ...U.errToObj(t == null ? void 0 : t.message)
        })
    }
    duration(t) {
        return this._addCheck({
            kind: "duration",
            ...U.errToObj(t)
        })
    }
    regex(t, n) {
        return this._addCheck({
            kind: "regex",
            regex: t,
            ...U.errToObj(n)
        })
    }
    includes(t, n) {
        return this._addCheck({
            kind: "includes",
            value: t,
            position: n == null ? void 0 : n.position,
            ...U.errToObj(n == null ? void 0 : n.message)
        })
    }
    startsWith(t, n) {
        return this._addCheck({
            kind: "startsWith",
            value: t,
            ...U.errToObj(n)
        })
    }
    endsWith(t, n) {
        return this._addCheck({
            kind: "endsWith",
            value: t,
            ...U.errToObj(n)
        })
    }
    min(t, n) {
        return this._addCheck({
            kind: "min",
            value: t,
            ...U.errToObj(n)
        })
    }
    max(t, n) {
        return this._addCheck({
            kind: "max",
            value: t,
            ...U.errToObj(n)
        })
    }
    length(t, n) {
        return this._addCheck({
            kind: "length",
            value: t,
            ...U.errToObj(n)
        })
    }
    nonempty(t) {
        return this.min(1, U.errToObj(t))
    }
    trim() {
        return new sr({
            ...this._def,
            checks: [...this._def.checks, {
                kind: "trim"
            }]
        })
    }
    toLowerCase() {
        return new sr({
            ...this._def,
            checks: [...this._def.checks, {
                kind: "toLowerCase"
            }]
        })
    }
    toUpperCase() {
        return new sr({
            ...this._def,
            checks: [...this._def.checks, {
                kind: "toUpperCase"
            }]
        })
    }
    get isDatetime() {
        return !!this._def.checks.find(t => t.kind === "datetime")
    }
    get isDate() {
        return !!this._def.checks.find(t => t.kind === "date")
    }
    get isTime() {
        return !!this._def.checks.find(t => t.kind === "time")
    }
    get isDuration() {
        return !!this._def.checks.find(t => t.kind === "duration")
    }
    get isEmail() {
        return !!this._def.checks.find(t => t.kind === "email")
    }
    get isURL() {
        return !!this._def.checks.find(t => t.kind === "url")
    }
    get isEmoji() {
        return !!this._def.checks.find(t => t.kind === "emoji")
    }
    get isUUID() {
        return !!this._def.checks.find(t => t.kind === "uuid")
    }
    get isNANOID() {
        return !!this._def.checks.find(t => t.kind === "nanoid")
    }
    get isCUID() {
        return !!this._def.checks.find(t => t.kind === "cuid")
    }
    get isCUID2() {
        return !!this._def.checks.find(t => t.kind === "cuid2")
    }
    get isULID() {
        return !!this._def.checks.find(t => t.kind === "ulid")
    }
    get isIP() {
        return !!this._def.checks.find(t => t.kind === "ip")
    }
    get isCIDR() {
        return !!this._def.checks.find(t => t.kind === "cidr")
    }
    get isBase64() {
        return !!this._def.checks.find(t => t.kind === "base64")
    }
    get isBase64url() {
        return !!this._def.checks.find(t => t.kind === "base64url")
    }
    get minLength() {
        let t = null;
        for (const n of this._def.checks)
            n.kind === "min" && (t === null || n.value > t) && (t = n.value);
        return t
    }
    get maxLength() {
        let t = null;
        for (const n of this._def.checks)
            n.kind === "max" && (t === null || n.value < t) && (t = n.value);
        return t
    }
}
sr.create = e => new sr({
    checks: [],
    typeName: Q.ZodString,
    coerce: (e == null ? void 0 : e.coerce) ?? !1,
    ...te(e)
});
function Uj(e, t) {
    const n = (e.toString().split(".")[1] || "").length
      , r = (t.toString().split(".")[1] || "").length
      , i = n > r ? n : r
      , s = Number.parseInt(e.toFixed(i).replace(".", ""))
      , o = Number.parseInt(t.toFixed(i).replace(".", ""));
    return s % o / 10 ** i
}
class Po extends oe {
    constructor() {
        super(...arguments),
        this.min = this.gte,
        this.max = this.lte,
        this.step = this.multipleOf
    }
    _parse(t) {
        if (this._def.coerce && (t.data = Number(t.data)),
        this._getType(t) !== $.number) {
            const s = this._getOrReturnCtx(t);
            return I(s, {
                code: j.invalid_type,
                expected: $.number,
                received: s.parsedType
            }),
            G
        }
        let r;
        const i = new xt;
        for (const s of this._def.checks)
            s.kind === "int" ? le.isInteger(t.data) || (r = this._getOrReturnCtx(t, r),
            I(r, {
                code: j.invalid_type,
                expected: "integer",
                received: "float",
                message: s.message
            }),
            i.dirty()) : s.kind === "min" ? (s.inclusive ? t.data < s.value : t.data <= s.value) && (r = this._getOrReturnCtx(t, r),
            I(r, {
                code: j.too_small,
                minimum: s.value,
                type: "number",
                inclusive: s.inclusive,
                exact: !1,
                message: s.message
            }),
            i.dirty()) : s.kind === "max" ? (s.inclusive ? t.data > s.value : t.data >= s.value) && (r = this._getOrReturnCtx(t, r),
            I(r, {
                code: j.too_big,
                maximum: s.value,
                type: "number",
                inclusive: s.inclusive,
                exact: !1,
                message: s.message
            }),
            i.dirty()) : s.kind === "multipleOf" ? Uj(t.data, s.value) !== 0 && (r = this._getOrReturnCtx(t, r),
            I(r, {
                code: j.not_multiple_of,
                multipleOf: s.value,
                message: s.message
            }),
            i.dirty()) : s.kind === "finite" ? Number.isFinite(t.data) || (r = this._getOrReturnCtx(t, r),
            I(r, {
                code: j.not_finite,
                message: s.message
            }),
            i.dirty()) : le.assertNever(s);
        return {
            status: i.value,
            value: t.data
        }
    }
    gte(t, n) {
        return this.setLimit("min", t, !0, U.toString(n))
    }
    gt(t, n) {
        return this.setLimit("min", t, !1, U.toString(n))
    }
    lte(t, n) {
        return this.setLimit("max", t, !0, U.toString(n))
    }
    lt(t, n) {
        return this.setLimit("max", t, !1, U.toString(n))
    }
    setLimit(t, n, r, i) {
        return new Po({
            ...this._def,
            checks: [...this._def.checks, {
                kind: t,
                value: n,
                inclusive: r,
                message: U.toString(i)
            }]
        })
    }
    _addCheck(t) {
        return new Po({
            ...this._def,
            checks: [...this._def.checks, t]
        })
    }
    int(t) {
        return this._addCheck({
            kind: "int",
            message: U.toString(t)
        })
    }
    positive(t) {
        return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: !1,
            message: U.toString(t)
        })
    }
    negative(t) {
        return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: !1,
            message: U.toString(t)
        })
    }
    nonpositive(t) {
        return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: !0,
            message: U.toString(t)
        })
    }
    nonnegative(t) {
        return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: !0,
            message: U.toString(t)
        })
    }
    multipleOf(t, n) {
        return this._addCheck({
            kind: "multipleOf",
            value: t,
            message: U.toString(n)
        })
    }
    finite(t) {
        return this._addCheck({
            kind: "finite",
            message: U.toString(t)
        })
    }
    safe(t) {
        return this._addCheck({
            kind: "min",
            inclusive: !0,
            value: Number.MIN_SAFE_INTEGER,
            message: U.toString(t)
        })._addCheck({
            kind: "max",
            inclusive: !0,
            value: Number.MAX_SAFE_INTEGER,
            message: U.toString(t)
        })
    }
    get minValue() {
        let t = null;
        for (const n of this._def.checks)
            n.kind === "min" && (t === null || n.value > t) && (t = n.value);
        return t
    }
    get maxValue() {
        let t = null;
        for (const n of this._def.checks)
            n.kind === "max" && (t === null || n.value < t) && (t = n.value);
        return t
    }
    get isInt() {
        return !!this._def.checks.find(t => t.kind === "int" || t.kind === "multipleOf" && le.isInteger(t.value))
    }
    get isFinite() {
        let t = null
          , n = null;
        for (const r of this._def.checks) {
            if (r.kind === "finite" || r.kind === "int" || r.kind === "multipleOf")
                return !0;
            r.kind === "min" ? (n === null || r.value > n) && (n = r.value) : r.kind === "max" && (t === null || r.value < t) && (t = r.value)
        }
        return Number.isFinite(n) && Number.isFinite(t)
    }
}
Po.create = e => new Po({
    checks: [],
    typeName: Q.ZodNumber,
    coerce: (e == null ? void 0 : e.coerce) || !1,
    ...te(e)
});
class _o extends oe {
    constructor() {
        super(...arguments),
        this.min = this.gte,
        this.max = this.lte
    }
    _parse(t) {
        if (this._def.coerce)
            try {
                t.data = BigInt(t.data)
            } catch {
                return this._getInvalidInput(t)
            }
        if (this._getType(t) !== $.bigint)
            return this._getInvalidInput(t);
        let r;
        const i = new xt;
        for (const s of this._def.checks)
            s.kind === "min" ? (s.inclusive ? t.data < s.value : t.data <= s.value) && (r = this._getOrReturnCtx(t, r),
            I(r, {
                code: j.too_small,
                type: "bigint",
                minimum: s.value,
                inclusive: s.inclusive,
                message: s.message
            }),
            i.dirty()) : s.kind === "max" ? (s.inclusive ? t.data > s.value : t.data >= s.value) && (r = this._getOrReturnCtx(t, r),
            I(r, {
                code: j.too_big,
                type: "bigint",
                maximum: s.value,
                inclusive: s.inclusive,
                message: s.message
            }),
            i.dirty()) : s.kind === "multipleOf" ? t.data % s.value !== BigInt(0) && (r = this._getOrReturnCtx(t, r),
            I(r, {
                code: j.not_multiple_of,
                multipleOf: s.value,
                message: s.message
            }),
            i.dirty()) : le.assertNever(s);
        return {
            status: i.value,
            value: t.data
        }
    }
    _getInvalidInput(t) {
        const n = this._getOrReturnCtx(t);
        return I(n, {
            code: j.invalid_type,
            expected: $.bigint,
            received: n.parsedType
        }),
        G
    }
    gte(t, n) {
        return this.setLimit("min", t, !0, U.toString(n))
    }
    gt(t, n) {
        return this.setLimit("min", t, !1, U.toString(n))
    }
    lte(t, n) {
        return this.setLimit("max", t, !0, U.toString(n))
    }
    lt(t, n) {
        return this.setLimit("max", t, !1, U.toString(n))
    }
    setLimit(t, n, r, i) {
        return new _o({
            ...this._def,
            checks: [...this._def.checks, {
                kind: t,
                value: n,
                inclusive: r,
                message: U.toString(i)
            }]
        })
    }
    _addCheck(t) {
        return new _o({
            ...this._def,
            checks: [...this._def.checks, t]
        })
    }
    positive(t) {
        return this._addCheck({
            kind: "min",
            value: BigInt(0),
            inclusive: !1,
            message: U.toString(t)
        })
    }
    negative(t) {
        return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: !1,
            message: U.toString(t)
        })
    }
    nonpositive(t) {
        return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: !0,
            message: U.toString(t)
        })
    }
    nonnegative(t) {
        return this._addCheck({
            kind: "min",
            value: BigInt(0),
            inclusive: !0,
            message: U.toString(t)
        })
    }
    multipleOf(t, n) {
        return this._addCheck({
            kind: "multipleOf",
            value: t,
            message: U.toString(n)
        })
    }
    get minValue() {
        let t = null;
        for (const n of this._def.checks)
            n.kind === "min" && (t === null || n.value > t) && (t = n.value);
        return t
    }
    get maxValue() {
        let t = null;
        for (const n of this._def.checks)
            n.kind === "max" && (t === null || n.value < t) && (t = n.value);
        return t
    }
}
_o.create = e => new _o({
    checks: [],
    typeName: Q.ZodBigInt,
    coerce: (e == null ? void 0 : e.coerce) ?? !1,
    ...te(e)
});
class oy extends oe {
    _parse(t) {
        if (this._def.coerce && (t.data = !!t.data),
        this._getType(t) !== $.boolean) {
            const r = this._getOrReturnCtx(t);
            return I(r, {
                code: j.invalid_type,
                expected: $.boolean,
                received: r.parsedType
            }),
            G
        }
        return jt(t.data)
    }
}
oy.create = e => new oy({
    typeName: Q.ZodBoolean,
    coerce: (e == null ? void 0 : e.coerce) || !1,
    ...te(e)
});
class Pl extends oe {
    _parse(t) {
        if (this._def.coerce && (t.data = new Date(t.data)),
        this._getType(t) !== $.date) {
            const s = this._getOrReturnCtx(t);
            return I(s, {
                code: j.invalid_type,
                expected: $.date,
                received: s.parsedType
            }),
            G
        }
        if (Number.isNaN(t.data.getTime())) {
            const s = this._getOrReturnCtx(t);
            return I(s, {
                code: j.invalid_date
            }),
            G
        }
        const r = new xt;
        let i;
        for (const s of this._def.checks)
            s.kind === "min" ? t.data.getTime() < s.value && (i = this._getOrReturnCtx(t, i),
            I(i, {
                code: j.too_small,
                message: s.message,
                inclusive: !0,
                exact: !1,
                minimum: s.value,
                type: "date"
            }),
            r.dirty()) : s.kind === "max" ? t.data.getTime() > s.value && (i = this._getOrReturnCtx(t, i),
            I(i, {
                code: j.too_big,
                message: s.message,
                inclusive: !0,
                exact: !1,
                maximum: s.value,
                type: "date"
            }),
            r.dirty()) : le.assertNever(s);
        return {
            status: r.value,
            value: new Date(t.data.getTime())
        }
    }
    _addCheck(t) {
        return new Pl({
            ...this._def,
            checks: [...this._def.checks, t]
        })
    }
    min(t, n) {
        return this._addCheck({
            kind: "min",
            value: t.getTime(),
            message: U.toString(n)
        })
    }
    max(t, n) {
        return this._addCheck({
            kind: "max",
            value: t.getTime(),
            message: U.toString(n)
        })
    }
    get minDate() {
        let t = null;
        for (const n of this._def.checks)
            n.kind === "min" && (t === null || n.value > t) && (t = n.value);
        return t != null ? new Date(t) : null
    }
    get maxDate() {
        let t = null;
        for (const n of this._def.checks)
            n.kind === "max" && (t === null || n.value < t) && (t = n.value);
        return t != null ? new Date(t) : null
    }
}
Pl.create = e => new Pl({
    checks: [],
    coerce: (e == null ? void 0 : e.coerce) || !1,
    typeName: Q.ZodDate,
    ...te(e)
});
class ay extends oe {
    _parse(t) {
        if (this._getType(t) !== $.symbol) {
            const r = this._getOrReturnCtx(t);
            return I(r, {
                code: j.invalid_type,
                expected: $.symbol,
                received: r.parsedType
            }),
            G
        }
        return jt(t.data)
    }
}
ay.create = e => new ay({
    typeName: Q.ZodSymbol,
    ...te(e)
});
class ly extends oe {
    _parse(t) {
        if (this._getType(t) !== $.undefined) {
            const r = this._getOrReturnCtx(t);
            return I(r, {
                code: j.invalid_type,
                expected: $.undefined,
                received: r.parsedType
            }),
            G
        }
        return jt(t.data)
    }
}
ly.create = e => new ly({
    typeName: Q.ZodUndefined,
    ...te(e)
});
class uy extends oe {
    _parse(t) {
        if (this._getType(t) !== $.null) {
            const r = this._getOrReturnCtx(t);
            return I(r, {
                code: j.invalid_type,
                expected: $.null,
                received: r.parsedType
            }),
            G
        }
        return jt(t.data)
    }
}
uy.create = e => new uy({
    typeName: Q.ZodNull,
    ...te(e)
});
class cy extends oe {
    constructor() {
        super(...arguments),
        this._any = !0
    }
    _parse(t) {
        return jt(t.data)
    }
}
cy.create = e => new cy({
    typeName: Q.ZodAny,
    ...te(e)
});
class dy extends oe {
    constructor() {
        super(...arguments),
        this._unknown = !0
    }
    _parse(t) {
        return jt(t.data)
    }
}
dy.create = e => new dy({
    typeName: Q.ZodUnknown,
    ...te(e)
});
class kr extends oe {
    _parse(t) {
        const n = this._getOrReturnCtx(t);
        return I(n, {
            code: j.invalid_type,
            expected: $.never,
            received: n.parsedType
        }),
        G
    }
}
kr.create = e => new kr({
    typeName: Q.ZodNever,
    ...te(e)
});
class fy extends oe {
    _parse(t) {
        if (this._getType(t) !== $.undefined) {
            const r = this._getOrReturnCtx(t);
            return I(r, {
                code: j.invalid_type,
                expected: $.void,
                received: r.parsedType
            }),
            G
        }
        return jt(t.data)
    }
}
fy.create = e => new fy({
    typeName: Q.ZodVoid,
    ...te(e)
});
class fn extends oe {
    _parse(t) {
        const {ctx: n, status: r} = this._processInputParams(t)
          , i = this._def;
        if (n.parsedType !== $.array)
            return I(n, {
                code: j.invalid_type,
                expected: $.array,
                received: n.parsedType
            }),
            G;
        if (i.exactLength !== null) {
            const o = n.data.length > i.exactLength.value
              , a = n.data.length < i.exactLength.value;
            (o || a) && (I(n, {
                code: o ? j.too_big : j.too_small,
                minimum: a ? i.exactLength.value : void 0,
                maximum: o ? i.exactLength.value : void 0,
                type: "array",
                inclusive: !0,
                exact: !0,
                message: i.exactLength.message
            }),
            r.dirty())
        }
        if (i.minLength !== null && n.data.length < i.minLength.value && (I(n, {
            code: j.too_small,
            minimum: i.minLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: i.minLength.message
        }),
        r.dirty()),
        i.maxLength !== null && n.data.length > i.maxLength.value && (I(n, {
            code: j.too_big,
            maximum: i.maxLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: i.maxLength.message
        }),
        r.dirty()),
        n.common.async)
            return Promise.all([...n.data].map( (o, a) => i.type._parseAsync(new Cr(n,o,n.path,a)))).then(o => xt.mergeArray(r, o));
        const s = [...n.data].map( (o, a) => i.type._parseSync(new Cr(n,o,n.path,a)));
        return xt.mergeArray(r, s)
    }
    get element() {
        return this._def.type
    }
    min(t, n) {
        return new fn({
            ...this._def,
            minLength: {
                value: t,
                message: U.toString(n)
            }
        })
    }
    max(t, n) {
        return new fn({
            ...this._def,
            maxLength: {
                value: t,
                message: U.toString(n)
            }
        })
    }
    length(t, n) {
        return new fn({
            ...this._def,
            exactLength: {
                value: t,
                message: U.toString(n)
            }
        })
    }
    nonempty(t) {
        return this.min(1, t)
    }
}
fn.create = (e, t) => new fn({
    type: e,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: Q.ZodArray,
    ...te(t)
});
function mi(e) {
    if (e instanceof Te) {
        const t = {};
        for (const n in e.shape) {
            const r = e.shape[n];
            t[n] = pr.create(mi(r))
        }
        return new Te({
            ...e._def,
            shape: () => t
        })
    } else
        return e instanceof fn ? new fn({
            ...e._def,
            type: mi(e.element)
        }) : e instanceof pr ? pr.create(mi(e.unwrap())) : e instanceof ds ? ds.create(mi(e.unwrap())) : e instanceof ni ? ni.create(e.items.map(t => mi(t))) : e
}
class Te extends oe {
    constructor() {
        super(...arguments),
        this._cached = null,
        this.nonstrict = this.passthrough,
        this.augment = this.extend
    }
    _getCached() {
        if (this._cached !== null)
            return this._cached;
        const t = this._def.shape()
          , n = le.objectKeys(t);
        return this._cached = {
            shape: t,
            keys: n
        },
        this._cached
    }
    _parse(t) {
        if (this._getType(t) !== $.object) {
            const u = this._getOrReturnCtx(t);
            return I(u, {
                code: j.invalid_type,
                expected: $.object,
                received: u.parsedType
            }),
            G
        }
        const {status: r, ctx: i} = this._processInputParams(t)
          , {shape: s, keys: o} = this._getCached()
          , a = [];
        if (!(this._def.catchall instanceof kr && this._def.unknownKeys === "strip"))
            for (const u in i.data)
                o.includes(u) || a.push(u);
        const l = [];
        for (const u of o) {
            const c = s[u]
              , d = i.data[u];
            l.push({
                key: {
                    status: "valid",
                    value: u
                },
                value: c._parse(new Cr(i,d,i.path,u)),
                alwaysSet: u in i.data
            })
        }
        if (this._def.catchall instanceof kr) {
            const u = this._def.unknownKeys;
            if (u === "passthrough")
                for (const c of a)
                    l.push({
                        key: {
                            status: "valid",
                            value: c
                        },
                        value: {
                            status: "valid",
                            value: i.data[c]
                        }
                    });
            else if (u === "strict")
                a.length > 0 && (I(i, {
                    code: j.unrecognized_keys,
                    keys: a
                }),
                r.dirty());
            else if (u !== "strip")
                throw new Error("Internal ZodObject error: invalid unknownKeys value.")
        } else {
            const u = this._def.catchall;
            for (const c of a) {
                const d = i.data[c];
                l.push({
                    key: {
                        status: "valid",
                        value: c
                    },
                    value: u._parse(new Cr(i,d,i.path,c)),
                    alwaysSet: c in i.data
                })
            }
        }
        return i.common.async ? Promise.resolve().then(async () => {
            const u = [];
            for (const c of l) {
                const d = await c.key
                  , f = await c.value;
                u.push({
                    key: d,
                    value: f,
                    alwaysSet: c.alwaysSet
                })
            }
            return u
        }
        ).then(u => xt.mergeObjectSync(r, u)) : xt.mergeObjectSync(r, l)
    }
    get shape() {
        return this._def.shape()
    }
    strict(t) {
        return U.errToObj,
        new Te({
            ...this._def,
            unknownKeys: "strict",
            ...t !== void 0 ? {
                errorMap: (n, r) => {
                    var s, o;
                    const i = ((o = (s = this._def).errorMap) == null ? void 0 : o.call(s, n, r).message) ?? r.defaultError;
                    return n.code === "unrecognized_keys" ? {
                        message: U.errToObj(t).message ?? i
                    } : {
                        message: i
                    }
                }
            } : {}
        })
    }
    strip() {
        return new Te({
            ...this._def,
            unknownKeys: "strip"
        })
    }
    passthrough() {
        return new Te({
            ...this._def,
            unknownKeys: "passthrough"
        })
    }
    extend(t) {
        return new Te({
            ...this._def,
            shape: () => ({
                ...this._def.shape(),
                ...t
            })
        })
    }
    merge(t) {
        return new Te({
            unknownKeys: t._def.unknownKeys,
            catchall: t._def.catchall,
            shape: () => ({
                ...this._def.shape(),
                ...t._def.shape()
            }),
            typeName: Q.ZodObject
        })
    }
    setKey(t, n) {
        return this.augment({
            [t]: n
        })
    }
    catchall(t) {
        return new Te({
            ...this._def,
            catchall: t
        })
    }
    pick(t) {
        const n = {};
        for (const r of le.objectKeys(t))
            t[r] && this.shape[r] && (n[r] = this.shape[r]);
        return new Te({
            ...this._def,
            shape: () => n
        })
    }
    omit(t) {
        const n = {};
        for (const r of le.objectKeys(this.shape))
            t[r] || (n[r] = this.shape[r]);
        return new Te({
            ...this._def,
            shape: () => n
        })
    }
    deepPartial() {
        return mi(this)
    }
    partial(t) {
        const n = {};
        for (const r of le.objectKeys(this.shape)) {
            const i = this.shape[r];
            t && !t[r] ? n[r] = i : n[r] = i.optional()
        }
        return new Te({
            ...this._def,
            shape: () => n
        })
    }
    required(t) {
        const n = {};
        for (const r of le.objectKeys(this.shape))
            if (t && !t[r])
                n[r] = this.shape[r];
            else {
                let s = this.shape[r];
                for (; s instanceof pr; )
                    s = s._def.innerType;
                n[r] = s
            }
        return new Te({
            ...this._def,
            shape: () => n
        })
    }
    keyof() {
        return sS(le.objectKeys(this.shape))
    }
}
Te.create = (e, t) => new Te({
    shape: () => e,
    unknownKeys: "strip",
    catchall: kr.create(),
    typeName: Q.ZodObject,
    ...te(t)
});
Te.strictCreate = (e, t) => new Te({
    shape: () => e,
    unknownKeys: "strict",
    catchall: kr.create(),
    typeName: Q.ZodObject,
    ...te(t)
});
Te.lazycreate = (e, t) => new Te({
    shape: e,
    unknownKeys: "strip",
    catchall: kr.create(),
    typeName: Q.ZodObject,
    ...te(t)
});
class _l extends oe {
    _parse(t) {
        const {ctx: n} = this._processInputParams(t)
          , r = this._def.options;
        function i(s) {
            for (const a of s)
                if (a.result.status === "valid")
                    return a.result;
            for (const a of s)
                if (a.result.status === "dirty")
                    return n.common.issues.push(...a.ctx.common.issues),
                    a.result;
            const o = s.map(a => new Nn(a.ctx.common.issues));
            return I(n, {
                code: j.invalid_union,
                unionErrors: o
            }),
            G
        }
        if (n.common.async)
            return Promise.all(r.map(async s => {
                const o = {
                    ...n,
                    common: {
                        ...n.common,
                        issues: []
                    },
                    parent: null
                };
                return {
                    result: await s._parseAsync({
                        data: n.data,
                        path: n.path,
                        parent: o
                    }),
                    ctx: o
                }
            }
            )).then(i);
        {
            let s;
            const o = [];
            for (const l of r) {
                const u = {
                    ...n,
                    common: {
                        ...n.common,
                        issues: []
                    },
                    parent: null
                }
                  , c = l._parseSync({
                    data: n.data,
                    path: n.path,
                    parent: u
                });
                if (c.status === "valid")
                    return c;
                c.status === "dirty" && !s && (s = {
                    result: c,
                    ctx: u
                }),
                u.common.issues.length && o.push(u.common.issues)
            }
            if (s)
                return n.common.issues.push(...s.ctx.common.issues),
                s.result;
            const a = o.map(l => new Nn(l));
            return I(n, {
                code: j.invalid_union,
                unionErrors: a
            }),
            G
        }
    }
    get options() {
        return this._def.options
    }
}
_l.create = (e, t) => new _l({
    options: e,
    typeName: Q.ZodUnion,
    ...te(t)
});
function Hd(e, t) {
    const n = Zn(e)
      , r = Zn(t);
    if (e === t)
        return {
            valid: !0,
            data: e
        };
    if (n === $.object && r === $.object) {
        const i = le.objectKeys(t)
          , s = le.objectKeys(e).filter(a => i.indexOf(a) !== -1)
          , o = {
            ...e,
            ...t
        };
        for (const a of s) {
            const l = Hd(e[a], t[a]);
            if (!l.valid)
                return {
                    valid: !1
                };
            o[a] = l.data
        }
        return {
            valid: !0,
            data: o
        }
    } else if (n === $.array && r === $.array) {
        if (e.length !== t.length)
            return {
                valid: !1
            };
        const i = [];
        for (let s = 0; s < e.length; s++) {
            const o = e[s]
              , a = t[s]
              , l = Hd(o, a);
            if (!l.valid)
                return {
                    valid: !1
                };
            i.push(l.data)
        }
        return {
            valid: !0,
            data: i
        }
    } else
        return n === $.date && r === $.date && +e == +t ? {
            valid: !0,
            data: e
        } : {
            valid: !1
        }
}
class Rl extends oe {
    _parse(t) {
        const {status: n, ctx: r} = this._processInputParams(t)
          , i = (s, o) => {
            if (ry(s) || ry(o))
                return G;
            const a = Hd(s.value, o.value);
            return a.valid ? ((iy(s) || iy(o)) && n.dirty(),
            {
                status: n.value,
                value: a.data
            }) : (I(r, {
                code: j.invalid_intersection_types
            }),
            G)
        }
        ;
        return r.common.async ? Promise.all([this._def.left._parseAsync({
            data: r.data,
            path: r.path,
            parent: r
        }), this._def.right._parseAsync({
            data: r.data,
            path: r.path,
            parent: r
        })]).then( ([s,o]) => i(s, o)) : i(this._def.left._parseSync({
            data: r.data,
            path: r.path,
            parent: r
        }), this._def.right._parseSync({
            data: r.data,
            path: r.path,
            parent: r
        }))
    }
}
Rl.create = (e, t, n) => new Rl({
    left: e,
    right: t,
    typeName: Q.ZodIntersection,
    ...te(n)
});
class ni extends oe {
    _parse(t) {
        const {status: n, ctx: r} = this._processInputParams(t);
        if (r.parsedType !== $.array)
            return I(r, {
                code: j.invalid_type,
                expected: $.array,
                received: r.parsedType
            }),
            G;
        if (r.data.length < this._def.items.length)
            return I(r, {
                code: j.too_small,
                minimum: this._def.items.length,
                inclusive: !0,
                exact: !1,
                type: "array"
            }),
            G;
        !this._def.rest && r.data.length > this._def.items.length && (I(r, {
            code: j.too_big,
            maximum: this._def.items.length,
            inclusive: !0,
            exact: !1,
            type: "array"
        }),
        n.dirty());
        const s = [...r.data].map( (o, a) => {
            const l = this._def.items[a] || this._def.rest;
            return l ? l._parse(new Cr(r,o,r.path,a)) : null
        }
        ).filter(o => !!o);
        return r.common.async ? Promise.all(s).then(o => xt.mergeArray(n, o)) : xt.mergeArray(n, s)
    }
    get items() {
        return this._def.items
    }
    rest(t) {
        return new ni({
            ...this._def,
            rest: t
        })
    }
}
ni.create = (e, t) => {
    if (!Array.isArray(e))
        throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
    return new ni({
        items: e,
        typeName: Q.ZodTuple,
        rest: null,
        ...te(t)
    })
}
;
class hy extends oe {
    get keySchema() {
        return this._def.keyType
    }
    get valueSchema() {
        return this._def.valueType
    }
    _parse(t) {
        const {status: n, ctx: r} = this._processInputParams(t);
        if (r.parsedType !== $.map)
            return I(r, {
                code: j.invalid_type,
                expected: $.map,
                received: r.parsedType
            }),
            G;
        const i = this._def.keyType
          , s = this._def.valueType
          , o = [...r.data.entries()].map( ([a,l], u) => ({
            key: i._parse(new Cr(r,a,r.path,[u, "key"])),
            value: s._parse(new Cr(r,l,r.path,[u, "value"]))
        }));
        if (r.common.async) {
            const a = new Map;
            return Promise.resolve().then(async () => {
                for (const l of o) {
                    const u = await l.key
                      , c = await l.value;
                    if (u.status === "aborted" || c.status === "aborted")
                        return G;
                    (u.status === "dirty" || c.status === "dirty") && n.dirty(),
                    a.set(u.value, c.value)
                }
                return {
                    status: n.value,
                    value: a
                }
            }
            )
        } else {
            const a = new Map;
            for (const l of o) {
                const u = l.key
                  , c = l.value;
                if (u.status === "aborted" || c.status === "aborted")
                    return G;
                (u.status === "dirty" || c.status === "dirty") && n.dirty(),
                a.set(u.value, c.value)
            }
            return {
                status: n.value,
                value: a
            }
        }
    }
}
hy.create = (e, t, n) => new hy({
    valueType: t,
    keyType: e,
    typeName: Q.ZodMap,
    ...te(n)
});
class Ro extends oe {
    _parse(t) {
        const {status: n, ctx: r} = this._processInputParams(t);
        if (r.parsedType !== $.set)
            return I(r, {
                code: j.invalid_type,
                expected: $.set,
                received: r.parsedType
            }),
            G;
        const i = this._def;
        i.minSize !== null && r.data.size < i.minSize.value && (I(r, {
            code: j.too_small,
            minimum: i.minSize.value,
            type: "set",
            inclusive: !0,
            exact: !1,
            message: i.minSize.message
        }),
        n.dirty()),
        i.maxSize !== null && r.data.size > i.maxSize.value && (I(r, {
            code: j.too_big,
            maximum: i.maxSize.value,
            type: "set",
            inclusive: !0,
            exact: !1,
            message: i.maxSize.message
        }),
        n.dirty());
        const s = this._def.valueType;
        function o(l) {
            const u = new Set;
            for (const c of l) {
                if (c.status === "aborted")
                    return G;
                c.status === "dirty" && n.dirty(),
                u.add(c.value)
            }
            return {
                status: n.value,
                value: u
            }
        }
        const a = [...r.data.values()].map( (l, u) => s._parse(new Cr(r,l,r.path,u)));
        return r.common.async ? Promise.all(a).then(l => o(l)) : o(a)
    }
    min(t, n) {
        return new Ro({
            ...this._def,
            minSize: {
                value: t,
                message: U.toString(n)
            }
        })
    }
    max(t, n) {
        return new Ro({
            ...this._def,
            maxSize: {
                value: t,
                message: U.toString(n)
            }
        })
    }
    size(t, n) {
        return this.min(t, n).max(t, n)
    }
    nonempty(t) {
        return this.min(1, t)
    }
}
Ro.create = (e, t) => new Ro({
    valueType: e,
    minSize: null,
    maxSize: null,
    typeName: Q.ZodSet,
    ...te(t)
});
class py extends oe {
    get schema() {
        return this._def.getter()
    }
    _parse(t) {
        const {ctx: n} = this._processInputParams(t);
        return this._def.getter()._parse({
            data: n.data,
            path: n.path,
            parent: n
        })
    }
}
py.create = (e, t) => new py({
    getter: e,
    typeName: Q.ZodLazy,
    ...te(t)
});
class my extends oe {
    _parse(t) {
        if (t.data !== this._def.value) {
            const n = this._getOrReturnCtx(t);
            return I(n, {
                received: n.data,
                code: j.invalid_literal,
                expected: this._def.value
            }),
            G
        }
        return {
            status: "valid",
            value: t.data
        }
    }
    get value() {
        return this._def.value
    }
}
my.create = (e, t) => new my({
    value: e,
    typeName: Q.ZodLiteral,
    ...te(t)
});
function sS(e, t) {
    return new us({
        values: e,
        typeName: Q.ZodEnum,
        ...te(t)
    })
}
class us extends oe {
    _parse(t) {
        if (typeof t.data != "string") {
            const n = this._getOrReturnCtx(t)
              , r = this._def.values;
            return I(n, {
                expected: le.joinValues(r),
                received: n.parsedType,
                code: j.invalid_type
            }),
            G
        }
        if (this._cache || (this._cache = new Set(this._def.values)),
        !this._cache.has(t.data)) {
            const n = this._getOrReturnCtx(t)
              , r = this._def.values;
            return I(n, {
                received: n.data,
                code: j.invalid_enum_value,
                options: r
            }),
            G
        }
        return jt(t.data)
    }
    get options() {
        return this._def.values
    }
    get enum() {
        const t = {};
        for (const n of this._def.values)
            t[n] = n;
        return t
    }
    get Values() {
        const t = {};
        for (const n of this._def.values)
            t[n] = n;
        return t
    }
    get Enum() {
        const t = {};
        for (const n of this._def.values)
            t[n] = n;
        return t
    }
    extract(t, n=this._def) {
        return us.create(t, {
            ...this._def,
            ...n
        })
    }
    exclude(t, n=this._def) {
        return us.create(this.options.filter(r => !t.includes(r)), {
            ...this._def,
            ...n
        })
    }
}
us.create = sS;
class gy extends oe {
    _parse(t) {
        const n = le.getValidEnumValues(this._def.values)
          , r = this._getOrReturnCtx(t);
        if (r.parsedType !== $.string && r.parsedType !== $.number) {
            const i = le.objectValues(n);
            return I(r, {
                expected: le.joinValues(i),
                received: r.parsedType,
                code: j.invalid_type
            }),
            G
        }
        if (this._cache || (this._cache = new Set(le.getValidEnumValues(this._def.values))),
        !this._cache.has(t.data)) {
            const i = le.objectValues(n);
            return I(r, {
                received: r.data,
                code: j.invalid_enum_value,
                options: i
            }),
            G
        }
        return jt(t.data)
    }
    get enum() {
        return this._def.values
    }
}
gy.create = (e, t) => new gy({
    values: e,
    typeName: Q.ZodNativeEnum,
    ...te(t)
});
class Al extends oe {
    unwrap() {
        return this._def.type
    }
    _parse(t) {
        const {ctx: n} = this._processInputParams(t);
        if (n.parsedType !== $.promise && n.common.async === !1)
            return I(n, {
                code: j.invalid_type,
                expected: $.promise,
                received: n.parsedType
            }),
            G;
        const r = n.parsedType === $.promise ? n.data : Promise.resolve(n.data);
        return jt(r.then(i => this._def.type.parseAsync(i, {
            path: n.path,
            errorMap: n.common.contextualErrorMap
        })))
    }
}
Al.create = (e, t) => new Al({
    type: e,
    typeName: Q.ZodPromise,
    ...te(t)
});
class cs extends oe {
    innerType() {
        return this._def.schema
    }
    sourceType() {
        return this._def.schema._def.typeName === Q.ZodEffects ? this._def.schema.sourceType() : this._def.schema
    }
    _parse(t) {
        const {status: n, ctx: r} = this._processInputParams(t)
          , i = this._def.effect || null
          , s = {
            addIssue: o => {
                I(r, o),
                o.fatal ? n.abort() : n.dirty()
            }
            ,
            get path() {
                return r.path
            }
        };
        if (s.addIssue = s.addIssue.bind(s),
        i.type === "preprocess") {
            const o = i.transform(r.data, s);
            if (r.common.async)
                return Promise.resolve(o).then(async a => {
                    if (n.value === "aborted")
                        return G;
                    const l = await this._def.schema._parseAsync({
                        data: a,
                        path: r.path,
                        parent: r
                    });
                    return l.status === "aborted" ? G : l.status === "dirty" || n.value === "dirty" ? Fs(l.value) : l
                }
                );
            {
                if (n.value === "aborted")
                    return G;
                const a = this._def.schema._parseSync({
                    data: o,
                    path: r.path,
                    parent: r
                });
                return a.status === "aborted" ? G : a.status === "dirty" || n.value === "dirty" ? Fs(a.value) : a
            }
        }
        if (i.type === "refinement") {
            const o = a => {
                const l = i.refinement(a, s);
                if (r.common.async)
                    return Promise.resolve(l);
                if (l instanceof Promise)
                    throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
                return a
            }
            ;
            if (r.common.async === !1) {
                const a = this._def.schema._parseSync({
                    data: r.data,
                    path: r.path,
                    parent: r
                });
                return a.status === "aborted" ? G : (a.status === "dirty" && n.dirty(),
                o(a.value),
                {
                    status: n.value,
                    value: a.value
                })
            } else
                return this._def.schema._parseAsync({
                    data: r.data,
                    path: r.path,
                    parent: r
                }).then(a => a.status === "aborted" ? G : (a.status === "dirty" && n.dirty(),
                o(a.value).then( () => ({
                    status: n.value,
                    value: a.value
                }))))
        }
        if (i.type === "transform")
            if (r.common.async === !1) {
                const o = this._def.schema._parseSync({
                    data: r.data,
                    path: r.path,
                    parent: r
                });
                if (!ls(o))
                    return G;
                const a = i.transform(o.value, s);
                if (a instanceof Promise)
                    throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
                return {
                    status: n.value,
                    value: a
                }
            } else
                return this._def.schema._parseAsync({
                    data: r.data,
                    path: r.path,
                    parent: r
                }).then(o => ls(o) ? Promise.resolve(i.transform(o.value, s)).then(a => ({
                    status: n.value,
                    value: a
                })) : G);
        le.assertNever(i)
    }
}
cs.create = (e, t, n) => new cs({
    schema: e,
    typeName: Q.ZodEffects,
    effect: t,
    ...te(n)
});
cs.createWithPreprocess = (e, t, n) => new cs({
    schema: t,
    effect: {
        type: "preprocess",
        transform: e
    },
    typeName: Q.ZodEffects,
    ...te(n)
});
class pr extends oe {
    _parse(t) {
        return this._getType(t) === $.undefined ? jt(void 0) : this._def.innerType._parse(t)
    }
    unwrap() {
        return this._def.innerType
    }
}
pr.create = (e, t) => new pr({
    innerType: e,
    typeName: Q.ZodOptional,
    ...te(t)
});
class ds extends oe {
    _parse(t) {
        return this._getType(t) === $.null ? jt(null) : this._def.innerType._parse(t)
    }
    unwrap() {
        return this._def.innerType
    }
}
ds.create = (e, t) => new ds({
    innerType: e,
    typeName: Q.ZodNullable,
    ...te(t)
});
class Kd extends oe {
    _parse(t) {
        const {ctx: n} = this._processInputParams(t);
        let r = n.data;
        return n.parsedType === $.undefined && (r = this._def.defaultValue()),
        this._def.innerType._parse({
            data: r,
            path: n.path,
            parent: n
        })
    }
    removeDefault() {
        return this._def.innerType
    }
}
Kd.create = (e, t) => new Kd({
    innerType: e,
    typeName: Q.ZodDefault,
    defaultValue: typeof t.default == "function" ? t.default : () => t.default,
    ...te(t)
});
class Zd extends oe {
    _parse(t) {
        const {ctx: n} = this._processInputParams(t)
          , r = {
            ...n,
            common: {
                ...n.common,
                issues: []
            }
        }
          , i = this._def.innerType._parse({
            data: r.data,
            path: r.path,
            parent: {
                ...r
            }
        });
        return El(i) ? i.then(s => ({
            status: "valid",
            value: s.status === "valid" ? s.value : this._def.catchValue({
                get error() {
                    return new Nn(r.common.issues)
                },
                input: r.data
            })
        })) : {
            status: "valid",
            value: i.status === "valid" ? i.value : this._def.catchValue({
                get error() {
                    return new Nn(r.common.issues)
                },
                input: r.data
            })
        }
    }
    removeCatch() {
        return this._def.innerType
    }
}
Zd.create = (e, t) => new Zd({
    innerType: e,
    typeName: Q.ZodCatch,
    catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
    ...te(t)
});
class yy extends oe {
    _parse(t) {
        if (this._getType(t) !== $.nan) {
            const r = this._getOrReturnCtx(t);
            return I(r, {
                code: j.invalid_type,
                expected: $.nan,
                received: r.parsedType
            }),
            G
        }
        return {
            status: "valid",
            value: t.data
        }
    }
}
yy.create = e => new yy({
    typeName: Q.ZodNaN,
    ...te(e)
});
class Wj extends oe {
    _parse(t) {
        const {ctx: n} = this._processInputParams(t)
          , r = n.data;
        return this._def.type._parse({
            data: r,
            path: n.path,
            parent: n
        })
    }
    unwrap() {
        return this._def.type
    }
}
class Fh extends oe {
    _parse(t) {
        const {status: n, ctx: r} = this._processInputParams(t);
        if (r.common.async)
            return (async () => {
                const s = await this._def.in._parseAsync({
                    data: r.data,
                    path: r.path,
                    parent: r
                });
                return s.status === "aborted" ? G : s.status === "dirty" ? (n.dirty(),
                Fs(s.value)) : this._def.out._parseAsync({
                    data: s.value,
                    path: r.path,
                    parent: r
                })
            }
            )();
        {
            const i = this._def.in._parseSync({
                data: r.data,
                path: r.path,
                parent: r
            });
            return i.status === "aborted" ? G : i.status === "dirty" ? (n.dirty(),
            {
                status: "dirty",
                value: i.value
            }) : this._def.out._parseSync({
                data: i.value,
                path: r.path,
                parent: r
            })
        }
    }
    static create(t, n) {
        return new Fh({
            in: t,
            out: n,
            typeName: Q.ZodPipeline
        })
    }
}
class Gd extends oe {
    _parse(t) {
        const n = this._def.innerType._parse(t)
          , r = i => (ls(i) && (i.value = Object.freeze(i.value)),
        i);
        return El(n) ? n.then(i => r(i)) : r(n)
    }
    unwrap() {
        return this._def.innerType
    }
}
Gd.create = (e, t) => new Gd({
    innerType: e,
    typeName: Q.ZodReadonly,
    ...te(t)
});
Te.lazycreate;
var Q;
(function(e) {
    e.ZodString = "ZodString",
    e.ZodNumber = "ZodNumber",
    e.ZodNaN = "ZodNaN",
    e.ZodBigInt = "ZodBigInt",
    e.ZodBoolean = "ZodBoolean",
    e.ZodDate = "ZodDate",
    e.ZodSymbol = "ZodSymbol",
    e.ZodUndefined = "ZodUndefined",
    e.ZodNull = "ZodNull",
    e.ZodAny = "ZodAny",
    e.ZodUnknown = "ZodUnknown",
    e.ZodNever = "ZodNever",
    e.ZodVoid = "ZodVoid",
    e.ZodArray = "ZodArray",
    e.ZodObject = "ZodObject",
    e.ZodUnion = "ZodUnion",
    e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion",
    e.ZodIntersection = "ZodIntersection",
    e.ZodTuple = "ZodTuple",
    e.ZodRecord = "ZodRecord",
    e.ZodMap = "ZodMap",
    e.ZodSet = "ZodSet",
    e.ZodFunction = "ZodFunction",
    e.ZodLazy = "ZodLazy",
    e.ZodLiteral = "ZodLiteral",
    e.ZodEnum = "ZodEnum",
    e.ZodEffects = "ZodEffects",
    e.ZodNativeEnum = "ZodNativeEnum",
    e.ZodOptional = "ZodOptional",
    e.ZodNullable = "ZodNullable",
    e.ZodDefault = "ZodDefault",
    e.ZodCatch = "ZodCatch",
    e.ZodPromise = "ZodPromise",
    e.ZodBranded = "ZodBranded",
    e.ZodPipeline = "ZodPipeline",
    e.ZodReadonly = "ZodReadonly"
}
)(Q || (Q = {}));
const xa = sr.create;
kr.create;
fn.create;
const Hj = Te.create;
Te.strictCreate;
_l.create;
Rl.create;
ni.create;
us.create;
Al.create;
pr.create;
ds.create;
const Kj = Hj({
    name: xa().trim().min(1, "Name is required").max(100),
    email: xa().trim().email("Please enter a valid email").max(255),
    subject: xa().trim().min(1, "Subject is required").max(200),
    message: xa().trim().min(1, "Message is required").max(2e3)
})
  , Zj = () => {
    const e = w.useRef(null)
      , t = cu(e, {
        once: !0,
        margin: "-100px"
    })
      , [n,r] = w.useState(!1)
      , [i,s] = w.useState({})
      , o = a => {
        a.preventDefault();
        const l = new FormData(a.currentTarget)
          , u = {
            name: l.get("name"),
            email: l.get("email"),
            subject: l.get("subject"),
            message: l.get("message")
        }
          , c = Kj.safeParse(u);
        if (!c.success) {
            const d = {};
            c.error.errors.forEach(f => {
                f.path[0] && (d[f.path[0]] = f.message)
            }
            ),
            s(d);
            return
        }
        s({}),
        r(!0),
        B0({
            title: "Message sent",
            description: "We'll get back to you within 24 hours."
        })
    }
    ;
    return S.jsx("section", {
        id: "contact",
        className: "section-padding bg-section-alt",
        ref: e,
        children: S.jsxs("div", {
            className: "container-narrow",
            children: [S.jsxs(Je.div, {
                initial: {
                    opacity: 0,
                    y: 30
                },
                animate: t ? {
                    opacity: 1,
                    y: 0
                } : {},
                transition: {
                    duration: .6
                },
                className: "text-center mb-16",
                children: [S.jsx("p", {
                    className: "text-accent text-sm font-medium tracking-widest uppercase mb-4",
                    children: "Contact"
                }), S.jsx("h2", {
                    className: "font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4",
                    children: "Let's start a conversation"
                }), S.jsx("p", {
                    className: "text-muted-foreground max-w-xl mx-auto",
                    children: "Ready to bring your next project to life? We'd love to hear from you."
                })]
            }), S.jsxs("div", {
                className: "grid md:grid-cols-5 gap-12 lg:gap-16",
                children: [S.jsxs(Je.div, {
                    initial: {
                        opacity: 0,
                        x: -30
                    },
                    animate: t ? {
                        opacity: 1,
                        x: 0
                    } : {},
                    transition: {
                        duration: .6,
                        delay: .2
                    },
                    className: "md:col-span-2 space-y-8",
                    children: [S.jsxs("div", {
                        className: "flex items-start gap-4",
                        children: [S.jsx("div", {
                            className: "w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center flex-shrink-0",
                            children: S.jsx(Yk, {
                                className: "w-4 h-4 text-accent"
                            })
                        }), S.jsxs("div", {
                            children: [S.jsx("p", {
                                className: "text-sm font-medium text-foreground",
                                children: "Email"
                            }), S.jsx("p", {
                                className: "text-sm text-muted-foreground mt-1",
                                children: "hello@meridian.studio"
                            })]
                        })]
                    }), S.jsxs("div", {
                        className: "flex items-start gap-4",
                        children: [S.jsx("div", {
                            className: "w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center flex-shrink-0",
                            children: S.jsx(eT, {
                                className: "w-4 h-4 text-accent"
                            })
                        }), S.jsxs("div", {
                            children: [S.jsx("p", {
                                className: "text-sm font-medium text-foreground",
                                children: "Phone"
                            }), S.jsx("p", {
                                className: "text-sm text-muted-foreground mt-1",
                                children: "+1 (555) 123-4567"
                            })]
                        })]
                    }), S.jsxs("div", {
                        className: "flex items-start gap-4",
                        children: [S.jsx("div", {
                            className: "w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center flex-shrink-0",
                            children: S.jsx(Xk, {
                                className: "w-4 h-4 text-accent"
                            })
                        }), S.jsxs("div", {
                            children: [S.jsx("p", {
                                className: "text-sm font-medium text-foreground",
                                children: "Location"
                            }), S.jsxs("p", {
                                className: "text-sm text-muted-foreground mt-1",
                                children: ["123 Innovation Drive", S.jsx("br", {}), "San Francisco, CA 94102"]
                            })]
                        })]
                    })]
                }), S.jsx(Je.div, {
                    initial: {
                        opacity: 0,
                        x: 30
                    },
                    animate: t ? {
                        opacity: 1,
                        x: 0
                    } : {},
                    transition: {
                        duration: .6,
                        delay: .3
                    },
                    className: "md:col-span-3",
                    children: n ? S.jsxs("div", {
                        className: "bg-card rounded-lg border border-border p-12 text-center",
                        children: [S.jsx(Hk, {
                            className: "w-12 h-12 text-accent mx-auto mb-4"
                        }), S.jsx("h3", {
                            className: "font-display text-2xl text-foreground mb-2",
                            children: "Thank you!"
                        }), S.jsx("p", {
                            className: "text-muted-foreground",
                            children: "Your message has been received. We'll be in touch soon."
                        })]
                    }) : S.jsxs("form", {
                        onSubmit: o,
                        className: "space-y-5",
                        children: [S.jsxs("div", {
                            className: "grid sm:grid-cols-2 gap-5",
                            children: [S.jsxs("div", {
                                children: [S.jsx("label", {
                                    htmlFor: "name",
                                    className: "block text-sm font-medium text-foreground mb-1.5",
                                    children: "Name"
                                }), S.jsx("input", {
                                    id: "name",
                                    name: "name",
                                    type: "text",
                                    className: "w-full px-4 py-2.5 text-sm rounded-md border border-input bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/20 transition-shadow",
                                    placeholder: "Your name"
                                }), i.name && S.jsx("p", {
                                    className: "text-destructive text-xs mt-1",
                                    children: i.name
                                })]
                            }), S.jsxs("div", {
                                children: [S.jsx("label", {
                                    htmlFor: "email",
                                    className: "block text-sm font-medium text-foreground mb-1.5",
                                    children: "Email"
                                }), S.jsx("input", {
                                    id: "email",
                                    name: "email",
                                    type: "email",
                                    className: "w-full px-4 py-2.5 text-sm rounded-md border border-input bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/20 transition-shadow",
                                    placeholder: "you@company.com"
                                }), i.email && S.jsx("p", {
                                    className: "text-destructive text-xs mt-1",
                                    children: i.email
                                })]
                            })]
                        }), S.jsxs("div", {
                            children: [S.jsx("label", {
                                htmlFor: "subject",
                                className: "block text-sm font-medium text-foreground mb-1.5",
                                children: "Subject"
                            }), S.jsx("input", {
                                id: "subject",
                                name: "subject",
                                type: "text",
                                className: "w-full px-4 py-2.5 text-sm rounded-md border border-input bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/20 transition-shadow",
                                placeholder: "How can we help?"
                            }), i.subject && S.jsx("p", {
                                className: "text-destructive text-xs mt-1",
                                children: i.subject
                            })]
                        }), S.jsxs("div", {
                            children: [S.jsx("label", {
                                htmlFor: "message",
                                className: "block text-sm font-medium text-foreground mb-1.5",
                                children: "Message"
                            }), S.jsx("textarea", {
                                id: "message",
                                name: "message",
                                rows: 5,
                                className: "w-full px-4 py-2.5 text-sm rounded-md border border-input bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/20 transition-shadow resize-none",
                                placeholder: "Tell us about your project..."
                            }), i.message && S.jsx("p", {
                                className: "text-destructive text-xs mt-1",
                                children: i.message
                            })]
                        }), S.jsxs("button", {
                            type: "submit",
                            className: "inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200",
                            children: [S.jsx(tT, {
                                className: "w-4 h-4"
                            }), "Send Message"]
                        })]
                    })
                })]
            })]
        })
    })
}
  , Gj = () => {
    const e = new Date().getFullYear();
    return S.jsx("footer", {
        className: "bg-primary text-primary-foreground",
        children: S.jsxs("div", {
            className: "container-narrow px-6 md:px-12 lg:px-20 py-16",
            children: [S.jsxs("div", {
                className: "grid md:grid-cols-3 gap-10 mb-12",
                children: [S.jsxs("div", {
                    children: [S.jsx("h3", {
                        className: "font-display text-xl mb-4",
                        children: "Meridian"
                    }), S.jsx("p", {
                        className: "text-primary-foreground/60 text-sm leading-relaxed max-w-xs",
                        children: "A design and strategy studio crafting brands and digital experiences that inspire confidence and drive growth."
                    })]
                }), S.jsxs("div", {
                    children: [S.jsx("h4", {
                        className: "text-sm font-medium mb-4",
                        children: "Quick Links"
                    }), S.jsx("ul", {
                        className: "space-y-2",
                        children: ["About", "Services", "Portfolio", "Contact"].map(t => S.jsx("li", {
                            children: S.jsx("a", {
                                href: `#${t.toLowerCase()}`,
                                className: "text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors",
                                children: t
                            })
                        }, t))
                    })]
                }), S.jsxs("div", {
                    children: [S.jsx("h4", {
                        className: "text-sm font-medium mb-4",
                        children: "Connect"
                    }), S.jsx("div", {
                        className: "flex gap-3",
                        children: [{
                            icon: Qk,
                            label: "LinkedIn",
                            href: "#"
                        }, {
                            icon: nT,
                            label: "Twitter",
                            href: "#"
                        }, {
                            icon: Gk,
                            label: "Instagram",
                            href: "#"
                        }].map( ({icon: t, label: n, href: r}) => S.jsx("a", {
                            href: r,
                            "aria-label": n,
                            className: "w-9 h-9 rounded-md bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors",
                            children: S.jsx(t, {
                                className: "w-4 h-4"
                            })
                        }, n))
                    })]
                })]
            }), S.jsxs("div", {
                className: "border-t border-primary-foreground/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4",
                children: [S.jsxs("p", {
                    className: "text-xs text-primary-foreground/40",
                    children: ["© ", e, " Meridian Studio. All rights reserved."]
                }), S.jsxs("div", {
                    className: "flex gap-6",
                    children: [S.jsx("a", {
                        href: "#",
                        className: "text-xs text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors",
                        children: "Privacy Policy"
                    }), S.jsx("a", {
                        href: "#",
                        className: "text-xs text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors",
                        children: "Terms of Service"
                    })]
                })]
            })]
        })
    })
}
  , Qj = () => S.jsxs("main", {
    className: "min-h-screen",
    children: [S.jsx(h2, {}), S.jsx(lj, {}), S.jsx(dj, {}), S.jsx(hj, {}), S.jsx(vj, {}), S.jsx(Zj, {}), S.jsx(Gj, {})]
})
  , Yj = () => {
    const e = xw();
    return w.useEffect( () => {
        console.error("404 Error: User attempted to access non-existent route:", e.pathname)
    }
    , [e.pathname]),
    S.jsx("div", {
        className: "flex min-h-screen items-center justify-center bg-muted",
        children: S.jsxs("div", {
            className: "text-center",
            children: [S.jsx("h1", {
                className: "mb-4 text-4xl font-bold",
                children: "404"
            }), S.jsx("p", {
                className: "mb-4 text-xl text-muted-foreground",
                children: "Oops! Page not found"
            }), S.jsx("a", {
                href: "/",
                className: "text-primary underline hover:text-primary/90",
                children: "Return to Home"
            })]
        })
    })
}
  , Xj = new T_
  , qj = () => S.jsx(P_, {
    client: Xj,
    children: S.jsxs(t_, {
        children: [S.jsx(VT, {}), S.jsx(gE, {}), S.jsx(f2, {
            children: S.jsxs(u2, {
                children: [S.jsx(wd, {
                    path: "/",
                    element: S.jsx(Qj, {})
                }), S.jsx(wd, {
                    path: "*",
                    element: S.jsx(Yj, {})
                })]
            })
        })]
    })
});
$0(document.getElementById("root")).render(S.jsx(qj, {}));
