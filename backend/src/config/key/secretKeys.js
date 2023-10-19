import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT;
const database_url = process.env.database_url;

export { PORT, database_url };
