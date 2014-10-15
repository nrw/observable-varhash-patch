# observable-varhash-patch [![build status](https://secure.travis-ci.org/nrw/observable-varhash-patch.png)](http://travis-ci.org/nrw/observable-varhash-patch)

Uses [observable-patch](https://github.com/nrw/observable-patch) to create an observable patch between two `varhash` objects.

```js
var assert = require('assert')
var VarhashPatch = require('observable-varhash-patch')

var people, first, last

var people = VarhashPatch({}, {})

assert.deepEqual(people.patch(), null)

people.put('kara', {fullname: 'Kara Thrace'})

assert.deepEqual(people.patch(), {
  kara: {fullname: 'Kara Thrace'}
})

people.put('lee', {fullname: 'Lee Adama'})

assert.deepEqual(people.patch(), {
  kara: {
    fullname: 'Kara Thrace'
  },
  lee: {
    fullname: 'Lee Adama'
  }
})

assert.equal(people.exists('lee'), true)
assert.equal(people.exists('kara'), true)
assert.equal(people.exists('saul'), false)
assert.equal(people.exists('d'), false)

people.delete('kara')
assert.equal(people.get('kara'), undefined)
assert.equal(people.exists('kara'), false)

assert.deepEqual(people.patch(), {
  lee: {
    fullname: 'Lee Adama'
  }
})

assert.deepEqual(people.first(), {})

assert.deepEqual(people.last(), {
  lee: {
    fullname: 'Lee Adama'
  }
})
```
