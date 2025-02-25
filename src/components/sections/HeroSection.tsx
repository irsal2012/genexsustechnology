
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

interface HeroImage {
  url: string;
  alt: string;
}

interface HeroSectionProps {
  heroImages: HeroImage[];
  currentImageIndex: number;
  setCurrentImageIndex: (index: number) => void;
  aiPhrases: string[];
  currentPhraseIndex: number;
}

export const HeroSection = ({
  heroImages,
  currentImageIndex,
  setCurrentImageIndex,
  aiPhrases,
  currentPhraseIndex
}: HeroSectionProps) => {
  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
              Leading AI Solutions
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent"
          >
            Transform Your Business <br className="hidden sm:block" />
            with Advanced AI
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-2xl mx-auto text-lg text-gray-600 mb-8"
          >
            Leverage cutting-edge artificial intelligence solutions to drive innovation
            and efficiency in your organization.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-12"
          >
            <Button 
              size="lg" 
              className="mr-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
            >
              Get Started
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
            >
              Learn More
            </Button>
          </motion.div>
          
          {/* AI Text Animation */}
          <motion.div
            key={currentPhraseIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-semibold text-purple-600 mb-8"
          >
            {aiPhrases[currentPhraseIndex]}
          </motion.div>
          
          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="relative max-w-5xl mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-indigo-600/10 rounded-3xl" />
            {heroImages.map((image, index) => (
              <motion.img
                key={`${image.url}-${index}`}
                src={image.url}
                alt={image.alt}
                className="w-full h-[500px] object-cover rounded-3xl shadow-xl absolute top-0 left-0"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: currentImageIndex === index ? 1 : 0,
                  transition: { duration: 1 }
                }}
              />
            ))}
            <div className="relative w-full h-[500px]" />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent rounded-3xl" />
            
            {/* Image Navigation Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentImageIndex === index 
                      ? 'bg-purple-600 w-4' 
                      : 'bg-purple-300'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
