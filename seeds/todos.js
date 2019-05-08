
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        {id: 1, task: 'Complete To Do List', priority: 5, category:'code', is_complete: false, due_at: '05/10/2019' },
        {id: 2, task: 'Learn Python', priority: 1, category:'code', is_complete: true, due_at: '02/10/2019' },
        {id: 3, task: 'Eat Lunch', priority: 2, category:'home', is_complete: false, due_at: '03/07/2019' },
        {id: 4, task: 'Water the Plants', priority: 4, category:'home', is_complete: false, due_at: '14/07/2019' },
        {id: 5, task: 'Call Scotty', priority: 4, category:'friends', is_complete: true, due_at: '14/12/2019' },
        {id: 6, task: 'Return the Car', priority: 3, category:'friends', is_complete: false, due_at: '22/08/2020' }
      ]);
    });
};
