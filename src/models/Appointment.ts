import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('appointments')
class Appointment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column() // por padrão é string
  provider: string;

  @Column('timestamp with time zone')
  date: Date;
}

export default Appointment;
