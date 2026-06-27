// data/questions/network-physical-layer.js

module.exports = [
  {
    "quizTitle": "Physical Layer",
    "category": "Purpose of the Physical Layer",
    "question": "A network engineer is describing the Physical layer to a new intern. She says it is the last step in the encapsulation process on the sending side. What does the Physical layer actually do with the data it receives from the Data Link layer?",
    "options": [
      "It adds IP addresses and routes the packet toward the destination.",
      "It accepts a complete frame from the Data Link layer and encodes it as a series of signals transmitted onto the local media.",
      "It breaks the data into segments and numbers them for reassembly.",
      "It applies encryption and compression before sending the data."
    ],
    "correctOption": 1,
    "explanation": "The Physical layer accepts a complete frame from the Data Link layer and encodes it as a series of signals that are transmitted onto the local media. This is the last step in the encapsulation process on the sending side. The Physical layer does not add addressing (that is Layer 3), does not segment data (that is Layer 4), and does not encrypt (that is Layer 6). It simply converts the frame into physical signals appropriate for the medium."
  },
  {
    "quizTitle": "Physical Layer",
    "category": "Purpose of the Physical Layer",
    "question": "After the Physical layer on the receiving device reconstructs the bits from the incoming signals, what happens next?",
    "options": [
      "The bits are immediately displayed to the user as application data.",
      "The device discards the bits and waits for a complete retransmission.",
      "The next device in the path re-encapsulates the frame from the bits and then decides what to do with it.",
      "The Physical layer forwards the bits directly to the Network layer, bypassing the Data Link layer."
    ],
    "correctOption": 2,
    "explanation": "When a device receives bits on the Physical layer, it re-encapsulates those bits into a frame and then the Data Link layer (and layers above) decide what to do with it. For example, a switch examines the destination MAC address in the re-assembled frame to decide which port to forward it through. The Physical layer itself only deals with raw bits and signals - it does not make forwarding decisions or pass directly to Layer 3."
  },
  {
    "quizTitle": "Physical Layer",
    "category": "Purpose of the Physical Layer",
    "question": "A laptop connects to a network using a built-in wireless adapter and also has a USB-to-Ethernet adapter plugged in. What component connects a device to the network, and how many NICs does this laptop effectively have?",
    "options": [
      "A router connects the laptop to the network; the number of NICs does not matter.",
      "A Network Interface Card (NIC) connects a device to the network; this laptop has two NICs - one wired (Ethernet) and one wireless.",
      "Only the wireless adapter counts as a NIC; wired adapters are a different component.",
      "The operating system connects the device to the network; NICs are optional hardware."
    ],
    "correctOption": 1,
    "explanation": "A Network Interface Card (NIC) connects a device to the network. Some devices have just one NIC, while others may have multiple NICs for wired and/or wireless connections. In this scenario, the laptop effectively has two NICs: the built-in wireless adapter (wireless NIC) and the USB-to-Ethernet adapter (wired NIC). Not all physical connections offer the same level of performance - wired Ethernet typically offers more reliable, higher-bandwidth connectivity than wireless."
  },
  {
    "quizTitle": "Physical Layer",
    "category": "Physical Layer Standards",
    "question": "A network trainer explains that Physical layer standards are different from standards for upper layers like TCP/IP. What is the key difference in how these two categories of standards are implemented?",
    "options": [
      "Physical layer standards are implemented in software like TCP/IP standards.",
      "TCP/IP standards are implemented in hardware while Physical layer standards are implemented in software.",
      "TCP/IP standards are implemented in software and governed by the IETF, while Physical layer standards are implemented in hardware and governed by organizations like ISO, EIA/TIA, ITU-T, ANSI, and IEEE.",
      "There is no difference - both are implemented in software and governed by the IETF."
    ],
    "correctOption": 2,
    "explanation": "This is a fundamental distinction: TCP/IP standards (upper layer protocols) are implemented in software and governed by the IETF. Physical layer standards, however, are implemented in hardware (NICs, cables, transceivers) and are governed by multiple organizations including ISO, EIA/TIA, ITU-T, ANSI, and IEEE. This is why Physical layer standards cover physical specifications like cable types, connector dimensions, voltage levels, and signal encoding - all things that must exist in hardware."
  },
  {
    "quizTitle": "Physical Layer",
    "category": "Bandwidth",
    "question": "An ISP advertises a home Internet plan offering 500 Mbps download speed. A customer complains that large files take longer to download than expected. The ISP says the issue is that the actual data received per second is lower because of protocol overhead. Which bandwidth-related concept describes the actual usable data the customer receives per second?",
    "options": [
      "Bandwidth - because it measures the maximum capacity of the connection.",
      "Latency - because it measures delay in data transfer.",
      "Throughput - because it measures the transfer of all bits across the media.",
      "Goodput - because it measures usable data transferred over a given period, calculated as Throughput minus traffic overhead."
    ],
    "correctOption": 3,
    "explanation": "Goodput is the measure of USABLE data transferred over a given period of time, calculated as Goodput = Throughput minus traffic overhead. Bandwidth is the maximum capacity of the medium. Throughput is the actual transfer of ALL bits (including protocol headers and overhead) across the media. Goodput is what the customer actually cares about - the useful data received per second after subtracting all protocol overhead. A 500 Mbps bandwidth plan will always deliver less than 500 Mbps of actual usable data."
  },
  {
    "quizTitle": "Physical Layer",
    "category": "Bandwidth",
    "question": "A network engineer measures that her link transfers 800 Mbps of total traffic per second. Of that, 50 Mbps is TCP/IP headers, retransmissions, and other protocol overhead. What is the Goodput of this link?",
    "options": [
      "800 Mbps, because Goodput equals total Throughput.",
      "850 Mbps, because Goodput adds overhead to Throughput.",
      "750 Mbps, because Goodput equals Throughput minus traffic overhead (800 - 50 = 750 Mbps).",
      "50 Mbps, because Goodput only counts the overhead portion."
    ],
    "correctOption": 2,
    "explanation": "Goodput = Throughput minus traffic overhead. In this scenario: Goodput = 800 Mbps - 50 Mbps = 750 Mbps. This 750 Mbps represents the actual usable data transferred per second - what application developers and end users care about. The remaining 50 Mbps is consumed by necessary but non-payload protocol overhead. This distinction matters when sizing links for applications that require a specific amount of usable data throughput."
  },
  {
    "quizTitle": "Physical Layer",
    "category": "Bandwidth",
    "question": "A user complains that web pages load slowly. A network engineer measures that packets take 120 milliseconds to travel from the user's laptop to the web server and back, even though the link has plenty of unused bandwidth capacity. Which bandwidth-related term describes this 120 ms measurement?",
    "options": [
      "Throughput - because it measures how many bits cross the media per second.",
      "Goodput - because it measures usable data delivery speed.",
      "Bandwidth - because it defines the maximum data capacity.",
      "Latency - because it is the amount of time including delays for data to travel from one given point to another."
    ],
    "correctOption": 3,
    "explanation": "Latency is the amount of time, including delays, for data to travel from one given point to another. The 120 ms round-trip time is a latency measurement. High latency causes slow web page loads even when bandwidth is not saturated - this is common with satellite Internet connections that have high bandwidth but also high latency due to the long distance to the satellite. Throughput and Goodput measure data volume per unit time, not travel time."
  },
  {
    "quizTitle": "Physical Layer",
    "category": "Bandwidth",
    "question": "A network link has a bandwidth of 1 Gbps. During a busy hour, monitoring tools show that 600 Mbps of actual data (including all headers and control traffic) crosses the link every second. What is the correct term for this 600 Mbps measurement?",
    "options": [
      "Goodput - because it is the usable data rate.",
      "Throughput - because it is the measure of the transfer of bits across the media over a given period of time.",
      "Bandwidth - because it represents what the link is capable of.",
      "Latency - because it reflects the delay introduced by the 400 Mbps of unused capacity."
    ],
    "correctOption": 1,
    "explanation": "Throughput is the measure of the transfer of bits across the media over a given period of time. The 600 Mbps measurement includes ALL bits crossing the link - data payloads, TCP/IP headers, retransmissions, and all other traffic. Bandwidth (1 Gbps) is the theoretical maximum capacity. Goodput would be 600 Mbps minus whatever portion is overhead. Latency measures travel time, not bit volume. Throughput is always less than or equal to bandwidth."
  },
  {
    "quizTitle": "Physical Layer",
    "category": "Bandwidth",
    "question": "Which of the following correctly converts 2.5 Gbps into both Mbps and bps?",
    "options": [
      "2.5 Gbps = 250 Mbps = 250,000,000 bps",
      "2.5 Gbps = 2,500 Mbps = 2,500,000,000 bps",
      "2.5 Gbps = 25,000 Mbps = 25,000,000,000 bps",
      "2.5 Gbps = 2.5 Mbps = 2,500 bps"
    ],
    "correctOption": 1,
    "explanation": "The bandwidth unit conversions are: 1 Gbps = 1,000 Mbps = 1,000,000,000 bps. Therefore: 2.5 Gbps = 2.5 x 1,000 Mbps = 2,500 Mbps. And 2.5 Gbps = 2.5 x 1,000,000,000 bps = 2,500,000,000 bps (2.5 billion bits per second). Understanding these conversions is essential for comparing link speeds and sizing network infrastructure for capacity planning."
  },
  {
    "quizTitle": "Physical Layer",
    "category": "Copper Cabling Characteristics",
    "question": "A network technician runs a 120-meter UTP cable between two offices. After installation, the connection works but experiences frequent data errors and retransmissions. What is the most likely physical layer cause?",
    "options": [
      "The cable has too many twists per foot, causing excessive crosstalk.",
      "The cable exceeds the maximum recommended length, causing signal attenuation that weakens the electrical signal below usable levels.",
      "Copper cable cannot carry data over distances greater than 10 meters.",
      "The RJ-45 connectors are the wrong type for long-distance copper runs."
    ],
    "correctOption": 1,
    "explanation": "Attenuation is the weakening of electrical signals over distance - the longer the electrical signal has to travel, the weaker it gets. The standard maximum length for UTP copper Ethernet (100BASE-T) is 100 meters. A 120-meter run exceeds this limit, causing the signal to arrive too weak to be reliably interpreted, resulting in data errors and retransmissions. The mitigation is strict adherence to cable length limits. The technician needs to install a switch or repeater within the 100-meter limit."
  },
  {
    "quizTitle": "Physical Layer",
    "category": "Copper Cabling Characteristics",
    "question": "A factory floor network experiences frequent data corruption. Investigation reveals the network cables run parallel to large electric motors and welding equipment. Which type of copper cabling interference is most likely causing the problem?",
    "options": [
      "Attenuation - because the cables are too long for the factory floor.",
      "Crosstalk - because signals from adjacent wires inside the cable are interfering.",
      "Electromagnetic Interference (EMI) and Radio Frequency Interference (RFI) - because external electrical equipment is inducing noise into the copper cables.",
      "Physical damage - because industrial environments always damage cables."
    ],
    "correctOption": 2,
    "explanation": "Electromagnetic Interference (EMI) and Radio Frequency Interference (RFI) are external interference sources that can distort and corrupt data signals in copper cables. Large electric motors and welding equipment generate strong electromagnetic fields that induce noise into nearby copper conductors. The mitigation is to use cables with metallic shielding and grounding (like STP) or to replace copper with fiber-optic cabling, which is completely immune to EMI/RFI. Crosstalk occurs between wires inside the same cable, not from external equipment."
  },
  {
    "quizTitle": "Physical Layer",
    "category": "Copper Cabling Characteristics",
    "question": "A cable installer notices that signals from one wire pair in a UTP cable are bleeding into an adjacent pair within the same cable, causing data errors. Which copper cabling problem is this, and what UTP design feature helps mitigate it?",
    "options": [
      "Attenuation - mitigated by keeping cables short.",
      "EMI - mitigated by metallic shielding around the cable.",
      "Crosstalk - mitigated by twisting opposing circuit pair wires together at different twist rates per foot.",
      "RFI - mitigated by burying the cable underground."
    ],
    "correctOption": 2,
    "explanation": "Crosstalk is unwanted signal interference that occurs between wire pairs within the same cable. UTP mitigates crosstalk through two mechanisms: Cancellation (each wire pair uses opposite polarity so magnetic fields cancel each other) and Variation in twists per foot (each wire pair is twisted a different amount, preventing synchronization of interference between pairs). This is why UTP pairs look different from each other inside the cable - the different twist rates are intentional and functional."
  },
  {
    "quizTitle": "Physical Layer",
    "category": "Types of Copper Cabling",
    "question": "A network engineer needs to choose between UTP and STP cable for a new installation in a building with significant electrical noise from industrial lighting and HVAC systems. She has a generous budget and a skilled installation team. Which cable type should she choose and why?",
    "options": [
      "UTP - because it is less expensive and easier to install, which is always preferable.",
      "STP - because it provides better noise protection than UTP using braided or foil shielding, even though it is more expensive and harder to install.",
      "Coaxial cable - because it is the only copper cable immune to EMI.",
      "UTP - because shielding does not actually provide noise protection."
    ],
    "correctOption": 1,
    "explanation": "STP (Shielded Twisted Pair) provides better noise protection than UTP through two levels of shielding: a braided or foil shield surrounding all wire pairs (outer shield) and a foil shield for each individual pair of wires. This dual shielding provides superior EMI/RFI protection compared to unshielded UTP. The tradeoffs are that STP is more expensive than UTP and harder to install. Given the high-noise environment, generous budget, and skilled team, STP is the appropriate choice here."
  },
  {
    "quizTitle": "Physical Layer",
    "category": "Types of Copper Cabling",
    "question": "A field technician is connecting an external antenna to a wireless router in a building. She also needs to connect the router to the cable Internet service coming into the building. Which copper cable type is appropriate for BOTH of these connections?",
    "options": [
      "UTP - because it is the most common networking media for all purposes.",
      "STP - because shielded cable is required for antenna and cable TV connections.",
      "Coaxial cable - because it is commonly used for both wireless antenna connections and cable internet customer premises wiring.",
      "Rollover cable - because it is used for connecting network devices to external services."
    ],
    "correctOption": 2,
    "explanation": "Coaxial cable is commonly used in two specific scenarios: wireless installations (attaching antennas to wireless devices) and cable internet installations (customer premises wiring). Coaxial cable's structure - with a central conductor, insulating layer, braided shield, and outer jacket - makes it suitable for carrying radio frequency signals used in both antenna connections and cable TV/Internet services. UTP is used for Ethernet data connections, not antenna or cable TV/Internet connections."
  },
  {
    "quizTitle": "Physical Layer",
    "category": "Types of Copper Cabling",
    "question": "A student is examining a coaxial cable cross-section. From the outermost layer inward, which is the correct order of the four structural components?",
    "options": [
      "Copper conductor, plastic insulation, braided shield, outer jacket.",
      "Outer jacket, braided copper shield, flexible plastic insulation, copper conductor.",
      "Outer jacket, plastic insulation, braided shield, copper conductor.",
      "Braided shield, outer jacket, plastic insulation, copper conductor."
    ],
    "correctOption": 1,
    "explanation": "Coaxial cable from outermost to innermost consists of: (1) Outer cable jacket - prevents minor physical damage; (2) Woven copper braid or metallic foil - acts as the second wire in the circuit and shields the inner conductor from EMI/RFI; (3) Layer of flexible plastic insulation - separates the shield from the conductor; (4) Copper conductor - carries the electronic signals. Understanding this structure explains why coaxial cable provides good shielding and why it can carry higher-frequency signals than unshielded cables."
  },
  {
    "quizTitle": "Physical Layer",
    "category": "UTP Cabling",
    "question": "A student asks why UTP cable can cancel out electromagnetic interference even without any metallic shielding around the wires. What is the correct explanation?",
    "options": [
      "The plastic jacket around UTP blocks electromagnetic fields from reaching the copper wires.",
      "UTP uses cancellation - each wire pair uses opposite polarity (one positive, one negative), so when twisted together their magnetic fields cancel each other and outside EMI/RFI. Different twist rates per pair also prevent crosstalk between pairs.",
      "The color coding on UTP wires provides electromagnetic protection by absorbing interference.",
      "UTP cables are filled with insulating gel that blocks electromagnetic signals."
    ],
    "correctOption": 1,
    "explanation": "UTP achieves interference cancellation through physics, not shielding. Each wire in a pair carries opposite polarity (one positive, one negative). When twisted together, the equal and opposite magnetic fields they generate cancel each other out. This also cancels external EMI/RFI. Additionally, each wire pair is twisted a different number of times per foot - this variation in twist rate prevents the interference pattern from one pair from synchronizing with and affecting adjacent pairs (preventing crosstalk). No metallic shielding is needed."
  },
  {
    "quizTitle": "Physical Layer",
    "category": "UTP Cabling",
    "question": "A network technician is purchasing UTP cable for a new office. The IEEE has rated cable performance by category. The installation requires supporting Gigabit Ethernet (1 Gbps). Which of the following categories would be appropriate for this requirement?",
    "options": [
      "Category 3 - because it is the most commonly available UTP cable.",
      "Category 5 or higher (5e or 6) - because IEEE performance ratings indicate these categories support Gigabit speeds.",
      "Any category works for Gigabit Ethernet because the speed is determined by the switch, not the cable.",
      "Category 3 cable supports Gigabit because it has three wire pairs instead of four."
    ],
    "correctOption": 1,
    "explanation": "The IEEE rates UTP cable according to its performance capabilities. Category 3 was designed for 10 Mbps Ethernet and telephone voice. Category 5 and 5e were designed to support Fast Ethernet (100 Mbps) and Gigabit Ethernet respectively. Category 6 provides even higher performance. For Gigabit Ethernet, at minimum Category 5e is required. Category 3 is insufficient for 1 Gbps speeds. The cable category matters - a switch can only transmit as fast as the cable can carry the signal."
  },
  {
    "quizTitle": "Physical Layer",
    "category": "UTP Cabling",
    "question": "Which organization establishes the standards for UTP cabling that cover cable types, cable lengths, connectors, cable termination, and testing methods? Which organization separately rates the cable by performance category?",
    "options": [
      "IEEE establishes installation standards; TIA/EIA rates performance categories.",
      "TIA/EIA establishes installation standards (TIA/EIA-568); IEEE rates cable by performance category (Cat 3, Cat 5/5e, Cat 6).",
      "IETF establishes all copper cabling standards including performance ratings.",
      "ISO establishes installation standards; ANSI rates performance categories."
    ],
    "correctOption": 1,
    "explanation": "There is a clear division of responsibility: TIA/EIA establishes the physical installation standards through TIA/EIA-568, which covers cable types, cable lengths, connectors, cable termination methods, and testing methods. The IEEE separately establishes the electrical performance standards for copper cabling, rating cables by category (Category 3, Category 5 and 5e, Category 6) based on their performance characteristics. Both sets of standards must be followed for a compliant installation."
  },
  {
    "quizTitle": "Physical Layer",
    "category": "UTP Cable Types",
    "question": "A network administrator needs to connect a desktop PC directly to a switch port. Which UTP cable type and wiring standard should she use?",
    "options": [
      "Ethernet Crossover cable - because connecting unlike devices requires crossing the transmit and receive pairs.",
      "Ethernet Straight-through cable - because connecting a host to a network device uses both ends terminated with either T568A or T568B.",
      "Rollover cable - because connecting a PC to a switch requires Cisco proprietary wiring.",
      "Crossover cable - because T568A and T568B standards are incompatible with switches."
    ],
    "correctOption": 1,
    "explanation": "An Ethernet Straight-through cable is used to connect a host (PC) to a network device (switch). A straight-through cable has both ends terminated with the same wiring standard - either both T568A or both T568B. Crossover cables (one end T568A, one end T568B) are used for like-device connections: host-to-host, switch-to-switch, or router-to-router. Rollover cables connect a host serial port to a router or switch console port for management access. Note: modern NICs with Auto-MDIX can automatically correct wrong cable types."
  },
  {
    "quizTitle": "Physical Layer",
    "category": "UTP Cable Types",
    "question": "A lab technician needs to connect two switches together directly without a router in between, and also needs to connect two routers back-to-back for testing. Which cable type should she use for BOTH connections?",
    "options": [
      "Straight-through cable - because switches and routers are network devices.",
      "Rollover cable - because back-to-back connections require Cisco proprietary cabling.",
      "Ethernet Crossover cable - because both switch-to-switch and router-to-router are like-device connections requiring the transmit and receive pairs to be crossed.",
      "Any cable type works because Auto-MDIX is always enabled."
    ],
    "correctOption": 2,
    "explanation": "An Ethernet Crossover cable (one end T568A, other end T568B) is used for like-device connections: host-to-host, switch-to-switch, and router-to-router. In these connections, both devices normally transmit on the same pins, so the crossover reverses the pairs so each device's transmit connects to the other device's receive. Note: crossover cables are considered legacy because most modern NICs support Auto-MDIX, which automatically senses the cable type and adjusts accordingly. However, the exam still requires knowing which cable type is theoretically correct."
  },
  {
    "quizTitle": "Physical Layer",
    "category": "UTP Cable Types",
    "question": "A Cisco network administrator needs to access the console port of a router to perform initial configuration. The laptop has only a regular serial port (no USB). Which cable type and standard is specifically designed for this connection?",
    "options": [
      "Ethernet Straight-through cable with T568B on both ends.",
      "Ethernet Crossover cable with T568A on one end and T568B on the other.",
      "Rollover cable using Cisco Proprietary wiring, connecting the host serial port to the router console port using an adapter.",
      "Fiber-optic patch cord, because console connections require optical signals."
    ],
    "correctOption": 2,
    "explanation": "A Rollover cable uses Cisco Proprietary wiring and is used to connect a host serial port to a Router or Switch Console Port, using an adapter (typically a DB-9 to RJ-45 adapter). The rollover cable gets its name because the pin connections on one end are literally reversed (rolled over) from the other end. This is the standard method for out-of-band management access to Cisco devices when there is no network connectivity. Today, most Cisco devices also support USB console connections."
  },
  {
    "quizTitle": "Physical Layer",
    "category": "UTP Cable Types",
    "question": "A technician grabs a cable from the wrong bin and connects a PC to a switch using a crossover cable instead of a straight-through cable. The link light comes on and the connection works perfectly. What feature of modern networking equipment made this possible?",
    "options": [
      "The switch automatically converted the crossover cable to a straight-through internally.",
      "Crossover and straight-through cables are actually identical - the distinction is just a labeling error.",
      "Auto-MDIX automatically senses the cable type and adjusts the port configuration to complete the connection regardless of which cable type is used.",
      "The switch uses fiber-optic internally, so copper cable type does not matter."
    ],
    "correctOption": 2,
    "explanation": "Auto-MDIX (Automatic Medium-Dependent Interface Crossover) is a feature on most modern NICs and switch ports that automatically senses the cable type being used and configures the transmit and receive pairs accordingly. This means the wrong cable type (like a crossover instead of straight-through) will still work if Auto-MDIX is supported. This is why Ethernet Crossover cables are considered legacy - Auto-MDIX makes the distinction irrelevant in practice. However, understanding the distinction remains important for CCNA exams and legacy equipment."
  },
  {
    "quizTitle": "Physical Layer",
    "category": "UTP Cabling",
    "question": "A junior technician terminates a UTP cable and leaves 5 cm of untwisted wire exposed between the end of the twists and the RJ-45 connector. An experienced technician says this will cause performance problems. Why?",
    "options": [
      "The untwisted portion increases cable length beyond the 100-meter limit.",
      "The untwisted portion of the wire pairs loses the cancellation effect, making it more susceptible to crosstalk and EMI, resulting in poor signal quality at the connector.",
      "Untwisted wires conduct electricity faster, causing timing problems.",
      "The color coding becomes unreliable when wires are untwisted near the connector."
    ],
    "correctOption": 1,
    "explanation": "The effectiveness of UTP cancellation depends on the wires being twisted together. When pairs are untwisted near the connector, that section of wire loses the cancellation protection and becomes susceptible to crosstalk and EMI. TIA/EIA-568 specifies a maximum untwisted length near the connector. A properly terminated UTP cable maintains the twist as close to the connector as possible. The module shows images of poorly versus properly terminated UTP cables to illustrate this concept - proper termination is critical to cable performance."
  },
  {
    "quizTitle": "Physical Layer",
    "category": "Fiber-Optic Cabling",
    "question": "A data center manager is choosing between UTP and fiber-optic cabling to connect two buildings 800 meters apart on a university campus. UTP cable has a maximum run of 100 meters. Which medium is the only viable choice and what key advantage makes it suitable?",
    "options": [
      "UTP, because it can be extended with signal boosters every 100 meters.",
      "STP, because the shielding allows it to carry signals over 800 meters.",
      "Fiber-optic cabling, because it transmits data over much longer distances (up to 100,000 meters) than copper cabling.",
      "Coaxial cable, because it supports longer runs than twisted-pair cable."
    ],
    "correctOption": 2,
    "explanation": "Fiber-optic cabling supports relatively long distances of 1 to 100,000 meters (100 km), while UTP copper supports only 1 to 100 meters. For an 800-meter inter-building connection, fiber-optic is the only direct solution. Fiber transmits data as light pulses through glass strands, which experience far less attenuation than electrical signals in copper over long distances. Fiber is also completely immune to EMI/RFI and electrical hazards, making it ideal for outdoor runs between buildings."
  },
  {
    "quizTitle": "Physical Layer",
    "category": "Fiber-Optic Cabling",
    "question": "A hospital network must be immune to interference from MRI machines and other medical equipment that generates intense electromagnetic fields. Which network media should be used for runs near this equipment?",
    "options": [
      "STP cable - because the shielding provides partial EMI protection.",
      "UTP with better grounding - because twisted pairs eliminate all EMI.",
      "Coaxial cable - because the braided shield completely blocks EMI.",
      "Fiber-optic cable - because it is completely immune to EMI/RFI since it carries light rather than electrical signals."
    ],
    "correctOption": 3,
    "explanation": "Fiber-optic cabling is completely immune to EMI and RFI because it carries light pulses through glass rather than electrical signals through copper. Electromagnetic fields from MRI machines and other medical equipment have absolutely no effect on optical signals. STP provides better protection than UTP but is not completely immune. Coaxial cable has a shield but is also not completely immune to very strong fields. For critical medical environments, fiber-optic is the definitive solution."
  },
  {
    "quizTitle": "Physical Layer",
    "category": "Fiber-Optic Cabling",
    "question": "A service provider needs to lay a cable under the Atlantic Ocean to connect data centers in London and New York, a distance of approximately 5,500 km. Which fiber-optic application type describes this deployment?",
    "options": [
      "Enterprise Networks - because large companies own transatlantic links.",
      "Fiber-to-the-Home (FTTH) - because the connection ultimately serves home users.",
      "Long-Haul Networks - because service providers use fiber to connect countries and cities.",
      "Submarine Cable Networks - because it provides high-speed solutions capable of surviving harsh undersea environments at transoceanic distances."
    ],
    "correctOption": 3,
    "explanation": "Submarine Cable Networks use fiber-optic cabling to provide reliable high-speed, high-capacity solutions capable of surviving in harsh undersea environments at up to transoceanic distances. The Atlantic Ocean crossing between London and New York is exactly this use case. The four fiber-optic industry applications are: Enterprise Networks (backbone cabling, infrastructure interconnection), Fiber-to-the-Home (always-on broadband for homes/small businesses), Long-Haul Networks (connecting countries and cities), and Submarine Cable Networks (undersea transoceanic connections)."
  },
  {
    "quizTitle": "Physical Layer",
    "category": "Fiber-Optic Cabling",
    "question": "A telecom company is installing fiber to residential neighborhoods to provide always-on high-speed Internet directly to homes. Which fiber-optic application category does this represent?",
    "options": [
      "Enterprise Networks - because the telecom company is a large business.",
      "Submarine Cable Networks - because the cable runs under streets.",
      "Fiber-to-the-Home (FTTH) - because it provides always-on broadband services to homes and small businesses.",
      "Long-Haul Networks - because it spans across a city."
    ],
    "correctOption": 2,
    "explanation": "Fiber-to-the-Home (FTTH) is used to provide always-on broadband services to homes and small businesses. This is the residential broadband deployment scenario - replacing older copper DSL or cable lines with direct fiber connections to individual premises. FTTH delivers gigabit-capable speeds directly to homes. Enterprise Networks use fiber for backbone and infrastructure interconnection within organizations. Long-Haul Networks connect cities and countries. Submarine Networks connect continents."
  },
  {
    "quizTitle": "Physical Layer",
    "category": "Single-Mode vs Multimode Fiber",
    "question": "A network designer is specifying fiber for a backbone connection between two buildings 2 km apart. High data rates and very low signal loss are required, and budget allows for the most capable solution. Which type of fiber and light source combination is most appropriate?",
    "options": [
      "Multimode fiber with LEDs - because LEDs are more energy efficient for long-distance runs.",
      "Single-mode fiber with lasers - because SMF has a very small core, uses expensive lasers, and is designed for long-distance applications with minimal dispersion.",
      "Multimode fiber with lasers - because lasers provide enough power to overcome MMF dispersion over 2 km.",
      "Single-mode fiber with LEDs - because LEDs are precise enough for SMF small cores."
    ],
    "correctOption": 1,
    "explanation": "Single-Mode Fiber (SMF) has a very small core (9 microns), uses expensive lasers, and is designed for long-distance applications. The small core allows only one path (mode) for light, minimizing dispersion (the spreading of light pulses over time). Less dispersion means less signal degradation over distance. MMF has greater dispersion than SMF and a maximum distance of 550 meters - insufficient for 2 km. SMF with lasers is the correct choice for long-distance, high-performance runs despite the higher cost."
  },
  {
    "quizTitle": "Physical Layer",
    "category": "Single-Mode vs Multimode Fiber",
    "question": "A network engineer needs fiber to connect switches within a single building over distances of up to 400 meters. Budget is a concern. Which fiber type is more appropriate for this short-distance, cost-conscious installation?",
    "options": [
      "Single-mode fiber - because it is always higher performance regardless of distance.",
      "Multimode fiber - because it uses less expensive LEDs, supports up to 10 Gbps over 550 meters, and is suitable for shorter-distance enterprise connections.",
      "Single-mode fiber - because LED-based systems are not reliable for intra-building connections.",
      "Multimode fiber is not suitable for Ethernet connections inside a building."
    ],
    "correctOption": 1,
    "explanation": "Multimode Fiber (MMF) has a larger core (50/62.5 microns), uses less expensive LEDs, and supports up to 10 Gbps over 550 meters. For intra-building connections up to 400 meters, MMF is entirely suitable and significantly less expensive than SMF (no need for expensive laser transceivers). The larger core makes alignment easier during installation. SMF is the right choice when long distances (beyond 550 m) or extremely high bandwidth are required. For most enterprise intra-building runs, MMF is the cost-effective standard choice."
  },
  {
    "quizTitle": "Physical Layer",
    "category": "Single-Mode vs Multimode Fiber",
    "question": "A technician explains that multimode fiber supports shorter maximum distances than single-mode fiber. What is the physical reason for this limitation in MMF?",
    "options": [
      "MMF uses lower-quality glass that absorbs more light than SMF.",
      "MMF LEDs produce less power than SMF lasers, so the signal fades faster.",
      "Dispersion - light in MMF travels at multiple angles (modes), causing pulses to spread out over time. Increased dispersion means increased signal loss, limiting MMF to 550 meters maximum.",
      "MMF has a smaller core than SMF, leaving less room for light to travel."
    ],
    "correctOption": 2,
    "explanation": "Dispersion refers to the spreading out of a light pulse over time. In multimode fiber, LEDs transmit light at different angles, creating multiple paths (modes) through the fiber. These different paths have slightly different lengths, so light from the same pulse arrives at slightly different times, causing the pulse to spread out. Increased dispersion means increased loss of signal strength and makes it harder to distinguish individual pulses. MMF has greater dispersion than SMF, limiting MMF to a maximum of 550 meters. SMF's tiny core (9 microns) forces all light down one path, eliminating dispersion."
  },
  {
    "quizTitle": "Physical Layer",
    "category": "Fiber-Optic Connectors",
    "question": "A technician is looking at a fiber patch cord with a bright yellow jacket. Without reading the label, what type of fiber is this cable most likely?",
    "options": [
      "Multimode fiber - because yellow indicates high-bandwidth capability.",
      "Single-mode fiber - because yellow jackets identify single-mode fiber cables.",
      "Multimode fiber - because multimode cables are always brightly colored.",
      "The jacket color has no meaning for fiber identification."
    ],
    "correctOption": 1,
    "explanation": "Fiber patch cord jacket color provides immediate visual identification of fiber type: a yellow jacket indicates single-mode fiber (SMF), while orange or aqua jackets indicate multimode fiber (MMF). This color coding is standardized and allows technicians to quickly identify the correct cable type without reading labels. Connecting the wrong fiber type (SMF to MMF or vice versa) can cause significant signal loss. This simple visual identifier is important in data center environments where hundreds of fiber cables may be present."
  },
  {
    "quizTitle": "Physical Layer",
    "category": "Fiber-Optic Connectors",
    "question": "A data center technician needs to connect a server to a patch panel using fiber. The server has LC (Lucent Connector) ports and the patch panel has SC (Subscriber Connector) ports. What type of fiber patch cord does she need?",
    "options": [
      "An LC-LC patch cord, because both ends must use the same connector type.",
      "An ST-SC patch cord, because mixed environments require straight-tip connectors.",
      "An LC-SC patch cord, because the patch cord must match LC on one end and SC on the other.",
      "A straight-through UTP cable, because fiber and copper connectors are interchangeable."
    ],
    "correctOption": 2,
    "explanation": "Fiber patch cords are available with different connector types on each end to accommodate mixed-connector environments. In this case, the server has LC connectors and the patch panel has SC connectors, so an LC-SC patch cord is needed. Common fiber connectors include: Straight-Tip (ST), Subscriber Connector (SC), Lucent Connector (LC) Simplex, and Duplex Multimode LC connectors. Mixed-connector patch cords are common in enterprise environments where different equipment generations use different connector standards."
  },
  {
    "quizTitle": "Physical Layer",
    "category": "Fiber vs Copper Comparison",
    "question": "A network architect is comparing UTP and fiber-optic options for a new campus network. She lists the following requirements: must support 40 Gbps, must run 5,000 meters between buildings, must be immune to ground potential differences between buildings. Which media satisfies ALL three requirements?",
    "options": [
      "UTP - because Cat 6 supports 40 Gbps and can run between buildings.",
      "STP - because shielding protects against ground potential differences.",
      "Fiber-optic - because it supports up to 100 Gbps, runs up to 100,000 meters, and is completely immune to electrical hazards including ground potential differences.",
      "Coaxial - because it supports high bandwidth and long runs."
    ],
    "correctOption": 2,
    "explanation": "Fiber-optic satisfies all three requirements: it supports 10 Mbps to 100 Gbps (well above 40 Gbps), it supports 1 to 100,000 meters (well above 5,000 m), and it is completely immune to electrical hazards including dangerous ground potential differences between buildings. UTP supports only 1-100 meters and has low immunity to electrical hazards. Ground potential differences between buildings can damage copper-connected equipment. Fiber carries light, not electricity, so it is inherently safe and immune across these electrical boundaries."
  },
  {
    "quizTitle": "Physical Layer",
    "category": "Fiber vs Copper Comparison",
    "question": "A small office with a $500 cabling budget needs to connect 20 workstations to a switch. All runs are under 50 meters. Which media choice is most appropriate given the budget constraints and requirements?",
    "options": [
      "Fiber-optic cable - because it is future-proof and provides the best performance.",
      "UTP cable - because it has the lowest media and connector costs, requires the least installation skill, and has the fewest safety precautions while meeting the distance requirements.",
      "STP cable - because noise protection is always worth the extra cost.",
      "Single-mode fiber - because it is the highest performance option available."
    ],
    "correctOption": 1,
    "explanation": "For a short-distance, budget-constrained office installation, UTP copper cable is the clear choice. Compared to fiber-optic, UTP has the lowest media and connector costs, requires the lowest installation skills, has the fewest safety precautions, and easily meets the 50-meter distance requirement. Fiber-optic requires higher installation skill, specialized tools, more safety precautions, and costs significantly more for both media and connectors. Fiber is justified when its advantages (long distance, EMI immunity, high bandwidth, electrical isolation) are actually needed."
  },
  {
    "quizTitle": "Physical Layer",
    "category": "Wireless Media",
    "question": "A coffee shop installs a wireless network for customers. At peak hours with 30 simultaneous users, each customer experiences noticeably slow speeds even though the access point is capable of 300 Mbps. What fundamental characteristic of WLANs causes this per-user slowdown?",
    "options": [
      "Wireless signals lose strength when more than 10 users connect simultaneously.",
      "WLANs operate in half-duplex using a shared medium, meaning only one device can send or receive at a time, so many simultaneous users results in reduced bandwidth for each user.",
      "The access point limits connections to protect security.",
      "Wireless uses unicast delivery, which becomes inefficient with more users."
    ],
    "correctOption": 1,
    "explanation": "WLANs operate in half-duplex and use a shared medium, meaning only one device can send or receive at a time. All users on the same wireless network must share the available bandwidth. With 30 simultaneous users, the 300 Mbps total capacity is divided among all users, giving each user effectively only about 10 Mbps on average (less in practice due to contention overhead). This is a fundamental limitation of shared wireless media, unlike dedicated full-duplex wired Ethernet where each device gets its own bandwidth."
  },
  {
    "quizTitle": "Physical Layer",
    "category": "Wireless Media",
    "question": "A company discovers that an unauthorized person parked outside their building was capturing their wireless network traffic with a laptop and a wireless adapter. Which fundamental wireless security limitation made this possible?",
    "options": [
      "Wireless networks cannot use encryption, making all traffic readable.",
      "The wireless access point had a weak password that was guessed.",
      "Wireless communication requires no access to a physical strand of media, so anyone within range can potentially access the transmission without physically connecting to anything.",
      "The wireless signals were on a frequency that bypassed the firewall."
    ],
    "correctOption": 2,
    "explanation": "A fundamental security limitation of wireless media is that wireless communication coverage requires no access to a physical strand of media. Unlike wired Ethernet where an attacker must physically connect a cable, anyone within range of a wireless signal can attempt to receive and capture that transmission. This is why Network Administrators must develop and apply stringent security policies and processes to protect WLANs from unauthorized access. This limitation is inherent to the physics of radio wave propagation."
  },
  {
    "quizTitle": "Physical Layer",
    "category": "Wireless Media",
    "question": "A nurse in a hospital notices that her tablet loses Wi-Fi connectivity whenever she walks into the radiology department. The hospital's wireless engineer says this is a coverage area issue. What does this mean in the context of wireless limitations?",
    "options": [
      "The tablet battery drains faster near X-ray equipment, causing disconnections.",
      "Effective wireless coverage can be significantly impacted by the physical characteristics of the deployment location - walls, equipment, and building materials can block or absorb wireless signals, creating dead zones.",
      "Wi-Fi signals cannot penetrate hospital-grade building materials at any distance.",
      "The radiology department uses a different wireless standard that the tablet does not support."
    ],
    "correctOption": 1,
    "explanation": "Coverage area is one of the key limitations of wireless media - effective coverage can be significantly impacted by the physical characteristics of the deployment location. Lead-lined walls in radiology departments (used for radiation shielding), metal equipment, thick concrete walls, and other physical obstacles can significantly attenuate or completely block wireless signals, creating dead zones. This is why WLAN planning requires site surveys to identify coverage gaps and proper placement of additional access points to ensure complete coverage."
  },
  {
    "quizTitle": "Physical Layer",
    "category": "Wireless Standards",
    "question": "A student wants to connect wireless earbuds to her phone and also connect her smartwatch for health monitoring. Both connections are very short range (under 10 meters) and low data rate. Which wireless standard is designed for this type of short-range personal area network?",
    "options": [
      "Wi-Fi (IEEE 802.11) - because it is the most common wireless standard for all uses.",
      "WiMAX (IEEE 802.16) - because it provides broadband wireless access.",
      "Bluetooth (IEEE 802.15) - because it is a Wireless Personal Area Network (WPAN) standard designed for short-range personal device connections.",
      "Zigbee (IEEE 802.15.4) - because it is the IoT standard for wearable devices."
    ],
    "correctOption": 2,
    "explanation": "Bluetooth (IEEE 802.15) is a Wireless Personal Area Network (WPAN) standard designed for short-range connections between personal devices such as earbuds, headphones, smartwatches, keyboards, and mice. Wi-Fi (IEEE 802.11) is designed for WLAN connections typically used for Internet access. WiMAX (IEEE 802.16) provides broadband wireless access over larger areas. Zigbee (IEEE 802.15.4) is optimized for low data-rate, low power IoT applications like smart home sensors, not consumer personal devices."
  },
  {
    "quizTitle": "Physical Layer",
    "category": "Wireless Standards",
    "question": "A smart home installation includes wireless temperature sensors, motion detectors, and smart light switches throughout a house. These devices run on small batteries that must last years, and they only transmit small amounts of data occasionally. Which wireless standard is specifically designed for this type of IoT application?",
    "options": [
      "Wi-Fi (IEEE 802.11) - because it is the most widely supported wireless standard in homes.",
      "Bluetooth (IEEE 802.15) - because it supports personal area network devices.",
      "WiMAX (IEEE 802.16) - because it provides reliable wireless coverage throughout buildings.",
      "Zigbee (IEEE 802.15.4) - because it is designed for low data-rate, low power-consumption communications primarily for IoT applications."
    ],
    "correctOption": 3,
    "explanation": "Zigbee (IEEE 802.15.4) is specifically designed for low data-rate, low power-consumption communications, primarily for Internet of Things (IoT) applications. Smart home sensors, light switches, and environmental monitors are classic Zigbee use cases - they need extremely low power consumption (battery life measured in years) and only transmit small amounts of data infrequently. Wi-Fi's higher power consumption would drain small batteries quickly. Bluetooth is for personal devices. WiMAX is for metropolitan broadband access."
  },
  {
    "quizTitle": "Physical Layer",
    "category": "Wireless Standards",
    "question": "A rural community outside a city has no fiber or cable infrastructure but needs broadband Internet access. A service provider deploys a wireless solution using point-to-multipoint topology to serve multiple homes from a single tower. Which wireless standard supports this type of deployment?",
    "options": [
      "Wi-Fi (IEEE 802.11) - because it is the standard for all wireless Internet access.",
      "Bluetooth (IEEE 802.15) - because it can connect multiple devices to one access point.",
      "WiMAX (IEEE 802.16) - because it uses a point-to-multipoint topology to provide broadband wireless access.",
      "Zigbee (IEEE 802.15.4) - because it is designed for wide-area IoT deployments."
    ],
    "correctOption": 2,
    "explanation": "WiMAX (IEEE 802.16) uses a point-to-multipoint topology to provide broadband wireless access. It is designed for metropolitan-scale wireless Internet access, making it suitable for providing broadband to rural areas or communities without wired infrastructure. One WiMAX tower can serve multiple subscribers (point-to-multipoint) over distances of many kilometers. Wi-Fi is for local area networks, Bluetooth is for personal area networks, and Zigbee is for low-power IoT sensors - none of these are designed for metropolitan broadband delivery."
  },
  {
    "quizTitle": "Physical Layer",
    "category": "Wireless Media",
    "question": "A building has been retrofitted with wireless access points throughout. What are the two device types required to build a functional WLAN infrastructure?",
    "options": [
      "Wireless routers and fiber-optic transceivers.",
      "Wireless Access Points (APs) to concentrate signals and connect to the wired network, and Wireless NIC Adapters in host devices to provide wireless communication capability.",
      "Wireless switches and wireless firewalls.",
      "WiMAX towers and Bluetooth adapters."
    ],
    "correctOption": 1,
    "explanation": "A Wireless LAN (WLAN) requires two key device types: Wireless Access Points (APs), which concentrate wireless signals from users and connect to the existing copper-based network infrastructure; and Wireless NIC Adapters in host devices (laptops, phones, tablets), which provide wireless communications capability to network hosts. The AP is the bridge between the wireless domain and the wired network. The wireless NIC adapter in each device is what allows that device to communicate wirelessly. Together, these enable the wireless network."
  },
  {
    "quizTitle": "Physical Layer",
    "category": "Wireless Media",
    "question": "A wireless network administrator has configured a new WLAN. A security consultant reviews the setup and says network administrators must develop and apply stringent security policies because of a fundamental wireless vulnerability. What is that vulnerability?",
    "options": [
      "Wireless signals travel faster than wired signals, making them harder to secure.",
      "Because wireless requires no physical connection to access the transmission medium, anyone within range can attempt to access or intercept the network without needing physical access to cables or equipment.",
      "WLANs cannot support user authentication, making all users anonymous.",
      "Wireless access points broadcast their presence and cannot be hidden."
    ],
    "correctOption": 1,
    "explanation": "The fundamental wireless security vulnerability is that wireless communication coverage requires no access to a physical strand of media. With a wired network, an attacker must physically plug into a network port. With wireless, anyone within radio range - including people outside the building - can potentially receive and transmit on the wireless medium. This is why WLANs require stringent security policies and processes including strong encryption (WPA3), strong authentication, wireless intrusion detection, and careful access point placement to control the coverage area."
  },
  {
    "quizTitle": "Physical Layer",
    "category": "Wireless Media",
    "question": "Which statement BEST describes how wireless media carries data?",
    "options": [
      "Wireless media carries data as electrical pulses through air molecules between devices.",
      "Wireless media carries electromagnetic signals representing binary digits using radio or microwave frequencies through the air.",
      "Wireless media converts data to light pulses that travel through air similar to fiber-optic cables.",
      "Wireless media uses sound waves encoded with data patterns to transmit information."
    ],
    "correctOption": 1,
    "explanation": "Wireless media carries electromagnetic signals representing binary digits (0s and 1s) using radio or microwave frequencies. Unlike copper cable (electrical signals) or fiber optic (light pulses), wireless uses radio waves propagating through air and space. Different wireless standards use different frequency ranges - Wi-Fi uses 2.4 GHz and 5 GHz bands, Bluetooth uses 2.4 GHz, and WiMAX uses frequencies from 2 to 11 GHz. The electromagnetic nature of wireless makes it versatile (greatest mobility) but also more susceptible to interference and security risks."
  },
  {
    "quizTitle": "Physical Layer",
    "category": "Wireless Media",
    "question": "A user in a large open-plan office complains that her Wi-Fi drops out randomly throughout the day. Investigation shows a cordless phone, a microwave oven in the break room, and a neighbor's Wi-Fi all operate on the 2.4 GHz frequency. Which wireless limitation best explains the random dropouts?",
    "options": [
      "Coverage area - because the office is too large for one access point.",
      "Interference - because wireless is susceptible to disruption by many common devices operating on the same or nearby frequencies.",
      "Security - because unauthorized users are consuming her wireless bandwidth.",
      "Shared medium - because too many authorized users are connecting simultaneously."
    ],
    "correctOption": 1,
    "explanation": "Interference is a key wireless limitation - wireless is susceptible to interference and can be disrupted by many common devices. Cordless phones (especially older 2.4 GHz models), microwave ovens, and neighboring Wi-Fi networks all operate in or near the 2.4 GHz frequency range, causing interference that disrupts Wi-Fi performance. Solutions include switching to the 5 GHz band (less congested), selecting non-overlapping channels, and upgrading to Wi-Fi standards that better handle interference. Coverage, security, and shared medium are real wireless limitations but do not describe this specific scenario."
  },
  {
    "quizTitle": "Physical Layer",
    "category": "Physical Layer Standards",
    "question": "A hardware vendor is designing a new network interface card. Which category of standards governs the Physical layer specifications that the NIC must implement, and what is a key difference from TCP/IP protocol standards?",
    "options": [
      "IETF standards govern NIC hardware just as they govern software protocols, with no fundamental difference.",
      "Physical layer standards are implemented in hardware and governed by organizations like ISO, EIA/TIA, ITU-T, ANSI, and IEEE - unlike TCP/IP standards which are implemented in software and governed by the IETF.",
      "Only IEEE governs all NIC hardware - other organizations have no role in Physical layer standards.",
      "NIC hardware is not governed by any standards - vendors can implement any design they choose."
    ],
    "correctOption": 1,
    "explanation": "Physical layer standards are implemented in hardware (NICs, cables, transceivers, connectors) and are governed by multiple organizations: ISO, EIA/TIA, ITU-T, ANSI, and IEEE. This contrasts with TCP/IP protocol standards, which are implemented in software and governed by the IETF. The hardware nature of Physical layer standards means they specify physical attributes like electrical voltages, optical power levels, connector dimensions, cable specifications, and signal encoding methods - things that must be precisely defined for physical interoperability between equipment from different manufacturers."
  },
  {
    "quizTitle": "Physical Layer",
    "category": "Copper Cabling Characteristics",
    "question": "A project manager asks why the networking team insists on replacing all copper cable runs with ones under 90 meters (leaving 10 meters for patch cables at each end) rather than using the full 100-meter specification. What copper cabling principle are they applying?",
    "options": [
      "Cables longer than 90 meters are not sold in the market.",
      "Strict adherence to cable length limits mitigates attenuation - staying under the maximum length ensures the signal arrives strong enough to be reliably received.",
      "The IEEE requires all copper runs to be under 90 meters for warranty purposes.",
      "Shorter cables reduce crosstalk because there are fewer wire pair twists."
    ],
    "correctOption": 1,
    "explanation": "Strict adherence to cable length limits is the primary mitigation for attenuation in copper cabling. Attenuation causes the electrical signal to weaken progressively as it travels, and the maximum 100-meter UTP length (90 meters for permanent link plus 10 meters for patch cables at each end) ensures the signal arrives with sufficient strength to be reliably decoded. Running cables beyond the limit causes signals to arrive too weak, resulting in errors. The 90+10 meter convention is the standard TIA/EIA-568 channel model that the team is correctly applying."
  },
  {
    "quizTitle": "Physical Layer",
    "category": "Bandwidth",
    "question": "A network monitoring tool reports these three metrics for the same link: bandwidth 1 Gbps, throughput 720 Mbps, goodput 680 Mbps. A manager asks what each number means. Which explanation is correct?",
    "options": [
      "All three numbers are different ways of saying the same thing - the link speed.",
      "Bandwidth (1 Gbps) is the theoretical maximum capacity. Throughput (720 Mbps) is the actual total bits transferred per second including overhead. Goodput (680 Mbps) is the usable payload data transferred per second, equal to throughput minus overhead (720 - 40 = 680 Mbps).",
      "Throughput is always higher than bandwidth because overhead adds extra bits.",
      "Goodput and throughput are identical measurements taken at different times of day."
    ],
    "correctOption": 1,
    "explanation": "These three metrics tell different stories about a link: Bandwidth (1 Gbps) is the theoretical maximum capacity determined by the physical media and technology - the ceiling. Throughput (720 Mbps) is the actual measurement of all bits (including headers, acknowledgments, retransmissions, and other protocol overhead) crossing the media per second - always less than or equal to bandwidth. Goodput (680 Mbps) is the usable payload data received per second, calculated as Throughput minus traffic overhead (720 - 40 = 680 Mbps). Goodput is what applications and users actually benefit from."
  },
  {
    "quizTitle": "Physical Layer",
    "category": "Single-Mode vs Multimode Fiber",
    "question": "A student sees two fiber patch cords in the lab: one with an orange jacket (LC connectors) and one with a yellow jacket (LC connectors). She needs to connect to a short-distance multimode port on a switch. Which cable should she use and why?",
    "options": [
      "Yellow jacket - because single-mode works in both short and long distance applications.",
      "Orange jacket - because orange (or aqua) identifies multimode fiber, which is appropriate for short-distance connections using LED-based transceivers.",
      "Either cable works - fiber jacket colors are just aesthetic choices.",
      "Orange jacket - because orange cables are always cheaper and short-distance does not require quality fiber."
    ],
    "correctOption": 1,
    "explanation": "Orange (or aqua) jacket identifies multimode fiber (MMF), while yellow jacket identifies single-mode fiber (SMF). The switch port is a multimode port (designed for LED-based, short-distance connections), so the student must use the orange MMF cable. Connecting a yellow SMF cable to a multimode port would cause significant optical power loss because the core sizes are incompatible (SMF core is 9 microns, MMF core is 50 or 62.5 microns). Jacket color is a standardized, functional identifier - not aesthetic. Always match fiber type to the transceiver specification."
  },
  {
    "quizTitle": "Physical Layer",
    "category": "Purpose of the Physical Layer",
    "question": "In the layered networking model, what is the correct sequence of events when data travels from a web browser application on PC1 down through the Physical layer and onto the network medium?",
    "options": [
      "The Physical layer encapsulates data first, then passes it up to the Data Link layer for signal conversion.",
      "HTTP data is created at the Application layer, TCP adds a segment header, IP adds a packet header, Ethernet (Data Link) adds a frame header/trailer, and finally the Physical layer encodes the complete Ethernet frame as signals for transmission onto the media.",
      "The Physical layer creates the original data and sends it to the Application layer for processing.",
      "Data travels from the Physical layer upward to the Application layer before any transmission occurs."
    ],
    "correctOption": 1,
    "explanation": "This describes the complete top-down encapsulation process: Application layer (HTTP) creates user data, Transport layer (TCP) adds segment header, Network layer (IP) adds packet header, Data Link layer (Ethernet) adds frame header and trailer, and finally the Physical layer accepts the complete frame and encodes it as signals (electrical, optical, or radio) appropriate for the transmission medium. The Physical layer is the last step in encapsulation on the sending side. This is why the Physical layer is described as transporting bits across the network media."
  },
  {
    "quizTitle": "Physical Layer",
    "category": "Wireless Standards",
    "question": "A network engineer is reviewing the physical layer specifications for a new wireless deployment. The spec document covers data to radio signal encoding methods, frequency and power of transmission, signal reception and decoding requirements, and antenna design. Which wireless standards organization published specifications covering all of these physical layer aspects?",
    "options": [
      "IETF - which governs all wireless protocol specifications.",
      "IEEE and the telecommunications industry - which establish wireless data communication standards covering both the data link and physical layers.",
      "ICANN - which assigns wireless frequency allocations.",
      "TIA/EIA - which exclusively governs all wireless standards."
    ],
    "correctOption": 1,
    "explanation": "The IEEE and telecommunications industry standards for wireless data communications cover both the data link and physical layers. For the physical layer specifically, these standards dictate: data to radio signal encoding methods, frequency and power of transmission, signal reception and decoding requirements, and antenna design and construction. The IEEE 802 family covers Wi-Fi (802.11), Bluetooth (802.15), WiMAX (802.16), and Zigbee (802.15.4). IETF handles software protocols. ICANN manages domain names and IP addresses. TIA/EIA focuses primarily on wired cabling standards."
  },
  {
    "quizTitle": "Physical Layer",
    "category": "Fiber vs Copper Comparison",
    "question": "A safety officer raises concerns about a proposed fiber-optic installation. She notes that the project requires much higher safety precautions than the previous copper installation. Why does fiber-optic installation require more safety attention than copper cabling?",
    "options": [
      "Fiber-optic cables carry high-voltage electricity that can cause electric shocks.",
      "Fiber-optic installation requires more safety precautions because of risks like invisible laser light that can damage eyes, ultra-fine glass shards that can penetrate skin, and specialized tools required - all rated higher than copper installation safety requirements.",
      "Fiber-optic cables are heavier than copper and pose a falling hazard.",
      "The chemicals used to manufacture fiber-optic cables remain on the cable surface and are toxic to touch."
    ],
    "correctOption": 1,
    "explanation": "Fiber-optic cabling requires the highest safety precautions compared to copper alternatives. Key safety risks include: invisible laser light (especially in SMF) that can permanently damage eyes without any visual warning, extremely fine glass shards from cleaved or broken fiber ends that can penetrate skin and are nearly invisible, and the need for specialized tools and techniques. The fiber vs copper comparison table in the module rates fiber as requiring the highest safety precautions of all media types. Copper's main safety concern is electrical shock, which fiber avoids entirely."
  },
  {
    "quizTitle": "Physical Layer",
    "category": "Types of Copper Cabling",
    "question": "A student is studying the three types of copper cabling. Which statement correctly matches each copper cable type to a distinguishing characteristic?",
    "options": [
      "UTP has metallic shielding, STP uses twisted pairs only, Coaxial has a central conductor with surrounding braid shield.",
      "UTP is the most common networking media using twisted pairs without shielding; STP uses additional braided or foil shielding for better noise protection; Coaxial has a central copper conductor surrounded by insulation, a woven copper braid shield, and an outer jacket.",
      "All three copper cable types use the same RJ-45 connector and differ only in maximum cable length.",
      "Coaxial is used exclusively for Ethernet LAN connections; UTP is used for cable TV; STP is used for wireless antenna connections."
    ],
    "correctOption": 1,
    "explanation": "The three copper cable types have distinct structures: UTP (Unshielded Twisted Pair) is the most common networking media, using twisted wire pairs with no metallic shielding, terminated with RJ-45 connectors. STP (Shielded Twisted Pair) adds braided or foil shielding both around each pair and around all pairs for better EMI/RFI protection, also terminated with RJ-45. Coaxial cable has a unique concentric structure: central copper conductor, flexible plastic insulation, woven copper braid shield (acting as second conductor and shield), and outer jacket - terminated with BNC, N-type, or F-type connectors, used for wireless antennas and cable internet."
  },
  {
    "quizTitle": "Physical Layer",
    "category": "Bandwidth",
    "question": "Which of the following bandwidth unit conversions is INCORRECT?",
    "options": [
      "1 Kbps = 1,000 bps",
      "1 Mbps = 1,000,000 bps",
      "1 Gbps = 1,000,000,000 bps",
      "1 Tbps = 1,000,000 bps"
    ],
    "correctOption": 3,
    "explanation": "1 Tbps = 1,000,000,000,000 bps (10 to the power of 12, or one trillion bps) - NOT 1,000,000 bps. The bandwidth unit hierarchy is: bps (fundamental unit), Kbps = 10^3 bps = 1,000 bps, Mbps = 10^6 bps = 1,000,000 bps, Gbps = 10^9 bps = 1,000,000,000 bps, Tbps = 10^12 bps = 1,000,000,000,000 bps. Each unit is exactly 1,000 times the previous unit. 1 Tbps = 1,000 Gbps = 1,000,000 Mbps = 1,000,000,000 Kbps = 1,000,000,000,000 bps."
  }
];