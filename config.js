/* ===== EDIT ONLY THIS FILE. Use {name} anywhere to insert her name. ===== */
window.CONFIG = {
  name: "Miss Khan",
  birthday: "10-06",                       // MM-DD
  sender: "Your friend, Nadab",
  us: "Me",                                // label of the first glowing point
  music: "music/happy-birthday.mp3",       // empty = built-in synth score
  colors: { bg: "#05060d", navy: "#0b1226", ink: "#f4efe6", gold: "#d9b878", rose: "#c98a96" },
  hero: "photos/hero.jpg",
  bgVideo: "",                             // optional: "video/bg.mp4" (muted loop). Empty = her photos play as a slow cinematic backdrop

  docu: "Known for laughing at the wrong moments, remembering the little things, and making ordinary days feel like memories. Currently: far away. Never forgotten.",
  narration: [
    "Some people don't arrive with noise.",
    "They arrive quietly,",
    "and slowly become the part of your day you didn't know you needed.",
    "One day you look around...",
    "and realise how much of your story has their laughter in it."
  ],

  ifYouWereHere: [
    "We'd probably be arguing about what to eat.",
    "Someone would say “one last photo” approximately 17 times."
  ],

  photos: [                                
    { src: "photos/memory-01.jpg", caption: "Crown on, roses in hand. Queen of the day." },
    { src: "photos/memory-03.jpg", caption: "Teal, gold, and that smile." },
    { src: "photos/memory-06.jpg", caption: "That little smile says everything." },
    { src: "photos/memory-09.jpg", caption: "Red lips, golden lights, and a crown." },
    { src: "photos/memory-08.jpg", caption: "Roses for Miss Khan." },
    { src: "photos/memory-02.jpg", caption: "Some moments don't need a caption." },
    { src: "photos/memory-04.jpg", caption: "Roses, lights, and the happiest smile in the room." },
    { src: "photos/memory-07.jpg", caption: "A queen on her staircase." }
  ],
  filmCount: 6,                            // how many photos play in the film (the album shows all)
  voice: "nadab.mp3",               // your voice note
  voiceCaptions: [],                      // optional subtitles: [[0,"first words"],[6000,"next line"]] (ms from start)
  albumExtra: ["photos/memory-10.jpg"],     // extra photos only in the final album

  // the imagined birthday (AI-made clips). Shown as a dream, clearly labelled.
  dream: {
    intro: ["If I could throw you the birthday you deserve...", "it would look a little like this."],
    tag: "IMAGINED  ·  NOT REAL, JUST FOR YOU",
    clips: [
      { src: "video/dream-special.mp4", ms: 19000, caps: [[800, "Candlelight."], [4200, "Flowers everywhere."], [7600, "And you, in the middle of it."], [10500, "A staircase fit for a queen."], [15000, "Smiling, like you always do."]] }
    ],
    after: ["But the real one is better."]
  },
  cakeVideo: "video/cake.mp4",

  miss: [
    "Your random messages.",
    "Your ridiculous jokes.",
    "The conversations that were supposed to last five minutes."
  ],
  missFinal: "Honestly... I just miss YOU.",

  chapters: [                                // photo is optional: leave it out if there is no matching picture
    { title: "UMT Exam Camps", photo: "photos/chapter-umt.jpg", date: "Those long days", memory: "Long days in the exam camp offices. Work, fries, endless laughter, and making UMCs while having fun with our duties.", message: "Work never felt like work with you around." },
    { title: "Emporium Mall", photo: "photos/chapter-emporium.jpg", pos: "12% 50%", date: "After you came back from the UK", memory: "Meeting you at Emporium Mall after you returned from the UK. Laughter, good food, and pictures that still make me smile.", message: "Some reunions deserve to be remembered." },
    { title: "Your Day", photo: "photos/memory-01.jpg", pos: "center 25%", date: "Today", memory: "Today is not about me, and not about us. It is about you. Every candle on that cake is another year of you being exactly who you are, and the world is better for it.", message: "This day is all yours." },
    { title: "And whatever comes next...", photo: "photos/memory-02.jpg", pos: "center 25%", date: "Soon", memory: "Another reunion, another round of photos, another reason to laugh.", message: "I'm counting on it." }
  ],

  thanks: [
    "Thank you.",
    "For all the laughter that never needed a reason.",
    "For being the kind of friend who shows up."
  ],

  letter: [
    "Dear Miss Khan,",
    "I wish I could be there today, with way too many photos and absolutely no plan.",
    "I miss the small things: the random messages, the laughter, the five-minute chats that never ended in five minutes.",
    "Thank you for the birthdays you made special, and for turning ordinary days into memories. But today is not about me. Today is about you.",
    "Distance can change our time zones. It can't change what you mean to me.",
    "So today, from far away, I want you to know: you are remembered, appreciated, and celebrated. Happy Birthday, Miss Khan."
  ],

  tears: [
    "If you're smiling right now...",
    "or if your eyes are a little wet...",
    "that's okay.",
    "Those are the happy kind of tears.",
    "They only happen when someone is loved."
  ],

  celebrationSub: "From me, wherever I am. Nadab.",
  final: {
    lines: ["So here's to you.", "To another year.", "And hopefully... a lot less distance."],
    title: "Happy Birthday, {name} ❤️",
    sub: "I miss you. I appreciate you. And I'm really lucky to have you as my friend."
  },
  wishTitle: "Make a wish",
  wishReply: "Wish made. Keep it a secret, and watch it come true.",
  pageTag: "Today, the whole day belongs to you.",
  wishes: [
    "May your smile never fade and your heart always be full of joy.",
    "May every dream you carry quietly come true, one by one.",
    "May this year be kinder, brighter and more beautiful than the last.",
    "May you always be surrounded by people who truly love you.",
    "May success follow you, and peace stay with you.",
    "Shine the way you always do. The world is better for it."
  ],
  credits: [["Starring","Miss Khan"],["Directed by","Nadab"]],
  ending: ["See you soon."]
};
