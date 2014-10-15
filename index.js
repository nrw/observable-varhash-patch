var ObservPatch = require('observable-patch')
var Varhash = require('observ-varhash')
var Observify = require('observify')

module.exports = VarhashPatch

function VarhashPatch (base, patched) {
  var first = Varhash(base, simpleAdd)
  var last = Varhash(patched, simpleAdd)
  var diff = ObservPatch(first, last)

  return {
    first: first,
    last: last,
    patch: diff.patch,
    // api
    exists: exists,
    put: last.put,
    get: last.get,
    delete: last.delete
  }

  function exists (id) {
    return !!last.get(id)
  }
}

// convert
function simpleAdd (val, key) {
  return Varhash(val, observify)
}

function observify (val, key) {
  return Observify(val)
}