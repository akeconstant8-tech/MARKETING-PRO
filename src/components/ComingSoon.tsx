import './ComingSoon.css';

interface Props {
  title: string;
  description: string;
}

export default function ComingSoon({ title, description }: Props) {
  return (
    <div className="coming-soon fade-in-up">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
