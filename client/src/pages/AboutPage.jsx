
import { usePageMetadata } from '../hooks/usePageMetadata';

function AboutPage() {
  usePageMetadata({
    title: "Sobre nós | Loja online Tudo Aqui",
    description: "Informações sobre nossa loja e equipe"
  });

  return (
    <section>
      <h1>Sobre o Projeto</h1>
      <p>Em construção... 🚀</p>
    </section>
  );
}

export default AboutPage;
