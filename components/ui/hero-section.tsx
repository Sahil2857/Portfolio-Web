'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  Building2,
  ChevronRight,
  CirclePlay,
  Cpu,
  Github,
  Menu,
  X,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const menuItems = [
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/projects' },
  { name: 'Case Study', href: '/case-study' },
]

export default function Hero() {
  const [menuState, setMenuState] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header>
        <nav
          data-state={menuState ? 'active' : undefined}
          className={cn(
            'fixed z-20 w-full transition-all duration-300',
            isScrolled && 'border-b border-black/5 bg-background/75 backdrop-blur-lg'
          )}
        >
          <div className="mx-auto max-w-5xl px-6">
            <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0">
              <div className="flex w-full justify-between gap-6 lg:w-auto">
                <Link href="/" aria-label="home" className="flex items-center space-x-2 font-semibold">
                  Sahil Kadam
                </Link>

                <button
                  onClick={() => setMenuState((s) => !s)}
                  aria-label={menuState ? 'Close Menu' : 'Open Menu'}
                  className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
                >
                  <Menu
                    className={cn(
                      'm-auto size-6 duration-200',
                      menuState && 'rotate-180 scale-0 opacity-0'
                    )}
                  />
                  <X
                    className={cn(
                      'absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200',
                      menuState && 'rotate-0 scale-100 opacity-100'
                    )}
                  />
                </button>

                <div className="m-auto hidden size-fit lg:block">
                  <ul className="flex gap-1">
                    {menuItems.map((item) => (
                      <li key={item.name}>
                        <Button asChild variant="ghost" size="sm">
                          <Link href={item.href} className="text-base">
                            <span>{item.name}</span>
                          </Link>
                        </Button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div
                className={cn(
                  'bg-background mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent',
                  menuState && 'block lg:flex'
                )}
              >
                <div className="lg:hidden">
                  <ul className="space-y-6 text-base">
                    {menuItems.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="text-muted-foreground hover:text-accent-foreground block duration-150"
                        >
                          <span>{item.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                  <Button asChild variant="ghost" size="sm" className={cn(isScrolled && 'lg:hidden')}>
                    <Link href="/services">
                      <span>Services</span>
                    </Link>
                  </Button>
                  <Button asChild size="sm" className={cn(isScrolled && 'lg:hidden')}>
                    <Link href="/projects">
                      <span>Projects</span>
                    </Link>
                  </Button>
                  <Button asChild size="sm" className={cn(isScrolled ? 'lg:inline-flex' : 'hidden')}>
                    <Link href="/case-study">
                      <span>Case Study</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main className="overflow-hidden">
        <section className="bg-gradient-to-b from-background to-muted">
          <div className="relative py-36">
            <div className="relative z-10 mx-auto w-full max-w-5xl px-6">
              <div className="md:w-1/2">
                <div>
                  <h1 className="max-w-md text-balance text-5xl font-medium md:text-6xl">
                    Automation systems for smarter business workflows
                  </h1>
                  <p className="text-muted-foreground my-8 max-w-2xl text-balance text-xl">
                    I design practical tools using Python, data processing, and dashboards to
                    reduce manual work and improve decision speed.
                  </p>

                  <div className="flex items-center gap-3">
                    <Button asChild size="lg" className="pr-5">
                      <Link href="/projects">
                        <span className="text-nowrap">View Projects</span>
                        <ChevronRight className="opacity-50" />
                      </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="pl-5">
                      <Link href="/services">
                        <CirclePlay className="fill-primary/25 stroke-primary" />
                        <span className="text-nowrap">View Services</span>
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="mt-10">
                  <p className="text-muted-foreground">Core focus areas :</p>
                  <div className="mt-6 grid max-w-sm grid-cols-3 gap-6">
                    <div className="flex items-center gap-2">
                      <Building2 className="size-5 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Dashboards</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Cpu className="size-5 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Automation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Github className="size-5 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Python Tools</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-24 translate-x-12 md:absolute md:-right-6 md:bottom-16 md:left-1/2 md:top-40 md:mt-0 md:translate-x-0">
              <div className="before:bg-foreground/5 before:border-foreground/5 relative h-full before:absolute before:-inset-x-4 before:bottom-7 before:top-0 before:skew-x-6 before:rounded-[calc(var(--radius)+1rem)] before:border">
                <div className="bg-background shadow-foreground/10 ring-foreground/5 relative h-full -translate-y-12 skew-x-6 overflow-hidden rounded-[var(--radius)] border border-transparent shadow-md ring-1">
                  <Image
                    src="https://images.unsplash.com/photo-1551281044-8f780ba67e45?auto=format&fit=crop&w=2880&q=80"
                    alt="app screen"
                    width={2880}
                    height={1842}
                    className="size-full object-cover object-left-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
