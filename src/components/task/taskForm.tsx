// src/features/tasks/components/TaskForm.tsx

"use client";

import { useForm } from "@tanstack/react-form";
import { useNavigate } from "react-router";
import type { CreateTaskDto } from "../../types/entities";

type TaskFormProps = {
  initialValues: CreateTaskDto;
  submitLabel: string;
  onSubmit: (values: CreateTaskDto) => Promise<void>;
};

export function TaskForm({ initialValues, submitLabel, onSubmit }: TaskFormProps) {
  const navigate = useNavigate();

  const form = useForm({
    defaultValues: initialValues,
    onSubmit: async ({ value }) => {
      await onSubmit(value);
      navigate("/dashboard");
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}
      className="space-y-6"
    >
      {/* Task */}
      <form.Field
        name="task"
        validators={{
          onChange: ({ value }) =>
            value.trim().length < 3
              ? "Task must be at least 3 characters."
              : undefined,
        }}
      >
        {(field) => (
          <div>
            <label className="block mb-1 font-medium">Task</label>

            <input
              type="text"
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
              className="border rounded p-2 w-full"
            />

            {field.state.meta.errors.length > 0 && (
              <p className="text-sm text-red-600">
                {field.state.meta.errors[0]}
              </p>
            )}
          </div>
        )}
      </form.Field>

      {/* Description */}
      <form.Field
        name="description"
        validators={{
          onChange: ({ value }) =>
            value.trim().length < 5
              ? "Description must be at least 5 characters."
              : undefined,
        }}
      >
        {(field) => (
          <div>
            <label className="block mb-1 font-medium">Description</label>

            <textarea
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
              className="border rounded p-2 w-full"
              rows={4}
            />

            {field.state.meta.errors.length > 0 && (
              <p className="text-sm text-red-600">
                {field.state.meta.errors[0]}
              </p>
            )}
          </div>
        )}
      </form.Field>

      {/* Status */}
      <form.Field name="status">
        {(field) => (
          <div>
            <label className="block mb-1 font-medium">Status</label>

            <select
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
              className="border rounded p-2 w-full"
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
        )}
      </form.Field>

      <button
        type="submit"
        disabled={form.state.isSubmitting}
        className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
      >
        {form.state.isSubmitting ? "Saving..." : submitLabel}
      </button>
    </form>
  );
}