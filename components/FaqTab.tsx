'use client';

import { useState } from 'react';

type FaqItem = {
    id: string;
    question: string;
    answer: string;
};

type FaqSection = {
    category: string;
    faqs: FaqItem[];
};

const faqSections: FaqSection[] = [
    {
        category: 'General',
        faqs: [
            {
                id: 'General_0',
                question: 'Do I need to make an appointment?',
                answer:
                    ' Walk-ins are welcome, but we recommend booking in advance for preferred timing.',
            },
            {
                id: 'General_1',
                question: 'Are your barbers experienced?',
                answer:
                    'Yes, all our barbers have over 5 years of experience and are skilled in both modern and classic hairstyles.',
            },
            {
                id: 'General_3',
                question: 'Where are you located?',
                answer:
                    '500 N Bell Ave #109, Denton, TX 76209, United States, Phone – +1 940-612-9127',
            },
        ],
    },
    {
        category: 'Services',
        faqs: [
            {
                id: 'services_0',
                question: 'What services do you offer?',
                answer:
                    'We offer haircuts, beard trims, hot towel shaves, facials, and scalp massages.',
            },
            {
                id: 'services_1',
                question: 'Do you provide grooming consultations?',
                answer:
                    'Yes, our barbers offer personalized grooming consultations based on your style and preferences.',
            },

        ],
    },
    {
        category: 'Pricing',
        faqs: [
            {
                id: 'pricing',
                question: ' How much is a standard haircut?',
                answer:
                    'A standard haircut starts at $25.',
            },
        ],
    },
    {
        category: 'support',
        faqs: [
            {
                id: 'support',
                question: 'Can I reschedule my appointment?',
                answer:
                    'Yes, you can reschedule by calling us at least 2 hours in advance or through our booking app.',
            },
        ],
    },
];

export default function FaqTabs() {
    const [activeTab, setActiveTab] = useState('all');
    const [openItem, setOpenItem] = useState<string | null>(null);

    return (
        <div className='relative z-10 lg:px-16 md:px-10 pt-10'>
            {/* Tabs */}
            <div className="mb-6">
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {['all', ...faqSections.map((section) => section.category)].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-4 py-1 rounded-xl transition-colors ${activeTab === tab ? 'bg-[#DEAE34] text-white' : 'bg-[#1A1A1A] text-gray-50 border border-[#71717B] hover:bg-[#DEAE34]'
                                }`}
                        >
                            {tab === 'all' ? 'All Sections' : tab}
                        </button>
                    ))}
                </div>
            </div>

            {/* Accordion Content */}
            <div className="space-y-8">
                {faqSections
                    .filter((section) => activeTab === 'all' || section.category === activeTab)
                    .map((section) => (
                        <div key={section.category} className="faq-section">
                            {/* <h2 className="text-xl sm:text-3xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-black">
                                {section.category}
                            </h2> */}
                            <div className="space-y-4 lg:px-32 px-5">
                                {section.faqs.map((faq) => (
                                    <div key={faq.id} className="overflow-hidden bg-[#222222] md:px-5 px-3 rounded-xl">
                                        <button
                                            onClick={() => setOpenItem(openItem === faq.id ? null : faq.id)}
                                            className="w-full text-left py-4 flex justify-between items-center focus:outline-none"
                                        >
                                            <span className="font-medium text-lg text-gray-50">{faq.question}</span>
                                            <svg
                                                className={`transform transition-transform duration-200 w-5 h-5 text-zinc-700 ${openItem === faq.id ? 'rotate-180' : ''
                                                    }`}
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>
                                        {openItem === faq.id && (
                                            <div className="py-2 md:px-8 px-3 pb-3  bg-[#222222]">
                                                <div className="prose prose-sm max-w-none text-[#71717B] text-lg">{faq.answer}</div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}


