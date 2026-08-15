/* millx.lol — rotating quote ticker */
(function () {
  "use strict";

  var QUOTES = [
    { text: "deaf means you cant see idioy", by: "RatWithAFace" },
    { text: "IM BEING SPOILED BY THE MHA WAIFU TIER LIST", by: "Slash" },
    { text: "Medium 40 minutes <-- dryer settings", by: "Millx" },
    { text: "I shape elite spaces with strategic, influential insight.", by: "CTG123456" },
    { text: "He who is right does not always win.", by: "Ssammyk" },
    { text: "Dude, death is like the weirdest thing ever cause its like EVERYTHING is exactly as it should be except for him. Its lit just frozen in time <-- referring to charlie kirk", by: "SysKeyJS" },
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
    { text: "Hello! My name is Sid! Sorry for being late!", by: "Moonix" },
    { text: "Hey! It's me, it's nigity!", by: "Slash" },
    { text: "ffmpeg -i in.mp4 -c:v libx264 -crf 28  -c:a copy out.mp4", by: "Renascent" },
    { text: "i love yaemori", by: "Millx" },
    { text: "Kaede Azusagawa is always a baddie.", by: "Mountable" },
    { text: "KAEDE", by: "Mountable" },
    { text: "bro honestly do you think i am stupid or something because lying straight to my face about not knowing what ftg is has to be the dumbest move you could have made. i literally spent time digging through old server logs and found you clearly interacting with slash, ratwithoutaface, and mountable which completely exposes your little act. i have been around the housing scene for over 5 years and i know exactly who the problem players are so pretending you are clueless isn't going to fly here. i explicitly asked you if you knew them just to test your honesty and you failed immediately which makes you look insanely sus. housingclient contains private exploits that i am absolutely not risking getting leaked to that group or patched by admins because some random decided to share it. i can see the screenshots right in front of me showing you in their discord servers so there is no point in trying to deny it now. if you had just been honest from the start maybe i would have considered it but lying proves you are hiding something. i check the background of everyone who wants an access key specifically to prevent people like you from snaking your way in. you are clearly associated with that circle and i am not about to compromise my entire project just because you thought you could trick me. it is actually hilarious that you thought saying \"what is ftg 2085 anyways\" would work when your name is right there in the member lists next to known griefers. i have to be careful because hypixel admins are already watching everything i do and banning my alts left and right. letting someone from ftg get a license is basically asking for the client to get detected instantly. i dont care if you claim you \"just joined\" that server, the association alone is enough for me to deny you permanently. you wasted your chance by trying to play dumb so don't bother asking for a key ever again. go back to slash and tell him his plan didn't work lmfao because i am not falling for it. seriously get lost.", by: "Troaph" },
    { text: "dih cord on some eval tienanmensquare ming", by: "Renascent" },
    { text: "oreimo be hittin", by: "Renascent" },
    { text: "@Slash would you like it if I sensually slipped my hand into your pants.", by: "Ssammyk" },
    { text: "bluesky sounds like a furry platform", by: "Renascent" },
    { text: "i love yaemori btw", by: "Millx" },
    { text: "Lick my balls @kanyewest", by: "Slash" },
    { text: "ONII CHANNNNNNNNN", by: "Renascent" },
    { text: "~/reset_cx.sh", by: "Millx" },
    { text: "Did you know that when you take a photo and then display it on my monitor it infact does not change my monitor quality?", by: "Mountable" },
    { text: "can i buy minecraft with ebt", by: "Slash" },
    { text: "@everyone HOUSING CLIENT HAS BEEN CRACKED", by: "Slash" },
    { text: "please make millx gc owner", by: "Slash" },
    { text: "is there a december 31st this year", by: "Millx" },
    { text: "why deku kinda bad", by: "Slash" },
    { text: "@hourly_shitpost @grok i came on my hamster", by: "Slash" },
    { text: "I REALLY WANNA EDATE SOMEONE ON DISCORD", by: "Slash" },
    { text: "🚨 chronos password is password", by: "Slash" },
    { text: "i have feelings for ctg.", by: "Mountable" },
    { text: "Woah man! That is SO sigma! Only in OHIO!!  😂😂😂 (My family is being held hostage)", by: "Slash" },
    { text: "MILLX THE AUDIOPHILE TRIED MEETING UP WITH A 14 YEAR OLD HEADSET", by: "Slash" },
    { text: "Her brother fucked their cat.", by: "RatWithAFace" },
    { text: "who dat little kid tho 👀", by: "Slash" },
    { text: "i found a really low quality video of her and i busted a nut to it", by: "Slash" },
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