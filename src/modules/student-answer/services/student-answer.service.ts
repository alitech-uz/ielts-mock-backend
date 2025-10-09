import { Injectable } from '@nestjs/common';
import { CreateStudentAnswerWritingInput } from '../dto';

@Injectable()
export class StudentAnswerService {
  async createWriting(input: CreateStudentAnswerWritingInput) {
    console.log(input);
  }
}
