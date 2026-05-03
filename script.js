// ---------------------------
// Navigation logic (multi-page feel using sections)
// ---------------------------
const pages = document.querySelectorAll('.page');
const navLinks = document.querySelectorAll('[data-page]');
const mainNav = document.getElementById('mainNav');
const menuToggle = document.getElementById('menuToggle');
const languageSelect = document.getElementById('languageSelect');

function showPage(pageId) {
  pages.forEach((page) => {
    page.classList.toggle('active', page.id === pageId);
  });

  navLinks.forEach((link) => {
    const isActive = link.dataset.page === pageId;
    link.classList.toggle('active', isActive);
    if (isActive) {
      link.setAttribute('aria-current', 'page');
    } else {
      link.removeAttribute('aria-current');
    }
  });

  mainNav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
}

navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    const pageId = link.dataset.page;
    if (!pageId) return;

    event.preventDefault();
    showPage(pageId);
    window.location.hash = pageId;
  });
});

menuToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

const initialHash = window.location.hash.replace('#', '');
if (initialHash && document.getElementById(initialHash)) {
  showPage(initialHash);
} else {
  showPage('home');
}

// ---------------------------
// Home image banner slider (changes every 4 seconds)
// ---------------------------
const homeBannerSlides = document.querySelectorAll('.home-banner-slide');
let homeBannerIndex = 0;

if (homeBannerSlides.length > 0) {
  setInterval(() => {
    homeBannerSlides[homeBannerIndex].classList.remove('active');
    homeBannerIndex = (homeBannerIndex + 1) % homeBannerSlides.length;
    homeBannerSlides[homeBannerIndex].classList.add('active');
  }, 4000);
}

