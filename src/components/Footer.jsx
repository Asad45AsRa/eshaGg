import React from 'react';
import { HeartIcon, GiftIcon, StarIcon, SparklesIcon } from 'lucide-react';

export default function BirthdayFooter() {
  return (
    <footer className="relative bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 text-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute animate-float top-10 left-1/4">
          <SparklesIcon className="w-6 h-6 text-yellow-200 opacity-75" />
        </div>
        <div className="absolute animate-float-delayed top-20 right-1/4">
          <StarIcon className="w-6 h-6 text-yellow-200 opacity-75" />
        </div>
        <div className="absolute animate-float-slow left-1/3 bottom-10">
          <HeartIcon className="w-6 h-6 text-red-200 opacity-75" />
        </div>
        <div className="absolute animate-float-slow-delayed right-1/3 bottom-20">
          <GiftIcon className="w-6 h-6 text-purple-200 opacity-75" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 relative">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold animate-fade-in">
            Happy Birthday Inshira! 🎂
          </h2>
          
          <div className="space-y-4 animate-slide-up">
            <p className="text-lg md:text-xl">
            qisamat say milti hai itni fikar krnay wali qismat say qismat say milti hai jan itni muhabat krnay wali 
            Allah ka shukar hai ap mujay mili hain ap ko duain main mangna acha lagta hai hr rooz mangta hun ap ko 
            Allah Surah e nisa main para tha in aurton say nikah kro jinhain tum pasand krtay chahyee aik say ya 2 
            say main aik hi ko pasand krta hun ap ko Jab Allah is ki ijazat daita hai pasand krnay ki or is say nikah 
            krnay ki to mujay ap say nikah krna hai ap k baad koi ni aaye zindgi main mery Allah k hukam say
            </p>
            
            <p className="text-lg md:text-xl italic">
              As you blow out the candles today, know that you have ignited a fire in my heart that will forever burn with love for you
            </p>
          </div>

          <div className="pt-6 flex flex-wrap justify-center gap-4 animate-fade-in-delayed">
            <div className="flex items-center space-x-2">
              <HeartIcon className="w-5 h-5 text-red-200" />
              <span>Love</span>
            </div>
            <div className="flex items-center space-x-2">
              <StarIcon className="w-5 h-5 text-yellow-200" />
              <span>Joy</span>
            </div>
            <div className="flex items-center space-x-2">
              <SparklesIcon className="w-5 h-5 text-purple-200" />
              <span>Dreams</span>
            </div>
            <div className="flex items-center space-x-2">
              <GiftIcon className="w-5 h-5 text-pink-200" />
              <span>Blessings</span>
            </div>
          </div>

          <p className="text-sm md:text-base opacity-75 animate-fade-in-delayed">
            With love Asad Ul Islam ❤️
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes slide-up {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 3s ease-in-out 1s infinite;
        }
        .animate-float-slow {
          animation: float 4s ease-in-out infinite;
        }
        .animate-float-slow-delayed {
          animation: float 4s ease-in-out 2s infinite;
        }
        .animate-slide-up {
          animation: slide-up 1s ease-out forwards;
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        .animate-fade-in-delayed {
          animation: fade-in 1s ease-out 0.5s forwards;
          opacity: 0;
        }
      `}</style>
    </footer>
  );
}