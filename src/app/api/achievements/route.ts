import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET() {
  console.log('[API] /api/achievements - GET request received')
  try {
    const cookieStore = await cookies()
    const supabase = createClient(cookieStore)

    console.log('[API] /api/achievements - Fetching from Supabase')
    const { data, error } = await supabase
      .from('achievements')
      .select('*')
      .order('display_order', { ascending: true })

    if (error) {
      console.error('[API] /api/achievements - Supabase error:', error.message)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    console.log(`[API] /api/achievements - Fetched ${data?.length || 0} achievements`)

    // Transform snake_case to camelCase
    const achievements = data.map((ach: any) => ({
      id: ach.id,
      award: ach.award,
      event: ach.event,
      org: ach.org,
      date: ach.date,
      displayOrder: ach.display_order,
    }))

    console.log('[API] /api/achievements - Returning transformed achievements')
    return NextResponse.json(achievements)
  } catch (error) {
    console.error('[API] /api/achievements - Exception caught:', error)
    return NextResponse.json(
      { error: 'Failed to fetch achievements' },
      { status: 500 }
    )
  }
}
