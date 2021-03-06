import fetchPro from './fetchPro'
import logger from './logger'
import api from 'SRC/apis'

export function userLogin(args) {
  const formData = new FormData()
  formData.append('username', args.username)
  formData.append('password', args.password)
  return fetchPro(api('rest:login'), {
    method: 'post',
    body: formData
  }).then(response => response.json())
    .catch(() => ({ status: 'fail', result: { msg: 'Network Unavailable!' } }))
    .then(json => {
      if (json.status === 'fail') {
        logger.error(api('rest:login'), json.result.msg)
      }
      return json
    })
}

export function userRegister(args) {
  const formData = new FormData()
  formData.append('username', args.username)
  formData.append('email', args.email)
  formData.append('password', args.password)
  formData.append('birth', args.birth.valueOf())
  formData.append('gender', args.gender)
  formData.append('phone', args.phone)
  return fetchPro(api('rest:register'), {
    method: 'post',
    body: formData
  }).then(response => response.json())
    .catch(() => ({ status: 'fail', result: { msg: 'Network Unavailable!' } }))
    .then(json => {
      if (json.status === 'fail') {
        logger.error(api('rest:register'), json.result.msg)
      }
      return json
    })
}

export function userEdit(args) {
  const formData = new FormData()
  formData.append('username', args.username)
  formData.append('email', args.email)
  formData.append('birth', args.birth.valueOf())
  formData.append('gender', args.gender)
  formData.append('phone', args.phone)
  return fetchPro(api('rest:basicInfo_put'), {
    method: 'put',
    body: formData
  }).then(response => response.json())
    .catch(() => ({ status: 'fail', result: { msg: 'Network Unavailable!' } }))
    .then(json => {
      if (json.status === 'fail') {
        logger.error(api('rest:basicInfo_put'), json.result.msg)
      }
      return json
    })
}
