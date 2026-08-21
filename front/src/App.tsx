function App() {
  return (
    <main className="grid min-h-screen place-items-center bg-[#f5f7f2] p-4 text-[#173e35] sm:p-8">
      <section className="w-full max-w-md overflow-hidden rounded-[2rem] bg-white shadow-[0_24px_70px_rgba(22,63,54,0.16)]">
        <header className="flex items-center gap-4 bg-[#67a347] px-6 py-5 text-white">
          <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-white text-3xl shadow-sm" aria-label="Símbolo de reciclagem">♻</div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#e5f6d8]">LimpaCity</p>
            <h1 className="mt-1 text-2xl font-bold leading-tight">Entrar de outra forma</h1>
          </div>
        </header>

        <form className="space-y-8 px-6 py-8 sm:px-8">
          <div>
            <p className="text-base leading-6">Acesse sua conta utilizando uma das opções abaixo.</p>
            <h2 className="mt-7 text-lg font-bold">Métodos de acesso <span aria-hidden="true">🚀</span></h2>
            <p className="mt-3 text-sm font-semibold text-[#5b9e3e]">Login rápido <span aria-hidden="true">🔗</span></p>
            <div className="mt-3 grid gap-2">
              <button className="flex items-center gap-3 rounded-xl border border-[#d6e3dd] px-4 py-3 text-left font-semibold transition hover:bg-[#f4f8f6]"><span className="grid h-6 w-6 place-items-center rounded-full bg-white text-[#4285f4] shadow-sm">G</span> Continuar com Google</button>
              <button className="flex items-center gap-3 rounded-xl border border-[#d6e3dd] px-4 py-3 text-left font-semibold transition hover:bg-[#f4f8f6]"><span className="grid h-6 w-6 place-items-center rounded-full bg-[#1877f2] text-sm text-white">f</span> Continuar com Facebook</button>
              <button className="flex items-center gap-3 rounded-xl border border-[#d6e3dd] px-4 py-3 text-left font-semibold transition hover:bg-[#f4f8f6]"><span className="grid h-6 w-6 place-items-center rounded-full bg-slate-900 text-xs text-white">●</span> Continuar com Apple</button>
            </div>
          </div>

          <div className="border-t border-[#e3ece7] pt-8">
            <div className="mb-5 flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#e8f5ef] text-lg" aria-hidden="true">☎</span>
              <div>
                <h2 className="font-bold">Entrar com número de telefone</h2>
                <p className="text-sm text-[#6d837c]">Vamos enviar um código via SMS.</p>
              </div>
            </div>
            <label className="block text-sm font-semibold" htmlFor="phone">Digite seu número</label>
            <div className="mt-2 flex rounded-xl border border-[#bbcdc5] focus-within:border-[#5b9e3e] focus-within:ring-2 focus-within:ring-[#b9e1a6]">
              <span className="border-r border-[#d9e4de] px-3 py-3 text-sm text-[#5b9e3e]">+55</span>
              <input id="phone" className="w-full rounded-r-xl px-4 py-3 outline-none" inputMode="tel" placeholder="(00) 00000-0000" type="tel" />
            </div>
            <button className="mt-3 w-full rounded-xl bg-[#5b9e3e] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#4c8634]">Receber código via SMS</button>
          </div>

          <div className="flex gap-3 border-t border-[#e3ece7] pt-6">
            <button className="flex-1 rounded-xl border border-[#b8ccc3] px-4 py-3 font-semibold transition hover:bg-[#f4f8f6]">Voltar</button>
            <button className="flex-1 rounded-xl bg-[#5b9e3e] px-4 py-3 font-semibold text-white transition hover:bg-[#4c8634]">Próximo →</button>
          </div>
        </form>
      </section>
    </main>
  )
}

export default App
