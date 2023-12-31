import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Comment } from './comments.schema';
import * as mongoose from 'mongoose';

export type TrackDocument = Track & Document;

@Schema()
export class Track {
  @Prop()
  name: string;

  @Prop()
  listens: number;

  @Prop()
  artist: string;
  @Prop()
  text: string;

  @Prop()
  picture: string;
  @Prop()
  audio: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }] })
  comments: Comment[];
}
export const TrackSchema = SchemaFactory.createForClass(Track);
