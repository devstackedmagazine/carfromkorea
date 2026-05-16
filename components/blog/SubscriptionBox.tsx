"use client";

import { useState } from "react";
import { Mail } from "lucide-react";

export default function SubscriptionBox() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setStatus("success");
      setEmail("");
    }
  };

  return (
    <div className="bg-[#1A1F2E] rounded-lg p-6 border border-gray-800">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-light-emerald/20 flex items-center justify-center shrink-0">
          <Mail className="text-light-emerald" size={20} />
        </div>
        <h3 className="text-white font-bold text-lg">Bashkohu me Rrethin e Brendshëm</h3>
      </div>
      <p className="text-gray-400 text-sm mb-5 leading-relaxed">
        Abonohuni për të marrë njohuri ekskluzive dhe përditësime direkt në
        inbox-in tuaj.
      </p>
      {status === "success" ? (
        <p className="text-light-emerald text-sm font-medium">
          Faleminderit për abonimin!
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <label htmlFor="subscribe-email" className="sr-only">
            Adresa e email-it
          </label>
          <input
            id="subscribe-email"
            type="email"
            placeholder="Adresa juaj e email-it"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full bg-[#111415] text-white placeholder-gray-500 rounded-lg px-4 py-3 border border-gray-700 focus:border-light-emerald focus:outline-none transition-colors"
          />
          <button
            type="submit"
            className="w-full bg-light-emerald text-[#111415] font-semibold py-3 rounded-lg hover:brightness-110 active:scale-[0.98] transition-all"
          >
            Abonohu
          </button>
        </form>
      )}
    </div>
  );
}
