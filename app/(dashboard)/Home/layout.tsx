export default function Homelayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
        <main>{children}</main>
    </div>
  );
}
