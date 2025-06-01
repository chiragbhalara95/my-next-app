import React from 'react'

type Tool = {
  title: string
  description: string
  badge?: string
  colorClass: string
}

const tools: Tool[] = [
  {
    title: 'Nume',
    description: 'AI CFO for founders, providing financial insights and automation.',
    colorClass: 'text-cyan-600',
  },
  {
    title: 'Avido.ai',
    description: 'AI-Powered Video Stories Generator for YouTube and TikTok.',
    badge: 'Free',
    colorClass: 'text-purple-600',
  },
  {
    title: 'groas',
    description: 'AI platform for optimizing Google Search Ads and funnels.',
    colorClass: 'text-gray-900',
  },
  {
    title: 'SalesAPE.ai',
    description: 'AI sales assistant for lead qualification, engagement, and more.',
    colorClass: 'text-pink-700',
  },
  {
    title: 'LoveStudy.ai',
    description: 'AI-powered learning platform with flashcards, quizzes, notes, and podcasts.',
    colorClass: 'text-red-600',
  },
  {
    title: 'iFable',
    description: 'AI-powered anime character role-playing game for creating stories and more.',
    badge: 'Free',
    colorClass: 'text-yellow-600',
  },
]

const FeaturedTools: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-6">
        Featured<span className="text-red-500">*</span>
      </h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 shadow-sm rounded-xl p-5 hover:shadow-md transition duration-300"
          >
            <div className="flex items-center justify-between">
              <h3 className={`text-lg font-semibold ${tool.colorClass}`}>{tool.title}</h3>
              {tool.badge && (
                <span className="text-xs bg-blue-100 text-blue-600 font-medium px-2 py-1 rounded-full">
                  {tool.badge}
                </span>
              )}
            </div>
            <p className="mt-2 text-sm text-gray-700">{tool.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FeaturedTools
