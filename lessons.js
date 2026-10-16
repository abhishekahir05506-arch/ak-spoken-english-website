
"use strict";

// ========================================
// AK SPOKEN ENGLISH - LESSONS.JS
// ========================================

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
      ["दरवाज़ा खोलिए।", "Open the door."],
      ["दरवाज़ा बंद कीजिए।", "Close the door."],
      ["चिंता मत कीजिए।", "Do not worry."],
      ["जल्दी कीजिए।", "Hurry up."],
      ["कोई बात नहीं।", "No problem."],
      ["मुझे माफ़ कीजिए।", "I am sorry."],
      ["बहुत अच्छा!", "Very good!"],
      ["फिर मिलते हैं।", "See you again."],
      ["मुझे अंग्रेज़ी सीखनी है।", "I want to learn English."],
      ["मैं रोज़ अभ्यास करता हूँ।", "I practise every day."]
    ]
  },

  grammar: {
    title: "Grammar and Tenses",
    items: [
      {
        name: "Simple Present Tense",
        formula: "Subject + V1(s/es) + Object",
        example: "He plays cricket.",
        hindi: "वह क्रिकेट खेलता है।"
      },
      {
        name: "Present Continuous Tense",
        formula: "Subject + am/is/are + V-ing",
        example: "She is reading a book.",
        hindi: "वह किताब पढ़ रही है।"
      },
      {
        name: "Present Perfect Tense",
        formula: "Subject + has/have + V3",
        example: "I have finished my work.",
        hindi: "मैंने अपना काम पूरा कर लिया है।"
      },
      {
        name: "Present Perfect Continuous",
        formula: "Subject + has/have been + V-ing",
        example: "I have been studying for two hours.",
        hindi: "मैं दो घंटे से पढ़ रहा हूँ।"
      },
      {
        name: "Simple Past Tense",
        formula: "Subject + V2 + Object",
        example: "He played cricket.",
        hindi: "उसने क्रिकेट खेला।"
      },
      {
        name: "Past Continuous Tense",
        formula: "Subject + was/were + V-ing",
        example: "She was reading a book.",
        hindi: "वह किताब पढ़ रही थी।"
      },
      {
        name: "Past Perfect Tense",
        formula: "Subject + had + V3",
        example: "I had finished my work.",
        hindi: "मैंने अपना काम पूरा कर लिया था।"
      },
      {
        name: "Past Perfect Continuous",
        formula: "Subject + had been + V-ing",
        example: "I had been studying for two hours.",
        hindi: "मैं दो घंटे से पढ़ रहा था।"
      },
      {
        name: "Simple Future Tense",
        formula: "Subject + will + V1",
        example: "I will play cricket.",
        hindi: "मैं क्रिकेट खेलूँगा।"
      },
      {
        name: "Future Continuous Tense",
        formula: "Subject + will be + V-ing",
        example: "I will be reading a book.",
        hindi: "मैं किताब पढ़ रहा होऊँगा।"
      },
      {
        name: "Future Perfect Tense",
        formula: "Subject + will have + V3",
        example: "I will have finished my work.",
        hindi: "मैं अपना काम पूरा कर चुका होऊँगा।"
      },
      {
        name: "Future Perfect Continuous",
        formula: "Subject + will have been + V-ing",
        example: "By noon, I will have been studying for two hours.",
        hindi: "दोपहर तक मुझे पढ़ते हुए दो घंटे हो चुके होंगे।"
      }
    ]
  },

  vocabulary: {
    title: "Vocabulary with Hindi Meaning",
    items: [
      ["Ability", "क्षमता"],
      ["Accept", "स्वीकार करना"],
      ["Accident", "दुर्घटना"],
      ["Achieve", "प्राप्त करना"],
      ["Action", "कार्य"],
      ["Active", "सक्रिय"],
      ["Advice", "सलाह"],
      ["Afraid", "डरा हुआ"],
      ["Agree", "सहमत होना"],
      ["Air", "हवा"],
      ["Allow", "अनुमति देना"],
      ["Always", "हमेशा"],
      ["Amazing", "अद्भुत"],
      ["Angry", "नाराज़"],
      ["Answer", "उत्तर"],
      ["Arrive", "पहुँचना"],
      ["Ask", "पूछना"],
      ["Beautiful", "सुंदर"],
      ["Believe", "विश्वास करना"],
      ["Begin", "शुरू करना"],
      ["Best", "सबसे अच्छा"],
      ["Better", "बेहतर"],
      ["Big", "बड़ा"],
      ["Brave", "बहादुर"],
      ["Bring", "लाना"],
      ["Build", "बनाना"],
      ["Busy", "व्यस्त"],
      ["Buy", "खरीदना"],
      ["Call", "बुलाना"],
      ["Care", "देखभाल"],
      ["Careful", "सावधान"],
      ["Change", "बदलना"],
      ["Choose", "चुनना"],
      ["Clean", "साफ़"],
      ["Clever", "चतुर"],
      ["Close", "बंद करना"],
      ["Come", "आना"],
      ["Common", "सामान्य"],
      ["Correct", "सही"],
      ["Create", "बनाना"],
      ["Danger", "खतरा"],
      ["Dark", "अँधेरा"],
      ["Daughter", "बेटी"],
      ["Decide", "निर्णय लेना"],
      ["Delicious", "स्वादिष्ट"],
      ["Different", "अलग"],
      ["Difficult", "कठिन"],
      ["Doctor", "डॉक्टर"],
      ["Dream", "सपना"],
      ["Drink", "पीना"],
      ["Early", "जल्दी"],
      ["Easy", "आसान"],
      ["Eat", "खाना"],
      ["Education", "शिक्षा"],
      ["Enjoy", "आनंद लेना"],
      ["Enough", "पर्याप्त"],
      ["Example", "उदाहरण"],
      ["Excellent", "उत्कृष्ट"],
      ["Explain", "समझाना"],
      ["Family", "परिवार"],
      ["Famous", "प्रसिद्ध"],
      ["Fast", "तेज़"],
      ["Father", "पिता"],
      ["Feel", "महसूस करना"],
      ["Finish", "समाप्त करना"],
      ["Friend", "दोस्त"],
      ["Future", "भविष्य"],
      ["Game", "खेल"],
      ["Garden", "बगीचा"],
      ["Give", "देना"],
      ["Good", "अच्छा"],
      ["Great", "शानदार"],
      ["Happy", "खुश"],
      ["Hard", "कठिन"],
      ["Health", "स्वास्थ्य"],
      ["Help", "मदद करना"],
      ["Honest", "ईमानदार"],
      ["Hope", "आशा"],
      ["Important", "महत्वपूर्ण"],
      ["Improve", "सुधारना"],
      ["Information", "जानकारी"],
      ["Interest", "रुचि"],
      ["Join", "जुड़ना"],
      ["Journey", "यात्रा"],
      ["Kind", "दयालु"],
      ["Knowledge", "ज्ञान"],
      ["Learn", "सीखना"],
      ["Listen", "सुनना"],
      ["Love", "प्यार"],
      ["Make", "बनाना"],
      ["Manage", "प्रबंधन करना"],
      ["Market", "बाज़ार"],
      ["Meet", "मिलना"],
      ["Mistake", "गलती"],
      ["Money", "पैसा"],
      ["Morning", "सुबह"],
      ["Necessary", "ज़रूरी"],
      ["Need", "ज़रूरत"],
      ["Never", "कभी नहीं"],
      ["New", "नया"],
      ["Open", "खोलना"],
      ["Opportunity", "अवसर"],
      ["Practice", "अभ्यास"],
      ["Prepare", "तैयार करना"],
      ["Problem", "समस्या"],
      ["Question", "प्रश्न"],
      ["Quick", "तेज़"],
      ["Read", "पढ़ना"],
      ["Remember", "याद रखना"],
      ["Respect", "सम्मान"],
      ["School", "स्कूल"],
      ["Simple", "सरल"],
      ["Speak", "बोलना"],
      ["Start", "शुरू करना"],
      ["Student", "विद्यार्थी"],
      ["Study", "पढ़ाई करना"],
      ["Success", "सफलता"],
      ["Teacher", "शिक्षक"],
      ["Understand", "समझना"],
      ["Useful", "उपयोगी"],
      ["Water", "पानी"],
      ["Welcome", "स्वागत"],
      ["Work", "काम"],
      ["Write", "लिखना"]
    ]
  },

  practice: {
    title: "Hindi to English Practice",
    items: [
      ["मैं रोज़ अंग्रेज़ी पढ़ता हूँ।", "I study English every day."],
      ["वह स्कूल जाता है।", "He goes to school."],
      ["वह खाना बना रही है।", "She is cooking food."],
      ["मैंने अपना काम पूरा कर लिया।", "I have finished my work."],
      ["हम कल बाज़ार जाएँगे।", "We will go to the market tomorrow."],
      ["क्या तुम मुझे जानते हो?", "Do you know me?"],
      ["वह कल नहीं आया था।", "He did not come yesterday."],
      ["मैं अभी व्यस्त हूँ।", "I am busy right now."],
      ["कृपया यहाँ बैठिए।", "Please sit here."],
      ["मुझे आपकी मदद चाहिए।", "I need your help."],
      ["वह बहुत तेज़ दौड़ता है।", "He runs very fast."],
      ["हम साथ में पढ़ते हैं।", "We study together."],
      ["मेरी अंग्रेज़ी बेहतर हो रही है।", "My English is getting better."],
      ["क्या तुम तैयार हो?", "Are you ready?"],
      ["मैंने उसे फोन किया।", "I called him."],
      ["वह किताब पढ़ रहा था।", "He was reading a book."],
      ["वे क्रिकेट खेलेंगे।", "They will play cricket."],
      ["मैं पानी पीना चाहता हूँ।", "I want to drink water."],
      ["यह मेरी किताब है।", "This is my book."],
      ["मुझे अपना समय बचाना चाहिए।", "I should save my time."],
      ["वह हर दिन जल्दी उठती है।", "She gets up early every day."],
      ["हमने फ़िल्म देखी।", "We watched a movie."],
      ["मैं कल तुमसे मिलूँगा।", "I will meet you tomorrow."],
      ["क्या तुम मेरी बात समझते हो?", "Do you understand me?"],
      ["मेरे पास एक नया फोन है।", "I have a new phone."],
      ["वह घर पर नहीं है।", "He is not at home."],
      ["कृपया दरवाज़ा खोलिए।", "Please open the door."],
      ["मुझे अंग्रेज़ी बोलने का अभ्यास करना है।", "I need to practise speaking English."],
      ["आज बारिश हो रही है।", "It is raining today."],
      ["मैंने अपना बैग खो दिया।", "I lost my bag."]
    ]
  }
};

