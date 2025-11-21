'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const CustomerCarousel = () => {
  const customers = [
    { 
      name: 'Google', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg'
    },
    { 
      name: 'Amazon', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg'
    },
    { 
      name: 'Microsoft', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg'
    },
    { 
      name: 'Apple', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg'
    },
    { 
      name: 'Meta', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg'
    },
    { 
      name: 'Adobe', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Adobe_Corporate_logo.svg'
    },
    { 
      name: 'Netflix', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
    },
    { 
      name: 'Spotify', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg'
    },
    { 
      name: 'Slack', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg'
    },
    { 
      name: 'Airbnb', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg'
    }
  ]

  // Duplicate for seamless loop
  const extendedCustomers = [...customers, ...customers, ...customers]

  return (
    <section className="py-20 relative overflow-hidden bg-white">
      <div className="container mx-auto px-6">


        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-12 lg:gap-16"
            animate={{ x: [0, -2880] }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: 'linear',
              repeatType: 'loop',
            }}
          >
            {extendedCustomers.map((customer, index) => (
              <motion.div
                key={`${customer.name}-${index}`}
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex items-center justify-center flex-shrink-0 w-40 h-32 bg-white rounded-2xl border border-gray-200 hover:border-aquamarine/30 transition-all duration-300 group cursor-pointer shadow-sm hover:shadow-lg"
              >
                <div className="relative w-24 h-24 flex items-center justify-center">
                  <Image
                    src={customer.logo}
                    alt={customer.name}
                    width={96}
                    height={96}
                    className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    style={{ 
                      filter: 'grayscale(100%) brightness(0)',
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Gradient Overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        </div>

        {/* Second Carousel (Reverse Direction) */}
        <div className="relative overflow-hidden mt-12">
          <motion.div
            className="flex gap-12 lg:gap-16"
            animate={{ x: [-2880, 0] }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: 'linear',
              repeatType: 'loop',
            }}
          >
            {extendedCustomers.reverse().map((customer, index) => (
              <motion.div
                key={`${customer.name}-reverse-${index}`}
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex items-center justify-center flex-shrink-0 w-40 h-32 bg-white rounded-2xl border border-gray-200 hover:border-tropical-indigo/30 transition-all duration-300 group cursor-pointer shadow-sm hover:shadow-lg"
              >
                <div className="relative w-24 h-24 flex items-center justify-center">
                  <Image
                    src={customer.logo}
                    alt={customer.name}
                    width={96}
                    height={96}
                    className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    style={{ 
                      filter: 'grayscale(100%) brightness(0)',
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Gradient Overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        </div>
      </div>
    </section>
  )
}

export default CustomerCarousel;