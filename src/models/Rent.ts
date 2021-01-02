import {
  Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn,
} from 'typeorm';

import User from './User';
import Movie from './Movie';

@Entity('rents')
class Rent {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  user_id: string;

  @OneToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column()
  movie_id: string;

  @OneToOne(() => Movie)
  @JoinColumn({ name: 'movie_id' })
  movie: Movie;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
};

export default Rent;
