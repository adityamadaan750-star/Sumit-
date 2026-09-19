import { PhotoSlot, Pillar, TimelineEvent } from '../types';
import emblemImg from '../assets/images/emblem_gold_seal_1789758288772.jpg';
import heroBgImg from '../assets/images/slot2_national_vision_1789804176854.jpg';
import socialImg from '../assets/images/social_empowerment_1789758338495.jpg';
import enterpriseImg from '../assets/images/business_enterprise_1789758363578.jpg';
import slot1PeoplesChampion from '../assets/images/slot1_peoples_champion_1789804162493.jpg';
import slot2NationalVision from '../assets/images/slot2_national_vision_1789804176854.jpg';
import slot3DistinguishedAdvocate from '../assets/images/slot3_distinguished_advocate_1789804194248.jpg';
import slot4HeritageHumility from '../assets/images/slot4_heritage_humility_1789804210470.jpg';
import slot5TeamSumit from '../assets/images/slot5_team_sumit_rally_1789804242951.jpg';

export const ASSET_IMAGES = {
  emblem: emblemImg,
  heroBg: heroBgImg,
  social: socialImg,
  enterprise: enterpriseImg,
  slot1: slot1PeoplesChampion,
  slot2: slot2NationalVision,
  slot3: slot3DistinguishedAdvocate,
  slot4: slot4HeritageHumility,
  slot5: slot5TeamSumit,
};

export const INITIAL_PHOTO_SLOTS: PhotoSlot[] = [
  {
    id: 'photo-1',
    keyName: 'photo_peoples_champion',
    originalFileName: 'file_000000009b8c8211b76fdd34984ee255.png',
    title: {
      en: "People's Champion (Formal 3-Piece)",
      hi: 'जननायक एवं औपचारिक नेतृत्व स्वरूप',
    },
    roleCategory: 'Hero',
    description: {
      en: 'Executive 3-piece suit portrait with hand resting under chin, radiating confidence and intellectual authority.',
      hi: 'थ्री-पीस सूट व टाई में आत्मविश्वास और बौद्धिक नेतृत्व को समर्पित गरिमामयी चित्र।',
    },
    suggestedSection: 'Hero Header / Primary Identification',
    defaultSrc: slot1PeoplesChampion,
  },
  {
    id: 'photo-2',
    keyName: 'photo_heritage_humility',
    originalFileName: 'FB_IMG_1789495951967.jpg',
    title: {
      en: 'Heritage & Humility (Traditional Kurta & Waistcoat)',
      hi: 'संस्कृति व समर्पण - पारंपरिक स्वरूप',
    },
    roleCategory: 'Social',
    description: {
      en: 'Charismatic portrait in black sleeveless bandhgala waistcoat and white kurta with traditional ring, expressing warm public respect.',
      hi: 'काली सदरी व सफेद कुर्ते में जनता का आत्मीय अभिनंदन एवं संस्कारों की परिपक्व छवि।',
    },
    suggestedSection: 'Heritage & Humility / Lineage Section',
    defaultSrc: slot4HeritageHumility,
  },
  {
    id: 'photo-3',
    keyName: 'photo_distinguished_advocate',
    originalFileName: '1789799959594.png',
    title: {
      en: 'Distinguished Advocate (High Court Chamber)',
      hi: 'विधिक गरिमा एवं उच्च न्यायालय अधिवक्ता स्वरूप',
    },
    roleCategory: 'Advocate',
    description: {
      en: 'Poised authoritative advocate in courtroom legal robes and white bands, holding official case briefs in law chamber.',
      hi: 'अधिवक्ता कोट एवं विधिक नेक-बैंड्स में केस फाइलों के साथ न्याय के सजग प्रहरी का गौरवमयी स्वरूप।',
    },
    suggestedSection: 'Advocate & Constitutional Law Section',
    defaultSrc: slot3DistinguishedAdvocate,
  },
  {
    id: 'photo-4',
    keyName: 'photo_national_vision',
    originalFileName: 'file_0000000001208211ad372b37af8aa484.png',
    title: {
      en: 'National Vision & Statesmanship (Parliament & Holy Horizon)',
      hi: 'राष्ट्र निर्माण - संसद व त्रिमूर्ति पैनोरमा',
    },
    roleCategory: 'Hero',
    description: {
      en: 'Cinematic widescreen tripartite banner featuring Parliament House, sacred holy river, and golden sunrise sky.',
      hi: 'संसद भवन, पावन नदी और स्वर्णिम किरणों के बीच राष्ट्र निर्माण एवं त्रि-आयामी संकल्प।',
    },
    suggestedSection: 'Wide Hero Banner / Header Background',
    defaultSrc: slot2NationalVision,
  },
  {
    id: 'photo-5',
    keyName: 'photo_team_sumit_rally',
    originalFileName: 'file_00000000adb88211937171e7778b41ec.png',
    title: {
      en: 'Team Sumit Chaudhary (टीम सुमित चौधरी)',
      hi: 'टीम सुमित चौधरी - जनक्रांति एवं जनसैलाब',
    },
    roleCategory: 'Politician',
    description: {
      en: 'Mass public welfare rally with sea of thousands of enthusiastic grassroots supporters under golden sunrise.',
      hi: 'स्वर्णिम अक्षरों में अंकित "टीम सुमित चौधरी" एवं हजारों समर्थकों व जनता का उमड़ता जनसैलाब।',
    },
    suggestedSection: 'Political Movement & Mass Rallies Section',
    defaultSrc: slot5TeamSumit,
  },
];

