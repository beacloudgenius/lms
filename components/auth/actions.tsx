'use server'

import { createSupabaseServerClient } from '@/lib/auth/server'

export async function signUpWithEmailAndPassword(data: {
  email: string
  password: string
  confirm: string
}) {
  const supabase = await createSupabaseServerClient()
  const result = await supabase.auth.signUp({
    email: data.email,
    password: data.password,
    options: {
      emailRedirectTo:
        process.env.NODE_ENV === 'development'
          ? 'https://dev.thecloudseminar.com'
          : 'https://prod.thecloudseminar.com'
    }
  })
  return JSON.stringify(result)
}

export async function signInWithEmailAndPassword(data: { email: string; password: string }) {
  const supabase = await createSupabaseServerClient()
  const result = await supabase.auth.signInWithPassword(data)
  return JSON.stringify(result)
}

export async function loginWithGithub() {
  const supabase = await createSupabaseServerClient()

  supabase.auth.signInWithOAuth({
    provider: 'github',
    options: {
      redirectTo: `https://dev.thecloudseminar.com/auth-server/callback`
    }
  })
}
