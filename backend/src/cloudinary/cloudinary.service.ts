import { BadRequestException, HttpException, Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryResponse } from './cloudinary.response';
import * as streamifier from 'streamifier';

@Injectable()
export class CloudinaryService {

  private readonly logger = new Logger(CloudinaryService.name)

  async uploadFile(file: Express.Multer.File): Promise<CloudinaryResponse> {
    try {
      const result = await new Promise<CloudinaryResponse>((res, rej) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          (error, result) => {
            if (error) {
              this.logger.error('Error during Cloudinary upload', error)
              return rej(error);
            }
            res(result);
          },
        );
        streamifier.createReadStream(file.buffer).pipe(uploadStream);
      });

      return result;

    } catch (error) {
      if (error.http_code === 400) {
        throw new BadRequestException(
          'Invalid file or Cloudinary request failed',
        );
      }
      this.logger.error('Unexpected error during Cloudinary upload', error);
      throw new InternalServerErrorException(`Error uploading file to Cloudinary: ${error.message}`);
    }
  }
}
