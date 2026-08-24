function App() {
  return (
    <main className="grid min-h-screen place-items-center bg-[#f5f7f2] p-4 text-[#173e35] sm:p-8">
      <section className="w-full max-w-3xl overflow-hidden rounded-[2rem] bg-white shadow-[0_24px_70px_rgba(22,63,54,0.16)]">
        <header className="flex items-center gap-4 bg-[#67a347] px-6 py-5 text-white">
          <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-white text-3xl shadow-sm" aria-label="Símbolo de reciclagem">♻</div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#e5f6d8]">LimpaCity</p>
            <h1 className="mt-1 text-2xl font-bold leading-tight">Observação</h1>
          </div>
        </header>

        <div className="grid gap-8 px-6 py-8 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <article>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#528b38]">Depois do envio</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">Sua denúncia pode ajudar a transformar a cidade.</h2>
            <p className="mt-5 leading-7 text-[#526a61]">Após o envio, você poderá acompanhar as próximas etapas, sempre que houver informações disponíveis.</p>
            <ul className="mt-6 grid gap-3">
              <li className="flex gap-3 rounded-xl bg-[#e8f5ef] p-4"><span aria-hidden="true">✉️</span><span><strong>Receber atualizações</strong><br /><small className="text-[#526a61]">Por e-mail, se ele foi informado.</small></span></li>
              <li className="flex gap-3 rounded-xl bg-[#e8f5ef] p-4"><span aria-hidden="true">🔎</span><span><strong>Acompanhar o status</strong><br /><small className="text-[#526a61]">Veja o andamento da sua denúncia.</small></span></li>
              <li className="flex gap-3 rounded-xl bg-[#e8f5ef] p-4"><span aria-hidden="true">📍</span><span><strong>Ver outros relatos</strong><br /><small className="text-[#526a61]">Consulte denúncias próximas no mapa.</small></span></li>
            </ul>
          </article>

          <aside className="relative min-h-80 overflow-hidden rounded-[2rem] bg-[#e0ede2] p-6">
            <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full border-[28px] border-[#75b65a]/50" />
            <div className="relative flex min-h-68 flex-col justify-between rounded-3xl bg-white/60 p-6">
              <div className="grid h-16 w-16 place-items-center rounded-2xl bg-[#67a347] text-4xl text-white shadow-sm" aria-hidden="true">✓</div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#477f32]">Participação consciente</p>
                <p className="mt-3 text-2xl font-bold leading-tight">Juntos por uma cidade melhor. 💛</p>
              </div>
            </div>
          </aside>
        </div>

        <footer className="flex flex-col gap-4 border-t border-[#e5eee9] bg-[#fbfdfb] px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-10">
          <p className="max-w-xl text-sm leading-5 text-[#526a61]">Cada denúncia faz diferença. Ao participar, você contribui para uma cidade mais limpa, segura e sustentável.</p>
          <button className="rounded-xl bg-[#5b9e3e] px-7 py-3 font-semibold text-white transition hover:bg-[#4c8634]">Ok</button>
        </footer>

      </section>
    </main>
  )
}

export default App
