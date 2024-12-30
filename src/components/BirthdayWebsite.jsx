import React, { useState, useEffect, useRef } from 'react';
import { Heart, Gift, Star, Music, Sparkles, Cake, Camera, Calendar, Clock, Mail, Phone, Map, Quote, Image, MessageCircle, Heart as HeartIcon, PartyPopper, Flower, Sun, Moon, Sparkle } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const BirthdayWebsite = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [activeQuote, setActiveQuote] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [timeOfDay, setTimeOfDay] = useState('day');
  const [showConfetti, setShowConfetti] = useState(false);

  const parallaxRef = useRef(null);

  const quotes = [
    "I don't feel embarrassed telling all my friends that you are in charge of my life. I feel lucky and proud to have a woman as hardworking and focused as you are, my Inshira.",
    "To my dearest lifeline, as you blow out the candles today, know that you have ignited a fire in my heart that will forever burn with love for you.",
    "Hamaisha Muskrati rahain ap k sath Duniya hai mery ap k chahra bayhad haseen duniya ki sab say Khoobsoorat Mery Azize Jan Hain Inshira G",
    "Saray Jahan Say khoobsorat Hai Mery Baigum Jan Bohat bohat chahta hun ap Ko lovvvvvveeeeeee Sooo much janu ji Cuteee siiiii Bachi hain Mery Ap 😘😘",
    "Every moment with you feels like a celebration of love, and today is extra special because it's all about you.",
    "Your smile brightens my darkest days, and your love gives me strength to face any challenge.",
    "In you, I found my soulmate, my best friend, and my forever love. Happy Birthday, my dear wife.",
    "Each year with you makes me fall in love all over again. You're my endless source of joy."
  ];

  const memories = [
    {
      title: "First conversation",
      date: "2020",
      description: "The day our eyes met and hearts connected",
      icon: Calendar,
      color: "pink"
    },
    {
      title: "First Love Note",
      date: "2021",
      description: "When words became messengers of our love",
      icon: MessageCircle,
      color: "purple"
    },
    {
      title: "First Picture",
      date: "2023",
      description: "Capturing our joy forever",
      icon: Camera,
      color: "blue"
    },
    {
      title: "First Meet",
      date: "2024",
      description: "Beginning of our beautiful journey",
      icon: HeartIcon,
      color: "red"
    },
    {
      title: "Engagement",
      date: "InshaAllah Very soon",
      description: "The promise of forever",
      icon: Star,
      color: "yellow"
    },
    {
      title: "Wedding Day",
      date: "InshaAllah Very soon",
      description: "When two souls became one",
      icon: Gift,
      color: "green"
    },
    {
      title: "First Home",
      date: "InshaAllah Very soon",
      description: "Building our nest together",
      icon: Map,
      color: "indigo"
    },
    {
      title: "Forever Together",
      date: "We are made for each other",
      description: "Our endless love story",
      icon: Clock,
      color: "violet"
    }
  ];

  useEffect(() => {
    setIsLoaded(true);
    setTimeout(() => {
      setShowMessage(true);
      setShowConfetti(true);
    }, 1000);

    const quoteInterval = setInterval(() => {
      setActiveQuote(prev => (prev + 1) % quotes.length);
    }, 5000);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleTimeOfDay = () => {
      const hour = new Date().getHours();
      setTimeOfDay(hour >= 6 && hour < 18 ? 'day' : 'night');
    };

    window.addEventListener('scroll', handleScroll);
    handleTimeOfDay();
    const timeInterval = setInterval(handleTimeOfDay, 60000);

    return () => {
      clearInterval(quoteInterval);
      clearInterval(timeInterval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-1000 ${timeOfDay === 'day'
        ? 'bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100'
        : 'bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900'
      }`}>
      {/* Enhanced Background with Parallax Stars */}
      <div className="fixed w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute right-8 top-8 transition-transform duration-1000 transform hover:scale-110">
          {timeOfDay === 'day' ? (
            <Sun className="text-yellow-500 animate-spin-slow" size={48} />
          ) : (
            <Moon className="text-blue-200 animate-float" size={48} />
          )}
        </div>

        {/* Enhanced Floating Elements with Dynamic Parallax */}
        <div ref={parallaxRef} className="relative w-full h-full">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: `translateY(${scrollY * (0.1 + Math.random() * 0.3)}px) 
                           rotate(${Math.random() * 360}deg) 
                           scale(${0.5 + Math.random() * 0.8})`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 6}s`,
                opacity: timeOfDay === 'day' ? 0.8 : 0.4
              }}
            >
              {i % 6 === 0 ? <Heart className="text-pink-400 w-4 h-4" /> :
                i % 6 === 1 ? <Star className="text-yellow-400 w-4 h-4" /> :
                  i % 6 === 2 ? <Sparkles className="text-purple-400 w-4 h-4" /> :
                    i % 6 === 3 ? <Flower className="text-red-400 w-4 h-4" /> :
                      i % 6 === 4 ? <PartyPopper className="text-blue-400 w-4 h-4" /> :
                        <Gift className="text-green-400 w-4 h-4" />}
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Main Content */}
      <div className="relative z-10">
        {/* Improved Header with 3D Effects */}
        <header className={`text-center py-16 md:py-24 transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
          }`}>
          <div className="relative inline-block perspective-3d">
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 animate-gradient-x">
              Happy Birthday
            </h1>
            <div className="absolute -right-12 -top-12 animate-float">
              <Cake className="text-pink-500 transform hover:scale-125 transition-transform" size={48} />
            </div>
            <div className="absolute -left-12 -top-12 animate-float-reverse">
              <Gift className="text-purple-500 transform hover:scale-125 transition-transform" size={48} />
            </div>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold mt-6 animate-shine-rainbow">
            <span className={`${timeOfDay === 'day' ? 'text-purple-600' : 'text-purple-300'}`}>
              Inshira Asad Ul Islam
            </span>
          </h2>
        </header>

        {/* Enhanced Message Card with Glass Effect */}
        <Card className={`max-w-4xl mx-auto px-4 transform transition-all duration-1000 
          ${timeOfDay === 'day' ? 'bg-white/60' : 'bg-gray-900/60 text-white'} 
          hover:shadow-2xl hover:scale-105 backdrop-blur-lg rounded-xl
          ${showMessage ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
          <CardHeader className="text-center border-b border-pink-200">
            <CardTitle className="flex items-center justify-center space-x-4 flex-wrap">
              <Quote className="text-pink-500 animate-pulse" size={32} />
              <span className="text-2xl sm:text-3xl md:text-4xl font-semibold bg-gradient-to-r from-pink-600 to-purple-600 text-transparent bg-clip-text">
                Love Notes
              </span>
              <Quote className="text-pink-500 animate-pulse" size={32} />
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 md:p-8">
            <div className="text-lg md:text-xl text-center italic min-h-[120px] transition-all duration-500 transform hover:scale-105 text-sky-600">
              {quotes[activeQuote]}
            </div>
          </CardContent>
        </Card>

        {/* Enhanced Memory Timeline with Hover Effects */}
        <div className="max-w-6xl mx-auto mt-16 px-4">
          <h3 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 
            ${timeOfDay === 'day' ? 'text-purple-600' : 'text-purple-300'} 
            animate-pulse perspective-text`}>
            Our Beautiful Journey Together
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {memories.map((memory, index) => (
              <div
                key={index}
                className={`group ${timeOfDay === 'day' ? 'bg-white/80' : 'bg-gray-900/80'} 
                  backdrop-blur-lg p-6 rounded-xl shadow-lg hover:shadow-2xl transform 
                  hover:-translate-y-2 transition-all duration-300 cursor-pointer
                  hover:bg-gradient-to-br hover:from-${memory.color}-50 hover:to-${memory.color}-100
                  dark:hover:from-${memory.color}-900 dark:hover:to-${memory.color}-800`}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="relative">
                    <memory.icon
                      className={`text-${memory.color}-500 group-hover:scale-125 transition-transform duration-300`}
                      size={40}
                    />
                    <div className={`absolute -inset-4 bg-${memory.color}-100 rounded-full -z-10 
                      opacity-0 group-hover:opacity-50 transition-opacity duration-300 animate-pulse`} />
                  </div>
                  <h4 className={`font-bold text-xl ${timeOfDay === 'day' ? 'text-gray-800' : 'text-white'}
                    group-hover:text-${memory.color}-600 dark:group-hover:text-${memory.color}-300`}>
                    {memory.title}
                  </h4>
                  <p className={`font-medium ${timeOfDay === 'day' ? 'text-purple-600' : 'text-purple-300'}`}>
                    {memory.date}
                  </p>
                  <p className={`text-sm transform opacity-0 translate-y-4 group-hover:opacity-100 
                    group-hover:translate-y-0 transition-all duration-300
                    ${timeOfDay === 'day' ? 'text-gray-600' : 'text-gray-300'}`}>
                    {memory.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Footer with Animation */}
        <footer className="text-center py-12 mt-16">
          <div className="flex flex-col items-center justify-center space-y-6">
            <div className="flex items-center justify-center space-x-6">
              <Gift className="text-purple-500 animate-bounce" size={32} />
              <Heart className="text-pink-500 animate-pulse" size={32} />
              <Music className="text-blue-500 animate-bounce" size={32} />
            </div>
            <p className={`text-xl font-medium animate-pulse
              ${timeOfDay === 'day' ? 'text-gray-700' : 'text-gray-300'}`}>
              ❤️ With endless love and devotion Asad ❤️
            </p>
          </div>
        </footer>
      </div>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes float-reverse {
          0%, 100% { transform: translateY(-20px) rotate(-5deg); }
          50% { transform: translateY(0px) rotate(0deg); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-reverse {
          animation: float-reverse 3s ease-in-out infinite;
        }
        @keyframes shine-rainbow {
          0% { background-position: 200% center; color: #ff6b6b; }
          25% { color: #4ecdc4; }
          50% { color: #45b7d1; }
          75% { color: #96c; }
          100% { background-position: -200% center; color: #ff6b6b; }
        }
        .animate-shine-rainbow {
          animation: shine-rainbow 8s linear infinite;
        }
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 4s ease infinite;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .perspective-3d {
          transform: perspective(1000px) rotateX(10deg);
          transform-style: preserve-3d;
        }
        .perspective-text {
          transform: perspective(800px) rotateX(5deg);
          transform-style: preserve-3d;
        }
        @keyframes sparkle {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }
        .animate-sparkle {
          animation: sparkle 2s ease-in-out infinite;
        }
        @keyframes pulse-grow {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        .animate-pulse-grow {
          animation: pulse-grow 2s ease-in-out infinite;
        }
        .glass-effect {
          backdrop-filter: blur(8px);
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        @keyframes hover-glow {
          0% { box-shadow: 0 0 5px rgba(255, 182, 193, 0.5); }
          50% { box-shadow: 0 0 20px rgba(255, 182, 193, 0.8); }
          100% { box-shadow: 0 0 5px rgba(255, 182, 193, 0.5); }
        }
        .hover-glow:hover {
          animation: hover-glow 2s infinite;
        }
        `}</style>
    </div>
  )
}
export default BirthdayWebsite; 