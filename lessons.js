
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
    ]
  },

lessonData.daily = [...dailySentences];

// ------------------------------------
// 2. GRAMMAR: THREE MAIN TENSES
// ------------------------------------

lessonData.grammar = {
  present: {
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

  future: {
    title: "Future Tense",
    description: "Future Tense का प्रयोग आने वाले समय के कामों और घटनाओं के लिए होता है।",
    forms: [
      {
        name: "Simple Future",
        formula: "Subject + will + V1",
        example: "I will play cricket.",
        hindi: "मैं क्रिकेट खेलूँगा।"
      },
      {
        name: "Future Continuous",
        formula: "Subject + will be + V-ing",
        example: "I will be reading a book.",
        hindi: "मैं किताब पढ़ रहा होऊँगा।"
      },
      {
        name: "Future Perfect",
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
  }
};

// ------------------------------------
// 3. VOCABULARY
// ------------------------------------

const vocabularyText = `
ability|क्षमता
able|योग्य
about|के बारे में
above|ऊपर
accept|स्वीकार करना
accident|दुर्घटना
account|खाता
achieve|प्राप्त करना
act|कार्य करना
action|कार्य
active|सक्रिय
activity|गतिविधि
add|जोड़ना
address|पता
advice|सलाह
afraid|डरा हुआ
after|बाद में
afternoon|दोपहर
again|फिर से
age|उम्र
agree|सहमत होना
air|हवा
airport|हवाई अड्डा
alive|जीवित
all|सब
allow|अनुमति देना
almost|लगभग
alone|अकेला
along|साथ
already|पहले से
also|भी
always|हमेशा
amazing|अद्भुत
among|के बीच
amount|मात्रा
angry|नाराज़
animal|जानवर
answer|उत्तर
any|कोई भी
anyone|कोई भी व्यक्ति
anything|कुछ भी
appear|दिखाई देना
apple|सेब
area|क्षेत्र
arm|बाँह
around|आसपास
arrive|पहुँचना
art|कला
ask|पूछना
attention|ध्यान
aunt|चाची
away|दूर
baby|बच्चा
back|पीछे
bad|बुरा
bag|बैग
ball|गेंद
bank|बैंक
beautiful|सुंदर
because|क्योंकि
become|बनना
bed|बिस्तर
before|पहले
begin|शुरू करना
behind|पीछे
believe|विश्वास करना
below|नीचे
best|सबसे अच्छा
better|बेहतर
between|के बीच
big|बड़ा
bird|पक्षी
birthday|जन्मदिन
black|काला
blood|खून
blue|नीला
body|शरीर
book|किताब
both|दोनों
boy|लड़का
break|तोड़ना
bring|लाना
brother|भाई
build|बनाना
busy|व्यस्त
buy|खरीदना
call|बुलाना
camera|कैमरा
can|सकना
car|कार
care|देखभाल
careful|सावधान
carry|ले जाना
case|मामला
cat|बिल्ली
catch|पकड़ना
cause|कारण
celebrate|मनाना
center|केंद्र
chair|कुर्सी
chance|अवसर
change|बदलना
cheap|सस्ता
check|जाँच करना
child|बच्चा
choose|चुनना
city|शहर
class|कक्षा
clean|साफ
clear|स्पष्ट
clever|चतुर
close|बंद करना
clothes|कपड़े
cloud|बादल
college|कॉलेज
color|रंग
come|आना
common|सामान्य
computer|कंप्यूटर
condition|स्थिति
continue|जारी रखना
cook|खाना बनाना
cool|ठंडा
correct|सही
cost|कीमत
country|देश
course|पाठ्यक्रम
cousin|चचेरा भाई या बहन
create|बनाना
cry|रोना
culture|संस्कृति
cup|कप
cut|काटना
dance|नाचना
danger|खतरा
dark|अँधेरा
date|तारीख
daughter|बेटी
day|दिन
dead|मृत
deal|सौदा
dear|प्रिय
decide|निर्णय लेना
deep|गहरा
degree|डिग्री
delicious|स्वादिष्ट
describe|वर्णन करना
design|डिज़ाइन
desk|मेज़
develop|विकसित करना
different|अलग
difficult|कठिन
dinner|रात का खाना
direction|दिशा
dirty|गंदा
discover|खोज करना
discuss|चर्चा करना
disease|बीमारी
do|करना
doctor|डॉक्टर
dog|कुत्ता
door|दरवाज़ा
down|नीचे
draw|चित्र बनाना
dream|सपना
drink|पीना
drive|गाड़ी चलाना
early|जल्दी
earth|पृथ्वी
easy|आसान
eat|खाना
education|शिक्षा
effect|प्रभाव
effort|प्रयास
egg|अंडा
eight|आठ
either|दोनों में से कोई एक
electricity|बिजली
else|अन्य
email|ईमेल
end|अंत
enemy|दुश्मन
energy|ऊर्जा
enjoy|आनंद लेना
enough|पर्याप्त
enter|प्रवेश करना
environment|पर्यावरण
equal|बराबर
especially|विशेष रूप से
even|भी
evening|शाम
event|कार्यक्रम
ever|कभी
every|हर
everyone|हर कोई
everything|सब कुछ
example|उदाहरण
excellent|उत्कृष्ट
excited|उत्साहित
exercise|व्यायाम
expect|उम्मीद करना
expensive|महँगा
experience|अनुभव
explain|समझाना
eye|आँख
face|चेहरा
fact|तथ्य
fail|असफल होना
fair|उचित
fall|गिरना
family|परिवार
famous|प्रसिद्ध
far|दूर
farm|खेत
fast|तेज़
father|पिता
fear|डर
feel|महसूस करना
festival|त्योहार
few|कुछ
field|मैदान
fight|लड़ना
fill|भरना
film|फ़िल्म
final|अंतिम
find|खोजना
fine|ठीक
finger|उँगली
finish|समाप्त करना
fire|आग
first|पहला
fish|मछली
five|पाँच
floor|फर्श
flower|फूल
fly|उड़ना
follow|अनुसरण करना
food|भोजन
foot|पैर
for|के लिए
forget|भूलना
forgive|माफ़ करना
form|रूप
free|मुफ़्त
friend|दोस्त
friendly|मिलनसार
from|से
front|सामने
fruit|फल
full|भरा हुआ
fun|मज़ा
future|भविष्य
game|खेल
garden|बगीचा
general|सामान्य
get|पाना
girl|लड़की
give|देना
glad|खुश
glass|गिलास
go|जाना
goal|लक्ष्य
good|अच्छा
government|सरकार
great|शानदार
green|हरा
ground|ज़मीन
group|समूह
grow|बढ़ना
guess|अनुमान लगाना
habit|आदत
hair|बाल
half|आधा
hand|हाथ
happen|होना
happy|खुश
hard|कठिन
hat|टोपी
hate|नफ़रत करना
have|पास होना
head|सिर
health|स्वास्थ्य
healthy|स्वस्थ
hear|सुनना
heart|दिल
heavy|भारी
help|मदद करना
here|यहाँ
high|ऊँचा
history|इतिहास
hold|पकड़ना
holiday|छुट्टी
home|घर
hope|आशा
horse|घोड़ा
hospital|अस्पताल
hot|गर्म
hotel|होटल
hour|घंटा
house|मकान
however|हालाँकि
human|मनुष्य
hundred|सौ
hungry|भूखा
hurry|जल्दी करना
hurt|चोट पहुँचाना
husband|पति
idea|विचार
important|महत्वपूर्ण
improve|सुधारना
include|शामिल करना
income|आय
increase|बढ़ाना
independent|स्वतंत्र
India|भारत
information|जानकारी
inside|अंदर
instead|इसके बजाय
interest|रुचि
interesting|दिलचस्प
internet|इंटरनेट
interview|साक्षात्कार
introduce|परिचय कराना
invite|आमंत्रित करना
island|द्वीप
issue|मुद्दा
job|नौकरी
join|जुड़ना
journey|यात्रा
joy|खुशी
judge|निर्णय करना
juice|रस
jump|कूदना
just|बस
keep|रखना
key|चाबी
kind|दयालु
king|राजा
kitchen|रसोई
knee|घुटना
know|जानना
knowledge|ज्ञान
language|भाषा
large|बड़ा
last|अंतिम
late|देर
later|बाद में
laugh|हँसना
learn|सीखना
leave|छोड़ना
left|बायाँ
lesson|पाठ
letter|पत्र
library|पुस्तकालय
life|जीवन
light|रोशनी
like|पसंद करना
line|रेखा
listen|सुनना
little|छोटा
live|रहना
local|स्थानीय
long|लंबा
look|देखना
lose|खोना
love|प्यार
low|नीचा
luck|भाग्य
lucky|भाग्यशाली
machine|मशीन
main|मुख्य
make|बनाना
man|आदमी
manage|प्रबंधन करना
many|बहुत से
market|बाज़ार
marriage|विवाह
matter|मामला
maybe|शायद
meal|भोजन
mean|अर्थ होना
meaning|अर्थ
measure|मापना
medicine|दवा
meet|मिलना
meeting|बैठक
member|सदस्य
memory|याददाश्त
message|संदेश
middle|बीच
milk|दूध
mind|मन
minute|मिनट
miss|याद करना
mistake|गलती
model|नमूना
modern|आधुनिक
moment|पल
money|पैसा
month|महीना
morning|सुबह
mother|माँ
mountain|पहाड़
mouth|मुँह
move|हिलना
movie|फ़िल्म
much|बहुत
music|संगीत
must|ज़रूर
name|नाम
near|पास
necessary|ज़रूरी
need|ज़रूरत
neighbor|पड़ोसी
never|कभी नहीं
new|नया
news|समाचार
next|अगला
nice|अच्छा
night|रात
nine|नौ
noise|शोर
normal|सामान्य
north|उत्तर
nose|नाक
note|नोट
nothing|कुछ नहीं
notice|ध्यान देना
number|संख्या
object|वस्तु
obvious|स्पष्ट
occasion|अवसर
offer|प्रस्ताव देना
office|कार्यालय
often|अक्सर
oil|तेल
old|पुराना
once|एक बार
one|एक
only|केवल
open|खोलना
opinion|राय
opportunity|अवसर
opposite|विपरीत
orange|संतरा
order|आदेश
ordinary|साधारण
organization|संगठन
other|दूसरा
outside|बाहर
own|अपना
page|पन्ना
pain|दर्द
paint|रंग करना
pair|जोड़ी
paper|कागज़
parent|माता-पिता
park|पार्क
part|हिस्सा
party|पार्टी
pass|पास होना
past|अतीत
patient|मरीज़
pay|भुगतान करना
peace|शांति
people|लोग
perfect|उत्तम
perhaps|शायद
person|व्यक्ति
phone|फ़ोन
photo|तस्वीर
picture|चित्र
piece|टुकड़ा
place|जगह
plan|योजना
plant|पौधा
play|खेलना
please|कृपया
pleasure|खुशी
point|बिंदु
police|पुलिस
poor|गरीब
popular|लोकप्रिय
possible|संभव
power|शक्ति
practice|अभ्यास
prepare|तैयार करना
present|वर्तमान
pretty|सुंदर
price|कीमत
problem|समस्या
process|प्रक्रिया
produce|उत्पादन करना
product|उत्पाद
program|कार्यक्रम
promise|वादा
protect|रक्षा करना
proud|गर्वित
provide|प्रदान करना
public|सार्वजनिक
pull|खींचना
push|धक्का देना
put|रखना
quality|गुणवत्ता
question|प्रश्न
quick|तेज़
quickly|जल्दी
quiet|शांत
quite|काफ़ी
radio|रेडियो
rain|बारिश
raise|उठाना
reach|पहुँचना
read|पढ़ना
ready|तैयार
real|वास्तविक
reason|कारण
receive|प्राप्त करना
recent|हाल का
remember|याद रखना
repeat|दोहराना
reply|जवाब देना
report|रिपोर्ट
rest|आराम
result|परिणाम
return|लौटना
rice|चावल
rich|अमीर
right|सही
river|नदी
road|सड़क
room|कमरा
rule|नियम
run|दौड़ना
sad|उदास
safe|सुरक्षित
same|समान
save|बचाना
say|कहना
school|स्कूल
science|विज्ञान
sea|समुद्र
search|खोजना
season|मौसम
seat|सीट
second|दूसरा
secret|रहस्य
see|देखना
seem|लगना
sell|बेचना
send|भेजना
sentence|वाक्य
serious|गंभीर
service|सेवा
set|रखना
seven|सात
several|कई
share|साझा करना
she|वह
short|छोटा
should|चाहिए
show|दिखाना
sick|बीमार
side|किनारा
sign|संकेत
simple|सरल
since|से
sing|गाना
sister|बहन
sit|बैठना
six|छह
skill|कौशल
sleep|सोना
slow|धीमा
small|छोटा
smart|समझदार
smile|मुस्कान
so|इसलिए
social|सामाजिक
soft|मुलायम
some|कुछ
someone|कोई व्यक्ति
something|कुछ
sometimes|कभी-कभी
son|बेटा
song|गीत
soon|जल्द
sorry|माफ़ कीजिए
sound|आवाज़
south|दक्षिण
speak|बोलना
special|विशेष
spend|खर्च करना
sport|खेल
stand|खड़ा होना
start|शुरू करना
state|राज्य
stay|रहना
step|कदम
still|अभी भी
stop|रुकना
story|कहानी
street|गली
strong|मज़बूत
student|विद्यार्थी
study|पढ़ाई करना
subject|विषय
success|सफलता
successful|सफल
such|ऐसा
suddenly|अचानक
sugar|चीनी
suggest|सुझाव देना
summer|गर्मी
sun|सूरज
support|सहारा देना
sure|निश्चित
surprise|आश्चर्य
system|प्रणाली
table|मेज़
take|लेना
talk|बात करना
tall|लंबा
teacher|शिक्षक
team|टीम
technology|तकनीक
telephone|टेलीफ़ोन
tell|बताना
temperature|तापमान
ten|दस
test|परीक्षा
than|से
thank|धन्यवाद देना
that|वह
the|विशेष सूचक शब्द
their|उनका
them|उन्हें
then|तब
there|वहाँ
these|ये
they|वे
thing|चीज़
think|सोचना
third|तीसरा
this|यह
those|वे
though|हालाँकि
thought|विचार
thousand|हज़ार
three|तीन
through|के माध्यम से
time|समय
tired|थका हुआ
today|आज
together|साथ में
tomorrow|कल
tonight|आज रात
too|भी
tooth|दाँत
top|शीर्ष
total|कुल
touch|छूना
town|कस्बा
train|रेल
travel|यात्रा करना
tree|पेड़
true|सच
try|कोशिश करना
turn|मुड़ना
twice|दो बार
two|दो
type|प्रकार
under|नीचे
understand|समझना
unit|इकाई
university|विश्वविद्यालय
until|तक
up|ऊपर
use|उपयोग करना
useful|उपयोगी
usually|आमतौर पर
value|मूल्य
vegetable|सब्ज़ी
very|बहुत
video|वीडियो
view|दृश्य
village|गाँव
visit|मिलने जाना
voice|आवाज़
wait|इंतज़ार करना
wake|जागना
walk|चलना
wall|दीवार
want|चाहना
warm|गर्म
wash|धोना
watch|देखना
water|पानी
way|रास्ता
weak|कमज़ोर
wear|पहनना
weather|मौसम
website|वेबसाइट
week|सप्ताह
welcome|स्वागत
well|अच्छी तरह
west|पश्चिम
what|क्या
when|कब
where|कहाँ
whether|क्या
which|कौन-सा
while|जबकि
white|सफ़ेद
who|कौन
whole|पूरा
why|क्यों
wide|चौड़ा
wife|पत्नी
will|भविष्य सूचक सहायक क्रिया
win|जीतना
wind|हवा
window|खिड़की
winter|सर्दी
wish|इच्छा
with|के साथ
without|के बिना
woman|महिला
wonderful|शानदार
word|शब्द
work|काम
world|दुनिया
worry|चिंता करना
write|लिखना
wrong|गलत
year|साल
yellow|पीला
yes|हाँ
yesterday|बीता हुआ कल
yet|अभी तक
young|युवा
your|तुम्हारा
yourself|खुद
zero|शून्य
`;

lessonData.vocabulary = vocabularyText
  .trim()
  .split("\n")
  .map(line => {
    const [word, hindi] = line.split("|");
    return { word, hindi };
  });

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

// ------------------------------------
// 5. LESSON DISPLAY FUNCTIONS
// ------------------------------------

function openLesson(type) {
  const area = document.getElementById("lesson-area");
  const content = document.getElementById("lesson-content");

  if (!area || !content) {
    console.error("lesson-area या lesson-content HTML में नहीं मिला।");
    return;
  }

  let html = "";

  if (type === "daily") {
    html = "<h2>Daily Use Sentences</h2>";

    lessonData.daily.forEach((item, index) => {
      html += `
        <div class="lesson-item">
          <strong>${index + 1}. ${item.hindi}</strong>
          <p>${item.english}</p>
        </div>`;
    });
  }

  else if (type === "grammar") {
    html = "<h2>English Grammar: Tenses</h2>";

    Object.values(lessonData.grammar).forEach(tense => {
      html += `<h3>${tense.title}</h3>`;
      html += `<p>${tense.description}</p>`;

      tense.forms.forEach(form => {
        html += `
          <div class="lesson-item">
            <h4>${form.name}</h4>
            <p><strong>Formula:</strong> ${form.formula}</p>
            <p><strong>Example:</strong> ${form.example}</p>
            <p><strong>Hindi:</strong> ${form.hindi}</p>
          </div>`;
      });
    });
  }

  else if (type === "vocabulary") {
    html = "<h2>English Vocabulary with Hindi Meaning</h2>";

    lessonData.vocabulary.forEach((item, index) => {
      html += `
        <div class="lesson-item">
          <strong>${index + 1}. ${item.word}</strong>
          <p>${item.hindi}</p>
        </div>`;
    });
  }

  else if (type === "practice") {
    html = "<h2>Hindi to English Practice</h2>";

    lessonData.practice.forEach((item, index) => {
      html += `
        <div class="lesson-item">
          <strong>${index + 1}. ${item.hindi}</strong>
          <details>
            <summary>Show English Answer</summary>
            <p>${item.english}</p>
          </details>
        </div>`;
    });
  }

  else {
    html = "<p>Lesson not found.</p>";
  }

  content.innerHTML = html;
  area.style.display = "block";
  area.scrollIntoView({ behavior: "smooth", block: "start" });
}

function closeLesson() {
  const area = document.getElementById("lesson-area");

  if (area) {
    area.style.display = "none";
  }
}
