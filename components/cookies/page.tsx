'use client';

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Check } from 'lucide-react';

export default function CookiesConsent() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookiesConsent');
    if (consent !== 'accepted') {
      const timer = setTimeout(() => {
        setShowModal(true);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookiesConsent', 'accepted');
    setShowModal(false);
  };

  if (!showModal) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 max-w-md bg-white p-6 rounded-lg shadow-xl border border-gray-200 z-50 animate-fade-in">
      <div className="flex flex-col space-y-4">
        <h3 className="text-lg font-semibold text-charcoal">Cookies & Privacy</h3>
        <p className="text-sm text-charcoal/80">
          We use cookies to ensure that we give you the best experience on our website. 
          If you continue, we'll assume that you are happy to receive all cookies on the 
          CYBERNOVR website. However, if you would like, you can read more about our <span className='text-primary underline'><a href="/cookies">cookies</a></span> & <span className='text-primary underline'><a href="/privacy">privacy policy</a></span> and change your cookies settings at any time.
        </p>
        <div className="flex justify-end">
          <Button
            onClick={acceptCookies}
            className="bg-cybernovr-purple hover:bg-cybernovr-purple/90 text-white"
          >
            Continue
            <Check className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}