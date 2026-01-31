import { useState, useRef, useEffect } from 'react';
import { X, Send, MessageCircle, Languages, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { ScrollArea } from './ui/scroll-area';
import { Badge } from './ui/badge';
import { saveChatbotMessage } from '../utils/api';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface QuickAction {
  label: string;
  labelHi: string;
  action: string;
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [language, setLanguage] = useState<'en' | 'hi'>('en');
  const [sessionId] = useState(() => `session_${Date.now()}_${Math.random().toString(36).substring(7)}`);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickActions: QuickAction[] = [
    { label: '📅 Upcoming Events', labelHi: '📅 आगामी कार्यक्रम', action: 'events' },
    { label: '🎓 Our Programs', labelHi: '🎓 हमारे कार्यक्रम', action: 'programs' },
    { label: '👥 Join Community', labelHi: '👥 समुदाय में शामिल हों', action: 'community' },
    { label: '💼 Mentorship', labelHi: '💼 मार्गदर्शन', action: 'mentorship' },
    { label: '📞 Contact Us', labelHi: '📞 संपर्क करें', action: 'contact' },
  ];

  const botResponses: Record<string, { en: string; hi: string }> = {
    greeting: {
      en: "Hi! I'm your WiCyS Companion! 👋 I'm here to help you learn about our programs, events, and community. How can I assist you today?",
      hi: "नमस्ते! मैं आपकी WiCyS साथी हूँ! 👋 मैं आपको हमारे कार्यक्रमों, आयोजनों और समुदाय के बारे में जानने में मदद करने के लिए यहाँ हूँ। आज मैं आपकी कैसे मदद कर सकती हूँ?",
    },
    events: {
      en: "We have exciting events coming up! 🎉\n\n• Cybersecurity Leadership Summit (Nov 15-16)\n• Web Application Security Workshop (Oct 25)\n• Monthly Networking Meetup (Oct 18)\n\nWould you like to register for any of these events?",
      hi: "हमारे पास रोमांचक कार्यक्रम आ रहे हैं! 🎉\n\n• साइबर सुरक्षा नेतृत्व शिखर सम्मेलन (15-16 नवंबर)\n• वेब एप्लिकेशन सुरक्षा कार्यशाला (25 अक्टूबर)\n• मासिक नेटवर्किंग मीटअप (18 अक्टूबर)\n\nक्या आप इनमें से किसी कार्यक्रम के लिए पंजीकरण करना चाहेंगे?",
    },
    programs: {
      en: "We offer several amazing programs! 📚\n\n✨ Workshops & Training\n✨ Mentorship Program\n✨ Networking Events\n✨ Career Development\n\nEach program is designed to support your growth in cybersecurity. Which one interests you most?",
      hi: "हम कई शानदार कार्यक्रम प्रदान करते हैं! 📚\n\n✨ कार्यशालाएं और प्रशिक्षण\n✨ मार्गदर्शन कार्यक्रम\n✨ नेटवर्किंग कार्यक्रम\n✨ करियर विकास\n\nप्रत्येक कार्यक्रम साइबर सुरक्षा में आपकी वृद्धि का समर्थन करने के लिए डिज़ाइन किया गया है। आपको कौन सा सबसे अधिक रुचिकर लगता है?",
    },
    community: {
      en: "Join our thriving community of 500+ women in cybersecurity! 💪\n\nBenefits of joining:\n• Network with professionals\n• Access exclusive resources\n• Attend workshops & events\n• Get mentorship opportunities\n\nClick the 'Join Us' button to become a member!",
      hi: "साइबर सुरक्षा में 500+ महिलाओं के हमारे संपन्न समुदाय में शामिल हों! 💪\n\nशामिल होने के लाभ:\n• पेशेवरों के साथ नेटवर्क करें\n• विशेष संसाधनों तक पहुंच\n• कार्यशालाओं और कार्यक्रमों में भाग लें\n• मार्गदर्शन के अवसर प्राप्त करें\n\nसदस्य बनने के लिए 'हमसे जुड़ें' बटन पर क्लिक करें!",
    },
    mentorship: {
      en: "Our Mentorship Program connects you with experienced professionals! 🌟\n\nWhat you get:\n• 1-on-1 mentoring sessions\n• Career guidance\n• Skill development support\n• Industry insights\n\nInterested in finding a mentor or becoming one?",
      hi: "हमारा मार्गदर्शन कार्यक्रम आपको अनुभवी पेशेवरों से जोड़ता है! 🌟\n\nआपको क्या मिलता है:\n• व्यक्तिगत मार्गदर्शन सत्र\n• करियर मार्गदर्शन\n• कौशल विकास समर्थन\n• उद्योग अंतर्दृष्टि\n\nक्या आप एक मार्गदर्शक खोजने या बनने में रुचि रखते हैं?",
    },
    contact: {
      en: "You can reach us at:\n\n📧 Email: india@wicys.org\n📍 Location: India (Multiple Chapters)\n🌐 Follow us on social media\n\nFeel free to send us a message through our contact form!",
      hi: "आप हमसे यहाँ संपर्क कर सकते हैं:\n\n📧 ईमेल: india@wicys.org\n📍 स्थान: भारत (कई अध्याय)\n🌐 सोशल मीडिया पर हमें फॉलो करें\n\nहमारे संपर्क फॉर्म के माध्यम से हमें संदेश भेजने के लिए स्वतंत्र महसूस करें!",
    },
    default: {
      en: "I'm here to help! You can ask me about:\n• Upcoming events 📅\n• Our programs 🎓\n• Community benefits 👥\n• Mentorship opportunities 💼\n• Contact information 📞\n\nOr use the quick actions below!",
      hi: "मैं मदद के लिए यहाँ हूँ! आप मुझसे इसके बारे में पूछ सकते हैं:\n• आगामी कार्यक्रम 📅\n• हमारे कार्यक्रम 🎓\n• समुदाय के लाभ 👥\n• मार्गदर्शन के अवसर 💼\n• संपर्क जानकारी 📞\n\nया नीचे दिए गए त्वरित क्रियाओं का उपयोग करें!",
    },
    feedback: {
      en: "Thank you for your feedback! 💚 Your input helps us improve. Is there anything else I can help you with?",
      hi: "आपकी प्रतिक्रिया के लिए धन्यवाद! 💚 आपका इनपुट हमें सुधारने में मदद करता है। क्या कुछ और है जिसमें मैं आपकी मदद कर सकती हूँ?",
    },
  };

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const response = botResponses['greeting'][language];
      const newMessage: Message = {
        id: Date.now(),
        text: response,
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages([newMessage]);
      
      // Save bot message to backend
      saveChatbotMessage({
        sessionId,
        message: response,
        sender: 'bot',
        language
      });
    }
  }, [isOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const addBotMessage = (type: keyof typeof botResponses) => {
    const response = botResponses[type][language];
    const newMessage: Message = {
      id: Date.now(),
      text: response,
      sender: 'bot',
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMessage]);
    
    // Save bot message to backend
    saveChatbotMessage({
      sessionId,
      message: response,
      sender: 'bot',
      language
    });
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    
    // Save user message to backend
    saveChatbotMessage({
      sessionId,
      message: inputValue,
      sender: 'user',
      language
    });
    
    setInputValue('');

    setTimeout(() => {
      const lowerInput = inputValue.toLowerCase();
      
      if (lowerInput.includes('event') || lowerInput.includes('कार्यक्रम')) {
        addBotMessage('events');
      } else if (lowerInput.includes('program') || lowerInput.includes('प्रशिक्षण')) {
        addBotMessage('programs');
      } else if (lowerInput.includes('community') || lowerInput.includes('समुदाय')) {
        addBotMessage('community');
      } else if (lowerInput.includes('mentor') || lowerInput.includes('मार्गदर्शन')) {
        addBotMessage('mentorship');
      } else if (lowerInput.includes('contact') || lowerInput.includes('संपर्क')) {
        addBotMessage('contact');
      } else if (lowerInput.includes('feedback') || lowerInput.includes('प्रतिक्रिया')) {
        addBotMessage('feedback');
      } else {
        addBotMessage('default');
      }
    }, 500);
  };

  const handleQuickAction = (action: string) => {
    const actionMessage: Message = {
      id: Date.now(),
      text: quickActions.find((a) => a.action === action)?.[language === 'en' ? 'label' : 'labelHi'] || '',
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, actionMessage]);
    
    // Save user message to backend
    saveChatbotMessage({
      sessionId,
      message: actionMessage.text,
      sender: 'user',
      language
    });

    setTimeout(() => {
      addBotMessage(action as keyof typeof botResponses);
    }, 500);
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'hi' : 'en'));
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 group"
          aria-label="Open chat"
        >
          {/* Anime Girl Avatar */}
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-accent rounded-full blur-xl opacity-50 group-hover:opacity-70 transition-opacity" />
            
            {/* Avatar container */}
            <div className="relative w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-2xl border-4 border-white group-hover:scale-110 transition-transform">
              <div className="text-4xl">👩‍💻</div>
            </div>

            {/* Notification badge */}
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-accent rounded-full flex items-center justify-center border-2 border-white">
              <Sparkles className="w-3 h-3 text-white" />
            </div>

            {/* Message indicator */}
            <div className="absolute -top-2 -left-2 bg-white rounded-full px-3 py-1 shadow-lg border-2 border-accent opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-xs text-primary whitespace-nowrap">
                {language === 'en' ? 'Need help?' : 'मदद चाहिए?'}
              </span>
            </div>
          </div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-96 h-[600px] max-h-[80vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border-4 border-primary/20">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-accent p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                <div className="text-2xl">👩‍💻</div>
              </div>
              <div>
                <h3 className="font-semibold">
                  {language === 'en' ? 'WiCyS Companion' : 'WiCyS साथी'}
                </h3>
                <p className="text-xs opacity-90">
                  {language === 'en' ? 'Here to help you!' : 'आपकी मदद के लिए यहाँ हूँ!'}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={toggleLanguage}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                aria-label="Toggle language"
              >
                <Languages className="w-5 h-5" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Language Badge */}
          <div className="px-4 py-2 bg-secondary border-b border-border flex items-center justify-between">
            <Badge variant="outline" className="text-xs">
              {language === 'en' ? '🇬🇧 English' : '🇮🇳 हिन्दी'}
            </Badge>
            <span className="text-xs text-muted-foreground">
              {language === 'en' ? 'AI-powered assistant' : 'AI-संचालित सहायक'}
            </span>
          </div>

          {/* Messages Area */}
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                      message.sender === 'user'
                        ? 'bg-primary text-white'
                        : 'bg-secondary text-gray-900'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{message.text}</p>
                    <p className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>

          {/* Quick Actions */}
          {messages.length <= 1 && (
            <div className="px-4 py-3 border-t border-border bg-secondary/50">
              <p className="text-xs text-muted-foreground mb-2">
                {language === 'en' ? 'Quick actions:' : 'त्वरित क्रियाएं:'}
              </p>
              <div className="flex flex-wrap gap-2">
                {quickActions.map((action) => (
                  <button
                    key={action.action}
                    onClick={() => handleQuickAction(action.action)}
                    className="text-xs px-3 py-1.5 bg-white border border-primary/20 rounded-full hover:bg-primary/10 hover:border-primary transition-colors"
                  >
                    {language === 'en' ? action.label : action.labelHi}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Area */}
          <div className="p-4 border-t border-border bg-white">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex gap-2"
            >
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={
                  language === 'en' ? 'Type your message...' : 'अपना संदेश लिखें...'
                }
                className="flex-1"
              />
              <Button
                type="submit"
                size="icon"
                className="bg-accent hover:bg-accent/90 text-white flex-shrink-0"
              >
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}