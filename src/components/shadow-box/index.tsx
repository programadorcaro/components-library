export default function ShadowBox({ children }: React.PropsWithChildren) {
  return (
    <div
      className="rounded-lg p-8 bg-white"
      style={{
        boxShadow: '14px 14px #d2effd',
      }}
    >
      {children}
    </div>
  );
}
