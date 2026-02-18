import { useState, type ChangeEvent } from 'react';

function App() {
  const [cuenta, setCuenta] = useState<string>(''); 
  const [propina, setPropina] = useState<number>(0); 
  const [total, setTotal] = useState<number>(0);    
  const [error, setError] = useState<string>('');  

  const calcular = (porcentaje: number) => {
    const valorCuenta = parseFloat(cuenta);

    if (isNaN(valorCuenta) || valorCuenta <= 0) {
      setError("Por favor ingresa un monto válido");
      setPropina(0);
      setTotal(0);
      return; 
    }

    setError(""); 
    const montoPropina = valorCuenta * (porcentaje / 100);
    const montoTotal = valorCuenta + montoPropina;

    setPropina(montoPropina);
    setTotal(montoTotal);
  };

  const manejarCambioInput = (e: ChangeEvent<HTMLInputElement>) => {
    setCuenta(e.target.value);
  };

  return (
  <div className="flex items-center justify-center p-6">
  <div className="bg-white/95 backdrop-blur-sm p-6 w-full max-w-md transform transition-all hover:scale-[1.01]">
        
  <header className="text-center mb-8">
  <h1 className="text-3xl font-extrabold bg-clip-text text-black">Calculadora</h1>
  </header>

   {error && (
     <div className="flex items-center bg-red-50 border-l-4 border-red-500 text-red-700 p-3 rounded mb-6 animate-pulse">
     <span className="text-sm font-medium">{error}</span>
     </div>
        )}
    <div className="mb-8">
    <label className="block mb-2 text-sm font-bold text-gray-700 uppercase tracking-wider">
    Monto de la cuenta
   </label>
   <div className="relative">
   <input 
   type="number" 
   value={cuenta}
   onChange={manejarCambioInput}
   placeholder="0.00"
   className="w-full pl-8 pr-4 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl purple-400 focus:ring-0 outline-none transition-all text-lg font-medium"
            />
          </div>
        </div>
        <div className="mb-10">
          <p className="mb-3 text-sm font-bold text-gray-700 text-center">
            Selecciona el procentaje de propina
          </p>
          <div className="grid grid-cols-3 gap-3">
            {[10, 15, 20].map((num) => (
              <button 
                key={num}
                onClick={() => calcular(num)}
                className="py-4 rounded-xl font-black text-gray-700"
              >
                <span className="relative z-10">{num}%</span>
                <div className="text-co" />
              </button>
            ))}
          </div>
        </div>

        <div className="bg-black p-7 text-black shadow-inner">
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-400 font-medium">Propina</span>
            <span className="text-xl font-bold text-blue-400">${propina.toFixed(2)}</span>
          </div>
          <div className=" bg-gray-700 mb-4" />
          <div className="flex justify-between items-end">
            <span className="text-gray-400 ">Total a pagar</span>
            <span className="text-4xl font-black text-blue-50">
              ${total.toFixed(2)}
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;