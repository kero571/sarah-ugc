export default function SectionHeading({ eyebrow, title, text, id, className = "" }) {
  return (
    <div className={`mb-10 lg:mb-14 ${className}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 id={id} className="h2">{title}</h2>
      {text && <p className="lead">{text}</p>}
    </div>
  );
}
