import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { ServicesSection } from '@/components/services-section';
import { TestimonialsSection } from '@/components/testimonials-section';
import { ContactForm } from '@/components/contact-form';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactForm />
      <Footer />
    </div>
  );
}
