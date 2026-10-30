"""Serve the extracted portable preview locally, including SPA route fallback."""
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlsplit
import argparse


class PreviewHandler(SimpleHTTPRequestHandler):
    extensions_map = {
        **SimpleHTTPRequestHandler.extensions_map,
        '.js': 'text/javascript', '.css': 'text/css',
        '.glb': 'model/gltf-binary', '.woff2': 'font/woff2',
        '.hdr': 'image/vnd.radiance',
    }

    def do_GET(self):
        route = urlsplit(self.path).path
        if route in ('/', '/flavours', '/flavours/', '/story', '/story/'):
            self.path = '/index.html'
        super().do_GET()


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--port', type=int, default=3145)
    parser.add_argument('--directory', default=str(Path(__file__).resolve().parent))
    args = parser.parse_args()
    if not (Path(args.directory) / 'index.html').is_file():
        parser.error('Directory must contain the built preview index.html')
    server = ThreadingHTTPServer(('127.0.0.1', args.port), partial(PreviewHandler, directory=args.directory))
    print(f'Preview: http://127.0.0.1:{args.port}', flush=True)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()
