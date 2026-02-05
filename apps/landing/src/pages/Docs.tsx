import { Playground } from '../components/Playground';
import { buttonStory, cardStory, inputStory, badgeStory } from '../stories';

export function Docs() {
  return (
    <section className="section" id="docs">
      <h2 className="section-title">Documentação de Componentes</h2>
      <p className="pixel-text" style={{ marginBottom: '24px' }}>
        Explore e teste os componentes da biblioteca em tempo real. Ajuste as
        props e veja o resultado instantaneamente.
      </p>
      <Playground stories={[buttonStory, cardStory, inputStory, badgeStory]} />
    </section>
  );
}
