import { useState } from 'react'

function App() {
  const [files, setFiles] = useState<File[]>([])

  return (
    <main className="grid min-h-screen place-items-center bg-[#f5f7f2] p-4 text-[#173e35] sm:p-8">
      <section className="w-full max-w-2xl overflow-hidden rounded-[2rem] bg-white shadow-[0_24px_70px_rgba(22,63,54,0.16)]">
        <header className="flex items-center gap-4 bg-[#67a347] px-6 py-5 text-white">
          <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-white text-3xl shadow-sm" aria-label="Símbolo de reciclagem">♻</div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#e5f6d8]">LimpaCity</p>
            <h1 className="mt-1 text-2xl font-bold leading-tight">Formulário de denúncia</h1>
          </div>
        </header>

        <form className="space-y-5 px-6 py-8 sm:px-10" onSubmit={(event) => event.preventDefault()}>
          <p className="rounded-xl bg-[#e8f5ef] px-4 py-3 text-sm leading-5 text-[#3f6256]">Você pode fazer uma denúncia anônima. Informe apenas o que se sentir confortável em compartilhar.</p>

          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-sm font-semibold" htmlFor="name">Nome <span className="font-normal text-[#71847d]">(opcional)</span>
              <input id="name" className="mt-2 w-full rounded-xl border border-[#bbcdc5] px-4 py-3 font-normal outline-none transition focus:border-[#5b9e3e] focus:ring-2 focus:ring-[#b9e1a6]" placeholder="Como podemos chamar você?" type="text" />
            </label>
            <label className="block text-sm font-semibold" htmlFor="email">E-mail <span className="font-normal text-[#71847d]">(opcional)</span>
              <input id="email" className="mt-2 w-full rounded-xl border border-[#bbcdc5] px-4 py-3 font-normal outline-none transition focus:border-[#5b9e3e] focus:ring-2 focus:ring-[#b9e1a6]" placeholder="nome@exemplo.com" type="email" />
            </label>
          </div>

          <label className="block text-sm font-semibold" htmlFor="description">Descrição do problema
            <textarea id="description" className="mt-2 min-h-32 w-full resize-y rounded-xl border border-[#bbcdc5] px-4 py-3 font-normal outline-none transition focus:border-[#5b9e3e] focus:ring-2 focus:ring-[#b9e1a6]" placeholder="Conte o que aconteceu e inclua detalhes que ajudem a identificar o problema." />
          </label>

          <label className="block text-sm font-semibold" htmlFor="address">Endereço ou localização
            <input id="address" className="mt-2 w-full rounded-xl border border-[#bbcdc5] px-4 py-3 font-normal outline-none transition focus:border-[#5b9e3e] focus:ring-2 focus:ring-[#b9e1a6]" placeholder="Rua, bairro, ponto de referência..." type="text" />
          </label>

          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-sm font-semibold" htmlFor="date">Data do ocorrido
              <input id="date" className="mt-2 w-full rounded-xl border border-[#bbcdc5] px-4 py-3 font-normal outline-none transition focus:border-[#5b9e3e] focus:ring-2 focus:ring-[#b9e1a6]" type="date" />
            </label>
            <label className="block text-sm font-semibold" htmlFor="time">Hora aproximada
              <input id="time" className="mt-2 w-full rounded-xl border border-[#bbcdc5] px-4 py-3 font-normal outline-none transition focus:border-[#5b9e3e] focus:ring-2 focus:ring-[#b9e1a6]" type="time" />
            </label>
          </div>

          <div>
            <p className="text-sm font-semibold">Envio de fotos e vídeos <span className="font-normal text-[#71847d]">(opcional)</span></p>
            <label className="mt-2 flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-[#b8ccc3] bg-[#fbfdfb] px-5 py-8 text-center transition hover:border-[#5b9e3e] hover:bg-[#f3faef]" htmlFor="attachments">
              <span className="text-3xl" aria-hidden="true">📷</span>
              <span className="mt-2 text-sm font-semibold">Clique para adicionar arquivos</span>
              <span className="mt-1 text-xs text-[#71847d]">Fotos ou vídeos que ajudem a entender a situação.</span>
              <input accept="image/*,video/*" className="sr-only" id="attachments" multiple onChange={(event) => setFiles(Array.from(event.target.files ?? []))} type="file" />
            </label>
            {files.length > 0 && <p className="mt-2 text-sm text-[#477f32]">{files.length} arquivo(s) selecionado(s): {files.map((file) => file.name).join(', ')}</p>}
          </div>

          <div className="flex flex-col-reverse gap-3 border-t border-[#e5eee9] pt-6 sm:flex-row sm:justify-end">
            <button className="rounded-xl border border-[#b8ccc3] px-6 py-3 font-semibold transition hover:bg-[#f4f8f6]" type="button">← Voltar</button>
            <button className="rounded-xl bg-[#5b9e3e] px-7 py-3 font-semibold text-white transition hover:bg-[#4c8634]" type="submit">Enviar denúncia</button>
          </div>
        </form>

      </section>
    </main>
  )
}

export default App
