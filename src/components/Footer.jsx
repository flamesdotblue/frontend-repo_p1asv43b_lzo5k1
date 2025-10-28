export default function Footer() {
  return (
    <footer className="mt-12 border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 grid sm:grid-cols-2 gap-4 items-center">
        <p className="text-sm text-slate-600">
          © {new Date().getFullYear()} NovaOps Suite. Built for secure, high-performance field operations.
        </p>
        <div className="flex sm:justify-end gap-4 text-sm text-slate-600">
          <a href="#" className="hover:text-slate-900">Privacy</a>
          <a href="#" className="hover:text-slate-900">Security</a>
          <a href="#" className="hover:text-slate-900">Status</a>
        </div>
      </div>
    </footer>
  );
}
