import { Loader2 } from 'lucide-react';
import './RouteLoader.css';

/** Suspense fallback for lazy-loaded routes — a route bundle usually resolves
 * in well under a second on a warm connection, so this stays minimal rather
 * than mimicking the destination page's layout. */
export default function RouteLoader() {
  return (
    <div className="route-loader">
      <Loader2 size={26} className="route-loader-spin" />
    </div>
  );
}