// ---------------------------
// Bilingual language content
// ---------------------------
const translations = {
  en: {
    meta_title: 'Robotics Learning Platform',
    email_label: 'Email:',
    lang_label: 'Language',
    lang_option_en: 'English',
    lang_option_hi: 'Hindi',
    brand_title: 'Robotics for Students',
    nav_home: 'Home',
    nav_about: 'About',
    nav_modules: 'Project Modules',
    nav_innovation: 'New Innovation',
    nav_resources: 'Resources',
    nav_notices: 'Notices',
    nav_contact: 'Contact',
    home_tag: 'Welcome Future Engineers',
    home_title: 'Robotics Learning Platform',
    home_intro: 'Learn robotics step by step with practical activities, exciting projects, and innovation challenges designed for school students.',
    home_cta: 'Explore Project Modules',
    home_why_title: 'Why Robotics?',
    home_why_1: 'Build creativity and problem-solving skills',
    home_why_2: 'Understand coding, electronics, and AI basics',
    home_why_3: 'Prepare for future careers in technology',
    home_featured_title: 'Featured Projects',
    feat_1_title: 'Line Follower Robot',
    feat_1_desc: 'Use IR sensors and a basic motor driver to create a smart robot that follows a track.',
    feat_2_title: 'Obstacle Avoiding Bot',
    feat_2_desc: 'Learn distance sensing using ultrasonic modules and automate movement decisions.',
    feat_3_title: 'Voice-Controlled Rover',
    feat_3_desc: 'Combine Bluetooth communication with mobile commands for hands-free robot control.',
    about_title: 'About the Platform',
    about_intro: 'This platform helps students learn robotics through guided lessons, hands-on projects, and innovation-focused activities. It is designed to make technology education simple, practical, and fun.',
    teacher_profile_title: 'Teacher Profile',
    teacher_name_html: '<strong>Name:</strong> Pramod Kumar',
    teacher_role_html: '<strong>Role:</strong> Robotics Educator',
    teacher_desc: 'Passionate about STEM education and mentoring students to build real-world robotics projects.',
    mission_vision_title: 'Mission & Vision',
    mission_html: '<strong>Mission:</strong> Make robotics education accessible to every school student.',
    vision_html: '<strong>Vision:</strong> Build a generation of creative innovators and responsible technologists.',
    modules_title: 'Project Modules',
    modules_beginner: 'Beginner',
    modules_intermediate: 'Intermediate',
    modules_advanced: 'Advanced',
    mod_b_1_title: 'LED Blinking Circuit',
    mod_b_1_desc: 'Basic electronics and Arduino setup.',
    mod_b_2_title: 'Mini Traffic Light',
    mod_b_2_desc: 'Understand timing and digital outputs.',
    mod_b_3_title: 'Servo Sweep Demo',
    mod_b_3_desc: 'Control motion with simple code logic.',
    mod_i_1_title: 'Line Follower',
    mod_i_1_desc: 'Sensor calibration and motor control basics.',
    mod_i_2_title: 'Bluetooth Car',
    mod_i_2_desc: 'Mobile-app control and wireless communication.',
    mod_i_3_title: 'Smart Dustbin',
    mod_i_3_desc: 'Auto-open mechanism using ultrasonic sensors.',
    mod_a_1_title: 'Gesture Robot',
    mod_a_1_desc: 'Use accelerometer input to control movement.',
    mod_a_2_title: 'Vision Bot (Concept)',
    mod_a_2_desc: 'Introduce camera-based object detection idea.',
    mod_a_3_title: 'IoT Surveillance Bot',
    mod_a_3_desc: 'Monitor and control robot over the internet.',
    innovation_title: 'New Innovation',
    innov_1_title: 'Solar Campus Cleaner',
    innov_1_desc: 'A solar-powered robot concept built by students to collect dry leaves from school gardens.',
    innov_2_title: 'Smart Attendance Bot',
    innov_2_desc: 'Prototype using QR scanning and voice output for morning attendance support.',
    innov_3_title: 'Flood Alert Rover',
    innov_3_desc: 'Low-cost rover model that checks water level and sends warning messages.',
    resources_title: 'Resources',
    res_1_html: '<strong>PDF:</strong> Introduction to Arduino and Sensors',
    res_2_html: '<strong>PDF:</strong> Beginner Robotics Circuit Handbook',
    res_3_html: '<strong>Video:</strong> Robotics Basics for School Students',
    res_4_html: '<strong>Video:</strong> Building Your First Robot Car',
    res_5_html: '<strong>Link:</strong> <a href="https://www.arduino.cc/en/Guide" target="_blank" rel="noopener">Arduino Official Guide</a>',
    res_6_html: '<strong>Link:</strong> <a href="https://www.tinkercad.com/" target="_blank" rel="noopener">Tinkercad Simulator</a>',
    notices_title: 'Notices',
    notice_1: 'Workshop on Robot Assembly: 10 June 2026',
    notice_2: 'Last date for Innovation Project Submission: 18 June 2026',
    notice_3: 'Inter-School Robotics Challenge Registration Open',
    notice_4: 'New module videos uploaded in Resources section',
    contact_title: 'Contact',
    label_name: 'Name',
    label_email: 'Email',
    label_message: 'Message',
    ph_name: 'Enter your name',
    ph_email: 'Enter your email',
    ph_message: 'Type your message',
    send_btn: 'Send Message',
    admin_title: 'Simple Admin Panel Concept (Optional)',
    admin_desc: 'Admin can review submitted contact messages, update notices, and add new resources from a dashboard in a future version.',
    footer_copy: '© 2026 Pramod Kumar. All Rights Reserved.',
    err_name: 'Please enter at least 2 characters.',
    err_email: 'Please enter a valid email address.',
    err_message: 'Message should be at least 10 characters.',
    form_success: 'Thank you. Your message has been submitted successfully!'
  },
  hi: {
    meta_title: 'रोबोटिक्स लर्निंग प्लेटफॉर्म',
    email_label: 'ईमेल:',
    lang_label: 'भाषा',
    lang_option_en: 'English',
    lang_option_hi: 'हिन्दी',
    brand_title: 'छात्रों के लिए रोबोटिक्स',
    nav_home: 'होम',
    nav_about: 'परिचय',
    nav_modules: 'प्रोजेक्ट मॉड्यूल',
    nav_innovation: 'नई नवाचार',
    nav_resources: 'संसाधन',
    nav_notices: 'सूचनाएं',
    nav_contact: 'संपर्क',
    home_tag: 'भविष्य के इंजीनियरों का स्वागत है',
    home_title: 'रोबोटिक्स लर्निंग प्लेटफॉर्म',
    home_intro: 'स्कूल छात्रों के लिए तैयार व्यावहारिक गतिविधियों, रोमांचक प्रोजेक्ट्स और नवाचार चुनौतियों के साथ चरण-दर-चरण रोबोटिक्स सीखें।',
    home_cta: 'प्रोजेक्ट मॉड्यूल देखें',
    home_why_title: 'रोबोटिक्स क्यों?',
    home_why_1: 'रचनात्मकता और समस्या समाधान कौशल विकसित करें',
    home_why_2: 'कोडिंग, इलेक्ट्रॉनिक्स और AI की मूल बातें समझें',
    home_why_3: 'भविष्य की तकनीकी करियर के लिए तैयारी करें',
    home_featured_title: 'मुख्य प्रोजेक्ट्स',
    feat_1_title: 'लाइन फॉलोअर रोबोट',
    feat_1_desc: 'IR सेंसर और बेसिक मोटर ड्राइवर से ट्रैक फॉलो करने वाला स्मार्ट रोबोट बनाएं।',
    feat_2_title: 'ऑब्स्टेकल अवॉइडिंग बॉट',
    feat_2_desc: 'अल्ट्रासोनिक मॉड्यूल से दूरी मापना सीखें और स्वचालित मूवमेंट निर्णय लें।',
    feat_3_title: 'वॉइस-कंट्रोल्ड रोवर',
    feat_3_desc: 'हैंड्स-फ्री रोबोट कंट्रोल के लिए ब्लूटूथ और मोबाइल कमांड का उपयोग करें।',
    about_title: 'प्लेटफॉर्म के बारे में',
    about_intro: 'यह प्लेटफॉर्म छात्रों को गाइडेड लेसन, हैंड्स-ऑन प्रोजेक्ट्स और नवाचार आधारित गतिविधियों से रोबोटिक्स सीखने में मदद करता है। इसे तकनीकी शिक्षा को सरल, व्यावहारिक और रोचक बनाने के लिए तैयार किया गया है।',
    teacher_profile_title: 'शिक्षक प्रोफाइल',
    teacher_name_html: '<strong>नाम:</strong> Pramod Kumar',
    teacher_role_html: '<strong>भूमिका:</strong> रोबोटिक्स शिक्षक',
    teacher_desc: 'STEM शिक्षा के प्रति समर्पित और छात्रों को वास्तविक रोबोटिक्स प्रोजेक्ट बनाने में मार्गदर्शन करने वाले प्रशिक्षक।',
    mission_vision_title: 'मिशन और विजन',
    mission_html: '<strong>मिशन:</strong> हर स्कूल छात्र तक रोबोटिक्स शिक्षा पहुंचाना।',
    vision_html: '<strong>विजन:</strong> रचनात्मक नवप्रवर्तकों और जिम्मेदार तकनीकी विशेषज्ञों की पीढ़ी बनाना।',
    modules_title: 'प्रोजेक्ट मॉड्यूल',
    modules_beginner: 'शुरुआती',
    modules_intermediate: 'मध्यम स्तर',
    modules_advanced: 'उन्नत स्तर',
    mod_b_1_title: 'LED ब्लिंकिंग सर्किट',
    mod_b_1_desc: 'बेसिक इलेक्ट्रॉनिक्स और Arduino सेटअप।',
    mod_b_2_title: 'मिनी ट्रैफिक लाइट',
    mod_b_2_desc: 'टाइमिंग और डिजिटल आउटपुट समझें।',
    mod_b_3_title: 'सर्वो स्वीप डेमो',
    mod_b_3_desc: 'सरल कोड लॉजिक से मोशन कंट्रोल करें।',
    mod_i_1_title: 'लाइन फॉलोअर',
    mod_i_1_desc: 'सेंसर कैलिब्रेशन और मोटर कंट्रोल की मूल बातें।',
    mod_i_2_title: 'ब्लूटूथ कार',
    mod_i_2_desc: 'मोबाइल ऐप कंट्रोल और वायरलेस कम्युनिकेशन।',
    mod_i_3_title: 'स्मार्ट डस्टबिन',
    mod_i_3_desc: 'अल्ट्रासोनिक सेंसर से ऑटो-ओपन मैकेनिज्म।',
    mod_a_1_title: 'जेस्चर रोबोट',
    mod_a_1_desc: 'एक्सेलेरोमीटर इनपुट से मूवमेंट कंट्रोल करें।',
    mod_a_2_title: 'विजन बॉट (कॉनसेप्ट)',
    mod_a_2_desc: 'कैमरा आधारित ऑब्जेक्ट डिटेक्शन का परिचय।',
    mod_a_3_title: 'IoT सर्विलांस बॉट',
    mod_a_3_desc: 'इंटरनेट के माध्यम से रोबोट की मॉनिटरिंग और कंट्रोल।',
    innovation_title: 'नई नवाचार',
    innov_1_title: 'सोलर कैंपस क्लीनर',
    innov_1_desc: 'छात्रों द्वारा बनाया गया सौर ऊर्जा से चलने वाला रोबोट जो स्कूल बगीचे से सूखे पत्ते एकत्र करता है।',
    innov_2_title: 'स्मार्ट अटेंडेंस बॉट',
    innov_2_desc: 'सुबह की उपस्थिति के लिए QR स्कैनिंग और वॉइस आउटपुट वाला प्रोटोटाइप।',
    innov_3_title: 'फ्लड अलर्ट रोवर',
    innov_3_desc: 'कम लागत वाला रोवर मॉडल जो पानी का स्तर जांचकर चेतावनी संदेश भेजता है।',
    resources_title: 'संसाधन',
    res_1_html: '<strong>PDF:</strong> Arduino और सेंसर का परिचय',
    res_2_html: '<strong>PDF:</strong> शुरुआती रोबोटिक्स सर्किट हैंडबुक',
    res_3_html: '<strong>वीडियो:</strong> स्कूल छात्रों के लिए रोबोटिक्स की बुनियाद',
    res_4_html: '<strong>वीडियो:</strong> अपनी पहली रोबोट कार बनाएं',
    res_5_html: '<strong>लिंक:</strong> <a href="https://www.arduino.cc/en/Guide" target="_blank" rel="noopener">Arduino आधिकारिक गाइड</a>',
    res_6_html: '<strong>लिंक:</strong> <a href="https://www.tinkercad.com/" target="_blank" rel="noopener">Tinkercad सिमुलेटर</a>',
    notices_title: 'सूचनाएं',
    notice_1: 'रोबोट असेंबली कार्यशाला: 10 जून 2026',
    notice_2: 'इनोवेशन प्रोजेक्ट जमा करने की अंतिम तिथि: 18 जून 2026',
    notice_3: 'इंटर-स्कूल रोबोटिक्स चैलेंज पंजीकरण शुरू',
    notice_4: 'Resources सेक्शन में नए मॉड्यूल वीडियो अपलोड किए गए',
    contact_title: 'संपर्क',
    label_name: 'नाम',
    label_email: 'ईमेल',
    label_message: 'संदेश',
    ph_name: 'अपना नाम लिखें',
    ph_email: 'अपना ईमेल लिखें',
    ph_message: 'अपना संदेश लिखें',
    send_btn: 'संदेश भेजें',
    admin_title: 'सरल एडमिन पैनल कॉन्सेप्ट (वैकल्पिक)',
    admin_desc: 'भविष्य के संस्करण में एडमिन डैशबोर्ड से प्राप्त संदेशों की समीक्षा, सूचनाएं अपडेट और नए संसाधन जोड़ सकता है।',
    footer_copy: '© 2026 Pramod Kumar. सर्वाधिकार सुरक्षित।',
    err_name: 'कृपया कम से कम 2 अक्षर लिखें।',
    err_email: 'कृपया सही ईमेल पता लिखें।',
    err_message: 'संदेश कम से कम 10 अक्षरों का होना चाहिए।',
    form_success: 'धन्यवाद। आपका संदेश सफलतापूर्वक भेज दिया गया है!'
  }
};

