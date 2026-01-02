'use client';

import React from 'react';
import {
    Leaf,
    Heart,
    Droplet,
    Users,
    Instagram,
    Facebook,
    Youtube,
    Twitter,
} from 'lucide-react';

export default function SkincareLanding() {
    return (
        <div className="min-h-screen bg-black text-white font-sans">
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-center bg-cover"
                    style={{
                        backgroundImage:
                            "url('https://plus.unsplash.com/premium_photo-1703343320257-5dedae19c70b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                    }}
                />

                <div className="absolute inset-0 bg-black/50 bg-linear-to-br from-black via-black/20 to-gray-900" />

                <div className="absolute inset-0 opacity-40">
                    <div className="absolute top-20 left-10 w-20 h-20 bg-red-700 rounded-full blur-2xl animate-pulse" />
                    <div className="absolute top-40 right-20 w-16 h-16 bg-red-600 rounded-full blur-xl animate-pulse delay-75" />
                    <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-red-800 rounded-full blur-3xl animate-pulse delay-150" />
                    <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-red-700 rounded-full blur-xl animate-pulse delay-300" />
                </div>

                <div className="relative z-10 text-center px-4 max-w-5xl">
                    <h1 className="text-5xl md:text-8xl font-serif font-bold mb-6 tracking-wider">
                        UNLEASH YOUR NATURAL ROYALTY
                    </h1>

                    <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
                        Luxurious, natural beauty products crafted to crown
                        <br />
                        your unique glow. Discover the power of pure ingredients.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-8 py-3 cursor-pointer bg-gray-200 text-black font-semibold tracking-wide hover:bg-white transition-colors"> SHOP THE COLLECTION </button>


                        <button className="px-8 py-3 border-2 cursor-pointer border-gray-200 text-white font-semibold tracking-wide hover:bg-gray-200 hover:text-black transition-colors">
                            EXPLORE OUR STORY
                        </button>
                    </div>
                </div>
            </section>
            <section className="bg-linear-to-b from-gray-900 to-black py-16">
                <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-0">
                    <FeatureCard
                        icon={<Leaf className="w-12 h-12" />}
                        title="CLEAN INGREDIENTS"
                        description="100% natural, ethically sourced botanicals. Free from harmful chemicals, parabens, and sulfates."
                    />
                    <FeatureCard
                        icon={<Heart className="w-12 h-12" />}
                        title="CRUELTY-FREE"
                        description="Never tested on animals. Beauty without compromise or cruelty."
                    />
                    <FeatureCard
                        icon={<Droplet className="w-12 h-12" />}
                        title="POTENT FORMULAS"
                        description="Scientifically advanced blends designed for visible results."
                    />
                    <FeatureCard
                        icon={<Users className="w-12 h-12" />}
                        title="INCLUSIVE BEAUTY"
                        description="Formulated for all skin tones, hair types, and textures."
                    />
                </div>
            </section>

            <section className="bg-black py-20">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                        EMBRACE YOUR REIGN. EVERY DAY.
                    </h2>

                    <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                        Our curated skincare and haircare essentials nourish, protect,
                        and enhance your natural beauty. Experience the difference of
                        royal treatment.
                    </p>

                    <button className="px-8 py-3 cursor-pointer  bg-gray-200 text-black font-semibold tracking-wide hover:bg-white transition-colors">
                        VIEW ALL PRODUCTS
                    </button>
                </div>
            </section>

            <section className="px-4 py-12 bg-linear-to-b from-black to-gray-900">
                <div className="container mx-auto grid xl:grid-cols-12 gap-8">
                    <div className="xl:col-span-5 rounded-3xl overflow-hidden shadow-2xl">
                        <img
                            src="https://plus.unsplash.com/premium_photo-1703343321242-73bb11c237d1?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            className="w-full h-full object-cover"
                            alt="Skincare"
                        />
                    </div>

                    <div className="elative xl:col-span-7 bg-gray-900 rounded-3xl px-8 pt-16 border border-slate-700/30 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-48 h-48 bg-linear-to-br from-white/20 to-transparent blur-3xl" />
                        <div className="absolute top-0 right-0 w-48 h-48 bg-linear-to-bl from-white/20 to-transparent blur-3xl" />

                        <h2 className='text-2xl md:text-2xl font-sans uppercase font-bold mb-6 text-center'>What our community says</h2>
                        <div className="grid md:grid-cols-3 gap-10 text-center">
                            <TestimonialCard
                                image="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                name="Aishe K."
                                text="This oil transformed my curls. Hydrated, defined, and full of life."
                            />
                            <TestimonialCard
                                image="https://plus.unsplash.com/premium_photo-1723489474086-72c7ace39d04?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

                                name="Emily S."
                                text="My skin glows naturally now. Balanced and radiant."
                            />
                            <TestimonialCard
                                image="https://plus.unsplash.com/premium_photo-1693000697180-4e285198d71c?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

                                name="David L."
                                text="Gentle yet effective. Finally a brand that understands skin."
                            />
                        </div>
                    </div>
                </div>
            </section>

            <footer className="bg-black border-t border-gray-800 py-12">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <nav className="flex flex-wrap justify-center gap-8 mb-8 text-sm tracking-wider">
                        <a href="#">SHOP</a>
                        <a href="#">ABOUT</a>
                        <a href="#">INGREDIENTS</a>
                        <a href="#">BLOG</a>
                        <a href="#">CONTACT</a>
                    </nav>

                    <div className="flex justify-center gap-6">
                        <SocialIcon icon={<Instagram />} />
                        <SocialIcon icon={<Facebook />} />
                        <SocialIcon icon={<Twitter />} />
                        <SocialIcon icon={<Youtube />} />
                    </div>
                </div>
            </footer>
        </div>
    );
}

/* COMPONENTS */

function FeatureCard({ icon, title, description }: any) {
    return (
        <div className="text-center p-6 bg-linear-to-b from-gray-800 to-gray-900 border border-gray-700">
            <div className="flex justify-center mb-4 text-gray-300">{icon}</div>
            <h3 className="font-serif font-bold tracking-wide mb-2">{title}</h3>
            <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
        </div>
    );
}

function TestimonialCard({ name, text, image }: any) {
    return (
        <div className="bg-gray-900 rounded-lg p-4">
            <div className="flex justify-center mb-4">
                <div className="w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center">
                    <img
                        src={image}
                        className="w-full h-full object-cover rounded-full"
                        alt="Skincare"
                    />
                </div>
            </div>
            <p className="text-sm italic text-gray-300 mb-3">"{text}"</p>
            <p className="font-serif font-semibold">– {name}</p>
        </div>
    );
}

function SocialIcon({ icon }: { icon: React.ReactNode }) {
    return (
        <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition">
            {icon}
        </div>
    );
}
