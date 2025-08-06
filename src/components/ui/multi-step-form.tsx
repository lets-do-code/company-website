'use client';

import { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CheckCircle2, X } from 'lucide-react';

const formSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  phoneNumber: z.string().min(10, 'Phone number must be at least 10 digits'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(5, 'Message must be at least 5 characters'),
});

type FormData = z.infer<typeof formSchema>;

interface SingleStepFormProps {
  open?: boolean;
  setOpen?: (open: boolean) => void;
  className?: string;
  onSubmit?: (data: FormData) => void;
}

export default function SingleStepForm({
  className,
  onSubmit,
  setOpen
}: SingleStepFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const handleFormSubmit = (data: FormData) => {
    setIsSubmitting(true);

    setTimeout(() => {
      onSubmit?.(data);
      setIsSubmitting(false);
      setIsComplete(true);
    }, 1500);
  };

  return (
    <div className='w-full px-4'>

      <div
        className={cn(
          'bg-card/40 mx-auto w-full max-w-md rounded-lg p-6 shadow-lg',
          className,
        )}
      >
        {!isComplete ? (
          <>
            <div className="mb-6 flex justify-between">
              <h2 className="text-xl font-bold">
                Tell us about yourself
              </h2>

              <X onClick={() => setOpen && setOpen(false)} className="h-6 w-6 cursor-pointer" />

            </div>

            <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
              <div className="space-y-2 flex flex-col  gap-1 ">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  type="text"
                  placeholder="John"
                  {...register('firstName')}
                  className={cn(errors.firstName && 'border-destructive')}
                />
                {errors.firstName && (
                  <p className="text-destructive text-sm">
                    {errors.firstName.message}
                  </p>
                )}
              </div>

              <div className="space-y-2 flex flex-col  gap-1">
                <Label htmlFor="phoneNumber">Phone Number</Label>
                <Input
                  id="phoneNumber"
                  type="text"
                  placeholder="9876543210"
                  {...register('phoneNumber')}
                  className={cn(errors.phoneNumber && 'border-destructive')}
                />
                {errors.phoneNumber && (
                  <p className="text-destructive text-sm">
                    {errors.phoneNumber.message}
                  </p>
                )}
              </div>

              <div className="space-y-2 flex flex-col  gap-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john.doe@example.com"
                  {...register('email')}
                  className={cn(errors.email && 'border-destructive')}
                />
                {errors.email && (
                  <p className="text-destructive text-sm">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="space-y-2 flex flex-col  gap-1">
                <Label htmlFor="message">Message</Label>
                <textarea
                  id="message"
                  placeholder="Enter your message"
                  {...register('message')}
                  className={cn(
                    'min-h-[100px] w-full rounded-md resize-none border px-3 py-2 text-sm',
                    errors.message && 'border-destructive'
                  )}
                />
                {errors.message && (
                  <p className="text-destructive text-sm">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </Button>
            </form>
          </>
        ) : (
          <div className="py-10 text-center">
            <div className="bg-primary/10 mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full">
              <CheckCircle2 className="text-primary h-8 w-8" />
            </div>
            <h2 className="mb-2 text-2xl font-bold">Form Submitted!</h2>
            <p className="text-muted-foreground mb-6">
              Thank you for completing the form. We&apos;ll be in touch soon.
            </p>
            <Button
              onClick={() => {
                reset();
                setIsComplete(false);
                setOpen && setOpen(false)
              }}
            >
              Explore
            </Button>
          </div>
        )}
      </div>
    </div>

  );
}
