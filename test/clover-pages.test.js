import test from 'ava'
import cloverPages from '..'

// TODO: Implement module test
test('<test-title>', t => {
  const err = t.throws(() => cloverPages(100), TypeError)
  t.is(err.message, 'Expected a string, got number')

  t.is(cloverPages('w'), 'w@zce.me')
  t.is(cloverPages('w', { host: 'wedn.net' }), 'w@wedn.net')
})
