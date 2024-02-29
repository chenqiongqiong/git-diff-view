export class Cache<K, V> extends Map<K, V> {
  #keyArray: K[] = [];

  #maxLength = 30;

  setMaxLength(length: number) {
    this.#maxLength = length;
    this._checkLength();
  }

  set(key: K, value: V): this {
    if (this.has(key)) return this;
    this.#keyArray.push(key);
    this._checkLength();
    return super.set(key, value);
  }

  _checkLength() {
    while (this.#keyArray.length > this.#maxLength) {
      const key = this.#keyArray.shift();
      this.delete(key);
    }
  }
}