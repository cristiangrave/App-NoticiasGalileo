import { Injectable } from '@nestjs/common';

@Injectable()
export class UploadService {

  uploadImage(file: Express.Multer.File): string {
    

    let imagenPath: string | null = null
    // Si no se sube archivo solo se devuelve valor Null
    if (file) {
      return imagenPath = `/uploads/${file.filename}`;
    } else {
      return null;
    }
  }
}
