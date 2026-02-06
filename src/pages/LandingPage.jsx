import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function LandingPage() {
    const { isAuthenticated } = useAuth();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-[#0A0A0B] text-white selection:bg-indigo-500 selection:text-white overflow-hidden font-sans">

            {/* Background Gradients (The "Lovable" Effect) */}
            <div className="fixed inset-0 z-0 opacity-40 pointer-events-none">
                <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            </div>

            {/* Grid Pattern Overlay */}
            <div className="fixed inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

            {/* Navigation */}
            <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0A0A0B]/80 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'}`}>
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex justify-between h-20 items-center">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-violet-500 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <span className="text-2xl font-bold tracking-tight text-white">
                                FinTrack
                            </span>
                        </div>
                        <div className="hidden md:flex items-center gap-8">
                            <a href="#features" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Features</a>
                            <a href="#testimonials" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Testimonials</a>
                            <a href="#pricing" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Pricing</a>
                        </div>
                        <div className="flex items-center gap-4">
                            {isAuthenticated ? (
                                <Link to="/dashboard" className="bg-white text-black px-6 py-2.5 rounded-full font-semibold hover:bg-gray-200 transition-all shadow-lg hover:shadow-white/20">
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link to="/login" className="text-gray-300 hover:text-white font-medium transition-colors hidden sm:block">
                                        Sign In
                                    </Link>
                                    <Link
                                        to="/register"
                                        className="bg-indigo-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5"
                                    >
                                        Get Started
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="relative z-10 pt-32 pb-20 lg:pt-48 lg:pb-32">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-indigo-300 text-sm font-medium mb-8 animate-fade-in-up">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                        </span>
                        The Future of Personal Finance
                    </div>

                    <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tight mb-8 leading-tight">
                        Stop guessing. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 animate-gradient">
                            Start growing.
                        </span>
                    </h1>

                    <p className="mt-8 text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        FinTrack brings your entire financial life into one beautiful, intelligent dashboard. Track, budget, and invest with AI-powered insights.
                    </p>

                    <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            to="/register"
                            className="px-8 py-4 rounded-full bg-white text-black font-bold text-lg hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
                        >
                            Start Your Journey
                        </Link>
                        <Link
                            to="/login"
                            className="px-8 py-4 rounded-full glass text-white border border-white/10 font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-md"
                        >
                            Live Demo
                        </Link>
                    </div>

                    {/* Dashboard Preview (The "Visual Hook") */}
                    <div className="mt-20 relative mx-auto max-w-5xl">
                        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-30 animate-pulse"></div>
                        <div className="relative rounded-2xl bg-[#0A0A0B] border border-white/10 shadow-2xl overflow-hidden p-2 ring-1 ring-white/10">
                            {/* Mockup Header */}
                            <div className="h-8 bg-[#161618] w-full flex items-center gap-2 px-4 border-b border-white/5">
                                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                            </div>
                            {/* Mockup Body Placeholder/Image */}
                            <div className="bg-[#0f0f11] p-8 min-h-[400px] flex items-center justify-center relative overflow-hidden group">
                                <div className="text-center">
                                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-500">📊</div>
                                    <div className="text-2xl font-bold text-gray-700">Interactive Dashboard</div>
                                    <div className="text-gray-800">Real-time data visualization</div>
                                </div>

                                {/* Floating elements */}
                                <div className="absolute top-10 right-10 p-4 rounded-xl glass border border-white/10 w-48 animate-bounce" style={{ animationDuration: '3s' }}>
                                    <div className="text-xs text-gray-400 mb-1">Total Balance</div>
                                    <div className="text-2xl font-bold text-white">$124,592.00</div>
                                    <div className="text-xs text-emerald-400 mt-1">▲ 2.4% today</div>
                                </div>

                                <div className="absolute bottom-10 left-10 p-4 rounded-xl glass border border-white/10 w-48 animate-bounce" style={{ animationDuration: '4s' }}>
                                    <div className="text-xs text-gray-400 mb-1">Monthly Spending</div>
                                    <div className="text-xl font-bold text-white">$2,450.00</div>
                                    <div className="w-full bg-gray-800 h-1.5 rounded-full mt-2 overflow-hidden">
                                        <div className="bg-indigo-500 h-full w-[60%]"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bento Grid Features */}
            <div className="py-32 relative z-10" id="features">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-bold text-white mb-4">Engineering Financial Freedom</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Our platform replaces 5 different apps with one cohesive, powerful system.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Large Card */}
                        <div className="md:col-span-2 p-8 rounded-3xl bg-[#121214] border border-white/5 hover:border-indigo-500/30 transition-colors group relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl group-hover:bg-indigo-600/20 transition-all"></div>
                            <h3 className="text-2xl font-bold text-white mb-2">Automated Intelligence</h3>
                            <p className="text-gray-400 mb-8 max-w-sm">
                                FinTrack AI analyzes your spending patterns to suggest realistic budgets and savings opportunities automatically.
                            </p>
                            <div className="h-48 rounded-2xl bg-gradient-to-tr from-[#1a1a1c] to-[#202022] border border-white/5 p-6 relative">
                                {/* Fake UI Chart */}
                                <div className="flex items-end gap-2 h-full pb-4">
                                    <div className="w-full bg-indigo-500/20 h-[40%] rounded-t-lg relative group-hover:h-[60%] transition-all duration-700"></div>
                                    <div className="w-full bg-indigo-500/40 h-[70%] rounded-t-lg relative group-hover:h-[90%] transition-all duration-700 delay-75"></div>
                                    <div className="w-full bg-indigo-500/60 h-[50%] rounded-t-lg relative group-hover:h-[65%] transition-all duration-700 delay-100"></div>
                                    <div className="w-full bg-indigo-500 h-[85%] rounded-t-lg relative group-hover:h-[95%] transition-all duration-700 delay-150 shadow-[0_0_20px_rgba(99,102,241,0.5)]"></div>
                                </div>
                            </div>
                        </div>

                        {/* Tall Card */}
                        <div className="md:row-span-2 p-8 rounded-3xl bg-[#121214] border border-white/5 hover:border-pink-500/30 transition-colors group relative overflow-hidden">
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-600/10 rounded-full blur-3xl group-hover:bg-pink-600/20 transition-all"></div>
                            <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center text-2xl mb-6 text-pink-400">⚡</div>
                            <h3 className="text-2xl font-bold text-white mb-2">Real-time Sync</h3>
                            <p className="text-gray-400 mb-8">
                                Instant updates across all your devices. Add a transaction on mobile, see it on web instantly.
                            </p>
                            <div className="space-y-4">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                                        <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-lg">💰</div>
                                        <div>
                                            <div className="text-white font-medium text-sm">Income Received</div>
                                            <div className="text-gray-500 text-xs">Just now</div>
                                        </div>
                                        <div className="ml-auto text-green-400 font-mono">+$4,200</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Small Card 1 */}
                        <div className="p-8 rounded-3xl bg-[#121214] border border-white/5 hover:border-emerald-500/30 transition-colors group">
                            <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center text-2xl mb-6 text-emerald-400">🛡</div>
                            <h3 className="text-xl font-bold text-white mb-2">Encryption</h3>
                            <p className="text-gray-400 text-sm">
                                Your keys, your data. AES-256 bit encryption ensures only you see your numbers.
                            </p>
                        </div>

                        {/* Small Card 2 */}
                        <div className="p-8 rounded-3xl bg-[#121214] border border-white/5 hover:border-blue-500/30 transition-colors group">
                            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center text-2xl mb-6 text-blue-400">🎯</div>
                            <h3 className="text-xl font-bold text-white mb-2">Goal Tracking</h3>
                            <p className="text-gray-400 text-sm">
                                Set targets for vacations, homes, or freedom. Visual progress bars keep you motivated.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="py-24 relative z-10">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <div className="p-1 rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                        <div className="bg-[#0A0A0B] rounded-[22px] py-20 px-8">
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to take control?</h2>
                            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                                Join thousands of smart investors who are building their wealth with FinTrack today.
                            </p>
                            <Link
                                to="/register"
                                className="inline-block px-10 py-5 rounded-full bg-white text-black font-bold text-xl hover:bg-gray-200 transition-all transform hover:scale-105 shadow-2xl"
                            >
                                Create Free Account
                            </Link>
                            <p className="mt-6 text-sm text-gray-500">No credit card required • Free forever plan available</p>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="border-t border-white/10 py-12 bg-[#050505]">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-lg bg-indigo-600"></div>
                        <span className="text-white font-bold text-lg">FinTrack</span>
                    </div>
                    <div className="text-gray-500 text-sm">
                        © 2026 FinTrack Inc. All rights reserved.
                    </div>
                    <div className="flex gap-6">
                        <a href="#" className="text-gray-500 hover:text-white transition-colors">Twitter</a>
                        <a href="#" className="text-gray-500 hover:text-white transition-colors">GitHub</a>
                        <a href="#" className="text-gray-500 hover:text-white transition-colors">Discord</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
