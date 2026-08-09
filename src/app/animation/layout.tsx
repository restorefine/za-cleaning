export default function AnimationLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 9999, background: "white" }}>
      {children}
    </div>
  );
}
