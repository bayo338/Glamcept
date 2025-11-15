import Hero from '@/components/Hero';
import TopSellers from '@/components/TopSellers';
import NewArrivals from '@/components/NewArrivals';
import Bestsellers from '@/components/Bestsellers';
import Brand from '@/components/Brand';


export default function Home() {
  return (
    <>
      <section>
      <Hero />
      <TopSellers />
      <NewArrivals />
      <Bestsellers />
      <Brand />
      {/* other sections here */}
      </section>
    </>
  );
}
