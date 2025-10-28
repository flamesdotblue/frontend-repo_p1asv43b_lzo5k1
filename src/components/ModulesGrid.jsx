import { Camera, MapPin, Car, Wrench, ClipboardList, GanttChartSquare, Users, DollarSign, Bell } from "lucide-react";

export default function ModulesGrid() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">Core Modules</h2>
          <p className="mt-2 text-slate-600">Purpose-built features for field attendance, fleet control, and enterprise projects.</p>
        </div>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <ModuleCard
          id="attendance"
          icon={Camera}
          title="QR Attendance"
          points={["Geo-location validation", "Fallback manual with approval", "Real-time presence map"]}
          accent="from-indigo-100 to-indigo-50"
        />
        <ModuleCard
          id="vehicles"
          icon={Car}
          title="Vehicle & Assets"
          points={["Fuel & mileage logging", "Service reminders", "PPE & checklist tracking"]}
          accent="from-emerald-100 to-emerald-50"
        />
        <ModuleCard
          icon={GanttChartSquare}
          title="Project Management"
          points={["Gantt timelines", "Budget vs. cost", "Resource allocation"]}
          accent="from-amber-100 to-amber-50"
        />
        <ModuleCard
          icon={ClipboardList}
          title="Workflow Approvals"
          points={["Configurable flows", "Manual attendance, leave", "Digital signatures"]}
          accent="from-sky-100 to-sky-50"
        />
        <ModuleCard
          icon={Users}
          title="Roles & RBAC"
          points={["Super Admin to Temp", "Multi-role login", "Scoped dashboards"]}
          accent="from-fuchsia-100 to-fuchsia-50"
        />
        <ModuleCard
          icon={DollarSign}
          title="Timesheets & Earnings"
          points={["Project hours", "Overtime & allowances", "Personal dashboard"]}
          accent="from-rose-100 to-rose-50"
        />
      </div>

      <div id="workflow" className="mt-10 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-center gap-2">
          <Bell className="h-5 w-5 text-indigo-600" />
          <h3 className="text-lg font-semibold text-slate-900">Notifications & Communication</h3>
        </div>
        <p className="mt-2 text-slate-600 text-sm">
          Keep everyone in sync with in-app alerts, SMS, and email notifications across incidents, approvals, and project milestones.
        </p>
        <div className="mt-4 grid sm:grid-cols-3 gap-4">
          <BadgeItem icon={MapPin} label="Geo-fenced sites" />
          <BadgeItem icon={Wrench} label="Repair tickets" />
          <BadgeItem icon={Camera} label="Incident photos" />
        </div>
      </div>
    </section>
  );
}

function ModuleCard({ id, icon: Icon, title, points, accent }) {
  return (
    <div id={id} className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
      <div className={`h-10 w-10 rounded-lg bg-gradient-to-br ${accent} grid place-items-center border border-slate-200`}>
        <Icon className="h-5 w-5 text-slate-800" />
      </div>
      <h3 className="mt-3 text-lg font-semibold text-slate-900">{title}</h3>
      <ul className="mt-2 space-y-1.5 text-sm text-slate-600">
        {points.map((p, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400" />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function BadgeItem({ icon: Icon, label }) {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 shadow-sm">
      <Icon className="h-4 w-4 text-slate-700" />
      <span className="text-sm text-slate-700">{label}</span>
    </div>
  );
}
