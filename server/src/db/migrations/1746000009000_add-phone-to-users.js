exports.up = (pgm) => {
  pgm.addColumns('users', {
    phone: { type: 'varchar(20)' }
  })
}

exports.down = (pgm) => {
  pgm.dropColumns('users', ['phone'])
}
