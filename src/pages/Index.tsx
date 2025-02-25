
import { useState, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { supabase } from "@/integrations/supabase/client";
import { CarouselAdmin } from '@/components/CarouselAdmin';
import { ProductsList } from '@/components/ProductsList';
import { HeroSection } from '@/components/sections/HeroSection';
import { PreFooterSection } from '@/components/sections/PreFooterSection';
import { Footer } from '@/components/sections/Footer';
import { defaultHeroImages, aiPhrases } from '@/constants/hero';

const Index = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [heroImages, setHeroImages] = useState(defaultHeroImages);

  const fetchCarouselImages = async () => {
    try {
      const { data, error } = await supabase
        .from('carousel_images')
        .select('*')
        .order('display_order', { ascending: true });

      if (error) {
        console.error('Error fetching carousel images:', error);
        return;
      }

      if (data && data.length > 0) {
        const formattedImages = data.map(img => ({
          url: img.image_url,
          alt: img.alt_text
        }));
        setHeroImages(formattedImages);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    fetchCarouselImages();
  }, []);

  useEffect(() => {
    const imageTimer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    const phraseTimer = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) =>
        prevIndex === aiPhrases.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => {
      clearInterval(imageTimer);
      clearInterval(phraseTimer);
    };
  }, [heroImages.length]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-purple-50 to-white">
      <Navbar />
      
      <HeroSection 
        heroImages={heroImages}
        currentImageIndex={currentImageIndex}
        setCurrentImageIndex={setCurrentImageIndex}
        aiPhrases={aiPhrases}
        currentPhraseIndex={currentPhraseIndex}
      />

      {/* Products Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Our AI Solutions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our suite of advanced AI products designed to revolutionize
              your business operations
            </p>
          </div>
          <ProductsList />
        </div>
      </section>

      {/* Admin Interface */}
      <CarouselAdmin onImageUploaded={fetchCarouselImages} />

      <PreFooterSection />
      <Footer />
    </div>
  );
};

export default Index;
