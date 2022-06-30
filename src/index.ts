
export interface Sink<T> {
  (source: AsyncIterable<T>): Promise<void>
}

export interface Source<T> {
  (source: AsyncIterable<T>): Promise<void>
}

export interface Duplex<T> {
  source: Source<T>
  sink: Sink<T>
}
