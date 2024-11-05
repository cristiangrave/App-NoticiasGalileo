import { Injectable } from '@nestjs/common';

@Injectable()
export class UploadService {

  uploadImage(file: Express.Multer.File): string | null {
    // Si no se sube archivo solo se devuelve valor Null
    if (file) {
      return `/uploads/${file.filename}`;
    } else {
      return null;
    }
  }
}