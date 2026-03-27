(function () {
  const l = document.createElement("link").relList;
  if (l && l.supports && l.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) u(s);
  new MutationObserver((s) => {
    for (const r of s)
      if (r.type === "childList")
        for (const h of r.addedNodes)
          h.tagName === "LINK" && h.rel === "modulepreload" && u(h);
  }).observe(document, { childList: !0, subtree: !0 });
  function a(s) {
    const r = {};
    return (
      s.integrity && (r.integrity = s.integrity),
      s.referrerPolicy && (r.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (r.credentials = "include")
        : s.crossOrigin === "anonymous"
          ? (r.credentials = "omit")
          : (r.credentials = "same-origin"),
      r
    );
  }
  function u(s) {
    if (s.ep) return;
    s.ep = !0;
    const r = a(s);
    fetch(s.href, r);
  }
})();
var Yt = Object.create,
  ve = Object.defineProperty,
  Jt = Object.getOwnPropertyDescriptor,
  Xt = Object.getOwnPropertyNames,
  Zt = Object.getPrototypeOf,
  er = Object.prototype.hasOwnProperty,
  tr = (g, l, a) =>
    l in g
      ? ve(g, l, { enumerable: !0, configurable: !0, writable: !0, value: a })
      : (g[l] = a),
  f = (g, l) => ve(g, "name", { value: l, configurable: !0 }),
  ie = (g, l) => () => (g && (l = g((g = 0))), l),
  V = (g, l) => () => (l || g((l = { exports: {} }).exports, l), l.exports),
  ce = (g, l) => {
    for (var a in l) ve(g, a, { get: l[a], enumerable: !0 });
  },
  dt = (g, l, a, u) => {
    if ((l && typeof l == "object") || typeof l == "function")
      for (let s of Xt(l))
        !er.call(g, s) &&
          s !== a &&
          ve(g, s, {
            get: () => l[s],
            enumerable: !(u = Jt(l, s)) || u.enumerable,
          });
    return g;
  },
  we = (g, l, a) => (
    (a = g != null ? Yt(Zt(g)) : {}),
    dt(
      l || !g || !g.__esModule
        ? ve(a, "default", { value: g, enumerable: !0 })
        : a,
      g,
    )
  ),
  re = (g) => dt(ve({}, "__esModule", { value: !0 }), g),
  W = (g, l, a) => tr(g, typeof l != "symbol" ? l + "" : l, a),
  rr = V((g) => {
    (Q(), (g.byteLength = d), (g.toByteArray = m), (g.fromByteArray = v));
    var l = [],
      a = [],
      u = typeof Uint8Array < "u" ? Uint8Array : Array,
      s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for (r = 0, h = s.length; r < h; ++r)
      ((l[r] = s[r]), (a[s.charCodeAt(r)] = r));
    var r, h;
    ((a[45] = 62), (a[95] = 63));
    function i(n) {
      var o = n.length;
      if (o % 4 > 0)
        throw new Error("Invalid string. Length must be a multiple of 4");
      var y = n.indexOf("=");
      y === -1 && (y = o);
      var E = y === o ? 0 : 4 - (y % 4);
      return [y, E];
    }
    f(i, "getLens");
    function d(n) {
      var o = i(n),
        y = o[0],
        E = o[1];
      return ((y + E) * 3) / 4 - E;
    }
    f(d, "byteLength");
    function w(n, o, y) {
      return ((o + y) * 3) / 4 - y;
    }
    f(w, "_byteLength");
    function m(n) {
      var o,
        y = i(n),
        E = y[0],
        A = y[1],
        I = new u(w(n, E, A)),
        M = 0,
        T = A > 0 ? E - 4 : E,
        S;
      for (S = 0; S < T; S += 4)
        ((o =
          (a[n.charCodeAt(S)] << 18) |
          (a[n.charCodeAt(S + 1)] << 12) |
          (a[n.charCodeAt(S + 2)] << 6) |
          a[n.charCodeAt(S + 3)]),
          (I[M++] = (o >> 16) & 255),
          (I[M++] = (o >> 8) & 255),
          (I[M++] = o & 255));
      return (
        A === 2 &&
          ((o = (a[n.charCodeAt(S)] << 2) | (a[n.charCodeAt(S + 1)] >> 4)),
          (I[M++] = o & 255)),
        A === 1 &&
          ((o =
            (a[n.charCodeAt(S)] << 10) |
            (a[n.charCodeAt(S + 1)] << 4) |
            (a[n.charCodeAt(S + 2)] >> 2)),
          (I[M++] = (o >> 8) & 255),
          (I[M++] = o & 255)),
        I
      );
    }
    f(m, "toByteArray");
    function b(n) {
      return (
        l[(n >> 18) & 63] + l[(n >> 12) & 63] + l[(n >> 6) & 63] + l[n & 63]
      );
    }
    f(b, "tripletToBase64");
    function p(n, o, y) {
      for (var E, A = [], I = o; I < y; I += 3)
        ((E =
          ((n[I] << 16) & 16711680) +
          ((n[I + 1] << 8) & 65280) +
          (n[I + 2] & 255)),
          A.push(b(E)));
      return A.join("");
    }
    f(p, "encodeChunk");
    function v(n) {
      for (
        var o, y = n.length, E = y % 3, A = [], I = 16383, M = 0, T = y - E;
        M < T;
        M += I
      )
        A.push(p(n, M, M + I > T ? T : M + I));
      return (
        E === 1
          ? ((o = n[y - 1]), A.push(l[o >> 2] + l[(o << 4) & 63] + "=="))
          : E === 2 &&
            ((o = (n[y - 2] << 8) + n[y - 1]),
            A.push(l[o >> 10] + l[(o >> 4) & 63] + l[(o << 2) & 63] + "=")),
        A.join("")
      );
    }
    f(v, "fromByteArray");
  }),
  nr = V((g) => {
    (Q(),
      (g.read = function (l, a, u, s, r) {
        var h,
          i,
          d = r * 8 - s - 1,
          w = (1 << d) - 1,
          m = w >> 1,
          b = -7,
          p = u ? r - 1 : 0,
          v = u ? -1 : 1,
          n = l[a + p];
        for (
          p += v, h = n & ((1 << -b) - 1), n >>= -b, b += d;
          b > 0;
          h = h * 256 + l[a + p], p += v, b -= 8
        );
        for (
          i = h & ((1 << -b) - 1), h >>= -b, b += s;
          b > 0;
          i = i * 256 + l[a + p], p += v, b -= 8
        );
        if (h === 0) h = 1 - m;
        else {
          if (h === w) return i ? NaN : (n ? -1 : 1) * (1 / 0);
          ((i = i + Math.pow(2, s)), (h = h - m));
        }
        return (n ? -1 : 1) * i * Math.pow(2, h - s);
      }),
      (g.write = function (l, a, u, s, r, h) {
        var i,
          d,
          w,
          m = h * 8 - r - 1,
          b = (1 << m) - 1,
          p = b >> 1,
          v = r === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
          n = s ? 0 : h - 1,
          o = s ? 1 : -1,
          y = a < 0 || (a === 0 && 1 / a < 0) ? 1 : 0;
        for (
          a = Math.abs(a),
            isNaN(a) || a === 1 / 0
              ? ((d = isNaN(a) ? 1 : 0), (i = b))
              : ((i = Math.floor(Math.log(a) / Math.LN2)),
                a * (w = Math.pow(2, -i)) < 1 && (i--, (w *= 2)),
                i + p >= 1 ? (a += v / w) : (a += v * Math.pow(2, 1 - p)),
                a * w >= 2 && (i++, (w /= 2)),
                i + p >= b
                  ? ((d = 0), (i = b))
                  : i + p >= 1
                    ? ((d = (a * w - 1) * Math.pow(2, r)), (i = i + p))
                    : ((d = a * Math.pow(2, p - 1) * Math.pow(2, r)), (i = 0)));
          r >= 8;
          l[u + n] = d & 255, n += o, d /= 256, r -= 8
        );
        for (
          i = (i << r) | d, m += r;
          m > 0;
          l[u + n] = i & 255, n += o, i /= 256, m -= 8
        );
        l[u + n - o] |= y * 128;
      }));
  }),
  sr = V((g) => {
    Q();
    var l = rr(),
      a = nr(),
      u =
        typeof Symbol == "function" && typeof Symbol.for == "function"
          ? Symbol.for("nodejs.util.inspect.custom")
          : null;
    ((g.Buffer = i), (g.SlowBuffer = A), (g.INSPECT_MAX_BYTES = 50));
    var s = 2147483647;
    ((g.kMaxLength = s),
      (i.TYPED_ARRAY_SUPPORT = r()),
      !i.TYPED_ARRAY_SUPPORT &&
        typeof console < "u" &&
        typeof console.error == "function" &&
        console.error(
          "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.",
        ));
    function r() {
      try {
        let e = new Uint8Array(1),
          t = {
            foo: f(function () {
              return 42;
            }, "foo"),
          };
        return (
          Object.setPrototypeOf(t, Uint8Array.prototype),
          Object.setPrototypeOf(e, t),
          e.foo() === 42
        );
      } catch {
        return !1;
      }
    }
    (f(r, "typedArraySupport"),
      Object.defineProperty(i.prototype, "parent", {
        enumerable: !0,
        get: f(function () {
          if (i.isBuffer(this)) return this.buffer;
        }, "get"),
      }),
      Object.defineProperty(i.prototype, "offset", {
        enumerable: !0,
        get: f(function () {
          if (i.isBuffer(this)) return this.byteOffset;
        }, "get"),
      }));
    function h(e) {
      if (e > s)
        throw new RangeError(
          'The value "' + e + '" is invalid for option "size"',
        );
      let t = new Uint8Array(e);
      return (Object.setPrototypeOf(t, i.prototype), t);
    }
    f(h, "createBuffer");
    function i(e, t, c) {
      if (typeof e == "number") {
        if (typeof t == "string")
          throw new TypeError(
            'The "string" argument must be of type string. Received type number',
          );
        return b(e);
      }
      return d(e, t, c);
    }
    (f(i, "Buffer"), (i.poolSize = 8192));
    function d(e, t, c) {
      if (typeof e == "string") return p(e, t);
      if (ArrayBuffer.isView(e)) return n(e);
      if (e == null)
        throw new TypeError(
          "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
            typeof e,
        );
      if (
        le(e, ArrayBuffer) ||
        (e && le(e.buffer, ArrayBuffer)) ||
        (typeof SharedArrayBuffer < "u" &&
          (le(e, SharedArrayBuffer) || (e && le(e.buffer, SharedArrayBuffer))))
      )
        return o(e, t, c);
      if (typeof e == "number")
        throw new TypeError(
          'The "value" argument must not be of type number. Received type number',
        );
      let _ = e.valueOf && e.valueOf();
      if (_ != null && _ !== e) return i.from(_, t, c);
      let L = y(e);
      if (L) return L;
      if (
        typeof Symbol < "u" &&
        Symbol.toPrimitive != null &&
        typeof e[Symbol.toPrimitive] == "function"
      )
        return i.from(e[Symbol.toPrimitive]("string"), t, c);
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
          typeof e,
      );
    }
    (f(d, "from"),
      (i.from = function (e, t, c) {
        return d(e, t, c);
      }),
      Object.setPrototypeOf(i.prototype, Uint8Array.prototype),
      Object.setPrototypeOf(i, Uint8Array));
    function w(e) {
      if (typeof e != "number")
        throw new TypeError('"size" argument must be of type number');
      if (e < 0)
        throw new RangeError(
          'The value "' + e + '" is invalid for option "size"',
        );
    }
    f(w, "assertSize");
    function m(e, t, c) {
      return (
        w(e),
        e <= 0
          ? h(e)
          : t !== void 0
            ? typeof c == "string"
              ? h(e).fill(t, c)
              : h(e).fill(t)
            : h(e)
      );
    }
    (f(m, "alloc"),
      (i.alloc = function (e, t, c) {
        return m(e, t, c);
      }));
    function b(e) {
      return (w(e), h(e < 0 ? 0 : E(e) | 0));
    }
    (f(b, "allocUnsafe"),
      (i.allocUnsafe = function (e) {
        return b(e);
      }),
      (i.allocUnsafeSlow = function (e) {
        return b(e);
      }));
    function p(e, t) {
      if (
        ((typeof t != "string" || t === "") && (t = "utf8"), !i.isEncoding(t))
      )
        throw new TypeError("Unknown encoding: " + t);
      let c = I(e, t) | 0,
        _ = h(c),
        L = _.write(e, t);
      return (L !== c && (_ = _.slice(0, L)), _);
    }
    f(p, "fromString");
    function v(e) {
      let t = e.length < 0 ? 0 : E(e.length) | 0,
        c = h(t);
      for (let _ = 0; _ < t; _ += 1) c[_] = e[_] & 255;
      return c;
    }
    f(v, "fromArrayLike");
    function n(e) {
      if (le(e, Uint8Array)) {
        let t = new Uint8Array(e);
        return o(t.buffer, t.byteOffset, t.byteLength);
      }
      return v(e);
    }
    f(n, "fromArrayView");
    function o(e, t, c) {
      if (t < 0 || e.byteLength < t)
        throw new RangeError('"offset" is outside of buffer bounds');
      if (e.byteLength < t + (c || 0))
        throw new RangeError('"length" is outside of buffer bounds');
      let _;
      return (
        t === void 0 && c === void 0
          ? (_ = new Uint8Array(e))
          : c === void 0
            ? (_ = new Uint8Array(e, t))
            : (_ = new Uint8Array(e, t, c)),
        Object.setPrototypeOf(_, i.prototype),
        _
      );
    }
    f(o, "fromArrayBuffer");
    function y(e) {
      if (i.isBuffer(e)) {
        let t = E(e.length) | 0,
          c = h(t);
        return (c.length === 0 || e.copy(c, 0, 0, t), c);
      }
      if (e.length !== void 0)
        return typeof e.length != "number" || xe(e.length) ? h(0) : v(e);
      if (e.type === "Buffer" && Array.isArray(e.data)) return v(e.data);
    }
    f(y, "fromObject");
    function E(e) {
      if (e >= s)
        throw new RangeError(
          "Attempt to allocate Buffer larger than maximum size: 0x" +
            s.toString(16) +
            " bytes",
        );
      return e | 0;
    }
    f(E, "checked");
    function A(e) {
      return (+e != e && (e = 0), i.alloc(+e));
    }
    (f(A, "SlowBuffer"),
      (i.isBuffer = f(function (e) {
        return e != null && e._isBuffer === !0 && e !== i.prototype;
      }, "isBuffer")),
      (i.compare = f(function (e, t) {
        if (
          (le(e, Uint8Array) && (e = i.from(e, e.offset, e.byteLength)),
          le(t, Uint8Array) && (t = i.from(t, t.offset, t.byteLength)),
          !i.isBuffer(e) || !i.isBuffer(t))
        )
          throw new TypeError(
            'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array',
          );
        if (e === t) return 0;
        let c = e.length,
          _ = t.length;
        for (let L = 0, B = Math.min(c, _); L < B; ++L)
          if (e[L] !== t[L]) {
            ((c = e[L]), (_ = t[L]));
            break;
          }
        return c < _ ? -1 : _ < c ? 1 : 0;
      }, "compare")),
      (i.isEncoding = f(function (e) {
        switch (String(e).toLowerCase()) {
          case "hex":
          case "utf8":
          case "utf-8":
          case "ascii":
          case "latin1":
          case "binary":
          case "base64":
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return !0;
          default:
            return !1;
        }
      }, "isEncoding")),
      (i.concat = f(function (e, t) {
        if (!Array.isArray(e))
          throw new TypeError('"list" argument must be an Array of Buffers');
        if (e.length === 0) return i.alloc(0);
        let c;
        if (t === void 0)
          for (t = 0, c = 0; c < e.length; ++c) t += e[c].length;
        let _ = i.allocUnsafe(t),
          L = 0;
        for (c = 0; c < e.length; ++c) {
          let B = e[c];
          if (le(B, Uint8Array))
            L + B.length > _.length
              ? (i.isBuffer(B) || (B = i.from(B)), B.copy(_, L))
              : Uint8Array.prototype.set.call(_, B, L);
          else if (i.isBuffer(B)) B.copy(_, L);
          else
            throw new TypeError('"list" argument must be an Array of Buffers');
          L += B.length;
        }
        return _;
      }, "concat")));
    function I(e, t) {
      if (i.isBuffer(e)) return e.length;
      if (ArrayBuffer.isView(e) || le(e, ArrayBuffer)) return e.byteLength;
      if (typeof e != "string")
        throw new TypeError(
          'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
            typeof e,
        );
      let c = e.length,
        _ = arguments.length > 2 && arguments[2] === !0;
      if (!_ && c === 0) return 0;
      let L = !1;
      for (;;)
        switch (t) {
          case "ascii":
          case "latin1":
          case "binary":
            return c;
          case "utf8":
          case "utf-8":
            return Re(e).length;
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return c * 2;
          case "hex":
            return c >>> 1;
          case "base64":
            return $e(e).length;
          default:
            if (L) return _ ? -1 : Re(e).length;
            ((t = ("" + t).toLowerCase()), (L = !0));
        }
    }
    (f(I, "byteLength"), (i.byteLength = I));
    function M(e, t, c) {
      let _ = !1;
      if (
        ((t === void 0 || t < 0) && (t = 0),
        t > this.length ||
          ((c === void 0 || c > this.length) && (c = this.length), c <= 0) ||
          ((c >>>= 0), (t >>>= 0), c <= t))
      )
        return "";
      for (e || (e = "utf8"); ; )
        switch (e) {
          case "hex":
            return K(this, t, c);
          case "utf8":
          case "utf-8":
            return k(this, t, c);
          case "ascii":
            return $(this, t, c);
          case "latin1":
          case "binary":
            return z(this, t, c);
          case "base64":
            return F(this, t, c);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return oe(this, t, c);
          default:
            if (_) throw new TypeError("Unknown encoding: " + e);
            ((e = (e + "").toLowerCase()), (_ = !0));
        }
    }
    (f(M, "slowToString"), (i.prototype._isBuffer = !0));
    function T(e, t, c) {
      let _ = e[t];
      ((e[t] = e[c]), (e[c] = _));
    }
    (f(T, "swap"),
      (i.prototype.swap16 = f(function () {
        let e = this.length;
        if (e % 2 !== 0)
          throw new RangeError("Buffer size must be a multiple of 16-bits");
        for (let t = 0; t < e; t += 2) T(this, t, t + 1);
        return this;
      }, "swap16")),
      (i.prototype.swap32 = f(function () {
        let e = this.length;
        if (e % 4 !== 0)
          throw new RangeError("Buffer size must be a multiple of 32-bits");
        for (let t = 0; t < e; t += 4)
          (T(this, t, t + 3), T(this, t + 1, t + 2));
        return this;
      }, "swap32")),
      (i.prototype.swap64 = f(function () {
        let e = this.length;
        if (e % 8 !== 0)
          throw new RangeError("Buffer size must be a multiple of 64-bits");
        for (let t = 0; t < e; t += 8)
          (T(this, t, t + 7),
            T(this, t + 1, t + 6),
            T(this, t + 2, t + 5),
            T(this, t + 3, t + 4));
        return this;
      }, "swap64")),
      (i.prototype.toString = f(function () {
        let e = this.length;
        return e === 0
          ? ""
          : arguments.length === 0
            ? k(this, 0, e)
            : M.apply(this, arguments);
      }, "toString")),
      (i.prototype.toLocaleString = i.prototype.toString),
      (i.prototype.equals = f(function (e) {
        if (!i.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
        return this === e ? !0 : i.compare(this, e) === 0;
      }, "equals")),
      (i.prototype.inspect = f(function () {
        let e = "",
          t = g.INSPECT_MAX_BYTES;
        return (
          (e = this.toString("hex", 0, t)
            .replace(/(.{2})/g, "$1 ")
            .trim()),
          this.length > t && (e += " ... "),
          "<Buffer " + e + ">"
        );
      }, "inspect")),
      u && (i.prototype[u] = i.prototype.inspect),
      (i.prototype.compare = f(function (e, t, c, _, L) {
        if (
          (le(e, Uint8Array) && (e = i.from(e, e.offset, e.byteLength)),
          !i.isBuffer(e))
        )
          throw new TypeError(
            'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
              typeof e,
          );
        if (
          (t === void 0 && (t = 0),
          c === void 0 && (c = e ? e.length : 0),
          _ === void 0 && (_ = 0),
          L === void 0 && (L = this.length),
          t < 0 || c > e.length || _ < 0 || L > this.length)
        )
          throw new RangeError("out of range index");
        if (_ >= L && t >= c) return 0;
        if (_ >= L) return -1;
        if (t >= c) return 1;
        if (((t >>>= 0), (c >>>= 0), (_ >>>= 0), (L >>>= 0), this === e))
          return 0;
        let B = L - _,
          D = c - t,
          Y = Math.min(B, D),
          te = this.slice(_, L),
          X = e.slice(t, c);
        for (let J = 0; J < Y; ++J)
          if (te[J] !== X[J]) {
            ((B = te[J]), (D = X[J]));
            break;
          }
        return B < D ? -1 : D < B ? 1 : 0;
      }, "compare")));
    function S(e, t, c, _, L) {
      if (e.length === 0) return -1;
      if (
        (typeof c == "string"
          ? ((_ = c), (c = 0))
          : c > 2147483647
            ? (c = 2147483647)
            : c < -2147483648 && (c = -2147483648),
        (c = +c),
        xe(c) && (c = L ? 0 : e.length - 1),
        c < 0 && (c = e.length + c),
        c >= e.length)
      ) {
        if (L) return -1;
        c = e.length - 1;
      } else if (c < 0)
        if (L) c = 0;
        else return -1;
      if ((typeof t == "string" && (t = i.from(t, _)), i.isBuffer(t)))
        return t.length === 0 ? -1 : R(e, t, c, _, L);
      if (typeof t == "number")
        return (
          (t = t & 255),
          typeof Uint8Array.prototype.indexOf == "function"
            ? L
              ? Uint8Array.prototype.indexOf.call(e, t, c)
              : Uint8Array.prototype.lastIndexOf.call(e, t, c)
            : R(e, [t], c, _, L)
        );
      throw new TypeError("val must be string, number or Buffer");
    }
    f(S, "bidirectionalIndexOf");
    function R(e, t, c, _, L) {
      let B = 1,
        D = e.length,
        Y = t.length;
      if (
        _ !== void 0 &&
        ((_ = String(_).toLowerCase()),
        _ === "ucs2" || _ === "ucs-2" || _ === "utf16le" || _ === "utf-16le")
      ) {
        if (e.length < 2 || t.length < 2) return -1;
        ((B = 2), (D /= 2), (Y /= 2), (c /= 2));
      }
      function te(J, ee) {
        return B === 1 ? J[ee] : J.readUInt16BE(ee * B);
      }
      f(te, "read");
      let X;
      if (L) {
        let J = -1;
        for (X = c; X < D; X++)
          if (te(e, X) === te(t, J === -1 ? 0 : X - J)) {
            if ((J === -1 && (J = X), X - J + 1 === Y)) return J * B;
          } else (J !== -1 && (X -= X - J), (J = -1));
      } else
        for (c + Y > D && (c = D - Y), X = c; X >= 0; X--) {
          let J = !0;
          for (let ee = 0; ee < Y; ee++)
            if (te(e, X + ee) !== te(t, ee)) {
              J = !1;
              break;
            }
          if (J) return X;
        }
      return -1;
    }
    (f(R, "arrayIndexOf"),
      (i.prototype.includes = f(function (e, t, c) {
        return this.indexOf(e, t, c) !== -1;
      }, "includes")),
      (i.prototype.indexOf = f(function (e, t, c) {
        return S(this, e, t, c, !0);
      }, "indexOf")),
      (i.prototype.lastIndexOf = f(function (e, t, c) {
        return S(this, e, t, c, !1);
      }, "lastIndexOf")));
    function x(e, t, c, _) {
      c = Number(c) || 0;
      let L = e.length - c;
      _ ? ((_ = Number(_)), _ > L && (_ = L)) : (_ = L);
      let B = t.length;
      _ > B / 2 && (_ = B / 2);
      let D;
      for (D = 0; D < _; ++D) {
        let Y = parseInt(t.substr(D * 2, 2), 16);
        if (xe(Y)) return D;
        e[c + D] = Y;
      }
      return D;
    }
    f(x, "hexWrite");
    function C(e, t, c, _) {
      return _e(Re(t, e.length - c), e, c, _);
    }
    f(C, "utf8Write");
    function O(e, t, c, _) {
      return _e(ot(t), e, c, _);
    }
    f(O, "asciiWrite");
    function P(e, t, c, _) {
      return _e($e(t), e, c, _);
    }
    f(P, "base64Write");
    function N(e, t, c, _) {
      return _e(at(t, e.length - c), e, c, _);
    }
    (f(N, "ucs2Write"),
      (i.prototype.write = f(function (e, t, c, _) {
        if (t === void 0) ((_ = "utf8"), (c = this.length), (t = 0));
        else if (c === void 0 && typeof t == "string")
          ((_ = t), (c = this.length), (t = 0));
        else if (isFinite(t))
          ((t = t >>> 0),
            isFinite(c)
              ? ((c = c >>> 0), _ === void 0 && (_ = "utf8"))
              : ((_ = c), (c = void 0)));
        else
          throw new Error(
            "Buffer.write(string, encoding, offset[, length]) is no longer supported",
          );
        let L = this.length - t;
        if (
          ((c === void 0 || c > L) && (c = L),
          (e.length > 0 && (c < 0 || t < 0)) || t > this.length)
        )
          throw new RangeError("Attempt to write outside buffer bounds");
        _ || (_ = "utf8");
        let B = !1;
        for (;;)
          switch (_) {
            case "hex":
              return x(this, e, t, c);
            case "utf8":
            case "utf-8":
              return C(this, e, t, c);
            case "ascii":
            case "latin1":
            case "binary":
              return O(this, e, t, c);
            case "base64":
              return P(this, e, t, c);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return N(this, e, t, c);
            default:
              if (B) throw new TypeError("Unknown encoding: " + _);
              ((_ = ("" + _).toLowerCase()), (B = !0));
          }
      }, "write")),
      (i.prototype.toJSON = f(function () {
        return {
          type: "Buffer",
          data: Array.prototype.slice.call(this._arr || this, 0),
        };
      }, "toJSON")));
    function F(e, t, c) {
      return t === 0 && c === e.length
        ? l.fromByteArray(e)
        : l.fromByteArray(e.slice(t, c));
    }
    f(F, "base64Slice");
    function k(e, t, c) {
      c = Math.min(e.length, c);
      let _ = [],
        L = t;
      for (; L < c; ) {
        let B = e[L],
          D = null,
          Y = B > 239 ? 4 : B > 223 ? 3 : B > 191 ? 2 : 1;
        if (L + Y <= c) {
          let te, X, J, ee;
          switch (Y) {
            case 1:
              B < 128 && (D = B);
              break;
            case 2:
              ((te = e[L + 1]),
                (te & 192) === 128 &&
                  ((ee = ((B & 31) << 6) | (te & 63)), ee > 127 && (D = ee)));
              break;
            case 3:
              ((te = e[L + 1]),
                (X = e[L + 2]),
                (te & 192) === 128 &&
                  (X & 192) === 128 &&
                  ((ee = ((B & 15) << 12) | ((te & 63) << 6) | (X & 63)),
                  ee > 2047 && (ee < 55296 || ee > 57343) && (D = ee)));
              break;
            case 4:
              ((te = e[L + 1]),
                (X = e[L + 2]),
                (J = e[L + 3]),
                (te & 192) === 128 &&
                  (X & 192) === 128 &&
                  (J & 192) === 128 &&
                  ((ee =
                    ((B & 15) << 18) |
                    ((te & 63) << 12) |
                    ((X & 63) << 6) |
                    (J & 63)),
                  ee > 65535 && ee < 1114112 && (D = ee)));
          }
        }
        (D === null
          ? ((D = 65533), (Y = 1))
          : D > 65535 &&
            ((D -= 65536),
            _.push(((D >>> 10) & 1023) | 55296),
            (D = 56320 | (D & 1023))),
          _.push(D),
          (L += Y));
      }
      return q(_);
    }
    f(k, "utf8Slice");
    var U = 4096;
    function q(e) {
      let t = e.length;
      if (t <= U) return String.fromCharCode.apply(String, e);
      let c = "",
        _ = 0;
      for (; _ < t; )
        c += String.fromCharCode.apply(String, e.slice(_, (_ += U)));
      return c;
    }
    f(q, "decodeCodePointsArray");
    function $(e, t, c) {
      let _ = "";
      c = Math.min(e.length, c);
      for (let L = t; L < c; ++L) _ += String.fromCharCode(e[L] & 127);
      return _;
    }
    f($, "asciiSlice");
    function z(e, t, c) {
      let _ = "";
      c = Math.min(e.length, c);
      for (let L = t; L < c; ++L) _ += String.fromCharCode(e[L]);
      return _;
    }
    f(z, "latin1Slice");
    function K(e, t, c) {
      let _ = e.length;
      ((!t || t < 0) && (t = 0), (!c || c < 0 || c > _) && (c = _));
      let L = "";
      for (let B = t; B < c; ++B) L += Kt[e[B]];
      return L;
    }
    f(K, "hexSlice");
    function oe(e, t, c) {
      let _ = e.slice(t, c),
        L = "";
      for (let B = 0; B < _.length - 1; B += 2)
        L += String.fromCharCode(_[B] + _[B + 1] * 256);
      return L;
    }
    (f(oe, "utf16leSlice"),
      (i.prototype.slice = f(function (e, t) {
        let c = this.length;
        ((e = ~~e),
          (t = t === void 0 ? c : ~~t),
          e < 0 ? ((e += c), e < 0 && (e = 0)) : e > c && (e = c),
          t < 0 ? ((t += c), t < 0 && (t = 0)) : t > c && (t = c),
          t < e && (t = e));
        let _ = this.subarray(e, t);
        return (Object.setPrototypeOf(_, i.prototype), _);
      }, "slice")));
    function Z(e, t, c) {
      if (e % 1 !== 0 || e < 0) throw new RangeError("offset is not uint");
      if (e + t > c)
        throw new RangeError("Trying to access beyond buffer length");
    }
    (f(Z, "checkOffset"),
      (i.prototype.readUintLE = i.prototype.readUIntLE =
        f(function (e, t, c) {
          ((e = e >>> 0), (t = t >>> 0), c || Z(e, t, this.length));
          let _ = this[e],
            L = 1,
            B = 0;
          for (; ++B < t && (L *= 256); ) _ += this[e + B] * L;
          return _;
        }, "readUIntLE")),
      (i.prototype.readUintBE = i.prototype.readUIntBE =
        f(function (e, t, c) {
          ((e = e >>> 0), (t = t >>> 0), c || Z(e, t, this.length));
          let _ = this[e + --t],
            L = 1;
          for (; t > 0 && (L *= 256); ) _ += this[e + --t] * L;
          return _;
        }, "readUIntBE")),
      (i.prototype.readUint8 = i.prototype.readUInt8 =
        f(function (e, t) {
          return ((e = e >>> 0), t || Z(e, 1, this.length), this[e]);
        }, "readUInt8")),
      (i.prototype.readUint16LE = i.prototype.readUInt16LE =
        f(function (e, t) {
          return (
            (e = e >>> 0),
            t || Z(e, 2, this.length),
            this[e] | (this[e + 1] << 8)
          );
        }, "readUInt16LE")),
      (i.prototype.readUint16BE = i.prototype.readUInt16BE =
        f(function (e, t) {
          return (
            (e = e >>> 0),
            t || Z(e, 2, this.length),
            (this[e] << 8) | this[e + 1]
          );
        }, "readUInt16BE")),
      (i.prototype.readUint32LE = i.prototype.readUInt32LE =
        f(function (e, t) {
          return (
            (e = e >>> 0),
            t || Z(e, 4, this.length),
            (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) +
              this[e + 3] * 16777216
          );
        }, "readUInt32LE")),
      (i.prototype.readUint32BE = i.prototype.readUInt32BE =
        f(function (e, t) {
          return (
            (e = e >>> 0),
            t || Z(e, 4, this.length),
            this[e] * 16777216 +
              ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
          );
        }, "readUInt32BE")),
      (i.prototype.readBigUInt64LE = de(
        f(function (e) {
          ((e = e >>> 0), ye(e, "offset"));
          let t = this[e],
            c = this[e + 7];
          (t === void 0 || c === void 0) && be(e, this.length - 8);
          let _ =
              t +
              this[++e] * 2 ** 8 +
              this[++e] * 2 ** 16 +
              this[++e] * 2 ** 24,
            L =
              this[++e] +
              this[++e] * 2 ** 8 +
              this[++e] * 2 ** 16 +
              c * 2 ** 24;
          return BigInt(_) + (BigInt(L) << BigInt(32));
        }, "readBigUInt64LE"),
      )),
      (i.prototype.readBigUInt64BE = de(
        f(function (e) {
          ((e = e >>> 0), ye(e, "offset"));
          let t = this[e],
            c = this[e + 7];
          (t === void 0 || c === void 0) && be(e, this.length - 8);
          let _ =
              t * 2 ** 24 +
              this[++e] * 2 ** 16 +
              this[++e] * 2 ** 8 +
              this[++e],
            L =
              this[++e] * 2 ** 24 +
              this[++e] * 2 ** 16 +
              this[++e] * 2 ** 8 +
              c;
          return (BigInt(_) << BigInt(32)) + BigInt(L);
        }, "readBigUInt64BE"),
      )),
      (i.prototype.readIntLE = f(function (e, t, c) {
        ((e = e >>> 0), (t = t >>> 0), c || Z(e, t, this.length));
        let _ = this[e],
          L = 1,
          B = 0;
        for (; ++B < t && (L *= 256); ) _ += this[e + B] * L;
        return ((L *= 128), _ >= L && (_ -= Math.pow(2, 8 * t)), _);
      }, "readIntLE")),
      (i.prototype.readIntBE = f(function (e, t, c) {
        ((e = e >>> 0), (t = t >>> 0), c || Z(e, t, this.length));
        let _ = t,
          L = 1,
          B = this[e + --_];
        for (; _ > 0 && (L *= 256); ) B += this[e + --_] * L;
        return ((L *= 128), B >= L && (B -= Math.pow(2, 8 * t)), B);
      }, "readIntBE")),
      (i.prototype.readInt8 = f(function (e, t) {
        return (
          (e = e >>> 0),
          t || Z(e, 1, this.length),
          this[e] & 128 ? (255 - this[e] + 1) * -1 : this[e]
        );
      }, "readInt8")),
      (i.prototype.readInt16LE = f(function (e, t) {
        ((e = e >>> 0), t || Z(e, 2, this.length));
        let c = this[e] | (this[e + 1] << 8);
        return c & 32768 ? c | 4294901760 : c;
      }, "readInt16LE")),
      (i.prototype.readInt16BE = f(function (e, t) {
        ((e = e >>> 0), t || Z(e, 2, this.length));
        let c = this[e + 1] | (this[e] << 8);
        return c & 32768 ? c | 4294901760 : c;
      }, "readInt16BE")),
      (i.prototype.readInt32LE = f(function (e, t) {
        return (
          (e = e >>> 0),
          t || Z(e, 4, this.length),
          this[e] |
            (this[e + 1] << 8) |
            (this[e + 2] << 16) |
            (this[e + 3] << 24)
        );
      }, "readInt32LE")),
      (i.prototype.readInt32BE = f(function (e, t) {
        return (
          (e = e >>> 0),
          t || Z(e, 4, this.length),
          (this[e] << 24) |
            (this[e + 1] << 16) |
            (this[e + 2] << 8) |
            this[e + 3]
        );
      }, "readInt32BE")),
      (i.prototype.readBigInt64LE = de(
        f(function (e) {
          ((e = e >>> 0), ye(e, "offset"));
          let t = this[e],
            c = this[e + 7];
          (t === void 0 || c === void 0) && be(e, this.length - 8);
          let _ =
            this[e + 4] +
            this[e + 5] * 2 ** 8 +
            this[e + 6] * 2 ** 16 +
            (c << 24);
          return (
            (BigInt(_) << BigInt(32)) +
            BigInt(
              t +
                this[++e] * 2 ** 8 +
                this[++e] * 2 ** 16 +
                this[++e] * 2 ** 24,
            )
          );
        }, "readBigInt64LE"),
      )),
      (i.prototype.readBigInt64BE = de(
        f(function (e) {
          ((e = e >>> 0), ye(e, "offset"));
          let t = this[e],
            c = this[e + 7];
          (t === void 0 || c === void 0) && be(e, this.length - 8);
          let _ =
            (t << 24) + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e];
          return (
            (BigInt(_) << BigInt(32)) +
            BigInt(
              this[++e] * 2 ** 24 +
                this[++e] * 2 ** 16 +
                this[++e] * 2 ** 8 +
                c,
            )
          );
        }, "readBigInt64BE"),
      )),
      (i.prototype.readFloatLE = f(function (e, t) {
        return (
          (e = e >>> 0),
          t || Z(e, 4, this.length),
          a.read(this, e, !0, 23, 4)
        );
      }, "readFloatLE")),
      (i.prototype.readFloatBE = f(function (e, t) {
        return (
          (e = e >>> 0),
          t || Z(e, 4, this.length),
          a.read(this, e, !1, 23, 4)
        );
      }, "readFloatBE")),
      (i.prototype.readDoubleLE = f(function (e, t) {
        return (
          (e = e >>> 0),
          t || Z(e, 8, this.length),
          a.read(this, e, !0, 52, 8)
        );
      }, "readDoubleLE")),
      (i.prototype.readDoubleBE = f(function (e, t) {
        return (
          (e = e >>> 0),
          t || Z(e, 8, this.length),
          a.read(this, e, !1, 52, 8)
        );
      }, "readDoubleBE")));
    function ne(e, t, c, _, L, B) {
      if (!i.isBuffer(e))
        throw new TypeError('"buffer" argument must be a Buffer instance');
      if (t > L || t < B)
        throw new RangeError('"value" argument is out of bounds');
      if (c + _ > e.length) throw new RangeError("Index out of range");
    }
    (f(ne, "checkInt"),
      (i.prototype.writeUintLE = i.prototype.writeUIntLE =
        f(function (e, t, c, _) {
          if (((e = +e), (t = t >>> 0), (c = c >>> 0), !_)) {
            let D = Math.pow(2, 8 * c) - 1;
            ne(this, e, t, c, D, 0);
          }
          let L = 1,
            B = 0;
          for (this[t] = e & 255; ++B < c && (L *= 256); )
            this[t + B] = (e / L) & 255;
          return t + c;
        }, "writeUIntLE")),
      (i.prototype.writeUintBE = i.prototype.writeUIntBE =
        f(function (e, t, c, _) {
          if (((e = +e), (t = t >>> 0), (c = c >>> 0), !_)) {
            let D = Math.pow(2, 8 * c) - 1;
            ne(this, e, t, c, D, 0);
          }
          let L = c - 1,
            B = 1;
          for (this[t + L] = e & 255; --L >= 0 && (B *= 256); )
            this[t + L] = (e / B) & 255;
          return t + c;
        }, "writeUIntBE")),
      (i.prototype.writeUint8 = i.prototype.writeUInt8 =
        f(function (e, t, c) {
          return (
            (e = +e),
            (t = t >>> 0),
            c || ne(this, e, t, 1, 255, 0),
            (this[t] = e & 255),
            t + 1
          );
        }, "writeUInt8")),
      (i.prototype.writeUint16LE = i.prototype.writeUInt16LE =
        f(function (e, t, c) {
          return (
            (e = +e),
            (t = t >>> 0),
            c || ne(this, e, t, 2, 65535, 0),
            (this[t] = e & 255),
            (this[t + 1] = e >>> 8),
            t + 2
          );
        }, "writeUInt16LE")),
      (i.prototype.writeUint16BE = i.prototype.writeUInt16BE =
        f(function (e, t, c) {
          return (
            (e = +e),
            (t = t >>> 0),
            c || ne(this, e, t, 2, 65535, 0),
            (this[t] = e >>> 8),
            (this[t + 1] = e & 255),
            t + 2
          );
        }, "writeUInt16BE")),
      (i.prototype.writeUint32LE = i.prototype.writeUInt32LE =
        f(function (e, t, c) {
          return (
            (e = +e),
            (t = t >>> 0),
            c || ne(this, e, t, 4, 4294967295, 0),
            (this[t + 3] = e >>> 24),
            (this[t + 2] = e >>> 16),
            (this[t + 1] = e >>> 8),
            (this[t] = e & 255),
            t + 4
          );
        }, "writeUInt32LE")),
      (i.prototype.writeUint32BE = i.prototype.writeUInt32BE =
        f(function (e, t, c) {
          return (
            (e = +e),
            (t = t >>> 0),
            c || ne(this, e, t, 4, 4294967295, 0),
            (this[t] = e >>> 24),
            (this[t + 1] = e >>> 16),
            (this[t + 2] = e >>> 8),
            (this[t + 3] = e & 255),
            t + 4
          );
        }, "writeUInt32BE")));
    function Se(e, t, c, _, L) {
      je(t, _, L, e, c, 7);
      let B = Number(t & BigInt(4294967295));
      ((e[c++] = B),
        (B = B >> 8),
        (e[c++] = B),
        (B = B >> 8),
        (e[c++] = B),
        (B = B >> 8),
        (e[c++] = B));
      let D = Number((t >> BigInt(32)) & BigInt(4294967295));
      return (
        (e[c++] = D),
        (D = D >> 8),
        (e[c++] = D),
        (D = D >> 8),
        (e[c++] = D),
        (D = D >> 8),
        (e[c++] = D),
        c
      );
    }
    f(Se, "wrtBigUInt64LE");
    function Ue(e, t, c, _, L) {
      je(t, _, L, e, c, 7);
      let B = Number(t & BigInt(4294967295));
      ((e[c + 7] = B),
        (B = B >> 8),
        (e[c + 6] = B),
        (B = B >> 8),
        (e[c + 5] = B),
        (B = B >> 8),
        (e[c + 4] = B));
      let D = Number((t >> BigInt(32)) & BigInt(4294967295));
      return (
        (e[c + 3] = D),
        (D = D >> 8),
        (e[c + 2] = D),
        (D = D >> 8),
        (e[c + 1] = D),
        (D = D >> 8),
        (e[c] = D),
        c + 8
      );
    }
    (f(Ue, "wrtBigUInt64BE"),
      (i.prototype.writeBigUInt64LE = de(
        f(function (e, t = 0) {
          return Se(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
        }, "writeBigUInt64LE"),
      )),
      (i.prototype.writeBigUInt64BE = de(
        f(function (e, t = 0) {
          return Ue(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
        }, "writeBigUInt64BE"),
      )),
      (i.prototype.writeIntLE = f(function (e, t, c, _) {
        if (((e = +e), (t = t >>> 0), !_)) {
          let Y = Math.pow(2, 8 * c - 1);
          ne(this, e, t, c, Y - 1, -Y);
        }
        let L = 0,
          B = 1,
          D = 0;
        for (this[t] = e & 255; ++L < c && (B *= 256); )
          (e < 0 && D === 0 && this[t + L - 1] !== 0 && (D = 1),
            (this[t + L] = (((e / B) >> 0) - D) & 255));
        return t + c;
      }, "writeIntLE")),
      (i.prototype.writeIntBE = f(function (e, t, c, _) {
        if (((e = +e), (t = t >>> 0), !_)) {
          let Y = Math.pow(2, 8 * c - 1);
          ne(this, e, t, c, Y - 1, -Y);
        }
        let L = c - 1,
          B = 1,
          D = 0;
        for (this[t + L] = e & 255; --L >= 0 && (B *= 256); )
          (e < 0 && D === 0 && this[t + L + 1] !== 0 && (D = 1),
            (this[t + L] = (((e / B) >> 0) - D) & 255));
        return t + c;
      }, "writeIntBE")),
      (i.prototype.writeInt8 = f(function (e, t, c) {
        return (
          (e = +e),
          (t = t >>> 0),
          c || ne(this, e, t, 1, 127, -128),
          e < 0 && (e = 255 + e + 1),
          (this[t] = e & 255),
          t + 1
        );
      }, "writeInt8")),
      (i.prototype.writeInt16LE = f(function (e, t, c) {
        return (
          (e = +e),
          (t = t >>> 0),
          c || ne(this, e, t, 2, 32767, -32768),
          (this[t] = e & 255),
          (this[t + 1] = e >>> 8),
          t + 2
        );
      }, "writeInt16LE")),
      (i.prototype.writeInt16BE = f(function (e, t, c) {
        return (
          (e = +e),
          (t = t >>> 0),
          c || ne(this, e, t, 2, 32767, -32768),
          (this[t] = e >>> 8),
          (this[t + 1] = e & 255),
          t + 2
        );
      }, "writeInt16BE")),
      (i.prototype.writeInt32LE = f(function (e, t, c) {
        return (
          (e = +e),
          (t = t >>> 0),
          c || ne(this, e, t, 4, 2147483647, -2147483648),
          (this[t] = e & 255),
          (this[t + 1] = e >>> 8),
          (this[t + 2] = e >>> 16),
          (this[t + 3] = e >>> 24),
          t + 4
        );
      }, "writeInt32LE")),
      (i.prototype.writeInt32BE = f(function (e, t, c) {
        return (
          (e = +e),
          (t = t >>> 0),
          c || ne(this, e, t, 4, 2147483647, -2147483648),
          e < 0 && (e = 4294967295 + e + 1),
          (this[t] = e >>> 24),
          (this[t + 1] = e >>> 16),
          (this[t + 2] = e >>> 8),
          (this[t + 3] = e & 255),
          t + 4
        );
      }, "writeInt32BE")),
      (i.prototype.writeBigInt64LE = de(
        f(function (e, t = 0) {
          return Se(
            this,
            e,
            t,
            -BigInt("0x8000000000000000"),
            BigInt("0x7fffffffffffffff"),
          );
        }, "writeBigInt64LE"),
      )),
      (i.prototype.writeBigInt64BE = de(
        f(function (e, t = 0) {
          return Ue(
            this,
            e,
            t,
            -BigInt("0x8000000000000000"),
            BigInt("0x7fffffffffffffff"),
          );
        }, "writeBigInt64BE"),
      )));
    function Ne(e, t, c, _, L, B) {
      if (c + _ > e.length) throw new RangeError("Index out of range");
      if (c < 0) throw new RangeError("Index out of range");
    }
    f(Ne, "checkIEEE754");
    function Fe(e, t, c, _, L) {
      return (
        (t = +t),
        (c = c >>> 0),
        L || Ne(e, t, c, 4),
        a.write(e, t, c, _, 23, 4),
        c + 4
      );
    }
    (f(Fe, "writeFloat"),
      (i.prototype.writeFloatLE = f(function (e, t, c) {
        return Fe(this, e, t, !0, c);
      }, "writeFloatLE")),
      (i.prototype.writeFloatBE = f(function (e, t, c) {
        return Fe(this, e, t, !1, c);
      }, "writeFloatBE")));
    function Qe(e, t, c, _, L) {
      return (
        (t = +t),
        (c = c >>> 0),
        L || Ne(e, t, c, 8),
        a.write(e, t, c, _, 52, 8),
        c + 8
      );
    }
    (f(Qe, "writeDouble"),
      (i.prototype.writeDoubleLE = f(function (e, t, c) {
        return Qe(this, e, t, !0, c);
      }, "writeDoubleLE")),
      (i.prototype.writeDoubleBE = f(function (e, t, c) {
        return Qe(this, e, t, !1, c);
      }, "writeDoubleBE")),
      (i.prototype.copy = f(function (e, t, c, _) {
        if (!i.isBuffer(e)) throw new TypeError("argument should be a Buffer");
        if (
          (c || (c = 0),
          !_ && _ !== 0 && (_ = this.length),
          t >= e.length && (t = e.length),
          t || (t = 0),
          _ > 0 && _ < c && (_ = c),
          _ === c || e.length === 0 || this.length === 0)
        )
          return 0;
        if (t < 0) throw new RangeError("targetStart out of bounds");
        if (c < 0 || c >= this.length)
          throw new RangeError("Index out of range");
        if (_ < 0) throw new RangeError("sourceEnd out of bounds");
        (_ > this.length && (_ = this.length),
          e.length - t < _ - c && (_ = e.length - t + c));
        let L = _ - c;
        return (
          this === e && typeof Uint8Array.prototype.copyWithin == "function"
            ? this.copyWithin(t, c, _)
            : Uint8Array.prototype.set.call(e, this.subarray(c, _), t),
          L
        );
      }, "copy")),
      (i.prototype.fill = f(function (e, t, c, _) {
        if (typeof e == "string") {
          if (
            (typeof t == "string"
              ? ((_ = t), (t = 0), (c = this.length))
              : typeof c == "string" && ((_ = c), (c = this.length)),
            _ !== void 0 && typeof _ != "string")
          )
            throw new TypeError("encoding must be a string");
          if (typeof _ == "string" && !i.isEncoding(_))
            throw new TypeError("Unknown encoding: " + _);
          if (e.length === 1) {
            let B = e.charCodeAt(0);
            ((_ === "utf8" && B < 128) || _ === "latin1") && (e = B);
          }
        } else
          typeof e == "number"
            ? (e = e & 255)
            : typeof e == "boolean" && (e = Number(e));
        if (t < 0 || this.length < t || this.length < c)
          throw new RangeError("Out of range index");
        if (c <= t) return this;
        ((t = t >>> 0),
          (c = c === void 0 ? this.length : c >>> 0),
          e || (e = 0));
        let L;
        if (typeof e == "number") for (L = t; L < c; ++L) this[L] = e;
        else {
          let B = i.isBuffer(e) ? e : i.from(e, _),
            D = B.length;
          if (D === 0)
            throw new TypeError(
              'The value "' + e + '" is invalid for argument "value"',
            );
          for (L = 0; L < c - t; ++L) this[L + t] = B[L % D];
        }
        return this;
      }, "fill")));
    var me = {};
    function Le(e, t, c) {
      var _;
      me[e] =
        ((_ = class extends c {
          constructor() {
            (super(),
              Object.defineProperty(this, "message", {
                value: t.apply(this, arguments),
                writable: !0,
                configurable: !0,
              }),
              (this.name = `${this.name} [${e}]`),
              this.stack,
              delete this.name);
          }
          get code() {
            return e;
          }
          set code(L) {
            Object.defineProperty(this, "code", {
              configurable: !0,
              enumerable: !0,
              value: L,
              writable: !0,
            });
          }
          toString() {
            return `${this.name} [${e}]: ${this.message}`;
          }
        }),
        f(_, "NodeError"),
        _);
    }
    (f(Le, "E"),
      Le(
        "ERR_BUFFER_OUT_OF_BOUNDS",
        function (e) {
          return e
            ? `${e} is outside of buffer bounds`
            : "Attempt to access memory outside buffer bounds";
        },
        RangeError,
      ),
      Le(
        "ERR_INVALID_ARG_TYPE",
        function (e, t) {
          return `The "${e}" argument must be of type number. Received type ${typeof t}`;
        },
        TypeError,
      ),
      Le(
        "ERR_OUT_OF_RANGE",
        function (e, t, c) {
          let _ = `The value of "${e}" is out of range.`,
            L = c;
          return (
            Number.isInteger(c) && Math.abs(c) > 2 ** 32
              ? (L = qe(String(c)))
              : typeof c == "bigint" &&
                ((L = String(c)),
                (c > BigInt(2) ** BigInt(32) ||
                  c < -(BigInt(2) ** BigInt(32))) &&
                  (L = qe(L)),
                (L += "n")),
            (_ += ` It must be ${t}. Received ${L}`),
            _
          );
        },
        RangeError,
      ));
    function qe(e) {
      let t = "",
        c = e.length,
        _ = e[0] === "-" ? 1 : 0;
      for (; c >= _ + 4; c -= 3) t = `_${e.slice(c - 3, c)}${t}`;
      return `${e.slice(0, c)}${t}`;
    }
    f(qe, "addNumericalSeparator");
    function st(e, t, c) {
      (ye(t, "offset"),
        (e[t] === void 0 || e[t + c] === void 0) && be(t, e.length - (c + 1)));
    }
    f(st, "checkBounds");
    function je(e, t, c, _, L, B) {
      if (e > c || e < t) {
        let D = typeof t == "bigint" ? "n" : "",
          Y;
        throw (
          B > 3
            ? t === 0 || t === BigInt(0)
              ? (Y = `>= 0${D} and < 2${D} ** ${(B + 1) * 8}${D}`)
              : (Y = `>= -(2${D} ** ${(B + 1) * 8 - 1}${D}) and < 2 ** ${(B + 1) * 8 - 1}${D}`)
            : (Y = `>= ${t}${D} and <= ${c}${D}`),
          new me.ERR_OUT_OF_RANGE("value", Y, e)
        );
      }
      st(_, L, B);
    }
    f(je, "checkIntBI");
    function ye(e, t) {
      if (typeof e != "number")
        throw new me.ERR_INVALID_ARG_TYPE(t, "number", e);
    }
    f(ye, "validateNumber");
    function be(e, t, c) {
      throw Math.floor(e) !== e
        ? (ye(e, c), new me.ERR_OUT_OF_RANGE(c || "offset", "an integer", e))
        : t < 0
          ? new me.ERR_BUFFER_OUT_OF_BOUNDS()
          : new me.ERR_OUT_OF_RANGE(
              c || "offset",
              `>= ${c ? 1 : 0} and <= ${t}`,
              e,
            );
    }
    f(be, "boundsError");
    var zt = /[^+/0-9A-Za-z-_]/g;
    function it(e) {
      if (((e = e.split("=")[0]), (e = e.trim().replace(zt, "")), e.length < 2))
        return "";
      for (; e.length % 4 !== 0; ) e = e + "=";
      return e;
    }
    f(it, "base64clean");
    function Re(e, t) {
      t = t || 1 / 0;
      let c,
        _ = e.length,
        L = null,
        B = [];
      for (let D = 0; D < _; ++D) {
        if (((c = e.charCodeAt(D)), c > 55295 && c < 57344)) {
          if (!L) {
            if (c > 56319) {
              (t -= 3) > -1 && B.push(239, 191, 189);
              continue;
            } else if (D + 1 === _) {
              (t -= 3) > -1 && B.push(239, 191, 189);
              continue;
            }
            L = c;
            continue;
          }
          if (c < 56320) {
            ((t -= 3) > -1 && B.push(239, 191, 189), (L = c));
            continue;
          }
          c = (((L - 55296) << 10) | (c - 56320)) + 65536;
        } else L && (t -= 3) > -1 && B.push(239, 191, 189);
        if (((L = null), c < 128)) {
          if ((t -= 1) < 0) break;
          B.push(c);
        } else if (c < 2048) {
          if ((t -= 2) < 0) break;
          B.push((c >> 6) | 192, (c & 63) | 128);
        } else if (c < 65536) {
          if ((t -= 3) < 0) break;
          B.push((c >> 12) | 224, ((c >> 6) & 63) | 128, (c & 63) | 128);
        } else if (c < 1114112) {
          if ((t -= 4) < 0) break;
          B.push(
            (c >> 18) | 240,
            ((c >> 12) & 63) | 128,
            ((c >> 6) & 63) | 128,
            (c & 63) | 128,
          );
        } else throw new Error("Invalid code point");
      }
      return B;
    }
    f(Re, "utf8ToBytes");
    function ot(e) {
      let t = [];
      for (let c = 0; c < e.length; ++c) t.push(e.charCodeAt(c) & 255);
      return t;
    }
    f(ot, "asciiToBytes");
    function at(e, t) {
      let c,
        _,
        L,
        B = [];
      for (let D = 0; D < e.length && !((t -= 2) < 0); ++D)
        ((c = e.charCodeAt(D)),
          (_ = c >> 8),
          (L = c % 256),
          B.push(L),
          B.push(_));
      return B;
    }
    f(at, "utf16leToBytes");
    function $e(e) {
      return l.toByteArray(it(e));
    }
    f($e, "base64ToBytes");
    function _e(e, t, c, _) {
      let L;
      for (L = 0; L < _ && !(L + c >= t.length || L >= e.length); ++L)
        t[L + c] = e[L];
      return L;
    }
    f(_e, "blitBuffer");
    function le(e, t) {
      return (
        e instanceof t ||
        (e != null &&
          e.constructor != null &&
          e.constructor.name != null &&
          e.constructor.name === t.name)
      );
    }
    f(le, "isInstance");
    function xe(e) {
      return e !== e;
    }
    f(xe, "numberIsNaN");
    var Kt = (function () {
      let e = "0123456789abcdef",
        t = new Array(256);
      for (let c = 0; c < 16; ++c) {
        let _ = c * 16;
        for (let L = 0; L < 16; ++L) t[_ + L] = e[c] + e[L];
      }
      return t;
    })();
    function de(e) {
      return typeof BigInt > "u" ? lt : e;
    }
    f(de, "defineBigIntMethod");
    function lt() {
      throw new Error("BigInt not supported");
    }
    f(lt, "BufferBigIntNotDefined");
  }),
  Pe,
  Ve,
  se,
  H,
  G,
  Q = ie(() => {
    ((Pe = globalThis),
      (Ve = globalThis.setImmediate ?? ((g) => setTimeout(g, 0))),
      (se = globalThis.crypto ?? {}),
      se.subtle ?? (se.subtle = {}),
      (H =
        typeof globalThis.Buffer == "function" &&
        typeof globalThis.Buffer.allocUnsafe == "function"
          ? globalThis.Buffer
          : sr().Buffer),
      (G = globalThis.process ?? {}),
      G.env ?? (G.env = {}));
    try {
      G.nextTick(() => {});
    } catch {
      let g = Promise.resolve();
      G.nextTick = g.then.bind(g);
    }
  }),
  ge = V((g, l) => {
    Q();
    var a = typeof Reflect == "object" ? Reflect : null,
      u =
        a && typeof a.apply == "function"
          ? a.apply
          : f(function (S, R, x) {
              return Function.prototype.apply.call(S, R, x);
            }, "ReflectApply"),
      s;
    a && typeof a.ownKeys == "function"
      ? (s = a.ownKeys)
      : Object.getOwnPropertySymbols
        ? (s = f(function (S) {
            return Object.getOwnPropertyNames(S).concat(
              Object.getOwnPropertySymbols(S),
            );
          }, "ReflectOwnKeys"))
        : (s = f(function (S) {
            return Object.getOwnPropertyNames(S);
          }, "ReflectOwnKeys"));
    function r(S) {
      console && console.warn && console.warn(S);
    }
    f(r, "ProcessEmitWarning");
    var h =
      Number.isNaN ||
      f(function (S) {
        return S !== S;
      }, "NumberIsNaN");
    function i() {
      i.init.call(this);
    }
    (f(i, "EventEmitter"),
      (l.exports = i),
      (l.exports.once = I),
      (i.EventEmitter = i),
      (i.prototype._events = void 0),
      (i.prototype._eventsCount = 0),
      (i.prototype._maxListeners = void 0));
    var d = 10;
    function w(S) {
      if (typeof S != "function")
        throw new TypeError(
          'The "listener" argument must be of type Function. Received type ' +
            typeof S,
        );
    }
    (f(w, "checkListener"),
      Object.defineProperty(i, "defaultMaxListeners", {
        enumerable: !0,
        get: f(function () {
          return d;
        }, "get"),
        set: f(function (S) {
          if (typeof S != "number" || S < 0 || h(S))
            throw new RangeError(
              'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
                S +
                ".",
            );
          d = S;
        }, "set"),
      }),
      (i.init = function () {
        ((this._events === void 0 ||
          this._events === Object.getPrototypeOf(this)._events) &&
          ((this._events = Object.create(null)), (this._eventsCount = 0)),
          (this._maxListeners = this._maxListeners || void 0));
      }),
      (i.prototype.setMaxListeners = f(function (S) {
        if (typeof S != "number" || S < 0 || h(S))
          throw new RangeError(
            'The value of "n" is out of range. It must be a non-negative number. Received ' +
              S +
              ".",
          );
        return ((this._maxListeners = S), this);
      }, "setMaxListeners")));
    function m(S) {
      return S._maxListeners === void 0
        ? i.defaultMaxListeners
        : S._maxListeners;
    }
    (f(m, "_getMaxListeners"),
      (i.prototype.getMaxListeners = f(function () {
        return m(this);
      }, "getMaxListeners")),
      (i.prototype.emit = f(function (S) {
        for (var R = [], x = 1; x < arguments.length; x++) R.push(arguments[x]);
        var C = S === "error",
          O = this._events;
        if (O !== void 0) C = C && O.error === void 0;
        else if (!C) return !1;
        if (C) {
          var P;
          if ((R.length > 0 && (P = R[0]), P instanceof Error)) throw P;
          var N = new Error(
            "Unhandled error." + (P ? " (" + P.message + ")" : ""),
          );
          throw ((N.context = P), N);
        }
        var F = O[S];
        if (F === void 0) return !1;
        if (typeof F == "function") u(F, this, R);
        else
          for (var k = F.length, U = y(F, k), x = 0; x < k; ++x)
            u(U[x], this, R);
        return !0;
      }, "emit")));
    function b(S, R, x, C) {
      var O, P, N;
      if (
        (w(x),
        (P = S._events),
        P === void 0
          ? ((P = S._events = Object.create(null)), (S._eventsCount = 0))
          : (P.newListener !== void 0 &&
              (S.emit("newListener", R, x.listener ? x.listener : x),
              (P = S._events)),
            (N = P[R])),
        N === void 0)
      )
        ((N = P[R] = x), ++S._eventsCount);
      else if (
        (typeof N == "function"
          ? (N = P[R] = C ? [x, N] : [N, x])
          : C
            ? N.unshift(x)
            : N.push(x),
        (O = m(S)),
        O > 0 && N.length > O && !N.warned)
      ) {
        N.warned = !0;
        var F = new Error(
          "Possible EventEmitter memory leak detected. " +
            N.length +
            " " +
            String(R) +
            " listeners added. Use emitter.setMaxListeners() to increase limit",
        );
        ((F.name = "MaxListenersExceededWarning"),
          (F.emitter = S),
          (F.type = R),
          (F.count = N.length),
          r(F));
      }
      return S;
    }
    (f(b, "_addListener"),
      (i.prototype.addListener = f(function (S, R) {
        return b(this, S, R, !1);
      }, "addListener")),
      (i.prototype.on = i.prototype.addListener),
      (i.prototype.prependListener = f(function (S, R) {
        return b(this, S, R, !0);
      }, "prependListener")));
    function p() {
      if (!this.fired)
        return (
          this.target.removeListener(this.type, this.wrapFn),
          (this.fired = !0),
          arguments.length === 0
            ? this.listener.call(this.target)
            : this.listener.apply(this.target, arguments)
        );
    }
    f(p, "onceWrapper");
    function v(S, R, x) {
      var C = { fired: !1, wrapFn: void 0, target: S, type: R, listener: x },
        O = p.bind(C);
      return ((O.listener = x), (C.wrapFn = O), O);
    }
    (f(v, "_onceWrap"),
      (i.prototype.once = f(function (S, R) {
        return (w(R), this.on(S, v(this, S, R)), this);
      }, "once")),
      (i.prototype.prependOnceListener = f(function (S, R) {
        return (w(R), this.prependListener(S, v(this, S, R)), this);
      }, "prependOnceListener")),
      (i.prototype.removeListener = f(function (S, R) {
        var x, C, O, P, N;
        if ((w(R), (C = this._events), C === void 0)) return this;
        if (((x = C[S]), x === void 0)) return this;
        if (x === R || x.listener === R)
          --this._eventsCount === 0
            ? (this._events = Object.create(null))
            : (delete C[S],
              C.removeListener &&
                this.emit("removeListener", S, x.listener || R));
        else if (typeof x != "function") {
          for (O = -1, P = x.length - 1; P >= 0; P--)
            if (x[P] === R || x[P].listener === R) {
              ((N = x[P].listener), (O = P));
              break;
            }
          if (O < 0) return this;
          (O === 0 ? x.shift() : E(x, O),
            x.length === 1 && (C[S] = x[0]),
            C.removeListener !== void 0 &&
              this.emit("removeListener", S, N || R));
        }
        return this;
      }, "removeListener")),
      (i.prototype.off = i.prototype.removeListener),
      (i.prototype.removeAllListeners = f(function (S) {
        var R, x, C;
        if (((x = this._events), x === void 0)) return this;
        if (x.removeListener === void 0)
          return (
            arguments.length === 0
              ? ((this._events = Object.create(null)), (this._eventsCount = 0))
              : x[S] !== void 0 &&
                (--this._eventsCount === 0
                  ? (this._events = Object.create(null))
                  : delete x[S]),
            this
          );
        if (arguments.length === 0) {
          var O = Object.keys(x),
            P;
          for (C = 0; C < O.length; ++C)
            ((P = O[C]), P !== "removeListener" && this.removeAllListeners(P));
          return (
            this.removeAllListeners("removeListener"),
            (this._events = Object.create(null)),
            (this._eventsCount = 0),
            this
          );
        }
        if (((R = x[S]), typeof R == "function")) this.removeListener(S, R);
        else if (R !== void 0)
          for (C = R.length - 1; C >= 0; C--) this.removeListener(S, R[C]);
        return this;
      }, "removeAllListeners")));
    function n(S, R, x) {
      var C = S._events;
      if (C === void 0) return [];
      var O = C[R];
      return O === void 0
        ? []
        : typeof O == "function"
          ? x
            ? [O.listener || O]
            : [O]
          : x
            ? A(O)
            : y(O, O.length);
    }
    (f(n, "_listeners"),
      (i.prototype.listeners = f(function (S) {
        return n(this, S, !0);
      }, "listeners")),
      (i.prototype.rawListeners = f(function (S) {
        return n(this, S, !1);
      }, "rawListeners")),
      (i.listenerCount = function (S, R) {
        return typeof S.listenerCount == "function"
          ? S.listenerCount(R)
          : o.call(S, R);
      }),
      (i.prototype.listenerCount = o));
    function o(S) {
      var R = this._events;
      if (R !== void 0) {
        var x = R[S];
        if (typeof x == "function") return 1;
        if (x !== void 0) return x.length;
      }
      return 0;
    }
    (f(o, "listenerCount"),
      (i.prototype.eventNames = f(function () {
        return this._eventsCount > 0 ? s(this._events) : [];
      }, "eventNames")));
    function y(S, R) {
      for (var x = new Array(R), C = 0; C < R; ++C) x[C] = S[C];
      return x;
    }
    f(y, "arrayClone");
    function E(S, R) {
      for (; R + 1 < S.length; R++) S[R] = S[R + 1];
      S.pop();
    }
    f(E, "spliceOne");
    function A(S) {
      for (var R = new Array(S.length), x = 0; x < R.length; ++x)
        R[x] = S[x].listener || S[x];
      return R;
    }
    f(A, "unwrapListeners");
    function I(S, R) {
      return new Promise(function (x, C) {
        function O(N) {
          (S.removeListener(R, P), C(N));
        }
        f(O, "errorListener");
        function P() {
          (typeof S.removeListener == "function" &&
            S.removeListener("error", O),
            x([].slice.call(arguments)));
        }
        (f(P, "resolver"),
          T(S, R, P, { once: !0 }),
          R !== "error" && M(S, O, { once: !0 }));
      });
    }
    f(I, "once");
    function M(S, R, x) {
      typeof S.on == "function" && T(S, "error", R, x);
    }
    f(M, "addErrorHandlerIfEventEmitter");
    function T(S, R, x, C) {
      if (typeof S.on == "function") C.once ? S.once(R, x) : S.on(R, x);
      else if (typeof S.addEventListener == "function")
        S.addEventListener(
          R,
          f(function O(P) {
            (C.once && S.removeEventListener(R, O), x(P));
          }, "wrapListener"),
        );
      else
        throw new TypeError(
          'The "emitter" argument must be of type EventEmitter. Received type ' +
            typeof S,
        );
    }
    f(T, "eventTargetAgnosticAddListener");
  }),
  Ie = {};
ce(Ie, { default: () => pt });
var pt,
  Be = ie(() => {
    (Q(), (pt = {}));
  });
function Ae(g) {
  let l = 1779033703,
    a = 3144134277,
    u = 1013904242,
    s = 2773480762,
    r = 1359893119,
    h = 2600822924,
    i = 528734635,
    d = 1541459225,
    w = 0,
    m = 0,
    b = [
      1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
      2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
      1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774,
      264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986,
      2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711,
      113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291,
      1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411,
      3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344,
      430227734, 506948616, 659060556, 883997877, 958139571, 1322822218,
      1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424,
      2428436474, 2756734187, 3204031479, 3329325298,
    ],
    p = f((A, I) => (A >>> I) | (A << (32 - I)), "rrot"),
    v = new Uint32Array(64),
    n = new Uint8Array(64),
    o = f(() => {
      for (let O = 0, P = 0; O < 16; O++, P += 4)
        v[O] = (n[P] << 24) | (n[P + 1] << 16) | (n[P + 2] << 8) | n[P + 3];
      for (let O = 16; O < 64; O++) {
        let P = p(v[O - 15], 7) ^ p(v[O - 15], 18) ^ (v[O - 15] >>> 3),
          N = p(v[O - 2], 17) ^ p(v[O - 2], 19) ^ (v[O - 2] >>> 10);
        v[O] = (v[O - 16] + P + v[O - 7] + N) | 0;
      }
      let A = l,
        I = a,
        M = u,
        T = s,
        S = r,
        R = h,
        x = i,
        C = d;
      for (let O = 0; O < 64; O++) {
        let P = p(S, 6) ^ p(S, 11) ^ p(S, 25),
          N = (S & R) ^ (~S & x),
          F = (C + P + N + b[O] + v[O]) | 0,
          k = p(A, 2) ^ p(A, 13) ^ p(A, 22),
          U = (A & I) ^ (A & M) ^ (I & M),
          q = (k + U) | 0;
        ((C = x),
          (x = R),
          (R = S),
          (S = (T + F) | 0),
          (T = M),
          (M = I),
          (I = A),
          (A = (F + q) | 0));
      }
      ((l = (l + A) | 0),
        (a = (a + I) | 0),
        (u = (u + M) | 0),
        (s = (s + T) | 0),
        (r = (r + S) | 0),
        (h = (h + R) | 0),
        (i = (i + x) | 0),
        (d = (d + C) | 0),
        (m = 0));
    }, "process"),
    y = f((A) => {
      typeof A == "string" && (A = new TextEncoder().encode(A));
      for (let I = 0; I < A.length; I++) ((n[m++] = A[I]), m === 64 && o());
      w += A.length;
    }, "add"),
    E = f(() => {
      if (((n[m++] = 128), m == 64 && o(), m + 8 > 64)) {
        for (; m < 64; ) n[m++] = 0;
        o();
      }
      for (; m < 58; ) n[m++] = 0;
      let A = w * 8;
      ((n[m++] = (A / 1099511627776) & 255),
        (n[m++] = (A / 4294967296) & 255),
        (n[m++] = A >>> 24),
        (n[m++] = (A >>> 16) & 255),
        (n[m++] = (A >>> 8) & 255),
        (n[m++] = A & 255),
        o());
      let I = new Uint8Array(32);
      return (
        (I[0] = l >>> 24),
        (I[1] = (l >>> 16) & 255),
        (I[2] = (l >>> 8) & 255),
        (I[3] = l & 255),
        (I[4] = a >>> 24),
        (I[5] = (a >>> 16) & 255),
        (I[6] = (a >>> 8) & 255),
        (I[7] = a & 255),
        (I[8] = u >>> 24),
        (I[9] = (u >>> 16) & 255),
        (I[10] = (u >>> 8) & 255),
        (I[11] = u & 255),
        (I[12] = s >>> 24),
        (I[13] = (s >>> 16) & 255),
        (I[14] = (s >>> 8) & 255),
        (I[15] = s & 255),
        (I[16] = r >>> 24),
        (I[17] = (r >>> 16) & 255),
        (I[18] = (r >>> 8) & 255),
        (I[19] = r & 255),
        (I[20] = h >>> 24),
        (I[21] = (h >>> 16) & 255),
        (I[22] = (h >>> 8) & 255),
        (I[23] = h & 255),
        (I[24] = i >>> 24),
        (I[25] = (i >>> 16) & 255),
        (I[26] = (i >>> 8) & 255),
        (I[27] = i & 255),
        (I[28] = d >>> 24),
        (I[29] = (d >>> 16) & 255),
        (I[30] = (d >>> 8) & 255),
        (I[31] = d & 255),
        I
      );
    }, "digest");
  return g === void 0 ? { add: y, digest: E } : (y(g), E());
}
var ir = ie(() => {
    (Q(), f(Ae, "sha256"));
  }),
  pe,
  He,
  or = ie(() => {
    (Q(),
      (pe = class ae {
        constructor() {
          (W(this, "_dataLength", 0),
            W(this, "_bufferLength", 0),
            W(this, "_state", new Int32Array(4)),
            W(this, "_buffer", new ArrayBuffer(68)),
            W(this, "_buffer8"),
            W(this, "_buffer32"),
            (this._buffer8 = new Uint8Array(this._buffer, 0, 68)),
            (this._buffer32 = new Uint32Array(this._buffer, 0, 17)),
            this.start());
        }
        static hashByteArray(l, a = !1) {
          return this.onePassHasher.start().appendByteArray(l).end(a);
        }
        static hashStr(l, a = !1) {
          return this.onePassHasher.start().appendStr(l).end(a);
        }
        static hashAsciiStr(l, a = !1) {
          return this.onePassHasher.start().appendAsciiStr(l).end(a);
        }
        static _hex(l) {
          let a = ae.hexChars,
            u = ae.hexOut,
            s,
            r,
            h,
            i;
          for (i = 0; i < 4; i += 1)
            for (r = i * 8, s = l[i], h = 0; h < 8; h += 2)
              ((u[r + 1 + h] = a.charAt(s & 15)),
                (s >>>= 4),
                (u[r + 0 + h] = a.charAt(s & 15)),
                (s >>>= 4));
          return u.join("");
        }
        static _md5cycle(l, a) {
          let u = l[0],
            s = l[1],
            r = l[2],
            h = l[3];
          ((u += (((s & r) | (~s & h)) + a[0] - 680876936) | 0),
            (u = (((u << 7) | (u >>> 25)) + s) | 0),
            (h += (((u & s) | (~u & r)) + a[1] - 389564586) | 0),
            (h = (((h << 12) | (h >>> 20)) + u) | 0),
            (r += (((h & u) | (~h & s)) + a[2] + 606105819) | 0),
            (r = (((r << 17) | (r >>> 15)) + h) | 0),
            (s += (((r & h) | (~r & u)) + a[3] - 1044525330) | 0),
            (s = (((s << 22) | (s >>> 10)) + r) | 0),
            (u += (((s & r) | (~s & h)) + a[4] - 176418897) | 0),
            (u = (((u << 7) | (u >>> 25)) + s) | 0),
            (h += (((u & s) | (~u & r)) + a[5] + 1200080426) | 0),
            (h = (((h << 12) | (h >>> 20)) + u) | 0),
            (r += (((h & u) | (~h & s)) + a[6] - 1473231341) | 0),
            (r = (((r << 17) | (r >>> 15)) + h) | 0),
            (s += (((r & h) | (~r & u)) + a[7] - 45705983) | 0),
            (s = (((s << 22) | (s >>> 10)) + r) | 0),
            (u += (((s & r) | (~s & h)) + a[8] + 1770035416) | 0),
            (u = (((u << 7) | (u >>> 25)) + s) | 0),
            (h += (((u & s) | (~u & r)) + a[9] - 1958414417) | 0),
            (h = (((h << 12) | (h >>> 20)) + u) | 0),
            (r += (((h & u) | (~h & s)) + a[10] - 42063) | 0),
            (r = (((r << 17) | (r >>> 15)) + h) | 0),
            (s += (((r & h) | (~r & u)) + a[11] - 1990404162) | 0),
            (s = (((s << 22) | (s >>> 10)) + r) | 0),
            (u += (((s & r) | (~s & h)) + a[12] + 1804603682) | 0),
            (u = (((u << 7) | (u >>> 25)) + s) | 0),
            (h += (((u & s) | (~u & r)) + a[13] - 40341101) | 0),
            (h = (((h << 12) | (h >>> 20)) + u) | 0),
            (r += (((h & u) | (~h & s)) + a[14] - 1502002290) | 0),
            (r = (((r << 17) | (r >>> 15)) + h) | 0),
            (s += (((r & h) | (~r & u)) + a[15] + 1236535329) | 0),
            (s = (((s << 22) | (s >>> 10)) + r) | 0),
            (u += (((s & h) | (r & ~h)) + a[1] - 165796510) | 0),
            (u = (((u << 5) | (u >>> 27)) + s) | 0),
            (h += (((u & r) | (s & ~r)) + a[6] - 1069501632) | 0),
            (h = (((h << 9) | (h >>> 23)) + u) | 0),
            (r += (((h & s) | (u & ~s)) + a[11] + 643717713) | 0),
            (r = (((r << 14) | (r >>> 18)) + h) | 0),
            (s += (((r & u) | (h & ~u)) + a[0] - 373897302) | 0),
            (s = (((s << 20) | (s >>> 12)) + r) | 0),
            (u += (((s & h) | (r & ~h)) + a[5] - 701558691) | 0),
            (u = (((u << 5) | (u >>> 27)) + s) | 0),
            (h += (((u & r) | (s & ~r)) + a[10] + 38016083) | 0),
            (h = (((h << 9) | (h >>> 23)) + u) | 0),
            (r += (((h & s) | (u & ~s)) + a[15] - 660478335) | 0),
            (r = (((r << 14) | (r >>> 18)) + h) | 0),
            (s += (((r & u) | (h & ~u)) + a[4] - 405537848) | 0),
            (s = (((s << 20) | (s >>> 12)) + r) | 0),
            (u += (((s & h) | (r & ~h)) + a[9] + 568446438) | 0),
            (u = (((u << 5) | (u >>> 27)) + s) | 0),
            (h += (((u & r) | (s & ~r)) + a[14] - 1019803690) | 0),
            (h = (((h << 9) | (h >>> 23)) + u) | 0),
            (r += (((h & s) | (u & ~s)) + a[3] - 187363961) | 0),
            (r = (((r << 14) | (r >>> 18)) + h) | 0),
            (s += (((r & u) | (h & ~u)) + a[8] + 1163531501) | 0),
            (s = (((s << 20) | (s >>> 12)) + r) | 0),
            (u += (((s & h) | (r & ~h)) + a[13] - 1444681467) | 0),
            (u = (((u << 5) | (u >>> 27)) + s) | 0),
            (h += (((u & r) | (s & ~r)) + a[2] - 51403784) | 0),
            (h = (((h << 9) | (h >>> 23)) + u) | 0),
            (r += (((h & s) | (u & ~s)) + a[7] + 1735328473) | 0),
            (r = (((r << 14) | (r >>> 18)) + h) | 0),
            (s += (((r & u) | (h & ~u)) + a[12] - 1926607734) | 0),
            (s = (((s << 20) | (s >>> 12)) + r) | 0),
            (u += ((s ^ r ^ h) + a[5] - 378558) | 0),
            (u = (((u << 4) | (u >>> 28)) + s) | 0),
            (h += ((u ^ s ^ r) + a[8] - 2022574463) | 0),
            (h = (((h << 11) | (h >>> 21)) + u) | 0),
            (r += ((h ^ u ^ s) + a[11] + 1839030562) | 0),
            (r = (((r << 16) | (r >>> 16)) + h) | 0),
            (s += ((r ^ h ^ u) + a[14] - 35309556) | 0),
            (s = (((s << 23) | (s >>> 9)) + r) | 0),
            (u += ((s ^ r ^ h) + a[1] - 1530992060) | 0),
            (u = (((u << 4) | (u >>> 28)) + s) | 0),
            (h += ((u ^ s ^ r) + a[4] + 1272893353) | 0),
            (h = (((h << 11) | (h >>> 21)) + u) | 0),
            (r += ((h ^ u ^ s) + a[7] - 155497632) | 0),
            (r = (((r << 16) | (r >>> 16)) + h) | 0),
            (s += ((r ^ h ^ u) + a[10] - 1094730640) | 0),
            (s = (((s << 23) | (s >>> 9)) + r) | 0),
            (u += ((s ^ r ^ h) + a[13] + 681279174) | 0),
            (u = (((u << 4) | (u >>> 28)) + s) | 0),
            (h += ((u ^ s ^ r) + a[0] - 358537222) | 0),
            (h = (((h << 11) | (h >>> 21)) + u) | 0),
            (r += ((h ^ u ^ s) + a[3] - 722521979) | 0),
            (r = (((r << 16) | (r >>> 16)) + h) | 0),
            (s += ((r ^ h ^ u) + a[6] + 76029189) | 0),
            (s = (((s << 23) | (s >>> 9)) + r) | 0),
            (u += ((s ^ r ^ h) + a[9] - 640364487) | 0),
            (u = (((u << 4) | (u >>> 28)) + s) | 0),
            (h += ((u ^ s ^ r) + a[12] - 421815835) | 0),
            (h = (((h << 11) | (h >>> 21)) + u) | 0),
            (r += ((h ^ u ^ s) + a[15] + 530742520) | 0),
            (r = (((r << 16) | (r >>> 16)) + h) | 0),
            (s += ((r ^ h ^ u) + a[2] - 995338651) | 0),
            (s = (((s << 23) | (s >>> 9)) + r) | 0),
            (u += ((r ^ (s | ~h)) + a[0] - 198630844) | 0),
            (u = (((u << 6) | (u >>> 26)) + s) | 0),
            (h += ((s ^ (u | ~r)) + a[7] + 1126891415) | 0),
            (h = (((h << 10) | (h >>> 22)) + u) | 0),
            (r += ((u ^ (h | ~s)) + a[14] - 1416354905) | 0),
            (r = (((r << 15) | (r >>> 17)) + h) | 0),
            (s += ((h ^ (r | ~u)) + a[5] - 57434055) | 0),
            (s = (((s << 21) | (s >>> 11)) + r) | 0),
            (u += ((r ^ (s | ~h)) + a[12] + 1700485571) | 0),
            (u = (((u << 6) | (u >>> 26)) + s) | 0),
            (h += ((s ^ (u | ~r)) + a[3] - 1894986606) | 0),
            (h = (((h << 10) | (h >>> 22)) + u) | 0),
            (r += ((u ^ (h | ~s)) + a[10] - 1051523) | 0),
            (r = (((r << 15) | (r >>> 17)) + h) | 0),
            (s += ((h ^ (r | ~u)) + a[1] - 2054922799) | 0),
            (s = (((s << 21) | (s >>> 11)) + r) | 0),
            (u += ((r ^ (s | ~h)) + a[8] + 1873313359) | 0),
            (u = (((u << 6) | (u >>> 26)) + s) | 0),
            (h += ((s ^ (u | ~r)) + a[15] - 30611744) | 0),
            (h = (((h << 10) | (h >>> 22)) + u) | 0),
            (r += ((u ^ (h | ~s)) + a[6] - 1560198380) | 0),
            (r = (((r << 15) | (r >>> 17)) + h) | 0),
            (s += ((h ^ (r | ~u)) + a[13] + 1309151649) | 0),
            (s = (((s << 21) | (s >>> 11)) + r) | 0),
            (u += ((r ^ (s | ~h)) + a[4] - 145523070) | 0),
            (u = (((u << 6) | (u >>> 26)) + s) | 0),
            (h += ((s ^ (u | ~r)) + a[11] - 1120210379) | 0),
            (h = (((h << 10) | (h >>> 22)) + u) | 0),
            (r += ((u ^ (h | ~s)) + a[2] + 718787259) | 0),
            (r = (((r << 15) | (r >>> 17)) + h) | 0),
            (s += ((h ^ (r | ~u)) + a[9] - 343485551) | 0),
            (s = (((s << 21) | (s >>> 11)) + r) | 0),
            (l[0] = (u + l[0]) | 0),
            (l[1] = (s + l[1]) | 0),
            (l[2] = (r + l[2]) | 0),
            (l[3] = (h + l[3]) | 0));
        }
        start() {
          return (
            (this._dataLength = 0),
            (this._bufferLength = 0),
            this._state.set(ae.stateIdentity),
            this
          );
        }
        appendStr(l) {
          let a = this._buffer8,
            u = this._buffer32,
            s = this._bufferLength,
            r,
            h;
          for (h = 0; h < l.length; h += 1) {
            if (((r = l.charCodeAt(h)), r < 128)) a[s++] = r;
            else if (r < 2048)
              ((a[s++] = (r >>> 6) + 192), (a[s++] = (r & 63) | 128));
            else if (r < 55296 || r > 56319)
              ((a[s++] = (r >>> 12) + 224),
                (a[s++] = ((r >>> 6) & 63) | 128),
                (a[s++] = (r & 63) | 128));
            else {
              if (
                ((r = (r - 55296) * 1024 + (l.charCodeAt(++h) - 56320) + 65536),
                r > 1114111)
              )
                throw new Error(
                  "Unicode standard supports code points up to U+10FFFF",
                );
              ((a[s++] = (r >>> 18) + 240),
                (a[s++] = ((r >>> 12) & 63) | 128),
                (a[s++] = ((r >>> 6) & 63) | 128),
                (a[s++] = (r & 63) | 128));
            }
            s >= 64 &&
              ((this._dataLength += 64),
              ae._md5cycle(this._state, u),
              (s -= 64),
              (u[0] = u[16]));
          }
          return ((this._bufferLength = s), this);
        }
        appendAsciiStr(l) {
          let a = this._buffer8,
            u = this._buffer32,
            s = this._bufferLength,
            r,
            h = 0;
          for (;;) {
            for (r = Math.min(l.length - h, 64 - s); r--; )
              a[s++] = l.charCodeAt(h++);
            if (s < 64) break;
            ((this._dataLength += 64), ae._md5cycle(this._state, u), (s = 0));
          }
          return ((this._bufferLength = s), this);
        }
        appendByteArray(l) {
          let a = this._buffer8,
            u = this._buffer32,
            s = this._bufferLength,
            r,
            h = 0;
          for (;;) {
            for (r = Math.min(l.length - h, 64 - s); r--; ) a[s++] = l[h++];
            if (s < 64) break;
            ((this._dataLength += 64), ae._md5cycle(this._state, u), (s = 0));
          }
          return ((this._bufferLength = s), this);
        }
        getState() {
          let l = this._state;
          return {
            buffer: String.fromCharCode.apply(null, Array.from(this._buffer8)),
            buflen: this._bufferLength,
            length: this._dataLength,
            state: [l[0], l[1], l[2], l[3]],
          };
        }
        setState(l) {
          let a = l.buffer,
            u = l.state,
            s = this._state,
            r;
          for (
            this._dataLength = l.length,
              this._bufferLength = l.buflen,
              s[0] = u[0],
              s[1] = u[1],
              s[2] = u[2],
              s[3] = u[3],
              r = 0;
            r < a.length;
            r += 1
          )
            this._buffer8[r] = a.charCodeAt(r);
        }
        end(l = !1) {
          let a = this._bufferLength,
            u = this._buffer8,
            s = this._buffer32,
            r = (a >> 2) + 1;
          this._dataLength += a;
          let h = this._dataLength * 8;
          if (
            ((u[a] = 128),
            (u[a + 1] = u[a + 2] = u[a + 3] = 0),
            s.set(ae.buffer32Identity.subarray(r), r),
            a > 55 &&
              (ae._md5cycle(this._state, s), s.set(ae.buffer32Identity)),
            h <= 4294967295)
          )
            s[14] = h;
          else {
            let i = h.toString(16).match(/(.*?)(.{0,8})$/);
            if (i === null) return;
            let d = parseInt(i[2], 16),
              w = parseInt(i[1], 16) || 0;
            ((s[14] = d), (s[15] = w));
          }
          return (
            ae._md5cycle(this._state, s),
            l ? this._state : ae._hex(this._state)
          );
        }
      }),
      f(pe, "Md5"),
      W(
        pe,
        "stateIdentity",
        new Int32Array([1732584193, -271733879, -1732584194, 271733878]),
      ),
      W(
        pe,
        "buffer32Identity",
        new Int32Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
      ),
      W(pe, "hexChars", "0123456789abcdef"),
      W(pe, "hexOut", []),
      W(pe, "onePassHasher", new pe()),
      (He = pe));
  }),
  ze = {};
ce(ze, { createHash: () => gt, createHmac: () => mt, randomBytes: () => yt });
function yt(g) {
  return se.getRandomValues(H.alloc(g));
}
function gt(g) {
  if (g === "sha256")
    return {
      update: f(function (l) {
        return {
          digest: f(function () {
            return H.from(Ae(l));
          }, "digest"),
        };
      }, "update"),
    };
  if (g === "md5")
    return {
      update: f(function (l) {
        return {
          digest: f(function () {
            return typeof l == "string" ? He.hashStr(l) : He.hashByteArray(l);
          }, "digest"),
        };
      }, "update"),
    };
  throw new Error(`Hash type '${g}' not supported`);
}
function mt(g, l) {
  if (g !== "sha256")
    throw new Error(`Only sha256 is supported (requested: '${g}')`);
  return {
    update: f(function (a) {
      return {
        digest: f(function () {
          (typeof l == "string" && (l = new TextEncoder().encode(l)),
            typeof a == "string" && (a = new TextEncoder().encode(a)));
          let u = l.length;
          if (u > 64) l = Ae(l);
          else if (u < 64) {
            let d = new Uint8Array(64);
            (d.set(l), (l = d));
          }
          let s = new Uint8Array(64),
            r = new Uint8Array(64);
          for (let d = 0; d < 64; d++) ((s[d] = 54 ^ l[d]), (r[d] = 92 ^ l[d]));
          let h = new Uint8Array(a.length + 64);
          (h.set(s, 0), h.set(a, 64));
          let i = new Uint8Array(96);
          return (i.set(r, 0), i.set(Ae(h), 64), H.from(Ae(i)));
        }, "digest"),
      };
    }, "update"),
  };
}
var bt = ie(() => {
    (Q(),
      ir(),
      or(),
      f(yt, "randomBytes"),
      f(gt, "createHash"),
      f(mt, "createHmac"));
  }),
  vt = V((g) => {
    (Q(),
      (g.parse = function (s, r) {
        return new a(s, r).parse();
      }));
    var l = class wt {
      constructor(r, h) {
        ((this.source = r),
          (this.transform = h || u),
          (this.position = 0),
          (this.entries = []),
          (this.recorded = []),
          (this.dimension = 0));
      }
      isEof() {
        return this.position >= this.source.length;
      }
      nextCharacter() {
        var r = this.source[this.position++];
        return r === "\\"
          ? { value: this.source[this.position++], escaped: !0 }
          : { value: r, escaped: !1 };
      }
      record(r) {
        this.recorded.push(r);
      }
      newEntry(r) {
        var h;
        (this.recorded.length > 0 || r) &&
          ((h = this.recorded.join("")),
          h === "NULL" && !r && (h = null),
          h !== null && (h = this.transform(h)),
          this.entries.push(h),
          (this.recorded = []));
      }
      consumeDimensions() {
        if (this.source[0] === "[")
          for (; !this.isEof(); ) {
            var r = this.nextCharacter();
            if (r.value === "=") break;
          }
      }
      parse(r) {
        var h, i, d;
        for (this.consumeDimensions(); !this.isEof(); )
          if (((h = this.nextCharacter()), h.value === "{" && !d))
            (this.dimension++,
              this.dimension > 1 &&
                ((i = new wt(
                  this.source.substr(this.position - 1),
                  this.transform,
                )),
                this.entries.push(i.parse(!0)),
                (this.position += i.position - 2)));
          else if (h.value === "}" && !d) {
            if ((this.dimension--, !this.dimension && (this.newEntry(), r)))
              return this.entries;
          } else
            h.value === '"' && !h.escaped
              ? (d && this.newEntry(!0), (d = !d))
              : h.value === "," && !d
                ? this.newEntry()
                : this.record(h.value);
        if (this.dimension !== 0)
          throw new Error("array dimension not balanced");
        return this.entries;
      }
    };
    f(l, "ArrayParser");
    var a = l;
    function u(s) {
      return s;
    }
    f(u, "identity");
  }),
  Et = V((g, l) => {
    Q();
    var a = vt();
    l.exports = {
      create: f(function (u, s) {
        return {
          parse: f(function () {
            return a.parse(u, s);
          }, "parse"),
        };
      }, "create"),
    };
  }),
  ar = V((g, l) => {
    Q();
    var a =
        /(\d{1,})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})(\.\d{1,})?.*?( BC)?$/,
      u = /^(\d{1,})-(\d{2})-(\d{2})( BC)?$/,
      s = /([Z+-])(\d{2})?:?(\d{2})?:?(\d{2})?/,
      r = /^-?infinity$/;
    l.exports = f(function (m) {
      if (r.test(m)) return Number(m.replace("i", "I"));
      var b = a.exec(m);
      if (!b) return h(m) || null;
      var p = !!b[8],
        v = parseInt(b[1], 10);
      p && (v = d(v));
      var n = parseInt(b[2], 10) - 1,
        o = b[3],
        y = parseInt(b[4], 10),
        E = parseInt(b[5], 10),
        A = parseInt(b[6], 10),
        I = b[7];
      I = I ? 1e3 * parseFloat(I) : 0;
      var M,
        T = i(m);
      return (
        T != null
          ? ((M = new Date(Date.UTC(v, n, o, y, E, A, I))),
            w(v) && M.setUTCFullYear(v),
            T !== 0 && M.setTime(M.getTime() - T))
          : ((M = new Date(v, n, o, y, E, A, I)), w(v) && M.setFullYear(v)),
        M
      );
    }, "parseDate");
    function h(m) {
      var b = u.exec(m);
      if (b) {
        var p = parseInt(b[1], 10),
          v = !!b[4];
        v && (p = d(p));
        var n = parseInt(b[2], 10) - 1,
          o = b[3],
          y = new Date(p, n, o);
        return (w(p) && y.setFullYear(p), y);
      }
    }
    f(h, "getDate");
    function i(m) {
      if (m.endsWith("+00")) return 0;
      var b = s.exec(m.split(" ")[1]);
      if (b) {
        var p = b[1];
        if (p === "Z") return 0;
        var v = p === "-" ? -1 : 1,
          n =
            parseInt(b[2], 10) * 3600 +
            parseInt(b[3] || 0, 10) * 60 +
            parseInt(b[4] || 0, 10);
        return n * v * 1e3;
      }
    }
    f(i, "timeZoneOffset");
    function d(m) {
      return -(m - 1);
    }
    f(d, "bcYearToNegativeYear");
    function w(m) {
      return m >= 0 && m < 100;
    }
    f(w, "is0To99");
  }),
  lr = V((g, l) => {
    (Q(), (l.exports = u));
    var a = Object.prototype.hasOwnProperty;
    function u(s) {
      for (var r = 1; r < arguments.length; r++) {
        var h = arguments[r];
        for (var i in h) a.call(h, i) && (s[i] = h[i]);
      }
      return s;
    }
    f(u, "extend");
  }),
  ur = V((g, l) => {
    Q();
    var a = lr();
    l.exports = u;
    function u(A) {
      if (!(this instanceof u)) return new u(A);
      a(this, E(A));
    }
    f(u, "PostgresInterval");
    var s = ["seconds", "minutes", "hours", "days", "months", "years"];
    u.prototype.toPostgres = function () {
      var A = s.filter(this.hasOwnProperty, this);
      return (
        this.milliseconds && A.indexOf("seconds") < 0 && A.push("seconds"),
        A.length === 0
          ? "0"
          : A.map(function (I) {
              var M = this[I] || 0;
              return (
                I === "seconds" &&
                  this.milliseconds &&
                  (M = (M + this.milliseconds / 1e3)
                    .toFixed(6)
                    .replace(/\.?0+$/, "")),
                M + " " + I
              );
            }, this).join(" ")
      );
    };
    var r = {
        years: "Y",
        months: "M",
        days: "D",
        hours: "H",
        minutes: "M",
        seconds: "S",
      },
      h = ["years", "months", "days"],
      i = ["hours", "minutes", "seconds"];
    u.prototype.toISOString = u.prototype.toISO = function () {
      var A = h.map(M, this).join(""),
        I = i.map(M, this).join("");
      return "P" + A + "T" + I;
      function M(T) {
        var S = this[T] || 0;
        return (
          T === "seconds" &&
            this.milliseconds &&
            (S = (S + this.milliseconds / 1e3).toFixed(6).replace(/0+$/, "")),
          S + r[T]
        );
      }
    };
    var d = "([+-]?\\d+)",
      w = d + "\\s+years?",
      m = d + "\\s+mons?",
      b = d + "\\s+days?",
      p = "([+-])?([\\d]*):(\\d\\d):(\\d\\d)\\.?(\\d{1,6})?",
      v = new RegExp(
        [w, m, b, p]
          .map(function (A) {
            return "(" + A + ")?";
          })
          .join("\\s*"),
      ),
      n = {
        years: 2,
        months: 4,
        days: 6,
        hours: 9,
        minutes: 10,
        seconds: 11,
        milliseconds: 12,
      },
      o = ["hours", "minutes", "seconds", "milliseconds"];
    function y(A) {
      var I = A + "000000".slice(A.length);
      return parseInt(I, 10) / 1e3;
    }
    f(y, "parseMilliseconds");
    function E(A) {
      if (!A) return {};
      var I = v.exec(A),
        M = I[8] === "-";
      return Object.keys(n).reduce(function (T, S) {
        var R = n[S],
          x = I[R];
        return (
          !x ||
            ((x = S === "milliseconds" ? y(x) : parseInt(x, 10)), !x) ||
            (M && ~o.indexOf(S) && (x *= -1), (T[S] = x)),
          T
        );
      }, {});
    }
    f(E, "parse");
  }),
  cr = V((g, l) => {
    (Q(),
      (l.exports = f(function (a) {
        if (/^\\x/.test(a)) return new H(a.substr(2), "hex");
        for (var u = "", s = 0; s < a.length; )
          if (a[s] !== "\\") ((u += a[s]), ++s);
          else if (/[0-7]{3}/.test(a.substr(s + 1, 3)))
            ((u += String.fromCharCode(parseInt(a.substr(s + 1, 3), 8))),
              (s += 4));
          else {
            for (var r = 1; s + r < a.length && a[s + r] === "\\"; ) r++;
            for (var h = 0; h < Math.floor(r / 2); ++h) u += "\\";
            s += Math.floor(r / 2) * 2;
          }
        return new H(u, "binary");
      }, "parseBytea")));
  }),
  hr = V((g, l) => {
    Q();
    var a = vt(),
      u = Et(),
      s = ar(),
      r = ur(),
      h = cr();
    function i(C) {
      return f(function (O) {
        return O === null ? O : C(O);
      }, "nullAllowed");
    }
    f(i, "allowNull");
    function d(C) {
      return C === null
        ? C
        : C === "TRUE" ||
            C === "t" ||
            C === "true" ||
            C === "y" ||
            C === "yes" ||
            C === "on" ||
            C === "1";
    }
    f(d, "parseBool");
    function w(C) {
      return C ? a.parse(C, d) : null;
    }
    f(w, "parseBoolArray");
    function m(C) {
      return parseInt(C, 10);
    }
    f(m, "parseBaseTenInt");
    function b(C) {
      return C ? a.parse(C, i(m)) : null;
    }
    f(b, "parseIntegerArray");
    function p(C) {
      return C
        ? a.parse(
            C,
            i(function (O) {
              return M(O).trim();
            }),
          )
        : null;
    }
    f(p, "parseBigIntegerArray");
    var v = f(function (C) {
        if (!C) return null;
        var O = u.create(C, function (P) {
          return (P !== null && (P = S(P)), P);
        });
        return O.parse();
      }, "parsePointArray"),
      n = f(function (C) {
        if (!C) return null;
        var O = u.create(C, function (P) {
          return (P !== null && (P = parseFloat(P)), P);
        });
        return O.parse();
      }, "parseFloatArray"),
      o = f(function (C) {
        if (!C) return null;
        var O = u.create(C);
        return O.parse();
      }, "parseStringArray"),
      y = f(function (C) {
        if (!C) return null;
        var O = u.create(C, function (P) {
          return (P !== null && (P = s(P)), P);
        });
        return O.parse();
      }, "parseDateArray"),
      E = f(function (C) {
        if (!C) return null;
        var O = u.create(C, function (P) {
          return (P !== null && (P = r(P)), P);
        });
        return O.parse();
      }, "parseIntervalArray"),
      A = f(function (C) {
        return C ? a.parse(C, i(h)) : null;
      }, "parseByteAArray"),
      I = f(function (C) {
        return parseInt(C, 10);
      }, "parseInteger"),
      M = f(function (C) {
        var O = String(C);
        return /^\d+$/.test(O) ? O : C;
      }, "parseBigInteger"),
      T = f(function (C) {
        return C ? a.parse(C, i(JSON.parse)) : null;
      }, "parseJsonArray"),
      S = f(function (C) {
        return C[0] !== "("
          ? null
          : ((C = C.substring(1, C.length - 1).split(",")),
            { x: parseFloat(C[0]), y: parseFloat(C[1]) });
      }, "parsePoint"),
      R = f(function (C) {
        if (C[0] !== "<" && C[1] !== "(") return null;
        for (var O = "(", P = "", N = !1, F = 2; F < C.length - 1; F++) {
          if ((N || (O += C[F]), C[F] === ")")) {
            N = !0;
            continue;
          } else if (!N) continue;
          C[F] !== "," && (P += C[F]);
        }
        var k = S(O);
        return ((k.radius = parseFloat(P)), k);
      }, "parseCircle"),
      x = f(function (C) {
        (C(20, M),
          C(21, I),
          C(23, I),
          C(26, I),
          C(700, parseFloat),
          C(701, parseFloat),
          C(16, d),
          C(1082, s),
          C(1114, s),
          C(1184, s),
          C(600, S),
          C(651, o),
          C(718, R),
          C(1e3, w),
          C(1001, A),
          C(1005, b),
          C(1007, b),
          C(1028, b),
          C(1016, p),
          C(1017, v),
          C(1021, n),
          C(1022, n),
          C(1231, n),
          C(1014, o),
          C(1015, o),
          C(1008, o),
          C(1009, o),
          C(1040, o),
          C(1041, o),
          C(1115, y),
          C(1182, y),
          C(1185, y),
          C(1186, r),
          C(1187, E),
          C(17, h),
          C(114, JSON.parse.bind(JSON)),
          C(3802, JSON.parse.bind(JSON)),
          C(199, T),
          C(3807, T),
          C(3907, o),
          C(2951, o),
          C(791, o),
          C(1183, o),
          C(1270, o));
      }, "init");
    l.exports = { init: x };
  }),
  fr = V((g, l) => {
    Q();
    var a = 1e6;
    function u(s) {
      var r = s.readInt32BE(0),
        h = s.readUInt32BE(4),
        i = "";
      r < 0 && ((r = ~r + (h === 0)), (h = (~h + 1) >>> 0), (i = "-"));
      var d = "",
        w,
        m,
        b,
        p,
        v,
        n;
      {
        if (
          ((w = r % a),
          (r = (r / a) >>> 0),
          (m = 4294967296 * w + h),
          (h = (m / a) >>> 0),
          (b = "" + (m - a * h)),
          h === 0 && r === 0)
        )
          return i + b + d;
        for (p = "", v = 6 - b.length, n = 0; n < v; n++) p += "0";
        d = p + b + d;
      }
      {
        if (
          ((w = r % a),
          (r = (r / a) >>> 0),
          (m = 4294967296 * w + h),
          (h = (m / a) >>> 0),
          (b = "" + (m - a * h)),
          h === 0 && r === 0)
        )
          return i + b + d;
        for (p = "", v = 6 - b.length, n = 0; n < v; n++) p += "0";
        d = p + b + d;
      }
      {
        if (
          ((w = r % a),
          (r = (r / a) >>> 0),
          (m = 4294967296 * w + h),
          (h = (m / a) >>> 0),
          (b = "" + (m - a * h)),
          h === 0 && r === 0)
        )
          return i + b + d;
        for (p = "", v = 6 - b.length, n = 0; n < v; n++) p += "0";
        d = p + b + d;
      }
      return (
        (w = r % a),
        (m = 4294967296 * w + h),
        (b = "" + (m % a)),
        i + b + d
      );
    }
    (f(u, "readInt8"), (l.exports = u));
  }),
  dr = V((g, l) => {
    Q();
    var a = fr(),
      u = f(function (o, y, E, A, I) {
        ((E = E || 0),
          (A = A || !1),
          (I =
            I ||
            function (N, F, k) {
              return N * Math.pow(2, k) + F;
            }));
        var M = E >> 3,
          T = f(function (N) {
            return A ? ~N & 255 : N;
          }, "inv"),
          S = 255,
          R = 8 - (E % 8);
        (y < R && ((S = (255 << (8 - y)) & 255), (R = y)),
          E && (S = S >> (E % 8)));
        var x = 0;
        (E % 8) + y >= 8 && (x = I(0, T(o[M]) & S, R));
        for (var C = (y + E) >> 3, O = M + 1; O < C; O++) x = I(x, T(o[O]), 8);
        var P = (y + E) % 8;
        return (P > 0 && (x = I(x, T(o[C]) >> (8 - P), P)), x);
      }, "parseBits"),
      s = f(function (o, y, E) {
        var A = Math.pow(2, E - 1) - 1,
          I = u(o, 1),
          M = u(o, E, 1);
        if (M === 0) return 0;
        var T = 1,
          S = f(function (x, C, O) {
            x === 0 && (x = 1);
            for (var P = 1; P <= O; P++)
              ((T /= 2), (C & (1 << (O - P))) > 0 && (x += T));
            return x;
          }, "parsePrecisionBits"),
          R = u(o, y, E + 1, !1, S);
        return M == Math.pow(2, E + 1) - 1
          ? R === 0
            ? I === 0
              ? 1 / 0
              : -1 / 0
            : NaN
          : (I === 0 ? 1 : -1) * Math.pow(2, M - A) * R;
      }, "parseFloatFromBits"),
      r = f(function (o) {
        return u(o, 1) == 1 ? -1 * (u(o, 15, 1, !0) + 1) : u(o, 15, 1);
      }, "parseInt16"),
      h = f(function (o) {
        return u(o, 1) == 1 ? -1 * (u(o, 31, 1, !0) + 1) : u(o, 31, 1);
      }, "parseInt32"),
      i = f(function (o) {
        return s(o, 23, 8);
      }, "parseFloat32"),
      d = f(function (o) {
        return s(o, 52, 11);
      }, "parseFloat64"),
      w = f(function (o) {
        var y = u(o, 16, 32);
        if (y == 49152) return NaN;
        for (
          var E = Math.pow(1e4, u(o, 16, 16)),
            A = 0,
            I = [],
            M = u(o, 16),
            T = 0;
          T < M;
          T++
        )
          ((A += u(o, 16, 64 + 16 * T) * E), (E /= 1e4));
        var S = Math.pow(10, u(o, 16, 48));
        return ((y === 0 ? 1 : -1) * Math.round(A * S)) / S;
      }, "parseNumeric"),
      m = f(function (o, y) {
        var E = u(y, 1),
          A = u(y, 63, 1),
          I = new Date(((E === 0 ? 1 : -1) * A) / 1e3 + 9466848e5);
        return (
          o || I.setTime(I.getTime() + I.getTimezoneOffset() * 6e4),
          (I.usec = A % 1e3),
          (I.getMicroSeconds = function () {
            return this.usec;
          }),
          (I.setMicroSeconds = function (M) {
            this.usec = M;
          }),
          (I.getUTCMicroSeconds = function () {
            return this.usec;
          }),
          I
        );
      }, "parseDate"),
      b = f(function (o) {
        for (
          var y = u(o, 32),
            E = u(o, 32, 32),
            A = u(o, 32, 64),
            I = 96,
            M = [],
            T = 0;
          T < y;
          T++
        )
          ((M[T] = u(o, 32, I)), (I += 32), (I += 32));
        var S = f(function (x) {
            var C = u(o, 32, I);
            if (((I += 32), C == 4294967295)) return null;
            var O;
            if (x == 23 || x == 20)
              return ((O = u(o, C * 8, I)), (I += C * 8), O);
            if (x == 25)
              return (
                (O = o.toString(this.encoding, I >> 3, (I += C << 3) >> 3)),
                O
              );
            console.log("ERROR: ElementType not implemented: " + x);
          }, "parseElement"),
          R = f(function (x, C) {
            var O = [],
              P;
            if (x.length > 1) {
              var N = x.shift();
              for (P = 0; P < N; P++) O[P] = R(x, C);
              x.unshift(N);
            } else for (P = 0; P < x[0]; P++) O[P] = S(C);
            return O;
          }, "parse");
        return R(M, A);
      }, "parseArray"),
      p = f(function (o) {
        return o.toString("utf8");
      }, "parseText"),
      v = f(function (o) {
        return o === null ? null : u(o, 8) > 0;
      }, "parseBool"),
      n = f(function (o) {
        (o(20, a),
          o(21, r),
          o(23, h),
          o(26, h),
          o(1700, w),
          o(700, i),
          o(701, d),
          o(16, v),
          o(1114, m.bind(null, !1)),
          o(1184, m.bind(null, !0)),
          o(1e3, b),
          o(1007, b),
          o(1016, b),
          o(1008, b),
          o(1009, b),
          o(25, p));
      }, "init");
    l.exports = { init: n };
  }),
  pr = V((g, l) => {
    (Q(),
      (l.exports = {
        BOOL: 16,
        BYTEA: 17,
        CHAR: 18,
        INT8: 20,
        INT2: 21,
        INT4: 23,
        REGPROC: 24,
        TEXT: 25,
        OID: 26,
        TID: 27,
        XID: 28,
        CID: 29,
        JSON: 114,
        XML: 142,
        PG_NODE_TREE: 194,
        SMGR: 210,
        PATH: 602,
        POLYGON: 604,
        CIDR: 650,
        FLOAT4: 700,
        FLOAT8: 701,
        ABSTIME: 702,
        RELTIME: 703,
        TINTERVAL: 704,
        CIRCLE: 718,
        MACADDR8: 774,
        MONEY: 790,
        MACADDR: 829,
        INET: 869,
        ACLITEM: 1033,
        BPCHAR: 1042,
        VARCHAR: 1043,
        DATE: 1082,
        TIME: 1083,
        TIMESTAMP: 1114,
        TIMESTAMPTZ: 1184,
        INTERVAL: 1186,
        TIMETZ: 1266,
        BIT: 1560,
        VARBIT: 1562,
        NUMERIC: 1700,
        REFCURSOR: 1790,
        REGPROCEDURE: 2202,
        REGOPER: 2203,
        REGOPERATOR: 2204,
        REGCLASS: 2205,
        REGTYPE: 2206,
        UUID: 2950,
        TXID_SNAPSHOT: 2970,
        PG_LSN: 3220,
        PG_NDISTINCT: 3361,
        PG_DEPENDENCIES: 3402,
        TSVECTOR: 3614,
        TSQUERY: 3615,
        GTSVECTOR: 3642,
        REGCONFIG: 3734,
        REGDICTIONARY: 3769,
        JSONB: 3802,
        REGNAMESPACE: 4089,
        REGROLE: 4096,
      }));
  }),
  Te = V((g) => {
    Q();
    var l = hr(),
      a = dr(),
      u = Et(),
      s = pr();
    ((g.getTypeParser = i),
      (g.setTypeParser = d),
      (g.arrayParser = u),
      (g.builtins = s));
    var r = { text: {}, binary: {} };
    function h(w) {
      return String(w);
    }
    f(h, "noParse");
    function i(w, m) {
      return ((m = m || "text"), (r[m] && r[m][w]) || h);
    }
    f(i, "getTypeParser");
    function d(w, m, b) {
      (typeof m == "function" && ((b = m), (m = "text")), (r[m][w] = b));
    }
    (f(d, "setTypeParser"),
      l.init(function (w, m) {
        r.text[w] = m;
      }),
      a.init(function (w, m) {
        r.binary[w] = m;
      }));
  }),
  Oe = V((g, l) => {
    (Q(),
      (l.exports = {
        host: "localhost",
        user: G.platform === "win32" ? G.env.USERNAME : G.env.USER,
        database: void 0,
        password: null,
        connectionString: void 0,
        port: 5432,
        rows: 0,
        binary: !1,
        max: 10,
        idleTimeoutMillis: 3e4,
        client_encoding: "",
        ssl: !1,
        application_name: void 0,
        fallback_application_name: void 0,
        options: void 0,
        parseInputDatesAsUTC: !1,
        statement_timeout: !1,
        lock_timeout: !1,
        idle_in_transaction_session_timeout: !1,
        query_timeout: !1,
        connect_timeout: 0,
        keepalives: 1,
        keepalives_idle: 0,
      }));
    var a = Te(),
      u = a.getTypeParser(20, "text"),
      s = a.getTypeParser(1016, "text");
    l.exports.__defineSetter__("parseInt8", function (r) {
      (a.setTypeParser(20, "text", r ? a.getTypeParser(23, "text") : u),
        a.setTypeParser(1016, "text", r ? a.getTypeParser(1007, "text") : s));
    });
  }),
  ke = V((g, l) => {
    Q();
    var a = (bt(), re(ze)),
      u = Oe();
    function s(n) {
      var o = n.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
      return '"' + o + '"';
    }
    f(s, "escapeElement");
    function r(n) {
      for (var o = "{", y = 0; y < n.length; y++)
        (y > 0 && (o = o + ","),
          n[y] === null || typeof n[y] > "u"
            ? (o = o + "NULL")
            : Array.isArray(n[y])
              ? (o = o + r(n[y]))
              : n[y] instanceof H
                ? (o += "\\\\x" + n[y].toString("hex"))
                : (o += s(h(n[y]))));
      return ((o = o + "}"), o);
    }
    f(r, "arrayString");
    var h = f(function (n, o) {
      if (n == null) return null;
      if (n instanceof H) return n;
      if (ArrayBuffer.isView(n)) {
        var y = H.from(n.buffer, n.byteOffset, n.byteLength);
        return y.length === n.byteLength
          ? y
          : y.slice(n.byteOffset, n.byteOffset + n.byteLength);
      }
      return n instanceof Date
        ? u.parseInputDatesAsUTC
          ? m(n)
          : w(n)
        : Array.isArray(n)
          ? r(n)
          : typeof n == "object"
            ? i(n, o)
            : n.toString();
    }, "prepareValue");
    function i(n, o) {
      if (n && typeof n.toPostgres == "function") {
        if (((o = o || []), o.indexOf(n) !== -1))
          throw new Error(
            'circular reference detected while preparing "' + n + '" for query',
          );
        return (o.push(n), h(n.toPostgres(h), o));
      }
      return JSON.stringify(n);
    }
    f(i, "prepareObject");
    function d(n, o) {
      for (n = "" + n; n.length < o; ) n = "0" + n;
      return n;
    }
    f(d, "pad");
    function w(n) {
      var o = -n.getTimezoneOffset(),
        y = n.getFullYear(),
        E = y < 1;
      E && (y = Math.abs(y) + 1);
      var A =
        d(y, 4) +
        "-" +
        d(n.getMonth() + 1, 2) +
        "-" +
        d(n.getDate(), 2) +
        "T" +
        d(n.getHours(), 2) +
        ":" +
        d(n.getMinutes(), 2) +
        ":" +
        d(n.getSeconds(), 2) +
        "." +
        d(n.getMilliseconds(), 3);
      return (
        o < 0 ? ((A += "-"), (o *= -1)) : (A += "+"),
        (A += d(Math.floor(o / 60), 2) + ":" + d(o % 60, 2)),
        E && (A += " BC"),
        A
      );
    }
    f(w, "dateToString");
    function m(n) {
      var o = n.getUTCFullYear(),
        y = o < 1;
      y && (o = Math.abs(o) + 1);
      var E =
        d(o, 4) +
        "-" +
        d(n.getUTCMonth() + 1, 2) +
        "-" +
        d(n.getUTCDate(), 2) +
        "T" +
        d(n.getUTCHours(), 2) +
        ":" +
        d(n.getUTCMinutes(), 2) +
        ":" +
        d(n.getUTCSeconds(), 2) +
        "." +
        d(n.getUTCMilliseconds(), 3);
      return ((E += "+00:00"), y && (E += " BC"), E);
    }
    f(m, "dateToStringUTC");
    function b(n, o, y) {
      return (
        (n = typeof n == "string" ? { text: n } : n),
        o && (typeof o == "function" ? (n.callback = o) : (n.values = o)),
        y && (n.callback = y),
        n
      );
    }
    f(b, "normalizeQueryConfig");
    var p = f(function (n) {
        return a.createHash("md5").update(n, "utf-8").digest("hex");
      }, "md5"),
      v = f(function (n, o, y) {
        var E = p(o + n),
          A = p(H.concat([H.from(E), y]));
        return "md5" + A;
      }, "postgresMd5PasswordHash");
    l.exports = {
      prepareValue: f(function (n) {
        return h(n);
      }, "prepareValueWrapper"),
      normalizeQueryConfig: b,
      postgresMd5PasswordHash: v,
      md5: p,
    };
  }),
  yr = V((g, l) => {
    Q();
    var a = (bt(), re(ze));
    function u(o) {
      if (o.indexOf("SCRAM-SHA-256") === -1)
        throw new Error(
          "SASL: Only mechanism SCRAM-SHA-256 is currently supported",
        );
      let y = a.randomBytes(18).toString("base64");
      return {
        mechanism: "SCRAM-SHA-256",
        clientNonce: y,
        response: "n,,n=*,r=" + y,
        message: "SASLInitialResponse",
      };
    }
    f(u, "startSession");
    function s(o, y, E) {
      if (o.message !== "SASLInitialResponse")
        throw new Error("SASL: Last message was not SASLInitialResponse");
      if (typeof y != "string")
        throw new Error(
          "SASL: SCRAM-SERVER-FIRST-MESSAGE: client password must be a string",
        );
      if (typeof E != "string")
        throw new Error(
          "SASL: SCRAM-SERVER-FIRST-MESSAGE: serverData must be a string",
        );
      let A = w(E);
      if (A.nonce.startsWith(o.clientNonce)) {
        if (A.nonce.length === o.clientNonce.length)
          throw new Error(
            "SASL: SCRAM-SERVER-FIRST-MESSAGE: server nonce is too short",
          );
      } else
        throw new Error(
          "SASL: SCRAM-SERVER-FIRST-MESSAGE: server nonce does not start with client nonce",
        );
      var I = H.from(A.salt, "base64"),
        M = n(y, I, A.iteration),
        T = v(M, "Client Key"),
        S = p(T),
        R = "n=*,r=" + o.clientNonce,
        x = "r=" + A.nonce + ",s=" + A.salt + ",i=" + A.iteration,
        C = "c=biws,r=" + A.nonce,
        O = R + "," + x + "," + C,
        P = v(S, O),
        N = b(T, P),
        F = N.toString("base64"),
        k = v(M, "Server Key"),
        U = v(k, O);
      ((o.message = "SASLResponse"),
        (o.serverSignature = U.toString("base64")),
        (o.response = C + ",p=" + F));
    }
    f(s, "continueSession");
    function r(o, y) {
      if (o.message !== "SASLResponse")
        throw new Error("SASL: Last message was not SASLResponse");
      if (typeof y != "string")
        throw new Error(
          "SASL: SCRAM-SERVER-FINAL-MESSAGE: serverData must be a string",
        );
      let { serverSignature: E } = m(y);
      if (E !== o.serverSignature)
        throw new Error(
          "SASL: SCRAM-SERVER-FINAL-MESSAGE: server signature does not match",
        );
    }
    f(r, "finalizeSession");
    function h(o) {
      if (typeof o != "string")
        throw new TypeError("SASL: text must be a string");
      return o
        .split("")
        .map((y, E) => o.charCodeAt(E))
        .every((y) => (y >= 33 && y <= 43) || (y >= 45 && y <= 126));
    }
    f(h, "isPrintableChars");
    function i(o) {
      return /^(?:[a-zA-Z0-9+/]{4})*(?:[a-zA-Z0-9+/]{2}==|[a-zA-Z0-9+/]{3}=)?$/.test(
        o,
      );
    }
    f(i, "isBase64");
    function d(o) {
      if (typeof o != "string")
        throw new TypeError("SASL: attribute pairs text must be a string");
      return new Map(
        o.split(",").map((y) => {
          if (!/^.=/.test(y))
            throw new Error("SASL: Invalid attribute pair entry");
          let E = y[0],
            A = y.substring(2);
          return [E, A];
        }),
      );
    }
    f(d, "parseAttributePairs");
    function w(o) {
      let y = d(o),
        E = y.get("r");
      if (E) {
        if (!h(E))
          throw new Error(
            "SASL: SCRAM-SERVER-FIRST-MESSAGE: nonce must only contain printable characters",
          );
      } else throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: nonce missing");
      let A = y.get("s");
      if (A) {
        if (!i(A))
          throw new Error(
            "SASL: SCRAM-SERVER-FIRST-MESSAGE: salt must be base64",
          );
      } else throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: salt missing");
      let I = y.get("i");
      if (I) {
        if (!/^[1-9][0-9]*$/.test(I))
          throw new Error(
            "SASL: SCRAM-SERVER-FIRST-MESSAGE: invalid iteration count",
          );
      } else
        throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: iteration missing");
      let M = parseInt(I, 10);
      return { nonce: E, salt: A, iteration: M };
    }
    f(w, "parseServerFirstMessage");
    function m(o) {
      let y = d(o).get("v");
      if (y) {
        if (!i(y))
          throw new Error(
            "SASL: SCRAM-SERVER-FINAL-MESSAGE: server signature must be base64",
          );
      } else
        throw new Error(
          "SASL: SCRAM-SERVER-FINAL-MESSAGE: server signature is missing",
        );
      return { serverSignature: y };
    }
    f(m, "parseServerFinalMessage");
    function b(o, y) {
      if (!H.isBuffer(o))
        throw new TypeError("first argument must be a Buffer");
      if (!H.isBuffer(y))
        throw new TypeError("second argument must be a Buffer");
      if (o.length !== y.length) throw new Error("Buffer lengths must match");
      if (o.length === 0) throw new Error("Buffers cannot be empty");
      return H.from(o.map((E, A) => o[A] ^ y[A]));
    }
    f(b, "xorBuffers");
    function p(o) {
      return a.createHash("sha256").update(o).digest();
    }
    f(p, "sha256");
    function v(o, y) {
      return a.createHmac("sha256", o).update(y).digest();
    }
    f(v, "hmacSha256");
    function n(o, y, E) {
      for (
        var A = v(o, H.concat([y, H.from([0, 0, 0, 1])])), I = A, M = 0;
        M < E - 1;
        M++
      )
        ((A = v(o, A)), (I = b(I, A)));
      return I;
    }
    (f(n, "Hi"),
      (l.exports = {
        startSession: u,
        continueSession: s,
        finalizeSession: r,
      }));
  }),
  Ke = {};
