import { readFile } from "fs";
export const loadData = (folder: string, file: string): Promise<string> => {
  return new Promise((res, rej) => {
    readFile(`./src/${folder}/${file}`, (err, data) => {
      if (err) {
        return rej(err);
      }

      return res(data.toString());
    });
  });
};
