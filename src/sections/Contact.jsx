import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useSupabaseFetchSingle, useSupabaseFetch } from '../hooks/useSupabaseFetch';
import Section from '../components/Section';
import Card from '../components/Card';

const Contact = () => {
  const { data: user } = useSupabaseFetchSingle('users');
  const { data: socialLinks } = useSupabaseFetch('social_links');

  return (
    <Section
      id="contact"
      title="Me contacter"
      subtitle="Je suis toujours ouvert à de nouvelles opportunités et collaborations. N'hésitez pas à me contacter via les informations ci-dessous ou à travers mes réseaux sociaux."
      className="bg-[#0F0F10]"
    >
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {user?.email && (
            <Card hover={false}>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Email
                  </h3>
                  <a
                    href={`mailto:${user.email}`}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {user.email}
                  </a>
                </div>
              </div>
            </Card>
          )}

          {user?.phone && (
            <Card hover={false}>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Phone
                  </h3>
                  <a
                    href={`tel:${user.phone}`}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {user.phone}
                  </a>
                </div>
              </div>
            </Card>
          )}

          {user?.location && (
            <Card hover={false}>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Location
                  </h3>
                  <p className="text-gray-400">{user.location}</p>
                </div>
              </div>
            </Card>
          )}
        </div>

        {socialLinks.length > 0 && (
          <Card hover={false} className="text-center">
            <h3 className="text-xl font-semibold text-white mb-6">
              Se connecter avec moi
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-6 py-3 bg-[#0F0F10] hover:bg-[#252529] rounded-lg transition-all duration-300 hover:scale-105 border border-white/10 hover:border-blue-500/50"
                  style={{
                    '--hover-glow': link.color,
                  }}
                >
                  {link.icon && <span className="text-xl">{link.icon}</span>}
                  <span className="text-gray-300">{link.platform}</span>
                  <Send size={16} className="text-gray-400" />
                </a>
              ))}
            </div>
          </Card>
        )}
      </div>
    </Section>
  );
};

export default Contact;
