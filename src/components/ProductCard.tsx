
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ProductCardProps {
  title: string;
  description: string;
  icon: string;
}

export const ProductCard = ({ title, description, icon }: ProductCardProps) => {
  return (
    <div className="glass-card p-6 rounded-2xl hover:shadow-lg smooth-transition group cursor-pointer border border-purple-100 h-full">
      <div className="w-12 h-12 mb-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white flex items-center justify-center">
        <span className="text-2xl">{icon}</span>
      </div>
      <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
        {title}
      </h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex items-center text-purple-600 font-medium opacity-0 group-hover:opacity-100 smooth-transition"
      >
        Learn More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 smooth-transition" />
      </motion.div>
    </div>
  );
};
