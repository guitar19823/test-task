module.exports = (extendable, attachable, joinBy, nameForAttachedData) => ([
  {
    [nameForAttachedData]: attachable.filter(i => !i[joinBy])
  },
  ...extendable.map(i => ({
    ...i,
    [nameForAttachedData]: attachable.filter(j => j[joinBy] === i[joinBy]),
  })),
]);