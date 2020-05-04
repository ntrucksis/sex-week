export interface Event {
  title: string;
  subtitle: string;
  pic: string;
  desc: string;
  id: number;
  regLink: string;
  signups: string;
  date: Date;
  signupLink: string;
}

export interface Bio {
  name: string;
  pic: string;
  bio: string;
}

export const popupData: string = `Check back later this week to register for
  streams.  Follow us on Facebook and Instagram (linked on our homepage) for
    the latest updates.`;

export const BIOS: Bio[] = [
  {
    name: "Eliza",
    pic: "../assets/images/eliza-pic.jpg",
    bio: `I’m Eliza. I’m from Newport News, VA but I’m currently living in IL
     for college. I’m a junior studying Social Policy and African American
      Studies. I’ve been part of Sex Week since my freshman year but this is my
       first year serving as co-president. Some of my personal interests
        include: liberatory education, harm reduction, urban agriculture, and
         abolition. I spend most of my free time reading, playing Animal
          Crossing, and suffering under my school workload. `
  },
  {
    name: 'Jiyul',
    pic: '../assets/images/jiyul-pic.jpg',
    bio: `I’m Jiyul! I’m from Boston, MA, but I’m currently an undergraduate
    student at Northwestern University in Evanston, IL. I’m a senior studying
    psychology, gender & sexuality studies, and English literature. I enjoy
    bouldering in my free time at my local climbing gym, spending time with my
     cats, reading feminist books, and painting!`
  }
]

