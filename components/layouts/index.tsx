import React, { useState, useEffect } from 'react'
import Header from '../header'
import Footer from '../footer'
import { get } from '@/lib/api'
import { IRespones, IUser } from '@/interface/user'

const Layouts: React.FC = ({ children }) => {
  const [user, setUser] = useState<IUser>({
    wx: '',
    qq: '',
    email: '',
  })

  useEffect(function () {
    ;(async function () {
      const { data }: IRespones = await get('/user')
      if (data.isSuccess) {
        setUser(data.data)
      }
    })()
  }, [])

  return (
    <div className="max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0">
      <div className="flex flex-col justify-between h-screen">
        <Header />
        <main className="mb-auto">{children}</main>
        <Footer user={user} />
      </div>
    </div>
  )
}

export default Layouts
