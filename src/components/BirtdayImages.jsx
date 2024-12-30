import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Eye  from '../../public/asd.jpeg';
import asad from '../../public/Eye1.jpg';
import Gft from '../../public/gft.jpeg'

const BirthdayImages = () => {
  // Enhanced cards array with proper image paths
  const cards = [
    {
      title: "Your Beautiful Eyes",
      description: "In Say Khoobsoorat Ankhain kabi na daikh sakta na Daikh Paya",
      imageUrl: asad
    },
    {
      title: "Your Lovely Smile",
      description: "Allah Ki Kasam Say Yeh Chahra Sab say Haseen hai Itna K koi Muqabala is ka kr nhi sakta",
      imageUrl: Eye
    },
    {
      title: "My Greatest Gift",
      description: "Allah ka dia gya mujay Sab bara inaam Hai yeh Larki Sab say bari mery Naimat",
      imageUrl: Gft
    }
  ];

  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        duration: 0.6,
        bounce: 0.4
      }
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-pink-100 py-12 px-4">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-6xl mx-auto"
      >
        <motion.div 
          variants={itemVariants}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-purple-600 mb-4">
            Happy Birthday Inshira!
          </h1>
          <div className="w-32 h-1 mx-auto bg-gradient-to-r from-pink-500 to-purple-500 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="h-full"
            >
              <Card className="h-full transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                <CardContent className="p-0">
                  <motion.div
                    className="relative h-48 overflow-hidden rounded-t-lg"
                    variants={imageVariants}
                    whileHover="hover"
                  >
                    <Image
                      src={card.imageUrl}
                      alt={card.title}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                  <div className="p-6">
                    <h2 className="text-xl font-semibold mb-3 text-gray-800">{card.title}</h2>
                    <p className="text-gray-600 leading-relaxed">{card.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          variants={itemVariants}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="relative w-64 h-64 mx-auto mb-8">
            <Image
              src={Eye}
              alt="Birthday Portrait"
              fill
              className="rounded-full object-cover shadow-xl"
            />
          </div>
          <p className="text-xl text-gray-700 leading-relaxed">
          mujay zarrorat hai ap ki har khushi hr nakami O gum main ap ka sath m ujay Allah k baad chayee jo payaray say nagmay ki trahn lagti hai jo payaray say jhornon jesi lagti hai
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BirthdayImages;