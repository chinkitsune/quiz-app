// data/questions/network-data-link-layer.js

module.exports = [
  {
    "quizTitle": "Data Link Layer",
    "category": "Purpose of the Data Link Layer",
    "question": "A network engineer says the Data Link layer is responsible for communications between end-device network interface cards. What does this mean in practice when a frame travels from PC1 through a switch to PC2 on the same LAN?",
    "options": [
      "The Data Link layer handles all routing decisions between PC1 and PC2.",
      "The Data Link layer governs the direct NIC-to-NIC delivery of frames on each link segment, using MAC addresses to identify the source and destination NICs involved in each hop.",
      "The Data Link layer assigns IP addresses to PC1 and PC2 so they can communicate.",
      "The Data Link layer encrypts traffic between PC1 and PC2 for secure communication."
    ],
    "correctOption": 1,
    "explanation": "The Data Link layer is responsible for communications between end-device network interface cards - it governs frame delivery between NICs on each individual link. Layer 2 uses MAC (physical) addresses to identify the source and destination NIC on a given network segment. When PC1 sends a frame to PC2 on the same LAN, the Data Link layer handles addressing and delivery across that local link. The Network layer (Layer 3) handles routing; the Data Link layer handles NIC-to-NIC delivery."
  },
  {
    "quizTitle": "Data Link Layer",
    "category": "Purpose of the Data Link Layer",
    "question": "A student asks what the Data Link layer does for upper layer protocols like IP. Which answer correctly describes this relationship?",
    "options": [
      "The Data Link layer replaces upper layer protocols, making IP unnecessary.",
      "The Data Link layer allows upper layer protocols to access the physical layer media and encapsulates Layer 3 packets (IPv4 and IPv6) into Layer 2 frames for transmission.",
      "The Data Link layer translates IP addresses into domain names for upper layer use.",
      "The Data Link layer compresses IP packets before passing them to the Physical layer."
    ],
    "correctOption": 1,
    "explanation": "The Data Link layer provides two key services to upper layers: it allows upper layer protocols (like IP) to access the physical layer media regardless of the specific media type, and it encapsulates Layer 3 packets (both IPv4 and IPv6) into Layer 2 frames for transmission across the local network segment. This encapsulation wraps the IP packet with a Layer 2 header (containing MAC addresses) and trailer (containing error detection), enabling the packet to traverse the physical medium. The Data Link layer abstracts the physical media details from IP."
  },
  {
    "quizTitle": "Data Link Layer",
    "category": "Purpose of the Data Link Layer",
    "question": "A frame arrives at a destination NIC but the error detection check fails - the data was corrupted during transmission. What does the Data Link layer do with this frame?",
    "options": [
      "It forwards the corrupted frame to the Network layer with a warning flag.",
      "It attempts to repair the corrupted bits before forwarding the frame upward.",
      "It rejects (discards) the corrupted frame - error detection causes corrupted frames to be dropped at Layer 2.",
      "It stores the corrupted frame and waits for a retransmission request from the destination."
    ],
    "correctOption": 2,
    "explanation": "The Data Link layer performs error detection and rejects corrupted frames. When a frame fails the error detection check (such as a CRC mismatch in the trailer), the Data Link layer silently discards the frame rather than passing corrupted data to the Network layer. Note that Layer 2 detects errors but typically does not correct them - it simply drops the bad frame. Error recovery (retransmission) is handled by upper layer protocols like TCP at Layer 4. This keep-bad-frames-out function protects the rest of the stack from acting on corrupted data."
  },
  {
    "quizTitle": "Data Link Layer",
    "category": "IEEE 802 Sublayers",
    "question": "The Data Link layer is divided into two sublayers. A developer is writing network driver software that needs to interface between an application's TCP/IP stack and the physical network hardware. Which sublayer does this driver primarily interact with?",
    "options": [
      "The MAC sublayer - because it manages all hardware interactions directly.",
      "The LLC (Logical Link Control) sublayer - because it communicates between the networking software at the upper layers and the device hardware at the lower layers.",
      "The Physical layer - because drivers interact directly with hardware.",
      "The Network layer - because TCP/IP stacks are Network layer constructs."
    ],
    "correctOption": 1,
    "explanation": "The LLC (Logical Link Control) sublayer communicates between the networking software at the upper layers and the device hardware at the lower layers. A network driver sits at exactly this interface point, translating between the OS networking stack (upper layers) and the physical NIC hardware (lower layer). The MAC sublayer handles data encapsulation and media access control - the mechanical process of getting frames onto and off the wire. LLC provides the logical interface that makes different physical media types transparent to upper layer software."
  },
  {
    "quizTitle": "Data Link Layer",
    "category": "IEEE 802 Sublayers",
    "question": "When a device needs to transmit a frame, which Data Link sublayer is responsible for determining when and how to access the physical medium, and for encapsulating the data into a frame?",
    "options": [
      "The LLC sublayer - because it controls all logical data transfer operations.",
      "The MAC (Media Access Control) sublayer - because it is responsible for data encapsulation and media access control.",
      "The Network layer - because it determines when data should be transmitted.",
      "The Physical layer - because it has direct control over the transmission medium."
    ],
    "correctOption": 1,
    "explanation": "The MAC (Media Access Control) sublayer is responsible for two key functions: data encapsulation (building the frame with header and trailer fields including MAC addresses and error detection) and media access control (determining when a device can access the shared medium, using methods like CSMA/CD or CSMA/CA). The MAC sublayer interfaces directly with the physical layer hardware. The LLC sublayer above it interfaces with the upper layer software. Together they provide the complete Data Link layer functionality."
  },
  {
    "quizTitle": "Data Link Layer",
    "category": "Providing Access to Media",
    "question": "A packet travels from PC1 to a web server passing through three routers. At each router, the router performs four specific Layer 2 functions. What are these four functions in the correct order?",
    "options": [
      "Read IP header, modify TTL, add new IP header, forward packet.",
      "Accept a frame from the medium, de-encapsulate the frame to expose the packet, re-encapsulate the packet into a new frame, forward the new frame on the next medium.",
      "Check MAC address, update ARP table, apply ACL, route to next hop.",
      "Receive bits, decode signals, buffer data, retransmit on next segment."
    ],
    "correctOption": 1,
    "explanation": "At each hop along the path, a router performs four basic Layer 2 functions: (1) Accepts a frame from the network medium - receives the incoming frame from the previous link; (2) De-encapsulates the frame to expose the encapsulated packet - strips the Layer 2 header and trailer to reveal the IP packet inside; (3) Re-encapsulates the packet into a new frame - wraps the IP packet in a new Layer 2 frame appropriate for the next link (new source/destination MAC addresses, possibly different frame format); (4) Forwards the new frame on the medium of the next network segment. This is why MAC addresses change hop-by-hop while IP addresses remain constant end-to-end."
  },
  {
    "quizTitle": "Data Link Layer",
    "category": "Providing Access to Media",
    "question": "A packet travels from a home network through three ISP routers to reach a cloud server. The packet encounters different link types along the way: Ethernet, then a WAN fiber link, then another Ethernet segment. Which statement about the Layer 2 frames during this journey is correct?",
    "options": [
      "The same Ethernet frame is used from the home network all the way to the cloud server.",
      "The IP packet inside stays the same but the Layer 2 frame is completely replaced at each router hop to match the next link type and addressing.",
      "Each router adds an additional Layer 2 header without removing the previous one.",
      "The Data Link layer is bypassed on WAN links because they only use Layer 3."
    ],
    "correctOption": 1,
    "explanation": "Packets exchanged between nodes may experience numerous data link layers and media transitions. At each router, the IP packet is de-encapsulated (Layer 2 frame stripped off) and then re-encapsulated into a completely new frame appropriate for the next network segment. The new frame has new source and destination MAC addresses, and may use an entirely different Layer 2 protocol (such as going from Ethernet to PPP on a WAN link). The IP packet content remains unchanged throughout. This is why Layer 2 addressing is called local addressing - each frame only exists for one hop."
  },
  {
    "quizTitle": "Data Link Layer",
    "category": "Physical and Logical Topologies",
    "question": "A network diagram shows that in a branch office, three PCs connect to a switch, which connects to a router. All cables and physical connections are shown. A second diagram shows IP subnets, port numbers (Fa0/1, G0/0), and which devices belong to which IP network. What are the correct names for the first and second diagrams respectively?",
    "options": [
      "Both are physical topology diagrams showing different detail levels.",
      "First diagram is a logical topology; second diagram is a physical topology.",
      "First diagram is a physical topology showing physical connections; second diagram is a logical topology showing virtual connections using device interfaces and IP addressing schemes.",
      "First diagram is a WAN topology; second diagram is a LAN topology."
    ],
    "correctOption": 2,
    "explanation": "A physical topology shows physical connections and how devices are interconnected - actual cables, physical port locations, and hardware placement. A logical topology identifies the virtual connections between devices using device interfaces and IP addressing schemes - it shows how data logically flows, which interfaces connect to which networks, and what addresses are used. Both are needed for complete network documentation: physical topology for installation and physical troubleshooting, logical topology for addressing, routing, and logical troubleshooting."
  },
  {
    "quizTitle": "Data Link Layer",
    "category": "WAN Topologies",
    "question": "A company has a headquarters in Toronto and branch offices in Vancouver, Montreal, and Calgary. Each branch connects directly to Toronto via a dedicated WAN link, but branches do not connect to each other. What WAN topology does this describe?",
    "options": [
      "Mesh topology - because there are multiple connection points.",
      "Point-to-point topology - because each connection is a direct link.",
      "Hub and spoke topology - because a central site (Toronto/hub) interconnects branch sites (spokes) through point-to-point links.",
      "Ring topology - because the sites form a circular connection pattern."
    ],
    "correctOption": 2,
    "explanation": "Hub and spoke is a WAN topology similar to a star topology where a central site (the hub - Toronto headquarters) interconnects branch sites (the spokes - Vancouver, Montreal, Calgary) through point-to-point links. Each branch connects only to the hub, not to each other. This is a very common WAN design because it centralizes management and infrastructure costs at headquarters. Traffic between branches must route through the hub. This differs from a mesh (where branches also connect to each other) and from a pure point-to-point (which only has two endpoints)."
  },
  {
    "quizTitle": "Data Link Layer",
    "category": "WAN Topologies",
    "question": "A financial institution requires a WAN where every data center can communicate directly with every other data center without relying on any single central point. If any single link fails, data can still route between all remaining sites. Which WAN topology provides this maximum redundancy?",
    "options": [
      "Point-to-point - because direct connections are the most reliable.",
      "Hub and spoke - because the central hub provides redundancy for all branches.",
      "Mesh topology - because it provides high availability by requiring every end system to be connected to every other end system.",
      "Ring topology - because rings provide automatic failover paths."
    ],
    "correctOption": 2,
    "explanation": "Mesh topology provides high availability but requires every end system to be connected to every other end system. This full interconnection means there is no single point of failure - if any link fails, traffic can route through alternate paths. The tradeoff is cost and complexity: with n sites, a full mesh requires n(n-1)/2 links. For a financial institution where availability is critical and budget is available, mesh is the appropriate choice. Hub and spoke has a single point of failure at the hub. Point-to-point only connects two endpoints."
  },
  {
    "quizTitle": "Data Link Layer",
    "category": "WAN Topologies",
    "question": "A network engineer says that point-to-point WAN connections allow for very simple Layer 2 protocols. Why is this the case?",
    "options": [
      "Point-to-point connections use higher bandwidth, allowing simpler protocols.",
      "Because in a point-to-point topology, nodes do not share the media with other hosts - all frames on the medium can only travel to or from the two connected nodes, so there is no need for complex addressing or access control.",
      "Point-to-point protocols are simpler because they only support IPv4, not IPv6.",
      "WAN protocols are always simpler than LAN protocols regardless of topology."
    ],
    "correctOption": 1,
    "explanation": "In a point-to-point WAN topology, nodes directly connect two endpoints and do not share the media with other hosts. Because all frames on the medium can only travel to or from the two nodes, Point-to-Point WAN protocols can be very simple - there is no need for complex MAC addressing to distinguish between multiple devices on the same medium. Both sides know that any received frame must be from the other endpoint. This is why protocols like PPP (Point-to-Point Protocol) and HDLC are relatively simple compared to Ethernet."
  },
  {
    "quizTitle": "Data Link Layer",
    "category": "LAN Topologies",
    "question": "A modern office network has a central switch with 24 ports. Every workstation, printer, and server connects directly to this switch via its own dedicated cable. What LAN topology does this describe, and what are its main advantages?",
    "options": [
      "Bus topology - because all devices share a single cable backbone.",
      "Ring topology - because devices connect in a logical circle through the switch.",
      "Star topology - because end devices interconnect through a central switch, making it easy to install, very scalable, and easy to troubleshoot.",
      "Mesh topology - because the switch provides multiple paths between devices."
    ],
    "correctOption": 2,
    "explanation": "A star topology has all end devices connecting to a central device (the switch), which is the dominant LAN topology today. Its advantages include: easy to install (each device just needs one cable to the central switch), very scalable (adding devices only requires connecting to the switch and adding switch ports), and easy to troubleshoot (a problem with one connection only affects that device, and cable runs can be tested individually). Extended star topology adds additional switches connected to the central switch to extend coverage. This contrasts with legacy Bus and Ring topologies."
  },
  {
    "quizTitle": "Data Link Layer",
    "category": "LAN Topologies",
    "question": "An IT history textbook describes early Ethernet networks where all computers shared a single coaxial cable backbone. If one computer had a problem, it could affect the entire network. Which legacy LAN topology does this describe?",
    "options": [
      "Star topology - because all computers connected to a central point.",
      "Ring topology - because data traveled in a circular pattern.",
      "Bus topology - because all end systems were chained together and terminated on each end.",
      "Mesh topology - because every computer connected to every other computer."
    ],
    "correctOption": 2,
    "explanation": "Bus topology is a legacy LAN design where all end systems are chained together on a single shared cable (the bus) and terminated on each end. All devices share the same transmission medium - when one device transmits, all other devices see the signal. This makes it susceptible to collisions (requiring CSMA/CD) and means a cable break or termination problem can take down the entire segment. Modern star topology with switches has replaced bus topology in virtually all new installations because of its superior reliability, scalability, and troubleshooting ease."
  },
  {
    "quizTitle": "Data Link Layer",
    "category": "LAN Topologies",
    "question": "A student is studying legacy network technologies and reads about Token Ring networks. Each workstation connects to the next, and a special token is passed from device to device. Which LAN topology does Token Ring use?",
    "options": [
      "Star topology - because Token Ring uses a central hub.",
      "Bus topology - because all devices share a common backbone cable.",
      "Ring topology - because each end system is connected to its respective neighbors forming a ring, and controlled access determines who can transmit.",
      "Mesh topology - because every device connects to multiple neighbors."
    ],
    "correctOption": 2,
    "explanation": "Ring topology is used by legacy Token Ring networks - each end system is connected to its respective neighbors to form a ring. The token passing mechanism provides controlled (deterministic) access - only the device holding the token can transmit, eliminating collisions. Token Ring is a legacy technology replaced by modern Ethernet. Both Bus (used with early Ethernet CSMA/CD) and Ring (used with Token Ring controlled access) are legacy LAN topologies. Modern LANs use star topology with Ethernet switches operating in full-duplex mode."
  },
  {
    "quizTitle": "Data Link Layer",
    "category": "Half and Full Duplex",
    "question": "An office network still uses an old Ethernet hub at the center of the network. A network engineer explains that this causes performance problems because of the hub technology. What duplex limitation do hubs impose on the network?",
    "options": [
      "Hubs enforce full-duplex, causing devices to transmit and receive simultaneously and overwhelming the network.",
      "Hubs enforce half-duplex communication where only one device can send or receive at a time on the shared medium, causing collisions and performance issues.",
      "Hubs only support 10 Mbps regardless of the connected devices' capabilities.",
      "Hubs require all devices to use token passing, which is slower than CSMA/CD."
    ],
    "correctOption": 1,
    "explanation": "Hubs operate as half-duplex devices - they broadcast all received signals out all ports, meaning the entire hub creates one shared collision domain. Only one device can send or receive at a time, and simultaneous transmissions cause collisions. This is why legacy bus-topology Ethernet with hubs uses CSMA/CD for collision management. Modern Ethernet switches replace hubs and operate in full-duplex mode, giving each device a dedicated collision-free link, eliminating collisions entirely and dramatically improving performance."
  },
  {
    "quizTitle": "Data Link Layer",
    "category": "Half and Full Duplex",
    "question": "A network engineer replaces all hubs in an office with modern Ethernet switches. After the upgrade, users report dramatically improved network performance and zero collision errors. What communication mode change explains this improvement?",
    "options": [
      "Switches enforce half-duplex but with a faster collision recovery algorithm.",
      "Switches eliminate the need for Layer 2 protocols entirely.",
      "Ethernet switches operate in full-duplex mode, allowing both devices to simultaneously transmit and receive, eliminating collisions and doubling effective bandwidth on each link.",
      "Switches reduce latency by compressing frames before forwarding them."
    ],
    "correctOption": 2,
    "explanation": "Ethernet switches operate in full-duplex mode, allowing both connected devices to simultaneously transmit and receive on the dedicated link between them. Because each switch port creates its own dedicated collision domain with only one device, there are no collisions and no need for CSMA/CD. Full-duplex effectively doubles the available bandwidth compared to half-duplex (a 100 Mbps link in full-duplex provides 100 Mbps in each direction simultaneously). This is the fundamental performance difference between hubs (half-duplex, shared, collision-prone) and switches (full-duplex, dedicated, collision-free)."
  },
  {
    "quizTitle": "Data Link Layer",
    "category": "Half and Full Duplex",
    "question": "A wireless network engineer is designing a WLAN for a coffee shop. She knows that all wireless devices sharing the same access point must operate in a specific duplex mode. Which mode do WLANs use, and what does this mean for network performance with many users?",
    "options": [
      "WLANs use full-duplex because radio signals travel in both directions simultaneously.",
      "WLANs use half-duplex because only one device can send or receive at a time on the shared wireless medium, meaning more users result in lower per-user bandwidth.",
      "WLANs use a dedicated duplex mode unique to IEEE 802.11 that is faster than both half and full duplex.",
      "WLANs use full-duplex for downloads and half-duplex for uploads."
    ],
    "correctOption": 1,
    "explanation": "WLANs operate in half-duplex mode because the wireless radio channel is a shared medium - only one device can transmit at a time in a given frequency channel and coverage area. This is why CSMA/CA is used for collision avoidance. With many users sharing the same access point, the total bandwidth is divided among all active users, resulting in lower per-user throughput as load increases. This is a fundamental limitation of shared wireless media compared to wired switched Ethernet where each device gets its own full-duplex link."
  },
  {
    "quizTitle": "Data Link Layer",
    "category": "Access Control Methods",
    "question": "Two network technologies are being compared. Technology A allows any device to transmit whenever it detects the medium is idle, but has a process for detecting and recovering from simultaneous transmissions. Technology B requires devices to wait for a special permission token before transmitting, guaranteeing only one device transmits at a time. Which access control categories do Technology A and Technology B represent?",
    "options": [
      "Technology A is controlled access; Technology B is contention-based access.",
      "Technology A is contention-based access (like CSMA/CD); Technology B is controlled access (like Token Ring).",
      "Both technologies use contention-based access with different collision strategies.",
      "Technology A is full-duplex access; Technology B is half-duplex access."
    ],
    "correctOption": 1,
    "explanation": "Contention-based access (Technology A) means all nodes operate in half-duplex, competing for use of the medium. Any device can attempt to transmit, but there is a mechanism to handle when multiple devices transmit simultaneously (CSMA/CD detects collisions, CSMA/CA avoids them). Controlled access (Technology B) is deterministic - each node has its own time on the medium. Token Ring is the classic example: only the device holding the token can transmit, completely preventing collisions. Controlled access is predictable but has overhead from token management. Contention-based is simpler but less predictable under heavy load."
  },
  {
    "quizTitle": "Data Link Layer",
    "category": "CSMA/CD",
    "question": "In a legacy bus-topology Ethernet network using CSMA/CD, PC1 and PC3 both check the cable at the same moment, both detect it as idle, and both begin transmitting simultaneously. Walk through exactly what happens next according to the CSMA/CD process.",
    "options": [
      "Both frames are successfully delivered because Ethernet can handle simultaneous transmissions.",
      "The switch detects both transmissions and buffers one while forwarding the other.",
      "Both devices detect the collision, both stop transmitting, both wait a random period of time, then both retransmit their data.",
      "The device with the lower MAC address gets priority and its frame is delivered; the other device discards its frame permanently."
    ],
    "correctOption": 2,
    "explanation": "The CSMA/CD (Carrier Sense Multiple Access with Collision Detection) collision detection process works as follows: (1) Devices transmitting simultaneously result in a signal collision on the shared media - the voltage abnormality indicates a collision; (2) Both devices detect the collision and stop transmitting; (3) Both devices wait a random period of time (using exponential backoff algorithm) before attempting to retransmit. The random wait is crucial - if both waited the same time, they would collide again. This process allows the shared medium to recover and both frames to eventually be transmitted successfully."
  },
  {
    "quizTitle": "Data Link Layer",
    "category": "CSMA/CD",
    "question": "Why does CSMA/CD use a RANDOM wait time after a collision rather than a fixed wait time for all devices?",
    "options": [
      "Random wait times are easier to implement in hardware than fixed timers.",
      "If all devices waited the same fixed time, they would all retransmit simultaneously, causing another collision. Random wait times make it statistically likely that one device retransmits before the others.",
      "Fixed wait times would cause devices to wait too long, reducing network efficiency.",
      "The random time is chosen based on the device MAC address to ensure fairness."
    ],
    "correctOption": 1,
    "explanation": "After a collision, if all devices waited the same fixed time before retransmitting, they would all start transmitting at the same moment again, causing another collision - and this would repeat indefinitely. By having each device wait a different random period, it becomes statistically probable that one device will retransmit first, transmit its frame successfully, and the medium will be idle again before the other devices attempt retransmission. The random backoff algorithm is essential to CSMA/CD's ability to recover from collisions on shared media."
  },
  {
    "quizTitle": "Data Link Layer",
    "category": "CSMA/CA",
    "question": "A wireless device using CSMA/CA is about to transmit a frame. Unlike CSMA/CD which transmits first and detects collisions after, CSMA/CA tries to avoid collisions before they happen. How does CSMA/CA inform other devices not to transmit during the upcoming transmission?",
    "options": [
      "The device sends a jamming signal to force all other devices to stop transmitting.",
      "The device sends a special token to the next device in the ring giving it permission to transmit.",
      "When transmitting, the device also includes the time duration needed for the transmission in the frame. Other devices receive this duration information and know how long the medium will be unavailable.",
      "The device broadcasts its MAC address before transmitting so other devices can identify and ignore its future frames."
    ],
    "correctOption": 2,
    "explanation": "CSMA/CA (Carrier Sense Multiple Access with Collision Avoidance) uses a proactive approach to avoid collisions. When a device transmits, it includes the time duration needed for the transmission in the frame. Other devices on the shared wireless medium receive this time duration information and set a timer - they know the medium will be unavailable for that duration and wait before attempting their own transmission. This reservation-like mechanism reduces (though does not eliminate) collisions. This contrasts with CSMA/CD, which is reactive - it allows collisions to happen and then recovers from them."
  },
  {
    "quizTitle": "Data Link Layer",
    "category": "CSMA/CA",
    "question": "Why does Wi-Fi use CSMA/CA (collision avoidance) instead of CSMA/CD (collision detection) like legacy wired Ethernet?",
    "options": [
      "CSMA/CA is faster than CSMA/CD for high-bandwidth wireless transmissions.",
      "Wireless devices cannot reliably detect collisions because a transmitting device cannot simultaneously listen for collisions on the same wireless channel it is transmitting on - making collision detection impractical in the wireless environment.",
      "CSMA/CA was invented after CSMA/CD and completely replaced it for all network types.",
      "IEEE 802.11 requires CSMA/CA because wireless uses higher frequencies than wired Ethernet."
    ],
    "correctOption": 1,
    "explanation": "Wireless devices cannot reliably detect collisions the way wired Ethernet can. In wired CSMA/CD, a device listens to the cable while transmitting - if the signal it hears differs from what it sent, a collision occurred. Wireless devices cannot do this effectively because their own transmitted signal is so much stronger than any incoming signal that it drowns out any collision detection. Additionally, the hidden node problem (two devices that cannot hear each other both transmit to the same AP) makes detection unreliable. Therefore, CSMA/CA takes the preventive approach of collision avoidance through duration announcements."
  },
  {
    "quizTitle": "Data Link Layer",
    "category": "Access Control Methods",
    "question": "A legacy Token Ring network guarantees that no two devices ever transmit simultaneously. A newer Ethernet network uses contention-based access and occasionally has brief retransmission delays. What fundamental design difference explains why Token Ring never has collisions?",
    "options": [
      "Token Ring uses faster cables that can handle multiple simultaneous transmissions.",
      "Token Ring uses controlled (deterministic) access where each node has its own time on the medium - a device can only transmit when it holds the token, guaranteeing exclusive access.",
      "Token Ring devices check each other MAC addresses before transmitting.",
      "Token Ring uses full-duplex mode which eliminates collisions by design."
    ],
    "correctOption": 1,
    "explanation": "Controlled access (used in Token Ring and ARCNET) is deterministic - each node has its own time on the medium. A device can only transmit when it possesses the token (a special control frame passed sequentially around the ring). Since only one device holds the token at any time, only one device can ever transmit at a time, making collisions physically impossible. The predictability is an advantage for time-sensitive traffic, but token management adds overhead. Contention-based systems (CSMA/CD, CSMA/CA) allow any device to attempt transmission, which is simpler but requires collision handling."
  },
  {
    "quizTitle": "Data Link Layer",
    "category": "Data Link Frame Structure",
    "question": "A network protocol textbook describes the three structural parts of a data link frame. A frame carrying an IP packet from PC1 to its default gateway would contain which three components?",
    "options": [
      "Source IP address, destination IP address, and payload.",
      "Header (containing control information like MAC addresses), Data (the encapsulated IP packet payload), and Trailer (containing error detection information).",
      "Preamble, payload, and checksum only.",
      "TCP header, IP header, and Ethernet header."
    ],
    "correctOption": 1,
    "explanation": "A data link frame has exactly three structural parts: the Header (containing control fields like source and destination MAC addresses, frame type, and flow control information - everything needed to deliver the frame on the local link), the Data (the payload - which is the encapsulated Layer 3 packet, such as an IP packet), and the Trailer (containing error detection information like CRC that allows the receiver to check if the frame was corrupted in transit). The specific fields within the header and trailer vary by protocol (Ethernet vs PPP vs 802.11), but all Layer 2 frames follow this header-data-trailer structure."
  },
  {
    "quizTitle": "Data Link Layer",
    "category": "Data Link Frame Structure",
    "question": "A frame arrives at a switch port. The switch needs to identify whether this frame is destined for a local device or whether it carries an IPv4 or IPv6 packet that needs routing. Which frame header field tells the switch what Layer 3 protocol is encapsulated inside the frame?",
    "options": [
      "The Addressing field - because it contains the destination MAC address.",
      "The Error Detection field - because it validates the frame contents.",
      "The Type field - because it identifies the encapsulated Layer 3 protocol.",
      "The Control field - because it provides flow control services."
    ],
    "correctOption": 2,
    "explanation": "The Type field in the frame header identifies the encapsulated Layer 3 protocol. For example, in an Ethernet frame, the EtherType field value 0x0800 indicates IPv4 and 0x86DD indicates IPv6. This allows network devices to correctly process the payload - knowing whether to pass it to the IPv4 or IPv6 processing stack. The Addressing field contains MAC addresses. Error Detection is in the trailer and checks for corruption. The Control field manages flow control services. Each field serves a distinct purpose in frame delivery."
  },
  {
    "quizTitle": "Data Link Layer",
    "category": "Data Link Frame Structure",
    "question": "A frame arrives at its destination with corrupted data. The receiving NIC uses a specific frame field to detect this corruption. Which frame field provides this error detection capability, and where is it located within the frame structure?",
    "options": [
      "The Frame Start and Stop field in the header, which acts as a checksum.",
      "The Addressing field in the header, which validates source and destination.",
      "The Error Detection field in the trailer, which is used to determine transmission errors.",
      "The Type field in the header, which identifies the protocol and validates integrity."
    ],
    "correctOption": 2,
    "explanation": "The Error Detection field is located in the frame trailer and is used to determine if transmission errors occurred. The sender calculates a value (such as a CRC - Cyclic Redundancy Check) based on the frame contents and places it in this trailer field. The receiver performs the same calculation on the received frame and compares the result to the value in the Error Detection field. If they match, the frame is intact; if they differ, the frame was corrupted during transmission and is discarded. The trailer position means error detection covers the entire frame including header and data fields."
  },
  {
    "quizTitle": "Data Link Layer",
    "category": "Data Link Frame Structure",
    "question": "A frame needs to be sent over a serial WAN link. The receiving device must know exactly where the frame starts and ends so it can correctly extract the payload. Which frame field serves this purpose?",
    "options": [
      "The Addressing field, which marks boundaries through MAC address delimiters.",
      "The Frame Start and Stop field, which identifies the beginning and end of the frame.",
      "The Control field, which signals the start and end of data flow.",
      "The Error Detection field, which signals frame completion."
    ],
    "correctOption": 1,
    "explanation": "The Frame Start and Stop field identifies the beginning and end of a frame. Without this, a receiving device seeing a continuous stream of bits on the medium would not know where one frame ends and the next begins. This field (sometimes called a preamble, flag byte, or delimiter depending on the protocol) provides frame synchronization. For example, HDLC uses a flag byte (01111110) to delimit frames. Ethernet uses a preamble and start frame delimiter. This framing capability is fundamental to Layer 2 operation - the receiver must know frame boundaries before it can process any other fields."
  },
  {
    "quizTitle": "Data Link Layer",
    "category": "Layer 2 Addressing",
    "question": "A frame travels from PC1 through Switch1, then through Router1, then through Switch2 to reach a web server. After Router1 processes the frame, it creates a new frame for the next segment. What happens to the Layer 2 addresses in the new frame compared to the original frame?",
    "options": [
      "The Layer 2 addresses remain the same throughout the entire journey from PC1 to the web server.",
      "The Layer 2 source and destination addresses are updated by each device that forwards the frame - after Router1, the new frame has Router1 outbound interface MAC as source and the web server MAC (or next-hop MAC) as destination.",
      "Layer 2 addresses are only used on the first hop and removed for subsequent hops.",
      "Router1 adds additional Layer 2 headers without changing the original addresses."
    ],
    "correctOption": 1,
    "explanation": "Layer 2 addresses (MAC addresses) are updated by each device that forwards the frame. They are used only for local delivery of a frame on a specific link - not end-to-end delivery. After Router1 receives the frame, de-encapsulates the IP packet, and decides where to send it next, it creates a completely new frame: the new source MAC is Router1's outgoing interface MAC address, and the new destination MAC is either the web server's MAC (if on the same segment) or the next router's MAC. This is why Layer 2 addresses are called physical or local addresses - they change at each hop, unlike IP addresses which remain constant."
  },
  {
    "quizTitle": "Data Link Layer",
    "category": "Layer 2 Addressing",
    "question": "A network security analyst is monitoring frames on a LAN segment. She notices that the Layer 2 destination address in all captured frames only ever matches devices on the same local network segment. Why can Layer 2 addresses only be used for local delivery?",
    "options": [
      "Layer 2 addresses are too short to identify devices on larger networks.",
      "Layer 2 addresses are only used for local delivery of a frame on the link because they identify NICs on a specific physical segment - they cannot route traffic between different network segments the way IP addresses can.",
      "Layer 2 addresses are encrypted and cannot be read by devices on other segments.",
      "The Layer 2 protocol specification prohibits frames from crossing network boundaries."
    ],
    "correctOption": 1,
    "explanation": "Layer 2 (MAC) addresses are designed for local delivery of frames on a single network link - they identify specific NICs on a given physical segment. Unlike IP addresses (which have network and host portions enabling routing between different networks), MAC addresses have no hierarchical structure that enables inter-network routing. A router separates Layer 2 domains: it strips the Layer 2 frame, reads the Layer 3 IP destination, determines the next hop, and creates a new Layer 2 frame for the next segment. MAC addresses are meaningful only within a single Layer 2 domain (collision/broadcast domain)."
  },
  {
    "quizTitle": "Data Link Layer",
    "category": "LAN and WAN Frames",
    "question": "A network engineer is configuring links on a router. One interface connects to a local Ethernet LAN, another connects to a fiber WAN link using a serial interface. She notices these two interfaces use completely different Layer 2 protocols. What determines which Layer 2 protocol must be used on each link?",
    "options": [
      "The administrator can freely choose any Layer 2 protocol for any interface.",
      "The IP addressing scheme determines which Layer 2 protocol to use.",
      "The logical topology and physical media of each link determine the data link protocol used - Ethernet for LAN segments, and WAN protocols like PPP or HDLC for WAN serial links.",
      "The router manufacturer decides which Layer 2 protocols are allowed on each port type."
    ],
    "correctOption": 2,
    "explanation": "The logical topology and physical media determine the data link protocol used on each link. Ethernet is used for standard LAN segments (copper or fiber with Ethernet transceivers), IEEE 802.11 for wireless LANs, and WAN-specific protocols like PPP (Point-to-Point Protocol), HDLC (High-Level Data Link Control), and Frame-Relay for WAN serial links. Each protocol performs media access control for its specified logical topology. A router must use the correct Layer 2 protocol for each interface type - the hardware and connection type dictate this choice, not the administrator's preference."
  },
  {
    "quizTitle": "Data Link Layer",
    "category": "LAN and WAN Frames",
    "question": "Which of the following correctly matches Layer 2 protocols to their typical deployment environments?",
    "options": [
      "Ethernet for WAN serial links, PPP for LAN segments, HDLC for wireless networks.",
      "Ethernet for LAN segments, 802.11 Wireless for WLANs, PPP and HDLC for WAN point-to-point links, Frame-Relay for WAN multi-point connections.",
      "All network types use Ethernet as the universal Layer 2 protocol.",
      "PPP is used for LANs, Ethernet is used for WANs, and 802.11 is used for MANs."
    ],
    "correctOption": 1,
    "explanation": "Different environments use appropriate Layer 2 protocols: Ethernet (IEEE 802.3) is the dominant LAN protocol for wired local networks. IEEE 802.11 Wireless is used for wireless LAN connections. PPP (Point-to-Point Protocol) and HDLC (High-Level Data Link Control) are used for WAN point-to-point serial links between routers. Frame-Relay is used for WAN multi-point connections. Each protocol is designed for its specific topology and media type - each performs media access control appropriate for its specified logical topology. Understanding which protocol applies where is fundamental to network design and troubleshooting."
  },
  {
    "quizTitle": "Data Link Layer",
    "category": "Data Link Layer Standards",
    "question": "A networking student is researching which standards organizations define Data Link layer protocols. She finds that multiple organizations are involved. Which of the following correctly lists organizations that define Data Link layer protocols?",
    "options": [
      "Only the IETF defines Data Link layer protocols, just as it defines TCP/IP protocols.",
      "IEEE, ITU, ISO, and ANSI all define data link layer protocols.",
      "Only Cisco and Microsoft define Data Link layer protocols as proprietary standards.",
      "The FCC and regulatory bodies define all Data Link layer protocols."
    ],
    "correctOption": 1,
    "explanation": "Data link layer protocols are defined by multiple engineering organizations: IEEE (Institute for Electrical and Electronic Engineers - defines Ethernet 802.3 and Wi-Fi 802.11), ITU (International Telecommunications Union - defines WAN protocols and telecommunications standards), ISO (International Organizations for Standardization - defines HDLC and other standards), and ANSI (American National Standards Institute - defines various networking and communications standards). This is different from TCP/IP upper layer protocols (governed by IETF) and Physical layer standards. Multiple organizations exist because data link protocols vary widely by media type and deployment scenario."
  },
  {
    "quizTitle": "Data Link Layer",
    "category": "IEEE 802 Sublayers",
    "question": "IEEE 802 LAN/MAN standards specify that the Data Link layer consists of two sublayers. Why is dividing the Data Link layer into LLC and MAC sublayers beneficial?",
    "options": [
      "The division allows the Data Link layer to operate twice as fast.",
      "Separating LLC (interface to upper layer software) from MAC (interface to physical hardware) allows the upper layer software interface to remain consistent while the lower MAC sublayer changes to support different physical media types.",
      "The LLC sublayer handles encryption while the MAC sublayer handles compression.",
      "LLC is used for wired networks and MAC is used for wireless networks only."
    ],
    "correctOption": 1,
    "explanation": "The two-sublayer design provides important modularity. The LLC sublayer provides a consistent interface to upper layer networking software regardless of what physical medium is below. The MAC sublayer interfaces with the specific physical hardware and handles media-specific encapsulation and access control. This separation means the same upper layer software (and LLC) can work over Ethernet, Wi-Fi, or other media types by simply swapping the MAC sublayer implementation. IEEE 802 LAN/MAN standards are specific to the type of network (Ethernet, WLAN, WPAN, etc.) at the MAC level, but LLC provides a common upper interface."
  },
  {
    "quizTitle": "Data Link Layer",
    "category": "Purpose of the Data Link Layer",
    "question": "A student asks why the Data Link layer is needed at all - why not just have the Network layer (IP) communicate directly with the Physical layer? Which answer best explains the necessity of the Data Link layer?",
    "options": [
      "The Data Link layer is not strictly necessary - it is just a historical artifact of early networking design.",
      "The Data Link layer is needed because IP (Layer 3) needs a layer that handles the specific details of each physical medium type, provides local addressing for frame delivery on each link, manages media access control, and performs error detection - functions that IP is not designed to do.",
      "The Data Link layer handles IP address assignment, which the Physical layer cannot do.",
      "The Data Link layer is only needed for wireless networks - wired networks can bypass it."
    ],
    "correctOption": 1,
    "explanation": "The Data Link layer is essential because it handles functions that IP is not designed to manage: it provides local addressing (MAC addresses) for delivery on each specific network link, manages access to the physical medium (CSMA/CD, CSMA/CA, token passing), performs error detection to reject corrupted frames, and encapsulates IP packets appropriately for each media type (Ethernet, Wi-Fi, PPP, HDLC). Without the Data Link layer, IP would need to know about every type of physical medium - the layered model keeps IP simple and universal while the Data Link layer handles media-specific details."
  },
  {
    "quizTitle": "Data Link Layer",
    "category": "CSMA/CD",
    "question": "An older 10BASE-T Ethernet network uses a hub. A network engineer says this network uses legacy CSMA/CD because of the hub. If the same devices were connected to a switch instead, would CSMA/CD still be needed? Why or why not?",
    "options": [
      "Yes, CSMA/CD is always needed for Ethernet regardless of whether hubs or switches are used.",
      "No - with a switch, each device gets a dedicated full-duplex link to its switch port, creating its own collision domain. There are no shared segments where collisions can occur, so CSMA/CD is not needed.",
      "No, because switches use CSMA/CA instead of CSMA/CD for collision management.",
      "Yes, because CSMA/CD is built into Ethernet NICs and cannot be disabled."
    ],
    "correctOption": 1,
    "explanation": "With modern Ethernet switches, CSMA/CD becomes effectively unnecessary because each switch port creates a dedicated point-to-point full-duplex link with just one device. Collisions can only occur on shared half-duplex segments (like those created by hubs) where multiple devices compete for the same medium. With a switch, PC1 sends a frame to the switch port, and the switch forwards it to the destination port - these are separate dedicated links. There are no shared segments where a device could detect another device transmitting simultaneously. Full-duplex switch connections eliminate collision domains entirely."
  },
  {
    "quizTitle": "Data Link Layer",
    "category": "WAN Topologies",
    "question": "A network designer is building a WAN for a 5-site company. She considers full mesh topology but calculates the number of required links. How many dedicated WAN links would a full mesh topology require for 5 sites, and what is the primary benefit that justifies this cost?",
    "options": [
      "4 links - one from each branch to the headquarters; benefit is centralized management.",
      "5 links - one per site; benefit is simplicity.",
      "10 links - n(n-1)/2 = 5(4)/2 = 10 links; benefit is high availability because every site connects directly to every other site, with no single point of failure.",
      "20 links - n squared = 5x4 = 20 links; benefit is maximum redundancy."
    ],
    "correctOption": 2,
    "explanation": "A full mesh topology requires n(n-1)/2 links where n is the number of sites. For 5 sites: 5(5-1)/2 = 5x4/2 = 10 links. The primary benefit is high availability - because every site connects directly to every other site, there is no single point of failure. If any one link fails, all sites can still reach each other through alternative direct paths. The 10-link requirement for only 5 sites illustrates why full mesh is expensive and complex - it is typically justified only for critical infrastructure where availability outweighs cost considerations."
  },
  {
    "quizTitle": "Data Link Layer",
    "category": "Data Link Frame Structure",
    "question": "The amount of control information in a data link frame varies. A frame on a shared CSMA/CD legacy bus network might need more control fields than a frame on a dedicated point-to-point WAN link. What two factors determine the amount of control information in a frame?",
    "options": [
      "The size of the IP packet and the speed of the physical medium.",
      "The access control information requirements and the logical topology - a shared medium needing complex access control requires more control fields than a simple point-to-point link.",
      "The number of users on the network and the geographic distance of the link.",
      "The Layer 3 protocol (IPv4 vs IPv6) and the application generating the traffic."
    ],
    "correctOption": 1,
    "explanation": "The amount of control information carried within a frame varies according to access control information and logical topology. A point-to-point WAN link (only two nodes, no shared media contention) needs minimal control overhead - just start/stop delimiters, basic addressing, and error detection. A shared Ethernet LAN or wireless network needs more complex MAC address fields for device identification, type fields, and potentially more sophisticated error detection. Different protocols (Ethernet, PPP, 802.11) carry different amounts of control overhead appropriate for their specific topology and access control requirements."
  },
  {
    "quizTitle": "Data Link Layer",
    "category": "LAN Topologies",
    "question": "A network architect is designing a new campus LAN that must be easy to expand as the company grows, fault-isolated (a problem with one connection should not affect other connections), and easy to troubleshoot. Which LAN topology best meets all three requirements?",
    "options": [
      "Bus topology - because all devices share one cable making expansion simple.",
      "Ring topology - because the ring structure provides built-in fault tolerance.",
      "Star or extended star topology - because it is easy to install, very scalable (just add more switch ports or switches), and easy to troubleshoot (each connection is independent).",
      "Mesh topology - because multiple paths between devices ensure fault isolation."
    ],
    "correctOption": 2,
    "explanation": "Star and extended star topologies meet all three requirements: they are easy to install (each device has its own dedicated cable to the central switch), very scalable (adding new devices just requires a free switch port or adding a new switch connected to the existing one - extended star), and easy to troubleshoot (a fault on any one cable or port only affects that single device, not the rest of the network). Bus topology fails fault isolation (a cable break can take down the entire segment). Ring has single-path dependencies. Star/extended star is why it became the universal modern LAN topology."
  },
  {
    "quizTitle": "Data Link Layer",
    "category": "Access Control Methods",
    "question": "A network engineer is choosing a media access control method for a new industrial automation network where devices must transmit sensor data at precise, guaranteed intervals with no delay variation. Which access control method better suits this requirement?",
    "options": [
      "CSMA/CD contention-based access - because collision detection ensures fast recovery.",
      "CSMA/CA contention-based access - because collision avoidance reduces delays.",
      "Controlled access (like token passing) - because it provides deterministic access where each node has its own guaranteed time on the medium, ensuring predictable and guaranteed transmission timing.",
      "Full-duplex Ethernet - because dedicated links eliminate all contention delays."
    ],
    "correctOption": 2,
    "explanation": "Controlled access provides deterministic access where each node has its own time on the medium. This means transmission timing is predictable and guaranteed - critical for industrial automation where sensors must transmit at precise intervals. Contention-based methods (CSMA/CD and CSMA/CA) introduce variable delays due to collision detection/avoidance and random backoff, making them non-deterministic - unsuitable when timing guarantees are required. While modern field buses have largely replaced classic token ring in industrial settings, the principle of deterministic controlled access remains important for real-time industrial applications."
  },
  {
    "quizTitle": "Data Link Layer",
    "category": "Purpose of the Data Link Layer",
    "question": "Which of the following is NOT a function of the Data Link layer?",
    "options": [
      "Encapsulating Layer 3 packets into Layer 2 frames.",
      "Performing error detection and rejecting corrupted frames.",
      "Allowing upper layer protocols to access physical layer media.",
      "Assigning IP addresses to devices and maintaining routing tables."
    ],
    "correctOption": 3,
    "explanation": "Assigning IP addresses and maintaining routing tables are Layer 3 (Network layer) functions, NOT Data Link layer functions. The Data Link layer (Layer 2) functions include: encapsulating Layer 3 packets (IPv4 and IPv6) into Layer 2 frames, performing error detection and rejecting corrupted frames, allowing upper layer protocols to access the physical layer media, providing local addressing (MAC addresses) for frame delivery, and controlling access to the shared medium. IP addressing and routing are Network layer responsibilities - keeping these functions separate is a key principle of the layered networking model."
  },
  {
    "quizTitle": "Data Link Layer",
    "category": "Physical and Logical Topologies",
    "question": "A new network engineer is handed two diagrams of the same corporate network. She needs to use the correct one to troubleshoot a cable fault between a switch and a router. Which type of diagram should she use, and why?",
    "options": [
      "Logical topology diagram - because it shows the IP addressing needed to identify the faulty segment.",
      "Physical topology diagram - because it shows the actual physical connections and how devices are interconnected, helping her locate the specific cable run in question.",
      "Either diagram works equally well for physical cable troubleshooting.",
      "Neither diagram helps - cable faults require specialized equipment, not diagrams."
    ],
    "correctOption": 1,
    "explanation": "A physical topology diagram shows the physical connections and how devices are interconnected - actual cable runs, port locations, rack positions, and physical layouts. For troubleshooting a physical cable fault, the physical topology is essential: it shows exactly which physical port on the switch connects to which physical port on the router, allowing the technician to identify the specific cable to test. A logical topology shows virtual connections, IP addressing schemes, and network layer information - useful for routing and addressing troubleshooting, but not for locating a physical cable."
  },
  {
    "quizTitle": "Data Link Layer",
    "category": "CSMA/CD",
    "question": "Legacy bus-topology Ethernet used CSMA/CD. The 'CS' in CSMA stands for Carrier Sense. What does Carrier Sense mean in the context of network access control?",
    "options": [
      "The device senses the speed (carrier rate) of the network before transmitting.",
      "The device listens to the medium before transmitting to determine if another device is already sending - if the medium is busy (carrier detected), the device waits before attempting to transmit.",
      "The device sends a carrier signal ahead of the data to reserve the medium.",
      "The device checks for the correct electrical carrier frequency before connecting."
    ],
    "correctOption": 1,
    "explanation": "Carrier Sense means devices listen to the medium before transmitting to detect if another device is currently sending. If a carrier signal is detected (the medium is busy), the device waits until the medium becomes idle before attempting transmission. This 'listen before talk' behavior reduces (but does not eliminate) collisions. The full CSMA process: Carrier Sense (listen first), Multiple Access (multiple devices share the same medium), with CD (Collision Detection) for wired Ethernet or CA (Collision Avoidance) for wireless. The Carrier Sense component is shared by both CSMA/CD and CSMA/CA."
  },
  {
    "quizTitle": "Data Link Layer",
    "category": "LAN and WAN Frames",
    "question": "A packet arrives at a router interface from an Ethernet LAN and must be forwarded out a WAN serial interface using PPP. What must happen to the Layer 2 frame during this process?",
    "options": [
      "The Ethernet frame is forwarded unchanged through the WAN interface.",
      "The Ethernet frame header is modified to include WAN addressing and forwarded.",
      "The Ethernet frame is de-encapsulated to expose the IP packet, then the IP packet is re-encapsulated into a new PPP frame appropriate for the WAN serial link.",
      "The router converts the Ethernet frame to a PPP frame by appending a WAN trailer."
    ],
    "correctOption": 2,
    "explanation": "When a packet transitions between different media types at a router, complete re-encapsulation occurs: the incoming Ethernet frame is de-encapsulated (Ethernet header and trailer removed) to expose the IP packet inside, then the IP packet is re-encapsulated into a completely new PPP frame (with PPP header and trailer) appropriate for the WAN serial link. The logical topology and physical media determine which data link protocol is used - Ethernet for LAN, PPP for this WAN link. The IP packet content remains unchanged; only the Layer 2 wrapper changes to match the next link's requirements."
  },
  {
    "quizTitle": "Data Link Layer",
    "category": "Data Link Frame Structure",
    "question": "A frame's Control field is examined during a network analysis session. What type of information does this field provide?",
    "options": [
      "The source and destination hardware addresses of the NICs involved.",
      "Flow control services - information used to manage the rate and conditions of data transfer on the link.",
      "The type of Layer 3 protocol encapsulated in the frame payload.",
      "Error detection values for validating frame integrity."
    ],
    "correctOption": 1,
    "explanation": "The Control field in a data link frame identifies flow control services - it carries information used to manage data flow on the link, such as acknowledgments, window sizes, or other link-level flow management mechanisms. This is distinct from the Addressing field (source and destination MAC addresses), the Type field (identifies the encapsulated Layer 3 protocol like IPv4 or IPv6), and the Error Detection field in the trailer (carries CRC or checksum values for integrity checking). Different Layer 2 protocols use the Control field for different flow control purposes depending on the protocol design."
  },
  {
    "quizTitle": "Data Link Layer",
    "category": "Half and Full Duplex",
    "question": "Two workstations are connected to a switch. PC1 is downloading a large file from PC2 while simultaneously PC2 is downloading a different file from PC1. In full-duplex mode, what happens to these simultaneous transfers?",
    "options": [
      "The switch forces one transfer to pause while the other completes, since simultaneous bidirectional transfer is impossible.",
      "Both transfers proceed simultaneously without interference - full-duplex allows both devices to simultaneously transmit and receive, so PC1 sends data to PC2 while PC2 simultaneously sends data to PC1.",
      "The switch detects a collision and pauses both transfers until one device backs off.",
      "Full-duplex mode splits the available bandwidth, giving each direction only half the total link speed."
    ],
    "correctOption": 1,
    "explanation": "Full-duplex communication allows both devices to simultaneously transmit and receive on the same link. With a switch, PC1 can send data to PC2 at the same time PC2 sends data to PC1 - these are separate logical channels (transmit and receive pairs) that do not interfere with each other. This is why switching to full-duplex effectively doubles available bandwidth compared to half-duplex: a 1 Gbps full-duplex link provides 1 Gbps in each direction simultaneously. There are no collisions in full-duplex switched environments because the transmit and receive paths are independent."
  },
  {
    "quizTitle": "Data Link Layer",
    "category": "CSMA/CA",
    "question": "A wireless laptop successfully transmits a frame. According to CSMA/CA, what information did the transmitting device include in its transmission that helped other wireless devices know not to transmit during that time?",
    "options": [
      "The MAC address of the access point, so other devices would direct traffic elsewhere.",
      "The time duration needed for the transmission, so other devices receiving this information know how long the medium will be unavailable.",
      "A priority level indicating the transmission type, so lower-priority devices would yield.",
      "An encryption key that other devices cannot decode, effectively blocking their access."
    ],
    "correctOption": 1,
    "explanation": "In CSMA/CA (Carrier Sense Multiple Access with Collision Avoidance), when transmitting, devices also include the time duration needed for the transmission in the frame. Other devices on the shared wireless medium receive this time duration information and know how long the medium will be unavailable - they set a timer and defer their own transmissions for that duration. This proactive announcement of transmission duration is the collision avoidance mechanism. It prevents other devices from starting transmissions that would collide with the ongoing transmission, reducing (though not eliminating) wireless collisions."
  },
  {
    "quizTitle": "Data Link Layer",
    "category": "Access Control Methods",
    "question": "A network technician compares CSMA/CD and CSMA/CA side by side. Which statement correctly identifies the KEY difference in their approach to handling multiple devices transmitting on a shared medium?",
    "options": [
      "CSMA/CD is used on wireless networks; CSMA/CA is used on wired networks.",
      "CSMA/CD is a reactive approach - it allows collisions to happen and then recovers from them. CSMA/CA is a proactive approach - it tries to avoid collisions before they happen by announcing transmission duration.",
      "CSMA/CD eliminates collisions entirely; CSMA/CA only reduces collision frequency.",
      "CSMA/CD is used with controlled access topologies; CSMA/CA is used with deterministic networks."
    ],
    "correctOption": 1,
    "explanation": "The fundamental difference is reactive versus proactive: CSMA/CD (Collision Detection) allows collisions to occur on the shared wired medium, detects them when they happen, and recovers by having all devices wait a random time before retransmitting. CSMA/CA (Collision Avoidance) takes a proactive approach - by including transmission duration in frames, devices announce how long they need the medium, allowing other devices to defer their transmissions and avoid the collision in the first place. CSMA/CD is used on legacy wired Ethernet bus networks; CSMA/CA is used on WLANs (IEEE 802.11)."
  },
  {
    "quizTitle": "Data Link Layer",
    "category": "Layer 2 Addressing",
    "question": "A network analyst captures frames at three different points on a network: on the LAN segment between PC1 and Switch1, between Switch1 and Router1, and between Router1 and the destination server. The IP source and destination addresses are the same in all three captures. What does she find when comparing the Layer 2 source and destination addresses across these three capture points?",
    "options": [
      "The MAC addresses are identical in all three captures, just like the IP addresses.",
      "There are no MAC addresses in the captures between Switch1 and Router1.",
      "The MAC addresses are different at each capture point - they reflect the NICs involved in each specific hop, proving Layer 2 addressing is local and hop-by-hop.",
      "The MAC addresses change only when the frame crosses a WAN link, not within a LAN."
    ],
    "correctOption": 2,
    "explanation": "This capture experiment perfectly demonstrates that Layer 2 addresses are local and updated at each hop. Between PC1 and Switch1: source MAC is PC1, destination MAC is Router1 (default gateway). Between Switch1 and Router1: same MACs (the switch does not change them). Between Router1 and the server: source MAC is now Router1's outgoing interface, destination MAC is the server's MAC. IP addresses (Layer 3) remain constant end-to-end because they identify ultimate source and destination. MAC addresses (Layer 2) change at each router hop because they only identify the local link endpoints."
  },
  {
    "quizTitle": "Data Link Layer",
    "category": "Providing Access to Media",
    "question": "In the context of the Data Link layer providing access to media, what does the phrase 'numerous data link layers and media transitions' mean when a packet travels across the Internet?",
    "options": [
      "The packet must be re-encrypted at each router using different Layer 2 security protocols.",
      "Different routers along the path run different operating systems requiring protocol translation.",
      "As the packet hops between routers, it may travel over completely different physical media types (Ethernet, fiber WAN, wireless) each requiring a different Layer 2 protocol and frame format - the IP packet stays the same but its Layer 2 wrapper changes at each hop.",
      "The IP packet is re-addressed with new source and destination IPs at each media transition."
    ],
    "correctOption": 2,
    "explanation": "A packet traveling from a home network to a server across the Internet may traverse: home Ethernet LAN (Ethernet frames), home router to ISP (PPP or HDLC over DSL/cable), ISP backbone (possibly fiber with different WAN protocols), data center network (Ethernet again). At each router, the current Layer 2 frame is stripped and a new one appropriate for the next media type is applied. This is what is meant by 'numerous data link layers and media transitions' - the IP packet is the consistent end-to-end element while the Layer 2 wrapping changes completely at each hop to match the next medium."
  },
  {
    "quizTitle": "Data Link Layer",
    "category": "CSMA/CD",
    "question": "A network student confuses collision domains and broadcast domains. After replacing a hub with a switch in a network with 8 PCs, how does the number of collision domains change?",
    "options": [
      "The number of collision domains stays the same - both hubs and switches create one collision domain.",
      "With a hub, all 8 PCs share ONE collision domain. After replacing with a switch, each PC gets its OWN dedicated collision domain - the number of collision domains increases from 1 to 8.",
      "With a hub, there are 8 collision domains. After replacing with a switch, there is 1 collision domain.",
      "Switches eliminate collision domains entirely, reducing the count to zero."
    ],
    "correctOption": 1,
    "explanation": "A hub creates a single shared collision domain where all connected devices compete for the medium using CSMA/CD. With 8 PCs on a hub, all 8 share ONE collision domain - any two transmitting simultaneously causes a collision. A switch creates a separate dedicated collision domain for EACH port. After replacing the hub with a switch, the 8 PCs each have their own dedicated full-duplex link, creating 8 separate collision domains. Since each collision domain has only one device, collisions become impossible, and CSMA/CD becomes unnecessary. This is the fundamental performance benefit of switches over hubs."
  },
  {
    "quizTitle": "Data Link Layer",
    "category": "WAN Topologies",
    "question": "A company has headquarters in Paris and single branches in Berlin, Madrid, and Rome. Currently hub-and-spoke, with all branches routing through Paris. Management wants branches to communicate directly without going through Paris for latency reasons. What topology change is needed and what is the cost implication?",
    "options": [
      "Convert to point-to-point by removing the Paris hub connection.",
      "Add direct WAN links between each pair of branch cities (Berlin-Madrid, Berlin-Rome, Madrid-Rome), creating a partial or full mesh - adding 3 additional WAN links but providing direct branch-to-branch connectivity.",
      "Convert to ring topology by connecting branches in a circle through Paris.",
      "No topology change is needed - routing protocols can solve latency without new links."
    ],
    "correctOption": 1,
    "explanation": "To enable direct branch-to-branch communication without going through Paris, WAN links must be added between branches. For 3 branches to be fully meshed: Berlin-Madrid, Berlin-Rome, and Madrid-Rome = 3 additional links. This converts the hub-and-spoke to a full mesh among branches (with Paris still connected to all). The mesh topology provides high availability and direct paths but at the cost of additional WAN circuits. In the original hub-and-spoke, traffic between Berlin and Madrid must route through Paris (headquarters) - adding direct links eliminates this unnecessary hop."
  },
  {
    "quizTitle": "Data Link Layer",
    "category": "Data Link Layer Standards",
    "question": "A student notes that both Physical layer standards and Data Link layer standards involve organizations like IEEE and ISO. What is the practical difference between what Physical layer standards and Data Link layer standards define?",
    "options": [
      "There is no difference - they define the same things at different speeds.",
      "Physical layer standards define the hardware signals, cable specs, and connector types for transmitting raw bits. Data Link layer standards define the frame formats, addressing, error detection, and media access control methods that govern how those bits are organized and accessed.",
      "Physical layer standards are only for wired networks; Data Link layer standards are only for wireless.",
      "Physical layer standards define software drivers; Data Link layer standards define hardware specifications."
    ],
    "correctOption": 1,
    "explanation": "Physical layer standards focus on transmitting raw bits - they specify electrical voltages, optical signal properties, cable characteristics, connector dimensions, and signal encoding (the hardware level). Data Link layer standards define the logical structure above the physical signals: frame formats (header and trailer fields), addressing schemes (MAC addresses), error detection methods (CRC), and media access control methods (CSMA/CD, token passing). Together they enable complete link-level communication: physical standards ensure bits arrive, data link standards ensure those bits are organized into meaningful frames with correct addressing and error checking."
  },
  {
    "quizTitle": "Data Link Layer",
    "category": "LAN and WAN Frames",
    "question": "A router has three interfaces: one Ethernet LAN interface, one PPP WAN serial interface, and one Frame-Relay WAN interface. When the same IP packet must be forwarded out each of these interfaces in turn (hypothetically), what is consistent and what changes about the Layer 2 framing?",
    "options": [
      "Everything about the frame is identical across all three interfaces - only the physical signals differ.",
      "The IP packet payload inside stays identical, but the Layer 2 frame format completely changes for each interface - Ethernet frame for the LAN port, PPP frame for the serial WAN, Frame-Relay frame for the Frame-Relay WAN.",
      "The MAC addresses stay the same but the frame format changes for each interface.",
      "The CRC error detection value is the only thing that changes between the three frame types."
    ],
    "correctOption": 1,
    "explanation": "The IP packet (Layer 3 payload) remains identical regardless of which interface it is forwarded through. However, the Layer 2 frame wrapping it completely changes to match each interface type: Ethernet frame (with MAC addresses, EtherType field, CRC) for the LAN interface; PPP frame (with its own header format suited for point-to-point serial links) for the WAN serial interface; Frame-Relay frame (with DLCI addressing for the Frame-Relay network) for the Frame-Relay interface. Each protocol performs media access control appropriate for its specified logical topology. This demonstrates how the Data Link layer provides media-specific services to IP."
  },
  {
    "quizTitle": "Data Link Layer",
    "category": "Purpose of the Data Link Layer",
    "question": "The module states the Data Link layer is responsible for communications between end-device network interface cards. A network engineer explains this only applies to direct NIC-to-NIC communication within a single Layer 2 domain. What happens at the boundaries between Layer 2 domains?",
    "options": [
      "Layer 2 communication continues unchanged across domain boundaries.",
      "Layer 2 communication is terminated at routers - routers operate at Layer 3, ending the Layer 2 frame at each router and starting a new Layer 2 frame on the other side appropriate for the next network segment.",
      "Layer 2 domains are extended by bridges that maintain the same frame from source to destination.",
      "Layer 2 communication jumps directly to Layer 4 when crossing router boundaries."
    ],
    "correctOption": 1,
    "explanation": "Layer 2 communication is bounded by routers. Within a single Layer 2 domain (LAN segment), frames travel NIC-to-NIC using MAC addresses. At a router (a Layer 2 domain boundary), the incoming frame is terminated - the router de-encapsulates the frame to expose the IP packet, makes a Layer 3 routing decision, and then creates a completely new Layer 2 frame for the outgoing interface. This new frame is appropriate for the next Layer 2 domain (which may use a completely different Layer 2 protocol). This is why MAC addressing is called local addressing - it is valid only within one Layer 2 domain."
  }
];