export const EVENTS: Event[] = [
  {
    title: 'sex KiKi',
    subtitle: 'MSTRBATION 101-6 – Masturbation for Manifestation',
    pic: "../assets/images/kiki-box.PNG",
    desc: `Masturbation is a catalyst for radical self-love.
Masturbation as a ritual, healing modality, and a self-actualizing practice
enabling us to take back our power through sex-positive means!
Spiritually anchored, it transmutes sexual energy into unwavering life
force (manifestation)! It aligns the chakras, reminds us of our embodied
wisdom, to ignite our fullest potential. Because of it, we can be more
capable of giving, receiving, and experiencing love and all its flavours. Its
infinite wisdom and adoration for the body, mind, and spirit invites us to
go beyond the genitals so we can awaken the pleasures of everyday life.
Masturbation assesses our desires, it questions if we’re aligned with our
standards & our dignity. As a pillar of erotic consciousness, it honours
our complexities and asks that we do the same for others.
sex KiKi’s founder Coriama, is a pleasure activist, artist, and sensual
activator whose practice explores the ABCS (art, beauty, culture, and
sexuality). As a sensualist, Coriama utilizes various modalities that heavily
focus on spirituality and eroticism to highlight sexuality as a
healing art. She’s known for her masturbation philosophies and
 approach to building pleasure based communities.`,
    id: 1,
    regLink: "",
    signups: '',
    date: new Date('May 11, 2020 18:30:00'),
    signupLink: ''
  },
  {
    title: 'Red Hot Annie from Vaudezilla',
    subtitle: 'BRLSQ 101-5-Real Life Burlesque with Red Hot Annie',
    pic: '../assets/images/annie-box.png',
    desc: `Align with your larger-than-life burlesque potential, by harnessing
     the power of your imagination.  We’ll tune mind, body, and soul with the
      freedom of erotic dance to develop comfort in person or on stage (or in
         front of a camera!). Through a series of drills and activities you
          will be invited to confidently and fully express the parts of you
           that are dying to be released! Harness the power of your
            self-confidence, streamline your intention and develop some
             personalized techniques for jumping fully into any moment on stage
             or off. Using choreography as well as spontaneous movement and
              prompts, we’ll explore the very edges of our personal power –
               transforming into the Real Life Burlesque Royalty that presides
                in each of us.`,
    id: 2,
    regLink: '',
    signups: '',
    date: new Date('May 11, 2020 20:30:00'),
    signupLink: ''
  },
  {
    title: 'Sex Workers Outreach Project',
    subtitle: 'SEX_WRK 101-4 – Intro to Sex Work & Allyship',
    pic: 'insert',
    desc: `Liz Velek is an MPH and a Certified Sexual Health Education
    specialist.  She’s a board member of SWOP Chicago and a community ally. In
    this workshop she examines and deconstructs our notions of sexuality, labor,
     and economy.  A critical look is taken at our concepts of justice and best
      practices moving forward are discussed.`,
    id: 3,
    regLink: "",
    signups: '',
    date: new Date('May 12, 2020 18:30:00'),
    signupLink: ''
  },
  {
    title: 'Sky Cubacub',
    subtitle: 'RDCL_VSBLTY 102-3-Keynote',
    pic: '../assets/images/ws-box.png',
    desc: `Sky Cubacub is the founder and designer for Rebirth Garments. In
    their own words “Rebirth Garments challenges mainstream beauty standards
     that are sizest, ableist, and conform to the gender binary. Instead, we
      maintain the notion of Radical Visibility, a movement based on claiming
       our bodies and, through the use of bright colors, exuberant fabrics, and
        innovative designs, highlighting the parts of us that society typically
         shuns. Through Radical Visibility, we refuse to assimilate and can
          create a QueerCrip dress reform movement.” Join us for their keynote.`,
    id: 4,
    regLink: '',
    signups: '',
    date: new Date('May 13, 2020 18:00:00'),
    signupLink: ''
  },
  {
    title: 'Ela Przbylo',
    subtitle: `SEXLTY 101-3-Asexuality and Aromanticism 101: Building an Erotic
    Toolkit`,
    pic: '',
    desc: `Ela is Assistant Professor in the Department of English and core
     faculty in the Women’s and Gender Studies Program at Illinois State
      University. This workshop with cover basic ace & aro terminology and help
       participants dream up an erotic toolkit that includes and centralizes
       ace & aro experiences and contributions. Participants should bring glue,
        scissors, colored paper, and old magazines or at minimum a paper and
         pen. If you’re unable to gather supplies please still feel free to
          attend!`,
    id: 5,
    regLink: '',
    signups: '',
    date: new Date('May 13, 2020 20:00:00'),
    signupLink: ''
  },
  {
    title: 'Rainbow Alliance ft Veronica Scorpio and Tommie Foolerie',
    subtitle: 'DRG_MKE_UP 102-9- Drag Makeup Tutorials And Q&A',
    pic: '',
    desc: `Join the Veronica Scoripo and Tommie Foolerie of Rainbow Alliance
    with a drag tutorial!! They’ll each be doing some looks for us and
     answering questions reverse bingo style. `,
    id: 6,
    regLink: '',
    signups: '',
    date: new Date('May 14, 2020 15:30:00'),
    signupLink: ''
  },
  {
    title: 'Family Feud',
    subtitle: 'FMLY_FEUD 101-2 - Sex Week Feud',
    pic: 'insert',
    desc: `A classic game of Family Feud with a twist. We’ve polled 100
     Northwestern student’s and now’s your chance for you and your friends to
      win some prizes!! Find 4 people to register for a team and apply to
       participate. Please only register to play if you and 3 other people
       are able to make it to the ENTIRE event.`,
    id: 7,
    regLink: `https://docs.google.com/forms/d/e/1FAIpQLScDnakSs2PKDEEqKdU5HX5Kj-5YkrmjHCDZMdu93jOCiDtjQA/viewform?usp=sf_link`,
    signups: 'Sign up to Play',
    date: new Date('May 14, 2020 18:00:00'),
    signupLink: ''
  },
  {
    title: 'Ying’s Nudes Skillshare',
    subtitle: 'NOODZ_THRY 101-7',
    pic: '',
    desc: `Join Ying, resident photographer and general baddie, in learning to
     appreciate ALLLL aspects and ALLLL angles of your body! Enhance your nude
      taking capabilities and dazzle yourself and any potential recipients.
       We will talk about angles, props, lighting, and more importantly we will
        discuss the ways in which we touch, document, appreciate, and make peace
         of our bodies. This workshop will be open to everyone but has a focus
          for non white and non skinny bodies. No special equipment needed ;)
           Content Warning: Sample photos including nudity will be shown!`,
    id: 8,
    regLink: '',
    signups: '',
    date: new Date('May 14, 2020 20:30:00'),
    signupLink: ''
  },
  {
    title: 'Cunty MeMe',
    subtitle: 'EROTIC_LIBRTION 101-9 - The Use of the Erotic',
    pic: '../assets/images/cunty-box.PNG',
    desc: `This workshop is meant to be an intimate and interactive environment
    where we discuss the role sex plays in our daily lives, relationships as
    well as our culture and society. We will dissect the meaning of the use of
     the erotic and explore how sex can be a place of personal liberation and
     ultimately collective liberation

     emem aka Cunty MeMe is a multi-disciplinary artist, model, and activist born in
     Brooklyn, NY raised on the south side of Chicago. As a poet, singer/songwriter/
     pianist, they create cunty, loud, and arrogant art to empower themselves and
    anyone who resonates.`,
    id: 9,
    regLink: "",
    signups: '',
    date: new Date('May 15, 2020 16:00:00'),
    signupLink: ''
  },
  {
    title: 'Sex Story Slam',
    subtitle: 'SEX_STRY 104-5 – Sex Story Slam',
    pic: 'insert',
    desc: `Come share your funniest, raunchiest, grossest sex stories!! If your
     story gets voted for best in its category you can win a prize! You’ll be able to share without signing up but priority will
       be given to those folks first. `,
    id: 10,
    regLink: "https://docs.google.com/forms/d/e/1FAIpQLScdWFKnsmcrX8mmnXAv1RgHAknoOo2SmMHxCNqP9HpHw6gehA/viewform?usp=sf_link",
    signups: 'Sign up to Share',
    date: new Date('May 15, 2020 18:00:00'),
    signupLink: ''
  },
  {
    title: 'Cunty MeMe',
    subtitle: 'PERF_ST 101-8 – A Concert featuring Cunty MeMe',
    pic: 'insert',
    desc: `Join us for a night of fun and enjoy the cooooool tunes of Cunty
    MeMe! You can find their music here:`,
    id: 11,
    regLink: "",
    signups: '',
    date: new Date('May 15, 2020 20:30:00'),
    signupLink: ''
  },
];
