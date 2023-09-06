import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`min-h-screen main-wrapper-content   ${inter.className}`}
    >
      <div class="aside fixed flex flex-col h-screen top-0 border-r">
        <div class="flex items-center  px-3 py-5">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="m8 16 4-9 4 9M8 12h4" stroke="#FF8A65" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z" stroke="#FF8A65" stroke-width="1.5" stroke-miterlimit="10"></path></svg>
          <span class="text-gray-500 ml-5 text-sm">Inicio</span>
        </div>

        <div class="flex items-center  px-3 py-5">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="m8 16 4-9 4 9M8 12h4" stroke="#FF8A65" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z" stroke="#FF8A65" stroke-width="1.5" stroke-miterlimit="10"></path></svg>
          <span class="text-gray-500 ml-5 text-sm">Calendario</span>
        </div>
      </div>
      <div class="main-content">
        main content
      </div>
    </main>
  )
}
