import { WifiOff } from 'lucide-react';
import { useOnlineStatus } from '../hooks/useOnlineStatus';
import './OfflineBanner.css';

export default function OfflineBanner() {
  const online = useOnlineStatus();

  if (online) return null;

  return (
    <div className="offline-banner" role="status">
      <WifiOff size={15} />
      <span>Vous etes hors connexion. Vos modifications sont enregistrees et seront synchronisees au retour du reseau.</span>
    </div>
  );
}
