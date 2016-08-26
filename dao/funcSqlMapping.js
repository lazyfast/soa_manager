var func = {
  insert:'INSERT INTO function_def(track_number,function, create_time) VALUES(?,?,now())',
  update:'update function_def set track_number=?, function=?, update_time=now() where id=?',
  delete: 'delete from function_def where id=?',
  queryById: 'select f.*, a.scm_url, a.api from function_def f, api_func_link l, api_def a where f.id = l.func_id, a.id=api_id, f.id=?',
  queryAll: 'select f.*, a.scm_url, a.api from function_def f, api_func_link l, api_def a where f.id = l.func_id, a.id=api_id limit ?,?'
};

module.exports = func;
