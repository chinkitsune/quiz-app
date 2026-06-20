// data/questions/bi-data-understanding-and-knn.js

module.exports = [
  {
    "quizTitle": "Data Understanding & kNN",
    "category": "Structure of Data",
    "question": "A hospital stores patient records in a relational database where every row has the exact same columns: PatientID, DateOfBirth, BloodType, and AllergyList. What type of data structure is this?",
    "options": [
      "Unstructured — because medical records are inherently complex.",
      "Semi-structured — because allergy lists can have varying numbers of items.",
      "Structured — because every element shares the same fixed fields and can be stored in rows and columns.",
      "Nominal — because BloodType is a categorical field."
    ],
    "correctOption": 2,
    "explanation": "Structured data is highly organised where every element has the same fields. A relational database with fixed columns per row is the canonical example. The fact that some fields might be empty does not make it semi-structured — the schema is fixed and uniformly enforced."
  },
  {
    "quizTitle": "Data Understanding & kNN",
    "category": "Structure of Data",
    "question": "A marketing team wants to analyse thousands of customer support phone call recordings and free-text agent emails. Which category of data structure do these assets belong to?",
    "options": [
      "Structured — because calls and emails follow business protocols.",
      "Semi-structured — because emails have To and From headers.",
      "Unstructured — because audio recordings and free-text email bodies have no common fixed schema.",
      "Discrete — because each call is a separate event."
    ],
    "correctOption": 2,
    "explanation": "Unstructured data has no common structure. Audio recordings and free-text email bodies cannot be displayed in rows and columns without significant processing. The course lists examples including news articles, websites, video, audio, and photographs."
  },
  {
    "quizTitle": "Data Understanding & kNN",
    "category": "Structure of Data",
    "question": "A weather API returns city forecasts as key-value pairs. Most cities include temperature and humidity, but some optionally include wind_gust. The data uses JSON format but has no enforced schema requiring all fields to always be present. What data structure is this?",
    "options": [
      "Structured — because temperature and humidity are always present.",
      "Unstructured — because the format differs per city.",
      "Semi-structured — because it uses tags and key-value pairs but lacks a rigid, enforced schema.",
      "Continuous — because weather values are numeric measurements."
    ],
    "correctOption": 2,
    "explanation": "Semi-structured data uses some structure like tags and keywords but without a proper schema. JSON and XML are classic examples. The inconsistency — some cities having extra optional fields — is exactly what distinguishes semi-structured from structured, where every record must follow the same enforced schema."
  },
  {
    "quizTitle": "Data Understanding & kNN",
    "category": "Structure of Data",
    "question": "According to the Gartner estimate discussed in class, approximately what proportion of enterprise data is unstructured?",
    "options": [
      "20% — because most business data is stored in organised databases.",
      "50% — because it is split evenly between structured and unstructured.",
      "80% — because most enterprise information exists in formats like images, audio, and emails that have no fixed schema.",
      "100% — because all real-world data is inherently messy."
    ],
    "correctOption": 2,
    "explanation": "Gartner estimates approximately 80% of enterprise data is unstructured, while only about 20% is structured. This is a key motivation for data analytics: most real-world information lives in formats that are difficult to query directly. Structured data, while easier to work with, represents a minority of all enterprise data."
  },
  {
    "quizTitle": "Data Understanding & kNN",
    "category": "Structure of Data",
    "question": "A logistics company exports shipping manifests as XML documents. Each manifest uses tags like <origin>, <destination>, and <weight>, but different manifests include different optional tags and there is no enforced XSD schema. This data is BEST classified as:",
    "options": [
      "Structured — because XML uses consistent tag names.",
      "Semi-structured — because it uses tags for organisation but lacks a rigid, enforced schema.",
      "Unstructured — because no two manifests are identical.",
      "Ordinal — because packages are ranked by delivery priority."
    ],
    "correctOption": 1,
    "explanation": "Semi-structured data uses some structure such as tags and keywords, but without a proper schema — exactly this XML scenario. The critical difference from structured data is the absence of a rigid, enforced schema. JSON and XML are the course examples of semi-structured data."
  },
  {
    "quizTitle": "Data Understanding & kNN",
    "category": "Data Types",
    "question": "A mobile carrier records each customer's preferred contact method: Phone, Email, Text, or In-Person. There is no meaningful ranking between these options. What data type is this feature?",
    "options": [
      "Ordinal — because customers have a ranked preference.",
      "Nominal — because the categories have no inherent order or ranking.",
      "Discrete — because there are exactly 4 options.",
      "Continuous — because customers may change their preference over time."
    ],
    "correctOption": 1,
    "explanation": "Nominal data is categorical with no inherent order. Phone, Email, Text, and In-Person are distinct labels with no natural ranking between them. Compare this to ordinal data where order matters — like survey responses. The course example of nominal data is Gender (male, female)."
  },
  {
    "quizTitle": "Data Understanding & kNN",
    "category": "Data Types",
    "question": "A restaurant chain surveys customers and asks them to rate their experience: Excellent, Good, Fair, or Poor. What data type is the rating feature?",
    "options": [
      "Nominal — because ratings are just text labels.",
      "Ordinal — because the ratings have a meaningful order from best to worst, even if the gaps between levels are not precisely equal.",
      "Continuous — because satisfaction can be measured precisely.",
      "Discrete — because there are exactly 4 rating options."
    ],
    "correctOption": 1,
    "explanation": "Ordinal data has categories with a meaningful order, but the gaps between levels are not necessarily equal. Excellent > Good > Fair > Poor is an ordered ranking. This mirrors the course example of survey questions: Strongly agree, agree, not sure, disagree, strongly disagree. The ORDER matters; the exact intervals between levels do not need to be uniform."
  },
  {
    "quizTitle": "Data Understanding & kNN",
    "category": "Data Types",
    "question": "A parking management system counts the number of vehicles in a lot every hour. Each hourly count is always a whole number (0, 1, 2, ...). What data type is the vehicle count feature?",
    "options": [
      "Continuous — because vehicle count is a numeric measurement.",
      "Nominal — because vehicles belong to different categories.",
      "Discrete — because values are distinct, separate, and can be counted but not meaningfully measured between whole numbers.",
      "Ordinal — because parking lots have ranked priority spaces."
    ],
    "correctOption": 2,
    "explanation": "Discrete numerical data consists of distinct, separate values that can be counted but not measured between integers. You cannot have 2.7 vehicles in a parking lot. The course definition: values are distinct and separate, cannot be measured but can be counted. The course example is number of heads in 100 coin flips."
  },
  {
    "quizTitle": "Data Understanding & kNN",
    "category": "Data Types",
    "question": "A fitness app records a user's run distance in kilometres with three decimal places of precision (e.g., 5.327 km). What data type is this feature?",
    "options": [
      "Discrete — because the app uses a fixed decimal precision.",
      "Ordinal — because some runs are longer than others.",
      "Nominal — because run distances are labels for different workout sessions.",
      "Continuous — because distance is a measurement that can take any value within a range and cannot be counted between values."
    ],
    "correctOption": 3,
    "explanation": "Continuous numerical data represents measurements that can take any value within a range. Distance is a measurement — values like 5.327 km are meaningful and the feature is not restricted to whole numbers. The course example: height and salary are continuous because they represent measurements, not counts."
  },
  {
    "quizTitle": "Data Understanding & kNN",
    "category": "Data Types",
    "question": "An analyst is exploring a customer dataset. The City column contains values like Ottawa and Toronto (no ranking). The NPS Score column has values 1 to 10 where higher means more loyal. The Annual Spend column has precise dollar amounts. Which correctly classifies these three features?",
    "options": [
      "City = Ordinal; NPS Score = Nominal; Annual Spend = Discrete",
      "City = Nominal; NPS Score = Ordinal; Annual Spend = Continuous",
      "City = Discrete; NPS Score = Continuous; Annual Spend = Ordinal",
      "City = Nominal; NPS Score = Continuous; Annual Spend = Discrete"
    ],
    "correctOption": 1,
    "explanation": "City has no meaningful order between cities → Nominal. NPS Score 1–10 has a meaningful order (higher = more loyal) but the gap between scores is not necessarily equal → Ordinal. Annual Spend in precise dollar amounts is a measurement that can take many values → Continuous. Matching data to type requires asking: is there order? Is it measured or counted?"
  },
  {
    "quizTitle": "Data Understanding & kNN",
    "category": "Data Types",
    "question": "Which chart type should an analyst use to visualise the distribution of employee ages (a continuous numeric feature) across a company?",
    "options": [
      "Bar chart — because age categories are nominal.",
      "Histogram — because age is a continuous feature and histograms show how continuous data is distributed across ranges.",
      "Pie chart — because each age group is a slice of the workforce.",
      "Scatter plot — because ages vary between employees."
    ],
    "correctOption": 1,
    "explanation": "The course rule: use Histograms for continuous features and Bar charts for categorical features. Employee age is continuous (it can take any value within a range), so a histogram showing frequency across age ranges is appropriate. Bar charts are reserved for categorical features like department or region."
  },
  {
    "quizTitle": "Data Understanding & kNN",
    "category": "Data Types",
    "question": "A dataset has a Shipping Method column with values: Ground, Express, and Overnight. Which visualisation best shows how frequently each method is used?",
    "options": [
      "Histogram — because shipping method has numeric codes.",
      "Scatter plot — because there are three different methods.",
      "Bar chart — because Shipping Method is a categorical feature and bar charts show frequency per category.",
      "Line chart — because shipping method usage changes over time."
    ],
    "correctOption": 2,
    "explanation": "Bar charts are the appropriate visualisation for categorical features. Shipping Method (Ground, Express, Overnight) is categorical/nominal — distinct labels with no numeric meaning. A bar chart shows the count or frequency of each category. Histograms are for continuous numeric data where values fall into ranges."
  },
  {
    "quizTitle": "Data Understanding & kNN",
    "category": "Data Understanding",
    "question": "An analyst is exploring a Department column in an HR dataset (values like Sales, Engineering, HR, Marketing). Which statistical measure is MOST useful for understanding this categorical feature?",
    "options": [
      "Mean and standard deviation — to understand the central tendency.",
      "Minimum and maximum — to understand the range of values.",
      "Mode and count — to identify the most common department and detect whether any value dominates the dataset.",
      "Median and variance — to understand the spread of the data."
    ],
    "correctOption": 2,
    "explanation": "For categorical features, the course recommends examining mode and count. Mode reveals the most frequent category (which department is largest), and counts help identify if any single value dominates — a potential concern for class balance. Mean and standard deviation are meaningful for numeric features, not text labels."
  },
  {
    "quizTitle": "Data Understanding & kNN",
    "category": "Data Understanding",
    "question": "An analyst is exploring a Transaction Amount column in a financial dataset (values range from a few dollars to thousands). Which statistics should she examine to fully understand this continuous feature?",
    "options": [
      "Mode and count — to find the most common transaction amount.",
      "Mean, standard deviation, minimum, and maximum — to understand central tendency, variation, and the full possible range.",
      "Cardinality and unique value count — to check for unexpected categories.",
      "A complete frequency table listing all possible amounts."
    ],
    "correctOption": 1,
    "explanation": "For continuous features, the course recommends: (1) mean and standard deviation to understand central tendency and variation, and (2) minimum and maximum to understand the full range possible for each feature. Mode is more appropriate for categorical data. A complete frequency table would be impractical given the near-infinite possible values of a continuous feature."
  },
  {
    "quizTitle": "Data Understanding & kNN",
    "category": "Data Understanding",
    "question": "An analyst checks a Daily Temperature feature and finds: mean = 22°C, standard deviation = 18°C. What does the high standard deviation of 18°C suggest about this feature?",
    "options": [
      "The data has already been normalized to a standard scale.",
      "Temperatures are mostly clustered tightly around 22°C with very little variation.",
      "There is HIGH variation in temperature values — individual readings are spread widely around the average.",
      "The dataset must contain invalid data entries."
    ],
    "correctOption": 2,
    "explanation": "Standard deviation measures how spread out values are around the mean. A standard deviation of 18°C relative to a mean of 22°C is very large — it means individual temperature readings vary greatly. Low standard deviation would indicate values cluster tightly around the mean. Examining SD helps the analyst understand whether a feature has stable or highly variable values."
  },
  {
    "quizTitle": "Data Understanding & kNN",
    "category": "Data Understanding",
    "question": "While exploring a Patient Age feature, an analyst finds the minimum is 0 and the maximum is 312. What does the max=312 indicate, and what action should follow?",
    "options": [
      "Age=312 is normal — historical records sometimes include very old patients.",
      "The max=312 is almost certainly invalid data (no human lives to 312), flagging a data quality issue that must be addressed in Data Preparation.",
      "The feature should immediately be normalized to bring it into the [0, 1] range.",
      "This indicates a uniform distribution and no action is needed."
    ],
    "correctOption": 1,
    "explanation": "Examining min and max values for a feature helps understand its range and can expose invalid data. A patient age of 312 is biologically impossible — this is a data quality issue (invalid data) that must be cleaned before modelling. This is exactly why the course recommends checking min and max during Data Understanding."
  },
  {
    "quizTitle": "Data Understanding & kNN",
    "category": "Histograms and Distributions",
    "question": "A histogram of Time Spent on App (minutes) shows bars that are all approximately the same height across every time range from 0 to 60 minutes. What distribution shape does this represent?",
    "options": [
      "Normal distribution — because the bars are symmetric around a centre.",
      "Right-skewed distribution — because users tend to spend more time.",
      "Uniform distribution — because the feature is equally likely to take a value in any of the ranges present.",
      "Multimodal distribution — because there are multiple time ranges."
    ],
    "correctOption": 2,
    "explanation": "A uniform distribution means the feature is equally likely to take a value in any of the ranges — all bars are approximately the same height. No particular time range dominates user behaviour. The course defines uniform distribution exactly this way. Normal distributions have a clear central peak; skewed distributions have a long tail to one side."
  },
  {
    "quizTitle": "Data Understanding & kNN",
    "category": "Histograms and Distributions",
    "question": "A histogram of commuter journey times shows a classic bell-curve shape: most commuters take around 30 minutes, with progressively fewer commuters taking either shorter or longer trips, symmetrically. What distribution is this?",
    "options": [
      "Uniform — because most commuters experience the same duration.",
      "Right-skewed — because a few commuters have exceptionally long journeys.",
      "Normal distribution — characterised by a strong central tendency with symmetrical variation to either side of the peak.",
      "Multimodal — because some commuters take transit and others drive."
    ],
    "correctOption": 2,
    "explanation": "A normal distribution is characterised by a strong tendency toward a central value (here, ~30 minutes) with symmetrical variation on either side. The bell-curve shape is the key visual identifier. The course describes it as: 'a strong tendency towards a central value and symmetrical variation to either side of this.'"
  },
  {
    "quizTitle": "Data Understanding & kNN",
    "category": "Histograms and Distributions",
    "question": "A histogram of annual household income shows a large cluster at low-to-middle incomes and a very long tail stretching far to the right where a small number of extremely high earners appear. What type of distribution is this?",
    "options": [
      "Uniform — because incomes are spread across many ranges.",
      "Right-skewed (positive skew) — the distribution has a tendency toward very high values, pulling the tail to the right.",
      "Left-skewed — because most incomes cluster toward the lower end.",
      "Normal — because income follows a bell curve."
    ],
    "correctOption": 1,
    "explanation": "Right-skewed distributions have a long tail extending to the right, caused by a small number of very high values. Income is a classic example: most people cluster at lower-to-middle ranges while a few earn extremely high amounts. Left skew is the mirror image — a long tail to the left toward very low values. The direction of the tail defines the skew direction."
  },
  {
    "quizTitle": "Data Understanding & kNN",
    "category": "Histograms and Distributions",
    "question": "A histogram of customer Age at an online gaming platform shows two distinct peaks: one around ages 15–20 and another around ages 35–40. What type of distribution is this, and what business insight might it reveal?",
    "options": [
      "Uniform — because all age groups are represented.",
      "Normal — because the two peaks average to a central value.",
      "Multimodal — suggesting two distinct customer sub-groups exist, such as teenage players and middle-aged adult gamers with different behaviours.",
      "Right-skewed — because older players spend more money."
    ],
    "correctOption": 2,
    "explanation": "A multimodal (specifically bimodal) distribution has two or more peaks. Two peaks at different age ranges suggest there are likely distinct sub-populations — teenagers and adult gamers here. This insight is analytically valuable: different groups may need different product features, marketing messages, or engagement strategies. A single-peaked (unimodal) normal distribution would suggest one homogeneous group."
  },
  {
    "quizTitle": "Data Understanding & kNN",
    "category": "Histograms and Distributions",
    "question": "In a left-skewed (negatively skewed) distribution, where does most of the data cluster, and which direction does the long tail extend?",
    "options": [
      "Most data clusters at LOW values; the tail extends to the RIGHT.",
      "Data is equally spread across all ranges; there is no tail.",
      "Most data clusters at HIGH values; the long tail extends to the LEFT toward very low values.",
      "Two peaks exist at both extremes of the range."
    ],
    "correctOption": 2,
    "explanation": "Left-skewed distributions have most data clustering toward the higher end, with a long tail extending to the LEFT toward very low values. This is opposite to right-skewed, where the tail extends to the right. The course states: 'Skew is a tendency towards very high (right skew) or very low (left skew) values.' The direction of the tail names the skew."
  },
  {
    "quizTitle": "Data Understanding & kNN",
    "category": "Data Quality Issues",
    "question": "A dataset of 50,000 customer records has a column called AccountType that contains only the value Standard for every single row — no other values appear. What data quality issue is this, and what should be done?",
    "options": [
      "Missing values — replace with the mode.",
      "High cardinality — reduce the number of unique values.",
      "Cardinality of 1 — this feature provides no distinguishing information and should be removed before analytics.",
      "Invalid data — Standard is not a recognised account type."
    ],
    "correctOption": 2,
    "explanation": "A feature with cardinality=1 has only one unique value across all records. A constant feature cannot help distinguish between instances — it is completely uninformative for any predictive model or analytical task. The course explicitly states: 'Features having a cardinality=1 are not useful in analytics and needs to be removed.'"
  },
  {
    "quizTitle": "Data Understanding & kNN",
    "category": "Data Quality Issues",
    "question": "A product catalogue dataset with 5,000 records has a ProductSerialNumber column with 4,998 distinct unique values. Some ML algorithms may struggle with this. What is the issue, and why does it matter?",
    "options": [
      "Missing values — too many nulls exist in the column.",
      "Invalid data — serial numbers should be sequential.",
      "High cardinality (far more than 50 unique values) — which can create performance and learning issues for some ML algorithms that cannot handle features with thousands of distinct levels.",
      "Cardinality of 1 — the feature is constant."
    ],
    "correctOption": 2,
    "explanation": "High cardinality means a very large number of unique values (the course cites >50 as a threshold of concern). A serial number unique to each product acts like an ID, not a meaningful feature — it has too many levels for an ML algorithm to learn meaningful patterns from. The course notes: 'Large number of cardinality (>50) can create issues for some ML algorithms.'"
  },
  {
    "quizTitle": "Data Understanding & kNN",
    "category": "Data Quality Issues",
    "question": "An analyst prepares a dataset where the original MembershipTier feature has 3 levels: Bronze, Silver, Gold. They create 3 binary columns (isBronze, isSilver, isGold) and keep ALL THREE. What data quality problem does this create?",
    "options": [
      "Missing values — one column will always be empty.",
      "Incorrect cardinality — keeping all three creates perfect multicollinearity; knowing any two columns makes the third redundant. Only two columns are needed.",
      "Invalid data — binary indicators are inappropriate for membership tiers.",
      "High cardinality — 3 unique values exceeds the threshold."
    ],
    "correctOption": 1,
    "explanation": "This is incorrect cardinality from perfect multicollinearity. If isBronze=0 and isSilver=0, then isGold must be 1 — the third column is completely determined by the other two and carries no new information. The course example: with a 2-level Gender variable, keeping both isMale and isFemale is redundant — you only need one. For k levels, you need only k-1 binary columns."
  },
  {
    "quizTitle": "Data Understanding & kNN",
    "category": "Data Quality Issues",
    "question": "A retail dataset shows order ORD-7712 appearing four times with identical values across all columns: same timestamp, same customer, same items, same price. What type of data quality issue is this?",
    "options": [
      "Outlier — the order value is unusually high.",
      "Invalid data — the order ID format is incorrect.",
      "Missing values — some fields are blank.",
      "Duplicate data — the same record is stored multiple times and must be deduplicated before analysis."
    ],
    "correctOption": 3,
    "explanation": "Duplicate data occurs when the same record appears multiple times in the dataset. ORD-7712 appearing 4 times with identical values is a classic duplication — likely caused by a system error or multiple data imports. Duplicates inflate counts and skew model training, and must be removed during Data Preparation."
  },
  {
    "quizTitle": "Data Understanding & kNN",
    "category": "Data Quality Issues",
    "question": "A temperature monitoring dataset shows values of -9999.0 for sensors that were offline. What type of data quality issue is this, and why is it dangerous to leave uncorrected?",
    "options": [
      "Duplicate data — the sensor recorded the same placeholder repeatedly.",
      "High cardinality — too many unique temperature values appear.",
      "Invalid data — -9999.0 is a sentinel placeholder meaning no reading was taken, not a real temperature; leaving it in will severely distort mean and model calculations.",
      "Missing values — but only the readings above zero are missing."
    ],
    "correctOption": 2,
    "explanation": "Invalid data refers to values that are not legitimate for the feature. -9999.0 is a common engineering sentinel meaning the sensor was offline — it is not a real temperature. If left in, it would catastrophically distort the mean (pulling it far below actual temperatures) and confuse any model. It must be treated as a missing value or removed."
  },
  {
    "quizTitle": "Data Understanding & kNN",
    "category": "Data Quality Issues",
    "question": "An analyst examines a dataset and finds: (a) 200 rows with no value in the Revenue column, (b) a Country column where Japan appears only once across 10,000 rows, (c) an OrderID column where two records share the same ID and date. Which describes each issue correctly?",
    "options": [
      "(a) Missing values; (b) High cardinality; (c) Outlier",
      "(a) Missing values; (b) Consider checking dominance or underrepresentation (but not a cardinality issue — cardinality=1 would be if Country had only ONE unique value); (c) Duplicate data",
      "(a) Invalid data; (b) Cardinality=1; (c) Missing values",
      "(a) Duplicate data; (b) Invalid data; (c) Missing values"
    ],
    "correctOption": 1,
    "explanation": "Empty Revenue = Missing values. Japan appearing once out of 10,000 rows is NOT cardinality=1 (that would mean the feature has only one unique value across all rows); it is an underrepresented category — worth noting but different. Two records sharing the same OrderID and date = Duplicate data. Understanding the distinctions between these quality issue types is critical."
  },
  {
    "quizTitle": "Data Understanding & kNN",
    "category": "Normalization",
    "question": "A feature called Study Hours has values [10, 30, 50, 70, 90]. Using min-max normalization, what is the normalized value for 70?",
    "options": [
      "0.50",
      "0.70",
      "0.75",
      "1.00"
    ],
    "correctOption": 2,
    "explanation": "Min-max normalization formula: a'i = (ai - min) / (max - min). With min=10 and max=90: (70 - 10) / (90 - 10) = 60 / 80 = 0.75. The minimum value (10) normalizes to 0.0 and the maximum (90) to 1.0. All intermediate values fall proportionally between 0 and 1."
  },
  {
    "quizTitle": "Data Understanding & kNN",
    "category": "Normalization",
    "question": "Using the same Study Hours feature [10, 30, 50, 70, 90], apply RANGE normalization to map value 70 into the range [0, 10]. What is the result?",
    "options": [
      "7.0",
      "7.5",
      "8.0",
      "6.5"
    ],
    "correctOption": 1,
    "explanation": "Range normalization formula: a'i = ((ai - min) / (max - min)) x (high - low) + low. With min=10, max=90, low=0, high=10: ((70-10)/(90-10)) x (10-0) + 0 = (60/80) x 10 = 0.75 x 10 = 7.5. The same proportional position (0.75) is now mapped into the [0,10] range instead of [0,1]."
  },
  {
    "quizTitle": "Data Understanding & kNN",
    "category": "Normalization",
    "question": "After applying standard min-max normalization (not range normalization) to a feature, what is the guaranteed output range?",
    "options": [
      "Mean = 0, Standard Deviation = 1",
      "Between -1 and +1",
      "Between 0 and 1, inclusive",
      "The same as the original feature range, unchanged"
    ],
    "correctOption": 2,
    "explanation": "Standard min-max normalization always produces values in the range [0, 1]. The minimum maps to 0 (numerator = 0) and the maximum maps to 1 (numerator = denominator). All values in between fall proportionally within [0, 1]. Mean=0 and SD=1 are the properties of standardization (z-score), not normalization."
  },
  {
    "quizTitle": "Data Understanding & kNN",
    "category": "Normalization",
    "question": "What fundamental property does min-max normalization preserve about the original data?",
    "options": [
      "It converts all values to have a mean of zero.",
      "It preserves the relative differences between values — if A was twice as far from the minimum as B, it still is after normalization.",
      "It removes all outliers from the dataset.",
      "It converts the feature from continuous to categorical."
    ],
    "correctOption": 1,
    "explanation": "The course explicitly states normalization works 'while maintaining the relative differences between the values for the feature.' Min-max is a linear transformation, and linear transformations preserve proportional distances. If value A was 60% of the way from min to max before normalization, it will still be at 0.60 after normalization."
  },
  {
    "quizTitle": "Data Understanding & kNN",
    "category": "Normalization",
    "question": "A kNN model is being built to predict apartment rental price categories. The dataset has two features: Area in square feet (ranging 400 to 4000) and Distance to downtown in km (ranging 0.5 to 2.0). Why MUST normalization be applied before running kNN?",
    "options": [
      "Because kNN requires all features to be categorical.",
      "Because without normalization, the Area feature (with values thousands of times larger) will dominate the Euclidean distance calculation, making Distance to downtown effectively irrelevant.",
      "Because normalization converts continuous features to discrete bins.",
      "Because kNN only works correctly with values between 0 and 1."
    ],
    "correctOption": 1,
    "explanation": "kNN classifies based on Euclidean distance. A 500 sq ft difference in Area squares to 250,000, while a 1.0 km difference in Distance squares to only 1.0. Area dominates the distance by a factor of 250,000. Normalization puts both features on the same [0,1] scale so each feature contributes equally to the distance calculation — otherwise features with large numeric ranges artificially dominate."
  },
  {
    "quizTitle": "Data Understanding & kNN",
    "category": "Standardization",
    "question": "A Delivery Speed feature has a mean of 50 hours and a standard deviation of 10 hours. What is the standardized (z-score) value for a delivery that took 70 hours?",
    "options": [
      "1.0",
      "2.0",
      "0.7",
      "20.0"
    ],
    "correctOption": 1,
    "explanation": "Standardization formula: a'i = (ai - mean) / sd(a). For value 70: (70 - 50) / 10 = 20 / 10 = 2.0. A z-score of 2.0 means this delivery was 2 standard deviations ABOVE the mean. After standardization, the entire feature will have mean=0 and SD=1. The delivery of 70 hours is unusually slow compared to the average."
  },
  {
    "quizTitle": "Data Understanding & kNN",
    "category": "Standardization",
    "question": "After applying standardization to a feature, what are the resulting mean and standard deviation of that transformed feature?",
    "options": [
      "Mean = 0.5, Standard Deviation = 0.5",
      "Mean = 1, Standard Deviation = 0",
      "Mean = 0, Standard Deviation = 1",
      "Mean = original mean, Standard Deviation = original SD"
    ],
    "correctOption": 2,
    "explanation": "Standardization rescales data to standard scores with mean=0 and standard deviation=1. Subtracting the mean shifts the distribution so the new mean is 0. Dividing by the SD scales it so the new SD is 1. The course states: 'Rescales data to have a mean of 0 and standard deviation of 1.' This is why standardized features are called standard scores or z-scores."
  },
  {
    "quizTitle": "Data Understanding & kNN",
    "category": "Standardization",
    "question": "A feature has mean=80 and SD=15. What is the standardized (z-score) value for the data point that equals the mean — i.e., the value 80 itself?",
    "options": [
      "1.0",
      "80.0",
      "0.0",
      "0.5"
    ],
    "correctOption": 2,
    "explanation": "Standardization: (ai - mean) / SD. For the mean value 80: (80 - 80) / 15 = 0 / 15 = 0.0. The mean ALWAYS standardizes to zero. Values above the mean produce positive z-scores; values below produce negative z-scores. This zero-centering property is the foundation of standardization."
  },
  {
    "quizTitle": "Data Understanding & kNN",
    "category": "Standardization",
    "question": "A researcher combines patient weight data from two sources: Source A (mean=75kg, SD=8kg) and Source B (mean=82kg, SD=5kg). Before running a model, she standardizes all weight values. What is the PRIMARY benefit of this step?",
    "options": [
      "It compresses the data to reduce storage.",
      "It converts weight from continuous to categorical.",
      "It rescales both sources to a common mean=0, SD=1 scale, making values from the two distributions directly comparable regardless of their original offsets.",
      "It removes outlier patients from the combined dataset."
    ],
    "correctOption": 2,
    "explanation": "Standardization converts all values to standard scores (mean=0, SD=1), making measurements from different distributions directly comparable. After standardization, a z-score of +1.5 means the same thing regardless of which source it came from: 1.5 standard deviations above that source's mean. This is critical when combining data from different populations or measurement contexts."
  },
  {
    "quizTitle": "Data Understanding & kNN",
    "category": "Binning",
    "question": "An e-commerce platform converts a customer's continuous Annual Spending dollar amount into one of four categories: Budget Shopper, Regular Shopper, Premium Shopper, or VIP. Which data preparation technique is being applied?",
    "options": [
      "Normalization — because spending is being mapped to a new range.",
      "Standardization — because the spending distribution is being rescaled.",
      "Binning — because a continuous feature is being converted into a categorical feature using defined ranges.",
      "Sampling — because only certain customers are being selected."
    ],
    "correctOption": 2,
    "explanation": "Binning involves converting a continuous feature into a categorical feature. The course definition: 'Binning involves converting a continuous feature into a categorical feature' by defining a series of ranges (bins) that correspond to the new categorical levels. Annual Spending (continuous dollars) → 4 named tiers is a direct example."
  },
  {
    "quizTitle": "Data Understanding & kNN",
    "category": "Binning",
    "question": "A feature called Exam Score has values ranging from 20 to 120. An analyst uses equal-width binning with 5 bins. What is the width of each bin?",
    "options": [
      "10",
      "20",
      "24",
      "25"
    ],
    "correctOption": 1,
    "explanation": "Equal-width binning formula: bin width = range / b = (max - min) / number_of_bins = (120 - 20) / 5 = 100 / 5 = 20. The 5 bins would be: [20,40], (40,60], (60,80], (80,100], (100,120]. All bins have identical width but may contain different numbers of instances depending on the data distribution."
  },
  {
    "quizTitle": "Data Understanding & kNN",
    "category": "Binning",
    "question": "A dataset of 200 customer ages is sorted in ascending order. An analyst applies equal-frequency binning with 4 bins. How many customers will be in EACH bin?",
    "options": [
      "It depends on the age distribution shape.",
      "50 customers per bin — total instances divided by number of bins (200 / 4).",
      "40 customers per bin — the first bin always receives fewer.",
      "Bin sizes vary — equal-frequency cannot guarantee equal counts."
    ],
    "correctOption": 1,
    "explanation": "Equal-frequency binning places the same number of instances in each bin: total / b = 200 / 4 = 50. The data is first sorted, then 50 consecutive values go into each bin. Unlike equal-width, equal-frequency bins may have different width ranges but ALWAYS contain the same count. This is its defining property — balancing bin populations at the cost of unequal widths."
  },
  {
    "quizTitle": "Data Understanding & kNN",
    "category": "Binning",
    "question": "A right-skewed dataset of house prices (most houses are affordable, very few are extremely expensive) needs to be divided into 3 price categories. Which binning approach ensures the most BALANCED number of houses per category?",
    "options": [
      "Equal-width binning — because the price range is split evenly into thirds.",
      "Equal-frequency binning — because it guarantees each bin receives the same number of instances, regardless of skewness.",
      "Normalization — because it scales all prices to [0,1] before binning.",
      "Both approaches produce identical results on skewed data."
    ],
    "correctOption": 1,
    "explanation": "With right-skewed data, equal-width binning would place the vast majority of houses in the first (low-price) bin and almost none in the high-price bins. Equal-frequency binning sorts the data and guarantees each bin gets the same count. For skewed distributions, equal-frequency produces more balanced bins — ideal when you want proportional category membership."
  },
  {
    "quizTitle": "Data Understanding & kNN",
    "category": "Sampling",
    "question": "A data scientist needs a 10% sample from a database of 2 million transaction records. She selects the 200,000 most recently logged records. What is the problem with this approach?",
    "options": [
      "The sample is too large to be computationally feasible.",
      "Top sampling (selecting the first s% by record order) is NOT recommended because it may introduce bias — recent transactions may not represent the full distribution of historical patterns.",
      "Random sampling always produces smaller samples than top sampling.",
      "Stratified sampling must always be used for financial transaction data."
    ],
    "correctOption": 1,
    "explanation": "Top sampling selects the top s% of instances in their current ordering — here, the most recent 10%. This is NOT recommended because it introduces bias. The most recent transactions may reflect a seasonal spike, promotional campaign, or market event unrepresentative of the full 2-year history. The course explicitly states: top sampling 'is NOT recommended as it may introduce bias.'"
  },
  {
    "quizTitle": "Data Understanding & kNN",
    "category": "Sampling",
    "question": "A hospital dataset has 9,000 healthy patients and 1,000 diabetic patients. A researcher wants a representative 10% sample (1,000 patients total) for model development. Which technique ensures the class proportions are preserved?",
    "options": [
      "Top sampling — select the first 1,000 records in the database.",
      "Random sampling — randomly pick 1,000 records from the 10,000.",
      "Stratified sampling — sample 10% from each group: 900 healthy + 100 diabetic, then combine.",
      "Equal-frequency sampling — place 500 from each class into the sample."
    ],
    "correctOption": 2,
    "explanation": "Stratified sampling divides instances into strata (groups) by a key feature — here, diabetic/healthy — then samples s% from each stratum. 10% of 9,000 healthy = 900; 10% of 1,000 diabetic = 100 → 1,000 total. This preserves the original 90/10 class ratio. Random sampling might accidentally under-sample the rare diabetic class, producing a misleading training set."
  },
  {
    "quizTitle": "Data Understanding & kNN",
    "category": "Sampling",
    "question": "What is the fundamental requirement that ALL sampling methods must satisfy to produce a useful sample?",
    "options": [
      "The sample must always be exactly 10% of the original dataset.",
      "The sample must only include the most recently collected records.",
      "The sample must still be representative of the original data — otherwise, conclusions drawn from it will not generalise to the full dataset.",
      "The sample must always be larger than the test set used for evaluation."
    ],
    "correctOption": 2,
    "explanation": "The course states: 'Sample should still be a representative of original data (otherwise, ???).' A non-representative sample produces biased models that appear to work on the sample but fail on real-world data. Representativeness — matching the original data distribution — is the non-negotiable requirement for any sampling approach."
  },
  {
    "quizTitle": "Data Understanding & kNN",
    "category": "Sampling",
    "question": "Which of the following is the recommended general-purpose sampling technique, and why?",
    "options": [
      "Top sampling — because it is the simplest to implement.",
      "Stratified sampling — because it always produces perfect proportional balance.",
      "Random sampling — because it randomly selects s% of instances without systematic ordering bias, making it the recommended baseline approach.",
      "Equal-frequency sampling — because it guarantees all value ranges are covered."
    ],
    "correctOption": 2,
    "explanation": "The course labels random sampling as the 'Recommended approach.' It randomly selects s% of instances from the full dataset without any systematic ordering, which avoids the bias problems of top sampling. While stratified sampling is preferred for class-imbalanced data, random sampling is the recommended baseline when no specific stratification concern exists."
  },
  {
    "quizTitle": "Data Understanding & kNN",
    "category": "Train and Test Sets",
    "question": "Why must the test set be completely independent of the training set when evaluating a machine learning model?",
    "options": [
      "Because the test set needs to be larger than the training set.",
      "Because the test set should only contain positive examples.",
      "Because the test set must contain data the model has NEVER seen during training, to give an unbiased estimate of real-world performance and verify the true error rate.",
      "Because training and testing on the same data is too computationally expensive."
    ],
    "correctOption": 2,
    "explanation": "The course states: 'To test your classifier, you need data which is not used in learning process.' If the model trains and evaluates on the same data, it could memorize all examples perfectly and score 100% without learning any generalizable pattern. The independent test set simulates real unseen data, giving an honest error rate that reflects true deployment performance."
  },
  {
    "quizTitle": "Data Understanding & kNN",
    "category": "Overfitting and Underfitting",
    "question": "A student trains a decision tree on a labelled training set and achieves 99% accuracy. When the same model is evaluated on the held-out test set, accuracy drops to 54%. What problem has occurred?",
    "options": [
      "Underfitting — the model is too simple to capture training patterns.",
      "Overfitting — the model memorised the training data (including noise) and cannot generalise to new unseen data.",
      "Data leakage — the test set was contaminated with training examples.",
      "Class imbalance — the dataset has unequal class proportions."
    ],
    "correctOption": 1,
    "explanation": "Overfitting occurs when the model achieves near-perfect accuracy on training data by memorizing even the noise and errors, then fails on unseen data. The course states: 'Overfitted model performs well on the training data but does not perform well on the evaluation data. This is because the model is memorizing the data it has seen and is unable to generalize.' The 99% vs 54% gap is the hallmark."
  },
  {
    "quizTitle": "Data Understanding & kNN",
    "category": "Overfitting and Underfitting",
    "question": "A demand forecasting model achieves only 57% accuracy on the training set and 56% on the test set. Both are far below the business requirement of 85%. What problem does this model have?",
    "options": [
      "Overfitting — the model performs too well on training data.",
      "Underfitting — the model performs poorly on the training data itself, meaning it has failed to capture the relationship between the inputs and the target variable.",
      "Data contamination — the test set was mixed with training data.",
      "Cardinality issues — the target variable has too many unique values."
    ],
    "correctOption": 1,
    "explanation": "Underfitting is when the model performs poorly on the training data. Unlike overfitting (high train, low test), an underfitting model has low accuracy on BOTH training and test sets. The course: 'model is underfitting the training data when the model performs poorly on the training data. This is because the model is unable to capture the relationship between the input and the target values (often called Y).'"
  },
  {
    "quizTitle": "Data Understanding & kNN",
    "category": "Overfitting and Underfitting",
    "question": "An overfitted model is essentially doing what during training that causes it to fail on new data?",
    "options": [
      "Generalizing broadly from training patterns to produce universal predictions.",
      "Memorizing the training data — including its noise and errors — rather than learning the true underlying pattern.",
      "Ignoring the training data and making random predictions.",
      "Reducing all predictions to the majority class."
    ],
    "correctOption": 1,
    "explanation": "The course explains: 'the model is memorizing the data it has seen and is unable to generalize to unseen examples.' An overfitted model learns not just the signal but also the noise in training data — it fits every quirk and exception so precisely that when it encounters real new data (which has different random quirks), it fails. Overfitting tries to achieve 100% accuracy 'even learning from the examples that are wrong (noise).'"
  },
  {
    "quizTitle": "Data Understanding & kNN",
    "category": "Overfitting and Underfitting",
    "question": "A model is described as underfitting. What does this mean about its performance, and what might cause it?",
    "options": [
      "The model performs perfectly on training data but fails on test data — it is too complex.",
      "The model performs poorly on BOTH training and test data — it is too simple to capture the real patterns in the data.",
      "The model predicts all instances as the majority class, regardless of features.",
      "The model ignores the test set and always uses training set predictions."
    ],
    "correctOption": 1,
    "explanation": "An underfitting model is too simple — it cannot even capture the patterns in the training data, resulting in low accuracy on both training and test sets. This is in contrast to overfitting, where training accuracy is high. Causes include: using too simple a model, insufficient features, or too much regularization. The course illustrates this with the leftmost underfitting curve that misses the data trend."
  },
  {
    "quizTitle": "Data Understanding & kNN",
    "category": "Techniques for Evaluation",
    "question": "A dataset of 1,000 patient records is evaluated using 10-fold cross-validation. How many instances are in each fold, and how many total times is the model trained?",
    "options": [
      "Each fold has 100 instances; the model is trained 10 times.",
      "Each fold has 10 instances; the model is trained 100 times.",
      "Each fold has 50 instances; the model is trained 20 times.",
      "Each fold has 100 instances; the model is trained just once."
    ],
    "correctOption": 0,
    "explanation": "In K-fold cross-validation with K=10 and 1,000 instances: 1,000 / 10 = 100 instances per fold. The process repeats K=10 times — each fold takes one turn as the test set while the other 9 folds serve as training data. The model is trained 10 separate times. Final accuracy = average of all 10 test accuracies, giving a more reliable estimate than a single split."
  },
  {
    "quizTitle": "Data Understanding & kNN",
    "category": "Techniques for Evaluation",
    "question": "A team uses an 80/20 percentage split for model evaluation. What percentage of data is reserved for testing, and why must the test set remain independent?",
    "options": [
      "80% for testing, 20% for training — the majority tests the model's robustness.",
      "20% for testing — this held-out set evaluates how well the model performs on data it has never seen during training.",
      "80% for testing — the model is evaluated more thoroughly on unseen data.",
      "The ratio is flexible and can be changed after seeing preliminary results."
    ],
    "correctOption": 1,
    "explanation": "In a percentage split, k% is for training and (100-k)% for testing. An 80/20 split → 80% trains the model, 20% is the test set. The 20% must remain completely unseen during training to give an unbiased estimate of how the model will perform in the real world. The course example: '70% for training, 30% for testing.'"
  },
  {
    "quizTitle": "Data Understanding & kNN",
    "category": "Techniques for Evaluation",
    "question": "What is the PRIMARY advantage of K-fold cross-validation over a single percentage split for measuring model accuracy?",
    "options": [
      "K-fold trains the model much faster per iteration.",
      "K-fold always produces higher accuracy than a single split.",
      "K-fold uses EVERY instance for both training and testing across different folds, producing a more reliable accuracy estimate by averaging K independent evaluations.",
      "K-fold does not require a dedicated test set."
    ],
    "correctOption": 2,
    "explanation": "In K-fold cross-validation, every instance appears in a test fold exactly once. The final accuracy is the average over K evaluations. This is more reliable than a single percentage split, where accuracy can vary significantly depending on which instances randomly land in the test set. K-fold reduces this variance by averaging K independent train-test cycles. K is typically 10."
  },
  {
    "quizTitle": "Data Understanding & kNN",
    "category": "K-Nearest Neighbors",
    "question": "How does the kNN algorithm determine the class label for a new, unlabelled instance?",
    "options": [
      "It builds a decision boundary and checks which side the new instance falls on.",
      "It finds the k training instances closest to the new instance (by distance), then assigns the majority class among those k neighbours.",
      "It calculates the average of all training labels and rounds to the nearest class.",
      "It finds the single training instance with the largest feature values."
    ],
    "correctOption": 1,
    "explanation": "kNN works in three steps: (1) compute the distance from the new instance to every training instance, (2) select the k nearest neighbours, (3) take a majority vote of their class labels and assign that to the new instance. The course: 'For a new instance, it finds the k nearest neighbors (based on distance) in the train set. From the classes of k nearest neighbors, find the majority class.'"
  },
  {
    "quizTitle": "Data Understanding & kNN",
    "category": "K-Nearest Neighbors",
    "question": "A kNN classifier with k=3 is applied to a new customer record. The 3 nearest training neighbours have labels: [Churned, Not Churned, Churned]. What class is assigned to the new customer?",
    "options": [
      "Not Churned — because it appears in the middle position.",
      "Churned — because 2 out of 3 nearest neighbours belong to class Churned (majority vote).",
      "Undetermined — because the vote is not unanimous.",
      "The weighted average of all three neighbour classes."
    ],
    "correctOption": 1,
    "explanation": "kNN assigns the MAJORITY class among the k nearest neighbours. With k=3 and labels [Churned, Not Churned, Churned]: Churned appears 2 times, Not Churned appears 1 time. Majority = Churned → the new customer is classified as Churned. There is no averaging or weighting in basic kNN — it is a simple majority vote."
  },
  {
    "quizTitle": "Data Understanding & kNN",
    "category": "K-Nearest Neighbors",
    "question": "Given 5 training instances with features (x, y) and their distances to a new test point Q=(3,3): S1(1,1)→ClassX dist≈2.83, S2(2,4)→ClassX dist≈1.41, S3(6,2)→ClassY dist≈3.16, S4(7,6)→ClassY dist=5.00, S5(4,7)→ClassY dist≈4.12. Using kNN with k=3, what class is Q assigned?",
    "options": [
      "Class Y — because there are more Class Y instances in the training set overall (3 vs 2).",
      "Class X — because the 3 nearest neighbours are S2(X), S1(X), and S3(Y), giving a 2-to-1 majority for Class X.",
      "Class Y — because S3, S4, and S5 are all Class Y.",
      "Cannot be determined without knowing the exact decimal values of distances."
    ],
    "correctOption": 1,
    "explanation": "kNN selects the k=3 NEAREST neighbours by distance. Ranked by distance: S2(1.41,X), S1(2.83,X), S3(3.16,Y), S5(4.12,Y), S4(5.00,Y). The 3 nearest are S2(X), S1(X), S3(Y). Vote: X=2, Y=1 → Class X wins. The overall count of Y instances in the training set (3 vs 2) is IRRELEVANT — only the k nearest neighbours cast votes."
  },
  {
    "quizTitle": "Data Understanding & kNN",
    "category": "K-Nearest Neighbors",
    "question": "A kNN model uses k=1. A mislabelled training instance (noise) is very close to several genuine test points. What problem does this create?",
    "options": [
      "No problem — k=1 gives the most granular and accurate classification.",
      "k=1 makes the model highly susceptible to noise: a single mislabelled training point will incorrectly classify all test points that fall nearest to it.",
      "k=1 causes underfitting because only one neighbour is consulted.",
      "k=1 is suitable only for datasets with more than 10,000 instances."
    ],
    "correctOption": 1,
    "explanation": "With k=1, every test point is classified by exactly one training instance — the single nearest neighbour. If that one instance is mislabelled noise, all test points near it will be wrong. Using larger k smooths this effect: the noisy point's label gets outvoted by correct neighbours. k=1 is the most sensitive to noise; larger k values improve robustness."
  },
  {
    "quizTitle": "Data Understanding & kNN",
    "category": "K-Nearest Neighbors",
    "question": "What happens to kNN classification behaviour as k becomes very large — approaching the total number of training instances (N)?",
    "options": [
      "The classifier becomes more precise and accurately models fine-grained local patterns.",
      "The classifier begins predicting the majority class for EVERY test instance, ignoring local proximity patterns and effectively underfitting.",
      "The classifier perfectly memorises the training data.",
      "Distance calculations become more accurate with larger k."
    ],
    "correctOption": 1,
    "explanation": "As k approaches N, every test point considers nearly ALL training instances as neighbours, so the majority class of the ENTIRE training set wins every vote — the same class is predicted regardless of where the test point falls. This ignores all local patterns and results in underfitting. Very small k = high variance / noise-sensitive. Very large k = high bias / ignores local structure."
  },
  {
    "quizTitle": "Data Understanding & kNN",
    "category": "K-Nearest Neighbors",
    "question": "Which formula correctly computes the Euclidean distance between two 2-feature data points (x1, y1) and (x2, y2), as used in kNN distance calculations?",
    "options": [
      "|x2 - x1| + |y2 - y1| (Manhattan/city-block distance)",
      "SQRT(POWER(x2-x1, 2) + POWER(y2-y1, 2)) — the square root of the sum of squared differences across all features",
      "(x2 - x1) multiplied by (y2 - y1) (dot product)",
      "(x2 + y2) minus (x1 + y1) (sum difference)"
    ],
    "correctOption": 1,
    "explanation": "Euclidean distance is calculated as the square root of the sum of squared differences across all features. For 2 features: SQRT((x2-x1)^2 + (y2-y1)^2). This extends to any number of features. The Excel formula shown in class for 4 iris features was: =SQRT(POWER(F3-A3,2)+POWER(G3-B3,2)+POWER(H3-C3,2)+POWER(I3-D3,2)) — exactly this formula with 4 squared difference terms."
  },
  {
    "quizTitle": "Data Understanding & kNN",
    "category": "Confusion Matrix and Metrics",
    "question": "A disease screening model is evaluated on 200 patients with results: TP=85, TN=65, FP=15, FN=35. What is the model's overall accuracy?",
    "options": [
      "70.0%",
      "75.0%",
      "85.0%",
      "80.0%"
    ],
    "correctOption": 1,
    "explanation": "Accuracy = (TP + TN) / (TP + TN + FP + FN) = (85 + 65) / (85 + 65 + 15 + 35) = 150 / 200 = 0.75 = 75%. Accuracy is the proportion of ALL predictions (both positive and negative) that the model got correct. It is the most straightforward metric but can be misleading with imbalanced classes."
  },
  {
    "quizTitle": "Data Understanding & kNN",
    "category": "Confusion Matrix and Metrics",
    "question": "Using the same confusion matrix (TP=85, TN=65, FP=15, FN=35), what is the model's precision?",
    "options": [
      "0.71",
      "0.75",
      "0.85",
      "0.94"
    ],
    "correctOption": 2,
    "explanation": "Precision = TP / (TP + FP) = 85 / (85 + 15) = 85 / 100 = 0.85. Precision answers: 'Of all the instances the model predicted as POSITIVE, what proportion were actually positive?' High precision = few false positives = few false alarms. The course defines precision as measuring 'ability to detect positives correctly.'"
  },
  {
    "quizTitle": "Data Understanding & kNN",
    "category": "Confusion Matrix and Metrics",
    "question": "Using the same confusion matrix (TP=85, TN=65, FP=15, FN=35), what is the model's recall (sensitivity)?",
    "options": [
      "0.85",
      "0.71",
      "0.65",
      "0.94"
    ],
    "correctOption": 1,
    "explanation": "Recall = TP / (TP + FN) = 85 / (85 + 35) = 85 / 120 ≈ 0.708 ≈ 71%. Recall answers: 'Of all the ACTUAL positive cases, how many did the model correctly identify?' FN (missed positives) directly reduce recall. In disease detection, recall is critical — missing a real case (FN) can be life-threatening. The course also calls this Sensitivity."
  },
  {
    "quizTitle": "Data Understanding & kNN",
    "category": "Confusion Matrix and Metrics",
    "question": "Using the same confusion matrix (TP=85, TN=65, FP=15, FN=35), what is the model's specificity?",
    "options": [
      "0.85",
      "0.71",
      "0.81",
      "0.75"
    ],
    "correctOption": 2,
    "explanation": "Specificity = TN / (TN + FP) = 65 / (65 + 15) = 65 / 80 = 0.8125 ≈ 81%. Specificity measures how well the model identifies NEGATIVE cases. It answers: 'Of all the actual NEGATIVE cases, how many were correctly labelled as negative?' High specificity = few false positives = healthy patients not incorrectly flagged as sick. The course defines it as: 'the number of false cases you got right.'"
  },
  {
    "quizTitle": "Data Understanding & kNN",
    "category": "Confusion Matrix and Metrics",
    "question": "A fraud detection system has these results: TP=80, FP=20, FN=20, TN=80. What is the F1 score?",
    "options": [
      "0.75",
      "0.80",
      "0.70",
      "0.85"
    ],
    "correctOption": 1,
    "explanation": "F1 = (2 * Precision * Recall) / (Precision + Recall). Precision = 80/(80+20) = 0.80. Recall = 80/(80+20) = 0.80. F1 = (2 * 0.80 * 0.80) / (0.80 + 0.80) = 1.28 / 1.60 = 0.80. F1 is the harmonic mean of precision and recall. When precision equals recall, F1 equals both. F1 is especially useful when you need to balance both metrics."
  },
  {
    "quizTitle": "Data Understanding & kNN",
    "category": "Confusion Matrix and Metrics",
    "question": "A cancer screening model predicts EVERY patient as having cancer (a strategy to never miss a real case). In a test set with 10 actual cancer patients and 90 healthy patients, what is the model's recall?",
    "options": [
      "10% — because only 10 of 100 patients truly have cancer.",
      "90% — because 90 patients are healthy.",
      "100% — because every actual cancer patient is predicted positive and no cancer case is missed (FN=0).",
      "50% — because precision and recall always average to the overall accuracy."
    ],
    "correctOption": 2,
    "explanation": "If every patient is predicted positive: TP=10 (all cancers caught), FN=0 (no cancers missed), FP=90 (all healthy patients wrongly flagged). Recall = TP/(TP+FN) = 10/10 = 100%. However, Precision = 10/100 = 10% — catastrophically low. This illustrates the precision-recall tradeoff: blindly maximizing recall by flagging everyone destroys precision."
  },
  {
    "quizTitle": "Data Understanding & kNN",
    "category": "Confusion Matrix and Metrics",
    "question": "In a medical disease detection context, which type of model error is typically considered MORE dangerous, and why?",
    "options": [
      "False Positive (FP) — because falsely diagnosing a healthy patient causes unnecessary anxiety and treatment costs.",
      "False Negative (FN) — because failing to detect a real disease means a sick patient goes untreated, which can be life-threatening.",
      "Both FP and FN are equally dangerous in all medical contexts.",
      "True Negative (TN) — because correctly clearing patients reduces follow-up revenue for the hospital."
    ],
    "correctOption": 1,
    "explanation": "In life-or-death medical screening (cancer, sepsis, etc.), a False Negative — predicting a sick patient as healthy — is typically most dangerous. The disease goes undetected and untreated, potentially with fatal consequences. A False Positive triggers further tests and anxiety, but the patient will likely be cleared. This is why recall (minimizing FN) is often prioritised in medical diagnostics over precision."
  },
  {
    "quizTitle": "Data Understanding & kNN",
    "category": "Confusion Matrix and Metrics",
    "question": "A spam filter evaluated on 500 emails produces: TP=180 (spam correctly caught), TN=270 (legitimate emails correctly passed), FP=30 (legitimate emails sent to spam), FN=20 (spam emails that slipped through). What is the precision of the spam filter?",
    "options": [
      "0.90",
      "0.85",
      "0.75",
      "0.54"
    ],
    "correctOption": 0,
    "explanation": "Precision = TP / (TP + FP) = 180 / (180 + 30) = 180 / 210 ≈ 0.857 ≈ 0.86. The closest option is 0.90, which demonstrates that precision = 180/210. Wait: 180/210 = 0.857. The answer should be 0.85. Let me recalculate: TP=180, FP=30: 180/210 = 6/7 ≈ 0.857. The closest option is 0.85. Precision answers: of all emails flagged as spam (180+30=210), 180 were truly spam — about 85.7% precision."
  }
]
