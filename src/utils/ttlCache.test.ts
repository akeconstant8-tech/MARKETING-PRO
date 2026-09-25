import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { TtlCache } from './ttlCache'

describe('TtlCache', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })
  afterEach(() => {
    vi.useRealTimers()
  })

  it('évince la plus ancienne entrée au-delà de maxSize', () => {
    const cache = new TtlCache<string, number>(3, 1000)
    cache.set('a', 1).set('b', 2).set('c', 3).set('d', 4)
    expect(cache.get('a')).toBeUndefined()
    expect(cache.get('d')).toBe(4)
    expect(cache.size).toBe(3)
  })

  it('réécrire une clé la repasse en plus récente', () => {
    const cache = new TtlCache<string, number>(3, 1000)
    cache.set('a', 1).set('b', 2).set('c', 3)
    cache.set('a', 10).set('d', 4)
    expect(cache.get('b')).toBeUndefined()
    expect(cache.get('a')).toBe(10)
  })

  it('expire les entrées après le TTL et les purge', () => {
    const cache = new TtlCache<string, number>(10, 1000)
    cache.set('x', 1)
    vi.advanceTimersByTime(999)
    expect(cache.get('x')).toBe(1)
    vi.advanceTimersByTime(2)
    expect(cache.get('x')).toBeUndefined()
    cache.set('y', 2)
    vi.advanceTimersByTime(1001)
    expect(cache.size).toBe(0)
  })

  it('clear() vide le cache', () => {
    const cache = new TtlCache<string, number>(10, 1000)
    cache.set('x', 1)
    cache.clear()
    expect(cache.get('x')).toBeUndefined()
  })
})
