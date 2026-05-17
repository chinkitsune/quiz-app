// data/questions/bi-introduction-to-data-analytics.js

module.exports = 
[
  {
    "quizTitle": "Introduction to Data Analytics",
    "category": "Data Analytics Definition",
    "question": "A city transit authority collects GPS pings from every bus every 30 seconds, producing millions of records per day. A single operations manager cannot spot patterns just by reading the raw logs. What does data analytics offer in this situation?",
    "options": [
      "It replaces the GPS devices with cheaper sensors.",
      "It aggregates the large dataset to surface patterns — such as chronic delay hotspots — that are invisible in the raw data.",
      "It stores the data in a more compressed file format.",
      "It deletes old records so the manager has less to read."
    ],
    "correctOption": 1,
    "explanation": "Data Analytics is defined as aggregating large datasets to detect underlying patterns not visible in raw data. The value here is not storage or compression — it is the extraction of insight (delay hotspots) from volume that a human cannot manually process."
  },
  {
    "quizTitle": "Introduction to Data Analytics",
    "category": "Data Analytics Definition",
    "question": "A national pharmacy chain records every prescription filled across 800 locations. A director wants to reduce medication waste. Which statement BEST describes what data analytics can do for this goal?",
    "options": [
      "Replace pharmacists with automated systems.",
      "Identify purchasing patterns across locations to predict which medications will expire unsold in which regions.",
      "Scan individual prescriptions for spelling errors.",
      "Generate a list of all prescriptions filled this week."
    ],
    "correctOption": 1,
    "explanation": "Data analytics surfaces patterns across large datasets. Predicting regional expiry rates from historical fill patterns is exactly this — it produces insight (waste reduction opportunity) from aggregated data. Listing recent prescriptions or spell-checking are not analytics tasks."
  },
  {
    "quizTitle": "Introduction to Data Analytics",
    "category": "Data Analytics Applications",
    "question": "A municipal utility company wants to use analytics to lower electricity consumption in the city. Which application is the MOST direct example of this goal?",
    "options": [
      "Building a website where residents can pay their bills online.",
      "Analyzing smart meter data to identify neighbourhoods with peak usage times and sending targeted conservation tips.",
      "Installing new transformers in high-density areas.",
      "Hiring more meter readers to reduce estimate-based billing."
    ],
    "correctOption": 1,
    "explanation": "The course notes that data analytics insights can 'lower electricity usage.' Analysing smart meter data to find peak usage patterns and act on them is a direct application. Billing websites, hardware upgrades, and meter readers are operational changes, not data analytics."
  },
  {
    "quizTitle": "Introduction to Data Analytics",
    "category": "Open Data",
    "question": "A student wants to build a project analysing traffic collisions in Canada's capital. Which type of resource should they look for FIRST, given the trend described in the course material?",
    "options": [
      "A paid subscription to a private mapping company's API.",
      "A publicly available government open data portal.",
      "Social media posts tagged at intersections.",
      "Internal police department spreadsheets obtained through a friend."
    ],
    "correctOption": 1,
    "explanation": "The course highlights that governments are increasingly adopting openness policies, making public data freely available on the internet (e.g., Canada Open Government, Ottawa Open Data). Open data portals are the first place to look for civic datasets — they are free, structured, and legally available."
  },
  {
    "quizTitle": "Introduction to Data Analytics",
    "category": "Open Data",
    "question": "Which of the following BEST explains WHY governments publish open data portals?",
    "options": [
      "To allow companies to sell the data to consumers.",
      "To adopt openness policies that make public data freely available, enabling transparency and enabling citizens and researchers to derive insights.",
      "To replace traditional census collection methods.",
      "To reduce the need for government data scientists."
    ],
    "correctOption": 1,
    "explanation": "The course states that 'governments are starting to adopt openness policies of making public data freely available on the internet.' The purpose is transparency and enabling broader use — not commercialization, census replacement, or workforce reduction."
  },
  {
    "quizTitle": "Introduction to Data Analytics",
    "category": "CRISP-DM Overview",
    "question": "A data science team at a logistics company is building a route optimization model. They discover mid-project that the GPS data from trucks is only 60% complete. According to CRISP-DM, which phase should have caught this problem?",
    "options": [
      "Modeling",
      "Deployment",
      "Data Understanding",
      "Evaluation"
    ],
    "correctOption": 2,
    "explanation": "The Data Understanding phase in CRISP-DM specifically includes verifying data quality — checking for missing data, noise, and inconsistencies. Catching a 60% completeness issue is exactly this phase's job. If it reaches Modeling, the team has skipped crucial quality checks."
  },
  {
    "quizTitle": "Introduction to Data Analytics",
    "category": "CRISP-DM Overview",
    "question": "A retail analytics project has built a model that predicts weekly produce orders. Before releasing the model to store managers, the team verifies it against the original goal of reducing food spoilage by 15%. Which CRISP-DM phase is this?",
    "options": [
      "Data Preparation",
      "Business Understanding",
      "Modeling",
      "Evaluation"
    ],
    "correctOption": 3,
    "explanation": "The Evaluation phase asks 'which model best meets the business objectives?' — it checks whether the built model satisfies the original business criteria. Comparing model performance against the 15% spoilage-reduction goal is exactly this phase."
  },
  {
    "quizTitle": "Introduction to Data Analytics",
    "category": "CRISP-DM Overview",
    "question": "Which of the following BEST describes why CRISP-DM is depicted as a cycle rather than a straight line?",
    "options": [
      "Because data projects always fail and must restart.",
      "Because insights gained in later phases (e.g., Evaluation) often reveal a need to revisit earlier phases (e.g., Data Preparation or Business Understanding).",
      "Because all six phases run simultaneously.",
      "Because businesses require the same report every year."
    ],
    "correctOption": 1,
    "explanation": "CRISP-DM is iterative. For example, poor evaluation results might reveal that the wrong data was prepared, which sends the team back to Data Understanding or Data Preparation. The circular design reflects this real-world iteration, not failure or parallelism."
  },
  {
    "quizTitle": "Introduction to Data Analytics",
    "category": "Business Understanding",
    "question": "A hospital administrator asks a data team to 'do something useful with our patient data.' What should the team do FIRST under CRISP-DM's Business Understanding phase?",
    "options": [
      "Start collecting all available patient records immediately.",
      "Run a clustering algorithm on the data to discover patterns.",
      "Work with the administrator to determine specific, measurable business objectives — such as reducing readmission rates by 10% within 6 months.",
      "Deploy a dashboard for all departments."
    ],
    "correctOption": 2,
    "explanation": "Business Understanding starts with determining business objectives — identifying what you want to accomplish from a business perspective. A vague instruction like 'do something useful' must be converted into a specific, measurable goal before any data work begins."
  },
  {
    "quizTitle": "Introduction to Data Analytics",
    "category": "Business Understanding",
    "question": "During a project kick-off for a food delivery startup, the analytics team discovers that the primary data engineer is on maternity leave and the backup server hosting order history crashed six months ago. Which Business Understanding sub-task addresses these discoveries?",
    "options": [
      "Determine Data Mining Goals",
      "Assess Situation — determining resource availability and risks",
      "Produce Project Plan",
      "Verify Data Quality"
    ],
    "correctOption": 1,
    "explanation": "Assessing the situation means determining availability of resources, assessing risks, and thinking about contingency plans. A missing engineer and lost historical data are exactly the kind of risks and resource gaps this sub-task is designed to surface early."
  },
  {
    "quizTitle": "Introduction to Data Analytics",
    "category": "Business Understanding",
    "question": "A telecom company wants to predict customer churn. The analytics team converts this into a measurable goal: 'Identify customers with >70% churn probability 30 days before cancellation.' This conversion belongs to which Business Understanding sub-task?",
    "options": [
      "Produce Project Plan",
      "Collect Initial Data",
      "Determine Data Mining Goals",
      "Explore Data"
    ],
    "correctOption": 2,
    "explanation": "'Determine Data Mining Goals' translates the business objective into a precise, technical, measurable target — in this case, a probability threshold and time horizon. This sub-task bridges the business problem with the technical analytics work that follows."
  },
  {
    "quizTitle": "Introduction to Data Analytics",
    "category": "Data Understanding",
    "question": "An analyst receives a dataset of 500,000 customer records from a subscription service. She notices that the 'subscription_start_date' column has values in three different formats: 'YYYY-MM-DD', 'MM/DD/YYYY', and plain year only. Which Data Understanding sub-task addresses this finding?",
    "options": [
      "Collect Initial Data",
      "Build Model",
      "Verify Data Quality — identifying inconsistent representation",
      "Format Data"
    ],
    "correctOption": 2,
    "explanation": "Verifying data quality involves checking for missing data, errors, and inconsistent representation. Three date formats in one column is a classic inconsistent representation issue that must be flagged here before proceeding to Data Preparation."
  },
  {
    "quizTitle": "Introduction to Data Analytics",
    "category": "Data Understanding",
    "question": "An analyst plots a histogram of daily sales from a chain of garden centres and notices that sales in a particular region spike dramatically every spring. Which Data Understanding sub-task is she performing?",
    "options": [
      "Describe Data",
      "Explore Data — visualizing data to identify relationships and patterns",
      "Clean Data",
      "Select Modeling Technique"
    ],
    "correctOption": 1,
    "explanation": "Exploring data involves visualizing data and identifying relationships — like a seasonal spring spike. The goal is to understand what the data reveals before committing to a modeling approach. Describing data is more about volume, format, and coding schemes, not pattern discovery."
  },
  {
    "quizTitle": "Introduction to Data Analytics",
    "category": "Data Understanding",
    "question": "A data scientist receives sales records from four regional offices. She checks that each file has the expected number of rows, that the column names match across files, and that product codes follow the same naming convention. Which sub-task is this?",
    "options": [
      "Explore Data",
      "Describe Data — checking quantity, format, and consistent coding schemes",
      "Integrate Data",
      "Assess Situation"
    ],
    "correctOption": 1,
    "explanation": "Describing data means checking quantity, data format, and whether coding schemes are consistent. Verifying row counts, column names, and product code conventions across four files is exactly this — a structural inventory before deeper exploration begins."
  },
  {
    "quizTitle": "Introduction to Data Analytics",
    "category": "Data Preparation",
    "question": "A healthcare dataset merges records from three hospital systems. One system records patient weight in pounds, another in kilograms, and the third in stones. Before modeling, all records must use the same unit. Which Data Preparation sub-task handles this?",
    "options": [
      "Clean Data",
      "Construct Data",
      "Format Data — re-formatting data into a consistent representation",
      "Integrate Data"
    ],
    "correctOption": 2,
    "explanation": "Format Data involves re-formatting data as necessary, including unit standardization (like metric vs. imperial). Converting all weights to kilograms is a formatting transformation, not cleaning (no errors) or construction (no new attributes)."
  },
  {
    "quizTitle": "Introduction to Data Analytics",
    "category": "Data Preparation",
    "question": "A data team merges online order records with in-store purchase records from the same retail chain to create a single unified customer purchase history. Which Data Preparation sub-task is this?",
    "options": [
      "Clean Data",
      "Select Data",
      "Construct Data",
      "Integrate Data — creating new datasets by combining data from multiple sources"
    ],
    "correctOption": 3,
    "explanation": "Integrate Data means combining data from multiple sources into a new, unified dataset. Merging online and in-store records is a textbook integration task. Cleaning addresses quality issues; selecting decides what to include; constructing derives new attributes."
  },
  {
    "quizTitle": "Introduction to Data Analytics",
    "category": "Data Preparation",
    "question": "An e-commerce dataset includes raw order timestamps. The analyst creates a new column called 'days_since_last_purchase' calculated from the timestamp and today's date. Which Data Preparation sub-task is this?",
    "options": [
      "Clean Data",
      "Construct Data — deriving new attributes from existing ones",
      "Format Data",
      "Select Data"
    ],
    "correctOption": 1,
    "explanation": "Constructing data means deriving new attributes. 'Days since last purchase' is computed from an existing column — it is a derived feature. This is not cleaning (no errors being fixed) or formatting (no unit changes), but construction of new information."
  },
  {
    "quizTitle": "Introduction to Data Analytics",
    "category": "Data Preparation",
    "question": "A machine learning project for predicting student dropout only uses attendance records, grades, and financial aid status. The team decides to exclude social media data collected in a pilot, documenting that social data is too noisy and ethically sensitive. Which sub-task is this?",
    "options": [
      "Clean Data",
      "Format Data",
      "Select Data — determining which data to use and documenting reasons for inclusion/exclusion",
      "Integrate Data"
    ],
    "correctOption": 2,
    "explanation": "Selecting data means deciding which data will be included or excluded and documenting the reasons. Choosing to drop social media data with a recorded rationale is exactly this sub-task. Documentation is critical so decisions can be reviewed or audited."
  },
  {
    "quizTitle": "Introduction to Data Analytics",
    "category": "Data Preparation — Lengthiest Phase",
    "question": "A project manager is planning a 6-month machine learning project. Based on what CRISP-DM teaches about data preparation, where should she allocate the LARGEST chunk of team time?",
    "options": [
      "Modeling — because tuning algorithms is the most complex task.",
      "Evaluation — because testing takes longer than building.",
      "Data Preparation — because it is the lengthiest process in a data project.",
      "Deployment — because production systems require extensive configuration."
    ],
    "correctOption": 2,
    "explanation": "The course explicitly states that Data Preparation is the lengthiest process. In practice, industry estimates that 60–80% of project time is spent here — cleaning, integrating, formatting, and selecting data. Underestimating this phase is one of the most common mistakes in data projects."
  },
  {
    "quizTitle": "Introduction to Data Analytics",
    "category": "Data Preparation — Outlier Removal",
    "question": "A gym chain analyses member check-in data to understand average visits per month. They notice that one location shows 0 check-ins for every Monday in January because the building was under renovation and the scanner was offline. What should the team do with this data?",
    "options": [
      "Include it — all data is valuable.",
      "Remove these records as outliers because the $0-equivalent readings distort the true average in a way unrelated to member behaviour.",
      "Replace every Monday with the national average.",
      "Change the model to ignore Mondays permanently."
    ],
    "correctOption": 1,
    "explanation": "The course notes that outlier removal handles data 'far outside the average' for contextual reasons — like a store showing $0 sales on regional holidays. The scanner-offline zeros are not true behaviour; they are artefacts that would distort the model. Removing them is proper data preparation."
  },
  {
    "quizTitle": "Introduction to Data Analytics",
    "category": "Data Preparation — Outlier Removal",
    "question": "A university is building a model to predict final exam scores. 12 students registered late and were never officially enrolled but remain in the system with 0% on all assessments. How should the data team handle these records?",
    "options": [
      "Keep them — zeros are valid scores.",
      "Replace their zeros with the class median.",
      "Remove them as outliers because they represent an administrative error, not actual student performance.",
      "Flag them and leave the decision to the model."
    ],
    "correctOption": 2,
    "explanation": "The course gives an analogous example: students who register but don't drop get 0 for everything, lowering the class average. These are outliers caused by an administrative artefact, not genuine performance data. Removing them makes the model reflect actual enrolled student behaviour."
  },
  {
    "quizTitle": "Introduction to Data Analytics",
    "category": "Data Preparation — Cleaning",
    "question": "A shipping company's address database contains these entries for the same street: '100 King St.', '100 King Street', and '100 king st'. Before analysis, these must be standardized. Which data preparation task handles this?",
    "options": [
      "Outlier removal",
      "Variable transformation",
      "Cleaning and filtering — resolving inconsistent representation of the same entity",
      "Constructing new attributes"
    ],
    "correctOption": 2,
    "explanation": "Cleaning and filtering resolves duplicate and inconsistently represented data — the course's example is 'Woodroffe Ave, Woodroffe, Woodroffe Avenue should all be the same.' Street address variants are the same problem: they represent one entity written different ways and must be standardized."
  },
  {
    "quizTitle": "Introduction to Data Analytics",
    "category": "Data Preparation — Variable Transformation",
    "question": "A dataset from a cross-border study has patient heights in centimetres (from Canadian clinics) and inches (from US clinics). A researcher converts all heights to centimetres before modeling. Which data preparation concept does this represent?",
    "options": [
      "Outlier removal",
      "Cleaning and filtering",
      "Variable transformation — changing how variables are represented",
      "Data integration"
    ],
    "correctOption": 2,
    "explanation": "Variable transformation means changing how variables are represented, such as converting between metric and imperial. Converting inches to centimetres is a unit transformation — the value changes but the underlying measurement (height) remains the same."
  },
  {
    "quizTitle": "Introduction to Data Analytics",
    "category": "Data Matrix",
    "question": "A dataset tracking airline flights has one row per flight and columns for departure airport, arrival airport, distance (km), delay (minutes), and whether the flight was cancelled. In data analytics terminology, what are the ROWS called?",
    "options": [
      "Attributes",
      "Features",
      "Instances",
      "Labels"
    ],
    "correctOption": 2,
    "explanation": "In a data matrix, rows are called instances (also sometimes called records or observations). Each row represents one data point — in this case, one flight. Columns are called variables, attributes, or features."
  },
  {
    "quizTitle": "Introduction to Data Analytics",
    "category": "Data Matrix",
    "question": "In a data matrix used for product quality control, what do the COLUMNS represent?",
    "options": [
      "Instances — individual products inspected",
      "Variables, attributes, or features — properties measured for each product",
      "Labels — the class each product belongs to",
      "Indices — the order in which products were inspected"
    ],
    "correctOption": 1,
    "explanation": "Columns in a data matrix are called variables, attributes, or features. They represent the properties or measurements recorded for each instance. For a product, columns might be weight, dimensions, temperature at production, and defect label."
  },
  {
    "quizTitle": "Introduction to Data Analytics",
    "category": "Data Matrix",
    "question": "A warehouse analyst receives a data matrix with 10,000 rows and 7 columns. How should she interpret this?",
    "options": [
      "10,000 variables and 7 instances.",
      "10,000 instances (individual records) and 7 attributes (properties measured per record).",
      "10,000 labels and 7 features.",
      "10,000 targets and 7 predictors."
    ],
    "correctOption": 1,
    "explanation": "In a data matrix, rows = instances (N) and columns = variables/attributes/features. 10,000 rows means 10,000 individual data points; 7 columns means 7 properties are measured for each one. This orientation is standard across data analytics and machine learning."
  },
  {
    "quizTitle": "Introduction to Data Analytics",
    "category": "Modeling",
    "question": "A data team is building a model to detect loan defaults. After data preparation, they decide to test both a decision tree and a neural network to see which performs better. Which Modeling sub-task is this?",
    "options": [
      "Build Model",
      "Assess Model",
      "Select Modeling Technique — determining which algorithms to try",
      "Generate Test Design"
    ],
    "correctOption": 2,
    "explanation": "Selecting the modeling technique means deciding which algorithms to try. Choosing to test a decision tree AND a neural network is a technique selection decision. The actual training happens in 'Build Model' and the quality check happens in 'Assess Model.'"
  },
  {
    "quizTitle": "Introduction to Data Analytics",
    "category": "Modeling",
    "question": "Before training a fraud detection model, the team sets aside 20% of the data as a test set that the model will never see during training, and reserves another 10% for final validation. Which Modeling sub-task is this?",
    "options": [
      "Select Modeling Technique",
      "Build Model",
      "Generate Test Design — deciding how to split data for training, testing, and validation",
      "Assess Model"
    ],
    "correctOption": 2,
    "explanation": "Generating a test design means deciding how to partition data for training, testing, and validation before building begins. A 70/20/10 train-test-validation split is exactly this — it sets up a fair evaluation framework before any model sees the data."
  },
  {
    "quizTitle": "Introduction to Data Analytics",
    "category": "Modeling",
    "question": "After training a sentiment analysis model, a domain expert in customer service reviews the outputs and flags that the model incorrectly labels sarcastic complaints as positive. She uses her knowledge of customer behaviour to interpret this failure. Which Modeling sub-task is this?",
    "options": [
      "Build Model",
      "Generate Test Design",
      "Select Modeling Technique",
      "Assess Model — applying domain knowledge to interpret model results"
    ],
    "correctOption": 3,
    "explanation": "Assessing the model involves checking generated models and applying domain knowledge to interpret results. A domain expert recognising that sarcasm is misclassified is applying business/domain knowledge — this nuance cannot come from the algorithm alone."
  },
  {
    "quizTitle": "Introduction to Data Analytics",
    "category": "Evaluation",
    "question": "A logistics company's analytics team builds three route optimization models. They present all three to the operations VP, who selects the one that reduces delivery time by 18%, exceeding the original 15% target, and meets the budget constraint. Which CRISP-DM phase is this selection process?",
    "options": [
      "Data Preparation",
      "Business Understanding",
      "Modeling",
      "Evaluation — determining which model meets the business criteria"
    ],
    "correctOption": 3,
    "explanation": "Evaluation asks: 'which model best meets the business objectives?' Comparing three models against a 15% time-reduction target and a budget constraint is exactly the Evaluate Results sub-task. The decision to approve one model over others happens here."
  },
  {
    "quizTitle": "Introduction to Data Analytics",
    "category": "Evaluation",
    "question": "After evaluating model results, the analytics team reviews the entire project and realises they forgot to account for seasonal demand spikes during data preparation, which probably weakened the model. They decide to loop back and revise. Which Evaluation sub-task drove this decision?",
    "options": [
      "Evaluate Results",
      "Determine Next Steps",
      "Review Process — reviewing the work done and identifying what was missed",
      "Plan Deployment"
    ],
    "correctOption": 2,
    "explanation": "Reviewing the process means critically examining the work done throughout the project to identify gaps or errors. Recognising that seasonal spikes were overlooked in Data Preparation is a process review finding — it informs the 'Determine Next Steps' sub-task (loop back vs. proceed)."
  },
  {
    "quizTitle": "Introduction to Data Analytics",
    "category": "Machine Learning — Overview",
    "question": "A wearable fitness device company wants to automatically group its users into lifestyle segments without pre-defining the groups. A second team wants to predict whether a specific user will cancel their subscription next month (yes or no). Which pair of machine learning approaches matches these two goals?",
    "options": [
      "Supervised for segmentation; Unsupervised for cancellation prediction.",
      "Unsupervised clustering for segmentation; Supervised classification for cancellation prediction.",
      "Regression for segmentation; Clustering for cancellation prediction.",
      "Outlier detection for segmentation; Regression for cancellation prediction."
    ],
    "correctOption": 1,
    "explanation": "Grouping users into unknown segments = Unsupervised Clustering (no predefined labels). Predicting a yes/no outcome (cancel or not) using historical labelled data = Supervised Classification. Matching the technique to the nature of the problem (labelled vs. unlabelled, discrete vs. continuous) is fundamental."
  },
  {
    "quizTitle": "Introduction to Data Analytics",
    "category": "Supervised Learning — Classification",
    "question": "A cybersecurity firm trains a model on 100,000 past network connection logs, each labelled as either 'malicious' or 'benign.' The model then evaluates new connections and assigns one of these two labels. What type of machine learning is this?",
    "options": [
      "Unsupervised clustering",
      "Regression",
      "Supervised classification — predicting a discrete label from labelled training data",
      "Outlier detection"
    ],
    "correctOption": 2,
    "explanation": "Supervised classification uses labelled training data (malicious/benign) to build a classifier that assigns discrete class labels to new instances. The key indicators are: (1) labelled training data exists, and (2) the output is a discrete category, not a number."
  },
  {
    "quizTitle": "Introduction to Data Analytics",
    "category": "Supervised Learning — Classification",
    "question": "An email provider trains a spam filter on millions of emails, each tagged 'spam' or 'not spam' by human reviewers. The filter then automatically classifies incoming emails. What makes this supervised classification rather than unsupervised clustering?",
    "options": [
      "The dataset is very large.",
      "The model uses email text as input.",
      "The training data has predefined class labels — 'spam' and 'not spam' — that guide the learning process.",
      "The filter runs in real-time."
    ],
    "correctOption": 2,
    "explanation": "The defining feature of supervised classification is the presence of class labels in the training data. Human-tagged 'spam'/'not spam' labels tell the algorithm what correct output looks like. Size, input type, and real-time deployment are not what make it supervised."
  },
  {
    "quizTitle": "Introduction to Data Analytics",
    "category": "Supervised Learning — Classification",
    "question": "Which of the following outputs indicates a CLASSIFICATION task rather than a regression task?",
    "options": [
      "Predicted revenue for next quarter: $4,230,000",
      "Estimated delivery time: 3.7 days",
      "Loan application status: Approved or Rejected",
      "Forecasted temperature: 22.4°C"
    ],
    "correctOption": 2,
    "explanation": "Classification predicts a discrete class label — a category. 'Approved or Rejected' is a discrete outcome with no numeric meaning. Revenue ($4.23M), delivery time (3.7 days), and temperature (22.4°C) are all continuous numeric values — those are regression outputs."
  },
  {
    "quizTitle": "Introduction to Data Analytics",
    "category": "Supervised Learning — Regression",
    "question": "A real estate analytics startup builds a model that takes a property's square footage, number of bathrooms, proximity to schools, and neighbourhood crime rate as inputs, and outputs a predicted sale price in dollars. What type of machine learning is this?",
    "options": [
      "Supervised classification",
      "Unsupervised clustering",
      "Supervised regression — predicting a continuous numeric value",
      "Outlier detection"
    ],
    "correctOption": 2,
    "explanation": "Regression predicts a continuous numeric value as its output — in this case, a sale price in dollars. The model is supervised because it was trained on historical sales with known prices. The numeric, continuous nature of the output (not a category) is what distinguishes it from classification."
  },
  {
    "quizTitle": "Introduction to Data Analytics",
    "category": "Supervised Learning — Regression",
    "question": "A healthcare model predicts how many days a patient will stay in hospital based on their diagnosis, age, and comorbidities. Which type of ML is this, and why?",
    "options": [
      "Classification, because health outcomes are always categorical.",
      "Clustering, because patients are being grouped by diagnosis.",
      "Regression, because the output (number of days) is a continuous numeric prediction.",
      "Outlier detection, because some stays will be unusually long."
    ],
    "correctOption": 2,
    "explanation": "Number of days is a continuous numeric value — regression produces numeric predictions. Even though 'days' is technically an integer, it functions as a continuous quantity for prediction purposes. Classification would output a category (like 'short stay' vs. 'long stay'), not a specific number."
  },
  {
    "quizTitle": "Introduction to Data Analytics",
    "category": "Supervised Learning — Regression",
    "question": "Which of the following BEST distinguishes classification from regression in supervised learning?",
    "options": [
      "Classification uses more data than regression.",
      "Regression requires more computing power.",
      "Classification predicts a discrete label; regression predicts a continuous numeric value.",
      "Classification is unsupervised; regression is supervised."
    ],
    "correctOption": 2,
    "explanation": "The core distinction is the output type: classification = discrete label (a category), regression = continuous value (a number). Both are supervised learning techniques — they both require labelled training data. Data volume and computing power are implementation details, not defining characteristics."
  },
  {
    "quizTitle": "Introduction to Data Analytics",
    "category": "Unsupervised Learning — Clustering",
    "question": "A music streaming service has 50 million listeners. Without pre-defining any user types, it runs an algorithm that groups listeners based on their listening history. Listeners who love jazz and classical end up in one group; listeners who prefer hip-hop and R&B end up in another. What type of ML is this?",
    "options": [
      "Supervised classification",
      "Regression",
      "Unsupervised clustering — grouping similar instances without predefined labels",
      "Outlier detection"
    ],
    "correctOption": 2,
    "explanation": "Clustering groups instances based on similarity without predefined labels. The algorithm discovers the groups (jazz/classical vs. hip-hop/R&B) from the data itself — no one told it what the groups should be. This is the defining feature of unsupervised clustering."
  },
  {
    "quizTitle": "Introduction to Data Analytics",
    "category": "Unsupervised Learning — Clustering",
    "question": "An online retailer wants to segment its customers for targeted marketing without using any predefined customer categories. After running a clustering algorithm, it discovers four natural groups: bargain hunters, brand loyalists, occasional shoppers, and gift buyers. What is the KEY characteristic that makes this unsupervised?",
    "options": [
      "The dataset is large.",
      "The results are used for marketing.",
      "No class labels were provided to the algorithm — the groups emerged from the data.",
      "Four clusters were discovered."
    ],
    "correctOption": 2,
    "explanation": "Unsupervised learning works on data that has no class labels. The algorithm found the four groups on its own — 'bargain hunter' was not a label someone pre-assigned. The absence of predefined labels is the defining feature, not the size, purpose, or number of clusters."
  },
  {
    "quizTitle": "Introduction to Data Analytics",
    "category": "Unsupervised Learning — Outlier Detection",
    "question": "A credit card company analyses transaction data and flags a customer whose account suddenly shows three purchases from different countries within 10 minutes, while their normal pattern is local grocery shopping. Which type of ML technique is being used?",
    "options": [
      "Supervised classification",
      "Regression",
      "Clustering",
      "Outlier detection — identifying instances that deviate significantly from the majority"
    ],
    "correctOption": 3,
    "explanation": "Outlier detection identifies instances that are distinct from the nature of the majority. Three international purchases in 10 minutes is a major deviation from the customer's baseline pattern — exactly what outlier detection flags. This is unsupervised because no labelled fraud examples are required."
  },
  {
    "quizTitle": "Introduction to Data Analytics",
    "category": "Unsupervised Learning — Outlier Detection",
    "question": "A manufacturing plant monitors vibration sensors on 200 machines. Most machines produce similar vibration signatures. Outlier detection flags Machine #47, whose readings differ dramatically from all others. What happens next is a human investigation. Why is outlier detection unsupervised in this scenario?",
    "options": [
      "Because the plant has too many machines to label manually.",
      "Because the algorithm does not rely on pre-labelled examples of 'faulty' vs. 'normal' — it finds anomalies purely from the data distribution.",
      "Because vibration data cannot be labelled.",
      "Because the human does the supervised part afterward."
    ],
    "correctOption": 1,
    "explanation": "Outlier detection is unsupervised because it identifies anomalies by comparing instances to the majority pattern — no labelled 'faulty/normal' training examples are needed. The algorithm simply finds what is statistically unusual. Supervised anomaly detection would require labelled historical fault records."
  },
  {
    "quizTitle": "Introduction to Data Analytics",
    "category": "Supervised vs. Unsupervised",
    "question": "A team has two projects: (A) predicting whether a loan will default using 5 years of historical loans labelled 'defaulted' or 'repaid,' and (B) discovering natural groupings among bank customers based on transaction behaviour, with no predefined groups. How should these be matched to ML paradigms?",
    "options": [
      "Both are supervised learning tasks.",
      "Both are unsupervised learning tasks.",
      "A is supervised classification; B is unsupervised clustering.",
      "A is regression; B is outlier detection."
    ],
    "correctOption": 2,
    "explanation": "Project A has labelled data ('defaulted'/'repaid') and predicts a discrete outcome → Supervised Classification. Project B has no labels and aims to discover natural groups → Unsupervised Clustering. Matching the technique to the presence/absence of labels and the type of output is the core skill."
  },
  {
    "quizTitle": "Introduction to Data Analytics",
    "category": "CRISP-DM Phase Identification",
    "question": "A data team at an airline is working on a project. They are currently examining whether their delay prediction model's accuracy of 78% actually satisfies the operations team's requirement of 80%, and are preparing a recommendation on whether to rework the model or proceed to production. Which CRISP-DM phase are they in?",
    "options": [
      "Data Understanding",
      "Modeling",
      "Evaluation",
      "Deployment"
    ],
    "correctOption": 2,
    "explanation": "Evaluation checks whether the model meets business objectives and decides on next steps. Comparing 78% accuracy against an 80% requirement and deciding whether to rework or deploy is the classic Evaluation phase activity. Modeling is where the model was built; Deployment is where it goes to production."
  },
  {
    "quizTitle": "Introduction to Data Analytics",
    "category": "CRISP-DM Phase Identification",
    "question": "A smart agriculture company is starting a crop yield prediction project. The team interviews farm managers to understand what drives yield decisions, identifies 'predict yield 3 months in advance with 85% accuracy' as the measurable goal, and documents risks like satellite image data gaps in winter. Which CRISP-DM phase is this?",
    "options": [
      "Data Understanding",
      "Business Understanding",
      "Data Preparation",
      "Evaluation"
    ],
    "correctOption": 1,
    "explanation": "Business Understanding covers: determining business objectives, assessing the situation (risks, resources), determining data mining goals (measurable target), and producing a project plan. All three activities described — goal setting, risk documentation, and goal quantification — belong here."
  },
  {
    "quizTitle": "Introduction to Data Analytics",
    "category": "CRISP-DM Phase Identification",
    "question": "A team working on a predictive maintenance project discovers that temperature sensor data from Facility B uses Fahrenheit while all other facilities use Celsius. They convert all temperature readings to Celsius and merge the corrected Facility B data into the master dataset. Which phase are they in?",
    "options": [
      "Data Understanding",
      "Modeling",
      "Data Preparation",
      "Business Understanding"
    ],
    "correctOption": 2,
    "explanation": "Converting units (variable transformation) and merging data from multiple facilities (integration) are both Data Preparation sub-tasks. Data Understanding would have identified the problem; Data Preparation fixes it. The team is now actively transforming and integrating — that is Data Preparation."
  },
  {
    "quizTitle": "Introduction to Data Analytics",
    "category": "ML Output Type",
    "question": "For each scenario below, identify the correct output type. A model predicts the EXACT dollar amount a customer is likely to spend on Black Friday. What kind of output is this?",
    "options": [
      "A discrete class label — this is a classification output.",
      "A cluster assignment — this is an unsupervised output.",
      "A continuous numeric value — this is a regression output.",
      "An anomaly flag — this is an outlier detection output."
    ],
    "correctOption": 2,
    "explanation": "A specific dollar amount is a continuous numeric value — that is the output of regression. If the output were a category like 'High spender / Medium spender / Low spender,' it would be classification. Regression produces real-valued predictions; classification produces discrete labels."
  },
  {
    "quizTitle": "Introduction to Data Analytics",
    "category": "ML Output Type",
    "question": "A model trained on thousands of X-ray images labelled 'pneumonia present' or 'pneumonia absent' examines a new X-ray and outputs 'pneumonia present.' What type of ML output is this?",
    "options": [
      "Regression — because the model uses image data.",
      "Classification — because the output is a discrete label ('present'/'absent').",
      "Clustering — because the model groups similar X-rays.",
      "Outlier detection — because pneumonia is rare."
    ],
    "correctOption": 1,
    "explanation": "A discrete label ('present'/'absent') is the hallmark of classification. The data was also labelled during training, confirming this is supervised. The input being images does not change the ML type — it is the output type (discrete category vs. continuous number) that defines classification vs. regression."
  },
  {
    "quizTitle": "Introduction to Data Analytics",
    "category": "Choosing the Right ML Approach",
    "question": "A bank wants to predict the exact number of branch visits each customer will make in the next quarter, based on demographics, account activity, and digital banking usage. Which ML approach is MOST appropriate?",
    "options": [
      "Supervised classification, because customer behaviour is categorical.",
      "Unsupervised clustering, because no labels exist.",
      "Supervised regression, because the output (number of visits) is a continuous numeric prediction.",
      "Outlier detection, because some customers are unusual."
    ],
    "correctOption": 2,
    "explanation": "Number of visits is a continuous numeric value → regression. The prediction is also supervised because historical visit counts (the labels) are available from past records. Regression is the correct choice whenever the goal is to predict 'how many' or 'how much' rather than 'which category.'"
  },
  {
    "quizTitle": "Introduction to Data Analytics",
    "category": "Choosing the Right ML Approach",
    "question": "An online learning platform wants to group its 2 million learners into segments based on learning pace, subject preferences, and session duration — without any predetermined categories. Segments will be used to personalize course recommendations. Which approach is MOST appropriate?",
    "options": [
      "Supervised classification, because recommendations must be accurate.",
      "Regression, because session duration is a continuous variable.",
      "Unsupervised clustering, because the goal is discovering natural groups with no predefined labels.",
      "Outlier detection, because some learners have unusual habits."
    ],
    "correctOption": 2,
    "explanation": "When the goal is discovering natural groups without predefined categories, clustering is the right approach. No one has pre-labelled learner types — the algorithm must find them. Supervised techniques require labelled training data, which doesn't exist for undefined segments."
  },
  {
    "quizTitle": "Introduction to Data Analytics",
    "category": "Data Preparation — Combined Concepts",
    "question": "A data team receives sales data from three merged companies. Company A records revenue in CAD, Company B in USD, and Company C in EUR. The dataset also has 2,000 duplicate transaction records and a 'region' column where 'Ontario', 'ON', and 'Ont.' all appear. Which set of Data Preparation tasks is needed?",
    "options": [
      "Variable transformation (currency), cleaning (duplicates and inconsistent region values)",
      "Outlier removal, modeling, and deployment",
      "Data understanding and business understanding",
      "Select modeling technique and generate test design"
    ],
    "correctOption": 0,
    "explanation": "Three currency types require variable transformation (standardize to one currency). Duplicate records require cleaning/filtering. Three representations of 'Ontario' require cleaning for inconsistent representation. All three are Data Preparation tasks — specifically transformation, deduplication, and standardization."
  },
  {
    "quizTitle": "Introduction to Data Analytics",
    "category": "Analytics Applications",
    "question": "A hospital system uses historical patient data labelled with diagnoses to train a model that helps radiologists prioritize which CT scans to review first, based on urgency likelihood. Which machine learning type powers this application?",
    "options": [
      "Unsupervised clustering — because patients are being grouped.",
      "Outlier detection — because urgent cases are rare.",
      "Supervised classification — because the model predicts a discrete priority label using labelled training data.",
      "Regression — because urgency is measured on a numeric scale."
    ],
    "correctOption": 2,
    "explanation": "The model predicts a discrete outcome (priority level / urgency category) using historical data that was labelled by radiologists. This is supervised classification. If it predicted a continuous urgency score (e.g., 0.0 to 1.0), it would be regression — but assigning priority categories is classification."
  },
  {
    "quizTitle": "Introduction to Data Analytics",
    "category": "Data Analytics Insight",
    "question": "A grocery chain tracks item-level sales per hour across 50 stores. By aggregating this data, they discover that bread and soup sales always spike together on days when the weather forecast shows rain. This insight is used to pre-stock both items before rainy days. Which concept from data analytics does this BEST illustrate?",
    "options": [
      "Deployment — because the insight is being acted upon.",
      "Variable transformation — because weather data is being added.",
      "Detecting underlying patterns in aggregated data that are invisible when looking at individual store records.",
      "Outlier detection — because rainy days are unusual."
    ],
    "correctOption": 2,
    "explanation": "The course defines data analytics as 'aggregating large datasets to detect underlying patterns that might not be visible by just looking at raw data.' The bread-soup-rain correlation is invisible at the individual store or transaction level but emerges from aggregation across 50 stores and thousands of days."
  },
  {
    "quizTitle": "Introduction to Data Analytics",
    "category": "CRISP-DM — Deployment",
    "question": "A retail demand forecasting model has passed evaluation and been approved by stakeholders. The analytics team now writes documentation for the IT department on how to integrate the model into the inventory system, sets up weekly automated retraining, and defines KPIs to monitor model drift over time. Which CRISP-DM phase is this?",
    "options": [
      "Evaluation",
      "Modeling",
      "Business Understanding",
      "Deployment — including planning deployment and monitoring/maintenance"
    ],
    "correctOption": 3,
    "explanation": "Deployment covers planning the deployment, planning monitoring and maintenance, producing the final report, and reviewing the project. Integrating a model into production, setting up automated retraining, and defining drift monitoring KPIs are all Deployment sub-tasks."
  },
  {
    "quizTitle": "Introduction to Data Analytics",
    "category": "Supervised vs Unsupervised — Practical Distinction",
    "question": "A startup has collected two years of customer purchase data but has NOT tagged any customers with categories or outcomes. They want to understand 'what types of customers naturally exist.' Which constraint determines the ML approach?",
    "options": [
      "Two years of data is not enough for supervised learning.",
      "The absence of labels means supervised learning cannot be used — unsupervised clustering is required.",
      "Regression is needed because purchase amounts are numeric.",
      "Outlier detection is needed because some customers buy very rarely."
    ],
    "correctOption": 1,
    "explanation": "Supervised learning requires labelled training data. With no labels, supervised methods cannot be applied — the algorithm has nothing to learn 'correct' answers from. Unsupervised clustering discovers natural groups purely from the data's structure, making it the appropriate choice when labels don't exist."
  },
  {
    "quizTitle": "Introduction to Data Analytics",
    "category": "Data Preparation — Real World Thinking",
    "question": "A data analyst notices that in a sales dataset spanning 5 years, one product category shows $0 revenue every December 26th across all regions, every year without exception. Before modeling seasonal trends, she removes these rows. What is the MOST LIKELY reason and correct classification of this action?",
    "options": [
      "The product doesn't sell in winter; these are valid data points and should stay.",
      "This is an outlier removal — December 26th is a regional holiday (Boxing Day in Canada), so $0 is a contextual artefact unrelated to actual sales trends.",
      "This is a variable transformation — convert $0 to the monthly average.",
      "This is data integration — the dates need to be merged with a holiday calendar."
    ],
    "correctOption": 1,
    "explanation": "The course gives this exact type of example: 'sales for a store are $0 for some regional holidays.' Boxing Day (December 26) is a statutory holiday across Canada — stores are closed or have heavily disrupted operations. These zeros are contextual artefacts, not true demand signals, and removing them as outliers is correct Data Preparation."
  },
  {
    "quizTitle": "Introduction to Data Analytics",
    "category": "Applying CRISP-DM End-to-End",
    "question": "A team is building a model to predict university student dropout risk. Place these activities in the CORRECT CRISP-DM order: (1) Deploy the early-warning dashboard to academic advisors, (2) Interview the registrar to define 'at-risk' criteria, (3) Merge enrollment, grade, and attendance data into one dataset, (4) Train and test a logistic regression model, (5) Check if the model's predictions are accurate enough to justify advising interventions.",
    "options": [
      "2 → 3 → 4 → 5 → 1",
      "3 → 2 → 4 → 1 → 5",
      "4 → 3 → 2 → 5 → 1",
      "1 → 2 → 3 → 4 → 5"
    ],
    "correctOption": 0,
    "explanation": "CRISP-DM order: Business Understanding (interview registrar to define 'at-risk' = step 2) → Data Preparation (merge enrollment/grade/attendance = step 3) → Modeling (train logistic regression = step 4) → Evaluation (check accuracy vs. advising threshold = step 5) → Deployment (dashboard rollout = step 1). Data Understanding sits between steps 2 and 3 in practice."
  },
  {
    "quizTitle": "Introduction to Data Analytics",
    "category": "Applying ML Type Selection",
    "question": "An energy company has four analytics goals. Match each to the correct ML type: (A) Predict next month's electricity bill for a specific household in dollars. (B) Flag meters that show consumption patterns dramatically different from all other meters. (C) Classify each residential account as 'low risk', 'medium risk', or 'high risk' for non-payment. (D) Discover natural customer groups based on usage without pre-defined categories.",
    "options": [
      "A=Clustering, B=Classification, C=Regression, D=Outlier Detection",
      "A=Regression, B=Outlier Detection, C=Classification, D=Clustering",
      "A=Classification, B=Regression, C=Clustering, D=Outlier Detection",
      "A=Outlier Detection, B=Clustering, C=Regression, D=Classification"
    ],
    "correctOption": 1,
    "explanation": "A = Regression (predicts a continuous dollar amount). B = Outlier Detection (finds anomalous meters deviating from the norm). C = Classification (predicts a discrete label: low/medium/high risk). D = Clustering (discovers natural groups with no predefined categories). Each technique maps to the output type and presence/absence of labels."
  }
];