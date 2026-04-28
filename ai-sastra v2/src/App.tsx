import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { 
  Brain, 
  Menu, 
  X,
  Twitter,
  Github as GithubIcon,
  Linkedin
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Home } from "./pages/Home";
import { CategoryPage } from "./pages/CategoryPage";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { JatayuBot } from "./components/JatayuBot";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import { LogOut, User as UserIcon } from "lucide-react";

const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = location.pathname === "/";
  const { user, profile, logout } = useAuth();

  const navLinks = [
    { name: "Features", href: isHome ? "#features" : "/#features" },
    { name: "Age-Adaptive", href: isHome ? "#age-adaptive" : "/#age-adaptive" },
    { name: "Directory", href: isHome ? "#directory" : "/#directory" },
    { name: "Breakthrough", href: isHome ? "#breakthrough" : "/#breakthrough" },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800/50 py-3" : "bg-transparent py-5"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sastra-500 to-blue-500 flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="font-space font-bold text-xl tracking-tight text-white">AI-Sastra</span>
            </Link>
            
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-zinc-400 hover:text-white transition-colors text-sm font-medium">
                  {link.name}
                </a>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-3">
              {user ? (
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800">
                    <div className="w-6 h-6 rounded-full bg-sastra-500/20 flex items-center justify-center">
                      <UserIcon className="w-3.5 h-3.5 text-sastra-400" />
                    </div>
                    <span className="text-xs font-medium text-zinc-300">{profile?.displayName || user.email}</span>
                  </div>
                  <button 
                    onClick={() => logout()}
                    className="p-2 text-zinc-500 hover:text-white transition-colors"
                    title="Logout"
                  >
                    <LogOut className="w-5 h-5" />
                  </button>
                </div>
              ) : (
                <>
                  <Link to="/login" className="px-4 py-2 text-sm font-medium text-zinc-300 hover:text-white transition-colors">Sign In</Link>
                  <Link to="/signup" className="px-5 py-2 text-sm font-semibold bg-gradient-to-r from-sastra-600 to-blue-600 rounded-full text-white hover:shadow-lg hover:shadow-sastra-500/25 transition-all text-center">
                    Get Early Access
                  </Link>
                </>
              )}
            </div>

            <button onClick={() => setIsOpen(true)} className="md:hidden p-2 text-zinc-400 hover:text-white">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-zinc-950 p-6 flex flex-col"
          >
            <div className="flex justify-between items-center mb-10">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sastra-500 to-blue-500 flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <span className="font-space font-bold text-xl text-white">AI-Sastra</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 text-zinc-400 hover:text-white">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex flex-col gap-6 text-lg">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-zinc-300 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="mt-auto flex flex-col gap-3">
              {user ? (
                <div className="space-y-3">
                  <div className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center gap-3">
                    <UserIcon className="w-5 h-5 text-sastra-400" />
                    <div>
                      <div className="text-sm font-medium text-white">{profile?.displayName || user.email}</div>
                      <div className="text-xs text-zinc-500">{user.email}</div>
                    </div>
                  </div>
                  <button 
                    onClick={() => { logout(); setIsOpen(false); }}
                    className="w-full py-3 text-sm font-medium text-red-400 border border-red-500/10 bg-red-500/5 rounded-full"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <>
                  <Link to="/login" onClick={() => setIsOpen(false)} className="w-full py-3 text-sm font-medium text-zinc-300 border border-zinc-700 rounded-full text-center">Sign In</Link>
                  <Link to="/signup" onClick={() => setIsOpen(false)} className="w-full py-3 text-sm font-semibold bg-gradient-to-r from-sastra-600 to-blue-600 rounded-full text-white text-center">Get Early Access</Link>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Footer = () => {
  return (
      <footer className="py-20 border-t border-zinc-900 bg-zinc-950 px-4">
          <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
                  <div className="col-span-2 md:col-span-1">
                      <div className="flex items-center gap-2 mb-6">
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sastra-500 to-blue-500 flex items-center justify-center">
                              <Brain className="w-5 h-5 text-white" />
                          </div>
                          <span className="font-space font-bold text-2xl text-white">AI-Sastra</span>
                      </div>
                      <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">Connecting generations with the future of technology. Every AI. Every age. One experience.</p>
                      <div className="flex gap-4 mt-8">
                          <Twitter className="w-5 h-5 text-zinc-600 hover:text-white cursor-pointer transition-colors" />
                          <GithubIcon className="w-5 h-5 text-zinc-600 hover:text-white cursor-pointer transition-colors" />
                          <Linkedin className="w-5 h-5 text-zinc-600 hover:text-white cursor-pointer transition-colors" />
                      </div>
                  </div>
                  <div>
                      <h5 className="font-bold text-white mb-6 uppercase text-xs tracking-widest">Platform</h5>
                      <ul className="space-y-4 text-sm text-zinc-500">
                          <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                          <li><a href="#directory" className="hover:text-white transition-colors">Directory</a></li>
                          <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
                      </ul>
                  </div>
                  <div>
                      <h5 className="font-bold text-white mb-6 uppercase text-xs tracking-widest">Company</h5>
                      <ul className="space-y-4 text-sm text-zinc-500">
                          <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                          <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                          <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                      </ul>
                  </div>
                  <div>
                      <h5 className="font-bold text-white mb-6 uppercase text-xs tracking-widest">Legal</h5>
                      <ul className="space-y-4 text-sm text-zinc-500">
                          <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                          <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                      </ul>
                  </div>
              </div>
              <div className="pt-10 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
                  <p className="text-zinc-600 text-xs">© 2025 AI-Sastra. All rights reserved.</p>
                  <div className="flex gap-8 items-center">
                      <span className="text-[10px] text-zinc-600 uppercase tracking-widest flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                          Systems Operational
                      </span>
                  </div>
              </div>
          </div>
      </footer>
  );
};

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <ScrollToTop />
        <div className="min-h-screen bg-zinc-950 grid-bg selection:bg-sastra-500/30 selection:text-white">
          <Navbar />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:id" element={<CategoryPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>

          <JatayuBot />
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
}
