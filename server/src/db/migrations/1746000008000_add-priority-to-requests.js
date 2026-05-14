exports.up = (pgm) => {
  pgm.addColumns('requests', {
    priority: { type: 'varchar(20)', notNull: true, default: 'normal' }
  })
}

exports.down = (pgm) => {
  pgm.dropColumns('requests', ['priority'])
}
