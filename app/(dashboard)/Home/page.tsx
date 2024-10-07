import AboutUs from '@/components/pages/AboutUs/AboutUs'
import Certificate from '@/components/pages/Certificate/Certificate'
import Contact from '@/components/pages/Contact/Contact'
import Features from '@/components/pages/Features/Features'
import HomeHero from '@/components/pages/Home/HomeHero'
import ProductGrid from '@/components/pages/Products/Products'
import React from 'react'

export default function page() {
  return (
    <div>
      <HomeHero/>
      <AboutUs/>
      <Certificate/>
      <Features/>
      <ProductGrid/>
      <Contact/>
    </div>
  )
}
