import { g as P, u as g, p as b } from "./index-CjKZ8diM.js";
import v from "react";
function O(t, e) {
  for (var r = 0; r < e.length; r++) {
    const s = e[r];
    if (typeof s != "string" && !Array.isArray(s)) {
      for (const o in s)
        if (o !== "default" && !(o in t)) {
          const a = Object.getOwnPropertyDescriptor(s, o);
          a && Object.defineProperty(t, o, a.get ? a : {
            enumerable: !0,
            get: () => s[o]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }));
}
var S = Object.create, l = Object.defineProperty, w = Object.getOwnPropertyDescriptor, j = Object.getOwnPropertyNames, C = Object.getPrototypeOf, D = Object.prototype.hasOwnProperty, E = (t, e, r) => e in t ? l(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, L = (t, e) => {
  for (var r in e)
    l(t, r, { get: e[r], enumerable: !0 });
}, c = (t, e, r, s) => {
  if (e && typeof e == "object" || typeof e == "function")
    for (let o of j(e))
      !D.call(t, o) && o !== r && l(t, o, { get: () => e[o], enumerable: !(s = w(e, o)) || s.enumerable });
  return t;
}, M = (t, e, r) => (r = t != null ? S(C(t)) : {}, c(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  !t || !t.__esModule ? l(r, "default", { value: t, enumerable: !0 }) : r,
  t
)), R = (t) => c(l({}, "__esModule", { value: !0 }), t), i = (t, e, r) => (E(t, typeof e != "symbol" ? e + "" : e, r), r), h = {};
L(h, {
  default: () => u
});
var f = R(h), p = M(v), d = g, T = b;
const N = "https://w.soundcloud.com/player/api.js", A = "SC";
class u extends p.Component {
  constructor() {
    super(...arguments), i(this, "callPlayer", d.callPlayer), i(this, "duration", null), i(this, "currentTime", null), i(this, "fractionLoaded", null), i(this, "mute", () => {
      this.setVolume(0);
    }), i(this, "unmute", () => {
      this.props.volume !== null && this.setVolume(this.props.volume);
    }), i(this, "ref", (e) => {
      this.iframe = e;
    });
  }
  componentDidMount() {
    this.props.onMount && this.props.onMount(this);
  }
  load(e, r) {
    (0, d.getSDK)(N, A).then((s) => {
      if (!this.iframe)
        return;
      const { PLAY: o, PLAY_PROGRESS: a, PAUSE: _, FINISH: y, ERROR: m } = s.Widget.Events;
      r || (this.player = s.Widget(this.iframe), this.player.bind(o, this.props.onPlay), this.player.bind(_, () => {
        this.duration - this.currentTime < 0.05 || this.props.onPause();
      }), this.player.bind(a, (n) => {
        this.currentTime = n.currentPosition / 1e3, this.fractionLoaded = n.loadedProgress;
      }), this.player.bind(y, () => this.props.onEnded()), this.player.bind(m, (n) => this.props.onError(n))), this.player.load(e, {
        ...this.props.config.options,
        callback: () => {
          this.player.getDuration((n) => {
            this.duration = n / 1e3, this.props.onReady();
          });
        }
      });
    });
  }
  play() {
    this.callPlayer("play");
  }
  pause() {
    this.callPlayer("pause");
  }
  stop() {
  }
  seekTo(e, r = !0) {
    this.callPlayer("seekTo", e * 1e3), r || this.pause();
  }
  setVolume(e) {
    this.callPlayer("setVolume", e * 100);
  }
  getDuration() {
    return this.duration;
  }
  getCurrentTime() {
    return this.currentTime;
  }
  getSecondsLoaded() {
    return this.fractionLoaded * this.duration;
  }
  render() {
    const { display: e } = this.props, r = {
      width: "100%",
      height: "100%",
      display: e
    };
    return /* @__PURE__ */ p.default.createElement(
      "iframe",
      {
        ref: this.ref,
        src: `https://w.soundcloud.com/player/?url=${encodeURIComponent(this.props.url)}`,
        style: r,
        frameBorder: 0,
        allow: "autoplay"
      }
    );
  }
}
i(u, "displayName", "SoundCloud");
i(u, "canPlay", T.canPlay.soundcloud);
i(u, "loopOnEnded", !0);
const x = /* @__PURE__ */ P(f), F = /* @__PURE__ */ O({
  __proto__: null,
  default: x
}, [f]);
export {
  F as S
};
