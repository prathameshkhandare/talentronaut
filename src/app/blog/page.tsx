"use client"
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion"
import { useState, useRef } from "react"
import { ArrowUpRight, Calendar, Tag } from "lucide-react"

// Mock Data based on Case Studies & Industry Trends
const BLOG_POSTS = [
  {
    id: 1,
    title: "Revolutionizing Cultural Platforms with AI",
    category: "AI & ML",
    date: "Oct 12, 2025",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1000",
    excerpt: "How Yugandhara leverages advanced machine learning to curate personalized cultural experiences for global audiences."
  },
  {
    id: 2,
    title: "ColdReach: The Future of Automated Outreach",
    category: "SaaS",
    date: "Oct 08, 2025",
    image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&q=80&w=1000",
    excerpt: "Breaking down the mechanics of our high-conversion automated email system that scales without losing the human touch."
  },
  {
    id: 3,
    title: "Securing Web3: The Oron Wallet Story",
    category: "Web3",
    date: "Sep 28, 2025",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1000",
    excerpt: "A deep dive into the security architecture behind Oron Wallet and how it sets a new standard for crypto safety."
  },
  {
    id: 4,
    title: "Scaling Startups: From Seed to IPO",
    category: "Strategy",
    date: "Sep 15, 2025",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1000",
    excerpt: "Key insights from our strategic partnership with 50+ unicorns. What separates the good from the great?"
  },
  {
    id: 5,
    title: "Differential Privacy in Finance",
    category: "AI & ML",
    date: "Aug 30, 2025",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
    excerpt: "Analyzing our 'Income Classifier' case study: How to utilize financial data without compromising user privacy."
  },
  {
    id: 6,
    title: "The Rise of Decentralized Skill Ecocsystems",
    category: "Web3",
    date: "Aug 22, 2025",
    image: "https://images.unsplash.com/photo-1621504450168-38f64731b6b7?auto=format&fit=crop&q=80&w=1000",
    excerpt: "Exploring XMetX: How blockchain technology is enabling secure, trustless bartering of high-value professional skills."
  },
  {
    id: 7,
    title: "Optimizing E-commerce for High Traffic",
    category: "SaaS",
    date: "Aug 10, 2025",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=1000",
    excerpt: "Technical lessons learned from redesigning high-volume retail platforms for peak holiday performance."
  },
  {
    id: 8,
    title: "AI Customer Insights: Beyond the Dashboard",
    category: "AI & ML",
    date: "Jul 25, 2025",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
    excerpt: "How predictive analytics is transforming raw data into actionable business intelligence for real-time decision making."
  },
  {
    id: 9,
    title: "Smart Calendar Bots & Telegram Automation",
    category: "SaaS",
    date: "Jul 12, 2025",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1000",
    excerpt: "Case study on building lightweight, high-utility bots for the Telegram ecosystem to manage complex scheduling."
  },
  {
    id: 10,
    title: "Supply Chain Transparency with Blockchain",
    category: "Web3",
    date: "Jun 30, 2025",
    image: "https://images.unsplash.com/photo-1566576912904-800c283626e0?auto=format&fit=crop&q=80&w=1000",
    excerpt: "How we implemented a transparent tracking system for a major logistics partner using authorized ledger technology."
  },
  {
    id: 11,
    title: "Healthcare Digital Transformation",
    category: "Strategy",
    date: "Jun 15, 2025",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000",
    excerpt: "Bridging the gap between legacy hospital systems and modern patient portals for a seamless healthcare experience."
  },
  {
    id: 12,
    title: "Next-Gen Mobile Banking Architectures",
    category: "SaaS",
    date: "May 28, 2025",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000",
    excerpt: "Designing secure, cross-platform banking applications that prioritize user experience without sacrificing compliance."
  },
  {
    id: 13,
    title: "The Agentic AI Future",
    category: "AI & ML",
    date: "May 10, 2025",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000",
    excerpt: "Why 'Agents' are the next big leap after Chatbots, and how Talentronaut is preparing for the autonomous web."
  },
  {
    id: 14,
    title: "EventSphere: Community Tech",
    category: "Strategy",
    date: "Apr 22, 2025",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1000",
    excerpt: "How technology is reshaping local community building and event discovery in a post-digital world."
  },
  {
    id: 15,
    title: "LinksUs: Bridging the Experience Gap",
    category: "Strategy",
    date: "Apr 05, 2025",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1000",
    excerpt: "The founding story of LinksUs and our mission to solve the 'experience required for entry-level job' paradox."
  }
];

