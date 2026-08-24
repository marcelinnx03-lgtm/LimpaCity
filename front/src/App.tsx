const materials = ['PET', 'PEAD', 'PVC', 'PEBD', 'PP', 'PS', 'Outros']

function App() {
  return (
    <main className="grid min-h-screen place-items-center bg-[#f5f7f2] p-4 text-[#173e35] sm:p-8">
      <section className="w-full max-w-4xl overflow-hidden rounded-[2rem] bg-white shadow-[0_24px_70px_rgba(22,63,54,0.16)]">
        <header className="flex items-center gap-4 bg-[#99d66f] px-6 py-5 text-[#173e35]">
          <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-white text-3xl shadow-sm" aria-label="Símbolo de reciclagem">♻</div>
          <div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#356b2a]">LimpaCity</p><h1 className="mt-1 text-2xl font-bold leading-tight">Central de pontuação</h1></div>
        </header>
        <div className="px-6 py-8 sm:px-10">
          <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-[#d7e5dc] bg-[#fbfdfb] p-4"><button className="rounded-xl bg-[#5b9e3e] px-5 py-2 text-sm font-semibold text-white">Histórico de pontos</button><span className="ml-auto text-xl">☎</span><a className="font-semibold text-[#5b9e3e] underline underline-offset-4" href="tel:+5535999004588">(35) 99900-4588</a></div>
          <div className="mt-7 grid gap-4 sm:grid-cols-2"><article className="rounded-3xl bg-[#eae2f4] p-6"><p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#765f9d]">Seu impacto</p><p className="mt-4 text-5xl font-bold">320</p><p className="mt-2 font-semibold">pontos acumulados</p></article><article className="rounded-3xl bg-[#e0f1eb] p-6"><p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#287263]">Sua contribuição</p><p className="mt-4 text-5xl font-bold">18</p><p className="mt-2 font-semibold">objetos reciclados</p></article></div>
          <section className="mt-7 overflow-hidden rounded-2xl border border-[#d1e1d6]"><div className="grid grid-cols-3 bg-[#7dbc58] text-center text-sm font-semibold text-white sm:grid-cols-7">{materials.map((material, index) => <div className="border-r border-white/20 px-2 py-4 last:border-r-0" key={material}>♻<br />{index + 1} · {material}</div>)}</div><div className="grid grid-cols-3 bg-[#157845] text-center text-2xl text-white sm:grid-cols-7">{['♳', '▱', '▯', '▥', '⌁', '▱', '▰'].map((icon, index) => <div className="border-r border-white/15 px-2 py-5 last:border-r-0" key={`${icon}-${index}`}>{icon}</div>)}</div></section>
          <article className="mt-7 rounded-2xl bg-[#f4faef] p-6 leading-7 text-[#477f32]"><h2 className="text-xl font-bold">Cada atitude conta.</h2><p className="mt-3">Gostaríamos de agradecer a todos pela iniciativa de coletar objetos recicláveis. Essa atitude demonstra consciência, responsabilidade e cuidado com o meio ambiente. Pequenas ações como essa fazem uma grande diferença para o nosso planeta, ajudando a reduzir o lixo e a preservar recursos naturais.</p><p className="mt-3 font-semibold">Parabéns a todos os envolvidos por essa atitude tão positiva e inspiradora!</p></article>
        </div>
        <footer className="flex justify-end border-t border-[#e5eee9] bg-[#fbfdfb] px-6 py-5 sm:px-10"><button className="rounded-xl border border-[#b8ccc3] px-6 py-3 font-semibold transition hover:bg-[#f4f8f6]">← Voltar</button></footer>
      </section>
    </main>
  )
}

export default App
