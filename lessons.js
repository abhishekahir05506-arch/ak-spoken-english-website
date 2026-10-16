const lessonData = {
  daily: {
    title: "Daily Use Sentences",
    subtitle: "Hindi to English — रोज़ाना बोलने वाले वाक्य",
    items: [
      ["आप कैसे हैं?", "How are you?"],
      ["मैं ठीक हूँ।", "I am fine."],
      ["आपका नाम क्या है?", "What is your name?"],
      ["मेरा नाम राहुल है।", "My name is Rahul."],
      ["आप कहाँ रहते हैं?", "Where do you live?"],
      ["मैं भारत में रहता हूँ।", "I live in India."],
      ["आप क्या कर रहे हैं?", "What are you doing?"],
      ["मैं पढ़ाई कर रहा हूँ।", "I am studying."],
      ["मुझे समझ नहीं आया।", "I did not understand."],
      ["कृपया धीरे बोलिए।", "Please speak slowly."],
      ["मेरी मदद कीजिए।", "Please help me."],
      ["मुझे थोड़ा समय दीजिए।", "Please give me some time."],
      ["आप सही कह रहे हैं।", "You are right."],
      ["मुझे यह पसंद है।", "I like this."],
      ["मुझे यह नहीं चाहिए।", "I do not want this."],
      ["आप कहाँ जा रहे हैं?", "Where are you going?"],
      ["मैं घर जा रहा हूँ।", "I am going home."],
      ["खाना तैयार है।", "The food is ready."],
      ["मुझे भूख लगी है।", "I am hungry."],
      ["मुझे प्यास लगी है।", "I am thirsty."],
      ["दरवाजा खोलिए।", "Open the door."],
      ["दरवाजा बंद कीजिए।", "Close the door."],
      ["चिंता मत कीजिए।", "Do not worry."],
      ["जल्दी कीजिए।", "Hurry up."],
      ["कोई बात नहीं।", "No problem."],
      ["मुझे माफ कीजिए।", "Please forgive me."],
      ["बहुत अच्छा!", "Very good!"],
      ["फिर मिलते हैं।", "See you again."],
      ["मुझे अंग्रेज़ी सीखनी है।", "I want to learn English."],
      ["मैं रोज़ अभ्यास करता हूँ।", "I practise every day."]
      ["मैं ठीक हूँ।", "I am fine."],
      ["आप कैसे हैं?", "How are you?"],
  ["मेरा नाम राहुल है।", "My name is Rahul."],
  ["आपका नाम क्या है?", "What is your name?"],
  ["आप कहाँ रहते हैं?", "Where do you live?"],
  ["मैं भारत में रहता हूँ।", "I live in India."],
  ["कृपया मेरी मदद करें।", "Please help me."],
  ["बहुत-बहुत धन्यवाद।", "Thank you very much."],
  ["आपका स्वागत है।", "You are welcome."],
  ["मुझे समझ नहीं आया।", "I did not understand."],
  ["कृपया फिर से बोलिए।", "Please say it again."],
  ["धीरे-धीरे बोलिए।", "Please speak slowly."],
  ["मुझे अंग्रेज़ी सीखनी है।", "I want to learn English."],
  ["मैं कॉलेज जा रहा हूँ।", "I am going to college."],
  ["मैं घर जा रहा हूँ।", "I am going home."],
  ["मुझे भूख लगी है।", "I am hungry."],
  ["मुझे प्यास लगी है।", "I am thirsty."],
  ["खाना तैयार है।", "The food is ready."],
  ["दरवाज़ा खोलिए।", "Open the door."],
  ["दरवाज़ा बंद कीजिए।", "Close the door."],
  ["यह बहुत अच्छा है।", "This is very good."],
  ["मुझे यह पसंद है।", "I like this."],
  ["मुझे नहीं पता।", "I don't know."],
  ["कोई बात नहीं।", "No problem."],
  ["जल्दी कीजिए।", "Hurry up."],
  ["मुझे थोड़ा समय चाहिए।", "I need some time."],
  ["आज मौसम अच्छा है।", "The weather is nice today."],
  ["कल मिलते हैं।", "See you tomorrow."],
  ["अपना ध्यान रखिए।", "Take care of yourself."],
  ["मुझे देर हो रही है।", "I am getting late."],
  ["मैं पढ़ाई कर रहा हूँ।", "I am studying."],
  ["मैं व्यस्त हूँ।", "I am busy."],
  ["क्या आप मेरी बात सुन रहे हैं?", "Are you listening to me?"],
  ["यह कितने का है?", "How much is this?"],
  ["मुझे पानी चाहिए।", "I need water."],
  ["मुझे एक पेन दीजिए।", "Please give me a pen."],
  ["मैं अभी आता हूँ।", "I will be back soon."],
  ["चिंता मत कीजिए।", "Don't worry."],
  ["सच बताइए।", "Tell the truth."],
  ["मुझे माफ़ कीजिए।", "I am sorry."],
  ["आप सही कह रहे हैं।", "You are right."],
  ["मैं सहमत हूँ।", "I agree."],
  ["मैं तैयार हूँ।", "I am ready."],
  ["चलो चलते हैं।", "Let's go."],
  ["मुझे थोड़ा आराम करना है।", "I need some rest."],
  ["लाइट चालू कीजिए।", "Turn on the light."],
  ["लाइट बंद कीजिए।", "Turn off the light."],
  ["अपना काम पूरा कीजिए।", "Finish your work."],
  ["मुझे फोन कीजिए।", "Call me."],
  ["मैं बाद में बात करूँगा।", "I will talk later."]
    ]
  },

  grammar: {
    title: "Present Tense",
    description: "Present Tense का प्रयोग वर्तमान समय की आदतों, कामों और घटनाओं के लिए होता है।",
    forms: [
      {
        name: "Simple Present",
        formula: "Subject + V1(s/es) + Object",
        example: "He plays cricket.",
        hindi: "वह क्रिकेट खेलता है।"
      },
      {
        name: "Present Continuous",
        formula: "Subject + am/is/are + V-ing",
        example: "She is reading a book.",
        hindi: "वह किताब पढ़ रही है।"
      },
      {
        name: "Present Perfect",
        formula: "Subject + has/have + V3",
        example: "I have finished my work.",
        hindi: "मैंने अपना काम पूरा कर लिया है।"
      },
      {
        name: "Present Perfect Continuous",
        formula: "Subject + has/have been + V-ing",
        example: "I have been studying for two hours.",
        hindi: "मैं दो घंटे से पढ़ रहा हूँ।"
      }
    ]
  },

  past: {
    title: "Past Tense",
    description: "Past Tense का प्रयोग बीते हुए समय के कामों और घटनाओं के लिए होता है।",
    forms: [
      {
        name: "Simple Past",
        formula: "Subject + V2 + Object",
        example: "He played cricket.",
        hindi: "उसने क्रिकेट खेला।"
      },
      {
        name: "Past Continuous",
        formula: "Subject + was/were + V-ing",
        example: "She was reading a book.",
        hindi: "वह किताब पढ़ रही थी।"
      },
      {
        name: "Past Perfect",
        formula: "Subject + had + V3",
        example: "I had finished my work.",
        hindi: "मैंने अपना काम पूरा कर लिया था।"
      },
      {
        name: "Past Perfect Continuous",
        formula: "Subject + had been + V-ing",
        example: "I had been studying for two hours.",
        hindi: "मैं दो घंटे से पढ़ रहा था।"
      }
    ]
  },
  vocabulary: {
    title: "Vocabulary",
    subtitle: "English words with Hindi meanings",
    items: [
      ["Ability", "क्षमता"],
      ["Accept", "स्वीकार करना"],
      ["Accident", "दुर्घटना"],
      ["Achieve", "प्राप्त करना"],
      ["Active", "सक्रिय"],
      ["Advice", "सलाह"],
      ["Afraid", "डरा हुआ"],
      ["Agree", "सहमत होना"],
      ["Allow", "अनुमति देना"],
      ["Answer", "उत्तर"],
      ["Appear", "दिखाई देना"],
      ["Arrive", "पहुँचना"],
      ["Beautiful", "सुंदर"],
      ["Believe", "विश्वास करना"],
      ["Begin", "शुरू करना"],
      ["Brave", "बहादुर"],
      ["Care", "देखभाल"],
      ["Careful", "सावधान"],
      ["Change", "बदलना"],
      ["Choose", "चुनना"],
      ["Clever", "चतुर"],
      ["Common", "सामान्य"],
      ["Complete", "पूरा करना"],
      ["Confidence", "आत्मविश्वास"],
      ["Courage", "साहस"],
      ["Create", "बनाना"],
      ["Danger", "खतरा"],
      ["Decide", "निर्णय लेना"],
      ["Deep", "गहरा"],
      ["Develop", "विकसित करना"],
      ["Different", "अलग"],
      ["Difficult", "कठिन"],
      ["Discover", "खोज करना"],
      ["Dream", "सपना"],
      ["Early", "जल्दी"],
      ["Easy", "आसान"],
      ["Education", "शिक्षा"],
      ["Effort", "प्रयास"],
      ["Enjoy", "आनंद लेना"],
      ["Enough", "पर्याप्त"],
      ["Experience", "अनुभव"],
      ["Famous", "प्रसिद्ध"],
      ["Fear", "डर"],
      ["Finish", "समाप्त करना"],
      ["Follow", "अनुसरण करना"],
      ["Forget", "भूलना"],
      ["Freedom", "स्वतंत्रता"],
      ["Friendly", "मिलनसार"],
      ["Future", "भविष्य"],
      ["Generous", "उदार"],
      ["Gentle", "विनम्र"],
      ["Goal", "लक्ष्य"],
      ["Grateful", "आभारी"],
      ["Grow", "बढ़ना"],
      ["Habit", "आदत"],
      ["Happiness", "खुशी"],
      ["Honest", "ईमानदार"],
      ["Hope", "आशा"],
      ["Improve", "सुधारना"],
      ["Important", "महत्वपूर्ण"],
      ["Include", "शामिल करना"],
      ["Independent", "स्वतंत्र"],
      ["Intelligent", "बुद्धिमान"],
      ["Journey", "यात्रा"],
      ["Knowledge", "ज्ञान"],
      ["Learn", "सीखना"],
      ["Leave", "छोड़ना"],
      ["Listen", "सुनना"],
      ["Manage", "प्रबंधन करना"],
      ["Mistake", "गलती"],
      ["Necessary", "आवश्यक"],
      ["Notice", "ध्यान देना"],
      ["Opportunity", "अवसर"],
      ["Patient", "धैर्यवान"],
      ["Peace", "शांति"],
      ["Polite", "विनम्र"],
      ["Possible", "संभव"],
      ["Practice", "अभ्यास"],
      ["Prepare", "तैयारी करना"],
      ["Promise", "वादा"],
      ["Protect", "रक्षा करना"],
      ["Purpose", "उद्देश्य"],
      ["Quality", "गुणवत्ता"],
      ["Quick", "तेज़"],
      ["Realize", "महसूस करना"],
      ["Receive", "प्राप्त करना"],
      ["Remember", "याद रखना"],
      ["Respect", "सम्मान"],
      ["Responsible", "जिम्मेदार"],
      ["Safe", "सुरक्षित"],
      ["Search", "खोजना"],
      ["Share", "साझा करना"],
      ["Simple", "सरल"],
      ["Skill", "कौशल"],
      ["Strong", "मजबूत"],
      ["Success", "सफलता"],
      ["Support", "सहायता"],
      ["Thought", "विचार"],
      ["Trust", "भरोसा"],
      ["Useful", "उपयोगी"],
      ["Value", "मूल्य"],
      ["Wise", "बुद्धिमान"],
      ["Wonder", "आश्चर्य"],
      ["Wonderful", "अद्भुत"],
      ["Work", "काम"],
      ["Worry", "चिंता"],
      ["Youth", "युवा अवस्था"]
    ]
  },
// ------------------------------------
// 4. PRACTICE SENTENCES
// ------------------------------------

lessonData.practice = [
  { hindi: "मैं रोज़ अंग्रेज़ी पढ़ता हूँ।", english: "I study English every day." },
  { hindi: "वह स्कूल जाता है।", english: "He goes to school." },
  { hindi: "वह खाना बना रही है।", english: "She is cooking food." },
  { hindi: "मैंने अपना काम पूरा कर लिया।", english: "I have finished my work." },
  { hindi: "हम कल बाज़ार जाएँगे।", english: "We will go to the market tomorrow." },
  { hindi: "क्या तुम मुझे जानते हो?", english: "Do you know me?" },
  { hindi: "वह कल नहीं आया था।", english: "He did not come yesterday." },
  { hindi: "मैं अभी व्यस्त हूँ।", english: "I am busy right now." },
  { hindi: "कृपया यहाँ बैठिए।", english: "Please sit here." },
  { hindi: "मुझे आपकी मदद चाहिए।", english: "I need your help." },
  { hindi: "वह बहुत तेज़ दौड़ता है।", english: "He runs very fast." },
  { hindi: "हम साथ में पढ़ते हैं।", english: "We study together." },
  { hindi: "मेरी अंग्रेज़ी बेहतर हो रही है।", english: "My English is getting better." },
  { hindi: "क्या तुम तैयार हो?", english: "Are you ready?" },
  { hindi: "मैंने उसे फोन किया।", english: "I called him." },
  { hindi: "वह किताब पढ़ रहा था।", english: "He was reading a book." },
  { hindi: "वे क्रिकेट खेलेंगे।", english: "They will play cricket." },
  { hindi: "मैं पानी पीना चाहता हूँ।", english: "I want to drink water." },
  { hindi: "यह मेरी किताब है।", english: "This is my book." },
  { hindi: "मुझे अपना समय बचाना चाहिए।", english: "I should save my time." },
  { hindi: "वह हर दिन जल्दी उठती है।", english: "She gets up early every day." },
  { hindi: "हमने फ़िल्म देखी।", english: "We watched a movie." },
  { hindi: "मैं कल तुमसे मिलूँगा।", english: "I will meet you tomorrow." },
  { hindi: "क्या तुम मेरी बात समझते हो?", english: "Do you understand me?" },
  { hindi: "मेरे पास एक नया फोन है।", english: "I have a new phone." },
  { hindi: "वह घर पर नहीं है।", english: "He is not at home." },
  { hindi: "कृपया दरवाज़ा खोलिए।", english: "Please open the door." },
  { hindi: "मुझे अंग्रेज़ी बोलने का अभ्यास करना है।", english: "I need to practise speaking English." },
  { hindi: "आज बारिश हो रही है।", english: "It is raining today." },
  { hindi: "मैंने अपना बैग खो दिया।", english: "I lost my bag." },
  { hindi: "वह बहुत दयालु है।", english: "She is very kind." },
  { hindi: "हम समय पर पहुँच गए।", english: "We arrived on time." },
  { hindi: "मुझे यह उत्तर पता है।", english: "I know this answer." },
  { hindi: "क्या तुम मेरी मदद कर सकते हो?", english: "Can you help me?" },
  { hindi: "वह दो घंटे से पढ़ रहा है।", english: "He has been studying for two hours." },
  { hindi: "मैंने खाना खा लिया है।", english: "I have eaten my food." },
  { hindi: "वे अगले सप्ताह आएँगे।", english: "They will come next week." },
  { hindi: "मैं हर दिन नए शब्द सीखता हूँ।", english: "I learn new words every day." },
  { hindi: "उसने मुझे सच बताया।", english: "He told me the truth." },
  { hindi: "कृपया धीरे बोलिए।", english: "Please speak slowly." } 
    ];
  }
};

