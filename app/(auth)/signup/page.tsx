import { Metadata } from 'next';
import { SignUpForm } from '@/components/auth/signup-form';
import { Container } from '@/components/ui/container';

export const metadata: Metadata = {
  title: 'Sign Up | Ultimate Language Academy',
  description: 'Create an account to get started with Ultimate Language Academy.',
};

export default function SignUpPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-950 dark:to-gray-900 py-32">
      <Container>
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2 font-serif">Create an Account</h1>
            <p className="text-muted-foreground">
              Join Ultimate Language Academy to start your language certification journey
            </p>
          </div>
          <SignUpForm />
        </div>
      </Container>
    </main>
  );
}