import web

class ApiReturn(web.HTTPError):
  def __init__(self, template, *args, **kwargs):
    headers = {'Content-type': 'text/html'}
    status = '200 OK'

    render = web.template.render('./', globals={'hasattr':hasattr})
    xml = getattr(render, template)
    message = xml(*args, **kwargs)
    web.HTTPError.__init__(self, status, headers, message)

class ApiError(web.HTTPError):
  def __init__(self, status):
    headers = {'Content-type': 'text/html'}
    web.HTTPError.__init__(self, status, headers, '')
