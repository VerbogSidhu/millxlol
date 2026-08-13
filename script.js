/* millx.lol — rotating quote ticker */
(function () {
  "use strict";

  var QUOTES = [
    { text: "3959 Hunters Green Dr, Florence, KY 41042, USA", by: "Slash" },
    { text: "deaf means you cant see idioy", by: "RatWithAFace" },
    { text: "Froppy is bad.", by: "Mountable" },
    { text: "She slash on my back till I millx on her scent", by: "Ssammyk" },
    { text: "CTG123456 I WILL SEND PACKETS AND PIZZA", by: "CarterPCs" },
    { text: "Legit Playcoins: 94", by: "Millx" },
    { text: "My inner ayanokoji...", by: "Millx" },
    { text: "fella, fella, fella", by: "Millx" },
    { text: "I secretly have a foot fetish.", by: "Mountable" },
    { text: "The rapist is evil.", by: "Middles" },
    { text: 'WINEDLLOVERRIDES="OnlineFix64,SteamOverlay64,winmm,dnet,steam_api64=n,b"', by: "Renascent" },
    { text: "hyprctl --instance 0 'keyword misc:allow_session_lock_restore 1'", by: "Mountable" },
  ];

  function shuffle(a) {
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  var order = shuffle(QUOTES.slice());
  var idx = 0;
  var timer = null;
  var INTERVAL = 10000;
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var roll = document.getElementById("quote-roll");
  var quoteEl = document.getElementById("quote-text");
  var inner = document.getElementById("quote-text-inner");
  var byEl = document.getElementById("quote-by");
  var counter = document.getElementById("quote-counter");
  if (!quoteEl || !inner || !byEl || !counter) return;

  function pad(n) { return n < 10 ? "0" + n : "" + n; }
  function escapeHtml(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  function render(advance) {
    var q = order[idx];
    counter.textContent = pad(idx + 1) + "/" + pad(order.length);
    var apply = function () {
      inner.textContent = q.text;
      byEl.textContent = "\u2014 " + escapeHtml(q.by);
    };
    if (advance && !reduced) {
      quoteEl.classList.add("is-out");
      setTimeout(function () { apply(); void quoteEl.offsetWidth; quoteEl.classList.remove("is-out"); }, 350);
    } else {
      apply();
    }
  }

  function next(advance) { idx = (idx + 1) % order.length; render(advance); }
  function restart() { if (timer) clearInterval(timer); timer = setInterval(function () { next(true); }, INTERVAL); }

  render(false);
  restart();

  function skip() { next(true); restart(); }
  if (roll) roll.parentElement.addEventListener("click", skip);
  document.addEventListener("keydown", function (e) {
    if (e.target && e.target.tagName === "A") return;
    if (e.key === "Enter" || e.key === "ArrowRight") { e.preventDefault(); skip(); }
  });

  document.addEventListener("visibilitychange", function () {
    if (document.hidden) { if (timer) { clearInterval(timer); timer = null; } }
    else if (!timer) { restart(); }
  });

  /* after load, the background video starts fading in and reaches
     full opacity over the same ten-second window */
  var bgvideo = document.getElementById("bgvideo");
  var bggif = document.getElementById("bggif");
  if (bgvideo && !reduced) {
    requestAnimationFrame(function () {
      bgvideo.classList.add("is-on");
      document.body.classList.add("is-crying");
      try { bgvideo.play().catch(function () {}); } catch (e) {}
    });
    /* when the cry-video ends, crossfade to the looping gif for good */
    if (bggif) {
      bgvideo.addEventListener("ended", function () {
        bggif.classList.add("is-on");
        document.body.classList.add("is-looping");
        bgvideo.classList.remove("is-on");
      });
    }
  }
})();