/*
 AngularJS v1.2.6
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(Y, O, r) {
	'use strict';

	function s(b) {
		return function() {
			var a = arguments[0],
				c, a = "[" + (b ? b + ":" : "") + a + "] http://errors.angularjs.org/1.2.6/" + (b ? b + "/" : "") + a;
			for (c = 1; c < arguments.length; c++) a = a + (1 == c ? "?" : "&") + "p" + (c - 1) + "=" + encodeURIComponent("function" == typeof arguments[c] ? arguments[c].toString()
				.replace(/ \{[\s\S]*$/, "") : "undefined" == typeof arguments[c] ? "undefined" : "string" != typeof arguments[c] ? JSON.stringify(arguments[c]) : arguments[c]);
			return Error(a)
		}
	}

	function ob(b) {
		if (null == b || ya(b)) return !1;
		var a =
			b.length;
		return 1 === b.nodeType && a ? !0 : E(b) || I(b) || 0 === a || "number" === typeof a && 0 < a && a - 1 in b
	}

	function q(b, a, c) {
		var d;
		if (b)
			if (J(b))
				for (d in b) "prototype" == d || ("length" == d || "name" == d || b.hasOwnProperty && !b.hasOwnProperty(d)) || a.call(c, b[d], d);
			else
		if (b.forEach && b.forEach !== q) b.forEach(a, c);
		else if (ob(b))
			for (d = 0; d < b.length; d++) a.call(c, b[d], d);
		else
			for (d in b) b.hasOwnProperty(d) && a.call(c, b[d], d);
		return b
	}

	function Nb(b) {
		var a = [],
			c;
		for (c in b) b.hasOwnProperty(c) && a.push(c);
		return a.sort()
	}

	function Nc(b,
		a, c) {
		for (var d = Nb(b), e = 0; e < d.length; e++) a.call(c, b[d[e]], d[e]);
		return d
	}

	function Ob(b) {
		return function(a, c) {
			b(c, a)
		}
	}

	function Xa() {
		for (var b = ia.length, a; b;) {
			b--;
			a = ia[b].charCodeAt(0);
			if (57 == a) return ia[b] = "A", ia.join("");
			if (90 == a) ia[b] = "0";
			else return ia[b] = String.fromCharCode(a + 1), ia.join("")
		}
		ia.unshift("0");
		return ia.join("")
	}

	function Pb(b, a) {
		a ? b.$$hashKey = a : delete b.$$hashKey
	}

	function x(b) {
		var a = b.$$hashKey;
		q(arguments, function(a) {
			a !== b && q(a, function(a, c) {
				b[c] = a
			})
		});
		Pb(b, a);
		return b
	}

	function P(b) {
		return parseInt(b,
			10)
	}

	function Qb(b, a) {
		return x(new(x(function() {}, {
			prototype: b
		})), a)
	}

	function y() {}

	function za(b) {
		return b
	}

	function Z(b) {
		return function() {
			return b
		}
	}

	function D(b) {
		return "undefined" === typeof b
	}

	function v(b) {
		return "undefined" !== typeof b
	}

	function V(b) {
		return null != b && "object" === typeof b
	}

	function E(b) {
		return "string" === typeof b
	}

	function pb(b) {
		return "number" === typeof b
	}

	function Ja(b) {
		return "[object Date]" === Ya.call(b)
	}

	function I(b) {
		return "[object Array]" === Ya.call(b)
	}

	function J(b) {
		return "function" === typeof b
	}

	function Za(b) {
		return "[object RegExp]" === Ya.call(b)
	}

	function ya(b) {
		return b && b.document && b.location && b.alert && b.setInterval
	}

	function Oc(b) {
		return !(!b || !(b.nodeName || b.on && b.find))
	}

	function Pc(b, a, c) {
		var d = [];
		q(b, function(b, g, f) {
			d.push(a.call(c, b, g, f))
		});
		return d
	}

	function $a(b, a) {
		if (b.indexOf) return b.indexOf(a);
		for (var c = 0; c < b.length; c++)
			if (a === b[c]) return c;
		return -1
	}

	function Ka(b, a) {
		var c = $a(b, a);
		0 <= c && b.splice(c, 1);
		return a
	}

	function ea(b, a) {
		if (ya(b) || b && b.$evalAsync && b.$watch) throw La("cpws");
		if (a) {
			if (b ===
				a) throw La("cpi");
			if (I(b))
				for (var c = a.length = 0; c < b.length; c++) a.push(ea(b[c]));
			else {
				c = a.$$hashKey;
				q(a, function(b, c) {
					delete a[c]
				});
				for (var d in b) a[d] = ea(b[d]);
				Pb(a, c)
			}
		} else(a = b) && (I(b) ? a = ea(b, []) : Ja(b) ? a = new Date(b.getTime()) : Za(b) ? a = RegExp(b.source) : V(b) && (a = ea(b, {})));
		return a
	}

	function Rb(b, a) {
		a = a || {};
		for (var c in b) b.hasOwnProperty(c) && ("$" !== c.charAt(0) && "$" !== c.charAt(1)) && (a[c] = b[c]);
		return a
	}

	function ta(b, a) {
		if (b === a) return !0;
		if (null === b || null === a) return !1;
		if (b !== b && a !== a) return !0;
		var c = typeof b,
			d;
		if (c == typeof a && "object" == c)
			if (I(b)) {
				if (!I(a)) return !1;
				if ((c = b.length) == a.length) {
					for (d = 0; d < c; d++)
						if (!ta(b[d], a[d])) return !1;
					return !0
				}
			} else {
				if (Ja(b)) return Ja(a) && b.getTime() == a.getTime();
				if (Za(b) && Za(a)) return b.toString() == a.toString();
				if (b && b.$evalAsync && b.$watch || a && a.$evalAsync && a.$watch || ya(b) || ya(a) || I(a)) return !1;
				c = {};
				for (d in b)
					if ("$" !== d.charAt(0) && !J(b[d])) {
						if (!ta(b[d], a[d])) return !1;
						c[d] = !0
					}
				for (d in a)
					if (!c.hasOwnProperty(d) && "$" !== d.charAt(0) && a[d] !== r && !J(a[d])) return !1;
				return !0
			}
		return !1
	}

	function Sb() {
		return O.securityPolicy && O.securityPolicy.isActive || O.querySelector && !(!O.querySelector("[ng-csp]") && !O.querySelector("[data-ng-csp]"))
	}

	function qb(b, a) {
		var c = 2 < arguments.length ? ua.call(arguments, 2) : [];
		return !J(a) || a instanceof RegExp ? a : c.length ? function() {
			return arguments.length ? a.apply(b, c.concat(ua.call(arguments, 0))) : a.apply(b, c)
		} : function() {
			return arguments.length ? a.apply(b, arguments) : a.call(b)
		}
	}

	function Qc(b, a) {
		var c = a;
		"string" === typeof b && "$" === b.charAt(0) ? c = r : ya(a) ? c = "$WINDOW" :
			a && O === a ? c = "$DOCUMENT" : a && (a.$evalAsync && a.$watch) && (c = "$SCOPE");
		return c
	}

	function oa(b, a) {
		return "undefined" === typeof b ? r : JSON.stringify(b, Qc, a ? "  " : null)
	}

	function Tb(b) {
		return E(b) ? JSON.parse(b) : b
	}

	function Ma(b) {
		b && 0 !== b.length ? (b = C("" + b), b = !("f" == b || "0" == b || "false" == b || "no" == b || "n" == b || "[]" == b)) : b = !1;
		return b
	}

	function fa(b) {
		b = u(b)
			.clone();
		try {
			b.empty()
		} catch (a) {}
		var c = u("<div>")
			.append(b)
			.html();
		try {
			return 3 === b[0].nodeType ? C(c) : c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function(a, b) {
				return "<" +
					C(b)
			})
		} catch (d) {
			return C(c)
		}
	}

	function Ub(b) {
		try {
			return decodeURIComponent(b)
		} catch (a) {}
	}

	function Vb(b) {
		var a = {}, c, d;
		q((b || "")
			.split("&"), function(b) {
				b && (c = b.split("="), d = Ub(c[0]), v(d) && (b = v(c[1]) ? Ub(c[1]) : !0, a[d] ? I(a[d]) ? a[d].push(b) : a[d] = [a[d], b] : a[d] = b))
			});
		return a
	}

	function Wb(b) {
		var a = [];
		q(b, function(b, d) {
			I(b) ? q(b, function(b) {
				a.push(va(d, !0) + (!0 === b ? "" : "=" + va(b, !0)))
			}) : a.push(va(d, !0) + (!0 === b ? "" : "=" + va(b, !0)))
		});
		return a.length ? a.join("&") : ""
	}

	function rb(b) {
		return va(b, !0)
			.replace(/%26/gi, "&")
			.replace(/%3D/gi,
				"=")
			.replace(/%2B/gi, "+")
	}

	function va(b, a) {
		return encodeURIComponent(b)
			.replace(/%40/gi, "@")
			.replace(/%3A/gi, ":")
			.replace(/%24/g, "$")
			.replace(/%2C/gi, ",")
			.replace(/%20/g, a ? "%20" : "+")
	}

	function Rc(b, a) {
		function c(a) {
			a && d.push(a)
		}
		var d = [b],
			e, g, f = ["ng:app", "ng-app", "x-ng-app", "data-ng-app"],
			h = /\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;
		q(f, function(a) {
			f[a] = !0;
			c(O.getElementById(a));
			a = a.replace(":", "\\:");
			b.querySelectorAll && (q(b.querySelectorAll("." + a), c), q(b.querySelectorAll("." + a + "\\:"), c), q(b.querySelectorAll("[" +
				a + "]"), c))
		});
		q(d, function(a) {
			if (!e) {
				var b = h.exec(" " + a.className + " ");
				b ? (e = a, g = (b[2] || "")
					.replace(/\s+/g, ",")) : q(a.attributes, function(b) {
					!e && f[b.name] && (e = a, g = b.value)
				})
			}
		});
		e && a(e, g ? [g] : [])
	}

	function Xb(b, a) {
		var c = function() {
			b = u(b);
			if (b.injector()) {
				var c = b[0] === O ? "document" : fa(b);
				throw La("btstrpd", c);
			}
			a = a || [];
			a.unshift(["$provide",
				function(a) {
					a.value("$rootElement", b)
				}
			]);
			a.unshift("ng");
			c = Yb(a);
			c.invoke(["$rootScope", "$rootElement", "$compile", "$injector", "$animate",
				function(a, b, c, d, e) {
					a.$apply(function() {
						b.data("$injector",
							d);
						c(b)(a)
					})
				}
			]);
			return c
		}, d = /^NG_DEFER_BOOTSTRAP!/;
		if (Y && !d.test(Y.name)) return c();
		Y.name = Y.name.replace(d, "");
		Na.resumeBootstrap = function(b) {
			q(b, function(b) {
				a.push(b)
			});
			c()
		}
	}

	function ab(b, a) {
		a = a || "_";
		return b.replace(Sc, function(b, d) {
			return (d ? a : "") + b.toLowerCase()
		})
	}

	function sb(b, a, c) {
		if (!b) throw La("areq", a || "?", c || "required");
		return b
	}

	function Oa(b, a, c) {
		c && I(b) && (b = b[b.length - 1]);
		sb(J(b), a, "not a function, got " + (b && "object" == typeof b ? b.constructor.name || "Object" : typeof b));
		return b
	}

	function wa(b,
		a) {
		if ("hasOwnProperty" === b) throw La("badname", a);
	}

	function tb(b, a, c) {
		if (!a) return b;
		a = a.split(".");
		for (var d, e = b, g = a.length, f = 0; f < g; f++) d = a[f], b && (b = (e = b)[d]);
		return !c && J(b) ? qb(e, b) : b
	}

	function ub(b) {
		var a = b[0];
		b = b[b.length - 1];
		if (a === b) return u(a);
		var c = [a];
		do {
			a = a.nextSibling;
			if (!a) break;
			c.push(a)
		} while (a !== b);
		return u(c)
	}

	function Tc(b) {
		var a = s("$injector"),
			c = s("ng");
		b = b.angular || (b.angular = {});
		b.$$minErr = b.$$minErr || s;
		return b.module || (b.module = function() {
			var b = {};
			return function(e, g, f) {
				if ("hasOwnProperty" ===
					e) throw c("badname", "module");
				g && b.hasOwnProperty(e) && (b[e] = null);
				return b[e] || (b[e] = function() {
					function b(a, d, e) {
						return function() {
							c[e || "push"]([a, d, arguments]);
							return n
						}
					}
					if (!g) throw a("nomod", e);
					var c = [],
						d = [],
						m = b("$injector", "invoke"),
						n = {
							_invokeQueue: c,
							_runBlocks: d,
							requires: g,
							name: e,
							provider: b("$provide", "provider"),
							factory: b("$provide", "factory"),
							service: b("$provide", "service"),
							value: b("$provide", "value"),
							constant: b("$provide", "constant", "unshift"),
							animation: b("$animateProvider", "register"),
							filter: b("$filterProvider",
								"register"),
							controller: b("$controllerProvider", "register"),
							directive: b("$compileProvider", "directive"),
							config: m,
							run: function(a) {
								d.push(a);
								return this
							}
						};
					f && m(f);
					return n
				}())
			}
		}())
	}

	function Pa(b) {
		return b.replace(Uc, function(a, b, d, e) {
			return e ? d.toUpperCase() : d
		})
			.replace(Vc, "Moz$1")
	}

	function vb(b, a, c, d) {
		function e(b) {
			var e = c && b ? [this.filter(b)] : [this],
				l = a,
				k, m, n, p, t, w;
			if (!d || null != b)
				for (; e.length;)
					for (k = e.shift(), m = 0, n = k.length; m < n; m++)
						for (p = u(k[m]), l ? p.triggerHandler("$destroy") : l = !l, t = 0, p = (w = p.children())
							.length; t <
							p; t++) e.push(Aa(w[t]));
			return g.apply(this, arguments)
		}
		var g = Aa.fn[b],
			g = g.$original || g;
		e.$original = g;
		Aa.fn[b] = e
	}

	function N(b) {
		if (b instanceof N) return b;
		if (!(this instanceof N)) {
			if (E(b) && "<" != b.charAt(0)) throw wb("nosel");
			return new N(b)
		}
		if (E(b)) {
			var a = O.createElement("div");
			a.innerHTML = "<div>&#160;</div>" + b;
			a.removeChild(a.firstChild);
			xb(this, a.childNodes);
			u(O.createDocumentFragment())
				.append(this)
		} else xb(this, b)
	}

	function yb(b) {
		return b.cloneNode(!0)
	}

	function Ba(b) {
		Zb(b);
		var a = 0;
		for (b = b.childNodes ||
			[]; a < b.length; a++) Ba(b[a])
	}

	function $b(b, a, c, d) {
		if (v(d)) throw wb("offargs");
		var e = ja(b, "events");
		ja(b, "handle") && (D(a) ? q(e, function(a, c) {
			zb(b, c, a);
			delete e[c]
		}) : q(a.split(" "), function(a) {
			D(c) ? (zb(b, a, e[a]), delete e[a]) : Ka(e[a] || [], c)
		}))
	}

	function Zb(b, a) {
		var c = b[bb],
			d = Qa[c];
		d && (a ? delete Qa[c].data[a] : (d.handle && (d.events.$destroy && d.handle({}, "$destroy"), $b(b)), delete Qa[c], b[bb] = r))
	}

	function ja(b, a, c) {
		var d = b[bb],
			d = Qa[d || -1];
		if (v(c)) d || (b[bb] = d = ++Wc, d = Qa[d] = {}), d[a] = c;
		else return d && d[a]
	}

	function ac(b,
		a, c) {
		var d = ja(b, "data"),
			e = v(c),
			g = !e && v(a),
			f = g && !V(a);
		d || f || ja(b, "data", d = {});
		if (e) d[a] = c;
		else if (g) {
			if (f) return d && d[a];
			x(d, a)
		} else return d
	}

	function Ab(b, a) {
		return b.getAttribute ? -1 < (" " + (b.getAttribute("class") || "") + " ")
			.replace(/[\n\t]/g, " ")
			.indexOf(" " + a + " ") : !1
	}

	function Bb(b, a) {
		a && b.setAttribute && q(a.split(" "), function(a) {
			b.setAttribute("class", aa((" " + (b.getAttribute("class") || "") + " ")
				.replace(/[\n\t]/g, " ")
				.replace(" " + aa(a) + " ", " ")))
		})
	}

	function Cb(b, a) {
		if (a && b.setAttribute) {
			var c = (" " +
				(b.getAttribute("class") || "") + " ")
				.replace(/[\n\t]/g, " ");
			q(a.split(" "), function(a) {
				a = aa(a); - 1 === c.indexOf(" " + a + " ") && (c += a + " ")
			});
			b.setAttribute("class", aa(c))
		}
	}

	function xb(b, a) {
		if (a) {
			a = a.nodeName || !v(a.length) || ya(a) ? [a] : a;
			for (var c = 0; c < a.length; c++) b.push(a[c])
		}
	}

	function bc(b, a) {
		return cb(b, "$" + (a || "ngController") + "Controller")
	}

	function cb(b, a, c) {
		b = u(b);
		9 == b[0].nodeType && (b = b.find("html"));
		for (a = I(a) ? a : [a]; b.length;) {
			for (var d = 0, e = a.length; d < e; d++)
				if ((c = b.data(a[d])) !== r) return c;
			b = b.parent()
		}
	}

	function cc(b) {
		for (var a = 0, c = b.childNodes; a < c.length; a++) Ba(c[a]);
		for (; b.firstChild;) b.removeChild(b.firstChild)
	}

	function dc(b, a) {
		var c = db[a.toLowerCase()];
		return c && ec[b.nodeName] && c
	}

	function Xc(b, a) {
		var c = function(c, e) {
			c.preventDefault || (c.preventDefault = function() {
				c.returnValue = !1
			});
			c.stopPropagation || (c.stopPropagation = function() {
				c.cancelBubble = !0
			});
			c.target || (c.target = c.srcElement || O);
			if (D(c.defaultPrevented)) {
				var g = c.preventDefault;
				c.preventDefault = function() {
					c.defaultPrevented = !0;
					g.call(c)
				};
				c.defaultPrevented = !1
			}
			c.isDefaultPrevented = function() {
				return c.defaultPrevented || !1 === c.returnValue
			};
			var f = Rb(a[e || c.type] || []);
			q(f, function(a) {
				a.call(b, c)
			});
			8 >= L ? (c.preventDefault = null, c.stopPropagation = null, c.isDefaultPrevented = null) : (delete c.preventDefault, delete c.stopPropagation, delete c.isDefaultPrevented)
		};
		c.elem = b;
		return c
	}

	function Ca(b) {
		var a = typeof b,
			c;
		"object" == a && null !== b ? "function" == typeof(c = b.$$hashKey) ? c = b.$$hashKey() : c === r && (c = b.$$hashKey = Xa()) : c = b;
		return a + ":" + c
	}

	function Ra(b) {
		q(b,
			this.put, this)
	}

	function fc(b) {
		var a, c;
		"function" == typeof b ? (a = b.$inject) || (a = [], b.length && (c = b.toString()
			.replace(Yc, ""), c = c.match(Zc), q(c[1].split($c), function(b) {
				b.replace(ad, function(b, c, d) {
					a.push(d)
				})
			})), b.$inject = a) : I(b) ? (c = b.length - 1, Oa(b[c], "fn"), a = b.slice(0, c)) : Oa(b, "fn", !0);
		return a
	}

	function Yb(b) {
		function a(a) {
			return function(b, c) {
				if (V(b)) q(b, Ob(a));
				else return a(b, c)
			}
		}

		function c(a, b) {
			wa(a, "service");
			if (J(b) || I(b)) b = n.instantiate(b);
			if (!b.$get) throw Sa("pget", a);
			return m[a + h] = b
		}

		function d(a,
			b) {
			return c(a, {
				$get: b
			})
		}

		function e(a) {
			var b = [],
				c, d, g, h;
			q(a, function(a) {
				if (!k.get(a)) {
					k.put(a, !0);
					try {
						if (E(a))
							for (c = Ta(a), b = b.concat(e(c.requires))
								.concat(c._runBlocks), d = c._invokeQueue, g = 0, h = d.length; g < h; g++) {
								var f = d[g],
									l = n.get(f[0]);
								l[f[1]].apply(l, f[2])
							} else J(a) ? b.push(n.invoke(a)) : I(a) ? b.push(n.invoke(a)) : Oa(a, "module")
					} catch (m) {
						throw I(a) && (a = a[a.length - 1]), m.message && (m.stack && -1 == m.stack.indexOf(m.message)) && (m = m.message + "\n" + m.stack), Sa("modulerr", a, m.stack || m.message || m);
					}
				}
			});
			return b
		}

		function g(a,
			b) {
			function c(d) {
				if (a.hasOwnProperty(d)) {
					if (a[d] === f) throw Sa("cdep", l.join(" <- "));
					return a[d]
				}
				try {
					return l.unshift(d), a[d] = f, a[d] = b(d)
				} finally {
					l.shift()
				}
			}

			function d(a, b, e) {
				var g = [],
					h = fc(a),
					f, k, l;
				k = 0;
				for (f = h.length; k < f; k++) {
					l = h[k];
					if ("string" !== typeof l) throw Sa("itkn", l);
					g.push(e && e.hasOwnProperty(l) ? e[l] : c(l))
				}
				a.$inject || (a = a[f]);
				return a.apply(b, g)
			}
			return {
				invoke: d,
				instantiate: function(a, b) {
					var c = function() {}, e;
					c.prototype = (I(a) ? a[a.length - 1] : a)
						.prototype;
					c = new c;
					e = d(a, c, b);
					return V(e) || J(e) ?
						e : c
				},
				get: c,
				annotate: fc,
				has: function(b) {
					return m.hasOwnProperty(b + h) || a.hasOwnProperty(b)
				}
			}
		}
		var f = {}, h = "Provider",
			l = [],
			k = new Ra,
			m = {
				$provide: {
					provider: a(c),
					factory: a(d),
					service: a(function(a, b) {
						return d(a, ["$injector",
							function(a) {
								return a.instantiate(b)
							}
						])
					}),
					value: a(function(a, b) {
						return d(a, Z(b))
					}),
					constant: a(function(a, b) {
						wa(a, "constant");
						m[a] = b;
						p[a] = b
					}),
					decorator: function(a, b) {
						var c = n.get(a + h),
							d = c.$get;
						c.$get = function() {
							var a = t.invoke(d, c);
							return t.invoke(b, null, {
								$delegate: a
							})
						}
					}
				}
			}, n = m.$injector = g(m,
				function() {
					throw Sa("unpr", l.join(" <- "));
				}),
			p = {}, t = p.$injector = g(p, function(a) {
				a = n.get(a + h);
				return t.invoke(a.$get, a)
			});
		q(e(b), function(a) {
			t.invoke(a || y)
		});
		return t
	}

	function bd() {
		var b = !0;
		this.disableAutoScrolling = function() {
			b = !1
		};
		this.$get = ["$window", "$location", "$rootScope",
			function(a, c, d) {
				function e(a) {
					var b = null;
					q(a, function(a) {
						b || "a" !== C(a.nodeName) || (b = a)
					});
					return b
				}

				function g() {
					var b = c.hash(),
						d;
					b ? (d = f.getElementById(b)) ? d.scrollIntoView() : (d = e(f.getElementsByName(b))) ? d.scrollIntoView() :
						"top" === b && a.scrollTo(0, 0) : a.scrollTo(0, 0)
				}
				var f = a.document;
				b && d.$watch(function() {
					return c.hash()
				}, function() {
					d.$evalAsync(g)
				});
				return g
			}
		]
	}

	function cd(b, a, c, d) {
		function e(a) {
			try {
				a.apply(null, ua.call(arguments, 1))
			} finally {
				if (w--, 0 === w)
					for (; A.length;) try {
						A.pop()()
					} catch (b) {
						c.error(b)
					}
			}
		}

		function g(a, b) {
			(function T() {
				q(F, function(a) {
					a()
				});
				H = b(T, a)
			})()
		}

		function f() {
			B = null;
			S != h.url() && (S = h.url(), q($, function(a) {
				a(h.url())
			}))
		}
		var h = this,
			l = a[0],
			k = b.location,
			m = b.history,
			n = b.setTimeout,
			p = b.clearTimeout,
			t = {};
		h.isMock = !1;
		var w = 0,
			A = [];
		h.$$completeOutstandingRequest = e;
		h.$$incOutstandingRequestCount = function() {
			w++
		};
		h.notifyWhenNoOutstandingRequests = function(a) {
			q(F, function(a) {
				a()
			});
			0 === w ? a() : A.push(a)
		};
		var F = [],
			H;
		h.addPollFn = function(a) {
			D(H) && g(100, n);
			F.push(a);
			return a
		};
		var S = k.href,
			z = a.find("base"),
			B = null;
		h.url = function(a, c) {
			k !== b.location && (k = b.location);
			if (a) {
				if (S != a) return S = a, d.history ? c ? m.replaceState(null, "", a) : (m.pushState(null, "", a), z.attr("href", z.attr("href"))) : (B = a, c ? k.replace(a) : k.href = a),
				h
			} else return B || k.href.replace(/%27/g, "'")
		};
		var $ = [],
			M = !1;
		h.onUrlChange = function(a) {
			if (!M) {
				if (d.history) u(b)
					.on("popstate", f);
				if (d.hashchange) u(b)
					.on("hashchange", f);
				else h.addPollFn(f);
				M = !0
			}
			$.push(a);
			return a
		};
		h.baseHref = function() {
			var a = z.attr("href");
			return a ? a.replace(/^https?\:\/\/[^\/]*/, "") : ""
		};
		var W = {}, ka = "",
			Q = h.baseHref();
		h.cookies = function(a, b) {
			var d, e, g, h;
			if (a) b === r ? l.cookie = escape(a) + "=;path=" + Q + ";expires=Thu, 01 Jan 1970 00:00:00 GMT" : E(b) && (d = (l.cookie = escape(a) + "=" + escape(b) + ";path=" +
					Q)
				.length + 1, 4096 < d && c.warn("Cookie '" + a + "' possibly not set or overflowed because it was too large (" + d + " > 4096 bytes)!"));
			else {
				if (l.cookie !== ka)
					for (ka = l.cookie, d = ka.split("; "), W = {}, g = 0; g < d.length; g++) e = d[g], h = e.indexOf("="), 0 < h && (a = unescape(e.substring(0, h)), W[a] === r && (W[a] = unescape(e.substring(h + 1))));
				return W
			}
		};
		h.defer = function(a, b) {
			var c;
			w++;
			c = n(function() {
				delete t[c];
				e(a)
			}, b || 0);
			t[c] = !0;
			return c
		};
		h.defer.cancel = function(a) {
			return t[a] ? (delete t[a], p(a), e(y), !0) : !1
		}
	}

	function dd() {
		this.$get =
			["$window", "$log", "$sniffer", "$document",
			function(b, a, c, d) {
				return new cd(b, d, a, c)
			}
		]
	}

	function ed() {
		this.$get = function() {
			function b(b, d) {
				function e(a) {
					a != n && (p ? p == a && (p = a.n) : p = a, g(a.n, a.p), g(a, n), n = a, n.n = null)
				}

				function g(a, b) {
					a != b && (a && (a.p = b), b && (b.n = a))
				}
				if (b in a) throw s("$cacheFactory")("iid", b);
				var f = 0,
					h = x({}, d, {
						id: b
					}),
					l = {}, k = d && d.capacity || Number.MAX_VALUE,
					m = {}, n = null,
					p = null;
				return a[b] = {
					put: function(a, b) {
						var c = m[a] || (m[a] = {
							key: a
						});
						e(c);
						if (!D(b)) return a in l || f++, l[a] = b, f > k && this.remove(p.key),
						b
					},
					get: function(a) {
						var b = m[a];
						if (b) return e(b), l[a]
					},
					remove: function(a) {
						var b = m[a];
						b && (b == n && (n = b.p), b == p && (p = b.n), g(b.n, b.p), delete m[a], delete l[a], f--)
					},
					removeAll: function() {
						l = {};
						f = 0;
						m = {};
						n = p = null
					},
					destroy: function() {
						m = h = l = null;
						delete a[b]
					},
					info: function() {
						return x({}, h, {
							size: f
						})
					}
				}
			}
			var a = {};
			b.info = function() {
				var b = {};
				q(a, function(a, e) {
					b[e] = a.info()
				});
				return b
			};
			b.get = function(b) {
				return a[b]
			};
			return b
		}
	}

	function fd() {
		this.$get = ["$cacheFactory",
			function(b) {
				return b("templates")
			}
		]
	}

	function hc(b, a) {
		var c = {}, d = "Directive",
			e = /^\s*directive\:\s*([\d\w\-_]+)\s+(.*)$/,
			g = /(([\d\w\-_]+)(?:\:([^;]+))?;?)/,
			f = /^(on[a-z]+|formaction)$/;
		this.directive = function l(a, e) {
			wa(a, "directive");
			E(a) ? (sb(e, "directiveFactory"), c.hasOwnProperty(a) || (c[a] = [], b.factory(a + d, ["$injector", "$exceptionHandler",
				function(b, d) {
					var e = [];
					q(c[a], function(c, g) {
						try {
							var f = b.invoke(c);
							J(f) ? f = {
								compile: Z(f)
							} : !f.compile && f.link && (f.compile = Z(f.link));
							f.priority = f.priority || 0;
							f.index = g;
							f.name = f.name || a;
							f.require = f.require || f.controller && f.name;
							f.restrict = f.restrict || "A";
							e.push(f)
						} catch (l) {
							d(l)
						}
					});
					return e
				}
			])), c[a].push(e)) : q(a, Ob(l));
			return this
		};
		this.aHrefSanitizationWhitelist = function(b) {
			return v(b) ? (a.aHrefSanitizationWhitelist(b), this) : a.aHrefSanitizationWhitelist()
		};
		this.imgSrcSanitizationWhitelist = function(b) {
			return v(b) ? (a.imgSrcSanitizationWhitelist(b), this) : a.imgSrcSanitizationWhitelist()
		};
		this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$http", "$templateCache", "$parse", "$controller", "$rootScope", "$document", "$sce", "$animate",
			"$$sanitizeUri",
			function(a, b, m, n, p, t, w, A, F, H, S, z) {
				function B(a, b, c, d, e) {
					a instanceof u || (a = u(a));
					q(a, function(b, c) {
						3 == b.nodeType && b.nodeValue.match(/\S+/) && (a[c] = u(b)
							.wrap("<span></span>")
							.parent()[0])
					});
					var g = M(a, b, a, c, d, e);
					$(a, "ng-scope");
					return function(b, c, d) {
						sb(b, "scope");
						var e = c ? Da.clone.call(a) : a;
						q(d, function(a, b) {
							e.data("$" + b + "Controller", a)
						});
						d = 0;
						for (var f = e.length; d < f; d++) {
							var k = e[d].nodeType;
							1 !== k && 9 !== k || e.eq(d)
								.data("$scope", b)
						}
						c && c(e, b);
						g && g(b, e, e);
						return e
					}
				}

				function $(a, b) {
					try {
						a.addClass(b)
					} catch (c) {}
				}

				function M(a, b, c, d, e, g) {
					function f(a, c, d, e) {
						var g, l, m, p, n, t, w;
						g = c.length;
						var K = Array(g);
						for (n = 0; n < g; n++) K[n] = c[n];
						w = n = 0;
						for (t = k.length; n < t; w++) l = K[w], c = k[n++], g = k[n++], m = u(l), c ? (c.scope ? (p = a.$new(), m.data("$scope", p)) : p = a, (m = c.transclude) || !e && b ? c(g, p, l, d, W(a, m || b)) : c(g, p, l, d, e)) : g && g(a, l.childNodes, r, e)
					}
					for (var k = [], l, m, p, n, t = 0; t < a.length; t++) l = new Db, m = ka(a[t], [], l, 0 === t ? d : r, e), (g = m.length ? ga(m, a[t], l, b, c, null, [], [], g) : null) && g.scope && $(u(a[t]), "ng-scope"), l = g && g.terminal || !(p = a[t].childNodes) || !p.length ? null : M(p, g ? g.transclude : b), k.push(g, l), n = n || g || l, g = null;
					return n ? f : null
				}

				function W(a, b) {
					return function(c, d, e) {
						var g = !1;
						c || (c = a.$new(), g = c.$$transcluded = !0);
						d = b(c, d, e);
						if (g) d.on("$destroy", qb(c, c.$destroy));
						return d
					}
				}

				function ka(a, b, c, d, f) {
					var k = c.$attr,
						l;
					switch (a.nodeType) {
						case 1:
							T(b, la(Ea(a)
								.toLowerCase()), "E", d, f);
							var m, p, n;
							l = a.attributes;
							for (var t = 0, w = l && l.length; t < w; t++) {
								var A = !1,
									B = !1;
								m = l[t];
								if (!L || 8 <= L || m.specified) {
									p = m.name;
									n = la(p);
									U.test(n) && (p = ab(n.substr(6), "-"));
									var S = n.replace(/(Start|End)$/,
										"");
									n === S + "Start" && (A = p, B = p.substr(0, p.length - 5) + "end", p = p.substr(0, p.length - 6));
									n = la(p.toLowerCase());
									k[n] = p;
									c[n] = m = aa(m.value);
									dc(a, n) && (c[n] = !0);
									P(a, b, m, n);
									T(b, n, "A", d, f, A, B)
								}
							}
							a = a.className;
							if (E(a) && "" !== a)
								for (; l = g.exec(a);) n = la(l[2]), T(b, n, "C", d, f) && (c[n] = aa(l[3])), a = a.substr(l.index + l[0].length);
							break;
						case 3:
							s(b, a.nodeValue);
							break;
						case 8:
							try {
								if (l = e.exec(a.nodeValue)) n = la(l[1]), T(b, n, "M", d, f) && (c[n] = aa(l[2]))
							} catch (W) {}
					}
					b.sort(D);
					return b
				}

				function Q(a, b, c) {
					var d = [],
						e = 0;
					if (b && a.hasAttribute && a.hasAttribute(b)) {
						do {
							if (!a) throw ha("uterdir",
								b, c);
							1 == a.nodeType && (a.hasAttribute(b) && e++, a.hasAttribute(c) && e--);
							d.push(a);
							a = a.nextSibling
						} while (0 < e)
					} else d.push(a);
					return u(d)
				}

				function R(a, b, c) {
					return function(d, e, g, f, l) {
						e = Q(e[0], b, c);
						return a(d, e, g, f, l)
					}
				}

				function ga(a, c, d, e, g, f, l, p, n) {
					function A(a, b, c, d) {
						if (a) {
							c && (a = R(a, c, d));
							a.require = G.require;
							if (z === G || G.$$isolateScope) a = ic(a, {
								isolateScope: !0
							});
							l.push(a)
						}
						if (b) {
							c && (b = R(b, c, d));
							b.require = G.require;
							if (z === G || G.$$isolateScope) b = ic(b, {
								isolateScope: !0
							});
							p.push(b)
						}
					}

					function S(a, b, c) {
						var d, e = "data",
							g = !1;
						if (E(a)) {
							for (;
								"^" == (d = a.charAt(0)) || "?" == d;) a = a.substr(1), "^" == d && (e = "inheritedData"), g = g || "?" == d;
							d = null;
							c && "data" === e && (d = c[a]);
							d = d || b[e]("$" + a + "Controller");
							if (!d && !g) throw ha("ctreq", a, ba);
						} else I(a) && (d = [], q(a, function(a) {
							d.push(S(a, b, c))
						}));
						return d
					}

					function W(a, e, g, f, n) {
						function A(a, b) {
							var c;
							2 > arguments.length && (b = a, a = r);
							D && (c = eb);
							return n(a, b, c)
						}
						var K, B, F, M, R, Q, eb = {}, s;
						K = c === g ? d : Rb(d, new Db(u(g), d.$attr));
						B = K.$$element;
						if (z) {
							var ka = /^\s*([@=&])(\??)\s*(\w*)\s*$/;
							f = u(g);
							Q = e.$new(!0);
							ga &&
								ga === z.$$originalDirective ? f.data("$isolateScope", Q) : f.data("$isolateScopeNoTemplate", Q);
							$(f, "ng-isolate-scope");
							q(z.scope, function(a, c) {
								var d = a.match(ka) || [],
									g = d[3] || c,
									f = "?" == d[2],
									d = d[1],
									l, m, n, p;
								Q.$$isolateBindings[c] = d + g;
								switch (d) {
									case "@":
										K.$observe(g, function(a) {
											Q[c] = a
										});
										K.$$observers[g].$$scope = e;
										K[g] && (Q[c] = b(K[g])(e));
										break;
									case "=":
										if (f && !K[g]) break;
										m = t(K[g]);
										p = m.literal ? ta : function(a, b) {
											return a === b
										};
										n = m.assign || function() {
											l = Q[c] = m(e);
											throw ha("nonassign", K[g], z.name);
										};
										l = Q[c] = m(e);
										Q.$watch(function() {
											var a =
												m(e);
											p(a, Q[c]) || (p(a, l) ? n(e, a = Q[c]) : Q[c] = a);
											return l = a
										}, null, m.literal);
										break;
									case "&":
										m = t(K[g]);
										Q[c] = function(a) {
											return m(e, a)
										};
										break;
									default:
										throw ha("iscp", z.name, c, a);
								}
							})
						}
						s = n && A;
						H && q(H, function(a) {
							var b = {
								$scope: a === z || a.$$isolateScope ? Q : e,
								$element: B,
								$attrs: K,
								$transclude: s
							}, c;
							R = a.controller;
							"@" == R && (R = K[a.name]);
							c = w(R, b);
							eb[a.name] = c;
							D || B.data("$" + a.name + "Controller", c);
							a.controllerAs && (b.$scope[a.controllerAs] = c)
						});
						f = 0;
						for (F = l.length; f < F; f++) try {
							M = l[f], M(M.isolateScope ? Q : e, B, K, M.require && S(M.require,
								B, eb), s)
						} catch (T) {
							m(T, fa(B))
						}
						f = e;
						z && (z.template || null === z.templateUrl) && (f = Q);
						a && a(f, g.childNodes, r, n);
						for (f = p.length - 1; 0 <= f; f--) try {
							M = p[f], M(M.isolateScope ? Q : e, B, K, M.require && S(M.require, B, eb), s)
						} catch (G) {
							m(G, fa(B))
						}
					}
					n = n || {};
					var F = -Number.MAX_VALUE,
						M, H = n.controllerDirectives,
						z = n.newIsolateScopeDirective,
						ga = n.templateDirective;
					n = n.nonTlbTranscludeDirective;
					for (var T = !1, D = !1, x = d.$$element = u(c), G, ba, s, N = e, ma, L = 0, Fa = a.length; L < Fa; L++) {
						G = a[L];
						var P = G.$$start,
							U = G.$$end;
						P && (x = Q(c, P, U));
						s = r;
						if (F > G.priority) break;
						if (s = G.scope) M = M || G, G.templateUrl || (C("new/isolated scope", z, G, x), V(s) && (z = G));
						ba = G.name;
						!G.templateUrl && G.controller && (s = G.controller, H = H || {}, C("'" + ba + "' controller", H[ba], G, x), H[ba] = G);
						if (s = G.transclude) T = !0, G.$$tlb || (C("transclusion", n, G, x), n = G), "element" == s ? (D = !0, F = G.priority, s = Q(c, P, U), x = d.$$element = u(O.createComment(" " + ba + ": " + d[ba] + " ")), c = x[0], fb(g, u(ua.call(s, 0)), c), N = B(s, e, F, f && f.name, {
							nonTlbTranscludeDirective: n
						})) : (s = u(yb(c))
							.contents(), x.empty(), N = B(s, e));
						if (G.template)
							if (C("template",
								ga, G, x), ga = G, s = J(G.template) ? G.template(x, d) : G.template, s = X(s), G.replace) {
								f = G;
								s = u("<div>" + aa(s) + "</div>")
									.contents();
								c = s[0];
								if (1 != s.length || 1 !== c.nodeType) throw ha("tplrt", ba, "");
								fb(g, x, c);
								Fa = {
									$attr: {}
								};
								s = ka(c, [], Fa);
								var Y = a.splice(L + 1, a.length - (L + 1));
								z && gc(s);
								a = a.concat(s)
									.concat(Y);
								v(d, Fa);
								Fa = a.length
							} else x.html(s);
						if (G.templateUrl) C("template", ga, G, x), ga = G, G.replace && (f = G), W = y(a.splice(L, a.length - L), x, d, g, N, l, p, {
							controllerDirectives: H,
							newIsolateScopeDirective: z,
							templateDirective: ga,
							nonTlbTranscludeDirective: n
						}),
						Fa = a.length;
						else if (G.compile) try {
							ma = G.compile(x, d, N), J(ma) ? A(null, ma, P, U) : ma && A(ma.pre, ma.post, P, U)
						} catch (Z) {
							m(Z, fa(x))
						}
						G.terminal && (W.terminal = !0, F = Math.max(F, G.priority))
					}
					W.scope = M && !0 === M.scope;
					W.transclude = T && N;
					return W
				}

				function gc(a) {
					for (var b = 0, c = a.length; b < c; b++) a[b] = Qb(a[b], {
						$$isolateScope: !0
					})
				}

				function T(b, e, g, f, k, p, n) {
					if (e === k) return null;
					k = null;
					if (c.hasOwnProperty(e)) {
						var t;
						e = a.get(e + d);
						for (var w = 0, A = e.length; w < A; w++) try {
							t = e[w], (f === r || f > t.priority) && -1 != t.restrict.indexOf(g) && (p && (t =
								Qb(t, {
									$$start: p,
									$$end: n
								})), b.push(t), k = t)
						} catch (B) {
							m(B)
						}
					}
					return k
				}

				function v(a, b) {
					var c = b.$attr,
						d = a.$attr,
						e = a.$$element;
					q(a, function(d, e) {
						"$" != e.charAt(0) && (b[e] && (d += ("style" === e ? ";" : " ") + b[e]), a.$set(e, d, !0, c[e]))
					});
					q(b, function(b, g) {
						"class" == g ? ($(e, b), a["class"] = (a["class"] ? a["class"] + " " : "") + b) : "style" == g ? (e.attr("style", e.attr("style") + ";" + b), a.style = (a.style ? a.style + ";" : "") + b) : "$" == g.charAt(0) || a.hasOwnProperty(g) || (a[g] = b, d[g] = c[g])
					})
				}

				function y(a, b, c, d, e, g, f, l) {
					var k = [],
						m, t, w = b[0],
						A = a.shift(),
						B = x({}, A, {
							templateUrl: null,
							transclude: null,
							replace: null,
							$$originalDirective: A
						}),
						S = J(A.templateUrl) ? A.templateUrl(b, c) : A.templateUrl;
					b.empty();
					n.get(H.getTrustedResourceUrl(S), {
						cache: p
					})
						.success(function(p) {
							var n, F;
							p = X(p);
							if (A.replace) {
								p = u("<div>" + aa(p) + "</div>")
									.contents();
								n = p[0];
								if (1 != p.length || 1 !== n.nodeType) throw ha("tplrt", A.name, S);
								p = {
									$attr: {}
								};
								fb(d, b, n);
								var $ = ka(n, [], p);
								V(A.scope) && gc($);
								a = $.concat(a);
								v(c, p)
							} else n = w, b.html(p);
							a.unshift(B);
							m = ga(a, n, c, e, b, A, g, f, l);
							q(d, function(a, c) {
								a == n && (d[c] =
									b[0])
							});
							for (t = M(b[0].childNodes, e); k.length;) {
								p = k.shift();
								F = k.shift();
								var z = k.shift(),
									H = k.shift(),
									$ = b[0];
								F !== w && ($ = yb(n), fb(z, u(F), $));
								F = m.transclude ? W(p, m.transclude) : H;
								m(t, p, $, d, F)
							}
							k = null
						})
						.error(function(a, b, c, d) {
							throw ha("tpload", d.url);
						});
					return function(a, b, c, d, e) {
						k ? (k.push(b), k.push(c), k.push(d), k.push(e)) : m(t, b, c, d, e)
					}
				}

				function D(a, b) {
					var c = b.priority - a.priority;
					return 0 !== c ? c : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index
				}

				function C(a, b, c, d) {
					if (b) throw ha("multidir", b.name, c.name, a, fa(d));
				}

				function s(a, c) {
					var d = b(c, !0);
					d && a.push({
						priority: 0,
						compile: Z(function(a, b) {
							var c = b.parent(),
								e = c.data("$binding") || [];
							e.push(d);
							$(c.data("$binding", e), "ng-binding");
							a.$watch(d, function(a) {
								b[0].nodeValue = a
							})
						})
					})
				}

				function N(a, b) {
					if ("srcdoc" == b) return H.HTML;
					var c = Ea(a);
					if ("xlinkHref" == b || "FORM" == c && "action" == b || "IMG" != c && ("src" == b || "ngSrc" == b)) return H.RESOURCE_URL
				}

				function P(a, c, d, e) {
					var g = b(d, !0);
					if (g) {
						if ("multiple" === e && "SELECT" === Ea(a)) throw ha("selmulti", fa(a));
						c.push({
							priority: 100,
							compile: function() {
								return {
									pre: function(c,
										d, l) {
										d = l.$$observers || (l.$$observers = {});
										if (f.test(e)) throw ha("nodomevents");
										if (g = b(l[e], !0, N(a, e))) l[e] = g(c), (d[e] || (d[e] = []))
											.$$inter = !0, (l.$$observers && l.$$observers[e].$$scope || c)
											.$watch(g, function(a, b) {
												"class" === e && a != b ? l.$updateClass(a, b) : l.$set(e, a)
											})
									}
								}
							}
						})
					}
				}

				function fb(a, b, c) {
					var d = b[0],
						e = b.length,
						g = d.parentNode,
						f, l;
					if (a)
						for (f = 0, l = a.length; f < l; f++)
							if (a[f] == d) {
								a[f++] = c;
								l = f + e - 1;
								for (var k = a.length; f < k; f++, l++) l < k ? a[f] = a[l] : delete a[f];
								a.length -= e - 1;
								break
							}
					g && g.replaceChild(c, d);
					a = O.createDocumentFragment();
					a.appendChild(d);
					c[u.expando] = d[u.expando];
					d = 1;
					for (e = b.length; d < e; d++) g = b[d], u(g)
						.remove(), a.appendChild(g), delete b[d];
					b[0] = c;
					b.length = 1
				}

				function ic(a, b) {
					return x(function() {
						return a.apply(null, arguments)
					}, a, b)
				}
				var Db = function(a, b) {
					this.$$element = a;
					this.$attr = b || {}
				};
				Db.prototype = {
					$normalize: la,
					$addClass: function(a) {
						a && 0 < a.length && S.addClass(this.$$element, a)
					},
					$removeClass: function(a) {
						a && 0 < a.length && S.removeClass(this.$$element, a)
					},
					$updateClass: function(a, b) {
						this.$removeClass(jc(b, a));
						this.$addClass(jc(a,
							b))
					},
					$set: function(a, b, c, d) {
						var e = dc(this.$$element[0], a);
						e && (this.$$element.prop(a, b), d = e);
						this[a] = b;
						d ? this.$attr[a] = d : (d = this.$attr[a]) || (this.$attr[a] = d = ab(a, "-"));
						e = Ea(this.$$element);
						if ("A" === e && "href" === a || "IMG" === e && "src" === a) this[a] = b = z(b, "src" === a);
						!1 !== c && (null === b || b === r ? this.$$element.removeAttr(d) : this.$$element.attr(d, b));
						(c = this.$$observers) && q(c[a], function(a) {
							try {
								a(b)
							} catch (c) {
								m(c)
							}
						})
					},
					$observe: function(a, b) {
						var c = this,
							d = c.$$observers || (c.$$observers = {}),
							e = d[a] || (d[a] = []);
						e.push(b);
						A.$evalAsync(function() {
							e.$$inter || b(c[a])
						});
						return b
					}
				};
				var ba = b.startSymbol(),
					ma = b.endSymbol(),
					X = "{{" == ba || "}}" == ma ? za : function(a) {
						return a.replace(/\{\{/g, ba)
							.replace(/}}/g, ma)
				}, U = /^ngAttr[A-Z]/;
				return B
			}
		]
	}

	function la(b) {
		return Pa(b.replace(gd, ""))
	}

	function jc(b, a) {
		var c = "",
			d = b.split(/\s+/),
			e = a.split(/\s+/),
			g = 0;
		a: for (; g < d.length; g++) {
			for (var f = d[g], h = 0; h < e.length; h++)
				if (f == e[h]) continue a;
			c += (0 < c.length ? " " : "") + f
		}
		return c
	}

	function hd() {
		var b = {}, a = /^(\S+)(\s+as\s+(\w+))?$/;
		this.register = function(a,
			d) {
			wa(a, "controller");
			V(a) ? x(b, a) : b[a] = d
		};
		this.$get = ["$injector", "$window",
			function(c, d) {
				return function(e, g) {
					var f, h, l;
					E(e) && (f = e.match(a), h = f[1], l = f[3], e = b.hasOwnProperty(h) ? b[h] : tb(g.$scope, h, !0) || tb(d, h, !0), Oa(e, h, !0));
					f = c.instantiate(e, g);
					if (l) {
						if (!g || "object" != typeof g.$scope) throw s("$controller")("noscp", h || e.name, l);
						g.$scope[l] = f
					}
					return f
				}
			}
		]
	}

	function id() {
		this.$get = ["$window",
			function(b) {
				return u(b.document)
			}
		]
	}

	function jd() {
		this.$get = ["$log",
			function(b) {
				return function(a, c) {
					b.error.apply(b,
						arguments)
				}
			}
		]
	}

	function kc(b) {
		var a = {}, c, d, e;
		if (!b) return a;
		q(b.split("\n"), function(b) {
			e = b.indexOf(":");
			c = C(aa(b.substr(0, e)));
			d = aa(b.substr(e + 1));
			c && (a[c] = a[c] ? a[c] + (", " + d) : d)
		});
		return a
	}

	function lc(b) {
		var a = V(b) ? b : r;
		return function(c) {
			a || (a = kc(b));
			return c ? a[C(c)] || null : a
		}
	}

	function mc(b, a, c) {
		if (J(c)) return c(b, a);
		q(c, function(c) {
			b = c(b, a)
		});
		return b
	}

	function kd() {
		var b = /^\s*(\[|\{[^\{])/,
			a = /[\}\]]\s*$/,
			c = /^\)\]\}',?\n/,
			d = {
				"Content-Type": "application/json;charset=utf-8"
			}, e = this.defaults = {
				transformResponse: [
					function(d) {
						E(d) &&
							(d = d.replace(c, ""), b.test(d) && a.test(d) && (d = Tb(d)));
						return d
					}
				],
				transformRequest: [
					function(a) {
						return V(a) && "[object File]" !== Ya.call(a) ? oa(a) : a
					}
				],
				headers: {
					common: {
						Accept: "application/json, text/plain, */*"
					},
					post: d,
					put: d,
					patch: d
				},
				xsrfCookieName: "XSRF-TOKEN",
				xsrfHeaderName: "X-XSRF-TOKEN"
			}, g = this.interceptors = [],
			f = this.responseInterceptors = [];
		this.$get = ["$httpBackend", "$browser", "$cacheFactory", "$rootScope", "$q", "$injector",
			function(a, b, c, d, n, p) {
				function t(a) {
					function c(a) {
						var b = x({}, a, {
							data: mc(a.data,
								a.headers, d.transformResponse)
						});
						return 200 <= a.status && 300 > a.status ? b : n.reject(b)
					}
					var d = {
						transformRequest: e.transformRequest,
						transformResponse: e.transformResponse
					}, g = function(a) {
							function b(a) {
								var c;
								q(a, function(b, d) {
									J(b) && (c = b(), null != c ? a[d] = c : delete a[d])
								})
							}
							var c = e.headers,
								d = x({}, a.headers),
								g, f, c = x({}, c.common, c[C(a.method)]);
							b(c);
							b(d);
							a: for (g in c) {
								a = C(g);
								for (f in d)
									if (C(f) === a) continue a;
								d[g] = c[g]
							}
							return d
						}(a);
					x(d, a);
					d.headers = g;
					d.method = Ga(d.method);
					(a = Eb(d.url) ? b.cookies()[d.xsrfCookieName ||
						e.xsrfCookieName] : r) && (g[d.xsrfHeaderName || e.xsrfHeaderName] = a);
					var f = [
						function(a) {
							g = a.headers;
							var b = mc(a.data, lc(g), a.transformRequest);
							D(a.data) && q(g, function(a, b) {
								"content-type" === C(b) && delete g[b]
							});
							D(a.withCredentials) && !D(e.withCredentials) && (a.withCredentials = e.withCredentials);
							return w(a, b, g)
								.then(c, c)
						},
						r
					],
						h = n.when(d);
					for (q(H, function(a) {
						(a.request || a.requestError) && f.unshift(a.request, a.requestError);
						(a.response || a.responseError) && f.push(a.response, a.responseError)
					}); f.length;) {
						a = f.shift();
						var k = f.shift(),
							h = h.then(a, k)
					}
					h.success = function(a) {
						h.then(function(b) {
							a(b.data, b.status, b.headers, d)
						});
						return h
					};
					h.error = function(a) {
						h.then(null, function(b) {
							a(b.data, b.status, b.headers, d)
						});
						return h
					};
					return h
				}

				function w(b, c, g) {
					function f(a, b, c) {
						q && (200 <= a && 300 > a ? q.put(r, [a, b, kc(c)]) : q.remove(r));
						l(b, a, c);
						d.$$phase || d.$apply()
					}

					function l(a, c, d) {
						c = Math.max(c, 0);
						(200 <= c && 300 > c ? p.resolve : p.reject)({
							data: a,
							status: c,
							headers: lc(d),
							config: b
						})
					}

					function k() {
						var a = $a(t.pendingRequests, b); - 1 !== a && t.pendingRequests.splice(a,
							1)
					}
					var p = n.defer(),
						w = p.promise,
						q, H, r = A(b.url, b.params);
					t.pendingRequests.push(b);
					w.then(k, k);
					(b.cache || e.cache) && (!1 !== b.cache && "GET" == b.method) && (q = V(b.cache) ? b.cache : V(e.cache) ? e.cache : F);
					if (q)
						if (H = q.get(r), v(H)) {
							if (H.then) return H.then(k, k), H;
							I(H) ? l(H[1], H[0], ea(H[2])) : l(H, 200, {})
						} else q.put(r, w);
					D(H) && a(b.method, r, c, f, g, b.timeout, b.withCredentials, b.responseType);
					return w
				}

				function A(a, b) {
					if (!b) return a;
					var c = [];
					Nc(b, function(a, b) {
						null === a || D(a) || (I(a) || (a = [a]), q(a, function(a) {
							V(a) && (a = oa(a));
							c.push(va(b) + "=" + va(a))
						}))
					});
					return a + (-1 == a.indexOf("?") ? "?" : "&") + c.join("&")
				}
				var F = c("$http"),
					H = [];
				q(g, function(a) {
					H.unshift(E(a) ? p.get(a) : p.invoke(a))
				});
				q(f, function(a, b) {
					var c = E(a) ? p.get(a) : p.invoke(a);
					H.splice(b, 0, {
						response: function(a) {
							return c(n.when(a))
						},
						responseError: function(a) {
							return c(n.reject(a))
						}
					})
				});
				t.pendingRequests = [];
				(function(a) {
					q(arguments, function(a) {
						t[a] = function(b, c) {
							return t(x(c || {}, {
								method: a,
								url: b
							}))
						}
					})
				})("get", "delete", "head", "jsonp");
				(function(a) {
					q(arguments, function(a) {
						t[a] =
							function(b, c, d) {
								return t(x(d || {}, {
									method: a,
									url: b,
									data: c
								}))
						}
					})
				})("post", "put");
				t.defaults = e;
				return t
			}
		]
	}

	function ld() {
		this.$get = ["$browser", "$window", "$document",
			function(b, a, c) {
				return md(b, nd, b.defer, a.angular.callbacks, c[0])
			}
		]
	}

	function md(b, a, c, d, e) {
		function g(a, b) {
			var c = e.createElement("script"),
				d = function() {
					c.onreadystatechange = c.onload = c.onerror = null;
					e.body.removeChild(c);
					b && b()
				};
			c.type = "text/javascript";
			c.src = a;
			L && 8 >= L ? c.onreadystatechange = function() {
				/loaded|complete/.test(c.readyState) && d()
			} :
				c.onload = c.onerror = function() {
					d()
			};
			e.body.appendChild(c);
			return d
		}
		var f = -1;
		return function(e, l, k, m, n, p, t, w) {
			function A() {
				H = f;
				z && z();
				B && B.abort()
			}

			function F(a, d, e, g) {
				var f = pa(l)
					.protocol;
				r && c.cancel(r);
				z = B = null;
				d = "file" == f && 0 === d ? e ? 200 : 404 : d;
				a(1223 == d ? 204 : d, e, g);
				b.$$completeOutstandingRequest(y)
			}
			var H;
			b.$$incOutstandingRequestCount();
			l = l || b.url();
			if ("jsonp" == C(e)) {
				var S = "_" + (d.counter++)
					.toString(36);
				d[S] = function(a) {
					d[S].data = a
				};
				var z = g(l.replace("JSON_CALLBACK", "angular.callbacks." + S), function() {
					d[S].data ?
						F(m, 200, d[S].data) : F(m, H || -2);
					delete d[S]
				})
			} else {
				var B = new a;
				B.open(e, l, !0);
				q(n, function(a, b) {
					v(a) && B.setRequestHeader(b, a)
				});
				B.onreadystatechange = function() {
					if (4 == B.readyState) {
						var a = null,
							b = null;
						H !== f && (a = B.getAllResponseHeaders(), b = B.responseType ? B.response : B.responseText);
						F(m, H || B.status, b, a)
					}
				};
				t && (B.withCredentials = !0);
				w && (B.responseType = w);
				B.send(k || null)
			} if (0 < p) var r = c(A, p);
			else p && p.then && p.then(A)
		}
	}

	function od() {
		var b = "{{",
			a = "}}";
		this.startSymbol = function(a) {
			return a ? (b = a, this) : b
		};
		this.endSymbol =
			function(b) {
				return b ? (a = b, this) : a
		};
		this.$get = ["$parse", "$exceptionHandler", "$sce",
			function(c, d, e) {
				function g(g, k, m) {
					for (var n, p, t = 0, w = [], A = g.length, F = !1, q = []; t < A;) - 1 != (n = g.indexOf(b, t)) && -1 != (p = g.indexOf(a, n + f)) ? (t != n && w.push(g.substring(t, n)), w.push(t = c(F = g.substring(n + f, p))), t.exp = F, t = p + h, F = !0) : (t != A && w.push(g.substring(t)), t = A);
					(A = w.length) || (w.push(""), A = 1);
					if (m && 1 < w.length) throw nc("noconcat", g);
					if (!k || F) return q.length = A, t = function(a) {
						try {
							for (var b = 0, c = A, f; b < c; b++) "function" == typeof(f = w[b]) &&
								(f = f(a), f = m ? e.getTrusted(m, f) : e.valueOf(f), null === f || D(f) ? f = "" : "string" != typeof f && (f = oa(f))), q[b] = f;
							return q.join("")
						} catch (h) {
							a = nc("interr", g, h.toString()), d(a)
						}
					}, t.exp = g, t.parts = w, t
				}
				var f = b.length,
					h = a.length;
				g.startSymbol = function() {
					return b
				};
				g.endSymbol = function() {
					return a
				};
				return g
			}
		]
	}

	function pd() {
		this.$get = ["$rootScope", "$window", "$q",
			function(b, a, c) {
				function d(d, f, h, l) {
					var k = a.setInterval,
						m = a.clearInterval,
						n = c.defer(),
						p = n.promise,
						t = 0,
						w = v(l) && !l;
					h = v(h) ? h : 0;
					p.then(null, null, d);
					p.$$intervalId =
						k(function() {
							n.notify(t++);
							0 < h && t >= h && (n.resolve(t), m(p.$$intervalId), delete e[p.$$intervalId]);
							w || b.$apply()
						}, f);
					e[p.$$intervalId] = n;
					return p
				}
				var e = {};
				d.cancel = function(a) {
					return a && a.$$intervalId in e ? (e[a.$$intervalId].reject("canceled"), clearInterval(a.$$intervalId), delete e[a.$$intervalId], !0) : !1
				};
				return d
			}
		]
	}

	function qd() {
		this.$get = function() {
			return {
				id: "en-us",
				NUMBER_FORMATS: {
					DECIMAL_SEP: ".",
					GROUP_SEP: ",",
					PATTERNS: [{
						minInt: 1,
						minFrac: 0,
						maxFrac: 3,
						posPre: "",
						posSuf: "",
						negPre: "-",
						negSuf: "",
						gSize: 3,
						lgSize: 3
					}, {
						minInt: 1,
						minFrac: 2,
						maxFrac: 2,
						posPre: "\u00a4",
						posSuf: "",
						negPre: "(\u00a4",
						negSuf: ")",
						gSize: 3,
						lgSize: 3
					}],
					CURRENCY_SYM: "$"
				},
				DATETIME_FORMATS: {
					MONTH: "January February March April May June July August September October November December".split(" "),
					SHORTMONTH: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
					DAY: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
					SHORTDAY: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
					AMPMS: ["AM", "PM"],
					medium: "MMM d, y h:mm:ss a",
					"short": "M/d/yy h:mm a",
					fullDate: "EEEE, MMMM d, y",
					longDate: "MMMM d, y",
					mediumDate: "MMM d, y",
					shortDate: "M/d/yy",
					mediumTime: "h:mm:ss a",
					shortTime: "h:mm a"
				},
				pluralCat: function(b) {
					return 1 === b ? "one" : "other"
				}
			}
		}
	}

	function oc(b) {
		b = b.split("/");
		for (var a = b.length; a--;) b[a] = rb(b[a]);
		return b.join("/")
	}

	function pc(b, a, c) {
		b = pa(b, c);
		a.$$protocol = b.protocol;
		a.$$host = b.hostname;
		a.$$port = P(b.port) || rd[b.protocol] || null
	}

	function qc(b, a, c) {
		var d = "/" !== b.charAt(0);
		d && (b = "/" + b);
		b = pa(b, c);
		a.$$path = decodeURIComponent(d && "/" === b.pathname.charAt(0) ?
			b.pathname.substring(1) : b.pathname);
		a.$$search = Vb(b.search);
		a.$$hash = decodeURIComponent(b.hash);
		a.$$path && "/" != a.$$path.charAt(0) && (a.$$path = "/" + a.$$path)
	}

	function na(b, a) {
		if (0 === a.indexOf(b)) return a.substr(b.length)
	}

	function Ua(b) {
		var a = b.indexOf("#");
		return -1 == a ? b : b.substr(0, a)
	}

	function Fb(b) {
		return b.substr(0, Ua(b)
			.lastIndexOf("/") + 1)
	}

	function rc(b, a) {
		this.$$html5 = !0;
		a = a || "";
		var c = Fb(b);
		pc(b, this, b);
		this.$$parse = function(a) {
			var e = na(c, a);
			if (!E(e)) throw Gb("ipthprfx", a, c);
			qc(e, this, b);
			this.$$path ||
				(this.$$path = "/");
			this.$$compose()
		};
		this.$$compose = function() {
			var a = Wb(this.$$search),
				b = this.$$hash ? "#" + rb(this.$$hash) : "";
			this.$$url = oc(this.$$path) + (a ? "?" + a : "") + b;
			this.$$absUrl = c + this.$$url.substr(1)
		};
		this.$$rewrite = function(d) {
			var e;
			if ((e = na(b, d)) !== r) return d = e, (e = na(a, e)) !== r ? c + (na("/", e) || e) : b + d;
			if ((e = na(c, d)) !== r) return c + e;
			if (c == d + "/") return c
		}
	}

	function Hb(b, a) {
		var c = Fb(b);
		pc(b, this, b);
		this.$$parse = function(d) {
			var e = na(b, d) || na(c, d),
				e = "#" == e.charAt(0) ? na(a, e) : this.$$html5 ? e : "";
			if (!E(e)) throw Gb("ihshprfx",
				d, a);
			qc(e, this, b);
			d = this.$$path;
			var g = /^\/?.*?:(\/.*)/;
			0 === e.indexOf(b) && (e = e.replace(b, ""));
			g.exec(e) || (d = (e = g.exec(d)) ? e[1] : d);
			this.$$path = d;
			this.$$compose()
		};
		this.$$compose = function() {
			var c = Wb(this.$$search),
				e = this.$$hash ? "#" + rb(this.$$hash) : "";
			this.$$url = oc(this.$$path) + (c ? "?" + c : "") + e;
			this.$$absUrl = b + (this.$$url ? a + this.$$url : "")
		};
		this.$$rewrite = function(a) {
			if (Ua(b) == Ua(a)) return a
		}
	}

	function sc(b, a) {
		this.$$html5 = !0;
		Hb.apply(this, arguments);
		var c = Fb(b);
		this.$$rewrite = function(d) {
			var e;
			if (b == Ua(d)) return d;
			if (e = na(c, d)) return b + a + e;
			if (c === d + "/") return c
		}
	}

	function gb(b) {
		return function() {
			return this[b]
		}
	}

	function tc(b, a) {
		return function(c) {
			if (D(c)) return this[b];
			this[b] = a(c);
			this.$$compose();
			return this
		}
	}

	function sd() {
		var b = "",
			a = !1;
		this.hashPrefix = function(a) {
			return v(a) ? (b = a, this) : b
		};
		this.html5Mode = function(b) {
			return v(b) ? (a = b, this) : a
		};
		this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement",
			function(c, d, e, g) {
				function f(a) {
					c.$broadcast("$locationChangeSuccess", h.absUrl(), a)
				}
				var h, l = d.baseHref(),
					k = d.url();
				a ? (l = k.substring(0, k.indexOf("/", k.indexOf("//") + 2)) + (l || "/"), e = e.history ? rc : sc) : (l = Ua(k), e = Hb);
				h = new e(l, "#" + b);
				h.$$parse(h.$$rewrite(k));
				g.on("click", function(a) {
					if (!a.ctrlKey && !a.metaKey && 2 != a.which) {
						for (var b = u(a.target);
							"a" !== C(b[0].nodeName);)
							if (b[0] === g[0] || !(b = b.parent())[0]) return;
						var e = b.prop("href");
						V(e) && "[object SVGAnimatedString]" === e.toString() && (e = pa(e.animVal)
							.href);
						var f = h.$$rewrite(e);
						e && (!b.attr("target") && f && !a.isDefaultPrevented()) && (a.preventDefault(), f != d.url() &&
							(h.$$parse(f), c.$apply(), Y.angular["ff-684208-preventDefault"] = !0))
					}
				});
				h.absUrl() != k && d.url(h.absUrl(), !0);
				d.onUrlChange(function(a) {
					h.absUrl() != a && (c.$broadcast("$locationChangeStart", a, h.absUrl())
						.defaultPrevented ? d.url(h.absUrl()) : (c.$evalAsync(function() {
							var b = h.absUrl();
							h.$$parse(a);
							f(b)
						}), c.$$phase || c.$digest()))
				});
				var m = 0;
				c.$watch(function() {
					var a = d.url(),
						b = h.$$replace;
					m && a == h.absUrl() || (m++, c.$evalAsync(function() {
						c.$broadcast("$locationChangeStart", h.absUrl(), a)
							.defaultPrevented ? h.$$parse(a) :
							(d.url(h.absUrl(), b), f(a))
					}));
					h.$$replace = !1;
					return m
				});
				return h
			}
		]
	}

	function td() {
		var b = !0,
			a = this;
		this.debugEnabled = function(a) {
			return v(a) ? (b = a, this) : b
		};
		this.$get = ["$window",
			function(c) {
				function d(a) {
					a instanceof Error && (a.stack ? a = a.message && -1 === a.stack.indexOf(a.message) ? "Error: " + a.message + "\n" + a.stack : a.stack : a.sourceURL && (a = a.message + "\n" + a.sourceURL + ":" + a.line));
					return a
				}

				function e(a) {
					var b = c.console || {}, e = b[a] || b.log || y;
					a = !1;
					try {
						a = !! e.apply
					} catch (l) {}
					return a ? function() {
						var a = [];
						q(arguments,
							function(b) {
								a.push(d(b))
							});
						return e.apply(b, a)
					} : function(a, b) {
						e(a, null == b ? "" : b)
					}
				}
				return {
					log: e("log"),
					info: e("info"),
					warn: e("warn"),
					error: e("error"),
					debug: function() {
						var c = e("debug");
						return function() {
							b && c.apply(a, arguments)
						}
					}()
				}
			}
		]
	}

	function ca(b, a) {
		if ("constructor" === b) throw xa("isecfld", a);
		return b
	}

	function Va(b, a) {
		if (b) {
			if (b.constructor === b) throw xa("isecfn", a);
			if (b.document && b.location && b.alert && b.setInterval) throw xa("isecwindow", a);
			if (b.children && (b.nodeName || b.on && b.find)) throw xa("isecdom",
				a);
		}
		return b
	}

	function hb(b, a, c, d, e) {
		e = e || {};
		a = a.split(".");
		for (var g, f = 0; 1 < a.length; f++) {
			g = ca(a.shift(), d);
			var h = b[g];
			h || (h = {}, b[g] = h);
			b = h;
			b.then && e.unwrapPromises && (qa(d), "$$v" in b || function(a) {
				a.then(function(b) {
					a.$$v = b
				})
			}(b), b.$$v === r && (b.$$v = {}), b = b.$$v)
		}
		g = ca(a.shift(), d);
		return b[g] = c
	}

	function uc(b, a, c, d, e, g, f) {
		ca(b, g);
		ca(a, g);
		ca(c, g);
		ca(d, g);
		ca(e, g);
		return f.unwrapPromises ? function(f, l) {
			var k = l && l.hasOwnProperty(b) ? l : f,
				m;
			if (null == k) return k;
			(k = k[b]) && k.then && (qa(g), "$$v" in k || (m = k, m.$$v = r, m.then(function(a) {
				m.$$v =
					a
			})), k = k.$$v);
			if (null == k) return a ? r : k;
			(k = k[a]) && k.then && (qa(g), "$$v" in k || (m = k, m.$$v = r, m.then(function(a) {
				m.$$v = a
			})), k = k.$$v);
			if (null == k) return c ? r : k;
			(k = k[c]) && k.then && (qa(g), "$$v" in k || (m = k, m.$$v = r, m.then(function(a) {
				m.$$v = a
			})), k = k.$$v);
			if (null == k) return d ? r : k;
			(k = k[d]) && k.then && (qa(g), "$$v" in k || (m = k, m.$$v = r, m.then(function(a) {
				m.$$v = a
			})), k = k.$$v);
			if (null == k) return e ? r : k;
			(k = k[e]) && k.then && (qa(g), "$$v" in k || (m = k, m.$$v = r, m.then(function(a) {
				m.$$v = a
			})), k = k.$$v);
			return k
		} : function(g, f) {
			var k = f && f.hasOwnProperty(b) ?
				f : g;
			if (null == k) return k;
			k = k[b];
			if (null == k) return a ? r : k;
			k = k[a];
			if (null == k) return c ? r : k;
			k = k[c];
			if (null == k) return d ? r : k;
			k = k[d];
			return null == k ? e ? r : k : k = k[e]
		}
	}

	function ud(b, a) {
		ca(b, a);
		return function(a, d) {
			return null == a ? r : (d && d.hasOwnProperty(b) ? d : a)[b]
		}
	}

	function vd(b, a, c) {
		ca(b, c);
		ca(a, c);
		return function(c, e) {
			if (null == c) return r;
			c = (e && e.hasOwnProperty(b) ? e : c)[b];
			return null == c ? r : c[a]
		}
	}

	function vc(b, a, c) {
		if (Ib.hasOwnProperty(b)) return Ib[b];
		var d = b.split("."),
			e = d.length,
			g;
		if (a.unwrapPromises || 1 !== e)
			if (a.unwrapPromises ||
				2 !== e)
				if (a.csp) g = 6 > e ? uc(d[0], d[1], d[2], d[3], d[4], c, a) : function(b, g) {
					var f = 0,
						h;
					do h = uc(d[f++], d[f++], d[f++], d[f++], d[f++], c, a)(b, g), g = r, b = h; while (f < e);
					return h
				};
				else {
					var f = "var p;\n";
					q(d, function(b, d) {
						ca(b, c);
						f += "if(s == null) return undefined;\ns=" + (d ? "s" : '((k&&k.hasOwnProperty("' + b + '"))?k:s)') + '["' + b + '"];\n' + (a.unwrapPromises ? 'if (s && s.then) {\n pw("' + c.replace(/(["\r\n])/g, "\\$1") + '");\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n' : "")
					});
					var f = f + "return s;",
						h = new Function("s", "k", "pw", f);
					h.toString = Z(f);
					g = a.unwrapPromises ? function(a, b) {
						return h(a, b, qa)
					} : h
				} else g = vd(d[0], d[1], c);
				else g = ud(d[0], c);
				"hasOwnProperty" !== b && (Ib[b] = g);
		return g
	}

	function wd() {
		var b = {}, a = {
				csp: !1,
				unwrapPromises: !1,
				logPromiseWarnings: !0
			};
		this.unwrapPromises = function(b) {
			return v(b) ? (a.unwrapPromises = !! b, this) : a.unwrapPromises
		};
		this.logPromiseWarnings = function(b) {
			return v(b) ? (a.logPromiseWarnings = b, this) : a.logPromiseWarnings
		};
		this.$get = ["$filter", "$sniffer", "$log",
			function(c, d, e) {
				a.csp = d.csp;
				qa = function(b) {
					a.logPromiseWarnings && !wc.hasOwnProperty(b) && (wc[b] = !0, e.warn("[$parse] Promise found in the expression `" + b + "`. Automatic unwrapping of promises in Angular expressions is deprecated."))
				};
				return function(d) {
					var e;
					switch (typeof d) {
						case "string":
							if (b.hasOwnProperty(d)) return b[d];
							e = new Jb(a);
							e = (new Wa(e, c, a))
								.parse(d, !1);
							"hasOwnProperty" !== d && (b[d] = e);
							return e;
						case "function":
							return d;
						default:
							return y
					}
				}
			}
		]
	}

	function xd() {
		this.$get = ["$rootScope", "$exceptionHandler",
			function(b, a) {
				return yd(function(a) {
					b.$evalAsync(a)
				}, a)
			}
		]
	}

	function yd(b, a) {
		function c(a) {
			return a
		}

		function d(a) {
			return f(a)
		}
		var e = function() {
			var h = [],
				l, k;
			return k = {
				resolve: function(a) {
					if (h) {
						var c = h;
						h = r;
						l = g(a);
						c.length && b(function() {
							for (var a, b = 0, d = c.length; b < d; b++) a = c[b], l.then(a[0], a[1], a[2])
						})
					}
				},
				reject: function(a) {
					k.resolve(f(a))
				},
				notify: function(a) {
					if (h) {
						var c = h;
						h.length && b(function() {
							for (var b, d = 0, e = c.length; d < e; d++) b = c[d], b[2](a)
						})
					}
				},
				promise: {
					then: function(b, g, f) {
						var k = e(),
							w = function(d) {
								try {
									k.resolve((J(b) ?
										b : c)(d))
								} catch (e) {
									k.reject(e), a(e)
								}
							}, A = function(b) {
								try {
									k.resolve((J(g) ? g : d)(b))
								} catch (c) {
									k.reject(c), a(c)
								}
							}, F = function(b) {
								try {
									k.notify((J(f) ? f : c)(b))
								} catch (d) {
									a(d)
								}
							};
						h ? h.push([w, A, F]) : l.then(w, A, F);
						return k.promise
					},
					"catch": function(a) {
						return this.then(null, a)
					},
					"finally": function(a) {
						function b(a, c) {
							var d = e();
							c ? d.resolve(a) : d.reject(a);
							return d.promise
						}

						function d(e, g) {
							var f = null;
							try {
								f = (a || c)()
							} catch (h) {
								return b(h, !1)
							}
							return f && J(f.then) ? f.then(function() {
								return b(e, g)
							}, function(a) {
								return b(a, !1)
							}) :
								b(e, g)
						}
						return this.then(function(a) {
							return d(a, !0)
						}, function(a) {
							return d(a, !1)
						})
					}
				}
			}
		}, g = function(a) {
				return a && J(a.then) ? a : {
					then: function(c) {
						var d = e();
						b(function() {
							d.resolve(c(a))
						});
						return d.promise
					}
				}
			}, f = function(c) {
				return {
					then: function(g, f) {
						var m = e();
						b(function() {
							try {
								m.resolve((J(f) ? f : d)(c))
							} catch (b) {
								m.reject(b), a(b)
							}
						});
						return m.promise
					}
				}
			};
		return {
			defer: e,
			reject: f,
			when: function(h, l, k, m) {
				var n = e(),
					p, t = function(b) {
						try {
							return (J(l) ? l : c)(b)
						} catch (d) {
							return a(d), f(d)
						}
					}, w = function(b) {
						try {
							return (J(k) ? k : d)(b)
						} catch (c) {
							return a(c),
							f(c)
						}
					}, A = function(b) {
						try {
							return (J(m) ? m : c)(b)
						} catch (d) {
							a(d)
						}
					};
				b(function() {
					g(h)
						.then(function(a) {
							p || (p = !0, n.resolve(g(a)
								.then(t, w, A)))
						}, function(a) {
							p || (p = !0, n.resolve(w(a)))
						}, function(a) {
							p || n.notify(A(a))
						})
				});
				return n.promise
			},
			all: function(a) {
				var b = e(),
					c = 0,
					d = I(a) ? [] : {};
				q(a, function(a, e) {
					c++;
					g(a)
						.then(function(a) {
							d.hasOwnProperty(e) || (d[e] = a, --c || b.resolve(d))
						}, function(a) {
							d.hasOwnProperty(e) || b.reject(a)
						})
				});
				0 === c && b.resolve(d);
				return b.promise
			}
		}
	}

	function zd() {
		var b = 10,
			a = s("$rootScope"),
			c = null;
		this.digestTtl =
			function(a) {
				arguments.length && (b = a);
				return b
		};
		this.$get = ["$injector", "$exceptionHandler", "$parse", "$browser",
			function(d, e, g, f) {
				function h() {
					this.$id = Xa();
					this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null;
					this["this"] = this.$root = this;
					this.$$destroyed = !1;
					this.$$asyncQueue = [];
					this.$$postDigestQueue = [];
					this.$$listeners = {};
					this.$$isolateBindings = {}
				}

				function l(b) {
					if (n.$$phase) throw a("inprog", n.$$phase);
					n.$$phase = b
				}

				function k(a, b) {
					var c =
						g(a);
					Oa(c, b);
					return c
				}

				function m() {}
				h.prototype = {
					constructor: h,
					$new: function(a) {
						a ? (a = new h, a.$root = this.$root, a.$$asyncQueue = this.$$asyncQueue, a.$$postDigestQueue = this.$$postDigestQueue) : (a = function() {}, a.prototype = this, a = new a, a.$id = Xa());
						a["this"] = a;
						a.$$listeners = {};
						a.$parent = this;
						a.$$watchers = a.$$nextSibling = a.$$childHead = a.$$childTail = null;
						a.$$prevSibling = this.$$childTail;
						this.$$childHead ? this.$$childTail = this.$$childTail.$$nextSibling = a : this.$$childHead = this.$$childTail = a;
						return a
					},
					$watch: function(a,
						b, d) {
						var e = k(a, "watch"),
							g = this.$$watchers,
							f = {
								fn: b,
								last: m,
								get: e,
								exp: a,
								eq: !! d
							};
						c = null;
						if (!J(b)) {
							var h = k(b || y, "listener");
							f.fn = function(a, b, c) {
								h(c)
							}
						}
						if ("string" == typeof a && e.constant) {
							var l = f.fn;
							f.fn = function(a, b, c) {
								l.call(this, a, b, c);
								Ka(g, f)
							}
						}
						g || (g = this.$$watchers = []);
						g.unshift(f);
						return function() {
							Ka(g, f)
						}
					},
					$watchCollection: function(a, b) {
						var c = this,
							d, e, f = 0,
							h = g(a),
							l = [],
							k = {}, m = 0;
						return this.$watch(function() {
							e = h(c);
							var a, b;
							if (V(e))
								if (ob(e))
									for (d !== l && (d = l, m = d.length = 0, f++), a = e.length, m !== a && (f++, d.length =
										m = a), b = 0; b < a; b++) d[b] !== e[b] && (f++, d[b] = e[b]);
								else {
									d !== k && (d = k = {}, m = 0, f++);
									a = 0;
									for (b in e) e.hasOwnProperty(b) && (a++, d.hasOwnProperty(b) ? d[b] !== e[b] && (f++, d[b] = e[b]) : (m++, d[b] = e[b], f++));
									if (m > a)
										for (b in f++, d) d.hasOwnProperty(b) && !e.hasOwnProperty(b) && (m--, delete d[b])
								} else d !== e && (d = e, f++);
							return f
						}, function() {
							b(e, d, c)
						})
					},
					$digest: function() {
						var d, f, g, h, k = this.$$asyncQueue,
							q = this.$$postDigestQueue,
							r, z, B = b,
							s, M = [],
							W, u, v;
						l("$digest");
						c = null;
						do {
							z = !1;
							for (s = this; k.length;) {
								try {
									v = k.shift(), v.scope.$eval(v.expression)
								} catch (R) {
									n.$$phase =
										null, e(R)
								}
								c = null
							}
							a: do {
								if (h = s.$$watchers)
									for (r = h.length; r--;) try {
										if (d = h[r])
											if ((f = d.get(s)) !== (g = d.last) && !(d.eq ? ta(f, g) : "number" == typeof f && "number" == typeof g && isNaN(f) && isNaN(g))) z = !0, c = d, d.last = d.eq ? ea(f) : f, d.fn(f, g === m ? f : g, s), 5 > B && (W = 4 - B, M[W] || (M[W] = []), u = J(d.exp) ? "fn: " + (d.exp.name || d.exp.toString()) : d.exp, u += "; newVal: " + oa(f) + "; oldVal: " + oa(g), M[W].push(u));
											else
										if (d === c) {
											z = !1;
											break a
										}
									} catch (x) {
										n.$$phase = null, e(x)
									}
								if (!(h = s.$$childHead || s !== this && s.$$nextSibling))
									for (; s !== this && !(h = s.$$nextSibling);) s =
										s.$parent
							} while (s = h);
							if (z && !B--) throw n.$$phase = null, a("infdig", b, oa(M));
						} while (z || k.length);
						for (n.$$phase = null; q.length;) try {
							q.shift()()
						} catch (D) {
							e(D)
						}
					},
					$destroy: function() {
						if (!this.$$destroyed) {
							var a = this.$parent;
							this.$broadcast("$destroy");
							this.$$destroyed = !0;
							this !== n && (a.$$childHead == this && (a.$$childHead = this.$$nextSibling), a.$$childTail == this && (a.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling =
								this.$$prevSibling), this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null)
						}
					},
					$eval: function(a, b) {
						return g(a)(this, b)
					},
					$evalAsync: function(a) {
						n.$$phase || n.$$asyncQueue.length || f.defer(function() {
							n.$$asyncQueue.length && n.$digest()
						});
						this.$$asyncQueue.push({
							scope: this,
							expression: a
						})
					},
					$$postDigest: function(a) {
						this.$$postDigestQueue.push(a)
					},
					$apply: function(a) {
						try {
							return l("$apply"), this.$eval(a)
						} catch (b) {
							e(b)
						} finally {
							n.$$phase = null;
							try {
								n.$digest()
							} catch (c) {
								throw e(c),
								c;
							}
						}
					},
					$on: function(a, b) {
						var c = this.$$listeners[a];
						c || (this.$$listeners[a] = c = []);
						c.push(b);
						return function() {
							c[$a(c, b)] = null
						}
					},
					$emit: function(a, b) {
						var c = [],
							d, f = this,
							g = !1,
							h = {
								name: a,
								targetScope: f,
								stopPropagation: function() {
									g = !0
								},
								preventDefault: function() {
									h.defaultPrevented = !0
								},
								defaultPrevented: !1
							}, l = [h].concat(ua.call(arguments, 1)),
							k, m;
						do {
							d = f.$$listeners[a] || c;
							h.currentScope = f;
							k = 0;
							for (m = d.length; k < m; k++)
								if (d[k]) try {
									d[k].apply(null, l)
								} catch (n) {
									e(n)
								} else d.splice(k, 1), k--, m--;
							if (g) break;
							f = f.$parent
						} while (f);
						return h
					},
					$broadcast: function(a, b) {
						var c = this,
							d = this,
							f = {
								name: a,
								targetScope: this,
								preventDefault: function() {
									f.defaultPrevented = !0
								},
								defaultPrevented: !1
							}, g = [f].concat(ua.call(arguments, 1)),
							h, k;
						do {
							c = d;
							f.currentScope = c;
							d = c.$$listeners[a] || [];
							h = 0;
							for (k = d.length; h < k; h++)
								if (d[h]) try {
									d[h].apply(null, g)
								} catch (l) {
									e(l)
								} else d.splice(h, 1), h--, k--;
							if (!(d = c.$$childHead || c !== this && c.$$nextSibling))
								for (; c !== this && !(d = c.$$nextSibling);) c = c.$parent
						} while (c = d);
						return f
					}
				};
				var n = new h;
				return n
			}
		]
	}

	function Ad() {
		var b = /^\s*(https?|ftp|mailto|tel|file):/,
			a = /^\s*(https?|ftp|file):|data:image\//;
		this.aHrefSanitizationWhitelist = function(a) {
			return v(a) ? (b = a, this) : b
		};
		this.imgSrcSanitizationWhitelist = function(b) {
			return v(b) ? (a = b, this) : a
		};
		this.$get = function() {
			return function(c, d) {
				var e = d ? a : b,
					g;
				if (!L || 8 <= L)
					if (g = pa(c)
						.href, "" !== g && !g.match(e)) return "unsafe:" + g;
				return c
			}
		}
	}

	function Bd(b) {
		if ("self" === b) return b;
		if (E(b)) {
			if (-1 < b.indexOf("***")) throw ra("iwcard", b);
			b = b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1")
				.replace(/\x08/g, "\\x08")
				.replace("\\*\\*", ".*")
				.replace("\\*",
					"[^:/.?&;]*");
			return RegExp("^" + b + "$")
		}
		if (Za(b)) return RegExp("^" + b.source + "$");
		throw ra("imatcher");
	}

	function xc(b) {
		var a = [];
		v(b) && q(b, function(b) {
			a.push(Bd(b))
		});
		return a
	}

	function Cd() {
		this.SCE_CONTEXTS = da;
		var b = ["self"],
			a = [];
		this.resourceUrlWhitelist = function(a) {
			arguments.length && (b = xc(a));
			return b
		};
		this.resourceUrlBlacklist = function(b) {
			arguments.length && (a = xc(b));
			return a
		};
		this.$get = ["$injector",
			function(c) {
				function d(a) {
					var b = function(a) {
						this.$$unwrapTrustedValue = function() {
							return a
						}
					};
					a && (b.prototype =
						new a);
					b.prototype.valueOf = function() {
						return this.$$unwrapTrustedValue()
					};
					b.prototype.toString = function() {
						return this.$$unwrapTrustedValue()
							.toString()
					};
					return b
				}
				var e = function(a) {
					throw ra("unsafe");
				};
				c.has("$sanitize") && (e = c.get("$sanitize"));
				var g = d(),
					f = {};
				f[da.HTML] = d(g);
				f[da.CSS] = d(g);
				f[da.URL] = d(g);
				f[da.JS] = d(g);
				f[da.RESOURCE_URL] = d(f[da.URL]);
				return {
					trustAs: function(a, b) {
						var c = f.hasOwnProperty(a) ? f[a] : null;
						if (!c) throw ra("icontext", a, b);
						if (null === b || b === r || "" === b) return b;
						if ("string" !== typeof b) throw ra("itype",
							a);
						return new c(b)
					},
					getTrusted: function(c, d) {
						if (null === d || d === r || "" === d) return d;
						var g = f.hasOwnProperty(c) ? f[c] : null;
						if (g && d instanceof g) return d.$$unwrapTrustedValue();
						if (c === da.RESOURCE_URL) {
							var g = pa(d.toString()),
								m, n, p = !1;
							m = 0;
							for (n = b.length; m < n; m++)
								if ("self" === b[m] ? Eb(g) : b[m].exec(g.href)) {
									p = !0;
									break
								}
							if (p)
								for (m = 0, n = a.length; m < n; m++)
									if ("self" === a[m] ? Eb(g) : a[m].exec(g.href)) {
										p = !1;
										break
									}
							if (p) return d;
							throw ra("insecurl", d.toString());
						}
						if (c === da.HTML) return e(d);
						throw ra("unsafe");
					},
					valueOf: function(a) {
						return a instanceof
						g ? a.$$unwrapTrustedValue() : a
					}
				}
			}
		]
	}

	function Dd() {
		var b = !0;
		this.enabled = function(a) {
			arguments.length && (b = !! a);
			return b
		};
		this.$get = ["$parse", "$sniffer", "$sceDelegate",
			function(a, c, d) {
				if (b && c.msie && 8 > c.msieDocumentMode) throw ra("iequirks");
				var e = ea(da);
				e.isEnabled = function() {
					return b
				};
				e.trustAs = d.trustAs;
				e.getTrusted = d.getTrusted;
				e.valueOf = d.valueOf;
				b || (e.trustAs = e.getTrusted = function(a, b) {
					return b
				}, e.valueOf = za);
				e.parseAs = function(b, c) {
					var d = a(c);
					return d.literal && d.constant ? d : function(a, c) {
						return e.getTrusted(b,
							d(a, c))
					}
				};
				var g = e.parseAs,
					f = e.getTrusted,
					h = e.trustAs;
				q(da, function(a, b) {
					var c = C(b);
					e[Pa("parse_as_" + c)] = function(b) {
						return g(a, b)
					};
					e[Pa("get_trusted_" + c)] = function(b) {
						return f(a, b)
					};
					e[Pa("trust_as_" + c)] = function(b) {
						return h(a, b)
					}
				});
				return e
			}
		]
	}

	function Ed() {
		this.$get = ["$window", "$document",
			function(b, a) {
				var c = {}, d = P((/android (\d+)/.exec(C((b.navigator || {})
						.userAgent)) || [])[1]),
					e = /Boxee/i.test((b.navigator || {})
						.userAgent),
					g = a[0] || {}, f = g.documentMode,
					h, l = /^(Moz|webkit|O|ms)(?=[A-Z])/,
					k = g.body && g.body.style,
					m = !1,
					n = !1;
				if (k) {
					for (var p in k)
						if (m = l.exec(p)) {
							h = m[0];
							h = h.substr(0, 1)
								.toUpperCase() + h.substr(1);
							break
						}
					h || (h = "WebkitOpacity" in k && "webkit");
					m = !! ("transition" in k || h + "Transition" in k);
					n = !! ("animation" in k || h + "Animation" in k);
					!d || m && n || (m = E(g.body.style.webkitTransition), n = E(g.body.style.webkitAnimation))
				}
				return {
					history: !(!b.history || !b.history.pushState || 4 > d || e),
					hashchange: "onhashchange" in b && (!f || 7 < f),
					hasEvent: function(a) {
						if ("input" == a && 9 == L) return !1;
						if (D(c[a])) {
							var b = g.createElement("div");
							c[a] = "on" +
								a in b
						}
						return c[a]
					},
					csp: Sb(),
					vendorPrefix: h,
					transitions: m,
					animations: n,
					android: d,
					msie: L,
					msieDocumentMode: f
				}
			}
		]
	}

	function Fd() {
		this.$get = ["$rootScope", "$browser", "$q", "$exceptionHandler",
			function(b, a, c, d) {
				function e(e, h, l) {
					var k = c.defer(),
						m = k.promise,
						n = v(l) && !l;
					h = a.defer(function() {
						try {
							k.resolve(e())
						} catch (a) {
							k.reject(a), d(a)
						} finally {
							delete g[m.$$timeoutId]
						}
						n || b.$apply()
					}, h);
					m.$$timeoutId = h;
					g[h] = k;
					return m
				}
				var g = {};
				e.cancel = function(b) {
					return b && b.$$timeoutId in g ? (g[b.$$timeoutId].reject("canceled"),
						delete g[b.$$timeoutId], a.defer.cancel(b.$$timeoutId)) : !1
				};
				return e
			}
		]
	}

	function pa(b, a) {
		var c = b;
		L && (X.setAttribute("href", c), c = X.href);
		X.setAttribute("href", c);
		return {
			href: X.href,
			protocol: X.protocol ? X.protocol.replace(/:$/, "") : "",
			host: X.host,
			search: X.search ? X.search.replace(/^\?/, "") : "",
			hash: X.hash ? X.hash.replace(/^#/, "") : "",
			hostname: X.hostname,
			port: X.port,
			pathname: "/" === X.pathname.charAt(0) ? X.pathname : "/" + X.pathname
		}
	}

	function Eb(b) {
		b = E(b) ? pa(b) : b;
		return b.protocol === yc.protocol && b.host === yc.host
	}

	function Gd() {
		this.$get = Z(Y)
	}

	function zc(b) {
		function a(d, e) {
			if (V(d)) {
				var g = {};
				q(d, function(b, c) {
					g[c] = a(c, b)
				});
				return g
			}
			return b.factory(d + c, e)
		}
		var c = "Filter";
		this.register = a;
		this.$get = ["$injector",
			function(a) {
				return function(b) {
					return a.get(b + c)
				}
			}
		];
		a("currency", Ac);
		a("date", Bc);
		a("filter", Hd);
		a("json", Id);
		a("limitTo", Jd);
		a("lowercase", Kd);
		a("number", Cc);
		a("orderBy", Dc);
		a("uppercase", Ld)
	}

	function Hd() {
		return function(b, a, c) {
			if (!I(b)) return b;
			var d = typeof c,
				e = [];
			e.check = function(a) {
				for (var b = 0; b < e.length; b++)
					if (!e[b](a)) return !1;
				return !0
			};
			"function" !== d && (c = "boolean" === d && c ? function(a, b) {
				return Na.equals(a, b)
			} : function(a, b) {
				b = ("" + b)
					.toLowerCase();
				return -1 < ("" + a)
					.toLowerCase()
					.indexOf(b)
			});
			var g = function(a, b) {
				if ("string" == typeof b && "!" === b.charAt(0)) return !g(a, b.substr(1));
				switch (typeof a) {
					case "boolean":
					case "number":
					case "string":
						return c(a, b);
					case "object":
						switch (typeof b) {
							case "object":
								return c(a, b);
							default:
								for (var d in a)
									if ("$" !== d.charAt(0) && g(a[d], b)) return !0
						}
						return !1;
					case "array":
						for (d = 0; d < a.length; d++)
							if (g(a[d], b)) return !0;
						return !1;
					default:
						return !1
				}
			};
			switch (typeof a) {
				case "boolean":
				case "number":
				case "string":
					a = {
						$: a
					};
				case "object":
					for (var f in a) "$" == f ? function() {
						if (a[f]) {
							var b = f;
							e.push(function(c) {
								return g(c, a[b])
							})
						}
					}() : function() {
						if ("undefined" != typeof a[f]) {
							var b = f;
							e.push(function(c) {
								return g(tb(c, b), a[b])
							})
						}
					}();
					break;
				case "function":
					e.push(a);
					break;
				default:
					return b
			}
			for (var d = [], h = 0; h < b.length; h++) {
				var l = b[h];
				e.check(l) && d.push(l)
			}
			return d
		}
	}

	function Ac(b) {
		var a = b.NUMBER_FORMATS;
		return function(b, d) {
			D(d) && (d = a.CURRENCY_SYM);
			return Ec(b, a.PATTERNS[1], a.GROUP_SEP, a.DECIMAL_SEP, 2)
				.replace(/\u00A4/g, d)
		}
	}

	function Cc(b) {
		var a = b.NUMBER_FORMATS;
		return function(b, d) {
			return Ec(b, a.PATTERNS[0], a.GROUP_SEP, a.DECIMAL_SEP, d)
		}
	}

	function Ec(b, a, c, d, e) {
		if (isNaN(b) || !isFinite(b)) return "";
		var g = 0 > b;
		b = Math.abs(b);
		var f = b + "",
			h = "",
			l = [],
			k = !1;
		if (-1 !== f.indexOf("e")) {
			var m = f.match(/([\d\.]+)e(-?)(\d+)/);
			m && "-" == m[2] && m[3] > e + 1 ? f = "0" : (h = f, k = !0)
		}
		if (k) 0 < e && (-1 < b && 1 > b) && (h = b.toFixed(e));
		else {
			f = (f.split(Fc)[1] || "")
				.length;
			D(e) && (e = Math.min(Math.max(a.minFrac,
				f), a.maxFrac));
			f = Math.pow(10, e);
			b = Math.round(b * f) / f;
			b = ("" + b)
				.split(Fc);
			f = b[0];
			b = b[1] || "";
			var m = 0,
				n = a.lgSize,
				p = a.gSize;
			if (f.length >= n + p)
				for (m = f.length - n, k = 0; k < m; k++) 0 === (m - k) % p && 0 !== k && (h += c), h += f.charAt(k);
			for (k = m; k < f.length; k++) 0 === (f.length - k) % n && 0 !== k && (h += c), h += f.charAt(k);
			for (; b.length < e;) b += "0";
			e && "0" !== e && (h += d + b.substr(0, e))
		}
		l.push(g ? a.negPre : a.posPre);
		l.push(h);
		l.push(g ? a.negSuf : a.posSuf);
		return l.join("")
	}

	function Kb(b, a, c) {
		var d = "";
		0 > b && (d = "-", b = -b);
		for (b = "" + b; b.length < a;) b = "0" + b;
		c && (b =
			b.substr(b.length - a));
		return d + b
	}

	function U(b, a, c, d) {
		c = c || 0;
		return function(e) {
			e = e["get" + b]();
			if (0 < c || e > -c) e += c;
			0 === e && -12 == c && (e = 12);
			return Kb(e, a, d)
		}
	}

	function ib(b, a) {
		return function(c, d) {
			var e = c["get" + b](),
				g = Ga(a ? "SHORT" + b : b);
			return d[g][e]
		}
	}

	function Bc(b) {
		function a(a) {
			var b;
			if (b = a.match(c)) {
				a = new Date(0);
				var g = 0,
					f = 0,
					h = b[8] ? a.setUTCFullYear : a.setFullYear,
					l = b[8] ? a.setUTCHours : a.setHours;
				b[9] && (g = P(b[9] + b[10]), f = P(b[9] + b[11]));
				h.call(a, P(b[1]), P(b[2]) - 1, P(b[3]));
				g = P(b[4] || 0) - g;
				f = P(b[5] || 0) - f;
				h =
					P(b[6] || 0);
				b = Math.round(1E3 * parseFloat("0." + (b[7] || 0)));
				l.call(a, g, f, h, b)
			}
			return a
		}
		var c = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
		return function(c, e) {
			var g = "",
				f = [],
				h, l;
			e = e || "mediumDate";
			e = b.DATETIME_FORMATS[e] || e;
			E(c) && (c = Md.test(c) ? P(c) : a(c));
			pb(c) && (c = new Date(c));
			if (!Ja(c)) return c;
			for (; e;)(l = Nd.exec(e)) ? (f = f.concat(ua.call(l, 1)), e = f.pop()) : (f.push(e), e = null);
			q(f, function(a) {
				h = Od[a];
				g += h ? h(c, b.DATETIME_FORMATS) : a.replace(/(^'|'$)/g,
					"")
					.replace(/''/g, "'")
			});
			return g
		}
	}

	function Id() {
		return function(b) {
			return oa(b, !0)
		}
	}

	function Jd() {
		return function(b, a) {
			if (!I(b) && !E(b)) return b;
			a = P(a);
			if (E(b)) return a ? 0 <= a ? b.slice(0, a) : b.slice(a, b.length) : "";
			var c = [],
				d, e;
			a > b.length ? a = b.length : a < -b.length && (a = -b.length);
			0 < a ? (d = 0, e = a) : (d = b.length + a, e = b.length);
			for (; d < e; d++) c.push(b[d]);
			return c
		}
	}

	function Dc(b) {
		return function(a, c, d) {
			function e(a, b) {
				return Ma(b) ? function(b, c) {
					return a(c, b)
				} : a
			}
			if (!I(a) || !c) return a;
			c = I(c) ? c : [c];
			c = Pc(c, function(a) {
				var c = !1,
					d = a || za;
				if (E(a)) {
					if ("+" == a.charAt(0) || "-" == a.charAt(0)) c = "-" == a.charAt(0), a = a.substring(1);
					d = b(a)
				}
				return e(function(a, b) {
					var c;
					c = d(a);
					var e = d(b),
						g = typeof c,
						f = typeof e;
					g == f ? ("string" == g && (c = c.toLowerCase(), e = e.toLowerCase()), c = c === e ? 0 : c < e ? -1 : 1) : c = g < f ? -1 : 1;
					return c
				}, c)
			});
			for (var g = [], f = 0; f < a.length; f++) g.push(a[f]);
			return g.sort(e(function(a, b) {
				for (var d = 0; d < c.length; d++) {
					var e = c[d](a, b);
					if (0 !== e) return e
				}
				return 0
			}, d))
		}
	}

	function sa(b) {
		J(b) && (b = {
			link: b
		});
		b.restrict = b.restrict || "AC";
		return Z(b)
	}

	function Gc(b,
		a) {
		function c(a, c) {
			c = c ? "-" + ab(c, "-") : "";
			b.removeClass((a ? jb : kb) + c)
				.addClass((a ? kb : jb) + c)
		}
		var d = this,
			e = b.parent()
				.controller("form") || lb,
			g = 0,
			f = d.$error = {}, h = [];
		d.$name = a.name || a.ngForm;
		d.$dirty = !1;
		d.$pristine = !0;
		d.$valid = !0;
		d.$invalid = !1;
		e.$addControl(d);
		b.addClass(Ha);
		c(!0);
		d.$addControl = function(a) {
			wa(a.$name, "input");
			h.push(a);
			a.$name && (d[a.$name] = a)
		};
		d.$removeControl = function(a) {
			a.$name && d[a.$name] === a && delete d[a.$name];
			q(f, function(b, c) {
				d.$setValidity(c, !0, a)
			});
			Ka(h, a)
		};
		d.$setValidity = function(a,
			b, h) {
			var n = f[a];
			if (b) n && (Ka(n, h), n.length || (g--, g || (c(b), d.$valid = !0, d.$invalid = !1), f[a] = !1, c(!0, a), e.$setValidity(a, !0, d)));
			else {
				g || c(b);
				if (n) {
					if (-1 != $a(n, h)) return
				} else f[a] = n = [], g++, c(!1, a), e.$setValidity(a, !1, d);
				n.push(h);
				d.$valid = !1;
				d.$invalid = !0
			}
		};
		d.$setDirty = function() {
			b.removeClass(Ha)
				.addClass(mb);
			d.$dirty = !0;
			d.$pristine = !1;
			e.$setDirty()
		};
		d.$setPristine = function() {
			b.removeClass(mb)
				.addClass(Ha);
			d.$dirty = !1;
			d.$pristine = !0;
			q(h, function(a) {
				a.$setPristine()
			})
		}
	}

	function nb(b, a, c, d, e, g) {
		if (!e.android) {
			var f = !1;
			a.on("compositionstart", function(a) {
				f = !0
			});
			a.on("compositionend", function() {
				f = !1
			})
		}
		var h = function() {
			if (!f) {
				var e = a.val();
				Ma(c.ngTrim || "T") && (e = aa(e));
				d.$viewValue !== e && b.$apply(function() {
					d.$setViewValue(e)
				})
			}
		};
		if (e.hasEvent("input")) a.on("input", h);
		else {
			var l, k = function() {
					l || (l = g.defer(function() {
						h();
						l = null
					}))
				};
			a.on("keydown", function(a) {
				a = a.keyCode;
				91 === a || (15 < a && 19 > a || 37 <= a && 40 >= a) || k()
			});
			if (e.hasEvent("paste")) a.on("paste cut", k)
		}
		a.on("change", h);
		d.$render = function() {
			a.val(d.$isEmpty(d.$viewValue) ?
				"" : d.$viewValue)
		};
		var m = c.ngPattern,
			n = function(a, b) {
				if (d.$isEmpty(b) || a.test(b)) return d.$setValidity("pattern", !0), b;
				d.$setValidity("pattern", !1);
				return r
			};
		m && ((e = m.match(/^\/(.*)\/([gim]*)$/)) ? (m = RegExp(e[1], e[2]), e = function(a) {
			return n(m, a)
		}) : e = function(c) {
			var d = b.$eval(m);
			if (!d || !d.test) throw s("ngPattern")("noregexp", m, d, fa(a));
			return n(d, c)
		}, d.$formatters.push(e), d.$parsers.push(e));
		if (c.ngMinlength) {
			var p = P(c.ngMinlength);
			e = function(a) {
				if (!d.$isEmpty(a) && a.length < p) return d.$setValidity("minlength", !1), r;
				d.$setValidity("minlength", !0);
				return a
			};
			d.$parsers.push(e);
			d.$formatters.push(e)
		}
		if (c.ngMaxlength) {
			var t = P(c.ngMaxlength);
			e = function(a) {
				if (!d.$isEmpty(a) && a.length > t) return d.$setValidity("maxlength", !1), r;
				d.$setValidity("maxlength", !0);
				return a
			};
			d.$parsers.push(e);
			d.$formatters.push(e)
		}
	}

	function Lb(b, a) {
		b = "ngClass" + b;
		return function() {
			return {
				restrict: "AC",
				link: function(c, d, e) {
					function g(b) {
						if (!0 === a || c.$index % 2 === a) {
							var d = f(b || "");
							h ? ta(b, h) || e.$updateClass(d, f(h)) : e.$addClass(d)
						}
						h = ea(b)
					}

					function f(a) {
						if (I(a)) return a.join(" ");
						if (V(a)) {
							var b = [];
							q(a, function(a, c) {
								a && b.push(c)
							});
							return b.join(" ")
						}
						return a
					}
					var h;
					c.$watch(e[b], g, !0);
					e.$observe("class", function(a) {
						g(c.$eval(e[b]))
					});
					"ngClass" !== b && c.$watch("$index", function(d, g) {
						var h = d & 1;
						if (h !== g & 1) {
							var n = f(c.$eval(e[b]));
							h === a ? e.$addClass(n) : e.$removeClass(n)
						}
					})
				}
			}
		}
	}
	var C = function(b) {
		return E(b) ? b.toLowerCase() : b
	}, Ga = function(b) {
			return E(b) ? b.toUpperCase() : b
		}, L, u, Aa, ua = [].slice,
		Pd = [].push,
		Ya = Object.prototype.toString,
		La = s("ng"),
		Na = Y.angular || (Y.angular = {}),
		Ta, Ea, ia = ["0", "0",
			"0"
		];
	L = P((/msie (\d+)/.exec(C(navigator.userAgent)) || [])[1]);
	isNaN(L) && (L = P((/trident\/.*; rv:(\d+)/.exec(C(navigator.userAgent)) || [])[1]));
	y.$inject = [];
	za.$inject = [];
	var aa = function() {
		return String.prototype.trim ? function(b) {
			return E(b) ? b.trim() : b
		} : function(b) {
			return E(b) ? b.replace(/^\s\s*/, "")
				.replace(/\s\s*$/, "") : b
		}
	}();
	Ea = 9 > L ? function(b) {
		b = b.nodeName ? b : b[0];
		return b.scopeName && "HTML" != b.scopeName ? Ga(b.scopeName + ":" + b.nodeName) : b.nodeName
	} : function(b) {
		return b.nodeName ? b.nodeName : b[0].nodeName
	};
	var Sc = /[A-Z]/g,
		Qd = {
			full: "1.2.6",
			major: 1,
			minor: 2,
			dot: 6,
			codeName: "taco-salsafication"
		}, Qa = N.cache = {}, bb = N.expando = "ng-" + (new Date)
			.getTime(),
		Wc = 1,
		Hc = Y.document.addEventListener ? function(b, a, c) {
			b.addEventListener(a, c, !1)
	} : function(b, a, c) {
		b.attachEvent("on" + a, c)
	}, zb = Y.document.removeEventListener ? function(b, a, c) {
		b.removeEventListener(a, c, !1)
	} : function(b, a, c) {
		b.detachEvent("on" + a, c)
	}, Uc = /([\:\-\_]+(.))/g,
		Vc = /^moz([A-Z])/,
		wb = s("jqLite"),
		Da = N.prototype = {
			ready: function(b) {
				function a() {
					c || (c = !0, b())
				}
				var c = !1;
				"complete" === O.readyState ? setTimeout(a) : (this.on("DOMContentLoaded", a), N(Y)
					.on("load", a))
			},
			toString: function() {
				var b = [];
				q(this, function(a) {
					b.push("" + a)
				});
				return "[" + b.join(", ") + "]"
			},
			eq: function(b) {
				return 0 <= b ? u(this[b]) : u(this[this.length + b])
			},
			length: 0,
			push: Pd,
			sort: [].sort,
			splice: [].splice
		}, db = {};
	q("multiple selected checked disabled readOnly required open".split(" "), function(b) {
		db[C(b)] = b
	});
	var ec = {};
	q("input select option textarea button form details".split(" "), function(b) {
		ec[Ga(b)] = !0
	});
	q({
		data: ac,
		inheritedData: cb,
		scope: function(b) {
			return u(b)
				.data("$scope") || cb(b.parentNode || b, ["$isolateScope", "$scope"])
		},
		isolateScope: function(b) {
			return u(b)
				.data("$isolateScope") || u(b)
				.data("$isolateScopeNoTemplate")
		},
		controller: bc,
		injector: function(b) {
			return cb(b, "$injector")
		},
		removeAttr: function(b, a) {
			b.removeAttribute(a)
		},
		hasClass: Ab,
		css: function(b, a, c) {
			a = Pa(a);
			if (v(c)) b.style[a] = c;
			else {
				var d;
				8 >= L && (d = b.currentStyle && b.currentStyle[a], "" === d && (d = "auto"));
				d = d || b.style[a];
				8 >= L && (d = "" === d ? r : d);
				return d
			}
		},
		attr: function(b,
			a, c) {
			var d = C(a);
			if (db[d])
				if (v(c)) c ? (b[a] = !0, b.setAttribute(a, d)) : (b[a] = !1, b.removeAttribute(d));
				else return b[a] || (b.attributes.getNamedItem(a) || y)
					.specified ? d : r;
				else
			if (v(c)) b.setAttribute(a, c);
			else if (b.getAttribute) return b = b.getAttribute(a, 2), null === b ? r : b
		},
		prop: function(b, a, c) {
			if (v(c)) b[a] = c;
			else return b[a]
		},
		text: function() {
			function b(b, d) {
				var e = a[b.nodeType];
				if (D(d)) return e ? b[e] : "";
				b[e] = d
			}
			var a = [];
			9 > L ? (a[1] = "innerText", a[3] = "nodeValue") : a[1] = a[3] = "textContent";
			b.$dv = "";
			return b
		}(),
		val: function(b,
			a) {
			if (D(a)) {
				if ("SELECT" === Ea(b) && b.multiple) {
					var c = [];
					q(b.options, function(a) {
						a.selected && c.push(a.value || a.text)
					});
					return 0 === c.length ? null : c
				}
				return b.value
			}
			b.value = a
		},
		html: function(b, a) {
			if (D(a)) return b.innerHTML;
			for (var c = 0, d = b.childNodes; c < d.length; c++) Ba(d[c]);
			b.innerHTML = a
		},
		empty: cc
	}, function(b, a) {
		N.prototype[a] = function(a, d) {
			var e, g;
			if (b !== cc && (2 == b.length && b !== Ab && b !== bc ? a : d) === r) {
				if (V(a)) {
					for (e = 0; e < this.length; e++)
						if (b === ac) b(this[e], a);
						else
							for (g in a) b(this[e], g, a[g]);
					return this
				}
				e = b.$dv;
				g = e === r ? Math.min(this.length, 1) : this.length;
				for (var f = 0; f < g; f++) {
					var h = b(this[f], a, d);
					e = e ? e + h : h
				}
				return e
			}
			for (e = 0; e < this.length; e++) b(this[e], a, d);
			return this
		}
	});
	q({
		removeData: Zb,
		dealoc: Ba,
		on: function a(c, d, e, g) {
			if (v(g)) throw wb("onargs");
			var f = ja(c, "events"),
				h = ja(c, "handle");
			f || ja(c, "events", f = {});
			h || ja(c, "handle", h = Xc(c, f));
			q(d.split(" "), function(d) {
				var g = f[d];
				if (!g) {
					if ("mouseenter" == d || "mouseleave" == d) {
						var m = O.body.contains || O.body.compareDocumentPosition ? function(a, c) {
							var d = 9 === a.nodeType ? a.documentElement :
								a,
								e = c && c.parentNode;
							return a === e || !! (e && 1 === e.nodeType && (d.contains ? d.contains(e) : a.compareDocumentPosition && a.compareDocumentPosition(e) & 16))
						} : function(a, c) {
							if (c)
								for (; c = c.parentNode;)
									if (c === a) return !0;
							return !1
						};
						f[d] = [];
						a(c, {
							mouseleave: "mouseout",
							mouseenter: "mouseover"
						}[d], function(a) {
							var c = a.relatedTarget;
							c && (c === this || m(this, c)) || h(a, d)
						})
					} else Hc(c, d, h), f[d] = [];
					g = f[d]
				}
				g.push(e)
			})
		},
		off: $b,
		one: function(a, c, d) {
			a = u(a);
			a.on(c, function g() {
				a.off(c, d);
				a.off(c, g)
			});
			a.on(c, d)
		},
		replaceWith: function(a, c) {
			var d,
				e = a.parentNode;
			Ba(a);
			q(new N(c), function(c) {
				d ? e.insertBefore(c, d.nextSibling) : e.replaceChild(c, a);
				d = c
			})
		},
		children: function(a) {
			var c = [];
			q(a.childNodes, function(a) {
				1 === a.nodeType && c.push(a)
			});
			return c
		},
		contents: function(a) {
			return a.childNodes || []
		},
		append: function(a, c) {
			q(new N(c), function(c) {
				1 !== a.nodeType && 11 !== a.nodeType || a.appendChild(c)
			})
		},
		prepend: function(a, c) {
			if (1 === a.nodeType) {
				var d = a.firstChild;
				q(new N(c), function(c) {
					a.insertBefore(c, d)
				})
			}
		},
		wrap: function(a, c) {
			c = u(c)[0];
			var d = a.parentNode;
			d &&
				d.replaceChild(c, a);
			c.appendChild(a)
		},
		remove: function(a) {
			Ba(a);
			var c = a.parentNode;
			c && c.removeChild(a)
		},
		after: function(a, c) {
			var d = a,
				e = a.parentNode;
			q(new N(c), function(a) {
				e.insertBefore(a, d.nextSibling);
				d = a
			})
		},
		addClass: Cb,
		removeClass: Bb,
		toggleClass: function(a, c, d) {
			D(d) && (d = !Ab(a, c));
			(d ? Cb : Bb)(a, c)
		},
		parent: function(a) {
			return (a = a.parentNode) && 11 !== a.nodeType ? a : null
		},
		next: function(a) {
			if (a.nextElementSibling) return a.nextElementSibling;
			for (a = a.nextSibling; null != a && 1 !== a.nodeType;) a = a.nextSibling;
			return a
		},
		find: function(a, c) {
			return a.getElementsByTagName ? a.getElementsByTagName(c) : []
		},
		clone: yb,
		triggerHandler: function(a, c, d) {
			c = (ja(a, "events") || {})[c];
			d = d || [];
			var e = [{
				preventDefault: y,
				stopPropagation: y
			}];
			q(c, function(c) {
				c.apply(a, e.concat(d))
			})
		}
	}, function(a, c) {
		N.prototype[c] = function(c, e, g) {
			for (var f, h = 0; h < this.length; h++) D(f) ? (f = a(this[h], c, e, g), v(f) && (f = u(f))) : xb(f, a(this[h], c, e, g));
			return v(f) ? f : this
		};
		N.prototype.bind = N.prototype.on;
		N.prototype.unbind = N.prototype.off
	});
	Ra.prototype = {
		put: function(a, c) {
			this[Ca(a)] =
				c
		},
		get: function(a) {
			return this[Ca(a)]
		},
		remove: function(a) {
			var c = this[a = Ca(a)];
			delete this[a];
			return c
		}
	};
	var Zc = /^function\s*[^\(]*\(\s*([^\)]*)\)/m,
		$c = /,/,
		ad = /^\s*(_?)(\S+?)\1\s*$/,
		Yc = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,
		Sa = s("$injector"),
		Rd = s("$animate"),
		Sd = ["$provide",
			function(a) {
				this.$$selectors = {};
				this.register = function(c, d) {
					var e = c + "-animation";
					if (c && "." != c.charAt(0)) throw Rd("notcsel", c);
					this.$$selectors[c.substr(1)] = e;
					a.factory(e, d)
				};
				this.classNameFilter = function(a) {
					1 === arguments.length && (this.$$classNameFilter =
						a instanceof RegExp ? a : null);
					return this.$$classNameFilter
				};
				this.$get = ["$timeout",
					function(a) {
						return {
							enter: function(d, e, g, f) {
								g ? g.after(d) : (e && e[0] || (e = g.parent()), e.append(d));
								f && a(f, 0, !1)
							},
							leave: function(d, e) {
								d.remove();
								e && a(e, 0, !1)
							},
							move: function(a, c, g, f) {
								this.enter(a, c, g, f)
							},
							addClass: function(d, e, g) {
								e = E(e) ? e : I(e) ? e.join(" ") : "";
								q(d, function(a) {
									Cb(a, e)
								});
								g && a(g, 0, !1)
							},
							removeClass: function(d, e, g) {
								e = E(e) ? e : I(e) ? e.join(" ") : "";
								q(d, function(a) {
									Bb(a, e)
								});
								g && a(g, 0, !1)
							},
							enabled: y
						}
					}
				]
			}
		],
		ha = s("$compile");
	hc.$inject = ["$provide", "$$sanitizeUriProvider"];
	var gd = /^(x[\:\-_]|data[\:\-_])/i,
		nd = Y.XMLHttpRequest || function() {
			try {
				return new ActiveXObject("Msxml2.XMLHTTP.6.0")
			} catch (a) {}
			try {
				return new ActiveXObject("Msxml2.XMLHTTP.3.0")
			} catch (c) {}
			try {
				return new ActiveXObject("Msxml2.XMLHTTP")
			} catch (d) {}
			throw s("$httpBackend")("noxhr");
	}, nc = s("$interpolate"),
		Td = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
		rd = {
			http: 80,
			https: 443,
			ftp: 21
		}, Gb = s("$location");
	sc.prototype = Hb.prototype = rc.prototype = {
		$$html5: !1,
		$$replace: !1,
		absUrl: gb("$$absUrl"),
		url: function(a, c) {
			if (D(a)) return this.$$url;
			var d = Td.exec(a);
			d[1] && this.path(decodeURIComponent(d[1]));
			(d[2] || d[1]) && this.search(d[3] || "");
			this.hash(d[5] || "", c);
			return this
		},
		protocol: gb("$$protocol"),
		host: gb("$$host"),
		port: gb("$$port"),
		path: tc("$$path", function(a) {
			return "/" == a.charAt(0) ? a : "/" + a
		}),
		search: function(a, c) {
			switch (arguments.length) {
				case 0:
					return this.$$search;
				case 1:
					if (E(a)) this.$$search = Vb(a);
					else if (V(a)) this.$$search = a;
					else throw Gb("isrcharg");
					break;
				default:
					D(c) || null === c ? delete this.$$search[a] :
						this.$$search[a] = c
			}
			this.$$compose();
			return this
		},
		hash: tc("$$hash", za),
		replace: function() {
			this.$$replace = !0;
			return this
		}
	};
	var xa = s("$parse"),
		wc = {}, qa, Ia = {
			"null": function() {
				return null
			},
			"true": function() {
				return !0
			},
			"false": function() {
				return !1
			},
			undefined: y,
			"+": function(a, c, d, e) {
				d = d(a, c);
				e = e(a, c);
				return v(d) ? v(e) ? d + e : d : v(e) ? e : r
			},
			"-": function(a, c, d, e) {
				d = d(a, c);
				e = e(a, c);
				return (v(d) ? d : 0) - (v(e) ? e : 0)
			},
			"*": function(a, c, d, e) {
				return d(a, c) * e(a, c)
			},
			"/": function(a, c, d, e) {
				return d(a, c) / e(a, c)
			},
			"%": function(a, c, d,
				e) {
				return d(a, c) % e(a, c)
			},
			"^": function(a, c, d, e) {
				return d(a, c) ^ e(a, c)
			},
			"=": y,
			"===": function(a, c, d, e) {
				return d(a, c) === e(a, c)
			},
			"!==": function(a, c, d, e) {
				return d(a, c) !== e(a, c)
			},
			"==": function(a, c, d, e) {
				return d(a, c) == e(a, c)
			},
			"!=": function(a, c, d, e) {
				return d(a, c) != e(a, c)
			},
			"<": function(a, c, d, e) {
				return d(a, c) < e(a, c)
			},
			">": function(a, c, d, e) {
				return d(a, c) > e(a, c)
			},
			"<=": function(a, c, d, e) {
				return d(a, c) <= e(a, c)
			},
			">=": function(a, c, d, e) {
				return d(a, c) >= e(a, c)
			},
			"&&": function(a, c, d, e) {
				return d(a, c) && e(a, c)
			},
			"||": function(a,
				c, d, e) {
				return d(a, c) || e(a, c)
			},
			"&": function(a, c, d, e) {
				return d(a, c) & e(a, c)
			},
			"|": function(a, c, d, e) {
				return e(a, c)(a, c, d(a, c))
			},
			"!": function(a, c, d) {
				return !d(a, c)
			}
		}, Ud = {
			n: "\n",
			f: "\f",
			r: "\r",
			t: "\t",
			v: "\v",
			"'": "'",
			'"': '"'
		}, Jb = function(a) {
			this.options = a
		};
	Jb.prototype = {
		constructor: Jb,
		lex: function(a) {
			this.text = a;
			this.index = 0;
			this.ch = r;
			this.lastCh = ":";
			this.tokens = [];
			var c;
			for (a = []; this.index < this.text.length;) {
				this.ch = this.text.charAt(this.index);
				if (this.is("\"'")) this.readString(this.ch);
				else if (this.isNumber(this.ch) ||
					this.is(".") && this.isNumber(this.peek())) this.readNumber();
				else if (this.isIdent(this.ch)) this.readIdent(), this.was("{,") && ("{" === a[0] && (c = this.tokens[this.tokens.length - 1])) && (c.json = -1 === c.text.indexOf("."));
				else if (this.is("(){}[].,;:?")) this.tokens.push({
					index: this.index,
					text: this.ch,
					json: this.was(":[,") && this.is("{[") || this.is("}]:,")
				}), this.is("{[") && a.unshift(this.ch), this.is("}]") && a.shift(), this.index++;
				else if (this.isWhitespace(this.ch)) {
					this.index++;
					continue
				} else {
					var d = this.ch + this.peek(),
						e = d + this.peek(2),
						g = Ia[this.ch],
						f = Ia[d],
						h = Ia[e];
					h ? (this.tokens.push({
						index: this.index,
						text: e,
						fn: h
					}), this.index += 3) : f ? (this.tokens.push({
						index: this.index,
						text: d,
						fn: f
					}), this.index += 2) : g ? (this.tokens.push({
						index: this.index,
						text: this.ch,
						fn: g,
						json: this.was("[,:") && this.is("+-")
					}), this.index += 1) : this.throwError("Unexpected next character ", this.index, this.index + 1)
				}
				this.lastCh = this.ch
			}
			return this.tokens
		},
		is: function(a) {
			return -1 !== a.indexOf(this.ch)
		},
		was: function(a) {
			return -1 !== a.indexOf(this.lastCh)
		},
		peek: function(a) {
			a =
				a || 1;
			return this.index + a < this.text.length ? this.text.charAt(this.index + a) : !1
		},
		isNumber: function(a) {
			return "0" <= a && "9" >= a
		},
		isWhitespace: function(a) {
			return " " === a || "\r" === a || "\t" === a || "\n" === a || "\v" === a || "\u00a0" === a
		},
		isIdent: function(a) {
			return "a" <= a && "z" >= a || "A" <= a && "Z" >= a || "_" === a || "$" === a
		},
		isExpOperator: function(a) {
			return "-" === a || "+" === a || this.isNumber(a)
		},
		throwError: function(a, c, d) {
			d = d || this.index;
			c = v(c) ? "s " + c + "-" + this.index + " [" + this.text.substring(c, d) + "]" : " " + d;
			throw xa("lexerr", a, c, this.text);
		},
		readNumber: function() {
			for (var a = "", c = this.index; this.index < this.text.length;) {
				var d = C(this.text.charAt(this.index));
				if ("." == d || this.isNumber(d)) a += d;
				else {
					var e = this.peek();
					if ("e" == d && this.isExpOperator(e)) a += d;
					else if (this.isExpOperator(d) && e && this.isNumber(e) && "e" == a.charAt(a.length - 1)) a += d;
					else if (!this.isExpOperator(d) || e && this.isNumber(e) || "e" != a.charAt(a.length - 1)) break;
					else this.throwError("Invalid exponent")
				}
				this.index++
			}
			a *= 1;
			this.tokens.push({
				index: c,
				text: a,
				json: !0,
				fn: function() {
					return a
				}
			})
		},
		readIdent: function() {
			for (var a = this, c = "", d = this.index, e, g, f, h; this.index < this.text.length;) {
				h = this.text.charAt(this.index);
				if ("." === h || this.isIdent(h) || this.isNumber(h)) "." === h && (e = this.index), c += h;
				else break;
				this.index++
			}
			if (e)
				for (g = this.index; g < this.text.length;) {
					h = this.text.charAt(g);
					if ("(" === h) {
						f = c.substr(e - d + 1);
						c = c.substr(0, e - d);
						this.index = g;
						break
					}
					if (this.isWhitespace(h)) g++;
					else break
				}
			d = {
				index: d,
				text: c
			};
			if (Ia.hasOwnProperty(c)) d.fn = Ia[c], d.json = Ia[c];
			else {
				var l = vc(c, this.options, this.text);
				d.fn =
					x(function(a, c) {
						return l(a, c)
					}, {
						assign: function(d, e) {
							return hb(d, c, e, a.text, a.options)
						}
					})
			}
			this.tokens.push(d);
			f && (this.tokens.push({
				index: e,
				text: ".",
				json: !1
			}), this.tokens.push({
				index: e + 1,
				text: f,
				json: !1
			}))
		},
		readString: function(a) {
			var c = this.index;
			this.index++;
			for (var d = "", e = a, g = !1; this.index < this.text.length;) {
				var f = this.text.charAt(this.index),
					e = e + f;
				if (g) "u" === f ? (f = this.text.substring(this.index + 1, this.index + 5), f.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + f + "]"), this.index +=
					4, d += String.fromCharCode(parseInt(f, 16))) : d = (g = Ud[f]) ? d + g : d + f, g = !1;
				else if ("\\" === f) g = !0;
				else {
					if (f === a) {
						this.index++;
						this.tokens.push({
							index: c,
							text: e,
							string: d,
							json: !0,
							fn: function() {
								return d
							}
						});
						return
					}
					d += f
				}
				this.index++
			}
			this.throwError("Unterminated quote", c)
		}
	};
	var Wa = function(a, c, d) {
		this.lexer = a;
		this.$filter = c;
		this.options = d
	};
	Wa.ZERO = function() {
		return 0
	};
	Wa.prototype = {
		constructor: Wa,
		parse: function(a, c) {
			this.text = a;
			this.json = c;
			this.tokens = this.lexer.lex(a);
			c && (this.assignment = this.logicalOR, this.functionCall =
				this.fieldAccess = this.objectIndex = this.filterChain = function() {
					this.throwError("is not valid json", {
						text: a,
						index: 0
					})
				});
			var d = c ? this.primary() : this.statements();
			0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]);
			d.literal = !! d.literal;
			d.constant = !! d.constant;
			return d
		},
		primary: function() {
			var a;
			if (this.expect("(")) a = this.filterChain(), this.consume(")");
			else if (this.expect("[")) a = this.arrayDeclaration();
			else if (this.expect("{")) a = this.object();
			else {
				var c = this.expect();
				(a = c.fn) ||
					this.throwError("not a primary expression", c);
				c.json && (a.constant = !0, a.literal = !0)
			}
			for (var d; c = this.expect("(", "[", ".");) "(" === c.text ? (a = this.functionCall(a, d), d = null) : "[" === c.text ? (d = a, a = this.objectIndex(a)) : "." === c.text ? (d = a, a = this.fieldAccess(a)) : this.throwError("IMPOSSIBLE");
			return a
		},
		throwError: function(a, c) {
			throw xa("syntax", c.text, a, c.index + 1, this.text, this.text.substring(c.index));
		},
		peekToken: function() {
			if (0 === this.tokens.length) throw xa("ueoe", this.text);
			return this.tokens[0]
		},
		peek: function(a,
			c, d, e) {
			if (0 < this.tokens.length) {
				var g = this.tokens[0],
					f = g.text;
				if (f === a || f === c || f === d || f === e || !(a || c || d || e)) return g
			}
			return !1
		},
		expect: function(a, c, d, e) {
			return (a = this.peek(a, c, d, e)) ? (this.json && !a.json && this.throwError("is not valid json", a), this.tokens.shift(), a) : !1
		},
		consume: function(a) {
			this.expect(a) || this.throwError("is unexpected, expecting [" + a + "]", this.peek())
		},
		unaryFn: function(a, c) {
			return x(function(d, e) {
				return a(d, e, c)
			}, {
				constant: c.constant
			})
		},
		ternaryFn: function(a, c, d) {
			return x(function(e, g) {
				return a(e,
					g) ? c(e, g) : d(e, g)
			}, {
				constant: a.constant && c.constant && d.constant
			})
		},
		binaryFn: function(a, c, d) {
			return x(function(e, g) {
				return c(e, g, a, d)
			}, {
				constant: a.constant && d.constant
			})
		},
		statements: function() {
			for (var a = [];;)
				if (0 < this.tokens.length && !this.peek("}", ")", ";", "]") && a.push(this.filterChain()), !this.expect(";")) return 1 === a.length ? a[0] : function(c, d) {
					for (var e, g = 0; g < a.length; g++) {
						var f = a[g];
						f && (e = f(c, d))
					}
					return e
				}
		},
		filterChain: function() {
			for (var a = this.expression(), c;;)
				if (c = this.expect("|")) a = this.binaryFn(a,
					c.fn, this.filter());
				else return a
		},
		filter: function() {
			for (var a = this.expect(), c = this.$filter(a.text), d = [];;)
				if (a = this.expect(":")) d.push(this.expression());
				else {
					var e = function(a, e, h) {
						h = [h];
						for (var l = 0; l < d.length; l++) h.push(d[l](a, e));
						return c.apply(a, h)
					};
					return function() {
						return e
					}
				}
		},
		expression: function() {
			return this.assignment()
		},
		assignment: function() {
			var a = this.ternary(),
				c, d;
			return (d = this.expect("=")) ? (a.assign || this.throwError("implies assignment but [" + this.text.substring(0, d.index) + "] can not be assigned to",
				d), c = this.ternary(), function(d, g) {
				return a.assign(d, c(d, g), g)
			}) : a
		},
		ternary: function() {
			var a = this.logicalOR(),
				c, d;
			if (this.expect("?")) {
				c = this.ternary();
				if (d = this.expect(":")) return this.ternaryFn(a, c, this.ternary());
				this.throwError("expected :", d)
			} else return a
		},
		logicalOR: function() {
			for (var a = this.logicalAND(), c;;)
				if (c = this.expect("||")) a = this.binaryFn(a, c.fn, this.logicalAND());
				else return a
		},
		logicalAND: function() {
			var a = this.equality(),
				c;
			if (c = this.expect("&&")) a = this.binaryFn(a, c.fn, this.logicalAND());
			return a
		},
		equality: function() {
			var a = this.relational(),
				c;
			if (c = this.expect("==", "!=", "===", "!==")) a = this.binaryFn(a, c.fn, this.equality());
			return a
		},
		relational: function() {
			var a = this.additive(),
				c;
			if (c = this.expect("<", ">", "<=", ">=")) a = this.binaryFn(a, c.fn, this.relational());
			return a
		},
		additive: function() {
			for (var a = this.multiplicative(), c; c = this.expect("+", "-");) a = this.binaryFn(a, c.fn, this.multiplicative());
			return a
		},
		multiplicative: function() {
			for (var a = this.unary(), c; c = this.expect("*", "/", "%");) a = this.binaryFn(a,
				c.fn, this.unary());
			return a
		},
		unary: function() {
			var a;
			return this.expect("+") ? this.primary() : (a = this.expect("-")) ? this.binaryFn(Wa.ZERO, a.fn, this.unary()) : (a = this.expect("!")) ? this.unaryFn(a.fn, this.unary()) : this.primary()
		},
		fieldAccess: function(a) {
			var c = this,
				d = this.expect()
					.text,
				e = vc(d, this.options, this.text);
			return x(function(c, d, h) {
				return e(h || a(c, d), d)
			}, {
				assign: function(e, f, h) {
					return hb(a(e, h), d, f, c.text, c.options)
				}
			})
		},
		objectIndex: function(a) {
			var c = this,
				d = this.expression();
			this.consume("]");
			return x(function(e,
				g) {
				var f = a(e, g),
					h = d(e, g),
					l;
				if (!f) return r;
				(f = Va(f[h], c.text)) && (f.then && c.options.unwrapPromises) && (l = f, "$$v" in f || (l.$$v = r, l.then(function(a) {
					l.$$v = a
				})), f = f.$$v);
				return f
			}, {
				assign: function(e, g, f) {
					var h = d(e, f);
					return Va(a(e, f), c.text)[h] = g
				}
			})
		},
		functionCall: function(a, c) {
			var d = [];
			if (")" !== this.peekToken()
				.text) {
				do d.push(this.expression()); while (this.expect(","))
			}
			this.consume(")");
			var e = this;
			return function(g, f) {
				for (var h = [], l = c ? c(g, f) : g, k = 0; k < d.length; k++) h.push(d[k](g, f));
				k = a(g, f, l) || y;
				Va(l, e.text);
				Va(k, e.text);
				h = k.apply ? k.apply(l, h) : k(h[0], h[1], h[2], h[3], h[4]);
				return Va(h, e.text)
			}
		},
		arrayDeclaration: function() {
			var a = [],
				c = !0;
			if ("]" !== this.peekToken()
				.text) {
				do {
					var d = this.expression();
					a.push(d);
					d.constant || (c = !1)
				} while (this.expect(","))
			}
			this.consume("]");
			return x(function(c, d) {
				for (var f = [], h = 0; h < a.length; h++) f.push(a[h](c, d));
				return f
			}, {
				literal: !0,
				constant: c
			})
		},
		object: function() {
			var a = [],
				c = !0;
			if ("}" !== this.peekToken()
				.text) {
				do {
					var d = this.expect(),
						d = d.string || d.text;
					this.consume(":");
					var e = this.expression();
					a.push({
						key: d,
						value: e
					});
					e.constant || (c = !1)
				} while (this.expect(","))
			}
			this.consume("}");
			return x(function(c, d) {
				for (var e = {}, l = 0; l < a.length; l++) {
					var k = a[l];
					e[k.key] = k.value(c, d)
				}
				return e
			}, {
				literal: !0,
				constant: c
			})
		}
	};
	var Ib = {}, ra = s("$sce"),
		da = {
			HTML: "html",
			CSS: "css",
			URL: "url",
			RESOURCE_URL: "resourceUrl",
			JS: "js"
		}, X = O.createElement("a"),
		yc = pa(Y.location.href, !0);
	zc.$inject = ["$provide"];
	Ac.$inject = ["$locale"];
	Cc.$inject = ["$locale"];
	var Fc = ".",
		Od = {
			yyyy: U("FullYear", 4),
			yy: U("FullYear", 2, 0, !0),
			y: U("FullYear", 1),
			MMMM: ib("Month"),
			MMM: ib("Month", !0),
			MM: U("Month", 2, 1),
			M: U("Month", 1, 1),
			dd: U("Date", 2),
			d: U("Date", 1),
			HH: U("Hours", 2),
			H: U("Hours", 1),
			hh: U("Hours", 2, -12),
			h: U("Hours", 1, -12),
			mm: U("Minutes", 2),
			m: U("Minutes", 1),
			ss: U("Seconds", 2),
			s: U("Seconds", 1),
			sss: U("Milliseconds", 3),
			EEEE: ib("Day"),
			EEE: ib("Day", !0),
			a: function(a, c) {
				return 12 > a.getHours() ? c.AMPMS[0] : c.AMPMS[1]
			},
			Z: function(a) {
				a = -1 * a.getTimezoneOffset();
				return a = (0 <= a ? "+" : "") + (Kb(Math[0 < a ? "floor" : "ceil"](a / 60), 2) + Kb(Math.abs(a % 60), 2))
			}
		}, Nd = /((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/,
		Md = /^\-?\d+$/;
	Bc.$inject = ["$locale"];
	var Kd = Z(C),
		Ld = Z(Ga);
	Dc.$inject = ["$parse"];
	var Vd = Z({
		restrict: "E",
		compile: function(a, c) {
			8 >= L && (c.href || c.name || c.$set("href", ""), a.append(O.createComment("IE fix")));
			if (!c.href && !c.name) return function(a, c) {
				c.on("click", function(a) {
					c.attr("href") || a.preventDefault()
				})
			}
		}
	}),
		Mb = {};
	q(db, function(a, c) {
		if ("multiple" != a) {
			var d = la("ng-" + c);
			Mb[d] = function() {
				return {
					priority: 100,
					compile: function() {
						return function(a, g, f) {
							a.$watch(f[d], function(a) {
								f.$set(c, !! a)
							})
						}
					}
				}
			}
		}
	});
	q(["src",
		"srcset", "href"
	], function(a) {
		var c = la("ng-" + a);
		Mb[c] = function() {
			return {
				priority: 99,
				link: function(d, e, g) {
					g.$observe(c, function(c) {
						c && (g.$set(a, c), L && e.prop(a, g[a]))
					})
				}
			}
		}
	});
	var lb = {
		$addControl: y,
		$removeControl: y,
		$setValidity: y,
		$setDirty: y,
		$setPristine: y
	};
	Gc.$inject = ["$element", "$attrs", "$scope"];
	var Ic = function(a) {
		return ["$timeout", function(c) {
			return {
				name: "form",
				restrict: a ? "EAC" : "E",
				controller: Gc,
				compile: function() {
					return {
						pre: function(a, e, g, f) {
							if (!g.action) {
								var h = function(a) {
									a.preventDefault ? a.preventDefault() :
										a.returnValue = !1
								};
								Hc(e[0], "submit", h);
								e.on("$destroy", function() {
									c(function() {
										zb(e[0], "submit", h)
									}, 0, !1)
								})
							}
							var l = e.parent()
								.controller("form"),
								k = g.name || g.ngForm;
							k && hb(a, k, f, k);
							if (l) e.on("$destroy", function() {
								l.$removeControl(f);
								k && hb(a, k, r, k);
								x(f, lb)
							})
						}
					}
				}
			}
		}]
	}, Wd = Ic(),
		Xd = Ic(!0),
		Yd = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
		Zd = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}$/,
		$d = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,
		Jc = {
			text: nb,
			number: function(a, c, d, e, g,
				f) {
				nb(a, c, d, e, g, f);
				e.$parsers.push(function(a) {
					var c = e.$isEmpty(a);
					if (c || $d.test(a)) return e.$setValidity("number", !0), "" === a ? null : c ? a : parseFloat(a);
					e.$setValidity("number", !1);
					return r
				});
				e.$formatters.push(function(a) {
					return e.$isEmpty(a) ? "" : "" + a
				});
				d.min && (a = function(a) {
					var c = parseFloat(d.min);
					if (!e.$isEmpty(a) && a < c) return e.$setValidity("min", !1), r;
					e.$setValidity("min", !0);
					return a
				}, e.$parsers.push(a), e.$formatters.push(a));
				d.max && (a = function(a) {
					var c = parseFloat(d.max);
					if (!e.$isEmpty(a) && a > c) return e.$setValidity("max", !1), r;
					e.$setValidity("max", !0);
					return a
				}, e.$parsers.push(a), e.$formatters.push(a));
				e.$formatters.push(function(a) {
					if (e.$isEmpty(a) || pb(a)) return e.$setValidity("number", !0), a;
					e.$setValidity("number", !1);
					return r
				})
			},
			url: function(a, c, d, e, g, f) {
				nb(a, c, d, e, g, f);
				a = function(a) {
					if (e.$isEmpty(a) || Yd.test(a)) return e.$setValidity("url", !0), a;
					e.$setValidity("url", !1);
					return r
				};
				e.$formatters.push(a);
				e.$parsers.push(a)
			},
			email: function(a, c, d, e, g, f) {
				nb(a, c, d, e, g, f);
				a = function(a) {
					if (e.$isEmpty(a) || Zd.test(a)) return e.$setValidity("email", !0), a;
					e.$setValidity("email", !1);
					return r
				};
				e.$formatters.push(a);
				e.$parsers.push(a)
			},
			radio: function(a, c, d, e) {
				D(d.name) && c.attr("name", Xa());
				c.on("click", function() {
					c[0].checked && a.$apply(function() {
						e.$setViewValue(d.value)
					})
				});
				e.$render = function() {
					c[0].checked = d.value == e.$viewValue
				};
				d.$observe("value", e.$render)
			},
			checkbox: function(a, c, d, e) {
				var g = d.ngTrueValue,
					f = d.ngFalseValue;
				E(g) || (g = !0);
				E(f) || (f = !1);
				c.on("click", function() {
					a.$apply(function() {
						e.$setViewValue(c[0].checked)
					})
				});
				e.$render = function() {
					c[0].checked =
						e.$viewValue
				};
				e.$isEmpty = function(a) {
					return a !== g
				};
				e.$formatters.push(function(a) {
					return a === g
				});
				e.$parsers.push(function(a) {
					return a ? g : f
				})
			},
			hidden: y,
			button: y,
			submit: y,
			reset: y
		}, Kc = ["$browser", "$sniffer",
			function(a, c) {
				return {
					restrict: "E",
					require: "?ngModel",
					link: function(d, e, g, f) {
						f && (Jc[C(g.type)] || Jc.text)(d, e, g, f, c, a)
					}
				}
			}
		],
		kb = "ng-valid",
		jb = "ng-invalid",
		Ha = "ng-pristine",
		mb = "ng-dirty",
		ae = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse",
			function(a, c, d, e, g) {
				function f(a, c) {
					c = c ? "-" + ab(c, "-") :
						"";
					e.removeClass((a ? jb : kb) + c)
						.addClass((a ? kb : jb) + c)
				}
				this.$modelValue = this.$viewValue = Number.NaN;
				this.$parsers = [];
				this.$formatters = [];
				this.$viewChangeListeners = [];
				this.$pristine = !0;
				this.$dirty = !1;
				this.$valid = !0;
				this.$invalid = !1;
				this.$name = d.name;
				var h = g(d.ngModel),
					l = h.assign;
				if (!l) throw s("ngModel")("nonassign", d.ngModel, fa(e));
				this.$render = y;
				this.$isEmpty = function(a) {
					return D(a) || "" === a || null === a || a !== a
				};
				var k = e.inheritedData("$formController") || lb,
					m = 0,
					n = this.$error = {};
				e.addClass(Ha);
				f(!0);
				this.$setValidity =
					function(a, c) {
						n[a] !== !c && (c ? (n[a] && m--, m || (f(!0), this.$valid = !0, this.$invalid = !1)) : (f(!1), this.$invalid = !0, this.$valid = !1, m++), n[a] = !c, f(c, a), k.$setValidity(a, c, this))
				};
				this.$setPristine = function() {
					this.$dirty = !1;
					this.$pristine = !0;
					e.removeClass(mb)
						.addClass(Ha)
				};
				this.$setViewValue = function(d) {
					this.$viewValue = d;
					this.$pristine && (this.$dirty = !0, this.$pristine = !1, e.removeClass(Ha)
						.addClass(mb), k.$setDirty());
					q(this.$parsers, function(a) {
						d = a(d)
					});
					this.$modelValue !== d && (this.$modelValue = d, l(a, d), q(this.$viewChangeListeners,
						function(a) {
							try {
								a()
							} catch (d) {
								c(d)
							}
						}))
				};
				var p = this;
				a.$watch(function() {
					var c = h(a);
					if (p.$modelValue !== c) {
						var d = p.$formatters,
							e = d.length;
						for (p.$modelValue = c; e--;) c = d[e](c);
						p.$viewValue !== c && (p.$viewValue = c, p.$render())
					}
					return c
				})
			}
		],
		be = function() {
			return {
				require: ["ngModel", "^?form"],
				controller: ae,
				link: function(a, c, d, e) {
					var g = e[0],
						f = e[1] || lb;
					f.$addControl(g);
					a.$on("$destroy", function() {
						f.$removeControl(g)
					})
				}
			}
		}, ce = Z({
			require: "ngModel",
			link: function(a, c, d, e) {
				e.$viewChangeListeners.push(function() {
					a.$eval(d.ngChange)
				})
			}
		}),
		Lc = function() {
			return {
				require: "?ngModel",
				link: function(a, c, d, e) {
					if (e) {
						d.required = !0;
						var g = function(a) {
							if (d.required && e.$isEmpty(a)) e.$setValidity("required", !1);
							else return e.$setValidity("required", !0), a
						};
						e.$formatters.push(g);
						e.$parsers.unshift(g);
						d.$observe("required", function() {
							g(e.$viewValue)
						})
					}
				}
			}
		}, de = function() {
			return {
				require: "ngModel",
				link: function(a, c, d, e) {
					var g = (a = /\/(.*)\//.exec(d.ngList)) && RegExp(a[1]) || d.ngList || ",";
					e.$parsers.push(function(a) {
						if (!D(a)) {
							var c = [];
							a && q(a.split(g), function(a) {
								a &&
									c.push(aa(a))
							});
							return c
						}
					});
					e.$formatters.push(function(a) {
						return I(a) ? a.join(", ") : r
					});
					e.$isEmpty = function(a) {
						return !a || !a.length
					}
				}
			}
		}, ee = /^(true|false|\d+)$/,
		fe = function() {
			return {
				priority: 100,
				compile: function(a, c) {
					return ee.test(c.ngValue) ? function(a, c, g) {
						g.$set("value", a.$eval(g.ngValue))
					} : function(a, c, g) {
						a.$watch(g.ngValue, function(a) {
							g.$set("value", a)
						})
					}
				}
			}
		}, ge = sa(function(a, c, d) {
			c.addClass("ng-binding")
				.data("$binding", d.ngBind);
			a.$watch(d.ngBind, function(a) {
				c.text(a == r ? "" : a)
			})
		}),
		he = ["$interpolate",
			function(a) {
				return function(c, d, e) {
					c = a(d.attr(e.$attr.ngBindTemplate));
					d.addClass("ng-binding")
						.data("$binding", c);
					e.$observe("ngBindTemplate", function(a) {
						d.text(a)
					})
				}
			}
		],
		ie = ["$sce", "$parse",
			function(a, c) {
				return function(d, e, g) {
					e.addClass("ng-binding")
						.data("$binding", g.ngBindHtml);
					var f = c(g.ngBindHtml);
					d.$watch(function() {
						return (f(d) || "")
							.toString()
					}, function(c) {
						e.html(a.getTrustedHtml(f(d)) || "")
					})
				}
			}
		],
		je = Lb("", !0),
		ke = Lb("Odd", 0),
		le = Lb("Even", 1),
		me = sa({
			compile: function(a, c) {
				c.$set("ngCloak", r);
				a.removeClass("ng-cloak")
			}
		}),
		ne = [
			function() {
				return {
					scope: !0,
					controller: "@",
					priority: 500
				}
			}
		],
		Mc = {};
	q("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function(a) {
		var c = la("ng-" + a);
		Mc[c] = ["$parse",
			function(d) {
				return {
					compile: function(e, g) {
						var f = d(g[c]);
						return function(c, d, e) {
							d.on(C(a), function(a) {
								c.$apply(function() {
									f(c, {
										$event: a
									})
								})
							})
						}
					}
				}
			}
		]
	});
	var oe = ["$animate",
		function(a) {
			return {
				transclude: "element",
				priority: 600,
				terminal: !0,
				restrict: "A",
				$$tlb: !0,
				link: function(c, d, e, g, f) {
					var h, l;
					c.$watch(e.ngIf, function(g) {
						Ma(g) ? l || (l = c.$new(), f(l, function(c) {
							c[c.length++] = O.createComment(" end ngIf: " + e.ngIf + " ");
							h = {
								clone: c
							};
							a.enter(c, d.parent(), d)
						})) : (l && (l.$destroy(), l = null), h && (a.leave(ub(h.clone)), h = null))
					})
				}
			}
		}
	],
		pe = ["$http", "$templateCache", "$anchorScroll", "$animate", "$sce",
			function(a, c, d, e, g) {
				return {
					restrict: "ECA",
					priority: 400,
					terminal: !0,
					transclude: "element",
					controller: Na.noop,
					compile: function(f, h) {
						var l = h.ngInclude || h.src,
							k = h.onload || "",
							m =
								h.autoscroll;
						return function(f, h, q, r, A) {
							var s = 0,
								u, x, z = function() {
									u && (u.$destroy(), u = null);
									x && (e.leave(x), x = null)
								};
							f.$watch(g.parseAsResourceUrl(l), function(g) {
								var l = function() {
									!v(m) || m && !f.$eval(m) || d()
								}, q = ++s;
								g ? (a.get(g, {
										cache: c
									})
									.success(function(a) {
										if (q === s) {
											var c = f.$new();
											r.template = a;
											a = A(c, function(a) {
												z();
												e.enter(a, null, h, l)
											});
											u = c;
											x = a;
											u.$emit("$includeContentLoaded");
											f.$eval(k)
										}
									})
									.error(function() {
										q === s && z()
									}), f.$emit("$includeContentRequested")) : (z(), r.template = null)
							})
						}
					}
				}
			}
		],
		qe = ["$compile",
			function(a) {
				return {
					restrict: "ECA",
					priority: -400,
					require: "ngInclude",
					link: function(c, d, e, g) {
						d.html(g.template);
						a(d.contents())(c)
					}
				}
			}
		],
		re = sa({
			priority: 450,
			compile: function() {
				return {
					pre: function(a, c, d) {
						a.$eval(d.ngInit)
					}
				}
			}
		}),
		se = sa({
			terminal: !0,
			priority: 1E3
		}),
		te = ["$locale", "$interpolate",
			function(a, c) {
				var d = /{}/g;
				return {
					restrict: "EA",
					link: function(e, g, f) {
						var h = f.count,
							l = f.$attr.when && g.attr(f.$attr.when),
							k = f.offset || 0,
							m = e.$eval(l) || {}, n = {}, p = c.startSymbol(),
							t = c.endSymbol(),
							r = /^when(Minus)?(.+)$/;
						q(f, function(a, c) {
							r.test(c) && (m[C(c.replace("when",
									"")
								.replace("Minus", "-"))] = g.attr(f.$attr[c]))
						});
						q(m, function(a, e) {
							n[e] = c(a.replace(d, p + h + "-" + k + t))
						});
						e.$watch(function() {
							var c = parseFloat(e.$eval(h));
							if (isNaN(c)) return "";
							c in m || (c = a.pluralCat(c - k));
							return n[c](e, g, !0)
						}, function(a) {
							g.text(a)
						})
					}
				}
			}
		],
		ue = ["$parse", "$animate",
			function(a, c) {
				var d = s("ngRepeat");
				return {
					transclude: "element",
					priority: 1E3,
					terminal: !0,
					$$tlb: !0,
					link: function(e, g, f, h, l) {
						var k = f.ngRepeat,
							m = k.match(/^\s*(.+)\s+in\s+([\r\n\s\S]*?)\s*(\s+track\s+by\s+(.+)\s*)?$/),
							n, p, t, r, s, x, v = {
								$id: Ca
							};
						if (!m) throw d("iexp", k);
						f = m[1];
						h = m[2];
						(m = m[4]) ? (n = a(m), p = function(a, c, d) {
							x && (v[x] = a);
							v[s] = c;
							v.$index = d;
							return n(e, v)
						}) : (t = function(a, c) {
							return Ca(c)
						}, r = function(a) {
							return a
						});
						m = f.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);
						if (!m) throw d("iidexp", f);
						s = m[3] || m[1];
						x = m[2];
						var D = {};
						e.$watchCollection(h, function(a) {
							var f, h, m = g[0],
								n, v = {}, H, R, E, y, T, C, I = [];
							if (ob(a)) T = a, n = p || t;
							else {
								n = p || r;
								T = [];
								for (E in a) a.hasOwnProperty(E) && "$" != E.charAt(0) && T.push(E);
								T.sort()
							}
							H = T.length;
							h = I.length = T.length;
							for (f =
								0; f < h; f++)
								if (E = a === T ? f : T[f], y = a[E], y = n(E, y, f), wa(y, "`track by` id"), D.hasOwnProperty(y)) C = D[y], delete D[y], v[y] = C, I[f] = C;
								else {
									if (v.hasOwnProperty(y)) throw q(I, function(a) {
										a && a.scope && (D[a.id] = a)
									}), d("dupes", k, y);
									I[f] = {
										id: y
									};
									v[y] = !1
								}
							for (E in D) D.hasOwnProperty(E) && (C = D[E], f = ub(C.clone), c.leave(f), q(f, function(a) {
								a.$$NG_REMOVED = !0
							}), C.scope.$destroy());
							f = 0;
							for (h = T.length; f < h; f++) {
								E = a === T ? f : T[f];
								y = a[E];
								C = I[f];
								I[f - 1] && (m = I[f - 1].clone[I[f - 1].clone.length - 1]);
								if (C.scope) {
									R = C.scope;
									n = m;
									do n = n.nextSibling;
									while (n && n.$$NG_REMOVED);
									C.clone[0] != n && c.move(ub(C.clone), null, u(m));
									m = C.clone[C.clone.length - 1]
								} else R = e.$new();
								R[s] = y;
								x && (R[x] = E);
								R.$index = f;
								R.$first = 0 === f;
								R.$last = f === H - 1;
								R.$middle = !(R.$first || R.$last);
								R.$odd = !(R.$even = 0 === (f & 1));
								C.scope || l(R, function(a) {
									a[a.length++] = O.createComment(" end ngRepeat: " + k + " ");
									c.enter(a, null, u(m));
									m = a;
									C.scope = R;
									C.clone = a;
									v[C.id] = C
								})
							}
							D = v
						})
					}
				}
			}
		],
		ve = ["$animate",
			function(a) {
				return function(c, d, e) {
					c.$watch(e.ngShow, function(c) {
						a[Ma(c) ? "removeClass" : "addClass"](d, "ng-hide")
					})
				}
			}
		],
		we = ["$animate",
			function(a) {
				return function(c, d, e) {
					c.$watch(e.ngHide, function(c) {
						a[Ma(c) ? "addClass" : "removeClass"](d, "ng-hide")
					})
				}
			}
		],
		xe = sa(function(a, c, d) {
			a.$watch(d.ngStyle, function(a, d) {
				d && a !== d && q(d, function(a, d) {
					c.css(d, "")
				});
				a && c.css(a)
			}, !0)
		}),
		ye = ["$animate",
			function(a) {
				return {
					restrict: "EA",
					require: "ngSwitch",
					controller: ["$scope",
						function() {
							this.cases = {}
						}
					],
					link: function(c, d, e, g) {
						var f, h, l = [];
						c.$watch(e.ngSwitch || e.on, function(d) {
							for (var m = 0, n = l.length; m < n; m++) l[m].$destroy(), a.leave(h[m]);
							h = [];
							l = [];
							if (f = g.cases["!" + d] || g.cases["?"]) c.$eval(e.change), q(f, function(d) {
								var e = c.$new();
								l.push(e);
								d.transclude(e, function(c) {
									var e = d.element;
									h.push(c);
									a.enter(c, e.parent(), e)
								})
							})
						})
					}
				}
			}
		],
		ze = sa({
			transclude: "element",
			priority: 800,
			require: "^ngSwitch",
			compile: function(a, c) {
				return function(a, e, g, f, h) {
					f.cases["!" + c.ngSwitchWhen] = f.cases["!" + c.ngSwitchWhen] || [];
					f.cases["!" + c.ngSwitchWhen].push({
						transclude: h,
						element: e
					})
				}
			}
		}),
		Ae = sa({
			transclude: "element",
			priority: 800,
			require: "^ngSwitch",
			link: function(a, c, d, e,
				g) {
				e.cases["?"] = e.cases["?"] || [];
				e.cases["?"].push({
					transclude: g,
					element: c
				})
			}
		}),
		Be = sa({
			controller: ["$element", "$transclude",
				function(a, c) {
					if (!c) throw s("ngTransclude")("orphan", fa(a));
					this.$transclude = c
				}
			],
			link: function(a, c, d, e) {
				e.$transclude(function(a) {
					c.empty();
					c.append(a)
				})
			}
		}),
		Ce = ["$templateCache",
			function(a) {
				return {
					restrict: "E",
					terminal: !0,
					compile: function(c, d) {
						"text/ng-template" == d.type && a.put(d.id, c[0].text)
					}
				}
			}
		],
		De = s("ngOptions"),
		Ee = Z({
			terminal: !0
		}),
		Fe = ["$compile", "$parse",
			function(a, c) {
				var d =
					/^\s*(.*?)(?:\s+as\s+(.*?))?(?:\s+group\s+by\s+(.*))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+(.*?)(?:\s+track\s+by\s+(.*?))?$/,
					e = {
						$setViewValue: y
					};
				return {
					restrict: "E",
					require: ["select", "?ngModel"],
					controller: ["$element", "$scope", "$attrs",
						function(a, c, d) {
							var l = this,
								k = {}, m = e,
								n;
							l.databound = d.ngModel;
							l.init = function(a, c, d) {
								m = a;
								n = d
							};
							l.addOption = function(c) {
								wa(c, '"option value"');
								k[c] = !0;
								m.$viewValue == c && (a.val(c), n.parent() && n.remove())
							};
							l.removeOption = function(a) {
								this.hasOption(a) &&
									(delete k[a], m.$viewValue == a && this.renderUnknownOption(a))
							};
							l.renderUnknownOption = function(c) {
								c = "? " + Ca(c) + " ?";
								n.val(c);
								a.prepend(n);
								a.val(c);
								n.prop("selected", !0)
							};
							l.hasOption = function(a) {
								return k.hasOwnProperty(a)
							};
							c.$on("$destroy", function() {
								l.renderUnknownOption = y
							})
						}
					],
					link: function(e, f, h, l) {
						function k(a, c, d, e) {
							d.$render = function() {
								var a = d.$viewValue;
								e.hasOption(a) ? (y.parent() && y.remove(), c.val(a), "" === a && x.prop("selected", !0)) : D(a) && x ? c.val("") : e.renderUnknownOption(a)
							};
							c.on("change", function() {
								a.$apply(function() {
									y.parent() &&
										y.remove();
									d.$setViewValue(c.val())
								})
							})
						}

						function m(a, c, d) {
							var e;
							d.$render = function() {
								var a = new Ra(d.$viewValue);
								q(c.find("option"), function(c) {
									c.selected = v(a.get(c.value))
								})
							};
							a.$watch(function() {
								ta(e, d.$viewValue) || (e = ea(d.$viewValue), d.$render())
							});
							c.on("change", function() {
								a.$apply(function() {
									var a = [];
									q(c.find("option"), function(c) {
										c.selected && a.push(c.value)
									});
									d.$setViewValue(a)
								})
							})
						}

						function n(e, f, g) {
							function h() {
								var a = {
									"": []
								}, c = [""],
									d, k, r, s, w;
								s = g.$modelValue;
								w = x(e) || [];
								var B = n ? Nb(w) : w,
									D, K, z;
								K = {};
								r = !1;
								var F, J;
								if (t)
									if (u && I(s))
										for (r = new Ra([]), z = 0; z < s.length; z++) K[m] = s[z], r.put(u(e, K), s[z]);
									else r = new Ra(s);
								for (z = 0; D = B.length, z < D; z++) {
									k = z;
									if (n) {
										k = B[z];
										if ("$" === k.charAt(0)) continue;
										K[n] = k
									}
									K[m] = w[k];
									d = p(e, K) || "";
									(k = a[d]) || (k = a[d] = [], c.push(d));
									t ? d = v(r.remove(u ? u(e, K) : q(e, K))) : (u ? (d = {}, d[m] = s, d = u(e, d) === u(e, K)) : d = s === q(e, K), r = r || d);
									F = l(e, K);
									F = v(F) ? F : "";
									k.push({
										id: u ? u(e, K) : n ? B[z] : z,
										label: F,
										selected: d
									})
								}
								t || (A || null === s ? a[""].unshift({
									id: "",
									label: "",
									selected: !r
								}) : r || a[""].unshift({
									id: "?",
									label: "",
									selected: !0
								}));
								K = 0;
								for (B = c.length; K < B; K++) {
									d = c[K];
									k = a[d];
									y.length <= K ? (s = {
										element: E.clone()
											.attr("label", d),
										label: k.label
									}, w = [s], y.push(w), f.append(s.element)) : (w = y[K], s = w[0], s.label != d && s.element.attr("label", s.label = d));
									F = null;
									z = 0;
									for (D = k.length; z < D; z++) r = k[z], (d = w[z + 1]) ? (F = d.element, d.label !== r.label && F.text(d.label = r.label), d.id !== r.id && F.val(d.id = r.id), F[0].selected !== r.selected && F.prop("selected", d.selected = r.selected)) : ("" === r.id && A ? J = A : (J = C.clone())
										.val(r.id)
										.attr("selected", r.selected)
										.text(r.label),
										w.push({
											element: J,
											label: r.label,
											id: r.id,
											selected: r.selected
										}), F ? F.after(J) : s.element.append(J), F = J);
									for (z++; w.length > z;) w.pop()
										.element.remove()
								}
								for (; y.length > K;) y.pop()[0].element.remove()
							}
							var k;
							if (!(k = s.match(d))) throw De("iexp", s, fa(f));
							var l = c(k[2] || k[1]),
								m = k[4] || k[6],
								n = k[5],
								p = c(k[3] || ""),
								q = c(k[2] ? k[1] : m),
								x = c(k[7]),
								u = k[8] ? c(k[8]) : null,
								y = [
									[{
										element: f,
										label: ""
									}]
								];
							A && (a(A)(e), A.removeClass("ng-scope"), A.remove());
							f.empty();
							f.on("change", function() {
								e.$apply(function() {
									var a, c = x(e) || [],
										d = {}, h, k, l,
										p, s, w, v;
									if (t)
										for (k = [], p = 0, w = y.length; p < w; p++)
											for (a = y[p], l = 1, s = a.length; l < s; l++) {
												if ((h = a[l].element)[0].selected) {
													h = h.val();
													n && (d[n] = h);
													if (u)
														for (v = 0; v < c.length && (d[m] = c[v], u(e, d) != h); v++);
													else d[m] = c[h];
													k.push(q(e, d))
												}
											} else if (h = f.val(), "?" == h) k = r;
											else
									if ("" === h) k = null;
									else if (u)
										for (v = 0; v < c.length; v++) {
											if (d[m] = c[v], u(e, d) == h) {
												k = q(e, d);
												break
											}
										} else d[m] = c[h], n && (d[n] = h), k = q(e, d);
									g.$setViewValue(k)
								})
							});
							g.$render = h;
							e.$watch(h)
						}
						if (l[1]) {
							var p = l[0];
							l = l[1];
							var t = h.multiple,
								s = h.ngOptions,
								A = !1,
								x, C = u(O.createElement("option")),
								E = u(O.createElement("optgroup")),
								y = C.clone();
							h = 0;
							for (var B = f.children(), J = B.length; h < J; h++)
								if ("" === B[h].value) {
									x = A = B.eq(h);
									break
								}
							p.init(l, A, y);
							t && (l.$isEmpty = function(a) {
								return !a || 0 === a.length
							});
							s ? n(e, f, l) : t ? m(e, f, l) : k(e, f, l, p)
						}
					}
				}
			}
		],
		Ge = ["$interpolate",
			function(a) {
				var c = {
					addOption: y,
					removeOption: y
				};
				return {
					restrict: "E",
					priority: 100,
					compile: function(d, e) {
						if (D(e.value)) {
							var g = a(d.text(), !0);
							g || e.$set("value", d.text())
						}
						return function(a, d, e) {
							var k = d.parent(),
								m = k.data("$selectController") || k.parent()
									.data("$selectController");
							m && m.databound ? d.prop("selected", !1) : m = c;
							g ? a.$watch(g, function(a, c) {
								e.$set("value", a);
								a !== c && m.removeOption(c);
								m.addOption(a)
							}) : m.addOption(e.value);
							d.on("$destroy", function() {
								m.removeOption(e.value)
							})
						}
					}
				}
			}
		],
		He = Z({
			restrict: "E",
			terminal: !0
		});
	(Aa = Y.jQuery) ? (u = Aa, x(Aa.fn, {
			scope: Da.scope,
			isolateScope: Da.isolateScope,
			controller: Da.controller,
			injector: Da.injector,
			inheritedData: Da.inheritedData
		}), vb("remove", !0, !0, !1), vb("empty", !1, !1, !1), vb("html", !1, !1, !0)) : u = N;
	Na.element = u;
	(function(a) {
		x(a, {
			bootstrap: Xb,
			copy: ea,
			extend: x,
			equals: ta,
			element: u,
			forEach: q,
			injector: Yb,
			noop: y,
			bind: qb,
			toJson: oa,
			fromJson: Tb,
			identity: za,
			isUndefined: D,
			isDefined: v,
			isString: E,
			isFunction: J,
			isObject: V,
			isNumber: pb,
			isElement: Oc,
			isArray: I,
			version: Qd,
			isDate: Ja,
			lowercase: C,
			uppercase: Ga,
			callbacks: {
				counter: 0
			},
			$$minErr: s,
			$$csp: Sb
		});
		Ta = Tc(Y);
		try {
			Ta("ngLocale")
		} catch (c) {
			Ta("ngLocale", [])
				.provider("$locale", qd)
		}
		Ta("ng", ["ngLocale"], ["$provide",
			function(a) {
				a.provider({
					$$sanitizeUri: Ad
				});
				a.provider("$compile", hc)
					.directive({
						a: Vd,
						input: Kc,
						textarea: Kc,
						form: Wd,
						script: Ce,
						select: Fe,
						style: He,
						option: Ge,
						ngBind: ge,
						ngBindHtml: ie,
						ngBindTemplate: he,
						ngClass: je,
						ngClassEven: le,
						ngClassOdd: ke,
						ngCloak: me,
						ngController: ne,
						ngForm: Xd,
						ngHide: we,
						ngIf: oe,
						ngInclude: pe,
						ngInit: re,
						ngNonBindable: se,
						ngPluralize: te,
						ngRepeat: ue,
						ngShow: ve,
						ngStyle: xe,
						ngSwitch: ye,
						ngSwitchWhen: ze,
						ngSwitchDefault: Ae,
						ngOptions: Ee,
						ngTransclude: Be,
						ngModel: be,
						ngList: de,
						ngChange: ce,
						required: Lc,
						ngRequired: Lc,
						ngValue: fe
					})
					.directive({
						ngInclude: qe
					})
					.directive(Mb)
					.directive(Mc);
				a.provider({
					$anchorScroll: bd,
					$animate: Sd,
					$browser: dd,
					$cacheFactory: ed,
					$controller: hd,
					$document: id,
					$exceptionHandler: jd,
					$filter: zc,
					$interpolate: od,
					$interval: pd,
					$http: kd,
					$httpBackend: ld,
					$location: sd,
					$log: td,
					$parse: wd,
					$rootScope: zd,
					$q: xd,
					$sce: Dd,
					$sceDelegate: Cd,
					$sniffer: Ed,
					$templateCache: fd,
					$timeout: Fd,
					$window: Gd
				})
			}
		])
	})(Na);
	u(O)
		.ready(function() {
			Rc(O, Xb)
		})
})(window, document);
!angular.$$csp() && angular.element(document)
	.find("head")
	.prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}</style>');
//# sourceMappingURL=angular.min.js.map

! function() {
	function n(n, t) {
		return t > n ? -1 : n > t ? 1 : n >= t ? 0 : 0 / 0
	}

	function t(n) {
		return null != n && !isNaN(n)
	}

	function e(n) {
		return {
			left: function(t, e, r, u) {
				for (arguments.length < 3 && (r = 0), arguments.length < 4 && (u = t.length); u > r;) {
					var i = r + u >>> 1;
					n(t[i], e) < 0 ? r = i + 1 : u = i
				}
				return r
			},
			right: function(t, e, r, u) {
				for (arguments.length < 3 && (r = 0), arguments.length < 4 && (u = t.length); u > r;) {
					var i = r + u >>> 1;
					n(t[i], e) > 0 ? u = i : r = i + 1
				}
				return r
			}
		}
	}

	function r(n) {
		return n.length
	}

	function u(n) {
		for (var t = 1; n * t % 1;) t *= 10;
		return t
	}

	function i(n, t) {
		try {
			for (var e in t) Object.defineProperty(n.prototype, e, {
				value: t[e],
				enumerable: !1
			})
		} catch (r) {
			n.prototype = t
		}
	}

	function o() {}

	function a(n) {
		return ha + n in this
	}

	function c(n) {
		return n = ha + n, n in this && delete this[n]
	}

	function s() {
		var n = [];
		return this.forEach(function(t) {
			n.push(t)
		}), n
	}

	function l() {
		var n = 0;
		for (var t in this) t.charCodeAt(0) === ga && ++n;
		return n
	}

	function f() {
		for (var n in this)
			if (n.charCodeAt(0) === ga) return !1;
		return !0
	}

	function h() {}

	function g(n, t, e) {
		return function() {
			var r = e.apply(t, arguments);
			return r === t ? n : r
		}
	}

	function p(n, t) {
		if (t in n) return t;
		t = t.charAt(0)
			.toUpperCase() + t.substring(1);
		for (var e = 0, r = pa.length; r > e; ++e) {
			var u = pa[e] + t;
			if (u in n) return u
		}
	}

	function v() {}

	function d() {}

	function m(n) {
		function t() {
			for (var t, r = e, u = -1, i = r.length; ++u < i;)(t = r[u].on) && t.apply(this, arguments);
			return n
		}
		var e = [],
			r = new o;
		return t.on = function(t, u) {
			var i, o = r.get(t);
			return arguments.length < 2 ? o && o.on : (o && (o.on = null, e = e.slice(0, i = e.indexOf(o))
				.concat(e.slice(i + 1)), r.remove(t)), u && e.push(r.set(t, {
				on: u
			})), n)
		}, t
	}

	function y() {
		Go.event.preventDefault()
	}

	function x() {
		for (var n, t = Go.event; n = t.sourceEvent;) t = n;
		return t
	}

	function M(n) {
		for (var t = new d, e = 0, r = arguments.length; ++e < r;) t[arguments[e]] = m(t);
		return t.of = function(e, r) {
			return function(u) {
				try {
					var i = u.sourceEvent = Go.event;
					u.target = n, Go.event = u, t[u.type].apply(e, r)
				} finally {
					Go.event = i
				}
			}
		}, t
	}

	function _(n) {
		return da(n, _a), n
	}

	function b(n) {
		return "function" == typeof n ? n : function() {
			return ma(n, this)
		}
	}

	function w(n) {
		return "function" == typeof n ? n : function() {
			return ya(n, this)
		}
	}

	function S(n, t) {
		function e() {
			this.removeAttribute(n)
		}

		function r() {
			this.removeAttributeNS(n.space, n.local)
		}

		function u() {
			this.setAttribute(n, t)
		}

		function i() {
			this.setAttributeNS(n.space, n.local, t)
		}

		function o() {
			var e = t.apply(this, arguments);
			null == e ? this.removeAttribute(n) : this.setAttribute(n, e)
		}

		function a() {
			var e = t.apply(this, arguments);
			null == e ? this.removeAttributeNS(n.space, n.local) : this.setAttributeNS(n.space, n.local, e)
		}
		return n = Go.ns.qualify(n), null == t ? n.local ? r : e : "function" == typeof t ? n.local ? a : o : n.local ? i : u
	}

	function k(n) {
		return n.trim()
			.replace(/\s+/g, " ")
	}

	function E(n) {
		return new RegExp("(?:^|\\s+)" + Go.requote(n) + "(?:\\s+|$)", "g")
	}

	function A(n) {
		return n.trim()
			.split(/^|\s+/)
	}

	function C(n, t) {
		function e() {
			for (var e = -1; ++e < u;) n[e](this, t)
		}

		function r() {
			for (var e = -1, r = t.apply(this, arguments); ++e < u;) n[e](this, r)
		}
		n = A(n)
			.map(N);
		var u = n.length;
		return "function" == typeof t ? r : e
	}

	function N(n) {
		var t = E(n);
		return function(e, r) {
			if (u = e.classList) return r ? u.add(n) : u.remove(n);
			var u = e.getAttribute("class") || "";
			r ? (t.lastIndex = 0, t.test(u) || e.setAttribute("class", k(u + " " + n))) : e.setAttribute("class", k(u.replace(t, " ")))
		}
	}

	function L(n, t, e) {
		function r() {
			this.style.removeProperty(n)
		}

		function u() {
			this.style.setProperty(n, t, e)
		}

		function i() {
			var r = t.apply(this, arguments);
			null == r ? this.style.removeProperty(n) : this.style.setProperty(n, r, e)
		}
		return null == t ? r : "function" == typeof t ? i : u
	}

	function T(n, t) {
		function e() {
			delete this[n]
		}

		function r() {
			this[n] = t
		}

		function u() {
			var e = t.apply(this, arguments);
			null == e ? delete this[n] : this[n] = e
		}
		return null == t ? e : "function" == typeof t ? u : r
	}

	function q(n) {
		return "function" == typeof n ? n : (n = Go.ns.qualify(n))
			.local ? function() {
				return this.ownerDocument.createElementNS(n.space, n.local)
		} : function() {
			return this.ownerDocument.createElementNS(this.namespaceURI, n)
		}
	}

	function z(n) {
		return {
			__data__: n
		}
	}

	function R(n) {
		return function() {
			return Ma(this, n)
		}
	}

	function D(t) {
		return arguments.length || (t = n),
		function(n, e) {
			return n && e ? t(n.__data__, e.__data__) : !n - !e
		}
	}

	function P(n, t) {
		for (var e = 0, r = n.length; r > e; e++)
			for (var u, i = n[e], o = 0, a = i.length; a > o; o++)(u = i[o]) && t(u, o, e);
		return n
	}

	function U(n) {
		return da(n, wa), n
	}

	function j(n) {
		var t, e;
		return function(r, u, i) {
			var o, a = n[i].update,
				c = a.length;
			for (i != e && (e = i, t = 0), u >= t && (t = u + 1); !(o = a[t]) && ++t < c;);
			return o
		}
	}

	function H() {
		var n = this.__transition__;
		n && ++n.active
	}

	function F(n, t, e) {
		function r() {
			var t = this[o];
			t && (this.removeEventListener(n, t, t.$), delete this[o])
		}

		function u() {
			var u = c(t, Qo(arguments));
			r.call(this), this.addEventListener(n, this[o] = u, u.$ = e), u._ = t
		}

		function i() {
			var t, e = new RegExp("^__on([^.]+)" + Go.requote(n) + "$");
			for (var r in this)
				if (t = r.match(e)) {
					var u = this[r];
					this.removeEventListener(t[1], u, u.$), delete this[r]
				}
		}
		var o = "__on" + n,
			a = n.indexOf("."),
			c = O;
		a > 0 && (n = n.substring(0, a));
		var s = ka.get(n);
		return s && (n = s, c = I), a ? t ? u : r : t ? v : i
	}

	function O(n, t) {
		return function(e) {
			var r = Go.event;
			Go.event = e, t[0] = this.__data__;
			try {
				n.apply(this, t)
			} finally {
				Go.event = r
			}
		}
	}

	function I(n, t) {
		var e = O(n, t);
		return function(n) {
			var t = this,
				r = n.relatedTarget;
			r && (r === t || 8 & r.compareDocumentPosition(t)) || e.call(t, n)
		}
	}

	function Y() {
		var n = ".dragsuppress-" + ++Aa,
			t = "click" + n,
			e = Go.select(ea)
				.on("touchmove" + n, y)
				.on("dragstart" + n, y)
				.on("selectstart" + n, y);
		if (Ea) {
			var r = ta.style,
				u = r[Ea];
			r[Ea] = "none"
		}
		return function(i) {
			function o() {
				e.on(t, null)
			}
			e.on(n, null), Ea && (r[Ea] = u), i && (e.on(t, function() {
				y(), o()
			}, !0), setTimeout(o, 0))
		}
	}

	function Z(n, t) {
		t.changedTouches && (t = t.changedTouches[0]);
		var e = n.ownerSVGElement || n;
		if (e.createSVGPoint) {
			var r = e.createSVGPoint();
			return r.x = t.clientX, r.y = t.clientY, r = r.matrixTransform(n.getScreenCTM()
				.inverse()), [r.x, r.y]
		}
		var u = n.getBoundingClientRect();
		return [t.clientX - u.left - n.clientLeft, t.clientY - u.top - n.clientTop]
	}

	function V() {
		return Go.event.changedTouches[0].identifier
	}

	function $() {
		return Go.event.target
	}

	function X() {
		return ea
	}

	function B(n) {
		return n > 0 ? 1 : 0 > n ? -1 : 0
	}

	function J(n, t, e) {
		return (t[0] - n[0]) * (e[1] - n[1]) - (t[1] - n[1]) * (e[0] - n[0])
	}

	function W(n) {
		return n > 1 ? 0 : -1 > n ? Ca : Math.acos(n)
	}

	function G(n) {
		return n > 1 ? La : -1 > n ? -La : Math.asin(n)
	}

	function K(n) {
		return ((n = Math.exp(n)) - 1 / n) / 2
	}

	function Q(n) {
		return ((n = Math.exp(n)) + 1 / n) / 2
	}

	function nt(n) {
		return ((n = Math.exp(2 * n)) - 1) / (n + 1)
	}

	function tt(n) {
		return (n = Math.sin(n / 2)) * n
	}

	function et() {}

	function rt(n, t, e) {
		return new ut(n, t, e)
	}

	function ut(n, t, e) {
		this.h = n, this.s = t, this.l = e
	}

	function it(n, t, e) {
		function r(n) {
			return n > 360 ? n -= 360 : 0 > n && (n += 360), 60 > n ? i + (o - i) * n / 60 : 180 > n ? o : 240 > n ? i + (o - i) * (240 - n) / 60 : i
		}

		function u(n) {
			return Math.round(255 * r(n))
		}
		var i, o;
		return n = isNaN(n) ? 0 : (n %= 360) < 0 ? n + 360 : n, t = isNaN(t) ? 0 : 0 > t ? 0 : t > 1 ? 1 : t, e = 0 > e ? 0 : e > 1 ? 1 : e, o = .5 >= e ? e * (1 + t) : e + t - e * t, i = 2 * e - o, yt(u(n + 120), u(n), u(n - 120))
	}

	function ot(n, t, e) {
		return new at(n, t, e)
	}

	function at(n, t, e) {
		this.h = n, this.c = t, this.l = e
	}

	function ct(n, t, e) {
		return isNaN(n) && (n = 0), isNaN(t) && (t = 0), st(e, Math.cos(n *= za) * t, Math.sin(n) * t)
	}

	function st(n, t, e) {
		return new lt(n, t, e)
	}

	function lt(n, t, e) {
		this.l = n, this.a = t, this.b = e
	}

	function ft(n, t, e) {
		var r = (n + 16) / 116,
			u = r + t / 500,
			i = r - e / 200;
		return u = gt(u) * Za, r = gt(r) * Va, i = gt(i) * $a, yt(vt(3.2404542 * u - 1.5371385 * r - .4985314 * i), vt(-.969266 * u + 1.8760108 * r + .041556 * i), vt(.0556434 * u - .2040259 * r + 1.0572252 * i))
	}

	function ht(n, t, e) {
		return n > 0 ? ot(Math.atan2(e, t) * Ra, Math.sqrt(t * t + e * e), n) : ot(0 / 0, 0 / 0, n)
	}

	function gt(n) {
		return n > .206893034 ? n * n * n : (n - 4 / 29) / 7.787037
	}

	function pt(n) {
		return n > .008856 ? Math.pow(n, 1 / 3) : 7.787037 * n + 4 / 29
	}

	function vt(n) {
		return Math.round(255 * (.00304 >= n ? 12.92 * n : 1.055 * Math.pow(n, 1 / 2.4) - .055))
	}

	function dt(n) {
		return yt(n >> 16, 255 & n >> 8, 255 & n)
	}

	function mt(n) {
		return dt(n) + ""
	}

	function yt(n, t, e) {
		return new xt(n, t, e)
	}

	function xt(n, t, e) {
		this.r = n, this.g = t, this.b = e
	}

	function Mt(n) {
		return 16 > n ? "0" + Math.max(0, n)
			.toString(16) : Math.min(255, n)
			.toString(16)
	}

	function _t(n, t, e) {
		var r, u, i, o = 0,
			a = 0,
			c = 0;
		if (r = /([a-z]+)\((.*)\)/i.exec(n)) switch (u = r[2].split(","), r[1]) {
			case "hsl":
				return e(parseFloat(u[0]), parseFloat(u[1]) / 100, parseFloat(u[2]) / 100);
			case "rgb":
				return t(kt(u[0]), kt(u[1]), kt(u[2]))
		}
		return (i = Ja.get(n)) ? t(i.r, i.g, i.b) : (null == n || "#" !== n.charAt(0) || isNaN(i = parseInt(n.substring(1), 16)) || (4 === n.length ? (o = (3840 & i) >> 4, o = o >> 4 | o, a = 240 & i, a = a >> 4 | a, c = 15 & i, c = c << 4 | c) : 7 === n.length && (o = (16711680 & i) >> 16, a = (65280 & i) >> 8, c = 255 & i)), t(o, a, c))
	}

	function bt(n, t, e) {
		var r, u, i = Math.min(n /= 255, t /= 255, e /= 255),
			o = Math.max(n, t, e),
			a = o - i,
			c = (o + i) / 2;
		return a ? (u = .5 > c ? a / (o + i) : a / (2 - o - i), r = n == o ? (t - e) / a + (e > t ? 6 : 0) : t == o ? (e - n) / a + 2 : (n - t) / a + 4, r *= 60) : (r = 0 / 0, u = c > 0 && 1 > c ? 0 : r), rt(r, u, c)
	}

	function wt(n, t, e) {
		n = St(n), t = St(t), e = St(e);
		var r = pt((.4124564 * n + .3575761 * t + .1804375 * e) / Za),
			u = pt((.2126729 * n + .7151522 * t + .072175 * e) / Va),
			i = pt((.0193339 * n + .119192 * t + .9503041 * e) / $a);
		return st(116 * u - 16, 500 * (r - u), 200 * (u - i))
	}

	function St(n) {
		return (n /= 255) <= .04045 ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4)
	}

	function kt(n) {
		var t = parseFloat(n);
		return "%" === n.charAt(n.length - 1) ? Math.round(2.55 * t) : t
	}

	function Et(n) {
		return "function" == typeof n ? n : function() {
			return n
		}
	}

	function At(n) {
		return n
	}

	function Ct(n) {
		return function(t, e, r) {
			return 2 === arguments.length && "function" == typeof e && (r = e, e = null), Nt(t, e, n, r)
		}
	}

	function Nt(n, t, e, r) {
		function u() {
			var n, t = c.status;
			if (!t && c.responseText || t >= 200 && 300 > t || 304 === t) {
				try {
					n = e.call(i, c)
				} catch (r) {
					return o.error.call(i, r), void 0
				}
				o.load.call(i, n)
			} else o.error.call(i, c)
		}
		var i = {}, o = Go.dispatch("beforesend", "progress", "load", "error"),
			a = {}, c = new XMLHttpRequest,
			s = null;
		return !ea.XDomainRequest || "withCredentials" in c || !/^(http(s)?:)?\/\//.test(n) || (c = new XDomainRequest), "onload" in c ? c.onload = c.onerror = u : c.onreadystatechange = function() {
			c.readyState > 3 && u()
		}, c.onprogress = function(n) {
			var t = Go.event;
			Go.event = n;
			try {
				o.progress.call(i, c)
			} finally {
				Go.event = t
			}
		}, i.header = function(n, t) {
			return n = (n + "")
				.toLowerCase(), arguments.length < 2 ? a[n] : (null == t ? delete a[n] : a[n] = t + "", i)
		}, i.mimeType = function(n) {
			return arguments.length ? (t = null == n ? null : n + "", i) : t
		}, i.responseType = function(n) {
			return arguments.length ? (s = n, i) : s
		}, i.response = function(n) {
			return e = n, i
		}, ["get", "post"].forEach(function(n) {
			i[n] = function() {
				return i.send.apply(i, [n].concat(Qo(arguments)))
			}
		}), i.send = function(e, r, u) {
			if (2 === arguments.length && "function" == typeof r && (u = r, r = null), c.open(e, n, !0), null == t || "accept" in a || (a.accept = t + ",*/*"), c.setRequestHeader)
				for (var l in a) c.setRequestHeader(l, a[l]);
			return null != t && c.overrideMimeType && c.overrideMimeType(t), null != s && (c.responseType = s), null != u && i.on("error", u)
				.on("load", function(n) {
					u(null, n)
				}), o.beforesend.call(i, c), c.send(null == r ? null : r), i
		}, i.abort = function() {
			return c.abort(), i
		}, Go.rebind(i, o, "on"), null == r ? i : i.get(Lt(r))
	}

	function Lt(n) {
		return 1 === n.length ? function(t, e) {
			n(null == t ? e : null)
		} : n
	}

	function Tt() {
		var n = qt(),
			t = zt() - n;
		t > 24 ? (isFinite(t) && (clearTimeout(Qa), Qa = setTimeout(Tt, t)), Ka = 0) : (Ka = 1, tc(Tt))
	}

	function qt() {
		var n = Date.now();
		for (nc = Wa; nc;) n >= nc.t && (nc.f = nc.c(n - nc.t)), nc = nc.n;
		return n
	}

	function zt() {
		for (var n, t = Wa, e = 1 / 0; t;) t.f ? t = n ? n.n = t.n : Wa = t.n : (t.t < e && (e = t.t), t = (n = t)
			.n);
		return Ga = n, e
	}

	function Rt(n, t) {
		return t - (n ? Math.ceil(Math.log(n) / Math.LN10) : 1)
	}

	function Dt(n, t) {
		var e = Math.pow(10, 3 * fa(8 - t));
		return {
			scale: t > 8 ? function(n) {
				return n / e
			} : function(n) {
				return n * e
			},
			symbol: n
		}
	}

	function Pt(n) {
		var t = n.decimal,
			e = n.thousands,
			r = n.grouping,
			u = n.currency,
			i = r ? function(n) {
				for (var t = n.length, u = [], i = 0, o = r[0]; t > 0 && o > 0;) u.push(n.substring(t -= o, t + o)), o = r[i = (i + 1) % r.length];
				return u.reverse()
					.join(e)
		} : At;
		return function(n) {
			var e = rc.exec(n),
				r = e[1] || " ",
				o = e[2] || ">",
				a = e[3] || "",
				c = e[4] || "",
				s = e[5],
				l = +e[6],
				f = e[7],
				h = e[8],
				g = e[9],
				p = 1,
				v = "",
				d = "",
				m = !1;
			switch (h && (h = +h.substring(1)), (s || "0" === r && "=" === o) && (s = r = "0", o = "=", f && (l -= Math.floor((l - 1) / 4))), g) {
				case "n":
					f = !0, g = "g";
					break;
				case "%":
					p = 100, d = "%", g = "f";
					break;
				case "p":
					p = 100, d = "%", g = "r";
					break;
				case "b":
				case "o":
				case "x":
				case "X":
					"#" === c && (v = "0" + g.toLowerCase());
				case "c":
				case "d":
					m = !0, h = 0;
					break;
				case "s":
					p = -1, g = "r"
			}
			"$" === c && (v = u[0], d = u[1]), "r" != g || h || (g = "g"), null != h && ("g" == g ? h = Math.max(1, Math.min(21, h)) : ("e" == g || "f" == g) && (h = Math.max(0, Math.min(20, h)))), g = uc.get(g) || Ut;
			var y = s && f;
			return function(n) {
				var e = d;
				if (m && n % 1) return "";
				var u = 0 > n || 0 === n && 0 > 1 / n ? (n = -n, "-") : a;
				if (0 > p) {
					var c = Go.formatPrefix(n, h);
					n = c.scale(n), e = c.symbol + d
				} else n *= p;
				n = g(n, h);
				var x = n.lastIndexOf("."),
					M = 0 > x ? n : n.substring(0, x),
					_ = 0 > x ? "" : t + n.substring(x + 1);
				!s && f && (M = i(M));
				var b = v.length + M.length + _.length + (y ? 0 : u.length),
					w = l > b ? new Array(b = l - b + 1)
						.join(r) : "";
				return y && (M = i(w + M)), u += v, n = M + _, ("<" === o ? u + n + w : ">" === o ? w + u + n : "^" === o ? w.substring(0, b >>= 1) + u + n + w.substring(b) : u + (y ? n : w + n)) + e
			}
		}
	}

	function Ut(n) {
		return n + ""
	}

	function jt() {
		this._ = new Date(arguments.length > 1 ? Date.UTC.apply(this, arguments) : arguments[0])
	}

	function Ht(n, t, e) {
		function r(t) {
			var e = n(t),
				r = i(e, 1);
			return r - t > t - e ? e : r
		}

		function u(e) {
			return t(e = n(new oc(e - 1)), 1), e
		}

		function i(n, e) {
			return t(n = new oc(+n), e), n
		}

		function o(n, r, i) {
			var o = u(n),
				a = [];
			if (i > 1)
				for (; r > o;) e(o) % i || a.push(new Date(+o)), t(o, 1);
			else
				for (; r > o;) a.push(new Date(+o)), t(o, 1);
			return a
		}

		function a(n, t, e) {
			try {
				oc = jt;
				var r = new jt;
				return r._ = n, o(r, t, e)
			} finally {
				oc = Date
			}
		}
		n.floor = n, n.round = r, n.ceil = u, n.offset = i, n.range = o;
		var c = n.utc = Ft(n);
		return c.floor = c, c.round = Ft(r), c.ceil = Ft(u), c.offset = Ft(i), c.range = a, n
	}

	function Ft(n) {
		return function(t, e) {
			try {
				oc = jt;
				var r = new jt;
				return r._ = t, n(r, e)
					._
			} finally {
				oc = Date
			}
		}
	}

	function Ot(n) {
		function t(n) {
			function t(t) {
				for (var e, u, i, o = [], a = -1, c = 0; ++a < r;) 37 === n.charCodeAt(a) && (o.push(n.substring(c, a)), null != (u = cc[e = n.charAt(++a)]) && (e = n.charAt(++a)), (i = C[e]) && (e = i(t, null == u ? "e" === e ? " " : "0" : u)), o.push(e), c = a + 1);
				return o.push(n.substring(c, a)), o.join("")
			}
			var r = n.length;
			return t.parse = function(t) {
				var r = {
					y: 1900,
					m: 0,
					d: 1,
					H: 0,
					M: 0,
					S: 0,
					L: 0,
					Z: null
				}, u = e(r, n, t, 0);
				if (u != t.length) return null;
				"p" in r && (r.H = r.H % 12 + 12 * r.p);
				var i = null != r.Z && oc !== jt,
					o = new(i ? jt : oc);
				return "j" in r ? o.setFullYear(r.y, 0, r.j) : "w" in r && ("W" in r || "U" in r) ? (o.setFullYear(r.y, 0, 1), o.setFullYear(r.y, 0, "W" in r ? (r.w + 6) % 7 + 7 * r.W - (o.getDay() + 5) % 7 : r.w + 7 * r.U - (o.getDay() + 6) % 7)) : o.setFullYear(r.y, r.m, r.d), o.setHours(r.H + Math.floor(r.Z / 100), r.M + r.Z % 100, r.S, r.L), i ? o._ : o
			}, t.toString = function() {
				return n
			}, t
		}

		function e(n, t, e, r) {
			for (var u, i, o, a = 0, c = t.length, s = e.length; c > a;) {
				if (r >= s) return -1;
				if (u = t.charCodeAt(a++), 37 === u) {
					if (o = t.charAt(a++), i = N[o in cc ? t.charAt(a++) : o], !i || (r = i(n, e, r)) < 0) return -1
				} else if (u != e.charCodeAt(r++)) return -1
			}
			return r
		}

		function r(n, t, e) {
			b.lastIndex = 0;
			var r = b.exec(t.substring(e));
			return r ? (n.w = w.get(r[0].toLowerCase()), e + r[0].length) : -1
		}

		function u(n, t, e) {
			M.lastIndex = 0;
			var r = M.exec(t.substring(e));
			return r ? (n.w = _.get(r[0].toLowerCase()), e + r[0].length) : -1
		}

		function i(n, t, e) {
			E.lastIndex = 0;
			var r = E.exec(t.substring(e));
			return r ? (n.m = A.get(r[0].toLowerCase()), e + r[0].length) : -1
		}

		function o(n, t, e) {
			S.lastIndex = 0;
			var r = S.exec(t.substring(e));
			return r ? (n.m = k.get(r[0].toLowerCase()), e + r[0].length) : -1
		}

		function a(n, t, r) {
			return e(n, C.c.toString(), t, r)
		}

		function c(n, t, r) {
			return e(n, C.x.toString(), t, r)
		}

		function s(n, t, r) {
			return e(n, C.X.toString(), t, r)
		}

		function l(n, t, e) {
			var r = x.get(t.substring(e, e += 2)
				.toLowerCase());
			return null == r ? -1 : (n.p = r, e)
		}
		var f = n.dateTime,
			h = n.date,
			g = n.time,
			p = n.periods,
			v = n.days,
			d = n.shortDays,
			m = n.months,
			y = n.shortMonths;
		t.utc = function(n) {
			function e(n) {
				try {
					oc = jt;
					var t = new oc;
					return t._ = n, r(t)
				} finally {
					oc = Date
				}
			}
			var r = t(n);
			return e.parse = function(n) {
				try {
					oc = jt;
					var t = r.parse(n);
					return t && t._
				} finally {
					oc = Date
				}
			}, e.toString = r.toString, e
		}, t.multi = t.utc.multi = ae;
		var x = Go.map(),
			M = Yt(v),
			_ = Zt(v),
			b = Yt(d),
			w = Zt(d),
			S = Yt(m),
			k = Zt(m),
			E = Yt(y),
			A = Zt(y);
		p.forEach(function(n, t) {
			x.set(n.toLowerCase(), t)
		});
		var C = {
			a: function(n) {
				return d[n.getDay()]
			},
			A: function(n) {
				return v[n.getDay()]
			},
			b: function(n) {
				return y[n.getMonth()]
			},
			B: function(n) {
				return m[n.getMonth()]
			},
			c: t(f),
			d: function(n, t) {
				return It(n.getDate(), t, 2)
			},
			e: function(n, t) {
				return It(n.getDate(), t, 2)
			},
			H: function(n, t) {
				return It(n.getHours(), t, 2)
			},
			I: function(n, t) {
				return It(n.getHours() % 12 || 12, t, 2)
			},
			j: function(n, t) {
				return It(1 + ic.dayOfYear(n), t, 3)
			},
			L: function(n, t) {
				return It(n.getMilliseconds(), t, 3)
			},
			m: function(n, t) {
				return It(n.getMonth() + 1, t, 2)
			},
			M: function(n, t) {
				return It(n.getMinutes(), t, 2)
			},
			p: function(n) {
				return p[+(n.getHours() >= 12)]
			},
			S: function(n, t) {
				return It(n.getSeconds(), t, 2)
			},
			U: function(n, t) {
				return It(ic.sundayOfYear(n), t, 2)
			},
			w: function(n) {
				return n.getDay()
			},
			W: function(n, t) {
				return It(ic.mondayOfYear(n), t, 2)
			},
			x: t(h),
			X: t(g),
			y: function(n, t) {
				return It(n.getFullYear() % 100, t, 2)
			},
			Y: function(n, t) {
				return It(n.getFullYear() % 1e4, t, 4)
			},
			Z: ie,
			"%": function() {
				return "%"
			}
		}, N = {
				a: r,
				A: u,
				b: i,
				B: o,
				c: a,
				d: Qt,
				e: Qt,
				H: te,
				I: te,
				j: ne,
				L: ue,
				m: Kt,
				M: ee,
				p: l,
				S: re,
				U: $t,
				w: Vt,
				W: Xt,
				x: c,
				X: s,
				y: Jt,
				Y: Bt,
				Z: Wt,
				"%": oe
			};
		return t
	}

	function It(n, t, e) {
		var r = 0 > n ? "-" : "",
			u = (r ? -n : n) + "",
			i = u.length;
		return r + (e > i ? new Array(e - i + 1)
			.join(t) + u : u)
	}

	function Yt(n) {
		return new RegExp("^(?:" + n.map(Go.requote)
			.join("|") + ")", "i")
	}

	function Zt(n) {
		for (var t = new o, e = -1, r = n.length; ++e < r;) t.set(n[e].toLowerCase(), e);
		return t
	}

	function Vt(n, t, e) {
		sc.lastIndex = 0;
		var r = sc.exec(t.substring(e, e + 1));
		return r ? (n.w = +r[0], e + r[0].length) : -1
	}

	function $t(n, t, e) {
		sc.lastIndex = 0;
		var r = sc.exec(t.substring(e));
		return r ? (n.U = +r[0], e + r[0].length) : -1
	}

	function Xt(n, t, e) {
		sc.lastIndex = 0;
		var r = sc.exec(t.substring(e));
		return r ? (n.W = +r[0], e + r[0].length) : -1
	}

	function Bt(n, t, e) {
		sc.lastIndex = 0;
		var r = sc.exec(t.substring(e, e + 4));
		return r ? (n.y = +r[0], e + r[0].length) : -1
	}

	function Jt(n, t, e) {
		sc.lastIndex = 0;
		var r = sc.exec(t.substring(e, e + 2));
		return r ? (n.y = Gt(+r[0]), e + r[0].length) : -1
	}

	function Wt(n, t, e) {
		return /^[+-]\d{4}$/.test(t = t.substring(e, e + 5)) ? (n.Z = -t, e + 5) : -1
	}

	function Gt(n) {
		return n + (n > 68 ? 1900 : 2e3)
	}

	function Kt(n, t, e) {
		sc.lastIndex = 0;
		var r = sc.exec(t.substring(e, e + 2));
		return r ? (n.m = r[0] - 1, e + r[0].length) : -1
	}

	function Qt(n, t, e) {
		sc.lastIndex = 0;
		var r = sc.exec(t.substring(e, e + 2));
		return r ? (n.d = +r[0], e + r[0].length) : -1
	}

	function ne(n, t, e) {
		sc.lastIndex = 0;
		var r = sc.exec(t.substring(e, e + 3));
		return r ? (n.j = +r[0], e + r[0].length) : -1
	}

	function te(n, t, e) {
		sc.lastIndex = 0;
		var r = sc.exec(t.substring(e, e + 2));
		return r ? (n.H = +r[0], e + r[0].length) : -1
	}

	function ee(n, t, e) {
		sc.lastIndex = 0;
		var r = sc.exec(t.substring(e, e + 2));
		return r ? (n.M = +r[0], e + r[0].length) : -1
	}

	function re(n, t, e) {
		sc.lastIndex = 0;
		var r = sc.exec(t.substring(e, e + 2));
		return r ? (n.S = +r[0], e + r[0].length) : -1
	}

	function ue(n, t, e) {
		sc.lastIndex = 0;
		var r = sc.exec(t.substring(e, e + 3));
		return r ? (n.L = +r[0], e + r[0].length) : -1
	}

	function ie(n) {
		var t = n.getTimezoneOffset(),
			e = t > 0 ? "-" : "+",
			r = ~~ (fa(t) / 60),
			u = fa(t) % 60;
		return e + It(r, "0", 2) + It(u, "0", 2)
	}

	function oe(n, t, e) {
		lc.lastIndex = 0;
		var r = lc.exec(t.substring(e, e + 1));
		return r ? e + r[0].length : -1
	}

	function ae(n) {
		for (var t = n.length, e = -1; ++e < t;) n[e][0] = this(n[e][0]);
		return function(t) {
			for (var e = 0, r = n[e]; !r[1](t);) r = n[++e];
			return r[0](t)
		}
	}

	function ce() {}

	function se(n, t, e) {
		var r = e.s = n + t,
			u = r - n,
			i = r - u;
		e.t = n - i + (t - u)
	}

	function le(n, t) {
		n && pc.hasOwnProperty(n.type) && pc[n.type](n, t)
	}

	function fe(n, t, e) {
		var r, u = -1,
			i = n.length - e;
		for (t.lineStart(); ++u < i;) r = n[u], t.point(r[0], r[1], r[2]);
		t.lineEnd()
	}

	function he(n, t) {
		var e = -1,
			r = n.length;
		for (t.polygonStart(); ++e < r;) fe(n[e], t, 1);
		t.polygonEnd()
	}

	function ge() {
		function n(n, t) {
			n *= za, t = t * za / 2 + Ca / 4;
			var e = n - r,
				o = e >= 0 ? 1 : -1,
				a = o * e,
				c = Math.cos(t),
				s = Math.sin(t),
				l = i * s,
				f = u * c + l * Math.cos(a),
				h = l * o * Math.sin(a);
			dc.add(Math.atan2(h, f)), r = n, u = c, i = s
		}
		var t, e, r, u, i;
		mc.point = function(o, a) {
			mc.point = n, r = (t = o) * za, u = Math.cos(a = (e = a) * za / 2 + Ca / 4), i = Math.sin(a)
		}, mc.lineEnd = function() {
			n(t, e)
		}
	}

	function pe(n) {
		var t = n[0],
			e = n[1],
			r = Math.cos(e);
		return [r * Math.cos(t), r * Math.sin(t), Math.sin(e)]
	}

	function ve(n, t) {
		return n[0] * t[0] + n[1] * t[1] + n[2] * t[2]
	}

	function de(n, t) {
		return [n[1] * t[2] - n[2] * t[1], n[2] * t[0] - n[0] * t[2], n[0] * t[1] - n[1] * t[0]]
	}

	function me(n, t) {
		n[0] += t[0], n[1] += t[1], n[2] += t[2]
	}

	function ye(n, t) {
		return [n[0] * t, n[1] * t, n[2] * t]
	}

	function xe(n) {
		var t = Math.sqrt(n[0] * n[0] + n[1] * n[1] + n[2] * n[2]);
		n[0] /= t, n[1] /= t, n[2] /= t
	}

	function Me(n) {
		return [Math.atan2(n[1], n[0]), G(n[2])]
	}

	function _e(n, t) {
		return fa(n[0] - t[0]) < Ta && fa(n[1] - t[1]) < Ta
	}

	function be(n, t) {
		n *= za;
		var e = Math.cos(t *= za);
		we(e * Math.cos(n), e * Math.sin(n), Math.sin(t))
	}

	function we(n, t, e) {
		++yc, Mc += (n - Mc) / yc, _c += (t - _c) / yc, bc += (e - bc) / yc
	}

	function Se() {
		function n(n, u) {
			n *= za;
			var i = Math.cos(u *= za),
				o = i * Math.cos(n),
				a = i * Math.sin(n),
				c = Math.sin(u),
				s = Math.atan2(Math.sqrt((s = e * c - r * a) * s + (s = r * o - t * c) * s + (s = t * a - e * o) * s), t * o + e * a + r * c);
			xc += s, wc += s * (t + (t = o)), Sc += s * (e + (e = a)), kc += s * (r + (r = c)), we(t, e, r)
		}
		var t, e, r;
		Nc.point = function(u, i) {
			u *= za;
			var o = Math.cos(i *= za);
			t = o * Math.cos(u), e = o * Math.sin(u), r = Math.sin(i), Nc.point = n, we(t, e, r)
		}
	}

	function ke() {
		Nc.point = be
	}

	function Ee() {
		function n(n, t) {
			n *= za;
			var e = Math.cos(t *= za),
				o = e * Math.cos(n),
				a = e * Math.sin(n),
				c = Math.sin(t),
				s = u * c - i * a,
				l = i * o - r * c,
				f = r * a - u * o,
				h = Math.sqrt(s * s + l * l + f * f),
				g = r * o + u * a + i * c,
				p = h && -W(g) / h,
				v = Math.atan2(h, g);
			Ec += p * s, Ac += p * l, Cc += p * f, xc += v, wc += v * (r + (r = o)), Sc += v * (u + (u = a)), kc += v * (i + (i = c)), we(r, u, i)
		}
		var t, e, r, u, i;
		Nc.point = function(o, a) {
			t = o, e = a, Nc.point = n, o *= za;
			var c = Math.cos(a *= za);
			r = c * Math.cos(o), u = c * Math.sin(o), i = Math.sin(a), we(r, u, i)
		}, Nc.lineEnd = function() {
			n(t, e), Nc.lineEnd = ke, Nc.point = be
		}
	}

	function Ae() {
		return !0
	}

	function Ce(n, t, e, r, u) {
		var i = [],
			o = [];
		if (n.forEach(function(n) {
			if (!((t = n.length - 1) <= 0)) {
				var t, e = n[0],
					r = n[t];
				if (_e(e, r)) {
					u.lineStart();
					for (var a = 0; t > a; ++a) u.point((e = n[a])[0], e[1]);
					return u.lineEnd(), void 0
				}
				var c = new Le(e, n, null, !0),
					s = new Le(e, null, c, !1);
				c.o = s, i.push(c), o.push(s), c = new Le(r, n, null, !1), s = new Le(r, null, c, !0), c.o = s, i.push(c), o.push(s)
			}
		}), o.sort(t), Ne(i), Ne(o), i.length) {
			for (var a = 0, c = e, s = o.length; s > a; ++a) o[a].e = c = !c;
			for (var l, f, h = i[0];;) {
				for (var g = h, p = !0; g.v;)
					if ((g = g.n) === h) return;
				l = g.z, u.lineStart();
				do {
					if (g.v = g.o.v = !0, g.e) {
						if (p)
							for (var a = 0, s = l.length; s > a; ++a) u.point((f = l[a])[0], f[1]);
						else r(g.x, g.n.x, 1, u);
						g = g.n
					} else {
						if (p) {
							l = g.p.z;
							for (var a = l.length - 1; a >= 0; --a) u.point((f = l[a])[0], f[1])
						} else r(g.x, g.p.x, -1, u);
						g = g.p
					}
					g = g.o, l = g.z, p = !p
				} while (!g.v);
				u.lineEnd()
			}
		}
	}

	function Ne(n) {
		if (t = n.length) {
			for (var t, e, r = 0, u = n[0]; ++r < t;) u.n = e = n[r], e.p = u, u = e;
			u.n = e = n[0], e.p = u
		}
	}

	function Le(n, t, e, r) {
		this.x = n, this.z = t, this.o = e, this.e = r, this.v = !1, this.n = this.p = null
	}

	function Te(n, t, e, r) {
		return function(u, i) {
			function o(t, e) {
				var r = u(t, e);
				n(t = r[0], e = r[1]) && i.point(t, e)
			}

			function a(n, t) {
				var e = u(n, t);
				d.point(e[0], e[1])
			}

			function c() {
				y.point = a, d.lineStart()
			}

			function s() {
				y.point = o, d.lineEnd()
			}

			function l(n, t) {
				v.push([n, t]);
				var e = u(n, t);
				M.point(e[0], e[1])
			}

			function f() {
				M.lineStart(), v = []
			}

			function h() {
				l(v[0][0], v[0][1]), M.lineEnd();
				var n, t = M.clean(),
					e = x.buffer(),
					r = e.length;
				if (v.pop(), p.push(v), v = null, r)
					if (1 & t) {
						n = e[0];
						var u, r = n.length - 1,
							o = -1;
						if (r > 0) {
							for (_ || (i.polygonStart(), _ = !0), i.lineStart(); ++o < r;) i.point((u = n[o])[0], u[1]);
							i.lineEnd()
						}
					} else r > 1 && 2 & t && e.push(e.pop()
						.concat(e.shift())), g.push(e.filter(qe))
			}
			var g, p, v, d = t(i),
				m = u.invert(r[0], r[1]),
				y = {
					point: o,
					lineStart: c,
					lineEnd: s,
					polygonStart: function() {
						y.point = l, y.lineStart = f, y.lineEnd = h, g = [], p = []
					},
					polygonEnd: function() {
						y.point = o, y.lineStart = c, y.lineEnd = s, g = Go.merge(g);
						var n = De(m, p);
						g.length ? (_ || (i.polygonStart(), _ = !0), Ce(g, Re, n, e, i)) : n && (_ || (i.polygonStart(), _ = !0), i.lineStart(), e(null, null, 1, i), i.lineEnd()), _ && (i.polygonEnd(), _ = !1), g = p = null
					},
					sphere: function() {
						i.polygonStart(), i.lineStart(), e(null, null, 1, i), i.lineEnd(), i.polygonEnd()
					}
				}, x = ze(),
				M = t(x),
				_ = !1;
			return y
		}
	}

	function qe(n) {
		return n.length > 1
	}

	function ze() {
		var n, t = [];
		return {
			lineStart: function() {
				t.push(n = [])
			},
			point: function(t, e) {
				n.push([t, e])
			},
			lineEnd: v,
			buffer: function() {
				var e = t;
				return t = [], n = null, e
			},
			rejoin: function() {
				t.length > 1 && t.push(t.pop()
					.concat(t.shift()))
			}
		}
	}

	function Re(n, t) {
		return ((n = n.x)[0] < 0 ? n[1] - La - Ta : La - n[1]) - ((t = t.x)[0] < 0 ? t[1] - La - Ta : La - t[1])
	}

	function De(n, t) {
		var e = n[0],
			r = n[1],
			u = [Math.sin(e), -Math.cos(e), 0],
			i = 0,
			o = 0;
		dc.reset();
		for (var a = 0, c = t.length; c > a; ++a) {
			var s = t[a],
				l = s.length;
			if (l)
				for (var f = s[0], h = f[0], g = f[1] / 2 + Ca / 4, p = Math.sin(g), v = Math.cos(g), d = 1;;) {
					d === l && (d = 0), n = s[d];
					var m = n[0],
						y = n[1] / 2 + Ca / 4,
						x = Math.sin(y),
						M = Math.cos(y),
						_ = m - h,
						b = _ >= 0 ? 1 : -1,
						w = b * _,
						S = w > Ca,
						k = p * x;
					if (dc.add(Math.atan2(k * b * Math.sin(w), v * M + k * Math.cos(w))), i += S ? _ + b * Na : _, S ^ h >= e ^ m >= e) {
						var E = de(pe(f), pe(n));
						xe(E);
						var A = de(u, E);
						xe(A);
						var C = (S ^ _ >= 0 ? -1 : 1) * G(A[2]);
						(r > C || r === C && (E[0] || E[1])) && (o += S ^ _ >= 0 ? 1 : -1)
					}
					if (!d++) break;
					h = m, p = x, v = M, f = n
				}
		}
		return (-Ta > i || Ta > i && 0 > dc) ^ 1 & o
	}

	function Pe(n) {
		var t, e = 0 / 0,
			r = 0 / 0,
			u = 0 / 0;
		return {
			lineStart: function() {
				n.lineStart(), t = 1
			},
			point: function(i, o) {
				var a = i > 0 ? Ca : -Ca,
					c = fa(i - e);
				fa(c - Ca) < Ta ? (n.point(e, r = (r + o) / 2 > 0 ? La : -La), n.point(u, r), n.lineEnd(), n.lineStart(), n.point(a, r), n.point(i, r), t = 0) : u !== a && c >= Ca && (fa(e - u) < Ta && (e -= u * Ta), fa(i - a) < Ta && (i -= a * Ta), r = Ue(e, r, i, o), n.point(u, r), n.lineEnd(), n.lineStart(), n.point(a, r), t = 0), n.point(e = i, r = o), u = a
			},
			lineEnd: function() {
				n.lineEnd(), e = r = 0 / 0
			},
			clean: function() {
				return 2 - t
			}
		}
	}

	function Ue(n, t, e, r) {
		var u, i, o = Math.sin(n - e);
		return fa(o) > Ta ? Math.atan((Math.sin(t) * (i = Math.cos(r)) * Math.sin(e) - Math.sin(r) * (u = Math.cos(t)) * Math.sin(n)) / (u * i * o)) : (t + r) / 2
	}

	function je(n, t, e, r) {
		var u;
		if (null == n) u = e * La, r.point(-Ca, u), r.point(0, u), r.point(Ca, u), r.point(Ca, 0), r.point(Ca, -u), r.point(0, -u), r.point(-Ca, -u), r.point(-Ca, 0), r.point(-Ca, u);
		else if (fa(n[0] - t[0]) > Ta) {
			var i = n[0] < t[0] ? Ca : -Ca;
			u = e * i / 2, r.point(-i, u), r.point(0, u), r.point(i, u)
		} else r.point(t[0], t[1])
	}

	function He(n) {
		function t(n, t) {
			return Math.cos(n) * Math.cos(t) > i
		}

		function e(n) {
			var e, i, c, s, l;
			return {
				lineStart: function() {
					s = c = !1, l = 1
				},
				point: function(f, h) {
					var g, p = [f, h],
						v = t(f, h),
						d = o ? v ? 0 : u(f, h) : v ? u(f + (0 > f ? Ca : -Ca), h) : 0;
					if (!e && (s = c = v) && n.lineStart(), v !== c && (g = r(e, p), (_e(e, g) || _e(p, g)) && (p[0] += Ta, p[1] += Ta, v = t(p[0], p[1]))), v !== c) l = 0, v ? (n.lineStart(), g = r(p, e), n.point(g[0], g[1])) : (g = r(e, p), n.point(g[0], g[1]), n.lineEnd()), e = g;
					else if (a && e && o ^ v) {
						var m;
						d & i || !(m = r(p, e, !0)) || (l = 0, o ? (n.lineStart(), n.point(m[0][0], m[0][1]), n.point(m[1][0], m[1][1]), n.lineEnd()) : (n.point(m[1][0], m[1][1]), n.lineEnd(), n.lineStart(), n.point(m[0][0], m[0][1])))
					}!v || e && _e(e, p) || n.point(p[0], p[1]), e = p, c = v, i = d
				},
				lineEnd: function() {
					c && n.lineEnd(), e = null
				},
				clean: function() {
					return l | (s && c) << 1
				}
			}
		}

		function r(n, t, e) {
			var r = pe(n),
				u = pe(t),
				o = [1, 0, 0],
				a = de(r, u),
				c = ve(a, a),
				s = a[0],
				l = c - s * s;
			if (!l) return !e && n;
			var f = i * c / l,
				h = -i * s / l,
				g = de(o, a),
				p = ye(o, f),
				v = ye(a, h);
			me(p, v);
			var d = g,
				m = ve(p, d),
				y = ve(d, d),
				x = m * m - y * (ve(p, p) - 1);
			if (!(0 > x)) {
				var M = Math.sqrt(x),
					_ = ye(d, (-m - M) / y);
				if (me(_, p), _ = Me(_), !e) return _;
				var b, w = n[0],
					S = t[0],
					k = n[1],
					E = t[1];
				w > S && (b = w, w = S, S = b);
				var A = S - w,
					C = fa(A - Ca) < Ta,
					N = C || Ta > A;
				if (!C && k > E && (b = k, k = E, E = b), N ? C ? k + E > 0 ^ _[1] < (fa(_[0] - w) < Ta ? k : E) : k <= _[1] && _[1] <= E : A > Ca ^ (w <= _[0] && _[0] <= S)) {
					var L = ye(d, (-m + M) / y);
					return me(L, p), [_, Me(L)]
				}
			}
		}

		function u(t, e) {
			var r = o ? n : Ca - n,
				u = 0;
			return -r > t ? u |= 1 : t > r && (u |= 2), -r > e ? u |= 4 : e > r && (u |= 8), u
		}
		var i = Math.cos(n),
			o = i > 0,
			a = fa(i) > Ta,
			c = gr(n, 6 * za);
		return Te(t, e, c, o ? [0, -n] : [-Ca, n - Ca])
	}

	function Fe(n, t, e, r) {
		return function(u) {
			var i, o = u.a,
				a = u.b,
				c = o.x,
				s = o.y,
				l = a.x,
				f = a.y,
				h = 0,
				g = 1,
				p = l - c,
				v = f - s;
			if (i = n - c, p || !(i > 0)) {
				if (i /= p, 0 > p) {
					if (h > i) return;
					g > i && (g = i)
				} else if (p > 0) {
					if (i > g) return;
					i > h && (h = i)
				}
				if (i = e - c, p || !(0 > i)) {
					if (i /= p, 0 > p) {
						if (i > g) return;
						i > h && (h = i)
					} else if (p > 0) {
						if (h > i) return;
						g > i && (g = i)
					}
					if (i = t - s, v || !(i > 0)) {
						if (i /= v, 0 > v) {
							if (h > i) return;
							g > i && (g = i)
						} else if (v > 0) {
							if (i > g) return;
							i > h && (h = i)
						}
						if (i = r - s, v || !(0 > i)) {
							if (i /= v, 0 > v) {
								if (i > g) return;
								i > h && (h = i)
							} else if (v > 0) {
								if (h > i) return;
								g > i && (g = i)
							}
							return h > 0 && (u.a = {
								x: c + h * p,
								y: s + h * v
							}), 1 > g && (u.b = {
								x: c + g * p,
								y: s + g * v
							}), u
						}
					}
				}
			}
		}
	}

	function Oe(n, t, e, r) {
		function u(r, u) {
			return fa(r[0] - n) < Ta ? u > 0 ? 0 : 3 : fa(r[0] - e) < Ta ? u > 0 ? 2 : 1 : fa(r[1] - t) < Ta ? u > 0 ? 1 : 0 : u > 0 ? 3 : 2
		}

		function i(n, t) {
			return o(n.x, t.x)
		}

		function o(n, t) {
			var e = u(n, 1),
				r = u(t, 1);
			return e !== r ? e - r : 0 === e ? t[1] - n[1] : 1 === e ? n[0] - t[0] : 2 === e ? n[1] - t[1] : t[0] - n[0]
		}
		return function(a) {
			function c(n) {
				for (var t = 0, e = d.length, r = n[1], u = 0; e > u; ++u)
					for (var i, o = 1, a = d[u], c = a.length, s = a[0]; c > o; ++o) i = a[o], s[1] <= r ? i[1] > r && J(s, i, n) > 0 && ++t : i[1] <= r && J(s, i, n) < 0 && --t, s = i;
				return 0 !== t
			}

			function s(i, a, c, s) {
				var l = 0,
					f = 0;
				if (null == i || (l = u(i, c)) !== (f = u(a, c)) || o(i, a) < 0 ^ c > 0) {
					do s.point(0 === l || 3 === l ? n : e, l > 1 ? r : t); while ((l = (l + c + 4) % 4) !== f)
				} else s.point(a[0], a[1])
			}

			function l(u, i) {
				return u >= n && e >= u && i >= t && r >= i
			}

			function f(n, t) {
				l(n, t) && a.point(n, t)
			}

			function h() {
				N.point = p, d && d.push(m = []), S = !0, w = !1, _ = b = 0 / 0
			}

			function g() {
				v && (p(y, x), M && w && A.rejoin(), v.push(A.buffer())), N.point = f, w && a.lineEnd()
			}

			function p(n, t) {
				n = Math.max(-Tc, Math.min(Tc, n)), t = Math.max(-Tc, Math.min(Tc, t));
				var e = l(n, t);
				if (d && m.push([n, t]), S) y = n, x = t, M = e, S = !1, e && (a.lineStart(), a.point(n, t));
				else if (e && w) a.point(n, t);
				else {
					var r = {
						a: {
							x: _,
							y: b
						},
						b: {
							x: n,
							y: t
						}
					};
					C(r) ? (w || (a.lineStart(), a.point(r.a.x, r.a.y)), a.point(r.b.x, r.b.y), e || a.lineEnd(), k = !1) : e && (a.lineStart(), a.point(n, t), k = !1)
				}
				_ = n, b = t, w = e
			}
			var v, d, m, y, x, M, _, b, w, S, k, E = a,
				A = ze(),
				C = Fe(n, t, e, r),
				N = {
					point: f,
					lineStart: h,
					lineEnd: g,
					polygonStart: function() {
						a = A, v = [], d = [], k = !0
					},
					polygonEnd: function() {
						a = E, v = Go.merge(v);
						var t = c([n, r]),
							e = k && t,
							u = v.length;
						(e || u) && (a.polygonStart(), e && (a.lineStart(), s(null, null, 1, a), a.lineEnd()), u && Ce(v, i, t, s, a), a.polygonEnd()), v = d = m = null
					}
				};
			return N
		}
	}

	function Ie(n, t) {
		function e(e, r) {
			return e = n(e, r), t(e[0], e[1])
		}
		return n.invert && t.invert && (e.invert = function(e, r) {
			return e = t.invert(e, r), e && n.invert(e[0], e[1])
		}), e
	}

	function Ye(n) {
		var t = 0,
			e = Ca / 3,
			r = ir(n),
			u = r(t, e);
		return u.parallels = function(n) {
			return arguments.length ? r(t = n[0] * Ca / 180, e = n[1] * Ca / 180) : [180 * (t / Ca), 180 * (e / Ca)]
		}, u
	}

	function Ze(n, t) {
		function e(n, t) {
			var e = Math.sqrt(i - 2 * u * Math.sin(t)) / u;
			return [e * Math.sin(n *= u), o - e * Math.cos(n)]
		}
		var r = Math.sin(n),
			u = (r + Math.sin(t)) / 2,
			i = 1 + r * (2 * u - r),
			o = Math.sqrt(i) / u;
		return e.invert = function(n, t) {
			var e = o - t;
			return [Math.atan2(n, e) / u, G((i - (n * n + e * e) * u * u) / (2 * u))]
		}, e
	}

	function Ve() {
		function n(n, t) {
			zc += u * n - r * t, r = n, u = t
		}
		var t, e, r, u;
		jc.point = function(i, o) {
			jc.point = n, t = r = i, e = u = o
		}, jc.lineEnd = function() {
			n(t, e)
		}
	}

	function $e(n, t) {
		Rc > n && (Rc = n), n > Pc && (Pc = n), Dc > t && (Dc = t), t > Uc && (Uc = t)
	}

	function Xe() {
		function n(n, t) {
			o.push("M", n, ",", t, i)
		}

		function t(n, t) {
			o.push("M", n, ",", t), a.point = e
		}

		function e(n, t) {
			o.push("L", n, ",", t)
		}

		function r() {
			a.point = n
		}

		function u() {
			o.push("Z")
		}
		var i = Be(4.5),
			o = [],
			a = {
				point: n,
				lineStart: function() {
					a.point = t
				},
				lineEnd: r,
				polygonStart: function() {
					a.lineEnd = u
				},
				polygonEnd: function() {
					a.lineEnd = r, a.point = n
				},
				pointRadius: function(n) {
					return i = Be(n), a
				},
				result: function() {
					if (o.length) {
						var n = o.join("");
						return o = [], n
					}
				}
			};
		return a
	}

	function Be(n) {
		return "m0," + n + "a" + n + "," + n + " 0 1,1 0," + -2 * n + "a" + n + "," + n + " 0 1,1 0," + 2 * n + "z"
	}

	function Je(n, t) {
		Mc += n, _c += t, ++bc
	}

	function We() {
		function n(n, r) {
			var u = n - t,
				i = r - e,
				o = Math.sqrt(u * u + i * i);
			wc += o * (t + n) / 2, Sc += o * (e + r) / 2, kc += o, Je(t = n, e = r)
		}
		var t, e;
		Fc.point = function(r, u) {
			Fc.point = n, Je(t = r, e = u)
		}
	}

	function Ge() {
		Fc.point = Je
	}

	function Ke() {
		function n(n, t) {
			var e = n - r,
				i = t - u,
				o = Math.sqrt(e * e + i * i);
			wc += o * (r + n) / 2, Sc += o * (u + t) / 2, kc += o, o = u * n - r * t, Ec += o * (r + n), Ac += o * (u + t), Cc += 3 * o, Je(r = n, u = t)
		}
		var t, e, r, u;
		Fc.point = function(i, o) {
			Fc.point = n, Je(t = r = i, e = u = o)
		}, Fc.lineEnd = function() {
			n(t, e)
		}
	}

	function Qe(n) {
		function t(t, e) {
			n.moveTo(t, e), n.arc(t, e, o, 0, Na)
		}

		function e(t, e) {
			n.moveTo(t, e), a.point = r
		}

		function r(t, e) {
			n.lineTo(t, e)
		}

		function u() {
			a.point = t
		}

		function i() {
			n.closePath()
		}
		var o = 4.5,
			a = {
				point: t,
				lineStart: function() {
					a.point = e
				},
				lineEnd: u,
				polygonStart: function() {
					a.lineEnd = i
				},
				polygonEnd: function() {
					a.lineEnd = u, a.point = t
				},
				pointRadius: function(n) {
					return o = n, a
				},
				result: v
			};
		return a
	}

	function nr(n) {
		function t(n) {
			return (a ? r : e)(n)
		}

		function e(t) {
			return rr(t, function(e, r) {
				e = n(e, r), t.point(e[0], e[1])
			})
		}

		function r(t) {
			function e(e, r) {
				e = n(e, r), t.point(e[0], e[1])
			}

			function r() {
				x = 0 / 0, S.point = i, t.lineStart()
			}

			function i(e, r) {
				var i = pe([e, r]),
					o = n(e, r);
				u(x, M, y, _, b, w, x = o[0], M = o[1], y = e, _ = i[0], b = i[1], w = i[2], a, t), t.point(x, M)
			}

			function o() {
				S.point = e, t.lineEnd()
			}

			function c() {
				r(), S.point = s, S.lineEnd = l
			}

			function s(n, t) {
				i(f = n, h = t), g = x, p = M, v = _, d = b, m = w, S.point = i
			}

			function l() {
				u(x, M, y, _, b, w, g, p, f, v, d, m, a, t), S.lineEnd = o, o()
			}
			var f, h, g, p, v, d, m, y, x, M, _, b, w, S = {
					point: e,
					lineStart: r,
					lineEnd: o,
					polygonStart: function() {
						t.polygonStart(), S.lineStart = c
					},
					polygonEnd: function() {
						t.polygonEnd(), S.lineStart = r
					}
				};
			return S
		}

		function u(t, e, r, a, c, s, l, f, h, g, p, v, d, m) {
			var y = l - t,
				x = f - e,
				M = y * y + x * x;
			if (M > 4 * i && d--) {
				var _ = a + g,
					b = c + p,
					w = s + v,
					S = Math.sqrt(_ * _ + b * b + w * w),
					k = Math.asin(w /= S),
					E = fa(fa(w) - 1) < Ta || fa(r - h) < Ta ? (r + h) / 2 : Math.atan2(b, _),
					A = n(E, k),
					C = A[0],
					N = A[1],
					L = C - t,
					T = N - e,
					q = x * L - y * T;
				(q * q / M > i || fa((y * L + x * T) / M - .5) > .3 || o > a * g + c * p + s * v) && (u(t, e, r, a, c, s, C, N, E, _ /= S, b /= S, w, d, m), m.point(C, N), u(C, N, E, _, b, w, l, f, h, g, p, v, d, m))
			}
		}
		var i = .5,
			o = Math.cos(30 * za),
			a = 16;
		return t.precision = function(n) {
			return arguments.length ? (a = (i = n * n) > 0 && 16, t) : Math.sqrt(i)
		}, t
	}

	function tr(n) {
		var t = nr(function(t, e) {
			return n([t * Ra, e * Ra])
		});
		return function(n) {
			return or(t(n))
		}
	}

	function er(n) {
		this.stream = n
	}

	function rr(n, t) {
		return {
			point: t,
			sphere: function() {
				n.sphere()
			},
			lineStart: function() {
				n.lineStart()
			},
			lineEnd: function() {
				n.lineEnd()
			},
			polygonStart: function() {
				n.polygonStart()
			},
			polygonEnd: function() {
				n.polygonEnd()
			}
		}
	}

	function ur(n) {
		return ir(function() {
			return n
		})()
	}

	function ir(n) {
		function t(n) {
			return n = a(n[0] * za, n[1] * za), [n[0] * h + c, s - n[1] * h]
		}

		function e(n) {
			return n = a.invert((n[0] - c) / h, (s - n[1]) / h), n && [n[0] * Ra, n[1] * Ra]
		}

		function r() {
			a = Ie(o = sr(m, y, x), i);
			var n = i(v, d);
			return c = g - n[0] * h, s = p + n[1] * h, u()
		}

		function u() {
			return l && (l.valid = !1, l = null), t
		}
		var i, o, a, c, s, l, f = nr(function(n, t) {
				return n = i(n, t), [n[0] * h + c, s - n[1] * h]
			}),
			h = 150,
			g = 480,
			p = 250,
			v = 0,
			d = 0,
			m = 0,
			y = 0,
			x = 0,
			M = Lc,
			_ = At,
			b = null,
			w = null;
		return t.stream = function(n) {
			return l && (l.valid = !1), l = or(M(o, f(_(n)))), l.valid = !0, l
		}, t.clipAngle = function(n) {
			return arguments.length ? (M = null == n ? (b = n, Lc) : He((b = +n) * za), u()) : b
		}, t.clipExtent = function(n) {
			return arguments.length ? (w = n, _ = n ? Oe(n[0][0], n[0][1], n[1][0], n[1][1]) : At, u()) : w
		}, t.scale = function(n) {
			return arguments.length ? (h = +n, r()) : h
		}, t.translate = function(n) {
			return arguments.length ? (g = +n[0], p = +n[1], r()) : [g, p]
		}, t.center = function(n) {
			return arguments.length ? (v = n[0] % 360 * za, d = n[1] % 360 * za, r()) : [v * Ra, d * Ra]
		}, t.rotate = function(n) {
			return arguments.length ? (m = n[0] % 360 * za, y = n[1] % 360 * za, x = n.length > 2 ? n[2] % 360 * za : 0, r()) : [m * Ra, y * Ra, x * Ra]
		}, Go.rebind(t, f, "precision"),
		function() {
			return i = n.apply(this, arguments), t.invert = i.invert && e, r()
		}
	}

	function or(n) {
		return rr(n, function(t, e) {
			n.point(t * za, e * za)
		})
	}

	function ar(n, t) {
		return [n, t]
	}

	function cr(n, t) {
		return [n > Ca ? n - Na : -Ca > n ? n + Na : n, t]
	}

	function sr(n, t, e) {
		return n ? t || e ? Ie(fr(n), hr(t, e)) : fr(n) : t || e ? hr(t, e) : cr
	}

	function lr(n) {
		return function(t, e) {
			return t += n, [t > Ca ? t - Na : -Ca > t ? t + Na : t, e]
		}
	}

	function fr(n) {
		var t = lr(n);
		return t.invert = lr(-n), t
	}

	function hr(n, t) {
		function e(n, t) {
			var e = Math.cos(t),
				a = Math.cos(n) * e,
				c = Math.sin(n) * e,
				s = Math.sin(t),
				l = s * r + a * u;
			return [Math.atan2(c * i - l * o, a * r - s * u), G(l * i + c * o)]
		}
		var r = Math.cos(n),
			u = Math.sin(n),
			i = Math.cos(t),
			o = Math.sin(t);
		return e.invert = function(n, t) {
			var e = Math.cos(t),
				a = Math.cos(n) * e,
				c = Math.sin(n) * e,
				s = Math.sin(t),
				l = s * i - c * o;
			return [Math.atan2(c * i + s * o, a * r + l * u), G(l * r - a * u)]
		}, e
	}

	function gr(n, t) {
		var e = Math.cos(n),
			r = Math.sin(n);
		return function(u, i, o, a) {
			var c = o * t;
			null != u ? (u = pr(e, u), i = pr(e, i), (o > 0 ? i > u : u > i) && (u += o * Na)) : (u = n + o * Na, i = n - .5 * c);
			for (var s, l = u; o > 0 ? l > i : i > l; l -= c) a.point((s = Me([e, -r * Math.cos(l), -r * Math.sin(l)]))[0], s[1])
		}
	}

	function pr(n, t) {
		var e = pe(t);
		e[0] -= n, xe(e);
		var r = W(-e[1]);
		return ((-e[2] < 0 ? -r : r) + 2 * Math.PI - Ta) % (2 * Math.PI)
	}

	function vr(n, t, e) {
		var r = Go.range(n, t - Ta, e)
			.concat(t);
		return function(n) {
			return r.map(function(t) {
				return [n, t]
			})
		}
	}

	function dr(n, t, e) {
		var r = Go.range(n, t - Ta, e)
			.concat(t);
		return function(n) {
			return r.map(function(t) {
				return [t, n]
			})
		}
	}

	function mr(n) {
		return n.source
	}

	function yr(n) {
		return n.target
	}

	function xr(n, t, e, r) {
		var u = Math.cos(t),
			i = Math.sin(t),
			o = Math.cos(r),
			a = Math.sin(r),
			c = u * Math.cos(n),
			s = u * Math.sin(n),
			l = o * Math.cos(e),
			f = o * Math.sin(e),
			h = 2 * Math.asin(Math.sqrt(tt(r - t) + u * o * tt(e - n))),
			g = 1 / Math.sin(h),
			p = h ? function(n) {
				var t = Math.sin(n *= h) * g,
					e = Math.sin(h - n) * g,
					r = e * c + t * l,
					u = e * s + t * f,
					o = e * i + t * a;
				return [Math.atan2(u, r) * Ra, Math.atan2(o, Math.sqrt(r * r + u * u)) * Ra]
		} : function() {
			return [n * Ra, t * Ra]
		};
		return p.distance = h, p
	}

	function Mr() {
		function n(n, u) {
			var i = Math.sin(u *= za),
				o = Math.cos(u),
				a = fa((n *= za) - t),
				c = Math.cos(a);
			Oc += Math.atan2(Math.sqrt((a = o * Math.sin(a)) * a + (a = r * i - e * o * c) * a), e * i + r * o * c), t = n, e = i, r = o
		}
		var t, e, r;
		Ic.point = function(u, i) {
			t = u * za, e = Math.sin(i *= za), r = Math.cos(i), Ic.point = n
		}, Ic.lineEnd = function() {
			Ic.point = Ic.lineEnd = v
		}
	}

	function _r(n, t) {
		function e(t, e) {
			var r = Math.cos(t),
				u = Math.cos(e),
				i = n(r * u);
			return [i * u * Math.sin(t), i * Math.sin(e)]
		}
		return e.invert = function(n, e) {
			var r = Math.sqrt(n * n + e * e),
				u = t(r),
				i = Math.sin(u),
				o = Math.cos(u);
			return [Math.atan2(n * i, r * o), Math.asin(r && e * i / r)]
		}, e
	}

	function br(n, t) {
		function e(n, t) {
			o > 0 ? -La + Ta > t && (t = -La + Ta) : t > La - Ta && (t = La - Ta);
			var e = o / Math.pow(u(t), i);
			return [e * Math.sin(i * n), o - e * Math.cos(i * n)]
		}
		var r = Math.cos(n),
			u = function(n) {
				return Math.tan(Ca / 4 + n / 2)
			}, i = n === t ? Math.sin(n) : Math.log(r / Math.cos(t)) / Math.log(u(t) / u(n)),
			o = r * Math.pow(u(n), i) / i;
		return i ? (e.invert = function(n, t) {
			var e = o - t,
				r = B(i) * Math.sqrt(n * n + e * e);
			return [Math.atan2(n, e) / i, 2 * Math.atan(Math.pow(o / r, 1 / i)) - La]
		}, e) : Sr
	}

	function wr(n, t) {
		function e(n, t) {
			var e = i - t;
			return [e * Math.sin(u * n), i - e * Math.cos(u * n)]
		}
		var r = Math.cos(n),
			u = n === t ? Math.sin(n) : (r - Math.cos(t)) / (t - n),
			i = r / u + n;
		return fa(u) < Ta ? ar : (e.invert = function(n, t) {
			var e = i - t;
			return [Math.atan2(n, e) / u, i - B(u) * Math.sqrt(n * n + e * e)]
		}, e)
	}

	function Sr(n, t) {
		return [n, Math.log(Math.tan(Ca / 4 + t / 2))]
	}

	function kr(n) {
		var t, e = ur(n),
			r = e.scale,
			u = e.translate,
			i = e.clipExtent;
		return e.scale = function() {
			var n = r.apply(e, arguments);
			return n === e ? t ? e.clipExtent(null) : e : n
		}, e.translate = function() {
			var n = u.apply(e, arguments);
			return n === e ? t ? e.clipExtent(null) : e : n
		}, e.clipExtent = function(n) {
			var o = i.apply(e, arguments);
			if (o === e) {
				if (t = null == n) {
					var a = Ca * r(),
						c = u();
					i([
						[c[0] - a, c[1] - a],
						[c[0] + a, c[1] + a]
					])
				}
			} else t && (o = null);
			return o
		}, e.clipExtent(null)
	}

	function Er(n, t) {
		return [Math.log(Math.tan(Ca / 4 + t / 2)), -n]
	}

	function Ar(n) {
		return n[0]
	}

	function Cr(n) {
		return n[1]
	}

	function Nr(n) {
		for (var t = n.length, e = [0, 1], r = 2, u = 2; t > u; u++) {
			for (; r > 1 && J(n[e[r - 2]], n[e[r - 1]], n[u]) <= 0;)--r;
			e[r++] = u
		}
		return e.slice(0, r)
	}

	function Lr(n, t) {
		return n[0] - t[0] || n[1] - t[1]
	}

	function Tr(n, t, e) {
		return (e[0] - t[0]) * (n[1] - t[1]) < (e[1] - t[1]) * (n[0] - t[0])
	}

	function qr(n, t, e, r) {
		var u = n[0],
			i = e[0],
			o = t[0] - u,
			a = r[0] - i,
			c = n[1],
			s = e[1],
			l = t[1] - c,
			f = r[1] - s,
			h = (a * (c - s) - f * (u - i)) / (f * o - a * l);
		return [u + h * o, c + h * l]
	}

	function zr(n) {
		var t = n[0],
			e = n[n.length - 1];
		return !(t[0] - e[0] || t[1] - e[1])
	}

	function Rr() {
		tu(this), this.edge = this.site = this.circle = null
	}

	function Dr(n) {
		var t = ns.pop() || new Rr;
		return t.site = n, t
	}

	function Pr(n) {
		$r(n), Gc.remove(n), ns.push(n), tu(n)
	}

	function Ur(n) {
		var t = n.circle,
			e = t.x,
			r = t.cy,
			u = {
				x: e,
				y: r
			}, i = n.P,
			o = n.N,
			a = [n];
		Pr(n);
		for (var c = i; c.circle && fa(e - c.circle.x) < Ta && fa(r - c.circle.cy) < Ta;) i = c.P, a.unshift(c), Pr(c), c = i;
		a.unshift(c), $r(c);
		for (var s = o; s.circle && fa(e - s.circle.x) < Ta && fa(r - s.circle.cy) < Ta;) o = s.N, a.push(s), Pr(s), s = o;
		a.push(s), $r(s);
		var l, f = a.length;
		for (l = 1; f > l; ++l) s = a[l], c = a[l - 1], Kr(s.edge, c.site, s.site, u);
		c = a[0], s = a[f - 1], s.edge = Wr(c.site, s.site, null, u), Vr(c), Vr(s)
	}

	function jr(n) {
		for (var t, e, r, u, i = n.x, o = n.y, a = Gc._; a;)
			if (r = Hr(a, o) - i, r > Ta) a = a.L;
			else {
				if (u = i - Fr(a, o), !(u > Ta)) {
					r > -Ta ? (t = a.P, e = a) : u > -Ta ? (t = a, e = a.N) : t = e = a;
					break
				}
				if (!a.R) {
					t = a;
					break
				}
				a = a.R
			}
		var c = Dr(n);
		if (Gc.insert(t, c), t || e) {
			if (t === e) return $r(t), e = Dr(t.site), Gc.insert(c, e), c.edge = e.edge = Wr(t.site, c.site), Vr(t), Vr(e), void 0;
			if (!e) return c.edge = Wr(t.site, c.site), void 0;
			$r(t), $r(e);
			var s = t.site,
				l = s.x,
				f = s.y,
				h = n.x - l,
				g = n.y - f,
				p = e.site,
				v = p.x - l,
				d = p.y - f,
				m = 2 * (h * d - g * v),
				y = h * h + g * g,
				x = v * v + d * d,
				M = {
					x: (d * y - g * x) / m + l,
					y: (h * x - v * y) / m + f
				};
			Kr(e.edge, s, p, M), c.edge = Wr(s, n, null, M), e.edge = Wr(n, p, null, M), Vr(t), Vr(e)
		}
	}

	function Hr(n, t) {
		var e = n.site,
			r = e.x,
			u = e.y,
			i = u - t;
		if (!i) return r;
		var o = n.P;
		if (!o) return -1 / 0;
		e = o.site;
		var a = e.x,
			c = e.y,
			s = c - t;
		if (!s) return a;
		var l = a - r,
			f = 1 / i - 1 / s,
			h = l / s;
		return f ? (-h + Math.sqrt(h * h - 2 * f * (l * l / (-2 * s) - c + s / 2 + u - i / 2))) / f + r : (r + a) / 2
	}

	function Fr(n, t) {
		var e = n.N;
		if (e) return Hr(e, t);
		var r = n.site;
		return r.y === t ? r.x : 1 / 0
	}

	function Or(n) {
		this.site = n, this.edges = []
	}

	function Ir(n) {
		for (var t, e, r, u, i, o, a, c, s, l, f = n[0][0], h = n[1][0], g = n[0][1], p = n[1][1], v = Wc, d = v.length; d--;)
			if (i = v[d], i && i.prepare())
				for (a = i.edges, c = a.length, o = 0; c > o;) l = a[o].end(), r = l.x, u = l.y, s = a[++o % c].start(), t = s.x, e = s.y, (fa(r - t) > Ta || fa(u - e) > Ta) && (a.splice(o, 0, new Qr(Gr(i.site, l, fa(r - f) < Ta && p - u > Ta ? {
					x: f,
					y: fa(t - f) < Ta ? e : p
				} : fa(u - p) < Ta && h - r > Ta ? {
					x: fa(e - p) < Ta ? t : h,
					y: p
				} : fa(r - h) < Ta && u - g > Ta ? {
					x: h,
					y: fa(t - h) < Ta ? e : g
				} : fa(u - g) < Ta && r - f > Ta ? {
					x: fa(e - g) < Ta ? t : f,
					y: g
				} : null), i.site, null)), ++c)
	}

	function Yr(n, t) {
		return t.angle - n.angle
	}

	function Zr() {
		tu(this), this.x = this.y = this.arc = this.site = this.cy = null
	}

	function Vr(n) {
		var t = n.P,
			e = n.N;
		if (t && e) {
			var r = t.site,
				u = n.site,
				i = e.site;
			if (r !== i) {
				var o = u.x,
					a = u.y,
					c = r.x - o,
					s = r.y - a,
					l = i.x - o,
					f = i.y - a,
					h = 2 * (c * f - s * l);
				if (!(h >= -qa)) {
					var g = c * c + s * s,
						p = l * l + f * f,
						v = (f * g - s * p) / h,
						d = (c * p - l * g) / h,
						f = d + a,
						m = ts.pop() || new Zr;
					m.arc = n, m.site = u, m.x = v + o, m.y = f + Math.sqrt(v * v + d * d), m.cy = f, n.circle = m;
					for (var y = null, x = Qc._; x;)
						if (m.y < x.y || m.y === x.y && m.x <= x.x) {
							if (!x.L) {
								y = x.P;
								break
							}
							x = x.L
						} else {
							if (!x.R) {
								y = x;
								break
							}
							x = x.R
						}
					Qc.insert(y, m), y || (Kc = m)
				}
			}
		}
	}

	function $r(n) {
		var t = n.circle;
		t && (t.P || (Kc = t.N), Qc.remove(t), ts.push(t), tu(t), n.circle = null)
	}

	function Xr(n) {
		for (var t, e = Jc, r = Fe(n[0][0], n[0][1], n[1][0], n[1][1]), u = e.length; u--;) t = e[u], (!Br(t, n) || !r(t) || fa(t.a.x - t.b.x) < Ta && fa(t.a.y - t.b.y) < Ta) && (t.a = t.b = null, e.splice(u, 1))
	}

	function Br(n, t) {
		var e = n.b;
		if (e) return !0;
		var r, u, i = n.a,
			o = t[0][0],
			a = t[1][0],
			c = t[0][1],
			s = t[1][1],
			l = n.l,
			f = n.r,
			h = l.x,
			g = l.y,
			p = f.x,
			v = f.y,
			d = (h + p) / 2,
			m = (g + v) / 2;
		if (v === g) {
			if (o > d || d >= a) return;
			if (h > p) {
				if (i) {
					if (i.y >= s) return
				} else i = {
					x: d,
					y: c
				};
				e = {
					x: d,
					y: s
				}
			} else {
				if (i) {
					if (i.y < c) return
				} else i = {
					x: d,
					y: s
				};
				e = {
					x: d,
					y: c
				}
			}
		} else if (r = (h - p) / (v - g), u = m - r * d, -1 > r || r > 1)
			if (h > p) {
				if (i) {
					if (i.y >= s) return
				} else i = {
					x: (c - u) / r,
					y: c
				};
				e = {
					x: (s - u) / r,
					y: s
				}
			} else {
				if (i) {
					if (i.y < c) return
				} else i = {
					x: (s - u) / r,
					y: s
				};
				e = {
					x: (c - u) / r,
					y: c
				}
			} else
		if (v > g) {
			if (i) {
				if (i.x >= a) return
			} else i = {
				x: o,
				y: r * o + u
			};
			e = {
				x: a,
				y: r * a + u
			}
		} else {
			if (i) {
				if (i.x < o) return
			} else i = {
				x: a,
				y: r * a + u
			};
			e = {
				x: o,
				y: r * o + u
			}
		}
		return n.a = i, n.b = e, !0
	}

	function Jr(n, t) {
		this.l = n, this.r = t, this.a = this.b = null
	}

	function Wr(n, t, e, r) {
		var u = new Jr(n, t);
		return Jc.push(u), e && Kr(u, n, t, e), r && Kr(u, t, n, r), Wc[n.i].edges.push(new Qr(u, n, t)), Wc[t.i].edges.push(new Qr(u, t, n)), u
	}

	function Gr(n, t, e) {
		var r = new Jr(n, null);
		return r.a = t, r.b = e, Jc.push(r), r
	}

	function Kr(n, t, e, r) {
		n.a || n.b ? n.l === e ? n.b = r : n.a = r : (n.a = r, n.l = t, n.r = e)
	}

	function Qr(n, t, e) {
		var r = n.a,
			u = n.b;
		this.edge = n, this.site = t, this.angle = e ? Math.atan2(e.y - t.y, e.x - t.x) : n.l === t ? Math.atan2(u.x - r.x, r.y - u.y) : Math.atan2(r.x - u.x, u.y - r.y)
	}

	function nu() {
		this._ = null
	}

	function tu(n) {
		n.U = n.C = n.L = n.R = n.P = n.N = null
	}

	function eu(n, t) {
		var e = t,
			r = t.R,
			u = e.U;
		u ? u.L === e ? u.L = r : u.R = r : n._ = r, r.U = u, e.U = r, e.R = r.L, e.R && (e.R.U = e), r.L = e
	}

	function ru(n, t) {
		var e = t,
			r = t.L,
			u = e.U;
		u ? u.L === e ? u.L = r : u.R = r : n._ = r, r.U = u, e.U = r, e.L = r.R, e.L && (e.L.U = e), r.R = e
	}

	function uu(n) {
		for (; n.L;) n = n.L;
		return n
	}

	function iu(n, t) {
		var e, r, u, i = n.sort(ou)
				.pop();
		for (Jc = [], Wc = new Array(n.length), Gc = new nu, Qc = new nu;;)
			if (u = Kc, i && (!u || i.y < u.y || i.y === u.y && i.x < u.x))(i.x !== e || i.y !== r) && (Wc[i.i] = new Or(i), jr(i), e = i.x, r = i.y), i = n.pop();
			else {
				if (!u) break;
				Ur(u.arc)
			}
		t && (Xr(t), Ir(t));
		var o = {
			cells: Wc,
			edges: Jc
		};
		return Gc = Qc = Jc = Wc = null, o
	}

	function ou(n, t) {
		return t.y - n.y || t.x - n.x
	}

	function au(n, t, e) {
		return (n.x - e.x) * (t.y - n.y) - (n.x - t.x) * (e.y - n.y)
	}

	function cu(n) {
		return n.x
	}

	function su(n) {
		return n.y
	}

	function lu() {
		return {
			leaf: !0,
			nodes: [],
			point: null,
			x: null,
			y: null
		}
	}

	function fu(n, t, e, r, u, i) {
		if (!n(t, e, r, u, i)) {
			var o = .5 * (e + u),
				a = .5 * (r + i),
				c = t.nodes;
			c[0] && fu(n, c[0], e, r, o, a), c[1] && fu(n, c[1], o, r, u, a), c[2] && fu(n, c[2], e, a, o, i), c[3] && fu(n, c[3], o, a, u, i)
		}
	}

	function hu(n, t) {
		n = Go.rgb(n), t = Go.rgb(t);
		var e = n.r,
			r = n.g,
			u = n.b,
			i = t.r - e,
			o = t.g - r,
			a = t.b - u;
		return function(n) {
			return "#" + Mt(Math.round(e + i * n)) + Mt(Math.round(r + o * n)) + Mt(Math.round(u + a * n))
		}
	}

	function gu(n, t) {
		var e, r = {}, u = {};
		for (e in n) e in t ? r[e] = du(n[e], t[e]) : u[e] = n[e];
		for (e in t) e in n || (u[e] = t[e]);
		return function(n) {
			for (e in r) u[e] = r[e](n);
			return u
		}
	}

	function pu(n, t) {
		return t -= n = +n,
		function(e) {
			return n + t * e
		}
	}

	function vu(n, t) {
		var e, r, u, i = rs.lastIndex = us.lastIndex = 0,
			o = -1,
			a = [],
			c = [];
		for (n += "", t += "";
			(e = rs.exec(n)) && (r = us.exec(t));)(u = r.index) > i && (u = t.substring(i, u), a[o] ? a[o] += u : a[++o] = u), (e = e[0]) === (r = r[0]) ? a[o] ? a[o] += r : a[++o] = r : (a[++o] = null, c.push({
			i: o,
			x: pu(e, r)
		})), i = us.lastIndex;
		return i < t.length && (u = t.substring(i), a[o] ? a[o] += u : a[++o] = u), a.length < 2 ? c[0] ? (t = c[0].x, function(n) {
			return t(n) + ""
		}) : function() {
			return t
		} : (t = c.length, function(n) {
			for (var e, r = 0; t > r; ++r) a[(e = c[r])
				.i] = e.x(n);
			return a.join("")
		})
	}

	function du(n, t) {
		for (var e, r = Go.interpolators.length; --r >= 0 && !(e = Go.interpolators[r](n, t)););
		return e
	}

	function mu(n, t) {
		var e, r = [],
			u = [],
			i = n.length,
			o = t.length,
			a = Math.min(n.length, t.length);
		for (e = 0; a > e; ++e) r.push(du(n[e], t[e]));
		for (; i > e; ++e) u[e] = n[e];
		for (; o > e; ++e) u[e] = t[e];
		return function(n) {
			for (e = 0; a > e; ++e) u[e] = r[e](n);
			return u
		}
	}

	function yu(n) {
		return function(t) {
			return 0 >= t ? 0 : t >= 1 ? 1 : n(t)
		}
	}

	function xu(n) {
		return function(t) {
			return 1 - n(1 - t)
		}
	}

	function Mu(n) {
		return function(t) {
			return .5 * (.5 > t ? n(2 * t) : 2 - n(2 - 2 * t))
		}
	}

	function _u(n) {
		return n * n
	}

	function bu(n) {
		return n * n * n
	}

	function wu(n) {
		if (0 >= n) return 0;
		if (n >= 1) return 1;
		var t = n * n,
			e = t * n;
		return 4 * (.5 > n ? e : 3 * (n - t) + e - .75)
	}

	function Su(n) {
		return function(t) {
			return Math.pow(t, n)
		}
	}

	function ku(n) {
		return 1 - Math.cos(n * La)
	}

	function Eu(n) {
		return Math.pow(2, 10 * (n - 1))
	}

	function Au(n) {
		return 1 - Math.sqrt(1 - n * n)
	}

	function Cu(n, t) {
		var e;
		return arguments.length < 2 && (t = .45), arguments.length ? e = t / Na * Math.asin(1 / n) : (n = 1, e = t / 4),
		function(r) {
			return 1 + n * Math.pow(2, -10 * r) * Math.sin((r - e) * Na / t)
		}
	}

	function Nu(n) {
		return n || (n = 1.70158),
		function(t) {
			return t * t * ((n + 1) * t - n)
		}
	}

	function Lu(n) {
		return 1 / 2.75 > n ? 7.5625 * n * n : 2 / 2.75 > n ? 7.5625 * (n -= 1.5 / 2.75) * n + .75 : 2.5 / 2.75 > n ? 7.5625 * (n -= 2.25 / 2.75) * n + .9375 : 7.5625 * (n -= 2.625 / 2.75) * n + .984375
	}

	function Tu(n, t) {
		n = Go.hcl(n), t = Go.hcl(t);
		var e = n.h,
			r = n.c,
			u = n.l,
			i = t.h - e,
			o = t.c - r,
			a = t.l - u;
		return isNaN(o) && (o = 0, r = isNaN(r) ? t.c : r), isNaN(i) ? (i = 0, e = isNaN(e) ? t.h : e) : i > 180 ? i -= 360 : -180 > i && (i += 360),
		function(n) {
			return ct(e + i * n, r + o * n, u + a * n) + ""
		}
	}

	function qu(n, t) {
		n = Go.hsl(n), t = Go.hsl(t);
		var e = n.h,
			r = n.s,
			u = n.l,
			i = t.h - e,
			o = t.s - r,
			a = t.l - u;
		return isNaN(o) && (o = 0, r = isNaN(r) ? t.s : r), isNaN(i) ? (i = 0, e = isNaN(e) ? t.h : e) : i > 180 ? i -= 360 : -180 > i && (i += 360),
		function(n) {
			return it(e + i * n, r + o * n, u + a * n) + ""
		}
	}

	function zu(n, t) {
		n = Go.lab(n), t = Go.lab(t);
		var e = n.l,
			r = n.a,
			u = n.b,
			i = t.l - e,
			o = t.a - r,
			a = t.b - u;
		return function(n) {
			return ft(e + i * n, r + o * n, u + a * n) + ""
		}
	}

	function Ru(n, t) {
		return t -= n,
		function(e) {
			return Math.round(n + t * e)
		}
	}

	function Du(n) {
		var t = [n.a, n.b],
			e = [n.c, n.d],
			r = Uu(t),
			u = Pu(t, e),
			i = Uu(ju(e, t, -u)) || 0;
		t[0] * e[1] < e[0] * t[1] && (t[0] *= -1, t[1] *= -1, r *= -1, u *= -1), this.rotate = (r ? Math.atan2(t[1], t[0]) : Math.atan2(-e[0], e[1])) * Ra, this.translate = [n.e, n.f], this.scale = [r, i], this.skew = i ? Math.atan2(u, i) * Ra : 0
	}

	function Pu(n, t) {
		return n[0] * t[0] + n[1] * t[1]
	}

	function Uu(n) {
		var t = Math.sqrt(Pu(n, n));
		return t && (n[0] /= t, n[1] /= t), t
	}

	function ju(n, t, e) {
		return n[0] += e * t[0], n[1] += e * t[1], n
	}

	function Hu(n, t) {
		var e, r = [],
			u = [],
			i = Go.transform(n),
			o = Go.transform(t),
			a = i.translate,
			c = o.translate,
			s = i.rotate,
			l = o.rotate,
			f = i.skew,
			h = o.skew,
			g = i.scale,
			p = o.scale;
		return a[0] != c[0] || a[1] != c[1] ? (r.push("translate(", null, ",", null, ")"), u.push({
			i: 1,
			x: pu(a[0], c[0])
		}, {
			i: 3,
			x: pu(a[1], c[1])
		})) : c[0] || c[1] ? r.push("translate(" + c + ")") : r.push(""), s != l ? (s - l > 180 ? l += 360 : l - s > 180 && (s += 360), u.push({
			i: r.push(r.pop() + "rotate(", null, ")") - 2,
			x: pu(s, l)
		})) : l && r.push(r.pop() + "rotate(" + l + ")"), f != h ? u.push({
			i: r.push(r.pop() + "skewX(", null, ")") - 2,
			x: pu(f, h)
		}) : h && r.push(r.pop() + "skewX(" + h + ")"), g[0] != p[0] || g[1] != p[1] ? (e = r.push(r.pop() + "scale(", null, ",", null, ")"), u.push({
			i: e - 4,
			x: pu(g[0], p[0])
		}, {
			i: e - 2,
			x: pu(g[1], p[1])
		})) : (1 != p[0] || 1 != p[1]) && r.push(r.pop() + "scale(" + p + ")"), e = u.length,
		function(n) {
			for (var t, i = -1; ++i < e;) r[(t = u[i])
				.i] = t.x(n);
			return r.join("")
		}
	}

	function Fu(n, t) {
		return t = t - (n = +n) ? 1 / (t - n) : 0,
		function(e) {
			return (e - n) * t
		}
	}

	function Ou(n, t) {
		return t = t - (n = +n) ? 1 / (t - n) : 0,
		function(e) {
			return Math.max(0, Math.min(1, (e - n) * t))
		}
	}

	function Iu(n) {
		for (var t = n.source, e = n.target, r = Zu(t, e), u = [t]; t !== r;) t = t.parent, u.push(t);
		for (var i = u.length; e !== r;) u.splice(i, 0, e), e = e.parent;
		return u
	}

	function Yu(n) {
		for (var t = [], e = n.parent; null != e;) t.push(n), n = e, e = e.parent;
		return t.push(n), t
	}

	function Zu(n, t) {
		if (n === t) return n;
		for (var e = Yu(n), r = Yu(t), u = e.pop(), i = r.pop(), o = null; u === i;) o = u, u = e.pop(), i = r.pop();
		return o
	}

	function Vu(n) {
		n.fixed |= 2
	}

	function $u(n) {
		n.fixed &= -7
	}

	function Xu(n) {
		n.fixed |= 4, n.px = n.x, n.py = n.y
	}

	function Bu(n) {
		n.fixed &= -5
	}

	function Ju(n, t, e) {
		var r = 0,
			u = 0;
		if (n.charge = 0, !n.leaf)
			for (var i, o = n.nodes, a = o.length, c = -1; ++c < a;) i = o[c], null != i && (Ju(i, t, e), n.charge += i.charge, r += i.charge * i.cx, u += i.charge * i.cy);
		if (n.point) {
			n.leaf || (n.point.x += Math.random() - .5, n.point.y += Math.random() - .5);
			var s = t * e[n.point.index];
			n.charge += n.pointCharge = s, r += s * n.point.x, u += s * n.point.y
		}
		n.cx = r / n.charge, n.cy = u / n.charge
	}

	function Wu(n, t) {
		return Go.rebind(n, t, "sort", "children", "value"), n.nodes = n, n.links = ni, n
	}

	function Gu(n) {
		return n.children
	}

	function Ku(n) {
		return n.value
	}

	function Qu(n, t) {
		return t.value - n.value
	}

	function ni(n) {
		return Go.merge(n.map(function(n) {
			return (n.children || [])
				.map(function(t) {
					return {
						source: n,
						target: t
					}
				})
		}))
	}

	function ti(n) {
		return n.x
	}

	function ei(n) {
		return n.y
	}

	function ri(n, t, e) {
		n.y0 = t, n.y = e
	}

	function ui(n) {
		return Go.range(n.length)
	}

	function ii(n) {
		for (var t = -1, e = n[0].length, r = []; ++t < e;) r[t] = 0;
		return r
	}

	function oi(n) {
		for (var t, e = 1, r = 0, u = n[0][1], i = n.length; i > e; ++e)(t = n[e][1]) > u && (r = e, u = t);
		return r
	}

	function ai(n) {
		return n.reduce(ci, 0)
	}

	function ci(n, t) {
		return n + t[1]
	}

	function si(n, t) {
		return li(n, Math.ceil(Math.log(t.length) / Math.LN2 + 1))
	}

	function li(n, t) {
		for (var e = -1, r = +n[0], u = (n[1] - r) / t, i = []; ++e <= t;) i[e] = u * e + r;
		return i
	}

	function fi(n) {
		return [Go.min(n), Go.max(n)]
	}

	function hi(n, t) {
		return n.parent == t.parent ? 1 : 2
	}

	function gi(n) {
		var t = n.children;
		return t && t.length ? t[0] : n._tree.thread
	}

	function pi(n) {
		var t, e = n.children;
		return e && (t = e.length) ? e[t - 1] : n._tree.thread
	}

	function vi(n, t) {
		var e = n.children;
		if (e && (u = e.length))
			for (var r, u, i = -1; ++i < u;) t(r = vi(e[i], t), n) > 0 && (n = r);
		return n
	}

	function di(n, t) {
		return n.x - t.x
	}

	function mi(n, t) {
		return t.x - n.x
	}

	function yi(n, t) {
		return n.depth - t.depth
	}

	function xi(n, t) {
		function e(n, r) {
			var u = n.children;
			if (u && (o = u.length))
				for (var i, o, a = null, c = -1; ++c < o;) i = u[c], e(i, a), a = i;
			t(n, r)
		}
		e(n, null)
	}

	function Mi(n) {
		for (var t, e = 0, r = 0, u = n.children, i = u.length; --i >= 0;) t = u[i]._tree, t.prelim += e, t.mod += e, e += t.shift + (r += t.change)
	}

	function _i(n, t, e) {
		n = n._tree, t = t._tree;
		var r = e / (t.number - n.number);
		n.change += r, t.change -= r, t.shift += e, t.prelim += e, t.mod += e
	}

	function bi(n, t, e) {
		return n._tree.ancestor.parent == t.parent ? n._tree.ancestor : e
	}

	function wi(n, t) {
		return n.value - t.value
	}

	function Si(n, t) {
		var e = n._pack_next;
		n._pack_next = t, t._pack_prev = n, t._pack_next = e, e._pack_prev = t
	}

	function ki(n, t) {
		n._pack_next = t, t._pack_prev = n
	}

	function Ei(n, t) {
		var e = t.x - n.x,
			r = t.y - n.y,
			u = n.r + t.r;
		return .999 * u * u > e * e + r * r
	}

	function Ai(n) {
		function t(n) {
			l = Math.min(n.x - n.r, l), f = Math.max(n.x + n.r, f), h = Math.min(n.y - n.r, h), g = Math.max(n.y + n.r, g)
		}
		if ((e = n.children) && (s = e.length)) {
			var e, r, u, i, o, a, c, s, l = 1 / 0,
				f = -1 / 0,
				h = 1 / 0,
				g = -1 / 0;
			if (e.forEach(Ci), r = e[0], r.x = -r.r, r.y = 0, t(r), s > 1 && (u = e[1], u.x = u.r, u.y = 0, t(u), s > 2))
				for (i = e[2], Ti(r, u, i), t(i), Si(r, i), r._pack_prev = i, Si(i, u), u = r._pack_next, o = 3; s > o; o++) {
					Ti(r, u, i = e[o]);
					var p = 0,
						v = 1,
						d = 1;
					for (a = u._pack_next; a !== u; a = a._pack_next, v++)
						if (Ei(a, i)) {
							p = 1;
							break
						}
					if (1 == p)
						for (c = r._pack_prev; c !== a._pack_prev && !Ei(c, i); c = c._pack_prev, d++);
					p ? (d > v || v == d && u.r < r.r ? ki(r, u = a) : ki(r = c, u), o--) : (Si(r, i), u = i, t(i))
				}
			var m = (l + f) / 2,
				y = (h + g) / 2,
				x = 0;
			for (o = 0; s > o; o++) i = e[o], i.x -= m, i.y -= y, x = Math.max(x, i.r + Math.sqrt(i.x * i.x + i.y * i.y));
			n.r = x, e.forEach(Ni)
		}
	}

	function Ci(n) {
		n._pack_next = n._pack_prev = n
	}

	function Ni(n) {
		delete n._pack_next, delete n._pack_prev
	}

	function Li(n, t, e, r) {
		var u = n.children;
		if (n.x = t += r * n.x, n.y = e += r * n.y, n.r *= r, u)
			for (var i = -1, o = u.length; ++i < o;) Li(u[i], t, e, r)
	}

	function Ti(n, t, e) {
		var r = n.r + e.r,
			u = t.x - n.x,
			i = t.y - n.y;
		if (r && (u || i)) {
			var o = t.r + e.r,
				a = u * u + i * i;
			o *= o, r *= r;
			var c = .5 + (r - o) / (2 * a),
				s = Math.sqrt(Math.max(0, 2 * o * (r + a) - (r -= a) * r - o * o)) / (2 * a);
			e.x = n.x + c * u + s * i, e.y = n.y + c * i - s * u
		} else e.x = n.x + r, e.y = n.y
	}

	function qi(n) {
		return 1 + Go.max(n, function(n) {
			return n.y
		})
	}

	function zi(n) {
		return n.reduce(function(n, t) {
			return n + t.x
		}, 0) / n.length
	}

	function Ri(n) {
		var t = n.children;
		return t && t.length ? Ri(t[0]) : n
	}

	function Di(n) {
		var t, e = n.children;
		return e && (t = e.length) ? Di(e[t - 1]) : n
	}

	function Pi(n) {
		return {
			x: n.x,
			y: n.y,
			dx: n.dx,
			dy: n.dy
		}
	}

	function Ui(n, t) {
		var e = n.x + t[3],
			r = n.y + t[0],
			u = n.dx - t[1] - t[3],
			i = n.dy - t[0] - t[2];
		return 0 > u && (e += u / 2, u = 0), 0 > i && (r += i / 2, i = 0), {
			x: e,
			y: r,
			dx: u,
			dy: i
		}
	}

	function ji(n) {
		var t = n[0],
			e = n[n.length - 1];
		return e > t ? [t, e] : [e, t]
	}

	function Hi(n) {
		return n.rangeExtent ? n.rangeExtent() : ji(n.range())
	}

	function Fi(n, t, e, r) {
		var u = e(n[0], n[1]),
			i = r(t[0], t[1]);
		return function(n) {
			return i(u(n))
		}
	}

	function Oi(n, t) {
		var e, r = 0,
			u = n.length - 1,
			i = n[r],
			o = n[u];
		return i > o && (e = r, r = u, u = e, e = i, i = o, o = e), n[r] = t.floor(i), n[u] = t.ceil(o), n
	}

	function Ii(n) {
		return n ? {
			floor: function(t) {
				return Math.floor(t / n) * n
			},
			ceil: function(t) {
				return Math.ceil(t / n) * n
			}
		} : vs
	}

	function Yi(n, t, e, r) {
		var u = [],
			i = [],
			o = 0,
			a = Math.min(n.length, t.length) - 1;
		for (n[a] < n[0] && (n = n.slice()
			.reverse(), t = t.slice()
			.reverse()); ++o <= a;) u.push(e(n[o - 1], n[o])), i.push(r(t[o - 1], t[o]));
		return function(t) {
			var e = Go.bisect(n, t, 1, a) - 1;
			return i[e](u[e](t))
		}
	}

	function Zi(n, t, e, r) {
		function u() {
			var u = Math.min(n.length, t.length) > 2 ? Yi : Fi,
				c = r ? Ou : Fu;
			return o = u(n, t, c, e), a = u(t, n, c, du), i
		}

		function i(n) {
			return o(n)
		}
		var o, a;
		return i.invert = function(n) {
			return a(n)
		}, i.domain = function(t) {
			return arguments.length ? (n = t.map(Number), u()) : n
		}, i.range = function(n) {
			return arguments.length ? (t = n, u()) : t
		}, i.rangeRound = function(n) {
			return i.range(n)
				.interpolate(Ru)
		}, i.clamp = function(n) {
			return arguments.length ? (r = n, u()) : r
		}, i.interpolate = function(n) {
			return arguments.length ? (e = n, u()) : e
		}, i.ticks = function(t) {
			return Bi(n, t)
		}, i.tickFormat = function(t, e) {
			return Ji(n, t, e)
		}, i.nice = function(t) {
			return $i(n, t), u()
		}, i.copy = function() {
			return Zi(n, t, e, r)
		}, u()
	}

	function Vi(n, t) {
		return Go.rebind(n, t, "range", "rangeRound", "interpolate", "clamp")
	}

	function $i(n, t) {
		return Oi(n, Ii(Xi(n, t)[2]))
	}

	function Xi(n, t) {
		null == t && (t = 10);
		var e = ji(n),
			r = e[1] - e[0],
			u = Math.pow(10, Math.floor(Math.log(r / t) / Math.LN10)),
			i = t / r * u;
		return .15 >= i ? u *= 10 : .35 >= i ? u *= 5 : .75 >= i && (u *= 2), e[0] = Math.ceil(e[0] / u) * u, e[1] = Math.floor(e[1] / u) * u + .5 * u, e[2] = u, e
	}

	function Bi(n, t) {
		return Go.range.apply(Go, Xi(n, t))
	}

	function Ji(n, t, e) {
		var r = Xi(n, t);
		if (e) {
			var u = rc.exec(e);
			if (u.shift(), "s" === u[8]) {
				var i = Go.formatPrefix(Math.max(fa(r[0]), fa(r[1])));
				return u[7] || (u[7] = "." + Wi(i.scale(r[2]))), u[8] = "f", e = Go.format(u.join("")),
				function(n) {
					return e(i.scale(n)) + i.symbol
				}
			}
			u[7] || (u[7] = "." + Gi(u[8], r)), e = u.join("")
		} else e = ",." + Wi(r[2]) + "f";
		return Go.format(e)
	}

	function Wi(n) {
		return -Math.floor(Math.log(n) / Math.LN10 + .01)
	}

	function Gi(n, t) {
		var e = Wi(t[2]);
		return n in ds ? Math.abs(e - Wi(Math.max(fa(t[0]), fa(t[1])))) + +("e" !== n) : e - 2 * ("%" === n)
	}

	function Ki(n, t, e, r) {
		function u(n) {
			return (e ? Math.log(0 > n ? 0 : n) : -Math.log(n > 0 ? 0 : -n)) / Math.log(t)
		}

		function i(n) {
			return e ? Math.pow(t, n) : -Math.pow(t, -n)
		}

		function o(t) {
			return n(u(t))
		}
		return o.invert = function(t) {
			return i(n.invert(t))
		}, o.domain = function(t) {
			return arguments.length ? (e = t[0] >= 0, n.domain((r = t.map(Number))
				.map(u)), o) : r
		}, o.base = function(e) {
			return arguments.length ? (t = +e, n.domain(r.map(u)), o) : t
		}, o.nice = function() {
			var t = Oi(r.map(u), e ? Math : ys);
			return n.domain(t), r = t.map(i), o
		}, o.ticks = function() {
			var n = ji(r),
				o = [],
				a = n[0],
				c = n[1],
				s = Math.floor(u(a)),
				l = Math.ceil(u(c)),
				f = t % 1 ? 2 : t;
			if (isFinite(l - s)) {
				if (e) {
					for (; l > s; s++)
						for (var h = 1; f > h; h++) o.push(i(s) * h);
					o.push(i(s))
				} else
					for (o.push(i(s)); s++ < l;)
						for (var h = f - 1; h > 0; h--) o.push(i(s) * h);
				for (s = 0; o[s] < a; s++);
				for (l = o.length; o[l - 1] > c; l--);
				o = o.slice(s, l)
			}
			return o
		}, o.tickFormat = function(n, t) {
			if (!arguments.length) return ms;
			arguments.length < 2 ? t = ms : "function" != typeof t && (t = Go.format(t));
			var r, a = Math.max(.1, n / o.ticks()
					.length),
				c = e ? (r = 1e-12, Math.ceil) : (r = -1e-12, Math.floor);
			return function(n) {
				return n / i(c(u(n) + r)) <= a ? t(n) : ""
			}
		}, o.copy = function() {
			return Ki(n.copy(), t, e, r)
		}, Vi(o, n)
	}

	function Qi(n, t, e) {
		function r(t) {
			return n(u(t))
		}
		var u = no(t),
			i = no(1 / t);
		return r.invert = function(t) {
			return i(n.invert(t))
		}, r.domain = function(t) {
			return arguments.length ? (n.domain((e = t.map(Number))
				.map(u)), r) : e
		}, r.ticks = function(n) {
			return Bi(e, n)
		}, r.tickFormat = function(n, t) {
			return Ji(e, n, t)
		}, r.nice = function(n) {
			return r.domain($i(e, n))
		}, r.exponent = function(o) {
			return arguments.length ? (u = no(t = o), i = no(1 / t), n.domain(e.map(u)), r) : t
		}, r.copy = function() {
			return Qi(n.copy(), t, e)
		}, Vi(r, n)
	}

	function no(n) {
		return function(t) {
			return 0 > t ? -Math.pow(-t, n) : Math.pow(t, n)
		}
	}

	function to(n, t) {
		function e(e) {
			return i[((u.get(e) || ("range" === t.t ? u.set(e, n.push(e)) : 0 / 0)) - 1) % i.length]
		}

		function r(t, e) {
			return Go.range(n.length)
				.map(function(n) {
					return t + e * n
				})
		}
		var u, i, a;
		return e.domain = function(r) {
			if (!arguments.length) return n;
			n = [], u = new o;
			for (var i, a = -1, c = r.length; ++a < c;) u.has(i = r[a]) || u.set(i, n.push(i));
			return e[t.t].apply(e, t.a)
		}, e.range = function(n) {
			return arguments.length ? (i = n, a = 0, t = {
				t: "range",
				a: arguments
			}, e) : i
		}, e.rangePoints = function(u, o) {
			arguments.length < 2 && (o = 0);
			var c = u[0],
				s = u[1],
				l = (s - c) / (Math.max(1, n.length - 1) + o);
			return i = r(n.length < 2 ? (c + s) / 2 : c + l * o / 2, l), a = 0, t = {
				t: "rangePoints",
				a: arguments
			}, e
		}, e.rangeBands = function(u, o, c) {
			arguments.length < 2 && (o = 0), arguments.length < 3 && (c = o);
			var s = u[1] < u[0],
				l = u[s - 0],
				f = u[1 - s],
				h = (f - l) / (n.length - o + 2 * c);
			return i = r(l + h * c, h), s && i.reverse(), a = h * (1 - o), t = {
				t: "rangeBands",
				a: arguments
			}, e
		}, e.rangeRoundBands = function(u, o, c) {
			arguments.length < 2 && (o = 0), arguments.length < 3 && (c = o);
			var s = u[1] < u[0],
				l = u[s - 0],
				f = u[1 - s],
				h = Math.floor((f - l) / (n.length - o + 2 * c)),
				g = f - l - (n.length - o) * h;
			return i = r(l + Math.round(g / 2), h), s && i.reverse(), a = Math.round(h * (1 - o)), t = {
				t: "rangeRoundBands",
				a: arguments
			}, e
		}, e.rangeBand = function() {
			return a
		}, e.rangeExtent = function() {
			return ji(t.a[0])
		}, e.copy = function() {
			return to(n, t)
		}, e.domain(n)
	}

	function eo(e, r) {
		function u() {
			var n = 0,
				t = r.length;
			for (o = []; ++n < t;) o[n - 1] = Go.quantile(e, n / t);
			return i
		}

		function i(n) {
			return isNaN(n = +n) ? void 0 : r[Go.bisect(o, n)]
		}
		var o;
		return i.domain = function(r) {
			return arguments.length ? (e = r.filter(t)
				.sort(n), u()) : e
		}, i.range = function(n) {
			return arguments.length ? (r = n, u()) : r
		}, i.quantiles = function() {
			return o
		}, i.invertExtent = function(n) {
			return n = r.indexOf(n), 0 > n ? [0 / 0, 0 / 0] : [n > 0 ? o[n - 1] : e[0], n < o.length ? o[n] : e[e.length - 1]]
		}, i.copy = function() {
			return eo(e, r)
		}, u()
	}

	function ro(n, t, e) {
		function r(t) {
			return e[Math.max(0, Math.min(o, Math.floor(i * (t - n))))]
		}

		function u() {
			return i = e.length / (t - n), o = e.length - 1, r
		}
		var i, o;
		return r.domain = function(e) {
			return arguments.length ? (n = +e[0], t = +e[e.length - 1], u()) : [n, t]
		}, r.range = function(n) {
			return arguments.length ? (e = n, u()) : e
		}, r.invertExtent = function(t) {
			return t = e.indexOf(t), t = 0 > t ? 0 / 0 : t / i + n, [t, t + 1 / i]
		}, r.copy = function() {
			return ro(n, t, e)
		}, u()
	}

	function uo(n, t) {
		function e(e) {
			return e >= e ? t[Go.bisect(n, e)] : void 0
		}
		return e.domain = function(t) {
			return arguments.length ? (n = t, e) : n
		}, e.range = function(n) {
			return arguments.length ? (t = n, e) : t
		}, e.invertExtent = function(e) {
			return e = t.indexOf(e), [n[e - 1], n[e]]
		}, e.copy = function() {
			return uo(n, t)
		}, e
	}

	function io(n) {
		function t(n) {
			return +n
		}
		return t.invert = t, t.domain = t.range = function(e) {
			return arguments.length ? (n = e.map(t), t) : n
		}, t.ticks = function(t) {
			return Bi(n, t)
		}, t.tickFormat = function(t, e) {
			return Ji(n, t, e)
		}, t.copy = function() {
			return io(n)
		}, t
	}

	function oo(n) {
		return n.innerRadius
	}

	function ao(n) {
		return n.outerRadius
	}

	function co(n) {
		return n.startAngle
	}

	function so(n) {
		return n.endAngle
	}

	function lo(n) {
		function t(t) {
			function o() {
				s.push("M", i(n(l), a))
			}
			for (var c, s = [], l = [], f = -1, h = t.length, g = Et(e), p = Et(r); ++f < h;) u.call(this, c = t[f], f) ? l.push([+g.call(this, c, f), +p.call(this, c, f)]) : l.length && (o(), l = []);
			return l.length && o(), s.length ? s.join("") : null
		}
		var e = Ar,
			r = Cr,
			u = Ae,
			i = fo,
			o = i.key,
			a = .7;
		return t.x = function(n) {
			return arguments.length ? (e = n, t) : e
		}, t.y = function(n) {
			return arguments.length ? (r = n, t) : r
		}, t.defined = function(n) {
			return arguments.length ? (u = n, t) : u
		}, t.interpolate = function(n) {
			return arguments.length ? (o = "function" == typeof n ? i = n : (i = ks.get(n) || fo)
				.key, t) : o
		}, t.tension = function(n) {
			return arguments.length ? (a = n, t) : a
		}, t
	}

	function fo(n) {
		return n.join("L")
	}

	function ho(n) {
		return fo(n) + "Z"
	}

	function go(n) {
		for (var t = 0, e = n.length, r = n[0], u = [r[0], ",", r[1]]; ++t < e;) u.push("H", (r[0] + (r = n[t])[0]) / 2, "V", r[1]);
		return e > 1 && u.push("H", r[0]), u.join("")
	}

	function po(n) {
		for (var t = 0, e = n.length, r = n[0], u = [r[0], ",", r[1]]; ++t < e;) u.push("V", (r = n[t])[1], "H", r[0]);
		return u.join("")
	}

	function vo(n) {
		for (var t = 0, e = n.length, r = n[0], u = [r[0], ",", r[1]]; ++t < e;) u.push("H", (r = n[t])[0], "V", r[1]);
		return u.join("")
	}

	function mo(n, t) {
		return n.length < 4 ? fo(n) : n[1] + Mo(n.slice(1, n.length - 1), _o(n, t))
	}

	function yo(n, t) {
		return n.length < 3 ? fo(n) : n[0] + Mo((n.push(n[0]), n), _o([n[n.length - 2]].concat(n, [n[1]]), t))
	}

	function xo(n, t) {
		return n.length < 3 ? fo(n) : n[0] + Mo(n, _o(n, t))
	}

	function Mo(n, t) {
		if (t.length < 1 || n.length != t.length && n.length != t.length + 2) return fo(n);
		var e = n.length != t.length,
			r = "",
			u = n[0],
			i = n[1],
			o = t[0],
			a = o,
			c = 1;
		if (e && (r += "Q" + (i[0] - 2 * o[0] / 3) + "," + (i[1] - 2 * o[1] / 3) + "," + i[0] + "," + i[1], u = n[1], c = 2), t.length > 1) {
			a = t[1], i = n[c], c++, r += "C" + (u[0] + o[0]) + "," + (u[1] + o[1]) + "," + (i[0] - a[0]) + "," + (i[1] - a[1]) + "," + i[0] + "," + i[1];
			for (var s = 2; s < t.length; s++, c++) i = n[c], a = t[s], r += "S" + (i[0] - a[0]) + "," + (i[1] - a[1]) + "," + i[0] + "," + i[1]
		}
		if (e) {
			var l = n[c];
			r += "Q" + (i[0] + 2 * a[0] / 3) + "," + (i[1] + 2 * a[1] / 3) + "," + l[0] + "," + l[1]
		}
		return r
	}

	function _o(n, t) {
		for (var e, r = [], u = (1 - t) / 2, i = n[0], o = n[1], a = 1, c = n.length; ++a < c;) e = i, i = o, o = n[a], r.push([u * (o[0] - e[0]), u * (o[1] - e[1])]);
		return r
	}

	function bo(n) {
		if (n.length < 3) return fo(n);
		var t = 1,
			e = n.length,
			r = n[0],
			u = r[0],
			i = r[1],
			o = [u, u, u, (r = n[1])[0]],
			a = [i, i, i, r[1]],
			c = [u, ",", i, "L", Eo(Cs, o), ",", Eo(Cs, a)];
		for (n.push(n[e - 1]); ++t <= e;) r = n[t], o.shift(), o.push(r[0]), a.shift(), a.push(r[1]), Ao(c, o, a);
		return n.pop(), c.push("L", r), c.join("")
	}

	function wo(n) {
		if (n.length < 4) return fo(n);
		for (var t, e = [], r = -1, u = n.length, i = [0], o = [0]; ++r < 3;) t = n[r], i.push(t[0]), o.push(t[1]);
		for (e.push(Eo(Cs, i) + "," + Eo(Cs, o)), --r; ++r < u;) t = n[r], i.shift(), i.push(t[0]), o.shift(), o.push(t[1]), Ao(e, i, o);
		return e.join("")
	}

	function So(n) {
		for (var t, e, r = -1, u = n.length, i = u + 4, o = [], a = []; ++r < 4;) e = n[r % u], o.push(e[0]), a.push(e[1]);
		for (t = [Eo(Cs, o), ",", Eo(Cs, a)], --r; ++r < i;) e = n[r % u], o.shift(), o.push(e[0]), a.shift(), a.push(e[1]), Ao(t, o, a);
		return t.join("")
	}

	function ko(n, t) {
		var e = n.length - 1;
		if (e)
			for (var r, u, i = n[0][0], o = n[0][1], a = n[e][0] - i, c = n[e][1] - o, s = -1; ++s <= e;) r = n[s], u = s / e, r[0] = t * r[0] + (1 - t) * (i + u * a), r[1] = t * r[1] + (1 - t) * (o + u * c);
		return bo(n)
	}

	function Eo(n, t) {
		return n[0] * t[0] + n[1] * t[1] + n[2] * t[2] + n[3] * t[3]
	}

	function Ao(n, t, e) {
		n.push("C", Eo(Es, t), ",", Eo(Es, e), ",", Eo(As, t), ",", Eo(As, e), ",", Eo(Cs, t), ",", Eo(Cs, e))
	}

	function Co(n, t) {
		return (t[1] - n[1]) / (t[0] - n[0])
	}

	function No(n) {
		for (var t = 0, e = n.length - 1, r = [], u = n[0], i = n[1], o = r[0] = Co(u, i); ++t < e;) r[t] = (o + (o = Co(u = i, i = n[t + 1]))) / 2;
		return r[t] = o, r
	}

	function Lo(n) {
		for (var t, e, r, u, i = [], o = No(n), a = -1, c = n.length - 1; ++a < c;) t = Co(n[a], n[a + 1]), fa(t) < Ta ? o[a] = o[a + 1] = 0 : (e = o[a] / t, r = o[a + 1] / t, u = e * e + r * r, u > 9 && (u = 3 * t / Math.sqrt(u), o[a] = u * e, o[a + 1] = u * r));
		for (a = -1; ++a <= c;) u = (n[Math.min(c, a + 1)][0] - n[Math.max(0, a - 1)][0]) / (6 * (1 + o[a] * o[a])), i.push([u || 0, o[a] * u || 0]);
		return i
	}

	function To(n) {
		return n.length < 3 ? fo(n) : n[0] + Mo(n, Lo(n))
	}

	function qo(n) {
		for (var t, e, r, u = -1, i = n.length; ++u < i;) t = n[u], e = t[0], r = t[1] + ws, t[0] = e * Math.cos(r), t[1] = e * Math.sin(r);
		return n
	}

	function zo(n) {
		function t(t) {
			function c() {
				v.push("M", a(n(m), f), l, s(n(d.reverse()), f), "Z")
			}
			for (var h, g, p, v = [], d = [], m = [], y = -1, x = t.length, M = Et(e), _ = Et(u), b = e === r ? function() {
				return g
			} : Et(r), w = u === i ? function() {
				return p
			} : Et(i); ++y < x;) o.call(this, h = t[y], y) ? (d.push([g = +M.call(this, h, y), p = +_.call(this, h, y)]), m.push([+b.call(this, h, y), +w.call(this, h, y)])) : d.length && (c(), d = [], m = []);
			return d.length && c(), v.length ? v.join("") : null
		}
		var e = Ar,
			r = Ar,
			u = 0,
			i = Cr,
			o = Ae,
			a = fo,
			c = a.key,
			s = a,
			l = "L",
			f = .7;
		return t.x = function(n) {
			return arguments.length ? (e = r = n, t) : r
		}, t.x0 = function(n) {
			return arguments.length ? (e = n, t) : e
		}, t.x1 = function(n) {
			return arguments.length ? (r = n, t) : r
		}, t.y = function(n) {
			return arguments.length ? (u = i = n, t) : i
		}, t.y0 = function(n) {
			return arguments.length ? (u = n, t) : u
		}, t.y1 = function(n) {
			return arguments.length ? (i = n, t) : i
		}, t.defined = function(n) {
			return arguments.length ? (o = n, t) : o
		}, t.interpolate = function(n) {
			return arguments.length ? (c = "function" == typeof n ? a = n : (a = ks.get(n) || fo)
				.key, s = a.reverse || a, l = a.closed ? "M" : "L", t) : c
		}, t.tension = function(n) {
			return arguments.length ? (f = n, t) : f
		}, t
	}

	function Ro(n) {
		return n.radius
	}

	function Do(n) {
		return [n.x, n.y]
	}

	function Po(n) {
		return function() {
			var t = n.apply(this, arguments),
				e = t[0],
				r = t[1] + ws;
			return [e * Math.cos(r), e * Math.sin(r)]
		}
	}

	function Uo() {
		return 64
	}

	function jo() {
		return "circle"
	}

	function Ho(n) {
		var t = Math.sqrt(n / Ca);
		return "M0," + t + "A" + t + "," + t + " 0 1,1 0," + -t + "A" + t + "," + t + " 0 1,1 0," + t + "Z"
	}

	function Fo(n, t) {
		return da(n, Rs), n.id = t, n
	}

	function Oo(n, t, e, r) {
		var u = n.id;
		return P(n, "function" == typeof e ? function(n, i, o) {
			n.__transition__[u].tween.set(t, r(e.call(n, n.__data__, i, o)))
		} : (e = r(e), function(n) {
			n.__transition__[u].tween.set(t, e)
		}))
	}

	function Io(n) {
		return null == n && (n = ""),
		function() {
			this.textContent = n
		}
	}

	function Yo(n, t, e, r) {
		var u = n.__transition__ || (n.__transition__ = {
			active: 0,
			count: 0
		}),
			i = u[e];
		if (!i) {
			var a = r.time;
			i = u[e] = {
				tween: new o,
				time: a,
				ease: r.ease,
				delay: r.delay,
				duration: r.duration
			}, ++u.count, Go.timer(function(r) {
				function o(r) {
					return u.active > e ? s() : (u.active = e, i.event && i.event.start.call(n, l, t), i.tween.forEach(function(e, r) {
						(r = r.call(n, l, t)) && v.push(r)
					}), Go.timer(function() {
						return p.c = c(r || 1) ? Ae : c, 1
					}, 0, a), void 0)
				}

				function c(r) {
					if (u.active !== e) return s();
					for (var o = r / g, a = f(o), c = v.length; c > 0;) v[--c].call(n, a);
					return o >= 1 ? (i.event && i.event.end.call(n, l, t), s()) : void 0
				}

				function s() {
					return --u.count ? delete u[e] : delete n.__transition__, 1
				}
				var l = n.__data__,
					f = i.ease,
					h = i.delay,
					g = i.duration,
					p = nc,
					v = [];
				return p.t = h + a, r >= h ? o(r - h) : (p.c = o, void 0)
			}, 0, a)
		}
	}

	function Zo(n, t) {
		n.attr("transform", function(n) {
			return "translate(" + t(n) + ",0)"
		})
	}

	function Vo(n, t) {
		n.attr("transform", function(n) {
			return "translate(0," + t(n) + ")"
		})
	}

	function $o(n) {
		return n.toISOString()
	}

	function Xo(n, t, e) {
		function r(t) {
			return n(t)
		}

		function u(n, e) {
			var r = n[1] - n[0],
				u = r / e,
				i = Go.bisect(Ys, u);
			return i == Ys.length ? [t.year, Xi(n.map(function(n) {
				return n / 31536e6
			}), e)[2]] : i ? t[u / Ys[i - 1] < Ys[i] / u ? i - 1 : i] : [$s, Xi(n, e)[2]]
		}
		return r.invert = function(t) {
			return Bo(n.invert(t))
		}, r.domain = function(t) {
			return arguments.length ? (n.domain(t), r) : n.domain()
				.map(Bo)
		}, r.nice = function(n, t) {
			function e(e) {
				return !isNaN(e) && !n.range(e, Bo(+e + 1), t)
					.length
			}
			var i = r.domain(),
				o = ji(i),
				a = null == n ? u(o, 10) : "number" == typeof n && u(o, n);
			return a && (n = a[0], t = a[1]), r.domain(Oi(i, t > 1 ? {
				floor: function(t) {
					for (; e(t = n.floor(t));) t = Bo(t - 1);
					return t
				},
				ceil: function(t) {
					for (; e(t = n.ceil(t));) t = Bo(+t + 1);
					return t
				}
			} : n))
		}, r.ticks = function(n, t) {
			var e = ji(r.domain()),
				i = null == n ? u(e, 10) : "number" == typeof n ? u(e, n) : !n.range && [{
						range: n
					},
					t
				];
			return i && (n = i[0], t = i[1]), n.range(e[0], Bo(+e[1] + 1), 1 > t ? 1 : t)
		}, r.tickFormat = function() {
			return e
		}, r.copy = function() {
			return Xo(n.copy(), t, e)
		}, Vi(r, n)
	}

	function Bo(n) {
		return new Date(n)
	}

	function Jo(n) {
		return JSON.parse(n.responseText)
	}

	function Wo(n) {
		var t = na.createRange();
		return t.selectNode(na.body), t.createContextualFragment(n.responseText)
	}
	var Go = {
		version: "3.4.6"
	};
	Date.now || (Date.now = function() {
		return +new Date
	});
	var Ko = [].slice,
		Qo = function(n) {
			return Ko.call(n)
		}, na = document,
		ta = na.documentElement,
		ea = window;
	try {
		Qo(ta.childNodes)[0].nodeType
	} catch (ra) {
		Qo = function(n) {
			for (var t = n.length, e = new Array(t); t--;) e[t] = n[t];
			return e
		}
	}
	try {
		na.createElement("div")
			.style.setProperty("opacity", 0, "")
	} catch (ua) {
		var ia = ea.Element.prototype,
			oa = ia.setAttribute,
			aa = ia.setAttributeNS,
			ca = ea.CSSStyleDeclaration.prototype,
			sa = ca.setProperty;
		ia.setAttribute = function(n, t) {
			oa.call(this, n, t + "")
		}, ia.setAttributeNS = function(n, t, e) {
			aa.call(this, n, t, e + "")
		}, ca.setProperty = function(n, t, e) {
			sa.call(this, n, t + "", e)
		}
	}
	Go.ascending = n, Go.descending = function(n, t) {
		return n > t ? -1 : t > n ? 1 : t >= n ? 0 : 0 / 0
	}, Go.min = function(n, t) {
		var e, r, u = -1,
			i = n.length;
		if (1 === arguments.length) {
			for (; ++u < i && !(null != (e = n[u]) && e >= e);) e = void 0;
			for (; ++u < i;) null != (r = n[u]) && e > r && (e = r)
		} else {
			for (; ++u < i && !(null != (e = t.call(n, n[u], u)) && e >= e);) e = void 0;
			for (; ++u < i;) null != (r = t.call(n, n[u], u)) && e > r && (e = r)
		}
		return e
	}, Go.max = function(n, t) {
		var e, r, u = -1,
			i = n.length;
		if (1 === arguments.length) {
			for (; ++u < i && !(null != (e = n[u]) && e >= e);) e = void 0;
			for (; ++u < i;) null != (r = n[u]) && r > e && (e = r)
		} else {
			for (; ++u < i && !(null != (e = t.call(n, n[u], u)) && e >= e);) e = void 0;
			for (; ++u < i;) null != (r = t.call(n, n[u], u)) && r > e && (e = r)
		}
		return e
	}, Go.extent = function(n, t) {
		var e, r, u, i = -1,
			o = n.length;
		if (1 === arguments.length) {
			for (; ++i < o && !(null != (e = u = n[i]) && e >= e);) e = u = void 0;
			for (; ++i < o;) null != (r = n[i]) && (e > r && (e = r), r > u && (u = r))
		} else {
			for (; ++i < o && !(null != (e = u = t.call(n, n[i], i)) && e >= e);) e = void 0;
			for (; ++i < o;) null != (r = t.call(n, n[i], i)) && (e > r && (e = r), r > u && (u = r))
		}
		return [e, u]
	}, Go.sum = function(n, t) {
		var e, r = 0,
			u = n.length,
			i = -1;
		if (1 === arguments.length)
			for (; ++i < u;) isNaN(e = +n[i]) || (r += e);
		else
			for (; ++i < u;) isNaN(e = +t.call(n, n[i], i)) || (r += e);
		return r
	}, Go.mean = function(n, e) {
		var r, u = 0,
			i = n.length,
			o = -1,
			a = i;
		if (1 === arguments.length)
			for (; ++o < i;) t(r = n[o]) ? u += r : --a;
		else
			for (; ++o < i;) t(r = e.call(n, n[o], o)) ? u += r : --a;
		return a ? u / a : void 0
	}, Go.quantile = function(n, t) {
		var e = (n.length - 1) * t + 1,
			r = Math.floor(e),
			u = +n[r - 1],
			i = e - r;
		return i ? u + i * (n[r] - u) : u
	}, Go.median = function(e, r) {
		return arguments.length > 1 && (e = e.map(r)), e = e.filter(t), e.length ? Go.quantile(e.sort(n), .5) : void 0
	};
	var la = e(n);
	Go.bisectLeft = la.left, Go.bisect = Go.bisectRight = la.right, Go.bisector = function(t) {
		return e(1 === t.length ? function(e, r) {
			return n(t(e), r)
		} : t)
	}, Go.shuffle = function(n) {
		for (var t, e, r = n.length; r;) e = 0 | Math.random() * r--, t = n[r], n[r] = n[e], n[e] = t;
		return n
	}, Go.permute = function(n, t) {
		for (var e = t.length, r = new Array(e); e--;) r[e] = n[t[e]];
		return r
	}, Go.pairs = function(n) {
		for (var t, e = 0, r = n.length - 1, u = n[0], i = new Array(0 > r ? 0 : r); r > e;) i[e] = [t = u, u = n[++e]];
		return i
	}, Go.zip = function() {
		if (!(u = arguments.length)) return [];
		for (var n = -1, t = Go.min(arguments, r), e = new Array(t); ++n < t;)
			for (var u, i = -1, o = e[n] = new Array(u); ++i < u;) o[i] = arguments[i][n];
		return e
	}, Go.transpose = function(n) {
		return Go.zip.apply(Go, n)
	}, Go.keys = function(n) {
		var t = [];
		for (var e in n) t.push(e);
		return t
	}, Go.values = function(n) {
		var t = [];
		for (var e in n) t.push(n[e]);
		return t
	}, Go.entries = function(n) {
		var t = [];
		for (var e in n) t.push({
			key: e,
			value: n[e]
		});
		return t
	}, Go.merge = function(n) {
		for (var t, e, r, u = n.length, i = -1, o = 0; ++i < u;) o += n[i].length;
		for (e = new Array(o); --u >= 0;)
			for (r = n[u], t = r.length; --t >= 0;) e[--o] = r[t];
		return e
	};
	var fa = Math.abs;
	Go.range = function(n, t, e) {
		if (arguments.length < 3 && (e = 1, arguments.length < 2 && (t = n, n = 0)), 1 / 0 === (t - n) / e) throw new Error("infinite range");
		var r, i = [],
			o = u(fa(e)),
			a = -1;
		if (n *= o, t *= o, e *= o, 0 > e)
			for (;
				(r = n + e * ++a) > t;) i.push(r / o);
		else
			for (;
				(r = n + e * ++a) < t;) i.push(r / o);
		return i
	}, Go.map = function(n) {
		var t = new o;
		if (n instanceof o) n.forEach(function(n, e) {
			t.set(n, e)
		});
		else
			for (var e in n) t.set(e, n[e]);
		return t
	}, i(o, {
		has: a,
		get: function(n) {
			return this[ha + n]
		},
		set: function(n, t) {
			return this[ha + n] = t
		},
		remove: c,
		keys: s,
		values: function() {
			var n = [];
			return this.forEach(function(t, e) {
				n.push(e)
			}), n
		},
		entries: function() {
			var n = [];
			return this.forEach(function(t, e) {
				n.push({
					key: t,
					value: e
				})
			}), n
		},
		size: l,
		empty: f,
		forEach: function(n) {
			for (var t in this) t.charCodeAt(0) === ga && n.call(this, t.substring(1), this[t])
		}
	});
	var ha = "\x00",
		ga = ha.charCodeAt(0);
	Go.nest = function() {
		function n(t, a, c) {
			if (c >= i.length) return r ? r.call(u, a) : e ? a.sort(e) : a;
			for (var s, l, f, h, g = -1, p = a.length, v = i[c++], d = new o; ++g < p;)(h = d.get(s = v(l = a[g]))) ? h.push(l) : d.set(s, [l]);
			return t ? (l = t(), f = function(e, r) {
				l.set(e, n(t, r, c))
			}) : (l = {}, f = function(e, r) {
				l[e] = n(t, r, c)
			}), d.forEach(f), l
		}

		function t(n, e) {
			if (e >= i.length) return n;
			var r = [],
				u = a[e++];
			return n.forEach(function(n, u) {
				r.push({
					key: n,
					values: t(u, e)
				})
			}), u ? r.sort(function(n, t) {
				return u(n.key, t.key)
			}) : r
		}
		var e, r, u = {}, i = [],
			a = [];
		return u.map = function(t, e) {
			return n(e, t, 0)
		}, u.entries = function(e) {
			return t(n(Go.map, e, 0), 0)
		}, u.key = function(n) {
			return i.push(n), u
		}, u.sortKeys = function(n) {
			return a[i.length - 1] = n, u
		}, u.sortValues = function(n) {
			return e = n, u
		}, u.rollup = function(n) {
			return r = n, u
		}, u
	}, Go.set = function(n) {
		var t = new h;
		if (n)
			for (var e = 0, r = n.length; r > e; ++e) t.add(n[e]);
		return t
	}, i(h, {
		has: a,
		add: function(n) {
			return this[ha + n] = !0, n
		},
		remove: function(n) {
			return n = ha + n, n in this && delete this[n]
		},
		values: s,
		size: l,
		empty: f,
		forEach: function(n) {
			for (var t in this) t.charCodeAt(0) === ga && n.call(this, t.substring(1))
		}
	}), Go.behavior = {}, Go.rebind = function(n, t) {
		for (var e, r = 1, u = arguments.length; ++r < u;) n[e = arguments[r]] = g(n, t, t[e]);
		return n
	};
	var pa = ["webkit", "ms", "moz", "Moz", "o", "O"];
	Go.dispatch = function() {
		for (var n = new d, t = -1, e = arguments.length; ++t < e;) n[arguments[t]] = m(n);
		return n
	}, d.prototype.on = function(n, t) {
		var e = n.indexOf("."),
			r = "";
		if (e >= 0 && (r = n.substring(e + 1), n = n.substring(0, e)), n) return arguments.length < 2 ? this[n].on(r) : this[n].on(r, t);
		if (2 === arguments.length) {
			if (null == t)
				for (n in this) this.hasOwnProperty(n) && this[n].on(r, null);
			return this
		}
	}, Go.event = null, Go.requote = function(n) {
		return n.replace(va, "\\$&")
	};
	var va = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g,
		da = {}.__proto__ ? function(n, t) {
			n.__proto__ = t
	} : function(n, t) {
		for (var e in t) n[e] = t[e]
	}, ma = function(n, t) {
			return t.querySelector(n)
		}, ya = function(n, t) {
			return t.querySelectorAll(n)
		}, xa = ta[p(ta, "matchesSelector")],
		Ma = function(n, t) {
			return xa.call(n, t)
		};
	"function" == typeof Sizzle && (ma = function(n, t) {
		return Sizzle(n, t)[0] || null
	}, ya = Sizzle, Ma = Sizzle.matchesSelector), Go.selection = function() {
		return Sa
	};
	var _a = Go.selection.prototype = [];
	_a.select = function(n) {
		var t, e, r, u, i = [];
		n = b(n);
		for (var o = -1, a = this.length; ++o < a;) {
			i.push(t = []), t.parentNode = (r = this[o])
				.parentNode;
			for (var c = -1, s = r.length; ++c < s;)(u = r[c]) ? (t.push(e = n.call(u, u.__data__, c, o)), e && "__data__" in u && (e.__data__ = u.__data__)) : t.push(null)
		}
		return _(i)
	}, _a.selectAll = function(n) {
		var t, e, r = [];
		n = w(n);
		for (var u = -1, i = this.length; ++u < i;)
			for (var o = this[u], a = -1, c = o.length; ++a < c;)(e = o[a]) && (r.push(t = Qo(n.call(e, e.__data__, a, u))), t.parentNode = e);
		return _(r)
	};
	var ba = {
		svg: "http://www.w3.org/2000/svg",
		xhtml: "http://www.w3.org/1999/xhtml",
		xlink: "http://www.w3.org/1999/xlink",
		xml: "http://www.w3.org/XML/1998/namespace",
		xmlns: "http://www.w3.org/2000/xmlns/"
	};
	Go.ns = {
		prefix: ba,
		qualify: function(n) {
			var t = n.indexOf(":"),
				e = n;
			return t >= 0 && (e = n.substring(0, t), n = n.substring(t + 1)), ba.hasOwnProperty(e) ? {
				space: ba[e],
				local: n
			} : n
		}
	}, _a.attr = function(n, t) {
		if (arguments.length < 2) {
			if ("string" == typeof n) {
				var e = this.node();
				return n = Go.ns.qualify(n), n.local ? e.getAttributeNS(n.space, n.local) : e.getAttribute(n)
			}
			for (t in n) this.each(S(t, n[t]));
			return this
		}
		return this.each(S(n, t))
	}, _a.classed = function(n, t) {
		if (arguments.length < 2) {
			if ("string" == typeof n) {
				var e = this.node(),
					r = (n = A(n))
						.length,
					u = -1;
				if (t = e.classList) {
					for (; ++u < r;)
						if (!t.contains(n[u])) return !1
				} else
					for (t = e.getAttribute("class"); ++u < r;)
						if (!E(n[u])
							.test(t)) return !1; return !0
			}
			for (t in n) this.each(C(t, n[t]));
			return this
		}
		return this.each(C(n, t))
	}, _a.style = function(n, t, e) {
		var r = arguments.length;
		if (3 > r) {
			if ("string" != typeof n) {
				2 > r && (t = "");
				for (e in n) this.each(L(e, n[e], t));
				return this
			}
			if (2 > r) return ea.getComputedStyle(this.node(), null)
				.getPropertyValue(n);
			e = ""
		}
		return this.each(L(n, t, e))
	}, _a.property = function(n, t) {
		if (arguments.length < 2) {
			if ("string" == typeof n) return this.node()[n];
			for (t in n) this.each(T(t, n[t]));
			return this
		}
		return this.each(T(n, t))
	}, _a.text = function(n) {
		return arguments.length ? this.each("function" == typeof n ? function() {
			var t = n.apply(this, arguments);
			this.textContent = null == t ? "" : t
		} : null == n ? function() {
			this.textContent = ""
		} : function() {
			this.textContent = n
		}) : this.node()
			.textContent
	}, _a.html = function(n) {
		return arguments.length ? this.each("function" == typeof n ? function() {
			var t = n.apply(this, arguments);
			this.innerHTML = null == t ? "" : t
		} : null == n ? function() {
			this.innerHTML = ""
		} : function() {
			this.innerHTML = n
		}) : this.node()
			.innerHTML
	}, _a.append = function(n) {
		return n = q(n), this.select(function() {
			return this.appendChild(n.apply(this, arguments))
		})
	}, _a.insert = function(n, t) {
		return n = q(n), t = b(t), this.select(function() {
			return this.insertBefore(n.apply(this, arguments), t.apply(this, arguments) || null)
		})
	}, _a.remove = function() {
		return this.each(function() {
			var n = this.parentNode;
			n && n.removeChild(this)
		})
	}, _a.data = function(n, t) {
		function e(n, e) {
			var r, u, i, a = n.length,
				f = e.length,
				h = Math.min(a, f),
				g = new Array(f),
				p = new Array(f),
				v = new Array(a);
			if (t) {
				var d, m = new o,
					y = new o,
					x = [];
				for (r = -1; ++r < a;) d = t.call(u = n[r], u.__data__, r), m.has(d) ? v[r] = u : m.set(d, u), x.push(d);
				for (r = -1; ++r < f;) d = t.call(e, i = e[r], r), (u = m.get(d)) ? (g[r] = u, u.__data__ = i) : y.has(d) || (p[r] = z(i)), y.set(d, i), m.remove(d);
				for (r = -1; ++r < a;) m.has(x[r]) && (v[r] = n[r])
			} else {
				for (r = -1; ++r < h;) u = n[r], i = e[r], u ? (u.__data__ = i, g[r] = u) : p[r] = z(i);
				for (; f > r; ++r) p[r] = z(e[r]);
				for (; a > r; ++r) v[r] = n[r]
			}
			p.update = g, p.parentNode = g.parentNode = v.parentNode = n.parentNode, c.push(p), s.push(g), l.push(v)
		}
		var r, u, i = -1,
			a = this.length;
		if (!arguments.length) {
			for (n = new Array(a = (r = this[0])
				.length); ++i < a;)(u = r[i]) && (n[i] = u.__data__);
			return n
		}
		var c = U([]),
			s = _([]),
			l = _([]);
		if ("function" == typeof n)
			for (; ++i < a;) e(r = this[i], n.call(r, r.parentNode.__data__, i));
		else
			for (; ++i < a;) e(r = this[i], n);
		return s.enter = function() {
			return c
		}, s.exit = function() {
			return l
		}, s
	}, _a.datum = function(n) {
		return arguments.length ? this.property("__data__", n) : this.property("__data__")
	}, _a.filter = function(n) {
		var t, e, r, u = [];
		"function" != typeof n && (n = R(n));
		for (var i = 0, o = this.length; o > i; i++) {
			u.push(t = []), t.parentNode = (e = this[i])
				.parentNode;
			for (var a = 0, c = e.length; c > a; a++)(r = e[a]) && n.call(r, r.__data__, a, i) && t.push(r)
		}
		return _(u)
	}, _a.order = function() {
		for (var n = -1, t = this.length; ++n < t;)
			for (var e, r = this[n], u = r.length - 1, i = r[u]; --u >= 0;)(e = r[u]) && (i && i !== e.nextSibling && i.parentNode.insertBefore(e, i), i = e);
		return this
	}, _a.sort = function(n) {
		n = D.apply(this, arguments);
		for (var t = -1, e = this.length; ++t < e;) this[t].sort(n);
		return this.order()
	}, _a.each = function(n) {
		return P(this, function(t, e, r) {
			n.call(t, t.__data__, e, r)
		})
	}, _a.call = function(n) {
		var t = Qo(arguments);
		return n.apply(t[0] = this, t), this
	}, _a.empty = function() {
		return !this.node()
	}, _a.node = function() {
		for (var n = 0, t = this.length; t > n; n++)
			for (var e = this[n], r = 0, u = e.length; u > r; r++) {
				var i = e[r];
				if (i) return i
			}
		return null
	}, _a.size = function() {
		var n = 0;
		return this.each(function() {
			++n
		}), n
	};
	var wa = [];
	Go.selection.enter = U, Go.selection.enter.prototype = wa, wa.append = _a.append, wa.empty = _a.empty, wa.node = _a.node, wa.call = _a.call, wa.size = _a.size, wa.select = function(n) {
		for (var t, e, r, u, i, o = [], a = -1, c = this.length; ++a < c;) {
			r = (u = this[a])
				.update, o.push(t = []), t.parentNode = u.parentNode;
			for (var s = -1, l = u.length; ++s < l;)(i = u[s]) ? (t.push(r[s] = e = n.call(u.parentNode, i.__data__, s, a)), e.__data__ = i.__data__) : t.push(null)
		}
		return _(o)
	}, wa.insert = function(n, t) {
		return arguments.length < 2 && (t = j(this)), _a.insert.call(this, n, t)
	}, _a.transition = function() {
		for (var n, t, e = Ls || ++Ds, r = [], u = Ts || {
				time: Date.now(),
				ease: wu,
				delay: 0,
				duration: 250
			}, i = -1, o = this.length; ++i < o;) {
			r.push(n = []);
			for (var a = this[i], c = -1, s = a.length; ++c < s;)(t = a[c]) && Yo(t, c, e, u), n.push(t)
		}
		return Fo(r, e)
	}, _a.interrupt = function() {
		return this.each(H)
	}, Go.select = function(n) {
		var t = ["string" == typeof n ? ma(n, na) : n];
		return t.parentNode = ta, _([t])
	}, Go.selectAll = function(n) {
		var t = Qo("string" == typeof n ? ya(n, na) : n);
		return t.parentNode = ta, _([t])
	};
	var Sa = Go.select(ta);
	_a.on = function(n, t, e) {
		var r = arguments.length;
		if (3 > r) {
			if ("string" != typeof n) {
				2 > r && (t = !1);
				for (e in n) this.each(F(e, n[e], t));
				return this
			}
			if (2 > r) return (r = this.node()["__on" + n]) && r._;
			e = !1
		}
		return this.each(F(n, t, e))
	};
	var ka = Go.map({
		mouseenter: "mouseover",
		mouseleave: "mouseout"
	});
	ka.forEach(function(n) {
		"on" + n in na && ka.remove(n)
	});
	var Ea = "onselectstart" in na ? null : p(ta.style, "userSelect"),
		Aa = 0;
	Go.mouse = function(n) {
		return Z(n, x())
	}, Go.touches = function(n, t) {
		return arguments.length < 2 && (t = x()
			.touches), t ? Qo(t)
			.map(function(t) {
				var e = Z(n, t);
				return e.identifier = t.identifier, e
			}) : []
	}, Go.behavior.drag = function() {
		function n() {
			this.on("mousedown.drag", u)
				.on("touchstart.drag", i)
		}

		function t(n, t, u, i, o) {
			return function() {
				function a() {
					var n, e, r = t(h, v);
					r && (n = r[0] - x[0], e = r[1] - x[1], p |= n | e, x = r, g({
						type: "drag",
						x: r[0] + s[0],
						y: r[1] + s[1],
						dx: n,
						dy: e
					}))
				}

				function c() {
					t(h, v) && (m.on(i + d, null)
						.on(o + d, null), y(p && Go.event.target === f), g({
							type: "dragend"
						}))
				}
				var s, l = this,
					f = Go.event.target,
					h = l.parentNode,
					g = e.of(l, arguments),
					p = 0,
					v = n(),
					d = ".drag" + (null == v ? "" : "-" + v),
					m = Go.select(u())
						.on(i + d, a)
						.on(o + d, c),
					y = Y(),
					x = t(h, v);
				r ? (s = r.apply(l, arguments), s = [s.x - x[0], s.y - x[1]]) : s = [0, 0], g({
					type: "dragstart"
				})
			}
		}
		var e = M(n, "drag", "dragstart", "dragend"),
			r = null,
			u = t(v, Go.mouse, X, "mousemove", "mouseup"),
			i = t(V, Go.touch, $, "touchmove", "touchend");
		return n.origin = function(t) {
			return arguments.length ? (r = t, n) : r
		}, Go.rebind(n, e, "on")
	};
	var Ca = Math.PI,
		Na = 2 * Ca,
		La = Ca / 2,
		Ta = 1e-6,
		qa = Ta * Ta,
		za = Ca / 180,
		Ra = 180 / Ca,
		Da = Math.SQRT2,
		Pa = 2,
		Ua = 4;
	Go.interpolateZoom = function(n, t) {
		function e(n) {
			var t = n * y;
			if (m) {
				var e = Q(v),
					o = i / (Pa * h) * (e * nt(Da * t + v) - K(v));
				return [r + o * s, u + o * l, i * e / Q(Da * t + v)]
			}
			return [r + n * s, u + n * l, i * Math.exp(Da * t)]
		}
		var r = n[0],
			u = n[1],
			i = n[2],
			o = t[0],
			a = t[1],
			c = t[2],
			s = o - r,
			l = a - u,
			f = s * s + l * l,
			h = Math.sqrt(f),
			g = (c * c - i * i + Ua * f) / (2 * i * Pa * h),
			p = (c * c - i * i - Ua * f) / (2 * c * Pa * h),
			v = Math.log(Math.sqrt(g * g + 1) - g),
			d = Math.log(Math.sqrt(p * p + 1) - p),
			m = d - v,
			y = (m || Math.log(c / i)) / Da;
		return e.duration = 1e3 * y, e
	}, Go.behavior.zoom = function() {
		function n(n) {
			n.on(A, s)
				.on(Fa + ".zoom", f)
				.on(C, h)
				.on("dblclick.zoom", g)
				.on(L, l)
		}

		function t(n) {
			return [(n[0] - S.x) / S.k, (n[1] - S.y) / S.k]
		}

		function e(n) {
			return [n[0] * S.k + S.x, n[1] * S.k + S.y]
		}

		function r(n) {
			S.k = Math.max(E[0], Math.min(E[1], n))
		}

		function u(n, t) {
			t = e(t), S.x += n[0] - t[0], S.y += n[1] - t[1]
		}

		function i() {
			_ && _.domain(x.range()
				.map(function(n) {
					return (n - S.x) / S.k
				})
				.map(x.invert)), w && w.domain(b.range()
				.map(function(n) {
					return (n - S.y) / S.k
				})
				.map(b.invert))
		}

		function o(n) {
			n({
				type: "zoomstart"
			})
		}

		function a(n) {
			i(), n({
				type: "zoom",
				scale: S.k,
				translate: [S.x, S.y]
			})
		}

		function c(n) {
			n({
				type: "zoomend"
			})
		}

		function s() {
			function n() {
				l = 1, u(Go.mouse(r), g), a(s)
			}

			function e() {
				f.on(C, ea === r ? h : null)
					.on(N, null), p(l && Go.event.target === i), c(s)
			}
			var r = this,
				i = Go.event.target,
				s = T.of(r, arguments),
				l = 0,
				f = Go.select(ea)
					.on(C, n)
					.on(N, e),
				g = t(Go.mouse(r)),
				p = Y();
			H.call(r), o(s)
		}

		function l() {
			function n() {
				var n = Go.touches(g);
				return h = S.k, n.forEach(function(n) {
					n.identifier in v && (v[n.identifier] = t(n))
				}), n
			}

			function e() {
				for (var t = Go.event.changedTouches, e = 0, i = t.length; i > e; ++e) v[t[e].identifier] = null;
				var o = n(),
					c = Date.now();
				if (1 === o.length) {
					if (500 > c - m) {
						var s = o[0],
							l = v[s.identifier];
						r(2 * S.k), u(s, l), y(), a(p)
					}
					m = c
				} else if (o.length > 1) {
					var s = o[0],
						f = o[1],
						h = s[0] - f[0],
						g = s[1] - f[1];
					d = h * h + g * g
				}
			}

			function i() {
				for (var n, t, e, i, o = Go.touches(g), c = 0, s = o.length; s > c; ++c, i = null)
					if (e = o[c], i = v[e.identifier]) {
						if (t) break;
						n = e, t = i
					}
				if (i) {
					var l = (l = e[0] - n[0]) * l + (l = e[1] - n[1]) * l,
						f = d && Math.sqrt(l / d);
					n = [(n[0] + e[0]) / 2, (n[1] + e[1]) / 2], t = [(t[0] + i[0]) / 2, (t[1] + i[1]) / 2], r(f * h)
				}
				m = null, u(n, t), a(p)
			}

			function f() {
				if (Go.event.touches.length) {
					for (var t = Go.event.changedTouches, e = 0, r = t.length; r > e; ++e) delete v[t[e].identifier];
					for (var u in v) return void n()
				}
				b.on(x, null), w.on(A, s)
					.on(L, l), k(), c(p)
			}
			var h, g = this,
				p = T.of(g, arguments),
				v = {}, d = 0,
				x = ".zoom-" + Go.event.changedTouches[0].identifier,
				M = "touchmove" + x,
				_ = "touchend" + x,
				b = Go.select(Go.event.target)
					.on(M, i)
					.on(_, f),
				w = Go.select(g)
					.on(A, null)
					.on(L, e),
				k = Y();
			H.call(g), e(), o(p)
		}

		function f() {
			var n = T.of(this, arguments);
			d ? clearTimeout(d) : (H.call(this), o(n)), d = setTimeout(function() {
				d = null, c(n)
			}, 50), y();
			var e = v || Go.mouse(this);
			p || (p = t(e)), r(Math.pow(2, .002 * ja()) * S.k), u(e, p), a(n)
		}

		function h() {
			p = null
		}

		function g() {
			var n = T.of(this, arguments),
				e = Go.mouse(this),
				i = t(e),
				s = Math.log(S.k) / Math.LN2;
			o(n), r(Math.pow(2, Go.event.shiftKey ? Math.ceil(s) - 1 : Math.floor(s) + 1)), u(e, i), a(n), c(n)
		}
		var p, v, d, m, x, _, b, w, S = {
				x: 0,
				y: 0,
				k: 1
			}, k = [960, 500],
			E = Ha,
			A = "mousedown.zoom",
			C = "mousemove.zoom",
			N = "mouseup.zoom",
			L = "touchstart.zoom",
			T = M(n, "zoomstart", "zoom", "zoomend");
		return n.event = function(n) {
			n.each(function() {
				var n = T.of(this, arguments),
					t = S;
				Ls ? Go.select(this)
					.transition()
					.each("start.zoom", function() {
						S = this.__chart__ || {
							x: 0,
							y: 0,
							k: 1
						}, o(n)
					})
					.tween("zoom:zoom", function() {
						var e = k[0],
							r = k[1],
							u = e / 2,
							i = r / 2,
							o = Go.interpolateZoom([(u - S.x) / S.k, (i - S.y) / S.k, e / S.k], [(u - t.x) / t.k, (i - t.y) / t.k, e / t.k]);
						return function(t) {
							var r = o(t),
								c = e / r[2];
							this.__chart__ = S = {
								x: u - r[0] * c,
								y: i - r[1] * c,
								k: c
							}, a(n)
						}
					})
					.each("end.zoom", function() {
						c(n)
					}) : (this.__chart__ = S, o(n), a(n), c(n))
			})
		}, n.translate = function(t) {
			return arguments.length ? (S = {
				x: +t[0],
				y: +t[1],
				k: S.k
			}, i(), n) : [S.x, S.y]
		}, n.scale = function(t) {
			return arguments.length ? (S = {
				x: S.x,
				y: S.y,
				k: +t
			}, i(), n) : S.k
		}, n.scaleExtent = function(t) {
			return arguments.length ? (E = null == t ? Ha : [+t[0], +t[1]], n) : E
		}, n.center = function(t) {
			return arguments.length ? (v = t && [+t[0], +t[1]], n) : v
		}, n.size = function(t) {
			return arguments.length ? (k = t && [+t[0], +t[1]], n) : k
		}, n.x = function(t) {
			return arguments.length ? (_ = t, x = t.copy(), S = {
				x: 0,
				y: 0,
				k: 1
			}, n) : _
		}, n.y = function(t) {
			return arguments.length ? (w = t, b = t.copy(), S = {
				x: 0,
				y: 0,
				k: 1
			}, n) : w
		}, Go.rebind(n, T, "on")
	};
	var ja, Ha = [0, 1 / 0],
		Fa = "onwheel" in na ? (ja = function() {
			return -Go.event.deltaY * (Go.event.deltaMode ? 120 : 1)
		}, "wheel") : "onmousewheel" in na ? (ja = function() {
			return Go.event.wheelDelta
		}, "mousewheel") : (ja = function() {
			return -Go.event.detail
		}, "MozMousePixelScroll");
	et.prototype.toString = function() {
		return this.rgb() + ""
	}, Go.hsl = function(n, t, e) {
		return 1 === arguments.length ? n instanceof ut ? rt(n.h, n.s, n.l) : _t("" + n, bt, rt) : rt(+n, +t, +e)
	};
	var Oa = ut.prototype = new et;
	Oa.brighter = function(n) {
		return n = Math.pow(.7, arguments.length ? n : 1), rt(this.h, this.s, this.l / n)
	}, Oa.darker = function(n) {
		return n = Math.pow(.7, arguments.length ? n : 1), rt(this.h, this.s, n * this.l)
	}, Oa.rgb = function() {
		return it(this.h, this.s, this.l)
	}, Go.hcl = function(n, t, e) {
		return 1 === arguments.length ? n instanceof at ? ot(n.h, n.c, n.l) : n instanceof lt ? ht(n.l, n.a, n.b) : ht((n = wt((n = Go.rgb(n))
				.r, n.g, n.b))
			.l, n.a, n.b) : ot(+n, +t, +e)
	};
	var Ia = at.prototype = new et;
	Ia.brighter = function(n) {
		return ot(this.h, this.c, Math.min(100, this.l + Ya * (arguments.length ? n : 1)))
	}, Ia.darker = function(n) {
		return ot(this.h, this.c, Math.max(0, this.l - Ya * (arguments.length ? n : 1)))
	}, Ia.rgb = function() {
		return ct(this.h, this.c, this.l)
			.rgb()
	}, Go.lab = function(n, t, e) {
		return 1 === arguments.length ? n instanceof lt ? st(n.l, n.a, n.b) : n instanceof at ? ct(n.l, n.c, n.h) : wt((n = Go.rgb(n))
			.r, n.g, n.b) : st(+n, +t, +e)
	};
	var Ya = 18,
		Za = .95047,
		Va = 1,
		$a = 1.08883,
		Xa = lt.prototype = new et;
	Xa.brighter = function(n) {
		return st(Math.min(100, this.l + Ya * (arguments.length ? n : 1)), this.a, this.b)
	}, Xa.darker = function(n) {
		return st(Math.max(0, this.l - Ya * (arguments.length ? n : 1)), this.a, this.b)
	}, Xa.rgb = function() {
		return ft(this.l, this.a, this.b)
	}, Go.rgb = function(n, t, e) {
		return 1 === arguments.length ? n instanceof xt ? yt(n.r, n.g, n.b) : _t("" + n, yt, it) : yt(~~n, ~~t, ~~e)
	};
	var Ba = xt.prototype = new et;
	Ba.brighter = function(n) {
		n = Math.pow(.7, arguments.length ? n : 1);
		var t = this.r,
			e = this.g,
			r = this.b,
			u = 30;
		return t || e || r ? (t && u > t && (t = u), e && u > e && (e = u), r && u > r && (r = u), yt(Math.min(255, ~~ (t / n)), Math.min(255, ~~ (e / n)), Math.min(255, ~~ (r / n)))) : yt(u, u, u)
	}, Ba.darker = function(n) {
		return n = Math.pow(.7, arguments.length ? n : 1), yt(~~(n * this.r), ~~ (n * this.g), ~~ (n * this.b))
	}, Ba.hsl = function() {
		return bt(this.r, this.g, this.b)
	}, Ba.toString = function() {
		return "#" + Mt(this.r) + Mt(this.g) + Mt(this.b)
	};
	var Ja = Go.map({
		aliceblue: 15792383,
		antiquewhite: 16444375,
		aqua: 65535,
		aquamarine: 8388564,
		azure: 15794175,
		beige: 16119260,
		bisque: 16770244,
		black: 0,
		blanchedalmond: 16772045,
		blue: 255,
		blueviolet: 9055202,
		brown: 10824234,
		burlywood: 14596231,
		cadetblue: 6266528,
		chartreuse: 8388352,
		chocolate: 13789470,
		coral: 16744272,
		cornflowerblue: 6591981,
		cornsilk: 16775388,
		crimson: 14423100,
		cyan: 65535,
		darkblue: 139,
		darkcyan: 35723,
		darkgoldenrod: 12092939,
		darkgray: 11119017,
		darkgreen: 25600,
		darkgrey: 11119017,
		darkkhaki: 12433259,
		darkmagenta: 9109643,
		darkolivegreen: 5597999,
		darkorange: 16747520,
		darkorchid: 10040012,
		darkred: 9109504,
		darksalmon: 15308410,
		darkseagreen: 9419919,
		darkslateblue: 4734347,
		darkslategray: 3100495,
		darkslategrey: 3100495,
		darkturquoise: 52945,
		darkviolet: 9699539,
		deeppink: 16716947,
		deepskyblue: 49151,
		dimgray: 6908265,
		dimgrey: 6908265,
		dodgerblue: 2003199,
		firebrick: 11674146,
		floralwhite: 16775920,
		forestgreen: 2263842,
		fuchsia: 16711935,
		gainsboro: 14474460,
		ghostwhite: 16316671,
		gold: 16766720,
		goldenrod: 14329120,
		gray: 8421504,
		green: 32768,
		greenyellow: 11403055,
		grey: 8421504,
		honeydew: 15794160,
		hotpink: 16738740,
		indianred: 13458524,
		indigo: 4915330,
		ivory: 16777200,
		khaki: 15787660,
		lavender: 15132410,
		lavenderblush: 16773365,
		lawngreen: 8190976,
		lemonchiffon: 16775885,
		lightblue: 11393254,
		lightcoral: 15761536,
		lightcyan: 14745599,
		lightgoldenrodyellow: 16448210,
		lightgray: 13882323,
		lightgreen: 9498256,
		lightgrey: 13882323,
		lightpink: 16758465,
		lightsalmon: 16752762,
		lightseagreen: 2142890,
		lightskyblue: 8900346,
		lightslategray: 7833753,
		lightslategrey: 7833753,
		lightsteelblue: 11584734,
		lightyellow: 16777184,
		lime: 65280,
		limegreen: 3329330,
		linen: 16445670,
		magenta: 16711935,
		maroon: 8388608,
		mediumaquamarine: 6737322,
		mediumblue: 205,
		mediumorchid: 12211667,
		mediumpurple: 9662683,
		mediumseagreen: 3978097,
		mediumslateblue: 8087790,
		mediumspringgreen: 64154,
		mediumturquoise: 4772300,
		mediumvioletred: 13047173,
		midnightblue: 1644912,
		mintcream: 16121850,
		mistyrose: 16770273,
		moccasin: 16770229,
		navajowhite: 16768685,
		navy: 128,
		oldlace: 16643558,
		olive: 8421376,
		olivedrab: 7048739,
		orange: 16753920,
		orangered: 16729344,
		orchid: 14315734,
		palegoldenrod: 15657130,
		palegreen: 10025880,
		paleturquoise: 11529966,
		palevioletred: 14381203,
		papayawhip: 16773077,
		peachpuff: 16767673,
		peru: 13468991,
		pink: 16761035,
		plum: 14524637,
		powderblue: 11591910,
		purple: 8388736,
		red: 16711680,
		rosybrown: 12357519,
		royalblue: 4286945,
		saddlebrown: 9127187,
		salmon: 16416882,
		sandybrown: 16032864,
		seagreen: 3050327,
		seashell: 16774638,
		sienna: 10506797,
		silver: 12632256,
		skyblue: 8900331,
		slateblue: 6970061,
		slategray: 7372944,
		slategrey: 7372944,
		snow: 16775930,
		springgreen: 65407,
		steelblue: 4620980,
		tan: 13808780,
		teal: 32896,
		thistle: 14204888,
		tomato: 16737095,
		turquoise: 4251856,
		violet: 15631086,
		wheat: 16113331,
		white: 16777215,
		whitesmoke: 16119285,
		yellow: 16776960,
		yellowgreen: 10145074
	});
	Ja.forEach(function(n, t) {
		Ja.set(n, dt(t))
	}), Go.functor = Et, Go.xhr = Ct(At), Go.dsv = function(n, t) {
		function e(n, e, i) {
			arguments.length < 3 && (i = e, e = null);
			var o = Nt(n, t, null == e ? r : u(e), i);
			return o.row = function(n) {
				return arguments.length ? o.response(null == (e = n) ? r : u(n)) : e
			}, o
		}

		function r(n) {
			return e.parse(n.responseText)
		}

		function u(n) {
			return function(t) {
				return e.parse(t.responseText, n)
			}
		}

		function i(t) {
			return t.map(o)
				.join(n)
		}

		function o(n) {
			return a.test(n) ? '"' + n.replace(/\"/g, '""') + '"' : n
		}
		var a = new RegExp('["' + n + "\n]"),
			c = n.charCodeAt(0);
		return e.parse = function(n, t) {
			var r;
			return e.parseRows(n, function(n, e) {
				if (r) return r(n, e - 1);
				var u = new Function("d", "return {" + n.map(function(n, t) {
						return JSON.stringify(n) + ": d[" + t + "]"
					})
					.join(",") + "}");
				r = t ? function(n, e) {
					return t(u(n), e)
				} : u
			})
		}, e.parseRows = function(n, t) {
			function e() {
				if (l >= s) return o;
				if (u) return u = !1, i;
				var t = l;
				if (34 === n.charCodeAt(t)) {
					for (var e = t; e++ < s;)
						if (34 === n.charCodeAt(e)) {
							if (34 !== n.charCodeAt(e + 1)) break;
							++e
						}
					l = e + 2;
					var r = n.charCodeAt(e + 1);
					return 13 === r ? (u = !0, 10 === n.charCodeAt(e + 2) && ++l) : 10 === r && (u = !0), n.substring(t + 1, e)
						.replace(/""/g, '"')
				}
				for (; s > l;) {
					var r = n.charCodeAt(l++),
						a = 1;
					if (10 === r) u = !0;
					else if (13 === r) u = !0, 10 === n.charCodeAt(l) && (++l, ++a);
					else if (r !== c) continue;
					return n.substring(t, l - a)
				}
				return n.substring(t)
			}
			for (var r, u, i = {}, o = {}, a = [], s = n.length, l = 0, f = 0;
				(r = e()) !== o;) {
				for (var h = []; r !== i && r !== o;) h.push(r), r = e();
				(!t || (h = t(h, f++))) && a.push(h)
			}
			return a
		}, e.format = function(t) {
			if (Array.isArray(t[0])) return e.formatRows(t);
			var r = new h,
				u = [];
			return t.forEach(function(n) {
				for (var t in n) r.has(t) || u.push(r.add(t))
			}), [u.map(o)
				.join(n)
			].concat(t.map(function(t) {
				return u.map(function(n) {
					return o(t[n])
				})
					.join(n)
			}))
				.join("\n")
		}, e.formatRows = function(n) {
			return n.map(i)
				.join("\n")
		}, e
	}, Go.csv = Go.dsv(",", "text/csv"), Go.tsv = Go.dsv("	", "text/tab-separated-values"), Go.touch = function(n, t, e) {
		if (arguments.length < 3 && (e = t, t = x()
			.changedTouches), t)
			for (var r, u = 0, i = t.length; i > u; ++u)
				if ((r = t[u])
					.identifier === e) return Z(n, r)
	};
	var Wa, Ga, Ka, Qa, nc, tc = ea[p(ea, "requestAnimationFrame")] || function(n) {
		setTimeout(n, 17)
	};
	Go.timer = function(n, t, e) {
		var r = arguments.length;
		2 > r && (t = 0), 3 > r && (e = Date.now());
		var u = e + t,
			i = {
				c: n,
				t: u,
				f: !1,
				n: null
			};
		Ga ? Ga.n = i : Wa = i, Ga = i, Ka || (Qa = clearTimeout(Qa), Ka = 1, tc(Tt))
	}, Go.timer.flush = function() {
		qt(), zt()
	}, Go.round = function(n, t) {
		return t ? Math.round(n * (t = Math.pow(10, t))) / t : Math.round(n)
	};
	var ec = ["y", "z", "a", "f", "p", "n", "\xb5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"].map(Dt);
	Go.formatPrefix = function(n, t) {
		var e = 0;
		return n && (0 > n && (n *= -1), t && (n = Go.round(n, Rt(n, t))), e = 1 + Math.floor(1e-12 + Math.log(n) / Math.LN10), e = Math.max(-24, Math.min(24, 3 * Math.floor((e - 1) / 3)))), ec[8 + e / 3]
	};
	var rc = /(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i,
		uc = Go.map({
			b: function(n) {
				return n.toString(2)
			},
			c: function(n) {
				return String.fromCharCode(n)
			},
			o: function(n) {
				return n.toString(8)
			},
			x: function(n) {
				return n.toString(16)
			},
			X: function(n) {
				return n.toString(16)
					.toUpperCase()
			},
			g: function(n, t) {
				return n.toPrecision(t)
			},
			e: function(n, t) {
				return n.toExponential(t)
			},
			f: function(n, t) {
				return n.toFixed(t)
			},
			r: function(n, t) {
				return (n = Go.round(n, Rt(n, t)))
					.toFixed(Math.max(0, Math.min(20, Rt(n * (1 + 1e-15), t))))
			}
		}),
		ic = Go.time = {}, oc = Date;
	jt.prototype = {
		getDate: function() {
			return this._.getUTCDate()
		},
		getDay: function() {
			return this._.getUTCDay()
		},
		getFullYear: function() {
			return this._.getUTCFullYear()
		},
		getHours: function() {
			return this._.getUTCHours()
		},
		getMilliseconds: function() {
			return this._.getUTCMilliseconds()
		},
		getMinutes: function() {
			return this._.getUTCMinutes()
		},
		getMonth: function() {
			return this._.getUTCMonth()
		},
		getSeconds: function() {
			return this._.getUTCSeconds()
		},
		getTime: function() {
			return this._.getTime()
		},
		getTimezoneOffset: function() {
			return 0
		},
		valueOf: function() {
			return this._.valueOf()
		},
		setDate: function() {
			ac.setUTCDate.apply(this._, arguments)
		},
		setDay: function() {
			ac.setUTCDay.apply(this._, arguments)
		},
		setFullYear: function() {
			ac.setUTCFullYear.apply(this._, arguments)
		},
		setHours: function() {
			ac.setUTCHours.apply(this._, arguments)
		},
		setMilliseconds: function() {
			ac.setUTCMilliseconds.apply(this._, arguments)
		},
		setMinutes: function() {
			ac.setUTCMinutes.apply(this._, arguments)
		},
		setMonth: function() {
			ac.setUTCMonth.apply(this._, arguments)
		},
		setSeconds: function() {
			ac.setUTCSeconds.apply(this._, arguments)
		},
		setTime: function() {
			ac.setTime.apply(this._, arguments)
		}
	};
	var ac = Date.prototype;
	ic.year = Ht(function(n) {
		return n = ic.day(n), n.setMonth(0, 1), n
	}, function(n, t) {
		n.setFullYear(n.getFullYear() + t)
	}, function(n) {
		return n.getFullYear()
	}), ic.years = ic.year.range, ic.years.utc = ic.year.utc.range, ic.day = Ht(function(n) {
		var t = new oc(2e3, 0);
		return t.setFullYear(n.getFullYear(), n.getMonth(), n.getDate()), t
	}, function(n, t) {
		n.setDate(n.getDate() + t)
	}, function(n) {
		return n.getDate() - 1
	}), ic.days = ic.day.range, ic.days.utc = ic.day.utc.range, ic.dayOfYear = function(n) {
		var t = ic.year(n);
		return Math.floor((n - t - 6e4 * (n.getTimezoneOffset() - t.getTimezoneOffset())) / 864e5)
	}, ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"].forEach(function(n, t) {
		t = 7 - t;
		var e = ic[n] = Ht(function(n) {
			return (n = ic.day(n))
				.setDate(n.getDate() - (n.getDay() + t) % 7), n
		}, function(n, t) {
			n.setDate(n.getDate() + 7 * Math.floor(t))
		}, function(n) {
			var e = ic.year(n)
				.getDay();
			return Math.floor((ic.dayOfYear(n) + (e + t) % 7) / 7) - (e !== t)
		});
		ic[n + "s"] = e.range, ic[n + "s"].utc = e.utc.range, ic[n + "OfYear"] = function(n) {
			var e = ic.year(n)
				.getDay();
			return Math.floor((ic.dayOfYear(n) + (e + t) % 7) / 7)
		}
	}), ic.week = ic.sunday, ic.weeks = ic.sunday.range, ic.weeks.utc = ic.sunday.utc.range, ic.weekOfYear = ic.sundayOfYear;
	var cc = {
		"-": "",
		_: " ",
		0: "0"
	}, sc = /^\s*\d+/,
		lc = /^%/;
	Go.locale = function(n) {
		return {
			numberFormat: Pt(n),
			timeFormat: Ot(n)
		}
	};
	var fc = Go.locale({
		decimal: ".",
		thousands: ",",
		grouping: [3],
		currency: ["$", ""],
		dateTime: "%a %b %e %X %Y",
		date: "%m/%d/%Y",
		time: "%H:%M:%S",
		periods: ["AM", "PM"],
		days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
		shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
		months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
		shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
	});
	Go.format = fc.numberFormat, Go.geo = {}, ce.prototype = {
		s: 0,
		t: 0,
		add: function(n) {
			se(n, this.t, hc), se(hc.s, this.s, this), this.s ? this.t += hc.t : this.s = hc.t
		},
		reset: function() {
			this.s = this.t = 0
		},
		valueOf: function() {
			return this.s
		}
	};
	var hc = new ce;
	Go.geo.stream = function(n, t) {
		n && gc.hasOwnProperty(n.type) ? gc[n.type](n, t) : le(n, t)
	};
	var gc = {
		Feature: function(n, t) {
			le(n.geometry, t)
		},
		FeatureCollection: function(n, t) {
			for (var e = n.features, r = -1, u = e.length; ++r < u;) le(e[r].geometry, t)
		}
	}, pc = {
			Sphere: function(n, t) {
				t.sphere()
			},
			Point: function(n, t) {
				n = n.coordinates, t.point(n[0], n[1], n[2])
			},
			MultiPoint: function(n, t) {
				for (var e = n.coordinates, r = -1, u = e.length; ++r < u;) n = e[r], t.point(n[0], n[1], n[2])
			},
			LineString: function(n, t) {
				fe(n.coordinates, t, 0)
			},
			MultiLineString: function(n, t) {
				for (var e = n.coordinates, r = -1, u = e.length; ++r < u;) fe(e[r], t, 0)
			},
			Polygon: function(n, t) {
				he(n.coordinates, t)
			},
			MultiPolygon: function(n, t) {
				for (var e = n.coordinates, r = -1, u = e.length; ++r < u;) he(e[r], t)
			},
			GeometryCollection: function(n, t) {
				for (var e = n.geometries, r = -1, u = e.length; ++r < u;) le(e[r], t)
			}
		};
	Go.geo.area = function(n) {
		return vc = 0, Go.geo.stream(n, mc), vc
	};
	var vc, dc = new ce,
		mc = {
			sphere: function() {
				vc += 4 * Ca
			},
			point: v,
			lineStart: v,
			lineEnd: v,
			polygonStart: function() {
				dc.reset(), mc.lineStart = ge
			},
			polygonEnd: function() {
				var n = 2 * dc;
				vc += 0 > n ? 4 * Ca + n : n, mc.lineStart = mc.lineEnd = mc.point = v
			}
		};
	Go.geo.bounds = function() {
		function n(n, t) {
			x.push(M = [l = n, h = n]), f > t && (f = t), t > g && (g = t)
		}

		function t(t, e) {
			var r = pe([t * za, e * za]);
			if (m) {
				var u = de(m, r),
					i = [u[1], -u[0], 0],
					o = de(i, u);
				xe(o), o = Me(o);
				var c = t - p,
					s = c > 0 ? 1 : -1,
					v = o[0] * Ra * s,
					d = fa(c) > 180;
				if (d ^ (v > s * p && s * t > v)) {
					var y = o[1] * Ra;
					y > g && (g = y)
				} else if (v = (v + 360) % 360 - 180, d ^ (v > s * p && s * t > v)) {
					var y = -o[1] * Ra;
					f > y && (f = y)
				} else f > e && (f = e), e > g && (g = e);
				d ? p > t ? a(l, t) > a(l, h) && (h = t) : a(t, h) > a(l, h) && (l = t) : h >= l ? (l > t && (l = t), t > h && (h = t)) : t > p ? a(l, t) > a(l, h) && (h = t) : a(t, h) > a(l, h) && (l = t)
			} else n(t, e);
			m = r, p = t
		}

		function e() {
			_.point = t
		}

		function r() {
			M[0] = l, M[1] = h, _.point = n, m = null
		}

		function u(n, e) {
			if (m) {
				var r = n - p;
				y += fa(r) > 180 ? r + (r > 0 ? 360 : -360) : r
			} else v = n, d = e;
			mc.point(n, e), t(n, e)
		}

		function i() {
			mc.lineStart()
		}

		function o() {
			u(v, d), mc.lineEnd(), fa(y) > Ta && (l = -(h = 180)), M[0] = l, M[1] = h, m = null
		}

		function a(n, t) {
			return (t -= n) < 0 ? t + 360 : t
		}

		function c(n, t) {
			return n[0] - t[0]
		}

		function s(n, t) {
			return t[0] <= t[1] ? t[0] <= n && n <= t[1] : n < t[0] || t[1] < n
		}
		var l, f, h, g, p, v, d, m, y, x, M, _ = {
				point: n,
				lineStart: e,
				lineEnd: r,
				polygonStart: function() {
					_.point = u, _.lineStart = i, _.lineEnd = o, y = 0, mc.polygonStart()
				},
				polygonEnd: function() {
					mc.polygonEnd(), _.point = n, _.lineStart = e, _.lineEnd = r, 0 > dc ? (l = -(h = 180), f = -(g = 90)) : y > Ta ? g = 90 : -Ta > y && (f = -90), M[0] = l, M[1] = h
				}
			};
		return function(n) {
			g = h = -(l = f = 1 / 0), x = [], Go.geo.stream(n, _);
			var t = x.length;
			if (t) {
				x.sort(c);
				for (var e, r = 1, u = x[0], i = [u]; t > r; ++r) e = x[r], s(e[0], u) || s(e[1], u) ? (a(u[0], e[1]) > a(u[0], u[1]) && (u[1] = e[1]), a(e[0], u[1]) > a(u[0], u[1]) && (u[0] = e[0])) : i.push(u = e);
				for (var o, e, p = -1 / 0, t = i.length - 1, r = 0, u = i[t]; t >= r; u = e, ++r) e = i[r], (o = a(u[1], e[0])) > p && (p = o, l = e[0], h = u[1])
			}
			return x = M = null, 1 / 0 === l || 1 / 0 === f ? [
				[0 / 0, 0 / 0],
				[0 / 0, 0 / 0]
			] : [
				[l, f],
				[h, g]
			]
		}
	}(), Go.geo.centroid = function(n) {
		yc = xc = Mc = _c = bc = wc = Sc = kc = Ec = Ac = Cc = 0, Go.geo.stream(n, Nc);
		var t = Ec,
			e = Ac,
			r = Cc,
			u = t * t + e * e + r * r;
		return qa > u && (t = wc, e = Sc, r = kc, Ta > xc && (t = Mc, e = _c, r = bc), u = t * t + e * e + r * r, qa > u) ? [0 / 0, 0 / 0] : [Math.atan2(e, t) * Ra, G(r / Math.sqrt(u)) * Ra]
	};
	var yc, xc, Mc, _c, bc, wc, Sc, kc, Ec, Ac, Cc, Nc = {
			sphere: v,
			point: be,
			lineStart: Se,
			lineEnd: ke,
			polygonStart: function() {
				Nc.lineStart = Ee
			},
			polygonEnd: function() {
				Nc.lineStart = Se
			}
		}, Lc = Te(Ae, Pe, je, [-Ca, -Ca / 2]),
		Tc = 1e9;
	Go.geo.clipExtent = function() {
		var n, t, e, r, u, i, o = {
				stream: function(n) {
					return u && (u.valid = !1), u = i(n), u.valid = !0, u
				},
				extent: function(a) {
					return arguments.length ? (i = Oe(n = +a[0][0], t = +a[0][1], e = +a[1][0], r = +a[1][1]), u && (u.valid = !1, u = null), o) : [
						[n, t],
						[e, r]
					]
				}
			};
		return o.extent([
			[0, 0],
			[960, 500]
		])
	}, (Go.geo.conicEqualArea = function() {
		return Ye(Ze)
	})
		.raw = Ze, Go.geo.albers = function() {
			return Go.geo.conicEqualArea()
				.rotate([96, 0])
				.center([-.6, 38.7])
				.parallels([29.5, 45.5])
				.scale(1070)
	}, Go.geo.albersUsa = function() {
		function n(n) {
			var i = n[0],
				o = n[1];
			return t = null, e(i, o), t || (r(i, o), t) || u(i, o), t
		}
		var t, e, r, u, i = Go.geo.albers(),
			o = Go.geo.conicEqualArea()
				.rotate([154, 0])
				.center([-2, 58.5])
				.parallels([55, 65]),
			a = Go.geo.conicEqualArea()
				.rotate([157, 0])
				.center([-3, 19.9])
				.parallels([8, 18]),
			c = {
				point: function(n, e) {
					t = [n, e]
				}
			};
		return n.invert = function(n) {
			var t = i.scale(),
				e = i.translate(),
				r = (n[0] - e[0]) / t,
				u = (n[1] - e[1]) / t;
			return (u >= .12 && .234 > u && r >= -.425 && -.214 > r ? o : u >= .166 && .234 > u && r >= -.214 && -.115 > r ? a : i)
				.invert(n)
		}, n.stream = function(n) {
			var t = i.stream(n),
				e = o.stream(n),
				r = a.stream(n);
			return {
				point: function(n, u) {
					t.point(n, u), e.point(n, u), r.point(n, u)
				},
				sphere: function() {
					t.sphere(), e.sphere(), r.sphere()
				},
				lineStart: function() {
					t.lineStart(), e.lineStart(), r.lineStart()
				},
				lineEnd: function() {
					t.lineEnd(), e.lineEnd(), r.lineEnd()
				},
				polygonStart: function() {
					t.polygonStart(), e.polygonStart(), r.polygonStart()
				},
				polygonEnd: function() {
					t.polygonEnd(), e.polygonEnd(), r.polygonEnd()
				}
			}
		}, n.precision = function(t) {
			return arguments.length ? (i.precision(t), o.precision(t), a.precision(t), n) : i.precision()
		}, n.scale = function(t) {
			return arguments.length ? (i.scale(t), o.scale(.35 * t), a.scale(t), n.translate(i.translate())) : i.scale()
		}, n.translate = function(t) {
			if (!arguments.length) return i.translate();
			var s = i.scale(),
				l = +t[0],
				f = +t[1];
			return e = i.translate(t)
				.clipExtent([
					[l - .455 * s, f - .238 * s],
					[l + .455 * s, f + .238 * s]
				])
				.stream(c)
				.point, r = o.translate([l - .307 * s, f + .201 * s])
				.clipExtent([
					[l - .425 * s + Ta, f + .12 * s + Ta],
					[l - .214 * s - Ta, f + .234 * s - Ta]
				])
				.stream(c)
				.point, u = a.translate([l - .205 * s, f + .212 * s])
				.clipExtent([
					[l - .214 * s + Ta, f + .166 * s + Ta],
					[l - .115 * s - Ta, f + .234 * s - Ta]
				])
				.stream(c)
				.point, n
		}, n.scale(1070)
	};
	var qc, zc, Rc, Dc, Pc, Uc, jc = {
			point: v,
			lineStart: v,
			lineEnd: v,
			polygonStart: function() {
				zc = 0, jc.lineStart = Ve
			},
			polygonEnd: function() {
				jc.lineStart = jc.lineEnd = jc.point = v, qc += fa(zc / 2)
			}
		}, Hc = {
			point: $e,
			lineStart: v,
			lineEnd: v,
			polygonStart: v,
			polygonEnd: v
		}, Fc = {
			point: Je,
			lineStart: We,
			lineEnd: Ge,
			polygonStart: function() {
				Fc.lineStart = Ke
			},
			polygonEnd: function() {
				Fc.point = Je, Fc.lineStart = We, Fc.lineEnd = Ge
			}
		};
	Go.geo.path = function() {
		function n(n) {
			return n && ("function" == typeof a && i.pointRadius(+a.apply(this, arguments)), o && o.valid || (o = u(i)), Go.geo.stream(n, o)), i.result()
		}

		function t() {
			return o = null, n
		}
		var e, r, u, i, o, a = 4.5;
		return n.area = function(n) {
			return qc = 0, Go.geo.stream(n, u(jc)), qc
		}, n.centroid = function(n) {
			return Mc = _c = bc = wc = Sc = kc = Ec = Ac = Cc = 0, Go.geo.stream(n, u(Fc)), Cc ? [Ec / Cc, Ac / Cc] : kc ? [wc / kc, Sc / kc] : bc ? [Mc / bc, _c / bc] : [0 / 0, 0 / 0]
		}, n.bounds = function(n) {
			return Pc = Uc = -(Rc = Dc = 1 / 0), Go.geo.stream(n, u(Hc)), [
				[Rc, Dc],
				[Pc, Uc]
			]
		}, n.projection = function(n) {
			return arguments.length ? (u = (e = n) ? n.stream || tr(n) : At, t()) : e
		}, n.context = function(n) {
			return arguments.length ? (i = null == (r = n) ? new Xe : new Qe(n), "function" != typeof a && i.pointRadius(a), t()) : r
		}, n.pointRadius = function(t) {
			return arguments.length ? (a = "function" == typeof t ? t : (i.pointRadius(+t), +t), n) : a
		}, n.projection(Go.geo.albersUsa())
			.context(null)
	}, Go.geo.transform = function(n) {
		return {
			stream: function(t) {
				var e = new er(t);
				for (var r in n) e[r] = n[r];
				return e
			}
		}
	}, er.prototype = {
		point: function(n, t) {
			this.stream.point(n, t)
		},
		sphere: function() {
			this.stream.sphere()
		},
		lineStart: function() {
			this.stream.lineStart()
		},
		lineEnd: function() {
			this.stream.lineEnd()
		},
		polygonStart: function() {
			this.stream.polygonStart()
		},
		polygonEnd: function() {
			this.stream.polygonEnd()
		}
	}, Go.geo.projection = ur, Go.geo.projectionMutator = ir, (Go.geo.equirectangular = function() {
		return ur(ar)
	})
		.raw = ar.invert = ar, Go.geo.rotation = function(n) {
			function t(t) {
				return t = n(t[0] * za, t[1] * za), t[0] *= Ra, t[1] *= Ra, t
			}
			return n = sr(n[0] % 360 * za, n[1] * za, n.length > 2 ? n[2] * za : 0), t.invert = function(t) {
				return t = n.invert(t[0] * za, t[1] * za), t[0] *= Ra, t[1] *= Ra, t
			}, t
	}, cr.invert = ar, Go.geo.circle = function() {
		function n() {
			var n = "function" == typeof r ? r.apply(this, arguments) : r,
				t = sr(-n[0] * za, -n[1] * za, 0)
					.invert,
				u = [];
			return e(null, null, 1, {
				point: function(n, e) {
					u.push(n = t(n, e)), n[0] *= Ra, n[1] *= Ra
				}
			}), {
				type: "Polygon",
				coordinates: [u]
			}
		}
		var t, e, r = [0, 0],
			u = 6;
		return n.origin = function(t) {
			return arguments.length ? (r = t, n) : r
		}, n.angle = function(r) {
			return arguments.length ? (e = gr((t = +r) * za, u * za), n) : t
		}, n.precision = function(r) {
			return arguments.length ? (e = gr(t * za, (u = +r) * za), n) : u
		}, n.angle(90)
	}, Go.geo.distance = function(n, t) {
		var e, r = (t[0] - n[0]) * za,
			u = n[1] * za,
			i = t[1] * za,
			o = Math.sin(r),
			a = Math.cos(r),
			c = Math.sin(u),
			s = Math.cos(u),
			l = Math.sin(i),
			f = Math.cos(i);
		return Math.atan2(Math.sqrt((e = f * o) * e + (e = s * l - c * f * a) * e), c * l + s * f * a)
	}, Go.geo.graticule = function() {
		function n() {
			return {
				type: "MultiLineString",
				coordinates: t()
			}
		}

		function t() {
			return Go.range(Math.ceil(i / d) * d, u, d)
				.map(h)
				.concat(Go.range(Math.ceil(s / m) * m, c, m)
					.map(g))
				.concat(Go.range(Math.ceil(r / p) * p, e, p)
					.filter(function(n) {
						return fa(n % d) > Ta
					})
					.map(l))
				.concat(Go.range(Math.ceil(a / v) * v, o, v)
					.filter(function(n) {
						return fa(n % m) > Ta
					})
					.map(f))
		}
		var e, r, u, i, o, a, c, s, l, f, h, g, p = 10,
			v = p,
			d = 90,
			m = 360,
			y = 2.5;
		return n.lines = function() {
			return t()
				.map(function(n) {
					return {
						type: "LineString",
						coordinates: n
					}
				})
		}, n.outline = function() {
			return {
				type: "Polygon",
				coordinates: [h(i)
					.concat(g(c)
						.slice(1), h(u)
						.reverse()
						.slice(1), g(s)
						.reverse()
						.slice(1))
				]
			}
		}, n.extent = function(t) {
			return arguments.length ? n.majorExtent(t)
				.minorExtent(t) : n.minorExtent()
		}, n.majorExtent = function(t) {
			return arguments.length ? (i = +t[0][0], u = +t[1][0], s = +t[0][1], c = +t[1][1], i > u && (t = i, i = u, u = t), s > c && (t = s, s = c, c = t), n.precision(y)) : [
				[i, s],
				[u, c]
			]
		}, n.minorExtent = function(t) {
			return arguments.length ? (r = +t[0][0], e = +t[1][0], a = +t[0][1], o = +t[1][1], r > e && (t = r, r = e, e = t), a > o && (t = a, a = o, o = t), n.precision(y)) : [
				[r, a],
				[e, o]
			]
		}, n.step = function(t) {
			return arguments.length ? n.majorStep(t)
				.minorStep(t) : n.minorStep()
		}, n.majorStep = function(t) {
			return arguments.length ? (d = +t[0], m = +t[1], n) : [d, m]
		}, n.minorStep = function(t) {
			return arguments.length ? (p = +t[0], v = +t[1], n) : [p, v]
		}, n.precision = function(t) {
			return arguments.length ? (y = +t, l = vr(a, o, 90), f = dr(r, e, y), h = vr(s, c, 90), g = dr(i, u, y), n) : y
		}, n.majorExtent([
			[-180, -90 + Ta],
			[180, 90 - Ta]
		])
			.minorExtent([
				[-180, -80 - Ta],
				[180, 80 + Ta]
			])
	}, Go.geo.greatArc = function() {
		function n() {
			return {
				type: "LineString",
				coordinates: [t || r.apply(this, arguments), e || u.apply(this, arguments)]
			}
		}
		var t, e, r = mr,
			u = yr;
		return n.distance = function() {
			return Go.geo.distance(t || r.apply(this, arguments), e || u.apply(this, arguments))
		}, n.source = function(e) {
			return arguments.length ? (r = e, t = "function" == typeof e ? null : e, n) : r
		}, n.target = function(t) {
			return arguments.length ? (u = t, e = "function" == typeof t ? null : t, n) : u
		}, n.precision = function() {
			return arguments.length ? n : 0
		}, n
	}, Go.geo.interpolate = function(n, t) {
		return xr(n[0] * za, n[1] * za, t[0] * za, t[1] * za)
	}, Go.geo.length = function(n) {
		return Oc = 0, Go.geo.stream(n, Ic), Oc
	};
	var Oc, Ic = {
			sphere: v,
			point: v,
			lineStart: Mr,
			lineEnd: v,
			polygonStart: v,
			polygonEnd: v
		}, Yc = _r(function(n) {
			return Math.sqrt(2 / (1 + n))
		}, function(n) {
			return 2 * Math.asin(n / 2)
		});
	(Go.geo.azimuthalEqualArea = function() {
		return ur(Yc)
	})
		.raw = Yc;
	var Zc = _r(function(n) {
		var t = Math.acos(n);
		return t && t / Math.sin(t)
	}, At);
	(Go.geo.azimuthalEquidistant = function() {
		return ur(Zc)
	})
		.raw = Zc, (Go.geo.conicConformal = function() {
			return Ye(br)
		})
		.raw = br, (Go.geo.conicEquidistant = function() {
			return Ye(wr)
		})
		.raw = wr;
	var Vc = _r(function(n) {
		return 1 / n
	}, Math.atan);
	(Go.geo.gnomonic = function() {
		return ur(Vc)
	})
		.raw = Vc, Sr.invert = function(n, t) {
			return [n, 2 * Math.atan(Math.exp(t)) - La]
	}, (Go.geo.mercator = function() {
		return kr(Sr)
	})
		.raw = Sr;
	var $c = _r(function() {
		return 1
	}, Math.asin);
	(Go.geo.orthographic = function() {
		return ur($c)
	})
		.raw = $c;
	var Xc = _r(function(n) {
		return 1 / (1 + n)
	}, function(n) {
		return 2 * Math.atan(n)
	});
	(Go.geo.stereographic = function() {
		return ur(Xc)
	})
		.raw = Xc, Er.invert = function(n, t) {
			return [-t, 2 * Math.atan(Math.exp(n)) - La]
	}, (Go.geo.transverseMercator = function() {
		var n = kr(Er),
			t = n.center,
			e = n.rotate;
		return n.center = function(n) {
			return n ? t([-n[1], n[0]]) : (n = t(), [-n[1], n[0]])
		}, n.rotate = function(n) {
			return n ? e([n[0], n[1], n.length > 2 ? n[2] + 90 : 90]) : (n = e(), [n[0], n[1], n[2] - 90])
		}, n.rotate([0, 0])
	})
		.raw = Er, Go.geom = {}, Go.geom.hull = function(n) {
			function t(n) {
				if (n.length < 3) return [];
				var t, u = Et(e),
					i = Et(r),
					o = n.length,
					a = [],
					c = [];
				for (t = 0; o > t; t++) a.push([+u.call(this, n[t], t), +i.call(this, n[t], t), t]);
				for (a.sort(Lr), t = 0; o > t; t++) c.push([a[t][0], -a[t][1]]);
				var s = Nr(a),
					l = Nr(c),
					f = l[0] === s[0],
					h = l[l.length - 1] === s[s.length - 1],
					g = [];
				for (t = s.length - 1; t >= 0; --t) g.push(n[a[s[t]][2]]);
				for (t = +f; t < l.length - h; ++t) g.push(n[a[l[t]][2]]);
				return g
			}
			var e = Ar,
				r = Cr;
			return arguments.length ? t(n) : (t.x = function(n) {
				return arguments.length ? (e = n, t) : e
			}, t.y = function(n) {
				return arguments.length ? (r = n, t) : r
			}, t)
	}, Go.geom.polygon = function(n) {
		return da(n, Bc), n
	};
	var Bc = Go.geom.polygon.prototype = [];
	Bc.area = function() {
		for (var n, t = -1, e = this.length, r = this[e - 1], u = 0; ++t < e;) n = r, r = this[t], u += n[1] * r[0] - n[0] * r[1];
		return .5 * u
	}, Bc.centroid = function(n) {
		var t, e, r = -1,
			u = this.length,
			i = 0,
			o = 0,
			a = this[u - 1];
		for (arguments.length || (n = -1 / (6 * this.area())); ++r < u;) t = a, a = this[r], e = t[0] * a[1] - a[0] * t[1], i += (t[0] + a[0]) * e, o += (t[1] + a[1]) * e;
		return [i * n, o * n]
	}, Bc.clip = function(n) {
		for (var t, e, r, u, i, o, a = zr(n), c = -1, s = this.length - zr(this), l = this[s - 1]; ++c < s;) {
			for (t = n.slice(), n.length = 0, u = this[c], i = t[(r = t.length - a) - 1], e = -1; ++e < r;) o = t[e], Tr(o, l, u) ? (Tr(i, l, u) || n.push(qr(i, o, l, u)), n.push(o)) : Tr(i, l, u) && n.push(qr(i, o, l, u)), i = o;
			a && n.push(n[0]), l = u
		}
		return n
	};
	var Jc, Wc, Gc, Kc, Qc, ns = [],
		ts = [];
	Or.prototype.prepare = function() {
		for (var n, t = this.edges, e = t.length; e--;) n = t[e].edge, n.b && n.a || t.splice(e, 1);
		return t.sort(Yr), t.length
	}, Qr.prototype = {
		start: function() {
			return this.edge.l === this.site ? this.edge.a : this.edge.b
		},
		end: function() {
			return this.edge.l === this.site ? this.edge.b : this.edge.a
		}
	}, nu.prototype = {
		insert: function(n, t) {
			var e, r, u;
			if (n) {
				if (t.P = n, t.N = n.N, n.N && (n.N.P = t), n.N = t, n.R) {
					for (n = n.R; n.L;) n = n.L;
					n.L = t
				} else n.R = t;
				e = n
			} else this._ ? (n = uu(this._), t.P = null, t.N = n, n.P = n.L = t, e = n) : (t.P = t.N = null, this._ = t, e = null);
			for (t.L = t.R = null, t.U = e, t.C = !0, n = t; e && e.C;) r = e.U, e === r.L ? (u = r.R, u && u.C ? (e.C = u.C = !1, r.C = !0, n = r) : (n === e.R && (eu(this, e), n = e, e = n.U), e.C = !1, r.C = !0, ru(this, r))) : (u = r.L, u && u.C ? (e.C = u.C = !1, r.C = !0, n = r) : (n === e.L && (ru(this, e), n = e, e = n.U), e.C = !1, r.C = !0, eu(this, r))), e = n.U;
			this._.C = !1
		},
		remove: function(n) {
			n.N && (n.N.P = n.P), n.P && (n.P.N = n.N), n.N = n.P = null;
			var t, e, r, u = n.U,
				i = n.L,
				o = n.R;
			if (e = i ? o ? uu(o) : i : o, u ? u.L === n ? u.L = e : u.R = e : this._ = e, i && o ? (r = e.C, e.C = n.C, e.L = i, i.U = e, e !== o ? (u = e.U, e.U = n.U, n = e.R, u.L = n, e.R = o, o.U = e) : (e.U = u, u = e, n = e.R)) : (r = n.C, n = e), n && (n.U = u), !r) {
				if (n && n.C) return n.C = !1, void 0;
				do {
					if (n === this._) break;
					if (n === u.L) {
						if (t = u.R, t.C && (t.C = !1, u.C = !0, eu(this, u), t = u.R), t.L && t.L.C || t.R && t.R.C) {
							t.R && t.R.C || (t.L.C = !1, t.C = !0, ru(this, t), t = u.R), t.C = u.C, u.C = t.R.C = !1, eu(this, u), n = this._;
							break
						}
					} else if (t = u.L, t.C && (t.C = !1, u.C = !0, ru(this, u), t = u.L), t.L && t.L.C || t.R && t.R.C) {
						t.L && t.L.C || (t.R.C = !1, t.C = !0, eu(this, t), t = u.L), t.C = u.C, u.C = t.L.C = !1, ru(this, u), n = this._;
						break
					}
					t.C = !0, n = u, u = u.U
				} while (!n.C);
				n && (n.C = !1)
			}
		}
	}, Go.geom.voronoi = function(n) {
		function t(n) {
			var t = new Array(n.length),
				r = a[0][0],
				u = a[0][1],
				i = a[1][0],
				o = a[1][1];
			return iu(e(n), a)
				.cells.forEach(function(e, a) {
					var c = e.edges,
						s = e.site,
						l = t[a] = c.length ? c.map(function(n) {
							var t = n.start();
							return [t.x, t.y]
						}) : s.x >= r && s.x <= i && s.y >= u && s.y <= o ? [
							[r, o],
							[i, o],
							[i, u],
							[r, u]
						] : [];
					l.point = n[a]
				}), t
		}

		function e(n) {
			return n.map(function(n, t) {
				return {
					x: Math.round(i(n, t) / Ta) * Ta,
					y: Math.round(o(n, t) / Ta) * Ta,
					i: t
				}
			})
		}
		var r = Ar,
			u = Cr,
			i = r,
			o = u,
			a = es;
		return n ? t(n) : (t.links = function(n) {
			return iu(e(n))
				.edges.filter(function(n) {
					return n.l && n.r
				})
				.map(function(t) {
					return {
						source: n[t.l.i],
						target: n[t.r.i]
					}
				})
		}, t.triangles = function(n) {
			var t = [];
			return iu(e(n))
				.cells.forEach(function(e, r) {
					for (var u, i, o = e.site, a = e.edges.sort(Yr), c = -1, s = a.length, l = a[s - 1].edge, f = l.l === o ? l.r : l.l; ++c < s;) u = l, i = f, l = a[c].edge, f = l.l === o ? l.r : l.l, r < i.i && r < f.i && au(o, i, f) < 0 && t.push([n[r], n[i.i], n[f.i]])
				}), t
		}, t.x = function(n) {
			return arguments.length ? (i = Et(r = n), t) : r
		}, t.y = function(n) {
			return arguments.length ? (o = Et(u = n), t) : u
		}, t.clipExtent = function(n) {
			return arguments.length ? (a = null == n ? es : n, t) : a === es ? null : a
		}, t.size = function(n) {
			return arguments.length ? t.clipExtent(n && [
				[0, 0], n
			]) : a === es ? null : a && a[1]
		}, t)
	};
	var es = [
		[-1e6, -1e6],
		[1e6, 1e6]
	];
	Go.geom.delaunay = function(n) {
		return Go.geom.voronoi()
			.triangles(n)
	}, Go.geom.quadtree = function(n, t, e, r, u) {
		function i(n) {
			function i(n, t, e, r, u, i, o, a) {
				if (!isNaN(e) && !isNaN(r))
					if (n.leaf) {
						var c = n.x,
							l = n.y;
						if (null != c)
							if (fa(c - e) + fa(l - r) < .01) s(n, t, e, r, u, i, o, a);
							else {
								var f = n.point;
								n.x = n.y = n.point = null, s(n, f, c, l, u, i, o, a), s(n, t, e, r, u, i, o, a)
							} else n.x = e, n.y = r, n.point = t
					} else s(n, t, e, r, u, i, o, a)
			}

			function s(n, t, e, r, u, o, a, c) {
				var s = .5 * (u + a),
					l = .5 * (o + c),
					f = e >= s,
					h = r >= l,
					g = (h << 1) + f;
				n.leaf = !1, n = n.nodes[g] || (n.nodes[g] = lu()), f ? u = s : a = s, h ? o = l : c = l, i(n, t, e, r, u, o, a, c)
			}
			var l, f, h, g, p, v, d, m, y, x = Et(a),
				M = Et(c);
			if (null != t) v = t, d = e, m = r, y = u;
			else if (m = y = -(v = d = 1 / 0), f = [], h = [], p = n.length, o)
				for (g = 0; p > g; ++g) l = n[g], l.x < v && (v = l.x), l.y < d && (d = l.y), l.x > m && (m = l.x), l.y > y && (y = l.y), f.push(l.x), h.push(l.y);
			else
				for (g = 0; p > g; ++g) {
					var _ = +x(l = n[g], g),
						b = +M(l, g);
					v > _ && (v = _), d > b && (d = b), _ > m && (m = _), b > y && (y = b), f.push(_), h.push(b)
				}
			var w = m - v,
				S = y - d;
			w > S ? y = d + w : m = v + S;
			var k = lu();
			if (k.add = function(n) {
				i(k, n, +x(n, ++g), +M(n, g), v, d, m, y)
			}, k.visit = function(n) {
				fu(n, k, v, d, m, y)
			}, g = -1, null == t) {
				for (; ++g < p;) i(k, n[g], f[g], h[g], v, d, m, y);
				--g
			} else n.forEach(k.add);
			return f = h = n = l = null, k
		}
		var o, a = Ar,
			c = Cr;
		return (o = arguments.length) ? (a = cu, c = su, 3 === o && (u = e, r = t, e = t = 0), i(n)) : (i.x = function(n) {
			return arguments.length ? (a = n, i) : a
		}, i.y = function(n) {
			return arguments.length ? (c = n, i) : c
		}, i.extent = function(n) {
			return arguments.length ? (null == n ? t = e = r = u = null : (t = +n[0][0], e = +n[0][1], r = +n[1][0], u = +n[1][1]), i) : null == t ? null : [
				[t, e],
				[r, u]
			]
		}, i.size = function(n) {
			return arguments.length ? (null == n ? t = e = r = u = null : (t = e = 0, r = +n[0], u = +n[1]), i) : null == t ? null : [r - t, u - e]
		}, i)
	}, Go.interpolateRgb = hu, Go.interpolateObject = gu, Go.interpolateNumber = pu, Go.interpolateString = vu;
	var rs = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
		us = new RegExp(rs.source, "g");
	Go.interpolate = du, Go.interpolators = [
		function(n, t) {
			var e = typeof t;
			return ("string" === e ? Ja.has(t) || /^(#|rgb\(|hsl\()/.test(t) ? hu : vu : t instanceof et ? hu : Array.isArray(t) ? mu : "object" === e && isNaN(t) ? gu : pu)(n, t)
		}
	], Go.interpolateArray = mu;
	var is = function() {
		return At
	}, os = Go.map({
			linear: is,
			poly: Su,
			quad: function() {
				return _u
			},
			cubic: function() {
				return bu
			},
			sin: function() {
				return ku
			},
			exp: function() {
				return Eu
			},
			circle: function() {
				return Au
			},
			elastic: Cu,
			back: Nu,
			bounce: function() {
				return Lu
			}
		}),
		as = Go.map({
			"in": At,
			out: xu,
			"in-out": Mu,
			"out-in": function(n) {
				return Mu(xu(n))
			}
		});
	Go.ease = function(n) {
		var t = n.indexOf("-"),
			e = t >= 0 ? n.substring(0, t) : n,
			r = t >= 0 ? n.substring(t + 1) : "in";
		return e = os.get(e) || is, r = as.get(r) || At, yu(r(e.apply(null, Ko.call(arguments, 1))))
	}, Go.interpolateHcl = Tu, Go.interpolateHsl = qu, Go.interpolateLab = zu, Go.interpolateRound = Ru, Go.transform = function(n) {
		var t = na.createElementNS(Go.ns.prefix.svg, "g");
		return (Go.transform = function(n) {
			if (null != n) {
				t.setAttribute("transform", n);
				var e = t.transform.baseVal.consolidate()
			}
			return new Du(e ? e.matrix : cs)
		})(n)
	}, Du.prototype.toString = function() {
		return "translate(" + this.translate + ")rotate(" + this.rotate + ")skewX(" + this.skew + ")scale(" + this.scale + ")"
	};
	var cs = {
		a: 1,
		b: 0,
		c: 0,
		d: 1,
		e: 0,
		f: 0
	};
	Go.interpolateTransform = Hu, Go.layout = {}, Go.layout.bundle = function() {
		return function(n) {
			for (var t = [], e = -1, r = n.length; ++e < r;) t.push(Iu(n[e]));
			return t
		}
	}, Go.layout.chord = function() {
		function n() {
			var n, s, f, h, g, p = {}, v = [],
				d = Go.range(i),
				m = [];
			for (e = [], r = [], n = 0, h = -1; ++h < i;) {
				for (s = 0, g = -1; ++g < i;) s += u[h][g];
				v.push(s), m.push(Go.range(i)), n += s
			}
			for (o && d.sort(function(n, t) {
				return o(v[n], v[t])
			}), a && m.forEach(function(n, t) {
				n.sort(function(n, e) {
					return a(u[t][n], u[t][e])
				})
			}), n = (Na - l * i) / n, s = 0, h = -1; ++h < i;) {
				for (f = s, g = -1; ++g < i;) {
					var y = d[h],
						x = m[y][g],
						M = u[y][x],
						_ = s,
						b = s += M * n;
					p[y + "-" + x] = {
						index: y,
						subindex: x,
						startAngle: _,
						endAngle: b,
						value: M
					}
				}
				r[y] = {
					index: y,
					startAngle: f,
					endAngle: s,
					value: (s - f) / n
				}, s += l
			}
			for (h = -1; ++h < i;)
				for (g = h - 1; ++g < i;) {
					var w = p[h + "-" + g],
						S = p[g + "-" + h];
					(w.value || S.value) && e.push(w.value < S.value ? {
							source: S,
							target: w
						} : {
							source: w,
							target: S
						})
				}
			c && t()
		}

		function t() {
			e.sort(function(n, t) {
				return c((n.source.value + n.target.value) / 2, (t.source.value + t.target.value) / 2)
			})
		}
		var e, r, u, i, o, a, c, s = {}, l = 0;
		return s.matrix = function(n) {
			return arguments.length ? (i = (u = n) && u.length, e = r = null, s) : u
		}, s.padding = function(n) {
			return arguments.length ? (l = n, e = r = null, s) : l
		}, s.sortGroups = function(n) {
			return arguments.length ? (o = n, e = r = null, s) : o
		}, s.sortSubgroups = function(n) {
			return arguments.length ? (a = n, e = null, s) : a
		}, s.sortChords = function(n) {
			return arguments.length ? (c = n, e && t(), s) : c
		}, s.chords = function() {
			return e || n(), e
		}, s.groups = function() {
			return r || n(), r
		}, s
	}, Go.layout.force = function() {
		function n(n) {
			return function(t, e, r, u) {
				if (t.point !== n) {
					var i = t.cx - n.x,
						o = t.cy - n.y,
						a = u - e,
						c = i * i + o * o;
					if (c > a * a / d) {
						if (p > c) {
							var s = t.charge / c;
							n.px -= i * s, n.py -= o * s
						}
						return !0
					}
					if (t.point && c && p > c) {
						var s = t.pointCharge / c;
						n.px -= i * s, n.py -= o * s
					}
				}
				return !t.charge
			}
		}

		function t(n) {
			n.px = Go.event.x, n.py = Go.event.y, a.resume()
		}
		var e, r, u, i, o, a = {}, c = Go.dispatch("start", "tick", "end"),
			s = [1, 1],
			l = .9,
			f = ss,
			h = ls,
			g = -30,
			p = fs,
			v = .1,
			d = .64,
			m = [],
			y = [];
		return a.tick = function() {
			if ((r *= .99) < .005) return c.end({
				type: "end",
				alpha: r = 0
			}), !0;
			var t, e, a, f, h, p, d, x, M, _ = m.length,
				b = y.length;
			for (e = 0; b > e; ++e) a = y[e], f = a.source, h = a.target, x = h.x - f.x, M = h.y - f.y, (p = x * x + M * M) && (p = r * i[e] * ((p = Math.sqrt(p)) - u[e]) / p, x *= p, M *= p, h.x -= x * (d = f.weight / (h.weight + f.weight)), h.y -= M * d, f.x += x * (d = 1 - d), f.y += M * d);
			if ((d = r * v) && (x = s[0] / 2, M = s[1] / 2, e = -1, d))
				for (; ++e < _;) a = m[e], a.x += (x - a.x) * d, a.y += (M - a.y) * d;
			if (g)
				for (Ju(t = Go.geom.quadtree(m), r, o), e = -1; ++e < _;)(a = m[e])
					.fixed || t.visit(n(a));
			for (e = -1; ++e < _;) a = m[e], a.fixed ? (a.x = a.px, a.y = a.py) : (a.x -= (a.px - (a.px = a.x)) * l, a.y -= (a.py - (a.py = a.y)) * l);
			c.tick({
				type: "tick",
				alpha: r
			})
		}, a.nodes = function(n) {
			return arguments.length ? (m = n, a) : m
		}, a.links = function(n) {
			return arguments.length ? (y = n, a) : y
		}, a.size = function(n) {
			return arguments.length ? (s = n, a) : s
		}, a.linkDistance = function(n) {
			return arguments.length ? (f = "function" == typeof n ? n : +n, a) : f
		}, a.distance = a.linkDistance, a.linkStrength = function(n) {
			return arguments.length ? (h = "function" == typeof n ? n : +n, a) : h
		}, a.friction = function(n) {
			return arguments.length ? (l = +n, a) : l
		}, a.charge = function(n) {
			return arguments.length ? (g = "function" == typeof n ? n : +n, a) : g
		}, a.chargeDistance = function(n) {
			return arguments.length ? (p = n * n, a) : Math.sqrt(p)
		}, a.gravity = function(n) {
			return arguments.length ? (v = +n, a) : v
		}, a.theta = function(n) {
			return arguments.length ? (d = n * n, a) : Math.sqrt(d)
		}, a.alpha = function(n) {
			return arguments.length ? (n = +n, r ? r = n > 0 ? n : 0 : n > 0 && (c.start({
				type: "start",
				alpha: r = n
			}), Go.timer(a.tick)), a) : r
		}, a.start = function() {
			function n(n, r) {
				if (!e) {
					for (e = new Array(c), a = 0; c > a; ++a) e[a] = [];
					for (a = 0; s > a; ++a) {
						var u = y[a];
						e[u.source.index].push(u.target), e[u.target.index].push(u.source)
					}
				}
				for (var i, o = e[t], a = -1, s = o.length; ++a < s;)
					if (!isNaN(i = o[a][n])) return i;
				return Math.random() * r
			}
			var t, e, r, c = m.length,
				l = y.length,
				p = s[0],
				v = s[1];
			for (t = 0; c > t; ++t)(r = m[t])
				.index = t, r.weight = 0;
			for (t = 0; l > t; ++t) r = y[t], "number" == typeof r.source && (r.source = m[r.source]), "number" == typeof r.target && (r.target = m[r.target]), ++r.source.weight, ++r.target.weight;
			for (t = 0; c > t; ++t) r = m[t], isNaN(r.x) && (r.x = n("x", p)), isNaN(r.y) && (r.y = n("y", v)), isNaN(r.px) && (r.px = r.x), isNaN(r.py) && (r.py = r.y);
			if (u = [], "function" == typeof f)
				for (t = 0; l > t; ++t) u[t] = +f.call(this, y[t], t);
			else
				for (t = 0; l > t; ++t) u[t] = f; if (i = [], "function" == typeof h)
				for (t = 0; l > t; ++t) i[t] = +h.call(this, y[t], t);
			else
				for (t = 0; l > t; ++t) i[t] = h; if (o = [], "function" == typeof g)
				for (t = 0; c > t; ++t) o[t] = +g.call(this, m[t], t);
			else
				for (t = 0; c > t; ++t) o[t] = g;
			return a.resume()
		}, a.resume = function() {
			return a.alpha(.1)
		}, a.stop = function() {
			return a.alpha(0)
		}, a.drag = function() {
			return e || (e = Go.behavior.drag()
				.origin(At)
				.on("dragstart.force", Vu)
				.on("drag.force", t)
				.on("dragend.force", $u)), arguments.length ? (this.on("mouseover.force", Xu)
				.on("mouseout.force", Bu)
				.call(e), void 0) : e
		}, Go.rebind(a, c, "on")
	};
	var ss = 20,
		ls = 1,
		fs = 1 / 0;
	Go.layout.hierarchy = function() {
		function n(t, o, a) {
			var c = u.call(e, t, o);
			if (t.depth = o, a.push(t), c && (s = c.length)) {
				for (var s, l, f = -1, h = t.children = new Array(s), g = 0, p = o + 1; ++f < s;) l = h[f] = n(c[f], p, a), l.parent = t, g += l.value;
				r && h.sort(r), i && (t.value = g)
			} else delete t.children, i && (t.value = +i.call(e, t, o) || 0);
			return t
		}

		function t(n, r) {
			var u = n.children,
				o = 0;
			if (u && (a = u.length))
				for (var a, c = -1, s = r + 1; ++c < a;) o += t(u[c], s);
			else i && (o = +i.call(e, n, r) || 0);
			return i && (n.value = o), o
		}

		function e(t) {
			var e = [];
			return n(t, 0, e), e
		}
		var r = Qu,
			u = Gu,
			i = Ku;
		return e.sort = function(n) {
			return arguments.length ? (r = n, e) : r
		}, e.children = function(n) {
			return arguments.length ? (u = n, e) : u
		}, e.value = function(n) {
			return arguments.length ? (i = n, e) : i
		}, e.revalue = function(n) {
			return t(n, 0), n
		}, e
	}, Go.layout.partition = function() {
		function n(t, e, r, u) {
			var i = t.children;
			if (t.x = e, t.y = t.depth * u, t.dx = r, t.dy = u, i && (o = i.length)) {
				var o, a, c, s = -1;
				for (r = t.value ? r / t.value : 0; ++s < o;) n(a = i[s], e, c = a.value * r, u), e += c
			}
		}

		function t(n) {
			var e = n.children,
				r = 0;
			if (e && (u = e.length))
				for (var u, i = -1; ++i < u;) r = Math.max(r, t(e[i]));
			return 1 + r
		}

		function e(e, i) {
			var o = r.call(this, e, i);
			return n(o[0], 0, u[0], u[1] / t(o[0])), o
		}
		var r = Go.layout.hierarchy(),
			u = [1, 1];
		return e.size = function(n) {
			return arguments.length ? (u = n, e) : u
		}, Wu(e, r)
	}, Go.layout.pie = function() {
		function n(i) {
			var o = i.map(function(e, r) {
				return +t.call(n, e, r)
			}),
				a = +("function" == typeof r ? r.apply(this, arguments) : r),
				c = (("function" == typeof u ? u.apply(this, arguments) : u) - a) / Go.sum(o),
				s = Go.range(i.length);
			null != e && s.sort(e === hs ? function(n, t) {
				return o[t] - o[n]
			} : function(n, t) {
				return e(i[n], i[t])
			});
			var l = [];
			return s.forEach(function(n) {
				var t;
				l[n] = {
					data: i[n],
					value: t = o[n],
					startAngle: a,
					endAngle: a += t * c
				}
			}), l
		}
		var t = Number,
			e = hs,
			r = 0,
			u = Na;
		return n.value = function(e) {
			return arguments.length ? (t = e, n) : t
		}, n.sort = function(t) {
			return arguments.length ? (e = t, n) : e
		}, n.startAngle = function(t) {
			return arguments.length ? (r = t, n) : r
		}, n.endAngle = function(t) {
			return arguments.length ? (u = t, n) : u
		}, n
	};
	var hs = {};
	Go.layout.stack = function() {
		function n(a, c) {
			var s = a.map(function(e, r) {
				return t.call(n, e, r)
			}),
				l = s.map(function(t) {
					return t.map(function(t, e) {
						return [i.call(n, t, e), o.call(n, t, e)]
					})
				}),
				f = e.call(n, l, c);
			s = Go.permute(s, f), l = Go.permute(l, f);
			var h, g, p, v = r.call(n, l, c),
				d = s.length,
				m = s[0].length;
			for (g = 0; m > g; ++g)
				for (u.call(n, s[0][g], p = v[g], l[0][g][1]), h = 1; d > h; ++h) u.call(n, s[h][g], p += l[h - 1][g][1], l[h][g][1]);
			return a
		}
		var t = At,
			e = ui,
			r = ii,
			u = ri,
			i = ti,
			o = ei;
		return n.values = function(e) {
			return arguments.length ? (t = e, n) : t
		}, n.order = function(t) {
			return arguments.length ? (e = "function" == typeof t ? t : gs.get(t) || ui, n) : e
		}, n.offset = function(t) {
			return arguments.length ? (r = "function" == typeof t ? t : ps.get(t) || ii, n) : r
		}, n.x = function(t) {
			return arguments.length ? (i = t, n) : i
		}, n.y = function(t) {
			return arguments.length ? (o = t, n) : o
		}, n.out = function(t) {
			return arguments.length ? (u = t, n) : u
		}, n
	};
	var gs = Go.map({
		"inside-out": function(n) {
			var t, e, r = n.length,
				u = n.map(oi),
				i = n.map(ai),
				o = Go.range(r)
					.sort(function(n, t) {
						return u[n] - u[t]
					}),
				a = 0,
				c = 0,
				s = [],
				l = [];
			for (t = 0; r > t; ++t) e = o[t], c > a ? (a += i[e], s.push(e)) : (c += i[e], l.push(e));
			return l.reverse()
				.concat(s)
		},
		reverse: function(n) {
			return Go.range(n.length)
				.reverse()
		},
		"default": ui
	}),
		ps = Go.map({
			silhouette: function(n) {
				var t, e, r, u = n.length,
					i = n[0].length,
					o = [],
					a = 0,
					c = [];
				for (e = 0; i > e; ++e) {
					for (t = 0, r = 0; u > t; t++) r += n[t][e][1];
					r > a && (a = r), o.push(r)
				}
				for (e = 0; i > e; ++e) c[e] = (a - o[e]) / 2;
				return c
			},
			wiggle: function(n) {
				var t, e, r, u, i, o, a, c, s, l = n.length,
					f = n[0],
					h = f.length,
					g = [];
				for (g[0] = c = s = 0, e = 1; h > e; ++e) {
					for (t = 0, u = 0; l > t; ++t) u += n[t][e][1];
					for (t = 0, i = 0, a = f[e][0] - f[e - 1][0]; l > t; ++t) {
						for (r = 0, o = (n[t][e][1] - n[t][e - 1][1]) / (2 * a); t > r; ++r) o += (n[r][e][1] - n[r][e - 1][1]) / a;
						i += o * n[t][e][1]
					}
					g[e] = c -= u ? i / u * a : 0, s > c && (s = c)
				}
				for (e = 0; h > e; ++e) g[e] -= s;
				return g
			},
			expand: function(n) {
				var t, e, r, u = n.length,
					i = n[0].length,
					o = 1 / u,
					a = [];
				for (e = 0; i > e; ++e) {
					for (t = 0, r = 0; u > t; t++) r += n[t][e][1];
					if (r)
						for (t = 0; u > t; t++) n[t][e][1] /= r;
					else
						for (t = 0; u > t; t++) n[t][e][1] = o
				}
				for (e = 0; i > e; ++e) a[e] = 0;
				return a
			},
			zero: ii
		});
	Go.layout.histogram = function() {
		function n(n, i) {
			for (var o, a, c = [], s = n.map(e, this), l = r.call(this, s, i), f = u.call(this, l, s, i), i = -1, h = s.length, g = f.length - 1, p = t ? 1 : 1 / h; ++i < g;) o = c[i] = [], o.dx = f[i + 1] - (o.x = f[i]), o.y = 0;
			if (g > 0)
				for (i = -1; ++i < h;) a = s[i], a >= l[0] && a <= l[1] && (o = c[Go.bisect(f, a, 1, g) - 1], o.y += p, o.push(n[i]));
			return c
		}
		var t = !0,
			e = Number,
			r = fi,
			u = si;
		return n.value = function(t) {
			return arguments.length ? (e = t, n) : e
		}, n.range = function(t) {
			return arguments.length ? (r = Et(t), n) : r
		}, n.bins = function(t) {
			return arguments.length ? (u = "number" == typeof t ? function(n) {
				return li(n, t)
			} : Et(t), n) : u
		}, n.frequency = function(e) {
			return arguments.length ? (t = !! e, n) : t
		}, n
	}, Go.layout.tree = function() {
		function n(n, i) {
			function o(n, t) {
				var r = n.children,
					u = n._tree;
				if (r && (i = r.length)) {
					for (var i, a, s, l = r[0], f = l, h = -1; ++h < i;) s = r[h], o(s, a), f = c(s, a, f), a = s;
					Mi(n);
					var g = .5 * (l._tree.prelim + s._tree.prelim);
					t ? (u.prelim = t._tree.prelim + e(n, t), u.mod = u.prelim - g) : u.prelim = g
				} else t && (u.prelim = t._tree.prelim + e(n, t))
			}

			function a(n, t) {
				n.x = n._tree.prelim + t;
				var e = n.children;
				if (e && (r = e.length)) {
					var r, u = -1;
					for (t += n._tree.mod; ++u < r;) a(e[u], t)
				}
			}

			function c(n, t, r) {
				if (t) {
					for (var u, i = n, o = n, a = t, c = n.parent.children[0], s = i._tree.mod, l = o._tree.mod, f = a._tree.mod, h = c._tree.mod; a = pi(a), i = gi(i), a && i;) c = gi(c), o = pi(o), o._tree.ancestor = n, u = a._tree.prelim + f - i._tree.prelim - s + e(a, i), u > 0 && (_i(bi(a, n, r), n, u), s += u, l += u), f += a._tree.mod, s += i._tree.mod, h += c._tree.mod, l += o._tree.mod;
					a && !pi(o) && (o._tree.thread = a, o._tree.mod += f - l), i && !gi(c) && (c._tree.thread = i, c._tree.mod += s - h, r = n)
				}
				return r
			}
			var s = t.call(this, n, i),
				l = s[0];
			xi(l, function(n, t) {
				n._tree = {
					ancestor: n,
					prelim: 0,
					mod: 0,
					change: 0,
					shift: 0,
					number: t ? t._tree.number + 1 : 0
				}
			}), o(l), a(l, -l._tree.prelim);
			var f = vi(l, mi),
				h = vi(l, di),
				g = vi(l, yi),
				p = f.x - e(f, h) / 2,
				v = h.x + e(h, f) / 2,
				d = g.depth || 1;
			return xi(l, u ? function(n) {
				n.x *= r[0], n.y = n.depth * r[1], delete n._tree
			} : function(n) {
				n.x = (n.x - p) / (v - p) * r[0], n.y = n.depth / d * r[1], delete n._tree
			}), s
		}
		var t = Go.layout.hierarchy()
			.sort(null)
			.value(null),
			e = hi,
			r = [1, 1],
			u = !1;
		return n.separation = function(t) {
			return arguments.length ? (e = t, n) : e
		}, n.size = function(t) {
			return arguments.length ? (u = null == (r = t), n) : u ? null : r
		}, n.nodeSize = function(t) {
			return arguments.length ? (u = null != (r = t), n) : u ? r : null
		}, Wu(n, t)
	}, Go.layout.pack = function() {
		function n(n, i) {
			var o = e.call(this, n, i),
				a = o[0],
				c = u[0],
				s = u[1],
				l = null == t ? Math.sqrt : "function" == typeof t ? t : function() {
					return t
			};
			if (a.x = a.y = 0, xi(a, function(n) {
				n.r = +l(n.value)
			}), xi(a, Ai), r) {
				var f = r * (t ? 1 : Math.max(2 * a.r / c, 2 * a.r / s)) / 2;
				xi(a, function(n) {
					n.r += f
				}), xi(a, Ai), xi(a, function(n) {
					n.r -= f
				})
			}
			return Li(a, c / 2, s / 2, t ? 1 : 1 / Math.max(2 * a.r / c, 2 * a.r / s)), o
		}
		var t, e = Go.layout.hierarchy()
				.sort(wi),
			r = 0,
			u = [1, 1];
		return n.size = function(t) {
			return arguments.length ? (u = t, n) : u
		}, n.radius = function(e) {
			return arguments.length ? (t = null == e || "function" == typeof e ? e : +e, n) : t
		}, n.padding = function(t) {
			return arguments.length ? (r = +t, n) : r
		}, Wu(n, e)
	}, Go.layout.cluster = function() {
		function n(n, i) {
			var o, a = t.call(this, n, i),
				c = a[0],
				s = 0;
			xi(c, function(n) {
				var t = n.children;
				t && t.length ? (n.x = zi(t), n.y = qi(t)) : (n.x = o ? s += e(n, o) : 0, n.y = 0, o = n)
			});
			var l = Ri(c),
				f = Di(c),
				h = l.x - e(l, f) / 2,
				g = f.x + e(f, l) / 2;
			return xi(c, u ? function(n) {
				n.x = (n.x - c.x) * r[0], n.y = (c.y - n.y) * r[1]
			} : function(n) {
				n.x = (n.x - h) / (g - h) * r[0], n.y = (1 - (c.y ? n.y / c.y : 1)) * r[1]
			}), a
		}
		var t = Go.layout.hierarchy()
			.sort(null)
			.value(null),
			e = hi,
			r = [1, 1],
			u = !1;
		return n.separation = function(t) {
			return arguments.length ? (e = t, n) : e
		}, n.size = function(t) {
			return arguments.length ? (u = null == (r = t), n) : u ? null : r
		}, n.nodeSize = function(t) {
			return arguments.length ? (u = null != (r = t), n) : u ? r : null
		}, Wu(n, t)
	}, Go.layout.treemap = function() {
		function n(n, t) {
			for (var e, r, u = -1, i = n.length; ++u < i;) r = (e = n[u])
				.value * (0 > t ? 0 : t), e.area = isNaN(r) || 0 >= r ? 0 : r
		}

		function t(e) {
			var i = e.children;
			if (i && i.length) {
				var o, a, c, s = f(e),
					l = [],
					h = i.slice(),
					p = 1 / 0,
					v = "slice" === g ? s.dx : "dice" === g ? s.dy : "slice-dice" === g ? 1 & e.depth ? s.dy : s.dx : Math.min(s.dx, s.dy);
				for (n(h, s.dx * s.dy / e.value), l.area = 0;
					(c = h.length) > 0;) l.push(o = h[c - 1]), l.area += o.area, "squarify" !== g || (a = r(l, v)) <= p ? (h.pop(), p = a) : (l.area -= l.pop()
					.area, u(l, v, s, !1), v = Math.min(s.dx, s.dy), l.length = l.area = 0, p = 1 / 0);
				l.length && (u(l, v, s, !0), l.length = l.area = 0), i.forEach(t)
			}
		}

		function e(t) {
			var r = t.children;
			if (r && r.length) {
				var i, o = f(t),
					a = r.slice(),
					c = [];
				for (n(a, o.dx * o.dy / t.value), c.area = 0; i = a.pop();) c.push(i), c.area += i.area, null != i.z && (u(c, i.z ? o.dx : o.dy, o, !a.length), c.length = c.area = 0);
				r.forEach(e)
			}
		}

		function r(n, t) {
			for (var e, r = n.area, u = 0, i = 1 / 0, o = -1, a = n.length; ++o < a;)(e = n[o].area) && (i > e && (i = e), e > u && (u = e));
			return r *= r, t *= t, r ? Math.max(t * u * p / r, r / (t * i * p)) : 1 / 0
		}

		function u(n, t, e, r) {
			var u, i = -1,
				o = n.length,
				a = e.x,
				s = e.y,
				l = t ? c(n.area / t) : 0;
			if (t == e.dx) {
				for ((r || l > e.dy) && (l = e.dy); ++i < o;) u = n[i], u.x = a, u.y = s, u.dy = l, a += u.dx = Math.min(e.x + e.dx - a, l ? c(u.area / l) : 0);
				u.z = !0, u.dx += e.x + e.dx - a, e.y += l, e.dy -= l
			} else {
				for ((r || l > e.dx) && (l = e.dx); ++i < o;) u = n[i], u.x = a, u.y = s, u.dx = l, s += u.dy = Math.min(e.y + e.dy - s, l ? c(u.area / l) : 0);
				u.z = !1, u.dy += e.y + e.dy - s, e.x += l, e.dx -= l
			}
		}

		function i(r) {
			var u = o || a(r),
				i = u[0];
			return i.x = 0, i.y = 0, i.dx = s[0], i.dy = s[1], o && a.revalue(i), n([i], i.dx * i.dy / i.value), (o ? e : t)(i), h && (o = u), u
		}
		var o, a = Go.layout.hierarchy(),
			c = Math.round,
			s = [1, 1],
			l = null,
			f = Pi,
			h = !1,
			g = "squarify",
			p = .5 * (1 + Math.sqrt(5));
		return i.size = function(n) {
			return arguments.length ? (s = n, i) : s
		}, i.padding = function(n) {
			function t(t) {
				var e = n.call(i, t, t.depth);
				return null == e ? Pi(t) : Ui(t, "number" == typeof e ? [e, e, e, e] : e)
			}

			function e(t) {
				return Ui(t, n)
			}
			if (!arguments.length) return l;
			var r;
			return f = null == (l = n) ? Pi : "function" == (r = typeof n) ? t : "number" === r ? (n = [n, n, n, n], e) : e, i
		}, i.round = function(n) {
			return arguments.length ? (c = n ? Math.round : Number, i) : c != Number
		}, i.sticky = function(n) {
			return arguments.length ? (h = n, o = null, i) : h
		}, i.ratio = function(n) {
			return arguments.length ? (p = n, i) : p
		}, i.mode = function(n) {
			return arguments.length ? (g = n + "", i) : g
		}, Wu(i, a)
	}, Go.random = {
		normal: function(n, t) {
			var e = arguments.length;
			return 2 > e && (t = 1), 1 > e && (n = 0),
			function() {
				var e, r, u;
				do e = 2 * Math.random() - 1, r = 2 * Math.random() - 1, u = e * e + r * r; while (!u || u > 1);
				return n + t * e * Math.sqrt(-2 * Math.log(u) / u)
			}
		},
		logNormal: function() {
			var n = Go.random.normal.apply(Go, arguments);
			return function() {
				return Math.exp(n())
			}
		},
		bates: function(n) {
			var t = Go.random.irwinHall(n);
			return function() {
				return t() / n
			}
		},
		irwinHall: function(n) {
			return function() {
				for (var t = 0, e = 0; n > e; e++) t += Math.random();
				return t
			}
		}
	}, Go.scale = {};
	var vs = {
		floor: At,
		ceil: At
	};
	Go.scale.linear = function() {
		return Zi([0, 1], [0, 1], du, !1)
	};
	var ds = {
		s: 1,
		g: 1,
		p: 1,
		r: 1,
		e: 1
	};
	Go.scale.log = function() {
		return Ki(Go.scale.linear()
			.domain([0, 1]), 10, !0, [1, 10])
	};
	var ms = Go.format(".0e"),
		ys = {
			floor: function(n) {
				return -Math.ceil(-n)
			},
			ceil: function(n) {
				return -Math.floor(-n)
			}
		};
	Go.scale.pow = function() {
		return Qi(Go.scale.linear(), 1, [0, 1])
	}, Go.scale.sqrt = function() {
		return Go.scale.pow()
			.exponent(.5)
	}, Go.scale.ordinal = function() {
		return to([], {
			t: "range",
			a: [
				[]
			]
		})
	}, Go.scale.category10 = function() {
		return Go.scale.ordinal()
			.range(xs)
	}, Go.scale.category20 = function() {
		return Go.scale.ordinal()
			.range(Ms)
	}, Go.scale.category20b = function() {
		return Go.scale.ordinal()
			.range(_s)
	}, Go.scale.category20c = function() {
		return Go.scale.ordinal()
			.range(bs)
	};
	var xs = [2062260, 16744206, 2924588, 14034728, 9725885, 9197131, 14907330, 8355711, 12369186, 1556175].map(mt),
		Ms = [2062260, 11454440, 16744206, 16759672, 2924588, 10018698, 14034728, 16750742, 9725885, 12955861, 9197131, 12885140, 14907330, 16234194, 8355711, 13092807, 12369186, 14408589, 1556175, 10410725].map(mt),
		_s = [3750777, 5395619, 7040719, 10264286, 6519097, 9216594, 11915115, 13556636, 9202993, 12426809, 15186514, 15190932, 8666169, 11356490, 14049643, 15177372, 8077683, 10834324, 13528509, 14589654].map(mt),
		bs = [3244733, 7057110, 10406625, 13032431, 15095053, 16616764, 16625259, 16634018, 3253076, 7652470, 10607003, 13101504, 7695281, 10394312, 12369372, 14342891, 6513507, 9868950, 12434877, 14277081].map(mt);
	Go.scale.quantile = function() {
		return eo([], [])
	}, Go.scale.quantize = function() {
		return ro(0, 1, [0, 1])
	}, Go.scale.threshold = function() {
		return uo([.5], [0, 1])
	}, Go.scale.identity = function() {
		return io([0, 1])
	}, Go.svg = {}, Go.svg.arc = function() {
		function n() {
			var n = t.apply(this, arguments),
				i = e.apply(this, arguments),
				o = r.apply(this, arguments) + ws,
				a = u.apply(this, arguments) + ws,
				c = (o > a && (c = o, o = a, a = c), a - o),
				s = Ca > c ? "0" : "1",
				l = Math.cos(o),
				f = Math.sin(o),
				h = Math.cos(a),
				g = Math.sin(a);
			return c >= Ss ? n ? "M0," + i + "A" + i + "," + i + " 0 1,1 0," + -i + "A" + i + "," + i + " 0 1,1 0," + i + "M0," + n + "A" + n + "," + n + " 0 1,0 0," + -n + "A" + n + "," + n + " 0 1,0 0," + n + "Z" : "M0," + i + "A" + i + "," + i + " 0 1,1 0," + -i + "A" + i + "," + i + " 0 1,1 0," + i + "Z" : n ? "M" + i * l + "," + i * f + "A" + i + "," + i + " 0 " + s + ",1 " + i * h + "," + i * g + "L" + n * h + "," + n * g + "A" + n + "," + n + " 0 " + s + ",0 " + n * l + "," + n * f + "Z" : "M" + i * l + "," + i * f + "A" + i + "," + i + " 0 " + s + ",1 " + i * h + "," + i * g + "L0,0" + "Z"
		}
		var t = oo,
			e = ao,
			r = co,
			u = so;
		return n.innerRadius = function(e) {
			return arguments.length ? (t = Et(e), n) : t
		}, n.outerRadius = function(t) {
			return arguments.length ? (e = Et(t), n) : e
		}, n.startAngle = function(t) {
			return arguments.length ? (r = Et(t), n) : r
		}, n.endAngle = function(t) {
			return arguments.length ? (u = Et(t), n) : u
		}, n.centroid = function() {
			var n = (t.apply(this, arguments) + e.apply(this, arguments)) / 2,
				i = (r.apply(this, arguments) + u.apply(this, arguments)) / 2 + ws;
			return [Math.cos(i) * n, Math.sin(i) * n]
		}, n
	};
	var ws = -La,
		Ss = Na - Ta;
	Go.svg.line = function() {
		return lo(At)
	};
	var ks = Go.map({
		linear: fo,
		"linear-closed": ho,
		step: go,
		"step-before": po,
		"step-after": vo,
		basis: bo,
		"basis-open": wo,
		"basis-closed": So,
		bundle: ko,
		cardinal: xo,
		"cardinal-open": mo,
		"cardinal-closed": yo,
		monotone: To
	});
	ks.forEach(function(n, t) {
		t.key = n, t.closed = /-closed$/.test(n)
	});
	var Es = [0, 2 / 3, 1 / 3, 0],
		As = [0, 1 / 3, 2 / 3, 0],
		Cs = [0, 1 / 6, 2 / 3, 1 / 6];
	Go.svg.line.radial = function() {
		var n = lo(qo);
		return n.radius = n.x, delete n.x, n.angle = n.y, delete n.y, n
	}, po.reverse = vo, vo.reverse = po, Go.svg.area = function() {
		return zo(At)
	}, Go.svg.area.radial = function() {
		var n = zo(qo);
		return n.radius = n.x, delete n.x, n.innerRadius = n.x0, delete n.x0, n.outerRadius = n.x1, delete n.x1, n.angle = n.y, delete n.y, n.startAngle = n.y0, delete n.y0, n.endAngle = n.y1, delete n.y1, n
	}, Go.svg.chord = function() {
		function n(n, a) {
			var c = t(this, i, n, a),
				s = t(this, o, n, a);
			return "M" + c.p0 + r(c.r, c.p1, c.a1 - c.a0) + (e(c, s) ? u(c.r, c.p1, c.r, c.p0) : u(c.r, c.p1, s.r, s.p0) + r(s.r, s.p1, s.a1 - s.a0) + u(s.r, s.p1, c.r, c.p0)) + "Z"
		}

		function t(n, t, e, r) {
			var u = t.call(n, e, r),
				i = a.call(n, u, r),
				o = c.call(n, u, r) + ws,
				l = s.call(n, u, r) + ws;
			return {
				r: i,
				a0: o,
				a1: l,
				p0: [i * Math.cos(o), i * Math.sin(o)],
				p1: [i * Math.cos(l), i * Math.sin(l)]
			}
		}

		function e(n, t) {
			return n.a0 == t.a0 && n.a1 == t.a1
		}

		function r(n, t, e) {
			return "A" + n + "," + n + " 0 " + +(e > Ca) + ",1 " + t
		}

		function u(n, t, e, r) {
			return "Q 0,0 " + r
		}
		var i = mr,
			o = yr,
			a = Ro,
			c = co,
			s = so;
		return n.radius = function(t) {
			return arguments.length ? (a = Et(t), n) : a
		}, n.source = function(t) {
			return arguments.length ? (i = Et(t), n) : i
		}, n.target = function(t) {
			return arguments.length ? (o = Et(t), n) : o
		}, n.startAngle = function(t) {
			return arguments.length ? (c = Et(t), n) : c
		}, n.endAngle = function(t) {
			return arguments.length ? (s = Et(t), n) : s
		}, n
	}, Go.svg.diagonal = function() {
		function n(n, u) {
			var i = t.call(this, n, u),
				o = e.call(this, n, u),
				a = (i.y + o.y) / 2,
				c = [i, {
						x: i.x,
						y: a
					}, {
						x: o.x,
						y: a
					},
					o
				];
			return c = c.map(r), "M" + c[0] + "C" + c[1] + " " + c[2] + " " + c[3]
		}
		var t = mr,
			e = yr,
			r = Do;
		return n.source = function(e) {
			return arguments.length ? (t = Et(e), n) : t
		}, n.target = function(t) {
			return arguments.length ? (e = Et(t), n) : e
		}, n.projection = function(t) {
			return arguments.length ? (r = t, n) : r
		}, n
	}, Go.svg.diagonal.radial = function() {
		var n = Go.svg.diagonal(),
			t = Do,
			e = n.projection;
		return n.projection = function(n) {
			return arguments.length ? e(Po(t = n)) : t
		}, n
	}, Go.svg.symbol = function() {
		function n(n, r) {
			return (Ns.get(t.call(this, n, r)) || Ho)(e.call(this, n, r))
		}
		var t = jo,
			e = Uo;
		return n.type = function(e) {
			return arguments.length ? (t = Et(e), n) : t
		}, n.size = function(t) {
			return arguments.length ? (e = Et(t), n) : e
		}, n
	};
	var Ns = Go.map({
		circle: Ho,
		cross: function(n) {
			var t = Math.sqrt(n / 5) / 2;
			return "M" + -3 * t + "," + -t + "H" + -t + "V" + -3 * t + "H" + t + "V" + -t + "H" + 3 * t + "V" + t + "H" + t + "V" + 3 * t + "H" + -t + "V" + t + "H" + -3 * t + "Z"
		},
		diamond: function(n) {
			var t = Math.sqrt(n / (2 * zs)),
				e = t * zs;
			return "M0," + -t + "L" + e + ",0" + " 0," + t + " " + -e + ",0" + "Z"
		},
		square: function(n) {
			var t = Math.sqrt(n) / 2;
			return "M" + -t + "," + -t + "L" + t + "," + -t + " " + t + "," + t + " " + -t + "," + t + "Z"
		},
		"triangle-down": function(n) {
			var t = Math.sqrt(n / qs),
				e = t * qs / 2;
			return "M0," + e + "L" + t + "," + -e + " " + -t + "," + -e + "Z"
		},
		"triangle-up": function(n) {
			var t = Math.sqrt(n / qs),
				e = t * qs / 2;
			return "M0," + -e + "L" + t + "," + e + " " + -t + "," + e + "Z"
		}
	});
	Go.svg.symbolTypes = Ns.keys();
	var Ls, Ts, qs = Math.sqrt(3),
		zs = Math.tan(30 * za),
		Rs = [],
		Ds = 0;
	Rs.call = _a.call, Rs.empty = _a.empty, Rs.node = _a.node, Rs.size = _a.size, Go.transition = function(n) {
		return arguments.length ? Ls ? n.transition() : n : Sa.transition()
	}, Go.transition.prototype = Rs, Rs.select = function(n) {
		var t, e, r, u = this.id,
			i = [];
		n = b(n);
		for (var o = -1, a = this.length; ++o < a;) {
			i.push(t = []);
			for (var c = this[o], s = -1, l = c.length; ++s < l;)(r = c[s]) && (e = n.call(r, r.__data__, s, o)) ? ("__data__" in r && (e.__data__ = r.__data__), Yo(e, s, u, r.__transition__[u]), t.push(e)) : t.push(null)
		}
		return Fo(i, u)
	}, Rs.selectAll = function(n) {
		var t, e, r, u, i, o = this.id,
			a = [];
		n = w(n);
		for (var c = -1, s = this.length; ++c < s;)
			for (var l = this[c], f = -1, h = l.length; ++f < h;)
				if (r = l[f]) {
					i = r.__transition__[o], e = n.call(r, r.__data__, f, c), a.push(t = []);
					for (var g = -1, p = e.length; ++g < p;)(u = e[g]) && Yo(u, g, o, i), t.push(u)
				}
		return Fo(a, o)
	}, Rs.filter = function(n) {
		var t, e, r, u = [];
		"function" != typeof n && (n = R(n));
		for (var i = 0, o = this.length; o > i; i++) {
			u.push(t = []);
			for (var e = this[i], a = 0, c = e.length; c > a; a++)(r = e[a]) && n.call(r, r.__data__, a, i) && t.push(r)
		}
		return Fo(u, this.id)
	}, Rs.tween = function(n, t) {
		var e = this.id;
		return arguments.length < 2 ? this.node()
			.__transition__[e].tween.get(n) : P(this, null == t ? function(t) {
				t.__transition__[e].tween.remove(n)
			} : function(r) {
				r.__transition__[e].tween.set(n, t)
			})
	}, Rs.attr = function(n, t) {
		function e() {
			this.removeAttribute(a)
		}

		function r() {
			this.removeAttributeNS(a.space, a.local)
		}

		function u(n) {
			return null == n ? e : (n += "", function() {
				var t, e = this.getAttribute(a);
				return e !== n && (t = o(e, n), function(n) {
					this.setAttribute(a, t(n))
				})
			})
		}

		function i(n) {
			return null == n ? r : (n += "", function() {
				var t, e = this.getAttributeNS(a.space, a.local);
				return e !== n && (t = o(e, n), function(n) {
					this.setAttributeNS(a.space, a.local, t(n))
				})
			})
		}
		if (arguments.length < 2) {
			for (t in n) this.attr(t, n[t]);
			return this
		}
		var o = "transform" == n ? Hu : du,
			a = Go.ns.qualify(n);
		return Oo(this, "attr." + n, t, a.local ? i : u)
	}, Rs.attrTween = function(n, t) {
		function e(n, e) {
			var r = t.call(this, n, e, this.getAttribute(u));
			return r && function(n) {
				this.setAttribute(u, r(n))
			}
		}

		function r(n, e) {
			var r = t.call(this, n, e, this.getAttributeNS(u.space, u.local));
			return r && function(n) {
				this.setAttributeNS(u.space, u.local, r(n))
			}
		}
		var u = Go.ns.qualify(n);
		return this.tween("attr." + n, u.local ? r : e)
	}, Rs.style = function(n, t, e) {
		function r() {
			this.style.removeProperty(n)
		}

		function u(t) {
			return null == t ? r : (t += "", function() {
				var r, u = ea.getComputedStyle(this, null)
						.getPropertyValue(n);
				return u !== t && (r = du(u, t), function(t) {
					this.style.setProperty(n, r(t), e)
				})
			})
		}
		var i = arguments.length;
		if (3 > i) {
			if ("string" != typeof n) {
				2 > i && (t = "");
				for (e in n) this.style(e, n[e], t);
				return this
			}
			e = ""
		}
		return Oo(this, "style." + n, t, u)
	}, Rs.styleTween = function(n, t, e) {
		function r(r, u) {
			var i = t.call(this, r, u, ea.getComputedStyle(this, null)
				.getPropertyValue(n));
			return i && function(t) {
				this.style.setProperty(n, i(t), e)
			}
		}
		return arguments.length < 3 && (e = ""), this.tween("style." + n, r)
	}, Rs.text = function(n) {
		return Oo(this, "text", n, Io)
	}, Rs.remove = function() {
		return this.each("end.transition", function() {
			var n;
			this.__transition__.count < 2 && (n = this.parentNode) && n.removeChild(this)
		})
	}, Rs.ease = function(n) {
		var t = this.id;
		return arguments.length < 1 ? this.node()
			.__transition__[t].ease : ("function" != typeof n && (n = Go.ease.apply(Go, arguments)), P(this, function(e) {
				e.__transition__[t].ease = n
			}))
	}, Rs.delay = function(n) {
		var t = this.id;
		return arguments.length < 1 ? this.node()
			.__transition__[t].delay : P(this, "function" == typeof n ? function(e, r, u) {
				e.__transition__[t].delay = +n.call(e, e.__data__, r, u)
			} : (n = +n, function(e) {
				e.__transition__[t].delay = n
			}))
	}, Rs.duration = function(n) {
		var t = this.id;
		return arguments.length < 1 ? this.node()
			.__transition__[t].duration : P(this, "function" == typeof n ? function(e, r, u) {
				e.__transition__[t].duration = Math.max(1, n.call(e, e.__data__, r, u))
			} : (n = Math.max(1, n), function(e) {
				e.__transition__[t].duration = n
			}))
	}, Rs.each = function(n, t) {
		var e = this.id;
		if (arguments.length < 2) {
			var r = Ts,
				u = Ls;
			Ls = e, P(this, function(t, r, u) {
				Ts = t.__transition__[e], n.call(t, t.__data__, r, u)
			}), Ts = r, Ls = u
		} else P(this, function(r) {
			var u = r.__transition__[e];
			(u.event || (u.event = Go.dispatch("start", "end")))
				.on(n, t)
		});
		return this
	}, Rs.transition = function() {
		for (var n, t, e, r, u = this.id, i = ++Ds, o = [], a = 0, c = this.length; c > a; a++) {
			o.push(n = []);
			for (var t = this[a], s = 0, l = t.length; l > s; s++)(e = t[s]) && (r = Object.create(e.__transition__[u]), r.delay += r.duration, Yo(e, s, i, r)), n.push(e)
		}
		return Fo(o, i)
	}, Go.svg.axis = function() {
		function n(n) {
			n.each(function() {
				var n, s = Go.select(this),
					l = this.__chart__ || e,
					f = this.__chart__ = e.copy(),
					h = null == c ? f.ticks ? f.ticks.apply(f, a) : f.domain() : c,
					g = null == t ? f.tickFormat ? f.tickFormat.apply(f, a) : At : t,
					p = s.selectAll(".tick")
						.data(h, f),
					v = p.enter()
						.insert("g", ".domain")
						.attr("class", "tick")
						.style("opacity", Ta),
					d = Go.transition(p.exit())
						.style("opacity", Ta)
						.remove(),
					m = Go.transition(p.order())
						.style("opacity", 1),
					y = Hi(f),
					x = s.selectAll(".domain")
						.data([0]),
					M = (x.enter()
						.append("path")
						.attr("class", "domain"), Go.transition(x));
				v.append("line"), v.append("text");
				var _ = v.select("line"),
					b = m.select("line"),
					w = p.select("text")
						.text(g),
					S = v.select("text"),
					k = m.select("text");
				switch (r) {
					case "bottom":
						n = Zo, _.attr("y2", u), S.attr("y", Math.max(u, 0) + o), b.attr("x2", 0)
							.attr("y2", u), k.attr("x", 0)
							.attr("y", Math.max(u, 0) + o), w.attr("dy", ".71em")
							.style("text-anchor", "middle"), M.attr("d", "M" + y[0] + "," + i + "V0H" + y[1] + "V" + i);
						break;
					case "top":
						n = Zo, _.attr("y2", -u), S.attr("y", -(Math.max(u, 0) + o)), b.attr("x2", 0)
							.attr("y2", -u), k.attr("x", 0)
							.attr("y", -(Math.max(u, 0) + o)), w.attr("dy", "0em")
							.style("text-anchor", "middle"), M.attr("d", "M" + y[0] + "," + -i + "V0H" + y[1] + "V" + -i);
						break;
					case "left":
						n = Vo, _.attr("x2", -u), S.attr("x", -(Math.max(u, 0) + o)), b.attr("x2", -u)
							.attr("y2", 0), k.attr("x", -(Math.max(u, 0) + o))
							.attr("y", 0), w.attr("dy", ".32em")
							.style("text-anchor", "end"), M.attr("d", "M" + -i + "," + y[0] + "H0V" + y[1] + "H" + -i);
						break;
					case "right":
						n = Vo, _.attr("x2", u), S.attr("x", Math.max(u, 0) + o), b.attr("x2", u)
							.attr("y2", 0), k.attr("x", Math.max(u, 0) + o)
							.attr("y", 0), w.attr("dy", ".32em")
							.style("text-anchor", "start"), M.attr("d", "M" + i + "," + y[0] + "H0V" + y[1] + "H" + i)
				}
				if (f.rangeBand) {
					var E = f,
						A = E.rangeBand() / 2;
					l = f = function(n) {
						return E(n) + A
					}
				} else l.rangeBand ? l = f : d.call(n, f);
				v.call(n, l), m.call(n, f)
			})
		}
		var t, e = Go.scale.linear(),
			r = Ps,
			u = 6,
			i = 6,
			o = 3,
			a = [10],
			c = null;
		return n.scale = function(t) {
			return arguments.length ? (e = t, n) : e
		}, n.orient = function(t) {
			return arguments.length ? (r = t in Us ? t + "" : Ps, n) : r
		}, n.ticks = function() {
			return arguments.length ? (a = arguments, n) : a
		}, n.tickValues = function(t) {
			return arguments.length ? (c = t, n) : c
		}, n.tickFormat = function(e) {
			return arguments.length ? (t = e, n) : t
		}, n.tickSize = function(t) {
			var e = arguments.length;
			return e ? (u = +t, i = +arguments[e - 1], n) : u
		}, n.innerTickSize = function(t) {
			return arguments.length ? (u = +t, n) : u
		}, n.outerTickSize = function(t) {
			return arguments.length ? (i = +t, n) : i
		}, n.tickPadding = function(t) {
			return arguments.length ? (o = +t, n) : o
		}, n.tickSubdivide = function() {
			return arguments.length && n
		}, n
	};
	var Ps = "bottom",
		Us = {
			top: 1,
			right: 1,
			bottom: 1,
			left: 1
		};
	Go.svg.brush = function() {
		function n(i) {
			i.each(function() {
				var i = Go.select(this)
					.style("pointer-events", "all")
					.style("-webkit-tap-highlight-color", "rgba(0,0,0,0)")
					.on("mousedown.brush", u)
					.on("touchstart.brush", u),
					o = i.selectAll(".background")
						.data([0]);
				o.enter()
					.append("rect")
					.attr("class", "background")
					.style("visibility", "hidden")
					.style("cursor", "crosshair"), i.selectAll(".extent")
					.data([0])
					.enter()
					.append("rect")
					.attr("class", "extent")
					.style("cursor", "move");
				var a = i.selectAll(".resize")
					.data(p, At);
				a.exit()
					.remove(), a.enter()
					.append("g")
					.attr("class", function(n) {
						return "resize " + n
					})
					.style("cursor", function(n) {
						return js[n]
					})
					.append("rect")
					.attr("x", function(n) {
						return /[ew]$/.test(n) ? -3 : null
					})
					.attr("y", function(n) {
						return /^[ns]/.test(n) ? -3 : null
					})
					.attr("width", 6)
					.attr("height", 6)
					.style("visibility", "hidden"), a.style("display", n.empty() ? "none" : null);
				var l, f = Go.transition(i),
					h = Go.transition(o);
				c && (l = Hi(c), h.attr("x", l[0])
					.attr("width", l[1] - l[0]), e(f)), s && (l = Hi(s), h.attr("y", l[0])
					.attr("height", l[1] - l[0]), r(f)), t(f)
			})
		}

		function t(n) {
			n.selectAll(".resize")
				.attr("transform", function(n) {
					return "translate(" + l[+/e$/.test(n)] + "," + f[+/^s/.test(n)] + ")"
				})
		}

		function e(n) {
			n.select(".extent")
				.attr("x", l[0]), n.selectAll(".extent,.n>rect,.s>rect")
				.attr("width", l[1] - l[0])
		}

		function r(n) {
			n.select(".extent")
				.attr("y", f[0]), n.selectAll(".extent,.e>rect,.w>rect")
				.attr("height", f[1] - f[0])
		}

		function u() {
			function u() {
				32 == Go.event.keyCode && (C || (x = null, L[0] -= l[1], L[1] -= f[1], C = 2), y())
			}

			function p() {
				32 == Go.event.keyCode && 2 == C && (L[0] += l[1], L[1] += f[1], C = 0, y())
			}

			function v() {
				var n = Go.mouse(_),
					u = !1;
				M && (n[0] += M[0], n[1] += M[1]), C || (Go.event.altKey ? (x || (x = [(l[0] + l[1]) / 2, (f[0] + f[1]) / 2]), L[0] = l[+(n[0] < x[0])], L[1] = f[+(n[1] < x[1])]) : x = null), E && d(n, c, 0) && (e(S), u = !0), A && d(n, s, 1) && (r(S), u = !0), u && (t(S), w({
					type: "brush",
					mode: C ? "move" : "resize"
				}))
			}

			function d(n, t, e) {
				var r, u, a = Hi(t),
					c = a[0],
					s = a[1],
					p = L[e],
					v = e ? f : l,
					d = v[1] - v[0];
				return C && (c -= p, s -= d + p), r = (e ? g : h) ? Math.max(c, Math.min(s, n[e])) : n[e], C ? u = (r += p) + d : (x && (p = Math.max(c, Math.min(s, 2 * x[e] - r))), r > p ? (u = r, r = p) : u = p), v[0] != r || v[1] != u ? (e ? o = null : i = null, v[0] = r, v[1] = u, !0) : void 0
			}

			function m() {
				v(), S.style("pointer-events", "all")
					.selectAll(".resize")
					.style("display", n.empty() ? "none" : null), Go.select("body")
					.style("cursor", null), T.on("mousemove.brush", null)
					.on("mouseup.brush", null)
					.on("touchmove.brush", null)
					.on("touchend.brush", null)
					.on("keydown.brush", null)
					.on("keyup.brush", null), N(), w({
						type: "brushend"
					})
			}
			var x, M, _ = this,
				b = Go.select(Go.event.target),
				w = a.of(_, arguments),
				S = Go.select(_),
				k = b.datum(),
				E = !/^(n|s)$/.test(k) && c,
				A = !/^(e|w)$/.test(k) && s,
				C = b.classed("extent"),
				N = Y(),
				L = Go.mouse(_),
				T = Go.select(ea)
					.on("keydown.brush", u)
					.on("keyup.brush", p);
			if (Go.event.changedTouches ? T.on("touchmove.brush", v)
				.on("touchend.brush", m) : T.on("mousemove.brush", v)
				.on("mouseup.brush", m), S.interrupt()
				.selectAll("*")
				.interrupt(), C) L[0] = l[0] - L[0], L[1] = f[0] - L[1];
			else if (k) {
				var q = +/w$/.test(k),
					z = +/^n/.test(k);
				M = [l[1 - q] - L[0], f[1 - z] - L[1]], L[0] = l[q], L[1] = f[z]
			} else Go.event.altKey && (x = L.slice());
			S.style("pointer-events", "none")
				.selectAll(".resize")
				.style("display", null), Go.select("body")
				.style("cursor", b.style("cursor")), w({
					type: "brushstart"
				}), v()
		}
		var i, o, a = M(n, "brushstart", "brush", "brushend"),
			c = null,
			s = null,
			l = [0, 0],
			f = [0, 0],
			h = !0,
			g = !0,
			p = Hs[0];
		return n.event = function(n) {
			n.each(function() {
				var n = a.of(this, arguments),
					t = {
						x: l,
						y: f,
						i: i,
						j: o
					}, e = this.__chart__ || t;
				this.__chart__ = t, Ls ? Go.select(this)
					.transition()
					.each("start.brush", function() {
						i = e.i, o = e.j, l = e.x, f = e.y, n({
							type: "brushstart"
						})
					})
					.tween("brush:brush", function() {
						var e = mu(l, t.x),
							r = mu(f, t.y);
						return i = o = null,
						function(u) {
							l = t.x = e(u), f = t.y = r(u), n({
								type: "brush",
								mode: "resize"
							})
						}
					})
					.each("end.brush", function() {
						i = t.i, o = t.j, n({
							type: "brush",
							mode: "resize"
						}), n({
							type: "brushend"
						})
					}) : (n({
						type: "brushstart"
					}), n({
						type: "brush",
						mode: "resize"
					}), n({
						type: "brushend"
					}))
			})
		}, n.x = function(t) {
			return arguments.length ? (c = t, p = Hs[!c << 1 | !s], n) : c
		}, n.y = function(t) {
			return arguments.length ? (s = t, p = Hs[!c << 1 | !s], n) : s
		}, n.clamp = function(t) {
			return arguments.length ? (c && s ? (h = !! t[0], g = !! t[1]) : c ? h = !! t : s && (g = !! t), n) : c && s ? [h, g] : c ? h : s ? g : null
		}, n.extent = function(t) {
			var e, r, u, a, h;
			return arguments.length ? (c && (e = t[0], r = t[1], s && (e = e[0], r = r[0]), i = [e, r], c.invert && (e = c(e), r = c(r)), e > r && (h = e, e = r, r = h), (e != l[0] || r != l[1]) && (l = [e, r])), s && (u = t[0], a = t[1], c && (u = u[1], a = a[1]), o = [u, a], s.invert && (u = s(u), a = s(a)), u > a && (h = u, u = a, a = h), (u != f[0] || a != f[1]) && (f = [u, a])), n) : (c && (i ? (e = i[0], r = i[1]) : (e = l[0], r = l[1], c.invert && (e = c.invert(e), r = c.invert(r)), e > r && (h = e, e = r, r = h))), s && (o ? (u = o[0], a = o[1]) : (u = f[0], a = f[1], s.invert && (u = s.invert(u), a = s.invert(a)), u > a && (h = u, u = a, a = h))), c && s ? [
				[e, u],
				[r, a]
			] : c ? [e, r] : s && [u, a])
		}, n.clear = function() {
			return n.empty() || (l = [0, 0], f = [0, 0], i = o = null), n
		}, n.empty = function() {
			return !!c && l[0] == l[1] || !! s && f[0] == f[1]
		}, Go.rebind(n, a, "on")
	};
	var js = {
		n: "ns-resize",
		e: "ew-resize",
		s: "ns-resize",
		w: "ew-resize",
		nw: "nwse-resize",
		ne: "nesw-resize",
		se: "nwse-resize",
		sw: "nesw-resize"
	}, Hs = [
			["n", "e", "s", "w", "nw", "ne", "se", "sw"],
			["e", "w"],
			["n", "s"],
			[]
		],
		Fs = ic.format = fc.timeFormat,
		Os = Fs.utc,
		Is = Os("%Y-%m-%dT%H:%M:%S.%LZ");
	Fs.iso = Date.prototype.toISOString && +new Date("2000-01-01T00:00:00.000Z") ? $o : Is, $o.parse = function(n) {
		var t = new Date(n);
		return isNaN(t) ? null : t
	}, $o.toString = Is.toString, ic.second = Ht(function(n) {
		return new oc(1e3 * Math.floor(n / 1e3))
	}, function(n, t) {
		n.setTime(n.getTime() + 1e3 * Math.floor(t))
	}, function(n) {
		return n.getSeconds()
	}), ic.seconds = ic.second.range, ic.seconds.utc = ic.second.utc.range, ic.minute = Ht(function(n) {
		return new oc(6e4 * Math.floor(n / 6e4))
	}, function(n, t) {
		n.setTime(n.getTime() + 6e4 * Math.floor(t))
	}, function(n) {
		return n.getMinutes()
	}), ic.minutes = ic.minute.range, ic.minutes.utc = ic.minute.utc.range, ic.hour = Ht(function(n) {
		var t = n.getTimezoneOffset() / 60;
		return new oc(36e5 * (Math.floor(n / 36e5 - t) + t))
	}, function(n, t) {
		n.setTime(n.getTime() + 36e5 * Math.floor(t))
	}, function(n) {
		return n.getHours()
	}), ic.hours = ic.hour.range, ic.hours.utc = ic.hour.utc.range, ic.month = Ht(function(n) {
		return n = ic.day(n), n.setDate(1), n
	}, function(n, t) {
		n.setMonth(n.getMonth() + t)
	}, function(n) {
		return n.getMonth()
	}), ic.months = ic.month.range, ic.months.utc = ic.month.utc.range;
	var Ys = [1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5, 864e5, 1728e5, 6048e5, 2592e6, 7776e6, 31536e6],
		Zs = [
			[ic.second, 1],
			[ic.second, 5],
			[ic.second, 15],
			[ic.second, 30],
			[ic.minute, 1],
			[ic.minute, 5],
			[ic.minute, 15],
			[ic.minute, 30],
			[ic.hour, 1],
			[ic.hour, 3],
			[ic.hour, 6],
			[ic.hour, 12],
			[ic.day, 1],
			[ic.day, 2],
			[ic.week, 1],
			[ic.month, 1],
			[ic.month, 3],
			[ic.year, 1]
		],
		Vs = Fs.multi([
			[".%L",
				function(n) {
					return n.getMilliseconds()
				}
			],
			[":%S",
				function(n) {
					return n.getSeconds()
				}
			],
			["%I:%M",
				function(n) {
					return n.getMinutes()
				}
			],
			["%I %p",
				function(n) {
					return n.getHours()
				}
			],
			["%a %d",
				function(n) {
					return n.getDay() && 1 != n.getDate()
				}
			],
			["%b %d",
				function(n) {
					return 1 != n.getDate()
				}
			],
			["%B",
				function(n) {
					return n.getMonth()
				}
			],
			["%Y", Ae]
		]),
		$s = {
			range: function(n, t, e) {
				return Go.range(Math.ceil(n / e) * e, +t, e)
					.map(Bo)
			},
			floor: At,
			ceil: At
		};
	Zs.year = ic.year, ic.scale = function() {
		return Xo(Go.scale.linear(), Zs, Vs)
	};
	var Xs = Zs.map(function(n) {
		return [n[0].utc, n[1]]
	}),
		Bs = Os.multi([
			[".%L",
				function(n) {
					return n.getUTCMilliseconds()
				}
			],
			[":%S",
				function(n) {
					return n.getUTCSeconds()
				}
			],
			["%I:%M",
				function(n) {
					return n.getUTCMinutes()
				}
			],
			["%I %p",
				function(n) {
					return n.getUTCHours()
				}
			],
			["%a %d",
				function(n) {
					return n.getUTCDay() && 1 != n.getUTCDate()
				}
			],
			["%b %d",
				function(n) {
					return 1 != n.getUTCDate()
				}
			],
			["%B",
				function(n) {
					return n.getUTCMonth()
				}
			],
			["%Y", Ae]
		]);
	Xs.year = ic.year.utc, ic.scale.utc = function() {
		return Xo(Go.scale.linear(), Xs, Bs)
	}, Go.text = Ct(function(n) {
		return n.responseText
	}), Go.json = function(n, t) {
		return Nt(n, "application/json", Jo, t)
	}, Go.html = function(n, t) {
		return Nt(n, "text/html", Wo, t)
	}, Go.xml = Ct(function(n) {
		return n.responseXML
	}), "function" == typeof define && define.amd ? define(Go) : "object" == typeof module && module.exports ? module.exports = Go : this.d3 = Go
}();
/**
 * @license AngularJS v1.2.6
 * (c) 2010-2014 Google, Inc. http://angularjs.org
 * License: MIT
 */
(function(window, angular, undefined) {
	'use strict';

	var $resourceMinErr = angular.$$minErr('$resource');

	// Helper functions and regex to lookup a dotted path on an object
	// stopping at undefined/null.  The path must be composed of ASCII
	// identifiers (just like $parse)
	var MEMBER_NAME_REGEX = /^(\.[a-zA-Z_$][0-9a-zA-Z_$]*)+$/;

	function isValidDottedPath(path) {
		return (path != null && path !== '' && path !== 'hasOwnProperty' &&
			MEMBER_NAME_REGEX.test('.' + path));
	}

	function lookupDottedPath(obj, path) {
		if (!isValidDottedPath(path)) {
			throw $resourceMinErr('badmember', 'Dotted member path "@{0}" is invalid.', path);
		}
		var keys = path.split('.');
		for (var i = 0, ii = keys.length; i < ii && obj !== undefined; i++) {
			var key = keys[i];
			obj = (obj !== null) ? obj[key] : undefined;
		}
		return obj;
	}

	/**
	 * Create a shallow copy of an object and clear other fields from the destination
	 */
	function shallowClearAndCopy(src, dst) {
		dst = dst || {};

		angular.forEach(dst, function(value, key) {
			delete dst[key];
		});

		for (var key in src) {
			if (src.hasOwnProperty(key) && key.charAt(0) !== '$' && key.charAt(1) !== '$') {
				dst[key] = src[key];
			}
		}

		return dst;
	}

	/**
	 * @ngdoc overview
	 * @name ngResource
	 * @description
	 *
	 * # ngResource
	 *
	 * The `ngResource` module provides interaction support with RESTful services
	 * via the $resource service.
	 *
	 * {@installModule resource}
	 *
	 * <div doc-module-components="ngResource"></div>
	 *
	 * See {@link ngResource.$resource `$resource`} for usage.
	 */

	/**
 * @ngdoc object
 * @name ngResource.$resource
 * @requires $http
 *
 * @description
 * A factory which creates a resource object that lets you interact with
 * [RESTful](http://en.wikipedia.org/wiki/Representational_State_Transfer) server-side data sources.
 *
 * The returned resource object has action methods which provide high-level behaviors without
 * the need to interact with the low level {@link ng.$http $http} service.
 *
 * Requires the {@link ngResource `ngResource`} module to be installed.
 *
 * @param {string} url A parametrized URL template with parameters prefixed by `:` as in
 *   `/user/:username`. If you are using a URL with a port number (e.g.
 *   `http://example.com:8080/api`), it will be respected.
 *
 *   If you are using a url with a suffix, just add the suffix, like this:
 *   `$resource('http://example.com/resource.json')` or `$resource('http://example.com/:id.json')`
 *   or even `$resource('http://example.com/resource/:resource_id.:format')`
 *   If the parameter before the suffix is empty, :resource_id in this case, then the `/.` will be
 *   collapsed down to a single `.`.  If you need this sequence to appear and not collapse then you
 *   can escape it with `/\.`.
 *
 * @param {Object=} paramDefaults Default values for `url` parameters. These can be overridden in
 *   `actions` methods. If any of the parameter value is a function, it will be executed every time
 *   when a param value needs to be obtained for a request (unless the param was overridden).
 *
 *   Each key value in the parameter object is first bound to url template if present and then any
 *   excess keys are appended to the url seapph query after the `?`.
 *
 *   Given a template `/path/:verb` and parameter `{verb:'greet', salutation:'Hello'}` results in
 *   URL `/path/greet?salutation=Hello`.
 *
 *   If the parameter value is prefixed with `@` then the value of that parameter is extracted from
 *   the data object (useful for non-GET operations).
 *
 * @param {Object.<Object>=} actions Hash with declaration of custom action that should extend the
 *   default set of resource actions. The declaration should be created in the format of {@link
 *   ng.$http#usage_parameters $http.config}:
 *
 *       {action1: {method:?, params:?, isArray:?, headers:?, ...},
 *        action2: {method:?, params:?, isArray:?, headers:?, ...},
 *        ...}
 *
 *   Where:
 *
 *   - **`action`** – {string} – The name of action. This name becomes the name of the method on
 *     your resource object.
 *   - **`method`** – {string} – HTTP request method. Valid methods are: `GET`, `POST`, `PUT`,
 *     `DELETE`, and `JSONP`.
 *   - **`params`** – {Object=} – Optional set of pre-bound parameters for this action. If any of
 *     the parameter value is a function, it will be executed every time when a param value needs to
 *     be obtained for a request (unless the param was overridden).
 *   - **`url`** – {string} – action specific `url` override. The url templating is supported just
 *     like for the resource-level urls.
 *   - **`isArray`** – {boolean=} – If true then the returned object for this action is an array,
 *     see `returns` section.
 *   - **`transformRequest`** –
 *     `{function(data, headersGetter)|Array.<function(data, headersGetter)>}` –
 *     transform function or an array of such functions. The transform function takes the http
 *     request body and headers and returns its transformed (typically serialized) version.
 *   - **`transformResponse`** –
 *     `{function(data, headersGetter)|Array.<function(data, headersGetter)>}` –
 *     transform function or an array of such functions. The transform function takes the http
 *     response body and headers and returns its transformed (typically deserialized) version.
 *   - **`cache`** – `{boolean|Cache}` – If true, a default $http cache will be used to cache the
 *     GET request, otherwise if a cache instance built with
 *     {@link ng.$cacheFactory $cacheFactory}, this cache will be used for
 *     caching.
 *   - **`timeout`** – `{number|Promise}` – timeout in milliseconds, or {@link ng.$q promise} that
 *     should abort the request when resolved.
 *   - **`withCredentials`** - `{boolean}` - whether to set the `withCredentials` flag on the
 *     XHR object. See {@link https://developer.mozilla.org/en/http_access_control#section_5
 *     requests with credentials} for more information.
 *   - **`responseType`** - `{string}` - see {@link
 *     https://developer.mozilla.org/en-US/docs/DOM/XMLHttpRequest#responseType requestType}.
 *   - **`interceptor`** - `{Object=}` - The interceptor object has two optional methods -
 *     `response` and `responseError`. Both `response` and `responseError` interceptors get called
 *     with `http response` object. See {@link ng.$http $http interceptors}.
 *
 * @returns {Object} A resource "class" object with methods for the default set of resource actions
 *   optionally extended with custom `actions`. The default set contains these actions:
 *
 *       { 'get':    {method:'GET'},
 *         'save':   {method:'POST'},
 *         'query':  {method:'GET', isArray:true},
 *         'remove': {method:'DELETE'},
 *         'delete': {method:'DELETE'} };
 *
 *   Calling these methods invoke an {@link ng.$http} with the specified http method,
 *   destination and parameters. When the data is returned from the server then the object is an
 *   instance of the resource class. The actions `save`, `remove` and `delete` are available on it
 *   as  methods with the `$` prefix. This allows you to easily perform CRUD operations (create,
 *   read, update, delete) on server-side data like this:
 *   <pre>
        var User = $resource('/user/:userId', {userId:'@id'});
        var user = User.get({userId:123}, function() {
          user.abc = true;
          user.$save();
        });
     </pre>
 *
 *   It is important to realize that invoking a $resource object method immediately returns an
 *   empty reference (object or array depending on `isArray`). Once the data is returned from the
 *   server the existing reference is populated with the actual data. This is a useful trick since
 *   usually the resource is assigned to a model which is then rendered by the view. Having an empty
 *   object results in no rendering, once the data arrives from the server then the object is
 *   populated with the data and the view automatically re-renders itself showing the new data. This
 *   means that in most cases one never has to write a callback function for the action methods.
 *
 *   The action methods on the class object or instance object can be invoked with the following
 *   parameters:
 *
 *   - HTTP GET "class" actions: `Resource.action([parameters], [success], [error])`
 *   - non-GET "class" actions: `Resource.action([parameters], postData, [success], [error])`
 *   - non-GET instance actions:  `instance.$action([parameters], [success], [error])`
 *
 *   Success callback is called with (value, responseHeaders) arguments. Error callback is called
 *   with (httpResponse) argument.
 *
 *   Class actions return empty instance (with additional properties below).
 *   Instance actions return promise of the action.
 *
 *   The Resource instances and collection have these additional properties:
 *
 *   - `$promise`: the {@link ng.$q promise} of the original server interaction that created this
 *     instance or collection.
 *
 *     On success, the promise is resolved with the same resource instance or collection object,
 *     updated with data from server. This makes it easy to use in
 *     {@link ngRoute.$routeProvider resolve section of $routeProvider.when()} to defer view
 *     rendering until the resource(s) are loaded.
 *
 *     On failure, the promise is resolved with the {@link ng.$http http response} object, without
 *     the `resource` property.
 *
 *   - `$resolved`: `true` after first server interaction is completed (either with success or
 *      rejection), `false` before that. Knowing if the Resource has been resolved is useful in
 *      data-binding.
 *
 * @example
 *
 * # Credit card resource
 *
 * <pre>
     // Define CreditCard class
     var CreditCard = $resource('/user/:userId/card/:cardId',
      {userId:123, cardId:'@id'}, {
       charge: {method:'POST', params:{charge:true}}
      });

     // We can retrieve a collection from the server
     var cards = CreditCard.query(function() {
       // GET: /user/123/card
       // server returns: [ {id:456, number:'1234', name:'Smith'} ];

       var card = cards[0];
       // each item is an instance of CreditCard
       expect(card instanceof CreditCard).toEqual(true);
       card.name = "J. Smith";
       // non GET methods are mapped onto the instances
       card.$save();
       // POST: /user/123/card/456 {id:456, number:'1234', name:'J. Smith'}
       // server returns: {id:456, number:'1234', name: 'J. Smith'};

       // our custom method is mapped as well.
       card.$charge({amount:9.99});
       // POST: /user/123/card/456?amount=9.99&charge=true {id:456, number:'1234', name:'J. Smith'}
     });

     // we can create an instance as well
     var newCard = new CreditCard({number:'0123'});
     newCard.name = "Mike Smith";
     newCard.$save();
     // POST: /user/123/card {number:'0123', name:'Mike Smith'}
     // server returns: {id:789, number:'0123', name: 'Mike Smith'};
     expect(newCard.id).toEqual(789);
 * </pre>
 *
 * The object returned from this function execution is a resource "class" which has "static" method
 * for each action in the definition.
 *
 * Calling these methods invoke `$http` on the `url` template with the given `method`, `params` and
 * `headers`.
 * When the data is returned from the server then the object is an instance of the resource type and
 * all of the non-GET methods are available with `$` prefix. This allows you to easily support CRUD
 * operations (create, read, update, delete) on server-side data.

   <pre>
     var User = $resource('/user/:userId', {userId:'@id'});
     var user = User.get({userId:123}, function() {
       user.abc = true;
       user.$save();
     });
   </pre>
 *
 * It's worth noting that the success callback for `get`, `query` and other methods gets passed
 * in the response that came from the server as well as $http header getter function, so one
 * could rewrite the above example and get access to http headers as:
 *
   <pre>
     var User = $resource('/user/:userId', {userId:'@id'});
     User.get({userId:123}, function(u, getResponseHeaders){
       u.abc = true;
       u.$save(function(u, putResponseHeaders) {
         //u => saved user object
         //putResponseHeaders => $http header getter
       });
     });
   </pre>

 * # Creating a custom 'PUT' request
 * In this example we create a custom method on our resource to make a PUT request
 * <pre>
 *		var app = angular.module('app', ['ngResource', 'ngRoute']);
 *
 *		// Some APIs expect a PUT request in the format URL/object/ID
 *		// Here we are creating an 'update' method 
 *		app.factory('Notes', ['$resource', function($resource) {
 *    return $resource('/notes/:id', null,
 *        {
 *            'update': { method:'PUT' }
 *        });
 *		}]);
 *
 *		// In our controller we get the ID from the URL using ngRoute and $routeParams
 *		// We pass in $routeParams and our Notes factory along with $scope
 *		app.controller('NotesCtrl', ['$scope', '$routeParams', 'Notes',
                                      function($scope, $routeParams, Notes) {
 *    // First get a note object from the factory
 *    var note = Notes.get({ id:$routeParams.id });
 *    $id = note.id;
 *
 *    // Now call update passing in the ID first then the object you are updating
 *    Notes.update({ id:$id }, note);
 *
 *    // This will PUT /notes/ID with the note object in the request payload
 *		}]);
 * </pre>
 */
	angular.module('ngResource', ['ng'])
		.
	factory('$resource', ['$http', '$q',
		function($http, $q) {

			var DEFAULT_ACTIONS = {
				'get': {
					method: 'GET'
				},
				'save': {
					method: 'POST'
				},
				'query': {
					method: 'GET',
					isArray: true
				},
				'remove': {
					method: 'DELETE'
				},
				'delete': {
					method: 'DELETE'
				}
			};
			var noop = angular.noop,
				forEach = angular.forEach,
				extend = angular.extend,
				copy = angular.copy,
				isFunction = angular.isFunction;

			/**
			 * We need our custom method because encodeURIComponent is too aggressive and doesn't follow
			 * http://www.ietf.org/rfc/rfc3986.txt with regards to the character set (pchar) allowed in path
			 * segments:
			 *    segment       = *pchar
			 *    pchar         = unreserved / pct-encoded / sub-delims / ":" / "@"
			 *    pct-encoded   = "%" HEXDIG HEXDIG
			 *    unreserved    = ALPHA / DIGIT / "-" / "." / "_" / "~"
			 *    sub-delims    = "!" / "$" / "&" / "'" / "(" / ")"
			 *                     / "*" / "+" / "," / ";" / "="
			 */
			function encodeUriSegment(val) {
				return encodeUriQuery(val, true)
					.
				replace(/%26/gi, '&')
					.
				replace(/%3D/gi, '=')
					.
				replace(/%2B/gi, '+');
			}


			/**
			 * This method is intended for encoding *key* or *value* parts of query component. We need a
			 * custom method because encodeURIComponent is too aggressive and encodes stuff that doesn't
			 * have to be encoded per http://tools.ietf.org/html/rfc3986:
			 *    query       = *( pchar / "/" / "?" )
			 *    pchar         = unreserved / pct-encoded / sub-delims / ":" / "@"
			 *    unreserved    = ALPHA / DIGIT / "-" / "." / "_" / "~"
			 *    pct-encoded   = "%" HEXDIG HEXDIG
			 *    sub-delims    = "!" / "$" / "&" / "'" / "(" / ")"
			 *                     / "*" / "+" / "," / ";" / "="
			 */
			function encodeUriQuery(val, pctEncodeSpaces) {
				return encodeURIComponent(val)
					.
				replace(/%40/gi, '@')
					.
				replace(/%3A/gi, ':')
					.
				replace(/%24/g, '$')
					.
				replace(/%2C/gi, ',')
					.
				replace(/%20/g, (pctEncodeSpaces ? '%20' : '+'));
			}

			function Route(template, defaults) {
				this.template = template;
				this.defaults = defaults || {};
				this.urlParams = {};
			}

			Route.prototype = {
				setUrlParams: function(config, params, actionUrl) {
					var self = this,
						url = actionUrl || self.template,
						val,
						encodedVal;

					var urlParams = self.urlParams = {};
					forEach(url.split(/\W/), function(param) {
						if (param === 'hasOwnProperty') {
							throw $resourceMinErr('badname', "hasOwnProperty is not a valid parameter name.");
						}
						if (!(new RegExp("^\\d+$")
								.test(param)) && param &&
							(new RegExp("(^|[^\\\\]):" + param + "(\\W|$)")
								.test(url))) {
							urlParams[param] = true;
						}
					});
					url = url.replace(/\\:/g, ':');

					params = params || {};
					forEach(self.urlParams, function(_, urlParam) {
						val = params.hasOwnProperty(urlParam) ? params[urlParam] : self.defaults[urlParam];
						if (angular.isDefined(val) && val !== null) {
							encodedVal = encodeUriSegment(val);
							url = url.replace(new RegExp(":" + urlParam + "(\\W|$)", "g"), encodedVal + "$1");
						} else {
							url = url.replace(new RegExp("(\/?):" + urlParam + "(\\W|$)", "g"), function(match,
								leadingSlashes, tail) {
								if (tail.charAt(0) == '/') {
									return tail;
								} else {
									return leadingSlashes + tail;
								}
							});
						}
					});

					// strip trailing slashes and set the url
					url = url.replace(/\/+$/, '');
					// then replace collapse `/.` if found in the last URL path segment before the query
					// E.g. `http://url.com/id./format?q=x` becomes `http://url.com/id.format?q=x`
					url = url.replace(/\/\.(?=\w+($|\?))/, '.');
					// replace escaped `/\.` with `/.`
					config.url = url.replace(/\/\\\./, '/.');


					// set params - delegate param encoding to $http
					forEach(params, function(value, key) {
						if (!self.urlParams[key]) {
							config.params = config.params || {};
							config.params[key] = value;
						}
					});
				}
			};


			function resourceFactory(url, paramDefaults, actions) {
				var route = new Route(url);

				actions = extend({}, DEFAULT_ACTIONS, actions);

				function extractParams(data, actionParams) {
					var ids = {};
					actionParams = extend({}, paramDefaults, actionParams);
					forEach(actionParams, function(value, key) {
						if (isFunction(value)) {
							value = value();
						}
						ids[key] = value && value.charAt && value.charAt(0) == '@' ?
							lookupDottedPath(data, value.substr(1)) : value;
					});
					return ids;
				}

				function defaultResponseInterceptor(response) {
					return response.resource;
				}

				function Resource(value) {
					shallowClearAndCopy(value || {}, this);
				}

				forEach(actions, function(action, name) {
					var hasBody = /^(POST|PUT|PATCH)$/i.test(action.method);

					Resource[name] = function(a1, a2, a3, a4) {
						var params = {}, data, success, error;

						/* jshint -W086 */
						/* (purposefully fall through case statements) */
						switch (arguments.length) {
							case 4:
								error = a4;
								success = a3;
								//fallthrough
							case 3:
							case 2:
								if (isFunction(a2)) {
									if (isFunction(a1)) {
										success = a1;
										error = a2;
										break;
									}

									success = a2;
									error = a3;
									//fallthrough
								} else {
									params = a1;
									data = a2;
									success = a3;
									break;
								}
							case 1:
								if (isFunction(a1)) success = a1;
								else if (hasBody) data = a1;
								else params = a1;
								break;
							case 0:
								break;
							default:
								throw $resourceMinErr('badargs',
									"Expected up to 4 arguments [params, data, success, error], got {0} arguments",
									arguments.length);
						}
						/* jshint +W086 */
						/* (purposefully fall through case statements) */

						var isInstanceCall = this instanceof Resource;
						var value = isInstanceCall ? data : (action.isArray ? [] : new Resource(data));
						var httpConfig = {};
						var responseInterceptor = action.interceptor && action.interceptor.response ||
							defaultResponseInterceptor;
						var responseErrorInterceptor = action.interceptor && action.interceptor.responseError ||
							undefined;

						forEach(action, function(value, key) {
							if (key != 'params' && key != 'isArray' && key != 'interceptor') {
								httpConfig[key] = copy(value);
							}
						});

						if (hasBody) httpConfig.data = data;
						route.setUrlParams(httpConfig,
							extend({}, extractParams(data, action.params || {}), params),
							action.url);

						var promise = $http(httpConfig)
							.then(function(response) {
								var data = response.data,
									promise = value.$promise;

								if (data) {
									// Need to convert action.isArray to boolean in case it is undefined
									// jshint -W018
									if (angular.isArray(data) !== ( !! action.isArray)) {
										throw $resourceMinErr('badcfg', 'Error in resource configuration. Expected ' +
											'response to contain an {0} but got an {1}',
											action.isArray ? 'array' : 'object', angular.isArray(data) ? 'array' : 'object');
									}
									// jshint +W018
									if (action.isArray) {
										value.length = 0;
										forEach(data, function(item) {
											value.push(new Resource(item));
										});
									} else {
										shallowClearAndCopy(data, value);
										value.$promise = promise;
									}
								}

								value.$resolved = true;

								response.resource = value;

								return response;
							}, function(response) {
								value.$resolved = true;

								(error || noop)(response);

								return $q.reject(response);
							});

						promise = promise.then(
							function(response) {
								var value = responseInterceptor(response);
								(success || noop)(value, response.headers);
								return value;
							},
							responseErrorInterceptor);

						if (!isInstanceCall) {
							// we are creating instance / collection
							// - set the initial promise
							// - return the instance / collection
							value.$promise = promise;
							value.$resolved = false;

							return value;
						}

						// instance call
						return promise;
					};


					Resource.prototype['$' + name] = function(params, success, error) {
						if (isFunction(params)) {
							error = success;
							success = params;
							params = {};
						}
						var result = Resource[name].call(this, params, this, success, error);
						return result.$promise || result;
					};
				});

				Resource.bind = function(additionalParamDefaults) {
					return resourceFactory(url, extend({}, paramDefaults, additionalParamDefaults), actions);
				};

				return Resource;
			}

			return resourceFactory;
		}
	]);


})(window, window.angular);

/**
 * @license AngularJS v1.2.6
 * (c) 2010-2014 Google, Inc. http://angularjs.org
 * License: MIT
 */
(function(window, angular, undefined) {
	'use strict';

	/**
	 * @ngdoc overview
	 * @name ngRoute
	 * @description
	 *
	 * # ngRoute
	 *
	 * The `ngRoute` module provides routing and deeplinking services and directives for angular apps.
	 *
	 * ## Example
	 * See {@link ngRoute.$route#example $route} for an example of configuring and using `ngRoute`.
	 *
	 * {@installModule route}
	 *
	 * <div doc-module-components="ngRoute"></div>
	 */
	/* global -ngRouteModule */
	var ngRouteModule = angular.module('ngRoute', ['ng'])
		.
	provider('$route', $RouteProvider);

	/**
	 * @ngdoc object
	 * @name ngRoute.$routeProvider
	 * @function
	 *
	 * @description
	 *
	 * Used for configuring routes.
	 *
	 * ## Example
	 * See {@link ngRoute.$route#example $route} for an example of configuring and using `ngRoute`.
	 *
	 * ## Dependencies
	 * Requires the {@link ngRoute `ngRoute`} module to be installed.
	 */
	function $RouteProvider() {
		function inherit(parent, extra) {
			return angular.extend(new(angular.extend(function() {}, {
				prototype: parent
			}))(), extra);
		}

		var routes = {};

		/**
		 * @ngdoc method
		 * @name ngRoute.$routeProvider#when
		 * @methodOf ngRoute.$routeProvider
		 *
		 * @param {string} path Route path (matched against `$location.path`). If `$location.path`
		 *    contains redundant trailing slash or is missing one, the route will still match and the
		 *    `$location.path` will be updated to add or drop the trailing slash to exactly match the
		 *    route definition.
		 *
		 *      * `path` can contain named groups starting with a colon: e.g. `:name`. All characters up
		 *        to the next slash are matched and stored in `$routeParams` under the given `name`
		 *        when the route matches.
		 *      * `path` can contain named groups starting with a colon and ending with a star:
		 *        e.g.`:name*`. All characters are eagerly stored in `$routeParams` under the given `name`
		 *        when the route matches.
		 *      * `path` can contain optional named groups with a question mark: e.g.`:name?`.
		 *
		 *    For example, routes like `/color/:color/largecode/:largecode*\/edit` will match
		 *    `/color/brown/largecode/code/with/slashs/edit` and extract:
		 *
		 *      * `color: brown`
		 *      * `largecode: code/with/slashs`.
		 *
		 *
		 * @param {Object} route Mapping information to be assigned to `$route.current` on route
		 *    match.
		 *
		 *    Object properties:
		 *
		 *    - `controller` – `{(string|function()=}` – Controller fn that should be associated with
		 *      newly created scope or the name of a {@link angular.Module#controller registered
		 *      controller} if passed as a string.
		 *    - `controllerAs` – `{string=}` – A controller alias name. If present the controller will be
		 *      published to scope under the `controllerAs` name.
		 *    - `template` – `{string=|function()=}` – html template as a string or a function that
		 *      returns an html template as a string which should be used by {@link
		 *      ngRoute.directive:ngView ngView} or {@link ng.directive:ngInclude ngInclude} directives.
		 *      This property takes precedence over `templateUrl`.
		 *
		 *      If `template` is a function, it will be called with the following parameters:
		 *
		 *      - `{Array.<Object>}` - route parameters extracted from the current
		 *        `$location.path()` by applying the current route
		 *
		 *    - `templateUrl` – `{string=|function()=}` – path or function that returns a path to an html
		 *      template that should be used by {@link ngRoute.directive:ngView ngView}.
		 *
		 *      If `templateUrl` is a function, it will be called with the following parameters:
		 *
		 *      - `{Array.<Object>}` - route parameters extracted from the current
		 *        `$location.path()` by applying the current route
		 *
		 *    - `resolve` - `{Object.<string, function>=}` - An optional map of dependencies which should
		 *      be injected into the controller. If any of these dependencies are promises, the router
		 *      will wait for them all to be resolved or one to be rejected before the controller is
		 *      instantiated.
		 *      If all the promises are resolved successfully, the values of the resolved promises are
		 *      injected and {@link ngRoute.$route#$routeChangeSuccess $routeChangeSuccess} event is
		 *      fired. If any of the promises are rejected the
		 *      {@link ngRoute.$route#$routeChangeError $routeChangeError} event is fired. The map object
		 *      is:
		 *
		 *      - `key` – `{string}`: a name of a dependency to be injected into the controller.
		 *      - `factory` - `{string|function}`: If `string` then it is an alias for a service.
		 *        Otherwise if function, then it is {@link api/AUTO.$injector#invoke injected}
		 *        and the return value is treated as the dependency. If the result is a promise, it is
		 *        resolved before its value is injected into the controller. Be aware that
		 *        `ngRoute.$routeParams` will still refer to the previous route within these resolve
		 *        functions.  Use `$route.current.params` to access the new route parameters, instead.
		 *
		 *    - `redirectTo` – {(string|function())=} – value to update
		 *      {@link ng.$location $location} path with and trigger route redirection.
		 *
		 *      If `redirectTo` is a function, it will be called with the following parameters:
		 *
		 *      - `{Object.<string>}` - route parameters extracted from the current
		 *        `$location.path()` by applying the current route templateUrl.
		 *      - `{string}` - current `$location.path()`
		 *      - `{Object}` - current `$location.search()`
		 *
		 *      The custom `redirectTo` function is expected to return a string which will be used
		 *      to update `$location.path()` and `$location.search()`.
		 *
		 *    - `[reloadOnSearch=true]` - {boolean=} - reload route when only `$location.search()`
		 *      or `$location.hash()` changes.
		 *
		 *      If the option is set to `false` and url in the browser changes, then
		 *      `$routeUpdate` event is broadcasted on the root scope.
		 *
		 *    - `[caseInsensitiveMatch=false]` - {boolean=} - match routes without being case sensitive
		 *
		 *      If the option is set to `true`, then the particular route can be matched without being
		 *      case sensitive
		 *
		 * @returns {Object} self
		 *
		 * @description
		 * Adds a new route definition to the `$route` service.
		 */
		this.when = function(path, route) {
			routes[path] = angular.extend({
					reloadOnSearch: true
				},
				route,
				path && pathRegExp(path, route)
			);

			// create redirection for trailing slashes
			if (path) {
				var redirectPath = (path[path.length - 1] == '/') ? path.substr(0, path.length - 1) : path + '/';

				routes[redirectPath] = angular.extend({
						redirectTo: path
					},
					pathRegExp(redirectPath, route)
				);
			}

			return this;
		};

		/**
		 * @param path {string} path
		 * @param opts {Object} options
		 * @return {?Object}
		 *
		 * @description
		 * Normalizes the given path, returning a regular expression
		 * and the original path.
		 *
		 * Inspired by pathRexp in visionmedia/express/lib/utils.js.
		 */
		function pathRegExp(path, opts) {
			var insensitive = opts.caseInsensitiveMatch,
				ret = {
					originalPath: path,
					regexp: path
				},
				keys = ret.keys = [];

			path = path
				.replace(/([().])/g, '\\$1')
				.replace(/(\/)?:(\w+)([\?|\*])?/g, function(_, slash, key, option) {
					var optional = option === '?' ? option : null;
					var star = option === '*' ? option : null;
					keys.push({
						name: key,
						optional: !! optional
					});
					slash = slash || '';
					return '' + (optional ? '' : slash) + '(?:' + (optional ? slash : '') + (star && '(.+?)' || '([^/]+)') + (optional || '') + ')' + (optional || '');
				})
				.replace(/([\/$\*])/g, '\\$1');

			ret.regexp = new RegExp('^' + path + '$', insensitive ? 'i' : '');
			return ret;
		}

		/**
		 * @ngdoc method
		 * @name ngRoute.$routeProvider#otherwise
		 * @methodOf ngRoute.$routeProvider
		 *
		 * @description
		 * Sets route definition that will be used on route change when no other route definition
		 * is matched.
		 *
		 * @param {Object} params Mapping information to be assigned to `$route.current`.
		 * @returns {Object} self
		 */
		this.otherwise = function(params) {
			this.when(null, params);
			return this;
		};


		this.$get = ['$rootScope',
			'$location',
			'$routeParams',
			'$q',
			'$injector',
			'$http',
			'$templateCache',
			'$sce',
			function($rootScope, $location, $routeParams, $q, $injector, $http, $templateCache, $sce) {

				/**
     * @ngdoc object
     * @name ngRoute.$route
     * @requires $location
     * @requires $routeParams
     *
     * @property {Object} current Reference to the current route definition.
     * The route definition contains:
     *
     *   - `controller`: The controller constructor as define in route definition.
     *   - `locals`: A map of locals which is used by {@link ng.$controller $controller} service for
     *     controller instantiation. The `locals` contain
     *     the resolved values of the `resolve` map. Additionally the `locals` also contain:
     *
     *     - `$scope` - The current route scope.
     *     - `$template` - The current route template HTML.
     *
     * @property {Array.<Object>} routes Array of all configured routes.
     *
     * @description
     * `$route` is used for deep-linking URLs to controllers and views (HTML partials).
     * It watches `$location.url()` and tries to map the path to an existing route definition.
     *
     * Requires the {@link ngRoute `ngRoute`} module to be installed.
     *
     * You can define routes through {@link ngRoute.$routeProvider $routeProvider}'s API.
     *
     * The `$route` service is typically used in conjunction with the
     * {@link ngRoute.directive:ngView `ngView`} directive and the
     * {@link ngRoute.$routeParams `$routeParams`} service.
     *
     * @example
       This example shows how changing the URL hash causes the `$route` to match a route against the
       URL, and the `ngView` pulls in the partial.

       Note that this example is using {@link ng.directive:script inlined templates}
       to get it working on jsfiddle as well.

     <example module="ngViewExample" deps="angular-route.js">
       <file name="index.html">
         <div ng-controller="MainCntl">
           Choose:
           <a href="Book/Moby">Moby</a> |
           <a href="Book/Moby/ch/1">Moby: Ch1</a> |
           <a href="Book/Gatsby">Gatsby</a> |
           <a href="Book/Gatsby/ch/4?key=value">Gatsby: Ch4</a> |
           <a href="Book/Scarlet">Scarlet Letter</a><br/>

           <div ng-view></div>
           <hr />

           <pre>$location.path() = {{$location.path()}}</pre>
           <pre>$route.current.templateUrl = {{$route.current.templateUrl}}</pre>
           <pre>$route.current.params = {{$route.current.params}}</pre>
           <pre>$route.current.scope.name = {{$route.current.scope.name}}</pre>
           <pre>$routeParams = {{$routeParams}}</pre>
         </div>
       </file>

       <file name="book.html">
         controller: {{name}}<br />
         Book Id: {{params.bookId}}<br />
       </file>

       <file name="chapter.html">
         controller: {{name}}<br />
         Book Id: {{params.bookId}}<br />
         Chapter Id: {{params.chapterId}}
       </file>

       <file name="script.js">
         angular.module('ngViewExample', ['ngRoute'])

         .config(function($routeProvider, $locationProvider) {
           $routeProvider.when('/Book/:bookId', {
             templateUrl: 'book.html',
             controller: BookCntl,
             resolve: {
               // I will cause a 1 second delay
               delay: function($q, $timeout) {
                 var delay = $q.defer();
                 $timeout(delay.resolve, 1000);
                 return delay.promise;
               }
             }
           });
           $routeProvider.when('/Book/:bookId/ch/:chapterId', {
             templateUrl: 'chapter.html',
             controller: ChapterCntl
           });

           // configure html5 to get links working on jsfiddle
           $locationProvider.html5Mode(true);
         });

         function MainCntl($scope, $route, $routeParams, $location) {
           $scope.$route = $route;
           $scope.$location = $location;
           $scope.$routeParams = $routeParams;
         }

         function BookCntl($scope, $routeParams) {
           $scope.name = "BookCntl";
           $scope.params = $routeParams;
         }

         function ChapterCntl($scope, $routeParams) {
           $scope.name = "ChapterCntl";
           $scope.params = $routeParams;
         }
       </file>

       <file name="scenario.js">
         it('should load and compile correct template', function() {
           element('a:contains("Moby: Ch1")').click();
           var content = element('.doc-example-live [ng-view]').text();
           expect(content).toMatch(/controller\: ChapterCntl/);
           expect(content).toMatch(/Book Id\: Moby/);
           expect(content).toMatch(/Chapter Id\: 1/);

           element('a:contains("Scarlet")').click();
           sleep(2); // promises are not part of scenario waiting
           content = element('.doc-example-live [ng-view]').text();
           expect(content).toMatch(/controller\: BookCntl/);
           expect(content).toMatch(/Book Id\: Scarlet/);
         });
       </file>
     </example>
     */

				/**
				 * @ngdoc event
				 * @name ngRoute.$route#$routeChangeStart
				 * @eventOf ngRoute.$route
				 * @eventType broadcast on root scope
				 * @description
				 * Broadcasted before a route change. At this  point the route services starts
				 * resolving all of the dependencies needed for the route change to occurs.
				 * Typically this involves fetching the view template as well as any dependencies
				 * defined in `resolve` route property. Once  all of the dependencies are resolved
				 * `$routeChangeSuccess` is fired.
				 *
				 * @param {Object} angularEvent Synthetic event object.
				 * @param {Route} next Future route information.
				 * @param {Route} current Current route information.
				 */

				/**
				 * @ngdoc event
				 * @name ngRoute.$route#$routeChangeSuccess
				 * @eventOf ngRoute.$route
				 * @eventType broadcast on root scope
				 * @description
				 * Broadcasted after a route dependencies are resolved.
				 * {@link ngRoute.directive:ngView ngView} listens for the directive
				 * to instantiate the controller and render the view.
				 *
				 * @param {Object} angularEvent Synthetic event object.
				 * @param {Route} current Current route information.
				 * @param {Route|Undefined} previous Previous route information, or undefined if current is
				 * first route entered.
				 */

				/**
				 * @ngdoc event
				 * @name ngRoute.$route#$routeChangeError
				 * @eventOf ngRoute.$route
				 * @eventType broadcast on root scope
				 * @description
				 * Broadcasted if any of the resolve promises are rejected.
				 *
				 * @param {Object} angularEvent Synthetic event object
				 * @param {Route} current Current route information.
				 * @param {Route} previous Previous route information.
				 * @param {Route} rejection Rejection of the promise. Usually the error of the failed promise.
				 */

				/**
				 * @ngdoc event
				 * @name ngRoute.$route#$routeUpdate
				 * @eventOf ngRoute.$route
				 * @eventType broadcast on root scope
				 * @description
				 *
				 * The `reloadOnSearch` property has been set to false, and we are reusing the same
				 * instance of the Controller.
				 */

				var forceReload = false,
					$route = {
						routes: routes,

						/**
						 * @ngdoc method
						 * @name ngRoute.$route#reload
						 * @methodOf ngRoute.$route
						 *
						 * @description
						 * Causes `$route` service to reload the current route even if
						 * {@link ng.$location $location} hasn't changed.
						 *
						 * As a result of that, {@link ngRoute.directive:ngView ngView}
						 * creates new scope, reinstantiates the controller.
						 */
						reload: function() {
							forceReload = true;
							$rootScope.$evalAsync(updateRoute);
						}
					};

				$rootScope.$on('$locationChangeSuccess', updateRoute);

				return $route;

				/////////////////////////////////////////////////////

				/**
				 * @param on {string} current url
				 * @param route {Object} route regexp to match the url against
				 * @return {?Object}
				 *
				 * @description
				 * Check if the route matches the current url.
				 *
				 * Inspired by match in
				 * visionmedia/express/lib/router/router.js.
				 */
				function switchRouteMatcher(on, route) {
					var keys = route.keys,
						params = {};

					if (!route.regexp) return null;

					var m = route.regexp.exec(on);
					if (!m) return null;

					for (var i = 1, len = m.length; i < len; ++i) {
						var key = keys[i - 1];

						var val = 'string' == typeof m[i] ? decodeURIComponent(m[i]) : m[i];

						if (key && val) {
							params[key.name] = val;
						}
					}
					return params;
				}

				function updateRoute() {
					var next = parseRoute(),
						last = $route.current;

					if (next && last && next.$$route === last.$$route && angular.equals(next.pathParams, last.pathParams) && !next.reloadOnSearch && !forceReload) {
						last.params = next.params;
						angular.copy(last.params, $routeParams);
						$rootScope.$broadcast('$routeUpdate', last);
					} else if (next || last) {
						forceReload = false;
						$rootScope.$broadcast('$routeChangeStart', next, last);
						$route.current = next;
						if (next) {
							if (next.redirectTo) {
								if (angular.isString(next.redirectTo)) {
									$location.path(interpolate(next.redirectTo, next.params))
										.search(next.params)
										.replace();
								} else {
									$location.url(next.redirectTo(next.pathParams, $location.path(), $location.search()))
										.replace();
								}
							}
						}

						$q.when(next)
							.
						then(function() {
							if (next) {
								var locals = angular.extend({}, next.resolve),
									template, templateUrl;

								angular.forEach(locals, function(value, key) {
									locals[key] = angular.isString(value) ?
										$injector.get(value) : $injector.invoke(value);
								});

								if (angular.isDefined(template = next.template)) {
									if (angular.isFunction(template)) {
										template = template(next.params);
									}
								} else if (angular.isDefined(templateUrl = next.templateUrl)) {
									if (angular.isFunction(templateUrl)) {
										templateUrl = templateUrl(next.params);
									}
									templateUrl = $sce.getTrustedResourceUrl(templateUrl);
									if (angular.isDefined(templateUrl)) {
										next.loadedTemplateUrl = templateUrl;
										template = $http.get(templateUrl, {
											cache: $templateCache
										})
											.
										then(function(response) {
											return response.data;
										});
									}
								}
								if (angular.isDefined(template)) {
									locals['$template'] = template;
								}
								return $q.all(locals);
							}
						})
							.
						// after route change
						then(function(locals) {
							if (next == $route.current) {
								if (next) {
									next.locals = locals;
									angular.copy(next.params, $routeParams);
								}
								$rootScope.$broadcast('$routeChangeSuccess', next, last);
							}
						}, function(error) {
							if (next == $route.current) {
								$rootScope.$broadcast('$routeChangeError', next, last, error);
							}
						});
					}
				}


				/**
				 * @returns the current active route, by matching it against the URL
				 */
				function parseRoute() {
					// Match a route
					var params, match;
					angular.forEach(routes, function(route, path) {
						if (!match && (params = switchRouteMatcher($location.path(), route))) {
							match = inherit(route, {
								params: angular.extend({}, $location.search(), params),
								pathParams: params
							});
							match.$$route = route;
						}
					});
					// No route matched; fallback to "otherwise" route
					return match || routes[null] && inherit(routes[null], {
						params: {},
						pathParams: {}
					});
				}

				/**
				 * @returns interpolation of the redirect path with the parameters
				 */
				function interpolate(string, params) {
					var result = [];
					angular.forEach((string || '')
						.split(':'), function(segment, i) {
							if (i === 0) {
								result.push(segment);
							} else {
								var segmentMatch = segment.match(/(\w+)(.*)/);
								var key = segmentMatch[1];
								result.push(params[key]);
								result.push(segmentMatch[2] || '');
								delete params[key];
							}
						});
					return result.join('');
				}
			}
		];
	}

	ngRouteModule.provider('$routeParams', $RouteParamsProvider);


	/**
	 * @ngdoc object
	 * @name ngRoute.$routeParams
	 * @requires $route
	 *
	 * @description
	 * The `$routeParams` service allows you to retrieve the current set of route parameters.
	 *
	 * Requires the {@link ngRoute `ngRoute`} module to be installed.
	 *
	 * The route parameters are a combination of {@link ng.$location `$location`}'s
	 * {@link ng.$location#methods_search `search()`} and {@link ng.$location#methods_path `path()`}.
	 * The `path` parameters are extracted when the {@link ngRoute.$route `$route`} path is matched.
	 *
	 * In case of parameter name collision, `path` params take precedence over `search` params.
	 *
	 * The service guarantees that the identity of the `$routeParams` object will remain unchanged
	 * (but its properties will likely change) even when a route change occurs.
	 *
	 * Note that the `$routeParams` are only updated *after* a route change completes successfully.
	 * This means that you cannot rely on `$routeParams` being correct in route resolve functions.
	 * Instead you can use `$route.current.params` to access the new route's parameters.
	 *
	 * @example
	 * <pre>
	 *  // Given:
	 *  // URL: http://server.com/index.html#/Chapter/1/Section/2?search=moby
	 *  // Route: /Chapter/:chapterId/Section/:sectionId
	 *  //
	 *  // Then
	 *  $routeParams ==> {chapterId:1, sectionId:2, search:'moby'}
	 * </pre>
	 */
	function $RouteParamsProvider() {
		this.$get = function() {
			return {};
		};
	}

	ngRouteModule.directive('ngView', ngViewFactory);
	ngRouteModule.directive('ngView', ngViewFillContentFactory);


	/**
 * @ngdoc directive
 * @name ngRoute.directive:ngView
 * @restrict ECA
 *
 * @description
 * # Overview
 * `ngView` is a directive that complements the {@link ngRoute.$route $route} service by
 * including the rendered template of the current route into the main layout (`index.html`) file.
 * Every time the current route changes, the included view changes with it according to the
 * configuration of the `$route` service.
 *
 * Requires the {@link ngRoute `ngRoute`} module to be installed.
 *
 * @animations
 * enter - animation is used to bring new content into the browser.
 * leave - animation is used to animate existing content away.
 *
 * The enter and leave animation occur concurrently.
 *
 * @scope
 * @priority 400
 * @example
    <example module="ngViewExample" deps="angular-route.js" animations="true">
      <file name="index.html">
        <div ng-controller="MainCntl as main">
          Choose:
          <a href="Book/Moby">Moby</a> |
          <a href="Book/Moby/ch/1">Moby: Ch1</a> |
          <a href="Book/Gatsby">Gatsby</a> |
          <a href="Book/Gatsby/ch/4?key=value">Gatsby: Ch4</a> |
          <a href="Book/Scarlet">Scarlet Letter</a><br/>

          <div class="view-animate-container">
            <div ng-view class="view-animate"></div>
          </div>
          <hr />

          <pre>$location.path() = {{main.$location.path()}}</pre>
          <pre>$route.current.templateUrl = {{main.$route.current.templateUrl}}</pre>
          <pre>$route.current.params = {{main.$route.current.params}}</pre>
          <pre>$route.current.scope.name = {{main.$route.current.scope.name}}</pre>
          <pre>$routeParams = {{main.$routeParams}}</pre>
        </div>
      </file>

      <file name="book.html">
        <div>
          controller: {{book.name}}<br />
          Book Id: {{book.params.bookId}}<br />
        </div>
      </file>

      <file name="chapter.html">
        <div>
          controller: {{chapter.name}}<br />
          Book Id: {{chapter.params.bookId}}<br />
          Chapter Id: {{chapter.params.chapterId}}
        </div>
      </file>

      <file name="animations.css">
        .view-animate-container {
          position:relative;
          height:100px!important;
          position:relative;
          background:white;
          border:1px solid black;
          height:40px;
          overflow:hidden;
        }

        .view-animate {
          padding:10px;
        }

        .view-animate.ng-enter, .view-animate.ng-leave {
          -webkit-transition:all cubic-bezier(0.250, 0.460, 0.450, 0.940) 1.5s;
          transition:all cubic-bezier(0.250, 0.460, 0.450, 0.940) 1.5s;

          display:block;
          width:100%;
          border-left:1px solid black;

          position:absolute;
          top:0;
          left:0;
          right:0;
          bottom:0;
          padding:10px;
        }

        .view-animate.ng-enter {
          left:100%;
        }
        .view-animate.ng-enter.ng-enter-active {
          left:0;
        }
        .view-animate.ng-leave.ng-leave-active {
          left:-100%;
        }
      </file>

      <file name="script.js">
        angular.module('ngViewExample', ['ngRoute', 'ngAnimate'],
          function($routeProvider, $locationProvider) {
            $routeProvider.when('/Book/:bookId', {
              templateUrl: 'book.html',
              controller: BookCntl,
              controllerAs: 'book'
            });
            $routeProvider.when('/Book/:bookId/ch/:chapterId', {
              templateUrl: 'chapter.html',
              controller: ChapterCntl,
              controllerAs: 'chapter'
            });

            // configure html5 to get links working on jsfiddle
            $locationProvider.html5Mode(true);
        });

        function MainCntl($route, $routeParams, $location) {
          this.$route = $route;
          this.$location = $location;
          this.$routeParams = $routeParams;
        }

        function BookCntl($routeParams) {
          this.name = "BookCntl";
          this.params = $routeParams;
        }

        function ChapterCntl($routeParams) {
          this.name = "ChapterCntl";
          this.params = $routeParams;
        }
      </file>

      <file name="scenario.js">
        it('should load and compile correct template', function() {
          element('a:contains("Moby: Ch1")').click();
          var content = element('.doc-example-live [ng-view]').text();
          expect(content).toMatch(/controller\: ChapterCntl/);
          expect(content).toMatch(/Book Id\: Moby/);
          expect(content).toMatch(/Chapter Id\: 1/);

          element('a:contains("Scarlet")').click();
          content = element('.doc-example-live [ng-view]').text();
          expect(content).toMatch(/controller\: BookCntl/);
          expect(content).toMatch(/Book Id\: Scarlet/);
        });
      </file>
    </example>
 */


	/**
	 * @ngdoc event
	 * @name ngRoute.directive:ngView#$viewContentLoaded
	 * @eventOf ngRoute.directive:ngView
	 * @eventType emit on the current ngView scope
	 * @description
	 * Emitted every time the ngView content is reloaded.
	 */
	ngViewFactory.$inject = ['$route', '$anchorScroll', '$animate'];

	function ngViewFactory($route, $anchorScroll, $animate) {
		return {
			restrict: 'ECA',
			terminal: true,
			priority: 400,
			transclude: 'element',
			link: function(scope, $element, attr, ctrl, $transclude) {
				var currentScope,
					currentElement,
					autoScrollExp = attr.autoscroll,
					onloadExp = attr.onload || '';

				scope.$on('$routeChangeSuccess', update);
				update();

				function cleanupLastView() {
					if (currentScope) {
						currentScope.$destroy();
						currentScope = null;
					}
					if (currentElement) {
						$animate.leave(currentElement);
						currentElement = null;
					}
				}

				function update() {
					var locals = $route.current && $route.current.locals,
						template = locals && locals.$template;

					if (template) {
						var newScope = scope.$new();
						var current = $route.current;

						// Note: This will also link all children of ng-view that were contained in the original
						// html. If that content contains controllers, ... they could pollute/change the scope.
						// However, using ng-view on an element with additional content does not make sense...
						// Note: We can't remove them in the cloneAttchFn of $transclude as that
						// function is called before linking the content, which would apply child
						// directives to non existing elements.
						var clone = $transclude(newScope, function(clone) {
							$animate.enter(clone, null, currentElement || $element, function onNgViewEnter() {
								if (angular.isDefined(autoScrollExp) && (!autoScrollExp || scope.$eval(autoScrollExp))) {
									$anchorScroll();
								}
							});
							cleanupLastView();
						});

						currentElement = clone;
						currentScope = current.scope = newScope;
						currentScope.$emit('$viewContentLoaded');
						currentScope.$eval(onloadExp);
					} else {
						cleanupLastView();
					}
				}
			}
		};
	}

	// This directive is called during the $transclude call of the first `ngView` directive.
	// It will replace and compile the content of the element with the loaded template.
	// We need this directive so that the element content is already filled when
	// the link function of another directive on the same element as ngView
	// is called.
	ngViewFillContentFactory.$inject = ['$compile', '$controller', '$route'];

	function ngViewFillContentFactory($compile, $controller, $route) {
		return {
			restrict: 'ECA',
			priority: -400,
			link: function(scope, $element) {
				var current = $route.current,
					locals = current.locals;

				$element.html(locals.$template);

				var link = $compile($element.contents());

				if (current.controller) {
					locals.$scope = scope;
					var controller = $controller(current.controller, locals);
					if (current.controllerAs) {
						scope[current.controllerAs] = controller;
					}
					$element.data('$ngControllerController', controller);
					$element.children()
						.data('$ngControllerController', controller);
				}

				link(scope);
			}
		};
	}


})(window, window.angular);

/**
 * @license AngularJS v1.2.6
 * (c) 2010-2014 Google, Inc. http://angularjs.org
 * License: MIT
 */
(function(window, angular, undefined) {
	'use strict';

	var $sanitizeMinErr = angular.$$minErr('$sanitize');

	/**
	 * @ngdoc overview
	 * @name ngSanitize
	 * @description
	 *
	 * # ngSanitize
	 *
	 * The `ngSanitize` module provides functionality to sanitize HTML.
	 *
	 * {@installModule sanitize}
	 *
	 * <div doc-module-components="ngSanitize"></div>
	 *
	 * See {@link ngSanitize.$sanitize `$sanitize`} for usage.
	 */

	/*
	 * HTML Parser By Misko Hevery (misko@hevery.com)
	 * based on:  HTML Parser By John Resig (ejohn.org)
	 * Original code by Erik Arvidsson, Mozilla Public License
	 * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
	 *
	 * // Use like so:
	 * htmlParser(htmlString, {
	 *     start: function(tag, attrs, unary) {},
	 *     end: function(tag) {},
	 *     chars: function(text) {},
	 *     comment: function(text) {}
	 * });
	 *
	 */


	/**
 * @ngdoc service
 * @name ngSanitize.$sanitize
 * @function
 *
 * @description
 *   The input is sanitized by parsing the html into tokens. All safe tokens (from a whitelist) are
 *   then serialized back to properly escaped html string. This means that no unsafe input can make
 *   it into the returned string, however, since our parser is more strict than a typical browser
 *   parser, it's possible that some obscure input, which would be recognized as valid HTML by a
 *   browser, won't make it through the sanitizer.
 *   The whitelist is configured using the functions `aHrefSanitizationWhitelist` and
 *   `imgSrcSanitizationWhitelist` of {@link ng.$compileProvider `$compileProvider`}.
 *
 * @param {string} html Html input.
 * @returns {string} Sanitized html.
 *
 * @example
   <doc:example module="ngSanitize">
   <doc:source>
     <script>
       function Ctrl($scope, $sce) {
         $scope.snippet =
           '<p style="color:blue">an html\n' +
           '<em onmouseover="this.textContent=\'PWN3D!\'">click here</em>\n' +
           'snippet</p>';
         $scope.deliberatelyTrustDangerousSnippet = function() {
           return $sce.trustAsHtml($scope.snippet);
         };
       }
     </script>
     <div ng-controller="Ctrl">
        Snippet: <textarea ng-model="snippet" cols="60" rows="3"></textarea>
       <table>
         <tr>
           <td>Directive</td>
           <td>How</td>
           <td>Source</td>
           <td>Rendered</td>
         </tr>
         <tr id="bind-html-with-sanitize">
           <td>ng-bind-html</td>
           <td>Automatically uses $sanitize</td>
           <td><pre>&lt;div ng-bind-html="snippet"&gt;<br/>&lt;/div&gt;</pre></td>
           <td><div ng-bind-html="snippet"></div></td>
         </tr>
         <tr id="bind-html-with-trust">
           <td>ng-bind-html</td>
           <td>Bypass $sanitize by explicitly trusting the dangerous value</td>
           <td>
           <pre>&lt;div ng-bind-html="deliberatelyTrustDangerousSnippet()"&gt;
&lt;/div&gt;</pre>
           </td>
           <td><div ng-bind-html="deliberatelyTrustDangerousSnippet()"></div></td>
         </tr>
         <tr id="bind-default">
           <td>ng-bind</td>
           <td>Automatically escapes</td>
           <td><pre>&lt;div ng-bind="snippet"&gt;<br/>&lt;/div&gt;</pre></td>
           <td><div ng-bind="snippet"></div></td>
         </tr>
       </table>
       </div>
   </doc:source>
   <doc:scenario>
     it('should sanitize the html snippet by default', function() {
       expect(using('#bind-html-with-sanitize').element('div').html()).
         toBe('<p>an html\n<em>click here</em>\nsnippet</p>');
     });

     it('should inline raw snippet if bound to a trusted value', function() {
       expect(using('#bind-html-with-trust').element("div").html()).
         toBe("<p style=\"color:blue\">an html\n" +
              "<em onmouseover=\"this.textContent='PWN3D!'\">click here</em>\n" +
              "snippet</p>");
     });

     it('should escape snippet without any filter', function() {
       expect(using('#bind-default').element('div').html()).
         toBe("&lt;p style=\"color:blue\"&gt;an html\n" +
              "&lt;em onmouseover=\"this.textContent='PWN3D!'\"&gt;click here&lt;/em&gt;\n" +
              "snippet&lt;/p&gt;");
     });

     it('should update', function() {
       input('snippet').enter('new <b onclick="alert(1)">text</b>');
       expect(using('#bind-html-with-sanitize').element('div').html()).toBe('new <b>text</b>');
       expect(using('#bind-html-with-trust').element('div').html()).toBe(
         'new <b onclick="alert(1)">text</b>');
       expect(using('#bind-default').element('div').html()).toBe(
         "new &lt;b onclick=\"alert(1)\"&gt;text&lt;/b&gt;");
     });
   </doc:scenario>
   </doc:example>
 */
	function $SanitizeProvider() {
		this.$get = ['$$sanitizeUri',
			function($$sanitizeUri) {
				return function(html) {
					var buf = [];
					htmlParser(html, htmlSanitizeWriter(buf, function(uri, isImage) {
						return !/^unsafe/.test($$sanitizeUri(uri, isImage));
					}));
					return buf.join('');
				};
			}
		];
	}

	function sanitizeText(chars) {
		var buf = [];
		var writer = htmlSanitizeWriter(buf, angular.noop);
		writer.chars(chars);
		return buf.join('');
	}


	// Regular Expressions for parsing tags and attributes
	var START_TAG_REGEXP =
		/^<\s*([\w:-]+)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*>/,
		END_TAG_REGEXP = /^<\s*\/\s*([\w:-]+)[^>]*>/,
		ATTR_REGEXP = /([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g,
		BEGIN_TAG_REGEXP = /^</,
		BEGING_END_TAGE_REGEXP = /^<\s*\//,
		COMMENT_REGEXP = /<!--(.*?)-->/g,
		DOCTYPE_REGEXP = /<!DOCTYPE([^>]*?)>/i,
		CDATA_REGEXP = /<!\[CDATA\[(.*?)]]>/g,
		// Match everything outside of normal chars and " (quote character)
		NON_ALPHANUMERIC_REGEXP = /([^\#-~| |!])/g;


	// Good source of info about elements and attributes
	// http://dev.w3.org/html5/spec/Overview.html#semantics
	// http://simon.html5.org/html-elements

	// Safe Void Elements - HTML5
	// http://dev.w3.org/html5/spec/Overview.html#void-elements
	var voidElements = makeMap("area,br,col,hr,img,wbr");

	// Elements that you can, intentionally, leave open (and which close themselves)
	// http://dev.w3.org/html5/spec/Overview.html#optional-tags
	var optionalEndTagBlockElements = makeMap("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
		optionalEndTagInlineElements = makeMap("rp,rt"),
		optionalEndTagElements = angular.extend({},
			optionalEndTagInlineElements,
			optionalEndTagBlockElements);

	// Safe Block Elements - HTML5
	var blockElements = angular.extend({}, optionalEndTagBlockElements, makeMap("address,article," +
		"aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5," +
		"h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul"));

	// Inline Elements - HTML5
	var inlineElements = angular.extend({}, optionalEndTagInlineElements, makeMap("a,abbr,acronym,b," +
		"bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s," +
		"samp,small,span,strike,strong,sub,sup,time,tt,u,var"));


	// Special Elements (can contain anything)
	var specialElements = makeMap("script,style");

	var validElements = angular.extend({},
		voidElements,
		blockElements,
		inlineElements,
		optionalEndTagElements);

	//Attributes that have href and hence need to be sanitized
	var uriAttrs = makeMap("background,cite,href,longdesc,src,usemap");
	var validAttrs = angular.extend({}, uriAttrs, makeMap(
		'abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,' +
		'color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,' +
		'ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,' +
		'scope,scrolling,shape,span,start,summary,target,title,type,' +
		'valign,value,vspace,width'));

	function makeMap(str) {
		var obj = {}, items = str.split(','),
			i;
		for (i = 0; i < items.length; i++) obj[items[i]] = true;
		return obj;
	}


	/**
	 * @example
	 * htmlParser(htmlString, {
	 *     start: function(tag, attrs, unary) {},
	 *     end: function(tag) {},
	 *     chars: function(text) {},
	 *     comment: function(text) {}
	 * });
	 *
	 * @param {string} html string
	 * @param {object} handler
	 */
	function htmlParser(html, handler) {
		var index, chars, match, stack = [],
			last = html;
		stack.last = function() {
			return stack[stack.length - 1];
		};

		while (html) {
			chars = true;

			// Make sure we're not in a script or style element
			if (!stack.last() || !specialElements[stack.last()]) {

				// Comment
				if (html.indexOf("<!--") === 0) {
					// comments containing -- are not allowed unless they terminate the comment
					index = html.indexOf("--", 4);

					if (index >= 0 && html.lastIndexOf("-->", index) === index) {
						if (handler.comment) handler.comment(html.substring(4, index));
						html = html.substring(index + 3);
						chars = false;
					}
					// DOCTYPE
				} else if (DOCTYPE_REGEXP.test(html)) {
					match = html.match(DOCTYPE_REGEXP);

					if (match) {
						html = html.replace(match[0], '');
						chars = false;
					}
					// end tag
				} else if (BEGING_END_TAGE_REGEXP.test(html)) {
					match = html.match(END_TAG_REGEXP);

					if (match) {
						html = html.substring(match[0].length);
						match[0].replace(END_TAG_REGEXP, parseEndTag);
						chars = false;
					}

					// start tag
				} else if (BEGIN_TAG_REGEXP.test(html)) {
					match = html.match(START_TAG_REGEXP);

					if (match) {
						html = html.substring(match[0].length);
						match[0].replace(START_TAG_REGEXP, parseStartTag);
						chars = false;
					}
				}

				if (chars) {
					index = html.indexOf("<");

					var text = index < 0 ? html : html.substring(0, index);
					html = index < 0 ? "" : html.substring(index);

					if (handler.chars) handler.chars(decodeEntities(text));
				}

			} else {
				html = html.replace(new RegExp("(.*)<\\s*\\/\\s*" + stack.last() + "[^>]*>", 'i'),
					function(all, text) {
						text = text.replace(COMMENT_REGEXP, "$1")
							.replace(CDATA_REGEXP, "$1");

						if (handler.chars) handler.chars(decodeEntities(text));

						return "";
					});

				parseEndTag("", stack.last());
			}

			if (html == last) {
				throw $sanitizeMinErr('badparse', "The sanitizer was unable to parse the following block " +
					"of html: {0}", html);
			}
			last = html;
		}

		// Clean up any remaining tags
		parseEndTag();

		function parseStartTag(tag, tagName, rest, unary) {
			tagName = angular.lowercase(tagName);
			if (blockElements[tagName]) {
				while (stack.last() && inlineElements[stack.last()]) {
					parseEndTag("", stack.last());
				}
			}

			if (optionalEndTagElements[tagName] && stack.last() == tagName) {
				parseEndTag("", tagName);
			}

			unary = voidElements[tagName] || !! unary;

			if (!unary)
				stack.push(tagName);

			var attrs = {};

			rest.replace(ATTR_REGEXP,
				function(match, name, doubleQuotedValue, singleQuotedValue, unquotedValue) {
					var value = doubleQuotedValue || singleQuotedValue || unquotedValue || '';

					attrs[name] = decodeEntities(value);
				});
			if (handler.start) handler.start(tagName, attrs, unary);
		}

		function parseEndTag(tag, tagName) {
			var pos = 0,
				i;
			tagName = angular.lowercase(tagName);
			if (tagName)
			// Find the closest opened tag of the same type
				for (pos = stack.length - 1; pos >= 0; pos--)
					if (stack[pos] == tagName)
						break;

			if (pos >= 0) {
				// Close all the open elements, up the stack
				for (i = stack.length - 1; i >= pos; i--)
					if (handler.end) handler.end(stack[i]);

					// Remove the open elements from the stack
				stack.length = pos;
			}
		}
	}

	var hiddenPre = document.createElement("pre");
	var spaceRe = /^(\s*)([\s\S]*?)(\s*)$/;
	/**
	 * decodes all entities into regular string
	 * @param value
	 * @returns {string} A string with decoded entities.
	 */
	function decodeEntities(value) {
		if (!value) {
			return '';
		}

		// Note: IE8 does not preserve spaces at the start/end of innerHTML
		// so we must capture them and reattach them afterward
		var parts = spaceRe.exec(value);
		var spaceBefore = parts[1];
		var spaceAfter = parts[3];
		var content = parts[2];
		if (content) {
			hiddenPre.innerHTML = content.replace(/</g, "&lt;");
			// innerText depends on styling as it doesn't display hidden elements.
			// Therefore, it's better to use textContent not to cause unnecessary
			// reflows. However, IE<9 don't support textContent so the innerText
			// fallback is necessary.
			content = 'textContent' in hiddenPre ?
				hiddenPre.textContent : hiddenPre.innerText;
		}
		return spaceBefore + content + spaceAfter;
	}

	/**
	 * Escapes all potentially dangerous characters, so that the
	 * resulting string can be safely inserted into attribute or
	 * element text.
	 * @param value
	 * @returns escaped text
	 */
	function encodeEntities(value) {
		return value.
		replace(/&/g, '&amp;')
			.
		replace(NON_ALPHANUMERIC_REGEXP, function(value) {
			return '&#' + value.charCodeAt(0) + ';';
		})
			.
		replace(/</g, '&lt;')
			.
		replace(/>/g, '&gt;');
	}

	/**
	 * create an HTML/XML writer which writes to buffer
	 * @param {Array} buf use buf.jain('') to get out sanitized html string
	 * @returns {object} in the form of {
	 *     start: function(tag, attrs, unary) {},
	 *     end: function(tag) {},
	 *     chars: function(text) {},
	 *     comment: function(text) {}
	 * }
	 */
	function htmlSanitizeWriter(buf, uriValidator) {
		var ignore = false;
		var out = angular.bind(buf, buf.push);
		return {
			start: function(tag, attrs, unary) {
				tag = angular.lowercase(tag);
				if (!ignore && specialElements[tag]) {
					ignore = tag;
				}
				if (!ignore && validElements[tag] === true) {
					out('<');
					out(tag);
					angular.forEach(attrs, function(value, key) {
						var lkey = angular.lowercase(key);
						var isImage = (tag === 'img' && lkey === 'src') || (lkey === 'background');
						if (validAttrs[lkey] === true &&
							(uriAttrs[lkey] !== true || uriValidator(value, isImage))) {
							out(' ');
							out(key);
							out('="');
							out(encodeEntities(value));
							out('"');
						}
					});
					out(unary ? '/>' : '>');
				}
			},
			end: function(tag) {
				tag = angular.lowercase(tag);
				if (!ignore && validElements[tag] === true) {
					out('</');
					out(tag);
					out('>');
				}
				if (tag == ignore) {
					ignore = false;
				}
			},
			chars: function(chars) {
				if (!ignore) {
					out(encodeEntities(chars));
				}
			}
		};
	}


	// define ngSanitize module and register $sanitize service
	angular.module('ngSanitize', [])
		.provider('$sanitize', $SanitizeProvider);

	/* global sanitizeText: false */

	/**
 * @ngdoc filter
 * @name ngSanitize.filter:linky
 * @function
 *
 * @description
 * Finds links in text input and turns them into html links. Supports http/https/ftp/mailto and
 * plain email address links.
 *
 * Requires the {@link ngSanitize `ngSanitize`} module to be installed.
 *
 * @param {string} text Input text.
 * @param {string} target Window (_blank|_self|_parent|_top) or named frame to open links in.
 * @returns {string} Html-linkified text.
 *
 * @usage
   <span ng-bind-html="linky_expression | linky"></span>
 *
 * @example
   <doc:example module="ngSanitize">
     <doc:source>
       <script>
         function Ctrl($scope) {
           $scope.snippet =
             'Pretty text with some links:\n'+
             'http://angularjs.org/,\n'+
             'mailto:us@somewhere.org,\n'+
             'another@somewhere.org,\n'+
             'and one more: ftp://127.0.0.1/.';
           $scope.snippetWithTarget = 'http://angularjs.org/';
         }
       </script>
       <div ng-controller="Ctrl">
       Snippet: <textarea ng-model="snippet" cols="60" rows="3"></textarea>
       <table>
         <tr>
           <td>Filter</td>
           <td>Source</td>
           <td>Rendered</td>
         </tr>
         <tr id="linky-filter">
           <td>linky filter</td>
           <td>
             <pre>&lt;div ng-bind-html="snippet | linky"&gt;<br>&lt;/div&gt;</pre>
           </td>
           <td>
             <div ng-bind-html="snippet | linky"></div>
           </td>
         </tr>
         <tr id="linky-target">
          <td>linky target</td>
          <td>
            <pre>&lt;div ng-bind-html="snippetWithTarget | linky:'_blank'"&gt;<br>&lt;/div&gt;</pre>
          </td>
          <td>
            <div ng-bind-html="snippetWithTarget | linky:'_blank'"></div>
          </td>
         </tr>
         <tr id="escaped-html">
           <td>no filter</td>
           <td><pre>&lt;div ng-bind="snippet"&gt;<br>&lt;/div&gt;</pre></td>
           <td><div ng-bind="snippet"></div></td>
         </tr>
       </table>
     </doc:source>
     <doc:scenario>
       it('should linkify the snippet with urls', function() {
         expect(using('#linky-filter').binding('snippet | linky')).
           toBe('Pretty text with some links:&#10;' +
                '<a href="http://angularjs.org/">http://angularjs.org/</a>,&#10;' +
                '<a href="mailto:us@somewhere.org">us@somewhere.org</a>,&#10;' +
                '<a href="mailto:another@somewhere.org">another@somewhere.org</a>,&#10;' +
                'and one more: <a href="ftp://127.0.0.1/">ftp://127.0.0.1/</a>.');
       });

       it ('should not linkify snippet without the linky filter', function() {
         expect(using('#escaped-html').binding('snippet')).
           toBe("Pretty text with some links:\n" +
                "http://angularjs.org/,\n" +
                "mailto:us@somewhere.org,\n" +
                "another@somewhere.org,\n" +
                "and one more: ftp://127.0.0.1/.");
       });

       it('should update', function() {
         input('snippet').enter('new http://link.');
         expect(using('#linky-filter').binding('snippet | linky')).
           toBe('new <a href="http://link">http://link</a>.');
         expect(using('#escaped-html').binding('snippet')).toBe('new http://link.');
       });

       it('should work with the target property', function() {
        expect(using('#linky-target').binding("snippetWithTarget | linky:'_blank'")).
          toBe('<a target="_blank" href="http://angularjs.org/">http://angularjs.org/</a>');
       });
     </doc:scenario>
   </doc:example>
 */
	angular.module('ngSanitize')
		.filter('linky', ['$sanitize',
			function($sanitize) {
				var LINKY_URL_REGEXP =
					/((ftp|https?):\/\/|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>]/,
					MAILTO_REGEXP = /^mailto:/;

				return function(text, target) {
					if (!text) return text;
					var match;
					var raw = text;
					var html = [];
					var url;
					var i;
					while ((match = raw.match(LINKY_URL_REGEXP))) {
						// We can not end in these as they are sometimes found at the end of the sentence
						url = match[0];
						// if we did not match ftp/http/mailto then assume mailto
						if (match[2] == match[3]) url = 'mailto:' + url;
						i = match.index;
						addText(raw.substr(0, i));
						addLink(url, match[0].replace(MAILTO_REGEXP, ''));
						raw = raw.substring(i + match[0].length);
					}
					addText(raw);
					return $sanitize(html.join(''));

					function addText(text) {
						if (!text) {
							return;
						}
						html.push(sanitizeText(text));
					}

					function addLink(url, text) {
						html.push('<a ');
						if (angular.isDefined(target)) {
							html.push('target="');
							html.push(target);
							html.push('" ');
						}
						html.push('href="');
						html.push(url);
						html.push('">');
						addText(text);
						html.push('</a>');
					}
				};
			}
		]);


})(window, window.angular);

/**
 * @license AngularJS v1.2.6
 * (c) 2010-2014 Google, Inc. http://angularjs.org
 * License: MIT
 */
(function(window, angular, undefined) {
	'use strict';

	/* jshint maxlen: false */

	/**
	 * @ngdoc overview
	 * @name ngAnimate
	 * @description
	 *
	 * # ngAnimate
	 *
	 * The `ngAnimate` module provides support for JavaScript, CSS3 transition and CSS3 keyframe animation hooks within existing core and custom directives.
	 *
	 * {@installModule animate}
	 *
	 * <div doc-module-components="ngAnimate"></div>
	 *
	 * # Usage
	 *
	 * To see animations in action, all that is required is to define the appropriate CSS classes
	 * or to register a JavaScript animation via the myModule.animation() function. The directives that support animation automatically are:
	 * `ngRepeat`, `ngInclude`, `ngIf`, `ngSwitch`, `ngShow`, `ngHide`, `ngView` and `ngClass`. Custom directives can take advantage of animation
	 * by using the `$animate` service.
	 *
	 * Below is a more detailed breakdown of the supported animation events provided by pre-existing ng directives:
	 *
	 * | Directive                                                 | Supported Animations                               |
	 * |---------------------------------------------------------- |----------------------------------------------------|
	 * | {@link ng.directive:ngRepeat#usage_animations ngRepeat}         | enter, leave and move                              |
	 * | {@link ngRoute.directive:ngView#usage_animations ngView}        | enter and leave                                    |
	 * | {@link ng.directive:ngInclude#usage_animations ngInclude}       | enter and leave                                    |
	 * | {@link ng.directive:ngSwitch#usage_animations ngSwitch}         | enter and leave                                    |
	 * | {@link ng.directive:ngIf#usage_animations ngIf}                 | enter and leave                                    |
	 * | {@link ng.directive:ngClass#usage_animations ngClass}           | add and remove                                     |
	 * | {@link ng.directive:ngShow#usage_animations ngShow & ngHide}    | add and remove (the ng-hide class value)           |
	 *
	 * You can find out more information about animations upon visiting each directive page.
	 *
	 * Below is an example of how to apply animations to a directive that supports animation hooks:
	 *
	 * <pre>
	 * <style type="text/css">
	 * .slide.ng-enter, .slide.ng-leave {
	 *   -webkit-transition:0.5s linear all;
	 *   transition:0.5s linear all;
	 * }
	 *
	 * .slide.ng-enter { }        /&#42; starting animations for enter &#42;/
	 * .slide.ng-enter-active { } /&#42; terminal animations for enter &#42;/
	 * .slide.ng-leave { }        /&#42; starting animations for leave &#42;/
	 * .slide.ng-leave-active { } /&#42; terminal animations for leave &#42;/
	 * </style>
	 *
	 * <!--
	 * the animate service will automatically add .ng-enter and .ng-leave to the element
	 * to trigger the CSS transition/animations
	 * -->
	 * <ANY class="slide" ng-include="..."></ANY>
	 * </pre>
	 *
	 * Keep in mind that if an animation is running, any child elements cannot be animated until the parent element's
	 * animation has completed.
	 *
	 * <h2>CSS-defined Animations</h2>
	 * The animate service will automatically apply two CSS classes to the animated element and these two CSS classes
	 * are designed to contain the start and end CSS styling. Both CSS transitions and keyframe animations are supported
	 * and can be used to play along with this naming structure.
	 *
	 * The following code below demonstrates how to perform animations using **CSS transitions** with Angular:
	 *
	 * <pre>
	 * <style type="text/css">
	 * /&#42;
	 *  The animate class is apart of the element and the ng-enter class
	 *  is attached to the element once the enter animation event is triggered
	 * &#42;/
	 * .reveal-animation.ng-enter {
	 *  -webkit-transition: 1s linear all; /&#42; Safari/Chrome &#42;/
	 *  transition: 1s linear all; /&#42; All other modern browsers and IE10+ &#42;/
	 *
	 *  /&#42; The animation preparation code &#42;/
	 *  opacity: 0;
	 * }
	 *
	 * /&#42;
	 *  Keep in mind that you want to combine both CSS
	 *  classes together to avoid any CSS-specificity
	 *  conflicts
	 * &#42;/
	 * .reveal-animation.ng-enter.ng-enter-active {
	 *  /&#42; The animation code itself &#42;/
	 *  opacity: 1;
	 * }
	 * </style>
	 *
	 * <div class="view-container">
	 *   <div ng-view class="reveal-animation"></div>
	 * </div>
	 * </pre>
	 *
	 * The following code below demonstrates how to perform animations using **CSS animations** with Angular:
	 *
	 * <pre>
	 * <style type="text/css">
	 * .reveal-animation.ng-enter {
	 *   -webkit-animation: enter_sequence 1s linear; /&#42; Safari/Chrome &#42;/
	 *   animation: enter_sequence 1s linear; /&#42; IE10+ and Future Browsers &#42;/
	 * }
	 * &#64-webkit-keyframes enter_sequence {
	 *   from { opacity:0; }
	 *   to { opacity:1; }
	 * }
	 * &#64keyframes enter_sequence {
	 *   from { opacity:0; }
	 *   to { opacity:1; }
	 * }
	 * </style>
	 *
	 * <div class="view-container">
	 *   <div ng-view class="reveal-animation"></div>
	 * </div>
	 * </pre>
	 *
	 * Both CSS3 animations and transitions can be used together and the animate service will figure out the correct duration and delay timing.
	 *
	 * Upon DOM mutation, the event class is added first (something like `ng-enter`), then the browser prepares itself to add
	 * the active class (in this case `ng-enter-active`) which then triggers the animation. The animation module will automatically
	 * detect the CSS code to determine when the animation ends. Once the animation is over then both CSS classes will be
	 * removed from the DOM. If a browser does not support CSS transitions or CSS animations then the animation will start and end
	 * immediately resulting in a DOM element that is at its final state. This final state is when the DOM element
	 * has no CSS transition/animation classes applied to it.
	 *
	 * <h3>CSS Staggering Animations</h3>
	 * A Staggering animation is a collection of animations that are issued with a slight delay in between each successive operation resulting in a
	 * curtain-like effect. The ngAnimate module, as of 1.2.0, supports staggering animations and the stagger effect can be
	 * performed by creating a **ng-EVENT-stagger** CSS class and attaching that class to the base CSS class used for
	 * the animation. The style property expected within the stagger class can either be a **transition-delay** or an
	 * **animation-delay** property (or both if your animation contains both transitions and keyframe animations).
	 *
	 * <pre>
	 * .my-animation.ng-enter {
	 *   /&#42; standard transition code &#42;/
	 *   -webkit-transition: 1s linear all;
	 *   transition: 1s linear all;
	 *   opacity:0;
	 * }
	 * .my-animation.ng-enter-stagger {
	 *   /&#42; this will have a 100ms delay between each successive leave animation &#42;/
	 *   -webkit-transition-delay: 0.1s;
	 *   transition-delay: 0.1s;
	 *
	 *   /&#42; in case the stagger doesn't work then these two values
	 *    must be set to 0 to avoid an accidental CSS inheritance &#42;/
	 *   -webkit-transition-duration: 0s;
	 *   transition-duration: 0s;
	 * }
	 * .my-animation.ng-enter.ng-enter-active {
	 *   /&#42; standard transition styles &#42;/
	 *   opacity:1;
	 * }
	 * </pre>
	 *
	 * Staggering animations work by default in ngRepeat (so long as the CSS class is defined). Outside of ngRepeat, to use staggering animations
	 * on your own, they can be triggered by firing multiple calls to the same event on $animate. However, the restrictions surrounding this
	 * are that each of the elements must have the same CSS className value as well as the same parent element. A stagger operation
	 * will also be reset if more than 10ms has passed after the last animation has been fired.
	 *
	 * The following code will issue the **ng-leave-stagger** event on the element provided:
	 *
	 * <pre>
	 * var kids = parent.children();
	 *
	 * $animate.leave(kids[0]); //stagger index=0
	 * $animate.leave(kids[1]); //stagger index=1
	 * $animate.leave(kids[2]); //stagger index=2
	 * $animate.leave(kids[3]); //stagger index=3
	 * $animate.leave(kids[4]); //stagger index=4
	 *
	 * $timeout(function() {
	 *   //stagger has reset itself
	 *   $animate.leave(kids[5]); //stagger index=0
	 *   $animate.leave(kids[6]); //stagger index=1
	 * }, 100, false);
	 * </pre>
	 *
	 * Stagger animations are currently only supported within CSS-defined animations.
	 *
	 * <h2>JavaScript-defined Animations</h2>
	 * In the event that you do not want to use CSS3 transitions or CSS3 animations or if you wish to offer animations on browsers that do not
	 * yet support CSS transitions/animations, then you can make use of JavaScript animations defined inside of your AngularJS module.
	 *
	 * <pre>
	 * //!annotate="YourApp" Your AngularJS Module|Replace this or ngModule with the module that you used to define your application.
	 * var ngModule = angular.module('YourApp', ['ngAnimate']);
	 * ngModule.animation('.my-crazy-animation', function() {
	 *   return {
	 *     enter: function(element, done) {
	 *       //run the animation here and call done when the animation is complete
	 *       return function(cancelled) {
	 *         //this (optional) function will be called when the animation
	 *         //completes or when the animation is cancelled (the cancelled
	 *         //flag will be set to true if cancelled).
	 *       };
	 *     },
	 *     leave: function(element, done) { },
	 *     move: function(element, done) { },
	 *
	 *     //animation that can be triggered before the class is added
	 *     beforeAddClass: function(element, className, done) { },
	 *
	 *     //animation that can be triggered after the class is added
	 *     addClass: function(element, className, done) { },
	 *
	 *     //animation that can be triggered before the class is removed
	 *     beforeRemoveClass: function(element, className, done) { },
	 *
	 *     //animation that can be triggered after the class is removed
	 *     removeClass: function(element, className, done) { }
	 *   };
	 * });
	 * </pre>
	 *
	 * JavaScript-defined animations are created with a CSS-like class selector and a collection of events which are set to run
	 * a javascript callback function. When an animation is triggered, $animate will look for a matching animation which fits
	 * the element's CSS class attribute value and then run the matching animation event function (if found).
	 * In other words, if the CSS classes present on the animated element match any of the JavaScript animations then the callback function will
	 * be executed. It should be also noted that only simple, single class selectors are allowed (compound class selectors are not supported).
	 *
	 * Within a JavaScript animation, an object containing various event callback animation functions is expected to be returned.
	 * As explained above, these callbacks are triggered based on the animation event. Therefore if an enter animation is run,
	 * and the JavaScript animation is found, then the enter callback will handle that animation (in addition to the CSS keyframe animation
	 * or transition code that is defined via a stylesheet).
	 *
	 */

	angular.module('ngAnimate', ['ng'])

	/**
	 * @ngdoc object
	 * @name ngAnimate.$animateProvider
	 * @description
	 *
	 * The `$animateProvider` allows developers to register JavaScript animation event handlers directly inside of a module.
	 * When an animation is triggered, the $animate service will query the $animate service to find any animations that match
	 * the provided name value.
	 *
	 * Requires the {@link ngAnimate `ngAnimate`} module to be installed.
	 *
	 * Please visit the {@link ngAnimate `ngAnimate`} module overview page learn more about how to use animations in your application.
	 *
	 */
	.config(['$provide', '$animateProvider',
		function($provide, $animateProvider) {
			var noop = angular.noop;
			var forEach = angular.forEach;
			var selectors = $animateProvider.$$selectors;

			var ELEMENT_NODE = 1;
			var NG_ANIMATE_STATE = '$$ngAnimateState';
			var NG_ANIMATE_CLASS_NAME = 'ng-animate';
			var rootAnimateState = {
				running: true
			};

			function extractElementNode(element) {
				for (var i = 0; i < element.length; i++) {
					var elm = element[i];
					if (elm.nodeType == ELEMENT_NODE) {
						return elm;
					}
				}
			}

			function isMatchingElement(elm1, elm2) {
				return extractElementNode(elm1) == extractElementNode(elm2);
			}

			$provide.decorator('$animate', ['$delegate', '$injector', '$sniffer', '$rootElement', '$timeout', '$rootScope', '$document',
				function($delegate, $injector, $sniffer, $rootElement, $timeout, $rootScope, $document) {

					$rootElement.data(NG_ANIMATE_STATE, rootAnimateState);

					// disable animations during bootstrap, but once we bootstrapped, wait again
					// for another digest until enabling animations. The reason why we digest twice
					// is because all structural animations (enter, leave and move) all perform a
					// post digest operation before animating. If we only wait for a single digest
					// to pass then the structural animation would render its animation on page load.
					// (which is what we're trying to avoid when the application first boots up.)
					$rootScope.$$postDigest(function() {
						$rootScope.$$postDigest(function() {
							rootAnimateState.running = false;
						});
					});

					var classNameFilter = $animateProvider.classNameFilter();
					var isAnimatableClassName = !classNameFilter ? function() {
						return true;
					} : function(className) {
						return classNameFilter.test(className);
					};

					function lookup(name) {
						if (name) {
							var matches = [],
								flagMap = {},
								classes = name.substr(1)
									.split('.');

							//the empty string value is the default animation
							//operation which performs CSS transition and keyframe
							//animations sniffing. This is always included for each
							//element animation procedure if the browser supports
							//transitions and/or keyframe animations
							if ($sniffer.transitions || $sniffer.animations) {
								classes.push('');
							}

							for (var i = 0; i < classes.length; i++) {
								var klass = classes[i],
									selectorFactoryName = selectors[klass];
								if (selectorFactoryName && !flagMap[klass]) {
									matches.push($injector.get(selectorFactoryName));
									flagMap[klass] = true;
								}
							}
							return matches;
						}
					}

					/**
					 * @ngdoc object
					 * @name ngAnimate.$animate
					 * @function
					 *
					 * @description
					 * The `$animate` service provides animation detection support while performing DOM operations (enter, leave and move) as well as during addClass and removeClass operations.
					 * When any of these operations are run, the $animate service
					 * will examine any JavaScript-defined animations (which are defined by using the $animateProvider provider object)
					 * as well as any CSS-defined animations against the CSS classes present on the element once the DOM operation is run.
					 *
					 * The `$animate` service is used behind the scenes with pre-existing directives and animation with these directives
					 * will work out of the box without any extra configuration.
					 *
					 * Requires the {@link ngAnimate `ngAnimate`} module to be installed.
					 *
					 * Please visit the {@link ngAnimate `ngAnimate`} module overview page learn more about how to use animations in your application.
					 *
					 */
					return {
						/**
						 * @ngdoc function
						 * @name ngAnimate.$animate#enter
						 * @methodOf ngAnimate.$animate
						 * @function
						 *
						 * @description
						 * Appends the element to the parentElement element that resides in the document and then runs the enter animation. Once
						 * the animation is started, the following CSS classes will be present on the element for the duration of the animation:
						 *
						 * Below is a breakdown of each step that occurs during enter animation:
						 *
						 * | Animation Step                                                                               | What the element class attribute looks like |
						 * |----------------------------------------------------------------------------------------------|---------------------------------------------|
						 * | 1. $animate.enter(...) is called                                                             | class="my-animation"                        |
						 * | 2. element is inserted into the parentElement element or beside the afterElement element     | class="my-animation"                        |
						 * | 3. $animate runs any JavaScript-defined animations on the element                            | class="my-animation ng-animate"             |
						 * | 4. the .ng-enter class is added to the element                                               | class="my-animation ng-animate ng-enter"    |
						 * | 5. $animate scans the element styles to get the CSS transition/animation duration and delay  | class="my-animation ng-animate ng-enter"    |
						 * | 6. $animate waits for 10ms (this performs a reflow)                                          | class="my-animation ng-animate ng-enter"    |
						 * | 7. the .ng-enter-active and .ng-animate-active classes are added (this triggers the CSS transition/animation) | class="my-animation ng-animate ng-animate-active ng-enter ng-enter-active" |
						 * | 8. $animate waits for X milliseconds for the animation to complete                           | class="my-animation ng-animate ng-animate-active ng-enter ng-enter-active" |
						 * | 9. The animation ends and all generated CSS classes are removed from the element             | class="my-animation"                        |
						 * | 10. The doneCallback() callback is fired (if provided)                                       | class="my-animation"                        |
						 *
						 * @param {jQuery/jqLite element} element the element that will be the focus of the enter animation
						 * @param {jQuery/jqLite element} parentElement the parent element of the element that will be the focus of the enter animation
						 * @param {jQuery/jqLite element} afterElement the sibling element (which is the previous element) of the element that will be the focus of the enter animation
						 * @param {function()=} doneCallback the callback function that will be called once the animation is complete
						 */
						enter: function(element, parentElement, afterElement, doneCallback) {
							this.enabled(false, element);
							$delegate.enter(element, parentElement, afterElement);
							$rootScope.$$postDigest(function() {
								performAnimation('enter', 'ng-enter', element, parentElement, afterElement, noop, doneCallback);
							});
						},

						/**
						 * @ngdoc function
						 * @name ngAnimate.$animate#leave
						 * @methodOf ngAnimate.$animate
						 * @function
						 *
						 * @description
						 * Runs the leave animation operation and, upon completion, removes the element from the DOM. Once
						 * the animation is started, the following CSS classes will be added for the duration of the animation:
						 *
						 * Below is a breakdown of each step that occurs during leave animation:
						 *
						 * | Animation Step                                                                               | What the element class attribute looks like |
						 * |----------------------------------------------------------------------------------------------|---------------------------------------------|
						 * | 1. $animate.leave(...) is called                                                             | class="my-animation"                        |
						 * | 2. $animate runs any JavaScript-defined animations on the element                            | class="my-animation ng-animate"             |
						 * | 3. the .ng-leave class is added to the element                                               | class="my-animation ng-animate ng-leave"    |
						 * | 4. $animate scans the element styles to get the CSS transition/animation duration and delay  | class="my-animation ng-animate ng-leave"    |
						 * | 5. $animate waits for 10ms (this performs a reflow)                                          | class="my-animation ng-animate ng-leave"    |
						 * | 6. the .ng-leave-active and .ng-animate-active classes is added (this triggers the CSS transition/animation) | class="my-animation ng-animate ng-animate-active ng-leave ng-leave-active" |
						 * | 7. $animate waits for X milliseconds for the animation to complete                           | class="my-animation ng-animate ng-animate-active ng-leave ng-leave-active" |
						 * | 8. The animation ends and all generated CSS classes are removed from the element             | class="my-animation"                        |
						 * | 9. The element is removed from the DOM                                                       | ...                                         |
						 * | 10. The doneCallback() callback is fired (if provided)                                       | ...                                         |
						 *
						 * @param {jQuery/jqLite element} element the element that will be the focus of the leave animation
						 * @param {function()=} doneCallback the callback function that will be called once the animation is complete
						 */
						leave: function(element, doneCallback) {
							cancelChildAnimations(element);
							this.enabled(false, element);
							$rootScope.$$postDigest(function() {
								performAnimation('leave', 'ng-leave', element, null, null, function() {
									$delegate.leave(element);
								}, doneCallback);
							});
						},

						/**
						 * @ngdoc function
						 * @name ngAnimate.$animate#move
						 * @methodOf ngAnimate.$animate
						 * @function
						 *
						 * @description
						 * Fires the move DOM operation. Just before the animation starts, the animate service will either append it into the parentElement container or
						 * add the element directly after the afterElement element if present. Then the move animation will be run. Once
						 * the animation is started, the following CSS classes will be added for the duration of the animation:
						 *
						 * Below is a breakdown of each step that occurs during move animation:
						 *
						 * | Animation Step                                                                               | What the element class attribute looks like |
						 * |----------------------------------------------------------------------------------------------|---------------------------------------------|
						 * | 1. $animate.move(...) is called                                                              | class="my-animation"                        |
						 * | 2. element is moved into the parentElement element or beside the afterElement element        | class="my-animation"                        |
						 * | 3. $animate runs any JavaScript-defined animations on the element                            | class="my-animation ng-animate"             |
						 * | 4. the .ng-move class is added to the element                                                | class="my-animation ng-animate ng-move"     |
						 * | 5. $animate scans the element styles to get the CSS transition/animation duration and delay  | class="my-animation ng-animate ng-move"     |
						 * | 6. $animate waits for 10ms (this performs a reflow)                                          | class="my-animation ng-animate ng-move"     |
						 * | 7. the .ng-move-active and .ng-animate-active classes is added (this triggers the CSS transition/animation) | class="my-animation ng-animate ng-animate-active ng-move ng-move-active" |
						 * | 8. $animate waits for X milliseconds for the animation to complete                           | class="my-animation ng-animate ng-animate-active ng-move ng-move-active" |
						 * | 9. The animation ends and all generated CSS classes are removed from the element             | class="my-animation"                        |
						 * | 10. The doneCallback() callback is fired (if provided)                                       | class="my-animation"                        |
						 *
						 * @param {jQuery/jqLite element} element the element that will be the focus of the move animation
						 * @param {jQuery/jqLite element} parentElement the parentElement element of the element that will be the focus of the move animation
						 * @param {jQuery/jqLite element} afterElement the sibling element (which is the previous element) of the element that will be the focus of the move animation
						 * @param {function()=} doneCallback the callback function that will be called once the animation is complete
						 */
						move: function(element, parentElement, afterElement, doneCallback) {
							cancelChildAnimations(element);
							this.enabled(false, element);
							$delegate.move(element, parentElement, afterElement);
							$rootScope.$$postDigest(function() {
								performAnimation('move', 'ng-move', element, parentElement, afterElement, noop, doneCallback);
							});
						},

						/**
						 * @ngdoc function
						 * @name ngAnimate.$animate#addClass
						 * @methodOf ngAnimate.$animate
						 *
						 * @description
						 * Triggers a custom animation event based off the className variable and then attaches the className value to the element as a CSS class.
						 * Unlike the other animation methods, the animate service will suffix the className value with {@type -add} in order to provide
						 * the animate service the setup and active CSS classes in order to trigger the animation (this will be skipped if no CSS transitions
						 * or keyframes are defined on the -add or base CSS class).
						 *
						 * Below is a breakdown of each step that occurs during addClass animation:
						 *
						 * | Animation Step                                                                                 | What the element class attribute looks like |
						 * |------------------------------------------------------------------------------------------------|---------------------------------------------|
						 * | 1. $animate.addClass(element, 'super') is called                                               | class="my-animation"                        |
						 * | 2. $animate runs any JavaScript-defined animations on the element                              | class="my-animation ng-animate"             |
						 * | 3. the .super-add class are added to the element                                               | class="my-animation ng-animate super-add"   |
						 * | 4. $animate scans the element styles to get the CSS transition/animation duration and delay    | class="my-animation ng-animate super-add"   |
						 * | 5. $animate waits for 10ms (this performs a reflow)                                            | class="my-animation ng-animate super-add"   |
						 * | 6. the .super, .super-add-active and .ng-animate-active classes are added (this triggers the CSS transition/animation) | class="my-animation ng-animate ng-animate-active super super-add super-add-active"          |
						 * | 7. $animate waits for X milliseconds for the animation to complete                             | class="my-animation super-add super-add-active"  |
						 * | 8. The animation ends and all generated CSS classes are removed from the element               | class="my-animation super"                  |
						 * | 9. The super class is kept on the element                                                      | class="my-animation super"                  |
						 * | 10. The doneCallback() callback is fired (if provided)                                         | class="my-animation super"                  |
						 *
						 * @param {jQuery/jqLite element} element the element that will be animated
						 * @param {string} className the CSS class that will be added to the element and then animated
						 * @param {function()=} doneCallback the callback function that will be called once the animation is complete
						 */
						addClass: function(element, className, doneCallback) {
							performAnimation('addClass', className, element, null, null, function() {
								$delegate.addClass(element, className);
							}, doneCallback);
						},

						/**
						 * @ngdoc function
						 * @name ngAnimate.$animate#removeClass
						 * @methodOf ngAnimate.$animate
						 *
						 * @description
						 * Triggers a custom animation event based off the className variable and then removes the CSS class provided by the className value
						 * from the element. Unlike the other animation methods, the animate service will suffix the className value with {@type -remove} in
						 * order to provide the animate service the setup and active CSS classes in order to trigger the animation (this will be skipped if
						 * no CSS transitions or keyframes are defined on the -remove or base CSS classes).
						 *
						 * Below is a breakdown of each step that occurs during removeClass animation:
						 *
						 * | Animation Step                                                                                | What the element class attribute looks like     |
						 * |-----------------------------------------------------------------------------------------------|---------------------------------------------|
						 * | 1. $animate.removeClass(element, 'super') is called                                           | class="my-animation super"                  |
						 * | 2. $animate runs any JavaScript-defined animations on the element                             | class="my-animation super ng-animate"       |
						 * | 3. the .super-remove class are added to the element                                           | class="my-animation super ng-animate super-remove"|
						 * | 4. $animate scans the element styles to get the CSS transition/animation duration and delay   | class="my-animation super ng-animate super-remove"   |
						 * | 5. $animate waits for 10ms (this performs a reflow)                                           | class="my-animation super ng-animate super-remove"   |
						 * | 6. the .super-remove-active and .ng-animate-active classes are added and .super is removed (this triggers the CSS transition/animation) | class="my-animation ng-animate ng-animate-active super-remove super-remove-active"          |
						 * | 7. $animate waits for X milliseconds for the animation to complete                            | class="my-animation ng-animate ng-animate-active super-remove super-remove-active"   |
						 * | 8. The animation ends and all generated CSS classes are removed from the element              | class="my-animation"                        |
						 * | 9. The doneCallback() callback is fired (if provided)                                         | class="my-animation"                        |
						 *
						 *
						 * @param {jQuery/jqLite element} element the element that will be animated
						 * @param {string} className the CSS class that will be animated and then removed from the element
						 * @param {function()=} doneCallback the callback function that will be called once the animation is complete
						 */
						removeClass: function(element, className, doneCallback) {
							performAnimation('removeClass', className, element, null, null, function() {
								$delegate.removeClass(element, className);
							}, doneCallback);
						},

						/**
						 * @ngdoc function
						 * @name ngAnimate.$animate#enabled
						 * @methodOf ngAnimate.$animate
						 * @function
						 *
						 * @param {boolean=} value If provided then set the animation on or off.
						 * @param {jQuery/jqLite element=} element If provided then the element will be used to represent the enable/disable operation
						 * @return {boolean} Current animation state.
						 *
						 * @description
						 * Globally enables/disables animations.
						 *
						 */
						enabled: function(value, element) {
							switch (arguments.length) {
								case 2:
									if (value) {
										cleanup(element);
									} else {
										var data = element.data(NG_ANIMATE_STATE) || {};
										data.disabled = true;
										element.data(NG_ANIMATE_STATE, data);
									}
									break;

								case 1:
									rootAnimateState.disabled = !value;
									break;

								default:
									value = !rootAnimateState.disabled;
									break;
							}
							return !!value;
						}
					};

					/*
        all animations call this shared animation triggering function internally.
        The animationEvent variable refers to the JavaScript animation event that will be triggered
        and the className value is the name of the animation that will be applied within the
        CSS code. Element, parentElement and afterElement are provided DOM elements for the animation
        and the onComplete callback will be fired once the animation is fully complete.
      */
					function performAnimation(animationEvent, className, element, parentElement, afterElement, domOperation, doneCallback) {
						var currentClassName, classes, node = extractElementNode(element);
						if (node) {
							currentClassName = node.className;
							classes = currentClassName + ' ' + className;
						}

						//transcluded directives may sometimes fire an animation using only comment nodes
						//best to catch this early on to prevent any animation operations from occurring
						if (!node || !isAnimatableClassName(classes)) {
							fireDOMOperation();
							closeAnimation();
							return;
						}

						var animationLookup = (' ' + classes)
							.replace(/\s+/g, '.');
						if (!parentElement) {
							parentElement = afterElement ? afterElement.parent() : element.parent();
						}

						var matches = lookup(animationLookup);
						var isClassBased = animationEvent == 'addClass' || animationEvent == 'removeClass';
						var ngAnimateState = element.data(NG_ANIMATE_STATE) || {};

						//skip the animation if animations are disabled, a parent is already being animated,
						//the element is not currently attached to the document body or then completely close
						//the animation if any matching animations are not found at all.
						//NOTE: IE8 + IE9 should close properly (run closeAnimation()) in case a NO animation is not found.
						if (animationsDisabled(element, parentElement) || matches.length === 0) {
							fireDOMOperation();
							closeAnimation();
							return;
						}

						var animations = [];
						//only add animations if the currently running animation is not structural
						//or if there is no animation running at all
						if (!ngAnimateState.running || !(isClassBased && ngAnimateState.structural)) {
							forEach(matches, function(animation) {
								//add the animation to the queue to if it is allowed to be cancelled
								if (!animation.allowCancel || animation.allowCancel(element, animationEvent, className)) {
									var beforeFn, afterFn = animation[animationEvent];

									//Special case for a leave animation since there is no point in performing an
									//animation on a element node that has already been removed from the DOM
									if (animationEvent == 'leave') {
										beforeFn = afterFn;
										afterFn = null; //this must be falsy so that the animation is skipped for leave
									} else {
										beforeFn = animation['before' + animationEvent.charAt(0)
											.toUpperCase() + animationEvent.substr(1)];
									}
									animations.push({
										before: beforeFn,
										after: afterFn
									});
								}
							});
						}

						//this would mean that an animation was not allowed so let the existing
						//animation do it's thing and close this one early
						if (animations.length === 0) {
							fireDOMOperation();
							fireDoneCallbackAsync();
							return;
						}

						//this value will be searched for class-based CSS className lookup. Therefore,
						//we prefix and suffix the current className value with spaces to avoid substring
						//lookups of className tokens
						var futureClassName = ' ' + currentClassName + ' ';
						if (ngAnimateState.running) {
							//if an animation is currently running on the element then lets take the steps
							//to cancel that animation and fire any required callbacks
							$timeout.cancel(ngAnimateState.closeAnimationTimeout);
							cleanup(element);
							cancelAnimations(ngAnimateState.animations);

							//if the class is removed during the reflow then it will revert the styles temporarily
							//back to the base class CSS styling causing a jump-like effect to occur. This check
							//here ensures that the domOperation is only performed after the reflow has commenced
							if (ngAnimateState.beforeComplete) {
								(ngAnimateState.done || noop)(true);
							} else if (isClassBased && !ngAnimateState.structural) {
								//class-based animations will compare element className values after cancelling the
								//previous animation to see if the element properties already contain the final CSS
								//class and if so then the animation will be skipped. Since the domOperation will
								//be performed only after the reflow is complete then our element's className value
								//will be invalid. Therefore the same string manipulation that would occur within the
								//DOM operation will be performed below so that the class comparison is valid...
								futureClassName = ngAnimateState.event == 'removeClass' ?
									futureClassName.replace(ngAnimateState.className, '') :
									futureClassName + ngAnimateState.className + ' ';
							}
						}

						//There is no point in perform a class-based animation if the element already contains
						//(on addClass) or doesn't contain (on removeClass) the className being animated.
						//The reason why this is being called after the previous animations are cancelled
						//is so that the CSS classes present on the element can be properly examined.
						var classNameToken = ' ' + className + ' ';
						if ((animationEvent == 'addClass' && futureClassName.indexOf(classNameToken) >= 0) ||
							(animationEvent == 'removeClass' && futureClassName.indexOf(classNameToken) == -1)) {
							fireDOMOperation();
							fireDoneCallbackAsync();
							return;
						}

						//the ng-animate class does nothing, but it's here to allow for
						//parent animations to find and cancel child animations when needed
						element.addClass(NG_ANIMATE_CLASS_NAME);

						element.data(NG_ANIMATE_STATE, {
							running: true,
							event: animationEvent,
							className: className,
							structural: !isClassBased,
							animations: animations,
							done: onBeforeAnimationsComplete
						});

						//first we run the before animations and when all of those are complete
						//then we perform the DOM operation and run the next set of animations
						invokeRegisteredAnimationFns(animations, 'before', onBeforeAnimationsComplete);

						function onBeforeAnimationsComplete(cancelled) {
							fireDOMOperation();
							if (cancelled === true) {
								closeAnimation();
								return;
							}

							//set the done function to the final done function
							//so that the DOM event won't be executed twice by accident
							//if the after animation is cancelled as well
							var data = element.data(NG_ANIMATE_STATE);
							if (data) {
								data.done = closeAnimation;
								element.data(NG_ANIMATE_STATE, data);
							}
							invokeRegisteredAnimationFns(animations, 'after', closeAnimation);
						}

						function invokeRegisteredAnimationFns(animations, phase, allAnimationFnsComplete) {
							var endFnName = phase + 'End';
							forEach(animations, function(animation, index) {
								var animationPhaseCompleted = function() {
									progress(index, phase);
								};

								//there are no before functions for enter + move since the DOM
								//operations happen before the performAnimation method fires
								if (phase == 'before' && (animationEvent == 'enter' || animationEvent == 'move')) {
									animationPhaseCompleted();
									return;
								}

								if (animation[phase]) {
									animation[endFnName] = isClassBased ?
										animation[phase](element, className, animationPhaseCompleted) :
										animation[phase](element, animationPhaseCompleted);
								} else {
									animationPhaseCompleted();
								}
							});

							function progress(index, phase) {
								var phaseCompletionFlag = phase + 'Complete';
								var currentAnimation = animations[index];
								currentAnimation[phaseCompletionFlag] = true;
								(currentAnimation[endFnName] || noop)();

								for (var i = 0; i < animations.length; i++) {
									if (!animations[i][phaseCompletionFlag]) return;
								}

								allAnimationFnsComplete();
							}
						}

						function fireDoneCallbackAsync() {
							doneCallback && $timeout(doneCallback, 0, false);
						}

						//it is less complicated to use a flag than managing and cancelling
						//timeouts containing multiple callbacks.
						function fireDOMOperation() {
							if (!fireDOMOperation.hasBeenRun) {
								fireDOMOperation.hasBeenRun = true;
								domOperation();
							}
						}

						function closeAnimation() {
							if (!closeAnimation.hasBeenRun) {
								closeAnimation.hasBeenRun = true;
								var data = element.data(NG_ANIMATE_STATE);
								if (data) {
									/* only structural animations wait for reflow before removing an
                 animation, but class-based animations don't. An example of this
                 failing would be when a parent HTML tag has a ng-class attribute
                 causing ALL directives below to skip animations during the digest */
									if (isClassBased) {
										cleanup(element);
									} else {
										data.closeAnimationTimeout = $timeout(function() {
											cleanup(element);
										}, 0, false);
										element.data(NG_ANIMATE_STATE, data);
									}
								}
								fireDoneCallbackAsync();
							}
						}
					}

					function cancelChildAnimations(element) {
						var node = extractElementNode(element);
						forEach(node.querySelectorAll('.' + NG_ANIMATE_CLASS_NAME), function(element) {
							element = angular.element(element);
							var data = element.data(NG_ANIMATE_STATE);
							if (data) {
								cancelAnimations(data.animations);
								cleanup(element);
							}
						});
					}

					function cancelAnimations(animations) {
						var isCancelledFlag = true;
						forEach(animations, function(animation) {
							if (!animations.beforeComplete) {
								(animation.beforeEnd || noop)(isCancelledFlag);
							}
							if (!animations.afterComplete) {
								(animation.afterEnd || noop)(isCancelledFlag);
							}
						});
					}

					function cleanup(element) {
						if (isMatchingElement(element, $rootElement)) {
							if (!rootAnimateState.disabled) {
								rootAnimateState.running = false;
								rootAnimateState.structural = false;
							}
						} else {
							element.removeClass(NG_ANIMATE_CLASS_NAME);
							element.removeData(NG_ANIMATE_STATE);
						}
					}

					function animationsDisabled(element, parentElement) {
						if (rootAnimateState.disabled) return true;

						if (isMatchingElement(element, $rootElement)) {
							return rootAnimateState.disabled || rootAnimateState.running;
						}

						do {
							//the element did not reach the root element which means that it
							//is not apart of the DOM. Therefore there is no reason to do
							//any animations on it
							if (parentElement.length === 0) break;

							var isRoot = isMatchingElement(parentElement, $rootElement);
							var state = isRoot ? rootAnimateState : parentElement.data(NG_ANIMATE_STATE);
							var result = state && ( !! state.disabled || !! state.running);
							if (isRoot || result) {
								return result;
							}

							if (isRoot) return true;
						}
						while (parentElement = parentElement.parent());

						return true;
					}
				}
			]);

			$animateProvider.register('', ['$window', '$sniffer', '$timeout',
				function($window, $sniffer, $timeout) {
					// Detect proper transitionend/animationend event names.
					var CSS_PREFIX = '',
						TRANSITION_PROP, TRANSITIONEND_EVENT, ANIMATION_PROP, ANIMATIONEND_EVENT;

					// If unprefixed events are not supported but webkit-prefixed are, use the latter.
					// Otherwise, just use W3C names, browsers not supporting them at all will just ignore them.
					// Note: Chrome implements `window.onwebkitanimationend` and doesn't implement `window.onanimationend`
					// but at the same time dispatches the `animationend` event and not `webkitAnimationEnd`.
					// Register both events in case `window.onanimationend` is not supported because of that,
					// do the same for `transitionend` as Safari is likely to exhibit similar behavior.
					// Also, the only modern browser that uses vendor prefixes for transitions/keyframes is webkit
					// therefore there is no reason to test anymore for other vendor prefixes: http://caniuse.com/#search=transition
					if (window.ontransitionend === undefined && window.onwebkittransitionend !== undefined) {
						CSS_PREFIX = '-webkit-';
						TRANSITION_PROP = 'WebkitTransition';
						TRANSITIONEND_EVENT = 'webkitTransitionEnd transitionend';
					} else {
						TRANSITION_PROP = 'transition';
						TRANSITIONEND_EVENT = 'transitionend';
					}

					if (window.onanimationend === undefined && window.onwebkitanimationend !== undefined) {
						CSS_PREFIX = '-webkit-';
						ANIMATION_PROP = 'WebkitAnimation';
						ANIMATIONEND_EVENT = 'webkitAnimationEnd animationend';
					} else {
						ANIMATION_PROP = 'animation';
						ANIMATIONEND_EVENT = 'animationend';
					}

					var DURATION_KEY = 'Duration';
					var PROPERTY_KEY = 'Property';
					var DELAY_KEY = 'Delay';
					var ANIMATION_ITERATION_COUNT_KEY = 'IterationCount';
					var NG_ANIMATE_PARENT_KEY = '$$ngAnimateKey';
					var NG_ANIMATE_CSS_DATA_KEY = '$$ngAnimateCSS3Data';
					var ELAPSED_TIME_MAX_DECIMAL_PLACES = 3;
					var CLOSING_TIME_BUFFER = 1.5;
					var ONE_SECOND = 1000;

					var animationCounter = 0;
					var lookupCache = {};
					var parentCounter = 0;
					var animationReflowQueue = [];
					var animationElementQueue = [];
					var animationTimer;
					var closingAnimationTime = 0;
					var timeOut = false;

					function afterReflow(element, callback) {
						$timeout.cancel(animationTimer);

						animationReflowQueue.push(callback);

						var node = extractElementNode(element);
						element = angular.element(node);
						animationElementQueue.push(element);

						var elementData = element.data(NG_ANIMATE_CSS_DATA_KEY);
						closingAnimationTime = Math.max(closingAnimationTime, (elementData.maxDelay + elementData.maxDuration) * CLOSING_TIME_BUFFER * ONE_SECOND);

						//by placing a counter we can avoid an accidental
						//race condition which may close an animation when
						//a follow-up animation is midway in its animation
						elementData.animationCount = animationCounter;

						animationTimer = $timeout(function() {
							forEach(animationReflowQueue, function(fn) {
								fn();
							});

							//copy the list of elements so that successive
							//animations won't conflict if they're added before
							//the closing animation timeout has run
							var elementQueueSnapshot = [];
							var animationCounterSnapshot = animationCounter;
							forEach(animationElementQueue, function(elm) {
								elementQueueSnapshot.push(elm);
							});

							$timeout(function() {
								closeAllAnimations(elementQueueSnapshot, animationCounterSnapshot);
								elementQueueSnapshot = null;
							}, closingAnimationTime, false);

							animationReflowQueue = [];
							animationElementQueue = [];
							animationTimer = null;
							lookupCache = {};
							closingAnimationTime = 0;
							animationCounter++;
						}, 10, false);
					}

					function closeAllAnimations(elements, count) {
						forEach(elements, function(element) {
							var elementData = element.data(NG_ANIMATE_CSS_DATA_KEY);
							if (elementData && elementData.animationCount == count) {
								(elementData.closeAnimationFn || noop)();
							}
						});
					}

					function getElementAnimationDetails(element, cacheKey) {
						var data = cacheKey ? lookupCache[cacheKey] : null;
						if (!data) {
							var transitionDuration = 0;
							var transitionDelay = 0;
							var animationDuration = 0;
							var animationDelay = 0;
							var transitionDelayStyle;
							var animationDelayStyle;
							var transitionDurationStyle;
							var transitionPropertyStyle;

							//we want all the styles defined before and after
							forEach(element, function(element) {
								if (element.nodeType == ELEMENT_NODE) {
									var elementStyles = $window.getComputedStyle(element) || {};

									transitionDurationStyle = elementStyles[TRANSITION_PROP + DURATION_KEY];

									transitionDuration = Math.max(parseMaxTime(transitionDurationStyle), transitionDuration);

									transitionPropertyStyle = elementStyles[TRANSITION_PROP + PROPERTY_KEY];

									transitionDelayStyle = elementStyles[TRANSITION_PROP + DELAY_KEY];

									transitionDelay = Math.max(parseMaxTime(transitionDelayStyle), transitionDelay);

									animationDelayStyle = elementStyles[ANIMATION_PROP + DELAY_KEY];

									animationDelay = Math.max(parseMaxTime(animationDelayStyle), animationDelay);

									var aDuration = parseMaxTime(elementStyles[ANIMATION_PROP + DURATION_KEY]);

									if (aDuration > 0) {
										aDuration *= parseInt(elementStyles[ANIMATION_PROP + ANIMATION_ITERATION_COUNT_KEY], 10) || 1;
									}

									animationDuration = Math.max(aDuration, animationDuration);
								}
							});
							data = {
								total: 0,
								transitionPropertyStyle: transitionPropertyStyle,
								transitionDurationStyle: transitionDurationStyle,
								transitionDelayStyle: transitionDelayStyle,
								transitionDelay: transitionDelay,
								transitionDuration: transitionDuration,
								animationDelayStyle: animationDelayStyle,
								animationDelay: animationDelay,
								animationDuration: animationDuration
							};
							if (cacheKey) {
								lookupCache[cacheKey] = data;
							}
						}
						return data;
					}

					function parseMaxTime(str) {
						var maxValue = 0;
						var values = angular.isString(str) ?
							str.split(/\s*,\s*/) :
							[];
						forEach(values, function(value) {
							maxValue = Math.max(parseFloat(value) || 0, maxValue);
						});
						return maxValue;
					}

					function getCacheKey(element) {
						var parentElement = element.parent();
						var parentID = parentElement.data(NG_ANIMATE_PARENT_KEY);
						if (!parentID) {
							parentElement.data(NG_ANIMATE_PARENT_KEY, ++parentCounter);
							parentID = parentCounter;
						}
						return parentID + '-' + extractElementNode(element)
							.className;
					}

					function animateSetup(element, className) {
						var cacheKey = getCacheKey(element);
						var eventCacheKey = cacheKey + ' ' + className;
						var stagger = {};
						var ii = lookupCache[eventCacheKey] ? ++lookupCache[eventCacheKey].total : 0;

						if (ii > 0) {
							var staggerClassName = className + '-stagger';
							var staggerCacheKey = cacheKey + ' ' + staggerClassName;
							var applyClasses = !lookupCache[staggerCacheKey];

							applyClasses && element.addClass(staggerClassName);

							stagger = getElementAnimationDetails(element, staggerCacheKey);

							applyClasses && element.removeClass(staggerClassName);
						}

						element.addClass(className);

						var timings = getElementAnimationDetails(element, eventCacheKey);

						/* there is no point in performing a reflow if the animation
           timeout is empty (this would cause a flicker bug normally
           in the page. There is also no point in performing an animation
           that only has a delay and no duration */
						var maxDelay = Math.max(timings.transitionDelay, timings.animationDelay);
						var maxDuration = Math.max(timings.transitionDuration, timings.animationDuration);
						if (maxDuration === 0) {
							element.removeClass(className);
							return false;
						}

						//temporarily disable the transition so that the enter styles
						//don't animate twice (this is here to avoid a bug in Chrome/FF).
						var activeClassName = '';
						timings.transitionDuration > 0 ?
							blockTransitions(element) :
							blockKeyframeAnimations(element);

						forEach(className.split(' '), function(klass, i) {
							activeClassName += (i > 0 ? ' ' : '') + klass + '-active';
						});

						element.data(NG_ANIMATE_CSS_DATA_KEY, {
							className: className,
							activeClassName: activeClassName,
							maxDuration: maxDuration,
							maxDelay: maxDelay,
							classes: className + ' ' + activeClassName,
							timings: timings,
							stagger: stagger,
							ii: ii
						});

						return true;
					}

					function blockTransitions(element) {
						extractElementNode(element)
							.style[TRANSITION_PROP + PROPERTY_KEY] = 'none';
					}

					function blockKeyframeAnimations(element) {
						extractElementNode(element)
							.style[ANIMATION_PROP] = 'none 0s';
					}

					function unblockTransitions(element) {
						var prop = TRANSITION_PROP + PROPERTY_KEY;
						var node = extractElementNode(element);
						if (node.style[prop] && node.style[prop].length > 0) {
							node.style[prop] = '';
						}
					}

					function unblockKeyframeAnimations(element) {
						var prop = ANIMATION_PROP;
						var node = extractElementNode(element);
						if (node.style[prop] && node.style[prop].length > 0) {
							node.style[prop] = '';
						}
					}

					function animateRun(element, className, activeAnimationComplete) {
						var elementData = element.data(NG_ANIMATE_CSS_DATA_KEY);
						var node = extractElementNode(element);
						if (node.className.indexOf(className) == -1 || !elementData) {
							activeAnimationComplete();
							return;
						}

						var timings = elementData.timings;
						var stagger = elementData.stagger;
						var maxDuration = elementData.maxDuration;
						var activeClassName = elementData.activeClassName;
						var maxDelayTime = Math.max(timings.transitionDelay, timings.animationDelay) * ONE_SECOND;
						var startTime = Date.now();
						var css3AnimationEvents = ANIMATIONEND_EVENT + ' ' + TRANSITIONEND_EVENT;
						var ii = elementData.ii;

						var style = '',
							appliedStyles = [];
						if (timings.transitionDuration > 0) {
							var propertyStyle = timings.transitionPropertyStyle;
							if (propertyStyle.indexOf('all') == -1) {
								style += CSS_PREFIX + 'transition-property: ' + propertyStyle + ';';
								style += CSS_PREFIX + 'transition-duration: ' + timings.transitionDurationStyle + 's;';
								appliedStyles.push(CSS_PREFIX + 'transition-property');
								appliedStyles.push(CSS_PREFIX + 'transition-duration');
							}
						}

						if (ii > 0) {
							if (stagger.transitionDelay > 0 && stagger.transitionDuration === 0) {
								var delayStyle = timings.transitionDelayStyle;
								style += CSS_PREFIX + 'transition-delay: ' +
									prepareStaggerDelay(delayStyle, stagger.transitionDelay, ii) + '; ';
								appliedStyles.push(CSS_PREFIX + 'transition-delay');
							}

							if (stagger.animationDelay > 0 && stagger.animationDuration === 0) {
								style += CSS_PREFIX + 'animation-delay: ' +
									prepareStaggerDelay(timings.animationDelayStyle, stagger.animationDelay, ii) + '; ';
								appliedStyles.push(CSS_PREFIX + 'animation-delay');
							}
						}

						if (appliedStyles.length > 0) {
							//the element being animated may sometimes contain comment nodes in
							//the jqLite object, so we're safe to use a single variable to house
							//the styles since there is always only one element being animated
							var oldStyle = node.getAttribute('style') || '';
							node.setAttribute('style', oldStyle + ' ' + style);
						}

						element.on(css3AnimationEvents, onAnimationProgress);
						element.addClass(activeClassName);
						elementData.closeAnimationFn = function() {
							onEnd();
							activeAnimationComplete();
						};
						return onEnd;

						// This will automatically be called by $animate so
						// there is no need to attach this internally to the
						// timeout done method.
						function onEnd(cancelled) {
							element.off(css3AnimationEvents, onAnimationProgress);
							element.removeClass(activeClassName);
							animateClose(element, className);
							var node = extractElementNode(element);
							for (var i in appliedStyles) {
								node.style.removeProperty(appliedStyles[i]);
							}
						}

						function onAnimationProgress(event) {
							event.stopPropagation();
							var ev = event.originalEvent || event;
							var timeStamp = ev.$manualTimeStamp || ev.timeStamp || Date.now();

							/* Firefox (or possibly just Gecko) likes to not round values up
							 * when a ms measurement is used for the animation */
							var elapsedTime = parseFloat(ev.elapsedTime.toFixed(ELAPSED_TIME_MAX_DECIMAL_PLACES));

							/* $manualTimeStamp is a mocked timeStamp value which is set
							 * within browserTrigger(). This is only here so that tests can
							 * mock animations properly. Real events fallback to event.timeStamp,
							 * or, if they don't, then a timeStamp is automatically created for them.
							 * We're checking to see if the timeStamp surpasses the expected delay,
							 * but we're using elapsedTime instead of the timeStamp on the 2nd
							 * pre-condition since animations sometimes close off early */
							if (Math.max(timeStamp - startTime, 0) >= maxDelayTime && elapsedTime >= maxDuration) {
								activeAnimationComplete();
							}
						}
					}

					function prepareStaggerDelay(delayStyle, staggerDelay, index) {
						var style = '';
						forEach(delayStyle.split(','), function(val, i) {
							style += (i > 0 ? ',' : '') +
								(index * staggerDelay + parseInt(val, 10)) + 's';
						});
						return style;
					}

					function animateBefore(element, className) {
						if (animateSetup(element, className)) {
							return function(cancelled) {
								cancelled && animateClose(element, className);
							};
						}
					}

					function animateAfter(element, className, afterAnimationComplete) {
						if (element.data(NG_ANIMATE_CSS_DATA_KEY)) {
							return animateRun(element, className, afterAnimationComplete);
						} else {
							animateClose(element, className);
							afterAnimationComplete();
						}
					}

					function animate(element, className, animationComplete) {
						//If the animateSetup function doesn't bother returning a
						//cancellation function then it means that there is no animation
						//to perform at all
						var preReflowCancellation = animateBefore(element, className);
						if (!preReflowCancellation) {
							animationComplete();
							return;
						}

						//There are two cancellation functions: one is before the first
						//reflow animation and the second is during the active state
						//animation. The first function will take care of removing the
						//data from the element which will not make the 2nd animation
						//happen in the first place
						var cancel = preReflowCancellation;
						afterReflow(element, function() {
							unblockTransitions(element);
							unblockKeyframeAnimations(element);
							//once the reflow is complete then we point cancel to
							//the new cancellation function which will remove all of the
							//animation properties from the active animation
							cancel = animateAfter(element, className, animationComplete);
						});

						return function(cancelled) {
							(cancel || noop)(cancelled);
						};
					}

					function animateClose(element, className) {
						element.removeClass(className);
						element.removeData(NG_ANIMATE_CSS_DATA_KEY);
					}

					return {
						allowCancel: function(element, animationEvent, className) {
							//always cancel the current animation if it is a
							//structural animation
							var oldClasses = (element.data(NG_ANIMATE_CSS_DATA_KEY) || {})
								.classes;
							if (!oldClasses || ['enter', 'leave', 'move'].indexOf(animationEvent) >= 0) {
								return true;
							}

							var parentElement = element.parent();
							var clone = angular.element(extractElementNode(element)
								.cloneNode());

							//make the element super hidden and override any CSS style values
							clone.attr('style', 'position:absolute; top:-9999px; left:-9999px');
							clone.removeAttr('id');
							clone.empty();

							forEach(oldClasses.split(' '), function(klass) {
								clone.removeClass(klass);
							});

							var suffix = animationEvent == 'addClass' ? '-add' : '-remove';
							clone.addClass(suffixClasses(className, suffix));
							parentElement.append(clone);

							var timings = getElementAnimationDetails(clone);
							clone.remove();

							return Math.max(timings.transitionDuration, timings.animationDuration) > 0;
						},

						enter: function(element, animationCompleted) {
							return animate(element, 'ng-enter', animationCompleted);
						},

						leave: function(element, animationCompleted) {
							return animate(element, 'ng-leave', animationCompleted);
						},

						move: function(element, animationCompleted) {
							return animate(element, 'ng-move', animationCompleted);
						},

						beforeAddClass: function(element, className, animationCompleted) {
							var cancellationMethod = animateBefore(element, suffixClasses(className, '-add'));
							if (cancellationMethod) {
								afterReflow(element, function() {
									unblockTransitions(element);
									unblockKeyframeAnimations(element);
									animationCompleted();
								});
								return cancellationMethod;
							}
							animationCompleted();
						},

						addClass: function(element, className, animationCompleted) {
							return animateAfter(element, suffixClasses(className, '-add'), animationCompleted);
						},

						beforeRemoveClass: function(element, className, animationCompleted) {
							var cancellationMethod = animateBefore(element, suffixClasses(className, '-remove'));
							if (cancellationMethod) {
								afterReflow(element, function() {
									unblockTransitions(element);
									unblockKeyframeAnimations(element);
									animationCompleted();
								});
								return cancellationMethod;
							}
							animationCompleted();
						},

						removeClass: function(element, className, animationCompleted) {
							return animateAfter(element, suffixClasses(className, '-remove'), animationCompleted);
						}
					};

					function suffixClasses(classes, suffix) {
						var className = '';
						classes = angular.isArray(classes) ? classes : classes.split(/\s+/);
						forEach(classes, function(klass, i) {
							if (klass && klass.length > 0) {
								className += (i > 0 ? ' ' : '') + klass + suffix;
							}
						});
						return className;
					}
				}
			]);
		}
	]);


})(window, window.angular);

/*var better_resource_module = angular.module('better_resource', ['ngResource']);

better_resource_module.factory('btrResource', ['$resource', '$rootScope', function($resource, $rootScope){
	function factory(url, param_defaults, actions){
		var test = $resource(url, param_defaults, actions);

	    test.orig_get = test.get;

	    test.orig_query = test.query;

	    function setUpChangeWatch(instance){
				instance.unsaved = false;
	    		$rootScope.$watch(function(){
	    			return instance;
	    		}, function(newValue, oldValue) {
	    			//console.log('comparing');
			       	if(angular.equals(newValue, oldValue)){
			       		return;
			       	}
			       var changed_indexes = [];
			       for(var i in newValue){
			       		console.log(i);
				   		if(!angular.equals(newValue[i], oldValue[i])){
				   			//console.log("change:", i);
				       		changed_indexes.push(i);
				       	}
			       }
			       var dont_check = ['unsaved', '$$hashKey', 'howl', 'playing'];
			       var dont_check_sum = 0;
			       for(var i in dont_check){
			       		for(var j in changed_indexes){
			       			if(changed_indexes[j]==dont_check[i]){
			       				dont_check_sum++;
			       			}
			       		}
			       }
			       if(newValue != null && oldValue != null && !(changed_indexes.length==dont_check_sum)){
			        	//console.log('detected change. setting unsaved to true', changed_indexes);
			            instance.unsaved = true;
			        }
			       
			    }, true);

	    }

	    test.query = function(options, callback){
	    	var ret = test.orig_query(options, function(data){
	    		for(var i in data){
	    			setUpChangeWatch(data[i]);
	    		}
	    		if(callback!=undefined){
	    			callback();
	    		}
	    	});
	    	return ret;
	    }

	    test.get = function(options, callback){
	    	var instance = test.orig_get(options, function(){
	    		setUpChangeWatch(instance);
			    if(callback!=undefined){
			    	callback();
		    	}
	    	});
		    return instance;
	    }

	    test.prototype.orig_save = test.prototype.$save;

	    function callIfDefined(callback){
	    	if(callback!=undefined){
    			callback();
			}
	    }

	    test.prototype.$save = function(callback){
	    	////console.log('inside save');
	    	if(this.unsaved){
		    	var ret= this.orig_save( function(){
		    		this.unsaved = false;    
		    		callIfDefined(callback)		
		    	})	    		
	    	}else{	
	    		var ret = this;
	    		callIfDefined(callback)
	    	}
			return ret;
	    }

	    return test; 
	}

	return factory;
}])*/

var better_resource_module = angular.module('better_resource', ['ngResource']);

better_resource_module.factory('btrResource', ['$resource', '$rootScope',
	function($resource, $rootScope) {
		function factory(url, param_defaults, actions) {
			var test = $resource(url, param_defaults, actions);

			test.orig_get = test.get;

			test.orig_query = test.query;

			function setUpChangeWatch(instance) {
				console.log('setting up watch');
				instance.unsaved = false;
				$rootScope.$watch(function() {
					//return angular.toJson(instance);
					return instance;
				}, function(newValue, oldValue) {
					//console.log('watch fired');
					if (angular.equals(newValue, oldValue)) {
						return;
					}
					var changed_indexes = [];
					for (var i in newValue) {
						//console.log(i);
						if (!angular.equals(newValue[i], oldValue[i])) {
							changed_indexes.push(i);
						}
					}
					var dont_check = ['unsaved', '$$hashKey'];
					var dont_check_sum = 0;
					for (var i in dont_check) {
						for (var j in changed_indexes) {
							if (changed_indexes[j] == dont_check[i]) {
								dont_check_sum++;
							}
						}
					}
					if (newValue != null && oldValue != null && !(changed_indexes.length == dont_check_sum)) {
						console.log('detected change. setting unsaved to true', changed_indexes);
						instance.unsaved = true;
					}

				}, true);

			}

			test.query = function(options, callback) {
				var ret = test.orig_query(options, function(data) {
					//console.log(data);
					for (var i in data) {
						setUpChangeWatch(data[i]);
					}
					if (callback != undefined) {
						callback();
					}
				});
				return ret;
			}

			test.get = function(options, callback) {
				var instance = test.orig_get(options, function() {
					setUpChangeWatch(instance);
					if (callback != undefined) {
						callback();
					}
				});
				return instance;
			}

			test.prototype.orig_save = test.prototype.$save;

			function callIfDefined(callback) {
				if (callback != undefined) {
					callback();
				}
			}

			test.prototype.$save = function(callback) {
				//console.log('inside save');
				if (this.unsaved) {
					var ret = this.orig_save(function() {
						this.unsaved = false;
						callIfDefined(callback)
					})
				} else {
					var ret = this;
					callIfDefined(callback)
				}
				return ret;
			}

			return test;
		}

		return factory;
	}
])
var app = angular.module('app', ['ngResource', 'ngAnimate', 'ngSanitize', 'better_resource', 'ngRoute'])
	.config(
		['$routeProvider',
			function($routeProvider) {
				$routeProvider
					.when('/home', {
						templateUrl: 'web/html/views/home.html'
					})
					.when('/exercises', {
						templateUrl: 'web/html/views/exercise_list.html',
						controller: 'exercise_list',
						reloadOnSearch: false
					})
					.when('/exercises/:muscle_type_name', {
						templateUrl: 'web/html/views/exercise_list.html',
						controller: 'exercise_list',
						reloadOnSearch: false
					})
					.when('/exercise/new', {
						templateUrl: 'web/html/views/create_exercise.html',
						controller: 'new_exercise'
					})
					.when('/exercise/:id', {
						templateUrl: 'web/html/views/exercise.html',
						controller: 'exercise'
					})
					.when('/exercise/:id/go', {
						templateUrl: 'web/html/views/exercise_go.html',
						controller: 'exercise_go'
					})
					.when('/exercise/:id/log', {
						templateUrl: 'web/html/views/exercise_log.html',
						controller: 'exercise_log'
					})
					.when('/history', {
						templateUrl: 'web/html/views/history.html',
						controller: 'history'
					})
					.when('/logs/:logId', {
						templateUrl: 'web/html/views/log.html',
						controller: 'log'
					})
					.otherwise({
						redirectTo: '/home'
					});
			}
		]
);
app.service('user', ['btrResource', '$http',
	function(resource, $http) {
		var userResource = new resource("/api/users/me");
		var user = userResource.get(function() {
			//console.log(user);
		});

		userResource.prototype.refresh = function() {
			$http.get("api/users/me")
				.success(function(data) {
					for (var i in data) {
						this[i] = data[i];
					}
				})
		}
		//console.log(user);
		return user;
	}
]);


app.service('metronome', function() {
	var sound = new buzz.sound('/web/sounds/metronome', {
		formats: ['mp3'],
		preload: true,
		loop: true
	})

	this.play = function() {
		sound.play();
	}

	this.pause = function() {
		sound.pause();
	}

	this.fadeOut = function(time) {

	}
})

app.service('notifSound', function() {
	var sound = new buzz.sound('/web/sounds/notif', {
		formats: ['mp3'],
		preload: true,
		loop: false
	})

	this.play = function() {
		sound.play();
	}

	this.pause = function() {
		sound.pause();
	}
})

app.service('music_player', function() {

	var playing = false;

	var track = new buzz.sound('/web/sounds/getInShapeLoop', {
		formats: ['mp3'],
		preload: true,
		loop: true
	})

	window.test_h = track;

	window.test_s = this;

	this.reset = function() {
		track.setPercent(0);
	}

	this.fadeOut = function(duration) {
		track.fadeOut(duration);
		playing = false;
	}

	this.play = function() {
		if (!playing) {
			playing = true;
			//track.fadeIn(100);
			track.setVolume(100);
			track.play();
			console.log('play');
		}
		//alert('play!');
	}

	this.pause = function() {
		if (playing) {
			track.pause();
			playing = false;
			console.log('pause');
		}
	}

	this.setVolume = function(volume) {
		track.setVolume(volume)
	}

})
app.controller('user', ['$scope', 'user',
	function($scope, user) {
		$scope.user = user;
		$scope.log = function() {}
	}
]);

app.controller('navigation', ['$scope',
	function($scope) {
		$scope.show_navigation = false;

		$scope["switch"] = function() {
			$scope.show_navigation = !$scope.show_navigation;
		}
	}
])

app.controller('home', ['$scope', '$http', 'user',
	function($scope, $http, user) {
		$scope.recommendations = [];

		user.refresh();

		$scope.user = user;

		$http.get('/api/recom')
			.success(function(data) {
				$scope.recommendations = data;
			})

		$scope.scores = [];
		$scope.current_score = '';
		$scope.streak_status = {};
		$scope.score_lookBehind = 30;
		$scope.score_loaded = false;

		$scope.refreshChart = function(lookBehind) {
			$http.get('/api/scoreboard?amount=' + lookBehind)
				.success(function(data) {
					$scope.scores = data;
					$scope.current_score = data[0]['me'];
					$http.get("/api/streak_status")
						.success(function(data) {
							$scope.streak_status = data;
							$scope.score_loaded = true;
						})
				})
		}

		$scope.refreshChart($scope.score_lookBehind);

		$scope.$watch('score_lookBehind', function(newVal) {
			$scope.refreshChart(newVal);
		})

	}
])

app.controller('exercise_list', ['$scope', '$http', '$routeParams',
	function($scope, $http, $routeParams) {
		console.log($routeParams);
		$scope.exercise_list_loaded = false;
		$scope.exercises = [];
		$scope.filter = {
			muscle_part: 'all'
		}

		$scope.sort = 'days_since_last_exercise';

		$scope.muscle_parts = [{
			id: 'all',
			name: 'any'
		}];

		$scope.filterExercises = function(exercise) {
			var muscle_part = $scope.filter.muscle_part;
			if (muscle_part == 'all') {
				return true;
			} else {
				if (muscle_part == exercise.muscle_part_id) {
					return true;
				}
			}
			return false;
		}

		$scope.getMuscleName = function() {
			for (var i in $scope.muscle_parts) {
				if ($scope.muscle_parts[i].id == $scope.filter.muscle_part) {
					return $scope.muscle_parts[i].name;
				}
			}
		}

		$scope.$watch('filter.muscle_part', function(newVal) {

		})

		$http.get('/api/exercises')
			.success(function(data) {
				$scope.exercises = data;
				for (var i in data) {
					var muscle_part = {
						id: data[i].muscle_part_id,
						name: data[i].type_name
					}
					var found = false;
					for (var j in $scope.muscle_parts) {
						if ($scope.muscle_parts[j].id == muscle_part.id) {
							found = true;
						}
					}
					if (!found) {
						$scope.muscle_parts.push(muscle_part);
					}
					data[i].days_since_last_exercise = parseInt(data[i].days_since_last_exercise);
				}
				if ($routeParams.muscle_type_name != undefined && $routeParams.muscle_type_name != 'all') {
					for (var i in $scope.muscle_parts) {
						if ($scope.muscle_parts[i].name == $routeParams.muscle_type_name) {
							$scope.filter.muscle_part = $scope.muscle_parts[i].id;
						}
					}
				}
				$scope.exercise_list_loaded = true;
			});
	}
]);


app.controller('new_exercise', ['$scope', '$http',
	function($scope, $http) {

		$scope.exercise_list_loaded;
		$scope.muscle_parts = [];

		$scope.exercise_data = {
			name: "",
			muscle_part_id: "",
			muscle_part_name_custom: "",
			use_custom_muscle: false,
			template: {
				type: 'traditional',
				params: {
					traditional: {
						set_amount: 5
					},
					outside: {
						distance: true,
						avg_speed: true,
						calories: false,
						max_speed: false
					},
					fancy: {
						rows: [{
							name: "",
							unit: ""
						}]
					}
				}
			}
		}

		$scope.create = function() {
			var data = $scope.exercise_data;
			var params = {
				name: data.name
			};
			if (data.use_custom_muscle) {
				$http.post('/api/muscleParts', {
					name: data.muscle_part_name_custom
				})
					.success(function(data) {
						var muscle_id = data.id;
						$scope.postExercise(muscle_id);
					});
			} else {
				$scope.postExercise(data.muscle_part_id);
			}
		}

		$scope.postExercise = function(muscle_part_id) {
			var data = $scope.exercise_data;
			var params = {
				name: data.name,
				muscle_part_id: muscle_part_id
			};
			$http.post('/api/exercises', params)
				.success(function(data) {
					var exe_id = data.id;
					$scope.createSets(exe_id);
				})
		}

		$scope.createSets = function(exercise_id) {
			var data = $scope.exercise_data.template;
			var set_array = [];
			switch (data.type) {
				case 'traditional':
					for (var i = 1; i <= data.params.traditional.set_amount; i++) {
						var set = {
							name: "set #" + i,
							exercise_id: exercise_id,
							orderL: i,
							unit: 'reps'
						}
						set_array.push(set);
					}
					break;
				case 'outside':
					var subdata = data.params.outside;
					if (subdata.avg_speed) {
						set_array.push({
							name: 'avg speed',
							exercise_id: exercise_id,
							orderL: 2,
							unit: 'km/h'
						})
					};
					if (subdata.calories) {
						set_array.push({
							name: 'calories burned',
							exercise_id: exercise_id,
							orderL: 3,
							unit: 'kcal'
						})
					};
					if (subdata.distance) {
						set_array.push({
							name: 'distance',
							exercise_id: exercise_id,
							orderL: 1,
							unit: 'km'
						})
					}
					if (subdata.max_speed) {
						set_array.push({
							name: 'max speed',
							exercise_id: exercise_id,
							orderL: 4,
							unit: 'km/h'
						})
					}
					break;
				case "fancy":
					var custom_templates = data.params.fancy.rows;
					for (var i in custom_templates) {
						set_array.push({
							name: custom_templates[i].name,
							orderL: i + 1,
							unit: custom_templates[i].unit,
							exercise_id: exercise_id
						});
					};
					break;
			}
			console.log(set_array);
			var amount_saved = 0;
			for (var i in set_array) {
				$http.post("/api/setTemplates", set_array[i])
					.success(function() {
						amount_saved++;
						if (amount_saved == set_array.length) {
							$scope.finish_saving(exercise_id);
						}
					})
			}
		}

		$scope.finish_saving = function(exercise_id) {
			document.location.hash = '/exercise/' + exercise_id;
		}

		$scope.status = {};

		$scope.add_fancy_row = function() {
			$scope.exercise_data.template.params.fancy.rows.push({
				name: "",
				unit: ""
			})
		}

		$scope.remove_fancy_row = function(index) {
			$scope.exercise_data.template.params.fancy.rows.splice(index, 1);
		}

		$scope.validateTemplate = function() {
			var data = $scope.exercise_data;
			var template = data.template;
			switch (template.type) {
				case "traditional":
					if (parseInt(template.params.traditional.set_amount) > 0) {
						return {
							status: "ok"
						}
					} else {
						return {
							status: "error"
						}
					}
					break;
				case "outside":
					var correct = true;
					for (var i in template.params.outside) {
						if (typeof template.params.outside[i] != "boolean") {
							correct = false;
						}
					}
					if (correct) {
						return {
							status: "ok"
						}
					} else {
						return {
							status: "error"
						}
					}
					break;
				case "fancy":
					var rows = template.params.fancy.rows;
					var correct = true;
					for (var i in rows) {
						if (rows[i].name.length == 0 || rows[i].unit.length == 0) {
							correct = false;
						}
					}
					if (correct) {
						return {
							status: "ok"
						}
					} else {
						return {
							status: "error"
						}
					}
					break;
			}
		}

		$scope.validateName = function(name) {
			var status = 'ok';
			var message = "ok!";
			if (name == "") {
				return {};
			}
			if (name.length < 4 && name.length > 0) {
				status = 'error';
				message = 'too short!'
			}
			for (var i in $scope.exercises) {
				if ($scope.exercises[i].name.toLowerCase() == name.toLowerCase()) {
					status = 'error'
					message = 'already exists!';
				}
			}
			return {
				status: status,
				message: message
			}
		}

		$scope.getStatus = function() {
			var name_ok = $scope.validateName($scope.exercise_data.name)
				.status != 'error' && $scope.exercise_data.name.length > 4;
			var type_ok = $scope.exercise_data.muscle_part_id != "" || ($scope.exercise_data.use_custom_muscle && $scope.exercise_data.muscle_part_name_custom != "");
			var template_ok = $scope.validateTemplate()
				.status != 'error';
			return {
				name_ok: name_ok,
				type_ok: type_ok,
				template_ok: template_ok
			}
		}

		$scope.statusOK = function() {
			var status = $scope.getStatus();
			for (var i in status) {
				if (status[i] == false) {
					return false;
				}
			}
			return true;
		}

		$http.get('/api/exercises')
			.success(function(data) {
				$scope.exercises = data;
				for (var i in data) {
					var muscle_part = {
						id: data[i].muscle_part_id,
						name: data[i].type_name
					}
					var found = false;
					for (var j in $scope.muscle_parts) {
						if ($scope.muscle_parts[j].id == muscle_part.id) {
							found = true;
						}
					}
					if (!found) {
						$scope.muscle_parts.push(muscle_part);
					}
				}
				$scope.exercise_list_loaded = true;
			});


	}
]);

app.controller('exercise', ['$scope', '$http', '$routeParams',
	function($scope, $http, $routeParams) {
		$scope.data_loaded = false;

		$scope.log_loaded = false;

		$scope.round = Math.round;

		$http.get('/api/exercises/' + $routeParams.id)
			.success(function(data) {
				$scope.data_loaded = true;
				$scope.exercise = data;
				$scope.exercise.show_in_recom = parseInt($scope.exercise.paused) == 0;
			})

		$http.get('/api/exercises/' + $routeParams.id + "/log?count=10")
			.success(function(data) {
				$scope.log_loaded = true;
				$scope.log = data;
			})

		$scope.adjust_paused = function() {
			$scope.exercise.paused = $scope.exercise.show_in_recom ? 0 : 1;
			$http.post("/api/exercises/" + $routeParams.id, $scope.exercise);
		}

		$scope.negatePaused = function() {
			$scope.exercise.show_in_recom = !$scope.exercise.show_in_recom;
			$scope.adjust_paused();
		}
	}
])

app.controller('exercise_go', ["$scope", "$http", "$routeParams", "music_player", "$rootScope", 'metronome', 'user', 'notifSound',
	function($scope, $http, $routeParams, music_player, $rootScope, metronome, user, notif) {
		$scope.exercise_loaded = false;

		var d = new Date();
		$scope.start_time = d.getTime();

		$scope.exercise;

		$scope.template;

		$scope.metronome_active = false;

		$scope.music_paused = false;

		$scope.current_set_no = 0;

		$scope.current_set_template = {};

		$scope.last_result = {};

		$scope.timer = user.timer

		$scope.results = [];

		$scope.mode = 'set'; //set|timer

		$scope.time_waited = 0;

		$scope.time_waited_checkpoint;

		$scope.startTimer = function(amount) {
			$scope.mode = 'timer';
			$scope.timer = amount;
			var d = new Date();
			var start = d.getTime();
			$scope.time_waited_checkpoint = start;
			$scope.timerTick(start, amount);
		}

		$scope.timerTick = function(start, amount) {
			var d = new Date();
			var cur = d.getTime();
			var dif = Math.floor((cur - start) / 1000);
			$scope.time_waited += cur - $scope.time_waited_checkpoint;
			$scope.time_waited_checkpoint = cur;
			$scope.timer = amount - dif;
			if (dif < amount && $scope.mode == 'timer') {
				setTimeout(function() {
					$scope.timerTick(start, amount);
					$scope.$apply();
				}, 1000);
			}
			if (dif >= amount) {
				notif.play();
				$scope.nextSet();
			}
		}

		$scope.next = function() {
			$scope.music_fadeOut(100);
			metronome.pause();
			if ($scope.current_set_no == $scope.exercise.setTemplates.length) {
				$scope.finish();
			} else {
				$scope.startTimer(user.timer);
			}
		}

		$scope.metronome = {
			play: function() {
				metronome.play();
			},
			pause: function() {
				metronome.pause();
			}
		}

		$scope.$watch('metronome_active', function(newVal) {
			if (newVal) {
				$scope.metronome.play();
				$scope.setMusicVolume(5);
			} else {
				$scope.metronome.pause();
				$scope.setMusicVolume(100);
			}
		})

		$scope.setMusicVolume = function(volume) {
			music_player.setVolume(volume);
		}

		$scope.$watch('music_paused', function(newVal) {
			if (newVal) {
				$scope.music_pause();
			} else {
				$scope.music_play();
			}
		})

		function handleChange() {
			if (document.location.hash.indexOf('/go') == -1) {
				$scope.music_fadeOut(500);
				metronome.pause();
				console.log('fadingOut');
			}
		};

		window.onhashchange = handleChange;
		window.onclick = handleChange;

		$scope.music_fadeOut = function(dur) {
			music_player.fadeOut(dur);
			setTimeout(function() {
				$scope.music_pause();
			}, dur);
		}

		$scope.nextSet = function() {
			if ($scope.current_set_no < $scope.exercise.setTemplates.length) {
				$scope.mode = 'set';
				$scope.music_play();
				$scope.current_set_template = $scope.template[$scope.current_set_no];
				$scope.current_set_no += 1;
			} else {
				$scope.finish();
			}
		}

		$scope.finish = function() {
			$scope.mode = 'finish';
			var d = new Date();
			$scope.end_time = d.getTime();
		}

		$scope.music_pause = function() {
			music_player.pause();
			$scope.music_paused = true;
		}

		$scope.music_play = function() {
			music_player.play();
			$scope.music_paused = false;
		}

		$scope.music_reset = function() {
			music_player.reset();
		}

		$scope.saving = false;
		$scope.saved = false;

		$scope.save = function() {
			console.log('saving');
			var params = {
				exercise_id: $scope.exercise.id,
				result: $scope.results,
				type: 'regular',
				begin_time: Math.round($scope.start_time / 1000),
				duration_s: Math.floor(($scope.end_time - $scope.start_time - $scope.time_waited) / 1000)
			}
			$scope.saving = true;
			$http.post('/api/log/', params)
				.success(function(data) {
					$scope.saving = false;
					$scope.saved = true;
				});
		}

		$http.get('/api/exercises/' + $routeParams.id)
			.success(function(data) {
				$scope.exercise = data;
				$scope.template = data.setTemplates;
				var c = 0;
				for (var i in $scope.template) {
					c++;
				}
				$scope.current_set_template = data.setTemplates[0];
				$scope.template.length = c;
				$http.get('/api/exercises/' + $routeParams.id + '/log?count=1')
					.success(function(data) {
						$scope.last_result = data[0];
						$scope.exercise_loaded = true;
						$scope.music_reset();
						$scope.nextSet();
						for (var i = 0; i < c; i++) {
							//$scope.results[i] = Math.ceil($scope.last_result.results[i].result*$scope.exercise.multiplier);
							$scope.results[i] = $scope.exercise.recommendations[i];
						}
					})
			})
	}
]);


app.controller('history', ['$scope', '$http',
	function($scope, $http) {
		$scope.history = [];

		$scope.history_loaded = false;

		$http.get('/api/points?count=100')
			.success(function(data) {
				$scope.history = data;
				$scope.history_loaded = true;
			})
	}
])

app.controller('exercise_log', ['$scope', '$http', '$routeParams',
	function($scope, $http, $routeParams) {
		$scope.loaded = false;
		$scope.exercises = [];
		$scope.results = [];

		$scope.type = 'regular';

		$scope.types = [{
			id: 'regular',
			name: 'preset routine'
		}, {
			id: 'custom',
			name: 'custom'
		}];

		$scope.saved = false;

		$http.get('/api/exercises')
			.success(function(data) {
				$scope.exercises = data;
				var chosen_id = $routeParams.id;
				for (var i in data) {
					if (data[i].id == chosen_id) {
						$scope.exercise = data[i];
					}
				}
				$http.get('/api/muscleParts')
					.success(function(data) {
						$scope.loaded = true;
						$scope.muscle_parts = data;
					})
			});

		$scope.save = function() {
			var date = Math.round(Date.parse($scope.begin_time) / 1000);
			var exercise_id = $scope.exercise.id;
			var results = $scope.results;
			var duration = $scope.duration_s;
			var params = {
				type: $scope.type,
				begin_time: date,
				exercise_id: exercise_id,
				result: results,
				duration_s: duration,
				muscle_part_id: $scope.muscle_part_id,
				name: $scope.custom_name
			}
			if ($scope.type == 'regular') {
				params.result = results;
			} else {
				params.result = $scope.custom_result;
			}
			$http.post('/api/log', params)
				.success(function(data) {
					$scope.saved = true;
					//alert('hash');
					document.location.hash = "/logs/" + JSON.parse(data);
				})
		}
	}
]);

app.controller('log', ['$scope', '$http', '$routeParams',
	function($scope, $http, $routeParams) {
		$scope.log = {};



		$scope.exercise = {};

		$scope.loaded = false;

		$http.get('/api/log/' + $routeParams.logId)
			.success(function(data) {
				$scope.log = data;
				if (data.type == 'regular') {
					$http.get('/api/exercises/' + data.exercise_id)
						.success(function(data) {
							$scope.exercise = data;
							$scope.loaded = true;
						})
				} else {
					$scope.loaded = true;
				}
			})
	}
])
app.directive('sparkline', function() {
	return {
		restrict: 'E',
		replace: true,
		scope: {
			data: "=data",
			tiny: "=tiny",
			width: "@",
			height: "@",
			zero: "@",
			stroke: "@"
		},
		template: "",
		controller: function($scope, $element, $attrs, $transclude) {
			// create an SVG element inside the #graph div that fills 100% of the div

			// create a simple data array that we'll plot with a line (this array represents only the Y values, X will just be the index location)
			//var data = [1,2,3,4,5,4,5,6,5,6,7,8,7,8,9,10, 7, 6, 7.5, 8, 8.5];
			var data = $scope.data;

			console.log(data);

			$scope.$watch('data', function(newVal) {
				$scope.generate(newVal);
			})

			$scope.generate = function(data) {
				console.log('generate begin');
				console.log(data);
				var max = -Infinity;
				var min = Infinity;

				for (var i in data) {
					data[i] = parseFloat(data[i]);
					if (data[i] > max) {
						max = data[i];
					}
					if (data[i] < min) {
						min = data[i];
						console.log('new min: ', min);
					}
				}

				if ($attrs.width == undefined) {
					var width = 460;
				} else {
					var width = $attrs.width;
				}

				if ($attrs.height == undefined) {
					var height = 180;
				} else {
					var height = $attrs.height;
				}

				var position = 'absolute';

				if ($scope.tiny == true) {
					width = 100;
					height = 20;
					position = 'relative'
				}

				var graph = d3.select($element[0])
					.append("svg:svg")
					.attr("width", "100%")
					.attr("height", "100%")
					.attr('viewBox', '0 0 ' + width + ' ' + height)
					.attr('preserveAspectRatio', 'none')
					.attr('style', 'width: 100%;height: 100%;display: block;position:' + position + ';top: 0px;left: 0px;');

				console.log(min, max);

				if ($attrs.zero == "true") {
					var lower_end = 0;
				} else {
					var lower_end = min;
				}

				// X scale will fit values from 0-10 within pixels 0-100
				var x = d3.scale.linear()
					.domain([0, data.length - 1])
					.range([0, width]);
				// Y scale will fit values from 0-10 within pixels 0-100
				var y = d3.scale.linear()
					.domain([lower_end, max])
					.range([height, 0]);

				// create a line object that represents the SVN line we're creating
				var line = d3.svg.line()
				// assign the X function to plot our line as we wish
				.x(function(d, i) {
					// verbose logging to show what's actually being done
					// return the X coordinate where we want to plot this datapoint
					return x(i);
				})
					.y(function(d) {
						// verbose logging to show what's actually being done
						// return the Y coordinate where we want to plot this datapoint
						return y(d);
					})

				// display the line by appending an svg:path element with the data line we created above
				graph.append("svg:path")
					.attr("d", line(data));
			}
		}
	};
})




app.directive('pointschart', function() {
	return {
		restrict: 'E',
		replace: true,
		scope: {
			data: "=data"
		},
		template: "",
		controller: function($scope, $element, $attrs, $transclude) {

			$scope.$watch('data', function(newVal) {
				console.log(newVal);
				$scope.generate(newVal);
			})

			$scope.generate = function(data) {
				var margin = {
					top: 10,
					right: 0,
					bottom: 1,
					left: 0
				},
					width = 700 - margin.left - margin.right,
					height = 284 - margin.top - margin.bottom;

				var parseDate = d3.time.format("%Y-%m-%d")
					.parse;

				var x = d3.time.scale()
					.range([0, width]);

				var y = d3.scale.linear()
					.range([height, 0]);

				var color = d3.scale.category10();

				var xAxis = d3.svg.axis()
					.scale(x)
					.orient("bottom");

				var yAxis = d3.svg.axis()
					.scale(y)
					.orient("left");

				var line = d3.svg.line()
				//.interpolate("basis")
				.x(function(d) {
					return x(d.date);
				})
					.y(function(d) {
						return y(d.temperature);
					});

				var svg = d3.select($element[0])
					.html('')
					.append("svg")
					.attr("width", '100%')
					.attr("height", height + margin.top + margin.bottom)
					.attr('viewBox', '0 0 ' + width + ' ' + height)
					.append("g")
					.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

				color.domain(d3.keys(data[0])
					.filter(function(key) {
						return key !== "date";
					}));

				var users = [];

				for (var i in data[0]) {
					if (i != 'date') {
						users.push(i);
					}
				}


				data.forEach(function(d) {
					d.date = parseDate(d.date);
				});

				var cities = color.domain()
					.map(function(name) {
						return {
							name: name,
							values: data.map(function(d) {
								return {
									date: d.date,
									temperature: +d[name]
								};
							})
						};
					});



				x.domain(d3.extent(data, function(d) {
					return d.date;
				}));

				y.domain([
					d3.min(cities, function(c) {
						return d3.min(c.values, function(v) {
							return v.temperature;
						});
					}),
					d3.max(cities, function(c) {
						return d3.max(c.values, function(v) {
							return v.temperature;
						});
					})
				]);

				svg.append("g")
					.attr("class", "x axis")
					.attr("transform", "translate(0," + height + ")")
					.call(xAxis);

				svg.append("g")
					.attr("class", "y axis secondary")
					.attr('transform', 'translate(44, 0)')
					.call(yAxis);

				var city = svg.selectAll(".city")
					.data(cities)
					.enter()
					.append("g")
					.attr("class", "user");


				city.append("path")
					.attr("class", "line")
					.attr("d", function(d) {
						return line(d.values);
					})
				//		  .style("stroke", function(d) { return color(d.name); });

				var legend_width = 80;
				var legend_element_height = 10;
				var legend_vertical_spacing = 8;
				var legend_horizontal_spacing = 5;
				//var legend_height = users.length*(legend_element_height + legend_vertical_spacing);

				var legend = svg.append('g')
					.attr('class', 'legend secondary');

				var legend_rect = legend.append('rect')
					.attr('width', legend_width)
					.attr('height', users.length * 15)
					.attr('style', 'fill:rgba(255,255,255,0.7)');
				for (var i in users) {
					legend.append('rect')
						.attr('width', 10)
						.attr('height', 10)
						.attr('transform', 'translate(' + legend_horizontal_spacing + ', ' + i * 15 + ")")
						.attr('style', 'fill:' + color(users[i]));
					legend.append('text')
						.text(users[i])
						.attr('transform', 'translate(18, ' + (i * 15 + 10) + ")");
				}

				var full_legend_width = legend[0][0].getBoundingClientRect()
					.width;
				var full_legend_height = legend[0][0].getBoundingClientRect()
					.height;


				legend_rect.attr('width', full_legend_width);

				legend.attr('transform', 'translate(' + (width - full_legend_width - 40) + ", " + (height - full_legend_height) + ")");
			}
		}
	};
})


app.directive('recommendationcard', function() {
	return {
		restrict: 'E',
		replace: true,
		scope: {
			recom: "=",
		},
		template: "<div class='card' style='position:relative; text-align:center'>" +
			"<span style='align-self:flex-start; z-index:2'><span ng-show='recom.type!=\"most_neglected\"'>Recommended</span><span ng-show='recom.type==\"most_neglected\"'>Most neglected</span> exercise:</span>" +
			"<span style='font-size:2.8rem; z-index:2'>" +
			"<a href='#/exercise/{{recom.exercise.id}}'>{{recom.exercise.name}}</a>" +
			"</span>" +
			"<span style='margin-top: -4px;padding-bottom: 8px; z-index:2'>" +
			"last exercised: {{recom.exercise.days_since_last_exercise}} days ago" +
			"</span>" +
			"<a class='button' style='z-index:2' href='#/exercise/{{recom.exercise.id}}/go'>exercise!</a>" +
			"<span style='margin-bottom: -8px; z-index:2;color:gray;font-weight:100'>" +
			"{{recom.exercise.estimated_duration/60 | number: 0}}min" +
			"</span>" +
			"<a class='secondary' href='#/exercises/{{recom.exercise.muscle_part_name}}' style='align-self:flex-end; z-index:2; transition-delay:100ms'>other exercises for {{recom.exercise.muscle_part_name}}</a>" +
			"<sparkline class='secondary' data='recom.exercise.results' style='width:100%; height:100%; position:absolute; top:0px; left:0px;'></sparkline>" +
			"</div>",
		controller: function($scope, $element, $attrs, $transclude) {
			console.log($scope.recom)
		}
	};
})

.directive('goto', ['$location',
	function($location) {
		return {
			link: function(scope, element, attrs) {
				element.on('click', function() {
					scope.$apply(function() {
						//alert(attrs.goto);
						$location.path(attrs.goto);
					});
				});
			}
		}
	}
]);