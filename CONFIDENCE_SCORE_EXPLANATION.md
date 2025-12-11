# Confidence Score Calculation Explanation

## Overview
The confidence score is calculated based on **two factors only**:
1. **Google Rating** (60% weight - 0 to 60 points)
2. **Review Count** (40% weight - 0 to 40 points)

**Total Score Range: 0 to 100 points**

---

## Factor 1: Google Rating (0-60 points)

The Google rating is converted from a 0-5 star scale to a 0-60 point scale.

**Formula:** `(Rating / 5) × 60`

### Examples:
- **5.0 stars** → (5.0 / 5) × 60 = **60 points**
- **4.9 stars** → (4.9 / 5) × 60 = **58.8 points** → **59 points** (rounded)
- **4.6 stars** → (4.6 / 5) × 60 = **55.2 points** → **55 points** (rounded)
- **4.5 stars** → (4.5 / 5) × 60 = **54 points**
- **4.2 stars** → (4.2 / 5) × 60 = **50.4 points** → **50 points** (rounded)
- **3.7 stars** → (3.7 / 5) × 60 = **44.4 points** → **44 points** (rounded)
- **3.3 stars** → (3.3 / 5) × 60 = **39.6 points** → **40 points** (rounded)
- **0 stars** (no rating) → **0 points**

---

## Factor 2: Review Count (0-40 points)

The review count uses a logarithmic scale with diminishing returns. More reviews increase confidence, but each additional review adds less value.

### Point Distribution:
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

---

## Real Examples from Your Data

### Example 1: Settlin Zero Brokerage
- **Google Rating:** 4.6 / 5
- **Review Count:** 927

**Calculation:**
- Rating Points: (4.6 / 5) × 60 = **55.2 points** → **55 points**
- Review Count Points: 927 reviews (≥500) = **35 points**
- **Total Score: 55 + 35 = 90 points** → **Excellent** (Green)

---

### Example 2: VALUEPERSQFT REALTY SERVICE PVT LTD
- **Google Rating:** 4.9 / 5
- **Review Count:** 620

**Calculation:**
- Rating Points: (4.9 / 5) × 60 = **58.8 points** → **59 points**
- Review Count Points: 620 reviews (≥500) = **35 points**
- **Total Score: 59 + 35 = 94 points** → **Excellent** (Green)

---

### Example 3: Pin Click Property Management Pvt Ltd
- **Google Rating:** 3.3 / 5
- **Review Count:** 455

**Calculation:**
- Rating Points: (3.3 / 5) × 60 = **39.6 points** → **40 points**
- Review Count Points: 455 reviews (≥200) = **30 points**
- **Total Score: 40 + 30 = 70 points** → **Good** (Blue)

---

### Example 4: G R Reality
- **Google Rating:** 4.6 / 5
- **Review Count:** 99

**Calculation:**
- Rating Points: (4.6 / 5) × 60 = **55.2 points** → **55 points**
- Review Count Points: 99 reviews (50-99 range) = **20 points**
- **Total Score: 55 + 20 = 75 points** → **Good** (Blue)

---

### Example 5: MYSPACE REALTY PRIVATE LIMITED
- **Google Rating:** 3.7 / 5
- **Review Count:** 66

**Calculation:**
- Rating Points: (3.7 / 5) × 60 = **44.4 points** → **44 points**
- Review Count Points: 66 reviews (50-99 range) = **20 points**
- **Total Score: 44 + 20 = 64 points** → **Good** (Blue)

---

### Example 6: Bricks to Home
- **Google Rating:** 4.8 / 5
- **Review Count:** 33

**Calculation:**
- Rating Points: (4.8 / 5) × 60 = **57.6 points** → **58 points**
- Review Count Points: 33 reviews (20-49 range) = **15 points**
- **Total Score: 58 + 15 = 73 points** → **Good** (Blue)

---

### Example 7: 100Yards
- **Google Rating:** 4.5 / 5
- **Review Count:** 31

**Calculation:**
- Rating Points: (4.5 / 5) × 60 = **54 points**
- Review Count Points: 31 reviews (20-49 range) = **15 points**
- **Total Score: 54 + 15 = 69 points** → **Good** (Blue)

---

### Example 8: Trustkey Realty Pvt Ltd
- **Google Rating:** 5.0 / 5
- **Review Count:** 14

**Calculation:**
- Rating Points: (5.0 / 5) × 60 = **60 points**
- Review Count Points: 14 reviews (10-19 range) = **10 points**
- **Total Score: 60 + 10 = 70 points** → **Good** (Blue)

---

### Example 9: Skyvibe Realty Private Limited
- **Google Rating:** 4.2 / 5
- **Review Count:** 6

**Calculation:**
- Rating Points: (4.2 / 5) × 60 = **50.4 points** → **50 points**
- Review Count Points: 6 reviews (1-9 range) = **5 points**
- **Total Score: 50 + 5 = 55 points** → **Fair** (Yellow)

---

### Example 10: ASSETTRUST SERVICES PRIVATE LIMITED
- **Google Rating:** No rating (empty)
- **Review Count:** 0

**Calculation:**
- Rating Points: 0 points (no rating)
- Review Count Points: 0 points (no reviews)
- **Total Score: 0 + 0 = 0 points** → **Low** (Red)

---

## Confidence Level Categories

The final score determines the confidence level:

| Score Range | Level      | Color | Icon | Meaning                          |
|-------------|------------|-------|------|----------------------------------|
| 80-100      | Excellent  | Green | ✓    | High confidence - Very reliable  |
| 60-79       | Good       | Blue  | ✓    | Moderate confidence - Reliable    |
| 40-59       | Fair       | Yellow| ⚠    | Moderate confidence - Use caution |
| 0-39        | Low        | Red   | ⚠    | Low confidence - High risk        |

---

## Key Insights

1. **Rating has more weight (60%)** than review count (40%), so a high rating can compensate for fewer reviews.

2. **Review count uses diminishing returns** - going from 10 to 20 reviews adds 5 points, but going from 500 to 1000 reviews only adds 5 points. This prevents sellers with thousands of reviews from dominating the score.

3. **Both factors matter** - A seller with 5.0 stars but only 5 reviews gets 60 + 5 = 65 points (Good), while a seller with 4.6 stars and 927 reviews gets 55 + 35 = 90 points (Excellent).

4. **No data = 0 score** - Sellers without ratings or reviews receive 0 points, indicating no confidence in their reliability.

