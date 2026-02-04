import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardFooter,
  Badge,
  LevelBadge,
  Label,
  Input,
  Textarea,
  Select,
  Checkbox,
  ProgressBar,
  HealthBar,
  Loader,
  Alert,
  Toast,
  PixelTitle,
  Skeleton,
} from '@repo/ui';
import { Icon } from './components/Icon';
import { useState, useRef, useEffect } from 'react';

const GITHUB_REPO_URL = 'https://github.com/programadorcaro/components-lib';
const MOCK_STARS = '1.2k';
const MOCK_FORKS = 42;

const COLLABORATORS = [
  { name: 'Colaborador 1', role: 'Maintainer', avatar: 'https://avatars.githubusercontent.com/u/1' },
  { name: 'Colaborador 2', role: 'Contributor', avatar: 'https://avatars.githubusercontent.com/u/2' },
  { name: 'Colaborador 3', role: 'Contributor', avatar: 'https://avatars.githubusercontent.com/u/3' },
];

const STAR_COUNT = 4000;
const STAR_RADIUS = 1;
const TWINKLE_SPEED = 0.002;
const STAR_OPACITY_MIN = 0.05;
const STAR_OPACITY_MAX = 0.4;

type Star = { x: number; y: number; phase: number };

function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    function initStars(width: number, height: number): Star[] {
      return Array.from({ length: STAR_COUNT }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        phase: Math.random() * Math.PI * 2,
      }));
    }

    function draw(
      context: CanvasRenderingContext2D,
      width: number,
      height: number,
      stars: Star[],
      time: number
    ) {
      context.clearRect(0, 0, width, height);
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        const t = time * TWINKLE_SPEED + star.phase;
        const opacity =
          STAR_OPACITY_MIN +
          (STAR_OPACITY_MAX - STAR_OPACITY_MIN) * (1 + Math.sin(t)) * 0.5;
        context.beginPath();
        context.arc(star.x, star.y, STAR_RADIUS, 0, Math.PI * 2);
        context.fillStyle = `rgba(255, 0, 110, ${opacity})`;
        context.fill();
      }
    }

    function resize() {
      const el = canvasRef.current;
      const context = el?.getContext('2d');
      if (!el || !context) return;
      const w = window.innerWidth;
      const h = window.innerHeight;
      el.width = w;
      el.height = h;
      starsRef.current = initStars(w, h);
    }

    resize();

    function loop(time: number) {
      const el = canvasRef.current;
      const context = el?.getContext('2d');
      if (!el || !context || starsRef.current.length === 0) return;
      draw(context, el.width, el.height, starsRef.current, time);
      frameRef.current = requestAnimationFrame(loop);
    }
    frameRef.current = requestAnimationFrame(loop);

    const onResize = () => {
      resize();
    };
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <div className="stars">
      <canvas ref={canvasRef} className="stars-canvas" aria-hidden />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <div className="logo">PIXEL LIB</div>
      <nav className="nav">
        <a href="#components" className="nav-link">
          Components
        </a>
        <a href="#docs" className="nav-link">
          Docs
        </a>
        <a href={GITHUB_REPO_URL} className="nav-link" target="_blank" rel="noopener noreferrer">
          <Icon name="GitHub" size={18} className="pixel-icon" />
          <span>GitHub</span>
        </a>
        <a href={GITHUB_REPO_URL} className="nav-link" target="_blank" rel="noopener noreferrer">
          <Icon name="Star" size={16} className="pixel-icon" />
          <span>{MOCK_STARS}</span>
        </a>
        <a href={GITHUB_REPO_URL} className="nav-link" target="_blank" rel="noopener noreferrer">
          <Icon name="GitHub" size={16} className="pixel-icon" />
          <span>{MOCK_FORKS}</span>
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero">
      <PixelTitle text="PIXEL ART"/>
      <h2 className="pixel-subtitle">Component Library</h2>
      <p className="pixel-text">
        Retro gaming inspired UI components with authentic pixel art corners
      </p>
      <div
        style={{
          marginTop: '32px',
          display: 'flex',
          gap: '16px',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        <Button variant="primary">Get Started</Button>
        <Button variant="ghost">View Docs</Button>
      </div>
      <div className="hero-stats">
        <a href={GITHUB_REPO_URL} className="hero-stat-link" target="_blank" rel="noopener noreferrer">
          <Icon name="GitHub" size={20} className="pixel-icon" />
          <span>View on GitHub</span>
        </a>
        <a href={GITHUB_REPO_URL} className="hero-stat-link" target="_blank" rel="noopener noreferrer">
          <Icon name="Star" size={20} className="pixel-icon" />
          <span>{MOCK_STARS}</span>
        </a>
        <a href={GITHUB_REPO_URL} className="hero-stat-link" target="_blank" rel="noopener noreferrer">
          <Icon name="Fork" size={20} className="pixel-icon" />
          <span>{MOCK_FORKS}</span>
        </a>
      </div>
    </section>
  );
}

