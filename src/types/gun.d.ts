declare module 'gun' {
  type GunCallback = (data: unknown, key?: string) => void

  interface GunNode {
    get(key: string): GunNode
    put(data: unknown, callback?: GunCallback): GunNode
    on(callback: GunCallback): GunNode
    once(callback: GunCallback): GunNode
    map(): GunNode
    off(): GunNode
  }

  interface GunOptions {
    peers?: string[]
    localStorage?: boolean
  }

  interface GunStatic {
    (options?: GunOptions): GunNode
  }

  const Gun: GunStatic
  export default Gun
}
