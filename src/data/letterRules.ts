import { OverlapRule } from '../types';

// Default overlap settings
export const DEFAULT_OVERLAP: OverlapRule = {
  minOverlap: 0.04,
  maxOverlap: 0.12,
};

// Letter-specific overlap rules
export const LETTER_OVERLAP_RULES: Record<string, OverlapRule> = {
  a: {
    minOverlap: 0.04,
    maxOverlap: 0.16,
    specialCases: {
      b: 0.18,
      c: 0.18,
      f: 0.18,
      g: 0.24,
      h: 0.22,
      i: 0.2,
      j: 0.28,
      k: 0.2,
      m: 0.14,
      n: 0.18,
      o: 0.25,
      p: 0.22,
      q: 0.22,
      r: 0.18,
      s: 0.24,
      t: 0.36,
      u: 0.24,
      v: 0.24,
      x: 0.22,
      y: 0.18,
      z: 0.26,
    },
  },
  b: {
    minOverlap: 0.04,
    maxOverlap: 0.18,
    specialCases: {
      a: 0.12,
      l: 0.14,
      o: 0.14,
      p: 0.22,
      t: 0.26,
    },
  },
  c: {
    minOverlap: 0.04,
    maxOverlap: 0.18,
    specialCases: {
      a: 0.16,
      e: 0.18,
      f: 0.12,
      g: 0.14,
      h: 0.14,
      l: 0.16,
      n: 0.1,
      p: 0.22,
      t: 0.24,
      r: 0.16,
      y: 0.16, 
    },
  },
  d: {
    minOverlap: 0.04,
    maxOverlap: 0.18,
    specialCases: {
      a: 0.12,
      e: 0.12,
      i: 0.12,
      o: 0.12,
      p: 0.24,
      r: 0.11,
      t: 0.26,
      y: 0.10,
      v: 0.20,
      x: 0.14,
    },
  },
  e: {
    minOverlap: 0.04,
    maxOverlap: 0.12,
    specialCases: {
      a: 0.19,
      c: 0.22,
      d: 0.16,
      e: 0.2,
      g: 0.2,
      i: 0.2,
      j: 0.22,
      k: 0.16,
      l: 0.2,
      m: 0.19,
      n: 0.16,
      o: 0.20,
      p: 0.20,
      r: 0.18,
      s: 0.22,
      t: 0.28,
      u: 0.2,
      v: 0.22,
      w: 0.18,
      x: 0.2,
      y: 0.15,
      z: 0.2,
    },
  },
  f: {
    minOverlap: 0.04,
    maxOverlap: 0.2,
    specialCases: {
      a: 0.12,
      e: 0.14,
      f: 0.16,
      i: 0.18,
      k: 0.16,
      l: 0.10,
      r: 0.16,
    },
  },
  g: {
    minOverlap: 0.04,
    maxOverlap: 0.12,
    specialCases: {
      b: 0.1,
      c: 0.14,
      d: 0.14,
      e: 0.12,
      g: 0.18,
      i: 0.16,
      j: 0.19,
      r: 0.1,
      s: 0.16,
      t: 0.22,
      u: 0.12,
      v: 0.14,
      y: 0.14,
    },  
  },
  h: {
    minOverlap: 0.04,
    maxOverlap: 0.1,
    specialCases: {
      a: 0.06,
      e: 0.06,
      i: 0.14,
      j: 0.14,
      o: 0.10,
      s: 0.18,
      t: 0.2,
    },
  },
  i: {
    minOverlap: 0.04,
    maxOverlap: 0.19,
    specialCases: {
      c: 0.24,
      f: 0.14,
      i: 0.3,
      j: 0.26,
      l: 0.2,
      n: 0.18,
      o: 0.22,
      p: 0.26,
      q: 0.24,
      r: 0.2,
      s: 0.26,
      t: 0.4,
      u: 0.25,
      v: 0.24,
    },
  },
  j: {
    minOverlap: 0.04,
    maxOverlap: 0.12,
    specialCases: {
      d: 0.08,
      e: 0.08,
      i: 0.16,
      j: 0.2,
      p: 0.19,
      s: 0.17,
      t: 0.18,
      v: 0.14,
      x: 0.09,
    },
  },
  k: {
    minOverlap: 0.04,
    maxOverlap: 0.18,
    specialCases: {
      a: 0.16,
      c: 0.2,
      j: 0.26,
      o: 0.22,
      p: 0.2,
      s: 0.22,
      t: 0.26,
      u: 0.24,
    },
  },
  l: {
    minOverlap: 0.04,
    maxOverlap: 0.22,
    specialCases: {
      a: 0.28,
      i: 0.22,
      j: 0.28,
      k: 0.28,
      l: 0.26,
      s: 0.34,
      t: 0.43,
      o: 0.34,
      p: 0.3,
      y: 0.26,
      v: 0.3,
    },
  },
  m: {
    minOverlap: 0.04,
    maxOverlap: 0.17,
    specialCases: {
      e: 0.15,
      i: 0.19,
      m: 0.17,
      o: 0.16,
      p: 0.20,
      s: 0.2,
      t: 0.26,
      v: 0.19,
    },
  },
  
  
  n: {
    minOverlap: 0.04,
    maxOverlap: 0.08,
    specialCases: {
      a: 0.14,
      d: 0.06,
      e: 0.06,
      g: 0.08,
      i: 0.14,
      j: 0.18,
      k: 0.12,
      n: 0.08,
      o: 0.12,
      s: 0.16,
      t: 0.20,
      v: 0.2,
    },
  },
  
  o: {
    minOverlap: 0.04,
    maxOverlap: 0.1,
    specialCases: {
      d: 0.07,
      j: 0.14,
      n: 0.06,
      p: 0.10,
      r: 0.08,
      s: 0.17,
      t: 0.2,
      w: 0.10,
    },
  },
  p: {
    minOverlap: 0.04,
    maxOverlap: 0.2,
    specialCases: {
      a: 0.16,
      e: 0.16,
      i: 0.22,
      o: 0.26,
      p: 0.3,
      s: 0.25,
      t: 0.26,
    },
  },

  q: {
    minOverlap: 0.04,
    maxOverlap: 0.14,
    specialCases: {
      a: 0.08,
      e: 0.17,
      f: 0.1,
      h: 0.1,
      l: 0.1,
      m: 0.1,
      n: 0.1,
      o: 0.12,
      r: 0.12,
      t: 0.18,
      u: 0.06,
    },
  },
  r: {
    minOverlap: 0.04,
    maxOverlap: 0.2,
    specialCases: {
      a: 0.18,
      d: 0.14,
      s: 0.18,
      t: 0.26,
      v: 0.24,
    },
  },
  s: {
    minOverlap: 0.04,
    maxOverlap: 0.12,
    specialCases: {
      a: 0.09,
      f: 0.09,
      g: 0.12,
      h: 0.11,
      i: 0.18,
      j: 0.16,
      l: 0.08,
      m: 0.1,
      n: 0.16,
      p: 0.12,
      o: 0.14,
      q: 0.18,
      t: 0.22,
      s: 0.24,
      v: 0.18,
    },
  },
  t: {
    minOverlap: 0.04,
    maxOverlap: 0.16,
    specialCases: {
      b: 0.1,
      d: 0.12,
      e: 0.08,
      f: 0.1,
      i: 0.2,
      l: 0.10,
      n: 0.1,
      o: 0.2,
      r: 0.10,
      s: 0.2,
      t: 0.22,
      v: 0.12,
    },
    
  },
  u: {
    minOverlap: 0.04,
    maxOverlap: 0.08,
    specialCases: {
      c: 0.14,
      d: 0.1,
      g: 0.16,
      i: 0.12,
      t: 0.18,
    },
    
  },

  v: {
    minOverlap: 0.04,
    maxOverlap: 0.09,
    specialCases: {
      c: 0.14,
      d: 0.14,
      e: 0.05,
      f: 0.06,
      g: 0.16,
      i: 0.10,
      n: 0.07,
      o: 0.16,
      p: 0.12,
      q: 0.16,
      s: 0.18,
      t: 0.16,
      z: 0.1,
    },
  },
  
  w: {
    minOverlap: 0.04,
    maxOverlap: 0.09,
    specialCases: {
      a: 0.05,
      i: 0.13,
      j: 0.12,
      n: 0.06,
      o: 0.13,
      s: 0.16,
      t: 0.16,
    },
  },
  x: {
    minOverlap: 0.04,
    maxOverlap: 0.2,
    specialCases: {
      e: 0.18,
      t: 0.24,
    },
    
  },
  y: {
    minOverlap: 0.04,
    maxOverlap: 0.1,
    specialCases: {
      a: 0.08,
      b: 0.1,
      e: 0.04,
      f: 0.08,
      k: 0.08,
      m: 0.04,
      n: 0.06,
      s: 0.18,
      t: 0.16,
      u: 0.12,
      p: 0.12,
      v: 0.1,
    },
  },
  z: {
    minOverlap: 0.04,
    maxOverlap: 0.2,
    specialCases: {
      v: 0.14,
      y: 0.12,
      z: 0.10,
    },
  },
};

// Exceptions to normal overlapping rules
export const overlapExceptions: Record<string, string[]> = {
  
  d: [],
};

// Letter-specific rotation rules
export const LETTER_ROTATION_RULES: Record<string, Record<string, number>> = {
  r: {
    c: -0, // Specific rotation for 'c' following 'r'
  },
};
