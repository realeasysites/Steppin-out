/* Steppin' Out Dance Centre — content data.
   Schedule source: Fall 2026–2027 schedule PDF (updated 10/19/26).
   ages: [min, max] in years; null = ask the studio. team = audition required. invite = invite only. */
window.SODC = {
  site: {
    phone: '(207) 283-2450', tel: '+12072832450', email: 'SODC@steppin-out.org',
    address: '308 Main Street, Saco, ME 04072',
    portal: 'https://dancestudio-pro.com/online/steppinoutdance2020',
    venmo: '@Steppin-Out-Dance',
    facebook: '', instagram: ''   // add page URLs here when confirmed — the feed + icons appear automatically
  },

  schedule: [
    // MONDAY
    { day:'Mon', studio:'I',  time:'3:30–4:15', name:'Elite Acro Team', style:'Acro', who:'Sarah', ages:[5,99], team:true },
    { day:'Mon', studio:'I',  time:'4:15–5:15', name:'Elevate Acro Team', style:'Acro', who:'Sarah', ages:[5,99], team:true },
    { day:'Mon', studio:'I',  time:'5:15–6:15', name:'Evolve Acro Team', style:'Acro', who:'Sarah', ages:[5,99], team:true },
    { day:'Mon', studio:'I',  time:'6:15–7:15', name:'Musical Theatre Team', style:'Musical Theatre', who:'Sarah', ages:[7,99], team:true },
    { day:'Mon', studio:'I',  time:'7:15–8:15', name:'High School Ballet', style:'Ballet', who:'Sarah', ages:[14,18] },
    { day:'Mon', studio:'I',  time:'8:15–8:45', name:'Pointe (teacher approval)', style:'Ballet', who:'Sarah', ages:[12,99] },
    { day:'Mon', studio:'II', time:'3:15–4:15', name:'Jr Competitive Clogging', style:'Clogging', who:'', ages:[5,99], team:true, invite:true },
    { day:'Mon', studio:'II', time:'4:15–5:15', name:'Jazz (12 & up)', style:'Jazz', who:'Maeghan', ages:[12,99] },
    { day:'Mon', studio:'II', time:'5:30–6:15', name:'Contemporary (8 & up)', style:'Contemporary', who:'Hope', ages:[8,99] },
    { day:'Mon', studio:'II', time:'6:15–7:00', name:'Ballet (7 & up)', style:'Ballet', who:'Maeghan', ages:[7,99] },
    { day:'Mon', studio:'II', time:'7:00–7:45', name:'Teen Contemporary', style:'Contemporary', who:'Hope', ages:[13,18], isNew:true },
    // TUESDAY
    { day:'Tue', studio:'I',  time:'9:30–10:00 am', name:'Mommy and Me (1–3 yrs)', style:'Mommy & Me', who:'Nicole', ages:[1,3] },
    { day:'Tue', studio:'I',  time:'10:00–10:45 am', name:'Pre-Ballet/Tap (3–4 yrs)', style:'Tiny Toes', who:'Nicole', ages:[3,4] },
    { day:'Tue', studio:'I',  time:'3:30–4:15', name:'Small Fry Hip Hop Team', style:'Hip Hop', who:'Maeghan', ages:[5,99], team:true },
    { day:'Tue', studio:'I',  time:'4:15–5:15', name:'Pee Wee Hip Hop Team', style:'Hip Hop', who:'Maeghan', ages:[5,99], team:true },
    { day:'Tue', studio:'I',  time:'5:15–6:15', name:'Jr Hip Hop Team', style:'Hip Hop', who:'Maeghan', ages:[5,99], team:true },
    { day:'Tue', studio:'I',  time:'6:15–7:15', name:'Teen Hip Hop Team', style:'Hip Hop', who:'Maeghan', ages:[5,99], team:true },
    { day:'Tue', studio:'I',  time:'7:15–8:15', name:'Sr Hip Hop Team', style:'Hip Hop', who:'Maeghan', ages:[5,99], team:true },
    { day:'Tue', studio:'I',  time:'8:15–9:00', name:'Sr Competitive Hip Hop', style:'Hip Hop', who:'', ages:[5,99], team:true, invite:true },
    { day:'Tue', studio:'II', time:'3:30–4:15', name:'Pee Wee Jazz Team', style:'Jazz', who:'Nicole', ages:[5,99], team:true },
    { day:'Tue', studio:'II', time:'4:15–5:15', name:'Teen Jazz Team', style:'Jazz', who:'Nicole', ages:[5,99], team:true },
    { day:'Tue', studio:'II', time:'5:15–6:00', name:'Teen/Adult Tap', style:'Tap', who:'Nicole', ages:[13,99] },
    { day:'Tue', studio:'II', time:'6:15–7:15', name:'Ballet (7 & up)', style:'Ballet', who:'Taylor', ages:[7,99], isNew:true },
    { day:'Tue', studio:'II', time:'7:15–8:15', name:'Middle School Ballet', style:'Ballet', who:'Taylor', ages:[11,14] },
    // WEDNESDAY
    { day:'Wed', studio:'I',  time:'3:15–3:45', name:'Hip-Hop (3–4 yrs)', style:'Hip Hop', who:'Cheryl', ages:[3,4] },
    { day:'Wed', studio:'I',  time:'3:45–4:30', name:'Pre-Ballet/Tap (3–4 yrs)', style:'Tiny Toes', who:'Cheryl', ages:[3,4] },
    { day:'Wed', studio:'I',  time:'4:30–5:30', name:'Ballet/Tap (5–6 yrs)', style:'Tiny Toes', who:'Cheryl', ages:[5,6] },
    { day:'Wed', studio:'I',  time:'5:30–6:30', name:'PeeWee/Jr Lyrical Team', style:'Lyrical', who:'Sarah', ages:[5,99], team:true },
    { day:'Wed', studio:'I',  time:'6:30–7:30', name:'Competitive Acro', style:'Acro', who:'', ages:[5,99], team:true, invite:true },
    { day:'Wed', studio:'I',  time:'7:30–8:30', name:'Adult Hip Hop', style:'Hip Hop', who:'Michelle', ages:[18,99] },
    { day:'Wed', studio:'II', time:'3:30–4:30', name:'Ballet (7–9 yrs)', style:'Ballet', who:'Sarah', ages:[7,9] },
    { day:'Wed', studio:'II', time:'4:30–5:30', name:'Leaps & Turns', style:'Technique', who:'Sarah', ages:null, isNew:true },
    { day:'Wed', studio:'II', time:'5:30–6:30', name:'Jazz (7 & up)', style:'Jazz', who:'Cheryl', ages:[7,99] },
    { day:'Wed', studio:'II', time:'6:30–7:30', name:'Teen Hip-Hop', style:'Hip Hop', who:'Rosebeth', ages:[13,18] },
    { day:'Wed', studio:'II', time:'7:30–8:30', name:'Sr Contemporary Team', style:'Contemporary', who:'Rosebeth', ages:[9,99], team:true },
    // THURSDAY
    { day:'Thu', studio:'I',  time:'3:30–4:15', name:'Teen Clogging Team', style:'Clogging', who:'Maeghan', ages:[5,99], team:true },
    { day:'Thu', studio:'I',  time:'4:15–5:00', name:'Sr Clogging Team', style:'Clogging', who:'Nicole', ages:[5,99], team:true },
    { day:'Thu', studio:'I',  time:'5:00–5:30', name:'Production Clogging', style:'Clogging', who:'Nicole / Maeghan', ages:[5,99], team:true },
    { day:'Thu', studio:'I',  time:'5:30–6:30', name:'Sr Jazz Team', style:'Jazz', who:'Nicole', ages:[5,99], team:true },
    { day:'Thu', studio:'I',  time:'6:30–7:30', name:'Adult Clogging Team', style:'Clogging', who:'Nicole / Melissa', ages:[18,99], team:true },
    { day:'Thu', studio:'I',  time:'7:30–8:30', name:'Adult Jazz', style:'Jazz', who:'Lisa', ages:[18,99] },
    { day:'Thu', studio:'I',  time:'8:30–9:15', name:'Alumni Clogging Team', style:'Clogging', who:'Maeghan', ages:[18,99], team:true },
    { day:'Thu', studio:'II', time:'3:30–4:15', name:'Jr Clogging Team', style:'Clogging', who:'Nicole', ages:[5,99], team:true },
    { day:'Thu', studio:'II', time:'4:15–5:00', name:'Pee Wee Clogging Team', style:'Clogging', who:'Maeghan', ages:[5,99], team:true },
    { day:'Thu', studio:'II', time:'5:30–6:30', name:'Jr Jazz Team', style:'Jazz', who:'Maeghan', ages:[5,99], team:true },
    { day:'Thu', studio:'II', time:'6:30–7:30', name:'Teen/Sr Lyrical Team', style:'Lyrical', who:'Lisa', ages:[5,99], team:true },
    { day:'Thu', studio:'II', time:'7:30–8:30', name:'Sr Competitive Clogging', style:'Clogging', who:'', ages:[5,99], team:true, invite:true },
    // FRIDAY
    { day:'Fri', studio:'I',  time:'3:30–4:15', name:'Acro (7 & up)', style:'Acro', who:'Maeghan', ages:[7,99] },
    { day:'Fri', studio:'I',  time:'4:15–5:00', name:'Acro (10 & up)', style:'Acro', who:'Maeghan', ages:[10,99] },
    { day:'Fri', studio:'I',  time:'5:00–5:45', name:'Hip Hop (5–7 yrs)', style:'Hip Hop', who:'Maeghan', ages:[5,7] },
    { day:'Fri', studio:'I',  time:'5:45–6:30', name:'Jazz (5–7 yrs)', style:'Jazz', who:'Maeghan', ages:[5,7] },
    { day:'Fri', studio:'I',  time:'6:30–7:15', name:'Jazz (8–12 yrs)', style:'Jazz', who:'Maeghan', ages:[8,12] },
    { day:'Fri', studio:'I',  time:'7:15–8:00', name:'Hip Hop (8–12 yrs)', style:'Hip Hop', who:'Maeghan', ages:[8,12] },
    { day:'Fri', studio:'II', time:'3:30–4:15', name:'Irish Step (5 & up)', style:'Irish Step', who:'Kayla', ages:[5,99] },
    { day:'Fri', studio:'II', time:'4:15–5:15', name:'Jr Contemporary Team', style:'Contemporary', who:'Hope', ages:[9,99], team:true },
    { day:'Fri', studio:'II', time:'5:15–6:00', name:'Acro (5–6 yrs)', style:'Acro', who:'Sarah', ages:[5,6] },
    { day:'Fri', studio:'II', time:'6:00–6:45', name:'Lyrical (8 & up)', style:'Lyrical', who:'Sarah', ages:[8,99] },
    { day:'Fri', studio:'II', time:'6:45–7:45', name:'Ballet (12 & up)', style:'Ballet', who:'Sarah', ages:[12,99] },
    { day:'Fri', studio:'II', time:'7:45–8:15', name:'Pre-Pointe (7th grade & up)', style:'Ballet', who:'Sarah', ages:[12,99] },
    // SATURDAY
    { day:'Sat', studio:'I',  time:'8:30–9:00 am', name:'Creative Movement (2–3 yrs)', style:'Tiny Toes', who:'Dani-Rae', ages:[2,3] },
    { day:'Sat', studio:'I',  time:'9:00–9:45 am', name:'Pre-Ballet/Tap (3–4 yrs)', style:'Tiny Toes', who:'Nicole', ages:[3,4] },
    { day:'Sat', studio:'I',  time:'9:45–10:15 am', name:'Mommy & Me (1–3 yrs)', style:'Mommy & Me', who:'Nicole', ages:[1,3] },
    { day:'Sat', studio:'I',  time:'10:15–11:15 am', name:'Ballet/Jazz/Tap (5–7 yrs)', style:'Tiny Toes', who:'Nicole / Kylie', ages:[5,7] },
    { day:'Sat', studio:'I',  time:'11:15–12:00', name:'Small Fry Jazz Team', style:'Jazz', who:'Nicole', ages:[5,99], team:true },
    { day:'Sat', studio:'I',  time:'12:00–12:45', name:'Acro (7 & up)', style:'Acro', who:'Dani-Rae', ages:[7,99], isNew:true },
    { day:'Sat', studio:'II', time:'9:00–9:45 am', name:'Ballet (5–7 yrs)', style:'Ballet', who:'Dani-Rae', ages:[5,7] },
    { day:'Sat', studio:'II', time:'9:45–10:30 am', name:'Hip-Hop (4–6 yrs)', style:'Hip Hop', who:'Dani-Rae', ages:[4,6] },
    { day:'Sat', studio:'II', time:'10:30–11:15 am', name:'Small Fry Clogging Team', style:'Clogging', who:'Dani-Rae', ages:[5,99], team:true },
    { day:'Sat', studio:'II', time:'11:15–12:00', name:'Hip Hop (7 & up)', style:'Hip Hop', who:'Dani-Rae', ages:[7,99], isNew:true }
  ],

  styles: [
    { name:'Tiny Toes', ages:'Ages 2–7', blurb:'Combo classes that teach two (or three) styles in one — Pre-Ballet/Tap, Pre-Hip Hop/Tap, Ballet/Tap, Ballet/Jazz/Tap, Jazz/Tap and Hip Hop/Tap.' },
    { name:'Mommy & Me', ages:'Ages 1–3', blurb:'Our youngest dancers move, play and learn alongside a parent — the gentlest step into our combo classes.' },
    { name:'Ballet & Pointe', ages:'3 & up · Pointe 12+', blurb:'The technique every other style is built on. Pointe is by teacher approval.' },
    { name:'Jazz', ages:'All ages', blurb:'Sass, attitude and storytelling — a mix of ballet and hip hop with new challenges every class. Rec classes and teams.' },
    { name:'Hip Hop', ages:'3 to adult', blurb:'High-energy street style built on rhythm and self-expression, taught with age-appropriate moves. Rec classes and teams.' },
    { name:'Tap', ages:'Kids, teens & adults', blurb:'Lighter, smoother taps layered on ballet and jazz training to make music with your feet.' },
    { name:'Clogging', ages:'All levels', blurb:'Intricate footwork and rhythm on specialized taps — with teams that compete every year at the Northeast Clogging Competition.' },
    { name:'Acro', ages:'Ages 3 & up', blurb:'Dance technique meets acrobatics and tumbling, with three levels of acro competition teams.' },
    { name:'Contemporary', ages:'Ages 8 & up', blurb:'Ballet technique, flowing movement and storytelling. Junior and Senior Contemporary Teams.' },
    { name:'Lyrical', ages:'Ages 8 & up', blurb:'Ballet’s grace with jazz’s freedom — musicality, control and real emotion on stage.' },
    { name:'Musical Theatre', ages:'Team · 7 & up', blurb:'For the Broadway-bound: jazz, tap and props to build big stage confidence.' },
    { name:'Irish Step', ages:'Ages 5 & up', blurb:'Crisp, quick footwork in the Irish tradition, Friday afternoons.' }
  ],

  teachers: [
    { id:'nicole', name:'Miss Nicole', role:'Director & Instructor', years:'35+ years teaching', fav:'Clogging & Jazz', homegrown:false,
      line:'Opened her studio at 18. Has taken Steppin’ Out dancers to Disney, Universal, Dollywood, the Cherry Blossom Parade in DC, NYC, Quebec City and Nashville.' },
    { id:'cheryl', name:'Miss Cheryl', role:'Instructor', years:'35 years teaching', fav:'Jazz',
      line:'Has taught for the OOB school system, RSU 23, OOB Dance Company, UNE and many local preschools.' },
    { id:'lisa', name:'Miss Lisa', role:'Instructor', years:'25 years teaching', fav:'Jazz & Clogging', homegrown:true,
      line:'Dancing since age 2 — and 34 of those years have been at Steppin’ Out.' },
    { id:'michelle', name:'Miss Michelle', role:'Adult Hip Hop', years:'30+ years teaching', fav:'Hip Hop',
      line:'Started in ballet, tap, jazz and clogging, then expanded into street funk and hip hop — now leading Adult Hip Hop.' },
    { id:'maeghan', name:'Miss Maeghan', role:'Dance Instructor', years:'20 years teaching', fav:'Hip Hop & Clogging',
      line:'Nine years as an assistant before 20 years leading her own classes and teams.' },
    { id:'sarah', name:'Miss Sarah', role:'Ballet, Pointe, Lyrical, Acro & Musical Theatre', years:'10 years teaching', fav:'Lyrical & Acro',
      line:'Grew up a competitive dancer in Ohio, training in nearly every style.' },
    { id:'dani-rae', name:'Miss Dani-Rae', role:'Small Fry, Ballet, Hip Hop & Tap', years:'4th year teaching', fav:'Clogging & Jazz', homegrown:true,
      line:'Started at Steppin’ Out in first grade and fell in love with the community.' },
    { id:'hope', name:'Miss Hope', role:'Teacher', years:'1st year teaching · 9 assisting', fav:'Contemporary, Hip Hop & Clogging', homegrown:true,
      line:'Started here at age 2 — 20 years at the studio, and has performed at Walt Disney World and Universal Orlando.' },
    { id:'taylor', name:'Miss Taylor', role:'Instructor', years:'1st official year', homegrown:true,
      line:'Started her dance journey at 2 years old right here, and grew from regular classes into competitive dance.' },
    { id:'kylie', name:'Miss Kylie', role:'Teacher', years:'1st year teaching', fav:'Hip Hop & Clogging',
      line:'Dancing since age 2 and a veteran of many competitions.' }
  ],

  closures: [
    ['Oct 12, 2026', 'Indigenous Peoples Day'],
    ['Nov 11, 2026', 'Veterans Day'],
    ['Nov 25 – 29, 2026', 'Thanksgiving Break'],
    ['Dec 21, 2026 – Jan 3, 2027', 'Christmas Break'],
    ['Jan 18, 2027', 'MLK Day']
  ],

  hours: [ ['Mon','Closed'], ['Tue','5:30 – 7:30 pm'], ['Wed','6:00 – 7:30 pm'], ['Thu','Closed'], ['Fri','Closed'], ['Sat','9:00 – 11:00 am'], ['Sun','Closed'] ]
};
