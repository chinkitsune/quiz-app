// data/questions/network-address-resolution.js

module.exports = 

[
  {
    "quizTitle": "Address Resolution",
    "category": "MAC and IP Roles",
    "question": "A laptop on the 10.0.0.0/24 network wants to send a packet to a printer at 10.0.0.50, which is on the same subnet. What will the laptop use as the destination MAC address in the Ethernet frame?",
    "options": [
      "The MAC address of the default gateway",
      "The MAC address of the printer itself",
      "A broadcast MAC address ff:ff:ff:ff:ff:ff",
      "The MAC address of the DNS server"
    ],
    "correctOption": 1,
    "explanation": "When the destination IP address is on the same local network, the destination MAC address used in the frame is that of the actual destination device — in this case, the printer. The gateway is only used when the destination is on a remote network."
  },
  {
    "quizTitle": "Address Resolution",
    "category": "MAC and IP Roles",
    "question": "A workstation at 192.168.5.10/24 needs to send data to a server at 8.8.8.8 on the internet. What MAC address will appear as the destination in the Ethernet frame leaving the workstation?",
    "options": [
      "The MAC address of the server 8.8.8.8",
      "The MAC address of the default gateway/router",
      "A broadcast address",
      "No MAC address is needed since IP handles remote delivery"
    ],
    "correctOption": 1,
    "explanation": "Since 8.8.8.8 is on a remote network, the frame must first be delivered locally to the default gateway, so the gateway's MAC address is used as the destination MAC. The gateway will later forward the packet, using new MAC addresses for each subsequent hop, while the destination IP address stays the same throughout the journey."
  },
  {
    "quizTitle": "Address Resolution",
    "category": "MAC and IP Roles",
    "question": "Which of the following best describes the function of a MAC address?",
    "options": [
      "Logical address used for end-to-end packet routing across networks",
      "Physical address used for NIC-to-NIC delivery on the same local network",
      "A temporary address assigned by DHCP that changes every session",
      "An address that identifies which website a packet is destined for"
    ],
    "correctOption": 1,
    "explanation": "MAC addresses are Layer 2 physical addresses used to deliver frames between NICs on the same Ethernet network. IP addresses, by contrast, are Layer 3 logical addresses used for end-to-end delivery across networks."
  },
  {
    "quizTitle": "Address Resolution",
    "category": "MAC and IP Roles",
    "question": "Which statement about the behavior of IP and MAC addresses across a multi-hop path is correct?",
    "options": [
      "IP addresses change at every hop, MAC addresses stay the same end to end",
      "MAC addresses change at every hop, IP addresses (source/destination) typically stay the same end to end",
      "Both IP and MAC addresses change at every router hop",
      "Neither IP nor MAC addresses ever change in transit"
    ],
    "correctOption": 1,
    "explanation": "The source and destination IP addresses remain constant for the entire path (Layer 3 is about end-to-end delivery), while the source and destination MAC addresses are rewritten by each router at every hop, since Layer 2 addressing is only meaningful on a single local link."
  },
  {
    "quizTitle": "Address Resolution",
    "category": "MAC and IP Roles",
    "question": "Two PCs, PC-A and PC-B, are connected to the same switch and are on the same VLAN/subnet. PC-A wants to send a frame to PC-B. Which address does PC-A use to identify the destination NIC at Layer 2?",
    "options": [
      "PC-B's IP address",
      "PC-B's MAC address",
      "The switch's MAC address",
      "The default gateway's MAC address"
    ],
    "correctOption": 1,
    "explanation": "Layer 2 addresses (MAC addresses) are used to deliver frames from one NIC to another on the same network. Since PC-B is on the same network as PC-A, PC-A addresses the frame directly to PC-B's MAC address — no gateway is involved."
  },
  {
    "quizTitle": "Address Resolution",
    "category": "MAC and IP Roles",
    "question": "A network technician captures traffic and notices that a frame leaving Router1 toward Router2 has a different destination MAC than the frame that originally left the source PC, even though the destination IP address in the packet has not changed. What explains this?",
    "options": [
      "The IP address was translated by NAT",
      "MAC addresses are rewritten at each hop while the IP address remains the same end-to-end",
      "The frame is corrupted",
      "Routers do not use MAC addresses"
    ],
    "correctOption": 1,
    "explanation": "Each router strips off the old frame header and builds a new one for the next link, replacing source/destination MAC addresses each hop, while leaving the original source and destination IP addresses inside the packet untouched."
  },
  {
    "quizTitle": "Address Resolution",
    "category": "MAC and IP Roles",
    "question": "Under what condition is the destination MAC address in a frame the same as the default gateway's MAC address?",
    "options": [
      "When the destination IP address is on the same local network",
      "When the destination IP address is on a remote network",
      "Only when using IPv6",
      "Always, regardless of destination"
    ],
    "correctOption": 1,
    "explanation": "When the destination is on a remote network, the local host cannot directly address the remote device's MAC, so it sends the frame to its default gateway, which then forwards the packet toward the remote network."
  },
  {
    "quizTitle": "Address Resolution",
    "category": "MAC and IP Roles",
    "question": "A host has no default gateway configured. It tries to send a packet to an IP address outside its local subnet. What will happen at Layer 2?",
    "options": [
      "The frame will be sent directly to the destination's MAC using ARP for the remote host",
      "The host cannot determine a destination MAC address for a remote network without a gateway, so the packet cannot be delivered off the local network",
      "The switch will automatically route the packet",
      "The host will broadcast the frame to every device on the internet"
    ],
    "correctOption": 1,
    "explanation": "For a remote-network destination, a host must hand the frame off to its default gateway. With no gateway configured, the host has no Layer 2 next-hop to use and the packet cannot leave the local network."
  },
  {
    "quizTitle": "Address Resolution",
    "category": "MAC and IP Roles",
    "question": "What is the primary purpose of having both a Layer 2 and a Layer 3 address for a single device?",
    "options": [
      "The Layer 3 address identifies the network and host for end-to-end delivery; the Layer 2 address identifies the specific NIC for local delivery",
      "Layer 2 and Layer 3 addresses serve identical purposes for redundancy",
      "The Layer 3 address is only used inside a single LAN",
      "The Layer 2 address is used for routing between networks"
    ],
    "correctOption": 0,
    "explanation": "IP (Layer 3) addresses are logical and used to move a packet from source to destination across networks, while MAC (Layer 2) addresses are physical and only used to move a frame between two NICs on the same local network."
  },
  {
    "quizTitle": "Address Resolution",
    "category": "MAC and IP Roles",
    "question": "A printer's MAC address changes because its network card failed and was swapped. Its IP address stays the same. What must happen on other devices before they can reach the printer again using its IP address?",
    "options": [
      "Nothing — IP addresses are tied permanently to a MAC",
      "The stale ARP entry mapping the old MAC must be removed or updated so the new IP-to-MAC mapping can be learned",
      "The printer must be assigned a new IP address",
      "ARP tables never need updates"
    ],
    "correctOption": 1,
    "explanation": "Other devices' ARP tables still hold the old IP-to-MAC mapping. Until that entry times out or is manually cleared, frames will be sent to the wrong (now invalid) MAC address, so it must be refreshed before communication succeeds."
  },
  {
    "quizTitle": "Address Resolution",
    "category": "ARP Purpose and Functions",
    "question": "What protocol does IPv4 use to determine the MAC address associated with a known IPv4 address on the local network?",
    "options": [
      "ARP",
      "ICMPv6",
      "DNS",
      "DHCP"
    ],
    "correctOption": 0,
    "explanation": "ARP (Address Resolution Protocol) is used by IPv4 to associate a device's IPv4 address with the MAC address of its NIC. ICMPv6 performs this role for IPv6 instead."
  },
  {
    "quizTitle": "Address Resolution",
    "category": "ARP Purpose and Functions",
    "question": "Which pair correctly describes the two basic functions of ARP?",
    "options": [
      "Resolving IPv4 addresses to MAC addresses, and maintaining a table of those mappings",
      "Assigning IP addresses to hosts and renewing leases",
      "Translating domain names to IP addresses",
      "Encrypting traffic between hosts on a LAN"
    ],
    "correctOption": 0,
    "explanation": "ARP's two core functions are resolving an IPv4 address to its corresponding MAC address, and maintaining an ARP table that caches these IPv4-to-MAC mappings for future use."
  },
  {
    "quizTitle": "Address Resolution",
    "category": "ARP Purpose and Functions",
    "question": "PC-A wants to send a frame to PC-B (10.1.1.20) on the same subnet, but PC-A's ARP table has no entry for 10.1.1.20. What does PC-A do?",
    "options": [
      "Drops the packet permanently",
      "Sends an ARP request asking who has 10.1.1.20",
      "Sends the frame using a random MAC address",
      "Sends a DNS query to resolve the MAC"
    ],
    "correctOption": 1,
    "explanation": "If no ARP table entry is found for the needed IP address, the device sends a broadcast ARP request to discover the corresponding MAC address before it can build the frame."
  },
  {
    "quizTitle": "Address Resolution",
    "category": "ARP Purpose and Functions",
    "question": "A host wants to send a packet to a remote network (a different subnet). Before building the frame, which IP address does the host look up in its ARP table?",
    "options": [
      "The final destination host's IP address",
      "The IP address of its default gateway",
      "The IP address of the DNS server",
      "Its own IP address"
    ],
    "correctOption": 1,
    "explanation": "For remote destinations, the host needs the MAC address of its next hop, the default gateway — not the final destination — since the gateway is the device the frame is physically addressed to."
  },
  {
    "quizTitle": "Address Resolution",
    "category": "ARP Purpose and Functions",
    "question": "An ARP request is sent as what type of frame?",
    "options": [
      "Unicast, directly to the destination",
      "Broadcast, to every device on the local network",
      "Multicast, to a specific group",
      "Anycast"
    ],
    "correctOption": 1,
    "explanation": "Because the sender doesn't yet know who owns the target IP address, the ARP request must be broadcast so every device on the local network receives and processes it."
  },
  {
    "quizTitle": "Address Resolution",
    "category": "ARP Purpose and Functions",
    "question": "An ARP reply is sent as what type of frame?",
    "options": [
      "Broadcast",
      "Multicast",
      "Unicast, back to the requesting device",
      "Anycast"
    ],
    "correctOption": 2,
    "explanation": "Once the device that owns the requested IP address identifies itself, it already knows the requester's MAC address from the request, so it replies directly (unicast) instead of broadcasting again."
  },
  {
    "quizTitle": "Address Resolution",
    "category": "ARP Purpose and Functions",
    "question": "Host A on 172.16.0.0/24 pings Host B (172.16.0.45) for the first time and has no existing ARP entry. Put these events in the correct order: (1) Host B sends an ARP reply, (2) Host A sends an ICMP echo request, (3) Host A sends an ARP request, (4) Host A updates its ARP table.",
    "options": [
      "2, 3, 1, 4",
      "3, 1, 4, 2",
      "1, 2, 3, 4",
      "3, 4, 1, 2"
    ],
    "correctOption": 1,
    "explanation": "Host A must first resolve Host B's MAC address before it can build an Ethernet frame to carry the ping. So it sends an ARP request (3), receives the ARP reply (1), updates its ARP table (4), and only then sends the ICMP echo request (2) inside a properly addressed frame."
  },
  {
    "quizTitle": "Address Resolution",
    "category": "ARP Purpose and Functions",
    "question": "An ARP request asking 'who has 192.168.1.50?' is broadcast on the LAN. Which device(s) will reply?",
    "options": [
      "Every device on the LAN replies",
      "Only the device that owns 192.168.1.50 replies",
      "Only the default gateway replies",
      "No device replies; ARP replies are unsolicited"
    ],
    "correctOption": 1,
    "explanation": "Although every device on the local network receives and processes the broadcast ARP request, only the device whose IP address matches the request sends back an ARP reply."
  },
  {
    "quizTitle": "Address Resolution",
    "category": "ARP Purpose and Functions",
    "question": "What does an entry in an ARP table map?",
    "options": [
      "A domain name to an IP address",
      "An IPv4 address to a MAC address",
      "A MAC address to a port number",
      "A subnet to a VLAN ID"
    ],
    "correctOption": 1,
    "explanation": "The ARP table is a cache of IPv4-address-to-MAC-address mappings that a device has learned, so it can avoid re-sending an ARP request every time it communicates with the same IP address."
  },
  {
    "quizTitle": "Address Resolution",
    "category": "ARP Purpose and Functions",
    "question": "A device already has a valid ARP entry for the default gateway in its table. It now needs to send a packet to a brand-new remote-network destination it has never contacted before. Does it need to send a new ARP request?",
    "options": [
      "Yes, a new ARP request is needed for every new destination IP, even remote ones",
      "No, because the frame is still addressed to the default gateway's MAC, which is already known",
      "Yes, because ARP requests expire after one use",
      "No, because remote destinations never use ARP at all"
    ],
    "correctOption": 1,
    "explanation": "Since the destination is remote, the frame is always addressed to the gateway's MAC address regardless of the final destination IP. If that gateway mapping is already cached, no new ARP request is needed."
  },
  {
    "quizTitle": "Address Resolution",
    "category": "ARP Table Management",
    "question": "Why are entries in an ARP table not permanent?",
    "options": [
      "They are encrypted and must be refreshed for security",
      "They are removed automatically when an ARP cache timer expires",
      "Switches delete them every second automatically",
      "They are stored only in RAM and lost on every ping"
    ],
    "correctOption": 1,
    "explanation": "ARP entries are temporary by design and are removed once a configured ARP cache timer expires, preventing devices from relying on mappings that may have become outdated."
  },
  {
    "quizTitle": "Address Resolution",
    "category": "ARP Table Management",
    "question": "Is the ARP cache timer duration identical across all operating systems?",
    "options": [
      "True — it's a fixed value defined by a universal ARP standard",
      "False — the duration differs depending on the operating system",
      "True, but only for Windows and Linux",
      "False — only firewalls can change it"
    ],
    "correctOption": 1,
    "explanation": "There is no single fixed ARP cache timeout value; different operating systems implement their own default duration for how long an ARP entry is kept before expiring."
  },
  {
    "quizTitle": "Address Resolution",
    "category": "ARP Table Management",
    "question": "A network administrator suspects an old, incorrect IP-to-MAC mapping is causing failed connections to a server that recently got a new NIC. Besides waiting for the timer to expire, what can the administrator do?",
    "options": [
      "Reboot every switch on the network",
      "Manually remove the stale entry from the ARP table",
      "Change the server's IP address permanently",
      "Nothing can be done until the timer expires"
    ],
    "correctOption": 1,
    "explanation": "ARP table entries can be removed manually by an administrator, which is faster than waiting for the cache timer to expire and forces the device to re-learn the correct mapping on the next communication attempt."
  },
  {
    "quizTitle": "Address Resolution",
    "category": "ARP Table Management",
    "question": "What triggers automatic removal of an ARP table entry under normal operation, without manual intervention?",
    "options": [
      "The device sends a new ping",
      "The ARP cache timer for that entry expires",
      "The switch reboots",
      "The user opens a web browser"
    ],
    "correctOption": 1,
    "explanation": "Under normal conditions, ARP entries age out and are automatically removed once their associated cache timer reaches its configured expiration period."
  },
  {
    "quizTitle": "Address Resolution",
    "category": "ARP Table Management",
    "question": "An organization has many short-lived devices joining and leaving its guest Wi-Fi network throughout the day. Would a longer or shorter ARP cache timeout generally be more appropriate to avoid stale mappings to disconnected devices?",
    "options": [
      "A longer timeout, to reduce ARP traffic",
      "A shorter timeout, so stale mappings to departed devices are cleared more quickly",
      "Timeout duration has no effect on stale entries",
      "ARP timers don't apply to wireless devices"
    ],
    "correctOption": 1,
    "explanation": "With devices frequently joining and leaving, a shorter ARP cache timer helps clear outdated mappings sooner, reducing the chance that traffic is sent to a MAC address belonging to a device that is no longer present."
  },
  {
    "quizTitle": "Address Resolution",
    "category": "ARP Table Management",
    "question": "Besides automatic expiration, how else can an ARP table entry be removed?",
    "options": [
      "Only by replacing the network card",
      "Manually, by an administrator",
      "Only by rebooting the operating system",
      "ARP entries can never be removed manually"
    ],
    "correctOption": 1,
    "explanation": "In addition to automatic expiration via the cache timer, an administrator can manually remove ARP table entries when needed, such as to immediately clear a known stale mapping."
  },
  {
    "quizTitle": "Address Resolution",
    "category": "ARP Commands and Output",
    "question": "Examine this Windows ARP table output:\n\nInterface: 10.0.0.15 --- 0x12\nInternet Address      Physical Address      Type\n10.0.0.1               aa-bb-cc-11-22-33     dynamic\n10.0.0.40              11-22-33-aa-bb-cc     dynamic\n\nWhich entry most likely represents the default gateway?",
    "options": [
      "10.0.0.15, because it's the interface",
      "10.0.0.1, because gateway addresses are conventionally the first usable host address on a subnet",
      "10.0.0.40, because it has a higher physical address",
      "Cannot be determined from ARP output"
    ],
    "correctOption": 1,
    "explanation": "While ARP output doesn't explicitly label a gateway, network conventions commonly assign the first usable address (here, .1) to the router/default gateway, making 10.0.0.1 the most likely candidate among the listed entries."
  },
  {
    "quizTitle": "Address Resolution",
    "category": "ARP Commands and Output",
    "question": "Which command displays the ARP table on a Windows PC?",
    "options": [
      "ipconfig /arp",
      "arp -a",
      "netstat -r",
      "show arp"
    ],
    "correctOption": 1,
    "explanation": "The arp -a command lists all current entries in a Windows PC's ARP table, showing the Internet (IP) address, Physical (MAC) address, and entry Type for each mapping."
  },
  {
    "quizTitle": "Address Resolution",
    "category": "ARP Commands and Output",
    "question": "A technician runs arp -a and sees a Type column listing entries as 'dynamic'. What does 'dynamic' indicate?",
    "options": [
      "The entry was manually configured by an administrator and never expires",
      "The entry was learned automatically through the ARP process and will expire after the cache timer",
      "The entry represents a multicast address",
      "The entry is invalid and should be ignored"
    ],
    "correctOption": 1,
    "explanation": "A 'dynamic' entry was learned automatically through normal ARP request/reply exchanges and is subject to removal once its ARP cache timer expires, as opposed to a 'static' entry that an administrator configured manually."
  },
  {
    "quizTitle": "Address Resolution",
    "category": "ARP Commands and Output",
    "question": "Which Windows command-line option is used to manually delete an entry from the ARP cache?",
    "options": [
      "arp -a",
      "arp -s",
      "arp -d",
      "arp -x"
    ],
    "correctOption": 2,
    "explanation": "The -d switch deletes a specific entry (or all entries) from the ARP cache, which is useful when forcing a device to re-learn a mapping that may have become stale."
  },
  {
    "quizTitle": "Address Resolution",
    "category": "ARP Commands and Output",
    "question": "Which Windows command-line option is used to add a static ARP entry?",
    "options": [
      "arp -a",
      "arp -s",
      "arp -d",
      "arp -g"
    ],
    "correctOption": 1,
    "explanation": "The -s switch is used to manually add a static IP-to-MAC mapping to the ARP table; unlike dynamic entries, static entries are not removed automatically when the cache timer expires."
  },
  {
    "quizTitle": "Address Resolution",
    "category": "ARP Commands and Output",
    "question": "Given this output:\n\nInternet Address      Physical Address      Type\n192.168.2.1            00-11-22-33-44-55     static\n192.168.2.30           66-77-88-99-aa-bb     dynamic\n\nWhat is true about the entry for 192.168.2.1?",
    "options": [
      "It was learned automatically and will expire soon",
      "It was manually configured and will not expire on its own",
      "It is invalid because static entries are not allowed",
      "It represents a broadcast address"
    ],
    "correctOption": 1,
    "explanation": "A 'static' Type means the entry was manually added (commonly with arp -s) by an administrator and persists until manually removed, unlike 'dynamic' entries that expire automatically with the cache timer."
  },
  {
    "quizTitle": "Address Resolution",
    "category": "ARP Commands and Output",
    "question": "A help-desk technician wants to verify whether a Windows PC has successfully learned the MAC address of a server it just communicated with. Which single command should they run?",
    "options": [
      "ping -t",
      "arp -a",
      "tracert",
      "ipconfig /all"
    ],
    "correctOption": 1,
    "explanation": "arp -a displays the current ARP table contents, allowing the technician to check whether an IP-to-MAC mapping for the server now exists, confirming that address resolution succeeded."
  },
  {
    "quizTitle": "Address Resolution",
    "category": "ARP Security Issues",
    "question": "Why are ARP requests processed by every device on the local network?",
    "options": [
      "Because ARP requests are sent as unicast to a random device",
      "Because ARP requests are broadcast frames, which switches forward to every port in the broadcast domain",
      "Because routers duplicate ARP requests to all networks",
      "Because ARP requests use multicast addressing exclusively"
    ],
    "correctOption": 1,
    "explanation": "Since the sender doesn't know which device owns the target IP address, the ARP request is broadcast, and switches flood broadcast frames to every device within the same broadcast domain, causing all of them to process it."
  },
  {
    "quizTitle": "Address Resolution",
    "category": "ARP Security Issues",
    "question": "What is a potential negative effect of excessive ARP broadcasts on a network?",
    "options": [
      "Improved security",
      "A reduction in network performance",
      "Faster IP address assignment",
      "Encrypted traffic becomes unencrypted"
    ],
    "correctOption": 1,
    "explanation": "Because every device must receive and process each ARP broadcast, a large volume of ARP traffic consumes bandwidth and processing resources across the network, which can reduce overall performance."
  },
  {
    "quizTitle": "Address Resolution",
    "category": "ARP Security Issues",
    "question": "What is ARP spoofing (ARP poisoning)?",
    "options": [
      "A method of compressing ARP packets for faster transmission",
      "An attack where a threat actor sends falsified ARP replies to associate their own MAC address with another device's IP",
      "A legitimate feature used to load-balance traffic",
      "A method for encrypting ARP traffic"
    ],
    "correctOption": 1,
    "explanation": "ARP spoofing occurs when an attacker sends forged ARP replies, tricking other devices into associating the attacker's MAC address with a legitimate IP address, often to intercept or redirect traffic."
  },
  {
    "quizTitle": "Address Resolution",
    "category": "ARP Security Issues",
    "question": "An attacker on a LAN sends forged ARP replies telling Host A that the attacker's MAC address belongs to the default gateway's IP address. What is the most likely goal of this attack?",
    "options": [
      "To speed up Host A's internet connection",
      "To intercept or redirect Host A's traffic intended for the gateway (a man-in-the-middle attack)",
      "To assign Host A a new IP address",
      "To reduce ARP broadcast traffic"
    ],
    "correctOption": 1,
    "explanation": "By convincing Host A that the attacker owns the gateway's IP address, all of Host A's traffic meant for the gateway is instead sent to the attacker first, enabling eavesdropping or manipulation — a classic man-in-the-middle attack."
  },
  {
    "quizTitle": "Address Resolution",
    "category": "ARP Security Issues",
    "question": "Why does ARP spoofing work against the basic ARP protocol?",
    "options": [
      "ARP requires digital certificates that attackers can easily forge",
      "ARP has no built-in authentication, so a device cannot verify that a reply truly came from the legitimate IP owner",
      "ARP replies are always rejected by hosts, so spoofing is impossible",
      "ARP only works over encrypted channels"
    ],
    "correctOption": 1,
    "explanation": "Basic ARP has no mechanism to authenticate the source of a reply, so a device simply trusts whatever IP-to-MAC mapping it receives, which is exactly what makes ARP spoofing possible."
  },
  {
    "quizTitle": "Address Resolution",
    "category": "ARP Security Issues",
    "question": "What do enterprise-level switches commonly include to help defend against ARP-based attacks?",
    "options": [
      "Mitigation techniques such as dynamic ARP inspection",
      "Built-in ARP encryption keys",
      "Automatic IP address reassignment",
      "Disabling all ARP traffic entirely"
    ],
    "correctOption": 0,
    "explanation": "Enterprise switches often include mitigation features, such as dynamic ARP inspection, that validate ARP packets against trusted bindings to help detect and block spoofed ARP replies."
  },
  {
    "quizTitle": "Address Resolution",
    "category": "ARP Security Issues",
    "question": "A network monitoring tool alerts that two different MAC addresses have both claimed ownership of the default gateway's IP address within a short time window. What should this most likely be investigated as?",
    "options": [
      "A normal DHCP renewal event",
      "A possible ARP spoofing/poisoning attack",
      "A scheduled firmware update",
      "Normal ARP cache timer expiration"
    ],
    "correctOption": 1,
    "explanation": "A legitimate gateway shouldn't suddenly have its IP address claimed by a second, different MAC address. This is a classic indicator of ARP spoofing, where an attacker is trying to impersonate the gateway."
  },
  {
    "quizTitle": "Address Resolution",
    "category": "ARP Security Issues",
    "question": "Which of the following network designs would best reduce the impact of ARP broadcast traffic on a large flat network?",
    "options": [
      "Adding more hosts to the same broadcast domain",
      "Segmenting the network into smaller VLANs/subnets to limit the broadcast domain size",
      "Disabling ARP entirely",
      "Increasing the ARP cache timer to infinite"
    ],
    "correctOption": 1,
    "explanation": "Since ARP requests are broadcast within a broadcast domain, breaking a large flat network into smaller VLANs/subnets limits how many devices must process each ARP broadcast, reducing overall impact."
  },
  {
    "quizTitle": "Address Resolution",
    "category": "IPv6 Neighbor Discovery",
    "question": "Which protocol does IPv6 use in place of ARP to associate an IPv6 address with a MAC address?",
    "options": [
      "ARP",
      "ICMPv6 (Neighbor Discovery)",
      "DHCPv6",
      "RARP"
    ],
    "correctOption": 1,
    "explanation": "IPv6 does not use ARP at all. Instead, ICMPv6 Neighbor Discovery handles address resolution, along with router discovery and redirection services."
  },
  {
    "quizTitle": "Address Resolution",
    "category": "IPv6 Neighbor Discovery",
    "question": "What are the three main services provided by IPv6 Neighbor Discovery (ND)?",
    "options": [
      "Address resolution, router discovery, and redirection services",
      "DNS resolution, address assignment, and encryption",
      "Port forwarding, NAT translation, and tunneling",
      "VLAN tagging, QoS marking, and load balancing"
    ],
    "correctOption": 0,
    "explanation": "IPv6 ND provides three primary services: resolving MAC addresses for known IPv6 addresses, discovering routers on the link, and using redirect messages to improve next-hop path selection."
  },
  {
    "quizTitle": "Address Resolution",
    "category": "IPv6 Neighbor Discovery",
    "question": "Which ICMPv6 message pair is used for device-to-device address resolution in IPv6?",
    "options": [
      "Router Solicitation and Router Advertisement",
      "Neighbor Solicitation and Neighbor Advertisement",
      "Echo Request and Echo Reply",
      "Redirect and Reroute"
    ],
    "correctOption": 1,
    "explanation": "Neighbor Solicitation (NS) and Neighbor Advertisement (NA) messages are used for device-to-device messaging such as address resolution, functioning similarly to ARP requests and replies in IPv4."
  },
  {
    "quizTitle": "Address Resolution",
    "category": "IPv6 Neighbor Discovery",
    "question": "Which ICMPv6 message pair is used between hosts and routers for router discovery?",
    "options": [
      "Neighbor Solicitation and Neighbor Advertisement",
      "Router Solicitation and Router Advertisement",
      "Destination Unreachable and Time Exceeded",
      "Echo Request and Echo Reply"
    ],
    "correctOption": 1,
    "explanation": "Router Solicitation (RS) and Router Advertisement (RA) messages are used for messaging between devices and routers specifically for router discovery, distinct from the NS/NA pair used for address resolution."
  },
  {
    "quizTitle": "Address Resolution",
    "category": "IPv6 Neighbor Discovery",
    "question": "An IPv6 host, PC-A, knows the IPv6 address of PC-B on the same link but not its MAC address. Which ND message will PC-A send to resolve PC-B's MAC address?",
    "options": [
      "Router Solicitation",
      "Neighbor Solicitation",
      "Router Advertisement",
      "Redirect"
    ],
    "correctOption": 1,
    "explanation": "Neighbor Solicitation is the IPv6 ND message used when a device needs to resolve the MAC address of another known neighbor — it serves the same role that an ARP request does in IPv4."
  },
  {
    "quizTitle": "Address Resolution",
    "category": "IPv6 Neighbor Discovery",
    "question": "After PC-A sends a Neighbor Solicitation for PC-B's MAC address, how does PC-B respond?",
    "options": [
      "With a Router Advertisement",
      "With a Neighbor Advertisement containing its MAC address",
      "With an ARP reply",
      "PC-B does not respond; PC-A must already know the MAC"
    ],
    "correctOption": 1,
    "explanation": "PC-B replies with a Neighbor Advertisement, which contains its MAC address — the IPv6 ND counterpart to an ARP reply in IPv4."
  },
  {
    "quizTitle": "Address Resolution",
    "category": "IPv6 Neighbor Discovery",
    "question": "ICMPv6 Neighbor Solicitation messages are typically sent using which type of addressing, rather than a broadcast?",
    "options": [
      "Anycast addressing only",
      "Special Ethernet and IPv6 multicast addresses",
      "A randomly generated unicast address",
      "IPv4-mapped addresses"
    ],
    "correctOption": 1,
    "explanation": "Unlike IPv4 ARP requests, which are broadcast, ICMPv6 Neighbor Solicitation messages are sent using special Ethernet and IPv6 multicast addresses, which only deliver to a targeted subset of devices."
  },
  {
    "quizTitle": "Address Resolution",
    "category": "IPv6 Neighbor Discovery",
    "question": "A new IPv6 device boots up and wants to learn about available routers on its link, including default gateway information. Which ND message does it send?",
    "options": [
      "Neighbor Solicitation",
      "Router Solicitation",
      "Neighbor Advertisement",
      "Redirect"
    ],
    "correctOption": 1,
    "explanation": "A device sends a Router Solicitation to actively ask routers on the link to identify themselves, rather than waiting for the router's periodic, unsolicited Router Advertisement."
  },
  {
    "quizTitle": "Address Resolution",
    "category": "IPv6 Neighbor Discovery",
    "question": "An IPv6 router determines that a better next-hop router exists for a particular destination than the one a host is currently using. Which ICMPv6 ND message does the router send to inform the host?",
    "options": [
      "Router Advertisement",
      "Neighbor Solicitation",
      "Redirect message",
      "Neighbor Advertisement"
    ],
    "correctOption": 2,
    "explanation": "ICMPv6 redirect messages are used by routers to inform hosts of a better next-hop selection for a specific destination, improving path efficiency without requiring the host to reconfigure its default route."
  },
  {
    "quizTitle": "Address Resolution",
    "category": "IPv6 Neighbor Discovery",
    "question": "Comparing IPv4 ARP requests to IPv6 Neighbor Solicitation messages in terms of network impact, which statement is most accurate?",
    "options": [
      "ARP requests use multicast, while NS messages use broadcast, making NS less efficient",
      "ARP requests use broadcast (reaching every device), while NS messages use targeted multicast, generally making NS less disruptive to uninvolved devices",
      "Both use identical addressing methods with no difference in impact",
      "ARP requests are more efficient because IPv6 doesn't support multicast"
    ],
    "correctOption": 1,
    "explanation": "ARP requests are broadcast to every device on the local network, while IPv6 NS messages use a multicast address derived from the target, which limits the number of uninvolved devices that must process the message."
  },
  {
    "quizTitle": "Address Resolution",
    "category": "IPv6 Neighbor Discovery",
    "question": "What is the IPv6 ND equivalent of an IPv4 ARP reply?",
    "options": [
      "Router Advertisement",
      "Neighbor Advertisement",
      "Redirect message",
      "Echo Reply"
    ],
    "correctOption": 1,
    "explanation": "A Neighbor Advertisement is sent in response to a Neighbor Solicitation and contains the responding device's MAC address, mirroring the function of an ARP reply in IPv4."
  },
  {
    "quizTitle": "Address Resolution",
    "category": "IPv6 Neighbor Discovery",
    "question": "A router on an IPv6 network periodically sends out messages, even without being solicited, to announce its presence and configuration information to all hosts on the link. What is this message called?",
    "options": [
      "Neighbor Solicitation",
      "(Unsolicited) Router Advertisement",
      "Neighbor Advertisement",
      "Echo Request"
    ],
    "correctOption": 1,
    "explanation": "Routers send periodic, unsolicited Router Advertisements to announce themselves and provide configuration information to hosts on the link, in addition to responding to specific Router Solicitations."
  },
  {
    "quizTitle": "Address Resolution",
    "category": "ARP vs IPv6 ND Comparison",
    "question": "At which layers of the networking model does address resolution (both ARP and ND) primarily operate?",
    "options": [
      "It is a Layer 3-to-Layer 2 resolution process, bridging network layer addresses to data link layer addresses",
      "Purely Layer 7, application layer",
      "Purely Layer 4, transport layer",
      "Purely Layer 1, physical layer"
    ],
    "correctOption": 0,
    "explanation": "Address resolution exists to bridge the gap between Layer 3 (IP) addressing, used for end-to-end delivery, and Layer 2 (MAC) addressing, used for local NIC-to-NIC delivery."
  },
  {
    "quizTitle": "Address Resolution",
    "category": "ARP vs IPv6 ND Comparison",
    "question": "A network engineer is troubleshooting a dual-stack (IPv4 and IPv6) network where a host can't reach another host on the same subnet using IPv6, but IPv4 communication on the same subnet works fine. Which process should the engineer investigate first for the IPv6 issue?",
    "options": [
      "ARP tables, since ARP also handles IPv6",
      "The IPv6 neighbor cache, populated through ICMPv6 Neighbor Discovery (Neighbor Solicitation/Advertisement)",
      "DNS cache only",
      "DHCP lease tables"
    ],
    "correctOption": 1,
    "explanation": "IPv6 does not use ARP at all; address resolution for IPv6 is handled entirely by ICMPv6 Neighbor Discovery, so a local-link IPv6 connectivity issue should start with checking the neighbor cache and NS/NA exchanges."
  },
  {
    "quizTitle": "Address Resolution",
    "category": "ARP vs IPv6 ND Comparison",
    "question": "Considering both ARP (IPv4) and ND (IPv6), which statement correctly contrasts how each handles a 'who has this address' query?",
    "options": [
      "ARP sends a broadcast ARP request to the whole local network; IPv6 ND sends a Neighbor Solicitation to a multicast group derived from the target address",
      "Both protocols use the exact same broadcast mechanism",
      "ARP uses multicast while ND uses broadcast",
      "Neither protocol queries for addresses; both rely solely on static configuration"
    ],
    "correctOption": 0,
    "explanation": "ARP relies on broadcasting a request to every device on the local network, while IPv6 ND uses a multicast address derived from the target address, narrowing the set of devices that need to process the query."
  },
  {
    "quizTitle": "Address Resolution",
    "category": "ARP vs IPv6 ND Comparison",
    "question": "In a remote-network communication scenario, both IPv4 and IPv6 hosts need to resolve a MAC address before sending the first frame off-subnet. Whose MAC address is resolved in both cases?",
    "options": [
      "The final destination host's MAC address, regardless of network location",
      "The default gateway/router's MAC address, since traffic to a remote network must first go through it",
      "The DNS server's MAC address",
      "No MAC resolution occurs for remote destinations in either protocol"
    ],
    "correctOption": 1,
    "explanation": "Whether using IPv4 ARP or IPv6 ND, a host sending to a remote network must resolve and use the MAC address of its default gateway/router as the next hop, since the final destination's MAC address is not directly reachable on the local link."
  }
];
