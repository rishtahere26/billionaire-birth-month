import { useState } from "react";

const data = {
  billionairesByMonth: [
    { month: "Jan", short: "J", count: 27, score: 72, emoji: "❄️", color: "#4FC3F7", wealth: "$2.1T" },
    { month: "Feb", short: "F", count: 21, score: 58, emoji: "💘", color: "#F48FB1", wealth: "$1.6T" },
    { month: "Mar", short: "M", count: 24, score: 65, emoji: "🌱", color: "#81C784", wealth: "$1.8T" },
    { month: "Apr", short: "A", count: 27, score: 72, emoji: "🌸", color: "#CE93D8", wealth: "$2.0T" },
    { month: "May", short: "M", count: 25, score: 68, emoji: "☀️", color: "#FFD54F", wealth: "$1.9T" },
    { month: "Jun", short: "J", count: 30, score: 80, emoji: "🌊", color: "#4DD0E1", wealth: "$2.3T" },
    { month: "Jul", short: "J", count: 28, score: 75, emoji: "🎆", color: "#FF8A65", wealth: "$2.1T" },
    { month: "Aug", short: "A", count: 29, score: 78, emoji: "🔥", color: "#FFB74D", wealth: "$2.2T" },
    { month: "Sep", short: "S", count: 27, score: 72, emoji: "🍂", color: "#A5D6A7", wealth: "$2.0T" },
    { month: "Oct", short: "O", count: 36, score: 96, emoji: "👑", color: "#FFD700", wealth: "$2.8T" },
    { month: "Nov", short: "N", count: 19, score: 51, emoji: "🍁", color: "#FFCC02", wealth: "$1.4T" },
    { month: "Dec", short: "D", count: 15, score: 40, emoji: "🎄", color: "#EF5350", wealth: "$1.1T" },
  ],

  topBillionaires: [
    { name: "Elon Musk", month: "Jun", dob: "Jun 28", wealth: "$839B", flag: "🇿🇦🇺🇸", company: "Tesla/SpaceX", rank: 1 },
    { name: "Larry Page", month: "Mar", dob: "Mar 26", wealth: "$257B", flag: "🇺🇸", company: "Google", rank: 2 },
    { name: "Jeff Bezos", month: "Jan", dob: "Jan 12", wealth: "$224B", flag: "🇺🇸", company: "Amazon", rank: 3 },
    { name: "Mark Zuckerberg", month: "May", dob: "May 14", wealth: "$222B", flag: "🇺🇸", company: "Meta", rank: 4 },
    { name: "Sergey Brin", month: "Aug", dob: "Aug 21", wealth: "$237B", flag: "🇷🇺🇺🇸", company: "Google", rank: 5 },
    { name: "Larry Ellison", month: "Aug", dob: "Aug 17", wealth: "$190B", flag: "🇺🇸", company: "Oracle", rank: 6 },
    { name: "Bernard Arnault", month: "Mar", dob: "Mar 5", wealth: "$171B", flag: "🇫🇷", company: "LVMH", rank: 7 },
    { name: "Jensen Huang", month: "Feb", dob: "Feb 17", wealth: "$154B", flag: "🇹🇼🇺🇸", company: "NVIDIA", rank: 8 },
    { name: "Warren Buffett", month: "Aug", dob: "Aug 30", wealth: "$149B", flag: "🇺🇸", company: "Berkshire", rank: 9 },
    { name: "Bill Gates", month: "Oct", dob: "Oct 28", wealth: "$108B", flag: "🇺🇸", company: "Microsoft", rank: 10 },
    { name: "Mukesh Ambani", month: "Apr", dob: "Apr 19", wealth: "$115B", flag: "🇮🇳", company: "Reliance", rank: 11 },
    { name: "Amancio Ortega", month: "Mar", dob: "Mar 28", wealth: "$148B", flag: "🇪🇸", company: "Zara", rank: 12 },
  ],

  funFacts: [
    { icon: "👑", title: "October Reigns Supreme", text: "36 of the top 300 billionaires were born in October. December cries in a corner with just 15." },
    { icon: "🎭", title: "The Libra Effect", text: "Libras (late Sep–Oct) make up 12% of top billionaires. Apparently balance = balanced portfolio." },
    { icon: "📚", title: "The School Edge", text: "Kids born Sep–Dec are youngest in class globally, giving Jan–Aug babies a confidence boost that lasts... forever." },
    { icon: "🌍", title: "Global Billionaires 2026", text: "3,400+ people are billionaires worldwide. They're worth a combined $20 TRILLION. That's not a typo." },
    { icon: "🐐", title: "Capricorn Loses", text: "Capricorns (Dec–Jan) are the LEAST common billionaire sign. Saturn discipline? More like Saturn disappointment." },
    { icon: "🎓", title: "Fortune 500 CEOs", text: "Most Fortune 500 CEOs were born in March & April. Spring babies run the C-suite. Summer babies run the pool." },
  ],

  monthRanking: [
    { rank: "🥇", month: "October", reason: "The Billionaire Factory. Libra energy + Scorpio intensity = obscene wealth" },
    { rank: "🥈", month: "June", reason: "Elon Musk alone makes June worth mentioning. Good summer vibes, better balance sheets." },
    { rank: "🥉", month: "August", reason: "3 of top 10 richest people born here. Leos really do think they own everything." },
    { rank: "4️⃣", month: "July", reason: "Solid showing. Independence Day energy channeled into financial independence." },
    { rank: "5️⃣", month: "January/April/September", reason: "The solid middle class of birth months. Respectable, but not October." },
    { rank: "🪦", month: "December", reason: "Fewest billionaires. Christmas gifts don't count as investment income. Sorry." },
  ],
};

