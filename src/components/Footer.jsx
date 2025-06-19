import React from 'react';
import { Mail, Search , Phone, MapPin, Facebook, Twitter, Instagram, Heart } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: 'About Us', href: '/about' },
        { name: 'How It Works', href: '/how-it-works' },
        { name: 'Lost Items', href: '/lost-items' },
        { name: 'Found Items', href: '/found-items' },
        { name: 'FAQ', href: '/faq' }
    ];

    const legalLinks = [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Cookie Policy', href: '/cookies' },
        { name: 'Community Guidelines', href: '/guidelines' }
    ];

    const socialLinks = [
        { name: 'Facebook', icon: Facebook, href: 'https://facebook.com', color: 'hover:text-blue-500' },
        { name: 'Twitter', icon: Twitter, href: 'https://twitter.com', color: 'hover:text-sky-400' },
        { name: 'Instagram', icon: Instagram, href: 'https://instagram.com', color: 'hover:text-pink-500' }
    ];

    return (
        <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* Brand Section */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                                <Search className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                Lost & Found Portal
                            </span>
                        </div>
                        <p className="text-slate-300 text-sm leading-relaxed mb-6">
                            Reuniting people with their lost belongings through community support and advanced search features.
                        </p>

                        {/* Social Media Links */}
                        <div className="flex space-x-4">
                            {socialLinks.map((social) => {
                                const IconComponent = social.icon;
                                return (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-slate-700 hover:scale-110 ${social.color}`}
                                        aria-label={social.name}
                                    >
                                        <IconComponent className="w-5 h-5" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-slate-300 hover:text-white transition-colors duration-200 text-sm hover:translate-x-1 transform inline-block"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white">Legal</h3>
                        <ul className="space-y-3">
                            {legalLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-slate-300 hover:text-white transition-colors duration-200 text-sm hover:translate-x-1 transform inline-block"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3 group">
                                <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-200">
                                    <Mail className="w-4 h-4 text-slate-300 group-hover:text-white" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-400">Email</p>
                                    <a
                                        href="mailto:support@lostandfound.com"
                                        className="text-sm text-slate-300 hover:text-white transition-colors duration-200"
                                    >
                                        support@lostandfound.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center space-x-3 group">
                                <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-green-600 transition-colors duration-200">
                                    <Phone className="w-4 h-4 text-slate-300 group-hover:text-white" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-400">Phone</p>
                                    <a
                                        href="tel:+1234567890"
                                        className="text-sm text-slate-300 hover:text-white transition-colors duration-200"
                                    >
                                        +91 9876543210
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center space-x-3 group">
                                <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-purple-600 transition-colors duration-200">
                                    <MapPin className="w-4 h-4 text-slate-300 group-hover:text-white" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-400">Address</p>
                                    <p className="text-sm text-slate-300">
                                        Knowledge Park 3,<br />
                                        Greater Noida, Uttar Pradesh
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Newsletter Section */}
            <div className="bg-slate-800/50 border-t border-slate-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                        <div className="text-center md:text-left">
                            <h4 className="text-lg font-semibold text-white mb-1">Stay Updated</h4>
                            <p className="text-slate-300 text-sm">Get notified about new found items and portal updates</p>
                        </div>
                        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 w-full md:w-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 min-w-64"
                            />
                            <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-medium whitespace-nowrap">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="bg-slate-900 border-t border-slate-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                        <div className="flex items-center space-x-2 text-sm text-slate-400">
                            <span>© {currentYear} Lost & Found Portal.</span>
                            <span>Made with</span>
                            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                            <span>for the community</span>
                        </div>

                        <div className="flex items-center space-x-6 text-sm text-slate-400">
                            <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                <span>All systems operational</span>
                            </div>
                            <span>•</span>
                            <span>Version 2.1.0</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;