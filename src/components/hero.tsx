import {
  CalendarDays,
  ChartNoAxesColumnIncreasing,
  CircleCheck,
  Clock3,
  Layers3,
  UsersRound,
  Wallet,
  ReceiptText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Brand } from "@/components/brand";

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
const hours = [242, 296, 275, 350, 384, 428];
const series = [
  {
    label: "Collections",
    color: "#6098ff",
    values: [9.2, 12.5, 11.8, 15.3, 14.6, 18.4],
  },
  {
    label: "Expenses",
    color: "#49c9ce",
    values: [2.5, 3.6, 3.1, 4.2, 3.9, 4.6],
  },
];
function CashChart() {
  const left = 34,
    width = 374,
    bottom = 112;
  const y = (v: number) => bottom - v * 4.9;
  return (
    <div className="cash-chart">
      <div className="chart-head">
        <strong>Revenue &amp; expenses</strong>
        <div className="chart-key">
          {series.map((s) => (
            <span key={s.label}>
              <i style={{ background: s.color }} />
              {s.label}
            </span>
          ))}
        </div>
      </div>
      <svg
        viewBox="0 0 420 135"
        role="img"
        aria-label="Fictional collections rise from 9.2 to 18.4 lakh rupees and expenses from 2.5 to 4.6 lakh between January and June."
      >
        <defs>
          <linearGradient id="collection-fill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#4f8cff" stopOpacity=".36" />
            <stop offset="1" stopColor="#4f8cff" stopOpacity=".01" />
          </linearGradient>
        </defs>
        {[0, 5, 10, 15, 20].map((v) => (
          <g key={v}>
            <line
              x1={left}
              x2="408"
              y1={y(v)}
              y2={y(v)}
              stroke="#2b3c58"
              strokeDasharray="3 4"
            />
            <text x="0" y={y(v) + 3}>
              {v}L
            </text>
          </g>
        ))}
        {series.map((s, index) => {
          const points = s.values.map((v, i) => [left + (i * width) / 5, y(v)]);
          const path = points.reduce((d, [x, cy], i) => {
            if (!i) return `M${x},${cy}`;
            const [px, py] = points[i - 1],
              mid = (px + x) / 2;
            return `${d} C${mid},${py} ${mid},${cy} ${x},${cy}`;
          }, "");
          return (
            <g key={s.label}>
              {index === 0 && (
                <path
                  d={`${path} V${bottom} H${left} Z`}
                  fill="url(#collection-fill)"
                />
              )}
              <path
                className="trend-line"
                pathLength="1"
                d={path}
                stroke={s.color}
                strokeWidth="2.8"
                fill="none"
              />
              <circle
                cx={points[5][0]}
                cy={points[5][1]}
                r="3"
                fill={s.color}
              />
            </g>
          );
        })}
        {months.map((m, i) => (
          <text key={m} x={left + (i * width) / 5} y="130" textAnchor="middle">
            {m}
          </text>
        ))}
      </svg>
    </div>
  );
}
function HeroDashboard() {
  return (
    <figure className="hero-figure">
      <div className="ledger-window">
        <div className="window-chrome">
          <Brand compact />
          <span>
            <CalendarDays size={13} />
            Jun 2026
          </span>
        </div>
        <div className="window-inner">
          <div className="window-title">
            <h2>Financial overview</h2>
            <span className="sample-label">Sample data</span>
          </div>
          <div className="ledger-metrics">
            {[
              {
                icon: Wallet,
                label: "Collected revenue",
                value: "₹18.4L",
                color: "#83abff",
              },
              {
                icon: ReceiptText,
                label: "Firm expenses",
                value: "₹4.6L",
                color: "#68d3ce",
              },
              {
                icon: UsersRound,
                label: "Draft payouts",
                value: "₹11.0L",
                color: "#b1a4ff",
              },
            ].map(({ icon: Icon, label, value, color }) => (
              <div key={label}>
                <Icon size={16} color={color} />
                <small>{label}</small>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
          <CashChart />
          <div className="window-bottom">
            <div>
              <Clock3 size={14} />
              Billable hours <b>428 h</b>
            </div>
            <span
              className="mini-bars"
              role="img"
              aria-label="Monthly billable hours from January to June: 242, 296, 275, 350, 384 and 428."
            >
              {hours.map((v) => (
                <i key={v} style={{ height: (v / 428) * 100 + "%" }} />
              ))}
            </span>
          </div>
        </div>
      </div>
      <div className="allocation-float">
        <span className="allocation-ring" aria-hidden="true" />
        <div>
          <strong>Partner allocation</strong>
          <span>38% · 34% · 28%</span>
        </div>
        <span className="draft-status">In review</span>
      </div>
      <figcaption>
        <Layers3 size={13} />
        Concept Preview — Not a Live Product
      </figcaption>
    </figure>
  );
}
export function Hero() {
  return (
    <section id="home" className="ledger-hero">
      <div className="container-shell hero-layout">
        <div className="hero-copy">
          <p className="concept-badge">
            <span />
            Early-stage concept
          </p>
          <h1>
            Partner Profits.
            <br />
            <em>Perfectly Clear.</em>
          </h1>
          <p className="hero-subtitle">
            A smarter way for law firm LLPs to manage billable hours, allocate
            revenue, track expenses and calculate partner payouts — all in one
            place.
          </p>
          <p className="hero-detail">
            Every LLP operates differently. Allocira is being designed to
            adapt to your firm&apos;s financial arrangements, rather than
            forcing you into a fixed system.
          </p>
          <div className="hero-actions">
            <Button asChild size="lg">
              <a href="#waitlist">Join the Waitlist</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#preview">
                <ChartNoAxesColumnIncreasing size={17} />
                Explore the Concept
              </a>
            </Button>
          </div>
          <p className="hero-trust">
            <CircleCheck size={15} />
            Currently validating with legal professionals and LLP partners.
          </p>
        </div>
        <HeroDashboard />
      </div>
    </section>
  );
}
