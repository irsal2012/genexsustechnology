
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/ProductCard';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';
import { Rocket, Package, ShieldCheck } from 'lucide-react';

interface Product {
  id: string;
  title: string;
  description: string;
  icon: string;
  demo_url: string | null;
}

export const ProductsList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('created_at', { ascending: true });

      if (error) {
        console.error('Error fetching products:', error);
        toast({
          title: "Error fetching products",
          description: error.message,
          variant: "destructive"
        });
        return;
      }

      console.log('Products fetched:', data);
      setProducts(data || []);
      setIsLoading(false);
    };

    fetchProducts();
  }, []);

  const handleDemoClick = (demoUrl: string) => {
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "Please sign in to access product demos",
        variant: "default"
      });
      navigate('/auth');
      return;
    }
    window.open(demoUrl, '_blank');
  };

  if (isLoading) {
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center space-y-4">
          <Package className="w-12 h-12 text-purple-600/50" />
          <p className="text-gray-500">Loading products...</p>
        </div>
      </div>
    );
  }

  if (!products.length) {
    return (
      <div className="min-h-[400px] flex flex-col items-center justify-center text-gray-500 space-y-4">
        <Package className="w-16 h-16 text-purple-600/50" />
        <p className="text-xl">No products available at the moment.</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
          Our Products
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover our innovative solutions designed to transform your business with cutting-edge technology.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col h-full"
          >
            <ProductCard
              title={product.title}
              description={product.description}
              icon={product.icon}
            />
            {product.demo_url && (
              <Button
                variant="outline"
                className="mt-4 w-full border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white group smooth-transition"
                onClick={() => handleDemoClick(product.demo_url!)}
              >
                <span>{user ? 'View Demo' : 'Sign in to View Demo'}</span>
                <Rocket className="ml-2 w-4 h-4 group-hover:translate-x-1 smooth-transition" />
              </Button>
            )}
          </motion.div>
        ))}
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex items-center space-x-4 p-6 rounded-xl bg-gradient-to-br from-purple-50 to-indigo-50">
          <Rocket className="w-8 h-8 text-purple-600" />
          <div>
            <h3 className="font-semibold text-gray-900">Innovation First</h3>
            <p className="text-sm text-gray-600">Cutting-edge solutions for modern challenges</p>
          </div>
        </div>
        <div className="flex items-center space-x-4 p-6 rounded-xl bg-gradient-to-br from-purple-50 to-indigo-50">
          <Package className="w-8 h-8 text-purple-600" />
          <div>
            <h3 className="font-semibold text-gray-900">Complete Suite</h3>
            <p className="text-sm text-gray-600">Integrated tools for seamless operations</p>
          </div>
        </div>
        <div className="flex items-center space-x-4 p-6 rounded-xl bg-gradient-to-br from-purple-50 to-indigo-50">
          <ShieldCheck className="w-8 h-8 text-purple-600" />
          <div>
            <h3 className="font-semibold text-gray-900">Enterprise Security</h3>
            <p className="text-sm text-gray-600">Built with security at its core</p>
          </div>
        </div>
      </div>
    </div>
  );
};
