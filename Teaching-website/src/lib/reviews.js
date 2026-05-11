import { supabase } from './supabase'

const REVIEW_ADDED_EVENT = 'reviews:added'

export const fetchReviews = async () => {
  const { data, error } = await supabase
    .from('reviews')
    .select('id, name, role, level, quote, rating, created_at')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Failed to fetch reviews:', error)
    return []
  }
  return data || []
}

export const submitReview = async ({ name, role, level, quote, rating }) => {
  const { data, error } = await supabase
    .from('reviews')
    .insert({
      name,
      role: role || null,
      level: level || null,
      quote,
      rating,
    })
    .select()
    .single()

  if (error) throw error

  if (typeof window !== 'undefined' && data) {
    window.dispatchEvent(new CustomEvent(REVIEW_ADDED_EVENT, { detail: data }))
  }

  return data
}

export const subscribeToReviews = (onInsert) => {
  const channel = supabase
    .channel('public:reviews:insert')
    .on(
      'postgres_changes',
      { event: 'INSERT', schema: 'public', table: 'reviews' },
      (payload) => {
        if (payload?.new) onInsert(payload.new)
      },
    )
    .subscribe()

  const handleLocal = (event) => {
    if (event.detail) onInsert(event.detail)
  }
  window.addEventListener(REVIEW_ADDED_EVENT, handleLocal)

  return () => {
    supabase.removeChannel(channel)
    window.removeEventListener(REVIEW_ADDED_EVENT, handleLocal)
  }
}
