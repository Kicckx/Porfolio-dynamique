import React from 'react';
import { Download, MapPin } from 'lucide-react';
import { useSupabaseFetchSingle, useSupabaseFetch } from '../hooks/useSupabaseFetch';

const Hero = () => {
  const { data: user, loading } = useSupabaseFetchSingle('users');
  const { data: socialLinks } = useSupabaseFetch('social_links');

  if (loading) {
    return (
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0F0F10] to-[#1A1A1E]"
      >
        <div className="animate-pulse text-gray-400">Loading...</div>
      </section>
    );
  }

  if (!user) return null;

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0F0F10] to-[#1A1A1E] px-4 pt-16"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 animate-fade-in">
          {user.photo_url && (
            <div className="relative w-32 h-32 mx-auto mb-6">
              <img
                src={user.photo_url}
                alt={user.name}
                className="w-full h-full rounded-full object-cover border-4 border-blue-500/20 shadow-lg shadow-blue-500/20"
              />
              <div className="absolute inset-0 rounded-full bg-blue-500/10 animate-pulse" />
            </div>
          )}

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-slide-up">
            {user.name}
          </h1>

          {user.bio && (
            <p className="text-xl md:text-2xl text-gray-400 mb-6 animate-slide-up animation-delay-200">
              {user.bio}
            </p>
          )}

          {user.location && (
            <div className="flex items-center justify-center space-x-2 text-gray-500 mb-8 animate-slide-up animation-delay-300">
              <MapPin size={20} />
              <span>{user.location}</span>
            </div>
          )}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 animate-slide-up animation-delay-400">
          {user.resume_url && (
            <a
              href={user.resume_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50"
            >
              <Download size={20} />
              <span>Download CV</span>
            </a>
          )}

          <a
            href="#contact"
            className="px-8 py-4 bg-[#1A1A1E] hover:bg-[#252529] text-white rounded-lg transition-all duration-300 hover:scale-105 border border-white/10"
          >
            Me contacter
          </a>
        </div>

        {socialLinks.length > 0 && (
          <div className="flex items-center justify-center space-x-4 animate-slide-up animation-delay-500">
            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-[#1A1A1E] border border-white/10 text-gray-400 hover:text-white hover:border-blue-500/50 hover:shadow-lg transition-all duration-300 hover:scale-110 hover:rotate-6"
                style={{
                  '--hover-color': link.color,
                }}
                title={link.platform}
              >
                <span className="text-lg">{link.icon || link.platform.charAt(0)}</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
