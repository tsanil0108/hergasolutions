import { CalendarCheck } from 'lucide-react';
import PageHero from '../components/common/PageHero';
import BookingCalendar from '../components/forms/BookingCalendar';
import usePageMeta from '../hooks/usePageMeta';
import { heroes } from '../assets/images';

export default function BookAppointment() {
  usePageMeta('Book an Appointment', "Book a free site visit or consultation with HERGA'S SOLUTIONS – solar, PM Surya Ghar subsidy and industrial services in Thane & Maharashtra.");
  return (
    <>
      <PageHero image={heroes.contact} lines={['Book an', 'Appointment']} subtitle="Pick a date and time for your free consultation or site visit" breadcrumb="Book Appointment" />
      <section className="section section--tight"><div className="container"><BookingCalendar /></div></section>
    </>
  );
}