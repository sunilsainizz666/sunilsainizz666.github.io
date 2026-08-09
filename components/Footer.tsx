export default function Footer() {
  return (
    <footer className="py-8 px-4 text-center border-t border-white/[0.06]">
      <p className="text-sm text-muted">
        Designed & developed by Sunil Saini © {new Date().getFullYear()}
      </p>
    </footer>
  );
}
