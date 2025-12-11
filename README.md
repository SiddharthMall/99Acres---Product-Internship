# 99Acres Seller Search Prototype

A lightweight, web-based tool designed to bridge the trust gap in real estate transactions. This prototype enables users to instantly verify 99Acres sellers by cross-referencing their profiles with Google Business data, providing a holistic view of seller reputation.

## Demo Link - [Live Prototype](https://siddharthmall.github.io/99Acres---Product-Internship/)

## 🚀 Key Features

- **Smart Search**: Real-time autocomplete - The search bar anticipates user intent, providing immediate suggestions as you type.
- **Alphabetical Sorting:**: Suggestions are logically organized via alphabetical matching to ensure quick discovery of specific sellers.
- **Seller Information Display**: 
  - Seller name and Google Business name
  - Google rating with visual star representation
  - Total review count
  - Most recent 3 reviews with dates
- **Confidence Score System**: Automated scoring (0-100) based on rating and review data

## 🛠️ Technologies Used

- **HTML5**: Structure and markup
- **CSS3**: Custom styling, smooth animations, and responsive layouts.
- **JavaScript**: Logic, data handling, and DOM manipulation

### Usage Guide

1. **Search for a Seller**: Begin typing a seller's name in the main search bar.
2. **View Suggestions**: As you type, matching seller names will appear in a dropdown
3. **Select**: Choose the correct seller from the smart dropdown list using your mouse or keyboard
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

