import { useState, useTransition } from 'react';
import { Dropdown } from 'rsuite';
import 'rsuite/Dropdown/styles/index.css';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';



const Drop=() => {
  const [lang, setLang] = useState('en');
  i18n.use(LanguageDetector).use(initReactI18next).init({
    debug:true,
  lng: lang,
   resources:
   { en:{
        translation:{
          Welcome:'Your Health Our Priority: Get Health Support, Find Care and Stay Informed',
            greeting:"We empower you to take charge of your health with our conversational health-care assistant chatbot, insightful reports, doctor finder, and engaging health chat",
            Button1:"Meet your AI Health Assistant",
            Lang:"Language",
            Loca:"Clinic Location",
            Sat:"Satisfaction",
            AH:"Your One Stop Solutouion for Health Care", 
            line1:"We Offer a suite of innovative tools to help you navigate your health care journey, from finding care to managing your health",
            line2:"One of our key features is our extensive medical report database, which encompasses a wide range of conditions, treatments, and medical terminology.",
            line3:"Users can search for doctors based on specialty, location, availability, and patient reviews. The AI assistant can provide personalized recommendations by understanding the user's preferences and medical needs.",

            re:"Read More",
            1:1,
            DOC:"Find a Doctor",
            doctor:"Don't know where to start? Find a doctor here for your every problem",
            Medical:"Medical Report",
            Report:"Know the in and out of your report anyday anytime",
            chat:"Chat Bot",
            ch:"Chat with our health assistant to get started with your health journey",
            serve:"Our Medical Services",
            ser:"We provide a suite of innovative tools to help you navigate your health care journey, from finding care to managing your health",
            descs:">World-class care for everyone. Our health System offers unmatched, expert health care. From the lab to the clinic.",
            get:"Get virtual anytime.",
            well:'1. Ask Anything.',
            2:'2. Get virtual anytime.',
            3:'3. Your Pocket Doctor.',
            doc_tarref:"Our Great Doctors",
            heading1:"Find the Doctors in your area",
            sea:"Search",
            pla:"Search for Doctors",
            heading2:"Welcome to Chatbot!",
            prompt:"Welcome! If have you any Meedical Queries please specify your age, gender and severity of the problem along with other relevant information",
          
        }

    },
    hi:{
        translation:{
          Welcome:"आपका स्वास्थ्य साथी: सहायता प्राप्त करें, देखभाल पाएं और जागरूक रहें |",
    greeting:"हम आपको हमारे वार्तालापी स्वास्थ्य देखभाल सहायक चैटबॉट, दृढ़ रिपोर्ट, डॉक्टर खोजने और आकर्षक स्वास्थ्य चैट के साथ अपने स्वास्थ्य का प्रबंधन करने की शक्ति प्रदान करते हैं।",
    Button1:"अपने AI स्वास्थ्य सहायक से मिलें",
    Lang:"भाषा",
    Loca:"क्लिनिक स्थान",
    Sat:"संतोष",
    AH:"आपके स्वास्थ्य की एक स्टॉप समाधान, स्वास्थ्य देखभाल के लिए",
    line1:"हम आपको अपने स्वास्थ्य देखभाल की यात्रा में मदद करने के लिए एक सुइट नवाचारी उपकरण प्रदान करते हैं, देखभाल खोजने से लेकर अपने स्वास्थ्य का प्रबंधन करने तक",
    line2:"हमारी प्रमुख विशेषताओं में से एक हमारा व्यापक चिकित्सा रिपोर्ट डेटाबेस है, जिसमें विभिन्न स्थितियों, उपचारों और चिकित्सा शब्दावली का व्यापक विवरण है।",
    line3:"उपयोगकर्ता विशेषज्ञता, स्थान, उपलब्धता और रोगी समीक्षाओं के आधार पर डॉक्टरों की खोज कर सकते हैं। एआई सहायक उपयोगकर्ता की पसंद और चिकित्सा आवश्यकताओं को समझकर व्यक्तिगत सिफारिशें प्रदान कर सकता है।",
    re:"और पढ़ें",
    1:2,
    DOC:"डॉक्टर खोजें",
    doctor:"कहाँ से शुरू करें? हर समस्या के लिए यहां एक डॉक्टर खोजें",
    Medical:"चिकित्सा रिपोर्ट",
    
    Report:"अपनी रिपोर्ट की जानकारी कभी भी कहीं भी जानें",
    chat:"चैट बॉट",
    ch:"अपने स्वास्थ्य यात्रा की शुरुआत करने के लिए हमारे स्वास्थ्य सहायक के साथ चैट करें",
    serve:"हमारी चिकित्सा सेवाएं",
    ser:"हम आपको अपने स्वास्थ्य देखभाल की यात्रा में मदद करने के लिए एक सुइट नवाचारी उपकरण प्रदान करते हैं, देखभाल खोजने से लेकर अपने स्वास्थ्य का प्रबंधन करने तक",
    descs:"दुनिया भर में सभी के लिए विश्व-क्लास देखभाल। हमारी स्वास्थ्य प्रणाली अद्वितीय, विशेषज्ञ स्वास्थ्य देखभाल प्रदान करती है। प्रयोगशाला से क्लिनिक तक।",
    get:"किसी भी समय वर्चुअल प्राप्त करें।",
    well:'1. कुछ भी पूछें।',
    2:'2. किसी भी समय वर्चुअल प्राप्त करें।',
    3:'3. आपका पॉकेट डॉक्टर।',
    doc_tarref:"हमारे महान डॉक्टर",
    heading1:"अपने क्षेत्र में डॉक्टर खोजें",
    sea:"खोजें",
    pla:"डॉक्टरों के लिए खोजें",
    heading2:"चैटबॉट में आपका स्वागत है!",
    prompt:"स्वागत है! यदि आपके पास कोई चिकित्सा प्रश्न है तो कृपया अपनी आयु, लिंग और समस्या की गंभीरता को स्पष्ट करें साथ ही अन्य संबंधित जानकारी दें।",
        },
    },
    kn:{
        translation:{
          Welcome:"ನಿಮ್ಮ ಆರೋಗ್ಯ ಪ್ರಾಧಾನ್ಯತೆ: ಆರೋಗ್ಯ ಬೆಂಬಲವನ್ನು ಪಡೆಯಿರಿ, ಸೇವೆಯನ್ನು ಹುಡುಕಿ ಮತ್ತು ಜಾಗೃತಿಯಿಂದ ಉಳಿಯಿರಿ.",
    greeting:"ನಮ್ಮ ಸಂವಾದಾತ್ಮಕ ಆರೋಗ್ಯ ಸಹಾಯಕ ಚಾಟ್‌ಬಾಟ್, ಅರ್ಥಜ್ಞಾನದ ವರದಿ, ಡಾಕ್ಟರ್ ಹುಡುಕಾಟ, ಮತ್ತು ಆಕರ್ಷಕ ಆರೋಗ್ಯ ಚಾಟ್‌ನೊಂದಿಗೆ ನಿಮ್ಮ ಆರೋಗ್ಯದ ಜವಾಬ್ದಾರಿಯನ್ನು ಹೊಂದಿಸುವ ಶಕ್ತಿಪೂರ್ವಕವಾಗಿ ನಿಮ್ಮ ಆರೋಗ್ಯವನ್ನು ತಗೊಟಿಸುವೆವು.",
    Button1:"ನಿಮ್ಮ AI ಆರೋಗ್ಯ ಸಹಾಯಕನನ್ನು ಭೇಟಿಯಾಗಿ",
    Lang:"ಭಾಷೆ",
    Loca:"ಕ್ಲಿನಿಕ್ ಸ್ಥಳ",
    Sat:"ತೃಪ್ತಿ",
    AH:"ನಿಮ್ಮ ಆರೋಗ್ಯಕ್ಕಾಗಿ ಒಂದು ಸ್ಥಲದ ಪರಿಹಾರ",
    line1:"ನಿಮ್ಮ ಆರೋಗ್ಯ ಸೆಟ್ಟಿಂಗ್‌ನಲ್ಲಿ ನಿರ್ದೇಶಿಸಲು ನಮ್ಮ ನವೀಕರಣಾತ್ಮಕ ಉಪಕರಣಗಳ ಸುಯೋಗವನ್ನು ಒದಗಿಸುವ ನಾವು, ಸೇವೆಯನ್ನು ಹುಡುಕಲು ನಿಮ್ಮ ಆರೋಗ್ಯ ಪ್ರವಾಸದಲ್ಲಿ ನಿಮಗೆ ಸಹಾಯ ಮಾಡಲು ಒಂದು ಸುಇಟ್ ಉಪಕರಣಗಳ ಸುಯೋಗವನ್ನು ಒದಗಿಸುವೆವು.",
    line2:"ನಮ್ಮ ಪ್ರಮುಖ ವೈಶಿಷ್ಟ್ಯಗಳಲ್ಲಿ ಒಂದು ವಿಸ್ತೃತ ವೈದ್ಯಕೀಯ ವರದಿ ಡೇಟಾಬೇಸ್ ಇದೆ, ಇದು ವಿವಿಧ ಸ್ಥಿತಿಗಳು, ಚಿಕಿತ್ಸೆಗಳು, ಮತ್ತು ವೈದ್ಯಕೀಯ ಶಬ್ದಾವಲಿಯನ್ನು ಒಳಗೊಂಡಿದೆ.",
    line3:"ಬಳಕೆದಾರರು ವಿಶೇಷತೆ, ಸ್ಥಳ, ಲಭ್ಯತೆ ಮತ್ತು ರೋಗಿ ಸಮೀಕ್ಷೆಗಳ ಆಧಾರದ ಮೇಲೆ ವೈದ್ಯರನ್ನು ಹುಡುಕಬಹುದು. ಯೂಜರ್ ಅನುಭವಗಳು ಮತ್ತು ವೈದ್ಯಕೀಯ ಅಗತ್ಯತೆಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಂಡು, ಏಆಯ್ ಸಹಾಯಕನು ಬಳಕೆದಾರರ ಆಸಕ್ತಿಗಳನ್ನು ಮತ್ತು ವೈದ್ಯಕೀಯ ಅಗತ್ಯತೆಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಂಡು ವೈಯಕ್ತಿಕ ಶಿಫಾರಿಶೆಗಳನ್ನು ಒದಗಿಸಬಹುದು.",
    re:"ಓದಿ ಹೆಚ್ಚು",
    1:3,
    DOC:"ಡಾಕ್ಟರ್ ಹುಡುಕಿ",
    doctor:"ನಿರ್ದಿಷ್ಟ ಆರಂಭವನ್ನು ಹೇಗೆ ಮಾಡಬೇಕು? ನಿಮ್ಮ ಪ್ರತಿ ಸಮಸ್ಯೆಗಾಗಿ ಇಲ್ಲಿ ಡಾಕ್ಟರ್ ಹುಡುಕಿ",
    Medical:"ವೈದ್ಯಕೀಯ ವರದಿ",
    Report:"ನಿಮ್ಮ ವರದಿಯ ಒಳಗೊಂದನ್ನು ಯಾವಾಗಲೂ ಯಾವಾಗಲೂ ತಿಳಿಯಿರಿ",
    chat:"ಚಾಟ್ ಬಾಟ್",
    ch:"ನಿಮ್ಮ ಆರೋಗ್ಯ ಪ್ರವಾಸದ ಆರಂಭಕ್ಕೆ ನಮ್ಮ ಆರೋಗ್ಯ ಸಹಾಯಕನೊಂದಿಗೆ ಚಾಟ್ ಮಾಡಿ",
    serve:"ನಮ್ಮ ವೈದ್ಯಕೀಯ ಸೇವೆಗಳು",
    ser:"ನಿಮ್ಮ ಆರೋಗ್ಯ ಪ್ರವಾಸದಲ್ಲಿ ಸೇವೆಯನ್ನು ಹುಡುಕಲು ನಿಮ್ಮ ಆರೋಗ್ಯ ಪ್ರವಾಸದಲ್ಲಿ ಸೇವೆಯನ್ನು ಹುಡುಕಲು ನಿಮ್ಮ ಆರೋಗ್ಯ ಪ್ರವಾಸದಲ್ಲಿ ಸೇವೆಯನ್ನು ಹುಡುಕಲು ನಿಮ್ಮ ಆರೋಗ್ಯ ಪ್ರವಾಸದಲ್ಲಿ ಸೇವೆಯನ್ನು ಹುಡುಕಲು ನಿಮ್ಮ ಆರೋಗ್ಯ ಪ್ರವಾಸದಲ್ಲಿ ಸೇವೆಯನ್ನು ಹುಡುಕಲು ನಿಮ್ಮ ಆರೋಗ್ಯ ಪ್ರವಾಸದಲ್ಲಿ ಸೇವೆಯನ್ನು ಹುಡುಕಲು ನಿಮ್ಮ ಆರೋಗ್ಯ ಪ್ರವಾಸದಲ್ಲ",
    descs:"ಎಲ್ಲರಿಗೂ ವಿಶ್ವದ ಶ್ರೇಷ್ಠ ಆರೋಗ್ಯ ಸೇವೆ. ನಮ್ಮ ಆರೋಗ್ಯ ವ್ಯವಸ್ಥೆ ಅದೆಷ್ಟು ಅದ್ವಿತೀಯ, ವಿಶೇಷಜ್ಞ ಆರೋಗ್ಯ ಸೇವೆ ಒದಗಿಸುತ್ತದೆ. ಪ್ರಯೋಗಶಾಲೆಯಿಂದ ಕ್ಲಿನಿಕ್‌ಗೆ.",
    get:"ಯಾವಾಗಲೂ ವರ್ಚುವಲ್ ಪಡೆಯಿರಿ.",
    well:'1. ಏನಾದರೂ ಕೇಳಿಕೊಳ್ಳಿ.',
    2:'2. ಯಾವಾಗಲೂ ವರ್ಚುವಲ್ ಪಡೆಯಿರಿ.',
    3:'3.  ನಿಮ್ಮ ಜೀಪಿ ಡಾಕ್ಟರ್.',
    doc_tarref:"ನಮ್ಮ ಉತ್ತಮ ಡಾಕ್ಟರ್‌ಗಳು",
    heading1:"ನಿಮ್ಮ ಪ್ರದೇಶದಲ್ಲಿ ಡಾಕ್ಟರ್‌ಗಳನ್ನು ಹುಡುಕಿ",
    sea:"ಹುಡುಕು",
    pla:"ಡಾಕ್ಟರ್‌ಗಳನ್ನು ಹುಡುಕಿ",
    heading2:"ಚಾಟ್‌ಬಾಟ್‌ಗೆ ಸ್ವಾಗತ",
    prompt:"ಸ್ವಾಗತ! ನಿಮ್ಮಲ್ಲಿ ಯಾವುದೇ ವೈದ್ಯಕೀಯ ಪ್ರಶ್ನೆಗಳಿದ್ದರೆ ದಯವಿಟ್ಟು ನಿಮ್ಮ ವಯಸ್ಸು, ಲಿಂಗ ಮತ್ತು ಸಮಸ್ಯೆಯ ಗಂಭೀರತೆಯನ್ನು ಸೂಚಿಸಿ ಇತರ ಸಂಬಂಧಿತ ಮಾಹಿತಿಯೊಂದಿಗೆ ನಿರ್ದಿಷ್ಟಪಡಿಸಿ",

        },
       
    }}
}) 
const onSelect = (eventKey) => {
  if (eventKey === 'En') {
    setLang('en');
  } else if (eventKey === 'Hi') { 
    setLang('hi');
  } else if (eventKey === 'KN') {
    setLang('kn');
  }
}
  
  return (
    <Dropdown title={lang} onSelect={onSelect}>
    <Dropdown.Item eventKey="En">EN</Dropdown.Item>
    <Dropdown.Item eventKey ="Hi">HI</Dropdown.Item>
    <Dropdown.Item eventKey="KN">KN</Dropdown.Item>
    </Dropdown>
  );
}
export default Drop;