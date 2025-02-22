export default function Page() {

    const services: { service: string; price: string; timeEstimate: string }[] = [
        { service: "Legal Consultation", price: "FREE", timeEstimate: "30-60 mins" },
        { service: "Case Settlement", price: "20-40%", timeEstimate: "3-12 months" },
        { service: "Legal Research and Filing", price: "$2,500.00", timeEstimate: "2-4 weeks" },
        { service: "Divorce Filing", price: "$1,800.00", timeEstimate: "3-6 months" },
        { service: "Child Custody Representation", price: "$3,000.00", timeEstimate: "6-12 months" },
        { service: "Personal Injury Case Representation", price: "30-40%", timeEstimate: "6-24 months" },
        { service: "Insurance Claim Dispute", price: "$2,000.00", timeEstimate: "2-6 months" }
    ];
    
    const faqs: { question: string, answer: string }[] = [
        { question: "Do you offer free consultations?", answer: "Yes, we offer free initial legal consultations." },
        { question: "How do I schedule an appointment?", answer: "You can schedule an appointment by calling our office or filling out the contact form on our website." },
        { question: "What percentage do you take for personal injury cases?", answer: "We take 30-40% of the settlement, depending on the case." },
        { question: "How long does a divorce case take?", answer: "The timeline varies, but most cases take between 3 to 12 months, depending on complexity." },
        { question: "What should I bring to my first consultation?", answer: "Please bring any relevant documents, such as contracts, police reports, medical records, or court filings." }
    ];

  return (
    <div className="w-11/12 mx-auto">
        <div className="flex flex-col mx-4 mt-5 gap-5">
            <div className="mx-auto text-center text-3xl font-bold">
                Our Services
            </div>

            <div className="flex flex-row gap-6 mx-auto">
                <div className="rounded rounded-3xl bg-lgray min-h-full max-w-lg px-8 pb-4">
                    <div className="mx-auto pt-4 pb-4 text-center text-3xl font-bold">
                        Personal Injury
                    </div>
                    <div>
                    At Gee & Gee LLP, we provide dedicated legal representation for individuals who have suffered injuries due to accidents, negligence, or misconduct. Our experienced attorneys work relentlessly to secure fair compensation for medical expenses, lost wages, pain and suffering, and more. Whether you have been injured in a car accident, slip and fall, or due to a defective product, we fight to hold responsible parties accountable and help you recover what you deserve. Let us guide you through the legal process with compassion and expertise, ensuring your rights are protected every step of the way. 
                    <ul className="ml-4 mt-2" style={{
                            listStyleType: "square",
                        }}>
                        <li>Slip and fall</li>
                        <li>Medical malpractice</li>
                        <li>Car accidents</li>
                    </ul>
                    </div>
                </div>

                <div className="rounded rounded-3xl bg-lgray min-h-full max-w-lg px-8 pb-4">
                    <div className="mx-auto pt-4 pb-4 text-center text-3xl font-bold">
                        Insurance Claims
                    </div>
                    <div>
                    Gee & Gee LLP is here to assist you with insurance claims, ensuring you receive the coverage and compensation you’re entitled to. Whether dealing with property damage, health insurance disputes, or denied claims, our experienced attorneys work to hold insurance companies accountable for unfair practices. We advocate on your behalf, guiding you through the complex claims process and fighting for the best possible outcome. Let us help you navigate the challenges of insurance claims and protect your rights every step of the way.
                    <ul className="ml-4 mt-2" style={{
                            listStyleType: "square",
                        }}>
                        <li>Property damage</li>
                        <li>Health insurance</li>
                        <li>Auto insurance</li>
                    </ul>
                    </div>
                </div>

                <div className="rounded rounded-3xl bg-lgray min-h-full max-w-lg px-8 pb-4">
                    <div className="mx-auto pt-4 pb-4 text-center text-3xl font-bold">
                        Family Law
                    </div>
                    <div>
                    At Gee & Gee LLP, we understand the sensitive nature of family law matters and offer compassionate, skilled representation in cases involving divorce, child custody, child support, spousal support, and more. Our team is dedicated to helping families navigate difficult situations with care, while always keeping your best interests at heart. Whether you are seeking to resolve a dispute or need legal guidance through a challenging life transition, we are here to provide the support and expertise you need to reach a fair and lasting solution.
                    <ul className="ml-4 mt-2" style={{
                            listStyleType: "square",
                        }}>
                        <li>Divorce and Separation</li>
                        <li>Child custody and support</li>
                        <li>Adoption and Guardianship</li>
                    </ul>
                    </div>
                </div>
            </div>

            <div className="mx-auto text-center text-3xl font-bold">
                Pricing
            </div>
            <div className="mx-auto w-5/6 text-lg">
                {
                    services.map((service: {service: string, price: string, timeEstimate: string}) => {
                        return (
                        <div key={service.service} className="flex flex-row justify-between my-2 mx-auto">
                            <div className="w-7/12 bg-lgray py-3 px-4">{service.service}</div>
                            <div className="w-2/12 bg-lgray py-3 px-2 text-center">{service.timeEstimate}</div>
                            <div className="w-1/6 bg-lgray py-3 px-2 text-left">{service.price}</div>
                        </div>)
                    })
                }
            </div>
            <div className="mx-auto text-center text-3xl font-bold mt-10">
                FAQ
            </div>
            <div className="mx-auto w-4/6 text-lg">
                {
                    faqs.map((faq, index) => (
                        <div key={index} className="my-4 py-2">
                            <div className="font-semibold">{faq.question}</div>
                            <div>{faq.answer}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}