function openLesson(type) {
  const area = document.getElementById("lesson-area");
  const content = document.getElementById("lesson-content");
  const lesson = lessonData[type];

  if (!lesson) return;

  content.replaceChildren();

  const heading = document.createElement("h2");
  heading.textContent = lesson.title;
  content.append(heading);

  const subtitle = document.createElement("p");
  subtitle.textContent = lesson.subtitle;
  content.append(subtitle);

  if (type === "grammar") {
    lesson.items.forEach((tense) => {
      const section = document.createElement("article");
      section.className = "card";

      const title = document.createElement("h3");
      title.textContent = tense.name;
      section.append(title);

      const detail = document.createElement("p");
      detail.textContent = tense.detail;
      section.append(detail);

      tense.forms.forEach((form) => {
        const block = document.createElement("div");
        block.className = "lesson-item";

        [form[0], "पहचान: " + form[1], "Structure: " + form[2], "Example: " + form[3]]
          .forEach((line) => {
            const p = document.createElement("p");
            p.textContent = line;
            block.append(p);
          });

        section.append(block);
      });

      content.append(section);
    });
  } else {
    const list = document.createElement("div");
    list.className = "lesson-list";

    lesson.items.forEach((item, index) => {
      const row = document.createElement("article");
      row.className = "card";

      const number = document.createElement("strong");
      number.textContent = (index + 1) + ". ";
      row.append(number);

      if (Array.isArray(item)) {
        const first = document.createElement("p");
        first.textContent = item[0];
        row.append(first);

        const second = document.createElement("p");
        second.textContent = item[1];
        row.append(second);
      } else {
        const sentence = document.createElement("p");
        sentence.textContent = item;
        row.append(sentence);
      }

      list.append(row);
    });

    content.append(list);
  }

  area.hidden = false;
  area.scrollIntoView({ behavior: "smooth" });
}

function closeLesson() {
  document.getElementById("lesson-area").hidden = true;
  document.getElementById("learn").scrollIntoView({ behavior: "smooth" });
}
