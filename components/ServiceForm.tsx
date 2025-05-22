'use client';

import { useState } from 'react';

export default function ServiceForm() {
    const [form, setForm] = useState({
        name: '',
        phone: '',
        date: '',
        service: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', form);
        // Add API or form handling logic here
    };

    return (

        <form onSubmit={handleSubmit} className="space-y-4 px-5 py-5">
            <div>
                <label className="block font-medium mb-1">Name</label>
                <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder='Your name'
                    className="w-full border border-gray-300 rounded-xl py-1.5 px-3  placeholder-[#71717B]  focus:outline-none focus:ring-2 focus:ring-[#DEAE34]"
                />
            </div>

            <div>
                <label className="block font-medium mb-1">Phone</label>
                <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    placeholder='Phone number'
                    className="w-full border border-gray-300 rounded-xl py-1.5 px-3 placeholder-[#71717B] focus:outline-none focus:ring-2 focus:ring-[#DEAE34]"
                />
            </div>

            <div>
                <label className="block font-medium mb-1">Date</label>
                <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 placeholder-[#71717B] rounded-xl py-1.5 px-3 focus:outline-none focus:ring-2 focus:ring-[#DEAE34]"
                />
            </div>

            <div>
                <label className="block font-medium mb-1">Select Service</label>
                <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 placeholder-[#71717B] rounded-xl py-1.5 px-3 focus:outline-none focus:ring-2 focus:ring-[#DEAE34]"
                >
                    <option value="" className='text-[#71717B]'>-- Choose an option --</option>
                    <option value="haircut">Haircut</option>
                    <option value="hottowel-shave">Hot Towel Shave</option>
                    <option value="haircut-and-beard-combo">Haircut & Beard Combo</option>
                    <option value="kids-haircut">Kid&apos;s Haircut</option>
                    <option value="senior-haircut">Senior Haircut</option>
                    <option value="Other">Other</option>
                </select>
            </div>

            <div>
                <label className="block font-medium mb-1">Message (optional)</label>
                <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Write your message..."
                    className="w-full border border-gray-300 placeholder-[#71717B] rounded-xl py-1.5 px-3 focus:outline-none focus:ring-2 focus:ring-[#DEAE34]"
                />
            </div>

            <button
                type="submit"
                className="w-full bg-[#DEAE34] text-white py-2 rounded hover:bg-[#dcc385] transition-colors duration-300 ease-in-out"
            >
                Submit
            </button>
        </form>

    );
}
