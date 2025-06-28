export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen text-primary">
      <div className="text-center space-y-4">
        <h1 className="text-6xl font-bold">404</h1>
        <p className="text-xl font-semibold">Sahifa topilmadi</p>
        <p className="text-sm opacity-75">
          Kechirasiz, siz qidirayotgan sahifa mavjud emas yoki
          ko&apos;chirilgan.
        </p>
      </div>
    </div>
  );
}