function ButtonsSection() {
  return (
    <section className="section" id="components">
      <h2 className="section-title">
        <Icon name="Play" size={16} className="pixel-icon" /> Buttons
      </h2>
      <div className="component-grid">
        <div className="component-card">
          <h3 className="component-label">Primary Buttons</h3>
          <Button variant="primary">Start Game</Button>
          <Button variant="primary" size="lg">
            Large Button
          </Button>
          <Button variant="primary" size="sm">
            Small
          </Button>
        </div>

        <div className="component-card">
          <h3 className="component-label">Secondary Buttons</h3>
          <Button variant="secondary">Continue</Button>
          <Button variant="secondary" size="lg">
            Load Save
          </Button>
          <Button variant="secondary" size="sm">
            Cancel
          </Button>
        </div>

        <div className="component-card">
          <h3 className="component-label">Accent Buttons</h3>
          <Button variant="accent">Join Now</Button>
          <Button variant="accent" size="lg">
            Claim Reward
          </Button>
          <Button variant="accent" size="sm">
            Info
          </Button>
        </div>

        <div className="component-card">
          <h3 className="component-label">Animated Buttons</h3>
          <Button variant="primary" animation="pulse">
            Pulse
          </Button>
          <Button variant="accent" animation="glow">
            Glow
          </Button>
        </div>
      </div>
    </section>
  );
}

