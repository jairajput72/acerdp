import { FaArrowDown, FaArrowUp, FaCode, FaExclamation, FaLock, FaMobileAlt, FaPaintBrush, FaServer } from "react-icons/fa";

export const activities = [
    { text: "The server vserver140503 is expired.", date: "27 March 2020, at 12:30 PM", status: "Expired", color: "text-[#A0AEC0]" },
    { text: "The server vserver140503 will expire in 1 day.", date: "27 March 2020, at 12:30 PM", status: "1 Day left", color: "text-[#FF4747]" },
    { text: "The server vserver140503 will expire in 3 days.", date: "26 March 2020, at 13:45 PM", status: "3 Days left", color: "text-[#FFC300]" },
    { text: "The server vserver140503 will expire in 7 days.", date: "26 March 2020, at 12:30 PM", status: "7 Days left", color: "text-[#FEE79C]" },
    { text: "The server vserver647901 got extended by 120 days", date: "26 March 2020, at 05:00 AM", status: "120 Days extended", color: "text-[#01B574]" },
    { text: "The server vserver847901 got extended by 120 days", date: "26 March 2020, at 05:00 AM", status: "120 Days extended", color: "text-[#01B574]" },
];

export const transactions = [
    {
        id: 1,
        icon: <FaArrowDown className="text-red-500" />,
        name: 'Bitcoin',
        date: '27 March 2020, at 12:30 PM',
        status: 'Failed',
        amount: '',
        statusColor: 'text-[#A0AEC0]'
    },
    {
        id: 2,
        icon: <FaArrowUp className="text-green-500" />,
        name: 'Stripe',
        date: '27 March 2020, at 12:30 PM',
        status: '+2500€',
        statusColor: 'text-green-500'
    },
    {
        id: 3,
        icon: <FaArrowUp className="text-green-500" />,
        name: 'Ethereum',
        date: '26 March 2020, at 13:45 PM',
        status: '+800€',
        statusColor: 'text-green-500'
    },
    {
        id: 4,
        icon: <FaArrowUp className="text-green-500" />,
        name: 'Litecoin',
        date: '26 March 2020, at 12:30 PM',
        status: '+1700€',
        statusColor: 'text-green-500'
    },
    {
        id: 5,
        icon: <FaExclamation className="text-yellow-400" />,
        name: 'Stripe',
        date: '26 March 2020, at 05:00 AM',
        status: 'Pending',
        statusColor: 'text-[#A0AEC0]'
    },
    {
        id: 6,
        icon: <FaExclamation className="text-yellow-400" />,
        name: 'Stripe',
        date: '26 March 2020, at 05:00 AM',
        status: 'Pending',
        statusColor: 'text-[#A0AEC0]'
    }
];
 
export const Myservices = [
    {
        icon: <FaCode className="text-indigo-600 text-3xl" />,
        title: 'Web Development',
        description: 'Responsive, scalable web apps built with modern tech like React, Node, and Tailwind.',
        tools: ['React', 'Node.js', 'Tailwind CSS']
    },
    {
        icon: <FaMobileAlt className="text-pink-500 text-3xl" />,
        title: 'Mobile Apps',
        description: 'Cross-platform mobile apps using React Native for seamless user experiences.',
        tools: ['React Native', 'Expo', 'Firebase']
    },
    {
        icon: <FaPaintBrush className="text-yellow-500 text-3xl" />,
        title: 'UI/UX Design',
        description: 'Clean, intuitive designs focused on usability, accessibility, and modern aesthetics.',
        tools: ['Figma', 'Adobe XD', 'CSS Grid']
    },
    {
        icon: <FaServer className="text-green-500 text-3xl" />,
        title: 'Backend Development',
        description: 'Secure, scalable APIs and microservices using Node.js and Express.',
        tools: ['Express', 'MongoDB', 'JWT']
    },
    {
        icon: <FaLock className="text-red-500 text-3xl" />,
        title: 'Cybersecurity',
        description: 'Security audits, penetration testing, and system hardening for safe platforms.',
        tools: ['Nmap', 'OWASP ZAP', 'Burp Suite']
    }
];