require("dotenv/config");

module.exports = {
  dialect: "postgres",
  host: process.env.POSTGRES_HOST || "localhost",
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASS,
  database: process.env.DB_NAME,
  define: {
    timestamps: true,
    underscored: true,
    underscoreAll: true
  }
};
