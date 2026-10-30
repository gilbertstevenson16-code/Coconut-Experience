import { Component, type ReactNode } from 'react';

export default class PreviewErrorBoundary extends Component<
  { children: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() {
    if (!this.state.failed) return this.props.children;
    return (
      <main style={{ padding: '3rem', fontFamily: 'sans-serif', background: '#fff9ee', minHeight: '100vh', color: '#153a2b' }}>
        <h1>The interactive experience could not load.</h1>
        <p>This page requires WebGL and access to its media files. Try opening it in a full browser, or use the packaged preview with local media.</p>
        <button onClick={() => window.location.reload()}>Try again</button>
      </main>
    );
  }
}
