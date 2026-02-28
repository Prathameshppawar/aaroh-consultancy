import { useState } from 'react';
import './ContactForm.css';

const serviceOptions = [
    'Process Planning Solutions',
    'Process Documentation',
    'Assistance in ERP Implementation',
    'Assistance in Inventory Control',
];

export default function ContactForm() {
    const [form, setForm] = useState({
        name: '',
        industry: '',
        services: [] as string[],
        contact: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleService = (service: string) => {
        setForm((prev) => ({
            ...prev,
            services: prev.services.includes(service)
                ? prev.services.filter((s) => s !== service)
                : [...prev.services, service],
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Placeholder — integrate with Formspree / backend later
        console.log('Form submission:', form);
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
        setForm({ name: '', industry: '', services: [], contact: '' });
    };

    return (
        <form className="contact-form" onSubmit={handleSubmit} id="contact-form">
            <div className="contact-form__group">
                <label htmlFor="cf-name" className="contact-form__label">
                    Name of Person / Organization <span>*</span>
                </label>
                <input
                    id="cf-name"
                    type="text"
                    className="contact-form__input"
                    placeholder="Enter your name or organization name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                />
            </div>

            <div className="contact-form__group">
                <label htmlFor="cf-industry" className="contact-form__label">
                    Industry Type <span>*</span>
                </label>
                <input
                    id="cf-industry"
                    type="text"
                    className="contact-form__input"
                    placeholder="e.g., Automotive, Aerospace, General Engineering"
                    value={form.industry}
                    onChange={(e) => setForm({ ...form, industry: e.target.value })}
                    required
                />
            </div>

            <div className="contact-form__group">
                <label className="contact-form__label">
                    Specific Service Requirement <span>*</span>
                </label>
                <div className="contact-form__chips">
                    {serviceOptions.map((service) => (
                        <button
                            key={service}
                            type="button"
                            className={`contact-form__chip ${form.services.includes(service) ? 'contact-form__chip--active' : ''}`}
                            onClick={() => handleService(service)}
                        >
                            {service}
                        </button>
                    ))}
                </div>
            </div>

            <div className="contact-form__group">
                <label htmlFor="cf-contact" className="contact-form__label">
                    How would you like us to contact you? <span>*</span>
                </label>
                <input
                    id="cf-contact"
                    type="text"
                    className="contact-form__input"
                    placeholder="Email address or mobile number"
                    value={form.contact}
                    onChange={(e) => setForm({ ...form, contact: e.target.value })}
                    required
                />
            </div>

            <button type="submit" className="btn btn-primary btn-lg contact-form__submit">
                {submitted ? '✓ Submitted Successfully!' : 'Send Your Requirement'}
            </button>

            {submitted && (
                <p className="contact-form__success">
                    Thank you! We'll get back to you within 24 hours.
                </p>
            )}
        </form>
    );
}
