
import { ProductsList } from '@/components/ProductsList';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/sections/Footer';

const Products = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-purple-50 to-white">
      <Navbar />
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ProductsList />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;
