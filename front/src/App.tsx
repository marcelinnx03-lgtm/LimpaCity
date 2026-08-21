function App() {
  return (
    <main className="grid min-h-screen place-items-center bg-[#f5f7f2] p-4 text-[#173e35] sm:p-8">
      <section className="w-full max-w-4xl overflow-hidden rounded-[2rem] bg-white shadow-[0_24px_70px_rgba(22,63,54,0.16)] md:grid md:grid-cols-[1fr_0.9fr]">
        <div className="p-6 sm:p-10">
          <div className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#67a347] text-2xl text-white">♻</div>
            <span className="font-bold tracking-tight">LimpaCity</span>
          </div>

          <div className="mt-9">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#528b38]">Boas-vindas</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Criar conta ou login</h1>
            <p className="mt-3 text-[#647b72]">Escolha a forma mais simples para acessar a comunidade LimpaCity.</p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <button className="rounded-xl bg-[#5b9e3e] px-4 py-3 font-semibold text-white transition hover:bg-[#4c8634]">Criar conta</button>
            <button className="flex items-center justify-center gap-2 rounded-xl border border-[#cbd9d3] px-4 py-3 font-semibold transition hover:bg-[#f4f8f6]"><span className="font-bold text-[#4285f4]">G</span> Entrar com Google</button>
            <button className="flex items-center justify-center gap-2 rounded-xl border border-[#cbd9d3] px-4 py-3 font-semibold transition hover:bg-[#f4f8f6]"><span className="font-bold text-[#1877f2]">f</span> Entrar com Facebook</button>
            <button className="flex items-center justify-center gap-2 rounded-xl border border-[#cbd9d3] px-4 py-3 font-semibold transition hover:bg-[#f4f8f6]"><span aria-hidden="true">✉</span> Entrar com e-mail</button>
          </div>

          <button className="mt-5 w-full rounded-xl bg-[#e8f5ef] px-4 py-3 text-sm font-semibold text-[#3e7831] transition hover:bg-[#d9eee1]">Entrar de outra forma</button>

          <button className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl border border-[#b8ccc3] px-4 py-3 font-semibold transition hover:bg-[#f4f8f6]"><span aria-hidden="true">▦</span> Registrar-se como empresa</button>

          <p className="mt-7 text-center text-xs leading-5 text-[#647b72]">Ao continuar, você concorda com os <button className="font-semibold text-[#4d9236] underline underline-offset-2">Termos de Uso</button> e a <button className="font-semibold text-[#4d9236] underline underline-offset-2">Política de Privacidade</button>.</p>
        </div>

        <aside className="relative hidden min-h-full overflow-hidden bg-[#bfe9f4] p-10 md:flex md:flex-col md:justify-end">
          <div className="absolute -left-16 -top-12 h-60 w-60 rounded-full border-[36px] border-white/35" />
          <div className="absolute -bottom-20 -right-16 h-72 w-72 rounded-full border-[42px] border-[#90cb5d]/80" />
          <div className="relative rounded-[2rem] bg-white/35 p-7 backdrop-blur-[1px]">
            <div className="mb-24 text-8xl" aria-hidden="true">🌍</div>
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#287263]">Reciclar transforma</p>
            <h2 className="mt-2 text-3xl font-bold leading-tight">Sua ação ajuda a construir uma cidade mais limpa.</h2>
          </div>
        </aside>
      </section>
    </main>
  )
}

export default App