ce(Ke, { join: () => St });
function St(...g) {
  return g.join("/");
}
var _t = ie(() => {
    (Q(), f(St, "join"));
  }),
  Ye = {};
ce(Ye, { stat: () => Ct });
function Ct(g, l) {
  l(new Error("No filesystem"));
}
var At = ie(() => {
    (Q(), f(Ct, "stat"));
  }),
  Je = {};
ce(Je, { default: () => It });
var It,
  Lt = ie(() => {
    (Q(), (It = {}));
  }),
  Rt = {};
ce(Rt, { StringDecoder: () => xt });
var We,
  xt,
  gr = ie(() => {
    (Q(),
      (We = class {
        constructor(l) {
          (W(this, "td"), (this.td = new TextDecoder(l)));
        }
        write(l) {
          return this.td.decode(l, { stream: !0 });
        }
        end(l) {
          return this.td.decode(l);
        }
      }),
      f(We, "StringDecoder"),
      (xt = We));
  }),
  mr = V((g, l) => {
    Q();
    var { Transform: a } = (Lt(), re(Je)),
      { StringDecoder: u } = (gr(), re(Rt)),
      s = Symbol("last"),
      r = Symbol("decoder");
    function h(b, p, v) {
      let n;
      if (this.overflow) {
        if (((n = this[r].write(b).split(this.matcher)), n.length === 1))
          return v();
        (n.shift(), (this.overflow = !1));
      } else ((this[s] += this[r].write(b)), (n = this[s].split(this.matcher)));
      this[s] = n.pop();
      for (let o = 0; o < n.length; o++)
        try {
          d(this, this.mapper(n[o]));
        } catch (y) {
          return v(y);
        }
      if (
        ((this.overflow = this[s].length > this.maxLength),
        this.overflow && !this.skipOverflow)
      ) {
        v(new Error("maximum buffer reached"));
        return;
      }
      v();
    }
    f(h, "transform");
    function i(b) {
      if (((this[s] += this[r].end()), this[s]))
        try {
          d(this, this.mapper(this[s]));
        } catch (p) {
          return b(p);
        }
      b();
    }
    f(i, "flush");
    function d(b, p) {
      p !== void 0 && b.push(p);
    }
    f(d, "push");
    function w(b) {
      return b;
    }
    f(w, "noop");
    function m(b, p, v) {
      switch (
        ((b = b || /\r?\n/), (p = p || w), (v = v || {}), arguments.length)
      ) {
        case 1:
          typeof b == "function"
            ? ((p = b), (b = /\r?\n/))
            : typeof b == "object" &&
              !(b instanceof RegExp) &&
              !b[Symbol.split] &&
              ((v = b), (b = /\r?\n/));
          break;
        case 2:
          typeof b == "function"
            ? ((v = p), (p = b), (b = /\r?\n/))
            : typeof p == "object" && ((v = p), (p = w));
      }
      ((v = Object.assign({}, v)),
        (v.autoDestroy = !0),
        (v.transform = h),
        (v.flush = i),
        (v.readableObjectMode = !0));
      let n = new a(v);
      return (
        (n[s] = ""),
        (n[r] = new u("utf8")),
        (n.matcher = b),
        (n.mapper = p),
        (n.maxLength = v.maxLength),
        (n.skipOverflow = v.skipOverflow || !1),
        (n.overflow = !1),
        (n._destroy = function (o, y) {
          ((this._writableState.errorEmitted = !1), y(o));
        }),
        n
      );
    }
    (f(m, "split"), (l.exports = m));
  }),
  br = V((g, l) => {
    Q();
    var a = (_t(), re(Ke)),
      u = (Lt(), re(Je)).Stream,
      s = mr(),
      r = (Be(), re(Ie)),
      h = 5432,
      i = G.platform === "win32",
      d = G.stderr,
      w = 56,
      m = 7,
      b = 61440,
      p = 32768;
    function v(T) {
      return (T & b) == p;
    }
    f(v, "isRegFile");
    var n = ["host", "port", "database", "user", "password"],
      o = n.length,
      y = n[o - 1];
    function E() {
      var T = d instanceof u && d.writable === !0;
      if (T) {
        var S = Array.prototype.slice.call(arguments).concat(`
`);
        d.write(r.format.apply(r, S));
      }
    }
    (f(E, "warn"),
      Object.defineProperty(l.exports, "isWin", {
        get: f(function () {
          return i;
        }, "get"),
        set: f(function (T) {
          i = T;
        }, "set"),
      }),
      (l.exports.warnTo = function (T) {
        var S = d;
        return ((d = T), S);
      }),
      (l.exports.getFileName = function (T) {
        var S = T || G.env,
          R =
            S.PGPASSFILE ||
            (i
              ? a.join(S.APPDATA || "./", "postgresql", "pgpass.conf")
              : a.join(S.HOME || "./", ".pgpass"));
        return R;
      }),
      (l.exports.usePgPass = function (T, S) {
        return Object.prototype.hasOwnProperty.call(G.env, "PGPASSWORD")
          ? !1
          : i
            ? !0
            : ((S = S || "<unkn>"),
              v(T.mode)
                ? T.mode & (w | m)
                  ? (E(
                      'WARNING: password file "%s" has group or world access; permissions should be u=rw (0600) or less',
                      S,
                    ),
                    !1)
                  : !0
                : (E('WARNING: password file "%s" is not a plain file', S),
                  !1));
      }));
    var A = (l.exports.match = function (T, S) {
      return n.slice(0, -1).reduce(function (R, x, C) {
        return C == 1 && Number(T[x] || h) === Number(S[x])
          ? R && !0
          : R && (S[x] === "*" || S[x] === T[x]);
      }, !0);
    });
    l.exports.getPassword = function (T, S, R) {
      var x,
        C = S.pipe(s());
      function O(F) {
        var k = I(F);
        k && M(k) && A(T, k) && ((x = k[y]), C.end());
      }
      f(O, "onLine");
      var P = f(function () {
          (S.destroy(), R(x));
        }, "onEnd"),
        N = f(function (F) {
          (S.destroy(), E("WARNING: error on reading file: %s", F), R(void 0));
        }, "onErr");
      (S.on("error", N), C.on("data", O).on("end", P).on("error", N));
    };
    var I = (l.exports.parseLine = function (T) {
        if (T.length < 11 || T.match(/^\s+#/)) return null;
        for (
          var S = "",
            R = "",
            x = 0,
            C = 0,
            O = 0,
            P = {},
            N = !1,
            F = f(function (U, q, $) {
              var z = T.substring(q, $);
              (Object.hasOwnProperty.call(G.env, "PGPASS_NO_DEESCAPE") ||
                (z = z.replace(/\\([:\\])/g, "$1")),
                (P[n[U]] = z));
            }, "addToObj"),
            k = 0;
          k < T.length - 1;
          k += 1
        ) {
          if (((S = T.charAt(k + 1)), (R = T.charAt(k)), (N = x == o - 1), N)) {
            F(x, C);
            break;
          }
          k >= 0 &&
            S == ":" &&
            R !== "\\" &&
            (F(x, C, k + 1), (C = k + 2), (x += 1));
        }
        return ((P = Object.keys(P).length === o ? P : null), P);
      }),
      M = (l.exports.isValidEntry = function (T) {
        for (
          var S = {
              0: function (P) {
                return P.length > 0;
              },
              1: function (P) {
                return P === "*"
                  ? !0
                  : ((P = Number(P)),
                    isFinite(P) &&
                      P > 0 &&
                      P < 9007199254740992 &&
                      Math.floor(P) === P);
              },
              2: function (P) {
                return P.length > 0;
              },
              3: function (P) {
                return P.length > 0;
              },
              4: function (P) {
                return P.length > 0;
              },
            },
            R = 0;
          R < n.length;
          R += 1
        ) {
          var x = S[R],
            C = T[n[R]] || "",
            O = x(C);
          if (!O) return !1;
        }
        return !0;
      });
  }),
  vr = V((g, l) => {
    (Q(), _t(), re(Ke));
    var a = (At(), re(Ye)),
      u = br();
    ((l.exports = function (s, r) {
      var h = u.getFileName();
      a.stat(h, function (i, d) {
        if (i || !u.usePgPass(d, h)) return r(void 0);
        var w = a.createReadStream(h);
        u.getPassword(s, w, r);
      });
    }),
      (l.exports.warnTo = u.warnTo));
  }),
  Xe = V((g, l) => {
    Q();
    var a = Te();
    function u(s) {
      ((this._types = s || a), (this.text = {}), (this.binary = {}));
    }
    (f(u, "TypeOverrides"),
      (u.prototype.getOverrides = function (s) {
        switch (s) {
          case "text":
            return this.text;
          case "binary":
            return this.binary;
          default:
            return {};
        }
      }),
      (u.prototype.setTypeParser = function (s, r, h) {
        (typeof r == "function" && ((h = r), (r = "text")),
          (this.getOverrides(r)[s] = h));
      }),
      (u.prototype.getTypeParser = function (s, r) {
        return (
          (r = r || "text"),
          this.getOverrides(r)[s] || this._types.getTypeParser(s, r)
        );
      }),
      (l.exports = u));
  }),
  Mt = {};
ce(Mt, { default: () => Pt });
var Pt,
  wr = ie(() => {
    (Q(), (Pt = {}));
  }),
  Bt = {};
ce(Bt, { parse: () => Ze });
function Ze(g, l = !1) {
  let { protocol: a } = new URL(g),
    u = "http:" + g.substring(a.length),
    {
      username: s,
      password: r,
      host: h,
      hostname: i,
      port: d,
      pathname: w,
      search: m,
      searchParams: b,
      hash: p,
    } = new URL(u);
  ((r = decodeURIComponent(r)),
    (s = decodeURIComponent(s)),
    (w = decodeURIComponent(w)));
  let v = s + ":" + r,
    n = l ? Object.fromEntries(b.entries()) : m;
  return {
    href: g,
    protocol: a,
    auth: v,
    username: s,
    password: r,
    host: h,
    hostname: i,
    port: d,
    pathname: w,
    search: m,
    query: n,
    hash: p,
  };
}
var Tt = ie(() => {
    (Q(), f(Ze, "parse"));
  }),
  Er = V((g, l) => {
    Q();
    var a = (Tt(), re(Bt)),
      u = (At(), re(Ye));
    function s(r) {
      if (r.charAt(0) === "/") {
        var i = r.split(" ");
        return { host: i[0], database: i[1] };
      }
      var h = a.parse(
          / |%[^a-f0-9]|%[a-f0-9][^a-f0-9]/i.test(r)
            ? encodeURI(r).replace(/\%25(\d\d)/g, "%$1")
            : r,
          !0,
        ),
        i = h.query;
      for (var d in i) Array.isArray(i[d]) && (i[d] = i[d][i[d].length - 1]);
      var w = (h.auth || ":").split(":");
      if (
        ((i.user = w[0]),
        (i.password = w.splice(1).join(":")),
        (i.port = h.port),
        h.protocol == "socket:")
      )
        return (
          (i.host = decodeURI(h.pathname)),
          (i.database = h.query.db),
          (i.client_encoding = h.query.encoding),
          i
        );
      i.host || (i.host = h.hostname);
      var m = h.pathname;
      if (!i.host && m && /^%2f/i.test(m)) {
        var b = m.split("/");
        ((i.host = decodeURIComponent(b[0])), (m = b.splice(1).join("/")));
      }
      switch (
        (m && m.charAt(0) === "/" && (m = m.slice(1) || null),
        (i.database = m && decodeURI(m)),
        (i.ssl === "true" || i.ssl === "1") && (i.ssl = !0),
        i.ssl === "0" && (i.ssl = !1),
        (i.sslcert || i.sslkey || i.sslrootcert || i.sslmode) && (i.ssl = {}),
        i.sslcert && (i.ssl.cert = u.readFileSync(i.sslcert).toString()),
        i.sslkey && (i.ssl.key = u.readFileSync(i.sslkey).toString()),
        i.sslrootcert && (i.ssl.ca = u.readFileSync(i.sslrootcert).toString()),
        i.sslmode)
      ) {
        case "disable": {
          i.ssl = !1;
          break;
        }
        case "prefer":
        case "require":
        case "verify-ca":
        case "verify-full":
          break;
        case "no-verify": {
          i.ssl.rejectUnauthorized = !1;
          break;
        }
      }
      return i;
    }
    (f(s, "parse"), (l.exports = s), (s.parse = s));
  }),
  et = V((g, l) => {
    Q();
    var a = (wr(), re(Mt)),
      u = Oe(),
      s = Er().parse,
      r = f(function (b, p, v) {
        return (
          v === void 0
            ? (v = G.env["PG" + b.toUpperCase()])
            : v === !1 || (v = G.env[v]),
          p[b] || v || u[b]
        );
      }, "val"),
      h = f(function () {
        switch (G.env.PGSSLMODE) {
          case "disable":
            return !1;
          case "prefer":
          case "require":
          case "verify-ca":
          case "verify-full":
            return !0;
          case "no-verify":
            return { rejectUnauthorized: !1 };
        }
        return u.ssl;
      }, "readSSLConfigFromEnvironment"),
      i = f(function (b) {
        return "'" + ("" + b).replace(/\\/g, "\\\\").replace(/'/g, "\\'") + "'";
      }, "quoteParamValue"),
      d = f(function (b, p, v) {
        var n = p[v];
        n != null && b.push(v + "=" + i(n));
      }, "add"),
      w = class {
        constructor(p) {
          ((p = typeof p == "string" ? s(p) : p || {}),
            p.connectionString &&
              (p = Object.assign({}, p, s(p.connectionString))),
            (this.user = r("user", p)),
            (this.database = r("database", p)),
            this.database === void 0 && (this.database = this.user),
            (this.port = parseInt(r("port", p), 10)),
            (this.host = r("host", p)),
            Object.defineProperty(this, "password", {
              configurable: !0,
              enumerable: !1,
              writable: !0,
              value: r("password", p),
            }),
            (this.binary = r("binary", p)),
            (this.options = r("options", p)),
            (this.ssl = typeof p.ssl > "u" ? h() : p.ssl),
            typeof this.ssl == "string" &&
              this.ssl === "true" &&
              (this.ssl = !0),
            this.ssl === "no-verify" && (this.ssl = { rejectUnauthorized: !1 }),
            this.ssl &&
              this.ssl.key &&
              Object.defineProperty(this.ssl, "key", { enumerable: !1 }),
            (this.client_encoding = r("client_encoding", p)),
            (this.replication = r("replication", p)),
            (this.isDomainSocket = !(this.host || "").indexOf("/")),
            (this.application_name = r("application_name", p, "PGAPPNAME")),
            (this.fallback_application_name = r(
              "fallback_application_name",
              p,
              !1,
            )),
            (this.statement_timeout = r("statement_timeout", p, !1)),
            (this.lock_timeout = r("lock_timeout", p, !1)),
            (this.idle_in_transaction_session_timeout = r(
              "idle_in_transaction_session_timeout",
              p,
              !1,
            )),
            (this.query_timeout = r("query_timeout", p, !1)),
            p.connectionTimeoutMillis === void 0
              ? (this.connect_timeout = G.env.PGCONNECT_TIMEOUT || 0)
              : (this.connect_timeout = Math.floor(
                  p.connectionTimeoutMillis / 1e3,
                )),
            p.keepAlive === !1
              ? (this.keepalives = 0)
              : p.keepAlive === !0 && (this.keepalives = 1),
            typeof p.keepAliveInitialDelayMillis == "number" &&
              (this.keepalives_idle = Math.floor(
                p.keepAliveInitialDelayMillis / 1e3,
              )));
        }
        getLibpqConnectionString(p) {
          var v = [];
          (d(v, this, "user"),
            d(v, this, "password"),
            d(v, this, "port"),
            d(v, this, "application_name"),
            d(v, this, "fallback_application_name"),
            d(v, this, "connect_timeout"),
            d(v, this, "options"));
          var n =
            typeof this.ssl == "object"
              ? this.ssl
              : this.ssl
                ? { sslmode: this.ssl }
                : {};
          if (
            (d(v, n, "sslmode"),
            d(v, n, "sslca"),
            d(v, n, "sslkey"),
            d(v, n, "sslcert"),
            d(v, n, "sslrootcert"),
            this.database && v.push("dbname=" + i(this.database)),
            this.replication && v.push("replication=" + i(this.replication)),
            this.host && v.push("host=" + i(this.host)),
            this.isDomainSocket)
          )
            return p(null, v.join(" "));
          (this.client_encoding &&
            v.push("client_encoding=" + i(this.client_encoding)),
            a.lookup(this.host, function (o, y) {
              return o
                ? p(o, null)
                : (v.push("hostaddr=" + i(y)), p(null, v.join(" ")));
            }));
        }
      };
    f(w, "ConnectionParameters");
    var m = w;
    l.exports = m;
  }),
  Sr = V((g, l) => {
    Q();
    var a = Te(),
      u = /^([A-Za-z]+)(?: (\d+))?(?: (\d+))?/,
      s = class {
        constructor(i, d) {
          ((this.command = null),
            (this.rowCount = null),
            (this.oid = null),
            (this.rows = []),
            (this.fields = []),
            (this._parsers = void 0),
            (this._types = d),
            (this.RowCtor = null),
            (this.rowAsArray = i === "array"),
            this.rowAsArray && (this.parseRow = this._parseRowAsArray));
        }
        addCommandComplete(i) {
          var d;
          (i.text ? (d = u.exec(i.text)) : (d = u.exec(i.command)),
            d &&
              ((this.command = d[1]),
              d[3]
                ? ((this.oid = parseInt(d[2], 10)),
                  (this.rowCount = parseInt(d[3], 10)))
                : d[2] && (this.rowCount = parseInt(d[2], 10))));
        }
        _parseRowAsArray(i) {
          for (var d = new Array(i.length), w = 0, m = i.length; w < m; w++) {
            var b = i[w];
            b !== null ? (d[w] = this._parsers[w](b)) : (d[w] = null);
          }
          return d;
        }
        parseRow(i) {
          for (var d = {}, w = 0, m = i.length; w < m; w++) {
            var b = i[w],
              p = this.fields[w].name;
            b !== null ? (d[p] = this._parsers[w](b)) : (d[p] = null);
          }
          return d;
        }
        addRow(i) {
          this.rows.push(i);
        }
        addFields(i) {
          ((this.fields = i),
            this.fields.length && (this._parsers = new Array(i.length)));
          for (var d = 0; d < i.length; d++) {
            var w = i[d];
            this._types
              ? (this._parsers[d] = this._types.getTypeParser(
                  w.dataTypeID,
                  w.format || "text",
                ))
              : (this._parsers[d] = a.getTypeParser(
                  w.dataTypeID,
                  w.format || "text",
                ));
          }
        }
      };
    f(s, "Result");
    var r = s;
    l.exports = r;
  }),
  _r = V((g, l) => {
    Q();
    var { EventEmitter: a } = ge(),
      u = Sr(),
      s = ke(),
      r = class extends a {
        constructor(d, w, m) {
          (super(),
            (d = s.normalizeQueryConfig(d, w, m)),
            (this.text = d.text),
            (this.values = d.values),
            (this.rows = d.rows),
            (this.types = d.types),
            (this.name = d.name),
            (this.binary = d.binary),
            (this.portal = d.portal || ""),
            (this.callback = d.callback),
            (this._rowMode = d.rowMode),
            G.domain &&
              d.callback &&
              (this.callback = G.domain.bind(d.callback)),
            (this._result = new u(this._rowMode, this.types)),
            (this._results = this._result),
            (this.isPreparedStatement = !1),
            (this._canceledDueToError = !1),
            (this._promise = null));
        }
        requiresPreparation() {
          return this.name || this.rows
            ? !0
            : !this.text || !this.values
              ? !1
              : this.values.length > 0;
        }
        _checkForMultirow() {
          this._result.command &&
            (Array.isArray(this._results) || (this._results = [this._result]),
            (this._result = new u(this._rowMode, this.types)),
            this._results.push(this._result));
        }
        handleRowDescription(d) {
          (this._checkForMultirow(),
            this._result.addFields(d.fields),
            (this._accumulateRows =
              this.callback || !this.listeners("row").length));
        }
        handleDataRow(d) {
          let w;
          if (!this._canceledDueToError) {
            try {
              w = this._result.parseRow(d.fields);
            } catch (m) {
              this._canceledDueToError = m;
              return;
            }
            (this.emit("row", w, this._result),
              this._accumulateRows && this._result.addRow(w));
          }
        }
        handleCommandComplete(d, w) {
          (this._checkForMultirow(),
            this._result.addCommandComplete(d),
            this.rows && w.sync());
        }
        handleEmptyQuery(d) {
          this.rows && d.sync();
        }
        handleError(d, w) {
          if (
            (this._canceledDueToError &&
              ((d = this._canceledDueToError), (this._canceledDueToError = !1)),
            this.callback)
          )
            return this.callback(d);
          this.emit("error", d);
        }
        handleReadyForQuery(d) {
          if (this._canceledDueToError)
            return this.handleError(this._canceledDueToError, d);
          if (this.callback)
            try {
              this.callback(null, this._results);
            } catch (w) {
              G.nextTick(() => {
                throw w;
              });
            }
          this.emit("end", this._results);
        }
        submit(d) {
          if (typeof this.text != "string" && typeof this.name != "string")
            return new Error(
              "A query must have either text or a name. Supplying neither is unsupported.",
            );
          let w = d.parsedStatements[this.name];
          return this.text && w && this.text !== w
            ? new Error(
                `Prepared statements must be unique - '${this.name}' was used for a different statement`,
              )
            : this.values && !Array.isArray(this.values)
              ? new Error("Query values must be an array")
              : (this.requiresPreparation()
                  ? this.prepare(d)
                  : d.query(this.text),
                null);
        }
        hasBeenParsed(d) {
          return this.name && d.parsedStatements[this.name];
        }
        handlePortalSuspended(d) {
          this._getRows(d, this.rows);
        }
        _getRows(d, w) {
          (d.execute({ portal: this.portal, rows: w }),
            w ? d.flush() : d.sync());
        }
        prepare(d) {
          ((this.isPreparedStatement = !0),
            this.hasBeenParsed(d) ||
              d.parse({ text: this.text, name: this.name, types: this.types }));
          try {
            d.bind({
              portal: this.portal,
              statement: this.name,
              values: this.values,
              binary: this.binary,
              valueMapper: s.prepareValue,
            });
          } catch (w) {
            this.handleError(w, d);
            return;
          }
          (d.describe({ type: "P", name: this.portal || "" }),
            this._getRows(d, this.rows));
        }
        handleCopyInResponse(d) {
          d.sendCopyFail("No source stream defined");
        }
        handleCopyData(d, w) {}
      };
    f(r, "Query");
    var h = r;
    l.exports = h;
  }),
  Ot = {};
ce(Ot, { Socket: () => De, isIP: () => kt });
function kt(g) {
  return 0;
}
var ut,
  ct,
  Ce,
  De,
  tt = ie(() => {
    (Q(),
      (ut = we(ge(), 1)),
      f(kt, "isIP"),
      (ct = f((g) => g.replace(/^[^.]+\./, "api."), "transformHost")),
      (Ce = class j extends ut.EventEmitter {
        constructor() {
          (super(...arguments),
            W(this, "opts", {}),
            W(this, "connecting", !1),
            W(this, "pending", !0),
            W(this, "writable", !0),
            W(this, "encrypted", !1),
            W(this, "authorized", !1),
            W(this, "destroyed", !1),
            W(this, "ws", null),
            W(this, "writeBuffer"),
            W(this, "tlsState", 0),
            W(this, "tlsRead"),
            W(this, "tlsWrite"));
        }
        static get poolQueryViaFetch() {
          return j.opts.poolQueryViaFetch ?? j.defaults.poolQueryViaFetch;
        }
        static set poolQueryViaFetch(l) {
          j.opts.poolQueryViaFetch = l;
        }
        static get fetchEndpoint() {
          return j.opts.fetchEndpoint ?? j.defaults.fetchEndpoint;
        }
        static set fetchEndpoint(l) {
          j.opts.fetchEndpoint = l;
        }
        static get fetchConnectionCache() {
          return !0;
        }
        static set fetchConnectionCache(l) {
          console.warn(
            "The `fetchConnectionCache` option is deprecated (now always `true`)",
          );
        }
        static get fetchFunction() {
          return j.opts.fetchFunction ?? j.defaults.fetchFunction;
        }
        static set fetchFunction(l) {
          j.opts.fetchFunction = l;
        }
        static get webSocketConstructor() {
          return j.opts.webSocketConstructor ?? j.defaults.webSocketConstructor;
        }
        static set webSocketConstructor(l) {
          j.opts.webSocketConstructor = l;
        }
        get webSocketConstructor() {
          return this.opts.webSocketConstructor ?? j.webSocketConstructor;
        }
        set webSocketConstructor(l) {
          this.opts.webSocketConstructor = l;
        }
        static get wsProxy() {
          return j.opts.wsProxy ?? j.defaults.wsProxy;
        }
        static set wsProxy(l) {
          j.opts.wsProxy = l;
        }
        get wsProxy() {
          return this.opts.wsProxy ?? j.wsProxy;
        }
        set wsProxy(l) {
          this.opts.wsProxy = l;
        }
        static get coalesceWrites() {
          return j.opts.coalesceWrites ?? j.defaults.coalesceWrites;
        }
        static set coalesceWrites(l) {
          j.opts.coalesceWrites = l;
        }
        get coalesceWrites() {
          return this.opts.coalesceWrites ?? j.coalesceWrites;
        }
        set coalesceWrites(l) {
          this.opts.coalesceWrites = l;
        }
        static get useSecureWebSocket() {
          return j.opts.useSecureWebSocket ?? j.defaults.useSecureWebSocket;
        }
        static set useSecureWebSocket(l) {
          j.opts.useSecureWebSocket = l;
        }
        get useSecureWebSocket() {
          return this.opts.useSecureWebSocket ?? j.useSecureWebSocket;
        }
        set useSecureWebSocket(l) {
          this.opts.useSecureWebSocket = l;
        }
        static get forceDisablePgSSL() {
          return j.opts.forceDisablePgSSL ?? j.defaults.forceDisablePgSSL;
        }
        static set forceDisablePgSSL(l) {
          j.opts.forceDisablePgSSL = l;
        }
        get forceDisablePgSSL() {
          return this.opts.forceDisablePgSSL ?? j.forceDisablePgSSL;
        }
        set forceDisablePgSSL(l) {
          this.opts.forceDisablePgSSL = l;
        }
        static get disableSNI() {
          return j.opts.disableSNI ?? j.defaults.disableSNI;
        }
        static set disableSNI(l) {
          j.opts.disableSNI = l;
        }
        get disableSNI() {
          return this.opts.disableSNI ?? j.disableSNI;
        }
        set disableSNI(l) {
          this.opts.disableSNI = l;
        }
        static get pipelineConnect() {
          return j.opts.pipelineConnect ?? j.defaults.pipelineConnect;
        }
        static set pipelineConnect(l) {
          j.opts.pipelineConnect = l;
        }
        get pipelineConnect() {
          return this.opts.pipelineConnect ?? j.pipelineConnect;
        }
        set pipelineConnect(l) {
          this.opts.pipelineConnect = l;
        }
        static get subtls() {
          return j.opts.subtls ?? j.defaults.subtls;
        }
        static set subtls(l) {
          j.opts.subtls = l;
        }
        get subtls() {
          return this.opts.subtls ?? j.subtls;
        }
        set subtls(l) {
          this.opts.subtls = l;
        }
        static get pipelineTLS() {
          return j.opts.pipelineTLS ?? j.defaults.pipelineTLS;
        }
        static set pipelineTLS(l) {
          j.opts.pipelineTLS = l;
        }
        get pipelineTLS() {
          return this.opts.pipelineTLS ?? j.pipelineTLS;
        }
        set pipelineTLS(l) {
          this.opts.pipelineTLS = l;
        }
        static get rootCerts() {
          return j.opts.rootCerts ?? j.defaults.rootCerts;
        }
        static set rootCerts(l) {
          j.opts.rootCerts = l;
        }
        get rootCerts() {
          return this.opts.rootCerts ?? j.rootCerts;
        }
        set rootCerts(l) {
          this.opts.rootCerts = l;
        }
        wsProxyAddrForHost(l, a) {
          let u = this.wsProxy;
          if (u === void 0)
            throw new Error(
              "No WebSocket proxy is configured. Please see https://github.com/neondatabase/serverless/blob/main/CONFIG.md#wsproxy-string--host-string-port-number--string--string",
            );
          return typeof u == "function" ? u(l, a) : `${u}?address=${l}:${a}`;
        }
        setNoDelay() {
          return this;
        }
        setKeepAlive() {
          return this;
        }
        ref() {
          return this;
        }
        unref() {
          return this;
        }
        connect(l, a, u) {
          ((this.connecting = !0), u && this.once("connect", u));
          let s = f(() => {
              ((this.connecting = !1),
                (this.pending = !1),
                this.emit("connect"),
                this.emit("ready"));
            }, "handleWebSocketOpen"),
            r = f((i, d = !1) => {
              ((i.binaryType = "arraybuffer"),
                i.addEventListener("error", (w) => {
                  (this.emit("error", w), this.emit("close"));
                }),
                i.addEventListener("message", (w) => {
                  if (this.tlsState === 0) {
                    let m = H.from(w.data);
                    this.emit("data", m);
                  }
                }),
                i.addEventListener("close", () => {
                  this.emit("close");
                }),
                d ? s() : i.addEventListener("open", s));
            }, "configureWebSocket"),
            h;
          try {
            h = this.wsProxyAddrForHost(
              a,
              typeof l == "string" ? parseInt(l, 10) : l,
            );
          } catch (i) {
            (this.emit("error", i), this.emit("close"));
            return;
          }
          try {
            let i = (this.useSecureWebSocket ? "wss:" : "ws:") + "//" + h;
            if (this.webSocketConstructor !== void 0)
              ((this.ws = new this.webSocketConstructor(i)), r(this.ws));
            else
              try {
                ((this.ws = new WebSocket(i)), r(this.ws));
              } catch {
                ((this.ws = new __unstable_WebSocket(i)), r(this.ws));
              }
          } catch (i) {
            let d = (this.useSecureWebSocket ? "https:" : "http:") + "//" + h;
            fetch(d, { headers: { Upgrade: "websocket" } })
              .then((w) => {
                if (((this.ws = w.webSocket), this.ws == null)) throw i;
                (this.ws.accept(), r(this.ws, !0));
              })
              .catch((w) => {
                (this.emit(
                  "error",
                  new Error(
                    `All attempts to open a WebSocket to connect to the database failed. Please refer to https://github.com/neondatabase/serverless/blob/main/CONFIG.md#websocketconstructor-typeof-websocket--undefined. Details: ${w.message}`,
                  ),
                ),
                  this.emit("close"));
              });
          }
        }
        async startTls(l) {
          if (this.subtls === void 0)
            throw new Error(
              "For Postgres SSL connections, you must set `neonConfig.subtls` to the subtls library. See https://github.com/neondatabase/serverless/blob/main/CONFIG.md for more information.",
            );
          this.tlsState = 1;
          let a = this.subtls.TrustedCert.fromPEM(this.rootCerts),
            u = new this.subtls.WebSocketReadQueue(this.ws),
            s = u.read.bind(u),
            r = this.rawWrite.bind(this),
            [h, i] = await this.subtls.startTls(l, a, s, r, {
              useSNI: !this.disableSNI,
              expectPreData: this.pipelineTLS ? new Uint8Array([83]) : void 0,
            });
          ((this.tlsRead = h),
            (this.tlsWrite = i),
            (this.tlsState = 2),
            (this.encrypted = !0),
            (this.authorized = !0),
            this.emit("secureConnection", this),
            this.tlsReadLoop());
        }
        async tlsReadLoop() {
          for (;;) {
            let l = await this.tlsRead();
            if (l === void 0) break;
            {
              let a = H.from(l);
              this.emit("data", a);
            }
          }
        }
        rawWrite(l) {
          if (!this.coalesceWrites) {
            this.ws.send(l);
            return;
          }
          if (this.writeBuffer === void 0)
            ((this.writeBuffer = l),
              setTimeout(() => {
                (this.ws.send(this.writeBuffer), (this.writeBuffer = void 0));
              }, 0));
          else {
            let a = new Uint8Array(this.writeBuffer.length + l.length);
            (a.set(this.writeBuffer),
              a.set(l, this.writeBuffer.length),
              (this.writeBuffer = a));
          }
        }
        write(l, a = "utf8", u = (s) => {}) {
          return l.length === 0
            ? (u(), !0)
            : (typeof l == "string" && (l = H.from(l, a)),
              this.tlsState === 0
                ? (this.rawWrite(l), u())
                : this.tlsState === 1
                  ? this.once("secureConnection", () => {
                      this.write(l, a, u);
                    })
                  : (this.tlsWrite(l), u()),
              !0);
        }
        end(l = H.alloc(0), a = "utf8", u = () => {}) {
          return (
            this.write(l, a, () => {
              (this.ws.close(), u());
            }),
            this
          );
        }
        destroy() {
          return ((this.destroyed = !0), this.end());
        }
      }),
      f(Ce, "Socket"),
      W(Ce, "defaults", {
        poolQueryViaFetch: !1,
        fetchEndpoint: f((g) => "https://" + ct(g) + "/sql", "fetchEndpoint"),
        fetchConnectionCache: !0,
        fetchFunction: void 0,
        webSocketConstructor: void 0,
        wsProxy: f((g) => g + "/v2", "wsProxy"),
        useSecureWebSocket: !0,
        forceDisablePgSSL: !0,
        coalesceWrites: !0,
        pipelineConnect: "password",
        subtls: void 0,
        rootCerts: "",
        pipelineTLS: !1,
        disableSNI: !1,
      }),
      W(Ce, "opts", {}),
      (De = Ce));
  }),
  Dt = V((g) => {
    (Q(),
      Object.defineProperty(g, "__esModule", { value: !0 }),
      (g.NoticeMessage =
        g.DataRowMessage =
        g.CommandCompleteMessage =
        g.ReadyForQueryMessage =
        g.NotificationResponseMessage =
        g.BackendKeyDataMessage =
        g.AuthenticationMD5Password =
        g.ParameterStatusMessage =
        g.ParameterDescriptionMessage =
        g.RowDescriptionMessage =
        g.Field =
        g.CopyResponse =
        g.CopyDataMessage =
        g.DatabaseError =
        g.copyDone =
        g.emptyQuery =
        g.replicationStart =
        g.portalSuspended =
        g.noData =
        g.closeComplete =
        g.bindComplete =
        g.parseComplete =
          void 0),
      (g.parseComplete = { name: "parseComplete", length: 5 }),
      (g.bindComplete = { name: "bindComplete", length: 5 }),
      (g.closeComplete = { name: "closeComplete", length: 5 }),
      (g.noData = { name: "noData", length: 5 }),
      (g.portalSuspended = { name: "portalSuspended", length: 5 }),
      (g.replicationStart = { name: "replicationStart", length: 4 }),
      (g.emptyQuery = { name: "emptyQuery", length: 4 }),
      (g.copyDone = { name: "copyDone", length: 4 }));
    var l = class extends Error {
      constructor(k, U, q) {
        (super(k), (this.length = U), (this.name = q));
      }
    };
    f(l, "DatabaseError");
    var a = l;
    g.DatabaseError = a;
    var u = class {
      constructor(k, U) {
        ((this.length = k), (this.chunk = U), (this.name = "copyData"));
      }
    };
    f(u, "CopyDataMessage");
    var s = u;
    g.CopyDataMessage = s;
    var r = class {
      constructor(k, U, q, $) {
        ((this.length = k),
          (this.name = U),
          (this.binary = q),
          (this.columnTypes = new Array($)));
      }
    };
    f(r, "CopyResponse");
    var h = r;
    g.CopyResponse = h;
    var i = class {
      constructor(k, U, q, $, z, K, oe) {
        ((this.name = k),
          (this.tableID = U),
          (this.columnID = q),
          (this.dataTypeID = $),
          (this.dataTypeSize = z),
          (this.dataTypeModifier = K),
          (this.format = oe));
      }
    };
    f(i, "Field");
    var d = i;
    g.Field = d;
    var w = class {
      constructor(k, U) {
        ((this.length = k),
          (this.fieldCount = U),
          (this.name = "rowDescription"),
          (this.fields = new Array(this.fieldCount)));
      }
    };
    f(w, "RowDescriptionMessage");
    var m = w;
    g.RowDescriptionMessage = m;
    var b = class {
      constructor(k, U) {
        ((this.length = k),
          (this.parameterCount = U),
          (this.name = "parameterDescription"),
          (this.dataTypeIDs = new Array(this.parameterCount)));
      }
    };
    f(b, "ParameterDescriptionMessage");
    var p = b;
    g.ParameterDescriptionMessage = p;
    var v = class {
      constructor(k, U, q) {
        ((this.length = k),
          (this.parameterName = U),
          (this.parameterValue = q),
          (this.name = "parameterStatus"));
      }
    };
    f(v, "ParameterStatusMessage");
    var n = v;
    g.ParameterStatusMessage = n;
    var o = class {
      constructor(k, U) {
        ((this.length = k),
          (this.salt = U),
          (this.name = "authenticationMD5Password"));
      }
    };
    f(o, "AuthenticationMD5Password");
    var y = o;
    g.AuthenticationMD5Password = y;
    var E = class {
      constructor(k, U, q) {
        ((this.length = k),
          (this.processID = U),
          (this.secretKey = q),
          (this.name = "backendKeyData"));
      }
    };
    f(E, "BackendKeyDataMessage");
    var A = E;
    g.BackendKeyDataMessage = A;
    var I = class {
      constructor(k, U, q, $) {
        ((this.length = k),
          (this.processId = U),
          (this.channel = q),
          (this.payload = $),
          (this.name = "notification"));
      }
    };
    f(I, "NotificationResponseMessage");
    var M = I;
    g.NotificationResponseMessage = M;
    var T = class {
      constructor(k, U) {
        ((this.length = k), (this.status = U), (this.name = "readyForQuery"));
      }
    };
    f(T, "ReadyForQueryMessage");
    var S = T;
    g.ReadyForQueryMessage = S;
    var R = class {
      constructor(k, U) {
        ((this.length = k), (this.text = U), (this.name = "commandComplete"));
      }
    };
    f(R, "CommandCompleteMessage");
    var x = R;
    g.CommandCompleteMessage = x;
    var C = class {
      constructor(k, U) {
        ((this.length = k),
          (this.fields = U),
          (this.name = "dataRow"),
          (this.fieldCount = U.length));
      }
    };
    f(C, "DataRowMessage");
    var O = C;
    g.DataRowMessage = O;
    var P = class {
      constructor(k, U) {
        ((this.length = k), (this.message = U), (this.name = "notice"));
      }
    };
    f(P, "NoticeMessage");
    var N = P;
    g.NoticeMessage = N;
  }),
  Cr = V((g) => {
    (Q(),
      Object.defineProperty(g, "__esModule", { value: !0 }),
      (g.Writer = void 0));
    var l = class {
      constructor(s = 256) {
        ((this.size = s),
          (this.offset = 5),
          (this.headerPosition = 0),
          (this.buffer = H.allocUnsafe(s)));
      }
      ensure(s) {
        var r = this.buffer.length - this.offset;
        if (r < s) {
          var h = this.buffer,
            i = h.length + (h.length >> 1) + s;
          ((this.buffer = H.allocUnsafe(i)), h.copy(this.buffer));
        }
      }
      addInt32(s) {
        return (
          this.ensure(4),
          (this.buffer[this.offset++] = (s >>> 24) & 255),
          (this.buffer[this.offset++] = (s >>> 16) & 255),
          (this.buffer[this.offset++] = (s >>> 8) & 255),
          (this.buffer[this.offset++] = (s >>> 0) & 255),
          this
        );
      }
      addInt16(s) {
        return (
          this.ensure(2),
          (this.buffer[this.offset++] = (s >>> 8) & 255),
          (this.buffer[this.offset++] = (s >>> 0) & 255),
          this
        );
      }
      addCString(s) {
        if (!s) this.ensure(1);
        else {
          var r = H.byteLength(s);
          (this.ensure(r + 1),
            this.buffer.write(s, this.offset, "utf-8"),
            (this.offset += r));
        }
        return ((this.buffer[this.offset++] = 0), this);
      }
      addString(s = "") {
        var r = H.byteLength(s);
        return (
          this.ensure(r),
          this.buffer.write(s, this.offset),
          (this.offset += r),
          this
        );
      }
      add(s) {
        return (
          this.ensure(s.length),
          s.copy(this.buffer, this.offset),
          (this.offset += s.length),
          this
        );
      }
      join(s) {
        if (s) {
          this.buffer[this.headerPosition] = s;
          let r = this.offset - (this.headerPosition + 1);
          this.buffer.writeInt32BE(r, this.headerPosition + 1);
        }
        return this.buffer.slice(s ? 0 : 5, this.offset);
      }
      flush(s) {
        var r = this.join(s);
        return (
          (this.offset = 5),
          (this.headerPosition = 0),
          (this.buffer = H.allocUnsafe(this.size)),
          r
        );
      }
    };
    f(l, "Writer");
    var a = l;
    g.Writer = a;
  }),
  Ar = V((g) => {
    (Q(),
      Object.defineProperty(g, "__esModule", { value: !0 }),
      (g.serialize = void 0));
    var l = Cr(),
      a = new l.Writer(),
      u = f((k) => {
        a.addInt16(3).addInt16(0);
        for (let $ of Object.keys(k)) a.addCString($).addCString(k[$]);
        a.addCString("client_encoding").addCString("UTF8");
        var U = a.addCString("").flush(),
          q = U.length + 4;
        return new l.Writer().addInt32(q).add(U).flush();
      }, "startup"),
      s = f(() => {
        let k = H.allocUnsafe(8);
        return (k.writeInt32BE(8, 0), k.writeInt32BE(80877103, 4), k);
      }, "requestSsl"),
      r = f((k) => a.addCString(k).flush(112), "password"),
      h = f(function (k, U) {
        return (
          a.addCString(k).addInt32(H.byteLength(U)).addString(U),
          a.flush(112)
        );
      }, "sendSASLInitialResponseMessage"),
      i = f(function (k) {
        return a.addString(k).flush(112);
      }, "sendSCRAMClientFinalMessage"),
      d = f((k) => a.addCString(k).flush(81), "query"),
      w = [],
      m = f((k) => {
        let U = k.name || "";
        U.length > 63 &&
          (console.error(
            "Warning! Postgres only supports 63 characters for query names.",
          ),
          console.error("You supplied %s (%s)", U, U.length),
          console.error(
            "This can cause conflicts and silent errors executing queries",
          ));
        let q = k.types || w;
        for (
          var $ = q.length,
            z = a.addCString(U).addCString(k.text).addInt16($),
            K = 0;
          K < $;
          K++
        )
          z.addInt32(q[K]);
        return a.flush(80);
      }, "parse"),
      b = new l.Writer(),
      p = f(function (k, U) {
        for (let q = 0; q < k.length; q++) {
          let $ = U ? U(k[q], q) : k[q];
          $ == null
            ? (a.addInt16(0), b.addInt32(-1))
            : $ instanceof H
              ? (a.addInt16(1), b.addInt32($.length), b.add($))
              : (a.addInt16(0), b.addInt32(H.byteLength($)), b.addString($));
        }
      }, "writeValues"),
      v = f((k = {}) => {
        let U = k.portal || "",
          q = k.statement || "",
          $ = k.binary || !1,
          z = k.values || w,
          K = z.length;
        return (
          a.addCString(U).addCString(q),
          a.addInt16(K),
          p(z, k.valueMapper),
          a.addInt16(K),
          a.add(b.flush()),
          a.addInt16($ ? 1 : 0),
          a.flush(66)
        );
      }, "bind"),
      n = H.from([69, 0, 0, 0, 9, 0, 0, 0, 0, 0]),
      o = f((k) => {
        if (!k || (!k.portal && !k.rows)) return n;
        let U = k.portal || "",
          q = k.rows || 0,
          $ = H.byteLength(U),
          z = 4 + $ + 1 + 4,
          K = H.allocUnsafe(1 + z);
        return (
          (K[0] = 69),
          K.writeInt32BE(z, 1),
          K.write(U, 5, "utf-8"),
          (K[$ + 5] = 0),
          K.writeUInt32BE(q, K.length - 4),
          K
        );
      }, "execute"),
      y = f((k, U) => {
        let q = H.allocUnsafe(16);
        return (
          q.writeInt32BE(16, 0),
          q.writeInt16BE(1234, 4),
          q.writeInt16BE(5678, 6),
          q.writeInt32BE(k, 8),
          q.writeInt32BE(U, 12),
          q
        );
      }, "cancel"),
      E = f((k, U) => {
        let q = 4 + H.byteLength(U) + 1,
          $ = H.allocUnsafe(1 + q);
        return (
          ($[0] = k),
          $.writeInt32BE(q, 1),
          $.write(U, 5, "utf-8"),
          ($[q] = 0),
          $
        );
      }, "cstringMessage"),
      A = a.addCString("P").flush(68),
      I = a.addCString("S").flush(68),
      M = f(
        (k) =>
          k.name ? E(68, `${k.type}${k.name || ""}`) : k.type === "P" ? A : I,
        "describe",
      ),
      T = f((k) => {
        let U = `${k.type}${k.name || ""}`;
        return E(67, U);
      }, "close"),
      S = f((k) => a.add(k).flush(100), "copyData"),
      R = f((k) => E(102, k), "copyFail"),
      x = f((k) => H.from([k, 0, 0, 0, 4]), "codeOnlyBuffer"),
      C = x(72),
      O = x(83),
      P = x(88),
      N = x(99),
      F = {
        startup: u,
        password: r,
        requestSsl: s,
        sendSASLInitialResponseMessage: h,
        sendSCRAMClientFinalMessage: i,
        query: d,
        parse: m,
        bind: v,
        execute: o,
        describe: M,
        close: T,
        flush: f(() => C, "flush"),
        sync: f(() => O, "sync"),
        end: f(() => P, "end"),
        copyData: S,
        copyDone: f(() => N, "copyDone"),
        copyFail: R,
        cancel: y,
      };
    g.serialize = F;
  }),
  Ir = V((g) => {
    (Q(),
      Object.defineProperty(g, "__esModule", { value: !0 }),
      (g.BufferReader = void 0));
    var l = H.allocUnsafe(0),
      a = class {
        constructor(r = 0) {
          ((this.offset = r), (this.buffer = l), (this.encoding = "utf-8"));
        }
        setBuffer(r, h) {
          ((this.offset = r), (this.buffer = h));
        }
        int16() {
          let r = this.buffer.readInt16BE(this.offset);
          return ((this.offset += 2), r);
        }
        byte() {
          let r = this.buffer[this.offset];
          return (this.offset++, r);
        }
        int32() {
          let r = this.buffer.readInt32BE(this.offset);
          return ((this.offset += 4), r);
        }
        string(r) {
          let h = this.buffer.toString(
            this.encoding,
            this.offset,
            this.offset + r,
          );
          return ((this.offset += r), h);
        }
        cstring() {
          let r = this.offset,
            h = r;
          for (; this.buffer[h++] !== 0; );
          return (
            (this.offset = h),
            this.buffer.toString(this.encoding, r, h - 1)
          );
        }
        bytes(r) {
          let h = this.buffer.slice(this.offset, this.offset + r);
          return ((this.offset += r), h);
        }
      };
    f(a, "BufferReader");
    var u = a;
    g.BufferReader = u;
  }),
  Lr = V((g) => {
    (Q(),
      Object.defineProperty(g, "__esModule", { value: !0 }),
      (g.Parser = void 0));
    var l = Dt(),
      a = Ir(),
      u = 1,
      s = 4,
      r = u + s,
      h = H.allocUnsafe(0),
      i = class {
        constructor(m) {
          if (
            ((this.buffer = h),
            (this.bufferLength = 0),
            (this.bufferOffset = 0),
            (this.reader = new a.BufferReader()),
            (m == null ? void 0 : m.mode) === "binary")
          )
            throw new Error("Binary mode not supported yet");
          this.mode = (m == null ? void 0 : m.mode) || "text";
        }
        parse(m, b) {
          this.mergeBuffer(m);
          let p = this.bufferOffset + this.bufferLength,
            v = this.bufferOffset;
          for (; v + r <= p; ) {
            let n = this.buffer[v],
              o = this.buffer.readUInt32BE(v + u),
              y = u + o;
            if (y + v <= p) {
              let E = this.handlePacket(v + r, n, o, this.buffer);
              (b(E), (v += y));
            } else break;
          }
          v === p
            ? ((this.buffer = h),
              (this.bufferLength = 0),
              (this.bufferOffset = 0))
            : ((this.bufferLength = p - v), (this.bufferOffset = v));
        }
        mergeBuffer(m) {
          if (this.bufferLength > 0) {
            let b = this.bufferLength + m.byteLength;
            if (b + this.bufferOffset > this.buffer.byteLength) {
              let p;
              if (
                b <= this.buffer.byteLength &&
                this.bufferOffset >= this.bufferLength
              )
                p = this.buffer;
              else {
                let v = this.buffer.byteLength * 2;
                for (; b >= v; ) v *= 2;
                p = H.allocUnsafe(v);
              }
              (this.buffer.copy(
                p,
                0,
                this.bufferOffset,
                this.bufferOffset + this.bufferLength,
              ),
                (this.buffer = p),
                (this.bufferOffset = 0));
            }
            (m.copy(this.buffer, this.bufferOffset + this.bufferLength),
              (this.bufferLength = b));
          } else
            ((this.buffer = m),
              (this.bufferOffset = 0),
              (this.bufferLength = m.byteLength));
        }
        handlePacket(m, b, p, v) {
          switch (b) {
            case 50:
              return l.bindComplete;
            case 49:
              return l.parseComplete;
            case 51:
              return l.closeComplete;
            case 110:
              return l.noData;
            case 115:
              return l.portalSuspended;
            case 99:
              return l.copyDone;
            case 87:
              return l.replicationStart;
            case 73:
              return l.emptyQuery;
            case 68:
              return this.parseDataRowMessage(m, p, v);
            case 67:
              return this.parseCommandCompleteMessage(m, p, v);
            case 90:
              return this.parseReadyForQueryMessage(m, p, v);
            case 65:
              return this.parseNotificationMessage(m, p, v);
            case 82:
              return this.parseAuthenticationResponse(m, p, v);
            case 83:
              return this.parseParameterStatusMessage(m, p, v);
            case 75:
              return this.parseBackendKeyData(m, p, v);
            case 69:
              return this.parseErrorMessage(m, p, v, "error");
            case 78:
              return this.parseErrorMessage(m, p, v, "notice");
            case 84:
              return this.parseRowDescriptionMessage(m, p, v);
            case 116:
              return this.parseParameterDescriptionMessage(m, p, v);
            case 71:
              return this.parseCopyInMessage(m, p, v);
            case 72:
              return this.parseCopyOutMessage(m, p, v);
            case 100:
              return this.parseCopyData(m, p, v);
            default:
              return new l.DatabaseError(
                "received invalid response: " + b.toString(16),
                p,
                "error",
              );
          }
        }
        parseReadyForQueryMessage(m, b, p) {
          this.reader.setBuffer(m, p);
          let v = this.reader.string(1);
          return new l.ReadyForQueryMessage(b, v);
        }
        parseCommandCompleteMessage(m, b, p) {
          this.reader.setBuffer(m, p);
          let v = this.reader.cstring();
          return new l.CommandCompleteMessage(b, v);
        }
        parseCopyData(m, b, p) {
          let v = p.slice(m, m + (b - 4));
          return new l.CopyDataMessage(b, v);
        }
        parseCopyInMessage(m, b, p) {
          return this.parseCopyMessage(m, b, p, "copyInResponse");
        }
        parseCopyOutMessage(m, b, p) {
          return this.parseCopyMessage(m, b, p, "copyOutResponse");
        }
        parseCopyMessage(m, b, p, v) {
          this.reader.setBuffer(m, p);
          let n = this.reader.byte() !== 0,
            o = this.reader.int16(),
            y = new l.CopyResponse(b, v, n, o);
          for (let E = 0; E < o; E++) y.columnTypes[E] = this.reader.int16();
          return y;
        }
        parseNotificationMessage(m, b, p) {
          this.reader.setBuffer(m, p);
          let v = this.reader.int32(),
            n = this.reader.cstring(),
            o = this.reader.cstring();
          return new l.NotificationResponseMessage(b, v, n, o);
        }
        parseRowDescriptionMessage(m, b, p) {
          this.reader.setBuffer(m, p);
          let v = this.reader.int16(),
            n = new l.RowDescriptionMessage(b, v);
          for (let o = 0; o < v; o++) n.fields[o] = this.parseField();
          return n;
        }
        parseField() {
          let m = this.reader.cstring(),
            b = this.reader.int32(),
            p = this.reader.int16(),
            v = this.reader.int32(),
            n = this.reader.int16(),
            o = this.reader.int32(),
            y = this.reader.int16() === 0 ? "text" : "binary";
          return new l.Field(m, b, p, v, n, o, y);
        }
        parseParameterDescriptionMessage(m, b, p) {
          this.reader.setBuffer(m, p);
          let v = this.reader.int16(),
            n = new l.ParameterDescriptionMessage(b, v);
          for (let o = 0; o < v; o++) n.dataTypeIDs[o] = this.reader.int32();
          return n;
        }
        parseDataRowMessage(m, b, p) {
          this.reader.setBuffer(m, p);
          let v = this.reader.int16(),
            n = new Array(v);
          for (let o = 0; o < v; o++) {
            let y = this.reader.int32();
            n[o] = y === -1 ? null : this.reader.string(y);
          }
          return new l.DataRowMessage(b, n);
        }
        parseParameterStatusMessage(m, b, p) {
          this.reader.setBuffer(m, p);
          let v = this.reader.cstring(),
            n = this.reader.cstring();
          return new l.ParameterStatusMessage(b, v, n);
        }
        parseBackendKeyData(m, b, p) {
          this.reader.setBuffer(m, p);
          let v = this.reader.int32(),
            n = this.reader.int32();
          return new l.BackendKeyDataMessage(b, v, n);
        }
        parseAuthenticationResponse(m, b, p) {
          this.reader.setBuffer(m, p);
          let v = this.reader.int32(),
            n = { name: "authenticationOk", length: b };
          switch (v) {
            case 0:
              break;
            case 3:
              n.length === 8 && (n.name = "authenticationCleartextPassword");
              break;
            case 5:
              if (n.length === 12) {
                n.name = "authenticationMD5Password";
                let y = this.reader.bytes(4);
                return new l.AuthenticationMD5Password(b, y);
              }
              break;
            case 10:
              ((n.name = "authenticationSASL"), (n.mechanisms = []));
              let o;
              do ((o = this.reader.cstring()), o && n.mechanisms.push(o));
              while (o);
              break;
            case 11:
              ((n.name = "authenticationSASLContinue"),
                (n.data = this.reader.string(b - 8)));
              break;
            case 12:
              ((n.name = "authenticationSASLFinal"),
                (n.data = this.reader.string(b - 8)));
              break;
            default:
              throw new Error("Unknown authenticationOk message type " + v);
          }
          return n;
        }
        parseErrorMessage(m, b, p, v) {
          this.reader.setBuffer(m, p);
          let n = {},
            o = this.reader.string(1);
          for (; o !== "\0"; )
            ((n[o] = this.reader.cstring()), (o = this.reader.string(1)));
          let y = n.M,
            E =
              v === "notice"
                ? new l.NoticeMessage(b, y)
                : new l.DatabaseError(y, b, v);
          return (
            (E.severity = n.S),
            (E.code = n.C),
            (E.detail = n.D),
            (E.hint = n.H),
            (E.position = n.P),
            (E.internalPosition = n.p),
            (E.internalQuery = n.q),
            (E.where = n.W),
            (E.schema = n.s),
            (E.table = n.t),
            (E.column = n.c),
            (E.dataType = n.d),
            (E.constraint = n.n),
            (E.file = n.F),
            (E.line = n.L),
            (E.routine = n.R),
            E
          );
        }
      };
    f(i, "Parser");
    var d = i;
    g.Parser = d;
  }),
  Ut = V((g) => {
    (Q(),
      Object.defineProperty(g, "__esModule", { value: !0 }),
      (g.DatabaseError = g.serialize = g.parse = void 0));
    var l = Dt();
    Object.defineProperty(g, "DatabaseError", {
      enumerable: !0,
      get: f(function () {
        return l.DatabaseError;
      }, "get"),
    });
    var a = Ar();
    Object.defineProperty(g, "serialize", {
      enumerable: !0,
      get: f(function () {
        return a.serialize;
      }, "get"),
    });
    var u = Lr();
    function s(r, h) {
      let i = new u.Parser();
      return (
        r.on("data", (d) => i.parse(d, h)),
        new Promise((d) => r.on("end", () => d()))
      );
    }
    (f(s, "parse"), (g.parse = s));
  }),
  Nt = {};
ce(Nt, { connect: () => Ft });
function Ft({ socket: g, servername: l }) {
  return (g.startTls(l), g);
}
var Rr = ie(() => {
    (Q(), f(Ft, "connect"));
  }),
  Qt = V((g, l) => {
    Q();
    var a = (tt(), re(Ot)),
      u = ge().EventEmitter,
      { parse: s, serialize: r } = Ut(),
      h = r.flush(),
      i = r.sync(),
      d = r.end(),
      w = class extends u {
        constructor(p) {
          (super(),
            (p = p || {}),
            (this.stream = p.stream || new a.Socket()),
            (this._keepAlive = p.keepAlive),
            (this._keepAliveInitialDelayMillis = p.keepAliveInitialDelayMillis),
            (this.lastBuffer = !1),
            (this.parsedStatements = {}),
            (this.ssl = p.ssl || !1),
            (this._ending = !1),
            (this._emitMessage = !1));
          var v = this;
          this.on("newListener", function (n) {
            n === "message" && (v._emitMessage = !0);
          });
        }
        connect(p, v) {
          var n = this;
          ((this._connecting = !0),
            this.stream.setNoDelay(!0),
            this.stream.connect(p, v),
            this.stream.once("connect", function () {
              (n._keepAlive &&
                n.stream.setKeepAlive(!0, n._keepAliveInitialDelayMillis),
                n.emit("connect"));
            }));
          let o = f(function (y) {
            (n._ending && (y.code === "ECONNRESET" || y.code === "EPIPE")) ||
              n.emit("error", y);
          }, "reportStreamError");
          if (
            (this.stream.on("error", o),
            this.stream.on("close", function () {
              n.emit("end");
            }),
            !this.ssl)
          )
            return this.attachListeners(this.stream);
          this.stream.once("data", function (y) {
            var E = y.toString("utf8");
            switch (E) {
              case "S":
                break;
              case "N":
                return (
                  n.stream.end(),
                  n.emit(
                    "error",
                    new Error("The server does not support SSL connections"),
                  )
                );
              default:
                return (
                  n.stream.end(),
                  n.emit(
                    "error",
                    new Error(
                      "There was an error establishing an SSL connection",
                    ),
                  )
                );
            }
            var A = (Rr(), re(Nt));
            let I = { socket: n.stream };
            (n.ssl !== !0 &&
              (Object.assign(I, n.ssl), "key" in n.ssl && (I.key = n.ssl.key)),
              a.isIP(v) === 0 && (I.servername = v));
            try {
              n.stream = A.connect(I);
            } catch (M) {
              return n.emit("error", M);
            }
            (n.attachListeners(n.stream),
              n.stream.on("error", o),
              n.emit("sslconnect"));
          });
        }
        attachListeners(p) {
          (p.on("end", () => {
            this.emit("end");
          }),
            s(p, (v) => {
              var n = v.name === "error" ? "errorMessage" : v.name;
              (this._emitMessage && this.emit("message", v), this.emit(n, v));
            }));
        }
        requestSsl() {
          this.stream.write(r.requestSsl());
        }
        startup(p) {
          this.stream.write(r.startup(p));
        }
        cancel(p, v) {
          this._send(r.cancel(p, v));
        }
        password(p) {
          this._send(r.password(p));
        }
        sendSASLInitialResponseMessage(p, v) {
          this._send(r.sendSASLInitialResponseMessage(p, v));
        }
        sendSCRAMClientFinalMessage(p) {
          this._send(r.sendSCRAMClientFinalMessage(p));
        }
        _send(p) {
          return this.stream.writable ? this.stream.write(p) : !1;
        }
        query(p) {
          this._send(r.query(p));
        }
        parse(p) {
          this._send(r.parse(p));
        }
        bind(p) {
          this._send(r.bind(p));
        }
        execute(p) {
          this._send(r.execute(p));
        }
        flush() {
          this.stream.writable && this.stream.write(h);
        }
        sync() {
          ((this._ending = !0), this._send(h), this._send(i));
        }
        ref() {
          this.stream.ref();
        }
        unref() {
          this.stream.unref();
        }
        end() {
          if (
            ((this._ending = !0), !this._connecting || !this.stream.writable)
          ) {
            this.stream.end();
            return;
          }
          return this.stream.write(d, () => {
            this.stream.end();
          });
        }
        close(p) {
          this._send(r.close(p));
        }
        describe(p) {
          this._send(r.describe(p));
        }
        sendCopyFromChunk(p) {
          this._send(r.copyData(p));
        }
        endCopyFrom() {
          this._send(r.copyDone());
        }
        sendCopyFail(p) {
          this._send(r.copyFail(p));
        }
      };
    f(w, "Connection");
    var m = w;
    l.exports = m;
  }),
  xr = V((g, l) => {
    Q();
    var a = ge().EventEmitter;
    (Be(), re(Ie));
    var u = ke(),
      s = yr(),
      r = vr(),
      h = Xe(),
      i = et(),
      d = _r(),
      w = Oe(),
      m = Qt(),
      b = class extends a {
        constructor(n) {
          (super(),
            (this.connectionParameters = new i(n)),
            (this.user = this.connectionParameters.user),
            (this.database = this.connectionParameters.database),
            (this.port = this.connectionParameters.port),
            (this.host = this.connectionParameters.host),
            Object.defineProperty(this, "password", {
              configurable: !0,
              enumerable: !1,
              writable: !0,
              value: this.connectionParameters.password,
            }),
            (this.replication = this.connectionParameters.replication));
          var o = n || {};
          ((this._Promise = o.Promise || Pe.Promise),
            (this._types = new h(o.types)),
            (this._ending = !1),
            (this._connecting = !1),
            (this._connected = !1),
            (this._connectionError = !1),
            (this._queryable = !0),
            (this.connection =
              o.connection ||
              new m({
                stream: o.stream,
                ssl: this.connectionParameters.ssl,
                keepAlive: o.keepAlive || !1,
                keepAliveInitialDelayMillis: o.keepAliveInitialDelayMillis || 0,
                encoding: this.connectionParameters.client_encoding || "utf8",
              })),
            (this.queryQueue = []),
            (this.binary = o.binary || w.binary),
            (this.processID = null),
            (this.secretKey = null),
            (this.ssl = this.connectionParameters.ssl || !1),
            this.ssl &&
              this.ssl.key &&
              Object.defineProperty(this.ssl, "key", { enumerable: !1 }),
            (this._connectionTimeoutMillis = o.connectionTimeoutMillis || 0));
        }
        _errorAllQueries(n) {
          let o = f((y) => {
            G.nextTick(() => {
              y.handleError(n, this.connection);
            });
          }, "enqueueError");
          (this.activeQuery && (o(this.activeQuery), (this.activeQuery = null)),
            this.queryQueue.forEach(o),
            (this.queryQueue.length = 0));
        }
        _connect(n) {
          var o = this,
            y = this.connection;
          if (
            ((this._connectionCallback = n),
            this._connecting || this._connected)
          ) {
            let E = new Error(
              "Client has already been connected. You cannot reuse a client.",
            );
            G.nextTick(() => {
              n(E);
            });
            return;
          }
          ((this._connecting = !0),
            this.connectionTimeoutHandle,
            this._connectionTimeoutMillis > 0 &&
              (this.connectionTimeoutHandle = setTimeout(() => {
                ((y._ending = !0),
                  y.stream.destroy(new Error("timeout expired")));
              }, this._connectionTimeoutMillis)),
            this.host && this.host.indexOf("/") === 0
              ? y.connect(this.host + "/.s.PGSQL." + this.port)
              : y.connect(this.port, this.host),
            y.on("connect", function () {
              o.ssl ? y.requestSsl() : y.startup(o.getStartupConf());
            }),
            y.on("sslconnect", function () {
              y.startup(o.getStartupConf());
            }),
            this._attachListeners(y),
            y.once("end", () => {
              let E = this._ending
                ? new Error("Connection terminated")
                : new Error("Connection terminated unexpectedly");
              (clearTimeout(this.connectionTimeoutHandle),
                this._errorAllQueries(E),
                this._ending ||
                  (this._connecting && !this._connectionError
                    ? this._connectionCallback
                      ? this._connectionCallback(E)
                      : this._handleErrorEvent(E)
                    : this._connectionError || this._handleErrorEvent(E)),
                G.nextTick(() => {
                  this.emit("end");
                }));
            }));
        }
        connect(n) {
          if (n) {
            this._connect(n);
            return;
          }
          return new this._Promise((o, y) => {
            this._connect((E) => {
              E ? y(E) : o();
            });
          });
        }
        _attachListeners(n) {
          (n.on(
            "authenticationCleartextPassword",
            this._handleAuthCleartextPassword.bind(this),
          ),
            n.on(
              "authenticationMD5Password",
              this._handleAuthMD5Password.bind(this),
            ),
            n.on("authenticationSASL", this._handleAuthSASL.bind(this)),
            n.on(
              "authenticationSASLContinue",
              this._handleAuthSASLContinue.bind(this),
            ),
            n.on(
              "authenticationSASLFinal",
              this._handleAuthSASLFinal.bind(this),
            ),
            n.on("backendKeyData", this._handleBackendKeyData.bind(this)),
            n.on("error", this._handleErrorEvent.bind(this)),
            n.on("errorMessage", this._handleErrorMessage.bind(this)),
            n.on("readyForQuery", this._handleReadyForQuery.bind(this)),
            n.on("notice", this._handleNotice.bind(this)),
            n.on("rowDescription", this._handleRowDescription.bind(this)),
            n.on("dataRow", this._handleDataRow.bind(this)),
            n.on("portalSuspended", this._handlePortalSuspended.bind(this)),
            n.on("emptyQuery", this._handleEmptyQuery.bind(this)),
            n.on("commandComplete", this._handleCommandComplete.bind(this)),
            n.on("parseComplete", this._handleParseComplete.bind(this)),
            n.on("copyInResponse", this._handleCopyInResponse.bind(this)),
            n.on("copyData", this._handleCopyData.bind(this)),
            n.on("notification", this._handleNotification.bind(this)));
        }
        _checkPgPass(n) {
          let o = this.connection;
          typeof this.password == "function"
            ? this._Promise
                .resolve()
                .then(() => this.password())
                .then((y) => {
                  if (y !== void 0) {
                    if (typeof y != "string") {
                      o.emit(
                        "error",
                        new TypeError("Password must be a string"),
                      );
                      return;
                    }
                    this.connectionParameters.password = this.password = y;
                  } else
                    this.connectionParameters.password = this.password = null;
                  n();
                })
                .catch((y) => {
                  o.emit("error", y);
                })
            : this.password !== null
              ? n()
              : r(this.connectionParameters, (y) => {
                  (y !== void 0 &&
                    (this.connectionParameters.password = this.password = y),
                    n());
                });
        }
        _handleAuthCleartextPassword(n) {
          this._checkPgPass(() => {
            this.connection.password(this.password);
          });
        }
        _handleAuthMD5Password(n) {
          this._checkPgPass(() => {
            let o = u.postgresMd5PasswordHash(this.user, this.password, n.salt);
            this.connection.password(o);
          });
        }
        _handleAuthSASL(n) {
          this._checkPgPass(() => {
            ((this.saslSession = s.startSession(n.mechanisms)),
              this.connection.sendSASLInitialResponseMessage(
                this.saslSession.mechanism,
                this.saslSession.response,
              ));
          });
        }
        _handleAuthSASLContinue(n) {
          (s.continueSession(this.saslSession, this.password, n.data),
            this.connection.sendSCRAMClientFinalMessage(
              this.saslSession.response,
            ));
        }
        _handleAuthSASLFinal(n) {
          (s.finalizeSession(this.saslSession, n.data),
            (this.saslSession = null));
        }
        _handleBackendKeyData(n) {
          ((this.processID = n.processID), (this.secretKey = n.secretKey));
        }
        _handleReadyForQuery(n) {
          this._connecting &&
            ((this._connecting = !1),
            (this._connected = !0),
            clearTimeout(this.connectionTimeoutHandle),
            this._connectionCallback &&
              (this._connectionCallback(null, this),
              (this._connectionCallback = null)),
            this.emit("connect"));
          let { activeQuery: o } = this;
          ((this.activeQuery = null),
            (this.readyForQuery = !0),
            o && o.handleReadyForQuery(this.connection),
            this._pulseQueryQueue());
        }
        _handleErrorWhileConnecting(n) {
          if (!this._connectionError) {
            if (
              ((this._connectionError = !0),
              clearTimeout(this.connectionTimeoutHandle),
              this._connectionCallback)
            )
              return this._connectionCallback(n);
            this.emit("error", n);
          }
        }
        _handleErrorEvent(n) {
          if (this._connecting) return this._handleErrorWhileConnecting(n);
          ((this._queryable = !1),
            this._errorAllQueries(n),
            this.emit("error", n));
        }
        _handleErrorMessage(n) {
          if (this._connecting) return this._handleErrorWhileConnecting(n);
          let o = this.activeQuery;
          if (!o) {
            this._handleErrorEvent(n);
            return;
          }
          ((this.activeQuery = null), o.handleError(n, this.connection));
        }
        _handleRowDescription(n) {
          this.activeQuery.handleRowDescription(n);
        }
        _handleDataRow(n) {
          this.activeQuery.handleDataRow(n);
        }
        _handlePortalSuspended(n) {
          this.activeQuery.handlePortalSuspended(this.connection);
        }
        _handleEmptyQuery(n) {
          this.activeQuery.handleEmptyQuery(this.connection);
        }
        _handleCommandComplete(n) {
          this.activeQuery.handleCommandComplete(n, this.connection);
        }
        _handleParseComplete(n) {
          this.activeQuery.name &&
            (this.connection.parsedStatements[this.activeQuery.name] =
              this.activeQuery.text);
        }
        _handleCopyInResponse(n) {
          this.activeQuery.handleCopyInResponse(this.connection);
        }
        _handleCopyData(n) {
          this.activeQuery.handleCopyData(n, this.connection);
        }
        _handleNotification(n) {
          this.emit("notification", n);
        }
        _handleNotice(n) {
          this.emit("notice", n);
        }
        getStartupConf() {
          var n = this.connectionParameters,
            o = { user: n.user, database: n.database },
            y = n.application_name || n.fallback_application_name;
          return (
            y && (o.application_name = y),
            n.replication && (o.replication = "" + n.replication),
            n.statement_timeout &&
              (o.statement_timeout = String(parseInt(n.statement_timeout, 10))),
            n.lock_timeout &&
              (o.lock_timeout = String(parseInt(n.lock_timeout, 10))),
            n.idle_in_transaction_session_timeout &&
              (o.idle_in_transaction_session_timeout = String(
                parseInt(n.idle_in_transaction_session_timeout, 10),
              )),
            n.options && (o.options = n.options),
            o
          );
        }
        cancel(n, o) {
          if (n.activeQuery === o) {
            var y = this.connection;
            (this.host && this.host.indexOf("/") === 0
              ? y.connect(this.host + "/.s.PGSQL." + this.port)
              : y.connect(this.port, this.host),
              y.on("connect", function () {
                y.cancel(n.processID, n.secretKey);
              }));
          } else
            n.queryQueue.indexOf(o) !== -1 &&
              n.queryQueue.splice(n.queryQueue.indexOf(o), 1);
        }
        setTypeParser(n, o, y) {
          return this._types.setTypeParser(n, o, y);
        }
        getTypeParser(n, o) {
          return this._types.getTypeParser(n, o);
        }
        escapeIdentifier(n) {
          return '"' + n.replace(/"/g, '""') + '"';
        }
        escapeLiteral(n) {
          for (var o = !1, y = "'", E = 0; E < n.length; E++) {
            var A = n[E];
            A === "'"
              ? (y += A + A)
              : A === "\\"
                ? ((y += A + A), (o = !0))
                : (y += A);
          }
          return ((y += "'"), o === !0 && (y = " E" + y), y);
        }
        _pulseQueryQueue() {
          if (this.readyForQuery === !0)
            if (
              ((this.activeQuery = this.queryQueue.shift()), this.activeQuery)
            ) {
              ((this.readyForQuery = !1), (this.hasExecuted = !0));
              let n = this.activeQuery.submit(this.connection);
              n &&
                G.nextTick(() => {
                  (this.activeQuery.handleError(n, this.connection),
                    (this.readyForQuery = !0),
                    this._pulseQueryQueue());
                });
            } else
              this.hasExecuted &&
                ((this.activeQuery = null), this.emit("drain"));
        }
        query(n, o, y) {
          var E, A, I, M, T;
          if (n == null)
            throw new TypeError("Client was passed a null or undefined query");
          return (
            typeof n.submit == "function"
              ? ((I =
                  n.query_timeout || this.connectionParameters.query_timeout),
                (A = E = n),
                typeof o == "function" && (E.callback = E.callback || o))
              : ((I = this.connectionParameters.query_timeout),
                (E = new d(n, o, y)),
                E.callback ||
                  (A = new this._Promise((S, R) => {
                    E.callback = (x, C) => (x ? R(x) : S(C));
                  }))),
            I &&
              ((T = E.callback),
              (M = setTimeout(() => {
                var S = new Error("Query read timeout");
                (G.nextTick(() => {
                  E.handleError(S, this.connection);
                }),
                  T(S),
                  (E.callback = () => {}));
                var R = this.queryQueue.indexOf(E);
                (R > -1 && this.queryQueue.splice(R, 1),
                  this._pulseQueryQueue());
              }, I)),
              (E.callback = (S, R) => {
                (clearTimeout(M), T(S, R));
              })),
            this.binary && !E.binary && (E.binary = !0),
            E._result && !E._result._types && (E._result._types = this._types),
            this._queryable
              ? this._ending
                ? (G.nextTick(() => {
                    E.handleError(
                      new Error("Client was closed and is not queryable"),
                      this.connection,
                    );
                  }),
                  A)
                : (this.queryQueue.push(E), this._pulseQueryQueue(), A)
              : (G.nextTick(() => {
                  E.handleError(
                    new Error(
                      "Client has encountered a connection error and is not queryable",
                    ),
                    this.connection,
                  );
                }),
                A)
          );
        }
        ref() {
          this.connection.ref();
        }
        unref() {
          this.connection.unref();
        }
        end(n) {
          if (((this._ending = !0), !this.connection._connecting))
            if (n) n();
            else return this._Promise.resolve();
          if (
            (this.activeQuery || !this._queryable
              ? this.connection.stream.destroy()
              : this.connection.end(),
            n)
          )
            this.connection.once("end", n);
          else
            return new this._Promise((o) => {
              this.connection.once("end", o);
            });
        }
      };
    f(b, "Client");
    var p = b;
    ((p.Query = d), (l.exports = p));
  }),
  Mr = V((g, l) => {
    Q();
    var a = ge().EventEmitter,
      u = f(function () {}, "NOOP"),
      s = f((n, o) => {
        let y = n.findIndex(o);
        return y === -1 ? void 0 : n.splice(y, 1)[0];
      }, "removeWhere"),
      r = class {
        constructor(o, y, E) {
          ((this.client = o), (this.idleListener = y), (this.timeoutId = E));
        }
      };
    f(r, "IdleItem");
    var h = r,
      i = class {
        constructor(o) {
          this.callback = o;
        }
      };
    f(i, "PendingItem");
    var d = i;
    function w() {
      throw new Error(
        "Release called on client which has already been released to the pool.",
      );
    }
    f(w, "throwOnDoubleRelease");
    function m(n, o) {
      if (o) return { callback: o, result: void 0 };
      let y,
        E,
        A = f(function (M, T) {
          M ? y(M) : E(T);
        }, "cb"),
        I = new n(function (M, T) {
          ((E = M), (y = T));
        }).catch((M) => {
          throw (Error.captureStackTrace(M), M);
        });
      return { callback: A, result: I };
    }
    f(m, "promisify");
    function b(n, o) {
      return f(function y(E) {
        ((E.client = o),
          o.removeListener("error", y),
          o.on("error", () => {
            n.log(
              "additional client error after disconnection due to error",
              E,
            );
          }),
          n._remove(o),
          n.emit("error", E, o));
      }, "idleListener");
    }
    f(b, "makeIdleListener");
    var p = class extends a {
      constructor(o, y) {
        (super(),
          (this.options = Object.assign({}, o)),
          o != null &&
            "password" in o &&
            Object.defineProperty(this.options, "password", {
              configurable: !0,
              enumerable: !1,
              writable: !0,
              value: o.password,
            }),
          o != null &&
            o.ssl &&
            o.ssl.key &&
            Object.defineProperty(this.options.ssl, "key", { enumerable: !1 }),
          (this.options.max = this.options.max || this.options.poolSize || 10),
          (this.options.maxUses = this.options.maxUses || 1 / 0),
          (this.options.allowExitOnIdle = this.options.allowExitOnIdle || !1),
          (this.options.maxLifetimeSeconds =
            this.options.maxLifetimeSeconds || 0),
          (this.log = this.options.log || function () {}),
          (this.Client = this.options.Client || y || rt().Client),
          (this.Promise = this.options.Promise || Pe.Promise),
          typeof this.options.idleTimeoutMillis > "u" &&
            (this.options.idleTimeoutMillis = 1e4),
          (this._clients = []),
          (this._idle = []),
          (this._expired = new WeakSet()),
          (this._pendingQueue = []),
          (this._endCallback = void 0),
          (this.ending = !1),
          (this.ended = !1));
      }
      _isFull() {
        return this._clients.length >= this.options.max;
      }
      _pulseQueue() {
        if ((this.log("pulse queue"), this.ended)) {
          this.log("pulse queue ended");
          return;
        }
        if (this.ending) {
          (this.log("pulse queue on ending"),
            this._idle.length &&
              this._idle.slice().map((y) => {
                this._remove(y.client);
              }),
            this._clients.length || ((this.ended = !0), this._endCallback()));
          return;
        }
        if (!this._pendingQueue.length) {
          this.log("no queued requests");
          return;
        }
        if (!this._idle.length && this._isFull()) return;
        let o = this._pendingQueue.shift();
        if (this._idle.length) {
          let y = this._idle.pop();
          clearTimeout(y.timeoutId);
          let E = y.client;
          E.ref && E.ref();
          let A = y.idleListener;
          return this._acquireClient(E, o, A, !1);
        }
        if (!this._isFull()) return this.newClient(o);
        throw new Error("unexpected condition");
      }
      _remove(o) {
        let y = s(this._idle, (E) => E.client === o);
        (y !== void 0 && clearTimeout(y.timeoutId),
          (this._clients = this._clients.filter((E) => E !== o)),
          o.end(),
          this.emit("remove", o));
      }
      connect(o) {
        if (this.ending) {
          let A = new Error("Cannot use a pool after calling end on the pool");
          return o ? o(A) : this.Promise.reject(A);
        }
        let y = m(this.Promise, o),
          E = y.result;
        if (this._isFull() || this._idle.length) {
          if (
            (this._idle.length && G.nextTick(() => this._pulseQueue()),
            !this.options.connectionTimeoutMillis)
          )
            return (this._pendingQueue.push(new d(y.callback)), E);
          let A = f((T, S, R) => {
              (clearTimeout(M), y.callback(T, S, R));
            }, "queueCallback"),
            I = new d(A),
            M = setTimeout(() => {
              (s(this._pendingQueue, (T) => T.callback === A),
                (I.timedOut = !0),
                y.callback(
                  new Error("timeout exceeded when trying to connect"),
                ));
            }, this.options.connectionTimeoutMillis);
          return (this._pendingQueue.push(I), E);
        }
        return (this.newClient(new d(y.callback)), E);
      }
      newClient(o) {
        let y = new this.Client(this.options);
        this._clients.push(y);
        let E = b(this, y);
        this.log("checking client timeout");
        let A,
          I = !1;
        (this.options.connectionTimeoutMillis &&
          (A = setTimeout(() => {
            (this.log("ending client due to timeout"),
              (I = !0),
              y.connection ? y.connection.stream.destroy() : y.end());
          }, this.options.connectionTimeoutMillis)),
          this.log("connecting new client"),
          y.connect((M) => {
            if ((A && clearTimeout(A), y.on("error", E), M))
              (this.log("client failed to connect", M),
                (this._clients = this._clients.filter((T) => T !== y)),
                I &&
                  (M.message =
                    "Connection terminated due to connection timeout"),
                this._pulseQueue(),
                o.timedOut || o.callback(M, void 0, u));
            else {
              if (
                (this.log("new client connected"),
                this.options.maxLifetimeSeconds !== 0)
              ) {
                let T = setTimeout(() => {
                  (this.log("ending client due to expired lifetime"),
                    this._expired.add(y),
                    this._idle.findIndex((S) => S.client === y) !== -1 &&
                      this._acquireClient(y, new d((S, R, x) => x()), E, !1));
                }, this.options.maxLifetimeSeconds * 1e3);
                (T.unref(), y.once("end", () => clearTimeout(T)));
              }
              return this._acquireClient(y, o, E, !0);
            }
          }));
      }
      _acquireClient(o, y, E, A) {
        (A && this.emit("connect", o),
          this.emit("acquire", o),
          (o.release = this._releaseOnce(o, E)),
          o.removeListener("error", E),
          y.timedOut
            ? A && this.options.verify
              ? this.options.verify(o, o.release)
              : o.release()
            : A && this.options.verify
              ? this.options.verify(o, (I) => {
                  if (I) return (o.release(I), y.callback(I, void 0, u));
                  y.callback(void 0, o, o.release);
                })
              : y.callback(void 0, o, o.release));
      }
      _releaseOnce(o, y) {
        let E = !1;
        return (A) => {
          (E && w(), (E = !0), this._release(o, y, A));
        };
      }
      _release(o, y, E) {
        if (
          (o.on("error", y),
          (o._poolUseCount = (o._poolUseCount || 0) + 1),
          this.emit("release", E, o),
          E ||
            this.ending ||
            !o._queryable ||
            o._ending ||
            o._poolUseCount >= this.options.maxUses)
        ) {
          (o._poolUseCount >= this.options.maxUses &&
            this.log("remove expended client"),
            this._remove(o),
            this._pulseQueue());
          return;
        }
        if (this._expired.has(o)) {
          (this.log("remove expired client"),
            this._expired.delete(o),
            this._remove(o),
            this._pulseQueue());
          return;
        }
        let A;
        (this.options.idleTimeoutMillis &&
          ((A = setTimeout(() => {
            (this.log("remove idle client"), this._remove(o));
          }, this.options.idleTimeoutMillis)),
          this.options.allowExitOnIdle && A.unref()),
          this.options.allowExitOnIdle && o.unref(),
          this._idle.push(new h(o, y, A)),
          this._pulseQueue());
      }
      query(o, y, E) {
        if (typeof o == "function") {
          let I = m(this.Promise, o);
          return (
            Ve(function () {
              return I.callback(
                new Error(
                  "Passing a function as the first parameter to pool.query is not supported",
                ),
              );
            }),
            I.result
          );
        }
        typeof y == "function" && ((E = y), (y = void 0));
        let A = m(this.Promise, E);
        return (
          (E = A.callback),
          this.connect((I, M) => {
            if (I) return E(I);
            let T = !1,
              S = f((R) => {
                T || ((T = !0), M.release(R), E(R));
              }, "onError");
            (M.once("error", S), this.log("dispatching query"));
            try {
              M.query(o, y, (R, x) => {
                if (
                  (this.log("query dispatched"),
                  M.removeListener("error", S),
                  !T)
                )
                  return ((T = !0), M.release(R), R ? E(R) : E(void 0, x));
              });
            } catch (R) {
              return (M.release(R), E(R));
            }
          }),
          A.result
        );
      }
      end(o) {
        if ((this.log("ending"), this.ending)) {
          let E = new Error("Called end on pool more than once");
          return o ? o(E) : this.Promise.reject(E);
        }
        this.ending = !0;
        let y = m(this.Promise, o);
        return ((this._endCallback = y.callback), this._pulseQueue(), y.result);
      }
      get waitingCount() {
        return this._pendingQueue.length;
      }
      get idleCount() {
        return this._idle.length;
      }
      get expiredCount() {
        return this._clients.reduce(
          (o, y) => o + (this._expired.has(y) ? 1 : 0),
          0,
        );
      }
      get totalCount() {
        return this._clients.length;
      }
    };
    f(p, "Pool");
    var v = p;
    l.exports = v;
  }),
  qt = {};
ce(qt, { default: () => jt });
var jt,
  Pr = ie(() => {
    (Q(), (jt = {}));
  }),
  Br = V((g, l) => {
    l.exports = {
      name: "pg",
      version: "8.8.0",
      description:
        "PostgreSQL client - pure javascript & libpq with the same API",
      keywords: [
        "database",
        "libpq",
        "pg",
        "postgre",
        "postgres",
        "postgresql",
        "rdbms",
      ],
      homepage: "https://github.com/brianc/node-postgres",
      repository: {
        type: "git",
        url: "git://github.com/brianc/node-postgres.git",
        directory: "packages/pg",
      },
      author: "Brian Carlson <brian.m.carlson@gmail.com>",
      main: "./lib",
      dependencies: {
        "buffer-writer": "2.0.0",
        "packet-reader": "1.0.0",
        "pg-connection-string": "^2.5.0",
        "pg-pool": "^3.5.2",
        "pg-protocol": "^1.5.0",
        "pg-types": "^2.1.0",
        pgpass: "1.x",
      },
      devDependencies: {
        async: "2.6.4",
        bluebird: "3.5.2",
        co: "4.6.0",
        "pg-copy-streams": "0.3.0",
      },
      peerDependencies: { "pg-native": ">=3.0.1" },
      peerDependenciesMeta: { "pg-native": { optional: !0 } },
      scripts: { test: "make test-all" },
      files: ["lib", "SPONSORS.md"],
      license: "MIT",
      engines: { node: ">= 8.0.0" },
      gitHead: "c99fb2c127ddf8d712500db2c7b9a5491a178655",
    };
  }),
  Tr = V((g, l) => {
    Q();
    var a = ge().EventEmitter,
      u = (Be(), re(Ie)),
      s = ke(),
      r = (l.exports = function (i, d, w) {
        (a.call(this),
          (i = s.normalizeQueryConfig(i, d, w)),
          (this.text = i.text),
          (this.values = i.values),
          (this.name = i.name),
          (this.callback = i.callback),
          (this.state = "new"),
          (this._arrayMode = i.rowMode === "array"),
          (this._emitRowEvents = !1),
          this.on(
            "newListener",
            function (m) {
              m === "row" && (this._emitRowEvents = !0);
            }.bind(this),
          ));
      });
    u.inherits(r, a);
    var h = {
      sqlState: "code",
      statementPosition: "position",
      messagePrimary: "message",
      context: "where",
      schemaName: "schema",
      tableName: "table",
      columnName: "column",
      dataTypeName: "dataType",
      constraintName: "constraint",
      sourceFile: "file",
      sourceLine: "line",
      sourceFunction: "routine",
    };
    ((r.prototype.handleError = function (i) {
      var d = this.native.pq.resultErrorFields();
      if (d)
        for (var w in d) {
          var m = h[w] || w;
          i[m] = d[w];
        }
      (this.callback ? this.callback(i) : this.emit("error", i),
        (this.state = "error"));
    }),
      (r.prototype.then = function (i, d) {
        return this._getPromise().then(i, d);
      }),
      (r.prototype.catch = function (i) {
        return this._getPromise().catch(i);
      }),
      (r.prototype._getPromise = function () {
        return this._promise
          ? this._promise
          : ((this._promise = new Promise(
              function (i, d) {
                (this._once("end", i), this._once("error", d));
              }.bind(this),
            )),
            this._promise);
      }),
      (r.prototype.submit = function (i) {
        this.state = "running";
        var d = this;
        ((this.native = i.native), (i.native.arrayMode = this._arrayMode));
        var w = f(function (p, v, n) {
          if (
            ((i.native.arrayMode = !1),
            Ve(function () {
              d.emit("_done");
            }),
            p)
          )
            return d.handleError(p);
          (d._emitRowEvents &&
            (n.length > 1
              ? v.forEach((o, y) => {
                  o.forEach((E) => {
                    d.emit("row", E, n[y]);
                  });
                })
              : v.forEach(function (o) {
                  d.emit("row", o, n);
                })),
            (d.state = "end"),
            d.emit("end", n),
            d.callback && d.callback(null, n));
        }, "after");
        if ((G.domain && (w = G.domain.bind(w)), this.name)) {
          this.name.length > 63 &&
            (console.error(
              "Warning! Postgres only supports 63 characters for query names.",
            ),
            console.error("You supplied %s (%s)", this.name, this.name.length),
            console.error(
              "This can cause conflicts and silent errors executing queries",
            ));
          var m = (this.values || []).map(s.prepareValue);
          if (i.namedQueries[this.name]) {
            if (this.text && i.namedQueries[this.name] !== this.text) {
              let p = new Error(
                `Prepared statements must be unique - '${this.name}' was used for a different statement`,
              );
              return w(p);
            }
            return i.native.execute(this.name, m, w);
          }
          return i.native.prepare(this.name, this.text, m.length, function (p) {
            return p
              ? w(p)
              : ((i.namedQueries[d.name] = d.text),
                d.native.execute(d.name, m, w));
          });
        } else if (this.values) {
          if (!Array.isArray(this.values)) {
            let p = new Error("Query values must be an array");
            return w(p);
          }
          var b = this.values.map(s.prepareValue);
          i.native.query(this.text, b, w);
        } else i.native.query(this.text, w);
      }));
  }),
  Or = V((g, l) => {
    Q();
    var a = (Pr(), re(qt)),
      u = Xe();
    Br();
    var s = ge().EventEmitter,
      r = (Be(), re(Ie)),
      h = et(),
      i = Tr(),
      d = (l.exports = function (w) {
        (s.call(this),
          (w = w || {}),
          (this._Promise = w.Promise || Pe.Promise),
          (this._types = new u(w.types)),
          (this.native = new a({ types: this._types })),
          (this._queryQueue = []),
          (this._ending = !1),
          (this._connecting = !1),
          (this._connected = !1),
          (this._queryable = !0));
        var m = (this.connectionParameters = new h(w));
        ((this.user = m.user),
          Object.defineProperty(this, "password", {
            configurable: !0,
            enumerable: !1,
            writable: !0,
            value: m.password,
          }),
          (this.database = m.database),
          (this.host = m.host),
          (this.port = m.port),
          (this.namedQueries = {}));
      });
    ((d.Query = i),
      r.inherits(d, s),
      (d.prototype._errorAllQueries = function (w) {
        let m = f((b) => {
          G.nextTick(() => {
            ((b.native = this.native), b.handleError(w));
          });
        }, "enqueueError");
        (this._hasActiveQuery() &&
          (m(this._activeQuery), (this._activeQuery = null)),
          this._queryQueue.forEach(m),
          (this._queryQueue.length = 0));
      }),
      (d.prototype._connect = function (w) {
        var m = this;
        if (this._connecting) {
          G.nextTick(() =>
            w(
              new Error(
                "Client has already been connected. You cannot reuse a client.",
              ),
            ),
          );
          return;
        }
        ((this._connecting = !0),
          this.connectionParameters.getLibpqConnectionString(function (b, p) {
            if (b) return w(b);
            m.native.connect(p, function (v) {
              if (v) return (m.native.end(), w(v));
              ((m._connected = !0),
                m.native.on("error", function (n) {
                  ((m._queryable = !1),
                    m._errorAllQueries(n),
                    m.emit("error", n));
                }),
                m.native.on("notification", function (n) {
                  m.emit("notification", {
                    channel: n.relname,
                    payload: n.extra,
                  });
                }),
                m.emit("connect"),
                m._pulseQueryQueue(!0),
                w());
            });
          }));
      }),
      (d.prototype.connect = function (w) {
        if (w) {
          this._connect(w);
          return;
        }
        return new this._Promise((m, b) => {
          this._connect((p) => {
            p ? b(p) : m();
          });
        });
      }),
      (d.prototype.query = function (w, m, b) {
        var p, v, n, o, y;
        if (w == null)
          throw new TypeError("Client was passed a null or undefined query");
        if (typeof w.submit == "function")
          ((n = w.query_timeout || this.connectionParameters.query_timeout),
            (v = p = w),
            typeof m == "function" && (w.callback = m));
        else if (
          ((n = this.connectionParameters.query_timeout),
          (p = new i(w, m, b)),
          !p.callback)
        ) {
          let E, A;
          ((v = new this._Promise((I, M) => {
            ((E = I), (A = M));
          })),
            (p.callback = (I, M) => (I ? A(I) : E(M))));
        }
        return (
          n &&
            ((y = p.callback),
            (o = setTimeout(() => {
              var E = new Error("Query read timeout");
              (G.nextTick(() => {
                p.handleError(E, this.connection);
              }),
                y(E),
                (p.callback = () => {}));
              var A = this._queryQueue.indexOf(p);
              (A > -1 && this._queryQueue.splice(A, 1),
                this._pulseQueryQueue());
            }, n)),
            (p.callback = (E, A) => {
              (clearTimeout(o), y(E, A));
            })),
          this._queryable
            ? this._ending
              ? ((p.native = this.native),
                G.nextTick(() => {
                  p.handleError(
                    new Error("Client was closed and is not queryable"),
                  );
                }),
                v)
              : (this._queryQueue.push(p), this._pulseQueryQueue(), v)
            : ((p.native = this.native),
              G.nextTick(() => {
                p.handleError(
                  new Error(
                    "Client has encountered a connection error and is not queryable",
                  ),
                );
              }),
              v)
        );
      }),
      (d.prototype.end = function (w) {
        var m = this;
        ((this._ending = !0),
          this._connected || this.once("connect", this.end.bind(this, w)));
        var b;
        return (
          w ||
            (b = new this._Promise(function (p, v) {
              w = f((n) => (n ? v(n) : p()), "cb");
            })),
          this.native.end(function () {
            (m._errorAllQueries(new Error("Connection terminated")),
              G.nextTick(() => {
                (m.emit("end"), w && w());
              }));
          }),
          b
        );
      }),
      (d.prototype._hasActiveQuery = function () {
        return (
          this._activeQuery &&
          this._activeQuery.state !== "error" &&
          this._activeQuery.state !== "end"
        );
      }),
      (d.prototype._pulseQueryQueue = function (w) {
        if (this._connected && !this._hasActiveQuery()) {
          var m = this._queryQueue.shift();
          if (!m) {
            w || this.emit("drain");
            return;
          }
          ((this._activeQuery = m), m.submit(this));
          var b = this;
          m.once("_done", function () {
            b._pulseQueryQueue();
          });
        }
      }),
      (d.prototype.cancel = function (w) {
        this._activeQuery === w
          ? this.native.cancel(function () {})
          : this._queryQueue.indexOf(w) !== -1 &&
            this._queryQueue.splice(this._queryQueue.indexOf(w), 1);
      }),
      (d.prototype.ref = function () {}),
      (d.prototype.unref = function () {}),
      (d.prototype.setTypeParser = function (w, m, b) {
        return this._types.setTypeParser(w, m, b);
      }),
      (d.prototype.getTypeParser = function (w, m) {
        return this._types.getTypeParser(w, m);
      }));
  }),
  ht = V((g, l) => {
    (Q(), (l.exports = Or()));
  }),
  rt = V((g, l) => {
    Q();
    var a = xr(),
      u = Oe(),
      s = Qt(),
      r = Mr(),
      { DatabaseError: h } = Ut(),
      i = f((w) => {
        var m;
        return (
          (m = class extends r {
            constructor(b) {
              super(b, w);
            }
          }),
          f(m, "BoundPool"),
          m
        );
      }, "poolFactory"),
      d = f(function (w) {
        ((this.defaults = u),
          (this.Client = w),
          (this.Query = this.Client.Query),
          (this.Pool = i(this.Client)),
          (this._pools = []),
          (this.Connection = s),
          (this.types = Te()),
          (this.DatabaseError = h));
      }, "PG");
    typeof G.env.NODE_PG_FORCE_NATIVE < "u"
      ? (l.exports = new d(ht()))
      : ((l.exports = new d(a)),
        Object.defineProperty(l.exports, "native", {
          configurable: !0,
          enumerable: !1,
          get() {
            var w = null;
            try {
              w = new d(ht());
            } catch (m) {
              if (m.code !== "MODULE_NOT_FOUND") throw m;
            }
            return (
              Object.defineProperty(l.exports, "native", { value: w }),
              w
            );
          },
        }));
  });
Q();
var $t = we(rt());
tt();
Q();
Tt();
tt();
var kr = we(ke()),
  Dr = we(Xe()),
  Wt = class extends Error {
    constructor() {
      (super(...arguments),
        W(this, "name", "NeonDbError"),
        W(this, "severity"),
        W(this, "code"),
        W(this, "detail"),
        W(this, "hint"),
        W(this, "position"),
        W(this, "internalPosition"),
        W(this, "internalQuery"),
        W(this, "where"),
        W(this, "schema"),
        W(this, "table"),
        W(this, "column"),
        W(this, "dataType"),
        W(this, "constraint"),
        W(this, "file"),
        W(this, "line"),
        W(this, "routine"),
        W(this, "sourceError"));
    }
  };
f(Wt, "NeonDbError");
var Me = Wt,
  ft =
    "transaction() expects an array of queries, or a function returning an array of queries",
  Ur = [
    "severity",
    "code",
    "detail",
    "hint",
    "position",
    "internalPosition",
    "internalQuery",
    "where",
    "schema",
    "table",
    "column",
    "dataType",
    "constraint",
    "file",
    "line",
    "routine",
  ];
function nt(
  g,
  {
    arrayMode: l,
    fullResults: a,
    fetchOptions: u,
    isolationLevel: s,
    readOnly: r,
    deferrable: h,
    queryCallback: i,
    resultCallback: d,
  } = {},
) {
  if (!g)
    throw new Error(
      "No database connection string was provided to `neon()`. Perhaps an environment variable has not been set?",
    );
  let w;
  try {
    w = Ze(g);
  } catch {
    throw new Error(
      "Database connection string provided to `neon()` is not a valid URL. Connection string: " +
        String(g),
    );
  }
  let {
    protocol: m,
    username: b,
    password: p,
    hostname: v,
    port: n,
    pathname: o,
  } = w;
  if ((m !== "postgres:" && m !== "postgresql:") || !b || !p || !v || !o)
    throw new Error(
      "Database connection string format for `neon()` should be: postgresql://user:password@host.tld/dbname?option=value",
    );
  function y(A, ...I) {
    let M, T;
    if (typeof A == "string") ((M = A), (T = I[1]), (I = I[0] ?? []));
    else {
      M = "";
      for (let R = 0; R < A.length; R++)
        ((M += A[R]), R < I.length && (M += "$" + (R + 1)));
    }
    I = I.map((R) => (0, kr.prepareValue)(R));
    let S = { query: M, params: I };
    return (i && i(S), Ht(E, S, T));
  }
  (f(y, "resolve"),
    (y.transaction = async (A, I) => {
      if ((typeof A == "function" && (A = A(y)), !Array.isArray(A)))
        throw new Error(ft);
      A.forEach((S) => {
        if (S[Symbol.toStringTag] !== "NeonQueryPromise") throw new Error(ft);
      });
      let M = A.map((S) => S.parameterizedQuery),
        T = A.map((S) => S.opts ?? {});
      return E(M, T, I);
    }));
  async function E(A, I, M) {
    let { fetchEndpoint: T, fetchFunction: S } = De,
      R = typeof T == "function" ? T(v, n) : T,
      x = Array.isArray(A) ? { queries: A } : A,
      C = u ?? {},
      O = l ?? !1,
      P = a ?? !1,
      N = s,
      F = r,
      k = h;
    (M !== void 0 &&
      (M.fetchOptions !== void 0 && (C = { ...C, ...M.fetchOptions }),
      M.arrayMode !== void 0 && (O = M.arrayMode),
      M.fullResults !== void 0 && (P = M.fullResults),
      M.isolationLevel !== void 0 && (N = M.isolationLevel),
      M.readOnly !== void 0 && (F = M.readOnly),
      M.deferrable !== void 0 && (k = M.deferrable)),
      I !== void 0 &&
        !Array.isArray(I) &&
        I.fetchOptions !== void 0 &&
        (C = { ...C, ...I.fetchOptions }));
    let U = {
      "Neon-Connection-String": g,
      "Neon-Raw-Text-Output": "true",
      "Neon-Array-Mode": "true",
    };
    Array.isArray(A) &&
      (N !== void 0 && (U["Neon-Batch-Isolation-Level"] = N),
      F !== void 0 && (U["Neon-Batch-Read-Only"] = String(F)),
      k !== void 0 && (U["Neon-Batch-Deferrable"] = String(k)));
    let q;
    try {
      q = await (S ?? fetch)(R, {
        method: "POST",
        body: JSON.stringify(x),
        headers: U,
        ...C,
      });
    } catch ($) {
      let z = new Me(`Error connecting to database: ${$.message}`);
      throw ((z.sourceError = $), z);
    }
    if (q.ok) {
      let $ = await q.json();
      if (Array.isArray(A)) {
        let z = $.results;
        if (!Array.isArray(z))
          throw new Me("Neon internal error: unexpected result format");
        return z.map((K, oe) => {
          let Z = I[oe] ?? {},
            ne = Z.arrayMode ?? O,
            Se = Z.fullResults ?? P;
          return Ge(K, {
            arrayMode: ne,
            fullResults: Se,
            parameterizedQuery: A[oe],
            resultCallback: d,
            types: Z.types,
          });
        });
      } else {
        let z = I ?? {},
          K = z.arrayMode ?? O,
          oe = z.fullResults ?? P;
        return Ge($, {
          arrayMode: K,
          fullResults: oe,
          parameterizedQuery: A,
          resultCallback: d,
          types: z.types,
        });
      }
    } else {
      let { status: $ } = q;
      if ($ === 400) {
        let z = await q.json(),
          K = new Me(z.message);
        for (let oe of Ur) K[oe] = z[oe] ?? void 0;
        throw K;
      } else {
        let z = await q.text();
        throw new Me(`Server error (HTTP status ${$}): ${z}`);
      }
    }
  }
  return (f(E, "execute"), y);
}
f(nt, "neon");
function Ht(g, l, a) {
  return {
    [Symbol.toStringTag]: "NeonQueryPromise",
    parameterizedQuery: l,
    opts: a,
    then: f((u, s) => g(l, a).then(u, s), "then"),
    catch: f((u) => g(l, a).catch(u), "catch"),
    finally: f((u) => g(l, a).finally(u), "finally"),
  };
}
f(Ht, "createNeonQueryPromise");
function Ge(
  g,
  {
    arrayMode: l,
    fullResults: a,
    parameterizedQuery: u,
    resultCallback: s,
    types: r,
  },
) {
  let h = new Dr.default(r),
    i = g.fields.map((m) => m.name),
    d = g.fields.map((m) => h.getTypeParser(m.dataTypeID)),
    w =
      l === !0
        ? g.rows.map((m) => m.map((b, p) => (b === null ? null : d[p](b))))
        : g.rows.map((m) =>
            Object.fromEntries(
              m.map((b, p) => [i[p], b === null ? null : d[p](b)]),
            ),
          );
  return (
    s && s(u, g, w, { arrayMode: l, fullResults: a }),
    a
      ? ((g.viaNeonFetch = !0),
        (g.rowAsArray = l),
        (g.rows = w),
        (g._parsers = d),
        (g._types = h),
        g)
      : w
  );
}
f(Ge, "processQueryResult");
var Nr = we(et()),
  Ee = we(rt()),
  Gt = class extends $t.Client {
    constructor(l) {
      (super(l), (this.config = l));
    }
    get neonConfig() {
      return this.connection.stream;
    }
    connect(l) {
      var w, m;
      let { neonConfig: a } = this;
      (a.forceDisablePgSSL && (this.ssl = this.connection.ssl = !1),
        this.ssl &&
          a.useSecureWebSocket &&
          console.warn(
            "SSL is enabled for both Postgres (e.g. ?sslmode=require in the connection string + forceDisablePgSSL = false) and the WebSocket tunnel (useSecureWebSocket = true). Double encryption will increase latency and CPU usage. It may be appropriate to disable SSL in the Postgres connection parameters or set forceDisablePgSSL = true.",
          ));
      let u =
          ((w = this.config) == null ? void 0 : w.host) !== void 0 ||
          ((m = this.config) == null ? void 0 : m.connectionString) !==
            void 0 ||
          G.env.PGHOST !== void 0,
        s = G.env.USER ?? G.env.USERNAME;
      if (
        !u &&
        this.host === "localhost" &&
        this.user === s &&
        this.database === s &&
        this.password === null
      )
        throw new Error(
          `No database host or connection string was set, and key parameters have default values (host: localhost, user: ${s}, db: ${s}, password: null). Is an environment variable missing? Alternatively, if you intended to connect with these parameters, please set the host to 'localhost' explicitly.`,
        );
      let r = super.connect(l),
        h = a.pipelineTLS && this.ssl,
        i = a.pipelineConnect === "password";
      if (!h && !a.pipelineConnect) return r;
      let d = this.connection;
      if ((h && d.on("connect", () => d.stream.emit("data", "S")), i)) {
        (d.removeAllListeners("authenticationCleartextPassword"),
          d.removeAllListeners("readyForQuery"),
          d.once("readyForQuery", () =>
            d.on("readyForQuery", this._handleReadyForQuery.bind(this)),
          ));
        let b = this.ssl ? "sslconnect" : "connect";
        d.on(b, () => {
          (this._handleAuthCleartextPassword(), this._handleReadyForQuery());
        });
      }
      return r;
    }
    async _handleAuthSASLContinue(l) {
      let a = this.saslSession,
        u = this.password,
        s = l.data;
      if (
        a.message !== "SASLInitialResponse" ||
        typeof u != "string" ||
        typeof s != "string"
      )
        throw new Error("SASL: protocol error");
      let r = Object.fromEntries(
          s.split(",").map(($) => {
            if (!/^.=/.test($))
              throw new Error("SASL: Invalid attribute pair entry");
            let z = $[0],
              K = $.substring(2);
            return [z, K];
          }),
        ),
        h = r.r,
        i = r.s,
        d = r.i;
      if (!h || !/^[!-+--~]+$/.test(h))
        throw new Error(
          "SASL: SCRAM-SERVER-FIRST-MESSAGE: nonce missing/unprintable",
        );
      if (
        !i ||
        !/^(?:[a-zA-Z0-9+/]{4})*(?:[a-zA-Z0-9+/]{2}==|[a-zA-Z0-9+/]{3}=)?$/.test(
          i,
        )
      )
        throw new Error(
          "SASL: SCRAM-SERVER-FIRST-MESSAGE: salt missing/not base64",
        );
      if (!d || !/^[1-9][0-9]*$/.test(d))
        throw new Error(
          "SASL: SCRAM-SERVER-FIRST-MESSAGE: missing/invalid iteration count",
        );
      if (!h.startsWith(a.clientNonce))
        throw new Error(
          "SASL: SCRAM-SERVER-FIRST-MESSAGE: server nonce does not start with client nonce",
        );
      if (h.length === a.clientNonce.length)
        throw new Error(
          "SASL: SCRAM-SERVER-FIRST-MESSAGE: server nonce is too short",
        );
      let w = parseInt(d, 10),
        m = H.from(i, "base64"),
        b = new TextEncoder(),
        p = b.encode(u),
        v = await se.subtle.importKey(
          "raw",
          p,
          { name: "HMAC", hash: { name: "SHA-256" } },
          !1,
          ["sign"],
        ),
        n = new Uint8Array(
          await se.subtle.sign("HMAC", v, H.concat([m, H.from([0, 0, 0, 1])])),
        ),
        o = n;
      for (var y = 0; y < w - 1; y++)
        ((n = new Uint8Array(await se.subtle.sign("HMAC", v, n))),
          (o = H.from(o.map(($, z) => o[z] ^ n[z]))));
      let E = o,
        A = await se.subtle.importKey(
          "raw",
          E,
          { name: "HMAC", hash: { name: "SHA-256" } },
          !1,
          ["sign"],
        ),
        I = new Uint8Array(
          await se.subtle.sign("HMAC", A, b.encode("Client Key")),
        ),
        M = await se.subtle.digest("SHA-256", I),
        T = "n=*,r=" + a.clientNonce,
        S = "r=" + h + ",s=" + i + ",i=" + w,
        R = "c=biws,r=" + h,
        x = T + "," + S + "," + R,
        C = await se.subtle.importKey(
          "raw",
          M,
          { name: "HMAC", hash: { name: "SHA-256" } },
          !1,
          ["sign"],
        );
      var O = new Uint8Array(await se.subtle.sign("HMAC", C, b.encode(x))),
        P = H.from(I.map(($, z) => I[z] ^ O[z])),
        N = P.toString("base64");
      let F = await se.subtle.importKey(
          "raw",
          E,
          { name: "HMAC", hash: { name: "SHA-256" } },
          !1,
          ["sign"],
        ),
        k = await se.subtle.sign("HMAC", F, b.encode("Server Key")),
        U = await se.subtle.importKey(
          "raw",
          k,
          { name: "HMAC", hash: { name: "SHA-256" } },
          !1,
          ["sign"],
        );
      var q = H.from(await se.subtle.sign("HMAC", U, b.encode(x)));
      ((a.message = "SASLResponse"),
        (a.serverSignature = q.toString("base64")),
        (a.response = R + ",p=" + N),
        this.connection.sendSCRAMClientFinalMessage(this.saslSession.response));
    }
  };
f(Gt, "NeonClient");
var Fr = Gt;
function Vt(g, l) {
  if (l) return { callback: l, result: void 0 };
  let a,
    u,
    s = f(function (h, i) {
      h ? a(h) : u(i);
    }, "cb"),
    r = new g(function (h, i) {
      ((u = h), (a = i));
    });
  return { callback: s, result: r };
}
f(Vt, "promisify");
var Qr = class extends $t.Pool {
  constructor() {
    (super(...arguments),
      W(this, "Client", Fr),
      W(this, "hasFetchUnsupportedListeners", !1));
  }
  on(l, a) {
    return (
      l !== "error" && (this.hasFetchUnsupportedListeners = !0),
      super.on(l, a)
    );
  }
  query(l, a, u) {
    var r;
    if (
      !De.poolQueryViaFetch ||
      this.hasFetchUnsupportedListeners ||
      typeof l == "function"
    )
      return super.query(l, a, u);
    typeof a == "function" && ((u = a), (a = void 0));
    let s = Vt(this.Promise, u);
    u = s.callback;
    try {
      let h = new Nr.default(this.options),
        i = encodeURIComponent,
        d = encodeURI,
        w = `postgresql://${i(h.user)}:${i(h.password)}@${i(h.host)}/${d(h.database)}`,
        m = typeof l == "string" ? l : l.text,
        b = a ?? l.values ?? [];
      nt(w, { fullResults: !0, arrayMode: l.rowMode === "array" })(m, b, {
        types: l.types ?? ((r = this.options) == null ? void 0 : r.types),
      })
        .then((p) => u(void 0, p))
        .catch((p) => u(p));
    } catch (h) {
      u(h);
    }
    return s.result;
  }
};
f(Qr, "NeonPool");
Ee.ClientBase;
Ee.Connection;
Ee.DatabaseError;
Ee.Query;
Ee.defaults;
Ee.types;
/*! Bundled license information:

ieee754/index.js:
  (*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> *)

buffer/index.js:
  (*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   *)
*/ const he = nt(
    "postgresql://neondb_owner:npg_Bq2UC0nDZmOX@ep-purple-river-a1abg5lx-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require",
  ),
  fe = {
    async authenticate(g, l) {
      return (
        (
          await he`SELECT * FROM users WHERE name = ${g} AND password = ${l}`
        )[0] || null
      );
    },
    async getMyChallenges(g) {
      return await he`
      SELECT c.*, p.joined_at
      FROM global_challenges c
      JOIN participants p ON c.id = p.challenge_id
      WHERE p.user_id = ${g}
      ORDER BY c.created_at DESC
    `;
    },
    async getAvailableChallenges(g) {
      return await he`
      SELECT c.*, u.name as creator_name
      FROM global_challenges c
      JOIN users u ON c.creator_id = u.id
      WHERE c.id NOT IN (
        SELECT challenge_id FROM participants WHERE user_id = ${g}
      )
      ORDER BY c.created_at DESC
    `;
    },
    async createChallenge(g, l, a, u, freq) {
      const r = (
        await he`
      INSERT INTO global_challenges (creator_id, exercise, daily_target, duration_days, frequency) 
      VALUES (${g}, ${l}, ${a}, ${u}, ${freq || "Daily"}) 
      RETURNING *
    `
      )[0];
      return (
        await he`
      INSERT INTO participants (challenge_id, user_id)
      VALUES (${r.id}, ${g})
    `,
        r
      );
    },
    async joinChallenge(g, l) {
      return (
        await he`
      INSERT INTO participants (challenge_id, user_id)
      VALUES (${g}, ${l})
      RETURNING *
    `
      )[0];
    },
    async logReps(g, l, a) {
      return (
        await he`
      INSERT INTO logs (challenge_id, user_id, reps)
      VALUES (${g}, ${l}, ${a})
      RETURNING *
    `
      )[0];
    },
    async getTodayProgress(g, l) {
      var u;
      const a = await he`
      SELECT SUM(reps) as total_reps 
      FROM logs 
      WHERE challenge_id = ${g}
        AND user_id = ${l} 
        AND log_date = CURRENT_DATE
    `;
      return parseInt(((u = a[0]) == null ? void 0 : u.total_reps) || 0);
    },
    async getLeaderboard(g) {
      return await he`
      SELECT u.name, SUM(l.reps) as total_reps
      FROM logs l
      JOIN users u ON u.id = l.user_id
      WHERE l.challenge_id = ${g}
      GROUP BY u.name
      ORDER BY total_reps DESC
    `;
    },
    async getOverallLeaderboard(exercise) {
      return await he`
      SELECT u.name, SUM(l.reps) as total_reps
      FROM logs l
      JOIN users u ON u.id = l.user_id
      JOIN global_challenges c ON c.id = l.challenge_id
      WHERE c.exercise = ${exercise}
      GROUP BY u.name
      ORDER BY total_reps DESC
    `;
    },
    async deleteChallenge(g) {
      return await he`DELETE FROM global_challenges WHERE id = ${g}`;
    },
    async leaveChallenge(challengeId, userId) {
      return await he`DELETE FROM participants WHERE challenge_id = ${challengeId} AND user_id = ${userId}`;
    },
    async getChallengeParticipants(challengeId) {
      return await he`
        SELECT u.name
        FROM participants p
        JOIN users u ON u.id = p.user_id
        WHERE p.challenge_id = ${challengeId}
      `;
    },
    async getLogDates(challengeId, userId) {
      return await he`
        SELECT DISTINCT log_date FROM logs
        WHERE challenge_id = ${challengeId} AND user_id = ${userId}
        ORDER BY log_date ASC
      `;
    },
    async getDateProgress(challengeId, userId, dateStr) {
      const r = await he`
        SELECT SUM(reps) as total_reps FROM logs
        WHERE challenge_id = ${challengeId} AND user_id = ${userId} AND log_date = ${dateStr}
      `;
      return parseInt(r[0]?.total_reps || 0);
    },
    async logRepsForDate(challengeId, userId, reps, dateStr) {
      return (
        await he`
        INSERT INTO logs (challenge_id, user_id, reps, log_date)
        VALUES (${challengeId}, ${userId}, ${reps}, ${dateStr})
        RETURNING *
      `
      )[0];
    },
    async deleteLogsForDate(challengeId, userId, dateStr) {
      return await he`
        DELETE FROM logs
        WHERE challenge_id = ${challengeId} AND user_id = ${userId} AND log_date = ${dateStr}
      `;
    },
    async createUser(name) {
      const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789";
      let pwd = "";
      for (let i = 0; i < 8; i++)
        pwd += chars.charAt(Math.floor(Math.random() * chars.length));
      const existing = await he`SELECT id FROM users WHERE name = ${name}`;
      if (existing.length > 0) throw new Error("User already exists");
      await he`INSERT INTO users (name, password) VALUES (${name}, ${pwd})`;
      return pwd;
    },
  };
let ue = null;
const qr = {
  init() {
    this.bindEvents();
    const g = localStorage.getItem("dailyChallengeUser");
    g && ((ue = JSON.parse(g)), this.switchView("dashboard"));

    document.addEventListener("click", function (e) {
      if (e.target.closest(".btn")) {
        const btn = e.target.closest(".btn");
        const rect = btn.getBoundingClientRect();
        const circle = document.createElement("span");
        const diameter = Math.max(btn.clientWidth, btn.clientHeight);
        const radius = diameter / 2;
        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${e.clientX - rect.left - radius}px`;
        circle.style.top = `${e.clientY - rect.top - radius}px`;
        circle.classList.add("ripple");
        const rip = btn.querySelector(".ripple");
        if (rip) rip.remove();
        btn.appendChild(circle);
      }
    });
  },
  bindEvents() {
    document.getElementById("nav-dashboard").addEventListener("click", (g) => {
      this.switchView("dashboard");
      this.setActiveNav(g.target);
    });
    document
      .getElementById("nav-leaderboard")
      .addEventListener("click", (g) => {
        this.switchView("leaderboard");
        this.setActiveNav(g.target);
      });
    document.getElementById("nav-logout").addEventListener("click", () => {
      this.logout();
    });
    document
      .getElementById("login-form")
      .addEventListener("submit", async (g) => {
        g.preventDefault();
        const l = document.getElementById("username").value,
          a = document.getElementById("password").value,
          u = document.getElementById("login-error"),
          s = g.target.querySelector("button");
        s.disabled = true;
        s.textContent = "Logging in...";
        u.textContent = "";
        try {
          const r = await fe.authenticate(l, a);
          if (r) {
            ue = r;
            localStorage.setItem("dailyChallengeUser", JSON.stringify(r));
            this.switchView("dashboard");
          } else {
            u.textContent = "Invalid credentials. Please try again.";
          }
        } catch (r) {
          u.textContent =
            "Network error. Please make sure database is initialized.";
          console.error(r);
        } finally {
          s.disabled = false;
          s.textContent = "Login";
        }
      });
    document
      .getElementById("add-challenge-form")
      .addEventListener("submit", async (g) => {
        g.preventDefault();
        const l = document.getElementById("new-target"),
          a = document.getElementById("new-duration"),
          u = document.getElementById("new-exercise"),
          freqEl = document.getElementById("new-frequency"),
          s = parseInt(l.value, 10),
          r = parseInt(a.value, 10),
          h = u.value,
          freq = freqEl ? freqEl.value : "Daily",
          i = g.target.querySelector("button");
        if (s && s > 0 && r && r > 0) {
          i.disabled = true;
          i.textContent = "Creating...";
          try {
            await fe.createChallenge(ue.id, h, s, r, freq);
            l.value = "";
            a.value = "90";
            await this.renderDashboard();
          } catch (d) {
            console.error("Error creating challenge:", d);
            alert("Failed to create challenge. It may already exist.");
          } finally {
            i.disabled = false;
            i.textContent = "Create";
          }
        }
      });
    document
      .getElementById("leaderboard-challenge")
      .addEventListener("change", () => {
        this.renderLeaderboard();
      });
    const createUserForm = document.getElementById("create-user-form");
    if (createUserForm) {
      createUserForm.addEventListener("submit", async (g) => {
        g.preventDefault();
        const nameInput = document.getElementById("new-username");
        const credOutput = document.getElementById("new-user-credentials");
        const btn = g.target.querySelector("button");
        const newName = nameInput.value.trim();
        if (!newName) return;
        btn.disabled = true;
        btn.textContent = "Creating...";
        credOutput.textContent = "";
        try {
          const pwd = await fe.createUser(newName);
          credOutput.textContent = `✅ Created! Username: ${newName} | Password: ${pwd}`;
          nameInput.value = "";
        } catch (err) {
          credOutput.textContent = `❌ ${err.message || "Failed to create user."}`;
          console.error(err);
        } finally {
          btn.disabled = false;
          btn.textContent = "Create User";
        }
      });
    }
  },
  setActiveNav(g) {
    (document
      .querySelectorAll(".nav-btn")
      .forEach((l) => l.classList.remove("active")),
      g.classList.add("active"));
  },
  async switchView(g) {
    document.querySelectorAll(".view").forEach((a) => {
      (a.classList.remove("active"), a.classList.add("hidden"));
    });
    const l = document.getElementById("nav-container");
    if (g === "login") {
      l.classList.add("hidden");
      const a = document.getElementById("login-view");
      (a.classList.remove("hidden"), a.classList.add("active"));
    } else if (g === "dashboard") {
      l.classList.remove("hidden");
      const a = document.getElementById("dashboard-view");
      (a.classList.remove("hidden"),
        a.classList.add("active"),
        (document.getElementById("greeting-name").textContent =
          `Hello, ${ue.name}`));
      const adminSection = document.getElementById("admin-create-user");
      if (adminSection) {
        if (ue.name === "Abhi" || ue.name === "Elish") {
          adminSection.classList.remove("hidden");
        } else {
          adminSection.classList.add("hidden");
        }
      }
      await this.renderDashboard();
    } else if (g === "leaderboard") {
      l.classList.remove("hidden");
      const a = document.getElementById("leaderboard-view");
      (a.classList.remove("hidden"),
        a.classList.add("active"),
        await this.populateLeaderboardDropdown(),
        await this.renderLeaderboard());
    }
  },
  async renderDashboard() {
    const g = document.getElementById("my-challenges-container"),
      l = document.getElementById("available-challenges-container");
    const skeletonHTML = `
      <div class="skeleton-card"></div>
      <div class="skeleton-card"></div>
      <div class="skeleton-card"></div>
    `;
    g.innerHTML = skeletonHTML;
    if (l) l.innerHTML = skeletonHTML;
    try {
      const a = await fe.getMyChallenges(ue.id),
        u = await fe.getAvailableChallenges(ue.id);
      if (((g.innerHTML = ""), a.length === 0))
        g.innerHTML =
          '<p style="grid-column: 1/-1; text-align: center;">You have no active challenges. Create or join one below!</p>';
      else
        for (const s of a) {
          const r = await fe.getTodayProgress(s.id, ue.id);
          const logDates = await fe.getLogDates(s.id, ue.id);
          const participants = await fe.getChallengeParticipants(s.id);
          const h = this.createMyChallengeCard(s, r, logDates, participants);
          g.appendChild(h);
        }
      if (l)
        if (((l.innerHTML = ""), u.length === 0))
          l.innerHTML =
            '<p style="grid-column: 1/-1; text-align: center;">No more shared challenges to join.</p>';
        else
          for (const s of u) {
            const participants = await fe.getChallengeParticipants(s.id);
            const r = this.createAvailableChallengeCard(s, participants);
            l.appendChild(r);
          }
    } catch (a) {
      (console.error(a),
        (g.innerHTML = '<p class="error-text">Failed to load challenges.</p>'),
        l && (l.innerHTML = ""));
    }
  },
  createMyChallengeCard(g, l, logDates, participants) {
    const u = document
        .getElementById("joined-challenge-card-template")
        .content.cloneNode(!0),
      s = u.querySelector(".challenge-card"),
      h = g.exercise.toLowerCase() === "planks" ? "Seconds" : "Reps";
    ((u.querySelector(".exercise-name").textContent = g.exercise),
      (u.querySelector(".target-reps").textContent = `${g.daily_target}`));
    const freqSpan = u.querySelector(".challenge-freq");
    if (freqSpan) freqSpan.textContent = g.frequency || "Daily";
    const i = new Date(g.start_date || g.created_at),
      w = new Date().getTime() - i.getTime();
    let m = Math.floor(w / (1e3 * 3600 * 24)) + 1;
    let isCompleted = false;
    if (m < 1) m = 1;
    if (m > g.duration_days) {
      m = g.duration_days;
      isCompleted = true;
    }
    u.querySelector(".days-elapsed").textContent = m;
    u.querySelector(".total-days").textContent = g.duration_days;
    const b = u.querySelector(".percentage"),
      p = u.querySelector(".circle"),
      v = u.querySelector(".current-reps"),
      n = Math.min((l / g.daily_target) * 100, 100).toFixed(0);

    this.animateValue(v, 0, l, 800);
    this.animateValue(b, 0, n, 800, "%");
    const glowIntensity = Math.min((n / 100) * 8, 8);

    setTimeout(() => {
      p.setAttribute("stroke-dasharray", `${n}, 100`);
      if (n >= 100) {
        p.style.stroke = "var(--accent-purple)";
        p.style.filter = "drop-shadow(0 0 15px var(--accent-purple))";
        b.style.fill = "var(--accent-purple)";
      } else if (n > 0) {
        p.style.filter = `drop-shadow(0 0 ${glowIntensity}px var(--accent-cyan))`;
      }
    }, 100);
    // Build streak calendar
    const calData = this.buildStreakCalendar(logDates || [], g.id, g);
    const calendarEl = calData.element;
    const currentStreak = calData.streak;

    if (currentStreak >= 3) {
      s.classList.add("on-fire");
      const en = u.querySelector(".exercise-name");
      if (!en.innerHTML.includes("🔥")) en.innerHTML += " 🔥";
    }

    const logActionsEl = u.querySelector(".log-actions");
    const partNames = (participants || []).map((p) => p.name).join(", ");
    const partEl = document.createElement("div");
    partEl.style.fontSize = "0.75em";
    partEl.style.color = "var(--text-secondary)";
    partEl.style.textAlign = "center";
    partEl.style.marginTop = "8px";
    partEl.style.marginBottom = "8px";
    partEl.innerHTML = `👥 <strong>Participants:</strong> ${partNames}`;

    const detailsContainer = document.createElement("div");
    detailsContainer.style.display = "none";
    detailsContainer.style.width = "100%";
    detailsContainer.appendChild(partEl);
    detailsContainer.appendChild(calendarEl);

    const Dbt = u.querySelector(".delete-btn");
    if (g.creator_id === ue.id) {
      Dbt.addEventListener("click", async () => {
        if (
          confirm(
            `Remove shared challenge: ${g.exercise}? NOTE: This deletes it for everyone.`,
          )
        ) {
          await fe.deleteChallenge(g.id);
          await this.renderDashboard();
        }
      });
    } else {
      Dbt.style.display = "none";

      const leaveBtn = document.createElement("button");
      leaveBtn.className = "btn";
      leaveBtn.style.marginTop = "15px";
      leaveBtn.style.padding = "8px";
      leaveBtn.style.fontSize = "0.85em";
      leaveBtn.style.background = "transparent";
      leaveBtn.style.border = "1px solid rgba(239, 68, 68, 0.4)";
      leaveBtn.style.color = "var(--accent-red)";
      leaveBtn.style.borderRadius = "8px";
      leaveBtn.innerHTML = "🚪 Leave Challenge";
      leaveBtn.addEventListener("click", async () => {
        if (
          confirm(
            `Leave challenge: ${g.exercise}? You can rejoin later and your data will be restored.`,
          )
        ) {
          await fe.leaveChallenge(g.id, ue.id);
          await this.renderDashboard();
        }
      });
      detailsContainer.appendChild(leaveBtn);
    }

    const toggleBtn = document.createElement("button");
    toggleBtn.className = "btn";
    toggleBtn.style.padding = "4px 8px";
    toggleBtn.style.fontSize = "0.8em";
    toggleBtn.style.margin = "8px auto";
    toggleBtn.style.display = "block";
    toggleBtn.style.width = "100%";
    toggleBtn.style.background = "rgba(255, 255, 255, 0.1)";
    toggleBtn.style.color = "var(--text-secondary)";
    toggleBtn.style.border = "1px solid rgba(255, 255, 255, 0.2)";
    toggleBtn.style.borderRadius = "4px";
    toggleBtn.textContent = "Show Details ▼";
    toggleBtn.addEventListener("click", () => {
      if (detailsContainer.style.display === "none") {
        detailsContainer.style.display = "block";
        toggleBtn.textContent = "Hide Details ▲";
      } else {
        detailsContainer.style.display = "none";
        toggleBtn.textContent = "Show Details ▼";
      }
    });

    s.insertBefore(toggleBtn, logActionsEl);
    s.insertBefore(detailsContainer, logActionsEl);

    const o = u.querySelector(".log-btn");

    if (isCompleted) {
      o.textContent = "Completed 🎉";
      o.style.background = "var(--accent-purple)";
      o.style.color = "white";
      o.style.border = "none";
      o.disabled = true;
      o.style.cursor = "not-allowed";
      o.classList.remove("accent-btn");
      o.style.boxShadow = "none";
    }

    const lbBtn = document.createElement("button");
    lbBtn.className = "btn secondary-btn";
    lbBtn.style.marginTop = "10px";
    lbBtn.style.width = "100%";
    lbBtn.style.padding = "8px";
    lbBtn.style.fontSize = "0.9em";
    lbBtn.textContent = "🏆 View Leaderboard";

    const lbContainer = document.createElement("div");
    lbContainer.style.display = "none";
    lbContainer.style.marginTop = "10px";
    lbContainer.style.background = "rgba(0,0,0,0.3)";
    lbContainer.style.borderRadius = "8px";
    lbContainer.style.padding = "10px";
    lbContainer.style.maxHeight = "200px";
    lbContainer.style.overflowY = "auto";

    lbBtn.addEventListener("click", async () => {
      if (lbContainer.style.display === "none") {
        lbContainer.style.display = "block";
        lbBtn.textContent = "Hide Leaderboard";
        lbContainer.innerHTML = '<div class="loading-spinner" style="font-size:0.8em; margin: 10px 0;">Loading...</div>';
        try {
          const u = await fe.getLeaderboard(g.id);
          if (!u || u.length === 0) {
            lbContainer.innerHTML = '<p style="text-align:center;font-size:0.85em;margin:0;color:var(--text-secondary);">No reps logged yet.</p>';
            return;
          }
          const s = u
            .map((r, h) => {
              const rank = this.getRank(parseInt(r.total_reps) || 0);
              return `
                <div class="leaderboard-item rank-${h + 1}" style="padding: 6px; margin-bottom: 4px; font-size: 0.85em; background: rgba(255,255,255,0.05);">
                  <div class="player-info" style="gap: 8px;">
                    <div class="rank-badge" style="width:20px;height:20px;font-size:0.8em;line-height:20px;">${h + 1}</div>
                    <div class="player-name">${r.name} <span style="font-size:0.7em; color:${rank.color}; margin-left: 4px;">${rank.badge}</span></div>
                  </div>
                  <div class="player-score" style="font-size:1em;">${r.total_reps}</div>
                </div>
                `;
            })
            .join("");
          lbContainer.innerHTML = `<div class="leaderboard-list" style="gap:4px;">${s}</div>`;
        } catch (err) {
          console.error(err);
          lbContainer.innerHTML = '<p class="error-text" style="font-size:0.8em;margin:0;">Failed to load leaderboard.</p>';
        }
      } else {
        lbContainer.style.display = "none";
        lbBtn.textContent = "🏆 View Leaderboard";
      }
    });

    detailsContainer.appendChild(lbBtn);
    detailsContainer.appendChild(lbContainer);

    const card = u.querySelector(".challenge-card");
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -8;
      const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 8;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });
    card.addEventListener("mouseleave", () => {
      card.classList.add("leaving");
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
      setTimeout(() => card.classList.remove("leaving"), 500);
    });

    if (!isCompleted) {
    o.addEventListener("click", () => {
      const modal = document.getElementById("log-modal");
      const title = document.getElementById("log-modal-exercise");
      const input = document.getElementById("log-modal-input");
      const cancelBtn = document.getElementById("log-modal-cancel");
      const submitBtn = document.getElementById("log-modal-submit");

      modal.classList.remove("hidden");
      input.value = "";
      input.placeholder = h;
      title.textContent = `Logging: ${g.exercise}`;
      input.focus();

      const closeAction = () => {
        modal.classList.add("hidden");
        cancelBtn.removeEventListener("click", closeAction);
        submitBtn.removeEventListener("click", submitAction);
      };

      const submitAction = async () => {
        const E = parseInt(input.value, 10);
        if (!E || E <= 0) return;
        submitBtn.disabled = true;
        submitBtn.textContent = "...";
        try {
          await fe.logReps(g.id, ue.id, E);
          const newTotal = parseFloat(l) + E;
          if (l < g.daily_target && newTotal >= g.daily_target) {
            this.showToast("Unstoppable! Daily target crushed! 🔥");
            this.playDing(true);
          } else {
            this.showToast(`Logged ${E} reps! Keep it up! 💪`);
            this.playDing(false);
          }
          await this.renderDashboard();
          closeAction();
        } catch (A) {
          console.error(A);
          alert("Failed to log.");
        } finally {
          submitBtn.disabled = false;
          submitBtn.textContent = "Log";
        }
      };

      cancelBtn.addEventListener("click", closeAction);
      submitBtn.addEventListener("click", submitAction);
    });
    }

    return s;
  },
  buildStreakCalendar(logDates, challengeId, challenge) {
    const activeDates = new Set(
      logDates.map((d) => {
        const dt = new Date(d.log_date);
        return `${dt.getFullYear()}-${dt.getMonth()}-${dt.getDate()}`;
      }),
    );
    // Calculate streak
    let streak = 0;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    for (let i = 0; i < 365; i++) {
      const checkDate = new Date(today);
      checkDate.setDate(checkDate.getDate() - i);
      const key = `${checkDate.getFullYear()}-${checkDate.getMonth()}-${checkDate.getDate()}`;
      if (activeDates.has(key)) {
        streak++;
      } else if (i > 0) {
        break;
      }
    }
    // Determine challenge date range
    const startDate = new Date(challenge.start_date || challenge.created_at);
    startDate.setHours(0, 0, 0, 0);
    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + (challenge.duration_days || 90) - 1);
    const now = new Date();
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    // Group challenge days by month
    const months = new Map();
    const cursor = new Date(startDate);
    while (cursor <= endDate) {
      const mKey = `${cursor.getFullYear()}-${cursor.getMonth()}`;
      if (!months.has(mKey)) {
        months.set(mKey, {
          year: cursor.getFullYear(),
          month: cursor.getMonth(),
          days: [],
        });
      }
      months.get(mKey).days.push(cursor.getDate());
      cursor.setDate(cursor.getDate() + 1);
    }
    const wrapper = document.createElement("div");
    wrapper.className = "streak-calendar";
    let html = `<div class="streak-header">
      <span class="streak-month">${monthNames[startDate.getMonth()]} ${startDate.getFullYear()} → ${monthNames[endDate.getMonth()]} ${endDate.getFullYear()}</span>
      <span class="streak-count">${streak} day streak \ud83d\udd25</span>
    </div>`;
    for (const [, mData] of months) {
      const { year, month, days } = mData;
      const firstDayOfWeek = new Date(year, month, 1).getDay();
      const daysInMonth = new Date(year, month + 1, 0).getDate();
      html += `<div class="cal-month-label">${monthNames[month]} ${year}</div><div class="cal-grid">`;
      html +=
        '<span class="cal-day-label">S</span><span class="cal-day-label">M</span><span class="cal-day-label">T</span><span class="cal-day-label">W</span><span class="cal-day-label">T</span><span class="cal-day-label">F</span><span class="cal-day-label">S</span>';
      html += Array(firstDayOfWeek)
        .fill('<span class="cal-cell empty"></span>')
        .join("");
      const daysSet = new Set(days);
      for (let d = 1; d <= daysInMonth; d++) {
        if (!daysSet.has(d)) {
          html += '<span class="cal-cell empty"></span>';
          continue;
        }
        const key = `${year}-${month}-${d}`;
        const isActive = activeDates.has(key);
        const isToday =
          d === now.getDate() &&
          month === now.getMonth() &&
          year === now.getFullYear();
        const cellDate = new Date(year, month, d);
        const isFuture = cellDate > now;
        let cls = "cal-cell";
        if (isActive) cls += " active";
        if (isToday) cls += " today";
        if (!isFuture) cls += " clickable";
        html += `<span class="${cls}" data-day="${d}" data-month="${month}" data-year="${year}">${d}</span>`;
      }
      html += "</div>";
    }
    wrapper.innerHTML = html;
    // Add click handlers
    const self = this;
    wrapper.querySelectorAll(".cal-cell.clickable").forEach((cell) => {
      cell.addEventListener("click", async () => {
        const day = parseInt(cell.dataset.day);
        const cMonth = parseInt(cell.dataset.month);
        const cYear = parseInt(cell.dataset.year);
        const dateStr = `${cYear}-${String(cMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
        try {
          const currentReps = await fe.getDateProgress(
            challengeId,
            ue.id,
            dateStr,
          );
          const input = prompt(
            `${monthNames[cMonth]} ${day} — Current: ${currentReps} reps\n\nEnter new total (0 to clear):`,
            String(currentReps),
          );
          if (input === null) return;
          const newReps = parseInt(input);
          if (isNaN(newReps) || newReps < 0) return;
          await fe.deleteLogsForDate(challengeId, ue.id, dateStr);
          if (newReps > 0) {
            await fe.logRepsForDate(challengeId, ue.id, newReps, dateStr);
            self.showToast(`Updated log to ${newReps} reps!`);
            self.playDing(false);
          } else {
            self.showToast(`Cleared log for that date.`);
          }
          await self.renderDashboard();
        } catch (err) {
          console.error(err);
          alert("Failed to update log.");
        }
      });
    });
    return { element: wrapper, streak };
  },
  createAvailableChallengeCard(g, participants) {
    const a = document
        .getElementById("available-challenge-card-template")
        .content.cloneNode(!0),
      u = a.querySelector(".challenge-card");
    ((a.querySelector(".exercise-name").textContent = g.exercise),
      (a.querySelector(".target-reps").textContent = g.daily_target),
      (a.querySelector(".total-days").textContent = g.duration_days),
      (a.querySelector(".creator-name").textContent = g.creator_name));
    const freqSpan2 = a.querySelector(".challenge-freq");
    if (freqSpan2) freqSpan2.textContent = g.frequency || "Daily";
    const s = g.exercise.toLowerCase() === "planks";
    a.querySelector(".measure-type").textContent =
      ` ${s ? "sec" : "reps"} / day`;
    const partNames = (participants || []).map((p) => p.name).join(", ");
    const partEl = document.createElement("p");
    partEl.style.fontSize = "0.85em";
    partEl.style.color = "var(--text-secondary)";
    partEl.style.marginTop = "0.5rem";
    partEl.innerHTML = `👥 <strong>Participants:</strong> ${partNames}`;
    const r = a.querySelector(".join-btn");
    r.parentNode.insertBefore(partEl, r);

    u.addEventListener("mousemove", (e) => {
      const rect = u.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -8;
      const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 8;
      u.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });
    u.addEventListener("mouseleave", () => {
      u.classList.add("leaving");
      u.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
      setTimeout(() => u.classList.remove("leaving"), 500);
    });

    return (
      r.addEventListener("click", async () => {
        ((r.disabled = !0), (r.textContent = "Joining..."));
        try {
          (await fe.joinChallenge(g.id, ue.id), await this.renderDashboard());
        } catch (h) {
          (console.error(h),
            alert("Could not join challenge."),
            (r.disabled = !1),
            (r.textContent = "Join Challenge"));
        }
      }),
      u
    );
  },
  async populateLeaderboardDropdown() {
    try {
      const l = document.getElementById("leaderboard-challenge");
      l.innerHTML = '<option value="">Select an Exercise for Overall Leaderboard</option>';
      const exercises = ["Pushups", "Pullups", "Crunches", "Squats", "Planks", "Running", "Cycling"];
      for (const ex of exercises) {
        const u = document.createElement("option");
        u.value = "overall___" + ex;
        u.textContent = "Overall: " + ex;
        l.appendChild(u);
      }
    } catch (g) {
      console.error(g);
    }
  },
  async renderLeaderboard() {
    const g = document.getElementById("leaderboard-container"),
      l = document.getElementById("leaderboard-challenge").value;
    if (!l) {
      g.innerHTML =
        '<p style="text-align:center;">Select an exercise or challenge to view rankings.</p>';
      return;
    }
    g.innerHTML = '<div class="loading-spinner">Loading Leaderboard...</div>';
    try {
      let u;
      if (l.startsWith("overall___")) {
        const exercise = l.split("overall___")[1];
        u = await fe.getOverallLeaderboard(exercise);
      } else {
        const a = parseInt(l, 10);
        u = await fe.getLeaderboard(a);
      }
      if (!u || u.length === 0) {
        g.innerHTML =
          '<p style="text-align:center;">No reps logged yet.</p>';
        return;
      }
      const s = u
        .map((r, h) => {
          const rank = this.getRank(parseInt(r.total_reps) || 0);
          return `
            <div class="leaderboard-item rank-${h + 1}">
              <div class="player-info">
                <div class="rank-badge">${h + 1}</div>
                <div class="player-name">${r.name} <span style="font-size:0.75em; color:${rank.color}; margin-left: 6px; padding: 2px 4px; border: 1px solid ${rank.color}; border-radius: 4px; display: inline-block; white-space: nowrap;">${rank.badge} ${rank.title}</span></div>
              </div>
              <div class="player-score">${r.total_reps}</div>
            </div>
            `;
        })
        .join("");
      g.innerHTML = `<div class="leaderboard-list">${s}</div>`;
    } catch (u) {
      (console.error(u),
        (g.innerHTML =
          '<p class="error-text">Failed to load leaderboard.</p>'));
    }
  },
  logout() {
    ((ue = null),
      localStorage.removeItem("dailyChallengeUser"),
      (document.getElementById("password").value = ""),
      this.switchView("login"));
  },
  animateValue(obj, start, end, duration, suffix = "") {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 4);
      obj.innerHTML = Math.floor(ease * (end - start) + start) + suffix;
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        obj.innerHTML = end + suffix;
      }
    };
    window.requestAnimationFrame(step);
  },
  playDing(isBig) {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gainNode = ctx.createGain();
    osc.connect(gainNode);
    gainNode.connect(ctx.destination);
    osc.type = "sine";
    if (isBig) {
      osc.frequency.setValueAtTime(400, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.1);
      osc.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.2);
      gainNode.gain.setValueAtTime(0.5, ctx.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.01, ctx.currentTime + 0.8);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.8);
    } else {
      osc.frequency.setValueAtTime(800, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.1);
      gainNode.gain.setValueAtTime(0.2, ctx.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.01, ctx.currentTime + 0.3);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.3);
    }
  },
  showToast(msg) {
    let container = document.getElementById("toast-container");
    if (!container) return;
    const toast = document.createElement("div");
    toast.className = "toast-msg";
    toast.textContent = msg;
    container.appendChild(toast);
    setTimeout(() => toast.classList.add("show"), 10);
    setTimeout(() => {
      toast.classList.remove("show");
      setTimeout(() => toast.remove(), 400);
    }, 3000);
  },
  getRank(reps) {
    if (reps >= 5000) return { title: "Titan", badge: "💎", color: "#e0f2fe" };
    if (reps >= 2000)
      return { title: "Champion", badge: "🥇", color: "#fef08a" };
    if (reps >= 500) return { title: "Warrior", badge: "🥈", color: "#cbd5e1" };
    return { title: "Novice", badge: "🥉", color: "#fed7aa" };
  },
};
document.addEventListener("DOMContentLoaded", () => {
  (qr.init(),
    "serviceWorker" in navigator &&
      navigator.serviceWorker
        .register("./sw.js")
        .catch((g) => console.log("SW registration failed:", g)));
});
