// Seller data - manually structured for reliability
const sellersData = [
    {
        'Seller_Name (as shown on 99acres)': 'Settlin Zero Brokerage',
        'Google_Business_Name': 'Settlin, Property Consultancy',
        'Google_Rating (e.g., 4.3/5)': '4.6 / 5',
        'Total_Review_Count': '927',
        'Review_1_Text': 'After searching the whole of internet for a reliable property purchase service, I felt lost until somehow I came across Settlin and the search ended and now I have a new flat',
        'Review_1_Date': '5 Days ago',
        'Review_2_Text': 'Great Service. Vineet, Sharanya, Bharat and everyone were really helpful. Proper guidance and fully professional.',
        'Review_2_Date': 'a week ago',
        'Review_3_Text': 'Got to know about Settlin through one of my friend. From beginning till registration settlin has done very good service for both buyer and seller. Vineeth from Settlin made sure all process goes smoothly by guiding both Seller and Buyer politely. Thanks.',
        'Review_3_Date': '2 weeks ago'
    },
    {
        'Seller_Name (as shown on 99acres)': 'VALUEPERSQFT REALTY SERVICE PVT LTD',
        'Google_Business_Name': 'Value Per Sqft',
        'Google_Rating (e.g., 4.3/5)': '4.9',
        'Total_Review_Count': '620',
        'Review_1_Text': 'Priyanka supported me and convinced me to get a flat in Godrej Azure almost instantly. I came with my friend for his booking but her approach and explanation convinced me to book a flat for myself. My best wishes to priyanka for continuing her good work.',
        'Review_1_Date': 'a day ago',
        'Review_2_Text': 'Experience was good. Mr. Rajashekar, an experienced and hardworking sales professional had assisted us for buying the property at Godrej Azure. He is very good at sales and our experince with him was enriching. Thank you Rajashekhar!',
        'Review_2_Date': '4 days ago',
        'Review_3_Text': 'Paisapresft is good at coordinating and marketing properties but does not negotiate much on prices. In Chennai, there are more unsold new apartments than sold ones recently. Builders find it hard to sell these apartments because they don\'t offer discounts, even though buyers wait longer to take possession. Builders keep prices steady to cover their costs and hope the market will improve without lowering prices.',
        'Review_3_Date': 'a week ago'
    },
    {
        'Seller_Name (as shown on 99acres)': 'Pin Click Property Management Pvt Ltd',
        'Google_Business_Name': 'Pin Click',
        'Google_Rating (e.g., 4.3/5)': '3.3',
        'Total_Review_Count': '455',
        'Review_1_Text': 'Very Bad Experience',
        'Review_1_Date': '3 days ago',
        'Review_2_Text': 'I receive calls from them literally every single day claiming that I have raised some request. And every single day i ask them to remove my number from their database. I have blocked at least 12 of their numbers. The most annoying real estate brokers i have ever come across.',
        'Review_2_Date': '2 weeks ago',
        'Review_3_Text': 'I interacted with Anurag, he suggested good options as per my requirement and I was able to make a decision. He did not force and always mentioned pros and cons of all properties based on the area.',
        'Review_3_Date': '3 weeks ago'
    },
    {
        'Seller_Name (as shown on 99acres)': 'G R Reality',
        'Google_Business_Name': 'G R Reality',
        'Google_Rating (e.g., 4.3/5)': '4.6',
        'Total_Review_Count': '99',
        'Review_1_Text': 'Very good service by the team to get our flat. End to end process was taken care by Pranaw. Recommened them.',
        'Review_1_Date': '5 days ago',
        'Review_2_Text': 'We have met with Irfan khan from G R reality Pvt Ltd. He is very very supportive and understood our requirements for 3 BHK. His nature and down to earth attitude impressed us the most. Very honest and very Hard working person. Thank you Irfan for getting our flats as per our requirement and we are completely satisfied with yours and company\'s support. You are one of the gem 💎',
        'Review_2_Date': 'a month ago',
        'Review_3_Text': 'Best in the Business, always have variety and presence everywhere, good recommendations and information for all buyers',
        'Review_3_Date': 'a month ago'
    },
    {
        'Seller_Name (as shown on 99acres)': 'MYSPACE REALTY PRIVATE LIMITED',
        'Google_Business_Name': 'MySpace Realty',
        'Google_Rating (e.g., 4.3/5)': '3.7',
        'Total_Review_Count': '66',
        'Review_1_Text': 'Worst company, don\'t trust them, very unethical',
        'Review_1_Date': '3 weeks ago',
        'Review_2_Text': 'I didn\'t recieve my full and final settlement it\'s been over 90 days and hr committed within 60 days the amount will be credited and now not responding my message If I didn\'t get my fnf you will get more 1star reviews.',
        'Review_2_Date': '3 weeks ago',
        'Review_3_Text': 'Mohan Pathak from their team verbally abuses clients.',
        'Review_3_Date': 'a month ago'
    },
    {
        'Seller_Name (as shown on 99acres)': 'Bricks to Home',
        'Google_Business_Name': 'Bricks To Home',
        'Google_Rating (e.g., 4.3/5)': '4.8 / 5',
        'Total_Review_Count': '33',
        'Review_1_Text': 'Good Service',
        'Review_1_Date': '3 months ago',
        'Review_2_Text': 'Outstanding work from Ruksar and Abdul, they are doing very good in showing up the properties and they treat me as an family member when coming to project.',
        'Review_2_Date': '3 years ago',
        'Review_3_Text': 'Best Channel Partner Company that makes sure to understand your requirement and suggest properties accordingly that matches with every requirement of yours like budget wise location wise everything',
        'Review_3_Date': '6 years ago'
    },
    {
        'Seller_Name (as shown on 99acres)': '100Yards',
        'Google_Business_Name': '100 Yards | Hundred Yards Realtor Pvt. Ltd.',
        'Google_Rating (e.g., 4.3/5)': '4.5',
        'Total_Review_Count': '31',
        'Review_1_Text': 'Unfulfilled Promises & Extremely Poor Ethics I had a very disappointing experience with 100 Yards while purchasing a flat in the Godrej MSR project. During the deal, the sales representatives Kesav and Ifshana clearly committed to a 1% cashback, which was a major factor in our decision.',
        'Review_1_Date': '1 Day ago',
        'Review_2_Text': 'We ( I and my colleague ) , bought a flat in Devanahalli, Bangalore through 100 yards channel partner. Agent name is Keshav. He helped us finalising the property and promised 1% return if we buy via his company (100 yards ) It\'s been 5 months now, he has not refunded us the promised Amount and 100 yards denied all the referral amounts.',
        'Review_2_Date': '2 months ago',
        'Review_3_Text': 'I was completely impressed with their professionalism and customer service.',
        'Review_3_Date': '2 months ago'
    },
    {
        'Seller_Name (as shown on 99acres)': 'Trustkey Realty Pvt Ltd',
        'Google_Business_Name': 'Trustkey Realty Pvt Ltd',
        'Google_Rating (e.g., 4.3/5)': '5',
        'Total_Review_Count': '14',
        'Review_1_Text': 'Anish has lot of contacts and he will suggest properties based on your budget',
        'Review_1_Date': '4 weeks ago',
        'Review_2_Text': 'A word of appreciation for Karthik to facilitate our investment. Best wishes.',
        'Review_2_Date': 'a month ago',
        'Review_3_Text': 'Excellent service from Trustkey Realty Pvt. Ltd.! I truly appreciate their honest advice and smooth coordination right from the first visit to final booking. A reliable team that lives up to its name — highly trustworthy and customer-centric. Would definitely recommend them to anyone looking for trusted real estate partners in Bangalore.',
        'Review_3_Date': 'a month ago'
    },
    {
        'Seller_Name (as shown on 99acres)': 'Skyvibe Realty Private Limited',
        'Google_Business_Name': 'Skyvibe Realty Private Limited',
        'Google_Rating (e.g., 4.3/5)': '4.2/5',
        'Total_Review_Count': '6',
        'Review_1_Text': 'Skyvibe is an very good property dealer company in Bangalore and they are providing a good properties to the customers with A grade builders and fullfillng there dream properties',
        'Review_1_Date': '11 months ago',
        'Review_2_Text': 'Skyvibe is an good property dealer company, Has tie up with major A grade builders across Bangalore',
        'Review_2_Date': '11 months ago',
        'Review_3_Text': 'As a customer of Skyvibe Realty, I had an outstanding experience from start to finish. The team was incredibly knowledgeable, responsive, and genuinely cared about finding the best real estate solution for me. They took the time to understand my needs and guided me through every step of the process. I felt well-informed and supported throughout. Their professionalism and commitment to providing excellent service truly set them apart.',
        'Review_3_Date': '11 months ago'
    },
    {
        'Seller_Name (as shown on 99acres)': 'ASSETTRUST SERVICES PRIVATE LIMITED',
        'Google_Business_Name': 'No Listing Found',
        'Google_Rating (e.g., 4.3/5)': '',
        'Total_Review_Count': '',
        'Review_1_Text': '',
        'Review_1_Date': '',
        'Review_2_Text': '',
        'Review_2_Date': '',
        'Review_3_Text': '',
        'Review_3_Date': ''
    }
];

