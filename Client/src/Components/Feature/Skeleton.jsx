export default function Skeleton() {
  return (
    <>
      <div className="w-72 rounded-lg border bg-white shadow-lg animate-pulse">
        <div className="bg-slate-100 p-20" />
        <div className="p-3">
          <div className="my-4 max-w-[70%] rounded-lg bg-slate-100 p-3" />
          <div className="my-4 max-w-[60%] rounded-lg bg-slate-100 p-3" />
          <div className="my-4 max-w-[48%] rounded-lg bg-slate-100 p-3" />
        </div>
      </div>
    </>
  );
}
