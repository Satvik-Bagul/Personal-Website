export const PROJECTS = [
  {
    id: 'blueprint',
    title: 'Predictive Project Blueprint',
    tags: ['AI', 'Data', 'Python'],
    tech: ['Python', 'Machine Learning', 'React', 'FastAPI'],
    desc: 'An AI-driven predictive modeling environment designed to scope and structure engineering projects autonomously.',
    longDesc: 'Built for Hack(Her)-413, this full-stack SaaS platform generates AI-powered project execution blueprints. It integrates complex Work Breakdown Structures (WBS), timeline forecasting, budget modeling, and risk analysis using probability-weighted scoring.',
    features: ['Generates interactive GANTT charts', 'Risk heatmaps and Monte Carlo simulations for accurate confidence intervals that takes both budget and time constraints into consideration', 'Automated PDF export functionality'],
    challenges: ['Implementing 1000-loop Monte Carlo simulations for accurate p10/p50/p90 confidence intervals.', 'Integrating multi-agent NLP models via Google Gemini to reliably structure unstructured user inputs.'],
    achievements: ['Successful utilization of HTML and CSS language for design implementation', 'Integrated multi-agent NLP models'],
    link: 'https://devpost.com/software/hip-hop-webite'
  },
  {
    id: 'noise',
    title: 'Noise',
    tags: ['Creative Tech', 'Full Stack'],
    tech: ['Ableton Live', 'TouchDesigner', 'MiDiLoop', 'Python'],
    desc: 'An experimental, interactive audio-visual platform that translates user input into dynamic holographic geometries.',
    longDesc: 'Built for YHack 2026. Noise is a real-time spatial audio interface. It uses TouchDesigner to translate webcam-based hand-tracking gestures into dynamic music modulation, merging the physical and digital creative spaces.',
    features: ['Real-time physical gesture tracking mapping to Auto Filter frequencies', 'Spatial audio interface', 'Live audio manipulation'],
    challenges: ['Engineered a custom signal processing pipeline using Math and Lag CHOPs to isolate pinch gestures.', 'Applying temporal smoothing to eliminate webcam tracking jitter.','Ensuring real-time audio processing with minimal latency for live performance.','Integrating TouchDesigner with Ableton Live via MiDiLoop for seamless audio-visual synchronization.'],
    achievements: ['Real-time 60fps audio reactive graphics', 'Integrated visual environment with Ableton Live 12 via TDAbleton'],
    link: 'https://devpost.com/software/noise-aulg71'
  },
  {
    id: 'serenity',
    title: 'SimplySerenity',
    tags: ['Full Stack', 'AI'],
    tech: ['Java', 'HTML/CSS', 'ElevenLabs API'],
    desc: 'Mental wellness ecosystem featuring adaptive AI companions that respond to sentiment analysis of user inputs.',
    longDesc: 'Built for Hack Brown. SimplySerenity is an AI-powered virtual therapist designed to provide real-time, empathetic mental health support. It bridges text and voice interactions for a holistic user experience.',
    features: ['Verbal interactions using ElevenLabs', 'Google Gemini integration for empathetic reasoning', 'End-to-end encrypted journal', 'Stripe API payment solutions'],
    challenges: ['Ensuring latency for voice-to-text-to-voice pipeline remained under 800ms for natural conversation.', 'Structuring the AI prompt engineering to ensure safe, ethical empathetic responses.'],
    achievements: ['Successful integration of ElevenLabs and Stripe API to create a end-to-end, ready to deploy solution', 'Real-time conversational memory'],
    link: 'https://simplyserenity.tech'
  },
  {
    id: 'scraper',
    title: 'Automated Financial Scraper',
    tags: ['Data', 'Python'],
    tech: ['Python', 'Streamlit', 'YFinance'],
    desc: 'High-frequency data extraction tool designed to aggregate and normalize unstructured market data across the web.',
    longDesc: 'A personal project designed as an automated financial analytics tool. It extracts stock data and generates actionable metrics to aid in algorithmic or personal trading strategies.',
    features: ['Generates moving averages (buy/sell signals)', 'Calculates volatility and annualized performance', 'Data visualization using matplotlib'],
    challenges: ['Handling rate limits and dynamic DOM changes while compiling data into structured CSV/Pandas frames.'],
    achievements: ['First successful experience with Ui/UX design through Streamlit', 'Implemented a robust data extraction pipeline using YFinance and Pandas for real-time financial analysis.'],
    link: 'https://github.com/Satvik-Bagul/Financial_Scraper_Menu'
  }
];

export const SKILLS = [ "Python", "SQL", "React", "FastAPI", "MongoDB", "Git", "Machine Learning", "HTML/CSS", "TouchDesigner", "Java" ];

export const EXPERIENCE = [
  { id: 5, role: "Vice-Captain Jupiter House", org: "Our Own High School", desc: "Led the Jupiter House team in inter-house competitions, fostering teamwork and school spirit.", year: "2023 - 2024" },
  { id: 2, role: "Partnerships Div & Tutor", org: "Instilt Educate", desc: "Cultivated partnerships with 10+ educational institutions and key organizations (British Council, Ministry of Education Ampara).", year: "2023 - 2025" },
  { id: 4, role: "Summer Trainee", org: "BYK Paint and Additives", desc: "Gained hands-on experience in industrial processes, quality control, and operational workflows.", year: "2023" },
  { id: 3, role: "Student Council President", org: "Our Own High School", desc: "Provided strategic leadership to the student body, led council initiatives, and served as the primary liaison between students and school administration.", year: "2024 - 2025" }, 
  { id: 1, role: "National & Professional Champions", org: "ADNOC YasInSchools", desc: "Marketing and Financial manager @OffCentre OOW.", year: "2024" },

  

];