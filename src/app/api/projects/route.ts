import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET() {
  console.log('[API] /api/projects - GET request received')
  try {
    const cookieStore = await cookies()
    const supabase = createClient(cookieStore)

    console.log('[API] /api/projects - Fetching from Supabase')
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('display_order', { ascending: true })

    if (error) {
      console.error('[API] /api/projects - Supabase error:', error.message)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    console.log(`[API] /api/projects - Fetched ${data?.length || 0} projects`)

    // Transform snake_case to camelCase
    const projects = data.map((project: any) => ({
      id: project.id,
      title: project.title,
      tag: project.tag,
      tagline: project.tagline,
      abstract: project.abstract,
      description: project.description,
      features: project.features,
      technologies: project.technologies,
      role: project.role,
      organization: project.organization,
      achievement: project.achievement,
      githubUrl: project.github_url,
      youtubeId: project.youtube_id,
      date: project.date,
      isFeatured: project.is_featured,
      note: project.note,
      featuredOrder: project.featured_order,
      displayOrder: project.display_order,
    }))

    console.log('[API] /api/projects - Returning transformed projects')
    return NextResponse.json(projects)
  } catch (error) {
    console.error('[API] /api/projects - Exception caught:', error)
    return NextResponse.json(
      { error: 'Failed to fetch projects' },
      { status: 500 }
    )
  }
}
