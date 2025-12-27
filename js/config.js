/**
 * Configuration and constants for the quiz app
 */
const CONFIG = {
  questionsPath: 'data/questions.json',
  
  traits: {
    s: {
      name: 'Sweetie',
      image: 'images/sweetie.png',
      title: '🍬SWEETIE',
      description: `🍬A sweetie is someone who gives off pure kindness in everything they do. They’re the type who genuinely cares about people, hypes others up for no reason, and makes you feel safe just by being around. They’re thoughtful without trying too hard, soft-hearted in the best way, and basically allergic to being mean. Their vibe is pure comfort — like the kind of person you can trust with your feelings or your fries.<br>Key phrases:<ul><li>\"I got you!\"</li><li>\"What do you need right now?\"</li><li>\"How can I help?\"</li><li>\"Saw this and thought of you\"</li><li>\"Text me when you make it home\"</li></ul>Examples IRL:<ul><li>“Ugh, Maya brought me soup when I was sick — she’s honestly a pure sweetie of a person.”</li><li>“He helped everyone with the project even though he was stressed. Pure sweetie energy.”</li><li>“She’s the kind of pure sweetie of a person who remembers your favorite snack and brings it just because.”</li></ul>Potential blindsides:<ul><li>Being too accommodating. Sweeties sometimes say yes when they’re tired, overwhelmed, or low-key annoyed.</li><li>People-pleasing tendencies. They try so hard to keep the peace that their own needs get ignored.</li><li>Avoiding conflict. They’d rather absorb the discomfort than speak up — even when they should.</li><li>Over-giving. They can pour so much energy into others that they accidentally burn themselves out.</li><li>Letting people walk all over them. Not because they’re weak — because they’re nice to a fault.</li><li>Reading emotions too deeply. A friend saying \"I'm fine\" can send them into overthinking mode for hours.</li><li>Hard time setting boundaries. They worry it’ll hurt someone’s feelings.</li></ul>Sweeties in the wild: <ul><li>Ted Lasso</li><li>Paddington Bear</li><li>Samwise Gamgee (Lord of the Rings)</li><li>Emma Watson</li><li>Hobbes (Calvin and Hobbes)</li><li>Dolly Parton</li>`
    },
    b: {
      name: 'Baddie',
      image: 'images/baddie.png',
      title: '💅Baddie',
      description: `💅A baddie is someone with confident energy. They walk into a room like they know their worth — not arrogant, just unbothered and glowing. They're bold, stylish, possibly edgy, and a little intimidating in the best way. A baddie backs themselves, protects their peace, and doesn't shrink for anyone. They radiate bad b*tch energy with a side of playful sass and main-character vibes.

Key phrases:<ul><li>\"I know who I am\"</li>
<li>\"If s/he wanted to s/he would\"</li>
<li>\"Princess treatment required\"</li>
<li>\"Protect your peace, diva\"</li>
<li>\"You are the prize\"</li></ul>Examples IRL:
<ul><li>\"She stood up for herself without raising her voice — pure baddie behavior.\"</li>
<li>\"He walked in with that clean fit and baddie confidence.\"</li>
<li>\"You apologized when you didn't even do anything wrong? Girl, that is not baddie energy.\"</li></ul>

Potential blindsides:
<ul><li>Coming off intimidating, mean, or standoffish without meaning to. Their confidence can scare away softer personalities.</li>
<li>Keeping their guard up too much. \"Independent\" turns into \"I don't need anyone ever.\"</li>
<li>Accidentally dismissing feelings. They're strong, so they assume others are too, which is not always the case.</li>
<li>Hard time admitting vulnerability. Everything becomes \"I'm fine,\" even when they're not.</li>
<li>Can appear unbothered to the point of seeming cold. Sometimes people can't tell if they care.</li>
<li>Setting harsh boundaries. The line between \"protecting my peace\" and \"pushing people away\" gets blurry.</li>
<li>Not asking for help. They'd rather struggle than look weak.</li></ul>

Baddies in the wild: 
<ul><li>Zendaya </li>
<li>Dua Lipa</li>
<li>Michael B. Jordan</li>
<li>Zuko (Avatar) </li>
<li>Kim Possible </li>
<li>Lady Gaga </li>
<li>Bad Bunny</li></ul>`
    },
    r: {
      name: 'Rascal',
      image: 'images/rascal.png',
      title: '😈Rascal',
      description: `😈A rascal is someone with mischievous charm. They're not chaotic in a destructive way, just playful, clever, and always up to something goofy. They love inside jokes, harmless trouble, and stirring the pot just a little to make people laugh. A rascal has twinkly eyes, quick wit, and the vibe of a person who has already thought of a prank but isn't admitting it. They bring fun wherever they go.

Key phrases:
<ul><li>"What if we…"</li>
<li>"Do you prefer tomfoolery or shenanigans?"</li>
<li>"For our first date we're going canyoneering at 6am, committing piracy at 4pm, and I'll have you back tomorrow by 7am for cold </li>leftover pizza from the local saloon"
<li>"We should try it"</li>
<li>"What could possibly go wrong?"</li></ul>

Examples IRL: 
<ul><li>"Don't leave him unsupervised — that rascal will rearrange all the chairs for fun."</li>
<li>"She gave me that pure rascal grin right before messing with my phone settings."</li>
<li>"He's a total rascal in class, but in a lovable, 'can't even be mad' kind of way."</li></ul>

Potential blindsides: 
<ul><li>Not knowing when to stop. A harmless joke can go just a little too far.</li>
<li>Accidentally annoying people. They think they're being funny — others might not be in the mood.</li>
<li>Using humor to avoid real feelings. Jokes can become a shield.</li>
<li>Being unpredictable. Their spontaneity can stress out more structured friends.</li>
<li>Struggling with seriousness. They may accidentally derail important moments.</li>
<li>Poking at people who aren't playful back. Not everyone loves mischief.</li>
<li>Getting labeled as "immature," even if they're actually emotionally deep.</li></ul>

Rascals in the wild: 
<ul><li>Jim Halpert (The Office) </li>
<li>Bart Simpson </li>
<li>Greg Heffley </li>
<li>Tom Holland </li>
<li>Emma Stone</li>
<li>Billie Eilish</li></ul>`
    }
  },
  
  // Helper to get trait name
  getTraitName(key) {
    return this.traits[key]?.name || key;
  },

  getTraitTitle(key) {
    return this.traits[key]?.title || key;
  },

  getTraitDescriptor(key) {
    return this.traits[key]?.description || '';
  },
  
  // Helper to get trait image
  getTraitImage(key) {
    return this.traits[key]?.image || '';
  }
};

// Freeze to prevent accidental modification
Object.freeze(CONFIG);