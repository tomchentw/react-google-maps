webpackJsonp([0], {
  "./node_modules/codemirror/lib/codemirror.js": function(e, t, r) {
    ;(n = function() {
      "use strict"
      var e = navigator.userAgent,
        t = navigator.platform,
        r = /gecko\/\d/i.test(e),
        n = /MSIE \d/.test(e),
        o = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(e),
        i = /Edge\/(\d+)/.exec(e),
        s = n || o || i,
        a = s && (n ? document.documentMode || 6 : +(i || o)[1]),
        l = !i && /WebKit\//.test(e),
        c = l && /Qt\/\d+\.\d+/.test(e),
        u = !i && /Chrome\//.test(e),
        d = /Opera\//.test(e),
        p = /Apple Computer/.test(navigator.vendor),
        h = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(e),
        f = /PhantomJS/.test(e),
        g = !i && /AppleWebKit/.test(e) && /Mobile\/\w+/.test(e),
        m = /Android/.test(e),
        v =
          g || m || /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(e),
        y = g || /Mac/.test(t),
        b = /\bCrOS\b/.test(e),
        C = /win/i.test(t),
        x = d && e.match(/Version\/(\d*\.\d*)/)
      x && (x = Number(x[1])), x && x >= 15 && ((d = !1), (l = !0))
      var w = y && (c || (d && (null == x || x < 12.11))),
        S = r || (s && a >= 9)
      function classTest(e) {
        return new RegExp("(^|\\s)" + e + "(?:$|\\s)\\s*")
      }
      var k = function(e, t) {
        var r = e.className,
          n = classTest(t).exec(r)
        if (n) {
          var o = r.slice(n.index + n[0].length)
          e.className = r.slice(0, n.index) + (o ? n[1] + o : "")
        }
      }
      function removeChildren(e) {
        for (var t = e.childNodes.length; t > 0; --t)
          e.removeChild(e.firstChild)
        return e
      }
      function removeChildrenAndAdd(e, t) {
        return removeChildren(e).appendChild(t)
      }
      function elt(e, t, r, n) {
        var o = document.createElement(e)
        if (
          (r && (o.className = r),
          n && (o.style.cssText = n),
          "string" == typeof t)
        )
          o.appendChild(document.createTextNode(t))
        else if (t) for (var i = 0; i < t.length; ++i) o.appendChild(t[i])
        return o
      }
      function eltP(e, t, r, n) {
        var o = elt(e, t, r, n)
        return o.setAttribute("role", "presentation"), o
      }
      var L
      L = document.createRange
        ? function(e, t, r, n) {
            var o = document.createRange()
            return o.setEnd(n || e, r), o.setStart(e, t), o
          }
        : function(e, t, r) {
            var n = document.body.createTextRange()
            try {
              n.moveToElementText(e.parentNode)
            } catch (e) {
              return n
            }
            return (
              n.collapse(!0),
              n.moveEnd("character", r),
              n.moveStart("character", t),
              n
            )
          }
      function contains(e, t) {
        if ((3 == t.nodeType && (t = t.parentNode), e.contains))
          return e.contains(t)
        do {
          if ((11 == t.nodeType && (t = t.host), t == e)) return !0
        } while ((t = t.parentNode))
      }
      function activeElt() {
        var e
        try {
          e = document.activeElement
        } catch (t) {
          e = document.body || null
        }
        for (; e && e.shadowRoot && e.shadowRoot.activeElement; )
          e = e.shadowRoot.activeElement
        return e
      }
      function addClass(e, t) {
        var r = e.className
        classTest(t).test(r) || (e.className += (r ? " " : "") + t)
      }
      function joinClasses(e, t) {
        for (var r = e.split(" "), n = 0; n < r.length; n++)
          r[n] && !classTest(r[n]).test(t) && (t += " " + r[n])
        return t
      }
      var M = function(e) {
        e.select()
      }
      g
        ? (M = function(e) {
            ;(e.selectionStart = 0), (e.selectionEnd = e.value.length)
          })
        : s &&
          (M = function(e) {
            try {
              e.select()
            } catch (e) {}
          })
      function bind(e) {
        var t = Array.prototype.slice.call(arguments, 1)
        return function() {
          return e.apply(null, t)
        }
      }
      function copyObj(e, t, r) {
        t || (t = {})
        for (var n in e)
          !e.hasOwnProperty(n) ||
            (!1 === r && t.hasOwnProperty(n)) ||
            (t[n] = e[n])
        return t
      }
      function countColumn(e, t, r, n, o) {
        null == t && -1 == (t = e.search(/[^\s\u00a0]/)) && (t = e.length)
        for (var i = n || 0, s = o || 0; ; ) {
          var a = e.indexOf("\t", i)
          if (a < 0 || a >= t) return s + (t - i)
          ;(s += a - i), (s += r - s % r), (i = a + 1)
        }
      }
      var T = function() {
        this.id = null
      }
      T.prototype.set = function(e, t) {
        clearTimeout(this.id), (this.id = setTimeout(t, e))
      }
      function indexOf(e, t) {
        for (var r = 0; r < e.length; ++r) if (e[r] == t) return r
        return -1
      }
      var O = 30,
        P = {
          toString: function() {
            return "CodeMirror.Pass"
          },
        },
        A = { scroll: !1 },
        N = { origin: "*mouse" },
        D = { origin: "+move" }
      function findColumn(e, t, r) {
        for (var n = 0, o = 0; ; ) {
          var i = e.indexOf("\t", n)
          ;-1 == i && (i = e.length)
          var s = i - n
          if (i == e.length || o + s >= t) return n + Math.min(s, t - o)
          if (((o += i - n), (n = i + 1), (o += r - o % r) >= t)) return n
        }
      }
      var H = [""]
      function spaceStr(e) {
        for (; H.length <= e; ) H.push(lst(H) + " ")
        return H[e]
      }
      function lst(e) {
        return e[e.length - 1]
      }
      function map(e, t) {
        for (var r = [], n = 0; n < e.length; n++) r[n] = t(e[n], n)
        return r
      }
      function nothing() {}
      function createObj(e, t) {
        var r
        return (
          Object.create
            ? (r = Object.create(e))
            : ((nothing.prototype = e), (r = new nothing())),
          t && copyObj(t, r),
          r
        )
      }
      var W = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/
      function isWordCharBasic(e) {
        return (
          /\w/.test(e) ||
          (e > "" && (e.toUpperCase() != e.toLowerCase() || W.test(e)))
        )
      }
      function isWordChar(e, t) {
        return t
          ? !!(t.source.indexOf("\\w") > -1 && isWordCharBasic(e)) || t.test(e)
          : isWordCharBasic(e)
      }
      function isEmpty(e) {
        for (var t in e) if (e.hasOwnProperty(t) && e[t]) return !1
        return !0
      }
      var E = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/
      function isExtendingChar(e) {
        return e.charCodeAt(0) >= 768 && E.test(e)
      }
      function skipExtendingChars(e, t, r) {
        for (; (r < 0 ? t > 0 : t < e.length) && isExtendingChar(e.charAt(t)); )
          t += r
        return t
      }
      function findFirst(e, t, r) {
        for (var n = t > r ? -1 : 1; ; ) {
          if (t == r) return t
          var o = (t + r) / 2,
            i = n < 0 ? Math.ceil(o) : Math.floor(o)
          if (i == t) return e(i) ? t : r
          e(i) ? (r = i) : (t = i + n)
        }
      }
      function getLine(e, t) {
        if ((t -= e.first) < 0 || t >= e.size)
          throw new Error(
            "There is no line " + (t + e.first) + " in the document."
          )
        for (var r = e; !r.lines; )
          for (var n = 0; ; ++n) {
            var o = r.children[n],
              i = o.chunkSize()
            if (t < i) {
              r = o
              break
            }
            t -= i
          }
        return r.lines[t]
      }
      function getBetween(e, t, r) {
        var n = [],
          o = t.line
        return (
          e.iter(t.line, r.line + 1, function(e) {
            var i = e.text
            o == r.line && (i = i.slice(0, r.ch)),
              o == t.line && (i = i.slice(t.ch)),
              n.push(i),
              ++o
          }),
          n
        )
      }
      function getLines(e, t, r) {
        var n = []
        return (
          e.iter(t, r, function(e) {
            n.push(e.text)
          }),
          n
        )
      }
      function updateLineHeight(e, t) {
        var r = t - e.height
        if (r) for (var n = e; n; n = n.parent) n.height += r
      }
      function lineNo(e) {
        if (null == e.parent) return null
        for (
          var t = e.parent, r = indexOf(t.lines, e), n = t.parent;
          n;
          t = n, n = n.parent
        )
          for (var o = 0; n.children[o] != t; ++o)
            r += n.children[o].chunkSize()
        return r + t.first
      }
      function lineAtHeight(e, t) {
        var r = e.first
        e: do {
          for (var n = 0; n < e.children.length; ++n) {
            var o = e.children[n],
              i = o.height
            if (t < i) {
              e = o
              continue e
            }
            ;(t -= i), (r += o.chunkSize())
          }
          return r
        } while (!e.lines)
        for (var s = 0; s < e.lines.length; ++s) {
          var a = e.lines[s].height
          if (t < a) break
          t -= a
        }
        return r + s
      }
      function isLine(e, t) {
        return t >= e.first && t < e.first + e.size
      }
      function lineNumberFor(e, t) {
        return String(e.lineNumberFormatter(t + e.firstLineNumber))
      }
      function Pos(e, t, r) {
        if ((void 0 === r && (r = null), !(this instanceof Pos)))
          return new Pos(e, t, r)
        ;(this.line = e), (this.ch = t), (this.sticky = r)
      }
      function cmp(e, t) {
        return e.line - t.line || e.ch - t.ch
      }
      function equalCursorPos(e, t) {
        return e.sticky == t.sticky && 0 == cmp(e, t)
      }
      function copyPos(e) {
        return Pos(e.line, e.ch)
      }
      function maxPos(e, t) {
        return cmp(e, t) < 0 ? t : e
      }
      function minPos(e, t) {
        return cmp(e, t) < 0 ? e : t
      }
      function clipLine(e, t) {
        return Math.max(e.first, Math.min(t, e.first + e.size - 1))
      }
      function clipPos(e, t) {
        if (t.line < e.first) return Pos(e.first, 0)
        var r = e.first + e.size - 1
        return t.line > r
          ? Pos(r, getLine(e, r).text.length)
          : (function clipToLen(e, t) {
              var r = e.ch
              return null == r || r > t
                ? Pos(e.line, t)
                : r < 0 ? Pos(e.line, 0) : e
            })(t, getLine(e, t.line).text.length)
      }
      function clipPosArray(e, t) {
        for (var r = [], n = 0; n < t.length; n++) r[n] = clipPos(e, t[n])
        return r
      }
      var I = !1,
        F = !1
      function MarkedSpan(e, t, r) {
        ;(this.marker = e), (this.from = t), (this.to = r)
      }
      function getMarkedSpanFor(e, t) {
        if (e)
          for (var r = 0; r < e.length; ++r) {
            var n = e[r]
            if (n.marker == t) return n
          }
      }
      function removeMarkedSpan(e, t) {
        for (var r, n = 0; n < e.length; ++n)
          e[n] != t && (r || (r = [])).push(e[n])
        return r
      }
      function stretchSpansOverChange(e, t) {
        if (t.full) return null
        var r = isLine(e, t.from.line) && getLine(e, t.from.line).markedSpans,
          n = isLine(e, t.to.line) && getLine(e, t.to.line).markedSpans
        if (!r && !n) return null
        var o = t.from.ch,
          i = t.to.ch,
          s = 0 == cmp(t.from, t.to),
          a = (function markedSpansBefore(e, t, r) {
            var n
            if (e)
              for (var o = 0; o < e.length; ++o) {
                var i = e[o],
                  s = i.marker
                if (
                  null == i.from ||
                  (s.inclusiveLeft ? i.from <= t : i.from < t) ||
                  (i.from == t &&
                    "bookmark" == s.type &&
                    (!r || !i.marker.insertLeft))
                ) {
                  var a =
                    null == i.to || (s.inclusiveRight ? i.to >= t : i.to > t)
                  ;(n || (n = [])).push(
                    new MarkedSpan(s, i.from, a ? null : i.to)
                  )
                }
              }
            return n
          })(r, o, s),
          l = (function markedSpansAfter(e, t, r) {
            var n
            if (e)
              for (var o = 0; o < e.length; ++o) {
                var i = e[o],
                  s = i.marker
                if (
                  null == i.to ||
                  (s.inclusiveRight ? i.to >= t : i.to > t) ||
                  (i.from == t &&
                    "bookmark" == s.type &&
                    (!r || i.marker.insertLeft))
                ) {
                  var a =
                    null == i.from ||
                    (s.inclusiveLeft ? i.from <= t : i.from < t)
                  ;(n || (n = [])).push(
                    new MarkedSpan(
                      s,
                      a ? null : i.from - t,
                      null == i.to ? null : i.to - t
                    )
                  )
                }
              }
            return n
          })(n, i, s),
          c = 1 == t.text.length,
          u = lst(t.text).length + (c ? o : 0)
        if (a)
          for (var d = 0; d < a.length; ++d) {
            var p = a[d]
            if (null == p.to) {
              var h = getMarkedSpanFor(l, p.marker)
              h ? c && (p.to = null == h.to ? null : h.to + u) : (p.to = o)
            }
          }
        if (l)
          for (var f = 0; f < l.length; ++f) {
            var g = l[f]
            if ((null != g.to && (g.to += u), null == g.from)) {
              getMarkedSpanFor(a, g.marker) ||
                ((g.from = u), c && (a || (a = [])).push(g))
            } else (g.from += u), c && (a || (a = [])).push(g)
          }
        a && (a = clearEmptySpans(a)), l && l != a && (l = clearEmptySpans(l))
        var m = [a]
        if (!c) {
          var v,
            y = t.text.length - 2
          if (y > 0 && a)
            for (var b = 0; b < a.length; ++b)
              null == a[b].to &&
                (v || (v = [])).push(new MarkedSpan(a[b].marker, null, null))
          for (var C = 0; C < y; ++C) m.push(v)
          m.push(l)
        }
        return m
      }
      function clearEmptySpans(e) {
        for (var t = 0; t < e.length; ++t) {
          var r = e[t]
          null != r.from &&
            r.from == r.to &&
            !1 !== r.marker.clearWhenEmpty &&
            e.splice(t--, 1)
        }
        return e.length ? e : null
      }
      function detachMarkedSpans(e) {
        var t = e.markedSpans
        if (t) {
          for (var r = 0; r < t.length; ++r) t[r].marker.detachLine(e)
          e.markedSpans = null
        }
      }
      function attachMarkedSpans(e, t) {
        if (t) {
          for (var r = 0; r < t.length; ++r) t[r].marker.attachLine(e)
          e.markedSpans = t
        }
      }
      function extraLeft(e) {
        return e.inclusiveLeft ? -1 : 0
      }
      function extraRight(e) {
        return e.inclusiveRight ? 1 : 0
      }
      function compareCollapsedMarkers(e, t) {
        var r = e.lines.length - t.lines.length
        if (0 != r) return r
        var n = e.find(),
          o = t.find(),
          i = cmp(n.from, o.from) || extraLeft(e) - extraLeft(t)
        if (i) return -i
        var s = cmp(n.to, o.to) || extraRight(e) - extraRight(t)
        return s || t.id - e.id
      }
      function collapsedSpanAtSide(e, t) {
        var r,
          n = F && e.markedSpans
        if (n)
          for (var o = void 0, i = 0; i < n.length; ++i)
            (o = n[i]).marker.collapsed &&
              null == (t ? o.from : o.to) &&
              (!r || compareCollapsedMarkers(r, o.marker) < 0) &&
              (r = o.marker)
        return r
      }
      function collapsedSpanAtStart(e) {
        return collapsedSpanAtSide(e, !0)
      }
      function collapsedSpanAtEnd(e) {
        return collapsedSpanAtSide(e, !1)
      }
      function conflictingCollapsedRange(e, t, r, n, o) {
        var i = getLine(e, t),
          s = F && i.markedSpans
        if (s)
          for (var a = 0; a < s.length; ++a) {
            var l = s[a]
            if (l.marker.collapsed) {
              var c = l.marker.find(0),
                u = cmp(c.from, r) || extraLeft(l.marker) - extraLeft(o),
                d = cmp(c.to, n) || extraRight(l.marker) - extraRight(o)
              if (
                !((u >= 0 && d <= 0) || (u <= 0 && d >= 0)) &&
                ((u <= 0 &&
                  (l.marker.inclusiveRight && o.inclusiveLeft
                    ? cmp(c.to, r) >= 0
                    : cmp(c.to, r) > 0)) ||
                  (u >= 0 &&
                    (l.marker.inclusiveRight && o.inclusiveLeft
                      ? cmp(c.from, n) <= 0
                      : cmp(c.from, n) < 0)))
              )
                return !0
            }
          }
      }
      function visualLine(e) {
        for (var t; (t = collapsedSpanAtStart(e)); ) e = t.find(-1, !0).line
        return e
      }
      function visualLineNo(e, t) {
        var r = getLine(e, t),
          n = visualLine(r)
        return r == n ? t : lineNo(n)
      }
      function visualLineEndNo(e, t) {
        if (t > e.lastLine()) return t
        var r,
          n = getLine(e, t)
        if (!lineIsHidden(e, n)) return t
        for (; (r = collapsedSpanAtEnd(n)); ) n = r.find(1, !0).line
        return lineNo(n) + 1
      }
      function lineIsHidden(e, t) {
        var r = F && t.markedSpans
        if (r)
          for (var n = void 0, o = 0; o < r.length; ++o)
            if ((n = r[o]).marker.collapsed) {
              if (null == n.from) return !0
              if (
                !n.marker.widgetNode &&
                0 == n.from &&
                n.marker.inclusiveLeft &&
                lineIsHiddenInner(e, t, n)
              )
                return !0
            }
      }
      function lineIsHiddenInner(e, t, r) {
        if (null == r.to) {
          var n = r.marker.find(1, !0)
          return lineIsHiddenInner(
            e,
            n.line,
            getMarkedSpanFor(n.line.markedSpans, r.marker)
          )
        }
        if (r.marker.inclusiveRight && r.to == t.text.length) return !0
        for (var o = void 0, i = 0; i < t.markedSpans.length; ++i)
          if (
            (o = t.markedSpans[i]).marker.collapsed &&
            !o.marker.widgetNode &&
            o.from == r.to &&
            (null == o.to || o.to != r.from) &&
            (o.marker.inclusiveLeft || r.marker.inclusiveRight) &&
            lineIsHiddenInner(e, t, o)
          )
            return !0
      }
      function heightAtLine(e) {
        for (
          var t = 0, r = (e = visualLine(e)).parent, n = 0;
          n < r.lines.length;
          ++n
        ) {
          var o = r.lines[n]
          if (o == e) break
          t += o.height
        }
        for (var i = r.parent; i; r = i, i = r.parent)
          for (var s = 0; s < i.children.length; ++s) {
            var a = i.children[s]
            if (a == r) break
            t += a.height
          }
        return t
      }
      function lineLength(e) {
        if (0 == e.height) return 0
        for (var t, r = e.text.length, n = e; (t = collapsedSpanAtStart(n)); ) {
          var o = t.find(0, !0)
          ;(n = o.from.line), (r += o.from.ch - o.to.ch)
        }
        for (n = e; (t = collapsedSpanAtEnd(n)); ) {
          var i = t.find(0, !0)
          ;(r -= n.text.length - i.from.ch),
            (r += (n = i.to.line).text.length - i.to.ch)
        }
        return r
      }
      function findMaxLine(e) {
        var t = e.display,
          r = e.doc
        ;(t.maxLine = getLine(r, r.first)),
          (t.maxLineLength = lineLength(t.maxLine)),
          (t.maxLineChanged = !0),
          r.iter(function(e) {
            var r = lineLength(e)
            r > t.maxLineLength && ((t.maxLineLength = r), (t.maxLine = e))
          })
      }
      var B = null
      function getBidiPartAt(e, t, r) {
        var n
        B = null
        for (var o = 0; o < e.length; ++o) {
          var i = e[o]
          if (i.from < t && i.to > t) return o
          i.to == t && (i.from != i.to && "before" == r ? (n = o) : (B = o)),
            i.from == t && (i.from != i.to && "before" != r ? (n = o) : (B = o))
        }
        return null != n ? n : B
      }
      var z = (function() {
        var e =
            "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN",
          t =
            "nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111"
        var r = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,
          n = /[stwN]/,
          o = /[LRr]/,
          i = /[Lb1n]/,
          s = /[1n]/
        function BidiSpan(e, t, r) {
          ;(this.level = e), (this.from = t), (this.to = r)
        }
        return function(a, l) {
          var c = "ltr" == l ? "L" : "R"
          if (0 == a.length || ("ltr" == l && !r.test(a))) return !1
          for (var u = a.length, d = [], p = 0; p < u; ++p)
            d.push(
              (h = a.charCodeAt(p)) <= 247
                ? e.charAt(h)
                : 1424 <= h && h <= 1524
                  ? "R"
                  : 1536 <= h && h <= 1785
                    ? t.charAt(h - 1536)
                    : 1774 <= h && h <= 2220
                      ? "r"
                      : 8192 <= h && h <= 8203 ? "w" : 8204 == h ? "b" : "L"
            )
          for (var h, f = 0, g = c; f < u; ++f) {
            var m = d[f]
            "m" == m ? (d[f] = g) : (g = m)
          }
          for (var v = 0, y = c; v < u; ++v) {
            var b = d[v]
            "1" == b && "r" == y
              ? (d[v] = "n")
              : o.test(b) && ((y = b), "r" == b && (d[v] = "R"))
          }
          for (var C = 1, x = d[0]; C < u - 1; ++C) {
            var w = d[C]
            "+" == w && "1" == x && "1" == d[C + 1]
              ? (d[C] = "1")
              : "," != w ||
                x != d[C + 1] ||
                ("1" != x && "n" != x) ||
                (d[C] = x),
              (x = w)
          }
          for (var S = 0; S < u; ++S) {
            var k = d[S]
            if ("," == k) d[S] = "N"
            else if ("%" == k) {
              var L = void 0
              for (L = S + 1; L < u && "%" == d[L]; ++L);
              for (
                var M =
                    (S && "!" == d[S - 1]) || (L < u && "1" == d[L])
                      ? "1"
                      : "N",
                  T = S;
                T < L;
                ++T
              )
                d[T] = M
              S = L - 1
            }
          }
          for (var O = 0, P = c; O < u; ++O) {
            var A = d[O]
            "L" == P && "1" == A ? (d[O] = "L") : o.test(A) && (P = A)
          }
          for (var N = 0; N < u; ++N)
            if (n.test(d[N])) {
              var D = void 0
              for (D = N + 1; D < u && n.test(d[D]); ++D);
              for (
                var H = "L" == (N ? d[N - 1] : c),
                  W = H == ("L" == (D < u ? d[D] : c)) ? (H ? "L" : "R") : c,
                  E = N;
                E < D;
                ++E
              )
                d[E] = W
              N = D - 1
            }
          for (var I, F = [], B = 0; B < u; )
            if (i.test(d[B])) {
              var z = B
              for (++B; B < u && i.test(d[B]); ++B);
              F.push(new BidiSpan(0, z, B))
            } else {
              var R = B,
                j = F.length
              for (++B; B < u && "L" != d[B]; ++B);
              for (var V = R; V < B; )
                if (s.test(d[V])) {
                  R < V && F.splice(j, 0, new BidiSpan(1, R, V))
                  var _ = V
                  for (++V; V < B && s.test(d[V]); ++V);
                  F.splice(j, 0, new BidiSpan(2, _, V)), (R = V)
                } else ++V
              R < B && F.splice(j, 0, new BidiSpan(1, R, B))
            }
          return (
            "ltr" == l &&
              (1 == F[0].level &&
                (I = a.match(/^\s+/)) &&
                ((F[0].from = I[0].length),
                F.unshift(new BidiSpan(0, 0, I[0].length))),
              1 == lst(F).level &&
                (I = a.match(/\s+$/)) &&
                ((lst(F).to -= I[0].length),
                F.push(new BidiSpan(0, u - I[0].length, u)))),
            "rtl" == l ? F.reverse() : F
          )
        }
      })()
      function getOrder(e, t) {
        var r = e.order
        return null == r && (r = e.order = z(e.text, t)), r
      }
      var R = [],
        j = function(e, t, r) {
          if (e.addEventListener) e.addEventListener(t, r, !1)
          else if (e.attachEvent) e.attachEvent("on" + t, r)
          else {
            var n = e._handlers || (e._handlers = {})
            n[t] = (n[t] || R).concat(r)
          }
        }
      function getHandlers(e, t) {
        return (e._handlers && e._handlers[t]) || R
      }
      function off(e, t, r) {
        if (e.removeEventListener) e.removeEventListener(t, r, !1)
        else if (e.detachEvent) e.detachEvent("on" + t, r)
        else {
          var n = e._handlers,
            o = n && n[t]
          if (o) {
            var i = indexOf(o, r)
            i > -1 && (n[t] = o.slice(0, i).concat(o.slice(i + 1)))
          }
        }
      }
      function signal(e, t) {
        var r = getHandlers(e, t)
        if (r.length)
          for (
            var n = Array.prototype.slice.call(arguments, 2), o = 0;
            o < r.length;
            ++o
          )
            r[o].apply(null, n)
      }
      function signalDOMEvent(e, t, r) {
        return (
          "string" == typeof t &&
            (t = {
              type: t,
              preventDefault: function() {
                this.defaultPrevented = !0
              },
            }),
          signal(e, r || t.type, e, t),
          e_defaultPrevented(t) || t.codemirrorIgnore
        )
      }
      function signalCursorActivity(e) {
        var t = e._handlers && e._handlers.cursorActivity
        if (t)
          for (
            var r =
                e.curOp.cursorActivityHandlers ||
                (e.curOp.cursorActivityHandlers = []),
              n = 0;
            n < t.length;
            ++n
          )
            -1 == indexOf(r, t[n]) && r.push(t[n])
      }
      function hasHandler(e, t) {
        return getHandlers(e, t).length > 0
      }
      function eventMixin(e) {
        ;(e.prototype.on = function(e, t) {
          j(this, e, t)
        }),
          (e.prototype.off = function(e, t) {
            off(this, e, t)
          })
      }
      function e_preventDefault(e) {
        e.preventDefault ? e.preventDefault() : (e.returnValue = !1)
      }
      function e_stopPropagation(e) {
        e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = !0)
      }
      function e_defaultPrevented(e) {
        return null != e.defaultPrevented
          ? e.defaultPrevented
          : 0 == e.returnValue
      }
      function e_stop(e) {
        e_preventDefault(e), e_stopPropagation(e)
      }
      function e_target(e) {
        return e.target || e.srcElement
      }
      function e_button(e) {
        var t = e.which
        return (
          null == t &&
            (1 & e.button
              ? (t = 1)
              : 2 & e.button ? (t = 3) : 4 & e.button && (t = 2)),
          y && e.ctrlKey && 1 == t && (t = 3),
          t
        )
      }
      var V,
        _ = (function() {
          if (s && a < 9) return !1
          var e = elt("div")
          return "draggable" in e || "dragDrop" in e
        })()
      function zeroWidthElement(e) {
        if (null == V) {
          var t = elt("span", "​")
          removeChildrenAndAdd(
            e,
            elt("span", [t, document.createTextNode("x")])
          ),
            0 != e.firstChild.offsetHeight &&
              (V = t.offsetWidth <= 1 && t.offsetHeight > 2 && !(s && a < 8))
        }
        var r = V
          ? elt("span", "​")
          : elt(
              "span",
              " ",
              null,
              "display: inline-block; width: 1px; margin-right: -1px"
            )
        return r.setAttribute("cm-text", ""), r
      }
      var U
      function hasBadBidiRects(e) {
        if (null != U) return U
        var t = removeChildrenAndAdd(e, document.createTextNode("AخA")),
          r = L(t, 0, 1).getBoundingClientRect(),
          n = L(t, 1, 2).getBoundingClientRect()
        return (
          removeChildren(e),
          !(!r || r.left == r.right) && (U = n.right - r.right < 3)
        )
      }
      var G =
          3 != "\n\nb".split(/\n/).length
            ? function(e) {
                for (var t = 0, r = [], n = e.length; t <= n; ) {
                  var o = e.indexOf("\n", t)
                  ;-1 == o && (o = e.length)
                  var i = e.slice(t, "\r" == e.charAt(o - 1) ? o - 1 : o),
                    s = i.indexOf("\r")
                  ;-1 != s
                    ? (r.push(i.slice(0, s)), (t += s + 1))
                    : (r.push(i), (t = o + 1))
                }
                return r
              }
            : function(e) {
                return e.split(/\r\n?|\n/)
              },
        K = window.getSelection
          ? function(e) {
              try {
                return e.selectionStart != e.selectionEnd
              } catch (e) {
                return !1
              }
            }
          : function(e) {
              var t
              try {
                t = e.ownerDocument.selection.createRange()
              } catch (e) {}
              return (
                !(!t || t.parentElement() != e) &&
                0 != t.compareEndPoints("StartToEnd", t)
              )
            },
        $ = (function() {
          var e = elt("div")
          return (
            "oncopy" in e ||
            (e.setAttribute("oncopy", "return;"), "function" == typeof e.oncopy)
          )
        })(),
        q = null
      var X = {},
        Y = {}
      function resolveMode(e) {
        if ("string" == typeof e && Y.hasOwnProperty(e)) e = Y[e]
        else if (e && "string" == typeof e.name && Y.hasOwnProperty(e.name)) {
          var t = Y[e.name]
          "string" == typeof t && (t = { name: t }),
            ((e = createObj(t, e)).name = t.name)
        } else {
          if ("string" == typeof e && /^[\w\-]+\/[\w\-]+\+xml$/.test(e))
            return resolveMode("application/xml")
          if ("string" == typeof e && /^[\w\-]+\/[\w\-]+\+json$/.test(e))
            return resolveMode("application/json")
        }
        return "string" == typeof e ? { name: e } : e || { name: "null" }
      }
      function getMode(e, t) {
        t = resolveMode(t)
        var r = X[t.name]
        if (!r) return getMode(e, "text/plain")
        var n = r(e, t)
        if (Z.hasOwnProperty(t.name)) {
          var o = Z[t.name]
          for (var i in o)
            o.hasOwnProperty(i) &&
              (n.hasOwnProperty(i) && (n["_" + i] = n[i]), (n[i] = o[i]))
        }
        if (
          ((n.name = t.name),
          t.helperType && (n.helperType = t.helperType),
          t.modeProps)
        )
          for (var s in t.modeProps) n[s] = t.modeProps[s]
        return n
      }
      var Z = {}
      function extendMode(e, t) {
        copyObj(t, Z.hasOwnProperty(e) ? Z[e] : (Z[e] = {}))
      }
      function copyState(e, t) {
        if (!0 === t) return t
        if (e.copyState) return e.copyState(t)
        var r = {}
        for (var n in t) {
          var o = t[n]
          o instanceof Array && (o = o.concat([])), (r[n] = o)
        }
        return r
      }
      function innerMode(e, t) {
        for (var r; e.innerMode && (r = e.innerMode(t)) && r.mode != e; )
          (t = r.state), (e = r.mode)
        return r || { mode: e, state: t }
      }
      function startState(e, t, r) {
        return !e.startState || e.startState(t, r)
      }
      var Q = function(e, t, r) {
        ;(this.pos = this.start = 0),
          (this.string = e),
          (this.tabSize = t || 8),
          (this.lastColumnPos = this.lastColumnValue = 0),
          (this.lineStart = 0),
          (this.lineOracle = r)
      }
      ;(Q.prototype.eol = function() {
        return this.pos >= this.string.length
      }),
        (Q.prototype.sol = function() {
          return this.pos == this.lineStart
        }),
        (Q.prototype.peek = function() {
          return this.string.charAt(this.pos) || void 0
        }),
        (Q.prototype.next = function() {
          if (this.pos < this.string.length)
            return this.string.charAt(this.pos++)
        }),
        (Q.prototype.eat = function(e) {
          var t = this.string.charAt(this.pos)
          if ("string" == typeof e ? t == e : t && (e.test ? e.test(t) : e(t)))
            return ++this.pos, t
        }),
        (Q.prototype.eatWhile = function(e) {
          for (var t = this.pos; this.eat(e); );
          return this.pos > t
        }),
        (Q.prototype.eatSpace = function() {
          for (
            var e = this.pos;
            /[\s\u00a0]/.test(this.string.charAt(this.pos));

          )
            ++this.pos
          return this.pos > e
        }),
        (Q.prototype.skipToEnd = function() {
          this.pos = this.string.length
        }),
        (Q.prototype.skipTo = function(e) {
          var t = this.string.indexOf(e, this.pos)
          if (t > -1) return (this.pos = t), !0
        }),
        (Q.prototype.backUp = function(e) {
          this.pos -= e
        }),
        (Q.prototype.column = function() {
          return (
            this.lastColumnPos < this.start &&
              ((this.lastColumnValue = countColumn(
                this.string,
                this.start,
                this.tabSize,
                this.lastColumnPos,
                this.lastColumnValue
              )),
              (this.lastColumnPos = this.start)),
            this.lastColumnValue -
              (this.lineStart
                ? countColumn(this.string, this.lineStart, this.tabSize)
                : 0)
          )
        }),
        (Q.prototype.indentation = function() {
          return (
            countColumn(this.string, null, this.tabSize) -
            (this.lineStart
              ? countColumn(this.string, this.lineStart, this.tabSize)
              : 0)
          )
        }),
        (Q.prototype.match = function(e, t, r) {
          if ("string" != typeof e) {
            var n = this.string.slice(this.pos).match(e)
            return n && n.index > 0
              ? null
              : (n && !1 !== t && (this.pos += n[0].length), n)
          }
          var o = function(e) {
            return r ? e.toLowerCase() : e
          }
          if (o(this.string.substr(this.pos, e.length)) == o(e))
            return !1 !== t && (this.pos += e.length), !0
        }),
        (Q.prototype.current = function() {
          return this.string.slice(this.start, this.pos)
        }),
        (Q.prototype.hideFirstChars = function(e, t) {
          this.lineStart += e
          try {
            return t()
          } finally {
            this.lineStart -= e
          }
        }),
        (Q.prototype.lookAhead = function(e) {
          var t = this.lineOracle
          return t && t.lookAhead(e)
        }),
        (Q.prototype.baseToken = function() {
          var e = this.lineOracle
          return e && e.baseToken(this.pos)
        })
      var J = function(e, t) {
          ;(this.state = e), (this.lookAhead = t)
        },
        ee = function(e, t, r, n) {
          ;(this.state = t),
            (this.doc = e),
            (this.line = r),
            (this.maxLookAhead = n || 0),
            (this.baseTokens = null),
            (this.baseTokenPos = 1)
        }
      ;(ee.prototype.lookAhead = function(e) {
        var t = this.doc.getLine(this.line + e)
        return null != t && e > this.maxLookAhead && (this.maxLookAhead = e), t
      }),
        (ee.prototype.baseToken = function(e) {
          if (!this.baseTokens) return null
          for (; this.baseTokens[this.baseTokenPos] <= e; )
            this.baseTokenPos += 2
          var t = this.baseTokens[this.baseTokenPos + 1]
          return {
            type: t && t.replace(/( |^)overlay .*/, ""),
            size: this.baseTokens[this.baseTokenPos] - e,
          }
        }),
        (ee.prototype.nextLine = function() {
          this.line++, this.maxLookAhead > 0 && this.maxLookAhead--
        }),
        (ee.fromSaved = function(e, t, r) {
          return t instanceof J
            ? new ee(e, copyState(e.mode, t.state), r, t.lookAhead)
            : new ee(e, copyState(e.mode, t), r)
        }),
        (ee.prototype.save = function(e) {
          var t = !1 !== e ? copyState(this.doc.mode, this.state) : this.state
          return this.maxLookAhead > 0 ? new J(t, this.maxLookAhead) : t
        })
      function highlightLine(e, t, r, n) {
        var o = [e.state.modeGen],
          i = {}
        runMode(
          e,
          t.text,
          e.doc.mode,
          r,
          function(e, t) {
            return o.push(e, t)
          },
          i,
          n
        )
        for (
          var s = r.state,
            a = function(n) {
              r.baseTokens = o
              var a = e.state.overlays[n],
                l = 1,
                c = 0
              ;(r.state = !0),
                runMode(
                  e,
                  t.text,
                  a.mode,
                  r,
                  function(e, t) {
                    for (var r = l; c < e; ) {
                      var n = o[l]
                      n > e && o.splice(l, 1, e, o[l + 1], n),
                        (l += 2),
                        (c = Math.min(e, n))
                    }
                    if (t)
                      if (a.opaque)
                        o.splice(r, l - r, e, "overlay " + t), (l = r + 2)
                      else
                        for (; r < l; r += 2) {
                          var i = o[r + 1]
                          o[r + 1] = (i ? i + " " : "") + "overlay " + t
                        }
                  },
                  i
                ),
                (r.state = s),
                (r.baseTokens = null),
                (r.baseTokenPos = 1)
            },
            l = 0;
          l < e.state.overlays.length;
          ++l
        )
          a(l)
        return { styles: o, classes: i.bgClass || i.textClass ? i : null }
      }
      function getLineStyles(e, t, r) {
        if (!t.styles || t.styles[0] != e.state.modeGen) {
          var n = getContextBefore(e, lineNo(t)),
            o =
              t.text.length > e.options.maxHighlightLength &&
              copyState(e.doc.mode, n.state),
            i = highlightLine(e, t, n)
          o && (n.state = o),
            (t.stateAfter = n.save(!o)),
            (t.styles = i.styles),
            i.classes
              ? (t.styleClasses = i.classes)
              : t.styleClasses && (t.styleClasses = null),
            r === e.doc.highlightFrontier &&
              (e.doc.modeFrontier = Math.max(
                e.doc.modeFrontier,
                ++e.doc.highlightFrontier
              ))
        }
        return t.styles
      }
      function getContextBefore(e, t, r) {
        var n = e.doc,
          o = e.display
        if (!n.mode.startState) return new ee(n, !0, t)
        var i = (function findStartLine(e, t, r) {
            for (
              var n,
                o,
                i = e.doc,
                s = r ? -1 : t - (e.doc.mode.innerMode ? 1e3 : 100),
                a = t;
              a > s;
              --a
            ) {
              if (a <= i.first) return i.first
              var l = getLine(i, a - 1),
                c = l.stateAfter
              if (
                c &&
                (!r || a + (c instanceof J ? c.lookAhead : 0) <= i.modeFrontier)
              )
                return a
              var u = countColumn(l.text, null, e.options.tabSize)
              ;(null == o || n > u) && ((o = a - 1), (n = u))
            }
            return o
          })(e, t, r),
          s = i > n.first && getLine(n, i - 1).stateAfter,
          a = s ? ee.fromSaved(n, s, i) : new ee(n, startState(n.mode), i)
        return (
          n.iter(i, t, function(r) {
            processLine(e, r.text, a)
            var n = a.line
            ;(r.stateAfter =
              n == t - 1 || n % 5 == 0 || (n >= o.viewFrom && n < o.viewTo)
                ? a.save()
                : null),
              a.nextLine()
          }),
          r && (n.modeFrontier = a.line),
          a
        )
      }
      function processLine(e, t, r, n) {
        var o = e.doc.mode,
          i = new Q(t, e.options.tabSize, r)
        for (
          i.start = i.pos = n || 0, "" == t && callBlankLine(o, r.state);
          !i.eol();

        )
          readToken(o, i, r.state), (i.start = i.pos)
      }
      function callBlankLine(e, t) {
        if (e.blankLine) return e.blankLine(t)
        if (e.innerMode) {
          var r = innerMode(e, t)
          return r.mode.blankLine ? r.mode.blankLine(r.state) : void 0
        }
      }
      function readToken(e, t, r, n) {
        for (var o = 0; o < 10; o++) {
          n && (n[0] = innerMode(e, r).mode)
          var i = e.token(t, r)
          if (t.pos > t.start) return i
        }
        throw new Error("Mode " + e.name + " failed to advance stream.")
      }
      var te = function(e, t, r) {
        ;(this.start = e.start),
          (this.end = e.pos),
          (this.string = e.current()),
          (this.type = t || null),
          (this.state = r)
      }
      function takeToken(e, t, r, n) {
        var o,
          i,
          s = e.doc,
          a = s.mode,
          l = getLine(s, (t = clipPos(s, t)).line),
          c = getContextBefore(e, t.line, r),
          u = new Q(l.text, e.options.tabSize, c)
        for (n && (i = []); (n || u.pos < t.ch) && !u.eol(); )
          (u.start = u.pos),
            (o = readToken(a, u, c.state)),
            n && i.push(new te(u, o, copyState(s.mode, c.state)))
        return n ? i : new te(u, o, c.state)
      }
      function extractLineClasses(e, t) {
        if (e)
          for (;;) {
            var r = e.match(/(?:^|\s+)line-(background-)?(\S+)/)
            if (!r) break
            e = e.slice(0, r.index) + e.slice(r.index + r[0].length)
            var n = r[1] ? "bgClass" : "textClass"
            null == t[n]
              ? (t[n] = r[2])
              : new RegExp("(?:^|s)" + r[2] + "(?:$|s)").test(t[n]) ||
                (t[n] += " " + r[2])
          }
        return e
      }
      function runMode(e, t, r, n, o, i, s) {
        var a = r.flattenSpans
        null == a && (a = e.options.flattenSpans)
        var l,
          c = 0,
          u = null,
          d = new Q(t, e.options.tabSize, n),
          p = e.options.addModeClass && [null]
        for (
          "" == t && extractLineClasses(callBlankLine(r, n.state), i);
          !d.eol();

        ) {
          if (
            (d.pos > e.options.maxHighlightLength
              ? ((a = !1),
                s && processLine(e, t, n, d.pos),
                (d.pos = t.length),
                (l = null))
              : (l = extractLineClasses(readToken(r, d, n.state, p), i)),
            p)
          ) {
            var h = p[0].name
            h && (l = "m-" + (l ? h + " " + l : h))
          }
          if (!a || u != l) {
            for (; c < d.start; ) o((c = Math.min(d.start, c + 5e3)), u)
            u = l
          }
          d.start = d.pos
        }
        for (; c < d.pos; ) {
          var f = Math.min(d.pos, c + 5e3)
          o(f, u), (c = f)
        }
      }
      var re = function(e, t, r) {
        ;(this.text = e),
          attachMarkedSpans(this, t),
          (this.height = r ? r(this) : 1)
      }
      ;(re.prototype.lineNo = function() {
        return lineNo(this)
      }),
        eventMixin(re)
      var ne = {},
        oe = {}
      function interpretTokenStyle(e, t) {
        if (!e || /^\s*$/.test(e)) return null
        var r = t.addModeClass ? oe : ne
        return r[e] || (r[e] = e.replace(/\S+/g, "cm-$&"))
      }
      function buildLineContent(e, t) {
        var r = eltP("span", null, null, l ? "padding-right: .1px" : null),
          n = {
            pre: eltP("pre", [r], "CodeMirror-line"),
            content: r,
            col: 0,
            pos: 0,
            cm: e,
            trailingSpace: !1,
            splitSpaces: (s || l) && e.getOption("lineWrapping"),
          }
        t.measure = {}
        for (var o = 0; o <= (t.rest ? t.rest.length : 0); o++) {
          var i = o ? t.rest[o - 1] : t.line,
            a = void 0
          ;(n.pos = 0),
            (n.addToken = buildToken),
            hasBadBidiRects(e.display.measure) &&
              (a = getOrder(i, e.doc.direction)) &&
              (n.addToken = buildTokenBadBidi(n.addToken, a)),
            (n.map = [])
          insertLineContent(
            i,
            n,
            getLineStyles(e, i, t != e.display.externalMeasured && lineNo(i))
          ),
            i.styleClasses &&
              (i.styleClasses.bgClass &&
                (n.bgClass = joinClasses(
                  i.styleClasses.bgClass,
                  n.bgClass || ""
                )),
              i.styleClasses.textClass &&
                (n.textClass = joinClasses(
                  i.styleClasses.textClass,
                  n.textClass || ""
                ))),
            0 == n.map.length &&
              n.map.push(
                0,
                0,
                n.content.appendChild(zeroWidthElement(e.display.measure))
              ),
            0 == o
              ? ((t.measure.map = n.map), (t.measure.cache = {}))
              : ((t.measure.maps || (t.measure.maps = [])).push(n.map),
                (t.measure.caches || (t.measure.caches = [])).push({}))
        }
        if (l) {
          var c = n.content.lastChild
          ;(/\bcm-tab\b/.test(c.className) ||
            (c.querySelector && c.querySelector(".cm-tab"))) &&
            (n.content.className = "cm-tab-wrap-hack")
        }
        return (
          signal(e, "renderLine", e, t.line, n.pre),
          n.pre.className &&
            (n.textClass = joinClasses(n.pre.className, n.textClass || "")),
          n
        )
      }
      function defaultSpecialCharPlaceholder(e) {
        var t = elt("span", "•", "cm-invalidchar")
        return (
          (t.title = "\\u" + e.charCodeAt(0).toString(16)),
          t.setAttribute("aria-label", t.title),
          t
        )
      }
      function buildToken(e, t, r, n, o, i, l) {
        if (t) {
          var c,
            u = e.splitSpaces
              ? (function splitSpaces(e, t) {
                  if (e.length > 1 && !/  /.test(e)) return e
                  for (var r = t, n = "", o = 0; o < e.length; o++) {
                    var i = e.charAt(o)
                    " " != i ||
                      !r ||
                      (o != e.length - 1 && 32 != e.charCodeAt(o + 1)) ||
                      (i = " "),
                      (n += i),
                      (r = " " == i)
                  }
                  return n
                })(t, e.trailingSpace)
              : t,
            d = e.cm.state.specialChars,
            p = !1
          if (d.test(t)) {
            c = document.createDocumentFragment()
            for (var h = 0; ; ) {
              d.lastIndex = h
              var f = d.exec(t),
                g = f ? f.index - h : t.length - h
              if (g) {
                var m = document.createTextNode(u.slice(h, h + g))
                s && a < 9 ? c.appendChild(elt("span", [m])) : c.appendChild(m),
                  e.map.push(e.pos, e.pos + g, m),
                  (e.col += g),
                  (e.pos += g)
              }
              if (!f) break
              h += g + 1
              var v = void 0
              if ("\t" == f[0]) {
                var y = e.cm.options.tabSize,
                  b = y - e.col % y
                ;(v = c.appendChild(
                  elt("span", spaceStr(b), "cm-tab")
                )).setAttribute("role", "presentation"),
                  v.setAttribute("cm-text", "\t"),
                  (e.col += b)
              } else
                "\r" == f[0] || "\n" == f[0]
                  ? ((v = c.appendChild(
                      elt("span", "\r" == f[0] ? "␍" : "␤", "cm-invalidchar")
                    )).setAttribute("cm-text", f[0]),
                    (e.col += 1))
                  : ((v = e.cm.options.specialCharPlaceholder(
                      f[0]
                    )).setAttribute("cm-text", f[0]),
                    s && a < 9
                      ? c.appendChild(elt("span", [v]))
                      : c.appendChild(v),
                    (e.col += 1))
              e.map.push(e.pos, e.pos + 1, v), e.pos++
            }
          } else
            (e.col += t.length),
              (c = document.createTextNode(u)),
              e.map.push(e.pos, e.pos + t.length, c),
              s && a < 9 && (p = !0),
              (e.pos += t.length)
          if (
            ((e.trailingSpace = 32 == u.charCodeAt(t.length - 1)),
            r || n || o || p || l)
          ) {
            var C = r || ""
            n && (C += n), o && (C += o)
            var x = elt("span", [c], C, l)
            return i && (x.title = i), e.content.appendChild(x)
          }
          e.content.appendChild(c)
        }
      }
      function buildTokenBadBidi(e, t) {
        return function(r, n, o, i, s, a, l) {
          o = o ? o + " cm-force-border" : "cm-force-border"
          for (var c = r.pos, u = c + n.length; ; ) {
            for (
              var d = void 0, p = 0;
              p < t.length && !((d = t[p]).to > c && d.from <= c);
              p++
            );
            if (d.to >= u) return e(r, n, o, i, s, a, l)
            e(r, n.slice(0, d.to - c), o, i, null, a, l),
              (i = null),
              (n = n.slice(d.to - c)),
              (c = d.to)
          }
        }
      }
      function buildCollapsedSpan(e, t, r, n) {
        var o = !n && r.widgetNode
        o && e.map.push(e.pos, e.pos + t, o),
          !n &&
            e.cm.display.input.needsContentAttribute &&
            (o || (o = e.content.appendChild(document.createElement("span"))),
            o.setAttribute("cm-marker", r.id)),
          o && (e.cm.display.input.setUneditable(o), e.content.appendChild(o)),
          (e.pos += t),
          (e.trailingSpace = !1)
      }
      function insertLineContent(e, t, r) {
        var n = e.markedSpans,
          o = e.text,
          i = 0
        if (n)
          for (
            var s, a, l, c, u, d, p, h = o.length, f = 0, g = 1, m = "", v = 0;
            ;

          ) {
            if (v == f) {
              ;(l = c = u = d = a = ""), (p = null), (v = 1 / 0)
              for (var y = [], b = void 0, C = 0; C < n.length; ++C) {
                var x = n[C],
                  w = x.marker
                "bookmark" == w.type && x.from == f && w.widgetNode
                  ? y.push(w)
                  : x.from <= f &&
                    (null == x.to ||
                      x.to > f ||
                      (w.collapsed && x.to == f && x.from == f))
                    ? (null != x.to &&
                        x.to != f &&
                        v > x.to &&
                        ((v = x.to), (c = "")),
                      w.className && (l += " " + w.className),
                      w.css && (a = (a ? a + ";" : "") + w.css),
                      w.startStyle && x.from == f && (u += " " + w.startStyle),
                      w.endStyle &&
                        x.to == v &&
                        (b || (b = [])).push(w.endStyle, x.to),
                      w.title && !d && (d = w.title),
                      w.collapsed &&
                        (!p || compareCollapsedMarkers(p.marker, w) < 0) &&
                        (p = x))
                    : x.from > f && v > x.from && (v = x.from)
              }
              if (b)
                for (var S = 0; S < b.length; S += 2)
                  b[S + 1] == v && (c += " " + b[S])
              if (!p || p.from == f)
                for (var k = 0; k < y.length; ++k)
                  buildCollapsedSpan(t, 0, y[k])
              if (p && (p.from || 0) == f) {
                if (
                  (buildCollapsedSpan(
                    t,
                    (null == p.to ? h + 1 : p.to) - f,
                    p.marker,
                    null == p.from
                  ),
                  null == p.to)
                )
                  return
                p.to == f && (p = !1)
              }
            }
            if (f >= h) break
            for (var L = Math.min(h, v); ; ) {
              if (m) {
                var M = f + m.length
                if (!p) {
                  var T = M > L ? m.slice(0, L - f) : m
                  t.addToken(
                    t,
                    T,
                    s ? s + l : l,
                    u,
                    f + T.length == v ? c : "",
                    d,
                    a
                  )
                }
                if (M >= L) {
                  ;(m = m.slice(L - f)), (f = L)
                  break
                }
                ;(f = M), (u = "")
              }
              ;(m = o.slice(i, (i = r[g++]))),
                (s = interpretTokenStyle(r[g++], t.cm.options))
            }
          }
        else
          for (var O = 1; O < r.length; O += 2)
            t.addToken(
              t,
              o.slice(i, (i = r[O])),
              interpretTokenStyle(r[O + 1], t.cm.options)
            )
      }
      function LineView(e, t, r) {
        ;(this.line = t),
          (this.rest = (function visualLineContinued(e) {
            for (var t, r; (t = collapsedSpanAtEnd(e)); )
              (e = t.find(1, !0).line), (r || (r = [])).push(e)
            return r
          })(t)),
          (this.size = this.rest ? lineNo(lst(this.rest)) - r + 1 : 1),
          (this.node = this.text = null),
          (this.hidden = lineIsHidden(e, t))
      }
      function buildViewArray(e, t, r) {
        for (var n, o = [], i = t; i < r; i = n) {
          var s = new LineView(e.doc, getLine(e.doc, i), i)
          ;(n = i + s.size), o.push(s)
        }
        return o
      }
      var ie = null
      var se = null
      function signalLater(e, t) {
        var r = getHandlers(e, t)
        if (r.length) {
          var n,
            o = Array.prototype.slice.call(arguments, 2)
          ie
            ? (n = ie.delayedCallbacks)
            : se ? (n = se) : ((n = se = []), setTimeout(fireOrphanDelayed, 0))
          for (
            var i = function(e) {
                n.push(function() {
                  return r[e].apply(null, o)
                })
              },
              s = 0;
            s < r.length;
            ++s
          )
            i(s)
        }
      }
      function fireOrphanDelayed() {
        var e = se
        se = null
        for (var t = 0; t < e.length; ++t) e[t]()
      }
      function updateLineForChanges(e, t, r, n) {
        for (var o = 0; o < t.changes.length; o++) {
          var i = t.changes[o]
          "text" == i
            ? updateLineText(e, t)
            : "gutter" == i
              ? updateLineGutter(e, t, r, n)
              : "class" == i
                ? updateLineClasses(e, t)
                : "widget" == i && updateLineWidgets(e, t, n)
        }
        t.changes = null
      }
      function ensureLineWrapped(e) {
        return (
          e.node == e.text &&
            ((e.node = elt("div", null, null, "position: relative")),
            e.text.parentNode && e.text.parentNode.replaceChild(e.node, e.text),
            e.node.appendChild(e.text),
            s && a < 8 && (e.node.style.zIndex = 2)),
          e.node
        )
      }
      function getLineContent(e, t) {
        var r = e.display.externalMeasured
        return r && r.line == t.line
          ? ((e.display.externalMeasured = null),
            (t.measure = r.measure),
            r.built)
          : buildLineContent(e, t)
      }
      function updateLineText(e, t) {
        var r = t.text.className,
          n = getLineContent(e, t)
        t.text == t.node && (t.node = n.pre),
          t.text.parentNode.replaceChild(n.pre, t.text),
          (t.text = n.pre),
          n.bgClass != t.bgClass || n.textClass != t.textClass
            ? ((t.bgClass = n.bgClass),
              (t.textClass = n.textClass),
              updateLineClasses(e, t))
            : r && (t.text.className = r)
      }
      function updateLineClasses(e, t) {
        !(function updateLineBackground(e, t) {
          var r = t.bgClass
            ? t.bgClass + " " + (t.line.bgClass || "")
            : t.line.bgClass
          if ((r && (r += " CodeMirror-linebackground"), t.background))
            r
              ? (t.background.className = r)
              : (t.background.parentNode.removeChild(t.background),
                (t.background = null))
          else if (r) {
            var n = ensureLineWrapped(t)
            ;(t.background = n.insertBefore(elt("div", null, r), n.firstChild)),
              e.display.input.setUneditable(t.background)
          }
        })(e, t),
          t.line.wrapClass
            ? (ensureLineWrapped(t).className = t.line.wrapClass)
            : t.node != t.text && (t.node.className = "")
        var r = t.textClass
          ? t.textClass + " " + (t.line.textClass || "")
          : t.line.textClass
        t.text.className = r || ""
      }
      function updateLineGutter(e, t, r, n) {
        if (
          (t.gutter && (t.node.removeChild(t.gutter), (t.gutter = null)),
          t.gutterBackground &&
            (t.node.removeChild(t.gutterBackground),
            (t.gutterBackground = null)),
          t.line.gutterClass)
        ) {
          var o = ensureLineWrapped(t)
          ;(t.gutterBackground = elt(
            "div",
            null,
            "CodeMirror-gutter-background " + t.line.gutterClass,
            "left: " +
              (e.options.fixedGutter ? n.fixedPos : -n.gutterTotalWidth) +
              "px; width: " +
              n.gutterTotalWidth +
              "px"
          )),
            e.display.input.setUneditable(t.gutterBackground),
            o.insertBefore(t.gutterBackground, t.text)
        }
        var i = t.line.gutterMarkers
        if (e.options.lineNumbers || i) {
          var s = ensureLineWrapped(t),
            a = (t.gutter = elt(
              "div",
              null,
              "CodeMirror-gutter-wrapper",
              "left: " +
                (e.options.fixedGutter ? n.fixedPos : -n.gutterTotalWidth) +
                "px"
            ))
          if (
            (e.display.input.setUneditable(a),
            s.insertBefore(a, t.text),
            t.line.gutterClass && (a.className += " " + t.line.gutterClass),
            !e.options.lineNumbers ||
              (i && i["CodeMirror-linenumbers"]) ||
              (t.lineNumber = a.appendChild(
                elt(
                  "div",
                  lineNumberFor(e.options, r),
                  "CodeMirror-linenumber CodeMirror-gutter-elt",
                  "left: " +
                    n.gutterLeft["CodeMirror-linenumbers"] +
                    "px; width: " +
                    e.display.lineNumInnerWidth +
                    "px"
                )
              )),
            i)
          )
            for (var l = 0; l < e.options.gutters.length; ++l) {
              var c = e.options.gutters[l],
                u = i.hasOwnProperty(c) && i[c]
              u &&
                a.appendChild(
                  elt(
                    "div",
                    [u],
                    "CodeMirror-gutter-elt",
                    "left: " +
                      n.gutterLeft[c] +
                      "px; width: " +
                      n.gutterWidth[c] +
                      "px"
                  )
                )
            }
        }
      }
      function updateLineWidgets(e, t, r) {
        t.alignable && (t.alignable = null)
        for (var n = t.node.firstChild, o = void 0; n; n = o)
          (o = n.nextSibling),
            "CodeMirror-linewidget" == n.className && t.node.removeChild(n)
        insertLineWidgets(e, t, r)
      }
      function buildLineElement(e, t, r, n) {
        var o = getLineContent(e, t)
        return (
          (t.text = t.node = o.pre),
          o.bgClass && (t.bgClass = o.bgClass),
          o.textClass && (t.textClass = o.textClass),
          updateLineClasses(e, t),
          updateLineGutter(e, t, r, n),
          insertLineWidgets(e, t, n),
          t.node
        )
      }
      function insertLineWidgets(e, t, r) {
        if ((insertLineWidgetsFor(e, t.line, t, r, !0), t.rest))
          for (var n = 0; n < t.rest.length; n++)
            insertLineWidgetsFor(e, t.rest[n], t, r, !1)
      }
      function insertLineWidgetsFor(e, t, r, n, o) {
        if (t.widgets)
          for (
            var i = ensureLineWrapped(r), s = 0, a = t.widgets;
            s < a.length;
            ++s
          ) {
            var l = a[s],
              c = elt("div", [l.node], "CodeMirror-linewidget")
            l.handleMouseEvents || c.setAttribute("cm-ignore-events", "true"),
              positionLineWidget(l, c, r, n),
              e.display.input.setUneditable(c),
              o && l.above
                ? i.insertBefore(c, r.gutter || r.text)
                : i.appendChild(c),
              signalLater(l, "redraw")
          }
      }
      function positionLineWidget(e, t, r, n) {
        if (e.noHScroll) {
          ;(r.alignable || (r.alignable = [])).push(t)
          var o = n.wrapperWidth
          ;(t.style.left = n.fixedPos + "px"),
            e.coverGutter ||
              ((o -= n.gutterTotalWidth),
              (t.style.paddingLeft = n.gutterTotalWidth + "px")),
            (t.style.width = o + "px")
        }
        e.coverGutter &&
          ((t.style.zIndex = 5),
          (t.style.position = "relative"),
          e.noHScroll || (t.style.marginLeft = -n.gutterTotalWidth + "px"))
      }
      function widgetHeight(e) {
        if (null != e.height) return e.height
        var t = e.doc.cm
        if (!t) return 0
        if (!contains(document.body, e.node)) {
          var r = "position: relative;"
          e.coverGutter &&
            (r += "margin-left: -" + t.display.gutters.offsetWidth + "px;"),
            e.noHScroll &&
              (r += "width: " + t.display.wrapper.clientWidth + "px;"),
            removeChildrenAndAdd(
              t.display.measure,
              elt("div", [e.node], null, r)
            )
        }
        return (e.height = e.node.parentNode.offsetHeight)
      }
      function eventInWidget(e, t) {
        for (var r = e_target(t); r != e.wrapper; r = r.parentNode)
          if (
            !r ||
            (1 == r.nodeType && "true" == r.getAttribute("cm-ignore-events")) ||
            (r.parentNode == e.sizer && r != e.mover)
          )
            return !0
      }
      function paddingTop(e) {
        return e.lineSpace.offsetTop
      }
      function paddingVert(e) {
        return e.mover.offsetHeight - e.lineSpace.offsetHeight
      }
      function paddingH(e) {
        if (e.cachedPaddingH) return e.cachedPaddingH
        var t = removeChildrenAndAdd(e.measure, elt("pre", "x")),
          r = window.getComputedStyle
            ? window.getComputedStyle(t)
            : t.currentStyle,
          n = { left: parseInt(r.paddingLeft), right: parseInt(r.paddingRight) }
        return isNaN(n.left) || isNaN(n.right) || (e.cachedPaddingH = n), n
      }
      function scrollGap(e) {
        return O - e.display.nativeBarWidth
      }
      function displayWidth(e) {
        return (
          e.display.scroller.clientWidth - scrollGap(e) - e.display.barWidth
        )
      }
      function displayHeight(e) {
        return (
          e.display.scroller.clientHeight - scrollGap(e) - e.display.barHeight
        )
      }
      function mapFromLineView(e, t, r) {
        if (e.line == t) return { map: e.measure.map, cache: e.measure.cache }
        for (var n = 0; n < e.rest.length; n++)
          if (e.rest[n] == t)
            return { map: e.measure.maps[n], cache: e.measure.caches[n] }
        for (var o = 0; o < e.rest.length; o++)
          if (lineNo(e.rest[o]) > r)
            return {
              map: e.measure.maps[o],
              cache: e.measure.caches[o],
              before: !0,
            }
      }
      function measureChar(e, t, r, n) {
        return measureCharPrepared(e, prepareMeasureForLine(e, t), r, n)
      }
      function findViewForLine(e, t) {
        if (t >= e.display.viewFrom && t < e.display.viewTo)
          return e.display.view[findViewIndex(e, t)]
        var r = e.display.externalMeasured
        return r && t >= r.lineN && t < r.lineN + r.size ? r : void 0
      }
      function prepareMeasureForLine(e, t) {
        var r = lineNo(t),
          n = findViewForLine(e, r)
        n && !n.text
          ? (n = null)
          : n &&
            n.changes &&
            (updateLineForChanges(e, n, r, getDimensions(e)),
            (e.curOp.forceUpdate = !0)),
          n ||
            (n = (function updateExternalMeasurement(e, t) {
              var r = lineNo((t = visualLine(t))),
                n = (e.display.externalMeasured = new LineView(e.doc, t, r))
              n.lineN = r
              var o = (n.built = buildLineContent(e, n))
              return (
                (n.text = o.pre),
                removeChildrenAndAdd(e.display.lineMeasure, o.pre),
                n
              )
            })(e, t))
        var o = mapFromLineView(n, t, r)
        return {
          line: t,
          view: n,
          rect: null,
          map: o.map,
          cache: o.cache,
          before: o.before,
          hasHeights: !1,
        }
      }
      function measureCharPrepared(e, t, r, n, o) {
        t.before && (r = -1)
        var i,
          l = r + (n || "")
        return (
          t.cache.hasOwnProperty(l)
            ? (i = t.cache[l])
            : (t.rect || (t.rect = t.view.text.getBoundingClientRect()),
              t.hasHeights ||
                (!(function ensureLineHeights(e, t, r) {
                  var n = e.options.lineWrapping,
                    o = n && displayWidth(e)
                  if (!t.measure.heights || (n && t.measure.width != o)) {
                    var i = (t.measure.heights = [])
                    if (n) {
                      t.measure.width = o
                      for (
                        var s = t.text.firstChild.getClientRects(), a = 0;
                        a < s.length - 1;
                        a++
                      ) {
                        var l = s[a],
                          c = s[a + 1]
                        Math.abs(l.bottom - c.bottom) > 2 &&
                          i.push((l.bottom + c.top) / 2 - r.top)
                      }
                    }
                    i.push(r.bottom - r.top)
                  }
                })(e, t.view, t.rect),
                (t.hasHeights = !0)),
              (i = (function measureCharInner(e, t, r, n) {
                var o,
                  i = nodeAndOffsetInLineMap(t.map, r, n),
                  l = i.node,
                  c = i.start,
                  u = i.end,
                  d = i.collapse
                if (3 == l.nodeType) {
                  for (var p = 0; p < 4; p++) {
                    for (
                      ;
                      c &&
                      isExtendingChar(t.line.text.charAt(i.coverStart + c));

                    )
                      --c
                    for (
                      ;
                      i.coverStart + u < i.coverEnd &&
                      isExtendingChar(t.line.text.charAt(i.coverStart + u));

                    )
                      ++u
                    if (
                      (o =
                        s && a < 9 && 0 == c && u == i.coverEnd - i.coverStart
                          ? l.parentNode.getBoundingClientRect()
                          : getUsefulRect(L(l, c, u).getClientRects(), n))
                        .left ||
                      o.right ||
                      0 == c
                    )
                      break
                    ;(u = c), (c -= 1), (d = "right")
                  }
                  s &&
                    a < 11 &&
                    (o = (function maybeUpdateRectForZooming(e, t) {
                      if (
                        !window.screen ||
                        null == screen.logicalXDPI ||
                        screen.logicalXDPI == screen.deviceXDPI ||
                        !(function hasBadZoomedRects(e) {
                          if (null != q) return q
                          var t = removeChildrenAndAdd(e, elt("span", "x")),
                            r = t.getBoundingClientRect(),
                            n = L(t, 0, 1).getBoundingClientRect()
                          return (q = Math.abs(r.left - n.left) > 1)
                        })(e)
                      )
                        return t
                      var r = screen.logicalXDPI / screen.deviceXDPI,
                        n = screen.logicalYDPI / screen.deviceYDPI
                      return {
                        left: t.left * r,
                        right: t.right * r,
                        top: t.top * n,
                        bottom: t.bottom * n,
                      }
                    })(e.display.measure, o))
                } else {
                  c > 0 && (d = n = "right")
                  var h
                  o =
                    e.options.lineWrapping &&
                    (h = l.getClientRects()).length > 1
                      ? h["right" == n ? h.length - 1 : 0]
                      : l.getBoundingClientRect()
                }
                if (s && a < 9 && !c && (!o || (!o.left && !o.right))) {
                  var f = l.parentNode.getClientRects()[0]
                  o = f
                    ? {
                        left: f.left,
                        right: f.left + charWidth(e.display),
                        top: f.top,
                        bottom: f.bottom,
                      }
                    : ae
                }
                for (
                  var g = o.top - t.rect.top,
                    m = o.bottom - t.rect.top,
                    v = (g + m) / 2,
                    y = t.view.measure.heights,
                    b = 0;
                  b < y.length - 1 && !(v < y[b]);
                  b++
                );
                var C = b ? y[b - 1] : 0,
                  x = y[b],
                  w = {
                    left: ("right" == d ? o.right : o.left) - t.rect.left,
                    right: ("left" == d ? o.left : o.right) - t.rect.left,
                    top: C,
                    bottom: x,
                  }
                o.left || o.right || (w.bogus = !0)
                e.options.singleCursorHeightPerLine ||
                  ((w.rtop = g), (w.rbottom = m))
                return w
              })(e, t, r, n)).bogus || (t.cache[l] = i)),
          {
            left: i.left,
            right: i.right,
            top: o ? i.rtop : i.top,
            bottom: o ? i.rbottom : i.bottom,
          }
        )
      }
      var ae = { left: 0, right: 0, top: 0, bottom: 0 }
      function nodeAndOffsetInLineMap(e, t, r) {
        for (var n, o, i, s, a, l, c = 0; c < e.length; c += 3)
          if (
            ((a = e[c]),
            (l = e[c + 1]),
            t < a
              ? ((o = 0), (i = 1), (s = "left"))
              : t < l
                ? (i = (o = t - a) + 1)
                : (c == e.length - 3 || (t == l && e[c + 3] > t)) &&
                  ((o = (i = l - a) - 1), t >= l && (s = "right")),
            null != o)
          ) {
            if (
              ((n = e[c + 2]),
              a == l && r == (n.insertLeft ? "left" : "right") && (s = r),
              "left" == r && 0 == o)
            )
              for (; c && e[c - 2] == e[c - 3] && e[c - 1].insertLeft; )
                (n = e[2 + (c -= 3)]), (s = "left")
            if ("right" == r && o == l - a)
              for (
                ;
                c < e.length - 3 &&
                e[c + 3] == e[c + 4] &&
                !e[c + 5].insertLeft;

              )
                (n = e[(c += 3) + 2]), (s = "right")
            break
          }
        return {
          node: n,
          start: o,
          end: i,
          collapse: s,
          coverStart: a,
          coverEnd: l,
        }
      }
      function getUsefulRect(e, t) {
        var r = ae
        if ("left" == t)
          for (var n = 0; n < e.length && (r = e[n]).left == r.right; n++);
        else
          for (var o = e.length - 1; o >= 0 && (r = e[o]).left == r.right; o--);
        return r
      }
      function clearLineMeasurementCacheFor(e) {
        if (
          e.measure &&
          ((e.measure.cache = {}), (e.measure.heights = null), e.rest)
        )
          for (var t = 0; t < e.rest.length; t++) e.measure.caches[t] = {}
      }
      function clearLineMeasurementCache(e) {
        ;(e.display.externalMeasure = null),
          removeChildren(e.display.lineMeasure)
        for (var t = 0; t < e.display.view.length; t++)
          clearLineMeasurementCacheFor(e.display.view[t])
      }
      function clearCaches(e) {
        clearLineMeasurementCache(e),
          (e.display.cachedCharWidth = e.display.cachedTextHeight = e.display.cachedPaddingH = null),
          e.options.lineWrapping || (e.display.maxLineChanged = !0),
          (e.display.lineNumChars = null)
      }
      function pageScrollX() {
        return u && m
          ? -(
              document.body.getBoundingClientRect().left -
              parseInt(getComputedStyle(document.body).marginLeft)
            )
          : window.pageXOffset ||
              (document.documentElement || document.body).scrollLeft
      }
      function pageScrollY() {
        return u && m
          ? -(
              document.body.getBoundingClientRect().top -
              parseInt(getComputedStyle(document.body).marginTop)
            )
          : window.pageYOffset ||
              (document.documentElement || document.body).scrollTop
      }
      function widgetTopHeight(e) {
        var t = 0
        if (e.widgets)
          for (var r = 0; r < e.widgets.length; ++r)
            e.widgets[r].above && (t += widgetHeight(e.widgets[r]))
        return t
      }
      function intoCoordSystem(e, t, r, n, o) {
        if (!o) {
          var i = widgetTopHeight(t)
          ;(r.top += i), (r.bottom += i)
        }
        if ("line" == n) return r
        n || (n = "local")
        var s = heightAtLine(t)
        if (
          ("local" == n
            ? (s += paddingTop(e.display))
            : (s -= e.display.viewOffset),
          "page" == n || "window" == n)
        ) {
          var a = e.display.lineSpace.getBoundingClientRect()
          s += a.top + ("window" == n ? 0 : pageScrollY())
          var l = a.left + ("window" == n ? 0 : pageScrollX())
          ;(r.left += l), (r.right += l)
        }
        return (r.top += s), (r.bottom += s), r
      }
      function fromCoordSystem(e, t, r) {
        if ("div" == r) return t
        var n = t.left,
          o = t.top
        if ("page" == r) (n -= pageScrollX()), (o -= pageScrollY())
        else if ("local" == r || !r) {
          var i = e.display.sizer.getBoundingClientRect()
          ;(n += i.left), (o += i.top)
        }
        var s = e.display.lineSpace.getBoundingClientRect()
        return { left: n - s.left, top: o - s.top }
      }
      function charCoords(e, t, r, n, o) {
        return (
          n || (n = getLine(e.doc, t.line)),
          intoCoordSystem(e, n, measureChar(e, n, t.ch, o), r)
        )
      }
      function cursorCoords(e, t, r, n, o, i) {
        ;(n = n || getLine(e.doc, t.line)),
          o || (o = prepareMeasureForLine(e, n))
        function get(t, s) {
          var a = measureCharPrepared(e, o, t, s ? "right" : "left", i)
          return (
            s ? (a.left = a.right) : (a.right = a.left),
            intoCoordSystem(e, n, a, r)
          )
        }
        var s = getOrder(n, e.doc.direction),
          a = t.ch,
          l = t.sticky
        if (
          (a >= n.text.length
            ? ((a = n.text.length), (l = "before"))
            : a <= 0 && ((a = 0), (l = "after")),
          !s)
        )
          return get("before" == l ? a - 1 : a, "before" == l)
        function getBidi(e, t, r) {
          var n = 1 == s[t].level
          return get(r ? e - 1 : e, n != r)
        }
        var c = getBidiPartAt(s, a, l),
          u = B,
          d = getBidi(a, c, "before" == l)
        return null != u && (d.other = getBidi(a, u, "before" != l)), d
      }
      function estimateCoords(e, t) {
        var r = 0
        ;(t = clipPos(e.doc, t)),
          e.options.lineWrapping || (r = charWidth(e.display) * t.ch)
        var n = getLine(e.doc, t.line),
          o = heightAtLine(n) + paddingTop(e.display)
        return { left: r, right: r, top: o, bottom: o + n.height }
      }
      function PosWithInfo(e, t, r, n, o) {
        var i = Pos(e, t, r)
        return (i.xRel = o), n && (i.outside = !0), i
      }
      function coordsChar(e, t, r) {
        var n = e.doc
        if ((r += e.display.viewOffset) < 0)
          return PosWithInfo(n.first, 0, null, !0, -1)
        var o = lineAtHeight(n, r),
          i = n.first + n.size - 1
        if (o > i)
          return PosWithInfo(
            n.first + n.size - 1,
            getLine(n, i).text.length,
            null,
            !0,
            1
          )
        t < 0 && (t = 0)
        for (var s = getLine(n, o); ; ) {
          var a = coordsCharInner(e, s, o, t, r),
            l = collapsedSpanAtEnd(s),
            c = l && l.find(0, !0)
          if (!l || !(a.ch > c.from.ch || (a.ch == c.from.ch && a.xRel > 0)))
            return a
          o = lineNo((s = c.to.line))
        }
      }
      function wrappedLineExtent(e, t, r, n) {
        n -= widgetTopHeight(t)
        var o = t.text.length,
          i = findFirst(
            function(t) {
              return measureCharPrepared(e, r, t - 1).bottom <= n
            },
            o,
            0
          )
        return {
          begin: i,
          end: (o = findFirst(
            function(t) {
              return measureCharPrepared(e, r, t).top > n
            },
            i,
            o
          )),
        }
      }
      function wrappedLineExtentChar(e, t, r, n) {
        r || (r = prepareMeasureForLine(e, t))
        return wrappedLineExtent(
          e,
          t,
          r,
          intoCoordSystem(e, t, measureCharPrepared(e, r, n), "line").top
        )
      }
      function boxIsAfter(e, t, r, n) {
        return !(e.bottom <= r) && (e.top > r || (n ? e.left : e.right) > t)
      }
      function coordsCharInner(e, t, r, n, o) {
        o -= heightAtLine(t)
        var i = prepareMeasureForLine(e, t),
          s = widgetTopHeight(t),
          a = 0,
          l = t.text.length,
          c = !0,
          u = getOrder(t, e.doc.direction)
        if (u) {
          var d = (e.options.lineWrapping
            ? function coordsBidiPartWrapped(e, t, r, n, o, i, s) {
                var a = wrappedLineExtent(e, t, n, s),
                  l = a.begin,
                  c = a.end
                ;/\s/.test(t.text.charAt(c - 1)) && c--
                for (var u = null, d = null, p = 0; p < o.length; p++) {
                  var h = o[p]
                  if (!(h.from >= c || h.to <= l)) {
                    var f = 1 != h.level,
                      g = measureCharPrepared(
                        e,
                        n,
                        f ? Math.min(c, h.to) - 1 : Math.max(l, h.from)
                      ).right,
                      m = g < i ? i - g + 1e9 : g - i
                    ;(!u || d > m) && ((u = h), (d = m))
                  }
                }
                u || (u = o[o.length - 1])
                u.from < l && (u = { from: l, to: u.to, level: u.level })
                u.to > c && (u = { from: u.from, to: c, level: u.level })
                return u
              }
            : function coordsBidiPart(e, t, r, n, o, i, s) {
                var a = findFirst(
                    function(a) {
                      var l = o[a],
                        c = 1 != l.level
                      return boxIsAfter(
                        cursorCoords(
                          e,
                          Pos(r, c ? l.to : l.from, c ? "before" : "after"),
                          "line",
                          t,
                          n
                        ),
                        i,
                        s,
                        !0
                      )
                    },
                    0,
                    o.length - 1
                  ),
                  l = o[a]
                if (a > 0) {
                  var c = 1 != l.level,
                    u = cursorCoords(
                      e,
                      Pos(r, c ? l.from : l.to, c ? "after" : "before"),
                      "line",
                      t,
                      n
                    )
                  boxIsAfter(u, i, s, !0) && u.top > s && (l = o[a - 1])
                }
                return l
              })(e, t, r, i, u, n, o)
          ;(a = (c = 1 != d.level) ? d.from : d.to - 1),
            (l = c ? d.to : d.from - 1)
        }
        var p,
          h,
          f = null,
          g = null,
          m = findFirst(
            function(t) {
              var r = measureCharPrepared(e, i, t)
              return (
                (r.top += s),
                (r.bottom += s),
                !!boxIsAfter(r, n, o, !1) &&
                  (r.top <= o && r.left <= n && ((f = t), (g = r)), !0)
              )
            },
            a,
            l
          ),
          v = !1
        if (g) {
          var y = n - g.left < g.right - n,
            b = y == c
          ;(m = f + (b ? 0 : 1)),
            (h = b ? "after" : "before"),
            (p = y ? g.left : g.right)
        } else {
          c || (m != l && m != a) || m++,
            (h =
              0 == m
                ? "after"
                : m == t.text.length
                  ? "before"
                  : measureCharPrepared(e, i, m - (c ? 1 : 0)).bottom + s <=
                      o ==
                    c
                    ? "after"
                    : "before")
          var C = cursorCoords(e, Pos(r, m, h), "line", t, i)
          ;(p = C.left), (v = o < C.top || o >= C.bottom)
        }
        return PosWithInfo(
          r,
          (m = skipExtendingChars(t.text, m, 1)),
          h,
          v,
          n - p
        )
      }
      var le
      function textHeight(e) {
        if (null != e.cachedTextHeight) return e.cachedTextHeight
        if (null == le) {
          le = elt("pre")
          for (var t = 0; t < 49; ++t)
            le.appendChild(document.createTextNode("x")),
              le.appendChild(elt("br"))
          le.appendChild(document.createTextNode("x"))
        }
        removeChildrenAndAdd(e.measure, le)
        var r = le.offsetHeight / 50
        return (
          r > 3 && (e.cachedTextHeight = r), removeChildren(e.measure), r || 1
        )
      }
      function charWidth(e) {
        if (null != e.cachedCharWidth) return e.cachedCharWidth
        var t = elt("span", "xxxxxxxxxx"),
          r = elt("pre", [t])
        removeChildrenAndAdd(e.measure, r)
        var n = t.getBoundingClientRect(),
          o = (n.right - n.left) / 10
        return o > 2 && (e.cachedCharWidth = o), o || 10
      }
      function getDimensions(e) {
        for (
          var t = e.display,
            r = {},
            n = {},
            o = t.gutters.clientLeft,
            i = t.gutters.firstChild,
            s = 0;
          i;
          i = i.nextSibling, ++s
        )
          (r[e.options.gutters[s]] = i.offsetLeft + i.clientLeft + o),
            (n[e.options.gutters[s]] = i.clientWidth)
        return {
          fixedPos: compensateForHScroll(t),
          gutterTotalWidth: t.gutters.offsetWidth,
          gutterLeft: r,
          gutterWidth: n,
          wrapperWidth: t.wrapper.clientWidth,
        }
      }
      function compensateForHScroll(e) {
        return (
          e.scroller.getBoundingClientRect().left -
          e.sizer.getBoundingClientRect().left
        )
      }
      function estimateHeight(e) {
        var t = textHeight(e.display),
          r = e.options.lineWrapping,
          n =
            r &&
            Math.max(
              5,
              e.display.scroller.clientWidth / charWidth(e.display) - 3
            )
        return function(o) {
          if (lineIsHidden(e.doc, o)) return 0
          var i = 0
          if (o.widgets)
            for (var s = 0; s < o.widgets.length; s++)
              o.widgets[s].height && (i += o.widgets[s].height)
          return r ? i + (Math.ceil(o.text.length / n) || 1) * t : i + t
        }
      }
      function estimateLineHeights(e) {
        var t = e.doc,
          r = estimateHeight(e)
        t.iter(function(e) {
          var t = r(e)
          t != e.height && updateLineHeight(e, t)
        })
      }
      function posFromMouse(e, t, r, n) {
        var o = e.display
        if (!r && "true" == e_target(t).getAttribute("cm-not-content"))
          return null
        var i,
          s,
          a = o.lineSpace.getBoundingClientRect()
        try {
          ;(i = t.clientX - a.left), (s = t.clientY - a.top)
        } catch (t) {
          return null
        }
        var l,
          c = coordsChar(e, i, s)
        if (
          n &&
          1 == c.xRel &&
          (l = getLine(e.doc, c.line).text).length == c.ch
        ) {
          var u = countColumn(l, l.length, e.options.tabSize) - l.length
          c = Pos(
            c.line,
            Math.max(
              0,
              Math.round(
                (i - paddingH(e.display).left) / charWidth(e.display)
              ) - u
            )
          )
        }
        return c
      }
      function findViewIndex(e, t) {
        if (t >= e.display.viewTo) return null
        if ((t -= e.display.viewFrom) < 0) return null
        for (var r = e.display.view, n = 0; n < r.length; n++)
          if ((t -= r[n].size) < 0) return n
      }
      function updateSelection(e) {
        e.display.input.showSelection(e.display.input.prepareSelection())
      }
      function prepareSelection(e, t) {
        void 0 === t && (t = !0)
        for (
          var r = e.doc,
            n = {},
            o = (n.cursors = document.createDocumentFragment()),
            i = (n.selection = document.createDocumentFragment()),
            s = 0;
          s < r.sel.ranges.length;
          s++
        )
          if (t || s != r.sel.primIndex) {
            var a = r.sel.ranges[s]
            if (
              !(
                a.from().line >= e.display.viewTo ||
                a.to().line < e.display.viewFrom
              )
            ) {
              var l = a.empty()
              ;(l || e.options.showCursorWhenSelecting) &&
                drawSelectionCursor(e, a.head, o),
                l || drawSelectionRange(e, a, i)
            }
          }
        return n
      }
      function drawSelectionCursor(e, t, r) {
        var n = cursorCoords(
            e,
            t,
            "div",
            null,
            null,
            !e.options.singleCursorHeightPerLine
          ),
          o = r.appendChild(elt("div", " ", "CodeMirror-cursor"))
        if (
          ((o.style.left = n.left + "px"),
          (o.style.top = n.top + "px"),
          (o.style.height =
            Math.max(0, n.bottom - n.top) * e.options.cursorHeight + "px"),
          n.other)
        ) {
          var i = r.appendChild(
            elt("div", " ", "CodeMirror-cursor CodeMirror-secondarycursor")
          )
          ;(i.style.display = ""),
            (i.style.left = n.other.left + "px"),
            (i.style.top = n.other.top + "px"),
            (i.style.height = 0.85 * (n.other.bottom - n.other.top) + "px")
        }
      }
      function cmpCoords(e, t) {
        return e.top - t.top || e.left - t.left
      }
      function drawSelectionRange(e, t, r) {
        var n = e.display,
          o = e.doc,
          i = document.createDocumentFragment(),
          s = paddingH(e.display),
          a = s.left,
          l =
            Math.max(n.sizerWidth, displayWidth(e) - n.sizer.offsetLeft) -
            s.right,
          c = "ltr" == o.direction
        function add(e, t, r, n) {
          t < 0 && (t = 0),
            (t = Math.round(t)),
            (n = Math.round(n)),
            i.appendChild(
              elt(
                "div",
                null,
                "CodeMirror-selected",
                "position: absolute; left: " +
                  e +
                  "px;\n                             top: " +
                  t +
                  "px; width: " +
                  (null == r ? l - e : r) +
                  "px;\n                             height: " +
                  (n - t) +
                  "px"
              )
            )
        }
        function drawForLine(t, r, n) {
          var i,
            s,
            u = getLine(o, t),
            d = u.text.length
          function coords(r, n) {
            return charCoords(e, Pos(t, r), "div", u, n)
          }
          function wrapX(t, r, n) {
            var o = wrappedLineExtentChar(e, u, null, t),
              i = ("ltr" == r) == ("after" == n) ? "left" : "right"
            return coords(
              "after" == n
                ? o.begin
                : o.end - (/\s/.test(u.text.charAt(o.end - 1)) ? 2 : 1),
              i
            )[i]
          }
          var p = getOrder(u, o.direction)
          return (
            (function iterateBidiSections(e, t, r, n) {
              if (!e) return n(t, r, "ltr", 0)
              for (var o = !1, i = 0; i < e.length; ++i) {
                var s = e[i]
                ;((s.from < r && s.to > t) || (t == r && s.to == t)) &&
                  (n(
                    Math.max(s.from, t),
                    Math.min(s.to, r),
                    1 == s.level ? "rtl" : "ltr",
                    i
                  ),
                  (o = !0))
              }
              o || n(t, r, "ltr")
            })(p, r || 0, null == n ? d : n, function(e, t, o, u) {
              var h = "ltr" == o,
                f = coords(e, h ? "left" : "right"),
                g = coords(t - 1, h ? "right" : "left"),
                m = null == r && 0 == e,
                v = null == n && t == d,
                y = 0 == u,
                b = !p || u == p.length - 1
              if (g.top - f.top <= 3) {
                var C = (c ? v : m) && b,
                  x = (c ? m : v) && y ? a : (h ? f : g).left,
                  w = C ? l : (h ? g : f).right
                add(x, f.top, w - x, f.bottom)
              } else {
                var S, k, L, M
                h
                  ? ((S = c && m && y ? a : f.left),
                    (k = c ? l : wrapX(e, o, "before")),
                    (L = c ? a : wrapX(t, o, "after")),
                    (M = c && v && b ? l : g.right))
                  : ((S = c ? wrapX(e, o, "before") : a),
                    (k = !c && m && y ? l : f.right),
                    (L = !c && v && b ? a : g.left),
                    (M = c ? wrapX(t, o, "after") : l)),
                  add(S, f.top, k - S, f.bottom),
                  f.bottom < g.top && add(a, f.bottom, null, g.top),
                  add(L, g.top, M - L, g.bottom)
              }
              ;(!i || cmpCoords(f, i) < 0) && (i = f),
                cmpCoords(g, i) < 0 && (i = g),
                (!s || cmpCoords(f, s) < 0) && (s = f),
                cmpCoords(g, s) < 0 && (s = g)
            }),
            { start: i, end: s }
          )
        }
        var u = t.from(),
          d = t.to()
        if (u.line == d.line) drawForLine(u.line, u.ch, d.ch)
        else {
          var p = getLine(o, u.line),
            h = getLine(o, d.line),
            f = visualLine(p) == visualLine(h),
            g = drawForLine(u.line, u.ch, f ? p.text.length + 1 : null).end,
            m = drawForLine(d.line, f ? 0 : null, d.ch).start
          f &&
            (g.top < m.top - 2
              ? (add(g.right, g.top, null, g.bottom),
                add(a, m.top, m.left, m.bottom))
              : add(g.right, g.top, m.left - g.right, g.bottom)),
            g.bottom < m.top && add(a, g.bottom, null, m.top)
        }
        r.appendChild(i)
      }
      function restartBlink(e) {
        if (e.state.focused) {
          var t = e.display
          clearInterval(t.blinker)
          var r = !0
          ;(t.cursorDiv.style.visibility = ""),
            e.options.cursorBlinkRate > 0
              ? (t.blinker = setInterval(function() {
                  return (t.cursorDiv.style.visibility = (r = !r)
                    ? ""
                    : "hidden")
                }, e.options.cursorBlinkRate))
              : e.options.cursorBlinkRate < 0 &&
                (t.cursorDiv.style.visibility = "hidden")
        }
      }
      function ensureFocus(e) {
        e.state.focused || (e.display.input.focus(), onFocus(e))
      }
      function delayBlurEvent(e) {
        ;(e.state.delayingBlurEvent = !0),
          setTimeout(function() {
            e.state.delayingBlurEvent &&
              ((e.state.delayingBlurEvent = !1), onBlur(e))
          }, 100)
      }
      function onFocus(e, t) {
        e.state.delayingBlurEvent && (e.state.delayingBlurEvent = !1),
          "nocursor" != e.options.readOnly &&
            (e.state.focused ||
              (signal(e, "focus", e, t),
              (e.state.focused = !0),
              addClass(e.display.wrapper, "CodeMirror-focused"),
              e.curOp ||
                e.display.selForContextMenu == e.doc.sel ||
                (e.display.input.reset(),
                l &&
                  setTimeout(function() {
                    return e.display.input.reset(!0)
                  }, 20)),
              e.display.input.receivedFocus()),
            restartBlink(e))
      }
      function onBlur(e, t) {
        e.state.delayingBlurEvent ||
          (e.state.focused &&
            (signal(e, "blur", e, t),
            (e.state.focused = !1),
            k(e.display.wrapper, "CodeMirror-focused")),
          clearInterval(e.display.blinker),
          setTimeout(function() {
            e.state.focused || (e.display.shift = !1)
          }, 150))
      }
      function updateHeightsInViewport(e) {
        for (
          var t = e.display, r = t.lineDiv.offsetTop, n = 0;
          n < t.view.length;
          n++
        ) {
          var o = t.view[n],
            i = void 0
          if (!o.hidden) {
            if (s && a < 8) {
              var l = o.node.offsetTop + o.node.offsetHeight
              ;(i = l - r), (r = l)
            } else {
              var c = o.node.getBoundingClientRect()
              i = c.bottom - c.top
            }
            var u = o.line.height - i
            if (
              (i < 2 && (i = textHeight(t)),
              (u > 0.005 || u < -0.005) &&
                (updateLineHeight(o.line, i),
                updateWidgetHeight(o.line),
                o.rest))
            )
              for (var d = 0; d < o.rest.length; d++)
                updateWidgetHeight(o.rest[d])
          }
        }
      }
      function updateWidgetHeight(e) {
        if (e.widgets)
          for (var t = 0; t < e.widgets.length; ++t) {
            var r = e.widgets[t],
              n = r.node.parentNode
            n && (r.height = n.offsetHeight)
          }
      }
      function visibleLines(e, t, r) {
        var n = r && null != r.top ? Math.max(0, r.top) : e.scroller.scrollTop
        n = Math.floor(n - paddingTop(e))
        var o = r && null != r.bottom ? r.bottom : n + e.wrapper.clientHeight,
          i = lineAtHeight(t, n),
          s = lineAtHeight(t, o)
        if (r && r.ensure) {
          var a = r.ensure.from.line,
            l = r.ensure.to.line
          a < i
            ? ((i = a),
              (s = lineAtHeight(
                t,
                heightAtLine(getLine(t, a)) + e.wrapper.clientHeight
              )))
            : Math.min(l, t.lastLine()) >= s &&
              ((i = lineAtHeight(
                t,
                heightAtLine(getLine(t, l)) - e.wrapper.clientHeight
              )),
              (s = l))
        }
        return { from: i, to: Math.max(s, i + 1) }
      }
      function alignHorizontally(e) {
        var t = e.display,
          r = t.view
        if (t.alignWidgets || (t.gutters.firstChild && e.options.fixedGutter)) {
          for (
            var n =
                compensateForHScroll(t) -
                t.scroller.scrollLeft +
                e.doc.scrollLeft,
              o = t.gutters.offsetWidth,
              i = n + "px",
              s = 0;
            s < r.length;
            s++
          )
            if (!r[s].hidden) {
              e.options.fixedGutter &&
                (r[s].gutter && (r[s].gutter.style.left = i),
                r[s].gutterBackground && (r[s].gutterBackground.style.left = i))
              var a = r[s].alignable
              if (a) for (var l = 0; l < a.length; l++) a[l].style.left = i
            }
          e.options.fixedGutter && (t.gutters.style.left = n + o + "px")
        }
      }
      function maybeUpdateLineNumberWidth(e) {
        if (!e.options.lineNumbers) return !1
        var t = e.doc,
          r = lineNumberFor(e.options, t.first + t.size - 1),
          n = e.display
        if (r.length != n.lineNumChars) {
          var o = n.measure.appendChild(
              elt(
                "div",
                [elt("div", r)],
                "CodeMirror-linenumber CodeMirror-gutter-elt"
              )
            ),
            i = o.firstChild.offsetWidth,
            s = o.offsetWidth - i
          return (
            (n.lineGutter.style.width = ""),
            (n.lineNumInnerWidth =
              Math.max(i, n.lineGutter.offsetWidth - s) + 1),
            (n.lineNumWidth = n.lineNumInnerWidth + s),
            (n.lineNumChars = n.lineNumInnerWidth ? r.length : -1),
            (n.lineGutter.style.width = n.lineNumWidth + "px"),
            updateGutterSpace(e),
            !0
          )
        }
        return !1
      }
      function calculateScrollPos(e, t) {
        var r = e.display,
          n = textHeight(e.display)
        t.top < 0 && (t.top = 0)
        var o =
            e.curOp && null != e.curOp.scrollTop
              ? e.curOp.scrollTop
              : r.scroller.scrollTop,
          i = displayHeight(e),
          s = {}
        t.bottom - t.top > i && (t.bottom = t.top + i)
        var a = e.doc.height + paddingVert(r),
          l = t.top < n,
          c = t.bottom > a - n
        if (t.top < o) s.scrollTop = l ? 0 : t.top
        else if (t.bottom > o + i) {
          var u = Math.min(t.top, (c ? a : t.bottom) - i)
          u != o && (s.scrollTop = u)
        }
        var d =
            e.curOp && null != e.curOp.scrollLeft
              ? e.curOp.scrollLeft
              : r.scroller.scrollLeft,
          p =
            displayWidth(e) -
            (e.options.fixedGutter ? r.gutters.offsetWidth : 0),
          h = t.right - t.left > p
        return (
          h && (t.right = t.left + p),
          t.left < 10
            ? (s.scrollLeft = 0)
            : t.left < d
              ? (s.scrollLeft = Math.max(0, t.left - (h ? 0 : 10)))
              : t.right > p + d - 3 &&
                (s.scrollLeft = t.right + (h ? 0 : 10) - p),
          s
        )
      }
      function addToScrollTop(e, t) {
        null != t &&
          (resolveScrollToPos(e),
          (e.curOp.scrollTop =
            (null == e.curOp.scrollTop ? e.doc.scrollTop : e.curOp.scrollTop) +
            t))
      }
      function ensureCursorVisible(e) {
        resolveScrollToPos(e)
        var t = e.getCursor()
        e.curOp.scrollToPos = {
          from: t,
          to: t,
          margin: e.options.cursorScrollMargin,
        }
      }
      function scrollToCoords(e, t, r) {
        ;(null == t && null == r) || resolveScrollToPos(e),
          null != t && (e.curOp.scrollLeft = t),
          null != r && (e.curOp.scrollTop = r)
      }
      function resolveScrollToPos(e) {
        var t = e.curOp.scrollToPos
        if (t) {
          e.curOp.scrollToPos = null
          scrollToCoordsRange(
            e,
            estimateCoords(e, t.from),
            estimateCoords(e, t.to),
            t.margin
          )
        }
      }
      function scrollToCoordsRange(e, t, r, n) {
        var o = calculateScrollPos(e, {
          left: Math.min(t.left, r.left),
          top: Math.min(t.top, r.top) - n,
          right: Math.max(t.right, r.right),
          bottom: Math.max(t.bottom, r.bottom) + n,
        })
        scrollToCoords(e, o.scrollLeft, o.scrollTop)
      }
      function updateScrollTop(e, t) {
        Math.abs(e.doc.scrollTop - t) < 2 ||
          (r || updateDisplaySimple(e, { top: t }),
          setScrollTop(e, t, !0),
          r && updateDisplaySimple(e),
          startWorker(e, 100))
      }
      function setScrollTop(e, t, r) {
        ;(t = Math.min(
          e.display.scroller.scrollHeight - e.display.scroller.clientHeight,
          t
        )),
          (e.display.scroller.scrollTop != t || r) &&
            ((e.doc.scrollTop = t),
            e.display.scrollbars.setScrollTop(t),
            e.display.scroller.scrollTop != t &&
              (e.display.scroller.scrollTop = t))
      }
      function setScrollLeft(e, t, r, n) {
        ;(t = Math.min(
          t,
          e.display.scroller.scrollWidth - e.display.scroller.clientWidth
        )),
          ((r ? t == e.doc.scrollLeft : Math.abs(e.doc.scrollLeft - t) < 2) &&
            !n) ||
            ((e.doc.scrollLeft = t),
            alignHorizontally(e),
            e.display.scroller.scrollLeft != t &&
              (e.display.scroller.scrollLeft = t),
            e.display.scrollbars.setScrollLeft(t))
      }
      function measureForScrollbars(e) {
        var t = e.display,
          r = t.gutters.offsetWidth,
          n = Math.round(e.doc.height + paddingVert(e.display))
        return {
          clientHeight: t.scroller.clientHeight,
          viewHeight: t.wrapper.clientHeight,
          scrollWidth: t.scroller.scrollWidth,
          clientWidth: t.scroller.clientWidth,
          viewWidth: t.wrapper.clientWidth,
          barLeft: e.options.fixedGutter ? r : 0,
          docHeight: n,
          scrollHeight: n + scrollGap(e) + t.barHeight,
          nativeBarWidth: t.nativeBarWidth,
          gutterWidth: r,
        }
      }
      var ce = function(e, t, r) {
        this.cm = r
        var n = (this.vert = elt(
            "div",
            [elt("div", null, null, "min-width: 1px")],
            "CodeMirror-vscrollbar"
          )),
          o = (this.horiz = elt(
            "div",
            [elt("div", null, null, "height: 100%; min-height: 1px")],
            "CodeMirror-hscrollbar"
          ))
        e(n),
          e(o),
          j(n, "scroll", function() {
            n.clientHeight && t(n.scrollTop, "vertical")
          }),
          j(o, "scroll", function() {
            o.clientWidth && t(o.scrollLeft, "horizontal")
          }),
          (this.checkedZeroWidth = !1),
          s &&
            a < 8 &&
            (this.horiz.style.minHeight = this.vert.style.minWidth = "18px")
      }
      ;(ce.prototype.update = function(e) {
        var t = e.scrollWidth > e.clientWidth + 1,
          r = e.scrollHeight > e.clientHeight + 1,
          n = e.nativeBarWidth
        if (r) {
          ;(this.vert.style.display = "block"),
            (this.vert.style.bottom = t ? n + "px" : "0")
          var o = e.viewHeight - (t ? n : 0)
          this.vert.firstChild.style.height =
            Math.max(0, e.scrollHeight - e.clientHeight + o) + "px"
        } else
          (this.vert.style.display = ""),
            (this.vert.firstChild.style.height = "0")
        if (t) {
          ;(this.horiz.style.display = "block"),
            (this.horiz.style.right = r ? n + "px" : "0"),
            (this.horiz.style.left = e.barLeft + "px")
          var i = e.viewWidth - e.barLeft - (r ? n : 0)
          this.horiz.firstChild.style.width =
            Math.max(0, e.scrollWidth - e.clientWidth + i) + "px"
        } else
          (this.horiz.style.display = ""),
            (this.horiz.firstChild.style.width = "0")
        return (
          !this.checkedZeroWidth &&
            e.clientHeight > 0 &&
            (0 == n && this.zeroWidthHack(), (this.checkedZeroWidth = !0)),
          { right: r ? n : 0, bottom: t ? n : 0 }
        )
      }),
        (ce.prototype.setScrollLeft = function(e) {
          this.horiz.scrollLeft != e && (this.horiz.scrollLeft = e),
            this.disableHoriz &&
              this.enableZeroWidthBar(this.horiz, this.disableHoriz, "horiz")
        }),
        (ce.prototype.setScrollTop = function(e) {
          this.vert.scrollTop != e && (this.vert.scrollTop = e),
            this.disableVert &&
              this.enableZeroWidthBar(this.vert, this.disableVert, "vert")
        }),
        (ce.prototype.zeroWidthHack = function() {
          var e = y && !h ? "12px" : "18px"
          ;(this.horiz.style.height = this.vert.style.width = e),
            (this.horiz.style.pointerEvents = this.vert.style.pointerEvents =
              "none"),
            (this.disableHoriz = new T()),
            (this.disableVert = new T())
        }),
        (ce.prototype.enableZeroWidthBar = function(e, t, r) {
          e.style.pointerEvents = "auto"
          t.set(1e3, function maybeDisable() {
            var n = e.getBoundingClientRect()
            ;("vert" == r
              ? document.elementFromPoint(n.right - 1, (n.top + n.bottom) / 2)
              : document.elementFromPoint(
                  (n.right + n.left) / 2,
                  n.bottom - 1
                )) != e
              ? (e.style.pointerEvents = "none")
              : t.set(1e3, maybeDisable)
          })
        }),
        (ce.prototype.clear = function() {
          var e = this.horiz.parentNode
          e.removeChild(this.horiz), e.removeChild(this.vert)
        })
      var ue = function() {}
      ;(ue.prototype.update = function() {
        return { bottom: 0, right: 0 }
      }),
        (ue.prototype.setScrollLeft = function() {}),
        (ue.prototype.setScrollTop = function() {}),
        (ue.prototype.clear = function() {})
      function updateScrollbars(e, t) {
        t || (t = measureForScrollbars(e))
        var r = e.display.barWidth,
          n = e.display.barHeight
        updateScrollbarsInner(e, t)
        for (
          var o = 0;
          (o < 4 && r != e.display.barWidth) || n != e.display.barHeight;
          o++
        )
          r != e.display.barWidth &&
            e.options.lineWrapping &&
            updateHeightsInViewport(e),
            updateScrollbarsInner(e, measureForScrollbars(e)),
            (r = e.display.barWidth),
            (n = e.display.barHeight)
      }
      function updateScrollbarsInner(e, t) {
        var r = e.display,
          n = r.scrollbars.update(t)
        ;(r.sizer.style.paddingRight = (r.barWidth = n.right) + "px"),
          (r.sizer.style.paddingBottom = (r.barHeight = n.bottom) + "px"),
          (r.heightForcer.style.borderBottom =
            n.bottom + "px solid transparent"),
          n.right && n.bottom
            ? ((r.scrollbarFiller.style.display = "block"),
              (r.scrollbarFiller.style.height = n.bottom + "px"),
              (r.scrollbarFiller.style.width = n.right + "px"))
            : (r.scrollbarFiller.style.display = ""),
          n.bottom &&
          e.options.coverGutterNextToScrollbar &&
          e.options.fixedGutter
            ? ((r.gutterFiller.style.display = "block"),
              (r.gutterFiller.style.height = n.bottom + "px"),
              (r.gutterFiller.style.width = t.gutterWidth + "px"))
            : (r.gutterFiller.style.display = "")
      }
      var de = { native: ce, null: ue }
      function initScrollbars(e) {
        e.display.scrollbars &&
          (e.display.scrollbars.clear(),
          e.display.scrollbars.addClass &&
            k(e.display.wrapper, e.display.scrollbars.addClass)),
          (e.display.scrollbars = new de[e.options.scrollbarStyle](
            function(t) {
              e.display.wrapper.insertBefore(t, e.display.scrollbarFiller),
                j(t, "mousedown", function() {
                  e.state.focused &&
                    setTimeout(function() {
                      return e.display.input.focus()
                    }, 0)
                }),
                t.setAttribute("cm-not-content", "true")
            },
            function(t, r) {
              "horizontal" == r ? setScrollLeft(e, t) : updateScrollTop(e, t)
            },
            e
          )),
          e.display.scrollbars.addClass &&
            addClass(e.display.wrapper, e.display.scrollbars.addClass)
      }
      var pe = 0
      function startOperation(e) {
        ;(e.curOp = {
          cm: e,
          viewChanged: !1,
          startHeight: e.doc.height,
          forceUpdate: !1,
          updateInput: null,
          typing: !1,
          changeObjs: null,
          cursorActivityHandlers: null,
          cursorActivityCalled: 0,
          selectionChanged: !1,
          updateMaxLine: !1,
          scrollLeft: null,
          scrollTop: null,
          scrollToPos: null,
          focus: !1,
          id: ++pe,
        }),
          (function pushOperation(e) {
            ie
              ? ie.ops.push(e)
              : (e.ownsGroup = ie = { ops: [e], delayedCallbacks: [] })
          })(e.curOp)
      }
      function endOperation(e) {
        !(function finishOperation(e, t) {
          var r = e.ownsGroup
          if (r)
            try {
              !(function fireCallbacksForOps(e) {
                var t = e.delayedCallbacks,
                  r = 0
                do {
                  for (; r < t.length; r++) t[r].call(null)
                  for (var n = 0; n < e.ops.length; n++) {
                    var o = e.ops[n]
                    if (o.cursorActivityHandlers)
                      for (
                        ;
                        o.cursorActivityCalled <
                        o.cursorActivityHandlers.length;

                      )
                        o.cursorActivityHandlers[o.cursorActivityCalled++].call(
                          null,
                          o.cm
                        )
                  }
                } while (r < t.length)
              })(r)
            } finally {
              ;(ie = null), t(r)
            }
        })(e.curOp, function(e) {
          for (var t = 0; t < e.ops.length; t++) e.ops[t].cm.curOp = null
          !(function endOperations(e) {
            for (var t = e.ops, r = 0; r < t.length; r++) endOperation_R1(t[r])
            for (var n = 0; n < t.length; n++)
              (o = t[n]).updatedDisplay =
                o.mustUpdate && updateDisplayIfNeeded(o.cm, o.update)
            var o
            for (var i = 0; i < t.length; i++) endOperation_R2(t[i])
            for (var s = 0; s < t.length; s++) endOperation_W2(t[s])
            for (var a = 0; a < t.length; a++) endOperation_finish(t[a])
          })(e)
        })
      }
      function endOperation_R1(e) {
        var t = e.cm,
          r = t.display
        !(function maybeClipScrollbars(e) {
          var t = e.display
          !t.scrollbarsClipped &&
            t.scroller.offsetWidth &&
            ((t.nativeBarWidth =
              t.scroller.offsetWidth - t.scroller.clientWidth),
            (t.heightForcer.style.height = scrollGap(e) + "px"),
            (t.sizer.style.marginBottom = -t.nativeBarWidth + "px"),
            (t.sizer.style.borderRightWidth = scrollGap(e) + "px"),
            (t.scrollbarsClipped = !0))
        })(t),
          e.updateMaxLine && findMaxLine(t),
          (e.mustUpdate =
            e.viewChanged ||
            e.forceUpdate ||
            null != e.scrollTop ||
            (e.scrollToPos &&
              (e.scrollToPos.from.line < r.viewFrom ||
                e.scrollToPos.to.line >= r.viewTo)) ||
            (r.maxLineChanged && t.options.lineWrapping)),
          (e.update =
            e.mustUpdate &&
            new he(
              t,
              e.mustUpdate && { top: e.scrollTop, ensure: e.scrollToPos },
              e.forceUpdate
            ))
      }
      function endOperation_R2(e) {
        var t = e.cm,
          r = t.display
        e.updatedDisplay && updateHeightsInViewport(t),
          (e.barMeasure = measureForScrollbars(t)),
          r.maxLineChanged &&
            !t.options.lineWrapping &&
            ((e.adjustWidthTo =
              measureChar(t, r.maxLine, r.maxLine.text.length).left + 3),
            (t.display.sizerWidth = e.adjustWidthTo),
            (e.barMeasure.scrollWidth = Math.max(
              r.scroller.clientWidth,
              r.sizer.offsetLeft +
                e.adjustWidthTo +
                scrollGap(t) +
                t.display.barWidth
            )),
            (e.maxScrollLeft = Math.max(
              0,
              r.sizer.offsetLeft + e.adjustWidthTo - displayWidth(t)
            ))),
          (e.updatedDisplay || e.selectionChanged) &&
            (e.preparedSelection = r.input.prepareSelection())
      }
      function endOperation_W2(e) {
        var t = e.cm
        null != e.adjustWidthTo &&
          ((t.display.sizer.style.minWidth = e.adjustWidthTo + "px"),
          e.maxScrollLeft < t.doc.scrollLeft &&
            setScrollLeft(
              t,
              Math.min(t.display.scroller.scrollLeft, e.maxScrollLeft),
              !0
            ),
          (t.display.maxLineChanged = !1))
        var r = e.focus && e.focus == activeElt()
        e.preparedSelection &&
          t.display.input.showSelection(e.preparedSelection, r),
          (e.updatedDisplay || e.startHeight != t.doc.height) &&
            updateScrollbars(t, e.barMeasure),
          e.updatedDisplay && setDocumentHeight(t, e.barMeasure),
          e.selectionChanged && restartBlink(t),
          t.state.focused && e.updateInput && t.display.input.reset(e.typing),
          r && ensureFocus(e.cm)
      }
      function endOperation_finish(e) {
        var t = e.cm,
          r = t.display,
          n = t.doc
        if (
          (e.updatedDisplay && postUpdateDisplay(t, e.update),
          null == r.wheelStartX ||
            (null == e.scrollTop && null == e.scrollLeft && !e.scrollToPos) ||
            (r.wheelStartX = r.wheelStartY = null),
          null != e.scrollTop && setScrollTop(t, e.scrollTop, e.forceScroll),
          null != e.scrollLeft && setScrollLeft(t, e.scrollLeft, !0, !0),
          e.scrollToPos)
        ) {
          !(function maybeScrollWindow(e, t) {
            if (!signalDOMEvent(e, "scrollCursorIntoView")) {
              var r = e.display,
                n = r.sizer.getBoundingClientRect(),
                o = null
              if (
                (t.top + n.top < 0
                  ? (o = !0)
                  : t.bottom + n.top >
                      (window.innerHeight ||
                        document.documentElement.clientHeight) && (o = !1),
                null != o && !f)
              ) {
                var i = elt(
                  "div",
                  "​",
                  null,
                  "position: absolute;\n                         top: " +
                    (t.top - r.viewOffset - paddingTop(e.display)) +
                    "px;\n                         height: " +
                    (t.bottom - t.top + scrollGap(e) + r.barHeight) +
                    "px;\n                         left: " +
                    t.left +
                    "px; width: " +
                    Math.max(2, t.right - t.left) +
                    "px;"
                )
                e.display.lineSpace.appendChild(i),
                  i.scrollIntoView(o),
                  e.display.lineSpace.removeChild(i)
              }
            }
          })(
            t,
            (function scrollPosIntoView(e, t, r, n) {
              null == n && (n = 0)
              var o
              e.options.lineWrapping ||
                t != r ||
                (r =
                  "before" ==
                  (t = t.ch
                    ? Pos(
                        t.line,
                        "before" == t.sticky ? t.ch - 1 : t.ch,
                        "after"
                      )
                    : t).sticky
                    ? Pos(t.line, t.ch + 1, "before")
                    : t)
              for (var i = 0; i < 5; i++) {
                var s = !1,
                  a = cursorCoords(e, t),
                  l = r && r != t ? cursorCoords(e, r) : a,
                  c = calculateScrollPos(
                    e,
                    (o = {
                      left: Math.min(a.left, l.left),
                      top: Math.min(a.top, l.top) - n,
                      right: Math.max(a.left, l.left),
                      bottom: Math.max(a.bottom, l.bottom) + n,
                    })
                  ),
                  u = e.doc.scrollTop,
                  d = e.doc.scrollLeft
                if (
                  (null != c.scrollTop &&
                    (updateScrollTop(e, c.scrollTop),
                    Math.abs(e.doc.scrollTop - u) > 1 && (s = !0)),
                  null != c.scrollLeft &&
                    (setScrollLeft(e, c.scrollLeft),
                    Math.abs(e.doc.scrollLeft - d) > 1 && (s = !0)),
                  !s)
                )
                  break
              }
              return o
            })(
              t,
              clipPos(n, e.scrollToPos.from),
              clipPos(n, e.scrollToPos.to),
              e.scrollToPos.margin
            )
          )
        }
        var o = e.maybeHiddenMarkers,
          i = e.maybeUnhiddenMarkers
        if (o)
          for (var s = 0; s < o.length; ++s)
            o[s].lines.length || signal(o[s], "hide")
        if (i)
          for (var a = 0; a < i.length; ++a)
            i[a].lines.length && signal(i[a], "unhide")
        r.wrapper.offsetHeight && (n.scrollTop = t.display.scroller.scrollTop),
          e.changeObjs && signal(t, "changes", t, e.changeObjs),
          e.update && e.update.finish()
      }
      function runInOp(e, t) {
        if (e.curOp) return t()
        startOperation(e)
        try {
          return t()
        } finally {
          endOperation(e)
        }
      }
      function operation(e, t) {
        return function() {
          if (e.curOp) return t.apply(e, arguments)
          startOperation(e)
          try {
            return t.apply(e, arguments)
          } finally {
            endOperation(e)
          }
        }
      }
      function methodOp(e) {
        return function() {
          if (this.curOp) return e.apply(this, arguments)
          startOperation(this)
          try {
            return e.apply(this, arguments)
          } finally {
            endOperation(this)
          }
        }
      }
      function docMethodOp(e) {
        return function() {
          var t = this.cm
          if (!t || t.curOp) return e.apply(this, arguments)
          startOperation(t)
          try {
            return e.apply(this, arguments)
          } finally {
            endOperation(t)
          }
        }
      }
      function regChange(e, t, r, n) {
        null == t && (t = e.doc.first),
          null == r && (r = e.doc.first + e.doc.size),
          n || (n = 0)
        var o = e.display
        if (
          (n &&
            r < o.viewTo &&
            (null == o.updateLineNumbers || o.updateLineNumbers > t) &&
            (o.updateLineNumbers = t),
          (e.curOp.viewChanged = !0),
          t >= o.viewTo)
        )
          F && visualLineNo(e.doc, t) < o.viewTo && resetView(e)
        else if (r <= o.viewFrom)
          F && visualLineEndNo(e.doc, r + n) > o.viewFrom
            ? resetView(e)
            : ((o.viewFrom += n), (o.viewTo += n))
        else if (t <= o.viewFrom && r >= o.viewTo) resetView(e)
        else if (t <= o.viewFrom) {
          var i = viewCuttingPoint(e, r, r + n, 1)
          i
            ? ((o.view = o.view.slice(i.index)),
              (o.viewFrom = i.lineN),
              (o.viewTo += n))
            : resetView(e)
        } else if (r >= o.viewTo) {
          var s = viewCuttingPoint(e, t, t, -1)
          s
            ? ((o.view = o.view.slice(0, s.index)), (o.viewTo = s.lineN))
            : resetView(e)
        } else {
          var a = viewCuttingPoint(e, t, t, -1),
            l = viewCuttingPoint(e, r, r + n, 1)
          a && l
            ? ((o.view = o.view
                .slice(0, a.index)
                .concat(buildViewArray(e, a.lineN, l.lineN))
                .concat(o.view.slice(l.index))),
              (o.viewTo += n))
            : resetView(e)
        }
        var c = o.externalMeasured
        c &&
          (r < c.lineN
            ? (c.lineN += n)
            : t < c.lineN + c.size && (o.externalMeasured = null))
      }
      function regLineChange(e, t, r) {
        e.curOp.viewChanged = !0
        var n = e.display,
          o = e.display.externalMeasured
        if (
          (o &&
            t >= o.lineN &&
            t < o.lineN + o.size &&
            (n.externalMeasured = null),
          !(t < n.viewFrom || t >= n.viewTo))
        ) {
          var i = n.view[findViewIndex(e, t)]
          if (null != i.node) {
            var s = i.changes || (i.changes = [])
            ;-1 == indexOf(s, r) && s.push(r)
          }
        }
      }
      function resetView(e) {
        ;(e.display.viewFrom = e.display.viewTo = e.doc.first),
          (e.display.view = []),
          (e.display.viewOffset = 0)
      }
      function viewCuttingPoint(e, t, r, n) {
        var o,
          i = findViewIndex(e, t),
          s = e.display.view
        if (!F || r == e.doc.first + e.doc.size) return { index: i, lineN: r }
        for (var a = e.display.viewFrom, l = 0; l < i; l++) a += s[l].size
        if (a != t) {
          if (n > 0) {
            if (i == s.length - 1) return null
            ;(o = a + s[i].size - t), i++
          } else o = a - t
          ;(t += o), (r += o)
        }
        for (; visualLineNo(e.doc, r) != r; ) {
          if (i == (n < 0 ? 0 : s.length - 1)) return null
          ;(r += n * s[i - (n < 0 ? 1 : 0)].size), (i += n)
        }
        return { index: i, lineN: r }
      }
      function countDirtyView(e) {
        for (var t = e.display.view, r = 0, n = 0; n < t.length; n++) {
          var o = t[n]
          o.hidden || (o.node && !o.changes) || ++r
        }
        return r
      }
      function startWorker(e, t) {
        e.doc.highlightFrontier < e.display.viewTo &&
          e.state.highlight.set(t, bind(highlightWorker, e))
      }
      function highlightWorker(e) {
        var t = e.doc
        if (!(t.highlightFrontier >= e.display.viewTo)) {
          var r = +new Date() + e.options.workTime,
            n = getContextBefore(e, t.highlightFrontier),
            o = []
          t.iter(
            n.line,
            Math.min(t.first + t.size, e.display.viewTo + 500),
            function(i) {
              if (n.line >= e.display.viewFrom) {
                var s = i.styles,
                  a =
                    i.text.length > e.options.maxHighlightLength
                      ? copyState(t.mode, n.state)
                      : null,
                  l = highlightLine(e, i, n, !0)
                a && (n.state = a), (i.styles = l.styles)
                var c = i.styleClasses,
                  u = l.classes
                u ? (i.styleClasses = u) : c && (i.styleClasses = null)
                for (
                  var d =
                      !s ||
                      s.length != i.styles.length ||
                      (c != u &&
                        (!c ||
                          !u ||
                          c.bgClass != u.bgClass ||
                          c.textClass != u.textClass)),
                    p = 0;
                  !d && p < s.length;
                  ++p
                )
                  d = s[p] != i.styles[p]
                d && o.push(n.line), (i.stateAfter = n.save()), n.nextLine()
              } else
                i.text.length <= e.options.maxHighlightLength &&
                  processLine(e, i.text, n),
                  (i.stateAfter = n.line % 5 == 0 ? n.save() : null),
                  n.nextLine()
              if (+new Date() > r)
                return startWorker(e, e.options.workDelay), !0
            }
          ),
            (t.highlightFrontier = n.line),
            (t.modeFrontier = Math.max(t.modeFrontier, n.line)),
            o.length &&
              runInOp(e, function() {
                for (var t = 0; t < o.length; t++)
                  regLineChange(e, o[t], "text")
              })
        }
      }
      var he = function(e, t, r) {
        var n = e.display
        ;(this.viewport = t),
          (this.visible = visibleLines(n, e.doc, t)),
          (this.editorIsHidden = !n.wrapper.offsetWidth),
          (this.wrapperHeight = n.wrapper.clientHeight),
          (this.wrapperWidth = n.wrapper.clientWidth),
          (this.oldDisplayWidth = displayWidth(e)),
          (this.force = r),
          (this.dims = getDimensions(e)),
          (this.events = [])
      }
      ;(he.prototype.signal = function(e, t) {
        hasHandler(e, t) && this.events.push(arguments)
      }),
        (he.prototype.finish = function() {
          for (var e = 0; e < this.events.length; e++)
            signal.apply(null, this.events[e])
        })
      function updateDisplayIfNeeded(e, t) {
        var r = e.display,
          n = e.doc
        if (t.editorIsHidden) return resetView(e), !1
        if (
          !t.force &&
          t.visible.from >= r.viewFrom &&
          t.visible.to <= r.viewTo &&
          (null == r.updateLineNumbers || r.updateLineNumbers >= r.viewTo) &&
          r.renderedView == r.view &&
          0 == countDirtyView(e)
        )
          return !1
        maybeUpdateLineNumberWidth(e) &&
          (resetView(e), (t.dims = getDimensions(e)))
        var o = n.first + n.size,
          i = Math.max(t.visible.from - e.options.viewportMargin, n.first),
          s = Math.min(o, t.visible.to + e.options.viewportMargin)
        r.viewFrom < i &&
          i - r.viewFrom < 20 &&
          (i = Math.max(n.first, r.viewFrom)),
          r.viewTo > s && r.viewTo - s < 20 && (s = Math.min(o, r.viewTo)),
          F && ((i = visualLineNo(e.doc, i)), (s = visualLineEndNo(e.doc, s)))
        var a =
          i != r.viewFrom ||
          s != r.viewTo ||
          r.lastWrapHeight != t.wrapperHeight ||
          r.lastWrapWidth != t.wrapperWidth
        !(function adjustView(e, t, r) {
          var n = e.display
          0 == n.view.length || t >= n.viewTo || r <= n.viewFrom
            ? ((n.view = buildViewArray(e, t, r)), (n.viewFrom = t))
            : (n.viewFrom > t
                ? (n.view = buildViewArray(e, t, n.viewFrom).concat(n.view))
                : n.viewFrom < t &&
                  (n.view = n.view.slice(findViewIndex(e, t))),
              (n.viewFrom = t),
              n.viewTo < r
                ? (n.view = n.view.concat(buildViewArray(e, n.viewTo, r)))
                : n.viewTo > r &&
                  (n.view = n.view.slice(0, findViewIndex(e, r)))),
            (n.viewTo = r)
        })(e, i, s),
          (r.viewOffset = heightAtLine(getLine(e.doc, r.viewFrom))),
          (e.display.mover.style.top = r.viewOffset + "px")
        var c = countDirtyView(e)
        if (
          !a &&
          0 == c &&
          !t.force &&
          r.renderedView == r.view &&
          (null == r.updateLineNumbers || r.updateLineNumbers >= r.viewTo)
        )
          return !1
        var u = (function selectionSnapshot(e) {
          if (e.hasFocus()) return null
          var t = activeElt()
          if (!t || !contains(e.display.lineDiv, t)) return null
          var r = { activeElt: t }
          if (window.getSelection) {
            var n = window.getSelection()
            n.anchorNode &&
              n.extend &&
              contains(e.display.lineDiv, n.anchorNode) &&
              ((r.anchorNode = n.anchorNode),
              (r.anchorOffset = n.anchorOffset),
              (r.focusNode = n.focusNode),
              (r.focusOffset = n.focusOffset))
          }
          return r
        })(e)
        return (
          c > 4 && (r.lineDiv.style.display = "none"),
          (function patchDisplay(e, t, r) {
            var n = e.display,
              o = e.options.lineNumbers,
              i = n.lineDiv,
              s = i.firstChild
            function rm(t) {
              var r = t.nextSibling
              return (
                l && y && e.display.currentWheelTarget == t
                  ? (t.style.display = "none")
                  : t.parentNode.removeChild(t),
                r
              )
            }
            for (var a = n.view, c = n.viewFrom, u = 0; u < a.length; u++) {
              var d = a[u]
              if (d.hidden);
              else if (d.node && d.node.parentNode == i) {
                for (; s != d.node; ) s = rm(s)
                var p = o && null != t && t <= c && d.lineNumber
                d.changes &&
                  (indexOf(d.changes, "gutter") > -1 && (p = !1),
                  updateLineForChanges(e, d, c, r)),
                  p &&
                    (removeChildren(d.lineNumber),
                    d.lineNumber.appendChild(
                      document.createTextNode(lineNumberFor(e.options, c))
                    )),
                  (s = d.node.nextSibling)
              } else {
                var h = buildLineElement(e, d, c, r)
                i.insertBefore(h, s)
              }
              c += d.size
            }
            for (; s; ) s = rm(s)
          })(e, r.updateLineNumbers, t.dims),
          c > 4 && (r.lineDiv.style.display = ""),
          (r.renderedView = r.view),
          (function restoreSelection(e) {
            if (
              e &&
              e.activeElt &&
              e.activeElt != activeElt() &&
              (e.activeElt.focus(),
              e.anchorNode &&
                contains(document.body, e.anchorNode) &&
                contains(document.body, e.focusNode))
            ) {
              var t = window.getSelection(),
                r = document.createRange()
              r.setEnd(e.anchorNode, e.anchorOffset),
                r.collapse(!1),
                t.removeAllRanges(),
                t.addRange(r),
                t.extend(e.focusNode, e.focusOffset)
            }
          })(u),
          removeChildren(r.cursorDiv),
          removeChildren(r.selectionDiv),
          (r.gutters.style.height = r.sizer.style.minHeight = 0),
          a &&
            ((r.lastWrapHeight = t.wrapperHeight),
            (r.lastWrapWidth = t.wrapperWidth),
            startWorker(e, 400)),
          (r.updateLineNumbers = null),
          !0
        )
      }
      function postUpdateDisplay(e, t) {
        for (
          var r = t.viewport, n = !0;
          ((n &&
            e.options.lineWrapping &&
            t.oldDisplayWidth != displayWidth(e)) ||
            (r &&
              null != r.top &&
              (r = {
                top: Math.min(
                  e.doc.height + paddingVert(e.display) - displayHeight(e),
                  r.top
                ),
              }),
            (t.visible = visibleLines(e.display, e.doc, r)),
            !(
              t.visible.from >= e.display.viewFrom &&
              t.visible.to <= e.display.viewTo
            ))) &&
          updateDisplayIfNeeded(e, t);
          n = !1
        ) {
          updateHeightsInViewport(e)
          var o = measureForScrollbars(e)
          updateSelection(e),
            updateScrollbars(e, o),
            setDocumentHeight(e, o),
            (t.force = !1)
        }
        t.signal(e, "update", e),
          (e.display.viewFrom == e.display.reportedViewFrom &&
            e.display.viewTo == e.display.reportedViewTo) ||
            (t.signal(
              e,
              "viewportChange",
              e,
              e.display.viewFrom,
              e.display.viewTo
            ),
            (e.display.reportedViewFrom = e.display.viewFrom),
            (e.display.reportedViewTo = e.display.viewTo))
      }
      function updateDisplaySimple(e, t) {
        var r = new he(e, t)
        if (updateDisplayIfNeeded(e, r)) {
          updateHeightsInViewport(e), postUpdateDisplay(e, r)
          var n = measureForScrollbars(e)
          updateSelection(e),
            updateScrollbars(e, n),
            setDocumentHeight(e, n),
            r.finish()
        }
      }
      function updateGutterSpace(e) {
        var t = e.display.gutters.offsetWidth
        e.display.sizer.style.marginLeft = t + "px"
      }
      function setDocumentHeight(e, t) {
        ;(e.display.sizer.style.minHeight = t.docHeight + "px"),
          (e.display.heightForcer.style.top = t.docHeight + "px"),
          (e.display.gutters.style.height =
            t.docHeight + e.display.barHeight + scrollGap(e) + "px")
      }
      function updateGutters(e) {
        var t = e.display.gutters,
          r = e.options.gutters
        removeChildren(t)
        for (var n = 0; n < r.length; ++n) {
          var o = r[n],
            i = t.appendChild(elt("div", null, "CodeMirror-gutter " + o))
          "CodeMirror-linenumbers" == o &&
            ((e.display.lineGutter = i),
            (i.style.width = (e.display.lineNumWidth || 1) + "px"))
        }
        ;(t.style.display = n ? "" : "none"), updateGutterSpace(e)
      }
      function setGuttersForLineNumbers(e) {
        var t = indexOf(e.gutters, "CodeMirror-linenumbers")
        ;-1 == t && e.lineNumbers
          ? (e.gutters = e.gutters.concat(["CodeMirror-linenumbers"]))
          : t > -1 &&
            !e.lineNumbers &&
            ((e.gutters = e.gutters.slice(0)), e.gutters.splice(t, 1))
      }
      var fe = 0,
        ge = null
      s ? (ge = -0.53) : r ? (ge = 15) : u ? (ge = -0.7) : p && (ge = -1 / 3)
      function wheelEventDelta(e) {
        var t = e.wheelDeltaX,
          r = e.wheelDeltaY
        return (
          null == t &&
            e.detail &&
            e.axis == e.HORIZONTAL_AXIS &&
            (t = e.detail),
          null == r && e.detail && e.axis == e.VERTICAL_AXIS
            ? (r = e.detail)
            : null == r && (r = e.wheelDelta),
          { x: t, y: r }
        )
      }
      function wheelEventPixels(e) {
        var t = wheelEventDelta(e)
        return (t.x *= ge), (t.y *= ge), t
      }
      function onScrollWheel(e, t) {
        var n = wheelEventDelta(t),
          o = n.x,
          i = n.y,
          s = e.display,
          a = s.scroller,
          c = a.scrollWidth > a.clientWidth,
          u = a.scrollHeight > a.clientHeight
        if ((o && c) || (i && u)) {
          if (i && y && l)
            e: for (var p = t.target, h = s.view; p != a; p = p.parentNode)
              for (var f = 0; f < h.length; f++)
                if (h[f].node == p) {
                  e.display.currentWheelTarget = p
                  break e
                }
          if (o && !r && !d && null != ge)
            return (
              i && u && updateScrollTop(e, Math.max(0, a.scrollTop + i * ge)),
              setScrollLeft(e, Math.max(0, a.scrollLeft + o * ge)),
              (!i || (i && u)) && e_preventDefault(t),
              void (s.wheelStartX = null)
            )
          if (i && null != ge) {
            var g = i * ge,
              m = e.doc.scrollTop,
              v = m + s.wrapper.clientHeight
            g < 0
              ? (m = Math.max(0, m + g - 50))
              : (v = Math.min(e.doc.height, v + g + 50)),
              updateDisplaySimple(e, { top: m, bottom: v })
          }
          fe < 20 &&
            (null == s.wheelStartX
              ? ((s.wheelStartX = a.scrollLeft),
                (s.wheelStartY = a.scrollTop),
                (s.wheelDX = o),
                (s.wheelDY = i),
                setTimeout(function() {
                  if (null != s.wheelStartX) {
                    var e = a.scrollLeft - s.wheelStartX,
                      t = a.scrollTop - s.wheelStartY,
                      r =
                        (t && s.wheelDY && t / s.wheelDY) ||
                        (e && s.wheelDX && e / s.wheelDX)
                    ;(s.wheelStartX = s.wheelStartY = null),
                      r && ((ge = (ge * fe + r) / (fe + 1)), ++fe)
                  }
                }, 200))
              : ((s.wheelDX += o), (s.wheelDY += i)))
        }
      }
      var me = function(e, t) {
        ;(this.ranges = e), (this.primIndex = t)
      }
      ;(me.prototype.primary = function() {
        return this.ranges[this.primIndex]
      }),
        (me.prototype.equals = function(e) {
          if (e == this) return !0
          if (
            e.primIndex != this.primIndex ||
            e.ranges.length != this.ranges.length
          )
            return !1
          for (var t = 0; t < this.ranges.length; t++) {
            var r = this.ranges[t],
              n = e.ranges[t]
            if (
              !equalCursorPos(r.anchor, n.anchor) ||
              !equalCursorPos(r.head, n.head)
            )
              return !1
          }
          return !0
        }),
        (me.prototype.deepCopy = function() {
          for (var e = [], t = 0; t < this.ranges.length; t++)
            e[t] = new ve(
              copyPos(this.ranges[t].anchor),
              copyPos(this.ranges[t].head)
            )
          return new me(e, this.primIndex)
        }),
        (me.prototype.somethingSelected = function() {
          for (var e = 0; e < this.ranges.length; e++)
            if (!this.ranges[e].empty()) return !0
          return !1
        }),
        (me.prototype.contains = function(e, t) {
          t || (t = e)
          for (var r = 0; r < this.ranges.length; r++) {
            var n = this.ranges[r]
            if (cmp(t, n.from()) >= 0 && cmp(e, n.to()) <= 0) return r
          }
          return -1
        })
      var ve = function(e, t) {
        ;(this.anchor = e), (this.head = t)
      }
      ;(ve.prototype.from = function() {
        return minPos(this.anchor, this.head)
      }),
        (ve.prototype.to = function() {
          return maxPos(this.anchor, this.head)
        }),
        (ve.prototype.empty = function() {
          return (
            this.head.line == this.anchor.line && this.head.ch == this.anchor.ch
          )
        })
      function normalizeSelection(e, t) {
        var r = e[t]
        e.sort(function(e, t) {
          return cmp(e.from(), t.from())
        }),
          (t = indexOf(e, r))
        for (var n = 1; n < e.length; n++) {
          var o = e[n],
            i = e[n - 1]
          if (cmp(i.to(), o.from()) >= 0) {
            var s = minPos(i.from(), o.from()),
              a = maxPos(i.to(), o.to()),
              l = i.empty() ? o.from() == o.head : i.from() == i.head
            n <= t && --t, e.splice(--n, 2, new ve(l ? a : s, l ? s : a))
          }
        }
        return new me(e, t)
      }
      function simpleSelection(e, t) {
        return new me([new ve(e, t || e)], 0)
      }
      function changeEnd(e) {
        return e.text
          ? Pos(
              e.from.line + e.text.length - 1,
              lst(e.text).length + (1 == e.text.length ? e.from.ch : 0)
            )
          : e.to
      }
      function adjustForChange(e, t) {
        if (cmp(e, t.from) < 0) return e
        if (cmp(e, t.to) <= 0) return changeEnd(t)
        var r = e.line + t.text.length - (t.to.line - t.from.line) - 1,
          n = e.ch
        return (
          e.line == t.to.line && (n += changeEnd(t).ch - t.to.ch), Pos(r, n)
        )
      }
      function computeSelAfterChange(e, t) {
        for (var r = [], n = 0; n < e.sel.ranges.length; n++) {
          var o = e.sel.ranges[n]
          r.push(
            new ve(adjustForChange(o.anchor, t), adjustForChange(o.head, t))
          )
        }
        return normalizeSelection(r, e.sel.primIndex)
      }
      function offsetPos(e, t, r) {
        return e.line == t.line
          ? Pos(r.line, e.ch - t.ch + r.ch)
          : Pos(r.line + (e.line - t.line), e.ch)
      }
      function loadMode(e) {
        ;(e.doc.mode = getMode(e.options, e.doc.modeOption)), resetModeState(e)
      }
      function resetModeState(e) {
        e.doc.iter(function(e) {
          e.stateAfter && (e.stateAfter = null), e.styles && (e.styles = null)
        }),
          (e.doc.modeFrontier = e.doc.highlightFrontier = e.doc.first),
          startWorker(e, 100),
          e.state.modeGen++,
          e.curOp && regChange(e)
      }
      function isWholeLineUpdate(e, t) {
        return (
          0 == t.from.ch &&
          0 == t.to.ch &&
          "" == lst(t.text) &&
          (!e.cm || e.cm.options.wholeLineUpdateBefore)
        )
      }
      function updateDoc(e, t, r, n) {
        function spansFor(e) {
          return r ? r[e] : null
        }
        function update(e, r, o) {
          !(function updateLine(e, t, r, n) {
            ;(e.text = t),
              e.stateAfter && (e.stateAfter = null),
              e.styles && (e.styles = null),
              null != e.order && (e.order = null),
              detachMarkedSpans(e),
              attachMarkedSpans(e, r)
            var o = n ? n(e) : 1
            o != e.height && updateLineHeight(e, o)
          })(e, r, o, n),
            signalLater(e, "change", e, t)
        }
        function linesFor(e, t) {
          for (var r = [], o = e; o < t; ++o)
            r.push(new re(s[o], spansFor(o), n))
          return r
        }
        var o = t.from,
          i = t.to,
          s = t.text,
          a = getLine(e, o.line),
          l = getLine(e, i.line),
          c = lst(s),
          u = spansFor(s.length - 1),
          d = i.line - o.line
        if (t.full)
          e.insert(0, linesFor(0, s.length)),
            e.remove(s.length, e.size - s.length)
        else if (isWholeLineUpdate(e, t)) {
          var p = linesFor(0, s.length - 1)
          update(l, l.text, u),
            d && e.remove(o.line, d),
            p.length && e.insert(o.line, p)
        } else if (a == l)
          if (1 == s.length)
            update(a, a.text.slice(0, o.ch) + c + a.text.slice(i.ch), u)
          else {
            var h = linesFor(1, s.length - 1)
            h.push(new re(c + a.text.slice(i.ch), u, n)),
              update(a, a.text.slice(0, o.ch) + s[0], spansFor(0)),
              e.insert(o.line + 1, h)
          }
        else if (1 == s.length)
          update(
            a,
            a.text.slice(0, o.ch) + s[0] + l.text.slice(i.ch),
            spansFor(0)
          ),
            e.remove(o.line + 1, d)
        else {
          update(a, a.text.slice(0, o.ch) + s[0], spansFor(0)),
            update(l, c + l.text.slice(i.ch), u)
          var f = linesFor(1, s.length - 1)
          d > 1 && e.remove(o.line + 1, d - 1), e.insert(o.line + 1, f)
        }
        signalLater(e, "change", e, t)
      }
      function linkedDocs(e, t, r) {
        !(function propagate(e, n, o) {
          if (e.linked)
            for (var i = 0; i < e.linked.length; ++i) {
              var s = e.linked[i]
              if (s.doc != n) {
                var a = o && s.sharedHist
                ;(r && !a) || (t(s.doc, a), propagate(s.doc, e, a))
              }
            }
        })(e, null, !0)
      }
      function attachDoc(e, t) {
        if (t.cm) throw new Error("This document is already in use.")
        ;(e.doc = t),
          (t.cm = e),
          estimateLineHeights(e),
          loadMode(e),
          setDirectionClass(e),
          e.options.lineWrapping || findMaxLine(e),
          (e.options.mode = t.modeOption),
          regChange(e)
      }
      function setDirectionClass(e) {
        ;("rtl" == e.doc.direction ? addClass : k)(
          e.display.lineDiv,
          "CodeMirror-rtl"
        )
      }
      function History(e) {
        ;(this.done = []),
          (this.undone = []),
          (this.undoDepth = 1 / 0),
          (this.lastModTime = this.lastSelTime = 0),
          (this.lastOp = this.lastSelOp = null),
          (this.lastOrigin = this.lastSelOrigin = null),
          (this.generation = this.maxGeneration = e || 1)
      }
      function historyChangeFromChange(e, t) {
        var r = {
          from: copyPos(t.from),
          to: changeEnd(t),
          text: getBetween(e, t.from, t.to),
        }
        return (
          attachLocalSpans(e, r, t.from.line, t.to.line + 1),
          linkedDocs(
            e,
            function(e) {
              return attachLocalSpans(e, r, t.from.line, t.to.line + 1)
            },
            !0
          ),
          r
        )
      }
      function clearSelectionEvents(e) {
        for (; e.length; ) {
          if (!lst(e).ranges) break
          e.pop()
        }
      }
      function addChangeToHistory(e, t, r, n) {
        var o = e.history
        o.undone.length = 0
        var i,
          s,
          a = +new Date()
        if (
          (o.lastOp == n ||
            (o.lastOrigin == t.origin &&
              t.origin &&
              (("+" == t.origin.charAt(0) &&
                e.cm &&
                o.lastModTime > a - e.cm.options.historyEventDelay) ||
                "*" == t.origin.charAt(0)))) &&
          (i = (function lastChangeEvent(e, t) {
            return t
              ? (clearSelectionEvents(e.done), lst(e.done))
              : e.done.length && !lst(e.done).ranges
                ? lst(e.done)
                : e.done.length > 1 && !e.done[e.done.length - 2].ranges
                  ? (e.done.pop(), lst(e.done))
                  : void 0
          })(o, o.lastOp == n))
        )
          (s = lst(i.changes)),
            0 == cmp(t.from, t.to) && 0 == cmp(t.from, s.to)
              ? (s.to = changeEnd(t))
              : i.changes.push(historyChangeFromChange(e, t))
        else {
          var l = lst(o.done)
          for (
            (l && l.ranges) || pushSelectionToHistory(e.sel, o.done),
              i = {
                changes: [historyChangeFromChange(e, t)],
                generation: o.generation,
              },
              o.done.push(i);
            o.done.length > o.undoDepth;

          )
            o.done.shift(), o.done[0].ranges || o.done.shift()
        }
        o.done.push(r),
          (o.generation = ++o.maxGeneration),
          (o.lastModTime = o.lastSelTime = a),
          (o.lastOp = o.lastSelOp = n),
          (o.lastOrigin = o.lastSelOrigin = t.origin),
          s || signal(e, "historyAdded")
      }
      function addSelectionToHistory(e, t, r, n) {
        var o = e.history,
          i = n && n.origin
        r == o.lastSelOp ||
        (i &&
          o.lastSelOrigin == i &&
          ((o.lastModTime == o.lastSelTime && o.lastOrigin == i) ||
            (function selectionEventCanBeMerged(e, t, r, n) {
              var o = t.charAt(0)
              return (
                "*" == o ||
                ("+" == o &&
                  r.ranges.length == n.ranges.length &&
                  r.somethingSelected() == n.somethingSelected() &&
                  new Date() - e.history.lastSelTime <=
                    (e.cm ? e.cm.options.historyEventDelay : 500))
              )
            })(e, i, lst(o.done), t)))
          ? (o.done[o.done.length - 1] = t)
          : pushSelectionToHistory(t, o.done),
          (o.lastSelTime = +new Date()),
          (o.lastSelOrigin = i),
          (o.lastSelOp = r),
          n && !1 !== n.clearRedo && clearSelectionEvents(o.undone)
      }
      function pushSelectionToHistory(e, t) {
        var r = lst(t)
        ;(r && r.ranges && r.equals(e)) || t.push(e)
      }
      function attachLocalSpans(e, t, r, n) {
        var o = t["spans_" + e.id],
          i = 0
        e.iter(Math.max(e.first, r), Math.min(e.first + e.size, n), function(
          r
        ) {
          r.markedSpans &&
            ((o || (o = t["spans_" + e.id] = {}))[i] = r.markedSpans),
            ++i
        })
      }
      function removeClearedSpans(e) {
        if (!e) return null
        for (var t, r = 0; r < e.length; ++r)
          e[r].marker.explicitlyCleared
            ? t || (t = e.slice(0, r))
            : t && t.push(e[r])
        return t ? (t.length ? t : null) : e
      }
      function mergeOldSpans(e, t) {
        var r = (function getOldSpans(e, t) {
            var r = t["spans_" + e.id]
            if (!r) return null
            for (var n = [], o = 0; o < t.text.length; ++o)
              n.push(removeClearedSpans(r[o]))
            return n
          })(e, t),
          n = stretchSpansOverChange(e, t)
        if (!r) return n
        if (!n) return r
        for (var o = 0; o < r.length; ++o) {
          var i = r[o],
            s = n[o]
          if (i && s)
            e: for (var a = 0; a < s.length; ++a) {
              for (var l = s[a], c = 0; c < i.length; ++c)
                if (i[c].marker == l.marker) continue e
              i.push(l)
            }
          else s && (r[o] = s)
        }
        return r
      }
      function copyHistoryArray(e, t, r) {
        for (var n = [], o = 0; o < e.length; ++o) {
          var i = e[o]
          if (i.ranges) n.push(r ? me.prototype.deepCopy.call(i) : i)
          else {
            var s = i.changes,
              a = []
            n.push({ changes: a })
            for (var l = 0; l < s.length; ++l) {
              var c = s[l],
                u = void 0
              if ((a.push({ from: c.from, to: c.to, text: c.text }), t))
                for (var d in c)
                  (u = d.match(/^spans_(\d+)$/)) &&
                    indexOf(t, Number(u[1])) > -1 &&
                    ((lst(a)[d] = c[d]), delete c[d])
            }
          }
        }
        return n
      }
      function extendRange(e, t, r, n) {
        if (n) {
          var o = e.anchor
          if (r) {
            var i = cmp(t, o) < 0
            i != cmp(r, o) < 0
              ? ((o = t), (t = r))
              : i != cmp(t, r) < 0 && (t = r)
          }
          return new ve(o, t)
        }
        return new ve(r || t, t)
      }
      function extendSelection(e, t, r, n, o) {
        null == o && (o = e.cm && (e.cm.display.shift || e.extend)),
          setSelection(e, new me([extendRange(e.sel.primary(), t, r, o)], 0), n)
      }
      function extendSelections(e, t, r) {
        for (
          var n = [], o = e.cm && (e.cm.display.shift || e.extend), i = 0;
          i < e.sel.ranges.length;
          i++
        )
          n[i] = extendRange(e.sel.ranges[i], t[i], null, o)
        setSelection(e, normalizeSelection(n, e.sel.primIndex), r)
      }
      function replaceOneSelection(e, t, r, n) {
        var o = e.sel.ranges.slice(0)
        ;(o[t] = r), setSelection(e, normalizeSelection(o, e.sel.primIndex), n)
      }
      function setSimpleSelection(e, t, r, n) {
        setSelection(e, simpleSelection(t, r), n)
      }
      function setSelectionReplaceHistory(e, t, r) {
        var n = e.history.done,
          o = lst(n)
        o && o.ranges
          ? ((n[n.length - 1] = t), setSelectionNoUndo(e, t, r))
          : setSelection(e, t, r)
      }
      function setSelection(e, t, r) {
        setSelectionNoUndo(e, t, r),
          addSelectionToHistory(e, e.sel, e.cm ? e.cm.curOp.id : NaN, r)
      }
      function setSelectionNoUndo(e, t, r) {
        ;(hasHandler(e, "beforeSelectionChange") ||
          (e.cm && hasHandler(e.cm, "beforeSelectionChange"))) &&
          (t = (function filterSelectionChange(e, t, r) {
            var n = {
              ranges: t.ranges,
              update: function(t) {
                this.ranges = []
                for (var r = 0; r < t.length; r++)
                  this.ranges[r] = new ve(
                    clipPos(e, t[r].anchor),
                    clipPos(e, t[r].head)
                  )
              },
              origin: r && r.origin,
            }
            return (
              signal(e, "beforeSelectionChange", e, n),
              e.cm && signal(e.cm, "beforeSelectionChange", e.cm, n),
              n.ranges != t.ranges
                ? normalizeSelection(n.ranges, n.ranges.length - 1)
                : t
            )
          })(e, t, r))
        setSelectionInner(
          e,
          skipAtomicInSelection(
            e,
            t,
            (r && r.bias) ||
              (cmp(t.primary().head, e.sel.primary().head) < 0 ? -1 : 1),
            !0
          )
        ),
          (r && !1 === r.scroll) || !e.cm || ensureCursorVisible(e.cm)
      }
      function setSelectionInner(e, t) {
        t.equals(e.sel) ||
          ((e.sel = t),
          e.cm &&
            ((e.cm.curOp.updateInput = e.cm.curOp.selectionChanged = !0),
            signalCursorActivity(e.cm)),
          signalLater(e, "cursorActivity", e))
      }
      function reCheckSelection(e) {
        setSelectionInner(e, skipAtomicInSelection(e, e.sel, null, !1))
      }
      function skipAtomicInSelection(e, t, r, n) {
        for (var o, i = 0; i < t.ranges.length; i++) {
          var s = t.ranges[i],
            a = t.ranges.length == e.sel.ranges.length && e.sel.ranges[i],
            l = skipAtomic(e, s.anchor, a && a.anchor, r, n),
            c = skipAtomic(e, s.head, a && a.head, r, n)
          ;(o || l != s.anchor || c != s.head) &&
            (o || (o = t.ranges.slice(0, i)), (o[i] = new ve(l, c)))
        }
        return o ? normalizeSelection(o, t.primIndex) : t
      }
      function skipAtomicInner(e, t, r, n, o) {
        var i = getLine(e, t.line)
        if (i.markedSpans)
          for (var s = 0; s < i.markedSpans.length; ++s) {
            var a = i.markedSpans[s],
              l = a.marker
            if (
              (null == a.from ||
                (l.inclusiveLeft ? a.from <= t.ch : a.from < t.ch)) &&
              (null == a.to || (l.inclusiveRight ? a.to >= t.ch : a.to > t.ch))
            ) {
              if (o && (signal(l, "beforeCursorEnter"), l.explicitlyCleared)) {
                if (i.markedSpans) {
                  --s
                  continue
                }
                break
              }
              if (!l.atomic) continue
              if (r) {
                var c = l.find(n < 0 ? 1 : -1),
                  u = void 0
                if (
                  ((n < 0 ? l.inclusiveRight : l.inclusiveLeft) &&
                    (c = movePos(e, c, -n, c && c.line == t.line ? i : null)),
                  c &&
                    c.line == t.line &&
                    (u = cmp(c, r)) &&
                    (n < 0 ? u < 0 : u > 0))
                )
                  return skipAtomicInner(e, c, t, n, o)
              }
              var d = l.find(n < 0 ? -1 : 1)
              return (
                (n < 0 ? l.inclusiveLeft : l.inclusiveRight) &&
                  (d = movePos(e, d, n, d.line == t.line ? i : null)),
                d ? skipAtomicInner(e, d, t, n, o) : null
              )
            }
          }
        return t
      }
      function skipAtomic(e, t, r, n, o) {
        var i = n || 1,
          s =
            skipAtomicInner(e, t, r, i, o) ||
            (!o && skipAtomicInner(e, t, r, i, !0)) ||
            skipAtomicInner(e, t, r, -i, o) ||
            (!o && skipAtomicInner(e, t, r, -i, !0))
        return s || ((e.cantEdit = !0), Pos(e.first, 0))
      }
      function movePos(e, t, r, n) {
        return r < 0 && 0 == t.ch
          ? t.line > e.first ? clipPos(e, Pos(t.line - 1)) : null
          : r > 0 && t.ch == (n || getLine(e, t.line)).text.length
            ? t.line < e.first + e.size - 1 ? Pos(t.line + 1, 0) : null
            : new Pos(t.line, t.ch + r)
      }
      function selectAll(e) {
        e.setSelection(Pos(e.firstLine(), 0), Pos(e.lastLine()), A)
      }
      function filterChange(e, t, r) {
        var n = {
          canceled: !1,
          from: t.from,
          to: t.to,
          text: t.text,
          origin: t.origin,
          cancel: function() {
            return (n.canceled = !0)
          },
        }
        return (
          r &&
            (n.update = function(t, r, o, i) {
              t && (n.from = clipPos(e, t)),
                r && (n.to = clipPos(e, r)),
                o && (n.text = o),
                void 0 !== i && (n.origin = i)
            }),
          signal(e, "beforeChange", e, n),
          e.cm && signal(e.cm, "beforeChange", e.cm, n),
          n.canceled
            ? null
            : { from: n.from, to: n.to, text: n.text, origin: n.origin }
        )
      }
      function makeChange(e, t, r) {
        if (e.cm) {
          if (!e.cm.curOp) return operation(e.cm, makeChange)(e, t, r)
          if (e.cm.state.suppressEdits) return
        }
        if (
          !(
            hasHandler(e, "beforeChange") ||
            (e.cm && hasHandler(e.cm, "beforeChange"))
          ) ||
          (t = filterChange(e, t, !0))
        ) {
          var n =
            I &&
            !r &&
            (function removeReadOnlyRanges(e, t, r) {
              var n = null
              if (
                (e.iter(t.line, r.line + 1, function(e) {
                  if (e.markedSpans)
                    for (var t = 0; t < e.markedSpans.length; ++t) {
                      var r = e.markedSpans[t].marker
                      !r.readOnly ||
                        (n && -1 != indexOf(n, r)) ||
                        (n || (n = [])).push(r)
                    }
                }),
                !n)
              )
                return null
              for (var o = [{ from: t, to: r }], i = 0; i < n.length; ++i)
                for (var s = n[i], a = s.find(0), l = 0; l < o.length; ++l) {
                  var c = o[l]
                  if (!(cmp(c.to, a.from) < 0 || cmp(c.from, a.to) > 0)) {
                    var u = [l, 1],
                      d = cmp(c.from, a.from),
                      p = cmp(c.to, a.to)
                    ;(d < 0 || (!s.inclusiveLeft && !d)) &&
                      u.push({ from: c.from, to: a.from }),
                      (p > 0 || (!s.inclusiveRight && !p)) &&
                        u.push({ from: a.to, to: c.to }),
                      o.splice.apply(o, u),
                      (l += u.length - 3)
                  }
                }
              return o
            })(e, t.from, t.to)
          if (n)
            for (var o = n.length - 1; o >= 0; --o)
              makeChangeInner(e, {
                from: n[o].from,
                to: n[o].to,
                text: o ? [""] : t.text,
                origin: t.origin,
              })
          else makeChangeInner(e, t)
        }
      }
      function makeChangeInner(e, t) {
        if (1 != t.text.length || "" != t.text[0] || 0 != cmp(t.from, t.to)) {
          var r = computeSelAfterChange(e, t)
          addChangeToHistory(e, t, r, e.cm ? e.cm.curOp.id : NaN),
            makeChangeSingleDoc(e, t, r, stretchSpansOverChange(e, t))
          var n = []
          linkedDocs(e, function(e, r) {
            r ||
              -1 != indexOf(n, e.history) ||
              (rebaseHist(e.history, t), n.push(e.history)),
              makeChangeSingleDoc(e, t, null, stretchSpansOverChange(e, t))
          })
        }
      }
      function makeChangeFromHistory(e, t, r) {
        if (!e.cm || !e.cm.state.suppressEdits || r) {
          for (
            var n,
              o = e.history,
              i = e.sel,
              s = "undo" == t ? o.done : o.undone,
              a = "undo" == t ? o.undone : o.done,
              l = 0;
            l < s.length &&
            ((n = s[l]), r ? !n.ranges || n.equals(e.sel) : n.ranges);
            l++
          );
          if (l != s.length) {
            for (
              o.lastOrigin = o.lastSelOrigin = null;
              (n = s.pop()).ranges;

            ) {
              if ((pushSelectionToHistory(n, a), r && !n.equals(e.sel)))
                return void setSelection(e, n, { clearRedo: !1 })
              i = n
            }
            var c = []
            pushSelectionToHistory(i, a),
              a.push({ changes: c, generation: o.generation }),
              (o.generation = n.generation || ++o.maxGeneration)
            for (
              var u =
                  hasHandler(e, "beforeChange") ||
                  (e.cm && hasHandler(e.cm, "beforeChange")),
                d = function(r) {
                  var o = n.changes[r]
                  if (((o.origin = t), u && !filterChange(e, o, !1)))
                    return (s.length = 0), {}
                  c.push(historyChangeFromChange(e, o))
                  var i = r ? computeSelAfterChange(e, o) : lst(s)
                  makeChangeSingleDoc(e, o, i, mergeOldSpans(e, o)),
                    !r &&
                      e.cm &&
                      e.cm.scrollIntoView({ from: o.from, to: changeEnd(o) })
                  var a = []
                  linkedDocs(e, function(e, t) {
                    t ||
                      -1 != indexOf(a, e.history) ||
                      (rebaseHist(e.history, o), a.push(e.history)),
                      makeChangeSingleDoc(e, o, null, mergeOldSpans(e, o))
                  })
                },
                p = n.changes.length - 1;
              p >= 0;
              --p
            ) {
              var h = d(p)
              if (h) return h.v
            }
          }
        }
      }
      function shiftDoc(e, t) {
        if (
          0 != t &&
          ((e.first += t),
          (e.sel = new me(
            map(e.sel.ranges, function(e) {
              return new ve(
                Pos(e.anchor.line + t, e.anchor.ch),
                Pos(e.head.line + t, e.head.ch)
              )
            }),
            e.sel.primIndex
          )),
          e.cm)
        ) {
          regChange(e.cm, e.first, e.first - t, t)
          for (var r = e.cm.display, n = r.viewFrom; n < r.viewTo; n++)
            regLineChange(e.cm, n, "gutter")
        }
      }
      function makeChangeSingleDoc(e, t, r, n) {
        if (e.cm && !e.cm.curOp)
          return operation(e.cm, makeChangeSingleDoc)(e, t, r, n)
        if (t.to.line < e.first)
          shiftDoc(e, t.text.length - 1 - (t.to.line - t.from.line))
        else if (!(t.from.line > e.lastLine())) {
          if (t.from.line < e.first) {
            var o = t.text.length - 1 - (e.first - t.from.line)
            shiftDoc(e, o),
              (t = {
                from: Pos(e.first, 0),
                to: Pos(t.to.line + o, t.to.ch),
                text: [lst(t.text)],
                origin: t.origin,
              })
          }
          var i = e.lastLine()
          t.to.line > i &&
            (t = {
              from: t.from,
              to: Pos(i, getLine(e, i).text.length),
              text: [t.text[0]],
              origin: t.origin,
            }),
            (t.removed = getBetween(e, t.from, t.to)),
            r || (r = computeSelAfterChange(e, t)),
            e.cm
              ? (function makeChangeSingleDocInEditor(e, t, r) {
                  var n = e.doc,
                    o = e.display,
                    i = t.from,
                    s = t.to,
                    a = !1,
                    l = i.line
                  e.options.lineWrapping ||
                    ((l = lineNo(visualLine(getLine(n, i.line)))),
                    n.iter(l, s.line + 1, function(e) {
                      if (e == o.maxLine) return (a = !0), !0
                    }))
                  n.sel.contains(t.from, t.to) > -1 && signalCursorActivity(e)
                  updateDoc(n, t, r, estimateHeight(e)),
                    e.options.lineWrapping ||
                      (n.iter(l, i.line + t.text.length, function(e) {
                        var t = lineLength(e)
                        t > o.maxLineLength &&
                          ((o.maxLine = e),
                          (o.maxLineLength = t),
                          (o.maxLineChanged = !0),
                          (a = !1))
                      }),
                      a && (e.curOp.updateMaxLine = !0))
                  ;(function retreatFrontier(e, t) {
                    if (
                      ((e.modeFrontier = Math.min(e.modeFrontier, t)),
                      !(e.highlightFrontier < t - 10))
                    ) {
                      for (var r = e.first, n = t - 1; n > r; n--) {
                        var o = getLine(e, n).stateAfter
                        if (o && (!(o instanceof J) || n + o.lookAhead < t)) {
                          r = n + 1
                          break
                        }
                      }
                      e.highlightFrontier = Math.min(e.highlightFrontier, r)
                    }
                  })(n, i.line),
                    startWorker(e, 400)
                  var c = t.text.length - (s.line - i.line) - 1
                  t.full
                    ? regChange(e)
                    : i.line != s.line ||
                      1 != t.text.length ||
                      isWholeLineUpdate(e.doc, t)
                      ? regChange(e, i.line, s.line + 1, c)
                      : regLineChange(e, i.line, "text")
                  var u = hasHandler(e, "changes"),
                    d = hasHandler(e, "change")
                  if (d || u) {
                    var p = {
                      from: i,
                      to: s,
                      text: t.text,
                      removed: t.removed,
                      origin: t.origin,
                    }
                    d && signalLater(e, "change", e, p),
                      u &&
                        (e.curOp.changeObjs || (e.curOp.changeObjs = [])).push(
                          p
                        )
                  }
                  e.display.selForContextMenu = null
                })(e.cm, t, n)
              : updateDoc(e, t, n),
            setSelectionNoUndo(e, r, A)
        }
      }
      function replaceRange(e, t, r, n, o) {
        if ((n || (n = r), cmp(n, r) < 0)) {
          var i
          ;(r = (i = [n, r])[0]), (n = i[1])
        }
        "string" == typeof t && (t = e.splitLines(t)),
          makeChange(e, { from: r, to: n, text: t, origin: o })
      }
      function rebaseHistSelSingle(e, t, r, n) {
        r < e.line ? (e.line += n) : t < e.line && ((e.line = t), (e.ch = 0))
      }
      function rebaseHistArray(e, t, r, n) {
        for (var o = 0; o < e.length; ++o) {
          var i = e[o],
            s = !0
          if (i.ranges) {
            i.copied || ((i = e[o] = i.deepCopy()).copied = !0)
            for (var a = 0; a < i.ranges.length; a++)
              rebaseHistSelSingle(i.ranges[a].anchor, t, r, n),
                rebaseHistSelSingle(i.ranges[a].head, t, r, n)
          } else {
            for (var l = 0; l < i.changes.length; ++l) {
              var c = i.changes[l]
              if (r < c.from.line)
                (c.from = Pos(c.from.line + n, c.from.ch)),
                  (c.to = Pos(c.to.line + n, c.to.ch))
              else if (t <= c.to.line) {
                s = !1
                break
              }
            }
            s || (e.splice(0, o + 1), (o = 0))
          }
        }
      }
      function rebaseHist(e, t) {
        var r = t.from.line,
          n = t.to.line,
          o = t.text.length - (n - r) - 1
        rebaseHistArray(e.done, r, n, o), rebaseHistArray(e.undone, r, n, o)
      }
      function changeLine(e, t, r, n) {
        var o = t,
          i = t
        return (
          "number" == typeof t
            ? (i = getLine(e, clipLine(e, t)))
            : (o = lineNo(t)),
          null == o ? null : (n(i, o) && e.cm && regLineChange(e.cm, o, r), i)
        )
      }
      function LeafChunk(e) {
        ;(this.lines = e), (this.parent = null)
        for (var t = 0, r = 0; r < e.length; ++r)
          (e[r].parent = this), (t += e[r].height)
        this.height = t
      }
      LeafChunk.prototype = {
        chunkSize: function chunkSize() {
          return this.lines.length
        },
        removeInner: function removeInner(e, t) {
          for (var r = e, n = e + t; r < n; ++r) {
            var o = this.lines[r]
            ;(this.height -= o.height),
              ((i = o).parent = null),
              detachMarkedSpans(i),
              signalLater(o, "delete")
          }
          var i
          this.lines.splice(e, t)
        },
        collapse: function collapse(e) {
          e.push.apply(e, this.lines)
        },
        insertInner: function insertInner(e, t, r) {
          ;(this.height += r),
            (this.lines = this.lines
              .slice(0, e)
              .concat(t)
              .concat(this.lines.slice(e)))
          for (var n = 0; n < t.length; ++n) t[n].parent = this
        },
        iterN: function iterN(e, t, r) {
          for (var n = e + t; e < n; ++e) if (r(this.lines[e])) return !0
        },
      }
      function BranchChunk(e) {
        this.children = e
        for (var t = 0, r = 0, n = 0; n < e.length; ++n) {
          var o = e[n]
          ;(t += o.chunkSize()), (r += o.height), (o.parent = this)
        }
        ;(this.size = t), (this.height = r), (this.parent = null)
      }
      BranchChunk.prototype = {
        chunkSize: function chunkSize() {
          return this.size
        },
        removeInner: function removeInner(e, t) {
          this.size -= t
          for (var r = 0; r < this.children.length; ++r) {
            var n = this.children[r],
              o = n.chunkSize()
            if (e < o) {
              var i = Math.min(t, o - e),
                s = n.height
              if (
                (n.removeInner(e, i),
                (this.height -= s - n.height),
                o == i && (this.children.splice(r--, 1), (n.parent = null)),
                0 == (t -= i))
              )
                break
              e = 0
            } else e -= o
          }
          if (
            this.size - t < 25 &&
            (this.children.length > 1 ||
              !(this.children[0] instanceof LeafChunk))
          ) {
            var a = []
            this.collapse(a),
              (this.children = [new LeafChunk(a)]),
              (this.children[0].parent = this)
          }
        },
        collapse: function collapse(e) {
          for (var t = 0; t < this.children.length; ++t)
            this.children[t].collapse(e)
        },
        insertInner: function insertInner(e, t, r) {
          ;(this.size += t.length), (this.height += r)
          for (var n = 0; n < this.children.length; ++n) {
            var o = this.children[n],
              i = o.chunkSize()
            if (e <= i) {
              if ((o.insertInner(e, t, r), o.lines && o.lines.length > 50)) {
                for (
                  var s = o.lines.length % 25 + 25, a = s;
                  a < o.lines.length;

                ) {
                  var l = new LeafChunk(o.lines.slice(a, (a += 25)))
                  ;(o.height -= l.height),
                    this.children.splice(++n, 0, l),
                    (l.parent = this)
                }
                ;(o.lines = o.lines.slice(0, s)), this.maybeSpill()
              }
              break
            }
            e -= i
          }
        },
        maybeSpill: function maybeSpill() {
          if (!(this.children.length <= 10)) {
            var e = this
            do {
              var t = new BranchChunk(
                e.children.splice(e.children.length - 5, 5)
              )
              if (e.parent) {
                ;(e.size -= t.size), (e.height -= t.height)
                var r = indexOf(e.parent.children, e)
                e.parent.children.splice(r + 1, 0, t)
              } else {
                var n = new BranchChunk(e.children)
                ;(n.parent = e), (e.children = [n, t]), (e = n)
              }
              t.parent = e.parent
            } while (e.children.length > 10)
            e.parent.maybeSpill()
          }
        },
        iterN: function iterN(e, t, r) {
          for (var n = 0; n < this.children.length; ++n) {
            var o = this.children[n],
              i = o.chunkSize()
            if (e < i) {
              var s = Math.min(t, i - e)
              if (o.iterN(e, s, r)) return !0
              if (0 == (t -= s)) break
              e = 0
            } else e -= i
          }
        },
      }
      var ye = function(e, t, r) {
        if (r) for (var n in r) r.hasOwnProperty(n) && (this[n] = r[n])
        ;(this.doc = e), (this.node = t)
      }
      ;(ye.prototype.clear = function() {
        var e = this.doc.cm,
          t = this.line.widgets,
          r = this.line,
          n = lineNo(r)
        if (null != n && t) {
          for (var o = 0; o < t.length; ++o) t[o] == this && t.splice(o--, 1)
          t.length || (r.widgets = null)
          var i = widgetHeight(this)
          updateLineHeight(r, Math.max(0, r.height - i)),
            e &&
              (runInOp(e, function() {
                adjustScrollWhenAboveVisible(e, r, -i),
                  regLineChange(e, n, "widget")
              }),
              signalLater(e, "lineWidgetCleared", e, this, n))
        }
      }),
        (ye.prototype.changed = function() {
          var e = this,
            t = this.height,
            r = this.doc.cm,
            n = this.line
          this.height = null
          var o = widgetHeight(this) - t
          o &&
            (updateLineHeight(n, n.height + o),
            r &&
              runInOp(r, function() {
                ;(r.curOp.forceUpdate = !0),
                  adjustScrollWhenAboveVisible(r, n, o),
                  signalLater(r, "lineWidgetChanged", r, e, lineNo(n))
              }))
        }),
        eventMixin(ye)
      function adjustScrollWhenAboveVisible(e, t, r) {
        heightAtLine(t) < ((e.curOp && e.curOp.scrollTop) || e.doc.scrollTop) &&
          addToScrollTop(e, r)
      }
      var be = 0,
        Ce = function(e, t) {
          ;(this.lines = []), (this.type = t), (this.doc = e), (this.id = ++be)
        }
      ;(Ce.prototype.clear = function() {
        if (!this.explicitlyCleared) {
          var e = this.doc.cm,
            t = e && !e.curOp
          if ((t && startOperation(e), hasHandler(this, "clear"))) {
            var r = this.find()
            r && signalLater(this, "clear", r.from, r.to)
          }
          for (var n = null, o = null, i = 0; i < this.lines.length; ++i) {
            var s = this.lines[i],
              a = getMarkedSpanFor(s.markedSpans, this)
            e && !this.collapsed
              ? regLineChange(e, lineNo(s), "text")
              : e &&
                (null != a.to && (o = lineNo(s)),
                null != a.from && (n = lineNo(s))),
              (s.markedSpans = removeMarkedSpan(s.markedSpans, a)),
              null == a.from &&
                this.collapsed &&
                !lineIsHidden(this.doc, s) &&
                e &&
                updateLineHeight(s, textHeight(e.display))
          }
          if (e && this.collapsed && !e.options.lineWrapping)
            for (var l = 0; l < this.lines.length; ++l) {
              var c = visualLine(this.lines[l]),
                u = lineLength(c)
              u > e.display.maxLineLength &&
                ((e.display.maxLine = c),
                (e.display.maxLineLength = u),
                (e.display.maxLineChanged = !0))
            }
          null != n && e && this.collapsed && regChange(e, n, o + 1),
            (this.lines.length = 0),
            (this.explicitlyCleared = !0),
            this.atomic &&
              this.doc.cantEdit &&
              ((this.doc.cantEdit = !1), e && reCheckSelection(e.doc)),
            e && signalLater(e, "markerCleared", e, this, n, o),
            t && endOperation(e),
            this.parent && this.parent.clear()
        }
      }),
        (Ce.prototype.find = function(e, t) {
          null == e && "bookmark" == this.type && (e = 1)
          for (var r, n, o = 0; o < this.lines.length; ++o) {
            var i = this.lines[o],
              s = getMarkedSpanFor(i.markedSpans, this)
            if (
              null != s.from &&
              ((r = Pos(t ? i : lineNo(i), s.from)), -1 == e)
            )
              return r
            if (null != s.to && ((n = Pos(t ? i : lineNo(i), s.to)), 1 == e))
              return n
          }
          return r && { from: r, to: n }
        }),
        (Ce.prototype.changed = function() {
          var e = this,
            t = this.find(-1, !0),
            r = this,
            n = this.doc.cm
          t &&
            n &&
            runInOp(n, function() {
              var o = t.line,
                i = lineNo(t.line),
                s = findViewForLine(n, i)
              if (
                (s &&
                  (clearLineMeasurementCacheFor(s),
                  (n.curOp.selectionChanged = n.curOp.forceUpdate = !0)),
                (n.curOp.updateMaxLine = !0),
                !lineIsHidden(r.doc, o) && null != r.height)
              ) {
                var a = r.height
                r.height = null
                var l = widgetHeight(r) - a
                l && updateLineHeight(o, o.height + l)
              }
              signalLater(n, "markerChanged", n, e)
            })
        }),
        (Ce.prototype.attachLine = function(e) {
          if (!this.lines.length && this.doc.cm) {
            var t = this.doc.cm.curOp
            ;(t.maybeHiddenMarkers &&
              -1 != indexOf(t.maybeHiddenMarkers, this)) ||
              (t.maybeUnhiddenMarkers || (t.maybeUnhiddenMarkers = [])).push(
                this
              )
          }
          this.lines.push(e)
        }),
        (Ce.prototype.detachLine = function(e) {
          if (
            (this.lines.splice(indexOf(this.lines, e), 1),
            !this.lines.length && this.doc.cm)
          ) {
            var t = this.doc.cm.curOp
            ;(t.maybeHiddenMarkers || (t.maybeHiddenMarkers = [])).push(this)
          }
        }),
        eventMixin(Ce)
      function markText(e, t, r, n, o) {
        if (n && n.shared)
          return (function markTextShared(e, t, r, n, o) {
            ;(n = copyObj(n)).shared = !1
            var i = [markText(e, t, r, n, o)],
              s = i[0],
              a = n.widgetNode
            return (
              linkedDocs(e, function(e) {
                a && (n.widgetNode = a.cloneNode(!0)),
                  i.push(markText(e, clipPos(e, t), clipPos(e, r), n, o))
                for (var l = 0; l < e.linked.length; ++l)
                  if (e.linked[l].isParent) return
                s = lst(i)
              }),
              new xe(i, s)
            )
          })(e, t, r, n, o)
        if (e.cm && !e.cm.curOp) return operation(e.cm, markText)(e, t, r, n, o)
        var i = new Ce(e, o),
          s = cmp(t, r)
        if (
          (n && copyObj(n, i, !1), s > 0 || (0 == s && !1 !== i.clearWhenEmpty))
        )
          return i
        if (
          (i.replacedWith &&
            ((i.collapsed = !0),
            (i.widgetNode = eltP(
              "span",
              [i.replacedWith],
              "CodeMirror-widget"
            )),
            n.handleMouseEvents ||
              i.widgetNode.setAttribute("cm-ignore-events", "true"),
            n.insertLeft && (i.widgetNode.insertLeft = !0)),
          i.collapsed)
        ) {
          if (
            conflictingCollapsedRange(e, t.line, t, r, i) ||
            (t.line != r.line && conflictingCollapsedRange(e, r.line, t, r, i))
          )
            throw new Error(
              "Inserting collapsed marker partially overlapping an existing one"
            )
          !(function seeCollapsedSpans() {
            F = !0
          })()
        }
        i.addToHistory &&
          addChangeToHistory(
            e,
            { from: t, to: r, origin: "markText" },
            e.sel,
            NaN
          )
        var a,
          l = t.line,
          c = e.cm
        if (
          (e.iter(l, r.line + 1, function(e) {
            c &&
              i.collapsed &&
              !c.options.lineWrapping &&
              visualLine(e) == c.display.maxLine &&
              (a = !0),
              i.collapsed && l != t.line && updateLineHeight(e, 0),
              (function addMarkedSpan(e, t) {
                ;(e.markedSpans = e.markedSpans
                  ? e.markedSpans.concat([t])
                  : [t]),
                  t.marker.attachLine(e)
              })(
                e,
                new MarkedSpan(
                  i,
                  l == t.line ? t.ch : null,
                  l == r.line ? r.ch : null
                )
              ),
              ++l
          }),
          i.collapsed &&
            e.iter(t.line, r.line + 1, function(t) {
              lineIsHidden(e, t) && updateLineHeight(t, 0)
            }),
          i.clearOnEnter &&
            j(i, "beforeCursorEnter", function() {
              return i.clear()
            }),
          i.readOnly &&
            (!(function seeReadOnlySpans() {
              I = !0
            })(),
            (e.history.done.length || e.history.undone.length) &&
              e.clearHistory()),
          i.collapsed && ((i.id = ++be), (i.atomic = !0)),
          c)
        ) {
          if ((a && (c.curOp.updateMaxLine = !0), i.collapsed))
            regChange(c, t.line, r.line + 1)
          else if (
            i.className ||
            i.title ||
            i.startStyle ||
            i.endStyle ||
            i.css
          )
            for (var u = t.line; u <= r.line; u++) regLineChange(c, u, "text")
          i.atomic && reCheckSelection(c.doc),
            signalLater(c, "markerAdded", c, i)
        }
        return i
      }
      var xe = function(e, t) {
        ;(this.markers = e), (this.primary = t)
        for (var r = 0; r < e.length; ++r) e[r].parent = this
      }
      ;(xe.prototype.clear = function() {
        if (!this.explicitlyCleared) {
          this.explicitlyCleared = !0
          for (var e = 0; e < this.markers.length; ++e) this.markers[e].clear()
          signalLater(this, "clear")
        }
      }),
        (xe.prototype.find = function(e, t) {
          return this.primary.find(e, t)
        }),
        eventMixin(xe)
      function findSharedMarkers(e) {
        return e.findMarks(
          Pos(e.first, 0),
          e.clipPos(Pos(e.lastLine())),
          function(e) {
            return e.parent
          }
        )
      }
      function detachSharedMarkers(e) {
        for (
          var t = function(t) {
              var r = e[t],
                n = [r.primary.doc]
              linkedDocs(r.primary.doc, function(e) {
                return n.push(e)
              })
              for (var o = 0; o < r.markers.length; o++) {
                var i = r.markers[o]
                ;-1 == indexOf(n, i.doc) &&
                  ((i.parent = null), r.markers.splice(o--, 1))
              }
            },
            r = 0;
          r < e.length;
          r++
        )
          t(r)
      }
      var we = 0,
        Se = function(e, t, r, n, o) {
          if (!(this instanceof Se)) return new Se(e, t, r, n, o)
          null == r && (r = 0),
            BranchChunk.call(this, [new LeafChunk([new re("", null)])]),
            (this.first = r),
            (this.scrollTop = this.scrollLeft = 0),
            (this.cantEdit = !1),
            (this.cleanGeneration = 1),
            (this.modeFrontier = this.highlightFrontier = r)
          var i = Pos(r, 0)
          ;(this.sel = simpleSelection(i)),
            (this.history = new History(null)),
            (this.id = ++we),
            (this.modeOption = t),
            (this.lineSep = n),
            (this.direction = "rtl" == o ? "rtl" : "ltr"),
            (this.extend = !1),
            "string" == typeof e && (e = this.splitLines(e)),
            updateDoc(this, { from: i, to: i, text: e }),
            setSelection(this, simpleSelection(i), A)
        }
      ;(Se.prototype = createObj(BranchChunk.prototype, {
        constructor: Se,
        iter: function(e, t, r) {
          r
            ? this.iterN(e - this.first, t - e, r)
            : this.iterN(this.first, this.first + this.size, e)
        },
        insert: function(e, t) {
          for (var r = 0, n = 0; n < t.length; ++n) r += t[n].height
          this.insertInner(e - this.first, t, r)
        },
        remove: function(e, t) {
          this.removeInner(e - this.first, t)
        },
        getValue: function(e) {
          var t = getLines(this, this.first, this.first + this.size)
          return !1 === e ? t : t.join(e || this.lineSeparator())
        },
        setValue: docMethodOp(function(e) {
          var t = Pos(this.first, 0),
            r = this.first + this.size - 1
          makeChange(
            this,
            {
              from: t,
              to: Pos(r, getLine(this, r).text.length),
              text: this.splitLines(e),
              origin: "setValue",
              full: !0,
            },
            !0
          ),
            this.cm && scrollToCoords(this.cm, 0, 0),
            setSelection(this, simpleSelection(t), A)
        }),
        replaceRange: function(e, t, r, n) {
          replaceRange(
            this,
            e,
            (t = clipPos(this, t)),
            (r = r ? clipPos(this, r) : t),
            n
          )
        },
        getRange: function(e, t, r) {
          var n = getBetween(this, clipPos(this, e), clipPos(this, t))
          return !1 === r ? n : n.join(r || this.lineSeparator())
        },
        getLine: function(e) {
          var t = this.getLineHandle(e)
          return t && t.text
        },
        getLineHandle: function(e) {
          if (isLine(this, e)) return getLine(this, e)
        },
        getLineNumber: function(e) {
          return lineNo(e)
        },
        getLineHandleVisualStart: function(e) {
          return "number" == typeof e && (e = getLine(this, e)), visualLine(e)
        },
        lineCount: function() {
          return this.size
        },
        firstLine: function() {
          return this.first
        },
        lastLine: function() {
          return this.first + this.size - 1
        },
        clipPos: function(e) {
          return clipPos(this, e)
        },
        getCursor: function(e) {
          var t = this.sel.primary()
          return null == e || "head" == e
            ? t.head
            : "anchor" == e
              ? t.anchor
              : "end" == e || "to" == e || !1 === e ? t.to() : t.from()
        },
        listSelections: function() {
          return this.sel.ranges
        },
        somethingSelected: function() {
          return this.sel.somethingSelected()
        },
        setCursor: docMethodOp(function(e, t, r) {
          setSimpleSelection(
            this,
            clipPos(this, "number" == typeof e ? Pos(e, t || 0) : e),
            null,
            r
          )
        }),
        setSelection: docMethodOp(function(e, t, r) {
          setSimpleSelection(this, clipPos(this, e), clipPos(this, t || e), r)
        }),
        extendSelection: docMethodOp(function(e, t, r) {
          extendSelection(this, clipPos(this, e), t && clipPos(this, t), r)
        }),
        extendSelections: docMethodOp(function(e, t) {
          extendSelections(this, clipPosArray(this, e), t)
        }),
        extendSelectionsBy: docMethodOp(function(e, t) {
          extendSelections(this, clipPosArray(this, map(this.sel.ranges, e)), t)
        }),
        setSelections: docMethodOp(function(e, t, r) {
          if (e.length) {
            for (var n = [], o = 0; o < e.length; o++)
              n[o] = new ve(
                clipPos(this, e[o].anchor),
                clipPos(this, e[o].head)
              )
            null == t && (t = Math.min(e.length - 1, this.sel.primIndex)),
              setSelection(this, normalizeSelection(n, t), r)
          }
        }),
        addSelection: docMethodOp(function(e, t, r) {
          var n = this.sel.ranges.slice(0)
          n.push(new ve(clipPos(this, e), clipPos(this, t || e))),
            setSelection(this, normalizeSelection(n, n.length - 1), r)
        }),
        getSelection: function(e) {
          for (var t, r = this.sel.ranges, n = 0; n < r.length; n++) {
            var o = getBetween(this, r[n].from(), r[n].to())
            t = t ? t.concat(o) : o
          }
          return !1 === e ? t : t.join(e || this.lineSeparator())
        },
        getSelections: function(e) {
          for (var t = [], r = this.sel.ranges, n = 0; n < r.length; n++) {
            var o = getBetween(this, r[n].from(), r[n].to())
            !1 !== e && (o = o.join(e || this.lineSeparator())), (t[n] = o)
          }
          return t
        },
        replaceSelection: function(e, t, r) {
          for (var n = [], o = 0; o < this.sel.ranges.length; o++) n[o] = e
          this.replaceSelections(n, t, r || "+input")
        },
        replaceSelections: docMethodOp(function(e, t, r) {
          for (var n = [], o = this.sel, i = 0; i < o.ranges.length; i++) {
            var s = o.ranges[i]
            n[i] = {
              from: s.from(),
              to: s.to(),
              text: this.splitLines(e[i]),
              origin: r,
            }
          }
          for (
            var a =
                t &&
                "end" != t &&
                (function computeReplacedSel(e, t, r) {
                  for (
                    var n = [], o = Pos(e.first, 0), i = o, s = 0;
                    s < t.length;
                    s++
                  ) {
                    var a = t[s],
                      l = offsetPos(a.from, o, i),
                      c = offsetPos(changeEnd(a), o, i)
                    if (((o = a.to), (i = c), "around" == r)) {
                      var u = e.sel.ranges[s],
                        d = cmp(u.head, u.anchor) < 0
                      n[s] = new ve(d ? c : l, d ? l : c)
                    } else n[s] = new ve(l, l)
                  }
                  return new me(n, e.sel.primIndex)
                })(this, n, t),
              l = n.length - 1;
            l >= 0;
            l--
          )
            makeChange(this, n[l])
          a
            ? setSelectionReplaceHistory(this, a)
            : this.cm && ensureCursorVisible(this.cm)
        }),
        undo: docMethodOp(function() {
          makeChangeFromHistory(this, "undo")
        }),
        redo: docMethodOp(function() {
          makeChangeFromHistory(this, "redo")
        }),
        undoSelection: docMethodOp(function() {
          makeChangeFromHistory(this, "undo", !0)
        }),
        redoSelection: docMethodOp(function() {
          makeChangeFromHistory(this, "redo", !0)
        }),
        setExtending: function(e) {
          this.extend = e
        },
        getExtending: function() {
          return this.extend
        },
        historySize: function() {
          for (
            var e = this.history, t = 0, r = 0, n = 0;
            n < e.done.length;
            n++
          )
            e.done[n].ranges || ++t
          for (var o = 0; o < e.undone.length; o++) e.undone[o].ranges || ++r
          return { undo: t, redo: r }
        },
        clearHistory: function() {
          this.history = new History(this.history.maxGeneration)
        },
        markClean: function() {
          this.cleanGeneration = this.changeGeneration(!0)
        },
        changeGeneration: function(e) {
          return (
            e &&
              (this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null),
            this.history.generation
          )
        },
        isClean: function(e) {
          return this.history.generation == (e || this.cleanGeneration)
        },
        getHistory: function() {
          return {
            done: copyHistoryArray(this.history.done),
            undone: copyHistoryArray(this.history.undone),
          }
        },
        setHistory: function(e) {
          var t = (this.history = new History(this.history.maxGeneration))
          ;(t.done = copyHistoryArray(e.done.slice(0), null, !0)),
            (t.undone = copyHistoryArray(e.undone.slice(0), null, !0))
        },
        setGutterMarker: docMethodOp(function(e, t, r) {
          return changeLine(this, e, "gutter", function(e) {
            var n = e.gutterMarkers || (e.gutterMarkers = {})
            return (n[t] = r), !r && isEmpty(n) && (e.gutterMarkers = null), !0
          })
        }),
        clearGutter: docMethodOp(function(e) {
          var t = this
          this.iter(function(r) {
            r.gutterMarkers &&
              r.gutterMarkers[e] &&
              changeLine(t, r, "gutter", function() {
                return (
                  (r.gutterMarkers[e] = null),
                  isEmpty(r.gutterMarkers) && (r.gutterMarkers = null),
                  !0
                )
              })
          })
        }),
        lineInfo: function(e) {
          var t
          if ("number" == typeof e) {
            if (!isLine(this, e)) return null
            if (((t = e), !(e = getLine(this, e)))) return null
          } else if (null == (t = lineNo(e))) return null
          return {
            line: t,
            handle: e,
            text: e.text,
            gutterMarkers: e.gutterMarkers,
            textClass: e.textClass,
            bgClass: e.bgClass,
            wrapClass: e.wrapClass,
            widgets: e.widgets,
          }
        },
        addLineClass: docMethodOp(function(e, t, r) {
          return changeLine(
            this,
            e,
            "gutter" == t ? "gutter" : "class",
            function(e) {
              var n =
                "text" == t
                  ? "textClass"
                  : "background" == t
                    ? "bgClass"
                    : "gutter" == t ? "gutterClass" : "wrapClass"
              if (e[n]) {
                if (classTest(r).test(e[n])) return !1
                e[n] += " " + r
              } else e[n] = r
              return !0
            }
          )
        }),
        removeLineClass: docMethodOp(function(e, t, r) {
          return changeLine(
            this,
            e,
            "gutter" == t ? "gutter" : "class",
            function(e) {
              var n =
                  "text" == t
                    ? "textClass"
                    : "background" == t
                      ? "bgClass"
                      : "gutter" == t ? "gutterClass" : "wrapClass",
                o = e[n]
              if (!o) return !1
              if (null == r) e[n] = null
              else {
                var i = o.match(classTest(r))
                if (!i) return !1
                var s = i.index + i[0].length
                e[n] =
                  o.slice(0, i.index) +
                    (i.index && s != o.length ? " " : "") +
                    o.slice(s) || null
              }
              return !0
            }
          )
        }),
        addLineWidget: docMethodOp(function(e, t, r) {
          return (function addLineWidget(e, t, r, n) {
            var o = new ye(e, r, n),
              i = e.cm
            return (
              i && o.noHScroll && (i.display.alignWidgets = !0),
              changeLine(e, t, "widget", function(t) {
                var r = t.widgets || (t.widgets = [])
                if (
                  (null == o.insertAt
                    ? r.push(o)
                    : r.splice(
                        Math.min(r.length - 1, Math.max(0, o.insertAt)),
                        0,
                        o
                      ),
                  (o.line = t),
                  i && !lineIsHidden(e, t))
                ) {
                  var n = heightAtLine(t) < e.scrollTop
                  updateLineHeight(t, t.height + widgetHeight(o)),
                    n && addToScrollTop(i, o.height),
                    (i.curOp.forceUpdate = !0)
                }
                return !0
              }),
              signalLater(
                i,
                "lineWidgetAdded",
                i,
                o,
                "number" == typeof t ? t : lineNo(t)
              ),
              o
            )
          })(this, e, t, r)
        }),
        removeLineWidget: function(e) {
          e.clear()
        },
        markText: function(e, t, r) {
          return markText(
            this,
            clipPos(this, e),
            clipPos(this, t),
            r,
            (r && r.type) || "range"
          )
        },
        setBookmark: function(e, t) {
          var r = {
            replacedWith: t && (null == t.nodeType ? t.widget : t),
            insertLeft: t && t.insertLeft,
            clearWhenEmpty: !1,
            shared: t && t.shared,
            handleMouseEvents: t && t.handleMouseEvents,
          }
          return markText(this, (e = clipPos(this, e)), e, r, "bookmark")
        },
        findMarksAt: function(e) {
          var t = [],
            r = getLine(this, (e = clipPos(this, e)).line).markedSpans
          if (r)
            for (var n = 0; n < r.length; ++n) {
              var o = r[n]
              ;(null == o.from || o.from <= e.ch) &&
                (null == o.to || o.to >= e.ch) &&
                t.push(o.marker.parent || o.marker)
            }
          return t
        },
        findMarks: function(e, t, r) {
          ;(e = clipPos(this, e)), (t = clipPos(this, t))
          var n = [],
            o = e.line
          return (
            this.iter(e.line, t.line + 1, function(i) {
              var s = i.markedSpans
              if (s)
                for (var a = 0; a < s.length; a++) {
                  var l = s[a]
                  ;(null != l.to && o == e.line && e.ch >= l.to) ||
                    (null == l.from && o != e.line) ||
                    (null != l.from && o == t.line && l.from >= t.ch) ||
                    (r && !r(l.marker)) ||
                    n.push(l.marker.parent || l.marker)
                }
              ++o
            }),
            n
          )
        },
        getAllMarks: function() {
          var e = []
          return (
            this.iter(function(t) {
              var r = t.markedSpans
              if (r)
                for (var n = 0; n < r.length; ++n)
                  null != r[n].from && e.push(r[n].marker)
            }),
            e
          )
        },
        posFromIndex: function(e) {
          var t,
            r = this.first,
            n = this.lineSeparator().length
          return (
            this.iter(function(o) {
              var i = o.text.length + n
              if (i > e) return (t = e), !0
              ;(e -= i), ++r
            }),
            clipPos(this, Pos(r, t))
          )
        },
        indexFromPos: function(e) {
          var t = (e = clipPos(this, e)).ch
          if (e.line < this.first || e.ch < 0) return 0
          var r = this.lineSeparator().length
          return (
            this.iter(this.first, e.line, function(e) {
              t += e.text.length + r
            }),
            t
          )
        },
        copy: function(e) {
          var t = new Se(
            getLines(this, this.first, this.first + this.size),
            this.modeOption,
            this.first,
            this.lineSep,
            this.direction
          )
          return (
            (t.scrollTop = this.scrollTop),
            (t.scrollLeft = this.scrollLeft),
            (t.sel = this.sel),
            (t.extend = !1),
            e &&
              ((t.history.undoDepth = this.history.undoDepth),
              t.setHistory(this.getHistory())),
            t
          )
        },
        linkedDoc: function(e) {
          e || (e = {})
          var t = this.first,
            r = this.first + this.size
          null != e.from && e.from > t && (t = e.from),
            null != e.to && e.to < r && (r = e.to)
          var n = new Se(
            getLines(this, t, r),
            e.mode || this.modeOption,
            t,
            this.lineSep,
            this.direction
          )
          return (
            e.sharedHist && (n.history = this.history),
            (this.linked || (this.linked = [])).push({
              doc: n,
              sharedHist: e.sharedHist,
            }),
            (n.linked = [
              { doc: this, isParent: !0, sharedHist: e.sharedHist },
            ]),
            (function copySharedMarkers(e, t) {
              for (var r = 0; r < t.length; r++) {
                var n = t[r],
                  o = n.find(),
                  i = e.clipPos(o.from),
                  s = e.clipPos(o.to)
                if (cmp(i, s)) {
                  var a = markText(e, i, s, n.primary, n.primary.type)
                  n.markers.push(a), (a.parent = n)
                }
              }
            })(n, findSharedMarkers(this)),
            n
          )
        },
        unlinkDoc: function(e) {
          if ((e instanceof CodeMirror$1 && (e = e.doc), this.linked))
            for (var t = 0; t < this.linked.length; ++t) {
              if (this.linked[t].doc == e) {
                this.linked.splice(t, 1),
                  e.unlinkDoc(this),
                  detachSharedMarkers(findSharedMarkers(this))
                break
              }
            }
          if (e.history == this.history) {
            var r = [e.id]
            linkedDocs(
              e,
              function(e) {
                return r.push(e.id)
              },
              !0
            ),
              (e.history = new History(null)),
              (e.history.done = copyHistoryArray(this.history.done, r)),
              (e.history.undone = copyHistoryArray(this.history.undone, r))
          }
        },
        iterLinkedDocs: function(e) {
          linkedDocs(this, e)
        },
        getMode: function() {
          return this.mode
        },
        getEditor: function() {
          return this.cm
        },
        splitLines: function(e) {
          return this.lineSep ? e.split(this.lineSep) : G(e)
        },
        lineSeparator: function() {
          return this.lineSep || "\n"
        },
        setDirection: docMethodOp(function(e) {
          "rtl" != e && (e = "ltr"),
            e != this.direction &&
              ((this.direction = e),
              this.iter(function(e) {
                return (e.order = null)
              }),
              this.cm &&
                (function directionChanged(e) {
                  runInOp(e, function() {
                    setDirectionClass(e), regChange(e)
                  })
                })(this.cm))
        }),
      })),
        (Se.prototype.eachLine = Se.prototype.iter)
      var ke = 0
      function onDrop(e) {
        var t = this
        if (
          (clearDragCursor(t),
          !signalDOMEvent(t, e) && !eventInWidget(t.display, e))
        ) {
          e_preventDefault(e), s && (ke = +new Date())
          var r = posFromMouse(t, e, !0),
            n = e.dataTransfer.files
          if (r && !t.isReadOnly())
            if (n && n.length && window.FileReader && window.File)
              for (
                var o = n.length,
                  i = Array(o),
                  a = 0,
                  l = function(e, n) {
                    if (
                      !t.options.allowDropFileTypes ||
                      -1 != indexOf(t.options.allowDropFileTypes, e.type)
                    ) {
                      var s = new FileReader()
                      ;(s.onload = operation(t, function() {
                        var e = s.result
                        if (
                          (/[\x00-\x08\x0e-\x1f]{2}/.test(e) && (e = ""),
                          (i[n] = e),
                          ++a == o)
                        ) {
                          var l = {
                            from: (r = clipPos(t.doc, r)),
                            to: r,
                            text: t.doc.splitLines(
                              i.join(t.doc.lineSeparator())
                            ),
                            origin: "paste",
                          }
                          makeChange(t.doc, l),
                            setSelectionReplaceHistory(
                              t.doc,
                              simpleSelection(r, changeEnd(l))
                            )
                        }
                      })),
                        s.readAsText(e)
                    }
                  },
                  c = 0;
                c < o;
                ++c
              )
                l(n[c], c)
            else {
              if (t.state.draggingText && t.doc.sel.contains(r) > -1)
                return (
                  t.state.draggingText(e),
                  void setTimeout(function() {
                    return t.display.input.focus()
                  }, 20)
                )
              try {
                var u = e.dataTransfer.getData("Text")
                if (u) {
                  var d
                  if (
                    (t.state.draggingText &&
                      !t.state.draggingText.copy &&
                      (d = t.listSelections()),
                    setSelectionNoUndo(t.doc, simpleSelection(r, r)),
                    d)
                  )
                    for (var p = 0; p < d.length; ++p)
                      replaceRange(t.doc, "", d[p].anchor, d[p].head, "drag")
                  t.replaceSelection(u, "around", "paste"),
                    t.display.input.focus()
                }
              } catch (e) {}
            }
        }
      }
      function clearDragCursor(e) {
        e.display.dragCursor &&
          (e.display.lineSpace.removeChild(e.display.dragCursor),
          (e.display.dragCursor = null))
      }
      function forEachCodeMirror(e) {
        if (document.getElementsByClassName)
          for (
            var t = document.getElementsByClassName("CodeMirror"), r = 0;
            r < t.length;
            r++
          ) {
            var n = t[r].CodeMirror
            n && e(n)
          }
      }
      var Le = !1
      function ensureGlobalHandlers() {
        Le ||
          (!(function registerGlobalHandlers() {
            var e
            j(window, "resize", function() {
              null == e &&
                (e = setTimeout(function() {
                  ;(e = null), forEachCodeMirror(onResize)
                }, 100))
            }),
              j(window, "blur", function() {
                return forEachCodeMirror(onBlur)
              })
          })(),
          (Le = !0))
      }
      function onResize(e) {
        var t = e.display
        ;(t.lastWrapHeight == t.wrapper.clientHeight &&
          t.lastWrapWidth == t.wrapper.clientWidth) ||
          ((t.cachedCharWidth = t.cachedTextHeight = t.cachedPaddingH = null),
          (t.scrollbarsClipped = !1),
          e.setSize())
      }
      for (
        var Me = {
            3: "Enter",
            8: "Backspace",
            9: "Tab",
            13: "Enter",
            16: "Shift",
            17: "Ctrl",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Esc",
            32: "Space",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "Left",
            38: "Up",
            39: "Right",
            40: "Down",
            44: "PrintScrn",
            45: "Insert",
            46: "Delete",
            59: ";",
            61: "=",
            91: "Mod",
            92: "Mod",
            93: "Mod",
            106: "*",
            107: "=",
            109: "-",
            110: ".",
            111: "/",
            127: "Delete",
            173: "-",
            186: ";",
            187: "=",
            188: ",",
            189: "-",
            190: ".",
            191: "/",
            192: "`",
            219: "[",
            220: "\\",
            221: "]",
            222: "'",
            63232: "Up",
            63233: "Down",
            63234: "Left",
            63235: "Right",
            63272: "Delete",
            63273: "Home",
            63275: "End",
            63276: "PageUp",
            63277: "PageDown",
            63302: "Insert",
          },
          Te = 0;
        Te < 10;
        Te++
      )
        Me[Te + 48] = Me[Te + 96] = String(Te)
      for (var Oe = 65; Oe <= 90; Oe++) Me[Oe] = String.fromCharCode(Oe)
      for (var Pe = 1; Pe <= 12; Pe++) Me[Pe + 111] = Me[Pe + 63235] = "F" + Pe
      var Ae = {}
      ;(Ae.basic = {
        Left: "goCharLeft",
        Right: "goCharRight",
        Up: "goLineUp",
        Down: "goLineDown",
        End: "goLineEnd",
        Home: "goLineStartSmart",
        PageUp: "goPageUp",
        PageDown: "goPageDown",
        Delete: "delCharAfter",
        Backspace: "delCharBefore",
        "Shift-Backspace": "delCharBefore",
        Tab: "defaultTab",
        "Shift-Tab": "indentAuto",
        Enter: "newlineAndIndent",
        Insert: "toggleOverwrite",
        Esc: "singleSelection",
      }),
        (Ae.pcDefault = {
          "Ctrl-A": "selectAll",
          "Ctrl-D": "deleteLine",
          "Ctrl-Z": "undo",
          "Shift-Ctrl-Z": "redo",
          "Ctrl-Y": "redo",
          "Ctrl-Home": "goDocStart",
          "Ctrl-End": "goDocEnd",
          "Ctrl-Up": "goLineUp",
          "Ctrl-Down": "goLineDown",
          "Ctrl-Left": "goGroupLeft",
          "Ctrl-Right": "goGroupRight",
          "Alt-Left": "goLineStart",
          "Alt-Right": "goLineEnd",
          "Ctrl-Backspace": "delGroupBefore",
          "Ctrl-Delete": "delGroupAfter",
          "Ctrl-S": "save",
          "Ctrl-F": "find",
          "Ctrl-G": "findNext",
          "Shift-Ctrl-G": "findPrev",
          "Shift-Ctrl-F": "replace",
          "Shift-Ctrl-R": "replaceAll",
          "Ctrl-[": "indentLess",
          "Ctrl-]": "indentMore",
          "Ctrl-U": "undoSelection",
          "Shift-Ctrl-U": "redoSelection",
          "Alt-U": "redoSelection",
          fallthrough: "basic",
        }),
        (Ae.emacsy = {
          "Ctrl-F": "goCharRight",
          "Ctrl-B": "goCharLeft",
          "Ctrl-P": "goLineUp",
          "Ctrl-N": "goLineDown",
          "Alt-F": "goWordRight",
          "Alt-B": "goWordLeft",
          "Ctrl-A": "goLineStart",
          "Ctrl-E": "goLineEnd",
          "Ctrl-V": "goPageDown",
          "Shift-Ctrl-V": "goPageUp",
          "Ctrl-D": "delCharAfter",
          "Ctrl-H": "delCharBefore",
          "Alt-D": "delWordAfter",
          "Alt-Backspace": "delWordBefore",
          "Ctrl-K": "killLine",
          "Ctrl-T": "transposeChars",
          "Ctrl-O": "openLine",
        }),
        (Ae.macDefault = {
          "Cmd-A": "selectAll",
          "Cmd-D": "deleteLine",
          "Cmd-Z": "undo",
          "Shift-Cmd-Z": "redo",
          "Cmd-Y": "redo",
          "Cmd-Home": "goDocStart",
          "Cmd-Up": "goDocStart",
          "Cmd-End": "goDocEnd",
          "Cmd-Down": "goDocEnd",
          "Alt-Left": "goGroupLeft",
          "Alt-Right": "goGroupRight",
          "Cmd-Left": "goLineLeft",
          "Cmd-Right": "goLineRight",
          "Alt-Backspace": "delGroupBefore",
          "Ctrl-Alt-Backspace": "delGroupAfter",
          "Alt-Delete": "delGroupAfter",
          "Cmd-S": "save",
          "Cmd-F": "find",
          "Cmd-G": "findNext",
          "Shift-Cmd-G": "findPrev",
          "Cmd-Alt-F": "replace",
          "Shift-Cmd-Alt-F": "replaceAll",
          "Cmd-[": "indentLess",
          "Cmd-]": "indentMore",
          "Cmd-Backspace": "delWrappedLineLeft",
          "Cmd-Delete": "delWrappedLineRight",
          "Cmd-U": "undoSelection",
          "Shift-Cmd-U": "redoSelection",
          "Ctrl-Up": "goDocStart",
          "Ctrl-Down": "goDocEnd",
          fallthrough: ["basic", "emacsy"],
        }),
        (Ae.default = y ? Ae.macDefault : Ae.pcDefault)
      function normalizeKeyName(e) {
        var t = e.split(/-(?!$)/)
        e = t[t.length - 1]
        for (var r, n, o, i, s = 0; s < t.length - 1; s++) {
          var a = t[s]
          if (/^(cmd|meta|m)$/i.test(a)) i = !0
          else if (/^a(lt)?$/i.test(a)) r = !0
          else if (/^(c|ctrl|control)$/i.test(a)) n = !0
          else {
            if (!/^s(hift)?$/i.test(a))
              throw new Error("Unrecognized modifier name: " + a)
            o = !0
          }
        }
        return (
          r && (e = "Alt-" + e),
          n && (e = "Ctrl-" + e),
          i && (e = "Cmd-" + e),
          o && (e = "Shift-" + e),
          e
        )
      }
      function normalizeKeyMap(e) {
        var t = {}
        for (var r in e)
          if (e.hasOwnProperty(r)) {
            var n = e[r]
            if (/^(name|fallthrough|(de|at)tach)$/.test(r)) continue
            if ("..." == n) {
              delete e[r]
              continue
            }
            for (
              var o = map(r.split(" "), normalizeKeyName), i = 0;
              i < o.length;
              i++
            ) {
              var s = void 0,
                a = void 0
              i == o.length - 1
                ? ((a = o.join(" ")), (s = n))
                : ((a = o.slice(0, i + 1).join(" ")), (s = "..."))
              var l = t[a]
              if (l) {
                if (l != s) throw new Error("Inconsistent bindings for " + a)
              } else t[a] = s
            }
            delete e[r]
          }
        for (var c in t) e[c] = t[c]
        return e
      }
      function lookupKey(e, t, r, n) {
        var o = (t = getKeyMap(t)).call ? t.call(e, n) : t[e]
        if (!1 === o) return "nothing"
        if ("..." === o) return "multi"
        if (null != o && r(o)) return "handled"
        if (t.fallthrough) {
          if ("[object Array]" != Object.prototype.toString.call(t.fallthrough))
            return lookupKey(e, t.fallthrough, r, n)
          for (var i = 0; i < t.fallthrough.length; i++) {
            var s = lookupKey(e, t.fallthrough[i], r, n)
            if (s) return s
          }
        }
      }
      function isModifierKey(e) {
        var t = "string" == typeof e ? e : Me[e.keyCode]
        return "Ctrl" == t || "Alt" == t || "Shift" == t || "Mod" == t
      }
      function addModifierNames(e, t, r) {
        var n = e
        return (
          t.altKey && "Alt" != n && (e = "Alt-" + e),
          (w ? t.metaKey : t.ctrlKey) && "Ctrl" != n && (e = "Ctrl-" + e),
          (w ? t.ctrlKey : t.metaKey) && "Cmd" != n && (e = "Cmd-" + e),
          !r && t.shiftKey && "Shift" != n && (e = "Shift-" + e),
          e
        )
      }
      function keyName(e, t) {
        if (d && 34 == e.keyCode && e.char) return !1
        var r = Me[e.keyCode]
        return null != r && !e.altGraphKey && addModifierNames(r, e, t)
      }
      function getKeyMap(e) {
        return "string" == typeof e ? Ae[e] : e
      }
      function deleteNearSelection(e, t) {
        for (var r = e.doc.sel.ranges, n = [], o = 0; o < r.length; o++) {
          for (var i = t(r[o]); n.length && cmp(i.from, lst(n).to) <= 0; ) {
            var s = n.pop()
            if (cmp(s.from, i.from) < 0) {
              i.from = s.from
              break
            }
          }
          n.push(i)
        }
        runInOp(e, function() {
          for (var t = n.length - 1; t >= 0; t--)
            replaceRange(e.doc, "", n[t].from, n[t].to, "+delete")
          ensureCursorVisible(e)
        })
      }
      function moveCharLogically(e, t, r) {
        var n = skipExtendingChars(e.text, t + r, r)
        return n < 0 || n > e.text.length ? null : n
      }
      function moveLogically(e, t, r) {
        var n = moveCharLogically(e, t.ch, r)
        return null == n ? null : new Pos(t.line, n, r < 0 ? "after" : "before")
      }
      function endOfLine(e, t, r, n, o) {
        if (e) {
          var i = getOrder(r, t.doc.direction)
          if (i) {
            var s,
              a = o < 0 ? lst(i) : i[0],
              l = o < 0 == (1 == a.level) ? "after" : "before"
            if (a.level > 0 || "rtl" == t.doc.direction) {
              var c = prepareMeasureForLine(t, r)
              s = o < 0 ? r.text.length - 1 : 0
              var u = measureCharPrepared(t, c, s).top
              ;(s = findFirst(
                function(e) {
                  return measureCharPrepared(t, c, e).top == u
                },
                o < 0 == (1 == a.level) ? a.from : a.to - 1,
                s
              )),
                "before" == l && (s = moveCharLogically(r, s, 1))
            } else s = o < 0 ? a.to : a.from
            return new Pos(n, s, l)
          }
        }
        return new Pos(n, o < 0 ? r.text.length : 0, o < 0 ? "before" : "after")
      }
      var Ne = {
        selectAll: selectAll,
        singleSelection: function(e) {
          return e.setSelection(e.getCursor("anchor"), e.getCursor("head"), A)
        },
        killLine: function(e) {
          return deleteNearSelection(e, function(t) {
            if (t.empty()) {
              var r = getLine(e.doc, t.head.line).text.length
              return t.head.ch == r && t.head.line < e.lastLine()
                ? { from: t.head, to: Pos(t.head.line + 1, 0) }
                : { from: t.head, to: Pos(t.head.line, r) }
            }
            return { from: t.from(), to: t.to() }
          })
        },
        deleteLine: function(e) {
          return deleteNearSelection(e, function(t) {
            return {
              from: Pos(t.from().line, 0),
              to: clipPos(e.doc, Pos(t.to().line + 1, 0)),
            }
          })
        },
        delLineLeft: function(e) {
          return deleteNearSelection(e, function(e) {
            return { from: Pos(e.from().line, 0), to: e.from() }
          })
        },
        delWrappedLineLeft: function(e) {
          return deleteNearSelection(e, function(t) {
            var r = e.charCoords(t.head, "div").top + 5
            return {
              from: e.coordsChar({ left: 0, top: r }, "div"),
              to: t.from(),
            }
          })
        },
        delWrappedLineRight: function(e) {
          return deleteNearSelection(e, function(t) {
            var r = e.charCoords(t.head, "div").top + 5,
              n = e.coordsChar(
                { left: e.display.lineDiv.offsetWidth + 100, top: r },
                "div"
              )
            return { from: t.from(), to: n }
          })
        },
        undo: function(e) {
          return e.undo()
        },
        redo: function(e) {
          return e.redo()
        },
        undoSelection: function(e) {
          return e.undoSelection()
        },
        redoSelection: function(e) {
          return e.redoSelection()
        },
        goDocStart: function(e) {
          return e.extendSelection(Pos(e.firstLine(), 0))
        },
        goDocEnd: function(e) {
          return e.extendSelection(Pos(e.lastLine()))
        },
        goLineStart: function(e) {
          return e.extendSelectionsBy(
            function(t) {
              return lineStart(e, t.head.line)
            },
            { origin: "+move", bias: 1 }
          )
        },
        goLineStartSmart: function(e) {
          return e.extendSelectionsBy(
            function(t) {
              return lineStartSmart(e, t.head)
            },
            { origin: "+move", bias: 1 }
          )
        },
        goLineEnd: function(e) {
          return e.extendSelectionsBy(
            function(t) {
              return (function lineEnd(e, t) {
                var r = getLine(e.doc, t),
                  n = (function visualLineEnd(e) {
                    for (var t; (t = collapsedSpanAtEnd(e)); )
                      e = t.find(1, !0).line
                    return e
                  })(r)
                n != r && (t = lineNo(n))
                return endOfLine(!0, e, r, t, -1)
              })(e, t.head.line)
            },
            { origin: "+move", bias: -1 }
          )
        },
        goLineRight: function(e) {
          return e.extendSelectionsBy(function(t) {
            var r = e.cursorCoords(t.head, "div").top + 5
            return e.coordsChar(
              { left: e.display.lineDiv.offsetWidth + 100, top: r },
              "div"
            )
          }, D)
        },
        goLineLeft: function(e) {
          return e.extendSelectionsBy(function(t) {
            var r = e.cursorCoords(t.head, "div").top + 5
            return e.coordsChar({ left: 0, top: r }, "div")
          }, D)
        },
        goLineLeftSmart: function(e) {
          return e.extendSelectionsBy(function(t) {
            var r = e.cursorCoords(t.head, "div").top + 5,
              n = e.coordsChar({ left: 0, top: r }, "div")
            return n.ch < e.getLine(n.line).search(/\S/)
              ? lineStartSmart(e, t.head)
              : n
          }, D)
        },
        goLineUp: function(e) {
          return e.moveV(-1, "line")
        },
        goLineDown: function(e) {
          return e.moveV(1, "line")
        },
        goPageUp: function(e) {
          return e.moveV(-1, "page")
        },
        goPageDown: function(e) {
          return e.moveV(1, "page")
        },
        goCharLeft: function(e) {
          return e.moveH(-1, "char")
        },
        goCharRight: function(e) {
          return e.moveH(1, "char")
        },
        goColumnLeft: function(e) {
          return e.moveH(-1, "column")
        },
        goColumnRight: function(e) {
          return e.moveH(1, "column")
        },
        goWordLeft: function(e) {
          return e.moveH(-1, "word")
        },
        goGroupRight: function(e) {
          return e.moveH(1, "group")
        },
        goGroupLeft: function(e) {
          return e.moveH(-1, "group")
        },
        goWordRight: function(e) {
          return e.moveH(1, "word")
        },
        delCharBefore: function(e) {
          return e.deleteH(-1, "char")
        },
        delCharAfter: function(e) {
          return e.deleteH(1, "char")
        },
        delWordBefore: function(e) {
          return e.deleteH(-1, "word")
        },
        delWordAfter: function(e) {
          return e.deleteH(1, "word")
        },
        delGroupBefore: function(e) {
          return e.deleteH(-1, "group")
        },
        delGroupAfter: function(e) {
          return e.deleteH(1, "group")
        },
        indentAuto: function(e) {
          return e.indentSelection("smart")
        },
        indentMore: function(e) {
          return e.indentSelection("add")
        },
        indentLess: function(e) {
          return e.indentSelection("subtract")
        },
        insertTab: function(e) {
          return e.replaceSelection("\t")
        },
        insertSoftTab: function(e) {
          for (
            var t = [], r = e.listSelections(), n = e.options.tabSize, o = 0;
            o < r.length;
            o++
          ) {
            var i = r[o].from(),
              s = countColumn(e.getLine(i.line), i.ch, n)
            t.push(spaceStr(n - s % n))
          }
          e.replaceSelections(t)
        },
        defaultTab: function(e) {
          e.somethingSelected()
            ? e.indentSelection("add")
            : e.execCommand("insertTab")
        },
        transposeChars: function(e) {
          return runInOp(e, function() {
            for (var t = e.listSelections(), r = [], n = 0; n < t.length; n++)
              if (t[n].empty()) {
                var o = t[n].head,
                  i = getLine(e.doc, o.line).text
                if (i)
                  if (
                    (o.ch == i.length && (o = new Pos(o.line, o.ch - 1)),
                    o.ch > 0)
                  )
                    (o = new Pos(o.line, o.ch + 1)),
                      e.replaceRange(
                        i.charAt(o.ch - 1) + i.charAt(o.ch - 2),
                        Pos(o.line, o.ch - 2),
                        o,
                        "+transpose"
                      )
                  else if (o.line > e.doc.first) {
                    var s = getLine(e.doc, o.line - 1).text
                    s &&
                      ((o = new Pos(o.line, 1)),
                      e.replaceRange(
                        i.charAt(0) +
                          e.doc.lineSeparator() +
                          s.charAt(s.length - 1),
                        Pos(o.line - 1, s.length - 1),
                        o,
                        "+transpose"
                      ))
                  }
                r.push(new ve(o, o))
              }
            e.setSelections(r)
          })
        },
        newlineAndIndent: function(e) {
          return runInOp(e, function() {
            for (var t = e.listSelections(), r = t.length - 1; r >= 0; r--)
              e.replaceRange(
                e.doc.lineSeparator(),
                t[r].anchor,
                t[r].head,
                "+input"
              )
            t = e.listSelections()
            for (var n = 0; n < t.length; n++)
              e.indentLine(t[n].from().line, null, !0)
            ensureCursorVisible(e)
          })
        },
        openLine: function(e) {
          return e.replaceSelection("\n", "start")
        },
        toggleOverwrite: function(e) {
          return e.toggleOverwrite()
        },
      }
      function lineStart(e, t) {
        var r = getLine(e.doc, t),
          n = visualLine(r)
        return n != r && (t = lineNo(n)), endOfLine(!0, e, n, t, 1)
      }
      function lineStartSmart(e, t) {
        var r = lineStart(e, t.line),
          n = getLine(e.doc, r.line),
          o = getOrder(n, e.doc.direction)
        if (!o || 0 == o[0].level) {
          var i = Math.max(0, n.text.search(/\S/)),
            s = t.line == r.line && t.ch <= i && t.ch
          return Pos(r.line, s ? 0 : i, r.sticky)
        }
        return r
      }
      function doHandleBinding(e, t, r) {
        if ("string" == typeof t && !(t = Ne[t])) return !1
        e.display.input.ensurePolled()
        var n = e.display.shift,
          o = !1
        try {
          e.isReadOnly() && (e.state.suppressEdits = !0),
            r && (e.display.shift = !1),
            (o = t(e) != P)
        } finally {
          ;(e.display.shift = n), (e.state.suppressEdits = !1)
        }
        return o
      }
      var De = new T()
      function dispatchKey(e, t, r, n) {
        var o = e.state.keySeq
        if (o) {
          if (isModifierKey(t)) return "handled"
          if (
            (/\'$/.test(t)
              ? (e.state.keySeq = null)
              : De.set(50, function() {
                  e.state.keySeq == o &&
                    ((e.state.keySeq = null), e.display.input.reset())
                }),
            dispatchKeyInner(e, o + " " + t, r, n))
          )
            return !0
        }
        return dispatchKeyInner(e, t, r, n)
      }
      function dispatchKeyInner(e, t, r, n) {
        var o = (function lookupKeyForEditor(e, t, r) {
          for (var n = 0; n < e.state.keyMaps.length; n++) {
            var o = lookupKey(t, e.state.keyMaps[n], r, e)
            if (o) return o
          }
          return (
            (e.options.extraKeys && lookupKey(t, e.options.extraKeys, r, e)) ||
            lookupKey(t, e.options.keyMap, r, e)
          )
        })(e, t, n)
        return (
          "multi" == o && (e.state.keySeq = t),
          "handled" == o && signalLater(e, "keyHandled", e, t, r),
          ("handled" != o && "multi" != o) ||
            (e_preventDefault(r), restartBlink(e)),
          !!o
        )
      }
      function handleKeyBinding(e, t) {
        var r = keyName(t, !0)
        return (
          !!r &&
          (t.shiftKey && !e.state.keySeq
            ? dispatchKey(e, "Shift-" + r, t, function(t) {
                return doHandleBinding(e, t, !0)
              }) ||
              dispatchKey(e, r, t, function(t) {
                if ("string" == typeof t ? /^go[A-Z]/.test(t) : t.motion)
                  return doHandleBinding(e, t)
              })
            : dispatchKey(e, r, t, function(t) {
                return doHandleBinding(e, t)
              }))
        )
      }
      var He = null
      function onKeyDown(e) {
        if (((this.curOp.focus = activeElt()), !signalDOMEvent(this, e))) {
          s && a < 11 && 27 == e.keyCode && (e.returnValue = !1)
          var t = e.keyCode
          this.display.shift = 16 == t || e.shiftKey
          var r = handleKeyBinding(this, e)
          d &&
            ((He = r ? t : null),
            !r &&
              88 == t &&
              !$ &&
              (y ? e.metaKey : e.ctrlKey) &&
              this.replaceSelection("", null, "cut")),
            18 != t ||
              /\bCodeMirror-crosshair\b/.test(this.display.lineDiv.className) ||
              (function showCrossHair(e) {
                var t = e.display.lineDiv
                addClass(t, "CodeMirror-crosshair")
                function up(e) {
                  ;(18 != e.keyCode && e.altKey) ||
                    (k(t, "CodeMirror-crosshair"),
                    off(document, "keyup", up),
                    off(document, "mouseover", up))
                }
                j(document, "keyup", up), j(document, "mouseover", up)
              })(this)
        }
      }
      function onKeyUp(e) {
        16 == e.keyCode && (this.doc.sel.shift = !1), signalDOMEvent(this, e)
      }
      function onKeyPress(e) {
        if (
          !(
            eventInWidget(this.display, e) ||
            signalDOMEvent(this, e) ||
            (e.ctrlKey && !e.altKey) ||
            (y && e.metaKey)
          )
        ) {
          var t = e.keyCode,
            r = e.charCode
          if (d && t == He) return (He = null), void e_preventDefault(e)
          if (
            !d ||
            (e.which && !(e.which < 10)) ||
            !handleKeyBinding(this, e)
          ) {
            var n = String.fromCharCode(null == r ? t : r)
            "\b" != n &&
              ((function handleCharBinding(e, t, r) {
                return dispatchKey(e, "'" + r + "'", t, function(t) {
                  return doHandleBinding(e, t, !0)
                })
              })(this, e, n) ||
                this.display.input.onKeyPress(e))
          }
        }
      }
      var We = function(e, t, r) {
        ;(this.time = e), (this.pos = t), (this.button = r)
      }
      We.prototype.compare = function(e, t, r) {
        return this.time + 400 > e && 0 == cmp(t, this.pos) && r == this.button
      }
      var Ee, Ie
      function onMouseDown(e) {
        var t = this.display
        if (
          !(
            signalDOMEvent(this, e) ||
            (t.activeTouch && t.input.supportsTouch())
          )
        )
          if (
            (t.input.ensurePolled(),
            (t.shift = e.shiftKey),
            eventInWidget(t, e))
          )
            l ||
              ((t.scroller.draggable = !1),
              setTimeout(function() {
                return (t.scroller.draggable = !0)
              }, 100))
          else if (!clickInGutter(this, e)) {
            var r = posFromMouse(this, e),
              n = e_button(e),
              o = r
                ? (function clickRepeat(e, t) {
                    var r = +new Date()
                    return Ie && Ie.compare(r, e, t)
                      ? ((Ee = Ie = null), "triple")
                      : Ee && Ee.compare(r, e, t)
                        ? ((Ie = new We(r, e, t)), (Ee = null), "double")
                        : ((Ee = new We(r, e, t)), (Ie = null), "single")
                  })(r, n)
                : "single"
            window.focus(),
              1 == n && this.state.selectingText && this.state.selectingText(e),
              (r &&
                (function handleMappedButton(e, t, r, n, o) {
                  var i = "Click"
                  "double" == n
                    ? (i = "Double" + i)
                    : "triple" == n && (i = "Triple" + i)
                  return dispatchKey(
                    e,
                    addModifierNames(
                      (i = (1 == t ? "Left" : 2 == t ? "Middle" : "Right") + i),
                      o
                    ),
                    o,
                    function(t) {
                      if (("string" == typeof t && (t = Ne[t]), !t)) return !1
                      var n = !1
                      try {
                        e.isReadOnly() && (e.state.suppressEdits = !0),
                          (n = t(e, r) != P)
                      } finally {
                        e.state.suppressEdits = !1
                      }
                      return n
                    }
                  )
                })(this, n, r, o, e)) ||
                (1 == n
                  ? r
                    ? (function leftButtonDown(e, t, r, n) {
                        s
                          ? setTimeout(bind(ensureFocus, e), 0)
                          : (e.curOp.focus = activeElt())
                        var o,
                          i = (function configureMouse(e, t, r) {
                            var n = e.getOption("configureMouse"),
                              o = n ? n(e, t, r) : {}
                            if (null == o.unit) {
                              var i = b ? r.shiftKey && r.metaKey : r.altKey
                              o.unit = i
                                ? "rectangle"
                                : "single" == t
                                  ? "char"
                                  : "double" == t ? "word" : "line"
                            }
                            ;(null == o.extend || e.doc.extend) &&
                              (o.extend = e.doc.extend || r.shiftKey)
                            null == o.addNew &&
                              (o.addNew = y ? r.metaKey : r.ctrlKey)
                            null == o.moveOnDrag &&
                              (o.moveOnDrag = !(y ? r.altKey : r.ctrlKey))
                            return o
                          })(e, r, n),
                          c = e.doc.sel
                        e.options.dragDrop &&
                        _ &&
                        !e.isReadOnly() &&
                        "single" == r &&
                        (o = c.contains(t)) > -1 &&
                        (cmp((o = c.ranges[o]).from(), t) < 0 || t.xRel > 0) &&
                        (cmp(o.to(), t) > 0 || t.xRel < 0)
                          ? (function leftButtonStartDrag(e, t, r, n) {
                              var o = e.display,
                                i = !1,
                                c = operation(e, function(t) {
                                  l && (o.scroller.draggable = !1),
                                    (e.state.draggingText = !1),
                                    off(document, "mouseup", c),
                                    off(document, "mousemove", u),
                                    off(o.scroller, "dragstart", d),
                                    off(o.scroller, "drop", c),
                                    i ||
                                      (e_preventDefault(t),
                                      n.addNew ||
                                        extendSelection(
                                          e.doc,
                                          r,
                                          null,
                                          null,
                                          n.extend
                                        ),
                                      l || (s && 9 == a)
                                        ? setTimeout(function() {
                                            document.body.focus(),
                                              o.input.focus()
                                          }, 20)
                                        : o.input.focus())
                                }),
                                u = function(e) {
                                  i =
                                    i ||
                                    Math.abs(t.clientX - e.clientX) +
                                      Math.abs(t.clientY - e.clientY) >=
                                      10
                                },
                                d = function() {
                                  return (i = !0)
                                }
                              l && (o.scroller.draggable = !0)
                              ;(e.state.draggingText = c),
                                (c.copy = !n.moveOnDrag),
                                o.scroller.dragDrop && o.scroller.dragDrop()
                              j(document, "mouseup", c),
                                j(document, "mousemove", u),
                                j(o.scroller, "dragstart", d),
                                j(o.scroller, "drop", c),
                                delayBlurEvent(e),
                                setTimeout(function() {
                                  return o.input.focus()
                                }, 20)
                            })(e, n, t, i)
                          : (function leftButtonSelect(e, t, r, n) {
                              var o = e.display,
                                i = e.doc
                              e_preventDefault(t)
                              var s,
                                a,
                                l = i.sel,
                                c = l.ranges
                              n.addNew && !n.extend
                                ? ((a = i.sel.contains(r)),
                                  (s = a > -1 ? c[a] : new ve(r, r)))
                                : ((s = i.sel.primary()), (a = i.sel.primIndex))
                              if ("rectangle" == n.unit)
                                n.addNew || (s = new ve(r, r)),
                                  (r = posFromMouse(e, t, !0, !0)),
                                  (a = -1)
                              else {
                                var u = rangeForUnit(e, r, n.unit)
                                s = n.extend
                                  ? extendRange(s, u.anchor, u.head, n.extend)
                                  : u
                              }
                              n.addNew
                                ? -1 == a
                                  ? ((a = c.length),
                                    setSelection(
                                      i,
                                      normalizeSelection(c.concat([s]), a),
                                      { scroll: !1, origin: "*mouse" }
                                    ))
                                  : c.length > 1 &&
                                    c[a].empty() &&
                                    "char" == n.unit &&
                                    !n.extend
                                    ? (setSelection(
                                        i,
                                        normalizeSelection(
                                          c.slice(0, a).concat(c.slice(a + 1)),
                                          0
                                        ),
                                        { scroll: !1, origin: "*mouse" }
                                      ),
                                      (l = i.sel))
                                    : replaceOneSelection(i, a, s, N)
                                : ((a = 0),
                                  setSelection(i, new me([s], 0), N),
                                  (l = i.sel))
                              var d = r
                              function extendTo(t) {
                                if (0 != cmp(d, t))
                                  if (((d = t), "rectangle" == n.unit)) {
                                    for (
                                      var o = [],
                                        c = e.options.tabSize,
                                        u = countColumn(
                                          getLine(i, r.line).text,
                                          r.ch,
                                          c
                                        ),
                                        p = countColumn(
                                          getLine(i, t.line).text,
                                          t.ch,
                                          c
                                        ),
                                        h = Math.min(u, p),
                                        f = Math.max(u, p),
                                        g = Math.min(r.line, t.line),
                                        m = Math.min(
                                          e.lastLine(),
                                          Math.max(r.line, t.line)
                                        );
                                      g <= m;
                                      g++
                                    ) {
                                      var v = getLine(i, g).text,
                                        y = findColumn(v, h, c)
                                      h == f
                                        ? o.push(new ve(Pos(g, y), Pos(g, y)))
                                        : v.length > y &&
                                          o.push(
                                            new ve(
                                              Pos(g, y),
                                              Pos(g, findColumn(v, f, c))
                                            )
                                          )
                                    }
                                    o.length || o.push(new ve(r, r)),
                                      setSelection(
                                        i,
                                        normalizeSelection(
                                          l.ranges.slice(0, a).concat(o),
                                          a
                                        ),
                                        { origin: "*mouse", scroll: !1 }
                                      ),
                                      e.scrollIntoView(t)
                                  } else {
                                    var b,
                                      C = s,
                                      x = rangeForUnit(e, t, n.unit),
                                      w = C.anchor
                                    cmp(x.anchor, w) > 0
                                      ? ((b = x.head),
                                        (w = minPos(C.from(), x.anchor)))
                                      : ((b = x.anchor),
                                        (w = maxPos(C.to(), x.head)))
                                    var S = l.ranges.slice(0)
                                    ;(S[a] = (function bidiSimplify(e, t) {
                                      var r = t.anchor,
                                        n = t.head,
                                        o = getLine(e.doc, r.line)
                                      if (
                                        0 == cmp(r, n) &&
                                        r.sticky == n.sticky
                                      )
                                        return t
                                      var i = getOrder(o)
                                      if (!i) return t
                                      var s = getBidiPartAt(i, r.ch, r.sticky),
                                        a = i[s]
                                      if (a.from != r.ch && a.to != r.ch)
                                        return t
                                      var l =
                                        s +
                                        ((a.from == r.ch) == (1 != a.level)
                                          ? 0
                                          : 1)
                                      if (0 == l || l == i.length) return t
                                      var c
                                      if (n.line != r.line)
                                        c =
                                          (n.line - r.line) *
                                            ("ltr" == e.doc.direction
                                              ? 1
                                              : -1) >
                                          0
                                      else {
                                        var u = getBidiPartAt(
                                            i,
                                            n.ch,
                                            n.sticky
                                          ),
                                          d =
                                            u - s ||
                                            (n.ch - r.ch) *
                                              (1 == a.level ? -1 : 1)
                                        c = u == l - 1 || u == l ? d < 0 : d > 0
                                      }
                                      var p = i[l + (c ? -1 : 0)],
                                        h = c == (1 == p.level),
                                        f = h ? p.from : p.to,
                                        g = h ? "after" : "before"
                                      return r.ch == f && r.sticky == g
                                        ? t
                                        : new ve(new Pos(r.line, f, g), n)
                                    })(e, new ve(clipPos(i, w), b))),
                                      setSelection(
                                        i,
                                        normalizeSelection(S, a),
                                        N
                                      )
                                  }
                              }
                              var p = o.wrapper.getBoundingClientRect(),
                                h = 0
                              function done(t) {
                                ;(e.state.selectingText = !1),
                                  (h = 1 / 0),
                                  e_preventDefault(t),
                                  o.input.focus(),
                                  off(document, "mousemove", f),
                                  off(document, "mouseup", g),
                                  (i.history.lastSelOrigin = null)
                              }
                              var f = operation(e, function(t) {
                                  e_button(t)
                                    ? (function extend(t) {
                                        var r = ++h
                                        var s = posFromMouse(
                                          e,
                                          t,
                                          !0,
                                          "rectangle" == n.unit
                                        )
                                        if (!s) return
                                        if (0 != cmp(s, d)) {
                                          ;(e.curOp.focus = activeElt()),
                                            extendTo(s)
                                          var a = visibleLines(o, i)
                                          ;(s.line >= a.to ||
                                            s.line < a.from) &&
                                            setTimeout(
                                              operation(e, function() {
                                                h == r && extend(t)
                                              }),
                                              150
                                            )
                                        } else {
                                          var l =
                                            t.clientY < p.top
                                              ? -20
                                              : t.clientY > p.bottom ? 20 : 0
                                          l &&
                                            setTimeout(
                                              operation(e, function() {
                                                h == r &&
                                                  ((o.scroller.scrollTop += l),
                                                  extend(t))
                                              }),
                                              50
                                            )
                                        }
                                      })(t)
                                    : done(t)
                                }),
                                g = operation(e, done)
                              ;(e.state.selectingText = g),
                                j(document, "mousemove", f),
                                j(document, "mouseup", g)
                            })(e, n, t, i)
                      })(this, r, o, e)
                    : e_target(e) == t.scroller && e_preventDefault(e)
                  : 2 == n
                    ? (r && extendSelection(this.doc, r),
                      setTimeout(function() {
                        return t.input.focus()
                      }, 20))
                    : 3 == n &&
                      (S ? onContextMenu(this, e) : delayBlurEvent(this)))
          }
      }
      function rangeForUnit(e, t, r) {
        if ("char" == r) return new ve(t, t)
        if ("word" == r) return e.findWordAt(t)
        if ("line" == r)
          return new ve(Pos(t.line, 0), clipPos(e.doc, Pos(t.line + 1, 0)))
        var n = r(e, t)
        return new ve(n.from, n.to)
      }
      function gutterEvent(e, t, r, n) {
        var o, i
        if (t.touches) (o = t.touches[0].clientX), (i = t.touches[0].clientY)
        else
          try {
            ;(o = t.clientX), (i = t.clientY)
          } catch (t) {
            return !1
          }
        if (o >= Math.floor(e.display.gutters.getBoundingClientRect().right))
          return !1
        n && e_preventDefault(t)
        var s = e.display,
          a = s.lineDiv.getBoundingClientRect()
        if (i > a.bottom || !hasHandler(e, r)) return e_defaultPrevented(t)
        i -= a.top - s.viewOffset
        for (var l = 0; l < e.options.gutters.length; ++l) {
          var c = s.gutters.childNodes[l]
          if (c && c.getBoundingClientRect().right >= o) {
            return (
              signal(e, r, e, lineAtHeight(e.doc, i), e.options.gutters[l], t),
              e_defaultPrevented(t)
            )
          }
        }
      }
      function clickInGutter(e, t) {
        return gutterEvent(e, t, "gutterClick", !0)
      }
      function onContextMenu(e, t) {
        eventInWidget(e.display, t) ||
          (function contextMenuInGutter(e, t) {
            if (!hasHandler(e, "gutterContextMenu")) return !1
            return gutterEvent(e, t, "gutterContextMenu", !1)
          })(e, t) ||
          signalDOMEvent(e, t, "contextmenu") ||
          e.display.input.onContextMenu(t)
      }
      function themeChanged(e) {
        ;(e.display.wrapper.className =
          e.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") +
          e.options.theme.replace(/(^|\s)\s*/g, " cm-s-")),
          clearCaches(e)
      }
      var Fe = {
          toString: function() {
            return "CodeMirror.Init"
          },
        },
        Be = {},
        ze = {}
      function guttersChanged(e) {
        updateGutters(e), regChange(e), alignHorizontally(e)
      }
      function dragDropChanged(e, t, r) {
        if (!t != !(r && r != Fe)) {
          var n = e.display.dragFunctions,
            o = t ? j : off
          o(e.display.scroller, "dragstart", n.start),
            o(e.display.scroller, "dragenter", n.enter),
            o(e.display.scroller, "dragover", n.over),
            o(e.display.scroller, "dragleave", n.leave),
            o(e.display.scroller, "drop", n.drop)
        }
      }
      function wrappingChanged(e) {
        e.options.lineWrapping
          ? (addClass(e.display.wrapper, "CodeMirror-wrap"),
            (e.display.sizer.style.minWidth = ""),
            (e.display.sizerWidth = null))
          : (k(e.display.wrapper, "CodeMirror-wrap"), findMaxLine(e)),
          estimateLineHeights(e),
          regChange(e),
          clearCaches(e),
          setTimeout(function() {
            return updateScrollbars(e)
          }, 100)
      }
      function CodeMirror$1(e, t) {
        var n = this
        if (!(this instanceof CodeMirror$1)) return new CodeMirror$1(e, t)
        ;(this.options = t = t ? copyObj(t) : {}),
          copyObj(Be, t, !1),
          setGuttersForLineNumbers(t)
        var o = t.value
        "string" == typeof o &&
          (o = new Se(o, t.mode, null, t.lineSeparator, t.direction)),
          (this.doc = o)
        var i = new CodeMirror$1.inputStyles[t.inputStyle](this),
          c = (this.display = new function Display(e, t, n) {
            ;(this.input = n),
              (this.scrollbarFiller = elt(
                "div",
                null,
                "CodeMirror-scrollbar-filler"
              )),
              this.scrollbarFiller.setAttribute("cm-not-content", "true"),
              (this.gutterFiller = elt(
                "div",
                null,
                "CodeMirror-gutter-filler"
              )),
              this.gutterFiller.setAttribute("cm-not-content", "true"),
              (this.lineDiv = eltP("div", null, "CodeMirror-code")),
              (this.selectionDiv = elt(
                "div",
                null,
                null,
                "position: relative; z-index: 1"
              )),
              (this.cursorDiv = elt("div", null, "CodeMirror-cursors")),
              (this.measure = elt("div", null, "CodeMirror-measure")),
              (this.lineMeasure = elt("div", null, "CodeMirror-measure")),
              (this.lineSpace = eltP(
                "div",
                [
                  this.measure,
                  this.lineMeasure,
                  this.selectionDiv,
                  this.cursorDiv,
                  this.lineDiv,
                ],
                null,
                "position: relative; outline: none"
              ))
            var o = eltP("div", [this.lineSpace], "CodeMirror-lines")
            ;(this.mover = elt("div", [o], null, "position: relative")),
              (this.sizer = elt("div", [this.mover], "CodeMirror-sizer")),
              (this.sizerWidth = null),
              (this.heightForcer = elt(
                "div",
                null,
                null,
                "position: absolute; height: " + O + "px; width: 1px;"
              )),
              (this.gutters = elt("div", null, "CodeMirror-gutters")),
              (this.lineGutter = null),
              (this.scroller = elt(
                "div",
                [this.sizer, this.heightForcer, this.gutters],
                "CodeMirror-scroll"
              )),
              this.scroller.setAttribute("tabIndex", "-1"),
              (this.wrapper = elt(
                "div",
                [this.scrollbarFiller, this.gutterFiller, this.scroller],
                "CodeMirror"
              )),
              s &&
                a < 8 &&
                ((this.gutters.style.zIndex = -1),
                (this.scroller.style.paddingRight = 0)),
              l || (r && v) || (this.scroller.draggable = !0),
              e &&
                (e.appendChild ? e.appendChild(this.wrapper) : e(this.wrapper)),
              (this.viewFrom = this.viewTo = t.first),
              (this.reportedViewFrom = this.reportedViewTo = t.first),
              (this.view = []),
              (this.renderedView = null),
              (this.externalMeasured = null),
              (this.viewOffset = 0),
              (this.lastWrapHeight = this.lastWrapWidth = 0),
              (this.updateLineNumbers = null),
              (this.nativeBarWidth = this.barHeight = this.barWidth = 0),
              (this.scrollbarsClipped = !1),
              (this.lineNumWidth = this.lineNumInnerWidth = this.lineNumChars = null),
              (this.alignWidgets = !1),
              (this.cachedCharWidth = this.cachedTextHeight = this.cachedPaddingH = null),
              (this.maxLine = null),
              (this.maxLineLength = 0),
              (this.maxLineChanged = !1),
              (this.wheelDX = this.wheelDY = this.wheelStartX = this.wheelStartY = null),
              (this.shift = !1),
              (this.selForContextMenu = null),
              (this.activeTouch = null),
              n.init(this)
          }(e, o, i))
        ;(c.wrapper.CodeMirror = this),
          updateGutters(this),
          themeChanged(this),
          t.lineWrapping &&
            (this.display.wrapper.className += " CodeMirror-wrap"),
          initScrollbars(this),
          (this.state = {
            keyMaps: [],
            overlays: [],
            modeGen: 0,
            overwrite: !1,
            delayingBlurEvent: !1,
            focused: !1,
            suppressEdits: !1,
            pasteIncoming: !1,
            cutIncoming: !1,
            selectingText: !1,
            draggingText: !1,
            highlight: new T(),
            keySeq: null,
            specialChars: null,
          }),
          t.autofocus && !v && c.input.focus(),
          s &&
            a < 11 &&
            setTimeout(function() {
              return n.display.input.reset(!0)
            }, 20),
          (function registerEventHandlers(e) {
            var t = e.display
            j(t.scroller, "mousedown", operation(e, onMouseDown)),
              j(
                t.scroller,
                "dblclick",
                s && a < 11
                  ? operation(e, function(t) {
                      if (!signalDOMEvent(e, t)) {
                        var r = posFromMouse(e, t)
                        if (
                          r &&
                          !clickInGutter(e, t) &&
                          !eventInWidget(e.display, t)
                        ) {
                          e_preventDefault(t)
                          var n = e.findWordAt(r)
                          extendSelection(e.doc, n.anchor, n.head)
                        }
                      }
                    })
                  : function(t) {
                      return signalDOMEvent(e, t) || e_preventDefault(t)
                    }
              )
            S ||
              j(t.scroller, "contextmenu", function(t) {
                return onContextMenu(e, t)
              })
            var r,
              n = { end: 0 }
            function finishTouch() {
              t.activeTouch &&
                ((r = setTimeout(function() {
                  return (t.activeTouch = null)
                }, 1e3)),
                ((n = t.activeTouch).end = +new Date()))
            }
            function farAway(e, t) {
              if (null == t.left) return !0
              var r = t.left - e.left,
                n = t.top - e.top
              return r * r + n * n > 400
            }
            j(t.scroller, "touchstart", function(o) {
              if (
                !signalDOMEvent(e, o) &&
                !(function isMouseLikeTouchEvent(e) {
                  if (1 != e.touches.length) return !1
                  var t = e.touches[0]
                  return t.radiusX <= 1 && t.radiusY <= 1
                })(o) &&
                !clickInGutter(e, o)
              ) {
                t.input.ensurePolled(), clearTimeout(r)
                var i = +new Date()
                ;(t.activeTouch = {
                  start: i,
                  moved: !1,
                  prev: i - n.end <= 300 ? n : null,
                }),
                  1 == o.touches.length &&
                    ((t.activeTouch.left = o.touches[0].pageX),
                    (t.activeTouch.top = o.touches[0].pageY))
              }
            }),
              j(t.scroller, "touchmove", function() {
                t.activeTouch && (t.activeTouch.moved = !0)
              }),
              j(t.scroller, "touchend", function(r) {
                var n = t.activeTouch
                if (
                  n &&
                  !eventInWidget(t, r) &&
                  null != n.left &&
                  !n.moved &&
                  new Date() - n.start < 300
                ) {
                  var o,
                    i = e.coordsChar(t.activeTouch, "page")
                  ;(o =
                    !n.prev || farAway(n, n.prev)
                      ? new ve(i, i)
                      : !n.prev.prev || farAway(n, n.prev.prev)
                        ? e.findWordAt(i)
                        : new ve(
                            Pos(i.line, 0),
                            clipPos(e.doc, Pos(i.line + 1, 0))
                          )),
                    e.setSelection(o.anchor, o.head),
                    e.focus(),
                    e_preventDefault(r)
                }
                finishTouch()
              }),
              j(t.scroller, "touchcancel", finishTouch),
              j(t.scroller, "scroll", function() {
                t.scroller.clientHeight &&
                  (updateScrollTop(e, t.scroller.scrollTop),
                  setScrollLeft(e, t.scroller.scrollLeft, !0),
                  signal(e, "scroll", e))
              }),
              j(t.scroller, "mousewheel", function(t) {
                return onScrollWheel(e, t)
              }),
              j(t.scroller, "DOMMouseScroll", function(t) {
                return onScrollWheel(e, t)
              }),
              j(t.wrapper, "scroll", function() {
                return (t.wrapper.scrollTop = t.wrapper.scrollLeft = 0)
              }),
              (t.dragFunctions = {
                enter: function(t) {
                  signalDOMEvent(e, t) || e_stop(t)
                },
                over: function(t) {
                  signalDOMEvent(e, t) ||
                    (!(function onDragOver(e, t) {
                      var r = posFromMouse(e, t)
                      if (r) {
                        var n = document.createDocumentFragment()
                        drawSelectionCursor(e, r, n),
                          e.display.dragCursor ||
                            ((e.display.dragCursor = elt(
                              "div",
                              null,
                              "CodeMirror-cursors CodeMirror-dragcursors"
                            )),
                            e.display.lineSpace.insertBefore(
                              e.display.dragCursor,
                              e.display.cursorDiv
                            )),
                          removeChildrenAndAdd(e.display.dragCursor, n)
                      }
                    })(e, t),
                    e_stop(t))
                },
                start: function(t) {
                  return (function onDragStart(e, t) {
                    if (s && (!e.state.draggingText || +new Date() - ke < 100))
                      e_stop(t)
                    else if (
                      !signalDOMEvent(e, t) &&
                      !eventInWidget(e.display, t) &&
                      (t.dataTransfer.setData("Text", e.getSelection()),
                      (t.dataTransfer.effectAllowed = "copyMove"),
                      t.dataTransfer.setDragImage && !p)
                    ) {
                      var r = elt(
                        "img",
                        null,
                        null,
                        "position: fixed; left: 0; top: 0;"
                      )
                      ;(r.src =
                        "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="),
                        d &&
                          ((r.width = r.height = 1),
                          e.display.wrapper.appendChild(r),
                          (r._top = r.offsetTop)),
                        t.dataTransfer.setDragImage(r, 0, 0),
                        d && r.parentNode.removeChild(r)
                    }
                  })(e, t)
                },
                drop: operation(e, onDrop),
                leave: function(t) {
                  signalDOMEvent(e, t) || clearDragCursor(e)
                },
              })
            var o = t.input.getField()
            j(o, "keyup", function(t) {
              return onKeyUp.call(e, t)
            }),
              j(o, "keydown", operation(e, onKeyDown)),
              j(o, "keypress", operation(e, onKeyPress)),
              j(o, "focus", function(t) {
                return onFocus(e, t)
              }),
              j(o, "blur", function(t) {
                return onBlur(e, t)
              })
          })(this),
          ensureGlobalHandlers(),
          startOperation(this),
          (this.curOp.forceUpdate = !0),
          attachDoc(this, o),
          (t.autofocus && !v) || this.hasFocus()
            ? setTimeout(bind(onFocus, this), 20)
            : onBlur(this)
        for (var u in ze) ze.hasOwnProperty(u) && ze[u](n, t[u], Fe)
        maybeUpdateLineNumberWidth(this), t.finishInit && t.finishInit(this)
        for (var h = 0; h < Re.length; ++h) Re[h](n)
        endOperation(this),
          l &&
            t.lineWrapping &&
            "optimizelegibility" == getComputedStyle(c.lineDiv).textRendering &&
            (c.lineDiv.style.textRendering = "auto")
      }
      ;(CodeMirror$1.defaults = Be), (CodeMirror$1.optionHandlers = ze)
      var Re = []
      CodeMirror$1.defineInitHook = function(e) {
        return Re.push(e)
      }
      function indentLine(e, t, r, n) {
        var o,
          i = e.doc
        null == r && (r = "add"),
          "smart" == r &&
            (i.mode.indent ? (o = getContextBefore(e, t).state) : (r = "prev"))
        var s = e.options.tabSize,
          a = getLine(i, t),
          l = countColumn(a.text, null, s)
        a.stateAfter && (a.stateAfter = null)
        var c,
          u = a.text.match(/^\s*/)[0]
        if (n || /\S/.test(a.text)) {
          if (
            "smart" == r &&
            ((c = i.mode.indent(o, a.text.slice(u.length), a.text)) == P ||
              c > 150)
          ) {
            if (!n) return
            r = "prev"
          }
        } else (c = 0), (r = "not")
        "prev" == r
          ? (c = t > i.first ? countColumn(getLine(i, t - 1).text, null, s) : 0)
          : "add" == r
            ? (c = l + e.options.indentUnit)
            : "subtract" == r
              ? (c = l - e.options.indentUnit)
              : "number" == typeof r && (c = l + r),
          (c = Math.max(0, c))
        var d = "",
          p = 0
        if (e.options.indentWithTabs)
          for (var h = Math.floor(c / s); h; --h) (p += s), (d += "\t")
        if ((p < c && (d += spaceStr(c - p)), d != u))
          return (
            replaceRange(i, d, Pos(t, 0), Pos(t, u.length), "+input"),
            (a.stateAfter = null),
            !0
          )
        for (var f = 0; f < i.sel.ranges.length; f++) {
          var g = i.sel.ranges[f]
          if (g.head.line == t && g.head.ch < u.length) {
            var m = Pos(t, u.length)
            replaceOneSelection(i, f, new ve(m, m))
            break
          }
        }
      }
      var je = null
      function setLastCopied(e) {
        je = e
      }
      function applyTextInput(e, t, r, n, o) {
        var i = e.doc
        ;(e.display.shift = !1), n || (n = i.sel)
        var s = e.state.pasteIncoming || "paste" == o,
          a = G(t),
          l = null
        if (s && n.ranges.length > 1)
          if (je && je.text.join("\n") == t) {
            if (n.ranges.length % je.text.length == 0) {
              l = []
              for (var c = 0; c < je.text.length; c++)
                l.push(i.splitLines(je.text[c]))
            }
          } else
            a.length == n.ranges.length &&
              e.options.pasteLinesPerSelection &&
              (l = map(a, function(e) {
                return [e]
              }))
        for (var u, d = n.ranges.length - 1; d >= 0; d--) {
          var p = n.ranges[d],
            h = p.from(),
            f = p.to()
          p.empty() &&
            (r && r > 0
              ? (h = Pos(h.line, h.ch - r))
              : e.state.overwrite && !s
                ? (f = Pos(
                    f.line,
                    Math.min(
                      getLine(i, f.line).text.length,
                      f.ch + lst(a).length
                    )
                  ))
                : je &&
                  je.lineWise &&
                  je.text.join("\n") == t &&
                  (h = f = Pos(h.line, 0))),
            (u = e.curOp.updateInput)
          var g = {
            from: h,
            to: f,
            text: l ? l[d % l.length] : a,
            origin: o || (s ? "paste" : e.state.cutIncoming ? "cut" : "+input"),
          }
          makeChange(e.doc, g), signalLater(e, "inputRead", e, g)
        }
        t && !s && triggerElectric(e, t),
          ensureCursorVisible(e),
          (e.curOp.updateInput = u),
          (e.curOp.typing = !0),
          (e.state.pasteIncoming = e.state.cutIncoming = !1)
      }
      function handlePaste(e, t) {
        var r = e.clipboardData && e.clipboardData.getData("Text")
        if (r)
          return (
            e.preventDefault(),
            t.isReadOnly() ||
              t.options.disableInput ||
              runInOp(t, function() {
                return applyTextInput(t, r, 0, null, "paste")
              }),
            !0
          )
      }
      function triggerElectric(e, t) {
        if (e.options.electricChars && e.options.smartIndent)
          for (var r = e.doc.sel, n = r.ranges.length - 1; n >= 0; n--) {
            var o = r.ranges[n]
            if (
              !(
                o.head.ch > 100 ||
                (n && r.ranges[n - 1].head.line == o.head.line)
              )
            ) {
              var i = e.getModeAt(o.head),
                s = !1
              if (i.electricChars) {
                for (var a = 0; a < i.electricChars.length; a++)
                  if (t.indexOf(i.electricChars.charAt(a)) > -1) {
                    s = indentLine(e, o.head.line, "smart")
                    break
                  }
              } else
                i.electricInput &&
                  i.electricInput.test(
                    getLine(e.doc, o.head.line).text.slice(0, o.head.ch)
                  ) &&
                  (s = indentLine(e, o.head.line, "smart"))
              s && signalLater(e, "electricInput", e, o.head.line)
            }
          }
      }
      function copyableRanges(e) {
        for (var t = [], r = [], n = 0; n < e.doc.sel.ranges.length; n++) {
          var o = e.doc.sel.ranges[n].head.line,
            i = { anchor: Pos(o, 0), head: Pos(o + 1, 0) }
          r.push(i), t.push(e.getRange(i.anchor, i.head))
        }
        return { text: t, ranges: r }
      }
      function disableBrowserMagic(e, t) {
        e.setAttribute("autocorrect", "off"),
          e.setAttribute("autocapitalize", "off"),
          e.setAttribute("spellcheck", !!t)
      }
      function hiddenTextarea() {
        var e = elt(
            "textarea",
            null,
            null,
            "position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none"
          ),
          t = elt(
            "div",
            [e],
            null,
            "overflow: hidden; position: relative; width: 3px; height: 0px;"
          )
        return (
          l ? (e.style.width = "1000px") : e.setAttribute("wrap", "off"),
          g && (e.style.border = "1px solid black"),
          disableBrowserMagic(e),
          t
        )
      }
      function findPosH(e, t, r, n, o) {
        var i = t,
          s = r,
          a = getLine(e, t.line)
        function moveOnce(n) {
          var i
          if (
            null ==
            (i = o
              ? (function moveVisually(e, t, r, n) {
                  var o = getOrder(t, e.doc.direction)
                  if (!o) return moveLogically(t, r, n)
                  r.ch >= t.text.length
                    ? ((r.ch = t.text.length), (r.sticky = "before"))
                    : r.ch <= 0 && ((r.ch = 0), (r.sticky = "after"))
                  var i = getBidiPartAt(o, r.ch, r.sticky),
                    s = o[i]
                  if (
                    "ltr" == e.doc.direction &&
                    s.level % 2 == 0 &&
                    (n > 0 ? s.to > r.ch : s.from < r.ch)
                  )
                    return moveLogically(t, r, n)
                  var a,
                    l = function(e, r) {
                      return moveCharLogically(
                        t,
                        e instanceof Pos ? e.ch : e,
                        r
                      )
                    },
                    c = function(r) {
                      return e.options.lineWrapping
                        ? ((a = a || prepareMeasureForLine(e, t)),
                          wrappedLineExtentChar(e, t, a, r))
                        : { begin: 0, end: t.text.length }
                    },
                    u = c("before" == r.sticky ? l(r, -1) : r.ch)
                  if ("rtl" == e.doc.direction || 1 == s.level) {
                    var d = (1 == s.level) == n < 0,
                      p = l(r, d ? 1 : -1)
                    if (
                      null != p &&
                      (d
                        ? p <= s.to && p <= u.end
                        : p >= s.from && p >= u.begin)
                    ) {
                      var h = d ? "before" : "after"
                      return new Pos(r.line, p, h)
                    }
                  }
                  var f = function(e, t, n) {
                      for (
                        var i = function(e, t) {
                          return t
                            ? new Pos(r.line, l(e, 1), "before")
                            : new Pos(r.line, e, "after")
                        };
                        e >= 0 && e < o.length;
                        e += t
                      ) {
                        var s = o[e],
                          a = t > 0 == (1 != s.level),
                          c = a ? n.begin : l(n.end, -1)
                        if (s.from <= c && c < s.to) return i(c, a)
                        if (
                          ((c = a ? s.from : l(s.to, -1)),
                          n.begin <= c && c < n.end)
                        )
                          return i(c, a)
                      }
                    },
                    g = f(i + n, n, u)
                  if (g) return g
                  var m = n > 0 ? u.end : l(u.begin, -1)
                  return null == m ||
                    (n > 0 && m == t.text.length) ||
                    !(g = f(n > 0 ? 0 : o.length - 1, n, c(m)))
                    ? null
                    : g
                })(e.cm, a, t, r)
              : moveLogically(a, t, r))
          ) {
            if (
              n ||
              !(function findNextLine() {
                var n = t.line + r
                return (
                  !(n < e.first || n >= e.first + e.size) &&
                  ((t = new Pos(n, t.ch, t.sticky)), (a = getLine(e, n)))
                )
              })()
            )
              return !1
            t = endOfLine(o, e.cm, a, t.line, r)
          } else t = i
          return !0
        }
        if ("char" == n) moveOnce()
        else if ("column" == n) moveOnce(!0)
        else if ("word" == n || "group" == n)
          for (
            var l = null,
              c = "group" == n,
              u = e.cm && e.cm.getHelper(t, "wordChars"),
              d = !0;
            !(r < 0) || moveOnce(!d);
            d = !1
          ) {
            var p = a.text.charAt(t.ch) || "\n",
              h = isWordChar(p, u)
                ? "w"
                : c && "\n" == p ? "n" : !c || /\s/.test(p) ? null : "p"
            if ((!c || d || h || (h = "s"), l && l != h)) {
              r < 0 && ((r = 1), moveOnce(), (t.sticky = "after"))
              break
            }
            if ((h && (l = h), r > 0 && !moveOnce(!d))) break
          }
        var f = skipAtomic(e, t, i, s, !0)
        return equalCursorPos(i, f) && (f.hitSide = !0), f
      }
      function findPosV(e, t, r, n) {
        var o,
          i = e.doc,
          s = t.left
        if ("page" == n) {
          var a = Math.min(
              e.display.wrapper.clientHeight,
              window.innerHeight || document.documentElement.clientHeight
            ),
            l = Math.max(a - 0.5 * textHeight(e.display), 3)
          o = (r > 0 ? t.bottom : t.top) + r * l
        } else "line" == n && (o = r > 0 ? t.bottom + 3 : t.top - 3)
        for (var c; (c = coordsChar(e, s, o)).outside; ) {
          if (r < 0 ? o <= 0 : o >= i.height) {
            c.hitSide = !0
            break
          }
          o += 5 * r
        }
        return c
      }
      var Ve = function(e) {
        ;(this.cm = e),
          (this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null),
          (this.polling = new T()),
          (this.composing = null),
          (this.gracePeriod = !1),
          (this.readDOMTimeout = null)
      }
      ;(Ve.prototype.init = function(e) {
        var t = this,
          r = this,
          n = r.cm,
          o = (r.div = e.lineDiv)
        disableBrowserMagic(o, n.options.spellcheck),
          j(o, "paste", function(e) {
            signalDOMEvent(n, e) ||
              handlePaste(e, n) ||
              (a <= 11 &&
                setTimeout(
                  operation(n, function() {
                    return t.updateFromDOM()
                  }),
                  20
                ))
          }),
          j(o, "compositionstart", function(e) {
            t.composing = { data: e.data, done: !1 }
          }),
          j(o, "compositionupdate", function(e) {
            t.composing || (t.composing = { data: e.data, done: !1 })
          }),
          j(o, "compositionend", function(e) {
            t.composing &&
              (e.data != t.composing.data && t.readFromDOMSoon(),
              (t.composing.done = !0))
          }),
          j(o, "touchstart", function() {
            return r.forceCompositionEnd()
          }),
          j(o, "input", function() {
            t.composing || t.readFromDOMSoon()
          })
        function onCopyCut(e) {
          if (!signalDOMEvent(n, e)) {
            if (n.somethingSelected())
              setLastCopied({ lineWise: !1, text: n.getSelections() }),
                "cut" == e.type && n.replaceSelection("", null, "cut")
            else {
              if (!n.options.lineWiseCopyCut) return
              var t = copyableRanges(n)
              setLastCopied({ lineWise: !0, text: t.text }),
                "cut" == e.type &&
                  n.operation(function() {
                    n.setSelections(t.ranges, 0, A),
                      n.replaceSelection("", null, "cut")
                  })
            }
            if (e.clipboardData) {
              e.clipboardData.clearData()
              var i = je.text.join("\n")
              if (
                (e.clipboardData.setData("Text", i),
                e.clipboardData.getData("Text") == i)
              )
                return void e.preventDefault()
            }
            var s = hiddenTextarea(),
              a = s.firstChild
            n.display.lineSpace.insertBefore(s, n.display.lineSpace.firstChild),
              (a.value = je.text.join("\n"))
            var l = document.activeElement
            M(a),
              setTimeout(function() {
                n.display.lineSpace.removeChild(s),
                  l.focus(),
                  l == o && r.showPrimarySelection()
              }, 50)
          }
        }
        j(o, "copy", onCopyCut), j(o, "cut", onCopyCut)
      }),
        (Ve.prototype.prepareSelection = function() {
          var e = prepareSelection(this.cm, !1)
          return (e.focus = this.cm.state.focused), e
        }),
        (Ve.prototype.showSelection = function(e, t) {
          e &&
            this.cm.display.view.length &&
            ((e.focus || t) && this.showPrimarySelection(),
            this.showMultipleSelections(e))
        }),
        (Ve.prototype.showPrimarySelection = function() {
          var e = window.getSelection(),
            t = this.cm,
            n = t.doc.sel.primary(),
            o = n.from(),
            i = n.to()
          if (
            t.display.viewTo == t.display.viewFrom ||
            o.line >= t.display.viewTo ||
            i.line < t.display.viewFrom
          )
            e.removeAllRanges()
          else {
            var s = domToPos(t, e.anchorNode, e.anchorOffset),
              a = domToPos(t, e.focusNode, e.focusOffset)
            if (
              !s ||
              s.bad ||
              !a ||
              a.bad ||
              0 != cmp(minPos(s, a), o) ||
              0 != cmp(maxPos(s, a), i)
            ) {
              var l = t.display.view,
                c = (o.line >= t.display.viewFrom && posToDOM(t, o)) || {
                  node: l[0].measure.map[2],
                  offset: 0,
                },
                u = i.line < t.display.viewTo && posToDOM(t, i)
              if (!u) {
                var d = l[l.length - 1].measure,
                  p = d.maps ? d.maps[d.maps.length - 1] : d.map
                u = {
                  node: p[p.length - 1],
                  offset: p[p.length - 2] - p[p.length - 3],
                }
              }
              if (c && u) {
                var h,
                  f = e.rangeCount && e.getRangeAt(0)
                try {
                  h = L(c.node, c.offset, u.offset, u.node)
                } catch (e) {}
                h &&
                  (!r && t.state.focused
                    ? (e.collapse(c.node, c.offset),
                      h.collapsed || (e.removeAllRanges(), e.addRange(h)))
                    : (e.removeAllRanges(), e.addRange(h)),
                  f && null == e.anchorNode
                    ? e.addRange(f)
                    : r && this.startGracePeriod()),
                  this.rememberSelection()
              } else e.removeAllRanges()
            }
          }
        }),
        (Ve.prototype.startGracePeriod = function() {
          var e = this
          clearTimeout(this.gracePeriod),
            (this.gracePeriod = setTimeout(function() {
              ;(e.gracePeriod = !1),
                e.selectionChanged() &&
                  e.cm.operation(function() {
                    return (e.cm.curOp.selectionChanged = !0)
                  })
            }, 20))
        }),
        (Ve.prototype.showMultipleSelections = function(e) {
          removeChildrenAndAdd(this.cm.display.cursorDiv, e.cursors),
            removeChildrenAndAdd(this.cm.display.selectionDiv, e.selection)
        }),
        (Ve.prototype.rememberSelection = function() {
          var e = window.getSelection()
          ;(this.lastAnchorNode = e.anchorNode),
            (this.lastAnchorOffset = e.anchorOffset),
            (this.lastFocusNode = e.focusNode),
            (this.lastFocusOffset = e.focusOffset)
        }),
        (Ve.prototype.selectionInEditor = function() {
          var e = window.getSelection()
          if (!e.rangeCount) return !1
          var t = e.getRangeAt(0).commonAncestorContainer
          return contains(this.div, t)
        }),
        (Ve.prototype.focus = function() {
          "nocursor" != this.cm.options.readOnly &&
            (this.selectionInEditor() ||
              this.showSelection(this.prepareSelection(), !0),
            this.div.focus())
        }),
        (Ve.prototype.blur = function() {
          this.div.blur()
        }),
        (Ve.prototype.getField = function() {
          return this.div
        }),
        (Ve.prototype.supportsTouch = function() {
          return !0
        }),
        (Ve.prototype.receivedFocus = function() {
          var e = this
          this.selectionInEditor()
            ? this.pollSelection()
            : runInOp(this.cm, function() {
                return (e.cm.curOp.selectionChanged = !0)
              })
          this.polling.set(this.cm.options.pollInterval, function poll() {
            e.cm.state.focused &&
              (e.pollSelection(),
              e.polling.set(e.cm.options.pollInterval, poll))
          })
        }),
        (Ve.prototype.selectionChanged = function() {
          var e = window.getSelection()
          return (
            e.anchorNode != this.lastAnchorNode ||
            e.anchorOffset != this.lastAnchorOffset ||
            e.focusNode != this.lastFocusNode ||
            e.focusOffset != this.lastFocusOffset
          )
        }),
        (Ve.prototype.pollSelection = function() {
          if (
            null == this.readDOMTimeout &&
            !this.gracePeriod &&
            this.selectionChanged()
          ) {
            var e = window.getSelection(),
              t = this.cm
            if (
              m &&
              u &&
              this.cm.options.gutters.length &&
              (function isInGutter(e) {
                for (var t = e; t; t = t.parentNode)
                  if (/CodeMirror-gutter-wrapper/.test(t.className)) return !0
                return !1
              })(e.anchorNode)
            )
              return (
                this.cm.triggerOnKeyDown({
                  type: "keydown",
                  keyCode: 8,
                  preventDefault: Math.abs,
                }),
                this.blur(),
                void this.focus()
              )
            if (!this.composing) {
              this.rememberSelection()
              var r = domToPos(t, e.anchorNode, e.anchorOffset),
                n = domToPos(t, e.focusNode, e.focusOffset)
              r &&
                n &&
                runInOp(t, function() {
                  setSelection(t.doc, simpleSelection(r, n), A),
                    (r.bad || n.bad) && (t.curOp.selectionChanged = !0)
                })
            }
          }
        }),
        (Ve.prototype.pollContent = function() {
          null != this.readDOMTimeout &&
            (clearTimeout(this.readDOMTimeout), (this.readDOMTimeout = null))
          var e = this.cm,
            t = e.display,
            r = e.doc.sel.primary(),
            n = r.from(),
            o = r.to()
          if (
            (0 == n.ch &&
              n.line > e.firstLine() &&
              (n = Pos(n.line - 1, getLine(e.doc, n.line - 1).length)),
            o.ch == getLine(e.doc, o.line).text.length &&
              o.line < e.lastLine() &&
              (o = Pos(o.line + 1, 0)),
            n.line < t.viewFrom || o.line > t.viewTo - 1)
          )
            return !1
          var i, s, a
          n.line == t.viewFrom || 0 == (i = findViewIndex(e, n.line))
            ? ((s = lineNo(t.view[0].line)), (a = t.view[0].node))
            : ((s = lineNo(t.view[i].line)),
              (a = t.view[i - 1].node.nextSibling))
          var l,
            c,
            u = findViewIndex(e, o.line)
          if (
            (u == t.view.length - 1
              ? ((l = t.viewTo - 1), (c = t.lineDiv.lastChild))
              : ((l = lineNo(t.view[u + 1].line) - 1),
                (c = t.view[u + 1].node.previousSibling)),
            !a)
          )
            return !1
          for (
            var d = e.doc.splitLines(
                (function domTextBetween(e, t, r, n, o) {
                  var i = "",
                    s = !1,
                    a = e.doc.lineSeparator()
                  function close() {
                    s && ((i += a), (s = !1))
                  }
                  function addText(e) {
                    e && (close(), (i += e))
                  }
                  function walk(t) {
                    if (1 == t.nodeType) {
                      var r = t.getAttribute("cm-text")
                      if (null != r)
                        return void addText(
                          r || t.textContent.replace(/\u200b/g, "")
                        )
                      var i,
                        l = t.getAttribute("cm-marker")
                      if (l) {
                        var c = e.findMarks(
                          Pos(n, 0),
                          Pos(o + 1, 0),
                          (function recognizeMarker(e) {
                            return function(t) {
                              return t.id == e
                            }
                          })(+l)
                        )
                        return void (
                          c.length &&
                          (i = c[0].find(0)) &&
                          addText(getBetween(e.doc, i.from, i.to).join(a))
                        )
                      }
                      if ("false" == t.getAttribute("contenteditable")) return
                      var u = /^(pre|div|p)$/i.test(t.nodeName)
                      u && close()
                      for (var d = 0; d < t.childNodes.length; d++)
                        walk(t.childNodes[d])
                      u && (s = !0)
                    } else 3 == t.nodeType && addText(t.nodeValue)
                  }
                  for (; walk(t), t != r; ) t = t.nextSibling
                  return i
                })(e, a, c, s, l)
              ),
              p = getBetween(
                e.doc,
                Pos(s, 0),
                Pos(l, getLine(e.doc, l).text.length)
              );
            d.length > 1 && p.length > 1;

          )
            if (lst(d) == lst(p)) d.pop(), p.pop(), l--
            else {
              if (d[0] != p[0]) break
              d.shift(), p.shift(), s++
            }
          for (
            var h = 0,
              f = 0,
              g = d[0],
              m = p[0],
              v = Math.min(g.length, m.length);
            h < v && g.charCodeAt(h) == m.charCodeAt(h);

          )
            ++h
          for (
            var y = lst(d),
              b = lst(p),
              C = Math.min(
                y.length - (1 == d.length ? h : 0),
                b.length - (1 == p.length ? h : 0)
              );
            f < C &&
            y.charCodeAt(y.length - f - 1) == b.charCodeAt(b.length - f - 1);

          )
            ++f
          if (1 == d.length && 1 == p.length && s == n.line)
            for (
              ;
              h &&
              h > n.ch &&
              y.charCodeAt(y.length - f - 1) == b.charCodeAt(b.length - f - 1);

            )
              h--, f++
          ;(d[d.length - 1] = y.slice(0, y.length - f).replace(/^\u200b+/, "")),
            (d[0] = d[0].slice(h).replace(/\u200b+$/, ""))
          var x = Pos(s, h),
            w = Pos(l, p.length ? lst(p).length - f : 0)
          return d.length > 1 || d[0] || cmp(x, w)
            ? (replaceRange(e.doc, d, x, w, "+input"), !0)
            : void 0
        }),
        (Ve.prototype.ensurePolled = function() {
          this.forceCompositionEnd()
        }),
        (Ve.prototype.reset = function() {
          this.forceCompositionEnd()
        }),
        (Ve.prototype.forceCompositionEnd = function() {
          this.composing &&
            (clearTimeout(this.readDOMTimeout),
            (this.composing = null),
            this.updateFromDOM(),
            this.div.blur(),
            this.div.focus())
        }),
        (Ve.prototype.readFromDOMSoon = function() {
          var e = this
          null == this.readDOMTimeout &&
            (this.readDOMTimeout = setTimeout(function() {
              if (((e.readDOMTimeout = null), e.composing)) {
                if (!e.composing.done) return
                e.composing = null
              }
              e.updateFromDOM()
            }, 80))
        }),
        (Ve.prototype.updateFromDOM = function() {
          var e = this
          ;(!this.cm.isReadOnly() && this.pollContent()) ||
            runInOp(this.cm, function() {
              return regChange(e.cm)
            })
        }),
        (Ve.prototype.setUneditable = function(e) {
          e.contentEditable = "false"
        }),
        (Ve.prototype.onKeyPress = function(e) {
          0 != e.charCode &&
            (e.preventDefault(),
            this.cm.isReadOnly() ||
              operation(this.cm, applyTextInput)(
                this.cm,
                String.fromCharCode(
                  null == e.charCode ? e.keyCode : e.charCode
                ),
                0
              ))
        }),
        (Ve.prototype.readOnlyChanged = function(e) {
          this.div.contentEditable = String("nocursor" != e)
        }),
        (Ve.prototype.onContextMenu = function() {}),
        (Ve.prototype.resetPosition = function() {}),
        (Ve.prototype.needsContentAttribute = !0)
      function posToDOM(e, t) {
        var r = findViewForLine(e, t.line)
        if (!r || r.hidden) return null
        var n = getLine(e.doc, t.line),
          o = mapFromLineView(r, n, t.line),
          i = getOrder(n, e.doc.direction),
          s = "left"
        if (i) {
          s = getBidiPartAt(i, t.ch) % 2 ? "right" : "left"
        }
        var a = nodeAndOffsetInLineMap(o.map, t.ch, s)
        return (a.offset = "right" == a.collapse ? a.end : a.start), a
      }
      function badPos(e, t) {
        return t && (e.bad = !0), e
      }
      function domToPos(e, t, r) {
        var n
        if (t == e.display.lineDiv) {
          if (!(n = e.display.lineDiv.childNodes[r]))
            return badPos(e.clipPos(Pos(e.display.viewTo - 1)), !0)
          ;(t = null), (r = 0)
        } else
          for (n = t; ; n = n.parentNode) {
            if (!n || n == e.display.lineDiv) return null
            if (n.parentNode && n.parentNode == e.display.lineDiv) break
          }
        for (var o = 0; o < e.display.view.length; o++) {
          var i = e.display.view[o]
          if (i.node == n) return locateNodeInLineView(i, t, r)
        }
      }
      function locateNodeInLineView(e, t, r) {
        var n = e.text.firstChild,
          o = !1
        if (!t || !contains(n, t)) return badPos(Pos(lineNo(e.line), 0), !0)
        if (t == n && ((o = !0), (t = n.childNodes[r]), (r = 0), !t)) {
          var i = e.rest ? lst(e.rest) : e.line
          return badPos(Pos(lineNo(i), i.text.length), o)
        }
        var s = 3 == t.nodeType ? t : null,
          a = t
        for (
          s ||
          1 != t.childNodes.length ||
          3 != t.firstChild.nodeType ||
          ((s = t.firstChild), r && (r = s.nodeValue.length));
          a.parentNode != n;

        )
          a = a.parentNode
        var l = e.measure,
          c = l.maps
        function find(t, r, n) {
          for (var o = -1; o < (c ? c.length : 0); o++)
            for (var i = o < 0 ? l.map : c[o], s = 0; s < i.length; s += 3) {
              var a = i[s + 2]
              if (a == t || a == r) {
                var u = lineNo(o < 0 ? e.line : e.rest[o]),
                  d = i[s] + n
                return (n < 0 || a != t) && (d = i[s + (n ? 1 : 0)]), Pos(u, d)
              }
            }
        }
        var u = find(s, a, r)
        if (u) return badPos(u, o)
        for (
          var d = a.nextSibling, p = s ? s.nodeValue.length - r : 0;
          d;
          d = d.nextSibling
        ) {
          if ((u = find(d, d.firstChild, 0)))
            return badPos(Pos(u.line, u.ch - p), o)
          p += d.textContent.length
        }
        for (var h = a.previousSibling, f = r; h; h = h.previousSibling) {
          if ((u = find(h, h.firstChild, -1)))
            return badPos(Pos(u.line, u.ch + f), o)
          f += h.textContent.length
        }
      }
      var _e = function(e) {
        ;(this.cm = e),
          (this.prevInput = ""),
          (this.pollingFast = !1),
          (this.polling = new T()),
          (this.hasSelection = !1),
          (this.composing = null)
      }
      ;(_e.prototype.init = function(e) {
        var t = this,
          r = this,
          n = this.cm,
          o = (this.wrapper = hiddenTextarea()),
          i = (this.textarea = o.firstChild)
        e.wrapper.insertBefore(o, e.wrapper.firstChild),
          g && (i.style.width = "0px"),
          j(i, "input", function() {
            s && a >= 9 && t.hasSelection && (t.hasSelection = null), r.poll()
          }),
          j(i, "paste", function(e) {
            signalDOMEvent(n, e) ||
              handlePaste(e, n) ||
              ((n.state.pasteIncoming = !0), r.fastPoll())
          })
        function prepareCopyCut(e) {
          if (!signalDOMEvent(n, e)) {
            if (n.somethingSelected())
              setLastCopied({ lineWise: !1, text: n.getSelections() })
            else {
              if (!n.options.lineWiseCopyCut) return
              var t = copyableRanges(n)
              setLastCopied({ lineWise: !0, text: t.text }),
                "cut" == e.type
                  ? n.setSelections(t.ranges, null, A)
                  : ((r.prevInput = ""), (i.value = t.text.join("\n")), M(i))
            }
            "cut" == e.type && (n.state.cutIncoming = !0)
          }
        }
        j(i, "cut", prepareCopyCut),
          j(i, "copy", prepareCopyCut),
          j(e.scroller, "paste", function(t) {
            eventInWidget(e, t) ||
              signalDOMEvent(n, t) ||
              ((n.state.pasteIncoming = !0), r.focus())
          }),
          j(e.lineSpace, "selectstart", function(t) {
            eventInWidget(e, t) || e_preventDefault(t)
          }),
          j(i, "compositionstart", function() {
            var e = n.getCursor("from")
            r.composing && r.composing.range.clear(),
              (r.composing = {
                start: e,
                range: n.markText(e, n.getCursor("to"), {
                  className: "CodeMirror-composing",
                }),
              })
          }),
          j(i, "compositionend", function() {
            r.composing &&
              (r.poll(), r.composing.range.clear(), (r.composing = null))
          })
      }),
        (_e.prototype.prepareSelection = function() {
          var e = this.cm,
            t = e.display,
            r = e.doc,
            n = prepareSelection(e)
          if (e.options.moveInputWithCursor) {
            var o = cursorCoords(e, r.sel.primary().head, "div"),
              i = t.wrapper.getBoundingClientRect(),
              s = t.lineDiv.getBoundingClientRect()
            ;(n.teTop = Math.max(
              0,
              Math.min(t.wrapper.clientHeight - 10, o.top + s.top - i.top)
            )),
              (n.teLeft = Math.max(
                0,
                Math.min(t.wrapper.clientWidth - 10, o.left + s.left - i.left)
              ))
          }
          return n
        }),
        (_e.prototype.showSelection = function(e) {
          var t = this.cm.display
          removeChildrenAndAdd(t.cursorDiv, e.cursors),
            removeChildrenAndAdd(t.selectionDiv, e.selection),
            null != e.teTop &&
              ((this.wrapper.style.top = e.teTop + "px"),
              (this.wrapper.style.left = e.teLeft + "px"))
        }),
        (_e.prototype.reset = function(e) {
          if (!this.contextMenuPending && !this.composing) {
            var t = this.cm
            if (t.somethingSelected()) {
              this.prevInput = ""
              var r = t.getSelection()
              ;(this.textarea.value = r),
                t.state.focused && M(this.textarea),
                s && a >= 9 && (this.hasSelection = r)
            } else
              e ||
                ((this.prevInput = this.textarea.value = ""),
                s && a >= 9 && (this.hasSelection = null))
          }
        }),
        (_e.prototype.getField = function() {
          return this.textarea
        }),
        (_e.prototype.supportsTouch = function() {
          return !1
        }),
        (_e.prototype.focus = function() {
          if (
            "nocursor" != this.cm.options.readOnly &&
            (!v || activeElt() != this.textarea)
          )
            try {
              this.textarea.focus()
            } catch (e) {}
        }),
        (_e.prototype.blur = function() {
          this.textarea.blur()
        }),
        (_e.prototype.resetPosition = function() {
          this.wrapper.style.top = this.wrapper.style.left = 0
        }),
        (_e.prototype.receivedFocus = function() {
          this.slowPoll()
        }),
        (_e.prototype.slowPoll = function() {
          var e = this
          this.pollingFast ||
            this.polling.set(this.cm.options.pollInterval, function() {
              e.poll(), e.cm.state.focused && e.slowPoll()
            })
        }),
        (_e.prototype.fastPoll = function() {
          var e = !1,
            t = this
          t.pollingFast = !0
          t.polling.set(20, function p() {
            t.poll() || e
              ? ((t.pollingFast = !1), t.slowPoll())
              : ((e = !0), t.polling.set(60, p))
          })
        }),
        (_e.prototype.poll = function() {
          var e = this,
            t = this.cm,
            r = this.textarea,
            n = this.prevInput
          if (
            this.contextMenuPending ||
            !t.state.focused ||
            (K(r) && !n && !this.composing) ||
            t.isReadOnly() ||
            t.options.disableInput ||
            t.state.keySeq
          )
            return !1
          var o = r.value
          if (o == n && !t.somethingSelected()) return !1
          if (
            (s && a >= 9 && this.hasSelection === o) ||
            (y && /[\uf700-\uf7ff]/.test(o))
          )
            return t.display.input.reset(), !1
          if (t.doc.sel == t.display.selForContextMenu) {
            var i = o.charCodeAt(0)
            if ((8203 != i || n || (n = "​"), 8666 == i))
              return this.reset(), this.cm.execCommand("undo")
          }
          for (
            var l = 0, c = Math.min(n.length, o.length);
            l < c && n.charCodeAt(l) == o.charCodeAt(l);

          )
            ++l
          return (
            runInOp(t, function() {
              applyTextInput(
                t,
                o.slice(l),
                n.length - l,
                null,
                e.composing ? "*compose" : null
              ),
                o.length > 1e3 || o.indexOf("\n") > -1
                  ? (r.value = e.prevInput = "")
                  : (e.prevInput = o),
                e.composing &&
                  (e.composing.range.clear(),
                  (e.composing.range = t.markText(
                    e.composing.start,
                    t.getCursor("to"),
                    { className: "CodeMirror-composing" }
                  )))
            }),
            !0
          )
        }),
        (_e.prototype.ensurePolled = function() {
          this.pollingFast && this.poll() && (this.pollingFast = !1)
        }),
        (_e.prototype.onKeyPress = function() {
          s && a >= 9 && (this.hasSelection = null), this.fastPoll()
        }),
        (_e.prototype.onContextMenu = function(e) {
          var t = this,
            r = t.cm,
            n = r.display,
            o = t.textarea,
            i = posFromMouse(r, e),
            c = n.scroller.scrollTop
          if (i && !d) {
            r.options.resetSelectionOnContextMenu &&
              -1 == r.doc.sel.contains(i) &&
              operation(r, setSelection)(r.doc, simpleSelection(i), A)
            var u = o.style.cssText,
              p = t.wrapper.style.cssText
            t.wrapper.style.cssText = "position: absolute"
            var h = t.wrapper.getBoundingClientRect()
            o.style.cssText =
              "position: absolute; width: 30px; height: 30px;\n      top: " +
              (e.clientY - h.top - 5) +
              "px; left: " +
              (e.clientX - h.left - 5) +
              "px;\n      z-index: 1000; background: " +
              (s ? "rgba(255, 255, 255, .05)" : "transparent") +
              ";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);"
            var f
            if (
              (l && (f = window.scrollY),
              n.input.focus(),
              l && window.scrollTo(null, f),
              n.input.reset(),
              r.somethingSelected() || (o.value = t.prevInput = " "),
              (t.contextMenuPending = !0),
              (n.selForContextMenu = r.doc.sel),
              clearTimeout(n.detectingSelectAll),
              s && a >= 9 && prepareSelectAllHack(),
              S)
            ) {
              e_stop(e)
              var g = function() {
                off(window, "mouseup", g), setTimeout(rehide, 20)
              }
              j(window, "mouseup", g)
            } else setTimeout(rehide, 50)
          }
          function prepareSelectAllHack() {
            if (null != o.selectionStart) {
              var e = r.somethingSelected(),
                i = "​" + (e ? o.value : "")
              ;(o.value = "⇚"),
                (o.value = i),
                (t.prevInput = e ? "" : "​"),
                (o.selectionStart = 1),
                (o.selectionEnd = i.length),
                (n.selForContextMenu = r.doc.sel)
            }
          }
          function rehide() {
            if (
              ((t.contextMenuPending = !1),
              (t.wrapper.style.cssText = p),
              (o.style.cssText = u),
              s &&
                a < 9 &&
                n.scrollbars.setScrollTop((n.scroller.scrollTop = c)),
              null != o.selectionStart)
            ) {
              ;(!s || (s && a < 9)) && prepareSelectAllHack()
              var e = 0,
                i = function() {
                  n.selForContextMenu == r.doc.sel &&
                  0 == o.selectionStart &&
                  o.selectionEnd > 0 &&
                  "​" == t.prevInput
                    ? operation(r, selectAll)(r)
                    : e++ < 10
                      ? (n.detectingSelectAll = setTimeout(i, 500))
                      : ((n.selForContextMenu = null), n.input.reset())
                }
              n.detectingSelectAll = setTimeout(i, 200)
            }
          }
        }),
        (_e.prototype.readOnlyChanged = function(e) {
          e || this.reset(), (this.textarea.disabled = "nocursor" == e)
        }),
        (_e.prototype.setUneditable = function() {}),
        (_e.prototype.needsContentAttribute = !1)
      !(function defineOptions(e) {
        var t = e.optionHandlers
        function option(r, n, o, i) {
          ;(e.defaults[r] = n),
            o &&
              (t[r] = i
                ? function(e, t, r) {
                    r != Fe && o(e, t, r)
                  }
                : o)
        }
        ;(e.defineOption = option),
          (e.Init = Fe),
          option(
            "value",
            "",
            function(e, t) {
              return e.setValue(t)
            },
            !0
          ),
          option(
            "mode",
            null,
            function(e, t) {
              ;(e.doc.modeOption = t), loadMode(e)
            },
            !0
          ),
          option("indentUnit", 2, loadMode, !0),
          option("indentWithTabs", !1),
          option("smartIndent", !0),
          option(
            "tabSize",
            4,
            function(e) {
              resetModeState(e), clearCaches(e), regChange(e)
            },
            !0
          ),
          option("lineSeparator", null, function(e, t) {
            if (((e.doc.lineSep = t), t)) {
              var r = [],
                n = e.doc.first
              e.doc.iter(function(e) {
                for (var o = 0; ; ) {
                  var i = e.text.indexOf(t, o)
                  if (-1 == i) break
                  ;(o = i + t.length), r.push(Pos(n, i))
                }
                n++
              })
              for (var o = r.length - 1; o >= 0; o--)
                replaceRange(e.doc, t, r[o], Pos(r[o].line, r[o].ch + t.length))
            }
          }),
          option(
            "specialChars",
            /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b-\u200f\u2028\u2029\ufeff]/g,
            function(e, t, r) {
              ;(e.state.specialChars = new RegExp(
                t.source + (t.test("\t") ? "" : "|\t"),
                "g"
              )),
                r != Fe && e.refresh()
            }
          ),
          option(
            "specialCharPlaceholder",
            defaultSpecialCharPlaceholder,
            function(e) {
              return e.refresh()
            },
            !0
          ),
          option("electricChars", !0),
          option(
            "inputStyle",
            v ? "contenteditable" : "textarea",
            function() {
              throw new Error(
                "inputStyle can not (yet) be changed in a running editor"
              )
            },
            !0
          ),
          option(
            "spellcheck",
            !1,
            function(e, t) {
              return (e.getInputField().spellcheck = t)
            },
            !0
          ),
          option("rtlMoveVisually", !C),
          option("wholeLineUpdateBefore", !0),
          option(
            "theme",
            "default",
            function(e) {
              themeChanged(e), guttersChanged(e)
            },
            !0
          ),
          option("keyMap", "default", function(e, t, r) {
            var n = getKeyMap(t),
              o = r != Fe && getKeyMap(r)
            o && o.detach && o.detach(e, n), n.attach && n.attach(e, o || null)
          }),
          option("extraKeys", null),
          option("configureMouse", null),
          option("lineWrapping", !1, wrappingChanged, !0),
          option(
            "gutters",
            [],
            function(e) {
              setGuttersForLineNumbers(e.options), guttersChanged(e)
            },
            !0
          ),
          option(
            "fixedGutter",
            !0,
            function(e, t) {
              ;(e.display.gutters.style.left = t
                ? compensateForHScroll(e.display) + "px"
                : "0"),
                e.refresh()
            },
            !0
          ),
          option(
            "coverGutterNextToScrollbar",
            !1,
            function(e) {
              return updateScrollbars(e)
            },
            !0
          ),
          option(
            "scrollbarStyle",
            "native",
            function(e) {
              initScrollbars(e),
                updateScrollbars(e),
                e.display.scrollbars.setScrollTop(e.doc.scrollTop),
                e.display.scrollbars.setScrollLeft(e.doc.scrollLeft)
            },
            !0
          ),
          option(
            "lineNumbers",
            !1,
            function(e) {
              setGuttersForLineNumbers(e.options), guttersChanged(e)
            },
            !0
          ),
          option("firstLineNumber", 1, guttersChanged, !0),
          option(
            "lineNumberFormatter",
            function(e) {
              return e
            },
            guttersChanged,
            !0
          ),
          option("showCursorWhenSelecting", !1, updateSelection, !0),
          option("resetSelectionOnContextMenu", !0),
          option("lineWiseCopyCut", !0),
          option("pasteLinesPerSelection", !0),
          option("readOnly", !1, function(e, t) {
            "nocursor" == t && (onBlur(e), e.display.input.blur()),
              e.display.input.readOnlyChanged(t)
          }),
          option(
            "disableInput",
            !1,
            function(e, t) {
              t || e.display.input.reset()
            },
            !0
          ),
          option("dragDrop", !0, dragDropChanged),
          option("allowDropFileTypes", null),
          option("cursorBlinkRate", 530),
          option("cursorScrollMargin", 0),
          option("cursorHeight", 1, updateSelection, !0),
          option("singleCursorHeightPerLine", !0, updateSelection, !0),
          option("workTime", 100),
          option("workDelay", 100),
          option("flattenSpans", !0, resetModeState, !0),
          option("addModeClass", !1, resetModeState, !0),
          option("pollInterval", 100),
          option("undoDepth", 200, function(e, t) {
            return (e.doc.history.undoDepth = t)
          }),
          option("historyEventDelay", 1250),
          option(
            "viewportMargin",
            10,
            function(e) {
              return e.refresh()
            },
            !0
          ),
          option("maxHighlightLength", 1e4, resetModeState, !0),
          option("moveInputWithCursor", !0, function(e, t) {
            t || e.display.input.resetPosition()
          }),
          option("tabindex", null, function(e, t) {
            return (e.display.input.getField().tabIndex = t || "")
          }),
          option("autofocus", null),
          option(
            "direction",
            "ltr",
            function(e, t) {
              return e.doc.setDirection(t)
            },
            !0
          )
      })(CodeMirror$1),
        (function(e) {
          var t = e.optionHandlers,
            r = (e.helpers = {})
          ;(e.prototype = {
            constructor: e,
            focus: function() {
              window.focus(), this.display.input.focus()
            },
            setOption: function(e, r) {
              var n = this.options,
                o = n[e]
              ;(n[e] == r && "mode" != e) ||
                ((n[e] = r),
                t.hasOwnProperty(e) && operation(this, t[e])(this, r, o),
                signal(this, "optionChange", this, e))
            },
            getOption: function(e) {
              return this.options[e]
            },
            getDoc: function() {
              return this.doc
            },
            addKeyMap: function(e, t) {
              this.state.keyMaps[t ? "push" : "unshift"](getKeyMap(e))
            },
            removeKeyMap: function(e) {
              for (var t = this.state.keyMaps, r = 0; r < t.length; ++r)
                if (t[r] == e || t[r].name == e) return t.splice(r, 1), !0
            },
            addOverlay: methodOp(function(t, r) {
              var n = t.token ? t : e.getMode(this.options, t)
              if (n.startState) throw new Error("Overlays may not be stateful.")
              !(function insertSorted(e, t, r) {
                for (var n = 0, o = r(t); n < e.length && r(e[n]) <= o; ) n++
                e.splice(n, 0, t)
              })(
                this.state.overlays,
                {
                  mode: n,
                  modeSpec: t,
                  opaque: r && r.opaque,
                  priority: (r && r.priority) || 0,
                },
                function(e) {
                  return e.priority
                }
              ),
                this.state.modeGen++,
                regChange(this)
            }),
            removeOverlay: methodOp(function(e) {
              for (var t = this.state.overlays, r = 0; r < t.length; ++r) {
                var n = t[r].modeSpec
                if (n == e || ("string" == typeof e && n.name == e))
                  return (
                    t.splice(r, 1), this.state.modeGen++, void regChange(this)
                  )
              }
            }),
            indentLine: methodOp(function(e, t, r) {
              "string" != typeof t &&
                "number" != typeof t &&
                (t =
                  null == t
                    ? this.options.smartIndent ? "smart" : "prev"
                    : t ? "add" : "subtract"),
                isLine(this.doc, e) && indentLine(this, e, t, r)
            }),
            indentSelection: methodOp(function(e) {
              for (
                var t = this.doc.sel.ranges, r = -1, n = 0;
                n < t.length;
                n++
              ) {
                var o = t[n]
                if (o.empty())
                  o.head.line > r &&
                    (indentLine(this, o.head.line, e, !0),
                    (r = o.head.line),
                    n == this.doc.sel.primIndex && ensureCursorVisible(this))
                else {
                  var i = o.from(),
                    s = o.to(),
                    a = Math.max(r, i.line)
                  r = Math.min(this.lastLine(), s.line - (s.ch ? 0 : 1)) + 1
                  for (var l = a; l < r; ++l) indentLine(this, l, e)
                  var c = this.doc.sel.ranges
                  0 == i.ch &&
                    t.length == c.length &&
                    c[n].from().ch > 0 &&
                    replaceOneSelection(this.doc, n, new ve(i, c[n].to()), A)
                }
              }
            }),
            getTokenAt: function(e, t) {
              return takeToken(this, e, t)
            },
            getLineTokens: function(e, t) {
              return takeToken(this, Pos(e), t, !0)
            },
            getTokenTypeAt: function(e) {
              e = clipPos(this.doc, e)
              var t,
                r = getLineStyles(this, getLine(this.doc, e.line)),
                n = 0,
                o = (r.length - 1) / 2,
                i = e.ch
              if (0 == i) t = r[2]
              else
                for (;;) {
                  var s = (n + o) >> 1
                  if ((s ? r[2 * s - 1] : 0) >= i) o = s
                  else {
                    if (!(r[2 * s + 1] < i)) {
                      t = r[2 * s + 2]
                      break
                    }
                    n = s + 1
                  }
                }
              var a = t ? t.indexOf("overlay ") : -1
              return a < 0 ? t : 0 == a ? null : t.slice(0, a - 1)
            },
            getModeAt: function(t) {
              var r = this.doc.mode
              return r.innerMode
                ? e.innerMode(r, this.getTokenAt(t).state).mode
                : r
            },
            getHelper: function(e, t) {
              return this.getHelpers(e, t)[0]
            },
            getHelpers: function(e, t) {
              var n = []
              if (!r.hasOwnProperty(t)) return n
              var o = r[t],
                i = this.getModeAt(e)
              if ("string" == typeof i[t]) o[i[t]] && n.push(o[i[t]])
              else if (i[t])
                for (var s = 0; s < i[t].length; s++) {
                  var a = o[i[t][s]]
                  a && n.push(a)
                }
              else
                i.helperType && o[i.helperType]
                  ? n.push(o[i.helperType])
                  : o[i.name] && n.push(o[i.name])
              for (var l = 0; l < o._global.length; l++) {
                var c = o._global[l]
                c.pred(i, this) && -1 == indexOf(n, c.val) && n.push(c.val)
              }
              return n
            },
            getStateAfter: function(e, t) {
              var r = this.doc
              return getContextBefore(
                this,
                (e = clipLine(r, null == e ? r.first + r.size - 1 : e)) + 1,
                t
              ).state
            },
            cursorCoords: function(e, t) {
              var r = this.doc.sel.primary()
              return cursorCoords(
                this,
                null == e
                  ? r.head
                  : "object" == typeof e
                    ? clipPos(this.doc, e)
                    : e ? r.from() : r.to(),
                t || "page"
              )
            },
            charCoords: function(e, t) {
              return charCoords(this, clipPos(this.doc, e), t || "page")
            },
            coordsChar: function(e, t) {
              return coordsChar(
                this,
                (e = fromCoordSystem(this, e, t || "page")).left,
                e.top
              )
            },
            lineAtHeight: function(e, t) {
              return (
                (e = fromCoordSystem(this, { top: e, left: 0 }, t || "page")
                  .top),
                lineAtHeight(this.doc, e + this.display.viewOffset)
              )
            },
            heightAtLine: function(e, t, r) {
              var n,
                o = !1
              if ("number" == typeof e) {
                var i = this.doc.first + this.doc.size - 1
                e < this.doc.first
                  ? (e = this.doc.first)
                  : e > i && ((e = i), (o = !0)),
                  (n = getLine(this.doc, e))
              } else n = e
              return (
                intoCoordSystem(
                  this,
                  n,
                  { top: 0, left: 0 },
                  t || "page",
                  r || o
                ).top + (o ? this.doc.height - heightAtLine(n) : 0)
              )
            },
            defaultTextHeight: function() {
              return textHeight(this.display)
            },
            defaultCharWidth: function() {
              return charWidth(this.display)
            },
            getViewport: function() {
              return { from: this.display.viewFrom, to: this.display.viewTo }
            },
            addWidget: function(e, t, r, n, o) {
              var i = this.display,
                s = (e = cursorCoords(this, clipPos(this.doc, e))).bottom,
                a = e.left
              if (
                ((t.style.position = "absolute"),
                t.setAttribute("cm-ignore-events", "true"),
                this.display.input.setUneditable(t),
                i.sizer.appendChild(t),
                "over" == n)
              )
                s = e.top
              else if ("above" == n || "near" == n) {
                var l = Math.max(i.wrapper.clientHeight, this.doc.height),
                  c = Math.max(i.sizer.clientWidth, i.lineSpace.clientWidth)
                ;("above" == n || e.bottom + t.offsetHeight > l) &&
                e.top > t.offsetHeight
                  ? (s = e.top - t.offsetHeight)
                  : e.bottom + t.offsetHeight <= l && (s = e.bottom),
                  a + t.offsetWidth > c && (a = c - t.offsetWidth)
              }
              ;(t.style.top = s + "px"),
                (t.style.left = t.style.right = ""),
                "right" == o
                  ? ((a = i.sizer.clientWidth - t.offsetWidth),
                    (t.style.right = "0px"))
                  : ("left" == o
                      ? (a = 0)
                      : "middle" == o &&
                        (a = (i.sizer.clientWidth - t.offsetWidth) / 2),
                    (t.style.left = a + "px")),
                r &&
                  (function scrollIntoView(e, t) {
                    var r = calculateScrollPos(e, t)
                    null != r.scrollTop && updateScrollTop(e, r.scrollTop),
                      null != r.scrollLeft && setScrollLeft(e, r.scrollLeft)
                  })(this, {
                    left: a,
                    top: s,
                    right: a + t.offsetWidth,
                    bottom: s + t.offsetHeight,
                  })
            },
            triggerOnKeyDown: methodOp(onKeyDown),
            triggerOnKeyPress: methodOp(onKeyPress),
            triggerOnKeyUp: onKeyUp,
            triggerOnMouseDown: methodOp(onMouseDown),
            execCommand: function(e) {
              if (Ne.hasOwnProperty(e)) return Ne[e].call(null, this)
            },
            triggerElectric: methodOp(function(e) {
              triggerElectric(this, e)
            }),
            findPosH: function(e, t, r, n) {
              var o = 1
              t < 0 && ((o = -1), (t = -t))
              for (
                var i = clipPos(this.doc, e), s = 0;
                s < t && !(i = findPosH(this.doc, i, o, r, n)).hitSide;
                ++s
              );
              return i
            },
            moveH: methodOp(function(e, t) {
              var r = this
              this.extendSelectionsBy(function(n) {
                return r.display.shift || r.doc.extend || n.empty()
                  ? findPosH(r.doc, n.head, e, t, r.options.rtlMoveVisually)
                  : e < 0 ? n.from() : n.to()
              }, D)
            }),
            deleteH: methodOp(function(e, t) {
              var r = this.doc.sel,
                n = this.doc
              r.somethingSelected()
                ? n.replaceSelection("", null, "+delete")
                : deleteNearSelection(this, function(r) {
                    var o = findPosH(n, r.head, e, t, !1)
                    return e < 0
                      ? { from: o, to: r.head }
                      : { from: r.head, to: o }
                  })
            }),
            findPosV: function(e, t, r, n) {
              var o = 1,
                i = n
              t < 0 && ((o = -1), (t = -t))
              for (var s = clipPos(this.doc, e), a = 0; a < t; ++a) {
                var l = cursorCoords(this, s, "div")
                if (
                  (null == i ? (i = l.left) : (l.left = i),
                  (s = findPosV(this, l, o, r)).hitSide)
                )
                  break
              }
              return s
            },
            moveV: methodOp(function(e, t) {
              var r = this,
                n = this.doc,
                o = [],
                i =
                  !this.display.shift && !n.extend && n.sel.somethingSelected()
              if (
                (n.extendSelectionsBy(function(s) {
                  if (i) return e < 0 ? s.from() : s.to()
                  var a = cursorCoords(r, s.head, "div")
                  null != s.goalColumn && (a.left = s.goalColumn),
                    o.push(a.left)
                  var l = findPosV(r, a, e, t)
                  return (
                    "page" == t &&
                      s == n.sel.primary() &&
                      addToScrollTop(r, charCoords(r, l, "div").top - a.top),
                    l
                  )
                }, D),
                o.length)
              )
                for (var s = 0; s < n.sel.ranges.length; s++)
                  n.sel.ranges[s].goalColumn = o[s]
            }),
            findWordAt: function(e) {
              var t = getLine(this.doc, e.line).text,
                r = e.ch,
                n = e.ch
              if (t) {
                var o = this.getHelper(e, "wordChars")
                ;("before" != e.sticky && n != t.length) || !r ? ++n : --r
                for (
                  var i = t.charAt(r),
                    s = isWordChar(i, o)
                      ? function(e) {
                          return isWordChar(e, o)
                        }
                      : /\s/.test(i)
                        ? function(e) {
                            return /\s/.test(e)
                          }
                        : function(e) {
                            return !/\s/.test(e) && !isWordChar(e)
                          };
                  r > 0 && s(t.charAt(r - 1));

                )
                  --r
                for (; n < t.length && s(t.charAt(n)); ) ++n
              }
              return new ve(Pos(e.line, r), Pos(e.line, n))
            },
            toggleOverwrite: function(e) {
              ;(null != e && e == this.state.overwrite) ||
                ((this.state.overwrite = !this.state.overwrite)
                  ? addClass(this.display.cursorDiv, "CodeMirror-overwrite")
                  : k(this.display.cursorDiv, "CodeMirror-overwrite"),
                signal(this, "overwriteToggle", this, this.state.overwrite))
            },
            hasFocus: function() {
              return this.display.input.getField() == activeElt()
            },
            isReadOnly: function() {
              return !(!this.options.readOnly && !this.doc.cantEdit)
            },
            scrollTo: methodOp(function(e, t) {
              scrollToCoords(this, e, t)
            }),
            getScrollInfo: function() {
              var e = this.display.scroller
              return {
                left: e.scrollLeft,
                top: e.scrollTop,
                height:
                  e.scrollHeight - scrollGap(this) - this.display.barHeight,
                width: e.scrollWidth - scrollGap(this) - this.display.barWidth,
                clientHeight: displayHeight(this),
                clientWidth: displayWidth(this),
              }
            },
            scrollIntoView: methodOp(function(e, t) {
              null == e
                ? ((e = { from: this.doc.sel.primary().head, to: null }),
                  null == t && (t = this.options.cursorScrollMargin))
                : "number" == typeof e
                  ? (e = { from: Pos(e, 0), to: null })
                  : null == e.from && (e = { from: e, to: null }),
                e.to || (e.to = e.from),
                (e.margin = t || 0),
                null != e.from.line
                  ? (function scrollToRange(e, t) {
                      resolveScrollToPos(e), (e.curOp.scrollToPos = t)
                    })(this, e)
                  : scrollToCoordsRange(this, e.from, e.to, e.margin)
            }),
            setSize: methodOp(function(e, t) {
              var r = this,
                n = function(e) {
                  return "number" == typeof e || /^\d+$/.test(String(e))
                    ? e + "px"
                    : e
                }
              null != e && (this.display.wrapper.style.width = n(e)),
                null != t && (this.display.wrapper.style.height = n(t)),
                this.options.lineWrapping && clearLineMeasurementCache(this)
              var o = this.display.viewFrom
              this.doc.iter(o, this.display.viewTo, function(e) {
                if (e.widgets)
                  for (var t = 0; t < e.widgets.length; t++)
                    if (e.widgets[t].noHScroll) {
                      regLineChange(r, o, "widget")
                      break
                    }
                ++o
              }),
                (this.curOp.forceUpdate = !0),
                signal(this, "refresh", this)
            }),
            operation: function(e) {
              return runInOp(this, e)
            },
            startOperation: function() {
              return startOperation(this)
            },
            endOperation: function() {
              return endOperation(this)
            },
            refresh: methodOp(function() {
              var e = this.display.cachedTextHeight
              regChange(this),
                (this.curOp.forceUpdate = !0),
                clearCaches(this),
                scrollToCoords(this, this.doc.scrollLeft, this.doc.scrollTop),
                updateGutterSpace(this),
                (null == e || Math.abs(e - textHeight(this.display)) > 0.5) &&
                  estimateLineHeights(this),
                signal(this, "refresh", this)
            }),
            swapDoc: methodOp(function(e) {
              var t = this.doc
              return (
                (t.cm = null),
                attachDoc(this, e),
                clearCaches(this),
                this.display.input.reset(),
                scrollToCoords(this, e.scrollLeft, e.scrollTop),
                (this.curOp.forceScroll = !0),
                signalLater(this, "swapDoc", this, t),
                t
              )
            }),
            getInputField: function() {
              return this.display.input.getField()
            },
            getWrapperElement: function() {
              return this.display.wrapper
            },
            getScrollerElement: function() {
              return this.display.scroller
            },
            getGutterElement: function() {
              return this.display.gutters
            },
          }),
            eventMixin(e),
            (e.registerHelper = function(t, n, o) {
              r.hasOwnProperty(t) || (r[t] = e[t] = { _global: [] }),
                (r[t][n] = o)
            }),
            (e.registerGlobalHelper = function(t, n, o, i) {
              e.registerHelper(t, n, i), r[t]._global.push({ pred: o, val: i })
            })
        })(CodeMirror$1)
      var Ue = "iter insert remove copy getEditor constructor".split(" ")
      for (var Ge in Se.prototype)
        Se.prototype.hasOwnProperty(Ge) &&
          indexOf(Ue, Ge) < 0 &&
          (CodeMirror$1.prototype[Ge] = (function(e) {
            return function() {
              return e.apply(this.doc, arguments)
            }
          })(Se.prototype[Ge]))
      return (
        eventMixin(Se),
        (CodeMirror$1.inputStyles = { textarea: _e, contenteditable: Ve }),
        (CodeMirror$1.defineMode = function(e) {
          CodeMirror$1.defaults.mode ||
            "null" == e ||
            (CodeMirror$1.defaults.mode = e),
            function defineMode(e, t) {
              arguments.length > 2 &&
                (t.dependencies = Array.prototype.slice.call(arguments, 2)),
                (X[e] = t)
            }.apply(this, arguments)
        }),
        (CodeMirror$1.defineMIME = function defineMIME(e, t) {
          Y[e] = t
        }),
        CodeMirror$1.defineMode("null", function() {
          return {
            token: function(e) {
              return e.skipToEnd()
            },
          }
        }),
        CodeMirror$1.defineMIME("text/plain", "null"),
        (CodeMirror$1.defineExtension = function(e, t) {
          CodeMirror$1.prototype[e] = t
        }),
        (CodeMirror$1.defineDocExtension = function(e, t) {
          Se.prototype[e] = t
        }),
        (CodeMirror$1.fromTextArea = function fromTextArea(e, t) {
          if (
            (((t = t ? copyObj(t) : {}).value = e.value),
            !t.tabindex && e.tabIndex && (t.tabindex = e.tabIndex),
            !t.placeholder && e.placeholder && (t.placeholder = e.placeholder),
            null == t.autofocus)
          ) {
            var r = activeElt()
            t.autofocus =
              r == e ||
              (null != e.getAttribute("autofocus") && r == document.body)
          }
          function save() {
            e.value = s.getValue()
          }
          var n
          if (
            e.form &&
            (j(e.form, "submit", save), !t.leaveSubmitMethodAlone)
          ) {
            var o = e.form
            n = o.submit
            try {
              var i = (o.submit = function() {
                save(), (o.submit = n), o.submit(), (o.submit = i)
              })
            } catch (e) {}
          }
          ;(t.finishInit = function(t) {
            ;(t.save = save),
              (t.getTextArea = function() {
                return e
              }),
              (t.toTextArea = function() {
                ;(t.toTextArea = isNaN),
                  save(),
                  e.parentNode.removeChild(t.getWrapperElement()),
                  (e.style.display = ""),
                  e.form &&
                    (off(e.form, "submit", save),
                    "function" == typeof e.form.submit && (e.form.submit = n))
              })
          }),
            (e.style.display = "none")
          var s = CodeMirror$1(function(t) {
            return e.parentNode.insertBefore(t, e.nextSibling)
          }, t)
          return s
        }),
        (function addLegacyProps(e) {
          ;(e.off = off),
            (e.on = j),
            (e.wheelEventPixels = wheelEventPixels),
            (e.Doc = Se),
            (e.splitLines = G),
            (e.countColumn = countColumn),
            (e.findColumn = findColumn),
            (e.isWordChar = isWordCharBasic),
            (e.Pass = P),
            (e.signal = signal),
            (e.Line = re),
            (e.changeEnd = changeEnd),
            (e.scrollbarModel = de),
            (e.Pos = Pos),
            (e.cmpPos = cmp),
            (e.modes = X),
            (e.mimeModes = Y),
            (e.resolveMode = resolveMode),
            (e.getMode = getMode),
            (e.modeExtensions = Z),
            (e.extendMode = extendMode),
            (e.copyState = copyState),
            (e.startState = startState),
            (e.innerMode = innerMode),
            (e.commands = Ne),
            (e.keyMap = Ae),
            (e.keyName = keyName),
            (e.isModifierKey = isModifierKey),
            (e.lookupKey = lookupKey),
            (e.normalizeKeyMap = normalizeKeyMap),
            (e.StringStream = Q),
            (e.SharedTextMarker = xe),
            (e.TextMarker = Ce),
            (e.LineWidget = ye),
            (e.e_preventDefault = e_preventDefault),
            (e.e_stopPropagation = e_stopPropagation),
            (e.e_stop = e_stop),
            (e.addClass = addClass),
            (e.contains = contains),
            (e.rmClass = k),
            (e.keyNames = Me)
        })(CodeMirror$1),
        (CodeMirror$1.version = "5.33.0"),
        CodeMirror$1
      )
    }),
      (e.exports = n())
    var n
  },
  "./node_modules/codemirror/mode/javascript/javascript.js": function(e, t, r) {
    ;(function(e) {
      "use strict"
      e.defineMode("javascript", function(t, r) {
        var n = t.indentUnit,
          o = r.statementIndent,
          i = r.jsonld,
          s = r.json || i,
          a = r.typescript,
          l = r.wordCharacters || /[\w$\xa1-\uffff]/,
          c = (function() {
            function kw(e) {
              return { type: e, style: "keyword" }
            }
            var e = kw("keyword a"),
              t = kw("keyword b"),
              r = kw("keyword c"),
              n = kw("keyword d"),
              o = kw("operator"),
              i = { type: "atom", style: "atom" }
            return {
              if: kw("if"),
              while: e,
              with: e,
              else: t,
              do: t,
              try: t,
              finally: t,
              return: n,
              break: n,
              continue: n,
              new: kw("new"),
              delete: r,
              void: r,
              throw: r,
              debugger: kw("debugger"),
              var: kw("var"),
              const: kw("var"),
              let: kw("var"),
              function: kw("function"),
              catch: kw("catch"),
              for: kw("for"),
              switch: kw("switch"),
              case: kw("case"),
              default: kw("default"),
              in: o,
              typeof: o,
              instanceof: o,
              true: i,
              false: i,
              null: i,
              undefined: i,
              NaN: i,
              Infinity: i,
              this: kw("this"),
              class: kw("class"),
              super: kw("atom"),
              yield: r,
              export: kw("export"),
              import: kw("import"),
              extends: r,
              await: r,
            }
          })(),
          u = /[+\-*&%=<>!?|~^@]/,
          d = /^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/
        var p, h
        function ret(e, t, r) {
          return (p = e), (h = r), t
        }
        function tokenBase(e, t) {
          var r = e.next()
          if ('"' == r || "'" == r)
            return (
              (t.tokenize = (function tokenString(e) {
                return function(t, r) {
                  var n,
                    o = !1
                  if (i && "@" == t.peek() && t.match(d))
                    return (
                      (r.tokenize = tokenBase), ret("jsonld-keyword", "meta")
                    )
                  for (; null != (n = t.next()) && (n != e || o); )
                    o = !o && "\\" == n
                  return o || (r.tokenize = tokenBase), ret("string", "string")
                }
              })(r)),
              t.tokenize(e, t)
            )
          if ("." == r && e.match(/^\d+(?:[eE][+\-]?\d+)?/))
            return ret("number", "number")
          if ("." == r && e.match("..")) return ret("spread", "meta")
          if (/[\[\]{}\(\),;\:\.]/.test(r)) return ret(r)
          if ("=" == r && e.eat(">")) return ret("=>", "operator")
          if ("0" == r && e.eat(/x/i))
            return e.eatWhile(/[\da-f]/i), ret("number", "number")
          if ("0" == r && e.eat(/o/i))
            return e.eatWhile(/[0-7]/i), ret("number", "number")
          if ("0" == r && e.eat(/b/i))
            return e.eatWhile(/[01]/i), ret("number", "number")
          if (/\d/.test(r))
            return (
              e.match(/^\d*(?:\.\d*)?(?:[eE][+\-]?\d+)?/),
              ret("number", "number")
            )
          if ("/" == r)
            return e.eat("*")
              ? ((t.tokenize = tokenComment), tokenComment(e, t))
              : e.eat("/")
                ? (e.skipToEnd(), ret("comment", "comment"))
                : expressionAllowed(e, t, 1)
                  ? ((function readRegexp(e) {
                      for (var t, r = !1, n = !1; null != (t = e.next()); ) {
                        if (!r) {
                          if ("/" == t && !n) return
                          "[" == t ? (n = !0) : n && "]" == t && (n = !1)
                        }
                        r = !r && "\\" == t
                      }
                    })(e),
                    e.match(/^\b(([gimyu])(?![gimyu]*\2))+\b/),
                    ret("regexp", "string-2"))
                  : (e.eat("="), ret("operator", "operator", e.current()))
          if ("`" == r) return (t.tokenize = tokenQuasi), tokenQuasi(e, t)
          if ("#" == r) return e.skipToEnd(), ret("error", "error")
          if (u.test(r))
            return (
              (">" == r && t.lexical && ">" == t.lexical.type) ||
                (e.eat("=")
                  ? ("!" != r && "=" != r) || e.eat("=")
                  : /[<>*+\-]/.test(r) && (e.eat(r), ">" == r && e.eat(r))),
              ret("operator", "operator", e.current())
            )
          if (l.test(r)) {
            e.eatWhile(l)
            var n = e.current()
            if ("." != t.lastType) {
              if (c.propertyIsEnumerable(n)) {
                var o = c[n]
                return ret(o.type, o.style, n)
              }
              if ("async" == n && e.match(/^(\s|\/\*.*?\*\/)*[\(\w]/, !1))
                return ret("async", "keyword", n)
            }
            return ret("variable", "variable", n)
          }
        }
        function tokenComment(e, t) {
          for (var r, n = !1; (r = e.next()); ) {
            if ("/" == r && n) {
              t.tokenize = tokenBase
              break
            }
            n = "*" == r
          }
          return ret("comment", "comment")
        }
        function tokenQuasi(e, t) {
          for (var r, n = !1; null != (r = e.next()); ) {
            if (!n && ("`" == r || ("$" == r && e.eat("{")))) {
              t.tokenize = tokenBase
              break
            }
            n = !n && "\\" == r
          }
          return ret("quasi", "string-2", e.current())
        }
        var f = "([{}])"
        function findFatArrow(e, t) {
          t.fatArrowAt && (t.fatArrowAt = null)
          var r = e.string.indexOf("=>", e.start)
          if (!(r < 0)) {
            if (a) {
              var n = /:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(
                e.string.slice(e.start, r)
              )
              n && (r = n.index)
            }
            for (var o = 0, i = !1, s = r - 1; s >= 0; --s) {
              var c = e.string.charAt(s),
                u = f.indexOf(c)
              if (u >= 0 && u < 3) {
                if (!o) {
                  ++s
                  break
                }
                if (0 == --o) {
                  "(" == c && (i = !0)
                  break
                }
              } else if (u >= 3 && u < 6) ++o
              else if (l.test(c)) i = !0
              else {
                if (/["'\/]/.test(c)) return
                if (i && !o) {
                  ++s
                  break
                }
              }
            }
            i && !o && (t.fatArrowAt = s)
          }
        }
        var g = {
          atom: !0,
          number: !0,
          variable: !0,
          string: !0,
          regexp: !0,
          this: !0,
          "jsonld-keyword": !0,
        }
        function JSLexical(e, t, r, n, o, i) {
          ;(this.indented = e),
            (this.column = t),
            (this.type = r),
            (this.prev = o),
            (this.info = i),
            null != n && (this.align = n)
        }
        function inScope(e, t) {
          for (var r = e.localVars; r; r = r.next) if (r.name == t) return !0
          for (var n = e.context; n; n = n.prev)
            for (r = n.vars; r; r = r.next) if (r.name == t) return !0
        }
        var m = { state: null, column: null, marked: null, cc: null }
        function pass() {
          for (var e = arguments.length - 1; e >= 0; e--)
            m.cc.push(arguments[e])
        }
        function cont() {
          return pass.apply(null, arguments), !0
        }
        function register(e) {
          function inList(t) {
            for (var r = t; r; r = r.next) if (r.name == e) return !0
            return !1
          }
          var t = m.state
          if (((m.marked = "def"), t.context)) {
            if (inList(t.localVars)) return
            t.localVars = { name: e, next: t.localVars }
          } else {
            if (inList(t.globalVars)) return
            r.globalVars && (t.globalVars = { name: e, next: t.globalVars })
          }
        }
        function isModifier(e) {
          return (
            "public" == e ||
            "private" == e ||
            "protected" == e ||
            "abstract" == e ||
            "readonly" == e
          )
        }
        var v = { name: "this", next: { name: "arguments" } }
        function pushcontext() {
          ;(m.state.context = {
            prev: m.state.context,
            vars: m.state.localVars,
          }),
            (m.state.localVars = v)
        }
        function popcontext() {
          ;(m.state.localVars = m.state.context.vars),
            (m.state.context = m.state.context.prev)
        }
        function pushlex(e, t) {
          var r = function() {
            var r = m.state,
              n = r.indented
            if ("stat" == r.lexical.type) n = r.lexical.indented
            else
              for (var o = r.lexical; o && ")" == o.type && o.align; o = o.prev)
                n = o.indented
            r.lexical = new JSLexical(
              n,
              m.stream.column(),
              e,
              null,
              r.lexical,
              t
            )
          }
          return (r.lex = !0), r
        }
        function poplex() {
          var e = m.state
          e.lexical.prev &&
            (")" == e.lexical.type && (e.indented = e.lexical.indented),
            (e.lexical = e.lexical.prev))
        }
        poplex.lex = !0
        function expect(e) {
          return function exp(t) {
            return t == e ? cont() : ";" == e ? pass() : cont(exp)
          }
        }
        function statement(e, t) {
          return "var" == e
            ? cont(pushlex("vardef", t.length), vardef, expect(";"), poplex)
            : "keyword a" == e
              ? cont(pushlex("form"), parenExpr, statement, poplex)
              : "keyword b" == e
                ? cont(pushlex("form"), statement, poplex)
                : "keyword d" == e
                  ? m.stream.match(/^\s*$/, !1)
                    ? cont()
                    : cont(
                        pushlex("stat"),
                        maybeexpression,
                        expect(";"),
                        poplex
                      )
                  : "debugger" == e
                    ? cont(expect(";"))
                    : "{" == e
                      ? cont(pushlex("}"), block, poplex)
                      : ";" == e
                        ? cont()
                        : "if" == e
                          ? ("else" == m.state.lexical.info &&
                              m.state.cc[m.state.cc.length - 1] == poplex &&
                              m.state.cc.pop()(),
                            cont(
                              pushlex("form"),
                              parenExpr,
                              statement,
                              poplex,
                              maybeelse
                            ))
                          : "function" == e
                            ? cont(functiondef)
                            : "for" == e
                              ? cont(
                                  pushlex("form"),
                                  forspec,
                                  statement,
                                  poplex
                                )
                              : "class" == e || (a && "interface" == t)
                                ? ((m.marked = "keyword"),
                                  cont(pushlex("form"), className, poplex))
                                : "variable" == e
                                  ? a && "type" == t
                                    ? ((m.marked = "keyword"),
                                      cont(
                                        typeexpr,
                                        expect("operator"),
                                        typeexpr,
                                        expect(";")
                                      ))
                                    : a && "declare" == t
                                      ? ((m.marked = "keyword"),
                                        cont(statement))
                                      : a &&
                                        ("module" == t || "enum" == t) &&
                                        m.stream.match(/^\s*\w/, !1)
                                        ? ((m.marked = "keyword"),
                                          cont(
                                            pushlex("form"),
                                            pattern,
                                            expect("{"),
                                            pushlex("}"),
                                            block,
                                            poplex,
                                            poplex
                                          ))
                                        : a && "namespace" == t
                                          ? ((m.marked = "keyword"),
                                            cont(
                                              pushlex("form"),
                                              expression,
                                              block,
                                              poplex
                                            ))
                                          : cont(pushlex("stat"), maybelabel)
                                  : "switch" == e
                                    ? cont(
                                        pushlex("form"),
                                        parenExpr,
                                        expect("{"),
                                        pushlex("}", "switch"),
                                        block,
                                        poplex,
                                        poplex
                                      )
                                    : "case" == e
                                      ? cont(expression, expect(":"))
                                      : "default" == e
                                        ? cont(expect(":"))
                                        : "catch" == e
                                          ? cont(
                                              pushlex("form"),
                                              pushcontext,
                                              expect("("),
                                              funarg,
                                              expect(")"),
                                              statement,
                                              poplex,
                                              popcontext
                                            )
                                          : "export" == e
                                            ? cont(
                                                pushlex("stat"),
                                                afterExport,
                                                poplex
                                              )
                                            : "import" == e
                                              ? cont(
                                                  pushlex("stat"),
                                                  afterImport,
                                                  poplex
                                                )
                                              : "async" == e
                                                ? cont(statement)
                                                : "@" == t
                                                  ? cont(expression, statement)
                                                  : pass(
                                                      pushlex("stat"),
                                                      expression,
                                                      expect(";"),
                                                      poplex
                                                    )
        }
        function expression(e, t) {
          return expressionInner(e, t, !1)
        }
        function expressionNoComma(e, t) {
          return expressionInner(e, t, !0)
        }
        function parenExpr(e) {
          return "(" != e
            ? pass()
            : cont(pushlex(")"), expression, expect(")"), poplex)
        }
        function expressionInner(e, t, r) {
          if (m.state.fatArrowAt == m.stream.start) {
            var n = r ? arrowBodyNoComma : arrowBody
            if ("(" == e)
              return cont(
                pushcontext,
                pushlex(")"),
                commasep(funarg, ")"),
                poplex,
                expect("=>"),
                n,
                popcontext
              )
            if ("variable" == e)
              return pass(pushcontext, pattern, expect("=>"), n, popcontext)
          }
          var o = r ? maybeoperatorNoComma : maybeoperatorComma
          return g.hasOwnProperty(e)
            ? cont(o)
            : "function" == e
              ? cont(functiondef, o)
              : "class" == e || (a && "interface" == t)
                ? ((m.marked = "keyword"),
                  cont(pushlex("form"), classExpression, poplex))
                : "keyword c" == e || "async" == e
                  ? cont(r ? expressionNoComma : expression)
                  : "(" == e
                    ? cont(
                        pushlex(")"),
                        maybeexpression,
                        expect(")"),
                        poplex,
                        o
                      )
                    : "operator" == e || "spread" == e
                      ? cont(r ? expressionNoComma : expression)
                      : "[" == e
                        ? cont(pushlex("]"), arrayLiteral, poplex, o)
                        : "{" == e
                          ? contCommasep(objprop, "}", null, o)
                          : "quasi" == e
                            ? pass(quasi, o)
                            : "new" == e
                              ? cont(
                                  (function maybeTarget(e) {
                                    return function(t) {
                                      return "." == t
                                        ? cont(e ? targetNoComma : target)
                                        : "variable" == t && a
                                          ? cont(
                                              maybeTypeArgs,
                                              e
                                                ? maybeoperatorNoComma
                                                : maybeoperatorComma
                                            )
                                          : pass(
                                              e ? expressionNoComma : expression
                                            )
                                    }
                                  })(r)
                                )
                              : cont()
        }
        function maybeexpression(e) {
          return e.match(/[;\}\)\],]/) ? pass() : pass(expression)
        }
        function maybeoperatorComma(e, t) {
          return "," == e ? cont(expression) : maybeoperatorNoComma(e, t, !1)
        }
        function maybeoperatorNoComma(e, t, r) {
          var n = 0 == r ? maybeoperatorComma : maybeoperatorNoComma,
            o = 0 == r ? expression : expressionNoComma
          return "=>" == e
            ? cont(pushcontext, r ? arrowBodyNoComma : arrowBody, popcontext)
            : "operator" == e
              ? /\+\+|--/.test(t) || (a && "!" == t)
                ? cont(n)
                : a && "<" == t && m.stream.match(/^([^>]|<.*?>)*>\s*\(/, !1)
                  ? cont(pushlex(">"), commasep(typeexpr, ">"), poplex, n)
                  : "?" == t ? cont(expression, expect(":"), o) : cont(o)
              : "quasi" == e
                ? pass(quasi, n)
                : ";" != e
                  ? "(" == e
                    ? contCommasep(expressionNoComma, ")", "call", n)
                    : "." == e
                      ? cont(property, n)
                      : "[" == e
                        ? cont(
                            pushlex("]"),
                            maybeexpression,
                            expect("]"),
                            poplex,
                            n
                          )
                        : a && "as" == t
                          ? ((m.marked = "keyword"), cont(typeexpr, n))
                          : "regexp" == e
                            ? ((m.state.lastType = m.marked = "operator"),
                              m.stream.backUp(
                                m.stream.pos - m.stream.start - 1
                              ),
                              cont(o))
                            : void 0
                  : void 0
        }
        function quasi(e, t) {
          return "quasi" != e
            ? pass()
            : "${" != t.slice(t.length - 2)
              ? cont(quasi)
              : cont(expression, continueQuasi)
        }
        function continueQuasi(e) {
          if ("}" == e)
            return (
              (m.marked = "string-2"),
              (m.state.tokenize = tokenQuasi),
              cont(quasi)
            )
        }
        function arrowBody(e) {
          return (
            findFatArrow(m.stream, m.state),
            pass("{" == e ? statement : expression)
          )
        }
        function arrowBodyNoComma(e) {
          return (
            findFatArrow(m.stream, m.state),
            pass("{" == e ? statement : expressionNoComma)
          )
        }
        function target(e, t) {
          if ("target" == t)
            return (m.marked = "keyword"), cont(maybeoperatorComma)
        }
        function targetNoComma(e, t) {
          if ("target" == t)
            return (m.marked = "keyword"), cont(maybeoperatorNoComma)
        }
        function maybelabel(e) {
          return ":" == e
            ? cont(poplex, statement)
            : pass(maybeoperatorComma, expect(";"), poplex)
        }
        function property(e) {
          if ("variable" == e) return (m.marked = "property"), cont()
        }
        function objprop(e, t) {
          if ("async" == e) return (m.marked = "property"), cont(objprop)
          if ("variable" == e || "keyword" == m.style) {
            if (((m.marked = "property"), "get" == t || "set" == t))
              return cont(getterSetter)
            var r
            return (
              a &&
                m.state.fatArrowAt == m.stream.start &&
                (r = m.stream.match(/^\s*:\s*/, !1)) &&
                (m.state.fatArrowAt = m.stream.pos + r[0].length),
              cont(afterprop)
            )
          }
          return "number" == e || "string" == e
            ? ((m.marked = i ? "property" : m.style + " property"),
              cont(afterprop))
            : "jsonld-keyword" == e
              ? cont(afterprop)
              : a && isModifier(t)
                ? ((m.marked = "keyword"), cont(objprop))
                : "[" == e
                  ? cont(expression, maybetype, expect("]"), afterprop)
                  : "spread" == e
                    ? cont(expressionNoComma, afterprop)
                    : "*" == t
                      ? ((m.marked = "keyword"), cont(objprop))
                      : ":" == e ? pass(afterprop) : void 0
        }
        function getterSetter(e) {
          return "variable" != e
            ? pass(afterprop)
            : ((m.marked = "property"), cont(functiondef))
        }
        function afterprop(e) {
          return ":" == e
            ? cont(expressionNoComma)
            : "(" == e ? pass(functiondef) : void 0
        }
        function commasep(e, t, r) {
          function proceed(n, o) {
            if (r ? r.indexOf(n) > -1 : "," == n) {
              var i = m.state.lexical
              return (
                "call" == i.info && (i.pos = (i.pos || 0) + 1),
                cont(function(r, n) {
                  return r == t || n == t ? pass() : pass(e)
                }, proceed)
              )
            }
            return n == t || o == t ? cont() : cont(expect(t))
          }
          return function(r, n) {
            return r == t || n == t ? cont() : pass(e, proceed)
          }
        }
        function contCommasep(e, t, r) {
          for (var n = 3; n < arguments.length; n++) m.cc.push(arguments[n])
          return cont(pushlex(t, r), commasep(e, t), poplex)
        }
        function block(e) {
          return "}" == e ? cont() : pass(statement, block)
        }
        function maybetype(e, t) {
          if (a) {
            if (":" == e) return cont(typeexpr)
            if ("?" == t) return cont(maybetype)
          }
        }
        function mayberettype(e) {
          if (a && ":" == e)
            return m.stream.match(/^\s*\w+\s+is\b/, !1)
              ? cont(expression, isKW, typeexpr)
              : cont(typeexpr)
        }
        function isKW(e, t) {
          if ("is" == t) return (m.marked = "keyword"), cont()
        }
        function typeexpr(e, t) {
          return "variable" == e || "void" == t
            ? "keyof" == t
              ? ((m.marked = "keyword"), cont(typeexpr))
              : ((m.marked = "type"), cont(afterType))
            : "string" == e || "number" == e || "atom" == e
              ? cont(afterType)
              : "[" == e
                ? cont(
                    pushlex("]"),
                    commasep(typeexpr, "]", ","),
                    poplex,
                    afterType
                  )
                : "{" == e
                  ? cont(
                      pushlex("}"),
                      commasep(typeprop, "}", ",;"),
                      poplex,
                      afterType
                    )
                  : "(" == e
                    ? cont(commasep(typearg, ")"), maybeReturnType)
                    : void 0
        }
        function maybeReturnType(e) {
          if ("=>" == e) return cont(typeexpr)
        }
        function typeprop(e, t) {
          return "variable" == e || "keyword" == m.style
            ? ((m.marked = "property"), cont(typeprop))
            : "?" == t
              ? cont(typeprop)
              : ":" == e
                ? cont(typeexpr)
                : "[" == e
                  ? cont(expression, maybetype, expect("]"), typeprop)
                  : void 0
        }
        function typearg(e) {
          return "variable" == e
            ? cont(typearg)
            : ":" == e ? cont(typeexpr) : void 0
        }
        function afterType(e, t) {
          return "<" == t
            ? cont(pushlex(">"), commasep(typeexpr, ">"), poplex, afterType)
            : "|" == t || "." == e
              ? cont(typeexpr)
              : "[" == e
                ? cont(expect("]"), afterType)
                : "extends" == t || "implements" == t
                  ? ((m.marked = "keyword"), cont(typeexpr))
                  : void 0
        }
        function maybeTypeArgs(e, t) {
          if ("<" == t)
            return cont(
              pushlex(">"),
              commasep(typeexpr, ">"),
              poplex,
              afterType
            )
        }
        function typeparam() {
          return pass(typeexpr, maybeTypeDefault)
        }
        function maybeTypeDefault(e, t) {
          if ("=" == t) return cont(typeexpr)
        }
        function vardef() {
          return pass(pattern, maybetype, maybeAssign, vardefCont)
        }
        function pattern(e, t) {
          return a && isModifier(t)
            ? ((m.marked = "keyword"), cont(pattern))
            : "variable" == e
              ? (register(t), cont())
              : "spread" == e
                ? cont(pattern)
                : "[" == e
                  ? contCommasep(pattern, "]")
                  : "{" == e ? contCommasep(proppattern, "}") : void 0
        }
        function proppattern(e, t) {
          return "variable" != e || m.stream.match(/^\s*:/, !1)
            ? ("variable" == e && (m.marked = "property"),
              "spread" == e
                ? cont(pattern)
                : "}" == e ? pass() : cont(expect(":"), pattern, maybeAssign))
            : (register(t), cont(maybeAssign))
        }
        function maybeAssign(e, t) {
          if ("=" == t) return cont(expressionNoComma)
        }
        function vardefCont(e) {
          if ("," == e) return cont(vardef)
        }
        function maybeelse(e, t) {
          if ("keyword b" == e && "else" == t)
            return cont(pushlex("form", "else"), statement, poplex)
        }
        function forspec(e) {
          if ("(" == e) return cont(pushlex(")"), forspec1, expect(")"), poplex)
        }
        function forspec1(e) {
          return "var" == e
            ? cont(vardef, expect(";"), forspec2)
            : ";" == e
              ? cont(forspec2)
              : "variable" == e
                ? cont(formaybeinof)
                : pass(expression, expect(";"), forspec2)
        }
        function formaybeinof(e, t) {
          return "in" == t || "of" == t
            ? ((m.marked = "keyword"), cont(expression))
            : cont(maybeoperatorComma, forspec2)
        }
        function forspec2(e, t) {
          return ";" == e
            ? cont(forspec3)
            : "in" == t || "of" == t
              ? ((m.marked = "keyword"), cont(expression))
              : pass(expression, expect(";"), forspec3)
        }
        function forspec3(e) {
          ")" != e && cont(expression)
        }
        function functiondef(e, t) {
          return "*" == t
            ? ((m.marked = "keyword"), cont(functiondef))
            : "variable" == e
              ? (register(t), cont(functiondef))
              : "(" == e
                ? cont(
                    pushcontext,
                    pushlex(")"),
                    commasep(funarg, ")"),
                    poplex,
                    mayberettype,
                    statement,
                    popcontext
                  )
                : a && "<" == t
                  ? cont(
                      pushlex(">"),
                      commasep(typeparam, ">"),
                      poplex,
                      functiondef
                    )
                  : void 0
        }
        function funarg(e, t) {
          return (
            "@" == t && cont(expression, funarg),
            "spread" == e
              ? cont(funarg)
              : a && isModifier(t)
                ? ((m.marked = "keyword"), cont(funarg))
                : pass(pattern, maybetype, maybeAssign)
          )
        }
        function classExpression(e, t) {
          return "variable" == e ? className(e, t) : classNameAfter(e, t)
        }
        function className(e, t) {
          if ("variable" == e) return register(t), cont(classNameAfter)
        }
        function classNameAfter(e, t) {
          return "<" == t
            ? cont(
                pushlex(">"),
                commasep(typeparam, ">"),
                poplex,
                classNameAfter
              )
            : "extends" == t || "implements" == t || (a && "," == e)
              ? cont(a ? typeexpr : expression, classNameAfter)
              : "{" == e ? cont(pushlex("}"), classBody, poplex) : void 0
        }
        function classBody(e, t) {
          return "async" == e ||
            ("variable" == e &&
              ("static" == t ||
                "get" == t ||
                "set" == t ||
                (a && isModifier(t))) &&
              m.stream.match(/^\s+[\w$\xa1-\uffff]/, !1))
            ? ((m.marked = "keyword"), cont(classBody))
            : "variable" == e || "keyword" == m.style
              ? ((m.marked = "property"),
                cont(a ? classfield : functiondef, classBody))
              : "[" == e
                ? cont(
                    expression,
                    maybetype,
                    expect("]"),
                    a ? classfield : functiondef,
                    classBody
                  )
                : "*" == t
                  ? ((m.marked = "keyword"), cont(classBody))
                  : ";" == e
                    ? cont(classBody)
                    : "}" == e
                      ? cont()
                      : "@" == t ? cont(expression, classBody) : void 0
        }
        function classfield(e, t) {
          return "?" == t
            ? cont(classfield)
            : ":" == e
              ? cont(typeexpr, maybeAssign)
              : "=" == t ? cont(expressionNoComma) : pass(functiondef)
        }
        function afterExport(e, t) {
          return "*" == t
            ? ((m.marked = "keyword"), cont(maybeFrom, expect(";")))
            : "default" == t
              ? ((m.marked = "keyword"), cont(expression, expect(";")))
              : "{" == e
                ? cont(commasep(exportField, "}"), maybeFrom, expect(";"))
                : pass(statement)
        }
        function exportField(e, t) {
          return "as" == t
            ? ((m.marked = "keyword"), cont(expect("variable")))
            : "variable" == e ? pass(expressionNoComma, exportField) : void 0
        }
        function afterImport(e) {
          return "string" == e
            ? cont()
            : pass(importSpec, maybeMoreImports, maybeFrom)
        }
        function importSpec(e, t) {
          return "{" == e
            ? contCommasep(importSpec, "}")
            : ("variable" == e && register(t),
              "*" == t && (m.marked = "keyword"),
              cont(maybeAs))
        }
        function maybeMoreImports(e) {
          if ("," == e) return cont(importSpec, maybeMoreImports)
        }
        function maybeAs(e, t) {
          if ("as" == t) return (m.marked = "keyword"), cont(importSpec)
        }
        function maybeFrom(e, t) {
          if ("from" == t) return (m.marked = "keyword"), cont(expression)
        }
        function arrayLiteral(e) {
          return "]" == e ? cont() : pass(commasep(expressionNoComma, "]"))
        }
        function expressionAllowed(e, t, r) {
          return (
            (t.tokenize == tokenBase &&
              /^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(
                t.lastType
              )) ||
            ("quasi" == t.lastType &&
              /\{\s*$/.test(e.string.slice(0, e.pos - (r || 0))))
          )
        }
        return {
          startState: function(e) {
            var t = {
              tokenize: tokenBase,
              lastType: "sof",
              cc: [],
              lexical: new JSLexical((e || 0) - n, 0, "block", !1),
              localVars: r.localVars,
              context: r.localVars && { vars: r.localVars },
              indented: e || 0,
            }
            return (
              r.globalVars &&
                "object" == typeof r.globalVars &&
                (t.globalVars = r.globalVars),
              t
            )
          },
          token: function(e, t) {
            if (
              (e.sol() &&
                (t.lexical.hasOwnProperty("align") || (t.lexical.align = !1),
                (t.indented = e.indentation()),
                findFatArrow(e, t)),
              t.tokenize != tokenComment && e.eatSpace())
            )
              return null
            var r = t.tokenize(e, t)
            return "comment" == p
              ? r
              : ((t.lastType =
                  "operator" != p || ("++" != h && "--" != h) ? p : "incdec"),
                (function parseJS(e, t, r, n, o) {
                  var i = e.cc
                  for (
                    m.state = e,
                      m.stream = o,
                      m.marked = null,
                      m.cc = i,
                      m.style = t,
                      e.lexical.hasOwnProperty("align") ||
                        (e.lexical.align = !0);
                    ;

                  )
                    if (
                      (i.length ? i.pop() : s ? expression : statement)(r, n)
                    ) {
                      for (; i.length && i[i.length - 1].lex; ) i.pop()()
                      return m.marked
                        ? m.marked
                        : "variable" == r && inScope(e, n) ? "variable-2" : t
                    }
                })(t, r, p, h, e))
          },
          indent: function(t, i) {
            if (t.tokenize == tokenComment) return e.Pass
            if (t.tokenize != tokenBase) return 0
            var s,
              a = i && i.charAt(0),
              l = t.lexical
            if (!/^\s*else\b/.test(i))
              for (var c = t.cc.length - 1; c >= 0; --c) {
                var d = t.cc[c]
                if (d == poplex) l = l.prev
                else if (d != maybeelse) break
              }
            for (
              ;
              ("stat" == l.type || "form" == l.type) &&
              ("}" == a ||
                ((s = t.cc[t.cc.length - 1]) &&
                  (s == maybeoperatorComma || s == maybeoperatorNoComma) &&
                  !/^[,\.=+\-*:?[\(]/.test(i)));

            )
              l = l.prev
            o && ")" == l.type && "stat" == l.prev.type && (l = l.prev)
            var p = l.type,
              h = a == p
            return "vardef" == p
              ? l.indented +
                  ("operator" == t.lastType || "," == t.lastType
                    ? l.info + 1
                    : 0)
              : "form" == p && "{" == a
                ? l.indented
                : "form" == p
                  ? l.indented + n
                  : "stat" == p
                    ? l.indented +
                      ((function isContinuedStatement(e, t) {
                        return (
                          "operator" == e.lastType ||
                          "," == e.lastType ||
                          u.test(t.charAt(0)) ||
                          /[,.]/.test(t.charAt(0))
                        )
                      })(t, i)
                        ? o || n
                        : 0)
                    : "switch" != l.info || h || 0 == r.doubleIndentSwitch
                      ? l.align
                        ? l.column + (h ? 0 : 1)
                        : l.indented + (h ? 0 : n)
                      : l.indented + (/^(?:case|default)\b/.test(i) ? n : 2 * n)
          },
          electricInput: /^\s*(?:case .*?:|default:|\{|\})$/,
          blockCommentStart: s ? null : "/*",
          blockCommentEnd: s ? null : "*/",
          blockCommentContinue: s ? null : " * ",
          lineComment: s ? null : "//",
          fold: "brace",
          closeBrackets: "()[]{}''\"\"``",
          helperType: s ? "json" : "javascript",
          jsonldMode: i,
          jsonMode: s,
          expressionAllowed: expressionAllowed,
          skipExpression: function(e) {
            var t = e.cc[e.cc.length - 1]
            ;(t != expression && t != expressionNoComma) || e.cc.pop()
          },
        }
      }),
        e.registerHelper("wordChars", "javascript", /[\w$]/),
        e.defineMIME("text/javascript", "javascript"),
        e.defineMIME("text/ecmascript", "javascript"),
        e.defineMIME("application/javascript", "javascript"),
        e.defineMIME("application/x-javascript", "javascript"),
        e.defineMIME("application/ecmascript", "javascript"),
        e.defineMIME("application/json", { name: "javascript", json: !0 }),
        e.defineMIME("application/x-json", { name: "javascript", json: !0 }),
        e.defineMIME("application/ld+json", { name: "javascript", jsonld: !0 }),
        e.defineMIME("text/typescript", { name: "javascript", typescript: !0 }),
        e.defineMIME("application/typescript", {
          name: "javascript",
          typescript: !0,
        })
    })(r("./node_modules/codemirror/lib/codemirror.js"))
  },
  "./node_modules/codemirror/mode/jsx/jsx.js": function(e, t, r) {
    ;(function(e) {
      "use strict"
      function Context(e, t, r, n) {
        ;(this.state = e), (this.mode = t), (this.depth = r), (this.prev = n)
      }
      e.defineMode(
        "jsx",
        function(t, r) {
          var n = e.getMode(t, {
              name: "xml",
              allowMissing: !0,
              multilineTagIndentPastTag: !1,
              allowMissingTagName: !0,
            }),
            o = e.getMode(t, (r && r.base) || "javascript")
          function flatXMLIndent(e) {
            var t = e.tagName
            e.tagName = null
            var r = n.indent(e, "")
            return (e.tagName = t), r
          }
          function token(r, i) {
            return i.context.mode == n
              ? (function xmlToken(r, i, s) {
                  if (2 == s.depth)
                    return (
                      r.match(/^.*?\*\//) ? (s.depth = 1) : r.skipToEnd(),
                      "comment"
                    )
                  if ("{" == r.peek()) {
                    n.skipAttribute(s.state)
                    var a = flatXMLIndent(s.state),
                      l = s.state.context
                    if (l && r.match(/^[^>]*>\s*$/, !1)) {
                      for (; l.prev && !l.startOfLine; ) l = l.prev
                      l.startOfLine
                        ? (a -= t.indentUnit)
                        : s.prev.state.lexical &&
                          (a = s.prev.state.lexical.indented)
                    } else 1 == s.depth && (a += t.indentUnit)
                    return (
                      (i.context = new Context(
                        e.startState(o, a),
                        o,
                        0,
                        i.context
                      )),
                      null
                    )
                  }
                  if (1 == s.depth) {
                    if ("<" == r.peek())
                      return (
                        n.skipAttribute(s.state),
                        (i.context = new Context(
                          e.startState(n, flatXMLIndent(s.state)),
                          n,
                          0,
                          i.context
                        )),
                        null
                      )
                    if (r.match("//")) return r.skipToEnd(), "comment"
                    if (r.match("/*")) return (s.depth = 2), token(r, i)
                  }
                  var c,
                    u = n.token(r, s.state),
                    d = r.current()
                  ;/\btag\b/.test(u)
                    ? />$/.test(d)
                      ? s.state.context
                        ? (s.depth = 0)
                        : (i.context = i.context.prev)
                      : /^</.test(d) && (s.depth = 1)
                    : !u && (c = d.indexOf("{")) > -1 && r.backUp(d.length - c)
                  return u
                })(r, i, i.context)
              : (function jsToken(t, r, i) {
                  if ("<" == t.peek() && o.expressionAllowed(t, i.state))
                    return (
                      o.skipExpression(i.state),
                      (r.context = new Context(
                        e.startState(n, o.indent(i.state, "")),
                        n,
                        0,
                        r.context
                      )),
                      null
                    )
                  var s = o.token(t, i.state)
                  if (!s && null != i.depth) {
                    var a = t.current()
                    "{" == a
                      ? i.depth++
                      : "}" == a &&
                        0 == --i.depth &&
                        (r.context = r.context.prev)
                  }
                  return s
                })(r, i, i.context)
          }
          return {
            startState: function() {
              return { context: new Context(e.startState(o), o) }
            },
            copyState: function(t) {
              return {
                context: (function copyContext(t) {
                  return new Context(
                    e.copyState(t.mode, t.state),
                    t.mode,
                    t.depth,
                    t.prev && copyContext(t.prev)
                  )
                })(t.context),
              }
            },
            token: token,
            indent: function(e, t, r) {
              return e.context.mode.indent(e.context.state, t, r)
            },
            innerMode: function(e) {
              return e.context
            },
          }
        },
        "xml",
        "javascript"
      ),
        e.defineMIME("text/jsx", "jsx"),
        e.defineMIME("text/typescript-jsx", {
          name: "jsx",
          base: { name: "javascript", typescript: !0 },
        })
    })(
      r("./node_modules/codemirror/lib/codemirror.js"),
      r("./node_modules/codemirror/mode/xml/xml.js"),
      r("./node_modules/codemirror/mode/javascript/javascript.js")
    )
  },
  "./node_modules/codemirror/mode/xml/xml.js": function(e, t, r) {
    ;(function(e) {
      "use strict"
      var t = {
          autoSelfClosers: {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            command: !0,
            embed: !0,
            frame: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
            menuitem: !0,
          },
          implicitlyClosed: {
            dd: !0,
            li: !0,
            optgroup: !0,
            option: !0,
            p: !0,
            rp: !0,
            rt: !0,
            tbody: !0,
            td: !0,
            tfoot: !0,
            th: !0,
            tr: !0,
          },
          contextGrabbers: {
            dd: { dd: !0, dt: !0 },
            dt: { dd: !0, dt: !0 },
            li: { li: !0 },
            option: { option: !0, optgroup: !0 },
            optgroup: { optgroup: !0 },
            p: {
              address: !0,
              article: !0,
              aside: !0,
              blockquote: !0,
              dir: !0,
              div: !0,
              dl: !0,
              fieldset: !0,
              footer: !0,
              form: !0,
              h1: !0,
              h2: !0,
              h3: !0,
              h4: !0,
              h5: !0,
              h6: !0,
              header: !0,
              hgroup: !0,
              hr: !0,
              menu: !0,
              nav: !0,
              ol: !0,
              p: !0,
              pre: !0,
              section: !0,
              table: !0,
              ul: !0,
            },
            rp: { rp: !0, rt: !0 },
            rt: { rp: !0, rt: !0 },
            tbody: { tbody: !0, tfoot: !0 },
            td: { td: !0, th: !0 },
            tfoot: { tbody: !0 },
            th: { td: !0, th: !0 },
            thead: { tbody: !0, tfoot: !0 },
            tr: { tr: !0 },
          },
          doNotIndent: { pre: !0 },
          allowUnquoted: !0,
          allowMissing: !0,
          caseFold: !0,
        },
        r = {
          autoSelfClosers: {},
          implicitlyClosed: {},
          contextGrabbers: {},
          doNotIndent: {},
          allowUnquoted: !1,
          allowMissing: !1,
          allowMissingTagName: !1,
          caseFold: !1,
        }
      e.defineMode("xml", function(n, o) {
        var i = n.indentUnit,
          s = {},
          a = o.htmlMode ? t : r
        for (var l in a) s[l] = a[l]
        for (var l in o) s[l] = o[l]
        var c, u
        function inText(e, t) {
          function chain(r) {
            return (t.tokenize = r), r(e, t)
          }
          var r = e.next()
          if ("<" == r)
            return e.eat("!")
              ? e.eat("[")
                ? e.match("CDATA[") ? chain(inBlock("atom", "]]>")) : null
                : e.match("--")
                  ? chain(inBlock("comment", "--\x3e"))
                  : e.match("DOCTYPE", !0, !0)
                    ? (e.eatWhile(/[\w\._\-]/),
                      chain(
                        (function doctype(e) {
                          return function(t, r) {
                            for (var n; null != (n = t.next()); ) {
                              if ("<" == n)
                                return (
                                  (r.tokenize = doctype(e + 1)),
                                  r.tokenize(t, r)
                                )
                              if (">" == n) {
                                if (1 == e) {
                                  r.tokenize = inText
                                  break
                                }
                                return (
                                  (r.tokenize = doctype(e - 1)),
                                  r.tokenize(t, r)
                                )
                              }
                            }
                            return "meta"
                          }
                        })(1)
                      ))
                    : null
              : e.eat("?")
                ? (e.eatWhile(/[\w\._\-]/),
                  (t.tokenize = inBlock("meta", "?>")),
                  "meta")
                : ((c = e.eat("/") ? "closeTag" : "openTag"),
                  (t.tokenize = inTag),
                  "tag bracket")
          if ("&" == r) {
            return (e.eat("#")
            ? e.eat("x")
              ? e.eatWhile(/[a-fA-F\d]/) && e.eat(";")
              : e.eatWhile(/[\d]/) && e.eat(";")
            : e.eatWhile(/[\w\.\-:]/) && e.eat(";"))
              ? "atom"
              : "error"
          }
          return e.eatWhile(/[^&<]/), null
        }
        inText.isInText = !0
        function inTag(e, t) {
          var r = e.next()
          if (">" == r || ("/" == r && e.eat(">")))
            return (
              (t.tokenize = inText),
              (c = ">" == r ? "endTag" : "selfcloseTag"),
              "tag bracket"
            )
          if ("=" == r) return (c = "equals"), null
          if ("<" == r) {
            ;(t.tokenize = inText),
              (t.state = baseState),
              (t.tagName = t.tagStart = null)
            var n = t.tokenize(e, t)
            return n ? n + " tag error" : "tag error"
          }
          return /[\'\"]/.test(r)
            ? ((t.tokenize = (function inAttribute(e) {
                var t = function(t, r) {
                  for (; !t.eol(); )
                    if (t.next() == e) {
                      r.tokenize = inTag
                      break
                    }
                  return "string"
                }
                return (t.isInAttribute = !0), t
              })(r)),
              (t.stringStartCol = e.column()),
              t.tokenize(e, t))
            : (e.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/), "word")
        }
        function inBlock(e, t) {
          return function(r, n) {
            for (; !r.eol(); ) {
              if (r.match(t)) {
                n.tokenize = inText
                break
              }
              r.next()
            }
            return e
          }
        }
        function popContext(e) {
          e.context && (e.context = e.context.prev)
        }
        function maybePopContext(e, t) {
          for (var r; ; ) {
            if (!e.context) return
            if (
              ((r = e.context.tagName),
              !s.contextGrabbers.hasOwnProperty(r) ||
                !s.contextGrabbers[r].hasOwnProperty(t))
            )
              return
            popContext(e)
          }
        }
        function baseState(e, t, r) {
          return "openTag" == e
            ? ((r.tagStart = t.column()), tagNameState)
            : "closeTag" == e ? closeTagNameState : baseState
        }
        function tagNameState(e, t, r) {
          return "word" == e
            ? ((r.tagName = t.current()), (u = "tag"), attrState)
            : s.allowMissingTagName && "endTag" == e
              ? ((u = "tag bracket"), attrState(e, t, r))
              : ((u = "error"), tagNameState)
        }
        function closeTagNameState(e, t, r) {
          if ("word" == e) {
            var n = t.current()
            return (
              r.context &&
                r.context.tagName != n &&
                s.implicitlyClosed.hasOwnProperty(r.context.tagName) &&
                popContext(r),
              (r.context && r.context.tagName == n) || !1 === s.matchClosing
                ? ((u = "tag"), closeState)
                : ((u = "tag error"), closeStateErr)
            )
          }
          return s.allowMissingTagName && "endTag" == e
            ? ((u = "tag bracket"), closeState(e, t, r))
            : ((u = "error"), closeStateErr)
        }
        function closeState(e, t, r) {
          return "endTag" != e
            ? ((u = "error"), closeState)
            : (popContext(r), baseState)
        }
        function closeStateErr(e, t, r) {
          return (u = "error"), closeState(e, 0, r)
        }
        function attrState(e, t, r) {
          if ("word" == e) return (u = "attribute"), attrEqState
          if ("endTag" == e || "selfcloseTag" == e) {
            var n = r.tagName,
              o = r.tagStart
            return (
              (r.tagName = r.tagStart = null),
              "selfcloseTag" == e || s.autoSelfClosers.hasOwnProperty(n)
                ? maybePopContext(r, n)
                : (maybePopContext(r, n),
                  (r.context = new function Context(e, t, r) {
                    ;(this.prev = e.context),
                      (this.tagName = t),
                      (this.indent = e.indented),
                      (this.startOfLine = r),
                      (s.doNotIndent.hasOwnProperty(t) ||
                        (e.context && e.context.noIndent)) &&
                        (this.noIndent = !0)
                  }(r, n, o == r.indented))),
              baseState
            )
          }
          return (u = "error"), attrState
        }
        function attrEqState(e, t, r) {
          return "equals" == e
            ? attrValueState
            : (s.allowMissing || (u = "error"), attrState(e, 0, r))
        }
        function attrValueState(e, t, r) {
          return "string" == e
            ? attrContinuedState
            : "word" == e && s.allowUnquoted
              ? ((u = "string"), attrState)
              : ((u = "error"), attrState(e, 0, r))
        }
        function attrContinuedState(e, t, r) {
          return "string" == e ? attrContinuedState : attrState(e, 0, r)
        }
        return {
          startState: function(e) {
            var t = {
              tokenize: inText,
              state: baseState,
              indented: e || 0,
              tagName: null,
              tagStart: null,
              context: null,
            }
            return null != e && (t.baseIndent = e), t
          },
          token: function(e, t) {
            if (
              (!t.tagName && e.sol() && (t.indented = e.indentation()),
              e.eatSpace())
            )
              return null
            c = null
            var r = t.tokenize(e, t)
            return (
              (r || c) &&
                "comment" != r &&
                ((u = null),
                (t.state = t.state(c || r, e, t)),
                u && (r = "error" == u ? r + " error" : u)),
              r
            )
          },
          indent: function(t, r, n) {
            var o = t.context
            if (t.tokenize.isInAttribute)
              return t.tagStart == t.indented
                ? t.stringStartCol + 1
                : t.indented + i
            if (o && o.noIndent) return e.Pass
            if (t.tokenize != inTag && t.tokenize != inText)
              return n ? n.match(/^(\s*)/)[0].length : 0
            if (t.tagName)
              return !1 !== s.multilineTagIndentPastTag
                ? t.tagStart + t.tagName.length + 2
                : t.tagStart + i * (s.multilineTagIndentFactor || 1)
            if (s.alignCDATA && /<!\[CDATA\[/.test(r)) return 0
            var a = r && /^<(\/)?([\w_:\.-]*)/.exec(r)
            if (a && a[1])
              for (; o; ) {
                if (o.tagName == a[2]) {
                  o = o.prev
                  break
                }
                if (!s.implicitlyClosed.hasOwnProperty(o.tagName)) break
                o = o.prev
              }
            else if (a)
              for (; o; ) {
                var l = s.contextGrabbers[o.tagName]
                if (!l || !l.hasOwnProperty(a[2])) break
                o = o.prev
              }
            for (; o && o.prev && !o.startOfLine; ) o = o.prev
            return o ? o.indent + i : t.baseIndent || 0
          },
          electricInput: /<\/[\s\w:]+>$/,
          blockCommentStart: "\x3c!--",
          blockCommentEnd: "--\x3e",
          configuration: s.htmlMode ? "html" : "xml",
          helperType: s.htmlMode ? "html" : "xml",
          skipAttribute: function(e) {
            e.state == attrValueState && (e.state = attrState)
          },
        }
      }),
        e.defineMIME("text/xml", "xml"),
        e.defineMIME("application/xml", "xml"),
        e.mimeModes.hasOwnProperty("text/html") ||
          e.defineMIME("text/html", { name: "xml", htmlMode: !0 })
    })(r("./node_modules/codemirror/lib/codemirror.js"))
  },
  "./node_modules/react-codemirror2/index.js": function(e, t, r) {
    "use strict"
    var n =
      (this && this.__extends) ||
      (function() {
        var e =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function(e, t) {
              e.__proto__ = t
            }) ||
          function(e, t) {
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
          }
        return function(t, r) {
          e(t, r)
          function __() {
            this.constructor = t
          }
          t.prototype =
            null === r
              ? Object.create(r)
              : ((__.prototype = r.prototype), new __())
        }
      })()
    Object.defineProperty(t, "__esModule", { value: !0 })
    var o,
      i = r("./node_modules/react/index.js"),
      s = "undefined" == typeof navigator
    s || (o = r("./node_modules/codemirror/lib/codemirror.js"))
    var a = (function() {
        function Shared(e, t) {
          ;(this.editor = e), (this.props = t), this.notifyOfDeprecation()
        }
        return (
          (Shared.prototype.notifyOfDeprecation = function() {
            void 0 !== this.props.autoScrollCursorOnSet &&
              console.warn(
                "`autoScrollCursorOnSet` has been deprecated. Use `autoScroll` instead\n\nSee https://github.com/scniro/react-codemirror2#props"
              ),
              void 0 !== this.props.resetCursorOnSet &&
                console.warn(
                  "`resetCursorOnSet` has been deprecated. Use `autoCursor` instead\n\nSee https://github.com/scniro/react-codemirror2#props"
                ),
              void 0 !== this.props.onSet &&
                console.warn(
                  "`onSet` has been deprecated. User `editorDidMount` instead. See https://github.com/scniro/react-codemirror2#events"
                ),
              void 0 !== this.props.onBeforeSet &&
                console.warn(
                  "`onBeforeSet` has been deprecated. User `onBeforeChange` for `Controlled`. instead. See https://github.com/scniro/react-codemirror2#events"
                )
          }),
          (Shared.prototype.wire = function(e) {
            var t = this
            switch (e) {
              case "onBlur":
                this.editor.on("blur", function(e, r) {
                  t.props.onBlur(t.editor, r)
                })
                break
              case "onCursor":
                this.editor.on("cursorActivity", function(e) {
                  t.props.onCursor(t.editor, t.editor.getCursor())
                })
                break
              case "onCursorActivity":
                this.editor.on("cursorActivity", function(e) {
                  t.props.onCursorActivity(t.editor)
                })
                break
              case "onDragEnter":
                this.editor.on("dragenter", function(e, r) {
                  t.props.onDragEnter(t.editor, r)
                })
                break
              case "onDragOver":
                this.editor.on("dragover", function(e, r) {
                  t.props.onDragOver(t.editor, r)
                })
                break
              case "onDrop":
                this.editor.on("drop", function(e, r) {
                  t.props.onDrop(t.editor, r)
                })
                break
              case "onFocus":
                this.editor.on("focus", function(e, r) {
                  t.props.onFocus(t.editor, r)
                })
                break
              case "onGutterClick":
                this.editor.on("gutterClick", function(e, r, n, o) {
                  t.props.onGutterClick(t.editor, r, n, o)
                })
                break
              case "onKeyDown":
                this.editor.on("keydown", function(e, r) {
                  t.props.onKeyDown(t.editor, r)
                })
                break
              case "onKeyPress":
                this.editor.on("keypress", function(e, r) {
                  t.props.onKeyPress(t.editor, r)
                })
                break
              case "onKeyUp":
                this.editor.on("keyup", function(e, r) {
                  t.props.onKeyUp(t.editor, r)
                })
                break
              case "onScroll":
                this.editor.on("scroll", function(e) {
                  t.props.onScroll(t.editor, t.editor.getScrollInfo())
                })
                break
              case "onSelection":
                this.editor.on("beforeSelectionChange", function(e, r) {
                  t.props.onSelection(t.editor, r)
                })
                break
              case "onUpdate":
                this.editor.on("update", function(e) {
                  t.props.onUpdate(t.editor)
                })
                break
              case "onViewportChange":
                this.editor.on("viewportChange", function(e, r, n) {
                  t.props.onViewportChange(t.editor, r, n)
                })
            }
          }),
          Shared
        )
      })(),
      l = (function(e) {
        n(Controlled, e)
        function Controlled(t) {
          var r = e.call(this, t) || this
          return s
            ? r
            : ((r.deferred = null),
              (r.emulating = !1),
              (r.hydrated = !1),
              (r.initCb = function() {
                r.props.editorDidConfigure &&
                  r.props.editorDidConfigure(r.editor)
              }),
              (r.mounted = !1),
              r)
        }
        return (
          (Controlled.prototype.setCursor = function(e, t, r) {
            var n = this.editor.getDoc()
            r && this.editor.focus(),
              t ? n.setCursor(e) : n.setCursor(e, null, { scroll: !1 })
          }),
          (Controlled.prototype.moveCursor = function(e, t) {
            var r = this.editor.getDoc()
            t ? r.setCursor(e) : r.setCursor(e, null, { scroll: !1 })
          }),
          (Controlled.prototype.hydrate = function(e) {
            var t = this
            Object.keys(e.options || {}).forEach(function(r) {
              t.editor.setOption(r, e.options[r]),
                t.mirror.setOption(r, e.options[r])
            }),
              this.hydrated ||
                (this.mounted && this.deferred
                  ? this.resolveChange()
                  : this.initChange(e.value || "")),
              (this.hydrated = !0)
          }),
          (Controlled.prototype.initChange = function(e) {
            this.emulating = !0
            var t = this.editor.lastLine(),
              r = this.editor.getLine(this.editor.lastLine()).length
            this.editor.replaceRange(
              e || "",
              { line: 0, ch: 0 },
              { line: t, ch: r }
            ),
              this.mirror.setValue(e),
              this.editor.clearHistory(),
              this.mirror.clearHistory(),
              (this.emulating = !1)
          }),
          (Controlled.prototype.resolveChange = function() {
            ;(this.emulating = !0),
              "undo" === this.deferred.origin
                ? this.editor.undo()
                : "redo" === this.deferred.origin
                  ? this.editor.redo()
                  : this.editor.replaceRange(
                      this.deferred.text,
                      this.deferred.from,
                      this.deferred.to,
                      this.deferred.origin
                    ),
              (this.emulating = !1),
              (this.deferred = null)
          }),
          (Controlled.prototype.mirrorChange = function(e) {
            return (
              "undo" === e.origin
                ? (this.editor.setHistory(this.mirror.getHistory()),
                  this.mirror.undo())
                : "redo" === e.origin
                  ? (this.editor.setHistory(this.mirror.getHistory()),
                    this.mirror.redo())
                  : this.mirror.replaceRange(e.text, e.from, e.to, e.origin),
              this.mirror.getValue()
            )
          }),
          (Controlled.prototype.componentWillMount = function() {
            s || (this.props.editorWillMount && this.props.editorWillMount())
          }),
          (Controlled.prototype.componentDidMount = function() {
            var e = this
            if (!s) {
              if (
                (this.props.defineMode &&
                  this.props.defineMode.name &&
                  this.props.defineMode.fn &&
                  o.defineMode(
                    this.props.defineMode.name,
                    this.props.defineMode.fn
                  ),
                (this.editor = o(this.ref)),
                (this.shared = new a(this.editor, this.props)),
                (this.mirror = o(function() {})),
                this.editor.on("electricInput", function() {
                  e.mirror.setHistory(e.editor.getHistory())
                }),
                this.editor.on("cursorActivity", function() {
                  e.mirror.setCursor(e.editor.getCursor())
                }),
                this.editor.on("beforeChange", function(t, r) {
                  if (!e.emulating) {
                    r.cancel(), (e.deferred = r)
                    var n = e.mirrorChange(e.deferred)
                    e.props.onBeforeChange &&
                      e.props.onBeforeChange(e.editor, e.deferred, n)
                  }
                }),
                this.editor.on("change", function(t, r) {
                  e.mounted &&
                    e.props.onChange &&
                    e.props.onChange(e.editor, r, e.editor.getValue())
                }),
                this.props.onBlur && this.shared.wire("onBlur"),
                this.props.onCursor && this.shared.wire("onCursor"),
                this.props.onCursorActivity &&
                  this.shared.wire("onCursorActivity"),
                this.props.onDragEnter && this.shared.wire("onDragEnter"),
                this.props.onDragOver && this.shared.wire("onDragOver"),
                this.props.onDrop && this.shared.wire("onDrop"),
                this.props.onFocus && this.shared.wire("onFocus"),
                this.props.onGutterClick && this.shared.wire("onGutterClick"),
                this.props.onKeyDown && this.shared.wire("onKeyDown"),
                this.props.onKeyPress && this.shared.wire("onKeyPress"),
                this.props.onKeyUp && this.shared.wire("onKeyUp"),
                this.props.onScroll && this.shared.wire("onScroll"),
                this.props.onSelection && this.shared.wire("onSelection"),
                this.props.onUpdate && this.shared.wire("onUpdate"),
                this.props.onViewportChange &&
                  this.shared.wire("onViewportChange"),
                this.hydrate(this.props),
                this.props.selection)
              ) {
                this.editor.getDoc().setSelections(this.props.selection)
              }
              this.props.cursor &&
                this.setCursor(
                  this.props.cursor,
                  this.props.autoScroll || !1,
                  this.props.autoFocus || !1
                ),
                this.props.scroll &&
                  this.editor.scrollTo(
                    this.props.scroll.x,
                    this.props.scroll.y
                  ),
                (this.mounted = !0),
                this.props.editorDidMount &&
                  this.props.editorDidMount(
                    this.editor,
                    this.editor.getValue(),
                    this.initCb
                  )
            }
          }),
          (Controlled.prototype.componentWillReceiveProps = function(e) {
            if (!s) {
              var t
              e.value !== this.props.value && (this.hydrated = !1),
                this.props.autoCursor ||
                  void 0 === this.props.autoCursor ||
                  (t = this.editor.getCursor()),
                this.hydrate(e),
                this.props.autoCursor ||
                  void 0 === this.props.autoCursor ||
                  this.moveCursor(t, this.props.autoScroll || !1)
            }
          }),
          (Controlled.prototype.componentWillUnmount = function() {
            s ||
              (this.props.editorWillUnmount && this.props.editorWillUnmount(o))
          }),
          (Controlled.prototype.shouldComponentUpdate = function(e, t) {
            return !s
          }),
          (Controlled.prototype.render = function() {
            var e = this
            if (s) return null
            var t = this.props.className
              ? "react-codemirror2 " + this.props.className
              : "react-codemirror2"
            return i.createElement("div", {
              className: t,
              ref: function(t) {
                return (e.ref = t)
              },
            })
          }),
          Controlled
        )
      })(i.Component)
    t.Controlled = l
    var c = (function(e) {
      n(UnControlled, e)
      function UnControlled(t) {
        var r = e.call(this, t) || this
        return s
          ? r
          : ((r.continueChange = !1),
            (r.hydrated = !1),
            (r.initCb = function() {
              r.props.editorDidConfigure && r.props.editorDidConfigure(r.editor)
            }),
            (r.mounted = !1),
            (r.onBeforeChangeCb = function() {
              r.continueChange = !0
            }),
            r)
      }
      return (
        (UnControlled.prototype.setCursor = function(e, t, r) {
          var n = this.editor.getDoc()
          r && this.editor.focus(),
            t ? n.setCursor(e) : n.setCursor(e, null, { scroll: !1 })
        }),
        (UnControlled.prototype.moveCursor = function(e, t) {
          var r = this.editor.getDoc()
          t ? r.setCursor(e) : r.setCursor(e, null, { scroll: !1 })
        }),
        (UnControlled.prototype.hydrate = function(e) {
          var t = this
          if (
            (Object.keys(e.options || {}).forEach(function(r) {
              return t.editor.setOption(r, e.options[r])
            }),
            !this.hydrated)
          ) {
            var r = this.editor.lastLine(),
              n = this.editor.getLine(this.editor.lastLine()).length
            this.editor.replaceRange(
              e.value || "",
              { line: 0, ch: 0 },
              { line: r, ch: n }
            )
          }
          this.hydrated = !0
        }),
        (UnControlled.prototype.componentWillMount = function() {
          s || (this.props.editorWillMount && this.props.editorWillMount())
        }),
        (UnControlled.prototype.componentDidMount = function() {
          var e = this
          if (!s) {
            if (
              (this.props.defineMode &&
                this.props.defineMode.name &&
                this.props.defineMode.fn &&
                o.defineMode(
                  this.props.defineMode.name,
                  this.props.defineMode.fn
                ),
              (this.editor = o(this.ref)),
              (this.shared = new a(this.editor, this.props)),
              this.editor.on("beforeChange", function(t, r) {
                e.props.onBeforeChange &&
                  e.props.onBeforeChange(e.editor, r, null, e.onBeforeChangeCb)
              }),
              this.editor.on("change", function(t, r) {
                if (e.mounted)
                  if (e.props.onBeforeChange) {
                    if (!e.continueChange) return
                    e.props.onChange(e.editor, r, e.editor.getValue())
                  } else e.props.onChange(e.editor, r, e.editor.getValue())
              }),
              this.props.onBlur && this.shared.wire("onBlur"),
              this.props.onCursor && this.shared.wire("onCursor"),
              this.props.onCursorActivity &&
                this.shared.wire("onCursorActivity"),
              this.props.onDragEnter && this.shared.wire("onDragEnter"),
              this.props.onDragOver && this.shared.wire("onDragOver"),
              this.props.onDrop && this.shared.wire("onDrop"),
              this.props.onFocus && this.shared.wire("onFocus"),
              this.props.onGutterClick && this.shared.wire("onGutterClick"),
              this.props.onKeyDown && this.shared.wire("onKeyDown"),
              this.props.onKeyPress && this.shared.wire("onKeyPress"),
              this.props.onKeyUp && this.shared.wire("onKeyUp"),
              this.props.onScroll && this.shared.wire("onScroll"),
              this.props.onSelection && this.shared.wire("onSelection"),
              this.props.onUpdate && this.shared.wire("onUpdate"),
              this.props.onViewportChange &&
                this.shared.wire("onViewportChange"),
              this.hydrate(this.props),
              this.props.selection)
            ) {
              this.editor.getDoc().setSelections(this.props.selection)
            }
            this.props.cursor &&
              this.setCursor(
                this.props.cursor,
                this.props.autoScroll || !1,
                this.props.autoFocus || !1
              ),
              this.props.scroll &&
                this.editor.scrollTo(this.props.scroll.x, this.props.scroll.y),
              (this.mounted = !0),
              this.editor.clearHistory(),
              this.props.editorDidMount &&
                this.props.editorDidMount(
                  this.editor,
                  this.editor.getValue(),
                  this.initCb
                )
          }
        }),
        (UnControlled.prototype.componentWillReceiveProps = function(e) {
          if (!s) {
            var t
            e.value !== this.props.value && (this.hydrated = !1),
              this.props.autoCursor ||
                void 0 === this.props.autoCursor ||
                (t = this.editor.getCursor()),
              this.hydrate(e),
              this.props.autoCursor ||
                void 0 === this.props.autoCursor ||
                this.moveCursor(t, this.props.autoScroll || !1)
          }
        }),
        (UnControlled.prototype.componentWillUnmount = function() {
          s || (this.props.editorWillUnmount && this.props.editorWillUnmount(o))
        }),
        (UnControlled.prototype.shouldComponentUpdate = function(e, t) {
          return !s
        }),
        (UnControlled.prototype.render = function() {
          var e = this
          if (s) return null
          var t = this.props.className
            ? "react-codemirror2 " + this.props.className
            : "react-codemirror2"
          return i.createElement("div", {
            className: t,
            ref: function(t) {
              return (e.ref = t)
            },
          })
        }),
        UnControlled
      )
    })(i.Component)
    t.UnControlled = c
  },
  "./node_modules/react-styleguidist/lib/rsg-components/Editor/Editor.js": function(
    e,
    t,
    r
  ) {
    "use strict"
    Object.defineProperty(t, "__esModule", { value: !0 })
    var n = r("./node_modules/react/index.js"),
      o = r.n(n),
      i = r("./node_modules/prop-types/index.js"),
      s = r.n(i),
      a = r("./node_modules/lodash/debounce.js"),
      l = r.n(a),
      c = r("./node_modules/react-codemirror2/index.js"),
      u = (r.n(c), r("./node_modules/codemirror/mode/jsx/jsx.js")),
      d = (r.n(u),
      Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t]
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }),
      p = (function() {
        function defineProperties(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r]
            ;(n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n)
          }
        }
        return function(e, t, r) {
          return (
            t && defineProperties(e.prototype, t),
            r && defineProperties(e, r),
            e
          )
        }
      })()
    r(
      "./node_modules/react-styleguidist/loaders/style-loader.js!./node_modules/react-styleguidist/loaders/css-loader.js!./node_modules/codemirror/lib/codemirror.css"
    ),
      r(
        "./node_modules/react-styleguidist/loaders/style-loader.js!./node_modules/react-styleguidist/loaders/css-loader.js!./node_modules/codemirror/theme/base16-light.css"
      )
    var h = {
        mode: "jsx",
        lineNumbers: !1,
        lineWrapping: !0,
        smartIndent: !1,
        matchBrackets: !0,
        viewportMargin: 1 / 0,
      },
      f = 10,
      g = (function(e) {
        !(function _inherits(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof t
            )
          ;(e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
            t &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(e, t)
                : (e.__proto__ = t))
        })(Editor, n["Component"])
        function Editor() {
          !(function _classCallCheck(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function")
          })(this, Editor)
          var e = (function _possibleConstructorReturn(e, t) {
            if (!e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              )
            return !t || ("object" != typeof t && "function" != typeof t)
              ? e
              : t
          })(
            this,
            (Editor.__proto__ || Object.getPrototypeOf(Editor)).call(this)
          )
          return (e.handleChange = l()(e.handleChange.bind(e), f)), e
        }
        return (
          p(Editor, [
            {
              key: "shouldComponentUpdate",
              value: function shouldComponentUpdate() {
                return !1
              },
            },
            {
              key: "handleChange",
              value: function handleChange(e, t, r) {
                this.props.onChange(r)
              },
            },
            {
              key: "render",
              value: function render() {
                var e = this.props.code,
                  t = this.context.config.highlightTheme,
                  r = d({}, h, { theme: t })
                return o.a.createElement(c.UnControlled, {
                  value: e,
                  onChange: this.handleChange,
                  options: r,
                })
              },
            },
          ]),
          Editor
        )
      })()
    ;(g.propTypes = {
      code: s.a.string.isRequired,
      onChange: s.a.func.isRequired,
    }),
      (g.contextTypes = { config: s.a.object.isRequired }),
      (t.default = g)
  },
  "./node_modules/react-styleguidist/loaders/css-loader.js!./node_modules/codemirror/lib/codemirror.css": function(
    e,
    t,
    r
  ) {
    ;(e.exports = r("./node_modules/css-loader/lib/css-base.js")(void 0)).push([
      e.i,
      "/* BASICS */\n\n.CodeMirror {\n  /* Set height, width, borders, and global font properties here */\n  font-family: monospace;\n  height: 300px;\n  color: black;\n  direction: ltr;\n}\n\n/* PADDING */\n\n.CodeMirror-lines {\n  padding: 4px 0; /* Vertical padding around content */\n}\n.CodeMirror pre {\n  padding: 0 4px; /* Horizontal padding of content */\n}\n\n.CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {\n  background-color: white; /* The little square between H and V scrollbars */\n}\n\n/* GUTTER */\n\n.CodeMirror-gutters {\n  border-right: 1px solid #ddd;\n  background-color: #f7f7f7;\n  white-space: nowrap;\n}\n.CodeMirror-linenumbers {}\n.CodeMirror-linenumber {\n  padding: 0 3px 0 5px;\n  min-width: 20px;\n  text-align: right;\n  color: #999;\n  white-space: nowrap;\n}\n\n.CodeMirror-guttermarker { color: black; }\n.CodeMirror-guttermarker-subtle { color: #999; }\n\n/* CURSOR */\n\n.CodeMirror-cursor {\n  border-left: 1px solid black;\n  border-right: none;\n  width: 0;\n}\n/* Shown when moving in bi-directional text */\n.CodeMirror div.CodeMirror-secondarycursor {\n  border-left: 1px solid silver;\n}\n.cm-fat-cursor .CodeMirror-cursor {\n  width: auto;\n  border: 0 !important;\n  background: #7e7;\n}\n.cm-fat-cursor div.CodeMirror-cursors {\n  z-index: 1;\n}\n.cm-fat-cursor-mark {\n  background-color: rgba(20, 255, 20, 0.5);\n  -webkit-animation: blink 1.06s steps(1) infinite;\n  -moz-animation: blink 1.06s steps(1) infinite;\n  animation: blink 1.06s steps(1) infinite;\n}\n.cm-animate-fat-cursor {\n  width: auto;\n  border: 0;\n  -webkit-animation: blink 1.06s steps(1) infinite;\n  -moz-animation: blink 1.06s steps(1) infinite;\n  animation: blink 1.06s steps(1) infinite;\n  background-color: #7e7;\n}\n@-moz-keyframes blink {\n  0% {}\n  50% { background-color: transparent; }\n  100% {}\n}\n@-webkit-keyframes blink {\n  0% {}\n  50% { background-color: transparent; }\n  100% {}\n}\n@keyframes blink {\n  0% {}\n  50% { background-color: transparent; }\n  100% {}\n}\n\n/* Can style cursor different in overwrite (non-insert) mode */\n.CodeMirror-overwrite .CodeMirror-cursor {}\n\n.cm-tab { display: inline-block; text-decoration: inherit; }\n\n.CodeMirror-rulers {\n  position: absolute;\n  left: 0; right: 0; top: -50px; bottom: -20px;\n  overflow: hidden;\n}\n.CodeMirror-ruler {\n  border-left: 1px solid #ccc;\n  top: 0; bottom: 0;\n  position: absolute;\n}\n\n/* DEFAULT THEME */\n\n.cm-s-default .cm-header {color: blue;}\n.cm-s-default .cm-quote {color: #090;}\n.cm-negative {color: #d44;}\n.cm-positive {color: #292;}\n.cm-header, .cm-strong {font-weight: bold;}\n.cm-em {font-style: italic;}\n.cm-link {text-decoration: underline;}\n.cm-strikethrough {text-decoration: line-through;}\n\n.cm-s-default .cm-keyword {color: #708;}\n.cm-s-default .cm-atom {color: #219;}\n.cm-s-default .cm-number {color: #164;}\n.cm-s-default .cm-def {color: #00f;}\n.cm-s-default .cm-variable,\n.cm-s-default .cm-punctuation,\n.cm-s-default .cm-property,\n.cm-s-default .cm-operator {}\n.cm-s-default .cm-variable-2 {color: #05a;}\n.cm-s-default .cm-variable-3, .cm-s-default .cm-type {color: #085;}\n.cm-s-default .cm-comment {color: #a50;}\n.cm-s-default .cm-string {color: #a11;}\n.cm-s-default .cm-string-2 {color: #f50;}\n.cm-s-default .cm-meta {color: #555;}\n.cm-s-default .cm-qualifier {color: #555;}\n.cm-s-default .cm-builtin {color: #30a;}\n.cm-s-default .cm-bracket {color: #997;}\n.cm-s-default .cm-tag {color: #170;}\n.cm-s-default .cm-attribute {color: #00c;}\n.cm-s-default .cm-hr {color: #999;}\n.cm-s-default .cm-link {color: #00c;}\n\n.cm-s-default .cm-error {color: #f00;}\n.cm-invalidchar {color: #f00;}\n\n.CodeMirror-composing { border-bottom: 2px solid; }\n\n/* Default styles for common addons */\n\ndiv.CodeMirror span.CodeMirror-matchingbracket {color: #0b0;}\ndiv.CodeMirror span.CodeMirror-nonmatchingbracket {color: #a22;}\n.CodeMirror-matchingtag { background: rgba(255, 150, 0, .3); }\n.CodeMirror-activeline-background {background: #e8f2ff;}\n\n/* STOP */\n\n/* The rest of this file contains styles related to the mechanics of\n   the editor. You probably shouldn't touch them. */\n\n.CodeMirror {\n  position: relative;\n  overflow: hidden;\n  background: white;\n}\n\n.CodeMirror-scroll {\n  overflow: scroll !important; /* Things will break if this is overridden */\n  /* 30px is the magic margin used to hide the element's real scrollbars */\n  /* See overflow: hidden in .CodeMirror */\n  margin-bottom: -30px; margin-right: -30px;\n  padding-bottom: 30px;\n  height: 100%;\n  outline: none; /* Prevent dragging from highlighting the element */\n  position: relative;\n}\n.CodeMirror-sizer {\n  position: relative;\n  border-right: 30px solid transparent;\n}\n\n/* The fake, visible scrollbars. Used to force redraw during scrolling\n   before actual scrolling happens, thus preventing shaking and\n   flickering artifacts. */\n.CodeMirror-vscrollbar, .CodeMirror-hscrollbar, .CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {\n  position: absolute;\n  z-index: 6;\n  display: none;\n}\n.CodeMirror-vscrollbar {\n  right: 0; top: 0;\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n.CodeMirror-hscrollbar {\n  bottom: 0; left: 0;\n  overflow-y: hidden;\n  overflow-x: scroll;\n}\n.CodeMirror-scrollbar-filler {\n  right: 0; bottom: 0;\n}\n.CodeMirror-gutter-filler {\n  left: 0; bottom: 0;\n}\n\n.CodeMirror-gutters {\n  position: absolute; left: 0; top: 0;\n  min-height: 100%;\n  z-index: 3;\n}\n.CodeMirror-gutter {\n  white-space: normal;\n  height: 100%;\n  display: inline-block;\n  vertical-align: top;\n  margin-bottom: -30px;\n}\n.CodeMirror-gutter-wrapper {\n  position: absolute;\n  z-index: 4;\n  background: none !important;\n  border: none !important;\n}\n.CodeMirror-gutter-background {\n  position: absolute;\n  top: 0; bottom: 0;\n  z-index: 4;\n}\n.CodeMirror-gutter-elt {\n  position: absolute;\n  cursor: default;\n  z-index: 4;\n}\n.CodeMirror-gutter-wrapper ::selection { background-color: transparent }\n.CodeMirror-gutter-wrapper ::-moz-selection { background-color: transparent }\n\n.CodeMirror-lines {\n  cursor: text;\n  min-height: 1px; /* prevents collapsing before first draw */\n}\n.CodeMirror pre {\n  /* Reset some styles that the rest of the page might have set */\n  -moz-border-radius: 0; -webkit-border-radius: 0; border-radius: 0;\n  border-width: 0;\n  background: transparent;\n  font-family: inherit;\n  font-size: inherit;\n  margin: 0;\n  white-space: pre;\n  word-wrap: normal;\n  line-height: inherit;\n  color: inherit;\n  z-index: 2;\n  position: relative;\n  overflow: visible;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-font-variant-ligatures: contextual;\n  font-variant-ligatures: contextual;\n}\n.CodeMirror-wrap pre {\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  word-break: normal;\n}\n\n.CodeMirror-linebackground {\n  position: absolute;\n  left: 0; right: 0; top: 0; bottom: 0;\n  z-index: 0;\n}\n\n.CodeMirror-linewidget {\n  position: relative;\n  z-index: 2;\n  padding: 0.1px; /* Force widget margins to stay inside of the container */\n}\n\n.CodeMirror-widget {}\n\n.CodeMirror-rtl pre { direction: rtl; }\n\n.CodeMirror-code {\n  outline: none;\n}\n\n/* Force content-box sizing for the elements where we expect it */\n.CodeMirror-scroll,\n.CodeMirror-sizer,\n.CodeMirror-gutter,\n.CodeMirror-gutters,\n.CodeMirror-linenumber {\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n}\n\n.CodeMirror-measure {\n  position: absolute;\n  width: 100%;\n  height: 0;\n  overflow: hidden;\n  visibility: hidden;\n}\n\n.CodeMirror-cursor {\n  position: absolute;\n  pointer-events: none;\n}\n.CodeMirror-measure pre { position: static; }\n\ndiv.CodeMirror-cursors {\n  visibility: hidden;\n  position: relative;\n  z-index: 3;\n}\ndiv.CodeMirror-dragcursors {\n  visibility: visible;\n}\n\n.CodeMirror-focused div.CodeMirror-cursors {\n  visibility: visible;\n}\n\n.CodeMirror-selected { background: #d9d9d9; }\n.CodeMirror-focused .CodeMirror-selected { background: #d7d4f0; }\n.CodeMirror-crosshair { cursor: crosshair; }\n.CodeMirror-line::selection, .CodeMirror-line > span::selection, .CodeMirror-line > span > span::selection { background: #d7d4f0; }\n.CodeMirror-line::-moz-selection, .CodeMirror-line > span::-moz-selection, .CodeMirror-line > span > span::-moz-selection { background: #d7d4f0; }\n\n.cm-searching {\n  background-color: #ffa;\n  background-color: rgba(255, 255, 0, .4);\n}\n\n/* Used to force a border model for a node */\n.cm-force-border { padding-right: .1px; }\n\n@media print {\n  /* Hide the cursor when printing */\n  .CodeMirror div.CodeMirror-cursors {\n    visibility: hidden;\n  }\n}\n\n/* See issue #2901 */\n.cm-tab-wrap-hack:after { content: ''; }\n\n/* Help users use markselection to safely style text background */\nspan.CodeMirror-selectedtext { background: none; }\n",
      "",
    ])
  },
  "./node_modules/react-styleguidist/loaders/css-loader.js!./node_modules/codemirror/theme/base16-light.css": function(
    e,
    t,
    r
  ) {
    ;(e.exports = r("./node_modules/css-loader/lib/css-base.js")(void 0)).push([
      e.i,
      "/*\n\n    Name:       Base16 Default Light\n    Author:     Chris Kempson (http://chriskempson.com)\n\n    CodeMirror template by Jan T. Sott (https://github.com/idleberg/base16-codemirror)\n    Original Base16 color scheme by Chris Kempson (https://github.com/chriskempson/base16)\n\n*/\n\n.cm-s-base16-light.CodeMirror { background: #f5f5f5; color: #202020; }\n.cm-s-base16-light div.CodeMirror-selected { background: #e0e0e0; }\n.cm-s-base16-light .CodeMirror-line::selection, .cm-s-base16-light .CodeMirror-line > span::selection, .cm-s-base16-light .CodeMirror-line > span > span::selection { background: #e0e0e0; }\n.cm-s-base16-light .CodeMirror-line::-moz-selection, .cm-s-base16-light .CodeMirror-line > span::-moz-selection, .cm-s-base16-light .CodeMirror-line > span > span::-moz-selection { background: #e0e0e0; }\n.cm-s-base16-light .CodeMirror-gutters { background: #f5f5f5; border-right: 0px; }\n.cm-s-base16-light .CodeMirror-guttermarker { color: #ac4142; }\n.cm-s-base16-light .CodeMirror-guttermarker-subtle { color: #b0b0b0; }\n.cm-s-base16-light .CodeMirror-linenumber { color: #b0b0b0; }\n.cm-s-base16-light .CodeMirror-cursor { border-left: 1px solid #505050; }\n\n.cm-s-base16-light span.cm-comment { color: #8f5536; }\n.cm-s-base16-light span.cm-atom { color: #aa759f; }\n.cm-s-base16-light span.cm-number { color: #aa759f; }\n\n.cm-s-base16-light span.cm-property, .cm-s-base16-light span.cm-attribute { color: #90a959; }\n.cm-s-base16-light span.cm-keyword { color: #ac4142; }\n.cm-s-base16-light span.cm-string { color: #f4bf75; }\n\n.cm-s-base16-light span.cm-variable { color: #90a959; }\n.cm-s-base16-light span.cm-variable-2 { color: #6a9fb5; }\n.cm-s-base16-light span.cm-def { color: #d28445; }\n.cm-s-base16-light span.cm-bracket { color: #202020; }\n.cm-s-base16-light span.cm-tag { color: #ac4142; }\n.cm-s-base16-light span.cm-link { color: #aa759f; }\n.cm-s-base16-light span.cm-error { background: #ac4142; color: #505050; }\n\n.cm-s-base16-light .CodeMirror-activeline-background { background: #DDDCDC; }\n.cm-s-base16-light .CodeMirror-matchingbracket { text-decoration: underline; color: white !important; }\n",
      "",
    ])
  },
  "./node_modules/react-styleguidist/loaders/style-loader.js!./node_modules/react-styleguidist/loaders/css-loader.js!./node_modules/codemirror/lib/codemirror.css": function(
    e,
    t,
    r
  ) {
    var n = r(
      "./node_modules/react-styleguidist/loaders/css-loader.js!./node_modules/codemirror/lib/codemirror.css"
    )
    "string" == typeof n && (n = [[e.i, n, ""]])
    var o = { hmr: !0 }
    o.transform = void 0
    r(
      "./node_modules/react-styleguidist/node_modules/style-loader/lib/addStyles.js"
    )(n, o)
    n.locals && (e.exports = n.locals)
  },
  "./node_modules/react-styleguidist/loaders/style-loader.js!./node_modules/react-styleguidist/loaders/css-loader.js!./node_modules/codemirror/theme/base16-light.css": function(
    e,
    t,
    r
  ) {
    var n = r(
      "./node_modules/react-styleguidist/loaders/css-loader.js!./node_modules/codemirror/theme/base16-light.css"
    )
    "string" == typeof n && (n = [[e.i, n, ""]])
    var o = { hmr: !0 }
    o.transform = void 0
    r(
      "./node_modules/react-styleguidist/node_modules/style-loader/lib/addStyles.js"
    )(n, o)
    n.locals && (e.exports = n.locals)
  },
})
