export function getSupabaseEnv() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim()
  const key =
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim() ||
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY?.trim()

  if (!url) {
    throw new Error('Falta NEXT_PUBLIC_SUPABASE_URL')
  }

  if (!key) {
    throw new Error('Falta NEXT_PUBLIC_SUPABASE_ANON_KEY o NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY')
  }

  if (!/^https:\/\/[a-z0-9-]+\.supabase\.co\/?$/.test(url)) {
    throw new Error('NEXT_PUBLIC_SUPABASE_URL debe ser la URL del proyecto Supabase, no la URL de Vercel')
  }

  return { url, key }
}
