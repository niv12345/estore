import { signal, Signal } from '@angular/core';

export class StoreItem<T> {
private readonly _state = signal<T>(null as unknown as T);

protected constructor(initialValue:T){
    this._state.set(initialValue);
}

protected setValue(newValue:T){
    this._state.set(newValue);
}
protected get getValue():T {
    return this._state();
}
protected get value():T {
    return this._state();
}
protected get value$(): Signal<T> {
    return this._state.asReadonly();
}
}