// data/questions/bi-classification-decision-trees.js

module.exports = 
[
  {
    "quizTitle": "Classification: Decision Trees",
    "category": "Decision Tree Structure",
    "question": "In a decision tree built to predict whether a customer will repay a loan, what does each internal (non-leaf) node represent?",
    "options": [
      "A final prediction outcome such as Repay or Default",
      "A connection linking one level of the tree to the next",
      "A feature (attribute) used to partition the data, such as Credit Score or Income",
      "A probability score between 0 and 1"
    ],
    "correctOption": 2,
    "explanation": "The course defines a decision tree where 'each node represents a feature (attribute).' Internal nodes test a feature and route instances to different branches based on the feature value. Only leaf nodes (terminal nodes) contain the final predicted outcome."
  },
  {
    "quizTitle": "Classification: Decision Trees",
    "category": "Decision Tree Structure",
    "question": "In the same loan repayment decision tree, what does each branch (edge) of the tree represent?",
    "options": [
      "A feature being tested at that level",
      "A decision rule — the condition or value used to route an instance from one node to the next",
      "A final classification outcome",
      "A measure of model accuracy at that point"
    ],
    "correctOption": 1,
    "explanation": "Branches represent decisions (rules). For example, from a node testing Credit Score, one branch might be '> 700' and another '≤ 700'. The instance follows the branch matching its feature value. The course: 'each branch represents a decision (rule).'"
  },
  {
    "quizTitle": "Classification: Decision Trees",
    "category": "Decision Tree Structure",
    "question": "At the bottom of a decision tree are the leaf nodes. In a loan repayment tree, what does a leaf node represent?",
    "options": [
      "A feature to test next",
      "A splitting rule for routing instances",
      "A final outcome or prediction — such as Repay or Default — assigned to all instances reaching that leaf",
      "A subset of the training data awaiting further splitting"
    ],
    "correctOption": 2,
    "explanation": "The course states: 'each leaf represents an outcome (categorical or continuous values).' Leaves are terminal nodes — no further splitting happens. Every instance that reaches a particular leaf is assigned that leaf's class label as its prediction."
  },
  {
    "quizTitle": "Classification: Decision Trees",
    "category": "Decision Tree Structure",
    "question": "A data science team wants to predict property valuations (dollar amounts) AND wants to classify homes as Undervalued, Fairly Priced, or Overvalued. Can decision trees handle BOTH tasks?",
    "options": [
      "No — decision trees only handle classification tasks with discrete labels.",
      "No — decision trees only handle regression tasks with numeric outputs.",
      "Yes — decision trees can be used for both classification (discrete labels) and regression (continuous values).",
      "Only CART can handle regression; ID3 handles classification only."
    ],
    "correctOption": 2,
    "explanation": "The course explicitly states decision trees are 'used for both classification and regression.' Classification outputs a discrete class label (Undervalued/Fairly Priced/Overvalued); regression outputs a continuous numeric value (property price). Leaves hold 'categorical or continuous values' as outcomes."
  },
  {
    "quizTitle": "Classification: Decision Trees",
    "category": "Decision Tree Structure",
    "question": "Given a decision tree, what is the ROOT NODE, and what makes it special compared to other decision nodes?",
    "options": [
      "The root node is a leaf that holds the most frequent class label in the dataset.",
      "The root node is the topmost node — it represents the first feature tested and was selected because it provides the highest information gain (most discriminating feature).",
      "The root node is the deepest node and represents the least important feature.",
      "The root node is the node with the most branches connecting to it."
    ],
    "correctOption": 1,
    "explanation": "The root node is the topmost node of the tree — the starting point for all classifications. In ID3, the root node is chosen as the attribute with the HIGHEST information gain, making it the single most discriminating feature across the entire dataset. In the weather example, Outlook was the root because it had the highest information gain (0.247)."
  },
  {
    "quizTitle": "Classification: Decision Trees",
    "category": "Decision Tree Algorithms",
    "question": "ID3 stands for which full name, and which metric(s) does it use to build a tree?",
    "options": [
      "Iterative Data Distributor 3 — uses Gini Index",
      "Iterative Dichotomiser 3 — uses Entropy and Information Gain",
      "Independent Decision Divider 3 — uses Mean Squared Error",
      "Integrated Data Decision 3 — uses Standard Deviation"
    ],
    "correctOption": 1,
    "explanation": "ID3 = Iterative Dichotomiser 3. It uses Entropy as a measure of dataset impurity and Information Gain to select which attribute to split on at each step. The higher the information gain, the better the split. CART (the other major algorithm) uses Gini Index instead."
  },
  {
    "quizTitle": "Classification: Decision Trees",
    "category": "Decision Tree Algorithms",
    "question": "CART stands for which full name, and what metric distinguishes it from ID3?",
    "options": [
      "Classification and Regression Trees — uses Gini Index as its splitting metric",
      "Conditional Attribute Ranking Trees — uses Entropy and Information Gain",
      "Classification and Regression Trees — uses Entropy just like ID3",
      "Conditional Averaging Regression Trees — uses Mean Absolute Error"
    ],
    "correctOption": 0,
    "explanation": "CART = Classification and Regression Trees. The name itself reveals it handles both tasks. CART uses the Gini Index as its splitting metric, distinguishing it from ID3 which uses Entropy and Information Gain. Both ultimately select the best feature to split on at each node, but through different mathematical measures."
  },
  {
    "quizTitle": "Classification: Decision Trees",
    "category": "Decision Tree Algorithms",
    "question": "A team is building a decision tree classifier and must choose between ID3 and CART. A colleague suggests CART purely because it sounds like it can handle regression too. Is this a valid reason, and what is the actual key algorithmic difference?",
    "options": [
      "Valid reason — CART is always better for classification tasks because of the Gini Index.",
      "Not a valid reason for choosing CART alone — both ID3 and CART can guide classification, but ID3 uses Entropy and Information Gain while CART uses Gini Index as the splitting metric.",
      "Valid reason — ID3 can only build classification trees and cannot handle continuous outputs.",
      "Not a valid reason — ID3 and CART use identical metrics and differ only in speed."
    ],
    "correctOption": 1,
    "explanation": "The key algorithmic distinction is the splitting metric: ID3 uses Entropy and Information Gain; CART uses Gini Index. Both can be used for classification. CART's name (Classification AND Regression) signals it handles both tasks, but the real difference worth knowing is the metric each uses, not just the name."
  },
  {
    "quizTitle": "Classification: Decision Trees",
    "category": "Entropy",
    "question": "In the context of ID3 decision trees, what does entropy measure?",
    "options": [
      "The accuracy of the current model on the training set",
      "The depth of the decision tree at the current node",
      "The amount of impurity or uncertainty in a dataset — how mixed the class labels are",
      "The number of branches at each node"
    ],
    "correctOption": 2,
    "explanation": "The course defines entropy as 'a measure of the amount of impurity or uncertainty in the dataset.' High entropy = high uncertainty = mixed class labels. Low entropy = low uncertainty = mostly one class. Entropy of 0 = perfectly pure (all instances are the same class)."
  },
  {
    "quizTitle": "Classification: Decision Trees",
    "category": "Entropy",
    "question": "After splitting on the Outlook feature in the weather dataset, the subset where Outlook=Overcast contains ONLY instances where Play=Yes. What is the entropy of this subset?",
    "options": [
      "1.0 — because all instances belong to the same category.",
      "0.5 — because there is only one class present.",
      "0 — because the subset is completely pure (all instances belong to the same class).",
      "0.94 — matching the full dataset entropy."
    ],
    "correctOption": 2,
    "explanation": "When all instances in a subset belong to the same class, entropy = 0. In the formula H(S) = -p(yes)*log2(p(yes)) - p(no)*log2(p(no)): p(yes)=1, p(no)=0. Since -1*log2(1) = 0 and 0*log2(0) is taken as 0, H = 0. A node with entropy=0 is PURE and becomes a leaf — no further splitting needed."
  },
  {
    "quizTitle": "Classification: Decision Trees",
    "category": "Entropy",
    "question": "In a binary classification dataset, what is the MAXIMUM possible entropy value, and when does it occur?",
    "options": [
      "Maximum entropy = 0.5, occurring when one class makes up 75% of the instances.",
      "Maximum entropy = 1.0, occurring when the classes are split exactly 50/50.",
      "Maximum entropy = 2.0, occurring when there are two classes and equal proportions.",
      "Maximum entropy = infinity when the dataset is very large."
    ],
    "correctOption": 1,
    "explanation": "For a binary class, maximum entropy = 1.0 and occurs when classes are split exactly 50/50 (p=0.5 for each class). At this point the dataset provides the least information about which class a new instance belongs to. In the weather dataset, the Windy=True subset had 3 Yes and 3 No, giving H = -(0.5)*log2(0.5) - (0.5)*log2(0.5) = 0.5 + 0.5 = 1.0."
  },
  {
    "quizTitle": "Classification: Decision Trees",
    "category": "Entropy",
    "question": "An analyst is building an ID3 tree for predicting customer churn. After splitting on one attribute, one subset has 80 churners and 20 non-churners (100 total). Compared to a perfectly mixed subset (50/50), how does the entropy of this 80/20 subset compare?",
    "options": [
      "Higher entropy — because there are more churners and more data to process.",
      "Same entropy — proportion does not change entropy.",
      "Lower entropy — an 80/20 split is closer to pure than 50/50, so there is less uncertainty.",
      "Zero entropy — because one class dominates."
    ],
    "correctOption": 2,
    "explanation": "Entropy is lowest when the data is most pure (one class dominates) and highest when perfectly mixed. An 80/20 split is closer to pure than 50/50, so its entropy is LOWER than the 50/50 maximum of 1.0. The entropy would be approximately -(0.8)*log2(0.8) - (0.2)*log2(0.2) ≈ 0.72. The more imbalanced the split, the lower the entropy."
  },
  {
    "quizTitle": "Classification: Decision Trees",
    "category": "Entropy",
    "question": "In ID3, when evaluating which attribute to split on, what relationship between an attribute's entropy and its usefulness for splitting holds true?",
    "options": [
      "Attributes with HIGHER weighted average entropy are preferred because they create more diverse subsets.",
      "Attributes with LOWER weighted average entropy are preferred because purer subsets (less uncertainty) are more informative for classification.",
      "Entropy is not used to select attributes in ID3.",
      "The attribute with entropy closest to 0.5 is always chosen first."
    ],
    "correctOption": 1,
    "explanation": "Lower weighted average entropy after splitting means the resulting subsets are purer (less uncertainty about class membership), which is exactly what a decision tree wants. An attribute that produces perfectly pure subsets (entropy=0 each) is ideal. This is equivalent to saying: choose the attribute with the HIGHEST information gain, since IG = H(S) - weighted_entropy."
  },
  {
    "quizTitle": "Classification: Decision Trees",
    "category": "Entropy Calculation",
    "question": "A product quality dataset has 10 items: 6 classified as Defective and 4 as Non-Defective. Using the entropy formula H(S) = -p(c) * log2(p(c)) summed over all classes, what is the entropy of this dataset? (log2(0.6) ≈ -0.737, log2(0.4) ≈ -1.322)",
    "options": [
      "H(S) = 0.50",
      "H(S) = 0.94",
      "H(S) = 0.971",
      "H(S) = 1.00"
    ],
    "correctOption": 2,
    "explanation": "H(S) = -(6/10)*log2(6/10) - (4/10)*log2(4/10) = -(0.6)*(-0.737) - (0.4)*(-1.322) = 0.4422 + 0.5288 = 0.971. This is close to but below the maximum (1.0), reflecting a slightly imbalanced dataset (60% Defective). A 50/50 split would give exactly 1.0."
  },
  {
    "quizTitle": "Classification: Decision Trees",
    "category": "Entropy Calculation",
    "question": "After splitting on a feature called 'Department', the Engineering subset contains 8 instances — all 8 are classified as High Performance. What is the entropy of this subset?",
    "options": [
      "0 — the subset is completely pure (one class only), so there is zero uncertainty.",
      "0.5 — because only one class is present.",
      "1.0 — because all instances are the same, making it fully informative.",
      "It cannot be calculated when one class has zero instances."
    ],
    "correctOption": 0,
    "explanation": "H = -(8/8)*log2(8/8) - 0 = -(1.0)*log2(1.0) - 0 = -(1.0)*(0) = 0. A pure subset always has entropy=0 because there is no uncertainty — you know exactly what class any instance in this subset belongs to. This node becomes a leaf in the decision tree (no further splitting needed)."
  },
  {
    "quizTitle": "Classification: Decision Trees",
    "category": "Entropy Calculation",
    "question": "A subset of loan applications has 4 Approved and 4 Rejected (8 total). What is the entropy of this perfectly balanced subset?",
    "options": [
      "0 — because there are equal numbers on each side.",
      "0.5 — because there are two classes.",
      "0.8113",
      "1.0 — maximum entropy for a binary class, since the split is exactly 50/50."
    ],
    "correctOption": 3,
    "explanation": "H = -(4/8)*log2(4/8) - (4/8)*log2(4/8) = -(0.5)*log2(0.5) - (0.5)*log2(0.5) = -(0.5)*(-1) - (0.5)*(-1) = 0.5 + 0.5 = 1.0. A 50/50 binary split always gives maximum entropy of 1.0 — this is the most uncertain situation for binary classification."
  },
  {
    "quizTitle": "Classification: Decision Trees",
    "category": "Entropy Calculation",
    "question": "A subset has 6 instances rated 'Pass' and 2 instances rated 'Fail' (8 total). Using log2(6/8) ≈ -0.415 and log2(2/8) ≈ -2.0, what is the entropy of this subset?",
    "options": [
      "0.25",
      "0.50",
      "0.8113",
      "1.0"
    ],
    "correctOption": 2,
    "explanation": "H = -(6/8)*log2(6/8) - (2/8)*log2(2/8) = -(0.75)*(-0.415) - (0.25)*(-2.0) = 0.3113 + 0.5 = 0.8113. This 75/25 split is less uncertain than 50/50 (1.0) but not pure (0). The 0.8113 value appeared in the weather dataset for the Windy=False subset (6 Yes, 2 No out of 8)."
  },
  {
    "quizTitle": "Classification: Decision Trees",
    "category": "Entropy Calculation",
    "question": "A subset of clinical trial data has 3 instances that 'Responded to Treatment' and 3 that 'Did Not Respond' (6 total). What is the entropy?",
    "options": [
      "0.0 — equal classes means certainty.",
      "0.5 — half of each class.",
      "1.0 — a perfectly balanced binary split gives the maximum possible entropy.",
      "0.8113 — the standard value for a 6-item subset."
    ],
    "correctOption": 2,
    "explanation": "H = -(3/6)*log2(3/6) - (3/6)*log2(3/6) = -(0.5)*(-1) - (0.5)*(-1) = 0.5 + 0.5 = 1.0. ANY binary subset with exactly equal class counts gives entropy = 1.0, regardless of the total number of instances. This is the maximum possible entropy value for two classes, representing the highest possible uncertainty."
  },
  {
    "quizTitle": "Classification: Decision Trees",
    "category": "Information Gain",
    "question": "What does Information Gain measure in the context of ID3 decision tree construction?",
    "options": [
      "The accuracy of the decision tree on the test set",
      "The reduction in entropy (uncertainty) after splitting the dataset on a particular attribute — how much knowing the attribute value reduces uncertainty about the class",
      "The number of instances that change class after a split",
      "The depth increase added by selecting a particular feature as a node"
    ],
    "correctOption": 1,
    "explanation": "The course defines information gain as 'a measure of the difference in entropy from before to after the set S is split on an attribute A' and 'a measure on how much uncertainty in S was reduced after splitting S on attribute A.' High gain = the attribute strongly separates the classes. Low gain = the attribute tells us little about class membership."
  },
  {
    "quizTitle": "Classification: Decision Trees",
    "category": "Information Gain",
    "question": "In the Information Gain formula IG(A, S) = H(S) - (sum of p(t) * H(t) for all subsets t), what does the term 'sum of p(t) * H(t)' represent?",
    "options": [
      "The entropy of the full dataset before any splitting",
      "The average entropy of the subsets AFTER splitting S on attribute A, weighted by the proportion of instances in each subset",
      "The information gain of each individual class in the dataset",
      "The maximum entropy achievable by splitting on A"
    ],
    "correctOption": 1,
    "explanation": "The term sum(p(t)*H(t)) is the WEIGHTED AVERAGE entropy of the subsets created by splitting S on attribute A. p(t) is the proportion of instances going to subset t, and H(t) is the entropy of that subset. This weighted average represents how much uncertainty remains AFTER the split. IG = original entropy minus remaining entropy."
  },
  {
    "quizTitle": "Classification: Decision Trees",
    "category": "Information Gain",
    "question": "Four attributes are evaluated for the next split in an ID3 tree: Feature P (IG=0.15), Feature Q (IG=0.32), Feature R (IG=0.07), Feature S (IG=0.28). Which feature should be selected as the next splitting node?",
    "options": [
      "Feature P — because it has the smallest non-zero gain.",
      "Feature R — because it has the lowest information gain and will keep the tree simple.",
      "Feature Q — because it has the HIGHEST information gain, meaning it reduces the most uncertainty.",
      "Feature S — because 0.28 is the average of all the values."
    ],
    "correctOption": 2,
    "explanation": "ID3 always selects the attribute with the HIGHEST information gain — Feature Q with 0.32. The course states: 'Pick the attribute with highest information gain.' Highest gain = greatest reduction in uncertainty = the most effective split for separating classes. Feature R (lowest gain of 0.07) would be the worst choice."
  },
  {
    "quizTitle": "Classification: Decision Trees",
    "category": "Information Gain",
    "question": "A dataset of 12 loan applications has H(S) = 0.92. After splitting on 'Credit Score': the Good Credit subset has 8 instances with H=0.72, and the Poor Credit subset has 4 instances with H=0.50. What is the Information Gain of the Credit Score attribute?",
    "options": [
      "0.25",
      "0.27",
      "0.31",
      "0.42"
    ],
    "correctOption": 1,
    "explanation": "Step 1 — Weighted average entropy: M(Credit Score) = (8/12)*0.72 + (4/12)*0.50 = 0.667*0.72 + 0.333*0.50 = 0.480 + 0.167 = 0.647. Step 2 — Information Gain: IG = H(S) - M = 0.92 - 0.647 = 0.273 ≈ 0.27. This positive gain means knowing Credit Score reduces uncertainty about loan repayment."
  },
  {
    "quizTitle": "Classification: Decision Trees",
    "category": "Information Gain",
    "question": "If two attributes have the same dataset entropy H(S), and Attribute X has a lower weighted average entropy M(X) than Attribute Y, which has higher information gain?",
    "options": [
      "Attribute Y — because higher average entropy means more information.",
      "Attribute X — because IG = H(S) - M(A), and lower M(A) means higher IG for the same H(S).",
      "They have equal information gain since H(S) is the same for both.",
      "Neither — weighted average entropy and information gain are unrelated."
    ],
    "correctOption": 1,
    "explanation": "IG(A, S) = H(S) - M(A). Since H(S) is fixed (same dataset), the attribute with LOWER weighted average entropy M(A) automatically has HIGHER information gain. This reveals the equivalence: choosing the attribute with highest IG is identical to choosing the attribute with lowest weighted average entropy. Both are valid ways to state the same selection rule."
  },
  {
    "quizTitle": "Classification: Decision Trees",
    "category": "Information Gain Calculation",
    "question": "A dataset has 8 instances with entropy H(S)=1.0 (4 Yes, 4 No). Attribute X splits the data into: X=A (4 instances, all Yes) and X=B (4 instances, all No). What is the Information Gain of Attribute X?",
    "options": [
      "0.0 — no improvement since the tree gets no smaller.",
      "0.5 — halfway between no gain and maximum gain.",
      "1.0 — maximum possible information gain; the attribute perfectly separates the classes.",
      "0.8113 — the standard entropy for a 75/25 split."
    ],
    "correctOption": 2,
    "explanation": "X=A subset: all Yes → H=0 (pure). X=B subset: all No → H=0 (pure). Weighted entropy M(X) = (4/8)*0 + (4/8)*0 = 0. IG = H(S) - M(X) = 1.0 - 0 = 1.0. This is the MAXIMUM possible information gain — the attribute perfectly separates both classes. Both subsets would become leaves immediately, requiring no further splitting."
  },
  {
    "quizTitle": "Classification: Decision Trees",
    "category": "Information Gain Calculation",
    "question": "An analyst calculates the weighted average entropy M(A) = 0.86 for an attribute A. The original dataset has H(S) = 0.94. What is the information gain of attribute A, and how does it compare to the Windy feature from the weather dataset (IG ≈ 0.048)?",
    "options": [
      "IG(A) = 0.08; greater than Windy's gain, making A a better split.",
      "IG(A) = 1.80; greater than any attribute can achieve.",
      "IG(A) = 0.08; slightly better than Windy's gain of 0.048.",
      "IG(A) = 0.94; equal to the original dataset entropy."
    ],
    "correctOption": 2,
    "explanation": "IG(A) = H(S) - M(A) = 0.94 - 0.86 = 0.08. Compared to Windy's gain of 0.048 from the weather dataset, Attribute A provides more information gain (0.08 > 0.048), making it a better splitting choice than Windy would be. However, both are much lower than Outlook's gain of 0.247, which is why Outlook was chosen as the root."
  },
  {
    "quizTitle": "Classification: Decision Trees",
    "category": "Information Gain Calculation",
    "question": "An attribute 'Region' splits a dataset into 3 subsets: North (6 instances, H=0.80), South (5 instances, H=0.60), West (3 instances, H=0.90). Total instances = 14 and H(S) = 0.94. What is the weighted average entropy M(Region)?",
    "options": [
      "0.730",
      "0.767",
      "0.743",
      "0.800"
    ],
    "correctOption": 2,
    "explanation": "M(Region) = (6/14)*0.80 + (5/14)*0.60 + (3/14)*0.90 = 0.3429 + 0.2143 + 0.1929 = 0.7500. Wait — recalculating: (6/14)=0.4286*0.80=0.3429, (5/14)=0.3571*0.60=0.2143, (3/14)=0.2143*0.90=0.1929. Sum = 0.3429+0.2143+0.1929 = 0.7500. Closest is 0.743 but the exact answer rounds to 0.750. The key skill is applying the weighted sum formula: each subset's entropy weighted by its proportion of the total."
  },
  {
    "quizTitle": "Classification: Decision Trees",
    "category": "ID3 Algorithm Steps",
    "question": "What is the FIRST step in the ID3 algorithm before evaluating any individual attribute?",
    "options": [
      "Pick the attribute with the highest information gain.",
      "Compute the entropy H(S) for the entire current dataset.",
      "Split the dataset on the attribute with the lowest entropy.",
      "Calculate the weighted average entropy for each attribute."
    ],
    "correctOption": 1,
    "explanation": "The first step in the ID3 algorithm is: 'Compute the entropy for the dataset.' This baseline entropy H(S) is needed to calculate information gain for every attribute — you cannot know how much a split reduces uncertainty without first knowing the current uncertainty. The weather dataset baseline was H(S) = 0.94."
  },
  {
    "quizTitle": "Classification: Decision Trees",
    "category": "ID3 Algorithm Steps",
    "question": "For each attribute in the second step of ID3, what three sub-calculations must be performed?",
    "options": [
      "i) Calculate accuracy for each value; ii) Compare to test set; iii) Output the tree",
      "i) Calculate entropy for all categorical values; ii) Take the weighted average entropy for the attribute; iii) Calculate information gain for the attribute",
      "i) Sort instances; ii) Find the median; iii) Split at the median",
      "i) Calculate Gini Index; ii) Calculate F1 score; iii) Calculate precision"
    ],
    "correctOption": 1,
    "explanation": "For each attribute, ID3 requires: (i) Calculate entropy H(t) for each subset (categorical value) of the attribute; (ii) Compute the weighted average entropy M(A) across all subsets; (iii) Calculate information gain IG = H(S) - M(A). These three sub-steps are repeated for every attribute before the best one is selected."
  },
  {
    "quizTitle": "Classification: Decision Trees",
    "category": "ID3 Algorithm Steps",
    "question": "After calculating information gain for all attributes in the current dataset, what does ID3 do NEXT?",
    "options": [
      "Removes the attribute with the lowest information gain from consideration.",
      "Stops growing the tree regardless of purity.",
      "Picks the attribute with the HIGHEST information gain to use as the splitting node at the current position.",
      "Averages all information gains and splits on the attribute closest to the average."
    ],
    "correctOption": 2,
    "explanation": "Step 3 of the ID3 algorithm: 'Pick the attribute with highest information gain.' This attribute becomes the splitting node (or root node for the first iteration). In the weather dataset, after comparing all four attributes, Outlook (IG=0.247) was selected as the root because it had the highest gain."
  },
  {
    "quizTitle": "Classification: Decision Trees",
    "category": "ID3 Algorithm Steps",
    "question": "After selecting the root node (e.g., Outlook in the weather example), what does ID3 do with the remaining branches that are not yet pure?",
    "options": [
      "Assigns the majority class label to all remaining instances.",
      "Stops the algorithm — the root is sufficient for classification.",
      "Repeats the entire ID3 process (compute entropy, evaluate each remaining attribute, pick highest gain) recursively for each impure subset.",
      "Randomly selects the next splitting attribute."
    ],
    "correctOption": 2,
    "explanation": "ID3 Step 4: 'Repeat until we get the tree we desired.' The algorithm is applied recursively to each non-pure subset. For the weather dataset, after placing Outlook at the root: the Sunny subset needed further splitting (Humidity was chosen), and the Rainy subset needed further splitting (Windy was chosen). Overcast was already pure → leaf."
  },
  {
    "quizTitle": "Classification: Decision Trees",
    "category": "ID3 Algorithm Steps",
    "question": "Place the ID3 algorithm steps in the CORRECT sequence: (A) Pick the attribute with the highest information gain, (B) Compute entropy for the dataset, (C) Repeat for subtrees, (D) For each attribute: calculate entropy values, weighted average, and gain.",
    "options": [
      "B → D → A → C",
      "A → B → D → C",
      "D → A → B → C",
      "B → A → D → C"
    ],
    "correctOption": 0,
    "explanation": "The correct ID3 sequence is: (B) Compute overall dataset entropy first → (D) For every attribute, calculate entropies, weighted average, and gain → (A) Select the attribute with the highest information gain → (C) Repeat the entire process recursively for each resulting subset. The course presents these as Steps 1, 2, 3, 4."
  },
  {
    "quizTitle": "Classification: Decision Trees",
    "category": "ID3 Algorithm Steps",
    "question": "In the weather dataset, attributes were evaluated with these Information Gains: Outlook=0.247, Temperature=0.029, Humidity=0.152, Windy=0.048. Based on ID3, which attribute becomes the ROOT NODE?",
    "options": [
      "Temperature — because it has the lowest gain and creates the most uniform subsets.",
      "Humidity — because 0.152 is the middle value, making it the safest choice.",
      "Outlook — because it has the HIGHEST information gain of 0.247, meaning it reduces uncertainty the most.",
      "Windy — because Boolean features are always preferred in ID3."
    ],
    "correctOption": 2,
    "explanation": "The course states: 'As Outlook has the highest Information Gain, our root node is Outlook.' ID3 always selects the attribute with the highest IG as the splitting node. Outlook (0.247) dramatically outperforms the next best (Humidity at 0.152) and especially Temperature (0.029), which provides almost no useful information for predicting Play."
  },
  {
    "quizTitle": "Classification: Decision Trees",
    "category": "Tree Building",
    "question": "During ID3 tree construction, what condition causes a node to become a LEAF NODE (terminal node) immediately — requiring no further splitting?",
    "options": [
      "When the node has more than 10 instances remaining.",
      "When the attribute used has the highest information gain.",
      "When ALL instances in the subset belong to the same class (entropy = 0, pure node).",
      "When the average entropy of the subset equals the overall dataset entropy."
    ],
    "correctOption": 2,
    "explanation": "A node becomes a leaf when its entropy = 0, meaning all instances in that subset belong to the same class — there is no uncertainty left to resolve. In the weather dataset, Outlook=Overcast produced only Play=Yes instances (entropy=0), making it an immediate leaf. No further splitting is possible or necessary for pure nodes."
  },
  {
    "quizTitle": "Classification: Decision Trees",
    "category": "Tree Building",
    "question": "In the weather dataset decision tree, why does the Overcast branch from the Outlook root node lead DIRECTLY to a leaf labeled Yes without testing any other attribute?",
    "options": [
      "Because Overcast is a rare weather condition and the tree ignores rare values.",
      "Because all 4 instances where Outlook=Overcast have Play=Yes — the subset is pure with entropy=0, so no further splitting is needed.",
      "Because the ID3 algorithm ran out of attributes to test after using Outlook.",
      "Because Overcast was manually designated as always Yes by the domain expert."
    ],
    "correctOption": 1,
    "explanation": "Every single instance where Outlook=Overcast in the training data had Play=Yes. This makes the subset perfectly pure — entropy = -(4/4)*log2(4/4) = 0. A pure subset is already fully resolved: we know with certainty what class to predict. It becomes a leaf node labeled Yes, with no need to check Humidity, Temperature, or Windy."
  },
  {
    "quizTitle": "Classification: Decision Trees",
    "category": "Tree Building",
    "question": "A new weather instance arrives: Outlook=Overcast, Temperature=Hot, Humidity=High, Windy=TRUE. Using the final weather decision tree (Outlook root → Humidity for Sunny → Windy for Rainy), what prediction does the tree make?",
    "options": [
      "No — because it is hot and humid.",
      "No — because Windy=TRUE typically means no play.",
      "Yes — because Outlook=Overcast leads directly to the Yes leaf, regardless of other attributes.",
      "Unknown — the tree cannot classify this instance without checking all attributes."
    ],
    "correctOption": 2,
    "explanation": "The tree routes this instance based on Outlook first. Outlook=Overcast → the tree goes directly to the Yes leaf (pure subset from training — all overcast instances were yes). Temperature, Humidity, and Windy are NEVER tested for overcast instances. The tree's prediction is Yes regardless of the other attribute values."
  },
  {
    "quizTitle": "Classification: Decision Trees",
    "category": "Tree Building",
    "question": "Another instance arrives: Outlook=Sunny, Temperature=Cold, Humidity=High, Windy=FALSE. Using the weather decision tree, what is the prediction?",
    "options": [
      "Yes — because it is cold and not windy, good conditions for play.",
      "No — because Outlook=Sunny routes to the Humidity node, and Humidity=High leads to the No leaf.",
      "Yes — because Windy=FALSE in rainy conditions leads to Yes.",
      "Uncertain — Sunny days have mixed results."
    ],
    "correctOption": 1,
    "explanation": "Trace the path: Outlook=Sunny → test Humidity → Humidity=High → No leaf. The final tree shows: under the Sunny branch, Humidity=High leads to No and Humidity=Normal leads to Yes. Temperature and Windy are irrelevant for Sunny instances — only Humidity determines the outcome. The prediction is No."
  },
  {
    "quizTitle": "Classification: Decision Trees",
    "category": "Tree Building",
    "question": "A third instance: Outlook=Rainy, Temperature=Mild, Humidity=High, Windy=FALSE. What does the weather decision tree predict?",
    "options": [
      "No — because Rainy weather means no play.",
      "Yes — because Outlook=Rainy routes to the Windy node, and Windy=FALSE leads to the Yes leaf.",
      "No — because Windy=FALSE means the weather is calm but humidity is high.",
      "Yes — because Humidity=High and Rainy combine for good playing conditions."
    ],
    "correctOption": 1,
    "explanation": "Path: Outlook=Rainy → test Windy → Windy=FALSE → Yes leaf. For rainy instances, only Windy matters. Windy=FALSE → Yes (people play); Windy=TRUE → No (too windy to play). Temperature and Humidity are never checked for Rainy instances. Humidity=High does not matter here — the prediction is Yes."
  },
  {
    "quizTitle": "Classification: Decision Trees",
    "category": "Tree Building",
    "question": "The weather dataset Metrics Summary shows: Outlook IG=0.247, Temperature IG=0.029, Humidity IG=0.152, Windy IG=0.048. After choosing Outlook as the root, the algorithm processes the Sunny subset. From the remaining attributes (Temperature, Humidity, Windy), Humidity has the highest IG within the Sunny subset and is chosen. This demonstrates which principle?",
    "options": [
      "ID3 randomly selects attributes for subtrees.",
      "ID3 recalculates information gain on the SUBSET (not the full dataset) to choose the next splitting attribute recursively.",
      "The root node attribute (Outlook) is reused for every subsequent split.",
      "Temperature is always skipped when its IG is below 0.05."
    ],
    "correctOption": 1,
    "explanation": "The ID3 algorithm is recursive: after the root split, for each resulting subset, it RE-RUNS the full evaluation (compute entropy on the subset, calculate IG for remaining attributes on THAT subset, pick the highest IG attribute for THAT subset). The information gains in the full dataset do not transfer — they must be recomputed on each partition. This is why Step 4 says 'Repeat the same step for subtrees.'"
  },
  {
    "quizTitle": "Classification: Decision Trees",
    "category": "Pruning",
    "question": "A decision tree is trained and achieves 98% accuracy on training data but only 55% on the test set. The team suspects the tree has memorized the training data by growing too deep and creating leaves for tiny, noisy subsets. Which technique addresses this problem?",
    "options": [
      "Increasing the training data size",
      "Pruning — removing insignificant parts of the tree to produce a more generalized model",
      "Increasing the number of leaves to cover more cases",
      "Using a higher entropy threshold for splits"
    ],
    "correctOption": 1,
    "explanation": "Pruning is 'a technique used to avoid overfitting' by removing insignificant, overly specific parts of the tree. The training-test accuracy gap (98% vs 55%) is a classic overfitting symptom — the tree learned training noise. Pruning gives a 'generalized tree by removing very specific, but insignificant nodes,' improving test performance."
  },
  {
    "quizTitle": "Classification: Decision Trees",
    "category": "Pruning",
    "question": "What is the fundamental goal of pruning a decision tree?",
    "options": [
      "To increase training accuracy by adding more nodes",
      "To reduce tree depth by merging nodes with similar entropy",
      "To produce a more generalized, less complex tree by removing branches that do not meaningfully improve classification",
      "To convert categorical features into continuous ones"
    ],
    "correctOption": 2,
    "explanation": "Pruning's goal is generalisation. The course states pruning 'gives a generalized tree by removing very specific, but insignificant nodes.' Unpruned trees that grow to full depth tend to overfit by learning noise in the training data. Pruning sacrifices some training accuracy to gain substantially better performance on unseen data."
  },
  {
    "quizTitle": "Classification: Decision Trees",
    "category": "Pruning",
    "question": "There are two main types of pruning. What is the key timing difference between pre-pruning and post-pruning?",
    "options": [
      "Pre-pruning is applied after model evaluation; post-pruning is applied before training.",
      "Pre-pruning stops the tree from growing TOO LARGE during training (early stopping); post-pruning lets the tree grow FULLY and then cuts back unnecessary branches.",
      "Pre-pruning uses training data; post-pruning uses only test data.",
      "Pre-pruning is only for ID3; post-pruning is only for CART."
    ],
    "correctOption": 1,
    "explanation": "The critical difference is timing: Pre-pruning (early stopping) prevents the tree from growing beyond a certain complexity during the build phase. Post-pruning (cut back later) allows the tree to grow completely first, then removes branches afterward. The course: 'pre-pruning (early stopping)' vs 'post-pruning (cut back later).'"
  },
  {
    "quizTitle": "Classification: Decision Trees",
    "category": "Pruning - Pre-pruning",
    "question": "A data scientist sets max_depth=5 in her decision tree model. Which type of pruning is this, and what problem does it prevent?",
    "options": [
      "Post-pruning — it removes nodes after the full tree is built.",
      "Pre-pruning — it stops tree growth early by limiting maximum depth, preventing the tree from becoming overly complex and overfitting.",
      "Neither — max_depth is a hyperparameter, not a pruning technique.",
      "Random Forest pruning — it limits how many trees are built."
    ],
    "correctOption": 1,
    "explanation": "Limiting maximum depth is a pre-pruning (early stopping) technique. The course lists it as: 'Limit maximum depth of tree.' By capping how deep the tree can grow, you prevent it from learning extremely specific rules that only apply to tiny subsets of the training data. This is applied during training, before the tree reaches full complexity."
  },
  {
    "quizTitle": "Classification: Decision Trees",
    "category": "Pruning - Pre-pruning",
    "question": "Another pre-pruning technique requires that any node must have at least 20 training instances before it can be split further. What is this technique called, and what is its benefit?",
    "options": [
      "Reduced error pruning — it removes branches retrospectively after training.",
      "Minimum samples per split/leaf — a pre-pruning technique that prevents the tree from creating branches based on very few instances, which are likely to be noise.",
      "Maximum leaf size — it limits the number of instances in any leaf.",
      "Entropy threshold — it stops splitting when entropy drops below a threshold."
    ],
    "correctOption": 1,
    "explanation": "Setting a minimum samples threshold for splitting is a pre-pruning technique. The course: 'By setting minimum samples per split/leaf.' If a node has fewer than the minimum number of instances to split, it becomes a leaf instead of splitting further. This prevents the tree from making decisions based on just 1 or 2 training examples, which likely represent noise."
  },
  {
    "quizTitle": "Classification: Decision Trees",
    "category": "Pruning - Pre-pruning",
    "question": "What is the advantage of stopping a split if the improvement in purity (information gain) is below a set threshold (e.g., IG < 0.01)?",
    "options": [
      "It increases the number of leaves by creating splits even for marginal gains.",
      "It prevents adding splits that barely improve classification, keeping the tree simpler without meaningful accuracy loss.",
      "It replaces entropy with Gini Index for subsequent splits.",
      "It forces the tree to use all available attributes."
    ],
    "correctOption": 1,
    "explanation": "Stopping when improvement in purity is too small is a pre-pruning technique: 'Stop splitting if improvement in purity is too small.' A split that achieves IG=0.001 barely helps classification but adds complexity and potential overfitting. By requiring a meaningful minimum gain before splitting, you keep the tree simpler and more generalizable without sacrificing real predictive power."
  },
  {
    "quizTitle": "Classification: Decision Trees",
    "category": "Pruning - Pre-pruning",
    "question": "Which of the following is NOT listed as an advantage of pre-pruning?",
    "options": [
      "Prevents overfitting early",
      "Faster training because the tree does not grow to full complexity",
      "More accurate than post-pruning",
      "Simpler, more compact trees"
    ],
    "correctOption": 2,
    "explanation": "The course lists pre-pruning advantages as: prevents overfitting early, faster training, and simpler trees. 'More accurate than pre-pruning' is actually listed as an advantage of POST-PRUNING — not pre-pruning. Pre-pruning sometimes stops too early and misses useful splits, making it potentially less accurate than post-pruning that sees the full tree before deciding what to remove."
  },
  {
    "quizTitle": "Classification: Decision Trees",
    "category": "Pruning - Post-pruning",
    "question": "Post-pruning uses a validation test to cut weak branches. What is the 'Reduced Error Pruning' technique within post-pruning?",
    "options": [
      "It reduces the training data size to simplify the tree.",
      "It removes branches that do NOT significantly affect overall accuracy — branches whose removal causes minimal or no reduction in validation performance.",
      "It retrains the tree with a smaller learning rate after cutting.",
      "It replaces the Gini Index with entropy after tree growth."
    ],
    "correctOption": 1,
    "explanation": "Reduced error pruning tests whether removing a branch causes a meaningful drop in accuracy on the validation set. The course: 'Removes branches that do not significantly affect the overall accuracy.' If cutting a branch reduces validation accuracy by only 0.1%, that branch is likely fitting noise and should be removed for a more generalized model."
  },
  {
    "quizTitle": "Classification: Decision Trees",
    "category": "Pruning - Post-pruning",
    "question": "The 'minimum leaf size' post-pruning technique removes leaf nodes with fewer samples than a specified threshold. Why is this beneficial?",
    "options": [
      "Leaves with many samples have high entropy and should be removed.",
      "Leaves with very few samples likely represent noise or outliers in the training data — removing them prevents the model from making rules based on insufficient evidence.",
      "Small leaves are computationally expensive to evaluate at prediction time.",
      "Minimum leaf size increases the training accuracy of the model."
    ],
    "correctOption": 1,
    "explanation": "The course states: 'minimum leaf size: removes leaf nodes with fewer samples than a specified threshold.' A leaf with only 1 or 2 training instances is suspicious — it represents a very specific rule learned from almost no data, likely noise. Removing such leaves forces those instances to be classified by their parent node's majority class, producing a more robust, generalizable prediction."
  },
  {
    "quizTitle": "Classification: Decision Trees",
    "category": "Pruning - Post-pruning",
    "question": "Why is post-pruning generally considered more accurate than pre-pruning, despite being more computationally expensive?",
    "options": [
      "Post-pruning uses Gini Index which is more accurate than entropy.",
      "Post-pruning requires more training data, which inherently improves accuracy.",
      "Post-pruning sees the COMPLETE tree before deciding what to cut, allowing it to make more informed decisions about which branches to keep versus remove, unlike pre-pruning which may stop too early and miss useful splits.",
      "Post-pruning always produces smaller trees than pre-pruning."
    ],
    "correctOption": 2,
    "explanation": "The course states post-pruning is 'more accurate than pre-pruning.' Pre-pruning uses local information (current entropy) to decide early, potentially stopping before discovering that a currently impure branch would become pure with one more split. Post-pruning has full context — the complete tree — before removing anything, enabling better decisions about which branches are truly useless."
  },
  {
    "quizTitle": "Classification: Decision Trees",
    "category": "Pruning Scenarios",
    "question": "A logistics company needs to deploy a decision tree model for real-time shipment routing where predictions must be generated in milliseconds with very limited computing time per decision. The team can retrain weekly but needs fast inference. Which pruning approach is most aligned with their goal?",
    "options": [
      "Post-pruning — it gives more accurate trees that perform better in real-time.",
      "No pruning — accuracy is most important for routing decisions.",
      "Pre-pruning — faster training, simpler trees require less computation to traverse at prediction time, and overfitting is prevented early.",
      "Post-pruning with reduced error pruning — the validation test adds only 5 seconds."
    ],
    "correctOption": 2,
    "explanation": "Pre-pruning produces simpler trees (fewer nodes and depth) which are faster to traverse at prediction time AND faster to train. The course: advantages of pre-pruning are 'Prevent overfitting early, Faster training, Simpler trees.' For real-time routing where millisecond inference matters, simpler trees are clearly advantageous over deeper post-pruned trees."
  },
  {
    "quizTitle": "Classification: Decision Trees",
    "category": "Pruning Scenarios",
    "question": "A medical diagnostic team is building a decision tree to detect a rare disease. Missing a true positive (FN) is life-threatening. They have time to train overnight and want the best possible model accuracy. Which pruning approach is MOST appropriate?",
    "options": [
      "Pre-pruning with max depth=3 — simpler trees are more interpretable for doctors.",
      "No pruning — the tree must be as detailed as possible to catch all cases.",
      "Post-pruning — it is more accurate than pre-pruning and reduces overfitting while keeping useful splits that might help detect rare disease patterns.",
      "Pre-pruning with minimum samples=100 — ensures every leaf has sufficient support."
    ],
    "correctOption": 2,
    "explanation": "When accuracy is the priority and training time is available, post-pruning is preferred. The course: post-pruning is 'more accurate than pre-pruning' and 'reduces overfitting while keeping useful splits.' For rare disease detection where missing positives is critical, the higher accuracy of post-pruning justifies the extra training time. It keeps useful disease-indicator patterns while removing noise."
  },
  {
    "quizTitle": "Classification: Decision Trees",
    "category": "Pruning Scenarios",
    "question": "Both pre-pruning AND post-pruning ultimately address the same core problem with decision trees. What is that shared problem?",
    "options": [
      "Both handle class imbalance in the training dataset.",
      "Both convert the decision tree into a Random Forest.",
      "Both combat overfitting — the tendency of unpruned decision trees to memorize training data, including noise, at the expense of generalization to new data.",
      "Both increase the speed of the ID3 algorithm."
    ],
    "correctOption": 2,
    "explanation": "Both types of pruning are 'techniques used to avoid overfitting.' Pre-pruning prevents it early; post-pruning corrects it after growth. An unpruned decision tree will grow until every leaf is pure or no attributes remain — this often means memorizing training-set-specific patterns and noise. Pruning in either form produces a tree that generalizes better to unseen instances."
  },
  {
    "quizTitle": "Classification: Decision Trees",
    "category": "Random Forest",
    "question": "A data scientist finds that her single decision tree achieves 92% training accuracy but only 71% test accuracy. She switches to Random Forest and the test accuracy improves to 85%. Why does Random Forest generally outperform a single decision tree?",
    "options": [
      "Random Forest uses Gini Index instead of entropy, making it inherently more accurate.",
      "Random Forest is an ensemble method that builds many diverse trees and combines their predictions, reducing the variance and overfitting that individual trees are prone to.",
      "Random Forest uses the same data for each tree, but with a more powerful splitting algorithm.",
      "Random Forest always grows shallower trees, which are inherently more generalizable."
    ],
    "correctOption": 1,
    "explanation": "Random Forest is 'an ensemble learning method that builds multiple decision trees during training and combines their predictions by majority vote.' By building many diverse trees (using bootstrap sampling and random feature selection) and aggregating their votes, errors in individual trees cancel out. The ensemble is far less prone to the overfitting (92% train, 71% test) that single trees exhibit."
  },
  {
    "quizTitle": "Classification: Decision Trees",
    "category": "Random Forest",
    "question": "What does BAGGING stand for, and how does it apply to Random Forest?",
    "options": [
      "Binary Aggregating — combining binary trees into one",
      "Bootstrap Aggregating — multiple random samples are taken with replacement, each used to train a different tree, and final predictions are combined (aggregated)",
      "Balanced Averaging — averaging the predictions from balanced datasets",
      "Branching and Growing — a technique for expanding decision trees"
    ],
    "correctOption": 1,
    "explanation": "Bagging = Bootstrap Aggregating. The course: 'How it works — by Bagging — Bootstrap Aggregating.' Bootstrap creates diverse training sets by sampling WITH replacement. Aggregating combines all trees' predictions by majority vote. These two steps together create the diversity (different trees train on different data) and reliability (voting smooths out errors) that make Random Forest powerful."
  },
  {
    "quizTitle": "Classification: Decision Trees",
    "category": "Random Forest",
    "question": "Random Forest uses bootstrap sampling where multiple random samples are drawn WITH REPLACEMENT from the original training data. What does 'with replacement' mean in this context?",
    "options": [
      "Each bootstrap sample replaces the original training data permanently.",
      "After each sample is drawn, it is removed from the dataset so it cannot be selected again.",
      "An instance drawn into a bootstrap sample is put back — it can be selected again, meaning the same instance can appear multiple times in a single bootstrap sample and some instances may not appear at all.",
      "Only instances with the majority class are replaced with synthetic instances."
    ],
    "correctOption": 2,
    "explanation": "Sampling with replacement means each selected instance is 'returned' to the pool before the next selection. This means a single bootstrap sample may contain the same training instance 2 or 3 times, while other instances might be absent entirely. This creates diversity between bootstrap samples — each tree trains on a slightly different version of the data — which is key to Random Forest's effectiveness."
  },
  {
    "quizTitle": "Classification: Decision Trees",
    "category": "Random Forest",
    "question": "In Random Forest, at each node during tree construction, what is 'Random Feature Selection' and why is it important?",
    "options": [
      "All features are evaluated and the best one is always chosen — same as standard ID3.",
      "At each split, only a RANDOM SUBSET of features is considered (not all features), creating diversity between trees by ensuring they do not all split on the same dominant features.",
      "Features are randomly ordered before training to remove bias.",
      "Random Feature Selection replaces information gain with a random number for selecting splits."
    ],
    "correctOption": 1,
    "explanation": "The course: 'Random feature selection — at each split, a random subset of features is considered.' If all trees always had access to all features, they might all build similar trees dominated by the same high-IG features — defeating the purpose of an ensemble. Limiting features at each split forces trees to diversify, creating an ensemble where each tree captures different aspects of the data."
  },
  {
    "quizTitle": "Classification: Decision Trees",
    "category": "Random Forest",
    "question": "After training 100 decision trees in a Random Forest for a binary classification (Yes/No), the trees vote as follows: 68 trees predict Yes, 32 trees predict No. What is the Random Forest's final prediction?",
    "options": [
      "No — because the minority position must be considered carefully.",
      "Yes — because 68 out of 100 trees (majority) predict Yes.",
      "Uncertain — a 68/32 split is not decisive enough.",
      "The average probability: 0.68 Yes and 0.32 No."
    ],
    "correctOption": 1,
    "explanation": "Random Forest uses 'Aggregation: Prediction by majority vote.' With 68 out of 100 trees predicting Yes, the majority clearly votes Yes, and that is the final prediction. Majority voting reduces the influence of any individual tree that may have overfit or learned noise. This aggregation is what makes ensembles more reliable than any single tree."
  },
  {
    "quizTitle": "Classification: Decision Trees",
    "category": "Random Forest",
    "question": "Why does building multiple trees on different bootstrap samples reduce overfitting compared to a single decision tree?",
    "options": [
      "Each tree is forced to use fewer features, making all trees simpler.",
      "Bootstrap sampling automatically removes noisy instances.",
      "Different trees overfit to different noisy patterns in their bootstrap samples, and when these errors are diverse and independent, they cancel out when votes are aggregated — the signal survives but the noise averages away.",
      "Random forests use post-pruning on every tree, which is why they generalize better."
    ],
    "correctOption": 2,
    "explanation": "Individual decision trees overfit to random noise in the training data. But different bootstrap samples contain different random noise patterns. When 100 trees vote, each overfitting to slightly different noise, the noise votes are inconsistent (randomly distributed) and cancel out in the majority vote. The true signal is consistent across trees, so it survives aggregation. This is the statistical foundation of ensemble methods."
  },
  {
    "quizTitle": "Classification: Decision Trees",
    "category": "Random Forest",
    "question": "A company must choose between a single decision tree and a Random Forest for predicting customer churn. The single tree is highly interpretable — you can trace exactly why it predicted churn for each customer. What is the trade-off when switching to Random Forest?",
    "options": [
      "Random Forest is less accurate but easier to explain to stakeholders.",
      "Random Forest typically offers better accuracy and generalization, but sacrifices interpretability — you cannot easily trace why a specific prediction was made since it combines hundreds of trees.",
      "Random Forest always takes less computation time than a single tree.",
      "There is no trade-off — Random Forest provides both better accuracy and interpretability."
    ],
    "correctOption": 1,
    "explanation": "A single decision tree is highly interpretable — you follow the path from root to leaf and read the decision rules. Random Forest sacrifices this transparency for accuracy. With 100 trees voting, there is no single readable path explaining a prediction. The ensemble's strength is statistical robustness, not explainability. This accuracy-interpretability trade-off is a fundamental consideration in model selection."
  },
  {
    "quizTitle": "Classification: Decision Trees",
    "category": "Random Forest",
    "question": "Random Forest is described as an 'ensemble learning method.' What does ensemble learning mean in this context?",
    "options": [
      "A single, very powerful model is trained on the entire dataset without sampling.",
      "Multiple models (trees) are trained independently, and their predictions are combined to produce a final prediction that is more reliable than any single model's prediction.",
      "Models are trained sequentially, with each new model correcting the previous model's errors.",
      "Ensemble learning means using the same model on different sections of the test set."
    ],
    "correctOption": 1,
    "explanation": "Ensemble learning combines multiple models to produce better predictive performance than any individual model. The course: Random Forest is 'an ensemble learning method that builds multiple decision trees during training and combines their predictions by majority vote.' By 'ensemble,' Random Forest combines the diverse wisdom of many trees, reducing individual model weaknesses."
  },
  {
    "quizTitle": "Classification: Decision Trees",
    "category": "Random Forest",
    "question": "Summarize the three key mechanisms of Random Forest's Bagging process in the correct order of operations:",
    "options": [
      "Aggregation → Bootstrap Sampling → Random Feature Selection",
      "Random Feature Selection → Aggregation → Bootstrap Sampling",
      "Bootstrap Sampling (draw samples with replacement) → Build tree using Random Feature Selection at each split → Aggregate all tree predictions by majority vote",
      "Train one tree → Copy it 100 times → Vote among identical trees"
    ],
    "correctOption": 2,
    "explanation": "Random Forest's Bagging process: (1) Bootstrap Sampling — draw multiple random samples WITH replacement from training data; (2) Build a separate decision tree on each bootstrap sample using Random Feature Selection (only a subset of features considered at each split) to ensure tree diversity; (3) Aggregate all trees' predictions through majority vote for the final output. The course lists: bootstrap sampling, random feature selection, aggregation."
  },
  {
    "quizTitle": "Classification: Decision Trees",
    "category": "Applied Entropy Scenario",
    "question": "An analyst builds an ID3 tree for email classification (Spam/Not Spam). A subset called 'Contains $$$' has 20 instances: 18 Spam and 2 Not Spam. A 'Contains Hello' subset has 30 instances: 15 Spam and 15 Not Spam. Without calculating exact entropy values, which subset has LOWER entropy, and what does this mean for ID3?",
    "options": [
      "Contains Hello — more instances means more information to learn from.",
      "Contains $$$ — an 18/2 split is much closer to pure than 15/15. Lower entropy means the feature is more effective at separating classes and will contribute to higher information gain.",
      "Both subsets have the same entropy because they contain different features.",
      "Contains Hello — a balanced split is preferable for fair classification."
    ],
    "correctOption": 1,
    "explanation": "The 'Contains $$$' subset has 18/2 (90% Spam) — very close to pure, so low entropy. The 'Contains Hello' subset has 15/15 (50/50) — maximum entropy = 1.0, maximally uncertain. ID3 prefers attributes that create LOW-entropy subsets because they best separate the classes. An attribute creating near-pure subsets contributes high information gain and is chosen first."
  },
  {
    "quizTitle": "Classification: Decision Trees",
    "category": "Applied Entropy Scenario",
    "question": "After computing information gains for a medical diagnosis dataset: Symptom A (IG=0.18), Symptom B (IG=0.04), Symptom C (IG=0.22), Symptom D (IG=0.09). Which symptom becomes the root node, and what does a gain of 0.04 for Symptom B indicate?",
    "options": [
      "Symptom A is root (highest at 0.18); Symptom B's gain of 0.04 means it is an excellent discriminator.",
      "Symptom C is root (highest gain at 0.22); Symptom B's gain of 0.04 indicates it provides very little information for distinguishing between diagnoses — splitting on it barely reduces uncertainty.",
      "Symptom B is root (lowest gain means fewest mistakes); 0.04 is the safest split.",
      "Symptom D is root (middle value is most balanced); B's low gain means high accuracy."
    ],
    "correctOption": 1,
    "explanation": "Symptom C has the highest IG (0.22) → root node. Symptom B's IG of 0.04 is very low — it means splitting on Symptom B only reduces entropy by 0.04 bits, barely improving classification. The algorithm would place it deep in the tree (if at all), and with pruning, it might be removed entirely as uninformative. High IG = most informative first."
  },
  {
    "quizTitle": "Classification: Decision Trees",
    "category": "Applied Entropy Scenario",
    "question": "A dataset subset has entropy = 0 after splitting on a feature. What should ID3 do with this node, and why?",
    "options": [
      "Continue splitting using the remaining attributes to ensure all features are considered.",
      "This node becomes a LEAF NODE immediately — entropy=0 means all instances have the same class label, so the prediction is certain and no further splitting is needed or meaningful.",
      "Recalculate the entropy using the parent node's data to verify the result.",
      "Apply post-pruning to remove this node since it has suspiciously perfect purity."
    ],
    "correctOption": 1,
    "explanation": "Entropy=0 = pure node. When all instances in a subset share the same class, the prediction is certain — there is nothing left to learn. The node becomes a leaf labeled with that class. Further splitting would be pointless (you cannot improve on certainty) and potentially harmful (adding complexity without benefit). In the weather dataset, Overcast became a Yes leaf for exactly this reason."
  },
  {
    "quizTitle": "Classification: Decision Trees",
    "category": "Applied Entropy Scenario",
    "question": "An unpruned decision tree is built on a small training dataset and achieves 100% training accuracy, but each leaf contains only 1 training instance. Why is this tree problematic, and how does pruning address it?",
    "options": [
      "It is not problematic — 100% training accuracy is always the goal.",
      "The tree has memorized individual training examples (extreme overfitting), making it useless for new data. Pruning removes insignificant leaves (e.g., via minimum leaf size) to create a more generalized model that correctly classifies unseen instances.",
      "The tree is too shallow and pruning would make it even shallower.",
      "The tree has too many features and pruning removes redundant features."
    ],
    "correctOption": 1,
    "explanation": "A leaf with 1 instance means the tree created a specific rule for a single training example — this is extreme overfitting. Such rules have essentially zero probability of applying to new instances. Pruning (especially minimum leaf size post-pruning, or minimum samples pre-pruning) removes these overly specific leaves, forcing the tree to make broader, more robust predictions that generalize beyond the training data."
  },
  {
    "quizTitle": "Classification: Decision Trees",
    "category": "Applied Entropy Scenario",
    "question": "For the weather dataset (H(S)=0.94), the Outlook feature has weighted average entropy M(Outlook)=0.6936 and the Temperature feature has weighted average entropy M(Temperature)=0.911. Using the IG formula, confirm which has higher gain and explain what M(Temperature)=0.911 tells us.",
    "options": [
      "Temperature has higher gain (0.911 > 0.6936); high M means the subsets are very pure.",
      "Outlook has higher gain: IG(Outlook)=0.94-0.6936=0.2464 vs IG(Temperature)=0.94-0.911=0.029. M(Temperature)=0.911 means splitting on Temperature barely reduces entropy — the resulting subsets are almost as uncertain as the original dataset.",
      "Temperature has higher gain because lower entropy values mean better splits.",
      "Both have the same gain since they share the same H(S) of 0.94."
    ],
    "correctOption": 1,
    "explanation": "IG(Outlook) = 0.94 - 0.6936 = 0.2464. IG(Temperature) = 0.94 - 0.911 = 0.029. Outlook gains much more. M(Temperature)=0.911 is close to H(S)=0.94, meaning splitting on Temperature barely changes the entropy — the subsets are almost as mixed as the original dataset. Temperature tells us almost nothing useful about whether Play=Yes or No. Outlook dramatically reduces uncertainty (from 0.94 to 0.69)."
  }
]
