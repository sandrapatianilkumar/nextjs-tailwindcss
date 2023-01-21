import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <div>
    <h1 className='text-3xl underline decoration-red-500 decoration-wavy decoration-1 underline-offset-3'>Title 1</h1>
    <h1 className='text-5xl'>Title 2</h1>
    <h1 className='text-xl'>Title 3</h1>
    <p className='text-base'>A regular Paragraph</p>
    <p className='text-lg'>A description pragraph</p>
    <p className='text-xs note'>A little note</p>
   </div>
  )
}
