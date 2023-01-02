(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{683:function(e,t,o){"use strict";o.r(t);var a=o(1),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"adr-1-logging"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#adr-1-logging"}},[e._v("#")]),e._v(" ADR 1: Logging")]),e._v(" "),o("h2",{attrs:{id:"context"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),o("p",[e._v("Current logging system in Tendermint is very static and not flexible enough.")]),e._v(" "),o("p",[e._v("Issues: "),o("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/358",target:"_blank",rel:"noopener noreferrer"}},[e._v("358"),o("OutboundLink")],1),e._v(", "),o("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/375",target:"_blank",rel:"noopener noreferrer"}},[e._v("375"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("What we want from the new system:")]),e._v(" "),o("ul",[o("li",[e._v("per package dynamic log levels")]),e._v(" "),o("li",[e._v("dynamic logger setting (logger tied to the processing struct)")]),e._v(" "),o("li",[e._v("conventions")]),e._v(" "),o("li",[e._v("be more visually appealing")])]),e._v(" "),o("p",[e._v('"dynamic" here means the ability to set smth in runtime.')]),e._v(" "),o("h2",{attrs:{id:"decision"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#decision"}},[e._v("#")]),e._v(" Decision")]),e._v(" "),o("h3",{attrs:{id:"_1-an-interface"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1-an-interface"}},[e._v("#")]),e._v(" 1) An interface")]),e._v(" "),o("p",[e._v("First, we will need an interface for all of our libraries ("),o("code",[e._v("tmlibs")]),e._v(", Tendermint, etc.). My personal preference is go-kit "),o("code",[e._v("Logger")]),e._v(" interface (see Appendix A.), but that is too much a bigger change. Plus we will still need levels.")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"IyBsb2cuZ28KdHlwZSBMb2dnZXIgaW50ZXJmYWNlIHsKICAgIERlYnVnKG1zZyBzdHJpbmcsIGtleXZhbHMgLi4uaW50ZXJmYWNle30pIGVycm9yCiAgICBJbmZvKG1zZyBzdHJpbmcsIGtleXZhbHMgLi4uaW50ZXJmYWNle30pIGVycm9yCiAgICBFcnJvcihtc2cgc3RyaW5nLCBrZXl2YWxzIC4uLmludGVyZmFjZXt9KSBlcnJvcgoKCSAgV2l0aChrZXl2YWxzIC4uLmludGVyZmFjZXt9KSBMb2dnZXIKfQo="}}),e._v(" "),o("p",[e._v("On a side note: difference between "),o("code",[e._v("Info")]),e._v(" and "),o("code",[e._v("Notice")]),e._v(" is subtle. We probably\ncould do without "),o("code",[e._v("Notice")]),e._v(". Don't think we need "),o("code",[e._v("Panic")]),e._v(" or "),o("code",[e._v("Fatal")]),e._v(" as a part of\nthe interface. These funcs could be implemented as helpers. In fact, we already\nhave some in "),o("code",[e._v("tmlibs/common")]),e._v(".")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("Debug")]),e._v(" - extended output for devs")]),e._v(" "),o("li",[o("code",[e._v("Info")]),e._v(" - all that is useful for a user")]),e._v(" "),o("li",[o("code",[e._v("Error")]),e._v(" - errors")])]),e._v(" "),o("p",[o("code",[e._v("Notice")]),e._v(" should become "),o("code",[e._v("Info")]),e._v(", "),o("code",[e._v("Warn")]),e._v(" either "),o("code",[e._v("Error")]),e._v(" or "),o("code",[e._v("Debug")]),e._v(" depending on the message, "),o("code",[e._v("Crit")]),e._v(" -> "),o("code",[e._v("Error")]),e._v(".")]),e._v(" "),o("p",[e._v("This interface should go into "),o("code",[e._v("tmlibs/log")]),e._v(". All libraries which are part of the core (tendermint/tendermint) should obey it.")]),e._v(" "),o("h3",{attrs:{id:"_2-logger-with-our-current-formatting"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_2-logger-with-our-current-formatting"}},[e._v("#")]),e._v(" 2) Logger with our current formatting")]),e._v(" "),o("p",[e._v("On top of this interface, we will need to implement a stdout logger, which will be used when Tendermint is configured to output logs to STDOUT.")]),e._v(" "),o("p",[e._v("Many people say that they like the current output, so let's stick with it.")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"Tk9URVsyMDE3LTA0LTI1fDE0OjQ1OjA4XSBBQkNJIFJlcGxheSBCbG9ja3MgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZT1jb25zZW5zdXMgYXBwSGVpZ2h0PTAgc3RvcmVIZWlnaHQ9MCBzdGF0ZUhlaWdodD0wCg=="}}),e._v(" "),o("p",[e._v("Couple of minor changes:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"SVsyMDE3LTA0LTI1fDE0OjQ1OjA4LjMyMl0gQUJDSSBSZXBsYXkgQmxvY2tzICAgICAgICAgICAgbW9kdWxlPWNvbnNlbnN1cyBhcHBIZWlnaHQ9MCBzdG9yZUhlaWdodD0wIHN0YXRlSGVpZ2h0PTAK"}}),e._v(" "),o("p",[e._v("Notice the level is encoded using only one char plus milliseconds.")]),e._v(" "),o("p",[e._v("Note: there are many other formats out there like "),o("a",{attrs:{href:"https://brandur.org/logfmt",target:"_blank",rel:"noopener noreferrer"}},[e._v("logfmt"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("This logger could be implemented using any logger - "),o("a",{attrs:{href:"https://github.com/sirupsen/logrus",target:"_blank",rel:"noopener noreferrer"}},[e._v("logrus"),o("OutboundLink")],1),e._v(", "),o("a",{attrs:{href:"https://github.com/go-kit/kit/tree/master/log",target:"_blank",rel:"noopener noreferrer"}},[e._v("go-kit/log"),o("OutboundLink")],1),e._v(", "),o("a",{attrs:{href:"https://github.com/uber-go/zap",target:"_blank",rel:"noopener noreferrer"}},[e._v("zap"),o("OutboundLink")],1),e._v(", log15 so far as it")]),e._v(" "),o("p",[e._v("a) supports coloring output"),o("br"),e._v("\nb) is moderately fast (buffering) "),o("br"),e._v("\nc) conforms to the new interface or adapter could be written for it "),o("br"),e._v("\nd) is somewhat configurable"),o("br")]),e._v(" "),o("p",[e._v("go-kit is my favorite so far. Check out how easy it is to color errors in red https://github.com/go-kit/kit/blob/master/log/term/example_test.go#L12. Although, coloring could only be applied to the whole string 😦")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"Z28ta2l0ICs6IGZsZXhpYmxlLCBtb2R1bGFyCmdvLWtpdCDigJwt4oCdOiBsb2dmbXQgZm9ybWF0IGh0dHBzOi8vYnJhbmR1ci5vcmcvbG9nZm10Cgpsb2dydXMgKzogcG9wdWxhciwgZmVhdHVyZSByaWNoIChob29rcyksIEFQSSBhbmQgb3V0cHV0IGlzIG1vcmUgbGlrZSB3aGF0IHdlIHdhbnQKbG9ncnVzIC06IG5vdCBzbyBmbGV4aWJsZQo="}}),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"IyB0bV9sb2dnZXIuZ28KLy8gTmV3VG1Mb2dnZXIgcmV0dXJucyBhIGxvZ2dlciB0aGF0IGVuY29kZXMga2V5dmFscyB0byB0aGUgV3JpdGVyIGluCi8vIHRtIGZvcm1hdC4KZnVuYyBOZXdUbUxvZ2dlcih3IGlvLldyaXRlcikgTG9nZ2VyIHsKICByZXR1cm4gJmFtcDt0bUxvZ2dlcntraXRsb2cuTmV3TG9nZm10TG9nZ2VyKHcpfQp9CgpmdW5jIChsIHRtTG9nZ2VyKSBTZXRMZXZlbChsZXZlbCBzdHJpbmcoKSB7CiAgc3dpdGNoIChsZXZlbCkgewogICAgY2FzZSAmcXVvdDtkZWJ1ZyZxdW90OzoKICAgICAgbC5zb3VyY2VMb2dnZXIgPSBsZXZlbC5OZXdGaWx0ZXIobC5zb3VyY2VMb2dnZXIsIGxldmVsLkFsbG93RGVidWcoKSkKICB9Cn0KCmZ1bmMgKGwgdG1Mb2dnZXIpIEluZm8obXNnIHN0cmluZywga2V5dmFscyAuLi5pbnRlcmZhY2V7fSkgZXJyb3IgewogIGwuc291cmNlTG9nZ2VyLkxvZygmcXVvdDttc2cmcXVvdDssIG1zZywga2V5dmFscy4uLikKfQoKIyBsb2cuZ28KZnVuYyBXaXRoKGxvZ2dlciBMb2dnZXIsIGtleXZhbHMgLi4uaW50ZXJmYWNle30pIExvZ2dlciB7CiAga2l0bG9nLldpdGgobG9nZ2VyLnNvdXJjZUxvZ2dlciwga2V5dmFscy4uLikKfQo="}}),e._v(" "),o("p",[e._v("Usage:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"bG9nZ2VyIDo9IGxvZy5OZXdUbUxvZ2dlcihvcy5TdGRvdXQpCmxvZ2dlci5TZXRMZXZlbChjb25maWcuR2V0U3RyaW5nKCZxdW90O2xvZ19sZXZlbCZxdW90OykpCm5vZGUuU2V0TG9nZ2VyKGxvZy5XaXRoKGxvZ2dlciwgJnF1b3Q7bm9kZSZxdW90OywgTmFtZSkpCg=="}}),e._v(" "),o("p",[o("strong",[e._v("Other log formatters")])]),e._v(" "),o("p",[e._v("In the future, we may want other formatters like JSONFormatter.")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"eyAmcXVvdDtsZXZlbCZxdW90OzogJnF1b3Q7bm90aWNlJnF1b3Q7LCAmcXVvdDt0aW1lJnF1b3Q7OiAmcXVvdDsyMDE3LTA0LTI1IDE0OjQ1OjA4LjU2MjQ3MTI5NyAtMDQwMCBFRFQmcXVvdDssICZxdW90O21vZHVsZSZxdW90OzogJnF1b3Q7Y29uc2Vuc3VzJnF1b3Q7LCAmcXVvdDttc2cmcXVvdDs6ICZxdW90O0FCQ0kgUmVwbGF5IEJsb2NrcyZxdW90OywgJnF1b3Q7YXBwSGVpZ2h0JnF1b3Q7OiAwLCAmcXVvdDtzdG9yZUhlaWdodCZxdW90OzogMCwgJnF1b3Q7c3RhdGVIZWlnaHQmcXVvdDs6IDAgfQo="}}),e._v(" "),o("h3",{attrs:{id:"_3-dynamic-logger-setting"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_3-dynamic-logger-setting"}},[e._v("#")]),e._v(" 3) Dynamic logger setting")]),e._v(" "),o("p",[e._v("https://dave.cheney.net/2017/01/23/the-package-level-logger-anti-pattern")]),e._v(" "),o("p",[e._v("This is the hardest part and where the most work will be done. logger should be tied to the processing struct, or the context if it adds some fields to the logger.")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBCYXNlU2VydmljZSBzdHJ1Y3QgewogICAgbG9nICAgICBsb2cxNS5Mb2dnZXIKICAgIG5hbWUgICAgc3RyaW5nCiAgICBzdGFydGVkIHVpbnQzMiAvLyBhdG9taWMKICAgIHN0b3BwZWQgdWludDMyIC8vIGF0b21pYwouLi4KfQo="}}),e._v(" "),o("p",[e._v("BaseService already contains "),o("code",[e._v("log")]),e._v(" field, so most of the structs embedding it should be fine. We should rename it to "),o("code",[e._v("logger")]),e._v(".")]),e._v(" "),o("p",[e._v("The only thing missing is the ability to set logger:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"ZnVuYyAoYnMgKkJhc2VTZXJ2aWNlKSBTZXRMb2dnZXIobCBsb2cuTG9nZ2VyKSB7CiAgYnMubG9nZ2VyID0gbAp9Cg=="}}),e._v(" "),o("h3",{attrs:{id:"_4-conventions"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_4-conventions"}},[e._v("#")]),e._v(" 4) Conventions")]),e._v(" "),o("p",[e._v("Important keyvals should go first. Example:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"Y29ycmVjdApJWzIwMTctMDQtMjV8MTQ6NDU6MDguMzIyXSBBQkNJIFJlcGxheSBCbG9ja3MgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZT1jb25zZW5zdXMgaW5zdGFuY2U9MSBhcHBIZWlnaHQ9MCBzdG9yZUhlaWdodD0wIHN0YXRlSGVpZ2h0PTAK"}}),e._v(" "),o("p",[e._v("not")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"d3JvbmcKSVsyMDE3LTA0LTI1fDE0OjQ1OjA4LjMyMl0gQUJDSSBSZXBsYXkgQmxvY2tzICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGU9Y29uc2Vuc3VzIGFwcEhlaWdodD0wIHN0b3JlSGVpZ2h0PTAgc3RhdGVIZWlnaHQ9MCBpbnN0YW5jZT0xCg=="}}),e._v(" "),o("p",[e._v("for that in most cases you'll need to add "),o("code",[e._v("instance")]),e._v(" field to a logger upon creating, not when u log a particular message:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Y29sb3JGbiA6PSBmdW5jKGtleXZhbHMgLi4uaW50ZXJmYWNle30pIHRlcm0uRmdCZ0NvbG9yIHsKCQlmb3IgaSA6PSAxOyBpICZsdDsgbGVuKGtleXZhbHMpOyBpICs9IDIgewoJCQlpZiBrZXl2YWxzW2ldID09ICZxdW90O2luc3RhbmNlJnF1b3Q7ICZhbXA7JmFtcDsga2V5dmFsc1tpKzFdID09ICZxdW90OzEmcXVvdDsgewoJCQkJcmV0dXJuIHRlcm0uRmdCZ0NvbG9ye0ZnOiB0ZXJtLkJsdWV9CgkJCX0gZWxzZSBpZiBrZXl2YWxzW2ldID09ICZxdW90O2luc3RhbmNlJnF1b3Q7ICZhbXA7JmFtcDsga2V5dmFsc1tpKzFdID09ICZxdW90OzEmcXVvdDsgewoJCQkJcmV0dXJuIHRlcm0uRmdCZ0NvbG9ye0ZnOiB0ZXJtLlJlZH0KCQkJfQoJCX0KCQlyZXR1cm4gdGVybS5GZ0JnQ29sb3J7fQoJfQpsb2dnZXIgOj0gdGVybS5OZXdMb2dnZXIob3MuU3Rkb3V0LCBsb2cuTmV3VG1Mb2dnZXIsIGNvbG9yRm4pCgpjMSA6PSBOZXdDb25zZW5zdXNSZWFjdG9yKC4uLikKYzEuU2V0TG9nZ2VyKGxvZy5XaXRoKGxvZ2dlciwgJnF1b3Q7aW5zdGFuY2UmcXVvdDssIDEpKQoKYzIgOj0gTmV3Q29uc2Vuc3VzUmVhY3RvciguLi4pCmMyLlNldExvZ2dlcihsb2cuV2l0aChsb2dnZXIsICZxdW90O2luc3RhbmNlJnF1b3Q7LCAyKSkK"}}),e._v(" "),o("h2",{attrs:{id:"status"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),o("p",[e._v("Implemented")]),e._v(" "),o("h2",{attrs:{id:"consequences"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[e._v("#")]),e._v(" Consequences")]),e._v(" "),o("h3",{attrs:{id:"positive"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[e._v("#")]),e._v(" Positive")]),e._v(" "),o("p",[e._v("Dynamic logger, which could be turned off for some modules at runtime. Public interface for other projects using Tendermint libraries.")]),e._v(" "),o("h3",{attrs:{id:"negative"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[e._v("#")]),e._v(" Negative")]),e._v(" "),o("p",[e._v("We may loose the ability to color keys in keyvalue pairs. go-kit allow you to easily change foreground / background colors of the whole string, but not its parts.")]),e._v(" "),o("h3",{attrs:{id:"neutral"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#neutral"}},[e._v("#")]),e._v(" Neutral")]),e._v(" "),o("h2",{attrs:{id:"appendix-a"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#appendix-a"}},[e._v("#")]),e._v(" Appendix A.")]),e._v(" "),o("p",[e._v("I really like a minimalistic approach go-kit took with his logger https://github.com/go-kit/kit/tree/master/log:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"dHlwZSBMb2dnZXIgaW50ZXJmYWNlIHsKICAgIExvZyhrZXl2YWxzIC4uLmludGVyZmFjZXt9KSBlcnJvcgp9Cg=="}}),e._v(" "),o("p",[e._v("See "),o("a",{attrs:{href:"https://web.archive.org/web/20210902161539/https://go-talks.appspot.com/github.com/ChrisHines/talks/structured-logging/structured-logging.slide#1",target:"_blank",rel:"noopener noreferrer"}},[e._v("The Hunt for a Logger Interface"),o("OutboundLink")],1),e._v(". The advantage is greater composability (check out how go-kit defines colored logging or log-leveled logging on top of this interface https://github.com/go-kit/kit/tree/master/log).")])],1)}),[],!1,null,null,null);t.default=s.exports}}]);