// Cache mémoire borné : au plus `maxSize` entrées, chacune valable `ttlMs`
// millisecondes après son écriture. Remplace les `new Map()` sans limite.
//
// Le TTL est identique pour toutes les entrées et `set()` réinsère toujours la
// clé en fin de Map : l'ordre d'insertion coïncide donc avec l'ordre
// d'expiration, ce qui permet de purger les entrées périmées en ne parcourant
// que le début de la Map. Quand la taille maximale est dépassée, l'entrée la
// plus ancienne est évincée (FIFO).

interface Entry<V> {
  value: V
  expiresAt: number
}

export class TtlCache<K, V> {
  private readonly map = new Map<K, Entry<V>>()
  private readonly maxSize: number
  private readonly ttlMs: number

  constructor(maxSize: number, ttlMs: number) {
    this.maxSize = maxSize
    this.ttlMs = ttlMs
  }

  private purgeExpired(now: number): void {
    for (const [key, entry] of this.map) {
      if (entry.expiresAt > now) break
      this.map.delete(key)
    }
  }

  get(key: K): V | undefined {
    const entry = this.map.get(key)
    if (!entry) return undefined
    if (entry.expiresAt <= Date.now()) {
      this.map.delete(key)
      return undefined
    }
    return entry.value
  }

  set(key: K, value: V): this {
    const now = Date.now()
    this.map.delete(key)
    this.purgeExpired(now)
    this.map.set(key, { value, expiresAt: now + this.ttlMs })
    while (this.map.size > this.maxSize) {
      const oldest = this.map.keys().next()
      if (oldest.done) break
      this.map.delete(oldest.value)
    }
    return this
  }

  clear(): void {
    this.map.clear()
  }

  /** Nombre d'entrées encore valides (les entrées expirées sont purgées au passage). */
  get size(): number {
    this.purgeExpired(Date.now())
    return this.map.size
  }
}
