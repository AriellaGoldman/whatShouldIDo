import web
import status

# try to connect to the config database
db_vars = {
  'dbn': 'sqlite',
  'db': 'wsid.db'
}
conf_db = web.database(**db_vars)

def select(table, *args, **kwargs):
  return conf_db.select(table, *args, **kwargs)

def select_one(table, *args, **kwargs):
  res = select(table, *args, **kwargs)
  for row in res:
    return row
  return None

def delete(table, *args, **kwargs):
  return conf_db.delete(table, *args, **kwargs)

def insert(table, *args, **kwargs):
  return conf_db.insert(table, *args, **kwargs)

def update(table, *args, **kwargs):
  return conf_db.update(table, *args, **kwargs)


def get_sess():
  sess_key = web.cookies().get('wsid_login')
  if sess_key is None:
    raise status.ApiError('401 Not Logged In')
  
  sess = select_one('sessions JOIN users ON (sessions.uid = users.id)', where='sess=$s', vars={'s': sess_key})
  if sess is None:
    raise status.ApiError('401 Invalid Session')
  return sess

print "created ConMgr"
