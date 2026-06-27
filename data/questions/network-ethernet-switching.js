// data/questions/network-ethernet-switching.js

module.exports = [
  {
    "quizTitle": "Ethernet Switching",
    "category": "Ethernet Encapsulation and Sublayers",
    "question": "A network engineer is troubleshooting why a frame's payload type is not being recognized correctly by upper layer software. She learns that one specific sublayer of the Data Link layer is responsible for placing information in the frame to identify which network layer protocol is being carried. Which sublayer and IEEE standard handles this function?",
    "options": [
      "The MAC sublayer (IEEE 802.3) - because it is responsible for all frame contents.",
      "The LLC sublayer (IEEE 802.2) - which places information in the frame to identify which network layer protocol is used for the frame.",
      "The Physical layer (IEEE 802.3) - because it encodes the protocol type as part of signal modulation.",
      "The Network layer - because protocol identification is an IP-layer function."
    ],
    "correctOption": 1,
    "explanation": "The LLC (Logical Link Control) sublayer, defined by IEEE 802.2, places information in the frame to identify which network layer protocol is used for the frame - for example, distinguishing IPv4 from IPv6 or other protocols. The MAC sublayer (IEEE 802.3 for Ethernet, 802.11 for WLAN, or 802.15 for WPAN) is responsible for data encapsulation and media access control, and provides data link layer addressing. These two sublayers divide responsibilities: LLC handles protocol identification toward the upper layers, MAC handles addressing and media access toward the physical layer."
  },
  {
    "quizTitle": "Ethernet Switching",
    "category": "Ethernet Encapsulation and Sublayers",
    "question": "Which IEEE standards collectively define the Ethernet family of networking technologies as discussed at the Data Link layer?",
    "options": [
      "IEEE 802.2 and 802.3 - covering the LLC sublayer and MAC sublayer respectively.",
      "IEEE 802.11 and 802.15 - covering wireless and personal area networks.",
      "IEEE 802.1 and 802.16 - covering bridging and broadband wireless access.",
      "IEEE 802.2 only - since LLC governs all Ethernet operations."
    ],
    "correctOption": 0,
    "explanation": "Ethernet operates at the Data Link and Physical layers and is a family of networking technologies defined in the IEEE 802.2 and 802.3 standards. IEEE 802.2 defines the LLC sublayer (shared across multiple 802 LAN/MAN technologies including Ethernet, Wi-Fi, and WPAN), while IEEE 802.3 defines the MAC sublayer specifically for Ethernet, including frame structure, addressing, and media access methods. IEEE 802.11 governs WLAN and 802.15 governs WPAN - these use the same LLC sublayer concept but different MAC sublayers."
  },
  {
    "quizTitle": "Ethernet Switching",
    "category": "MAC Sublayer Functions",
    "question": "A protocol analyst lists three things the IEEE 802.3 MAC sublayer is responsible for in data encapsulation. Which three are they?",
    "options": [
      "IP addressing, subnet masking, and default gateway configuration.",
      "Ethernet frame structure, Ethernet addressing (source/destination MAC), and Ethernet error detection (FCS trailer).",
      "TCP segmentation, port numbering, and flow control.",
      "VLAN tagging, Spanning Tree calculation, and link aggregation."
    ],
    "correctOption": 1,
    "explanation": "IEEE 802.3 data encapsulation at the MAC sublayer includes three components: (1) Ethernet frame - the internal structure of the frame itself; (2) Ethernet Addressing - the frame includes both a source and destination MAC address to deliver the frame from Ethernet NIC to Ethernet NIC on the same LAN; (3) Ethernet Error detection - the frame includes a Frame Check Sequence (FCS) trailer used for error detection. These are the foundational building blocks of every Ethernet frame, regardless of speed or media type."
  },
  {
    "quizTitle": "Ethernet Switching",
    "category": "MAC Sublayer Functions",
    "question": "A technician asks why modern Ethernet switches do not require CSMA/CD even though it is part of the IEEE 802.3 MAC sublayer specification. What is the correct explanation?",
    "options": [
      "CSMA/CD was removed from the IEEE 802.3 standard for modern switches.",
      "Legacy Ethernet using a bus topology or hubs is a shared, half-duplex medium requiring CSMA/CD; but Ethernet LANs of today use switches that operate in full-duplex, and full-duplex communications do not require access control through CSMA/CD.",
      "CSMA/CD is only used for wireless Ethernet connections, not wired ones.",
      "Switches use a faster collision detection algorithm that replaces CSMA/CD entirely."
    ],
    "correctOption": 1,
    "explanation": "Legacy Ethernet using a bus topology or hubs is a shared, half-duplex medium, and Ethernet over a half-duplex medium uses the contention-based access method CSMA/CD (Carrier Sense Multiple Access with Collision Detection) to manage shared access. However, Ethernet LANs of today use switches that operate in full-duplex. Because full-duplex provides a dedicated, collision-free link between each device and the switch port, full-duplex communications with Ethernet switches do not require access control through CSMA/CD. The specification remains part of the 802.3 standard for compatibility with legacy half-duplex scenarios, but is functionally unused in modern switched full-duplex networks."
  },
  {
    "quizTitle": "Ethernet Switching",
    "category": "Ethernet Frame Size",
    "question": "A network monitoring tool flags a frame that is only 52 bytes long. According to Ethernet frame size standards, what will happen to this frame and what is it called?",
    "options": [
      "The frame is accepted normally because 52 bytes is within the valid range.",
      "The frame is a 'jumbo frame' and will be processed with extra care by the switch.",
      "The frame is below the minimum Ethernet frame size of 64 bytes, making it a 'collision fragment' or 'runt frame', and it is automatically discarded.",
      "The frame will be padded with zeros to reach the maximum frame size before processing."
    ],
    "correctOption": 2,
    "explanation": "The minimum Ethernet frame size is 64 bytes (the preamble field is not included when describing frame size). Any frame less than 64 bytes in length is considered a 'collision fragment' or 'runt frame' and is automatically discarded. A 52-byte frame falls below this minimum and would be treated as a runt frame, typically the result of a collision during transmission - the frame is considered invalid and is dropped rather than processed further."
  },
  {
    "quizTitle": "Ethernet Switching",
    "category": "Ethernet Frame Size",
    "question": "A data center is configuring switches to handle large frames for a storage application that requires frames up to 9000 bytes. According to standard Ethernet frame size rules, what is true about frames exceeding 1518 bytes?",
    "options": [
      "Frames exceeding 1518 bytes are always invalid and unsupported by any Ethernet equipment.",
      "Frames with more than 1500 bytes of data are considered 'jumbo' or 'baby giant' frames, and jumbo frames are usually supported by most Fast Ethernet and Gigabit Ethernet switches and NICs, though support must be explicitly verified/enabled.",
      "Frames exceeding 1518 bytes are automatically fragmented by the switch into 1518-byte pieces.",
      "Jumbo frames are only supported on legacy 10 Mbps Ethernet hubs, not modern switches."
    ],
    "correctOption": 1,
    "explanation": "The standard maximum Ethernet frame size is 1518 bytes. Frames with more than 1500 bytes of data are considered 'jumbo' or 'baby giant' frames - these exceed the standard maximum. Jumbo frames are usually supported by most Fast Ethernet and Gigabit Ethernet switches and NICs, but this support is not universal or always enabled by default, so the data center engineers must verify and configure jumbo frame support across the entire path (switches and NICs) for the 9000-byte storage application to work correctly. Mismatched jumbo frame settings between devices can cause frames to be dropped."
  },
  {
    "quizTitle": "Ethernet Switching",
    "category": "Ethernet Frame Size",
    "question": "A switch receives a frame and the frame size, excluding the preamble, totals 1600 bytes with no jumbo frame support configured on the switch. What will the switch do with this frame?",
    "options": [
      "The switch will accept the frame since 1600 bytes is close to the standard maximum.",
      "The switch will drop the frame because it exceeds the standard maximum Ethernet frame size of 1518 bytes, and without jumbo frame support enabled, oversized frames are considered invalid.",
      "The switch will split the frame into two separate frames for forwarding.",
      "The switch will automatically enable jumbo frame support for this single transmission."
    ],
    "correctOption": 1,
    "explanation": "The standard maximum Ethernet frame size is 1518 bytes (preamble excluded). If the size of a transmitted frame is greater than the maximum, the receiving device drops the frame - this is considered invalid, similar to undersized runt frames. Without jumbo frame support specifically configured and enabled on the switch, a 1600-byte frame exceeds the standard limit and will be dropped rather than forwarded. This is why jumbo frame support must be explicitly configured end-to-end (switches and NICs) when applications require larger frame sizes."
  },
  {
    "quizTitle": "Ethernet Switching",
    "category": "Collision and Broadcast Domains",
    "question": "On a legacy Ethernet network using hubs (not switches), if Device A sends a unicast frame to Device B, and at the same time Device C sends a frame to Device D, all four devices being on the same hub. What happens according to collision domain principles?",
    "options": [
      "No interference occurs because unicast frames are isolated from each other.",
      "Since all devices are in the same collision domain (extent of network the frame reaches, including end device interfaces), the simultaneous transmissions from Device A and Device C collide and interfere with each other, requiring both to resend.",
      "Only Device B and Device D experience interference; Device A and Device C transmit successfully.",
      "The hub automatically buffers one transmission until the other completes, preventing collision."
    ],
    "correctOption": 1,
    "explanation": "The collision domain is the extent of the network to which a frame reaches, including the interfaces of end devices, when a device sends any frame (excluding broadcast). If two end devices in the same collision domain send a frame at the same time, they will collide and interfere with each other, and the end devices will need to resend the frame. On a legacy hub-based network, all connected devices share one collision domain because the hub repeats bits out all ports. Device A and Device C transmitting simultaneously causes a collision regardless of which devices are the intended recipients - the entire collision domain is affected."
  },
  {
    "quizTitle": "Ethernet Switching",
    "category": "Collision and Broadcast Domains",
    "question": "A network technician states that on a legacy Ethernet hub network, the collision domain equals the broadcast domain. What does this equivalence mean in practice?",
    "options": [
      "It means broadcast frames and unicast frames travel through completely separate physical infrastructure.",
      "It means that on this type of network, the extent of the network reached by a regular frame (collision domain) is identical to the extent of the network reached by a broadcast frame (broadcast domain) - all devices connected via hubs share both the same collision domain and the same broadcast domain.",
      "It means collisions only occur during broadcast transmissions, never during unicast transmissions.",
      "It means the hub eliminates the broadcast domain entirely, leaving only the collision domain."
    ],
    "correctOption": 1,
    "explanation": "On legacy Ethernet networks built with hubs/MAUs, Collision Domain = Broadcast Domain. This is because a hub repeats every signal (whether unicast, multicast, or broadcast) out every port - it does not distinguish or limit the propagation of any frame type. Therefore, the set of devices that could collide with each other (collision domain) is identical to the set of devices that would all receive a broadcast frame (broadcast domain). This equivalence is a key characteristic that changes dramatically once switches replace hubs - switches still flood broadcasts (same broadcast domain) but eliminate shared collision domains by giving each port its own dedicated link."
  },
  {
    "quizTitle": "Ethernet Switching",
    "category": "Legacy Ethernet Operation",
    "question": "On legacy Ethernet using a Media Access Unit (MAU), describe the correct order of the CSMA/CD process a station follows before successfully transmitting a frame.",
    "options": [
      "Transmit the frame immediately, then listen for collisions, then check the destination address, then resend if needed.",
      "A station listens for a signal on the cable; if no signal is heard, it transmits the frame and listens for collisions; if a collision occurs, it delays a random backoff wait-time and retries; the end device whose MAC address matches the destination address reads the frame.",
      "The station broadcasts its MAC address, waits for an acknowledgment, then transmits the frame, then checks for errors.",
      "The station requests a token from the MAU, transmits upon receiving the token, then releases the token."
    ],
    "correctOption": 1,
    "explanation": "The Ethernet CSMA/CD protocol on legacy shared-media Ethernet (using MAUs to electrically attach stations to the shared cable) follows this sequence: (1) A station listens for a signal on the Ethernet cable (carrier sense); (2) If no signal is heard, the station transmits the frame and listens for collisions (multiple access with monitoring); (3) If a collision occurs, the station delays a random backoff wait-time and retries; (4) The end device whose MAC address matches the destination address reads the frame (all other devices on the shared medium ignore it). This process governs access to the single shared Ethernet cable that all stations are electrically connected to via their MAUs."
  },
  {
    "quizTitle": "Ethernet Switching",
    "category": "Legacy Ethernet Operation",
    "question": "A historical overview of Ethernet evolution describes a two-step replacement process. What were the two replacements in order, leading to modern switched Ethernet?",
    "options": [
      "First, the Ethernet switch replaced the Ethernet cable directly; then the hub was added for redundancy.",
      "First, the Ethernet Hub replaced the Ethernet Cable (with hub operation nearly identical to the Ethernet Cable with MAUs); then the Ethernet Switch replaced the Ethernet Hub.",
      "First, fiber optic cable replaced copper cable; then wireless replaced fiber optic cable.",
      "First, the router replaced the hub; then the switch replaced the router."
    ],
    "correctOption": 1,
    "explanation": "The evolution of Ethernet media access devices occurred in two stages: (1) the Ethernet Hub replaced the original shared Ethernet Cable (with MAUs) - hub operation is nearly identical to the Ethernet Cable with MAUs in that it still creates a single shared collision domain; (2) the Ethernet Switch replaced the Ethernet Hub - introducing per-port collision domains and full-duplex operation. This two-stage evolution explains why modern switched Ethernet behaves so differently from legacy shared-media Ethernet, even though both fall under the same IEEE 802.3 standard family."
  },
  {
    "quizTitle": "Ethernet Switching",
    "category": "MAC Addresses and Hexadecimal",
    "question": "A network technician sees the MAC address 00:1A:2B:3C:4D:5E and wants to verify it is correctly formatted. How many bits does a MAC address contain, and how many hexadecimal digits are used to represent it?",
    "options": [
      "32 bits, represented by 8 hexadecimal digits.",
      "48 bits, represented by 12 hexadecimal digits.",
      "64 bits, represented by 16 hexadecimal digits.",
      "24 bits, represented by 6 hexadecimal digits."
    ],
    "correctOption": 1,
    "explanation": "An Ethernet MAC address consists of a 48-bit binary value, expressed using 12 hexadecimal values. Since a byte equals 8 bits, a MAC address is also described as being 6 bytes in length (48 bits / 8 bits per byte = 6 bytes, and each byte is represented by 2 hex digits, giving 12 hex digits total). The example address 00:1A:2B:3C:4D:5E has exactly 12 hexadecimal digits grouped into 6 pairs (bytes), confirming correct MAC address formatting."
  },
  {
    "quizTitle": "Ethernet Switching",
    "category": "MAC Addresses and Hexadecimal",
    "question": "A student needs to convert the binary value 0000 1010 into hexadecimal. Following the standard convention of always displaying leading zeroes to complete the 8-bit representation, what is the correct hexadecimal value?",
    "options": [
      "A (without leading zero)",
      "0A",
      "10",
      "1010"
    ],
    "correctOption": 1,
    "explanation": "Binary 0000 1010 equals decimal 10, which equals hexadecimal A. However, when using hexadecimal to represent a full byte (8 bits), leading zeroes are always displayed to complete the 8-bit representation. This is explicitly stated: the binary value 0000 1010 is represented in hexadecimal as 0A (not just A). This convention ensures every byte is consistently represented by exactly 2 hexadecimal digits, which is essential for correctly parsing MAC addresses, IP addresses in hex notation, and other networking values."
  },
  {
    "quizTitle": "Ethernet Switching",
    "category": "MAC Addresses and Hexadecimal",
    "question": "A document refers to a value as '73H'. What does this notation indicate, and what is an equivalent way to write the same value?",
    "options": [
      "It indicates a binary value; equivalent to writing 0b73.",
      "It indicates a hexadecimal value (the H suffix denotes hexadecimal); equivalent to writing 0x73.",
      "It indicates a decimal value with a unit label H for 'hundred'.",
      "It indicates an octal value; equivalent to writing 73o."
    ],
    "correctOption": 1,
    "explanation": "Hexadecimal numbers can be represented in several ways for clarity in documentation: preceded by 0x (e.g., 0x73), with a subscript 16, or followed by an H (e.g., 73H). All of these notations indicate the same hexadecimal value. The H suffix and the 0x prefix are the two most common conventions used to distinguish hexadecimal values from decimal values, since the digits alone (like '73') could otherwise be misread as a decimal number."
  },
  {
    "quizTitle": "Ethernet Switching",
    "category": "MAC Address Structure (OUI)",
    "question": "A new networking equipment manufacturer wants to start selling Ethernet NICs. According to IEEE standards, what must this manufacturer do to ensure their devices have unique MAC addresses, and what is the resulting identifier called?",
    "options": [
      "The manufacturer can choose any random 48-bit value for each device without registration.",
      "The manufacturer must register with the IEEE to obtain a unique 6 hexadecimal digit (24-bit, 3-byte) code called the Organizationally Unique Identifier (OUI), which forms the first half of every MAC address they assign.",
      "The manufacturer must register with ICANN to receive a block of IP addresses that double as MAC addresses.",
      "The manufacturer must purchase MAC addresses individually from the IEEE for each device sold."
    ],
    "correctOption": 1,
    "explanation": "To ensure all MAC addresses are unique to the Ethernet device or interface, all vendors that sell Ethernet devices must register with the IEEE to obtain a unique 6 hexadecimal (24-bit, or 3-byte) code called the Organizationally Unique Identifier (OUI). An Ethernet MAC address consists of this 6 hexadecimal vendor OUI code followed by a 6 hexadecimal vendor-assigned value (which the vendor can assign internally as long as it does not repeat). This two-part structure (OUI + vendor-assigned value) is what guarantees global MAC address uniqueness without requiring a central authority to assign every individual address."
  },
  {
    "quizTitle": "Ethernet Switching",
    "category": "MAC Address Structure (OUI)",
    "question": "Two laptops from different manufacturers both have MAC addresses. The first 6 hexadecimal digits differ between the two laptops, but a network analyst notes this is expected and by design. Why does this make sense?",
    "options": [
      "The first 6 hex digits are randomly generated and have no defined meaning.",
      "The first 6 hex digits represent the Organizationally Unique Identifier (OUI) assigned to each vendor by the IEEE - since the laptops are from different manufacturers, they would have different vendor-specific OUI codes.",
      "The first 6 hex digits indicate the MAC address's broadcast or multicast status.",
      "The first 6 hex digits represent the device's IP address encoded in hexadecimal."
    ],
    "correctOption": 1,
    "explanation": "An Ethernet MAC address consists of a 6 hexadecimal vendor OUI code followed by a 6 hexadecimal vendor-assigned value. The OUI is registered with the IEEE and is unique to each manufacturer/vendor. Since the two laptops come from different manufacturers, they would naturally have different OUI codes in the first 6 hex digits, while the remaining 6 hex digits are assigned internally by each vendor to ensure uniqueness among their own devices. This explains why network administrators can sometimes identify a device's manufacturer just by examining the first half of its MAC address."
  },
  {
    "quizTitle": "Ethernet Switching",
    "category": "Frame Processing and MAC Matching",
    "question": "A NIC receives an Ethernet frame whose destination MAC address does not match the NIC's own physical MAC address stored in RAM, and the destination is not a broadcast or multicast address the NIC belongs to. What does the NIC do with this frame?",
    "options": [
      "The NIC passes the frame up the OSI layers anyway, since filtering happens at Layer 3.",
      "The device discards the frame because there is no match.",
      "The NIC forwards the frame to all other devices on the network to find the correct recipient.",
      "The NIC stores the frame in a buffer until a matching destination is found."
    ],
    "correctOption": 1,
    "explanation": "When a NIC receives an Ethernet frame, it examines the destination MAC address to see if it matches the physical MAC address stored in RAM. If there is no match, the device discards the frame. If there is a match, it passes the frame up the OSI layers, where de-encapsulation occurs. This local filtering at the NIC level is fundamental to Ethernet operation - every device on a shared or switched segment may physically receive a frame's signal, but only the NIC with a matching destination address (or applicable broadcast/multicast membership) will actually process and accept it."
  },
  {
    "quizTitle": "Ethernet Switching",
    "category": "Frame Processing and MAC Matching",
    "question": "Besides a NIC's own unique unicast MAC address, under what other condition will an Ethernet NIC accept and process an incoming frame?",
    "options": [
      "Only if the frame originates from a device on the same VLAN.",
      "If the destination MAC address is a broadcast address or a multicast address for a group the NIC is a member of.",
      "If the frame has a valid FCS, regardless of the destination MAC address.",
      "If the source MAC address belongs to a trusted device list configured on the NIC."
    ],
    "correctOption": 1,
    "explanation": "Ethernet NICs will accept frames if the destination MAC address matches their own unicast address, OR if the destination MAC address is a broadcast address, OR if it is a multicast group of which the host is a member. This is an important exception to the simple unicast-matching rule - broadcast frames are meant for every device on the LAN, and multicast frames are meant for a specific subscribed group (such as a group of devices running a particular streaming or routing protocol application), so NICs must be programmed to recognize and accept these special address types in addition to their own unique address."
  },
  {
    "quizTitle": "Ethernet Switching",
    "category": "Frame Processing and MAC Matching",
    "question": "Which types of network devices will have an Ethernet NIC and therefore a MAC address, according to the module's description of frame source/destination devices?",
    "options": [
      "Only end-user devices like workstations and mobile phones have MAC addresses; network infrastructure devices like routers do not.",
      "Any device that is the source or destination of an Ethernet frame will have an Ethernet NIC and therefore a MAC address - this includes workstations, servers, printers, mobile devices, and routers.",
      "Only servers and routers have MAC addresses; end-user workstations rely solely on IP addresses.",
      "MAC addresses are exclusive to wireless devices; wired devices use a different addressing scheme."
    ],
    "correctOption": 1,
    "explanation": "Any device that is the source or destination of an Ethernet frame will have an Ethernet NIC and therefore a MAC address. This explicitly includes workstations, servers, printers, mobile devices, and routers. Even though routers primarily operate at Layer 3 (making routing decisions based on IP addresses), each router interface connected to an Ethernet segment must still have a MAC address because it participates in Layer 2 frame delivery on that segment, just like any other end device on the LAN."
  },
  {
    "quizTitle": "Ethernet Switching",
    "category": "Unicast, Broadcast, and Multicast Addressing",
    "question": "A host wants to send an IPv4 packet to a device whose IP address it knows, but it does not yet know the corresponding MAC address. Which Layer 2 process does it use to discover the destination MAC address?",
    "options": [
      "Neighbor Discovery (ND) - used for both IPv4 and IPv6 MAC resolution.",
      "Address Resolution Protocol (ARP) - the process used to determine the destination MAC address associated with an IPv4 address.",
      "Dynamic Host Configuration Protocol (DHCP) - used to resolve MAC addresses for any IP version.",
      "Spanning Tree Protocol (STP) - used to discover MAC addresses on switched networks."
    ],
    "correctOption": 1,
    "explanation": "The process that a source host uses to determine the destination MAC address associated with an IPv4 address is known as Address Resolution Protocol (ARP). For IPv6, the equivalent process is called Neighbor Discovery (ND) - these are different protocols for different IP versions. ARP and ND allow a host to map a known Layer 3 address to the corresponding Layer 2 MAC address needed to actually deliver a frame on the local network segment. DHCP assigns IP addresses; STP prevents Layer 2 loops - neither resolves MAC addresses from IP addresses."
  },
  {
    "quizTitle": "Ethernet Switching",
    "category": "Unicast, Broadcast, and Multicast Addressing",
    "question": "A network capture shows a frame with the destination MAC address FF-FF-FF-FF-FF-FF. What type of frame is this, and how will Ethernet switches and routers handle it?",
    "options": [
      "This is a multicast frame; switches will flood it only to devices in the multicast group, and routers will forward it to other subnets.",
      "This is a broadcast frame; it will be flooded out all Ethernet switch ports except the incoming port, but it will not be forwarded by a router.",
      "This is an invalid MAC address that will cause the frame to be dropped by the receiving NIC.",
      "This is a unicast frame destined for a specific reserved management device."
    ],
    "correctOption": 1,
    "explanation": "A destination MAC address of FF-FF-FF-FF-FF-FF in hexadecimal (48 ones in binary) identifies an Ethernet broadcast frame. This frame is received and processed by every device on the Ethernet LAN. It is flooded out all Ethernet switch ports except the incoming port, but it is NOT forwarded by a router - routers act as broadcast domain boundaries, stopping broadcast frames from propagating to other network segments. If the encapsulated data is an IPv4 broadcast packet, the destination IPv4 address would have all ones in the host portion, meaning all hosts on that local network (broadcast domain) will receive and process the packet."
  },
  {
    "quizTitle": "Ethernet Switching",
    "category": "Unicast, Broadcast, and Multicast Addressing",
    "question": "A frame has a destination MAC address beginning with 01-00-5E. What type of frame is this, and what protocol is encapsulated inside?",
    "options": [
      "This is a unicast frame destined for a specific Cisco device, encapsulating an Ethernet management protocol.",
      "This is a multicast frame; the destination MAC address 01-00-5E indicates the encapsulated data is an IPv4 multicast packet.",
      "This is a broadcast frame intended for all IPv4 devices on the network.",
      "This is an invalid MAC address reserved for future IEEE use."
    ],
    "correctOption": 1,
    "explanation": "There is a destination MAC address of 01-00-5E when the encapsulated data is an IPv4 multicast packet (and a destination MAC address of 33-33 when the encapsulated data is an IPv6 multicast packet). An Ethernet multicast frame is received and processed by a group of devices that belong to the same multicast group. Because multicast addresses represent a group of addresses (sometimes called a host group), they can only be used as the destination of a packet - the source will always be a unicast address. This is consistent across all MAC address types: source addresses must always be unicast, but destinations can be unicast, broadcast, or multicast."
  },
  {
    "quizTitle": "Ethernet Switching",
    "category": "Unicast, Broadcast, and Multicast Addressing",
    "question": "A network administrator wants multicast traffic to be sent only to switch ports with interested receivers, rather than flooded to every port. By default, how does a switch handle multicast frames, and what feature changes this default behavior?",
    "options": [
      "Switches forward multicast frames only out one port by default; multicast snooping floods them to all ports.",
      "By default, multicast frames are flooded out all Ethernet switch ports except the incoming port, unless the switch is configured for multicast snooping, which limits flooding to only the interested ports.",
      "Switches never forward multicast frames; only routers can process multicast traffic.",
      "Multicast frames are automatically rate-limited by switches without any configuration needed."
    ],
    "correctOption": 1,
    "explanation": "Multicast frames are flooded out all Ethernet switch ports except the incoming port, unless the switch is configured for multicast snooping. Multicast snooping (such as IGMP snooping) allows the switch to examine multicast group membership and intelligently forward multicast frames only to ports with devices that have actually joined that multicast group, rather than flooding to all ports. Like broadcast frames, multicast frames are not forwarded by a router unless the router is configured to route multicast packets - so by default, both broadcast and multicast traffic stays within the local broadcast domain."
  },
  {
    "quizTitle": "Ethernet Switching",
    "category": "MAC Address Table Fundamentals",
    "question": "A network analyst says that a Layer 2 Ethernet switch is 'completely unaware of the data being carried in the data portion of the frame'. What does this statement mean about how switches make forwarding decisions?",
    "options": [
      "Switches inspect the IPv4 packet or ARP message inside the frame to decide where to forward it.",
      "Switches make their forwarding decisions based solely on the Layer 2 Ethernet MAC addresses, regardless of whether the payload is an IPv4 packet, ARP message, IPv6 ND packet, or anything else.",
      "Switches discard any frame whose payload protocol they do not recognize.",
      "Switches forward frames based on the source IP address found by inspecting the payload."
    ],
    "correctOption": 1,
    "explanation": "An Ethernet switch is completely unaware of the data (protocol) being carried in the data portion of the frame, such as an IPv4 packet, an ARP message, or an IPv6 ND packet. The switch makes its forwarding decisions based solely on the Layer 2 Ethernet MAC addresses. This is a defining characteristic of Layer 2 switching - the switch examines only the frame header's MAC addresses (source for learning, destination for forwarding) and never looks inside the payload to make its decision. This keeps switching fast and protocol-agnostic, since the switch does not need to understand IPv4, IPv6, ARP, or any other upper-layer protocol to do its job."
  },
  {
    "quizTitle": "Ethernet Switching",
    "category": "MAC Address Table Fundamentals",
    "question": "What is the key behavioral difference between a legacy Ethernet hub and a Layer 2 Ethernet switch when handling an incoming frame?",
    "options": [
      "A hub examines its MAC address table to forward each frame intelligently; a switch repeats bits out all ports blindly.",
      "An Ethernet switch examines its MAC address table to make a forwarding decision for each frame, unlike legacy Ethernet hubs that repeat bits out all ports except the incoming port.",
      "Both hubs and switches use MAC address tables, but switches update the table faster.",
      "A hub forwards frames based on IP addresses; a switch forwards frames based on MAC addresses."
    ],
    "correctOption": 1,
    "explanation": "An Ethernet switch examines its MAC address table to make a forwarding decision for each frame, unlike legacy Ethernet hubs that repeat bits out all ports except the incoming port. The hub has no intelligence - it is purely a signal repeater that blindly duplicates the electrical signal to every connected port. The switch, by contrast, builds and consults a MAC address table to determine the specific destination port for a frame whenever possible, dramatically reducing unnecessary traffic and eliminating the shared collision domain that hubs create."
  },
  {
    "quizTitle": "Ethernet Switching",
    "category": "MAC Address Table Fundamentals",
    "question": "A brand-new switch is powered on for the first time and immediately connected to several devices. What is the state of its MAC address table at this moment, and what does this imply about how it will handle the very first frames it receives?",
    "options": [
      "The MAC address table is pre-loaded with default entries from the manufacturer.",
      "The MAC address table is empty when a switch is turned on, meaning the switch will need to flood early frames out all ports (except the incoming port) until it learns where devices are located.",
      "The MAC address table automatically populates itself with all connected device MAC addresses before any frames are sent.",
      "The switch refuses to forward any frames until an administrator manually configures the MAC address table."
    ],
    "correctOption": 1,
    "explanation": "When a switch is turned on, the MAC address table is empty. This means the switch has no knowledge yet of which MAC addresses are reachable through which ports. As a direct consequence, when frames first arrive at the switch, since the destination MAC address is not yet in the table (unknown unicast), the switch must flood the frame out all ports except the incoming port to ensure it reaches the intended recipient. Over time, as the switch examines source MAC addresses of incoming frames, it populates its table and can begin making targeted forwarding decisions instead of flooding."
  },
  {
    "quizTitle": "Ethernet Switching",
    "category": "MAC Address Table Fundamentals",
    "question": "A networking student notes that the MAC address table is sometimes called by a different technical name. What is that alternative name?",
    "options": [
      "Routing Information Base (RIB)",
      "Content Addressable Memory (CAM) table",
      "Forwarding Information Base (FIB)",
      "Address Resolution Cache (ARC)"
    ],
    "correctOption": 1,
    "explanation": "The MAC address table is sometimes referred to as a Content Addressable Memory (CAM) table. This name describes the underlying memory architecture used in switch hardware - content addressable memory allows for extremely fast lookups by directly indexing on the content (the MAC address) rather than requiring a traditional sequential search, which is essential for switches to make forwarding decisions at wire speed across many simultaneous frames. The term 'CAM table' is widely used interchangeably with 'MAC address table' in networking documentation and Cisco terminology."
  },
  {
    "quizTitle": "Ethernet Switching",
    "category": "Switch Learning and Forwarding",
    "question": "A frame arrives at switch port Fa0/3 with source MAC address 00:11:22:33:44:55. This MAC address does not currently exist anywhere in the switch's MAC address table. What does the switch do as part of its learning process?",
    "options": [
      "The switch ignores the source MAC address entirely and only examines the destination MAC address.",
      "The switch adds the source MAC address to the table along with the incoming port number (Fa0/3).",
      "The switch rejects the frame because the source MAC address is unrecognized.",
      "The switch forwards the frame to a central server to verify the source MAC address before learning it."
    ],
    "correctOption": 1,
    "explanation": "Every frame that enters a switch is checked for new information to learn. The switch does this by examining the source MAC address of the frame and the port number where the frame entered the switch. If the source MAC address does not exist in the table, it is added to the table along with the incoming port number. This learning process is how a switch builds knowledge of which devices are reachable through which ports, without requiring any manual configuration - it happens automatically and continuously as frames pass through the switch."
  },
  {
    "quizTitle": "Ethernet Switching",
    "category": "Switch Learning and Forwarding",
    "question": "A switch's MAC address table already has an entry for MAC address AA:BB:CC:DD:EE:FF on port Fa0/2. A new frame arrives on port Fa0/2 with the same source MAC address. What does the switch do with this existing entry?",
    "options": [
      "The switch creates a duplicate entry for the same MAC address and port.",
      "The switch updates the refresh timer for that entry, since the source MAC address already exists in the table.",
      "The switch deletes the old entry and waits for a new frame to recreate it.",
      "The switch ignores the frame entirely since the source is already known."
    ],
    "correctOption": 1,
    "explanation": "If the source MAC address does exist in the table (and matches the same port), the switch updates the refresh timer for that entry rather than creating a duplicate or new entry. By default, most Ethernet switches keep an entry in the table for 5 minutes - the refresh timer extends this timeout each time traffic is seen from that MAC address, preventing active devices from having their table entries expire and requiring relearning. This timer-based aging mechanism allows the switch to automatically remove stale entries for devices that have disconnected or moved, keeping the table accurate over time."
  },
  {
    "quizTitle": "Ethernet Switching",
    "category": "Switch Learning and Forwarding",
    "question": "A laptop with MAC address 11:22:33:44:55:66 was previously learned on switch port Fa0/5. The user unplugs the laptop and moves it to a different office, plugging it into port Fa0/9 on the same switch. The next frame from this laptop arrives on Fa0/9. How does the switch handle this situation?",
    "options": [
      "The switch keeps the old Fa0/5 entry unchanged and creates a separate new entry for Fa0/9, resulting in two entries for the same MAC address.",
      "The switch treats this as a new entry - the old entry is replaced using the same MAC address but with the more current port number (Fa0/9).",
      "The switch rejects the frame because the MAC address moving to a different port is considered a security violation by default.",
      "The switch ignores the new port information and continues forwarding to Fa0/5 until the old entry times out after 5 minutes."
    ],
    "correctOption": 1,
    "explanation": "If the source MAC address does exist in the table but on a different port, the switch treats this as a new entry. The entry is replaced using the same MAC address but with the more current port number. This means the laptop's MAC address entry is updated from Fa0/5 to Fa0/9 - the switch does not keep two conflicting entries. This dynamic relearning is essential for accommodating mobile or relocated devices without requiring manual intervention, ensuring the MAC address table always reflects the current physical topology."
  },
  {
    "quizTitle": "Ethernet Switching",
    "category": "Switch Learning and Forwarding",
    "question": "A switch receives a frame with a unicast destination MAC address. This MAC address IS found in the switch's MAC address table, associated with port Fa0/7. What does the switch do with this frame?",
    "options": [
      "The switch floods the frame out all ports except the incoming port, just to be safe.",
      "The switch forwards the frame out only port Fa0/7, the specified port associated with that destination MAC address.",
      "The switch discards the frame because exact unicast matches are treated as potential loops.",
      "The switch forwards the frame back out the incoming port to confirm delivery."
    ],
    "correctOption": 1,
    "explanation": "When the destination MAC address is a unicast address and the switch finds a match between the destination MAC address of the frame and an entry in its MAC address table, it will forward the frame out the specified port (in this case, Fa0/7) - and only that port. This targeted forwarding (sometimes called filtering) is the primary efficiency benefit of switches over hubs: traffic is delivered directly to its destination without unnecessarily consuming bandwidth on unrelated ports."
  },
  {
    "quizTitle": "Ethernet Switching",
    "category": "Switch Learning and Forwarding",
    "question": "A switch receives a frame with a unicast destination MAC address that does NOT appear anywhere in its MAC address table. What does the switch do, and what is this specific behavior called?",
    "options": [
      "The switch discards the frame since the destination is unrecognized.",
      "The switch forwards the frame out all ports except the incoming port - this behavior is called an unknown unicast.",
      "The switch holds the frame in a buffer until ARP resolves the destination.",
      "The switch sends the frame back to the source device with an error notification."
    ],
    "correctOption": 1,
    "explanation": "If the destination MAC address is not in the table, the switch will forward the frame out all ports except the incoming port. This is called an unknown unicast. Even though the destination address is technically a unicast address (intended for one specific device), because the switch has no knowledge of which port leads to that device, it must temporarily flood the frame everywhere to ensure delivery. Once the destination device responds (and its frame enters the switch), the switch will learn that device's MAC address and port, eliminating the need for flooding on future frames to that address."
  },
  {
    "quizTitle": "Ethernet Switching",
    "category": "Switch Learning and Forwarding",
    "question": "Comparing how a switch handles broadcast frames versus how it handles an unknown unicast frame, what is the similarity in forwarding behavior between these two frame types?",
    "options": [
      "Both broadcast frames and unknown unicast frames are forwarded out all ports except the incoming port.",
      "Broadcast frames are dropped while unknown unicast frames are flooded.",
      "Unknown unicast frames are dropped while broadcast frames are flooded.",
      "Both frame types are forwarded only to the port specified in the switch's default configuration."
    ],
    "correctOption": 0,
    "explanation": "Both broadcast/multicast frames and unknown unicast frames share the same forwarding behavior: flooding out all ports except the incoming port. If the destination MAC address is a broadcast or a multicast, the frame is flooded out all ports except the incoming port. Similarly, if a unicast destination MAC address is not in the table (unknown unicast), the switch also forwards the frame out all ports except the incoming port. The key distinction is in WHY this happens: broadcast/multicast frames are intentionally meant for multiple recipients, while unknown unicast flooding is a temporary fallback until the switch learns the correct port through normal MAC learning."
  },
  {
    "quizTitle": "Ethernet Switching",
    "category": "Switch Learning and Forwarding",
    "question": "A network engineer explains that once a switch's MAC address table contains the destination MAC address for a given frame, the switch is able to 'filter' the frame. What does filtering mean in this context?",
    "options": [
      "Filtering means the switch blocks the frame entirely based on security policy.",
      "Filtering means the switch is able to forward the frame out a single specific port rather than flooding it to all ports, since the table tells the switch exactly where the destination device is located.",
      "Filtering means the switch strips unnecessary header fields from the frame before forwarding.",
      "Filtering means the switch inspects the payload to confirm the frame contains valid IP data before forwarding."
    ],
    "correctOption": 1,
    "explanation": "As a switch receives frames from different devices, it is able to populate its MAC address table by examining the source MAC address of every frame. When the MAC address table of the switch contains the destination MAC address, it is able to filter the frame and forward out a single port. In this networking context, 'filtering' specifically means selectively forwarding the frame to only the relevant port rather than broadcasting it everywhere - it is the opposite of flooding. This filtering capability is what makes switches far more bandwidth-efficient than hubs, especially as the network grows and the MAC address table becomes more complete."
  },
  {
    "quizTitle": "Ethernet Switching",
    "category": "Frame Forwarding Methods",
    "question": "A network needs Quality of Service (QoS) analysis to ensure VoIP traffic gets priority over web-browsing traffic on a converged network. Which switch forwarding method is REQUIRED for this type of frame classification, and why?",
    "options": [
      "Fast-forward switching, because it has the lowest latency, allowing real-time prioritization.",
      "Cut-through switching in general, because it begins forwarding before the destination address is even read.",
      "Store-and-forward switching, because it receives the entire frame, allowing the switch to fully classify and prioritize the frame before forwarding decisions are made.",
      "Fragment-free switching, because checking the first 64 bytes is sufficient for QoS classification."
    ],
    "correctOption": 2,
    "explanation": "Store-and-forward switching is required for Quality of Service (QoS) analysis on converged networks where frame classification for traffic prioritization is necessary - for example, VoIP data streams need to have priority over web-browsing traffic. Because store-and-forward switching receives the entire frame before computing the CRC and making a forwarding decision, the switch has the complete frame available to examine for QoS markings, traffic classification, and prioritization logic. Cut-through methods (fast-forward and fragment-free) begin forwarding before receiving the complete frame, making thorough QoS classification impossible since not all the relevant frame content is yet available."
  },
  {
    "quizTitle": "Ethernet Switching",
    "category": "Frame Forwarding Methods",
    "question": "A switch using store-and-forward switching receives a frame and computes the CRC, finding that it does not match - indicating the frame has been corrupted. What does the switch do?",
    "options": [
      "The switch forwards the frame anyway and lets the destination device detect and discard the error.",
      "The switch discards the frame, since detecting an error in a frame before propagating it is a key advantage of store-and-forward switching, reducing bandwidth consumed by corrupt data.",
      "The switch attempts to repair the corrupted bits using forward error correction before forwarding.",
      "The switch forwards only the valid portion of the frame and discards the corrupted segment."
    ],
    "correctOption": 1,
    "explanation": "A big advantage of store-and-forward switching is that it determines if a frame has errors before propagating the frame. When an error is detected in a frame (via a failed CRC check), the switch discards the frame. Discarding frames with errors reduces the amount of bandwidth consumed by corrupt data - rather than wasting bandwidth on outgoing links forwarding data that the destination would just discard anyway, the switch catches the problem immediately and prevents the corrupted frame from propagating further into the network."
  },
  {
    "quizTitle": "Ethernet Switching",
    "category": "Frame Forwarding Methods",
    "question": "A switch using cut-through switching forwards a frame to its destination port before the entire frame has been received. What is the absolute minimum amount of the frame that must be read before the switch can make this forwarding decision?",
    "options": [
      "The entire frame, including the FCS trailer, to ensure error-free forwarding.",
      "At minimum, the destination address of the frame must be read before the frame can be forwarded.",
      "Only the preamble needs to be read to determine the outgoing port.",
      "The first 1000 bytes of the frame's data field must be examined."
    ],
    "correctOption": 1,
    "explanation": "Cut-through switching forwards the frame before it is entirely received. At a minimum, the destination address of the frame must be read before the frame can be forwarded, since the switch needs to know the destination address to determine the outgoing port. This is the defining characteristic of cut-through switching - it does not wait for the complete frame (and therefore cannot verify error-free delivery before forwarding begins), trading some reliability for significantly lower latency compared to store-and-forward switching."
  },
  {
    "quizTitle": "Ethernet Switching",
    "category": "Frame Forwarding Methods",
    "question": "Comparing fast-forward switching and fragment-free switching, both are variants of cut-through switching. What is the key difference between these two variants in terms of how much of the frame is checked before forwarding begins?",
    "options": [
      "Fast-forward checks the entire frame for errors; fragment-free checks only the destination address.",
      "Fast-forward offers the lowest latency by immediately forwarding after reading just the destination address (with no error checking, so errors may be relayed and later discarded by the destination NIC); fragment-free stores and checks the first 64 bytes of the frame for errors before forwarding, since most network errors and collisions occur during this initial portion.",
      "Fast-forward and fragment-free are functionally identical, differing only in the marketing name used by different vendors.",
      "Fragment-free offers lower latency than fast-forward because it skips the destination address lookup entirely."
    ],
    "correctOption": 1,
    "explanation": "Fast-forward switching offers the lowest level of latency by immediately forwarding a packet after reading the destination address. Because it starts forwarding before the entire packet has been received, there may be times when packets are relayed with errors - the destination NIC discards the faulty packet upon receipt. Fragment-free switching is a compromise between high-latency/high-integrity store-and-forward and low-latency/reduced-integrity fast-forward: the switch stores and performs an error check on the first 64 bytes of the frame before forwarding, because most network errors and collisions occur during the first 64 bytes - this ensures a collision has not occurred before forwarding, while still achieving lower latency than full store-and-forward."
  },
  {
    "quizTitle": "Ethernet Switching",
    "category": "Frame Forwarding Methods",
    "question": "A network engineer needs to choose a switching method for an environment where minimizing latency is the absolute top priority, even at the cost of occasionally forwarding corrupted frames (which the destination NIC will discard anyway). Which cut-through variant is the typical method matching this priority?",
    "options": [
      "Store-and-forward switching, because it guarantees zero errors are ever forwarded.",
      "Fragment-free switching, because checking the first 64 bytes adds negligible delay.",
      "Fast-forward switching, which is the typical cut-through method offering the lowest level of latency by immediately forwarding a packet after reading the destination address.",
      "Port-based memory buffering, because it queues frames for sequential low-latency delivery."
    ],
    "correctOption": 2,
    "explanation": "Fast-forward switching offers the lowest level of latency by immediately forwarding a packet after reading the destination address, and it is described as the typical cut-through method of switching. This makes it the appropriate choice when minimizing latency is the top priority and the network can tolerate occasionally relaying error-laden frames, since the destination NIC will simply discard any faulty packet upon receipt. This tradeoff is acceptable in many modern, low-error, high-quality cabled environments where actual bit errors are rare."
  },
  {
    "quizTitle": "Ethernet Switching",
    "category": "Memory Buffering Methods",
    "question": "A switch using port-based memory buffering has a frame destined for a busy outgoing port stuck at the front of a queue. Several other frames are waiting behind it in the same queue, destined for completely different, currently idle ports. What happens to these other frames according to port-based memory buffering behavior?",
    "options": [
      "The other frames bypass the stuck frame and are immediately sent to their open destination ports.",
      "The other frames are delayed because a frame is transmitted to the outgoing port only when all the frames ahead in the queue have been successfully transmitted - it is possible for a single frame to delay the transmission of all frames in memory because of a busy destination port, even though the other frames could be transmitted to open destination ports.",
      "The switch automatically reroutes the other frames to alternate queues to avoid delay.",
      "The other frames are dropped immediately to prevent queue buildup."
    ],
    "correctOption": 1,
    "explanation": "In port-based memory buffering, frames are stored in queues that are linked to specific incoming and outgoing ports. A frame is transmitted to the outgoing port only when all the frames ahead in the queue have been successfully transmitted. This creates a head-of-line blocking problem: it is possible for a single frame to delay the transmission of all the frames in memory because of a busy destination port, and this delay occurs even if the other frames could be transmitted to open destination ports. This is a significant limitation compared to shared memory buffering, which avoids this head-of-line blocking issue."
  },
  {
    "quizTitle": "Ethernet Switching",
    "category": "Memory Buffering Methods",
    "question": "A switch uses shared memory buffering instead of port-based buffering. How does this design avoid the head-of-line blocking problem that occurs with port-based memory buffering?",
    "options": [
      "Shared memory buffering uses a separate dedicated queue for every possible source-destination port pair.",
      "Shared memory buffering deposits all frames into a common memory buffer shared by all switch ports, dynamically allocating buffer memory per port, and frames are dynamically linked to the destination port enabling a packet received on one port to be transmitted on another port without moving it to a different queue.",
      "Shared memory buffering eliminates the need for any queuing by transmitting frames instantly upon arrival.",
      "Shared memory buffering only buffers broadcast frames; unicast frames bypass the buffer entirely."
    ],
    "correctOption": 1,
    "explanation": "Shared memory buffering deposits all frames into a common memory buffer shared by all switch ports, and the amount of buffer memory required by a port is dynamically allocated. The frames in the buffer are dynamically linked to the destination port, enabling a packet to be received on one port and then transmitted on another port, without moving it to a different queue. This dynamic linking architecture avoids the rigid per-port queue structure of port-based buffering, eliminating the scenario where a busy destination port unnecessarily blocks unrelated frames destined for other, available ports."
  },
  {
    "quizTitle": "Ethernet Switching",
    "category": "Memory Buffering Methods",
    "question": "A data center switch dedicates more bandwidth to a server port than to regular user ports, allowing different data rates on different ports. This is described as asymmetric switching. Which memory buffering method is important for supporting asymmetric switching, and why?",
    "options": [
      "Port-based memory buffering, because fixed per-port queues are required to enforce different speeds.",
      "Shared memory buffering, because it results in larger frames that can be transmitted with fewer dropped frames, which is important with asymmetric switching that allows different data rates on different ports, enabling more bandwidth to be dedicated to certain ports such as a server port.",
      "Neither buffering method has any relationship to asymmetric switching; speed differences are handled purely by physical layer hardware.",
      "Port-based memory buffering, because it isolates each port's traffic preventing speed mismatches from causing interference."
    ],
    "correctOption": 1,
    "explanation": "Shared memory buffering also results in larger frames that can be transmitted with fewer dropped frames. This is important with asymmetric switching, which allows for different data rates on different ports. Therefore, more bandwidth can be dedicated to certain ports (e.g., a server port). Because shared memory buffering dynamically allocates buffer capacity per port rather than using fixed, equally-sized queues, it can better accommodate scenarios where a high-speed server port needs significantly more buffering capacity than slower-speed user-facing ports, supporting the differentiated bandwidth allocation that asymmetric switching requires."
  },
  {
    "quizTitle": "Ethernet Switching",
    "category": "Duplex and Speed Settings",
    "question": "A network technician is connecting a new server to a switch port. What must be true about the duplex and bandwidth (speed) settings on both the switch port and the server's NIC for the connection to work correctly?",
    "options": [
      "Duplex settings can differ between the two ends as long as the bandwidth matches, since duplex mismatches do not cause real problems.",
      "It is critical that the duplex and bandwidth settings match between the switch port and the connected device - mismatches in either setting can cause connectivity or performance issues.",
      "Bandwidth settings are negotiated automatically regardless of configuration, but duplex settings must always be manually configured to differ between the two devices.",
      "Only the switch's settings matter; the connected device will automatically adapt to whatever the switch is configured for."
    ],
    "correctOption": 1,
    "explanation": "Two of the most basic settings on a switch are the bandwidth (speed) and duplex settings for each individual switch port, and it is critical that the duplex and bandwidth settings match between the switch port and the connected devices. If these settings do not match - particularly duplex - significant performance problems can occur. This is why proper configuration (either via matching manual settings or via working autonegotiation) on both ends of every link is a fundamental best practice in network deployment and troubleshooting."
  },
  {
    "quizTitle": "Ethernet Switching",
    "category": "Duplex and Speed Settings",
    "question": "A switch port is manually configured for half-duplex, while the connected device's NIC is configured for full-duplex (autonegotiation disabled on both, with no coordination between the two configurations). What problem will this configuration cause, and what is it called?",
    "options": [
      "This causes a bandwidth mismatch, since half-duplex automatically reduces speed to 10 Mbps.",
      "This causes a duplex mismatch - one of the most common causes of performance issues on 10/100 Mbps Ethernet links, occurring when one port on the link operates at half-duplex while the other operates at full-duplex.",
      "This causes no problem at all, since modern Ethernet hardware automatically reconciles different duplex settings.",
      "This causes the link to immediately go down and refuse to pass any traffic whatsoever."
    ],
    "correctOption": 1,
    "explanation": "Duplex mismatch is one of the most common causes of performance issues on 10/100 Mbps Ethernet links. It occurs when one port on the link operates at half-duplex while the other port operates at full-duplex. This typically does not bring the link completely down, but instead causes significant performance degradation due to collisions perceived by the half-duplex side (which expects to detect and handle collisions) while the full-duplex side transmits without any collision awareness, leading to errors, retransmissions, and poor throughput. This mismatch can occur when one or both ports are reset and autonegotiation does not result in both link partners having the same configuration, or when users reconfigure one side of a link and forget to reconfigure the other."
  },
  {
    "quizTitle": "Ethernet Switching",
    "category": "Duplex and Speed Settings",
    "question": "According to best practice recommendations for avoiding duplex mismatch problems, how should administrators configure autonegotiation and duplex settings across both ends of a link?",
    "options": [
      "One side should always have autonegotiation on while the other side should always have it off, to allow flexible negotiation.",
      "Both sides of a link should have autonegotiation on, or both sides should have it off - and best practice is to configure both Ethernet switch ports as full-duplex.",
      "Autonegotiation should always be disabled on switch ports and always enabled on end-user device NICs.",
      "Duplex settings should alternate between half and full duplex on each end to balance network load."
    ],
    "correctOption": 1,
    "explanation": "Both sides of a link should have autonegotiation on, or both sides should have it off. Best practice is to configure both Ethernet switch ports as full-duplex. This consistency requirement prevents the most common cause of duplex mismatch - where one administrator changes a setting on one end without realizing the other end needs the same change, or where autonegotiation succeeds on one side but produces a different result than the other side's manual configuration. Note also that Gigabit Ethernet ports only operate in full-duplex, removing the duplex mismatch risk entirely at that speed (though speed mismatches can still occur)."
  },
  {
    "quizTitle": "Ethernet Switching",
    "category": "Duplex and Speed Settings",
    "question": "A network administrator is configuring a Gigabit Ethernet port on a switch and wonders whether half-duplex needs to be considered as a configuration option. What is true regarding duplex options for Gigabit Ethernet?",
    "options": [
      "Gigabit Ethernet supports both half and full duplex equally, and administrators must choose based on traffic patterns.",
      "Gigabit Ethernet ports only operate in full-duplex - half-duplex is not an available option at this speed.",
      "Gigabit Ethernet defaults to half-duplex unless full-duplex is explicitly enabled by the administrator.",
      "Gigabit Ethernet uses a unique third duplex mode that is neither half nor full duplex."
    ],
    "correctOption": 1,
    "explanation": "Gigabit Ethernet ports only operate in full-duplex - this is explicitly noted as a special case. Unlike older 10/100 Mbps Ethernet, which can be configured for either half-duplex or full-duplex (and where duplex mismatches commonly occur), Gigabit Ethernet eliminates the half-duplex option entirely. This removes one entire category of potential duplex mismatch problems at gigabit speeds, since there is no possibility of one side configuring half-duplex on a Gigabit link."
  },
  {
    "quizTitle": "Ethernet Switching",
    "category": "Autonegotiation and Auto-MDIX",
    "question": "A network technician is connecting a router directly to a host computer for testing purposes. According to traditional Ethernet cabling rules (without relying on auto-MDIX), what type of cable connection is required for this specific scenario?",
    "options": [
      "A straight-through cable, since both devices are considered standard end devices.",
      "A direct connection between a router and a host requires a cross-over connection.",
      "A rollover cable, since routers always require console-style connections to hosts.",
      "Any cable type works as long as both ends use the same connector standard (T568A or T568B)."
    ],
    "correctOption": 1,
    "explanation": "A direct connection between a router and a host requires a cross-over connection. This is because both a router's Ethernet interface and a host's NIC are configured to transmit on the same pin set by default (similar to how two like devices need a crossover cable) - the crossover cable swaps the transmit and receive pairs so that each device's transmit pins connect to the other device's receive pins. Connections between devices once required the use of either a crossover or straight-through cable depending on the type of interconnecting devices, before auto-MDIX became widely available to automatically handle this."
  },
  {
    "quizTitle": "Ethernet Switching",
    "category": "Autonegotiation and Auto-MDIX",
    "question": "A switch has the auto-MDIX feature enabled on its ports. What does this feature do when a cable is connected to a switch port?",
    "options": [
      "Auto-MDIX automatically negotiates the speed and duplex settings between connected devices, replacing manual configuration.",
      "Auto-MDIX automatically detects the type of cable attached to the port (straight-through or crossover) and configures the interface accordingly, eliminating the need to use the theoretically correct cable type for a given device pairing.",
      "Auto-MDIX automatically converts copper Ethernet signals into fiber-optic signals for longer-distance transmission.",
      "Auto-MDIX automatically assigns IP addresses to devices connected through DHCP relay."
    ],
    "correctOption": 1,
    "explanation": "Most switch devices now support the automatic medium-dependent interface crossover (auto-MDIX) feature. When enabled, the switch automatically detects the type of cable attached to the port and configures the interfaces accordingly. This means a straight-through cable can be used where a crossover would normally be required (such as router-to-host), or vice versa, and the connection will still work correctly because the switch port adapts its internal pin configuration to match whatever cable was actually used. This is distinct from autonegotiation, which handles speed and duplex settings rather than cable wiring type."
  },
  {
    "quizTitle": "Ethernet Switching",
    "category": "Autonegotiation and Auto-MDIX",
    "question": "A network instructor warns students that even though auto-MDIX is enabled by default on switches running Cisco IOS Release 12.2(18)SE or later, they should still always use the correct cable type rather than relying on this feature. What is the reasoning behind this recommendation?",
    "options": [
      "Auto-MDIX is not actually compatible with most modern Ethernet equipment despite being enabled by default.",
      "The feature could be disabled (for example, by manual configuration or older software), so relying on it without verification could cause unexpected connectivity failures if it has been turned off.",
      "Auto-MDIX only works for fiber-optic connections, not copper Ethernet cables.",
      "Using the correct cable type is always faster than relying on auto-MDIX negotiation."
    ],
    "correctOption": 1,
    "explanation": "The auto-MDIX feature is enabled by default on switches running Cisco IOS Release 12.2(18)SE or later. However, the feature could be disabled. For this reason, you should always use the correct cable type and not rely on the auto-MDIX feature. This is sound network engineering practice: while auto-MDIX provides convenient flexibility, depending entirely on a feature that could be disabled (intentionally or through misconfiguration, or on older equipment that lacks the feature) introduces unnecessary risk. Using the theoretically correct cable type ensures connectivity regardless of the auto-MDIX configuration state. Auto-MDIX can be re-enabled using the mdix auto interface configuration command if it has been disabled."
  },
  {
    "quizTitle": "Ethernet Switching",
    "category": "Switch Speeds and Forwarding Methods",
    "question": "Comparing store-and-forward switching directly against cut-through switching in terms of latency and error handling, which statement accurately captures the fundamental tradeoff between these two forwarding methods?",
    "options": [
      "Store-and-forward has lower latency but cannot detect errors; cut-through has higher latency but guarantees error-free forwarding.",
      "Store-and-forward switching receives the entire frame and computes the CRC before forwarding (higher latency, but catches errors before propagating them), while cut-through switching forwards the frame before it is entirely received, reading at minimum the destination address (lower latency, but without full error checking in its fast-forward variant).",
      "Both methods have identical latency profiles; the only difference is which Cisco platforms support each method.",
      "Cut-through switching always requires more memory buffering than store-and-forward switching."
    ],
    "correctOption": 1,
    "explanation": "This captures the fundamental tradeoff precisely as described: store-and-forward switching receives the entire frame and computes the CRC - if the CRC is valid, it looks up the destination address and forwards the frame, meaning errors are caught before propagation but at the cost of waiting to receive every bit of the frame (higher latency). Cut-through switching forwards the frame before it is entirely received, with at minimum the destination address being read before forwarding can begin (lower latency), but in its fast-forward variant, no error checking occurs, meaning corrupted frames may be relayed and only caught later at the destination NIC. Fragment-free switching represents the middle ground, checking just the first 64 bytes."
  }
];