function CardsSection() {
  return (
    <section className="section">
      <h2 className="section-title">
        <Icon name="Play" size={16} className="pixel-icon" /> Cards
      </h2>
      <div className="component-grid">
        <Card>
          <CardHeader>
            <CardTitle>Character Card</CardTitle>
          </CardHeader>
          <CardBody>
            <Icon name="Android" size={48} />
            <p className="pixel-text">Level 42 Warrior</p>
            <ProgressBar value={80} max={100} />
          </CardBody>
          <CardFooter>
            <Button size="sm" variant="primary">
              View
            </Button>
          </CardFooter>
        </Card>

        <Card variant="accent">
          <CardHeader>
            <CardTitle>Quest Card</CardTitle>
          </CardHeader>
          <CardBody>
            <Icon name="Gamepad" size={48} />
            <p className="pixel-text">Daily Challenge</p>
            <ProgressBar value={60} max={100} variant="accent" />
          </CardBody>
          <CardFooter>
            <Button size="sm" variant="accent">
              Start
            </Button>
          </CardFooter>
        </Card>

        <Card variant="danger">
          <CardHeader>
            <CardTitle>Boss Battle</CardTitle>
          </CardHeader>
          <CardBody>
            <Icon name="Zap" size={48} />
            <p className="pixel-text">Final Challenge</p>
            <ProgressBar value={30} max={100} />
          </CardBody>
          <CardFooter>
            <Button size="sm" variant="danger">
              Fight
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}

function BadgesSection() {
  return (
    <section className="section">
      <h2 className="section-title">
        <Icon name="Play" size={16} className="pixel-icon" /> Badges & Labels
      </h2>
      <div className="component-grid">
        <div className="component-card">
          <h3 className="component-label">Status Badges</h3>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <Badge variant="primary">NEW</Badge>
            <Badge variant="success">ONLINE</Badge>
            <Badge variant="danger">OFFLINE</Badge>
            <Badge variant="warning">BUSY</Badge>
          </div>
        </div>

        <div className="component-card">
          <h3 className="component-label">Level Badges</h3>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <LevelBadge level={1}>LV.1</LevelBadge>
            <LevelBadge level={2}>LV.10</LevelBadge>
            <LevelBadge level={3}>LV.50</LevelBadge>
            <LevelBadge level={4}>LV.99</LevelBadge>
          </div>
        </div>

        <div className="component-card">
          <h3 className="component-label">Pixel Labels</h3>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <Label variant="pink">RARE</Label>
            <Label variant="cyan">EPIC</Label>
            <Label variant="yellow">LEGENDARY</Label>
          </div>
        </div>
      </div>
    </section>
  );
}

function InputsSection() {
  const [selectedCharacter, setSelectedCharacter] = useState('');

  return (
    <section className="section">
      <h2 className="section-title">
        <Icon name="Play" size={16} className="pixel-icon" /> Input Fields
      </h2>
      <div className="component-grid">
        <div className="component-card">
          <h3 className="component-label">Text Input</h3>
          <Input placeholder="Enter username..." />
          <Input placeholder="Success state" state="success" />
          <Input placeholder="Error state" state="error" />
        </div>

        <div className="component-card">
          <h3 className="component-label">Textarea</h3>
          <Textarea placeholder="Enter your message..." rows={4} />
        </div>

        <div className="component-card">
          <h3 className="component-label">Select</h3>
          <Select
            value={selectedCharacter}
            onChange={setSelectedCharacter}
            placeholder="Select character..."
            options={[
              { value: 'warrior', label: 'Warrior' },
              { value: 'mage', label: 'Mage' },
              { value: 'rogue', label: 'Rogue' },
            ]}
          />
        </div>

        <div className="component-card">
          <h3 className="component-label">Checkbox</h3>
          <Checkbox label="Accept terms" />
          <Checkbox label="Remember me" defaultChecked />
        </div>
      </div>
    </section>
  );
}

function ProgressSection() {
  return (
    <section className="section">
      <h2 className="section-title">
        <Icon name="Play" size={16} className="pixel-icon" /> Progress & Loading
      </h2>
      <div className="component-grid">
        <div className="component-card">
          <h3 className="component-label">Health Bars</h3>
          <HealthBar type="hp" label="HP" value={750} max={1000} />
          <HealthBar type="mp" label="MP" value={250} max={500} />
          <HealthBar type="xp" label="XP" value={900} max={1000} />
        </div>

        <div className="component-card">
          <h3 className="component-label">Progress Bars</h3>
          <ProgressBar value={30} max={100} />
          <ProgressBar value={60} max={100} variant="accent" />
          <ProgressBar value={100} max={100} variant="success" />
        </div>

        <div className="component-card">
          <h3 className="component-label">Loading Indicators</h3>
          <div style={{ display: 'flex', gap: '16px' }}>
            <Loader type="dots" />
            <Loader type="spinner" />
          </div>
        </div>
      </div>
    </section>
  );
}

function SkeletonSection() {
  return (
    <section className="section">
      <h2 className="section-title">
        <Icon name="Play" size={16} className="pixel-icon" /> Skeleton
      </h2>
      <div className="component-grid">
        <div className="component-card">
          <h3 className="component-label">Text lines</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Skeleton variant="text" />
            <Skeleton variant="text" style={{ width: '90%' }} />
            <Skeleton variant="text" style={{ width: '70%' }} />
            <Skeleton variant="text" style={{ width: '85%' }} />
          </div>
        </div>

        <div className="component-card">
          <h3 className="component-label">Avatar + text</h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Skeleton variant="circular" width={48} height={48} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
              <Skeleton variant="text" style={{ width: '80%' }} />
              <Skeleton variant="text" style={{ width: '50%' }} />
            </div>
          </div>
        </div>

        <div className="component-card">
          <h3 className="component-label">Card placeholder</h3>
          <Skeleton variant="rect" height={120} style={{ width: '100%' }} />
        </div>
      </div>
    </section>
  );
}

function AlertsSection() {
  return (
    <section className="section">
      <h2 className="section-title">
        <Icon name="Play" size={16} className="pixel-icon" /> Alerts & Notifications
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Alert variant="info">
          <strong>Info:</strong> This is an informational message.
        </Alert>
        <Alert variant="success">
          <strong>Success:</strong> Your game has been saved!
        </Alert>
        <Alert variant="warning">
          <strong>Warning:</strong> Low health detected!
        </Alert>
        <Alert variant="danger">
          <strong>Error:</strong> Connection lost!
        </Alert>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <Toast>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Icon name="Gamepad" size={16} />
              <span>New quest available!</span>
            </div>
          </Toast>
          <Toast>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Icon name="Trophy" size={16} />
              <span>Achievement unlocked!</span>
            </div>
          </Toast>
        </div>
      </div>
    </section>
  );
}

function CollaboratorsSection() {
  return (
    <section className="section" id="collaborators">
      <h2 className="section-title">
        <Icon name="Play" size={16} className="pixel-icon" /> Colaboradores
      </h2>
      <div className="collaborators-grid">
        {COLLABORATORS.map((person) => (
          <div key={person.name} className="collaborator-card">
            <img
              src={person.avatar}
              alt={person.name}
              className="collaborator-avatar"
              width={64}
              height={64}
            />
            <span className="collaborator-name">{person.name}</span>
            <span className="collaborator-role">{person.role}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function HowToContributeSection() {
  const steps = [
    'Clone o repositório',
    'Instale dependências (pnpm install)',
    'Crie uma branch para sua mudança',
    'Abra um Pull Request',
  ];
  return (
    <section className="section" id="contribuir">
      <h2 className="section-title">
        <Icon name="Play" size={16} className="pixel-icon" /> Como contribuir
      </h2>
      <ol className="contribute-steps">
        {steps.map((step, i) => (
          <li key={i} className="contribute-step">
            {step}
          </li>
        ))}
      </ol>
      <a href={`${GITHUB_REPO_URL}#readme`} className="hero-stat-link" target="_blank" rel="noopener noreferrer">
        Ver guia completo
      </a>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p className="pixel-text" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
        Made with <Icon name="Heart" size={12} /> and pixels
      </p>
      <p className="pixel-text-small">© 2026 Pixel Art Component Library</p>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Starfield />
      <div className="container">
        <Header />
        <Hero />
        <ButtonsSection />
        <CardsSection />
        <BadgesSection />
        <InputsSection />
        <ProgressSection />
        <SkeletonSection />
        <AlertsSection />
        <CollaboratorsSection />
        <HowToContributeSection />
        <Footer />
      </div>
    </>
  );
}
