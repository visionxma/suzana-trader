// Volta do login "Entrar com a Safirion" do minicurso da Suzana.
// Este é o redirect aprovado na Quadcode para o app OAuth "Suzana Trader". Aqui só
// repassamos code, state e error ao minicurso, que faz a troca do code no servidor.
const DESTINO = "https://minicurso-suzana.pages.dev/api/safirion/volta";

export function onRequestGet({ request }) {
  const entrada = new URL(request.url).searchParams;
  const saida = new URLSearchParams();
  for (const nome of ["code", "state", "error"]) {
    const valor = entrada.get(nome);
    if (valor) saida.set(nome, valor.slice(0, 2048));
  }
  return new Response(null, {
    status: 302,
    headers: {
      Location: DESTINO + "?" + saida.toString(),
      "Cache-Control": "no-store",
      "Referrer-Policy": "no-referrer",
    },
  });
}
