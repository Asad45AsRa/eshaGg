import React, { useState, useEffect } from 'react';
import { Heart, Calendar, Star, Camera, Music, Coffee, Map, Clock, Gift, Quote, Phone, Mail, Sparkles, Book, Plane, Home, Palette, Cake, MessageCircle, Image, Award, Crown, Smile, Users } from 'lucide-react';

const AboutUs = () => {
  const [activePhoto, setActivePhoto] = useState(0);
  const [showMemory, setShowMemory] = useState(false);
  const [count, setCount] = useState(0);

  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  const memories = [
    { date: 'First Meeting', description: 'The moment our eyes met', icon: <Heart size={16} /> },
    { date: 'First Date', description: 'Coffee and endless conversations', icon: <Coffee size={16} /> },
    { date: 'Engagement', description: 'When she said yes', icon: <Cake /> },
    { date: 'Wedding Day', description: 'Our beautiful celebration', icon: <Users size={16} /> },
    { date: 'First Home', description: 'Building our nest together', icon: <Home size={16} /> },
    { date: 'First Trip', description: 'Adventure in paradise', icon: <Plane size={16} /> }
  ];

  const interests = [
    { icon: <Palette />, label: 'Art' },
    { icon: <Music />, label: 'Music' },
    { icon: <Book />, label: 'Reading' },
    { icon: <Camera />, label: 'Photography' },
    { icon: <Map />, label: 'Travel' },
    { icon: <Coffee />, label: 'Coffee' }
  ];

  const achievements = [
    { title: 'Best Wife', icon: <Crown />, description: 'Making every day special' },
    { title: 'Master Chef', icon: <Cake />, description: 'Creating culinary magic' },
    { title: 'Adventure Partner', icon: <Plane />, description: 'Exploring the world together' },
    { title: 'Life Artist', icon: <Palette />, description: 'Adding colors to life' }
  ];

  const qualities = [
    'Her compassionate heart and endless kindness',
    'The way she lights up every room',
    'Her infectious laughter and joy',
    'Her determination and passion',
    'Her creativity and artistic soul',
    'Her wisdom and understanding',
    'Her support and encouragement',
    'Her beautiful spirit'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => (prev + 1) % 100);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-12">
        <header className="text-center mb-16 relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <Heart size={400} className="text-pink-200" />
          </div>
          
          <div className="relative inline-block group">
            <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 mb-4 hover:scale-105 transition-all duration-300">
              Inshira
            </h1>
            <Sparkles className="absolute -top-6 -right-6 text-pink-500 animate-bounce" size={32} />
            <Sparkles className="absolute -top-6 -left-6 text-purple-500 animate-bounce delay-100" size={32} />
          </div>

          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Celebrating Her Special Day  {formattedDate}
          </p>

          <div className="flex justify-center gap-6 mt-6">
            {[Phone, Mail, MessageCircle, Image, Star].map((Icon, index) => (
              <Icon 
                key={index}
                className="text-pink-500 hover:scale-125 hover:rotate-12 transition-all cursor-pointer"
                size={28}
              />
            ))}
          </div>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start max-w-7xl mx-auto">
          {/* Love Story Section */}
          <div className="space-y-8 group">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]">
              <div className="flex items-center gap-4 mb-6">
                <Heart className="text-pink-500 animate-pulse" size={32} />
                <h2 className="text-3xl font-bold text-gray-800 group-hover:text-pink-500 transition-colors">
                  Our Love Story
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
              Asad ki Sari jahn lagti hai Pyari si cutee si ladli si shoni na ho to sab kuch hai Is ik Inshira main jo mujay chahyee Husan b Shaksiat b Sab kuch kahin is say bhar k jo jo main chahta hun mery Shareek E hayat main ho Khaas bohat zayada khas hai Inshira Is duniya main Sab say khas or aikloti Larki main jisay chahta hun Chahun b kion na Akhir Inshira Hai hi Aisy k chahyee jaye isay chahnay ko dill krrta hai Yeh jab muskrati hai main khush hota hun Yeh gamgeen ho jaye na ronay wala ho jata hun 🥺🥺🥺🥺🥺 Inshiora ki hr aik baat mujay bayhad pasand bayhad pasand hai bohat zayada khas si larki hai duniya main Inshira aisy lagti hai jaisay meray iye hi or main is k liye bus yahn duniya Asad ki Tamam ho jati hai 🥰🥰🥰🥰🥰🥰🥰🥰


              </p>
            </div>

            {/* Interests Grid */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all">
              <div className="flex items-center gap-4 mb-6">
                <Sparkles className="text-pink-500" size={32} />
                <h2 className="text-3xl font-bold text-gray-800">Our Passions</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {interests.map((interest, index) => (
                  <div 
                    key={index}
                    className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-pink-50 transition-colors cursor-pointer"
                  >
                    <div className="text-pink-500 hover:scale-110 transition-transform">
                      {interest.icon}
                    </div>
                    <span className="font-medium text-gray-700">{interest.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Timeline and Qualities */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all">
              <div className="flex items-center gap-4 mb-6">
                <Clock className="text-pink-500" size={32} />
                <h2 className="text-3xl font-bold text-gray-800">Our Journey</h2>
              </div>
              <div className="space-y-6">
                {memories.map((memory, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-4 p-4 hover:bg-pink-50 rounded-lg transition-all cursor-pointer group"
                    onClick={() => setShowMemory(index)}
                  >
                    <div className="p-2 bg-pink-100 rounded-full text-pink-500 group-hover:scale-110 transition-transform">
                      {memory.icon}
                    </div>
                    <div>
                      <p className="font-bold text-gray-800">{memory.date}</p>
                      <p className="text-gray-600">{memory.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all">
              <div className="flex items-center gap-4 mb-6">
                <Award className="text-pink-500" size={32} />
                <h2 className="text-3xl font-bold text-gray-800">Special Qualities</h2>
              </div>
              <div className="grid gap-4">
                {achievements.map((achievement, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-4 p-4 hover:bg-pink-50 rounded-lg transition-all group"
                  >
                    <div className="p-2 bg-pink-100 rounded-full text-pink-500 group-hover:rotate-12 transition-transform">
                      {achievement.icon}
                    </div>
                    <div>
                      <p className="font-bold text-gray-800">{achievement.title}</p>
                      <p className="text-gray-600">{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Birthday Message */}
          <div className="md:col-span-2 lg:col-span-1 space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all">
              <div className="flex items-center gap-4 mb-6">
                <Gift className="text-pink-500" size={32} />
                <h2 className="text-3xl font-bold text-gray-800">Birthday Wishes</h2>
              </div>
              <div className="prose text-gray-600 max-w-none">
                <Quote className="text-pink-300 mb-6 hover:rotate-180 transition-transform duration-500" size={48} />
                <p className="text-lg mb-6">
                Happy Birthday mery zindgi Allah tala ap ki zindgi ko khushion saay bhar day ap ko ta hayat khushin say nawazay kamyabian ap ki muqadar hun ap ko kabi koi aisy takleef na milay jis ka bojh ap na utha sakti hun or jab b koi mushkill aaye ap ko sabr isay uthanay ki taqt day hamaisha hansi muskrati or sabir rahain Allah tala ap ko dheron khushion say nawazay  Ap ko akhirat ki kamyabion say b humkinar kray ap ka waqar ap ki izat hamaisha buland rahay zindgi ap ki aisy ho k ap ko daikh kr logon ko rehnmiee ilm say bhari  ap say jurnay walay logon main ham,aisha aik khas maqam rahay ap ka jan Ameen 

                </p>
                <p className="text-lg mb-6">
                Ap ka Sath Allah tgala mera tahayat rakha aik ap ko mery shareek e safar shareek zindgi shareek hayat bnayee ap say mujay dher saray bachun ko nawazay ameen 🥱🥱🥱🥱
                </p>
                <div className="text-center">
                  <p className="text-xl font-bold text-pink-500 animate-pulse">
                    Happy Birthday my beloved Inshira ❤️
                  </p>
                  <p className="text-lg text-purple-500">
                    Heres to countless more years of love laughter and beautiful memories together
                  </p>
                </div>
              </div>
            </div>

            {/* Love Counter */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Love Counter</h3>
              <div className="text-4xl font-bold text-pink-500">
                {count}%
              </div>
              <p className="text-gray-600">of infinite love and counting&#x2022;&#x2022;&#x2022;</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;