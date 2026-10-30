import { asset } from "../../config/media";
// Recovered from the owner-authorized reference; see docs/provenance.md.
export default (e) => {
  "use strict";

  var t = e.i(43476),
    r = e.i(71645),
    n = e.i(75056),
    o = e.i(43257),
    i = e.i(82687),
    a = e.i(78140),
    l = e.i(28600),
    s = e.i(70905),
    u = e.i(50487),
    c = e.i(25234),
    d = e.i(90072);
  function f(e, t, n) {
    let o = (0, l.useThree)((e) => e.size),
      i = (0, l.useThree)((e) => e.viewport),
      a = "number" == typeof e ? e : o.width * i.dpr,
      s = "number" == typeof t ? t : o.height * i.dpr,
      u = ("number" == typeof e ? n : e) || {},
      { samples: c = 0, depth: f, ...p } = u,
      h = null != f ? f : u.depthBuffer,
      m = r.useMemo(() => {
        let e = new d.WebGLRenderTarget(a, s, {
          minFilter: d.LinearFilter,
          magFilter: d.LinearFilter,
          type: d.HalfFloatType,
          ...p,
        });
        return (
          h && (e.depthTexture = new d.DepthTexture(a, s, d.FloatType)),
          (e.samples = c),
          e
        );
      }, []);
    return (
      r.useLayoutEffect(() => {
        (m.setSize(a, s), c && (m.samples = c));
      }, [c, m, a, s]),
      r.useEffect(() => () => m.dispose(), []),
      m
    );
  }
  function p(e, t = 1e-4) {
    t = Math.max(t, Number.EPSILON);
    let r = {},
      n = e.getIndex(),
      o = e.getAttribute("position"),
      i = n ? n.count : o.count,
      a = 0,
      l = Object.keys(e.attributes),
      s = {},
      u = {},
      c = [],
      d = ["getX", "getY", "getZ", "getW"],
      f = ["setX", "setY", "setZ", "setW"];
    for (let t = 0, r = l.length; t < r; t++) {
      let r = l[t],
        n = e.attributes[r];
      s[r] = new n.constructor(
        new n.array.constructor(n.count * n.itemSize),
        n.itemSize,
        n.normalized,
      );
      let o = e.morphAttributes[r];
      o &&
        (u[r] || (u[r] = []),
        o.forEach((e, t) => {
          let n = new e.array.constructor(e.count * e.itemSize);
          u[r][t] = new e.constructor(n, e.itemSize, e.normalized);
        }));
    }
    let h = 0.5 * t,
      m = Math.pow(10, Math.log10(1 / t)),
      g = h * m;
    for (let t = 0; t < i; t++) {
      let o = n ? n.getX(t) : t,
        i = "";
      for (let t = 0, r = l.length; t < r; t++) {
        let r = l[t],
          n = e.getAttribute(r),
          a = n.itemSize;
        for (let e = 0; e < a; e++) i += `${~~(n[d[e]](o) * m + g)},`;
      }
      if (i in r) c.push(r[i]);
      else {
        for (let t = 0, r = l.length; t < r; t++) {
          let r = l[t],
            n = e.getAttribute(r),
            i = e.morphAttributes[r],
            c = n.itemSize,
            p = s[r],
            h = u[r];
          for (let e = 0; e < c; e++) {
            let t = d[e],
              r = f[e];
            if ((p[r](a, n[t](o)), i))
              for (let e = 0, n = i.length; e < n; e++) h[e][r](a, i[e][t](o));
          }
        }
        ((r[i] = a), c.push(a), a++);
      }
    }
    let v = e.clone();
    for (let t in e.attributes) {
      let e = s[t];
      if (
        (v.setAttribute(
          t,
          new e.constructor(
            e.array.slice(0, a * e.itemSize),
            e.itemSize,
            e.normalized,
          ),
        ),
        t in u)
      )
        for (let e = 0; e < u[t].length; e++) {
          let r = u[t][e];
          v.morphAttributes[t][e] = new r.constructor(
            r.array.slice(0, a * r.itemSize),
            r.itemSize,
            r.normalized,
          );
        }
    }
    return (v.setIndex(c), v);
  }
  class h {
    constructor(e = 0.1, t = 6) {
      ((this.maxEdgeLength = e), (this.maxIterations = t));
    }
    modify(e) {
      null !== e.index && (e = e.toNonIndexed());
      let t = this.maxIterations,
        r = this.maxEdgeLength * this.maxEdgeLength,
        n = new d.Vector3(),
        o = new d.Vector3(),
        i = new d.Vector3(),
        a = new d.Vector3(),
        l = [n, o, i, a],
        s = new d.Vector3(),
        u = new d.Vector3(),
        c = new d.Vector3(),
        f = new d.Vector3(),
        p = [s, u, c, f],
        h = new d.Color(),
        m = new d.Color(),
        g = new d.Color(),
        v = new d.Color(),
        x = [h, m, g, v],
        w = new d.Vector2(),
        y = new d.Vector2(),
        b = new d.Vector2(),
        k = new d.Vector2(),
        T = [w, y, b, k],
        S = new d.Vector2(),
        E = new d.Vector2(),
        C = new d.Vector2(),
        M = new d.Vector2(),
        N = [S, E, C, M],
        _ = e.attributes,
        P = void 0 !== _.normal,
        A = void 0 !== _.color,
        R = void 0 !== _.uv,
        j = void 0 !== _.uv1,
        z = _.position.array,
        L = P ? _.normal.array : null,
        D = A ? _.color.array : null,
        O = R ? _.uv.array : null,
        B = j ? _.uv1.array : null,
        Y = z,
        X = L,
        F = D,
        V = O,
        I = B,
        H = 0,
        W = !0;
      function q(e, t, r) {
        let n = l[e],
          o = l[t],
          i = l[r];
        if (
          (Y.push(n.x, n.y, n.z),
          Y.push(o.x, o.y, o.z),
          Y.push(i.x, i.y, i.z),
          P)
        ) {
          let n = p[e],
            o = p[t],
            i = p[r];
          (X.push(n.x, n.y, n.z), X.push(o.x, o.y, o.z), X.push(i.x, i.y, i.z));
        }
        if (A) {
          let n = x[e],
            o = x[t],
            i = x[r];
          (F.push(n.r, n.g, n.b), F.push(o.r, o.g, o.b), F.push(i.r, i.g, i.b));
        }
        if (R) {
          let n = T[e],
            o = T[t],
            i = T[r];
          (V.push(n.x, n.y), V.push(o.x, o.y), V.push(i.x, i.y));
        }
        if (j) {
          let n = N[e],
            o = N[t],
            i = N[r];
          (I.push(n.x, n.y), I.push(o.x, o.y), I.push(i.x, i.y));
        }
      }
      for (; W && H < t;) {
        (H++,
          (W = !1),
          (z = Y),
          (Y = []),
          P && ((L = X), (X = [])),
          A && ((D = F), (F = [])),
          R && ((O = V), (V = [])),
          j && ((B = I), (I = [])));
        for (let e = 0, t = 0, l = z.length; e < l; e += 9, t += 6) {
          (n.fromArray(z, e + 0),
            o.fromArray(z, e + 3),
            i.fromArray(z, e + 6),
            P &&
              (s.fromArray(L, e + 0),
              u.fromArray(L, e + 3),
              c.fromArray(L, e + 6)),
            A &&
              (h.fromArray(D, e + 0),
              m.fromArray(D, e + 3),
              g.fromArray(D, e + 6)),
            R &&
              (w.fromArray(O, t + 0),
              y.fromArray(O, t + 2),
              b.fromArray(O, t + 4)),
            j &&
              (S.fromArray(B, t + 0),
              E.fromArray(B, t + 2),
              C.fromArray(B, t + 4)));
          let l = n.distanceToSquared(o),
            d = o.distanceToSquared(i),
            p = n.distanceToSquared(i);
          l > r || d > r || p > r
            ? ((W = !0),
              l >= d && l >= p
                ? (a.lerpVectors(n, o, 0.5),
                  P && f.lerpVectors(s, u, 0.5),
                  A && v.lerpColors(h, m, 0.5),
                  R && k.lerpVectors(w, y, 0.5),
                  j && M.lerpVectors(S, E, 0.5),
                  q(0, 3, 2),
                  q(3, 1, 2))
                : d >= l && d >= p
                  ? (a.lerpVectors(o, i, 0.5),
                    P && f.lerpVectors(u, c, 0.5),
                    A && v.lerpColors(m, g, 0.5),
                    R && k.lerpVectors(y, b, 0.5),
                    j && M.lerpVectors(E, C, 0.5),
                    q(0, 1, 3),
                    q(3, 2, 0))
                  : (a.lerpVectors(n, i, 0.5),
                    P && f.lerpVectors(s, c, 0.5),
                    A && v.lerpColors(h, g, 0.5),
                    R && k.lerpVectors(w, b, 0.5),
                    j && M.lerpVectors(S, C, 0.5),
                    q(0, 1, 3),
                    q(3, 1, 2)))
            : q(0, 1, 2);
        }
      }
      let U = new d.BufferGeometry();
      return (
        U.setAttribute("position", new d.Float32BufferAttribute(Y, 3)),
        P && U.setAttribute("normal", new d.Float32BufferAttribute(X, 3)),
        A && U.setAttribute("color", new d.Float32BufferAttribute(F, 3)),
        R && U.setAttribute("uv", new d.Float32BufferAttribute(V, 2)),
        j && U.setAttribute("uv1", new d.Float32BufferAttribute(I, 2)),
        U
      );
    }
  }
  let m = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,
    g = `
  precision highp float;
  varying vec2 vUv;

  uniform sampler2D textureA;
  uniform vec2 mouse;
  uniform vec2 prevMouse;
  uniform float brushStrength;
  uniform float time;
  uniform float ambientStrength;
  uniform vec2 resolution;
  uniform int frame;

  const float delta = 1.4;

  // Distance from point p to segment a→b
  float distToSegment(vec2 p, vec2 a, vec2 b) {
      vec2 pa = p - a;
      vec2 ba = b - a;
      float h = clamp(dot(pa, ba) / max(dot(ba, ba), 1e-6), 0.0, 1.0);
      return length(pa - ba * h);
  }

  void drip(inout float pressure, vec2 uv, vec2 center, float radius, float amount) {
      float dist = distance(uv, center);
      float falloff = 1.0 - smoothstep(0.0, radius, dist);
      pressure += falloff * falloff * amount;
  }

  void main() {
      vec2 uv = vUv;
      if (frame == 0) {
          gl_FragColor = vec4(0.0);
          return;
      }

      vec4 data = texture2D(textureA, uv);
      float pressure = data.x;
      float pVel = data.y;

      vec2 texelSize = 5.5 / resolution;
      float p_right = texture2D(textureA, uv + vec2(texelSize.x, 0.0)).x;
      float p_left  = texture2D(textureA, uv + vec2(-texelSize.x, 0.0)).x;
      float p_up    = texture2D(textureA, uv + vec2(0.0, texelSize.y)).x;
      float p_down  = texture2D(textureA, uv + vec2(0.0, -texelSize.y)).x;

      if (uv.x <= texelSize.x) p_left = p_right;
      if (uv.x >= 1.0 - texelSize.x) p_right = p_left;
      if (uv.y <= texelSize.y) p_down = p_up;
      if (uv.y >= 1.0 - texelSize.y) p_up = p_down;

      pVel += delta * (-2.0 * pressure + p_right + p_left) / 4.0;
      pVel += delta * (-2.0 * pressure + p_up + p_down) / 4.0;

      pressure += delta * pVel;
      pVel -= 0.005 * delta * pressure;

      pVel *= 1.0 - 0.012 * delta;
      pressure *= 0.99;

      // Idle ambient ripples — soft drifting drips so water always feels alive
      if (ambientStrength > 0.001) {
          float t = time;
          // Slow wander around the bowl
          vec2 a = vec2(0.42 + 0.16 * sin(t * 0.45), 0.48 + 0.14 * cos(t * 0.38));
          vec2 b = vec2(0.58 + 0.14 * cos(t * 0.41 + 1.2), 0.55 + 0.12 * sin(t * 0.52 + 0.7));
          vec2 c = vec2(0.50 + 0.13 * sin(t * 0.32 + 2.1), 0.38 + 0.13 * cos(t * 0.44 + 1.5));
          vec2 d = vec2(0.35 + 0.10 * cos(t * 0.29 + 0.4), 0.62 + 0.09 * sin(t * 0.36 + 1.1));

          // Wider / more frequent pulses so idle motion is obvious
          float pulseA = smoothstep(0.0, 0.08, fract(t * 0.55)) * (1.0 - smoothstep(0.08, 0.55, fract(t * 0.55)));
          float pulseB = smoothstep(0.0, 0.08, fract(t * 0.48 + 0.37)) * (1.0 - smoothstep(0.08, 0.55, fract(t * 0.48 + 0.37)));
          float pulseC = smoothstep(0.0, 0.08, fract(t * 0.42 + 0.71)) * (1.0 - smoothstep(0.08, 0.55, fract(t * 0.42 + 0.71)));
          float pulseD = smoothstep(0.0, 0.08, fract(t * 0.38 + 0.19)) * (1.0 - smoothstep(0.08, 0.55, fract(t * 0.38 + 0.19)));

          // Continuous low wash + soft plops
          float breathe = 0.4 + 0.6 * (0.5 + 0.5 * sin(t * 0.9));
          drip(pressure, uv, a, 0.11, (0.28 * breathe + pulseA * 1.15) * ambientStrength);
          drip(pressure, uv, b, 0.10, (0.22 * breathe + pulseB * 1.0) * ambientStrength);
          drip(pressure, uv, c, 0.12, (0.20 * breathe + pulseC * 0.95) * ambientStrength);
          drip(pressure, uv, d, 0.10, (0.18 * breathe + pulseD * 0.85) * ambientStrength);
      }

      // One brush stroke per frame (point or segment) — keeps sim timing stable
      if (mouse.x >= 0.0 && brushStrength > 0.001) {
          vec2 mouseUV = mouse / resolution;
          vec2 prevUV = prevMouse.x >= 0.0 ? prevMouse / resolution : mouseUV;
          float dist = distToSegment(uv, prevUV, mouseUV);
          float outer = 0.11;
          float inner = 0.04;
          float soft = 1.0 - smoothstep(inner, outer, dist);
          float hard = 1.0 - smoothstep(0.0, inner, dist);
          pressure += (soft * 1.6 + hard * 0.9) * brushStrength;
      }

      gl_FragColor = vec4(pressure, pVel, (p_right - p_left) / 2.0, (p_up - p_down) / 2.0);
  }
`,
    v = `
  uniform vec3 uBBoxMin;
  uniform vec3 uBBoxMax;
  varying vec2 vUv;
  varying vec2 vSimUv;
  varying vec3 vNormal;
  varying vec3 vViewPos;
  varying vec3 vLocalPos;

  void main() {
    vUv = uv;
    vLocalPos = position;
    // Continuous sim UVs from local position — avoids GLB UV seam "cuts"
    vec3 size = max(uBBoxMax - uBBoxMin, vec3(1e-4));
    vec3 n = (position - uBBoxMin) / size;
    vSimUv = clamp(n.zy, 0.0, 1.0);
    vNormal = normalize(normalMatrix * normal);
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    vViewPos = mv.xyz;
    gl_Position = projectionMatrix * mv;
  }
`,
    x = `
  precision highp float;
  uniform vec3 uColor;
  uniform vec3 uMalaiColor;
  uniform vec3 uLightPos;
  uniform sampler2D uSimTexture;
  uniform vec2 uTilt;
  uniform float uTime;
  uniform vec3 uBBoxMin;
  uniform vec3 uBBoxMax;
  varying vec2 vUv;
  varying vec2 vSimUv;
  varying vec3 vNormal;
  varying vec3 vViewPos;
  varying vec3 vLocalPos;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }

  float softNoise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
  }

  // Schlick fresnel for water (IOR ~1.33)
  float fresnelSchlick(float cosTheta, float F0) {
    return F0 + (1.0 - F0) * pow(1.0 - cosTheta, 5.0);
  }

  void main() {
    vec4 simData = texture2D(uSimTexture, vSimUv);
    float pressure = simData.x;
    float gradX = simData.z;
    float gradY = simData.w;
    float rippleAmt = abs(gradX) + abs(gradY);

    // Soft contact with shell/malai — fade near geometry bounds so the
    // milk rim blends into the coconut flesh instead of a hard cut.
    vec3 center = (uBBoxMin + uBBoxMax) * 0.5;
    vec3 halfSize = max((uBBoxMax - uBBoxMin) * 0.5, vec3(1e-4));
    vec3 nPos = abs((vLocalPos - center) / halfSize);
    float boxRim = max(nPos.x, max(nPos.y, nPos.z));
    // Radial rim in the bowl plane (Y/Z) — matches half-coconut cut silhouette
    float radial = length(nPos.yz);
    float contact = max(boxRim, radial);
    float edgeBlend = 1.0 - smoothstep(0.62, 0.98, contact);
    float edgeSoft = smoothstep(0.55, 0.92, contact); // 0 center → 1 at rim

    vec3 baseNormal = normalize(vNormal);
    vec3 ripplePerturb = vec3(
      -gradX * 6.5 + uTilt.y * 0.12,
      0.0,
      -gradY * 6.5 + uTilt.x * 0.12
    );
    vec3 normal = normalize(baseNormal + ripplePerturb);

    vec3 lightDir = normalize(uLightPos - vViewPos);
    vec3 viewDir = normalize(-vViewPos);
    vec3 halfDir = normalize(lightDir + viewDir);

    float NdotV = clamp(dot(normal, viewDir), 0.0, 1.0);
    float NdotL = max(dot(normal, lightDir), 0.0);
    float NdotH = max(dot(normal, halfDir), 0.0);

    // Physically-ish water fresnel
    float F = fresnelSchlick(NdotV, 0.02);

    // Dual-lobe specular: sharp water sparkle + soft wet sheen
    float sharpSpec = pow(NdotH, 220.0) * 2.2;
    float softSpec = pow(NdotH, 28.0) * 0.28;
    float rippleSpec = rippleAmt * 1.8 + abs(pressure) * 0.14;
    float spec = (sharpSpec + softSpec) * (0.55 + F * 1.6) + rippleSpec;
    // Kill hard specular at the contact rim
    spec *= mix(1.0, 0.15, edgeSoft);

    // Soft cloudy particulate (coconut water isn't 100% crystal clear)
    float n1 = softNoise(vUv * 48.0 + uTime * 0.08);
    float n2 = softNoise(vUv * 110.0 - uTime * 0.05);
    float haze = smoothstep(0.35, 0.95, n1 * 0.65 + n2 * 0.35);

    // Tiny suspended "bubbles" / pulp flecks
    float fleck = smoothstep(0.92, 0.995, softNoise(vUv * 220.0 + vec2(uTime * 0.03, -uTime * 0.02)));
    fleck *= 0.55 + 0.45 * softNoise(vUv * 40.0);

    // Beer-Lambert style body: thin in center, denser at grazing angles
    float opticalDepth = mix(0.10, 0.55, pow(1.0 - NdotV, 1.6));
    float bodyAlpha = opticalDepth * (0.55 + haze * 0.45);

    // Warm translucent tint — pale coconut water, slightly green-gold in thickness
    vec3 thinTint = uColor;
    vec3 thickTint = mix(uColor, vec3(0.90, 0.88, 0.78), 0.35);
    vec3 absorb = mix(thinTint, thickTint, opticalDepth);

    // Soft diffuse + wrap lighting so liquid doesn't go black
    float wrap = NdotL * 0.5 + 0.5;
    vec3 litBody = absorb * (0.42 + wrap * 0.48);

    // Subsurface: warm glow when light is behind / through the volume
    float backLit = pow(max(dot(viewDir, -lightDir), 0.0), 2.2);
    float thickness = pow(1.0 - NdotV, 1.4);
    vec3 sss = vec3(1.0, 0.93, 0.82) * backLit * thickness * 0.22;
    litBody += sss;

    // Soft caustic brightening from ripple pressure
    litBody += absorb * abs(pressure) * 0.22;
    litBody += vec3(1.0) * fleck * 0.12;
    litBody += vec3(0.95, 0.97, 1.0) * rippleAmt * 0.32;

    // Edge reflection — cool-clear glass rim
    vec3 reflectColor = vec3(0.92, 0.96, 1.0);
    vec3 finalColor = mix(litBody, reflectColor, F * 0.85 * (1.0 - edgeSoft * 0.85));
    finalColor += vec3(0.98, 0.99, 1.0) * spec * 0.9;

    // Near shell contact, tint toward malai so the seam reads wet flesh, not a cut
    finalColor = mix(finalColor, uMalaiColor, edgeSoft * 0.72);

    // Alpha: clear center, cloudy body, glass edges, sparkles, ripple
    float alpha = bodyAlpha * 0.55
      + F * 0.48
      + thickness * 0.10
      + spec * 0.22
      + fleck * 0.08
      + rippleAmt * 0.22
      + abs(pressure) * 0.06;

    // Soft dissolve into malai — removes the hard silhouette
    alpha *= edgeBlend;
    alpha = mix(alpha, alpha * 0.2, edgeSoft);

    gl_FragColor = vec4(finalColor, clamp(alpha, 0.0, 0.78));
  }
`;
  function w({
    geometry: e,
    color: n = "#EFE9DC",
    malaiColor: o = "#E8DCC8",
    size: i = 512,
  }) {
    let a = (0, r.useRef)(),
      { gl: s } = (0, l.useThree)(),
      u = {
        format: d.RGBAFormat,
        type: d.FloatType,
        minFilter: d.LinearFilter,
        magFilter: d.LinearFilter,
        stencilBuffer: !1,
        depthBuffer: !1,
      },
      y = f(i, i, u),
      b = f(i, i, u),
      k = (0, r.useRef)({
        read: y,
        write: b,
      }),
      T = (0, r.useRef)(new d.Vector2(-1, -1)),
      S = (0, r.useRef)(new d.Vector2(-1, -1)),
      E = (0, r.useRef)(!1),
      C = (0, r.useRef)(new d.Vector3()),
      M = (0, r.useMemo)(() => {
        let t = e.clone();
        (t.deleteAttribute("normal"), (t = p(t, 1e-4)).computeBoundingBox());
        let r = new d.Vector3();
        return (
          t.boundingBox.getSize(r),
          (t = p(
            (t = new h(Math.max(r.x, r.y, r.z) / 16, 3).modify(t)),
            1e-4,
          )).computeVertexNormals(),
          t.computeBoundingBox(),
          t
        );
      }, [e]),
      N = (0, r.useMemo)(() => {
        let e = M.boundingBox;
        return {
          min: e.min.clone(),
          max: e.max.clone(),
        };
      }, [M]),
      _ = (0, r.useMemo)(() => {
        let e = new d.Scene(),
          t = new d.OrthographicCamera(-1, 1, 1, -1, 0, 1),
          r = new d.ShaderMaterial({
            uniforms: {
              textureA: {
                value: null,
              },
              mouse: {
                value: new d.Vector2(-1, -1),
              },
              prevMouse: {
                value: new d.Vector2(-1, -1),
              },
              brushStrength: {
                value: 0,
              },
              time: {
                value: 0,
              },
              ambientStrength: {
                value: 0.95,
              },
              resolution: {
                value: new d.Vector2(i, i),
              },
              frame: {
                value: 0,
              },
            },
            vertexShader: m,
            fragmentShader: g,
          }),
          n = new d.Mesh(new d.PlaneGeometry(2, 2), r);
        return (
          e.add(n),
          {
            scene: e,
            camera: t,
            material: r,
          }
        );
      }, [i]),
      P = (0, r.useMemo)(
        () =>
          new d.ShaderMaterial({
            uniforms: {
              uSimTexture: {
                value: null,
              },
              uColor: {
                value: new d.Color(n),
              },
              uMalaiColor: {
                value: new d.Color(o),
              },
              uLightPos: {
                value: new d.Vector3(5, 10, 7),
              },
              uTilt: {
                value: new d.Vector2(0, 0),
              },
              uTime: {
                value: 0,
              },
              uBBoxMin: {
                value: N.min,
              },
              uBBoxMax: {
                value: N.max,
              },
            },
            vertexShader: v,
            fragmentShader: x,
            side: d.DoubleSide,
            transparent: !0,
            depthWrite: !1,
          }),
        [n, o, N],
      );
    return (
      (0, c.useFrame)(({ clock: e }) => {
        let { read: t, write: r } = k.current,
          n = _.material.uniforms,
          o = 0;
        if (E.current && T.current.x >= 0) {
          let e =
            S.current.x >= 0
              ? Math.hypot(T.current.x - S.current.x, T.current.y - S.current.y)
              : 0.04 * i;
          o = d.MathUtils.clamp(e / (0.06 * i), 0.15, 1.25);
        }
        if (
          ((n.textureA.value = t.texture),
          n.mouse.value.copy(T.current),
          n.prevMouse.value.copy(S.current),
          (n.brushStrength.value = o),
          (n.time.value = e.elapsedTime),
          (n.ambientStrength.value = o > 0.2 ? 0.45 : 0.95),
          (n.frame.value += 1),
          s.setRenderTarget(r),
          s.render(_.scene, _.camera),
          s.setRenderTarget(null),
          (k.current = {
            read: r,
            write: t,
          }),
          (P.uniforms.uSimTexture.value = r.texture),
          (P.uniforms.uTime.value = e.elapsedTime),
          T.current.x >= 0 && S.current.copy(T.current),
          (E.current = !1),
          a.current)
        ) {
          let e = P.uniforms.uTilt.value;
          e.set(0, 0);
          let t = a.current.parent;
          for (; t;)
            ((e.x += t.rotation.x), (e.y += t.rotation.y), (t = t.parent));
        }
      }),
      (
        <mesh
          ref={a}
          castShadow={!0}
          receiveShadow={!0}
          name={"milk"}
          geometry={M}
          material={P}
          onPointerMove={(e) => {
            (C.current.copy(e.point), e.object.worldToLocal(C.current));
            let t = Math.max(N.max.y - N.min.y, 1e-4),
              r = Math.max(N.max.z - N.min.z, 1e-4),
              n = d.MathUtils.clamp((C.current.z - N.min.z) / r, 0, 1),
              o = d.MathUtils.clamp((C.current.y - N.min.y) / t, 0, 1);
            (T.current.set(n * i, o * i), (E.current = !0));
          }}
          onPointerOut={() => {
            (T.current.set(-1, -1), S.current.set(-1, -1), (E.current = !1));
          }}
        />
      )
    );
  }
  function y({
    coconutWithWater: e,
    coconutEmpty: r,
    coconut: n,
    coconutMilk: o,
    can: c,
  }) {
    let { nodes: d, materials: f } = (0, a.useGLTF)(
        asset("/model/coconut.glb"),
      ),
      p = (0, l.useThree)((e) => e.size.width);
    return (
      <group ref={n} scale={p <= 1025 ? 7 : 12} dispose={null}>
        {
          <group
            rotation={[
              (0, s.degToRad)(180),
              (0, s.degToRad)(180),
              (0, s.degToRad)(-30),
            ]}
          >
            {
              <u.CanModel
                position={[0.01, 0, 0]}
                can={c}
                rotation={[-(0, s.degToRad)(90), -(0, s.degToRad)(90), 0]}
              />
            }
          </group>
        }
        {
          <i.Center>
            {
              <group
                rotation={[
                  (0, s.degToRad)(180),
                  (0, s.degToRad)(180),
                  (0, s.degToRad)(-30),
                ]}
              >
                {
                  <group ref={e} name={"left-side-coconut"}>
                    {
                      <group ref={o} position={[-0.02, 0, 0]}>
                        {(0, t.jsx)(w, {
                          geometry: d.milk.geometry,
                          malaiColor: "#E8DCC8",
                        })}
                      </group>
                    }
                    {
                      <mesh
                        castShadow={!0}
                        receiveShadow={!0}
                        name={"left-side-shell"}
                        geometry={d.Roundcube001.geometry}
                        material={f["Material.002"]}
                      />
                    }
                    {
                      <mesh
                        castShadow={!0}
                        receiveShadow={!0}
                        name={"left-side-malai"}
                        geometry={d.Roundcube001_1.geometry}
                        material={f["dalam kelapa.001"]}
                        scale={0.995}
                      />
                    }
                  </group>
                }
                {
                  <group ref={r} name={"right-side-coconut"}>
                    {
                      <mesh
                        castShadow={!0}
                        receiveShadow={!0}
                        name={"right-side"}
                        geometry={d.Roundcube002.geometry}
                        material={f["Material.002"]}
                      />
                    }
                    {
                      <mesh
                        castShadow={!0}
                        receiveShadow={!0}
                        name={"right-side-malai"}
                        geometry={d.Roundcube002_1.geometry}
                        material={f["dalam kelapa.001"]}
                      />
                    }
                  </group>
                }
              </group>
            }
          </i.Center>
        }
      </group>
    );
  }
  a.useGLTF.preload(asset("/model/coconut.glb"));
  var b = e.i(55667),
    k = e.i(89970),
    T = e.i(33809),
    S = e.i(51167);
  k.default.registerPlugin(T.default);
  let E = () => {
    let e = document.getElementById("coconut-sequence"),
      t = document.querySelector("[data-can-spin-runway]");
    if (!e) return 0;
    let r = e.getBoundingClientRect().top + window.scrollY;
    return t
      ? Math.max(
          r,
          t.getBoundingClientRect().top + window.scrollY - window.innerHeight,
        )
      : r + (e.offsetHeight - window.innerHeight) * 0.8333;
  };
  function C({
    coconut: e,
    coconutWithWater: t,
    coconutEmpty: n,
    coconutMilk: o,
    can: i,
    shakeControl: a,
  }) {
    let { camera: u } = (0, l.useThree)(),
      c = (0, b.useLenis)();
    return (
      (0, r.useLayoutEffect)(() => {
        if (!e.current || !n.current || !t.current || !o.current || !i.current)
          return;
        let r = u.position.z;
        ((history.scrollRestoration = "manual"),
          window.scrollTo(0, 0),
          c?.scrollTo(0, {
            immediate: !0,
            force: !0,
          }),
          k.default.set(i.current.scale, {
            x: 0,
            y: 0,
            z: 0,
          }));
        let l = (function ({
            coconutWithWater: e,
            coconutEmpty: t,
            coconutMilk: r,
            can: n,
            shakeControl: o,
            coconut: i,
            lenis: a,
          }) {
            let l,
              u = !1,
              c = !1,
              d = null,
              f = !1,
              p = (e, t) => {
                f || (0, S.emitSeq)(e, t);
              },
              h = () => (l ? (l.duration() - l.time()) / l.timeScale() : 0);
            function m() {
              let e = document.getElementById("coconut-sequence");
              (e &&
                k.default.set(e, {
                  zIndex: 30,
                }),
                d ||
                  (((d =
                    document.createElement("div")).dataset.coconutBurstCover =
                    ""),
                  k.default.set(d, {
                    position: "fixed",
                    inset: 0,
                    zIndex: 20,
                    backgroundColor: "var(--background)",
                    pointerEvents: "none",
                  }),
                  document.body.appendChild(d)));
            }
            function g() {
              let e = document.getElementById("coconut-sequence");
              (e &&
                k.default.set(e, {
                  clearProps: "zIndex",
                }),
                d?.remove(),
                (d = null));
            }
            function v(e) {
              if (c) return;
              if (((c = !0), m(), "number" == typeof e)) {
                let t = Math.min(
                  Math.max(e, 0),
                  Math.max(
                    0,
                    document.documentElement.scrollHeight - window.innerHeight,
                  ),
                );
                (a?.scrollTo(t, {
                  immediate: !0,
                  force: !0,
                  lock: !0,
                }),
                  window.scrollTo(0, t));
              }
              a?.stop();
              let t = document.getElementById("coconut-canvas-pin");
              t &&
                k.default.set(t, {
                  position: "fixed",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100vh",
                  zIndex: 2,
                });
            }
            function x() {
              if (!c) return;
              c = !1;
              let e = document.getElementById("coconut-canvas-pin");
              (e &&
                k.default.set(e, {
                  clearProps: "position,top,left,width,height,zIndex",
                }),
                a?.start());
            }
            return {
              open: function (a) {
                u ||
                  ((u = !0),
                  l?.kill(),
                  v(a),
                  (f = !1),
                  o?.current?.start(),
                  p(S.SEQ.shake),
                  (l = k.default.timeline({
                    defaults: {
                      ease: "power2.inOut",
                      overwrite: !1,
                    },
                    onComplete: x,
                  })).to(r.current.scale, {
                    x: 0,
                    y: 0,
                    z: 0,
                    duration: 1.2,
                    ease: "power2.in",
                  }),
                  l.to(
                    t.current.position,
                    {
                      x: 1.35,
                      duration: 1.6,
                      ease: "power2.in",
                      onStart: () =>
                        p(S.SEQ.burst, {
                          budget: h(),
                        }),
                    },
                    ">-0.2",
                  ),
                  l.to(
                    e.current.position,
                    {
                      x: -1.35,
                      duration: 1.6,
                      ease: "power2.in",
                    },
                    "<",
                  ),
                  l.add(() => o?.current?.stop(), "<"),
                  l.fromTo(
                    n.current.scale,
                    {
                      x: 0,
                      y: 0,
                      z: 0,
                    },
                    {
                      x: 3,
                      y: 3,
                      z: 3,
                      duration: 1.4,
                      ease: "back.out(1.6)",
                      onStart: () =>
                        p(S.SEQ.can, {
                          budget: h(),
                        }),
                    },
                    "<0.3",
                  ),
                  l.set(
                    n.current.rotation,
                    {
                      x: 0,
                      y: 0,
                      z: 0,
                    },
                    "<",
                  ),
                  l.to(
                    i.current.rotation,
                    {
                      z: (0, s.degToRad)(-60),
                      duration: 1.4,
                      ease: "back.out(1.6)",
                    },
                    "<",
                  ));
              },
              close: function (e) {
                if (!u) return void e?.();
                ((u = !1),
                  (f = !0),
                  (0, S.emitSeq)(S.SEQ.reset),
                  o?.current?.stop(),
                  v());
                let t = () => {
                  (x(), e?.());
                };
                l
                  ? (l.eventCallback("onReverseComplete", t),
                    l.timeScale(1.2).reverse())
                  : t();
              },
              kill: function () {
                (l?.kill(),
                  (l = null),
                  (u = !1),
                  (f = !0),
                  (0, S.emitSeq)(S.SEQ.reset),
                  o?.current?.stop(),
                  x(),
                  g());
              },
              showCover: m,
              hideCover: g,
              isOpen: () => u,
            };
          })({
            coconutWithWater: t,
            coconutEmpty: n,
            coconutMilk: o,
            can: i,
            shakeControl: a,
            coconut: e,
            lenis: c,
          }),
          d = k.default.timeline({
            scrollTrigger: {
              trigger: "#coconut-sequence",
              start: "top top",
              end: () => E(),
              markers: !1,
              scrub: !0,
            },
          });
        (d.to(e.current.rotation, {
          y: (0, s.degToRad)(90),
          z: (0, s.degToRad)(-10),
          x: (0, s.degToRad)(-10),
          duration: 1,
          ease: "power2.inOut",
        }),
          d.to(
            n.current.position,
            {
              x: 1,
              duration: 1.5,
              ease: "power2.inOut",
            },
            "<+.5",
          ),
          d.to(
            n.current.rotation,
            {
              x: (0, s.degToRad)(-360),
              y: (0, s.degToRad)(120.6),
              duration: 1.5,
              ease: "power2.inOut",
            },
            "<",
          ),
          d.to(
            u.position,
            {
              z: 3.5,
              duration: 1,
              ease: "power2.inOut",
            },
            "<",
          ),
          d.to(
            t.current.rotation,
            {
              z: (0, s.degToRad)(8),
              x: (0, s.degToRad)(-365),
              duration: 1,
              ease: "power2.inOut",
            },
            "<",
          ),
          d.to(t.current, {
            duration: 0.5,
          }),
          d.to(e.current.rotation, {
            x: 0,
            y: 0,
            z: 0,
            duration: 1,
            ease: "power2.inOut",
          }),
          d.to(
            u.position,
            {
              z: r,
              duration: 1,
              ease: "power2.inOut",
            },
            "<",
          ),
          d.to(
            n.current.position,
            {
              x: 0,
              y: 0,
              z: 0,
              duration: 1,
              ease: "power2.inOut",
            },
            "<",
          ),
          d.to(
            n.current.rotation,
            {
              x: 0,
              y: 0,
              z: 0,
              duration: 1,
              ease: "power2.inOut",
            },
            "<",
          ),
          d.to(
            t.current.rotation,
            {
              x: 0,
              y: 0,
              z: 0,
              duration: 1,
              ease: "power2.inOut",
            },
            "<",
          ),
          d.to(e.current.rotation, {
            z: (0, s.degToRad)(30),
          }));
        let f = d.scrollTrigger,
          p = T.default.create({
            trigger: "#coconut-sequence",
            start: "top top",
            endTrigger: "#introduction",
            end: "top top",
            onToggle: (e) => (e.isActive ? l.showCover() : l.hideCover()),
          }),
          h = T.default.create({
            trigger: "#coconut-sequence",
            start: "top top",
            end: () => E(),
            onLeave: (o) => {
              (f.disable(!1),
                k.default.set(e.current.rotation, {
                  x: 0,
                  y: 0,
                  z: (0, s.degToRad)(30),
                }),
                k.default.set(n.current.position, {
                  x: 0,
                  y: 0,
                  z: 0,
                }),
                k.default.set(n.current.rotation, {
                  x: 0,
                  y: 0,
                  z: 0,
                }),
                k.default.set(t.current.rotation, {
                  x: 0,
                  y: 0,
                  z: 0,
                }),
                k.default.set(t.current.position, {
                  x: 0,
                  y: 0,
                  z: 0,
                }),
                k.default.set(u.position, {
                  z: r,
                }),
                l.open(o.end + 1));
            },
            onEnterBack: () => {
              (k.default.set(i.current.rotation, {
                z: 0,
              }),
                l.close(() => {
                  (f.enable(!1), f.update());
                }));
            },
          }),
          m = k.default.timeline({
            scrollTrigger: {
              trigger: "#coconut-sequence",
              start: () => E(),
              end: "bottom bottom",
              scrub: 0.6,
            },
          });
        return (
          m.fromTo(
            i.current.rotation,
            {
              z: 0,
            },
            {
              z: (0, s.degToRad)(720),
              ease: "none",
              duration: 1,
            },
          ),
          () => {
            (p.kill(),
              h.kill(),
              m.scrollTrigger?.kill(),
              m.kill(),
              d.kill(),
              l.kill());
          }
        );
      }, [e, n, t, o, i, a, u, c]),
      null
    );
  }
  "scrollRestoration" in history && (history.scrollRestoration = "manual");
  var M = e.i(69756);
  function N({ children: e, intensity: n = 8 }) {
    let o = (0, r.useRef)(),
      i = (0, M.default)();
    return (
      (0, c.useFrame)((e, t) => {
        if (!o.current) return;
        let r = Math.min(t, 1 / 30),
          a = -i.current.y * (0, s.degToRad)(n),
          l = i.current.x * (0, s.degToRad)(n);
        ((o.current.rotation.x += (a - o.current.rotation.x) * r * 3),
          (o.current.rotation.y += (l - o.current.rotation.y) * r * 3));
      }),
      (<group ref={o}>{e}</group>)
    );
  }
  function _({ children: e, controlRef: n, intensity: o = 1 }) {
    let i = (0, r.useRef)();
    return (
      (0, r.useEffect)(() => {
        let e = i.current;
        if (!e) return;
        let t = {
            value: 0,
          },
          r = k.default.timeline({
            repeat: -1,
            repeatRefresh: !0,
            paused: !0,
          });
        return (
          r
            .to(e.position, {
              x: () => k.default.utils.random(-0.018, 0.018) * o * t.value,
              y: () => k.default.utils.random(-0.018, 0.018) * o * t.value,
              duration: 0.04,
              ease: "sine.inOut",
            })
            .to(
              e.rotation,
              {
                x: () =>
                  (0, s.degToRad)(k.default.utils.random(-1.6, 1.6)) *
                  o *
                  t.value,
                y: () =>
                  (0, s.degToRad)(k.default.utils.random(-1.6, 1.6)) *
                  o *
                  t.value,
                z: () =>
                  (0, s.degToRad)(k.default.utils.random(-2.2, 2.2)) *
                  o *
                  t.value,
                duration: 0.04,
                ease: "sine.inOut",
              },
              "<",
            ),
          n &&
            (n.current = {
              start: () => {
                (r.play(),
                  k.default.to(t, {
                    value: 1,
                    duration: 0.6,
                    ease: "power2.out",
                    overwrite: !0,
                  }));
              },
              stop: () => {
                k.default.to(t, {
                  value: 0,
                  duration: 0.5,
                  ease: "power2.in",
                  overwrite: !0,
                  onComplete: () => {
                    (r.pause(),
                      k.default.to(e.position, {
                        x: 0,
                        y: 0,
                        z: 0,
                        duration: 0.3,
                      }),
                      k.default.to(e.rotation, {
                        x: 0,
                        y: 0,
                        z: 0,
                        duration: 0.3,
                      }));
                  },
                });
              },
            }),
          () => {
            (r.kill(),
              k.default.killTweensOf(t),
              k.default.killTweensOf(e.position),
              k.default.killTweensOf(e.rotation),
              n && (n.current = null));
          }
        );
      }, [n, o]),
      (<group ref={i}>{e}</group>)
    );
  }
  var P = e.i(12263),
    A = e.i(23652),
    R = e.i(914);
  e.s(
    [
      "default",
      0,
      function ({ children: e }) {
        let i = (0, r.useRef)(),
          a = (0, r.useRef)(),
          l = (0, r.useRef)(),
          s = (0, r.useRef)(),
          u = (0, r.useRef)(),
          c = (0, r.useRef)(null),
          d = (0, r.useRef)(null),
          f = (0, r.useRef)(null),
          [p, h] = (0, r.useState)(null),
          m = (0, A.default)(c);
        return (
          (0, r.useLayoutEffect)(() => {
            let e = f.current;
            if (!e) return;
            let t = () => h(e.offsetHeight);
            t();
            let r = new ResizeObserver(t);
            return (r.observe(e), () => r.disconnect());
          }, []),
          (
            <div
              ref={c}
              id={"coconut-sequence"}
              className={"z-1 w-full relative"}
              style={{
                height: p ? `${p}px` : "620vh",
              }}
            >
              {
                <div
                  id={"coconut-canvas-pin"}
                  className={
                    "h-screen  sticky z-2 pointer-events-none! left-0 top-0 w-full"
                  }
                >
                  {
                    <n.Canvas
                      frameloop={m ? "always" : "never"}
                      dpr={[1, 2]}
                      camera={{
                        position: [0, 0, 5],
                        fov: 45,
                      }}
                      className={"h-full w-full"}
                      eventSource={c}
                      eventPrefix={"client"}
                    >
                      {
                        <r.Suspense fallback={null}>
                          {<ambientLight intensity={0.4} />}
                          {
                            <N intensity={15}>
                              {(0, t.jsx)(_, {
                                controlRef: d,
                                intensity: 1.6,
                                children: (0, t.jsx)(y, {
                                  coconut: l,
                                  coconutWithWater: i,
                                  coconutEmpty: a,
                                  coconutMilk: s,
                                  can: u,
                                }),
                              })}
                            </N>
                          }
                          {
                            <o.Environment
                              files={R.HDRI}
                              environmentIntensity={0.4}
                            />
                          }
                          {<P.default />}
                          {
                            <C
                              coconut={l}
                              coconutWithWater={i}
                              coconutEmpty={a}
                              coconutMilk={s}
                              can={u}
                              shakeControl={d}
                            />
                          }
                        </r.Suspense>
                      }
                    </n.Canvas>
                  }
                </div>
              }
              {
                <div
                  ref={f}
                  className={
                    "h-fit w-full max-md:overflow-x-clip absolute pointer-events-auto top-0 left-0"
                  }
                >
                  {e}
                </div>
              }
            </div>
          )
        );
      },
    ],
    42441,
  );
};