export const PILLARS_DATA: Pillar[] = [
  {
    id: 'pillar-advocate',
    key: 'advocate',
    title: {
      en: 'Distinguished Advocate',
      hi: 'न्याय के सजग प्रहरी - अधिवक्ता',
    },
    subtitle: {
      en: 'Championing Constitutional Justice & Human Rights',
      hi: 'संवैधानिक मर्यादा, निष्पक्ष न्याय व जनहित की रक्षा',
    },
    quote: {
      en: 'Justice is not merely a legal clause; it is the fundamental heartbeat of a civilized nation.',
      hi: 'न्याय केवल एक कानूनी धारा नहीं, अपितु हर पीड़ित नागरिक का जन्मसिद्ध संवैधानिक अधिकार है।',
    },
    description: {
      en: 'Adv. Sumit Chaudhary stands in the courts with an unwavering commitment to the Indian Constitution. Specializing in Constitutional law, civil liberties, corporate ethics, and public interest litigation, he provides fearless representation to citizens who need justice the most.',
      hi: 'अधिवक्ता सुमित चौधरी भारतीय संविधान के रक्षक के रूप में अदालतों में निर्भीक आवाज हैं। जनहित याचिकाओं (PIL), नागरिक अधिकारों और समाज के अंतिम व्यक्ति तक त्वरित व सुलभ न्याय पहुंचाने के लिए वे निरंतर तत्पर रहते हैं।',
    },
    highlights: {
      en: [
        'Free legal aid cells established for impoverished families and rural litigants',
        'Fearless advocacy in High Courts and District Judicial Tribunals',
        'Expert counsel on corporate governance, intellectual property & property rights',
        'Constitutional awareness workshops for youth and law aspirants',
      ],
      hi: [
        'आर्थिक रूप से निर्बल परिवारों के लिए निशुल्क कानूनी सहायता शिविरों का संचालन',
        'उच्च न्यायालय एवं जिला न्यायालयों में निष्पक्ष व प्रभावी विधिक प्रतिनिधित्व',
        'नागरिक एवं मानवाधिकारों के संरक्षण हेतु ऐतिहासिक जनहित याचिकाएं',
        'युवाओं व कानून के विद्यार्थियों हेतु संविधान साक्षरता व्याख्यानमाला',
      ],
    },
    stats: [
      { value: '1,450+', label: { en: 'Cases Represented', hi: 'सुलझाए गए मुकदमे' } },
      { value: '3,200+', label: { en: 'Pro-Bono Legal Aids', hi: 'निशुल्क विधिक परामर्श' } },
      { value: '98%', label: { en: 'Ethical Integrity Rating', hi: 'विश्वसनीयता व निष्ठा' } },
    ],
    iconName: 'Scale',
    photoSlotId: 'photo-3',
    accentColor: 'from-amber-500 to-yellow-600',
  },
  {
    id: 'pillar-politician',
    key: 'politician',
    title: {
      en: 'Dynamic Political Leader',
      hi: 'युवा जननायक - राजनीति व नेतृत्व',
    },
    subtitle: {
      en: 'Architect of "Team Sumit Chaudhary" - Voice of the Grassroots',
      hi: 'टीम सुमित चौधरी के प्रेरणास्रोत - जन-आकांक्षाओं के प्रखर वाहक',
    },
    quote: {
      en: 'Politics is sacred when practiced as an instrument of national service and public upliftment.',
      hi: 'राजनीति सत्ता का साधन नहीं, अपितु समाज में सकारात्मक परिवर्तन लाने का पावन माध्यम है।',
    },
    description: {
      en: 'As a dynamic youth politician, Adv. Sumit Chaudhary has mobilized thousands of grassroots volunteers under the banner of "Team Sumit Chaudhary". His vision focuses on good governance, youth employment, rural infrastructure, and eradicating corruption.',
      hi: 'जन-जन के चहेते नेता के रूप में सुमित चौधरी ने युवाओं की असीम ऊर्जा को रचनात्मक दिशा दी है। उनके द्वारा संचालित "टीम सुमित चौधरी" हर गांव और वार्ड में जनता की समस्याओं के निवारण हेतु 24x7 सक्रिय रहती है।',
    },
    highlights: {
      en: [
        'Spearheaded historic youth mobilization rallies demanding regional infrastructure',
        'Leader of "Team Sumit Chaudhary" volunteer force active across rural & urban blocks',
        'Relentless advocate for farmer rights, modern agricultural credit, and rural roads',
        'Zero-tolerance stand on administrative delays and citizen grievances',
      ],
      hi: [
        'क्षेत्रीय विकास, सड़क व पानी की समस्याओं को लेकर ऐतिहासिक जन-आंदोलनों का नेतृत्व',
        'हर वर्ग के युवाओं को जोड़कर "टीम सुमित चौधरी" के माध्यम से जनसेवा का महाअभियान',
        'किसानों, मजदूरों व छोटे व्यापारियों के अधिकारों की पुरजोर पैरवी',
        'प्रशासनिक जवाबदेही व जनहितैषी नीतियों के क्रियान्वयन हेतु सतत संघर्ष',
      ],
    },
    stats: [
      { value: '150,000+', label: { en: 'Team Supporters', hi: 'समर्पित कार्यकर्ता व समर्थक' } },
      { value: '120+', label: { en: 'Public Rallies & Sabhas', hi: 'विशाल जनसभाएं व पदयात्राएं' } },
      { value: '45+', label: { en: 'Welfare Demands Enacted', hi: 'सफल जनहित अभियान' } },
    ],
    iconName: 'Landmark',
    photoSlotId: 'photo-5',
    accentColor: 'from-blue-600 to-indigo-700',
  },
  {
    id: 'pillar-businessman',
    key: 'businessman',
    title: {
      en: 'Visionary Businessman',
      hi: 'उद्यमी व उद्योगपति - आत्मनिर्भर भारत',
    },
    subtitle: {
      en: 'Pioneering Commercial Enterprise & Job Generation',
      hi: 'व्यापारिक नवोन्मेष, उद्योग विस्तार एवं रोजगार सृजन',
    },
    quote: {
      en: 'True economic strength emerges when enterprise creates dignity and sustainable livelihood for all.',
      hi: 'सच्चा व्यापार वही है जो केवल लाभ न कमाए, बल्कि हजारों परिवारों को सम्मानजनक रोजगार दे।',
    },
    description: {
      en: 'Combining sharp legal intellect with strategic entrepreneurial vision, Adv. Sumit Chaudhary has built and mentored flourishing commercial enterprises. He advocates for local industry, domestic manufacturing, and technology-driven commerce that creates local jobs.',
      hi: 'एक सफल उद्यमी के रूप में उन्होंने उद्योग और व्यापार जगत में नए मानक स्थापित किए हैं। वे स्थानीय प्रतिभाओं को रोजगार के अवसर प्रदान करने और युवाओं में स्वरोजगार व स्टार्टअप संस्कृति को बढ़ावा देने में अग्रणी हैं।',
    },
    highlights: {
      en: [
        'Diversified ventures spanning real estate, logistics, commercial infrastructure and services',
        'Mentor to dozens of grassroots youth entrepreneurs and MSME owners',
        'Promoter of ethical commerce and fair corporate worker benefits',
        'Spearheading local skill development institutes tied to industry placement',
      ],
      hi: [
        'रियल एस्टेट, लॉजिस्टिक्स व कमर्शियल उद्यमों में पारदर्शी व उत्कृष्ट प्रबंधन',
        'युवा उद्यमियों व स्टार्टअप्स को मार्गदर्शन व वित्तीय परामर्श',
        'श्रमिक कल्याण, सुरक्षा एवं निष्पक्ष व्यापारिक आचार संहिता का कड़ाई से पालन',
        'औद्योगिक मांग के अनुसार युवाओं के कौशल विकास हेतु प्रशिक्षण केंद्र',
      ],
    },
    stats: [
      { value: '850+', label: { en: 'Direct Jobs Created', hi: 'प्रत्यक्ष रोजगार के अवसर' } },
      { value: '35+', label: { en: 'Enterprises Mentored', hi: 'उद्यमियों को प्रोत्साहन' } },
      { value: '100%', label: { en: 'Ethical Compliance', hi: 'पारदर्शी व स्वच्छ व्यापार' } },
    ],
    iconName: 'Briefcase',
    photoSlotId: 'photo-1',
    accentColor: 'from-emerald-600 to-teal-700',
  },
  {
    id: 'pillar-social',
    key: 'social_worker',
    title: {
      en: 'Selfless Social Worker',
      hi: 'समर्पित समाजसेवी - जनसेवा ही प्रभु सेवा',
    },
    subtitle: {
      en: 'Transforming Lives through Education, Health & Compassion',
      hi: 'शिक्षा, स्वास्थ्य एवं असहायों की सेवा में सतत समर्पित जीवन',
    },
    quote: {
      en: 'Service to mankind is the highest prayer; no tears should go unnoticed in our community.',
      hi: 'मानव सेवा ही सबसे बड़ा धर्म है; किसी भी असहाय की आंखों में आंसू न रहें, यही हमारा संकल्प है।',
    },
    description: {
      en: 'A philanthropist at heart, Adv. Sumit Chaudhary actively sponsors education for underprivileged children, organizes mega blood donation drives, health checkup camps, and community weddings. During every crisis, he and his team are first to arrive on the ground.',
      hi: 'समाजसेवा उनके जीवन का मूलमंत्र है। निर्धन बेटियों के विवाह, अनाथ बच्चों की स्कूली शिक्षा, गंभीर रोगियों हेतु निशुल्क चिकित्सा सहायता और आपदा के समय पीड़ितों को तत्काल राहत पहुंचाना उनकी दिनचर्या का अभिन्न अंग है।',
    },
    highlights: {
      en: [
        'Sponsorship of education and uniforms for 1,200+ underprivileged students annually',
        'Quarterly mega blood donation camps collecting thousands of life-saving units',
        'Mass community marriage ceremonies (Kanyadaan) for impoverished daughters',
        'Emergency food and medical relief battalions during environmental crises',
      ],
      hi: [
        'प्रतिवर्ष 1,200 से अधिक निर्धन बच्चों की स्कूल फीस, किताबें व यूनिफॉर्म की व्यवस्था',
        'नियमित विशाल रक्तदान शिविरों का आयोजन - हजारों यूनिट रक्त संकलन',
        'गरीब कन्याओं के सामूहिक विवाह समारोहों में हर संभव सहयोग व कन्यादान',
        'आपदा व ठंड के मौसम में जरूरतमंदों को निशुल्क कंबल, राशन व दवाइयों का वितरण',
      ],
    },
    stats: [
      { value: '25,000+', label: { en: 'Families Benefitted', hi: 'लाभान्वित जरूरतमंद परिवार' } },
      { value: '180+', label: { en: 'Free Medical Camps', hi: 'निशुल्क स्वास्थ्य व नेत्र जांच शिविर' } },
      { value: '5,000+', label: { en: 'Blood Units Donated', hi: 'एकत्रित जीवनदायी रक्त यूनिट' } },
    ],
    iconName: 'HeartHandshake',
    photoSlotId: 'photo-2',
    accentColor: 'from-rose-600 to-pink-700',
  },
];

