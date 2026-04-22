type PlaceholderFrameProps = {
  eyebrow: string;
  title: string;
  description: string;
  caption?: string;
  className?: string;
  variant?: "product" | "research" | "prototype" | "video" | "diagram";
};

export function PlaceholderFrame({
  eyebrow,
  title,
  description,
  caption,
  className,
  variant = "product",
}: PlaceholderFrameProps) {
  return (
    <figure className={`placeholder-frame placeholder-frame--${variant}${className ? ` ${className}` : ""}`}>
      <div className="placeholder-frame__top">
        <span className="mono">{eyebrow}</span>
        {caption ? <span className="mono placeholder-frame__caption">{caption}</span> : null}
      </div>

      <div className="placeholder-frame__art" aria-hidden="true">
        <div className="placeholder-frame__halo" />
        <div className="placeholder-frame__track placeholder-frame__track--one" />
        <div className="placeholder-frame__track placeholder-frame__track--two" />
        <div className="placeholder-frame__track placeholder-frame__track--three" />
        <div className="placeholder-frame__core" />
        <div className="placeholder-frame__chip placeholder-frame__chip--one" />
        <div className="placeholder-frame__chip placeholder-frame__chip--two" />
        <div className="placeholder-frame__chip placeholder-frame__chip--three" />
        <div className="placeholder-frame__chip placeholder-frame__chip--four" />
      </div>

      <figcaption className="placeholder-frame__body">
        <h3>{title}</h3>
        <p>{description}</p>
      </figcaption>
    </figure>
  );
}
