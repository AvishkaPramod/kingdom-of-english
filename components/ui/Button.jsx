import Link from "next/link";

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const variants = {
    primary: "btn-primary",
    gold: "btn-gold",
    outline: "btn-outline",
  };

  const classes = `${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}