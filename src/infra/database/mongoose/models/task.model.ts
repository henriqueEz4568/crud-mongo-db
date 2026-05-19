import { Schema, model, models } from "mongoose";

import { Task, TaskStatus } from "../../../../domain/tasks/task";

const taskStatuses: TaskStatus[] = ["pending", "in_progress", "done"];

const taskSchema = new Schema<Task>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      enum: taskStatuses,
      default: "pending",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const TaskModel = models.Task || model<Task>("Task", taskSchema);
