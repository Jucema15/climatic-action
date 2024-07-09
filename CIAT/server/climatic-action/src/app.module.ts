import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './api/user/user.module';
import { AgronomicActivitiesModule } from './api/agronomic_activities/agronomic_activities.module';
import { ActivitieTypeModule } from './api/activitie_type/activitie_type.module';
import { AgronomicActivitieSuppliesModule } from './api/agronomic_activitie_supplies/agronomic_activitie_supplies.module';
import { SuppliesModule } from './api/supplies/supplies.module';
import { PlotsModule } from './api/plots/plots.module';
import { CropTypeModule } from './api/crop_type/crop_type.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'optimization.sqlite',
      entities: [`${__dirname}/api/**/*.entity{.ts,.js}`],
      synchronize: true,
      migrationsRun: false,
      migrations: [`${__dirname}/migration/**/*.entity{.ts,.js}`],
    }),
    UserModule,
    AgronomicActivitiesModule,
    ActivitieTypeModule,
    AgronomicActivitieSuppliesModule,
    SuppliesModule,
    PlotsModule,
    CropTypeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
