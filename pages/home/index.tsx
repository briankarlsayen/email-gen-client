import FeatureCard from '@/components/FeatureCard';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import PlanCard from '@/components/PlanCard';
import React from 'react';
import { FaBeer } from 'react-icons/fa';

const Home = () => {
  const features = [
    {
      title: 'Generate email message',
      body: 'With our app, you can say goodbye to the hassle of manually crafting emails and sending them to customers.',
      icon: <FaBeer size={56} />,
    },
    {
      title: 'Generate email message',
      body: 'With our app, you can say goodbye to the hassle of manually crafting emails and sending them to customers.',
      icon: <FaBeer size={56} />,
    },
    {
      title: 'Generate email message',
      body: 'With our app, you can say goodbye to the hassle of manually crafting emails and sending them to customers.',
      icon: <FaBeer size={56} />,
    },
  ];

  const plans = [
    {
      title: 'premium',
      description:
        'Our most advanced tools, unlimited contacts, and priority support; built for teams.',
      amount: 350,
      features: [
        'Phone & Priority Support',
        'Custom-Coded and Pre-built Email Templates',
        'Multivariate and A/B Testing',
        'Enhanced Automated Customer Journeys',
        'Predictive Segmentation',
        'Campaign Manager',
        'Assisted Onboarding',
      ],
    },
    {
      title: 'premium',
      description:
        'Our most advanced tools, unlimited contacts, and priority support; built for teams.',
      amount: 350,
      features: [
        'Phone & Priority Support',
        'Custom-Coded and Pre-built Email Templates',
        'Multivariate and A/B Testing',
        'Enhanced Automated Customer Journeys',
        'Predictive Segmentation',
        'Campaign Manager',
        'Assisted Onboarding',
      ],
    },
    {
      title: 'premium',
      description:
        'Our most advanced tools, unlimited contacts, and priority support; built for teams.',
      amount: 350,
      features: [
        'Phone & Priority Support',
        'Custom-Coded and Pre-built Email Templates',
        'Multivariate and A/B Testing',
        'Enhanced Automated Customer Journeys',
        'Predictive Segmentation',
        'Campaign Manager',
        'Assisted Onboarding',
      ],
    },
    {
      title: 'premium',
      description:
        'Our most advanced tools, unlimited contacts, and priority support; built for teams.',
      amount: 350,
      features: [
        'Phone & Priority Support',
        'Custom-Coded and Pre-built Email Templates',
        'Multivariate and A/B Testing',
        'Enhanced Automated Customer Journeys',
        'Predictive Segmentation',
        'Campaign Manager',
        'Assisted Onboarding',
      ],
    },
  ];

  return (
    <div className='justify-center flex'>
      <div className='min-h-screen w-full'>
        <Navbar />
        <Hero />
        <section className='py-20 x-padding'>
          <h2 className='text-center py-8'>See this app's feautures</h2>
          <div className='flex flex-col md:flex-row gap-4 items-center'>
            {features.map((el, idx) => (
              <FeatureCard
                key={idx}
                title={el.title}
                body={el.body}
                icon={el.icon}
              />
            ))}
          </div>
        </section>
        <section
          id='pricing'
          className='min-h-screen bg-red-100 flex flex-col justify-center x-padding'
        >
          <h2 className='text-center py-8'>Find the right plan for you</h2>
          <div className='flex flex-col md:flex-row gap-4 items-center pb-8'>
            {plans.map((el, idx) => (
              <PlanCard
                key={idx}
                title={el.title}
                amount={el.amount}
                description={el.description}
                features={el.features}
              />
            ))}
          </div>
          <div className='flex justify-center items-center'>
            <p className='pr-2'>For more detailed information</p>
            <button className='btn btn-primary'>See more</button>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