// ========================================
// DISPLAY LESSONS
// ========================================

function openLesson(type) {
  const area = document.getElementById("lesson-area");
  const content = document.getElementById("lesson-content");

  if (!area || !content) {
    console.error("Lesson area not found. Check index.html IDs.");
    return;
  }

  const lesson = lessonData[type];

  if (!lesson) {
    content.innerHTML = "<p>Lesson not found.</p>";
    area.hidden = false;
    area.style.display = "block";
    return;
  }

  let html = `
    <h2>${lesson.title}</h2>
    ${lesson.subtitle ? `<p>${lesson.subtitle}</p>` : ""}
  `;

  if (type === "grammar") {
    lesson.items.forEach((item, index) => {
      html += `
        <article class="lesson-item">
          <h3>${index + 1}. ${item.name}</h3>
          <p><strong>Formula:</strong> ${item.formula}</p>
          <p><strong>Example:</strong> ${item.example}</p>
          <p><strong>Hindi:</strong> ${item.hindi}</p>
        </article>
      `;
    });
  } else if (type === "vocabulary") {
    lesson.items.forEach((item, index) => {
      html += `
        <article class="lesson-item">
          <strong>${index + 1}. ${item[0]}</strong>
          <p>${item[1]}</p>
        </article>
      `;
    });
  } else {
    lesson.items.forEach((item, index) => {
      html += `
        <article class="lesson-item">
          <strong>${index + 1}. ${item[0]}</strong>
          ${
            type === "practice"
              ? `<details>
                   <summary>Show English Answer</summary>
                   <p>${item[1]}</p>
                 </details>`
              : `<p>${item[1]}</p>`
          }
        </article>
      `;
    });
  }

  content.innerHTML = html;
  area.hidden = false;
  area.style.display = "block";
  area.scrollIntoView({ behavior: "smooth", block: "start" });
}

function closeLesson() {
  const area = document.getElementById("lesson-area");

  if (area) {
    area.hidden = true;
    area.style.display = "none";
  }
}
