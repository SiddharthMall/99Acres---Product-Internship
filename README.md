# 99Acres Seller Search Prototype

A web-based prototype application for searching and viewing seller information from 99Acres, including Google ratings, review counts, and recent reviews. The application features an intelligent confidence scoring system to help users assess seller reliability.

## Demo Link - [Link](ht)

## 🚀 Features

- **Smart Search**: Real-time autocomplete suggestions as you type seller names
- **Alphabet-based Search**: Suggestions appear based on alphabetical matching
- **Seller Information Display**: 
  - Seller name and Google Business name
  - Google rating with visual star representation
  - Total review count
  - Most recent 3 reviews with dates
- **Confidence Score System**: Automated scoring (0-100) based on rating and review data
- **Responsive Design**: Works seamlessly on desktop and mobile devices


## 📁 File Structure

```
99Acres/
├── index.html          # Main HTML file
├── style.css           # Stylesheet for all styling
├── index.js            # JavaScript logic and data
└── README.md           # This file
```

## 🛠️ Technologies Used

- **HTML5**: Structure and markup
- **CSS3**: Styling, animations, and responsive design
- **JavaScript (Vanilla)**: Logic, data handling, and DOM manipulation


### Usage

1. **Search for a Seller**: Type a seller name in the search box
2. **View Suggestions**: As you type, matching seller names will appear in a dropdown
3. **Select a Seller**: Click on a suggestion or use arrow keys + Enter to select
4. **View Results**: The seller's information, rating, reviews, and confidence score will be displayed

## 📊 Confidence Score Calculation

The confidence score is calculated based on **two factors** that determine seller reliability:

### Formula

**Total Score = Rating Points + Review Count Points (0-100 points)**

### Factor 1: Google Rating (0-60 points, 60% weight)

The Google rating is converted from a 0-5 star scale to a 0-60 point scale.

**Formula:** `(Rating / 5) × 60`

**Examples:**
- 5.0 stars → (5.0 / 5) × 60 = **60 points**
- 4.6 stars → (4.6 / 5) × 60 = **55.2 points** → **55 points** (rounded)
- 4.0 stars → (4.0 / 5) × 60 = **48 points**
- 3.5 stars → (3.5 / 5) × 60 = **42 points**

### Factor 2: Review Count (0-40 points, 40% weight)

The review count uses a logarithmic scale with diminishing returns to prevent sellers with thousands of reviews from dominating the score.

| Review Count Range | Points Awarded |
|-------------------|----------------|
| 1000+ reviews     | 40 points      |
| 500-999 reviews   | 35 points      |
| 200-499 reviews   | 30 points      |
| 100-199 reviews   | 25 points      |
| 50-99 reviews     | 20 points      |
| 20-49 reviews     | 15 points      |
| 10-19 reviews     | 10 points      |
| 1-9 reviews       | 5 points       |
| 0 reviews         | 0 points       |

### Example Calculation

**Settlin Zero Brokerage:**
- **Google Rating:** 4.6 / 5
- **Review Count:** 927

**Calculation:**
1. Rating Points: (4.6 / 5) × 60 = 55.2 → **55 points**
2. Review Count Points: 927 reviews (falls in 500-999 range) = **35 points**
3. **Total Score: 55 + 35 = 90 points**

**Result:** 90 points → **Excellent** confidence level (Green indicator)

### Confidence Level Categories

| Score Range | Level      | Color | Icon | Meaning                          |
|-------------|------------|-------|------|----------------------------------|
| 80-100      | Excellent  | Green | ✓    | High confidence - Very reliable  |
| 60-79       | Good       | Blue  | ✓    | Moderate confidence - Reliable  |
| 40-59       | Fair       | Yellow| ⚠    | Moderate confidence - Use caution|
| 0-39        | Low        | Red   | ⚠    | Low confidence - High risk       |


## 📝 Data Source

The application uses seller data from a CSV file containing:
- Seller names (as shown on 99Acres)
- Google Business names
- Google ratings
- Total review counts
- Most recent 3 reviews with dates

## 🔧 Customization

### Adding New Sellers

Edit the `sellersData` array in `index.js` to add new seller entries:

```javascript
{
    'Seller_Name (as shown on 99acres)': 'Your Seller Name',
    'Google_Business_Name': 'Business Name',
    'Google_Rating (e.g., 4.3/5)': '4.5',
    'Total_Review_Count': '100',
    'Review_1_Text': 'Review text...',
    'Review_1_Date': '2 days ago',
    // ... more fields
}
```

### Modifying Confidence Score Logic

Edit the `calculateConfidenceScore()` function in `index.js` to adjust:
- Point weights for rating vs. review count
- Review count thresholds
- Scoring formula
