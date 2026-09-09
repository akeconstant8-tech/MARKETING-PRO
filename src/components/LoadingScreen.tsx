import Logo from './Logo';
import './LoadingScreen.css';

export default function LoadingScreen() {
  return (
    <div className="loading-screen">
      <div className="loading-screen-logo">
        <Logo size="large" />
      </div>
      <span className="loading-screen-spinner" />
    </div>
  );
}
