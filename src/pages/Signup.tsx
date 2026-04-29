import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getSupabase } from "../lib/supabase";
import { motion } from "motion/react";
import { Brain, Mail, Lock, User, UserPlus, ChevronRight } from "lucide-react";

export const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const supabase = getSupabase();
      const { data, error: signupError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            display_name: name,
          }
        }
      });
      
      if (signupError) throw signupError;
      
      if (data.user) {
        // Create profile
        const { error: profileError } = await supabase
          .from('profiles')
          .insert([
            { 
              id: data.user.id, 
              email: email, 
              display_name: name,
              age: parseInt(age),
              favorites: []
            }
          ]);
        
        if (profileError) console.error("Profile creation error:", profileError);
      }

      navigate("/");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-24 pb-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-10">
          <Link to="/" className="inline-flex items-center gap-2 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sastra-500 to-blue-500 flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <span className="font-space font-bold text-2xl text-white">AI-Sastra</span>
          </Link>
          <h1 className="text-3xl font-space font-bold text-white mb-2">Create Account</h1>
          <p className="text-zinc-400">Join the universal AI platform</p>
        </div>

        <div className="glass-morphism rounded-3xl p-8 border-zinc-800/50">
          <form onSubmit={handleSignup} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-zinc-400 mb-2">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl py-3 pl-10 pr-4 text-white focus:outline-none focus:border-sastra-500 transition-colors"
                  placeholder="John Doe"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-400 mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl py-3 pl-10 pr-4 text-white focus:outline-none focus:border-sastra-500 transition-colors"
                  placeholder="name@company.com"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-2">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl py-3 pl-10 pr-4 text-white focus:outline-none focus:border-sastra-500 transition-colors"
                    placeholder="••••••••"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-2">Your Age</label>
                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-sastra-500 transition-colors"
                  placeholder="25"
                  required
                />
              </div>
            </div>

            {error && (
              <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-gradient-to-r from-sastra-600 to-blue-600 rounded-xl text-white font-bold hover:shadow-lg hover:shadow-sastra-500/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {loading ? "Creating account..." : (
                <>
                  <UserPlus className="w-5 h-5" />
                  Create Account
                </>
              )}
            </button>
          </form>

          <p className="mt-8 text-center text-zinc-500 text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-sastra-400 font-semibold hover:text-sastra-300 transition-colors inline-flex items-center gap-1">
              Get started
              <ChevronRight className="w-4 h-4" />
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};
