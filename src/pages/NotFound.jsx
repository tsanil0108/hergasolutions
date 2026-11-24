import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import usePageMeta from '../hooks/usePageMeta';

export default function NotFound() {
  usePageMeta('Page not found');
  return (
    <section className="section notfound">
      <div className="container">
        <h1>Page not found</h1>
        <p>The page you are looking for doesn’t exist or has moved.</p>
        <Link to="/" className="btn btn--primary">Back to Home <ArrowRight size={18} /></Link>
      </div>
    </section>
  );
}
