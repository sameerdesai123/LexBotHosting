(function (e) {
  function t (t) {
    for (var o, r, a = t[0], u = t[1], c = t[2], p = 0, f = []; p < a.length; p++) r = a[p], Object.prototype.hasOwnProperty.call(s, r) && s[r] && f.push(s[r][0]), s[r] = 0
    for (o in u) Object.prototype.hasOwnProperty.call(u, o) && (e[o] = u[o])
    l && l(t)
    while (f.length) f.shift()()
    return i.push.apply(i, c || []), n()
  }

  function n () {
    for (var e, t = 0; t < i.length; t++) {
      for (var n = i[t], o = !0, a = 1; a < n.length; a++) {
        var u = n[a]
        s[u] !== 0 && (o = !1)
      }
      o && (i.splice(t--, 1), e = r(r.s = n[0]))
    }
    return e
  }
  var o = {}
  var s = {
    app: 0
  }
  var i = []

  function r (t) {
    if (o[t]) return o[t].exports
    var n = o[t] = {
      i: t,
      l: !1,
      exports: {}
    }
    return e[t].call(n.exports, n, n.exports, r), n.l = !0, n.exports
  }
  r.m = e, r.c = o, r.d = function (e, t, n) {
    r.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: n
    })
  }, r.r = function (e) {
    typeof Symbol !== 'undefined' && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: 'Module'
    }), Object.defineProperty(e, '__esModule', {
      value: !0
    })
  }, r.t = function (e, t) {
    if (1 & t && (e = r(e)), 8 & t) return e
    if (4 & t && typeof e === 'object' && e && e.__esModule) return e
    var n = Object.create(null)
    if (r.r(n), Object.defineProperty(n, 'default', {
      enumerable: !0,
      value: e
    }), 2 & t && typeof e !== 'string') {
      for (var o in e) {
        r.d(n, o, function (t) {
          return e[t]
        }.bind(null, o))
      }
    }
    return n
  }, r.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default
    } : function () {
      return e
    }
    return r.d(t, 'a', t), t
  }, r.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }, r.p = '/'
  var a = window.webpackJsonp = window.webpackJsonp || []
  var u = a.push.bind(a)
  a.push = t, a = a.slice()
  for (var c = 0; c < a.length; c++) t(a[c])
  var l = u
  i.push([1, 'chunk-vendors']), n()
})({
  0: function (e, t) {},
  '034f': function (e, t, n) {
    'use strict'
    var o = n('85ec')
    var s = n.n(o)
    s.a
  },
  1: function (e, t, n) {
    e.exports = n('56d7')
  },
  '56d7': function (e, t, n) {
    'use strict'
    n.r(t)
    n('e260'), n('e6cf'), n('cca6'), n('a79d')
    var o = n('2b0e')
    var s = function () {
      var e = this
      var t = e.$createElement
      var n = e._self._c || t
      return n('div', {
        attrs: {
          id: 'app'
        }
      }, [n('div', {
        attrs: {
          id: 'nav',
          hidden: ''
        }
      }, [n('router-link', {
        attrs: {
          to: '/'
        }
      }, [e._v('Home')])], 1), n('router-view'), n('ChatBot'), n('PizzaBotDescriptor')], 1)
    }
    var i = []
    var r = function () {
      var e = this
      var t = e.$createElement
      var n = e._self._c || t
      return n('VueBotUI', {
        attrs: {
          options: e.botOptions,
          messages: e.messageData,
          'bot-typing': e.botTyping,
          'input-disable': e.inputDisable,
          'is-open': !1
        },
        on: {
          init: e.botStart,
          'msg-send': e.msgSend,
          destroy: e.deleteSession
        }
      })
    }
    var a = []
    var u = (n('4160'), n('159b'), n('cf05'))
    var c = n.n(u)
    var l = n('765f')
    var p = {
      name: 'ChatBot',
      data: function () {
        return {
          sendMsg: '',
          messageData: [],
          messageService: null,
          botTyping: !1,
          lexUserId: '',
          sessionAttributes: {},
          inputDisable: !1,
          botOptions: {
            botTitle: 'Order a Pizza',
            colorScheme: '#FFA500',
            botAvatarImg: c.a,
            boardContentBg: '#f4f4f4',
            msgBubbleBgBot: '#fff',
            inputPlaceholder: 'Type hereeee...',
            inputDisableBg: '#fff',
            inputDisablePlaceholder: 'Hit the buttons above to respond'
          }
        }
      },
      components: {
        VueBotUI: l.VueBotUI
      },
      methods: {
        botStart: function () {
          this.botTyping = !0, this.configService(), this.botTyping = !1, this.messageData.push({
            agent: 'bot',
            type: 'text',
            text: 'Hello'
          })
        },
        deleteSession: function () {
          if (this.messageData.length !== 1) {
            var e = {
              botAlias: 'PizzaLexBot',
              botName: 'pizzabot',
              userId: this.lexUserId
            }
            this.messageService.deleteSession(e, function (e, t) {
              e ? console.log(e, e.stack) : console.log('Deleted Session : ', t)
            }), this.messageData = [], this.lexUserId = ''
          }
        },
        configService: function () {
          var e = n('4a9d')
          e.config.region = 'ap-southeast-1', e.config.credentials = new e.CognitoIdentityCredentials({
            IdentityPoolId: 'ap-southeast-1:c5e13166-f899-495b-b9f9-b2a030c87065'
          })
          var t = new e.LexRuntime()
          this.lexUserId = 'chatbot-demo' + Date.now(), this.sessionAttributes = {}, this.messageService = t
        },
        msgSend: function (e) {
          this.messageData.push({
            agent: 'user',
            type: 'text',
            text: e.text
          }), this.sendMsg = e.text, this.getResponse(), this.sendMsg = ''
        },
        getDisplayOptions: function (e) {
          var t = []
          return e.forEach(function (e) {
            e.action = 'postback', t.push(e)
          }), t
        },
        getResponse: function () {
          var e = this
          this.botTyping = !0
          var t = {}
          var n = {
            botAlias: 'PizzaLexBot',
            botName: 'pizzabot',
            inputText: this.sendMsg,
            userId: this.lexUserId,
            sessionAttributes: this.sessionAttributes
          }
          this.messageService.postText(n, function (n, o) {
            n && (console.log(n, n.stack), console.log('Error:' + n.message + ' (see console for details)')), o && (e.sessionAttributes = o.sessionAttributes, console.log('Response : ', o), typeof o.responseCard === 'undefined' ? t = {
              agent: 'bot',
              type: 'text',
              disableInput: !1,
              text: o.message
            } : (console.log('Response Card :', o.responseCard.genericAttachments[0]), t = {
              agent: 'bot',
              type: 'button',
              text: o.message,
              disableInput: !0,
              options: e.getDisplayOptions(o.responseCard.genericAttachments[0].buttons)
            }), console.log('Got Reply Now'), console.log('Pushing Message Now'), e.messageData.push(t), e.inputDisable = t.disableInput, e.botTyping = !1)
          })
        }
      }
    }
    var f = p
    var d = n('2877')
    var g = Object(d.a)(f, r, a, !1, null, 'c093c610', null)
    var b = g.exports
    var h = function () {
      var e = this
      var t = e.$createElement
      var n = e._self._c || t
      return n('div', [e._v(' This is the pizza Bot dscription ')])
    }
    var m = []
    var v = {
      name: 'PizzaBotDescriptor'
    }
    var y = v
    var x = Object(d.a)(y, h, m, !1, null, '78d164ac', null)
    var O = x.exports
    var S = {
      components: {
        ChatBot: b,
        PizzaBotDescriptor: O
      }
    }
    var D = S
    var _ = (n('034f'), Object(d.a)(D, s, i, !1, null, null, null))
    var w = _.exports
    var z = n('8c4f')
    var B = function () {
      var e = this
      var t = e.$createElement
      e._self._c
      return e._m(0)
    }
    var I = [function () {
      var e = this
      var t = e.$createElement
      var o = e._self._c || t
      return o('div', {
        staticClass: 'home'
      }, [o('img', {
        attrs: {
          alt: 'Vue logo',
          src: n('cf05')
        }
      })])
    }]
    var P = {
      name: 'Home',
      components: {}
    }
    var T = P
    var j = Object(d.a)(T, B, I, !1, null, null, null)
    var A = j.exports
    o.default.use(z.a)
    var C = [{
      path: '/',
      name: 'Home',
      component: A
    }]
    var M = new z.a({
      mode: 'history',
      base: '/',
      routes: C
    })
    var U = M
    o.default.config.productionTip = !1, new o.default({
      router: U,
      render: function (e) {
        return e(w)
      }
    }).$mount('#app')
  },
  '85ec': function (e, t, n) {},
  cf05: function (e, t, n) {
    e.exports = n.p + 'LexBotHosting/img/logo.82b9c7a5.png'
  }
})
// # sourceMappingURL=app.385f59c3.js.map
