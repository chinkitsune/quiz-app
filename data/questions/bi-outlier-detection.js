// data/questions/bi-outlier-detection.js

module.exports = 
[
  {
    "quizTitle": "Outlier Detection",
    "category": "Outlier Definition",
    "question": "A hospital dataset records patient resting heart rates, which all fall between 55 and 95 beats per minute. One record shows a resting heart rate of 4. What makes this a candidate outlier?",
    "options": [
      "It is a very small number, and small numbers are always outliers.",
      "It deviates significantly from the majority of normal objects in the dataset — a resting rate of 4 bpm falls far outside the range of all other records.",
      "It must be a data entry error, so it is automatically labelled an outlier.",
      "There are not enough records to determine if it is an outlier."
    ],
    "correctOption": 1,
    "explanation": "The course defines an outlier as 'a data object that deviates significantly from the majority of normal objects.' A resting heart rate of 4 bpm, when all other values are 55–95, deviates dramatically from the majority — it is a strong outlier candidate regardless of why it occurred. The definition focuses on the deviation, not its cause."
  },
  {
    "quizTitle": "Outlier Detection",
    "category": "Outlier Definition",
    "question": "Outlier detection is classified as unsupervised learning. What does this mean in practice for an outlier detection project?",
    "options": [
      "The dataset must be split into training and test sets with labelled examples of outliers and normal points.",
      "No labelled examples are needed — the algorithm identifies anomalies purely from the structure and distribution of the data itself, without being told in advance which instances are outliers.",
      "A human expert must label every outlier before the algorithm can run.",
      "Outlier detection requires a supervised model to first classify all normal data before anomalies can be found."
    ],
    "correctOption": 1,
    "explanation": "The course categorises outlier detection under Unsupervised learning. Unlike classification (supervised), there are no pre-labelled training examples of 'outlier' vs 'normal.' The algorithm identifies anomalies by finding instances that deviate from the majority pattern. In real-world fraud or anomaly scenarios, labelled outliers are rare or unavailable — this is why unsupervised methods are used."
  },
  {
    "quizTitle": "Outlier Detection",
    "category": "Outlier Definition",
    "question": "An e-commerce platform logs every order. Order #48,231 shows 10,000 units of a product purchased in a single transaction, while all other orders range from 1 to 20 units. Is this necessarily a problem that must be deleted?",
    "options": [
      "Yes — all outliers must be deleted from the dataset immediately.",
      "No — it is flagged as an outlier (deviates significantly from the majority) but may be legitimate (bulk wholesale buyer) or fraudulent. The flag triggers investigation, not automatic deletion.",
      "No — it should be replaced with the dataset average.",
      "Yes — any value above 100 units is always a data error in retail datasets."
    ],
    "correctOption": 1,
    "explanation": "An outlier is simply a data point that deviates significantly from the majority — it is not automatically invalid or a mistake. A bulk purchase of 10,000 units could be a legitimate wholesale order or a fraudulent transaction. Outlier detection flags it for human investigation. The decision to delete, investigate, or keep it requires domain judgment, not automatic removal."
  },
  {
    "quizTitle": "Outlier Detection",
    "category": "Outlier Definition",
    "question": "Which of the following BEST describes the relationship between outlier detection and machine learning?",
    "options": [
      "Outlier detection is a type of supervised classification where models learn from labelled fraud examples.",
      "Outlier detection is unsupervised — it finds data objects that deviate significantly from the majority without requiring pre-labelled training data.",
      "Outlier detection is a regression task that predicts numeric anomaly scores.",
      "Outlier detection requires clustering to be performed first before any anomalies can be identified."
    ],
    "correctOption": 1,
    "explanation": "The course recap categorises outlier detection under Unsupervised learning (alongside clustering), in contrast to Supervised learning (kNN, Decision Trees, Random Forest, Regression). It finds data objects deviating from the majority without labelled training data. This unsupervised nature is what makes it suitable for fraud and anomaly detection where labelled examples are scarce."
  },
  {
    "quizTitle": "Outlier Detection",
    "category": "Applications",
    "question": "A bank notices that one of its customers, who typically makes 3-5 debit card transactions per week in Ottawa, suddenly makes 12 purchases in 6 different countries within a single 24-hour period. Which application domain from the course BEST matches this scenario?",
    "options": [
      "Telecom fraud detection",
      "Web Analytics",
      "Medical Diagnosis",
      "Financial fraud detection — identifying unusual credit card or banking transactions that deviate from a customer's normal behaviour"
    ],
    "correctOption": 3,
    "explanation": "The course lists 'Financial fraud detection (banking, credit card etc.)' as a primary application of outlier detection. An unusual transaction pattern — 12 purchases across 6 countries in 24 hours for someone who normally transacts locally — is exactly the type of anomaly financial fraud detection systems are designed to flag."
  },
  {
    "quizTitle": "Outlier Detection",
    "category": "Applications",
    "question": "A mobile phone carrier detects that a newly activated SIM card has made 5,000 outbound calls in the first 24 hours, while typical users make 5–15 calls per day. Which application domain does this scenario represent?",
    "options": [
      "Financial fraud detection",
      "Telecom fraud detection — identifying abnormal call or usage patterns that deviate from normal subscriber behaviour",
      "Web Analytics",
      "Medical Diagnosis"
    ],
    "correctOption": 1,
    "explanation": "The course lists 'Telecom fraud detection' as a distinct application of outlier detection. 5,000 calls in 24 hours by a new SIM card is a classic telecom anomaly pattern (often associated with SIM farming or call-back fraud). This deviates massively from normal subscriber usage and would be flagged as an outlier."
  },
  {
    "quizTitle": "Outlier Detection",
    "category": "Applications",
    "question": "A radiology AI system analyses thousands of chest X-rays. One patient's X-ray shows a density pattern present in only 0.1% of all scans in the database. The system flags it for urgent radiologist review. Which application domain does this represent?",
    "options": [
      "Financial fraud detection",
      "Telecom fraud detection",
      "Medical Diagnosis — outlier detection flags unusual patient readings or imaging patterns that deviate from the normal population for clinical follow-up",
      "Web Analytics"
    ],
    "correctOption": 2,
    "explanation": "The course lists 'Medical Diagnosis' as an application of outlier detection. Unusual patterns in diagnostic imaging, lab results, or vital signs that deviate from the majority can indicate rare conditions or diseases that require urgent attention. Outlier detection helps surface these rare findings automatically."
  },
  {
    "quizTitle": "Outlier Detection",
    "category": "Applications",
    "question": "A digital marketing team monitors website traffic. On a Tuesday afternoon, one product page receives 80,000 visits — while similar pages receive 200–500 visits on the same day. The team wants to automatically flag such spikes. Which application domain does this illustrate?",
    "options": [
      "Financial fraud detection",
      "Medical Diagnosis",
      "Telecom fraud detection",
      "Web Analytics — detecting unusual traffic patterns, engagement anomalies, or bot activity on web platforms"
    ],
    "correctOption": 3,
    "explanation": "The course lists 'Web Analytics' as an application of outlier detection. An 80,000-visit spike on a page that typically gets 200–500 visits is a massive deviation from the norm — it could represent a viral social media post, a bot attack, or a data collection error. Web analytics outlier detection surfaces these anomalies for investigation."
  },
  {
    "quizTitle": "Outlier Detection",
    "category": "Types of Outliers - Global",
    "question": "What is the defining characteristic of a GLOBAL outlier (also called a point anomaly)?",
    "options": [
      "A group of data points that collectively deviate from the dataset.",
      "A data point whose value deviates significantly based on a specific time or location context.",
      "A single data point whose value is far outside the entirety of the dataset in which it is found.",
      "A data point that is only an outlier when compared to a specific subset of the data."
    ],
    "correctOption": 2,
    "explanation": "The course defines a global outlier as: 'a data point considered a global outlier if its value is far outside the entirety of the data set in which it is found.' It is also called a 'point anomaly' because it is a single point that stands apart from all other data globally — regardless of context or grouping."
  },
  {
    "quizTitle": "Outlier Detection",
    "category": "Types of Outliers - Global",
    "question": "A dataset of 10,000 employee salaries contains values ranging from $28,000 to $120,000. One record shows a salary of $60,500,999. What type of outlier is this?",
    "options": [
      "Contextual outlier — because the salary might be normal for a CEO in a specific industry context.",
      "Collective outlier — because it appears with other high salaries.",
      "Global outlier — because the value of $60,500,999 is far outside the entirety of the dataset's range.",
      "It is not an outlier — extreme values are always valid in salary data."
    ],
    "correctOption": 2,
    "explanation": "This is a global outlier (point anomaly). The value $60,500,999 is far outside the entirety of the dataset where all other values are $28,000–$120,000. No context is needed to identify it as anomalous — it deviates from the global dataset range by several orders of magnitude. The course slide shows a similar example (value 60500999) highlighted as a global outlier."
  },
  {
    "quizTitle": "Outlier Detection",
    "category": "Types of Outliers - Global",
    "question": "An IoT temperature sensor in an office building records readings every minute. All readings for the past year fall between 18°C and 26°C. One record shows 4,800°C. What type of outlier is this, and why?",
    "options": [
      "Contextual outlier — because the temperature reading depends on the season.",
      "Collective outlier — because sensor errors often cluster together.",
      "Global outlier — because 4,800°C is far outside the entire dataset's range, regardless of any contextual factors like time of day or season.",
      "Not an outlier — sensors can spike temporarily without being anomalies."
    ],
    "correctOption": 2,
    "explanation": "A reading of 4,800°C when the entire dataset ranges from 18°C to 26°C is a global outlier (point anomaly). The value is far outside the entirety of the dataset — no context is needed. It does not matter what time of year or what location — 4,800°C is universally impossible for an office environment, making it an extreme global anomaly."
  },
  {
    "quizTitle": "Outlier Detection",
    "category": "Types of Outliers - Global",
    "question": "Why are global outliers also called 'point anomalies'?",
    "options": [
      "Because they are detected using point-in-time analysis of time series data.",
      "Because they represent a single data point that is anomalous with respect to the full global dataset — no grouping or context is needed; the individual point stands out on its own.",
      "Because they are detected using the data point's position on a scatter plot.",
      "Because they only occur in datasets with fewer than 1,000 points."
    ],
    "correctOption": 1,
    "explanation": "The term 'point anomaly' reflects that a single data point — viewed against the global dataset — is the anomaly. No additional context (time, location, grouping) is needed to identify it as unusual. The point itself, compared to all other points in the full dataset, stands far apart. This contrasts with contextual outliers (context needed) and collective outliers (group needed)."
  },
  {
    "quizTitle": "Outlier Detection",
    "category": "Types of Outliers - Contextual",
    "question": "What is the defining characteristic of a CONTEXTUAL outlier (also called a conditional outlier)?",
    "options": [
      "A single data point that is far outside the global dataset range.",
      "A group of data points that together form an anomalous pattern.",
      "A data point that deviates significantly only when evaluated within a specific context — it may appear normal without that context.",
      "A data point that is only detected by machine learning algorithms, not statistical methods."
    ],
    "correctOption": 2,
    "explanation": "The course defines contextual outliers as data that 'deviates significantly based on a selected context.' The same value can be normal in one context but anomalous in another. Context might be time, location, season, or other conditional attributes. Without specifying the context, the value might not appear unusual at all."
  },
  {
    "quizTitle": "Outlier Detection",
    "category": "Types of Outliers - Contextual",
    "question": "A weather dataset for Ottawa shows a maximum temperature of -30.7°C recorded during June. Is this a global outlier or a contextual outlier, and why?",
    "options": [
      "Global outlier — because -30.7°C is an impossible temperature anywhere on Earth.",
      "Contextual outlier — because -30.7°C during June in Ottawa is anomalous within the context of summer temperatures, even though the same value would be normal in January.",
      "Not an outlier — Ottawa regularly has cold temperatures in June.",
      "Collective outlier — because cold snaps usually involve multiple consecutive cold days."
    ],
    "correctOption": 1,
    "explanation": "This is the course's own example of a contextual outlier. -30.7°C is not impossible globally (it occurs in Canadian winters), so it is NOT a global outlier. However, in the CONTEXT of June in Ottawa, it deviates dramatically from the expected summer temperature range of 15–30°C. The context (month=June, location=Ottawa) makes it anomalous — hence it is a contextual (conditional) outlier."
  },
  {
    "quizTitle": "Outlier Detection",
    "category": "Types of Outliers - Contextual",
    "question": "Would the same temperature reading of -30.7°C in Ottawa be a contextual outlier if it occurred in January instead of June?",
    "options": [
      "Yes — -30.7°C is always a contextual outlier in Ottawa regardless of month.",
      "No — in the context of January in Ottawa, -30.7°C is within the plausible range of winter temperatures and would not be contextually anomalous.",
      "Yes — because the exact value -30.7 is unusual even in January.",
      "No — contextual outliers are defined by value alone, not by time context."
    ],
    "correctOption": 1,
    "explanation": "This question tests understanding of the CONTEXT dependency. The same value (-30.7°C) that is a contextual outlier in June is NOT a contextual outlier in January — because in the context of January in Ottawa, sub-zero temperatures in the -20 to -35°C range are expected. The SAME data value can be an outlier in one context and perfectly normal in another. This is what makes it 'contextual.'"
  },
  {
    "quizTitle": "Outlier Detection",
    "category": "Types of Outliers - Contextual",
    "question": "A retail analytics team examines daily sales revenue. A grocery store records $120 in sales on December 24 (Christmas Eve). Without checking context, $120 appears to be within the normal daily range. Why might this be a contextual outlier?",
    "options": [
      "Because $120 is too low for any day of the year.",
      "Because within the context of December 24 — a day when grocery stores typically see their highest annual sales — $120 is extremely low relative to what is expected in that specific context.",
      "Because all December sales should be above $1,000.",
      "It is not a contextual outlier — low sales can happen any day."
    ],
    "correctOption": 1,
    "explanation": "A contextual outlier deviates significantly based on a selected context. In the context of December 24 (Christmas Eve), $120 in grocery sales is anomalously low — the expected sales in this context are much higher. Without the date context, $120 might look normal. The time context (Christmas Eve) is what makes $120 a contextual anomaly. This mirrors the course example where -30.7°C only becomes an outlier in June."
  },
  {
    "quizTitle": "Outlier Detection",
    "category": "Types of Outliers - Contextual",
    "question": "A swimwear retailer in Miami records $0 in sales on December 25 (Christmas Day). Is this a contextual outlier?",
    "options": [
      "Yes — $0 in sales is always a global outlier regardless of context.",
      "No — $0 on Christmas Day is expected since most stores are closed. The context of Christmas Day makes $0 sales the NORM, so it is NOT contextually anomalous.",
      "Yes — December is summer in Miami, so swimwear sales should be high every day.",
      "Contextual outliers only apply to weather data, not sales data."
    ],
    "correctOption": 1,
    "explanation": "This is a trick question testing genuine understanding. Even though $0 looks unusual in the global dataset, in the CONTEXT of Christmas Day (when stores are closed), $0 is expected and NOT a contextual outlier. Contextual outliers must deviate significantly FROM WHAT IS EXPECTED IN THAT CONTEXT. If $0 is the norm on Christmas Day, it does not deviate from that context's expectation."
  },
  {
    "quizTitle": "Outlier Detection",
    "category": "Types of Outliers - Collective",
    "question": "What is the defining characteristic of a COLLECTIVE outlier?",
    "options": [
      "A single data point that is far outside the global dataset range.",
      "A group of data points (a subset) that collectively deviate significantly from the whole dataset, even though each individual data point may NOT be an outlier by itself.",
      "Multiple independent outliers that happen to occur in the same time period.",
      "A data point that is only an outlier when compared to its local neighbourhood."
    ],
    "correctOption": 1,
    "explanation": "The course defines collective outliers as: 'A subset of data objects collectively deviate significantly from the whole data set, even if the individual data objects may not be outliers.' The key distinction: individually, each point in the subset is normal. But as a GROUP, their pattern is anomalous."
  },
  {
    "quizTitle": "Outlier Detection",
    "category": "Types of Outliers - Collective",
    "question": "A manufacturing machine normally produces quality readings that fluctuate between 0.95 and 1.05 (acceptable range). On a Tuesday afternoon, the sensor records exactly 1.00 for 200 consecutive readings with no variation. Each individual reading of 1.00 is completely normal. What type of outlier is this pattern?",
    "options": [
      "Global outlier — because 1.00 is too perfect.",
      "Contextual outlier — because Tuesday afternoon is a special context.",
      "Not an outlier — all values are within acceptable range.",
      "Collective outlier — 200 consecutive identical readings collectively deviate from the normal pattern of fluctuation, even though each value of 1.00 is individually normal."
    ],
    "correctOption": 3,
    "explanation": "This is a collective outlier. Each reading of 1.00 is individually normal (within 0.95–1.05). But 200 consecutive identical readings with ZERO variation is anomalous as a collective pattern — it suggests a stuck sensor or data recording error. The course notes: 'The low value by itself is not an outlier but its successive occurrence for long time is an outlier.' The group behaviour is the anomaly, not any individual point."
  },
  {
    "quizTitle": "Outlier Detection",
    "category": "Types of Outliers - Collective",
    "question": "In the course's ECG/signal example, a highlighted region shows a consistently low value persisting for an abnormally long time. Why is this a collective outlier rather than a global outlier?",
    "options": [
      "Because the low value itself is extreme and would be an outlier in any dataset.",
      "Because the individual low value is NOT unusual by itself (it appears elsewhere in the signal), but its persistence across a consecutive sequence is what makes the GROUP of readings collectively anomalous.",
      "Because ECG data is always analysed as a group, not individually.",
      "Because global outliers only apply to numerical data, not time series signals."
    ],
    "correctOption": 1,
    "explanation": "The course explains: 'The low value by itself is not an outlier but its successive occurrence for long time is an outlier.' Individual occurrences of the low value appear elsewhere in the ECG signal and are normal. What makes it an outlier is the PATTERN — the same low value persisting abnormally long. This is the hallmark of a collective outlier: the pattern of the group is anomalous, not individual data points."
  },
  {
    "quizTitle": "Outlier Detection",
    "category": "Types of Outliers - Collective",
    "question": "A bank monitoring system detects an account making 30 wire transfers of $9,500 each on a single day. Each individual transfer of $9,500 is well within normal transaction limits. What type of outlier is this activity pattern?",
    "options": [
      "Global outlier — $9,500 is too close to the $10,000 reporting threshold.",
      "Contextual outlier — because wire transfers are contextually different from regular purchases.",
      "Collective outlier — 30 transfers of $9,500 collectively form an anomalous pattern (structured to avoid reporting thresholds), even though each individual transfer is normal.",
      "Not an outlier — all transactions are within legal limits."
    ],
    "correctOption": 2,
    "explanation": "This is a collective outlier. Each individual $9,500 transfer is normal. But 30 such transfers in one day form a collectively anomalous pattern (this real-world fraud technique is called 'structuring'). The COLLECTIVE behaviour of the group deviates from normal transaction patterns, even though no single transaction is individually unusual. Individual analysis would miss it; pattern analysis catches it."
  },
  {
    "quizTitle": "Outlier Detection",
    "category": "Types of Outliers - Collective",
    "question": "Which key question helps distinguish a COLLECTIVE outlier from individual global outliers?",
    "options": [
      "Is the individual value beyond 3 standard deviations from the mean?",
      "Are the individual data points anomalous on their own, or is the GROUP pattern as a whole anomalous?",
      "Does the outlier occur in a time series or a static dataset?",
      "Is the outlier within a specific geographic context?"
    ],
    "correctOption": 1,
    "explanation": "The defining question for collective outliers is whether the anomaly requires looking at a GROUP of points together. If individual points are normal but their collective pattern is not, it is a collective outlier. Global outliers are individually anomalous regardless of other points. If you need to analyse a sequence or cluster of points together to detect the anomaly, you are likely dealing with a collective outlier."
  },
  {
    "quizTitle": "Outlier Detection",
    "category": "Classifying Outlier Types",
    "question": "A blood pressure reading of 280/160 mmHg appears in a clinical dataset where all other readings are in the 90/60 to 140/90 range. Which type of outlier is this?",
    "options": [
      "Contextual outlier — because blood pressure context depends on patient history.",
      "Collective outlier — because high blood pressure usually persists across multiple readings.",
      "Global outlier — because 280/160 is far outside the entirety of the dataset range, regardless of any context.",
      "Not an outlier — extreme blood pressures occur in critically ill patients."
    ],
    "correctOption": 2,
    "explanation": "A blood pressure of 280/160 far outside the dataset range (90/60–140/90) is a global outlier (point anomaly). No context is needed — the value is outside the entirety of the dataset. While such a value is medically possible, it deviates significantly from the majority and would be flagged automatically. It is one data point deviating globally, not contextually or collectively."
  },
  {
    "quizTitle": "Outlier Detection",
    "category": "Classifying Outlier Types",
    "question": "A construction site's noise monitoring system records sound levels every hour. A reading of 95 decibels is recorded at 3 AM on a Tuesday. During work hours (7 AM – 5 PM), 95 decibels is completely normal. What type of outlier is this?",
    "options": [
      "Global outlier — because 95 decibels is an extreme sound level.",
      "Contextual outlier — because 3 AM is a context in which 95 decibels is anomalous, even though the same value is normal during work hours.",
      "Collective outlier — because noise violations often occur in clusters.",
      "Not an outlier — 95 decibels is within the dataset range."
    ],
    "correctOption": 1,
    "explanation": "This is a contextual outlier. 95 decibels is within the normal GLOBAL range of the dataset (it appears during work hours). But within the CONTEXT of 3 AM, the same value is anomalous — no construction should be occurring. The time context (3 AM) makes it deviate significantly from what is expected at that time. Without the time context, the value appears normal."
  },
  {
    "quizTitle": "Outlier Detection",
    "category": "Classifying Outlier Types",
    "question": "A cybersecurity system monitors network packet sizes. Individual packets of 64 bytes are completely normal and appear constantly. However, the system detects 10,000 consecutive packets all exactly 64 bytes in a 50-millisecond window — a pattern inconsistent with legitimate traffic. What type of outlier is this?",
    "options": [
      "Global outlier — because 10,000 packets is too many.",
      "Contextual outlier — because 50 milliseconds is a short time window.",
      "Collective outlier — individual 64-byte packets are normal, but their collective volume and pattern in 50ms deviates significantly from normal network traffic behaviour.",
      "Not an outlier — 64-byte packets are valid network traffic."
    ],
    "correctOption": 2,
    "explanation": "This is a collective outlier. Each 64-byte packet is individually normal. But 10,000 identical packets in 50ms collectively forms an anomalous pattern (a potential DDoS ping flood). The individual data objects are not outliers, but their collective pattern deviates significantly from the whole. This is exactly the definition of collective outliers from the course."
  },
  {
    "quizTitle": "Outlier Detection",
    "category": "Classifying Outlier Types",
    "question": "Match each scenario to the correct outlier type: (A) A single employee's salary shows $999,999,999 in a dataset where all others are under $200,000. (B) A power plant records normal vibration levels for 6 hours, but all readings are identical with zero variation. (C) A retail store shows $0 in sales every Sunday when the store is closed — but this Sunday $0 occurred on a Tuesday.",
    "options": [
      "A=Contextual, B=Global, C=Collective",
      "A=Global, B=Collective, C=Contextual",
      "A=Collective, B=Contextual, C=Global",
      "A=Global, B=Contextual, C=Collective"
    ],
    "correctOption": 1,
    "explanation": "A = Global outlier: $999,999,999 is far outside the entire dataset range — a point anomaly. B = Collective outlier: individually normal vibration readings, but zero variation across 6 hours is an anomalous PATTERN collectively. C = Contextual outlier: $0 on a Tuesday is anomalous in the CONTEXT of a normal business day (the store is open on Tuesdays but closed Sundays, so $0 on Tuesday deviates from the expected context)."
  },
  {
    "quizTitle": "Outlier Detection",
    "category": "Detection Methods Overview",
    "question": "The course covers three categories of outlier detection methods. Which of the following correctly lists all three?",
    "options": [
      "Supervised methods, Semi-supervised methods, Unsupervised methods",
      "Statistical Methods, Proximity-based methods, Clustering-based methods",
      "Gaussian methods, Euclidean methods, Tree-based methods",
      "Distance-based, Density-based, LOF-based methods"
    ],
    "correctOption": 1,
    "explanation": "The course lists three categories: (1) Statistical Methods (using probability distributions like Gaussian), (2) Proximity-based methods (including Distance-based and Density-based like LOF), and (3) Clustering-based methods. These represent different paradigms for how 'normal' vs 'anomalous' is defined — statistically, by neighbourhood proximity, or by cluster membership."
  },
  {
    "quizTitle": "Outlier Detection",
    "category": "Detection Methods Overview",
    "question": "Local Outlier Factor (LOF) belongs to which category of outlier detection methods?",
    "options": [
      "Statistical Methods — because it uses probability distributions",
      "Clustering-based methods — because it creates groups of similar points",
      "Proximity-based methods (specifically density-based) — because it measures the local density of a data point relative to its neighbours",
      "Supervised methods — because it requires labelled training data"
    ],
    "correctOption": 2,
    "explanation": "The course categorises LOF under Proximity-based methods, specifically density-based: 'Density-based (Ex. Local Outlier Factor - LOF).' LOF works by comparing a point's density to the density of its nearest neighbours — a proximity-based approach. This distinguishes it from statistical methods (which model global distribution) and clustering-based methods (which assign cluster membership)."
  },
  {
    "quizTitle": "Outlier Detection",
    "category": "Detection Methods Overview",
    "question": "Isolation Forest is a machine learning technique for outlier detection. Which broader category does it belong to?",
    "options": [
      "Statistical Methods — because it uses probability calculations",
      "Proximity-based distance methods — because it measures distances between points",
      "Machine Learning techniques built on decision trees — the course presents it under ML-based outlier detection",
      "Clustering-based methods — because it groups similar points together"
    ],
    "correctOption": 2,
    "explanation": "The course introduces Isolation Forest under 'Outlier Detection using Machine Learning techniques' and states it is 'built on the basis of decision trees.' It is an ML approach that uses random tree partitioning to isolate anomalies, distinguishing it from statistical methods (Gaussian) and proximity-based methods (LOF). It represents a fundamentally different approach: explicitly targeting anomalies rather than modelling normal data."
  },
  {
    "quizTitle": "Outlier Detection",
    "category": "Statistical Method - Gaussian",
    "question": "In the Gaussian statistical method for outlier detection, what role does the error margin epsilon (ε) play?",
    "options": [
      "It is the number of standard deviations from the mean.",
      "It sets the probability threshold — everything beyond this probability limit is classified as an outlier. For example, ε=1% means any value with less than 1% chance of occurring is an outlier.",
      "It is the minimum number of data points needed before outliers can be detected.",
      "It controls the number of clusters formed during outlier detection."
    ],
    "correctOption": 1,
    "explanation": "The course states: use 'an error margin epsilon to set the limit of what is an outlier. It is a probability at which everything beyond will be categorized as an outlier.' With ε=1%, 'everything that has a less than 1% chance of happening is an outlier.' Epsilon is a probability threshold that defines how extreme a value must be to be flagged as anomalous."
  },
  {
    "quizTitle": "Outlier Detection",
    "category": "Statistical Method - Gaussian",
    "question": "Using the Gaussian (statistical) outlier detection method with a 1% error margin, what is the step-by-step process for flagging outliers?",
    "options": [
      "Group data into clusters, then flag isolated points as outliers.",
      "Randomly select features, split data, and flag points near the root of an isolation tree.",
      "Calculate mean and standard deviation, determine the 99% probability limit (the range containing 99% of normal data), then flag any value outside that range as an outlier.",
      "Compare each point to its k nearest neighbours and flag points whose local density is much lower than their neighbours."
    ],
    "correctOption": 2,
    "explanation": "The course states the statistical method process: 'Calculate the mean and standard deviation. Then calculate the 99% limit. Then use the range as your classification.' With a 1% error margin, the 99% range defines what is normal. Values outside this range have less than 1% probability of occurring under the assumed normal distribution and are classified as outliers."
  },
  {
    "quizTitle": "Outlier Detection",
    "category": "Statistical Method - Gaussian",
    "question": "A manufacturing process records daily output quantities. The feature has mean=500 units and standard deviation=20 units. Using the Gaussian method with a 99% limit (approximately ±3 standard deviations), what is the upper boundary for 'normal' data?",
    "options": [
      "520 units (mean + 1 SD)",
      "540 units (mean + 2 SD)",
      "560 units (mean + 3 SD) — any value above this would be flagged as an outlier",
      "580 units (mean + 4 SD)"
    ],
    "correctOption": 2,
    "explanation": "The Gaussian distribution shows that ±3σ contains approximately 99.7% of data (the 99% limit). Upper boundary = mean + 3*SD = 500 + 3*20 = 500 + 60 = 560 units. Any daily output above 560 units would be flagged as an outlier. Similarly, output below 500 - 60 = 440 units would also be flagged. Values in [440, 560] are within the 99% normal range."
  },
  {
    "quizTitle": "Outlier Detection",
    "category": "Statistical Method - Gaussian",
    "question": "Using the same manufacturing dataset (mean=500, SD=20, 99% limit = ±3 SD so range [440, 560]), which of the following values would be classified as an OUTLIER?",
    "options": [
      "495 units (within [440, 560])",
      "512 units (within [440, 560])",
      "438 units (below the lower boundary of 440, so outside the 99% normal range)",
      "543 units (within [440, 560])"
    ],
    "correctOption": 2,
    "explanation": "With mean=500, SD=20, the 99% normal range is [440, 560] (using ±3 SD = ±60). Values 495, 512, and 543 are all within [440, 560] — not outliers. The value 438 is below the lower boundary of 440 (438 < 440), placing it outside the 99% range. It would be classified as an outlier using the Gaussian statistical method."
  },
  {
    "quizTitle": "Outlier Detection",
    "category": "Statistical Method - Gaussian",
    "question": "The Gaussian statistical method works well 'for each attribute independently but NOT when the data have a correlation.' What does this limitation mean in practice?",
    "options": [
      "It means the method can only be applied to datasets with fewer than 10 attributes.",
      "It means when two attributes are individually within normal ranges but their COMBINATION is unusual, the statistical method fails to detect the anomaly because it evaluates each feature separately.",
      "It means the method only works when data follows a perfect bell curve.",
      "It means the method cannot handle missing values in the dataset."
    ],
    "correctOption": 1,
    "explanation": "The course explicitly states: 'This works for each attribute independently but not when the data have a correlation.' If a car goes 200 km/h but uses 2L/100km (normally at that speed it should use 15L/100km), each attribute independently might be within normal range, but their COMBINATION is anomalous. The statistical method would miss this correlated anomaly because it evaluates speed and fuel consumption separately, not jointly."
  },
  {
    "quizTitle": "Outlier Detection",
    "category": "Statistical Method - Gaussian",
    "question": "A dataset tracks athletes: their weight (kg) and sprint speed (m/s). An athlete weighing 45 kg is within normal range. A sprint speed of 11 m/s is within normal range. But this 45 kg athlete running at 11 m/s is unusual — elite 45 kg athletes typically run much faster. Would the Gaussian statistical method flag this athlete?",
    "options": [
      "Yes — the statistical method would detect this multi-attribute anomaly.",
      "No — the Gaussian method evaluates weight and speed independently. Since 45 kg is normal AND 11 m/s is normal individually, the statistical method would NOT flag this combination as anomalous.",
      "Yes — any athlete running below 12 m/s would be flagged.",
      "No — the statistical method does not work on continuous features."
    ],
    "correctOption": 1,
    "explanation": "This illustrates the key limitation stated in the course: 'This works for each attribute independently but not when the data have a correlation.' Weight=45 kg is normal. Speed=11 m/s is normal. The statistical method evaluates each independently and would not flag this athlete. However, the COMBINATION (45 kg + slow for that weight) is anomalous — a correlated multi-attribute anomaly the statistical method cannot detect."
  },
  {
    "quizTitle": "Outlier Detection",
    "category": "Statistical Method - Gaussian",
    "question": "The Gaussian distribution shows that approximately what percentage of data falls within ±3 standard deviations of the mean?",
    "options": [
      "68.2%",
      "95.4%",
      "99.7%",
      "100.0%"
    ],
    "correctOption": 2,
    "explanation": "The Gaussian distribution diagram in the course shows: ±1σ = 68.2%, ±2σ = 95.4%, ±3σ = 99.7%. Using a 99% or 99.7% limit for outlier detection means flagging values that fall outside ±3σ — the approximately 0.3% of data at the extreme tails. Any value beyond ±3σ has a very low probability of occurring under a normal distribution and is classified as an outlier."
  },
  {
    "quizTitle": "Outlier Detection",
    "category": "LOF - Local Outlier Factor",
    "question": "What is the fundamental concept behind the Local Outlier Factor (LOF) method?",
    "options": [
      "It models the global data distribution and flags values beyond a probability threshold.",
      "It assigns each data point to a cluster and flags points not belonging to any cluster.",
      "It measures the local density deviation of a given data point with respect to its k nearest neighbours — a point is an outlier if its local density is much lower than its neighbours.",
      "It randomly partitions data using decision trees and identifies points that are isolated early."
    ],
    "correctOption": 2,
    "explanation": "The course defines LOF as 'finding anomalous data points by measuring the local deviation of a given data point with respect to its neighbors.' A point is flagged as an outlier if its local density is significantly lower than the density of its k nearest neighbours. This LOCAL comparison distinguishes LOF from global statistical methods that use the overall data distribution."
  },
  {
    "quizTitle": "Outlier Detection",
    "category": "LOF - Local Outlier Factor",
    "question": "How does LOF differ from the Gaussian statistical method in terms of what it compares a data point against?",
    "options": [
      "LOF compares against the global mean and standard deviation; Gaussian uses local neighbours.",
      "Both methods compare against the global data distribution — they differ only in threshold setting.",
      "LOF compares a point to its LOCAL k nearest neighbours (local density); the Gaussian method compares against the GLOBAL data distribution (mean and SD of the full dataset).",
      "LOF requires labelled training data; Gaussian does not."
    ],
    "correctOption": 2,
    "explanation": "This is the critical distinction. Gaussian/statistical: compares each point to the GLOBAL distribution (mean ± X standard deviations of the entire dataset). LOF: compares each point to its LOCAL neighbourhood (density of k nearest neighbours). LOF is local; Gaussian is global. This distinction is stated in the course: LOF uses 'local neighborhood (determined by k nearest neighbors) instead of the global data distribution.'"
  },
  {
    "quizTitle": "Outlier Detection",
    "category": "LOF - Local Outlier Factor",
    "question": "Due to LOF's local approach, it can identify outliers that the Gaussian statistical method would MISS. Why?",
    "options": [
      "LOF uses more complex mathematics than the Gaussian method.",
      "LOF can identify points that are anomalous relative to their LOCAL neighbourhood even if they are not globally unusual — enabling detection of outliers in datasets with varying densities where global thresholds would fail.",
      "LOF does not require any parameters, making it more flexible.",
      "LOF works on categorical data while Gaussian only works on numeric data."
    ],
    "correctOption": 1,
    "explanation": "The course: 'Due to the local approach, LOF is able to identify outliers in a data set that would not be outliers in another area of the data set.' If data has regions of different densities, a global threshold (like 3σ) might miss local outliers in dense regions. LOF measures relative to each point's own neighbourhood, detecting anomalies that only stand out locally."
  },
  {
    "quizTitle": "Outlier Detection",
    "category": "LOF - Local Outlier Factor",
    "question": "Point A is in a very dense cluster where all neighbours are 0.2 units away from each other. Point A itself is 4 units from its nearest neighbour in that cluster. Point B is in a sparse cluster where neighbours are typically 5-7 units apart, and Point B is 5 units from its nearest neighbour. Which point is more anomalous according to LOF, and why?",
    "options": [
      "Point B — because it has a greater absolute distance to its nearest neighbour.",
      "Neither — both points have similar absolute distances.",
      "Point A — because its distance of 4 units is dramatically larger RELATIVE to its dense neighbourhood (where everyone else is 0.2 units apart), indicating it is isolated from its local cluster.",
      "Point B — because sparse clusters always contain more outliers."
    ],
    "correctOption": 2,
    "explanation": "LOF measures RELATIVE local deviation, not absolute distance. Point A: its distance (4 units) is 20x greater than its neighbourhood's typical distance (0.2 units) — dramatically different from neighbours → HIGH LOF → likely outlier. Point B: its distance (5 units) is within the typical sparse neighbourhood range (5-7 units) — similar to neighbours → LOW LOF → not an outlier. The course: 'a point at a small distance to a very dense cluster is an outlier, while a point within a sparse cluster might exhibit similar distances to its neighbors.'"
  },
  {
    "quizTitle": "Outlier Detection",
    "category": "LOF - Local Outlier Factor",
    "question": "A city bus network shows most stops receiving 200-500 passengers per hour. Bus Stop #42 receives 15 passengers per hour. In the CITY-WIDE global analysis, 15 is not extreme. But Stop #42 is surrounded by stops receiving 400-500 passengers per hour. What does LOF tell us about Stop #42?",
    "options": [
      "Stop #42 is not an outlier — 15 passengers is within a globally acceptable range.",
      "Stop #42 is a global outlier because the value 15 is below average.",
      "Stop #42 is a LOCAL outlier according to LOF — its density (15 passengers/hour) is much lower than its immediate neighbourhood (400-500 passengers/hour), making it anomalous in its local context.",
      "LOF cannot be applied to transportation data."
    ],
    "correctOption": 2,
    "explanation": "LOF identifies local outliers — points anomalous relative to their neighbourhood, not globally. Stop #42 with 15 passengers might not trigger a global statistical alarm. But compared to its immediate neighbours (400-500 passengers/hour), Stop #42 has dramatically lower density — making it a LOCAL outlier according to LOF. This is exactly the type of outlier the course says LOF excels at detecting."
  },
  {
    "quizTitle": "Outlier Detection",
    "category": "LOF - Local Outlier Factor",
    "question": "A student says: 'LOF just compares a point to the average of the whole dataset.' Is this correct?",
    "options": [
      "Yes — LOF uses the global mean and standard deviation.",
      "No — LOF compares a point to its LOCAL neighbourhood, determined by k nearest neighbours. LOF explicitly uses local density relative to neighbours, NOT the global dataset average.",
      "Yes — LOF is a variation of the Gaussian statistical method.",
      "No — LOF uses clustering to group points before any comparison."
    ],
    "correctOption": 1,
    "explanation": "This is incorrect. The course: LOF finds 'outliers comparing to their local neighborhood (determined by k nearest neighbors) instead of the global data distribution.' LOF is fundamentally LOCAL — it uses k nearest neighbours to establish local density. Comparing to the global average is what the Gaussian statistical method does. This distinction is the whole point of LOF's design."
  },
  {
    "quizTitle": "Outlier Detection",
    "category": "LOF - Local Outlier Factor",
    "question": "What does a HIGH LOF score indicate about a data point?",
    "options": [
      "The point is highly typical and normal within its local neighbourhood.",
      "The point has much lower local density than its neighbours, meaning it is more isolated from its local neighbourhood — it is likely an outlier.",
      "The point belongs to the largest cluster in the dataset.",
      "The point is far from the global dataset mean."
    ],
    "correctOption": 1,
    "explanation": "A high LOF score indicates that a point's local density is much lower than its k nearest neighbours' densities. In other words, the point is in a sparse region relative to its surroundings — it is isolated from its neighbourhood. High LOF = likely outlier; LOF ≈ 1 = similar density to neighbours = normal point. The course states LOF finds 'anomalous data points by measuring the local deviation of a given data point with respect to its neighbors.'"
  },
  {
    "quizTitle": "Outlier Detection",
    "category": "Isolation Forest",
    "question": "What is the fundamental philosophy of Isolation Forest that distinguishes it from other outlier detection methods?",
    "options": [
      "It profiles normal data points in detail, then identifies any point that does not match the normal profile.",
      "It models the global distribution and flags points beyond a probability threshold.",
      "It explicitly identifies anomalies directly instead of profiling normal data points — it targets the outliers themselves, not the normal data.",
      "It clusters data and flags points that do not belong to any cluster."
    ],
    "correctOption": 2,
    "explanation": "The course states Isolation Forest 'explicitly identifies anomalies instead of profiling normal data points.' This is a fundamentally different approach: most methods model 'what is normal' and flag deviations. ISF instead asks 'how easy is this point to isolate?' Outliers are easy to isolate (few steps needed), while normal points, surrounded by many similar points, require many steps. It directly targets anomalies."
  },
  {
    "quizTitle": "Outlier Detection",
    "category": "Isolation Forest",
    "question": "What is the algorithmic foundation of Isolation Forest?",
    "options": [
      "Gaussian probability distributions and z-scores",
      "k-means clustering and centroid distances",
      "Decision trees — partitions are created by randomly selecting features and split values, similar to how decision trees split data",
      "k-nearest neighbours and local density calculations"
    ],
    "correctOption": 2,
    "explanation": "The course states Isolation Forest is 'built on the basis of decision trees.' Like decision trees, it recursively partitions data. However, unlike supervised decision trees (which split based on information gain/Gini index), ISF creates partitions RANDOMLY — randomly selecting a feature and a random split value — to isolate data points."
  },
  {
    "quizTitle": "Outlier Detection",
    "category": "Isolation Forest",
    "question": "How does Isolation Forest create partitions during its tree-building process?",
    "options": [
      "It selects the feature with the highest information gain and splits at the median value.",
      "It first randomly selects a feature, then randomly selects a split value between the minimum and maximum of that feature.",
      "It clusters data points first, then creates boundaries between clusters.",
      "It selects features based on their correlation with known outlier patterns."
    ],
    "correctOption": 1,
    "explanation": "The course specifies: 'partitions are created by first randomly selecting a feature and then selecting a random split value between the minimum and maximum value of the selected feature.' This random partitioning (no information gain calculation) is what makes ISF fast and makes outliers emerge naturally — their isolation at random split points happens quickly because they are already 'different' from most data."
  },
  {
    "quizTitle": "Outlier Detection",
    "category": "Isolation Forest",
    "question": "In Isolation Forest, where in the tree structure are outliers expected to be found, and why?",
    "options": [
      "Closer to the LEAVES of the tree — because they require many splits to be fully described.",
      "Closer to the ROOT of the tree with fewer splits necessary — because outliers are different from most data and are therefore isolated quickly by random partitioning.",
      "At the middle depth of the tree — because they are moderately unusual.",
      "Distributed randomly throughout the tree — their depth has no meaning."
    ],
    "correctOption": 1,
    "explanation": "The course: outliers 'should be identified closer to the root of the tree with fewer splits necessary.' Because outliers are distinctly different from most data points, random partitions separate them from the majority quickly — very few random cuts are needed to isolate an outlier alone. Normal points, densely surrounded by similar points, need many more random splits before being isolated. Fewer splits = closer to root = outlier."
  },
  {
    "quizTitle": "Outlier Detection",
    "category": "Isolation Forest",
    "question": "A dataset has 1,000 customers with typical transaction counts between 1 and 50 per month. One customer makes 4,500 transactions per month. In an Isolation Forest, how quickly would this customer be isolated compared to a typical customer making 30 transactions?",
    "options": [
      "Both would be isolated at approximately the same tree depth.",
      "The typical customer (30 transactions) would be isolated faster because lower values are easier to split.",
      "The anomalous customer (4,500 transactions) would be isolated much faster (closer to root) because random splits quickly separate this extreme value from the vast majority of data in the 1-50 range.",
      "Isolation Forest cannot detect single-feature outliers."
    ],
    "correctOption": 2,
    "explanation": "The outlier (4,500 transactions) is isolated quickly because when a random split is made anywhere in the 1-50 range, it immediately separates this extreme point from all 999 normal customers. Very few such random splits are needed. The typical customer (30 transactions) is surrounded by hundreds of similar points in 1-50 range, requiring many random splits to eventually isolate it alone. Fewer splits = closer to root = outlier identified."
  },
  {
    "quizTitle": "Outlier Detection",
    "category": "Isolation Forest",
    "question": "Why does Isolation Forest NOT need to model or learn what 'normal' data looks like?",
    "options": [
      "Because it uses Gaussian distribution to automatically model normal data.",
      "Because it relies on labelled training data to learn the boundary between normal and anomalous.",
      "Because ISF directly targets isolation of individual data points — anomalies are easier to isolate (fewer random splits) than normal points, so the algorithm identifies outliers without ever needing to understand or model what normal looks like.",
      "Because all machine learning methods avoid modelling normal data."
    ],
    "correctOption": 2,
    "explanation": "The course: ISF 'explicitly identifies anomalies instead of profiling normal data points.' ISF works by random partitioning — the key observation is that outliers are isolated in fewer steps, while normal points (embedded among many similar points) require many steps. This difference in isolation path length is all the algorithm needs. It never needs to model 'what is normal' — the ease of isolation signals anomaly."
  },
  {
    "quizTitle": "Outlier Detection",
    "category": "Isolation Forest",
    "question": "Isolation Forest and Random Forest are both tree-based ensemble methods. What is the fundamental difference in what they are trying to accomplish?",
    "options": [
      "Random Forest and Isolation Forest are identical — both detect outliers using decision trees.",
      "Random Forest is supervised classification (learning to predict class labels from labelled training data); Isolation Forest is unsupervised outlier detection (identifying anomalies by ease of random isolation, no labels required).",
      "Isolation Forest uses information gain to split; Random Forest uses random splits.",
      "Random Forest requires more trees than Isolation Forest to produce reliable results."
    ],
    "correctOption": 1,
    "explanation": "Both use tree-based structures, but their goals are opposite. Random Forest: supervised learning — trains on labelled data to build a classifier that predicts class labels (e.g., spam/not-spam). Isolation Forest: unsupervised outlier detection — no labels needed, uses random partitioning to identify points that are isolated unusually quickly. ISF is 'built on the basis of decision trees' but serves a completely different analytical purpose."
  },
  {
    "quizTitle": "Outlier Detection",
    "category": "Isolation Forest",
    "question": "An analyst runs an Isolation Forest on a dataset and examines the resulting trees. Data point P is isolated at depth 2 (very close to the root). Data point Q is isolated at depth 18 (deep in the tree). Which point is more likely an outlier, and why?",
    "options": [
      "Q — deeper nodes contain more refined information about the data.",
      "P — isolated at depth 2 means it required only 2 random splits to be separated from all others, indicating it is very different from the majority and likely an outlier.",
      "Both are equally likely to be outliers — isolation depth is not related to anomaly score.",
      "Neither — Isolation Forest only works when average depth is above 10."
    ],
    "correctOption": 1,
    "explanation": "The course: outliers 'should be identified closer to the root of the tree with fewer splits necessary.' Point P (depth 2, 2 splits needed) is very likely an outlier — only 2 random partitions were enough to completely isolate it from all other data, meaning it is drastically different from the majority. Point Q (depth 18, 18 splits needed) is likely a normal point, deeply embedded among many similar data points requiring extensive random splitting to isolate."
  },
  {
    "quizTitle": "Outlier Detection",
    "category": "Method Comparison",
    "question": "A data analyst has a dataset of house prices and sizes across a city. The dataset has a bimodal distribution (two price clusters: affordable homes and luxury homes). She suspects outliers may exist within EACH cluster. Which method is MOST appropriate, and why?",
    "options": [
      "Gaussian statistical method — because it sets a single global 99% threshold for the entire dataset.",
      "Isolation Forest — because random partitioning works best with bimodal distributions.",
      "LOF (Local Outlier Factor) — because it measures local density relative to neighbours, detecting outliers within each cluster independently without being confused by the bimodal global distribution.",
      "Clustering-based methods — because the data is already in two clusters."
    ],
    "correctOption": 2,
    "explanation": "LOF is ideal here because it is a local method. A single global Gaussian threshold would be confused by the bimodal distribution (the two clusters have different means). LOF evaluates each point relative to its k nearest neighbours within its local region — it can detect outliers within the affordable-home cluster separately from outliers within the luxury-home cluster. The course: LOF 'is able to identify outliers in a data set that would not be outliers in another area of the data set.'"
  },
  {
    "quizTitle": "Outlier Detection",
    "category": "Method Comparison",
    "question": "A cybersecurity team wants to detect unusual network connections in real-time. The dataset has millions of connections with features that are correlated (e.g., packet size and connection duration tend to increase together). The statistical method was tried and failed to catch sophisticated attacks. Which method would address the statistical method's key limitation in this scenario?",
    "options": [
      "A stricter Gaussian threshold (ε = 0.1% instead of 1%).",
      "LOF or Isolation Forest — both handle multi-attribute, correlated data where the statistical method fails because it only evaluates each attribute independently.",
      "Applying the statistical method to each attribute simultaneously.",
      "Increasing the dataset size before applying the statistical method."
    ],
    "correctOption": 1,
    "explanation": "The course states the statistical method's limitation: 'works for each attribute independently but not when the data have a correlation.' Sophisticated attacks might have each individual feature appearing normal but an unusual COMBINATION. LOF compares the overall multi-dimensional density of a point to its neighbours. ISF partitions across all features randomly. Both naturally handle correlated, multi-dimensional data where the statistical method fails."
  },
  {
    "quizTitle": "Outlier Detection",
    "category": "Method Comparison",
    "question": "A team is deploying outlier detection on a massive dataset with 50 million records and hundreds of features. They need a scalable method. Which characteristic of Isolation Forest makes it attractive for large-scale applications?",
    "options": [
      "ISF requires fewer data preprocessing steps than LOF.",
      "ISF evaluates each feature independently, like the Gaussian method, which is faster.",
      "ISF directly targets anomalies through random partitioning — it does not need to compute distances between all pairs of points (like distance-based methods) or model the full data distribution (like statistical methods), making it computationally efficient at scale.",
      "ISF only requires 10 trees regardless of dataset size."
    ],
    "correctOption": 2,
    "explanation": "ISF's random partitioning approach is computationally efficient. Distance-based and LOF methods require computing distances between many points (expensive for 50M records). Statistical methods require estimating full distributions. ISF uses random trees that isolate points quickly — anomalies surface with very few splits. The course emphasises that ISF identifies anomalies directly, which is also computationally advantageous compared to profiling every normal data point."
  },
  {
    "quizTitle": "Outlier Detection",
    "category": "Method Comparison",
    "question": "A student argues: 'Since Isolation Forest is built on decision trees, which we studied for classification, it must work the same way — splitting based on information gain to classify data.' What is wrong with this reasoning?",
    "options": [
      "Nothing is wrong — ISF uses information gain just like ID3.",
      "ISF uses Gini Index instead of information gain, which is the only difference.",
      "ISF is fundamentally different from classification decision trees: it uses RANDOM feature selection and RANDOM split values (not information gain), with the goal of isolating individual data points to find anomalies, not classifying instances into labelled categories.",
      "ISF and classification trees are identical — they just use different training datasets."
    ],
    "correctOption": 2,
    "explanation": "While ISF is 'built on the basis of decision trees,' it works very differently from ID3/CART. Classification trees: use information gain or Gini index to select the BEST feature/split for separating labelled classes. ISF: randomly selects a feature and a random split value (not based on any criterion), aiming to ISOLATE individual data points. The purpose (anomaly detection vs. classification) and method (random vs. informed splitting) are fundamentally different."
  },
  {
    "quizTitle": "Outlier Detection",
    "category": "Method Comparison",
    "question": "A team needs to detect collectively anomalous patterns — for example, a sequence of individually normal transactions that collectively represent money laundering. Which approach is MOST suited for detecting collective outliers?",
    "options": [
      "Global statistical methods (Gaussian) applied to each transaction individually.",
      "LOF applied to individual transaction amounts.",
      "Methods that analyse patterns over sequences or groups of data points — such as clustering-based methods or pattern-aware approaches, since statistical and distance-based methods operating on individual points would miss the collective pattern.",
      "Isolation Forest applied to individual transactions."
    ],
    "correctOption": 2,
    "explanation": "Collective outliers require analysis of the GROUP pattern, not individual points. Individual-point methods (Gaussian, LOF, ISF) evaluate each point independently or relative to local neighbours — they would miss anomalies where individual points are normal but the collective sequence is not. Detecting collective outliers requires methods that consider the pattern of multiple data objects together, such as sequence analysis or clustering-based approaches."
  },
  {
    "quizTitle": "Outlier Detection",
    "category": "Applied Scenarios",
    "question": "A real estate agency has 10,000 property records. Most properties are priced $200,000–$800,000. Three records show prices of $1, $2, and $3 respectively. Each individual price is clearly abnormal. What type of outlier situation is this, and which detection method category would most easily identify it?",
    "options": [
      "Collective outlier detected by LOF.",
      "Contextual outlier detected by Gaussian method.",
      "Global outliers (each individual price is far outside the global dataset range) easily detected by statistical methods — prices of $1, $2, and $3 are so extreme they would be beyond any reasonable probability threshold.",
      "Collective outlier requiring pattern analysis."
    ],
    "correctOption": 2,
    "explanation": "These are global outliers — each price ($1, $2, $3) individually is far outside the entirety of the dataset ($200K–$800K). Any statistical method using the mean and 99% limit would immediately flag these as outliers since their probability under the normal distribution of property prices is essentially zero. They are individually, globally anomalous — classic point anomalies."
  },
  {
    "quizTitle": "Outlier Detection",
    "category": "Applied Scenarios",
    "question": "An environmental monitoring system tracks CO2 levels at various forest ranger stations. Most stations are in remote areas with CO2 levels between 380-400 ppm. One station near a highway records 450 ppm, which is anomalous compared to forest stations but completely normal for an urban context. What type of outlier is this, and what is the key insight?",
    "options": [
      "Global outlier — because 450 ppm exceeds 400 ppm.",
      "Contextual outlier — the station near a highway exists in a different CONTEXT (urban proximity) where 450 ppm is expected, but in the context of remote forest stations, it deviates significantly from what is expected.",
      "Collective outlier — because multiple readings at 450 ppm form a pattern.",
      "Not an outlier — 450 ppm is scientifically measurable and valid."
    ],
    "correctOption": 1,
    "explanation": "This is a contextual outlier. 450 ppm is not globally extreme (it is within a plausible real-world range). But in the CONTEXT of remote forest stations (where 380-400 ppm is the norm), 450 ppm deviates significantly from what is expected. The context (remote forest station vs. highway-adjacent station) determines whether 450 ppm is anomalous. This parallels the course example of -30.7°C being an outlier only in the June context."
  },
  {
    "quizTitle": "Outlier Detection",
    "category": "Applied Scenarios",
    "question": "An analyst runs LOF on a dataset of customer purchasing frequencies. Customer A visits the store 2 times/month and is surrounded by neighbours visiting 1-3 times/month. Customer B visits 2 times/month but is surrounded by neighbours visiting 50-80 times/month. Which customer does LOF flag as more anomalous?",
    "options": [
      "Customer A — because 2 visits is an absolute outlier.",
      "Both are flagged equally — LOF uses the absolute value of 2 visits for both.",
      "Customer B — LOF measures RELATIVE to local neighbourhood. Customer B's 2 visits is far below its neighbours (50-80 visits), giving it a much higher LOF score.",
      "Neither — both customers visit 2 times/month which is within a normal range."
    ],
    "correctOption": 2,
    "explanation": "LOF is relative to the local neighbourhood. Customer A: 2 visits among neighbours with 1-3 visits — similar to neighbours, LOW LOF, not an outlier. Customer B: 2 visits among neighbours with 50-80 visits — dramatically different from neighbourhood, HIGH LOF, flagged as an outlier. Same absolute value (2 visits), but opposite LOF scores because of different local contexts. This demonstrates why LOF outperforms global methods for varying-density data."
  },
  {
    "quizTitle": "Outlier Detection",
    "category": "Applied Scenarios",
    "question": "A data team is choosing between statistical (Gaussian), LOF, and Isolation Forest for detecting anomalies in a healthcare dataset where patient vital signs (heart rate, blood pressure, temperature) are correlated. The dataset also has varying density in different patient subgroups (elderly, children, adults). Which method is LEAST suitable, and why?",
    "options": [
      "LOF — it cannot handle multiple features.",
      "Isolation Forest — it does not work well with correlated data.",
      "Gaussian statistical method — it works on each attribute independently and fails when attributes are correlated, missing anomalies that only appear in the combination of vitals.",
      "All three methods are equally suitable for this scenario."
    ],
    "correctOption": 2,
    "explanation": "The Gaussian/statistical method is least suitable here for two reasons: (1) it works on each attribute independently and fails when data have correlation (correlated vitals like high HR + low BP + high temperature might collectively indicate sepsis but each individually might be within range), and (2) it uses a global threshold that would not account for different normal ranges across patient subgroups. LOF handles varying density; ISF handles multivariate correlations through tree partitioning."
  }
]