export const LINEAGE_DATA = {
  father: 'Mr. Mahipal Singh',
  fatherTitle: {
    en: 'Father & Guiding Pillar: Mr. Mahipal Singh',
    hi: 'पूज्य पिता एवं प्रेरणास्रोत: श्री महीपाल सिंह जी',
  },
  son: 'Adv. Sumit Chaudhary',
  values: {
    en: 'Deeply anchored in the timeless values of hard work, uncompromising truth, and deep reverence for the motherland instilled by his father, Mr. Mahipal Singh. Every action of Adv. Sumit Chaudhary carries forward a legacy of dignity, courage, and selfless service to the nation.',
    hi: 'पूज्य पिता श्री महीपाल सिंह जी द्वारा रोपे गए सत्य, परिश्रम, संस्कार और राष्ट्रभक्ति के उच्च आदर्शों पर अग्रसर। अधिवक्ता सुमित चौधरी का प्रत्येक संकल्प समाज के सम्मान, स्वाभिमान और न्याय की रक्षा के लिए समर्पित है।',
  },
};

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    year: 'Roots & Foundations',
    title: {
      en: 'Values from Mr. Mahipal Singh & Student Leadership',
      hi: 'पारिवारिक संस्कार एवं छात्र राजनीति में नेतृत्व',
    },
    category: {
      en: 'Lineage & Education',
      hi: 'संस्कार व विद्या',
    },
    description: {
      en: 'Grew up learning ethics, discipline, and community compassion from father Mr. Mahipal Singh. Displayed natural oratory skills and defended student rights in college.',
      hi: 'पिता श्री महीपाल सिंह जी से मिले अनुशासन, ईमानदारी व सेवाभाव के गुण। कॉलेज जीवन से ही छात्र अधिकारों के लिए अग्रणी संघर्ष।',
    },
  },
  {
    year: 'Legal Excellence',
    title: {
      en: 'Bar Council Enrollment & Landmark Advocacy',
      hi: 'बार काउंसिल में वकालत व संविधान की रक्षा',
    },
    category: {
      en: 'Advocate',
      hi: 'विधि व न्याय',
    },
    description: {
      en: 'Earned degree in Law and entered the courtrooms. Dedicated his practice to constitutional law and championing the voice of oppressed citizens through pro-bono aid.',
      hi: 'कानून की शिक्षा पूर्ण कर न्याय के क्षेत्र में प्रवेश। निर्बलों को निशुल्क विधिक सहायता और संविधान की रक्षा का अटूट संकल्प।',
    },
  },
  {
    year: 'Enterprise & Growth',
    title: {
      en: 'Commercial Enterprise & Job Creation',
      hi: 'उद्यमिता व व्यापक रोजगार सृजन',
    },
    category: {
      en: 'Businessman',
      hi: 'व्यापार व उद्योग',
    },
    description: {
      en: 'Established flourishing business ventures across key sectors, creating hundreds of direct employment opportunities for local youth and fostering MSME development.',
      hi: 'विभिन्न व्यावसायिक उपक्रमों की स्थापना। सैकड़ों युवाओं को रोजगार और स्थानीय अर्थव्यवस्था को सशक्त करने का सफल प्रयास।',
    },
  },
  {
    year: 'Mass Movement',
    title: {
      en: 'Founding of "Team Sumit Chaudhary"',
      hi: '"टीम सुमित चौधरी" का गठन व जनक्रांति',
    },
    category: {
      en: 'Politician',
      hi: 'राजनीति व जनसेवा',
    },
    description: {
      en: 'United tens of thousands of energetic youths, farmers, and social workers under the movement "Team Sumit Chaudhary", leading massive public interest demonstrations.',
      hi: 'लाखों युवाओं व जनमानस को संगठित कर "टीम सुमित चौधरी" के माध्यम से बुनियादी जनसमस्याओं के समाधान हेतु प्रचंड संघर्ष।',
    },
  },
  {
    year: 'Philanthropic Horizon',
    title: {
      en: 'Universal Social Care Foundation',
      hi: 'समग्र समाज उत्थान व लोक कल्याण',
    },
    category: {
      en: 'Social Work',
      hi: 'मानव सेवा',
    },
    description: {
      en: 'Expansive social initiatives: regular health camps, youth sporting tournaments, education grants for poor daughters, and 24x7 public grievance redressing.',
      hi: 'स्वास्थ्य, शिक्षा, कन्यादान और ग्रामीण विकास की अनगिनत योजनाओं के माध्यम से हर पीड़ित व वंचित परिवार तक सीधी मदद का प्रवाह।',
    },
  },
];

