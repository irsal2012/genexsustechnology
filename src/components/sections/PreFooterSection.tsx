
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export const PreFooterSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-gray-600">
              Join thousands of companies already leveraging our AI solutions to drive innovation and achieve unprecedented growth.
            </p>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
            >
              Get Started Today
            </Button>
            
            {/* AI Features Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white/50 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-purple-100"
              >
                <h3 className="text-lg font-semibold text-purple-600 mb-2">Advanced Gen AI</h3>
                <p className="text-sm text-gray-600">State-of-the-art generative AI models for content creation</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white/50 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-purple-100"
              >
                <h3 className="text-lg font-semibold text-purple-600 mb-2">Smart Automation</h3>
                <p className="text-sm text-gray-600">Intelligent process automation powered by machine learning</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white/50 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-purple-100"
              >
                <h3 className="text-lg font-semibold text-purple-600 mb-2">Deep Learning</h3>
                <p className="text-sm text-gray-600">Neural networks that learn and adapt to your business needs</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white/50 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-purple-100"
              >
                <h3 className="text-lg font-semibold text-purple-600 mb-2">Natural Language</h3>
                <p className="text-sm text-gray-600">Advanced NLP for human-like text understanding and generation</p>
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
              alt="Technology Innovation"
              className="rounded-lg shadow-2xl w-full object-cover h-[400px]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-indigo-600/10 rounded-lg" />
          </motion.div>
        </div>

        {/* AI Benefits List - Now centered in the page */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center space-y-5 mt-12 text-center max-w-4xl mx-auto"
        >
          <p className="text-xl font-medium text-purple-600 bg-white/50 backdrop-blur-sm px-6 py-3 rounded-full w-full">
            ✨ Revolutionary AI-Driven Solutions - Transforming Industries Through Advanced Machine Learning
          </p>
          <p className="text-xl font-medium text-indigo-600 bg-white/50 backdrop-blur-sm px-6 py-3 rounded-full w-full">
            🔮 Next-Gen AI Technology Integration - Seamlessly Implementing Cutting-Edge AI Solutions
          </p>
          <p className="text-xl font-medium text-purple-600 bg-white/50 backdrop-blur-sm px-6 py-3 rounded-full w-full">
            💡 Intelligent Business Automation - Streamlining Operations with Smart AI-Powered Systems
          </p>
          <p className="text-xl font-medium text-indigo-600 bg-white/50 backdrop-blur-sm px-6 py-3 rounded-full w-full">
            🚀 Accelerated Growth with AI - Boosting Performance Through Intelligent Data Analytics
          </p>
          <p className="text-xl font-medium text-purple-600 bg-white/50 backdrop-blur-sm px-6 py-3 rounded-full w-full">
            🤖 Advanced Neural Networks - Delivering Unparalleled Accuracy and Performance
          </p>
          <p className="text-xl font-medium text-indigo-600 bg-white/50 backdrop-blur-sm px-6 py-3 rounded-full w-full">
            🎯 Precision AI Solutions - Customized for Your Business Success
          </p>
        </motion.div>
      </div>
    </section>
  );
};
