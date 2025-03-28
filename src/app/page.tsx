'use client';

import { useState, useEffect } from 'react';
import { Bell, Droplet, Heart, Users, LogIn, UserPlus, AlertTriangle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const [animatedText, setAnimatedText] = useState('');
  const fullText = 'FOR YOUR BLOOD DONATION';
  
  // Text animation effect
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setAnimatedText(fullText.substring(0, currentIndex));
        currentIndex++;
      } else {
        setTimeout(() => {
          currentIndex = 0;
        }, 2000);
      }
    }, 100);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A1929] text-[#E0E0E0]">
      {/* Header */}
      <header className="bg-[#132F4C] backdrop-blur-lg border-b border-[#255D9A] fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Droplet className="h-8 w-8 text-[#007FFF] animate-pulse" />
            <h1 className="text-2xl font-bold text-[#FFFFFF]">
              Blood<span className="text-[#007FFF]">Connect</span>
            </h1>
          </div>
          <nav className="flex space-x-4">
            <Link 
              href="/auth/login"
              className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-transparent border border-[#007FFF] text-[#007FFF] hover:bg-[#007FFF]/10 transition-colors"
            >
              <LogIn className="h-5 w-5" />
              <span>Login</span>
            </Link>
            <Link 
              href="/auth/register"
              className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-[#007FFF] text-[#FFFFFF] hover:bg-[#0059B2] transition-colors"
            >
              <UserPlus className="h-5 w-5" />
              <span>Sign Up</span>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1929] via-[#0A1929]/95 to-[#007FFF]/20"></div>
          <Image
            src="https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=1920&q=80"
            alt="Blood donation"
            fill
            className="object-cover opacity-10"
            priority
          />
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6">
              <span className="block text-[#FFFFFF]">Save Lives</span>
              <span className="block text-[#007FFF] mt-2 animate-pulse">
                {animatedText}
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-[#B0B0B0] mb-8 max-w-2xl mx-auto">
              Every drop counts. Join our community of heroes making a difference one donation at a time.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button
                onClick={() => router.push('/auth/login')}
                className="px-8 py-4 rounded-lg bg-[#007FFF] text-[#FFFFFF] font-semibold hover:bg-[#0059B2] transition-colors"
              >
                Get Started
              </button>
              <button
                onClick={() => router.push('/about')}
                className="px-8 py-4 rounded-lg bg-transparent border border-[#255D9A] text-[#E0E0E0] font-semibold hover:bg-[#132F4C] transition-colors"
              >
                Learn More
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              <div className="p-4 rounded-lg bg-[#132F4C] border border-[#255D9A]">
                <div className="flex flex-col items-center">
                  <Heart className="h-8 w-8 text-[#007FFF] mb-2" />
                  <p className="text-[#B0B0B0] text-sm">Lives Saved</p>
                  <p className="text-2xl font-bold text-[#FFFFFF]">5,678+</p>
                </div>
              </div>
              <div className="p-4 rounded-lg bg-[#132F4C] border border-[#255D9A]">
                <div className="flex flex-col items-center">
                  <Users className="h-8 w-8 text-[#007FFF] mb-2" />
                  <p className="text-[#B0B0B0] text-sm">Active Donors</p>
                  <p className="text-2xl font-bold text-[#FFFFFF]">1,234+</p>
                </div>
              </div>
              <div className="p-4 rounded-lg bg-[#132F4C] border border-[#255D9A]">
                <div className="flex flex-col items-center">
                  <Bell className="h-8 w-8 text-[#007FFF] mb-2" />
                  <p className="text-[#B0B0B0] text-sm">Hospitals</p>
                  <p className="text-2xl font-bold text-[#FFFFFF]">348+</p>
                </div>
              </div>
              <div className="p-4 rounded-lg bg-[#132F4C] border border-[#255D9A]">
                <div className="flex flex-col items-center">
                  <Droplet className="h-8 w-8 text-[#007FFF] mb-2" />
                  <p className="text-[#B0B0B0] text-sm">Blood Units</p>
                  <p className="text-2xl font-bold text-[#FFFFFF]">9,846+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0A1929] to-[#132F4C]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#FFFFFF] mb-4">
            Why Choose <span className="text-[#007FFF]">Blood</span>Connect?
          </h2>
          <p className="text-center text-[#B0B0B0] mb-12 max-w-2xl mx-auto">
            Join our mission to ensure blood availability for everyone in need
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg bg-[#132F4C] border border-[#255D9A] hover:shadow-[0_0_15px_rgba(0,127,255,0.3)] transition-all">
              <div className="h-12 w-12 bg-[#007FFF]/30 rounded-lg flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-[#007FFF]" />
              </div>
              <h3 className="text-xl font-semibold text-[#FFFFFF] mb-2">
                Real-time Matching
              </h3>
              <p className="text-[#B0B0B0]">
                Instantly connect with compatible donors in your area when blood is needed.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-[#132F4C] border border-[#255D9A] hover:shadow-[0_0_15px_rgba(0,127,255,0.3)] transition-all">
              <div className="h-12 w-12 bg-[#007FFF]/30 rounded-lg flex items-center justify-center mb-4">
                <Bell className="h-6 w-6 text-[#007FFF]" />
              </div>
              <h3 className="text-xl font-semibold text-[#FFFFFF] mb-2">
                Emergency Alerts
              </h3>
              <p className="text-[#B0B0B0]">
                Receive immediate notifications for urgent blood requirements in your vicinity.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-[#132F4C] border border-[#255D9A] hover:shadow-[0_0_15px_rgba(0,127,255,0.3)] transition-all">
              <div className="h-12 w-12 bg-[#007FFF]/30 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-[#007FFF]" />
              </div>
              <h3 className="text-xl font-semibold text-[#FFFFFF] mb-2">
                Community Impact
              </h3>
              <p className="text-[#B0B0B0]">
                Join thousands of donors making a difference in their communities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}