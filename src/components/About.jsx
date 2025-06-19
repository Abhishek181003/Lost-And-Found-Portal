import React from 'react';
import {
    Heart,
    Users,
    Search,
    Shield,
    Award,
    Clock,
    MapPin,
    Star,
    CheckCircle,
    ArrowRight,
    Target,
    Lightbulb,
    Globe,
} from 'lucide-react';
import { Link } from 'react-router-dom';    
const About = () => {
    const stats = [
        { icon: Users, label: 'Active Users', value: '50K+', color: 'text-blue-500' },
        { icon: CheckCircle, label: 'Items Reunited', value: '12K+', color: 'text-green-500' },
        { icon: Clock, label: 'Average Match Time', value: '3 Days', color: 'text-purple-500' },
        { icon: Globe, label: 'Cities Covered', value: '200+', color: 'text-orange-500' }
    ];

    const features = [
        {
            icon: Search,
            title: 'Smart Search Technology',
            description: 'Advanced AI-powered matching system that connects lost items with found items using image recognition and detailed descriptions.'
        },
        {
            icon: Shield,
            title: 'Secure & Private',
            description: 'Your personal information is protected with enterprise-level security. Contact details are only shared when there\'s a verified match.'
        },
        {
            icon: MapPin,
            title: 'Location-Based Matching',
            description: 'Find items near you with our precise location tracking and radius-based search functionality.'
        },
        {
            icon: Users,
            title: 'Community Driven',
            description: 'Built by the community, for the community. Every user contributes to making our platform more effective.'
        }
    ];

    const team = [
        {
            name: 'Abhishek Ranjan',
            role: 'Founder & CEO',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
            bio: 'Started this platform after losing her grandmother\'s ring and experiencing the community\'s amazing support.'
        },
        {
            name: 'Nikhil Kumar',
            role: 'Co-Founder',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
            bio: 'Tech enthusiast passionate about using AI and machine learning to solve real-world problems.'
        }
    ];

    const values = [
        {
            icon: Heart,
            title: 'Empathy',
            description: 'We understand the emotional value of lost belongings and treat every case with care and urgency.'
        },
        {
            icon: Target,
            title: 'Efficiency',
            description: 'Our streamlined process and smart technology ensure quick and accurate matching of lost and found items.'
        },
        {
            icon: Lightbulb,
            title: 'Innovation',
            description: 'Continuously improving our platform with cutting-edge technology and user feedback.'
        },
        {
            icon: Users,
            title: 'Community',
            description: 'Building a supportive network where people help each other recover their precious belongings.'
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
                            <Heart className="w-10 h-10 text-white" />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            Reuniting Communities
                            <span className="block text-3xl md:text-5xl text-blue-200 mt-2">
                                One Lost Item at a Time
                            </span>
                        </h1>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                            We believe that every lost item has a story, and every story deserves a happy ending.
                            Our platform connects people through the power of community, technology, and hope.
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => {
                            const IconComponent = stat.icon;
                            return (
                                <div key={index} className="text-center group">
                                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 mb-4 group-hover:scale-110 transition-transform duration-200`}>
                                        <IconComponent className={`w-8 h-8 ${stat.color}`} />
                                    </div>
                                    <div className="text-3xl font-bold text-slate-800 mb-1">{stat.value}</div>
                                    <div className="text-slate-600 text-sm font-medium">{stat.label}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="mb-6">
                                <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
                                    Our Story
                                </span>
                                <h2 className="text-4xl font-bold text-slate-800 mb-6">
                                    Born from a Personal Experience
                                </h2>
                                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                                    In 2022, our Co-Founder Nikhil Kumar her grandmother's vintage wedding ring at a local park.
                                    What started as a desperate search turned into an incredible display of community support.
                                    Strangers became friends, social media posts were shared thousands of times, and
                                    volunteers organized search parties.
                                </p>
                                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                    The ring was found three weeks later by a jogger who had seen the online posts.
                                    That moment of joy and gratitude sparked the idea for this platform - a dedicated
                                    space where lost items and their stories could find their way home.
                                </p>
                                <div className="flex items-center space-x-4">
                                    <div className="flex -space-x-2">
                                        <img className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face" alt="User" />
                                        <img className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face" alt="User" />
                                        <img className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face" alt="User" />
                                    </div>
                                    <span className="text-slate-600">Trusted by thousands of users worldwide</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&h=400&fit=crop"
                                    alt="Community helping each other"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20"></div>
                            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-30"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-4">
                            How We Help
                        </span>
                        <h2 className="text-4xl font-bold text-slate-800 mb-6">
                            Advanced Technology Meets Human Compassion
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            Our platform combines cutting-edge technology with the power of community
                            to create the most effective lost and found service available.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => {
                            const IconComponent = feature.icon;
                            return (
                                <div key={index} className="group">
                                    <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                        <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
                                            <IconComponent className="w-7 h-7 text-white" />
                                        </div>
                                        <h3 className="text-xl font-semibold text-slate-800 mb-4">{feature.title}</h3>
                                        <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-2 bg-white/10 text-blue-200 rounded-full text-sm font-medium mb-4">
                            Our Values
                        </span>
                        <h2 className="text-4xl font-bold mb-6">
                            What Drives Us Every Day
                        </h2>
                        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                            These core values guide every decision we make and every feature we build.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => {
                            const IconComponent = value.icon;
                            return (
                                <div key={index} className="text-center group">
                                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
                                        <IconComponent className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                                    <p className="text-slate-300 leading-relaxed">{value.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
                            Our Team
                        </span>
                        <h2 className="text-4xl font-bold text-slate-800 mb-6">
                            Meet the People Behind the Platform
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            A passionate team dedicated to reuniting people with their lost belongings
                            and building stronger communities.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {team.map((member, index) => (
                            <div key={index} className="text-center group">
                                <div className="relative mb-6">
                                    <div className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-xl group-hover:shadow-2xl transition-shadow duration-300">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                                        <Star className="w-6 h-6 text-white" />
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-slate-800 mb-2">{member.name}</h3>
                                <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                                <p className="text-slate-600 leading-relaxed">{member.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Ready to Find What You've Lost?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                        Join thousands of people who have successfully reunited with their belongings.
                        Start your search today or help someone else find what they're looking for.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors duration-200 flex items-center justify-center space-x-2 group">
                            <Link to="/add-item">Report Lost Item</Link>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                        </button>
                        <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200">
                            <Link to={"/found-items"}>Browse Found Items</Link>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;