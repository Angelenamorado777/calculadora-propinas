import { useState, type ChangeEvent } from 'react';

function App() {
  const [cuenta, setCuenta] = useState<string>(''); 
  const [propina, setPropina] = useState<number>(0); 
  const [total, setTotal] = useState<number>(0);    
  const [error, setError] = useState<string>('');  

  const calcular = (p: number) => {
    const v = parseFloat(cuenta);
    if (isNaN(v) || v <= 0) { setError("Monto inválido"); return; }
    setError(""); const mP = v * (p / 100); setPropina(mP); setTotal(v + mP);
  };

  return (
  <div className="min-h-screen bg-gray-900 flex items-start justify-start"> 
  <div className="bg-white w-full max-w-sm min-h-screen shadow-2xl flex flex-col p-6">
  <header className="mb-8">
  <h1 className="text-2xl font-black tracking-tighter text-gray-800">CALCULADORA</h1>
 </header>

  {error && <div className="bg-red-500 text-white p-2 mb-4 rounded font-bold text-xs">{error}</div>}
  <div className="mb-6">
  <label className="block text-xs font-black text-gray-400 uppercase mb-1">Cuenta</label>
  <input type="number" value={cuenta} onChange={(e: ChangeEvent<HTMLInputElement>) => setCuenta(e.target.value)} placeholder="0.00" className="w-full text-3xl font-bold border-none focus:ring-0 outline-none p-0 text-gray-800"/>
  <div className="h-1 bg-blue-500 w-12 mt-2"/>
  </div>

  <div className="grid grid-cols-1 gap-2 mb-8">
  {[10, 15, 20].map(n => (
  <button key={n} onClick={() => calcular(n)} className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-800 py-3 px-4 rounded-xl font-black text-left transition-all">
  {n}% Propina
  </button>
  ))}
  </div>

  <div className="mt-auto bg-black rounded-3xl p-6 text-white">
  <div className="flex justify-between items-center mb-2">
   <span className="text-gray-500 font-bold text-xs uppercase">Propina</span>
   <span className="text-xl font-black text-orange-500">${propina.toFixed(2)}</span>
  </div>
  <div className="flex justify-between items-center">
  <span className="text-gray-500 font-bold text-xs uppercase">Total</span>
  <span className="text-4xl font-black text-blue-400">${total.toFixed(2)}</span>
</div>
 </div>
  </div>
   </div>
  );
}

export default App;