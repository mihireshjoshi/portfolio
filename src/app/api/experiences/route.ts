import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET() {
  console.log('[API] /api/experiences - GET request received')
  try {
    const cookieStore = await cookies()
    const supabase = createClient(cookieStore)

    console.log('[API] /api/experiences - Fetching from Supabase')
    const { data, error } = await supabase
      .from('experiences')
      .select('*')
      .order('display_order', { ascending: true })

    if (error) {
      console.error('[API] /api/experiences - Supabase error:', error.message)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    console.log(`[API] /api/experiences - Fetched ${data?.length || 0} experiences`)

    // Transform snake_case to camelCase
    const experiences = data.map((exp: any) => ({
      id: exp.id,
      role: exp.role,
      org: exp.org,
      period: exp.period,
      type: exp.type,
      bullets: exp.bullets,
      displayOrder: exp.display_order,
    }))

    console.log('[API] /api/experiences - Returning transformed experiences')
    return NextResponse.json(experiences)
  } catch (error) {
    console.error('[API] /api/experiences - Exception caught:', error)
    return NextResponse.json(
      { error: 'Failed to fetch experiences' },
      { status: 500 }
    )
  }
}
