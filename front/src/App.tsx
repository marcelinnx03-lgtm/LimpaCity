function App() {
  return (
    <main className="grid min-h-screen place-items-center bg-[#f5f7f2] p-4 text-[#173e35] sm:p-8">
      <section className="w-full max-w-3xl overflow-hidden rounded-[2rem] bg-white shadow-[0_24px_70px_rgba(22,63,54,0.16)]">
        <header className="flex items-center gap-4 bg-[#99d66f] px-6 py-5 text-[#173e35]">
          <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-white text-3xl shadow-sm" aria-label="Símbolo de reciclagem">♻</div>
          <div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#356b2a]">LimpaCity</p><h1 className="mt-1 text-2xl font-bold leading-tight">Página de agradecimento</h1></div>
        </header>
        <div className="px-6 py-8 sm:px-10">
          <section className="relative min-h-80 overflow-hidden rounded-[2rem] bg-[#1aa7d7] p-7 text-white sm:p-10">
            <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full border-[46px] border-white/20" />
            <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full border-[48px] border-[#7bc45a]/70" />
            <div className="relative flex min-h-64 flex-col justify-end rounded-3xl bg-[#0379b5]/45 p-7 backdrop-blur-[1px]">
              <div className="mb-auto text-7xl" aria-hidden="true">🧹</div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#e0f7ff]">Cidadania em ação</p>
              <h2 className="mt-3 max-w-md text-4xl font-bold leading-tight">Uma cidade limpa beneficia a todos!</h2>
            </div>
          </section>

          <article className="mt-8 rounded-2xl bg-[#f4faef] p-6 text-lg leading-8 text-[#5b9e3e] sm:p-8">
            <h2 className="text-2xl font-bold text-[#477f32]">Muito obrigado!</h2>
            <p className="mt-4">Agradecemos a todos pela confiança e por utilizarem o aplicativo LimpaCity. A participação de vocês é essencial para o nosso crescimento e para que possamos continuar melhorando cada vez mais.</p>
            <p className="mt-4">É graças ao apoio de cada um que a LimpaCity evolui e faz a diferença. Muito obrigado por fazerem parte dessa iniciativa.</p>
          </article>
        </div>
        <footer className="flex flex-col gap-3 border-t border-[#e5eee9] bg-[#fbfdfb] px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-10"><p className="text-sm text-[#526a61]">Obrigado por cuidar da cidade com a gente.</p><button className="rounded-xl bg-[#5b9e3e] px-6 py-3 font-semibold text-white transition hover:bg-[#4c8634]">Concluir</button></footer>
      </section>
    </main>
  )
}

export default App
