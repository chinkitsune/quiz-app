// data/qyuestions/bi-clustering-and-k-means.js

module.exports = [
  {
    "quizTitle": "Clustering & K-Means",
    "category": "Clustering Fundamentals",
    "question": "A telecom company has 50,000 customer usage records with no predefined customer segments. They want to discover natural groupings of similar customers based on call patterns, data usage, and texting habits. Which type of learning is most appropriate for this task?",
    "options": [
      "Supervised classification, because customer behaviour is always categorical.",
      "Supervised regression, because usage patterns are numeric.",
      "Unsupervised clustering, because the goal is to group similar instances together without any predefined labels.",
      "Outlier detection, because some customers may have unusual usage."
    ],
    "correctOption": 2,
    "explanation": "The course defines clustering as an unsupervised technique where similar instances are grouped into the same cluster and dissimilar ones into other clusters. Since there are no predefined customer segment labels, this is a clustering task, not classification (which requires labelled training data)."
  },
  {
    "quizTitle": "Clustering & K-Means",
    "category": "Clustering Fundamentals",
    "question": "What is the defining characteristic of a 'cluster' as described in the course material?",
    "options": [
      "A single data point that deviates from the rest of the dataset.",
      "A collection of data objects where similar instances are grouped together and dissimilar ones are placed in other clusters.",
      "A labelled subset of training data used to test a classifier.",
      "A branch of a decision tree representing a specific decision rule."
    ],
    "correctOption": 1,
    "explanation": "The course defines a cluster as 'a collection of data objects' where 'similar instances [are] grouped in the same cluster' and 'dissimilar ones in other clusters.' This dual principle — high intra-cluster similarity and high inter-cluster dissimilarity — is the foundation of all clustering algorithms."
  },
  {
    "quizTitle": "Clustering & K-Means",
    "category": "Clustering Fundamentals",
    "question": "Why is clustering classified as an unsupervised technique rather than a supervised one?",
    "options": [
      "Because clustering only works with categorical data, not numeric data.",
      "Because clustering algorithms never use distance calculations.",
      "Because clustering does not require pre-labelled training data — the algorithm discovers the groupings on its own from the structure of the data.",
      "Because clustering always produces exactly two groups."
    ],
    "correctOption": 2,
    "explanation": "Clustering is explicitly listed under 'Unsupervised learning' in the course alongside outlier detection. Unlike supervised classification (which learns from labelled examples), clustering algorithms have no class labels to learn from — they group data purely based on similarity/distance patterns inherent in the data itself."
  },
  {
    "quizTitle": "Clustering & K-Means",
    "category": "Clustering Fundamentals",
    "question": "A marketing analyst clusters customers into 4 groups based on spending habits. Customer A and Customer B end up in the same cluster, while Customer C is placed in a different cluster. What does this tell us according to clustering principles?",
    "options": [
      "Customer A and Customer C must have identical spending habits.",
      "Customer A and Customer B are considered SIMILAR to each other (by the distance/similarity measure used), while Customer C is considered DISSIMILAR enough to warrant a separate cluster.",
      "Customer C has been incorrectly classified and should be manually reassigned.",
      "All three customers have the same total spending amount."
    ],
    "correctOption": 1,
    "explanation": "Clustering groups similar instances together and separates dissimilar ones. A and B being in the same cluster indicates they are similar according to the distance metric used (e.g., Euclidean distance on their feature values). C being in a different cluster indicates greater dissimilarity from A and B. This is the core mechanic of all clustering algorithms."
  },
  {
    "quizTitle": "Clustering & K-Means",
    "category": "Clustering Algorithms",
    "question": "Which of the following is NOT one of the clustering algorithms mentioned in the course material?",
    "options": [
      "K-Means",
      "Mean-shift",
      "DBSCAN (Density-Based Spatial Clustering of Applications with Noise)",
      "Random Forest"
    ],
    "correctOption": 3,
    "explanation": "Random Forest is a supervised ensemble classification/regression method (covered in a different week), not a clustering algorithm. The course lists four clustering algorithms: K-Means, Mean-shift, DBSCAN, and Expectation-Maximization. Random Forest builds multiple decision trees from labelled data, which is fundamentally a supervised learning approach."
  },
  {
    "quizTitle": "Clustering & K-Means",
    "category": "Clustering Algorithms",
    "question": "What does the acronym DBSCAN stand for?",
    "options": [
      "Data-Based Sequential Clustering Analysis Network",
      "Density-Based Spatial Clustering of Applications with Noise",
      "Distance-Based Sampling for Clustering and Normalization",
      "Dichotomous Binary Statistical Clustering Algorithm Network"
    ],
    "correctOption": 1,
    "explanation": "DBSCAN stands for Density-Based Spatial Clustering of Applications with Noise. It is one of four clustering algorithms listed in the course (alongside K-Means, Mean-shift, and Expectation-Maximization). Unlike K-Means, DBSCAN groups points based on density and can handle noise (outlier points that belong to no cluster)."
  },
  {
    "quizTitle": "Clustering & K-Means",
    "category": "K-Means Requirements",
    "question": "A dataset contains customer records with features: City (text: Ottawa, Toronto, Montreal), Age (numeric), and Annual Income (numeric). Before running K-Means clustering directly on all three features as-is, what issue must be addressed?",
    "options": [
      "Nothing — K-Means works directly on text and numeric data equally well.",
      "K-Means requires numeric data because it calculates distances between points. The City feature (text/categorical) would need to be converted to a numeric representation before clustering.",
      "K-Means only works with exactly 2 features, so one feature must be dropped.",
      "Age and Annual Income must be converted to text before clustering."
    ],
    "correctOption": 1,
    "explanation": "The course explicitly states: 'The data must be numeric because it calculates distances.' K-Means relies on distance calculations (typically Euclidean distance) between data points and centroids. A categorical text feature like City cannot be used directly in distance calculations — it would need encoding (e.g., one-hot encoding) into numeric form first."
  },
  {
    "quizTitle": "Clustering & K-Means",
    "category": "K-Means Requirements",
    "question": "What does the parameter 'K' represent in the K-Means clustering algorithm?",
    "options": [
      "The number of features used in the dataset.",
      "The number of iterations the algorithm will run before stopping.",
      "The number of groups (clusters) the data should be divided into.",
      "The minimum distance threshold for grouping points together."
    ],
    "correctOption": 2,
    "explanation": "The course states: 'The parameter K refers to how many groups for the data.' K is chosen by the analyst BEFORE running the algorithm (unlike DBSCAN, which can determine cluster count automatically based on density). If K=3 is chosen, the algorithm will partition the dataset into exactly 3 clusters."
  },
  {
    "quizTitle": "Clustering & K-Means",
    "category": "K-Means Requirements",
    "question": "Why must K-Means use numeric data specifically, rather than categorical or text data?",
    "options": [
      "Because numeric data is always more accurate than categorical data.",
      "Because K-Means computes distances between data points and centroids, and distance calculations (like Euclidean distance) are only mathematically meaningful for numeric values.",
      "Because K-Means cannot process more than 2 dimensions of data.",
      "Because categorical data always has missing values."
    ],
    "correctOption": 1,
    "explanation": "K-Means fundamentally relies on calculating the distance between each data point and the centroids to determine cluster membership. This requires numeric values where mathematical distance has meaning. The course states plainly: 'The data must be numeric because it calculates distances.' Categorical labels like 'Sunny' or 'Rainy' have no inherent numeric distance unless first encoded."
  },
  {
    "quizTitle": "Clustering & K-Means",
    "category": "K-Means Algorithm Steps",
    "question": "What is the FIRST step in the K-Means clustering algorithm?",
    "options": [
      "Calculate the distance between every point and the centroids.",
      "Decide the K value — how many clusters you want to create.",
      "Recalculate the centroids by averaging the points in each group.",
      "Randomly select K points as initial centroids."
    ],
    "correctOption": 1,
    "explanation": "The course lists the K-Means steps in order: Step 1 is 'Decide k value (how many clusters you want to create).' This must happen before any other step, since the value of K determines how many random initial centroids will be selected in Step 2 and shapes the entire clustering process."
  },
  {
    "quizTitle": "Clustering & K-Means",
    "category": "K-Means Algorithm Steps",
    "question": "After deciding the value of K, what is the SECOND step in the K-Means algorithm?",
    "options": [
      "Calculate the distance between every point and all centroids.",
      "Select K points randomly as the initial centroids.",
      "Group each point based on the smallest distance.",
      "Repeat until centroids converge."
    ],
    "correctOption": 1,
    "explanation": "The course's Step 2 is: 'Select k points randomly (initial centroids).' These randomly chosen points serve as the STARTING centroids before any distance calculations or grouping happens. Since they are randomly selected, different runs of K-Means can sometimes produce different final clusters depending on which points were initially chosen."
  },
  {
    "quizTitle": "Clustering & K-Means",
    "category": "K-Means Algorithm Steps",
    "question": "Place the following K-Means steps in the CORRECT order: (A) Recalculate centroids by averaging points in each group, (B) Group each point based on smallest distance, (C) Decide k value, (D) Find distance between every point and the k centroids, (E) Select k points randomly as initial centroids.",
    "options": [
      "C → E → D → B → A",
      "C → D → E → A → B",
      "E → C → D → B → A",
      "C → E → B → D → A"
    ],
    "correctOption": 0,
    "explanation": "The correct K-Means sequence: (C) Decide k value → (E) Select k random initial centroids → (D) Find distance between every point and the k centroids → (B) Group each point based on smallest distance (forming clusters) → (A) Recalculate centroids by averaging x,y values of points in each group. This matches the course's 6-step listing (steps 3-5 then repeat)."
  },
  {
    "quizTitle": "Clustering & K-Means",
    "category": "K-Means Algorithm Steps",
    "question": "In Step 4 of K-Means ('Group each point based on the smallest distance'), how does the algorithm decide which cluster a given data point belongs to?",
    "options": [
      "The point is assigned to a random cluster each iteration.",
      "The point is assigned to the cluster whose centroid is FARTHEST away, to maximize diversity.",
      "The point is assigned to the cluster whose centroid it is CLOSEST to (smallest distance among all k centroids).",
      "The point is assigned based on alphabetical order of its feature names."
    ],
    "correctOption": 2,
    "explanation": "The course states: 'Group each point with any of the centroids based on the smallest distance.' For each data point, the algorithm calculates the distance to ALL k centroids, then assigns that point to the cluster whose centroid has the SMALLEST distance. This is the central grouping rule of K-Means."
  },
  {
    "quizTitle": "Clustering & K-Means",
    "category": "K-Means Algorithm Steps",
    "question": "In Step 5 ('Recalculate centroids'), how is the new centroid for a cluster computed?",
    "options": [
      "By selecting the single point closest to the old centroid as the new centroid.",
      "By taking the average values of x and y (and other features) of all the points currently grouped in that cluster.",
      "By randomly selecting a new point from the dataset.",
      "By taking the median of only the two most extreme points in the cluster."
    ],
    "correctOption": 1,
    "explanation": "The course states centroids are recalculated 'by taking the average values of x and y of the points in each group.' For each cluster, the algorithm computes the mean of all feature values among the points currently assigned to that cluster — this average position becomes the new centroid for the next iteration."
  },
  {
    "quizTitle": "Clustering & K-Means",
    "category": "K-Means Algorithm Steps",
    "question": "What is the STOPPING CONDITION for the K-Means algorithm — when does the iteration process end?",
    "options": [
      "After exactly 10 iterations, regardless of results.",
      "When the recalculated centroids no longer change between iterations — i.e., the centroids converge.",
      "When every data point has been assigned to the same cluster.",
      "When the value of K reaches the total number of data points."
    ],
    "correctOption": 1,
    "explanation": "The course's Step 6: 'Repeat steps 3-5 until centroids converge.' Convergence means the centroids calculated in the current iteration are the same (or negligibly different) as the previous iteration — the algorithm has stabilized. The example notes: 'Iterations 5 & 6 have same centroids – centroids converge,' confirming this is the explicit stopping signal."
  },
  {
    "quizTitle": "Clustering & K-Means",
    "category": "K-Means Algorithm Steps",
    "question": "In the course's worked example, K-Means converged at iteration 6 because iterations 5 and 6 produced the SAME centroids. What does this convergence indicate about the clustering process?",
    "options": [
      "The algorithm failed and must be restarted with different initial centroids.",
      "The clusters have stabilized — further iterations of distance calculation, grouping, and centroid recalculation would no longer change which points belong to which cluster.",
      "K was chosen incorrectly and must be increased.",
      "The dataset has too many outliers to cluster properly."
    ],
    "correctOption": 1,
    "explanation": "When centroids stop changing between consecutive iterations, it means the cluster assignments have stabilized — every point is already grouped with its nearest centroid, and recalculating the centroid average produces the identical center point. Running the algorithm further would simply repeat the same grouping and centroid calculation indefinitely without change, so the algorithm terminates."
  },
  {
    "quizTitle": "Clustering & K-Means",
    "category": "K-Means Calculation",
    "question": "A cluster currently contains 4 points with coordinates: (2,3), (4,5), (6,7), (8,9). What is the new centroid (average x, average y) for this cluster?",
    "options": [
      "(5, 6)",
      "(4, 5)",
      "(6, 7)",
      "(5, 5)"
    ],
    "correctOption": 0,
    "explanation": "New centroid = (average of x-values, average of y-values). Average x = (2+4+6+8)/4 = 20/4 = 5. Average y = (3+5+7+9)/4 = 24/4 = 6. New centroid = (5, 6). This matches the course's Step 5 method: 'taking the average values of x and y of the points in each group.'"
  },
  {
    "quizTitle": "Clustering & K-Means",
    "category": "K-Means Calculation",
    "question": "A cluster contains 3 points: (10, 2), (14, 6), (12, 4). What is the recalculated centroid for this cluster?",
    "options": [
      "(12, 4)",
      "(13, 5)",
      "(11, 3)",
      "(12, 3)"
    ],
    "correctOption": 0,
    "explanation": "Average x = (10+14+12)/3 = 36/3 = 12. Average y = (2+6+4)/3 = 12/3 = 4. New centroid = (12, 4). Interestingly, this matches the middle point exactly because the three points are symmetric around it, but the calculation method is always taking the arithmetic mean of all coordinates, not picking the median point."
  },
  {
    "quizTitle": "Clustering & K-Means",
    "category": "K-Means Calculation",
    "question": "Given two centroids C1=(0,0) and C2=(10,10), a new data point P=(3,3) needs to be assigned to a cluster. Using Euclidean distance, which centroid is P closer to, and which cluster does P join?",
    "options": [
      "P is closer to C2 — distance to C2 is smaller.",
      "P is closer to C1 (distance ≈4.24) than to C2 (distance ≈9.90), so P joins the C1 cluster.",
      "P is equidistant from both centroids.",
      "Distance cannot be determined without knowing K."
    ],
    "correctOption": 1,
    "explanation": "Distance to C1 = sqrt((3-0)^2+(3-0)^2) = sqrt(9+9) = sqrt(18) ≈ 4.24. Distance to C2 = sqrt((3-10)^2+(3-10)^2) = sqrt(49+49) = sqrt(98) ≈ 9.90. Since 4.24 < 9.90, P is closer to C1, so it gets grouped into the C1 cluster. This illustrates Step 4 of K-Means: 'Group each point with any of the centroids based on the smallest distance.'"
  },
  {
    "quizTitle": "Clustering & K-Means",
    "category": "K-Means Calculation",
    "question": "Two centroids exist: C1=(2,2) and C2=(8,2). A point P=(5,2) is exactly halfway between them. What happens in this edge case during the grouping step?",
    "options": [
      "P is automatically excluded from clustering since it is ambiguous.",
      "P is assigned to whichever cluster the tie-breaking rule specifies (commonly the first centroid or by implementation-specific convention), since the distances to both centroids are equal.",
      "A third cluster is automatically created for P.",
      "P causes the algorithm to fail and restart with new random centroids."
    ],
    "correctOption": 1,
    "explanation": "Distance from P to C1 = |5-2| = 3. Distance from P to C2 = |8-5| = 3. The distances are exactly equal — a tie. In practice, implementations resolve ties using a consistent rule (e.g., assign to the lower-indexed centroid). This rare edge case does not change the overall algorithm logic, which still assigns each point to its smallest-distance centroid."
  },
  {
    "quizTitle": "Clustering & K-Means",
    "category": "K-Means Calculation",
    "question": "In an iteration of K-Means, Cluster A initially has centroid (4,4) and contains points (2,2), (4,6), (6,4). After computing the new centroid for Cluster A, which point would now be considered FARTHEST from this new centroid?",
    "options": [
      "(2,2), since the new centroid is (4,4), the same as before, and (2,2) is the farthest point.",
      "Cannot be determined without recalculating the new centroid: average x = (2+4+6)/3=4, average y=(2+6+4)/3=4, so the new centroid is still (4,4); (2,2) is distance sqrt(8)≈2.83 from it, the farthest of the three points.",
      "(4,6), because it has the highest y-coordinate.",
      "(6,4), because it has the highest x-coordinate."
    ],
    "correctOption": 1,
    "explanation": "New centroid: average x=(2+4+6)/3=4, average y=(2+6+4)/3=4 → (4,4) (unchanged in this case). Distance from (4,4) to (2,2): sqrt((4-2)^2+(4-2)^2)=sqrt(8)≈2.83. Distance from (4,4) to (4,6): sqrt(0+4)=2. Distance from (4,4) to (6,4): sqrt(4+0)=2. So (2,2) is the farthest point from the recalculated centroid, even though the centroid itself didn't move in this case."
  },
  {
    "quizTitle": "Clustering & K-Means",
    "category": "K-Means Convergence",
    "question": "After running K-Means for several iterations, an analyst notices that the centroid positions calculated in iteration 7 are IDENTICAL to those in iteration 6. What should happen next?",
    "options": [
      "Continue running more iterations to ensure stability, since one match is not sufficient.",
      "The algorithm should STOP — identical centroids between consecutive iterations indicates convergence, meaning the cluster assignments and centroid positions have stabilized.",
      "Increase K and restart the entire algorithm.",
      "Discard the results since centroids should always keep moving."
    ],
    "correctOption": 1,
    "explanation": "The course's stopping rule is explicit: 'Repeat steps 3-5 until centroids converge.' Identical centroids in consecutive iterations is the definition of convergence — it means no points changed cluster assignment, so recalculating centroids again would produce the same result indefinitely. The algorithm correctly terminates at this point."
  },
  {
    "quizTitle": "Clustering & K-Means",
    "category": "K-Means Convergence",
    "question": "Why does K-Means need MULTIPLE iterations of distance calculation, grouping, and centroid recalculation, rather than completing in a single pass?",
    "options": [
      "Because K-Means requires exactly 6 iterations by definition.",
      "Because moving the centroids (by recalculating their average position) can change which centroid is now closest to certain points, requiring those points to be regrouped — this process repeats until cluster assignments stabilize.",
      "Because each iteration tests a different distance metric.",
      "Because K-Means increases the value of K with each iteration."
    ],
    "correctOption": 1,
    "explanation": "After centroids are recalculated (moved to the average of their current group), some points that were previously closest to Centroid A might now be closer to the newly repositioned Centroid B, and vice versa. This requires re-grouping points based on the NEW centroid positions. The cycle of grouping → recalculating → regrouping continues until centroid positions stabilize (no more points change groups)."
  },
  {
    "quizTitle": "Clustering & K-Means",
    "category": "K-Means Convergence",
    "question": "A team runs K-Means with K=3 twice, using DIFFERENT random initial centroids each time. The two runs produce slightly different final clusters. Why can this happen?",
    "options": [
      "K-Means always produces identical results regardless of initial centroids, so this should not occur.",
      "Because Step 2 of K-Means involves randomly selecting initial centroids, different starting points can lead the algorithm to converge to different local groupings, especially in datasets with ambiguous or overlapping clusters.",
      "Because the dataset itself changes between runs.",
      "Because K-Means requires numeric data, and using different random seeds changes the data values."
    ],
    "correctOption": 1,
    "explanation": "K-Means Step 2 explicitly states: 'Select k points randomly (initial centroids).' Since the starting centroids are randomly chosen, different runs can converge to different final cluster configurations (different local optima), especially when clusters are not clearly separated. This is a well-known practical consideration — running K-Means multiple times with different random initializations and choosing the best result is a common practice."
  },
  {
    "quizTitle": "Clustering & K-Means",
    "category": "Choosing K - Elbow Method",
    "question": "What is the general procedure described in the course for determining the BEST value of K in K-Means clustering?",
    "options": [
      "Always set K equal to the number of features in the dataset.",
      "Run the algorithm with increasing values of K (2, 3, 4, 5, ...), calculate the average within-cluster distance to the nearest centroid for each K, plot these values, and identify the 'elbow point' where the curve bends.",
      "Set K to the square root of the total number of data points.",
      "Randomly try 100 different K values and average the results."
    ],
    "correctOption": 1,
    "explanation": "The course describes the elbow method: 'Run the algorithm with 2 centroids. Then calculate the average distance from each point to its nearest centroid. Repeat the steps with 3, 4, 5, …, n centroids. If you plot the average within-cluster distance to the nearest centroid, you will see an 'elbow point'. That value should be the best value of K.'"
  },
  {
    "quizTitle": "Clustering & K-Means",
    "category": "Choosing K - Elbow Method",
    "question": "On an elbow method plot, the x-axis shows the number of clusters K (2 through 10), and the y-axis shows the average within-cluster distance to the nearest centroid. What pattern would this curve generally show as K increases?",
    "options": [
      "The average distance steadily increases as K increases.",
      "The average distance stays exactly constant regardless of K.",
      "The average distance generally DECREASES as K increases (more clusters means points are closer to their nearest centroid), with diminishing returns after a certain point — creating a bend or 'elbow' in the curve.",
      "The average distance increases then suddenly drops to zero."
    ],
    "correctOption": 2,
    "explanation": "As K increases, more centroids are available, so each point has a better chance of being near SOME centroid — average within-cluster distance generally decreases. However, the rate of improvement slows after the 'true' number of natural clusters is reached, creating a bend (the 'elbow') in the plot. Beyond the elbow, adding more clusters yields diminishing reductions in distance, signalling that further splitting is unnecessary."
  },
  {
    "quizTitle": "Clustering & K-Means",
    "category": "Choosing K - Elbow Method",
    "question": "An analyst plots average within-cluster distance against K values from 2 to 8 and gets these values: K=2: 45.0, K=3: 28.0, K=4: 15.0, K=5: 13.5, K=6: 12.8, K=7: 12.3, K=8: 11.9. At which K value does the 'elbow' most likely occur, and what does this tell the analyst?",
    "options": [
      "K=2, since it is the starting point of the curve.",
      "K=8, since it has the lowest average distance.",
      "K=4, because the improvement from K=2 to K=4 is dramatic (45.0 → 15.0), but improvements from K=4 onward are much smaller (15.0 → 11.9), indicating K=4 is the point of diminishing returns and the natural number of clusters.",
      "K=5, because it is the midpoint of the range tested."
    ],
    "correctOption": 2,
    "explanation": "The elbow point is where the rate of improvement sharply slows. From K=2 to K=4, distance drops dramatically (45.0 → 28.0 → 15.0), a 30-point improvement. From K=4 to K=8, distance only drops from 15.0 to 11.9, a mere 3.1-point improvement despite adding 4 more clusters. This sharp change in slope at K=4 is the 'elbow' — adding clusters beyond this point provides little additional benefit, suggesting K=4 is the natural cluster count."
  },
  {
    "quizTitle": "Clustering & K-Means",
    "category": "Choosing K - Elbow Method",
    "question": "Why does simply choosing the K value with the LOWEST average within-cluster distance NOT work as a strategy for selecting the best K?",
    "options": [
      "Because lower average distance always indicates worse clustering quality.",
      "Because as K approaches the total number of data points (each point becomes its own cluster), the average distance approaches ZERO — but this defeats the purpose of clustering, since no meaningful grouping has occurred.",
      "Because average distance is not a valid metric for any clustering algorithm.",
      "Because K must always be set to exactly 2, regardless of the data."
    ],
    "correctOption": 1,
    "explanation": "If K equals the number of data points, every point becomes its own single-point cluster, and the distance from each point to its own centroid is exactly 0 — minimizing the metric perfectly but providing zero analytical value. This is why the elbow method looks for the bend where adding more clusters stops providing meaningful improvement, rather than just minimizing distance, which would trivially favor very large K."
  },
  {
    "quizTitle": "Clustering & K-Means",
    "category": "Choosing K - Elbow Method",
    "question": "A retail company is segmenting customers using K-Means and applies the elbow method. The resulting plot shows a smooth, gradual decline with NO clear bend or elbow point. What does this suggest about the underlying data?",
    "options": [
      "The data definitely has exactly 2 natural clusters.",
      "The data may not have clearly separated natural groupings — customers may exist along a continuous spectrum rather than in distinct clusters, making the choice of K more subjective and requiring domain knowledge or other validation methods.",
      "K-Means cannot be applied to this dataset under any circumstances.",
      "The elbow method always fails on retail data specifically."
    ],
    "correctOption": 1,
    "explanation": "A smooth decline without a clear elbow suggests the data may lack distinct, well-separated clusters — customers might vary continuously rather than falling into a few discrete behavioural groups. In such cases, the elbow method provides limited guidance, and analysts often need to combine it with domain knowledge, business requirements, or other validation techniques (like silhouette scores) to choose a reasonable K."
  },
  {
    "quizTitle": "Clustering & K-Means",
    "category": "Applied K-Means Scenarios",
    "question": "A hospital wants to group patients into risk categories based on two numeric features: BMI and average daily steps. They decide to use K-Means with K=3. What is the FIRST practical action they must take before running the algorithm?",
    "options": [
      "Recalculate the centroids for all three groups.",
      "Manually label each patient as low, medium, or high risk.",
      "Confirm both features (BMI and average daily steps) are numeric and prepared for distance calculations, then randomly select 3 initial centroid points from the patient data.",
      "Apply Random Forest first to validate the K-Means results."
    ],
    "correctOption": 2,
    "explanation": "Since K-Means requires numeric data for distance calculations, the team should confirm BMI and steps are properly numeric (and likely normalized, given the different scales). After deciding K=3, the next algorithmic step (Step 2) is randomly selecting 3 initial centroids from the data. Manual labelling (option B) would defeat the purpose of unsupervised clustering."
  },
  {
    "quizTitle": "Clustering & K-Means",
    "category": "Applied K-Means Scenarios",
    "question": "A grocery chain runs K-Means clustering on store locations using two features: average daily foot traffic and average transaction value. After convergence, Cluster 1 has centroid (500, $12) and Cluster 2 has centroid (2000, $35). What might this clustering reveal about store types?",
    "options": [
      "Cluster 1 and Cluster 2 represent identical store types with no meaningful difference.",
      "Cluster 1 likely represents smaller, lower-traffic stores with smaller average purchases, while Cluster 2 likely represents busier, higher-traffic stores with larger average purchases — possibly flagship or larger format stores.",
      "The clustering has failed because the centroids should always be equal.",
      "K-Means cannot meaningfully cluster store data of this type."
    ],
    "correctOption": 1,
    "explanation": "Centroids represent the average characteristics of points within a cluster. Cluster 1's centroid (500 visits, $12 average transaction) suggests smaller, lower-volume stores. Cluster 2's centroid (2000 visits, $35 average transaction) suggests busier stores with higher-value purchases. This is exactly how K-Means provides business insight — by examining what the resulting centroids represent in real-world terms."
  },
  {
    "quizTitle": "Clustering & K-Means",
    "category": "Applied K-Means Scenarios",
    "question": "A streaming service wants to segment users based on watch time and number of genres watched. They run K-Means with K=5 but get poor, overlapping clusters that don't make business sense. Using the elbow method, they discover K=3 produces a much clearer elbow. What should the team do?",
    "options": [
      "Stick with K=5 since more clusters always provide more detailed insights.",
      "Re-run K-Means with K=3, since the elbow method suggests this better matches the natural structure in the data, and adding more clusters (K=5) likely split natural groups unnecessarily.",
      "Abandon clustering entirely and switch to classification.",
      "Increase K to 10 to capture even more granular detail."
    ],
    "correctOption": 1,
    "explanation": "The elbow method is specifically designed to identify when adding more clusters stops providing meaningful improvement in within-cluster distance. If K=3 shows a clear elbow and K=5 does not align with natural data structure (producing overlapping, hard-to-interpret clusters), the team should follow the elbow method's guidance and re-cluster with K=3, which better captures the genuine groupings in the data."
  },
  {
    "quizTitle": "Clustering & K-Means",
    "category": "Applied K-Means Scenarios",
    "question": "A logistics company wants to cluster delivery addresses by GPS coordinates (latitude, longitude) to optimize warehouse placement. Why is K-Means a natural fit for this specific use case?",
    "options": [
      "Because GPS coordinates are categorical data, which K-Means requires.",
      "Because latitude and longitude are inherently numeric, allowing meaningful distance calculations (geographic proximity), and the goal of finding natural geographic groupings aligns perfectly with K-Means' similarity-based clustering approach.",
      "Because K-Means can only be applied to text-based location names.",
      "Because warehouse placement requires supervised classification, not clustering."
    ],
    "correctOption": 1,
    "explanation": "GPS coordinates are naturally numeric, satisfying K-Means' requirement for distance-based calculations. The geographic distance between coordinates directly corresponds to real-world proximity — exactly the kind of similarity measure K-Means exploits. Finding natural delivery clusters (geographic density centers) for warehouse placement is a classic, intuitive application of K-Means."
  },
  {
    "quizTitle": "Clustering & K-Means",
    "category": "Applied K-Means Scenarios",
    "question": "After several iterations of K-Means, an analyst notices that one cluster has ZERO points assigned to it (its centroid is too far from all data points). What practical problem does this represent for the algorithm?",
    "options": [
      "This is expected and desirable behaviour in K-Means.",
      "An empty cluster cannot have its centroid recalculated (there is no average to compute from zero points), creating an undefined state that must be handled — often by reinitializing that centroid to a new random point.",
      "The algorithm should immediately terminate and report a final answer.",
      "K must be set to exactly 1 to fix this issue."
    ],
    "correctOption": 1,
    "explanation": "Step 5 of K-Means recalculates centroids by averaging the points within each cluster. If a cluster has zero points, there is nothing to average — this is mathematically undefined. In practice, implementations handle this edge case by reinitializing the empty cluster's centroid (e.g., to the point farthest from all other centroids, or a new random point) to keep the algorithm running properly."
  },
  {
    "quizTitle": "Clustering & K-Means",
    "category": "Conceptual Comparison",
    "question": "How does K-Means clustering fundamentally differ from kNN classification, even though both use distance calculations?",
    "options": [
      "There is no real difference — both algorithms are identical.",
      "K-Means is unsupervised (no class labels; it discovers groups and centroids from unlabelled numeric data), while kNN is supervised (it uses labelled training data to classify NEW instances based on the majority class among nearest neighbours).",
      "K-Means only works with categorical data, while kNN only works with numeric data.",
      "kNN requires multiple iterations to converge, while K-Means runs in a single pass."
    ],
    "correctOption": 1,
    "explanation": "Both algorithms use distance, but their PURPOSE and DATA REQUIREMENTS are fundamentally different. K-Means: unsupervised, no labels, iteratively forms K groups and finds their centroids from scratch. kNN: supervised, uses labelled training data, classifies a NEW instance by finding its k nearest LABELLED neighbours and taking a majority vote. K-Means discovers structure; kNN classifies based on known structure."
  },
  {
    "quizTitle": "Clustering & K-Means",
    "category": "Conceptual Comparison",
    "question": "A company wants to (a) automatically discover natural customer segments with no pre-existing categories, and (b) later classify new customers into one of those discovered segments based on labelled historical examples. Which techniques would they use for each task respectively?",
    "options": [
      "(a) kNN classification; (b) K-Means clustering",
      "(a) K-Means clustering to discover the segments; (b) a supervised method like kNN, Decision Trees, or Random Forest (using the discovered segments as labels) to classify new customers",
      "(a) Random Forest; (b) DBSCAN",
      "(a) and (b) both require K-Means clustering only."
    ],
    "correctOption": 1,
    "explanation": "This demonstrates the typical real-world workflow: first use unsupervised clustering (K-Means) to discover natural groupings when no labels exist. Once those groups (clusters) are identified and can be treated as labels, a supervised classifier (kNN, Decision Tree, Random Forest) can then be trained to classify NEW customers into one of those discovered segments. This two-phase approach combines unsupervised discovery with supervised application."
  },
  {
    "quizTitle": "Clustering & K-Means",
    "category": "Conceptual Comparison",
    "question": "Why would K-Means be unsuitable for clustering a dataset where features include both 'Customer Satisfaction Rating (1-5 stars)' and 'Favorite Product Category (Electronics, Clothing, Food)' without any preprocessing?",
    "options": [
      "K-Means can handle this data exactly as-is with no changes needed.",
      "The 'Favorite Product Category' feature is categorical/text and has no inherent numeric distance meaning — it must be encoded numerically (e.g., one-hot encoding) before K-Means can calculate valid distances using it.",
      "K-Means cannot process numeric features like satisfaction ratings.",
      "K-Means requires removing the satisfaction rating feature entirely."
    ],
    "correctOption": 1,
    "explanation": "The course states K-Means data 'must be numeric because it calculates distances.' 'Electronics' minus 'Clothing' has no mathematical meaning — there is no inherent distance between categories. This categorical feature must first be converted into a numeric representation (such as one-hot encoded binary columns) before it can be meaningfully included in K-Means distance calculations alongside the numeric satisfaction rating."
  },
  {
    "quizTitle": "Clustering & K-Means",
    "category": "Conceptual Application",
    "question": "An analyst is clustering students based on Study Hours per week (range 0-40) and Exam Score (range 0-100) WITHOUT normalizing either feature first. What problem is likely to occur, drawing on prior weeks' material about feature scaling?",
    "options": [
      "No problem will occur — K-Means automatically normalizes data internally.",
      "Exam Score, having a much larger numeric range (0-100) than Study Hours (0-40), will dominate the Euclidean distance calculations, causing the clustering to be driven almost entirely by exam scores while largely ignoring study hour differences.",
      "Study Hours will dominate because it is listed first in the dataset.",
      "K-Means cannot run at all without normalization and will throw an error."
    ],
    "correctOption": 1,
    "explanation": "This connects to the data preparation concept of normalization. Since Euclidean distance squares differences, a feature with a larger numeric range (Exam Score, up to 100) will contribute disproportionately more to the total distance than a feature with a smaller range (Study Hours, up to 40). Without normalization, K-Means clusters would be primarily determined by exam score differences, effectively ignoring study hours as a meaningful clustering factor."
  },
  {
    "quizTitle": "Clustering & K-Means",
    "category": "Conceptual Application",
    "question": "A data scientist runs K-Means on a 2D dataset and visualizes the result: Iteration 1 shows messy, overlapping clusters, while Iteration 6 shows clean, well-separated clusters with centroids that match the visual center of each grouping. What does this progression demonstrate about the K-Means algorithm?",
    "options": [
      "K-Means always produces messy results and Iteration 6 is an anomaly.",
      "The iterative refinement process (distance calculation → grouping → centroid recalculation, repeated) progressively improves cluster quality as centroids move toward the true center of their assigned points, eventually converging to a stable, sensible partition.",
      "Iteration 1 and Iteration 6 should always produce identical results.",
      "K-Means clusters become messier with more iterations."
    ],
    "correctOption": 1,
    "explanation": "This reflects the course's own example: 'Iteration 1 vs Iteration 6' showing visual improvement. Early iterations start from random initial centroids, which often produce poor initial groupings. As the algorithm repeats steps 3-5 (calculate distance, group, recalculate centroid), the centroids gradually move toward the true centers of their natural groupings, and cluster assignments become progressively more sensible until convergence produces stable, accurate clusters."
  },
  {
    "quizTitle": "Clustering & K-Means",
    "category": "Conceptual Application",
    "question": "A university wants to group courses based on average grade and enrollment size to identify patterns (e.g., 'high-enrollment, high-grade' vs 'low-enrollment, low-grade' courses). After applying K-Means with K=4 and examining the elbow plot, they notice the elbow is at K=2. What should this tell the university?",
    "options": [
      "They should ignore the elbow plot and always use a higher K for more granularity.",
      "The natural structure in their course data likely only supports 2 distinct, well-separated groupings; forcing K=4 may be artificially splitting these 2 natural groups into smaller, less meaningful sub-groups.",
      "K=4 is always correct regardless of what the elbow plot shows.",
      "The elbow method does not apply to educational data."
    ],
    "correctOption": 1,
    "explanation": "The elbow method identifies where additional clusters stop providing meaningful improvement in within-cluster distance. If the true elbow is at K=2, this suggests the underlying course data naturally separates into 2 distinct groups. Forcing K=4 would likely split these natural 2 groups into smaller subgroups that don't correspond to genuinely distinct patterns, reducing the interpretability and business value of the clustering."
  },
  {
    "quizTitle": "Clustering & K-Means",
    "category": "Conceptual Application",
    "question": "A sports analytics team clusters basketball players using 'points per game' and 'assists per game' with K-Means (K=3). The resulting clusters roughly correspond to Scorers, Playmakers, and Role Players. A new rookie's stats are then compared to determine which existing cluster centroid they are CLOSEST to. Is this final step (assigning the new rookie) still K-Means clustering, or something else?",
    "options": [
      "This is still K-Means — the algorithm runs the full 6-step process again for the rookie.",
      "This final assignment step (finding the closest existing centroid for a NEW instance, without recalculating clusters) is more like applying a nearest-centroid classification rule using the ALREADY-DISCOVERED clusters — a simpler operation than running full K-Means again.",
      "This requires switching to Random Forest for the rookie's classification.",
      "New instances cannot ever be assigned to existing K-Means clusters."
    ],
    "correctOption": 1,
    "explanation": "Once K-Means has converged and centroids are fixed, assigning a NEW data point to the nearest existing centroid (without recalculating the whole clustering) is a simpler, downstream operation — essentially a one-step nearest-centroid lookup. This differs from running full K-Means (which involves iterative grouping AND centroid recalculation for the whole dataset). This distinction matters: re-running full K-Means would also shift all existing centroids based on the new point, whereas a simple nearest-centroid assignment treats the existing clusters as fixed reference points."
  }
]
