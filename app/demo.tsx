'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import ScrollExpandMedia from '@/components/blocks/scroll-expansion-hero';

const NonprofitContent = () => {
  return (
    <div className='w-full bg-white'>
      {/* Mission Section */}
      <section className='max-w-6xl mx-auto px-6 py-20'>
        <h2 className='text-5xl font-bold mb-12 text-center text-gray-900'>
          Our Mission
        </h2>
        <div className='space-y-8 text-lg text-gray-700 leading-relaxed'>
          <p>
            Flash Forward exists to illuminate education and create opportunities for students living in energy poverty. We design, build, and distribute solar-powered flashlights to help children continue their studies after dark.
          </p>
          <p>
            Energy poverty affects over 685 million people worldwide, leaving children without access to safe and reliable lighting for studying. Without proper lighting, students cannot complete homework, read books, or pursue their education after sunset, severely limiting their opportunities for academic success.
          </p>
        </div>
      </section>

      {/* Four Pillars Section */}
      <section className='bg-orange-50 py-20'>
        <div className='max-w-6xl mx-auto px-6'>
          <h2 className='text-4xl font-bold mb-16 text-center text-gray-900'>
            The Four Pillars of Energy Poverty
          </h2>
          <div className='grid md:grid-cols-2 gap-8'>
            <div className='bg-white p-8 rounded-xl shadow-lg border-t-4 border-orange-500'>
              <h3 className='text-2xl font-bold mb-4 text-orange-600'>
                Education
              </h3>
              <p className='text-gray-700'>
                Without safe lighting, children cannot study after dusk, limiting their educational opportunities and future prospects.
              </p>
            </div>
            <div className='bg-white p-8 rounded-xl shadow-lg border-t-4 border-green-500'>
              <h3 className='text-2xl font-bold mb-4 text-green-600'>
                Health
              </h3>
              <p className='text-gray-700'>
                Kerosene lamps cause over 3.2 million deaths annually from indoor air pollution, posing serious health risks to families.
              </p>
            </div>
            <div className='bg-white p-8 rounded-xl shadow-lg border-t-4 border-yellow-500'>
              <h3 className='text-2xl font-bold mb-4 text-yellow-600'>
                Environment
              </h3>
              <p className='text-gray-700'>
                Fuel-based lighting emits 190 million tonnes of CO2 per year, contributing significantly to climate change.
              </p>
            </div>
            <div className='bg-white p-8 rounded-xl shadow-lg border-t-4 border-orange-500'>
              <h3 className='text-2xl font-bold mb-4 text-orange-600'>
                Economic
              </h3>
              <p className='text-gray-700'>
                Families spend up to 40% of income on kerosene lamps, trapping them in a cycle of poverty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className='max-w-6xl mx-auto px-6 py-20'>
        <h2 className='text-4xl font-bold mb-12 text-center text-gray-900'>
          Our Story
        </h2>
        <div className='space-y-8 text-lg text-gray-700 leading-relaxed'>
          <p>
            Flash Forward was founded by a group of passionate students in the Bellevue School District who witnessed the devastating effects of energy poverty during a school presentation about global challenges. Moved by the stories of children unable to study after dark, our founders decided to take action.
          </p>
          <p>
            What started as a small project has grown into a comprehensive nonprofit organization. Our team combines engineering students who design and prototype the solar flashlights, business students who manage operations and partnerships, and advocacy students who raise awareness about energy poverty.
          </p>
          <p>
            We believe that young people have the power to create meaningful change. Through Flash Forward, we&apos;re not just providing light – we&apos;re empowering the next generation of leaders to tackle global challenges with innovation and compassion.
          </p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className='bg-gradient-to-r from-orange-500 to-yellow-500 py-20'>
        <div className='max-w-4xl mx-auto px-6 text-center'>
          <h2 className='text-4xl font-bold mb-6 text-white'>
            Join Us in Lighting the Way
          </h2>
          <p className='text-xl mb-10 text-white/90'>
            Together, we can bring light to children&apos;s education and brighten their future.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <a
              href='https://gofund.me/436b67db'
              target='_blank'
              rel='noopener noreferrer'
              className='px-8 py-4 bg-white text-orange-600 rounded-lg font-semibold hover:bg-orange-50 transition-colors shadow-lg'
            >
              Donate Now
            </a>
            <Link
              href='/get-involved'
              className='px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors'
            >
              Get Involved
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

const Demo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    const resetEvent = new Event('resetSection');
    window.dispatchEvent(resetEvent);
  }, []);

  return (
    <div className='min-h-screen'>
      <ScrollExpandMedia
        mediaType='image'
        mediaSrc='https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1280&auto=format&fit=crop'
        bgImageSrc='https://images.unsplash.com/photo-1451847251646-8a6c0dd1510c?q=80&w=1920&auto=format&fit=crop'
        title='Flash Forward'
        date='Illuminating Education'
        scrollToExpand='Scroll to Explore'
      >
        <NonprofitContent />
      </ScrollExpandMedia>
    </div>
  );
};

export default Demo;
