const users = [
  {
    id: 1,
    username: 'Admin',
    role: 'admin',
    email: 'admin@admin.com',
    password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW'
  },
  {
    username: 'User',
    role: 'user',
    email: 'user@user.com',
    password: '$2a$08$Y8Abi8jXvsXyqm.rmp0B.uQBA5qUz7T6Ghlg/CvVr/gLxYj5UAZVO'
  }
]

const loginBody = {
  email: "admin@admin.com",
  password: "secret_admin"
}

const loginBodyWrongPassword = {
  email: "admin@admin.com",
  password: "secret"
}

const loginBodyWrongEmail = {
  email: "admin",
  password: "secret_admin"
}

const loginBodyWithoutEmail = {
  password: "secret_admin"
}

const loginBodyWithoutPassword = {
  email: "admin@admin.com",
}

export {
  users,
  loginBody,
  loginBodyWithoutEmail,
  loginBodyWithoutPassword,
  loginBodyWrongPassword,
  loginBodyWrongEmail
}