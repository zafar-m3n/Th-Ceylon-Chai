import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import SectionHeader from '../components/SectionHeader';
import Container from '../components/Container';
import ImageGallery from '../components/ImageGallery';
import Badge from '../components/Badge';
import Button from '../components/Button';
import WhatsAppButton from '../components/WhatsAppButton';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { collections } from '../data/collections';
import { formatPrice } from '../utils/format';

const ProductDetails = () => {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug);

  if (!product) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="min-h-screen flex items-center justify-center"
      >
        <Container>
          <div className="text-center max-w-md mx-auto">
          <Icon icon="mdi:tea-outline" className="h-20 w-20 text-gray-300 mx-auto mb-6" />
          <h1 className="font-serif text-3xl font-bold text-gray-900 mb-4">Tea Not Found</h1>
          <p className="text-gray-600 mb-8">The tea you're looking for doesn't exist.</p>
          <Link to="/shop" className="text-orange-500 hover:text-orange-600 font-medium underline underline-offset-4">
            ← Back to Shop
          </Link>
          </div>
        </Container>
      </motion.div>
    );
  }

  // Get related products from same category
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  // Get brewing suggestions based on category
  const getBrewingSuggestions = (category) => {
    const suggestions = {
      'Fruity': {
        temperature: '90-95°C',
        steepTime: '3-4 minutes',
        servings: '1 tsp per cup',
        notes: 'Perfect hot or iced. Add a slice of lemon for extra zing!'
      },
      'Spiced & Chai Blends': {
        temperature: '95-100°C', 
        steepTime: '4-5 minutes',
        servings: '1-2 tsp per cup',
        notes: 'Excellent with milk and honey. Simmer with spices for authentic chai.'
      },
      'Wellness & Energy': {
        temperature: '80-85°C',
        steepTime: '2-3 minutes',
        servings: '1 tsp per cup',
        notes: 'Best enjoyed without milk. Perfect for morning or afternoon boost.'
      },
      'Dessert-Inspired': {
        temperature: '90-95°C',
        steepTime: '3-4 minutes', 
        servings: '1 tsp per cup',
        notes: 'Delicious with milk or cream. Great as an evening treat.'
      }
    };
    
    return suggestions[category] || suggestions['Fruity'];
  };

  const brewingInfo = getBrewingSuggestions(product.category);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {/* Section Header */}
      <SectionHeader
        title={product.name}
        subtitle={`Premium ${product.category} blend from our Ceylon collection`}
        bgImage={product.images[0]}
        showBreadcrumb={true}
      />

      {/* Product Details */}
      <div className="py-16 lg:py-24 bg-white">
        <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <ImageGallery images={product.images} productName={product.name} />
          </motion.div>

          {/* Sticky Info Panel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="lg:sticky lg:top-24 lg:h-fit space-y-8"
          >
            {/* Header */}
            <div className="space-y-6">
              <Badge variant="primary" className="mb-6 shadow-sm">
                {product.category}
              </Badge>
              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 text-balance">
                {product.name}
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Price */}
            <div className="bg-orange-50/50 rounded-2xl p-6 border border-orange-100">
              <div className="flex items-center justify-between">
              <div>
                  <span className="text-3xl font-bold text-orange-600 font-serif">
                  {formatPrice(product.price)}
                </span>
                  <span className="text-gray-600 ml-3">per {product.pkg}</span>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-600">Package Size</div>
                  <div className="font-semibold text-gray-900">{product.pkg}</div>
                </div>
              </div>
            </div>

            {/* Key Highlights */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Key Highlights</h3>
              <div className="flex flex-wrap gap-3">
                <Badge variant="default" size="sm">Ceylon Black Tea</Badge>
                {product.tags.map(tag => (
                  <Badge key={tag} variant="default" size="sm" className="capitalize">
                    {tag}
                  </Badge>
                ))}
                <Badge variant="default" size="sm">Natural Ingredients</Badge>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <WhatsAppButton
                productName={product.name}
                fixed={false}
                className="w-full text-lg py-4 font-semibold"
              />
              <div className="flex space-x-4">
                <Button
                  href="/shop"
                variant="ghost"
                  size="md"
                  className="flex-1"
              >
                  <Icon icon="mdi:arrow-left" className="h-5 w-5 mr-2" />
                Continue Shopping
              </Button>
                <Button
                  variant="ghost"
                  size="md"
                  className="px-4"
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: product.name,
                        text: product.description,
                        url: window.location.href,
                      });
                    }
                  }}
                >
                  <Icon icon="mdi:share-variant" className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Quick Info */}
            <div className="bg-gray-50 rounded-2xl p-6 space-y-4">
              <div className="flex items-center space-x-4">
                <Icon icon="mdi:whatsapp" className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">Order via WhatsApp for quick service</span>
              </div>
              <div className="flex items-center space-x-4">
                <Icon icon="mdi:leaf" className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">100% Natural Ceylon Tea</span>
              </div>
              <div className="flex items-center space-x-4">
                <Icon icon="mdi:truck" className="h-5 w-5 text-orange-500" />
                <span className="text-gray-700">Island-wide delivery available</span>
              </div>
            </div>
          </motion.div>
        </div>
        </Container>
      </div>

      {/* Detailed Information */}
      <div className="py-16 lg:py-24 bg-gray-50/50">
        <Container>
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Accordion Sections */}
          <div className="space-y-6">
            {/* Description Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg border border-gray-100/60 overflow-hidden"
          >
              <details className="group">
                <summary className="flex items-center justify-between p-8 cursor-pointer list-none">
                  <h2 className="font-serif text-2xl font-semibold text-gray-900">
                    About {product.name}
                  </h2>
                  <Icon icon="mdi:chevron-down" className="h-6 w-6 text-gray-400 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-8 pb-8">
                  <p className="text-gray-600 leading-relaxed">
                    {product.description} This exceptional Ceylon tea blend captures 
                    the essence of Sri Lankan tea craftsmanship, delivering a perfect 
                    balance of flavor and aroma that will transport you to the misty 
                    hills of Ceylon with every sip.
                  </p>
                </div>
              </details>
          </motion.div>

            {/* Ingredients Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
              className="bg-white rounded-2xl shadow-lg border border-gray-100/60 overflow-hidden"
          >
              <details className="group">
                <summary className="flex items-center justify-between p-8 cursor-pointer list-none">
                  <h2 className="font-serif text-2xl font-semibold text-gray-900">
                    Ingredients & Package
                  </h2>
                  <Icon icon="mdi:chevron-down" className="h-6 w-6 text-gray-400 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-8 pb-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900 mb-4">Ingredients</h3>
                      <p className="text-gray-600 leading-relaxed">{product.ingredients}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900 mb-4">Package Details</h3>
                      <ul className="space-y-3 text-gray-600">
                        <li className="flex items-center space-x-3">
                          <Icon icon="mdi:package" className="h-4 w-4 text-orange-500" />
                          <span>Net Weight: {product.pkg}</span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <Icon icon="mdi:shield-check" className="h-4 w-4 text-orange-500" />
                          <span>Quality Assured</span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <Icon icon="mdi:leaf" className="h-4 w-4 text-orange-500" />
                          <span>100% Natural</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </details>
          </motion.div>

            {/* Brewing Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
              className="bg-white rounded-2xl shadow-lg border border-gray-100/60 overflow-hidden"
          >
              <details className="group">
                <summary className="flex items-center justify-between p-8 cursor-pointer list-none">
                  <h2 className="font-serif text-2xl font-semibold text-gray-900">
                    Brewing Suggestions
                  </h2>
                  <Icon icon="mdi:chevron-down" className="h-6 w-6 text-gray-400 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-8 pb-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div className="text-center">
                      <Icon icon="mdi:thermometer" className="h-10 w-10 text-orange-500 mx-auto mb-4" />
                      <h3 className="font-semibold text-gray-900 mb-2">Temperature</h3>
                      <p className="text-gray-600 text-lg font-medium">{brewingInfo.temperature}</p>
                    </div>
                    <div className="text-center">
                      <Icon icon="mdi:timer" className="h-10 w-10 text-orange-500 mx-auto mb-4" />
                      <h3 className="font-semibold text-gray-900 mb-2">Steep Time</h3>
                      <p className="text-gray-600 text-lg font-medium">{brewingInfo.steepTime}</p>
                    </div>
                    <div className="text-center">
                      <Icon icon="mdi:tea" className="h-10 w-10 text-orange-500 mx-auto mb-4" />
                      <h3 className="font-semibold text-gray-900 mb-2">Tea Amount</h3>
                      <p className="text-gray-600 text-lg font-medium">{brewingInfo.servings}</p>
                    </div>
                  </div>
                  <div className="bg-orange-50/50 rounded-xl p-6 border border-orange-100">
                    <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Icon icon="mdi:lightbulb" className="h-5 w-5 text-orange-500 mr-2" />
                      Pro Tip
                    </h3>
                    <p className="text-gray-600">{brewingInfo.notes}</p>
                  </div>
                </div>
              </details>
          </motion.div>
          </div>
        </div>
        </Container>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="py-16 lg:py-24 bg-white">
          <Container>
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-4">
                You May Also Like
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                More teas from our {product.category} collection
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
            
            <div className="text-center mt-16">
              <Button href="/shop" size="lg">
                View All Teas
              </Button>
            </div>
          </Container>
        </div>
      )}
    </motion.div>
  );
};

export default ProductDetails;