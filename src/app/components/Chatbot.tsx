'use client';

import { useState } from 'react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleOptionClick = (option: string) => {
    switch (option) {
      case 'email':
        window.location.href = 'mailto:your.email@example.com?subject=Hello%20from%20Chatbot';
        setMessage('Opening your email client...');
        break;
      case 'resume':
        window.open('/files/PratyushaBachu.pdf', '_blank'); // Assumes resume.pdf is in public/
        setMessage('Downloading resume...');
        break;
      case 'schedule':
        window.open('https://calendly.com/pratyusha-bachu', '_blank'); // Replace with your Calendly link
        setMessage('Opening scheduling page...');
        break;
      default:
        setMessage('Please select an option.');
    }
    setTimeout(() => setMessage(''), 3000); // Clear message after 3 seconds
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chatbot Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gray-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition"
      >
        💬
      </button>

      {/* Chatbot Dialog */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-64 bg-white rounded-lg shadow-xl p-4 text-black">
          <h3 className="text-lg font-semibold mb-2">How can I assist you?</h3>
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => handleOptionClick('email')}
                className="w-full text-left text-blue-500 hover:underline"
              >
                Send an Email
              </button>
            </li>
            <li>
              <button
                onClick={() => handleOptionClick('resume')}
                className="w-full text-left text-blue-500 hover:underline"
              >
                Download Resume
              </button>
            </li>
            <li>
              <button
                onClick={() => handleOptionClick('schedule')}
                className="w-full text-left text-blue-500 hover:underline"
              >
                Schedule a Call
              </button>
            </li>
          </ul>
          {message && <p className="mt-2 text-sm text-gray-600">{message}</p>}
          <button
            onClick={() => setIsOpen(false)}
            className="mt-2 text-sm text-gray-500 hover:text-gray-700"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}