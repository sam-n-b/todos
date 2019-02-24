
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        {id: 1, task: 'do this', priority: 5, category:'code', is_complete: false, due_at: 1551652345 },
        {id: 2, task: 'do this', priority: 1, category:'code', is_complete: false, due_at: 1553466745 },
        {id: 3, task: 'do this', priority: 2, category:'home', is_complete: false, due_at: 1551652345 },
        {id: 4, task: 'do this', priority: 4, category:'home', is_complete: false, due_at: 1551852345 },
        {id: 5, task: 'do this', priority: 4, category:'friends', is_complete: false, due_at: 1551655345 },
        {id: 6, task: 'do this', priority: 3, category:'friends', is_complete: false, due_at: 1554652345 }
      ]);
    });
};
