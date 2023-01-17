
import HeroSection from '../components/HeroSection/HeroSection';
import Navbar from '../components/Navbars/Navbar';

export default function Home() {

  return (
    <div className='bg-gradient-to-r from-gray-700 via-gray-900 to-black'>
      <div className='md:mx-6'>
        <Navbar></Navbar>
      </div>
      <HeroSection></HeroSection>
    </div>
  )
}
