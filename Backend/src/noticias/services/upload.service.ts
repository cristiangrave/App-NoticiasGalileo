import { Injectable } from '@nestjs/common';

@Injectable()
export class UploadService {

  uploadImage(file: Express.Multer.File): string {
    
    // Si no se sube archivo solo se devuelve valor Null
    if (!file) {
      return null;
    }

    // Retornamos el nombre generado
    return file.filename;
  }
}