// Calculate confidence score based on Google Rating and Review Count only
function calculateConfidenceScore(seller) {
    let score = 0;
    
    // Factor 1: Google Rating (0-60 points) - 60% weight
    const rating = seller['Google_Rating (e.g., 4.3/5)'] || '';
    const ratingNum = parseFloat(rating.replace(/[^0-9.]/g, ''));
    if (ratingNum && !isNaN(ratingNum)) {
        // Scale 0-5 rating to 0-60 points
        score += (ratingNum / 5) * 60;
    }
    
    // Factor 2: Review Count (0-40 points) - 40% weight
    const reviewCount = parseInt(seller['Total_Review_Count']) || 0;
    if (reviewCount > 0) {
        // Logarithmic scale: more reviews = more confidence, but with diminishing returns
        // Max at 1000+ reviews = 40 points
        if (reviewCount >= 1000) {
            score += 40;
        } else if (reviewCount >= 500) {
            score += 35;
        } else if (reviewCount >= 200) {
            score += 30;
        } else if (reviewCount >= 100) {
            score += 25;
        } else if (reviewCount >= 50) {
            score += 20;
        } else if (reviewCount >= 20) {
            score += 15;
        } else if (reviewCount >= 10) {
            score += 10;
        } else {
            score += 5;
        }
    }
    
    // Round to nearest integer
    return Math.round(Math.min(100, Math.max(0, score)));
}