const maxCount = Math.max(...data.billionairesByMonth.map(d => d.count));

export default function BillionaireBirthMonth() {
  const [activeTab, setActiveTab] = useState("chart");
  const [hoveredMonth, setHoveredMonth] = useState(null);

  const getBarHeight = (count) => (count / maxCount) * 200;

  return (
    <div style={{
      fontFamily: "'Georgia', 'Times New Roman', serif",
      background: "linear-gradient(135deg, #0a0a1a 0%, #0d1a2e 40%, #0a0a1a 100%)",
      minHeight: "100vh",
      color: "#e8d5a3",
      padding: "0",
      margin: "0",
    }}>

      {/* Hero Header */}
      <div style={{
        background: "linear-gradient(180deg, rgba(255,215,0,0.15) 0%, transparent 100%)",
        borderBottom: "1px solid rgba(255,215,0,0.3)",
        padding: "40px 20px 30px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: "radial-gradient(circle at 20% 50%, rgba(255,215,0,0.05) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(79,195,247,0.05) 0%, transparent 50%)",
        }} />
        <div style={{ fontSize: "14px", letterSpacing: "6px", color: "#FFD700", textTransform: "uppercase", marginBottom: "16px", fontFamily: "monospace" }}>
          💰 DEEP DIVE ANALYSIS 2025–2026 💰
        </div>
        <h1 style={{
          fontSize: "clamp(28px, 5vw, 56px)",
          fontWeight: "900",
          margin: "0 0 12px",
          background: "linear-gradient(135deg, #FFD700, #FFF8DC, #FFD700)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          lineHeight: 1.1,
          fontFamily: "'Georgia', serif",
        }}>
          Were You Born Rich?
        </h1>
        <p style={{ fontSize: "clamp(14px, 2.5vw, 20px)", color: "#a0b4c8", maxWidth: "600px", margin: "0 auto 20px", lineHeight: 1.6 }}>
          A totally serious scientific analysis of why some birth months produce billionaires and others produce... the rest of us.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "24px", flexWrap: "wrap" }}>
          {[
            { label: "Billionaires Analyzed", value: "3,400+" },
            { label: "Top Birth Month", value: "October 👑" },
            { label: "Combined Wealth", value: "$20T" },
            { label: "Your Excuse Now", value: "None 😅" },
          ].map((s, i) => (
            <div key={i} style={{
              background: "rgba(255,215,0,0.08)",
              border: "1px solid rgba(255,215,0,0.2)",
              borderRadius: "12px",
              padding: "12px 20px",
              textAlign: "center",
            }}>
              <div style={{ fontSize: "22px", fontWeight: "bold", color: "#FFD700" }}>{s.value}</div>
              <div style={{ fontSize: "11px", color: "#6a7f8e", letterSpacing: "1px" }}>{s.label.toUpperCase()}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Tab Navigation */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "8px",
        padding: "20px",
        flexWrap: "wrap",
      }}>
        {[
          { id: "chart", label: "📊 Birth Month Chart" },
          { id: "billionaires", label: "💸 The Rich List" },
          { id: "ranking", label: "🏆 Month Rankings" },
          { id: "facts", label: "🤯 Fun Facts" },
        ].map(tab => (
          <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={{
            background: activeTab === tab.id ? "rgba(255,215,0,0.2)" : "rgba(255,255,255,0.04)",
            border: activeTab === tab.id ? "1px solid #FFD700" : "1px solid rgba(255,255,255,0.1)",
            color: activeTab === tab.id ? "#FFD700" : "#a0b4c8",
            borderRadius: "8px",
            padding: "10px 18px",
            cursor: "pointer",
            fontSize: "14px",
            fontFamily: "monospace",
            letterSpacing: "0.5px",
            transition: "all 0.2s",
          }}>
            {tab.label}
          </button>
        ))}
      </div>

      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 20px 60px" }}>

        {/* CHART TAB */}
        {activeTab === "chart" && (
          <div>
            <div style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,215,0,0.15)",
              borderRadius: "20px",
              padding: "30px 20px",
              marginBottom: "24px",
            }}>
              <h2 style={{ textAlign: "center", color: "#FFD700", marginBottom: "8px", fontSize: "22px" }}>
                Billionaire Count by Birth Month
              </h2>
              <p style={{ textAlign: "center", color: "#6a7f8e", fontSize: "13px", marginBottom: "30px", fontFamily: "monospace" }}>
                Based on Forbes 300 Top Billionaires + extended analysis of 3,400+ worldwide
              </p>

              {/* Bar Chart */}
              <div style={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
                gap: "8px",
                height: "240px",
                padding: "0 10px",
              }}>
                {data.billionairesByMonth.map((item, i) => {
                  const height = getBarHeight(item.count);
                  const isHovered = hoveredMonth === i;
                  const isTop = item.count === maxCount;
                  return (
                    <div
                      key={i}
                      onMouseEnter={() => setHoveredMonth(i)}
                      onMouseLeave={() => setHoveredMonth(null)}
                      style={{ display: "flex", flexDirection: "column", alignItems: "center", cursor: "pointer", flex: 1, minWidth: 0 }}
                    >
                      {/* Tooltip */}
                      <div style={{
                        background: "rgba(0,0,0,0.9)",
                        border: `1px solid ${item.color}`,
                        borderRadius: "8px",
                        padding: "6px 10px",
                        marginBottom: "6px",
                        fontSize: "11px",
                        opacity: isHovered ? 1 : 0,
                        transition: "opacity 0.2s",
                        textAlign: "center",
                        whiteSpace: "nowrap",
                        color: item.color,
                        pointerEvents: "none",
                      }}>
                        <div style={{ fontWeight: "bold" }}>{item.month}</div>
                        <div>{item.count} billionaires</div>
                        <div>{item.emoji}</div>
                      </div>

                      {/* Count label */}
                      <div style={{ fontSize: "11px", color: isTop ? "#FFD700" : "#6a7f8e", marginBottom: "4px", fontWeight: isTop ? "bold" : "normal" }}>
                        {item.count}
                      </div>

                      {/* Bar */}
                      <div style={{
                        width: "100%",
                        height: `${height}px`,
                        background: isTop
                          ? `linear-gradient(180deg, #FFD700, #FFA500)`
                          : `linear-gradient(180deg, ${item.color}cc, ${item.color}44)`,
                        borderRadius: "4px 4px 0 0",
                        border: isHovered ? `1px solid ${item.color}` : "1px solid transparent",
                        transition: "all 0.3s",
                        transform: isHovered ? "scaleY(1.03)" : "scaleY(1)",
                        transformOrigin: "bottom",
                        position: "relative",
                      }}>
                        {isTop && (
                          <div style={{ position: "absolute", top: "-20px", left: "50%", transform: "translateX(-50%)", fontSize: "16px" }}>👑</div>
                        )}
                      </div>

                      {/* Month label */}
                      <div style={{ fontSize: "11px", color: "#a0b4c8", marginTop: "6px", fontFamily: "monospace" }}>
                        {item.short}
                      </div>
                      <div style={{ fontSize: "13px" }}>{item.emoji}</div>
                    </div>
                  );
                })}
              </div>

              <div style={{ textAlign: "center", marginTop: "16px", color: "#4a5f6e", fontSize: "12px", fontStyle: "italic" }}>
                👆 Hover over bars for details. October is not even trying to be subtle about it.
              </div>
            </div>

            {/* Wealth Heatmap */}
            <div style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,215,0,0.15)",
              borderRadius: "20px",
              padding: "24px",
            }}>
              <h3 style={{ color: "#FFD700", marginBottom: "16px", textAlign: "center" }}>Wealth Concentration Heat Map 🌡️</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "10px" }}>
                {data.billionairesByMonth.map((item, i) => {
                  const intensity = item.score / 100;
                  return (
                    <div key={i} style={{
                      background: `rgba(255, ${Math.round(215 * intensity)}, 0, ${0.1 + intensity * 0.3})`,
                      border: `1px solid rgba(255, ${Math.round(215 * intensity)}, 0, ${0.3 + intensity * 0.4})`,
                      borderRadius: "12px",
                      padding: "14px 10px",
                      textAlign: "center",
                    }}>
                      <div style={{ fontSize: "20px" }}>{item.emoji}</div>
                      <div style={{ fontWeight: "bold", fontSize: "13px", color: "#e8d5a3", marginTop: "4px" }}>{item.month}</div>
                      <div style={{ fontSize: "11px", color: "#FFD700", fontFamily: "monospace" }}>{item.wealth}</div>
                      <div style={{ fontSize: "10px", color: "#6a7f8e", marginTop: "2px" }}>est. wealth</div>
                    </div>
                  );
                })}
              </div>
              <p style={{ color: "#4a5f6e", fontSize: "12px", textAlign: "center", marginTop: "12px", fontStyle: "italic" }}>
                * Estimated combined wealth of billionaires born in each month. October glows gold. December needs therapy.
              </p>
            </div>
          </div>
        )}

        {/* BILLIONAIRES TAB */}
        {activeTab === "billionaires" && (
          <div>
            <div style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,215,0,0.15)",
              borderRadius: "20px",
              padding: "24px",
              marginBottom: "20px",
            }}>
              <h2 style={{ color: "#FFD700", textAlign: "center", marginBottom: "6px" }}>The Forbes 2026 Elite 🏰</h2>
              <p style={{ color: "#6a7f8e", textAlign: "center", fontSize: "13px", marginBottom: "20px" }}>
                Top billionaires worldwide with their suspicious birth months
              </p>
              {data.topBillionaires.map((person, i) => {
                const monthData = data.billionairesByMonth.find(m => m.month === person.month);
                return (
                  <div key={i} style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    padding: "14px",
                    borderRadius: "12px",
                    marginBottom: "8px",
                    background: i === 0 ? "rgba(255,215,0,0.08)" : "rgba(255,255,255,0.02)",
                    border: i === 0 ? "1px solid rgba(255,215,0,0.3)" : "1px solid rgba(255,255,255,0.06)",
                  }}>
                    <div style={{ fontSize: "20px", width: "32px", textAlign: "center" }}>
                      {person.rank === 1 ? "👑" : `#${person.rank}`}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontWeight: "bold", color: "#e8d5a3", fontSize: "15px" }}>
                        {person.flag} {person.name}
                      </div>
                      <div style={{ color: "#6a7f8e", fontSize: "12px" }}>{person.company}</div>
                    </div>
                    <div style={{ textAlign: "center" }}>
                      <div style={{
                        background: `${monthData?.color}22`,
                        border: `1px solid ${monthData?.color}66`,
                        borderRadius: "8px",
                        padding: "4px 10px",
                        fontSize: "12px",
                        color: monthData?.color,
                        fontFamily: "monospace",
                        whiteSpace: "nowrap",
                      }}>
                        {monthData?.emoji} {person.dob}
                      </div>
                    </div>
                    <div style={{ textAlign: "right", minWidth: "70px" }}>
                      <div style={{ color: "#FFD700", fontWeight: "bold", fontSize: "14px" }}>{person.wealth}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* August alert */}
            <div style={{
              background: "rgba(255,183,77,0.1)",
              border: "1px solid rgba(255,183,77,0.4)",
              borderRadius: "16px",
              padding: "20px",
              textAlign: "center",
            }}>
              <div style={{ fontSize: "28px", marginBottom: "8px" }}>🦁</div>
              <div style={{ color: "#FFB74D", fontWeight: "bold", fontSize: "16px", marginBottom: "8px" }}>
                The August Anomaly
              </div>
              <div style={{ color: "#a0b4c8", fontSize: "14px", lineHeight: 1.6 }}>
                Sergey Brin, Larry Ellison, AND Warren Buffett are all August babies.<br />
                Three of the top 10 richest humans sharing one summer month.<br />
                <span style={{ color: "#FFB74D" }}>Coincidence? The data says: probably not. Astrology says: Leo season. Math says: shrug.</span>
              </div>
            </div>
          </div>
        )}

        {/* RANKING TAB */}
        {activeTab === "ranking" && (
          <div>
            <div style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,215,0,0.15)",
              borderRadius: "20px",
              padding: "24px",
              marginBottom: "20px",
            }}>
              <h2 style={{ color: "#FFD700", textAlign: "center", marginBottom: "6px" }}>
                Official Birth Month Wealth Rankings
              </h2>
              <p style={{ color: "#6a7f8e", textAlign: "center", fontSize: "13px", marginBottom: "24px" }}>
                Ranked by billionaire count, wealth concentration & scientific vibes
              </p>
              {data.monthRanking.map((item, i) => (
                <div key={i} style={{
                  display: "flex",
                  gap: "16px",
                  alignItems: "flex-start",
                  padding: "16px",
                  borderRadius: "12px",
                  marginBottom: "10px",
                  background: i === 0 ? "rgba(255,215,0,0.08)" : "rgba(255,255,255,0.02)",
                  border: i === 0 ? "1px solid rgba(255,215,0,0.3)" : "1px solid rgba(255,255,255,0.06)",
                }}>
                  <div style={{ fontSize: "22px", flexShrink: 0 }}>{item.rank}</div>
                  <div>
                    <div style={{ fontWeight: "bold", color: "#e8d5a3", marginBottom: "4px", fontSize: "16px" }}>
                      {item.month}
                    </div>
                    <div style={{ color: "#a0b4c8", fontSize: "13px", lineHeight: 1.5 }}>{item.reason}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* The Academic Connection */}
            <div style={{
              background: "rgba(79,195,247,0.06)",
              border: "1px solid rgba(79,195,247,0.25)",
              borderRadius: "16px",
              padding: "24px",
            }}>
              <h3 style={{ color: "#4FC3F7", marginBottom: "12px", textAlign: "center" }}>🎓 The Real Reason: The School Cutoff Effect</h3>
              <div style={{ color: "#a0b4c8", fontSize: "14px", lineHeight: 1.8 }}>
                <p>In most countries, school enrollment cutoff dates fall around <strong style={{ color: "#4FC3F7" }}>August–September</strong>. This means kids born just after the cutoff (Sep–Dec) are the <em>youngest</em> in their class — and research shows they're consistently outcompeted by older classmates.</p>
                <p>The September-born kid who enters school as the youngest builds less confidence, gets fewer leadership roles, and earns slightly less later in life. Meanwhile, the January-born kid who's nearly a year older feels like a genius among peers.</p>
                <p style={{ color: "#FFD700" }}>📌 This "Relative Age Effect" has been documented in Fortune 500 CEOs, NHL players, and yes — billionaires. It's not destiny. It's just... really unfair.</p>
              </div>
            </div>
          </div>
        )}

        {/* FACTS TAB */}
        {activeTab === "facts" && (
          <div>
            <div style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,215,0,0.15)",
              borderRadius: "20px",
              padding: "24px",
              marginBottom: "20px",
            }}>
              <h2 style={{ color: "#FFD700", textAlign: "center", marginBottom: "6px" }}>Mind-Blowing Facts</h2>
              <p style={{ color: "#6a7f8e", textAlign: "center", fontSize: "13px", marginBottom: "24px" }}>
                Possibly more useful than your horoscope. Probably not.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "14px" }}>
                {data.funFacts.map((fact, i) => (
                  <div key={i} style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "14px",
                    padding: "18px",
                  }}>
                    <div style={{ fontSize: "28px", marginBottom: "10px" }}>{fact.icon}</div>
                    <div style={{ color: "#FFD700", fontWeight: "bold", marginBottom: "8px", fontSize: "14px" }}>{fact.title}</div>
                    <div style={{ color: "#a0b4c8", fontSize: "13px", lineHeight: 1.6 }}>{fact.text}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Zodiac Breakdown */}
            <div style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,215,0,0.15)",
              borderRadius: "20px",
              padding: "24px",
              marginBottom: "20px",
            }}>
              <h3 style={{ color: "#FFD700", textAlign: "center", marginBottom: "16px" }}>
                ♎ Zodiac Sign Wealth Rankings
              </h3>
              <p style={{ color: "#6a7f8e", fontSize: "12px", textAlign: "center", marginBottom: "16px" }}>
                Based on Cashfloat analysis of Forbes Top 300 Billionaires
              </p>
              {[
                { sign: "♎ Libra", pct: "12%", note: "Balance scales... mostly tipped toward wealth", color: "#FFD700" },
                { sign: "♓ Pisces", pct: "11%", note: "Swimming in money, apparently", color: "#4FC3F7" },
                { sign: "♉ Taurus", pct: "10%", note: "Stubborn enough to hold stocks through crashes", color: "#81C784" },
                { sign: "♌ Leo", pct: "9%", note: "The logo for every luxury brand ever", color: "#FFB74D" },
                { sign: "♈ Aries", pct: "8%", note: "First in everything, including net worth", color: "#EF5350" },
                { sign: "♑ Capricorn", pct: "5%", note: "Last. Saturn said work harder.", color: "#78909C" },
              ].map((z, i) => (
                <div key={i} style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "10px",
                  padding: "10px",
                  borderRadius: "8px",
                  background: "rgba(255,255,255,0.02)",
                }}>
                  <div style={{ fontSize: "16px", width: "80px", color: z.color, fontWeight: "bold" }}>{z.sign}</div>
                  <div style={{ flex: 1, background: "rgba(255,255,255,0.05)", borderRadius: "4px", height: "8px", overflow: "hidden" }}>
                    <div style={{ width: z.pct, height: "100%", background: z.color, borderRadius: "4px" }} />
                  </div>
                  <div style={{ width: "36px", color: z.color, fontSize: "13px", fontWeight: "bold", fontFamily: "monospace" }}>{z.pct}</div>
                  <div style={{ color: "#6a7f8e", fontSize: "12px", flex: 2 }}>{z.note}</div>
                </div>
              ))}
            </div>

            {/* Disclaimer / Closing */}
            <div style={{
              background: "rgba(239,83,80,0.07)",
              border: "1px solid rgba(239,83,80,0.3)",
              borderRadius: "16px",
              padding: "20px",
              textAlign: "center",
            }}>
              <div style={{ fontSize: "24px", marginBottom: "8px" }}>⚠️</div>
              <div style={{ color: "#EF9A9A", fontWeight: "bold", marginBottom: "8px" }}>Important Scientific Disclaimer</div>
              <div style={{ color: "#a0b4c8", fontSize: "13px", lineHeight: 1.7 }}>
                Correlation ≠ causation. Being born in October does not guarantee billions.<br />
                Neither does being a Libra, going to a good school, or reading this infographic.<br />
                <br />
                <span style={{ color: "#EF5350" }}>What DOES matter: access to capital, education, networks, timing, luck, and frankly — being born in a country where billionaires are even possible.</span><br />
                <br />
                <span style={{ color: "#6a7f8e", fontSize: "12px" }}>December babies: you're fine. Elon Musk was born in June and turned out okay-ish.</span>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <div style={{ textAlign: "center", marginTop: "40px", color: "#2a3a4a", fontSize: "12px", fontFamily: "monospace" }}>
          Data: Forbes World's Billionaires 2026 • Cashfloat Zodiac Study • Multiple Birth Month Analyses<br />
          Humor: Abundant • Scientific Certainty: Moderate • October Bias: Confirmed
        </div>
      </div>
    </div>
  );
}
