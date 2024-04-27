import { useState } from "react";

export default function Faq() {
    const faqs = [
        {
            question: "How do I place an order?",
            answer: "You can place an order by selecting the desired product, adding it to your cart, and proceeding to checkout.",
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept Visa, Mastercard, American Express, and PayPal.",
        },
        {
            question: "Do you offer international shipping?",
            answer: "Yes, we offer international shipping to most countries. Shipping rates may vary.",
        },
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="faq-container my-12 md:mx-32">
            <h2 className="w-full max-w-xl mx-0 mx-auto mt-4 mb-0 font-sans text-sm font-medium leading-relaxed text-center text-gray-400 border-0 border-gray-200 lg:text-2xl md:text-base">Frequently Asked Questions</h2>
            <div className="faq-list">
                {faqs.map((faq, index) => (
                    <div className="faq-item border-b pb-4" key={index}>
                        <button
                            className={`faq-question flex justify-between items-center w-full p-2 rounded-lg ${
                                activeIndex === index ? "" : "bg-white"
                            }`}
                            onClick={() => toggleAccordion(index)}
                            aria-expanded={activeIndex === index ? "true" : "false"}
                            aria-controls={`faq-answer-${index}`}
                        >
                            <span>{faq.question}</span>
                            <svg
                                className={`h-6 w-6 transform ${
                                    activeIndex === index ? "rotate-180" : ""
                                }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>
                        {activeIndex === index && (
                            <p
                                id={`faq-answer-${index}`}
                                className="faq-answer mt-2 text-gray-400"
                            >
                                {faq.answer}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </div>



    );
}



