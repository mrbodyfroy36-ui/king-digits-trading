"use client"
import { useState, useEffect } from "react"

export default function Page() {
  const [digit, setDigit] = useState(5)
  const [balance, setBalance] = useState(10000)
  const [mode, setMode] = useState<"DEMO" | "REAL">("DEMO")

  useEffect(() => {
    const i = setInterval(() => setDigit(Math.floor(Math.random() * 10)), 1200)
    return () => clearInterval(i)
  }, [])

  return (
    <div style={{ background: "#050505", color: "#fff", minHeight: "100vh", padding: "15px", fontFamily: "sans-serif" }}>
      <h1 style={{ color: "#FFD700", textAlign: "center" }}>👑 KING DIGITS TRADING</h1>
      
      <div style={{ display: "flex", justifyContent: "center", margin: "15px" }}>
        <button onClick={() => setMode(mode === "DEMO" ? "REAL" : "DEMO")} 
        style={{ background: mode === "DEMO" ? "#22c55e" : "#ef4444", padding: "12px 25px", borderRadius: "30px", border: "none", color: "#fff", fontWeight: "bold", fontSize: "16px" }}>
          {mode} {mode === "DEMO" ? "🟢" : "🔴"} - CLICK TO SWITCH
        </button>
      </div>

      <div style={{ background: "#1a1a1a", padding: "25px", borderRadius: "20px", textAlign: "center", border: "2px solid #FFD700" }}>
        <div style={{ fontSize: "90px", fontWeight: "bold", color: "#FFD700" }}>{digit}</div>
        <p style={{ fontSize: "18px" }}>Last Digit</p>
        <h2>Balance: ${balance.toLocaleString()} {mode}</h2>
      </div>

      <div style={{ background: "#111", padding: "15px", borderRadius: "15px", marginTop: "15px", border: "1px solid #333" }}>
        <h3>💰 WALLET - {mode} ACCOUNT</h3>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginTop: "10px" }}>
          <button onClick={() => { const a = Number(prompt("Weka kiasi cha Deposit $:")); if(a) setBalance(b => b + a) }} 
          style={{ background: "#22c55e", padding: "15px", borderRadius: "10px", border: "none", color: "#fff", fontWeight: "bold" }}>DEPOSIT 💰</button>
          
          <button onClick={() => { const a = Number(prompt("Weka kiasi cha Withdraw $:")); if(a) setBalance(b => b - a) }} 
          style={{ background: "#ef4444", padding: "15px", borderRadius: "10px", border: "none", color: "#fff", fontWeight: "bold" }}>WITHDRAW 💸</button>
        </div>
        <p style={{ fontSize: "12px", color: "#888", marginTop: "10px", textAlign: "center" }}>Hii ni wallet ya kwenye website yako tu. {mode} Mode</p>
      </div>

      <div style={{ textAlign: "center", marginTop: "20px", color: "#666" }}>
        <p>Deriv Bot Connected Ready</p>
      </div>
    </div>
  )
}
