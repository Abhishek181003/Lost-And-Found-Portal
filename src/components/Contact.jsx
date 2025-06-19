import React, { useState } from 'react';
import {
    Mail,
    Phone,
    MapPin,
    Clock,
    Send,
    MessageSquare,
    HelpCircle,
    AlertCircle,
    CheckCircle,
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    Globe,
    Users,
    Heart,
    ArrowRight
} from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        category: '',
        message: '',
        priority: 'normal'
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitStatus('success');
            setFormData({
                name: '',
                email: '',
                subject: '',
                category: '',
                message: '',
                priority: 'normal'
            });

            // Reset success message after 5 seconds
            setTimeout(() => setSubmitStatus(null), 5000);
        }, 2000);
    };

    const contactMethods = [
        {
            icon: Mail,
            title: 'Email Support',
            description: 'Get help via email within 24 hours',
            contact: 'support@lostandfound.com',
            action: 'Send Email',
            color: 'bg-blue-500',
            hoverColor: 'hover:bg-blue-600'
        },
        {
            icon: Phone,
            title: 'Phone Support',
            description: 'Speak with our team directly',
            contact: '+91 9876543210',
            action: 'Call Now',
            color: 'bg-green-500',
            hoverColor: 'hover:bg-green-600'
        },
        {
            icon: MessageSquare,
            title: 'Live Chat',
            description: 'Chat with us in real-time',
            contact: 'Available 9 AM - 6 PM IST',
            action: 'Start Chat',
            color: 'bg-purple-500',
            hoverColor: 'hover:bg-purple-600'
        }
    ];

    const officeInfo = [
        {
            icon: MapPin,
            title: 'Main Office',
            details: [
                'Knowledge Park 3',
                'Greater Noida',
                'Uttar Pradesh'
            ]
        },
        {
            icon: Clock,
            title: 'Business Hours',
            details: [
                'Monday - Friday: 9:00 AM - 6:00 PM',
                'Saturday: 10:00 AM - 4:00 PM',
                'Sunday: Closed'
            ]
        },
        {
            icon: Globe,
            title: 'Coverage Area',
            details: [
                '200+ Cities Worldwide',
                '24/7 Online Platform',
                'Multi-language Support'
            ]
        }
    ];

    const socialLinks = [
        { icon: Facebook, name: 'Facebook', url: 'https://facebook.com', color: 'hover:text-blue-600' },
        { icon: Twitter, name: 'Twitter', url: 'https://twitter.com', color: 'hover:text-sky-500' },
        { icon: Instagram, name: 'Instagram', url: 'https://instagram.com', color: 'hover:text-pink-500' },
        { icon: Linkedin, name: 'LinkedIn', url: 'https://linkedin.com', color: 'hover:text-blue-700' }
    ];

    const faqItems = [
        {
            question: 'How quickly do you respond to inquiries?',
            answer: 'We respond to all inquiries within 24 hours during business days. Urgent matters are handled within 2-4 hours.'
        },
        {
            question: 'Is there a fee for using the platform?',
            answer: 'Our basic lost and found service is completely free. We offer premium features for enhanced visibility and matching.'
        },
        {
            question: 'How do you verify found items?',
            answer: 'We use a secure verification process that protects both finders and owners while ensuring legitimate matches.'
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800"></div>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="mb-8">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full backdrop-blur-sm mb-6">
                            <MessageSquare className="w-10 h-10 text-white" />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            Get In Touch
                            <span className="block text-3xl md:text-5xl text-blue-200 mt-2">
                                We're Here to Help
                            </span>
                        </h1>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                            Have questions about our platform? Need help finding a lost item?
                            Our dedicated support team is ready to assist you every step of the way.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Methods */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-800 mb-4">Choose Your Preferred Contact Method</h2>
                        <p className="text-lg text-slate-600">We offer multiple ways to get in touch based on your needs</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {contactMethods.map((method, index) => {
                            const IconComponent = method.icon;
                            return (
                                <div key={index} className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                    <div className={`w-16 h-16 ${method.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                                        <IconComponent className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-slate-800 mb-3">{method.title}</h3>
                                    <p className="text-slate-600 mb-4">{method.description}</p>
                                    <p className="font-medium text-slate-800 mb-6">{method.contact}</p>
                                    <button className={`w-full py-3 px-6 ${method.color} ${method.hoverColor} text-white rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2`}>
                                        <span>{method.action}</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Contact Form */}
            <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-6">
                            <h2 className="text-3xl font-bold text-white">Send Us a Message</h2>
                            <p className="text-blue-100 mt-2">Fill out the form below and we'll get back to you as soon as possible</p>
                        </div>

                        <div className="p-8">
                            {submitStatus === 'success' && (
                                <div className="mb-6 p-4 bg-green-100 border border-green-200 rounded-lg flex items-center space-x-3">
                                    <CheckCircle className="w-5 h-5 text-green-600" />
                                    <span className="text-green-800">Message sent successfully! We'll get back to you within 24 hours.</span>
                                </div>
                            )}

                            <div onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                            placeholder="Enter your full name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                            placeholder="Enter your email address"
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="category" className="block text-sm font-medium text-slate-700 mb-2">
                                            Category *
                                        </label>
                                        <select
                                            id="category"
                                            name="category"
                                            value={formData.category}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                        >
                                            <option value="">Select a category</option>
                                            <option value="general">General Inquiry</option>
                                            <option value="technical">Technical Support</option>
                                            <option value="lost-item">Lost Item Help</option>
                                            <option value="found-item">Found Item Report</option>
                                            <option value="account">Account Issues</option>
                                            <option value="partnership">Partnership</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="priority" className="block text-sm font-medium text-slate-700 mb-2">
                                            Priority Level
                                        </label>
                                        <select
                                            id="priority"
                                            name="priority"
                                            value={formData.priority}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                        >
                                            <option value="low">Low</option>
                                            <option value="normal">Normal</option>
                                            <option value="high">High</option>
                                            <option value="urgent">Urgent</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                                        Subject *
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                        placeholder="Brief description of your inquiry"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        rows={6}
                                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                                        placeholder="Please provide detailed information about your inquiry..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                            <span>Sending...</span>
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5" />
                                            <span>Send Message</span>
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Office Information */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-800 mb-4">Visit Our Office</h2>
                        <p className="text-lg text-slate-600">Find us at our headquarters or connect with us online</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {officeInfo.map((info, index) => {
                            const IconComponent = info.icon;
                            return (
                                <div key={index} className="text-center">
                                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <IconComponent className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-slate-800 mb-4">{info.title}</h3>
                                    <div className="space-y-2">
                                        {info.details.map((detail, idx) => (
                                            <p key={idx} className="text-slate-600">{detail}</p>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Map Placeholder */}
                    <div className="mt-16">
                        <div className="bg-gradient-to-br from-slate-100 to-blue-100 rounded-2xl p-8 text-center">
                            <MapPin className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-slate-800 mb-2">Interactive Map</h3>
                            <p className="text-slate-600 mb-6">Find our exact location and get directions</p>
                            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                                View on Google Maps
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Social Media & FAQ */}
            <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16">

                        {/* Social Media */}
                        <div>
                            <h3 className="text-2xl font-bold text-slate-800 mb-6">Follow Us on Social Media</h3>
                            <p className="text-slate-600 mb-8">Stay updated with the latest news, success stories, and community highlights.</p>

                            <div className="grid grid-cols-2 gap-4">
                                {socialLinks.map((social, index) => {
                                    const IconComponent = social.icon;
                                    return (
                                        <a
                                            key={index}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center space-x-3 p-4 bg-white rounded-lg hover:shadow-md transition-all duration-200 group"
                                        >
                                            <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center group-hover:bg-slate-200 transition-colors duration-200">
                                                <IconComponent className={`w-5 h-5 text-slate-600 ${social.color} transition-colors duration-200`} />
                                            </div>
                                            <span className="font-medium text-slate-800">{social.name}</span>
                                        </a>
                                    );
                                })}
                            </div>
                        </div>

                        {/* FAQ */}
                        <div>
                            <h3 className="text-2xl font-bold text-slate-800 mb-6">Frequently Asked Questions</h3>
                            <div className="space-y-4">
                                {faqItems.map((faq, index) => (
                                    <div key={index} className="bg-white rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
                                        <div className="flex items-start space-x-3">
                                            <HelpCircle className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                                            <div>
                                                <h4 className="font-semibold text-slate-800 mb-2">{faq.question}</h4>
                                                <p className="text-slate-600 text-sm">{faq.answer}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                                <div className="flex items-center space-x-2">
                                    <AlertCircle className="w-5 h-5 text-blue-600" />
                                    <span className="text-blue-800 font-medium">Need more help?</span>
                                </div>
                                <p className="text-blue-700 text-sm mt-1">
                                    Check out our comprehensive <a href="/faq" className="underline hover:no-underline">FAQ section</a> or <a href="/help" className="underline hover:no-underline">Help Center</a>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Emergency Contact */}
            <section className="py-16 bg-gradient-to-r from-red-500 to-pink-500">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <AlertCircle className="w-16 h-16 text-white mx-auto mb-6" />
                    <h2 className="text-3xl font-bold text-white mb-4">Emergency or Urgent Item Recovery?</h2>
                    <p className="text-red-100 text-lg mb-8">
                        For time-sensitive lost items (medications, important documents, etc.),
                        contact our emergency hotline for immediate assistance.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="tel:+919876543210"
                            className="px-8 py-4 bg-white text-red-600 rounded-xl font-semibold hover:bg-red-50 transition-colors duration-200 flex items-center justify-center space-x-2"
                        >
                            <Phone className="w-5 h-5" />
                            <span>Emergency Hotline</span>
                        </a>
                        <a
                            href="mailto:emergency@lostandfound.com"
                            className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-red-600 transition-all duration-200 flex items-center justify-center space-x-2"
                        >
                            <Mail className="w-5 h-5" />
                            <span>Emergency Email</span>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;