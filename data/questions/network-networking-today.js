// data/questions/network-networking-today.js

module.exports = [
  {
    "quizTitle": "Networking Today",
    "category": "Network Types & Sizes",
    "question": "A dentist operates a single office with 6 computers, a shared printer, and a reception desk. All devices are physically located in the same building and managed by the dentist's IT contractor. Which network classification best describes this setup?",
    "options": [
      "WAN — because it connects multiple business locations.",
      "LAN — because it spans a small geographic area under single administration.",
      "MAN — because it covers a metropolitan area.",
      "Internet — because it connects to external services like cloud billing."
    ],
    "correctOption": 1,
    "explanation": "A LAN (Local Area Network) spans a small geographic area such as a home, office, or campus, is typically administered by a single organization or individual, and provides high-speed bandwidth to devices within that network. The dentist's single-building setup with local administration is a textbook LAN. A WAN interconnects multiple LANs across large geographic areas, and a MAN covers city-scale distances."
  },
  {
    "quizTitle": "Networking Today",
    "category": "Network Types & Sizes",
    "question": "A logistics company has warehouses in Calgary, Toronto, and Vancouver. Each warehouse has its own local network, but all three must share inventory data in real time. The company pays a telecommunications provider to link these sites together. Which type of network connects the three warehouse LANs?",
    "options": [
      "LAN — because all three warehouses belong to the same company.",
      "WLAN — because wireless technology is used between buildings.",
      "WAN — because it spans large geographic areas and uses a service provider.",
      "SAN — because it shares storage data between locations."
    ],
    "correctOption": 2,
    "explanation": "A WAN (Wide Area Network) interconnects LANs across wide geographic areas such as between cities or countries, is usually administered by multiple service providers, and typically provides slower-speed links between LANs compared to local bandwidth. The logistics company's three-city setup managed by a telecom provider is a WAN. A LAN is locally contained, a WLAN is wireless but still local, and a SAN is specifically for storage."
  },
  {
    "quizTitle": "Networking Today",
    "category": "Network Types & Sizes",
    "question": "A software developer works from home but needs to access her company's internal HR portal, project management tools, and code repositories. Her laptop at home connects through the Internet to reach these resources as if she were in the office. What type of network does her company use to enable this?",
    "options": [
      "A public cloud — because she accesses it through the Internet.",
      "A LAN — because she connects to the company's local network.",
      "A Small Office/Home Office (SOHO) network — because she works from home.",
      "A WAN — because the company's network spans multiple locations she accesses remotely."
    ],
    "correctOption": 2,
    "explanation": "A Small Office/Home Office (SOHO) network enables computers within a home or remote office to connect to a corporate network. This is the scenario here — the developer's home setup acts as a remote access point into the corporate infrastructure. While a WAN physically connects the sites, the classification of her home setup as a SOHO is the more precise answer. A public cloud is externally hosted, not the company's own systems."
  },
  {
    "quizTitle": "Networking Today",
    "category": "Clients and Servers",
    "question": "A university student opens a browser and types the address of the school's course registration website. The student's laptop sends a request and receives a webpage with available courses. In this exchange, what roles do the laptop and the university's course registration machine each play?",
    "options": [
      "Both devices are servers — they both provide data to users.",
      "The laptop is the server; the course registration machine is the client.",
      "The laptop is the client; the course registration machine is the server.",
      "Both devices are clients — they both request data from the Internet."
    ],
    "correctOption": 2,
    "explanation": "A client is a computer that sends requests to retrieve information — here, the laptop sends the request. A server is a computer that provides information to end devices — the course registration machine responds with the course data. Every computer connected to a network is called a host or end device, but their roles (client vs. server) depend on whether they request or provide information in a given exchange."
  },
  {
    "quizTitle": "Networking Today",
    "category": "Clients and Servers",
    "question": "A small graphic design studio has two designers. Designer A stores all project files on her workstation and also browses shared files from Designer B's machine. Designer B does the same. Neither machine is a dedicated server — they simply share files with each other as needed. What kind of network model does this studio use?",
    "options": [
      "Client-server model — because one machine always provides files.",
      "Peer-to-peer model — because both machines act as clients and servers.",
      "Cloud model — because they share resources over the Internet.",
      "Intranet model — because the sharing is internal to the organization."
    ],
    "correctOption": 1,
    "explanation": "In a peer-to-peer (P2P) network, a single device can act as both a client and a server. Neither machine is dedicated as a server — each shares resources with the other. P2P networks are easy to set up, less complex, and lower cost, but they lack centralized administration, are less secure, not easily scalable, and have slower performance compared to dedicated client-server architectures."
  },
  {
    "quizTitle": "Networking Today",
    "category": "Clients and Servers",
    "question": "A startup wants to expand its file-sharing setup. Currently two employees share files peer-to-peer, but they are hiring 40 more people and need centralized access control, backups, and user authentication. Which limitation of their current model is driving this change?",
    "options": [
      "Peer-to-peer networks cannot transfer files between computers.",
      "Peer-to-peer networks require an Internet connection to function.",
      "Peer-to-peer networks lack centralized administration and are not scalable.",
      "Peer-to-peer networks can only connect two devices at a time."
    ],
    "correctOption": 2,
    "explanation": "Peer-to-peer networking disadvantages include no centralized administration, weaker security, limited scalability, and slower performance. As the startup grows to 40+ employees, they need centralized user management, permissions, and backups — none of which P2P handles well. Moving to a client-server model with a dedicated server addresses these scalability and administration gaps."
  },
  {
    "quizTitle": "Networking Today",
    "category": "Network Components",
    "question": "A network engineer is documenting her company's infrastructure. She lists the following: employee laptops, IP phones, a receipt printer, and a tablet used at the front desk. Which category of network component do all of these belong to?",
    "options": [
      "Intermediary devices — because they route data between users.",
      "Network media — because they carry data signals.",
      "End devices — because they are where data originates or is received.",
      "Services — because they provide functionality to the network."
    ],
    "correctOption": 2,
    "explanation": "End devices (also called hosts) are the points where messages originate from or are received. Laptops, IP phones, printers, and tablets are all end devices. Intermediary devices (like routers and switches) connect end devices together and manage data flow. Network media (copper, fiber, wireless) carries the signal, and services are software-based functions like email or web hosting."
  },
  {
    "quizTitle": "Networking Today",
    "category": "Network Components",
    "question": "During a network outage investigation, a technician identifies that the device responsible for regenerating signals, maintaining pathway information across the network, and notifying other devices of communication failures has malfunctioned. Which type of device is this?",
    "options": [
      "An end device, such as a workstation.",
      "An intermediary device, such as a router or switch.",
      "A network media component, such as fiber optic cable.",
      "A storage area network (SAN) device."
    ],
    "correctOption": 1,
    "explanation": "Intermediary devices — including switches, wireless access points, routers, and firewalls — are responsible for interconnecting end devices, regenerating and retransmitting data signals, maintaining pathway information, and notifying devices of errors. End devices are the source/destination of data. Media carries signals but doesn't manage them. SANs are specialized storage networks."
  },
  {
    "quizTitle": "Networking Today",
    "category": "Network Components",
    "question": "A network administrator is upgrading a building's infrastructure. She chooses a medium that can carry data as pulses of light and is immune to electromagnetic interference from nearby electrical equipment. Which type of network media is she installing?",
    "options": [
      "Copper/metallic wire cabling.",
      "Powerline networking adapters.",
      "Fiber optic (glass) cabling.",
      "Wireless radio frequency transmission."
    ],
    "correctOption": 2,
    "explanation": "Networks use three types of media: metallic wires (such as copper, which carry electrical signals and are susceptible to electromagnetic interference), glass/fiber optic cables (which carry data as light pulses and are immune to EMI), and wireless transmission (radio waves through the air). The immune-to-interference clue here points specifically to fiber optic cabling."
  },
  {
    "quizTitle": "Networking Today",
    "category": "Network Representations",
    "question": "A junior network technician is given two diagrams of the same office network. Diagram A shows which server is in Room 204, Shelf 2, and which switch is in the equipment closet on Floor 3. Diagram B shows IP addresses, port numbers (Fa0/1, G0/2), and how subnets connect. What are the correct names for Diagram A and Diagram B respectively?",
    "options": [
      "Diagram A is a logical topology; Diagram B is a physical topology.",
      "Diagram A is a physical topology; Diagram B is a logical topology.",
      "Both diagrams are physical topologies showing different levels of detail.",
      "Diagram A is a WAN diagram; Diagram B is a LAN diagram."
    ],
    "correctOption": 1,
    "explanation": "A physical topology diagram shows the actual physical location of devices (which room, which rack, which shelf). A logical topology diagram shows ports, IP addresses, and network addressing schemes — how data logically flows through the network regardless of physical placement. Understanding this distinction is essential for both designing and troubleshooting networks."
  },
  {
    "quizTitle": "Networking Today",
    "category": "Network Representations",
    "question": "In a network topology diagram, a technician sees a symbol that looks like a cylinder with a circular top, connected by a zigzag red line to another location. What does the zigzag red line most likely represent?",
    "options": [
      "LAN media — a standard Ethernet cable connection.",
      "Wireless media — a radio frequency signal.",
      "WAN media — a wide area network connection between sites.",
      "A fiber optic backbone cable."
    ],
    "correctOption": 2,
    "explanation": "In standard Cisco topology diagrams, different line styles represent different media types: a straight solid line represents LAN media (Ethernet), a series of circles/dots represents wireless media, and a zigzag or lightning-bolt line represents WAN media — the connection between geographically separated sites. Recognizing these symbols is essential for reading and creating accurate network diagrams."
  },
  {
    "quizTitle": "Networking Today",
    "category": "Internet, Intranets & Extranets",
    "question": "A hospital system wants to give authorized staff access to patient records, scheduling software, and internal communications — but only employees with valid credentials should ever see this content. General internet users should have no access whatsoever. Which network type should the hospital implement?",
    "options": [
      "The public Internet — because it is globally accessible.",
      "An extranet — because it allows external partners to access internal data.",
      "An intranet — because it is a private network accessible only to authorized members.",
      "A WAN — because the hospital has multiple departments."
    ],
    "correctOption": 2,
    "explanation": "An intranet is a private collection of LANs and WANs internal to an organization, accessible only to the organization's members or others with authorization. It is not accessible to the public Internet. An extranet is different — it grants controlled access to specific outside parties (like suppliers or contractors). Since the hospital wants only internal staff to have access, an intranet is the correct choice."
  },
  {
    "quizTitle": "Networking Today",
    "category": "Internet, Intranets & Extranets",
    "question": "A manufacturing company works closely with three approved parts suppliers. The company wants those suppliers to be able to log in, check inventory levels, and submit invoices — but the suppliers should not have access to the company's internal HR or payroll systems. What network type should the company set up for the suppliers?",
    "options": [
      "An intranet — because it provides controlled internal access.",
      "An extranet — because it provides secure, limited access to external organizations.",
      "A public cloud — because suppliers are outside the company.",
      "A LAN extension — because the suppliers are business partners."
    ],
    "correctOption": 1,
    "explanation": "An extranet provides secure access to an organization's network for individuals who work for a different organization and need limited access to specific data. It's the middle layer between a fully public internet presence and a fully private intranet — exactly what the manufacturer needs for supplier access. An intranet would give too broad access; a public cloud would remove control over sensitive data."
  },
  {
    "quizTitle": "Networking Today",
    "category": "Internet Access Technologies",
    "question": "A family living 80 km outside the nearest town wants to subscribe to high-speed Internet. There are no cable lines, no telephone DSL infrastructure, and no cellular signal in their area. Which Internet connection technology would be their most viable option?",
    "options": [
      "Cable broadband — because it offers always-on high bandwidth.",
      "DSL — because it runs over existing telephone lines.",
      "Cellular/mobile Internet — because it uses cell towers.",
      "Satellite Internet — because it benefits rural areas without other ISP options."
    ],
    "correctOption": 3,
    "explanation": "Satellite Internet is specifically noted as having a major benefit for rural areas without Internet Service Providers. It doesn't rely on physical cable, telephone, or cellular tower infrastructure — it communicates directly with satellites. Cable and DSL require physical infrastructure (coaxial cable and telephone lines respectively), and cellular requires cell tower coverage, none of which exists in this scenario."
  },
  {
    "quizTitle": "Networking Today",
    "category": "Internet Access Technologies",
    "question": "A college student wants an Internet connection that is always on, high bandwidth, and delivered through her existing television service provider's infrastructure. Which connection type fits this description?",
    "options": [
      "DSL — because it uses telephone lines for high-bandwidth access.",
      "Cable broadband — because it is high bandwidth, always on, and offered by cable TV providers.",
      "Dial-up telephone — because it is the least expensive option.",
      "Satellite — because it is always available regardless of location."
    ],
    "correctOption": 1,
    "explanation": "Cable Internet is a high-bandwidth, always-on Internet connection offered by cable television service providers — it uses the same coaxial cable infrastructure as TV service. DSL also offers high bandwidth and is always-on but runs over telephone lines, not cable TV infrastructure. Dial-up uses a modem and is low bandwidth. Satellite is not delivered through a cable TV provider."
  },
  {
    "quizTitle": "Networking Today",
    "category": "Internet Access Technologies",
    "question": "A corporate head office needs to connect two branch buildings in the same city with dedicated, reserved circuits that carry both voice and data on a private network. The connection should not be shared with other customers. Which business-class connection type should they use?",
    "options": [
      "Residential DSL — because it provides sufficient bandwidth for most tasks.",
      "Dedicated Leased Lines — because they reserve private circuits for specific organizations.",
      "Cable broadband — because it is high bandwidth and always on.",
      "Wireless broadband (WISP) — because it avoids physical cabling."
    ],
    "correctOption": 1,
    "explanation": "Dedicated Leased Lines are reserved circuits within a service provider's network that connect distant offices with private voice and/or data networking. The key distinction is that they are not shared — the circuit is dedicated to one customer. Residential DSL is not business-class and is shared infrastructure. Cable is also shared. WISP is for rural/home access, not private corporate interconnections."
  },
  {
    "quizTitle": "Networking Today",
    "category": "Internet Access Technologies",
    "question": "A field technician needs Internet access while working at a remote construction site where there is no fixed-line infrastructure, but cellular coverage exists. Which connection type would allow her to get online using her smartphone as a hotspot or a dedicated data device?",
    "options": [
      "Ethernet WAN — because it extends LAN access into wide areas.",
      "DSL — because it runs over telephone infrastructure.",
      "Cellular Internet — because it uses cell phone network towers for connectivity.",
      "Metro Ethernet — because it covers large metropolitan coverage areas."
    ],
    "correctOption": 2,
    "explanation": "Cellular Internet uses a cell phone network to connect to the Internet and is only available where you can get a cellular signal. It's ideal for mobile workers who need connectivity without fixed-line infrastructure. DSL requires telephone line infrastructure, Ethernet WAN and Metro Ethernet require physical connectivity to a service provider's network — none of which exist at a remote construction site."
  },
  {
    "quizTitle": "Networking Today",
    "category": "Converged Networks",
    "question": "An architect firm used to have three separate cable systems running through their building: one for computers, one for desk phones, and one for video conferencing monitors — each with different equipment and standards. They are upgrading to a single unified system that carries all three types of traffic over one infrastructure. What networking concept describes this upgrade?",
    "options": [
      "Network segmentation — because they are separating traffic types.",
      "Network convergence — because multiple services are delivered over one shared infrastructure.",
      "Peer-to-peer networking — because devices share resources directly.",
      "Virtualization — because physical servers are being replaced by virtual ones."
    ],
    "correctOption": 1,
    "explanation": "A converged network carries multiple services (data, voice, and video) over a single network infrastructure using a common set of rules and standards. The architect firm is replacing three separate, incompatible systems with one unified system — this is exactly what convergence means. Unlike dedicated networks (which used separate infrastructure for each service type), converged networks deliver all services over the same physical medium."
  },
  {
    "quizTitle": "Networking Today",
    "category": "Converged Networks",
    "question": "What is the key advantage of a converged network over traditional separate dedicated networks?",
    "options": [
      "Converged networks are always faster than dedicated networks.",
      "Converged networks eliminate the need for routers and switches.",
      "Converged networks deliver data, voice, and video between different device types over the same infrastructure using shared rules and standards.",
      "Converged networks only work for large enterprise organizations, not small businesses."
    ],
    "correctOption": 2,
    "explanation": "The key advantage of a converged network is that it can deliver multiple types of traffic — data, voice, and video — across different types of devices using the same network infrastructure and a unified set of rules and standards. This eliminates the cost and complexity of maintaining separate cabling, equipment, and standards for each type of communication. Both small and large organizations benefit from convergence."
  },
  {
    "quizTitle": "Networking Today",
    "category": "Reliable Network Architecture",
    "question": "A video streaming platform's primary data center router fails during peak evening hours. However, customers continue watching content without interruption because traffic is automatically rerouted through a backup path. Which network architecture characteristic made this possible?",
    "options": [
      "Scalability — because the network expanded to handle more traffic.",
      "Quality of Service — because video traffic was prioritized over other data.",
      "Fault tolerance — because the network limited the impact of the failure using redundant paths.",
      "Security — because unauthorized access to the router was prevented."
    ],
    "correctOption": 2,
    "explanation": "Fault tolerance is the network's ability to limit the impact of a failure by limiting the number of affected devices. It requires multiple paths and is achieved through packet-switched networks, where each packet can theoretically take a different path to the destination. When one path fails, traffic automatically reroutes. Scalability is about growth, QoS is about traffic priority, and security is about protecting data from threats."
  },
  {
    "quizTitle": "Networking Today",
    "category": "Reliable Network Architecture",
    "question": "An early telephone network used circuit-switching — meaning when you called someone, a dedicated physical circuit was reserved for your entire conversation. If one link in that circuit failed, the call dropped completely. How does a modern packet-switched network improve on this?",
    "options": [
      "Packet switching reserves a dedicated circuit per user, guaranteeing quality.",
      "Packet switching splits data into packets that can each take different routes, allowing automatic rerouting around failures.",
      "Packet switching eliminates the need for routers by using direct device-to-device connections.",
      "Packet switching only works for voice traffic, not data or video."
    ],
    "correctOption": 1,
    "explanation": "Packet switching splits traffic into individual packets that are routed over a network. Each packet can theoretically take a different path to the destination. This means if one path fails, packets simply take an alternate route — enabling fault tolerance. Circuit-switched networks establish dedicated circuits; if that circuit fails, communication is lost entirely. Packet switching is the foundation of the Internet's resilience."
  },
  {
    "quizTitle": "Networking Today",
    "category": "Reliable Network Architecture",
    "question": "A tech startup launches with 10 employees and a small network. Two years later they have 200 employees across three floors, with plans to grow to 1,000. Their network was designed following accepted industry standards and protocols so that new users and devices can be added without degrading performance for existing users. Which network characteristic enabled this?",
    "options": [
      "Fault tolerance — because the network handles hardware failures.",
      "Scalability — because the network can expand to support new users without impacting existing ones.",
      "Quality of Service — because traffic priority is assigned to critical applications.",
      "Convergence — because data, voice, and video share one infrastructure."
    ],
    "correctOption": 1,
    "explanation": "Scalability is the ability of a network to expand quickly and easily to support new users and applications without impacting the performance of services delivered to existing users. It is achieved by following accepted standards and protocols. This is different from fault tolerance (resilience to failures), QoS (traffic prioritization), and convergence (unifying traffic types)."
  },
  {
    "quizTitle": "Networking Today",
    "category": "Reliable Network Architecture",
    "question": "During a live company-wide all-hands video call, employees also continue to browse internal wikis and send emails. The video call starts lagging and breaking up. The IT team has not configured any traffic management policies on their routers. Which network characteristic was missing that caused this problem?",
    "options": [
      "Fault tolerance — the network did not have redundant paths.",
      "Scalability — the network could not support the number of users.",
      "Quality of Service (QoS) — traffic was not prioritized to ensure reliable video delivery.",
      "Security — unauthorized users were consuming bandwidth."
    ],
    "correctOption": 2,
    "explanation": "Quality of Service (QoS) is the primary mechanism used to ensure reliable delivery of content for all users by managing traffic priority. Voice and live video require higher priority because they are sensitive to delays. Without QoS, a router treats all traffic equally — web browsing and email compete equally with the video stream for bandwidth, causing video lag. QoS would prioritize the real-time video stream over less time-sensitive traffic like email."
  },
  {
    "quizTitle": "Networking Today",
    "category": "Reliable Network Architecture",
    "question": "A cybersecurity policy states that customer database records must be protected so that: (1) only authorized analysts can view them, (2) the records cannot be modified during transmission, and (3) the database must always be available to authorized users during business hours. Which three security goals are described in that order?",
    "options": [
      "Integrity, Availability, Confidentiality",
      "Confidentiality, Integrity, Availability",
      "Availability, Confidentiality, Integrity",
      "Scalability, Fault Tolerance, Quality of Service"
    ],
    "correctOption": 1,
    "explanation": "The three goals of network security are: Confidentiality (only intended recipients can read the data — goal 1 here), Integrity (assurance that data has not been altered during transmission — goal 2), and Availability (assurance of timely and reliable access for authorized users — goal 3). These three form the CIA triad, a foundational model in information security. The last option lists network architecture characteristics, not security goals."
  },
  {
    "quizTitle": "Networking Today",
    "category": "Network Security",
    "question": "A company discovers that its competitor obtained confidential product designs. Investigation reveals that a disgruntled employee photographed files from his own authorized computer and emailed them externally before resigning. What category of security threat does this represent?",
    "options": [
      "External threat — because the data ended up outside the company.",
      "Zero-day attack — because the vulnerability was previously unknown.",
      "Internal threat — because an authorized network user caused the breach.",
      "Denial of Service attack — because services were disrupted."
    ],
    "correctOption": 2,
    "explanation": "Internal threats come from within the organization — whether intentional or accidental, studies show that internal users cause the most security breaches. This employee was an authorized user who intentionally misused his access. External threats (viruses, hackers, denial-of-service) originate from outside the network. A zero-day attack exploits an unknown vulnerability. A DoS attack disrupts service availability, not data theft."
  },
  {
    "quizTitle": "Networking Today",
    "category": "Network Security",
    "question": "A university student opens an email attachment that appears to be a course schedule PDF. Instead, it secretly installs software that records all her keystrokes and sends them to a remote server — including her banking passwords. Which type of external security threat does this describe?",
    "options": [
      "Denial of Service attack — because it overwhelms network resources.",
      "Spyware — because it secretly collects and transmits personal information.",
      "Zero-day attack — because no patch has been issued for this vulnerability.",
      "Identify theft only occurs at the hardware level."
    ],
    "correctOption": 1,
    "explanation": "Spyware (and adware) is a category of external threat that secretly monitors user activity and collects sensitive information such as passwords, banking details, and personal data, then transmits it to unauthorized parties. A DoS attack floods a network with traffic to disrupt services. A zero-day attack exploits an unpatched vulnerability — while this could enable spyware, the question is asking what type of threat the behavior represents."
  },
  {
    "quizTitle": "Networking Today",
    "category": "Network Security",
    "question": "A small accounting firm with 8 employees wants to protect their network. Which combination of security measures is most appropriate for a small office network?",
    "options": [
      "Intrusion prevention systems (IPS) and virtual private networks (VPN) only.",
      "Antivirus/antispyware software on end devices and firewall filtering to block unauthorized access.",
      "Access control lists (ACL) and dedicated firewall appliances with deep packet inspection.",
      "Physical security guards and biometric door locks."
    ],
    "correctOption": 1,
    "explanation": "For home or small office networks, the appropriate security components are antivirus and antispyware software installed on end devices, and firewall filtering to block unauthorized access to the network. More advanced solutions like dedicated firewall systems, ACLs, IPS, and VPNs are recommended for larger networks with greater security requirements. Physical security is important but not a network security component."
  },
  {
    "quizTitle": "Networking Today",
    "category": "Network Security",
    "question": "A large financial institution needs to protect remote workers accessing the corporate network from home, detect fast-spreading zero-day attacks, and filter which traffic can enter each network segment. Which set of security tools should their IT team deploy?",
    "options": [
      "Antivirus software only — because it handles all threat types.",
      "VPN for remote access, IPS for zero-day threats, and ACLs for traffic filtering.",
      "Firewall and antispyware — which are sufficient for all enterprise needs.",
      "Powerline networking and WISP for secure physical connections."
    ],
    "correctOption": 1,
    "explanation": "Larger networks require more advanced security: Virtual Private Networks (VPNs) provide secure remote access for workers, Intrusion Prevention Systems (IPS) identify fast-spreading threats like zero-day attacks, and Access Control Lists (ACLs) filter access and traffic forwarding between network segments. Antivirus alone is insufficient for enterprise needs. Powerline networking and WISP are connectivity technologies, not security tools."
  },
  {
    "quizTitle": "Networking Today",
    "category": "Network Trends",
    "question": "A hospital allows nurses to use their personal iPhones and tablets to access patient scheduling apps and look up drug interaction databases while on shift. The IT department must now manage security policies for dozens of different personal device types and operating systems. Which networking trend is this hospital experiencing?",
    "options": [
      "Cloud computing — because data is accessed over the Internet.",
      "Bring Your Own Device (BYOD) — because employees use personal devices on the corporate network.",
      "Online collaboration — because staff communicate using shared apps.",
      "Powerline networking — because devices connect through existing building infrastructure."
    ],
    "correctOption": 1,
    "explanation": "Bring Your Own Device (BYOD) is a major global trend that allows users to use their own devices — laptops, tablets, smartphones, etc. — giving them more flexibility and access opportunities. The challenge is that the IT department must manage diverse, uncontrolled device types on the network, which increases security complexity. BYOD policies also make corporate data more vulnerable to internal threats."
  },
  {
    "quizTitle": "Networking Today",
    "category": "Network Trends",
    "question": "A multinational engineering firm has teams in Germany, South Korea, and Brazil. Instead of flying engineers between countries for design reviews, they use video conferencing platforms and shared digital whiteboards to work on 3D models together in real time. Which networking trend does this describe?",
    "options": [
      "Cloud computing — because they store files on remote servers.",
      "BYOD — because engineers use different types of devices.",
      "Online collaboration — because teams work together over the network on joint projects.",
      "Smart home technology — because the network connects multiple types of devices."
    ],
    "correctOption": 2,
    "explanation": "Online collaboration enables individuals to work with others over the network on joint projects, using tools like video conferencing, shared applications, and digital workspaces. It is a high priority for both businesses and education. In this scenario, the engineering firm reduces costly international travel by collaborating remotely in real time — exactly what online collaboration tools are designed to support."
  },
  {
    "quizTitle": "Networking Today",
    "category": "Network Trends",
    "question": "A small marketing agency of 5 people uses an online word processor, a web-based project tracker, and a remote design tool — all hosted by third-party providers. The agency pays monthly per user and doesn't own any of the servers running these applications. Which computing model does this agency use?",
    "options": [
      "Dedicated client-server networking — because a server hosts all their applications.",
      "Peer-to-peer networking — because employees share files directly.",
      "Cloud computing — because applications and storage are delivered over the Internet from remote servers.",
      "Intranet hosting — because applications are private to the organization."
    ],
    "correctOption": 2,
    "explanation": "Cloud computing allows users and businesses to access applications, storage, and services hosted on remote servers over the Internet, often on a pay-per-use model. The agency doesn't own physical servers — they lease capabilities from larger cloud providers. This is cloud computing. Peer-to-peer is direct device sharing, a dedicated client-server means the agency owns the server, and an intranet is a private internal network."
  },
  {
    "quizTitle": "Networking Today",
    "category": "Network Trends",
    "question": "A city government runs a cloud environment accessible only to city employees for managing permits, payroll, and zoning records. Citizens and contractors cannot access it. A neighboring county's transit authority also has a similar isolated cloud. What type of cloud deployment is each of these?",
    "options": [
      "Public cloud — because government services are funded by the public.",
      "Hybrid cloud — because they combine multiple cloud types.",
      "Private cloud — because the applications and services are intended for a specific organization only.",
      "Custom cloud — because the cloud was built specifically for their needs."
    ],
    "correctOption": 2,
    "explanation": "A private cloud hosts applications and services intended for a specific organization or entity such as a government department. Access is restricted to that organization's members. A public cloud is accessible to the general public (usually pay-per-use or free). A hybrid cloud combines two or more cloud types. A custom cloud is tailored for specific industry needs (like healthcare or media) but may still involve public access elements."
  },
  {
    "quizTitle": "Networking Today",
    "category": "Network Trends",
    "question": "A retail chain runs most of its inventory management on a private cloud but uses a public cloud provider for their customer-facing e-commerce website during holiday sales surges. Both systems share a common architecture and are linked together. What type of cloud deployment is this?",
    "options": [
      "Public cloud — because the e-commerce site is accessible to anyone.",
      "Private cloud — because inventory management is restricted.",
      "Hybrid cloud — because it combines private and public cloud types connected under the same architecture.",
      "Custom cloud — because it was built for the retail industry."
    ],
    "correctOption": 2,
    "explanation": "A hybrid cloud is made up of two or more cloud types — such as a private cloud combined with a public cloud. Each part remains a distinctive object, but both are connected using the same architecture. This allows the retailer to keep sensitive inventory data private while bursting to public cloud resources for high-traffic events. A custom cloud is industry-tailored, not necessarily a combination of deployment types."
  },
  {
    "quizTitle": "Networking Today",
    "category": "Network Trends",
    "question": "A homeowner installs a system where her thermostat, refrigerator, door locks, and lighting all connect to her home network. The refrigerator can notify her phone when milk is low, and the thermostat adjusts automatically based on her work calendar. Which networking trend describes this integration?",
    "options": [
      "BYOD — because she brings her phone into the home network.",
      "Cloud computing — because data is processed on remote servers.",
      "Smart home technology — because everyday appliances are networked to interconnect and share data.",
      "Powerline networking — because appliances connect through electrical wiring."
    ],
    "correctOption": 2,
    "explanation": "Smart home technology is a growing trend that integrates network capabilities into everyday appliances, allowing them to interconnect with other devices and services. A thermostat communicating with a calendar, or a refrigerator sending alerts — these are examples of smart home / Internet of Things (IoT) integration. While powerline networking might carry the data inside the home, the trend itself is called smart home technology."
  },
  {
    "quizTitle": "Networking Today",
    "category": "Network Trends",
    "question": "A homeowner wants to add a smart TV in a basement room where running Ethernet cables is impractical and the wireless signal is weak. A friend suggests a solution that transmits network data through the existing electrical wiring in the walls using a special adapter plugged into a power outlet. What technology is this?",
    "options": [
      "Wireless broadband — because it extends wireless signal range.",
      "DSL — because it uses existing wiring infrastructure.",
      "Powerline networking — because it sends data over electrical wiring using powerline adapters.",
      "WISP — because it connects to an external wireless Internet provider."
    ],
    "correctOption": 2,
    "explanation": "Powerline networking allows devices to connect to a LAN where data network cables or wireless communications are not a viable option. Using a standard powerline adapter, devices connect to the LAN wherever there is an electrical outlet by sending data on certain frequencies through the building's existing electrical wiring. DSL also uses existing wiring (telephone lines), not electrical wiring. Wireless broadband and WISP provide Internet access, not local network extension through power outlets."
  },
  {
    "quizTitle": "Networking Today",
    "category": "Network Trends",
    "question": "A rural farming community has no DSL, no cable TV provider, and spotty cellular coverage. A local ISP installs a tall antenna tower and sells Internet access to residents who install receiving dishes on their rooftops. This connects them to designated access points. What type of Internet service is this?",
    "options": [
      "Satellite Internet — because a satellite in space is used.",
      "Cable broadband — because a cable provider delivers the signal.",
      "Wireless Internet Service Provider (WISP) — because it wirelessly connects subscribers to access points or hotspots.",
      "Metro Ethernet — because it extends Ethernet over a wide area."
    ],
    "correctOption": 2,
    "explanation": "A Wireless Internet Service Provider (WISP) is an ISP that wirelessly connects subscribers to designated access points or hotspots — more commonly found in rural environments. The community ISP tower is acting as a WISP access point, and the rooftop dishes connect residents to it wirelessly. This is distinct from satellite (which uses orbiting satellites) and cable (which uses coaxial cable infrastructure)."
  },
  {
    "quizTitle": "Networking Today",
    "category": "Network Architecture",
    "question": "A network consultant tells a client: 'The foundation of your entire network — including how your traffic gets to the Internet — depends on two key types of devices.' Which devices is the consultant referring to?",
    "options": [
      "Modems and wireless access points.",
      "Firewalls and intrusion prevention systems.",
      "Routers and switches.",
      "Servers and storage arrays."
    ],
    "correctOption": 2,
    "explanation": "Routers and switches are the foundation of all network architectures, including the Internet. Routers direct traffic between networks (and to the Internet), while switches connect devices within a LAN. All other devices — firewalls, wireless access points, servers, etc. — depend on this router/switch infrastructure to function within the network. This is why CCNA certification focuses specifically on routing and switching."
  },
  {
    "quizTitle": "Networking Today",
    "category": "Network Components",
    "question": "A network engineer uses a diagram that shows which physical port a cable plugs into (Fa0/1), how the device's network interface card connects to the switch, and what IP addresses are assigned to each interface. Which terms from network component vocabulary are relevant here?",
    "options": [
      "Media, services, and devices only.",
      "Network Interface Card (NIC), physical port, and interface.",
      "End devices, intermediary devices, and network media.",
      "Intranet, extranet, and Internet."
    ],
    "correctOption": 1,
    "explanation": "When reading network topology diagrams, three key terms are essential: the Network Interface Card (NIC) is the hardware that allows a device to connect to the network, the physical port is the connector on a device where a cable plugs in, and the interface is the logical connection associated with a port (often assigned an IP address in logical topology diagrams). These terms describe how devices physically and logically connect."
  },
  {
    "quizTitle": "Networking Today",
    "category": "Network Architecture",
    "question": "An online university adds 5,000 new students each semester. Their network team follows established TCP/IP standards when designing new network expansions. New students get accounts and network access without any noticeable performance drop for existing users. Which of the four network architecture characteristics is being demonstrated?",
    "options": [
      "Fault tolerance — because the network survives hardware failures.",
      "Security — because only enrolled students get access.",
      "Scalability — because the network expands to support more users without degrading existing performance.",
      "Quality of Service — because video lectures are prioritized."
    ],
    "correctOption": 2,
    "explanation": "Scalability is the ability of a network to expand quickly and easily to support new users and applications without impacting the performance of services to existing users. Network designers achieve scalability by following accepted standards and protocols. The key indicator here is that performance is maintained while capacity grows — that is the definition of a scalable network design."
  },
  {
    "quizTitle": "Networking Today",
    "category": "Network Security",
    "question": "A government agency discovers that a nation-state hacker has identified a vulnerability in their router firmware that has never been seen before. No security patch exists yet. The attacker exploits it the same day it is discovered. What type of attack is this?",
    "options": [
      "Denial of Service (DoS) attack — because it uses overwhelming traffic.",
      "Trojan horse attack — because it disguises itself as a legitimate program.",
      "Zero-day attack — because it exploits a previously unknown vulnerability on the day it is discovered.",
      "Spyware attack — because it monitors user activity."
    ],
    "correctOption": 2,
    "explanation": "A zero-day attack (also called a zero-hour attack) exploits a previously unknown vulnerability — meaning no patch or fix has been developed yet. The term 'zero-day' refers to the fact that developers have had zero days to fix the issue. This makes it particularly dangerous because traditional signature-based antivirus cannot detect it. Intrusion Prevention Systems (IPS) are specifically noted as useful for identifying fast-spreading zero-day threats."
  },
  {
    "quizTitle": "Networking Today",
    "category": "Network Types & Sizes",
    "question": "A network administrator receives a job posting that says: 'Manage a network with 500+ interconnected computers across 8 floors of our headquarters building, plus connections to two satellite offices in the same city.' Which category of network size best describes this environment?",
    "options": [
      "Small home network — because all locations are in the same city.",
      "SOHO network — because remote offices connect to a central corporate network.",
      "Medium to large network — because it includes many locations with hundreds of interconnected computers.",
      "World Wide Network — because it spans multiple physical locations."
    ],
    "correctOption": 2,
    "explanation": "Medium to Large Networks encompass many locations with hundreds or thousands of interconnected computers. The 500+ devices across 8 floors plus satellite offices fits this category. A home network connects a few computers in a residence. SOHO connects a single remote office to a corporate network. A World Wide Network (like the Internet) connects hundreds of millions of computers globally."
  },
  {
    "quizTitle": "Networking Today",
    "category": "Internet, Intranets & Extranets",
    "question": "The Internet is described as not being owned by any individual or group. However, certain organizations help maintain its structure. Which of the following correctly identifies organizations that help maintain Internet structure?",
    "options": [
      "IETF, ICANN, and IAB.",
      "Cisco, Microsoft, and Google.",
      "ISO, IEEE, and ITU.",
      "FBI, FCC, and ITU."
    ],
    "correctOption": 0,
    "explanation": "The organizations that help maintain the structure of the Internet include the IETF (Internet Engineering Task Force), ICANN (Internet Corporation for Assigned Names and Numbers), and the IAB (Internet Architecture Board). These groups establish standards and manage resources like IP addresses and domain names. While companies like Cisco build equipment and standards bodies like IEEE develop protocols, they are not the primary Internet governance organizations mentioned in this context."
  },
  {
    "quizTitle": "Networking Today",
    "category": "Network Security",
    "question": "A company's security audit reveals that a network administrator successfully logged into a critical server but did not realize the authentication data she transmitted was captured by an attacker on the same network who then replayed it to gain unauthorized access later. Which type of threat does this describe?",
    "options": [
      "Denial of Service — because service was disrupted.",
      "Data interception and theft — because credentials were captured in transit.",
      "Internal threat — because the administrator caused the vulnerability.",
      "Virus — because malicious code was installed."
    ],
    "correctOption": 1,
    "explanation": "Data interception and theft is an external threat where an attacker captures data (such as credentials or sensitive information) as it travels across the network. This is distinct from internal threats (malicious insiders), DoS attacks (overwhelming a service with traffic), or viruses (self-replicating malicious code). This scenario describes a network eavesdropping or credential-capture attack, which falls under the data interception and theft category."
  },
  {
    "quizTitle": "Networking Today",
    "category": "Reliable Network Architecture",
    "question": "Two hospital buildings must maintain constant communication for patient record sharing. The network architect designs the connection so that if the primary fiber link is cut, a secondary wireless link automatically takes over — with packets rerouting within milliseconds. Which characteristic of reliable networks specifically required 'multiple paths'?",
    "options": [
      "Scalability — so the network can support future growth.",
      "Quality of Service — so medical data is prioritized.",
      "Fault tolerance — which specifically requires multiple paths to limit the impact of a failure.",
      "Security — to ensure patient data is protected."
    ],
    "correctOption": 2,
    "explanation": "Fault tolerance specifically requires multiple paths. A fault-tolerant network limits the impact of a failure by limiting the number of affected devices, and this requires redundant paths so traffic can be rerouted automatically. The key phrase 'multiple paths are required for fault tolerance' makes this distinct from scalability (growth), QoS (traffic priority), and security (data protection)."
  },
  {
    "quizTitle": "Networking Today",
    "category": "Network Trends",
    "question": "A global consulting firm wants to reduce its annual travel budget by 40%. The IT director proposes implementing video conferencing platforms that allow face-to-face meetings with clients across continents, reducing the need for flights while maintaining productive relationships. How does this align with networking trends discussed in CCNA fundamentals?",
    "options": [
      "This is cloud computing — because the video is processed on remote servers.",
      "This is BYOD — because employees use personal devices for calls.",
      "This is online collaboration and video communications — reducing costly travel while maintaining connectivity.",
      "This is smart home technology — because employees work from home."
    ],
    "correctOption": 2,
    "explanation": "Both online collaboration and video communications are identified networking trends. Online collaboration gives users ways to instantly connect, interact, and achieve objectives. Video communications enable face-to-face productivity from any location. Data networks evolving to support work is explicitly noted, with the benefit that online learning and communication opportunities decrease costly and time-consuming travel — exactly the scenario described here."
  },
  {
    "quizTitle": "Networking Today",
    "category": "Network Components",
    "question": "During a network troubleshooting session, a technician says: 'The packet originated from the sales laptop, traveled through three routers and two switches, and arrived at the database server.' Which terms correctly classify each device in this path?",
    "options": [
      "The laptop and server are end devices; the routers and switches are intermediary devices.",
      "The laptop and server are intermediary devices; the routers and switches are end devices.",
      "All devices are end devices because data starts and ends at each one.",
      "Routers are end devices; switches and the laptop are intermediary devices."
    ],
    "correctOption": 0,
    "explanation": "End devices are where data originates (the sales laptop) or where it is received (the database server) — data flows from end device to end device. Intermediary devices (routers and switches) connect end devices and manage data flow through the network. Routers and switches regenerate signals, maintain pathway information, and manage traffic — they do not originate or consume the data itself."
  },
  {
    "quizTitle": "Networking Today",
    "category": "Network Types & Sizes",
    "question": "A network consists of a LAN in an office in Montreal connected via a service provider's network to a LAN in an office in Mexico City. The service provider manages the links between the two cities. Which correctly describes the relationship between the LAN and WAN in this scenario?",
    "options": [
      "The WAN is a subset of each LAN, providing local connectivity.",
      "The two LANs are connected to each other using the WAN, which spans the geographic distance between cities.",
      "The WAN replaces the LANs, so neither Montreal nor Mexico City needs local networking.",
      "LANs and WANs are the same technology applied at different scales."
    ],
    "correctOption": 1,
    "explanation": "LANs and WANs work together: LANs handle local connectivity within a small geographic area (like a single office), and WANs connect multiple LANs across large geographic areas such as between cities or countries. The Internet itself is a worldwide collection of interconnected LANs and WANs. WANs don't replace LANs — they link them together through telecommunications service providers."
  },
  {
    "quizTitle": "Networking Today",
    "category": "Network Security",
    "question": "A company's BYOD policy allows employees to use personal smartphones for work email and file access. The CISO expresses concern that this trend specifically increases which type of security risk?",
    "options": [
      "External threats from Internet-based hackers.",
      "Denial-of-service attacks on the corporate website.",
      "Internal threats and corporate data vulnerability because personal devices are harder to control.",
      "Zero-day attacks because personal devices lack enterprise firmware."
    ],
    "correctOption": 2,
    "explanation": "BYOD strategies specifically increase internal threat risk and make corporate data more vulnerable. Personal devices may have weaker security configurations, run unvetted apps, or connect to untrusted networks — all of which can expose corporate data. While BYOD does indirectly affect external threat exposure, the primary concern explicitly noted is that corporate data is more vulnerable when carried on personal devices that the IT department cannot fully control."
  },
  {
    "quizTitle": "Networking Today",
    "category": "Converged Networks",
    "question": "A school built 30 years ago had to run three separate cable systems through its walls: one for computers, one for phones, and one for classroom video systems. What was the fundamental problem with this traditional approach that converged networking solved?",
    "options": [
      "Traditional networks were too fast for voice and video traffic.",
      "Each type of network used different technologies, equipment, rules, and standards — making them expensive and complex to maintain separately.",
      "Traditional networks required wireless transmission for each service type.",
      "Schools could not use peer-to-peer networking for educational content."
    ],
    "correctOption": 1,
    "explanation": "Traditional separate networks each used different technologies, different equipment, and a different set of rules and standards to carry their respective communication signals. This meant separate cabling plants, separate technicians, separate equipment budgets, and separate management for each service. Converged networks solve this by using one infrastructure, one set of standards, and one management framework to deliver all three service types — dramatically reducing cost and complexity."
  },
  {
    "quizTitle": "Networking Today",
    "category": "Network Architecture",
    "question": "A CCNA candidate studies the concept that 'network architecture refers to the technologies that support the infrastructure that moves data across the network.' A classmate argues this just means 'the physical cables and boxes.' Who is correct and why?",
    "options": [
      "The classmate — network architecture only refers to physical hardware.",
      "The candidate — network architecture encompasses the technologies (including devices, connections, and products) supporting the infrastructure, not just physical components.",
      "Neither — network architecture is only about software protocols.",
      "Both — network architecture and physical hardware are interchangeable terms."
    ],
    "correctOption": 1,
    "explanation": "Network architecture refers to the devices, connections, and products that are integrated to support the necessary technologies and applications — it is broader than just physical hardware. It includes how devices are interconnected, what standards they follow, and how services are delivered. Physical cables and boxes are part of network architecture, but so are protocols, design principles, and the logical structure of how data moves. The four characteristics of reliable network architecture (fault tolerance, scalability, QoS, security) are all components of this broader definition."
  },
  {
    "quizTitle": "Networking Today",
    "category": "Clients and Servers",
    "question": "A student runs a Minecraft server on her gaming PC at home. Her two roommates connect their laptops to her PC to play on the server. Later that evening, she closes the Minecraft server software and uses her own laptop to browse YouTube. Which statement BEST describes her gaming PC's role in this network?",
    "options": [
      "Her PC is always a server because it is the most powerful machine.",
      "Her PC is always a client because it is a personal computer.",
      "Her PC acts as a server when running Minecraft and as a client when browsing YouTube — this is a peer-to-peer arrangement.",
      "Her PC is an intermediary device because it routes traffic between roommates."
    ],
    "correctOption": 2,
    "explanation": "This is a peer-to-peer scenario where a single device can act as both client and server depending on the software running. When hosting the Minecraft server, her PC is the server (providing the game world to clients). When browsing YouTube, her PC is the client (requesting content from YouTube's servers). Peer-to-peer networks are common in homes and small offices, where it is typical for a client to also function as the server. Her PC is not an intermediary device — it is an end device."
  },
  {
    "quizTitle": "Networking Today",
    "category": "Network Trends",
    "question": "A logistics company stores its shipping manifests on a public cloud provider. A compliance officer raises a concern: all data is co-located with other companies' data on shared servers, and any subscriber can potentially use the same storage infrastructure. Which cloud type does this describe?",
    "options": [
      "Private cloud — because the company controls access to its data.",
      "Hybrid cloud — because it combines internal and external storage.",
      "Custom cloud — because it is tailored for the logistics industry.",
      "Public cloud — because services are made available through a shared, pay-per-use model accessible to the general public."
    ],
    "correctOption": 3,
    "explanation": "A public cloud makes services and applications available to the general public through a pay-per-use model or for free. The infrastructure is shared among many customers (multi-tenancy), which is why the compliance officer is concerned. A private cloud restricts access to a specific organization. A hybrid cloud combines cloud types. A custom cloud is built for specific industry needs. The defining characteristic of a public cloud is shared infrastructure accessible to any subscriber."
  },
  {
    "quizTitle": "Networking Today",
    "category": "Network Security",
    "question": "A company's database server holds records of 50,000 customers. An attacker floods the server with millions of fake requests per second, consuming all processing resources. Legitimate customers cannot access their accounts. Which CIA security property is being violated?",
    "options": [
      "Confidentiality — because customer data may be exposed.",
      "Integrity — because data is being modified by the attack.",
      "Availability — because authorized users cannot access the system reliably.",
      "Scalability — because the server cannot handle increased load."
    ],
    "correctOption": 2,
    "explanation": "Availability is the assurance of timely and reliable access to data for authorized users. A Denial of Service (DoS) attack specifically targets availability by overwhelming a system so that legitimate users cannot access it. Confidentiality (data visible only to intended recipients) and Integrity (data not altered in transit) are not directly violated by a DoS attack — the data is still protected and unmodified, it just cannot be reached. Scalability is a network design characteristic, not a security goal."
  },
  {
    "quizTitle": "Networking Today",
    "category": "Network Components",
    "question": "A network administrator is deciding between installing copper Ethernet cables or fiber optic cables for a new building. The building has industrial equipment nearby that generates significant electromagnetic interference. Which media choice is more appropriate and why?",
    "options": [
      "Copper — because it is immune to electromagnetic interference.",
      "Fiber optic — because it carries data as light and is immune to electromagnetic interference.",
      "Wireless — because it avoids all physical cabling issues.",
      "Copper — because it carries more data than fiber optic at shorter distances."
    ],
    "correctOption": 1,
    "explanation": "Fiber optic cables carry data as pulses of light through glass fibers, making them immune to electromagnetic interference (EMI) from industrial equipment, motors, or electrical machinery. Copper/metallic cables carry electrical signals and are susceptible to EMI, which can corrupt data. Wireless transmission (radio waves) can also be affected by interference. For environments with high EMI, fiber optic is the superior choice."
  },
  {
    "quizTitle": "Networking Today",
    "category": "Network Trends",
    "question": "A small medical clinic cannot afford to build and maintain its own data center for storing patient records and running medical imaging software. Instead, they pay a monthly fee to a larger healthcare IT company that owns the servers and storage. This larger company manages dozens of other clinics' data in the same facility. Which aspect of cloud computing does this represent?",
    "options": [
      "Public cloud — because any clinic can subscribe for a fee.",
      "The concept that cloud computing is made possible by data centers, where smaller organizations lease server and storage services from larger data center providers.",
      "Hybrid cloud — because the clinic still keeps some records on-site.",
      "BYOD — because clinic staff use personal devices to access the records."
    ],
    "correctOption": 1,
    "explanation": "Cloud computing is made possible by data centers. Smaller companies that cannot afford their own data centers lease server and storage services from larger data center organizations in the cloud. The medical clinic is doing exactly this — instead of building their own infrastructure, they rent capacity from a larger provider who manages the physical hardware. This is a core benefit of cloud computing for small and medium-sized organizations."
  },
  {
    "quizTitle": "Networking Today",
    "category": "Reliable Network Architecture",
    "question": "A network engineer is asked to explain QoS to a new IT intern. The intern asks: 'Why can't we just let all traffic compete equally for bandwidth?' Which scenario best illustrates why equal-bandwidth competition is problematic?",
    "options": [
      "An email takes 3 seconds longer to arrive because a file download is consuming bandwidth — this is acceptable because email is not time-sensitive.",
      "A surgeon's remote consultation video call freezes and breaks up because a file backup job is consuming all available bandwidth — this is unacceptable because video is time-sensitive.",
      "A web page loads 2 seconds slower than usual during peak hours — this is the core QoS problem.",
      "QoS only matters for gaming networks, not enterprise environments."
    ],
    "correctOption": 1,
    "explanation": "QoS is needed because not all network traffic has equal sensitivity to delay. Voice and live video transmissions require consistent, uninterrupted bandwidth — a surgeon's video consultation freezing mid-procedure is a serious problem. An email delayed by a few seconds is acceptable. QoS allows routers to prioritize time-sensitive traffic (like video) over delay-tolerant traffic (like file backups or email), preventing the scenario where low-priority traffic degrades critical communications."
  },
  {
    "quizTitle": "Networking Today",
    "category": "Network Types & Sizes",
    "question": "Which of the following scenarios describes a Storage Area Network (SAN)?",
    "options": [
      "A company connects its three office buildings in the same city using a service provider's fiber links.",
      "A hospital creates a dedicated high-speed network to connect servers to large centralized storage arrays for fast data access.",
      "A university gives students wireless network access across campus.",
      "An organization creates a private network accessible only to its employees."
    ],
    "correctOption": 1,
    "explanation": "A Storage Area Network (SAN) is a specialized network designed specifically to connect servers to large amounts of centralized storage at high speeds. SANs are used in enterprise environments like hospitals, data centers, and large corporations where fast, reliable access to bulk storage is critical. A multi-building city connection is a MAN or WAN. Campus wireless is a WLAN. An employee-only private network is an intranet."
  },
  {
    "quizTitle": "Networking Today",
    "category": "Internet, Intranets & Extranets",
    "question": "Using the concentric circle model of network access scope, arrange the following from MOST private (innermost) to MOST public (outermost): Internet, Extranet, Intranet.",
    "options": [
      "Internet → Extranet → Intranet (most to least public).",
      "Intranet → Extranet → Internet (most private to most public).",
      "Extranet → Intranet → Internet (partial access to full access).",
      "Internet → Intranet → Extranet (external to internal)."
    ],
    "correctOption": 1,
    "explanation": "The three-layer model goes from most private to most public: Intranet (innermost — company only, no external access), Extranet (middle layer — authorized external parties like suppliers and partners get limited access), Internet (outermost — accessible to the entire world). This model helps organizations understand how to appropriately scope access for different stakeholders while protecting sensitive internal resources."
  },
  {
    "quizTitle": "Networking Today",
    "category": "Network Security",
    "question": "An employee receives an email that appears to be from the company's IT help desk asking her to click a link and enter her login credentials to 'verify her account.' The link leads to a fake login page that captures her username and password. The attacker then uses those credentials to access payroll systems. Which type of threat is primarily illustrated here?",
    "options": [
      "Denial of Service — because the attacker disrupts system access.",
      "Identity theft — because the attacker uses stolen credentials to impersonate the employee and access systems.",
      "Spyware — because software is monitoring her computer.",
      "Zero-day attack — because the email exploits an unknown vulnerability."
    ],
    "correctOption": 1,
    "explanation": "Identity theft involves an attacker obtaining and using someone else's credentials or personal information to gain unauthorized access — exactly what happens here. The attacker captures the employee's credentials via a phishing page (a fake site) and then impersonates her to access payroll systems. This is distinct from spyware (which installs software to monitor activity), DoS (which disrupts service), and zero-day attacks (which exploit unknown software vulnerabilities)."
  },
  {
    "quizTitle": "Networking Today",
    "category": "Network Components",
    "question": "A network team is describing their infrastructure as consisting of three broad categories. Category 1 includes everything physical that carries signals between devices. Category 2 includes every device that generates or consumes data. Category 3 includes the routers, switches, and access points in between. Match Category 1, 2, and 3 to the correct network infrastructure terms.",
    "options": [
      "Category 1 = Devices, Category 2 = Services, Category 3 = Media.",
      "Category 1 = Media, Category 2 = End Devices, Category 3 = Intermediary Devices.",
      "Category 1 = Intermediary Devices, Category 2 = Media, Category 3 = End Devices.",
      "Category 1 = Services, Category 2 = Media, Category 3 = Devices."
    ],
    "correctOption": 1,
    "explanation": "Network infrastructure has three broad categories: Media (the physical or wireless channels that carry signals — copper, fiber, or wireless), End Devices/hosts (where data originates or is received — computers, phones, printers), and Intermediary Devices (that connect end devices and manage data flow — routers, switches, access points, firewalls). Understanding these three categories is foundational to describing any network's physical and logical structure."
  },
  {
    "quizTitle": "Networking Today",
    "category": "Reliable Network Architecture",
    "question": "A network architect is reviewing proposals for connecting a hospital's main building to a remote clinic 5 km away. Proposal A uses a single dedicated fiber link. Proposal B uses two fiber links through different routes in the city, with automatic failover. Which proposal better satisfies fault tolerance requirements and why?",
    "options": [
      "Proposal A — because a single high-quality fiber link is more reliable than two.",
      "Proposal B — because fault tolerance requires multiple paths, so if one link fails, traffic automatically uses the other.",
      "Both proposals are equally fault tolerant if the hardware is high quality.",
      "Proposal A — because fewer links means fewer potential points of failure."
    ],
    "correctOption": 1,
    "explanation": "Fault tolerance requires multiple paths. A single link, no matter how high quality, represents a single point of failure — if it is cut or fails, connectivity is lost entirely. Proposal B uses two diverse routes, so if one is severed (road construction, equipment failure), the other automatically carries traffic. This redundancy is the core principle of fault tolerance in network design. More links through diverse routes increase resilience, not fragility."
  },
  {
    "quizTitle": "Networking Today",
    "category": "Network Trends",
    "question": "Ten years ago, a law firm paid $8,000 to fly a senior partner to Tokyo for a two-day client meeting. Today, the same meeting happens over a high-definition video conferencing platform at essentially no travel cost. Beyond cost savings, which networking-driven social change does this reflect?",
    "options": [
      "Networks have replaced the need for all in-person business relationships.",
      "The globalization of the Internet empowers individuals and organizations to communicate and collaborate globally without geographic boundaries.",
      "Cloud computing stores meeting recordings for later review.",
      "BYOD allows the partner to join from a personal device."
    ],
    "correctOption": 1,
    "explanation": "The Internet has created a world without boundaries — networking advancements enable immediate communication that encourages global communities and eliminates geographic barriers. The law firm can now conduct international business without travel, reflecting the broader theme that networks fundamentally transform how people interact, work, learn, and play. While cloud and BYOD may be involved in the technology, the broader principle is the collapse of geographic boundaries through networking."
  },
  {
    "quizTitle": "Networking Today",
    "category": "Internet Access Technologies",
    "question": "A business analyst working from a café needs to securely access corporate databases. The café has public Wi-Fi, but the company's security policy requires that all remote connections use an encrypted tunnel back to headquarters. Which security tool provides this?",
    "options": [
      "Access Control List (ACL) — to filter traffic at the café router.",
      "Virtual Private Network (VPN) — to provide secure, encrypted access for remote workers.",
      "Intrusion Prevention System (IPS) — to block threats on the café network.",
      "Firewall — to protect the analyst's laptop from café network traffic."
    ],
    "correctOption": 1,
    "explanation": "Virtual Private Networks (VPNs) are used to provide secure access for remote workers by creating an encrypted tunnel over an untrusted network (like public Wi-Fi). This ensures that data transmitted between the analyst's laptop and the corporate headquarters is encrypted and protected from eavesdroppers on the café network. ACLs filter traffic at network devices, IPS detects threats, and firewalls protect network boundaries — but none create the encrypted tunnel a VPN provides."
  },
  {
    "quizTitle": "Networking Today",
    "category": "Network Types & Sizes",
    "question": "Which of the following BEST explains why a LAN typically provides much higher bandwidth than a WAN connection between two of its sites?",
    "options": [
      "LANs use more expensive hardware than WANs.",
      "WANs use the same technology as LANs, just at longer distances.",
      "LANs span small geographic areas with privately owned, high-capacity infrastructure; WANs traverse large distances through shared service provider networks, which offer lower-speed links between LANs.",
      "WANs are limited to wireless transmission, which is always slower."
    ],
    "correctOption": 2,
    "explanation": "LANs span small geographic areas with infrastructure fully owned and controlled by the organization, allowing high-speed bandwidth to all connected devices. WANs interconnect LANs over large geographic areas (between cities or countries) using service provider networks, which typically provide slower-speed links between LANs due to the cost and complexity of long-distance infrastructure. This bandwidth difference is a fundamental characteristic distinguishing LANs from WANs."
  }
]
