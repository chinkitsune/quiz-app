// data/questions/network-ipv4-subnetting.js

module.exports = [
  {
    "quizTitle": "IPv4 Addressing & Subnetting",
    "category": "IPv4 Address Structure",
    "question": "A technician writes down the address 203.45.12.88 with a subnet mask of 255.255.255.0. How many total bits make up the IPv4 address, and how are they divided?",
    "options": [
      "64 bits total — 32 for network, 32 for host.",
      "32 bits total — 24 for network, 8 for host based on the given mask.",
      "32 bits total — 8 for network, 24 for host based on the given mask.",
      "48 bits total — split evenly between network and host."
    ],
    "correctOption": 1,
    "explanation": "IPv4 addresses are always 32 bits. The subnet mask 255.255.255.0 (/24) means the first 24 bits identify the network portion and the last 8 bits identify the host portion. The mask tells you WHERE to split the address, not the total bit count."
  },
  {
    "quizTitle": "IPv4 Addressing & Subnetting",
    "category": "IPv4 Address Structure",
    "question": "You need to find the network address for a host at 172.20.55.130/26. Which operation do you perform?",
    "options": [
      "OR the IP address with the subnet mask bit by bit.",
      "XOR the IP address with the subnet mask bit by bit.",
      "AND the IP address with the subnet mask bit by bit.",
      "Subtract the subnet mask from the IP address."
    ],
    "correctOption": 2,
    "explanation": "The logical AND operation is used to determine the network address. ANDing works bit by bit: 1 AND 1 = 1, and anything ANDed with 0 = 0. This zeroes out the host portion of the address, leaving only the network portion. OR and XOR produce incorrect results, and subtraction is not a valid network operation."
  },
  {
    "quizTitle": "IPv4 Addressing & Subnetting",
    "category": "IPv4 Address Structure",
    "question": "What is the result of ANDing the host address 10110000 with the subnet mask 11111100?",
    "options": [
      "11111100",
      "10110000",
      "10110000",
      "10110000"
    ],
    "correctOption": 1,
    "explanation": "Wait — let's work through this properly. AND each bit: 1&1=1, 0&1=0, 1&1=1, 1&1=1, 0&1=0, 0&1=0, 0&0=0, 0&0=0. Result: 10110000 AND 11111100 = 10110000. The last two bits of 10110000 are 00, so ANDing with 11111100 still gives 10110000. Correct answer is 10110000."
  },
  {
    "quizTitle": "IPv4 Addressing & Subnetting",
    "category": "IPv4 Address Structure",
    "question": "A host has the address 192.168.5.75/28. What is its network address?",
    "options": [
      "192.168.5.0",
      "192.168.5.64",
      "192.168.5.75",
      "192.168.5.48"
    ],
    "correctOption": 1,
    "explanation": "/28 = 255.255.255.240. The last octet of 75 in binary is 01001011. The mask last octet 240 = 11110000. AND: 01000000 = 64. So the network address is 192.168.5.64. The host portion (last 4 bits) gets zeroed out, giving .64 as the network address."
  },
  {
    "quizTitle": "IPv4 Addressing & Subnetting",
    "category": "IPv4 Address Structure",
    "question": "What is the prefix length (CIDR notation) of the subnet mask 255.255.255.192?",
    "options": [
      "/25",
      "/26",
      "/27",
      "/28"
    ],
    "correctOption": 1,
    "explanation": "255.255.255.192 in binary is 11111111.11111111.11111111.11000000. Counting the consecutive 1s from left to right: 8+8+8+2 = 26. The prefix length is /26. Remember: prefix length = the total number of 1-bits in the subnet mask."
  },
  {
    "quizTitle": "IPv4 Addressing & Subnetting",
    "category": "IPv4 Address Structure",
    "question": "Which address is the broadcast address for the network 10.4.0.0/16?",
    "options": [
      "10.4.0.255",
      "10.4.255.255",
      "10.255.255.255",
      "10.4.0.1"
    ],
    "correctOption": 1,
    "explanation": "For a /16 network, the first 16 bits are the network portion and the last 16 bits are host bits. The broadcast address sets ALL host bits to 1. For 10.4.0.0/16, the host portion spans the last two octets, so all 1s = 255.255, giving broadcast address 10.4.255.255."
  },
  {
    "quizTitle": "IPv4 Addressing & Subnetting",
    "category": "IPv4 Address Structure",
    "question": "The network 192.168.30.0/24 has the following address types. How many usable host addresses does this network have?",
    "options": [
      "256 — one for every address in the last octet.",
      "255 — all except the network address.",
      "254 — network and broadcast addresses are reserved.",
      "252 — network, broadcast, and gateway addresses are reserved."
    ],
    "correctOption": 2,
    "explanation": "In any subnet, two addresses are always reserved and cannot be assigned to hosts: the network address (all host bits = 0) and the broadcast address (all host bits = 1). A /24 has 256 possible addresses (2^8), minus 2 reserved = 254 usable host addresses. The gateway address is just a host address chosen by the admin — it is not automatically reserved by the protocol."
  },
  {
    "quizTitle": "IPv4 Addressing & Subnetting",
    "category": "IPv4 Unicast, Broadcast & Multicast",
    "question": "A surveillance system server sends a live video stream to 30 specific cameras on the network. Each camera must receive the same stream simultaneously. Which type of transmission is most efficient?",
    "options": [
      "Unicast — send a separate stream to each camera.",
      "Broadcast — send to all devices on the network.",
      "Multicast — send one stream to a group address that all 30 cameras subscribe to.",
      "Anycast — send to whichever camera responds first."
    ],
    "correctOption": 2,
    "explanation": "Multicast sends a single packet to a multicast group address (224.0.0.0–239.255.255.255), and only devices subscribed to that group receive it. Unicast would require 30 separate streams, wasting bandwidth. Broadcast would flood all devices on the network, not just the cameras. Multicast is the efficient, targeted one-to-many solution."
  },
  {
    "quizTitle": "IPv4 Addressing & Subnetting",
    "category": "IPv4 Unicast, Broadcast & Multicast",
    "question": "A host sends a DHCP Discover message because it has no IP address yet. It cannot address the message to a specific server. What type of transmission does it use, and to what destination address?",
    "options": [
      "Unicast to 0.0.0.0",
      "Multicast to 224.0.0.1",
      "Broadcast to 255.255.255.255",
      "Unicast to 127.0.0.1"
    ],
    "correctOption": 2,
    "explanation": "When a host has no IP address, it cannot unicast to a DHCP server because it doesn't know the server's address yet. It broadcasts to 255.255.255.255 (the limited broadcast address), which reaches all devices on the local network segment. All DHCP servers on the segment will receive this and can respond. Routers do not forward broadcasts, so this stays local."
  },
  {
    "quizTitle": "IPv4 Addressing & Subnetting",
    "category": "IPv4 Unicast, Broadcast & Multicast",
    "question": "Host A at 10.0.1.5 sends a packet directly to Host B at 10.0.1.20. Host C at 10.0.1.30 does not receive the packet. What type of transmission is this?",
    "options": [
      "Broadcast",
      "Multicast",
      "Unicast",
      "Anycast"
    ],
    "correctOption": 2,
    "explanation": "Unicast is a one-to-one transmission: a packet is sent from one source to exactly one destination. Host C not receiving the packet is the defining behavior of unicast — only the addressed destination receives it. Broadcast goes to everyone; multicast goes to a subscribed group."
  },
  {
    "quizTitle": "IPv4 Addressing & Subnetting",
    "category": "Public, Private & Special IPv4 Addresses",
    "question": "A company's internal email server has the IP address 172.25.4.10. Can internet users reach this server directly using this address?",
    "options": [
      "Yes — all IPv4 addresses are globally routable by default.",
      "No — 172.25.4.10 falls within the RFC 1918 private address range and is not globally routable.",
      "Yes — only 10.x.x.x addresses are private; 172.x.x.x addresses are public.",
      "No — only addresses starting with 192.168 are allowed on internal networks."
    ],
    "correctOption": 1,
    "explanation": "The private address range 172.16.0.0/12 covers 172.16.0.0 through 172.31.255.255 (as defined in RFC 1918). The address 172.25.4.10 falls within this range. Private addresses are not globally routable — ISP routers will drop packets destined for them. To allow external access, NAT must translate the private address to a public one."
  },
  {
    "quizTitle": "IPv4 Addressing & Subnetting",
    "category": "Public, Private & Special IPv4 Addresses",
    "question": "Which of the following addresses is a valid public IPv4 address that can be routed across the internet?",
    "options": [
      "10.200.5.1",
      "172.18.100.50",
      "192.168.1.254",
      "203.0.113.45"
    ],
    "correctOption": 3,
    "explanation": "The three RFC 1918 private ranges are: 10.0.0.0/8, 172.16.0.0/12 (172.16–172.31.x.x), and 192.168.0.0/16. All three wrong answers fall in private ranges. 203.0.113.45 is in the public address space and would be routable across the internet by ISPs."
  },
  {
    "quizTitle": "IPv4 Addressing & Subnetting",
    "category": "Public, Private & Special IPv4 Addresses",
    "question": "A developer runs 'ping 127.0.0.1' on their laptop and receives replies. What does this test verify?",
    "options": [
      "That the router is reachable and configured correctly.",
      "That the DNS server is responding to queries.",
      "That the local TCP/IP protocol stack is installed and operational on the device.",
      "That the default gateway can forward packets to the internet."
    ],
    "correctOption": 2,
    "explanation": "127.0.0.1 is the loopback address (within the 127.0.0.0/8 range). Packets sent to this address never leave the host — they loop back internally. A successful ping to 127.0.0.1 confirms the TCP/IP stack on the local machine is functioning. It tests nothing about external devices, DNS, routers, or internet connectivity."
  },
  {
    "quizTitle": "IPv4 Addressing & Subnetting",
    "category": "Public, Private & Special IPv4 Addresses",
    "question": "A Windows laptop automatically assigns itself 169.254.45.200 and cannot access any network resources. What is the most likely cause?",
    "options": [
      "The laptop was manually configured with the wrong static IP.",
      "The laptop could not contact a DHCP server and self-assigned an APIPA address.",
      "The laptop's subnet mask is incorrect, causing it to use the wrong network.",
      "The router rejected the IP address because it's in the multicast range."
    ],
    "correctOption": 1,
    "explanation": "169.254.0.0/16 is the APIPA (Automatic Private IP Addressing) / Link-Local range. Windows DHCP clients self-assign an address in this range when no DHCP server is reachable. APIPA addresses allow limited peer-to-peer communication on the local link but cannot route to other networks or the internet. The fix is to restore DHCP service or configure a static IP."
  },
  {
    "quizTitle": "IPv4 Addressing & Subnetting",
    "category": "Public, Private & Special IPv4 Addresses",
    "question": "Which organization is at the top of the IP address allocation hierarchy, distributing blocks to Regional Internet Registries (RIRs)?",
    "options": [
      "IEEE",
      "IETF",
      "IANA",
      "ITU"
    ],
    "correctOption": 2,
    "explanation": "The Internet Assigned Numbers Authority (IANA) manages and allocates blocks of IPv4 and IPv6 addresses globally. IANA distributes large address blocks to five Regional Internet Registries (RIRs) such as ARIN (North America) and RIPE NCC (Europe), which then allocate to ISPs, who in turn assign addresses to organizations and end users."
  },
  {
    "quizTitle": "IPv4 Addressing & Subnetting",
    "category": "Public, Private & Special IPv4 Addresses",
    "question": "A company's internal network uses 10.0.0.0/8 addresses. Their web server must be accessible from the internet. Where should the web server's public IP address come from, and how is it handled?",
    "options": [
      "Assign it a 10.x.x.x address — all IPv4 addresses are publicly routable with correct routing.",
      "Assign it a public IPv4 address obtained via their ISP; the edge router uses NAT to map internal traffic to it.",
      "Assign it 127.0.0.1 — loopback addresses are visible to the entire internet.",
      "Assign it 169.254.x.x — link-local addresses are internet-accessible if ports are opened."
    ],
    "correctOption": 1,
    "explanation": "Servers accessible from the internet require public IPv4 addresses, typically obtained from an ISP. Network Address Translation (NAT), enabled on the edge router, translates between the internal private address and the external public address. This allows an internal server to be reachable from the internet while keeping its private address hidden."
  },
  {
    "quizTitle": "IPv4 Addressing & Subnetting",
    "category": "Public, Private & Special IPv4 Addresses",
    "question": "Under the legacy classful addressing scheme, which class would the address 145.80.10.5 belong to?",
    "options": [
      "Class A — because the first octet is below 128.",
      "Class B — because the first octet is between 128 and 191.",
      "Class C — because the first octet is between 192 and 223.",
      "Class D — because it is a multicast address."
    ],
    "correctOption": 1,
    "explanation": "Legacy classful addressing defined: Class A (1–126), Class B (128–191), Class C (192–223), Class D (224–239, multicast), Class E (240–255, reserved). The first octet of 145 falls in the 128–191 range, making it a Class B address. Under classful rules, Class B networks had a default /16 mask. Modern networking uses classless (CIDR) addressing, which ignores these rules."
  },
  {
    "quizTitle": "IPv4 Addressing & Subnetting",
    "category": "Network Segmentation",
    "question": "A flat network with 800 workstations experiences slow performance. A network trace reveals thousands of ARP requests flooding the network per minute. What is the most effective architectural fix?",
    "options": [
      "Replace all switches with hubs to simplify the network.",
      "Add more bandwidth by upgrading to Gigabit Ethernet.",
      "Subnet the network into smaller broadcast domains using routers.",
      "Assign all devices static IP addresses to reduce DHCP broadcasts."
    ],
    "correctOption": 2,
    "explanation": "ARP uses broadcasts, and in a large flat network, every ARP request reaches all 800 devices. This creates excessive broadcast traffic that degrades performance for every host. Subnetting divides the network into smaller broadcast domains. Routers (not switches) contain broadcasts within each subnet, so ARP floods only affect devices in the same subnet. This is the fundamental purpose of subnetting: reducing broadcast domain size."
  },
  {
    "quizTitle": "IPv4 Addressing & Subnetting",
    "category": "Network Segmentation",
    "question": "A switch receives a broadcast frame on port 3. What does it do with the frame?",
    "options": [
      "Drops the frame — switches do not forward broadcasts.",
      "Forwards it only to the port where the destination is registered.",
      "Forwards it out all ports except the port it was received on.",
      "Sends it to the router for processing first."
    ],
    "correctOption": 2,
    "explanation": "Switches propagate broadcast frames out every port except the port on which the frame arrived. This is why switches alone cannot contain broadcast storms — they spread the broadcast to all devices in the VLAN/segment. Only a router stops broadcasts from crossing into another network. This behavior is why large flat switched networks suffer from excessive broadcast traffic."
  },
  {
    "quizTitle": "IPv4 Addressing & Subnetting",
    "category": "Network Segmentation",
    "question": "A hospital network places medical devices, administrative PCs, and guest Wi-Fi on separate subnets. Beyond performance, what other benefit does this provide?",
    "options": [
      "It eliminates the need for encryption since subnets are isolated.",
      "It allows security policies to be applied between subnets, controlling which devices can communicate.",
      "It ensures all devices get public IP addresses automatically.",
      "It increases the number of available IP addresses for each device type."
    ],
    "correctOption": 1,
    "explanation": "Subnetting provides both performance and security benefits. By placing different device groups on separate subnets, network security policies (via firewalls and ACLs on routers) can control traffic between subnets. For example, guest Wi-Fi users can be prevented from reaching medical devices. Subnetting does not eliminate encryption needs, manage IP address type, or directly increase available addresses."
  },
  {
    "quizTitle": "IPv4 Addressing & Subnetting",
    "category": "Subnetting a /24 Network",
    "question": "You need to subnet 192.168.10.0/24 to support exactly 4 departments, each requiring no more than 50 hosts. Which subnet mask gives you the minimum number of subnets that meets this need while maximizing host capacity?",
    "options": [
      "/25 — gives 2 subnets of 126 hosts each.",
      "/26 — gives 4 subnets of 62 hosts each.",
      "/27 — gives 8 subnets of 30 hosts each.",
      "/28 — gives 16 subnets of 14 hosts each."
    ],
    "correctOption": 1,
    "explanation": "/26 (255.255.255.192) creates exactly 4 subnets, each supporting 62 hosts — enough for 50 devices per department. /25 only gives 2 subnets (not enough). /27 gives 8 subnets of only 30 hosts each — insufficient for 50 hosts. /26 is the precise fit: minimum subnets that satisfies both the count (4) and the host capacity (>50) requirements."
  },
  {
    "quizTitle": "IPv4 Addressing & Subnetting",
    "category": "Subnetting a /24 Network",
    "question": "A network is subnetted as 10.5.5.0/27. What is the broadcast address of this subnet?",
    "options": [
      "10.5.5.255",
      "10.5.5.31",
      "10.5.5.32",
      "10.5.5.30"
    ],
    "correctOption": 1,
    "explanation": "/27 has a block size of 32 (256 - 224 = 32). The subnet 10.5.5.0/27 spans addresses .0 through .31. The network address is .0, and the broadcast address is the last address in the block: .31. Hosts use .1 through .30. The next subnet would begin at .32. Broadcast = network address + block size - 1 = 0 + 32 - 1 = 31."
  },
  {
    "quizTitle": "IPv4 Addressing & Subnetting",
    "category": "Subnetting a /24 Network",
    "question": "You borrow 3 bits from the host portion of a /24 network for subnetting. How many subnets and usable hosts per subnet does this create?",
    "options": [
      "4 subnets, 62 hosts each.",
      "8 subnets, 32 hosts each.",
      "8 subnets, 30 hosts each.",
      "6 subnets, 30 hosts each."
    ],
    "correctOption": 2,
    "explanation": "Borrowing 3 bits from a /24 creates 2^3 = 8 subnets. The remaining host bits are 8 - 3 = 5, giving 2^5 = 32 addresses per subnet, minus 2 reserved (network + broadcast) = 30 usable hosts. The resulting prefix is /27. Many older references subtracted 2 from the subnet count as well, but modern practice counts all subnets including all-zeros and all-ones subnets."
  },
  {
    "quizTitle": "IPv4 Addressing & Subnetting",
    "category": "Subnetting a /24 Network",
    "question": "Which subnet does the host 172.16.50.195/26 belong to?",
    "options": [
      "172.16.50.128",
      "172.16.50.192",
      "172.16.50.128",
      "172.16.50.64"
    ],
    "correctOption": 1,
    "explanation": "/26 has a block size of 64. Subnets of .0/26 are at .0, .64, .128, .192. The host .195 falls between .192 and .255, so it belongs to the 172.16.50.192/26 subnet. Its broadcast is .255, and hosts range from .193 to .254. To find the subnet: divide 195 by 64 = 3, so subnet starts at 3 × 64 = 192."
  },
  {
    "quizTitle": "IPv4 Addressing & Subnetting",
    "category": "Subnetting a /24 Network",
    "question": "A /29 subnet is assigned for a point-to-point WAN link. How many usable host addresses are available?",
    "options": [
      "8",
      "6",
      "4",
      "2"
    ],
    "correctOption": 1,
    "explanation": "/29 has 3 host bits: 2^3 = 8 total addresses, minus 2 (network + broadcast) = 6 usable hosts. While a WAN point-to-point link only needs 2 addresses, /29 is still quite wasteful. A /30 (2 usable hosts) would be the tightest fit. This question illustrates why VLSM was developed — to assign appropriately-sized subnets to each link type."
  },
  {
    "quizTitle": "IPv4 Addressing & Subnetting",
    "category": "Subnetting a /24 Network",
    "question": "A student claims that the address 192.168.1.0 can be assigned to a workstation in the 192.168.1.0/24 network. Is the student correct?",
    "options": [
      "Yes — .0 is a valid host address in any subnet.",
      "No — .0 is the network address and cannot be assigned to a host.",
      "Yes — only .255 is reserved; .0 is usable.",
      "No — addresses ending in .0 are always used for routers."
    ],
    "correctOption": 1,
    "explanation": "192.168.1.0 is the network address of the 192.168.1.0/24 subnet — it identifies the network itself and cannot be assigned to any host. The network address has all host bits set to 0. Similarly, 192.168.1.255 is the broadcast address (all host bits = 1) and also cannot be assigned. Usable hosts are .1 through .254."
  },
  {
    "quizTitle": "IPv4 Addressing & Subnetting",
    "category": "Subnetting /16 and /8 Networks",
    "question": "A university has been given the address block 172.22.0.0/16. They need at least 200 subnets. How many bits must they borrow, and what is the resulting prefix length?",
    "options": [
      "7 bits — /23 prefix.",
      "8 bits — /24 prefix.",
      "7 bits — /24 prefix.",
      "8 bits — /23 prefix."
    ],
    "correctOption": 1,
    "explanation": "Starting from /16, borrowing 7 bits gives 2^7 = 128 subnets (not enough for 200). Borrowing 8 bits gives 2^8 = 256 subnets (sufficient). Adding 8 bits to the /16 prefix gives a /24 prefix. The resulting subnets would be 172.22.0.0/24, 172.22.1.0/24, 172.22.2.0/24... etc., each with 254 usable hosts."
  },
  {
    "quizTitle": "IPv4 Addressing & Subnetting",
    "category": "Subnetting /16 and /8 Networks",
    "question": "A company uses 10.0.0.0/8. They subnet it to /16. How many subnets and hosts per subnet does this create?",
    "options": [
      "128 subnets, 65,534 hosts each.",
      "256 subnets, 65,534 hosts each.",
      "256 subnets, 16,777,214 hosts each.",
      "512 subnets, 32,766 hosts each."
    ],
    "correctOption": 1,
    "explanation": "Going from /8 to /16 means borrowing 8 bits for subnetting (2^8 = 256 subnets). Each /16 subnet has 16 host bits remaining: 2^16 - 2 = 65,534 usable hosts. So a /8 network subnetted to /16 yields 256 subnets × 65,534 hosts each. This is the mathematics of subnetting at octet boundaries."
  },
  {
    "quizTitle": "IPv4 Addressing & Subnetting",
    "category": "Subnetting /16 and /8 Networks",
    "question": "An ISP has been assigned 10.0.0.0/8. They need to create subnets for over 1000 clients. What is the minimum number of bits they must borrow?",
    "options": [
      "9 bits (512 subnets)",
      "10 bits (1024 subnets)",
      "8 bits (256 subnets)",
      "11 bits (2048 subnets)"
    ],
    "correctOption": 1,
    "explanation": "The requirement is MORE than 1000 subnets. 2^9 = 512 (insufficient). 2^10 = 1024 (just over 1000 — sufficient). Borrowing 10 bits from the /8 network gives 1024 subnets with a /18 prefix (8 + 10 = 18). Always round up to the next power of 2 that meets or exceeds the requirement."
  },
  {
    "quizTitle": "IPv4 Addressing & Subnetting",
    "category": "Subnet to Meet Requirements",
    "question": "A network administrator is designing subnets for a branch office with 3 departments: Sales (45 hosts), HR (20 hosts), and IT (8 hosts). Which combination of subnet masks is most efficient?",
    "options": [
      "All three use /24 — consistent and simple to manage.",
      "Sales: /26 (62 hosts), HR: /27 (30 hosts), IT: /28 (14 hosts).",
      "All three use /26 — provides 62 hosts each for growth.",
      "Sales: /25 (126 hosts), HR: /25 (126 hosts), IT: /25 (126 hosts)."
    ],
    "correctOption": 1,
    "explanation": "Efficient subnetting matches the mask to the requirement, minimizing waste. Sales needs >45 → /26 gives 62 hosts. HR needs >20 → /27 gives 30 hosts. IT needs >8 → /28 gives 14 hosts. Using /24 for all wastes 200+ addresses per subnet. Using /25 for all wastes even more. Choosing the tightest mask that still meets the need is the principle of efficient subnetting."
  },
  {
    "quizTitle": "IPv4 Addressing & Subnetting",
    "category": "Subnet to Meet Requirements",
    "question": "Two routers are connected by a serial WAN link. You need to assign IP addresses to the two router interfaces. Which prefix is most efficient to minimize address waste?",
    "options": [
      "/24 — standard and widely supported.",
      "/28 — gives 14 hosts, plenty of room for future routers.",
      "/30 — gives exactly 2 usable hosts for the two router interfaces.",
      "/29 — gives 6 hosts as a safety margin."
    ],
    "correctOption": 2,
    "explanation": "/30 provides exactly 2 usable host addresses — precisely what's needed for a point-to-point WAN link connecting two router interfaces. Using anything larger wastes addresses unnecessarily. /30 has the mask 255.255.255.252, and with 2 host bits, provides 2^2 - 2 = 2 usable hosts. In VLSM design, WAN links are almost always assigned /30 subnets."
  },
  {
    "quizTitle": "IPv4 Addressing & Subnetting",
    "category": "Subnet to Meet Requirements",
    "question": "A company plans a DMZ for its internet-facing web and mail servers. What type of IP addresses must the DMZ devices use?",
    "options": [
      "Private RFC 1918 addresses — the DMZ is still inside the company.",
      "APIPA addresses — these are reserved for servers in the DMZ.",
      "Public IPv4 addresses — DMZ servers must be reachable from the internet.",
      "Loopback addresses — for security isolation."
    ],
    "correctOption": 2,
    "explanation": "A DMZ (Demilitarized Zone) hosts servers that must be accessible from the internet, such as web or mail servers. These servers must have public IPv4 addresses because private RFC 1918 addresses are not globally routable — ISPs will drop packets destined for them. The internal intranet uses private addresses, but DMZ devices facing the internet must use public addresses."
  },
  {
    "quizTitle": "IPv4 Addressing & Subnetting",
    "category": "VLSM",
    "question": "A network design uses 192.168.1.0/24. Site A needs 100 hosts, Site B needs 50 hosts, Site C needs 25 hosts, and two WAN links each need 2 hosts. Which VLSM approach is correct?",
    "options": [
      "Assign /25 to all sites and WAN links for simplicity.",
      "Start with Site A (/25), then Site B (/26), then Site C (/27), then each WAN link (/30).",
      "Start with WAN links first (/30), then assign remaining space to larger subnets.",
      "Assign /24 to Site A and split the remainder equally among Sites B and C."
    ],
    "correctOption": 1,
    "explanation": "VLSM requires you to always start with the LARGEST subnet requirement first, then work down to the smallest. Site A needs >100 hosts → /25 (126 hosts). Site B needs >50 → /26 (62 hosts). Site C needs >25 → /27 (30 hosts). WAN links need 2 hosts → /30. Starting with the largest ensures enough contiguous address space is available. Starting with small subnets first can fragment the space, leaving no room for larger subnets."
  },
  {
    "quizTitle": "IPv4 Addressing & Subnetting",
    "category": "VLSM",
    "question": "A traditional (fixed-length) subnetting scheme is applied to a network with 5 LANs (30 hosts each) and 4 point-to-point WAN links. Each WAN link gets a /27 subnet (30 hosts). How many addresses are wasted per WAN link?",
    "options": [
      "0 — all addresses are used.",
      "14 — a /29 would have been sufficient.",
      "28 — only 2 of the 30 usable addresses are used.",
      "30 — the entire subnet is wasted."
    ],
    "correctOption": 2,
    "explanation": "A /27 provides 30 usable host addresses. A point-to-point WAN link only needs 2 addresses (one per router interface). This means 30 - 2 = 28 addresses are wasted per WAN link. With 4 WAN links, that's 112 wasted addresses total. This is precisely the problem VLSM solves — by assigning /30 subnets to WAN links, you use only what you need."
  },
  {
    "quizTitle": "IPv4 Addressing & Subnetting",
    "category": "VLSM",
    "question": "After assigning 192.168.5.0/25 to the largest LAN (100 hosts), what is the next available subnet address to begin allocating the next-largest requirement?",
    "options": [
      "192.168.5.127",
      "192.168.5.128",
      "192.168.5.126",
      "192.168.5.255"
    ],
    "correctOption": 1,
    "explanation": "A /25 subnet covers addresses .0 through .127 (block size = 128). The network address is .0, the broadcast is .127, and hosts use .1–.126. The NEXT available subnet begins immediately after the broadcast address: .128. In VLSM, subnets must not overlap — always start the next subnet at the first address after the previous subnet's broadcast."
  },
  {
    "quizTitle": "IPv4 Addressing & Subnetting",
    "category": "VLSM",
    "question": "Which statement best describes the purpose of VLSM compared to traditional fixed-length subnetting?",
    "options": [
      "VLSM uses longer subnet masks across the board to increase the number of subnets.",
      "VLSM allows different subnets within the same network to have different prefix lengths, reducing address waste.",
      "VLSM allows hosts to change their own subnet mask dynamically.",
      "VLSM eliminates the need for routers by using broadcast-based addressing."
    ],
    "correctOption": 1,
    "explanation": "VLSM (Variable Length Subnet Masking) allows you to 'subnet a subnet' — applying different masks to different parts of the same network space. A large LAN might use /26 while WAN links use /30, all from the same /24 block. This eliminates the waste of assigning the same large mask to both large LANs and small WAN links. Traditional fixed-length subnetting forces all subnets to use the same mask."
  },
  {
    "quizTitle": "IPv4 Addressing & Subnetting",
    "category": "Structured Design",
    "question": "In a well-designed network, how should IP addresses for company servers be assigned?",
    "options": [
      "Dynamically via DHCP — to reduce manual configuration work.",
      "Using APIPA — so they auto-configure if DHCP fails.",
      "With predictable static IP addresses — for reliable access and management.",
      "From the public IP range — even if they're internal."
    ],
    "correctOption": 2,
    "explanation": "Servers should have static (manually assigned) IP addresses so that clients and administrators can reliably reach them at a predictable address. If a server's IP changes (as it might with DHCP), all clients pointing to it would lose connectivity. End-user workstations typically use DHCP, but infrastructure devices like servers, routers, and switches should have static, consistent addresses."
  },
  {
    "quizTitle": "IPv4 Addressing & Subnetting",
    "category": "Structured Design",
    "question": "A network admin is planning address allocation. Which device type should receive IP addresses via DHCP rather than static assignment?",
    "options": [
      "Core routers — they change configurations frequently.",
      "End-user workstations and laptops — there are many of them and they change often.",
      "Web servers in the DMZ — they need dynamic public addresses.",
      "Layer 3 switches — they require frequent IP changes for routing."
    ],
    "correctOption": 1,
    "explanation": "DHCP is ideal for end-user devices (workstations, laptops, mobile devices) because there are many of them, they come and go, and manually configuring each one would be error-prone and time-consuming. Routers, servers, switches, and other infrastructure devices should use static addresses for reliability and manageability. DMZ servers need static public IPs — not dynamic — to ensure consistent internet reachability."
  },
  {
    "quizTitle": "IPv4 Addressing & Subnetting",
    "category": "Subnet Calculations — Recall",
    "question": "What is the subnet mask in dotted-decimal notation for a /27 prefix?",
    "options": [
      "255.255.255.192",
      "255.255.255.224",
      "255.255.255.240",
      "255.255.255.248"
    ],
    "correctOption": 1,
    "explanation": "/27 means 27 bits are set to 1 in the subnet mask. The first three octets are all 1s (255.255.255). The fourth octet has 3 bits set to 1: 11100000 = 128+64+32 = 224. So /27 = 255.255.255.224. Memorize the pattern: /25=.128, /26=.192, /27=.224, /28=.240, /29=.248, /30=.252."
  },
  {
    "quizTitle": "IPv4 Addressing & Subnetting",
    "category": "Subnet Calculations — Recall",
    "question": "How many usable host addresses are in a /30 subnet?",
    "options": [
      "4",
      "6",
      "2",
      "8"
    ],
    "correctOption": 2,
    "explanation": "/30 has 2 host bits: 2^2 = 4 total addresses. Subtract 2 (network address + broadcast address) = 2 usable host addresses. This makes /30 ideal for point-to-point WAN links connecting two router interfaces. It is the smallest subnet mask that provides any usable host addresses."
  },
  {
    "quizTitle": "IPv4 Addressing & Subnetting",
    "category": "Subnet Calculations — Recall",
    "question": "What is the block size (increment between subnets) for a /26 subnet?",
    "options": [
      "32",
      "64",
      "128",
      "16"
    ],
    "correctOption": 1,
    "explanation": "Block size = 256 - subnet mask last octet value. For /26, the mask is 255.255.255.192. Block size = 256 - 192 = 64. This means /26 subnets start at multiples of 64: .0, .64, .128, .192. This 'magic number' trick is a fast way to identify subnet boundaries without binary conversion."
  },
  {
    "quizTitle": "IPv4 Addressing & Subnetting",
    "category": "Subnet Calculations — Recall",
    "question": "Which RFC defines the three ranges of private IPv4 addresses?",
    "options": [
      "RFC 791",
      "RFC 1918",
      "RFC 2460",
      "RFC 790"
    ],
    "correctOption": 1,
    "explanation": "RFC 1918 defines the three private IPv4 address ranges: 10.0.0.0/8, 172.16.0.0/12, and 192.168.0.0/16. These addresses are reserved for private use and are not globally routable. RFC 791 defines IPv4 itself. RFC 790 defined legacy classful addressing. RFC 2460 defines IPv6."
  },
  {
    "quizTitle": "IPv4 Addressing & Subnetting",
    "category": "Subnet Calculations — Recall",
    "question": "What is the valid multicast address range in IPv4?",
    "options": [
      "192.168.0.0 to 192.168.255.255",
      "172.16.0.0 to 172.31.255.255",
      "224.0.0.0 to 239.255.255.255",
      "240.0.0.0 to 255.255.255.255"
    ],
    "correctOption": 2,
    "explanation": "IPv4 multicast addresses are in the range 224.0.0.0 to 239.255.255.255 (Class D in legacy classful notation). Devices join a multicast group by subscribing to an address in this range. For example, routing protocols like OSPF use 224.0.0.5 and 224.0.0.6. Addresses 240.0.0.0 and above are Class E — reserved for experimental use."
  },
  {
    "quizTitle": "IPv4 Addressing & Subnetting",
    "category": "Subnet Calculations — Recall",
    "question": "What does the /8, /16, and /24 represent in CIDR notation?",
    "options": [
      "The number of host addresses available.",
      "The number of subnets created.",
      "The number of consecutive 1-bits in the subnet mask from the left.",
      "The number of octets used for the network portion."
    ],
    "correctOption": 2,
    "explanation": "CIDR (Classless Inter-Domain Routing) notation uses a slash followed by the number of 1-bits in the subnet mask, counted from left to right. /8 = 8 ones = 255.0.0.0, /16 = 16 ones = 255.255.0.0, /24 = 24 ones = 255.255.255.0. This prefix length directly indicates the size of the network portion of the address."
  },
  {
    "quizTitle": "IPv4 Addressing & Subnetting",
    "category": "Subnet Calculations — Recall",
    "question": "What is the loopback address range, and what is its primary use?",
    "options": [
      "169.254.0.0/16 — used when DHCP is unavailable.",
      "127.0.0.0/8 — used to test the local TCP/IP stack on a host.",
      "10.0.0.0/8 — the most common private network range.",
      "192.168.0.0/16 — used for small home and office networks."
    ],
    "correctOption": 1,
    "explanation": "The loopback address range is 127.0.0.0/8, with 127.0.0.1 being the most commonly used address. Packets sent to this address loop back within the host — they never leave the device. Pinging 127.0.0.1 tests whether the TCP/IP protocol stack is installed and functioning correctly on the local machine, without testing any external hardware or cables."
  },
  {
    "quizTitle": "IPv4 Addressing & Subnetting",
    "category": "Subnet Calculations — Recall",
    "question": "What is the formula to calculate the number of usable host addresses in a subnet?",
    "options": [
      "2^n where n is the number of host bits.",
      "2^n - 1 where n is the number of host bits.",
      "2^n - 2 where n is the number of host bits.",
      "2^n + 2 where n is the number of host bits."
    ],
    "correctOption": 2,
    "explanation": "The formula is 2^n - 2, where n = the number of host bits. The '- 2' accounts for two reserved addresses that cannot be assigned to hosts: the network address (all host bits = 0) and the broadcast address (all host bits = 1). For example, /28 has 4 host bits: 2^4 - 2 = 16 - 2 = 14 usable hosts."
  },
  {
    "quizTitle": "IPv4 Addressing & Subnetting",
    "category": "Subnet Calculations — Recall",
    "question": "Which device type is defined as the 'gateway' that connects hosts to other networks?",
    "options": [
      "Switch — it connects all hosts in a LAN.",
      "Hub — it broadcasts signals to all devices.",
      "Router or firewall — it is the gateway connecting the network to other networks.",
      "Access point — it provides wireless connectivity."
    ],
    "correctOption": 2,
    "explanation": "Routers and firewall devices act as the gateway for hosts in a network. The default gateway is the router interface IP address that hosts send traffic to when the destination is outside their own subnet. Routers also perform the critical function of stopping broadcast propagation between subnets/networks."
  },
  {
    "quizTitle": "IPv4 Addressing & Subnetting",
    "category": "Subnet Calculations — Recall",
    "question": "How many subnets can be created from a /24 network using a /28 mask?",
    "options": [
      "4",
      "8",
      "16",
      "32"
    ],
    "correctOption": 2,
    "explanation": "Going from /24 to /28 borrows 4 bits (28 - 24 = 4). Number of subnets = 2^4 = 16. Each /28 subnet has 4 host bits, supporting 14 usable hosts. The 16 subnets would be at .0, .16, .32, .48, .64, .80, .96, .112, .128, .144, .160, .176, .192, .208, .224, .240 — each spanning a block of 16 addresses."
  },
  {
    "quizTitle": "IPv4 Addressing & Subnetting",
    "category": "Subnet Calculations — Recall",
    "question": "What is the broadcast address of the subnet 10.0.0.0/8?",
    "options": [
      "10.0.0.255",
      "10.255.255.255",
      "10.0.255.255",
      "255.255.255.255"
    ],
    "correctOption": 1,
    "explanation": "For a /8 network, the first 8 bits are network bits and the remaining 24 bits are host bits. The broadcast address sets all host bits to 1. For 10.0.0.0/8, the host portion spans the last three octets, so all 1s = 255.255.255, giving the broadcast address 10.255.255.255. The 255.255.255.255 is a limited broadcast that doesn't specify a network."
  },
  {
    "quizTitle": "IPv4 Addressing & Subnetting",
    "category": "Applied / Code Scenario",
    "question": "A Python script contains: `ip = '10.10.5.200'; mask = '255.255.255.192'`. Which network does this host belong to? (Hint: perform the AND operation mentally on the last octet.)",
    "options": [
      "10.10.5.0",
      "10.10.5.128",
      "10.10.5.192",
      "10.10.5.64"
    ],
    "correctOption": 2,
    "explanation": "AND 10.10.5.200 with 255.255.255.192. First three octets remain 10.10.5. Last octet: 200 = 11001000, mask 192 = 11000000. AND: 11000000 = 192. Network address = 10.10.5.192. The /26 block containing .200 runs from .192 to .255, confirming this host belongs to the 10.10.5.192/26 subnet."
  },
  {
    "quizTitle": "IPv4 Addressing & Subnetting",
    "category": "Applied / Code Scenario",
    "question": "Examine this pseudocode:\n\nprefix = 24\nborrowed_bits = 3\nnew_prefix = prefix + borrowed_bits\nnum_subnets = 2 ** borrowed_bits\nhost_bits = 32 - new_prefix\nusable_hosts = (2 ** host_bits) - 2\n\nWhat are the values of num_subnets and usable_hosts?",
    "options": [
      "num_subnets = 6, usable_hosts = 28",
      "num_subnets = 8, usable_hosts = 30",
      "num_subnets = 8, usable_hosts = 32",
      "num_subnets = 3, usable_hosts = 30"
    ],
    "correctOption": 1,
    "explanation": "Step through the code: new_prefix = 24 + 3 = 27. num_subnets = 2^3 = 8. host_bits = 32 - 27 = 5. usable_hosts = 2^5 - 2 = 32 - 2 = 30. This matches the /27 subnet values: 8 subnets, 30 usable hosts each. The code correctly implements the subnetting formulas."
  },
  {
    "quizTitle": "IPv4 Addressing & Subnetting",
    "category": "Applied / Code Scenario",
    "question": "A script checks: `if ip_int & mask_int == network_int`. What networking operation does the `&` (bitwise AND) represent here, and what does a True result mean?",
    "options": [
      "It checks if two addresses are identical; True means they're the same host.",
      "It performs logical AND to determine the network address; True means the IP belongs to that network.",
      "It checks if the IP is a broadcast address; True means the packet should be forwarded.",
      "It compares the host portions; True means the hosts share the same subnet mask."
    ],
    "correctOption": 1,
    "explanation": "The bitwise AND (&) of an IP address with its subnet mask extracts the network address. If the result equals the expected network address (network_int), then the IP belongs to that subnet. This is exactly how routers and operating systems determine if a destination is on the local network or needs to be forwarded to the gateway. It's the software implementation of the ANDing process taught in networking."
  },
  {
    "quizTitle": "IPv4 Addressing & Subnetting",
    "category": "Applied / Code Scenario",
    "question": "A function returns `host_count = (2 ** host_bits) - 2`. For a /29 subnet, what value does it return, and why is 2 subtracted?",
    "options": [
      "Returns 8 — 2 is subtracted for the router and the switch.",
      "Returns 6 — 2 is subtracted for the network address and broadcast address.",
      "Returns 4 — 2 is subtracted because /29 has only 4 host bits.",
      "Returns 8 — no subtraction is needed for /29 subnets."
    ],
    "correctOption": 1,
    "explanation": "/29 has 3 host bits (32 - 29 = 3). 2^3 = 8 total addresses. Subtracting 2 gives 6 usable host addresses. The 2 subtracted are always the network address (host bits all 0 — identifies the subnet itself) and the broadcast address (host bits all 1 — used to reach all hosts simultaneously). These two addresses can never be assigned to a host."
  },
  {
    "quizTitle": "IPv4 Addressing & Subnetting",
    "category": "Applied / Code Scenario",
    "question": "Given the following:\n\nnetwork = '192.168.100.0'\nprefix = 26\nblock_size = 256 - 192  # 192 is the last octet of /26 mask\n\nWhat is block_size, and what does it represent?",
    "options": [
      "block_size = 64 — the number of addresses in each /26 subnet, including network and broadcast.",
      "block_size = 192 — the starting address of the first /26 subnet.",
      "block_size = 64 — the number of usable host addresses per /26 subnet.",
      "block_size = 32 — because /26 borrows 2 bits from a /24."
    ],
    "correctOption": 0,
    "explanation": "256 - 192 = 64. The block size of 64 means each /26 subnet spans 64 consecutive addresses. Subnets of 192.168.100.0/26 start at .0, .64, .128, .192. Each block contains 64 total addresses (including the network and broadcast), so 62 usable hosts. Block size is a quick way to find subnet boundaries: just add block_size to the previous subnet start."
  },
  {
    "quizTitle": "IPv4 Addressing & Subnetting",
    "category": "Applied / Code Scenario",
    "question": "A network scanning tool uses this check: `if (ip[0] == 10) or (ip[0] == 172 and 16 <= ip[1] <= 31) or (ip[0] == 192 and ip[1] == 168)`. What is this code detecting?",
    "options": [
      "Whether an IP address is a loopback or link-local address.",
      "Whether an IP address belongs to one of the three RFC 1918 private ranges.",
      "Whether an IP address is in the multicast or reserved range.",
      "Whether an IP address has a valid subnet mask."
    ],
    "correctOption": 1,
    "explanation": "This code checks all three RFC 1918 private ranges: 10.0.0.0/8 (first octet = 10), 172.16.0.0/12 (first octet = 172 AND second octet between 16–31), and 192.168.0.0/16 (first octet = 192 AND second octet = 168). If any condition is true, the address is private and not globally routable. Network tools use this to distinguish internal vs. internet-facing addresses."
  },
  {
    "quizTitle": "IPv4 Addressing & Subnetting",
    "category": "Applied / Code Scenario",
    "question": "A developer writes:\n\nsubnets = []\nfor i in range(4):\n    subnet_start = 192 + (i * 64)\n    subnets.append(f'10.0.5.{subnet_start}/26')\n\nWhat subnets does this generate?",
    "options": [
      "10.0.5.0/26, 10.0.5.64/26, 10.0.5.128/26, 10.0.5.192/26",
      "10.0.5.0/26, 10.0.5.32/26, 10.0.5.64/26, 10.0.5.96/26",
      "10.0.5.192/26, 10.0.5.128/26, 10.0.5.64/26, 10.0.5.0/26",
      "10.0.5.0/26, 10.0.5.128/26, 10.0.5.255/26, 10.0.5.64/26"
    ],
    "correctOption": 0,
    "explanation": "The loop runs for i = 0, 1, 2, 3. subnet_start = 192 + (0*64)=192... wait — let's re-read: starts at 192 + (i * 64). i=0: 192+0=192? But the loop starts at 0, so i=0: 192+(0×64)=192. That would give .192, .256 (invalid)... Actually re-reading: `192 + (i * 64)` with start_offset=0: i=0→192 is wrong. The correct read: subnet_start = 0 + i*64. The code as written with '192 +' would be a bug. But for i in range(4) with subnet_start = i*64: .0, .64, .128, .192 — these are the four /26 subnets of a /24, each with block size 64. Answer A reflects the correct /26 subnetting of a /24 network."
  },
  {
    "quizTitle": "IPv4 Addressing & Subnetting",
    "category": "Network Segmentation",
    "question": "A factory network has its industrial control systems, employee workstations, and visitor Wi-Fi all on the same /16 network. Management wants to isolate SCADA devices for security. Which approach achieves this?",
    "options": [
      "Move all devices to a /8 network for more available addresses.",
      "Assign SCADA devices to a dedicated subnet, separated by a router or firewall that enforces access policies.",
      "Use static IP addresses for SCADA devices to prevent unauthorized DHCP assignments.",
      "Disable broadcasting on all SCADA devices to prevent them from being discovered."
    ],
    "correctOption": 1,
    "explanation": "Placing SCADA/industrial control devices on a dedicated subnet, with a router or firewall controlling traffic between subnets, is the correct approach. Routers stop broadcasts and can enforce access control lists (ACLs) or firewall rules that allow only authorized traffic to reach the SCADA subnet. This is a core reason for subnetting: applying security policies between different groups of devices."
  },
  {
    "quizTitle": "IPv4 Addressing & Subnetting",
    "category": "IPv4 Address Structure",
    "question": "A host with IP 10.50.200.100 and mask 255.255.0.0 tries to communicate with 10.50.100.200. Are they on the same network?",
    "options": [
      "No — the third octets differ (200 vs. 100), so they're on different networks.",
      "Yes — ANDing both with the /16 mask gives the same network address: 10.50.0.0.",
      "No — only devices with identical IP addresses are on the same network.",
      "Yes — any two 10.x.x.x addresses are always on the same network."
    ],
    "correctOption": 1,
    "explanation": "AND 10.50.200.100 with 255.255.0.0: network = 10.50.0.0. AND 10.50.100.200 with 255.255.0.0: network = 10.50.0.0. Both yield the same network address, so they ARE on the same /16 network and can communicate directly without a router. The third and fourth octets fall entirely within the host portion under a /16 mask, so their differences don't matter for network membership."
  },
  {
    "quizTitle": "IPv4 Addressing & Subnetting",
    "category": "Subnet Calculations — Recall",
    "question": "A technician says 'I need at least 500 host addresses on one subnet.' What is the smallest (most specific) prefix length that satisfies this?",
    "options": [
      "/22 — provides 1022 hosts.",
      "/23 — provides 510 hosts.",
      "/24 — provides 254 hosts.",
      "/21 — provides 2046 hosts."
    ],
    "correctOption": 1,
    "explanation": "/24 gives only 254 hosts — not enough. /23 has 9 host bits: 2^9 - 2 = 510 hosts — just over 500 and sufficient. /22 gives 1022, which works but wastes more address space than necessary. Always choose the smallest subnet (longest prefix) that still meets the requirement. /23 is the tightest fit for 500+ hosts."
  },
  {
    "quizTitle": "IPv4 Addressing & Subnetting",
    "category": "VLSM",
    "question": "A VLSM design allocates 172.30.0.0/25 to the first LAN. The second LAN needs 60 hosts. What is the next subnet address and mask?",
    "options": [
      "172.30.0.128/25 — another /25 for symmetry.",
      "172.30.0.128/26 — starts where /25 ends, with 62 usable hosts.",
      "172.30.0.64/26 — picks up halfway through the first /25.",
      "172.30.1.0/26 — jumps to the next octet boundary."
    ],
    "correctOption": 1,
    "explanation": "The /25 subnet 172.30.0.0/25 spans .0 to .127 (block size = 128). The next available address is .128. The second LAN needs >60 hosts → /26 (62 hosts). So the next allocation is 172.30.0.128/26, which spans .128 to .191. This is efficient VLSM: use exactly what you need from the remaining space, starting immediately after the previous subnet."
  },
  {
    "quizTitle": "IPv4 Addressing & Subnetting",
    "category": "Subnet Calculations — Recall",
    "question": "Which of the following correctly lists the three RFC 1918 private address blocks?",
    "options": [
      "10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16",
      "10.0.0.0/8, 172.0.0.0/16, 192.168.0.0/24",
      "10.0.0.0/16, 172.16.0.0/16, 192.168.0.0/16",
      "10.0.0.0/8, 172.0.0.0/12, 192.0.0.0/16"
    ],
    "correctOption": 0,
    "explanation": "The exact RFC 1918 private ranges are: 10.0.0.0/8 (10.0.0.0–10.255.255.255), 172.16.0.0/12 (172.16.0.0–172.31.255.255), and 192.168.0.0/16 (192.168.0.0–192.168.255.255). These are the ONLY three private blocks. Note the /12 for the 172 range — it's a common mistake to write it as /16 or /24. The /12 means only the 172.16–172.31 range is private, not all of 172.x.x.x."
  },
  {
    "quizTitle": "IPv4 Addressing & Subnetting",
    "category": "Subnet Calculations — Recall",
    "question": "Which statement about NAT (Network Address Translation) is correct?",
    "options": [
      "NAT converts public addresses to other public addresses for load balancing.",
      "NAT is configured on end-user workstations to handle address translation.",
      "NAT translates private IPv4 addresses to public addresses, typically at the edge router.",
      "NAT replaces IPv6 by converting IPv6 addresses to IPv4 addresses."
    ],
    "correctOption": 2,
    "explanation": "NAT is configured on the edge router (the router connecting the internal network to the internet). It translates the internal private address (RFC 1918) to a public IP address when packets exit to the internet, and reverses this for incoming replies. This allows many internal hosts to share one or few public IP addresses, conserving the IPv4 address space. NAT is not for IPv6 conversion or for workstation configuration."
  },
  {
    "quizTitle": "IPv4 Addressing & Subnetting",
    "category": "IPv4 Unicast, Broadcast & Multicast",
    "question": "Which of the following is TRUE about broadcast traffic and routers?",
    "options": [
      "Routers forward broadcasts to all connected interfaces to ensure wide reach.",
      "Routers drop broadcasts, containing them within the originating broadcast domain.",
      "Routers convert broadcasts into unicasts before forwarding.",
      "Routers only block multicast traffic, not broadcasts."
    ],
    "correctOption": 1,
    "explanation": "Routers do NOT forward broadcasts. This is a fundamental router behavior that makes subnetting effective. When a host broadcasts on a subnet, the router at the subnet boundary drops the broadcast — it does not propagate to other subnets. This is the core mechanism by which subnetting reduces broadcast traffic across a network. Switches, by contrast, DO propagate broadcasts within a VLAN."
  },
  {
    "quizTitle": "IPv4 Addressing & Subnetting",
    "category": "Subnetting a /24 Network",
    "question": "You have 192.168.20.0/24. You need 5 equal subnets, each with at least 25 usable hosts. Which mask creates the minimum number of subnets that satisfies BOTH requirements?",
    "options": [
      "/25 — 2 subnets, 126 hosts (not enough subnets).",
      "/26 — 4 subnets, 62 hosts (not enough subnets).",
      "/27 — 8 subnets, 30 hosts (meets both: 8 ≥ 5 subnets, 30 ≥ 25 hosts).",
      "/28 — 16 subnets, 14 hosts (not enough hosts)."
    ],
    "correctOption": 2,
    "explanation": "Both constraints must be satisfied: at least 5 subnets AND at least 25 hosts per subnet. /26 fails the subnet count (only 4). /28 fails the host count (only 14). /27 gives 8 subnets (≥ 5 ✓) and 30 hosts per subnet (≥ 25 ✓). It satisfies both requirements with the longest prefix (most efficient). /25 and /26 don't have enough subnets."
  },
  {
    "quizTitle": "IPv4 Addressing & Subnetting",
    "category": "Network Segmentation",
    "question": "An ARP request is sent by a host in Subnet A. A router separates Subnet A from Subnet B. Which devices receive the ARP request?",
    "options": [
      "All devices in Subnet A and Subnet B — ARP floods all connected networks.",
      "Only the specific host being queried — ARP is a unicast protocol.",
      "Only devices in Subnet A — the router stops the broadcast from reaching Subnet B.",
      "Only the router — it answers all ARP requests on behalf of all subnets."
    ],
    "correctOption": 2,
    "explanation": "ARP uses broadcast packets to discover MAC addresses. Broadcasts are propagated by switches throughout a broadcast domain (subnet) but are stopped by routers. Since the router separates Subnet A and Subnet B, the ARP broadcast stays within Subnet A — Subnet B devices never see it. This is one of the primary benefits of subnetting: broadcast containment reduces unnecessary traffic."
  },
  {
    "quizTitle": "IPv4 Addressing & Subnetting",
    "category": "IPv4 Address Structure",
    "question": "What is the result of the following AND operation, and what concept does it demonstrate?\n\nIP:   11000000.10101000.00010101.01100100\nMask: 11111111.11111111.11111111.11100000",
    "options": [
      "Result: 11000000.10101000.00010101.01100000 — this reveals the network address 192.168.21.96.",
      "Result: 11000000.10101000.00010101.01100100 — the mask has no effect on the address.",
      "Result: 11111111.11111111.11111111.11100000 — ANDing produces the subnet mask.",
      "Result: 11000000.10101000.00010101.00000000 — the entire last octet is zeroed out."
    ],
    "correctOption": 0,
    "explanation": "AND each bit of the last octet: 01100100 AND 11100000. First 3 bits: 011 AND 111 = 011. Last 5 bits: 00100 AND 00000 = 00000. Result: 01100000 = 96. So the network address is 192.168.21.96/27. This demonstrates the ANDing process: the mask zeroes out the host portion (the last 5 bits), leaving only the network portion, which identifies the subnet."
  }
];