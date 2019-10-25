import Identifier from './Identifier';

export default class Entity<T extends Identifier<any>> {
  id: T;

  constructor(id: T) {
    this.id = id;
  }

  equals(object?: Entity<any>): boolean {
    if (object === null || object === undefined) {
      return false;
    }
    if (!(object instanceof Entity)) {
      return false;
    }
    return this.id.equals(object.id);
  }
}
