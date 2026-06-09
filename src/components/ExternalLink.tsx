import type { AnchorHTMLAttributes, ReactNode } from "react";
import { FiArrowUpRight } from "react-icons/fi";

type ExternalLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  hideIcon?: boolean;
  showNewTabText?: boolean;
};

export function ExternalLink({
  children,
  className,
  hideIcon = false,
  rel,
  showNewTabText = false,
  target,
  ...props
}: ExternalLinkProps) {
  return (
    <a
      {...props}
      className={className}
      target={target ?? "_blank"}
      rel={rel ?? "noreferrer"}
    >
      {children}
      {!hideIcon ? <FiArrowUpRight aria-hidden="true" className="shrink-0" /> : null}
      {showNewTabText ? <span className="sr-only"> Abre em nova guia</span> : null}
    </a>
  );
}
