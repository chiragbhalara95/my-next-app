import Image from 'next/image'
import Link from 'next/link'
import ToolCard from '@/components/ToolCard'
import SponsorHeader from '@/components/SponsorHeader';
import Header from '@/components/Header';
import FeaturedTools from '@/components/FeaturedTools'

const tools = [
  {
    name: 'ChatGPT',
    description: 'AI chatbot for generating human-like text.',
    image: '/images/chatgpt.png',
    slug: 'chatgpt',
  },
  {
    name: 'Midjourney',
    description: 'AI image generator for creators.',
    image: '/images/midjourney.png',
    slug: 'midjourney',
  },
]

export default function Home() {
  return (
    <>
      <SponsorHeader />
      <Header />

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="text-center py-20 px-4 bg-gradient-to-br from-blue-50 to-white">
          <h1 className="text-5xl font-bold mb-4">Discover the Best AI Tools</h1>
          <p className="text-lg text-gray-600 mb-6">
            Find the right tool for your task.
          </p>
          <input
            type="text"
            placeholder="Search AI tools..."
            className="w-full max-w-md mx-auto p-2 rounded-xl border"
          />
        </section>

        <FeaturedTools />
      </main>
    </>
  );
}
