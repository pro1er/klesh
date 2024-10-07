export default function Homelayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="min-[1920px]:px-[200px] min-[2400px]:px-[400px]  min-[3000px]:px-[700px]">
        <main>{children}</main>
      </div>
    </div>
  );
}
