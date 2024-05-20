import * as vt from "react";
import F, { useContext as $r, useState as ts, useRef as Do, useEffect as jt, useLayoutEffect as ns, useCallback as rs } from "react";
import Io from "react-dom";
var Lt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function is(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
function os(n) {
  if (n.__esModule)
    return n;
  var e = n.default;
  if (typeof e == "function") {
    var t = function r() {
      return this instanceof r ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    t.prototype = e.prototype;
  } else
    t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(n).forEach(function(r) {
    var i = Object.getOwnPropertyDescriptor(n, r);
    Object.defineProperty(t, r, i.get ? i : {
      enumerable: !0,
      get: function() {
        return n[r];
      }
    });
  }), t;
}
var xr = { exports: {} }, Ht = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _i;
function as() {
  if (_i)
    return Ht;
  _i = 1;
  var n = F, e = Symbol.for("react.element"), t = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, i = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(u, g, T) {
    var f, d = {}, h = null, a = null;
    T !== void 0 && (h = "" + T), g.key !== void 0 && (h = "" + g.key), g.ref !== void 0 && (a = g.ref);
    for (f in g)
      r.call(g, f) && !o.hasOwnProperty(f) && (d[f] = g[f]);
    if (u && u.defaultProps)
      for (f in g = u.defaultProps, g)
        d[f] === void 0 && (d[f] = g[f]);
    return { $$typeof: e, type: u, key: h, ref: a, props: d, _owner: i.current };
  }
  return Ht.Fragment = t, Ht.jsx = l, Ht.jsxs = l, Ht;
}
var Wt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pi;
function ss() {
  return pi || (pi = 1, process.env.NODE_ENV !== "production" && function() {
    var n = F, e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), u = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), a = Symbol.for("react.offscreen"), s = Symbol.iterator, c = "@@iterator";
    function y(b) {
      if (b === null || typeof b != "object")
        return null;
      var R = s && b[s] || b[c];
      return typeof R == "function" ? R : null;
    }
    var w = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function p(b) {
      {
        for (var R = arguments.length, I = new Array(R > 1 ? R - 1 : 0), z = 1; z < R; z++)
          I[z - 1] = arguments[z];
        v("error", b, I);
      }
    }
    function v(b, R, I) {
      {
        var z = w.ReactDebugCurrentFrame, ae = z.getStackAddendum();
        ae !== "" && (R += "%s", I = I.concat([ae]));
        var ce = I.map(function(re) {
          return String(re);
        });
        ce.unshift("Warning: " + R), Function.prototype.apply.call(console[b], console, ce);
      }
    }
    var m = !1, _ = !1, E = !1, C = !1, S = !1, N;
    N = Symbol.for("react.module.reference");
    function D(b) {
      return !!(typeof b == "string" || typeof b == "function" || b === r || b === o || S || b === i || b === T || b === f || C || b === a || m || _ || E || typeof b == "object" && b !== null && (b.$$typeof === h || b.$$typeof === d || b.$$typeof === l || b.$$typeof === u || b.$$typeof === g || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      b.$$typeof === N || b.getModuleId !== void 0));
    }
    function P(b, R, I) {
      var z = b.displayName;
      if (z)
        return z;
      var ae = R.displayName || R.name || "";
      return ae !== "" ? I + "(" + ae + ")" : I;
    }
    function L(b) {
      return b.displayName || "Context";
    }
    function U(b) {
      if (b == null)
        return null;
      if (typeof b.tag == "number" && p("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof b == "function")
        return b.displayName || b.name || null;
      if (typeof b == "string")
        return b;
      switch (b) {
        case r:
          return "Fragment";
        case t:
          return "Portal";
        case o:
          return "Profiler";
        case i:
          return "StrictMode";
        case T:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof b == "object")
        switch (b.$$typeof) {
          case u:
            var R = b;
            return L(R) + ".Consumer";
          case l:
            var I = b;
            return L(I._context) + ".Provider";
          case g:
            return P(b, b.render, "ForwardRef");
          case d:
            var z = b.displayName || null;
            return z !== null ? z : U(b.type) || "Memo";
          case h: {
            var ae = b, ce = ae._payload, re = ae._init;
            try {
              return U(re(ce));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var q = Object.assign, k = 0, X, K, M, oe, A, B, Y;
    function V() {
    }
    V.__reactDisabledLog = !0;
    function W() {
      {
        if (k === 0) {
          X = console.log, K = console.info, M = console.warn, oe = console.error, A = console.group, B = console.groupCollapsed, Y = console.groupEnd;
          var b = {
            configurable: !0,
            enumerable: !0,
            value: V,
            writable: !0
          };
          Object.defineProperties(console, {
            info: b,
            log: b,
            warn: b,
            error: b,
            group: b,
            groupCollapsed: b,
            groupEnd: b
          });
        }
        k++;
      }
    }
    function Q() {
      {
        if (k--, k === 0) {
          var b = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: q({}, b, {
              value: X
            }),
            info: q({}, b, {
              value: K
            }),
            warn: q({}, b, {
              value: M
            }),
            error: q({}, b, {
              value: oe
            }),
            group: q({}, b, {
              value: A
            }),
            groupCollapsed: q({}, b, {
              value: B
            }),
            groupEnd: q({}, b, {
              value: Y
            })
          });
        }
        k < 0 && p("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var $ = w.ReactCurrentDispatcher, j;
    function Z(b, R, I) {
      {
        if (j === void 0)
          try {
            throw Error();
          } catch (ae) {
            var z = ae.stack.trim().match(/\n( *(at )?)/);
            j = z && z[1] || "";
          }
        return `
` + j + b;
      }
    }
    var ee = !1, J;
    {
      var me = typeof WeakMap == "function" ? WeakMap : Map;
      J = new me();
    }
    function O(b, R) {
      if (!b || ee)
        return "";
      {
        var I = J.get(b);
        if (I !== void 0)
          return I;
      }
      var z;
      ee = !0;
      var ae = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ce;
      ce = $.current, $.current = null, W();
      try {
        if (R) {
          var re = function() {
            throw Error();
          };
          if (Object.defineProperty(re.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(re, []);
            } catch (it) {
              z = it;
            }
            Reflect.construct(b, [], re);
          } else {
            try {
              re.call();
            } catch (it) {
              z = it;
            }
            b.call(re.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (it) {
            z = it;
          }
          b();
        }
      } catch (it) {
        if (it && z && typeof it.stack == "string") {
          for (var ne = it.stack.split(`
`), xe = z.stack.split(`
`), ge = ne.length - 1, ye = xe.length - 1; ge >= 1 && ye >= 0 && ne[ge] !== xe[ye]; )
            ye--;
          for (; ge >= 1 && ye >= 0; ge--, ye--)
            if (ne[ge] !== xe[ye]) {
              if (ge !== 1 || ye !== 1)
                do
                  if (ge--, ye--, ye < 0 || ne[ge] !== xe[ye]) {
                    var Ge = `
` + ne[ge].replace(" at new ", " at ");
                    return b.displayName && Ge.includes("<anonymous>") && (Ge = Ge.replace("<anonymous>", b.displayName)), typeof b == "function" && J.set(b, Ge), Ge;
                  }
                while (ge >= 1 && ye >= 0);
              break;
            }
        }
      } finally {
        ee = !1, $.current = ce, Q(), Error.prepareStackTrace = ae;
      }
      var It = b ? b.displayName || b.name : "", gi = It ? Z(It) : "";
      return typeof b == "function" && J.set(b, gi), gi;
    }
    function te(b, R, I) {
      return O(b, !1);
    }
    function Ae(b) {
      var R = b.prototype;
      return !!(R && R.isReactComponent);
    }
    function rt(b, R, I) {
      if (b == null)
        return "";
      if (typeof b == "function")
        return O(b, Ae(b));
      if (typeof b == "string")
        return Z(b);
      switch (b) {
        case T:
          return Z("Suspense");
        case f:
          return Z("SuspenseList");
      }
      if (typeof b == "object")
        switch (b.$$typeof) {
          case g:
            return te(b.render);
          case d:
            return rt(b.type, R, I);
          case h: {
            var z = b, ae = z._payload, ce = z._init;
            try {
              return rt(ce(ae), R, I);
            } catch {
            }
          }
        }
      return "";
    }
    var yn = Object.prototype.hasOwnProperty, ni = {}, ri = w.ReactDebugCurrentFrame;
    function bn(b) {
      if (b) {
        var R = b._owner, I = rt(b.type, b._source, R ? R.type : null);
        ri.setExtraStackFrame(I);
      } else
        ri.setExtraStackFrame(null);
    }
    function Ba(b, R, I, z, ae) {
      {
        var ce = Function.call.bind(yn);
        for (var re in b)
          if (ce(b, re)) {
            var ne = void 0;
            try {
              if (typeof b[re] != "function") {
                var xe = Error((z || "React class") + ": " + I + " type `" + re + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof b[re] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw xe.name = "Invariant Violation", xe;
              }
              ne = b[re](R, re, z, I, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ge) {
              ne = ge;
            }
            ne && !(ne instanceof Error) && (bn(ae), p("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", z || "React class", I, re, typeof ne), bn(null)), ne instanceof Error && !(ne.message in ni) && (ni[ne.message] = !0, bn(ae), p("Failed %s type: %s", I, ne.message), bn(null));
          }
      }
    }
    var ka = Array.isArray;
    function Zn(b) {
      return ka(b);
    }
    function Ma(b) {
      {
        var R = typeof Symbol == "function" && Symbol.toStringTag, I = R && b[Symbol.toStringTag] || b.constructor.name || "Object";
        return I;
      }
    }
    function Ua(b) {
      try {
        return ii(b), !1;
      } catch {
        return !0;
      }
    }
    function ii(b) {
      return "" + b;
    }
    function oi(b) {
      if (Ua(b))
        return p("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ma(b)), ii(b);
    }
    var $t = w.ReactCurrentOwner, Fa = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ai, si, Qn;
    Qn = {};
    function ja(b) {
      if (yn.call(b, "ref")) {
        var R = Object.getOwnPropertyDescriptor(b, "ref").get;
        if (R && R.isReactWarning)
          return !1;
      }
      return b.ref !== void 0;
    }
    function za(b) {
      if (yn.call(b, "key")) {
        var R = Object.getOwnPropertyDescriptor(b, "key").get;
        if (R && R.isReactWarning)
          return !1;
      }
      return b.key !== void 0;
    }
    function Ya(b, R) {
      if (typeof b.ref == "string" && $t.current && R && $t.current.stateNode !== R) {
        var I = U($t.current.type);
        Qn[I] || (p('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', U($t.current.type), b.ref), Qn[I] = !0);
      }
    }
    function $a(b, R) {
      {
        var I = function() {
          ai || (ai = !0, p("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", R));
        };
        I.isReactWarning = !0, Object.defineProperty(b, "key", {
          get: I,
          configurable: !0
        });
      }
    }
    function Ha(b, R) {
      {
        var I = function() {
          si || (si = !0, p("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", R));
        };
        I.isReactWarning = !0, Object.defineProperty(b, "ref", {
          get: I,
          configurable: !0
        });
      }
    }
    var Wa = function(b, R, I, z, ae, ce, re) {
      var ne = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: b,
        key: R,
        ref: I,
        props: re,
        // Record the component responsible for creating this element.
        _owner: ce
      };
      return ne._store = {}, Object.defineProperty(ne._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ne, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: z
      }), Object.defineProperty(ne, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ae
      }), Object.freeze && (Object.freeze(ne.props), Object.freeze(ne)), ne;
    };
    function Xa(b, R, I, z, ae) {
      {
        var ce, re = {}, ne = null, xe = null;
        I !== void 0 && (oi(I), ne = "" + I), za(R) && (oi(R.key), ne = "" + R.key), ja(R) && (xe = R.ref, Ya(R, ae));
        for (ce in R)
          yn.call(R, ce) && !Fa.hasOwnProperty(ce) && (re[ce] = R[ce]);
        if (b && b.defaultProps) {
          var ge = b.defaultProps;
          for (ce in ge)
            re[ce] === void 0 && (re[ce] = ge[ce]);
        }
        if (ne || xe) {
          var ye = typeof b == "function" ? b.displayName || b.name || "Unknown" : b;
          ne && $a(re, ye), xe && Ha(re, ye);
        }
        return Wa(b, ne, xe, ae, z, $t.current, re);
      }
    }
    var er = w.ReactCurrentOwner, li = w.ReactDebugCurrentFrame;
    function Dt(b) {
      if (b) {
        var R = b._owner, I = rt(b.type, b._source, R ? R.type : null);
        li.setExtraStackFrame(I);
      } else
        li.setExtraStackFrame(null);
    }
    var tr;
    tr = !1;
    function nr(b) {
      return typeof b == "object" && b !== null && b.$$typeof === e;
    }
    function di() {
      {
        if (er.current) {
          var b = U(er.current.type);
          if (b)
            return `

Check the render method of \`` + b + "`.";
        }
        return "";
      }
    }
    function Va(b) {
      return "";
    }
    var ci = {};
    function Ga(b) {
      {
        var R = di();
        if (!R) {
          var I = typeof b == "string" ? b : b.displayName || b.name;
          I && (R = `

Check the top-level render call using <` + I + ">.");
        }
        return R;
      }
    }
    function ui(b, R) {
      {
        if (!b._store || b._store.validated || b.key != null)
          return;
        b._store.validated = !0;
        var I = Ga(R);
        if (ci[I])
          return;
        ci[I] = !0;
        var z = "";
        b && b._owner && b._owner !== er.current && (z = " It was passed a child from " + U(b._owner.type) + "."), Dt(b), p('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', I, z), Dt(null);
      }
    }
    function hi(b, R) {
      {
        if (typeof b != "object")
          return;
        if (Zn(b))
          for (var I = 0; I < b.length; I++) {
            var z = b[I];
            nr(z) && ui(z, R);
          }
        else if (nr(b))
          b._store && (b._store.validated = !0);
        else if (b) {
          var ae = y(b);
          if (typeof ae == "function" && ae !== b.entries)
            for (var ce = ae.call(b), re; !(re = ce.next()).done; )
              nr(re.value) && ui(re.value, R);
        }
      }
    }
    function Ja(b) {
      {
        var R = b.type;
        if (R == null || typeof R == "string")
          return;
        var I;
        if (typeof R == "function")
          I = R.propTypes;
        else if (typeof R == "object" && (R.$$typeof === g || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        R.$$typeof === d))
          I = R.propTypes;
        else
          return;
        if (I) {
          var z = U(R);
          Ba(I, b.props, "prop", z, b);
        } else if (R.PropTypes !== void 0 && !tr) {
          tr = !0;
          var ae = U(R);
          p("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ae || "Unknown");
        }
        typeof R.getDefaultProps == "function" && !R.getDefaultProps.isReactClassApproved && p("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function qa(b) {
      {
        for (var R = Object.keys(b.props), I = 0; I < R.length; I++) {
          var z = R[I];
          if (z !== "children" && z !== "key") {
            Dt(b), p("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", z), Dt(null);
            break;
          }
        }
        b.ref !== null && (Dt(b), p("Invalid attribute `ref` supplied to `React.Fragment`."), Dt(null));
      }
    }
    function fi(b, R, I, z, ae, ce) {
      {
        var re = D(b);
        if (!re) {
          var ne = "";
          (b === void 0 || typeof b == "object" && b !== null && Object.keys(b).length === 0) && (ne += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var xe = Va();
          xe ? ne += xe : ne += di();
          var ge;
          b === null ? ge = "null" : Zn(b) ? ge = "array" : b !== void 0 && b.$$typeof === e ? (ge = "<" + (U(b.type) || "Unknown") + " />", ne = " Did you accidentally export a JSX literal instead of a component?") : ge = typeof b, p("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ge, ne);
        }
        var ye = Xa(b, R, I, ae, ce);
        if (ye == null)
          return ye;
        if (re) {
          var Ge = R.children;
          if (Ge !== void 0)
            if (z)
              if (Zn(Ge)) {
                for (var It = 0; It < Ge.length; It++)
                  hi(Ge[It], b);
                Object.freeze && Object.freeze(Ge);
              } else
                p("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              hi(Ge, b);
        }
        return b === r ? qa(ye) : Ja(ye), ye;
      }
    }
    function Ka(b, R, I) {
      return fi(b, R, I, !0);
    }
    function Za(b, R, I) {
      return fi(b, R, I, !1);
    }
    var Qa = Za, es = Ka;
    Wt.Fragment = r, Wt.jsx = Qa, Wt.jsxs = es;
  }()), Wt;
}
process.env.NODE_ENV === "production" ? xr.exports = as() : xr.exports = ss();
var x = xr.exports, xo = {};
(function(n) {
  (function() {
    var e = {
      direction: "horizontal",
      snapToLines: !0,
      linePosition: "auto",
      lineAlign: "start",
      textPosition: "auto",
      positionAlign: "auto",
      size: 100,
      alignment: "center"
    }, t = function(u) {
      u || (u = {
        "&amp": "&",
        "&lt": "<",
        "&gt": ">",
        "&lrm": "‎",
        "&rlm": "‏",
        "&nbsp": " "
      }), this.entities = u, this.parse = function(g, T) {
        g = g.replace(/\0/g, "�");
        var f = /\r\n|\r|\n/, d = Date.now(), h = 0, a = g.split(f), s = !1, c = [], y = [], w = [];
        function p(k, X) {
          w.push({ message: k, line: h + 1, col: X });
        }
        var v = a[h], m = v.length, _ = "WEBVTT", E = 0, C = _.length;
        for (v[0] === "\uFEFF" && (E = 1, C += 1), (m < C || v.indexOf(_) !== 0 + E || m > C && v[C] !== " " && v[C] !== "	") && p('No valid signature. (File needs to start with "WEBVTT".)'), h++; a[h] != "" && a[h] != null; ) {
          if (p("No blank line after the signature."), a[h].indexOf("-->") != -1) {
            s = !0;
            break;
          }
          h++;
        }
        for (; a[h] != null; ) {
          for (var S; !s && a[h] == ""; )
            h++;
          if (!s && a[h] == null)
            break;
          S = Object.assign({}, e, {
            id: "",
            startTime: 0,
            endTime: 0,
            pauseOnExit: !1,
            direction: "horizontal",
            snapToLines: !0,
            linePosition: "auto",
            lineAlign: "start",
            textPosition: "auto",
            positionAlign: "auto",
            size: 100,
            alignment: "center",
            text: "",
            tree: null
          });
          var N = !0;
          if (a[h].indexOf("-->") == -1) {
            if (S.id = a[h], /^NOTE($|[ \t])/.test(S.id)) {
              for (h++; a[h] != "" && a[h] != null; )
                a[h].indexOf("-->") != -1 && p("Cannot have timestamp in a comment."), h++;
              continue;
            }
            if (/^STYLE($|[ \t])/.test(S.id)) {
              var D = [], P = !1;
              for (h++; a[h] != "" && a[h] != null; )
                a[h].indexOf("-->") != -1 && (p("Cannot have timestamp in a style block."), P = !0), D.push(a[h]), h++;
              if (y.length) {
                p("Style blocks cannot appear after the first cue.");
                continue;
              }
              P || c.push(D.join(`
`));
              continue;
            }
            if (h++, a[h] == "" || a[h] == null) {
              p("Cue identifier cannot be standalone.");
              continue;
            }
            if (a[h].indexOf("-->") == -1) {
              N = !1, p("Cue identifier needs to be followed by timestamp.");
              continue;
            }
          }
          s = !1;
          var L = new r(a[h], p), U = 0;
          if (y.length > 0 && (U = y[y.length - 1].startTime), N && !L.parse(S, U)) {
            for (S = null, h++; a[h] != "" && a[h] != null; ) {
              if (a[h].indexOf("-->") != -1) {
                s = !0;
                break;
              }
              h++;
            }
            continue;
          }
          for (h++; a[h] != "" && a[h] != null; ) {
            if (a[h].indexOf("-->") != -1) {
              p("Blank line missing before cue."), s = !0;
              break;
            }
            S.text != "" && (S.text += `
`), S.text += a[h], h++;
          }
          var q = new i(S.text, p, T, u);
          S.tree = q.parse(S.startTime, S.endTime), y.push(S);
        }
        return y.sort(function(k, X) {
          return k.startTime < X.startTime ? -1 : k.startTime > X.startTime ? 1 : k.endTime > X.endTime ? -1 : k.endTime < X.endTime ? 1 : 0;
        }), { cues: y, errors: w, time: Date.now() - d, styles: c };
      };
    }, r = function(d, g) {
      var T = /[\u0020\t\f]/, f = /[^\u0020\t\f]/, d = d, h = 0, a = function(p) {
        g(p, h + 1);
      };
      function s(p) {
        for (; d[h] != null && p.test(d[h]); )
          h++;
      }
      function c(p) {
        for (var v = ""; d[h] != null && p.test(d[h]); )
          v += d[h], h++;
        return v;
      }
      function y() {
        var p = "minutes", v, m, _, E;
        if (d[h] == null) {
          a("No timestamp found.");
          return;
        }
        if (!/\d/.test(d[h])) {
          a("Timestamp must start with a character in the range 0-9.");
          return;
        }
        if (v = c(/\d/), (v.length > 2 || parseInt(v, 10) > 59) && (p = "hours"), d[h] != ":") {
          a("No time unit separator found.");
          return;
        }
        if (h++, m = c(/\d/), m.length != 2) {
          a("Must be exactly two digits.");
          return;
        }
        if (p == "hours" || d[h] == ":") {
          if (d[h] != ":") {
            a("No seconds found or minutes is greater than 59.");
            return;
          }
          if (h++, _ = c(/\d/), _.length != 2) {
            a("Must be exactly two digits.");
            return;
          }
        } else {
          if (v.length != 2) {
            a("Must be exactly two digits.");
            return;
          }
          _ = m, m = v, v = "0";
        }
        if (d[h] != ".") {
          a('No decimal separator (".") found.');
          return;
        }
        if (h++, E = c(/\d/), E.length != 3) {
          a("Milliseconds must be given in three digits.");
          return;
        }
        if (parseInt(m, 10) > 59) {
          a("You cannot have more than 59 minutes.");
          return;
        }
        if (parseInt(_, 10) > 59) {
          a("You cannot have more than 59 seconds.");
          return;
        }
        return parseInt(v, 10) * 60 * 60 + parseInt(m, 10) * 60 + parseInt(_, 10) + parseInt(E, 10) / 1e3;
      }
      function w(p, v) {
        for (var m = p.split(T), _ = [], E = 0; E < m.length; E++)
          if (m[E] != "") {
            var C = m[E].indexOf(":"), S = m[E].slice(0, C), N = m[E].slice(C + 1);
            if (_.indexOf(S) != -1 && a("Duplicate setting."), _.push(S), N == "") {
              a("No value for setting defined.");
              return;
            }
            if (S == "vertical") {
              if (N != "rl" && N != "lr") {
                a("Writing direction can only be set to 'rl' or 'rl'.");
                continue;
              }
              v.direction = N;
            } else if (S == "line") {
              if (/,/.test(N)) {
                var D = N.split(",");
                N = D[0];
                var P = D[1];
              }
              if (!/^[-\d](\d*)(\.\d+)?%?$/.test(N)) {
                a("Line position takes a number or percentage.");
                continue;
              }
              if (N.indexOf("-", 1) != -1) {
                a("Line position can only have '-' at the start.");
                continue;
              }
              if (N.indexOf("%") != -1 && N.indexOf("%") != N.length - 1) {
                a("Line position can only have '%' at the end.");
                continue;
              }
              if (N[0] == "-" && N[N.length - 1] == "%") {
                a("Line position cannot be a negative percentage.");
                continue;
              }
              var L = N, U = !1;
              if (N[N.length - 1] == "%" && (U = !0, L = N.slice(0, N.length - 1), parseInt(N, 10) > 100)) {
                a("Line position cannot be >100%.");
                continue;
              }
              if (L === "" || isNaN(L) || !isFinite(L)) {
                a("Line position needs to be a number");
                continue;
              }
              if (P !== void 0) {
                if (!["start", "center", "end"].includes(P)) {
                  a("Line alignment needs to be one of start, center or end");
                  continue;
                }
                v.lineAlign = P;
              }
              v.snapToLines = !U, v.linePosition = parseFloat(L), parseFloat(L).toString() !== L && (v.nonSerializable = !0);
            } else if (S == "position") {
              if (/,/.test(N)) {
                var D = N.split(",");
                N = D[0];
                var q = D[1];
              }
              if (N[N.length - 1] != "%") {
                a("Text position must be a percentage.");
                continue;
              }
              if (parseInt(N, 10) > 100 || parseInt(N, 10) < 0) {
                a("Text position needs to be between 0 and 100%.");
                continue;
              }
              if (L = N.slice(0, N.length - 1), L === "" || isNaN(L) || !isFinite(L)) {
                a("Line position needs to be a number");
                continue;
              }
              if (q !== void 0) {
                if (!["line-left", "center", "line-right"].includes(q)) {
                  a("Position alignment needs to be one of line-left, center or line-right");
                  continue;
                }
                v.positionAlign = q;
              }
              v.textPosition = parseFloat(L);
            } else if (S == "size") {
              if (N[N.length - 1] != "%") {
                a("Size must be a percentage.");
                continue;
              }
              if (parseInt(N, 10) > 100) {
                a("Size cannot be >100%.");
                continue;
              }
              var k = N.slice(0, N.length - 1);
              if (k === void 0 || k === "" || isNaN(k)) {
                a("Size needs to be a number"), k = 100;
                continue;
              } else if (k = parseFloat(k), k < 0 || k > 100) {
                a("Size needs to be between 0 and 100%.");
                continue;
              }
              v.size = k;
            } else if (S == "align") {
              var X = ["start", "center", "end", "left", "right"];
              if (X.indexOf(N) == -1) {
                a("Alignment can only be set to one of " + X.join(", ") + ".");
                continue;
              }
              v.alignment = N;
            } else
              a("Invalid setting.");
          }
      }
      this.parse = function(p, v) {
        if (s(T), p.startTime = y(), p.startTime != null) {
          if (p.startTime < v && a("Start timestamp is not greater than or equal to start timestamp of previous cue."), f.test(d[h]) && a("Timestamp not separated from '-->' by whitespace."), s(T), d[h] != "-") {
            a("No valid timestamp separator found.");
            return;
          }
          if (h++, d[h] != "-") {
            a("No valid timestamp separator found.");
            return;
          }
          if (h++, d[h] != ">") {
            a("No valid timestamp separator found.");
            return;
          }
          if (h++, f.test(d[h]) && a("'-->' not separated from timestamp by whitespace."), s(T), p.endTime = y(), p.endTime != null)
            return p.endTime <= p.startTime && a("End timestamp is not greater than start timestamp."), f.test(d[h]), s(T), w(d.substring(h), p), !0;
        }
      }, this.parseTimestamp = function() {
        var p = y();
        if (d[h] != null) {
          a("Timestamp must not have trailing characters.");
          return;
        }
        return p;
      };
    }, i = function(h, g, T, f) {
      this.entities = f;
      var d = this, h = h, a = 0, s = function(y) {
        T != "metadata" && g(y, a + 1);
      };
      this.parse = function(y, w) {
        function p(L) {
          const U = { ...L };
          return L.children && (U.children = L.children.map(p)), U.parent && delete U.parent, U;
        }
        var v = { children: [] }, m = v, _ = [];
        function E(L) {
          m.children.push({ type: "object", name: L[1], classes: L[2], children: [], parent: m }), m = m.children[m.children.length - 1];
        }
        function C(L) {
          for (var U = m; U; ) {
            if (U.name == L)
              return !0;
            U = U.parent;
          }
        }
        for (; h[a] != null; ) {
          var S = c();
          if (S[0] == "text")
            m.children.push({ type: "text", value: S[1], parent: m });
          else if (S[0] == "start tag") {
            T == "chapters" && s("Start tags not allowed in chapter title text.");
            var N = S[1];
            N != "v" && N != "lang" && S[3] != "" && s("Only <v> and <lang> can have an annotation."), N == "c" || N == "i" || N == "b" || N == "u" || N == "ruby" || N == "rt" && m.name == "ruby" ? E(S) : N == "v" ? (C("v") && s("<v> cannot be nested inside itself."), E(S), m.value = S[3], S[3] || s("<v> requires an annotation.")) : N == "lang" ? (E(S), m.value = S[3]) : s("Incorrect start tag.");
          } else if (S[0] == "end tag")
            T == "chapters" && s("End tags not allowed in chapter title text."), S[1] == m.name ? m = m.parent : S[1] == "ruby" && m.name == "rt" ? m = m.parent.parent : s("Incorrect end tag.");
          else if (S[0] == "timestamp") {
            T == "chapters" && s("Timestamp not allowed in chapter title text.");
            var D = new r(S[1], s), P = D.parseTimestamp();
            P != null && ((P <= y || P >= w) && s("Timestamp must be between start timestamp and end timestamp."), _.length > 0 && _[_.length - 1] >= P && s("Timestamp must be greater than any previous timestamp."), m.children.push({ type: "timestamp", value: P, parent: m }), _.push(P));
          }
        }
        for (; m.parent; )
          m.name != "v" && s("Required end tag missing."), m = m.parent;
        return p(v);
      };
      function c() {
        for (var y = "data", w = "", p = "", v = []; h[a - 1] != null || a == 0; ) {
          var m = h[a];
          if (y == "data")
            if (m == "&")
              p = m, y = "escape";
            else if (m == "<" && w == "")
              y = "tag";
            else {
              if (m == "<" || m == null)
                return ["text", w];
              w += m;
            }
          else if (y == "escape")
            if (m == "<" || m == null) {
              s("Incorrect escape.");
              let _;
              return (_ = p.match(/^&#([0-9]+)$/)) ? w += String.fromCharCode(_[1]) : d.entities[p] ? w += d.entities[p] : w += p, ["text", w];
            } else if (m == "&")
              s("Incorrect escape."), w += p, p = m;
            else if (/[a-z#0-9]/i.test(m))
              p += m;
            else if (m == ";") {
              let _;
              (_ = p.match(/^&#(x?[0-9]+)$/)) ? w += String.fromCharCode("0" + _[1]) : d.entities[p + m] ? w += d.entities[p + m] : (_ = Object.keys(f).find((E) => p.startsWith(E))) ? w += d.entities[_] + p.slice(_.length) + m : (s("Incorrect escape."), w += p + ";"), y = "data";
            } else
              s("Incorrect escape."), w += p + m, y = "data";
          else if (y == "tag")
            if (m == "	" || m == `
` || m == "\f" || m == " ")
              y = "start tag annotation";
            else if (m == ".")
              y = "start tag class";
            else if (m == "/")
              y = "end tag";
            else if (/\d/.test(m))
              w = m, y = "timestamp tag";
            else {
              if (m == ">" || m == null)
                return m == ">" && a++, ["start tag", "", [], ""];
              w = m, y = "start tag";
            }
          else if (y == "start tag")
            if (m == "	" || m == "\f" || m == " ")
              y = "start tag annotation";
            else if (m == `
`)
              p = m, y = "start tag annotation";
            else if (m == ".")
              y = "start tag class";
            else {
              if (m == ">" || m == null)
                return m == ">" && a++, ["start tag", w, [], ""];
              w += m;
            }
          else if (y == "start tag class")
            if (m == "	" || m == "\f" || m == " ")
              p && v.push(p), p = "", y = "start tag annotation";
            else if (m == `
`)
              p && v.push(p), p = m, y = "start tag annotation";
            else if (m == ".")
              p && v.push(p), p = "";
            else {
              if (m == ">" || m == null)
                return m == ">" && a++, p && v.push(p), ["start tag", w, v, ""];
              p += m;
            }
          else if (y == "start tag annotation") {
            if (m == ">" || m == null)
              return m == ">" && a++, p = p.split(/[\u0020\t\f\r\n]+/).filter(function(_) {
                if (_)
                  return !0;
              }).join(" "), ["start tag", w, v, p];
            p += m;
          } else if (y == "end tag") {
            if (m == ">" || m == null)
              return m == ">" && a++, ["end tag", w];
            w += m;
          } else if (y == "timestamp tag") {
            if (m == ">" || m == null)
              return m == ">" && a++, ["timestamp", w];
            w += m;
          } else
            s("Never happens.");
          a++;
        }
      }
    }, o = function() {
      function u(h) {
        const a = ("00" + (h - Math.floor(h)).toFixed(3) * 1e3).slice(-3);
        let s = 0, c = 0, y = 0;
        return h >= 3600 && (s = Math.floor(h / 3600)), c = Math.floor((h - 3600 * s) / 60), y = Math.floor(h - 3600 * s - 60 * c), (s ? s + ":" : "") + ("" + c).padStart(2, "0") + ":" + ("" + y).padStart(2, "0") + "." + a;
      }
      function g(h) {
        var a = "";
        const s = Object.keys(e).filter((c) => h[c] !== e[c]);
        return s.includes("direction") && (a += " vertical:" + h.direction), s.includes("alignment") && (a += " align:" + h.alignment), s.includes("size") && (a += " size:" + h.size + "%"), (s.includes("lineAlign") || s.includes("linePosition")) && (a += " line:" + h.linePosition + (h.snapToLines ? "" : "%") + (h.lineAlign && h.lineAlign != e.lineAlign ? "," + h.lineAlign : "")), (s.includes("textPosition") || s.includes("positionAlign")) && (a += " position:" + h.textPosition + "%" + (h.positionAlign && h.positionAlign !== e.positionAlign ? "," + h.positionAlign : "")), a;
      }
      function T(h) {
        for (var a = "", s = 0; s < h.length; s++) {
          var c = h[s];
          if (c.type == "text")
            a += c.value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
          else if (c.type == "object") {
            if (a += "<" + c.name, c.classes)
              for (var y = 0; y < c.classes.length; y++)
                a += "." + c.classes[y];
            c.value && (a += " " + c.value), a += ">", c.children && (a += T(c.children)), a += "</" + c.name + ">";
          } else
            c.type == "timestamp" ? a += "<" + u(c.value) + ">" : a += "<" + c.value + ">";
        }
        return a;
      }
      function f(h) {
        return (h.id !== void 0 ? h.id + `
` : "") + u(h.startTime) + " --> " + u(h.endTime) + g(h) + `
` + T(h.tree.children) + `

`;
      }
      function d(h) {
        return `STYLE
` + h + `

`;
      }
      this.serialize = function(h, a) {
        var s = `WEBVTT

`;
        if (a)
          for (var c = 0; c < a.length; c++)
            s += d(a[c]);
        for (var c = 0; c < h.length; c++)
          s += f(h[c]);
        return s;
      };
    };
    function l(u) {
      u.WebVTTParser = t, u.WebVTTCueTimingsAndSettingsParser = r, u.WebVTTCueTextParser = i, u.WebVTTSerializer = o;
    }
    typeof window < "u" && l(window), l(n);
  })();
})(xo);
let Tn;
const ls = new Uint8Array(16);
function ds() {
  if (!Tn && (Tn = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Tn))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return Tn(ls);
}
const Se = [];
for (let n = 0; n < 256; ++n)
  Se.push((n + 256).toString(16).slice(1));
function cs(n, e = 0) {
  return Se[n[e + 0]] + Se[n[e + 1]] + Se[n[e + 2]] + Se[n[e + 3]] + "-" + Se[n[e + 4]] + Se[n[e + 5]] + "-" + Se[n[e + 6]] + Se[n[e + 7]] + "-" + Se[n[e + 8]] + Se[n[e + 9]] + "-" + Se[n[e + 10]] + Se[n[e + 11]] + Se[n[e + 12]] + Se[n[e + 13]] + Se[n[e + 14]] + Se[n[e + 15]];
}
const us = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), mi = {
  randomUUID: us
};
function yi(n, e, t) {
  if (mi.randomUUID && !e && !n)
    return mi.randomUUID();
  n = n || {};
  const r = n.random || (n.rng || ds)();
  return r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, cs(r);
}
var Hr = {}, In = {}, nt = {}, ve = {};
Object.defineProperty(ve, "__esModule", { value: !0 });
ve.Orientation = void 0;
class lt {
  static flip(e) {
    return e === lt.HORZ ? lt.VERT : lt.HORZ;
  }
  /** @internal */
  constructor(e) {
    this._name = e;
  }
  getName() {
    return this._name;
  }
  toString() {
    return this._name;
  }
}
ve.Orientation = lt;
lt.HORZ = new lt("horz");
lt.VERT = new lt("vert");
var Ie = {};
Object.defineProperty(Ie, "__esModule", { value: !0 });
Ie.Rect = void 0;
const hs = ve;
class zt {
  static empty() {
    return new zt(0, 0, 0, 0);
  }
  constructor(e, t, r, i) {
    this.x = e, this.y = t, this.width = r, this.height = i;
  }
  static fromElement(e) {
    let { x: t, y: r, width: i, height: o } = e.getBoundingClientRect();
    return new zt(t, r, i, o);
  }
  clone() {
    return new zt(this.x, this.y, this.width, this.height);
  }
  equals(e) {
    return this.x === (e == null ? void 0 : e.x) && this.y === (e == null ? void 0 : e.y) && this.width === (e == null ? void 0 : e.width) && this.height === (e == null ? void 0 : e.height);
  }
  getBottom() {
    return this.y + this.height;
  }
  getRight() {
    return this.x + this.width;
  }
  getCenter() {
    return { x: this.x + this.width / 2, y: this.y + this.height / 2 };
  }
  positionElement(e, t) {
    this.styleWithPosition(e.style, t);
  }
  styleWithPosition(e, t = "absolute") {
    return e.left = this.x + "px", e.top = this.y + "px", e.width = Math.max(0, this.width) + "px", e.height = Math.max(0, this.height) + "px", e.position = t, e;
  }
  contains(e, t) {
    return this.x <= e && e <= this.getRight() && this.y <= t && t <= this.getBottom();
  }
  removeInsets(e) {
    return new zt(this.x + e.left, this.y + e.top, Math.max(0, this.width - e.left - e.right), Math.max(0, this.height - e.top - e.bottom));
  }
  centerInRect(e) {
    this.x = (e.width - this.width) / 2, this.y = (e.height - this.height) / 2;
  }
  /** @internal */
  _getSize(e) {
    let t = this.width;
    return e === hs.Orientation.VERT && (t = this.height), t;
  }
  toString() {
    return "(Rect: x=" + this.x + ", y=" + this.y + ", width=" + this.width + ", height=" + this.height + ")";
  }
}
Ie.Rect = zt;
Object.defineProperty(nt, "__esModule", { value: !0 });
nt.DockLocation = void 0;
const on = ve, Je = Ie;
class ie {
  /** @internal */
  static getByName(e) {
    return ie.values[e];
  }
  /** @internal */
  static getLocation(e, t, r) {
    if (t = (t - e.x) / e.width, r = (r - e.y) / e.height, t >= 0.25 && t < 0.75 && r >= 0.25 && r < 0.75)
      return ie.CENTER;
    const i = r >= t, o = r >= 1 - t;
    return i ? o ? ie.BOTTOM : ie.LEFT : o ? ie.RIGHT : ie.TOP;
  }
  /** @internal */
  constructor(e, t, r) {
    this._name = e, this._orientation = t, this._indexPlus = r, ie.values[this._name] = this;
  }
  getName() {
    return this._name;
  }
  getOrientation() {
    return this._orientation;
  }
  /** @internal */
  getDockRect(e) {
    return this === ie.TOP ? new Je.Rect(e.x, e.y, e.width, e.height / 2) : this === ie.BOTTOM ? new Je.Rect(e.x, e.getBottom() - e.height / 2, e.width, e.height / 2) : this === ie.LEFT ? new Je.Rect(e.x, e.y, e.width / 2, e.height) : this === ie.RIGHT ? new Je.Rect(e.getRight() - e.width / 2, e.y, e.width / 2, e.height) : e.clone();
  }
  /** @internal */
  split(e, t) {
    if (this === ie.TOP) {
      const r = new Je.Rect(e.x, e.y, e.width, t), i = new Je.Rect(e.x, e.y + t, e.width, e.height - t);
      return { start: r, end: i };
    } else if (this === ie.LEFT) {
      const r = new Je.Rect(e.x, e.y, t, e.height), i = new Je.Rect(e.x + t, e.y, e.width - t, e.height);
      return { start: r, end: i };
    }
    if (this === ie.RIGHT) {
      const r = new Je.Rect(e.getRight() - t, e.y, t, e.height), i = new Je.Rect(e.x, e.y, e.width - t, e.height);
      return { start: r, end: i };
    } else {
      const r = new Je.Rect(e.x, e.getBottom() - t, e.width, t), i = new Je.Rect(e.x, e.y, e.width, e.height - t);
      return { start: r, end: i };
    }
  }
  /** @internal */
  reflect() {
    return this === ie.TOP ? ie.BOTTOM : this === ie.LEFT ? ie.RIGHT : this === ie.RIGHT ? ie.LEFT : ie.TOP;
  }
  toString() {
    return "(DockLocation: name=" + this._name + ", orientation=" + this._orientation + ")";
  }
}
nt.DockLocation = ie;
ie.values = {};
ie.TOP = new ie("top", on.Orientation.VERT, 0);
ie.BOTTOM = new ie("bottom", on.Orientation.VERT, 1);
ie.LEFT = new ie("left", on.Orientation.HORZ, 0);
ie.RIGHT = new ie("right", on.Orientation.HORZ, 1);
ie.CENTER = new ie("center", on.Orientation.VERT, 0);
var At = {};
Object.defineProperty(At, "__esModule", { value: !0 });
At.DragDrop = void 0;
const fs = Ie, gs = !!(typeof window < "u" && window.document && window.document.createElement);
class Pr {
  /** @internal */
  constructor() {
    this._manualGlassManagement = !1, this._startX = 0, this._startY = 0, this._dragDepth = 0, this._glassShowing = !1, this._dragging = !1, this._active = !1, gs && (this._glass = document.createElement("div"), this._glass.style.zIndex = "998", this._glass.style.backgroundColor = "transparent", this._glass.style.outline = "none"), this._defaultGlassCursor = "default", this._onMouseMove = this._onMouseMove.bind(this), this._onMouseUp = this._onMouseUp.bind(this), this._onKeyPress = this._onKeyPress.bind(this), this._onDragCancel = this._onDragCancel.bind(this), this._onDragEnter = this._onDragEnter.bind(this), this._onDragLeave = this._onDragLeave.bind(this), this.resizeGlass = this.resizeGlass.bind(this), this._lastClick = 0, this._clickX = 0, this._clickY = 0;
  }
  // if you add the glass pane then you should remove it
  addGlass(e) {
    var t;
    this._glassShowing ? this._manualGlassManagement = !0 : (this._document || (this._document = window.document), this._rootElement || (this._rootElement = this._document.body), this.resizeGlass(), (t = this._document.defaultView) === null || t === void 0 || t.addEventListener("resize", this.resizeGlass), this._document.body.appendChild(this._glass), this._glass.tabIndex = -1, this._glass.focus(), this._glass.addEventListener("keydown", this._onKeyPress), this._glass.addEventListener("dragenter", this._onDragEnter, { passive: !1 }), this._glass.addEventListener("dragover", this._onMouseMove, { passive: !1 }), this._glass.addEventListener("dragleave", this._onDragLeave, { passive: !1 }), this._glassShowing = !0, this._fDragCancel = e, this._manualGlassManagement = !1);
  }
  resizeGlass() {
    fs.Rect.fromElement(this._rootElement).positionElement(this._glass, "fixed");
  }
  hideGlass() {
    var e;
    this._glassShowing && (this._document.body.removeChild(this._glass), (e = this._document.defaultView) === null || e === void 0 || e.removeEventListener("resize", this.resizeGlass), this._glassShowing = !1, this._document = void 0, this._rootElement = void 0, this.setGlassCursorOverride(void 0));
  }
  /** @internal */
  _updateGlassCursor() {
    var e;
    this._glass.style.cursor = (e = this._glassCursorOverride) !== null && e !== void 0 ? e : this._defaultGlassCursor;
  }
  /** @internal */
  _setDefaultGlassCursor(e) {
    this._defaultGlassCursor = e, this._updateGlassCursor();
  }
  setGlassCursorOverride(e) {
    this._glassCursorOverride = e, this._updateGlassCursor();
  }
  startDrag(e, t, r, i, o, l, u, g, T) {
    if (e && this._lastEvent && this._lastEvent.type.startsWith("touch") && e.type.startsWith("mouse") && e.timeStamp - this._lastEvent.timeStamp < 500 || this._dragging)
      return;
    this._lastEvent = e, g ? this._document = g : this._document = window.document, T ? this._rootElement = T : this._rootElement = this._document.body;
    const f = this._getLocationEvent(e);
    this.addGlass(o), e ? (this._startX = f.clientX, this._startY = f.clientY, (!window.matchMedia || window.matchMedia("(pointer: fine)").matches) && this._setDefaultGlassCursor(getComputedStyle(e.target).cursor), this._stopPropagation(e), this._preventDefault(e)) : (this._startX = 0, this._startY = 0, this._setDefaultGlassCursor("default")), this._dragging = !1, this._fDragStart = t, this._fDragMove = r, this._fDragEnd = i, this._fDragCancel = o, this._fClick = l, this._fDblClick = u, this._active = !0, (e == null ? void 0 : e.type) === "dragenter" ? (this._dragDepth = 1, this._rootElement.addEventListener("dragenter", this._onDragEnter, { passive: !1 }), this._rootElement.addEventListener("dragover", this._onMouseMove, { passive: !1 }), this._rootElement.addEventListener("dragleave", this._onDragLeave, { passive: !1 }), this._document.addEventListener("dragend", this._onDragCancel, { passive: !1 }), this._document.addEventListener("drop", this._onMouseUp, { passive: !1 })) : (this._document.addEventListener("mouseup", this._onMouseUp, { passive: !1 }), this._document.addEventListener("mousemove", this._onMouseMove, { passive: !1 }), this._document.addEventListener("touchend", this._onMouseUp, { passive: !1 }), this._document.addEventListener("touchmove", this._onMouseMove, { passive: !1 }));
  }
  isDragging() {
    return this._dragging;
  }
  isActive() {
    return this._active;
  }
  toString() {
    return "(DragDrop: startX=" + this._startX + ", startY=" + this._startY + ", dragging=" + this._dragging + ")";
  }
  /** @internal */
  _onKeyPress(e) {
    e.code === "Escape" && this._onDragCancel();
  }
  /** @internal */
  _onDragCancel() {
    this._rootElement.removeEventListener("dragenter", this._onDragEnter), this._rootElement.removeEventListener("dragover", this._onMouseMove), this._rootElement.removeEventListener("dragleave", this._onDragLeave), this._document.removeEventListener("dragend", this._onDragCancel), this._document.removeEventListener("drop", this._onMouseUp), this._document.removeEventListener("mousemove", this._onMouseMove), this._document.removeEventListener("mouseup", this._onMouseUp), this._document.removeEventListener("touchend", this._onMouseUp), this._document.removeEventListener("touchmove", this._onMouseMove), this.hideGlass(), this._fDragCancel !== void 0 && this._fDragCancel(this._dragging), this._dragging = !1, this._active = !1;
  }
  /** @internal */
  _getLocationEvent(e) {
    let t = e;
    return e && e.touches && (t = e.touches[0]), t;
  }
  /** @internal */
  _getLocationEventEnd(e) {
    let t = e;
    return e.changedTouches && (t = e.changedTouches[0]), t;
  }
  /** @internal */
  _stopPropagation(e) {
    e.stopPropagation && e.stopPropagation();
  }
  /** @internal */
  _preventDefault(e) {
    return e.preventDefault && e.cancelable && e.preventDefault(), e;
  }
  /** @internal */
  _onMouseMove(e) {
    this._lastEvent = e;
    const t = this._getLocationEvent(e);
    return this._stopPropagation(e), this._preventDefault(e), !this._dragging && (Math.abs(this._startX - t.clientX) > 5 || Math.abs(this._startY - t.clientY) > 5) && (this._dragging = !0, this._fDragStart && (this._setDefaultGlassCursor("move"), this._dragging = this._fDragStart({ clientX: this._startX, clientY: this._startY }))), this._dragging && this._fDragMove && this._fDragMove(t), !1;
  }
  /** @internal */
  _onMouseUp(e) {
    this._lastEvent = e;
    const t = this._getLocationEventEnd(e);
    if (this._stopPropagation(e), this._preventDefault(e), this._active = !1, this._rootElement.removeEventListener("dragenter", this._onDragEnter), this._rootElement.removeEventListener("dragover", this._onMouseMove), this._rootElement.removeEventListener("dragleave", this._onDragLeave), this._document.removeEventListener("dragend", this._onDragCancel), this._document.removeEventListener("drop", this._onMouseUp), this._document.removeEventListener("mousemove", this._onMouseMove), this._document.removeEventListener("mouseup", this._onMouseUp), this._document.removeEventListener("touchend", this._onMouseUp), this._document.removeEventListener("touchmove", this._onMouseMove), this._manualGlassManagement || this.hideGlass(), this._dragging)
      this._dragging = !1, this._fDragEnd && this._fDragEnd(e);
    else if (this._fDragCancel && this._fDragCancel(this._dragging), Math.abs(this._startX - t.clientX) <= 5 && Math.abs(this._startY - t.clientY) <= 5) {
      let r = !1;
      const i = (/* @__PURE__ */ new Date()).getTime();
      Math.abs(this._clickX - t.clientX) <= 5 && Math.abs(this._clickY - t.clientY) <= 5 && i - this._lastClick < 500 && this._fDblClick && (this._fDblClick(e), r = !0), !r && this._fClick && this._fClick(e), this._lastClick = i, this._clickX = t.clientX, this._clickY = t.clientY;
    }
    return !1;
  }
  /** @internal */
  _onDragEnter(e) {
    return this._preventDefault(e), this._stopPropagation(e), this._dragDepth++, !1;
  }
  /** @internal */
  _onDragLeave(e) {
    return this._preventDefault(e), this._stopPropagation(e), this._dragDepth--, this._dragDepth <= 0 && this._onDragCancel(), !1;
  }
}
At.DragDrop = Pr;
Pr.instance = new Pr();
var Ve = {}, an = {};
Object.defineProperty(an, "__esModule", { value: !0 });
an.Action = void 0;
class _s {
  constructor(e, t) {
    this.type = e, this.data = t;
  }
}
an.Action = _s;
Object.defineProperty(Ve, "__esModule", { value: !0 });
Ve.Actions = void 0;
const Ue = an;
class de {
  /**
   * Adds a tab node to the given tabset node
   * @param json the json for the new tab node e.g {type:"tab", component:"table"}
   * @param toNodeId the new tab node will be added to the tabset with this node id
   * @param location the location where the new tab will be added, one of the DockLocation enum values.
   * @param index for docking to the center this value is the index of the tab, use -1 to add to the end.
   * @param select (optional) whether to select the new tab, overriding autoSelectTab
   * @returns {Action} the action
   */
  static addNode(e, t, r, i, o) {
    return new Ue.Action(de.ADD_NODE, {
      json: e,
      toNode: t,
      location: r.getName(),
      index: i,
      select: o
    });
  }
  /**
   * Moves a node (tab or tabset) from one location to another
   * @param fromNodeId the id of the node to move
   * @param toNodeId the id of the node to receive the moved node
   * @param location the location where the moved node will be added, one of the DockLocation enum values.
   * @param index for docking to the center this value is the index of the tab, use -1 to add to the end.
   * @param select (optional) whether to select the moved tab(s) in new tabset, overriding autoSelectTab
   * @returns {Action} the action
   */
  static moveNode(e, t, r, i, o) {
    return new Ue.Action(de.MOVE_NODE, {
      fromNode: e,
      toNode: t,
      location: r.getName(),
      index: i,
      select: o
    });
  }
  /**
   * Deletes a tab node from the layout
   * @param tabsetNodeId the id of the tab node to delete
   * @returns {Action} the action
   */
  static deleteTab(e) {
    return new Ue.Action(de.DELETE_TAB, { node: e });
  }
  /**
   * Deletes a tabset node and all it's child tab nodes from the layout
   * @param tabsetNodeId the id of the tabset node to delete
   * @returns {Action} the action
   */
  static deleteTabset(e) {
    return new Ue.Action(de.DELETE_TABSET, { node: e });
  }
  /**
   * Change the given nodes tab text
   * @param tabNodeId the id of the node to rename
   * @param text the test of the tab
   * @returns {Action} the action
   */
  static renameTab(e, t) {
    return new Ue.Action(de.RENAME_TAB, { node: e, text: t });
  }
  /**
   * Selects the given tab in its parent tabset
   * @param tabNodeId the id of the node to set selected
   * @returns {Action} the action
   */
  static selectTab(e) {
    return new Ue.Action(de.SELECT_TAB, { tabNode: e });
  }
  /**
   * Set the given tabset node as the active tabset
   * @param tabsetNodeId the id of the tabset node to set as active
   * @returns {Action} the action
   */
  static setActiveTabset(e) {
    return new Ue.Action(de.SET_ACTIVE_TABSET, { tabsetNode: e });
  }
  /**
   * Adjust the splitter between two tabsets
   * @example
   *  Actions.adjustSplit({node1: "1", weight1:30, pixelWidth1:300, node2: "2", weight2:70, pixelWidth2:700});
   *
   * @param splitSpec an object the defines the new split between two tabsets, see example below.
   * @returns {Action} the action
   */
  static adjustSplit(e) {
    const t = e.node1Id, r = e.node2Id;
    return new Ue.Action(de.ADJUST_SPLIT, {
      node1: t,
      weight1: e.weight1,
      pixelWidth1: e.pixelWidth1,
      node2: r,
      weight2: e.weight2,
      pixelWidth2: e.pixelWidth2
    });
  }
  static adjustBorderSplit(e, t) {
    return new Ue.Action(de.ADJUST_BORDER_SPLIT, { node: e, pos: t });
  }
  /**
   * Maximizes the given tabset
   * @param tabsetNodeId the id of the tabset to maximize
   * @returns {Action} the action
   */
  static maximizeToggle(e) {
    return new Ue.Action(de.MAXIMIZE_TOGGLE, { node: e });
  }
  /**
   * Updates the global model jsone attributes
   * @param attributes the json for the model attributes to update (merge into the existing attributes)
   * @returns {Action} the action
   */
  static updateModelAttributes(e) {
    return new Ue.Action(de.UPDATE_MODEL_ATTRIBUTES, { json: e });
  }
  /**
   * Updates the given nodes json attributes
   * @param nodeId the id of the node to update
   * @param attributes the json attributes to update (merge with the existing attributes)
   * @returns {Action} the action
   */
  static updateNodeAttributes(e, t) {
    return new Ue.Action(de.UPDATE_NODE_ATTRIBUTES, { node: e, json: t });
  }
  static floatTab(e) {
    return new Ue.Action(de.FLOAT_TAB, { node: e });
  }
  static unFloatTab(e) {
    return new Ue.Action(de.UNFLOAT_TAB, { node: e });
  }
}
Ve.Actions = de;
de.ADD_NODE = "FlexLayout_AddNode";
de.MOVE_NODE = "FlexLayout_MoveNode";
de.DELETE_TAB = "FlexLayout_DeleteTab";
de.DELETE_TABSET = "FlexLayout_DeleteTabset";
de.RENAME_TAB = "FlexLayout_RenameTab";
de.SELECT_TAB = "FlexLayout_SelectTab";
de.SET_ACTIVE_TABSET = "FlexLayout_SetActiveTabset";
de.ADJUST_SPLIT = "FlexLayout_AdjustSplit";
de.ADJUST_BORDER_SPLIT = "FlexLayout_AdjustBorderSplit";
de.MAXIMIZE_TOGGLE = "FlexLayout_MaximizeToggle";
de.UPDATE_MODEL_ATTRIBUTES = "FlexLayout_UpdateModelAttributes";
de.UPDATE_NODE_ATTRIBUTES = "FlexLayout_UpdateNodeAttributes";
de.FLOAT_TAB = "FlexLayout_FloatTab";
de.UNFLOAT_TAB = "FlexLayout_UnFloatTab";
var Xt = {}, dt = {};
Object.defineProperty(dt, "__esModule", { value: !0 });
dt.Attribute = void 0;
class xn {
  constructor(e, t, r, i) {
    this.name = e, this.modelName = t, this.defaultValue = r, this.alwaysWriteJson = i, this.required = !1, this.fixed = !1, this.type = "any";
  }
  setType(e) {
    return this.type = e, this;
  }
  setRequired() {
    return this.required = !0, this;
  }
  setFixed() {
    return this.fixed = !0, this;
  }
}
dt.Attribute = xn;
xn.NUMBER = "number";
xn.STRING = "string";
xn.BOOLEAN = "boolean";
var ct = {};
Object.defineProperty(ct, "__esModule", { value: !0 });
ct.AttributeDefinitions = void 0;
const ps = dt;
class ms {
  constructor() {
    this.attributes = [], this.nameToAttribute = {};
  }
  addWithAll(e, t, r, i) {
    const o = new ps.Attribute(e, t, r, i);
    return this.attributes.push(o), this.nameToAttribute[e] = o, o;
  }
  addInherited(e, t) {
    return this.addWithAll(e, t, void 0, !1);
  }
  add(e, t, r) {
    return this.addWithAll(e, void 0, t, r);
  }
  getAttributes() {
    return this.attributes;
  }
  getModelName(e) {
    const t = this.nameToAttribute[e];
    if (t !== void 0)
      return t.modelName;
  }
  toJson(e, t) {
    for (const r of this.attributes) {
      const i = t[r.name];
      (r.alwaysWriteJson || i !== r.defaultValue) && (e[r.name] = i);
    }
  }
  fromJson(e, t) {
    for (const r of this.attributes) {
      const i = e[r.name];
      i === void 0 ? t[r.name] = r.defaultValue : t[r.name] = i;
    }
  }
  update(e, t) {
    for (const r of this.attributes)
      if (e.hasOwnProperty(r.name)) {
        const i = e[r.name];
        i === void 0 ? delete t[r.name] : t[r.name] = i;
      }
  }
  setDefaults(e) {
    for (const t of this.attributes)
      e[t.name] = t.defaultValue;
  }
  toTypescriptInterface(e, t) {
    const r = [], i = this.attributes.sort((o, l) => o.name.localeCompare(l.name));
    r.push("export interface I" + e + "Attributes {");
    for (let o = 0; o < i.length; o++) {
      const l = i[o];
      let u = l.type, g, T = l, f;
      T.defaultValue !== void 0 ? g = T.defaultValue : T.modelName !== void 0 && t !== void 0 && t.nameToAttribute[T.modelName] !== void 0 && (f = T.modelName, T = t.nameToAttribute[T.modelName], g = T.defaultValue, u = T.type);
      let d = JSON.stringify(g);
      const h = T.required || T.fixed ? "" : "?";
      if (l.fixed)
        r.push("	" + l.name + ": " + d + ";");
      else {
        const a = (g !== void 0 ? "default: " + d : "") + (f !== void 0 ? " - inherited from global " + f : "");
        r.push("	" + l.name + h + ": " + u + ";" + (a.length > 0 ? " // " + a : ""));
      }
    }
    return r.push("}"), r.join(`
`);
  }
}
ct.AttributeDefinitions = ms;
var Ct = {};
Object.defineProperty(Ct, "__esModule", { value: !0 });
Ct.DropInfo = void 0;
class ys {
  constructor(e, t, r, i, o) {
    this.node = e, this.rect = t, this.location = r, this.index = i, this.className = o;
  }
}
Ct.DropInfo = ys;
var Ee = {};
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.CLASSES = void 0, function(e) {
    e.FLEXLAYOUT__BORDER = "flexlayout__border", e.FLEXLAYOUT__BORDER_ = "flexlayout__border_", e.FLEXLAYOUT__BORDER_BUTTON = "flexlayout__border_button", e.FLEXLAYOUT__BORDER_BUTTON_ = "flexlayout__border_button_", e.FLEXLAYOUT__BORDER_BUTTON_CONTENT = "flexlayout__border_button_content", e.FLEXLAYOUT__BORDER_BUTTON_LEADING = "flexlayout__border_button_leading", e.FLEXLAYOUT__BORDER_BUTTON_TRAILING = "flexlayout__border_button_trailing", e.FLEXLAYOUT__BORDER_BUTTON__SELECTED = "flexlayout__border_button--selected", e.FLEXLAYOUT__BORDER_BUTTON__UNSELECTED = "flexlayout__border_button--unselected", e.FLEXLAYOUT__BORDER_TOOLBAR_BUTTON_OVERFLOW = "flexlayout__border_toolbar_button_overflow", e.FLEXLAYOUT__BORDER_TOOLBAR_BUTTON_OVERFLOW_ = "flexlayout__border_toolbar_button_overflow_", e.FLEXLAYOUT__BORDER_INNER = "flexlayout__border_inner", e.FLEXLAYOUT__BORDER_INNER_ = "flexlayout__border_inner_", e.FLEXLAYOUT__BORDER_INNER_TAB_CONTAINER = "flexlayout__border_inner_tab_container", e.FLEXLAYOUT__BORDER_INNER_TAB_CONTAINER_ = "flexlayout__border_inner_tab_container_", e.FLEXLAYOUT__BORDER_TAB_DIVIDER = "flexlayout__border_tab_divider", e.FLEXLAYOUT__BORDER_SIZER = "flexlayout__border_sizer", e.FLEXLAYOUT__BORDER_TOOLBAR = "flexlayout__border_toolbar", e.FLEXLAYOUT__BORDER_TOOLBAR_ = "flexlayout__border_toolbar_", e.FLEXLAYOUT__BORDER_TOOLBAR_BUTTON = "flexlayout__border_toolbar_button", e.FLEXLAYOUT__BORDER_TOOLBAR_BUTTON_FLOAT = "flexlayout__border_toolbar_button-float", e.FLEXLAYOUT__DRAG_RECT = "flexlayout__drag_rect", e.FLEXLAYOUT__EDGE_RECT = "flexlayout__edge_rect", e.FLEXLAYOUT__EDGE_RECT_TOP = "flexlayout__edge_rect_top", e.FLEXLAYOUT__EDGE_RECT_LEFT = "flexlayout__edge_rect_left", e.FLEXLAYOUT__EDGE_RECT_BOTTOM = "flexlayout__edge_rect_bottom", e.FLEXLAYOUT__EDGE_RECT_RIGHT = "flexlayout__edge_rect_right", e.FLEXLAYOUT__ERROR_BOUNDARY_CONTAINER = "flexlayout__error_boundary_container", e.FLEXLAYOUT__ERROR_BOUNDARY_CONTENT = "flexlayout__error_boundary_content", e.FLEXLAYOUT__FLOATING_WINDOW_CONTENT = "flexlayout__floating_window_content", e.FLEXLAYOUT__FLOATING_WINDOW_TAB = "flexlayout__floating_window_tab", e.FLEXLAYOUT__LAYOUT = "flexlayout__layout", e.FLEXLAYOUT__OUTLINE_RECT = "flexlayout__outline_rect", e.FLEXLAYOUT__OUTLINE_RECT_EDGE = "flexlayout__outline_rect_edge", e.FLEXLAYOUT__SPLITTER = "flexlayout__splitter", e.FLEXLAYOUT__SPLITTER_EXTRA = "flexlayout__splitter_extra", e.FLEXLAYOUT__SPLITTER_ = "flexlayout__splitter_", e.FLEXLAYOUT__SPLITTER_BORDER = "flexlayout__splitter_border", e.FLEXLAYOUT__SPLITTER_DRAG = "flexlayout__splitter_drag", e.FLEXLAYOUT__TAB = "flexlayout__tab", e.FLEXLAYOUT__TABSET = "flexlayout__tabset", e.FLEXLAYOUT__TABSET_HEADER = "flexlayout__tabset_header", e.FLEXLAYOUT__TABSET_HEADER_SIZER = "flexlayout__tabset_header_sizer", e.FLEXLAYOUT__TABSET_HEADER_CONTENT = "flexlayout__tabset_header_content", e.FLEXLAYOUT__TABSET_MAXIMIZED = "flexlayout__tabset-maximized", e.FLEXLAYOUT__TABSET_SELECTED = "flexlayout__tabset-selected", e.FLEXLAYOUT__TABSET_SIZER = "flexlayout__tabset_sizer", e.FLEXLAYOUT__TABSET_TAB_DIVIDER = "flexlayout__tabset_tab_divider", e.FLEXLAYOUT__TABSET_CONTENT = "flexlayout__tabset_content", e.FLEXLAYOUT__TABSET_TABBAR_INNER = "flexlayout__tabset_tabbar_inner", e.FLEXLAYOUT__TABSET_TABBAR_INNER_ = "flexlayout__tabset_tabbar_inner_", e.FLEXLAYOUT__TABSET_TABBAR_INNER_TAB_CONTAINER = "flexlayout__tabset_tabbar_inner_tab_container", e.FLEXLAYOUT__TABSET_TABBAR_INNER_TAB_CONTAINER_ = "flexlayout__tabset_tabbar_inner_tab_container_", e.FLEXLAYOUT__TABSET_TABBAR_OUTER = "flexlayout__tabset_tabbar_outer", e.FLEXLAYOUT__TABSET_TABBAR_OUTER_ = "flexlayout__tabset_tabbar_outer_", e.FLEXLAYOUT__TAB_BORDER = "flexlayout__tab_border", e.FLEXLAYOUT__TAB_BORDER_ = "flexlayout__tab_border_", e.FLEXLAYOUT__TAB_BUTTON = "flexlayout__tab_button", e.FLEXLAYOUT__TAB_BUTTON_STRETCH = "flexlayout__tab_button_stretch", e.FLEXLAYOUT__TAB_BUTTON_CONTENT = "flexlayout__tab_button_content", e.FLEXLAYOUT__TAB_BUTTON_LEADING = "flexlayout__tab_button_leading", e.FLEXLAYOUT__TAB_BUTTON_OVERFLOW = "flexlayout__tab_button_overflow", e.FLEXLAYOUT__TAB_BUTTON_OVERFLOW_COUNT = "flexlayout__tab_button_overflow_count", e.FLEXLAYOUT__TAB_BUTTON_TEXTBOX = "flexlayout__tab_button_textbox", e.FLEXLAYOUT__TAB_BUTTON_TRAILING = "flexlayout__tab_button_trailing", e.FLEXLAYOUT__TAB_BUTTON_STAMP = "flexlayout__tab_button_stamp", e.FLEXLAYOUT__TAB_FLOATING = "flexlayout__tab_floating", e.FLEXLAYOUT__TAB_FLOATING_INNER = "flexlayout__tab_floating_inner", e.FLEXLAYOUT__TAB_TOOLBAR = "flexlayout__tab_toolbar", e.FLEXLAYOUT__TAB_TOOLBAR_BUTTON = "flexlayout__tab_toolbar_button", e.FLEXLAYOUT__TAB_TOOLBAR_BUTTON_ = "flexlayout__tab_toolbar_button-", e.FLEXLAYOUT__TAB_TOOLBAR_BUTTON_FLOAT = "flexlayout__tab_toolbar_button-float", e.FLEXLAYOUT__TAB_TOOLBAR_STICKY_BUTTONS_CONTAINER = "flexlayout__tab_toolbar_sticky_buttons_container", e.FLEXLAYOUT__TAB_TOOLBAR_BUTTON_CLOSE = "flexlayout__tab_toolbar_button-close", e.FLEXLAYOUT__POPUP_MENU_CONTAINER = "flexlayout__popup_menu_container", e.FLEXLAYOUT__POPUP_MENU_ITEM = "flexlayout__popup_menu_item", e.FLEXLAYOUT__POPUP_MENU = "flexlayout__popup_menu";
  }(n.CLASSES || (n.CLASSES = {}));
})(Ee);
var ut = {};
Object.defineProperty(ut, "__esModule", { value: !0 });
ut.Node = void 0;
const rr = nt, ir = ve, bs = Ie;
class Ts {
  /** @internal */
  constructor(e) {
    this._dirty = !1, this._tempSize = 0, this._model = e, this._attributes = {}, this._children = [], this._fixed = !1, this._rect = bs.Rect.empty(), this._visible = !1, this._listeners = {};
  }
  getId() {
    let e = this._attributes.id;
    return e !== void 0 || (e = this._model._nextUniqueId(), this._setId(e)), e;
  }
  getModel() {
    return this._model;
  }
  getType() {
    return this._attributes.type;
  }
  getParent() {
    return this._parent;
  }
  getChildren() {
    return this._children;
  }
  getRect() {
    return this._rect;
  }
  isVisible() {
    return this._visible;
  }
  getOrientation() {
    return this._parent === void 0 ? this._model.isRootOrientationVertical() ? ir.Orientation.VERT : ir.Orientation.HORZ : ir.Orientation.flip(this._parent.getOrientation());
  }
  // event can be: resize, visibility, maximize (on tabset), close
  setEventListener(e, t) {
    this._listeners[e] = t;
  }
  removeEventListener(e) {
    delete this._listeners[e];
  }
  /** @internal */
  _setId(e) {
    this._attributes.id = e;
  }
  /** @internal */
  _fireEvent(e, t) {
    this._listeners[e] !== void 0 && this._listeners[e](t);
  }
  /** @internal */
  _getAttr(e) {
    let t = this._attributes[e];
    if (t === void 0) {
      const r = this._getAttributeDefinitions().getModelName(e);
      r !== void 0 && (t = this._model._getAttribute(r));
    }
    return t;
  }
  /** @internal */
  _forEachNode(e, t) {
    e(this, t), t++;
    for (const r of this._children)
      r._forEachNode(e, t);
  }
  /** @internal */
  _setVisible(e) {
    e !== this._visible && (this._fireEvent("visibility", { visible: e }), this._visible = e);
  }
  /** @internal */
  _getDrawChildren() {
    return this._children;
  }
  /** @internal */
  _setParent(e) {
    this._parent = e;
  }
  /** @internal */
  _setRect(e) {
    this._rect = e;
  }
  /** @internal */
  _setWeight(e) {
    this._attributes.weight = e;
  }
  /** @internal */
  _setSelected(e) {
    this._attributes.selected = e;
  }
  /** @internal */
  _isFixed() {
    return this._fixed;
  }
  /** @internal */
  _layout(e, t) {
    this._rect = e;
  }
  /** @internal */
  _findDropTargetNode(e, t, r) {
    let i;
    if (this._rect.contains(t, r)) {
      if (this._model.getMaximizedTabset() !== void 0)
        i = this._model.getMaximizedTabset().canDrop(e, t, r);
      else if (i = this.canDrop(e, t, r), i === void 0 && this._children.length !== 0) {
        for (const o of this._children)
          if (i = o._findDropTargetNode(e, t, r), i !== void 0)
            break;
      }
    }
    return i;
  }
  /** @internal */
  canDrop(e, t, r) {
  }
  /** @internal */
  _canDockInto(e, t) {
    if (t != null) {
      if (t.location === rr.DockLocation.CENTER && t.node.isEnableDrop() === !1 || t.location === rr.DockLocation.CENTER && e.getType() === "tabset" && e.getName() !== void 0 || t.location !== rr.DockLocation.CENTER && t.node.isEnableDivide() === !1)
        return !1;
      if (this._model._getOnAllowDrop())
        return this._model._getOnAllowDrop()(e, t);
    }
    return !0;
  }
  /** @internal */
  _removeChild(e) {
    const t = this._children.indexOf(e);
    return t !== -1 && this._children.splice(t, 1), this._dirty = !0, t;
  }
  /** @internal */
  _addChild(e, t) {
    return t != null ? this._children.splice(t, 0, e) : (this._children.push(e), t = this._children.length - 1), e._parent = this, this._dirty = !0, t;
  }
  /** @internal */
  _removeAll() {
    this._children = [], this._dirty = !0;
  }
  /** @internal */
  _styleWithPosition(e) {
    return e == null && (e = {}), this._rect.styleWithPosition(e);
  }
  /** @internal */
  _getTempSize() {
    return this._tempSize;
  }
  /** @internal */
  _setTempSize(e) {
    this._tempSize = e;
  }
  /** @internal */
  isEnableDivide() {
    return !0;
  }
  /** @internal */
  _toAttributeString() {
    return JSON.stringify(this._attributes, void 0, "	");
  }
}
ut.Node = Ts;
var Rt = {};
Object.defineProperty(Rt, "__esModule", { value: !0 });
Rt.SplitterNode = void 0;
const vs = ct, or = ve, Es = ut;
class Pn extends Es.Node {
  /** @internal */
  constructor(e) {
    super(e), this._fixed = !0, this._attributes.type = Pn.TYPE, e._addNode(this);
  }
  /** @internal */
  getWidth() {
    return this._model.getSplitterSize();
  }
  /** @internal */
  getMinWidth() {
    return this.getOrientation() === or.Orientation.VERT ? this._model.getSplitterSize() : 0;
  }
  /** @internal */
  getHeight() {
    return this._model.getSplitterSize();
  }
  /** @internal */
  getMinHeight() {
    return this.getOrientation() === or.Orientation.HORZ ? this._model.getSplitterSize() : 0;
  }
  /** @internal */
  getMinSize(e) {
    return e === or.Orientation.HORZ ? this.getMinWidth() : this.getMinHeight();
  }
  /** @internal */
  getWeight() {
    return 0;
  }
  /** @internal */
  _setWeight(e) {
  }
  /** @internal */
  _getPrefSize(e) {
    return this._model.getSplitterSize();
  }
  /** @internal */
  _updateAttrs(e) {
  }
  /** @internal */
  _getAttributeDefinitions() {
    return new vs.AttributeDefinitions();
  }
  toJson() {
  }
}
Rt.SplitterNode = Pn;
Pn.TYPE = "splitter";
var Et = {};
Object.defineProperty(Et, "__esModule", { value: !0 });
Et.TabNode = void 0;
const Te = dt, ws = ct, Os = ut;
class qe extends Os.Node {
  /** @internal */
  static _fromJson(e, t, r = !0) {
    return new qe(t, e, r);
  }
  /** @internal */
  static _createAttributeDefinitions() {
    const e = new ws.AttributeDefinitions();
    return e.add("type", qe.TYPE, !0).setType(Te.Attribute.STRING), e.add("id", void 0).setType(Te.Attribute.STRING), e.add("name", "[Unnamed Tab]").setType(Te.Attribute.STRING), e.add("altName", void 0).setType(Te.Attribute.STRING), e.add("helpText", void 0).setType(Te.Attribute.STRING), e.add("component", void 0).setType(Te.Attribute.STRING), e.add("config", void 0).setType("any"), e.add("floating", !1).setType(Te.Attribute.BOOLEAN), e.add("tabsetClassName", void 0).setType(Te.Attribute.STRING), e.addInherited("enableClose", "tabEnableClose").setType(Te.Attribute.BOOLEAN), e.addInherited("closeType", "tabCloseType").setType("ICloseType"), e.addInherited("enableDrag", "tabEnableDrag").setType(Te.Attribute.BOOLEAN), e.addInherited("enableRename", "tabEnableRename").setType(Te.Attribute.BOOLEAN), e.addInherited("className", "tabClassName").setType(Te.Attribute.STRING), e.addInherited("contentClassName", "tabContentClassName").setType(Te.Attribute.STRING), e.addInherited("icon", "tabIcon").setType(Te.Attribute.STRING), e.addInherited("enableRenderOnDemand", "tabEnableRenderOnDemand").setType(Te.Attribute.BOOLEAN), e.addInherited("enableFloat", "tabEnableFloat").setType(Te.Attribute.BOOLEAN), e.addInherited("borderWidth", "tabBorderWidth").setType(Te.Attribute.NUMBER), e.addInherited("borderHeight", "tabBorderHeight").setType(Te.Attribute.NUMBER), e;
  }
  /** @internal */
  constructor(e, t, r = !0) {
    super(e), this._extra = {}, qe._attributeDefinitions.fromJson(t, this._attributes), r === !0 && e._addNode(this);
  }
  getWindow() {
    return this._window;
  }
  getTabRect() {
    return this._tabRect;
  }
  /** @internal */
  _setTabRect(e) {
    this._tabRect = e;
  }
  /** @internal */
  _setRenderedName(e) {
    this._renderedName = e;
  }
  /** @internal */
  _getNameForOverflowMenu() {
    const e = this._getAttr("altName");
    return e !== void 0 ? e : this._renderedName;
  }
  getName() {
    return this._getAttr("name");
  }
  getHelpText() {
    return this._getAttr("helpText");
  }
  getComponent() {
    return this._getAttr("component");
  }
  /**
   * Returns the config attribute that can be used to store node specific data that
   * WILL be saved to the json. The config attribute should be changed via the action Actions.updateNodeAttributes rather
   * than directly, for example:
   * this.state.model.doAction(
   *   FlexLayout.Actions.updateNodeAttributes(node.getId(), {config:myConfigObject}));
   */
  getConfig() {
    return this._attributes.config;
  }
  /**
   * Returns an object that can be used to store transient node specific data that will
   * NOT be saved in the json.
   */
  getExtraData() {
    return this._extra;
  }
  isFloating() {
    return this._getAttr("floating");
  }
  getIcon() {
    return this._getAttr("icon");
  }
  isEnableClose() {
    return this._getAttr("enableClose");
  }
  getCloseType() {
    return this._getAttr("closeType");
  }
  isEnableFloat() {
    return this._getAttr("enableFloat");
  }
  isEnableDrag() {
    return this._getAttr("enableDrag");
  }
  isEnableRename() {
    return this._getAttr("enableRename");
  }
  getClassName() {
    return this._getAttr("className");
  }
  getContentClassName() {
    return this._getAttr("contentClassName");
  }
  getTabSetClassName() {
    return this._getAttr("tabsetClassName");
  }
  isEnableRenderOnDemand() {
    return this._getAttr("enableRenderOnDemand");
  }
  /** @internal */
  _setName(e) {
    this._attributes.name = e, this._window && this._window.document && (this._window.document.title = e);
  }
  /** @internal */
  _setFloating(e) {
    this._attributes.floating = e;
  }
  /** @internal */
  _layout(e, t) {
    e.equals(this._rect) || this._fireEvent("resize", { rect: e }), this._rect = e;
  }
  /** @internal */
  _delete() {
    this._parent._remove(this), this._fireEvent("close", {});
  }
  toJson() {
    const e = {};
    return qe._attributeDefinitions.toJson(e, this._attributes), e;
  }
  /** @internal */
  _updateAttrs(e) {
    qe._attributeDefinitions.update(e, this._attributes);
  }
  /** @internal */
  _getAttributeDefinitions() {
    return qe._attributeDefinitions;
  }
  /** @internal */
  _setWindow(e) {
    this._window = e;
  }
  /** @internal */
  _setBorderWidth(e) {
    this._attributes.borderWidth = e;
  }
  /** @internal */
  _setBorderHeight(e) {
    this._attributes.borderHeight = e;
  }
  /** @internal */
  static getAttributeDefinitions() {
    return qe._attributeDefinitions;
  }
}
Et.TabNode = qe;
qe.TYPE = "tab";
qe._attributeDefinitions = qe._createAttributeDefinitions();
var Ze = {}, Vt = {}, Gt = {}, bi;
function Wr() {
  if (bi)
    return Gt;
  bi = 1, Object.defineProperty(Gt, "__esModule", { value: !0 }), Gt.RowNode = void 0;
  const n = dt, e = ct, t = nt, r = Ct, i = ve, o = Ie, l = Ee, u = ht(), g = ut, T = Rt, f = wt();
  let d = class Ne extends g.Node {
    /** @internal */
    static _fromJson(a, s) {
      const c = new Ne(s, a);
      if (a.children != null)
        for (const y of a.children)
          if (y.type === f.TabSetNode.TYPE) {
            const w = f.TabSetNode._fromJson(y, s);
            c._addChild(w);
          } else {
            const w = Ne._fromJson(y, s);
            c._addChild(w);
          }
      return c;
    }
    /** @internal */
    static _createAttributeDefinitions() {
      const a = new e.AttributeDefinitions();
      return a.add("type", Ne.TYPE, !0).setType(n.Attribute.STRING).setFixed(), a.add("id", void 0).setType(n.Attribute.STRING), a.add("weight", 100).setType(n.Attribute.NUMBER), a.add("width", void 0).setType(n.Attribute.NUMBER), a.add("height", void 0).setType(n.Attribute.NUMBER), a;
    }
    /** @internal */
    constructor(a, s) {
      super(a), this._dirty = !0, this._drawChildren = [], this._minHeight = 0, this._minWidth = 0, Ne._attributeDefinitions.fromJson(s, this._attributes), a._addNode(this);
    }
    getWeight() {
      return this._attributes.weight;
    }
    getWidth() {
      return this._getAttr("width");
    }
    getHeight() {
      return this._getAttr("height");
    }
    /** @internal */
    _setWeight(a) {
      this._attributes.weight = a;
    }
    /** @internal */
    _layout(a, s) {
      super._layout(a, s);
      const c = this._rect._getSize(this.getOrientation());
      let y = 0, w = 0, p = 0, v = 0;
      const m = this._getDrawChildren();
      for (const D of m) {
        const P = D._getPrefSize(this.getOrientation());
        D._isFixed() ? P !== void 0 && (w += P) : P === void 0 ? y += D.getWeight() : (p += P, v += D.getWeight());
      }
      let _ = !1, E = c - w - p;
      E < 0 && (E = c - w, _ = !0, y += v);
      let C = 0, S = 0;
      for (const D of m) {
        const P = D._getPrefSize(this.getOrientation());
        if (D._isFixed())
          P !== void 0 && D._setTempSize(P);
        else if (P == null || _) {
          if (y === 0)
            D._setTempSize(0);
          else {
            const L = D.getMinSize(this.getOrientation()), U = Math.floor(E * (D.getWeight() / y));
            D._setTempSize(Math.max(L, U));
          }
          S += D._getTempSize();
        } else
          D._setTempSize(P);
        C += D._getTempSize();
      }
      if (S > 0) {
        for (; C < c; )
          for (const D of m)
            if (!(D instanceof T.SplitterNode)) {
              const P = D._getPrefSize(this.getOrientation());
              !D._isFixed() && (P === void 0 || _) && C < c && (D._setTempSize(D._getTempSize() + 1), C++);
            }
        for (; C > c; ) {
          let D = !1;
          for (const P of m)
            if (!(P instanceof T.SplitterNode)) {
              const L = P.getMinSize(this.getOrientation());
              P._getTempSize() > L && C > c && (P._setTempSize(P._getTempSize() - 1), C--, D = !0);
            }
          if (!D)
            break;
        }
        for (; C > c; ) {
          let D = !1;
          for (const P of m)
            P instanceof T.SplitterNode || P._getTempSize() > 0 && C > c && (P._setTempSize(P._getTempSize() - 1), C--, D = !0);
          if (!D)
            break;
        }
      }
      let N = 0;
      for (const D of m)
        this.getOrientation() === i.Orientation.HORZ ? D._layout(new o.Rect(this._rect.x + N, this._rect.y, D._getTempSize(), this._rect.height), s) : D._layout(new o.Rect(this._rect.x, this._rect.y + N, this._rect.width, D._getTempSize()), s), N += D._getTempSize();
      return !0;
    }
    /** @internal */
    _getSplitterBounds(a, s = !1) {
      const c = [0, 0], y = this._getDrawChildren(), w = y.indexOf(a), p = y[w - 1], v = y[w + 1];
      if (this.getOrientation() === i.Orientation.HORZ) {
        const m = s ? p.getMinWidth() : 0, _ = s ? v.getMinWidth() : 0;
        c[0] = p.getRect().x + m, c[1] = v.getRect().getRight() - a.getWidth() - _;
      } else {
        const m = s ? p.getMinHeight() : 0, _ = s ? v.getMinHeight() : 0;
        c[0] = p.getRect().y + m, c[1] = v.getRect().getBottom() - a.getHeight() - _;
      }
      return c;
    }
    /** @internal */
    _calculateSplit(a, s) {
      let c;
      const y = this._getDrawChildren(), w = y.indexOf(a), p = this._getSplitterBounds(a), v = y[w - 1].getWeight() + y[w + 1].getWeight(), m = Math.max(0, s - p[0]), _ = Math.max(0, p[1] - s);
      if (m + _ > 0) {
        const E = m * v / (m + _), C = _ * v / (m + _);
        c = {
          node1Id: y[w - 1].getId(),
          weight1: E,
          pixelWidth1: m,
          node2Id: y[w + 1].getId(),
          weight2: C,
          pixelWidth2: _
        };
      }
      return c;
    }
    /** @internal */
    _getDrawChildren() {
      if (this._dirty) {
        this._drawChildren = [];
        for (let a = 0; a < this._children.length; a++) {
          const s = this._children[a];
          if (a !== 0) {
            const c = new T.SplitterNode(this._model);
            c._setParent(this), this._drawChildren.push(c);
          }
          this._drawChildren.push(s);
        }
        this._dirty = !1;
      }
      return this._drawChildren;
    }
    /** @internal */
    getMinSize(a) {
      return a === i.Orientation.HORZ ? this.getMinWidth() : this.getMinHeight();
    }
    /** @internal */
    getMinWidth() {
      return this._minWidth;
    }
    /** @internal */
    getMinHeight() {
      return this._minHeight;
    }
    /** @internal */
    calcMinSize() {
      this._minHeight = 0, this._minWidth = 0;
      let a = !0;
      for (const s of this._children) {
        const c = s;
        c instanceof Ne && c.calcMinSize(), this.getOrientation() === i.Orientation.VERT ? (this._minHeight += c.getMinHeight(), a || (this._minHeight += this._model.getSplitterSize()), this._minWidth = Math.max(this._minWidth, c.getMinWidth())) : (this._minWidth += c.getMinWidth(), a || (this._minWidth += this._model.getSplitterSize()), this._minHeight = Math.max(this._minHeight, c.getMinHeight())), a = !1;
      }
    }
    /** @internal */
    _tidy() {
      let a = 0;
      for (; a < this._children.length; ) {
        const s = this._children[a];
        if (s instanceof Ne) {
          s._tidy();
          const c = s.getChildren();
          if (c.length === 0)
            this._removeChild(s);
          else if (c.length === 1) {
            const y = c[0];
            if (this._removeChild(s), y instanceof Ne) {
              let w = 0;
              const p = y.getChildren();
              for (const v of p)
                w += v.getWeight();
              for (let v = 0; v < p.length; v++) {
                const m = p[v];
                m._setWeight(s.getWeight() * m.getWeight() / w), this._addChild(m, a + v);
              }
            } else
              y._setWeight(s.getWeight()), this._addChild(y, a);
          } else
            a++;
        } else
          s instanceof f.TabSetNode && s.getChildren().length === 0 && s.isEnableDeleteWhenEmpty() ? (this._removeChild(s), s === this._model.getMaximizedTabset() && this._model._setMaximizedTabset(void 0)) : a++;
      }
      if (this === this._model.getRoot() && this._children.length === 0) {
        const s = this._model._getOnCreateTabSet();
        let c = s ? s() : {};
        c = Object.assign(Object.assign({}, c), { selected: -1 });
        const y = new f.TabSetNode(this._model, c);
        this._model._setActiveTabset(y), this._addChild(y);
      }
    }
    /** @internal */
    canDrop(a, s, c) {
      const y = c - this._rect.y, w = s - this._rect.x, p = this._rect.width, v = this._rect.height, m = 10, _ = 50;
      let E;
      if (this._model.isEnableEdgeDock() && this._parent === void 0) {
        if (s < this._rect.x + m && y > v / 2 - _ && y < v / 2 + _) {
          const C = t.DockLocation.LEFT, S = C.getDockRect(this._rect);
          S.width = S.width / 2, E = new r.DropInfo(this, S, C, -1, l.CLASSES.FLEXLAYOUT__OUTLINE_RECT_EDGE);
        } else if (s > this._rect.getRight() - m && y > v / 2 - _ && y < v / 2 + _) {
          const C = t.DockLocation.RIGHT, S = C.getDockRect(this._rect);
          S.width = S.width / 2, S.x += S.width, E = new r.DropInfo(this, S, C, -1, l.CLASSES.FLEXLAYOUT__OUTLINE_RECT_EDGE);
        } else if (c < this._rect.y + m && w > p / 2 - _ && w < p / 2 + _) {
          const C = t.DockLocation.TOP, S = C.getDockRect(this._rect);
          S.height = S.height / 2, E = new r.DropInfo(this, S, C, -1, l.CLASSES.FLEXLAYOUT__OUTLINE_RECT_EDGE);
        } else if (c > this._rect.getBottom() - m && w > p / 2 - _ && w < p / 2 + _) {
          const C = t.DockLocation.BOTTOM, S = C.getDockRect(this._rect);
          S.height = S.height / 2, S.y += S.height, E = new r.DropInfo(this, S, C, -1, l.CLASSES.FLEXLAYOUT__OUTLINE_RECT_EDGE);
        }
        if (E !== void 0 && !a._canDockInto(a, E))
          return;
      }
      return E;
    }
    /** @internal */
    drop(a, s, c) {
      const y = s, w = a.getParent();
      w && w._removeChild(a), w !== void 0 && w.getType() === f.TabSetNode.TYPE && w._setSelected(0), w !== void 0 && w.getType() === u.BorderNode.TYPE && w._setSelected(-1);
      let p;
      if (a instanceof f.TabSetNode)
        p = a;
      else {
        const _ = this._model._getOnCreateTabSet();
        p = new f.TabSetNode(this._model, _ ? _(a) : {}), p._addChild(a);
      }
      let v = this._children.reduce((_, E) => _ + E.getWeight(), 0);
      v === 0 && (v = 100), p._setWeight(v / 3);
      const m = !this._model.isRootOrientationVertical();
      if (m && y === t.DockLocation.LEFT || !m && y === t.DockLocation.TOP)
        this._addChild(p, 0);
      else if (m && y === t.DockLocation.RIGHT || !m && y === t.DockLocation.BOTTOM)
        this._addChild(p);
      else if (m && y === t.DockLocation.TOP || !m && y === t.DockLocation.LEFT) {
        const _ = new Ne(this._model, {}), E = new Ne(this._model, {});
        E._setWeight(75), p._setWeight(25);
        for (const C of this._children)
          E._addChild(C);
        this._removeAll(), _._addChild(p), _._addChild(E), this._addChild(_);
      } else if (m && y === t.DockLocation.BOTTOM || !m && y === t.DockLocation.RIGHT) {
        const _ = new Ne(this._model, {}), E = new Ne(this._model, {});
        E._setWeight(75), p._setWeight(25);
        for (const C of this._children)
          E._addChild(C);
        this._removeAll(), _._addChild(E), _._addChild(p), this._addChild(_);
      }
      this._model._setActiveTabset(p), this._model._tidy();
    }
    toJson() {
      const a = {};
      Ne._attributeDefinitions.toJson(a, this._attributes), a.children = [];
      for (const s of this._children)
        a.children.push(s.toJson());
      return a;
    }
    isEnableDrop() {
      return !0;
    }
    /** @internal */
    _getPrefSize(a) {
      let s = this.getWidth();
      return a === i.Orientation.VERT && (s = this.getHeight()), s;
    }
    /** @internal */
    _getAttributeDefinitions() {
      return Ne._attributeDefinitions;
    }
    /** @internal */
    _updateAttrs(a) {
      Ne._attributeDefinitions.update(a, this._attributes);
    }
    /** @internal */
    static getAttributeDefinitions() {
      return Ne._attributeDefinitions;
    }
  };
  return Gt.RowNode = d, d.TYPE = "row", d._attributeDefinitions = d._createAttributeDefinitions(), Gt;
}
var Ti;
function wt() {
  if (Ti)
    return Vt;
  Ti = 1, Object.defineProperty(Vt, "__esModule", { value: !0 }), Vt.TabSetNode = void 0;
  const n = dt, e = ct, t = nt, r = Ct, i = ve, o = Ie, l = Ee, u = ht(), g = ut, T = Wr(), f = Et, d = Xr();
  let h = class at extends g.Node {
    /** @internal */
    static _fromJson(s, c) {
      const y = new at(c, s);
      if (s.children != null)
        for (const w of s.children) {
          const p = f.TabNode._fromJson(w, c);
          y._addChild(p);
        }
      return y._children.length === 0 && y._setSelected(-1), s.maximized && s.maximized === !0 && c._setMaximizedTabset(y), s.active && s.active === !0 && c._setActiveTabset(y), y;
    }
    /** @internal */
    static _createAttributeDefinitions() {
      const s = new e.AttributeDefinitions();
      return s.add("type", at.TYPE, !0).setType(n.Attribute.STRING).setFixed(), s.add("id", void 0).setType(n.Attribute.STRING), s.add("weight", 100).setType(n.Attribute.NUMBER), s.add("width", void 0).setType(n.Attribute.NUMBER), s.add("height", void 0).setType(n.Attribute.NUMBER), s.add("selected", 0).setType(n.Attribute.NUMBER), s.add("name", void 0).setType(n.Attribute.STRING), s.add("config", void 0).setType("any"), s.addInherited("enableDeleteWhenEmpty", "tabSetEnableDeleteWhenEmpty"), s.addInherited("enableDrop", "tabSetEnableDrop"), s.addInherited("enableDrag", "tabSetEnableDrag"), s.addInherited("enableDivide", "tabSetEnableDivide"), s.addInherited("enableMaximize", "tabSetEnableMaximize"), s.addInherited("enableClose", "tabSetEnableClose"), s.addInherited("enableSingleTabStretch", "tabSetEnableSingleTabStretch"), s.addInherited("classNameTabStrip", "tabSetClassNameTabStrip"), s.addInherited("classNameHeader", "tabSetClassNameHeader"), s.addInherited("enableTabStrip", "tabSetEnableTabStrip"), s.addInherited("borderInsets", "tabSetBorderInsets"), s.addInherited("marginInsets", "tabSetMarginInsets"), s.addInherited("minWidth", "tabSetMinWidth"), s.addInherited("minHeight", "tabSetMinHeight"), s.addInherited("headerHeight", "tabSetHeaderHeight"), s.addInherited("tabStripHeight", "tabSetTabStripHeight"), s.addInherited("tabLocation", "tabSetTabLocation"), s.addInherited("autoSelectTab", "tabSetAutoSelectTab").setType(n.Attribute.BOOLEAN), s;
    }
    /** @internal */
    constructor(s, c) {
      super(s), at._attributeDefinitions.fromJson(c, this._attributes), s._addNode(this), this._calculatedTabBarHeight = 0, this._calculatedHeaderBarHeight = 0;
    }
    getName() {
      return this._getAttr("name");
    }
    getSelected() {
      const s = this._attributes.selected;
      return s !== void 0 ? s : -1;
    }
    getSelectedNode() {
      const s = this.getSelected();
      if (s !== -1)
        return this._children[s];
    }
    getWeight() {
      return this._getAttr("weight");
    }
    getWidth() {
      return this._getAttr("width");
    }
    getMinWidth() {
      return this._getAttr("minWidth");
    }
    getHeight() {
      return this._getAttr("height");
    }
    getMinHeight() {
      return this._getAttr("minHeight");
    }
    /** @internal */
    getMinSize(s) {
      return s === i.Orientation.HORZ ? this.getMinWidth() : this.getMinHeight();
    }
    /**
     * Returns the config attribute that can be used to store node specific data that
     * WILL be saved to the json. The config attribute should be changed via the action Actions.updateNodeAttributes rather
     * than directly, for example:
     * this.state.model.doAction(
     *   FlexLayout.Actions.updateNodeAttributes(node.getId(), {config:myConfigObject}));
     */
    getConfig() {
      return this._attributes.config;
    }
    isMaximized() {
      return this._model.getMaximizedTabset() === this;
    }
    isActive() {
      return this._model.getActiveTabset() === this;
    }
    isEnableDeleteWhenEmpty() {
      return this._getAttr("enableDeleteWhenEmpty");
    }
    isEnableDrop() {
      return this._getAttr("enableDrop");
    }
    isEnableDrag() {
      return this._getAttr("enableDrag");
    }
    isEnableDivide() {
      return this._getAttr("enableDivide");
    }
    isEnableMaximize() {
      return this._getAttr("enableMaximize");
    }
    isEnableClose() {
      return this._getAttr("enableClose");
    }
    isEnableSingleTabStretch() {
      return this._getAttr("enableSingleTabStretch");
    }
    canMaximize() {
      return this.isEnableMaximize() ? this.getModel().getMaximizedTabset() === this ? !0 : !(this.getParent() === this.getModel().getRoot() && this.getModel().getRoot().getChildren().length === 1) : !1;
    }
    isEnableTabStrip() {
      return this._getAttr("enableTabStrip");
    }
    isAutoSelectTab() {
      return this._getAttr("autoSelectTab");
    }
    getClassNameTabStrip() {
      return this._getAttr("classNameTabStrip");
    }
    getClassNameHeader() {
      return this._getAttr("classNameHeader");
    }
    /** @internal */
    calculateHeaderBarHeight(s) {
      const c = this._getAttr("headerHeight");
      c !== 0 ? this._calculatedHeaderBarHeight = c : this._calculatedHeaderBarHeight = s.headerBarSize;
    }
    /** @internal */
    calculateTabBarHeight(s) {
      const c = this._getAttr("tabStripHeight");
      c !== 0 ? this._calculatedTabBarHeight = c : this._calculatedTabBarHeight = s.tabBarSize;
    }
    getHeaderHeight() {
      return this._calculatedHeaderBarHeight;
    }
    getTabStripHeight() {
      return this._calculatedTabBarHeight;
    }
    getTabLocation() {
      return this._getAttr("tabLocation");
    }
    /** @internal */
    _setWeight(s) {
      this._attributes.weight = s;
    }
    /** @internal */
    _setSelected(s) {
      this._attributes.selected = s;
    }
    /** @internal */
    canDrop(s, c, y) {
      let w;
      if (s === this) {
        const p = t.DockLocation.CENTER, v = this._tabHeaderRect;
        w = new r.DropInfo(this, v, p, -1, l.CLASSES.FLEXLAYOUT__OUTLINE_RECT);
      } else if (this._contentRect.contains(c, y)) {
        let p = t.DockLocation.CENTER;
        this._model.getMaximizedTabset() === void 0 && (p = t.DockLocation.getLocation(this._contentRect, c, y));
        const v = p.getDockRect(this._rect);
        w = new r.DropInfo(this, v, p, -1, l.CLASSES.FLEXLAYOUT__OUTLINE_RECT);
      } else if (this._tabHeaderRect != null && this._tabHeaderRect.contains(c, y)) {
        let p, v, m;
        if (this._children.length === 0)
          p = this._tabHeaderRect.clone(), v = p.y + 3, m = p.height - 4, p.width = 2;
        else {
          let _ = this._children[0];
          p = _.getTabRect(), v = p.y, m = p.height;
          let E = this._tabHeaderRect.x, C = 0;
          for (let S = 0; S < this._children.length; S++) {
            if (_ = this._children[S], p = _.getTabRect(), C = p.x + p.width / 2, c >= E && c < C) {
              const N = t.DockLocation.CENTER, D = new o.Rect(p.x - 2, v, 3, m);
              w = new r.DropInfo(this, D, N, S, l.CLASSES.FLEXLAYOUT__OUTLINE_RECT);
              break;
            }
            E = C;
          }
        }
        if (w == null) {
          const _ = t.DockLocation.CENTER, E = new o.Rect(p.getRight() - 2, v, 3, m);
          w = new r.DropInfo(this, E, _, this._children.length, l.CLASSES.FLEXLAYOUT__OUTLINE_RECT);
        }
      }
      if (s._canDockInto(s, w))
        return w;
    }
    /** @internal */
    _layout(s, c) {
      this.calculateHeaderBarHeight(c), this.calculateTabBarHeight(c), this.isMaximized() && (s = this._model.getRoot().getRect()), s = s.removeInsets(this._getAttr("marginInsets")), this._rect = s, s = s.removeInsets(this._getAttr("borderInsets"));
      const y = this.getName() !== void 0;
      let w = 0, p = 0;
      y && (w += this._calculatedHeaderBarHeight, p += this._calculatedHeaderBarHeight), this.isEnableTabStrip() && (this.getTabLocation() === "top" ? this._tabHeaderRect = new o.Rect(s.x, s.y + w, s.width, this._calculatedTabBarHeight) : this._tabHeaderRect = new o.Rect(s.x, s.y + s.height - this._calculatedTabBarHeight, s.width, this._calculatedTabBarHeight), p += this._calculatedTabBarHeight, this.getTabLocation() === "top" && (w += this._calculatedTabBarHeight)), this._contentRect = new o.Rect(s.x, s.y + w, s.width, s.height - p);
      for (let v = 0; v < this._children.length; v++) {
        const m = this._children[v];
        m._layout(this._contentRect, c), m._setVisible(v === this.getSelected());
      }
    }
    /** @internal */
    _delete() {
      this._parent._removeChild(this);
    }
    /** @internal */
    _remove(s) {
      const c = this._removeChild(s);
      this._model._tidy(), (0, d.adjustSelectedIndex)(this, c);
    }
    /** @internal */
    drop(s, c, y, w) {
      const p = c;
      if (this === s)
        return;
      let v = s.getParent(), m = 0;
      if (v !== void 0 && (m = v._removeChild(s), v instanceof u.BorderNode && v.getSelected() === m ? v._setSelected(-1) : (0, d.adjustSelectedIndex)(v, m)), s.getType() === f.TabNode.TYPE && v === this && m < y && y > 0 && y--, p === t.DockLocation.CENTER) {
        let _ = y;
        if (_ === -1 && (_ = this._children.length), s.getType() === f.TabNode.TYPE)
          this._addChild(s, _), (w || w !== !1 && this.isAutoSelectTab()) && this._setSelected(_);
        else {
          for (let E = 0; E < s.getChildren().length; E++) {
            const C = s.getChildren()[E];
            this._addChild(C, _), _++;
          }
          this.getSelected() === -1 && this._children.length > 0 && this._setSelected(0);
        }
        this._model._setActiveTabset(this);
      } else {
        let _;
        if (s instanceof f.TabNode) {
          const S = this._model._getOnCreateTabSet();
          _ = new at(this._model, S ? S(s) : {}), _._addChild(s), v = _;
        } else
          _ = s;
        const E = this._parent, C = E.getChildren().indexOf(this);
        if (E.getOrientation() === p._orientation)
          _._setWeight(this.getWeight() / 2), this._setWeight(this.getWeight() / 2), E._addChild(_, C + p._indexPlus);
        else {
          const S = new T.RowNode(this._model, {});
          S._setWeight(this.getWeight()), S._addChild(this), this._setWeight(50), _._setWeight(50), S._addChild(_, p._indexPlus), E._removeChild(this), E._addChild(S, C);
        }
        this._model._setActiveTabset(_);
      }
      this._model._tidy();
    }
    toJson() {
      const s = {};
      return at._attributeDefinitions.toJson(s, this._attributes), s.children = this._children.map((c) => c.toJson()), this.isActive() && (s.active = !0), this.isMaximized() && (s.maximized = !0), s;
    }
    /** @internal */
    _updateAttrs(s) {
      at._attributeDefinitions.update(s, this._attributes);
    }
    /** @internal */
    _getAttributeDefinitions() {
      return at._attributeDefinitions;
    }
    /** @internal */
    _getPrefSize(s) {
      let c = this.getWidth();
      return s === i.Orientation.VERT && (c = this.getHeight()), c;
    }
    /** @internal */
    static getAttributeDefinitions() {
      return at._attributeDefinitions;
    }
  };
  return Vt.TabSetNode = h, h.TYPE = "tabset", h._attributeDefinitions = h._createAttributeDefinitions(), Vt;
}
var vi;
function Xr() {
  if (vi)
    return Ze;
  vi = 1, Object.defineProperty(Ze, "__esModule", { value: !0 }), Ze.randomUUID = Ze.adjustSelectedIndex = Ze.adjustSelectedIndexAfterDock = Ze.adjustSelectedIndexAfterFloat = void 0;
  const n = wt(), e = ht();
  function t(l) {
    const u = l.getParent();
    if (u !== null)
      if (u instanceof n.TabSetNode) {
        let g = !1, T = 0;
        const f = u.getChildren();
        for (let d = 0; d < f.length; d++) {
          const h = f[d];
          if (h === l)
            g = !0;
          else if (!h.isFloating() && (T = d, g))
            break;
        }
        u._setSelected(T);
      } else
        u instanceof e.BorderNode && u._setSelected(-1);
  }
  Ze.adjustSelectedIndexAfterFloat = t;
  function r(l) {
    const u = l.getParent();
    if (u !== null && (u instanceof n.TabSetNode || u instanceof e.BorderNode)) {
      const g = u.getChildren();
      for (let T = 0; T < g.length; T++)
        if (g[T] === l) {
          u._setSelected(T);
          return;
        }
    }
  }
  Ze.adjustSelectedIndexAfterDock = r;
  function i(l, u) {
    if (l !== void 0 && (l.getType() === n.TabSetNode.TYPE || l.getType() === e.BorderNode.TYPE)) {
      const g = l.getSelected();
      g !== -1 && (u === g && l.getChildren().length > 0 ? u >= l.getChildren().length && l._setSelected(l.getChildren().length - 1) : u < g ? l._setSelected(g - 1) : u > g || l._setSelected(-1));
    }
  }
  Ze.adjustSelectedIndex = i;
  function o() {
    return ("10000000-1000-4000-8000" + -1e11).replace(/[018]/g, (l) => (l ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> l / 4).toString(16));
  }
  return Ze.randomUUID = o, Ze;
}
var Ei;
function ht() {
  if (Ei)
    return Xt;
  Ei = 1, Object.defineProperty(Xt, "__esModule", { value: !0 }), Xt.BorderNode = void 0;
  const n = dt, e = ct, t = nt, r = Ct, i = ve, o = Ie, l = Ee, u = ut, g = Rt, T = Et, f = Xr();
  let d = class st extends u.Node {
    /** @internal */
    static _fromJson(a, s) {
      const c = t.DockLocation.getByName(a.location), y = new st(c, a, s);
      return a.children && (y._children = a.children.map((w) => {
        const p = T.TabNode._fromJson(w, s);
        return p._setParent(y), p;
      })), y;
    }
    /** @internal */
    static _createAttributeDefinitions() {
      const a = new e.AttributeDefinitions();
      return a.add("type", st.TYPE, !0).setType(n.Attribute.STRING).setFixed(), a.add("selected", -1).setType(n.Attribute.NUMBER), a.add("show", !0).setType(n.Attribute.BOOLEAN), a.add("config", void 0).setType("any"), a.addInherited("barSize", "borderBarSize").setType(n.Attribute.NUMBER), a.addInherited("enableDrop", "borderEnableDrop").setType(n.Attribute.BOOLEAN), a.addInherited("className", "borderClassName").setType(n.Attribute.STRING), a.addInherited("autoSelectTabWhenOpen", "borderAutoSelectTabWhenOpen").setType(n.Attribute.BOOLEAN), a.addInherited("autoSelectTabWhenClosed", "borderAutoSelectTabWhenClosed").setType(n.Attribute.BOOLEAN), a.addInherited("size", "borderSize").setType(n.Attribute.NUMBER), a.addInherited("minSize", "borderMinSize").setType(n.Attribute.NUMBER), a.addInherited("enableAutoHide", "borderEnableAutoHide").setType(n.Attribute.BOOLEAN), a;
    }
    /** @internal */
    constructor(a, s, c) {
      super(c), this._adjustedSize = 0, this._calculatedBorderBarSize = 0, this._location = a, this._drawChildren = [], this._attributes.id = `border_${a.getName()}`, st._attributeDefinitions.fromJson(s, this._attributes), c._addNode(this);
    }
    getLocation() {
      return this._location;
    }
    getTabHeaderRect() {
      return this._tabHeaderRect;
    }
    getRect() {
      return this._tabHeaderRect;
    }
    getContentRect() {
      return this._contentRect;
    }
    isEnableDrop() {
      return this._getAttr("enableDrop");
    }
    isAutoSelectTab(a) {
      return a == null && (a = this.getSelected() !== -1), a ? this._getAttr("autoSelectTabWhenOpen") : this._getAttr("autoSelectTabWhenClosed");
    }
    getClassName() {
      return this._getAttr("className");
    }
    /** @internal */
    calcBorderBarSize(a) {
      const s = this._getAttr("barSize");
      s !== 0 ? this._calculatedBorderBarSize = s : this._calculatedBorderBarSize = a.borderBarSize;
    }
    getBorderBarSize() {
      return this._calculatedBorderBarSize;
    }
    getSize() {
      const a = this._getAttr("size"), s = this.getSelected();
      if (s === -1)
        return a;
      {
        const c = this._children[s], y = this._location._orientation === i.Orientation.HORZ ? c._getAttr("borderWidth") : c._getAttr("borderHeight");
        return y === -1 ? a : y;
      }
    }
    getMinSize() {
      return this._getAttr("minSize");
    }
    getSelected() {
      return this._attributes.selected;
    }
    getSelectedNode() {
      if (this.getSelected() !== -1)
        return this._children[this.getSelected()];
    }
    getOrientation() {
      return this._location.getOrientation();
    }
    /**
     * Returns the config attribute that can be used to store node specific data that
     * WILL be saved to the json. The config attribute should be changed via the action Actions.updateNodeAttributes rather
     * than directly, for example:
     * this.state.model.doAction(
     *   FlexLayout.Actions.updateNodeAttributes(node.getId(), {config:myConfigObject}));
     */
    getConfig() {
      return this._attributes.config;
    }
    isMaximized() {
      return !1;
    }
    isShowing() {
      return this._attributes.show ? !(this._model._getShowHiddenBorder() !== this._location && this.isAutoHide() && this._children.length === 0) : !1;
    }
    isAutoHide() {
      return this._getAttr("enableAutoHide");
    }
    /** @internal */
    _setSelected(a) {
      this._attributes.selected = a;
    }
    /** @internal */
    _setSize(a) {
      const s = this.getSelected();
      if (s === -1)
        this._attributes.size = a;
      else {
        const c = this._children[s];
        (this._location._orientation === i.Orientation.HORZ ? c._getAttr("borderWidth") : c._getAttr("borderHeight")) === -1 ? this._attributes.size = a : this._location._orientation === i.Orientation.HORZ ? c._setBorderWidth(a) : c._setBorderHeight(a);
      }
    }
    /** @internal */
    _updateAttrs(a) {
      st._attributeDefinitions.update(a, this._attributes);
    }
    /** @internal */
    _getDrawChildren() {
      return this._drawChildren;
    }
    /** @internal */
    _setAdjustedSize(a) {
      this._adjustedSize = a;
    }
    /** @internal */
    _getAdjustedSize() {
      return this._adjustedSize;
    }
    /** @internal */
    _layoutBorderOuter(a, s) {
      this.calcBorderBarSize(s);
      const c = this._location.split(a, this.getBorderBarSize());
      return this._tabHeaderRect = c.start, c.end;
    }
    /** @internal */
    _layoutBorderInner(a, s) {
      this._drawChildren = [];
      const c = this._location, y = c.split(a, this._adjustedSize + this._model.getSplitterSize()), w = c.reflect().split(y.start, this._model.getSplitterSize());
      this._contentRect = w.end;
      for (let p = 0; p < this._children.length; p++) {
        const v = this._children[p];
        v._layout(this._contentRect, s), v._setVisible(p === this.getSelected()), this._drawChildren.push(v);
      }
      if (this.getSelected() === -1)
        return a;
      {
        const p = new g.SplitterNode(this._model);
        return p._setParent(this), p._setRect(w.start), this._drawChildren.push(p), y.end;
      }
    }
    /** @internal */
    _remove(a) {
      const s = this._removeChild(a);
      this.getSelected() !== -1 && (0, f.adjustSelectedIndex)(this, s);
    }
    /** @internal */
    canDrop(a, s, c) {
      if (a.getType() !== T.TabNode.TYPE)
        return;
      let y;
      const w = t.DockLocation.CENTER;
      if (this._tabHeaderRect.contains(s, c)) {
        if (this._location._orientation === i.Orientation.VERT)
          if (this._children.length > 0) {
            let p = this._children[0], v = p.getTabRect();
            const m = v.y, _ = v.height;
            let E = this._tabHeaderRect.x, C = 0;
            for (let S = 0; S < this._children.length; S++) {
              if (p = this._children[S], v = p.getTabRect(), C = v.x + v.width / 2, s >= E && s < C) {
                const N = new o.Rect(v.x - 2, m, 3, _);
                y = new r.DropInfo(this, N, w, S, l.CLASSES.FLEXLAYOUT__OUTLINE_RECT);
                break;
              }
              E = C;
            }
            if (y == null) {
              const S = new o.Rect(v.getRight() - 2, m, 3, _);
              y = new r.DropInfo(this, S, w, this._children.length, l.CLASSES.FLEXLAYOUT__OUTLINE_RECT);
            }
          } else {
            const p = new o.Rect(this._tabHeaderRect.x + 1, this._tabHeaderRect.y + 2, 3, 18);
            y = new r.DropInfo(this, p, w, 0, l.CLASSES.FLEXLAYOUT__OUTLINE_RECT);
          }
        else if (this._children.length > 0) {
          let p = this._children[0], v = p.getTabRect();
          const m = v.x, _ = v.width;
          let E = this._tabHeaderRect.y, C = 0;
          for (let S = 0; S < this._children.length; S++) {
            if (p = this._children[S], v = p.getTabRect(), C = v.y + v.height / 2, c >= E && c < C) {
              const N = new o.Rect(m, v.y - 2, _, 3);
              y = new r.DropInfo(this, N, w, S, l.CLASSES.FLEXLAYOUT__OUTLINE_RECT);
              break;
            }
            E = C;
          }
          if (y == null) {
            const S = new o.Rect(m, v.getBottom() - 2, _, 3);
            y = new r.DropInfo(this, S, w, this._children.length, l.CLASSES.FLEXLAYOUT__OUTLINE_RECT);
          }
        } else {
          const p = new o.Rect(this._tabHeaderRect.x + 2, this._tabHeaderRect.y + 1, 18, 3);
          y = new r.DropInfo(this, p, w, 0, l.CLASSES.FLEXLAYOUT__OUTLINE_RECT);
        }
        if (!a._canDockInto(a, y))
          return;
      } else if (this.getSelected() !== -1 && this._contentRect.contains(s, c)) {
        const p = this._contentRect;
        if (y = new r.DropInfo(this, p, w, -1, l.CLASSES.FLEXLAYOUT__OUTLINE_RECT), !a._canDockInto(a, y))
          return;
      }
      return y;
    }
    /** @internal */
    drop(a, s, c, y) {
      let w = 0;
      const p = a.getParent();
      p !== void 0 && (w = p._removeChild(a), p !== this && p instanceof st && p.getSelected() === w ? p._setSelected(-1) : (0, f.adjustSelectedIndex)(p, w)), a.getType() === T.TabNode.TYPE && p === this && w < c && c > 0 && c--;
      let v = c;
      v === -1 && (v = this._children.length), a.getType() === T.TabNode.TYPE && this._addChild(a, v), (y || y !== !1 && this.isAutoSelectTab()) && this._setSelected(v), this._model._tidy();
    }
    toJson() {
      const a = {};
      return st._attributeDefinitions.toJson(a, this._attributes), a.location = this._location.getName(), a.children = this._children.map((s) => s.toJson()), a;
    }
    /** @internal */
    _getSplitterBounds(a, s = !1) {
      const c = [0, 0], y = s ? this.getMinSize() : 0, w = this._model._getOuterInnerRects().outer, p = this._model._getOuterInnerRects().inner, v = this._model.getRoot();
      return this._location === t.DockLocation.TOP ? (c[0] = w.y + y, c[1] = Math.max(c[0], p.getBottom() - a.getHeight() - v.getMinHeight())) : this._location === t.DockLocation.LEFT ? (c[0] = w.x + y, c[1] = Math.max(c[0], p.getRight() - a.getWidth() - v.getMinWidth())) : this._location === t.DockLocation.BOTTOM ? (c[1] = w.getBottom() - a.getHeight() - y, c[0] = Math.min(c[1], p.y + v.getMinHeight())) : this._location === t.DockLocation.RIGHT && (c[1] = w.getRight() - a.getWidth() - y, c[0] = Math.min(c[1], p.x + v.getMinWidth())), c;
    }
    /** @internal */
    _calculateSplit(a, s) {
      const c = this._getSplitterBounds(a);
      return this._location === t.DockLocation.BOTTOM || this._location === t.DockLocation.RIGHT ? Math.max(0, c[1] - s) : Math.max(0, s - c[0]);
    }
    /** @internal */
    _getAttributeDefinitions() {
      return st._attributeDefinitions;
    }
    /** @internal */
    static getAttributeDefinitions() {
      return st._attributeDefinitions;
    }
  };
  return Xt.BorderNode = d, d.TYPE = "border", d._attributeDefinitions = d._createAttributeDefinitions(), Xt;
}
var Bn = {}, kn = {}, ft = {};
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.I18nLabel = void 0, function(e) {
    e.Close_Tab = "Close", e.Close_Tabset = "Close tabset", e.Move_Tab = "Move: ", e.Move_Tabset = "Move tabset", e.Maximize = "Maximize tabset", e.Restore = "Restore tabset", e.Float_Tab = "Show selected tab in floating window", e.Overflow_Menu_Tooltip = "Hidden tabs", e.Floating_Window_Message = "This panel is shown in a floating window", e.Floating_Window_Show_Window = "Show window", e.Floating_Window_Dock_Window = "Dock window", e.Error_rendering_component = "Error rendering component";
  }(n.I18nLabel || (n.I18nLabel = {}));
})(ft);
var Mn = {};
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.ICloseType = void 0, function(e) {
    e[e.Visible = 1] = "Visible", e[e.Always = 2] = "Always", e[e.Selected = 3] = "Selected";
  }(n.ICloseType || (n.ICloseType = {}));
})(Mn);
var He = {};
Object.defineProperty(He, "__esModule", { value: !0 });
He.isAuxMouseEvent = He.hideElement = He.getRenderStateEx = void 0;
const wi = F;
function Ss(n, e, t, r, i) {
  let o = t ? t(e) : void 0, l = e.getName(), u = e.getName();
  i === void 0 && (i = 0);
  function g(d) {
    return d.titleContent !== void 0;
  }
  if (r !== void 0) {
    const d = r(e);
    d !== void 0 && (typeof d == "string" ? (l = d, u = d) : g(d) ? (l = d.titleContent, u = d.name) : l = d);
  }
  o === void 0 && e.getIcon() !== void 0 && (i !== 0 ? o = wi.createElement("img", { style: { width: "1em", height: "1em", transform: "rotate(" + i + "deg)" }, src: e.getIcon(), alt: "leadingContent" }) : o = wi.createElement("img", { style: { width: "1em", height: "1em" }, src: e.getIcon(), alt: "leadingContent" }));
  const f = { leading: o, content: l, name: u, buttons: [] };
  return n.customizeTab(e, f), e._setRenderedName(f.name), f;
}
He.getRenderStateEx = Ss;
function Ls(n, e) {
  e ? n.visibility = "hidden" : n.display = "none";
}
He.hideElement = Ls;
function As(n) {
  let e = !1;
  return n.nativeEvent instanceof MouseEvent && (n.nativeEvent.button !== 0 || n.ctrlKey || n.altKey || n.metaKey || n.shiftKey) && (e = !0), e;
}
He.isAuxMouseEvent = As;
Object.defineProperty(kn, "__esModule", { value: !0 });
kn.BorderButton = void 0;
const gt = F, Cs = ft, ar = Ve, Rs = Ie, Oi = Mn, _t = Ee, sr = He, Ns = (n) => {
  const { layout: e, node: t, selected: r, border: i, iconFactory: o, titleFactory: l, icons: u, path: g } = n, T = gt.useRef(null), f = gt.useRef(null), d = (L) => {
    !(0, sr.isAuxMouseEvent)(L) && !e.getEditingTab() && e.dragStart(L, void 0, t, t.isEnableDrag(), s, c);
  }, h = (L) => {
    (0, sr.isAuxMouseEvent)(L) && e.auxMouseClick(t, L);
  }, a = (L) => {
    e.showContextMenu(t, L);
  }, s = () => {
    e.doAction(ar.Actions.selectTab(t.getId()));
  }, c = (L) => {
  }, y = () => {
    const L = t.getCloseType();
    return !!(r || L === Oi.ICloseType.Always || L === Oi.ICloseType.Visible && window.matchMedia && window.matchMedia("(hover: hover) and (pointer: fine)").matches);
  }, w = (L) => {
    y() ? e.doAction(ar.Actions.deleteTab(t.getId())) : s();
  }, p = (L) => {
    L.stopPropagation();
  };
  gt.useLayoutEffect(() => {
    v(), e.getEditingTab() === t && f.current.select();
  });
  const v = () => {
    var L;
    const U = e.getDomRect(), q = (L = T.current) === null || L === void 0 ? void 0 : L.getBoundingClientRect();
    q && U && t._setTabRect(new Rs.Rect(q.left - U.left, q.top - U.top, q.width, q.height));
  }, m = (L) => {
    L.stopPropagation();
  }, _ = (L) => {
    L.code === "Escape" ? e.setEditingTab(void 0) : L.code === "Enter" && (e.setEditingTab(void 0), e.doAction(ar.Actions.renameTab(t.getId(), L.target.value)));
  }, E = e.getClassName;
  let C = E(_t.CLASSES.FLEXLAYOUT__BORDER_BUTTON) + " " + E(_t.CLASSES.FLEXLAYOUT__BORDER_BUTTON_ + i);
  r ? C += " " + E(_t.CLASSES.FLEXLAYOUT__BORDER_BUTTON__SELECTED) : C += " " + E(_t.CLASSES.FLEXLAYOUT__BORDER_BUTTON__UNSELECTED), t.getClassName() !== void 0 && (C += " " + t.getClassName());
  let S = 0;
  t.getModel().isEnableRotateBorderIcons() === !1 && (i === "left" ? S = 90 : i === "right" && (S = -90));
  const N = (0, sr.getRenderStateEx)(e, t, o, l, S);
  let D = N.content ? gt.createElement("div", { className: E(_t.CLASSES.FLEXLAYOUT__BORDER_BUTTON_CONTENT) }, N.content) : null;
  const P = N.leading ? gt.createElement("div", { className: E(_t.CLASSES.FLEXLAYOUT__BORDER_BUTTON_LEADING) }, N.leading) : null;
  if (e.getEditingTab() === t && (D = gt.createElement("input", { ref: f, className: E(_t.CLASSES.FLEXLAYOUT__TAB_BUTTON_TEXTBOX), "data-layout-path": g + "/textbox", type: "text", autoFocus: !0, defaultValue: t.getName(), onKeyDown: _, onMouseDown: m, onTouchStart: m })), t.isEnableClose()) {
    const L = e.i18nName(Cs.I18nLabel.Close_Tab);
    N.buttons.push(gt.createElement("div", { key: "close", "data-layout-path": g + "/button/close", title: L, className: E(_t.CLASSES.FLEXLAYOUT__BORDER_BUTTON_TRAILING), onMouseDown: p, onClick: w, onTouchStart: p }, typeof u.close == "function" ? u.close(t) : u.close));
  }
  return gt.createElement(
    "div",
    { ref: T, "data-layout-path": g, className: C, onMouseDown: d, onClick: h, onAuxClick: h, onContextMenu: a, onTouchStart: d, title: t.getHelpText() },
    P,
    D,
    N.buttons
  );
};
kn.BorderButton = Ns;
var sn = {}, ln = {};
Object.defineProperty(ln, "__esModule", { value: !0 });
ln.TabButtonStamp = void 0;
const vn = F, lr = Ee, Ds = He, Is = (n) => {
  const { layout: e, node: t, iconFactory: r, titleFactory: i } = n, o = vn.useRef(null), l = e.getClassName;
  let u = l(lr.CLASSES.FLEXLAYOUT__TAB_BUTTON_STAMP);
  const g = (0, Ds.getRenderStateEx)(e, t, r, i);
  let T = g.content ? vn.createElement("div", { className: l(lr.CLASSES.FLEXLAYOUT__TAB_BUTTON_CONTENT) }, g.content) : t._getNameForOverflowMenu();
  const f = g.leading ? vn.createElement("div", { className: l(lr.CLASSES.FLEXLAYOUT__TAB_BUTTON_LEADING) }, g.leading) : null;
  return vn.createElement(
    "div",
    { ref: o, className: u, title: t.getHelpText() },
    f,
    T
  );
};
ln.TabButtonStamp = Is;
Object.defineProperty(sn, "__esModule", { value: !0 });
sn.showPopup = void 0;
const Sn = F, dr = At, Br = Ee, xs = ln;
function Ps(n, e, t, r, i, o) {
  var l;
  const u = r.getRootDiv(), g = r.getClassName, T = n.ownerDocument, f = n.getBoundingClientRect(), d = (l = u == null ? void 0 : u.getBoundingClientRect()) !== null && l !== void 0 ? l : new DOMRect(0, 0, 100, 100), h = T.createElement("div");
  h.className = g(Br.CLASSES.FLEXLAYOUT__POPUP_MENU_CONTAINER), f.left < d.left + d.width / 2 ? h.style.left = f.left - d.left + "px" : h.style.right = d.right - f.right + "px", f.top < d.top + d.height / 2 ? h.style.top = f.top - d.top + "px" : h.style.bottom = d.bottom - f.bottom + "px", dr.DragDrop.instance.addGlass(() => a()), dr.DragDrop.instance.setGlassCursorOverride("default"), u && u.appendChild(h);
  const a = () => {
    r.hidePortal(), dr.DragDrop.instance.hideGlass(), u && u.removeChild(h), h.removeEventListener("mousedown", s), T.removeEventListener("mousedown", c);
  }, s = (y) => {
    y.stopPropagation();
  }, c = (y) => {
    a();
  };
  h.addEventListener("mousedown", s), T.addEventListener("mousedown", c), r.showPortal(Sn.createElement(Bs, { currentDocument: T, onSelect: t, onHide: a, items: e, classNameMapper: g, layout: r, iconFactory: i, titleFactory: o }), h);
}
sn.showPopup = Ps;
const Bs = (n) => {
  const { items: e, onHide: t, onSelect: r, classNameMapper: i, layout: o, iconFactory: l, titleFactory: u } = n, g = (f, d) => {
    r(f), t(), d.stopPropagation();
  }, T = e.map((f, d) => Sn.createElement("div", { key: f.index, className: i(Br.CLASSES.FLEXLAYOUT__POPUP_MENU_ITEM), "data-layout-path": "/popup-menu/tb" + d, onClick: (h) => g(f, h), title: f.node.getHelpText() }, f.node.getModel().isLegacyOverflowMenu() ? f.node._getNameForOverflowMenu() : Sn.createElement(xs.TabButtonStamp, { node: f.node, layout: o, iconFactory: l, titleFactory: u })));
  return Sn.createElement("div", { className: i(Br.CLASSES.FLEXLAYOUT__POPUP_MENU), "data-layout-path": "/popup-menu" }, T);
};
var dn = {};
Object.defineProperty(dn, "__esModule", { value: !0 });
dn.useTabOverflow = void 0;
const Qe = F, ks = Ie, Si = wt(), cr = ve, Ms = (n, e, t, r) => {
  const i = Qe.useRef(!0), o = Qe.useRef(!1), l = Qe.useRef(new ks.Rect(0, 0, 0, 0)), u = Qe.useRef(null), [g, T] = Qe.useState(0), f = Qe.useRef(!1), [d, h] = Qe.useState([]), a = Qe.useRef(0);
  Qe.useLayoutEffect(() => {
    f.current = !1;
  }, [n.getSelectedNode(), n.getRect().width, n.getRect().height]), Qe.useLayoutEffect(() => {
    v();
  });
  const s = u.current;
  Qe.useEffect(() => {
    if (s)
      return s.addEventListener("wheel", c, { passive: !1 }), () => {
        s.removeEventListener("wheel", c);
      };
  }, [s]);
  const c = (_) => {
    _.preventDefault();
  }, y = (_) => e === cr.Orientation.HORZ ? _.x : _.y, w = (_) => e === cr.Orientation.HORZ ? _.getRight() : _.getBottom(), p = (_) => e === cr.Orientation.HORZ ? _.width : _.height, v = () => {
    i.current === !0 && (o.current = !1);
    const E = n instanceof Si.TabSetNode ? n.getRect() : n.getTabHeaderRect();
    let C = n.getChildren()[n.getChildren().length - 1];
    const S = r.current === null ? 0 : p(r.current.getBoundingClientRect());
    if (i.current === !0 || a.current === 0 && d.length !== 0 || E.width !== l.current.width || // incase rect changed between first render and second
    E.height !== l.current.height) {
      a.current = d.length, l.current = E;
      const N = n instanceof Si.TabSetNode ? n.isEnableTabStrip() === !0 : !0;
      let D = w(E) - S;
      if (t.current !== null && (D -= p(t.current.getBoundingClientRect())), N && n.getChildren().length > 0) {
        if (d.length === 0 && g === 0 && w(C.getTabRect()) + 2 < D)
          return;
        let P = 0;
        const L = n.getSelectedNode();
        if (L && !f.current) {
          const K = L.getTabRect(), M = y(K) - 2, oe = w(K) + 2;
          p(K) + 2 * 2 >= D - y(E) ? P = y(E) - M : (oe > D || M < y(E)) && (M < y(E) && (P = y(E) - M), oe + P > D && (P = D - oe));
        }
        const U = Math.max(0, D - (w(C.getTabRect()) + 2 + P)), q = Math.min(0, g + P + U), k = q - g, X = [];
        for (let K = 0; K < n.getChildren().length; K++) {
          const M = n.getChildren()[K];
          (y(M.getTabRect()) + k < y(E) || w(M.getTabRect()) + k > D) && X.push({ node: M, index: K });
        }
        X.length > 0 && (o.current = !0), i.current = !1, h(X), T(q);
      }
    } else
      i.current = !0;
  };
  return { selfRef: u, position: g, userControlledLeft: f, hiddenTabs: d, onMouseWheel: (_) => {
    let E = 0;
    Math.abs(_.deltaX) > Math.abs(_.deltaY) ? E = -_.deltaX : E = -_.deltaY, _.deltaMode === 1 && (E *= 40), T(g + E), f.current = !0, _.stopPropagation();
  }, tabsTruncated: o.current };
};
dn.useTabOverflow = Ms;
Object.defineProperty(Bn, "__esModule", { value: !0 });
Bn.BorderTabSet = void 0;
const Pe = F, Li = nt, Us = kn, Fs = sn, Ai = Ve, Ci = ft, js = dn, zs = ve, Ce = Ee, Ys = He, $s = (n) => {
  const { border: e, layout: t, iconFactory: r, titleFactory: i, icons: o, path: l } = n, u = Pe.useRef(null), g = Pe.useRef(null), T = Pe.useRef(null), { selfRef: f, position: d, userControlledLeft: h, hiddenTabs: a, onMouseWheel: s, tabsTruncated: c } = (0, js.useTabOverflow)(e, zs.Orientation.flip(e.getOrientation()), u, T), y = (M) => {
    (0, Ys.isAuxMouseEvent)(M) && t.auxMouseClick(e, M);
  }, w = (M) => {
    t.showContextMenu(e, M);
  }, p = (M) => {
    M.stopPropagation();
  }, v = (M) => {
    const oe = t.getShowOverflowMenu();
    if (oe !== void 0)
      oe(e, M, a, m);
    else {
      const A = g.current;
      (0, Fs.showPopup)(A, a, m, t, r, i);
    }
    M.stopPropagation();
  }, m = (M) => {
    t.doAction(Ai.Actions.selectTab(M.node.getId())), h.current = !1;
  }, _ = (M) => {
    const oe = e.getChildren()[e.getSelected()];
    oe !== void 0 && t.doAction(Ai.Actions.floatTab(oe.getId())), M.stopPropagation();
  }, E = t.getClassName;
  let C = e.getTabHeaderRect().styleWithPosition({});
  const S = [], N = (M) => {
    let oe = e.getSelected() === M, A = e.getChildren()[M];
    S.push(Pe.createElement(Us.BorderButton, { layout: t, border: e.getLocation().getName(), node: A, path: l + "/tb" + M, key: A.getId(), selected: oe, iconFactory: r, titleFactory: i, icons: o })), M < e.getChildren().length - 1 && S.push(Pe.createElement("div", { key: "divider" + M, className: E(Ce.CLASSES.FLEXLAYOUT__BORDER_TAB_DIVIDER) }));
  };
  for (let M = 0; M < e.getChildren().length; M++)
    N(M);
  let D = E(Ce.CLASSES.FLEXLAYOUT__BORDER) + " " + E(Ce.CLASSES.FLEXLAYOUT__BORDER_ + e.getLocation().getName());
  e.getClassName() !== void 0 && (D += " " + e.getClassName());
  let P = [], L = [];
  const U = { headerContent: void 0, buttons: P, stickyButtons: L, headerButtons: [], overflowPosition: void 0 };
  if (t.customizeTabSet(e, U), P = U.buttons, U.overflowPosition === void 0 && (U.overflowPosition = L.length), L.length > 0 && (c ? P = [...L, ...P] : S.push(Pe.createElement("div", { ref: T, key: "sticky_buttons_container", onMouseDown: p, onTouchStart: p, onDragStart: (M) => {
    M.preventDefault();
  }, className: E(Ce.CLASSES.FLEXLAYOUT__TAB_TOOLBAR_STICKY_BUTTONS_CONTAINER) }, L))), a.length > 0) {
    const M = t.i18nName(Ci.I18nLabel.Overflow_Menu_Tooltip);
    let oe;
    typeof o.more == "function" ? oe = o.more(e, a) : oe = Pe.createElement(
      Pe.Fragment,
      null,
      o.more,
      Pe.createElement("div", { className: E(Ce.CLASSES.FLEXLAYOUT__TAB_BUTTON_OVERFLOW_COUNT) }, a.length)
    ), P.splice(Math.min(U.overflowPosition, P.length), 0, Pe.createElement("button", { key: "overflowbutton", ref: g, className: E(Ce.CLASSES.FLEXLAYOUT__BORDER_TOOLBAR_BUTTON) + " " + E(Ce.CLASSES.FLEXLAYOUT__BORDER_TOOLBAR_BUTTON_OVERFLOW) + " " + E(Ce.CLASSES.FLEXLAYOUT__BORDER_TOOLBAR_BUTTON_OVERFLOW_ + e.getLocation().getName()), title: M, onClick: v, onMouseDown: p, onTouchStart: p }, oe));
  }
  const q = e.getSelected();
  if (q !== -1) {
    const M = e.getChildren()[q];
    if (M !== void 0 && t.isSupportsPopout() && M.isEnableFloat() && !M.isFloating()) {
      const oe = t.i18nName(Ci.I18nLabel.Float_Tab);
      P.push(Pe.createElement("button", { key: "float", title: oe, className: E(Ce.CLASSES.FLEXLAYOUT__BORDER_TOOLBAR_BUTTON) + " " + E(Ce.CLASSES.FLEXLAYOUT__BORDER_TOOLBAR_BUTTON_FLOAT), onClick: _, onMouseDown: p, onTouchStart: p }, typeof o.popout == "function" ? o.popout(M) : o.popout));
    }
  }
  const k = Pe.createElement("div", { key: "toolbar", ref: u, className: E(Ce.CLASSES.FLEXLAYOUT__BORDER_TOOLBAR) + " " + E(Ce.CLASSES.FLEXLAYOUT__BORDER_TOOLBAR_ + e.getLocation().getName()) }, P);
  C = t.styleFont(C);
  let X = {};
  const K = e.getBorderBarSize() - 1;
  return e.getLocation() === Li.DockLocation.LEFT ? X = { right: K, height: K, top: d } : e.getLocation() === Li.DockLocation.RIGHT ? X = { left: K, height: K, top: d } : X = { height: K, left: d }, Pe.createElement(
    "div",
    { ref: f, dir: "ltr", style: C, className: D, "data-layout-path": l, onClick: y, onAuxClick: y, onContextMenu: w, onWheel: s },
    Pe.createElement(
      "div",
      { style: { height: K }, className: E(Ce.CLASSES.FLEXLAYOUT__BORDER_INNER) + " " + E(Ce.CLASSES.FLEXLAYOUT__BORDER_INNER_ + e.getLocation().getName()) },
      Pe.createElement("div", { style: X, className: E(Ce.CLASSES.FLEXLAYOUT__BORDER_INNER_TAB_CONTAINER) + " " + E(Ce.CLASSES.FLEXLAYOUT__BORDER_INNER_TAB_CONTAINER_ + e.getLocation().getName()) }, S)
    ),
    k
  );
};
Bn.BorderTabSet = $s;
var Un = {};
Object.defineProperty(Un, "__esModule", { value: !0 });
Un.Splitter = void 0;
const Jt = F, Ri = At, Ni = Ve, Di = ht(), ot = ve, qt = Ee, Hs = (n) => {
  const { layout: e, node: t, path: r } = n, i = Jt.useRef([]), o = Jt.useRef(void 0), l = t.getParent(), u = (v) => {
    var m;
    Ri.DragDrop.instance.setGlassCursorOverride(t.getOrientation() === ot.Orientation.HORZ ? "ns-resize" : "ew-resize"), Ri.DragDrop.instance.startDrag(v, T, f, h, g, void 0, void 0, e.getCurrentDocument(), (m = e.getRootDiv()) !== null && m !== void 0 ? m : void 0), i.current = l._getSplitterBounds(t, !0);
    const _ = e.getRootDiv();
    o.current = e.getCurrentDocument().createElement("div"), o.current.style.position = "absolute", o.current.className = e.getClassName(qt.CLASSES.FLEXLAYOUT__SPLITTER_DRAG), o.current.style.cursor = t.getOrientation() === ot.Orientation.HORZ ? "ns-resize" : "ew-resize";
    const E = t.getRect();
    t.getOrientation() === ot.Orientation.VERT && E.width < 2 ? E.width = 2 : t.getOrientation() === ot.Orientation.HORZ && E.height < 2 && (E.height = 2), E.positionElement(o.current), _ && _.appendChild(o.current);
  }, g = (v) => {
    const m = e.getRootDiv();
    m && m.removeChild(o.current);
  }, T = () => !0, f = (v) => {
    const m = e.getDomRect();
    if (!m)
      return;
    const _ = {
      x: v.clientX - m.left,
      y: v.clientY - m.top
    };
    o && (t.getOrientation() === ot.Orientation.HORZ ? o.current.style.top = a(_.y - 4) + "px" : o.current.style.left = a(_.x - 4) + "px"), e.isRealtimeResize() && d();
  }, d = () => {
    let v = 0;
    if (o && (t.getOrientation() === ot.Orientation.HORZ ? v = o.current.offsetTop : v = o.current.offsetLeft), l instanceof Di.BorderNode) {
      const m = l._calculateSplit(t, v);
      e.doAction(Ni.Actions.adjustBorderSplit(t.getParent().getId(), m));
    } else {
      const m = l._calculateSplit(t, v);
      m !== void 0 && e.doAction(Ni.Actions.adjustSplit(m));
    }
  }, h = () => {
    d();
    const v = e.getRootDiv();
    v && v.removeChild(o.current);
  }, a = (v) => {
    const m = i.current;
    let _ = v;
    return v < m[0] && (_ = m[0]), v > m[1] && (_ = m[1]), _;
  }, s = e.getClassName;
  let c = t.getRect();
  const y = c.styleWithPosition({
    cursor: t.getOrientation() === ot.Orientation.HORZ ? "ns-resize" : "ew-resize"
  });
  let w = s(qt.CLASSES.FLEXLAYOUT__SPLITTER) + " " + s(qt.CLASSES.FLEXLAYOUT__SPLITTER_ + t.getOrientation().getName());
  l instanceof Di.BorderNode ? w += " " + s(qt.CLASSES.FLEXLAYOUT__SPLITTER_BORDER) : t.getModel().getMaximizedTabset() !== void 0 && (y.display = "none");
  const p = t.getModel().getSplitterExtra();
  if (p === 0)
    return Jt.createElement("div", { style: y, "data-layout-path": r, className: w, onTouchStart: u, onMouseDown: u });
  {
    let v = c.clone();
    v.x = 0, v.y = 0, t.getOrientation() === ot.Orientation.VERT ? v.width += p : v.height += p;
    const m = v.styleWithPosition({
      cursor: t.getOrientation() === ot.Orientation.HORZ ? "ns-resize" : "ew-resize"
    }), _ = s(qt.CLASSES.FLEXLAYOUT__SPLITTER_EXTRA);
    return Jt.createElement(
      "div",
      { style: y, "data-layout-path": r, className: w },
      Jt.createElement("div", { style: m, className: _, onTouchStart: u, onMouseDown: u })
    );
  }
};
Un.Splitter = Hs;
var Fn = {}, cn = {};
Object.defineProperty(cn, "__esModule", { value: !0 });
cn.ErrorBoundary = void 0;
const ur = F, Ii = Ee;
class Ws extends ur.Component {
  constructor(e) {
    super(e), this.state = { hasError: !1 };
  }
  static getDerivedStateFromError(e) {
    return { hasError: !0 };
  }
  componentDidCatch(e, t) {
    console.debug(e), console.debug(t);
  }
  render() {
    return this.state.hasError ? ur.createElement(
      "div",
      { className: Ii.CLASSES.FLEXLAYOUT__ERROR_BOUNDARY_CONTAINER },
      ur.createElement("div", { className: Ii.CLASSES.FLEXLAYOUT__ERROR_BOUNDARY_CONTENT }, this.props.message)
    ) : this.props.children;
  }
}
cn.ErrorBoundary = Ws;
Object.defineProperty(Fn, "__esModule", { value: !0 });
Fn.Tab = void 0;
const Kt = F, Xs = F, Vs = Ve, xi = wt(), hr = Ee, Gs = cn, Js = ft, qs = ht(), Pi = He, Ks = (n) => {
  const { layout: e, selected: t, node: r, factory: i, path: o } = n, [l, u] = Kt.useState(!n.node.isEnableRenderOnDemand() || n.selected);
  Kt.useLayoutEffect(() => {
    !l && t && u(!0);
  });
  const g = () => {
    const c = r.getParent();
    c.getType() === xi.TabSetNode.TYPE && (c.isActive() || e.doAction(Vs.Actions.setActiveTabset(c.getId())));
  }, T = e.getClassName, f = r.getModel().isUseVisibility(), d = r.getParent(), h = r._styleWithPosition();
  t || (0, Pi.hideElement)(h, f), d instanceof xi.TabSetNode && r.getModel().getMaximizedTabset() !== void 0 && !d.isMaximized() && (0, Pi.hideElement)(h, f);
  let a;
  l && (a = i(r));
  let s = T(hr.CLASSES.FLEXLAYOUT__TAB);
  return d instanceof qs.BorderNode && (s += " " + T(hr.CLASSES.FLEXLAYOUT__TAB_BORDER), s += " " + T(hr.CLASSES.FLEXLAYOUT__TAB_BORDER_ + d.getLocation().getName())), r.getContentClassName() !== void 0 && (s += " " + r.getContentClassName()), Kt.createElement(
    "div",
    { className: s, "data-layout-path": o, onMouseDown: g, onTouchStart: g, style: h },
    Kt.createElement(
      Gs.ErrorBoundary,
      { message: n.layout.i18nName(Js.I18nLabel.Error_rendering_component) },
      Kt.createElement(Xs.Fragment, null, a)
    )
  );
};
Fn.Tab = Ks;
var jn = {}, zn = {};
Object.defineProperty(zn, "__esModule", { value: !0 });
zn.TabButton = void 0;
const pt = F, Zs = ft, fr = Ve, Qs = Ie, Bi = Mn, xt = Ee, gr = He, el = (n) => {
  const { layout: e, node: t, selected: r, iconFactory: i, titleFactory: o, icons: l, path: u } = n, g = pt.useRef(null), T = pt.useRef(null), f = (k) => {
    !(0, gr.isAuxMouseEvent)(k) && !e.getEditingTab() && e.dragStart(k, void 0, t, t.isEnableDrag(), a, s);
  }, d = (k) => {
    (0, gr.isAuxMouseEvent)(k) && e.auxMouseClick(t, k);
  }, h = (k) => {
    e.showContextMenu(t, k);
  }, a = () => {
    e.doAction(fr.Actions.selectTab(t.getId()));
  }, s = (k) => {
    t.isEnableRename() && c();
  }, c = () => {
    e.setEditingTab(t), e.getCurrentDocument().body.addEventListener("mousedown", y), e.getCurrentDocument().body.addEventListener("touchstart", y);
  }, y = (k) => {
    k.target !== T.current && (e.getCurrentDocument().body.removeEventListener("mousedown", y), e.getCurrentDocument().body.removeEventListener("touchstart", y), e.setEditingTab(void 0));
  }, w = () => {
    const k = t.getCloseType();
    return !!(r || k === Bi.ICloseType.Always || k === Bi.ICloseType.Visible && window.matchMedia && window.matchMedia("(hover: hover) and (pointer: fine)").matches);
  }, p = (k) => {
    w() ? e.doAction(fr.Actions.deleteTab(t.getId())) : a();
  }, v = (k) => {
    k.stopPropagation();
  };
  pt.useLayoutEffect(() => {
    m(), e.getEditingTab() === t && T.current.select();
  });
  const m = () => {
    var k;
    const X = e.getDomRect(), K = (k = g.current) === null || k === void 0 ? void 0 : k.getBoundingClientRect();
    K && X && t._setTabRect(new Qs.Rect(K.left - X.left, K.top - X.top, K.width, K.height));
  }, _ = (k) => {
    k.stopPropagation();
  }, E = (k) => {
    k.code === "Escape" ? e.setEditingTab(void 0) : k.code === "Enter" && (e.setEditingTab(void 0), e.doAction(fr.Actions.renameTab(t.getId(), k.target.value)));
  }, C = e.getClassName, S = t.getParent(), N = S.isEnableSingleTabStretch() && S.getChildren().length === 1;
  let D = N ? xt.CLASSES.FLEXLAYOUT__TAB_BUTTON_STRETCH : xt.CLASSES.FLEXLAYOUT__TAB_BUTTON, P = C(D);
  P += " " + C(D + "_" + S.getTabLocation()), N || (r ? P += " " + C(D + "--selected") : P += " " + C(D + "--unselected")), t.getClassName() !== void 0 && (P += " " + t.getClassName());
  const L = (0, gr.getRenderStateEx)(e, t, i, o);
  let U = L.content ? pt.createElement("div", { className: C(xt.CLASSES.FLEXLAYOUT__TAB_BUTTON_CONTENT) }, L.content) : null;
  const q = L.leading ? pt.createElement("div", { className: C(xt.CLASSES.FLEXLAYOUT__TAB_BUTTON_LEADING) }, L.leading) : null;
  if (e.getEditingTab() === t && (U = pt.createElement("input", { ref: T, className: C(xt.CLASSES.FLEXLAYOUT__TAB_BUTTON_TEXTBOX), "data-layout-path": u + "/textbox", type: "text", autoFocus: !0, defaultValue: t.getName(), onKeyDown: E, onMouseDown: _, onTouchStart: _ })), t.isEnableClose() && !N) {
    const k = e.i18nName(Zs.I18nLabel.Close_Tab);
    L.buttons.push(pt.createElement("div", { key: "close", "data-layout-path": u + "/button/close", title: k, className: C(xt.CLASSES.FLEXLAYOUT__TAB_BUTTON_TRAILING), onMouseDown: v, onClick: p, onTouchStart: v }, typeof l.close == "function" ? l.close(t) : l.close));
  }
  return pt.createElement(
    "div",
    { ref: g, "data-layout-path": u, className: P, onMouseDown: f, onClick: d, onAuxClick: d, onContextMenu: h, onTouchStart: f, title: t.getHelpText() },
    q,
    U,
    L.buttons
  );
};
zn.TabButton = el;
Object.defineProperty(jn, "__esModule", { value: !0 });
jn.TabSet = void 0;
const ue = F, Ot = ft, Zt = Ve, tl = sn, nl = zn, rl = dn, il = ve, he = Ee, _r = He, ol = (n) => {
  const { node: e, layout: t, iconFactory: r, titleFactory: i, icons: o, path: l } = n, u = ue.useRef(null), g = ue.useRef(null), T = ue.useRef(null), f = ue.useRef(null), { selfRef: d, position: h, userControlledLeft: a, hiddenTabs: s, onMouseWheel: c, tabsTruncated: y } = (0, rl.useTabOverflow)(e, il.Orientation.HORZ, u, f), w = (O) => {
    const te = t.getShowOverflowMenu();
    if (te !== void 0)
      te(e, O, s, p);
    else {
      const Ae = g.current;
      (0, tl.showPopup)(Ae, s, p, t, r, i);
    }
    O.stopPropagation();
  }, p = (O) => {
    t.doAction(Zt.Actions.selectTab(O.node.getId())), a.current = !1;
  }, v = (O) => {
    if (!(0, _r.isAuxMouseEvent)(O)) {
      let te = e.getName();
      if (te === void 0 ? te = "" : te = ": " + te, t.doAction(Zt.Actions.setActiveTabset(e.getId())), !t.getEditingTab()) {
        const Ae = t.i18nName(Ot.I18nLabel.Move_Tabset, te);
        e.getModel().getMaximizedTabset() !== void 0 ? t.dragStart(O, Ae, e, !1, (rt) => {
        }, P) : t.dragStart(O, Ae, e, e.isEnableDrag(), (rt) => {
        }, P);
      }
    }
  }, m = (O) => {
    (0, _r.isAuxMouseEvent)(O) && t.auxMouseClick(e, O);
  }, _ = (O) => {
    t.showContextMenu(e, O);
  }, E = (O) => {
    O.stopPropagation();
  }, C = (O) => {
    e.canMaximize() && t.maximize(e), O.stopPropagation();
  }, S = (O) => {
    t.doAction(Zt.Actions.deleteTabset(e.getId())), O.stopPropagation();
  }, N = (O) => {
    t.doAction(Zt.Actions.deleteTab(e.getChildren()[0].getId())), O.stopPropagation();
  }, D = (O) => {
    U !== void 0 && t.doAction(Zt.Actions.floatTab(U.getId())), O.stopPropagation();
  }, P = (O) => {
    e.canMaximize() && t.maximize(e);
  }, L = t.getClassName;
  T.current !== null && T.current.scrollLeft !== 0 && (T.current.scrollLeft = 0);
  const U = e.getSelectedNode();
  let q = e._styleWithPosition();
  e.getModel().getMaximizedTabset() !== void 0 && !e.isMaximized() && (0, _r.hideElement)(q, e.getModel().isUseVisibility());
  const k = [];
  if (e.isEnableTabStrip())
    for (let O = 0; O < e.getChildren().length; O++) {
      const te = e.getChildren()[O];
      let Ae = e.getSelected() === O;
      k.push(ue.createElement(nl.TabButton, { layout: t, node: te, path: l + "/tb" + O, key: te.getId(), selected: Ae, iconFactory: r, titleFactory: i, icons: o })), O < e.getChildren().length - 1 && k.push(ue.createElement("div", { key: "divider" + O, className: L(he.CLASSES.FLEXLAYOUT__TABSET_TAB_DIVIDER) }));
    }
  const X = e.getName() !== void 0;
  let K = [], M = [], oe = [];
  const A = { headerContent: e.getName(), stickyButtons: K, buttons: M, headerButtons: oe, overflowPosition: void 0 };
  t.customizeTabSet(e, A);
  const B = A.headerContent;
  K = A.stickyButtons, M = A.buttons, oe = A.headerButtons;
  const Y = e.isEnableSingleTabStretch() && e.getChildren().length === 1, V = Y && e.getChildren()[0].isEnableClose() || e.isEnableClose();
  if (A.overflowPosition === void 0 && (A.overflowPosition = K.length), K.length > 0 && (y || Y ? M = [...K, ...M] : k.push(ue.createElement("div", { ref: f, key: "sticky_buttons_container", onMouseDown: E, onTouchStart: E, onDragStart: (O) => {
    O.preventDefault();
  }, className: L(he.CLASSES.FLEXLAYOUT__TAB_TOOLBAR_STICKY_BUTTONS_CONTAINER) }, K))), s.length > 0) {
    const O = t.i18nName(Ot.I18nLabel.Overflow_Menu_Tooltip);
    let te;
    typeof o.more == "function" ? te = o.more(e, s) : te = ue.createElement(
      ue.Fragment,
      null,
      o.more,
      ue.createElement("div", { className: L(he.CLASSES.FLEXLAYOUT__TAB_BUTTON_OVERFLOW_COUNT) }, s.length)
    ), M.splice(Math.min(A.overflowPosition, M.length), 0, ue.createElement("button", { key: "overflowbutton", "data-layout-path": l + "/button/overflow", ref: g, className: L(he.CLASSES.FLEXLAYOUT__TAB_TOOLBAR_BUTTON) + " " + L(he.CLASSES.FLEXLAYOUT__TAB_BUTTON_OVERFLOW), title: O, onClick: w, onMouseDown: E, onTouchStart: E }, te));
  }
  if (U !== void 0 && t.isSupportsPopout() && U.isEnableFloat() && !U.isFloating()) {
    const O = t.i18nName(Ot.I18nLabel.Float_Tab);
    M.push(ue.createElement("button", { key: "float", "data-layout-path": l + "/button/float", title: O, className: L(he.CLASSES.FLEXLAYOUT__TAB_TOOLBAR_BUTTON) + " " + L(he.CLASSES.FLEXLAYOUT__TAB_TOOLBAR_BUTTON_FLOAT), onClick: D, onMouseDown: E, onTouchStart: E }, typeof o.popout == "function" ? o.popout(U) : o.popout));
  }
  if (e.canMaximize()) {
    const O = t.i18nName(Ot.I18nLabel.Restore), te = t.i18nName(Ot.I18nLabel.Maximize);
    (X ? oe : M).push(ue.createElement("button", { key: "max", "data-layout-path": l + "/button/max", title: e.isMaximized() ? O : te, className: L(he.CLASSES.FLEXLAYOUT__TAB_TOOLBAR_BUTTON) + " " + L(he.CLASSES.FLEXLAYOUT__TAB_TOOLBAR_BUTTON_ + (e.isMaximized() ? "max" : "min")), onClick: C, onMouseDown: E, onTouchStart: E }, e.isMaximized() ? typeof o.restore == "function" ? o.restore(e) : o.restore : typeof o.maximize == "function" ? o.maximize(e) : o.maximize));
  }
  if (!e.isMaximized() && V) {
    const O = Y ? t.i18nName(Ot.I18nLabel.Close_Tab) : t.i18nName(Ot.I18nLabel.Close_Tabset);
    (X ? oe : M).push(ue.createElement("button", { key: "close", "data-layout-path": l + "/button/close", title: O, className: L(he.CLASSES.FLEXLAYOUT__TAB_TOOLBAR_BUTTON) + " " + L(he.CLASSES.FLEXLAYOUT__TAB_TOOLBAR_BUTTON_CLOSE), onClick: Y ? N : S, onMouseDown: E, onTouchStart: E }, typeof o.closeTabset == "function" ? o.closeTabset(e) : o.closeTabset));
  }
  const W = ue.createElement("div", { key: "toolbar", ref: u, className: L(he.CLASSES.FLEXLAYOUT__TAB_TOOLBAR), onMouseDown: E, onTouchStart: E, onDragStart: (O) => {
    O.preventDefault();
  } }, M);
  let Q, $, j = L(he.CLASSES.FLEXLAYOUT__TABSET_TABBAR_OUTER);
  if (e.getClassNameTabStrip() !== void 0 && (j += " " + e.getClassNameTabStrip()), j += " " + he.CLASSES.FLEXLAYOUT__TABSET_TABBAR_OUTER_ + e.getTabLocation(), e.isActive() && !X && (j += " " + L(he.CLASSES.FLEXLAYOUT__TABSET_SELECTED)), e.isMaximized() && !X && (j += " " + L(he.CLASSES.FLEXLAYOUT__TABSET_MAXIMIZED)), Y) {
    const O = e.getChildren()[0];
    O.getTabSetClassName() !== void 0 && (j += " " + O.getTabSetClassName());
  }
  if (X) {
    const O = ue.createElement("div", { key: "toolbar", ref: u, className: L(he.CLASSES.FLEXLAYOUT__TAB_TOOLBAR), onMouseDown: E, onTouchStart: E, onDragStart: (Ae) => {
      Ae.preventDefault();
    } }, oe);
    let te = L(he.CLASSES.FLEXLAYOUT__TABSET_HEADER);
    e.isActive() && (te += " " + L(he.CLASSES.FLEXLAYOUT__TABSET_SELECTED)), e.isMaximized() && (te += " " + L(he.CLASSES.FLEXLAYOUT__TABSET_MAXIMIZED)), e.getClassNameHeader() !== void 0 && (te += " " + e.getClassNameHeader()), Q = ue.createElement(
      "div",
      { className: te, style: { height: e.getHeaderHeight() + "px" }, "data-layout-path": l + "/header", onMouseDown: v, onContextMenu: _, onClick: m, onAuxClick: m, onTouchStart: v },
      ue.createElement("div", { className: L(he.CLASSES.FLEXLAYOUT__TABSET_HEADER_CONTENT) }, B),
      O
    );
  }
  const Z = { height: e.getTabStripHeight() + "px" };
  $ = ue.createElement(
    "div",
    { className: j, style: Z, "data-layout-path": l + "/tabstrip", onMouseDown: v, onContextMenu: _, onClick: m, onAuxClick: m, onTouchStart: v },
    ue.createElement(
      "div",
      { ref: T, className: L(he.CLASSES.FLEXLAYOUT__TABSET_TABBAR_INNER) + " " + L(he.CLASSES.FLEXLAYOUT__TABSET_TABBAR_INNER_ + e.getTabLocation()) },
      ue.createElement("div", { style: { left: h, width: Y ? "100%" : "10000px" }, className: L(he.CLASSES.FLEXLAYOUT__TABSET_TABBAR_INNER_TAB_CONTAINER) + " " + L(he.CLASSES.FLEXLAYOUT__TABSET_TABBAR_INNER_TAB_CONTAINER_ + e.getTabLocation()) }, k)
    ),
    W
  ), q = t.styleFont(q);
  var ee = void 0;
  if (e.getChildren().length === 0) {
    const O = t.getTabSetPlaceHolderCallback();
    O && (ee = O(e));
  }
  const J = ue.createElement("div", { className: L(he.CLASSES.FLEXLAYOUT__TABSET_CONTENT) }, ee);
  var me;
  return e.getTabLocation() === "top" ? me = ue.createElement(
    ue.Fragment,
    null,
    Q,
    $,
    J
  ) : me = ue.createElement(
    ue.Fragment,
    null,
    Q,
    J,
    $
  ), ue.createElement("div", { ref: d, dir: "ltr", "data-layout-path": l, style: q, className: L(he.CLASSES.FLEXLAYOUT__TABSET), onWheel: c }, me);
};
jn.TabSet = ol;
var Yn = {};
Object.defineProperty(Yn, "__esModule", { value: !0 });
Yn.FloatingWindow = void 0;
const En = F, al = Io, sl = Ie, ll = Ee, dl = (n) => {
  const { title: e, id: t, url: r, rect: i, onCloseWindow: o, onSetWindow: l, children: u } = n, g = En.useRef(null), T = En.useRef(null), [f, d] = En.useState(void 0);
  return En.useLayoutEffect(() => {
    T.current && clearTimeout(T.current);
    let h = !0;
    const a = i || new sl.Rect(0, 0, 100, 100), s = Array.from(window.document.styleSheets).reduce((c, y) => {
      let w;
      try {
        w = y.cssRules;
      } catch {
      }
      try {
        return [
          ...c,
          {
            href: y.href,
            type: y.type,
            rules: w ? Array.from(w).map((p) => p.cssText) : null
          }
        ];
      } catch {
        return c;
      }
    }, []);
    return g.current = window.open(r, t, `left=${a.x},top=${a.y},width=${a.width},height=${a.height}`), g.current !== null ? (l(t, g.current), window.addEventListener("beforeunload", () => {
      g.current && (g.current.close(), g.current = null);
    }), g.current.addEventListener("load", () => {
      if (h) {
        const c = g.current.document;
        c.title = e;
        const y = c.createElement("div");
        y.className = ll.CLASSES.FLEXLAYOUT__FLOATING_WINDOW_CONTENT, c.body.appendChild(y), cl(c, s).then(() => {
          d(y);
        }), g.current.addEventListener("beforeunload", () => {
          o(t);
        });
      }
    })) : (console.warn(`Unable to open window ${r}`), o(t)), () => {
      h = !1, T.current = setTimeout(() => {
        g.current && (g.current.close(), g.current = null);
      }, 0);
    };
  }, []), f !== void 0 ? (0, al.createPortal)(u, f) : null;
};
Yn.FloatingWindow = dl;
function cl(n, e) {
  const t = n.head, r = [];
  for (const i of e)
    if (i.href) {
      const o = n.createElement("link");
      o.type = i.type, o.rel = "stylesheet", o.href = i.href, t.appendChild(o), r.push(new Promise((l) => {
        o.onload = () => l(!0);
      }));
    } else if (i.rules) {
      const o = n.createElement("style");
      for (const l of i.rules)
        o.appendChild(n.createTextNode(l));
      t.appendChild(o);
    }
  return Promise.all(r);
}
var $n = {};
Object.defineProperty($n, "__esModule", { value: !0 });
$n.FloatingWindowTab = void 0;
const pr = F, ul = cn, hl = ft, fl = F, gl = Ee, _l = (n) => {
  const { layout: e, node: t, factory: r } = n, i = e.getClassName, o = r(t);
  return pr.createElement(
    "div",
    { className: i(gl.CLASSES.FLEXLAYOUT__FLOATING_WINDOW_TAB) },
    pr.createElement(
      ul.ErrorBoundary,
      { message: n.layout.i18nName(hl.I18nLabel.Error_rendering_component) },
      pr.createElement(fl.Fragment, null, o)
    )
  );
};
$n.FloatingWindowTab = _l;
var Hn = {};
Object.defineProperty(Hn, "__esModule", { value: !0 });
Hn.TabFloating = void 0;
const mt = F, ki = Ve, Mi = wt(), mr = Ee, yr = ft, Ui = He, pl = (n) => {
  const { layout: e, selected: t, node: r, path: i } = n, o = () => {
    r.getWindow() && r.getWindow().focus();
  }, l = () => {
    e.doAction(ki.Actions.unFloatTab(r.getId()));
  }, u = () => {
    const w = r.getParent();
    w.getType() === Mi.TabSetNode.TYPE && (w.isActive() || e.doAction(ki.Actions.setActiveTabset(w.getId())));
  }, g = (w) => {
    w.preventDefault(), o();
  }, T = (w) => {
    w.preventDefault(), l();
  }, f = e.getClassName, d = r.getParent(), h = r._styleWithPosition();
  t || (0, Ui.hideElement)(h, r.getModel().isUseVisibility()), d instanceof Mi.TabSetNode && r.getModel().getMaximizedTabset() !== void 0 && !d.isMaximized() && (0, Ui.hideElement)(h, r.getModel().isUseVisibility());
  const a = e.i18nName(yr.I18nLabel.Floating_Window_Message), s = e.i18nName(yr.I18nLabel.Floating_Window_Show_Window), c = e.i18nName(yr.I18nLabel.Floating_Window_Dock_Window), y = e.getOnRenderFloatingTabPlaceholder();
  return y ? mt.createElement("div", { className: f(mr.CLASSES.FLEXLAYOUT__TAB_FLOATING), onMouseDown: u, onTouchStart: u, style: h }, y(l, o)) : mt.createElement(
    "div",
    { className: f(mr.CLASSES.FLEXLAYOUT__TAB_FLOATING), "data-layout-path": i, onMouseDown: u, onTouchStart: u, style: h },
    mt.createElement(
      "div",
      { className: f(mr.CLASSES.FLEXLAYOUT__TAB_FLOATING_INNER) },
      mt.createElement("div", null, a),
      mt.createElement(
        "div",
        null,
        mt.createElement("a", { href: "#", onClick: g }, s)
      ),
      mt.createElement(
        "div",
        null,
        mt.createElement("a", { href: "#", onClick: T }, c)
      )
    )
  );
};
Hn.TabFloating = pl;
var $e = {};
Object.defineProperty($e, "__esModule", { value: !0 });
$e.RestoreIcon = $e.PopoutIcon = $e.EdgeIcon = $e.OverflowIcon = $e.MaximizeIcon = $e.CloseIcon = void 0;
const Le = F, un = { width: "1em", height: "1em", display: "flex", alignItems: "center" }, ml = () => Le.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", style: un, viewBox: "0 0 24 24" },
  Le.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }),
  Le.createElement("path", { stroke: "var(--color-icon)", fill: "var(--color-icon)", d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" })
);
$e.CloseIcon = ml;
const yl = () => Le.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", style: un, viewBox: "0 0 24 24", fill: "var(--color-icon)" },
  Le.createElement("path", { d: "M0 0h24v24H0z", fill: "none" }),
  Le.createElement("path", { stroke: "var(--color-icon)", d: "M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" })
);
$e.MaximizeIcon = yl;
const bl = () => Le.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", style: un, viewBox: "0 0 24 24", fill: "var(--color-icon)" },
  Le.createElement("path", { d: "M0 0h24v24H0z", fill: "none" }),
  Le.createElement("path", { stroke: "var(--color-icon)", d: "M7 10l5 5 5-5z" })
);
$e.OverflowIcon = bl;
const Tl = () => Le.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", style: { display: "block", width: 10, height: 10 }, preserveAspectRatio: "none", viewBox: "0 0 100 100" },
  Le.createElement("path", { fill: "var(--color-edge-icon)", stroke: "var(--color-edge-icon)", d: "M10 30 L90 30 l-40 40 Z" })
);
$e.EdgeIcon = Tl;
const vl = () => (
  // <svg xmlns="http://www.w3.org/2000/svg"  style={style}  viewBox="0 0 24 24" fill="var(--color-icon)"><path d="M0 0h24v24H0z" fill="none"/><path stroke="var(--color-icon)" d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5z"/></svg>
  // <svg xmlns="http://www.w3.org/2000/svg" style={style} fill="none" viewBox="0 0 24 24" stroke="var(--color-icon)" stroke-width="2">
  //     <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  // </svg>
  Le.createElement(
    "svg",
    { xmlns: "http://www.w3.org/2000/svg", style: un, viewBox: "0 0 20 20", fill: "var(--color-icon)" },
    Le.createElement("path", { d: "M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" }),
    Le.createElement("path", { d: "M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" })
  )
);
$e.PopoutIcon = vl;
const El = () => Le.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", style: un, viewBox: "0 0 24 24", fill: "var(--color-icon)" },
  Le.createElement("path", { d: "M0 0h24v24H0z", fill: "none" }),
  Le.createElement("path", { stroke: "var(--color-icon)", d: "M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z" })
);
$e.RestoreIcon = El;
Object.defineProperty(In, "__esModule", { value: !0 });
In.Layout = void 0;
const H = F, wl = Io, et = nt, yt = At, Pt = Ve, Ol = ht(), Fi = Rt, bt = Et, ji = wt(), wn = Ie, Fe = Ee, Sl = Bn, zi = Un, Yi = Fn, Ll = jn, $i = Yn, Hi = $n, Wi = Hn, br = ve, St = $e, Al = ln, Cl = {
  close: H.createElement(St.CloseIcon, null),
  closeTabset: H.createElement(St.CloseIcon, null),
  popout: H.createElement(St.PopoutIcon, null),
  maximize: H.createElement(St.MaximizeIcon, null),
  restore: H.createElement(St.RestoreIcon, null),
  more: H.createElement(St.OverflowIcon, null),
  edgeArrow: H.createElement(St.EdgeIcon, null)
}, Rl = typeof window < "u" && (window.document.documentMode || /Edge\//.test(window.navigator.userAgent)), Nl = typeof window < "u" && window.matchMedia && window.matchMedia("(hover: hover) and (pointer: fine)").matches, Dl = Nl && !Rl;
class Il extends H.Component {
  constructor(e) {
    super(e), this.firstMove = !1, this.dragRectRendered = !0, this.dragDivText = void 0, this.edgeRectLength = 100, this.edgeRectWidth = 10, this.onModelChange = (t) => {
      this.forceUpdate(), this.props.onModelChange && this.props.onModelChange(this.props.model, t);
    }, this.updateRect = (t) => {
      if (t || (t = this.getDomRect()), !t)
        return;
      const r = new wn.Rect(0, 0, t.width, t.height);
      !r.equals(this.state.rect) && r.width !== 0 && r.height !== 0 && this.setState({ rect: r });
    }, this.updateLayoutMetrics = () => {
      if (this.findHeaderBarSizeRef.current) {
        const t = this.findHeaderBarSizeRef.current.getBoundingClientRect().height;
        t !== this.state.calculatedHeaderBarSize && this.setState({ calculatedHeaderBarSize: t });
      }
      if (this.findTabBarSizeRef.current) {
        const t = this.findTabBarSizeRef.current.getBoundingClientRect().height;
        t !== this.state.calculatedTabBarSize && this.setState({ calculatedTabBarSize: t });
      }
      if (this.findBorderBarSizeRef.current) {
        const t = this.findBorderBarSizeRef.current.getBoundingClientRect().height;
        t !== this.state.calculatedBorderBarSize && this.setState({ calculatedBorderBarSize: t });
      }
    }, this.getClassName = (t) => this.props.classNameMapper === void 0 ? t : this.props.classNameMapper(t), this.onCloseWindow = (t) => {
      this.doAction(Pt.Actions.unFloatTab(t));
      try {
        this.props.model.getNodeById(t)._setWindow(void 0);
      } catch {
      }
    }, this.onSetWindow = (t, r) => {
      this.props.model.getNodeById(t)._setWindow(r);
    }, this.onCancelAdd = () => {
      var t, r;
      const i = this.selfRef.current;
      i && this.dragDiv && i.removeChild(this.dragDiv), this.dragDiv = void 0, this.hidePortal(), this.fnNewNodeDropped != null && (this.fnNewNodeDropped(), this.fnNewNodeDropped = void 0);
      try {
        (r = (t = this.customDrop) === null || t === void 0 ? void 0 : t.invalidated) === null || r === void 0 || r.call(t);
      } catch (o) {
        console.error(o);
      }
      yt.DragDrop.instance.hideGlass(), this.newTabJson = void 0, this.customDrop = void 0;
    }, this.onCancelDrag = (t) => {
      var r, i;
      if (t) {
        const o = this.selfRef.current, l = this.outlineDiv;
        if (o && l)
          try {
            o.removeChild(l);
          } catch {
          }
        const u = this.dragDiv;
        if (o && u)
          try {
            o.removeChild(u);
          } catch {
          }
        this.dragDiv = void 0, this.hidePortal(), this.setState({ showEdges: !1 }), this.fnNewNodeDropped != null && (this.fnNewNodeDropped(), this.fnNewNodeDropped = void 0);
        try {
          (i = (r = this.customDrop) === null || r === void 0 ? void 0 : r.invalidated) === null || i === void 0 || i.call(r);
        } catch (g) {
          console.error(g);
        }
        yt.DragDrop.instance.hideGlass(), this.newTabJson = void 0, this.customDrop = void 0;
      }
      this.setState({ showHiddenBorder: et.DockLocation.CENTER });
    }, this.onDragDivMouseDown = (t) => {
      t.preventDefault(), this.dragStart(t, this.dragDivText, bt.TabNode._fromJson(this.newTabJson, this.props.model, !1), !0, void 0, void 0);
    }, this.dragStart = (t, r, i, o, l, u) => {
      var g, T;
      o ? (this.dragNode = i, this.dragDivText = r, yt.DragDrop.instance.startDrag(t, this.onDragStart, this.onDragMove, this.onDragEnd, this.onCancelDrag, l, u, this.currentDocument, (T = this.selfRef.current) !== null && T !== void 0 ? T : void 0)) : yt.DragDrop.instance.startDrag(t, void 0, void 0, void 0, void 0, l, u, this.currentDocument, (g = this.selfRef.current) !== null && g !== void 0 ? g : void 0);
    }, this.dragRectRender = (t, r, i, o) => {
      let l;
      if (t !== void 0 ? l = H.createElement("div", { style: { whiteSpace: "pre" } }, t.replace("<br>", `
`)) : r && r instanceof bt.TabNode && (l = H.createElement(Al.TabButtonStamp, { node: r, layout: this, iconFactory: this.props.iconFactory, titleFactory: this.props.titleFactory })), this.props.onRenderDragRect !== void 0) {
        const g = this.props.onRenderDragRect(l, r, i);
        g !== void 0 && (l = g);
      }
      this.dragRectRendered = !1;
      const u = this.dragDiv;
      u && (u.style.visibility = "hidden", this.showPortal(H.createElement(
        xl,
        {
          // wait for it to be rendered
          onRendered: () => {
            this.dragRectRendered = !0, o == null || o();
          }
        },
        l
      ), u));
    }, this.showPortal = (t, r) => {
      const i = (0, wl.createPortal)(t, r);
      this.setState({ portal: i });
    }, this.hidePortal = () => {
      this.setState({ portal: void 0 });
    }, this.onDragStart = () => {
      var t;
      this.dropInfo = void 0, this.customDrop = void 0;
      const r = this.selfRef.current;
      return this.outlineDiv = this.currentDocument.createElement("div"), this.outlineDiv.className = this.getClassName(Fe.CLASSES.FLEXLAYOUT__OUTLINE_RECT), this.outlineDiv.style.visibility = "hidden", r && r.appendChild(this.outlineDiv), this.dragDiv == null && (this.dragDiv = this.currentDocument.createElement("div"), this.dragDiv.className = this.getClassName(Fe.CLASSES.FLEXLAYOUT__DRAG_RECT), this.dragDiv.setAttribute("data-layout-path", "/drag-rectangle"), this.dragRectRender(this.dragDivText, this.dragNode, this.newTabJson), r && r.appendChild(this.dragDiv)), this.props.model.getMaximizedTabset() === void 0 && this.setState({ showEdges: this.props.model.isEnableEdgeDock() }), this.dragNode && this.outlineDiv && this.dragNode instanceof bt.TabNode && this.dragNode.getTabRect() !== void 0 && ((t = this.dragNode.getTabRect()) === null || t === void 0 || t.positionElement(this.outlineDiv)), this.firstMove = !0, !0;
    }, this.onDragMove = (t) => {
      var r, i, o, l, u, g, T;
      if (this.firstMove === !1) {
        const c = this.props.model._getAttribute("tabDragSpeed");
        this.outlineDiv && (this.outlineDiv.style.transition = `top ${c}s, left ${c}s, width ${c}s, height ${c}s`);
      }
      this.firstMove = !1;
      const f = (r = this.selfRef.current) === null || r === void 0 ? void 0 : r.getBoundingClientRect(), d = {
        x: t.clientX - ((i = f == null ? void 0 : f.left) !== null && i !== void 0 ? i : 0),
        y: t.clientY - ((o = f == null ? void 0 : f.top) !== null && o !== void 0 ? o : 0)
      };
      this.checkForBorderToShow(d.x, d.y);
      const h = (u = (l = this.dragDiv) === null || l === void 0 ? void 0 : l.getBoundingClientRect()) !== null && u !== void 0 ? u : new DOMRect(0, 0, 100, 100);
      let a = d.x - h.width / 2;
      a + h.width > ((g = f == null ? void 0 : f.width) !== null && g !== void 0 ? g : 0) && (a = ((T = f == null ? void 0 : f.width) !== null && T !== void 0 ? T : 0) - h.width), a = Math.max(0, a), this.dragDiv && (this.dragDiv.style.left = a + "px", this.dragDiv.style.top = d.y + 5 + "px", this.dragRectRendered && this.dragDiv.style.visibility === "hidden" && (this.dragDiv.style.visibility = "visible"));
      let s = this.props.model._findDropTargetNode(this.dragNode, d.x, d.y);
      s && (this.props.onTabDrag ? this.handleCustomTabDrag(s, d, t) : (this.dropInfo = s, this.outlineDiv && (this.outlineDiv.className = this.getClassName(s.className), s.rect.positionElement(this.outlineDiv), this.outlineDiv.style.visibility = "visible")));
    }, this.onDragEnd = (t) => {
      const r = this.selfRef.current;
      if (r && (this.outlineDiv && r.removeChild(this.outlineDiv), this.dragDiv && r.removeChild(this.dragDiv)), this.dragDiv = void 0, this.hidePortal(), this.setState({ showEdges: !1 }), yt.DragDrop.instance.hideGlass(), this.dropInfo)
        if (this.customDrop) {
          this.newTabJson = void 0;
          try {
            const { callback: i, dragging: o, over: l, x: u, y: g, location: T } = this.customDrop;
            i(o, l, u, g, T), this.fnNewNodeDropped != null && (this.fnNewNodeDropped(), this.fnNewNodeDropped = void 0);
          } catch (i) {
            console.error(i);
          }
        } else if (this.newTabJson !== void 0) {
          const i = this.doAction(Pt.Actions.addNode(this.newTabJson, this.dropInfo.node.getId(), this.dropInfo.location, this.dropInfo.index));
          this.fnNewNodeDropped != null && (this.fnNewNodeDropped(i, t), this.fnNewNodeDropped = void 0), this.newTabJson = void 0;
        } else
          this.dragNode !== void 0 && this.doAction(Pt.Actions.moveNode(this.dragNode.getId(), this.dropInfo.node.getId(), this.dropInfo.location, this.dropInfo.index));
      this.setState({ showHiddenBorder: et.DockLocation.CENTER });
    }, this.props.model._setChangeListener(this.onModelChange), this.tabIds = [], this.selfRef = H.createRef(), this.findHeaderBarSizeRef = H.createRef(), this.findTabBarSizeRef = H.createRef(), this.findBorderBarSizeRef = H.createRef(), this.supportsPopout = e.supportsPopout !== void 0 ? e.supportsPopout : Dl, this.popoutURL = e.popoutURL ? e.popoutURL : "popout.html", this.icons = Object.assign(Object.assign({}, Cl), e.icons), this.state = {
      rect: new wn.Rect(0, 0, 0, 0),
      calculatedHeaderBarSize: 25,
      calculatedTabBarSize: 26,
      calculatedBorderBarSize: 30,
      editingTab: void 0,
      showHiddenBorder: et.DockLocation.CENTER,
      showEdges: !1
    }, this.onDragEnter = this.onDragEnter.bind(this);
  }
  /** @internal */
  styleFont(e) {
    return this.props.font && (this.selfRef.current && (this.props.font.size && this.selfRef.current.style.setProperty("--font-size", this.props.font.size), this.props.font.family && this.selfRef.current.style.setProperty("--font-family", this.props.font.family)), this.props.font.style && (e.fontStyle = this.props.font.style), this.props.font.weight && (e.fontWeight = this.props.font.weight)), e;
  }
  /** @internal */
  doAction(e) {
    if (this.props.onAction !== void 0) {
      const t = this.props.onAction(e);
      return t !== void 0 ? this.props.model.doAction(t) : void 0;
    } else
      return this.props.model.doAction(e);
  }
  /** @internal */
  componentDidMount() {
    this.updateRect(), this.updateLayoutMetrics(), this.currentDocument = this.selfRef.current.ownerDocument, this.currentWindow = this.currentDocument.defaultView, this.resizeObserver = new ResizeObserver((t) => {
      this.updateRect(t[0].contentRect);
    });
    const e = this.selfRef.current;
    e && this.resizeObserver.observe(e);
  }
  /** @internal */
  componentDidUpdate() {
    this.updateLayoutMetrics(), this.props.model !== this.previousModel && (this.previousModel !== void 0 && this.previousModel._setChangeListener(void 0), this.props.model._setChangeListener(this.onModelChange), this.previousModel = this.props.model);
  }
  /** @internal */
  getCurrentDocument() {
    return this.currentDocument;
  }
  /** @internal */
  getDomRect() {
    var e;
    return (e = this.selfRef.current) === null || e === void 0 ? void 0 : e.getBoundingClientRect();
  }
  /** @internal */
  getRootDiv() {
    return this.selfRef.current;
  }
  /** @internal */
  isSupportsPopout() {
    return this.supportsPopout;
  }
  /** @internal */
  isRealtimeResize() {
    var e;
    return (e = this.props.realtimeResize) !== null && e !== void 0 ? e : !1;
  }
  /** @internal */
  onTabDrag(...e) {
    var t, r;
    return (r = (t = this.props).onTabDrag) === null || r === void 0 ? void 0 : r.call(t, ...e);
  }
  /** @internal */
  getPopoutURL() {
    return this.popoutURL;
  }
  /** @internal */
  componentWillUnmount() {
    var e;
    const t = this.selfRef.current;
    t && ((e = this.resizeObserver) === null || e === void 0 || e.unobserve(t));
  }
  /** @internal */
  setEditingTab(e) {
    this.setState({ editingTab: e });
  }
  /** @internal */
  getEditingTab() {
    return this.state.editingTab;
  }
  /** @internal */
  render() {
    if (!this.selfRef.current)
      return H.createElement("div", { ref: this.selfRef, className: this.getClassName(Fe.CLASSES.FLEXLAYOUT__LAYOUT) }, this.metricsElements());
    this.props.model._setPointerFine(window && window.matchMedia && window.matchMedia("(pointer: fine)").matches);
    const e = [], t = [], r = [], i = {}, o = [], l = {
      headerBarSize: this.state.calculatedHeaderBarSize,
      tabBarSize: this.state.calculatedTabBarSize,
      borderBarSize: this.state.calculatedBorderBarSize
    };
    this.props.model._setShowHiddenBorder(this.state.showHiddenBorder), this.centerRect = this.props.model._layout(this.state.rect, l), this.renderBorder(this.props.model.getBorderSet(), e, i, r, o), this.renderChildren("", this.props.model.getRoot(), t, i, r, o);
    const u = [], g = {};
    for (const d of this.tabIds)
      i[d] && (u.push(d), g[d] = d);
    this.tabIds = u;
    for (const d of Object.keys(i))
      g[d] || this.tabIds.push(d);
    const T = [], f = this.icons.edgeArrow;
    if (this.state.showEdges) {
      const d = this.centerRect, h = this.edgeRectLength, a = this.edgeRectWidth, s = this.edgeRectLength / 2, c = this.getClassName(Fe.CLASSES.FLEXLAYOUT__EDGE_RECT), y = 50;
      T.push(H.createElement(
        "div",
        { key: "North", style: { top: d.y, left: d.x + d.width / 2 - s, width: h, height: a, borderBottomLeftRadius: y, borderBottomRightRadius: y }, className: c + " " + this.getClassName(Fe.CLASSES.FLEXLAYOUT__EDGE_RECT_TOP) },
        H.createElement("div", { style: { transform: "rotate(180deg)" } }, f)
      )), T.push(H.createElement(
        "div",
        { key: "West", style: { top: d.y + d.height / 2 - s, left: d.x, width: a, height: h, borderTopRightRadius: y, borderBottomRightRadius: y }, className: c + " " + this.getClassName(Fe.CLASSES.FLEXLAYOUT__EDGE_RECT_LEFT) },
        H.createElement("div", { style: { transform: "rotate(90deg)" } }, f)
      )), T.push(H.createElement(
        "div",
        { key: "South", style: { top: d.y + d.height - a, left: d.x + d.width / 2 - s, width: h, height: a, borderTopLeftRadius: y, borderTopRightRadius: y }, className: c + " " + this.getClassName(Fe.CLASSES.FLEXLAYOUT__EDGE_RECT_BOTTOM) },
        H.createElement("div", null, f)
      )), T.push(H.createElement(
        "div",
        { key: "East", style: { top: d.y + d.height / 2 - s, left: d.x + d.width - a, width: a, height: h, borderTopLeftRadius: y, borderBottomLeftRadius: y }, className: c + " " + this.getClassName(Fe.CLASSES.FLEXLAYOUT__EDGE_RECT_RIGHT) },
        H.createElement("div", { style: { transform: "rotate(-90deg)" } }, f)
      ));
    }
    return H.createElement(
      "div",
      { ref: this.selfRef, className: this.getClassName(Fe.CLASSES.FLEXLAYOUT__LAYOUT), onDragEnter: this.props.onExternalDrag ? this.onDragEnter : void 0 },
      t,
      this.tabIds.map((d) => i[d]),
      e,
      o,
      T,
      r,
      this.metricsElements(),
      this.state.portal
    );
  }
  /** @internal */
  metricsElements() {
    const e = this.styleFont({ visibility: "hidden" });
    return H.createElement(
      H.Fragment,
      null,
      H.createElement("div", { key: "findHeaderBarSize", ref: this.findHeaderBarSizeRef, style: e, className: this.getClassName(Fe.CLASSES.FLEXLAYOUT__TABSET_HEADER_SIZER) }, "FindHeaderBarSize"),
      H.createElement("div", { key: "findTabBarSize", ref: this.findTabBarSizeRef, style: e, className: this.getClassName(Fe.CLASSES.FLEXLAYOUT__TABSET_SIZER) }, "FindTabBarSize"),
      H.createElement("div", { key: "findBorderBarSize", ref: this.findBorderBarSizeRef, style: e, className: this.getClassName(Fe.CLASSES.FLEXLAYOUT__BORDER_SIZER) }, "FindBorderBarSize")
    );
  }
  /** @internal */
  renderBorder(e, t, r, i, o) {
    for (const l of e.getBorders()) {
      const u = `/border/${l.getLocation().getName()}`;
      if (l.isShowing()) {
        t.push(H.createElement(Sl.BorderTabSet, { key: `border_${l.getLocation().getName()}`, path: u, border: l, layout: this, iconFactory: this.props.iconFactory, titleFactory: this.props.titleFactory, icons: this.icons }));
        const g = l._getDrawChildren();
        let T = 0, f = 0;
        for (const d of g) {
          if (d instanceof Fi.SplitterNode) {
            let h = u + "/s";
            o.push(H.createElement(zi.Splitter, { key: d.getId(), layout: this, node: d, path: h }));
          } else if (d instanceof bt.TabNode) {
            let h = u + "/t" + f++;
            if (this.supportsPopout && d.isFloating()) {
              const a = this._getScreenRect(d), s = d._getAttr("borderWidth"), c = d._getAttr("borderHeight");
              a && (s !== -1 && l.getLocation().getOrientation() === br.Orientation.HORZ ? a.width = s : c !== -1 && l.getLocation().getOrientation() === br.Orientation.VERT && (a.height = c)), i.push(H.createElement(
                $i.FloatingWindow,
                { key: d.getId(), url: this.popoutURL, rect: a, title: d.getName(), id: d.getId(), onSetWindow: this.onSetWindow, onCloseWindow: this.onCloseWindow },
                H.createElement(Hi.FloatingWindowTab, { layout: this, node: d, factory: this.props.factory })
              )), r[d.getId()] = H.createElement(Wi.TabFloating, { key: d.getId(), layout: this, path: h, node: d, selected: T === l.getSelected() });
            } else
              r[d.getId()] = H.createElement(Yi.Tab, { key: d.getId(), layout: this, path: h, node: d, selected: T === l.getSelected(), factory: this.props.factory });
          }
          T++;
        }
      }
    }
  }
  /** @internal */
  renderChildren(e, t, r, i, o, l) {
    const u = t._getDrawChildren();
    let g = 0, T = 0, f = 0;
    for (const d of u)
      if (d instanceof Fi.SplitterNode) {
        const h = e + "/s" + g++;
        l.push(H.createElement(zi.Splitter, { key: d.getId(), layout: this, path: h, node: d }));
      } else if (d instanceof ji.TabSetNode) {
        const h = e + "/ts" + f++;
        r.push(H.createElement(Ll.TabSet, { key: d.getId(), layout: this, path: h, node: d, iconFactory: this.props.iconFactory, titleFactory: this.props.titleFactory, icons: this.icons })), this.renderChildren(h, d, r, i, o, l);
      } else if (d instanceof bt.TabNode) {
        const h = e + "/t" + T++, a = d.getParent().getChildren()[d.getParent().getSelected()];
        if (a === void 0 && console.warn("undefined selectedTab should not happen"), this.supportsPopout && d.isFloating()) {
          const s = this._getScreenRect(d);
          o.push(H.createElement(
            $i.FloatingWindow,
            { key: d.getId(), url: this.popoutURL, rect: s, title: d.getName(), id: d.getId(), onSetWindow: this.onSetWindow, onCloseWindow: this.onCloseWindow },
            H.createElement(Hi.FloatingWindowTab, { layout: this, node: d, factory: this.props.factory })
          )), i[d.getId()] = H.createElement(Wi.TabFloating, { key: d.getId(), layout: this, path: h, node: d, selected: d === a });
        } else
          i[d.getId()] = H.createElement(Yi.Tab, { key: d.getId(), layout: this, path: h, node: d, selected: d === a, factory: this.props.factory });
      } else {
        const h = e + (d.getOrientation() === br.Orientation.HORZ ? "/r" : "/c") + f++;
        this.renderChildren(h, d, r, i, o, l);
      }
  }
  /** @internal */
  _getScreenRect(e) {
    var t;
    const r = e.getRect().clone(), i = (t = this.selfRef.current) === null || t === void 0 ? void 0 : t.getBoundingClientRect();
    if (!i)
      return null;
    const o = Math.min(80, this.currentWindow.outerHeight - this.currentWindow.innerHeight), l = Math.min(80, this.currentWindow.outerWidth - this.currentWindow.innerWidth);
    return r.x = r.x + i.x + this.currentWindow.screenX + l, r.y = r.y + i.y + this.currentWindow.screenY + o, r;
  }
  /**
   * Adds a new tab to the given tabset
   * @param tabsetId the id of the tabset where the new tab will be added
   * @param json the json for the new tab node
   * @returns the added tab node or undefined
   */
  addTabToTabSet(e, t) {
    if (this.props.model.getNodeById(e) !== void 0)
      return this.doAction(Pt.Actions.addNode(t, e, et.DockLocation.CENTER, -1));
  }
  /**
   * Adds a new tab to the active tabset (if there is one)
   * @param json the json for the new tab node
   * @returns the added tab node or undefined
   */
  addTabToActiveTabSet(e) {
    const t = this.props.model.getActiveTabset();
    if (t !== void 0)
      return this.doAction(Pt.Actions.addNode(e, t.getId(), et.DockLocation.CENTER, -1));
  }
  /**
   * Adds a new tab by dragging a labeled panel to the drop location, dragging starts immediatelly
   * @param dragText the text to show on the drag panel
   * @param json the json for the new tab node
   * @param onDrop a callback to call when the drag is complete (node and event will be undefined if the drag was cancelled)
   */
  addTabWithDragAndDrop(e, t, r) {
    this.fnNewNodeDropped = r, this.newTabJson = t, this.dragStart(void 0, e, bt.TabNode._fromJson(t, this.props.model, !1), !0, void 0, void 0);
  }
  /**
   * Move a tab/tabset using drag and drop
   * @param node the tab or tabset to drag
   * @param dragText the text to show on the drag panel
   */
  moveTabWithDragAndDrop(e, t) {
    this.dragStart(void 0, t, e, !0, void 0, void 0);
  }
  /**
   * Adds a new tab by dragging a labeled panel to the drop location, dragging starts when you
   * mouse down on the panel
   *
   * @param dragText the text to show on the drag panel
   * @param json the json for the new tab node
   * @param onDrop a callback to call when the drag is complete (node and event will be undefined if the drag was cancelled)
   */
  addTabWithDragAndDropIndirect(e, t, r) {
    this.fnNewNodeDropped = r, this.newTabJson = t, yt.DragDrop.instance.addGlass(this.onCancelAdd), this.dragDivText = e, this.dragDiv = this.currentDocument.createElement("div"), this.dragDiv.className = this.getClassName(Fe.CLASSES.FLEXLAYOUT__DRAG_RECT), this.dragDiv.addEventListener("mousedown", this.onDragDivMouseDown), this.dragDiv.addEventListener("touchstart", this.onDragDivMouseDown, { passive: !1 }), this.dragRectRender(this.dragDivText, void 0, this.newTabJson, () => {
      if (this.dragDiv) {
        this.dragDiv.style.visibility = "visible";
        const o = this.dragDiv.getBoundingClientRect(), l = new wn.Rect(0, 0, o == null ? void 0 : o.width, o == null ? void 0 : o.height);
        l.centerInRect(this.state.rect), this.dragDiv.setAttribute("data-layout-path", "/drag-rectangle"), this.dragDiv.style.left = l.x + "px", this.dragDiv.style.top = l.y + "px";
      }
    }), this.selfRef.current.appendChild(this.dragDiv);
  }
  /** @internal */
  handleCustomTabDrag(e, t, r) {
    var i, o, l;
    let u = (i = this.customDrop) === null || i === void 0 ? void 0 : i.invalidated;
    const g = (o = this.customDrop) === null || o === void 0 ? void 0 : o.callback;
    this.customDrop = void 0;
    const T = this.newTabJson || (this.dragNode instanceof bt.TabNode ? this.dragNode : void 0);
    if (T && (e.node instanceof ji.TabSetNode || e.node instanceof Ol.BorderNode) && e.index === -1) {
      const f = e.node.getSelectedNode(), d = f == null ? void 0 : f.getRect();
      if (f && (d != null && d.contains(t.x, t.y))) {
        let h;
        try {
          const a = this.onTabDrag(T, f, t.x - d.x, t.y - d.y, e.location, () => this.onDragMove(r));
          a && (h = {
            rect: new wn.Rect(a.x + d.x, a.y + d.y, a.width, a.height),
            callback: a.callback,
            invalidated: a.invalidated,
            dragging: T,
            over: f,
            x: t.x - d.x,
            y: t.y - d.y,
            location: e.location,
            cursor: a.cursor
          });
        } catch (a) {
          console.error(a);
        }
        (h == null ? void 0 : h.callback) === g && (u = void 0), this.customDrop = h;
      }
    }
    this.dropInfo = e, this.outlineDiv && (this.outlineDiv.className = this.getClassName(this.customDrop ? Fe.CLASSES.FLEXLAYOUT__OUTLINE_RECT : e.className), this.customDrop ? this.customDrop.rect.positionElement(this.outlineDiv) : e.rect.positionElement(this.outlineDiv)), yt.DragDrop.instance.setGlassCursorOverride((l = this.customDrop) === null || l === void 0 ? void 0 : l.cursor), this.outlineDiv && (this.outlineDiv.style.visibility = "visible");
    try {
      u == null || u();
    } catch (f) {
      console.error(f);
    }
  }
  /** @internal */
  onDragEnter(e) {
    if (yt.DragDrop.instance.isDragging())
      return;
    const t = this.props.onExternalDrag(e);
    t && (this.fnNewNodeDropped = t.onDrop, this.newTabJson = t.json, this.dragStart(e, t.dragText, bt.TabNode._fromJson(t.json, this.props.model, !1), !0, void 0, void 0));
  }
  /** @internal */
  checkForBorderToShow(e, t) {
    const r = this.props.model._getOuterInnerRects().outer, i = r.getCenter(), o = this.edgeRectWidth, l = this.edgeRectLength / 2;
    let u = !1;
    this.props.model.isEnableEdgeDock() && this.state.showHiddenBorder === et.DockLocation.CENTER && (t > i.y - l && t < i.y + l || e > i.x - l && e < i.x + l) && (u = !0);
    let g = et.DockLocation.CENTER;
    u || (e <= r.x + o ? g = et.DockLocation.LEFT : e >= r.getRight() - o ? g = et.DockLocation.RIGHT : t <= r.y + o ? g = et.DockLocation.TOP : t >= r.getBottom() - o && (g = et.DockLocation.BOTTOM)), g !== this.state.showHiddenBorder && this.setState({ showHiddenBorder: g });
  }
  /** @internal */
  maximize(e) {
    this.doAction(Pt.Actions.maximizeToggle(e.getId()));
  }
  /** @internal */
  customizeTab(e, t) {
    this.props.onRenderTab && this.props.onRenderTab(e, t);
  }
  /** @internal */
  customizeTabSet(e, t) {
    this.props.onRenderTabSet && this.props.onRenderTabSet(e, t);
  }
  /** @internal */
  i18nName(e, t) {
    let r;
    return this.props.i18nMapper && (r = this.props.i18nMapper(e, t)), r === void 0 && (r = e + (t === void 0 ? "" : t)), r;
  }
  /** @internal */
  getOnRenderFloatingTabPlaceholder() {
    return this.props.onRenderFloatingTabPlaceholder;
  }
  /** @internal */
  getShowOverflowMenu() {
    return this.props.onShowOverflowMenu;
  }
  /** @internal */
  getTabSetPlaceHolderCallback() {
    return this.props.onTabSetPlaceHolder;
  }
  /** @internal */
  showContextMenu(e, t) {
    this.props.onContextMenu && this.props.onContextMenu(e, t);
  }
  /** @internal */
  auxMouseClick(e, t) {
    this.props.onAuxMouseClick && this.props.onAuxMouseClick(e, t);
  }
}
In.Layout = Il;
const xl = (n) => (H.useEffect(() => {
  var e;
  (e = n.onRendered) === null || e === void 0 || e.call(n);
}, [n]), H.createElement(H.Fragment, null, n.children));
var hn = {};
Object.defineProperty(hn, "__esModule", { value: !0 });
hn.BorderSet = void 0;
const Tr = ve, Pl = ht();
class Vr {
  /** @internal */
  static _fromJson(e, t) {
    const r = new Vr(t);
    return r._borders = e.map((i) => Pl.BorderNode._fromJson(i, t)), r;
  }
  /** @internal */
  constructor(e) {
    this._model = e, this._borders = [];
  }
  getBorders() {
    return this._borders;
  }
  /** @internal */
  _forEachNode(e) {
    for (const t of this._borders) {
      e(t, 0);
      for (const r of t.getChildren())
        r._forEachNode(e, 1);
    }
  }
  /** @internal */
  _toJson() {
    return this._borders.map((e) => e.toJson());
  }
  /** @internal */
  _layoutBorder(e, t) {
    const r = e.outer, i = this._model.getRoot();
    let o = Math.max(0, r.height - i.getMinHeight()), l = Math.max(0, r.width - i.getMinWidth()), u = 0, g = 0, T = 0, f = 0;
    const d = this._borders.filter((s) => s.isShowing());
    for (const s of d) {
      s._setAdjustedSize(s.getSize());
      const c = s.getSelected() !== -1;
      s.getLocation().getOrientation() === Tr.Orientation.HORZ ? (g += s.getBorderBarSize(), c && (l -= this._model.getSplitterSize(), g += s.getSize(), f += s.getSize())) : (u += s.getBorderBarSize(), c && (o -= this._model.getSplitterSize(), u += s.getSize(), T += s.getSize()));
    }
    let h = 0, a = !1;
    for (; g > l && f > 0 || u > o && T > 0; ) {
      const s = d[h];
      if (s.getSelected() !== -1) {
        const c = s._getAdjustedSize();
        g > l && f > 0 && s.getLocation().getOrientation() === Tr.Orientation.HORZ && c > 0 && c > s.getMinSize() ? (s._setAdjustedSize(c - 1), g--, f--, a = !0) : u > o && T > 0 && s.getLocation().getOrientation() === Tr.Orientation.VERT && c > 0 && c > s.getMinSize() && (s._setAdjustedSize(c - 1), u--, T--, a = !0);
      }
      if (h = (h + 1) % d.length, h === 0)
        if (a)
          a = !1;
        else
          break;
    }
    for (const s of d)
      e.outer = s._layoutBorderOuter(e.outer, t);
    e.inner = e.outer;
    for (const s of d)
      e.inner = s._layoutBorderInner(e.inner, t);
    return e;
  }
  /** @internal */
  _findDropTargetNode(e, t, r) {
    for (const i of this._borders)
      if (i.isShowing()) {
        const o = i.canDrop(e, t, r);
        if (o !== void 0)
          return o;
      }
  }
}
hn.BorderSet = Vr;
var Po = {};
Object.defineProperty(Po, "__esModule", { value: !0 });
var Bo = {};
Object.defineProperty(Bo, "__esModule", { value: !0 });
var ko = {};
Object.defineProperty(ko, "__esModule", { value: !0 });
var Wn = {};
Object.defineProperty(Wn, "__esModule", { value: !0 });
Wn.Model = void 0;
const G = dt, Bl = ct, vr = nt, Xi = ve, Vi = Ie, je = Ve, Qt = ht(), Gi = hn, Bt = Wr(), Tt = Et, tt = wt(), Er = Xr();
class Xe {
  /**
   * Loads the model from the given json object
   * @param json the json model to load
   * @returns {Model} a new Model object
   */
  static fromJson(e) {
    const t = new Xe();
    return Xe._attributeDefinitions.fromJson(e.global, t._attributes), e.borders && (t._borders = Gi.BorderSet._fromJson(e.borders, t)), t._root = Bt.RowNode._fromJson(e.layout, t), t._tidy(), t;
  }
  /** @internal */
  static _createAttributeDefinitions() {
    const e = new Bl.AttributeDefinitions();
    return e.add("legacyOverflowMenu", !1).setType(G.Attribute.BOOLEAN), e.add("enableEdgeDock", !0).setType(G.Attribute.BOOLEAN), e.add("rootOrientationVertical", !1).setType(G.Attribute.BOOLEAN), e.add("marginInsets", { top: 0, right: 0, bottom: 0, left: 0 }).setType("IInsets"), e.add("enableUseVisibility", !1).setType(G.Attribute.BOOLEAN), e.add("enableRotateBorderIcons", !0).setType(G.Attribute.BOOLEAN), e.add("splitterSize", -1).setType(G.Attribute.NUMBER), e.add("splitterExtra", 0).setType(G.Attribute.NUMBER), e.add("tabEnableClose", !0).setType(G.Attribute.BOOLEAN), e.add("tabCloseType", 1).setType("ICloseType"), e.add("tabEnableFloat", !1).setType(G.Attribute.BOOLEAN), e.add("tabEnableDrag", !0).setType(G.Attribute.BOOLEAN), e.add("tabEnableRename", !0).setType(G.Attribute.BOOLEAN), e.add("tabContentClassName", void 0).setType(G.Attribute.STRING), e.add("tabClassName", void 0).setType(G.Attribute.STRING), e.add("tabIcon", void 0).setType(G.Attribute.STRING), e.add("tabEnableRenderOnDemand", !0).setType(G.Attribute.BOOLEAN), e.add("tabDragSpeed", 0.3).setType(G.Attribute.NUMBER), e.add("tabBorderWidth", -1).setType(G.Attribute.NUMBER), e.add("tabBorderHeight", -1).setType(G.Attribute.NUMBER), e.add("tabSetEnableDeleteWhenEmpty", !0).setType(G.Attribute.BOOLEAN), e.add("tabSetEnableDrop", !0).setType(G.Attribute.BOOLEAN), e.add("tabSetEnableDrag", !0).setType(G.Attribute.BOOLEAN), e.add("tabSetEnableDivide", !0).setType(G.Attribute.BOOLEAN), e.add("tabSetEnableMaximize", !0).setType(G.Attribute.BOOLEAN), e.add("tabSetEnableClose", !1).setType(G.Attribute.BOOLEAN), e.add("tabSetEnableSingleTabStretch", !1).setType(G.Attribute.BOOLEAN), e.add("tabSetAutoSelectTab", !0).setType(G.Attribute.BOOLEAN), e.add("tabSetClassNameTabStrip", void 0).setType(G.Attribute.STRING), e.add("tabSetClassNameHeader", void 0).setType(G.Attribute.STRING), e.add("tabSetEnableTabStrip", !0).setType(G.Attribute.BOOLEAN), e.add("tabSetHeaderHeight", 0).setType(G.Attribute.NUMBER), e.add("tabSetTabStripHeight", 0).setType(G.Attribute.NUMBER), e.add("tabSetMarginInsets", { top: 0, right: 0, bottom: 0, left: 0 }).setType("IInsets"), e.add("tabSetBorderInsets", { top: 0, right: 0, bottom: 0, left: 0 }).setType("IInsets"), e.add("tabSetTabLocation", "top").setType("ITabLocation"), e.add("tabSetMinWidth", 0).setType(G.Attribute.NUMBER), e.add("tabSetMinHeight", 0).setType(G.Attribute.NUMBER), e.add("borderSize", 200).setType(G.Attribute.NUMBER), e.add("borderMinSize", 0).setType(G.Attribute.NUMBER), e.add("borderBarSize", 0).setType(G.Attribute.NUMBER), e.add("borderEnableDrop", !0).setType(G.Attribute.BOOLEAN), e.add("borderAutoSelectTabWhenOpen", !0).setType(G.Attribute.BOOLEAN), e.add("borderAutoSelectTabWhenClosed", !1).setType(G.Attribute.BOOLEAN), e.add("borderClassName", void 0).setType(G.Attribute.STRING), e.add("borderEnableAutoHide", !1).setType(G.Attribute.BOOLEAN), e;
  }
  /**
   * 'private' constructor. Use the static method Model.fromJson(json) to create a model
   *  @internal
   */
  constructor() {
    this._borderRects = { inner: Vi.Rect.empty(), outer: Vi.Rect.empty() }, this._attributes = {}, this._idMap = {}, this._borders = new Gi.BorderSet(this), this._pointerFine = !0, this._showHiddenBorder = vr.DockLocation.CENTER;
  }
  /** @internal */
  _setChangeListener(e) {
    this._changeListener = e;
  }
  /**
   * Get the currently active tabset node
   */
  getActiveTabset() {
    if (this._activeTabSet && this.getNodeById(this._activeTabSet.getId()))
      return this._activeTabSet;
  }
  /** @internal */
  _getShowHiddenBorder() {
    return this._showHiddenBorder;
  }
  /** @internal */
  _setShowHiddenBorder(e) {
    this._showHiddenBorder = e;
  }
  /** @internal */
  _setActiveTabset(e) {
    this._activeTabSet = e;
  }
  /**
   * Get the currently maximized tabset node
   */
  getMaximizedTabset() {
    return this._maximizedTabSet;
  }
  /** @internal */
  _setMaximizedTabset(e) {
    this._maximizedTabSet = e;
  }
  /**
   * Gets the root RowNode of the model
   * @returns {RowNode}
   */
  getRoot() {
    return this._root;
  }
  isRootOrientationVertical() {
    return this._attributes.rootOrientationVertical;
  }
  isUseVisibility() {
    return this._attributes.enableUseVisibility;
  }
  isEnableRotateBorderIcons() {
    return this._attributes.enableRotateBorderIcons;
  }
  /**
   * Gets the
   * @returns {BorderSet|*}
   */
  getBorderSet() {
    return this._borders;
  }
  /** @internal */
  _getOuterInnerRects() {
    return this._borderRects;
  }
  /** @internal */
  _getPointerFine() {
    return this._pointerFine;
  }
  /** @internal */
  _setPointerFine(e) {
    this._pointerFine = e;
  }
  /**
   * Visits all the nodes in the model and calls the given function for each
   * @param fn a function that takes visited node and a integer level as parameters
   */
  visitNodes(e) {
    this._borders._forEachNode(e), this._root._forEachNode(e, 0);
  }
  /**
   * Gets a node by its id
   * @param id the id to find
   */
  getNodeById(e) {
    return this._idMap[e];
  }
  /**
   * Finds the first/top left tab set of the given node.
   * @param node The top node you want to begin searching from, deafults to the root node
   * @returns The first Tab Set
   */
  getFirstTabSet(e = this._root) {
    const t = e.getChildren()[0];
    return t instanceof tt.TabSetNode ? t : this.getFirstTabSet(t);
  }
  /**
   * Update the node tree by performing the given action,
   * Actions should be generated via static methods on the Actions class
   * @param action the action to perform
   * @returns added Node for Actions.addNode; undefined otherwise
   */
  doAction(e) {
    let t;
    switch (e.type) {
      case je.Actions.ADD_NODE: {
        const r = new Tt.TabNode(this, e.data.json, !0), i = this._idMap[e.data.toNode];
        (i instanceof tt.TabSetNode || i instanceof Qt.BorderNode || i instanceof Bt.RowNode) && (i.drop(r, vr.DockLocation.getByName(e.data.location), e.data.index, e.data.select), t = r);
        break;
      }
      case je.Actions.MOVE_NODE: {
        const r = this._idMap[e.data.fromNode];
        if (r instanceof Tt.TabNode || r instanceof tt.TabSetNode) {
          const i = this._idMap[e.data.toNode];
          (i instanceof tt.TabSetNode || i instanceof Qt.BorderNode || i instanceof Bt.RowNode) && i.drop(r, vr.DockLocation.getByName(e.data.location), e.data.index, e.data.select);
        }
        break;
      }
      case je.Actions.DELETE_TAB: {
        const r = this._idMap[e.data.node];
        r instanceof Tt.TabNode && r._delete();
        break;
      }
      case je.Actions.DELETE_TABSET: {
        const r = this._idMap[e.data.node];
        if (r instanceof tt.TabSetNode) {
          const i = [...r.getChildren()];
          for (let o = 0; o < i.length; o++) {
            const l = i[o];
            l.isEnableClose() && l._delete();
          }
          r.getChildren().length === 0 && r._delete(), this._tidy();
        }
        break;
      }
      case je.Actions.FLOAT_TAB: {
        const r = this._idMap[e.data.node];
        r instanceof Tt.TabNode && (r._setFloating(!0), (0, Er.adjustSelectedIndexAfterFloat)(r));
        break;
      }
      case je.Actions.UNFLOAT_TAB: {
        const r = this._idMap[e.data.node];
        r instanceof Tt.TabNode && (r._setFloating(!1), (0, Er.adjustSelectedIndexAfterDock)(r));
        break;
      }
      case je.Actions.RENAME_TAB: {
        const r = this._idMap[e.data.node];
        r instanceof Tt.TabNode && r._setName(e.data.text);
        break;
      }
      case je.Actions.SELECT_TAB: {
        const r = this._idMap[e.data.tabNode];
        if (r instanceof Tt.TabNode) {
          const i = r.getParent(), o = i.getChildren().indexOf(r);
          i instanceof Qt.BorderNode ? i.getSelected() === o ? i._setSelected(-1) : i._setSelected(o) : i instanceof tt.TabSetNode && (i.getSelected() !== o && i._setSelected(o), this._activeTabSet = i);
        }
        break;
      }
      case je.Actions.SET_ACTIVE_TABSET: {
        if (e.data.tabsetNode === void 0)
          this._activeTabSet = void 0;
        else {
          const r = this._idMap[e.data.tabsetNode];
          r instanceof tt.TabSetNode && (this._activeTabSet = r);
        }
        break;
      }
      case je.Actions.ADJUST_SPLIT: {
        const r = this._idMap[e.data.node1], i = this._idMap[e.data.node2];
        (r instanceof tt.TabSetNode || r instanceof Bt.RowNode) && (i instanceof tt.TabSetNode || i instanceof Bt.RowNode) && (this._adjustSplitSide(r, e.data.weight1, e.data.pixelWidth1), this._adjustSplitSide(i, e.data.weight2, e.data.pixelWidth2));
        break;
      }
      case je.Actions.ADJUST_BORDER_SPLIT: {
        const r = this._idMap[e.data.node];
        r instanceof Qt.BorderNode && r._setSize(e.data.pos);
        break;
      }
      case je.Actions.MAXIMIZE_TOGGLE: {
        const r = this._idMap[e.data.node];
        r instanceof tt.TabSetNode && (r === this._maximizedTabSet ? this._maximizedTabSet = void 0 : (this._maximizedTabSet = r, this._activeTabSet = r));
        break;
      }
      case je.Actions.UPDATE_MODEL_ATTRIBUTES: {
        this._updateAttrs(e.data.json);
        break;
      }
      case je.Actions.UPDATE_NODE_ATTRIBUTES: {
        this._idMap[e.data.node]._updateAttrs(e.data.json);
        break;
      }
    }
    return this._updateIdMap(), this._changeListener !== void 0 && this._changeListener(e), t;
  }
  /** @internal */
  _updateIdMap() {
    this._idMap = {}, this.visitNodes((e) => this._idMap[e.getId()] = e);
  }
  /** @internal */
  _adjustSplitSide(e, t, r) {
    e._setWeight(t), e.getWidth() != null && e.getOrientation() === Xi.Orientation.VERT ? e._updateAttrs({ width: r }) : e.getHeight() != null && e.getOrientation() === Xi.Orientation.HORZ && e._updateAttrs({ height: r });
  }
  /**
   * Converts the model to a json object
   * @returns {IJsonModel} json object that represents this model
   */
  toJson() {
    const e = {};
    return Xe._attributeDefinitions.toJson(e, this._attributes), this.visitNodes((t) => {
      t._fireEvent("save", void 0);
    }), { global: e, borders: this._borders._toJson(), layout: this._root.toJson() };
  }
  getSplitterSize() {
    let e = this._attributes.splitterSize;
    return e === -1 && (e = this._pointerFine ? 8 : 12), e;
  }
  isLegacyOverflowMenu() {
    return this._attributes.legacyOverflowMenu;
  }
  getSplitterExtra() {
    return this._attributes.splitterExtra;
  }
  isEnableEdgeDock() {
    return this._attributes.enableEdgeDock;
  }
  /** @internal */
  _addNode(e) {
    const t = e.getId();
    if (this._idMap[t] !== void 0)
      throw new Error(`Error: each node must have a unique id, duplicate id:${e.getId()}`);
    e.getType() !== "splitter" && (this._idMap[t] = e);
  }
  /** @internal */
  _layout(e, t) {
    var r;
    return this._borderRects = this._borders._layoutBorder({ outer: e, inner: e }, t), e = this._borderRects.inner.removeInsets(this._getAttribute("marginInsets")), (r = this._root) === null || r === void 0 || r.calcMinSize(), this._root._layout(e, t), e;
  }
  /** @internal */
  _findDropTargetNode(e, t, r) {
    let i = this._root._findDropTargetNode(e, t, r);
    return i === void 0 && (i = this._borders._findDropTargetNode(e, t, r)), i;
  }
  /** @internal */
  _tidy() {
    this._root._tidy();
  }
  /** @internal */
  _updateAttrs(e) {
    Xe._attributeDefinitions.update(e, this._attributes);
  }
  /** @internal */
  _nextUniqueId() {
    return "#" + (0, Er.randomUUID)();
  }
  /** @internal */
  _getAttribute(e) {
    return this._attributes[e];
  }
  /**
   * Sets a function to allow/deny dropping a node
   * @param onAllowDrop function that takes the drag node and DropInfo and returns true if the drop is allowed
   */
  setOnAllowDrop(e) {
    this._onAllowDrop = e;
  }
  /** @internal */
  _getOnAllowDrop() {
    return this._onAllowDrop;
  }
  /**
   * set callback called when a new TabSet is created.
   * The tabNode can be undefined if it's the auto created first tabset in the root row (when the last
   * tab is deleted, the root tabset can be recreated)
   * @param onCreateTabSet
   */
  setOnCreateTabSet(e) {
    this._onCreateTabSet = e;
  }
  /** @internal */
  _getOnCreateTabSet() {
    return this._onCreateTabSet;
  }
  static toTypescriptInterfaces() {
    console.log(Xe._attributeDefinitions.toTypescriptInterface("Global", void 0)), console.log(Bt.RowNode.getAttributeDefinitions().toTypescriptInterface("Row", Xe._attributeDefinitions)), console.log(tt.TabSetNode.getAttributeDefinitions().toTypescriptInterface("TabSet", Xe._attributeDefinitions)), console.log(Tt.TabNode.getAttributeDefinitions().toTypescriptInterface("Tab", Xe._attributeDefinitions)), console.log(Qt.BorderNode.getAttributeDefinitions().toTypescriptInterface("Border", Xe._attributeDefinitions));
  }
  toString() {
    return JSON.stringify(this.toJson());
  }
}
Wn.Model = Xe;
Xe._attributeDefinitions = Xe._createAttributeDefinitions();
(function(n) {
  var e = Lt && Lt.__createBinding || (Object.create ? function(r, i, o, l) {
    l === void 0 && (l = o);
    var u = Object.getOwnPropertyDescriptor(i, o);
    (!u || ("get" in u ? !i.__esModule : u.writable || u.configurable)) && (u = { enumerable: !0, get: function() {
      return i[o];
    } }), Object.defineProperty(r, l, u);
  } : function(r, i, o, l) {
    l === void 0 && (l = o), r[l] = i[o];
  }), t = Lt && Lt.__exportStar || function(r, i) {
    for (var o in r)
      o !== "default" && !Object.prototype.hasOwnProperty.call(i, o) && e(i, r, o);
  };
  Object.defineProperty(n, "__esModule", { value: !0 }), t(In, n), t(an, n), t(Ve, n), t(ht(), n), t(hn, n), t(Mn, n), t(Po, n), t(Bo, n), t(ko, n), t(Wn, n), t(ut, n), t(Wr(), n), t(Rt, n), t(Et, n), t(wt(), n), t(nt, n), t(At, n), t(Ct, n), t(ft, n), t(ve, n), t(Ie, n), t(Ee, n);
})(Hr);
var kl = function(e, t, r) {
  var i = document.head || document.getElementsByTagName("head")[0], o = document.createElement("script");
  typeof t == "function" && (r = t, t = {}), t = t || {}, r = r || function() {
  }, o.type = t.type || "text/javascript", o.charset = t.charset || "utf8", o.async = "async" in t ? !!t.async : !0, o.src = e, t.attrs && Ml(o, t.attrs), t.text && (o.text = "" + t.text);
  var l = "onload" in o ? Ji : Ul;
  l(o, r), o.onload || Ji(o, r), i.appendChild(o);
};
function Ml(n, e) {
  for (var t in e)
    n.setAttribute(t, e[t]);
}
function Ji(n, e) {
  n.onload = function() {
    this.onerror = this.onload = null, e(null, n);
  }, n.onerror = function() {
    this.onerror = this.onload = null, e(new Error("Failed to load " + this.src), n);
  };
}
function Ul(n, e) {
  n.onreadystatechange = function() {
    this.readyState != "complete" && this.readyState != "loaded" || (this.onreadystatechange = null, e(null, n));
  };
}
var Fl = function(e) {
  return jl(e) && !zl(e);
};
function jl(n) {
  return !!n && typeof n == "object";
}
function zl(n) {
  var e = Object.prototype.toString.call(n);
  return e === "[object RegExp]" || e === "[object Date]" || Hl(n);
}
var Yl = typeof Symbol == "function" && Symbol.for, $l = Yl ? Symbol.for("react.element") : 60103;
function Hl(n) {
  return n.$$typeof === $l;
}
function Wl(n) {
  return Array.isArray(n) ? [] : {};
}
function rn(n, e) {
  return e.clone !== !1 && e.isMergeableObject(n) ? Yt(Wl(n), n, e) : n;
}
function Xl(n, e, t) {
  return n.concat(e).map(function(r) {
    return rn(r, t);
  });
}
function Vl(n, e) {
  if (!e.customMerge)
    return Yt;
  var t = e.customMerge(n);
  return typeof t == "function" ? t : Yt;
}
function Gl(n) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(n).filter(function(e) {
    return Object.propertyIsEnumerable.call(n, e);
  }) : [];
}
function qi(n) {
  return Object.keys(n).concat(Gl(n));
}
function Mo(n, e) {
  try {
    return e in n;
  } catch {
    return !1;
  }
}
function Jl(n, e) {
  return Mo(n, e) && !(Object.hasOwnProperty.call(n, e) && Object.propertyIsEnumerable.call(n, e));
}
function ql(n, e, t) {
  var r = {};
  return t.isMergeableObject(n) && qi(n).forEach(function(i) {
    r[i] = rn(n[i], t);
  }), qi(e).forEach(function(i) {
    Jl(n, i) || (Mo(n, i) && t.isMergeableObject(e[i]) ? r[i] = Vl(i, t)(n[i], e[i], t) : r[i] = rn(e[i], t));
  }), r;
}
function Yt(n, e, t) {
  t = t || {}, t.arrayMerge = t.arrayMerge || Xl, t.isMergeableObject = t.isMergeableObject || Fl, t.cloneUnlessOtherwiseSpecified = rn;
  var r = Array.isArray(e), i = Array.isArray(n), o = r === i;
  return o ? r ? t.arrayMerge(n, e, t) : ql(n, e, t) : rn(e, t);
}
Yt.all = function(e, t) {
  if (!Array.isArray(e))
    throw new Error("first argument should be an array");
  return e.reduce(function(r, i) {
    return Yt(r, i, t);
  }, {});
};
var Kl = Yt, Uo = Kl, Zl = Object.create, Xn = Object.defineProperty, Ql = Object.getOwnPropertyDescriptor, ed = Object.getOwnPropertyNames, td = Object.getPrototypeOf, nd = Object.prototype.hasOwnProperty, rd = (n, e) => {
  for (var t in e)
    Xn(n, t, { get: e[t], enumerable: !0 });
}, Fo = (n, e, t, r) => {
  if (e && typeof e == "object" || typeof e == "function")
    for (let i of ed(e))
      !nd.call(n, i) && i !== t && Xn(n, i, { get: () => e[i], enumerable: !(r = Ql(e, i)) || r.enumerable });
  return n;
}, Gr = (n, e, t) => (t = n != null ? Zl(td(n)) : {}, Fo(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  !n || !n.__esModule ? Xn(t, "default", { value: n, enumerable: !0 }) : t,
  n
)), id = (n) => Fo(Xn({}, "__esModule", { value: !0 }), n), jo = {};
rd(jo, {
  callPlayer: () => Td,
  getConfig: () => yd,
  getSDK: () => md,
  isBlobUrl: () => Ed,
  isMediaStream: () => vd,
  lazy: () => ld,
  omit: () => bd,
  parseEndTime: () => gd,
  parseStartTime: () => fd,
  queryString: () => pd,
  randomString: () => _d,
  supportsWebKitPresentationMode: () => wd
});
var Vn = id(jo), od = Gr(F), ad = Gr(kl), sd = Gr(Uo);
const ld = (n) => od.default.lazy(async () => {
  const e = await n();
  return typeof e.default == "function" ? e : e.default;
}), dd = /[?&#](?:start|t)=([0-9hms]+)/, cd = /[?&#]end=([0-9hms]+)/, kr = /(\d+)(h|m|s)/g, ud = /^\d+$/;
function zo(n, e) {
  if (n instanceof Array)
    return;
  const t = n.match(e);
  if (t) {
    const r = t[1];
    if (r.match(kr))
      return hd(r);
    if (ud.test(r))
      return parseInt(r);
  }
}
function hd(n) {
  let e = 0, t = kr.exec(n);
  for (; t !== null; ) {
    const [, r, i] = t;
    i === "h" && (e += parseInt(r, 10) * 60 * 60), i === "m" && (e += parseInt(r, 10) * 60), i === "s" && (e += parseInt(r, 10)), t = kr.exec(n);
  }
  return e;
}
function fd(n) {
  return zo(n, dd);
}
function gd(n) {
  return zo(n, cd);
}
function _d() {
  return Math.random().toString(36).substr(2, 5);
}
function pd(n) {
  return Object.keys(n).map((e) => `${e}=${n[e]}`).join("&");
}
function wr(n) {
  return window[n] ? window[n] : window.exports && window.exports[n] ? window.exports[n] : window.module && window.module.exports && window.module.exports[n] ? window.module.exports[n] : null;
}
const kt = {}, md = function(e, t, r = null, i = () => !0, o = ad.default) {
  const l = wr(t);
  return l && i(l) ? Promise.resolve(l) : new Promise((u, g) => {
    if (kt[e]) {
      kt[e].push({ resolve: u, reject: g });
      return;
    }
    kt[e] = [{ resolve: u, reject: g }];
    const T = (f) => {
      kt[e].forEach((d) => d.resolve(f));
    };
    if (r) {
      const f = window[r];
      window[r] = function() {
        f && f(), T(wr(t));
      };
    }
    o(e, (f) => {
      f ? (kt[e].forEach((d) => d.reject(f)), kt[e] = null) : r || T(wr(t));
    });
  });
};
function yd(n, e) {
  return (0, sd.default)(e.config, n.config);
}
function bd(n, ...e) {
  const t = [].concat(...e), r = {}, i = Object.keys(n);
  for (const o of i)
    t.indexOf(o) === -1 && (r[o] = n[o]);
  return r;
}
function Td(n, ...e) {
  if (!this.player || !this.player[n]) {
    let t = `ReactPlayer: ${this.constructor.displayName} player could not call %c${n}%c – `;
    return this.player ? this.player[n] || (t += "The method was not available") : t += "The player was not available", console.warn(t, "font-weight: bold", ""), null;
  }
  return this.player[n](...e);
}
function vd(n) {
  return typeof window < "u" && typeof window.MediaStream < "u" && n instanceof window.MediaStream;
}
function Ed(n) {
  return /^blob:/.test(n);
}
function wd(n = document.createElement("video")) {
  const e = /iPhone|iPod/.test(navigator.userAgent) === !1;
  return n.webkitSupportsPresentationMode && typeof n.webkitSetPresentationMode == "function" && e;
}
var Jr = Object.defineProperty, Od = Object.getOwnPropertyDescriptor, Sd = Object.getOwnPropertyNames, Ld = Object.prototype.hasOwnProperty, Ad = (n, e) => {
  for (var t in e)
    Jr(n, t, { get: e[t], enumerable: !0 });
}, Cd = (n, e, t, r) => {
  if (e && typeof e == "object" || typeof e == "function")
    for (let i of Sd(e))
      !Ld.call(n, i) && i !== t && Jr(n, i, { get: () => e[i], enumerable: !(r = Od(e, i)) || r.enumerable });
  return n;
}, Rd = (n) => Cd(Jr({}, "__esModule", { value: !0 }), n), Yo = {};
Ad(Yo, {
  AUDIO_EXTENSIONS: () => qr,
  DASH_EXTENSIONS: () => na,
  FLV_EXTENSIONS: () => ra,
  HLS_EXTENSIONS: () => Zr,
  MATCH_URL_DAILYMOTION: () => Zo,
  MATCH_URL_FACEBOOK: () => Xo,
  MATCH_URL_FACEBOOK_WATCH: () => Vo,
  MATCH_URL_KALTURA: () => ta,
  MATCH_URL_MIXCLOUD: () => Qo,
  MATCH_URL_MUX: () => Wo,
  MATCH_URL_SOUNDCLOUD: () => $o,
  MATCH_URL_STREAMABLE: () => Go,
  MATCH_URL_TWITCH_CHANNEL: () => Ko,
  MATCH_URL_TWITCH_VIDEO: () => qo,
  MATCH_URL_VIDYARD: () => ea,
  MATCH_URL_VIMEO: () => Ho,
  MATCH_URL_WISTIA: () => Jo,
  MATCH_URL_YOUTUBE: () => Mr,
  VIDEO_EXTENSIONS: () => Kr,
  canPlay: () => Dd
});
var Nd = Rd(Yo), Ki = Vn;
const Mr = /(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//, $o = /(?:soundcloud\.com|snd\.sc)\/[^.]+$/, Ho = /vimeo\.com\/(?!progressive_redirect).+/, Wo = /stream\.mux\.com\/(\w+)/, Xo = /^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/, Vo = /^https?:\/\/fb\.watch\/.+$/, Go = /streamable\.com\/([a-z0-9]+)$/, Jo = /(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/, qo = /(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/, Ko = /(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/, Zo = /^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?(?:[\w.#_-]+)?/, Qo = /mixcloud\.com\/([^/]+\/[^/]+)/, ea = /vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/, ta = /^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_].*)$/, qr = /\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i, Kr = /\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i, Zr = /\.(m3u8)($|\?)/i, na = /\.(mpd)($|\?)/i, ra = /\.(flv)($|\?)/i, Ur = (n) => {
  if (n instanceof Array) {
    for (const e of n)
      if (typeof e == "string" && Ur(e) || Ur(e.src))
        return !0;
    return !1;
  }
  return (0, Ki.isMediaStream)(n) || (0, Ki.isBlobUrl)(n) ? !0 : qr.test(n) || Kr.test(n) || Zr.test(n) || na.test(n) || ra.test(n);
}, Dd = {
  youtube: (n) => n instanceof Array ? n.every((e) => Mr.test(e)) : Mr.test(n),
  soundcloud: (n) => $o.test(n) && !qr.test(n),
  vimeo: (n) => Ho.test(n) && !Kr.test(n) && !Zr.test(n),
  mux: (n) => Wo.test(n),
  facebook: (n) => Xo.test(n) || Vo.test(n),
  streamable: (n) => Go.test(n),
  wistia: (n) => Jo.test(n),
  twitch: (n) => qo.test(n) || Ko.test(n),
  dailymotion: (n) => Zo.test(n),
  mixcloud: (n) => Qo.test(n),
  vidyard: (n) => ea.test(n),
  kaltura: (n) => ta.test(n),
  file: Ur
};
var Qr = Object.defineProperty, Id = Object.getOwnPropertyDescriptor, xd = Object.getOwnPropertyNames, Pd = Object.prototype.hasOwnProperty, Bd = (n, e) => {
  for (var t in e)
    Qr(n, t, { get: e[t], enumerable: !0 });
}, kd = (n, e, t, r) => {
  if (e && typeof e == "object" || typeof e == "function")
    for (let i of xd(e))
      !Pd.call(n, i) && i !== t && Qr(n, i, { get: () => e[i], enumerable: !(r = Id(e, i)) || r.enumerable });
  return n;
}, Md = (n) => kd(Qr({}, "__esModule", { value: !0 }), n), ia = {};
Bd(ia, {
  default: () => Fd
});
var Ud = Md(ia), ze = Vn, Be = Nd, Fd = [
  {
    key: "youtube",
    name: "YouTube",
    canPlay: Be.canPlay.youtube,
    lazyPlayer: (0, ze.lazy)(() => import(
      /* webpackChunkName: 'reactPlayerYouTube' */
      "./YouTube-7igii7g-.js"
    ).then((n) => n.Y))
  },
  {
    key: "soundcloud",
    name: "SoundCloud",
    canPlay: Be.canPlay.soundcloud,
    lazyPlayer: (0, ze.lazy)(() => import(
      /* webpackChunkName: 'reactPlayerSoundCloud' */
      "./SoundCloud-dCa4vSbz.js"
    ).then((n) => n.S))
  },
  {
    key: "vimeo",
    name: "Vimeo",
    canPlay: Be.canPlay.vimeo,
    lazyPlayer: (0, ze.lazy)(() => import(
      /* webpackChunkName: 'reactPlayerVimeo' */
      "./Vimeo-BzEQ0aPu.js"
    ).then((n) => n.V))
  },
  {
    key: "mux",
    name: "Mux",
    canPlay: Be.canPlay.mux,
    lazyPlayer: (0, ze.lazy)(() => import(
      /* webpackChunkName: 'reactPlayerMux' */
      "./Mux-B0OJ_1HJ.js"
    ).then((n) => n.M))
  },
  {
    key: "facebook",
    name: "Facebook",
    canPlay: Be.canPlay.facebook,
    lazyPlayer: (0, ze.lazy)(() => import(
      /* webpackChunkName: 'reactPlayerFacebook' */
      "./Facebook-wqJKaJxM.js"
    ).then((n) => n.F))
  },
  {
    key: "streamable",
    name: "Streamable",
    canPlay: Be.canPlay.streamable,
    lazyPlayer: (0, ze.lazy)(() => import(
      /* webpackChunkName: 'reactPlayerStreamable' */
      "./Streamable-DFdLBqUe.js"
    ).then((n) => n.S))
  },
  {
    key: "wistia",
    name: "Wistia",
    canPlay: Be.canPlay.wistia,
    lazyPlayer: (0, ze.lazy)(() => import(
      /* webpackChunkName: 'reactPlayerWistia' */
      "./Wistia-BORhiYqI.js"
    ).then((n) => n.W))
  },
  {
    key: "twitch",
    name: "Twitch",
    canPlay: Be.canPlay.twitch,
    lazyPlayer: (0, ze.lazy)(() => import(
      /* webpackChunkName: 'reactPlayerTwitch' */
      "./Twitch-DZ39xMYi.js"
    ).then((n) => n.T))
  },
  {
    key: "dailymotion",
    name: "DailyMotion",
    canPlay: Be.canPlay.dailymotion,
    lazyPlayer: (0, ze.lazy)(() => import(
      /* webpackChunkName: 'reactPlayerDailyMotion' */
      "./DailyMotion-CFXJV8jY.js"
    ).then((n) => n.D))
  },
  {
    key: "mixcloud",
    name: "Mixcloud",
    canPlay: Be.canPlay.mixcloud,
    lazyPlayer: (0, ze.lazy)(() => import(
      /* webpackChunkName: 'reactPlayerMixcloud' */
      "./Mixcloud-C6of3F09.js"
    ).then((n) => n.M))
  },
  {
    key: "vidyard",
    name: "Vidyard",
    canPlay: Be.canPlay.vidyard,
    lazyPlayer: (0, ze.lazy)(() => import(
      /* webpackChunkName: 'reactPlayerVidyard' */
      "./Vidyard-Dce_ZBT8.js"
    ).then((n) => n.V))
  },
  {
    key: "kaltura",
    name: "Kaltura",
    canPlay: Be.canPlay.kaltura,
    lazyPlayer: (0, ze.lazy)(() => import(
      /* webpackChunkName: 'reactPlayerKaltura' */
      "./Kaltura-D3RcKH5m.js"
    ).then((n) => n.K))
  },
  {
    key: "file",
    name: "FilePlayer",
    canPlay: Be.canPlay.file,
    canEnablePIP: (n) => Be.canPlay.file(n) && (document.pictureInPictureEnabled || (0, ze.supportsWebKitPresentationMode)()) && !Be.AUDIO_EXTENSIONS.test(n),
    lazyPlayer: (0, ze.lazy)(() => import(
      /* webpackChunkName: 'reactPlayerFilePlayer' */
      "./FilePlayer-BvzJ2Jdl.js"
    ).then((n) => n.F))
  }
], Zi = Number.isNaN || function(e) {
  return typeof e == "number" && e !== e;
};
function jd(n, e) {
  return !!(n === e || Zi(n) && Zi(e));
}
function zd(n, e) {
  if (n.length !== e.length)
    return !1;
  for (var t = 0; t < n.length; t++)
    if (!jd(n[t], e[t]))
      return !1;
  return !0;
}
function Yd(n, e) {
  e === void 0 && (e = zd);
  var t, r = [], i, o = !1;
  function l() {
    for (var u = [], g = 0; g < arguments.length; g++)
      u[g] = arguments[g];
    return o && t === this && e(u, r) || (i = n.apply(this, u), o = !0, t = this, r = u), i;
  }
  return l;
}
const $d = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Yd
}, Symbol.toStringTag, { value: "Module" })), Hd = /* @__PURE__ */ os($d);
var Wd = typeof Element < "u", Xd = typeof Map == "function", Vd = typeof Set == "function", Gd = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function Ln(n, e) {
  if (n === e)
    return !0;
  if (n && e && typeof n == "object" && typeof e == "object") {
    if (n.constructor !== e.constructor)
      return !1;
    var t, r, i;
    if (Array.isArray(n)) {
      if (t = n.length, t != e.length)
        return !1;
      for (r = t; r-- !== 0; )
        if (!Ln(n[r], e[r]))
          return !1;
      return !0;
    }
    var o;
    if (Xd && n instanceof Map && e instanceof Map) {
      if (n.size !== e.size)
        return !1;
      for (o = n.entries(); !(r = o.next()).done; )
        if (!e.has(r.value[0]))
          return !1;
      for (o = n.entries(); !(r = o.next()).done; )
        if (!Ln(r.value[1], e.get(r.value[0])))
          return !1;
      return !0;
    }
    if (Vd && n instanceof Set && e instanceof Set) {
      if (n.size !== e.size)
        return !1;
      for (o = n.entries(); !(r = o.next()).done; )
        if (!e.has(r.value[0]))
          return !1;
      return !0;
    }
    if (Gd && ArrayBuffer.isView(n) && ArrayBuffer.isView(e)) {
      if (t = n.length, t != e.length)
        return !1;
      for (r = t; r-- !== 0; )
        if (n[r] !== e[r])
          return !1;
      return !0;
    }
    if (n.constructor === RegExp)
      return n.source === e.source && n.flags === e.flags;
    if (n.valueOf !== Object.prototype.valueOf && typeof n.valueOf == "function" && typeof e.valueOf == "function")
      return n.valueOf() === e.valueOf();
    if (n.toString !== Object.prototype.toString && typeof n.toString == "function" && typeof e.toString == "function")
      return n.toString() === e.toString();
    if (i = Object.keys(n), t = i.length, t !== Object.keys(e).length)
      return !1;
    for (r = t; r-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(e, i[r]))
        return !1;
    if (Wd && n instanceof Element)
      return !1;
    for (r = t; r-- !== 0; )
      if (!((i[r] === "_owner" || i[r] === "__v" || i[r] === "__o") && n.$$typeof) && !Ln(n[i[r]], e[i[r]]))
        return !1;
    return !0;
  }
  return n !== n && e !== e;
}
var oa = function(e, t) {
  try {
    return Ln(e, t);
  } catch (r) {
    if ((r.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw r;
  }
}, Fr = { exports: {} }, On = { exports: {} }, se = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qi;
function Jd() {
  if (Qi)
    return se;
  Qi = 1;
  var n = typeof Symbol == "function" && Symbol.for, e = n ? Symbol.for("react.element") : 60103, t = n ? Symbol.for("react.portal") : 60106, r = n ? Symbol.for("react.fragment") : 60107, i = n ? Symbol.for("react.strict_mode") : 60108, o = n ? Symbol.for("react.profiler") : 60114, l = n ? Symbol.for("react.provider") : 60109, u = n ? Symbol.for("react.context") : 60110, g = n ? Symbol.for("react.async_mode") : 60111, T = n ? Symbol.for("react.concurrent_mode") : 60111, f = n ? Symbol.for("react.forward_ref") : 60112, d = n ? Symbol.for("react.suspense") : 60113, h = n ? Symbol.for("react.suspense_list") : 60120, a = n ? Symbol.for("react.memo") : 60115, s = n ? Symbol.for("react.lazy") : 60116, c = n ? Symbol.for("react.block") : 60121, y = n ? Symbol.for("react.fundamental") : 60117, w = n ? Symbol.for("react.responder") : 60118, p = n ? Symbol.for("react.scope") : 60119;
  function v(_) {
    if (typeof _ == "object" && _ !== null) {
      var E = _.$$typeof;
      switch (E) {
        case e:
          switch (_ = _.type, _) {
            case g:
            case T:
            case r:
            case o:
            case i:
            case d:
              return _;
            default:
              switch (_ = _ && _.$$typeof, _) {
                case u:
                case f:
                case s:
                case a:
                case l:
                  return _;
                default:
                  return E;
              }
          }
        case t:
          return E;
      }
    }
  }
  function m(_) {
    return v(_) === T;
  }
  return se.AsyncMode = g, se.ConcurrentMode = T, se.ContextConsumer = u, se.ContextProvider = l, se.Element = e, se.ForwardRef = f, se.Fragment = r, se.Lazy = s, se.Memo = a, se.Portal = t, se.Profiler = o, se.StrictMode = i, se.Suspense = d, se.isAsyncMode = function(_) {
    return m(_) || v(_) === g;
  }, se.isConcurrentMode = m, se.isContextConsumer = function(_) {
    return v(_) === u;
  }, se.isContextProvider = function(_) {
    return v(_) === l;
  }, se.isElement = function(_) {
    return typeof _ == "object" && _ !== null && _.$$typeof === e;
  }, se.isForwardRef = function(_) {
    return v(_) === f;
  }, se.isFragment = function(_) {
    return v(_) === r;
  }, se.isLazy = function(_) {
    return v(_) === s;
  }, se.isMemo = function(_) {
    return v(_) === a;
  }, se.isPortal = function(_) {
    return v(_) === t;
  }, se.isProfiler = function(_) {
    return v(_) === o;
  }, se.isStrictMode = function(_) {
    return v(_) === i;
  }, se.isSuspense = function(_) {
    return v(_) === d;
  }, se.isValidElementType = function(_) {
    return typeof _ == "string" || typeof _ == "function" || _ === r || _ === T || _ === o || _ === i || _ === d || _ === h || typeof _ == "object" && _ !== null && (_.$$typeof === s || _.$$typeof === a || _.$$typeof === l || _.$$typeof === u || _.$$typeof === f || _.$$typeof === y || _.$$typeof === w || _.$$typeof === p || _.$$typeof === c);
  }, se.typeOf = v, se;
}
var le = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var eo;
function qd() {
  return eo || (eo = 1, process.env.NODE_ENV !== "production" && function() {
    var n = typeof Symbol == "function" && Symbol.for, e = n ? Symbol.for("react.element") : 60103, t = n ? Symbol.for("react.portal") : 60106, r = n ? Symbol.for("react.fragment") : 60107, i = n ? Symbol.for("react.strict_mode") : 60108, o = n ? Symbol.for("react.profiler") : 60114, l = n ? Symbol.for("react.provider") : 60109, u = n ? Symbol.for("react.context") : 60110, g = n ? Symbol.for("react.async_mode") : 60111, T = n ? Symbol.for("react.concurrent_mode") : 60111, f = n ? Symbol.for("react.forward_ref") : 60112, d = n ? Symbol.for("react.suspense") : 60113, h = n ? Symbol.for("react.suspense_list") : 60120, a = n ? Symbol.for("react.memo") : 60115, s = n ? Symbol.for("react.lazy") : 60116, c = n ? Symbol.for("react.block") : 60121, y = n ? Symbol.for("react.fundamental") : 60117, w = n ? Symbol.for("react.responder") : 60118, p = n ? Symbol.for("react.scope") : 60119;
    function v(O) {
      return typeof O == "string" || typeof O == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      O === r || O === T || O === o || O === i || O === d || O === h || typeof O == "object" && O !== null && (O.$$typeof === s || O.$$typeof === a || O.$$typeof === l || O.$$typeof === u || O.$$typeof === f || O.$$typeof === y || O.$$typeof === w || O.$$typeof === p || O.$$typeof === c);
    }
    function m(O) {
      if (typeof O == "object" && O !== null) {
        var te = O.$$typeof;
        switch (te) {
          case e:
            var Ae = O.type;
            switch (Ae) {
              case g:
              case T:
              case r:
              case o:
              case i:
              case d:
                return Ae;
              default:
                var rt = Ae && Ae.$$typeof;
                switch (rt) {
                  case u:
                  case f:
                  case s:
                  case a:
                  case l:
                    return rt;
                  default:
                    return te;
                }
            }
          case t:
            return te;
        }
      }
    }
    var _ = g, E = T, C = u, S = l, N = e, D = f, P = r, L = s, U = a, q = t, k = o, X = i, K = d, M = !1;
    function oe(O) {
      return M || (M = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), A(O) || m(O) === g;
    }
    function A(O) {
      return m(O) === T;
    }
    function B(O) {
      return m(O) === u;
    }
    function Y(O) {
      return m(O) === l;
    }
    function V(O) {
      return typeof O == "object" && O !== null && O.$$typeof === e;
    }
    function W(O) {
      return m(O) === f;
    }
    function Q(O) {
      return m(O) === r;
    }
    function $(O) {
      return m(O) === s;
    }
    function j(O) {
      return m(O) === a;
    }
    function Z(O) {
      return m(O) === t;
    }
    function ee(O) {
      return m(O) === o;
    }
    function J(O) {
      return m(O) === i;
    }
    function me(O) {
      return m(O) === d;
    }
    le.AsyncMode = _, le.ConcurrentMode = E, le.ContextConsumer = C, le.ContextProvider = S, le.Element = N, le.ForwardRef = D, le.Fragment = P, le.Lazy = L, le.Memo = U, le.Portal = q, le.Profiler = k, le.StrictMode = X, le.Suspense = K, le.isAsyncMode = oe, le.isConcurrentMode = A, le.isContextConsumer = B, le.isContextProvider = Y, le.isElement = V, le.isForwardRef = W, le.isFragment = Q, le.isLazy = $, le.isMemo = j, le.isPortal = Z, le.isProfiler = ee, le.isStrictMode = J, le.isSuspense = me, le.isValidElementType = v, le.typeOf = m;
  }()), le;
}
var to;
function aa() {
  return to || (to = 1, process.env.NODE_ENV === "production" ? On.exports = Jd() : On.exports = qd()), On.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Or, no;
function Kd() {
  if (no)
    return Or;
  no = 1;
  var n = Object.getOwnPropertySymbols, e = Object.prototype.hasOwnProperty, t = Object.prototype.propertyIsEnumerable;
  function r(o) {
    if (o == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(o);
  }
  function i() {
    try {
      if (!Object.assign)
        return !1;
      var o = new String("abc");
      if (o[5] = "de", Object.getOwnPropertyNames(o)[0] === "5")
        return !1;
      for (var l = {}, u = 0; u < 10; u++)
        l["_" + String.fromCharCode(u)] = u;
      var g = Object.getOwnPropertyNames(l).map(function(f) {
        return l[f];
      });
      if (g.join("") !== "0123456789")
        return !1;
      var T = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(f) {
        T[f] = f;
      }), Object.keys(Object.assign({}, T)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Or = i() ? Object.assign : function(o, l) {
    for (var u, g = r(o), T, f = 1; f < arguments.length; f++) {
      u = Object(arguments[f]);
      for (var d in u)
        e.call(u, d) && (g[d] = u[d]);
      if (n) {
        T = n(u);
        for (var h = 0; h < T.length; h++)
          t.call(u, T[h]) && (g[T[h]] = u[T[h]]);
      }
    }
    return g;
  }, Or;
}
var Sr, ro;
function ei() {
  if (ro)
    return Sr;
  ro = 1;
  var n = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Sr = n, Sr;
}
var Lr, io;
function sa() {
  return io || (io = 1, Lr = Function.call.bind(Object.prototype.hasOwnProperty)), Lr;
}
var Ar, oo;
function Zd() {
  if (oo)
    return Ar;
  oo = 1;
  var n = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var e = ei(), t = {}, r = sa();
    n = function(o) {
      var l = "Warning: " + o;
      typeof console < "u" && console.error(l);
      try {
        throw new Error(l);
      } catch {
      }
    };
  }
  function i(o, l, u, g, T) {
    if (process.env.NODE_ENV !== "production") {
      for (var f in o)
        if (r(o, f)) {
          var d;
          try {
            if (typeof o[f] != "function") {
              var h = Error(
                (g || "React class") + ": " + u + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw h.name = "Invariant Violation", h;
            }
            d = o[f](l, f, g, u, null, e);
          } catch (s) {
            d = s;
          }
          if (d && !(d instanceof Error) && n(
            (g || "React class") + ": type specification of " + u + " `" + f + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof d + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), d instanceof Error && !(d.message in t)) {
            t[d.message] = !0;
            var a = T ? T() : "";
            n(
              "Failed " + u + " type: " + d.message + (a ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (t = {});
  }, Ar = i, Ar;
}
var Cr, ao;
function Qd() {
  if (ao)
    return Cr;
  ao = 1;
  var n = aa(), e = Kd(), t = ei(), r = sa(), i = Zd(), o = function() {
  };
  process.env.NODE_ENV !== "production" && (o = function(u) {
    var g = "Warning: " + u;
    typeof console < "u" && console.error(g);
    try {
      throw new Error(g);
    } catch {
    }
  });
  function l() {
    return null;
  }
  return Cr = function(u, g) {
    var T = typeof Symbol == "function" && Symbol.iterator, f = "@@iterator";
    function d(A) {
      var B = A && (T && A[T] || A[f]);
      if (typeof B == "function")
        return B;
    }
    var h = "<<anonymous>>", a = {
      array: w("array"),
      bigint: w("bigint"),
      bool: w("boolean"),
      func: w("function"),
      number: w("number"),
      object: w("object"),
      string: w("string"),
      symbol: w("symbol"),
      any: p(),
      arrayOf: v,
      element: m(),
      elementType: _(),
      instanceOf: E,
      node: D(),
      objectOf: S,
      oneOf: C,
      oneOfType: N,
      shape: L,
      exact: U
    };
    function s(A, B) {
      return A === B ? A !== 0 || 1 / A === 1 / B : A !== A && B !== B;
    }
    function c(A, B) {
      this.message = A, this.data = B && typeof B == "object" ? B : {}, this.stack = "";
    }
    c.prototype = Error.prototype;
    function y(A) {
      if (process.env.NODE_ENV !== "production")
        var B = {}, Y = 0;
      function V(Q, $, j, Z, ee, J, me) {
        if (Z = Z || h, J = J || j, me !== t) {
          if (g) {
            var O = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw O.name = "Invariant Violation", O;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var te = Z + ":" + j;
            !B[te] && // Avoid spamming the console because they are often not actionable except for lib authors
            Y < 3 && (o(
              "You are manually calling a React.PropTypes validation function for the `" + J + "` prop on `" + Z + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), B[te] = !0, Y++);
          }
        }
        return $[j] == null ? Q ? $[j] === null ? new c("The " + ee + " `" + J + "` is marked as required " + ("in `" + Z + "`, but its value is `null`.")) : new c("The " + ee + " `" + J + "` is marked as required in " + ("`" + Z + "`, but its value is `undefined`.")) : null : A($, j, Z, ee, J);
      }
      var W = V.bind(null, !1);
      return W.isRequired = V.bind(null, !0), W;
    }
    function w(A) {
      function B(Y, V, W, Q, $, j) {
        var Z = Y[V], ee = X(Z);
        if (ee !== A) {
          var J = K(Z);
          return new c(
            "Invalid " + Q + " `" + $ + "` of type " + ("`" + J + "` supplied to `" + W + "`, expected ") + ("`" + A + "`."),
            { expectedType: A }
          );
        }
        return null;
      }
      return y(B);
    }
    function p() {
      return y(l);
    }
    function v(A) {
      function B(Y, V, W, Q, $) {
        if (typeof A != "function")
          return new c("Property `" + $ + "` of component `" + W + "` has invalid PropType notation inside arrayOf.");
        var j = Y[V];
        if (!Array.isArray(j)) {
          var Z = X(j);
          return new c("Invalid " + Q + " `" + $ + "` of type " + ("`" + Z + "` supplied to `" + W + "`, expected an array."));
        }
        for (var ee = 0; ee < j.length; ee++) {
          var J = A(j, ee, W, Q, $ + "[" + ee + "]", t);
          if (J instanceof Error)
            return J;
        }
        return null;
      }
      return y(B);
    }
    function m() {
      function A(B, Y, V, W, Q) {
        var $ = B[Y];
        if (!u($)) {
          var j = X($);
          return new c("Invalid " + W + " `" + Q + "` of type " + ("`" + j + "` supplied to `" + V + "`, expected a single ReactElement."));
        }
        return null;
      }
      return y(A);
    }
    function _() {
      function A(B, Y, V, W, Q) {
        var $ = B[Y];
        if (!n.isValidElementType($)) {
          var j = X($);
          return new c("Invalid " + W + " `" + Q + "` of type " + ("`" + j + "` supplied to `" + V + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return y(A);
    }
    function E(A) {
      function B(Y, V, W, Q, $) {
        if (!(Y[V] instanceof A)) {
          var j = A.name || h, Z = oe(Y[V]);
          return new c("Invalid " + Q + " `" + $ + "` of type " + ("`" + Z + "` supplied to `" + W + "`, expected ") + ("instance of `" + j + "`."));
        }
        return null;
      }
      return y(B);
    }
    function C(A) {
      if (!Array.isArray(A))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? o(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : o("Invalid argument supplied to oneOf, expected an array.")), l;
      function B(Y, V, W, Q, $) {
        for (var j = Y[V], Z = 0; Z < A.length; Z++)
          if (s(j, A[Z]))
            return null;
        var ee = JSON.stringify(A, function(me, O) {
          var te = K(O);
          return te === "symbol" ? String(O) : O;
        });
        return new c("Invalid " + Q + " `" + $ + "` of value `" + String(j) + "` " + ("supplied to `" + W + "`, expected one of " + ee + "."));
      }
      return y(B);
    }
    function S(A) {
      function B(Y, V, W, Q, $) {
        if (typeof A != "function")
          return new c("Property `" + $ + "` of component `" + W + "` has invalid PropType notation inside objectOf.");
        var j = Y[V], Z = X(j);
        if (Z !== "object")
          return new c("Invalid " + Q + " `" + $ + "` of type " + ("`" + Z + "` supplied to `" + W + "`, expected an object."));
        for (var ee in j)
          if (r(j, ee)) {
            var J = A(j, ee, W, Q, $ + "." + ee, t);
            if (J instanceof Error)
              return J;
          }
        return null;
      }
      return y(B);
    }
    function N(A) {
      if (!Array.isArray(A))
        return process.env.NODE_ENV !== "production" && o("Invalid argument supplied to oneOfType, expected an instance of array."), l;
      for (var B = 0; B < A.length; B++) {
        var Y = A[B];
        if (typeof Y != "function")
          return o(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + M(Y) + " at index " + B + "."
          ), l;
      }
      function V(W, Q, $, j, Z) {
        for (var ee = [], J = 0; J < A.length; J++) {
          var me = A[J], O = me(W, Q, $, j, Z, t);
          if (O == null)
            return null;
          O.data && r(O.data, "expectedType") && ee.push(O.data.expectedType);
        }
        var te = ee.length > 0 ? ", expected one of type [" + ee.join(", ") + "]" : "";
        return new c("Invalid " + j + " `" + Z + "` supplied to " + ("`" + $ + "`" + te + "."));
      }
      return y(V);
    }
    function D() {
      function A(B, Y, V, W, Q) {
        return q(B[Y]) ? null : new c("Invalid " + W + " `" + Q + "` supplied to " + ("`" + V + "`, expected a ReactNode."));
      }
      return y(A);
    }
    function P(A, B, Y, V, W) {
      return new c(
        (A || "React class") + ": " + B + " type `" + Y + "." + V + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + W + "`."
      );
    }
    function L(A) {
      function B(Y, V, W, Q, $) {
        var j = Y[V], Z = X(j);
        if (Z !== "object")
          return new c("Invalid " + Q + " `" + $ + "` of type `" + Z + "` " + ("supplied to `" + W + "`, expected `object`."));
        for (var ee in A) {
          var J = A[ee];
          if (typeof J != "function")
            return P(W, Q, $, ee, K(J));
          var me = J(j, ee, W, Q, $ + "." + ee, t);
          if (me)
            return me;
        }
        return null;
      }
      return y(B);
    }
    function U(A) {
      function B(Y, V, W, Q, $) {
        var j = Y[V], Z = X(j);
        if (Z !== "object")
          return new c("Invalid " + Q + " `" + $ + "` of type `" + Z + "` " + ("supplied to `" + W + "`, expected `object`."));
        var ee = e({}, Y[V], A);
        for (var J in ee) {
          var me = A[J];
          if (r(A, J) && typeof me != "function")
            return P(W, Q, $, J, K(me));
          if (!me)
            return new c(
              "Invalid " + Q + " `" + $ + "` key `" + J + "` supplied to `" + W + "`.\nBad object: " + JSON.stringify(Y[V], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(A), null, "  ")
            );
          var O = me(j, J, W, Q, $ + "." + J, t);
          if (O)
            return O;
        }
        return null;
      }
      return y(B);
    }
    function q(A) {
      switch (typeof A) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !A;
        case "object":
          if (Array.isArray(A))
            return A.every(q);
          if (A === null || u(A))
            return !0;
          var B = d(A);
          if (B) {
            var Y = B.call(A), V;
            if (B !== A.entries) {
              for (; !(V = Y.next()).done; )
                if (!q(V.value))
                  return !1;
            } else
              for (; !(V = Y.next()).done; ) {
                var W = V.value;
                if (W && !q(W[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function k(A, B) {
      return A === "symbol" ? !0 : B ? B["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && B instanceof Symbol : !1;
    }
    function X(A) {
      var B = typeof A;
      return Array.isArray(A) ? "array" : A instanceof RegExp ? "object" : k(B, A) ? "symbol" : B;
    }
    function K(A) {
      if (typeof A > "u" || A === null)
        return "" + A;
      var B = X(A);
      if (B === "object") {
        if (A instanceof Date)
          return "date";
        if (A instanceof RegExp)
          return "regexp";
      }
      return B;
    }
    function M(A) {
      var B = K(A);
      switch (B) {
        case "array":
        case "object":
          return "an " + B;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + B;
        default:
          return B;
      }
    }
    function oe(A) {
      return !A.constructor || !A.constructor.name ? h : A.constructor.name;
    }
    return a.checkPropTypes = i, a.resetWarningCache = i.resetWarningCache, a.PropTypes = a, a;
  }, Cr;
}
var Rr, so;
function ec() {
  if (so)
    return Rr;
  so = 1;
  var n = ei();
  function e() {
  }
  function t() {
  }
  return t.resetWarningCache = e, Rr = function() {
    function r(l, u, g, T, f, d) {
      if (d !== n) {
        var h = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw h.name = "Invariant Violation", h;
      }
    }
    r.isRequired = r;
    function i() {
      return r;
    }
    var o = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: i,
      element: r,
      elementType: r,
      instanceOf: i,
      node: r,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: t,
      resetWarningCache: e
    };
    return o.PropTypes = o, o;
  }, Rr;
}
if (process.env.NODE_ENV !== "production") {
  var tc = aa(), nc = !0;
  Fr.exports = Qd()(tc.isElement, nc);
} else
  Fr.exports = ec()();
var rc = Fr.exports, ic = Object.create, Gn = Object.defineProperty, oc = Object.getOwnPropertyDescriptor, ac = Object.getOwnPropertyNames, sc = Object.getPrototypeOf, lc = Object.prototype.hasOwnProperty, dc = (n, e) => {
  for (var t in e)
    Gn(n, t, { get: e[t], enumerable: !0 });
}, la = (n, e, t, r) => {
  if (e && typeof e == "object" || typeof e == "function")
    for (let i of ac(e))
      !lc.call(n, i) && i !== t && Gn(n, i, { get: () => e[i], enumerable: !(r = oc(e, i)) || r.enumerable });
  return n;
}, cc = (n, e, t) => (t = n != null ? ic(sc(n)) : {}, la(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  !n || !n.__esModule ? Gn(t, "default", { value: n, enumerable: !0 }) : t,
  n
)), uc = (n) => la(Gn({}, "__esModule", { value: !0 }), n), da = {};
dc(da, {
  defaultProps: () => gc,
  propTypes: () => fc
});
var ca = uc(da), hc = cc(rc);
const { string: we, bool: ke, number: Mt, array: Nr, oneOfType: en, shape: We, object: Re, func: be, node: lo } = hc.default, fc = {
  url: en([we, Nr, Re]),
  playing: ke,
  loop: ke,
  controls: ke,
  volume: Mt,
  muted: ke,
  playbackRate: Mt,
  width: en([we, Mt]),
  height: en([we, Mt]),
  style: Re,
  progressInterval: Mt,
  playsinline: ke,
  pip: ke,
  stopOnUnmount: ke,
  light: en([ke, we, Re]),
  playIcon: lo,
  previewTabIndex: Mt,
  previewAriaLabel: we,
  fallback: lo,
  oEmbedUrl: we,
  wrapper: en([
    we,
    be,
    We({ render: be.isRequired })
  ]),
  config: We({
    soundcloud: We({
      options: Re
    }),
    youtube: We({
      playerVars: Re,
      embedOptions: Re,
      onUnstarted: be
    }),
    facebook: We({
      appId: we,
      version: we,
      playerId: we,
      attributes: Re
    }),
    dailymotion: We({
      params: Re
    }),
    vimeo: We({
      playerOptions: Re,
      title: we
    }),
    mux: We({
      attributes: Re,
      version: we
    }),
    file: We({
      attributes: Re,
      tracks: Nr,
      forceVideo: ke,
      forceAudio: ke,
      forceHLS: ke,
      forceSafariHLS: ke,
      forceDisableHls: ke,
      forceDASH: ke,
      forceFLV: ke,
      hlsOptions: Re,
      hlsVersion: we,
      dashVersion: we,
      flvVersion: we
    }),
    wistia: We({
      options: Re,
      playerId: we,
      customControls: Nr
    }),
    mixcloud: We({
      options: Re
    }),
    twitch: We({
      options: Re,
      playerId: we
    }),
    vidyard: We({
      options: Re
    })
  }),
  onReady: be,
  onStart: be,
  onPlay: be,
  onPause: be,
  onBuffer: be,
  onBufferEnd: be,
  onEnded: be,
  onError: be,
  onDuration: be,
  onSeek: be,
  onPlaybackRateChange: be,
  onPlaybackQualityChange: be,
  onProgress: be,
  onClickPreview: be,
  onEnablePIP: be,
  onDisablePIP: be
}, Oe = () => {
}, gc = {
  playing: !1,
  loop: !1,
  controls: !1,
  volume: null,
  muted: !1,
  playbackRate: 1,
  width: "640px",
  height: "360px",
  style: {},
  progressInterval: 1e3,
  playsinline: !1,
  pip: !1,
  stopOnUnmount: !0,
  light: !1,
  fallback: null,
  wrapper: "div",
  previewTabIndex: 0,
  previewAriaLabel: "",
  oEmbedUrl: "https://noembed.com/embed?url={url}",
  config: {
    soundcloud: {
      options: {
        visual: !0,
        // Undocumented, but makes player fill container and look better
        buying: !1,
        liking: !1,
        download: !1,
        sharing: !1,
        show_comments: !1,
        show_playcount: !1
      }
    },
    youtube: {
      playerVars: {
        playsinline: 1,
        showinfo: 0,
        rel: 0,
        iv_load_policy: 3,
        modestbranding: 1
      },
      embedOptions: {},
      onUnstarted: Oe
    },
    facebook: {
      appId: "1309697205772819",
      version: "v3.3",
      playerId: null,
      attributes: {}
    },
    dailymotion: {
      params: {
        api: 1,
        "endscreen-enable": !1
      }
    },
    vimeo: {
      playerOptions: {
        autopause: !1,
        byline: !1,
        portrait: !1,
        title: !1
      },
      title: null
    },
    mux: {
      attributes: {},
      version: "2"
    },
    file: {
      attributes: {},
      tracks: [],
      forceVideo: !1,
      forceAudio: !1,
      forceHLS: !1,
      forceDASH: !1,
      forceFLV: !1,
      hlsOptions: {},
      hlsVersion: "1.1.4",
      dashVersion: "3.1.3",
      flvVersion: "1.5.0",
      forceDisableHls: !1
    },
    wistia: {
      options: {},
      playerId: null,
      customControls: null
    },
    mixcloud: {
      options: {
        hide_cover: 1
      }
    },
    twitch: {
      options: {},
      playerId: null
    },
    vidyard: {
      options: {}
    }
  },
  onReady: Oe,
  onStart: Oe,
  onPlay: Oe,
  onPause: Oe,
  onBuffer: Oe,
  onBufferEnd: Oe,
  onEnded: Oe,
  onError: Oe,
  onDuration: Oe,
  onSeek: Oe,
  onPlaybackRateChange: Oe,
  onPlaybackQualityChange: Oe,
  onProgress: Oe,
  onClickPreview: Oe,
  onEnablePIP: Oe,
  onDisablePIP: Oe
};
var _c = Object.create, fn = Object.defineProperty, pc = Object.getOwnPropertyDescriptor, mc = Object.getOwnPropertyNames, yc = Object.getPrototypeOf, bc = Object.prototype.hasOwnProperty, Tc = (n, e, t) => e in n ? fn(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t, vc = (n, e) => {
  for (var t in e)
    fn(n, t, { get: e[t], enumerable: !0 });
}, ua = (n, e, t, r) => {
  if (e && typeof e == "object" || typeof e == "function")
    for (let i of mc(e))
      !bc.call(n, i) && i !== t && fn(n, i, { get: () => e[i], enumerable: !(r = pc(e, i)) || r.enumerable });
  return n;
}, ha = (n, e, t) => (t = n != null ? _c(yc(n)) : {}, ua(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  !n || !n.__esModule ? fn(t, "default", { value: n, enumerable: !0 }) : t,
  n
)), Ec = (n) => ua(fn({}, "__esModule", { value: !0 }), n), pe = (n, e, t) => (Tc(n, typeof e != "symbol" ? e + "" : e, t), t), fa = {};
vc(fa, {
  default: () => Jn
});
var wc = Ec(fa), co = ha(F), Oc = ha(oa), ga = ca, Sc = Vn;
const Lc = 5e3;
let Jn = class extends co.Component {
  constructor() {
    super(...arguments), pe(this, "mounted", !1), pe(this, "isReady", !1), pe(this, "isPlaying", !1), pe(this, "isLoading", !0), pe(this, "loadOnReady", null), pe(this, "startOnPlay", !0), pe(this, "seekOnPlay", null), pe(this, "onDurationCalled", !1), pe(this, "handlePlayerMount", (e) => {
      if (this.player) {
        this.progress();
        return;
      }
      this.player = e, this.player.load(this.props.url), this.progress();
    }), pe(this, "getInternalPlayer", (e) => this.player ? this.player[e] : null), pe(this, "progress", () => {
      if (this.props.url && this.player && this.isReady) {
        const e = this.getCurrentTime() || 0, t = this.getSecondsLoaded(), r = this.getDuration();
        if (r) {
          const i = {
            playedSeconds: e,
            played: e / r
          };
          t !== null && (i.loadedSeconds = t, i.loaded = t / r), (i.playedSeconds !== this.prevPlayed || i.loadedSeconds !== this.prevLoaded) && this.props.onProgress(i), this.prevPlayed = i.playedSeconds, this.prevLoaded = i.loadedSeconds;
        }
      }
      this.progressTimeout = setTimeout(this.progress, this.props.progressFrequency || this.props.progressInterval);
    }), pe(this, "handleReady", () => {
      if (!this.mounted)
        return;
      this.isReady = !0, this.isLoading = !1;
      const { onReady: e, playing: t, volume: r, muted: i } = this.props;
      e(), !i && r !== null && this.player.setVolume(r), this.loadOnReady ? (this.player.load(this.loadOnReady, !0), this.loadOnReady = null) : t && this.player.play(), this.handleDurationCheck();
    }), pe(this, "handlePlay", () => {
      this.isPlaying = !0, this.isLoading = !1;
      const { onStart: e, onPlay: t, playbackRate: r } = this.props;
      this.startOnPlay && (this.player.setPlaybackRate && r !== 1 && this.player.setPlaybackRate(r), e(), this.startOnPlay = !1), t(), this.seekOnPlay && (this.seekTo(this.seekOnPlay), this.seekOnPlay = null), this.handleDurationCheck();
    }), pe(this, "handlePause", (e) => {
      this.isPlaying = !1, this.isLoading || this.props.onPause(e);
    }), pe(this, "handleEnded", () => {
      const { activePlayer: e, loop: t, onEnded: r } = this.props;
      e.loopOnEnded && t && this.seekTo(0), t || (this.isPlaying = !1, r());
    }), pe(this, "handleError", (...e) => {
      this.isLoading = !1, this.props.onError(...e);
    }), pe(this, "handleDurationCheck", () => {
      clearTimeout(this.durationCheckTimeout);
      const e = this.getDuration();
      e ? this.onDurationCalled || (this.props.onDuration(e), this.onDurationCalled = !0) : this.durationCheckTimeout = setTimeout(this.handleDurationCheck, 100);
    }), pe(this, "handleLoaded", () => {
      this.isLoading = !1;
    });
  }
  componentDidMount() {
    this.mounted = !0;
  }
  componentWillUnmount() {
    clearTimeout(this.progressTimeout), clearTimeout(this.durationCheckTimeout), this.isReady && this.props.stopOnUnmount && (this.player.stop(), this.player.disablePIP && this.player.disablePIP()), this.mounted = !1;
  }
  componentDidUpdate(e) {
    if (!this.player)
      return;
    const { url: t, playing: r, volume: i, muted: o, playbackRate: l, pip: u, loop: g, activePlayer: T, disableDeferredLoading: f } = this.props;
    if (!(0, Oc.default)(e.url, t)) {
      if (this.isLoading && !T.forceLoad && !f && !(0, Sc.isMediaStream)(t)) {
        console.warn(`ReactPlayer: the attempt to load ${t} is being deferred until the player has loaded`), this.loadOnReady = t;
        return;
      }
      this.isLoading = !0, this.startOnPlay = !0, this.onDurationCalled = !1, this.player.load(t, this.isReady);
    }
    !e.playing && r && !this.isPlaying && this.player.play(), e.playing && !r && this.isPlaying && this.player.pause(), !e.pip && u && this.player.enablePIP && this.player.enablePIP(), e.pip && !u && this.player.disablePIP && this.player.disablePIP(), e.volume !== i && i !== null && this.player.setVolume(i), e.muted !== o && (o ? this.player.mute() : (this.player.unmute(), i !== null && setTimeout(() => this.player.setVolume(i)))), e.playbackRate !== l && this.player.setPlaybackRate && this.player.setPlaybackRate(l), e.loop !== g && this.player.setLoop && this.player.setLoop(g);
  }
  getDuration() {
    return this.isReady ? this.player.getDuration() : null;
  }
  getCurrentTime() {
    return this.isReady ? this.player.getCurrentTime() : null;
  }
  getSecondsLoaded() {
    return this.isReady ? this.player.getSecondsLoaded() : null;
  }
  seekTo(e, t, r) {
    if (!this.isReady) {
      e !== 0 && (this.seekOnPlay = e, setTimeout(() => {
        this.seekOnPlay = null;
      }, Lc));
      return;
    }
    if (t ? t === "fraction" : e > 0 && e < 1) {
      const o = this.player.getDuration();
      if (!o) {
        console.warn("ReactPlayer: could not seek using fraction – duration not yet available");
        return;
      }
      this.player.seekTo(o * e, r);
      return;
    }
    this.player.seekTo(e, r);
  }
  render() {
    const e = this.props.activePlayer;
    return e ? /* @__PURE__ */ co.default.createElement(
      e,
      {
        ...this.props,
        onMount: this.handlePlayerMount,
        onReady: this.handleReady,
        onPlay: this.handlePlay,
        onPause: this.handlePause,
        onEnded: this.handleEnded,
        onLoaded: this.handleLoaded,
        onError: this.handleError
      }
    ) : null;
  }
};
pe(Jn, "displayName", "Player");
pe(Jn, "propTypes", ga.propTypes);
pe(Jn, "defaultProps", ga.defaultProps);
var Ac = Object.create, gn = Object.defineProperty, Cc = Object.getOwnPropertyDescriptor, Rc = Object.getOwnPropertyNames, Nc = Object.getPrototypeOf, Dc = Object.prototype.hasOwnProperty, Ic = (n, e, t) => e in n ? gn(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t, xc = (n, e) => {
  for (var t in e)
    gn(n, t, { get: e[t], enumerable: !0 });
}, _a = (n, e, t, r) => {
  if (e && typeof e == "object" || typeof e == "function")
    for (let i of Rc(e))
      !Dc.call(n, i) && i !== t && gn(n, i, { get: () => e[i], enumerable: !(r = Cc(e, i)) || r.enumerable });
  return n;
}, _n = (n, e, t) => (t = n != null ? Ac(Nc(n)) : {}, _a(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  !n || !n.__esModule ? gn(t, "default", { value: n, enumerable: !0 }) : t,
  n
)), Pc = (n) => _a(gn({}, "__esModule", { value: !0 }), n), _e = (n, e, t) => (Ic(n, typeof e != "symbol" ? e + "" : e, t), t), pa = {};
xc(pa, {
  createReactPlayer: () => $c
});
var Bc = Pc(pa), Ft = _n(F), kc = _n(Uo), Dr = _n(Hd), uo = _n(oa), nn = ca, ma = Vn, Mc = _n(wc);
const Uc = (0, ma.lazy)(() => import(
  /* webpackChunkName: 'reactPlayerPreview' */
  "./Preview-Ds5gaGCs.js"
).then((n) => n.P)), Fc = typeof window < "u" && window.document && typeof document < "u", jc = typeof Lt < "u" && Lt.window && Lt.window.document, zc = Object.keys(nn.propTypes), Yc = Fc || jc ? Ft.Suspense : () => null, tn = [], $c = (n, e) => {
  var t;
  return t = class extends Ft.Component {
    constructor() {
      super(...arguments), _e(this, "state", {
        showPreview: !!this.props.light
      }), _e(this, "references", {
        wrapper: (r) => {
          this.wrapper = r;
        },
        player: (r) => {
          this.player = r;
        }
      }), _e(this, "handleClickPreview", (r) => {
        this.setState({ showPreview: !1 }), this.props.onClickPreview(r);
      }), _e(this, "showPreview", () => {
        this.setState({ showPreview: !0 });
      }), _e(this, "getDuration", () => this.player ? this.player.getDuration() : null), _e(this, "getCurrentTime", () => this.player ? this.player.getCurrentTime() : null), _e(this, "getSecondsLoaded", () => this.player ? this.player.getSecondsLoaded() : null), _e(this, "getInternalPlayer", (r = "player") => this.player ? this.player.getInternalPlayer(r) : null), _e(this, "seekTo", (r, i, o) => {
        if (!this.player)
          return null;
        this.player.seekTo(r, i, o);
      }), _e(this, "handleReady", () => {
        this.props.onReady(this);
      }), _e(this, "getActivePlayer", (0, Dr.default)((r) => {
        for (const i of [...tn, ...n])
          if (i.canPlay(r))
            return i;
        return e || null;
      })), _e(this, "getConfig", (0, Dr.default)((r, i) => {
        const { config: o } = this.props;
        return kc.default.all([
          nn.defaultProps.config,
          nn.defaultProps.config[i] || {},
          o,
          o[i] || {}
        ]);
      })), _e(this, "getAttributes", (0, Dr.default)((r) => (0, ma.omit)(this.props, zc))), _e(this, "renderActivePlayer", (r) => {
        if (!r)
          return null;
        const i = this.getActivePlayer(r);
        if (!i)
          return null;
        const o = this.getConfig(r, i.key);
        return /* @__PURE__ */ Ft.default.createElement(
          Mc.default,
          {
            ...this.props,
            key: i.key,
            ref: this.references.player,
            config: o,
            activePlayer: i.lazyPlayer || i,
            onReady: this.handleReady
          }
        );
      });
    }
    shouldComponentUpdate(r, i) {
      return !(0, uo.default)(this.props, r) || !(0, uo.default)(this.state, i);
    }
    componentDidUpdate(r) {
      const { light: i } = this.props;
      !r.light && i && this.setState({ showPreview: !0 }), r.light && !i && this.setState({ showPreview: !1 });
    }
    renderPreview(r) {
      if (!r)
        return null;
      const { light: i, playIcon: o, previewTabIndex: l, oEmbedUrl: u, previewAriaLabel: g } = this.props;
      return /* @__PURE__ */ Ft.default.createElement(
        Uc,
        {
          url: r,
          light: i,
          playIcon: o,
          previewTabIndex: l,
          previewAriaLabel: g,
          oEmbedUrl: u,
          onClick: this.handleClickPreview
        }
      );
    }
    render() {
      const { url: r, style: i, width: o, height: l, fallback: u, wrapper: g } = this.props, { showPreview: T } = this.state, f = this.getAttributes(r), d = typeof g == "string" ? this.references.wrapper : void 0;
      return /* @__PURE__ */ Ft.default.createElement(g, { ref: d, style: { ...i, width: o, height: l }, ...f }, /* @__PURE__ */ Ft.default.createElement(Yc, { fallback: u }, T ? this.renderPreview(r) : this.renderActivePlayer(r)));
    }
  }, _e(t, "displayName", "ReactPlayer"), _e(t, "propTypes", nn.propTypes), _e(t, "defaultProps", nn.defaultProps), _e(t, "addCustomPlayer", (r) => {
    tn.push(r);
  }), _e(t, "removeCustomPlayers", () => {
    tn.length = 0;
  }), _e(t, "canPlay", (r) => {
    for (const i of [...tn, ...n])
      if (i.canPlay(r))
        return !0;
    return !1;
  }), _e(t, "canEnablePIP", (r) => {
    for (const i of [...tn, ...n])
      if (i.canEnablePIP && i.canEnablePIP(r))
        return !0;
    return !1;
  }), t;
};
var Hc = Object.create, qn = Object.defineProperty, Wc = Object.getOwnPropertyDescriptor, Xc = Object.getOwnPropertyNames, Vc = Object.getPrototypeOf, Gc = Object.prototype.hasOwnProperty, Jc = (n, e) => {
  for (var t in e)
    qn(n, t, { get: e[t], enumerable: !0 });
}, ya = (n, e, t, r) => {
  if (e && typeof e == "object" || typeof e == "function")
    for (let i of Xc(e))
      !Gc.call(n, i) && i !== t && qn(n, i, { get: () => e[i], enumerable: !(r = Wc(e, i)) || r.enumerable });
  return n;
}, qc = (n, e, t) => (t = n != null ? Hc(Vc(n)) : {}, ya(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  !n || !n.__esModule ? qn(t, "default", { value: n, enumerable: !0 }) : t,
  n
)), Kc = (n) => ya(qn({}, "__esModule", { value: !0 }), n), ba = {};
Jc(ba, {
  default: () => tu
});
var Zc = Kc(ba), jr = qc(Ud), Qc = Bc;
const eu = jr.default[jr.default.length - 1];
var tu = (0, Qc.createReactPlayer)(jr.default, eu);
const nu = /* @__PURE__ */ is(Zc);
function ru(n, e, t) {
  return Math.max(e, Math.min(n, t));
}
const De = {
  toVector(n, e) {
    return n === void 0 && (n = e), Array.isArray(n) ? n : [n, n];
  },
  add(n, e) {
    return [n[0] + e[0], n[1] + e[1]];
  },
  sub(n, e) {
    return [n[0] - e[0], n[1] - e[1]];
  },
  addTo(n, e) {
    n[0] += e[0], n[1] += e[1];
  },
  subTo(n, e) {
    n[0] -= e[0], n[1] -= e[1];
  }
};
function ho(n, e, t) {
  return e === 0 || Math.abs(e) === 1 / 0 ? Math.pow(n, t * 5) : n * e * t / (e + t * n);
}
function fo(n, e, t, r = 0.15) {
  return r === 0 ? ru(n, e, t) : n < e ? -ho(e - n, t - e, r) + e : n > t ? +ho(n - t, t - e, r) + t : n;
}
function iu(n, [e, t], [r, i]) {
  const [[o, l], [u, g]] = n;
  return [fo(e, o, l, r), fo(t, u, g, i)];
}
function ou(n, e) {
  if (typeof n != "object" || n === null)
    return n;
  var t = n[Symbol.toPrimitive];
  if (t !== void 0) {
    var r = t.call(n, e || "default");
    if (typeof r != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(n);
}
function au(n) {
  var e = ou(n, "string");
  return typeof e == "symbol" ? e : String(e);
}
function Ye(n, e, t) {
  return e = au(e), e in n ? Object.defineProperty(n, e, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[e] = t, n;
}
function go(n, e) {
  var t = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(n);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(n, i).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function fe(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? go(Object(t), !0).forEach(function(r) {
      Ye(n, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : go(Object(t)).forEach(function(r) {
      Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return n;
}
const Ta = {
  pointer: {
    start: "down",
    change: "move",
    end: "up"
  },
  mouse: {
    start: "down",
    change: "move",
    end: "up"
  },
  touch: {
    start: "start",
    change: "move",
    end: "end"
  },
  gesture: {
    start: "start",
    change: "change",
    end: "end"
  }
};
function _o(n) {
  return n ? n[0].toUpperCase() + n.slice(1) : "";
}
const su = ["enter", "leave"];
function lu(n = !1, e) {
  return n && !su.includes(e);
}
function du(n, e = "", t = !1) {
  const r = Ta[n], i = r && r[e] || e;
  return "on" + _o(n) + _o(i) + (lu(t, i) ? "Capture" : "");
}
const cu = ["gotpointercapture", "lostpointercapture"];
function uu(n) {
  let e = n.substring(2).toLowerCase();
  const t = !!~e.indexOf("passive");
  t && (e = e.replace("passive", ""));
  const r = cu.includes(e) ? "capturecapture" : "capture", i = !!~e.indexOf(r);
  return i && (e = e.replace("capture", "")), {
    device: e,
    capture: i,
    passive: t
  };
}
function hu(n, e = "") {
  const t = Ta[n], r = t && t[e] || e;
  return n + r;
}
function Kn(n) {
  return "touches" in n;
}
function va(n) {
  return Kn(n) ? "touch" : "pointerType" in n ? n.pointerType : "mouse";
}
function fu(n) {
  return Array.from(n.touches).filter((e) => {
    var t, r;
    return e.target === n.currentTarget || ((t = n.currentTarget) === null || t === void 0 || (r = t.contains) === null || r === void 0 ? void 0 : r.call(t, e.target));
  });
}
function gu(n) {
  return n.type === "touchend" || n.type === "touchcancel" ? n.changedTouches : n.targetTouches;
}
function Ea(n) {
  return Kn(n) ? gu(n)[0] : n;
}
function _u(n) {
  return fu(n).map((e) => e.identifier);
}
function Ir(n) {
  const e = Ea(n);
  return Kn(n) ? e.identifier : e.pointerId;
}
function po(n) {
  const e = Ea(n);
  return [e.clientX, e.clientY];
}
function pu(n) {
  const e = {};
  if ("buttons" in n && (e.buttons = n.buttons), "shiftKey" in n) {
    const {
      shiftKey: t,
      altKey: r,
      metaKey: i,
      ctrlKey: o
    } = n;
    Object.assign(e, {
      shiftKey: t,
      altKey: r,
      metaKey: i,
      ctrlKey: o
    });
  }
  return e;
}
function Cn(n, ...e) {
  return typeof n == "function" ? n(...e) : n;
}
function mu() {
}
function yu(...n) {
  return n.length === 0 ? mu : n.length === 1 ? n[0] : function() {
    let e;
    for (const t of n)
      e = t.apply(this, arguments) || e;
    return e;
  };
}
function mo(n, e) {
  return Object.assign({}, e, n || {});
}
const bu = 32;
class Tu {
  constructor(e, t, r) {
    this.ctrl = e, this.args = t, this.key = r, this.state || (this.state = {}, this.computeValues([0, 0]), this.computeInitial(), this.init && this.init(), this.reset());
  }
  get state() {
    return this.ctrl.state[this.key];
  }
  set state(e) {
    this.ctrl.state[this.key] = e;
  }
  get shared() {
    return this.ctrl.state.shared;
  }
  get eventStore() {
    return this.ctrl.gestureEventStores[this.key];
  }
  get timeoutStore() {
    return this.ctrl.gestureTimeoutStores[this.key];
  }
  get config() {
    return this.ctrl.config[this.key];
  }
  get sharedConfig() {
    return this.ctrl.config.shared;
  }
  get handler() {
    return this.ctrl.handlers[this.key];
  }
  reset() {
    const {
      state: e,
      shared: t,
      ingKey: r,
      args: i
    } = this;
    t[r] = e._active = e.active = e._blocked = e._force = !1, e._step = [!1, !1], e.intentional = !1, e._movement = [0, 0], e._distance = [0, 0], e._direction = [0, 0], e._delta = [0, 0], e._bounds = [[-1 / 0, 1 / 0], [-1 / 0, 1 / 0]], e.args = i, e.axis = void 0, e.memo = void 0, e.elapsedTime = e.timeDelta = 0, e.direction = [0, 0], e.distance = [0, 0], e.overflow = [0, 0], e._movementBound = [!1, !1], e.velocity = [0, 0], e.movement = [0, 0], e.delta = [0, 0], e.timeStamp = 0;
  }
  start(e) {
    const t = this.state, r = this.config;
    t._active || (this.reset(), this.computeInitial(), t._active = !0, t.target = e.target, t.currentTarget = e.currentTarget, t.lastOffset = r.from ? Cn(r.from, t) : t.offset, t.offset = t.lastOffset, t.startTime = t.timeStamp = e.timeStamp);
  }
  computeValues(e) {
    const t = this.state;
    t._values = e, t.values = this.config.transform(e);
  }
  computeInitial() {
    const e = this.state;
    e._initial = e._values, e.initial = e.values;
  }
  compute(e) {
    const {
      state: t,
      config: r,
      shared: i
    } = this;
    t.args = this.args;
    let o = 0;
    if (e && (t.event = e, r.preventDefault && e.cancelable && t.event.preventDefault(), t.type = e.type, i.touches = this.ctrl.pointerIds.size || this.ctrl.touchIds.size, i.locked = !!document.pointerLockElement, Object.assign(i, pu(e)), i.down = i.pressed = i.buttons % 2 === 1 || i.touches > 0, o = e.timeStamp - t.timeStamp, t.timeStamp = e.timeStamp, t.elapsedTime = t.timeStamp - t.startTime), t._active) {
      const E = t._delta.map(Math.abs);
      De.addTo(t._distance, E);
    }
    this.axisIntent && this.axisIntent(e);
    const [l, u] = t._movement, [g, T] = r.threshold, {
      _step: f,
      values: d
    } = t;
    if (r.hasCustomTransform ? (f[0] === !1 && (f[0] = Math.abs(l) >= g && d[0]), f[1] === !1 && (f[1] = Math.abs(u) >= T && d[1])) : (f[0] === !1 && (f[0] = Math.abs(l) >= g && Math.sign(l) * g), f[1] === !1 && (f[1] = Math.abs(u) >= T && Math.sign(u) * T)), t.intentional = f[0] !== !1 || f[1] !== !1, !t.intentional)
      return;
    const h = [0, 0];
    if (r.hasCustomTransform) {
      const [E, C] = d;
      h[0] = f[0] !== !1 ? E - f[0] : 0, h[1] = f[1] !== !1 ? C - f[1] : 0;
    } else
      h[0] = f[0] !== !1 ? l - f[0] : 0, h[1] = f[1] !== !1 ? u - f[1] : 0;
    this.restrictToAxis && !t._blocked && this.restrictToAxis(h);
    const a = t.offset, s = t._active && !t._blocked || t.active;
    s && (t.first = t._active && !t.active, t.last = !t._active && t.active, t.active = i[this.ingKey] = t._active, e && (t.first && ("bounds" in r && (t._bounds = Cn(r.bounds, t)), this.setup && this.setup()), t.movement = h, this.computeOffset()));
    const [c, y] = t.offset, [[w, p], [v, m]] = t._bounds;
    t.overflow = [c < w ? -1 : c > p ? 1 : 0, y < v ? -1 : y > m ? 1 : 0], t._movementBound[0] = t.overflow[0] ? t._movementBound[0] === !1 ? t._movement[0] : t._movementBound[0] : !1, t._movementBound[1] = t.overflow[1] ? t._movementBound[1] === !1 ? t._movement[1] : t._movementBound[1] : !1;
    const _ = t._active ? r.rubberband || [0, 0] : [0, 0];
    if (t.offset = iu(t._bounds, t.offset, _), t.delta = De.sub(t.offset, a), this.computeMovement(), s && (!t.last || o > bu)) {
      t.delta = De.sub(t.offset, a);
      const E = t.delta.map(Math.abs);
      De.addTo(t.distance, E), t.direction = t.delta.map(Math.sign), t._direction = t._delta.map(Math.sign), !t.first && o > 0 && (t.velocity = [E[0] / o, E[1] / o], t.timeDelta = o);
    }
  }
  emit() {
    const e = this.state, t = this.shared, r = this.config;
    if (e._active || this.clean(), (e._blocked || !e.intentional) && !e._force && !r.triggerAllEvents)
      return;
    const i = this.handler(fe(fe(fe({}, t), e), {}, {
      [this.aliasKey]: e.values
    }));
    i !== void 0 && (e.memo = i);
  }
  clean() {
    this.eventStore.clean(), this.timeoutStore.clean();
  }
}
function vu([n, e], t) {
  const r = Math.abs(n), i = Math.abs(e);
  if (r > i && r > t)
    return "x";
  if (i > r && i > t)
    return "y";
}
class Eu extends Tu {
  constructor(...e) {
    super(...e), Ye(this, "aliasKey", "xy");
  }
  reset() {
    super.reset(), this.state.axis = void 0;
  }
  init() {
    this.state.offset = [0, 0], this.state.lastOffset = [0, 0];
  }
  computeOffset() {
    this.state.offset = De.add(this.state.lastOffset, this.state.movement);
  }
  computeMovement() {
    this.state.movement = De.sub(this.state.offset, this.state.lastOffset);
  }
  axisIntent(e) {
    const t = this.state, r = this.config;
    if (!t.axis && e) {
      const i = typeof r.axisThreshold == "object" ? r.axisThreshold[va(e)] : r.axisThreshold;
      t.axis = vu(t._movement, i);
    }
    t._blocked = (r.lockDirection || !!r.axis) && !t.axis || !!r.axis && r.axis !== t.axis;
  }
  restrictToAxis(e) {
    if (this.config.axis || this.config.lockDirection)
      switch (this.state.axis) {
        case "x":
          e[1] = 0;
          break;
        case "y":
          e[0] = 0;
          break;
      }
  }
}
const yo = (n) => n, bo = 0.15, ti = {
  enabled(n = !0) {
    return n;
  },
  eventOptions(n, e, t) {
    return fe(fe({}, t.shared.eventOptions), n);
  },
  preventDefault(n = !1) {
    return n;
  },
  triggerAllEvents(n = !1) {
    return n;
  },
  rubberband(n = 0) {
    switch (n) {
      case !0:
        return [bo, bo];
      case !1:
        return [0, 0];
      default:
        return De.toVector(n);
    }
  },
  from(n) {
    if (typeof n == "function")
      return n;
    if (n != null)
      return De.toVector(n);
  },
  transform(n, e, t) {
    const r = n || t.shared.transform;
    if (this.hasCustomTransform = !!r, process.env.NODE_ENV === "development") {
      const i = r || yo;
      return (o) => {
        const l = i(o);
        return (!isFinite(l[0]) || !isFinite(l[1])) && console.warn(`[@use-gesture]: config.transform() must produce a valid result, but it was: [${l[0]},${[1]}]`), l;
      };
    }
    return r || yo;
  },
  threshold(n) {
    return De.toVector(n, 0);
  }
};
process.env.NODE_ENV === "development" && Object.assign(ti, {
  domTarget(n) {
    if (n !== void 0)
      throw Error("[@use-gesture]: `domTarget` option has been renamed to `target`.");
    return NaN;
  },
  lockDirection(n) {
    if (n !== void 0)
      throw Error("[@use-gesture]: `lockDirection` option has been merged with `axis`. Use it as in `{ axis: 'lock' }`");
    return NaN;
  },
  initial(n) {
    if (n !== void 0)
      throw Error("[@use-gesture]: `initial` option has been renamed to `from`.");
    return NaN;
  }
});
const wu = 0, pn = fe(fe({}, ti), {}, {
  axis(n, e, {
    axis: t
  }) {
    if (this.lockDirection = t === "lock", !this.lockDirection)
      return t;
  },
  axisThreshold(n = wu) {
    return n;
  },
  bounds(n = {}) {
    if (typeof n == "function")
      return (o) => pn.bounds(n(o));
    if ("current" in n)
      return () => n.current;
    if (typeof HTMLElement == "function" && n instanceof HTMLElement)
      return n;
    const {
      left: e = -1 / 0,
      right: t = 1 / 0,
      top: r = -1 / 0,
      bottom: i = 1 / 0
    } = n;
    return [[e, t], [r, i]];
  }
}), To = {
  ArrowRight: (n, e = 1) => [n * e, 0],
  ArrowLeft: (n, e = 1) => [-1 * n * e, 0],
  ArrowUp: (n, e = 1) => [0, -1 * n * e],
  ArrowDown: (n, e = 1) => [0, n * e]
};
class Ou extends Eu {
  constructor(...e) {
    super(...e), Ye(this, "ingKey", "dragging");
  }
  reset() {
    super.reset();
    const e = this.state;
    e._pointerId = void 0, e._pointerActive = !1, e._keyboardActive = !1, e._preventScroll = !1, e._delayed = !1, e.swipe = [0, 0], e.tap = !1, e.canceled = !1, e.cancel = this.cancel.bind(this);
  }
  setup() {
    const e = this.state;
    if (e._bounds instanceof HTMLElement) {
      const t = e._bounds.getBoundingClientRect(), r = e.currentTarget.getBoundingClientRect(), i = {
        left: t.left - r.left + e.offset[0],
        right: t.right - r.right + e.offset[0],
        top: t.top - r.top + e.offset[1],
        bottom: t.bottom - r.bottom + e.offset[1]
      };
      e._bounds = pn.bounds(i);
    }
  }
  cancel() {
    const e = this.state;
    e.canceled || (e.canceled = !0, e._active = !1, setTimeout(() => {
      this.compute(), this.emit();
    }, 0));
  }
  setActive() {
    this.state._active = this.state._pointerActive || this.state._keyboardActive;
  }
  clean() {
    this.pointerClean(), this.state._pointerActive = !1, this.state._keyboardActive = !1, super.clean();
  }
  pointerDown(e) {
    const t = this.config, r = this.state;
    if (e.buttons != null && (Array.isArray(t.pointerButtons) ? !t.pointerButtons.includes(e.buttons) : t.pointerButtons !== -1 && t.pointerButtons !== e.buttons))
      return;
    const i = this.ctrl.setEventIds(e);
    t.pointerCapture && e.target.setPointerCapture(e.pointerId), !(i && i.size > 1 && r._pointerActive) && (this.start(e), this.setupPointer(e), r._pointerId = Ir(e), r._pointerActive = !0, this.computeValues(po(e)), this.computeInitial(), t.preventScrollAxis && va(e) !== "mouse" ? (r._active = !1, this.setupScrollPrevention(e)) : t.delay > 0 ? (this.setupDelayTrigger(e), t.triggerAllEvents && (this.compute(e), this.emit())) : this.startPointerDrag(e));
  }
  startPointerDrag(e) {
    const t = this.state;
    t._active = !0, t._preventScroll = !0, t._delayed = !1, this.compute(e), this.emit();
  }
  pointerMove(e) {
    const t = this.state, r = this.config;
    if (!t._pointerActive)
      return;
    const i = Ir(e);
    if (t._pointerId !== void 0 && i !== t._pointerId)
      return;
    const o = po(e);
    if (document.pointerLockElement === e.target ? t._delta = [e.movementX, e.movementY] : (t._delta = De.sub(o, t._values), this.computeValues(o)), De.addTo(t._movement, t._delta), this.compute(e), t._delayed && t.intentional) {
      this.timeoutStore.remove("dragDelay"), t.active = !1, this.startPointerDrag(e);
      return;
    }
    if (r.preventScrollAxis && !t._preventScroll)
      if (t.axis)
        if (t.axis === r.preventScrollAxis || r.preventScrollAxis === "xy") {
          t._active = !1, this.clean();
          return;
        } else {
          this.timeoutStore.remove("startPointerDrag"), this.startPointerDrag(e);
          return;
        }
      else
        return;
    this.emit();
  }
  pointerUp(e) {
    this.ctrl.setEventIds(e);
    try {
      this.config.pointerCapture && e.target.hasPointerCapture(e.pointerId) && e.target.releasePointerCapture(e.pointerId);
    } catch {
      process.env.NODE_ENV === "development" && console.warn("[@use-gesture]: If you see this message, it's likely that you're using an outdated version of `@react-three/fiber`. \n\nPlease upgrade to the latest version.");
    }
    const t = this.state, r = this.config;
    if (!t._active || !t._pointerActive)
      return;
    const i = Ir(e);
    if (t._pointerId !== void 0 && i !== t._pointerId)
      return;
    this.state._pointerActive = !1, this.setActive(), this.compute(e);
    const [o, l] = t._distance;
    if (t.tap = o <= r.tapsThreshold && l <= r.tapsThreshold, t.tap && r.filterTaps)
      t._force = !0;
    else {
      const [u, g] = t._delta, [T, f] = t._movement, [d, h] = r.swipe.velocity, [a, s] = r.swipe.distance, c = r.swipe.duration;
      if (t.elapsedTime < c) {
        const y = Math.abs(u / t.timeDelta), w = Math.abs(g / t.timeDelta);
        y > d && Math.abs(T) > a && (t.swipe[0] = Math.sign(u)), w > h && Math.abs(f) > s && (t.swipe[1] = Math.sign(g));
      }
    }
    this.emit();
  }
  pointerClick(e) {
    !this.state.tap && e.detail > 0 && (e.preventDefault(), e.stopPropagation());
  }
  setupPointer(e) {
    const t = this.config, r = t.device;
    if (process.env.NODE_ENV === "development")
      try {
        if (r === "pointer" && t.preventScrollDelay === void 0) {
          const i = "uv" in e ? e.sourceEvent.currentTarget : e.currentTarget;
          window.getComputedStyle(i).touchAction === "auto" && console.warn("[@use-gesture]: The drag target has its `touch-action` style property set to `auto`. It is recommended to add `touch-action: 'none'` so that the drag gesture behaves correctly on touch-enabled devices. For more information read this: https://use-gesture.netlify.app/docs/extras/#touch-action.\n\nThis message will only show in development mode. It won't appear in production. If this is intended, you can ignore it.", i);
        }
      } catch {
      }
    t.pointerLock && e.currentTarget.requestPointerLock(), t.pointerCapture || (this.eventStore.add(this.sharedConfig.window, r, "change", this.pointerMove.bind(this)), this.eventStore.add(this.sharedConfig.window, r, "end", this.pointerUp.bind(this)), this.eventStore.add(this.sharedConfig.window, r, "cancel", this.pointerUp.bind(this)));
  }
  pointerClean() {
    this.config.pointerLock && document.pointerLockElement === this.state.currentTarget && document.exitPointerLock();
  }
  preventScroll(e) {
    this.state._preventScroll && e.cancelable && e.preventDefault();
  }
  setupScrollPrevention(e) {
    this.state._preventScroll = !1, Su(e);
    const t = this.eventStore.add(this.sharedConfig.window, "touch", "change", this.preventScroll.bind(this), {
      passive: !1
    });
    this.eventStore.add(this.sharedConfig.window, "touch", "end", t), this.eventStore.add(this.sharedConfig.window, "touch", "cancel", t), this.timeoutStore.add("startPointerDrag", this.startPointerDrag.bind(this), this.config.preventScrollDelay, e);
  }
  setupDelayTrigger(e) {
    this.state._delayed = !0, this.timeoutStore.add("dragDelay", () => {
      this.state._step = [0, 0], this.startPointerDrag(e);
    }, this.config.delay);
  }
  keyDown(e) {
    const t = To[e.key];
    if (t) {
      const r = this.state, i = e.shiftKey ? 10 : e.altKey ? 0.1 : 1;
      this.start(e), r._delta = t(this.config.keyboardDisplacement, i), r._keyboardActive = !0, De.addTo(r._movement, r._delta), this.compute(e), this.emit();
    }
  }
  keyUp(e) {
    e.key in To && (this.state._keyboardActive = !1, this.setActive(), this.compute(e), this.emit());
  }
  bind(e) {
    const t = this.config.device;
    e(t, "start", this.pointerDown.bind(this)), this.config.pointerCapture && (e(t, "change", this.pointerMove.bind(this)), e(t, "end", this.pointerUp.bind(this)), e(t, "cancel", this.pointerUp.bind(this)), e("lostPointerCapture", "", this.pointerUp.bind(this))), this.config.keys && (e("key", "down", this.keyDown.bind(this)), e("key", "up", this.keyUp.bind(this))), this.config.filterTaps && e("click", "", this.pointerClick.bind(this), {
      capture: !0,
      passive: !1
    });
  }
}
function Su(n) {
  "persist" in n && typeof n.persist == "function" && n.persist();
}
const mn = typeof window < "u" && window.document && window.document.createElement;
function wa() {
  return mn && "ontouchstart" in window;
}
function Lu() {
  return wa() || mn && window.navigator.maxTouchPoints > 1;
}
function Au() {
  return mn && "onpointerdown" in window;
}
function Cu() {
  return mn && "exitPointerLock" in window.document;
}
function Ru() {
  try {
    return "constructor" in GestureEvent;
  } catch {
    return !1;
  }
}
const Ke = {
  isBrowser: mn,
  gesture: Ru(),
  touch: wa(),
  touchscreen: Lu(),
  pointer: Au(),
  pointerLock: Cu()
}, Nu = 250, Du = 180, Iu = 0.5, xu = 50, Pu = 250, Bu = 10, vo = {
  mouse: 0,
  touch: 0,
  pen: 8
}, Oa = fe(fe({}, pn), {}, {
  device(n, e, {
    pointer: {
      touch: t = !1,
      lock: r = !1,
      mouse: i = !1
    } = {}
  }) {
    return this.pointerLock = r && Ke.pointerLock, Ke.touch && t ? "touch" : this.pointerLock ? "mouse" : Ke.pointer && !i ? "pointer" : Ke.touch ? "touch" : "mouse";
  },
  preventScrollAxis(n, e, {
    preventScroll: t
  }) {
    if (this.preventScrollDelay = typeof t == "number" ? t : t || t === void 0 && n ? Nu : void 0, !(!Ke.touchscreen || t === !1))
      return n || (t !== void 0 ? "y" : void 0);
  },
  pointerCapture(n, e, {
    pointer: {
      capture: t = !0,
      buttons: r = 1,
      keys: i = !0
    } = {}
  }) {
    return this.pointerButtons = r, this.keys = i, !this.pointerLock && this.device === "pointer" && t;
  },
  threshold(n, e, {
    filterTaps: t = !1,
    tapsThreshold: r = 3,
    axis: i = void 0
  }) {
    const o = De.toVector(n, t ? r : i ? 1 : 0);
    return this.filterTaps = t, this.tapsThreshold = r, o;
  },
  swipe({
    velocity: n = Iu,
    distance: e = xu,
    duration: t = Pu
  } = {}) {
    return {
      velocity: this.transform(De.toVector(n)),
      distance: this.transform(De.toVector(e)),
      duration: t
    };
  },
  delay(n = 0) {
    switch (n) {
      case !0:
        return Du;
      case !1:
        return 0;
      default:
        return n;
    }
  },
  axisThreshold(n) {
    return n ? fe(fe({}, vo), n) : vo;
  },
  keyboardDisplacement(n = Bu) {
    return n;
  }
});
process.env.NODE_ENV === "development" && Object.assign(Oa, {
  useTouch(n) {
    if (n !== void 0)
      throw Error("[@use-gesture]: `useTouch` option has been renamed to `pointer.touch`. Use it as in `{ pointer: { touch: true } }`.");
    return NaN;
  },
  experimental_preventWindowScrollY(n) {
    if (n !== void 0)
      throw Error("[@use-gesture]: `experimental_preventWindowScrollY` option has been renamed to `preventScroll`.");
    return NaN;
  },
  swipeVelocity(n) {
    if (n !== void 0)
      throw Error("[@use-gesture]: `swipeVelocity` option has been renamed to `swipe.velocity`. Use it as in `{ swipe: { velocity: 0.5 } }`.");
    return NaN;
  },
  swipeDistance(n) {
    if (n !== void 0)
      throw Error("[@use-gesture]: `swipeDistance` option has been renamed to `swipe.distance`. Use it as in `{ swipe: { distance: 50 } }`.");
    return NaN;
  },
  swipeDuration(n) {
    if (n !== void 0)
      throw Error("[@use-gesture]: `swipeDuration` option has been renamed to `swipe.duration`. Use it as in `{ swipe: { duration: 250 } }`.");
    return NaN;
  }
});
fe(fe({}, ti), {}, {
  device(n, e, {
    shared: t,
    pointer: {
      touch: r = !1
    } = {}
  }) {
    if (t.target && !Ke.touch && Ke.gesture)
      return "gesture";
    if (Ke.touch && r)
      return "touch";
    if (Ke.touchscreen) {
      if (Ke.pointer)
        return "pointer";
      if (Ke.touch)
        return "touch";
    }
  },
  bounds(n, e, {
    scaleBounds: t = {},
    angleBounds: r = {}
  }) {
    const i = (l) => {
      const u = mo(Cn(t, l), {
        min: -1 / 0,
        max: 1 / 0
      });
      return [u.min, u.max];
    }, o = (l) => {
      const u = mo(Cn(r, l), {
        min: -1 / 0,
        max: 1 / 0
      });
      return [u.min, u.max];
    };
    return typeof t != "function" && typeof r != "function" ? [i(), o()] : (l) => [i(l), o(l)];
  },
  threshold(n, e, t) {
    return this.lockDirection = t.axis === "lock", De.toVector(n, this.lockDirection ? [0.1, 3] : 0);
  },
  modifierKey(n) {
    return n === void 0 ? "ctrlKey" : n;
  },
  pinchOnWheel(n = !0) {
    return n;
  }
});
fe(fe({}, pn), {}, {
  mouseOnly: (n = !0) => n
});
fe(fe({}, pn), {}, {
  mouseOnly: (n = !0) => n
});
const Sa = /* @__PURE__ */ new Map(), zr = /* @__PURE__ */ new Map();
function ku(n) {
  Sa.set(n.key, n.engine), zr.set(n.key, n.resolver);
}
const Mu = {
  key: "drag",
  engine: Ou,
  resolver: Oa
};
function Uu(n, e) {
  if (n == null)
    return {};
  var t = {}, r = Object.keys(n), i, o;
  for (o = 0; o < r.length; o++)
    i = r[o], !(e.indexOf(i) >= 0) && (t[i] = n[i]);
  return t;
}
function Fu(n, e) {
  if (n == null)
    return {};
  var t = Uu(n, e), r, i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(n);
    for (i = 0; i < o.length; i++)
      r = o[i], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(n, r) && (t[r] = n[r]);
  }
  return t;
}
const ju = {
  target(n) {
    if (n)
      return () => "current" in n ? n.current : n;
  },
  enabled(n = !0) {
    return n;
  },
  window(n = Ke.isBrowser ? window : void 0) {
    return n;
  },
  eventOptions({
    passive: n = !0,
    capture: e = !1
  } = {}) {
    return {
      passive: n,
      capture: e
    };
  },
  transform(n) {
    return n;
  }
}, zu = ["target", "eventOptions", "window", "enabled", "transform"];
function An(n = {}, e) {
  const t = {};
  for (const [r, i] of Object.entries(e))
    switch (typeof i) {
      case "function":
        if (process.env.NODE_ENV === "development") {
          const o = i.call(t, n[r], r, n);
          Number.isNaN(o) || (t[r] = o);
        } else
          t[r] = i.call(t, n[r], r, n);
        break;
      case "object":
        t[r] = An(n[r], i);
        break;
      case "boolean":
        i && (t[r] = n[r]);
        break;
    }
  return t;
}
function Yu(n, e, t = {}) {
  const r = n, {
    target: i,
    eventOptions: o,
    window: l,
    enabled: u,
    transform: g
  } = r, T = Fu(r, zu);
  if (t.shared = An({
    target: i,
    eventOptions: o,
    window: l,
    enabled: u,
    transform: g
  }, ju), e) {
    const f = zr.get(e);
    t[e] = An(fe({
      shared: t.shared
    }, T), f);
  } else
    for (const f in T) {
      const d = zr.get(f);
      if (d)
        t[f] = An(fe({
          shared: t.shared
        }, T[f]), d);
      else if (process.env.NODE_ENV === "development" && !["drag", "pinch", "scroll", "wheel", "move", "hover"].includes(f)) {
        if (f === "domTarget")
          throw Error("[@use-gesture]: `domTarget` option has been renamed to `target`.");
        console.warn(`[@use-gesture]: Unknown config key \`${f}\` was used. Please read the documentation for further information.`);
      }
    }
  return t;
}
class La {
  constructor(e, t) {
    Ye(this, "_listeners", /* @__PURE__ */ new Set()), this._ctrl = e, this._gestureKey = t;
  }
  add(e, t, r, i, o) {
    const l = this._listeners, u = hu(t, r), g = this._gestureKey ? this._ctrl.config[this._gestureKey].eventOptions : {}, T = fe(fe({}, g), o);
    e.addEventListener(u, i, T);
    const f = () => {
      e.removeEventListener(u, i, T), l.delete(f);
    };
    return l.add(f), f;
  }
  clean() {
    this._listeners.forEach((e) => e()), this._listeners.clear();
  }
}
class $u {
  constructor() {
    Ye(this, "_timeouts", /* @__PURE__ */ new Map());
  }
  add(e, t, r = 140, ...i) {
    this.remove(e), this._timeouts.set(e, window.setTimeout(t, r, ...i));
  }
  remove(e) {
    const t = this._timeouts.get(e);
    t && window.clearTimeout(t);
  }
  clean() {
    this._timeouts.forEach((e) => void window.clearTimeout(e)), this._timeouts.clear();
  }
}
class Hu {
  constructor(e) {
    Ye(this, "gestures", /* @__PURE__ */ new Set()), Ye(this, "_targetEventStore", new La(this)), Ye(this, "gestureEventStores", {}), Ye(this, "gestureTimeoutStores", {}), Ye(this, "handlers", {}), Ye(this, "config", {}), Ye(this, "pointerIds", /* @__PURE__ */ new Set()), Ye(this, "touchIds", /* @__PURE__ */ new Set()), Ye(this, "state", {
      shared: {
        shiftKey: !1,
        metaKey: !1,
        ctrlKey: !1,
        altKey: !1
      }
    }), Wu(this, e);
  }
  setEventIds(e) {
    if (Kn(e))
      return this.touchIds = new Set(_u(e)), this.touchIds;
    if ("pointerId" in e)
      return e.type === "pointerup" || e.type === "pointercancel" ? this.pointerIds.delete(e.pointerId) : e.type === "pointerdown" && this.pointerIds.add(e.pointerId), this.pointerIds;
  }
  applyHandlers(e, t) {
    this.handlers = e, this.nativeHandlers = t;
  }
  applyConfig(e, t) {
    this.config = Yu(e, t, this.config);
  }
  clean() {
    this._targetEventStore.clean();
    for (const e of this.gestures)
      this.gestureEventStores[e].clean(), this.gestureTimeoutStores[e].clean();
  }
  effect() {
    return this.config.shared.target && this.bind(), () => this._targetEventStore.clean();
  }
  bind(...e) {
    const t = this.config.shared, r = {};
    let i;
    if (!(t.target && (i = t.target(), !i))) {
      if (t.enabled) {
        for (const l of this.gestures) {
          const u = this.config[l], g = Eo(r, u.eventOptions, !!i);
          if (u.enabled) {
            const T = Sa.get(l);
            new T(this, e, l).bind(g);
          }
        }
        const o = Eo(r, t.eventOptions, !!i);
        for (const l in this.nativeHandlers)
          o(l, "", (u) => this.nativeHandlers[l](fe(fe({}, this.state.shared), {}, {
            event: u,
            args: e
          })), void 0, !0);
      }
      for (const o in r)
        r[o] = yu(...r[o]);
      if (!i)
        return r;
      for (const o in r) {
        const {
          device: l,
          capture: u,
          passive: g
        } = uu(o);
        this._targetEventStore.add(i, l, "", r[o], {
          capture: u,
          passive: g
        });
      }
    }
  }
}
function Ut(n, e) {
  n.gestures.add(e), n.gestureEventStores[e] = new La(n, e), n.gestureTimeoutStores[e] = new $u();
}
function Wu(n, e) {
  e.drag && Ut(n, "drag"), e.wheel && Ut(n, "wheel"), e.scroll && Ut(n, "scroll"), e.move && Ut(n, "move"), e.pinch && Ut(n, "pinch"), e.hover && Ut(n, "hover");
}
const Eo = (n, e, t) => (r, i, o, l = {}, u = !1) => {
  var g, T;
  const f = (g = l.capture) !== null && g !== void 0 ? g : e.capture, d = (T = l.passive) !== null && T !== void 0 ? T : e.passive;
  let h = u ? r : du(r, i, f);
  t && d && (h += "Passive"), n[h] = n[h] || [], n[h].push(o);
};
function Xu(n, e = {}, t, r) {
  const i = F.useMemo(() => new Hu(n), []);
  if (i.applyHandlers(n, r), i.applyConfig(e, t), F.useEffect(i.effect.bind(i)), F.useEffect(() => i.clean.bind(i), []), e.target === void 0)
    return i.bind.bind(i);
}
function Vu(n, e) {
  return ku(Mu), Xu({
    drag: n
  }, {}, "drag");
}
var Aa = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, wo = F.createContext && /* @__PURE__ */ F.createContext(Aa), Gu = ["attr", "size", "title"];
function Ju(n, e) {
  if (n == null)
    return {};
  var t = qu(n, e), r, i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(n);
    for (i = 0; i < o.length; i++)
      r = o[i], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(n, r) && (t[r] = n[r]);
  }
  return t;
}
function qu(n, e) {
  if (n == null)
    return {};
  var t = {}, r = Object.keys(n), i, o;
  for (o = 0; o < r.length; o++)
    i = r[o], !(e.indexOf(i) >= 0) && (t[i] = n[i]);
  return t;
}
function Rn() {
  return Rn = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, Rn.apply(this, arguments);
}
function Oo(n, e) {
  var t = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(n);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(n, i).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function Nn(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Oo(Object(t), !0).forEach(function(r) {
      Ku(n, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : Oo(Object(t)).forEach(function(r) {
      Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return n;
}
function Ku(n, e, t) {
  return e = Zu(e), e in n ? Object.defineProperty(n, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : n[e] = t, n;
}
function Zu(n) {
  var e = Qu(n, "string");
  return typeof e == "symbol" ? e : String(e);
}
function Qu(n, e) {
  if (typeof n != "object" || n === null)
    return n;
  var t = n[Symbol.toPrimitive];
  if (t !== void 0) {
    var r = t.call(n, e || "default");
    if (typeof r != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(n);
}
function Ca(n) {
  return n && n.map((e, t) => /* @__PURE__ */ F.createElement(e.tag, Nn({
    key: t
  }, e.attr), Ca(e.child)));
}
function Ra(n) {
  return (e) => /* @__PURE__ */ F.createElement(eh, Rn({
    attr: Nn({}, n.attr)
  }, e), Ca(n.child));
}
function eh(n) {
  var e = (t) => {
    var {
      attr: r,
      size: i,
      title: o
    } = n, l = Ju(n, Gu), u = i || t.size || "1em", g;
    return t.className && (g = t.className), n.className && (g = (g ? g + " " : "") + n.className), /* @__PURE__ */ F.createElement("svg", Rn({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, t.attr, r, l, {
      className: g,
      style: Nn(Nn({
        color: n.color || t.color
      }, t.style), n.style),
      height: u,
      width: u,
      xmlns: "http://www.w3.org/2000/svg"
    }), o && /* @__PURE__ */ F.createElement("title", null, o), n.children);
  };
  return wo !== void 0 ? /* @__PURE__ */ F.createElement(wo.Consumer, null, (t) => e(t)) : e(Aa);
}
function th(n) {
  return Ra({ tag: "svg", attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "m30.71 229.47 188.87-113a30.54 30.54 0 0 1 31.09-.39 33.74 33.74 0 0 1 16.76 29.47v79.05l180.72-108.16a30.54 30.54 0 0 1 31.09-.39A33.74 33.74 0 0 1 496 145.52v221A33.73 33.73 0 0 1 479.24 396a30.54 30.54 0 0 1-31.09-.39L267.43 287.4v79.08A33.73 33.73 0 0 1 250.67 396a30.54 30.54 0 0 1-31.09-.39l-188.87-113a31.27 31.27 0 0 1 0-53z" }, child: [] }] })(n);
}
function nh(n) {
  return Ra({ tag: "svg", attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "m481.29 229.47-188.87-113a30.54 30.54 0 0 0-31.09-.39 33.74 33.74 0 0 0-16.76 29.47v79.05L63.85 116.44a30.54 30.54 0 0 0-31.09-.39A33.74 33.74 0 0 0 16 145.52v221A33.74 33.74 0 0 0 32.76 396a30.54 30.54 0 0 0 31.09-.39L244.57 287.4v79.08A33.74 33.74 0 0 0 261.33 396a30.54 30.54 0 0 0 31.09-.39l188.87-113a31.27 31.27 0 0 0 0-53z" }, child: [] }] })(n);
}
const rh = (n) => {
  const { curTime: e, setCurTime: t, setMaxTime: r, setSetTime: i, setTime: o } = $r(Nt), [l, u] = ts("uninit"), g = Do(null);
  return jt(() => {
    t(o), g.current ? g.current.seekTo(o) : console.error("playerRef.current is null");
  }, [o]), jt(() => {
    setTimeout(() => {
      var T;
      console.log("seeking to curTime", e), (T = g.current) == null || T.seekTo(e);
    });
  }, [g]), /* @__PURE__ */ x.jsxs("div", { className: "player", children: [
    /* @__PURE__ */ x.jsx(
      nu,
      {
        id: "player",
        ref: g,
        url: "https://www.youtube.com/watch?v=P4OGGY14uKI",
        width: "100%",
        height: "100%",
        progressInterval: 100,
        controls: !0,
        onReady: () => {
          var T, f;
          l === "uninit" && ((T = g.current) == null || T.seekTo(e), r(((f = g.current) == null ? void 0 : f.getDuration()) || 0), u("init"));
        },
        onProgress: (T) => {
          var f, d, h;
          if (l === "init")
            r(((f = g.current) == null ? void 0 : f.getDuration()) || 0), u("ready");
          else {
            if ((h = (d = g.current) == null ? void 0 : d.getInternalPlayer()) != null && h.paused)
              return;
            t(T.playedSeconds);
          }
        }
      }
    ),
    /* @__PURE__ */ x.jsx("div", { className: "cur-time", children: /* @__PURE__ */ x.jsxs("div", { className: "time-adj", children: [
      /* @__PURE__ */ x.jsx("div", { onClick: () => i(e - 10), children: /* @__PURE__ */ x.jsx(th, {}) }),
      /* @__PURE__ */ x.jsx("div", { children: Dn(e) }),
      /* @__PURE__ */ x.jsx("div", { onClick: () => i(e + 10), children: /* @__PURE__ */ x.jsx(nh, {}) })
    ] }) })
  ] });
};
function ih(n) {
  const e = $r(Nt);
  return /* @__PURE__ */ x.jsx(
    "div",
    {
      className: `timeline-marker ${e.curAnnotation === n.note_id ? "highlight" : ""}`,
      style: {
        left: n.start / e.maxTime * 100 + "%"
      },
      onMouseOver: () => e.setCurAnnotation(n.note_id),
      onMouseLeave: () => e.setCurAnnotation("")
    }
  );
}
const oh = () => {
  const { curTime: n, setCurTime: e, maxTime: t, setPlayerState: r, setSetTime: i, annotations: o } = $r(Nt), l = Vu(({ xy: [u] }) => {
    const g = document.querySelector(".timeline-bar");
    if (g) {
      const T = g.getBoundingClientRect(), f = (u - T.left) / T.width * t;
      r("init"), i(f), e(f);
    }
  });
  return /* @__PURE__ */ x.jsx("div", { className: "timeline-container", children: /* @__PURE__ */ x.jsxs(
    "div",
    {
      className: "timeline-bar",
      children: [
        /* @__PURE__ */ x.jsx(
          "div",
          {
            ...l(),
            className: "timeline-marker timeline-progress",
            style: { left: n / t * 100 + "%" }
          }
        ),
        o.map((u, g) => /* @__PURE__ */ x.jsx(ih, { ...u }, g))
      ]
    }
  ) });
};
function Yr() {
  return Yr = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, Yr.apply(this, arguments);
}
function ah(n, e) {
  if (n == null)
    return {};
  var t = {}, r = Object.keys(n), i, o;
  for (o = 0; o < r.length; o++)
    i = r[o], !(e.indexOf(i) >= 0) && (t[i] = n[i]);
  return t;
}
var sh = ns, lh = function(e) {
  var t = vt.useRef(e);
  return sh(function() {
    t.current = e;
  }), t;
}, So = function(e, t) {
  if (typeof e == "function") {
    e(t);
    return;
  }
  e.current = t;
}, dh = function(e, t) {
  var r = Do();
  return rs(function(i) {
    e.current = i, r.current && So(r.current, null), r.current = t, t && So(t, i);
  }, [t]);
}, Lo = {
  "min-height": "0",
  "max-height": "none",
  height: "0",
  visibility: "hidden",
  overflow: "hidden",
  position: "absolute",
  "z-index": "-1000",
  top: "0",
  right: "0"
}, ch = function(e) {
  Object.keys(Lo).forEach(function(t) {
    e.style.setProperty(t, Lo[t], "important");
  });
}, Ao = ch, Me = null, Co = function(e, t) {
  var r = e.scrollHeight;
  return t.sizingStyle.boxSizing === "border-box" ? r + t.borderSize : r - t.paddingSize;
};
function uh(n, e, t, r) {
  t === void 0 && (t = 1), r === void 0 && (r = 1 / 0), Me || (Me = document.createElement("textarea"), Me.setAttribute("tabindex", "-1"), Me.setAttribute("aria-hidden", "true"), Ao(Me)), Me.parentNode === null && document.body.appendChild(Me);
  var i = n.paddingSize, o = n.borderSize, l = n.sizingStyle, u = l.boxSizing;
  Object.keys(l).forEach(function(h) {
    var a = h;
    Me.style[a] = l[a];
  }), Ao(Me), Me.value = e;
  var g = Co(Me, n);
  Me.value = e, g = Co(Me, n), Me.value = "x";
  var T = Me.scrollHeight - i, f = T * t;
  u === "border-box" && (f = f + i + o), g = Math.max(f, g);
  var d = T * r;
  return u === "border-box" && (d = d + i + o), g = Math.min(d, g), [g, T];
}
var Ro = function() {
}, hh = function(e, t) {
  return e.reduce(function(r, i) {
    return r[i] = t[i], r;
  }, {});
}, fh = [
  "borderBottomWidth",
  "borderLeftWidth",
  "borderRightWidth",
  "borderTopWidth",
  "boxSizing",
  "fontFamily",
  "fontSize",
  "fontStyle",
  "fontWeight",
  "letterSpacing",
  "lineHeight",
  "paddingBottom",
  "paddingLeft",
  "paddingRight",
  "paddingTop",
  // non-standard
  "tabSize",
  "textIndent",
  // non-standard
  "textRendering",
  "textTransform",
  "width",
  "wordBreak"
], gh = !!document.documentElement.currentStyle, _h = function(e) {
  var t = window.getComputedStyle(e);
  if (t === null)
    return null;
  var r = hh(fh, t), i = r.boxSizing;
  if (i === "")
    return null;
  gh && i === "border-box" && (r.width = parseFloat(r.width) + parseFloat(r.borderRightWidth) + parseFloat(r.borderLeftWidth) + parseFloat(r.paddingRight) + parseFloat(r.paddingLeft) + "px");
  var o = parseFloat(r.paddingBottom) + parseFloat(r.paddingTop), l = parseFloat(r.borderBottomWidth) + parseFloat(r.borderTopWidth);
  return {
    sizingStyle: r,
    paddingSize: o,
    borderSize: l
  };
}, ph = _h;
function Na(n, e, t) {
  var r = lh(t);
  vt.useLayoutEffect(function() {
    var i = function(l) {
      return r.current(l);
    };
    if (n)
      return n.addEventListener(e, i), function() {
        return n.removeEventListener(e, i);
      };
  }, []);
}
var mh = function(e) {
  Na(window, "resize", e);
}, yh = function(e) {
  Na(document.fonts, "loadingdone", e);
}, bh = ["cacheMeasurements", "maxRows", "minRows", "onChange", "onHeightChange"], Th = function(e, t) {
  var r = e.cacheMeasurements, i = e.maxRows, o = e.minRows, l = e.onChange, u = l === void 0 ? Ro : l, g = e.onHeightChange, T = g === void 0 ? Ro : g, f = ah(e, bh), d = f.value !== void 0, h = vt.useRef(null), a = dh(h, t), s = vt.useRef(0), c = vt.useRef(), y = function() {
    var v = h.current, m = r && c.current ? c.current : ph(v);
    if (m) {
      c.current = m;
      var _ = uh(m, v.value || v.placeholder || "x", o, i), E = _[0], C = _[1];
      s.current !== E && (s.current = E, v.style.setProperty("height", E + "px", "important"), T(E, {
        rowHeight: C
      }));
    }
  }, w = function(v) {
    d || y(), u(v);
  };
  return vt.useLayoutEffect(y), mh(y), yh(y), /* @__PURE__ */ vt.createElement("textarea", Yr({}, f, {
    onChange: w,
    ref: a
  }));
}, vh = /* @__PURE__ */ vt.forwardRef(Th);
function Eh(n) {
  const { curTime: e, addAnnotation: t } = F.useContext(Nt), r = F.useRef(null);
  return /* @__PURE__ */ x.jsxs("div", { className: "notes-col", children: [
    /* @__PURE__ */ x.jsx("div", { className: "notes-list", children: [...n.annotations, { note: "", start: e, note_id: "spawner", spawner: !0 }].sort((i, o) => i.start - o.start).map((i, o) => /* @__PURE__ */ x.jsx(wh, { ...i }, o)) }),
    /* @__PURE__ */ x.jsxs("form", { className: "event-select", onSubmit: (i) => i.preventDefault(), ref: r, children: [
      /* @__PURE__ */ x.jsxs("div", { className: "event-modifiers", children: [
        /* @__PURE__ */ x.jsxs("div", { children: [
          /* @__PURE__ */ x.jsx(
            "input",
            {
              type: "radio",
              id: "intro",
              name: "tool",
              value: "intro"
            }
          ),
          "Intro"
        ] }),
        /* @__PURE__ */ x.jsxs("div", { children: [
          /* @__PURE__ */ x.jsx(
            "input",
            {
              type: "radio",
              id: "deckflow",
              name: "tool",
              value: "deckflow"
            }
          ),
          "DeckFlow"
        ] }),
        /* @__PURE__ */ x.jsxs("div", { children: [
          /* @__PURE__ */ x.jsx(
            "input",
            {
              type: "radio",
              id: "chatflow",
              name: "tool",
              value: "chatflow"
            }
          ),
          "ChatFlow"
        ] })
      ] }),
      /* @__PURE__ */ x.jsxs("div", { className: "event-type", children: [
        /* @__PURE__ */ x.jsxs("div", { children: [
          /* @__PURE__ */ x.jsx(
            "input",
            {
              type: "radio",
              name: "event",
              value: "hard-task",
              id: "hard-task"
            }
          ),
          "Hard Task "
        ] }),
        /* @__PURE__ */ x.jsxs("div", { children: [
          /* @__PURE__ */ x.jsx(
            "input",
            {
              type: "radio",
              name: "event",
              value: "soft-task",
              id: "soft-task"
            }
          ),
          "Soft Task"
        ] }),
        /* @__PURE__ */ x.jsxs("div", { children: [
          /* @__PURE__ */ x.jsx(
            "input",
            {
              type: "radio",
              name: "event",
              value: "na",
              id: "na"
            }
          ),
          "N/A"
        ] })
      ] }),
      /* @__PURE__ */ x.jsxs("div", { className: "event-type", children: [
        /* @__PURE__ */ x.jsxs("div", { children: [
          /* @__PURE__ */ x.jsx(
            "input",
            {
              type: "radio",
              id: "duringtask",
              name: "notetype",
              value: "duringtask"
            }
          ),
          "During Task"
        ] }),
        /* @__PURE__ */ x.jsxs("div", { children: [
          /* @__PURE__ */ x.jsx(
            "input",
            {
              type: "radio",
              id: "interview",
              name: "notetype",
              value: "interview"
            }
          ),
          "Interview"
        ] })
      ] }),
      /* @__PURE__ */ x.jsxs("div", { className: "event-modifiers", children: [
        /* @__PURE__ */ x.jsxs("div", { children: [
          /* @__PURE__ */ x.jsx(
            "input",
            {
              type: "radio",
              name: "condition",
              value: "a",
              id: "a"
            }
          ),
          "A"
        ] }),
        /* @__PURE__ */ x.jsxs("div", { children: [
          /* @__PURE__ */ x.jsx(
            "input",
            {
              type: "radio",
              name: "condition",
              value: "b",
              id: "b"
            }
          ),
          "B"
        ] }),
        /* @__PURE__ */ x.jsxs("div", { children: [
          /* @__PURE__ */ x.jsx(
            "input",
            {
              type: "radio",
              name: "condition",
              value: "na",
              id: "na"
            }
          ),
          "N/A"
        ] })
      ] }),
      /* @__PURE__ */ x.jsxs("div", { className: "event-boundary", children: [
        /* @__PURE__ */ x.jsx(
          "button",
          {
            onClick: () => {
              var i, o, l, u;
              t({ note: JSON.stringify({
                event: (i = r.current) == null ? void 0 : i.event.value,
                type: (o = r.current) == null ? void 0 : o.notetype.value,
                tool: (l = r.current) == null ? void 0 : l.tool.value,
                condition: (u = r.current) == null ? void 0 : u.condition.value,
                boundary: "start"
              }), start: e, focus: !0 });
            },
            children: "Start"
          }
        ),
        /* @__PURE__ */ x.jsx(
          "button",
          {
            onClick: () => {
              var i, o, l, u;
              t({ note: JSON.stringify({
                event: (i = r.current) == null ? void 0 : i.event.value,
                type: (o = r.current) == null ? void 0 : o.notetype.value,
                tool: (l = r.current) == null ? void 0 : l.tool.value,
                condition: (u = r.current) == null ? void 0 : u.condition.value,
                boundary: "end"
              }), start: e, focus: !0 });
            },
            children: "End"
          }
        )
      ] }),
      /* @__PURE__ */ x.jsxs("div", { className: "event-boundary", children: [
        /* @__PURE__ */ x.jsx(
          "input",
          {
            type: "number",
            id: "nimages",
            name: "nimages",
            placeholder: "Images"
          }
        ),
        /* @__PURE__ */ x.jsx(
          "button",
          {
            onClick: () => {
              var i;
              t({ note: JSON.stringify({
                event: "generated_images",
                num_images: ((i = r.current) == null ? void 0 : i.nimages.value) || 0
              }), start: e, focus: !0 });
            },
            children: "Generated Images"
          }
        ),
        /* @__PURE__ */ x.jsx("div", { className: "divider" }),
        /* @__PURE__ */ x.jsx(
          "button",
          {
            onClick: () => {
              t({ note: JSON.stringify({
                event: "goal_card"
              }), start: e, focus: !0 });
            },
            children: "Used Goal Card"
          }
        ),
        /* @__PURE__ */ x.jsx("div", { className: "divider" }),
        /* @__PURE__ */ x.jsx(
          "button",
          {
            onClick: () => {
              t({ note: JSON.stringify({
                event: "cluster"
              }), start: e, focus: !0 });
            },
            children: "Used Cluster"
          }
        )
      ] })
    ] })
  ] });
}
function wh(n) {
  const e = F.useContext(Nt), t = F.useRef(null);
  return F.useEffect(() => {
    n.focus && (console.log("focusing"), t.current && (t.current.focus(), t.current.setSelectionRange(n.note.length, n.note.length), e.editAnnotation({ note_id: n.note_id, note: n.note, focus: !1 })));
  }), /* @__PURE__ */ x.jsxs(
    "div",
    {
      className: `note-container ${e.curAnnotation === n.note_id ? "highlight" : ""} ${n.spawner ? " spawner" : ""}`,
      onMouseOver: () => e.setCurAnnotation(n.note_id),
      onMouseLeave: () => e.setCurAnnotation(""),
      onBlur: () => {
        n.note === "" && e.deleteAnnotation(n.note_id);
      },
      ...n.spawner && {
        id: "note-spawner"
      },
      children: [
        /* @__PURE__ */ x.jsxs(
          "div",
          {
            className: "note-time",
            onClick: () => {
              e.setSetTime(n.start), console.log("set time", n.start);
            },
            children: [
              Dn(n.start),
              n.end && /* @__PURE__ */ x.jsxs("span", { children: [
                " - ",
                Dn(n.end)
              ] })
            ]
          }
        ),
        /* @__PURE__ */ x.jsx(
          vh,
          {
            className: "note-content",
            value: n.note,
            ref: t,
            onChange: n.spawner ? (r) => {
              e.addAnnotation({ note: r.target.value, start: n.start, focus: !0 });
            } : (r) => {
              e.editAnnotation({ note_id: n.note_id, note: r.target.value });
            }
          }
        )
      ]
    }
  );
}
const No = `WEBVTT\r
\r
1\r
00:00:00.900 --> 00:00:01.820\r
Chen Liang: Okay?\r
\r
2\r
00:00:03.000 --> 00:00:05.510\r
Chen Liang: Alright so\r
\r
3\r
00:00:06.370 --> 00:00:07.970\r
Chen Liang: that's such.\r
\r
4\r
00:00:09.160 --> 00:00:11.179\r
Chen Liang: Let me let me delete all this\r
\r
5\r
00:00:11.600 --> 00:00:12.460\r
screen.\r
\r
6\r
00:00:18.370 --> 00:00:24.350\r
Chen Liang: Hello! My name is Gregory Crosale, and I'm a Phd. Student at the University of Michigan.\r
\r
7\r
00:00:24.380 --> 00:00:47.419\r
Chen Liang: Thank you so much for taking the time to join us today. But the goal of this is to evaluate 2 different interfaces. Okay, so first, we're gonna walk through a couple of demos and tutorials of these interfaces. And I'm gonna give you a few tasks that I'm going to ask you to perform.\r
\r
8\r
00:00:47.530 --> 00:00:49.840\r
Chen Liang: Okay? So\r
\r
9\r
00:00:51.210 --> 00:00:58.130\r
Chen Liang: first. I'm going to send you a link actually, first, I'll do this myself.\r
\r
10\r
00:01:06.730 --> 00:01:09.680\r
Chen Liang: Are you familiar with Tap? Qbt. Yes.\r
\r
11\r
00:01:23.160 --> 00:01:34.179\r
Chen Liang: So this is an interface. A lot designed to be a lot like Chachpe. Actually, let me send this link to you so it will be recorded. But I don't do this on your computer.\r
\r
12\r
00:01:36.520 --> 00:01:37.340\r
Chen Liang: Okay?\r
\r
13\r
00:01:38.900 --> 00:01:43.010\r
Chen Liang: Oh, you are. By the way, this is on room.\r
\r
14\r
00:01:43.520 --> 00:01:45.340\r
Chen Liang: This one's it's it's okay.\r
\r
15\r
00:01:45.780 --> 00:01:50.319\r
Chen Liang: So this is an interface, a lot like chat. Vpt, okay, except.\r
\r
16\r
00:01:50.650 --> 00:01:56.799\r
Chen Liang: it's using some slightly different features. So I'm just gonna show you very, basically a couple of things.\r
\r
17\r
00:01:57.670 --> 00:02:01.050\r
So, for example, you might ask.\r
\r
18\r
00:02:01.120 --> 00:02:03.300\r
Chen Liang: what is the University\r
\r
19\r
00:02:04.240 --> 00:02:06.440\r
Chen Liang: of Michigan?\r
\r
20\r
00:02:06.490 --> 00:02:08.130\r
Chen Liang: And then, if I press, enter.\r
\r
21\r
00:02:09.350 --> 00:02:12.950\r
we'll see. The response will slowly be generated. Umhm.\r
\r
22\r
00:02:12.970 --> 00:02:19.540\r
Chen Liang: just like some more advanced versions of Chat Gp. you can also include images.\r
\r
23\r
00:02:21.050 --> 00:02:28.110\r
Chen Liang: So I can say, describe this image and how it relates to the previous question.\r
\r
24\r
00:02:31.880 --> 00:02:37.000\r
Chen Liang: Let's wait until it's done talking. Actually, no, I don't. We don't need to. We can go ahead, and\r
\r
25\r
00:02:41.970 --> 00:02:49.999\r
Chen Liang: and then we'll see the answer also, like some more advanced versions of Chat Gpt. This can generate images, for you\r
\r
26\r
00:02:51.270 --> 00:02:53.530\r
Chen Liang: create a picture\r
\r
27\r
00:02:53.780 --> 00:02:56.570\r
Chen Liang: of this figure\r
\r
28\r
00:02:57.040 --> 00:03:00.180\r
Chen Liang: at the location was talking\r
\r
29\r
00:03:00.250 --> 00:03:01.539\r
Chen Liang: before it.\r
\r
30\r
00:03:07.640 --> 00:03:09.500\r
Chen Liang: and this will just take some time.\r
\r
31\r
00:03:10.140 --> 00:03:13.609\r
Chen Liang: and then we'll see it's gonna make some pictures for us.\r
\r
32\r
00:03:14.420 --> 00:03:19.209\r
Chen Liang: Okay, so any questions right off the bat about this interface. Nope.\r
\r
33\r
00:03:21.760 --> 00:03:26.620\r
Chen Liang: can you go ahead and just ask it to make any picture you want?\r
\r
34\r
00:03:43.280 --> 00:03:44.060\r
Chen Liang: Okay.\r
\r
35\r
00:03:50.960 --> 00:03:52.499\r
Chen Liang: those are crowded rooms.\r
\r
36\r
00:03:53.500 --> 00:03:55.539\r
Chen Liang: Okay? And then can you refresh for me.\r
\r
37\r
00:03:57.290 --> 00:04:02.500\r
Chen Liang: And now, can you upload a picture for me in this interface? And we use the deck?\r
\r
38\r
00:04:05.140 --> 00:04:08.080\r
Chen Liang: Yeah. And now just say something relating to that.\r
\r
39\r
00:04:09.360 --> 00:04:10.779\r
Chen Liang: And I think, yeah.\r
\r
40\r
00:04:22.740 --> 00:04:24.119\r
Chen Liang: yeah, that's fine\r
\r
41\r
00:04:32.830 --> 00:04:36.070\r
Chen Liang: oops, something better. Let me see.\r
\r
42\r
00:04:36.800 --> 00:04:39.260\r
Chen Liang: Oh, I'm sorry. But I cannot edit.\r
\r
43\r
00:04:39.640 --> 00:04:43.779\r
Chen Liang: Okay, that's fine.\r
\r
44\r
00:04:43.820 --> 00:04:57.009\r
Chen Liang: any questions about this so far also. One thing so. And this is a feature we're thinking about deleting. You can edit both responses. So if it doesn't respond in the way that you want, you can actually go back and say\r
\r
45\r
00:04:59.410 --> 00:05:02.299\r
Chen Liang: Yes a little bit.\r
\r
46\r
00:05:03.400 --> 00:05:08.110\r
Chen Liang: I'll generate an image in the same style.\r
\r
47\r
00:05:08.420 --> 00:05:12.340\r
Chen Liang: But with Jerry as the main character.\r
\r
48\r
00:05:14.950 --> 00:05:16.829\r
Chen Liang: And then, now here, I can say.\r
\r
49\r
00:05:17.390 --> 00:05:20.629\r
Chen Liang: okay, okay.\r
\r
50\r
00:05:23.330 --> 00:05:28.219\r
Chen Liang: this is taking so long. So you see, you can kind of manipulate it a little bit\r
\r
51\r
00:05:30.400 --> 00:05:32.450\r
Chen Liang: works. Yeah.\r
\r
52\r
00:05:33.160 --> 00:05:38.320\r
Chen Liang: okay, so any other questions about this interview so far. Okay.\r
\r
53\r
00:05:38.330 --> 00:05:41.400\r
Chen Liang: so now, I'm gonna show you deck flow.\r
\r
54\r
00:05:51.660 --> 00:05:56.550\r
Chen Liang: You open the link that I sent you in zoom and go ahead and close this interface for me as well.\r
\r
55\r
00:06:00.330 --> 00:06:02.560\r
Chen Liang: And then this needs to be in power phones. Okay?\r
\r
56\r
00:06:06.090 --> 00:06:07.070\r
Chen Liang: And\r
\r
57\r
00:06:13.380 --> 00:06:14.399\r
Chen Liang: is that risk.\r
\r
58\r
00:06:15.290 --> 00:06:19.920\r
Chen Liang: That's so funny. Yes, you you can't accept risk.\r
\r
59\r
00:06:20.140 --> 00:06:27.970\r
Chen Liang: I think I need to add certificate authority. Yes.\r
\r
60\r
00:06:28.260 --> 00:06:29.819\r
Chen Liang: Slide, we\r
\r
61\r
00:06:30.850 --> 00:06:32.170\r
Chen Liang: no, you're good.\r
\r
62\r
00:06:35.770 --> 00:06:44.109\r
Chen Liang: Yeah. You can just click, accept the risk. Oh, actually, maybe the web socket won't work because of this. That's the first time I've seen this\r
\r
63\r
00:07:12.110 --> 00:07:13.330\r
refresh\r
\r
64\r
00:07:13.370 --> 00:07:16.760\r
Chen Liang: refresh. Okay. take it.\r
\r
65\r
00:07:18.170 --> 00:07:19.590\r
Chen Liang: Okay, okay.\r
\r
66\r
00:07:20.110 --> 00:07:31.749\r
Chen Liang: so this is that flow. This is an alternative way to create anything you want, pretty much so to start out the way that you create new things is with this goal card.\r
\r
67\r
00:07:31.760 --> 00:07:37.209\r
Chen Liang: And very basically, all you have to do is type what you went in here. So if I wanted to.\r
\r
68\r
00:07:37.750 --> 00:07:45.320\r
Chen Liang:  I can even ask a question here, like, Who is Tom from on end? Jerry?\r
\r
69\r
00:07:47.470 --> 00:07:55.410\r
Chen Liang: Okay. I'll get some responses here. and just like the previous interface. you can ask it to make images as well.\r
\r
70\r
00:08:09.730 --> 00:08:11.539\r
Chen Liang: and we'll see these images will come out.\r
\r
71\r
00:08:11.900 --> 00:08:14.580\r
Chen Liang: But, unlike the previous interface\r
\r
72\r
00:08:17.190 --> 00:08:26.760\r
Chen Liang: this allows you to manipulate the feedback that you give it so rather than exactly what you would have written before you can kind of choose dynamically.\r
\r
73\r
00:08:26.980 --> 00:08:29.170\r
So, for example.\r
\r
74\r
00:08:29.600 --> 00:08:31.839\r
Chen Liang: let's say, I wanted to\r
\r
75\r
00:08:33.789 --> 00:08:36.360\r
Chen Liang: create a dynamic.\r
\r
76\r
00:08:36.610 --> 00:08:43.670\r
Chen Liang: I'll just say, create an image here. And then here, I'll put this style. I want this to be\r
\r
77\r
00:08:45.010 --> 00:08:47.720\r
Chen Liang: dramatic photographs\r
\r
78\r
00:08:48.690 --> 00:08:51.760\r
Chen Liang: here. I want the subject to be.\r
\r
79\r
00:08:51.960 --> 00:08:57.090\r
Chen Liang: and I can even go down here and pick the one I like the most. So I actually really like this one.\r
\r
80\r
00:08:58.290 --> 00:09:00.009\r
Chen Liang: and can drag this in here.\r
\r
81\r
00:09:00.390 --> 00:09:07.589\r
Chen Liang: and then for colors. Let's say I wanted to use like a lot of like neon colors.\r
\r
82\r
00:09:07.730 --> 00:09:10.450\r
Chen Liang: What I could do is say like.\r
\r
83\r
00:09:12.820 --> 00:09:14.730\r
Chen Liang: describe\r
\r
84\r
00:09:15.930 --> 00:09:18.040\r
Chen Liang: some neon colors.\r
\r
85\r
00:09:20.330 --> 00:09:21.880\r
Chen Liang: get some ideas here.\r
\r
86\r
00:09:32.080 --> 00:09:37.379\r
Chen Liang: and then I could look at the ones that I like, and actually drag them over here.\r
\r
87\r
00:09:39.160 --> 00:09:44.490\r
Chen Liang: and then I can press C to put this in a cluster, which means these kind of belong in the same idea.\r
\r
88\r
00:09:45.120 --> 00:09:47.180\r
Chen Liang: And I can just drag this here.\r
\r
89\r
00:09:50.680 --> 00:09:52.559\r
Chen Liang: And now let's see what happens.\r
\r
90\r
00:10:00.510 --> 00:10:01.320\r
Chen Liang: Increase.\r
\r
91\r
00:10:04.000 --> 00:10:04.670\r
Chen Liang: Wow!\r
\r
92\r
00:10:07.530 --> 00:10:10.120\r
Chen Liang: Any questions for me so far. No.\r
\r
93\r
00:10:10.340 --> 00:10:11.130\r
Chen Liang: okay.\r
\r
94\r
00:10:11.340 --> 00:10:27.970\r
Chen Liang: Now, I would like for you. And also there's a anything you're familiar with, like from illustrator or Google slides. There's a lot of those interactions. So you can from most things undo and redo, you can press alt and drag to copy\r
\r
95\r
00:10:28.220 --> 00:10:30.650\r
Chen Liang: back spaces to delete.\r
\r
96\r
00:10:31.250 --> 00:10:43.760\r
Chen Liang: Yeah. And then for this, if you want to remove a connection, all you have to do is drag it a little bit and then let go, and then to delete one of these. You just have to make it empty.\r
\r
97\r
00:10:44.310 --> 00:10:57.570\r
Chen Liang: and then all that you can also undo you. Okay. So now, I want you to go ahead and just create some text using the goal card. Any any thanks, any\r
\r
98\r
00:11:28.630 --> 00:11:34.730\r
Chen Liang: any questions about that? Now, I'm going to ask you to create an image using a goalcard.\r
\r
99\r
00:11:37.030 --> 00:11:37.760\r
Chen Liang: Thanks.\r
\r
100\r
00:11:39.460 --> 00:12:08.970\r
Chen Liang: We already does one. Yeah, that's pretty funny. It's decided to give you some motivational images. Oh, and another thing I forgot to tell you. If you're if you kind of forget where something came from, you can click here and we'll show you. If you highlight here, we'll show you what directly influenced it. And then here's some information from the back end, so you can see what prompts you. So a person standing on a mountain books reaching for the stars. And then here, you see, it's kind of a different problem. So if you're curious about what I used here\r
\r
101\r
00:12:09.400 --> 00:12:13.690\r
Chen Liang: can use those same things. And again, click, and we'll just send you over there.\r
\r
102\r
00:12:15.110 --> 00:12:20.320\r
Chen Liang: Yeah. But go ahead and like, ask it to make it. This I just decided to make it, which is for you\r
\r
103\r
00:13:11.780 --> 00:13:15.350\r
Chen Liang:  and then from here, select a few that you like.\r
\r
104\r
00:13:15.880 --> 00:13:25.710\r
Chen Liang: and maybe some that you don't like, I would say, a total of 4 images. The more images you have, the longer it will take and put them in a cluster. So make 2 groups of 2 images.\r
\r
105\r
00:13:25.750 --> 00:13:30.670\r
Chen Liang: one like one dislike. It could be anything you want. Hmm.\r
\r
106\r
00:13:49.090 --> 00:14:00.979\r
Chen Liang: okay. and now you can use those has context for one more generation of that.\r
\r
107\r
00:14:02.050 --> 00:14:03.770\r
Chen Liang: So let's say\r
\r
108\r
00:14:04.560 --> 00:14:08.989\r
Chen Liang: you want you just use that as like a vocabulary. Umhm.\r
\r
109\r
00:14:12.680 --> 00:14:15.510\r
Chen Liang: or actually, I can copy this. Yeah.\r
\r
110\r
00:14:18.800 --> 00:14:21.260\r
Chen Liang: where's alder option? Well.\r
\r
111\r
00:14:38.180 --> 00:14:42.160\r
Chen Liang: most stuff or not like this is probably\r
\r
112\r
00:14:49.050 --> 00:14:55.660\r
Chen Liang: okay. So this one will probably take a while because of how many images we have.\r
\r
113\r
00:14:58.230 --> 00:15:03.770\r
Chen Liang: So actually. And can you take 2 out of each cluster? Just so it doesn't take a long time. Okay.\r
\r
114\r
00:15:13.280 --> 00:15:16.439\r
Chen Liang: and then drag it like down here, so it doesn't\r
\r
115\r
00:15:16.620 --> 00:15:18.690\r
Chen Liang: cover perfect.\r
\r
116\r
00:15:21.010 --> 00:15:22.900\r
Chen Liang: And then, yeah, go ahead.\r
\r
117\r
00:15:42.470 --> 00:15:49.629\r
Chen Liang: Do you feel motivated? Yes, I don't even understand what they're saying. But yes, what do you mean you don't understand\r
\r
118\r
00:15:49.910 --> 00:15:54.250\r
the the regret.\r
\r
119\r
00:15:55.410 --> 00:15:56.480\r
Chen Liang: Okay, cool\r
\r
120\r
00:15:58.230 --> 00:16:02.030\r
Chen Liang: now any questions before we continue.\r
\r
121\r
00:16:02.270 --> 00:16:05.980\r
Chen Liang: And can you just look at the history of one of those cards for me.\r
\r
122\r
00:16:08.440 --> 00:16:09.980\r
Chen Liang: Let's go with this one.\r
\r
123\r
00:16:12.850 --> 00:16:16.660\r
Chen Liang: Show me that influence that it perfect.\r
\r
124\r
00:16:19.350 --> 00:16:20.300\r
Chen Liang: Excellent!\r
\r
125\r
00:16:20.400 --> 00:16:22.870\r
Chen Liang: No other questions, Umhm.\r
\r
126\r
00:16:23.250 --> 00:16:24.900\r
Chen Liang: So now\r
\r
127\r
00:16:26.850 --> 00:16:29.860\r
Chen Liang: I'm gonna give you an image.\r
\r
128\r
00:16:44.240 --> 00:16:51.690\r
Chen Liang: and I would like, Oh, one more thing. You can also drag external images here. So go and try to do that with the Tom picture.\r
\r
129\r
00:16:53.790 --> 00:16:54.530\r
Chen Liang: There you go.\r
\r
130\r
00:16:55.930 --> 00:17:10.629\r
Chen Liang: Okay. Another thing. Can you press, command a, and just get rid of everything we've done so far perfect. Okay. I would like for you to recreate this image as closely as possible without actually using the image.\r
\r
131\r
00:18:34.880 --> 00:18:43.490\r
Chen Liang: Can you describe to me what we've just done? I just describe the image as text in the go card.\r
\r
132\r
00:18:45.520 --> 00:18:47.280\r
Chen Liang: Basically, it's just like.\r
\r
133\r
00:18:48.930 --> 00:18:53.380\r
Chen Liang: right here, I'll text for your image and see what the\r
\r
134\r
00:18:53.900 --> 00:18:56.310\r
Chen Liang: system does. Okay.\r
\r
135\r
00:18:56.680 --> 00:19:00.620\r
Chen Liang: what do you think about this initial output. I think it's pretty good.\r
\r
136\r
00:19:01.180 --> 00:19:03.780\r
Chen Liang: But there are definitely\r
\r
137\r
00:19:03.830 --> 00:19:10.129\r
Chen Liang: space to improve. Because I I noted the style is a little bit different. So maybe.\r
\r
138\r
00:19:10.900 --> 00:19:11.620\r
Chen Liang: Yeah.\r
\r
139\r
00:19:18.330 --> 00:19:21.880\r
Chen Liang: go ahead and keep trying to make as possible. Yeah.\r
\r
140\r
00:19:22.780 --> 00:20:11.050\r
Chen Liang:  make sure you click on private. So yeah.\r
\r
141\r
00:21:01.700 --> 00:21:03.419\r
Chen Liang: you describe what you just click there.\r
\r
142\r
00:21:03.700 --> 00:21:14.830\r
Chen Liang: I'm trying to generate some style I want to face some input image so that they know what style I'm looking for. So I started by\r
\r
143\r
00:21:14.870 --> 00:21:18.290\r
Chen Liang: asking, kind of generism, painting of houses?\r
\r
144\r
00:21:19.200 --> 00:21:25.410\r
Chen Liang:  yeah.\r
\r
145\r
00:23:44.310 --> 00:23:47.059\r
Chen Liang: And this one is probably the closest.\r
\r
146\r
00:23:48.800 --> 00:23:51.179\r
Chen Liang: Yeah, actually, this. Well, yeah, there's one.\r
\r
147\r
00:23:51.610 --> 00:23:55.970\r
Chen Liang: Can you describe to me what you did over here. I'm just combining\r
\r
148\r
00:23:57.440 --> 00:24:04.719\r
Chen Liang: So I'm trying to capture the style of the picture you front of me. And I started by asking\r
\r
149\r
00:24:05.370 --> 00:24:08.360\r
Chen Liang: the interest to generate some painting.\r
\r
150\r
00:24:08.540 --> 00:24:15.930\r
Chen Liang: and then I select some. some of them, and make it more bright and as higher saturation as\r
\r
151\r
00:24:16.570 --> 00:24:24.179\r
Chen Liang: the similar to the image you you have. And then pick one of those\r
\r
152\r
00:24:24.990 --> 00:24:31.349\r
Chen Liang: as a reference to the style, and fit this into the go card\r
\r
153\r
00:24:31.650 --> 00:24:35.549\r
Chen Liang: the Co. Go card listed. I mean, there's\r
\r
154\r
00:24:37.020 --> 00:24:46.369\r
Chen Liang: expected images and images not expected image on another category of style and company, and it would generate this.\r
\r
155\r
00:24:46.860 --> 00:24:57.749\r
Chen Liang: So one thing I'm noticing is that even though you said not super similar to it, looks like it copied where it has 2 images. So maybe let's go like zoom into one of those.\r
\r
156\r
00:24:57.830 --> 00:25:01.510\r
Chen Liang: and let's click that. Yeah, let's click. I here.\r
\r
157\r
00:25:04.570 --> 00:25:06.049\r
Chen Liang: and can you\r
\r
158\r
00:25:06.490 --> 00:25:08.750\r
scroll? You have to click the scroll bar on this\r
\r
159\r
00:25:09.050 --> 00:25:10.190\r
Chen Liang: scroll down.\r
\r
160\r
00:25:12.480 --> 00:25:18.030\r
Chen Liang: So this one, it says. 2 houses. Okay? So it.\r
\r
161\r
00:25:19.220 --> 00:25:25.829\r
Chen Liang: It thinks that the image generator has access to the reference images is what's happening.\r
\r
162\r
00:25:32.500 --> 00:25:40.140\r
Chen Liang: So. But the way we're I want to do this in here to say. But the way works back at is that chattypt. Let me show you\r
\r
163\r
00:25:40.610 --> 00:25:43.480\r
Chen Liang: they have chat. Gpt, right?\r
\r
164\r
00:25:51.560 --> 00:25:53.430\r
Chen Liang: This is the system for change.\r
\r
165\r
00:26:00.530 --> 00:26:03.649\r
Chen Liang: Okay. so I say that.\r
\r
166\r
00:26:04.850 --> 00:26:08.609\r
Chen Liang:  you can create images by\r
\r
167\r
00:26:08.850 --> 00:26:11.010\r
Chen Liang: giving the user this image tag.\r
\r
168\r
00:26:12.530 --> 00:26:30.659\r
Chen Liang: it thinks that. And then what what happens is I parse the response, and if the response includes this image tag, then I send it to the image generator. I don't use the function protocol, because that makes it wait for the result, and I don't want it to wait. So it said, similar to the 2 reference images.\r
\r
169\r
00:26:30.830 --> 00:26:41.260\r
Chen Liang: because it knows it has access to the 2 reference images. But stable diffusion doesn't have access to those reference images. So I think that's kind of where where things went wrong here.\r
\r
170\r
00:26:41.400 --> 00:26:42.800\r
Chen Liang: So\r
\r
171\r
00:26:44.610 --> 00:26:47.729\r
Chen Liang: maybe if we do something like.\r
\r
172\r
00:27:20.120 --> 00:27:22.560\r
Chen Liang: and this is the style you wanted here.\r
\r
173\r
00:27:25.230 --> 00:27:26.040\r
Chen Liang: this out\r
\r
174\r
00:27:39.600 --> 00:27:41.470\r
Chen Liang: already. These are\r
\r
175\r
00:27:42.030 --> 00:27:45.620\r
Chen Liang: pretty good. But yeah, you got some good images right off the bat.\r
\r
176\r
00:27:47.770 --> 00:27:48.510\r
Chen Liang: Nope.\r
\r
177\r
00:27:51.440 --> 00:27:52.220\r
Chen Liang: okay.\r
\r
178\r
00:27:53.910 --> 00:27:55.799\r
Chen Liang: any thoughts before before it\r
\r
179\r
00:27:56.000 --> 00:27:59.500\r
Chen Liang: which one you like the best you like this one the best, right? Yeah.\r
\r
180\r
00:28:02.180 --> 00:28:04.170\r
Or was that this one\r
\r
181\r
00:28:10.020 --> 00:28:13.080\r
Chen Liang: really got the like angles down.\r
\r
182\r
00:28:13.500 --> 00:28:14.310\r
Chen Liang: you know.\r
\r
183\r
00:28:15.730 --> 00:28:17.840\r
Chen Liang: I wonder if this is a similar style\r
\r
184\r
00:28:17.900 --> 00:28:23.389\r
Chen Liang: like, if this is a famous style. Okay? So let's move on to another task.\r
\r
185\r
00:28:23.930 --> 00:28:27.299\r
Chen Liang: Can you go back to the Chat Gpus for you?\r
\r
186\r
00:28:27.460 --> 00:28:31.139\r
Chen Liang: I'm gonna make a couple adjustments here in the back end\r
\r
187\r
00:28:46.290 --> 00:28:49.399\r
Chen Liang: that and can you refresh from you real quick?\r
\r
188\r
00:28:52.730 --> 00:28:56.960\r
Chen Liang: Now, I would like you to do a similar task\r
\r
189\r
00:28:58.230 --> 00:28:59.460\r
Chen Liang: with this image.\r
\r
190\r
00:31:40.370 --> 00:31:41.669\r
Chen Liang: It's just gonna make one.\r
\r
191\r
00:31:41.710 --> 00:31:44.539\r
Chen Liang: Oh, and this is the end\r
\r
192\r
00:31:45.580 --> 00:31:48.469\r
Chen Liang: I asked it to.\r
\r
193\r
00:31:48.690 --> 00:31:51.800\r
Chen Liang: It's not great. At public instructions\r
\r
194\r
00:33:14.050 --> 00:33:17.699\r
Chen Liang: members takes. Oh, you're on edge, too.\r
\r
195\r
00:33:24.870 --> 00:33:25.680\r
Chen Liang: Okay.\r
\r
196\r
00:33:26.560 --> 00:33:29.420\r
Chen Liang: big Buck, you can't it?\r
\r
197\r
00:33:30.380 --> 00:33:38.440\r
Chen Liang: Did we try using an image before? Oh, I know. The problem is, if you don't upload the image.\r
\r
198\r
00:33:38.850 --> 00:33:42.839\r
Chen Liang: Then, okay, so for right now.\r
\r
199\r
00:33:44.000 --> 00:33:46.300\r
Chen Liang: do we hit and save the image.\r
\r
200\r
00:33:48.210 --> 00:33:49.130\r
Chen Liang: Umhm.\r
\r
201\r
00:33:54.280 --> 00:33:54.980\r
Chen Liang: Then\r
\r
202\r
00:34:22.920 --> 00:34:24.029\r
Chen Liang: the right ones\r
\r
203\r
00:34:37.550 --> 00:34:38.750\r
Chen Liang: was the right one.\r
\r
204\r
00:34:40.170 --> 00:34:44.760\r
Chen Liang: Hmm! There wasn't okay, anyway.\r
\r
205\r
00:34:44.780 --> 00:34:51.130\r
Chen Liang: I think you get the idea. Sorry that the this part of the demo broke questions about any of this.\r
\r
206\r
00:34:52.800 --> 00:34:57.209\r
Chen Liang: Okay, cool do you want to try another type of task.\r
\r
207\r
00:34:57.470 --> 00:34:58.750\r
Chen Liang: Why not? Okay?\r
\r
208\r
00:34:59.780 --> 00:35:01.250\r
Chen Liang: So now.\r
\r
209\r
00:35:06.700 --> 00:35:09.580\r
Chen Liang: and you make a picture\r
\r
210\r
00:35:09.940 --> 00:35:16.969\r
Chen Liang: of something that you might want to. And let's do this in deck because it seems to be working actually.\r
\r
211\r
00:35:17.090 --> 00:35:23.869\r
Chen Liang: can you make a picture of something that you might want to hang up in your dining room? Yeah, this is fine. Go ahead and press. Command A and minus for me.\r
\r
212\r
00:35:26.220 --> 00:35:30.969\r
Chen Liang: And also, would you mind closing the other window and edge\r
\r
213\r
00:35:32.410 --> 00:35:35.350\r
Chen Liang: alright? Oh, you already close it. Yeah.\r
\r
214\r
00:36:24.250 --> 00:36:27.130\r
Chen Liang: and negotiate. Change the vacuum.\r
\r
215\r
00:36:39.550 --> 00:36:40.320\r
Chen Liang: We do.\r
\r
216\r
00:36:41.370 --> 00:36:42.930\r
Chen Liang: You can do whatever you want.\r
\r
217\r
00:36:47.260 --> 00:36:48.990\r
Chen Liang: That doesn't\r
\r
218\r
00:36:50.320 --> 00:38:24.470\r
Chen Liang:  crazy? How often it says, no.\r
\r
219\r
00:38:26.500 --> 00:38:31.460\r
Chen Liang: neither ending the warts. You? Okay. yeah. Right?\r
\r
220\r
00:38:48.620 --> 00:38:49.370\r
Chen Liang: Oops.\r
\r
221\r
00:39:23.040 --> 00:39:26.020\r
Chen Liang: this is going to take a while because of the uploading images.\r
\r
222\r
00:39:39.510 --> 00:39:44.149\r
Chen Liang: Oh, wow! I think that one really worked. Yeah, there's these.\r
\r
223\r
00:39:53.420 --> 00:39:56.230\r
Chen Liang: And I mean, do you have any questions for me? No.\r
\r
224\r
00:39:56.870 --> 00:40:02.460\r
Chen Liang: there are some good ones.\r
\r
225\r
00:40:10.770 --> 00:40:14.500\r
Chen Liang: Look at this. Oh, wow! Didn't look at this.\r
\r
226\r
00:40:15.690 --> 00:40:17.980\r
Chen Liang: Yeah, yeah. okay.\r
\r
227\r
00:40:18.300 --> 00:40:21.779\r
Chen Liang: anything else you can. Happy with this. I'm worrying like.\r
\r
228\r
00:40:21.850 --> 00:40:22.910\r
Chen Liang: okay.\r
\r
229\r
00:40:23.340 --> 00:40:28.730\r
Chen Liang: give me your thoughts. What do you think? Well, first, what do you think about the tasks I gave you.\r
\r
230\r
00:40:29.960 --> 00:40:33.449\r
Chen Liang: I think it's those are pretty common tasks.\r
\r
231\r
00:40:33.610 --> 00:40:34.810\r
Chen Liang: I think that.\r
\r
232\r
00:40:34.950 --> 00:40:45.989\r
Chen Liang: And for the final user study it will be more well defined. So. And also I won't be like, you know, I think I'll have a slide show.\r
\r
233\r
00:40:47.100 --> 00:40:51.629\r
Chen Liang: what do you think would be some? Okay, let me also just pull up a Google Doc here.\r
\r
234\r
00:40:54.390 --> 00:40:55.870\r
that's that's\r
\r
235\r
00:41:04.010 --> 00:41:05.220\r
Chen Liang: 10,\r
\r
236\r
00:41:07.210 --> 00:41:08.590\r
Chen Liang: 3, 8,\r
\r
237\r
00:41:08.950 --> 00:41:10.700\r
Chen Liang: 24. Okay?\r
\r
238\r
00:41:12.070 --> 00:41:18.219\r
Chen Liang: I guess. So big questions. I have, what are some? So we call this hard task and soft task.\r
\r
239\r
00:41:18.380 --> 00:41:24.360\r
Chen Liang: What are some other soft tasks that you could think of? So this one? I said something you might want to hang up in your living room.\r
\r
240\r
00:41:24.870 --> 00:41:26.940\r
Chen Liang: Those are the soft tusks.\r
\r
241\r
00:41:28.700 --> 00:41:36.100\r
Chen Liang: so other ideas that we had so something to hear in the app living slash. Dying.\r
\r
242\r
00:41:37.520 --> 00:41:41.630\r
Chen Liang: Emily had the idea of. What do your pets do\r
\r
243\r
00:41:42.490 --> 00:41:43.960\r
Chen Liang: while you're\r
\r
244\r
00:41:45.320 --> 00:41:57.320\r
Chen Liang: away? But then it's it's tax on the drug. No, they create an image all of what your pets do while you're away. The only thing is, not everyone has pets, you know.\r
\r
245\r
00:41:58.520 --> 00:42:02.080\r
Chen Liang: but like, maybe, like what people's pets do while they're away.\r
\r
246\r
00:42:03.410 --> 00:42:06.700\r
Chen Liang: More. What would be.\r
\r
247\r
00:42:09.700 --> 00:42:11.060\r
Chen Liang: What happened is\r
\r
248\r
00:42:15.630 --> 00:42:19.149\r
Chen Liang: no like, what will I look like in 20 years?\r
\r
249\r
00:42:19.190 --> 00:42:25.200\r
Chen Liang: Okay, or generate a opinion of me in 20 years. So\r
\r
250\r
00:42:25.320 --> 00:42:30.150\r
Chen Liang: here, there could be different styles, different occupations.\r
\r
251\r
00:42:30.520 --> 00:42:32.550\r
Chen Liang: different characteristics.\r
\r
252\r
00:42:33.000 --> 00:42:35.570\r
Chen Liang: Maybe that's something that kind.\r
\r
253\r
00:42:36.330 --> 00:42:47.209\r
Chen Liang: And there are multiple interactions fully utilized. All the nodes. Yeah. or. yeah, something similar.\r
\r
254\r
00:42:48.440 --> 00:42:49.140\r
Chen Liang: Yeah.\r
\r
255\r
00:42:52.900 --> 00:42:54.030\r
Chen Liang: I mean.\r
\r
256\r
00:42:58.130 --> 00:43:08.930\r
Chen Liang: create something to put in the living room is I feel like, it's a mega soft task. Yeah, because it's essentially create an image you like\r
\r
257\r
00:43:09.130 --> 00:43:16.580\r
Chen Liang: right? Well, it's and one thing I was thinking was like dining room, because, like you, it is expressive, you know.\r
\r
258\r
00:43:16.760 --> 00:43:33.669\r
Chen Liang: I wouldn't want to just put any image that I like up in my dining room. I would want it to be something that really I would like to show other people. But you're right. It is a very soft task. I really do want opportunities to let people flex their creativity, though. Yeah.\r
\r
259\r
00:43:35.030 --> 00:43:41.000\r
Chen Liang:  I feel like painting is a pretty decent one.\r
\r
260\r
00:43:41.170 --> 00:43:43.420\r
Chen Liang: so like PIN Hand.\r
\r
261\r
00:43:43.910 --> 00:43:48.520\r
Chen Liang: you have some expectations, common expectations.\r
\r
262\r
00:43:48.590 --> 00:43:51.420\r
Chen Liang: and you also have some creativity there.\r
\r
263\r
00:43:51.640 --> 00:44:05.219\r
Chen Liang: So let's say, if you want them to generate more than art, then that's a different thing, because the variance is too large that it's hard to make all people happy because there's no common\r
\r
264\r
00:44:05.860 --> 00:44:08.920\r
Chen Liang: agreement on what the that thing should look like.\r
\r
265\r
00:44:09.300 --> 00:44:12.780\r
Chen Liang: So I think, Penny, that good idea.\r
\r
266\r
00:44:22.040 --> 00:44:29.899\r
Chen Liang: I was. I was previous previous previously thinking, adding some text to the image. But I don't think that perform super. Well. Okay.\r
\r
267\r
00:44:30.530 --> 00:44:41.179\r
Chen Liang: that's one thing that I think I could do actually is. Because what what if I just had like a specialized model? If someone asks to add text to an image.\r
\r
268\r
00:44:41.340 --> 00:44:42.959\r
Chen Liang: And I just put\r
\r
269\r
00:44:43.000 --> 00:44:49.239\r
Chen Liang: text, I didn't use any like AI. I just put text on the image where they wanted it. Nice hard work.\r
\r
270\r
00:44:49.430 --> 00:44:56.910\r
Chen Liang: I read it and crack it like this. I think there are some specialized models just for text that I could utilize.\r
\r
271\r
00:44:57.830 --> 00:45:05.429\r
Chen Liang: Yeah, maybe. But II guess it's beyond. I think yeah. text on image\r
\r
272\r
00:45:06.170 --> 00:45:15.419\r
Chen Liang: would be cool beyond. Let's go do you think it's a fair comparison with touch? Gpt. The fake gpt we created\r
\r
273\r
00:45:25.770 --> 00:45:31.510\r
Chen Liang: sort of, I guess. I mean, that's all Gp. Has.\r
\r
274\r
00:45:32.850 --> 00:45:45.949\r
Chen Liang: It may not be super fair, but it's just your comparing tool chat, chat. Gp. do I mean, do you think that our fake Chat Gbt is like real chat. I think so.\r
\r
275\r
00:45:46.290 --> 00:45:53.409\r
Chen Liang:  I think it's even more than 20. Pt, because I have it.\r
\r
276\r
00:46:00.920 --> 00:46:05.420\r
Chen Liang: Anything else about user study.\r
\r
277\r
00:46:05.840 --> 00:46:14.499\r
Chen Liang: Yeah, well, first about this talk about the interfaces, and then you can give me some advice for resigning the study protocol. I mean, the interface is great.\r
\r
278\r
00:46:15.180 --> 00:46:24.059\r
Chen Liang:  II cannot think about\r
\r
279\r
00:46:24.100 --> 00:46:31.730\r
Chen Liang: somewhere. A good idea right now, because eat. But the thing is\r
\r
280\r
00:46:32.720 --> 00:46:34.720\r
Chen Liang: I guess one way to think about is\r
\r
281\r
00:46:35.300 --> 00:46:40.190\r
Chen Liang: try to maybe try. Think about some nonlinear tasks.\r
\r
282\r
00:46:40.830 --> 00:46:42.649\r
Chen Liang: chant Gbts\r
\r
283\r
00:46:44.030 --> 00:46:55.500\r
Chen Liang: completely linear. If there's a linear task then. and may not make enough difference between your interviews and the tangibility. So one thing I was considering was\r
\r
284\r
00:46:55.580 --> 00:47:04.519\r
Chen Liang: adding a modifier to a task. So after 5 min, say, actually do this so that way, they have to kind of adjust\r
\r
285\r
00:47:05.280 --> 00:47:06.370\r
Chen Liang: on this\r
\r
286\r
00:47:07.030 --> 00:47:08.630\r
Chen Liang: for both. Yeah.\r
\r
287\r
00:47:09.030 --> 00:47:12.170\r
Chen Liang: so like for this task.\r
\r
288\r
00:47:16.530 --> 00:47:23.690\r
Chen Liang: I'd be like, now make a picture of what that looks like 50 years in the future. So you still can use\r
\r
289\r
00:47:23.870 --> 00:47:28.510\r
Chen Liang: some of the assets you have. But it's not just linear.\r
\r
290\r
00:47:29.600 --> 00:47:30.480\r
Chen Liang: Okay.\r
\r
291\r
00:47:38.760 --> 00:47:51.380\r
Chen Liang: But then I don't know. I feel like, and that's additional work. Additional work for me. Yeah. no. I just have to come up with prompts because you could do it right now. right? Yeah.\r
\r
292\r
00:47:52.420 --> 00:48:02.710\r
Chen Liang:  And also probably ask the participants for preparing some images\r
\r
293\r
00:48:03.830 --> 00:48:10.680\r
Chen Liang: or so that they can use this tag. I guess most of the thing we do are\r
\r
294\r
00:48:11.340 --> 00:48:18.209\r
Chen Liang: gold gold car. I haven't even used the text card before.\r
\r
295\r
00:48:19.120 --> 00:48:20.590\r
Chen Liang: Right?\r
\r
296\r
00:48:21.680 --> 00:48:26.590\r
Chen Liang: Yeah. Like, if you have that image adding X to image model, then\r
\r
297\r
00:48:26.600 --> 00:48:35.910\r
Chen Liang: you can year. The integrate text card into it image card is only from the generated results. There's no\r
\r
298\r
00:48:37.220 --> 00:48:39.519\r
Chen Liang: I don't deliver to use that\r
\r
299\r
00:48:39.560 --> 00:48:46.809\r
Chen Liang: well. And one thing that she did was she looked up like old farmhouse. And then she was like.\r
\r
300\r
00:48:47.850 --> 00:48:50.730\r
Chen Liang: I see. Actually, I think this will work\r
\r
301\r
00:48:52.730 --> 00:48:55.460\r
Chen Liang: beans crazy.\r
\r
302\r
00:48:59.330 --> 00:49:03.070\r
Chen Liang: this, but with a minute. Right?\r
\r
303\r
00:49:12.220 --> 00:49:13.570\r
Chen Liang: And one thing.\r
\r
304\r
00:49:17.470 --> 00:49:22.900\r
Chen Liang: actually, that I want to encourage in the demo is for people to do more modular.\r
\r
305\r
00:49:23.100 --> 00:49:25.740\r
Chen Liang: So this.\r
\r
306\r
00:49:31.850 --> 00:49:33.420\r
Chen Liang: yeah, yeah, yeah.\r
\r
307\r
00:49:42.000 --> 00:49:43.170\r
Chen Liang: yeah. Yeah.\r
\r
308\r
00:49:43.700 --> 00:49:51.709\r
Chen Liang: so okay, I'll encourage that. Then if if it's if we making it more modular, then you can actually\r
\r
309\r
00:49:51.840 --> 00:50:06.849\r
Chen Liang: think about more complicated tasks that involve more than one goal. So you you probably not creating a one image. But you are creating a set of image or or something that you can reuse all the\r
\r
310\r
00:50:07.380 --> 00:50:09.040\r
Chen Liang: stop over here.\r
\r
311\r
00:50:09.600 --> 00:50:16.649\r
Chen Liang:  that will also save a lot of time compared to Chpbie. And that's also one of your\r
\r
312\r
00:50:24.460 --> 00:50:27.010\r
Chen Liang: yeah anything else.\r
\r
313\r
00:50:27.450 --> 00:50:29.240\r
Chen Liang: And so\r
\r
314\r
00:50:30.700 --> 00:50:35.070\r
Chen Liang: I mean literally, it's a cool interface.\r
\r
315\r
00:50:36.510 --> 00:50:43.109\r
Chen Liang: I got it alright. Thank you so much for your participation. I mean extensively.\r
\r
316\r
00:50:43.620 --> 00:50:51.309\r
Chen Liang: I mean, II think it's really II think it's really fun. That's one of the big things that I wanted it to be is like, because\r
\r
317\r
00:50:51.490 --> 00:50:52.610\r
Chen Liang: the thing is\r
\r
318\r
00:50:52.830 --> 00:51:12.980\r
Chen Liang: typing on a Jupiter notebook is not a fun, you know, it's fun to get the output. But this way, you can really just like, yeah, yeah, drag stuff around. I previously worried about. Some people will recreate or have similar ideas like this. But consider all like design. Today, I tried all the functionality.\r
\r
319\r
00:51:13.120 --> 00:51:16.629\r
Chen Liang: There's a technical barrier over there, I think that'll\r
\r
320\r
00:51:17.220 --> 00:51:27.940\r
Chen Liang: gosh took so long. Bro, but thanks so much. Cool. Well, thank you again for your participation. I'm gonna go ahead and stop the recording.\r
\r
`, Oh = {
  global: {
    tabEnableFloat: !0
  },
  borders: [],
  layout: {
    type: "row",
    children: [
      {
        type: "row",
        weight: 50,
        children: [
          {
            type: "row",
            weight: 87.8132118451025,
            children: [
              {
                type: "tabset",
                weight: 50,
                children: [
                  {
                    type: "tab",
                    name: "Video",
                    component: "video"
                  }
                ]
              },
              {
                type: "tabset",
                weight: 50,
                children: [
                  {
                    type: "tab",
                    name: "Markers",
                    component: "vtt"
                  }
                ],
                active: !0
              },
              {
                type: "tabset",
                weight: 50,
                children: [
                  {
                    type: "tab",
                    name: "Markers",
                    component: "markerlist"
                  }
                ],
                active: !0
              }
            ]
          },
          {
            type: "tabset",
            weight: 12.186788154897494,
            children: [
              {
                type: "tab",
                name: "Timeline",
                component: "timeline"
              }
            ]
          }
        ]
      }
    ]
  }
}, Sh = Hr.Model.fromJson(Oh), Lh = new xo.WebVTTParser();
let Da = (n) => {
  n.key === "s" && (n.metaKey || n.ctrlKey) && (n.preventDefault(), console.log("cmd s"));
}, Ia = (n) => {
  n.key === "o" && (n.metaKey || n.ctrlKey) && (n.preventDefault(), console.log("cmd o"));
}, xa = (n) => {
  n.key === "b" && (n.metaKey || n.ctrlKey) && (n.preventDefault(), console.log("cmd b"));
};
const Pa = (n) => {
  n.key === "s" && (n.metaKey || n.ctrlKey) && (n.preventDefault(), Da(n)), n.key === "o" && (n.metaKey || n.ctrlKey) && (n.preventDefault(), Ia(n)), n.key === "b" && (n.metaKey || n.ctrlKey) && (n.preventDefault(), xa(n));
};
document.removeEventListener("keydown", Pa);
document.addEventListener("keydown", Pa);
function Ah(n) {
  return new Promise((e) => {
    console.log("pilotTranscript", No), e(Lh.parse(No).cues);
  });
}
function Dn(n) {
  const e = Math.floor(n / 3600), r = (Math.floor(n / 60) % 60).toString().padStart(2, "0"), o = (n % 60).toFixed(3).slice(0, -1).padStart(5, "0");
  return `${e}:${r}:${o}`;
}
function Ch(n) {
  return { curTime: 0, annotations: [] };
}
const Nt = F.createContext({
  setSetTime: (n) => {
  },
  setTime: 0,
  curTime: 0,
  setCurTime: (n) => {
  },
  maxTime: 0,
  setMaxTime: (n) => {
  },
  curAnnotation: "",
  setCurAnnotation: (n) => {
  },
  annotations: [],
  addAnnotation: (n) => {
  },
  editAnnotation: (n) => {
  },
  deleteAnnotation: (n) => {
  },
  playerState: "uninit",
  setPlayerState: (n) => {
  },
  vttContent: [],
  curCue: "",
  setCurCue: (n) => {
  }
});
function Bh() {
  new URLSearchParams(window.location.search);
  const n = "pilot", e = Ch(), [t, r] = F.useState(e.curTime), [i, o] = F.useState(e.curTime), [l, u] = F.useState([]), [g, T] = F.useState("uninit"), [f, d] = F.useState(""), [h, a] = F.useState(0), [s, c] = F.useState(""), [y, w] = F.useState(e.annotations);
  window.onbeforeunload = () => {
    localStorage.setItem(n, JSON.stringify({
      curTime: t,
      annotations: y
    }));
  }, jt(() => {
    Da = (_) => {
      Nh(n, y);
    }, Ia = (_) => {
      window.confirm("Are you sure you want to load annotations?") && Dh(n).then((E) => {
        w(
          E.map((C) => ({
            note: C.note,
            start: C.start,
            end: C.end,
            note_id: yi()
          }))
        );
      });
    }, xa = (_) => {
      window.confirm("Are you sure you want to clear annotations?") && w([]);
    };
  }), jt(() => {
    Ah().then((_) => {
      console.log(_), u(_);
    });
  }, [n]), jt(() => {
    const _ = l.find((C) => C.startTime <= t && t <= C.endTime);
    _ && d(_.id);
    const E = document.getElementById("note-spawner");
    E && E.scrollIntoView({ behavior: "smooth" });
  }, [t]);
  function p(_) {
    const E = document.getElementById(`cue-${_}`);
    E && E.scrollIntoView({ behavior: "smooth", block: "center" });
  }
  jt(() => {
    p(f);
  }, [f]);
  const v = (_) => {
    const E = _.getComponent();
    switch (E) {
      case "markerlist":
        return /* @__PURE__ */ x.jsx(Eh, { annotations: y });
      case "video":
        return /* @__PURE__ */ x.jsx(rh, { p_id: n });
      case "timeline":
        return /* @__PURE__ */ x.jsx(oh, {});
      case "vtt":
        return /* @__PURE__ */ x.jsx(Rh, { vttContent: l });
      default:
        return /* @__PURE__ */ x.jsxs("div", { children: [
          "Unknown component: ",
          E
        ] });
    }
  }, m = F.useRef(null);
  return /* @__PURE__ */ x.jsx(x.Fragment, { children: /* @__PURE__ */ x.jsx(Nt.Provider, { value: {
    curTime: t,
    setCurTime: r,
    maxTime: h,
    setMaxTime: a,
    setTime: i,
    setSetTime: o,
    annotations: y,
    curAnnotation: s,
    setCurAnnotation: c,
    addAnnotation: (_) => {
      const E = [...y, { ..._, note_id: yi() }];
      w(E);
    },
    editAnnotation(_) {
      const E = y.map((C) => C.note_id === _.note_id ? { ...C, ..._ } : C);
      w(E);
    },
    deleteAnnotation: (_) => {
      const E = y.filter((C) => C.note_id !== _);
      w(E);
    },
    playerState: g,
    setPlayerState: T,
    vttContent: l,
    curCue: f,
    setCurCue: d
  }, children: /* @__PURE__ */ x.jsx(
    Hr.Layout,
    {
      model: Sh,
      factory: v,
      ref: m,
      onModelChange: (_) => {
        console.log("model change", _.toJson());
      }
    }
  ) }) });
}
const Rh = (n) => {
  const { curTime: e, setSetTime: t, curCue: r } = F.useContext(Nt);
  return /* @__PURE__ */ x.jsx("div", { className: "vtt-disp", children: n.vttContent.map((i) => /* @__PURE__ */ x.jsxs(
    "div",
    {
      id: `cue-${i.id}`,
      className: `vtt-cue ${i.id === r ? "highlight" : ""}`,
      onClick: () => {
        t(i.startTime);
      },
      children: [
        /* @__PURE__ */ x.jsx("div", { className: "vtt-start", children: Dn(i.startTime) }),
        /* @__PURE__ */ x.jsx("div", { className: "vtt-text", children: i.text })
      ]
    },
    i.id
  )) });
};
async function Nh(n, e) {
  const t = await fetch(`http://127.0.0.1:5000/api/annotations/${n}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(e.map((r) => ({
      start: r.start,
      end: r.end,
      note: JSON.stringify(r.note)
    })))
  });
  if (!t.ok)
    throw new Error(`Error: ${t.statusText}`);
  return t.json();
}
async function Dh(n) {
  const e = await fetch(`http://127.0.0.1:5000/api/annotations/${n}`);
  if (!e.ok)
    throw new Error(`Error: ${e.statusText}`);
  return e.json();
}
export {
  Bh as A,
  is as g,
  Nd as p,
  Vn as u
};