// Get confidence level and color
function getConfidenceLevel(score) {
    if (score >= 80) {
        return { level: 'Excellent', color: '#28a745', bgColor: '#d4edda', icon: '✓' };
    } else if (score >= 60) {
        return { level: 'Good', color: '#17a2b8', bgColor: '#d1ecf1', icon: '✓' };
    } else if (score >= 40) {
        return { level: 'Fair', color: '#ffc107', bgColor: '#fff3cd', icon: '⚠' };
    } else {
        return { level: 'Low', color: '#dc3545', bgColor: '#f8d7da', icon: '⚠' };
    }
}

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
    const sellerInput = document.getElementById('sellerInput');
    const suggestionsDiv = document.getElementById('suggestions');
    const resultsDiv = document.getElementById('results');
    const sellerCard = document.getElementById('sellerCard');
    let selectedIndex = -1;

    // Get all seller names for autocomplete
    const sellerNames = sellersData.map(seller => seller['Seller_Name (as shown on 99acres)']).filter(name => name && name.trim());

    // Filter suggestions based on input - now using includes for partial matching
    function getSuggestions(query) {
        if (!query || query.trim() === '') return [];
        
        const lowerQuery = query.toLowerCase().trim();
        return sellerNames.filter(name => 
            name.toLowerCase().includes(lowerQuery)
        ).sort((a, b) => {
            // Prioritize names that start with the query
            const aStarts = a.toLowerCase().startsWith(lowerQuery);
            const bStarts = b.toLowerCase().startsWith(lowerQuery);
            if (aStarts && !bStarts) return -1;
            if (!aStarts && bStarts) return 1;
            return a.localeCompare(b);
        });
    }

    // Display suggestions
    function showSuggestions(query) {
        const suggestions = getSuggestions(query);
        suggestionsDiv.innerHTML = '';
        selectedIndex = -1;

        if (suggestions.length === 0) {
            suggestionsDiv.style.display = 'none';
            return;
        }

        suggestions.forEach((suggestion, index) => {
            const item = document.createElement('div');
            item.className = 'suggestion-item';
            item.textContent = suggestion;
            item.addEventListener('click', () => selectSeller(suggestion));
            suggestionsDiv.appendChild(item);
        });

        suggestionsDiv.style.display = 'block';
    }

    // Select a seller and display results
    function selectSeller(sellerName) {
        sellerInput.value = sellerName;
        suggestionsDiv.style.display = 'none';
        
        const seller = sellersData.find(s => 
            s['Seller_Name (as shown on 99acres)'] === sellerName
        );

        if (seller) {
            displayResults(seller);
        }
    }

    // Display seller results
    function displayResults(seller) {
        const rating = seller['Google_Rating (e.g., 4.3/5)'] || 'N/A';
        const reviewCount = seller['Total_Review_Count'] || '0';
        const businessName = seller['Google_Business_Name'] || 'N/A';
        
        // Calculate star rating
        const ratingNum = parseFloat(rating.replace(/[^0-9.]/g, ''));
        const stars = ratingNum ? '★'.repeat(Math.round(ratingNum)) : '';

        // Calculate confidence score
        const confidenceScore = calculateConfidenceScore(seller);
        const confidenceInfo = getConfidenceLevel(confidenceScore);

        let html = `
            <div class="seller-name">${seller['Seller_Name (as shown on 99acres)']}</div>
            <div class="google-business">Google Business: ${businessName}</div>
            <div class="confidence-score" style="background-color: ${confidenceInfo.bgColor}; border-left-color: ${confidenceInfo.color};">
                <div class="confidence-header">
                    <span class="confidence-icon" style="color: ${confidenceInfo.color};">${confidenceInfo.icon}</span>
                    <span class="confidence-label">Confidence Score</span>
                </div>
                <div class="confidence-value" style="color: ${confidenceInfo.color};">
                    ${confidenceScore}/100
                </div>
                <div class="confidence-level" style="color: ${confidenceInfo.color};">
                    ${confidenceInfo.level}
                </div>
            </div>
            <div class="rating-section">
                <div class="rating">
                    <span class="rating-value">${rating}</span>
                    <span class="stars">${stars}</span>
                </div>
                <div class="review-count">${reviewCount} reviews</div>
            </div>
            <div class="reviews-section">
                <div class="reviews-title">Most Recent 3 Reviews</div>
        `;

        // Display reviews
        const reviews = [
            { text: seller['Review_1_Text'], date: seller['Review_1_Date'] },
            { text: seller['Review_2_Text'], date: seller['Review_2_Date'] },
            { text: seller['Review_3_Text'], date: seller['Review_3_Date'] }
        ];

        if (reviews.some(r => r.text && r.text.trim())) {
            reviews.forEach(review => {
                if (review.text && review.text.trim()) {
                    html += `
                        <div class="review-item">
                            <div class="review-text">${review.text}</div>
                            <div class="review-date">${review.date || 'Date not available'}</div>
                        </div>
                    `;
                }
            });
        } else {
            html += `<div class="no-data">No reviews available</div>`;
        }

        html += `</div>`;
        sellerCard.innerHTML = html;
        resultsDiv.classList.add('show');
    }

    // Event listeners
    sellerInput.addEventListener('input', (e) => {
        const query = e.target.value;
        if (query && query.trim()) {
            showSuggestions(query);
        } else {
            suggestionsDiv.style.display = 'none';
            resultsDiv.classList.remove('show');
        }
    });

    sellerInput.addEventListener('keydown', (e) => {
        const items = suggestionsDiv.querySelectorAll('.suggestion-item');
        
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (items.length > 0) {
                selectedIndex = Math.min(selectedIndex + 1, items.length - 1);
                updateHighlight(items);
            }
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            selectedIndex = Math.max(selectedIndex - 1, -1);
            updateHighlight(items);
        } else if (e.key === 'Enter' && selectedIndex >= 0 && items[selectedIndex]) {
            e.preventDefault();
            items[selectedIndex].click();
        } else if (e.key === 'Escape') {
            suggestionsDiv.style.display = 'none';
        }
    });

    function updateHighlight(items) {
        items.forEach((item, index) => {
            if (index === selectedIndex) {
                item.classList.add('highlight');
                item.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
            } else {
                item.classList.remove('highlight');
            }
        });
    }

    // Close suggestions when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-box')) {
            suggestionsDiv.style.display = 'none';
        }
    });
});

