import { useEffect, useMemo, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { demoContent } from '../content/pageContent';
import { demos, type DemoId, type DemoFilter } from '../content/mediaData';
import { useLanguage } from '../context/LanguageContext';
import './Demo.css';

const FILTER_KEYS: DemoFilter[] = ['all', 'viewer', 'configurator', 'ar'];

export default function Demo() {
  const { locale } = useLanguage();
  const content = demoContent[locale];
  const [filter, setFilter] = useState<DemoFilter>('all');
  const [selectedId, setSelectedId] = useState<DemoId>('calisson');
  const [fallbackFullscreen, setFallbackFullscreen] = useState(false);
  const viewerRef = useRef<HTMLDivElement>(null);
  const selectorRef = useRef<HTMLDivElement>(null);

  const filteredDemos = useMemo(() => {
    if (filter === 'all') return demos;
    return demos.filter((demo) => (demo.categories as readonly string[]).includes(filter));
  }, [filter]);

  useEffect(() => {
    if (!filteredDemos.some((demo) => demo.id === selectedId)) {
      if (filteredDemos.length > 0) {
        setSelectedId(filteredDemos[0].id);
      }
    }
  }, [filteredDemos, selectedId]);

  const selectedDemo = filteredDemos.find((demo) => demo.id === selectedId) ?? filteredDemos[0] ?? demos[0];

  useEffect(() => {
    if (!fallbackFullscreen) return;
    document.body.style.overflow = 'hidden';
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === 'Escape') setFallbackFullscreen(false); };
    window.addEventListener('keydown', onKeyDown);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKeyDown); };
  }, [fallbackFullscreen]);

  const toggleFullscreen = async () => {
    if (document.fullscreenElement) {
      await document.exitFullscreen();
      return;
    }
    if (viewerRef.current?.requestFullscreen) {
      try { await viewerRef.current.requestFullscreen(); return; } catch { /* iOS fallback below */ }
    }
    setFallbackFullscreen((value) => !value);
  };

  const scrollSelector = (direction: -1 | 1) => {
    const selector = selectorRef.current;
    if (!selector) return;
    selector.scrollBy({ left: direction * Math.min(selector.clientWidth * .78, 420), behavior: 'smooth' });
  };

  return (
    <>
      <Helmet>
        <title>{content.seo.title}</title><meta name="description" content={content.seo.description} />
        <meta property="og:title" content={content.seo.title} /><meta property="og:description" content={content.seo.description} />
        <meta property="og:url" content="https://ardittiproduction.com/demo" /><meta property="og:image" content="https://ardittiproduction.com/og.png" />
      </Helmet>

      <section className="demo-page site-container">
        <div className="demo-page__heading"><h1>{content.title}</h1><p>{content.subtitle}</p></div>

        <div className="demo-filter-bar" role="tablist" aria-label="Filtrer par type de démo">
          {FILTER_KEYS.map((key) => {
            const isActive = filter === key;
            return (
              <button
                key={key}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`demo-filter-btn ${isActive ? 'is-active' : ''}`}
                onClick={() => {
                  setFilter(key);
                  if (selectorRef.current) {
                    selectorRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                  }
                }}
                data-analytics-event="demo_filter"
                data-analytics-label={key}
              >
                {content.filters[key]}
              </button>
            );
          })}
        </div>

        <div className="demo-selector-shell">
          <button className="demo-selector__arrow demo-selector__arrow--previous" type="button" onClick={() => scrollSelector(-1)} aria-label={content.previous}><ChevronLeft aria-hidden="true" /></button>
          <div className="demo-selector" ref={selectorRef} aria-label="Choisir une démonstration">
            {filteredDemos.map((demo) => (
              <button className={demo.id === selectedDemo.id ? 'is-active' : ''} type="button" key={demo.id} onClick={() => setSelectedId(demo.id)} aria-pressed={demo.id === selectedDemo.id} data-analytics-event="demo_select" data-analytics-label={demo.id}>
                <img src={demo.thumbnail} alt="" /><span>{demo.name}</span>
              </button>
            ))}
          </div>
          <button className="demo-selector__arrow demo-selector__arrow--next" type="button" onClick={() => scrollSelector(1)} aria-label={content.next}><ChevronRight aria-hidden="true" /></button>
        </div>
        <p className="demo-selector__hint">{content.swipeHint}<ChevronRight size={15} aria-hidden="true" /></p>

        <div className={`demo-viewer ${fallbackFullscreen ? 'is-fallback-fullscreen' : ''}`} ref={viewerRef}>
          <iframe key={selectedDemo.url} src={selectedDemo.url} title={`${selectedDemo.name} — démonstration 3D`} allow="fullscreen; xr-spatial-tracking; camera; gyroscope; accelerometer" allowFullScreen />
          <button className="demo-viewer__fullscreen" type="button" onClick={toggleFullscreen} aria-label={fallbackFullscreen ? content.exitFullscreen : content.fullscreen}>
            {fallbackFullscreen ? <X size={20} /> : <Expand size={20} />}<span>{fallbackFullscreen ? content.exitFullscreen : content.fullscreen}</span>
          </button>
        </div>
      </section>
    </>
  );
}
