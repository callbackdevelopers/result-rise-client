
import HeroSection from '../components/HeroSection/HeroSection'
import Navbar from '../components/Navbars/Navbar'

export default function Home() {

  return (
    <div className='bg-gradient-to-r from-stone-500 to-orange-500'>
      <div className='md:mx-6'>
        <Navbar></Navbar>
      </div>
      <HeroSection></HeroSection>
    </div>
  )
}
