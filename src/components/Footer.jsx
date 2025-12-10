import React from 'react';
import { useSupabaseFetchSingle, useSupabaseFetch } from '../hooks/useSupabaseFetch';

const Footer = () => {
  const { data: user } = useSupabaseFetchSingle('users');
  const { data: socialLinks } = useSupabaseFetch('social_links');

  return (
    <footer className="bg-[#0F0F10] border-t border-white/5 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label={link.platform}
              >
                <span className="text-sm">{link.platform}</span>
              </a>
            ))}
          </div>

          {user && (
            <div className="text-center space-y-1">
              {user.email && (
                <p className="text-gray-400 text-sm">{user.email}</p>
              )}
              {user.location && (
                <p className="text-gray-500 text-sm">{user.location}</p>
              )}
            </div>
          )}

          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
