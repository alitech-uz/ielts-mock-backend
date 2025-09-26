import { Injectable } from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class FileService {
  private baseUploadPath = path.join(process.cwd(), 'uploads');

  constructor() {
    if (!fs.existsSync(this.baseUploadPath)) {
      fs.mkdirSync(this.baseUploadPath, { recursive: true });
    }
  }

  //   Update
  async upload(
    file: Express.Multer.File,
    folderPath: string = '',
  ): Promise<string> {
    const fileExt = path.extname(file.originalname);
    const fileName = `${uuidv4()}${fileExt}`;

    const staticDir = path.join(this.baseUploadPath, folderPath);
    const filePath = path.join(staticDir, fileName);

    await fs.promises.mkdir(staticDir, { recursive: true });

    await fs.promises.writeFile(filePath, file.buffer);

    return `${folderPath}/${fileName}`;
  }

  //   Delete
  async delete(fileName: string) {
    const filePath = path.join(this.baseUploadPath, fileName);

    fs.unlinkSync(filePath);

    return { message: 'File deleted successfully' };
  }
}
