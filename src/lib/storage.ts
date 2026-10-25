/** Tiny localStorage wrapper that never throws (private mode, blocked storage). */
export function load<T>(key: string, fallback: T): T {
  try {
    const v = localStorage.getItem('sanatan:' + key)
    return v === null ? fallback : (JSON.parse(v) as T)
  } catch {
    return fallback
  }
}

export function save<T>(key: string, value: T) {
  try {
    localStorage.setItem('sanatan:' + key, JSON.stringify(value))
  } catch {
    /* storage unavailable */
  }
}