let currentLanguage = localStorage.getItem('roboticsLanguage') || 'en';
if (!translations[currentLanguage]) {
  currentLanguage = 'en';
}

function applyLanguage(lang) {
  const dict = translations[lang] || translations.en;

  document.documentElement.lang = lang === 'hi' ? 'hi' : 'en';
  document.title = dict.meta_title;
  languageSelect.value = lang;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (dict[key] !== undefined) {
      el.textContent = dict[key];
    }
  });

  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const key = el.dataset.i18nHtml;
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.dataset.i18nPlaceholder;
    if (dict[key] !== undefined) {
      el.setAttribute('placeholder', dict[key]);
    }
  });

  localStorage.setItem('roboticsLanguage', lang);
}

languageSelect.addEventListener('change', () => {
  currentLanguage = languageSelect.value;
  applyLanguage(currentLanguage);
});

applyLanguage(currentLanguage);

// ---------------------------
// Contact form validation
// ---------------------------
const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const formStatus = document.getElementById('formStatus');

function setError(id, message) {
  document.getElementById(id).textContent = message;
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function clearErrors() {
  setError('nameError', '');
  setError('emailError', '');
  setError('messageError', '');
  formStatus.textContent = '';
}

function saveContactData(data) {
  const oldData = JSON.parse(localStorage.getItem('roboticsContacts') || '[]');
  oldData.push(data);
  localStorage.setItem('roboticsContacts', JSON.stringify(oldData));
}

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  clearErrors();

  const dict = translations[currentLanguage] || translations.en;
  let isValid = true;
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  if (name.length < 2) {
    setError('nameError', dict.err_name);
    isValid = false;
  }

  if (!validateEmail(email)) {
    setError('emailError', dict.err_email);
    isValid = false;
  }

  if (message.length < 10) {
    setError('messageError', dict.err_message);
    isValid = false;
  }

  if (!isValid) return;

  const contactData = {
    name,
    email,
    message,
    submittedAt: new Date().toISOString(),
    language: currentLanguage
  };

  saveContactData(contactData);

  formStatus.textContent = dict.form_success;
  formStatus.style.color = '#0a66c2';
  contactForm.reset();
});
