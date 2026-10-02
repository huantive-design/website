"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { categories } from "@/lib/products";
import { megaMenuSolutions, navigation, site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState(false);
  const close = () => { setOpen(false); setMega(false); };
  // Hover-to-open applies only to pointer-precise desktop widths; on mobile the
  // arrow button is the single toggle, otherwise hover and click cancel out.
  const canHover = () => typeof window !== "undefined" && window.matchMedia("(min-width: 981px) and (hover: hover) and (pointer: fine)").matches;

  return (
    <>
      <div className="utility-bar">
        <div className="shell utility-inner">
          <span>18+ Years in Massage Devices</span><span>3 Production Bases</span><span>OEM & ODM</span><span>{site.responseTime}</span>
        </div>
      </div>
      <header className="site-header" onMouseLeave={() => { if (canHover()) setMega(false); }}>
        <div className="shell header-inner">
          <Link className="brand" href="/" aria-label={`${site.name} home`} onClick={close}>
            <span className="brand-mark">H</span>{site.name}
          </Link>
          <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="main-navigation">
            <span /> <span />
            <span className="sr-only">Toggle navigation</span>
          </button>
          <nav id="main-navigation" className={open ? "nav open" : "nav"}>
            {navigation.map((item) =>
              item.hasMega ? (
                <div className="nav-parent" key={item.label} onMouseEnter={() => { if (canHover()) setMega(true); }}>
                  <Link href={item.href} onClick={close}>{item.label}</Link>
                  <button className="nav-expand" onClick={() => setMega(!mega)} aria-expanded={mega} aria-controls="product-mega">
                    <span className="sr-only">Toggle product categories</span>
                    <i aria-hidden="true" />
                  </button>
                </div>
              ) : (
                <Link key={item.label} href={item.href} onClick={close}>{item.label}</Link>
              ),
            )}
            <Link className="button button-primary nav-quote" href="/contact" onClick={close}>Request a Quote</Link>

            <div id="product-mega" className={mega ? "mega open" : "mega"}>
              <div className="shell mega-inner">
                <div className="mega-categories">
                  <p className="mega-title">Shop by product category</p>
                  <div className="mega-grid">
                    {categories.map((category) => (
                      <Link key={category.slug} href={`/products/category/${category.slug}`} onClick={close}>
                        <span className="mega-thumb"><Image src={category.image} alt="" fill sizes="64px" /></span>
                        <span className="mega-copy"><strong>{category.name}</strong><small>{category.buyerNote}</small></span>
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="mega-side">
                  <p className="mega-title">Sourcing programs</p>
                  {megaMenuSolutions.map((item) => (
                    <Link key={item.label} href={item.href} onClick={close}><strong>{item.label}</strong><small>{item.note}</small></Link>
                  ))}
                  <Link className="mega-all" href="/products" onClick={close}>View all 22 products →</Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