export const OFFICE_CONTACT = {
  name: 'Adv. Sumit Chaudhary',
  fatherName: 'S/O Mr. Mahipal Singh',
  chamberAddress: {
    en: 'Mahipal Kothi, Azad Nagar, Roorkee, Uttarakhand - 247667',
    hi: 'महिपाल कोठी, आजाद नगर, रुड़की, उत्तराखंड - 247667',
  },
  publicOfficeAddress: {
    en: 'Mahipal Kothi, Azad Nagar, Roorkee, Uttarakhand - 247667',
    hi: 'महिपाल कोठी, आजाद नगर, रुड़की, उत्तराखंड - 247667',
  },
  helpline: '+91 99973 17757',
  email: 'office@advsumitchaudhary.in',
  timings: {
    en: 'Public Meet: 09:00 AM - 01:00 PM | Chamber Consultation: 04:00 PM - 08:00 PM',
    hi: 'जनसुनवाई: प्रातः 09:00 से दोपहर 01:00 बजे | विधिक परामर्श: सायं 04:00 से रात्रि 08:00 बजे',
  },
};

export const DEVELOPER_INFO = {
  name: 'Aditya Madaan',
  role: {
    en: 'Digital Architect & Full-Stack Web Developer',
    hi: 'डिजिटल आर्किटेक्ट एवं वेबसाइट निर्माता',
  },
  phone: '+91 74660 88910',
  phoneRaw: '7466088910',
  whatsappLink: 'https://wa.me/917466088910',
  email: 'adityamadaan750@gmail.com',
  queryNote: {
    en: 'For any technical query, portal updates, or direct appointment coordination, connect with Aditya Madaan.',
    hi: 'किसी भी क्वेरी, तकनीकी सहायता अथवा अपॉइंटमेंट समन्वय हेतु संपर्क करें: आदित्य मदान',
  },
  creditBadge: {
    en: 'Designed & Developed by Aditya Madaan',
    hi: 'वेबसाइट परिकल्पना एवं निर्माण: आदित्य मदान',
  },
  detailedStatement: {
    en: 'Official web application engineered and crafted with precision by Aditya Madaan. For VIP appointments, technical inquiries, or digital management, please reach out directly.',
    hi: 'इस आधिकारिक डिजिटल पोर्टल का संपूर्ण सृजन, डिजाइन एवं तकनीकी विकास आदित्य मदान द्वारा किया गया है। किसी भी प्रकार के अपॉइंटमेंट, पूछताछ या पोर्टल प्रबंधन के लिए सीधे संपर्क कर सकते हैं।',
  },
};

