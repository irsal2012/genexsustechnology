
import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/sections/Footer';
import { Building2, Users, Globe, ShieldCheck, Award, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-purple-50 to-white">
      <Navbar />
      <div className="pt-24 pb-16">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              About Genexsus Technology
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Pioneering the future of technology with innovative solutions and unwavering commitment to excellence.
            </p>
          </motion.div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card p-8 rounded-2xl"
            >
              <Building2 className="w-12 h-12 text-purple-600 mb-4" />
              <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Our Mission
              </h2>
              <p className="text-gray-600">
                To empower businesses through cutting-edge technology solutions that drive innovation, efficiency, and sustainable growth in an ever-evolving digital landscape.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-card p-8 rounded-2xl"
            >
              <Globe className="w-12 h-12 text-purple-600 mb-4" />
              <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Our Vision
              </h2>
              <p className="text-gray-600">
                To be the global leader in technological innovation, setting new standards for excellence and transforming how businesses operate in the digital age.
              </p>
            </motion.div>
          </div>

          {/* Core Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <ShieldCheck className="w-8 h-8" />,
                  title: "Integrity",
                  description: "Upholding the highest standards of transparency and ethical conduct in all our operations."
                },
                {
                  icon: <Award className="w-8 h-8" />,
                  title: "Excellence",
                  description: "Striving for exceptional quality and continuous improvement in everything we do."
                },
                {
                  icon: <Rocket className="w-8 h-8" />,
                  title: "Innovation",
                  description: "Embracing creativity and forward-thinking to develop groundbreaking solutions."
                }
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="glass-card p-6 rounded-xl text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center text-white">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Team Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-center mb-16"
          >
            <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Our Team
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-8">
              Led by industry veterans with decades of combined experience, our team of passionate professionals is dedicated to delivering exceptional results for our clients.
            </p>
            <Button 
              variant="outline"
              className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white smooth-transition"
              onClick={() => navigate('/contact')}
            >
              Get in Touch
            </Button>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
