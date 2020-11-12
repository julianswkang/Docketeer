import { exec } from "child_process";
import path from "path";
import { config } from "dotenv";

config();

export default () => {
  const directory =
    process.env.NODE_ENV === "development"
      ? path.resolve(__dirname, "..", "..", "database")
      : path.join(path.dirname(__dirname), "database");

  exec(`cd ${directory} && docker-compose up -d`, (error, stdout, stderr) => {
    if (error) {
      alert(`${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(stdout);
  });
};
