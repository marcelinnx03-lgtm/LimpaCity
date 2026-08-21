import { useState } from 'react'

const reportTypes = [
  'Lixo acumulado em via pública',
  'Descarte irregular de entulho',
  'Problemas ambientais (poluição, queimadas etc.)',
  'Falta de coleta de lixo',
  'Foco de pragas (ratos, insetos etc.)',
  'Outros',
]

function App() {
  const [selectedType, setSelectedType] = useState(reportTypes[0])

  return (
    <main className="grid min-h-screen place-items-center bg-[#f5f7f2] p-4 text-[#173e35] sm:p-8">
      <section className="w-full max-w-2xl overflow-hidden rounded-[2rem] bg-white shadow-[0_24px_70px_rgba(22,63,54,0.16)]">
        <header className="flex items-center gap-4 bg-[#67a347] px-6 py-5 text-white">
          <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-white text-3xl shadow-sm" aria-label="Símbolo de reciclagem">♻</div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#e5f6d8]">LimpaCity</p>
            <h1 className="mt-1 text-2xl font-bold leading-tight">Denuncie problemas da sua cidade</h1>
          </div>
        </header>

        <div className="px-6 py-8 sm:px-10">
          <article>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#528b38]">Participação cidadã</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">Ajude a manter sua cidade limpa e organizada.</h2>
            <p className="mt-4 leading-7 text-[#526a61]">Encontrou lixo irregular, descarte inadequado ou outro problema urbano? Faça sua denúncia de forma rápida e contribua para melhorar o ambiente ao seu redor.</p>
          </article>

          <div className="mt-8 rounded-2xl bg-[#e8f5ef] p-5 sm:p-6">
            <h3 className="text-xl font-bold">Tipos de denúncia</h3>
            <p className="mt-1 text-sm text-[#5f746c]">Selecione o tipo de problema encontrado.</p>
            <fieldset className="mt-5 grid gap-3">
              <legend className="sr-only">Tipo de denúncia</legend>
              {reportTypes.map((reportType) => (
                <label key={reportType} className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 transition ${selectedType === reportType ? 'border-[#5b9e3e] bg-white shadow-sm' : 'border-transparent hover:bg-white/70'}`}>
                  <input checked={selectedType === reportType} className="h-4 w-4 accent-[#5b9e3e]" name="report-type" onChange={() => setSelectedType(reportType)} type="radio" value={reportType} />
                  <span className="text-sm font-semibold text-[#3f6256]">{reportType}{reportType === 'Outros' ? ' ⚠️' : ''}</span>
                </label>
              ))}
            </fieldset>
          </div>
        </div>

        <footer className="flex justify-end border-t border-[#e5eee9] bg-[#fbfdfb] px-6 py-5 sm:px-10">
          <button className="rounded-xl bg-[#5b9e3e] px-7 py-3 font-semibold text-white transition hover:bg-[#4c8634]">Próximo →</button>
        </footer>
      </section>
    </main>
  )
}

export default App
