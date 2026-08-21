const quickLinks = [
  { title: 'Denúncias', icon: '⚑', tone: 'bg-[#f2eafa]' },
  { title: 'Como tudo começou', icon: '◌', tone: 'bg-[#f5efd9]' },
  { title: 'Localização', icon: '⌖', tone: 'bg-[#e0f1eb]' },
]

function App() {
  return (
    <main className="min-h-screen bg-[#f5f7f2] px-4 py-8 text-[#163f36] sm:px-8">
      <section className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-white shadow-[0_24px_70px_rgba(22,63,54,0.14)]">
        <header className="relative overflow-hidden bg-[#99d66f] px-6 py-8 sm:px-10">
          <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full border-[24px] border-white/20" />
          <div className="relative flex items-center justify-between gap-5">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#356b2a]">LimpaCity</p>
              <h1 className="mt-1 text-3xl font-bold sm:text-4xl">Seja bem-vindo</h1>
            </div>
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white/90 text-3xl shadow-sm" aria-label="Símbolo de reciclagem">♻</div>
          </div>
        </header>

        <div className="grid gap-8 px-6 py-8 sm:px-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-[#2c7668] text-xl text-white">♻</div>
              <button className="rounded-full border border-[#2c7668] px-5 py-2 text-sm font-semibold transition hover:bg-[#e8f5ef]">Login</button>
              <button className="rounded-full bg-[#5b9e3e] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#4c8634]">Criar conta</button>
              <div className="ml-auto flex gap-2" aria-label="Redes sociais">
                <button className="grid h-9 w-9 place-items-center rounded-full border border-[#d6e3dd] font-bold hover:bg-[#f2f7f4]" aria-label="Instagram">◎</button>
                <button className="grid h-9 w-9 place-items-center rounded-full border border-[#d6e3dd] font-bold hover:bg-[#f2f7f4]" aria-label="Facebook">f</button>
                <button className="grid h-9 w-9 place-items-center rounded-full border border-[#d6e3dd] text-sm hover:bg-[#f2f7f4]" aria-label="YouTube">▶</button>
              </div>
            </div>

            <label className="mt-8 flex items-center gap-3 rounded-full border border-[#c9d8d1] px-4 py-3 text-[#6d837c] shadow-sm focus-within:ring-2 focus-within:ring-[#75b65a]">
              <span aria-hidden="true">⌕</span>
              <input className="w-full bg-transparent text-sm outline-none placeholder:text-[#94a49e]" placeholder="Busque por um assunto" type="search" />
            </label>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {quickLinks.map((link) => (
                <button key={link.title} className={`${link.tone} min-h-36 rounded-3xl p-5 text-left transition hover:-translate-y-1 hover:shadow-lg`}>
                  <span className="grid h-10 w-10 place-items-center rounded-2xl bg-white/70 text-xl">{link.icon}</span>
                  <span className="mt-5 block text-base font-bold leading-5">{link.title}</span>
                </button>
              ))}
            </div>
          </div>

          <aside className="relative min-h-80 overflow-hidden rounded-[2rem] bg-[#bfe9f4] p-7">
            <div className="absolute -left-12 -top-10 h-44 w-44 rounded-full bg-white/35" />
            <div className="absolute -bottom-16 -right-8 h-52 w-52 rounded-full border-[30px] border-[#90cb5d]/70" />
            <div className="relative flex min-h-64 flex-col justify-end rounded-3xl bg-white/30 p-6 backdrop-blur-[1px]">
              <div className="mb-auto text-7xl leading-none" aria-hidden="true">🌱</div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#287263]">Juntos pelo planeta</p>
              <h2 className="mt-2 text-3xl font-bold leading-tight">Pequenas ações geram grandes mudanças.</h2>
              <p className="mt-3 max-w-sm text-sm leading-6 text-[#28594e]">Encontre informações, pontos de apoio e caminhos para reciclar melhor.</p>
            </div>
          </aside>
        </div>

        <footer className="flex flex-col gap-5 border-t border-[#e5eee9] bg-[#fbfdfb] px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-10">
          <div>
            <p className="font-semibold">Como você avalia esta experiência?</p>
            <div className="mt-2 flex gap-2 text-2xl text-[#765f9d]" aria-label="Avaliação de cinco estrelas">★★★★★</div>
          </div>
          <button className="rounded-full bg-[#5b9e3e] px-8 py-3 font-semibold text-white shadow-sm transition hover:bg-[#4c8634]">Próximo →</button>
        </footer>
      </section>
    </main>
  )
}

export default App
