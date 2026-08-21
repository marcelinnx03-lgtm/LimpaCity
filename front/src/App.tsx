function App() {
  return (
    <main className="grid min-h-screen place-items-center bg-[#f5f7f2] p-4 text-[#173e35] sm:p-8">
      <section className="w-full max-w-4xl overflow-hidden rounded-[2rem] bg-white shadow-[0_24px_70px_rgba(22,63,54,0.16)]">
        <header className="flex items-center gap-4 bg-[#67a347] px-6 py-5 text-white">
          <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-white text-3xl shadow-sm" aria-label="Símbolo de reciclagem">♻</div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#e5f6d8]">LimpaCity</p>
            <h1 className="mt-1 text-2xl font-bold leading-tight">Quem somos</h1>
          </div>
        </header>

        <div className="grid gap-8 px-6 py-8 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <article>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#528b38]">Nossa história</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">Uma cidade mais limpa começa com informação acessível.</h2>
            <p className="mt-5 leading-7 text-[#526a61]">A LimpaCity nasceu quando seus responsáveis identificaram a dificuldade de encontrar informações claras sobre limpeza urbana, descarte correto e reciclagem.</p>
            <p className="mt-4 leading-7 text-[#526a61]">O grupo levantou necessidades, consultou pessoas e definiu uma estrutura simples para aproximar cidadãos de soluções urbanas mais sustentáveis.</p>

            <div className="mt-7 rounded-2xl bg-[#e8f5ef] p-5">
              <h3 className="font-bold">Equipe responsável</h3>
              <ul className="mt-3 grid gap-2 text-sm text-[#3f6256] sm:grid-cols-2">
                <li>Marcelo — desenvolvimento</li>
                <li>Maria Fernanda — conteúdo</li>
                <li>Marcela — estrutura</li>
                <li>Lívia — design e usabilidade</li>
              </ul>
            </div>
          </article>

          <aside className="relative min-h-96 overflow-hidden rounded-[2rem] bg-[#d6b169] p-7 text-[#183d35]">
            <div className="absolute -right-12 -top-10 h-52 w-52 rounded-full bg-[#f7e8be]/70" />
            <div className="absolute -bottom-14 -left-12 h-48 w-48 rounded-full border-[28px] border-[#86c86a]/80" />
            <div className="relative flex min-h-80 flex-col justify-between rounded-3xl bg-white/35 p-6 backdrop-blur-[1px]">
              <div className="text-6xl" aria-hidden="true">🏙️</div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.15em]">Soluções urbanas e cidadania ativa</p>
                <p className="mt-3 text-2xl font-bold leading-tight">Informação, participação e cuidado com o lugar onde vivemos.</p>
              </div>
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
