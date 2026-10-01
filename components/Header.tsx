"use client";

import Link from "next/link";
import { useState } from "react";
import { navigation, site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="utility-bar">
        <div className="shell utility-inner">
          <span>18+ Years in Massage Devices</span><span>3 Production Bases</span><span>OEM & ODM</span><span>{site.responseTime}</span>
        </div>
      </div>
      <header className="site-header">
        <div className="shell header-inner">
          <Link className="brand" href="/" aria-label={`${site.name} home`}>
            <span className="brand-mark">H</span>{site.name}
          </Link>
          <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="main-navigation">
            <span /> <span />
            <span className="sr-only">Toggle navigation</span>
          </button>
          <nav id="main-navigation" className={open ? "nav open" : "nav"}>
            {navigation.map((item) => <Link key={item.label} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>)}
            <Link className="nav-catalog" href="/products" onClick={() => setOpen(false)}>View Catalog</Link>
            <Link className="button button-primary nav-quote" href="/contact" onClick={() => setOpen(false)}>Request a Quote</Link>
          </nav>
        </div>
      </header>
    </>
  );
}
