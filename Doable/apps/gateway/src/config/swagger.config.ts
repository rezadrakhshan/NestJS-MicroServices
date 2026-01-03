import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AdminModule } from 'src/rest/admin/admin.module';
import { TaskModule } from 'src/rest/task/task.module';
import { UserModule } from 'src/rest/user/user.module';

export async function swaggerOptions(app, cfg) {
  const swaggerOptions = new DocumentBuilder()
    .setTitle('Doable')
    .setDescription('This is Online TodoAPP')
    .setVersion(`${cfg.version}`)
    .build();

  const document = SwaggerModule.createDocument(app, swaggerOptions);
  const adminDocument = SwaggerModule.createDocument(app, swaggerOptions, {
    include: [AdminModule],
  });
  const userDocument = SwaggerModule.createDocument(app, swaggerOptions, {
    include: [UserModule],
  });
  const taskDocument = SwaggerModule.createDocument(app, swaggerOptions, {
    include: [TaskModule],
  });

  SwaggerModule.setup(`${cfg.version}/docs`, app, document);
  SwaggerModule.setup(`${cfg.version}/docs/admin`, app, adminDocument);
  SwaggerModule.setup(`${cfg.version}/docs/user`, app, userDocument);
  SwaggerModule.setup(`${cfg.version}/docs/task`, app, taskDocument);
}
