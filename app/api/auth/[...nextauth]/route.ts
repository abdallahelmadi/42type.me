import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import FortyTwoProvider from 'next-auth/providers/42-school'
import type { UserProps } from '@/lib/interfaces'
import date from '@/lib/date'
import database from '@/lib/database'

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    }),
    FortyTwoProvider({
      clientId: process.env.FORTY_TWO_CLIENT_ID as string,
      clientSecret: process.env.FORTY_TWO_CLIENT_SECRET as string
    })
  ],
  callbacks: {
    async signIn({ user, account, profile }): Promise<boolean> {
      try {

        const removeFerror: any = profile
        const data: UserProps = {
          name: user?.name as string,
          email: user?.email as string,
          provider: account?.provider as string,
          level: 0,
          rank: 9999,
          image: account?.provider === 'google' ? user?.image as string : removeFerror?.image?.versions?.medium as string,
          createdAt: date()
        }

        const db = await database()
        const usersCollection = db.collection('users')

        const isOldUser: UserProps = await usersCollection.findOne({
          email: user?.email as string
        })

        if (isOldUser)
          return true
        else {
          const result = await usersCollection.insertOne(data)
          return result.acknowledged
        }

      } catch {
        return false
      }
    }
  },
  session: {
    maxAge: 100 * 24 * 60 * 60
  },
  pages: {
    signIn: '/',
    error: '/'
  }
})

export { handler as GET, handler as POST }