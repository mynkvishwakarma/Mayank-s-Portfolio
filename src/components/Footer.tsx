import useDisableInspect from '@/hooks/useDisableInspect';
import React from 'react'

export default function Footer() {
  useDisableInspect();
  return (
      <footer className="bg-gray-800 dark:bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Mayank Vishwakarma™. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Satna, Madhya Pradesh | +91 7470955491
          </p>
        </div>
      </footer>
  )
}