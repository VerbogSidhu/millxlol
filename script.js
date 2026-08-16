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
    { text: "i found a really low quality video of her and i busted a nut to it", by: "Slash (referring to a lesbian hallway crush)" },
    { text: "i tap danced in these shitty band shoes and she smiled so i rizzed her up", by: "Slash" },
    { text: "PERRRRSOONA!", by: "RatWithAFace" },
    { text: "i knew a teacher named dick i called him Lil D", by: "Slash" },
    { text: "he got fired for like sexually harassing some gay kid", by: "Slash" },
    { text: "STREAM ONESHIT", by: "Renascent" },
    { text: "-noverifyfiles -nobootstrapupdate -skipinitialbootstrap -norepairfiles -overridepackageurl", by: "Millx" },
    { text: "aploogy y i removed a random device sorry if that was you.", by: "Slash" },
    { text: "how do i sahve my shaft", by: "Millx" },
    { text: "Copyright Disclaimer Under Section 107 of the Copyright Act 1976, allowance is made for \"fair use\" for purposes such as criticism, comment, news reporting, teaching, scholarship, and research. Fair use is a use permitted by copyright statute that might otherwise be infringing. Non-profit, educational or personal use tips the balance in favor of fair use.", by: "Slash" },
    { text: "COMBINED TIGHTNESS ??? 🔥", by: "Slash" },
    { text: "The reported X account @FTG2085 is using my copyrighted self-portrait photograph without my permission. The infringing use appears as the account header/banner image on the @FTG2085 profile. The same copyrighted photograph also appears in posts from the account. The profile URL is included because the copyrighted photograph is being used as the account header/banner image. I took this photograph myself and I am the copyright owner. I have not licensed, assigned, or authorized the reported account or its operator to use, copy, upload, display, or distribute this photograph. I previously contacted the account operator through Discord and directly told them that the image is mine and that they do not have permission to use it. They refused to remove it and continued using the image anyway. I request removal or disabling of access to the unauthorized uses of my copyrighted photograph, including the @FTG2085 account header/banner image and any posts/media attachments from the account that contain the same photograph.", by: "CTG123456" },
    { text: "ngl this might have been the start of my love for piss", by: "Renascent" },
    { text: "kirkinson", by: "Slash" },
    { text: "hollon its piss time brb", by: "Slash" },
    { text: "tell your daddy to contain his piss bottles", by: "Slash" },
    { text: "millx please make out with me to get rid of my cold", by: "Mountable" },
    { text: "so emotional she pissed herself", by: "Renascent" },
    { text: "replay with type plz", by: "Nebra" },
    { text: "helen keller reincarnated as a shota???", by: "Slash" },
    { text: "im tryna install pizza to ctgs house", by: "Millx" },
    { text: "HOW TIGHT IS MIKU ON THE TIGHTNESS SCALE??????????? 🤔 💢", by: "Slash" },
    { text: "i looooove yaemori btw", by: "Millx" },
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