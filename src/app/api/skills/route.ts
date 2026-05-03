import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET() {
  console.log('[API] /api/skills - GET request received')
  try {
    const cookieStore = await cookies()
    const supabase = createClient(cookieStore)

    console.log('[API] /api/skills - Fetching from Supabase')
    const { data, error } = await supabase
      .from('skills')
      .select('*')
      .order('display_order', { ascending: true })

    if (error) {
      console.error('[API] /api/skills - Supabase error:', error.message)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    console.log(`[API] /api/skills - Fetched ${data?.length || 0} skills`)

    // Transform snake_case to camelCase
    const skills = data.map((skill: any) => ({
      id: skill.id,
      name: skill.name,
      type: skill.type,
      expertiseLevel: skill.expertise_level,
      displayOrder: skill.display_order,
    }))

    console.log('[API] /api/skills - Returning transformed skills')
    return NextResponse.json(skills)
  } catch (error) {
    console.error('[API] /api/skills - Exception caught:', error)
    return NextResponse.json(
      { error: 'Failed to fetch skills' },
      { status: 500 }
    )
  }
}
