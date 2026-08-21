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
            <div className="mb-5 flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#e8f5ef] text-lg" aria-hidden="true">✉</span>
              <div>
                <h2 className="font-bold">Entrar com código por e-mail</h2>
                <p className="text-sm text-[#6d837c]">Enviaremos um código de acesso para você.</p>
              </div>
            </div>
            <label className="block text-sm font-semibold" htmlFor="email">Digite seu e-mail</label>
            <input id="email" className="mt-2 w-full rounded-xl border border-[#bbcdc5] px-4 py-3 outline-none transition focus:border-[#5b9e3e] focus:ring-2 focus:ring-[#b9e1a6]" type="email" placeholder="nome@exemplo.com" />
            <button className="mt-3 w-full rounded-xl bg-[#5b9e3e] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#4c8634]">Enviar código de acesso</button>
          </div>

          <div className="border-t border-[#e3ece7] pt-8">
            <div className="mb-5 flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#f6efd9] text-lg" aria-hidden="true">🔑</span>
              <div>
                <h2 className="font-bold">Código de acesso</h2>
                <p className="text-sm text-[#6d837c]">Digite o código recebido no seu e-mail.</p>
              </div>
            </div>
            <label className="block text-sm font-semibold" htmlFor="access-code">Digite o código recebido</label>
            <input id="access-code" className="mt-2 w-full rounded-xl border border-[#bbcdc5] px-4 py-3 tracking-[0.45em] outline-none transition focus:border-[#5b9e3e] focus:ring-2 focus:ring-[#b9e1a6]" inputMode="numeric" maxLength={6} placeholder="000000" />
            <button className="mt-3 w-full rounded-xl border border-[#5b9e3e] px-4 py-3 text-sm font-semibold text-[#477f32] transition hover:bg-[#eff8e9]">Confirmar código</button>
          </div>

          <div className="flex flex-col gap-3 border-t border-[#e3ece7] pt-6 text-center">
            <button className="text-sm font-semibold text-[#477f32] underline underline-offset-4">Retornar para login com senha</button>
            <button className="text-sm text-[#5f746c] transition hover:text-[#173e35]">← Voltar</button>
          </div>
        </form>
      </section>
    </main>
  )
}

export default App
