import { cn } from '../../lib/utils'

function Aurora() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#0A0D10]">
      <div className="absolute inset-0 grid-dark opacity-25" />
      <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-lime/20 blur-[90px]" />
      <div className="absolute inset-x-[6%] top-[8%] flex h-[104%] flex-col overflow-hidden rounded-t-xl border border-white/10 bg-[#0D1015] shadow-2xl">
        <div className="flex h-7 shrink-0 items-center gap-2 border-b border-white/[0.07] px-3">
          <div className="flex gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
          </div>
          <div className="mx-auto flex items-center gap-1 rounded-full border border-white/[0.07] bg-white/[0.03] px-2 py-0.5 font-mono text-[5.5px] tracking-wide text-white/30">
            <span className="h-1 w-1 rounded-full bg-lime/80" />
            app.aurora.io / overview
          </div>
        </div>

        <div className="flex min-h-0 flex-1">
          <div className="hidden w-[86px] shrink-0 flex-col border-r border-white/[0.07] p-2.5 sm:flex">
            <div className="flex items-center gap-1 px-1 pb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-lime" />
              <span className="font-display text-[8px] font-semibold tracking-tight text-white">aurora</span>
            </div>
            <div className="space-y-0.5">
              {['Overview', 'Reports', 'Cohorts', 'Settings'].map((item, index) => (
                <div
                  key={item}
                  className={cn(
                    'flex items-center gap-1.5 rounded px-1.5 py-1 text-[6.5px]',
                    index === 0 ? 'bg-white/[0.06] text-white/80' : 'text-white/35',
                  )}
                >
                  <span className={cn('h-0.5 w-0.5 rounded-full', index === 0 ? 'bg-lime' : 'bg-white/25')} />
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-auto flex items-center gap-1.5 border-t border-white/[0.07] pt-2">
              <span className="grid h-4 w-4 place-items-center rounded-full bg-white/10 font-mono text-[5px] text-white/60">
                AM
              </span>
              <span className="text-[6px] text-white/40">Alex M.</span>
            </div>
          </div>

          <div className="flex min-w-0 flex-1 flex-col gap-2 p-2.5 sm:p-3.5">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-display text-[10px] font-semibold tracking-tight text-white">Overview</p>
                <p className="mt-0.5 text-[6px] text-white/35">Last 30 days · All workspaces</p>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="hidden rounded border border-white/10 px-1.5 py-0.5 font-mono text-[5.5px] text-white/35 sm:block">
                  Nov 1 – Nov 30
                </span>
                <span className="grid h-4 w-4 place-items-center rounded-full bg-lime/15 font-mono text-[5px] text-lime">
                  AM
                </span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-1.5">
              {[
                { label: 'Net revenue', value: '$482.9k', delta: '+12.4%' },
                { label: 'Active users', value: '18,240', delta: '+6.1%' },
                { label: 'Churn', value: '1.8%', delta: '−0.3%' },
              ].map((kpi) => (
                <div key={kpi.label} className="rounded border border-white/[0.07] bg-white/[0.02] p-1.5">
                  <p className="font-mono text-[5px] uppercase tracking-[0.08em] text-white/30">{kpi.label}</p>
                  <p className="mt-0.5 font-display text-[9px] font-semibold tracking-tight text-white">{kpi.value}</p>
                  <p className="mt-0.5 font-mono text-[5px] text-lime">{kpi.delta}</p>
                </div>
              ))}
            </div>

            <div className="flex min-h-0 flex-1 flex-col rounded border border-white/[0.07] bg-white/[0.015] p-2.5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[6.5px] font-medium text-white/70">Net revenue</p>
                  <p className="font-mono text-[5px] text-white/30">Recurring · USD</p>
                </div>
                <div className="flex items-center gap-2 font-mono text-[5px] text-white/35">
                  <span className="flex items-center gap-1">
                    <span className="h-0.5 w-2 rounded bg-lime" />
                    This period
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="h-0.5 w-2 rounded bg-white/25" />
                    Previous
                  </span>
                </div>
              </div>
              <div className="relative mt-1.5 min-h-[42px] flex-1">
                <svg viewBox="0 0 320 90" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
                  <defs>
                    <linearGradient id="auroraFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#D8FF57" stopOpacity="0.24" />
                      <stop offset="100%" stopColor="#D8FF57" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  {[18, 36, 54, 72].map((y) => (
                    <line key={y} x1="0" y1={y} x2="320" y2={y} stroke="white" strokeOpacity="0.05" strokeDasharray="2 4" />
                  ))}
                  <path
                    d="M0 74 C26 72 34 58 58 60 S92 48 116 51 S150 40 174 42 S208 30 232 33 S264 18 288 20 S308 12 320 13 L320 90 L0 90 Z"
                    fill="url(#auroraFill)"
                  />
                  <path
                    d="M0 74 C26 72 34 58 58 60 S92 48 116 51 S150 40 174 42 S208 30 232 33 S264 18 288 20 S308 12 320 13"
                    fill="none"
                    stroke="white"
                    strokeOpacity="0.18"
                    strokeWidth="1"
                    strokeDasharray="3 4"
                  />
                  <path
                    d="M0 80 C26 78 34 66 58 68 S92 56 116 58 S150 48 174 50 S208 38 232 40 S264 26 288 28 S308 20 320 21"
                    fill="none"
                    stroke="#D8FF57"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />
                  <circle cx="240" cy="32" r="2" fill="#D8FF57" />
                </svg>
                <div className="absolute right-[22%] top-[5%] rounded border border-white/10 bg-[#151A20] px-1.5 py-0.5 shadow-lg">
                  <p className="font-mono text-[4.5px] uppercase tracking-wide text-white/30">Nov 22</p>
                  <p className="font-display text-[6px] font-semibold text-white">$38,120</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <span className="absolute right-3 top-3 rounded-full border border-white/15 bg-black/30 px-2 py-0.5 font-mono text-[6px] uppercase tracking-[0.16em] text-white/50">
        Concept
      </span>
    </div>
  )
}

function Atelier() {
  return (
    <div className="grain relative h-full w-full overflow-hidden bg-[#E8E0D3] text-[#2B241C]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_20%,rgba(199,123,78,0.2),transparent_60%)]" />
      <div className="relative flex h-full flex-col px-4 py-3.5 sm:px-6 sm:py-5">
        <div className="flex items-center justify-between border-b border-[#2B241C]/15 pb-2.5">
          <span className="font-serif text-[13px] italic tracking-tight sm:text-[15px]">Atelier Two</span>
          <div className="flex items-center gap-3 font-mono text-[5.5px] uppercase tracking-[0.16em] text-[#2B241C]/50 sm:gap-5 sm:text-[6px]">
            <span className="hidden sm:inline">Collections</span>
            <span className="hidden sm:inline">Journal</span>
            <span>Bag (0)</span>
          </div>
        </div>

        <div className="grid min-h-0 flex-1 gap-4 pt-4 sm:grid-cols-[1.05fr_0.95fr] sm:items-center">
          <div className="flex flex-col justify-center">
            <span className="font-mono text-[5.5px] uppercase tracking-[0.2em] text-[#2B241C]/45">
              SS26 — The considered wardrobe
            </span>
            <p className="mt-2 font-serif text-[clamp(1.5rem,3.4vw,2.5rem)] leading-[0.98] tracking-[-0.02em]">
              Quiet luxury,
              <br />
              made to last.
            </p>
            <p className="mt-2.5 hidden max-w-[200px] text-[7px] leading-[1.7] text-[#2B241C]/55 sm:block">
              Natural fibres, considered silhouettes, and a slower approach to getting dressed.
            </p>
            <div className="mt-3.5 flex items-center gap-2">
              <span className="rounded-full bg-[#2B241C] px-2.5 py-1 font-mono text-[5.5px] uppercase tracking-[0.12em] text-[#F4EDE2]">
                Explore collection
              </span>
              <span className="grid h-5 w-5 place-items-center rounded-full border border-[#2B241C]/20 text-[7px]">↗</span>
            </div>
          </div>

          <div className="relative hidden h-[84%] sm:block">
            <div className="absolute inset-0 overflow-hidden rounded-t-[999px] rounded-b-md bg-gradient-to-br from-[#C99A76] via-[#A06A4A] to-[#55382A]">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(255,241,224,0.5),transparent_45%)]" />
              <div className="absolute bottom-0 left-1/2 h-[62%] w-[36%] -translate-x-1/2 rounded-t-full bg-gradient-to-b from-[#3A2A21]/25 to-[#2B1D16]/60" />
              <div className="absolute bottom-0 left-1/2 h-[34%] w-[52%] -translate-x-1/2 rounded-t-[100px] bg-gradient-to-b from-[#F1E6D8]/80 to-[#D8C3AB]/60" />
              <div className="absolute inset-x-0 bottom-0 h-[30%] bg-gradient-to-t from-[#241A13]/55 to-transparent" />
            </div>
            <span className="absolute -right-1 top-3 font-serif text-[9px] italic text-[#F4EDE2]/90">No. 04</span>
            <span className="absolute bottom-2 left-3 font-mono text-[5px] uppercase tracking-[0.14em] text-[#F4EDE2]/70">
              Silk · Sand
            </span>
          </div>
        </div>

        <div className="mt-3 grid grid-cols-3 gap-2">
          {[
            { name: 'The Cashmere Knit', price: '$240', style: 'from-[#CBB79E] to-[#9A7D63]' },
            { name: 'The Wide Trouser', price: '$190', style: 'from-[#8B765F] to-[#4B3A2D]' },
            { name: 'The Silk Scarf', price: '$120', style: 'from-[#C77B4E] to-[#7C3E26]' },
          ].map((product) => (
            <div key={product.name} className="rounded border border-[#2B241C]/10 bg-[#F2EADE]/60 p-1.5">
              <div className={cn('h-6 rounded-sm bg-gradient-to-br sm:h-8', product.style)} />
              <div className="mt-1.5 flex items-start justify-between gap-1">
                <p className="text-[5.5px] leading-tight text-[#2B241C]/70">{product.name}</p>
                <p className="font-mono text-[5px] text-[#2B241C]/45">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function Northwind() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#07101C]">
      <div className="absolute inset-0 dot-grid-dark opacity-15" />
      <div className="absolute -left-16 top-1/3 h-64 w-64 rounded-full bg-[#6C8CFF]/15 blur-[90px]" />
      <div className="absolute inset-x-[5%] top-[8%] flex h-[104%] flex-col overflow-hidden rounded-t-xl border border-white/10 bg-[#0B1422] shadow-2xl">
        <div className="flex h-7 shrink-0 items-center gap-2 border-b border-white/[0.07] px-3">
          <div className="flex gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
          </div>
          <div className="mx-auto rounded-full border border-white/[0.07] bg-white/[0.03] px-2 py-0.5 font-mono text-[5.5px] tracking-wide text-white/30">
            northwind.io / control-tower
          </div>
        </div>

        <div className="grid min-h-0 flex-1 grid-cols-1 sm:grid-cols-[0.94fr_1.3fr]">
          <div className="hidden flex-col border-r border-white/[0.07] p-2.5 sm:flex">
            <div className="flex items-center justify-between">
              <p className="font-display text-[8px] font-semibold text-white">Control tower</p>
              <span className="flex items-center gap-1 rounded-full bg-lime/10 px-1 py-0.5 font-mono text-[4.5px] uppercase tracking-wide text-lime">
                <span className="h-0.5 w-0.5 rounded-full bg-lime" />
                Live
              </span>
            </div>
            <div className="mt-2 flex items-center gap-1 rounded border border-white/[0.07] bg-white/[0.02] px-1.5 py-1">
              <span className="font-mono text-[5px] text-white/25">⌕</span>
              <span className="font-mono text-[5px] text-white/25">Search shipments</span>
            </div>
            <div className="mt-2 space-y-1.5">
              {[
                { id: 'NW-2041', route: 'SFO → JFK', status: 'On schedule', tone: 'text-lime bg-lime/10' },
                { id: 'NW-2038', route: 'ORD → SEA', status: 'Delayed', tone: 'text-[#FFB27A] bg-[#FFB27A]/10' },
                { id: 'NW-2031', route: 'LAX → DEN', status: 'In transit', tone: 'text-[#9FB6FF] bg-[#6C8CFF]/10' },
                { id: 'NW-2029', route: 'ATL → BOS', status: 'Delivered', tone: 'text-white/50 bg-white/[0.06]' },
              ].map((shipment, index) => (
                <div
                  key={shipment.id}
                  className={cn(
                    'rounded border p-1.5',
                    index === 0 ? 'border-[#6C8CFF]/30 bg-[#6C8CFF]/[0.07]' : 'border-white/[0.06] bg-white/[0.015]',
                  )}
                >
                  <div className="flex items-center justify-between">
                    <p className="font-mono text-[5.5px] text-white/70">{shipment.id}</p>
                    <span className={cn('rounded-full px-1 py-0.5 font-mono text-[4px] uppercase tracking-wide', shipment.tone)}>
                      {shipment.status}
                    </span>
                  </div>
                  <p className="mt-0.5 text-[5px] text-white/30">{shipment.route}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-0 overflow-hidden">
            <div className="absolute inset-0 grid-dark opacity-20" />
            <svg viewBox="0 0 300 220" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
              <path
                d="M38 150 C80 120 94 82 132 96 S190 128 218 92 S252 48 274 54"
                fill="none"
                stroke="#6C8CFF"
                strokeOpacity="0.75"
                strokeWidth="1.3"
                strokeDasharray="4 4"
              />
              <path
                d="M38 150 C80 120 94 82 132 96 S190 128 218 92"
                fill="none"
                stroke="#D8FF57"
                strokeWidth="1.1"
                strokeLinecap="round"
              />
              <circle cx="38" cy="150" r="3" fill="#6C8CFF" />
              <circle cx="132" cy="96" r="2.5" fill="#6C8CFF" />
              <circle cx="218" cy="92" r="2.5" fill="#6C8CFF" />
              <circle cx="218" cy="92" r="8" fill="#D8FF57" fillOpacity="0.12" />
              <circle cx="218" cy="92" r="3" fill="#D8FF57" />
              <circle cx="274" cy="54" r="2.5" fill="#6C8CFF" />
            </svg>
            {[
              { label: 'SFO', top: '66%', left: '10%' },
              { label: 'ORD', top: '39%', left: '42%' },
              { label: 'JFK', top: '35%', left: '73%' },
              { label: 'SEA', top: '12%', left: '88%' },
            ].map((city) => (
              <span
                key={city.label}
                className="absolute font-mono text-[4.5px] tracking-[0.12em] text-white/40"
                style={{ top: city.top, left: city.left }}
              >
                {city.label}
              </span>
            ))}

            <div className="absolute left-2 top-2 hidden items-center gap-1 rounded border border-white/10 bg-[#0D1726]/90 px-1.5 py-1 sm:flex">
              <span className="h-0.5 w-0.5 rounded-full bg-lime" />
              <span className="font-mono text-[4.5px] uppercase tracking-wide text-white/45">42 active loads</span>
            </div>

            <div className="absolute bottom-2 left-2 right-2 rounded-lg border border-white/10 bg-[#0D1726]/90 p-2 backdrop-blur-sm sm:bottom-3 sm:left-3 sm:right-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-mono text-[4.5px] uppercase tracking-[0.12em] text-white/30">NW-2041 · Reefer</p>
                  <p className="mt-0.5 font-display text-[7px] font-semibold text-white">San Francisco → New York</p>
                </div>
                <div className="text-right">
                  <p className="font-mono text-[4px] uppercase tracking-wide text-white/30">ETA</p>
                  <p className="font-mono text-[6px] text-lime">14:32 EST</p>
                </div>
              </div>
              <div className="mt-1.5 h-0.5 w-full overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[68%] rounded-full bg-lime" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <span className="absolute right-3 top-3 rounded-full border border-white/15 bg-black/30 px-2 py-0.5 font-mono text-[6px] uppercase tracking-[0.16em] text-white/50">
        Concept
      </span>
    </div>
  )
}

const visuals = {
  aurora: Aurora,
  atelier: Atelier,
  northwind: Northwind,
}

export default function ProjectVisual({ variant, className }) {
  const Visual = visuals[variant] ?? Aurora
  return (
    <div className={cn('h-full w-full', className)} aria-hidden="true">
      <Visual />
    </div>
  )
}
