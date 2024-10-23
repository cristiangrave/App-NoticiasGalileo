import { Injectable } from '@nestjs/common';
import { extname } from 'path';

@Injectable()
export class UploadService {

  uploadImage(file: Express.Multer.File): string {
    
    // Si no se sube archivo solo se devuelve valor Null
    if (!file) {
      return null;
    }

    // Generar un nombre aleatorio para la imagen
    const randomName = Array(32)
      .fill(null)
      .map(() => (Math.round(Math.random() * 16)).toString(16))
      .join('');

    const fileName = `${randomName}${extname(file.originalname)}`;

    const filePath = `/Backend/src/uploads/${fileName}`;

    // Retornamos el nombre generado
    return fileName;
  }
}
