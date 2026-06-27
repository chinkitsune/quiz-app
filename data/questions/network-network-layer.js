// data/questions/network-network-layer.js
module.exports =
[
  {
    "quizTitle": "Network Layer",
    "category": "Network Layer Characteristics",
    "question": "A smart thermostat sends sensor data across the internet to a cloud server. Which OSI layer is responsible for addressing the thermostat and the server so the data can be routed across multiple networks?",
    "options": [
      "Layer 2 (Data Link) — it handles MAC addressing between devices.",
      "Layer 3 (Network) — it provides logical addressing and routing between networks.",
      "Layer 4 (Transport) — it establishes sessions and ensures delivery.",
      "Layer 1 (Physical) — it carries the signal over the medium."
    ],
    "correctOption": 1,
    "explanation": "The Network Layer (Layer 3) is responsible for providing services that allow end devices to exchange data across multiple networks. It assigns logical addresses (IP addresses) to devices and routes packets from source to destination. Layer 2 handles local delivery within one network segment using MAC addresses. Layer 4 manages end-to-end reliability. Layer 1 is only concerned with the physical transmission of bits."
  },
  {
    "quizTitle": "Network Layer",
    "category": "Network Layer Characteristics",
    "question": "Which four operations does the network layer perform when handling data?",
    "options": [
      "Framing, Error Detection, Flow Control, Synchronization",
      "Addressing, Encapsulation, Routing, De-encapsulation",
      "Segmentation, Sequencing, Acknowledgment, Reassembly",
      "Encoding, Multiplexing, Switching, Error Correction"
    ],
    "correctOption": 1,
    "explanation": "The network layer performs four key operations: (1) Addressing end devices — assigning IP addresses; (2) Encapsulation — wrapping the transport layer segment in an IP packet; (3) Routing — determining the best path to the destination; and (4) De-encapsulation — stripping the IP header when the packet arrives at its destination. The other options describe functions of the data link, transport, or physical layers."
  },
  {
    "quizTitle": "Network Layer",
    "category": "Network Layer Characteristics",
    "question": "A packet travels from a workstation in Tokyo to a server in London, passing through 12 routers. What happens to the source and destination IP addresses in the packet header along the way?",
    "options": [
      "Each router updates the source IP to its own address as the packet passes through.",
      "The destination IP is updated at each router to reflect the next hop.",
      "The source and destination IP addresses remain unchanged throughout the entire journey.",
      "The source IP is replaced by the destination IP once the packet reaches the halfway point."
    ],
    "correctOption": 2,
    "explanation": "IP addressing does not change from source to destination. The source and destination IP addresses embedded in the IP packet header remain constant as the packet traverses every router along the path. Routers use these addresses to make forwarding decisions, but they do not modify them. (Note: NAT is an exception that modifies addresses, but that is a special case.)"
  },
  {
    "quizTitle": "Network Layer",
    "category": "Network Layer Characteristics",
    "question": "IP is described as 'connectionless.' What does this mean in practice?",
    "options": [
      "IP requires a handshake before sending any data, similar to a phone call.",
      "IP sends packets without first establishing a dedicated connection with the destination.",
      "IP only operates within a single local area network and cannot connect to external hosts.",
      "IP requires both sender and receiver to be online simultaneously before data transfer begins."
    ],
    "correctOption": 1,
    "explanation": "IP is connectionless, meaning it sends packets to a destination without establishing any prior communication session. There are no synchronization messages, no acknowledgments, and no pre-notifications sent by IP itself. Each packet is treated independently. If connection-oriented communication is needed (like ensuring order and reliability), a higher-layer protocol like TCP at Layer 4 handles it — not IP."
  },
  {
    "quizTitle": "Network Layer",
    "category": "Network Layer Characteristics",
    "question": "A UDP video stream occasionally drops a few frames and never requests retransmission. Which IP characteristic explains why IP itself does not attempt to recover the lost data?",
    "options": [
      "IP is media independent, so it ignores lost frames on wireless media.",
      "IP is connectionless, meaning it does not track individual packet sessions.",
      "IP is best effort, meaning it does not guarantee delivery or resend lost packets.",
      "IP is fragmentation-aware, so dropped fragments are expected and acceptable."
    ],
    "correctOption": 2,
    "explanation": "IP operates on a 'best effort' basis — it makes no guarantee that packets will be delivered, arrive in order, or arrive at all. IP has no mechanism to request retransmission of lost packets and does not wait for acknowledgments. This reduced overhead is intentional for speed and efficiency. When reliable delivery is required, the transport layer (TCP) provides retransmission and acknowledgment — not IP."
  },
  {
    "quizTitle": "Network Layer",
    "category": "Network Layer Characteristics",
    "question": "A router receives an IPv4 packet but detects that the packets have arrived out of order. Which statement best describes IP's role in this situation?",
    "options": [
      "IP buffers the out-of-order packets and reorders them before delivery.",
      "IP sends a retransmission request to the source to re-send the missing packets.",
      "IP cannot reorder out-of-sequence packets; it relies on higher-layer protocols for this.",
      "IP uses its Header Checksum field to detect and automatically correct the sequence."
    ],
    "correctOption": 2,
    "explanation": "IP is unreliable by design — it cannot manage corrupt or undelivered packets, retransmit after errors, or realign out-of-sequence packets. IP must rely on other protocols (such as TCP at Layer 4) for these functions. This 'unreliability' is not a flaw — it is a deliberate design choice that keeps IP's overhead low, making it fast and flexible across any type of network."
  },
  {
    "quizTitle": "Network Layer",
    "category": "Network Layer Characteristics",
    "question": "An IP packet is transmitted over fiber optic cable in one segment and then over Wi-Fi in the next. Which IP characteristic makes this possible without modifying the packet?",
    "options": [
      "Best Effort — IP tries its best regardless of the medium.",
      "Connectionless — IP does not negotiate media types before sending.",
      "Media Independent — IP does not concern itself with the underlying media or frame type.",
      "Fragmentation — IP automatically resizes to fit different media."
    ],
    "correctOption": 2,
    "explanation": "IP is media independent — it does not concern itself with the type of frame required at the data link layer or the physical medium. An IP packet can be transported over copper, fiber optic, wireless, or any other medium. The data link layer below IP handles the media-specific framing (Ethernet, Wi-Fi, etc.), while IP stays consistent. This abstraction is what allows the internet to span so many different physical technologies."
  },
  {
    "quizTitle": "Network Layer",
    "category": "Network Layer Characteristics",
    "question": "A router connects an Ethernet LAN (MTU: 1500 bytes) to a legacy WAN link (MTU: 512 bytes). A 1400-byte IPv4 packet arrives from the LAN side. What must the router do?",
    "options": [
      "Drop the packet and send an error back to the source, since the WAN cannot handle it.",
      "Fragment the IPv4 packet into smaller units that fit within the WAN's 512-byte MTU.",
      "The router passes the packet unchanged — MTU differences are handled by Layer 2.",
      "The router buffers the packet until the WAN MTU increases to accommodate it."
    ],
    "correctOption": 1,
    "explanation": "When an IPv4 packet is larger than the MTU of the outgoing interface, the router fragments the packet into smaller units that fit within the MTU. The network layer receives MTU information from the data link layer and handles fragmentation at Layer 3. Fragmentation introduces latency, which is why path MTU discovery and avoiding unnecessary fragmentation is preferred. IPv6, notably, does NOT fragment packets at routers."
  },
  {
    "quizTitle": "Network Layer",
    "category": "Network Layer Characteristics",
    "question": "A network engineer is troubleshooting a large file transfer that seems slower than expected. The trace shows many small fragments arriving at the destination. What is the likely cause and impact?",
    "options": [
      "The destination is using IPv6 which always fragments for efficiency.",
      "IPv4 fragmentation is occurring somewhere in the path because a link has a smaller MTU; fragmentation causes additional latency.",
      "The source is using best-effort delivery and intentionally splitting the file for redundancy.",
      "The router is applying QoS and fragmenting lower-priority traffic on purpose."
    ],
    "correctOption": 1,
    "explanation": "IPv4 fragmentation occurs when a packet is larger than the MTU of a link it must traverse. The router splits the packet into fragments, each of which must be reassembled at the destination. Fragmentation causes latency because the destination must wait for all fragments and reassemble them before processing. This is why good network designs try to avoid fragmentation through path MTU discovery or consistent MTU sizing."
  },
  {
    "quizTitle": "Network Layer",
    "category": "IPv4 Packet Header",
    "question": "An IPv4 packet is received by a router, but the header is corrupted due to bit errors in transit. Which header field allows the router to detect this corruption?",
    "options": [
      "TTL — it decrements and detects if a packet has looped.",
      "Protocol — it identifies the upper-layer protocol and flags mismatches.",
      "Header Checksum — it is used specifically to detect corruption in the IPv4 header.",
      "Differentiated Services — it monitors packet quality and flags corrupted traffic."
    ],
    "correctOption": 2,
    "explanation": "The Header Checksum field in the IPv4 header is specifically used to detect corruption in the IPv4 header. When a router receives a packet, it recalculates the checksum and compares it to the value in the header. If they don't match, the packet is discarded. Note that the checksum only covers the IP header — not the payload. This is why upper-layer protocols (like TCP) have their own checksums for the data portion."
  },
  {
    "quizTitle": "Network Layer",
    "category": "IPv4 Packet Header",
    "question": "A packet is captured on the network. The Version field in the IP header contains the binary value 0100. What does this indicate?",
    "options": [
      "The packet is an IPv6 packet — 0100 is the IPv6 identifier.",
      "The packet is an IPv4 packet — 0100 in binary equals 4.",
      "The packet has 4 header fields total.",
      "The packet uses a 4-byte payload."
    ],
    "correctOption": 1,
    "explanation": "The Version field is a 4-bit field at the start of the IP header that identifies the IP version. IPv4 uses the binary value 0100 (decimal 4), while IPv6 uses 0110 (decimal 6). Routers and devices use this field to determine how to interpret the rest of the header, since IPv4 and IPv6 headers have different structures."
  },
  {
    "quizTitle": "Network Layer",
    "category": "IPv4 Packet Header",
    "question": "A VoIP call needs to be prioritized over regular web traffic on a congested router. Which IPv4 header field provides the mechanism to mark packets for Quality of Service handling?",
    "options": [
      "TTL — higher TTL values indicate higher-priority traffic.",
      "Protocol — voice traffic uses a different protocol number for priority.",
      "Differentiated Services (DS) — used for QoS marking via DiffServ or the older ToS field.",
      "Flow Label — used to flag packets requiring expedited forwarding."
    ],
    "correctOption": 2,
    "explanation": "The Differentiated Services field (also called the DS field or historically 'Type of Service') in the IPv4 header is used for Quality of Service (QoS). Network administrators can mark packets using DiffServ code points (DSCP) to indicate how routers should treat them. High-priority traffic like VoIP can be marked to receive preferential queuing. TTL is for loop prevention, Protocol identifies the upper-layer protocol, and Flow Label is an IPv6 concept."
  },
  {
    "quizTitle": "Network Layer",
    "category": "IPv4 Packet Header",
    "question": "The Protocol field in an IPv4 header contains a value identifying TCP. What is the purpose of this field?",
    "options": [
      "It tells the router which interface to forward the packet out of.",
      "It identifies the next higher-level protocol (e.g., TCP, UDP, ICMP) carried in the payload.",
      "It specifies which version of TCP the destination must use.",
      "It tracks the number of TCP segments contained within the IP packet."
    ],
    "correctOption": 1,
    "explanation": "The Protocol field in the IPv4 header identifies the next higher-level protocol encapsulated in the IP payload. Common values include TCP (6), UDP (17), and ICMP (1). When the destination host receives the packet and strips the IP header (de-encapsulation), it uses this field to know which upper-layer protocol should receive the data. Without this field, the host wouldn't know how to interpret the payload."
  },
  {
    "quizTitle": "Network Layer",
    "category": "IPv4 Packet Header — TTL",
    "question": "A Windows 11 host sends a packet with a TTL of 128. The packet passes through 5 routers before reaching its destination. What is the TTL value when the packet arrives at the destination?",
    "options": [
      "128 — TTL is only decremented when a packet is dropped.",
      "123 — each of the 5 routers decrements TTL by 1.",
      "0 — TTL is fully consumed after 5 hops.",
      "64 — TTL resets to the Linux default after leaving a Windows host."
    ],
    "correctOption": 1,
    "explanation": "TTL is decremented by 1 at each router. Starting at 128 and passing through 5 routers: 128 → 127 → 126 → 125 → 124 → 123. The destination receives the packet with TTL = 123. Windows 11 sets an initial TTL of 128, while Linux typically uses 64. TTL is a hop count — it counts Layer 3 devices (routers), not switches or other Layer 2 devices."
  },
  {
    "quizTitle": "Network Layer",
    "category": "IPv4 Packet Header — TTL",
    "question": "A packet is forwarded between routers in a misconfigured network and begins looping endlessly. What mechanism eventually stops this packet from circulating forever?",
    "options": [
      "The Header Checksum will eventually fail after too many recalculations.",
      "The TTL field reaches 0, and the router discards the packet and sends an ICMP message to the source.",
      "The Protocol field changes to indicate a looping packet, and routers stop forwarding it.",
      "Switches detect the loop via STP and block the port the packet came from."
    ],
    "correctOption": 1,
    "explanation": "TTL (Time to Live) is the anti-loop mechanism in IPv4. Each router decrements the TTL by 1. When TTL reaches 0, the router discards the packet and sends an ICMP 'Time Exceeded' message back to the original source. This prevents routing loops from consuming network bandwidth indefinitely. The TTL range is 0–255, and the initial value is set by the sending operating system (e.g., Windows sets 128, Linux sets 64)."
  },
  {
    "quizTitle": "Network Layer",
    "category": "IPv4 Packet Header — TTL",
    "question": "A traceroute tool intentionally exploits TTL behavior to map network paths. How does it work?",
    "options": [
      "It sends packets with TTL=255 so they reach every router and log themselves.",
      "It sends packets with incrementally increasing TTL values (1, 2, 3…), triggering ICMP Time Exceeded replies from each router along the path.",
      "It broadcasts a special discovery packet that all routers must respond to.",
      "It uses the Header Checksum field to tag packets so routers return path information."
    ],
    "correctOption": 1,
    "explanation": "Traceroute exploits TTL mechanics: the first packet has TTL=1, which is decremented to 0 at the first router, causing it to send back an ICMP Time Exceeded message — revealing its IP. The next packet has TTL=2, reaching the second router before expiring, and so on. By incrementally increasing TTL, traceroute discovers the IP address of each hop along the path to the destination, creating a complete route map."
  },
  {
    "quizTitle": "Network Layer",
    "category": "IPv6 Packet",
    "question": "A company is planning to migrate from IPv4 to IPv6. A key benefit they cite is eliminating NAT. Why does IPv6 eliminate the need for NAT?",
    "options": [
      "IPv6 uses MAC addresses instead of IP addresses, making NAT unnecessary.",
      "IPv6 has a vastly larger 128-bit address space, providing enough public addresses for every device without needing private addressing.",
      "IPv6 encrypts all traffic, so NAT is replaced by encryption for privacy.",
      "IPv6 routers handle address translation automatically without administrator configuration."
    ],
    "correctOption": 1,
    "explanation": "NAT was created as a workaround for IPv4 address exhaustion — by allowing many devices to share one public IP. IPv6 uses 128-bit addresses, providing approximately 3.4 × 10^38 unique addresses — enough to assign public addresses to every device on earth without sharing. With ample public addresses, every device can have its own globally routable address, eliminating the need for NAT and restoring true end-to-end connectivity."
  },
  {
    "quizTitle": "Network Layer",
    "category": "IPv6 Packet",
    "question": "How large is an IPv6 address compared to an IPv4 address?",
    "options": [
      "IPv6 uses 64 bits — twice the size of IPv4's 32 bits.",
      "IPv6 uses 128 bits — four times the size of IPv4's 32 bits.",
      "IPv6 uses 256 bits — eight times the size of IPv4's 32 bits.",
      "IPv6 uses 32 bits — the same size, but with a different format."
    ],
    "correctOption": 1,
    "explanation": "IPv4 uses 32-bit addresses (e.g., 192.168.1.1), while IPv6 uses 128-bit addresses (e.g., 2001:0db8:85a3::8a2e:0370:7334). This 4× increase in bit length produces an astronomically larger address space — approximately 3.4 × 10^38 unique addresses, compared to roughly 4.3 billion for IPv4. IPv6 was developed by IETF specifically to overcome IPv4 address depletion."
  },
  {
    "quizTitle": "Network Layer",
    "category": "IPv6 Packet",
    "question": "The IPv6 header is described as 'simplified but not smaller' compared to IPv4. What does this mean?",
    "options": [
      "IPv6 has more fields than IPv4, making it larger and more complex.",
      "IPv6 removed several IPv4 fields (like Header Checksum, Flags, Fragment Offset) to improve processing speed, but the fixed 40-byte size is larger than a minimal IPv4 header.",
      "IPv6 has the same fields as IPv4 but uses compression to reduce the header to 20 bytes.",
      "IPv6 is smaller because it removed all optional fields from the IPv4 header."
    ],
    "correctOption": 1,
    "explanation": "The IPv6 header is fixed at 40 bytes, which is larger than a minimal IPv4 header (20 bytes). However, IPv6 is 'simplified' because it removed several complex IPv4 fields — including Header Checksum, Flags, and Fragment Offset — that required per-hop processing. Optional functionality is moved to extension headers. This simplification makes IPv6 faster for routers to process, even though the base header is larger due to the 128-bit addresses."
  },
  {
    "quizTitle": "Network Layer",
    "category": "IPv6 Packet",
    "question": "A large IPv6 packet needs to be sent over a link with a small MTU. What happens?",
    "options": [
      "The router fragments the IPv6 packet just like it would with IPv4.",
      "IPv6 routers do not fragment packets; fragmentation must be handled by the source host.",
      "The packet is dropped silently with no notification to the source.",
      "The IPv6 header's Hop Limit field is adjusted to accommodate the smaller MTU."
    ],
    "correctOption": 1,
    "explanation": "Unlike IPv4, IPv6 routers do NOT fragment packets. If an IPv6 packet is too large for a link's MTU, the router drops it and sends an ICMPv6 'Packet Too Big' message back to the source. The source is then responsible for sending smaller packets. This design decision improves router performance (no fragmentation processing at every hop) and is managed through Path MTU Discovery at the endpoints."
  },
  {
    "quizTitle": "Network Layer",
    "category": "IPv6 Packet",
    "question": "What is the purpose of the IPv6 'Hop Limit' field?",
    "options": [
      "It limits the number of extension headers allowed in an IPv6 packet.",
      "It specifies the maximum payload size the destination can accept.",
      "It serves the same anti-loop function as TTL in IPv4 — decremented by each router, packet dropped at 0.",
      "It counts the number of switches the packet has passed through."
    ],
    "correctOption": 2,
    "explanation": "The IPv6 Hop Limit field directly replaces the IPv4 TTL field and serves the same purpose: preventing packets from looping forever in a misconfigured network. Each router decrements the Hop Limit by 1. If it reaches 0 before the packet arrives at its destination, the router discards the packet and sends an ICMPv6 error back to the source. The name 'Hop Limit' is considered more descriptive than 'Time to Live' since it is actually a hop count, not a time measurement."
  },
  {
    "quizTitle": "Network Layer",
    "category": "IPv6 Packet",
    "question": "Which field in the IPv6 header is used for Quality of Service marking — equivalent to the Differentiated Services field in IPv4?",
    "options": [
      "Flow Label",
      "Next Header",
      "Traffic Class",
      "Payload Length"
    ],
    "correctOption": 2,
    "explanation": "The Traffic Class field in the IPv6 header is the equivalent of the Differentiated Services (DS) field in IPv4. It is used for QoS marking, allowing routers to prioritize certain types of traffic (like VoIP or video) over others. The Flow Label is a separate, IPv6-specific 20-bit field that tells routers to handle packets with the same flow label identically. Next Header identifies the upper-layer protocol (like TTL's Protocol field counterpart in IPv4)."
  },
  {
    "quizTitle": "Network Layer",
    "category": "IPv6 Packet",
    "question": "IPv6 introduces 'Extension Headers.' Where are they located in the packet, and what is their purpose?",
    "options": [
      "Before the IPv6 main header — they provide routing information for routers.",
      "Between the IPv6 header and the payload — they provide optional network layer information such as fragmentation, security, or mobility.",
      "After the payload — they contain checksums and error-correction data.",
      "They replace the main IPv6 header when special processing is needed."
    ],
    "correctOption": 1,
    "explanation": "IPv6 Extension Headers (EH) are placed between the IPv6 main header and the payload. They are optional and provide additional network layer functionality when needed, including fragmentation (for source-based fragmentation), security (IPsec), and mobility support. By moving these optional features out of the fixed main header, the core header is streamlined for fast router processing, while complex options remain available when required."
  },
  {
    "quizTitle": "Network Layer",
    "category": "IPv6 Packet",
    "question": "What binary value is found in the IPv6 header's Version field, and what does it represent in decimal?",
    "options": [
      "0100 — decimal 4, indicating the packet version.",
      "0110 — decimal 6, identifying this as an IPv6 packet.",
      "1000 — decimal 8, the next version after IPv4.",
      "0010 — decimal 2, indicating a dual-stack packet."
    ],
    "correctOption": 1,
    "explanation": "The Version field is 4 bits wide. For IPv6, it contains 0110, which equals decimal 6. For IPv4, the same field contains 0100 (decimal 4). This is the very first field a device reads when it receives an IP packet — it immediately tells the device whether the packet is IPv4 or IPv6, and therefore how to interpret all subsequent fields in the header."
  },
  {
    "quizTitle": "Network Layer",
    "category": "IPv6 Packet",
    "question": "Which of the following is a stated limitation of IPv4 that led to the development of IPv6?",
    "options": [
      "IPv4 cannot support Quality of Service marking for prioritized traffic.",
      "IPv4 headers are too small to carry sufficient routing information.",
      "IPv4 address depletion — the 32-bit address space is essentially exhausted.",
      "IPv4 does not support fragmentation across mixed-media networks."
    ],
    "correctOption": 2,
    "explanation": "The three major limitations of IPv4 that drove IPv6 development are: (1) IPv4 address depletion — the 32-bit space (~4.3 billion addresses) has been essentially exhausted globally; (2) Lack of end-to-end connectivity — NAT broke direct host-to-host communication; and (3) Increased network complexity — NAT introduced latency and troubleshooting challenges as a side effect. IPv6's 128-bit address space directly solves the depletion problem."
  },
  {
    "quizTitle": "Network Layer",
    "category": "How a Host Routes",
    "question": "A laptop at 10.0.5.20/24 wants to send data to a printer at 10.0.5.45/24. How does the laptop determine where to send the packet?",
    "options": [
      "The laptop sends it to the default gateway, which then looks up the printer's address.",
      "The laptop performs an AND of both IP addresses with its subnet mask; since results match (10.0.5.0), the printer is local and the packet is sent directly on the LAN.",
      "The laptop broadcasts the packet to all hosts, and the printer responds.",
      "The laptop consults DNS to find the printer's MAC address before sending."
    ],
    "correctOption": 1,
    "explanation": "A host determines whether a destination is local or remote by ANDing both its own IP address and the destination IP address with its subnet mask. If both results are the same network address, the destination is on the same LAN and the packet is sent directly. Here: 10.0.5.20 AND 255.255.255.0 = 10.0.5.0, and 10.0.5.45 AND 255.255.255.0 = 10.0.5.0. They match — so local delivery is used."
  },
  {
    "quizTitle": "Network Layer",
    "category": "How a Host Routes",
    "question": "A desktop PC at 192.168.10.50/24 tries to reach a website at 8.8.8.8. What does the host do first?",
    "options": [
      "Sends the packet directly to 8.8.8.8 — all IP addresses are reachable directly.",
      "Detects that 8.8.8.8 is on a different network and forwards the packet to its default gateway.",
      "Sends an ARP request for 8.8.8.8's MAC address before sending the packet.",
      "Fragments the packet because internet destinations require smaller packets."
    ],
    "correctOption": 1,
    "explanation": "The host ANDs 8.8.8.8 with its mask 255.255.255.0, giving 8.8.8.0 — which does NOT equal its own network 192.168.10.0. Since the destination is on a different network (remote), the host forwards the packet to its default gateway. The default gateway (router) then handles routing the packet toward 8.8.8.8. Hosts cannot directly send to remote networks — that is the router's job."
  },
  {
    "quizTitle": "Network Layer",
    "category": "How a Host Routes",
    "question": "A host sends a ping to 127.0.0.1. Where does this packet go?",
    "options": [
      "To the default gateway, which pings itself on behalf of the host.",
      "To the nearest DNS server to test connectivity.",
      "It never leaves the host — it loops back internally to test the local TCP/IP stack.",
      "To the broadcast address of the local subnet."
    ],
    "correctOption": 2,
    "explanation": "127.0.0.1 is the IPv4 loopback address (::1 in IPv6). Packets sent to this address are processed entirely within the host's network stack and never transmitted on any physical interface. Hosts can send packets to themselves to test whether TCP/IP is installed and operational. This is one of three categories of host packet destinations: itself (loopback), local hosts (same LAN), and remote hosts (different network)."
  },
  {
    "quizTitle": "Network Layer",
    "category": "How a Host Routes",
    "question": "A host has no default gateway configured. What is the consequence?",
    "options": [
      "The host cannot communicate with any device, including those on its own LAN.",
      "The host can still reach remote networks by using DNS as an alternative gateway.",
      "The host can communicate with devices on its local LAN, but traffic destined for other networks cannot leave the LAN.",
      "The host automatically broadcasts for a gateway and will find one dynamically."
    ],
    "correctOption": 2,
    "explanation": "Without a default gateway, a host has no way to send traffic to networks outside its own subnet. It can still communicate directly with devices on the same LAN (same subnet), because those packets don't need to be routed. However, any traffic destined for a remote network — like the internet or another subnet — will fail because the host doesn't know where to send it. This is a common misconfiguration to check during troubleshooting."
  },
  {
    "quizTitle": "Network Layer",
    "category": "How a Host Routes",
    "question": "What are the two ways a host can learn its default gateway in IPv4?",
    "options": [
      "Via ARP broadcast, or by reading it from the DNS server.",
      "Statically configured by an administrator, or dynamically received from a DHCP server.",
      "Via a routing protocol like OSPF, or by receiving a Router Advertisement.",
      "By reading the routing table of the nearest router, or via a traceroute."
    ],
    "correctOption": 1,
    "explanation": "In IPv4, a host learns its default gateway either through static configuration (an administrator manually types the gateway IP) or dynamically via DHCP, which provides the IP address, subnet mask, default gateway, and DNS server all in one lease. For IPv6, the default gateway is provided via Router Solicitation/Advertisement (RS/RA) messages, or it can also be configured manually."
  },
  {
    "quizTitle": "Network Layer",
    "category": "How a Host Routes",
    "question": "A network technician runs 'route print' on a Windows PC. What three sections does this command display?",
    "options": [
      "ARP Table, DNS Cache, and Active Connections",
      "Interface List, IPv4 Routing Table, and IPv6 Routing Table",
      "Open Ports, Running Services, and Network Adapters",
      "Default Gateway, Subnet Mask, and DNS Servers"
    ],
    "correctOption": 1,
    "explanation": "The Windows command 'route print' (or 'netstat -r') displays three sections: the Interface List (all available network interfaces and their MAC addresses), the IPv4 Routing Table (showing IPv4 routes including the default gateway), and the IPv6 Routing Table (showing IPv6 routes). These tables show the host's own routing decisions — every device, not just routers, maintains a local routing table."
  },
  {
    "quizTitle": "Network Layer",
    "category": "How a Host Routes",
    "question": "In IPv6, how does a host learn about its default gateway?",
    "options": [
      "It broadcasts a DHCP Discover message to find the nearest router.",
      "The gateway is always the lowest IP address on the subnet.",
      "Via Router Solicitation (RS) messages or manual static configuration.",
      "IPv6 hosts do not use default gateways — they route packets themselves."
    ],
    "correctOption": 2,
    "explanation": "In IPv6, a host discovers its default gateway through ICMPv6 Router Solicitation (RS) messages — the host sends an RS, and routers respond with Router Advertisement (RA) messages that include the default gateway address and network prefix. Alternatively, the gateway can be manually configured (statically). This differs from IPv4, where DHCP is the most common dynamic method for learning the default gateway."
  },
  {
    "quizTitle": "Network Layer",
    "category": "How a Host Routes",
    "question": "What is a requirement for a device to function as a default gateway for a LAN?",
    "options": [
      "It must have a public IP address on its LAN-facing interface.",
      "It must have an IP address in the same range as the LAN hosts, be able to accept LAN traffic, and forward it to other networks.",
      "It must be a dedicated hardware router — Layer 3 switches cannot serve as default gateways.",
      "It must be configured with a static IP on every subnet in the organization."
    ],
    "correctOption": 1,
    "explanation": "For a device to serve as a default gateway, it must: (1) have an IP address in the same range as the LAN hosts so they can reach it, (2) be able to accept data from the LAN, and (3) be capable of routing traffic to other networks. Both dedicated routers AND Layer 3 switches can serve as default gateways. A device with a bad or unreachable default gateway causes all remote traffic from that LAN to fail."
  },
  {
    "quizTitle": "Network Layer",
    "category": "Router Routing Tables",
    "question": "A router has a directly connected interface on the 10.1.1.0/24 network. How does this route appear in the routing table?",
    "options": [
      "It must be manually entered as a static route by the administrator.",
      "It is automatically added to the routing table as a directly connected route when the interface is active and has an IP address.",
      "It is learned via a dynamic routing protocol from neighboring routers.",
      "It is only added after the router receives traffic on that interface."
    ],
    "correctOption": 1,
    "explanation": "Directly connected routes are automatically added to the routing table by the router when a network interface is configured with an IP address and is active (up/up). No manual configuration is needed. These represent networks physically attached to the router. If the interface goes down, the directly connected route is automatically removed. This is the most reliable route type since the router has direct knowledge of the network."
  },
  {
    "quizTitle": "Network Layer",
    "category": "Router Routing Tables",
    "question": "A network administrator manually configures a route to 172.30.0.0/24 on a router that doesn't have a physical connection to that network. What type of route is this?",
    "options": [
      "Directly connected route — added because of the /24 prefix.",
      "Dynamic route — learned automatically from neighboring routers.",
      "Static route — manually configured by the administrator.",
      "Default route — used when no other route matches."
    ],
    "correctOption": 2,
    "explanation": "A static route is a route to a remote network that is manually configured by a network administrator. It does not change automatically if the network topology changes — the administrator must update it manually. Static routes are appropriate for small, stable networks or for specific paths that should never change. They can also be used alongside dynamic routing protocols for specific purposes like configuring a default route."
  },
  {
    "quizTitle": "Network Layer",
    "category": "Router Routing Tables",
    "question": "A company's network spans 20 sites that frequently change their subnet configurations. Which routing approach is best suited for this environment?",
    "options": [
      "Static routing — more predictable and easier to manage at scale.",
      "Dynamic routing — routers automatically discover networks, maintain updates, and find new best paths when topology changes.",
      "Default routing only — all traffic is forwarded to a central hub.",
      "Directly connected routing — no configuration needed if interfaces are active."
    ],
    "correctOption": 1,
    "explanation": "Dynamic routing protocols (like OSPF, EIGRP, BGP) are ideal for large, frequently changing networks. Routers automatically discover remote networks, maintain up-to-date routing information, choose the best path to each destination, and adapt when topology changes occur. Static routing in a 20-site network with frequent changes would require constant manual updates on every router — error-prone and time-consuming. Dynamic routing handles this automatically."
  },
  {
    "quizTitle": "Network Layer",
    "category": "Router Routing Tables",
    "question": "A router receives a packet destined for 203.0.113.50, but it has no specific route to that network in its routing table. What happens if a default route is configured?",
    "options": [
      "The router drops the packet and sends an ICMP Destination Unreachable back to the source.",
      "The router forwards the packet according to the default route, which acts as a 'last resort' for unmatched destinations.",
      "The router broadcasts to all interfaces to find the next hop for 203.0.113.50.",
      "The router waits for a dynamic routing update that includes a route to 203.0.113.50."
    ],
    "correctOption": 1,
    "explanation": "A default route (often written as 0.0.0.0/0) matches ANY destination that doesn't have a more specific route in the routing table. It acts as a 'last resort' or 'gateway of last resort.' This is how edge routers typically send all internet-bound traffic to an ISP — the router may only know about internal networks specifically, and everything else gets forwarded via the default route. Without a default route, unmatched packets are dropped."
  },
  {
    "quizTitle": "Network Layer",
    "category": "Router Routing Tables",
    "question": "What are the three types of routes found in a router's routing table?",
    "options": [
      "Unicast, Multicast, and Broadcast routes",
      "Directly Connected, Remote (Static or Dynamic), and Default routes",
      "Layer 2, Layer 3, and Layer 4 routes",
      "Internal, External, and Loopback routes"
    ],
    "correctOption": 1,
    "explanation": "A router's routing table contains three categories: (1) Directly Connected routes — automatically added for networks physically attached to active interfaces; (2) Remote routes — for networks not directly connected, learned either manually via static routes or automatically via dynamic routing protocols; and (3) Default route — a catch-all route that forwards packets when no specific match exists in the table, acting as the last resort."
  },
  {
    "quizTitle": "Network Layer",
    "category": "Router Routing Tables",
    "question": "Static routing is described as 'good for small non-redundant networks.' Why is it NOT recommended for large networks with redundant paths?",
    "options": [
      "Static routes use too much memory on large routers.",
      "Static routes must be manually updated whenever the topology changes, making them impractical for large, dynamic environments.",
      "Static routes cannot forward packets to directly connected networks.",
      "Static routes only support IPv4 and not IPv6."
    ],
    "correctOption": 1,
    "explanation": "Static routes require manual administrator intervention every time the network topology changes (link failure, new subnet added, etc.). In a small, stable network this is manageable. In a large network with many routers and redundant paths, manually updating routes on every affected router is time-consuming and error-prone. Dynamic routing protocols solve this by automatically propagating route changes across all routers in the network."
  },
  {
    "quizTitle": "Network Layer",
    "category": "Router Routing Tables",
    "question": "A router performs a routing table lookup for a packet destined to 192.168.5.25. It finds two entries: a specific route to 192.168.5.0/24 and a default route 0.0.0.0/0. Which route does it use?",
    "options": [
      "The default route — it was configured first and takes priority.",
      "The most specific matching route — 192.168.5.0/24, because it has a longer prefix and is a more precise match.",
      "Both routes are used equally via load balancing.",
      "The default route — it always overrides specific routes for efficiency."
    ],
    "correctOption": 1,
    "explanation": "Routers use 'longest prefix match' when selecting a route. The most specific route (longest matching prefix) takes priority. 192.168.5.0/24 (/24 = 24-bit match) is more specific than 0.0.0.0/0 (/0 = 0-bit match, matches everything). So the router uses the 192.168.5.0/24 route. The default route is only used when NO more specific route matches — hence the term 'last resort route.'"
  },
  {
    "quizTitle": "Network Layer",
    "category": "Router Routing Tables",
    "question": "PC1 wants to send a packet to PC2 on a different subnet. The router looks up its routing table. What information from the routing table does it use to forward the packet?",
    "options": [
      "The destination MAC address of PC2.",
      "The next-hop IP address (gateway) for the destination network, and the egress interface to send it out.",
      "The source IP address of PC1 to determine the return path.",
      "The TTL value remaining in the packet."
    ],
    "correctOption": 1,
    "explanation": "When a router performs a routing table lookup, it finds the matching route entry which contains: the destination network, the next-hop IP address (the IP of the next router toward the destination), and the egress interface (the local interface to send the packet out of). The router then performs ARP on the egress interface to get the MAC address of the next hop and forwards the frame. The source IP is unchanged; TTL is decremented but not used for routing decisions."
  },
  {
    "quizTitle": "Network Layer",
    "category": "Applied / Code Scenario",
    "question": "A Python function checks:\n\nif (src_network == dst_network):\n    forward_locally()\nelse:\n    send_to_default_gateway()\n\nWhat networking concept does this code implement?",
    "options": [
      "Fragmentation decision — splitting packets based on network type.",
      "TTL decrement — deciding whether to drop a packet.",
      "Host forwarding decision — determining if the destination is local or remote.",
      "Dynamic routing — automatically choosing the best path."
    ],
    "correctOption": 2,
    "explanation": "This code models the host forwarding decision process. A host ANDs its own IP and the destination IP with the subnet mask to derive network addresses. If they match (same network), the packet is forwarded locally on the LAN. If they don't match (different network), the packet is sent to the default gateway for routing. This logic runs on every end device — not just routers — every time a packet is sent."
  },
  {
    "quizTitle": "Network Layer",
    "category": "Applied / Code Scenario",
    "question": "Examine this pseudocode representing a router's forwarding logic:\n\nfor route in routing_table:\n    if destination matches route.network:\n        forward(packet, route.next_hop)\n        break\nelse:\n    if default_route exists:\n        forward(packet, default_route.next_hop)\n    else:\n        drop(packet)\n\nWhat does the 'else' clause after the loop represent?",
    "options": [
      "The router looping back to check the routing table again.",
      "The default route being used when no specific route in the table matches the destination.",
      "Fragmentation occurring when the packet is too large.",
      "The TTL expiration handler that sends an ICMP message."
    ],
    "correctOption": 1,
    "explanation": "The 'else' clause executes when the loop completes without finding a match — meaning no specific route in the routing table matches the destination. In this case, the router falls back to the default route (0.0.0.0/0) if one is configured, and forwards the packet there. If no default route exists either, the packet is dropped. This is exactly how real router forwarding works: specific routes first, default route as last resort."
  },
  {
    "quizTitle": "Network Layer",
    "category": "Applied / Code Scenario",
    "question": "A packet header is parsed and the following field is read: version_bits = '0110'. What protocol version is this packet, and what is the decimal value of version_bits?",
    "options": [
      "IPv4 — decimal value 4.",
      "IPv6 — decimal value 6.",
      "IPv8 — decimal value 8, a future version.",
      "IPv4 — 0110 is just a binary pattern with no decimal meaning in networking."
    ],
    "correctOption": 1,
    "explanation": "Binary 0110 = 0×8 + 1×4 + 1×2 + 0×1 = 6 in decimal. A Version field value of 6 identifies this as an IPv6 packet. IPv4 packets have Version = 0100 (decimal 4). The Version field is always the first 4 bits of an IP header and is the first thing a device reads to know how to interpret everything that follows. This distinction is critical when devices must handle both IPv4 and IPv6 (dual-stack)."
  },
  {
    "quizTitle": "Network Layer",
    "category": "Applied / Code Scenario",
    "question": "A script simulates TTL behavior:\n\nttl = 64\nhops = [RouterA, RouterB, RouterC, RouterD, RouterE]\nfor hop in hops:\n    ttl -= 1\n    if ttl == 0:\n        print('Packet dropped at', hop)\n        break\n\nAt which router does the packet get dropped?",
    "options": [
      "RouterC — TTL reaches 0 after 3 decrements.",
      "RouterD — TTL reaches 1 after 4 decrements, then hits 0 at RouterE... wait, RouterE is the 5th.",
      "RouterE — TTL reaches 0 after the 5th decrement.",
      "The packet is never dropped — TTL 64 is more than enough for 5 hops."
    ],
    "correctOption": 3,
    "explanation": "Starting TTL = 64. After RouterA: 63. After RouterB: 62. After RouterC: 61. After RouterD: 60. After RouterE: 59. The loop checks `if ttl == 0` AFTER each decrement. With only 5 hops and a starting TTL of 64, TTL never reaches 0 — so the packet is NOT dropped. The correct answer is D (never dropped) since 64 > 5. However, option C is listed — the packet survives all 5 hops with TTL=59 remaining. The key lesson: TTL=64 handles up to 64 hops before the packet is dropped."
  },
  {
    "quizTitle": "Network Layer",
    "category": "Applied / Code Scenario",
    "question": "A packet analyzer reads an IPv4 header and extracts: Protocol = 6. What does this tell you?",
    "options": [
      "The packet is IPv6 because the Protocol field value equals 6.",
      "The payload contains a TCP segment — Protocol 6 identifies TCP.",
      "The packet has 6 extension headers appended.",
      "The packet's TTL has been decremented 6 times."
    ],
    "correctOption": 1,
    "explanation": "The Protocol field in the IPv4 header identifies the upper-layer protocol carried in the payload. Protocol number 6 = TCP. Other common values: 17 = UDP, 1 = ICMP. This field is how the destination host knows which protocol stack to hand the payload to after removing the IP header during de-encapsulation. It should not be confused with the Version field — Protocol=6 does NOT mean IPv6."
  },
  {
    "quizTitle": "Network Layer",
    "category": "Applied / Code Scenario",
    "question": "Two hosts are compared in code:\n\nhost_a_network = ip_and(10.5.20.100, 255.255.0.0)\nhost_b_network = ip_and(10.5.30.200, 255.255.0.0)\nif host_a_network == host_b_network:\n    print('Same network')\n\nWhat prints, and why?",
    "options": [
      "'Same network' — both results are 10.5.0.0 under a /16 mask.",
      "Nothing — the third octets differ (20 vs 30), so they're on different networks.",
      "'Same network' — any two addresses starting with 10.x are always on the same network.",
      "Nothing — you need a /24 mask to compare networks correctly."
    ],
    "correctOption": 0,
    "explanation": "ANDing 10.5.20.100 with 255.255.0.0 (/16): first two octets are kept (10.5), last two are zeroed → 10.5.0.0. ANDing 10.5.30.200 with 255.255.0.0: same result → 10.5.0.0. Both network addresses are equal, so 'Same network' is printed. A /16 mask only uses the first 16 bits (first two octets) for the network portion — the third octet (20 vs 30) is part of the host portion and is zeroed out by the mask."
  },
  {
    "quizTitle": "Network Layer",
    "category": "Network Layer Characteristics — Recall",
    "question": "Which two IP versions are listed as the 'principle network layer communication protocols'?",
    "options": [
      "IPv3 and IPv4",
      "IPv4 and IPv5",
      "IPv4 and IPv6",
      "IPv6 and IPv8"
    ],
    "correctOption": 2,
    "explanation": "IPv4 and IPv6 are the two principal network layer communication protocols. IPv4 has been the dominant protocol since the 1980s. IPv6 was developed by IETF to overcome IPv4's limitations, primarily address exhaustion. IPv5 was an experimental streaming protocol that was never deployed publicly. There is no IPv3 or IPv8 in common use."
  },
  {
    "quizTitle": "Network Layer",
    "category": "IPv4 Packet Header — Recall",
    "question": "Which field in the IPv4 header identifies the next higher-layer protocol carried in the payload?",
    "options": [
      "Version",
      "TTL",
      "Protocol",
      "Header Checksum"
    ],
    "correctOption": 2,
    "explanation": "The Protocol field in the IPv4 header identifies what Layer 4 protocol is encapsulated in the payload — for example, TCP (6), UDP (17), or ICMP (1). This allows the receiving host to pass the data to the correct protocol handler after stripping the IP header. In IPv6, the equivalent field is called 'Next Header' and serves the same function."
  },
  {
    "quizTitle": "Network Layer",
    "category": "IPv4 Packet Header — Recall",
    "question": "What is the maximum TTL value that can be set in an IPv4 packet header?",
    "options": [
      "64",
      "128",
      "255",
      "512"
    ],
    "correctOption": 2,
    "explanation": "The TTL field is 8 bits wide, giving a value range of 0–255. The maximum is 255. In practice, operating systems use lower starting values: Windows typically sets TTL = 128, and Linux/Unix systems typically set TTL = 64. The maximum of 255 means a packet could theoretically pass through up to 255 routers before being discarded — more than enough for any real-world network path."
  },
  {
    "quizTitle": "Network Layer",
    "category": "IPv6 Packet — Recall",
    "question": "How many bytes is the fixed IPv6 header?",
    "options": [
      "20 bytes",
      "32 bytes",
      "40 bytes",
      "64 bytes"
    ],
    "correctOption": 2,
    "explanation": "The IPv6 header is fixed at 40 bytes (320 bits). Unlike IPv4, which has a variable-length header (minimum 20 bytes), IPv6 uses a fixed-size header. This fixed size simplifies and speeds up router processing because routers always know exactly where each field is located without needing to parse the header length first. Optional IPv6 features are placed in extension headers rather than the main header."
  },
  {
    "quizTitle": "Network Layer",
    "category": "IPv6 Packet — Recall",
    "question": "Which IPv4 header fields were REMOVED in the IPv6 header to improve performance?",
    "options": [
      "Source Address, Destination Address, and TTL",
      "Version, Protocol, and QoS",
      "Flags, Fragment Offset, and Header Checksum",
      "Payload Length, Flow Label, and Traffic Class"
    ],
    "correctOption": 2,
    "explanation": "Three IPv4 fields were removed in IPv6 to improve processing efficiency: (1) Flags — IPv6 routers don't fragment packets, so fragmentation flags are unnecessary; (2) Fragment Offset — same reason; and (3) Header Checksum — removed because modern link-layer protocols (Ethernet, Wi-Fi) already perform their own error checking, making a redundant IP-level checksum an unnecessary overhead. These removals allow routers to process IPv6 headers faster."
  },
  {
    "quizTitle": "Network Layer",
    "category": "How a Host Routes — Recall",
    "question": "What Windows command displays the PC's routing table?",
    "options": [
      "ipconfig /all",
      "arp -a",
      "route print",
      "ping 127.0.0.1"
    ],
    "correctOption": 2,
    "explanation": "'route print' (or 'netstat -r') displays the full routing table on a Windows host, including the Interface List, IPv4 Routing Table, and IPv6 Routing Table. 'ipconfig /all' shows IP configuration (IP address, mask, gateway, DNS) but not the routing table. 'arp -a' shows the ARP cache (IP-to-MAC mappings). 'ping 127.0.0.1' tests the local TCP/IP stack but shows no routing information."
  },
  {
    "quizTitle": "Network Layer",
    "category": "Router Routing Tables — Recall",
    "question": "Which type of route is automatically added to a router's routing table without any manual configuration?",
    "options": [
      "Static route",
      "Default route",
      "Dynamic route",
      "Directly connected route"
    ],
    "correctOption": 3,
    "explanation": "Directly connected routes are automatically added by the router when a network interface is configured with an IP address and the interface is active (up/up state). No manual configuration by the administrator is needed. These routes represent networks physically attached to the router. Static and default routes require manual entry; dynamic routes require a routing protocol to be configured and running."
  },
  {
    "quizTitle": "Network Layer",
    "category": "Router Routing Tables — Recall",
    "question": "Which routing type is described as 'good for small non-redundant networks' but requires manual updates when topology changes?",
    "options": [
      "Dynamic routing",
      "Default routing",
      "Static routing",
      "Directly connected routing"
    ],
    "correctOption": 2,
    "explanation": "Static routing requires the administrator to manually configure every route and manually update them when the network topology changes. This makes static routing practical and simple for small, stable, non-redundant networks — but impractical for large or frequently changing environments. Static routes can also be used alongside dynamic protocols, for example to configure a default route that a dynamic protocol then advertises to other routers."
  },
  {
    "quizTitle": "Network Layer",
    "category": "IPv6 Packet — Recall",
    "question": "What is the IPv6 loopback address equivalent to IPv4's 127.0.0.1?",
    "options": [
      "::0",
      "::1",
      "fe80::1",
      "2001::1"
    ],
    "correctOption": 1,
    "explanation": "The IPv6 loopback address is ::1 (which is the full form of 0000:0000:0000:0000:0000:0000:0000:0001). It is the exact equivalent of IPv4's 127.0.0.1 and serves the same purpose: testing the local TCP/IP stack without transmitting any packet on the physical network. ::0 is the unspecified address. fe80::/10 is the link-local range. 2001:: is part of the global unicast range."
  },
  {
    "quizTitle": "Network Layer",
    "category": "Network Layer Characteristics — Recall",
    "question": "Which organization developed IPv6?",
    "options": [
      "IEEE — they develop all networking standards.",
      "IANA — they manage IP address allocation globally.",
      "IETF — Internet Engineering Task Force developed IPv6.",
      "ITU — they coordinate international telecommunications."
    ],
    "correctOption": 2,
    "explanation": "IPv6 was developed by the Internet Engineering Task Force (IETF). The IETF is responsible for developing and promoting voluntary internet standards, particularly the protocols that make up the internet protocol suite. IPv6 is defined in RFC 8200 (and originally RFC 2460). IANA manages IP address allocation. IEEE develops standards like Ethernet and Wi-Fi. ITU focuses on telecommunications policy."
  },
  {
    "quizTitle": "Network Layer",
    "category": "Router Routing Tables",
    "question": "A dynamic routing protocol is configured on all routers in a network. A new subnet is added to one router. What happens across the rest of the network?",
    "options": [
      "The new subnet is invisible to other routers until an administrator manually adds the route.",
      "The routing protocol automatically propagates the new route to all other routers, updating their routing tables.",
      "The new subnet is only reachable via the default route on other routers.",
      "The other routers must be rebooted before they recognize the new subnet."
    ],
    "correctOption": 1,
    "explanation": "Dynamic routing protocols automatically discover remote networks and maintain up-to-date routing information across all participating routers. When a new subnet is added, the routing protocol propagates this information to all other routers, and they update their routing tables accordingly. This 'convergence' happens automatically and is the primary advantage of dynamic routing over static routing in large or changing networks."
  },
  {
    "quizTitle": "Network Layer",
    "category": "Network Layer Characteristics",
    "question": "Which layer does the IP packet travel through at each router as it traverses the network?",
    "options": [
      "Only Layer 2 — routers only examine the frame header.",
      "Only Layer 4 — routers inspect TCP/UDP ports for forwarding decisions.",
      "Layer 3 — the IP packet is examined by all Layer 3 devices along the path.",
      "Layer 7 — routers perform deep packet inspection on all traffic."
    ],
    "correctOption": 2,
    "explanation": "The IP packet header is examined by every Layer 3 device (router) it passes through. Routers read the destination IP address from the Layer 3 header to make forwarding decisions. They also decrement the TTL field. Layer 2 (frame) headers are stripped and rewritten at each router hop, but the Layer 3 IP header (source and destination IP addresses) remains consistent throughout the journey."
  },
  {
    "quizTitle": "Network Layer",
    "category": "IPv4 vs IPv6 Comparison",
    "question": "A network engineer compares IPv4 and IPv6. Which of the following correctly identifies a difference between the two?",
    "options": [
      "IPv4 uses 128-bit addresses; IPv6 uses 32-bit addresses.",
      "IPv4 routers can fragment packets; IPv6 routers cannot fragment packets.",
      "IPv6 uses a Header Checksum field for error detection; IPv4 does not.",
      "IPv4 uses Hop Limit; IPv6 uses TTL for loop prevention."
    ],
    "correctOption": 1,
    "explanation": "A key difference: IPv4 routers CAN fragment packets when they encounter a smaller MTU, while IPv6 routers CANNOT fragment packets — fragmentation in IPv6 must be done by the source host. Additionally: IPv4 uses 32-bit addresses (IPv6 uses 128-bit, not the other way around); IPv4 HAS a Header Checksum (IPv6 removed it); IPv4 uses TTL and IPv6 uses Hop Limit (the reverse of option D)."
  },
  {
    "quizTitle": "Network Layer",
    "category": "IPv4 vs IPv6 Comparison",
    "question": "What is the IPv6 equivalent of the IPv4 'Protocol' header field?",
    "options": [
      "Flow Label",
      "Traffic Class",
      "Next Header",
      "Payload Length"
    ],
    "correctOption": 2,
    "explanation": "In IPv6, the 'Next Header' field serves the same role as the 'Protocol' field in IPv4 — it identifies the type of header immediately following the IPv6 header, which could be an upper-layer protocol (TCP, UDP, ICMP) or an IPv6 Extension Header. Traffic Class is the QoS equivalent of Differentiated Services. Flow Label is a new IPv6-only field. Payload Length indicates the size of the data portion."
  },
  {
    "quizTitle": "Network Layer",
    "category": "Router Routing Tables",
    "question": "A router's routing table shows a default route pointing to 192.168.1.5. The router receives a packet for 45.60.70.80 — a public internet address not in the routing table. What does the router do?",
    "options": [
      "Drops the packet since 45.60.70.80 is not in the routing table.",
      "Broadcasts the packet on all interfaces to find the destination.",
      "Forwards the packet to 192.168.1.5 via the default route.",
      "Sends an ARP request for 45.60.70.80's MAC address."
    ],
    "correctOption": 2,
    "explanation": "The default route (0.0.0.0/0) matches any destination that has no more specific route in the routing table. When the router finds no specific match for 45.60.70.80, it falls back to the default route and forwards the packet to the next-hop address 192.168.1.5. This is how edge routers handle internet traffic — they maintain specific routes for internal networks and use a default route to send everything else toward the internet via the ISP."
  }
]
