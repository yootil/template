import { describe, it } from 'mocha';
import { expect } from 'chai'
import { foo } from '@yootil/template/index';

describe('sanity', () => {
  it('foo() should return bar', () => {
    expect(foo()).to.deep.equal('bar');
  });
});