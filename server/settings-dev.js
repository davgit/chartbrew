module.exports = {
  port: 3210,
  secret: process.env.CB_SECRET_DEV,
  client: "http://localhost:3000",
  api: "http://localhost:3210",
  adminMail: process.env.CB_ADMIN_MAIL,
  db: {
    dbName: process.env.CB_DB_NAME_DEV,
    dbUsername: process.env.CB_DB_USERNAME_DEV,
    dbPassword: process.env.CB_DB_PASSWORD_DEV,
    dbHost: process.env.CB_DB_HOST_DEV,
  },
  mailSettings: {
    host: process.env.CB_MAIL_HOST_DEV,
    port: 465,
    secure: true,
    auth: {
      user: process.env.CB_MAIL_USER_DEV,
      pass: process.env.CB_MAIL_PASS_DEV,
    },
  },
  stripe: {
    secret: process.env.CB_DEV_STRIPE_API_KEY,
    plans: {
      basic: "plan_DQbqkJizB5zXPH",
      pro: "plan_DQbrsg8LJgl0Oh",
      member: "plan_DNLZMwyfYtxobm",
    },
  },
  features: {
    community: {
      id: 0,
      name: "community",
      charts: 3,
      members: 1,
      projects: 1,
      connections: 1,
      querySize: 10,
      autoRefresh: 86400,
    },
    basic: {
      id: 1,
      name: "basic",
      charts: 10,
      members: 2,
      projects: 3,
      connections: 5,
      querySize: 30,
      autoRefresh: 3600,
    },
    pro: {
      id: 2,
      name: "pro",
      charts: 20,
      members: 3,
      projects: 10,
      connections: "unlimited",
      querySize: 50,
      autoRefresh: 1800,
    },
  },
  sendgrid: {
    key: process.env.CB_DEV_SENDGRID,
    host: "https://api.sendgrid.com/v3",
    userList: "ead92280-f39b-40d2-b441-02dfb5d20aaf",
    interestedList: "771e002b-354c-4283-ad36-9c2b4fad8088",
    uAccount: 6516,
  },
};
