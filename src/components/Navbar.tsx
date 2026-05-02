import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logoIcon from "@/assets/grc-sphere-icon.png";
import { industrySolutions } from "@/data/industrySolutions";

const navItems = [
  { label: "Products", href: "/features" },
  { label: "Blogs", href: "/newsroom" },
  { label: "About Us", href: "/about" },
  { label: "Consultancy Service", href: "/consultancy-service" },
];

const firstNavItems = navItems.slice(0, 1);
const remainingNavItems = navItems.slice(1);

export const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    setIsOpen(false);
    setIsSolutionsOpen(false);
    setIsMobileSolutionsOpen(false);
  }, [location.pathname]);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{
        y: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass border-b border-border/50 shadow-lg shadow-background/20" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link to="/" className="group flex items-center gap-2">
              <img
                src={logoIcon}
                alt="GRC Sphere"
                className="h-9 w-9 transition-transform duration-300 group-hover:scale-110"
              />
              <span className="text-xl font-display font-bold text-foreground">Observeri</span>
            </Link>
          </motion.div>

          <div className="hidden items-center gap-8 md:flex">
            {firstNavItems.map((item, index) =>
              item.href.startsWith("/") ? (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  <Link
                    to={item.href}
                    className="relative text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
                  >
                    <motion.span whileHover={{ y: -2 }} className="inline-block">
                      {item.label}
                    </motion.span>
                  </Link>
                </motion.div>
              ) : (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="relative text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  whileHover={{ y: -2 }}
                >
                  {item.label}
                  <motion.span
                    className="absolute -bottom-1 left-0 h-0.5 w-full origin-left bg-primary"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.2 }}
                />
              </motion.a>
              ),
            )}

            <motion.div
              className="relative"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              onMouseEnter={() => setIsSolutionsOpen(true)}
              onMouseLeave={() => setIsSolutionsOpen(false)}
            >
              <button
                type="button"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
                onClick={() => setIsSolutionsOpen((open) => !open)}
                onFocus={() => setIsSolutionsOpen(true)}
                aria-haspopup="menu"
              >
                <span>Industries</span>
                <motion.div animate={{ rotate: isSolutionsOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <ChevronDown className="h-4 w-4" />
                </motion.div>
              </button>

              <AnimatePresence>
                {isSolutionsOpen ? (
                  <motion.div
                    initial={{ opacity: 0, x: "-50%", y: 12, scale: 0.98 }}
                    animate={{ opacity: 1, x: "-50%", y: 0, scale: 1 }}
                    exit={{ opacity: 0, x: "-50%", y: 8, scale: 0.98 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="fixed left-1/2 top-16 z-50 w-[min(920px,calc(100vw-3rem))] rounded-3xl border-gradient bg-gradient-card p-4 shadow-2xl shadow-background/40"
                  >
                    <div>
                      <div className="grid grid-cols-[240px_minmax(0,1fr)] gap-4">
                        <div className="rounded-2xl border border-border/30 bg-background/20 p-4">
                          <p className="text-xs uppercase tracking-[0.2em] text-primary">Industry Solutions</p>
                          <p className="mt-2 text-sm leading-6 text-muted-foreground">
                            Explore the sectors called out in the Observeri presentation.
                          </p>
                        </div>

                        <div>
                          <div className="grid grid-cols-2 gap-2">
                            {industrySolutions.map((industry, index) => (
                              <motion.div
                                key={industry.slug}
                                initial={{ opacity: 0, x: -8 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.04 }}
                              >
                                <Link
                                  to={`/solutions/${industry.slug}`}
                                  className="flex min-h-[64px] items-start gap-3 rounded-2xl px-4 py-3 text-sm text-muted-foreground transition-colors duration-200 hover:bg-background/30 hover:text-foreground"
                                >
                                  <industry.icon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                                  <span className="leading-6">{industry.label}</span>
                                </Link>
                              </motion.div>
                            ))}
                          </div>

                          <div className="mt-3 border-t border-border/30 pt-3">
                            <Link
                              to="/solutions"
                              className="block rounded-2xl px-4 py-3 text-sm font-medium text-foreground transition-colors duration-200 hover:bg-background/30"
                            >
                              View all solutions
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </motion.div>

            {remainingNavItems.map((item, index) =>
              item.href.startsWith("/") ? (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (index + firstNavItems.length + 1) * 0.1 + 0.2 }}
                >
                  <Link
                    to={item.href}
                    className="relative text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
                  >
                    <motion.span whileHover={{ y: -2 }} className="inline-block">
                      {item.label}
                    </motion.span>
                  </Link>
                </motion.div>
              ) : (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="relative text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (index + firstNavItems.length + 1) * 0.1 + 0.2 }}
                  whileHover={{ y: -2 }}
                >
                  {item.label}
                  <motion.span
                    className="absolute -bottom-1 left-0 h-0.5 w-full origin-left bg-primary"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.a>
              ),
            )}
          </div>

          <div className="hidden items-center gap-4 md:flex">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button asChild variant="hero" size="sm">
                <Link to="/?contactForm=true">Get Started</Link>
              </Button>
            </motion.div>
          </div>

          <motion.button
            className="p-2 text-foreground md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-6 w-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-6 w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        <AnimatePresence>
          {isOpen ? (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden md:hidden"
            >
              <div className="border-t border-border/50 py-4">
                <div className="flex flex-col gap-2">
                  {firstNavItems.map((item, index) =>
                    item.href.startsWith("/") ? (
                      <motion.div
                        key={item.label}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 + 0.1 }}
                      >
                        <Link
                          to={item.href}
                          className="block rounded-lg px-2 py-3 text-muted-foreground transition-colors hover:bg-muted/30 hover:text-foreground"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                    ) : (
                      <motion.a
                        key={item.label}
                        href={item.href}
                        className="rounded-lg px-2 py-3 text-muted-foreground transition-colors hover:bg-muted/30 hover:text-foreground"
                        onClick={() => setIsOpen(false)}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 + 0.1 }}
                      >
                        {item.label}
                      </motion.a>
                    ),
                  )}

                  <motion.button
                    type="button"
                    className="flex items-center justify-between rounded-lg px-2 py-3 text-left text-muted-foreground transition-colors hover:bg-muted/30 hover:text-foreground"
                    onClick={() => setIsMobileSolutionsOpen((open) => !open)}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.05 }}
                  >
                    <span>Solutions</span>
                    <motion.div animate={{ rotate: isMobileSolutionsOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                      <ChevronDown className="h-5 w-5" />
                    </motion.div>
                  </motion.button>

                  <AnimatePresence initial={false}>
                    {isMobileSolutionsOpen ? (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="mb-2 ml-3 space-y-2 border-l border-border/40 pl-4">
                          <Link
                            to="/solutions"
                            className="block rounded-lg px-2 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted/30 hover:text-foreground"
                            onClick={() => setIsOpen(false)}
                          >
                            All Solutions
                          </Link>
                          {industrySolutions.map((industry, index) => (
                            <motion.div
                              key={industry.slug}
                              initial={{ x: -12, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: index * 0.03 }}
                            >
                              <Link
                                to={`/solutions/${industry.slug}`}
                                className="flex items-center gap-2 rounded-lg px-2 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted/30 hover:text-foreground"
                                onClick={() => setIsOpen(false)}
                              >
                                <industry.icon className="h-4 w-4 text-primary" />
                                <span>{industry.label}</span>
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>

                  {remainingNavItems.map((item, index) =>
                    item.href.startsWith("/") ? (
                      <motion.div
                        key={item.label}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: (index + firstNavItems.length + 1) * 0.1 + 0.1 }}
                      >
                        <Link
                          to={item.href}
                          className="block rounded-lg px-2 py-3 text-muted-foreground transition-colors hover:bg-muted/30 hover:text-foreground"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                    ) : (
                      <motion.a
                        key={item.label}
                        href={item.href}
                        className="rounded-lg px-2 py-3 text-muted-foreground transition-colors hover:bg-muted/30 hover:text-foreground"
                        onClick={() => setIsOpen(false)}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: (index + firstNavItems.length + 1) * 0.1 + 0.1 }}
                      >
                        {item.label}
                      </motion.a>
                    ),
                  )}

                  <motion.div
                    className="flex flex-col gap-2 border-t border-border/50 pt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Button asChild variant="hero">
                      <Link to="/?contactForm=true" onClick={() => setIsOpen(false)}>
                        Get Started
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};
