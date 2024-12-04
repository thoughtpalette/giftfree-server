import { PrismaService } from 'nestjs-prisma';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ListsService {
    private readonly lists: any[]

    constructor(
        private prisma: PrismaService,
    ) {}

//   updateUser(userId: string, newUserData: UpdateUserInput) {
//     return this.prisma.user.update({
//       data: newUserData,
//       where: {
//         id: userId,
//       },
//     });
//   }

//   async changePassword(
//     userId: string,
//     userPassword: string,
//     changePassword: ChangePasswordInput,
//   ) {
//     const passwordValid = await this.passwordService.validatePassword(
//       changePassword.oldPassword,
//       userPassword,
//     );

//     if (!passwordValid) {
//       throw new BadRequestException('Invalid password');
//     }

//     const hashedPassword = await this.passwordService.hashPassword(
//       changePassword.newPassword,
//     );

//     return this.prisma.user.update({
//       data: {
//         password: hashedPassword,
//       },
//       where: { id: userId },
//     });
//   }
}
