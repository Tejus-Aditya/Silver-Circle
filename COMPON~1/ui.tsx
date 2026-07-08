import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "outline" | "danger" | "success";
  fullWidth?: boolean;
};

const VARIANT_CLASSES: Record<string, string> = {
  primary: "bg-teal-800 text-white hover:bg-teal-900 active:bg-teal-950",
  secondary: "bg-amber-100 text-teal-900 hover:bg-amber-200",
  outline: "bg-white text-teal-900 border-2 border-teal-800 hover:bg-teal-50",
  danger: "bg-red-600 text-white hover:bg-red-700 active:bg-red-800",
  success: "bg-emerald-600 text-white hover:bg-emerald-700",
};

export function Button({
  variant = "primary",
  fullWidth,
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-lg font-semibold shadow-sm transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed min-h-[48px] ${
        VARIANT_CLASSES[variant]
      } ${fullWidth ? "w-full" : ""} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export function Card({
  className = "",
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`rounded-2xl bg-white border border-stone-200 shadow-sm p-4 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function Tag({
  children,
  highlight = false,
}: {
  children: React.ReactNode;
  highlight?: boolean;
}) {
  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-sm font-medium ${
        highlight
          ? "bg-teal-800 text-white"
          : "bg-stone-100 text-stone-700 border border-stone-200"
      }`}
    >
      {children}
    </span>
  );
}

export function Stars({ rating }: { rating: number }) {
  const full = Math.round(rating);
  return (
    <span
      aria-label={`Rated ${rating} out of 5`}
      className="text-amber-500 text-lg leading-none"
    >
      {"★".repeat(full)}
      <span className="text-stone-300">{"★".repeat(5 - full)}</span>
      <span className="ml-1 text-sm text-stone-500 align-middle">
        {rating.toFixed(1)}
      </span>
    </span>
  );
}

export function PageHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-5">
      <h1 className="text-2xl md:text-3xl font-bold text-teal-950">{title}</h1>
      {subtitle && (
        <p className="text-base md:text-lg text-stone-600 mt-1">{subtitle}</p>
      )}
    </div>
  );
}
