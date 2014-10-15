var test = require('tape')
var VarhashPatch = require('..')

var people, first, last

test('basic usage', function (t) {
  people = VarhashPatch({}, {})

  t.same(people.patch(), null)

  people.put('kara', {fullname: 'Kara Thrace'})

  t.same(people.patch(), {
    kara: {
      fullname: 'Kara Thrace'
    }
  })

  people.put('lee', {fullname: 'Lee Adama'})

  t.same(people.patch(), {
    kara: {
      fullname: 'Kara Thrace'
    },
    lee: {
      fullname: 'Lee Adama'
    }
  })

  t.equal(people.exists('lee'), true) // bool
  t.equal(people.exists('kara'), true)
  t.equal(people.exists('saul'), false)
  t.equal(people.exists('d'), false)

  people.delete('kara')
  t.equal(people.get('kara'), undefined)
  t.equal(people.exists('kara'), false)

  t.same(people.patch(), {
    lee: {
      fullname: 'Lee Adama'
    }
  })

  t.same(people.first(), {})

  t.same(people.last(), {
    lee: {
      fullname: 'Lee Adama'
    }
  })

  t.end()
})
