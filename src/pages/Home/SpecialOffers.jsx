const SpecialOffers = () => {
    const offers = [
        { title: "20% Off Winter Stay", description: "Book now and enjoy a cozy winter vacation at discounted rates!" },
        { title: "Early Bird Discount", description: "Plan ahead and save big with our early bird deals." },
        { title: "Weekend Getaway Package", description: "Exclusive deals for weekend stays, including breakfast and spa access." },
    ];

    return (
        <div className= " py-8">
            <h2 className="text-2xl font-bold text-center mb-6">Special Offers</h2>
            <div className="space-y-4 max-w-4xl mx-auto">
                {offers.map((offer, index) => (
                    <div key={index} className="p-4 border rounded shadow-md ">
                        <h3 className="text-xl font-semibold">{offer.title}</h3>
                        <p>{offer.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SpecialOffers;
