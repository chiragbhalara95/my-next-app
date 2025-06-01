interface ToolProps {
  params: { slug: string }
}

export default function ToolDetail({ params }: ToolProps) {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">Tool: {params.slug}</h1>
      <p>This is the detail page for {params.slug}.</p>
    </div>
  )
}