const CATEGORIES = ["All", "AI & ML", "Web3", "SaaS", "Strategy"];

// 3D Tilt Card Component
const BlogCard = ({ post }: { post: any }) => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const mouseX = useSpring(x, { stiffness: 150, damping: 15 })
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 })

  function handleMouseMove({ currentTarget, clientX, clientY }: any) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect()
    const xPct = (clientX - left) / width - 0.5
    const yPct = (clientY - top) / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["5deg", "-5deg"])
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-5deg", "5deg"])

  return (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group relative h-[450px] w-full bg-white rounded-[2rem] border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer perspective-[1000px]"
    >
        {/* Image Section */}
        <div className="h-[55%] w-full overflow-hidden relative">
            <div className="absolute inset-0 bg-gray-200 animate-pulse" />
            <motion.img 
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover relative z-10"
            />
            {/* Category Tag */}
            <div className="absolute top-4 left-4 z-20">
                <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-[#D44531] border border-gray-100 shadow-sm flex items-center gap-2">
                    <Tag size={10} /> {post.category}
                </span>
            </div>
        </div>

        {/* Content Section */}
        <div className="h-[45%] p-8 flex flex-col justify-between relative bg-white transform-style-3d">
             {/* Noise Texture */}
             <div className="absolute inset-0 opacity-[0.4] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/noise.png')]" />
             
             <div className="relative z-10">
                 <div className="flex items-center gap-2 mb-3 text-gray-400 text-xs font-bold uppercase tracking-wide">
                     <Calendar size={12} />
                     {post.date}
                 </div>
                 <h3 className="text-xl font-black font-heading text-gray-900 leading-tight mb-3 line-clamp-2 group-hover:text-[#D44531] transition-colors duration-300">
                     {post.title}
                 </h3>
                 <p className="text-sm text-gray-500 font-sans line-clamp-2 leading-relaxed">
                     {post.excerpt}
                 </p>
             </div>

             <div className="relative z-10 flex items-center gap-2 text-[#D44531] font-bold text-xs uppercase tracking-widest group-hover:gap-3 transition-all duration-300">
                 Read Article <ArrowUpRight size={14} />
             </div>
        </div>
    </motion.div>
  )
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(9);

  const filteredPosts = activeCategory === "All" 
    ? BLOG_POSTS 
    : BLOG_POSTS.filter(post => post.category === activeCategory);

  const visiblePosts = filteredPosts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredPosts.length;

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setVisibleCount(9); // Reset pagination on filter change
  };

  return (
    <main className="min-h-screen bg-gray-50 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pt-32 pb-24">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
             <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100 mb-4"
             >
                <div className="w-2 h-2 rounded-full bg-[#D44531] animate-pulse" />
                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Industry Insights</span>
             </motion.div>
             <h1 className="text-5xl md:text-7xl font-black font-heading text-gray-900 tracking-tighter">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D44531] to-[#E65A45]">Latest Thinking</span>
             </h1>
             <p className="text-xl text-gray-500 max-w-2xl mx-auto font-sans">
                Explore our thoughts on AI, Web3, and the future of digital transformation.
             </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
            {CATEGORIES.map((cat) => (
                <button
                    key={cat}
                    onClick={() => handleCategoryChange(cat)}
                    className={`px-6 py-3 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300 border ${
                        activeCategory === cat 
                        ? "bg-[#D44531] text-white border-[#D44531] shadow-lg shadow-[#D44531]/20 scale-105" 
                        : "bg-white text-gray-500 border-gray-200 hover:border-[#D44531] hover:text-[#D44531]"
                    }`}
                >
                    {cat}
                </button>
            ))}
        </div>

        {/* Grid */}
        <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
            <AnimatePresence>
                {visiblePosts.map((post) => (
                    <BlogCard key={post.id} post={post} />
                ))}
            </AnimatePresence>
        </motion.div>

        {/* No Results State */}
        {visiblePosts.length === 0 && (
            <div className="text-center py-20">
                <p className="text-gray-400 font-bold text-lg">No articles found in this category.</p>
            </div>
        )}

        {/* Load More Button */}
        {hasMore && (
            <div className="mt-20 flex justify-center">
                <button 
                    onClick={handleLoadMore}
                    className="group relative px-10 py-5 bg-white text-gray-900 rounded-full font-black uppercase tracking-widest border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-3 overflow-hidden"
                >
                    <span className="relative z-10 group-hover:text-[#D44531] transition-colors">Load More Articles</span>
                    <div className="absolute inset-0 bg-gray-50 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                </button>
            </div>
        )}

      </div>
    </main>
  )
}
