"use client";

import React, { useState } from "react";
import { submitBooking, BookingData } from "@/services/api";
import siteContent from "@/config/siteContent";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { DatePicker } from "@/components/ui/date-picker";
import { MapPin, Clock, Search, Compass } from "lucide-react";

const BookingForm: React.FC = () => {
    const [form, setForm] = useState<BookingData>({
        destination: "",
        depart_date: "",
        return_date: "",
        duration: "",
    });

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e?: React.FormEvent) => {
        if (e) e.preventDefault();
        if (loading) return;

        if (!form.destination) {
            alert("Please select a destination");
            return;
        }

        setLoading(true);

        try {
            const payload: BookingData = {
                ...form,
                duration: form.duration ? Number(form.duration) : 1,
            };

            await submitBooking(payload);
            alert("Booking inquiry submitted successfully! Our team will contact you shortly.");
            setForm({
                destination: "",
                depart_date: "",
                return_date: "",
                duration: "",
            });
        } catch (err) {
            console.error(err);
            alert("Failed to submit inquiry. Please try again or contact us directly.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full relative z-30 max-w-[1140px] mx-auto px-4 -mt-12 lg:-mt-16 mb-12" id="booking">
            <div className="bg-white/95 backdrop-blur-md shadow-2xl rounded-2xl p-4 lg:p-6 border border-white/80 ring-1 ring-black/5">
                <div className="flex items-center justify-between mb-3 px-1">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E619B0]">
                        <Compass className="w-3.5 h-3.5" />
                        <span>Search & Book Custom Safaris</span>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 items-end">
                    {/* Destination Select */}
                    <div>
                        <label className="block text-xs font-bold text-[#33052A] mb-1.5 ml-1">Destination</label>
                        <Select
                            value={form.destination}
                            onValueChange={(val) => setForm({ ...form, destination: val })}
                        >
                            <SelectTrigger icon={<MapPin className="h-4 w-4" />}>
                                <SelectValue placeholder="Select Destination" />
                            </SelectTrigger>
                            <SelectContent>
                                {siteContent.bookingOptions.destinations.map((d) => (
                                    <SelectItem key={d.value} value={d.value}>
                                        {d.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Depart Date */}
                    <div>
                        <label className="block text-xs font-bold text-[#33052A] mb-1.5 ml-1">Departure Date</label>
                        <DatePicker
                            value={form.depart_date}
                            onChange={(val) => setForm({ ...form, depart_date: val })}
                            placeholder="Depart Date"
                        />
                    </div>

                    {/* Return Date */}
                    <div>
                        <label className="block text-xs font-bold text-[#33052A] mb-1.5 ml-1">Return Date</label>
                        <DatePicker
                            value={form.return_date}
                            onChange={(val) => setForm({ ...form, return_date: val })}
                            placeholder="Return Date"
                        />
                    </div>

                    {/* Duration Select */}
                    <div>
                        <label className="block text-xs font-bold text-[#33052A] mb-1.5 ml-1">Duration</label>
                        <Select
                            value={String(form.duration)}
                            onValueChange={(val) => setForm({ ...form, duration: val })}
                        >
                            <SelectTrigger icon={<Clock className="h-4 w-4" />}>
                                <SelectValue placeholder="Select Duration" />
                            </SelectTrigger>
                            <SelectContent>
                                {siteContent.bookingOptions.durations.map((d) => (
                                    <SelectItem key={d.value} value={d.value}>
                                        {d.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Submit Action */}
                    <div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full h-12 bg-gradient-to-r from-[#E619B0] to-[#8A0F6B] text-white font-bold text-sm rounded-xl shadow-md hover:brightness-110 transition-all flex items-center justify-center gap-2 disabled:opacity-60 cursor-pointer"
                        >
                            {loading ? (
                                <span className="inline-block w-4 h-4 border-2 border-white border-r-transparent rounded-full animate-spin" />
                            ) : (
                                <>
                                    <Search className="h-4 w-4" />
                                    <span>Inquire Now</span>
                                </>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BookingForm;