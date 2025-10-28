import { Smartphone, Gauge, Lock, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-emerald-50 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white px-3 py-1 text-xs text-indigo-700 shadow-sm">
              <Lock className="h-3.5 w-3.5" />
              GDPR-ready • RBAC • Encrypted
            </div>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
              QR-based Attendance, Vehicle, and Project Management
            </h1>
            <p className="mt-4 text-slate-600 text-base sm:text-lg">
              A unified web and mobile platform for real-time attendance with geo-validation, fleet & asset tracking, and enterprise-grade project control — optimized for speed, security, and field operations.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#projects" className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
                Explore Modules
              </a>
              <a href="#workflow" className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50">
                See Workflows
              </a>
            </div>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
              <FeatureStat icon={Gauge} label="<2s" hint="Performance" />
              <FeatureStat icon={Smartphone} label="iOS & Android" hint="Native apps" />
              <FeatureStat icon={MapPin} label="Geo-validated" hint="Attendance" />
              <FeatureStat icon={Lock} label="RBAC" hint="Access control" />
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-xl border border-slate-200 bg-white/70 shadow-sm p-4">
              <div className="h-full w-full rounded-lg bg-gradient-to-br from-indigo-100 via-white to-emerald-100 grid place-items-center">
                <div className="text-center">
                  <p className="text-sm uppercase tracking-wider text-slate-500">Real-time Overview</p>
                  <h3 className="mt-1 text-2xl font-semibold text-slate-900">Operations Control</h3>
                  <div className="mt-4 grid grid-cols-3 gap-3">
                    <KPI title="On-site" value="128" tone="text-emerald-700 bg-emerald-50" />
                    <KPI title="Vehicles Active" value="42" tone="text-indigo-700 bg-indigo-50" />
                    <KPI title="Open Tickets" value="9" tone="text-amber-700 bg-amber-50" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureStat({ icon: Icon, label, hint }) {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 shadow-sm">
      <Icon className="h-4 w-4 text-slate-700" />
      <div>
        <p className="font-medium text-slate-900 leading-none">{label}</p>
        <p className="text-xs text-slate-500 leading-none mt-1">{hint}</p>
      </div>
    </div>
  );
}

function KPI({ title, value, tone }) {
  return (
    <div className={`rounded-md px-3 py-4 text-center ${tone}`}>
      <p className="text-xs font-medium tracking-wide">{title}</p>
      <p className="mt-1 text-xl font-bold">{value}</p>
    </div>
  );
}
