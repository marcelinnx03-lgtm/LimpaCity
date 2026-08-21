function App() {
  return (
    <main className="grid min-h-screen place-items-center bg-[#f5f7f2] p-4 text-[#173e35] sm:p-8">
      <section className="w-full max-w-3xl overflow-hidden rounded-[2rem] bg-white shadow-[0_24px_70px_rgba(22,63,54,0.16)]">
        <header className="flex items-center gap-4 bg-[#67a347] px-6 py-5 text-white">
          <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-white text-3xl shadow-sm" aria-label="Símbolo de reciclagem">♻</div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#e5f6d8]">LimpaCity</p>
            <h1 className="mt-1 text-2xl font-bold leading-tight">Local de origem</h1>
          </div>
        </header>

        <div className="grid gap-8 px-6 py-8 sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <article>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#528b38]">Brasil · Minas Gerais</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">Nascida em Santa Rita do Sapucaí.</h2>
            <p className="mt-5 leading-7 text-[#526a61]">A LimpaCity é uma plataforma digital desenvolvida no Brasil para aproximar pessoas de informações e serviços de limpeza urbana.</p>
            <p className="mt-4 leading-7 text-[#526a61]">Sua atuação é online e pode ser acessada de qualquer lugar. Sua origem está em Santa Rita do Sapucaí, um polo de inovação tecnológica no sul de Minas Gerais.</p>
            <div className="mt-7 flex items-center gap-3 rounded-2xl bg-[#e8f5ef] p-4">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-white text-xl">📍</span>
              <p className="text-sm font-semibold text-[#3f6256]">Conexões locais para um impacto que pode chegar mais longe.</p>
            </div>
          </article>

          <aside className="relative min-h-96 overflow-hidden rounded-[2rem] bg-[#dce1df] p-5" aria-label="Mapa ilustrativo de Santa Rita do Sapucaí">
            <div className="absolute -left-10 top-20 h-10 w-[130%] rotate-[-26deg] bg-white/85" />
            <div className="absolute -left-12 top-48 h-9 w-[130%] rotate-[31deg] bg-white/85" />
            <div className="absolute left-28 -top-12 h-[130%] w-8 rotate-[20deg] bg-white/85" />
            <div className="absolute right-24 -top-10 h-[130%] w-7 rotate-[-18deg] bg-white/85" />
            <div className="absolute bottom-24 left-6 h-7 w-[115%] rotate-[-52deg] bg-white/85" />
            <div className="absolute left-[43%] top-[47%] grid h-16 w-16 place-items-center rounded-full bg-[#173e35] text-3xl text-white shadow-xl">●</div>
            <div className="absolute bottom-6 left-6 rounded-xl bg-white/90 px-4 py-3 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#528b38]">Local de origem</p>
              <p className="mt-1 font-bold">Santa Rita do Sapucaí, MG</p>
            </div>
          </aside>
        </div>

        <footer className="flex justify-end border-t border-[#e5eee9] bg-[#fbfdfb] px-6 py-5 sm:px-10">
          <button className="rounded-xl border border-[#b8ccc3] px-6 py-3 font-semibold transition hover:bg-[#f4f8f6]">← Voltar</button>
        </footer>
      </section>
    </main>
  )
}

export default App
