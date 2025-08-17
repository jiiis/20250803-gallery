import { redirect } from 'next/navigation'

import type { FC } from 'react'

const Page: FC = () => {
  redirect('/gallery')
}

export default Page
